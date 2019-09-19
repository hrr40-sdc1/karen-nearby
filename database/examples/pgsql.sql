DROP SCHEMA "blurg" CASCADE;
CREATE SCHEMA "blurg";
CREATE TABLE "blurg".LISTINGS(
  listingId INT primary key,
  listingName CHARACTER (30),
  photoId INT,
  cityId INT,
  cost INT,
  stars INT,
  reviews INT,
  type CHARACTER (30)
);

testdb=#
create schema myschema;

testdb=#
create table myschema.company(
  ID   INT              NOT NULL,
  NAME VARCHAR (20)     NOT NULL,
  AGE  INT              NOT NULL,
  ADDRESS  CHAR (25),
  SALARY   DECIMAL (18, 2),
  PRIMARY KEY (ID)
);
testdb=# select * from myschema.company;
