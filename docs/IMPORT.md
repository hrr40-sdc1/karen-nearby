➜  database git:(seed) ✗ sh ./import.sh
/Users/user/Library/Application Support/Neo4j Desktop/Application/neo4jDatabases/database-2d0e623b-9781-4645-bc0b-5ad7130bc342/installation-3.5.9
Neo4j version: 3.5.9
Importing the contents of these files into /Users/user/Library/Application Support/Neo4j Desktop/Application/neo4jDatabases/database-2d0e623b-9781-4645-bc0b-5ad7130bc342/installation-3.5.9/data/databases/graph.db:
Nodes:
  /Users/user/work/hrr40-sdc1/karen-nearby/database/csvs/headers/cities-header.csv
  /Users/user/work/hrr40-sdc1/karen-nearby/database/csvs/cities-data65900.csv

  /Users/user/work/hrr40-sdc1/karen-nearby/database/csvs/headers/listings-header.csv
  /Users/user/work/hrr40-sdc1/karen-nearby/database/csvs/listings-data2m.csv
  /Users/user/work/hrr40-sdc1/karen-nearby/database/csvs/listings-data4m.csv
  /Users/user/work/hrr40-sdc1/karen-nearby/database/csvs/listings-data6m.csv
  /Users/user/work/hrr40-sdc1/karen-nearby/database/csvs/listings-data8m.csv
  /Users/user/work/hrr40-sdc1/karen-nearby/database/csvs/listings-data10m.csv

  /Users/user/work/hrr40-sdc1/karen-nearby/database/csvs/headers/photos-header.csv
  /Users/user/work/hrr40-sdc1/karen-nearby/database/csvs/photos-data1k.csv

Available resources:
  Total machine memory: 8.00 GB
  Free machine memory: 1.44 GB
  Max heap memory : 910.50 MB
  Processors: 4
  Configured max memory: 6.40 GB
  High-IO: true

WARNING: 1.20 GB memory may not be sufficient to complete this import. Suggested memory distribution is:
heap size: 1.00 GB
minimum free and available memory excluding heap size: 1.12 GBImport starting 2019-09-18 10:47:04.418-0700
  Estimated number of nodes: 10.12 M
  Estimated number of node properties: 80.59 M
  Estimated number of relationships: 0.00
  Estimated number of relationship properties: 0.00
  Estimated disk space usage: 1.34 GB
  Estimated required memory usage: 1.12 GB

InteractiveReporterInteractions command list (end with ENTER):
  c: Print more detailed information about current stage
  i: Print more detailed information

(1/4) Node import 2019-09-18 10:47:04.695-0700
  Estimated number of nodes: 10.12 M
  Estimated disk space usage: 1.34 GB
  Estimated required memory usage: 1.12 GB
.......... .......... .......... .......... ..........   5% ∆5s 872ms
.......... .......... .......... .......... ..........  10% ∆4s 23ms
.......... .......... .......... .......... ..........  15% ∆3s 629ms
.......... .......... .......... .......... ..........  20% ∆5s 650ms
.......... .......... .......... .......... ..........  25% ∆4s 50ms
.......... .......... .......... .......... ..........  30% ∆5s 35ms
.......... .......... .........- .......... ..........  35% ∆341ms
.......... .......... .......... .......... ..........  40% ∆1ms
.......... .......... .......... .......... ..........  45% ∆1s 226ms
.......... .......... .......... .......... ..........  50% ∆1s 205ms
.......... .......... .......... .......... ..........  55% ∆1s 203ms
.......... .......... .......... .......... ..........  60% ∆1s 5ms
.......... .......... .......... .......... ..........  65% ∆806ms
.......... .......... .......... .......... ..........  70% ∆402ms
.......... .......... .......... .......... ..........  75% ∆0ms
.......... .......... .......... .......... ..........  80% ∆136ms
.......... .......... .......... .......... ..........  85% ∆0ms
.......... .......... .......... .......... ..........  90% ∆1ms
.......... .......... .......... .......... ..........  95% ∆0ms
.......... .......... .......... .......... .......... 100% ∆0ms

(2/4) Relationship import 2019-09-18 10:47:41.573-0700
  Estimated number of relationships: 0.00
  Estimated disk space usage: 0.00 B
  Estimated required memory usage: 1.12 GB
(3/4) Relationship linking 2019-09-18 10:47:41.752-0700
  Estimated required memory usage: 1.10 GB
(4/4) Post processing 2019-09-18 10:47:42.014-0700
  Estimated required memory usage: 1020.01 MB
-......... .......... .......... .......... ..........   5% ∆404ms
.......... .......... .......... .......... ..........  10% ∆1ms
.......... .......... .......... .......... ..........  15% ∆200ms
.......... .......... .......... .......... ..........  20% ∆1ms
.......... .......... .......... .......... ..........  25% ∆201ms
.......... .......... .......... .......... ..........  30% ∆1ms
.......... .......... .......... .......... ..........  35% ∆201ms
.......... .......... .......... .......... ..........  40% ∆1ms
.......... .......... .......... .......... ..........  45% ∆0ms
.......... .......... .......... .......... ..........  50% ∆201ms
.......... .......... .......... .......... ..........  55% ∆0ms
.......... .......... .......... .......... ..........  60% ∆0ms
.......... .......... .......... .......... ..........  65% ∆1ms
.......... .......... .......... .......... ..........  70% ∆201ms
.......... .......... .......... .......... ..........  75% ∆0ms
.......... .......... .......... .......... ..........  80% ∆0ms
.......... .......... .......... .......... ..........  85% ∆228ms
.......... .......... .......... .......... ..........  90% ∆1ms
.......... .......... .......... .......... ..........  95% ∆0ms
.......... .......... .......... .......... ...-...... 100% ∆207ms


IMPORT DONE in 41s 274ms.
Imported:
  10066898 nodes
  0 relationships
  80199672 properties
Peak memory usage: 1.12 GB
➜  database git:(seed) ✗