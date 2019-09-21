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
CREATE (c)-[:NEARBY]->(l);

CALL apoc.periodic.iterate("MATCH (l:Listing), (c:City)
WHERE l.cityId = c.cityId
RETURN l, c",
"CREATE (c)-[:NEARBY]->(l)", {batchSize:10000, parallel:false})

CREATE INDEX ON :City(cityId)
CREATE INDEX ON :Listing(listingId)
CREATE INDEX ON :Photo(photoId)
MATCH (n) RETURN n limit 25


MATCH (house:Listing {listingId: '9000000'})
RETURN house

{
  "cost": "355",
  "reviews": "496",
  "photoId": "971",
  "listingId": "9000000",
  "listingName": "alias sit",
  "cityId": "78",
  "stars": "5",
  "type": "Private Room"
}
Started streaming 1 records after 1 ms and completed after 10 ms.

MATCH (photo:Photo) RETURN photo.url
Started streaming 1002 records after 1 ms and completed after 10 ms.

MATCH (:City { cityId: '17' })-->(listing)
RETURN listing.listingName
Started streaming 99389 records after 2 ms and completed after 36787 ms.
"officiis dolor"
"ullam exercitationem"
"soluta quia"
"magnam non"
"repellat nulla"
"sit id"
"doloribus ullam"
"quod praesentium"
"odio aut"
"laudantium sapiente"
"sed nulla"
"quia quia"
"aut amet"
"aut quis"
"nam nihil"
"ea quia"
....

MATCH (:City { cityId: '100' })-->(listing)
RETURN listing.listingName


MATCH (n) WHERE EXISTS(n.cityId) RETURN DISTINCT "node" as entity, n.cityId AS cityId LIMIT 25 UNION ALL MATCH ()-[r]-() WHERE EXISTS(r.cityId) RETURN DISTINCT "relationship" AS entity, r.cityId AS cityId LIMIT 25

Started streaming 25 records in less than 1 ms and completed after 9 ms.


MATCH (l:Listing)
WITH l
MATCH (c:City)
WHERE l.cityId = c.cityId
CREATE (c)-[:NEARBY]->(l);

CALL apoc.periodic.iterate("MATCH (l:Listing), (c:City)
WHERE l.cityId = c.cityId
RETURN l, c",
"CREATE (c)-[:NEARBY]->(l)", {batchSize:10000, parallel:false})

CREATE INDEX ON :City(cityId)
CREATE INDEX ON :Listing(listingId)
CREATE INDEX ON :Photo(photoId)
MATCH (n) RETURN n limit 25


MATCH (house:Listing {listingId: '9000000'})
RETURN house

{
  "cost": "355",
  "reviews": "496",
  "photoId": "971",
  "listingId": "9000000",
  "listingName": "alias sit",
  "cityId": "78",
  "stars": "5",
  "type": "Private Room"
}
Started streaming 1 records after 1 ms and completed after 10 ms.

MATCH (photo:Photo) RETURN photo.url
Started streaming 1002 records after 1 ms and completed after 10 ms.

MATCH (:City { cityId: '17' })-->(listing)
RETURN listing.listingName
Started streaming 99389 records after 2 ms and completed after 36787 ms.
"officiis dolor"
"ullam exercitationem"
"soluta quia"
"magnam non"
"repellat nulla"
"sit id"
"doloribus ullam"
"quod praesentium"
"odio aut"
"laudantium sapiente"
"sed nulla"
"quia quia"
"aut amet"
"aut quis"
"nam nihil"
"ea quia"
....

MATCH (:City { cityId: '100' })-->(listing)
RETURN listing.listingName


MATCH (n) WHERE EXISTS(n.cityId) RETURN DISTINCT "node" as entity, n.cityId AS cityId LIMIT 25 UNION ALL MATCH ()-[r]-() WHERE EXISTS(r.cityId) RETURN DISTINCT "relationship" AS entity, r.cityId AS cityId LIMIT 25

Started streaming 25 records in less than 1 ms and completed after 9 ms.

CALL apoc.periodic.iterate("MATCH (l:Listing), (c:City)
WHERE l.cityId = c.cityId
RETURN l",
"CREATE (l)-[:NEARBY]->(c)", {batchSize:10000, parallel:false})