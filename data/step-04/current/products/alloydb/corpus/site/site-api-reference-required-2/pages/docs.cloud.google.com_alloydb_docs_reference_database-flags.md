---
title: "Supported database flags \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/alloydb/docs/reference/database-flags
knowledge_key: corpus
source_id: site-api-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs/reference/ai/hybrid-search-function-parameters
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/reference/database-flags
  title: "Supported database flags \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\
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
Reference
Send feedback
Supported database flags
Stay organized with collections
Save and categorize content based on your preferences.
This page lists the database flags that AlloyDB for PostgreSQL supports.
You use database flags for many operations, including adjusting PostgreSQL
parameters, adjusting options, and configuring and tuning instances.
For more information about setting database flags in
AlloyDB, see Configure an instance's database flags .
For more information about how to use each flag listed in the following
table, click the name of the flag.
The table's other columns contain additional information
about each flag:
The Default value column displays the value that
AlloyDB sets for this flag in a new instance, unless you specify a different value when creating the instance.
Standard default indicates that the flag has a default value that's not
set by AlloyDB. To learn more, click the flag's name.
In the Instance restarts column, Yes indicates that
AlloyDB restarts an instance whenever you set, remove, or
modify this flag on that instance. The flag's value persists for the
instance until you modify it again.
In the Read pool restrictions column, Yes indicates the following
restrictions on how you can use the flag:
Before setting this flag on your cluster's primary instance, set
the flag on each of your cluster's read pool instances.
If the primary instance has this flag set, then the value of this
flag on any read pool instance must be equal to or greater
than the primary instance's value for this flag.
A | C | D | E | F | G | H | I | J | L | M | N | O | P | R | S | T | V | W
AlloyDB flag
Default value
Instance restarts
Read pool restrictions
alloydb.ai_nl_enabled
off
No
No
alloydb.enable_auto_explain
off
Yes
No
alloydb.enable_pg_bigm
off
Yes
No
alloydb.enable_pg_cron
off
Yes
No
alloydb.enable_pg_hint_plan
off
Yes
No
alloydb.enable_pg_wait_sampling
off
Yes
No
alloydb.enable_pgaudit
off
Yes
No
alloydb.enable_pglogical
off
Yes
No
alloydb.enable_named_hints
off
No
No
alloydb.iam_authentication
off
Yes
No
alloydb.logical_decoding
off
Yes
No
alloydb.log_throttling_window
No
No
alloydb.promote_cancel_to_terminate
on
No
No
alloydb.pg_shadow_select_role
An empty string
No
No
alloydb.enable_pg_squeeze
off
No
No
allow_alter_system (PostgreSQL 17)
on
No
No
auto_explain.log_analyze
Standard default
No
No
auto_explain.log_buffers
Standard default
No
No
auto_explain.log_format
Standard default
No
No
auto_explain.log_level
Standard default
No
No
auto_explain.log_min_duration
Standard default
No
No
auto_explain.log_nested_statements
Standard default
No
No
auto_explain.log_settings
Standard default
No
No
auto_explain.log_timing
Standard default
No
No
auto_explain.log_triggers
Standard default
No
No
auto_explain.log_verbose
Standard default
No
No
auto_explain.log_wal
Standard default
No
No
auto_explain.sample_rate
Standard default
No
No
autovacuum
Standard default
No
No
autovacuum_analyze_scale_factor
Standard default
No
No
autovacuum_analyze_threshold
Standard default
No
No
autovacuum_freeze_max_age
Standard default
Yes
No
autovacuum_max_workers
Standard default
Yes
No
autovacuum_multixact_freeze_max_age
Standard default
Yes
No
autovacuum_naptime
Standard default
No
No
autovacuum_vacuum_cost_delay
Standard default
No
No
autovacuum_vacuum_cost_limit
Standard default
No
No
autovacuum_vacuum_max_threshold (PostgreSQL 18)
Standard default
No
No
autovacuum_vacuum_scale_factor
Standard default
No
No
autovacuum_vacuum_threshold
Standard default
No
No
autovacuum_work_mem
Standard default
No
No
autovacuum_worker_slots (PostgreSQL 18)
Standard default
Yes
No
checkpoint_completion_target
Standard default
No
No
checkpoint_timeout
Standard default
No
No
checkpoint_warning
Standard default
No
No
commit_delay
Standard default
No
No
commit_siblings
Standard default
No
No
commit_timestamp_buffers (PostgreSQL 17)
0
Yes
No
constraint_exclusion
Standard default
No
No
cpu_index_tuple_cost
Standard default
No
No
cpu_operator_cost
Standard default
No
No
cpu_tuple_cost
Standard default
No
No
createrole_self_grant (PostgreSQL 16)
-
No
No
cron.database_name
Standard default
Yes
No
cron.log_min_messages
Standard default
No
No
cron.log_run
Standard default
Yes
No
cron.log_statement
Standard default
Yes
No
cron.max_running_jobs
Standard default
Yes
No
cursor_tuple_fraction
Standard default
No
No
deadlock_timeout
Standard default
No
No
debug_io_direct (PostgreSQL 16)
-
No
No
debug_logical_replication_streaming (PostgreSQL 16)
buffered
No
No
default_statistics_target
Standard default
No
No
default_tablespace
Standard default
No
No
default_toast_compression
pglz
No
No
default_transaction_deferrable
Standard default
No
No
default_transaction_isolation
Standard default
No
No
effective_cache_size
80% of instance RAM
No
No
enable_bitmapscan
Standard default
No
No
enable_distinct_reordering (PostgreSQL 18)
on
No
No
enable_google_adaptive_autovacuum
on
No
No
enable_group_by_reordering (PostgreSQL 17)
on
No
No
enable_hashagg
Standard default
No
No
enable_hashjoin
Standard default
No
No
enable_indexonlyscan
Standard default
No
No
enable_indexscan
Standard default
No
No
enable_material
Standard default
No
No
enable_mergejoin
Standard default
No
No
enable_nestloop
Standard default
No
No
enable_partitionwise_aggregate
off
No
No
enable_partitionwise_join
off
No
No
enable_presorted_aggregate (PostgreSQL 16)
on
No
No
enable_self_join_elimination (PostgreSQL 18)
Standard default
No
No
enable_seqscan
Standard default
No
No
enable_sort
Standard default
No
No
enable_tidscan
Standard default
No
No
event_triggers (PostgreSQL 17)
true
No
Yes
file_copy_method (PostgreSQL 18)
Standard default
No
No
from_collapse_limit
Standard default
No
No
geqo
Standard default
No
No
geqo_effort
Standard default
No
No
geqo_generations
Standard default
No
No
geqo_pool_size
Standard default
No
No
geqo_seed
Standard default
No
No
geqo_selection_bias
Standard default
No
No
geqo_threshold
Standard default
No
No
gin_fuzzy_search_limit
Standard default
No
No
gin_pending_list_limit
Standard default
No
No
google_columnar_engine.auto_columnarization_schedule
'EVERY 1 HOUR'
No
No
google_columnar_engine.enable_auto_columnarization
on
No
No
google_columnar_engine.enable_columnar_scan
on
No
No
google_columnar_engine.enable_virtual_columns_scan
off
No
No
google_columnar_engine.enable_vectorized_join
No
No
google_columnar_engine.enabled
off
Yes
No
google_columnar_engine.memory_size_in_mb
30% of instance RAM
Yes
No
google_columnar_engine.refresh_threshold_percentage
50
No
No
google_columnar_engine.refresh_threshold_scan_count
5
No
No
google_columnar_engine.relations
An empty string
No
No
google_columnar_engine.vectorized_join_threads
No
No
google_db_advisor.auto_advisor_max_time_in_seconds
1800
No
No
google_db_advisor.auto_advisor_schedule
'EVERY 24 HOURS'
No
No
google_db_advisor.enable_auto_advisor
on
No
No
google_db_advisor.enabled
on
Yes
No
google_db_advisor.max_index_width
2
No
No
google_db_advisor.max_num_indexable_columns
1000
No
No
google_db_advisor.max_statement_length
102400
No
No
google_db_advisor.max_storage_size_in_mb
0
No
No
google_db_advisor.recommendation_max_time_in_seconds
600
No
No
google_db_advisor.recommend_indexes_on_partitions
off
No
No
google_db_advisor.top_k_slowest_statements
100
No
No
google_job_scheduler.maintenance_cpu_percentage
20
No
No
google_job_scheduler.max_parallel_workers_per_job
2
No
No
google_ml_integration.enable_faster_embedding_generation
off
No
No
google_ml_integration.enable_model_support
on
No
No
google_ml_integration.enable_forecasting
off
No
No
google_plan_management.enabled
off
Yes
No
google_plan_management.enable_track_plans
on
No
No
google_plan_management.enable_steer_plans
on
No
No
google_storage.log_replay_throttle_read_transactions
on
No
No
gss_accept_delegation (PostgreSQL 16)
off
No
No
hot_standby_feedback
on
No
No
icu_validation_level (PostgreSQL 16)
warning
No
No
idle_in_transaction_session_timeout
Standard default
No
No
idle_replication_slot_timeout
Standard default
No
No
idle_in_transaction_session_timeout (PostgreSQL 16)
86,400,000
No
No
io_max_combine_limit (PostgreSQL 18)
Standard default
Yes
No
io_max_concurrency (PostgreSQL 18)
Standard default
Yes
No
io_method (PostgreSQL 18)
Sync is the only valid value for Preview
Yes
No
join_collapse_limit
Standard default
No
No
lock_timeout
Standard default
No
No
log_autovacuum_min_duration
0
No
No
log_checkpoints
Standard default
No
No
log_connections
Standard default
No
No
log_disconnections
Standard default
No
No
log_duration
Standard default The log_duration=on setting might increase log volume under a heavy workload and cause higher query latencies.
No
No
log_error_verbosity
Standard default
No
No
log_executor_stats
Standard default
No
No
log_hostname
Standard default
No
No
log_line_prefix
Standard default
No
No
log_lock_waits
Standard default
No
No
log_min_duration_statement
Standard default
No
No
log_min_error_statement
Standard default
No
No
log_min_messages
Standard default
No
No
log_parser_stats
Standard default
No
No
log_planner_stats
Standard default
No
No
log_replication_commands
Standard default
No
No
log_statement
Standard default The log_statement=all setting might increase log volume under a heavy workload and cause higher query latencies.
No
No
log_statement_stats
Standard default
No
No
log_temp_files
0
No
No
log_timezone
Standard default
No
No
maintenance_work_mem
Standard default
No
No
max_active_replication_origins (PostgreSQL 18)
Standard default
Yes
No
max_connections
1000
Yes
Yes
max_locks_per_transaction
Standard default
Yes
Yes
max_logical_replication_workers
Standard default
Yes
No
max_notify_queue_pages (PostgreSQL 17)
1048576
Yes
Yes
max_parallel_apply_workers_per_subscription (PostgreSQL 16)
2
No
No
max_parallel_maintenance_workers
Standard default
No
No
max_parallel_workers
The instance CPU count or 8 , whichever is greater
No
No
max_parallel_workers_per_gather
Half of the instance CPU count or 2 , whichever is greater
No
No
max_pred_locks_per_page
Standard default
Yes
No
max_pred_locks_per_relation
Standard default
Yes
No
max_pred_locks_per_transaction
Standard default
Yes
No
max_prepared_transactions
Standard default
Yes
Yes
max_replication_slots
50
Yes
No
max_standby_archive_delay
Standard default
No
No
max_standby_streaming_delay
Standard default
No
No
max_sync_workers_per_subscription
Standard default
No
No
max_wal_senders
50
Yes
Yes
max_wal_size
1504
No
No
max_worker_processes
64
Yes
Yes
md5_password_warnings (PostgreSQL 18)
Standard default
No
No
min_wal_size
Standard default
No
No
multixact_member_buffers (PostgreSQL 17)
32
Yes
No
multixact_offset_buffers (PostgreSQL 17)
32
Yes
No
notify_buffers (PostgreSQL 17)
16
Yes
No
parameterized_views.enabled
off
Yes
No
parameterized_views.json_results_max_rows
1,000,000
No
No
parameterized_views.json_results_max_size
1,048,576
No
No
parameterized_views.max_parallel_workers_per_gather
-1
No
No
parameterized_views.statement_timeout
0
No
No
parameterized_views.temp_file_limit
-1
No
No
parameterized_views.work_mem
0
No
No
password_encryption
Standard default
No
No
password.enforce_password_does_not_contain_username
OFF
No
No
password.enforce_expiration
OFF
No
No
password.enforce_complexity
OFF
No
No
password.expiration_in_days
90
No
No
password.min_uppercase_letters
0
No
No
password.max_uppercase_letters
1000
No
No
password.min_lowercase_letters
0
No
No
password.max_lowercase_letters
1000
No
No
password.min_numerical_chars
0
No
No
password.max_numerical_chars
1000
No
No
password.min_special_chars
0
No
No
password.max_special_chars
1000
No
No
password.min_pass_length
0
No
No
password.max_pass_length
1000
No
No
password.notify_expiration_in_days
30
No
No
perfsnap.interval
86400
No
No
perfsnap.retention
7 days
No
No
pg_bigm.enable_recheck
Standard default
No
No
pg_bigm.gin_key_limit
Standard default
No
No
pg_bigm.similarity_limit
Standard default
No
No
pg_hint_plan.debug_print
Standard default
No
No
pg_hint_plan.enable_hint
Standard default
No
No
pg_hint_plan.enable_hint_table
Standard default
No
No
pg_hint_plan.message_level
Standard default
No
No
pg_hint_plan.parse_messages
Standard default
No
No
pg_stat_statements.max
Standard default
Yes
No
pg_stat_statements.save
Standard default
No
No
pg_stat_statements.track
Standard default
No
No
pg_stat_statements.track_utility
Standard default
No
No
pgaudit.log
Standard default
No
No
pgaudit.log_catalog
Standard default
No
No
pgaudit.log_client
Standard default
No
No
pgaudit.log_level
Standard default
No
No
pgaudit.log_parameter
Standard default
No
No
pgaudit.log_relation
Standard default
No
No
pgaudit.log_statement_once
Standard default
No
No
pgaudit.role
Standard default
No
No
pglogical.batch_inserts
Standard default
Yes
No
pglogical.conflict_log_level
Standard default
No
No
pglogical.conflict_resolution
Standard default
No
No
pglogical.extra_connection_options
Standard default
No
No
pglogical.synchronous_commit
Standard default
Yes
No
pglogical.use_spi
Standard default
Yes
No
random_page_cost
Standard default
No
No
replacement_sort_tuples
Standard default
No
No
reserved_connections (PostgreSQL 16)
0
Yes
No
scram_iterations (PostgreSQL 16)
4096
No
No
send_abort_for_crash (PostgreSQL 16)
off
No
No
send_abort_for_kill (PostgreSQL 16)
off
No
No
serializable_buffers (PostgreSQL 17)
32
Yes
No
shared_buffers
80% of instance memory
Yes
No
scann.enable_preview_features
off
Yes
No
scann.maintenance_background_naptime_s
1 minute
Yes
No
ssl_groups (PostgreSQL 18)
Standard default
No
No
ssl_max_protocol_version
Standard default
No
No
ssl_min_protocol_version
Standard default
No
No
ssl_tls13_ciphers (PostgreSQL 18)
Standard default
No
No
squeeze.worker_autostart
Standard default
No
No
squeeze.worker_role
Standard default
No
No
squeeze.workers_per_database
Default value is 1
No
No
squeeze.max_xlock_time
Default value is 1 . Set to any value between 1 and 2147483647
No
No
standard_conforming_strings
Standard default
No
No
statement_timeout
Standard default
No
No
subtransaction_buffers (PostgreSQL 17)
0
Yes
No
synchronize_seqscans
Standard default
No
No
tcp_keepalives_count
5
No
No
tcp_keepalives_idle
300
No
No
tcp_keepalives_interval
60
No
No
temp_buffers
Standard default
No
No
temp_file_limit
Standard default
No
No
timezone
Standard default
No
No
trace_connection_negotiation (PostgreSQL 17)
off
Yes
No
trace_notify
Standard default
No
No
trace_recovery_messages
Standard default
No
No
trace_sort
Standard default
No
No
track_activities
Standard default
No
No
track_activity_query_size
Standard default
Yes
No
track_commit_timestamp
Standard default
Yes
No
track_counts
Standard default
No
No
track_functions
Standard default
No
No
track_io_timing
on
No
No
transaction_buffers (PostgreSQL 17)
0
Yes
No
transaction_timeout (PostgreSQL 17)
0
No
No
vacuum_buffer_usage_limit (PostgreSQL 16)
256
No
No
vacuum_cost_delay
Standard default
No
No
vacuum_cost_limit
Standard default
No
No
vacuum_freeze_min_age
Standard default
No
No
vacuum_freeze_table_age
Standard default
No
No
vacuum_max_eager_freeze_failure_rate (PostgreSQL 18)
Standard default
No
No
vacuum_multixact_freeze_min_age
Standard default
No
No
vacuum_multixact_freeze_table_age
Standard default
No
No
vacuum_truncate (PostgreSQL 18)
Standard default
No
No
wal_buffers
The default depends on the number of vCPUs, as shown in the following list:
8 vCPU: 128MB (16384 8k buffers)
16 vCPU: 256MB (32768 8k buffers)
32 vCPU: 512MB (65536 8k buffers)
64 vCPU: 1GB (131072 8k buffers)
96 vCPU: 1.5GB (196608 8k buffers)
128 vCPU: 2GB (262144 8k buffers)
Yes
No
wal_compression
off
No
No
wal_receiver_timeout
Standard default
No
No
wal_sender_timeout
Standard default
No
No
work_mem
N MB , where N is either 4 or the number of instance vCPUs, whichever is greater
No
No
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
