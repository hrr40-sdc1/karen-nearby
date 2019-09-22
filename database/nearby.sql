
DROP db
DROP DATABASE IF EXISTS testdb
CREATE db
CREATE DATABASE testdb

DROP SCHEMA testschema CASCADE;
CREATE SCHEMA IF NOT EXISTS "testschema";

DROP TABLE IF EXISTS testschema.photo;
CREATE TABLE testschema.photo ( photoId char(10) NOT NULL, url TEXT NOT NULL,  label char(10), PRIMARY KEY (photoId));
SELECT * FROM testschema.photo;


\COPY testschema.photo FROM 'csvs/photos-data1k.csv'  CSV HEADER;

DROP TABLE IF EXISTS testschema.city;
CREATE TABLE testschema.city ( cityId INT NOT NULL,  cityName VARCHAR(100) NOT NULL,  countryCode VARCHAR(200),  label char(10), PRIMARY KEY (cityId));

\COPY testschema.city FROM 'csvs/cities-data65900.csv'  CSV HEADER;

DROP TABLE IF EXISTS testschema.listing;
CREATE TABLE testschema.listing ( listingId INT NOT NULL,  listingName VARCHAR(30) NOT NULL,  photoId VARCHAR(30),  cityId INT NOT NULL,  cost INT,  stars INT, reviews INT,  type VARCHAR(30), label char(10), PRIMARY KEY (listingId));


\COPY testschema.listing FROM 'csvs/listings-data2m.csv'  CSV;


SELECT COUNT(1) FROM testschema.listing WHERE cityId = '27';
SELECT COUNT(1) FROM testschema.listing WHERE cityId = '15280';
SELECT * FROM testschema.photo WHERE photoId = '958';
SELECT * FROM testschema.listing WHERE listingId = '11117';
https://imgur.com/a/6ZFilT4
https://imgur.com/a/cKQTCg5
https://imgur.com/a/I1G9hDZ
https://imgur.com/a/yToQeDH