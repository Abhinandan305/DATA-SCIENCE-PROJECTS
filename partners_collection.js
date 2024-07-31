use("AMAZONE");

db.partners.insertMany([
  
{
  "_id": 1,
  "name": "postman pat",
  "gender": "male",
  "age": 32,
  "activity_status": "idle",
  "current_location": {
    "type": "Point",
    "coordinates": [
      53.48004992263606,
      -2.2527415906449435
    ]
  },
  "available": "yes"
},

{
  "_id": 2,
  "name": "bill bilson",
  "gender": "male",
  "age": 48,
  "activity_status": "idle",
  "current_location": {
    "type": "Point",
    "coordinates": [
      53.47634561987544,
      -2.2443732860526824
    ]
  },
  "available": "yes"
},

{
  "_id": 3,
  "name": "jill johnson",
  "gender": "female",
  "age": 26,
  "activity_status": "idle",
  "current_location": {
    "type": "Point",
    "coordinates": [
      53.478976288547884,
      -2.2560462589619497
    ]
  },
  "available": "yes"
},

{
  "_id": 4,
  "name": "sam samsom",
  "gender": "female",
  "age": 35,
  "activity_status": "idle",
  "current_location": {
    "type": "Point",
    "coordinates": [
      53.4838,
      -2.2426
    ]
  },
  "available": "yes"
},

{
  "_id": 5,
  "name": "robert robinson",
  "gender": "male",
  "age": 40,
  "activity_status": "idle",
  "current_location": {
    "type": "Point",
    "coordinates": [
      53.4796,
      -2.2418
    ]
  },
  "available": "yes"
},

{
  "_id": 6,
  "name": "frederic ford",
  "gender": "male",
  "age": 51,
  "activity_status": "idle",
  "current_location": {
    "type": "Point",
    "coordinates": [
      53.4796,
      -2.2418
    ]
  },
  "available": "yes"
}


]);

db.partners.createIndex({ "current_location": "2dsphere" });



