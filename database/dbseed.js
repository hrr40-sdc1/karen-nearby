LOAD CSV WITH HEADERS FROM "file:///cities.csv" AS row
CREATE (n:City) SET n = row

LOAD CSV WITH HEADERS FROM "file:///photos.csv" AS row
CREATE (n:Photo) SET n = row

LOAD CSV WITH HEADERS FROM "file:///listings.csv" AS row
CREATE (n:Listing) SET n = row,
n.cost = toInteger(row.cost),
n.stars = toInteger(row.stars),
n.reviews = toInteger(row.reviews)

CREATE INDEX ON :City(cityId);
CREATE INDEX ON :Photo(photoId);
CREATE INDEX ON :Listing(listingId);


MATCH (l:Listing)
WITH l
MATCH (c:City)
WHERE l.cityId = c.cityId
CREATE (c)-[:CITY]->(l);
