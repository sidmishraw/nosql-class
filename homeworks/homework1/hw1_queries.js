/*
* @Author: Sidharth Mishra
* @Date:   2017-02-24 13:21:30
* @Last Modified by:   Sidharth Mishra
* @Last Modified time: 2017-02-25 01:01:12
*/

'use strict';


// 1. Download the zips.json file to your VM.

wget http://media.mongodb.org/zips.json

// 2. Import zips.json into MongoDB using mongoimport command. 
// Import the data into a collection called cityinfo in a database called usdata.

mongoimport --db usdata --collection cityinfo --file zips.json

// 3. Get the screenshot (screen 1) that shows all collections of the database usdata.

show dbs
use usdata
db.getCollectionNames()


// 4. Find all documents of cityinfo collection. (screen 2)

db.cityinfo.find().limit(10)


// 5. Find all documents with _id that contains 9503 in it. Do not include "loc" in the output.
// For example, expected documents in the output may include a document with "_id":"19503" and a document with "_id":"95037". (screen 3)

db.cityinfo.find( {
    "_id": {
      $regex: /.*9503.*/i
    }
  },
  {
    "loc": 0
  }
)



// 6. Find all cities with populations between 23,000 and 150,000 where the state they are in borders the pacific ocean. (screen 4)

db.cityinfo.distinct(
  "city",
  {
    $and: [
      {
        "pop": {
          $gte: 23000,
          $lte: 150000
        }
      },
      {
        "state": {
          $in: [
            "CA",
            "OR",
            "WA"
          ]
        }
      }
    ]
  }
)


// get the length of the array returned by distinct()
db.cityinfo.distinct(
  "city",
  {
    $and: [
      {
        "pop": {
          $gte: 23000,
          $lte: 150000
        }
      },
      {
        "state": {
          $in: [
            "CA",
            "OR",
            "WA"
          ]
        }
      }
    ]
  }
).length




// 7. Find all zip code in San Jose, New Work, or Washington that have a population between 6,000 and 11,000. (screen 5)
// question 7 - find zipcodes
// this output is not that great
// > db.getCollectionNames()
// [ "cityinfo", "zip_codes" ]
// > db.zip_codes.find()
// { "_id" : "10044", "value" : "10044" }
// { "_id" : "20005", "value" : "20005" }
// { "_id" : "20336", "value" : "20336" }
// { "_id" : "30673", "value" : "30673" }
// { "_id" : "48094", "value" : "48094" }
// { "_id" : "52353", "value" : "52353" }
// { "_id" : "95119", "value" : "95119" }
// { "_id" : "95135", "value" : "95135" }
// { "_id" : "95139", "value" : "95139" }

var zipcodes = db.cityinfo.mapReduce(
      function() { emit( this._id, this._id ) },
      function(key, values) { return { "zipcode": key } },
      {
        query: {
          $and:[
            {
              "city": {
                $in: [
                  "SAN JOSE",
                  "WASHINGTON",
                  "NEW YORK"
                ]
              }
            },
            {
              "pop": {
                $gte: 6000,
                $lte: 11000
              }
            }
          ]
        },
        out: "zip_codes"
      }
  )




// 7. Find all zip code in San Jose, New Work, or Washington that have a population between 6,000 and 11,000. (screen 5)
// question 7 - find zipcodes
// > db.zip_codes.find()
// { "_id" : "zipcode", "value" : { "zipcodes" : [ "10044", "20005", "20336", "30673", "48094", "52353", "95119", "95135", "95139" ] } }

var zipcodes = db.cityinfo.mapReduce(
      function() { emit( "zipcode", this._id ) },
      function(key, values) { return { "zipcodes": values } },
      {
        query: {
          $and:[
            {
              "city": {
                $in: [
                  "SAN JOSE",
                  "WASHINGTON",
                  "NEW YORK"
                ]
              }
            },
            {
              "pop": {
                $gte: 6000,
                $lte: 11000
              }
            }
          ]
        },
        out: "zip_codes"
      }
  )

// using the aggregation pipeline gives a better output
// so I'm thinking of keeping this

db.cityinfo.aggregate(
  {
    $match: {
      $and:[
        {
          "city": {
            $in: [
              "SAN JOSE",
              "WASHINGTON",
              "NEW YORK"
            ]
          }
        },
        {
          "pop": {
            $gte: 6000,
            $lte: 11000
          }
        }
      ]
    }
  },
  {
    $group: {
      "_id": "$city",
      "zipcode": {
        $push: "$_id"
      }
    }
  }
)




// 8. Add an embedded document called "Details" into all documents with a Santa Clara County zip code. 
// In Details, add the following fields with names and values: {county:"Santa Clara", medianIncome: 93500}. (screen 6)

db.cityinfo.updateMany(
  {
    "_id": {
      $in: [
        "95009",
        "95008",
        "95013",
        "95014",
        "95020",
        "94085",
        "95023",
        "94087",
        "94086",
        "94089",
        "94088",
        "95031",
        "95030",
        "95033",
        "95032",
        "95035",
        "95037",
        "94301",
        "95042",
        "94303",
        "95044",
        "94305",
        "95050",
        "94304",
        "95046",
        "94306",
        "95051",
        "95054",
        "95070",
        "95103",
        "95108",
        "95111",
        "95110",
        "95113",
        "95112",
        "95117",
        "95116",
        "95119",
        "95118",
        "95121",
        "95120",
        "95123",
        "95122",
        "95125",
        "95124",
        "95127",
        "95126",
        "95129",
        "95128",
        "95131",
        "95130",
        "95133",
        "95132",
        "95135",
        "95134",
        "95136",
        "95139",
        "95138",
        "95141",
        "95140",
        "95148",
        "94550",
        "95151",
        "95150",
        "94022",
        "94024",
        "95190",
        "94028",
        "94035",
        "94040",
        "94042",
        "94041",
        "94043",
        "95002"
      ]
    }
  },
  {
    $set: {
      "Details": {
        "county": "Santa Clara",
        "medianIncome": 93500
      }
    }
  },
  {
    upsert: true
  }
)



// 9. Find all documents that have an embedded document named Details without using the zip code. (screen 7)

db.cityinfo.find(
  {
    "Details" : {
      $exists: true
    }
  }
)

// limiting to 10

db.cityinfo.find(
  {
    "Details" : {
      $exists: true
    }
  }
).limit(10)

// verifying length

db.cityinfo.find(
  {
    "Details" : {
      $exists: true
    }
  }
).toArray().length


// 10. Use a MongoDB mapreduce function to find the population of every city and show the populations in the output. (screen 8)


db.cityinfo.mapReduce(
  function() {
    emit( this.city, this.pop )
  },
  function(key, values) {
    return Array.sum(values)
  },
  {
    out: "city_population"
  }
)

// 11. Use a MongoDB aggregate function to find the population of every city and show the populations in the output. (screen 9)
// used $sort for getting similar output as my mapReduce() query
// to compare
// map reduce had sorted result by default

db.cityinfo.aggregate(
  [
    {
      $sort: {
        "city": -1
      }
    },
    {
      $group: {
        "_id": "$city",
        "population": {
          $sum: "$pop"
        }
      }
    }
  ]
)


// 12. Compare the execution times of the mapreduce and the aggregate functions to find the population of every city. (Write your comparison result.)

// The mapReduce() took 1633 milliseconds

// {
//   "result" : "city_population",
//   "timeMillis" : 1633,
//   "counts" : {
//     "input" : 29353,
//     "emit" : 29353,
//     "reduce" : 6212,
//     "output" : 16584
//   },
//   "ok" : 1
// }

// and the aggregation pipeline or the aggregate() took 70 milliseconds 

// > db.system.profile.find().limit(1).pretty()
// {
//   "op" : "command",
//   "ns" : "usdata.cityinfo",
//   "command" : {
//     "aggregate" : "cityinfo",
//     "pipeline" : [
//       {
//         "$sort" : {
//           "city" : -1
//         }
//       },
//       {
//         "$group" : {
//           "_id" : "$city",
//           "population" : {
//             "$sum" : "$pop"
//           }
//         }
//       }
//     ],
//     "cursor" : {
      
//     }
//   },
//   "cursorid" : 36591943087,
//   "keysExamined" : 0,
//   "docsExamined" : 29353,
//   "hasSortStage" : true,
//   "numYield" : 229,
//   "locks" : {
//     "Global" : {
//       "acquireCount" : {
//         "r" : NumberLong(468)
//       }
//     },
//     "Database" : {
//       "acquireCount" : {
//         "r" : NumberLong(234)
//       }
//     },
//     "Collection" : {
//       "acquireCount" : {
//         "r" : NumberLong(233)
//       }
//     }
//   },
//   "nreturned" : 101,
//   "responseLength" : 4346,
//   "protocol" : "op_command",
//   "millis" : 70,
//   "planSummary" : "COLLSCAN",
//   "ts" : ISODate("2017-02-25T08:04:14.647Z"),
//   "client" : "127.0.0.1",
//   "appName" : "MongoDB Shell",
//   "allUsers" : [ ],
//   "user" : ""
// }

// Looking at the results, aggregation pipeline is definitely faster, considering I even did a sort.
