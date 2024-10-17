// this query inserts records for daily inventory stocks
 
 //choose database
 use('AMAZONE');

//insert documents
db.daily_inventory_levels.insertMany(
[{
  "_id": 1,
  "date": {
    "$date": "2023-12-04T00:00:00.000Z"//Date wise warehouse records
  },
  "storage_warehouses": [
    {
      "name": "DL WAREHOUSE",//warehouse name
      "location": {
        "type": "Point",//warehouse location
        "coordinates": [
          53.4426,
          -2.2187
        ]
      },
      "products": [ //products present in the warehouse
        {
          "product_id": 16,
          "quantity": 41
        },
        {
          "product_id": 17,
          "quantity": 59
        },
        {
          "product_id": 18,
          "quantity": 69
        },
        {
          "product_id": 19,
          "quantity": 23
        },
        {
          "product_id": 20,
          "quantity": 59
        },
        {
          "product_id": 21,
          "quantity": 19
        },
        {
          "product_id": 22,
          "quantity": 40
        },
        {
          "product_id": 23,
          "quantity": 61
        },
        {
          "product_id": 24,
          "quantity": 43
        },
        {
          "product_id": 25,
          "quantity": 29
        },
        {
          "product_id": 26,
          "quantity": 37
        },
        {
          "product_id": 27,
          "quantity": 79
        }
      ]
    },
    {
      "name": "BG Warehouse",
      "location": {
        "type": "Point",
        "coordinates": [
          53.4875,
          -2.2901
        ]
      },
      "products": [
        {
          "product_id": 28,
          "quantity": 50
        },
        {
          "product_id": 29,
          "quantity": 40
        },
        {
          "product_id": 30,
          "quantity": 25
        },
        {
          "product_id": 31,
          "quantity": 90
        },
        {
          "product_id": 32,
          "quantity": 56
        },
        {
          "product_id": 33,
          "quantity": 77
        },
        {
          "product_id": 34,
          "quantity": 15
        },
        {
          "product_id": 35,
          "quantity": 34
        },
        {
          "product_id": 36,
          "quantity": 66
        },
        {
          "product_id": 37,
          "quantity": 24
        },
        {
          "product_id": 38,
          "quantity": 38
        },
        {
          "product_id": 39,
          "quantity": 50
        },
        {
          "product_id": 40,
          "quantity": 67
        },
        {
          "product_id": 41,
          "quantity": 44
        },
        {
          "product_id": 42,
          "quantity": 49
        },
        {
          "product_id": 43,
          "quantity": 56
        },
        {
          "product_id": 44,
          "quantity": 26
        },
        {
          "product_id": 45,
          "quantity": 66
        },
        {
          "product_id": 46,
          "quantity": 48
        },
        {
          "product_id": 47,
          "quantity": 30
        },
        {
          "product_id": 48,
          "quantity": 35
        },
        {
          "product_id": 49,
          "quantity": 43
        },
        {
          "product_id": 50,
          "quantity": 56
        },
        {
          "product_id": 51,
          "quantity": 37
        },
        {
          "product_id": 52,
          "quantity": 46
        },
        {
          "product_id": 53,
          "quantity": 57
        },
        {
          "product_id": 54,
          "quantity": 49
        },
        {
          "product_id": 55,
          "quantity": 80
        }
      ]
    }
  ]
},
{
  "_id": 2,
  "date": {
    "$date": "2023-12-05T00:00:00.000Z"
  },
  "storage_warehouses": [
    {
      "name": "DL WAREHOUSE",
      "location": {
        "type": "Point",
        "coordinates": [
          53.4103,
          -2.2294
        ]
      },
      "products": [
        {
          "product_id": 16,
          "quantity": 90
        },
        {
          "product_id": 17,
          "quantity": 35
        },
        {
          "product_id": 18,
          "quantity": 66
        },
        {
          "product_id": 19,
          "quantity": 55
        },
        {
          "product_id": 20,
          "quantity": 49
        },
        {
          "product_id": 21,
          "quantity": 29
        },
        {
          "product_id": 22,
          "quantity": 38
        },
        {
          "product_id": 23,
          "quantity": 67
        },
        {
          "product_id": 24,
          "quantity": 53
        },
        {
          "product_id": 25,
          "quantity": 68
        },
        {
          "product_id": 26,
          "quantity": 46
        },
        {
          "product_id": 27,
          "quantity": 88
        }
      ]
    },
    {
      "name": "BG Warehouse",
      "location": {
        "type": "Point",
        "coordinates": [
          53.4875,
          -2.2901
        ]
      },
      "products": [
        {
          "product_id": 28,
          "quantity": 40
        },
        {
          "product_id": 29,
          "quantity": 24
        },
        {
          "product_id": 30,
          "quantity": 65
        },
        {
          "product_id": 31,
          "quantity": 77
        },
        {
          "product_id": 32,
          "quantity": 46
        },
        {
          "product_id": 33,
          "quantity": 78
        },
        {
          "product_id": 34,
          "quantity": 89
        },
        {
          "product_id": 35,
          "quantity": 54
        },
        {
          "product_id": 36,
          "quantity": 65
        },
        {
          "product_id": 37,
          "quantity": 74
        },
        {
          "product_id": 38,
          "quantity": 68
        },
        {
          "product_id": 39,
          "quantity": 70
        },
        {
          "product_id": 40,
          "quantity": 58
        },
        {
          "product_id": 41,
          "quantity": 80
        },
        {
          "product_id": 42,
          "quantity": 57
        },
        {
          "product_id": 43,
          "quantity": 22
        },
        {
          "product_id": 44,
          "quantity": 29
        },
        {
          "product_id": 45,
          "quantity": 64
        },
        {
          "product_id": 46,
          "quantity": 48
        },
        {
          "product_id": 47,
          "quantity": 38
        },
        {
          "product_id": 48,
          "quantity": 45
        },
        {
          "product_id": 49,
          "quantity": 66
        },
        {
          "product_id": 50,
          "quantity": 32
        },
        {
          "product_id": 51,
          "quantity": 36
        },
        {
          "product_id": 52,
          "quantity": 55
        },
        {
          "product_id": 53,
          "quantity": 86
        },
        {
          "product_id": 54,
          "quantity": 69
        },
        {
          "product_id": 55,
          "quantity": 20
        }
      ]
    }
  ]
}
]);

db.daily_inventory_levels.createIndex({ "date": 1 }, { unique: true });