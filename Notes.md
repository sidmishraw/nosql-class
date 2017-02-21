# NoSQL notes
2/2/2017


## Limitations of RDBMS
### Scalabilty problem of distributed DBMS -
*  Since the transactions need to implement ACID, the concurrency needs locks and this will lead to
a 2 phase commit (2PC).
*  2PC introduces high latency and wait times and also might have partial failures that cause this.

### Impedance mismatch (Object and Relational Model)
*  The way both application and database understand the data differs.
Application understands the data as objects, but the database doesn't understand the data as an object.
*  For eg - Java and Python understand the data as object, but a database like MySQL understands the data as 
a table having tuples and attributes.
*  Application stores the data as objects into memory, but the database persists the data into the disk as tables.
*  Need to convert data back into object from tables when reading the data from disk (reading from disk is done by the DBMS).
*  This is 'impedance mismatch'.
*  Incurrs a convertion overhead if using a ORM layer(Object-Relational Mapping).

### Normalized data
*  The normalized data, needs joins when reading data.
*  Joins are costly operations.

### Horizontal scaling (used by NoSQL DBMS)
*  Add cheap h/w and scale horizontally, doesn't scale out like in case of vertical scaling that concerntrates on adding more power to the same h/w.


### CAP Theorem -- rules for NoSQL DBs
C - Consistency
A - Availability
P - Network Partitions (needs to be supported by all systems)
*  Among the 3 above, only 2 need to be supported.
*  Some NoSQL Dbs concenrtrate on C or A but need to implement P.


* *  Cassandra is optimized for writes - not strong consistency, but high availability
* *  writes are very efficient. But the reads are not consistent.


### Consistency in NoSQL context
*  Preserve consistency then availibilty goes down.
*  Consistency is normally tunable.
*  If the system has strong consistency (if a single node fails, the write fails; since the write will not be confirmed by all the nodes in the cluster.)
*  For this reason, the NoSQL DBs provide tunable consistency, so that we can go ahead with a tradeoff, where instead of all the nodes replying back for confirmation a fraction of them can go ahead with this.


### Eventually consistent
*  Not immediately, but all the nodes are going to be consistent in time (with replications).


#### Master Slave replication style
*  hadoop uses this.
*  Mongo uses replica set.
*  single node for handling writes - called the master

#### Peer to Peer
*  cassandra uses this
*  all nodes have same weight

### Sharding
*  Break data and distribute it across multiple servers.


### Partition vs Sharding
*  RDBMS adapts vertical partioning (do it when normalizing data), i.e - dividing data by attributes
*  horizontal partioning, i.e - divide the data by row based on some logic, like the value of some attribute.


### Pushed the logic of recognizing data from DBMS to the application
*  This is the benefit of the NoSQL dbs

* Mongo stores the data by stemming (Porter algo?)

### Versioning for concurrency control
*  Versioning is used to detect problems and not solve the problem.

### Take a look at Etags for versioning control

### Versioning is made so that a peer to peer system can easily remove a node and add a node


### Graph store is strictly not Relational Model, but it is different from other NoSQL models


### Key-Value store - Redis(also called a data-structure store)
*  cannot query atomic data, since the value is opaque to the DB
### Document Store - (also key-value)
*  can query atomic data

### Aggregate data model
*  Unit of sharding
*  Tells how to shard the data(partition the data)
*  A collection of related objects to be treated as an unit.




