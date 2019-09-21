DROP SCHEMA "blurg" CASCADE;

CREATE SCHEMA "blurg";

CREATE TABLE "blurg".LISTINGS ( listingId INT PRIMARY KEY, listingName CHARACTER (30), photoId INT, cityId INT,
  COST INT, stars INT, reviews INT, TYPE CHARACTER (30)
);

testdb = # CREATE SCHEMA IF NOT EXISTS myschema;

testdb = #
CREATE TABLE myschema.listing (
  listingId INT NOT NULL,
  listingName VARCHAR(30) NOT NULL,
  cityId INT NOT NULL,
  photoId VARCHAR(30),
  cost INT,
  stars INT,
  reviews INT,
  type VARCHAR(30),
  PRIMARY KEY (listingId)
);

testdb = #
SELECT
  *
FROM
  myschema.listing;

  photoId char(10) NOT NULL,
  url TEXT NOT NULL,
  PRIMARY KEY (photoId));

;
