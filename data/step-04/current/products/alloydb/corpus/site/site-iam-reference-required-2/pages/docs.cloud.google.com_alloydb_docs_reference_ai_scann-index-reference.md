---
title: "AlloyDB ScaNN Index reference \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/alloydb/docs/reference/ai/scann-index-reference
knowledge_key: corpus
source_id: site-iam-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs/reference/iam-roles-permissions
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/reference/ai/scann-index-reference
  title: "AlloyDB ScaNN Index reference \_|\_ AlloyDB for PostgreSQL \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
AlloyDB for PostgreSQL
Reference
Send feedback
AlloyDB ScaNN Index reference
Stay organized with collections
Save and categorize content based on your preferences.
This page provides a detailed reference for the tuning parameters available for Scalable Nearest Neighbors (ScaNN) indexes in AlloyDB for PostgreSQL.
For a step-by-step tutorial on how to implement vector search from start to finish, see the guide on how to Perform a vector search .
Note: Before creating a ScaNN index, you must install the alloydb_scann and vector extensions.
For details on the CREATE INDEX command, refer to Create indexes .
Tuning parameters
The following index and query parameters are used to find the right balance of recall and queries per second (QPS).
Option type
Index creation
Query runtime
Tuning parameter
Description
Option type
max_num_levels
The maximum number of centroid levels of the K-means clustering tree. Two-level tree index : Set to 1 by default for a two-level tree (1 centroid level + bottom leaf level).
Three-level tree index : Set to 2 by default for a three-level tree (2 centroid levels + bottom leaf level)
Set the value to 2 if the number of vector rows exceeds 100 million rows.
Set the value to 1 if the number of vector rows are less than 10 million rows.
Set to either 1 or 2 if the number of vector rows lie between 10 million and 100 million rows to optimize for index build time (set to 2) or optimize for search recall (set to 1).
Index creation (optional)
num_leaves
The number of partitions to apply to this index. The number of partitions you apply to when creating an index affects the index performance. By increasing partitions for a set number of vectors, you create a more fine-grained index, which improves recall and query performance. However, this comes at the cost of longer index creation times. Since three-level trees build faster than two-level trees, you can increase the num_leaves_value when creating a three-level tree index to achieve better performance. Two-level index : Set this value to any value between 1 and 10M . For an index that balances fast index build and good search performance, use sqrt(ROWS) as a starting point, where ROWS is the number of vector rows. The number of vectors that each partition holds is calculated by ROWS/sqrt(ROWS) = sqrt(ROWS) . Since a two-level tree index can be created on a dataset with less than 10 million vector rows, each partition will hold less than ( sqrt(10M) ) vectors, which is 3200 vectors. For optimal vector search quality, it's recommended to minimize the number of vectors in each partition. The recommended partition size is about 100 vectors per partition, so set num_leaves to ROWS/100 . If you have 10 million vectors you would set num_leaves to 100,000.
Three-level index : Set this value to any value between 1 and 10M . If you are unsure about selecting the exact value, use power(ROWS, 2/3) as a starting point, where ROWS is the number of vector rows. The number of vectors that each partition holds is calculated by ROWS/power(ROWS, 2/3) = power(ROWS, 1/3) . Since a three-level tree index can be created on a dataset with vector rows more than 100 million, each partition will hold more than ( power(100M, 1/3) ) vectors, which is 465 vectors. For optimal performance, it's recommended to minimize the number of vectors in each partition. The recommended partition size is about 100 vectors per partition, so set num_leaves to ROWS/100 . If you have 100 million vectors you would set num_leaves to 1 million.
Index creation (required)
quantizer
The type of quantizer you want to use for the K-means tree. The default value is set to SQ8 which provides better query performance with minimal recall loss (typically less than 1-2%). Set it to FLAT if a recall of 99% or higher is required.
Index creation (optional)
scann.enable_pca
Enables Principal Component Analysis (PCA), which is a dimension reduction technique used to automatically
reduce the size of the embedding when possible. This option is enabled by default. Set to
false if you observe deterioration in recall.
Index creation (optional)
auto_maintenance ( Preview )
This index option lets you automatically maintain a ScaNN index so that as your dataset grows, AlloyDB analyzes and updates centroids, and splits large outlier partitions. This improves queries per second (QPS) and search results automatically. Set auto_maintenance=on in the WITH clause when creating an index to enable this feature for manually tuned indexes. For automatically tuned ScaNN indexes, automatic index maintenance is enabled by default. To use automatically tuned indexes, you must set alloydb.enable_preview_features to on .
Index creation (optional)
scann.pct_leaves_to_search ( Preview )
This database flag lets you automatically manage the number of leaves or partitions to search . Set this value to the current number of partitions. For example, to search 1% of of current number of partitions, set this value to 1 . You can set this parameter to any value between 0 to 100 . The default value is 0 , which disables this parameter and uses the scann.num_leaves_to_search to calculate the number of leaves to search. The parameter is disabled by default.
scann.num_leaves_to_search
This database flag controls the absolute number of leaves or partitions to search which lets you trade off between recall and QPS. The default value is 1% of the value set in num_leaves . A higher value will result in better recall but lower QPS. Similarly, a lower value will result in lower recall but higher QPS.
Query runtime (optional)
scann.pre_reordering_num_neighbors
The database flag, when set, specifies the number of candidate neighbors to consider during the reordering stages after the initial search identifies a set of candidates. Set this parameter to a value higher than the number of neighbors you want the query to return. A higher value results in better recall, but a lower QPS. Set this value to 0 to disable reordering. The default is 0 if PCA is not enabled during index creation. Otherwise, the default is 50 x K , where K is the LIMIT specified in the query.
Query runtime (optional)
scann.num_search_threads
The number of searcher threads for multi-thread search. This can help reduce single query latency by using more than one thread for ScaNN ANN search in latency-sensitive applications. This setting doesn't improve single query latency if the database is already cpu-bound. The default value is 2 .
Query runtime (optional)
scann.satisfy_limit ( Preview )
When set to relaxed_order , the database flag addresses insufficient recall. Insufficient recall can occur when a query's observed recall falls below the target recall, which is more likely when using filters. This setting helps achieve the target recall by allowing the vector scan to continue searching beyond the num_leaves_to_search limit until a sufficient number of results are found.
Query runtime (optional)
scann.max_pct_leaves_to_search ( Preview )
This database flag sets an upper bound on the percentage of total leaves that can be visited for queries that you run with scann.satisfy_limit enabled. This is the only upper bound GUC available and applies to both auto and manual search modes. It prevents the search from overshooting, which might significantly degrade performance. This is applicable when scann.satisfy_limit is turned on. You can set this parameter to any value between 0 to 100 . The default value is 15% . This default value is based on the rationale that if a search needs to examine more than 15% of the leaves, the filter is likely selective enough that approximate nearest neighbor (ANN) search doesn't provide a benefit, making pre-filtering k-nearest neighbor (KNN) a more suitable choice.
Query runtime (optional)
What's next
Get started with vector embeddings using AlloyDB AI .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
