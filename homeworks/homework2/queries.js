/*
 * @Author: Sidharth Mishra
 * @Date:   2017-03-08 18:59:45
 * @Last Modified by:   Sidharth Mishra
 * @Last Modified time: 2017-03-10 23:59:09
 */



'use strict';

// start 3 mongod instances

// mongod --port 27021 --dbpath ~/Documents/SJSU/ClassesSpring2017/CS_185_C_NoSQL/homeworks/homework2/data/active1 --replSet testset --smallfiles --oplogSize 128
// mongod --port 28022 --dbpath ~/Documents/SJSU/ClassesSpring2017/CS_185_C_NoSQL/homeworks/homework2/data/active2 --replSet testset --smallfiles --oplogSize 128
// mongod --port 29023 --dbpath ~/Documents/SJSU/ClassesSpring2017/CS_185_C_NoSQL/homeworks/homework2/data/active3 --replSet testset --smallfiles --oplogSize 128


// importing data into the replicaset
// mongoimport --host Sidharths-MBP.attlocal.net --port 27021 --collection cityinfo --db usdata2 --file /Users/sidmishraw/Documents/SJSU/ClassesSpring2017/CS_185_C_NoSQL/homeworks/homework1/zips.json


// creating a new collection using mongo functions
function create_collection_1000() {

  var docs = []

  for(var i = 0; i < 1000; i ++) {
    
    docs.push({
      "_id": i,
      "name": "student#" + i
    })
  }

  // print(JSON.stringify(docs))
  // inserts the records into `students` collection of `usdata` db
  db.students.insertMany(docs)
}






// connect to one mongod instance using mongo shell

// mongo --host Sidharths-MBP.attlocal.net --port 27021

// or

// mongo Sidharths-MBP.attlocal.net:27021

// running mongoshell from fish shell caused the issue.


// console copy

Sidharths - MacBook - Pro: homework2 sidmishraw$ mongo--host Sidharths - MacBook - Pro.local--port 27021
MongoDB shell version v3 .4 .2
connecting to: mongodb: //Sidharths-MacBook-Pro.local:27021/
    2017 - 03 - 09 T11: 11: 51.583 - 0800 W NETWORK[thread1] Failed to connect to 10.250 .252 .153: 27021 after 5000 ms milliseconds, giving up.
2017 - 03 - 09 T11: 11: 51.584 - 0800 E QUERY[thread1] Error: couldn 't connect to server Sidharths-MacBook-Pro.local:27021, connection attempt failed :
connect @src / mongo / shell / mongo.js: 237: 13
@(connect): 1: 6
exception: connect failed
Sidharths - MacBook - Pro: homework2 sidmishraw$ mongo--host Sidharths - MacBook - Pro.local--port 27021
MongoDB shell version v3 .4 .2
connecting to: mongodb: //Sidharths-MacBook-Pro.local:27021/
    MongoDB server version: 3.4 .2
Server has startup warnings:
    2017 - 03 - 09 T11: 11: 49.946 - 0800 I CONTROL[initandlisten]
2017 - 03 - 09 T11: 11: 49.946 - 0800 I CONTROL[initandlisten] ** WARNING: Access control is not enabled
for the database.
2017 - 03 - 09 T11: 11: 49.946 - 0800 I CONTROL[initandlisten] ** Read and write access to data and configuration is unrestricted.
2017 - 03 - 09 T11: 11: 49.946 - 0800 I CONTROL[initandlisten]
2017 - 03 - 09 T11: 11: 49.946 - 0800 I CONTROL[initandlisten]
2017 - 03 - 09 T11: 11: 49.946 - 0800 I CONTROL[initandlisten] ** WARNING: soft rlimits too low.Number of files is 256, should be at least 1000 >
    > rs.initiate() {
        "info2": "no configuration specified. Using a default configuration for the set",
        "me": "Sidharths-MacBook-Pro.local:27021",
        "ok": 1
    }
testset: SECONDARY > rs.conf() {
    "_id": "testset",
    "version": 1,
    "protocolVersion": NumberLong(1),
    "members": [{
        "_id": 0,
        "host": "Sidharths-MacBook-Pro.local:27021",
        "arbiterOnly": false,
        "buildIndexes": true,
        "hidden": false,
        "priority": 1,
        "tags": {

        },
        "slaveDelay": NumberLong(0),
        "votes": 1
    }],
    "settings": {
        "chainingAllowed": true,
        "heartbeatIntervalMillis": 2000,
        "heartbeatTimeoutSecs": 10,
        "electionTimeoutMillis": 10000,
        "catchUpTimeoutMillis": 2000,
        "getLastErrorModes": {

        },
        "getLastErrorDefaults": {
            "w": 1,
            "wtimeout": 0
        },
        "replicaSetId": ObjectId("58c1a9015a77c950013ad848")
    }
}
testset: PRIMARY > rs.status() {
    "set": "testset",
    "date": ISODate("2017-03-09T19:12:21.819Z"),
    "myState": 1,
    "term": NumberLong(1),
    "heartbeatIntervalMillis": NumberLong(2000),
    "optimes": {
        "lastCommittedOpTime": {
            "ts": Timestamp(1489086733, 1),
            "t": NumberLong(1)
        },
        "appliedOpTime": {
            "ts": Timestamp(1489086733, 1),
            "t": NumberLong(1)
        },
        "durableOpTime": {
            "ts": Timestamp(1489086733, 1),
            "t": NumberLong(1)
        }
    },
    "members": [{
        "_id": 0,
        "name": "Sidharths-MacBook-Pro.local:27021",
        "health": 1,
        "state": 1,
        "stateStr": "PRIMARY",
        "uptime": 41,
        "optime": {
            "ts": Timestamp(1489086733, 1),
            "t": NumberLong(1)
        },
        "optimeDate": ISODate("2017-03-09T19:12:13Z"),
        "infoMessage": "could not find member to sync from",
        "electionTime": Timestamp(1489086722, 2),
        "electionDate": ISODate("2017-03-09T19:12:02Z"),
        "configVersion": 1,
        "self": true
    }],
    "ok": 1
}
testset: PRIMARY > rs.add("Sidharths-MacBook-Pro.local:28022") { "ok": 1 }
testset: PRIMARY > rs.add("Sidharths-MacBook-Pro.local:29023") { "ok": 1 }
testset: PRIMARY > rs.status() {
    "set": "testset",
    "date": ISODate("2017-03-09T19:12:57.998Z"),
    "myState": 1,
    "term": NumberLong(1),
    "heartbeatIntervalMillis": NumberLong(2000),
    "optimes": {
        "lastCommittedOpTime": {
            "ts": Timestamp(1489086772, 1),
            "t": NumberLong(1)
        },
        "appliedOpTime": {
            "ts": Timestamp(1489086772, 1),
            "t": NumberLong(1)
        },
        "durableOpTime": {
            "ts": Timestamp(1489086772, 1),
            "t": NumberLong(1)
        }
    },
    "members": [{
        "_id": 0,
        "name": "Sidharths-MacBook-Pro.local:27021",
        "health": 1,
        "state": 1,
        "stateStr": "PRIMARY",
        "uptime": 77,
        "optime": {
            "ts": Timestamp(1489086772, 1),
            "t": NumberLong(1)
        },
        "optimeDate": ISODate("2017-03-09T19:12:52Z"),
        "infoMessage": "could not find member to sync from",
        "electionTime": Timestamp(1489086722, 2),
        "electionDate": ISODate("2017-03-09T19:12:02Z"),
        "configVersion": 3,
        "self": true
    }, {
        "_id": 1,
        "name": "Sidharths-MacBook-Pro.local:28022",
        "health": 1,
        "state": 2,
        "stateStr": "SECONDARY",
        "uptime": 17,
        "optime": {
            "ts": Timestamp(1489086772, 1),
            "t": NumberLong(1)
        },
        "optimeDurable": {
            "ts": Timestamp(1489086772, 1),
            "t": NumberLong(1)
        },
        "optimeDate": ISODate("2017-03-09T19:12:52Z"),
        "optimeDurableDate": ISODate("2017-03-09T19:12:52Z"),
        "lastHeartbeat": ISODate("2017-03-09T19:12:56.204Z"),
        "lastHeartbeatRecv": ISODate("2017-03-09T19:12:57.207Z"),
        "pingMs": NumberLong(0),
        "syncingTo": "Sidharths-MacBook-Pro.local:27021",
        "configVersion": 3
    }, {
        "_id": 2,
        "name": "Sidharths-MacBook-Pro.local:29023",
        "health": 1,
        "state": 2,
        "stateStr": "SECONDARY",
        "uptime": 5,
        "optime": {
            "ts": Timestamp(1489086772, 1),
            "t": NumberLong(1)
        },
        "optimeDurable": {
            "ts": Timestamp(1489086772, 1),
            "t": NumberLong(1)
        },
        "optimeDate": ISODate("2017-03-09T19:12:52Z"),
        "optimeDurableDate": ISODate("2017-03-09T19:12:52Z"),
        "lastHeartbeat": ISODate("2017-03-09T19:12:56.204Z"),
        "lastHeartbeatRecv": ISODate("2017-03-09T19:12:53.172Z"),
        "pingMs": NumberLong(0),
        "configVersion": 3
    }],
    "ok": 1
}
testset: PRIMARY >




// For Amazon AWS (virtual machines)
// first configure tcp rules for all the ports for all the instances
// upgrade the mongo instances to the latest version
// update the iptables of the instances and update the hostnames as well
// to update the hostnames with their public dns names
// bash -c 'echo <public-dns-name> > /etc/hostname && hostname -F /etc/hostname'

