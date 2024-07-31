use("AMAZONE");

// this query inserts all of the sample products in the AMAZONE DATBASE
db.products.insertMany(
    [{
    "_id": 1,
    "product_name": "Classic Baguette",
    "category": "fresh",
    "type": "bakery",
    "description": "Traditional French baguette for any occasion.",
    "dimensions": {
      "height": 2,
      "length": 24,
      "width": 2
    },
    "weight": 200,
    "price": 1.99,
    "supplier_cost": 0.99,
    "expiry_date": "2023-12-15",
    "country_of_origin": "France",
    "reviews": [
      {
        "customer_id": 1,
        "rating": 4.2
      },
      {
        "customer_id": 5,
        "rating": 3.8
      },
      {
        "customer_id": 6,
        "rating": 4.0
      },
      {
        "customer_id": 7,
        "rating": 4.4
      }
    ]
  },
  {
    "_id": 2,
    "product_name": "Cinnamon Raisin Roll",
    "category": "fresh",
    "type": "bakery",
    "description": "Sweet and aromatic cinnamon raisin roll.",
    "dimensions": {
      "height": 3,
      "length": 4,
      "width": 4
    },
    "weight": 150,
    "price": 1.5,
    "supplier_cost": 0.75,
    "expiry_date": "2023-12-16",
    "country_of_origin": "USA",
    "reviews": [
      {
        "customer_id": 2,
        "rating": 3.5
      },
      {
        "customer_id": 6,
        "rating": 4
      },
      {
        "customer_id": 7,
        "rating": 4.2
      }
    ]
  },
  {
    "_id": 3,
    "product_name": "Chocolate Croissant",
    "category": "fresh",
    "type": "bakery",
    "description": "Buttery croissant filled with rich chocolate.",
    "dimensions": {
      "height": 3,
      "length": 5,
      "width": 3
    },
    "weight": 120,
    "price": 1.8,
    "supplier_cost": 0.9,
    "expiry_date": "2023-12-17",
    "country_of_origin": "Belgium",
    "reviews": [
      {
        "customer_id": 3,
        "rating": 4.5
      },
      {
        "customer_id": 7,
        "rating": 3.9
      },
      {
        "customer_id": 6,
        "rating": 3.5
      }
    ]
  },
  {
    "_id": 4,
    "product_name": "Sourdough Boule",
    "category": "fresh",
    "type": "bakery",
    "description": "Artisanal sourdough boule with a crispy crust.",
    "dimensions": {
      "height": 4,
      "length": 6,
      "width": 6
    },
    "weight": 250,
    "price": 2.2,
    "supplier_cost": 1.1,
    "expiry_date": "2023-12-18",
    "country_of_origin": "Germany",
    "reviews": [
      {
        "customer_id": 4,
        "rating": 4.1
      },
      {
        "customer_id": 8,
        "rating": 3.7
      },
      {
        "customer_id": 6,
        "rating": 4.8
      },
      {
        "customer_id": 7,
        "rating": 4.5
      }
    ]
  },
  {
    "_id": 5,
    "product_name": "Blueberry Muffin",
    "category": "fresh",
    "type": "bakery",
    "description": "Moist blueberry muffin bursting with flavor.",
    "dimensions": {
      "height": 2,
      "length": 3,
      "width": 3
    },
    "weight": 100,
    "price": 1.2,
    "supplier_cost": 0.6,
    "expiry_date": "2023-12-19",
    "country_of_origin": "Canada",
    "reviews": [
      {
        "customer_id": 5,
        "rating": 3.8
      },
      {
        "customer_id": 9,
        "rating": 4.2
      },
      {
        "customer_id": 6,
        "rating": 4.5
      },
      {
        "customer_id": 7,
        "rating": 4.5
      }
    ]
  },
  {
    "_id": 6,
    "product_name": "Green Tea Infusion",
    "category": "fresh",
    "type": "drinks",
    "description": "Revitalizing green tea infusion with natural herbs.",
    "dimensions": {
      "height": 5,
      "length": 2,
      "width": 2
    },
    "weight": 300,
    "price": 3.49,
    "supplier_cost": 1.5,
    "expiry_date": "2023-12-20",
    "country_of_origin": "Japan",
    "reviews": [
      {
        "customer_id": 1,
        "rating": 4
      },
      {
        "customer_id": 6,
        "rating": 4.2
      },
      {
        "customer_id": 7,
        "rating": 4.2
      }
    ]
  },
  {
    "_id": 7,
    "product_name": "Sparkling Lemonade",
    "category": "fresh",
    "type": "drinks",
    "description": "Refreshing sparkling lemonade for a burst of citrus.",
    "dimensions": {
      "height": 6,
      "length": 3,
      "width": 3
    },
    "weight": 500,
    "price": 2.99,
    "supplier_cost": 1.2,
    "expiry_date": "2023-12-21",
    "country_of_origin": "Italy",
    "reviews": [
      {
        "customer_id": 2,
        "rating": 3.8
      },
      {
        "customer_id": 7,
        "rating": 4.5
      },
      {
        "customer_id": 6,
        "rating": 4.1
      }
    ]
  },
  {
    "_id": 8,
    "product_name": "Tropical Smoothie Blend",
    "category": "fresh",
    "type": "drinks",
    "description": "Exotic blend of tropical fruits for a delightful smoothie.",
    "dimensions": {
      "height": 7,
      "length": 4,
      "width": 4
    },
    "weight": 400,
    "price": 4.99,
    "supplier_cost": 2,
    "expiry_date": "2023-12-22",
    "country_of_origin": "Brazil",
    "reviews": [
      {
        "customer_id": 3,
        "rating": 4.1
      },
      {
        "customer_id": 8,
        "rating": 3.9
      },
      {
        "customer_id": 6,
        "rating": 3.5
      },
      {
        "customer_id": 7,
        "rating": 2.5
      }
    ]
  },
  {
    "_id": 9,
    "product_name": "Iced Coffee Blend",
    "category": "fresh",
    "type": "drinks",
    "description": "Chilled iced coffee blend for coffee enthusiasts.",
    "dimensions": {
      "height": 4,
      "length": 3,
      "width": 3
    },
    "weight": 350,
    "price": 3.79,
    "supplier_cost": 1.8,
    "expiry_date": "2023-12-23",
    "country_of_origin": "Ethiopia",
    "reviews": [
      {
        "customer_id": 4,
        "rating": 3.7
      },
      {
        "customer_id": 9,
        "rating": 4
      },
      {
        "customer_id": 6,
        "rating": 3.5
      },
      {
        "customer_id": 7,
        "rating": 4.2
      }
    ]
  },
  {
    "_id": 10,
    "product_name": "Berry Blast Smoothie",
    "category": "fresh",
    "type": "drinks",
    "description": "A vibrant mix of berries in a delicious smoothie.",
    "dimensions": {
      "height": 5,
      "length": 4,
      "width": 4
    },
    "weight": 450,
    "price": 3.99,
    "supplier_cost": 1.6,
    "expiry_date": "2023-12-24",
    "country_of_origin": "Canada",
    "reviews": [
      {
        "customer_id": 5,
        "rating": 4.4
      },
      {
        "customer_id": 10,
        "rating": 3.5
      },
      {
        "customer_id": 6,
        "rating": 4.0
      },
      {
        "customer_id": 7,
        "rating": 4.5
      }
    ]
  },
  {
    "_id": 11,
    "product_name": "Organic Apples",
    "category": "fresh",
    "type": "fruit and veg",
    "description": "Crisp and juicy organic apples for a healthy snack.",
    "dimensions": {
      "height": 3,
      "length": 2,
      "width": 3
    },
    "weight": 250,
    "price": 1.99,
    "supplier_cost": 1,
    "expiry_date": "2023-12-25",
    "country_of_origin": "USA",
    "reviews": [
      {
        "customer_id": 6,
        "rating": 4.2
      },
      {
        "customer_id": 11,
        "rating": 3.8
      },
      {
        "customer_id": 7,
        "rating": 4.1
      }
    ]
  },
  {
    "_id": 12,
    "product_name": "Sweet Strawberries",
    "category": "fresh",
    "type": "fruit and veg",
    "description": "Plump and sweet strawberries for a delightful treat.",
    "dimensions": {
      "height": 2,
      "length": 2,
      "width": 2
    },
    "weight": 200,
    "price": 2.49,
    "supplier_cost": 1.2,
    "expiry_date": "2023-12-26",
    "country_of_origin": "Spain",
    "reviews": [
      {
        "customer_id": 7,
        "rating": 4.5
      },
      {
        "customer_id": 12,
        "rating": 4
      },
      {
        "customer_id": 6,
        "rating": 4.2
      }
    ]
  },
  {
    "_id": 13,
    "product_name": "Fresh Broccoli Bunch",
    "category": "fresh",
    "type": "fruit and veg",
    "description": "Nutrient-packed fresh broccoli for a healthy meal.",
    "dimensions": {
      "height": 6,
      "length": 3,
      "width": 3
    },
    "weight": 150,
    "price": 1.79,
    "supplier_cost": 0.8,
    "expiry_date": "2023-12-27",
    "country_of_origin": "Mexico",
    "reviews": [
      {
        "customer_id": 8,
        "rating": 3.9
      },
      {
        "customer_id": 13,
        "rating": 3.5
      },
      {
        "customer_id": 6,
        "rating": 3.0
      },
      {
        "customer_id": 7,
        "rating": 4.5
      }
    ]
  },
  {
    "_id": 14,
    "product_name": "Ripe Avocados",
    "category": "fresh",
    "type": "fruit and veg",
    "description": "Creamy and ripe avocados for a delicious guacamole.",
    "dimensions": {
      "height": 4,
      "length": 3,
      "width": 3
    },
    "weight": 180,
    "price": 2.99,
    "supplier_cost": 1.5,
    "expiry_date": "2023-12-28",
    "country_of_origin": "Peru",
    "reviews": [
      {
        "customer_id": 9,
        "rating": 4
      },
      {
        "customer_id": 14,
        "rating": 4.3
      },
      {
        "customer_id": 6,
        "rating": 4.8
      },
      {
        "customer_id": 7,
        "rating": 4.5
      }
    ]
  },
  {
    "_id": 15,
    "product_name": "Colorful Bell Peppers",
    "category": "fresh",
    "type": "fruit and veg",
    "description": "Vibrant and crunchy bell peppers for a tasty stir-fry.",
    "dimensions": {
      "height": 5,
      "length": 4,
      "width": 4
    },
    "weight": 300,
    "price": 2.29,
    "supplier_cost": 1,
    "expiry_date": "2023-12-29",
    "country_of_origin": "Netherlands",
    "reviews": [
      {
        "customer_id": 10,
        "rating": 3.5
      },
      {
        "customer_id": 15,
        "rating": 3.7
      },
      {
        "customer_id": 6,
        "rating": 4.0
      },
      {
        "customer_id": 7,
        "rating": 4.2
      }
    ]
  },
  {
    "_id": 16,
    "product_name": "The Great Gatsby",
    "category": "other",
    "type": "books",
    "description": "F. Scott Fitzgerald's classic novel exploring the American Dream.",
    "dimensions": {
      "height": 8,
      "length": 5,
      "width": 1
    },
    "shipping_weight": 350,
    "price": 12.99,
    "supplier_cost": 7.5,
    "author_name": "F. Scott Fitzgerald",
    "publisher": "Scribner",
    "year_of_publication": 1925,
    "ISBN": "978-0-7432-7356-5",
    "reviews": [
      {
        "customer_id": 1,
        "rating": 4.5
      },
      {
        "customer_id": 6,
        "rating": 3.8
      },
      {
        "customer_id": 7,
        "rating": 3.5
      }
    ]
  },
  {
    "_id": 17,
    "product_name": "To Kill a Mockingbird",
    "category": "other",
    "type": "books",
    "description": "Harper Lee's poignant novel addressing racial injustice in the American South.",
    "dimensions": {
      "height": 7,
      "length": 4,
      "width": 1
    },
    "shipping_weight": 300,
    "price": 10.99,
    "supplier_cost": 6.5,
    "author_name": "Harper Lee",
    "publisher": "J.B. Lippincott & Co.",
    "year_of_publication": 1960,
    "ISBN": "978-0-06-112008-4",
    "reviews": [
      {
        "customer_id": 2,
        "rating": 4.2
      },
      {
        "customer_id": 7,
        "rating": 4
      },
      {
        "customer_id": 6,
        "rating": 4.8
      }
    ]
  },
  {
    "_id": 18,
    "product_name": "1984",
    "category": "other",
    "type": "books",
    "description": "George Orwell's dystopian classic exploring totalitarianism and censorship.",
    "dimensions": {
      "height": 6,
      "length": 4,
      "width": 1
    },
    "shipping_weight": 250,
    "price": 9.99,
    "supplier_cost": 5.5,
    "author_name": "George Orwell",
    "publisher": "Secker & Warburg",
    "year_of_publication": 1949,
    "ISBN": "978-0-452-28423-4",
    "reviews": [
      {
        "customer_id": 3,
        "rating": 4.8
      },
      {
        "customer_id": 8,
        "rating": 4.3
      },
      {
        "customer_id": 6,
        "rating": 4.5
      },
      {
        "customer_id": 7,
        "rating": 4.5
      }
    ]
  },
  {
    "_id": 19,
    "product_name": "Pride and Prejudice",
    "category": "other",
    "type": "books",
    "description": "Jane Austen's classic novel of manners and love.",
    "dimensions": {
      "height": 7,
      "length": 5,
      "width": 1
    },
    "shipping_weight": 280,
    "price": 11.99,
    "supplier_cost": 6.8,
    "author_name": "Jane Austen",
    "publisher": "T. Egerton, Whitehall",
    "year_of_publication": 1813,
    "ISBN": "978-1-59308-176-4",
    "reviews": [
      {
        "customer_id": 4,
        "rating": 4.6
      },
      {
        "customer_id": 9,
        "rating": 3.9
      },
      {
        "customer_id": 6,
        "rating": 4.3
      },
      {
        "customer_id": 7,
        "rating": 3.8
      }
    ]
  },
  {
    "_id": 20,
    "product_name": "The Catcher in the Rye",
    "category": "other",
    "type": "books",
    "description": "J.D. Salinger's influential novel capturing teenage angst and rebellion.",
    "dimensions": {
      "height": 8,
      "length": 5,
      "width": 1
    },
    "shipping_weight": 320,
    "price": 13.99,
    "supplier_cost": 8,
    "author_name": "J.D. Salinger",
    "publisher": "Little, Brown and Company",
    "year_of_publication": 1951,
    "ISBN": "978-0-316-76948-0",
    "reviews": [
      {
        "customer_id": 5,
        "rating": 4
      },
      {
        "customer_id": 10,
        "rating": 3.7
      },
      {
        "customer_id": 6,
        "rating": 4.1
      },
      {
        "customer_id": 7,
        "rating": 4.1
      }
    ]
  },
  {
    "_id": 21,
    "product_name": "The Hobbit",
    "category": "other",
    "type": "books",
    "description": "J.R.R. Tolkien's fantasy classic about Bilbo Baggins' unexpected adventure.",
    "dimensions": {
      "height": 7,
      "length": 5,
      "width": 1
    },
    "shipping_weight": 300,
    "price": 10.99,
    "supplier_cost": 6.5,
    "author_name": "J.R.R. Tolkien",
    "publisher": "George Allen & Unwin",
    "year_of_publication": 1937,
    "ISBN": "978-0-261-10226-3",
    "reviews": [
      {
        "customer_id": 6,
        "rating": 4.2
      },
      {
        "customer_id": 11,
        "rating": 3.8
      },
      {
        "customer_id": 7,
        "rating": 3.5
      }
    ]
  },
  {
    "_id": 22,
    "product_name": "The Lord of the Rings",
    "category": "other",
    "type": "books",
    "description": "J.R.R. Tolkien's epic fantasy trilogy encompassing the fate of Middle-earth.",
    "dimensions": {
      "height": 9,
      "length": 6,
      "width": 2
    },
    "shipping_weight": 450,
    "price": 18.99,
    "supplier_cost": 12,
    "author_name": "J.R.R. Tolkien",
    "publisher": "George Allen & Unwin",
    "year_of_publication": 1954,
    "ISBN": "978-0-618-34625-0",
    "reviews": [
      {
        "customer_id": 7,
        "rating": 4.5
      },
      {
        "customer_id": 12,
        "rating": 4
      },
      {
        "customer_id": 6,
        "rating": 4.8
      }
    ]
  },
  {
    "_id": 23,
    "product_name": "The Da Vinci Code",
    "category": "other",
    "type": "books",
    "description": "Dan Brown's thrilling mystery novel entwining art, history, and cryptography.",
    "dimensions": {
      "height": 8,
      "length": 5,
      "width": 1
    },
    "shipping_weight": 380,
    "price": 14.99,
    "supplier_cost": 9.5,
    "author_name": "Dan Brown",
    "publisher": "Doubleday",
    "year_of_publication": 2003,
    "ISBN": "978-0-385-50420-1",
    "reviews": [
      {
        "customer_id": 8,
        "rating": 4.7
      },
      {
        "customer_id": 13,
        "rating": 4.2
      },
      {
        "customer_id": 6,
        "rating": 4.8
      },
      {
        "customer_id": 7,
        "rating": 4.5
      }
    ]
  },
  {
    "_id": 24,
    "product_name": "The Girl with the Dragon Tattoo",
    "category": "other",
    "type": "books",
    "description": "Stieg Larsson's gripping mystery novel involving a journalist and a hacker.",
    "dimensions": {
      "height": 8,
      "length": 5,
      "width": 1
    },
    "shipping_weight": 360,
    "price": 13.99,
    "supplier_cost": 8.5,
    "author_name": "Stieg Larsson",
    "publisher": "Norstedts Förlag",
    "year_of_publication": 2005,
    "ISBN": "978-0-307-27484-0",
    "reviews": [
      {
        "customer_id": 9,
        "rating": 4
      },
      {
        "customer_id": 14,
        "rating": 4.3
      },
      {
        "customer_id": 6,
        "rating": 4.4
      },
      {
        "customer_id": 7,
        "rating": 4.1
      }
    ]
  },
  {
    "_id": 25,
    "product_name": "The Chronicles of Narnia",
    "category": "other",
    "type": "books",
    "description": "C.S. Lewis's beloved fantasy series transporting readers to the magical land of Narnia.",
    "dimensions": {
      "height": 7,
      "length": 5,
      "width": 2
    },
    "shipping_weight": 400,
    "price": 15.99,
    "supplier_cost": 10,
    "author_name": "C.S. Lewis",
    "publisher": "Geoffrey Bles",
    "year_of_publication": 1950,
    "ISBN": "978-0-06-623850-0",
    "reviews": [
      {
        "customer_id": 10,
        "rating": 3.5
      },
      {
        "customer_id": 15,
        "rating": 3.7
      },
      {
        "customer_id": 6,
        "rating": 3.9
      },
      {
        "customer_id": 7,
        "rating": 5.0
      }
    ]
  },
  {
    "_id": 26,
    "product_name": "Abbey Road",
    "category": "other",
    "type": "CDs",
    "description": "The Beatles' iconic studio album featuring classic tracks and innovative production.",
    "dimensions": {
      "height": 5,
      "length": 5,
      "width": 1
    },
    "shipping_weight": 150,
    "price": 8.99,
    "supplier_cost": 4.5,
    "artist_name": "The Beatles",
    "number_of_tracks": 17,
    "total_playing_time": "47:23",
    "publisher": "Apple Records",
    "reviews": [
      {
        "customer_id": 1,
        "rating": 4.3
      },
      {
        "customer_id": 6,
        "rating": 4.8
      },
      {
        "customer_id": 7,
        "rating": 4.5
      }
    ]
  },
  {
    "_id": 27,
    "product_name": "Thriller",
    "category": "other",
    "type": "CDs",
    "description": "Michael Jackson's groundbreaking album with chart-topping hits and iconic music videos.",
    "dimensions": {
      "height": 5,
      "length": 5,
      "width": 1
    },
    "shipping_weight": 140,
    "price": 9.99,
    "supplier_cost": 5,
    "artist_name": "Michael Jackson",
    "number_of_tracks": 9,
    "total_playing_time": "42:19",
    "publisher": "Epic Records",
    "reviews": [
      {
        "customer_id": 2,
        "rating": 4.6
      },
      {
        "customer_id": 7,
        "rating": 4.2
      },
      {
        "customer_id": 6,
        "rating": 4.8
      }
    ]
  },
  {
    "_id": 28,
    "product_name": "The Dark Side of the Moon",
    "category": "other",
    "type": "CDs",
    "description": "Pink Floyd's progressive rock masterpiece known for its immersive soundscapes.",
    "dimensions": {
      "height": 5,
      "length": 5,
      "width": 1
    },
    "shipping_weight": 130,
    "price": 10.99,
    "supplier_cost": 5.5,
    "artist_name": "Pink Floyd",
    "number_of_tracks": 10,
    "total_playing_time": "42:57",
    "publisher": "Harvest Records",
    "reviews": [
      {
        "customer_id": 3,
        "rating": 4.8
      },
      {
        "customer_id": 8,
        "rating": 4.5
      },
      {
        "customer_id": 6,
        "rating": 4.8
      },
      {
        "customer_id": 7,
        "rating": 4.5
      }
    ]
  },
  {
    "_id": 29,
    "product_name": "Back in Black",
    "category": "other",
    "type": "CDs",
    "description": "AC/DC's iconic hard rock album featuring powerful vocals and electrifying guitar riffs.",
    "dimensions": {
      "height": 5,
      "length": 5,
      "width": 1
    },
    "shipping_weight": 145,
    "price": 9.49,
    "supplier_cost": 4.8,
    "artist_name": "AC/DC",
    "number_of_tracks": 10,
    "total_playing_time": "42:11",
    "publisher": "Albert Productions",
    "reviews": [
      {
        "customer_id": 4,
        "rating": 4.2
      },
      {
        "customer_id": 9,
        "rating": 4
      },
      {
        "customer_id": 6,
        "rating": 4.0
      },
      {
        "customer_id": 7,
        "rating": 3.8
      }
    ]
  },
  {
    "_id": 30,
    "product_name": "Hotel California",
    "category": "other",
    "type": "CDs",
    "description": "Eagles' classic rock album with timeless hits and intricate guitar work.",
    "dimensions": {
      "height": 5,
      "length": 5,
      "width": 1
    },
    "shipping_weight": 155,
    "price": 8.79,
    "supplier_cost": 4.3,
    "artist_name": "Eagles",
    "number_of_tracks": 9,
    "total_playing_time": "43:45",
    "publisher": "Asylum Records",
    "reviews": [
      {
        "customer_id": 5,
        "rating": 4.6
      },
      {
        "customer_id": 10,
        "rating": 4.3
      },
      {
        "customer_id": 6,
        "rating": 4.8
      },
      {
        "customer_id": 7,
        "rating": 3.9
      }
    ]
  },
  {
    "_id": 31,
    "product_name": "Rumours",
    "category": "other",
    "type": "CDs",
    "description": "Fleetwood Mac's iconic album known for its emotional songs and intricate harmonies.",
    "dimensions": {
      "height": 5,
      "length": 5,
      "width": 1
    },
    "shipping_weight": 140,
    "price": 9.99,
    "supplier_cost": 4.9,
    "artist_name": "Fleetwood Mac",
    "number_of_tracks": 11,
    "total_playing_time": "39:31",
    "publisher": "Warner Bros. Records",
    "reviews": [
      {
        "customer_id": 6,
        "rating": 4.7
      },
      {
        "customer_id": 11,
        "rating": 4.5
      },
      {
        "customer_id": 7,
        "rating": 4.8
      }
    ]
  },
  {
    "_id": 32,
    "product_name": "Born to Run",
    "category": "other",
    "type": "CDs",
    "description": "Bruce Springsteen's classic rock album featuring anthemic songs and heartfelt lyrics.",
    "dimensions": {
      "height": 5,
      "length": 5,
      "width": 1
    },
    "shipping_weight": 150,
    "price": 8.99,
    "supplier_cost": 4.4,
    "artist_name": "Bruce Springsteen",
    "number_of_tracks": 8,
    "total_playing_time": "39:28",
    "publisher": "Columbia Records",
    "reviews": [
      {
        "customer_id": 7,
        "rating": 4.5
      },
      {
        "customer_id": 12,
        "rating": 4.2
      },
      {
        "customer_id": 6,
        "rating": 4.8
      }
    ]
  },
  {
    "_id": 33,
    "product_name": "The Wall",
    "category": "other",
    "type": "CDs",
    "description": "Pink Floyd's rock opera exploring themes of isolation and war.",
    "dimensions": {
      "height": 5,
      "length": 5,
      "width": 1
    },
    "shipping_weight": 160,
    "price": 8.49,
    "supplier_cost": 4,
    "artist_name": "Pink Floyd",
    "number_of_tracks": 26,
    "total_playing_time": "81:08",
    "publisher": "Harvest Records",
    "reviews": [
      {
        "customer_id": 8,
        "rating": 4.8
      },
      {
        "customer_id": 13,
        "rating": 4.3
      },
      {
        "customer_id": 6,
        "rating": 4.7
      },
      {
        "customer_id": 7,
        "rating": 4.0
      }
    ]
  },
  {
    "_id": 34,
    "product_name": "Let It Be",
    "category": "other",
    "type": "CDs",
    "description": "The Beatles' final studio album featuring memorable songs and a rooftop concert.",
    "dimensions": {
      "height": 5,
      "length": 5,
      "width": 1
    },
    "shipping_weight": 140,
    "price": 9.99,
    "supplier_cost": 4.5,
    "artist_name": "The Beatles",
    "number_of_tracks": 12,
    "total_playing_time": "35:58",
    "publisher": "Apple Records",
    "reviews": [
      {
        "customer_id": 9,
        "rating": 4.7
      },
      {
        "customer_id": 14,
        "rating": 4.1
      },
      {
        "customer_id": 6,
        "rating": 4.0
      },
      {
        "customer_id": 7,
        "rating": 4.6
      }
    ]
  },
  {
    "_id": 35,
    "product_name": "A Night at the Opera",
    "category": "other",
    "type": "CDs",
    "description": "Queen's eclectic album featuring the epic 'Bohemian Rhapsody.'",
    "dimensions": {
      "height": 5,
      "length": 5,
      "width": 1
    },
    "shipping_weight": 155,
    "price": 8.79,
    "supplier_cost": 4.2,
    "artist_name": "Queen",
    "number_of_tracks": 12,
    "total_playing_time": "43:03",
    "publisher": "EMI Records",
    "reviews": [
      {
        "customer_id": 10,
        "rating": 4.6
      },
      {
        "customer_id": 15,
        "rating": 4.4
      },
      {
        "customer_id": 6,
        "rating": 4.2
      },
      {
        "customer_id": 7,
        "rating": 2.5
      }
    ]
  },
  {
    "_id": 36,
    "product_name": "iPhone 13 Pro",
    "category": "other",
    "type": "mobile phones",
    "description": "Apple's latest iPhone with advanced camera features and A15 Bionic chip.",
    "dimensions": {
      "height": 6,
      "length": 3,
      "width": 0.5
    },
    "shipping_weight": 200,
    "price": 999.99,
    "supplier_cost": 700,
    "brand": "Apple",
    "model": "iPhone 13 Pro",
    "colour": "Graphite",
    "features": [
      "Triple-camera system",
      "5G capable",
      "MagSafe technology"
    ],
    "reviews": [
      {
        "customer_id": 1,
        "rating": 4.8
      },
      {
        "customer_id": 6,
        "rating": 4.5
      },
      {
        "customer_id": 7,
        "rating": 4.9
      }
    ]
  },
  {
    "_id": 37,
    "product_name": "Samsung Galaxy Z Fold 3",
    "category": "other",
    "type": "mobile phones",
    "description": "Samsung's foldable smartphone with a large AMOLED display and S Pen support.",
    "dimensions": {
      "height": 6,
      "length": 3,
      "width": 0.2
    },
    "shipping_weight": 250,
    "price": 1499.99,
    "supplier_cost": 1100,
    "brand": "Samsung",
    "model": "Galaxy Z Fold 3",
    "colour": "Phantom Black",
    "features": [
      "Foldable display",
      "S Pen support",
      "Under-display camera"
    ],
    "reviews": [
      {
        "customer_id": 2,
        "rating": 4.6
      },
      {
        "customer_id": 7,
        "rating": 4.2
      },
      {
        "customer_id": 6,
        "rating": 4.8
      }
    ]
  },
  {
    "_id": 38,
    "product_name": "OnePlus 9 Pro",
    "category": "other",
    "type": "mobile phones",
    "description": "OnePlus flagship with Hasselblad camera system and fast charging.",
    "dimensions": {
      "height": 6,
      "length": 3,
      "width": 0.3
    },
    "shipping_weight": 210,
    "price": 899.99,
    "supplier_cost": 650,
    "brand": "OnePlus",
    "model": "9 Pro",
    "colour": "Morning Mist",
    "features": [
      "Hasselblad camera",
      "120Hz Fluid AMOLED display",
      "Warp Charge 65T"
    ],
    "reviews": [
      {
        "customer_id": 3,
        "rating": 4.5
      },
      {
        "customer_id": 8,
        "rating": 4.4
      },
      {
        "customer_id": 6,
        "rating": 4.8
      },
      {
        "customer_id": 7,
        "rating": 4.1
      }
    ]
  },
  {
    "_id": 39,
    "product_name": "Google Pixel 6 Pro",
    "category": "other",
    "type": "mobile phones",
    "description": "Google's flagship with a powerful camera system and Tensor processing unit.",
    "dimensions": {
      "height": 6,
      "length": 3,
      "width": 0.4
    },
    "shipping_weight": 200,
    "price": 899.99,
    "supplier_cost": 650,
    "brand": "Google",
    "model": "Pixel 6 Pro",
    "colour": "Stormy Black",
    "features": [
      "Triple-lens camera",
      "Tensor chip",
      "Android 12"
    ],
    "reviews": [
      {
        "customer_id": 4,
        "rating": 4.4
      },
      {
        "customer_id": 9,
        "rating": 4.3
      },
      {
        "customer_id": 6,
        "rating": 4.1
      },
      {
        "customer_id": 7,
        "rating": 4.0
      }
    ]
  },
  {
    "_id": 40,
    "product_name": "Xiaomi Mi 11 Ultra",
    "category": "other",
    "type": "mobile phones",
    "description": "Xiaomi's ultra-premium smartphone with a massive camera bump and Snapdragon 888.",
    "dimensions": {
      "height": 6,
      "length": 3,
      "width": 0.5
    },
    "shipping_weight": 220,
    "price": 1099.99,
    "supplier_cost": 800,
    "brand": "Xiaomi",
    "model": "Mi 11 Ultra",
    "colour": "Ceramic White",
    "features": [
      "108MP camera",
      "Snapdragon 888",
      "120x zoom"
    ],
    "reviews": [
      {
        "customer_id": 5,
        "rating": 4.3
      },
      {
        "customer_id": 10,
        "rating": 4.2
      },
      {
        "customer_id": 6,
        "rating": 4.5
      },
      {
        "customer_id": 7,
        "rating": 4.5
      }
    ]
  },
  {
    "_id": 41,
    "product_name": "Sony Xperia 1 III",
    "category": "other",
    "type": "mobile phones",
    "description": "Sony's flagship with a 4K OLED display and advanced camera capabilities.",
    "dimensions": {
      "height": 6,
      "length": 3,
      "width": 0.3
    },
    "shipping_weight": 210,
    "price": 1199.99,
    "supplier_cost": 900,
    "brand": "Sony",
    "model": "Xperia 1 III",
    "colour": "Frosted Black",
    "features": [
      "4K OLED display",
      "Triple-lens camera",
      "Snapdragon 888"
    ],
    "reviews": [
      {
        "customer_id": 6,
        "rating": 4.8
      },
      {
        "customer_id": 11,
        "rating": 4.6
      },
      {
        "customer_id": 7,
        "rating": 4.5
      }
    ]
  },
  {
    "_id": 42,
    "product_name": "Huawei P50 Pro",
    "category": "other",
    "type": "mobile phones",
    "description": "Huawei's premium smartphone with a Leica camera system and HarmonyOS.",
    "dimensions": {
      "height": 6,
      "length": 3,
      "width": 0.4
    },
    "shipping_weight": 200,
    "price": 899.99,
    "supplier_cost": 650,
    "brand": "Huawei",
    "model": "P50 Pro",
    "colour": "Golden Hour",
    "features": [
      "Leica camera",
      "HarmonyOS",
      "120Hz refresh rate"
    ],
    "reviews": [
      {
        "customer_id": 7,
        "rating": 4.7
      },
      {
        "customer_id": 12,
        "rating": 4.5
      },
      {
        "customer_id": 6,
        "rating": 4.8
      }
    ]
  },
  {
    "_id": 43,
    "product_name": "Motorola Edge 20 Pro",
    "category": "other",
    "type": "mobile phones",
    "description": "Motorola's sleek smartphone with a high-refresh-rate display and Snapdragon 870.",
    "dimensions": {
      "height": 6,
      "length": 3,
      "width": 0.3
    },
    "shipping_weight": 190,
    "price": 699.99,
    "supplier_cost": 500,
    "brand": "Motorola",
    "model": "Edge 20 Pro",
    "colour": "Midnight Blue",
    "features": [
      "90Hz display",
      "Snapdragon 870",
      "Triple-camera setup"
    ],
    "reviews": [
      {
        "customer_id": 8,
        "rating": 4.5
      },
      {
        "customer_id": 13,
        "rating": 4.4
      },
      {
        "customer_id": 6,
        "rating": 4.0
      },
      {
        "customer_id": 7,
        "rating": 3.2
      }
    ]
  },
  {
    "_id": 44,
    "product_name": "Oppo Find X3 Pro",
    "category": "other",
    "type": "mobile phones",
    "description": "Oppo's flagship with a unique design, vibrant display, and powerful camera system.",
    "dimensions": {
      "height": 6,
      "length": 3,
      "width": 0.3
    },
    "shipping_weight": 200,
    "price": 899.99,
    "supplier_cost": 650,
    "brand": "Oppo",
    "model": "Find X3 Pro",
    "colour": "Gloss Black",
    "features": [
      "120Hz LTPO AMOLED display",
      "Quad-lens camera",
      "SuperVOOC 2.0"
    ],
    "reviews": [
      {
        "customer_id": 9,
        "rating": 4.4
      },
      {
        "customer_id": 14,
        "rating": 4.3
      },
      {
        "customer_id": 6,
        "rating": 4.0
      },
      {
        "customer_id": 7,
        "rating": 4.5
      }
    ]
  },
  {
    "_id": 45,
    "product_name": "LG Velvet",
    "category": "other",
    "type": "mobile phones",
    "description": "LG's stylish smartphone with a dual-screen option and AI-powered camera features.",
    "dimensions": {
      "height": 6,
      "length": 3,
      "width": 0.3
    },
    "shipping_weight": 180,
    "price": 599.99,
    "supplier_cost": 400,
    "brand": "LG",
    "model": "Velvet",
    "colour": "Aurora Gray",
    "features": [
      "Dual-screen accessory",
      "Triple-lens camera",
      "AI CAM"
    ],
    "reviews": [
      {
        "customer_id": 10,
        "rating": 4.3
      },
      {
        "customer_id": 15,
        "rating": 4.2
      },
      {
        "customer_id": 6,
        "rating": 4.5
      },
      {
        "customer_id": 7,
        "rating": 4.5
      }
    ]
  },
  {
    "_id": 46,
    "product_name": "Nespresso VertuoPlus Coffee Maker",
    "category": "other",
    "type": "home appliances",
    "description": "Single-serve coffee and espresso machine with a stylish design and convenient features.",
    "dimensions": { "height": 15, "length": 8, "width": 10 },
    "shipping_weight": 5000,
    "price": 199.99,
    "supplier_cost": 129.99,
    "color": "Silver",
    "voltage": 120,
    "style": "VertuoPlus",
    "reviews": [
      { "customer_id": 6, "rating": 4.5 },
      { "customer_id": 7, "rating": 4.2 }
    ]
  },
  {
    "_id": 47,
    "product_name": "iRobot Roomba s9+",
    "category": "other",
    "type": "home appliances",
    "description": "Smart robot vacuum with advanced mapping and self-emptying capabilities.",
    "dimensions": { "height": 4, "length": 13, "width": 13 },
    "shipping_weight": 8000,
    "price": 899.99,
    "supplier_cost": 699.99,
    "color": "Black",
    "voltage": 120,
    "style": "Roomba s9+",
    "reviews": [
      { "customer_id": 6, "rating": 4.7 },
      { "customer_id": 7, "rating": 4.9 }
    ]
  },
  {
    "_id": 48,
    "product_name": "LG French Door Refrigerator",
    "category": "other",
    "type": "home appliances",
    "description": "Large-capacity refrigerator with advanced cooling technology and spacious interior.",
    "dimensions": { "height": 70, "length": 36, "width": 33 },
    "shipping_weight": 30000,
    "price": 1999.99,
    "supplier_cost": 1499.99,
    "color": "Stainless Steel",
    "voltage": 120,
    "style": "French Door",
    "reviews": [
      { "customer_id": 6, "rating": 4.2 },
      { "customer_id": 7, "rating": 4.5 }
    ]
  },
  {
    "_id": 49,
    "product_name": "Dyson Air Purifier TP04",
    "category": "other",
    "type": "home appliances",
    "description": "Advanced air purifier with HEPA filter and real-time air quality monitoring.",
    "dimensions": { "height": 41, "length": 8, "width": 8 },
    "shipping_weight": 10000,
    "price": 499.99,
    "supplier_cost": 349.99,
    "color": "White/Silver",
    "voltage": 120,
    "style": "TP04",
    "reviews": [
      { "customer_id": 6, "rating": 3.6 },
      { "customer_id": 7, "rating": 4.2 }
    ]
  },
  {
    "_id": 50,
    "product_name": "Instant Pot Duo Evo Plus",
    "category": "other",
    "type": "home appliances",
    "description": "Versatile multi-cooker with multiple cooking modes and advanced safety features.",
    "dimensions": { "height": 14, "length": 13, "width": 14 },
    "shipping_weight": 12000,
    "price": 129.99,
    "supplier_cost": 89.99,
    "color": "Stainless Steel",
    "voltage": 120,
    "style": "Duo Evo Plus",
    "reviews": [
      { "customer_id": 6, "rating": 4.6 },
      { "customer_id": 7, "rating": 3.9 }
    ]
  },
  {
    "_id": 51,
    "product_name": "Philips Sonicare DiamondClean Smart Toothbrush",
    "category": "other",
    "type": "home appliances",
    "description": "Smart electric toothbrush with personalized brushing modes and pressure sensor.",
    "dimensions": { "height": 9, "length": 3, "width": 1 },
    "shipping_weight": 500,
    "price": 149.99,
    "supplier_cost": 99.99,
    "color": "White",
    "voltage": 120,
    "style": "DiamondClean Smart",
    "reviews": [
      { "customer_id": 6, "rating": 4.8 },
      { "customer_id": 7, "rating": 3.7 }
    ]
  },
  {
    "_id": 52,
    "product_name": "Breville Smart Oven Air Fryer",
    "category": "other",
    "type": "home appliances",
    "description": "Compact convection oven with built-in air fryer for versatile cooking options.",
    "dimensions": { "height": 11, "length": 18, "width": 16 },
    "shipping_weight": 25000,
    "price": 299.99,
    "supplier_cost": 199.99,
    "color": "Stainless Steel",
    "voltage": 120,
    "style": "Smart Oven Air Fryer",
    "reviews": [
      { "customer_id": 6, "rating": 4.3 },
      { "customer_id": 7, "rating": 3.6 }
    ]
  },
  {
    "_id": 53,
    "product_name": "Dyson Hot + Cool Air Purifier",
    "category": "other",
    "type": "home appliances",
    "description": "Multipurpose air purifier and heater/fan with intelligent climate control.",
    "dimensions": { "height": 24, "length": 8, "width": 8 },
    "shipping_weight": 8000,
    "price": 499.99,
    "supplier_cost": 349.99,
    "color": "Iron/Blue",
    "voltage": 120,
    "style": "Hot + Cool",
    "reviews": [
      { "customer_id": 6, "rating": 3.9 },
      { "customer_id": 7, "rating": 4.5 }
    ]
  },
  {
    "_id": 54,
    "product_name": "Keurig K-Elite Single Serve Coffee Maker",
    "category": "other",
    "type": "home appliances",
    "description": "Single-serve coffee maker with strong brew and iced coffee settings.",
    "dimensions": { "height": 13, "length": 10, "width": 12 },
    "shipping_weight": 8000,
    "price": 129.99,
    "supplier_cost": 89.99,
    "color": "Brushed Silver",
    "voltage": 120,
    "style": "K-Elite",
    "reviews": [
      { "customer_id": 6, "rating": 4.2 },
      { "customer_id": 7, "rating": 4.6 }
    ]
  },
  {
    "_id": 55,
    "product_name": "Samsung 55-inch QLED 4K Smart TV",
    "category": "other",
    "type": "home appliances",
    "description": "Ultra HD smart TV with Quantum Dot technology for vibrant colors and smart connectivity.",
    "dimensions": { "height": 30, "length": 50, "width": 2 },
    "shipping_weight": 40000,
    "price": 899.99,
    "supplier_cost": 699.99,
    "color": "Titanium",
    "voltage": 120,
    "style": "QLED 4K Smart TV",
    "reviews": [
      { "customer_id": 6, "rating": 4.0 },
      { "customer_id": 7, "rating": 4.9 }
    ]
  }]
);

// this function calculates the average ratings for all of the products
// and then add it as a field to the products
function calculateAndAddAvgRating() {
  try {
    db.products.aggregate([
      {
        $addFields: {
          avg_rating: {
            $avg: "$reviews.rating"
          }
        }
      },
      {
        $out: "products"
      }
    ]);
  } catch (error) {
      print('Error in calculating average ratings')
  }

}

// we can then call the function
calculateAndAddAvgRating()


// creating the index on price of products
db.products.createIndex({ price: 1 }, { name: "price_index" });