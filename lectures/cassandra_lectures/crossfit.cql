REATE KEYSPACE IF NOT EXISTS mykeyspace
WITH REPLICATION = {'class':'SimpleStrategy', 'replication_factor':3};

use mykeyspace;

CREATE TABLE CROSSFIT (
    country_code text,
    state_province text,
    city text,
    gym_name text,
    since int,
    PRIMARY KEY (country_code, state_province, city, gym_name,since)
) WITH CLUSTERING ORDER BY (state_province DESC, city ASC, gym_name ASC);

INSERT INTO CROSSFIT (country_code, state_province, city, gym_name,since)VALUES ('USA', 'CA', 'San Francisco', 'San Francisco CrossFit', 2000);
INSERT INTO CROSSFIT (country_code, state_province, city, gym_name,since) VALUES ('USA', 'CA', 'San Francisco', 'LaLanne Fitness CrossFit', 1999);
INSERT INTO CROSSFIT (country_code, state_province, city, gym_name,since) VALUES ('USA', 'NY', 'New York', 'CrossFit NYC', 2010);
INSERT INTO CROSSFIT (country_code, state_province, city, gym_name,since) VALUES ('USA', 'NY', 'New York', 'CrossFit Metropolis', 2017);
INSERT INTO CROSSFIT (country_code, state_province, city, gym_name,since) VALUES ('USA', 'NY', 'Brooklyn', 'CrossFit Brooklyn', 2012);
INSERT INTO CROSSFIT (country_code, state_province, city, gym_name,since) VALUES ('USA', 'NV', 'Las Vegas', 'CrossFit Las Vegas', 1992);
INSERT INTO CROSSFIT (country_code, state_province, city, gym_name,since) VALUES ('USA', 'NV', 'Las Vegas', 'Kaizen CrossFit', 1988);
INSERT INTO CROSSFIT (country_code, state_province, city, gym_name,since) VALUES ('CAN', 'ON', 'Toronto', 'CrossFit Toronto', 2015);
INSERT INTO CROSSFIT (country_code, state_province, city, gym_name,since) VALUES ('CAN', 'ON', 'Toronto', 'CrossFit Leslieville', 2013);
INSERT INTO CROSSFIT (country_code, state_province, city, gym_name,since) VALUES ('CAN', 'BC', 'Vancouver', 'CrossFit Vancouver', 2011);
INSERT INTO CROSSFIT (country_code, state_province, city, gym_name,since) VALUES ('CAN' , 'BC', 'Vancouver', 'CrossFit BC', 1997);
