---
title: "Legacy Monitoring and Logging agent metrics \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/monitoring/api/metrics_agent
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/monitoring/api/resources
source_metadata:
  url: https://docs.cloud.google.com/monitoring/api/metrics_agent
  title: "Legacy Monitoring and Logging agent metrics \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Monitoring
Reference
Send feedback
Legacy Monitoring and Logging agent metrics
Stay organized with collections
Save and categorize content based on your preferences.
When you install the Cloud Monitoring and Cloud Logging
agents on your VM instances, the agents transmit data for the metric types
listed in this document to Monitoring. For information about
choosing the right agent, see
Ops Agent overview .
Important: You must install the Monitoring agent to
collect most of the metrics listed in this document. The Ops Agent collects
similar metrics, with a few differences; see
Ops Agent metrics for the list of
Ops Agent metrics and Metrics from the Ops Agent
and the Monitoring agent for the list of differences.
To collect the metrics labeled "logging agent" in the
"agent" table ,
you must install the Logging agent.
For a general explanation of the entries in the tables,
including information about values like DELTA and GAUGE ,
see Metric types .
To chart or monitor metric types with values of type STRING , you
must use Monitoring Query Language (MQL), and you must convert the value into a
numeric value. For information about MQL string-conversion methods,
see String .
For information about the units used in the metric lists, see
the unit field in the MetricDescriptor reference.
For information about statements of the form
“Sampled every x seconds” and
“After sampling, data is not visible for up to y seconds”,
see Additional information: metadata .
The resource-hierarchy level tells you if the metric is written at the
project, organization, or folder level(s). When the level is not specified
in the metric descriptor, the metric writes at the project level by default.
The metric types in the table titled "agent" are free;
the other types are chargeable.
For pricing information, see Google Cloud Observability pricing .
For information about the meaning of launch stages such as
GA (General Availability) and BETA (Preview), see
Product launch stages .
Metrics from the Ops Agent and the Monitoring agent
The Monitoring agent has two entirely different implementations,
one for Linux VMs and one for Windows VMs. The Ops Agent runs on both
Linux and Windows VMs.
Differences in metric collection
Note: Metrics with a description that includes the statement "Linux only"
aren't collected by the Monitoring agent for Windows VMs.
However, the Ops Agent collects those metrics on both Linux and Windows VMs.
The following table describes differences in the data ingested by the Ops Agent
and the Monitoring agent.
Metric type, omitting
agent.googleapis.com
Ops Agent (GA) †
Ops Agent (Preview) †
Monitoring agent
cpu_state
The possible values for Windows are
idle , interrupt,
system and user .
The possible values for Windows are
idle , interrupt,
system and user .
The possible values for Windows are
idle and used .
disk/bytes_used and
disk/percent_used
Ingested with the full path in the device label;
for example, /dev/sda15 .
Not ingested for virtual devices like
tmpfs and udev .
Ingested without /dev in the path in the
device label; for example, sda15 .
Ingested for virtual devices
like tmpfs and udev .
Ingested without /dev in the path in the
device label; for example, sda15 .
Ingested for virtual devices
like tmpfs and udev .
† The GA column refers to Ops Agent versions 2.0.0 and higher. The Preview column refers to Ops Agent versions less than 2.0.0.
Agent metrics
Metrics from the Monitoring agent and from the Logging agent running on VM instances in Google Cloud and AWS.
The following list was last generated at 2026-04-10 19:48:34 UTC.
For more information about this process, see
About the lists .
agent
Metrics from the default configuration for the Linux Monitoring agent .
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with agent.googleapis.com/agent/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
api_request_count
GA
(project)
Monitoring Agent API Request Count
CUMULATIVE , INT64 , 1
aws_ec2_instance
baremetalsolution.googleapis.com/Instance
gae_app
gce_instance
k8s_container
Count of API requests from the Monitoring agent. Linux only. Sampled every 60 seconds.
state :
Request state.
log_entry_count
GA
(project)
Logging Agent Log Entry Count
CUMULATIVE , INT64 , 1
aws_ec2_instance
baremetalsolution.googleapis.com/Instance
gae_app
gce_instance
k8s_container
Count of log entries written by the Logging agent. Linux only. Sampled every 60 seconds.
response_code :
Numeric response code from both the gRPC and HTTP error spaces.
log_entry_retry_count
GA
(project)
Logging Agent Retried Log Entry Writes Count
CUMULATIVE , INT64 , 1
aws_ec2_instance
baremetalsolution.googleapis.com/Instance
gae_app
gce_instance
k8s_container
Count of log-entry writes that were retried by the Logging agent. Linux only. Sampled every 60 seconds.
response_code :
Numeric response code from both the gRPC and HTTP error spaces.
memory_usage
GA
(project)
Monitoring Agent Memory Usage
GAUGE , DOUBLE , By
aws_ec2_instance
baremetalsolution.googleapis.com/Instance
gae_app
gce_instance
k8s_container
Memory in use by the Monitoring agent. Linux only. Sampled every 60 seconds.
monitoring/point_count
GA
(project)
Monitoring Agent Metric Point Count
CUMULATIVE , INT64 , 1
aws_ec2_instance
baremetalsolution.googleapis.com/Instance
gae_app
gce_instance
k8s_container
Count of metric points written by the agent to Cloud Monitoring. Linux only. Sampled every 60 seconds.
status :
gRPC response code.
request_count
GA
(project)
Logging Agent API Request Count
CUMULATIVE , INT64 , 1
aws_ec2_instance
baremetalsolution.googleapis.com/Instance
gae_app
gce_instance
k8s_container
Count of API requests from the Logging agent. Linux only. Sampled every 60 seconds.
response_code :
Numeric response code from both the gRPC and HTTP error spaces.
streamspace_size
GA
(project)
Monitoring Agent Process Labels Size
GAUGE , DOUBLE , By
aws_ec2_instance
baremetalsolution.googleapis.com/Instance
gae_app
gce_instance
k8s_container
Estimated total size of process labels written by the Monitoring agent over a 24-hour window. Linux only. Sampled every 60 seconds.
streamspace_size_throttling
GA
(project)
Monitoring Agent is Throttling Processes
GAUGE , DOUBLE , 1
aws_ec2_instance
baremetalsolution.googleapis.com/Instance
gae_app
gce_instance
k8s_container
Whether the Monitoring agent is currently throttling process metrics. Linux only. Sampled every 60 seconds.
uptime
GA
(project)
Monitoring/Logging Agent Uptime
CUMULATIVE , INT64 , s
aws_ec2_instance
baremetalsolution.googleapis.com/Instance
gae_app
gce_instance
k8s_container
Uptime of Monitoring agent or Logging agent. Linux only. Sampled every 60 seconds.
version :
Agent version.
apache
Metrics from apache .
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with agent.googleapis.com/apache/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
connections
GA
(project)
Open connections
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
The number of active connections currently attached to the HTTP server. Sampled every 60 seconds.
server_name :
The name of the Apache HTTP server.
idle_workers
GA
(project)
Idle workers
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
The number of idle workers currently attached to the HTTP server. Sampled every 60 seconds.
server_name :
The name of the Apache HTTP server.
request_count
GA
(project)
Requests
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
Total requests serviced by the HTTP server. Sampled every 60 seconds.
server_name :
The name of the Apache HTTP server.
scoreboard
GA
(project)
Scoreboard
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
Apache HTTP server scoreboard values. Sampled every 60 seconds.
server_name :
The name of the Apache HTTP server.
state :
The scoreboard state name.
traffic
GA
(project)
Traffic
CUMULATIVE , INT64 , By
aws_ec2_instance
gce_instance
Total HTTP server traffic. Sampled every 60 seconds.
server_name :
The name of the Apache HTTP server.
cassandra
Metrics from cassandra .
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with agent.googleapis.com/cassandra/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
cache/hits
GA
(project)
Hit count
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
Key cache hit count for the table. Sampled every 60 seconds.
cache :
The name of the cache.
client_request/latency/50p
GA
(project)
Read latency
GAUGE , DOUBLE , us
aws_ec2_instance
gce_instance
Latency of standard read requests. Sampled every 60 seconds.
operation :
The storage operation name.
client_request/latency/95p
GA
(project)
Read latency
GAUGE , DOUBLE , us
aws_ec2_instance
gce_instance
Latency of standard read requests. Sampled every 60 seconds.
operation :
The storage operation name.
client_request/latency/99p
GA
(project)
Read latency
GAUGE , DOUBLE , us
aws_ec2_instance
gce_instance
Latency of standard read requests. Sampled every 60 seconds.
operation :
The storage operation name.
client_request/latency/max
GA
(project)
Read latency
GAUGE , DOUBLE , us
aws_ec2_instance
gce_instance
Latency of standard read requests. Sampled every 60 seconds.
operation :
The storage operation name.
column_family/compression_ratio
GA
(project)
Compression ratio
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
Current compression ratio for all SSTables. Sampled every 60 seconds.
column_family/max_row_size
GA
(project)
Max row size
GAUGE , DOUBLE , By
aws_ec2_instance
gce_instance
Size of the largest compacted row. Sampled every 60 seconds.
commitlog_total_size
GA
(project)
Commit log size
GAUGE , DOUBLE , By
aws_ec2_instance
gce_instance
Current data size of all commit log segments. Sampled every 60 seconds.
completed_tasks
GA
(project)
Completed tasks
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
Number of completed tasks in queue. Sampled every 60 seconds.
stage_name :
The name of the queue stage.
current_tasks
GA
(project)
Tasks
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
Number of tasks in queue with the given task status. Sampled every 60 seconds.
stage_name :
The name of the queue stage.
task_status :
The status of the task (pending, active).
dropped_message/dropped_count
GA
(project)
Dropped messages
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
Total number of dropped messages for the mutation. Sampled every 60 seconds.
operation :
The storage operation name.
storage_service_exception_count
GA
(project)
Exceptions
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
The number of exceptions thrown by the storage operations. Sampled every 60 seconds.
storage_service_load
GA
(project)
Storage load
GAUGE , DOUBLE , By
aws_ec2_instance
gce_instance
Total disk space used for this node. Sampled every 60 seconds.
couchdb
Metrics from couchdb .
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with agent.googleapis.com/couchdb/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
average_request_time
GA
(project)
Request latency
GAUGE , DOUBLE , ms
aws_ec2_instance
gce_instance
Average request time. Sampled every 60 seconds.
server_name :
The couchdb server name.
httpd/bulk_request_count
GA
(project)
Bulk requests
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
Bulk requests count. Sampled every 60 seconds.
server_name :
The couchdb server name.
httpd/request_count
GA
(project)
Requests
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
Requests count. Sampled every 60 seconds.
server_name :
The couchdb server name.
httpd/request_method_count
GA
(project)
Request methods
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
HTTP request method count. Sampled every 60 seconds.
server_name :
The couchdb server name.
http_method :
An HTTP request method.
httpd/response_code_count
GA
(project)
Response codes
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
HTTP response status code count. Sampled every 60 seconds.
server_name :
The couchdb server name.
response_code :
An HTTP status code.
httpd/temporary_view_read_count
GA
(project)
Temp view reads
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
Temporary view reads count. Sampled every 60 seconds.
server_name :
The couchdb server name.
httpd/view_read_count
GA
(project)
View reads
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
View reads count. Sampled every 60 seconds.
server_name :
The couchdb server name.
open_databases
GA
(project)
Open databases
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
Number of open databases. Sampled every 60 seconds.
server_name :
The couchdb server name.
open_files
GA
(project)
Open files
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
Number of open files. Sampled every 60 seconds.
server_name :
The couchdb server name.
read_count
GA
(project)
Reads
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
Database read count. Sampled every 60 seconds.
server_name :
The couchdb server name.
write_count
GA
(project)
Writes
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
Database write count. Sampled every 60 seconds.
server_name :
The couchdb server name.
cpu
Metrics from the default configuration for the Ops Agent and the Monitoring agent . Compute Engine also reports similar metrics , but those come from the hypervisor rather than from inside the VM.
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with agent.googleapis.com/cpu/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
load_15m
GA
(project)
CPU load (15m)
GAUGE , DOUBLE , 1
aws_ec2_instance
baremetalsolution.googleapis.com/Instance
gce_instance
Load average over the last 15 minutes. Linux only. Sampled every 60 seconds.
load_1m
GA
(project)
CPU load (1m)
GAUGE , DOUBLE , 1
aws_ec2_instance
baremetalsolution.googleapis.com/Instance
gce_instance
Load average over the last 1 minute. Linux only. Sampled every 60 seconds.
load_5m
GA
(project)
CPU load (5m)
GAUGE , DOUBLE , 1
aws_ec2_instance
baremetalsolution.googleapis.com/Instance
gce_instance
Load average over the last 5 minutes. Linux only. Sampled every 60 seconds.
usage_time
GA
(project)
CPU usage time (OS reported)
CUMULATIVE , INT64 , s{CPU}
aws_ec2_instance
baremetalsolution.googleapis.com/Instance
gce_instance
Total time the CPU spent in different states. This value is reported from inside the VM and can differ from `compute.googleapis.com/instance/cpu/usage_time`, which is reported by the hypervisor for the VM. Linux only. Sampled every 60 seconds.
cpu_number :
CPU number, for example, "0", "1", or "2". This label is only set with certain Monitoring configurations.
cpu_state :
CPU state, one of [idle, interrupt, nice, softirq, steal, system, user, wait].
utilization
GA
(project)
CPU utilization (OS reported)
GAUGE , DOUBLE , %
aws_ec2_instance
baremetalsolution.googleapis.com/Instance
gce_instance
Percentage of the total CPU capacity spent in different states. This value is reported from inside the VM and can differ from `compute.googleapis.com/instance/cpu/utilization`, which is reported by the hypervisor for the VM. Sampled every 60 seconds.
cpu_number :
CPU number, for example, "0", "1", or "2". This label is only set with certain Monitoring configurations. Linux only.
cpu_state :
CPU state, one of [idle, interrupt, nice, softirq, steal, system, user, wait] on Linux, or [idle, interrupt, system, user] from Windows Ops Agent, or [idle, used] from Windows Monitoring agent.
disk
Metrics from the default configuration for the Ops Agent and the Monitoring agent .
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with agent.googleapis.com/disk/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
bytes_used
GA
(project)
Disk bytes used
GAUGE , DOUBLE , By
aws_ec2_instance
baremetalsolution.googleapis.com/Instance
gce_instance
Current number of disk bytes used by state and by partition. Summing the values of all states yields the total available disk space. Linux only. Sampled every 60 seconds.
device :
Device name.
state :
Type of usage, one of [free, used, reserved].
io_time
GA
(project)
Disk I/O time
CUMULATIVE , INT64 , ms
aws_ec2_instance
baremetalsolution.googleapis.com/Instance
gce_instance
Cumulative time spent while I/O operations are in queue and when the disks are busy. The value of this metric increases when there is at least one I/O operation pending or in progress. This value corresponds to Field 10 in the https://www.kernel.org/doc/Documentation/iostats.txt documentation. Linux only. Sampled every 60 seconds.
device :
Device name.
merged_operations
GA
(project)
Disk merged operations
CUMULATIVE , INT64 , 1
aws_ec2_instance
baremetalsolution.googleapis.com/Instance
gce_instance
Total count of merged disk operations by direction. Linux only. Sampled every 60 seconds.
device :
Device name.
direction :
Direction, one of [read, write].
operation_count
GA
(project)
Disk operations
CUMULATIVE , INT64 , 1
aws_ec2_instance
baremetalsolution.googleapis.com/Instance
gce_instance
Total count of disk operations by direction. Linux only. Sampled every 60 seconds.
device :
Device name.
direction :
Direction, one of [read, write].
operation_time
GA
(project)
Disk operation time
CUMULATIVE , INT64 , ms
aws_ec2_instance
baremetalsolution.googleapis.com/Instance
gce_instance
Average time to complete a disk operation multiplied by wall clock time. When aligned as a rate, the value is the average time to complete a disk operation. Linux only. Sampled every 60 seconds.
device :
Device name.
direction :
Direction, one of [read, write].
pending_operations
GA
(project)
Disk pending operations
GAUGE , DOUBLE , 1
aws_ec2_instance
baremetalsolution.googleapis.com/Instance
gce_instance
Current count of pending disk operations. Linux only. Sampled every 60 seconds.
device :
Device name.
percent_used
GA
(project)
Disk utilization
GAUGE , DOUBLE , %
aws_ec2_instance
baremetalsolution.googleapis.com/Instance
gce_instance
Current percentage of the disk used by state and by partition. Represents the specific state value divided by the sum of all states; for example, 'used' represents (used / (free + used + reserved)). This differs from the Unix 'df' command, where 'used' means (used / (free + used)). The utilization is between 0.0 and 100.0. Sampled every 60 seconds.
device :
Device name.
state :
Type of usage, one of [free, used, reserved].
read_bytes_count
GA
(project)
Disk bytes read
CUMULATIVE , INT64 , By
aws_ec2_instance
baremetalsolution.googleapis.com/Instance
gce_instance
Total number of disk bytes that have been read. Linux only. Sampled every 60 seconds.
device :
Device name.
weighted_io_time
GA
(project)
Disk weighted I/O time
CUMULATIVE , INT64 , ms
aws_ec2_instance
baremetalsolution.googleapis.com/Instance
gce_instance
Total time spent on disk I/O operations weighted by the number of in-progress I/Os. This metric provides a measure of the I/O completion time and of the size of the backlog that might be accumulating. Linux only. Sampled every 60 seconds.
device :
Device name.
write_bytes_count
GA
(project)
Disk bytes written
CUMULATIVE , INT64 , By
aws_ec2_instance
baremetalsolution.googleapis.com/Instance
gce_instance
Total number of disk bytes that have been written. Linux only. Sampled every 60 seconds.
device :
Device name.
elasticsearch
Metrics from elasticsearch .
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with agent.googleapis.com/elasticsearch/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
cache_memory_usage
GA
(project)
Cache size
GAUGE , DOUBLE , By
aws_ec2_instance
gce_instance
Size in bytes of the caches. Sampled every 60 seconds.
server_name :
The elasticsearch server name.
cache_name :
Cache name (either 'field' or 'filter').
field_eviction_count
GA
(project)
Field evictions
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
Evictions from field cache. Sampled every 60 seconds.
server_name :
The elasticsearch server name.
filter_cache_eviction_count
GA
(project)
Filter evictions
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
Evictions from filter cache. Sampled every 60 seconds.
server_name :
The elasticsearch server name.
gc_collection_count
GA
(project)
GC count
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
Garbage collection count. Sampled every 60 seconds.
server_name :
The elasticsearch server name.
type :
The type of the garbage collection.
memory_usage
GA
(project)
Memory usage
GAUGE , DOUBLE , By
aws_ec2_instance
gce_instance
Size in bytes of memory. Sampled every 60 seconds.
server_name :
The elasticsearch server name.
memory_type :
The memory type.
network
GA
(project)
Network traffic
CUMULATIVE , INT64 , By
aws_ec2_instance
gce_instance
Number of bytes transmitted and received on the network. Sampled every 60 seconds.
server_name :
The elasticsearch server name.
direction :
Data direction, rx or tx.
num_current_documents
GA
(project)
Documents
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
Number of documents in the indexes on this node. Sampled every 60 seconds.
server_name :
The elasticsearch server name.
document_type :
Document count type.
num_data_nodes
GA
(project)
Data nodes
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
Number of data nodes in the cluster. Sampled every 60 seconds.
server_name :
The elasticsearch server name.
num_http_connections
GA
(project)
Open connections
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
Number of open HTTP connections to this node. Sampled every 60 seconds.
server_name :
The elasticsearch server name.
num_nodes
GA
(project)
Nodes
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
Number of nodes in the cluster. Sampled every 60 seconds.
server_name :
The elasticsearch server name.
num_open_files
GA
(project)
Open files
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
Number of open file descriptors held by the server process. Sampled every 60 seconds.
server_name :
The elasticsearch server name.
num_server_connections
GA
(project)
Open connections
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
Number of open network connections to the server. Sampled every 60 seconds.
server_name :
The elasticsearch server name.
num_shards
GA
(project)
Shards
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
Number of shards. Sampled every 60 seconds.
server_name :
The elasticsearch server name.
shard_type :
State of the shard (active, relocating, initializing, unassigned).
operation_count
GA
(project)
Completed operations
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
Number of operations completed. Sampled every 60 seconds.
server_name :
The elasticsearch server name.
operation :
The operation type.
operation_time
GA
(project)
Operation time
CUMULATIVE , INT64 , ms
aws_ec2_instance
gce_instance
Time in ms spent on operations. Sampled every 60 seconds.
server_name :
The elasticsearch server name.
operation :
The operation type.
peak_threads
GA
(project)
Max threads
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
Maximum number of open threads that have been open concurrently in the server JVM process. Sampled every 60 seconds.
server_name :
The elasticsearch server name.
storage_size
GA
(project)
Storage size
GAUGE , DOUBLE , By
aws_ec2_instance
gce_instance
Size in bytes of the document storage on this node. Sampled every 60 seconds.
server_name :
The elasticsearch server name.
threads
GA
(project)
Threads
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
Number of open threads in the server JVM process. Sampled every 60 seconds.
server_name :
The elasticsearch server name.
hbase
Metrics from hbase .
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with agent.googleapis.com/hbase/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
ipc/connections
GA
(project)
IPC connections
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
The number of open connections. Sampled every 60 seconds.
ipc/queue_length
GA
(project)
IPC queue size
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
The current size of the IPC queue. Sampled every 60 seconds.
ipc/traffic_count
GA
(project)
IPC traffic
CUMULATIVE , INT64 , By
aws_ec2_instance
gce_instance
The number of bytes transmitted and received via IPC. Sampled every 60 seconds.
direction :
Data direction, rx or tx.
master/average_load
GA
(project)
Load
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
The average master load. Sampled every 60 seconds.
master/dead_region_servers
GA
(project)
Dead region servers
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
The number of dead region servers. Sampled every 60 seconds.
master/live_region_servers
GA
(project)
Live region servers
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
The number of live region servers. Sampled every 60 seconds.
regionserver/block_cache/access_count
GA
(project)
Block cache accesses
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
The number of blocks of StoreFiles (HFiles) requested from the cache. Sampled every 60 seconds.
kind :
The cache access kind.
regionserver/block_cache/evicted_blocks_count
GA
(project)
Evicted block count
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
The number of blocks that had to be evicted from the block cache due to heap size constraints. Sampled every 60 seconds.
regionserver/block_cache/hit_ratio_percent
GA
(project)
Block cache hit ratio
GAUGE , DOUBLE , %
aws_ec2_instance
gce_instance
The running block cache hit ratio (0 to 100). Sampled every 60 seconds.
regionserver/block_cache/memory
GA
(project)
Block cache size
GAUGE , DOUBLE , By
aws_ec2_instance
gce_instance
Memory usage by the block cache. Sampled every 60 seconds.
usage_kind :
The kind of memory usage.
regionserver/block_cache/num_items
GA
(project)
Block count
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
The number of blocks of StoreFiles (HFiles) in the cache. Sampled every 60 seconds.
regionserver/call_queue/length
GA
(project)
Call queue size
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
The length of the call queue. Sampled every 60 seconds.
regionserver/compaction_queue/length
GA
(project)
Compaction queue size
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
The length of the compaction queue (the number of stores that have been targeted for compaction). Sampled every 60 seconds.
regionserver/flush_queue/length
GA
(project)
Flush queue size
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
The number of enqueued regions in the MemStore awaiting flush. Sampled every 60 seconds.
regionserver/memory/heap_usage
GA
(project)
Heap usage
GAUGE , DOUBLE , By
aws_ec2_instance
gce_instance
Heap space used by the regionserver. Sampled every 60 seconds.
regionserver/memstore/files
GA
(project)
Memstore files
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
The number of store files on the regionserver. Sampled every 60 seconds.
regionserver/memstore/index_size
GA
(project)
Memstore index size
GAUGE , DOUBLE , By
aws_ec2_instance
gce_instance
The size of the store file index on the regionserver. Sampled every 60 seconds.
regionserver/memstore/open_stores
GA
(project)
Memstore open stores
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
The number of stores open on the regionserver. Sampled every 60 seconds.
regionserver/memstore/size
GA
(project)
Memstore size
GAUGE , DOUBLE , By
aws_ec2_instance
gce_instance
The sum of all the memstore sizes in the regionserver. Sampled every 60 seconds.
regionserver/online_regions
GA
(project)
Online regions
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
The number of active regions in the regionserver. Sampled every 60 seconds.
regionserver/request_count
GA
(project)
Request count
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
The number of requests. Sampled every 60 seconds.
request_type :
The type of request.
regionserver/requests/total_rate
GA
(project)
RPC request rate
GAUGE , DOUBLE , 1/s
aws_ec2_instance
gce_instance
The point-in-time number of RegionServer RPC calls. Sampled every 60 seconds.
type :
The type of request.
regionserver/slow_operation_count
GA
(project)
Slow operations
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
The number of slow log operations. Sampled every 60 seconds.
operation :
The operation name (e.g., get, put).
thrift/batch_latency/average
GA
(project)
Thrift average batch latency
GAUGE , DOUBLE , ns
aws_ec2_instance
gce_instance
Thrift latency for batch operations. Sampled every 60 seconds.
operation :
The operation name (e.g., get, put).
thrift_id :
The id of the thrift instance.
thrift/call_latency/average
GA
(project)
Thrift average call latency
GAUGE , DOUBLE , ns
aws_ec2_instance
gce_instance
Thrift latency for all calls. Sampled every 60 seconds.
thrift_id :
The id of the thrift instance.
thrift/call_queue/length
GA
(project)
Thrift call queue size
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
Thrift call queue length. Sampled every 60 seconds.
thrift_id :
The id of the thrift instance.
thrift/slow_call_latency/average
GA
(project)
Thrift average slow call latency
GAUGE , DOUBLE , ns
aws_ec2_instance
gce_instance
Thrift latency for slow calls. Sampled every 60 seconds.
thrift_id :
The id of the thrift instance.
thrift/time_in_queue/average
GA
(project)
Thrift average time in queue
GAUGE , DOUBLE , ns
aws_ec2_instance
gce_instance
Thrift time spent in queue. Sampled every 60 seconds.
thrift_id :
The id of the thrift instance.
iis
Microsoft Windows only . Metrics from the default configuration for the Microsoft Windows Ops Agent and the Microsoft Windows Monitoring agent .
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with agent.googleapis.com/iis/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
current_connections
GA
(project)
IIS open connections
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
Currently open connections to IIS. Sampled every 60 seconds.
network/transferred_bytes_count
GA
(project)
IIS transferred bytes
CUMULATIVE , INT64 , By
aws_ec2_instance
gce_instance
Network bytes transferred by IIS. Sampled every 60 seconds.
direction :
Direction (sent, received)
new_connection_count
GA
(project)
IIS connections
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
Connections opened to IIS. Sampled every 60 seconds.
request_count
GA
(project)
IIS requests
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
Requests made to IIS. Sampled every 60 seconds.
http_method :
Http method (post, put, get, delete, option, trace, head)
interface
Network-interface metrics from the default configuration for the Ops Agent and the Linux Monitoring agent .
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with agent.googleapis.com/interface/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
errors
GA
(project)
Network errors
CUMULATIVE , INT64 , 1
aws_ec2_instance
baremetalsolution.googleapis.com/Instance
gce_instance
Total count of network errors. Linux only. Sampled every 60 seconds.
device :
Name of the network device.
direction :
Direction of the network traffic, one of [tx, rx].
packets
GA
(project)
Network packets
CUMULATIVE , INT64 , 1
aws_ec2_instance
baremetalsolution.googleapis.com/Instance
gce_instance
Total count of packets sent over the network. Linux only. Sampled every 60 seconds.
device :
Name of the network device.
direction :
Direction of the network traffic, one of [tx, rx].
traffic
GA
(project)
Network traffic
CUMULATIVE , INT64 , By
aws_ec2_instance
baremetalsolution.googleapis.com/Instance
gce_instance
Total number of bytes sent over the network. Linux only. Sampled every 60 seconds.
device :
Name of the network device.
direction :
Direction of the network traffic, one of [tx, rx].
jvm
Metrics from jvm .
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with agent.googleapis.com/jvm/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
gc/count
GA
(project)
GC count
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
The total number of collections that have occurred. Sampled every 60 seconds.
gc_name :
The name of the garbage collector involved.
gc/time
GA
(project)
GC time
CUMULATIVE , INT64 , ms
aws_ec2_instance
gce_instance
The accumulated collection elapsed time in milliseconds. Sampled every 60 seconds.
gc_name :
The name of the garbage collector involved.
memory/usage
GA
(project)
Memory usage
GAUGE , DOUBLE , By
aws_ec2_instance
gce_instance
The memory usage. Sampled every 60 seconds.
memory_type :
The type of the memory.
usage_kind :
The kind of memory usage.
os/cpu_time
GA
(project)
CPU time
CUMULATIVE , INT64 , ns
aws_ec2_instance
gce_instance
The CPU time used by the process on which the Java virtual machine is running. Sampled every 60 seconds.
os/open_files
GA
(project)
Open files
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
The number of open file descriptors. Sampled every 60 seconds.
thread/num_daemon
GA
(project)
Daemon threads
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
The current number of live daemon threads. Sampled every 60 seconds.
thread/num_live
GA
(project)
Threads
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
The current number of live threads. Sampled every 60 seconds.
thread/peak
GA
(project)
Max threads
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
The peak number of live threads. Sampled every 60 seconds.
uptime
GA
(project)
Uptime
CUMULATIVE , INT64 , ms
aws_ec2_instance
gce_instance
The uptime of the Java virtual machine. Sampled every 60 seconds.
kafka
Metrics from kafka .
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with agent.googleapis.com/kafka/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
broker/topics/failed_request_count
GA
(project)
Failed requests
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
The number of failed requests. Sampled every 60 seconds.
request_type :
The type of the request, fetch or produce.
broker/topics/incoming_message_count
GA
(project)
Incoming messages
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
The number of incoming messages in all topics. Sampled every 60 seconds.
broker/topics/traffic
GA
(project)
Traffic
CUMULATIVE , INT64 , By
aws_ec2_instance
gce_instance
The number of bytes sent and received in all topics. Sampled every 60 seconds.
direction :
Data direction, in or out.
controller/kafka/active
GA
(project)
Active controllers
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
The number of active controllers in the cluster. Sampled every 60 seconds.
controller/kafka/offline_partitions
GA
(project)
Offline partitions
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
The number of partitions that don’t have an active leader and are hence not writable or readable. Sampled every 60 seconds.
controller/leader_elections/election_count
GA
(project)
Leader elections
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
The total number of leader elections. Sampled every 60 seconds.
controller/leader_elections/unclean_count
GA
(project)
Stale leader elections
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
The total number of leader elections where the leader is out-of-sync. Sampled every 60 seconds.
log/flush_count
GA
(project)
Flushes
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
The number of log flushes. Sampled every 60 seconds.
network/request_count
GA
(project)
Requests
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
The number of requests. Sampled every 60 seconds.
request_type :
The type of the request, fetch or produce.
purgatory/num_delayed_requests
GA
(project)
Delayed purgatory requests
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
The current number of delayed requests in purgatory. Sampled every 60 seconds.
request_type :
The type of the request, fetch or produce.
purgatory/size
GA
(project)
Purgatory requests
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
The current number of requests in purgatory. Sampled every 60 seconds.
request_type :
The type of the request, fetch or produce.
replica_fetcher/max_lag
GA
(project)
Maximum lag
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
The maximum lag in messages between the follower and leader replicas. Sampled every 60 seconds.
replica_fetcher/min_fetch_rate
GA
(project)
Minimum fetch rate
GAUGE , DOUBLE , 1/s
aws_ec2_instance
gce_instance
The minimum rate at which the follower replicas send fetch requests to the leaders. Sampled every 60 seconds.
replica_manager/isr/expand_count
GA
(project)
Gaining replicas
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
The number of replicas catching up (ISR = in-sync replica). Sampled every 60 seconds.
replica_manager/isr/shrink_count
GA
(project)
Lagging replicas
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
The number of replicas lagging behind (ISR = in-sync replica). Sampled every 60 seconds.
replica_manager/leaders
GA
(project)
Leaders
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
The current number of leaders on this broker. Sampled every 60 seconds.
replica_manager/partitions
GA
(project)
Partitions
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
The current number of partitions on this broker. Sampled every 60 seconds.
replica_manager/under_replicated_partitions
GA
(project)
Unreliable partitions
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
The current number of under-replicated partitions. Sampled every 60 seconds.
memcached
Metrics from memcached .
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with agent.googleapis.com/memcached/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
command_count
GA
(project)
Commands
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
Commands executed. Sampled every 60 seconds.
cache_name :
The memcache name.
command :
A memcached command name.
current_connections
GA
(project)
Connections
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
Number of current connections to the cache. Sampled every 60 seconds.
cache_name :
The memcache name.
current_items
GA
(project)
Items
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
Number of items currently stored in the cache. Sampled every 60 seconds.
cache_name :
The memcache name.
eviction_count
GA
(project)
Evictions
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
Cache item evictions. Sampled every 60 seconds.
cache_name :
The memcache name.
memory
GA
(project)
Memory usage
GAUGE , DOUBLE , By
aws_ec2_instance
gce_instance
Memory usage. Sampled every 60 seconds.
cache_name :
The memcache name.
mem_category :
Memory free or memory used.
network
GA
(project)
Traffic
CUMULATIVE , INT64 , By
aws_ec2_instance
gce_instance
Bytes transferred over the network. Sampled every 60 seconds.
cache_name :
The memcache name.
direction :
Data direction, rx or tx.
operation_count
GA
(project)
Operations
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
Memcached operation hit/miss counts. Sampled every 60 seconds.
cache_name :
The memcache name.
operation :
A memcached operation name (either 'incr', 'decr', or 'get').
type :
A memcached operation statistic (either 'hits' or 'misses')
operation_hitratio
GA
(project)
Hit ratio
GAUGE , DOUBLE , %
aws_ec2_instance
gce_instance
Hit ratio for memcached operations, expressed as a percentage value between 0.0 and 100.0. Sampled every 60 seconds.
cache_name :
The memcache name.
operation :
A memcached operation name (either 'incr', 'decr', or 'get').
rusage
GA
(project)
CPU time
CUMULATIVE , INT64 , s{CPU}
aws_ec2_instance
gce_instance
Accumulated user and system time. Sampled every 60 seconds.
cache_name :
The memcache name.
usage_type :
System utilization (either 'user' or 'syst').
threads
GA
(project)
Threads
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
Number of threads used by the memcached instance. Sampled every 60 seconds.
cache_name :
The memcache name.
memory
Metrics from the default configuration for the Ops Agent and the Monitoring agent .
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with agent.googleapis.com/memory/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
bytes_used
GA
(project)
Memory usage
GAUGE , DOUBLE , By
aws_ec2_instance
baremetalsolution.googleapis.com/Instance
gce_instance
Current memory usage by memory state. Summing the values of all states yields the total memory on the machine. Linux only. Sampled every 60 seconds.
state :
One of [buffered, cached, free, slab, used].
percent_used
GA
(project)
Memory utilization
GAUGE , DOUBLE , %
aws_ec2_instance
baremetalsolution.googleapis.com/Instance
gce_instance
Current percentage of memory used by memory state. Summing percentages over all states yields 100 percent. Sampled every 60 seconds.
state :
One of [buffered, cached, free, slab, used].
mongodb
Metrics from mongodb .
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with agent.googleapis.com/mongodb/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
cache/hits
GA
(project)
Cache hits
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
The number of cache hits. Sampled every 60 seconds.
cache/misses
GA
(project)
Cache misses
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
The number of cache misses. Sampled every 60 seconds.
collections
GA
(project)
Collections
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
The number of collections. Sampled every 60 seconds.
database_name :
The name of the MongoDB database.
connections
GA
(project)
Connections
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
The number of active server connections. Sampled every 60 seconds.
database_name :
The name of the MongoDB server.
data_size
GA
(project)
Data size
GAUGE , DOUBLE , By
aws_ec2_instance
gce_instance
The data size, in bytes. Sampled every 60 seconds.
database_name :
The name of the MongoDB database.
extents
GA
(project)
Extents
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
The number of extents. Sampled every 60 seconds.
database_name :
The name of the MongoDB database.
global_lock_hold_time
GA
(project)
Global lock time
CUMULATIVE , INT64 , ms
aws_ec2_instance
gce_instance
The time the global lock has been held. Sampled every 60 seconds.
index_size
GA
(project)
Index size
GAUGE , DOUBLE , By
aws_ec2_instance
gce_instance
The index size, in bytes. Sampled every 60 seconds.
database_name :
The name of the MongoDB database.
indexes
GA
(project)
Indexes
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
The number of indexes. Sampled every 60 seconds.
database_name :
The name of the MongoDB database.
memory_usage
GA
(project)
Memory usage
GAUGE , DOUBLE , MiBy
aws_ec2_instance
gce_instance
Mebibytes of memory used. Sampled every 60 seconds.
database_name :
The name of the MongoDB server.
memory_type :
Memory usage (mapped, resident, virtual).
objects
GA
(project)
Objects
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
The number of objects. Sampled every 60 seconds.
database_name :
The name of the MongoDB database.
operation_count
GA
(project)
Operations
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
The number of operations executed. Sampled every 60 seconds.
operation :
A database operation name.
storage_size
GA
(project)
Storage size
GAUGE , DOUBLE , By
aws_ec2_instance
gce_instance
The storage size, in bytes. Sampled every 60 seconds.
database_name :
The name of the MongoDB database.
mssql
Microsoft Windows only . Metrics from the default configuration for the Microsoft Windows Ops Agent and the Microsoft Windows Monitoring agent .
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with agent.googleapis.com/mssql/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
connections/user
GA
(project)
SQL Server open connections
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
Currently open connections to SQL server. Sampled every 60 seconds.
transaction_rate
GA
(project)
SQL Server transaction rate
GAUGE , DOUBLE , 1/s
aws_ec2_instance
gce_instance
SQL server total transactions per second. Sampled every 60 seconds.
write_transaction_rate
GA
(project)
SQL Server write transaction rate
GAUGE , DOUBLE , 1/s
aws_ec2_instance
gce_instance
SQL server write transactions per second. Sampled every 60 seconds.
mysql
Metrics from mysql .
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with agent.googleapis.com/mysql/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
buffer_pool/num_pages
GA
(project)
Buffer pool pages
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
Buffer pool page count. Sampled every 60 seconds.
database :
The name of the database.
kind :
The buffer pool page kind.
buffer_pool/operation_count
GA
(project)
Buffer pool operations
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
Buffer pool operation count. Sampled every 60 seconds.
database :
The name of the database.
operation :
The buffer pool operation.
buffer_pool_size
GA
(project)
Buffer pool size
GAUGE , DOUBLE , By
aws_ec2_instance
gce_instance
Buffer pool size. Sampled every 60 seconds.
database :
The name of the database.
kind :
Buffer pool bytes kind.
command_count
GA
(project)
Commands
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
MySQL command count. Sampled every 60 seconds.
database :
The name of the database.
command :
MySQL command.
handler_count
GA
(project)
Handlers
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
MySQL handler count. Sampled every 60 seconds.
database :
The name of the database.
kind :
MySQL handler kind.
innodb/doublewrite_count
GA
(project)
InnoDB doublewrite buffers
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
InnoDB doublewrite buffer count. Sampled every 60 seconds.
database :
The name of the database.
kind :
TODO.
innodb/log_operation_count
GA
(project)
InnoDB log operations
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
InnoDB log operation count. Sampled every 60 seconds.
database :
The name of the database.
operation :
InnoDB log operation.
innodb/operation_count
GA
(project)
InnoDB operations
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
InnoDB operation count. Sampled every 60 seconds.
database :
The name of the database.
operation :
InnoDB operation.
innodb/page_operation_count
GA
(project)
InnoDB page operations
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
InnoDB page operation count. Sampled every 60 seconds.
database :
The name of the database.
operation :
InnoDB page operation.
innodb/row_lock_count
GA
(project)
InnoDB locks
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
InnoDB row lock count. Sampled every 60 seconds.
database :
The name of the database.
kind :
InnoDB row lock kind.
innodb/row_operation_count
GA
(project)
InnoDB row operations
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
InnoDB row operation count. Sampled every 60 seconds.
database :
The name of the database.
operation :
InnoDB row operation.
lock_count
GA
(project)
Locks
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
MySQL lock count. Sampled every 60 seconds.
database :
The name of the database.
kind :
MySQL lock kind.
qcache/operation_count
GA
(project)
QCache operations
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
QCache operation count. Sampled every 60 seconds.
database :
The name of the database.
operation :
QCache operation.
qcache/query_count
GA
(project)
QCache queries
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
QCache query count. Sampled every 60 seconds.
database :
The name of the database.
slave_replication_lag
GA
(project)
Replica lag
GAUGE , DOUBLE , s
aws_ec2_instance
gce_instance
Seconds behind master. Sampled every 60 seconds.
database :
The name of the database.
sort_count
GA
(project)
Sorts
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
MySQL sort count. Sampled every 60 seconds.
database :
The name of the database.
kind :
MySQL sort kind.
thread_count
GA
(project)
Threads
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
Thread count. Sampled every 60 seconds.
database :
The name of the database.
kind :
Thread kind.
network
Metrics from the default configuration for the Ops Agent and the Monitoring agent .
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with agent.googleapis.com/network/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
tcp_connections
GA
(project)
TCP connections
GAUGE , DOUBLE , 1
aws_ec2_instance
baremetalsolution.googleapis.com/Instance
gce_instance
Current count of TCP connections. Sampled every 60 seconds.
port :
TCP port number on the local or remote host, for example, "0-local", "0-remote", or "all".
tcp_state :
TCP state, for example, "ESTABLISHED" or "FIN_WAIT1".
nginx
Metrics from nginx .
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with agent.googleapis.com/nginx/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
connections/accepted_count
GA
(project)
Accepted connections
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
Total connections accepted. Sampled every 60 seconds.
connections/current
GA
(project)
Active connections
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
The number of connections currently attached to Nginx. Sampled every 60 seconds.
state :
The Nginx connection state.
connections/handled_count
GA
(project)
Handled connections
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
Total connections handled. Sampled every 60 seconds.
request_count
GA
(project)
Requests
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
The number of requests Nginx has serviced. Sampled every 60 seconds.
pagefile
Metrics from the default configuration for the Ops Agent and the Microsoft Windows Monitoring agent .
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with agent.googleapis.com/pagefile/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
percent_used
GA
(project)
Pagefile utilization
GAUGE , DOUBLE , %
aws_ec2_instance
baremetalsolution.googleapis.com/Instance
gce_instance
Current percentage of pagefile used by state. Values are between 0.0 and 100.0. Windows only. Sampled every 60 seconds.
state :
Type of usage, one of [free, used].
postgresql
Metrics from postgresql .
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with agent.googleapis.com/postgresql/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
blocks_read_count
GA
(project)
Blocks read
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
Number of blocks read. Sampled every 60 seconds.
database :
The name of the database.
source :
The block read source.
table :
The name of the table.
commit_count
GA
(project)
Commits
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
Number of commits. Sampled every 60 seconds.
database :
The name of the database.
db_size
GA
(project)
DB size
GAUGE , DOUBLE , By
aws_ec2_instance
gce_instance
Database disk usage. Sampled every 60 seconds.
database :
The name of the database.
num_backends
GA
(project)
Backends
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
Number of backends. Sampled every 60 seconds.
database :
The name of the database.
num_tuples
GA
(project)
DB rows
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
Number of tuples (rows) in the database. Sampled every 60 seconds.
database :
The name of the database.
state :
Tuple (row) state (either 'dead' or 'live').
table :
The name of the table.
operation_count
GA
(project)
Operations
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
Number of db row operations. Sampled every 60 seconds.
database :
The name of the database.
operation :
The database operation.
table :
The name of the table.
rollback_count
GA
(project)
Rollbacks
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
Number of rollbacks. Sampled every 60 seconds.
database :
The name of the database.
processes
Metrics from the default configuration for the Ops Agent and the Monitoring agent .
Launch stages of these metrics:
ALPHA
GA
The "metric type" strings in this table must be prefixed
with agent.googleapis.com/processes/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
count_by_state
GA
(project)
Processes
GAUGE , DOUBLE , 1
aws_ec2_instance
baremetalsolution.googleapis.com/Instance
gce_instance
Count of processes in the given state. Linux only. Sampled every 60 seconds.
state :
Running, sleeping, zombie, etc.
cpu_time
GA
(project)
Process CPU
CUMULATIVE , INT64 , us{CPU}
aws_ec2_instance
baremetalsolution.googleapis.com/Instance
gce_instance
CPU time of the given process. Sampled every 60 seconds.
process :
Process name.
user_or_syst :
Whether a user or system process.
command :
Process command.
command_line :
Process command line, 1024 characters maximum.
owner :
Process owner.
pid :
Process ID.
disk/read_bytes_count
GA
(project)
Process disk read I/O
CUMULATIVE , INT64 , By
aws_ec2_instance
baremetalsolution.googleapis.com/Instance
gce_instance
Process disk read I/O. Linux only. Sampled every 60 seconds.
process :
Process name.
command :
Process command.
command_line :
Process command line, 1024 characters maximum.
owner :
Process owner.
pid :
Process ID.
disk/write_bytes_count
GA
(project)
Process disk write I/O
CUMULATIVE , INT64 , By
aws_ec2_instance
baremetalsolution.googleapis.com/Instance
gce_instance
Process disk write I/O. Linux only. Sampled every 60 seconds.
process :
Process name.
command :
Process command.
command_line :
Process command line, 1024 characters maximum.
owner :
Process owner.
pid :
Process ID.
fork_count
GA
(project)
Fork count
CUMULATIVE , INT64 , 1
aws_ec2_instance
baremetalsolution.googleapis.com/Instance
gce_instance
Total number of processes forked. Linux only. Sampled every 60 seconds.
rss_usage
GA
(project)
Process resident memory
GAUGE , DOUBLE , By
aws_ec2_instance
baremetalsolution.googleapis.com/Instance
gce_instance
Resident memory usage of the given process. Linux only. Sampled every 60 seconds.
process :
Process name.
command :
Process command.
command_line :
Process command line, 1024 characters maximum.
owner :
Process owner.
pid :
Process ID.
vm_usage
GA
(project)
Process virtual memory
GAUGE , DOUBLE , By
aws_ec2_instance
baremetalsolution.googleapis.com/Instance
gce_instance
VM Usage of the given process. Sampled every 60 seconds.
process :
Process name.
command :
Process command.
command_line :
Process command line, 1024 characters maximum.
owner :
Process owner.
pid :
Process ID.
windows/handles
ALPHA
(project)
Process open handles (Windows)
GAUGE , INT64 , 1
aws_ec2_instance
baremetalsolution.googleapis.com/Instance
gce_instance
Open handle count of the given process. Windows only. Sampled every 60 seconds.
process :
Process name.
command :
Process command.
command_line :
Process command line, 1024 characters maximum.
owner :
Process owner.
pid :
Process ID.
rabbitmq
Metrics from rabbitmq .
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with agent.googleapis.com/rabbitmq/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
consumers
GA
(project)
Consumers
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
The number of consumers reading from the specified queue. Sampled every 60 seconds.
queue :
The rabbit queue name.
delivery_rate
GA
(project)
Delivery rate
GAUGE , DOUBLE , 1/s
aws_ec2_instance
gce_instance
The rate (per second) at which messages are being delivered. Sampled every 60 seconds.
queue :
The rabbit queue name.
num_messages
GA
(project)
Messages
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
The number of messages in a queue. Sampled every 60 seconds.
queue :
The rabbit queue name.
state :
The message state.
publish_rate
GA
(project)
Publish rate
GAUGE , DOUBLE , 1/s
aws_ec2_instance
gce_instance
The rate (per second) at which messages are being published. Sampled every 60 seconds.
queue :
The rabbit queue name.
redis
Metrics from redis .
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with agent.googleapis.com/redis/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
changes_since_last_save
GA
(project)
Unsaved changes
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
Change count since last save. Sampled every 60 seconds.
node :
Redis node name.
clients/blocked
GA
(project)
Blocked clients
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
Number of blocked clients. Sampled every 60 seconds.
node :
Redis node name.
clients/connected
GA
(project)
Connected clients
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
Number of client connections. Sampled every 60 seconds.
node :
Redis node name.
commands_processed
GA
(project)
Commands
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
The total number of commands processed. Sampled every 60 seconds.
node :
Redis node name.
connections/slaves
GA
(project)
Slave connections
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
Number of slave connections. Sampled every 60 seconds.
node :
Redis node name.
connections/total
GA
(project)
Connections
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
The total number of connections accepted. Sampled every 60 seconds.
node :
Redis node name.
expired_keys
GA
(project)
Expired keys
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
The total number of key expirations. Sampled every 60 seconds.
node :
Redis node name.
memory/usage
GA
(project)
Memory usage
GAUGE , DOUBLE , By
aws_ec2_instance
gce_instance
Memory usage in bytes. Sampled every 60 seconds.
node :
Redis node name.
memory/usage_lua
GA
(project)
Lua memory usage
GAUGE , DOUBLE , By
aws_ec2_instance
gce_instance
Lua memory usage in bytes. Sampled every 60 seconds.
node :
Redis node name.
pubsub/channels
GA
(project)
PubSub channels
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
Number of global pub/sub channels with subscribed clients. Sampled every 60 seconds.
node :
Redis node name.
pubsub/patterns
GA
(project)
PubSub patterns
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
Number of global pub/sub patterns with subscribed clients. Sampled every 60 seconds.
node :
Redis node name.
uptime
GA
(project)
Uptime
GAUGE , DOUBLE , s
aws_ec2_instance
gce_instance
Uptime in seconds. Sampled every 60 seconds.
node :
Redis node name.
riak
Metrics from riak .
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with agent.googleapis.com/riak/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
latency/95th_percentile
GA
(project)
95% latency (1m)
GAUGE , DOUBLE , us
aws_ec2_instance
gce_instance
Time between reception of client read request and subsequent response to client (95th percentile). Sampled every 60 seconds.
server_name :
The riak server name.
type :
An operation type with latency statistics (either 'get' or 'put').
latency/average
GA
(project)
Average latency (1m)
GAUGE , DOUBLE , us
aws_ec2_instance
gce_instance
Time between reception of client read request and subsequent response to client (mean). Sampled every 60 seconds.
server_name :
The riak server name.
type :
An operation type with latency statistics (either 'get' or 'put').
latency/maximum
GA
(project)
Maximum latency (1m)
GAUGE , DOUBLE , us
aws_ec2_instance
gce_instance
Time between reception of client read request and subsequent response to client (maximum). Sampled every 60 seconds.
server_name :
The riak server name.
type :
An operation type with latency statistics (either 'get' or 'put').
memory_usage
GA
(project)
Memory usage
GAUGE , DOUBLE , By
aws_ec2_instance
gce_instance
Memory usage. Sampled every 60 seconds.
server_name :
The riak server name.
memory_type :
Memory usage type.
num_siblings/95th_percentile
GA
(project)
95% siblings (1m)
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
Number of siblings encountered during all GET operations by this node within the last minute (95th percentile). Sampled every 60 seconds.
server_name :
The riak server name.
num_siblings/average
GA
(project)
Average siblings (1m)
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
Number of siblings encountered during all GET operations by this node within the last minute (mean). Sampled every 60 seconds.
server_name :
The riak server name.
num_siblings/maximum
GA
(project)
Maximum siblings (1m)
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
Number of siblings encountered during all GET operations by this node within the last minute (maximum). Sampled every 60 seconds.
server_name :
The riak server name.
object_size/95th_percentile
GA
(project)
95% object size (1m)
GAUGE , DOUBLE , By
aws_ec2_instance
gce_instance
Size of objects encountered by this node within the last minute (95th percentile). Sampled every 60 seconds.
server_name :
The riak server name.
object_size/average
GA
(project)
Average object size (1m)
GAUGE , DOUBLE , By
aws_ec2_instance
gce_instance
Size of objects encountered by this node within the last minute (mean). Sampled every 60 seconds.
server_name :
The riak server name.
object_size/maximum
GA
(project)
Maximum object size (1m)
GAUGE , DOUBLE , By
aws_ec2_instance
gce_instance
Size of objects encountered by this node within the last minute (maximum). Sampled every 60 seconds.
server_name :
The riak server name.
operation_count
GA
(project)
Operations
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
Coordinated operation count. Sampled every 60 seconds.
server_name :
The riak server name.
operation :
An operation name.
swap
Metrics from the default configuration for the Ops Agent and the Linux Monitoring agent .
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with agent.googleapis.com/swap/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
bytes_used
GA
(project)
Swap usage
GAUGE , DOUBLE , By
aws_ec2_instance
baremetalsolution.googleapis.com/Instance
gce_instance
Current number of swap bytes used by state. For this metric to be available, swap must be enabled on the instance. Linux only. Sampled every 60 seconds.
device :
Swap device.
state :
One of [used, free, cached, reserved].
io
GA
(project)
Swap I/O operations
CUMULATIVE , INT64 , 1
aws_ec2_instance
baremetalsolution.googleapis.com/Instance
gce_instance
Total count of swap I/O operations by direction. For this metric to be available, swap must be enabled on the instance. Linux only. Sampled every 60 seconds.
direction :
Swap I/O direction, one of [in, out].
percent_used
GA
(project)
Swap utilization
GAUGE , DOUBLE , %
aws_ec2_instance
baremetalsolution.googleapis.com/Instance
gce_instance
Current percentage of swap used by state. Values are between 0.0 and 100.0. For this metric to be available, swap must be enabled on the instance. Linux only. Sampled every 60 seconds.
device :
Swap device.
state :
One of [used, free, cached, reserved].
tomcat
Metrics from tomcat .
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with agent.googleapis.com/tomcat/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
manager/sessions
GA
(project)
Sessions
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
The number of active sessions. Sampled every 60 seconds.
url_prefix :
The URL prefix for a given session.
request_processor/error_count
GA
(project)
Errors
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
The number of errors encountered. Sampled every 60 seconds.
proto_handler :
The protocol handler label.
request_processor/processing_time
GA
(project)
Processing time
CUMULATIVE , INT64 , ms
aws_ec2_instance
gce_instance
The total processing time. Sampled every 60 seconds.
proto_handler :
The protocol handler label.
request_processor/request_count
GA
(project)
Requests
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
The total number of requests. Sampled every 60 seconds.
proto_handler :
The protocol handler label.
request_processor/traffic_count
GA
(project)
Traffic
CUMULATIVE , INT64 , By
aws_ec2_instance
gce_instance
The number of bytes transmitted and received. Sampled every 60 seconds.
proto_handler :
The protocol handler label.
direction :
Data direction, rx or tx.
threads/busy
GA
(project)
Busy threads
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
The current number of busy threads. Sampled every 60 seconds.
proto_handler :
The protocol handler label.
threads/current
GA
(project)
Current threads
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
The current number of threads. Sampled every 60 seconds.
proto_handler :
The protocol handler label.
varnish
Metrics from varnish .
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with agent.googleapis.com/varnish/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
backend_connection_count
GA
(project)
Backend connection successes
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
Backend connection success count. Sampled every 60 seconds.
cache_name :
The Varnish cache name suffixed with a metric category.
type :
The backend connection type (either 'failures', 'not-attempted', 'recycled', 'reuses', 'success', 'too-many', 'unused', or 'was-closed').
category :
The Varnish metric category.
cache_operation_count
GA
(project)
Cache operations
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
Cache operation count. Sampled every 60 seconds.
cache_name :
The Varnish cache name suffixed with a metric category.
operation :
The cache operation type (either 'hit', 'miss', or 'hitpass').
category :
The Varnish metric category.
client_connection_count
GA
(project)
Client connections
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
Client connection count. Sampled every 60 seconds.
cache_name :
The Varnish cache name suffixed with a metric category.
category :
The Varnish metric category.
type :
The client connection type (either 'accepted', 'dropped', or 'received').
zookeeper
Metrics from zookeeper .
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with agent.googleapis.com/zookeeper/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
connections_count
GA
(project)
Open connections
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
Number of connections currently alive. Sampled every 60 seconds.
data_size
GA
(project)
Data size
GAUGE , DOUBLE , By
aws_ec2_instance
gce_instance
Bytes of data on this ZooKeeper server. Sampled every 60 seconds.
followers/count
GA
(project)
Followers
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
Number of followers. Sampled every 60 seconds.
followers/synced_count
GA
(project)
Synced followers
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
Number of synchronized followers. Sampled every 60 seconds.
network/received_packets_count
GA
(project)
Packets received
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
Packets received. Sampled every 60 seconds.
network/sent_packets_count
GA
(project)
Packets sent
CUMULATIVE , INT64 , 1
aws_ec2_instance
gce_instance
Packets sent. Sampled every 60 seconds.
nodes/count
GA
(project)
Nodes
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
ZooKeeper node count. Sampled every 60 seconds.
nodes/ephemeral_count
GA
(project)
Ephemeral nodes
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
Number of ephemeral nodes. Sampled every 60 seconds.
nodes/watches_count
GA
(project)
Watches
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
Number of watches on ZooKeeper nodes. Sampled every 60 seconds.
requests/latency/average
GA
(project)
Average request latency
GAUGE , DOUBLE , ms
aws_ec2_instance
gce_instance
Average request latency. Sampled every 60 seconds.
requests/latency/maximum
GA
(project)
Maximum request latency
GAUGE , DOUBLE , ms
aws_ec2_instance
gce_instance
Maximum request latency. Sampled every 60 seconds.
requests/latency/minimum
GA
(project)
Minimum request latency
GAUGE , DOUBLE , ms
aws_ec2_instance
gce_instance
Minimum request latency. Sampled every 60 seconds.
requests/outstanding_count
GA
(project)
Outstanding requests
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
Number of outstanding requests. Sampled every 60 seconds.
sync_operations/pending_count
GA
(project)
Pending syncs
GAUGE , DOUBLE , 1
aws_ec2_instance
gce_instance
Number of pending synchronization operations. Sampled every 60 seconds.
Generated at 2026-04-10 19:48:34 UTC.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
