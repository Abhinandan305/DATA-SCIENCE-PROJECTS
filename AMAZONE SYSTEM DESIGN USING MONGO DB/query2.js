
// Choosing database 
use ('AMAZONE');

// locating a random customer 
var q2randomLocation = db.customers.aggregate([
  {
    $unwind: "$customer_addresses"
  },
  {
    $unwind: "$customer_addresses.location" // using unwind to access embedded documents 
  },
  {
    $sample: { size: 1 } // selecting a random sample of size 1 from the 20 customers 
  },
  {
    $project: { // final projection of which customer was chosen and their location coordinates 
      _id: 1,
      location: "$customer_addresses.location.coordinates"
    }
  }
]).toArray(); // ensuring the variable created is in array format

print("Random Customer: ");
printjson(q2randomLocation); // printing the projected information

var randomPlace = q2randomLocation[0];
var randomCoords = randomPlace.location; // creating just the coordinates as a variable to use later 

var closeriesList = db.stores.aggregate([ // aggregation to find available groceries based on proximity to random customer location
  {
    $geoNear: { // geoJSON query 
      near: {
        type: "Point",
        coordinates: randomCoords // calling variable of random customers location
      },
      distanceField: "distanceToCustomer", // calculating distance between each store and customer 
      spherical: true
    }
  },
  {
    $unwind: "$available_groceries" // using unwind to access embedded documents 
  },
  {
    $match: {
      "available_groceries.quantity": { $gt: 0 } // ensuring no products with a quantity of 0 (unavailable) are shown
    }
  },
  {
    $lookup: { // accessing product information as a customer wants to see the name not the unique id 
      from: "products",
      localField: "available_groceries.product_id",
      foreignField: "_id",
      as: "productDetails"
    }
  },
  {
    $unwind: "$productDetails"
  },
  {
    $group: { // grouping final data on product name 
      _id: "$productDetails.product_name",
      availability: {
        $push: {
          store_name: "$name",
          quantity: "$available_groceries.quantity",
          distanceToCustomer: { $round: ["$distanceToCustomer", 2] } // rounding distance to 2 decimal places 
        }
      },
      minDistanceToCustomer: { $min: "$distanceToCustomer" } // calculating minimum distance per product
    }
  },
  {
    $sort: { minDistanceToCustomer: 1, "_id": 1 } // ordering the products based on store with smallest distance to customer 
  },
  {
    $project: { // projection to access required data from variable
      _id: 1,
      availability: {
        $slice: ["$availability", 3] 
      }
    }
  }
]).toArray(); // ensuring the variable created is in array format again

var closeries = closeriesList.map(products => { // formatting grocery list output for visualisation
  var product_id = products._id;
  var availability = products.availability;

  return { // final return to be visualised
    _id: product_id,
    availability: availability
  };
})

print("List of fresh products in order of proximity:");
closeries.forEach(product => { // visualisation of output to be easily readable for customer 
  printjson({
    _id: product._id,
    availability: product.availability
  })
});