---
title: "Columnar engine flags \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/alloydb/docs/reference/columnar-engine-flags
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/reference/columnar-engine-flags
  title: "Columnar engine flags \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation"
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
Columnar engine flags
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the database flags that AlloyDB for PostgreSQL uses to enable and
manage features specific to its columnar
engine . For a list of all database flags
that AlloyDB supports, see Supported database
flags .
Flags marked with Instance restarts mean that AlloyDB
restarts an instance whenever you set, remove, or modify this flag on that
instance. The flag's value persists for the instance until you modify it again.
Enablement
google_columnar_engine.enabled
Type Boolean
Default off
Instance restarts Yes
If on , enables the AlloyDB columnar
engine .
Auto-columnarization
google_columnar_engine.enable_auto_columnarization
Type Boolean
Default on
Instance restarts No
If on , enables the columnar engine's auto-columnarization
features .
google_columnar_engine.relations
Type String
Default An empty string
Instance restarts No
Specifies a list of columns for AlloyDB to add to your cluster's
column store, apart from auto-columnarization. These columns can come from any
tables within your cluster.
The flag's value is formatted as a comma-separated list of items. Each item
specifies one or more columns from a single table, expressed in this format:
' DATABASE_NAME . SCHEMA_NAME . TABLE_NAME ( COLUMN_LIST )'
For more information, see Manage column store content
manually .
google_columnar_engine.auto_columnarization_schedule
Type String
Default An empty string
Instance restarts No
Maximum allowed value 2147483647
Specifies the frequency that AlloyDB runs its
auto-columnarization process on the
instance.
The value is a string in this format:
'EVERY NUMBER TIME_UNITS '
Replace the following:
NUMBER : A positive integer.
TIME_UNITS : Either DAYS or HOURS .
If the value for this flag is not defined, then AlloyDB runs the auto-columnarization
process once every hour.
google_columnar_engine.enable_virtual_columns_scan
Type Boolean
Default off
Instance restarts No
If set to on , enables scans to use virtual columns for expressions added in the columnar engine . This flag is available in ( Preview ).
Sizing and query processing
google_columnar_engine.memory_size_in_mb
Type Integer
Valid values From 128 to 70% of instance memory
Default 30% of instance memory
Instance restarts Yes
The amount of instance memory, expressed in mebibytes (MiB), that
AlloyDB allocates to the column store.
If this flag is not set, then AlloyDB allocates
30% of the instance's memory to the column store.
google_columnar_engine.enable_columnar_scan
Type Boolean
Default on
Instance restarts No
If on , allows AlloyDB to access data in the column store when
handling queries.
If this flag is off while google_columnar_engine.enabled is
on , then the columnar engine stays enabled and retains its column store, but
AlloyDB does not use columnar data when handling queries.
google_columnar_engine.enable_index_caching
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Type Boolean
Default off
Instance restarts No, if the columnar engine is already enabled, that is when google_columnar_engine.enabled=on .
Indicates if you can load ScaNN indexes into the columnar engine to accelerate vector search.
Population and refresh
google_columnar_engine.refresh_threshold_percentage
Type Integer
Valid values 1 ... 100
Default 25
Instance restarts No
Specifies the column store's data-refresh threshold, expressed as a percentage.
AlloyDB refreshes the data within a columnar unit —a set of data
blocks within a columnar table—when all of these conditions are met:
The columnar unit's table has exceeded the scan-threshold defined by the
separate refresh_threshold_scan_count
flag.
The percentage of the columnar unit's underlying data blocks that have
become invalid exceeds the value of the refresh_threshold_percentage
flag. Columnar data blocks become invalid due to changes in the row-based
data that the columnar table draws upon.
google_columnar_engine.refresh_threshold_scan_count
Type Integer
Valid values 0 ... 2147483647
Default 5
Instance restarts No
AlloyDB keeps a running count of the table scans performed on
each columnar table since that table's most recent DML query. The value of the
refresh_threshold_scan_count flag specifies the minimum value of this counter
on any columnar table before AlloyDB can refresh its data. From
there, AlloyDB uses the invalid-block threshold defined by
refresh_threshold_percentage to determine
when to refresh the table's data.
If this flag's value is set to 0 , then AlloyDB
disregards table scans to determine when to refresh columnar data, using only
refresh_threshold_percentage instead.
google_job_scheduler.maintenance_cpu_percentage
Note: This flag uses the prefix google_job_scheduler and not
google_columnar_engine .
Type Integer
Valid values 0 ... 100
Default 20
Instance restarts No
The maximum percentage of an instance's CPU capacity that the columnar engine
can apply to background processing.
google_job_scheduler.max_parallel_workers_per_job
Note: This flag uses the prefix google_job_scheduler and not
google_columnar_engine .
Type Integer
Valid values 0 ... 262143
Default 2
Instance restarts No
The maximum number of parallel workers that the columnar engine can create to
handle any single background processing operation.
Vectorized join
google_columnar_engine.enable_vectorized_join
Type Boolean
Default off
Restarts instance No
If on , then AlloyDB automatically uses multithreaded vectorized
operations to improve the performance of queries that join multiple tables.
For more information, see Enable vectorized
joins .
google_columnar_engine.vectorized_join_threads
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Type Integer
Valid values Up to half of the instance's vCPU count
Default 1
Restarts instance No
Defines the maximum number of parallel threads available to the vectorized join
operator, enabled by the enable_vectorized_join
flag.
You can define a value as large as one-half of the instance's vCPUs. For
example, on a 16 vCPU instance, this flag's maximum value is 8 .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
