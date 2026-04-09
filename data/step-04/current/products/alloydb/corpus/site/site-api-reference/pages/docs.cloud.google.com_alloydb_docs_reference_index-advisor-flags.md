---
title: "Index advisor flags \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/alloydb/docs/reference/index-advisor-flags
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/reference/index-advisor-flags
  title: "Index advisor flags \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation"
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
Index advisor flags
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the database flags that AlloyDB for PostgreSQL uses to enable and manage features specific to its index advisor extension .
Database flags
google_db_advisor.auto_advisor_max_time_in_seconds
Type Integer
Default 1800
Restart required No
The maximum time, in seconds per day, that the index advisor spends
running automated analyses of its tracked queries.
google_db_advisor.auto_advisor_schedule
Type String
Default 'EVERY 24 HOURS'
Restart required No
Defines the frequency of the index advisor's automated
analysis. The value is a single-quoted string of the format
'EVERY N UNITS ' , where
N is an integer, and UNITS is either
HOURS or DAYS .
google_db_advisor.enable_auto_advisor
Type Boolean
Default on
Restart required No
If on , then AlloyDB runs the
index advisor's analysis on an automated schedule, with a
frequency set by the separate
google_db_advisor.auto_advisor_schedule flag.
google_db_advisor.enable_vector_index_advisor ( Preview )
Type Boolean
Default off
Restart required No
Recommends ScaNN vector indexes depending on the workload. Requires the google_ml_integration extension to be enabled.
google_db_advisor.enabled
Type Boolean
Default on
Restart required Yes
Controls whether the AlloyDB index advisor is
enabled.
google_db_advisor.max_index_width
Type Integer
Default 2
Restart required No
The maximum number of columns that a recommended index can
contain.
google_db_advisor.max_num_indexable_columns
Type Integer
Default 1000
Restart required No
The maximum number of indexable columns that index advisor
tracks.
google_db_advisor.max_statement_length
Type Integer
Default 102400
Restart required No
The maximum length, in bytes, of queries that the index
advisor tracks.
google_db_advisor.max_storage_size_in_mb
Type Integer
Default 0
Restart required No
The maximum total size, in megabytes, of the indexes
that the index advisor recommends.
If set to
0 , then AlloyDB uses the current
database size as the upper limit on the total size of recommended
indexes.
google_db_advisor.recommend_indexes_on_partitions
Type Boolean
Default off
Restart required No
Controls whether to enable recommending indexes on
individual table partitions.
google_db_advisor.recommendation_max_time_in_seconds
Type Integer
Default 600
Restart required No
The maximum time, in seconds, that the index advisor spends
running an analysis of its tracked queries.
google_db_advisor.top_k_slowest_statements
Type Integer
Default 100
Restart required No
The index advisor bases its recommendations on the
slowest-executing statements out of all the queries it tracks.
The value set by this flag defines the size of this
set.
If set to 2147483647 (the maximum allowed
value), then AlloyDB recommends indexes based
on all captured statements, instead of on a limited number of
statements.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
