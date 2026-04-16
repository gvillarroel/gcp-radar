---
title: "Maintain vector indexes \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/alloydb/docs/ai/maintain-vector-indexes
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/ai/maintain-vector-indexes
  title: "Maintain vector indexes \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\
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
Maintain vector indexes
Stay organized with collections
Save and categorize content based on your preferences.
This page describes options for maintaining vector
indexes. Maintaining indexes helps to ensure that the indexes adapt to data changes that might impact the
accuracy of your search results. Use the strategies in this page to avoid degradation
in query performance as your dataset grows.
Before you begin
Install or update the vector and alloydb_scann extensions.
If the vector and alloydb_scann extensions aren't installed, install the
latest extension versions.
CREATE EXTENSION IF NOT EXISTS vector ;
CREATE EXTENSION IF NOT EXISTS alloydb_scann ;
If the vector and alloydb_scann extensions are already installed, upgrade the
extensions to the latest version.
ALTER EXTENSION vector UPDATE ;
ALTER EXTENSION alloydb_scann UPDATE ;
View vector index metrics
If your table is prone to frequent updates or insertions, then we recommend
periodically reindexing the existing ScaNN index
in order to improve the recall accuracy for your index. You can monitor
index metrics to view changes in vector distributions or vector mutations since
the index was built, and then reindex accordingly.
For more information about metrics, see View vector index metrics .
Maintain indexes automatically
Preview
— Automatic index maintenance
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
The automatic index maintenance feature lets AlloyDB
incrementally manage the index so that as your dataset grows,
AlloyDB continuously analyzes and updates centroids and splits
large outlier partitions. This helps maintain the index for comparable queries
per second (QPS) and search result quality. Any updates made by automatic
maintenance are permanent until a subsequent maintenance run.
You can use the scann.enable_preview_features database flag (GUC) along with the
index-level auto_maintenance parameter while creating a ScaNN index to enable automatic index maintenance of ScaNN indexes.
The automatic index maintenance feature is enabled by default for automatically
tuned ScaNN
indexes . For
indexes created manually, after you enable the scann.enable_preview_features
flag, you can set the auto_maintenance parameter during index creation or you
use the scann_index_maintenance function to trigger automatic index
maintenance on-demand.
Warning: We don't recommend using the auto_maintenance=on parameter in conjunction with max_num_levels=2 . In rare circumstances, this combination might lead to index corruption.
To enable AlloyDB to maintain an index automatically, enable the
scann.enable_preview_features flag:
gcloud alloydb instances update INSTANCE_ID \
--database-flags scann.enable_preview_features=on \
--region= REGION_ID \
--cluster= CLUSTER_ID \
--project= PROJECT_ID
Replace the following:
INSTANCE_ID : The ID of the instance.
REGION_ID : The region where the instance is placed—for example,
us-central1 .
CLUSTER_ID : The ID of the cluster where the instance is placed.
PROJECT_ID : The ID of the project where the cluster is placed.
Any updates made to the index as a result of auto maintenance are permanent
until AlloyDB updates the index again.
Enable auto maintenance during index creation
To create a manual ScaNN index with automatic index maintenance enabled, run the following example command:
CREATE INDEX INDEX_NAME ON TABLE \
USING scann ( EMBEDDING_COLUMN DISTANCE_FUNCTION ) \
WITH ( mode = MANUAL , num_leaves = NUM_LEAVES_VALUE , auto_maintenance = on );
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
this index. Set to any value between 1 to 1048576. For more information
about how to decide this value, see Tune a ScaNN index .
You can increase the throughput of automatic index maintenance across multiple indexes by configuring the
scann.max_background_workers
database flag. Increasing the number of workers increases the number of indexes processed in a unit of time; it does not reduce the processing time for a single index. Optionally, you can also set the
scann.maintenance_background_naptime_s
database flag to control the minimum delay between automatic index maintenance
runs.
Configure pct_leaves_to_search for automatic index maintenance
If you have enabled automatic index maintenance, then AlloyDB
automatically splits partitions based on heuristics—for example, splitting large outlier partitions that exceed a certain size. As
the number of partitions grows due to these splits, you should adjust the number
of leaves to search to maintain optimal performance.
To manage the number of leaves to search automatically, use
pct_leaves_to_search . This parameter lets you specify a percentage of number
of partitions to search. If you expect your dataset to grow significantly, then
start by setting the pct_leaves_to_search value to 1. The parameter is
disabled by default.
Set this value to the percentage of current number of partitions. For example, to search 1%
of current number of partitions, set this value to 1 . You
can set this parameter to any value between 0 to 100 .
The default value is 0 , which disables this parameter and uses the
scann.num_leaves_to_search to calculate the number of leaves to search.
To set the pct_leaves_to_search flag on your database, run the following command:
ALTER DATABASE DATABASE_NAME SET scann . pct_leaves_to_search = PERCENTAGE_LEAVES_TO_SEARCH ;
Replace the following:
DATABASE_NAME : the name of the database.
PERCENTAGE_LEAVES_TO_SEARCH : the percentage of num_leaves to search.
Manually invoke index maintenance
If you want to invoke maintenance on a particular index on-demand, then run the following command. This function is available in alloydb_scann version 0.1.2 or higher.
To use this function, you must first enable the scann.enable_preview_features flag as described in Maintain indexes automatically .
SELECT scann_index_maintenance ( ' INDEX_NAME ' );
Manually rebuild your index
You can manually rebuild your index if you want to
rebuild it with the configurations you specified when it was created.
To manually rebuild your index, run the following command:
REINDEX INDEX CONCURRENTLY INDEX_NAME ;
Replace INDEX_NAME with the name of the index you want to
rebuild—for example, my_scann_index . The index names are shared
across your database. Ensure that each index name is unique to each
table in your database.
For more information about reindexing in PostgreSQL, see
REINDEX .
What's next
Vector index metrics
Optimize vector query performance for ScaNN
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
