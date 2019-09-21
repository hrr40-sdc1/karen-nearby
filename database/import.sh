#!/bin/bash

LOCATION="/Users/user/Library/Application Support/Neo4j Desktop/Application/neo4jDatabases/database-b9c093a3-4bc8-4690-94f8-9d3bb342b957/installation-3.5.9"
ECHO $LOCATION

rm -rf "$LOCATION"/data/databases/graph.db
"$LOCATION"/bin/neo4j-admin import --database=graph.db --nodes="csvs/headers/listings-header.csv,csvs/listings-data.*"
# "$LOCATION"/bin/neo4j restart

