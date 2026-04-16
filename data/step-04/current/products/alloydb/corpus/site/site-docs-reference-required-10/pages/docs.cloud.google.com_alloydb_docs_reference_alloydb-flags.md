---
title: "AlloyDB flags \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/alloydb/docs/reference/alloydb-flags
knowledge_key: corpus
source_id: site-docs-reference-required-10
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs/reference/query-tuning-and-optimization
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/reference/alloydb-flags
  title: "AlloyDB flags \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation"
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
AlloyDB flags
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the database flags that AlloyDB for PostgreSQL uses to enable and
manage various service features unique to AlloyDB. For a list of
all database flags that AlloyDB supports, see
Supported database flags .
Flags marked with Instance restarts mean that AlloyDB
restarts an instance whenever you set, remove, or modify this flag on that
instance. The flag's value persists for the instance until you modify it again.
alloydb_ai_nl.enabled
Type boolean
Default off
Instance restarts Yes
Controls whether the AlloyDB AI natural language features are enabled.
alloydb.enable_auto_explain
Type boolean
Default off
Instance restarts Yes
Controls the availability of the auto_explain extension in
an AlloyDB instance. Set the parameter to on and restart the
instance.
The auto_explain extension enables
automatic logging of execution plans of slow statements, for troubleshooting and
more. It provides an automated way to perform the functionality of the EXPLAIN
command.
alloydb.enable_cache_aware_costing
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Type boolean
Default off
Instance restarts No
Lets the AlloyDB query planner adjust the estimated IO cost of
index scans based on how many index and table pages may be already available in
the shared buffer when execution starts.
For more information, see
Enable cache awareness for index scan query plans .
alloydb.enable_pg_bigm
Type boolean
Default off
Instance restarts Yes
Controls the availability of the pg_bigm extension in an AlloyDB
instance. Set the parameter to on and restart the instance. Then add the
pg_bigm extension to individual databases in the instance by using the CREATE
EXTENSION command.
The pg_bigm extension provides
full text search capability in PostgreSQL using 2-gram (bigram) indexes for
faster full text searches.
alloydb.enable_pg_cron
Type boolean
Default off
Instance restarts Yes
Controls the availability of the pg_cron extension in an AlloyDB
instance. Set the parameter to on and restart the instance. Then add the
pg_cron extension to individual databases in the instance by using the CREATE
EXTENSION command.
The pg_cron extension provides
a cron-based job scheduler for PostgreSQL that runs inside the database
as an extension. It uses the same syntax as regular cron , and it lets you
schedule PostgreSQL commands directly from the database.
alloydb.enable_pg_hint_plan
Type boolean
Default off
Instance restarts Yes
Controls the availability of the pg_hint_plan extension in
an AlloyDB instance. Set the parameter to on and restart the
instance. Then add the pg_hint_plan extension to individual databases in the
instance by using the CREATE EXTENSION command.
The pg_hint_plan extension
lets you to improve PostgreSQL execution plans using hints, which are
descriptions in SQL comments.
alloydb.enable_pg_wait_sampling
Type boolean
Default off
Instance restarts Yes
Enables AlloyDB to collect sampling statistics of wait events.
Set the parameter to on and restart the instance. Then, add the
pg_wait_sampling extension to individual databases in the instance by using
the CREATE EXTENSION command.
The pg_wait_sampling extension
aggregates and summarizes the wait event data. You can query these views to gain
insights into wait times, frequencies, and relative importance of different wait
events.
alloydb.enable_pgaudit
Type boolean
Default off
Instance restarts Yes
Controls the availability of the pgaudit extension in an AlloyDB
instance. Set the parameter to on and restart the instance. Then add the
pgaudit extension to individual databases in the instance by using the CREATE
EXTENSION command.
The pgaudit extension provides detailed session
and object audit logging using the standard logging facility provided by
PostgreSQL.
Warning: In AlloyDB Omni only, enabling this extension and the PostgreSQL logging_collector parameter might result in loss of audit logs. To enable the PostgreSQL and audit logs, set logging_collector to off and alloydb.enable_pgaudit to true . To enable the PostgreSQL log, set logging_collector to on and allobydb.enable_pgaudit to false .
alloydb.enable_pglogical
Type boolean
Default off
Instance restarts Yes
Controls the availability of the pglogical extension in
an AlloyDB instance. Set the parameter to on and restart the
instance. Then add the pglogical extension to individual databases in the
instance by using the CREATE EXTENSION command.
The pglogical extension
provides logical streaming replication for PostgreSQL using a publish-subscribe
model.
alloydb.enable_named_hints
Type boolean
Default off
Instance restarts No
Enables the AlloyDB named hints
feature. Set the parameter to on .
alloydb.iam_authentication
Type boolean
Default off
Instance restarts Yes
Enables the use of Identity and Access Management (IAM) (Identity and Access Management) authentication with
an AlloyDB instance.
scann.enable_preview_features
Type boolean
Default off
Instance restarts Yes
Enables the use of the following features that are available in Preview :
Adaptive filtering
identifies whether filtering or pre-filtering provides the best
performance at any given point during query execution.
Automatic index
maintenance
incrementally manages the index such that when your dataset grows,
AlloyDB splits large outlier partitions and tries to provide
better QPS and search results.
scann.max_background_workers
Type integer
Default 1
Instance restarts Yes
Accelerates index maintenance when automatic index maintenance is enabled. This flag controls the number of background workers used for the process.
Verify that the flag's value is less than the max_worker_processes value set for the cluster.
scann.maintenance_background_naptime_s
Type integer
Default 1
Instance restarts Yes
Controls the minimum delay between background worker runs for automatic index maintenance. The default value is 1 minute.
alloydb.logical_decoding
Type boolean
Default off
Instance restarts Yes
Enables the PostgreSQL logical decoding infrastructure in
an AlloyDB instance.
Logical decoding provides the
infrastructure necessary to stream data modifications to external consumers.
alloydb.log_throttling_window
Type integer
Default 0
Instance restarts No
Controls whether AlloyDB records duplicate log messages
received during a specified time window.
If set to a value greater than 0 , then AlloyDB starts a
timer that many seconds long whenever it records a log message. If
AlloyDB receives the identical log message before the timer
expires, it does not record the message. After the timer expires,
AlloyDB appends a count of any skipped messages to the
next occurrence of the same log message that it records.
If set to 0 , then AlloyDB records all duplicate log
messages.
alloydb.promote_cancel_to_terminate
Type boolean
Default on
Instance restarts No
If set to true , then any query cancellation requests due to issues such as lock timeouts, statement timeouts, and recovery (replay) conflicts that AlloyDB encounters, are promoted to forced backend termination requests.
By promoting the cancellation requests, AlloyDB helps prevent stuck backends from blocking log replay and other backends.
alloydb.pg_shadow_select_role
Type string
Default An empty string
Instance restarts No
Name of the PostgreSQL role that is to be used to grant permission to query the
pg_shadow view.
alloydb.enable_pg_squeeze
Type boolean
Default off
Instance restarts No
Set to on to reduce table and index bloat in a more efficient and less disruptive way as compared to other PostgreSQL bloat reduction methods such as VACUUM .
google_storage.log_replay_throttle_read_transactions
Type boolean
Default on
Instance restarts No
Controls whether lag-based throttling of read transactions is enabled on read
nodes. If the parameter is set to on , then when replication lag exceeds one
second, new read transactions are prevented from starting until lag drops below
one second or until google_storage.log_replay_max_backend_throttle_duration
has expired.
google_storage.log_replay_max_backend_throttle_duration
Type integer
Default 60000
Instance restarts No
The maximum time a backend is throttled when lag is high. Unit is milliseconds.
This only takes effect when
google_storage.log_replay_throttle_read_transactions is on .
parameterized_views.enabled
Type boolean
Default off
Instance restarts Yes
Controls whether the parameterized view features are enabled.
The parameterized_views.enabled flag setting isn't replicated automatically
and must be replicated manually on each instance. You must enable the
parameterized_views.enabled flag on each replica instance before you query
parameterized views on the replica. For more information, see
Manage application data security using AlloyDB parameterized secure views .
parameterized_views.json_results_max_rows
Type integer
Default 1,000,000
Instance restarts No
Sets the maximum number of rows for JSON results from the
execute_parameterized_query()
function.
parameterized_views.json_results_max_size
Type integer
Default 1,048,576
Instance restarts No
Sets the maximum JSON results size in kilobytes (KB) from the execute_parameterized_query()
function.
parameterized_views.max_parallel_workers_per_gather
Type integer
Default -1
Instance restarts No
Sets the maximum number of parallel processes per executor node when
a query is run using the parameterized views API. -1 means no limit.
This limit applies only if it's more restrictive than max_parallel_workers_per_gather .
parameterized_views.statement_timeout
Type integer
Default 0
Instance restarts No
Sets the maximum allowed duration in milliseconds of statements run using the
parameterized views API. 0 means no limit. This limit applies only if it's
more restrictive than statement_timeout .
parameterized_views.temp_file_limit
Type integer
Default -1
Instance restarts No
Limits the total size in kB of all temporary files used by each process
when run using the parameterized views API. -1 means no limit.
This limit applies only if it's more restrictive than temp_file_limit .
parameterized_views.work_mem
Type integer
Default 0
Instance restarts No
Sets the maximum memory in kB to be used for query workspaces when it's run
using the parameterized views API. 0 means no limit. This limit applies only
if it's more restrictive than work_mem .
perfsnap.interval
Type integer
Default 86400
Instance restarts No
Sets the interval in seconds for automatic performance snapshots.
perfsnap.retention
Type string
Default 7 days
Instance restarts No
Sets the retention period for automatic performance snapshots.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
