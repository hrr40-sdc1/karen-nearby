#!/bin/bash

LOCATION="/Users/user/Library/Application Support/Neo4j Desktop/Application/neo4jDatabases/database-3611f38a-b524-49de-96c0-41870dc3f071/installation-3.5.9"
ECHO $NEO4J_HOME

rm -rf "$LOCATION"/data/graph.db
"$LOCATION"/bin/neo4j-admin import --database=graph.db --nodes=csvs/cities.csv --nodes=csvs/listings.csv --nodes=csvs/photos.csv
"$LOCATION"/bin/neo4j restart