# NoSQL notes
2/2/2017


## Limitations of RDBMS
### Scalabilty problem of distributed DBMS -
> Since the transactions need to implement ACID, the concurrency needs locks and this will lead to
a 2 phase commit (2PC).
> 2PC introduces high latency and wait times and also might have partial failures that cause this.

### Impedance mismatch (Object and Relational Model)
> The way both application and database understand the data differs.
Application understands the data as objects, but the database doesn't understand the data as an object.
> For eg - Java and Python understand the data as object, but a database like MySQL understands the data as 
a table having tuples and attributes.
> Application stores the data as objects into memory, but the database persists the data into the disk as tables.
> Need to convert data back into object from tables when reading the data from disk (reading from disk is done by the DBMS).
> This is 'impedance mismatch'.
> incurrs a convertion overhead if using a ORM layer(Object-Relational Mapping).

### Normalized data
> The normalized data, needs joins when reading data.
> Joins are costly operations.

