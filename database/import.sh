#!/bin/bash

LOCATION="/Users/user/Library/Application Support/Neo4j Desktop/Application/neo4jDatabases/database-cf05eee6-72ff-4d1e-8ada-b0a92933c8e6/installation-3.5.9"
ECHO $LOCATION

rm -rf "$LOCATION"/data/graph.db
"$LOCATION"/bin/neo4j-admin import --database=graph.db --nodes="csvs/headers/cities-header.csv,csvs/cities-data.*" --nodes="csvs/headers/listings-header.csv,csvs/listings-data.*" --nodes="csvs/headers/photos-header.csv,csvs/photos-data.*"
# "$LOCATION"/bin/neo4j restart

