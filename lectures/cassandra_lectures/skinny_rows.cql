CREATE KEYSPACE IF NOT EXISTS mykeyspace
WITH REPLICATION = {'class':'SimpleStrategy', 'replication_factor':3};

use mykeyspace;
CREATE TABLE demo_skinny (id INT, name VARCHAR, age INT, PRIMARY KEY(id));
INSERT INTO demo_skinny (id, name, age) VALUES (1, 'Jennie', 39);
INSERT INTO demo_skinny (id, name, age) VALUES (2, 'Samantha', 23);
INSERT INTO demo_skinny (id, name) VALUES (3, 'Lee');
