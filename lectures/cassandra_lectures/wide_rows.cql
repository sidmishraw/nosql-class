CREATE KEYSPACE IF NOT EXISTS mykeyspace
WITH REPLICATION = {'class':'SimpleStrategy', 'replication_factor':3};

use mykeyspace;
CREATE TABLE demo_wide
(id TIMESTAMP, city VARCHAR, hits COUNTER, PRIMARY KEY (id,city))
WITH COMPACT STORAGE;

UPDATE demo_wide SET hits = hits + 1 WHERE id = '2016-01-09+0000' AND city = 'NY';
UPDATE demo_wide SET hits = hits + 5 WHERE id = '2016-01-09+0000' AND city = 'Bethesda';
UPDATE demo_wide SET hits = hits + 2 WHERE id = '2016-01-09+0000' AND city = 'SF';
UPDATE demo_wide SET hits = hits + 3 WHERE id = '2016-01-10+0000' AND city = 'NY';
UPDATE demo_wide SET hits = hits + 1 WHERE id = '2016-01-10+0000' AND city = 'Baltimore';
