---
title: "Create an IVFFLAT index \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/alloydb/docs/ai/create-ivfflat-index
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs/dataplex-catalog-integration
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/ai/create-ivfflat-index
  title: "Create an IVFFLAT index \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\
    \ Documentation"
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
Create an IVFFLAT index
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to use stored embeddings to generate indexes and query
embeddings using an IVFFlat index with AlloyDB for PostgreSQL.
For more information about storing embedding, see
Store vector embeddings .
Note: Before you create an index, verify that you add embedding vectors to
a table in your AlloyDB database.
Before you begin
Before you can start creating indexes, you must complete the following
prerequisites.
Embedding vectors are added to a table in your
AlloyDB database.
The vector extension version 0.5.0 or later that is based on pgvector , extended by Google for
AlloyDB is installed.
CREATE EXTENSION IF NOT EXISTS vector ;
Create an IVFFlat index
Stock pgvector also provides a version of the IVF index named
IVFFlat
that provides faster build time and has a smaller memory footprint as
compared to the hnsw index.
To create an IVFFlat index, complete the following steps:
CREATE INDEX INDEX_NAME ON TABLE
USING ivfflat ( EMBEDDING_COLUMN DISTANCE_FUNCTION )
WITH ( lists = LIST_COUNT );
Replace the following:
INDEX_NAME : the name of the index you want to
create—for example, my-ivf-index .
TABLE : the table to add the index to.
EMBEDDING_COLUMN : a column that stores vector
data.
DISTANCE_FUNCTION : the distance function to use
with this index. Choose one of the following:
L2 distance: vector_l2_ops
Inner product: vector_ip_ops
Cosine distance: vector_cosine_ops
LIST_COUNT : the number of lists to use with this
index. For more information about how to decide this value, see Tune an IVFFlat index .
To create this index on an embedding column that uses the real[] data
type instead of vector , cast the column into the vector data type:
CREATE INDEX INDEX_NAME ON TABLE
USING ivfflat ( CAST ( EMBEDDING_COLUMN AS vector ( DIMENSIONS ))) '}} DISTANCE_FUNCTION )
WITH ( lists = LIST_COUNT );
Replace DIMENSIONS with the dimensional width of the
embedding column. For more information about how to find the dimensions,
see the vector_dims function in Vector
functions .
To view the indexing progress, use the pg_stat_progress_create_index view:
SELECT * FROM pg_stat_progress_create_index ;
The phase column shows the current state of your index creation.
To tune your index for a target recall and QPS balance, see Tune an
IVFFlat index .
Run a query
After you store and index the embeddings in your database, you can start
querying using the pgvector query functionality .
To find the nearest semantic neighbors for an embedding vector, you can run the
following example query, where you set the same distance function that you used
during the index creation.
SELECT * FROM TABLE
ORDER BY EMBEDDING_COLUMN DISTANCE_FUNCTION_QUERY [ ' EMBEDDING ' ]
LIMIT ROW_COUNT
Replace the following:
TABLE : the table containing the embedding to compare the
text to.
INDEX_NAME : the name of the index you want to use—for
example, my-scann-index .
EMBEDDING_COLUMN : the column containing the stored
embeddings.
DISTANCE_FUNCTION_QUERY : the distance function to use with this
query. Choose one of the following based on the distance function used
while creating the index:
L2 distance: <->
Inner product: <#>
Cosine distance: <=>
EMBEDDING : the embedding vector you want to find the nearest stored
semantic neighbors of.
ROW_COUNT : the number of rows to return.
Specify 1 if you want only the single best match.
For more information about other query examples, see
Querying .
You can also use the embedding() function to translate the
text into a vector. You apply the vector to one of the
pgvector nearest-neighbor operators, <-> for L2 distance, to find the database rows with the
most semantically similar embeddings.
Because embedding() returns a real array, you must explicitly cast the
embedding() call to vector in order to use these values with pgvector
operators.
What's next
Create a ScaNN index
Run vector similarity searches
Tune vector query performance
Vector index metrics
Learn how to build a smart shopping assistant with AlloyDB, pgvector, and model endpoint management .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
