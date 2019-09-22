#!/bin/bash

LOCATION="/Users/user/Library/Application Support/Neo4j Desktop/Application/neo4jDatabases/database-174c871d-efd7-40f2-9a84-aa9c62c967c5/installation-3.5.9"
ECHO $LOCATION

rm -rf "$LOCATION"/data/databases/graph.db
"$LOCATION"/bin/neo4j-admin import --database=graph.db  --nodes="csvs/headers/cities-header.csv,csvs/cities-data.*" --nodes="csvs/headers/listings-header.csv,csvs/listings-data.*"
# "$LOCATION"/bin/neo4j restart
