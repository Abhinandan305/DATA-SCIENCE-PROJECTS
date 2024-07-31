// Choose the database
use('AMAZONE');

// PART 1: Choose a fresh order and extract the customer location
var selectedOrderResult = db.customers.aggregate([
  { $unwind: "$current_orders" },
  {
    $lookup: {
      from: "products",
      localField: "current_orders.items.product_id",
      foreignField: "_id",
      as: "productData",
    },
  },
  { $unwind: "$productData" },
  { $match: { "productData.category": "fresh", "current_orders.delivery_status": "awaiting_pickup" } },
  { $sort: { "current_orders.date": 1 } }, // sort by ascending order (least recent/ oldest at start)
  { $limit: 1 }, // take the oldest
  {
    $project: {
      _id: 1,
      current_order: "$current_orders",
      customer_location: "$customer_addresses.location.coordinates",
      product_id: ["$current_orders.items.product_id"],
      quantity: "$current_orders.items.quantity"
    },
  },
]).toArray();


if (selectedOrderResult.length > 0) {
  try {
    var selectedOrderData = selectedOrderResult[0];
    var customerLocation = selectedOrderData.customer_location;
    var selectedOrderItems = selectedOrderData.current_order.items;

    print("Selected Order Data:");
    printjson(selectedOrderData);


   // PART 2: Identify closest store to the customer with all order products in stock
var closestStoreResult = db.stores.aggregate([
  {
    $geoNear: {
      near: {
        type: "Point",
        coordinates: customerLocation[0],
      },
      distanceField: "distance",
      spherical: true,
    },
  },
  {
    $project: {
      _id: 1,
      name: 1,
      store_address: 1,
      available_groceries: {
        $filter: {
          input: "$available_groceries",
          as: "grocery",
          cond: {
            $and: [
              { $in: ["$$grocery.product_id", selectedOrderItems.map(item => item.product_id)] },
              { $gte: ["$$grocery.quantity", 0] },
              { $gte: ["$$grocery.quantity", { $sum: "$$grocery.quantity" }] }, // Additional condition
            ],
          },
        },
      },
      location: 1,
      distance: 1,
    },
  },
  {
    $match: {
      "available_groceries.product_id": { $all: selectedOrderItems.map(item => item.product_id) },
    },
  },
  { $sort: { distance: 1 } },
  { $limit: 1 },
]).toArray();


    if (closestStoreResult.length > 0) {
      var closestStore = closestStoreResult[0];
      var storeLocation = closestStore.location.coordinates;

      print("Closest Store:");
      printjson(closestStore);

      // PART 3: Find the nearest driver to a store that is idle
      var nearestDriverResult = db.partners.aggregate([
        {
          $geoNear: {
            near: {
              type: "Point",
              coordinates: storeLocation,
            },
            distanceField: "distance",
            spherical: true
          },
        },
        {
          $match: {
            activity_status: "idle",
            available: 'yes',
          },
        },
        { $sort: { distance: 1 } },
        {
          $limit: 1,
        },
        {
          $project: {
            _id: 1,
            name: 1,
            activity_status: 1,
            current_location: 1,
          },
        },
      ]).toArray();

      if (nearestDriverResult.length > 0) {
        var nearestDriver = nearestDriverResult[0];

        print("Nearest Driver:");
        printjson(nearestDriver);

        // PART 4: Update delivery driver info
        db.partners.updateOne(
          { _id: nearestDriver._id },
          {
            $set: {
              current_delivery_id: selectedOrderData.current_order._id,
              activity_status: "collecting order from store",
              available: "no",
            },
          }
        );

        // Update the payout for the delivery driver
        var payoutAmount = parseFloat((0.15 * selectedOrderData.current_order.order_cost).toFixed(2));

        db.partners.updateOne(
          { _id: nearestDriver._id },
          {
            $set: {
              payout: payoutAmount,
            },
          }
        );

        print("Delivery Driver info updated successfully.");

// PART 4: Update the stores to subtract from the quantity of the products in the current_order
selectedOrderItems.forEach(function(item) {
  db.stores.updateOne(
    {
      _id: closestStore._id, // ensures updating of the correct store
      "available_groceries.product_id": item.product_id},
    {
      $inc: {
        "available_groceries.$.quantity": -item.quantity,
      },
    }
  );
});



        // Update the delivery status in the customer's current order
        db.customers.updateOne(
          { _id: selectedOrderData._id, "current_orders._id": selectedOrderData.current_order._id },
          {
            $set: {
              "current_orders.$.delivery_status": "driver collecting from store",
            },
          }
        );

        print("Stores updated successfully.");
      } else {
        print("Error: No idle and available driver found near the store.");
      }
    } else {
      print("Error: No store found that has enough of the groceries ordered.");
    }
  } catch (error) {
    print("Error: " + error);
  }
} else {
  print("Error: No fresh order that is awaiting pickup found.");
}

