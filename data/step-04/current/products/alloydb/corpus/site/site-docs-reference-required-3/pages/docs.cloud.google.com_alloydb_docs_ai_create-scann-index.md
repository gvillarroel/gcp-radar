---
title: "Create a ScaNN index \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/alloydb/docs/ai/create-scann-index
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs/ai/data-agent-overview
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/ai/create-scann-index
  title: "Create a ScaNN index \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
AlloyDB for PostgreSQL
Guides
Send feedback
Create a ScaNN index
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to use stored embeddings to generate indexes and query
embeddings using ScaNN index with AlloyDB for PostgreSQL.
For more information about storing embedding, see
Store vector embeddings .
AlloyDB alloydb_scann , a
PostgreSQL extension developed by Google that implements a highly
efficient nearest-neighbor index powered by the ScaNN
algorithm .
The ScaNN index is a tree-based quantization index for approximate
nearest neighbor search. It provides lower index building time and smaller
memory footprint as compared to HNSW . In addition, it provides faster QPS in
comparison to HNSW based on the workload.
Note: Before you create an index, verify that you add embedding vectors to
a table in your AlloyDB database. If you try to generate a ScaNN index
on an empty or partitioned table, then you might encounter some issues. For more
information about the errors generated, see Troubleshoot ScaNN index errors . To create an index on an empty or small table, see Force index creation on empty or small tables .
Before you begin
Before you can start creating indexes, you must complete the following
prerequisites.
Embedding vectors are added to a table in your
AlloyDB database.
The vector extension that is based on pgvector , extended by Google for
AlloyDB, and the alloydb_scann extension is installed:
CREATE EXTENSION IF NOT EXISTS alloydb_scann CASCADE ;
Note: You can use the alloydb_scann extension with PostgreSQL 14, 15, 16, and 17 compatible databases.
If you want to create automatically tuned ScaNN indexes, make sure that the
scann.enable_preview_features
flag is enabled. If you don't want to enable preview features, or for production instances, you can create a ScaNN index with specific parameters instead.
Note: We don't recommend enabling preview features on production instances.
Create an automatically tuned ScaNN index
Preview
— Auto index creation
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
With the auto index feature, you can simplify index creation to automatically create indexes that are optimized for search performance or balanced index build times and search performance.
When you use the AUTO mode, you only need to specify the table name and embedding column along with the distance function that you want to use. You can optimize the index for search performance or balance between index build times and search performance.
There is also an option to use the MANUAL mode to create indexes with granular control over other index tuning parameters.
Create a ScaNN index in AUTO mode
Some points to note before creating indexes in AUTO mode are as follows:
AlloyDB can't create a ScaNN index for tables with insufficient data.
You can't set index creation parameters, such as num_leaves , when you create indexes in AUTO mode.
Auto maintenance is enabled by default for all indexes created in AUTO mode.
To create an index in AUTO mode, enable the feature flag scann.enable_zero_knob_index_creation . This enables auto maintenance.
After you enable the flag, run the following command:
CREATE INDEX INDEX_NAME ON TABLE
USING scann ( EMBEDDING_COLUMN DISTANCE_FUNCTION )
WITH ( mode = 'AUTO' );
Replace the following:
INDEX_NAME : the name of the index that you want to
create—for example, my_scann_index . The index names are shared
across your database. Verify that each index name is unique to each
table in your database.
TABLE : the table to add the index to.
EMBEDDING_COLUMN : the column that stores vector
data.
DISTANCE_FUNCTION : the distance function to use
with this index. Choose one of the following:
L2 distance: l2
Dot product: dot_product
Cosine distance: cosine
OPTIMIZATION (Optional): By default, a search optimized index is created. Set to one of the following:
SEARCH_OPTIMIZED (Default): to optimize both vector search recall and vector search latency at a cost of longer index build time.
BALANCED : to create an index that balances index build time and search performance.
Create a ScaNN index in MANUAL mode
If you enabled the scann.enable_preview_features flag and you want granular control over the tuning parameters, you can create the index in MANUAL mode.
Note: You can't set optimization parameters such as SEARCH_OPTIMIZED or BALANCED when you create indexes in MANUAL mode.
To create a ScaNN index in MANUAL mode, run the following command:
CREATE INDEX INDEX_NAME ON TABLE
USING scann ( EMBEDDING_COLUMN DISTANCE_FUNCTION )
WITH ( mode = 'MANUAL' , num_leaves = NUM_LEAVES_VALUE , quantizer = QUANTIZER , max_num_levels = MAX_NUM_LEVELS );
Replace the following:
INDEX_NAME : the name of the index you want to
create—for example, my_scann_index . The index names are shared
across your database. Verify that each index name is unique to each
table in your database.
TABLE : the table to add the index to.
EMBEDDING_COLUMN : the column that stores vector
data.
DISTANCE_FUNCTION : the distance function to use
with this index. Choose one of the following:
L2 distance: l2
Dot product: dot_product
Cosine distance: cosine
NUM_LEAVES_VALUE : the number of partitions to apply to
this index. Set to any value between 1 and 10 million. For more information
about how to choose this value, see Tune a ScaNN index .
QUANTIZER : the type of quantizer to use. Note that ScaNN index can be loaded into the columnar engine for further accelerating the vector search. Available options are as follows:
SQ8 : provides a balance of query performance with minimal recall loss, typically less than 1-2%. This is the default value.
AH : AH is up to 4x compressed when compared with SQ8 . Consider this for potentially better query performance when the columnar engine is enabled and your index and table data are populated into the columnar engine, subject to its configured size. For more information, see Best practices for tuning ScaNN .
FLAT : provides the highest recall of 99% or higher at the cost of search performance.
MAX_NUM_LEVELS : the maximum number of levels of the
K-means clustering tree. Set to 1 (default) for two-level tree-based
quantization, and set to 2 for three-level tree-based quantization.
You can add other index creation or query runtime parameters to tune your index. For more information, see Tune a ScaNN index .
Create a ScaNN index with specific parameters
If your application has specific requirements for recall and index build
times, then you can manually create the index. You can create a two-level or
three-level tree index based on your workload. For more information about tuning
parameters, see Tune a ScaNN
index .
Two-level tree index
To apply a two-level tree index using the ScaNN algorithm to a column
containing stored vector embeddings, run the following DDL query:
CREATE INDEX INDEX_NAME ON TABLE
USING scann ( EMBEDDING_COLUMN DISTANCE_FUNCTION )
WITH ( num_leaves = NUM_LEAVES_VALUE , quantizer = QUANTIZER );
Replace the following:
INDEX_NAME : the name of the index you want to
create—for example, my_scann_index . The index names are shared
across your database. Ensure that each index name is unique to each
table in your database.
TABLE : the table to add the index to.
EMBEDDING_COLUMN : a column that stores vector
data.
DISTANCE_FUNCTION : the distance function to use
with this index. Choose one of the following:
L2 distance: l2
Dot product: dot_product
Cosine distance: cosine
NUM_LEAVES_VALUE : the number of partitions to apply to
this index. Set to any value between 1 and 10 million. For more information
about how to choose this value, see Tune a ScaNN index .
QUANTIZER : the type of quantizer to use. Note that ScaNN index can be loaded into the columnar engine for further accelerating the vector search. Available options are as follows:
SQ8 : provides a balance of query performance with minimal recall loss, typically less than 1-2%. This is the default value.
AH : AH is up to 4x compressed when compared with SQ8 . Consider this for potentially better query performance when the columnar engine is enabled and your index and table data are populated into the columnar engine, subject to its configured size. For more information, see Best practices for tuning ScaNN .
FLAT : provides the highest recall of 99% or higher at the cost of search performance.
Three-level tree index
To create a three-level tree index using the ScaNN algorithm to a column
containing stored vector embeddings, run the following DDL query:
CREATE INDEX INDEX_NAME ON TABLE
USING scann ( EMBEDDING_COLUMN DISTANCE_FUNCTION )
WITH ( num_leaves = NUM_LEAVES_VALUE , max_num_levels = 2 );
After you create the index, you can run nearest-neighbor search queries that
make use of the index by following the instructions in Make a nearest-neighbor
query with given text .
The index parameters must be set to strike a right balance between QPS and
recall. For more information about tuning the ScaNN index, see Tune a ScaNN
index .
To create this index on an embedding column that uses the real[] data type
instead of vector , cast the column into the vector data type:
CREATE INDEX INDEX_NAME ON TABLE
USING scann ( CAST ( EMBEDDING_COLUMN AS vector ( DIMENSIONS )) DISTANCE_FUNCTION )
WITH ( num_leaves = NUM_LEAVES_VALUE , max_num_levels = MAX_NUM_LEVELS );
Replace DIMENSIONS with the dimensional width of the
embedding column. For more information about how to find the dimensions,
see the vector_dims function in Vector
functions .
To achieve a consistent search experience, enable auto-maintenance when you create a ScaNN index. For more information, see Maintain vector
indexes . This feature is available in
Preview .
To view the indexing progress, use the pg_stat_progress_create_index view:
SELECT * FROM pg_stat_progress_create_index ;
The phase column shows the current state of your index creation. After the index building phase is complete, the row for the index isn't visible.
To tune your index for an average recall and QPS balance, see Tune a ScaNN index .
Force index creation on empty or small tables
AlloyDB has validations to prevent the creation of a ScaNN index on an empty table or a table with very few rows, as this might lead to suboptimal performance. However, in some development or testing scenarios, you might need to create an index on an empty or small table. You can enforce index creation in these cases.
Warning: Forcing index creation on a table with little or no data has the following implications:
The index is trained on insufficient data, which can result in poor recall for your vector similarity searches.
Write performance to the database might be slower.
To force index generation, complete the following steps:
Set the scann.allow_blocked_operations creation session-level parameter
to true on the database:
SET scann . allow_blocked_operations = true ;
Assign the SUPERUSER privilege to the user that runs these queries on the database:
CREATE USER USER_NAME WITH SUPERUSER PASSWORD PASSWORD ;
Replace the following:
USER_NAME : the name of the user you want to grant the privilege to.
PASSWORD : the password of the user.
Build indexes in parallel
To build your index faster, AlloyDB might automatically spawn multiple parallel workers, depending on your dataset and the type of index that you choose.
The parallel index build is often triggered if you're creating a 3-level ScaNN
index or if your dataset exceeds 100M rows.
Though AlloyDB automatically optimizes the number of parallel workers, you can tune the parallel workers using the max_parallel_maintenance_workers , max_parallel_workers , and the min_parallel_table_scan_size PostgreSQL query planning parameters.
Note: To avoid out-of-memory issues when you generate the index, make sure that the maintenance_work_mem database flag (GUC) is set to a value less than total machine memory.
Run a query
After you store and index the embeddings in your database, you can start
querying your data. You cannot run
bulk search queries using the alloydb_scann extension.
To find the nearest semantic neighbors for a text string, you can use the google_ml.embedding() function to translate the text into a vector.
Because google_ml.embedding() returns a real array, you must explicitly cast the function call to vector before applying it to one of the nearest-neighbor operators, for example, <-> for L2 distance. These operators can then use the ScaNN index to find the database rows with the most semantically similar embeddings.
SELECT * FROM TABLE
ORDER BY EMBEDDING_COLUMN DISTANCE_FUNCTION_QUERY
google_ml . embedding (
model_id = > ' MODEL_ID ' ,
content = > ' CONTENT ' ):: vector
LIMIT ROW_COUNT
Replace the following:
TABLE : the table containing the embedding to compare the
text to.
INDEX_NAME : the name of the index you want to use—for
example, my_scann_index .
EMBEDDING_COLUMN : the column containing the stored
embeddings.
DISTANCE_FUNCTION_QUERY : the distance function to use with this
query. Choose one of the following based on the distance function used
while creating the index:
L2 distance: <->
Inner product: <#>
Cosine distance: <=>
MODEL_ID : the ID of the registered embedding model you want to use.
CONTENT : the text string you want to translate into an embedding and search for.
ROW_COUNT : the number of rows to return. Specify 1 if you want only the single best match.
What's next
Run vector similarity searches
Tune vector query performance
Vector index metrics
Learn how to build a smart shopping assistant with AlloyDB, pgvector, and model endpoint management .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
