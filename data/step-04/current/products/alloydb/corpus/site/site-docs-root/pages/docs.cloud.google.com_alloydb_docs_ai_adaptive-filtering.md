---
title: "Understand adaptive filtering in AlloyDB AI \_|\_ AlloyDB for PostgreSQL \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/alloydb/docs/ai/adaptive-filtering
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/ai/adaptive-filtering
  title: "Understand adaptive filtering in AlloyDB AI \_|\_ AlloyDB for PostgreSQL\
    \ \_|\_ Google Cloud Documentation"
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
Understand adaptive filtering in AlloyDB AI
Stay organized with collections
Save and categorize content based on your preferences.
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
You can process personal data for
this feature
as outlined in the
Cloud Data
Processing Addendum , subject to the obligations and restrictions described in the
agreement under which you access Google Cloud.
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This page provides a conceptual overview of adaptive filtering in AlloyDB AI, a feature designed to optimize filtered vector searches.
Note: Inline filtering is supported only when you use the ScaNN algorithm. Inline filtering is not compatible with the Inverted File (IVF), Inverted File Flat (IVFFlat), or Hierarchical Navigable Small Worlds (HNSW) algorithms.
What is adaptive filtering?
Adaptive filtering analyzes query patterns and data distributions during query execution to dynamically choose the most efficient filtering strategy such as inline or pre-filtering.
The AlloyDB AI query optimizer uses cost-based analysis to determine whether inline filtering or pre-filtering provides the best performance at any given point during query execution.
This type of optimization supports AlloyDB AI's filtered vector searches, where adaptive filtering automatically switches between vector and metadata index usage, which produces efficient and accurate results without manual intervention.
Dynamic switching between filtering strategies
Adaptive filtering automatically and dynamically switches between inline filtering and pre-filtering strategies during query execution based on real-time query patterns and data distributions. The AlloyDB AI query optimizer uses cost-based analysis to determine which strategy provides the best performance at any given point.
From inline to pre-filtering
When the optimizer determines that pre-filtering is more efficient, adaptive filtering triggers a switch from inline filtering to pre-filtering during execution. The query plan dynamically changes to reflect this.
For example, the plan can show Bitmap assisted pre-filtering in the Execution Strategy field when the optimizer determines that pre-filtering is more efficient at that point in the query. This dynamic change occurs as the system adapts to the actual data that it encounters during the query's execution.
Limit ( actual rows = 10 loops = 1 )
- > Custom Scan ( vector scan ) on t1 ( actual rows = 10 loops = 1 )
Execution Strategy : Bitmap assisted pre - filtering
Order By : ( vec_col < = > '[...]' :: vector )
Limit : 10
- > Bitmap Index Scan on btree_idx ( actual rows = 10000 loops = 1 )
Index Cond : ( int_col < = 100000000 )
When using Execution Strategy: Bitmap assisted pre-filtering , a separate Bitmap Index Scan first filters a large dataset. If this pre-filtering effectively narrows down the candidates, the vector index is not used for the final vector similarity search.
From pre-filtering to inline filtering
Adaptive filtering can also dynamically switch from pre-filtering to inline filtering if the AlloyDB AI query optimizer determines that inline filtering is more efficient for the current query characteristics.
In such cases, the query plan dynamically adjusts to reflect a more direct processing of the vector data without an explicit pre-filtering step preceding the vector scan. This adaptability helps achieve optimal performance as data distributions or query parameters change during runtime.
For example, the query plan shows vector scan in the Execution Strategy field when the optimizer determines that an inline filtering strategy is more efficient for the given query.
Limit ( actual rows = 10 loops = 1 )
- > Custom Scan ( vector scan ) on t1 ( actual rows = 10 loops = 1 )
Execution Strategy : Bitmap assisted vector Scan on scann_idx
Order By : ( vec_col < = > '[...]' :: vector )
Limit : 10
Num Requalifications : 0
Num filtered : 1000
- > Bitmap Index Scan on btree_idx ( actual rows = 10000 loops = 1 )
Index Cond : ( int_col < = 100000000 )
In this example, the Execution Strategy shows Bitmap assisted vector Scan on scann_idx , with an underlying Bitmap Index Scan on btree_idx . This indicates that the vector search uses a bitmap filter, which the Bitmap Index Scan generates based on the int_col <= 100000000 condition. The Custom Scan (vector scan) then processes only the rows identified by this bitmap, integrating the filtering directly into the vector scan process.
What's next
Filtered vector search in AlloyDB AI
Activate adaptive filtering in AlloyDB AI
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
