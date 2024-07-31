
// Choosing database 
use ('AMAZONE');

// Stores collection insert
db.stores.insertMany([
 {"_id":1, // unique store id
 "name":"Salford Morrizon", // store name 
 "store_address":{ // store address
    "street":"Phoebe Street",
    "city":"Manchester",
    "postcode":"M5 3PH"
   },
 "available_groceries":[ // available groceries in store including quantity 
    {"product_id":1, 
    "quantity":34},
    {"product_id":2,
    "quantity":56},
    {"product_id":3,
    "quantity":55},
    {"product_id":4,
    "quantity":84},
    {"product_id":6,
    "quantity":34},
    {"product_id":9,
    "quantity":57},
    {"product_id":11,
    "quantity":26},
    {"product_id":12,
    "quantity":78},
    {"product_id":14,
    "quantity":56},
    {"product_id":15,
    "quantity":19},
    ],
 "location":{ // geoJSON location point for store
    "type":"Point",
    "coordinates":[
        53.474421,
        -2.28187
    ]
 }},
 {"_id":2, // future itterations of above format below times 5 for 6 total stores 
 "name":"Piccadilly Morrizon",
 "store_address":{
    "street":"Piccadilly",
    "city":"Manchester",
    "postcode":"M1 1LU"
   },
 "available_groceries":[
     {"product_id":1,
     "quantity":67},
     {"product_id":2,
     "quantity":21},
     {"product_id":3,
     "quantity":58},
     {"product_id":4,
     "quantity":35},
     {"product_id":6,
     "quantity":37},
     {"product_id":7,
     "quantity":80},
     {"product_id":9,
     "quantity":17},
     {"product_id":10,
     "quantity":55},
     {"product_id":11,
     "quantity":48},
     {"product_id":12,
     "quantity":71},
     {"product_id":14,
     "quantity":32},
    ],
 "location":{
    "type":"Point",
    "coordinates":[
        53.481394,
        -2.236699
    ]
 }},
 {"_id":3,
 "name":"Old Trafford Morrizon",
 "store_address":{
    "street":"Chester Road",
    "city":"Manchester",
    "postcode":"M32 0QW"
   },
 "available_groceries":[
    {"product_id":2,
    "quantity":63},
    {"product_id":3,
    "quantity":28},
    {"product_id":5,
    "quantity":70},
    {"product_id":6,
    "quantity":34},
    {"product_id":7,
    "quantity":44},
    {"product_id":8,
    "quantity":38},
    {"product_id":10,
    "quantity":27},
    {"product_id":11,
    "quantity":41},
    {"product_id":12,
    "quantity":40},
    {"product_id":13,
    "quantity":31}
   ],
 "location":{
    "type":"Point",
    "coordinates":[
        53.458752,
        -2.290818
    ]
 }},
 {"_id":4,
 "name":"Fallowfield Morrizon",
 "store_address":{
    "street":"Wilbraham Road",
    "city":"Manchester",
    "postcode":"M14 7ED"
   },
 "available_groceries":[
    {"product_id":1,
    "quantity":43},
    {"product_id":3,
    "quantity":64},
    {"product_id":4,
    "quantity":14},
    {"product_id":5,
    "quantity":28},
    {"product_id":6,
    "quantity":70},
    {"product_id":7,
    "quantity":24},
    {"product_id":8,
    "quantity":42},
    {"product_id":9,
    "quantity":48},
    {"product_id":11,
    "quantity":30},
    {"product_id":14,
    "quantity":58},
    ],
 "location":{
    "type":"Point",
    "coordinates":[
        53.443333,
        -2.237193
    ]
 }},
 {"_id":5,
 "name":"Oxford Road Morrizon",
 "store_address":{
    "street":"Oxford Road",
    "city":"Manchester",
    "postcode":"M13 9NU"
   },
 "available_groceries":[
    {"product_id":1,
    "quantity":58},
    {"product_id":2,
    "quantity":62},
    {"product_id":4,
    "quantity":14},
    {"product_id":5,
    "quantity":20},
    {"product_id":7,
    "quantity":9},
    {"product_id":9,
    "quantity":59},
    {"product_id":11,
    "quantity":23},
    {"product_id":12,
    "quantity":40},
    {"product_id":13,
    "quantity":62},
    {"product_id":14,
    "quantity":28},
    {"product_id":15,
    "quantity":46}
    ],
 "location":{
    "type":"Point",
    "coordinates":[
        53.462986,
        -2.229746
    ]
 }},
 {"_id":6,
 "name":"Beswick Morrizon",
 "store_address":{
    "street":"Albert Street",
    "city":"Manchester",
    "postcode":"M11 3UT"
   },
 "available_groceries":[
    {"product_id":1,
    "quantity":10},
    {"product_id":3,
    "quantity":52},
    {"product_id":5,
    "quantity":32},
    {"product_id":6,
    "quantity":45},
    {"product_id":7,
    "quantity":37},
    {"product_id":8,
    "quantity":68},
    {"product_id":9,
    "quantity":47},
    {"product_id":10,
    "quantity":52},
    {"product_id":12,
    "quantity":8},
    {"product_id":15,
    "quantity":35}
    ],
 "location":{
    "type":"Point",
    "coordinates":[
        53.478760,
        -2.198353
    ]
 }},
])

// creating 2d sphere index on geoJSON point in collection to allow for locational queries later on
db.stores.createIndex({ location: "2dsphere" });