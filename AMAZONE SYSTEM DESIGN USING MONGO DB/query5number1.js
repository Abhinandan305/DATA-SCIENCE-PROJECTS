
// Choosing database 
use ('AMAZONE');

// Summary Collection 

// Calculation of profits function
function profitsCalculate() {
  return new Promise(async (resolve, reject ) => {
    try {
        // variable creation for revenue data 
        var RevenueSummary = db.customers.aggregate([
           {
              $facet: {
                // Current_orders
                "currentOrders": [
                 { 
                   $unwind: "$current_orders" 
                 },
                 { 
                   $unwind: "$current_orders.items" // using unwind to access embedded documents 
                 },
                 {
                   $group: { // using group to sum current data based on product_id
                      _id: "$current_orders.items.product_id",
                      curr_revenue: { $sum: "$current_orders.items.order_item_cost" },
                      curr_quantity: { $sum: "$current_orders.items.quantity" }
                    }
                 },
                 {
                   $project: { // projecting results to access later
                     _id: 0,
                     curr_product_id: "$_id",
                     curr_revenue: { $round: ["$curr_revenue", 2] },
                     curr_quantity: "$curr_quantity"
                   }
                  }
               ],
                // Past_orders
                "pastOrders": [
                  { 
                    $unwind: "$past_orders" // using unwind to access embedded documents 
                  },
                  { 
                    $unwind: "$past_orders.items"
                  },
                  {
                    $group: { // using group to sum current data based on product_id
                      _id: "$past_orders.items.product_id",
                     past_revenue: { $sum: "$past_orders.items.order_item_cost" },
                     past_quantity: { $sum: "$past_orders.items.quantity"}
                   }
                  },
                  {
                   $project: { // projecting results to access later 
                     _id: 0,
                     past_product_id: "$_id",
                     past_revenue: { $round: ["$past_revenue", 2] },
                     past_quantity: "$past_quantity"
                    }
                  }
                ]
              }
           },
           {
             $project: { // combining current and past order data 
             mergedResults: { $concatArrays: ["$currentOrders", "$pastOrders"] }
             }
           },
           {
             $unwind: "$mergedResults"
           },
           {
             $project: { // calculating and projecting the required financial information
                product_id: {
                 $ifNull: ["$mergedResults.curr_product_id", "$mergedResults.past_product_id"]
                },
                curr_revenue: { $ifNull: ["$mergedResults.curr_revenue", 0] },
                past_revenue: { $ifNull: ["$mergedResults.past_revenue", 0] },
                totalRevenue: {
                  $sum: {
                   $add: [
                     { $ifNull: ["$mergedResults.curr_revenue", 0] },
                     { $ifNull: ["$mergedResults.past_revenue", 0] }
                    ]
                  }
               },
                totalQuantity: {
                  $sum: {
                    $add: [
                     { $ifNull: ["$mergedResults.curr_quantity", 0] },
                     { $ifNull: ["$mergedResults.past_quantity", 0] }
                    ]
                  }
                }
             }
      
            },
            {
              $group: { // grouping again based on product_id to ensure all data is product specific 
              _id: "$product_id",
               totalRevenue: { $sum: "$totalRevenue" },
               curr_revenue: { $sum: "$curr_revenue" }, 
               past_revenue: { $sum: "$past_revenue" },
                totalQuantity: { $sum: "$totalQuantity" }
              }
            },
            { 
              $sort: { "_id": 1 }, // ordering by product_id for output
            },
           {
              $project: { // final projection of revenue output
                _id: 1,
                totalQuantity: 1,
                totalRevenue: { $round: [ "$totalRevenue", 2]},
                curr_revenue: { $round: [ "$curr_revenue", 2]},
                past_revenue: { $round: [ "$past_revenue", 2]}
               }
            },

      ]).toArray(); // ensuring the variable created is in array format

      var productDetails = db.products.aggregate([ // accessing product cost information
        { 
         $project: {
            _id: 1,
            price: 1,
            supplier_cost: 1
          }
        }
      ]).toArray(); // again ensuring the variable created is in array format

      var productDetailsMap = new Map(); // accessing individual data within revenueSummary variable
        productDetails.forEach(product => {
          productDetailsMap.set(product._id, product.price, product.supplier_cost);
      });

       // Merging the data based on product_id
      var combinedData = productDetails.map(product => {
        var product_id = product._id;
        var supplier_cost = product.supplier_cost || 0;
        var price = product.price || 0;

        // Find same product_id in RevenueSummary
        var revenueEntry = RevenueSummary.find(entry => entry._id === product_id);

        // Assign to 0 if the product doesn't exist in RevenueSummary
        var totalQuantity = revenueEntry ? revenueEntry.totalQuantity : 0;
        var totalRevenue = revenueEntry ? revenueEntry.totalRevenue : 0;
        var currentRevenue = revenueEntry ? revenueEntry.curr_revenue : 0;
        var pastRevenue = revenueEntry ? revenueEntry.past_revenue : 0;

        // Calculations 
        var totalSupplierCost = totalQuantity * supplier_cost;
        var partnerPayout = totalRevenue * 0.15;

        var totalCost = totalSupplierCost + partnerPayout;
        var profit = totalRevenue - totalCost;

        totalSupplierCost = Math.round(totalSupplierCost * 100) / 100;
        partnerPayout = Math.round(partnerPayout * 100) / 100;
        totalCost = Math.round(totalCost * 100) / 100;
        profit = Math.round(profit * 100) / 100;

        // Final output audit and return
       return {
          _id: product_id,
          revenueBreakdown: {
            productPrice: price,
            quantityOrdered: totalQuantity,
            currentRevenue: currentRevenue,
            pastRevenue: pastRevenue,
            totalRevenue: totalRevenue
          },
          costBreakdown: {
            productSupplierCost: supplier_cost,
            totalSupplierCost: totalSupplierCost,
            partnerPaynout: partnerPayout,
            totalcost: totalCost
          },
          salesProfit: profit
       };

      })

   resolve(combinedData);
   print('Profits calculated!');
   } catch (error) {
    reject(error);
  }
  })
}

// Insert function
async function profitsInsert() {
  try {
    const profitsCollection = db.getCollection("financial_summary");

    // Calls calculation fucntion
    const insertedData = await profitsCalculate();

    // Insert calculated data
    profitsCollection.insertMany(insertedData);
    print('Profits inserted!')
  } catch (error) {
    print("Error inserting profits:", error);
  }
}

// Call insertion
// Creates collection
profitsInsert()


// Calculation fucntion 
async function profitsUpdate() {
  try {
    const profitsCollection = db.getCollection("financial_summary");

    // Calls calculation fucntion
    const updatedData = await profitsCalculate();

    // Ensuring update occurs within inner most field of data and per product
    updatedData.forEach(data => {
     const filter = { _id: data._id }; 
     const update = {
        $set: {
          revenueBreakdown: data.revenueBreakdown,
          costBreakdown: data.costBreakdown,
          salesProfit: data.salesProfit
        }
     };

     profitsCollection.updateOne(filter, update, { upsert: true });
    }
    );

  print('Profits updated!');
  } catch (error) {
    print('Error updating profits:', error);
  }
}

// profitsUpdate()

// const changeStream = db.collection('customers').watch();

// changeStream.on('change', function(change) {
//   profitsCalculation();
//   profitsUpdate();
// });

