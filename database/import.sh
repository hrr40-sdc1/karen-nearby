#!/bin/bash

LOCATION="/Users/user/Library/Application Support/Neo4j Desktop/Application/neo4jDatabases/database-b887754c-ff26-41e5-adb5-94ca4804b836/installation-3.5.9"
ECHO $LOCATION

rm -rf "$LOCATION"/data/graph.db
"$LOCATION"/bin/neo4j-admin import --database=graph.db --nodes="csvs/cities-header.csv,csvs/cities.csv" --nodes="csvs/listings-header.csv,csvs/listings-part1.csv,csvs/listings-part2.csv,csvs/listings-part3.csv,csvs/listings-part4.csv,csvs/listings-part5.csv" --nodes="csvs/photos-header.csv,csvs/photos.csv"
# "$LOCATION"/bin/neo4j restart

