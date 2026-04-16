---
title: "Cloud SQL metrics \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/postgres/release-notes
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics
  title: "Cloud SQL metrics \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Cloud SQL
PostgreSQL
Reference
Send feedback
Cloud SQL metrics
Stay organized with collections
Save and categorize content based on your preferences.
This page shows reference information for Cloud SQL metrics. You access these
metrics through Google Cloud Observability.
To quickly see graphs of metric data, use the Metrics Explorer. For information
on using this tool, see Metrics Explorer .
Note: This page lists metrics for all database engines that Cloud SQL
supports. The database path indicates, where applicable, if a metric is
specific to a database engine.
The "metric type" strings in this table must be prefixed
with cloudsql.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
database/active_directory/domain_reachable
ALPHA
(project)
Active Directory domain reachable
GAUGE , BOOL ,
cloudsql_database
Indicates whether the instance is able to ping a domain controller from the connected Managed Active Directory domain. If false, Windows Authentication may not work as expected. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/active_directory/instance_available
ALPHA
(project)
Windows Authentication available
GAUGE , BOOL ,
cloudsql_database
Indicates whether the instance is currently available using Windows Authentication. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/auto_failover_request_count
GA
(project)
Auto-failover Requests
DELTA , INT64 , 1
cloudsql_database
Delta of number of instance auto-failover requests. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/available_for_failover
GA
(project)
Available for failover
GAUGE , INT64 , 1
cloudsql_database
This is > 0 if the failover operation is available on the instance. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/cpu/reserved_cores
GA
(project)
CPU reserved cores
GAUGE , DOUBLE , 1
cloudsql_database
Number of cores reserved for the database. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/cpu/usage_time
GA
(project)
CPU usage
DELTA , DOUBLE , s{CPU}
cloudsql_database
Cumulative CPU usage time in seconds. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/cpu/utilization
GA
(project)
CPU utilization
GAUGE , DOUBLE , 10^2.%
cloudsql_database
Current CPU utilization represented as a percentage of the reserved CPU that is currently in use. Values are typically numbers between 0.0 and 1.0 (but might exceed 1.0). Charts display the values as a percentage between 0% and 100% (or more). Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/data_cache/bytes_used
GA
(project)
Data cache used
GAUGE , INT64 , By
cloudsql_database
Data cache usage in bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/data_cache/quota
GA
(project)
Data cache quota
GAUGE , INT64 , By
cloudsql_database
Maximum data cache size in bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/disk/bytes_used
GA
(project)
Bytes used
GAUGE , INT64 , By
cloudsql_database
Data utilization in bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/disk/bytes_used_by_data_type
GA
(project)
Bytes used
GAUGE , INT64 , By
cloudsql_database
Data utilization in bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
data_type :
A breakdown of instance disk usage per data_type, for example, 'data', 'tmp_data' or 'slow_log'.
database/disk/provisioning/iops
GA
(project)
Provisioned IOPS
GAUGE , INT64 , 1
cloudsql_database
Provisioned IOPS for the data disk. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/disk/provisioning/throughput
GA
(project)
Provisioned throughput
GAUGE , INT64 , 1
cloudsql_database
Provisioned throughput for the data disk. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
io_type :
Direction of the throughput.
database/disk/quota
GA
(project)
Disk quota
GAUGE , INT64 , By
cloudsql_database
Maximum data disk size in bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/disk/read_bytes_count
GA
(project)
Disk read bytes
DELTA , INT64 , 1
cloudsql_database
Delta count of data disk read IO bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/disk/read_ops_count
GA
(project)
Disk read IO
DELTA , INT64 , 1
cloudsql_database
Delta count of data disk read IO operations. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/disk/utilization
GA
(project)
Disk utilization
GAUGE , DOUBLE , 1
cloudsql_database
The fraction of the disk quota that is currently in use. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/disk/write_bytes_count
GA
(project)
Disk write bytes
DELTA , INT64 , 1
cloudsql_database
Delta count of data disk write IO bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/disk/write_ops_count
GA
(project)
Disk write IO
DELTA , INT64 , 1
cloudsql_database
Delta count of data disk write IO operations. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/instance_state
GA
(project)
Instance state
GAUGE , BOOL ,
cloudsql_database
The current serving state of the Cloud SQL instance.
Because there are seven possible states, seven data points are returned.
Each of them has a different field value representing each state.
Only the one that matches the current state of the instance is TRUE. All the others are FALSE.
The state can be one of the following:
RUNNING: The instance is running, or is ready to run when accessed.
SUSPENDED: The instance is not available, for example due to problems with billing.
RUNNABLE: The instance has been stopped by owner. It is not currently running, but it's ready to be restarted.
PENDING_CREATE: The instance is being created.
MAINTENANCE: The instance is down for maintenance.
FAILED: The instance creation failed.
UNKNOWN_STATE: The state of the instance is unknown. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
state :
The state of the instance.
database/memory/components
BETA
(project)
Memory components
GAUGE , DOUBLE , 1
cloudsql_database
Memory stats components in percentage as usage, cache and free memory for the database. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
component :
Name of the component, one of [usage, cache and free].
database/memory/quota
GA
(project)
Memory quota
GAUGE , INT64 , By
cloudsql_database
Maximum RAM size in bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/memory/total_usage
GA
(project)
Total memory usage
GAUGE , INT64 , By
cloudsql_database
Total RAM usage in bytes. This metric reports the RAM usage of the database process, including the buffer/cache. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/memory/usage
GA
(project)
Memory usage
GAUGE , INT64 , By
cloudsql_database
RAM usage in bytes. This metric reports the RAM usage of the server, excluding the buffer/cache. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/memory/utilization
GA
(project)
Memory utilization
GAUGE , DOUBLE , 1
cloudsql_database
The fraction of the memory quota that is currently in use. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/aborted_clients_count
GA
(project)
MySQL Aborted Clients Count
DELTA , INT64 , 1
cloudsql_database
Connections that were aborted because the client died without closing the connection properly, since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/aborted_connects_count
GA
(project)
MySQL Aborted Connects Count
DELTA , INT64 , 1
cloudsql_database
Failed attempts to connect to the MySQL server, since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/conn_pool/avg_wait_time
GA
(project)
MySQL Connection Pool Average Wait Time
GAUGE , INT64 , ms
cloudsql_database
Average time spent by the connection on the work queue in milliseconds. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/conn_pool/pending_connections
GA
(project)
MySQL Connection Pool Pending Connections
GAUGE , INT64 , 1
cloudsql_database
Number of connections presently enqueued in the work queue. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/conn_pool/threads
GA
(project)
MySQL Connection Pool Threads
GAUGE , INT64 , 1
cloudsql_database
Number of threads in the connection pool. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
status :
Status of the connection pool threads e.g. 'active' or 'idle'.
database/mysql/connections_count
GA
(project)
MySQL Connections Count
DELTA , INT64 , 1
cloudsql_database
Connection attempts (successful or not) to the MySQL server, since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/ddl_operations_count
GA
(project)
MySQL DDL Operations Count
DELTA , INT64 , 1
cloudsql_database
MySQL DDL operations, since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
operation_type :
Kind of DDL operations, one of [create_table, drop_table, alter_table, rename_table, truncate_table].
database/mysql/dml_operations_count
GA
(project)
MySQL DML Operations Count
DELTA , INT64 , 1
cloudsql_database
MySQL DML operations, since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
operation_type :
Kind of DML operations, one of [insert, insert_select, update, delete, replace, replace_select].
database/mysql/external_sync/replica_lag
BETA
(project)
Replica lag
GAUGE , INT64 , s
cloudsql_database
An approximation of the lag (seconds behind primary) between the Cloud SQL MySQL external replica and its primary. Only applicable to Cloud SQL MySQL external replicas. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
channel_name :
Name of the channel on which the replica is connected to the external server.
database/mysql/handler_operations_count
GA
(project)
MySQL Handler Operations Count
DELTA , INT64 , 1
cloudsql_database
MySQL handler operations, since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
operation_type :
Kind of operation handler type, one of [delete, read_first, read_key, read_last, read_next, read_prev, read_rnd, read_rnd_next, update, write].
database/mysql/innodb/active_transactions
GA
(project)
InnoDB Active Transactions
GAUGE , INT64 , 1
cloudsql_database
Number of active Transaction details(trx which are in progress), Values in bracket are meant for innodb_transaction_state (Total/running/lock_wait/rolling_back/committing). Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
state :
Values in bracket are meant for innodb_transaction_state, one of [Total, running, lock_wait, rolling_back, committing].
database/mysql/innodb/active_trx_longest_time
GA
(project)
InnoDB Active TRX Longest Time
GAUGE , INT64 , 1
cloudsql_database
Largest transaction time from currently active innodb transactions. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/innodb/active_trx_rows_locked
GA
(project)
InnoDB Active TRX Rows Locked
GAUGE , INT64 , 1
cloudsql_database
Number of rows locked by currently active innodb transactions. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/innodb/active_trx_rows_modified
GA
(project)
InnoDB Active TRX Rows Modified
GAUGE , INT64 , 1
cloudsql_database
Number of rows modified by currently active innodb transactions. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/innodb/active_trx_total_time
GA
(project)
InnoDB Active TRX Total Time
GAUGE , INT64 , s
cloudsql_database
Duration of currently active innodb transactions. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/innodb/adaptive_hash_operation_count
GA
(project)
Innodb AHI operations
DELTA , INT64 , 1
cloudsql_database
Total internal row operations (rows added, updated, removed) performed to maintain the AHI since last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
operation_type :
AHI operation type.
database/mysql/innodb/ahi_search_count
GA
(project)
AHI or Btree searches
DELTA , INT64 , 1
cloudsql_database
Total search operations on the InnoDB AHI and its efficiency since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
operation_type :
Operation type.
database/mysql/innodb/buffer_flush_sync_waits_count
GA
(project)
Innodb sync flushing waits
DELTA , INT64 , 1
cloudsql_database
Number of times InnoDB has performed synchronous buffer flush operations and blocking the user transactions since last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/innodb/buffer_pool_pages
GA
(project)
InnoDB Buffer Pool Pages
GAUGE , INT64 , 1
cloudsql_database
Number of InnoDB buffer pool pages, innodb_page_type field stores count of InnoDB pages in each state. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
innodb_page_type :
Kind of InnoDB page, one of [dirty, free, Total]
database/mysql/innodb/buffer_pool_read_requests_count
GA
(project)
Innodb Buffer Pool Read Requests Count
DELTA , INT64 , 1
cloudsql_database
Logical read requests from InnoDB buffer pool, since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/innodb/buffer_pool_reads_count
GA
(project)
Innodb Buffer Pool Reads Count
DELTA , INT64 , 1
cloudsql_database
Logical reads that InnoDB could not satisfy from the buffer pool, and had to read directly from disk, since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/innodb/buffer_pool_write_requests_count
GA
(project)
InnoDB Buffer Pool Write Requests Count
DELTA , INT64 , 1
cloudsql_database
Writes done to the InnoDB buffer pool, since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/innodb/data_cache/cache_hit_count
GA
(project)
MySQL data cache hit count
DELTA , INT64 , 1
cloudsql_database
Total number of data cache hit read operations for this instance. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/innodb/data_cache/cache_miss_count
GA
(project)
MySQL data cache miss count
DELTA , INT64 , 1
cloudsql_database
Total number of data cache miss read operations for this instance. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/innodb/data_cache/pages
GA
(project)
Innodb Pages in Data Cache
GAUGE , INT64 , 1
cloudsql_database
The number of Innodb pages in Mysqls E+ Data cache feature. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
page_type :
Page types in data cache.
database/mysql/innodb/data_fsyncs_count
GA
(project)
Innodb Data Fsyncs Count
DELTA , INT64 , 1
cloudsql_database
InnoDB fsync() calls, since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/innodb/data_pending_fsyncs
GA
(project)
InnoDB Data Pending Fsyncs
GAUGE , INT64 , 1
cloudsql_database
Number of pending fsync() operations in the MySQL server. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/innodb/data_pending_reads
GA
(project)
InnoDB Data Pending Reads
GAUGE , INT64 , 1
cloudsql_database
Number of pending reads in the MySQL Server. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/innodb/data_pending_writes
GA
(project)
InnoDB Data Pending Writes
GAUGE , INT64 , 1
cloudsql_database
Number of pending writes in the MySQL Server. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/innodb/deadlocks_count
GA
(project)
InnoDB Deadlocks Count
DELTA , INT64 , 1
cloudsql_database
Deadlocks, since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/innodb/dictionary_memory
GA
(project)
MySQL InnoDB dictionary cache
GAUGE , INT64 , By
cloudsql_database
Memory allocated for InnoDB dictionary cache. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/innodb/history_list_length
GA
(project)
InnoDB History List Length
GAUGE , INT64 , 1
cloudsql_database
Indicates the size of undo logs which are used to store modifications made to older versions of rows. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/innodb/ibuf_merge_operation_count
GA
(project)
InnoDB merged records operation wise
DELTA , INT64 , 1
cloudsql_database
Total number of records type merged by the change buffering operation since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
operation_type :
Kind of merge operation. One of ibuf_merges_insert,ibuf_merges_delete_mark,ibuf_merges_delete.
database/mysql/innodb/ibuf_merges_count
GA
(project)
InnoDB change buffer merges.
DELTA , INT64 , 1
cloudsql_database
Total number of change buffer merges since the last sample. This shows the efficiency of all change buffer operations. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/innodb/innodb_log_waits_count
GA
(project)
Transaction waits for Innodb logbuffer flush
DELTA , INT64 , 1
cloudsql_database
Total number of transactions wait for space to become available in the InnoDB log buffer, to help tune innodb_log_buffer_size configuration. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/innodb/lock_timeout_count
GA
(project)
Innodb Row Lock Wait Timeout Count
DELTA , INT64 , 1
cloudsql_database
Row lock wait timeouts, since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/innodb/lsn
GA
(project)
InnoDB LSN
GAUGE , INT64 , By
cloudsql_database
Value of Innodb current/flushed/last_checkpoint log sequence number. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
lsn_type :
Type of LSN being reported out of current/flushed/last_checkpoint.
database/mysql/innodb/operation_disk_io_count
GA
(project)
Disk IO performed by InnoDB.
DELTA , INT64 , 1
cloudsql_database
Disk IO operations performed by InnoDB since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
operation_type :
Kind of Disk IO operation. One of innodb_data_reads, innodb_data_writes, innodb_log_writes, innodb_dblwr_writes.
database/mysql/innodb/os_log_fsyncs_count
GA
(project)
Innodb OS Log Fsyncs Count
DELTA , INT64 , 1
cloudsql_database
InnoDB fsync() calls to the log file, since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/innodb/os_log_pending_fsyncs
GA
(project)
InnoDB OS Log Pending Fsyncs
GAUGE , INT64 , 1
cloudsql_database
Number of pending fsync() operations for the InnoDB redo log files in the MySQL server. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/innodb/os_log_pending_writes
GA
(project)
InnoDB OS Log Pending Writes
GAUGE , INT64 , 1
cloudsql_database
Number of pending writes to the InnoDB redo log files in the MySQL server. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/innodb/pages_read_count
GA
(project)
Innodb Pages Read Count
DELTA , INT64 , 1
cloudsql_database
InnoDB pages read, since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/innodb/pages_written_count
GA
(project)
Innodb Pages Written Count
DELTA , INT64 , 1
cloudsql_database
DInnoDB pages written, since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/innodb/row_lock_time
GA
(project)
InnoDB Row Lock Time
GAUGE , INT64 , ms
cloudsql_database
The total time spent in acquiring row locks for InnoDB tables. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/innodb/row_lock_waits_count
GA
(project)
InnoDB Row Lock Waits Count
DELTA , INT64 , 1
cloudsql_database
Times operations on InnoDB tables had to wait for a row lock, since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/innodb/row_operations_count
GA
(project)
InnoDB Row Operations Count
DELTA , INT64 , 1
cloudsql_database
InnoDB row operations, operation_type field stores the count of InnoDB row operations, since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
operation_type :
Kind of InnoDB row operations, one of [delete, insert, read, update]
database/mysql/innodb_buffer_pool_pages_dirty
GA
(project)
InnoDB dirty pages
GAUGE , INT64 , 1
cloudsql_database
Number of unflushed pages in the InnoDB buffer pool. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/innodb_buffer_pool_pages_free
GA
(project)
InnoDB free pages
GAUGE , INT64 , 1
cloudsql_database
Number of unused pages in the InnoDB buffer pool. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/innodb_buffer_pool_pages_total
GA
(project)
InnoDB total pages
GAUGE , INT64 , 1
cloudsql_database
Total number of pages in the InnoDB buffer pool. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/innodb_data_fsyncs
GA
(project)
InnoDB fsync calls
DELTA , INT64 , 1
cloudsql_database
Delta count of InnoDB fsync() calls. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/innodb_os_log_fsyncs
GA
(project)
InnoDB log fsync calls
DELTA , INT64 , 1
cloudsql_database
Delta count of InnoDB fsync() calls to the log file. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/innodb_pages_read
GA
(project)
InnoDB pages read
DELTA , INT64 , 1
cloudsql_database
Delta count of InnoDB pages read. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/innodb_pages_written
GA
(project)
InnoDB pages written
DELTA , INT64 , 1
cloudsql_database
Delta count of InnoDB pages written. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/max_connections
GA
(project)
MySQL Max Connections
GAUGE , INT64 , 1
cloudsql_database
Value of the MySQL max_connections configuration. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/memory/by_code_area
GA
(project)
Memory allocated by code area
GAUGE , DOUBLE , By
cloudsql_database
Memory allocated to each code area, reported by mysql performance_schema. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
code_area_group :
Kind of Mysql code area, one of [innodb_engine,sql,performance_schema,temptable_engine,memory_engine,mysys]
database/mysql/memory/by_event
GA
(project)
Memory allocated by events
GAUGE , DOUBLE , By
cloudsql_database
Memory allocated by each event, reported by performance_schema. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
event_type :
Kind of Mysql event, one of [innodb_hash0hash,innodb_memory,innodb_row0sel,sql_table,sql_thd_main,sql_dd,sql_string,mysys_iocache]
database/mysql/memory/global
GA
(project)
Global memory allocated
GAUGE , DOUBLE , By
cloudsql_database
The total allocated memory, reported by performance_schema. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/open_table_definitions
GA
(project)
MySQL open table definitions
GAUGE , INT64 , 1
cloudsql_database
The number of table definitions that are currently cached. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/open_tables
GA
(project)
MySQL open tables
GAUGE , INT64 , 1
cloudsql_database
The number of tables that are currently open. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/opened_table_count
GA
(project)
MySQL opened table count
DELTA , INT64 , 1
cloudsql_database
The number of tables that have been opened since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/opened_table_definitions_count
GA
(project)
MySQL opened table definitions count
DELTA , INT64 , 1
cloudsql_database
The number of table definitions that have been cached since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/queries
GA
(project)
Queries
DELTA , INT64 , 1
cloudsql_database
Delta count of statements executed by the server. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/questions
GA
(project)
Questions
DELTA , INT64 , 1
cloudsql_database
Delta count of statements executed by the server sent by the client. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/received_bytes_count
GA
(project)
Network bytes received by MySQL
DELTA , INT64 , By
cloudsql_database
Delta count of bytes received by MySQL process. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/replication/available_for_failover
DEPRECATED
(project)
Available for failover (Deprecated)
GAUGE , INT64 , 1
cloudsql_database
This is > 0 if the failover operation is available on the master instance.master. The metric is deprecated. Please use cloudsql.googleapis.com/database/available_for_failover instead. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/replication/last_io_errno
GA
(project)
Last I/O thread error number.
GAUGE , INT64 , 1
cloudsql_database
The error number of the most recent error that caused the I/O thread to stop. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/replication/last_sql_errno
GA
(project)
Last SQL thread error number.
GAUGE , INT64 , 1
cloudsql_database
The error number of the most recent error that caused the SQL thread to stop. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/replication/seconds_behind_master
GA
(project)
Replication lag
GAUGE , INT64 , s
cloudsql_database
Number of seconds the read replica is behind its primary (approximation). A negative value indicates that replication is inactive. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/replication/slave_io_running
GA
(project)
Slave I/O thread running
GAUGE , STRING ,
cloudsql_database
Indicates whether the I/O thread for reading the primary's binary log is running. Possible values are Yes, No and Connecting. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/replication/slave_io_running_state
GA
(project)
Slave I/O thread running state
GAUGE , BOOL ,
cloudsql_database
Indicates whether the I/O thread for reading the primary's binary log is running. Possible values are Yes, No and Connecting, and the values are exposed through the 'state' field. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
state :
The slave_io_running state of the slave.
database/mysql/replication/slave_sql_running
GA
(project)
Slave SQL thread running
GAUGE , STRING ,
cloudsql_database
Indicates whether the SQL thread for executing events in the relay log is running. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/replication/slave_sql_running_state
GA
(project)
Slave SQL thread running state
GAUGE , BOOL ,
cloudsql_database
Indicates whether the SQL thread for executing events in the relay log is running. Possible values are Yes / No, and the values are exposed through the 'state' field. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
state :
The slave_sql_running state of the slave.
database/mysql/sent_bytes_count
GA
(project)
Network bytes sent by MySQL
DELTA , INT64 , By
cloudsql_database
Delta count of bytes sent by MySQL process. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/slow_queries_count
GA
(project)
MySQL slow queries count.
DELTA , INT64 , 1
cloudsql_database
The total number of queries that took longer than long_query_time seconds. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/thread_cache_size
GA
(project)
MySQL Thread Cache Size
GAUGE , INT64 , 1
cloudsql_database
Value of the MySQL thread_cache_size configuration. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/thread_state
GA
(project)
MySQL threads state
GAUGE , INT64 , 1
cloudsql_database
The state of running threads by querying information_schema.processlist table, this information helps to understand the locking or contention issues. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
state :
Thread state.
database/mysql/threads
GA
(project)
MySQL Thread
GAUGE , INT64 , 1
cloudsql_database
Number of Threads. threads_cached indicates threads in the thread cache, threads_connected indicates currently open connections, threads_running indicates threads that are not sleeping. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
thread_kind :
Kind of the threads counted (threads_cached, threads_connected, threads_running).
database/mysql/threads_created_count
GA
(project)
MySQL Threads Created Count
DELTA , INT64 , 1
cloudsql_database
Threads created to handle connections, since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/tmp_disk_tables_created_count
GA
(project)
MySQL Temporary Disk Tables Created Count
DELTA , INT64 , 1
cloudsql_database
Internal on-disk temporary tables created by the MySQL server while executing statements, since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/tmp_files_created_count
GA
(project)
MySQL Temporary Files Created Count
DELTA , INT64 , 1
cloudsql_database
Temporary files created by the MySQL server, since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/mysql/tmp_tables_created_count
GA
(project)
MySQL Temporary Tables Created Count
DELTA , INT64 , 1
cloudsql_database
MySQL temporary tables created, since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/network/connection_attempt_count
GA
(project)
Cloud SQL Connection Attempts
DELTA , INT64 , 1
cloudsql_database
Total number of connection attempts to the Cloud SQL instance, with information about anomaly detection. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
login_status :
Login status, one of [succeeded, failed].
anomaly_detected :
Connection related anomaly, for example, "no anomaly detected", "brute-force login".
anomalous_connection_throttled :
(BOOL)
Whether the connection is throttled if it's anomalous.
database/network/connections
GA
(project)
Cloud SQL Connections
GAUGE , INT64 , 1
cloudsql_database
Number of connections to databases on the Cloud SQL instance. Only applicable to MySQL and SQL Server. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/network/received_bytes_count
GA
(project)
Received bytes
DELTA , INT64 , By
cloudsql_database
Delta count of bytes received through the network. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/network/sent_bytes_count
GA
(project)
Sent bytes
DELTA , INT64 , By
cloudsql_database
Delta count of bytes sent through the network. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
destination :
Deprecated and not populated.
database/postgresql/backends_in_wait
GA
(project)
PostgreSQL backends in wait
GAUGE , INT64 , 1
cloudsql_database
Number of backends in wait in postgres instance. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
backend_type :
Type of the backend, one of [autovacuum launcher, autovacuum worker, logical replication launcher, logical replication worker, parallel worker, background writer, client backend, checkpointer, archiver, startup, walreceiver, walsender, walwriter].
wait_event :
Name of the wait event, such as AutoVacuumMain, ClientRead.
wait_event_type :
Type of wait event, one of [Activity, BufferPin, Extension, IO, IPC, Lock, LWLock, Timeout].
database/postgresql/blocks_read_count
GA
(project)
Number of disk blocks read.
DELTA , INT64 , 1
cloudsql_database
Number of disk blocks read by this database. The source field distingushes actual reads from disk versus reads from buffer cache. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database :
Name of the database.
source :
Type of data block, one of [disk, buffer_cache].
database/postgresql/checkpoint_count
GA
(project)
Checkpoint count
DELTA , INT64 , 1
cloudsql_database
Total checkpoints occurred. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
checkpoint_type :
Type of checkpoint, can be one of [scheduled, requested].
database/postgresql/data_cache/hit_count
GA
(project)
PostgreSQL data cache hit count
DELTA , INT64 , 1
cloudsql_database
Total number of data cache hit read operations for this instance. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/postgresql/data_cache/hit_ratio
GA
(project)
PostgreSQL data cache hit ratio
GAUGE , DOUBLE , 1
cloudsql_database
Ratio of data cache hit read operations for this instance. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/postgresql/data_cache/miss_count
GA
(project)
PostgreSQL data cache miss count
DELTA , INT64 , 1
cloudsql_database
Total number of data cache miss read operations for this instance. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/postgresql/deadlock_count
GA
(project)
Deadlocks count
DELTA , INT64 , 1
cloudsql_database
Number of deadlocks detected for this database. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database :
Name of the database.
database/postgresql/disk/read_bytes_count
GA
(project)
Bytes read by PostgreSQL
DELTA , INT64 , By
cloudsql_database
Delta number of bytes read by PostgreSQL. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
backend_type :
Type of backend.
object :
Target object of the read operation.
context :
The context of the read operation.
database/postgresql/disk/write_bytes_count
GA
(project)
Bytes written by PostgreSQL
DELTA , INT64 , By
cloudsql_database
Delta number of bytes written by PostgreSQL. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
backend_type :
Type of backend.
object :
Target object of the write operation.
context :
The context of the write operation.
database/postgresql/external_sync/initial_sync_complete
ALPHA
(project)
Initial sync complete
GAUGE , BOOL ,
cloudsql_database
Whether all databases on the Postgres External Server (ES) replica have completed the initial sync and are replicating changes from the source. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/postgresql/external_sync/max_replica_byte_lag
ALPHA
(project)
Max lag bytes
GAUGE , INT64 , By
cloudsql_database
Replication lag in bytes for Postgres External Server (ES) replicas. Aggregated across all DBs on the replica. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/postgresql/insights/aggregate/execution_time
GA
(project)
Execution time
CUMULATIVE , INT64 , us{CPU}
cloudsql_instance_database
Accumulated query execution time per user per database. This is the sum of cpu time, io wait time, lock wait time, process context switch, and scheduling for all the processes involved in the query execution.
user :
The user of the database.
client_addr :
The IP address of the database client.
database/postgresql/insights/aggregate/io_time
GA
(project)
IO time
CUMULATIVE , INT64 , us
cloudsql_instance_database
Accumulated IO time per user per database.
user :
The user of the database.
client_addr :
The IP address of the database client.
io_type :
The IO type (read/write).
database/postgresql/insights/aggregate/latencies
GA
(project)
Latency
CUMULATIVE , DISTRIBUTION , us
cloudsql_instance_database
Query latency distribution per user per database.
user :
The user of the database.
client_addr :
The IP address of the database client.
database/postgresql/insights/aggregate/lock_time
GA
(project)
Aggregated lock time
CUMULATIVE , INT64 , us
cloudsql_instance_database
Accumulated lock wait time per user per database.
user :
The user of the database.
client_addr :
The IP address of the database client.
lock_type :
The lock type (lw/hw/buffer_pin).
database/postgresql/insights/aggregate/row_count
GA
(project)
Affected rows
CUMULATIVE , INT64 , 1
cloudsql_instance_database
Total number of rows affected during query execution.
user :
The user of the database.
client_addr :
The IP address of the database client.
database/postgresql/insights/aggregate/shared_blk_access_count
GA
(project)
Shared blocks cache access.
CUMULATIVE , INT64 , 1
cloudsql_instance_database
Shared blocks (regular tables & indexed) accessed by statement execution.
user :
The user of the database.
client_addr :
The IP address of the database client.
access_type :
The block access type (hit/miss).
database/postgresql/insights/perquery/execution_time
GA
(project)
Per query execution times
CUMULATIVE , INT64 , us{CPU}
cloudsql_instance_database
Accumulated execution times per user per database per query.This is the sum of cpu time, io wait time, lock wait time, process context switch, and scheduling for all the processes involved in the query execution.
querystring :
The normalized query.
user :
The user of the database.
client_addr :
The IP address of the database client.
query_hash :
A unique hash of the query string.
database/postgresql/insights/perquery/io_time
GA
(project)
Per query IO time
CUMULATIVE , INT64 , us
cloudsql_instance_database
Accumulated IO time per user per database per query.
querystring :
The normalized query.
user :
The user of the database.
client_addr :
The IP address of the database client.
io_type :
The IO type (read/write).
query_hash :
A unique hash of the query string.
database/postgresql/insights/perquery/latencies
GA
(project)
Per query latency
CUMULATIVE , DISTRIBUTION , us
cloudsql_instance_database
Query latency distribution per user per database per query.
querystring :
The normalized query.
user :
The user of the database.
client_addr :
The IP address of the database client.
query_hash :
A unique hash of the query string.
database/postgresql/insights/perquery/lock_time
GA
(project)
Per query lock time
CUMULATIVE , INT64 , us
cloudsql_instance_database
Accumulated lock wait time per user per database per query.
querystring :
The normalized query.
user :
The user of the database.
client_addr :
The IP address of the database client.
lock_type :
The lock type (lw/hw/buffer_pin).
query_hash :
A unique hash of the query string.
database/postgresql/insights/perquery/row_count
GA
(project)
Per query affected rows
CUMULATIVE , INT64 , 1
cloudsql_instance_database
Total number of rows affected during query execution.
querystring :
The normalized query.
user :
The user of the database.
client_addr :
The IP address of the database client.
query_hash :
A unique hash of the query string.
database/postgresql/insights/perquery/shared_blk_access_count
GA
(project)
Per query Shared blocks cache access
CUMULATIVE , INT64 , 1
cloudsql_instance_database
Shared blocks (regular tables & indexed) accesssed by statement execution.
querystring :
The normalized query.
user :
The user of the database.
client_addr :
The IP address of the database client.
access_type :
The block access type (hit/miss).
query_hash :
A unique hash of the query string.
database/postgresql/insights/pertag/execution_time
GA
(project)
Per tag execution time
CUMULATIVE , INT64 , us{CPU}
cloudsql_instance_database
Accumulated execution times per user per database per tag.This is the sum of cpu time, io wait time, lock wait time, process context switch, and scheduling for all the processes involved in the query execution.
user :
The user of the database.
client_addr :
The IP address of the database client.
action :
The name of the action.
application :
The name of the application.
controller :
The name of the controller.
db_driver :
The name of the db_driver.
framework :
The name of the framework.
route :
The name of the route.
tag_hash :
A unique hash of the tag string.
database/postgresql/insights/pertag/io_time
GA
(project)
Per tag IO time
CUMULATIVE , INT64 , us
cloudsql_instance_database
Accumulated IO write time per user per database per tag.
user :
The user of the database.
client_addr :
The IP address of the database client.
action :
The name of the action.
application :
The name of the application.
controller :
The name of the controller.
db_driver :
The name of the db_driver.
framework :
The name of the framework.
route :
The name of the route.
io_type :
The IO type (read/write).
tag_hash :
A unique hash of the tag string.
database/postgresql/insights/pertag/latencies
GA
(project)
Per tag latency
CUMULATIVE , DISTRIBUTION , us
cloudsql_instance_database
Query latency distribution per user per database per tag.
user :
The user of the database.
client_addr :
The IP address of the database client.
action :
The name of the action.
application :
The name of the application.
controller :
The name of the controller.
db_driver :
The name of the db_driver.
framework :
The name of the framework.
route :
The name of the route.
tag_hash :
A unique hash of the tag string.
database/postgresql/insights/pertag/lock_time
GA
(project)
Per tag lock time
CUMULATIVE , INT64 , us
cloudsql_instance_database
Accumulated lock wait time per user per database per tag.
user :
The user of the database.
client_addr :
The IP address of the database client.
action :
The name of the action.
application :
The name of the application.
controller :
The name of the controller.
db_driver :
The name of the db_driver.
framework :
The name of the framework.
route :
The name of the route.
lock_type :
The lock type (lw/hw/buffer_pin).
tag_hash :
A unique hash of the tag string.
database/postgresql/insights/pertag/row_count
GA
(project)
Per tag affected rows
CUMULATIVE , INT64 , 1
cloudsql_instance_database
Total number of rows affected during query execution.
user :
The user of the database.
client_addr :
The IP address of the database client.
action :
The name of the action.
application :
The name of the application.
controller :
The name of the controller.
db_driver :
The name of the db_driver.
framework :
The name of the framework.
route :
The name of the route.
tag_hash :
A unique hash of the tag string.
database/postgresql/insights/pertag/shared_blk_access_count
GA
(project)
Per tag shared blocks cache accessed
CUMULATIVE , INT64 , 1
cloudsql_instance_database
Shared blocks (regular tables & indexed) accessed by statement execution.
user :
The user of the database.
client_addr :
The IP address of the database client.
action :
The name of the action.
application :
The name of the application.
controller :
The name of the controller.
db_driver :
The name of the db_driver.
framework :
The name of the framework.
route :
The name of the route.
access_type :
The block access type (hit/miss).
tag_hash :
A unique hash of the tag string.
database/postgresql/new_connection_count
GA
(project)
PostgreSQL new connections count
DELTA , INT64 , 1
cloudsql_database
Count of new connections added to the postgres instance. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database :
Name of the database, such as testdb.
database/postgresql/num_backends
GA
(project)
PostgreSQL Connections
GAUGE , INT64 , 1
cloudsql_database
Number of connections to the Cloud SQL PostgreSQL instance. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database :
Name of the database.
database/postgresql/num_backends_by_application
GA
(project)
PostgreSQL connections by application
GAUGE , INT64 , 1
cloudsql_database
Number of connections to the Cloud SQL PostgreSQL instance, grouped by applications. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
application :
Name of the application.
database/postgresql/num_backends_by_state
GA
(project)
PostgreSQL Connections by State
GAUGE , INT64 , 1
cloudsql_database
Number of connections to the Cloud SQL PostgreSQL instance, grouped by its state. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database :
Name of the database.
state :
Connection state, one of [idle, active, idle_in_transaction, idle_in_transaction_aborted, disabled or fastpath_function_call].
database/postgresql/replication/replica_byte_lag
GA
(project)
Lag bytes
GAUGE , INT64 , By
cloudsql_database
Replication lag in bytes. Reported from the master per replica. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
replica_name :
Name of the replica.
replica_lag_type :
Type of lag. This can be either replay_location, flush_location, write_location or sent_location.
database/postgresql/statements_executed_count
GA
(project)
Statements executed count
DELTA , INT64 , 1
cloudsql_database
Total count of statements executed in postgresql instance. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database :
Name of the database.
operation_type :
Type of the operation performed.
database/postgresql/temp_bytes_written_count
GA
(project)
Data (in bytes) written to temporary
DELTA , INT64 , 1
cloudsql_database
Total amount of data (in bytes) written to temporary files by the queries per database. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database :
Name of the database.
database/postgresql/temp_files_written_count
GA
(project)
Temporary files used for writing data
DELTA , INT64 , 1
cloudsql_database
Total number of temporary files used for writing data while performing algorithms such as join and sort. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database :
Name of the database.
database/postgresql/transaction_count
GA
(project)
Number of transactions
DELTA , INT64 , 1
cloudsql_database
Delta count of number of transactions. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database :
Name of the database.
transaction_type :
transaction_type can be commit or rollback.
database/postgresql/transaction_id_count
GA
(project)
Transaction ID count
DELTA , INT64 , 1
cloudsql_database
Delta count of transaction ID. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
action :
Type of action, one of ["assigned" - count of transaction IDs assigned and consumed by the instance; "frozen" - count of transaction IDs replenished by the VACUUM`s freeze operation].
database/postgresql/transaction_id_utilization
GA
(project)
Transaction ID utilization
GAUGE , DOUBLE , 10^2.%
cloudsql_database
Current utilization represented as a percentage of transaction IDs consumed by the Cloud SQL PostgreSQL instance. Values are typically numbers between 0.0 and 1.0. Charts display the values as a percentage between 0% and 100%. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/postgresql/tuple_size
GA
(project)
Number of tuples (rows) in the database.
GAUGE , INT64 , 1
cloudsql_database
Number of tuples (rows) in the database. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database :
Name of the database.
tuple_state :
Type of tuple state, one of [live, dead].
database/postgresql/tuples_fetched_count
GA
(project)
Number of tuples fetched
DELTA , INT64 , 1
cloudsql_database
Total number of rows fetched as a result of queries per database in the PostgreSQL instance. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database :
Name of the database.
database/postgresql/tuples_processed_count
GA
(project)
Number of rows processed
DELTA , INT64 , 1
cloudsql_database
Number of tuples(rows) processed for a given database for operations like insert, update or delete. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
operation_type :
Type of database operation, one of [insert, update, delete].
database :
Name of the database.
database/postgresql/tuples_returned_count
GA
(project)
Number of tuples returned
DELTA , INT64 , 1
cloudsql_database
Total number of rows scanned while processing the queries per database in the PostgreSQL instance. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database :
Name of the database.
database/postgresql/vacuum/oldest_transaction_age
GA
(project)
Oldest transaction age
GAUGE , INT64 , 1
cloudsql_database
Age of the oldest transaction yet to be vacuumed in the Cloud SQL PostgreSQL instance, measured in number of transactions that have happened since the oldest transaction. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
oldest_transaction_type :
oldest transaction type can be one of [running, prepared, replication_slot, replica].
database/postgresql/write_ahead_log/flushed_bytes_count
GA
(project)
PostgreSQL WAL flushed bytes count
DELTA , INT64 , 1
cloudsql_database
Total size (bytes) of WAL flushed for this instance. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/postgresql/write_ahead_log/inserted_bytes_count
GA
(project)
PostgreSQL WAL inserted bytes count
DELTA , INT64 , 1
cloudsql_database
Total size (bytes) of WAL inserted for this instance. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/postgresql/write_ahead_log/redo_size
GA
(project)
PostgreSQL redo size metric
GAUGE , INT64 , 1
cloudsql_database
The size (bytes) of WAL to redo in case of recovery. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/postgresql/write_ahead_log/written_bytes_count
GA
(project)
PostgreSQL WAL written bytes count
DELTA , INT64 , 1
cloudsql_database
Total size (bytes) of WAL written for this instance. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/replication/log_archive_failure_count
GA
(project)
Number of log archival failures.
DELTA , INT64 , 1
cloudsql_database
Number of failed attempts for archiving replication log files. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/replication/log_archive_success_count
GA
(project)
Number of log archival successes.
DELTA , INT64 , 1
cloudsql_database
Number of successful attempts for archiving replication log files. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/replication/network_lag
GA
(project)
Network lag
GAUGE , INT64 , s
cloudsql_database
Indicates time taken from primary binary log to IO thread on replica. Only applicable to replicas. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/replication/replica_lag
GA
(project)
Replication lag
GAUGE , DOUBLE , s
cloudsql_database
Number of seconds the read replica is behind its primary (approximation). A negative value indicates that replication is inactive. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/replication/state
BETA
(project)
Replication state
GAUGE , BOOL ,
cloudsql_database
The current serving state of replication. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
state :
State of replication:"Running" - Replication is active and running;"Stopped" - Replication is inactive and stopped;"Error" - There is an error happening and replication is stopped.
database/sqlserver/audits_size
GA
(project)
Size of stored audit files.
GAUGE , INT64 , By
cloudsql_database
Tracks the size in bytes of stored SQLServer audit files on an instance. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/sqlserver/audits_upload_count
GA
(project)
Total number of successfully uploaded audits.
DELTA , INT64 , 1
cloudsql_database
Counts total number of SQLServer audit file uploads to a GCS bucket and whether or not an upload was successful. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
upload_status :
Upload status of latest audit file.
database/sqlserver/connections/connection_reset_count
GA
(project)
Connection resets
DELTA , INT64 , 1
cloudsql_database
Total number of logins started from the connection pool since the last restart of SQL Server service. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/sqlserver/connections/login_attempt_count
GA
(project)
Login attempts
DELTA , INT64 , 1
cloudsql_database
Total number of login attempts since the last restart of SQL Server service. This does not include pooled connections. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/sqlserver/connections/logout_count
GA
(project)
Logouts
DELTA , INT64 , 1
cloudsql_database
Total number of logout operations since the last restart of SQL Server service. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/sqlserver/connections/processes_blocked
GA
(project)
Processes blocked
GAUGE , INT64 , 1
cloudsql_database
Current number of blocked processes. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/sqlserver/data_cache/hit_count
GA
(project)
SQL Server data cache hit count
DELTA , INT64 , 1
cloudsql_database
Total number of data cache hit read operations for this instance. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/sqlserver/data_cache/hit_ratio
GA
(project)
SQL Server data cache hit ratio
GAUGE , DOUBLE , 1
cloudsql_database
Ratio of successful data cache hit read operations for this instance. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/sqlserver/data_cache/miss_count
GA
(project)
SQL Server data cache miss count
DELTA , INT64 , 1
cloudsql_database
Total number of data cache miss read operations for this instance. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/sqlserver/databases
GA
(project)
SQL Server Databases
GAUGE , INT64 , 1
cloudsql_database
Current number of databases on the instance excluding system databases. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
state :
Database state, for example, 'ONLINE' or 'SUSPECT'.
recovery_model :
Database recovery model, one of [FULL, BULK_LOGGED, SIMPLE].
is_cdc_enabled :
(BOOL)
Indicates whether CDC is enabled.
is_published :
(BOOL)
Indicates whether a database is published.
auto_close :
(BOOL)
Indicates whether auto-close is enabled on a database.
database/sqlserver/memory/buffer_cache_hit_ratio
GA
(project)
Buffer cache hit ratio
GAUGE , DOUBLE , %
cloudsql_database
Current percentage of pages found in the buffer cache without having to read from disk. The ratio is the total number of cache hits divided by the total number of cache lookups. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/sqlserver/memory/checkpoint_page_count
GA
(project)
Checkpoint pages
DELTA , INT64 , 1
cloudsql_database
Total number of pages flushed to disk by a checkpoint or other operation that requires all dirty pages to be flushed. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/sqlserver/memory/free_list_stall_count
GA
(project)
Free list stalls
DELTA , INT64 , 1
cloudsql_database
Total number of requests that had to wait for a free page. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/sqlserver/memory/lazy_write_count
GA
(project)
Lazy writes
DELTA , INT64 , 1
cloudsql_database
Total number of buffers written by the buffer manager's lazy writer. The lazy writer is a system process that flushes out batches of dirty, aged buffers (buffers that contain changes that must be written back to disk before the buffer can be reused for a different page) and makes them available to user processes. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/sqlserver/memory/memory_grants_pending
GA
(project)
Memory grants pending
GAUGE , INT64 , 1
cloudsql_database
Current number of processes waiting for a workspace memory grant. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/sqlserver/memory/page_life_expectancy
GA
(project)
Page life expectancy
GAUGE , INT64 , s
cloudsql_database
Current number of seconds a page will stay in the buffer pool without references. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/sqlserver/memory/page_operation_count
GA
(project)
Page operations
DELTA , INT64 , 1
cloudsql_database
Total number of physical database page reads or writes. This statistic counts physical page reads or writes across all databases. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
operation :
Page operation, one of [Read, Write].
database/sqlserver/replication/bytes_sent_to_replica_count
GA
(project)
Bytes sent to replica
DELTA , INT64 , By
cloudsql_database
Total number of bytes sent to the remote availability replica. Before compression for async replica. Actual number of bytes for sync replica which has no compression. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
replica_name :
Replica name, for example, 'ag:0975ec5e220191d' or 'ag:58cb483ac3f7083'.
database/sqlserver/replication/log_apply_pending_queue
GA
(project)
Log apply pending queue
GAUGE , INT64 , 1
cloudsql_database
Current number of log blocks that are waiting to be applied to all database replicas. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/sqlserver/replication/log_bytes_received_count
GA
(project)
Log bytes received
DELTA , INT64 , By
cloudsql_database
Total amount of log records received by the secondary replica for all databases. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/sqlserver/replication/recovery_queue
GA
(project)
Recovery queue
GAUGE , INT64 , kBy
cloudsql_database
Current amount of log records in kilobytes in the log files of the secondary replica that have not been redone. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/sqlserver/replication/redone_bytes_count
GA
(project)
Redone bytes
DELTA , INT64 , By
cloudsql_database
Total amount of log records redone on all secondary databases. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/sqlserver/replication/resent_message_count
GA
(project)
Resent messages
DELTA , INT64 , 1
cloudsql_database
Total number of Always On messages resent. A resent message is a message that was attempted to be sent but was unable to complete and must be attempted to be sent again. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
replica_name :
Replica name, for example, 'ag:0975ec5e220191d' or 'ag:58cb483ac3f7083'.
database/sqlserver/schedulers/active_workers
GA
(project)
Number of active workers per scheduler
GAUGE , INT64 , 1
cloudsql_database
Current number of workers that are active. An active worker is never preemptive, must have an associated task, and is either running, runnable, or suspended. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
scheduler_id :
Identifier of the scheduler, for example, '3' or 'Internal'.
database/sqlserver/schedulers/by_status
GA
(project)
Number of schedulers
GAUGE , INT64 , 1
cloudsql_database
Current number of schedulers reporting a particular status. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
status :
Scheduler status, one of [HIDDEN ONLINE, HIDDEN OFFLINE, VISIBLE ONLINE, VISIBLE OFFLINE, VISIBLE ONLINE (DAC), HOT_ADDED].
is_internal :
(BOOL)
Indicates whether the scheduler is internal.
database/sqlserver/schedulers/current_tasks
GA
(project)
Number of current tasks per scheduler
GAUGE , INT64 , 1
cloudsql_database
Current number of current tasks that are associated with a scheduler. This count includes tasks that are waiting for a worker to execute them and tasks that are currently waiting or running (in SUSPENDED or RUNNABLE state). Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
scheduler_id :
Identifier of the scheduler, for example, '3' or 'Internal'.
database/sqlserver/schedulers/current_workers
GA
(project)
Number of workers per scheduler
GAUGE , INT64 , 1
cloudsql_database
Current number of workers that are associated with a scheduler. It includes workers that are not assigned any task. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
scheduler_id :
Identifier of the scheduler, for example, '3' or 'Internal'.
database/sqlserver/schedulers/pending_disk_io
GA
(project)
Number of pending I/O operations per scheduler
GAUGE , INT64 , 1
cloudsql_database
Current number of pending I/Os that are waiting to be completed. Each scheduler has a list of pending I/Os that are checked to determine whether they have been completed every time there is a context switch. The count is incremented when the request is inserted. This count is decremented when the request is completed. This number does not indicate the state of the I/Os. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
scheduler_id :
Identifier of the scheduler, for example, '3' or 'Internal'.
database/sqlserver/schedulers/runnable_tasks
GA
(project)
Number of workers with assigned tasks per scheduler
GAUGE , INT64 , 1
cloudsql_database
Current number of workers, with tasks assigned to them, that are waiting to be scheduled on the runnable queue. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
scheduler_id :
Identifier of the scheduler, for example, '3' or 'Internal'.
database/sqlserver/schedulers/work_queue
GA
(project)
Number of pending tasks per scheduler
GAUGE , INT64 , 1
cloudsql_database
Current number of tasks in the pending queue. These tasks are waiting for a worker to pick them up. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
scheduler_id :
Identifier of the scheduler, for example, '3' or 'Internal'.
database/sqlserver/server_principals
GA
(project)
Server principals
GAUGE , INT64 , 1
cloudsql_database
Current number of server principals on the instance. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
type :
Server principal type, one of [SQL_LOGIN, WINDOWS_LOGIN, WINDOWS_GROUP, SERVER_ROLE, CERTIFICATE_MAPPED_LOGIN, EXTERNAL_LOGIN, EXTERNAL_GROUP, ASYMMETRIC_KEY_MAPPED_LOGIN].
is_enabled :
(BOOL)
Indicates whether a server principal is enabled.
database/sqlserver/sql_agent/jobs
GA
(project)
SQL Server agent jobs
GAUGE , INT64 , 1
cloudsql_database
Current number of SQL Server agent jobs on the instance. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
is_enabled :
(BOOL)
Indicates whether a job is enabled.
last_run_outcome :
Last outcome of a job run, one of [Fail, Succeed, Retry, Cancel, In progress, Unknown].
database/sqlserver/transactions/batch_request_count
GA
(project)
Batch requests
DELTA , INT64 , 1
cloudsql_database
Total number of Transact-SQL command batches received. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/sqlserver/transactions/deadlock_count
GA
(project)
Deadlocks
DELTA , INT64 , 1
cloudsql_database
Total number of lock requests that resulted in a deadlock. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
locked_resource :
Locked resource, for example, 'Page' or 'Database'.
database/sqlserver/transactions/forwarded_record_count
GA
(project)
Forwarded records
DELTA , INT64 , 1
cloudsql_database
Total number of records fetched through forwarded record pointers. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/sqlserver/transactions/full_scan_count
GA
(project)
Full scans
DELTA , INT64 , 1
cloudsql_database
Total number of unrestricted full scans. These can be either base-table or full-index scans. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/sqlserver/transactions/lock_wait_count
GA
(project)
Lock waits
DELTA , INT64 , 1
cloudsql_database
Total number of lock requests that required the caller to wait. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
locked_resource :
Locked resource, for example, 'Page' or 'Database'.
database/sqlserver/transactions/lock_wait_time
GA
(project)
Lock wait time
DELTA , INT64 , ms
cloudsql_database
Total time lock requests were waiting for locks. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
locked_resource :
Locked resource, for example, 'Page' or 'Database'.
database/sqlserver/transactions/log_bytes_flushed_count
GA
(project)
Log bytes flushed
DELTA , INT64 , By
cloudsql_database
Total number of log bytes flushed. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database :
Database name, one of [tempdb, model, msdb, mssqlsystemresource, master, other].
database/sqlserver/transactions/page_split_count
GA
(project)
Page splits
DELTA , INT64 , 1
cloudsql_database
Total number of page splits that occur as the result of overflowing index pages. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/sqlserver/transactions/probe_scan_count
GA
(project)
Probe scans
DELTA , INT64 , 1
cloudsql_database
Total number of probe scans that are used to find at most one single qualified row in an index or base table directly. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/sqlserver/transactions/sql_compilation_count
GA
(project)
SQL compilations
DELTA , INT64 , 1
cloudsql_database
Total number of SQL compilations. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/sqlserver/transactions/sql_recompilation_count
GA
(project)
SQL recompilations
DELTA , INT64 , 1
cloudsql_database
Total number of SQL recompilations. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/sqlserver/transactions/transaction_count
GA
(project)
Transactions started
DELTA , INT64 , 1
cloudsql_database
Total number of transactions started. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database :
Database name, one of [tempdb, model, msdb, mssqlsystemresource, master, other].
database/sqlserver/xevents_size
GA
(project)
Size of stored XEvents files.
GAUGE , INT64 , By
cloudsql_database
Tracks the size in bytes of stored SQLServer XEvents files on an instance. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/sqlserver/xevents_upload_count
GA
(project)
Total number of successfully uploaded XEvents.
DELTA , INT64 , 1
cloudsql_database
Counts total number of SQLServer XEvents file uploads to a GCS bucket and whether or not an upload was successful. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
upload_status :
Upload status of latest XEvents file.
database/state
DEPRECATED
(project)
State
GAUGE , STRING ,
cloudsql_database
The current serving state of the Cloud SQL instance. This can be one of the following:
RUNNING: The instance is *expected* to be running. If an instance experiences unplanned (non-maintenance) downtime, the state will still be RUNNING, but the database/up metric will report 0.
SUSPENDED: The instance is not available, for example due to problems with billing.
RUNNABLE: The instance has been stopped by owner. It is not currently running, but it's ready to be restarted.
PENDING_CREATE: The instance is being created.
MAINTENANCE: The instance is down for maintenance.
FAILED: The instance creation failed or an operation left the instance in an unknown bad state.
UNKNOWN_STATE: The state of the instance is unknown. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/swap/bytes_used
GA
(project)
Swap space usage
GAUGE , INT64 , By
cloudsql_database
Swap space used by the database container. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/swap/pages_swapped_in_count
GA
(project)
Pages Swapped In Count
DELTA , INT64 , By
cloudsql_database
Total count of pages swapped in of disk since the system was booted. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/swap/pages_swapped_out_count
GA
(project)
Pages Swapped Out Count
DELTA , INT64 , By
cloudsql_database
Total count of pages swapped out of disk since the system was booted. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/up
GA
(project)
Server up
GAUGE , INT64 , 1
cloudsql_database
Indicates if the server is up or not. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
database/uptime
GA
(project)
Uptime
DELTA , INT64 , s
cloudsql_database
Delta count of the time in seconds the instance has been running. Sampled every 60 seconds. After sampling, data is not visible for up to 165 seconds.
per_database/conn_pool/client_connections
GA
(project)
Client connections
GAUGE , INT64 , 1
cloudsql_instance_database
Number of client connections per database grouped by status.
status :
Status of the client connection e.g. 'active' or 'waiting'.
per_database/conn_pool/client_connections_attempts_count
GA
(project)
Client connection attempts count
CUMULATIVE , INT64 , 1
cloudsql_instance_database
Number of client connection attempts received per database.
per_database/conn_pool/client_connections_avg_wait_time
GA
(project)
Average wait time
GAUGE , INT64 , us
cloudsql_instance_database
Average wait time spent by clients waiting for a server connection per database in microseconds.
per_database/conn_pool/client_connections_error_count
GA
(project)
Error count
CUMULATIVE , INT64 , 1
cloudsql_instance_database
Count of errors that cause client disconnection including auth error, client connection setup error, server connection error and timeout errors.
per_database/conn_pool/num_pools
GA
(project)
Number of connection pools
GAUGE , INT64 , 1
cloudsql_instance_database
Number of connection pools per database.
per_database/conn_pool/server_connections
GA
(project)
Server connections
GAUGE , INT64 , 1
cloudsql_instance_database
Number of server connections per database grouped by status.
status :
Status of the server connection e.g. 'active' or 'idle'.
per_database/postgresql/external_sync/initial_sync_complete
GA
(project)
External server migration phase
GAUGE , BOOL ,
cloudsql_instance_database
Migration phase of each database on the external server (ES) replica. This only applies to instances that are replicating from an external server.
per_database/postgresql/external_sync/replication_byte_lag
GA
(project)
Exernal server replication byte lag
GAUGE , INT64 , 1
cloudsql_instance_database
Replication lag in bytes of each database on the external server (ES) replica. This only applies to instances that are replicating from an external server.
Table generated at 2026-04-10 19:48:34 UTC.
What's next
Learn how monitoring works in Google Cloud with the Introduction to Cloud Monitoring .
Learn how to use Metrics Explorer .
See the complete Metrics list for all Google Cloud
products.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
