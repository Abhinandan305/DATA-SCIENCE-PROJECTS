// this query inserts one customer and some orders
// it is missing the cost of each item within the orders, as well as
// the total order costs
// the following query deals with this, since it must reference
// to the products collection

use('AMAZONE');

db.customers.insertMany([
    {
        "_id": 1,
        "name": "Joey Johnson",
        "gender": "Male",
        "age": 24,
        "customer_addresses":[{
            "billing_shipping": "billing",
            "house_number": 4,
            "street": "Albion Road",
            "city": "Manchester",
            "postcode": "M14 6GA"
        },
        {
            "billing_shipping": "shipping",
            "house_number": 24,
            "street": "Oxford Road",
            "city": "Manchester",
            "postcode": "M12 8MA",
            "location":{
                "type":"Point",
                "coordinates":[53.4481, -2.2249]
            }
        }],

        "current_orders":[{
            "_id": 1550,
            "date":new Date("2023-12-05"),
            "items":[{
                "product_id": 2,
                "quantity": 3
            },
            {
                "product_id": 4,
                "quantity": 1
            }],
            "payment_details":{
                "card_number": 9254670318207543,
                "expiry_date": new Date("2027-05-01")
            },
            "delivery_status": "awaiting_pickup"
        },
        {
            "_id": 1551,
            "date": new Date("2023-12-05"),
            "items":[{
                "product_id":17,
                "quantity": 2
            },
            {
                "product_id":21,
                "quantity": 1
            }],
            "payment_details":{
                "card_number": 9254670318207543,
                "expiry_date": new Date("2027-05-01")
            },
            "delivery_status": "awaiting_pickup"
             
        }],

        "past_orders":[{
            "_id": 101,
            "date":new Date("2023-12-04"),
            "items":[{
                "product_id": 1,
                "quantity": 6
            },
            {
                "product_id": 43,
                "quantity": 3
            }],
             
        },
        {
            "_id": 102,
            "date":new Date("2023-12-04"),
            "items":[{
                "product_id": 54,
                "quantity": 2
            },
            {
                "product_id": 12,
                "quantity": 1
            },
            {
                "product_id":23,
                "quantity": 2
            }],
             
        },
        {
            "_id": 103,
            "date":new Date("2023-12-04"),
            "items":[{
                "product_id": 46,
                "quantity": 3
            },
            {
                "product_id": 3,
                "quantity": 1
            }]
        },
        {
            "_id": 104,
            "date":new Date("2023-12-04"),
            "items":[{
                "product_id": 29,
                "quantity": 2
            },
            {
                "product_id": 14,
                "quantity": 2
            }]
        },
        {
            "_id": 105,
            "date":new Date("2023-12-04"),
            "items":[{
                "product_id": 14,
                "quantity": 1
            },
            {
                "product_id": 13,
                "quantity": 1
            }]
        }
    ],
    },
    {
        "_id": 2,
        "name": "Billy McGay",
        "gender": "Male",
        "age": 53,
        "customer_addresses":[{
            "billing_shipping": "shipping",
            "house_number": 10,
            "street": "White Hart Lane",
            "city": "Manchester",
            "postcode": "M18 1QH",
            "location":{
                "type":"Point",
                "coordinates":[53.4631, -2.2913]
            }
        },
        {
            "billing_shipping": "billing",
            "house_number": 5,
            "street": "Anfield Street",
            "city": "Liverpool",
            "postcode": "L16 6QR"
        }],

        "current_orders":[{
            "_id": 2670,
            "date":new Date("2023-12-05"),
            "items":[{
                "product_id": 12,
                "quantity": 2
            },
            {
                "product_id": 13,
                "quantity": 6
            }],
            "payment_details":{
                "card_number": 7392158643021578,
                "expiry_date": new Date("2029-05-01")
            },
            "delivery_status": "awaiting_pickup"
             
        },
        {
            "_id": 2671,
            "date":new Date("2023-12-05"),
            "items":[{
                "product_id":1,
                "quantity": 9
            },
            {
                "product_id":5,
                "quantity": 2
            }],
            "payment_details":{
                "card_number": 7392158643021578,
                "expiry_date": new Date("2029-05-01")
            },
            "delivery_status": "awaiting_pickup"
             
        },
        {
            "_id": 2672,
            "date":new Date("2023-12-05"),
            "items":[{
                "product_id":7,
                "quantity": 1
            },
            {
                "product_id":8,
                "quantity": 3,
            },
            {
                "product_id":13,
                "quantity":2
            }],
            "payment_details":{
                "card_number": 7392158643021578,
                "expiry_date": new Date("2029-05-01")
            },
            "delivery_status": "awaiting_pickup"
             
        }],

        "past_orders":[{
            "_id": 106,
            "date":new Date("2023-12-04"),
            "items":[{
                "product_id": 3,
                "quantity": 7
            },
            {
                "product_id": 21,
                "quantity": 2
            },
            {
                "product_id":32,
                "quantity":1
            }]
        },
        {
            "_id": 107,
            "date":new Date("2023-12-04"),
            "items":[{
                "product_id": 13,
                "quantity": 1
            },
            {
                "product_id": 6,
                "quantity": 3
            }]
        },
        {
            "_id": 108,
            "date":new Date("2023-12-04"),
            "items":[{
                "product_id": 53,
                "quantity": 1,
            },
            {
                "product_id": 25,
                "quantity": 2
            }]
        },
        {
            "_id": 109,
            "date":new Date("2023-12-04"),
            "items":[{
                "product_id": 11,
                "quantity": 3
            },
            {
                "product_id": 10,
                "quantity": 3
            },
            {
                "product_id":23,
                "quantity":1
            }]
        },
        {
            "_id": 110,
            "date":new Date("2023-12-04"),
            "items":[{
                "product_id": 13,
                "quantity": 1
            },
            {
                "product_id": 11,
                "quantity": 1
            }]
        }],
    },
    {
        "_id": 3,
        "name": "Harry Potter",
        "gender": "Male",
        "age": 21,
        "customer_addresses":[{
            "billing_shipping": "shipping",
            "house_number": 1,
            "street": "Etihad Lane",
            "city": "Manchester",
            "postcode": "M19 0HT",
            "location":{
                "type":"Point",
                "coordinates":[53.4832, -2.2004]
            }
        },
        {
            "billing_shipping": "billing",
            "house_number": 78,
            "street": "Beebo Street",
            "city": "Liverpool",
            "postcode": "L16 6QR"
        }],

        "current_orders":[{
            "_id": 2673,
            "date":new Date("2023-12-05"),
            "items":[{
                "product_id": 1,
                "quantity": 2
            },
            {
                "product_id": 12,
                "quantity": 6
            }],
            "payment_details":{
                "card_number": 4829301762540187,
                "expiry_date": new Date("2029-04-01")
            },
            "delivery_status": "awaiting_pickup"
             
        },
        {
            "_id": 2674,
            "date":new Date("2023-12-05"),
            "items":[{
                "product_id":51,
                "quantity": 9
            },
            {
                "product_id":55,
                "quantity": 2
            }],
            "payment_details":{
                "card_number": 4829301762540187,
                "expiry_date": new Date("2029-04-01")
            },
            "delivery_status": "awaiting_pickup"
             
        }],

        "past_orders":[{
            "_id": 111,
            "date":new Date("2023-12-04"),
            "items":[{
                "product_id": 22,
                "quantity": 7
            },
            {
                "product_id": 24,
                "quantity": 1
            },
            {
                "product_id":38,
                "quantity":2
            }]
        },
        {
            "_id": 112,
            "date":new Date("2023-12-04"),
            "items":[{
                "product_id": 13,
                "quantity": 1
            },
            {
                "product_id": 26,
                "quantity": 3
            }]
        },
        {
            "_id": 113,
            "date":new Date("2023-12-04"),
            "items":[{
                "product_id": 9,
                "quantity": 1,
            },
            {
                "product_id": 10,
                "quantity": 1
            }]
        },
        {
            "_id": 114,
            "date":new Date("2023-12-04"),
            "items":[{
                "product_id": 1,
                "quantity": 1,
            }]
        },
        {
            "_id": 115,
            "date":new Date("2023-12-04"),
            "items":[{
                "product_id": 1,
                "quantity": 3,
            },
            {
                "product_id": 5,
                "quantity": 2
            }]
        }],
    },
    {
        "_id": 4,
        "name": "Hermione Granger",
        "gender": "Female",
        "age": 21,
        "customer_addresses":[{
            "billing_shipping": "shipping",
            "house_number": 1,
            "street": "Hogwarts",
            "city": "Manchester",
            "postcode": "M19 0GT",
            "location":{
                "type":"Point",
                "coordinates":[53.4825, -2.2345]
            }
        },
        {
            "billing_shipping": "billing",
            "house_number": 7,
            "street": "Boom Street",
            "city": "Liverpool",
            "postcode": "L16 8RR"
        }],

        "current_orders":[{
            "_id": 2675,
            "date":new Date("2023-12-05"),
            "items":[{
                "product_id": 23,
                "quantity": 2
            },
            {
                "product_id": 44,
                "quantity": 6
            }],
            "payment_details":{
                "card_number": 6154972083640125,
                "expiry_date": new Date("2030-05-01")
            },
            "delivery_status": "awaiting_pickup"
             
        },
        {
            "_id": 2676,
            "date":new Date("2023-12-05"),
            "items":[{
                "product_id":53,
                "quantity": 4
            },
            {
                "product_id":9,
                "quantity": 1
            }],
            "payment_details":{
                "card_number": 6154972083640125,
                "expiry_date": new Date("2030-05-01")
            },
            "delivery_status": "awaiting_pickup"
             
        }],

        "past_orders":[{
            "_id": 116,
            "date":new Date("2023-12-04"),
            "items":[{
                "product_id": 1,
                "quantity": 7
            },
            {
                "product_id": 3,
                "quantity": 1
            },
            {
                "product_id":9,
                "quantity":2
            }]
        },
        {
            "_id": 117,
            "date":new Date("2023-12-04"),
            "items":[{
                "product_id": 10,
                "quantity": 1
            },
            {
                "product_id": 11,
                "quantity": 2
            }]
        },
        {
            "_id": 118,
            "date":new Date("2023-12-04"),
            "items":[{
                "product_id": 5,
                "quantity": 1,
            },
            {
                "product_id": 7,
                "quantity": 4
            }]
        },
        {
            "_id": 119,
            "date":new Date("2023-12-04"),
            "items":[{
                "product_id": 8,
                "quantity": 1,
            }]
        },
        {
            "_id": 120,
            "date":new Date("2023-12-04"),
            "items":[{
                "product_id": 10,
                "quantity": 3,
            },
            {
                "product_id": 11,
                "quantity": 2
            }]
        }],
    },
    {
        "_id": 5,
        "name": "John Doe",
        "gender": "Male",
        "age": 30,
        "customer_addresses": [
            {
                "billing_shipping": "billing",
                "house_number": 12,
                "street": "Main Street",
                "city": "Manchester",
                "postcode": "M1 1AA"
            },
            {
                "billing_shipping": "shipping",
                "house_number": 15,
                "street": "Shipping Lane",
                "city": "Manchester",
                "postcode": "M1 2BB",
                "location": {
                    "type": "Point",
                    "coordinates": [53.4741, -2.2405] // Coordinates within Manchester
                }
            }
        ],
        "current_orders": [
            {
                "_id": 1552,
                "date":new Date("2023-12-05"),
                "items": [
                    { "product_id": 5, "quantity": 2 },
                    { "product_id": 46, "quantity": 1 }
                ],
                "payment_details":{
                    "card_number": 8276041592837465,
                    "expiry_date": new Date("2028-03-01")
                },
                "delivery_status": "awaiting_pickup"
                 
            },
            {
                "_id": 1553,
                "date":new Date("2023-12-05"),
                "items": [
                    { "product_id": 11, "quantity": 1 },
                    { "product_id": 44, "quantity": 3 }
                ],
                "payment_details":{
                    "card_number": 8276041592837465,
                    "expiry_date": new Date("2028-03-01")
                },
                "delivery_status": "awaiting_pickup"
                 
            }
        ],
        "past_orders": [
            {
                "_id": 121,
                "date":new Date("2023-12-04"),
                "items": [
                    { "product_id": 23, "quantity": 2 },
                    { "product_id": 6, "quantity": 1 }
                ]
            },
            {
                "_id": 122,
                "date":new Date("2023-12-04"),
                "items": [
                    { "product_id": 2, "quantity": 1 },
                    { "product_id": 5, "quantity": 3 }
                ]
            },
            {
                "_id": 123,
                "date":new Date("2023-12-04"),
                "items": [
                    { "product_id": 34, "quantity": 2 },
                    { "product_id": 7, "quantity": 2 }
                ]
            },
            {
                "_id": 124,
                "date":new Date("2023-12-04"),
                "items": [
                    { "product_id": 41, "quantity": 4 },
                    { "product_id": 3, "quantity": 1 }
                ]
            },
            {
                "_id": 125,
                "date":new Date("2023-12-04"),
                "items": [
                    { "product_id": 16, "quantity": 3 },
                    { "product_id": 22, "quantity": 2 }
                ]
            }
        ]
    },
    {
        "_id": 6,
        "name": "Alice Smith",
        "gender": "Female",
        "age": 28,
        "customer_addresses": [
            {
                "billing_shipping": "billing",
                "house_number": 7,
                "street": "Bingbong Road",
                "city": "Manchester",
                "postcode": "M1 3CC"
            },
            {
                "billing_shipping": "shipping",
                "house_number": 8,
                "street": "Lowry Street",
                "city": "Manchester",
                "postcode": "M1 4DD",
                "location": {
                    "type": "Point",
                    "coordinates": [53.4838, -2.2433] // Coordinates within Manchester
                }
            }
        ],
        "current_orders": [
            {
                "_id": 1554,
                "date":new Date("2023-12-05"),
                "items": [
                    { "product_id": 1, "quantity": 3 },
                    { "product_id": 4, "quantity": 2 }
                ],
                "payment_details":{
                    "card_number": 4123987650239147,
                    "expiry_date": new Date("2032-05-01")
                },
                "delivery_status": "awaiting_pickup"
                 
            },
            {
                "_id": 1555,
                "date":new Date("2023-12-05"),
                "items": [
                    { "product_id": 25, "quantity": 1 },
                    { "product_id": 46, "quantity": 4 }
                ],
                "payment_details":{
                    "card_number": 4123987650239147,
                    "expiry_date": new Date("2032-05-01")
                },
                "delivery_status": "awaiting_pickup"
                 
            }
        ],
        "past_orders": [
            {
                "_id": 126,
                "date":new Date("2023-12-04"),
                "items": [
                    { "product_id": 32, "quantity": 2 },
                    { "product_id": 3, "quantity": 3 }
                ]
            },
            {
                "_id": 127,
                "date":new Date("2023-12-04"),
                "items": [
                    { "product_id": 24, "quantity": 1 },
                    { "product_id": 7, "quantity": 2 }
                ]
            },
            {
                "_id": 128,
                "date":new Date("2023-12-04"),
                "items": [
                    { "product_id": 11, "quantity": 5 },
                    { "product_id": 5, "quantity": 2 }
                ]
            },
            {
                "_id": 129,
                "date":new Date("2023-12-04"),
                "items": [
                    { "product_id": 46, "quantity": 2 },
                    { "product_id": 2, "quantity": 3 }
                ]
            },
            {
                "_id": 130,
                "date":new Date("2023-12-04"),
                "items": [
                    { "product_id": 3, "quantity": 1 },
                    { "product_id": 7, "quantity": 4 }
                ]
            }
        ]
    },
    {
        "_id": 7,
        "name": "Emma Johnson",
        "gender": "Female",
        "age": 35,
        "customer_addresses": [
            {
                "billing_shipping": "billing",
                "house_number": 9,
                "street": "Haaland Drive",
                "city": "Manchester",
                "postcode": "M1 5EE"
            },
            {
                "billing_shipping": "shipping",
                "house_number": 10,
                "street": "Sion Street",
                "city": "Manchester",
                "postcode": "M1 6FF",
                "location": {
                    "type": "Point",
                    "coordinates": [53.4816, -2.2347]
                }
            }
        ],
        "current_orders": [
            {
                "_id": 1556,
                "date":new Date("2023-12-05"),
                "items": [
                    { "product_id": 2, "quantity": 4 },
                    { "product_id": 25, "quantity": 1 }
                ],
                "payment_details":{
                    "card_number": 9378260451823047,
                    "expiry_date": new Date("2027-09-01")
                },
                "delivery_status": "awaiting_pickup"
                 
            },
            {
                "_id": 1557,
                "date":new Date("2023-12-05"),
                "items": [
                    { "product_id": 1, "quantity": 2 },
                    { "product_id": 33, "quantity": 3 }
                ],
                "payment_details":{
                    "card_number": 9378260451823047,
                    "expiry_date": new Date("2027-09-01")
                },
                "delivery_status": "awaiting_pickup"
                 
            }
        ],
        "past_orders": [
            {
                "_id": 131,
                "date":new Date("2023-12-04"),
                "items": [
                    { "product_id": 4, "quantity": 2 },
                    { "product_id": 46, "quantity": 1 }
                ]
            },
            {
                "_id": 132,
                "date":new Date("2023-12-04"),
                "items": [
                    { "product_id": 7, "quantity": 3 },
                    { "product_id": 2, "quantity": 1 }
                ]
            },
            {
                "_id": 133,
                "date":new Date("2023-12-04"),
                "items": [
                    { "product_id": 1, "quantity": 3 },
                    { "product_id": 5, "quantity": 2 }
                ]
            },
            {
                "_id": 134,
                "date":new Date("2023-12-04"),
                "items": [
                    { "product_id": 6, "quantity": 2 },
                    { "product_id": 3, "quantity": 3 }
                ]
            },
            {
                "_id": 135,
                "date":new Date("2023-12-04"),
                "items": [
                    { "product_id": 2, "quantity": 1 },
                    { "product_id": 54, "quantity": 4 }
                ]
            }
        ]
    },
    {
        "_id": 8,
        "name": "Oliver Williams",
        "gender": "Male",
        "age": 32,
        "customer_addresses": [
            {
                "billing_shipping": "billing",
                "house_number": 11,
                "street": "Dylan Avenue",
                "city": "Manchester",
                "postcode": "M1 7GG"
            },
            {
                "billing_shipping": "shipping",
                "house_number": 12,
                "street": "Virginia Close",
                "city": "Manchester",
                "postcode": "M1 8HH",
                "location": {
                    "type": "Point",
                    "coordinates": [53.4792, -2.2315]
                }
            }
        ],
        "current_orders": [
            {
                "_id": 1558,
                "date":new Date("2023-12-05"),
                "items": [
                    { "product_id": 3, "quantity": 2 },
                    { "product_id": 4, "quantity": 1 }
                ],
                "payment_details":{
                    "card_number": 5698124730256893,
                    "expiry_date": new Date("2027-10-01")
                },
                "delivery_status": "awaiting_pickup"
                 
            },
            {
                "_id": 1559,
                "date":new Date("2023-12-05"),
                "items": [
                    { "product_id": 5, "quantity": 3 },
                    { "product_id": 16, "quantity": 2 }
                ],
                "payment_details":{
                    "card_number": 5698124730256893,
                    "expiry_date": new Date("2027-10-01")
                },
                "delivery_status": "awaiting_pickup"
                 
            }
        ],
        "past_orders": [
            {
                "_id": 136,
                "date":new Date("2023-12-04"),
                "items": [
                    { "product_id": 21, "quantity": 1 },
                    { "product_id": 13, "quantity": 2 }
                ]
            },
            {
                "_id": 137,
                "date":new Date("2023-12-04"),
                "items": [
                    { "product_id": 4, "quantity": 2 },
                    { "product_id": 7, "quantity": 1 }
                ]
            },
            {
                "_id": 138,
                "date":new Date("2023-12-04"),
                "items": [
                    { "product_id": 2, "quantity": 3 },
                    { "product_id": 5, "quantity": 2 }
                ]
            },
            {
                "_id": 139,
                "date":new Date("2023-12-04"),
                "items": [
                    { "product_id": 6, "quantity": 1 },
                    { "product_id": 43, "quantity": 3 }
                ]
            },
            {
                "_id": 140,
                "date":new Date("2023-12-04"),
                "items": [
                    { "product_id": 12, "quantity": 2 },
                    { "product_id": 34, "quantity": 4 }
                ]
            }
        ]
    },
    {
        "_id": 9,
        "name": "Sophia Brown",
        "gender": "Female",
        "age": 27,
        "customer_addresses": [
            {
                "billing_shipping": "billing",
                "house_number": 13,
                "street": "Dover Road",
                "city": "Manchester",
                "postcode": "M1 9II"
            },
            {
                "billing_shipping": "shipping",
                "house_number": 14,
                "street": "Crystal Palace Drive",
                "city": "Manchester",
                "postcode": "M1 0JJ",
                "location": {
                    "type": "Point",
                    "coordinates": [53.4775, -2.2378]
                }
            }
        ],
        "current_orders": [
            {
                "_id": 1560,
                "date":new Date("2023-12-05"),
                "items": [
                    { "product_id": 51, "quantity": 4 },
                    { "product_id": 5, "quantity": 2 }
                ],
                "payment_details":{
                    "card_number": 2456813907265481,
                    "expiry_date": new Date("2025-05-01")
                },
                "delivery_status": "awaiting_pickup"
                 
            },
            {
                "_id": 1561,
                "date":new Date("2023-12-05"),
                "items": [
                    { "product_id": 3, "quantity": 3 },
                    { "product_id": 6, "quantity": 1 }
                ],
                "payment_details":{
                    "card_number": 2456813907265481,
                    "expiry_date": new Date("2025-05-01")
                },
                "delivery_status": "awaiting_pickup"
                 
            }
        ],
        "past_orders": [
            {
                "_id": 141,
                "date":new Date("2023-12-04"),
                "items": [
                    { "product_id": 2, "quantity": 2 },
                    { "product_id": 24, "quantity": 1 }
                ]
            },
            {
                "_id": 142,
                "date":new Date("2023-12-04"),
                "items": [
                    { "product_id": 5, "quantity": 1 },
                    { "product_id": 7, "quantity": 3 }
                ]
            },
            {
                "_id": 143,
                "date":new Date("2023-12-04"),
                "items": [
                    { "product_id": 1, "quantity": 3 },
                    { "product_id": 3, "quantity": 2 }
                ]
            },
            {
                "_id": 144,
                "date":new Date("2023-12-04"),
                "items": [
                    { "product_id": 6, "quantity": 2 },
                    { "product_id": 2, "quantity": 3 }
                ]
            },
            {
                "_id": 145,
                "date":new Date("2023-12-04"),
                "items": [
                    { "product_id": 13, "quantity": 1 },
                    { "product_id": 24, "quantity": 4 }
                ]
            }
        ]
    },
    {
        "_id": 10,
        "name": "Liam Wilson",
        "gender": "Male",
        "age": 29,
        "customer_addresses": [
            {
                "billing_shipping": "billing",
                "house_number": 15,
                "street": "Tottenham Road",
                "city": "Manchester",
                "postcode": "M1 1KK"
            },
            {
                "billing_shipping": "shipping",
                "house_number": 16,
                "street": "Nevis Close",
                "city": "Manchester",
                "postcode": "M1 2LL",
                "location": {
                    "type": "Point",
                    "coordinates": [53.4850, -2.2360]
                }
            }
        ],
        "current_orders": [
            {
                "_id": 1562,
                "date":new Date("2023-12-05"),
                "items": [
                    { "product_id": 2, "quantity": 3 },
                    { "product_id": 6, "quantity": 2 }
                ],
                "payment_details":{
                    "card_number": 7315942861038475,
                    "expiry_date": new Date("2028-01-01")
                },
                "delivery_status": "awaiting_pickup"
                 
            },
            {
                "_id": 1563,
                "date":new Date("2023-12-05"),
                "items": [
                    { "product_id": 1, "quantity": 2 },
                    { "product_id": 4, "quantity": 3 }
                ],
                "payment_details":{
                    "card_number": 7315942861038475,
                    "expiry_date": new Date("2028-01-01")
                },
                "delivery_status": "awaiting_pickup"
                 
            }
        ],
        "past_orders": [
            {
                "_id": 146,
                "date":new Date("2023-12-04"),
                "items": [
                    { "product_id": 3, "quantity": 2 },
                    { "product_id": 26, "quantity": 1 }
                ]
            },
            {
                "_id": 147,
                "date":new Date("2023-12-04"),
                "items": [
                    { "product_id": 27, "quantity": 3 },
                    { "product_id": 32, "quantity": 1 }
                ]
            },
            {
                "_id": 148,
                "date":new Date("2023-12-04"),
                "items": [
                    { "product_id": 51, "quantity": 3 },
                    { "product_id": 55, "quantity": 2 }
                ]
            },
            {
                "_id": 149,
                "date":new Date("2023-12-04"),
                "items": [
                    { "product_id": 46, "quantity": 2 },
                    { "product_id": 3, "quantity": 3 }
                ]
            },
            {
                "_id": 150,
                "date":new Date("2023-12-04"),
                "items": [
                    { "product_id": 42, "quantity": 1 },
                    { "product_id": 4, "quantity": 4 }
                ]
            }
        ]
    },
    {
        "_id": 11,
        "name": "Ella Miller",
        "gender": "Female",
        "age": 31,
        "customer_addresses": [
            {
                "billing_shipping": "billing",
                "house_number": 17,
                "street": "Bing Street",
                "city": "Manchester",
                "postcode": "M1 3MM"
            },
            {
                "billing_shipping": "shipping",
                "house_number": 18,
                "street": "Chill Road",
                "city": "Manchester",
                "postcode": "M1 4NN",
                "location": {
                    "type": "Point",
                    "coordinates": [53.4867, -2.2303]
                }
            }
        ],
        "current_orders": [
            {
                "_id": 1564,
                "date":new Date("2023-12-05"),
                "items": [
                    { "product_id": 3, "quantity": 2 },
                    { "product_id": 4, "quantity": 1 }
                ],
                "payment_details":{
                    "card_number": 8209461735684921,
                    "expiry_date": new Date("2030-05-01")
                },
                "delivery_status": "awaiting_pickup"
                 
            },
            {
                "_id": 1565,
                "date":new Date("2023-12-05"),
                "items": [
                    { "product_id": 5, "quantity": 3 },
                    { "product_id": 46, "quantity": 2 }
                ],
                "payment_details":{
                    "card_number": 8209461735684921,
                    "expiry_date": new Date("2030-05-01")
                },
                "delivery_status": "awaiting_pickup"
                 
            }
        ],
        "past_orders": [
            {
                "_id": 151,
                "date":new Date("2023-12-04"),
                "items": [
                    { "product_id": 21, "quantity": 1 },
                    { "product_id": 3, "quantity": 2 }
                ]
            },
            {
                "_id": 152,
                "date":new Date("2023-12-04"),
                "items": [
                    { "product_id": 4, "quantity": 2 },
                    { "product_id": 7, "quantity": 1 }
                ]
            },
            {
                "_id": 153,
                "date":new Date("2023-12-04"),
                "items": [
                    { "product_id": 2, "quantity": 3 },
                    { "product_id": 35, "quantity": 2 }
                ]
            },
            {
                "_id": 154,
                "date":new Date("2023-12-04"),
                "items": [
                    { "product_id": 6, "quantity": 1 },
                    { "product_id": 3, "quantity": 3 }
                ]
            },
            {
                "_id": 155,
                "date":new Date("2023-12-04"),
                "items": [
                    { "product_id": 3, "quantity": 1 },
                    { "product_id": 14, "quantity": 4 }
                ]
            }
        ]
    },
    {
        "_id": 12,
        "name": "Noah Garcia",
        "gender": "Male",
        "age": 26,
        "customer_addresses": [
            {
                "billing_shipping": "billing",
                "house_number": 19,
                "street": "Sesame Street",
                "city": "Manchester",
                "postcode": "M1 5OO"
            },
            {
                "billing_shipping": "shipping",
                "house_number": 20,
                "street": "Load Lane",
                "city": "Manchester",
                "postcode": "M1 6PP",
                "location": {
                    "type": "Point",
                    "coordinates": [53.4841, -2.2317]
                }
            }
        ],
        "current_orders": [
            {
                "_id": 1566,
                "date":new Date("2023-12-05"),
                "items": [
                    { "product_id": 1, "quantity": 3 },
                    { "product_id": 24, "quantity": 2 }
                ],
                "payment_details":{
                    "card_number": 3154982076251830,
                    "expiry_date": new Date("2027-02-01")
                },
                "delivery_status": "awaiting_pickup"
                 
            },
            {
                "_id": 1567,
                "date":new Date("2023-12-05"),
                "items": [
                    { "product_id": 5, "quantity": 1 },
                    { "product_id": 26, "quantity": 4 }
                ],
                "payment_details":{
                    "card_number": 3154982076251830,
                    "expiry_date": new Date("2027-02-01")
                },
                "delivery_status": "awaiting_pickup"
                 
            }
        ],
        "past_orders": [
            {
                "_id": 156,
                "date":new Date("2023-12-04"),
                "items": [
                    { "product_id": 2, "quantity": 2 },
                    { "product_id": 43, "quantity": 3 }
                ]
            },
            {
                "_id": 157,
                "date":new Date("2023-12-04"),
                "items": [
                    { "product_id": 4, "quantity": 1 },
                    { "product_id": 7, "quantity": 2 }
                ]
            },
            {
                "_id": 158,
                "date":new Date("2023-12-04"),
                "items": [
                    { "product_id": 1, "quantity": 5 },
                    { "product_id": 15, "quantity": 2 }
                ]
            },
            {
                "_id": 159,
                "date":new Date("2023-12-04"),
                "items": [
                    { "product_id": 6, "quantity": 2 },
                    { "product_id": 22, "quantity": 3 }
                ]
            },
            {
                "_id": 160,
                "date":new Date("2023-12-04"),
                "items": [
                    { "product_id": 3, "quantity": 1 },
                    { "product_id": 4, "quantity": 4 }
                ]
            }
        ]
    },
    {
        "_id": 13,
        "name": "Ava Thompson",
        "gender": "Female",
        "age": 30,
        "customer_addresses": [
            {
                "billing_shipping": "billing",
                "house_number": 21,
                "street": "Pendulum Road",
                "city": "Manchester",
                "postcode": "M1 7QQ"
            },
            {
                "billing_shipping": "shipping",
                "house_number": 22,
                "street": "Cactus Street",
                "city": "Manchester",
                "postcode": "M1 8RR",
                "location": {
                    "type": "Point",
                    "coordinates": [53.4823, -2.2334]
                }
            }
        ],
        "current_orders": [
            {
                "_id": 1568,
                "date":new Date("2023-12-05"),
                "items": [
                    { "product_id": 22, "quantity": 4 },
                    { "product_id": 6, "quantity": 2 }
                ],
                "payment_details":{
                    "card_number": 4076159328046792,
                    "expiry_date": new Date("2032-01-01")
                },
                "delivery_status": "awaiting_pickup"
                 
            },
            {
                "_id": 1569,
                "date":new Date("2023-12-05"),
                "items": [
                    { "product_id": 1, "quantity": 3 },
                    { "product_id": 44, "quantity": 3 }
                ],
                "payment_details":{
                    "card_number": 4076159328046792,
                    "expiry_date": new Date("2032-01-01")
                },
                "delivery_status": "awaiting_pickup"
                 
            }
        ],
        "past_orders": [
            {
                "_id": 161,
                "date":new Date("2023-12-04"),
                "items": [
                    { "product_id": 53, "quantity": 2 },
                    { "product_id": 16, "quantity": 1 }
                ]
            },
            {
                "_id": 162,
                "date":new Date("2023-12-04"),
                "items": [
                    { "product_id": 7, "quantity": 3 },
                    { "product_id": 2, "quantity": 1 }
                ]
            },
            {
                "_id": 163,
                "date":new Date("2023-12-04"),
                "items": [
                    { "product_id": 1, "quantity": 3 },
                    { "product_id": 5, "quantity": 2 }
                ]
            },
            {
                "_id": 164,
                "date":new Date("2023-12-04"),
                "items": [
                    { "product_id": 6, "quantity": 2 },
                    { "product_id": 3, "quantity": 3 }
                ]
            },
            {
                "_id": 165,
                "date":new Date("2023-12-04"),
                "items": [
                    { "product_id": 3, "quantity": 1 },
                    { "product_id": 4, "quantity": 4 }
                ]
            }
        ]
    },
    {
        "_id": 14,
        "name": "Olivia Martinez",
        "gender": "Female",
        "age": 28,
        "customer_addresses": [
            {
                "billing_shipping": "billing",
                "house_number": 23,
                "street": "Fountain Drive",
                "city": "Manchester",
                "postcode": "M1 9SS"
            },
            {
                "billing_shipping": "shipping",
                "house_number": 24,
                "street": "Croxted Close",
                "city": "Manchester",
                "postcode": "M1 0TT",
                "location": {
                    "type": "Point",
                    "coordinates": [53.4858, -2.2372]
                }
            }
        ],
        "current_orders": [
            {
                "_id": 1570,
                "items": [
                    { "product_id": 1, "quantity": 2 },
                    { "product_id": 4, "quantity": 1 }
                ],
                "payment_details":{
                    "card_number": 7264903158742093,
                    "expiry_date": new Date("2027-05-01")
                },
                "delivery_status": "awaiting_pickup"
                 
            },
            {
                "_id": 1571,
                "items": [
                    { "product_id": 5, "quantity": 3 },
                    { "product_id": 6, "quantity": 2 }
                ],
                "payment_details":{
                    "card_number": 7264903158742093,
                    "expiry_date": new Date("2027-05-01")
                },
                "delivery_status": "awaiting_pickup"
                 
            }
        ],
        "past_orders": [
            {
                "_id": 166,
                "items": [
                    { "product_id": 2, "quantity": 2 },
                    { "product_id": 3, "quantity": 3 }
                ]
            },
            {
                "_id": 167,
                "items": [
                    { "product_id": 4, "quantity": 1 },
                    { "product_id": 7, "quantity": 2 }
                ]
            },
            {
                "_id": 168,
                "items": [
                    { "product_id": 1, "quantity": 5 },
                    { "product_id": 5, "quantity": 2 }
                ]
            },
            {
                "_id": 169,
                "items": [
                    { "product_id": 6, "quantity": 2 },
                    { "product_id": 2, "quantity": 3 }
                ]
            },
            {
                "_id": 170,
                "items": [
                    { "product_id": 3, "quantity": 1 },
                    { "product_id": 24, "quantity": 4 }
                ]
            }
        ]
    },
    {
        "_id": 15,
        "name": "William Turner",
        "gender": "Male",
        "age": 32,
        "customer_addresses": [
            {
                "billing_shipping": "billing",
                "house_number": 25,
                "street": "Pho Street",
                "city": "Manchester",
                "postcode": "M1 1UU"
            },
            {
                "billing_shipping": "shipping",
                "house_number": 26,
                "street": "Sushi Lane",
                "city": "Manchester",
                "postcode": "M1 2VV",
                "location": {
                    "type": "Point",
                    "coordinates": [53.4815, -2.2359]
                }
            }
        ],
        "current_orders": [
            {
                "_id": 1572,
                "items": [
                    { "product_id": 2, "quantity": 4 },
                    { "product_id": 6, "quantity": 2 }
                ],
                "payment_details":{
                    "card_number": 8962471358024671,
                    "expiry_date": new Date("2029-05-01")
                },
                "delivery_status": "awaiting_pickup"
                 
            },
            {
                "_id": 1573,
                "items": [
                    { "product_id": 1, "quantity": 3 },
                    { "product_id": 34, "quantity": 3 }
                ],
                "payment_details":{
                    "card_number": 89624713580246717,
                    "expiry_date": new Date("2029-05-01")
                },
                "delivery_status": "awaiting_pickup"
                 
            }
        ],
        "past_orders": [
            {
                "_id": 171,
                "items": [
                    { "product_id": 3, "quantity": 2 },
                    { "product_id": 6, "quantity": 1 }
                ]
            },
            {
                "_id": 172,
                "items": [
                    { "product_id": 7, "quantity": 3 },
                    { "product_id": 2, "quantity": 1 }
                ]
            },
            {
                "_id": 173,
                "items": [
                    { "product_id": 1, "quantity": 3 },
                    { "product_id": 5, "quantity": 2 }
                ]
            },
            {
                "_id": 174,
                "items": [
                    { "product_id": 6, "quantity": 2 },
                    { "product_id": 3, "quantity": 3 }
                ]
            },
            {
                "_id": 175,
                "items": [
                    { "product_id": 3, "quantity": 1 },
                    { "product_id": 44, "quantity": 4 }
                ]
            }
        ]
    },
    {
        "_id": 16,
        "name": "Sophia Scott",
        "gender": "Female",
        "age": 27,
        "customer_addresses": [
            {
                "billing_shipping": "billing",
                "house_number": 27,
                "street": "Rice Avenue",
                "city": "Manchester",
                "postcode": "M1 3WW"
            },
            {
                "billing_shipping": "shipping",
                "house_number": 28,
                "street": "Celery Close",
                "city": "Manchester",
                "postcode": "M1 4XX",
                "location": {
                    "type": "Point",
                    "coordinates": [53.4846, -2.2321]
                }
            }
        ],
        "current_orders": [
            {
                "_id": 1574,
                "items": [
                    { "product_id": 21, "quantity": 2 },
                    { "product_id": 4, "quantity": 1 }
                ],
                "payment_details":{
                    "card_number": 5839201764502831,
                    "expiry_date": new Date("2030-05-01")
                },
                "delivery_status": "awaiting_pickup"
                 
            },
            {
                "_id": 1575,
                "items": [
                    { "product_id": 15, "quantity": 3 },
                    { "product_id": 6, "quantity": 2 }
                ],
                "payment_details":{
                    "card_number": 5839201764502831,
                    "expiry_date": new Date("2030-05-01")
                },
                "delivery_status": "awaiting_pickup"
                 
            }
        ],
        "past_orders": [
            {
                "_id": 176,
                "items": [
                    { "product_id": 2, "quantity": 2 },
                    { "product_id": 3, "quantity": 3 }
                ]
            },
            {
                "_id": 177,
                "items": [
                    { "product_id": 54, "quantity": 1 },
                    { "product_id": 7, "quantity": 2 }
                ]
            },
            {
                "_id": 178,
                "items": [
                    { "product_id": 1, "quantity": 5 },
                    { "product_id": 5, "quantity": 2 }
                ]
            },
            {
                "_id": 179,
                "items": [
                    { "product_id": 6, "quantity": 2 },
                    { "product_id": 2, "quantity": 3 }
                ]
            },
            {
                "_id": 180,
                "items": [
                    { "product_id": 3, "quantity": 1 },
                    { "product_id": 4, "quantity": 4 }
                ]
            }
        ]
    },
    {
        "_id": 17,
        "name": "Oliver Johnson",
        "gender": "Male",
        "age": 29,
        "customer_addresses": [
            {
                "billing_shipping": "billing",
                "house_number": 29,
                "street": "Loopy Lane",
                "city": "Manchester",
                "postcode": "M1 5YY"
            },
            {
                "billing_shipping": "shipping",
                "house_number": 30,
                "street": "Mountain Road",
                "city": "Manchester",
                "postcode": "M1 6ZZ",
                "location": {
                    "type": "Point",
                    "coordinates": [53.4827, -2.2365]
                }
            }
        ],
        "current_orders": [
            {
                "_id": 1576,
                "items": [
                    { "product_id": 2, "quantity": 4 },
                    { "product_id": 6, "quantity": 2 }
                ],
                "payment_details":{
                    "card_number": 5127369402873654,
                    "expiry_date": new Date("2027-10-01")
                },
                "delivery_status": "awaiting_pickup"
                 
            },
            {
                "_id": 1577,
                "items": [
                    { "product_id": 1, "quantity": 3 },
                    { "product_id": 4, "quantity": 3 }
                ],
                "payment_details":{
                    "card_number": 5127369402873654,
                    "expiry_date": new Date("2027-10-01")
                },
                "delivery_status": "awaiting_pickup"
                 
            }
        ],
        "past_orders": [
            {
                "_id": 181,
                "items": [
                    { "product_id": 3, "quantity": 2 },
                    { "product_id": 6, "quantity": 1 }
                ]
            },
            {
                "_id": 182,
                "items": [
                    { "product_id": 7, "quantity": 3 },
                    { "product_id": 2, "quantity": 1 }
                ]
            },
            {
                "_id": 183,
                "items": [
                    { "product_id": 1, "quantity": 3 },
                    { "product_id": 5, "quantity": 2 }
                ]
            },
            {
                "_id": 184,
                "items": [
                    { "product_id": 6, "quantity": 2 },
                    { "product_id": 3, "quantity": 3 }
                ]
            },
            {
                "_id": 185,
                "items": [
                    { "product_id": 3, "quantity": 1 },
                    { "product_id": 24, "quantity": 4 }
                ]
            }
        ]
    },
    {
        "_id": 18,
        "name": "Mia Clark",
        "gender": "Female",
        "age": 25,
        "customer_addresses": [
            {
                "billing_shipping": "billing",
                "house_number": 31,
                "street": "Bingbong Avenue",
                "city": "Manchester",
                "postcode": "M1 7AA"
            },
            {
                "billing_shipping": "shipping",
                "house_number": 32,
                "street": "Gerrard Avenue",
                "city": "Manchester",
                "postcode": "M1 8BB",
                "location": {
                    "type": "Point",
                    "coordinates": [53.4813, -2.2384]
                }
            }
        ],
        "current_orders": [
            {
                "_id": 1578,
                "items": [
                    { "product_id": 11, "quantity": 2 },
                    { "product_id": 4, "quantity": 1 }
                ],
                "payment_details":{
                    "card_number": 3789456123094857,
                    "expiry_date": new Date("2027-02-01")
                },
                "delivery_status": "awaiting_pickup"
                 
            },
            {
                "_id": 1579,
                "items": [
                    { "product_id": 5, "quantity": 3 },
                    { "product_id": 6, "quantity": 2 }
                ],
                "payment_details":{
                    "card_number": 3789456123094857,
                    "expiry_date": new Date("2027-02-01")
                },
                "delivery_status": "awaiting_pickup"
                 
            }
        ],
        "past_orders": [
            {
                "_id": 186,
                "items": [
                    { "product_id": 2, "quantity": 2 },
                    { "product_id": 3, "quantity": 3 }
                ]
            },
            {
                "_id": 187,
                "items": [
                    { "product_id": 4, "quantity": 1 },
                    { "product_id": 7, "quantity": 2 }
                ]
            },
            {
                "_id": 188,
                "items": [
                    { "product_id": 1, "quantity": 5 },
                    { "product_id": 5, "quantity": 2 }
                ]
            },
            {
                "_id": 189,
                "items": [
                    { "product_id": 6, "quantity": 2 },
                    { "product_id": 2, "quantity": 3 }
                ]
            },
            {
                "_id": 190,
                "items": [
                    { "product_id": 53, "quantity": 1 },
                    { "product_id": 4, "quantity": 4 }
                ]
            }
        ]
    },
    {
        "_id": 19,
        "name": "Ethan Baker",
        "gender": "Male",
        "age": 31,
        "customer_addresses": [
            {
                "billing_shipping": "billing",
                "house_number": 33,
                "street": "Lampard Road",
                "city": "Manchester",
                "postcode": "M1 9CC"
            },
            {
                "billing_shipping": "shipping",
                "house_number": 34,
                "street": "Morata Street",
                "city": "Manchester",
                "postcode": "M1 0DD",
                "location": {
                    "type": "Point",
                    "coordinates": [53.4841, -2.2378]
                }
            }
        ],
        "current_orders": [
            {
                "_id": 1580,
                "items": [
                    { "product_id": 2, "quantity": 4 },
                    { "product_id": 6, "quantity": 2 }
                ],
                "payment_details":{
                    "card_number": 6528390475123064,
                    "expiry_date": new Date("2033-05-01")
                },
                "delivery_status": "awaiting_pickup"
                 
            },
            {
                "_id": 1581,
                "items": [
                    { "product_id": 1, "quantity": 3 },
                    { "product_id": 4, "quantity": 3 }
                ],
                "payment_details":{
                    "card_number": 6528390475123064,
                    "expiry_date": new Date("2033-05-01")
                },
                "delivery_status": "awaiting_pickup"
                 
            }
        ],
        "past_orders": [
            {
                "_id": 191,
                "items": [
                    { "product_id": 3, "quantity": 2 },
                    { "product_id": 6, "quantity": 1 }
                ]
            },
            {
                "_id": 192,
                "items": [
                    { "product_id": 7, "quantity": 3 },
                    { "product_id": 42, "quantity": 1 }
                ]
            },
            {
                "_id": 193,
                "items": [
                    { "product_id": 21, "quantity": 3 },
                    { "product_id": 35, "quantity": 2 }
                ]
            },
            {
                "_id": 194,
                "items": [
                    { "product_id": 6, "quantity": 2 },
                    { "product_id": 3, "quantity": 3 }
                ]
            },
            {
                "_id": 195,
                "items": [
                    { "product_id": 3, "quantity": 1 },
                    { "product_id": 4, "quantity": 4 }
                ]
            }
        ]
    },
    {
        "_id": 20,
        "name": "Ava Garcia",
        "gender": "Female",
        "age": 26,
        "customer_addresses": [
            {
                "billing_shipping": "billing",
                "house_number": 35,
                "street": "Billing Street",
                "city": "Manchester",
                "postcode": "M1 1EE"
            },
            {
                "billing_shipping": "shipping",
                "house_number": 36,
                "street": "Shipping Lane",
                "city": "Manchester",
                "postcode": "M1 2FF",
                "location": {
                    "type": "Point",
                    "coordinates": [53.4830, -2.2340]
                }
            }
        ],
        "current_orders": [
            {
                "_id": 1582,
                "items": [
                    { "product_id": 33, "quantity": 15 },
                    { "product_id": 35, "quantity": 2 }
                ],
                "payment_details":{
                    "card_number": 7496128350429631,
                    "expiry_date": new Date("2027-05-01")
                },
                "delivery_status": "awaiting_pickup"
                 
            },
            {
                "_id": 1583,
                "items": [
                    { "product_id": 5, "quantity": 5 },
                    { "product_id": 6, "quantity": 10 }
                ],
                "payment_details":{
                    "card_number": 7496128350429631,
                    "expiry_date": new Date("2027-05-01")
                },
                "delivery_status": "awaiting_pickup"
                 
            }
        ],
        "past_orders": [
            {
                "_id": 196,
                "items": [
                    { "product_id": 22, "quantity": 6 },
                    { "product_id": 3, "quantity": 3 }
                ]
            },
            {
                "_id": 197,
                "items": [
                    { "product_id": 4, "quantity": 1 },
                    { "product_id": 7, "quantity": 2 }
                ]
            },
            {
                "_id": 198,
                "items": [
                    { "product_id": 1, "quantity": 5 },
                    { "product_id": 5, "quantity": 2 }
                ]
            },
            {
                "_id": 199,
                "items": [
                    { "product_id": 6, "quantity": 10 },
                    { "product_id": 2, "quantity": 3 }
                ]
            },
            {
                "_id": 200,
                "items": [
                    { "product_id": 33, "quantity": 4 },
                    { "product_id": 44, "quantity": 8 }
                ]
            }
        ]
    }                 
]);




// this query adds the cost for each item within each order, as well as the total cost of each order

// go through each customer
db.customers.find().forEach(function(customer) {
    // go through each of their current orders
    customer.current_orders.forEach(function(order) {
        var order_cost = 0; // initialize the order cost for this order

        // go through each of the items in this order
        order.items.forEach(function(item) {
            // for each item, find out what product it is, by referring to the products collection
            var product = db.products.findOne({ _id: item.product_id });
            
            // if (product) ensures the product actually exists in the products collection
            if (product) {
                // retrieve the price
                item.price = product.price;
                // calculate the price of this item, multiplied by its quantity
                // format to the form of currency
                item.order_item_cost = parseFloat((product.price * item.quantity).toFixed(2)); 
                order_cost += item.order_item_cost; // increment order cost
            }
        });

        // format order_cost to the form of currency
        order_cost = parseFloat(order_cost.toFixed(2));

        // update the current order with the order_cost
        db.customers.update(
            { _id: customer._id, "current_orders._id": order._id },
            { $set: { "current_orders.$.items": order.items, "current_orders.$.order_cost": order_cost } }
        );
    });

    
    // repeat the above with the past orders
    customer.past_orders.forEach(function(order) {
        var order_cost = 0; 

        order.items.forEach(function(item) {
            var product = db.products.findOne({ _id: item.product_id });

            if (product) {
                item.price = product.price;
                item.order_item_cost = parseFloat((product.price * item.quantity).toFixed(2)); 
                order_cost += item.order_item_cost; 
            }
        });

        order_cost = parseFloat(order_cost.toFixed(2));

        db.customers.update(
            { _id: customer._id, "past_orders._id": order._id },
            { $set: { "past_orders.$.items": order.items, "past_orders.$.order_cost": order_cost } }
        );
    });
});



// this query adds the recommended products for each customer
// it sorts the products with the highest avg_rating first, then excludes products which that customer has ordered in the past

// loop through each customer in the customers collection
db.customers.find().forEach(function(customer) {
    // initialise their ordered_products
    var ordered_products = [];
    
    // find all the products that they have ordered, checking their past_orders and current_orders
    customer.current_orders.forEach(function(order) {
      order.items.forEach(function(item) {
        ordered_products.push(item.product_id);
      });
    });
    
    customer.past_orders.forEach(function(order) {
      order.items.forEach(function(item) {
        ordered_products.push(item.product_id);
      });
    });
    
    // aggregation pipeline to find the recommended products
    var recommended_products = db.products.aggregate([
      // exclude products that the customer has ordered before
      {
        $match: {
          "_id": { $nin: ordered_products }
        }
      },
      // perform a lookup to connect to the customers collection
      {
        $lookup: {
          from: "customers",
          let: { product_id: "$_id" },  // store the current product's ID
          pipeline: [
            // unwind to get the items in current_orders
            {
              $unwind: "$current_orders"
            },
            {
              $unwind: "$current_orders.items"
            },
            // match the customer's orders with the product ID
            {
              $match: {
                $expr: { $eq: ["$current_orders.items.product_id", "$$product_id"] }
              }
            }
          ],
          as: "ordered_by_customers"
        }
      },
      {
        $project: {
          "product_name": 1,
          "avg_rating": { $avg: "$reviews.rating" },
          "ordered_by_customers": { $size: "$ordered_by_customers" }
        }
      },
      // sort the avg_rating, highest rated products first
      {
        $sort: { "avg_rating": -1 }
      },
      // we only want to recommend up to 4 products
      {
        $limit: 4
      },
      {
        $project: {
          "_id": 0,
          "product_name": 1,
          "avg_rating": 1
        }
      }
    ]).toArray();
    
    // update the customer documents with the new recommended_products field
    db.customers.update(
      { "_id": customer._id },
      { $set: { "recommended_products": recommended_products } }
    );
  });


// create a 2d sphere index on the locations of the shipping addresses
db.customers.createIndex(
    { "customer_addresses.location.coordinates": "2dsphere" },
    { partialFilterExpression: { "customer_addresses.billing_shipping": "shipping" } }
);
