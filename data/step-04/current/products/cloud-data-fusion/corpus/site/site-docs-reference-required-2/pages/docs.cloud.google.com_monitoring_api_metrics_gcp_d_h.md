---
title: "Google Cloud metrics: D through H \_|\_ Cloud Monitoring \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/monitoring/api/metrics_gcp_d_h
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/monitoring/api/resources
source_metadata:
  url: https://docs.cloud.google.com/monitoring/api/metrics_gcp_d_h
  title: "Google Cloud metrics: D through H \_|\_ Cloud Monitoring \_|\_ Google Cloud\
    \ Documentation"
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
Google Cloud metrics: D through H
Stay organized with collections
Save and categorize content based on your preferences.
This document lists the metric types defined by
Google Cloud services when the service name begins with the
letter d through h . For example, this page lists all metric types whose
prefix is dns.googleapis.com . For information about other
metric types, see Google Cloud metrics overview .
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
For pricing information, see Google Cloud Observability pricing .
For information about the meaning of launch stages such as
GA (General Availability) and BETA (Preview), see
Product launch stages .
Cloud Endpoints : APIs managed by Cloud Endpoints write
serviceruntime metrics against the
api
monitored-resource type.
Note: To monitor the availability of a service, create an uptime check.
These checks create
monitoring.googleapis.com/uptime_check/check_passed
metric data. Don't configure an alerting
policy to track a metric type such as compute.googleapis.com/instance/uptime
if your goal is to monitor the availability of a service.
For information about why such alerting policies might not function
as you expect, see
Uptime policy doesn't create expected alerts .
For information about how to create an uptime check, see
Managing uptime checks .
Google Cloud metrics
Metrics from Google Cloud .
The following list was last generated at 2026-04-10 19:48:34 UTC.
For more information about this process, see
About the lists .
databasecenter
Metrics from Database Center .
Launch stages of these metrics:
BETA
The "metric type" strings in this table must be prefixed
with databasecenter.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
resource/new_resource_count
BETA
(project)
New database resources
CUMULATIVE , INT64 , 1
databasecenter.googleapis.com/Resource
Number of new database resources.
product :
Type of product.
engine :
Type of engine.
version :
Version of the product.
resource/new_signal_count
BETA
(project)
New database signals
CUMULATIVE , INT64 , 1
databasecenter.googleapis.com/Resource
Number of signals generated for resources.
issue_type :
Type of signal.
dataflow
Metrics from Dataflow . For more information about Dataflow monitoring, see Monitoring Dataflow pipelines and Dataflow monitoring interface .
Launch stages of these metrics:
ALPHA
BETA
GA
The "metric type" strings in this table must be prefixed
with dataflow.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
job/active_worker_instances
BETA
(project)
Active Worker Instances
GAUGE , INT64 , 1
dataflow_job
The active number of worker instances. Streaming engine jobs only.
job_id :
The job id of the associated dataflow job.
job/aggregated_worker_utilization
BETA
(project)
Aggregated Worker Utilization
GAUGE , DOUBLE , 10^2.%
dataflow_job
Aggregated worker utilization (e.g. worker CPU utilization) across the worker pool.
job_id :
The job id of the associated dataflow job.
job/backlog_bytes
GA
(project)
Per-stage backlog in bytes
GAUGE , INT64 , By
dataflow_job
Amount of known, unprocessed input for a stage, in bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
job_id :
The ID of the current run of this pipeline.
stage :
The stage of the pipeline.
job/backlog_elements
GA
(project)
Per-stage backlog in elements
GAUGE , INT64 , 1
dataflow_job
Amount of known, unprocessed input for a stage, in elements. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
job_id :
The ID of the current run of this pipeline.
stage :
The stage of the pipeline.
job/backlogged_keys
BETA
(project)
Backlogged Keys
GAUGE , INT64 , 1
dataflow_job
The number of backlogged keys for a bottleneck stage. If a stage has backlogged keys, then it signifies its inability to process data at the required rate and the stage could be a bottleneck that slows down the overall job's progress.
job_id :
The job id of the associated Dataflow job.
stage :
The stage of the pipeline.
job/bigquery/write_count
BETA
(project)
BigQueryIO.Write Requests
DELTA , INT64 , 1
dataflow_job
BigQuery write requests from BigQueryIO.Write in Dataflow jobs. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
status :
The canonical response code. See: https://cloud.google.com/apis/design/errors#handling_errors.
job_id :
The job id of the associated Dataflow job.
ptransform :
The pipeline PTransform making the requests.
bigquery_project_id :
The project of the associated BigQuery table, view or query.
bigquery_dataset_id :
The BigQuery dataset of the associated BigQuery table or view.
bigquery_table_or_view_id :
The BigQuery table or view id.
job/billable_shuffle_data_processed
GA
(project)
Billable shuffle data processed
GAUGE , INT64 , By
dataflow_job
The billable bytes of shuffle data processed by this Dataflow job. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
job_id :
The ID of the current run of this pipeline.
job/bundle_user_processing_latencies
GA
(project)
Bundle user processing latencies
GAUGE , DISTRIBUTION , ms
dataflow_job
Bundle user processing latencies from a particular stage. Available for jobs running on Streaming Engine. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
job_id :
The job id of the associated Dataflow job.
stage :
The stage of the pipeline.
job/current_num_vcpus
GA
(project)
Current number of vCPUs in use
GAUGE , INT64 , 1
dataflow_job
The number of vCPUs currently being used by this Dataflow job. This is the current number of workers times the number of vCPUs per worker. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
job_id :
The ID of the current run of this pipeline.
job/current_shuffle_slots
GA
(project)
Current shuffle slots in use
GAUGE , INT64 , 1
dataflow_job
The current shuffle slots used by this Dataflow job. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
job_id :
The ID of the current run of this pipeline.
job/data_watermark_age
GA
(project)
Data watermark lag
GAUGE , INT64 , s
dataflow_job
The age (time since event timestamp) up to which all data has been processed by the pipeline. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
job_id :
The ID of the current run of this pipeline.
job/disk_space_capacity
GA
(project)
Disk Space Capacity
GAUGE , INT64 , By
dataflow_job
The amount of persistent disk currently being allocated to all workers associated with this Dataflow job. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
job_id :
The ID of the current run of this pipeline.
storage_type :
The type of persistent disk: one of [HDD, SSD].
job/dofn_latency_average
GA
(project)
Average message processing time per DoFn.
GAUGE , DOUBLE , ms
dataflow_job
The average processing time for a single message in a given DoFn (over the past 3 min window). Note that this includes time spent in GetData calls. Available for jobs running on Streaming Engine on the Legacy Runner. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
job_id :
The job id of the associated Dataflow job.
do_fn :
The user defined DoFn name.
job/dofn_latency_max
GA
(project)
Maximum message processing time per DoFn.
GAUGE , INT64 , ms
dataflow_job
The maximum processing time for a single message in a given DoFn (over the past 3 min window). Note that this includes time spent in GetData calls. Available for jobs running on Streaming Engine on the Legacy Runner. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
job_id :
The job id of the associated Dataflow job.
do_fn :
The user defined DoFn name.
job/dofn_latency_min
GA
(project)
Minimum message processing time per DoFn.
GAUGE , INT64 , ms
dataflow_job
The minimum processing time for a single message in a given DoFn (over the past 3 min window). Available for jobs running on Streaming Engine on the Legacy Runner. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
job_id :
The job id of the associated Dataflow job.
do_fn :
The user defined DoFn name.
job/dofn_latency_num_messages
GA
(project)
Number of messages processed per DoFn.
GAUGE , INT64 , 1
dataflow_job
The number of messages processed by a given DoFn (over the past 3 min window). Available for jobs running on Streaming Engine on the Legacy Runner. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
job_id :
The job id of the associated Dataflow job.
do_fn :
The user defined DoFn name.
job/dofn_latency_total
GA
(project)
Total message processing time per DoFn.
GAUGE , INT64 , ms
dataflow_job
The total processing time for all messages in a given DoFn (over the past 3 min window). Note that this includes time spent in GetData calls. Available for jobs running on Streaming Engine on the Legacy Runner. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
job_id :
The job id of the associated Dataflow job.
do_fn :
The user defined DoFn name.
job/duplicates_filtered_out_count
GA
(project)
Duplicate message count per stage
DELTA , INT64 , 1
dataflow_job
The number of messages being processed by a particular stage that have been filtered out as duplicates. Available for jobs running on Streaming Engine. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
job_id :
The job id of the associated Dataflow job.
stage :
The stage of the pipeline.
job/elapsed_time
GA
(project)
Elapsed time
GAUGE , INT64 , s
dataflow_job
Duration that the current run of this pipeline has been in the Running state so far, in seconds. When a run completes, this stays at the duration of that run until the next run starts. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
job_id :
The ID of the current run of this pipeline.
job/element_count
GA
(project)
Element count
GAUGE , INT64 , 1
dataflow_job
Number of elements added to the pcollection so far. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
job_id :
The ID of the current run of this pipeline.
pcollection :
The pipeline pcollection reporting this element count. PCollections are usually named by appending .out to the producing transform name.
job/elements_produced_count
ALPHA
(project)
Elements Produced
DELTA , INT64 , 1
dataflow_job
The number of elements produced by each PTransform. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
job_id :
The ID of the current run of this pipeline.
pcollection :
The pipeline PCollection to which the elements were produced.
ptransform :
The pipeline PTransform producing the elements.
job/estimated_backlog_processing_time
BETA
(project)
Estimated time to process current backlog per stage
GAUGE , INT64 , s
dataflow_job
Estimated time (in seconds) to consume current backlog if no new data comes in and throughput stays the same. Only available for Streaming Engine jobs.
job_id :
The ID of the current run of this pipeline.
stage :
The stage of the pipeline.
job/estimated_byte_count
GA
(project)
Estimated byte count
GAUGE , INT64 , By
dataflow_job
An estimated number of bytes added to the pcollection so far. Dataflow calculates the average encoded size of elements in a pcollection and mutiplies it by the number of elements. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
job_id :
The ID of the current run of this pipeline.
pcollection :
The pipeline pcollection reporting this estimated byte count. PCollections are usually named by appending .out to the producing transform name.
job/estimated_bytes_active
GA
(project)
Active Size
GAUGE , INT64 , By
dataflow_job
Estimated number of bytes active in this stage of the job.
job_id :
The ID of the current run of this pipeline.
stage :
The stage of the pipeline.
job/estimated_bytes_consumed_count
GA
(project)
Throughput
DELTA , INT64 , By
dataflow_job
Estimated number of bytes consumed by the stage of this job.
job_id :
The ID of the current run of this pipeline.
stage :
The stage of the pipeline.
job/estimated_bytes_produced_count
GA
(project)
Estimated Bytes Produced
DELTA , INT64 , 1
dataflow_job
The estimated total byte size of elements produced by each PTransform. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
job_id :
The ID of the current run of this pipeline.
pcollection :
The pipeline PCollection to which the elements were produced.
ptransform :
The pipeline PTransform producing the elements.
job/estimated_timer_backlog_processing_time
BETA
(project)
Estimated time (in seconds) for timers to complete.
GAUGE , INT64 , s
dataflow_job
Estimated time (in seconds) for timers to complete. Only available for Streaming Engine jobs.
job_id :
The ID of the current run of this pipeline.
stage :
The stage of the pipeline.
job/gpu_memory_utilization
BETA
(project)
GPU memory utilization
GAUGE , INT64 , %
dataflow_job
Percent of time over the past sample period during which global (device) memory was being read or written.
job_id :
The ID of the current run of this pipeline.
job/gpu_utilization
BETA
(project)
GPU utilization
GAUGE , INT64 , %
dataflow_job
Percent of time over the past sample period during which one or more kernels was executing on the GPU.
job_id :
The ID of the current run of this pipeline.
job/horizontal_worker_scaling
BETA
(project)
Horizontal Worker Scaling
GAUGE , BOOL ,
dataflow_job
A boolean value that indicates what kind of horizontal scaling direction which the autoscaler recommended and rationale behind it. A true metric output means a scaling decision is made and a false metric output means the corresponding scaling is not taking effect.
job_id :
The job id of the associated dataflow job.
rationale :
Horizontal worker scaling rationale: one of [Waiting for the signals to stabilize, Hit non-resource related limit, Low backlog and high worker utilization, High worker utilization, Low worker utilization, High backlog]
direction :
Horizontal worker scaling direction: one of [Upscale number of workers, Downscale number of workers, No change in scaling and signals are not stable, No change in scaling and signals are stable]
job/is_bottleneck
BETA
(project)
Bottleneck Status and Likely Causes
GAUGE , BOOL ,
dataflow_job
Whether a specific Dataflow pipeline stage is a bottleneck, along with its bottleneck kind and likely cause. See the troubleshooting guide https://cloud.google.com/dataflow/docs/guides/troubleshoot-bottlenecks for more details.
job_id :
The job id of the associated Dataflow job.
stage :
The stage of the pipeline.
likely_cause :
The most probable reason for the stage being identified as a bottleneck.
bottleneck_kind :
The kind of bottleneck the stage is experiencing.
job/is_failed
GA
(project)
Failed
GAUGE , INT64 , 1
dataflow_job
A value of 1 indicates that the job has failed. This metric isn't recorded for jobs that fail before launch. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
job/longest_processing_time
BETA
(project)
Longest Processing Times
GAUGE , INT64 , us
dataflow_job
Top 10 oldest active operation times grouped by user worker. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
job_id :
The job id of the associated Dataflow job.
user_worker_id :
The id of the user worker of the associated dataflow job.
job/max_worker_instances_limit
GA
(project)
Autoscaling worker instances ceiling
GAUGE , INT64 , 1
dataflow_job
The maximum number of workers autoscaling is allowed to request.
job_id :
The job id of the associated dataflow job.
job/memory_capacity
GA
(project)
Memory Capacity
GAUGE , INT64 , By
dataflow_job
The amount of memory currently being allocated to all workers associated with this Dataflow job. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
job_id :
The ID of the current run of this pipeline.
job/min_worker_instances_limit
GA
(project)
Autoscaling worker instances flooring
GAUGE , INT64 , 1
dataflow_job
The minimum number of workers autoscaling is allowed to request.
job_id :
The job id of the associated dataflow job.
job/oldest_active_message_age
GA
(project)
Oldest active message processing time per DoFn.
GAUGE , INT64 , ms
dataflow_job
How long the oldest active message in a DoFn has been processing for. Available for jobs running on Streaming Engine on the Legacy Runner. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
job_id :
The job id of the associated Dataflow job.
do_fn :
The user defined DoFn name.
job/per_stage_data_watermark_age
GA
(project)
Per-stage data watermark lag
GAUGE , INT64 , s
dataflow_job
The age (time since event timestamp) up to which all data has been processed by this stage of the pipeline. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
job_id :
The ID of the current run of this pipeline.
stage :
The stage of the pipeline.
job/per_stage_system_lag
GA
(project)
Per-stage system lag
GAUGE , INT64 , s
dataflow_job
The current maximum duration that an item of data has been processing or awaiting processing in seconds, per pipeline stage. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
job_id :
The ID of the current run of this pipeline.
stage :
The stage of the pipeline.
job/processing_parallelism_keys
GA
(project)
The approximate number of parallel processing keys
GAUGE , INT64 , 1
dataflow_job
Approximate number of keys in use for data processing for each stage. Processing for any given key is serialized, so the total number of keys for a stage represents the maximum available parallelism at that stage. Available for jobs running on Streaming Engine. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
job_id :
The job id of the associated Dataflow job.
stage :
The stage of the pipeline.
job/pubsub/late_messages_count
GA
(project)
Pub/Sub Late Messages Count
DELTA , INT64 , 1
dataflow_job
The number of messages from Pub/Sub with timestamp older than the estimated watermark. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
job_id :
The job id of the associated dataflow job.
stage :
The computation stage consuming from Pub/Sub.
subscription_project_id :
The project of the associated Pub/Sub subscription.
subscription_id :
The id of the associated Pub/Sub subscription.
topic_project_id :
The project of the associated Pub/Sub topic.
topic_id :
The id of the associated Pub/Sub topic.
job/pubsub/published_messages_count
GA
(project)
Pub/Sub Published Messages Count
DELTA , INT64 , 1
dataflow_job
The number of Pub/Sub messages published broken down by topic and status. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
job_id :
The job id of the associated dataflow job.
stage :
The computation stage consuming from Pub/Sub.
topic_project_id :
The project of the associated Pub/Sub topic.
topic_id :
The id of the associated Pub/Sub topic.
status :
Status code string that indicates the result of the message, one of [OK, DROPPED].
job/pubsub/pulled_message_ages
GA
(project)
Pub/Sub Pulled Message Ages
GAUGE , DISTRIBUTION , ms
dataflow_job
The distribution of pulled but unacked Pub/Sub message ages. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
job_id :
The job id of the associated dataflow job.
stage :
The computation stage consuming from pubsub.
subscription_project_id :
The project of the associated Pub/Sub subscription.
subscription_id :
The id of the associated Pub/Sub subscription.
topic_project_id :
The project of the associated Pub/Sub topic.
topic_id :
The id of the associated Pub/Sub topic.
job/pubsub/read_count
GA
(project)
PubsubIO.Read requests from Dataflow jobs
DELTA , INT64 , 1
dataflow_job
Pub/Sub Pull Requests. For Streaming Engine, this metric is deprecated. See the "Using the Dataflow monitoring interface" page for upcoming changes. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
status :
The canonical response code. See: https://cloud.google.com/apis/design/errors#handling_errors.
job_id :
The job id of the associated Dataflow job.
ptransform :
The pipeline PTransform making the requests.
subscription_project_id :
The project of the associated Pub/Sub subscription.
subscription_id :
The id of the associated Pub/Sub subscription.
topic_project_id :
The project of the associated Pub/Sub topic.
topic_id :
The id of the associated Pub/Sub topic.
job/pubsub/read_latencies
BETA
(project)
Pub/Sub Pull Request Latencies
DELTA , DISTRIBUTION , ms
dataflow_job
Pub/Sub Pull request latencies from PubsubIO.Read in Dataflow jobs. For Streaming Engine, this metric is deprecated. See the "Using the Dataflow monitoring interface" page for upcoming changes. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
job_id :
The job id of the associated Dataflow job.
ptransform :
The pipeline PTransform making the requests.
subscription_project_id :
The project of the associated Pub/Sub subscription.
subscription_id :
The id of the associated Pub/Sub subscription.
topic_project_id :
The project of the associated Pub/Sub topic.
topic_id :
The id of the associated Pub/Sub topic.
job/pubsub/streaming_pull_connection_status
GA
(project)
Percentage of active/terminated Streaming Pull connections
GAUGE , DOUBLE , %
dataflow_job
Percentage of all Streaming Pull connections that are either active (OK status) or terminated because of an error (non-OK status). When a connection is terminated, Dataflow will wait some time before attempting to re-connect. For Streaming Engine only. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
status :
The canonical response code for the error. See: https://cloud.google.com/apis/design/errors#handling_errors.
job_id :
The job id of the associated dataflow job.
ptransform :
The pipeline PTransform making the requests.
subscription_project_id :
The project of the associated Pub/Sub subscription.
subscription_id :
The id of the associated Pub/Sub subscription.
topic_project_id :
The project of the associated Pub/Sub topic.
topic_id :
The id of the associated Pub/Sub topic.
job/pubsub/timestamp_events
BETA
(project)
Pub/Sub Event Timestamp Status
DELTA , INT64 , 1
dataflow_job
The number of Pub/Sub messages with event timestamps broken down by topic and status. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
job_id :
The job id of the associated dataflow job.
stage :
The computation stage consuming from Pub/Sub.
topic_project_id :
The project of the associated Pub/Sub topic.
topic_id :
The id of the associated Pub/Sub topic.
status :
Status code string that indicates the result of parsing the event timestamp.
job/pubsub/write_count
GA
(project)
Pub/Sub Publish Requests
DELTA , INT64 , 1
dataflow_job
Pub/Sub Publish requests from PubsubIO.Write in Dataflow jobs. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
status :
The canonical response code. See: https://cloud.google.com/apis/design/errors#handling_errors.
job_id :
The job id of the associated Dataflow job.
ptransform :
The pipeline PTransform making the requests.
topic_project_id :
The project of the associated Pub/Sub topic.
topic_id :
The id of the associated Pub/Sub topic.
job/pubsub/write_latencies
GA
(project)
Pub/Sub Publish Request Latencies
DELTA , DISTRIBUTION , ms
dataflow_job
Pub/Sub Publish request latencies from PubsubIO.Write in Dataflow jobs. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
job_id :
The job id of the associated Dataflow job.
ptransform :
The pipeline PTransform making the requests.
topic_project_id :
The project of the associated Pub/Sub topic.
topic_id :
The id of the associated Pub/Sub topic.
job/recommended_parallelism
BETA
(project)
Recommended Parallelism
GAUGE , INT64 , 1
dataflow_job
The recommended parallelism for a stage to reduce bottlenecking. If this is a source stage, then the parallelism is a consequence of source partition count and the source may need to be repartitioned to increase parallelism.
job_id :
The job id of the associated Dataflow job.
stage :
The stage of the pipeline.
job/status
GA
(project)
Status
GAUGE , STRING ,
dataflow_job
Current state of this pipeline (e.g.: RUNNING, DONE, CANCELLED, FAILED, ...). Not reported while the pipeline is not running. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
job_id :
The ID of the current run of this pipeline.
job/streaming_engine/key_processing_availability
GA
(project)
Current processing key-range availability
GAUGE , DOUBLE , 10^2.%
dataflow_job
Percentage of streaming processing keys that are assigned to workers and available to perform work. Work for unavailable keys will be deferred until keys are available.
job_id :
The job id of the associated Dataflow job.
stage :
The stage of the pipeline.
job/streaming_engine/persistent_state/read_bytes_count
GA
(project)
Storage bytes read
DELTA , INT64 , 1
dataflow_job
Storage bytes read by a particular stage. Available for jobs running on Streaming Engine. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
job_id :
The job id of the associated Dataflow job.
stage :
The stage of the pipeline.
job/streaming_engine/persistent_state/stored_bytes
GA
(project)
Current persistence state usage
GAUGE , INT64 , By
dataflow_job
Current bytes stored in persistent state for the job.
job_id :
The job id of the associated Dataflow job.
job/streaming_engine/persistent_state/write_bytes_count
GA
(project)
Storage bytes written
DELTA , INT64 , 1
dataflow_job
Storage bytes written by a particular stage. Available for jobs running on Streaming Engine. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
job_id :
The job id of the associated Dataflow job.
stage :
The stage of the pipeline.
job/streaming_engine/persistent_state/write_latencies
GA
(project)
Storage write latencies
DELTA , DISTRIBUTION , ms
dataflow_job
Storage write latencies from a particular stage. Available for jobs running on Streaming Engine. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
job_id :
The job id of the associated Dataflow job.
stage :
The stage of the pipeline.
job/streaming_engine/stage_end_to_end_latencies
GA
(project)
Per stage end to end latencies.
GAUGE , DISTRIBUTION , ms
dataflow_job
Distribution of time spent by streaming engine in each stage of the pipeline. This time includes shuffling messages, queueing them for processing, processing, queueing for persistent state write, and the write itself. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
job_id :
The job id of the associated Dataflow job, for example, 2023-01-01-_01_02_03-45678987654.
stage :
The stage of the pipeline, for example, F0.
job/system_lag
GA
(project)
System lag
GAUGE , INT64 , s
dataflow_job
The current maximum duration that an item of data has been processing or awaiting processing, in seconds. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
job_id :
The ID of the current run of this pipeline.
job/target_worker_instances
GA
(project)
Target Worker Instances
GAUGE , INT64 , 1
dataflow_job
The desired number of worker instances.
job_id :
The job id of the associated dataflow job.
job/thread_time
BETA
(project)
Thread Time
DELTA , INT64 , ms
dataflow_job
Estimated time in milliseconds spent running in the function of the ptransform totaled across threads on all workers of the job. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
job_id :
The ID of the current run of this pipeline.
ptransform :
The pipeline PTransform running the function.
function :
The function name, one of [start_bundle, process_element, process_timers, split_source, finish_bundle].
job/timers_pending_count
GA
(project)
Timers pending count per stage
DELTA , INT64 , 1
dataflow_job
The number of timers pending in a particular stage. Available for jobs running on Streaming Engine. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
job_id :
The job id of the associated Dataflow job.
stage :
The stage of the pipeline.
job/timers_processed_count
GA
(project)
Timers processed count per stage
DELTA , INT64 , 1
dataflow_job
The number of timers completed by a particular stage. Available for jobs running on Streaming Engine. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
job_id :
The job id of the associated Dataflow job.
stage :
The stage of the pipeline.
job/total_dcu_usage
GA
(project)
Total DCU usage
CUMULATIVE , DOUBLE , {dcu}
dataflow_job
The total amount of DCUs (Data Compute Unit) used by the Dataflow job since it was launched.
job_id :
The job id of the associated Dataflow job, for example, 2023-04-05_19_41_09-14297402485873831817.
job/total_memory_usage_time
GA
(project)
Total memory usage time
GAUGE , INT64 , GBy.s
dataflow_job
The total GB seconds of memory allocated to this Dataflow job. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
job_id :
The ID of the current run of this pipeline.
job/total_pd_usage_time
GA
(project)
Total PD usage time
GAUGE , INT64 , GBy.s
dataflow_job
The total GB seconds for all persistent disk used by all workers associated with this Dataflow job. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
job_id :
The ID of the current run of this pipeline.
storage_type :
The type of persistent disk: HDD, SSD.
job/total_secu_usage
BETA
(project)
Total SECU usage
GAUGE , DOUBLE , {secu}
dataflow_job
The total amount of SECUs (Streaming Engine Compute Unit) used by the Dataflow job since it was launched. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
job_id :
The job id of the associated Dataflow job, for example, 2023-04-05_19_41_09-14297402485873831817.
job/total_shuffle_data_processed
GA
(project)
Total shuffle data processed
GAUGE , INT64 , By
dataflow_job
The total bytes of shuffle data processed by this Dataflow job. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
job_id :
The ID of the current run of this pipeline.
job/total_streaming_data_processed
GA
(project)
Total streaming data processed
GAUGE , INT64 , By
dataflow_job
The total bytes of streaming data processed by this Dataflow job. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
job_id :
The ID of the current run of this pipeline.
job/total_vcpu_time
GA
(project)
Total vCPU time
GAUGE , INT64 , s
dataflow_job
The total vCPU seconds used by this Dataflow job. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
job_id :
The ID of the current run of this pipeline.
job/user_counter
GA
(project)
User Counter
GAUGE , DOUBLE , 1
dataflow_job
A user-defined counter metric. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
metric_name :
The name provided by the user for this counter.
job_id :
The ID of the current run of this pipeline.
ptransform :
The pipeline PTransform reporting this counter value.
job/worker_utilization_hint
BETA
(project)
Worker Utilization Hint
GAUGE , DOUBLE , %
dataflow_job
Worker utilization hint for autoscaling. This hint value is configured by the customers and defines a target worker CPU utilization range thus influencing scaling aggressiveness.
job_id :
The job id of the associated dataflow job.
job/worker_utilization_hint_is_actively_used
BETA
(project)
Worker Utilization Hint Is Actively Used
GAUGE , BOOL ,
dataflow_job
Reports whether or not the worker utilization hint is actively used by the horizontal autoscaling policy.
job_id :
The job id of the associated dataflow job.
quota/region_endpoint_shuffle_slot/exceeded
GA
(project)
Shuffle slots per region per endpoint quota exceeded error
DELTA , INT64 , 1
dataflow.googleapis.com/Project
Number of attempts to exceed the limit on quota metric dataflow.googleapis.com/region_endpoint_shuffle_slot. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
endpoint :
The shuffle endpoint.
quota/region_endpoint_shuffle_slot/limit
GA
(project)
Shuffle slots per region per endpoint quota limit
GAUGE , INT64 , 1
dataflow.googleapis.com/Project
Current limit on quota metric dataflow.googleapis.com/region_endpoint_shuffle_slot. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
endpoint :
The shuffle endpoint.
quota/region_endpoint_shuffle_slot/usage
GA
(project)
Shuffle slots per region per endpoint quota usage
GAUGE , INT64 , 1
dataflow.googleapis.com/Project
Current usage on quota metric dataflow.googleapis.com/region_endpoint_shuffle_slot. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
endpoint :
The shuffle endpoint.
worker/accelerator/gpu/clock/device_memory_current
BETA
(project)
GPU Current Memory Clock Frequency
GAUGE , INT64 , MHz
dataflow_worker
The current frequency of the memory clock.
device_uuid :
The unique identifier of the GPU.
device_number :
(INT64)
The zero-indexed number of the GPU relative to other GPUs on the machine.
device_model :
The model name of the GPU.
worker/accelerator/gpu/clock/device_memory_max
BETA
(project)
GPU Max Memory Clock Frequency
GAUGE , INT64 , MHz
dataflow_worker
The max frequency of the memory clock.
device_uuid :
The unique identifier of the GPU.
device_number :
(INT64)
The zero-indexed number of the GPU relative to other GPUs on the machine.
device_model :
The model name of the GPU.
worker/accelerator/gpu/clock/device_sm_current
BETA
(project)
GPU Current SM Clock Frequency
GAUGE , INT64 , MHz
dataflow_worker
The current frequency of the SM clock.
device_uuid :
The unique identifier of the GPU.
device_number :
(INT64)
The zero-indexed number of the GPU relative to other GPUs on the machine.
device_model :
The model name of the GPU.
worker/accelerator/gpu/clock/device_sm_max
BETA
(project)
GPU Max SM Clock Frequency
GAUGE , INT64 , MHz
dataflow_worker
The max frequency of the SM clock.
device_uuid :
The unique identifier of the GPU.
device_number :
(INT64)
The zero-indexed number of the GPU relative to other GPUs on the machine.
device_model :
The model name of the GPU.
worker/accelerator/gpu/memory/device_limit
BETA
(project)
GPU Total Memory
GAUGE , INT64 , MiB
dataflow_worker
Total available memory on the device.
device_uuid :
The unique identifier of the GPU.
device_number :
(INT64)
The zero-indexed number of the GPU relative to other GPUs on the machine.
device_model :
The model name of the GPU.
worker/accelerator/gpu/memory/device_usage
BETA
(project)
GPU Memory Usage
GAUGE , INT64 , MiB
dataflow_worker
Memory in use on the device, including reserved memory.
device_uuid :
The unique identifier of the GPU.
device_number :
(INT64)
The zero-indexed number of the GPU relative to other GPUs on the machine.
device_model :
The model name of the GPU.
worker/accelerator/gpu/nvlink/device_read
BETA
(project)
GPU NVLink Rx
GAUGE , INT64 , MiB/s
dataflow_worker
The rate that data is read by the device from other GPUs on the host.
device_uuid :
The unique identifier of the GPU.
device_number :
(INT64)
The zero-indexed number of the GPU relative to other GPUs on the machine.
device_model :
The model name of the GPU.
worker/accelerator/gpu/nvlink/device_transfer
BETA
(project)
GPU NVLink Tx
GAUGE , INT64 , MiB/s
dataflow_worker
The rate that data is transferred from the device to other GPUs on the host.
device_uuid :
The unique identifier of the GPU.
device_number :
(INT64)
The zero-indexed number of the GPU relative to other GPUs on the machine.
device_model :
The model name of the GPU.
worker/accelerator/gpu/pcie/device_read
BETA
(project)
GPU PCIe Rx
GAUGE , INT64 , MiB/s
dataflow_worker
The rate that data is read by the device from the host over PCIe.
device_uuid :
The unique identifier of the GPU.
device_number :
(INT64)
The zero-indexed number of the GPU relative to other GPUs on the machine.
device_model :
The model name of the GPU.
worker/accelerator/gpu/pcie/device_transfer
BETA
(project)
GPU PCIe Tx
GAUGE , INT64 , MiB/s
dataflow_worker
The rate that data is transmitted from the device to the host over PCIe.
device_uuid :
The unique identifier of the GPU.
device_number :
(INT64)
The zero-indexed number of the GPU relative to other GPUs on the machine.
device_model :
The model name of the GPU.
worker/accelerator/gpu/power/device_limit
BETA
(project)
GPU Power Limit
GAUGE , DOUBLE , W
dataflow_worker
The power limit of the device.
device_uuid :
The unique identifier of the GPU.
device_number :
(INT64)
The zero-indexed number of the GPU relative to other GPUs on the machine.
device_model :
The model name of the GPU.
worker/accelerator/gpu/power/device_usage
BETA
(project)
GPU Power Usage
GAUGE , DOUBLE , W
dataflow_worker
The current power draw of the device.
device_uuid :
The unique identifier of the GPU.
device_number :
(INT64)
The zero-indexed number of the GPU relative to other GPUs on the machine.
device_model :
The model name of the GPU.
worker/accelerator/gpu/temperature/device_current
BETA
(project)
GPU Current Temperature
GAUGE , INT64 , C
dataflow_worker
The current temperature of the device.
device_uuid :
The unique identifier of the GPU.
device_number :
(INT64)
The zero-indexed number of the GPU relative to other GPUs on the machine.
device_model :
The model name of the GPU.
worker/accelerator/gpu/temperature/device_max_op
BETA
(project)
GPU Max Operating Temperature
GAUGE , INT64 , C
dataflow_worker
The max operating temperature of the GPU, above which the GPU will try to cool itself to below this temperature.
device_uuid :
The unique identifier of the GPU.
device_number :
(INT64)
The zero-indexed number of the GPU relative to other GPUs on the machine.
device_model :
The model name of the GPU.
worker/accelerator/gpu/temperature/device_shutdown
BETA
(project)
GPU Shutdown Temperature
GAUGE , INT64 , C
dataflow_worker
The temperature at which the GPU will shut down.
device_uuid :
The unique identifier of the GPU.
device_number :
(INT64)
The zero-indexed number of the GPU relative to other GPUs on the machine.
device_model :
The model name of the GPU.
worker/accelerator/gpu/temperature/device_slowdown
BETA
(project)
GPU Slowdown Temperature
GAUGE , INT64 , C
dataflow_worker
The temperature at which the GPU will start throttling.
device_uuid :
The unique identifier of the GPU.
device_number :
(INT64)
The zero-indexed number of the GPU relative to other GPUs on the machine.
device_model :
The model name of the GPU.
worker/accelerator/gpu/utilization/device_fp16_pipe_activity
BETA
(project)
GPU FP16 Pipe Activity
GAUGE , INT64 , %
dataflow_worker
Percent of time that the FP16 Pipe was active on the device.
device_uuid :
The unique identifier of the GPU.
device_number :
(INT64)
The zero-indexed number of the GPU relative to other GPUs on the machine.
device_model :
The model name of the GPU.
worker/accelerator/gpu/utilization/device_fp32_pipe_activity
BETA
(project)
GPU FP32 Pipe Activity
GAUGE , INT64 , %
dataflow_worker
Percent of time that the FP32 Pipe was active on the device.
device_uuid :
The unique identifier of the GPU.
device_number :
(INT64)
The zero-indexed number of the GPU relative to other GPUs on the machine.
device_model :
The model name of the GPU.
worker/accelerator/gpu/utilization/device_fp64_pipe_activity
BETA
(project)
GPU FP64 Pipe Activity
GAUGE , INT64 , %
dataflow_worker
Percent of time that the FP64 Pipe was active on the device.
device_uuid :
The unique identifier of the GPU.
device_number :
(INT64)
The zero-indexed number of the GPU relative to other GPUs on the machine.
device_model :
The model name of the GPU.
worker/accelerator/gpu/utilization/device_kernel_runtime
BETA
(project)
GPU Kernel Running Percentage
GAUGE , INT64 , %
dataflow_worker
Percent of time over the last sample period during which at least one kernel was executing on the GPU.
device_uuid :
The unique identifier of the GPU.
device_number :
(INT64)
The zero-indexed number of the GPU relative to other GPUs on the machine.
device_model :
The model name of the GPU.
worker/accelerator/gpu/utilization/device_memory_access
BETA
(project)
GPU Device Memory Access Percentage
GAUGE , INT64 , %
dataflow_worker
Percent of time over the last sample period during which global device memory was being read or written.
device_uuid :
The unique identifier of the GPU.
device_number :
(INT64)
The zero-indexed number of the GPU relative to other GPUs on the machine.
device_model :
The model name of the GPU.
worker/accelerator/gpu/utilization/device_sm_activity
BETA
(project)
GPU SM Activity
GAUGE , INT64 , %
dataflow_worker
Percent of time a warp was active on an SM averaged across all SMs on the device.
device_uuid :
The unique identifier of the GPU.
device_number :
(INT64)
The zero-indexed number of the GPU relative to other GPUs on the machine.
device_model :
The model name of the GPU.
worker/accelerator/gpu/utilization/device_sm_occupancy
BETA
(project)
GPU SM Occupancy
GAUGE , INT64 , %
dataflow_worker
Percent of the active warps on the device relative to the max.
device_uuid :
The unique identifier of the GPU.
device_number :
(INT64)
The zero-indexed number of the GPU relative to other GPUs on the machine.
device_model :
The model name of the GPU.
worker/accelerator/gpu/utilization/device_tensor_pipe_activity
BETA
(project)
GPU Tensor Pipe Activity
GAUGE , INT64 , %
dataflow_worker
Percent of time that the Tensor Pipe was active on the device.
device_uuid :
The unique identifier of the GPU.
device_number :
(INT64)
The zero-indexed number of the GPU relative to other GPUs on the machine.
device_model :
The model name of the GPU.
worker/memory/bytes_used
GA
(project)
Container memory used
GAUGE , INT64 , By
dataflow_worker
The memory usage in bytes by a particular container instance on a Dataflow worker.
container :
Container instance name, such as "java-streaming" or "harness".
worker/memory/container_limit
GA
(project)
Container memory limit
GAUGE , INT64 , By
dataflow_worker
Maximum RAM size in bytes available to a particular container instance on a Dataflow worker.
container :
Container instance name, such as "java-streaming" or "harness".
worker/memory/total_limit
GA
(project)
Worker memory limit
GAUGE , INT64 , By
dataflow_worker
RAM size in bytes available to a Dataflow worker.
worker/time_per_active_work_item_state
BETA
(project)
Time Per Active Work Item State
GAUGE , DISTRIBUTION , ms
dataflow_worker
The distributions of time spent in each state of the active work item. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
job_id :
The job id of the associated Dataflow job.
state :
The state of the associated distribution for the active work item.
stage :
The stage of the associated distribution for the active work item.
datafusion
Metrics from Cloud Data Fusion .
Launch stages of these metrics:
BETA
The "metric type" strings in this table must be prefixed
with datafusion.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
instance/v2/api_request_count
BETA
(project)
CDAP REST API Requests Received
CUMULATIVE , INT64 , {request}
datafusion.googleapis.com/InstanceV2
Cumulative count of REST API requests received by a service in the backend. Sampled every 120 seconds.
service :
The name of the service receiving the request.
handler :
The name of the handler handling the request.
method :
The name of the method that is called within the handler.
enable_rbac :
Whether role-based access control is enabled for the instance.
private_service_connect_enabled :
Whether private service connect is enabled for the instance.
instance/v2/api_response_count
BETA
(project)
CDAP REST API Responses
CUMULATIVE , INT64 , {request}
datafusion.googleapis.com/InstanceV2
Cumulative count of REST API responses sent by a service in the backend. Sampled every 120 seconds.
service :
The name of the service serving the request.
handler :
The name of the handler handling the request.
method :
The name of the method that is called within the handler.
response_code :
The response code generated from the request.
enable_rbac :
Whether role-based access control is enabled for the instance.
private_service_connect_enabled :
Whether private service connect is enabled for the instance.
instance/v2/authorization_check_count
BETA
(project)
Authorization Check Count
CUMULATIVE , INT64 , 1
datafusion.googleapis.com/InstanceV2
Cumulative count of authorization checks made by the access enforcer. Sampled every 120 seconds.
enable_rbac :
Whether role-based access control is enabled for the instance.
type :
Type of authorization check performed.
private_service_connect_enabled :
Whether private service connect is enabled for the instance.
instance/v2/authorization_check_time
BETA
(project)
Authorization Check Time
GAUGE , INT64 , ms
datafusion.googleapis.com/InstanceV2
Latency of authorization checks made by the access enforcer. Sampled every 120 seconds.
enable_rbac :
Whether role-based access control is enabled for the instance.
type :
Type of authorization check performed.
private_service_connect_enabled :
Whether private service connect is enabled for the instance.
instance/v2/concurrent_pipelines_launched
BETA
(project)
Concurrent Pipeline Launches Count
GAUGE , INT64 , 1
datafusion.googleapis.com/InstanceV2
Count of pipelines in provisioning/starting state. Sampled every 120 seconds.
enable_rbac :
Whether role-based access control is enabled for the instance.
private_service_connect_enabled :
Whether private service connect is enabled for the instance.
instance/v2/concurrent_pipelines_running
BETA
(project)
Concurrent Pipelines Running Count
GAUGE , INT64 , 1
datafusion.googleapis.com/InstanceV2
Count of concurrent pipelines running. Sampled every 120 seconds.
enable_rbac :
Whether role-based access control is enabled for the instance.
private_service_connect_enabled :
Whether private service connect is enabled for the instance.
instance/v2/draft_pipelines
BETA
(project)
Draft pipeline count
GAUGE , INT64 , 1
datafusion.googleapis.com/InstanceV2
Number of draft pipelines. Sampled every 120 seconds.
enable_rbac :
Whether role-based access control is enabled for the instance.
private_service_connect_enabled :
Whether private service connect is enabled for the instance.
instance/v2/namespaces
BETA
(project)
Namespace count
GAUGE , INT64 , 1
datafusion.googleapis.com/InstanceV2
Number of namespaces. Sampled every 120 seconds.
enable_rbac :
Whether role-based access control is enabled for the instance.
private_service_connect_enabled :
Whether private service connect is enabled for the instance.
instance/v2/pipelines
BETA
(project)
Deployed pipeline count
GAUGE , INT64 , 1
datafusion.googleapis.com/InstanceV2
Number of deployed pipelines. Sampled every 120 seconds.
enable_rbac :
Whether role-based access control is enabled for the instance.
private_service_connect_enabled :
Whether private service connect is enabled for the instance.
maintenance_window_enabled :
Whether maintenance window is enabled for the instance.
instance/v2/service_available
BETA
(project)
Service status
GAUGE , BOOL , 1
datafusion.googleapis.com/InstanceV2
CDAP service availability. Sampled every 120 seconds.
service :
The name of the service.
enable_rbac :
Whether role-based access control is enabled for the instance.
private_service_connect_enabled :
Whether private service connect is enabled for the instance.
instance/v3/api_request_count
BETA
(project)
CDAP REST API Requests Received
CUMULATIVE , INT64 , {request}
datafusion.googleapis.com/InstanceV3
Cumulative count of REST API requests received by a service in the backend. Sampled every 120 seconds.
service :
The name of the service receiving the request.
handler :
The name of the handler handling the request.
method :
The name of the method that is called within the handler.
enable_rbac :
Whether role-based access control is enabled for the instance.
private_service_connect_enabled :
Whether private service connect is enabled for the instance.
instance/v3/api_response_count
BETA
(project)
CDAP REST API Responses
CUMULATIVE , INT64 , {request}
datafusion.googleapis.com/InstanceV3
Cumulative count of REST API responses sent by a service in the backend. Sampled every 120 seconds.
service :
The name of the service serving the request.
handler :
The name of the handler handling the request.
method :
The name of the method that is called within the handler.
response_code :
The response code generated from the request.
enable_rbac :
Whether role-based access control is enabled for the instance.
private_service_connect_enabled :
Whether private service connect is enabled for the instance.
instance/v3/authorization_check_count
BETA
(project)
Authorization Check Count
CUMULATIVE , INT64 , 1
datafusion.googleapis.com/InstanceV3
Count of authorization checks made by the access enforcer. Sampled every 120 seconds.
enable_rbac :
Whether role-based access control is enabled for the instance.
type :
Type of authorization check performed.
private_service_connect_enabled :
Whether private service connect is enabled for the instance.
instance/v3/authorization_check_time
BETA
(project)
Authorization Check Time
GAUGE , INT64 , ms
datafusion.googleapis.com/InstanceV3
Latency of authorization checks made by the access enforcer. Sampled every 120 seconds.
enable_rbac :
Whether role-based access control is enabled for the instance.
type :
Type of authorization check performed.
private_service_connect_enabled :
Whether private service connect is enabled for the instance.
instance/v3/concurrent_pipelines_launched
BETA
(project)
Concurrent Pipeline Launches Count
GAUGE , INT64 , 1
datafusion.googleapis.com/InstanceV3
Count of pipelines in provisioning/starting state. Sampled every 120 seconds.
enable_rbac :
Whether role-based access control is enabled for the instance.
private_service_connect_enabled :
Whether private service connect is enabled for the instance.
instance/v3/concurrent_pipelines_running
BETA
(project)
Concurrent Pipelines Running Count
GAUGE , INT64 , 1
datafusion.googleapis.com/InstanceV3
Count of concurrent pipelines running. Sampled every 120 seconds.
enable_rbac :
Whether role-based access control is enabled for the instance.
private_service_connect_enabled :
Whether private service connect is enabled for the instance.
instance/v3/draft_pipelines
BETA
(project)
Draft pipeline count
GAUGE , INT64 , 1
datafusion.googleapis.com/InstanceV3
Number of draft pipelines. Sampled every 120 seconds.
enable_rbac :
Whether role-based access control is enabled for the instance.
private_service_connect_enabled :
Whether private service connect is enabled for the instance.
instance/v3/namespaces
BETA
(project)
Namespace count
GAUGE , INT64 , 1
datafusion.googleapis.com/InstanceV3
Number of namespaces. Sampled every 120 seconds.
enable_rbac :
Whether role-based access control is enabled for the instance.
private_service_connect_enabled :
Whether private service connect is enabled for the instance.
instance/v3/pipelines
BETA
(project)
Deployed pipeline count
GAUGE , INT64 , 1
datafusion.googleapis.com/InstanceV3
Number of deployed pipelines. Sampled every 120 seconds.
enable_rbac :
Whether role-based access control is enabled for the instance.
private_service_connect_enabled :
Whether private service connect is enabled for the instance.
maintenance_window_enabled :
Whether maintenance window is enabled for the instance.
instance/v3/service_available
BETA
(project)
Service status
GAUGE , BOOL , 1
datafusion.googleapis.com/InstanceV3
CDAP service availability. Sampled every 120 seconds.
service :
The name of the service.
enable_rbac :
Whether role-based access control is enabled for the instance.
private_service_connect_enabled :
Whether private service connect is enabled for the instance.
pipeline/v2/bqpushdown/engine_bytes_billed_count
BETA
(project)
BigQuery Pushdown: bytes billed by BigQuery jobs.
CUMULATIVE , INT64 , By
datafusion.googleapis.com/PipelineV2
BigQuery Pushdown: cumulative bytes billed by BigQuery jobs. Sampled every 120 seconds.
enable_rbac :
Whether role-based access control is enabled for the instance.
private_service_connect_enabled :
Whether private service connect is enabled for the instance.
pipeline/v2/bqpushdown/engine_bytes_processed_count
BETA
(project)
BigQuery Pushdown: bytes processed by BigQuery jobs.
CUMULATIVE , INT64 , By
datafusion.googleapis.com/PipelineV2
BigQuery Pushdown: cumulative bytes processed by BigQuery jobs. Sampled every 120 seconds.
enable_rbac :
Whether role-based access control is enabled for the instance.
private_service_connect_enabled :
Whether private service connect is enabled for the instance.
pipeline/v2/bqpushdown/engine_slot_count
BETA
(project)
BigQuery Pushdown: Cumulative slot usage by BigQuery jobs in milliseconds.
CUMULATIVE , INT64 , ms
datafusion.googleapis.com/PipelineV2
BigQuery Pushdown: Cumulative slot usage by BigQuery jobs in milliseconds. Sampled every 120 seconds.
enable_rbac :
Whether role-based access control is enabled for the instance.
private_service_connect_enabled :
Whether private service connect is enabled for the instance.
pipeline/v2/bqpushdown/records_in_count
BETA
(project)
BigQuery Pushdown: cumulative count of records entering a pipeline.
CUMULATIVE , INT64 , 1
datafusion.googleapis.com/PipelineV2
BigQuery Pushdown: cumulative count of records entering a pipeline. Sampled every 120 seconds.
enable_rbac :
Whether role-based access control is enabled for the instance.
private_service_connect_enabled :
Whether private service connect is enabled for the instance.
pipeline/v2/bqpushdown/records_out_count
BETA
(project)
BigQuery Pushdown: cumulative count of records leaving a pipeline.
CUMULATIVE , INT64 , 1
datafusion.googleapis.com/PipelineV2
BigQuery Pushdown: cumulative count of records leaving a pipeline. Sampled every 120 seconds.
enable_rbac :
Whether role-based access control is enabled for the instance.
private_service_connect_enabled :
Whether private service connect is enabled for the instance.
pipeline/v2/bqpushdown/records_pulled_count
BETA
(project)
BigQuery Pushdown: cumulative count of records pulled from the BQ engine in the pipeline.
CUMULATIVE , INT64 , 1
datafusion.googleapis.com/PipelineV2
BigQuery Pushdown: cumulative count of records pulled from the BQ engine in the pipeline. Sampled every 120 seconds.
enable_rbac :
Whether role-based access control is enabled for the instance.
private_service_connect_enabled :
Whether private service connect is enabled for the instance.
pipeline/v2/bqpushdown/records_pushed_count
BETA
(project)
BigQuery Pushdown: cumulative count of records pushed to engine in the pipeline.
CUMULATIVE , INT64 , 1
datafusion.googleapis.com/PipelineV2
BigQuery Pushdown: cumulative count of records pushed to engine in the pipeline. Sampled every 120 seconds.
enable_rbac :
Whether role-based access control is enabled for the instance.
private_service_connect_enabled :
Whether private service connect is enabled for the instance.
pipeline/v2/bqpushdown/stages_count
BETA
(project)
BigQuery Pushdown: cumulative number of stages in the pipeline.
CUMULATIVE , INT64 , 1
datafusion.googleapis.com/PipelineV2
BigQuery Pushdown: cumulative number of stages in the pipeline. Sampled every 120 seconds.
enable_rbac :
Whether role-based access control is enabled for the instance.
private_service_connect_enabled :
Whether private service connect is enabled for the instance.
pipeline/v2/bqpushdown/stages_join_count
BETA
(project)
BigQuery Pushdown: cumulative number of stages in the pipeline that are of type join.
CUMULATIVE , INT64 , 1
datafusion.googleapis.com/PipelineV2
BigQuery Pushdown: cumulative number of stages in the pipeline of type join. Sampled every 120 seconds.
enable_rbac :
Whether role-based access control is enabled for the instance.
private_service_connect_enabled :
Whether private service connect is enabled for the instance.
pipeline/v2/bqpushdown/stages_pulled_count
BETA
(project)
BigQuery Pushdown: cumulative number of stages in the pipeline that have records pulled from the BQ engine.
CUMULATIVE , INT64 , 1
datafusion.googleapis.com/PipelineV2
BigQuery Pushdown: cumulative number of stages in the pipeline that have records pulled from the BQ engine. Sampled every 120 seconds.
enable_rbac :
Whether role-based access control is enabled for the instance.
private_service_connect_enabled :
Whether private service connect is enabled for the instance.
pipeline/v2/bqpushdown/stages_pushed_count
BETA
(project)
BigQuery Pushdown: cumulative number of stages in the pipeline that have records pushed into the BQ engine.
CUMULATIVE , INT64 , 1
datafusion.googleapis.com/PipelineV2
BigQuery Pushdown: cumulative number of stages in the pipeline that have records pushed into the BQ engine. Sampled every 120 seconds.
enable_rbac :
Whether role-based access control is enabled for the instance.
private_service_connect_enabled :
Whether private service connect is enabled for the instance.
pipeline/v2/bqpushdown/stages_read_count
BETA
(project)
BigQuery Pushdown: cumulative number of read stages in the pipeline.
CUMULATIVE , INT64 , 1
datafusion.googleapis.com/PipelineV2
BigQuery Pushdown: cumulative number of read stages in the pipeline. Sampled every 120 seconds.
enable_rbac :
Whether role-based access control is enabled for the instance.
private_service_connect_enabled :
Whether private service connect is enabled for the instance.
pipeline/v2/bqpushdown/stages_spark_pulled_count
BETA
(project)
BigQuery Pushdown: cumulative number of stages in the pipeline that have records pulled from the Spark engine.
CUMULATIVE , INT64 , 1
datafusion.googleapis.com/PipelineV2
BigQuery Pushdown: cumulative number of stages in the pipeline that have records pulled from the Spark engine. Sampled every 120 seconds.
enable_rbac :
Whether role-based access control is enabled for the instance.
private_service_connect_enabled :
Whether private service connect is enabled for the instance.
pipeline/v2/bqpushdown/stages_spark_pushed_count
BETA
(project)
BigQuery Pushdown: cumulative number of stages in the pipeline that have records pushed into the Spark engine.
CUMULATIVE , INT64 , 1
datafusion.googleapis.com/PipelineV2
BigQuery Pushdown: cumulative number of stages in the pipeline that have records pushed into the Spark engine. Sampled every 120 seconds.
enable_rbac :
Whether role-based access control is enabled for the instance.
private_service_connect_enabled :
Whether private service connect is enabled for the instance.
pipeline/v2/bqpushdown/stages_transform_count
BETA
(project)
BigQuery Pushdown: cumulative number of stages in the pipeline that are of type transform.
CUMULATIVE , INT64 , 1
datafusion.googleapis.com/PipelineV2
BigQuery Pushdown: cumulative number of stages in the pipeline of type transform. Sampled every 120 seconds.
enable_rbac :
Whether role-based access control is enabled for the instance.
private_service_connect_enabled :
Whether private service connect is enabled for the instance.
pipeline/v2/bqpushdown/stages_write_count
BETA
(project)
BigQuery Pushdown: cumulative number of write stages in the pipeline.
CUMULATIVE , INT64 , 1
datafusion.googleapis.com/PipelineV2
BigQuery Pushdown: cumulative number of write stages in the pipeline. Sampled every 120 seconds.
enable_rbac :
Whether role-based access control is enabled for the instance.
private_service_connect_enabled :
Whether private service connect is enabled for the instance.
pipeline/v2/dataproc/api_request_count
BETA
(project)
Dataproc API Requests
CUMULATIVE , INT64 , 1
datafusion.googleapis.com/PipelineV2
Cumulative count of Dataproc API requests. Sampled every 120 seconds.
provisioner :
Name of the provisioner.
method :
Name of the method that is called.
response_code :
The response code generated from the request.
region :
The region that the Dataproc cluster is hosted in.
launch_mode :
Launch mode for the Dataproc job.
image_version :
The dataproc image version used.
enable_rbac :
Whether role-based access control is enabled for the instance.
private_service_connect_enabled :
Whether private service connect is enabled for the instance.
pipeline/v2/dataproc/provisioning_latency
BETA
(project)
Provisioning Latency
GAUGE , INT64 , s
datafusion.googleapis.com/PipelineV2
Dataproc cluster provisioning latency. Sampled every 120 seconds.
provisioner :
Name of the provisioner.
enable_rbac :
Whether role-based access control is enabled for the instance.
private_service_connect_enabled :
Whether private service connect is enabled for the instance.
pipeline/v2/pipeline_duration
BETA
(project)
Pipeline Run Time
GAUGE , INT64 , s
datafusion.googleapis.com/PipelineV2
Pipeline run time. Sampled every 120 seconds.
complete_state :
The state in which the run completed.
program :
Name of the program.For eg,"DataPipelineWorkflow" in case of batch pipeline.
provisioner :
Name of the provisioner.
cluster_state :
The state of the cluster when the run completed.
compute_profile_id :
Name of compute profile used to run the pipeline.
enable_rbac :
Whether role-based access control is enabled for the instance.
private_service_connect_enabled :
Whether private service connect is enabled for the instance.
pipeline/v2/pipeline_start_latency
BETA
(project)
Pipeline Start Latency
GAUGE , INT64 , s
datafusion.googleapis.com/PipelineV2
Pipeline starting latency. Sampled every 120 seconds.
program :
Name of the program.For eg,"DataPipelineWorkflow" in case of batch pipeline.
provisioner :
Name of the provisioner.
cluster_state :
The state of the cluster when the run completed.
compute_profile_id :
Name of compute profile used to run the pipeline.
complete_state :
The state in which the run completed.
enable_rbac :
Whether role-based access control is enabled for the instance.
private_service_connect_enabled :
Whether private service connect is enabled for the instance.
pipeline/v2/plugin/incoming_records_count
BETA
(project)
Plugin Records Processed In
CUMULATIVE , INT64 , 1
datafusion.googleapis.com/PipelineV2
Cumulative count of records entering a plugin. Sampled every 120 seconds.
enable_rbac :
Whether role-based access control is enabled for the instance.
private_service_connect_enabled :
Whether private service connect is enabled for the instance.
stage_name :
The name of the node in pipeline which represents the plugin.
pipeline/v2/plugin/outgoing_records_count
BETA
(project)
Plugin Records Processed Out
CUMULATIVE , INT64 , 1
datafusion.googleapis.com/PipelineV2
Cumulative count of records exiting a plugin. Sampled every 120 seconds.
enable_rbac :
Whether role-based access control is enabled for the instance.
private_service_connect_enabled :
Whether private service connect is enabled for the instance.
stage_name :
The name of the node in pipeline which represents the plugin.
pipeline/v2/preview_duration
BETA
(project)
Pipeline Preview Run time
GAUGE , INT64 , s
datafusion.googleapis.com/PipelineV2
Pipeline Preview Run Time. Sampled every 120 seconds.
complete_state :
The state in which the run completed.
enable_rbac :
Whether role-based access control is enabled for the instance.
private_service_connect_enabled :
Whether private service connect is enabled for the instance.
pipeline/v2/read_bytes_count
BETA
(project)
Pipeline Bytes Read
CUMULATIVE , INT64 , By
datafusion.googleapis.com/PipelineV2
Cumulative count of bytes read by a pipeline. Sampled every 120 seconds.
enable_rbac :
Whether role-based access control is enabled for the instance.
private_service_connect_enabled :
Whether private service connect is enabled for the instance.
pipeline/v2/runs_completed_count
BETA
(project)
Pipeline Run Status
CUMULATIVE , INT64 , 1
datafusion.googleapis.com/PipelineV2
Cumulative count of pipelines that have completed. Sampled every 120 seconds.
complete_state :
The state in which the run completed.
previous_state :
The state from which the run transitioned to any of the completed state.
program :
Name of the program.For eg,"DataPipelineWorkflow" in case of batch pipeline.
provisioner :
Name of the provisioner.
cluster_state :
The state of the cluster when the run completed.
compute_profile_id :
Name of compute profile used to run the pipeline.
enable_rbac :
Whether role-based access control is enabled for the instance.
private_service_connect_enabled :
Whether private service connect is enabled for the instance.
pipeline/v2/shuffle_bytes_count
BETA
(project)
Pipeline Bytes Shuffled
CUMULATIVE , INT64 , By
datafusion.googleapis.com/PipelineV2
Cumulative count of bytes shuffled in a pipeline. Sampled every 120 seconds.
enable_rbac :
Whether role-based access control is enabled for the instance.
private_service_connect_enabled :
Whether private service connect is enabled for the instance.
pipeline/v2/write_bytes_count
BETA
(project)
Pipeline Bytes Written
CUMULATIVE , INT64 , By
datafusion.googleapis.com/PipelineV2
Cumulative count of bytes written by a pipeline. Sampled every 120 seconds.
enable_rbac :
Whether role-based access control is enabled for the instance.
private_service_connect_enabled :
Whether private service connect is enabled for the instance.
datamigration
Metrics from Database Migration .
Launch stages of these metrics:
BETA
The "metric type" strings in this table must be prefixed
with datamigration.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
migration_job/fulldump_progress_percentage
BETA
(project)
Fulldump progress percentage
GAUGE , DOUBLE , %
datamigration.googleapis.com/MigrationJob
Progress percentage of the initial fulldump of the migration job.. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
migration_job/fulldump_progress_percentage_per_object
BETA
(project)
Fulldump progress percentage per object
GAUGE , DOUBLE , %
datamigration.googleapis.com/MigrationJob
Progress percentage of the initial fulldump of a single table in a migration job. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
database :
Database name.
schema :
The schema associated with this metric.
table :
The table associated with this metric.
migration_job/initial_sync_complete
BETA
(project)
Initial replication sync complete
GAUGE , BOOL ,
datamigration.googleapis.com/MigrationJob
Whether all databases on the destination DB instance have completed the initial sync and are replicating changes from the source.
database :
The database in the given instance associated with this metric.
migration_job/max_replica_bytes_lag
BETA
(project)
Max lag bytes of the migration job data
GAUGE , INT64 , By
datamigration.googleapis.com/MigrationJob
Current replication lag, aggregated across all of the migration job's data. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
database :
Database name.
migration_job/max_replica_sec_lag
BETA
(project)
Max lag in seconds of the migration job data
GAUGE , INT64 , s
datamigration.googleapis.com/MigrationJob
Current replication lag, aggregated across all of the migration job's data. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
database :
Database name.
migration_job/sqlserver/processed_file_bytes_count
BETA
(project)
Processed Files Bytes Count
DELTA , INT64 , By
datamigration.googleapis.com/MigrationJob
Number of bytes uploaded to the destination. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
database :
Database name.
migration_job/sqlserver/processed_file_count
BETA
(project)
Processed Files Count
DELTA , INT64 , 1
datamigration.googleapis.com/MigrationJob
Number of files uploaded to the destination. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
database :
Database name.
migration_job/sqlserver/transaction_log_upload_sec_lag
BETA
(project)
Transaction Log Upload Sec Lag
GAUGE , INT64 , s
datamigration.googleapis.com/MigrationJob
The lag in seconds since the last uploaded transaction log. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
database :
Database name.
migration_job/sqlserver/unprocessed_file_bytes
BETA
(project)
Unprocessed File Bytes
GAUGE , INT64 , By
datamigration.googleapis.com/MigrationJob
Unprocessed file bytes waiting to be uploaded to Cloud SQL. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
database :
Database name.
migration_job/sqlserver/unprocessed_files
BETA
(project)
Unprocessed Files
GAUGE , INT64 , 1
datamigration.googleapis.com/MigrationJob
Unprocessed files waiting to be uploaded to Cloud SQL. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
database :
Database name.
migration_job/unsupported_events_count
BETA
(project)
Unsupported Events Count
DELTA , INT64 , 1
datamigration.googleapis.com/MigrationJob
Number of unsupported events per migration and per table. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
database :
Database name.
schema :
The schema associated with this metric.
table :
The table associated with this metric.
migration_job/write_bytes_count
BETA
(project)
Write Bytes Count
DELTA , INT64 , By
datamigration.googleapis.com/MigrationJob
Number of bytes written to the destination. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
database :
Database name.
schema :
The schema associated with this metric.
table :
The table associated with this metric.
phase :
The phase associated with this metric (i.e. FULL_DUMP, CDC).
migration_job/write_rows_count
BETA
(project)
Write Rows Count
DELTA , INT64 , 1
datamigration.googleapis.com/MigrationJob
Number of rows written to the destination. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
database :
Database name.
schema :
The schema associated with this metric.
table :
The table associated with this metric.
phase :
The phase associated with this metric (i.e. FULL_DUMP, CDC).
dataplex
Metrics from Knowledge Catalog .
Launch stages of these metrics:
BETA
The "metric type" strings in this table must be prefixed
with dataplex.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
asset/active
BETA
(project)
Active
GAUGE , INT64 , 1
dataplex.googleapis.com/Asset
Whether the asset is active.
resource_type :
The type of the referenced resource.
zone_type :
The type of the parent zone.
asset/data_items
BETA
(project)
Data items
GAUGE , INT64 , 1
dataplex.googleapis.com/Asset
The count of items within the referenced resource.
resource_type :
The type of the referenced resource.
zone_type :
The type of the parent zone.
asset/data_size
BETA
(project)
Data size
GAUGE , INT64 , By
dataplex.googleapis.com/Asset
The number of stored bytes within the referenced resource.
resource_type :
The type of the referenced resource.
zone_type :
The type of the parent zone.
asset/entities_pending_bigquery_iampolicy_updates
BETA
(project)
Entities with BigQuery IAM policy updates pending
GAUGE , INT64 , 1
dataplex.googleapis.com/Asset
Number of Entities associated with the Asset with BigQuery IAM policy updates pending.
resource_type :
The type of the referenced resource.
zone_type :
The type of the parent zone.
asset/entities_pending_bigquery_metadata_updates
BETA
(project)
Entities with BigQuery metadata updates pending
GAUGE , INT64 , 1
dataplex.googleapis.com/Asset
Number of Entities associated with the Asset with BigQuery metadata updates pending.
resource_type :
The type of the referenced resource.
zone_type :
The type of the parent zone.
asset/filesets
BETA
(project)
Filesets
GAUGE , INT64 , 1
dataplex.googleapis.com/Asset
The count of fileset entities within the referenced resource.
resource_type :
The type of the referenced resource.
zone_type :
The type of the parent zone.
asset/requires_action
BETA
(project)
Requires action
GAUGE , INT64 , 1
dataplex.googleapis.com/Asset
Whether the asset has unresolved admin actions.
resource_type :
The type of the referenced resource.
zone_type :
The type of the parent zone.
asset/tables
BETA
(project)
Tables
GAUGE , INT64 , 1
dataplex.googleapis.com/Asset
The count of table entities within the referenced resource.
resource_type :
The type of the referenced resource.
zone_type :
The type of the parent zone.
lake/requires_action
BETA
(project)
Requires action
GAUGE , INT64 , 1
dataplex.googleapis.com/Lake
Whether the lake has unresolved admin actions.
zone/requires_action
BETA
(project)
Requires action
GAUGE , INT64 , 1
dataplex.googleapis.com/Zone
Whether the zone has unresolved admin actions.
type :
The type of the zone.
dataproc
Metrics from Managed Service for Apache Spark .
Launch stages of these metrics:
BETA
GA
The "metric type" strings in this table must be prefixed
with dataproc.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
batch/spark/executors
GA
(project)
Batch Spark executors
GAUGE , INT64 , 1
cloud_dataproc_batch
Indicates the number of Batch Spark executors. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
status :
The status of Batch Spark executors, one of [running, pending-delete, required, maximum-needed, target].
cluster/capacity_deviation
BETA
(project)
Cluster capacity deviation
GAUGE , INT64 , 1
cloud_dataproc_cluster
Difference between the expected node count in the cluster and the actual active YARN node managers. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
cluster/hdfs/datanodes
GA
(project)
HDFS DataNodes
GAUGE , INT64 , 1
cloud_dataproc_cluster
Indicates the number of HDFS DataNodes that are running inside a cluster. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
status :
The status of DataNode such as running, decommissioning, decommissioned.
cluster/hdfs/storage_capacity
GA
(project)
HDFS capacity
GAUGE , DOUBLE , GiBy
cloud_dataproc_cluster
Indicates capacity of HDFS system running on cluster in GB. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
status :
The status of HDFS capacity such as used, remaining.
cluster/hdfs/storage_utilization
GA
(project)
HDFS storage utilization
GAUGE , DOUBLE , 1
cloud_dataproc_cluster
The percentage of HDFS storage currently used. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
cluster/hdfs/unhealthy_blocks
GA
(project)
Unhealthy HDFS blocks by status
GAUGE , INT64 , 1
cloud_dataproc_cluster
Indicates the number of unhealthy blocks inside the cluster. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
status :
The status of unhealthy HDFS block such as missing, under_replication, corrupt, pending_deletion, missing_repl_one.
cluster/job/completion_time
GA
(project)
Job duration
DELTA , DISTRIBUTION , s
cloud_dataproc_cluster
The time jobs took to complete from the time the user submits a job to the time Dataproc reports it is completed. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
job_type :
The type of job such as HADOOP_JOB or SPARK_JOB.
cluster/job/duration
GA
(project)
Job state duration
DELTA , DISTRIBUTION , s
cloud_dataproc_cluster
The time jobs have spent in a given state. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
job_type :
The type of job such as HADOOP_JOB or SPARK_JOB.
state :
The state of the job such as PENDING or RUNNING.
cluster/job/failed_count
GA
(project)
Failed jobs
DELTA , INT64 , 1
cloud_dataproc_cluster
Indicates the number of jobs that have failed on a cluster. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
error_type :
The rpc code of the error such as 404 or 503.
job_type :
The type of job such as HADOOP_JOB or SPARK_JOB.
cluster/job/running_count
GA
(project)
Running jobs
GAUGE , INT64 , 1
cloud_dataproc_cluster
Indicates the number of jobs that are running on a cluster. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
job_type :
The type of job such as HADOOP_JOB or SPARK_JOB.
cluster/job/submitted_count
GA
(project)
Submitted jobs
DELTA , INT64 , 1
cloud_dataproc_cluster
Indicates the number of jobs that have been submitted to a cluster. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
job_type :
The type of job such as HADOOP_JOB or SPARK_JOB.
cluster/mig_instances/failed_count
BETA
(project)
Dataproc Managed Instance Group Instance Errors
DELTA , INT64 , 1
cloud_dataproc_cluster
Indicates the number of instance failures for a managed instance group. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
mig_uuid :
The unique identifier of managed instance group associated with the cluster.
error_code :
The error code of the instances which failed while creating/recreating.
cluster/nodes/expected
BETA
(project)
Expected Nodes
GAUGE , INT64 , 1
cloud_dataproc_cluster
Indicates the number of nodes that are expected in a cluster. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
node_type :
The type of node. One of [SINGLE_NODE, MASTER, HA_PRIMARY_MASTER, HA_SECONDARY_MASTER, HA_TERTIARY_MASTER, PRIMARY_WORKER, SECONDARY_WORKER].
cluster/nodes/failed_count
BETA
(project)
Failed Nodes
DELTA , INT64 , 1
cloud_dataproc_cluster
Indicates the number of nodes that have failed in a cluster. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
node_type :
The type of node. One of [SINGLE_NODE, MASTER, HA_PRIMARY_MASTER, HA_SECONDARY_MASTER, HA_TERTIARY_MASTER, PRIMARY_WORKER, SECONDARY_WORKER].
failure_type :
Indicates the type of failure such as GCE_ERROR, DATAPROC_AGENT_ERROR or DATAPROC_DATAPLANE_ERROR.
cluster/nodes/recovered_count
BETA
(project)
Recovered Nodes
DELTA , INT64 , 1
cloud_dataproc_cluster
Indicates the number of nodes that are detected as failed and have been successfully removed from cluster. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
node_type :
The type of node. One of [SINGLE_NODE, MASTER, HA_PRIMARY_MASTER, HA_SECONDARY_MASTER, HA_TERTIARY_MASTER, PRIMARY_WORKER, SECONDARY_WORKER].
cluster/nodes/running
BETA
(project)
Running Nodes
GAUGE , INT64 , 1
cloud_dataproc_cluster
Indicates the number of nodes in running state. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
node_type :
The type of node. One of [SINGLE_NODE, MASTER, HA_PRIMARY_MASTER, HA_SECONDARY_MASTER, HA_TERTIARY_MASTER, PRIMARY_WORKER, SECONDARY_WORKER].
cluster/operation/completion_time
GA
(project)
Operation duration
DELTA , DISTRIBUTION , s
cloud_dataproc_cluster
The time operations took to complete from the time the user submits a operation to the time Dataproc reports it is completed. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
operation_type :
The type of operation such as CREATE_CLUSTER or DELETE_CLUSTER.
cluster/operation/duration
GA
(project)
Operation state duration
DELTA , DISTRIBUTION , s
cloud_dataproc_cluster
The time operations have spent in a given state. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
operation_type :
The type of operation such as CREATE_CLUSTER or DELETE_CLUSTER.
state :
The state of the operation such as PENDING or CREATE_VMS.
cluster/operation/failed_count
GA
(project)
Failed operations
DELTA , INT64 , 1
cloud_dataproc_cluster
Indicates the number of operations that have failed on a cluster. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
error_type :
The rpc code of the error such as 404 or 503.
operation_type :
The type of operation such as CREATE_CLUSTER or DELETE_CLUSTER.
cluster/operation/running_count
GA
(project)
Running operations
GAUGE , INT64 , 1
cloud_dataproc_cluster
Indicates the number of operations that are running on a cluster. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
operation_type :
The type of operation such as CREATE_CLUSTER or DELETE_CLUSTER.
cluster/operation/submitted_count
GA
(project)
Submitted operations
DELTA , INT64 , 1
cloud_dataproc_cluster
Indicates the number of operations that have been submitted to a cluster. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
operation_type :
The type of operation such as CREATE_CLUSTER or DELETE_CLUSTER.
cluster/state
BETA
(project)
Cluster state
GAUGE , BOOL ,
cloud_dataproc_cluster
Indicates whether Dataproc cluster is currently in a particular state or not. True indicates in that state and False indicates exited that state. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
state :
The state of the Dataproc cluster such as RUNNING or ERROR.
cluster/yarn/allocated_memory_percentage
GA
(project)
YARN allocated memory percentage
GAUGE , DOUBLE , 1
cloud_dataproc_cluster
The percentage of YARN memory is allocated. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
cluster/yarn/apps
GA
(project)
YARN active applications
GAUGE , INT64 , 1
cloud_dataproc_cluster
Indicates the number of active YARN applications. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
status :
The status of YARN application such as running, pending, completed, failed, killed.
cluster/yarn/containers
GA
(project)
YARN containers
GAUGE , INT64 , 1
cloud_dataproc_cluster
Indicates the number of YARN containers. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
status :
The status of YARN container such as allocated, pending, reserved.
cluster/yarn/memory_size
GA
(project)
YARN memory size
GAUGE , DOUBLE , GiBy
cloud_dataproc_cluster
Indicates the YARN memory size in GB. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
status :
The status of YARN memory such as available, allocated, reserved.
cluster/yarn/nodemanagers
GA
(project)
YARN NodeManagers
GAUGE , INT64 , 1
cloud_dataproc_cluster
Indicates the number of YARN NodeManagers running inside cluster. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
status :
The status of YARN NodeManager such as active, lost, unhealthy, rebooted, decommissioned.
cluster/yarn/pending_memory_size
GA
(project)
YARN pending memory size
GAUGE , DOUBLE , GiBy
cloud_dataproc_cluster
The current memory request, in GB, that is pending to be fulfilled by the scheduler. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
cluster/yarn/virtual_cores
GA
(project)
YARN virtual cores
GAUGE , INT64 , 1
cloud_dataproc_cluster
Indicates the number of virtual cores in YARN. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
status :
The status of YARN virtual cores such as pending, allocated, available, reserved.
job/state
GA
(project)
Job state
GAUGE , BOOL ,
cloud_dataproc_job
Indicates whether job is currently in a particular state or not. True indicates in that state and False indicates exited that state. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
state :
The state of the job such as PENDING or RUNNING.
job/yarn/memory_seconds
BETA
(project)
Consumed memory seconds by job
GAUGE , INT64 , 1
cloud_dataproc_job
Indicates the Memory Seconds consumed by the `job_id` job per yarn `application_id`. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
application_id :
Yarn application ID.
job/yarn/vcore_seconds
BETA
(project)
Consumed vcore seconds by job
GAUGE , INT64 , 1
cloud_dataproc_job
Indicates the VCore Seconds consumed by the `job_id` job per yarn `application_id`. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
application_id :
Yarn application ID.
node/problem_count
BETA
(project)
Problem count
DELTA , INT64 , 1
gce_instance
Total number of times a specific type of problem has occurred. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
reason :
Description of the type of the problem.
node/yarn/nodemanager/health
BETA
(project)
YARN NodeManager Health
GAUGE , INT64 , 1
gce_instance
YARN nodemanager health state. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
state :
Health state of yarn nodemanager for the gce instance resource.
session/spark/executors
GA
(project)
Session Spark executors
GAUGE , INT64 , 1
cloud_dataproc_session
Indicates the number of Session Spark executors. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
status :
The status of Session Spark executors, one of [running, pending-delete, required, maximum-needed, target].
datastore
Metrics from Datastore . Metrics from Firestore written against firestore.googleapis.com/Database resources are also applicable to Datastore databases.
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with datastore.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
api/request_count
GA
(project)
Requests
DELTA , INT64 , 1
datastore_request
Count of Datastore API calls. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
api_method :
The API method called (for example: BeginTransaction or Commit).
response_code :
Operation response code string, derived as a string representation of a HTTP status code (e.g. success, not_found, unavailable).
entity/read_sizes
GA
(project)
Sizes of read entities
DELTA , DISTRIBUTION , By
datastore_request
Distribution of sizes of read entities, grouped by type. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
type :
The type of entity read (for example: KEYS_ONLY or ENTITY_SCAN).
entity/ttl_deletion_count
GA
(project)
TTL deletion count
DELTA , INT64 , 1
datastore_request
Total count of entities deleted by TTL services. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
entity/ttl_expiration_to_deletion_delays
GA
(project)
TTL expiration to deletion delays
DELTA , DISTRIBUTION , s
datastore_request
Time elapsed between when an entity with a TTL expired, and when it was actually deleted. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
entity/write_sizes
GA
(project)
Sizes of written entities
DELTA , DISTRIBUTION , By
datastore_request
Distribution of sizes of written entities, grouped by op. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
op :
The operation type (for example: CREATE or DELETE_NOOP).
index/write_count
GA
(project)
Index writes
DELTA , INT64 , 1
datastore_request
Count of Datastore index writes. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
datastream
Metrics from Datastream .
Launch stages of these metrics:
ALPHA
BETA
The "metric type" strings in this table must be prefixed
with datastream.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
stream/bytes_count
BETA
(project)
Stream bytes count
DELTA , INT64 , By
datastream.googleapis.com/Stream
The stream bytes count.
read_method :
The events read method.
stream/event_count
BETA
(project)
Stream event count
DELTA , INT64 , 1
datastream.googleapis.com/Stream
The stream event count.
read_method :
The events read method.
stream/freshness
BETA
(project)
Stream freshness
GAUGE , INT64 , s
datastream.googleapis.com/Stream
Indicates how far behind Datastream is compared to the source. This is calculated as the time difference between when the change occurred in the source database, until it is read by Datastream. If no new changes are available to read then the freshness is set to 0.
stream/latencies
BETA
(project)
Stream latencies
DELTA , DISTRIBUTION , s
datastream.googleapis.com/Stream
The stream latencies.
read_method :
The events read method.
stream/system_latencies
BETA
(project)
Stream system latencies
DELTA , DISTRIBUTION , s
datastream.googleapis.com/Stream
A distribution of the latency calculated from when the event was read from the source until it was written to the destination.
read_method :
The events read method.
stream/total_latencies
BETA
(project)
Stream total latencies
DELTA , DISTRIBUTION , s
datastream.googleapis.com/Stream
A distribution of the latency calculated from when the event was created at the source until it was written to the destination.
read_method :
The events read method.
stream/unsupported_event_count
BETA
(project)
Stream unsupported event count
DELTA , INT64 , 1
datastream.googleapis.com/Stream
The stream unsupported event count.
read_method :
The events read method.
object_name :
The name of the object that reported the unsupported events.
error_code :
The reason the events are unsupported.
streamobject/bytes_count
ALPHA
(project)
bytes count per stream object
DELTA , INT64 , By
datastream.googleapis.com/StreamObject
The bytes count per stream object.
read_method :
The events read method.
streamobject/event_count
ALPHA
(project)
event count per stream object
DELTA , INT64 , 1
datastream.googleapis.com/StreamObject
The event count per stream object.
read_method :
The events read method.
streamobject/unsupported_event_count
ALPHA
(project)
unsupported event count per stream object
DELTA , INT64 , 1
datastream.googleapis.com/StreamObject
The unsupported event count per stream object.
read_method :
The events read method.
dbinsights
Metrics from Cloud SQL for MySQL .
Launch stages of these metrics:
BETA
The "metric type" strings in this table must be prefixed
with dbinsights.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
aggregate/execution_count
BETA
(project)
Number of calls
CUMULATIVE , INT64 , 1
cloudsql_instance_database
Total number of query executions per user and database.
user :
The user of the database.
client_addr :
The IP address of the database client.
aggregate/execution_time
BETA
(project)
Execution time
CUMULATIVE , INT64 , us{CPU}
cloudsql_instance_database
Cumulative query execution time per user and database. This is the sum of the time required for the CPU, IO wait, lock wait, process context switching, and scheduling for all the processes involved in the query execution.
user :
The user of the database.
client_addr :
The IP address of the database client.
aggregate/io_time
BETA
(project)
IO wait time
CUMULATIVE , INT64 , us
cloudsql_instance_database
Cumulative IO wait time per user and database.
user :
The user of the database.
client_addr :
The IP address of the database client.
aggregate/latencies
BETA
(project)
Latency
CUMULATIVE , DISTRIBUTION , us
cloudsql_instance_database
Cumulative query latency distribution per user and database.
user :
The user of the database.
client_addr :
The IP address of the database client.
aggregate/lock_time
BETA
(project)
Lock wait time
CUMULATIVE , INT64 , us
cloudsql_instance_database
Cumulative lock wait time per user and database.
user :
The user of the database.
client_addr :
The IP address of the database client.
lock_type :
The lock type. For PostgreSQL, it can be lw, hw, or buffer_pin. For MySQL, a value is not required.
aggregate/row_count
BETA
(project)
Affected rows
CUMULATIVE , INT64 , 1
cloudsql_instance_database
Total number of rows affected during query execution.
user :
The user of the database.
client_addr :
The IP address of the database client.
row_status :
The status of rows. For Postgres, it can be output. For MySQL, it can be output or scan).
perquery/execution_count
BETA
(project)
Number of calls per query
CUMULATIVE , INT64 , 1
cloudsql_instance_database
Total number of query executions per user, database, and query.
querystring :
The normalized query.
user :
The user of the database.
client_addr :
The IP address of the database client.
query_hash :
A unique hash of the query string.
perquery/execution_time
BETA
(project)
Execution time per query
CUMULATIVE , INT64 , us{CPU}
cloudsql_instance_database
Cumulative query execution time per user, database, and query. This is the sum of the time required for the CPU, IO wait, lock wait, process context switching, and scheduling for all the processes involved in the query execution.
querystring :
The normalized query.
user :
The user of the database.
client_addr :
The IP address of the database client.
query_hash :
A unique hash of the query string.
perquery/io_time
BETA
(project)
IO wait time per query
CUMULATIVE , INT64 , us
cloudsql_instance_database
Cumulative io wait time per user, database, and query.
querystring :
The normalized query.
user :
The user of the database.
client_addr :
The IP address of the database client.
query_hash :
A unique hash of the query string.
perquery/latencies
BETA
(project)
Latency per query
CUMULATIVE , DISTRIBUTION , us
cloudsql_instance_database
Cumulative query latency distribution per user, database, and query.
querystring :
The normalized query.
user :
The user of the database.
client_addr :
The IP address of the database client.
query_hash :
A unique hash of the query string.
perquery/lock_time
BETA
(project)
Lock wait time per query
CUMULATIVE , INT64 , us
cloudsql_instance_database
Cumulative lock wait time per user, database, and query.
querystring :
The normalized query.
user :
The user of the database.
client_addr :
The IP address of the database client.
lock_type :
The lock type. For PostgreSQL, it can be lw, hw, or buffer_pin. For MySQL, a value is not required.
query_hash :
A unique hash of the query string.
perquery/row_count
BETA
(project)
Affected rows per query
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
row_status :
The status of rows. For Postgres, it can be output. For MySQL, it can be output or scan).
pertag/execution_count
BETA
(project)
Number of calls per tag
CUMULATIVE , INT64 , 1
cloudsql_instance_database
Total number of query executions per user, database, and tag.
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
The name of the database driver.
framework :
The name of the framework.
route :
The name of the route.
tag_hash :
A unique hash of the tag string.
pertag/execution_time
BETA
(project)
Execution time per tag
CUMULATIVE , INT64 , us{CPU}
cloudsql_instance_database
Cumulative query execution time per user, database, and tag. This is the sum of the time required for the CPU, IO wait, lock wait, process context switching, and scheduling for all the processes involved in the query execution.
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
The name of the database driver.
framework :
The name of the framework.
route :
The name of the route.
tag_hash :
A unique hash of the tag string.
pertag/io_time
BETA
(project)
IO wait time per tag
CUMULATIVE , INT64 , us
cloudsql_instance_database
Cumulative IO wait time per user, database and tag.
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
The name of the database driver.
framework :
The name of the framework.
route :
The name of the route.
tag_hash :
A unique hash of the tag string.
pertag/latencies
BETA
(project)
Latency per tag
CUMULATIVE , DISTRIBUTION , us
cloudsql_instance_database
Cumulative query latency distribution per user, database, and tag.
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
The name of the database driver.
framework :
The name of the framework.
route :
The name of the route.
tag_hash :
A unique hash of the tag string.
pertag/lock_time
BETA
(project)
Lock wait time per tag
CUMULATIVE , INT64 , us
cloudsql_instance_database
Cumulative lock wait time per user, database and tag.
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
The name of the database driver.
framework :
The name of the framework.
route :
The name of the route.
lock_type :
The lock type. For PostgreSQL, it can be lw, hw, or buffer_pin. For MySQL, a value is not required.
tag_hash :
A unique hash of the tag string.
pertag/row_count
BETA
(project)
Affected rows per tag
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
The name of the database driver.
framework :
The name of the framework.
route :
The name of the route.
tag_hash :
A unique hash of the tag string.
row_status :
The status of rows. For Postgres, it can be output. For MySQL, it can be output or scan).
dialogflow
Metrics from Dialogflow .
Launch stages of these metrics:
ALPHA
BETA
GA
The "metric type" strings in this table must be prefixed
with dialogflow.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
location/phone_call_count
BETA
(project)
Phone Call
DELTA , INT64 , 1
dialogflow.googleapis.com/Location
The number of phone calls made in the location. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
call_status :
Status of the phone call: successful, reject, etc.
location/phone_call_duration_count
BETA
(project)
Phone Call Duration
DELTA , INT64 , 1
dialogflow.googleapis.com/Location
Duration in seconds of phone calls made in the location. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
quota/ConversationalAgentLLMTokenConsumption/exceeded
ALPHA
(project)
Conversational Agent LLM tokens quota exceeded error
DELTA , INT64 , 1
dialogflow.googleapis.com/Location
Number of attempts to exceed the limit on quota metric dialogflow.googleapis.com/ConversationalAgentLLMTokenConsumption. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model :
The base model custom dimension.
quota/ConversationalAgentLLMTokenConsumption/limit
ALPHA
(project)
Conversational Agent LLM tokens quota limit
GAUGE , INT64 , 1
dialogflow.googleapis.com/Location
Current limit on quota metric dialogflow.googleapis.com/ConversationalAgentLLMTokenConsumption. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model :
The base model custom dimension.
quota/ConversationalAgentLLMTokenConsumption/usage
ALPHA
(project)
Conversational Agent LLM tokens quota usage
DELTA , INT64 , 1
dialogflow.googleapis.com/Location
Current usage on quota metric dialogflow.googleapis.com/ConversationalAgentLLMTokenConsumption. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
base_model :
The base model custom dimension.
quota/generator_suggestion_operations_per_model_type/exceeded
ALPHA
(project)
Generator suggestion operations quota exceeded error
DELTA , INT64 , 1
dialogflow.googleapis.com/Location
Number of attempts to exceed the limit on quota metric dialogflow.googleapis.com/generator_suggestion_operations_per_model_type. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model_type :
The model type custom dimension.
quota/generator_suggestion_operations_per_model_type/limit
ALPHA
(project)
Generator suggestion operations quota limit
GAUGE , INT64 , 1
dialogflow.googleapis.com/Location
Current limit on quota metric dialogflow.googleapis.com/generator_suggestion_operations_per_model_type. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model_type :
The model type custom dimension.
quota/generator_suggestion_operations_per_model_type/usage
ALPHA
(project)
Generator suggestion operations quota usage
DELTA , INT64 , 1
dialogflow.googleapis.com/Location
Current usage on quota metric dialogflow.googleapis.com/generator_suggestion_operations_per_model_type. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
model_type :
The model type custom dimension.
quota/generator_suggestion_operations_per_model_type_per_multi_region/exceeded
ALPHA
(project)
Generator suggestion operations quota exceeded error
DELTA , INT64 , 1
dialogflow.googleapis.com/Location
Number of attempts to exceed the limit on quota metric dialogflow.googleapis.com/generator_suggestion_operations_per_model_type_per_multi_region. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model_type :
The model type custom dimension.
multi_region :
The multi-region custom dimension.
quota/generator_suggestion_operations_per_model_type_per_multi_region/limit
ALPHA
(project)
Generator suggestion operations quota limit
GAUGE , INT64 , 1
dialogflow.googleapis.com/Location
Current limit on quota metric dialogflow.googleapis.com/generator_suggestion_operations_per_model_type_per_multi_region. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model_type :
The model type custom dimension.
multi_region :
The multi-region custom dimension.
quota/generator_suggestion_operations_per_model_type_per_multi_region/usage
ALPHA
(project)
Generator suggestion operations quota usage
DELTA , INT64 , 1
dialogflow.googleapis.com/Location
Current usage on quota metric dialogflow.googleapis.com/generator_suggestion_operations_per_model_type_per_multi_region. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
model_type :
The model type custom dimension.
multi_region :
The multi-region custom dimension.
quota/generator_suggestion_operations_per_model_type_per_region/exceeded
ALPHA
(project)
Generator suggestion operations quota exceeded error
DELTA , INT64 , 1
dialogflow.googleapis.com/Location
Number of attempts to exceed the limit on quota metric dialogflow.googleapis.com/generator_suggestion_operations_per_model_type_per_region. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model_type :
The model type custom dimension.
quota/generator_suggestion_operations_per_model_type_per_region/limit
ALPHA
(project)
Generator suggestion operations quota limit
GAUGE , INT64 , 1
dialogflow.googleapis.com/Location
Current limit on quota metric dialogflow.googleapis.com/generator_suggestion_operations_per_model_type_per_region. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model_type :
The model type custom dimension.
quota/generator_suggestion_operations_per_model_type_per_region/usage
ALPHA
(project)
Generator suggestion operations quota usage
DELTA , INT64 , 1
dialogflow.googleapis.com/Location
Current usage on quota metric dialogflow.googleapis.com/generator_suggestion_operations_per_model_type_per_region. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
model_type :
The model type custom dimension.
quota/search_knowledge_requests_per_multi_region/exceeded
ALPHA
(project)
Search knowledge requests quota exceeded error
DELTA , INT64 , 1
dialogflow.googleapis.com/Location
Number of attempts to exceed the limit on quota metric dialogflow.googleapis.com/search_knowledge_requests_per_multi_region. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
multi_region :
The multi-region custom dimension.
quota/search_knowledge_requests_per_multi_region/limit
ALPHA
(project)
Search knowledge requests quota limit
GAUGE , INT64 , 1
dialogflow.googleapis.com/Location
Current limit on quota metric dialogflow.googleapis.com/search_knowledge_requests_per_multi_region. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
multi_region :
The multi-region custom dimension.
quota/search_knowledge_requests_per_multi_region/usage
ALPHA
(project)
Search knowledge requests quota usage
DELTA , INT64 , 1
dialogflow.googleapis.com/Location
Current usage on quota metric dialogflow.googleapis.com/search_knowledge_requests_per_multi_region. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
multi_region :
The multi-region custom dimension.
quota/stt_v2_streaming_requests/exceeded
GA
(project)
Transcription requests using STT V2 quota exceeded error
DELTA , INT64 , 1
dialogflow.googleapis.com/Location
Number of attempts to exceed the limit on quota metric dialogflow.googleapis.com/stt_v2_streaming_requests. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
resource_type :
The resource type custom dimension.
quota/stt_v2_streaming_requests/limit
GA
(project)
Transcription requests using STT V2 quota limit
GAUGE , INT64 , 1
dialogflow.googleapis.com/Location
Current limit on quota metric dialogflow.googleapis.com/stt_v2_streaming_requests. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
resource_type :
The resource type custom dimension.
quota/stt_v2_streaming_requests/usage
GA
(project)
Transcription requests using STT V2 quota usage
DELTA , INT64 , 1
dialogflow.googleapis.com/Location
Current usage on quota metric dialogflow.googleapis.com/stt_v2_streaming_requests. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
resource_type :
The resource type custom dimension.
quota/suggest_knowledge_assist_operations_per_multi_region/exceeded
ALPHA
(project)
Suggest knowledge assist operations quota exceeded error
DELTA , INT64 , 1
dialogflow.googleapis.com/Location
Number of attempts to exceed the limit on quota metric dialogflow.googleapis.com/suggest_knowledge_assist_operations_per_multi_region. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
multi_region :
The multi-region custom dimension.
quota/suggest_knowledge_assist_operations_per_multi_region/limit
ALPHA
(project)
Suggest knowledge assist operations quota limit
GAUGE , INT64 , 1
dialogflow.googleapis.com/Location
Current limit on quota metric dialogflow.googleapis.com/suggest_knowledge_assist_operations_per_multi_region. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
multi_region :
The multi-region custom dimension.
quota/suggest_knowledge_assist_operations_per_multi_region/usage
ALPHA
(project)
Suggest knowledge assist operations quota usage
DELTA , INT64 , 1
dialogflow.googleapis.com/Location
Current usage on quota metric dialogflow.googleapis.com/suggest_knowledge_assist_operations_per_multi_region. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
multi_region :
The multi-region custom dimension.
discoveryengine
Metrics from Discovery Engine
Launch stages of these metrics:
BETA
The "metric type" strings in this table must be prefixed
with discoveryengine.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
agent_session_count
BETA
(project)
Gemini Enterprise Agent Session Count
CUMULATIVE , INT64 , 1
discoveryengine.googleapis.com/Agent
Number of sessions created for each Gemini Enterprise agent.
agent_session_with_tool_count
BETA
(project)
Gemini Enterprise Session with Tool Count
CUMULATIVE , INT64 , 1
discoveryengine.googleapis.com/Agent
Number of sessions where at least one tool was invoked.
agent_total_latencies
BETA
(project)
Gemini Enterprise Agent Total Latency
DELTA , DISTRIBUTION , ms
discoveryengine.googleapis.com/Agent
Distribution of total latency of Gemini Enterprise agent invocations over a 1-minute window. Sampled every 30 seconds. After sampling, data is not visible for up to 330 seconds.
status :
The response code as a gRPC status code (e.g. OK, INVALID_ARGUMENT, etc.)
agent_turn_count
BETA
(project)
Gemini Enterprise Agent Turn Count
CUMULATIVE , INT64 , 1
discoveryengine.googleapis.com/Agent
Number of session turns created for each Gemini Enterprise agent.
conversational_search_service/stream_answer_query/first_token_latencies
BETA
(project)
Streaming Answer API Time to First Token
GAUGE , DISTRIBUTION , ms
discoveryengine.googleapis.com/Location
Latency to the first token returned by the Streaming Answer API. Sampled every 30 seconds. After sampling, data is not visible for up to 30 seconds.
model_version :
The model and version being used to generate an answer.
session_mode :
The mode of the session associated with the request.
data_stores_regional
BETA
(project)
Regional number of data stores.
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Regional number of data stores. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
regional_location :
The multi region custom dimension.
dataconnector/request_count
BETA
(project)
Gemini Enterprise DataConnector Request Count
DELTA , INT64 , 1
discoveryengine.googleapis.com/DataConnector
Total number of requests made to the datastore, broken down by request status. Sampled every 30 seconds. After sampling, data is not visible for up to 360 seconds.
status :
The status of the request (e.g. SUCCESS, FAILURE).
documents_regional
BETA
(project)
Regional number of documents.
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Regional number of documents. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
regional_location :
The multi region custom dimension.
engines_regional
BETA
(project)
Regional number of engines.
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Regional number of engines. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
regional_location :
The multi region custom dimension.
quota/agents_tier_business_regional/exceeded
BETA
(project)
Agents for business tier. quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/agents_tier_business_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/agents_tier_business_regional/limit
BETA
(project)
Agents for business tier. quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/agents_tier_business_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/agents_tier_business_regional/usage
BETA
(project)
Agents for business tier. quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/agents_tier_business_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/agents_tier_developer_ultra_regional/exceeded
BETA
(project)
Agents for developer ultra tier. quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/agents_tier_developer_ultra_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/agents_tier_developer_ultra_regional/limit
BETA
(project)
Agents for developer ultra tier. quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/agents_tier_developer_ultra_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/agents_tier_developer_ultra_regional/usage
BETA
(project)
Agents for developer ultra tier. quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/agents_tier_developer_ultra_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/agents_tier_edu_pro_emerging_regional/exceeded
BETA
(project)
Number of agents for edu pro emerging tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/agents_tier_edu_pro_emerging_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/agents_tier_edu_pro_emerging_regional/limit
BETA
(project)
Number of agents for edu pro emerging tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/agents_tier_edu_pro_emerging_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/agents_tier_edu_pro_emerging_regional/usage
BETA
(project)
Number of agents for edu pro emerging tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/agents_tier_edu_pro_emerging_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/agents_tier_edu_pro_regional/exceeded
BETA
(project)
Agents for edu pro tier. quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/agents_tier_edu_pro_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/agents_tier_edu_pro_regional/limit
BETA
(project)
Agents for edu pro tier. quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/agents_tier_edu_pro_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/agents_tier_edu_pro_regional/usage
BETA
(project)
Agents for edu pro tier. quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/agents_tier_edu_pro_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/agents_tier_edu_regional/exceeded
BETA
(project)
Agents for edu tier. quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/agents_tier_edu_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/agents_tier_edu_regional/limit
BETA
(project)
Agents for edu tier. quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/agents_tier_edu_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/agents_tier_edu_regional/usage
BETA
(project)
Agents for edu tier. quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/agents_tier_edu_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/agents_tier_enterprise_emerging_regional/exceeded
BETA
(project)
Agents for enterprise emerging tier. quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/agents_tier_enterprise_emerging_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/agents_tier_enterprise_emerging_regional/limit
BETA
(project)
Agents for enterprise emerging tier. quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/agents_tier_enterprise_emerging_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/agents_tier_enterprise_emerging_regional/usage
BETA
(project)
Agents for enterprise emerging tier. quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/agents_tier_enterprise_emerging_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/agents_tier_enterprise_plus_regional/exceeded
BETA
(project)
Agents for enterprise plus tier. quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/agents_tier_enterprise_plus_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/agents_tier_enterprise_plus_regional/limit
BETA
(project)
Agents for enterprise plus tier. quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/agents_tier_enterprise_plus_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/agents_tier_enterprise_plus_regional/usage
BETA
(project)
Agents for enterprise plus tier. quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/agents_tier_enterprise_plus_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/agents_tier_enterprise_regional/exceeded
BETA
(project)
Agents for enterprise tier. quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/agents_tier_enterprise_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/agents_tier_enterprise_regional/limit
BETA
(project)
Agents for enterprise tier. quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/agents_tier_enterprise_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/agents_tier_enterprise_regional/usage
BETA
(project)
Agents for enterprise tier. quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/agents_tier_enterprise_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/agents_tier_starter_regional/exceeded
BETA
(project)
Agents for starter tier. quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/agents_tier_starter_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/agents_tier_starter_regional/limit
BETA
(project)
Agents for starter tier. quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/agents_tier_starter_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/agents_tier_starter_regional/usage
BETA
(project)
Agents for starter tier. quota usage
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/agents_tier_starter_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/ai_dev_tool_overage_wtu_regional/exceeded
BETA
(project)
Number of AI dev tool overage WTUs quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/ai_dev_tool_overage_wtu_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/ai_dev_tool_overage_wtu_regional/limit
BETA
(project)
Number of AI dev tool overage WTUs quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/ai_dev_tool_overage_wtu_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/ai_dev_tool_overage_wtu_regional/usage
BETA
(project)
Number of AI dev tool overage WTUs quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/ai_dev_tool_overage_wtu_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/ai_dev_tool_wtu_tier_business_regional/exceeded
BETA
(project)
Number of AI dev tool WTUs for business tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/ai_dev_tool_wtu_tier_business_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/ai_dev_tool_wtu_tier_business_regional/limit
BETA
(project)
Number of AI dev tool WTUs for business tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/ai_dev_tool_wtu_tier_business_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/ai_dev_tool_wtu_tier_business_regional/usage
BETA
(project)
Number of AI dev tool WTUs for business tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/ai_dev_tool_wtu_tier_business_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/ai_dev_tool_wtu_tier_business_trial_regional/exceeded
BETA
(project)
Number of AI dev tool WTUs for business free trial quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/ai_dev_tool_wtu_tier_business_trial_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/ai_dev_tool_wtu_tier_business_trial_regional/limit
BETA
(project)
Number of AI dev tool WTUs for business free trial quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/ai_dev_tool_wtu_tier_business_trial_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/ai_dev_tool_wtu_tier_business_trial_regional/usage
BETA
(project)
Number of AI dev tool WTUs for business free trial quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/ai_dev_tool_wtu_tier_business_trial_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/ai_dev_tool_wtu_tier_developer_ultra_regional/exceeded
BETA
(project)
Number of AI dev tool WTUs for developer ultra tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/ai_dev_tool_wtu_tier_developer_ultra_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/ai_dev_tool_wtu_tier_developer_ultra_regional/limit
BETA
(project)
Number of AI dev tool WTUs for developer ultra tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/ai_dev_tool_wtu_tier_developer_ultra_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/ai_dev_tool_wtu_tier_developer_ultra_regional/usage
BETA
(project)
Number of AI dev tool WTUs for developer ultra tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/ai_dev_tool_wtu_tier_developer_ultra_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/ai_dev_tool_wtu_tier_enterprise_plus_regional/exceeded
BETA
(project)
Number of AI dev tool WTUs for enterprise plus tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/ai_dev_tool_wtu_tier_enterprise_plus_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/ai_dev_tool_wtu_tier_enterprise_plus_regional/limit
BETA
(project)
Number of AI dev tool WTUs for enterprise plus tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/ai_dev_tool_wtu_tier_enterprise_plus_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/ai_dev_tool_wtu_tier_enterprise_plus_regional/usage
BETA
(project)
Number of AI dev tool WTUs for enterprise plus tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/ai_dev_tool_wtu_tier_enterprise_plus_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/ai_dev_tool_wtu_tier_enterprise_standard_regional/exceeded
BETA
(project)
Number of AI dev tool WTUs for enterprise standard tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/ai_dev_tool_wtu_tier_enterprise_standard_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/ai_dev_tool_wtu_tier_enterprise_standard_regional/limit
BETA
(project)
Number of AI dev tool WTUs for enterprise standard tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/ai_dev_tool_wtu_tier_enterprise_standard_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/ai_dev_tool_wtu_tier_enterprise_standard_regional/usage
BETA
(project)
Number of AI dev tool WTUs for enterprise standard tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/ai_dev_tool_wtu_tier_enterprise_standard_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/coscientist_start_instance_tier_regional/exceeded
BETA
(project)
Coscientist start instance requests per user independent of tier. quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/coscientist_start_instance_tier_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/coscientist_start_instance_tier_regional/limit
BETA
(project)
Coscientist start instance requests per user independent of tier. quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/coscientist_start_instance_tier_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/coscientist_start_instance_tier_regional/usage
BETA
(project)
Coscientist start instance requests per user independent of tier. quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/coscientist_start_instance_tier_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/coscientist_start_instance_upper_bound_regional/exceeded
BETA
(project)
Coscientist start instance upper bound for all tiers. quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/coscientist_start_instance_upper_bound_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/coscientist_start_instance_upper_bound_regional/limit
BETA
(project)
Coscientist start instance upper bound for all tiers. quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/coscientist_start_instance_upper_bound_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/coscientist_start_instance_upper_bound_regional/usage
BETA
(project)
Coscientist start instance upper bound for all tiers. quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/coscientist_start_instance_upper_bound_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/data_stores_regional/exceeded
BETA
(project)
Regional number of data stores. quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/data_stores_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/data_stores_regional/limit
BETA
(project)
Regional number of data stores. quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/data_stores_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/data_stores_regional/usage
BETA
(project)
Regional number of data stores. quota usage
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/data_stores_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/deep_research_query_total_tier_business_regional/exceeded
BETA
(project)
Deep research query total daily quota for business tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/deep_research_query_total_tier_business_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/deep_research_query_total_tier_business_regional/limit
BETA
(project)
Deep research query total daily quota for business tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/deep_research_query_total_tier_business_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/deep_research_query_total_tier_business_regional/usage
BETA
(project)
Deep research query total daily quota for business tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/deep_research_query_total_tier_business_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/deep_research_query_total_tier_developer_ultra_regional/exceeded
BETA
(project)
Deep research query total daily quota for developer pro tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/deep_research_query_total_tier_developer_ultra_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/deep_research_query_total_tier_developer_ultra_regional/limit
BETA
(project)
Deep research query total daily quota for developer pro tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/deep_research_query_total_tier_developer_ultra_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/deep_research_query_total_tier_developer_ultra_regional/usage
BETA
(project)
Deep research query total daily quota for developer pro tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/deep_research_query_total_tier_developer_ultra_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/deep_research_query_total_tier_edu_pro_regional/exceeded
BETA
(project)
Deep research query total daily quota for edu pro tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/deep_research_query_total_tier_edu_pro_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/deep_research_query_total_tier_edu_pro_regional/limit
BETA
(project)
Deep research query total daily quota for edu pro tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/deep_research_query_total_tier_edu_pro_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/deep_research_query_total_tier_edu_pro_regional/usage
BETA
(project)
Deep research query total daily quota for edu pro tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/deep_research_query_total_tier_edu_pro_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/deep_research_query_total_tier_edu_regional/exceeded
BETA
(project)
Deep research query total daily quota for edu tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/deep_research_query_total_tier_edu_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/deep_research_query_total_tier_edu_regional/limit
BETA
(project)
Deep research query total daily quota for edu tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/deep_research_query_total_tier_edu_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/deep_research_query_total_tier_edu_regional/usage
BETA
(project)
Deep research query total daily quota for edu tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/deep_research_query_total_tier_edu_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/deep_research_query_total_tier_enterprise_emerging_regional/exceeded
BETA
(project)
Deep research query total daily quota for enterprise emerging tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/deep_research_query_total_tier_enterprise_emerging_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/deep_research_query_total_tier_enterprise_emerging_regional/limit
BETA
(project)
Deep research query total daily quota for enterprise emerging tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/deep_research_query_total_tier_enterprise_emerging_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/deep_research_query_total_tier_enterprise_emerging_regional/usage
BETA
(project)
Deep research query total daily quota for enterprise emerging tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/deep_research_query_total_tier_enterprise_emerging_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/deep_research_query_total_tier_enterprise_regional/exceeded
BETA
(project)
Deep research query total daily quota for enterprise plus tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/deep_research_query_total_tier_enterprise_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/deep_research_query_total_tier_enterprise_regional/limit
BETA
(project)
Deep research query total daily quota for enterprise plus tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/deep_research_query_total_tier_enterprise_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/deep_research_query_total_tier_enterprise_regional/usage
BETA
(project)
Deep research query total daily quota for enterprise plus tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/deep_research_query_total_tier_enterprise_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/deep_research_query_total_tier_enterprise_standard_regional/exceeded
BETA
(project)
Deep research query total daily quota for enterprise standard tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/deep_research_query_total_tier_enterprise_standard_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/deep_research_query_total_tier_enterprise_standard_regional/limit
BETA
(project)
Deep research query total daily quota for enterprise standard tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/deep_research_query_total_tier_enterprise_standard_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/deep_research_query_total_tier_enterprise_standard_regional/usage
BETA
(project)
Deep research query total daily quota for enterprise standard tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/deep_research_query_total_tier_enterprise_standard_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/deep_research_query_total_tier_frontline_worker_regional/exceeded
BETA
(project)
Deep research query total daily quota for frontline worker tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/deep_research_query_total_tier_frontline_worker_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/deep_research_query_total_tier_frontline_worker_regional/limit
BETA
(project)
Deep research query total daily quota for frontline worker tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/deep_research_query_total_tier_frontline_worker_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/deep_research_query_total_tier_frontline_worker_regional/usage
BETA
(project)
Deep research query total daily quota for frontline worker tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/deep_research_query_total_tier_frontline_worker_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/deep_research_query_total_tier_starter_regional/exceeded
BETA
(project)
Deep research query total daily quota for starter tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/deep_research_query_total_tier_starter_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/deep_research_query_total_tier_starter_regional/limit
BETA
(project)
Deep research query total daily quota for starter tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/deep_research_query_total_tier_starter_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/deep_research_query_total_tier_starter_regional/usage
BETA
(project)
Deep research query total daily quota for starter tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/deep_research_query_total_tier_starter_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/deep_research_query_total_tier_starter_v2_regional/exceeded
BETA
(project)
Deep research query total quota for starter tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/deep_research_query_total_tier_starter_v2_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/deep_research_query_total_tier_starter_v2_regional/limit
BETA
(project)
Deep research query total quota for starter tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/deep_research_query_total_tier_starter_v2_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/deep_research_query_total_tier_starter_v2_regional/usage
BETA
(project)
Deep research query total quota for starter tier quota usage
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/deep_research_query_total_tier_starter_v2_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/document_size_tier_business_regional/exceeded
BETA
(project)
Document storage size in term of bytes for business tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/document_size_tier_business_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/document_size_tier_business_regional/limit
BETA
(project)
Document storage size in term of bytes for business tier quota limit
GAUGE , INT64 , By
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/document_size_tier_business_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/document_size_tier_business_regional/usage
BETA
(project)
Document storage size in term of bytes for business tier quota usage
GAUGE , INT64 , By
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/document_size_tier_business_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/document_size_tier_starter_regional/exceeded
BETA
(project)
Document storage size in term of bytes for starter tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/document_size_tier_starter_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/document_size_tier_starter_regional/limit
BETA
(project)
Document storage size in term of bytes for starter tier quota limit
GAUGE , INT64 , By
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/document_size_tier_starter_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/document_size_tier_starter_regional/usage
BETA
(project)
Document storage size in term of bytes for starter tier quota usage
GAUGE , INT64 , By
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/document_size_tier_starter_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/documents_regional/exceeded
BETA
(project)
Regional number of documents. quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/documents_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/documents_regional/limit
BETA
(project)
Regional number of documents. quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/documents_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/documents_regional/usage
BETA
(project)
Regional number of documents. quota usage
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/documents_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/engines_regional/exceeded
BETA
(project)
Regional number of engines. quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/engines_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/engines_regional/limit
BETA
(project)
Regional number of engines. quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/engines_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/engines_regional/usage
BETA
(project)
Regional number of engines. quota usage
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/engines_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/grounding_with_search_tier_business_regional/exceeded
BETA
(project)
Grounding with Google search for business tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/grounding_with_search_tier_business_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/grounding_with_search_tier_business_regional/limit
BETA
(project)
Grounding with Google search for business tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/grounding_with_search_tier_business_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/grounding_with_search_tier_business_regional/usage
BETA
(project)
Grounding with Google search for business tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/grounding_with_search_tier_business_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/grounding_with_search_tier_developer_ultra_regional/exceeded
BETA
(project)
Grounding with Google search for developer ultra tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/grounding_with_search_tier_developer_ultra_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/grounding_with_search_tier_developer_ultra_regional/limit
BETA
(project)
Grounding with Google search for developer ultra tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/grounding_with_search_tier_developer_ultra_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/grounding_with_search_tier_developer_ultra_regional/usage
BETA
(project)
Grounding with Google search for developer ultra tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/grounding_with_search_tier_developer_ultra_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/grounding_with_search_tier_edu_emerging_regional/exceeded
BETA
(project)
Grounding with Google search for edu emerging tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/grounding_with_search_tier_edu_emerging_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/grounding_with_search_tier_edu_emerging_regional/limit
BETA
(project)
Grounding with Google search for edu emerging tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/grounding_with_search_tier_edu_emerging_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/grounding_with_search_tier_edu_emerging_regional/usage
BETA
(project)
Grounding with Google search for edu emerging tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/grounding_with_search_tier_edu_emerging_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/grounding_with_search_tier_edu_pro_emerging_regional/exceeded
BETA
(project)
Grounding with Google search for edu pro emerging tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/grounding_with_search_tier_edu_pro_emerging_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/grounding_with_search_tier_edu_pro_emerging_regional/limit
BETA
(project)
Grounding with Google search for edu pro emerging tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/grounding_with_search_tier_edu_pro_emerging_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/grounding_with_search_tier_edu_pro_emerging_regional/usage
BETA
(project)
Grounding with Google search for edu pro emerging tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/grounding_with_search_tier_edu_pro_emerging_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/grounding_with_search_tier_edu_pro_regional/exceeded
BETA
(project)
Grounding with Google search for edu pro tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/grounding_with_search_tier_edu_pro_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/grounding_with_search_tier_edu_pro_regional/limit
BETA
(project)
Grounding with Google search for edu pro tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/grounding_with_search_tier_edu_pro_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/grounding_with_search_tier_edu_pro_regional/usage
BETA
(project)
Grounding with Google search for edu pro tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/grounding_with_search_tier_edu_pro_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/grounding_with_search_tier_edu_regional/exceeded
BETA
(project)
Grounding with Google search for edu tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/grounding_with_search_tier_edu_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/grounding_with_search_tier_edu_regional/limit
BETA
(project)
Grounding with Google search for edu tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/grounding_with_search_tier_edu_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/grounding_with_search_tier_edu_regional/usage
BETA
(project)
Grounding with Google search for edu tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/grounding_with_search_tier_edu_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/grounding_with_search_tier_enterprise_emerging_regional/exceeded
BETA
(project)
Grounding with Google search for enterprise emerging tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/grounding_with_search_tier_enterprise_emerging_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/grounding_with_search_tier_enterprise_emerging_regional/limit
BETA
(project)
Grounding with Google search for enterprise emerging tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/grounding_with_search_tier_enterprise_emerging_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/grounding_with_search_tier_enterprise_emerging_regional/usage
BETA
(project)
Grounding with Google search for enterprise emerging tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/grounding_with_search_tier_enterprise_emerging_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/grounding_with_search_tier_enterprise_plus_regional/exceeded
BETA
(project)
Grounding with Google search for enterprise plus tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/grounding_with_search_tier_enterprise_plus_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/grounding_with_search_tier_enterprise_plus_regional/limit
BETA
(project)
Grounding with Google search for enterprise plus tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/grounding_with_search_tier_enterprise_plus_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/grounding_with_search_tier_enterprise_plus_regional/usage
BETA
(project)
Grounding with Google search for enterprise plus tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/grounding_with_search_tier_enterprise_plus_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/grounding_with_search_tier_enterprise_regional/exceeded
BETA
(project)
Grounding with Google search for enterprise tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/grounding_with_search_tier_enterprise_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/grounding_with_search_tier_enterprise_regional/limit
BETA
(project)
Grounding with Google search for enterprise tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/grounding_with_search_tier_enterprise_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/grounding_with_search_tier_enterprise_regional/usage
BETA
(project)
Grounding with Google search for enterprise tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/grounding_with_search_tier_enterprise_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/grounding_with_search_tier_frontline_starter_regional/exceeded
BETA
(project)
Grounding with Google search for frontline starter tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/grounding_with_search_tier_frontline_starter_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/grounding_with_search_tier_frontline_starter_regional/limit
BETA
(project)
Grounding with Google search for frontline starter tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/grounding_with_search_tier_frontline_starter_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/grounding_with_search_tier_frontline_starter_regional/usage
BETA
(project)
Grounding with Google search for frontline starter tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/grounding_with_search_tier_frontline_starter_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/grounding_with_search_tier_frontline_worker_regional/exceeded
BETA
(project)
Grounding with Google search for frontline worker tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/grounding_with_search_tier_frontline_worker_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/grounding_with_search_tier_frontline_worker_regional/limit
BETA
(project)
Grounding with Google search for frontline worker tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/grounding_with_search_tier_frontline_worker_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/grounding_with_search_tier_frontline_worker_regional/usage
BETA
(project)
Grounding with Google search for frontline worker tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/grounding_with_search_tier_frontline_worker_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/grounding_with_search_tier_starter_regional/exceeded
BETA
(project)
Grounding with Google search for starter tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/grounding_with_search_tier_starter_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/grounding_with_search_tier_starter_regional/limit
BETA
(project)
Grounding with Google search for starter tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/grounding_with_search_tier_starter_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/grounding_with_search_tier_starter_regional/usage
BETA
(project)
Grounding with Google search for starter tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/grounding_with_search_tier_starter_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/idea_gen_start_instance_tier_business_regional/exceeded
BETA
(project)
Idea Generation start instance requests per user for the business tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/idea_gen_start_instance_tier_business_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/idea_gen_start_instance_tier_business_regional/limit
BETA
(project)
Idea Generation start instance requests per user for the business tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/idea_gen_start_instance_tier_business_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/idea_gen_start_instance_tier_business_regional/usage
BETA
(project)
Idea Generation start instance requests per user for the business tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/idea_gen_start_instance_tier_business_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/idea_gen_start_instance_tier_developer_ultra_regional/exceeded
BETA
(project)
Idea Generation start instance requests per user for the developer ultra tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/idea_gen_start_instance_tier_developer_ultra_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/idea_gen_start_instance_tier_developer_ultra_regional/limit
BETA
(project)
Idea Generation start instance requests per user for the developer ultra tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/idea_gen_start_instance_tier_developer_ultra_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/idea_gen_start_instance_tier_developer_ultra_regional/usage
BETA
(project)
Idea Generation start instance requests per user for the developer ultra tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/idea_gen_start_instance_tier_developer_ultra_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/idea_gen_start_instance_tier_edu_pro_regional/exceeded
BETA
(project)
Idea Generation start instance requests per user for the edu pro tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/idea_gen_start_instance_tier_edu_pro_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/idea_gen_start_instance_tier_edu_pro_regional/limit
BETA
(project)
Idea Generation start instance requests per user for the edu pro tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/idea_gen_start_instance_tier_edu_pro_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/idea_gen_start_instance_tier_edu_pro_regional/usage
BETA
(project)
Idea Generation start instance requests per user for the edu pro tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/idea_gen_start_instance_tier_edu_pro_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/idea_gen_start_instance_tier_enterprise_regional/exceeded
BETA
(project)
Idea Generation start instance requests per user for the enterprise plus tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/idea_gen_start_instance_tier_enterprise_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/idea_gen_start_instance_tier_enterprise_regional/limit
BETA
(project)
Idea Generation start instance requests per user for the enterprise plus tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/idea_gen_start_instance_tier_enterprise_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/idea_gen_start_instance_tier_enterprise_regional/usage
BETA
(project)
Idea Generation start instance requests per user for the enterprise plus tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/idea_gen_start_instance_tier_enterprise_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/idea_gen_start_instance_tier_enterprise_standard_regional/exceeded
BETA
(project)
Idea Generation start instance requests per user for the enterprise standard tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/idea_gen_start_instance_tier_enterprise_standard_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/idea_gen_start_instance_tier_enterprise_standard_regional/limit
BETA
(project)
Idea Generation start instance requests per user for the enterprise standard tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/idea_gen_start_instance_tier_enterprise_standard_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/idea_gen_start_instance_tier_enterprise_standard_regional/usage
BETA
(project)
Idea Generation start instance requests per user for the enterprise standard tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/idea_gen_start_instance_tier_enterprise_standard_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/idea_gen_start_instance_tier_frontline_worker_regional/exceeded
BETA
(project)
Idea Generation start instance requests per user for the frontline worker tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/idea_gen_start_instance_tier_frontline_worker_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/idea_gen_start_instance_tier_frontline_worker_regional/limit
BETA
(project)
Idea Generation start instance requests per user for the frontline worker tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/idea_gen_start_instance_tier_frontline_worker_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/idea_gen_start_instance_tier_frontline_worker_regional/usage
BETA
(project)
Idea Generation start instance requests per user for the frontline worker tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/idea_gen_start_instance_tier_frontline_worker_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/idea_gen_start_instance_tier_starter_regional/exceeded
BETA
(project)
Idea Generation start instance requests per user for the starter tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/idea_gen_start_instance_tier_starter_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/idea_gen_start_instance_tier_starter_regional/limit
BETA
(project)
Idea Generation start instance requests per user for the starter tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/idea_gen_start_instance_tier_starter_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/idea_gen_start_instance_tier_starter_regional/usage
BETA
(project)
Idea Generation start instance requests per user for the starter tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/idea_gen_start_instance_tier_starter_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/image_gen_tier_business_regional/exceeded
BETA
(project)
Image generation for business tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/image_gen_tier_business_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/image_gen_tier_business_regional/limit
BETA
(project)
Image generation for business tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/image_gen_tier_business_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/image_gen_tier_business_regional/usage
BETA
(project)
Image generation for business tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/image_gen_tier_business_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/image_gen_tier_developer_ultra_regional/exceeded
BETA
(project)
Image generation for developer ultra tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/image_gen_tier_developer_ultra_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/image_gen_tier_developer_ultra_regional/limit
BETA
(project)
Image generation for developer ultra tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/image_gen_tier_developer_ultra_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/image_gen_tier_developer_ultra_regional/usage
BETA
(project)
Image generation for developer ultra tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/image_gen_tier_developer_ultra_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/image_gen_tier_edu_pro_regional/exceeded
BETA
(project)
Image generation for edu pro tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/image_gen_tier_edu_pro_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/image_gen_tier_edu_pro_regional/limit
BETA
(project)
Image generation for edu pro tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/image_gen_tier_edu_pro_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/image_gen_tier_edu_pro_regional/usage
BETA
(project)
Image generation for edu pro tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/image_gen_tier_edu_pro_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/image_gen_tier_edu_regional/exceeded
BETA
(project)
Image generation for edu tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/image_gen_tier_edu_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/image_gen_tier_edu_regional/limit
BETA
(project)
Image generation for edu tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/image_gen_tier_edu_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/image_gen_tier_edu_regional/usage
BETA
(project)
Image generation for edu tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/image_gen_tier_edu_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/image_gen_tier_enterprise_plus_regional/exceeded
BETA
(project)
Image generation for enterprise plus tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/image_gen_tier_enterprise_plus_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/image_gen_tier_enterprise_plus_regional/limit
BETA
(project)
Image generation for enterprise plus tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/image_gen_tier_enterprise_plus_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/image_gen_tier_enterprise_plus_regional/usage
BETA
(project)
Image generation for enterprise plus tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/image_gen_tier_enterprise_plus_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/image_gen_tier_enterprise_regional/exceeded
BETA
(project)
Image generation for enterprise tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/image_gen_tier_enterprise_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/image_gen_tier_enterprise_regional/limit
BETA
(project)
Image generation for enterprise tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/image_gen_tier_enterprise_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/image_gen_tier_enterprise_regional/usage
BETA
(project)
Image generation for enterprise tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/image_gen_tier_enterprise_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/image_gen_tier_frontline_regional/exceeded
BETA
(project)
Image generation for frontline tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/image_gen_tier_frontline_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/image_gen_tier_frontline_regional/limit
BETA
(project)
Image generation for frontline tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/image_gen_tier_frontline_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/image_gen_tier_frontline_regional/usage
BETA
(project)
Image generation for frontline tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/image_gen_tier_frontline_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/image_gen_tier_starter_regional/exceeded
BETA
(project)
Image generation for starter tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/image_gen_tier_starter_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/image_gen_tier_starter_regional/limit
BETA
(project)
Image generation for starter tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/image_gen_tier_starter_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/image_gen_tier_starter_regional/usage
BETA
(project)
Image generation for starter tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/image_gen_tier_starter_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/search_requests_regional/exceeded
BETA
(project)
Regional search requests. quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/search_requests_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/search_requests_regional/limit
BETA
(project)
Regional search requests. quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/search_requests_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/search_requests_regional/usage
BETA
(project)
Regional search requests. quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/search_requests_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/search_tier_frontline_worker_regional/exceeded
BETA
(project)
Enterprise search for frontline worker tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/search_tier_frontline_worker_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/search_tier_frontline_worker_regional/limit
BETA
(project)
Enterprise search for frontline worker tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/search_tier_frontline_worker_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/search_tier_frontline_worker_regional/usage
BETA
(project)
Enterprise search for frontline worker tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/search_tier_frontline_worker_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/tasks_and_actions_tier_business_regional/exceeded
BETA
(project)
Tasks and actions for business tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/tasks_and_actions_tier_business_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/tasks_and_actions_tier_business_regional/limit
BETA
(project)
Tasks and actions for business tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/tasks_and_actions_tier_business_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/tasks_and_actions_tier_business_regional/usage
BETA
(project)
Tasks and actions for business tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/tasks_and_actions_tier_business_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/tasks_and_actions_tier_developer_ultra_regional/exceeded
BETA
(project)
Tasks and actions for developer ultra tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/tasks_and_actions_tier_developer_ultra_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/tasks_and_actions_tier_developer_ultra_regional/limit
BETA
(project)
Tasks and actions for developer ultra tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/tasks_and_actions_tier_developer_ultra_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/tasks_and_actions_tier_developer_ultra_regional/usage
BETA
(project)
Tasks and actions for developer ultra tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/tasks_and_actions_tier_developer_ultra_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/tasks_and_actions_tier_edu_emerging_regional/exceeded
BETA
(project)
Tasks and actions for edu emerging tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/tasks_and_actions_tier_edu_emerging_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/tasks_and_actions_tier_edu_emerging_regional/limit
BETA
(project)
Tasks and actions for edu emerging tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/tasks_and_actions_tier_edu_emerging_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/tasks_and_actions_tier_edu_emerging_regional/usage
BETA
(project)
Tasks and actions for edu emerging tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/tasks_and_actions_tier_edu_emerging_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/tasks_and_actions_tier_edu_pro_emerging_regional/exceeded
BETA
(project)
Tasks and actions for edu pro emerging tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/tasks_and_actions_tier_edu_pro_emerging_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/tasks_and_actions_tier_edu_pro_emerging_regional/limit
BETA
(project)
Tasks and actions for edu pro emerging tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/tasks_and_actions_tier_edu_pro_emerging_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/tasks_and_actions_tier_edu_pro_emerging_regional/usage
BETA
(project)
Tasks and actions for edu pro emerging tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/tasks_and_actions_tier_edu_pro_emerging_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/tasks_and_actions_tier_edu_pro_regional/exceeded
BETA
(project)
Tasks and actions for edu pro tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/tasks_and_actions_tier_edu_pro_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/tasks_and_actions_tier_edu_pro_regional/limit
BETA
(project)
Tasks and actions for edu pro tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/tasks_and_actions_tier_edu_pro_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/tasks_and_actions_tier_edu_pro_regional/usage
BETA
(project)
Tasks and actions for edu pro tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/tasks_and_actions_tier_edu_pro_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/tasks_and_actions_tier_edu_regional/exceeded
BETA
(project)
Tasks and actions for edu tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/tasks_and_actions_tier_edu_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/tasks_and_actions_tier_edu_regional/limit
BETA
(project)
Tasks and actions for edu tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/tasks_and_actions_tier_edu_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/tasks_and_actions_tier_edu_regional/usage
BETA
(project)
Tasks and actions for edu tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/tasks_and_actions_tier_edu_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/tasks_and_actions_tier_enterprise_emerging_regional/exceeded
BETA
(project)
Tasks and actions for enterprise emerging tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/tasks_and_actions_tier_enterprise_emerging_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/tasks_and_actions_tier_enterprise_emerging_regional/limit
BETA
(project)
Tasks and actions for enterprise emerging tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/tasks_and_actions_tier_enterprise_emerging_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/tasks_and_actions_tier_enterprise_emerging_regional/usage
BETA
(project)
Tasks and actions for enterprise emerging tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/tasks_and_actions_tier_enterprise_emerging_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/tasks_and_actions_tier_enterprise_plus_regional/exceeded
BETA
(project)
Tasks and actions for enterprise plus tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/tasks_and_actions_tier_enterprise_plus_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/tasks_and_actions_tier_enterprise_plus_regional/limit
BETA
(project)
Tasks and actions for enterprise plus tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/tasks_and_actions_tier_enterprise_plus_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/tasks_and_actions_tier_enterprise_plus_regional/usage
BETA
(project)
Tasks and actions for enterprise plus tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/tasks_and_actions_tier_enterprise_plus_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/tasks_and_actions_tier_enterprise_regional/exceeded
BETA
(project)
Tasks and actions for enterprise tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/tasks_and_actions_tier_enterprise_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/tasks_and_actions_tier_enterprise_regional/limit
BETA
(project)
Tasks and actions for enterprise tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/tasks_and_actions_tier_enterprise_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/tasks_and_actions_tier_enterprise_regional/usage
BETA
(project)
Tasks and actions for enterprise tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/tasks_and_actions_tier_enterprise_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/tasks_and_actions_tier_frontline_starter_regional/exceeded
BETA
(project)
Tasks and actions for frontline starter tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/tasks_and_actions_tier_frontline_starter_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/tasks_and_actions_tier_frontline_starter_regional/limit
BETA
(project)
Tasks and actions for frontline starter tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/tasks_and_actions_tier_frontline_starter_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/tasks_and_actions_tier_frontline_starter_regional/usage
BETA
(project)
Tasks and actions for frontline starter tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/tasks_and_actions_tier_frontline_starter_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/tasks_and_actions_tier_frontline_worker_regional/exceeded
BETA
(project)
Tasks and actions for frontline worker tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/tasks_and_actions_tier_frontline_worker_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/tasks_and_actions_tier_frontline_worker_regional/limit
BETA
(project)
Tasks and actions for frontline worker tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/tasks_and_actions_tier_frontline_worker_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/tasks_and_actions_tier_frontline_worker_regional/usage
BETA
(project)
Tasks and actions for frontline worker tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/tasks_and_actions_tier_frontline_worker_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/tasks_and_actions_tier_starter_regional/exceeded
BETA
(project)
Tasks and actions for starter tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/tasks_and_actions_tier_starter_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/tasks_and_actions_tier_starter_regional/limit
BETA
(project)
Tasks and actions for starter tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/tasks_and_actions_tier_starter_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/tasks_and_actions_tier_starter_regional/usage
BETA
(project)
Tasks and actions for starter tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/tasks_and_actions_tier_starter_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/text_answer_gen_tier_business_standard_regional/exceeded
BETA
(project)
Text answer generation for business tier standard model quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/text_answer_gen_tier_business_standard_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/text_answer_gen_tier_business_standard_regional/limit
BETA
(project)
Text answer generation for business tier standard model quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/text_answer_gen_tier_business_standard_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/text_answer_gen_tier_business_standard_regional/usage
BETA
(project)
Text answer generation for business tier standard model quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/text_answer_gen_tier_business_standard_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/text_answer_gen_tier_developer_ultra_regional/exceeded
BETA
(project)
Text answer generation for developer ultra tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/text_answer_gen_tier_developer_ultra_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/text_answer_gen_tier_developer_ultra_regional/limit
BETA
(project)
Text answer generation for developer ultra tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/text_answer_gen_tier_developer_ultra_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/text_answer_gen_tier_developer_ultra_regional/usage
BETA
(project)
Text answer generation for developer ultra tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/text_answer_gen_tier_developer_ultra_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/text_answer_gen_tier_edu_emerging_regional/exceeded
BETA
(project)
Text answer generation for edu emerging tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/text_answer_gen_tier_edu_emerging_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/text_answer_gen_tier_edu_emerging_regional/limit
BETA
(project)
Text answer generation for edu emerging tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/text_answer_gen_tier_edu_emerging_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/text_answer_gen_tier_edu_emerging_regional/usage
BETA
(project)
Text answer generation for edu emerging tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/text_answer_gen_tier_edu_emerging_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/text_answer_gen_tier_edu_pro_emerging_regional/exceeded
BETA
(project)
Text answer generation for edu pro emerging tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/text_answer_gen_tier_edu_pro_emerging_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/text_answer_gen_tier_edu_pro_emerging_regional/limit
BETA
(project)
Text answer generation for edu pro emerging tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/text_answer_gen_tier_edu_pro_emerging_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/text_answer_gen_tier_edu_pro_emerging_regional/usage
BETA
(project)
Text answer generation for edu pro emerging tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/text_answer_gen_tier_edu_pro_emerging_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/text_answer_gen_tier_edu_pro_regional/exceeded
BETA
(project)
Text answer generation for edu pro tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/text_answer_gen_tier_edu_pro_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/text_answer_gen_tier_edu_pro_regional/limit
BETA
(project)
Text answer generation for edu pro tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/text_answer_gen_tier_edu_pro_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/text_answer_gen_tier_edu_pro_regional/usage
BETA
(project)
Text answer generation for edu pro tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/text_answer_gen_tier_edu_pro_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/text_answer_gen_tier_edu_regional/exceeded
BETA
(project)
Text answer generation for edu tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/text_answer_gen_tier_edu_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/text_answer_gen_tier_edu_regional/limit
BETA
(project)
Text answer generation for edu tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/text_answer_gen_tier_edu_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/text_answer_gen_tier_edu_regional/usage
BETA
(project)
Text answer generation for edu tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/text_answer_gen_tier_edu_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/text_answer_gen_tier_enterprise_emerging_regional/exceeded
BETA
(project)
Text answer generation for enterprise emerging tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/text_answer_gen_tier_enterprise_emerging_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/text_answer_gen_tier_enterprise_emerging_regional/limit
BETA
(project)
Text answer generation for enterprise emerging tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/text_answer_gen_tier_enterprise_emerging_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/text_answer_gen_tier_enterprise_emerging_regional/usage
BETA
(project)
Text answer generation for enterprise emerging tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/text_answer_gen_tier_enterprise_emerging_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/text_answer_gen_tier_enterprise_plus_regional/exceeded
BETA
(project)
Text answer generation for enterprise plus tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/text_answer_gen_tier_enterprise_plus_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/text_answer_gen_tier_enterprise_plus_regional/limit
BETA
(project)
Text answer generation for enterprise plus tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/text_answer_gen_tier_enterprise_plus_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/text_answer_gen_tier_enterprise_plus_regional/usage
BETA
(project)
Text answer generation for enterprise plus tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/text_answer_gen_tier_enterprise_plus_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/text_answer_gen_tier_enterprise_standard_regional/exceeded
BETA
(project)
Text answer generation for enterprise tier standard model quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/text_answer_gen_tier_enterprise_standard_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/text_answer_gen_tier_enterprise_standard_regional/limit
BETA
(project)
Text answer generation for enterprise tier standard model quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/text_answer_gen_tier_enterprise_standard_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/text_answer_gen_tier_enterprise_standard_regional/usage
BETA
(project)
Text answer generation for enterprise tier standard model quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/text_answer_gen_tier_enterprise_standard_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/text_answer_gen_tier_frontline_starter_regional/exceeded
BETA
(project)
Text answer generation for frontline starter tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/text_answer_gen_tier_frontline_starter_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/text_answer_gen_tier_frontline_starter_regional/limit
BETA
(project)
Text answer generation for frontline starter tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/text_answer_gen_tier_frontline_starter_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/text_answer_gen_tier_frontline_starter_regional/usage
BETA
(project)
Text answer generation for frontline starter tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/text_answer_gen_tier_frontline_starter_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/text_answer_gen_tier_frontline_worker_regional/exceeded
BETA
(project)
Text answer generation for frontline worker tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/text_answer_gen_tier_frontline_worker_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/text_answer_gen_tier_frontline_worker_regional/limit
BETA
(project)
Text answer generation for frontline worker tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/text_answer_gen_tier_frontline_worker_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/text_answer_gen_tier_frontline_worker_regional/usage
BETA
(project)
Text answer generation for frontline worker tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/text_answer_gen_tier_frontline_worker_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/text_answer_gen_tier_starter_regional/exceeded
BETA
(project)
Text answer generation for starter tier model quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/text_answer_gen_tier_starter_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/text_answer_gen_tier_starter_regional/limit
BETA
(project)
Text answer generation for starter tier model quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/text_answer_gen_tier_starter_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/text_answer_gen_tier_starter_regional/usage
BETA
(project)
Text answer generation for starter tier model quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/text_answer_gen_tier_starter_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/total_document_size_regional/exceeded
BETA
(project)
Total stored document size quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/total_document_size_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/total_document_size_regional/limit
BETA
(project)
Total stored document size quota limit
GAUGE , INT64 , By
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/total_document_size_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/total_document_size_regional/usage
BETA
(project)
Total stored document size quota usage
GAUGE , INT64 , By
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/total_document_size_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/user_events_regional/exceeded
BETA
(project)
Regional number of user events. quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/user_events_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/user_events_regional/limit
BETA
(project)
Regional number of user events. quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/user_events_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/user_events_regional/usage
BETA
(project)
Regional number of user events. quota usage
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/user_events_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/video_gen_numbers_tier_business_regional/exceeded
BETA
(project)
Number of videos generated for business tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/video_gen_numbers_tier_business_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/video_gen_numbers_tier_business_regional/limit
BETA
(project)
Number of videos generated for business tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/video_gen_numbers_tier_business_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/video_gen_numbers_tier_business_regional/usage
BETA
(project)
Number of videos generated for business tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/video_gen_numbers_tier_business_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/video_gen_numbers_tier_developer_ultra_regional/exceeded
BETA
(project)
Number of videos generated for developer ultra tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/video_gen_numbers_tier_developer_ultra_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/video_gen_numbers_tier_developer_ultra_regional/limit
BETA
(project)
Number of videos generated for developer ultra tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/video_gen_numbers_tier_developer_ultra_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/video_gen_numbers_tier_developer_ultra_regional/usage
BETA
(project)
Number of videos generated for developer ultra tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/video_gen_numbers_tier_developer_ultra_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/video_gen_numbers_tier_edu_pro_regional/exceeded
BETA
(project)
Number of videos generated for edu pro tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/video_gen_numbers_tier_edu_pro_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/video_gen_numbers_tier_edu_pro_regional/limit
BETA
(project)
Number of videos generated for edu pro tier quota limit
GAUGE , INT64 , 3
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/video_gen_numbers_tier_edu_pro_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/video_gen_numbers_tier_edu_pro_regional/usage
BETA
(project)
Number of videos generated for edu pro tier quota usage
DELTA , INT64 , 3
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/video_gen_numbers_tier_edu_pro_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/video_gen_numbers_tier_edu_regional/exceeded
BETA
(project)
Number of videos generated for edu tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/video_gen_numbers_tier_edu_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/video_gen_numbers_tier_edu_regional/limit
BETA
(project)
Number of videos generated for edu tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/video_gen_numbers_tier_edu_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/video_gen_numbers_tier_edu_regional/usage
BETA
(project)
Number of videos generated for edu tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/video_gen_numbers_tier_edu_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/video_gen_numbers_tier_enterprise_plus_regional/exceeded
BETA
(project)
Number of videos generated for enterprise plus tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/video_gen_numbers_tier_enterprise_plus_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/video_gen_numbers_tier_enterprise_plus_regional/limit
BETA
(project)
Number of videos generated for enterprise plus tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/video_gen_numbers_tier_enterprise_plus_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/video_gen_numbers_tier_enterprise_plus_regional/usage
BETA
(project)
Number of videos generated for enterprise plus tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/video_gen_numbers_tier_enterprise_plus_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/video_gen_numbers_tier_enterprise_regional/exceeded
BETA
(project)
Number of videos generated for enterprise tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/video_gen_numbers_tier_enterprise_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/video_gen_numbers_tier_enterprise_regional/limit
BETA
(project)
Number of videos generated for enterprise tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/video_gen_numbers_tier_enterprise_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/video_gen_numbers_tier_enterprise_regional/usage
BETA
(project)
Number of videos generated for enterprise tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/video_gen_numbers_tier_enterprise_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/video_gen_numbers_tier_frontline_regional/exceeded
BETA
(project)
Number of videos generated for frontline tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/video_gen_numbers_tier_frontline_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/video_gen_numbers_tier_frontline_regional/limit
BETA
(project)
Number of videos generated for frontline tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/video_gen_numbers_tier_frontline_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/video_gen_numbers_tier_frontline_regional/usage
BETA
(project)
Number of videos generated for frontline tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/video_gen_numbers_tier_frontline_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/video_gen_numbers_tier_starter_regional/exceeded
BETA
(project)
Number of videos generated for starter tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/video_gen_numbers_tier_starter_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/video_gen_numbers_tier_starter_regional/limit
BETA
(project)
Number of videos generated for starter tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/video_gen_numbers_tier_starter_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/video_gen_numbers_tier_starter_regional/usage
BETA
(project)
Number of videos generated for starter tier quota usage
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/video_gen_numbers_tier_starter_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/video_gen_tier_business_regional/exceeded
BETA
(project)
Video generation seconds for business tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/video_gen_tier_business_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/video_gen_tier_business_regional/limit
BETA
(project)
Video generation seconds for business tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/video_gen_tier_business_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/video_gen_tier_business_regional/usage
BETA
(project)
Video generation seconds for business tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/video_gen_tier_business_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/video_gen_tier_developer_ultra_regional/exceeded
BETA
(project)
Video generation seconds for developer ultra tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/video_gen_tier_developer_ultra_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/video_gen_tier_developer_ultra_regional/limit
BETA
(project)
Video generation seconds for developer ultra tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/video_gen_tier_developer_ultra_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/video_gen_tier_developer_ultra_regional/usage
BETA
(project)
Video generation seconds for developer ultra tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/video_gen_tier_developer_ultra_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/video_gen_tier_edu_pro_regional/exceeded
BETA
(project)
Video generation seconds for edu pro tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/video_gen_tier_edu_pro_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/video_gen_tier_edu_pro_regional/limit
BETA
(project)
Video generation seconds for edu pro tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/video_gen_tier_edu_pro_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/video_gen_tier_edu_pro_regional/usage
BETA
(project)
Video generation seconds for edu pro tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/video_gen_tier_edu_pro_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/video_gen_tier_edu_regional/exceeded
BETA
(project)
Video generation seconds for edu tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/video_gen_tier_edu_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/video_gen_tier_edu_regional/limit
BETA
(project)
Video generation seconds for edu tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/video_gen_tier_edu_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/video_gen_tier_edu_regional/usage
BETA
(project)
Video generation seconds for edu tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/video_gen_tier_edu_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/video_gen_tier_enterprise_emerging_regional/exceeded
BETA
(project)
Video generation seconds for enterprise emerging tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/video_gen_tier_enterprise_emerging_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/video_gen_tier_enterprise_emerging_regional/limit
BETA
(project)
Video generation seconds for enterprise emerging tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/video_gen_tier_enterprise_emerging_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/video_gen_tier_enterprise_emerging_regional/usage
BETA
(project)
Video generation seconds for enterprise emerging tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/video_gen_tier_enterprise_emerging_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/video_gen_tier_enterprise_plus_regional/exceeded
BETA
(project)
Video generation seconds for enterprise plus tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/video_gen_tier_enterprise_plus_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/video_gen_tier_enterprise_plus_regional/limit
BETA
(project)
Video generation seconds for enterprise plus tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/video_gen_tier_enterprise_plus_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/video_gen_tier_enterprise_plus_regional/usage
BETA
(project)
Video generation seconds for enterprise plus tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/video_gen_tier_enterprise_plus_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/video_gen_tier_enterprise_regional/exceeded
BETA
(project)
Video generation seconds for enterprise tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/video_gen_tier_enterprise_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/video_gen_tier_enterprise_regional/limit
BETA
(project)
Video generation seconds for enterprise tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/video_gen_tier_enterprise_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/video_gen_tier_enterprise_regional/usage
BETA
(project)
Video generation seconds for enterprise tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/video_gen_tier_enterprise_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/video_gen_tier_starter_regional/exceeded
BETA
(project)
Video generation seconds for starter tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/video_gen_tier_starter_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/video_gen_tier_starter_regional/limit
BETA
(project)
Video generation seconds for starter tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/video_gen_tier_starter_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/video_gen_tier_starter_regional/usage
BETA
(project)
Video generation seconds for starter tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/video_gen_tier_starter_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/web_grounding_for_enterprise_tier_developer_ultra_regional/exceeded
BETA
(project)
Web grounding for enterprise for developer ultra tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/web_grounding_for_enterprise_tier_developer_ultra_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/web_grounding_for_enterprise_tier_developer_ultra_regional/limit
BETA
(project)
Web grounding for enterprise for developer ultra tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/web_grounding_for_enterprise_tier_developer_ultra_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/web_grounding_for_enterprise_tier_developer_ultra_regional/usage
BETA
(project)
Web grounding for enterprise for developer ultra tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/web_grounding_for_enterprise_tier_developer_ultra_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/web_grounding_for_enterprise_tier_edu_emerging_regional/exceeded
BETA
(project)
Web grounding for enterprise for edu emerging tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/web_grounding_for_enterprise_tier_edu_emerging_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/web_grounding_for_enterprise_tier_edu_emerging_regional/limit
BETA
(project)
Web grounding for enterprise for edu emerging tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/web_grounding_for_enterprise_tier_edu_emerging_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/web_grounding_for_enterprise_tier_edu_emerging_regional/usage
BETA
(project)
Web grounding for enterprise for edu emerging tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/web_grounding_for_enterprise_tier_edu_emerging_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/web_grounding_for_enterprise_tier_edu_pro_emerging_regional/exceeded
BETA
(project)
Web grounding for enterprise for edu pro emerging tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/web_grounding_for_enterprise_tier_edu_pro_emerging_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/web_grounding_for_enterprise_tier_edu_pro_emerging_regional/limit
BETA
(project)
Web grounding for enterprise for edu pro emerging tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/web_grounding_for_enterprise_tier_edu_pro_emerging_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/web_grounding_for_enterprise_tier_edu_pro_emerging_regional/usage
BETA
(project)
Web grounding for enterprise for edu pro emerging tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/web_grounding_for_enterprise_tier_edu_pro_emerging_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/web_grounding_for_enterprise_tier_edu_pro_regional/exceeded
BETA
(project)
Web grounding for enterprise for edu pro tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/web_grounding_for_enterprise_tier_edu_pro_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/web_grounding_for_enterprise_tier_edu_pro_regional/limit
BETA
(project)
Web grounding for enterprise for edu pro tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/web_grounding_for_enterprise_tier_edu_pro_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/web_grounding_for_enterprise_tier_edu_pro_regional/usage
BETA
(project)
Web grounding for enterprise for edu pro tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/web_grounding_for_enterprise_tier_edu_pro_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/web_grounding_for_enterprise_tier_edu_regional/exceeded
BETA
(project)
Web grounding for enterprise for edu tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/web_grounding_for_enterprise_tier_edu_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/web_grounding_for_enterprise_tier_edu_regional/limit
BETA
(project)
Web grounding for enterprise for edu tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/web_grounding_for_enterprise_tier_edu_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/web_grounding_for_enterprise_tier_edu_regional/usage
BETA
(project)
Web grounding for enterprise for edu tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/web_grounding_for_enterprise_tier_edu_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/web_grounding_for_enterprise_tier_enterprise_emerging_regional/exceeded
BETA
(project)
Web grounding for enterprise for enterprise emerging tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/web_grounding_for_enterprise_tier_enterprise_emerging_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/web_grounding_for_enterprise_tier_enterprise_emerging_regional/limit
BETA
(project)
Web grounding for enterprise for enterprise emerging tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/web_grounding_for_enterprise_tier_enterprise_emerging_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/web_grounding_for_enterprise_tier_enterprise_emerging_regional/usage
BETA
(project)
Web grounding for enterprise for enterprise emerging tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/web_grounding_for_enterprise_tier_enterprise_emerging_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/web_grounding_for_enterprise_tier_enterprise_plus_regional/exceeded
BETA
(project)
Web grounding for enterprise for enterprise plus tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/web_grounding_for_enterprise_tier_enterprise_plus_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/web_grounding_for_enterprise_tier_enterprise_plus_regional/limit
BETA
(project)
Web grounding for enterprise for enterprise plus tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/web_grounding_for_enterprise_tier_enterprise_plus_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/web_grounding_for_enterprise_tier_enterprise_plus_regional/usage
BETA
(project)
Web grounding for enterprise for enterprise plus tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/web_grounding_for_enterprise_tier_enterprise_plus_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/web_grounding_for_enterprise_tier_enterprise_regional/exceeded
BETA
(project)
Web grounding for enterprise for enterprise tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/web_grounding_for_enterprise_tier_enterprise_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/web_grounding_for_enterprise_tier_enterprise_regional/limit
BETA
(project)
Web grounding for enterprise for enterprise tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/web_grounding_for_enterprise_tier_enterprise_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/web_grounding_for_enterprise_tier_enterprise_regional/usage
BETA
(project)
Web grounding for enterprise for enterprise tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/web_grounding_for_enterprise_tier_enterprise_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/web_grounding_for_enterprise_tier_frontline_starter_regional/exceeded
BETA
(project)
Web grounding for enterprise for frontline starter tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/web_grounding_for_enterprise_tier_frontline_starter_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/web_grounding_for_enterprise_tier_frontline_starter_regional/limit
BETA
(project)
Web grounding for enterprise for frontline starter tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/web_grounding_for_enterprise_tier_frontline_starter_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/web_grounding_for_enterprise_tier_frontline_starter_regional/usage
BETA
(project)
Web grounding for enterprise for frontline starter tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/web_grounding_for_enterprise_tier_frontline_starter_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
quota/web_grounding_for_enterprise_tier_frontline_worker_regional/exceeded
BETA
(project)
Web grounding for enterprise for frontline worker tier quota exceeded error
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Number of attempts to exceed the limit on quota metric discoveryengine.googleapis.com/web_grounding_for_enterprise_tier_frontline_worker_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/web_grounding_for_enterprise_tier_frontline_worker_regional/limit
BETA
(project)
Web grounding for enterprise for frontline worker tier quota limit
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Current limit on quota metric discoveryengine.googleapis.com/web_grounding_for_enterprise_tier_frontline_worker_regional. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
regional_location :
The multi region custom dimension.
quota/web_grounding_for_enterprise_tier_frontline_worker_regional/usage
BETA
(project)
Web grounding for enterprise for frontline worker tier quota usage
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Current usage on quota metric discoveryengine.googleapis.com/web_grounding_for_enterprise_tier_frontline_worker_regional. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
regional_location :
The multi region custom dimension.
search_requests_regional
BETA
(project)
Regional search requests.
DELTA , INT64 , 1
discoveryengine.googleapis.com/Location
Regional search requests.
regional_location :
The multi region custom dimension.
tool_total_latencies
BETA
(project)
Gemini Enterprise Tool Total Latency
DELTA , DISTRIBUTION , ms
discoveryengine.googleapis.com/AgentToolInvocation
Distribution of total latency of Gemini Enterprise Tool invocations over a 1-minute window. Sampled every 30 seconds. After sampling, data is not visible for up to 330 seconds.
status :
The response code as a gRPC status code (e.g. OK, INVALID_ARGUMENT, etc.)
user_events_regional
BETA
(project)
Regional number of user events.
GAUGE , INT64 , 1
discoveryengine.googleapis.com/Location
Regional number of user events. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
regional_location :
The multi region custom dimension.
displayvideo
Metrics from Display & Video 360 API .
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with displayvideo.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
allocate_requests_per_advertiser
GA
(project)
All requests with advertiser id
DELTA , INT64 , 1
displayvideo.googleapis.com/Advertiser
All requests with advertiser id.
write_requests_per_advertiser
GA
(project)
Write requests with advertiser id
DELTA , INT64 , 1
displayvideo.googleapis.com/Advertiser
Write requests with advertiser id.
dlp
Metrics from Cloud Data Loss Prevention .
Launch stages of these metrics:
ALPHA
BETA
The "metric type" strings in this table must be prefixed
with dlp.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
content_bytes_inspected_count
BETA
(project)
Content bytes inspected
DELTA , INT64 , By
cloud_dlp_project
Content bytes inspected. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
content_bytes_transformed_count
BETA
(project)
Content bytes transformed
DELTA , INT64 , By
cloud_dlp_project
Content bytes transformed. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
finding_count
ALPHA
(project)
Findings
DELTA , INT64 , 1
cloud_dlp_project
Number of findings. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
info_type :
The info type of the finding.
job_result_count
BETA
(project)
Job results
DELTA , INT64 , 1
cloud_dlp_project
Job results. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
success :
(BOOL)
True if the job result was success and false otherwise.
job_trigger_run_count
BETA
(project)
Job trigger runs
DELTA , INT64 , 1
cloud_dlp_project
Job trigger runs. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
status :
Status of trigger.
job_type :
The type of job triggered.
storage_bytes_inspected_count
BETA
(project)
Storage bytes inspected
DELTA , INT64 , By
cloud_dlp_project
Storage bytes inspected. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
storage_bytes_transformed_count
BETA
(project)
Storage bytes transformed
DELTA , INT64 , By
cloud_dlp_project
Storage bytes transformed. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
dns
Metrics from Cloud DNS .
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with dns.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
query/latencies
GA
(project)
DNS server latencies
DELTA , DISTRIBUTION , ms
dns_query
Distribution of latency of DNS requests. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
query/response_count
GA
(project)
DNS response counts
DELTA , INT64 , {request}
dns_query
Rate of all DNS responses from private DNS. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
response_code :
The DNS RCODE of the response, e.g. NOERROR, NXDOMAIN, FORMERR.
earthengine
Metrics from Earth Engine .
Launch stages of these metrics:
BETA
The "metric type" strings in this table must be prefixed
with earthengine.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
project/cpu/in_progress_usage_time
BETA
(project)
In-progress EECU-seconds
DELTA , DOUBLE , s{CPU}
earthengine.googleapis.com/Project
Earth Engine compute usage of all requests in EECU-seconds (https://developers.google.com/earth-engine/guides/computation_overview#eecus). Usage is reported periodically as a request is running. Sampled every 10 seconds.
compute_type :
The type of computation. One of [online, batch, highvolume].
client_type :
The client type (if known), for example: python/v0.1.300.
workload_tag :
The workload tag (if supplied by the user), for example: my-export1.
project/cpu/usage_time
BETA
(project)
Completed EECU-seconds
DELTA , DOUBLE , s{CPU}
earthengine.googleapis.com/Project
Earth Engine compute usage of successful requests in EECU-seconds (https://developers.google.com/earth-engine/guides/computation_overview#eecus). Usage is reported when a request completes.
compute_type :
The type of computation. One of [online, batch, highvolume].
client_type :
The client type (if known), for example: python/v0.1.300.
workload_tag :
The workload tag (if supplied by the user), for example: my-export1.
project/disk/used_bytes
BETA
(project)
Used bytes
GAUGE , INT64 , By
earthengine.googleapis.com/Project
The number of bytes of asset storage used. Sampled every 1800 seconds.
edgecache
Metrics from Media CDN .
Launch stages of these metrics:
BETA
GA
The "metric type" strings in this table must be prefixed
with edgecache.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
edge_cache_route_rule/cmcd/buffer_lengths
GA
(project)
Buffer length of the client
DELTA , DISTRIBUTION , ms
edgecache.googleapis.com/EdgeCacheRouteRule
A distribution of the client's buffer length.
stream_type :
The type of stream being requested, one of [UNKNOWN, VOD, LIVE] with UNKNOWN when the stream type is not reported.
device_type :
The device type of the client (currently not implemented and is UNKNOWN).
client_country :
The country of the user sending the request based on GeoIP.
client_continent :
The continent of the user sending the request based on GeoIP, one of [Africa, Asia, Europe, North America, South America, Other].
edge_cache_route_rule/cmcd/buffer_starvation_count
GA
(project)
Buffer starvation of the client
DELTA , INT64 , 1
edgecache.googleapis.com/EdgeCacheRouteRule
A count of the client's buffer starvation.
stream_type :
The type of stream being requested, one of [UNKNOWN, VOD, LIVE] with UNKNOWN when the stream type is not reported.
device_type :
The device type of the client (currently not implemented and is UNKNOWN).
client_country :
The country of the user sending the request based on GeoIP.
client_continent :
The continent of the user sending the request based on GeoIP, one of [Africa, Asia, Europe, North America, South America, Other].
edge_cache_route_rule/cmcd/encoded_bitrates
GA
(project)
Encoded bitrate of the client
DELTA , DISTRIBUTION , kbit/s
edgecache.googleapis.com/EdgeCacheRouteRule
A distribution of the client's encoded bitrate.
stream_type :
The type of stream being requested, one of [UNKNOWN, VOD, LIVE] with UNKNOWN when the stream type is not reported.
device_type :
The device type of the client (currently not implemented and is UNKNOWN).
client_country :
The country of the user sending the request based on GeoIP.
client_continent :
The continent of the user sending the request based on GeoIP, one of [Africa, Asia, Europe, North America, South America, Other].
edge_cache_route_rule/cmcd/encoded_bitrates_over_measured_throughputs
GA
(project)
Encoded bitrate over measured throughput of the client
DELTA , DISTRIBUTION , 1
edgecache.googleapis.com/EdgeCacheRouteRule
A distribution of the client's buffer length.
stream_type :
The type of stream being requested, one of [UNKNOWN, VOD, LIVE] with UNKNOWN when the stream type is not reported.
device_type :
The device type of the client (currently not implemented and is UNKNOWN).
client_country :
The country of the user sending the request based on GeoIP.
client_continent :
The continent of the user sending the request based on GeoIP, one of [Africa, Asia, Europe, North America, South America, Other].
edge_cache_route_rule/cmcd/measured_throughputs
GA
(project)
Measured throughput of the client
DELTA , DISTRIBUTION , kbit/s
edgecache.googleapis.com/EdgeCacheRouteRule
A distribution of the client's measured throughput.
stream_type :
The type of stream being requested, one of [UNKNOWN, VOD, LIVE] with UNKNOWN when the stream type is not reported.
device_type :
The device type of the client (currently not implemented and is UNKNOWN).
client_country :
The country of the user sending the request based on GeoIP.
client_continent :
The continent of the user sending the request based on GeoIP, one of [Africa, Asia, Europe, North America, South America, Other].
edge_cache_route_rule/cmcd/playback_time_count
GA
(project)
Playback time of the client
DELTA , INT64 , 1
edgecache.googleapis.com/EdgeCacheRouteRule
A count of playback time.
stream_type :
The type of stream being requested, one of [UNKNOWN, VOD, LIVE] with UNKNOWN when the stream type is not reported.
device_type :
The device type of the client (currently not implemented and is UNKNOWN).
client_country :
The country of the user sending the request based on GeoIP.
client_continent :
The continent of the user sending the request based on GeoIP, one of [Africa, Asia, Europe, North America, South America, Other].
edge_cache_route_rule/cmcd/request_count
GA
(project)
Requests with CMCD
DELTA , INT64 , 1
edgecache.googleapis.com/EdgeCacheRouteRule
A count of requests with CMCD.
cmcd_version :
The version of CMCD sent in the request, one of [NONE, UNKNOWN, 1] with NONE being no CMCD sent and UNKNOWN being an unknown version.
stream_type :
The type of stream being requested, one of [UNKNOWN, VOD, LIVE] with UNKNOWN when the stream type is not reported.
device_type :
The device type of the client (currently not implemented and is UNKNOWN).
client_country :
The country of the user sending the request based on GeoIP.
client_continent :
The continent of the user sending the request based on GeoIP, one of [Africa, Asia, Europe, North America, South America, Other].
edge_cache_route_rule/frontend_rtt_by_client
GA
(project)
Frontend round trip time by client
DELTA , DISTRIBUTION , ms
edgecache.googleapis.com/EdgeCacheRouteRule
Round trip times from the end user to the proxy terminating the request.
proxy_continent :
The continent of the proxy terminating the request, one of [Africa, Asia, Europe, North America, South America, Oceania, Other].
client_country :
The country of the user sending the request based on GeoIP.
client_continent :
The continent of the user sending the request based on GeoIP, one of [Africa, Asia, Europe, North America, South America, Other].
protocol :
The protocol used by the client, one of [HTTP/1.1, HTTP/2, gQUIC, HTTP/3].
edge_cache_route_rule/http_ttfb
GA
(project)
HTTP time to first byte
DELTA , DISTRIBUTION , ms
edgecache.googleapis.com/EdgeCacheRouteRule
A distribution of latencies calculated from when the request was received by the proxy until the first byte of the response is sent (not received).
response_code :
(INT64)
The response code served to the user.
response_code_class :
The class of the response code served to the user, such as "2xx" or "4xx".
tls_version :
The TLS version the client is using to connect, one of [none, TLS 1.0, TLS 1.1, TLS 1.2, TLS 1.3].
ip_protocol :
The IP protocol the client connected to, one of [IPv4, IPv6].
cache_result :
The result returned from the cache, one of [HIT, MISS, PARTIAL, REVALIDATED, STALE, BYPASSED, UNCACHEABLE].
protocol :
The protocol used by the client, one of [HTTP/1.1, HTTP/2, gQUIC, HTTP/3].
edge_cache_route_rule/http_ttfb_by_client
GA
(project)
HTTP time to first byte by client
DELTA , DISTRIBUTION , ms
edgecache.googleapis.com/EdgeCacheRouteRule
A distribution of latencies calculated from when the request was received by the proxy until the first byte of the response is sent (not received) with client location information.
proxy_continent :
The continent of the proxy terminating the request, one of [Africa, Asia, Europe, North America, South America, Oceania, Other].
client_country :
The country of the user sending the request based on GeoIP.
client_continent :
The continent of the user sending the request based on GeoIP, one of [Africa, Asia, Europe, North America, South America, Other].
protocol :
The protocol used by the client, one of [HTTP/1.1, HTTP/2, gQUIC, HTTP/3].
edge_cache_route_rule/http_ttfb_by_client_asn
BETA
(project)
HTTP time to first byte per client ASN
DELTA , DISTRIBUTION , ms
edgecache.googleapis.com/EdgeCacheRouteRule
A distribution of latencies calculated from when the request was received by the proxy until the first byte of the response is sent (not received). Broken down by client ASN.
client_asn :
The client's ASN (Autonomous System Number).
edge_cache_route_rule/http_ttfb_by_client_device
BETA
(project)
HTTP time to first byte per client device
DELTA , DISTRIBUTION , ms
edgecache.googleapis.com/EdgeCacheRouteRule
A distribution of latencies calculated from when the request was received by the proxy until the first byte of the response is sent (not received). Broken down by client device.
response_code :
(INT64)
The response code served to the user.
response_code_class :
The class of the response code served to the user, such as "2xx" or "4xx".
device_request_type :
The type of device used by the client.
user_agent_family :
The browser family used by the client.
edge_cache_route_rule/http_ttlb
GA
(project)
HTTP time to last byte
DELTA , DISTRIBUTION , ms
edgecache.googleapis.com/EdgeCacheRouteRule
A distribution of latencies calculated from when the request was received by the proxy until the last byte of the response is sent (not received).
response_code :
(INT64)
The response code served to the user.
response_code_class :
The class of the response code served to the user, such as "2xx" or "4xx".
tls_version :
The TLS version the client is using to connect, one of [none, TLS 1.0, TLS 1.1, TLS 1.2, TLS 1.3].
ip_protocol :
The IP protocol the client connected to, one of [IPv4, IPv6].
cache_result :
The result returned from the cache, one of [HIT, MISS, PARTIAL, REVALIDATED, STALE, BYPASSED, UNCACHEABLE].
protocol :
The protocol used by the client, one of [HTTP/1.1, HTTP/2, gQUIC, HTTP/3].
edge_cache_route_rule/http_ttlb_by_client
GA
(project)
HTTP time to last byte by client
DELTA , DISTRIBUTION , ms
edgecache.googleapis.com/EdgeCacheRouteRule
A distribution of latencies calculated from when the request was received by the proxy until the last byte of the response is sent (not received) with client location information.
proxy_continent :
The continent of the proxy terminating the request, one of [Africa, Asia, Europe, North America, South America, Oceania, Other].
client_country :
The country of the user sending the request based on GeoIP.
client_continent :
The continent of the user sending the request based on GeoIP, one of [Africa, Asia, Europe, North America, South America, Other].
protocol :
The protocol used by the client, one of [HTTP/1.1, HTTP/2, gQUIC, HTTP/3].
edge_cache_route_rule/http_ttlb_by_client_asn
BETA
(project)
HTTP time to last byte per client ASN
DELTA , DISTRIBUTION , ms
edgecache.googleapis.com/EdgeCacheRouteRule
A distribution of latencies calculated from when the request was received by the proxy until the last byte of the response is sent (not received). Broken down by client ASN.
client_asn :
The client's ASN (Autonomous System Number).
edge_cache_route_rule/http_ttlb_by_client_device
BETA
(project)
HTTP time to last byte per client device
DELTA , DISTRIBUTION , ms
edgecache.googleapis.com/EdgeCacheRouteRule
A distribution of latencies calculated from when the request was received by the proxy until the last byte of the response is sent (not received). Broken down by client device.
response_code :
(INT64)
The response code served to the user.
response_code_class :
The class of the response code served to the user, such as "2xx" or "4xx".
device_request_type :
The type of device used by the client.
user_agent_family :
The browser family used by the client.
edge_cache_route_rule/origin_http_ttfb
GA
(project)
Origin time to first byte
DELTA , DISTRIBUTION , ms
edgecache.googleapis.com/EdgeCacheRouteRule
A distribution of latencies calculated from when the request was sent by the proxy until the response headers are received from the origin.
response_code :
(INT64)
The response code from the origin.
response_code_class :
The class of the response code from the origin, such as "2xx" or "4xx".
proxy_continent :
The continent of the proxy, one of [Africa, Asia, Europe, North America, South America, Oceania, Other].
proxy_region :
The region of the proxy, one of [Asia, Europe, India, Latin America, Middle East, North America, Oceania, South Korea & China, Other].
protocol :
The protocol used to connect to the origin, one of [HTTP/1.1, HTTP/2, gQUIC, HTTP/3].
origin_name :
The name of the origin that produced the response (may be a failover origin).
edge_cache_route_rule/origin_http_ttlb
GA
(project)
Origin time to last byte
DELTA , DISTRIBUTION , ms
edgecache.googleapis.com/EdgeCacheRouteRule
A distribution of latencies calculated from when the request was sent by the proxy to the origin until the last byte of the response is received from the origin.
response_code :
(INT64)
The response code from the origin.
response_code_class :
The class of the response code from the origin, such as "2xx" or "4xx".
proxy_continent :
The continent of the proxy, one of [Africa, Asia, Europe, North America, South America, Oceania, Other].
proxy_region :
The region of the proxy, one of [Asia, Europe, India, Latin America, Middle East, North America, Oceania, South Korea & China, Other].
protocol :
The protocol used to connect to the origin, one of [HTTP/1.1, HTTP/2, gQUIC, HTTP/3].
origin_name :
The name of the origin that produced the response (may be a failover origin).
edge_cache_route_rule/origin_request_count
GA
(project)
Origin request count
DELTA , INT64 , 1
edgecache.googleapis.com/EdgeCacheRouteRule
Count of requests to an origin.
response_code :
(INT64)
The response code from the origin.
response_code_class :
The class of the response code from the origin, such as "2xx" or "4xx".
proxy_continent :
The continent of the proxy, one of [Africa, Asia, Europe, North America, South America, Oceania, Other].
proxy_region :
The region of the proxy, one of [Asia, Europe, India, Latin America, Middle East, North America, Oceania, South Korea & China, Other].
protocol :
The protocol used to connect to the origin, one of [HTTP/1.1, HTTP/2, gQUIC, HTTP/3].
origin_name :
The name of the origin that produced the response (may be a failover origin).
edge_cache_route_rule/origin_response_bytes_count
GA
(project)
Origin response bytes count
DELTA , INT64 , By
edgecache.googleapis.com/EdgeCacheRouteRule
Count of response bytes from an origin.
response_code :
(INT64)
The response code from the origin.
response_code_class :
The class of the response code from the origin, such as "2xx" or "4xx".
proxy_continent :
The continent of the proxy, one of [Africa, Asia, Europe, North America, South America, Oceania, Other].
proxy_region :
The region of the proxy, one of [Asia, Europe, India, Latin America, Middle East, North America, Oceania, South Korea & China, Other].
protocol :
The protocol used to connect to the origin, one of [HTTP/1.1, HTTP/2, gQUIC, HTTP/3].
origin_name :
The name of the origin that produced the response (may be a failover origin).
edge_cache_route_rule/request_bytes_count
GA
(project)
Request bytes count
DELTA , INT64 , By
edgecache.googleapis.com/EdgeCacheRouteRule
Count of request bytes (body and headers).
response_code :
(INT64)
The response code served to the user.
response_code_class :
The class of the response code served to the user, such as "2xx" or "4xx".
proxy_continent :
The continent of the proxy terminating the request, one of [Africa, Asia, Europe, North America, South America, Oceania, Other].
proxy_region :
The region of the proxy terminating the request, one of [Asia, Europe, India, Latin America, Middle East, North America, Oceania, South Korea & China, Other].
cache_result :
The result returned from the cache, one of [HIT, MISS, PARTIAL, REVALIDATED, STALE, BYPASSED, UNCACHEABLE].
signed_request_mode :
(BOOL)
Whether or not the route is expecting signed requests.
edge_cache_route_rule/request_bytes_count_by_client
GA
(project)
Request bytes count by client
DELTA , INT64 , By
edgecache.googleapis.com/EdgeCacheRouteRule
Count of request bytes (body and headers) with client location information.
response_code :
(INT64)
The response code served to the user.
response_code_class :
The class of the response code served to the user, such as "2xx" or "4xx".
client_country :
The country of the user sending the request based on GeoIP.
client_continent :
The continent of the user sending the request based on GeoIP, one of [Africa, Asia, Europe, North America, South America, Other].
edge_cache_route_rule/request_count
GA
(project)
Request count
DELTA , INT64 , 1
edgecache.googleapis.com/EdgeCacheRouteRule
Count of requests.
response_code :
(INT64)
The response code served to the user.
response_code_class :
The class of the response code served to the user, such as "2xx" or "4xx".
proxy_continent :
The continent of the proxy terminating the request, one of [Africa, Asia, Europe, North America, South America, Oceania, Other].
proxy_region :
The region of the proxy terminating the request, one of [Asia, Europe, India, Latin America, Middle East, North America, Oceania, South Korea & China, Other].
cache_result :
The result returned from the cache, one of [HIT, MISS, PARTIAL, REVALIDATED, STALE, BYPASSED, UNCACHEABLE].
signed_request_mode :
(BOOL)
Whether or not the route is expecting signed requests.
edge_cache_route_rule/request_count5xx_by_client_asn
BETA
(project)
Count of 5xx responses by client ASN
DELTA , INT64 , 1
edgecache.googleapis.com/EdgeCacheRouteRule
Count of requests with HTTP 5xx responses, broken down by client ASN.
client_asn :
The client's ASN (Autonomous System Number).
edge_cache_route_rule/request_count_by_blocked
GA
(project)
Request count by Cloud Armor action
DELTA , INT64 , 1
edgecache.googleapis.com/EdgeCacheRouteRule
Count of requests with client location information and Cloud Armor action.
response_code :
(INT64)
The response code served to the user.
response_code_class :
The class of the response code served to the user, such as "2xx" or "4xx".
client_country :
The country of the user sending the request based on GeoIP.
client_continent :
The continent of the user sending the request based on GeoIP, one of [Africa, Asia, Europe, North America, South America, Other].
blocked_by_cloud_armor :
(BOOL)
Whether or not the request was blocked by Cloud Armor.
edge_cache_route_rule/request_count_by_client
GA
(project)
Request count by client
DELTA , INT64 , 1
edgecache.googleapis.com/EdgeCacheRouteRule
Count of requests with client location information.
response_code :
(INT64)
The response code served to the user.
response_code_class :
The class of the response code served to the user, such as "2xx" or "4xx".
client_country :
The country of the user sending the request based on GeoIP.
client_continent :
The continent of the user sending the request based on GeoIP, one of [Africa, Asia, Europe, North America, South America, Other].
cache_result :
The result returned from the cache, one of [HIT, MISS, PARTIAL, REVALIDATED, STALE, BYPASSED, UNCACHEABLE].
signed_request_mode :
(BOOL)
Whether or not the route is expecting signed requests.
edge_cache_route_rule/response_bytes_count
GA
(project)
Response bytes count
DELTA , INT64 , By
edgecache.googleapis.com/EdgeCacheRouteRule
Count of response bytes.
response_code :
(INT64)
The response code served to the user.
response_code_class :
The class of the response code served to the user, such as "2xx" or "4xx".
proxy_continent :
The continent of the proxy terminating the request, one of [Africa, Asia, Europe, North America, South America, Oceania, Other].
proxy_region :
The region of the proxy terminating the request, one of [Asia, Europe, India, Latin America, Middle East, North America, Oceania, South Korea & China, Other].
cache_result :
The result returned from the cache, one of [HIT, MISS, PARTIAL, REVALIDATED, STALE, BYPASSED, UNCACHEABLE].
signed_request_mode :
(BOOL)
Whether or not the route is expecting signed requests.
edge_cache_route_rule/response_bytes_count_by_client
GA
(project)
Response bytes count by client
DELTA , INT64 , By
edgecache.googleapis.com/EdgeCacheRouteRule
Count of response bytes (body and headers) with client location information.
response_code :
(INT64)
The response code served to the user.
response_code_class :
The class of the response code served to the user, such as "2xx" or "4xx".
client_country :
The country of the user sending the request based on GeoIP.
client_continent :
The continent of the user sending the request based on GeoIP, one of [Africa, Asia, Europe, North America, South America, Other].
edge_cache_route_rule/total_latencies
GA
(project)
Total latencies
DELTA , DISTRIBUTION , ms
edgecache.googleapis.com/EdgeCacheRouteRule
A distribution of latencies calculated from when the request was received by the proxy until the proxy got ACK from client on last response byte.
response_code :
(INT64)
The response code served to the user.
response_code_class :
The class of the response code served to the user, such as "2xx" or "4xx".
cache_result :
The result returned from the cache, one of [HIT, MISS, PARTIAL, REVALIDATED, STALE, BYPASSED, UNCACHEABLE].
protocol :
The protocol used by the client, one of [HTTP/1.1, HTTP/2, gQUIC, HTTP/3].
tls_version :
The TLS version the client is using to connect, one of [none, TLS 1.0, TLS 1.1, TLS 1.2, TLS 1.3].
ip_protocol :
The IP protocol the client connected to, one of [IPv4, IPv6].
edge_cache_route_rule/total_latencies_by_proxy
GA
(project)
Total latencies by proxy
DELTA , DISTRIBUTION , ms
edgecache.googleapis.com/EdgeCacheRouteRule
A distribution of latencies calculated from when the request was received by the proxy until the proxy got ACK from client on last response byte. Includes proxy location information.
response_code :
(INT64)
The response code served to the user.
response_code_class :
The class of the response code served to the user, such as "2xx" or "4xx".
proxy_country :
The country of the proxy terminating the request.
proxy_continent :
The continent of the proxy terminating the request, one of [Africa, Asia, Europe, North America, South America, Oceania, Other].
proxy_region :
The region of the proxy terminating the request, one of [Asia, Europe, India, Latin America, Middle East, North America, Oceania, South Korea & China, Other].
edgecontainer
Metrics from Google Distributed Cloud .
Launch stages of these metrics:
BETA
GA
The "metric type" strings in this table must be prefixed
with edgecontainer.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
edge_cluster/connection_status
BETA
(project)
Cluster Connection to the Core Network.
GAUGE , BOOL ,
edgecontainer.googleapis.com/EdgeCluster
A metric with a constant 'true' value labeled by Cluster's connection status.
status :
Cluster's connection status, such as CONNECTED, SURVIVABILITY or RECONNECTING.
edge_cluster/current_cluster_version
BETA
(project)
Current Cluster Version.
GAUGE , BOOL ,
edgecontainer.googleapis.com/EdgeCluster
A metric with a constant 'true' value labeled by Cluster's current version.
version :
The current GDCE product version of the cluster. During an upgrade, this is the old version and will be updated after the upgrade is completed.
edge_cluster/fileblock_storage/volume_read_data_per_sec
BETA
(project)
Volume Read Data Count
GAUGE , DOUBLE , Bps
edgecontainer.googleapis.com/EdgeCluster
Bytes read per second.
cluster :
The ONTAP cluster for the metric.
aggr :
The associated ONTAP aggregate for the metric.
node :
The associated ONTAP node for the metric.
style :
The style of volume for the metric.
svm :
The associated ONTAP SVM for the metric.
volume :
The associated volume for the metric.
edge_cluster/fileblock_storage/volume_read_latency
BETA
(project)
Volume Read Latency
GAUGE , DOUBLE , us
edgecontainer.googleapis.com/EdgeCluster
Average latency in microseconds for the WAFL filesystem to process read request to the volume; not including request processing or network communication time.
cluster :
The ONTAP cluster for the metric.
aggr :
The associated ONTAP aggregate for the metric.
node :
The associated ONTAP node for the metric.
style :
The style of volume for the metric.
svm :
The associated ONTAP SVM for the metric.
volume :
The associated volume for the metric.
edge_cluster/fileblock_storage/volume_read_ops_per_sec
BETA
(project)
Volume read Operations Count
GAUGE , DOUBLE , {ops}/s
edgecontainer.googleapis.com/EdgeCluster
Number of read operations per second from the volume.
cluster :
The ONTAP cluster for the metric.
aggr :
The associated ONTAP aggregate for the metric.
node :
The associated ONTAP node for the metric.
style :
The style of volume for the metric.
svm :
The associated ONTAP SVM for the metric.
volume :
The associated volume for the metric.
edge_cluster/fileblock_storage/volume_size_available
BETA
(project)
Volume Available Size
GAUGE , INT64 , By
edgecontainer.googleapis.com/EdgeCluster
Bytes available to use (aka unused) for the volume.
cluster :
The ONTAP cluster for the metric.
aggr :
The associated ONTAP aggregate for the metric.
node :
The associated ONTAP node for the metric.
style :
The style of volume for the metric.
svm :
The associated ONTAP SVM for the metric.
volume :
The associated volume for the metric.
edge_cluster/fileblock_storage/volume_size_physical
BETA
(project)
Volume Physical Size
GAUGE , INT64 , By
edgecontainer.googleapis.com/EdgeCluster
Physical size of the volume, in bytes.
cluster :
The ONTAP cluster for the metric.
aggr :
The associated ONTAP aggregate for the metric.
node :
The associated ONTAP node for the metric.
style :
The style of volume for the metric.
svm :
The associated ONTAP SVM for the metric.
volume :
The associated volume for the metric.
edge_cluster/fileblock_storage/volume_size_total
BETA
(project)
Volume Total Size
GAUGE , INT64 , By
edgecontainer.googleapis.com/EdgeCluster
Total usable size (in bytes) of the volume, not including WAFL reserve or volume snapshot reserve. If the volume is restricted or offline, a value of 0 is returned.
cluster :
The ONTAP cluster for the metric.
aggr :
The associated ONTAP aggregate for the metric.
node :
The associated ONTAP node for the metric.
style :
The style of volume for the metric.
svm :
The associated ONTAP SVM for the metric.
volume :
The associated volume for the metric.
edge_cluster/fileblock_storage/volume_size_used
BETA
(project)
Volume Used Size
GAUGE , INT64 , By
edgecontainer.googleapis.com/EdgeCluster
Bytes used by the volume.
cluster :
The ONTAP cluster for the metric.
aggr :
The associated ONTAP aggregate for the metric.
node :
The associated ONTAP node for the metric.
style :
The style of volume for the metric.
svm :
The associated ONTAP SVM for the metric.
volume :
The associated volume for the metric.
edge_cluster/fileblock_storage/volume_write_data_per_sec
BETA
(project)
Volume Write Data Count
GAUGE , DOUBLE , Bps
edgecontainer.googleapis.com/EdgeCluster
Bytes written per second.
cluster :
The ONTAP cluster for the metric.
aggr :
The associated ONTAP aggregate for the metric.
node :
The associated ONTAP node for the metric.
style :
The style of volume for the metric.
svm :
The associated ONTAP SVM for the metric.
volume :
The associated volume for the metric.
edge_cluster/fileblock_storage/volume_write_latency
BETA
(project)
Volume Write Latency
GAUGE , DOUBLE , us
edgecontainer.googleapis.com/EdgeCluster
Average latency in microseconds for the WAFL filesystem to process write request to the volume; not including request processing or network communication time.
cluster :
The ONTAP cluster for the metric.
aggr :
The associated ONTAP aggregate for the metric.
node :
The associated ONTAP node for the metric.
style :
The style of volume for the metric.
svm :
The associated ONTAP SVM for the metric.
volume :
The associated volume for the metric.
edge_cluster/fileblock_storage/volume_write_ops_per_sec
BETA
(project)
Volume Write Operations Count
GAUGE , DOUBLE , {ops}/s
edgecontainer.googleapis.com/EdgeCluster
Number of write operations per second to the volume.
cluster :
The ONTAP cluster for the metric.
aggr :
The associated ONTAP aggregate for the metric.
node :
The associated ONTAP node for the metric.
style :
The style of volume for the metric.
svm :
The associated ONTAP SVM for the metric.
volume :
The associated volume for the metric.
edge_cluster/is_ha
BETA
(project)
If it is a High Availability cluster.
GAUGE , BOOL ,
edgecontainer.googleapis.com/EdgeCluster
If it is a High Availability cluster.
edge_cluster/lifecycle_status
BETA
(project)
Cluster's lifecycle status.
GAUGE , BOOL ,
edgecontainer.googleapis.com/EdgeCluster
A metric with a constant 'true' value labeled by Cluster's lifecycle status.
status :
Cluster's lifecycle status such as provisioning or deleting.
edge_cluster/object_storage/data_usage_per_tenant
BETA
(project)
Date Usage Per Tenant
GAUGE , INT64 , By
edgecontainer.googleapis.com/EdgeCluster
The amount of space used on StorageGRID per tenant.
cluster :
The associated StorageGRID storage cluster for the metric.
job :
The associated job for the metric.
node :
The associated StorageGRID storage node for the metric.
node_id :
The associated StorageGRID storage node ID for the metric.
site_id :
The ID of the associated StorageGRID site for the metric.
site_name :
The associated StorageGRID site for the metric.
service :
The associated StorageGRID service for the metric.
tenant_id :
The ID of the associated StorageGRID tenant for the metric.
edge_cluster/object_storage/s3_requests_total
BETA
(project)
Storagegrid S3 Requests Total
GAUGE , INT64 , 1
edgecontainer.googleapis.com/EdgeCluster
Total number of s3 requests.
cluster :
The associated StorageGRID storage cluster for the metric.
job :
The associated job for the metric.
node :
The associated StorageGRID storage node for the metric.
node_id :
The associated StorageGRID storage node ID for the metric.
site_id :
The ID of the associated StorageGRID site for the metric.
site_name :
The associated StorageGRID site for the metric.
operation :
The associated StorageGRID operation for the metric.
edge_cluster/object_storage/storage_utilization_data
BETA
(project)
Storage Utilization Data
GAUGE , INT64 , By
edgecontainer.googleapis.com/EdgeCluster
The amount of space used on StorageGRID.
cluster :
The associated StorageGRID storage cluster for the metric.
job :
The associated job for the metric.
node :
The associated StorageGRID storage node for the metric.
node_id :
The associated StorageGRID storage node ID for the metric.
site_id :
The ID of the associated StorageGRID site for the metric.
site_name :
The associated StorageGRID site for the metric.
service :
The associated StorageGRID service for the metric.
edge_cluster/object_storage/storage_utilization_usable_space
BETA
(project)
Storage Utilization Usable Space
GAUGE , INT64 , By
edgecontainer.googleapis.com/EdgeCluster
The amount of space available for use on StorageGRID.
cluster :
The associated StorageGRID storage cluster for the metric.
job :
The associated job for the metric.
node :
The associated StorageGRID storage node for the metric.
node_id :
The associated StorageGRID storage node ID for the metric.
site_id :
The ID of the associated StorageGRID site for the metric.
site_name :
The associated StorageGRID site for the metric.
service :
The associated StorageGRID service for the metric.
edge_cluster/shared_deployment_policy
BETA
(project)
Cluster's control plane shared deployment policy.
GAUGE , BOOL ,
edgecontainer.googleapis.com/EdgeCluster
A metric with a constant 'true' value labeled by Cluster's shared deployment policy.
policy :
Defines via policy field whether it is allowed to run user workload on control plane nodes of the cluster: such as SHARED_DEPLOYMENT_POLICY_UNSPECIFIED, ALLOWED, DISALLOWED.
edge_cluster/target_cluster_version
BETA
(project)
Target Cluster Version.
GAUGE , BOOL ,
edgecontainer.googleapis.com/EdgeCluster
A metric with a constant 'true' value labeled by Cluster's intended target version.
version :
Intended GDCE version of the cluster.
edge_zone/state
GA
(project)
State
GAUGE , BOOL ,
edgecontainer.googleapis.com/EdgeZone
The state of the zone, such as 'ACTIVE' if the zone is turned up, 'PREPARING' if the zone is created but not active, etc.
state :
The edge zone turnup state.
machine/ambient_temperature
BETA
(project)
Machine ambient temperature in Celsius
GAUGE , INT64 , C
edgecontainer.googleapis.com/Machine
Machine ambient temperature in Celsius.
machine/connected
GA
(project)
Machine Connected
GAUGE , BOOL ,
edgecontainer.googleapis.com/Machine
Whether the machine is connected to Google.
machine/cpu/total_cores
GA
(project)
CPU cores
GAUGE , INT64 , 1
edgecontainer.googleapis.com/Machine
Total number of CPU cores on the machine.
machine/cpu/usage_time
GA
(project)
CPU usage
CUMULATIVE , DOUBLE , s{CPU}
edgecontainer.googleapis.com/Machine
Cumulative CPU usage on all cores in seconds.
type :
Either 'system' or 'workload'. Where workload is what the customer is actually running and system is everything else that Google runs to manage the machine.
machine/cpu/utilization
GA
(project)
CPU utilization
GAUGE , DOUBLE , %
edgecontainer.googleapis.com/Machine
Percent of CPU utilization in a machine (between 0-1).
type :
Either 'system' or 'workload'. Where workload is what the customer is actually running and system is everything else that Google runs to manage the machine.
machine/disk/total_bytes
GA
(project)
Total Disk Size
GAUGE , INT64 , By
edgecontainer.googleapis.com/Machine
Total disk bytes on the machine.
machine/disk/used_bytes
GA
(project)
Disk Usage
GAUGE , INT64 , By
edgecontainer.googleapis.com/Machine
Total disk bytes used on the machine.
machine/disk/utilization
GA
(project)
Disk Utilization
GAUGE , DOUBLE , %
edgecontainer.googleapis.com/Machine
Percent of disk bytes utilization in a machine (between 0-1).
machine/gpu/total
GA
(project)
GPUs
GAUGE , INT64 , 1
edgecontainer.googleapis.com/Machine
Number of GPUs in the machine.
machine/gpu/utilization
GA
(project)
GPU Utilization
GAUGE , DOUBLE , %
edgecontainer.googleapis.com/Machine
This is the proportion of time in which the GPU was being used.
devpath :
dev path of the GPU, uniquely identifying it.
machine/memory/total_bytes
GA
(project)
Total Memory
GAUGE , INT64 , By
edgecontainer.googleapis.com/Machine
Number of bytes of memory in the machine.
machine/memory/used_bytes
GA
(project)
Memory Usage
GAUGE , INT64 , By
edgecontainer.googleapis.com/Machine
Memory usage in bytes.
type :
Either 'system' or 'workload'. Where workload is what the customer is actually running and system is everything else that Google runs to manage the machine.
machine/memory/utilization
GA
(project)
Memory Utilization
GAUGE , DOUBLE , %
edgecontainer.googleapis.com/Machine
Percent of memory utilization in a machine (between 0-1).
type :
Either 'system' or 'workload'. Where workload is what the customer is actually running and system is everything else that Google runs to manage the machine.
machine/network/connectivity
GA
(project)
Connectivity
GAUGE , BOOL ,
edgecontainer.googleapis.com/Machine
Whether the primary NIC has internet connectivity.
machine/network/link_speed
GA
(project)
Link Speed
GAUGE , DOUBLE , Bps
edgecontainer.googleapis.com/Machine
Link speed in bytes per second. Only reports data on the primary NIC.
machine/network/received_bytes_count
GA
(project)
Received Bytes
CUMULATIVE , DOUBLE , By
edgecontainer.googleapis.com/Machine
Total network bytes received by the interface. Only reports data on the primary NIC.
machine/network/sent_bytes_count
GA
(project)
Sent Bytes
CUMULATIVE , DOUBLE , By
edgecontainer.googleapis.com/Machine
Total network bytes sent by the interface. Only reports data on the primary NIC.
machine/network/up
GA
(project)
Network Up
GAUGE , BOOL ,
edgecontainer.googleapis.com/Machine
Whether the network interface is up and running or not.
interface :
Any of the network devices (including primary and secondary cards) and port.
machine/power_consumption
GA
(project)
Machine Power Consumption (Watts)
GAUGE , INT64 , watts
edgecontainer.googleapis.com/Machine
Machine power consumption in watts.
machine/restart_count
GA
(project)
Machine Restarts
CUMULATIVE , INT64 , 1
edgecontainer.googleapis.com/Machine
Total number of times the machine restarted.
machine/uptime
GA
(project)
Machine Uptime
GAUGE , INT64 , s
edgecontainer.googleapis.com/Machine
For how long (in seconds) the machine is up.
node/current_node_version
BETA
(project)
Current Node Version
GAUGE , BOOL ,
edgecontainer.googleapis.com/Node
A metric with a constant 'true' value labeled by Node's current version.
current_node_version :
The current GDCE product version of the node.
node/node_pool_name
BETA
(project)
Node Pool Name
GAUGE , BOOL ,
edgecontainer.googleapis.com/Node
A metric with a constant 'true' value labeled by Node's nodepool name.
node_pool_name :
The name of the node pool the node belongs to.
node/node_type
BETA
(project)
Node Type
GAUGE , BOOL ,
edgecontainer.googleapis.com/Node
A metric with a constant 'true' value labeled by Node's node type.
node_type :
The node type of the node, one of [ControlPlaneNode, WorkerNode].
node/target_node_version
BETA
(project)
Target Node Version
GAUGE , BOOL ,
edgecontainer.googleapis.com/Node
A metric with a constant 'true' value labeled by Node's target version.
target_node_version :
The target GDCE product version of the node.
router/bgp_up
GA
(project)
BGP Up
GAUGE , BOOL ,
edgecontainer.googleapis.com/Rack
Whether the BGP session on the router is up and healthy.
router_id :
The identifier for the router. Each rack contains up to two routers.
router/connected
GA
(project)
Router Connected
GAUGE , BOOL ,
edgecontainer.googleapis.com/Rack
Whether the router is connected to Google.
router_id :
The identifier for the router. Each rack contains up to two routers.
eventarc
Metrics from Eventarc .
Launch stages of these metrics:
BETA
The "metric type" strings in this table must be prefixed
with eventarc.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
quota/enrollments_per_message_bus/exceeded
BETA
(project)
Enrollments per message bus quota exceeded error
DELTA , INT64 , 1
eventarc.googleapis.com/Location
Number of attempts to exceed the limit on quota metric eventarc.googleapis.com/enrollments_per_message_bus. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
message_bus :
The message bus that the enrollments are attached to.
quota/enrollments_per_message_bus/limit
BETA
(project)
Enrollments per message bus quota limit
GAUGE , INT64 , 1
eventarc.googleapis.com/Location
Current limit on quota metric eventarc.googleapis.com/enrollments_per_message_bus. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
message_bus :
The message bus that the enrollments are attached to.
quota/enrollments_per_message_bus/usage
BETA
(project)
Enrollments per message bus quota usage
GAUGE , INT64 , 1
eventarc.googleapis.com/Location
Current usage on quota metric eventarc.googleapis.com/enrollments_per_message_bus. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
message_bus :
The message bus that the enrollments are attached to.
file
Metrics from Filestore .
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with file.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
instance/time_since_last_replication
GA
(project)
RPO
GAUGE , DOUBLE , s
filestore_instance
Current RPO of the active instance replication. The metric is reported per share, and not populated for basic tier instances. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
share_name :
The name of the file share.
nfs/server/average_read_latency
GA
(project)
Average read latency
GAUGE , DOUBLE , ms
filestore_instance
Average latency for all disk read operations. This metric is not populated for basic tier instances. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
file_share :
The name of the File Share.
nfs/server/average_write_latency
GA
(project)
Average write latency
GAUGE , DOUBLE , ms
filestore_instance
Average latency for all disk write operations. This metric is not populated for basic tier instances. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
file_share :
The name of the File Share.
nfs/server/deleted_bytes_count
GA
(project)
Bytes Deleted
DELTA , INT64 , By
filestore_instance
Bytes deleted from share. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
file_share :
The name of the file share.
nfs/server/domain_reachable
GA
(project)
Directory Service network reachable
GAUGE , BOOL ,
filestore_instance
True if at least one of the directory services domain controllers is reachable. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
nfs/server/free_bytes
GA
(project)
Free bytes
GAUGE , INT64 , By
filestore_instance
Total free bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
file_share :
The name of the File Share.
nfs/server/free_bytes_percent
GA
(project)
Free disk space percent
GAUGE , DOUBLE , %
filestore_instance
Free disk space as a percentage of the total space. Values are numbers between 0.0 and 100.0. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
file_share :
The name of the File Share.
nfs/server/free_raw_capacity_percent
GA
(project)
Free raw capacity percent
GAUGE , DOUBLE , %
filestore_instance
The free raw capacity as a percentage of the total space. Values are numbers between 0.0 and 100.0. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
nfs/server/instance_available
GA
(project)
LDAP Domain online / Active Directory KRB5 mount
GAUGE , BOOL ,
filestore_instance
True if LDAP domain is online or Active Directory KRB5 mount is available. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
nfs/server/locks
GA
(project)
Lock count
GAUGE , INT64 , {lock}
filestore_instance
Number of locks. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
type :
The type of lock is either READ or WRITE.
severity :
The severity is either MANDATORY or ADVISORY.
class :
The class of lock refers to the method by which the lock was acquired (e.g. FLOCK, POSIX, etc.).
nfs/server/metadata_ops_count
GA
(project)
Metadata operations count
DELTA , INT64 , {operation}
filestore_instance
Count of disk metadata operations. This metric is not populated for basic tier instances. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
file_share :
The name of the File Share.
nfs/server/procedure_call_count
GA
(project)
Procedure call count
DELTA , INT64 , 1
filestore_instance
NFS server procedure call count. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
name :
The name of the NFS Server procedure.
version :
The version of the NFS protocol.
nfs/server/read_bytes_count
GA
(project)
Bytes read
DELTA , INT64 , By
filestore_instance
Bytes read from disk. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
file_share :
The name of the File Share.
nfs/server/read_milliseconds_count
GA
(project)
Time (in milliseconds) spent on read operations
DELTA , INT64 , ms
filestore_instance
Count of milliseconds spent on disk read operations. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
file_share :
The name of the File Share.
nfs/server/read_ops_count
GA
(project)
Disk read operation count
DELTA , INT64 , {operation}
filestore_instance
Count of disk read operations. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
file_share :
The name of the File Share.
nfs/server/snapshots_used_bytes
GA
(project)
Snapshots used bytes
GAUGE , INT64 , By
filestore_instance
The number of bytes used by the snapshots. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
file_share :
The name of the File Share.
nfs/server/used_bytes
GA
(project)
Used bytes
GAUGE , INT64 , By
filestore_instance
Used bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
file_share :
The name of the File Share.
nfs/server/used_bytes_percent
GA
(project)
Used space percent
GAUGE , DOUBLE , %
filestore_instance
Used space as a percentage of the total space. Values are numbers between 0.0 and 100.0. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
file_share :
The name of the File Share.
nfs/server/write_bytes_count
GA
(project)
Bytes written
DELTA , INT64 , By
filestore_instance
Bytes written to disk. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
file_share :
The name of the File Share.
nfs/server/write_milliseconds_count
GA
(project)
Time (in milliseconds) spent on write operations
DELTA , INT64 , ms
filestore_instance
Count of milliseconds spent on disk write operations. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
file_share :
The name of the File Share.
nfs/server/write_ops_count
GA
(project)
Disk write operation count
DELTA , INT64 , {operation}
filestore_instance
Count of disk write operations. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
file_share :
The name of the File Share.
firebaseappcheck
Metrics from Firebase .
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with firebaseappcheck.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
resources/verification_count
GA
(project)
Firebase App Check resource verification count
DELTA , INT64 , 1
firebaseappcheck.googleapis.com/Resource
Verifications performed by an integrating service for a target resource.
result :
Result of the token verification; one of [ALLOW, DENY].
security :
Security property of the request; one of [VALID, CONSUMED, INVALID, MISSING_OUTDATED_CLIENT, MISSING_UNKNOWN_ORIGIN].
app_id :
Firebase App ID.
services/verdict_count
DEPRECATED
(project)
Firebase App Check verdict count
DELTA , INT64 , 1
firebaseappcheck.googleapis.com/Instance
Verdicts from performing Firebase App Check verifications.
result :
Result of the token verification; one of [ALLOW, DENY].
security :
Security property of the request; one of [VALID, CONSUMED, INVALID, MISSING_OUTDATED_CLIENT, MISSING_UNKNOWN_ORIGIN].
services/verification_count
GA
(project)
Firebase App Check service verification count
DELTA , INT64 , 1
firebaseappcheck.googleapis.com/Service
Verifications performed by an integrating service.
result :
Result of the token verification; one of [ALLOW, DENY].
security :
Security property of the request; one of [VALID, CONSUMED, INVALID, MISSING_OUTDATED_CLIENT, MISSING_UNKNOWN_ORIGIN].
app_id :
Firebase App ID.
firebaseapphosting
Metrics from Firebase .
Launch stages of these metrics:
BETA
The "metric type" strings in this table must be prefixed
with firebaseapphosting.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
backend/request_count
BETA
(project)
Request Count
DELTA , INT64 , 1
firebaseapphosting.googleapis.com/Backend
Count of user requests.
cache_hit :
Whether the requests were served from the CDN cache.
response_code :
The HTTP response code served to the end user (200, 404, etc.).
response_code_class :
The HTTP response code class of the response served to the end user (200, 400, etc.).
cdn_metro :
The Cloud CDN metro that this traffic was served out of.
domain_name :
The domain name that this traffic was served for.
backend/response_bytes_count
BETA
(project)
Response Bytes Count
DELTA , INT64 , By
firebaseapphosting.googleapis.com/Backend
Bytes sent in response to user requests.
cache_hit :
Whether the requests were served from the CDN cache.
response_code :
The HTTP response code served to the end user (200, 404, etc.).
response_code_class :
The HTTP response code class of the response served to the end user (200, 400, etc.).
cdn_metro :
The Cloud CDN metro that this traffic was served out of.
domain_name :
The domain name that this traffic was served for.
firebaseauth
Metrics from Firebase .
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with firebaseauth.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
phone_auth/phone_verification_count
GA
(project)
Phone Verification Metrics
DELTA , INT64 , 1
firebase_auth
Detailed count of phone verification. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
tier_name :
Tier name for verified phone number.
country_code :
Country code for verified phone number.
firebasedatabase
Metrics from Firebase .
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with firebasedatabase.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
io/database_load
GA
(project)
Database Load
GAUGE , DOUBLE , 1
firebase_namespace
Fraction of database load, grouped by type. Sampled every 60 seconds. After sampling, data is not visible for up to 1800 seconds.
type :
The message type that the actor processed.
io/persisted_bytes_count
GA
(project)
Saved Bytes
DELTA , INT64 , By
firebase_namespace
Bytes of data persisted to disk.
io/sent_responses_count
GA
(project)
Responses sent
DELTA , INT64 , 1
firebase_namespace
Number of responses sent or broadcasted to clients.
io/utilization
GA
(project)
I/O utilization
GAUGE , DOUBLE , 1
firebase_namespace
Fraction of I/O used. Sampled every 60 seconds. After sampling, data is not visible for up to 1800 seconds.
network/active_connections
GA
(project)
Connections
GAUGE , INT64 , 1
firebase_namespace
The number of outstanding connections. Sampled every 60 seconds. After sampling, data is not visible for up to 1800 seconds.
network/api_hits_count
GA
(project)
API Hits
DELTA , INT64 , 1
firebase_namespace
The number of hits against your database grouped by type.
operation_type :
The operation type, this lines up with the profiler.
network/broadcast_load
GA
(project)
Broadcast Load
GAUGE , DOUBLE , 1
firebase_namespace
Utilization of the time it takes to prep and send broadcasts to clients. Sampled every 60 seconds. After sampling, data is not visible for up to 1800 seconds.
network/disabled_for_overages
GA
(project)
Disabled for network
GAUGE , BOOL ,
firebase_namespace
Indicates if the Firebase database has been disabled for network overages. Sampled every 900 seconds. After sampling, data is not visible for up to 1800 seconds.
network/https_requests_count
GA
(project)
HTTPS Requests Received
DELTA , INT64 , 1
firebase_namespace
Number of HTTPS requests received.
reused_ssl_session :
If the SSL Session was reused.
network/monthly_sent
GA
(project)
Bytes sent monthly
GAUGE , INT64 , By
firebase_namespace
The total outgoing bytes sent aggregated and reset monthly. Sampled every 1800 seconds. After sampling, data is not visible for up to 5400 seconds.
network/monthly_sent_limit
GA
(project)
Bytes sent limit
GAUGE , INT64 , By
firebase_namespace
The monthly network limit for the Firebase database. Sampled every 900 seconds. After sampling, data is not visible for up to 1800 seconds.
network/sent_bytes_count
GA
(project)
Total billed bytes
DELTA , INT64 , By
firebase_namespace
The outgoing bandwidth used by the database, including encryption and protocol overhead.
network/sent_payload_and_protocol_bytes_count
GA
(project)
Payload and Protocol Bytes sent
DELTA , INT64 , By
firebase_namespace
The outgoing bandwidth usage without encryption overhead.
network/sent_payload_bytes_count
GA
(project)
Payload Bytes Sent
DELTA , INT64 , By
firebase_namespace
The outgoing bandwidth usage without encryption nor protocol.
rules/evaluation_count
GA
(project)
Rule evaluations
DELTA , INT64 , 1
firebase_namespace
The number of Firebase Realtime Database Security Rule evaluations performed in response to write and read requests.
request_method :
The request method.
ruleset_label :
The ruleset label.
result :
The result.
storage/disabled_for_overages
GA
(project)
Disabled for storage
GAUGE , BOOL ,
firebase_namespace
Indicates if the Firebase database has been disabled for storage overages. Sampled every 86400 seconds. After sampling, data is not visible for up to 86400 seconds.
storage/limit
GA
(project)
Bytes stored limit
GAUGE , INT64 , By
firebase_namespace
The storage limit for the Firebase database. Sampled every 900 seconds. After sampling, data is not visible for up to 1800 seconds.
storage/total_bytes
GA
(project)
Bytes stored
GAUGE , INT64 , By
firebase_namespace
The size of the Firebase database storage. Sampled every 86400 seconds. After sampling, data is not visible for up to 86400 seconds.
firebasedataconnect
Metrics from Firebase .
Launch stages of these metrics:
BETA
The "metric type" strings in this table must be prefixed
with firebasedataconnect.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
connector/datasource_latencies
BETA
(project)
Datasource Latency
DELTA , DISTRIBUTION , ms
firebasedataconnect.googleapis.com/Connector
The latency of the data sources queried by the operations executed.
type :
The type of operation.
response_code :
The response code for the operation.
response_code_class :
The response code class for the operation: 2xx, 3xx, 4xx, 5xx or 0 for none.
operation_name :
The name of the operation.
client_version :
The client version based on X-Client-Version header.
client_platform :
The client platform based on X-Client-Platform header.
datasource_id :
The datasource ID.
connector/datasource_request_bytes_count
BETA
(project)
Datasource Request Bytes
DELTA , INT64 , By
firebasedataconnect.googleapis.com/Connector
The number of bytes sent to the data source queried by the operations executed.
type :
The type of operation.
response_code :
The response code for the operation.
response_code_class :
The response code class for the operation: 2xx, 3xx, 4xx, 5xx or 0 for none.
operation_name :
The name of the operation.
client_version :
The client version based on X-Client-Version header.
client_platform :
The client platform based on X-Client-Platform header.
datasource_id :
The datasource ID.
connector/datasource_response_bytes_count
BETA
(project)
Datasource Response Bytes
DELTA , INT64 , By
firebasedataconnect.googleapis.com/Connector
The number of bytes returned by the data source queried by the operations executed.
type :
The type of operation.
response_code :
The response code for the operation.
response_code_class :
The response code class for the operation: 2xx, 3xx, 4xx, 5xx or 0 for none.
operation_name :
The name of the operation.
client_version :
The client version based on X-Client-Version header.
client_platform :
The client platform based on X-Client-Platform header.
datasource_id :
The datasource ID.
connector/network/sent_bytes_count
BETA
(project)
Network Data Transferred Out
DELTA , INT64 , By
firebasedataconnect.googleapis.com/Connector
The number of bytes transferred out.
type :
The type of operation.
response_code :
The response code for the operation.
response_code_class :
The response code class for the operation: 2xx, 3xx, 4xx, 5xx or 0 for none.
operation_name :
The name of the operation.
client_version :
The client version based on X-Client-Version header.
client_platform :
The client platform based on X-Client-Platform header.
connector/operation_count
BETA
(project)
Operations
DELTA , INT64 , 1
firebasedataconnect.googleapis.com/Connector
The number of operations executed.
type :
The type of operation.
response_code :
The response code for the operation.
response_code_class :
The response code class for the operation: 2xx, 3xx, 4xx, 5xx or 0 for none.
operation_name :
The name of the operation.
client_version :
The client version based on X-Client-Version header.
client_platform :
The client platform based on X-Client-Platform header.
connector/operation_latencies
BETA
(project)
Operation Latency
DELTA , DISTRIBUTION , ms
firebasedataconnect.googleapis.com/Connector
The latency of the operations executed.
type :
The type of operation.
response_code :
The response code for the operation.
response_code_class :
The response code class for the operation: 2xx, 3xx, 4xx, 5xx or 0 for none.
operation_name :
The name of the operation.
client_version :
The client version based on X-Client-Version header.
client_platform :
The client platform based on X-Client-Platform header.
service/datasource_latencies
BETA
(project)
Datasource Latency
DELTA , DISTRIBUTION , ms
firebasedataconnect.googleapis.com/Service
The latency of the data sources queried by operations executed (same as connector/datasource_latencies, but without connector_id label).
type :
The type of operation.
response_code :
The response code for the operation.
response_code_class :
The response code class for the operation: 2xx, 3xx, 4xx, 5xx or 0 for none.
operation_name :
The name of the operation.
client_version :
The client version based on X-Client-Version header.
client_platform :
The client platform based on X-Client-Platform header.
datasource_id :
The datasource ID.
service/datasource_request_bytes_count
BETA
(project)
Datasource Request Bytes
DELTA , INT64 , By
firebasedataconnect.googleapis.com/Service
The number of bytes sent to the data source queried by operations executed (same as connector/datasource_request_bytes_count, but without connector_id label).
type :
The type of operation.
response_code :
The response code for the operation.
response_code_class :
The response code class for the operation: 2xx, 3xx, 4xx, 5xx or 0 for none.
operation_name :
The name of the operation.
client_version :
The client version based on X-Client-Version header.
client_platform :
The client platform based on X-Client-Platform header.
datasource_id :
The datasource ID.
service/datasource_response_bytes_count
BETA
(project)
Datasource Response Bytes
DELTA , INT64 , By
firebasedataconnect.googleapis.com/Service
The number of bytes returned by the data sources queried by operations executed (same as connector/datasource_response_bytes_count, but without connector_id label).
type :
The type of operation.
response_code :
The response code for the operation.
response_code_class :
The response code class for the operation: 2xx, 3xx, 4xx, 5xx or 0 for none.
operation_name :
The name of the operation.
client_version :
The client version based on X-Client-Version header.
client_platform :
The client platform based on X-Client-Platform header.
datasource_id :
The datasource ID.
service/network/sent_bytes_count
BETA
(project)
Network Data Transfer Out
DELTA , INT64 , By
firebasedataconnect.googleapis.com/Service
The number of bytes transferred out by operations executed (same as connector/network/sent_bytes_count, but without connector_id label).
type :
The type of operation.
response_code :
The response code for the operation.
response_code_class :
The response code class for the operation: 2xx, 3xx, 4xx, 5xx or 0 for none.
operation_name :
The name of the operation.
client_version :
The client version based on X-Client-Version header.
client_platform :
The client platform based on X-Client-Platform header.
service/operation_count
BETA
(project)
Operations
DELTA , INT64 , 1
firebasedataconnect.googleapis.com/Service
The number of operations executed (same as connector/operation_count, but without connector_id label).
type :
The type of operation.
response_code :
The response code for the operation.
response_code_class :
The response code class for the operation: 2xx, 3xx, 4xx, 5xx or 0 for none.
operation_name :
The name of the operation.
client_version :
The client version based on X-Client-Version header.
client_platform :
The client platform based on X-Client-Platform header.
service/operation_latencies
BETA
(project)
Operation Latency
DELTA , DISTRIBUTION , ms
firebasedataconnect.googleapis.com/Service
The latency of operations executed (same as connector/operation_latencies, but without connector_id label).
type :
The type of operation.
response_code :
The response code for the operation.
response_code_class :
The response code class for the operation: 2xx, 3xx, 4xx, 5xx or 0 for none.
operation_name :
The name of the operation.
client_version :
The client version based on X-Client-Version header.
client_platform :
The client platform based on X-Client-Platform header.
firebaseextensions
Metrics from Firebase .
Launch stages of these metrics:
BETA
The "metric type" strings in this table must be prefixed
with firebaseextensions.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
extension/version/active_instances
BETA
(project)
Active instances
GAUGE , INT64 , 1
firebaseextensions.googleapis.com/ExtensionVersion
The number of active instances of the published extension version. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
firebasehosting
Metrics from Firebase .
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with firebasehosting.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
network/monthly_sent
GA
(project)
Bytes sent monthly
GAUGE , INT64 , By
firebase_domain
The total outgoing bytes sent, aggregated and reset monthly. Sampled every 28800 seconds. After sampling, data is not visible for up to 4200 seconds.
network/monthly_sent_limit
GA
(project)
Bytes sent limit
GAUGE , INT64 , By
firebase_domain
The monthly network limit for Firebase Hosting. Sampled every 28800 seconds. After sampling, data is not visible for up to 4200 seconds.
network/sent_bytes_count
GA
(project)
Bytes sent
DELTA , INT64 , By
firebase_domain
The outgoing bandwidth usage for Firebase Hosting.
storage/limit
GA
(project)
Bytes stored limit
GAUGE , INT64 , By
firebase_domain
The storage limit for Firebase Hosting. Sampled every 28800 seconds.
storage/total_bytes
GA
(project)
Bytes stored
GAUGE , INT64 , By
firebase_domain
The size of the Firebase Hosting storage. Sampled every 28800 seconds.
firebasestorage
Metrics from Cloud Storage for Firebase .
Launch stages of these metrics:
BETA
The "metric type" strings in this table must be prefixed
with firebasestorage.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
rules/evaluation_count
BETA
(project)
Rule evaluations
DELTA , INT64 , 1
gcs_bucket
The number of Cloud Storage for Firebase Security Rules evaluations performed in response to write or read requests. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
request_method :
The method/operation type of the request: CREATE, UPDATE, or DELETE; or GET, LIST.
ruleset_label :
The ruleset label indicating whether it's the current production release.
result :
The evaluation result: ALLOW, DENY, or ERROR.
firebasevertexai
Metrics from Gemini in Firebase
Launch stages of these metrics:
BETA
GA
The "metric type" strings in this table must be prefixed
with firebasevertexai.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
PromptTemplate/render_count
BETA
(project)
Render Count
DELTA , INT64 , 1
firebasevertexai.googleapis.com/PromptTemplate
The number of attempts to render the template.
gcp_firebase_app_id :
The Firebase App ID.
gcp_firebase_app_version :
The Firebase App version, such as 1.0.0.
gcp_firebase_request_framework_name :
The SDK framework used to make the request, such as `swift_sdk`.
gen_ai_firebase_response_status :
`success` or `failure`'.
PromptTemplate/render_latency
BETA
(project)
Render Latency
DELTA , DISTRIBUTION , 1
firebasevertexai.googleapis.com/PromptTemplate
The time spent rendering the template only. It does not include the LLM invocation time.
gcp_firebase_app_id :
The Firebase App ID.
gcp_firebase_app_version :
The Firebase App version, such as 1.0.0.
gcp_firebase_request_framework_name :
The SDK framework used to make the request, such as `swift_sdk`.
gen_ai_firebase_response_status :
`success` or `failure`'.
model/gen_ai_client_operation_duration
GA
(project)
Operation Duration
DELTA , DISTRIBUTION , 1
firebasevertexai.googleapis.com/Model
The duration from request to response.
gcp_firebase_app_id :
The Firebase App ID.
gcp_firebase_app_version :
The Firebase App version, such as 1.0.0.
gcp_firebase_request_framework_name :
The SDK framework used to make the request, such as `swift_sdk`.
gen_ai_firebase_response_status :
`success` or `failure`'.
gen_ai_operation_name :
The operation name, such as `generate_content`.
gen_ai_request_model :
The model specified in the request, such as `gemini-0.0-flash`.
gen_ai_response_model :
The specific model that generated the response, such as `gemini-0.0-flash-002`.
error_type :
A short string representing the error type, such as `INVALID_ARGUMENT`, `RESOURCE_EXHAUSTED` or `BLOCKED_SAFETY`.
model/gen_ai_client_token_usage
GA
(project)
Client Token Usage
DELTA , INT64 , 1
firebasevertexai.googleapis.com/Model
The number of tokens used in a request/response.
gcp_firebase_app_id :
The Firebase App ID.
gcp_firebase_app_version :
The Firebase App version, such as 1.0.0.
gcp_firebase_request_framework_name :
The SDK framework used to make the request, such as `swift_sdk`.
gen_ai_firebase_response_status :
`success` or `failure`'.
gen_ai_operation_name :
The operation name, such as `generate_content`.
gen_ai_token_type :
The type of token, such as `input`, `output`, or `thinking`.
gen_ai_request_model :
The model specified in the request, such as `gemini-0.0-flash`.
gen_ai_response_model :
The specific model that generated the response, such as `gemini-0.0-flash-002`.
error_type :
A short string representing the error type, such as `INVALID_ARGUMENT`, `RESOURCE_EXHAUSTED` or `BLOCKED_SAFETY`.
model/gen_ai_firebase_modality_count
GA
(project)
Modality Usage Count
DELTA , INT64 , 1
firebasevertexai.googleapis.com/Model
The count of usage of a particular modality.
gcp_firebase_app_id :
The Firebase App ID.
gcp_firebase_app_version :
The Firebase App version, such as 1.0.0.
gcp_firebase_request_framework_name :
The SDK framework used to make the request, such as `swift_sdk`.
gen_ai_firebase_response_status :
`success` or `failure`'.
gen_ai_firebase_usage_type :
The direction of usage, such as `input` or `output`.
gen_ai_firebase_modality_type :
One of the modalities, such as `text`, `image`, `video`, `audio`, or `document`.
gen_ai_operation_name :
The operation name, such as `generate_content`.
gen_ai_request_model :
The model specified in the request, such as `gemini-0.0-flash`.
gen_ai_response_model :
The specific model that generated the response, such as `gemini-0.0-flash-002`.
error_type :
A short string representing the error type, such as `INVALID_ARGUMENT`, `RESOURCE_EXHAUSTED` or `BLOCKED_SAFETY`.
model/gen_ai_firebase_modality_usage
GA
(project)
Modality Token Usage
DELTA , INT64 , 1
firebasevertexai.googleapis.com/Model
The count of token usage of a particular modality.
gcp_firebase_app_id :
The Firebase App ID.
gcp_firebase_app_version :
The Firebase App version, such as 1.0.0.
gcp_firebase_request_framework_name :
The SDK framework used to make the request, such as `swift_sdk`.
gen_ai_firebase_response_status :
`success` or `failure`'.
gen_ai_firebase_usage_type :
The direction of usage, such as `input` or `output`.
gen_ai_firebase_modality_type :
One of the modalities, such as `text`, `image`, `video`, `audio`, or `document`.
gen_ai_operation_name :
The operation name, such as `generate_content`.
gen_ai_request_model :
The model specified in the request, such as `gemini-0.0-flash`.
gen_ai_response_model :
The specific model that generated the response, such as `gemini-0.0-flash-002`.
error_type :
A short string representing the error type, such as `INVALID_ARGUMENT`, `RESOURCE_EXHAUSTED` or `BLOCKED_SAFETY`.
firestore
Metrics from Firestore .
Launch stages of these metrics:
ALPHA
BETA
GA
The "metric type" strings in this table must be prefixed
with firestore.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
api/billable_read_units
BETA
(project)
Billable read units
DELTA , INT64 , 1
firestore.googleapis.com/Database
The number of billable read units. These metrics are only available for Firestore databases with Enterprise Edition. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
service :
The API service called, one of ["firestore.googleapis.com", "datastore.googleapis.com"].
api_method :
The API method called, for example, "RunQuery" or "MongoDBCompatible.Find".
api/billable_realtime_read_units
BETA
(project)
Billable real-time read units
DELTA , INT64 , 1
firestore.googleapis.com/Database
The number of billable real-time read units. This metric is only available for Firestore databases with Enterprise Edition. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
service :
The API service called, one of ["firestore.googleapis.com", "datastore.googleapis.com"].
api_method :
The API method called, for example, "RunQuery" or "MongoDBCompatible.Find".
api/billable_write_units
BETA
(project)
Billable write units
DELTA , INT64 , 1
firestore.googleapis.com/Database
The number of billable write units. This metric is only available for Firestore databases with Enterprise Edition. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
service :
The API service called, one of ["firestore.googleapis.com", "datastore.googleapis.com"].
api_method :
The API method called, for example, "RunQuery" or "MongoDBCompatible.Find".
api/request_count
BETA
(project)
Requests
DELTA , INT64 , 1
datastore_request
firestore.googleapis.com/Database
Count of Firestore API calls. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
api_method :
The API method called (for example: BeginTransaction or Commit).
response_code :
Operation response code string, derived as a string representation of a HTTP status code (e.g. success, not_found, unavailable).
api/request_latencies
BETA
(project)
Request latencies per database
DELTA , DISTRIBUTION , s
firestore.googleapis.com/Database
Non-streaming Firestore v1, Datastore v1 and Datastore v3 request latencies from the frontend. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
service :
The API service called, one of ["firestore.googleapis.com", "datastore.googleapis.com", "datastore-private.googleapis.com"].
api_method :
The API method called, for example, "BeginTransaction", "Commit" or "MongoDBCompatible.Find".
response_code :
Operation response code string, derived as a string representation of a HTTP status code, for example, "OK", "DEADLINE_EXCEEDED", "ABORTED", "PERMISSION_DENIED", "INVALID_ARGUMENT".
composite_indexes_per_database
GA
(project)
Composite Indexes Per Database
GAUGE , INT64 , 1
firestore.googleapis.com/Database
Current number of composite indexes per database. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
document/billable_managed_delete_write_units
BETA
(project)
Billable managed delete write units
DELTA , INT64 , 1
firestore.googleapis.com/Database
The number of billable managed delete write units. This metric is only available for Firestore databases with Enterprise Edition. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
document/delete_count
GA
(project)
Document Deletes
DELTA , INT64 , 1
firestore_instance
The number of successful document deletes. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
module :
The service/module name.
version :
The version name.
document/delete_ops_count
BETA
(project)
Document deletes
DELTA , INT64 , 1
firestore.googleapis.com/Database
The number of successful document deletes. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
document/read_count
GA
(project)
Document Reads
DELTA , INT64 , 1
firestore_instance
The number of successful document reads from queries or lookups. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
module :
The service/module name.
version :
The version name.
type :
The type of the read (e.g. 'LOOKUP', 'QUERY').
document/read_ops_count
BETA
(project)
Document reads
DELTA , INT64 , 1
firestore.googleapis.com/Database
The number of successful document reads from queries or lookups. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
type :
The type of the read, one of [LOOKUP, QUERY].
document/ttl_deletion_count
GA
(project)
TTL deletion count
DELTA , INT64 , 1
firestore.googleapis.com/Database
firestore_instance
Total count of documents deleted by TTL services. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
document/ttl_expiration_to_deletion_delays
GA
(project)
TTL expiration to deletion delays
DELTA , DISTRIBUTION , s
firestore.googleapis.com/Database
firestore_instance
Time elapsed between when a document with a TTL expired, and when it was actually deleted. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
document/write_count
GA
(project)
Document Writes
DELTA , INT64 , 1
firestore_instance
The number of successful document writes. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
module :
The service/module name.
version :
The version name.
op :
The operation name for the write (e.g. 'CREATE', 'UPDATE').
document/write_ops_count
BETA
(project)
Document writes
DELTA , INT64 , 1
firestore.googleapis.com/Database
The number of successful document writes. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
op :
The operation name for the write, one of [CREATE, UPDATE].
field_configurations_per_database
ALPHA
(project)
Field Configurations Per Database
GAUGE , INT64 , 1
firestore.googleapis.com/Database
Current number of field configurations per database. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
mcp/request_count
BETA
(project)
Firestore MCP Request Count
DELTA , INT64 , 1
firestore.googleapis.com/Database
Count of Firestore MCP calls. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
tool_name :
The name of the MCP tool making the MCP call.
response_code :
Operation response code string, derived as a string representation of a HTTP status code (e.g. success, not_found, unavailable).
mcp/request_latencies
BETA
(project)
Firestore MCP Request Latencies
DELTA , DISTRIBUTION , s
firestore.googleapis.com/Database
Distribution of latencies for Firestore MCP calls. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
tool_name :
The name of the MCP tool making the MCP call.
response_code :
Operation response code string, derived as a string representation of a HTTP status code (e.g. success, not_found, unavailable).
network/active_connections
BETA
(project)
Connected Clients
GAUGE , INT64 , 1
firestore.googleapis.com/Database
firestore_instance
The number of active connections. Each mobile client will have one connection. Each listener in admin SDK will be one connection. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
module :
The service/module name.
version :
The version name.
network/active_ignite_connections
BETA
(project)
Active Ignite Connections
GAUGE , INT64 , 1
firestore.googleapis.com/Database
The number of active ignite connections. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
module :
The service/module name.
version :
The version name.
network/snapshot_listeners
BETA
(project)
Snapshot Listeners
GAUGE , INT64 , 1
firestore.googleapis.com/Database
firestore_instance
The number of snapshot listeners currently registered across all connected clients. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
module :
The service/module name.
version :
The version name.
query_stat/per_query/result_counts
BETA
(project)
Number of results yielded per query
DELTA , DISTRIBUTION , {result}
firestore.googleapis.com/Database
Distribution of number of results yielded per query. Real-time queries are excluded. Note. This metric is for performance observability. It is not relevant to billing calculations. To understand how read operations contribute to your bill, use "firestore.googleapis.com/document/read_ops_count". Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
service :
The API service called, one of ["firestore.googleapis.com", "datastore.googleapis.com"].
method :
The API method called, for example, "RunQuery" or "RunAggregationQuery".
query_stat/per_query/scanned_documents_counts
BETA
(project)
Number of documents scanned per query
DELTA , DISTRIBUTION , {document}
firestore.googleapis.com/Database
Distribution of number of documents scanned per query. Real-time queries are excluded. Note. This metric is for performance observability. It is not relevant to billing calculations. To understand how read operations contribute to your bill, use "firestore.googleapis.com/document/read_ops_count". Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
service :
The API service called, one of ["firestore.googleapis.com", "datastore.googleapis.com"].
method :
The API method called, for example, "RunQuery" or "RunAggregationQuery".
query_stat/per_query/scanned_index_entries_counts
BETA
(project)
Number of index entries scanned per query
DELTA , DISTRIBUTION , {index entry}
firestore.googleapis.com/Database
Distribution of number of scanned index entries per query. Real-time queries are excluded. Note. This metric is for performance observability. It is not relevant to billing calculations. To understand how read operations contribute to your bill, use "firestore.googleapis.com/document/read_ops_count". Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
service :
The API service called, one of ["firestore.googleapis.com", "datastore.googleapis.com"].
method :
The API method called, for example, "RunQuery" or "RunAggregationQuery".
quota/composite_indexes_per_database/exceeded
GA
(project)
Composite Indexes Per Database quota exceeded error
DELTA , INT64 , 1
firestore.googleapis.com/Database
Number of attempts to exceed the limit on quota metric firestore.googleapis.com/composite_indexes_per_database. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/composite_indexes_per_database/limit
GA
(project)
Composite Indexes Per Database quota limit
GAUGE , INT64 , 1
firestore.googleapis.com/Database
Current limit on quota metric firestore.googleapis.com/composite_indexes_per_database. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/composite_indexes_per_database/usage
GA
(project)
Composite Indexes Per Database quota usage
GAUGE , INT64 , 1
firestore.googleapis.com/Database
Current usage on quota metric firestore.googleapis.com/composite_indexes_per_database. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
rules/evaluation_count
BETA
(project)
Rule Evaluations
DELTA , INT64 , 1
firestore.googleapis.com/Database
firestore_instance
The number of Cloud Firestore Security Rule evaluations performed in response to write (create, update, delete) or read (get, list) requests. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
request_method :
The permission type of the request.
ruleset_label :
The ruleset label indicating whether it is the current production release.
version :
The version name.
module :
The service/module name.
result :
The evaluation result: ALLOW, DENY, or ERROR.
storage/backups_storage_bytes
BETA
(project)
Backups Storage Size
GAUGE , INT64 , By
firestore.googleapis.com/Database
Per database total backup storage size(in bytes). Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
storage/data_and_index_storage_bytes
BETA
(project)
Data and Index Storage Size
GAUGE , INT64 , By
firestore.googleapis.com/Database
Per database data and index storage size(in bytes). Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
storage/pitr_storage_bytes
BETA
(project)
Point in time recovery Storage Size
GAUGE , INT64 , By
firestore.googleapis.com/Database
Per database point in time recovery storage size(in bytes). Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
firewallinsights
Metrics from Firewall Insights .
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with firewallinsights.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
subnet/all/firewall_hit_count
GA
(project)
Firewall All Types Hit Counts
DELTA , INT64 , 1
gce_subnetwork
The hit count of various firewalls for network traffic. Please note that this metric applies only to firewalls for which Firewall Logging has been turned on. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
type :
Type of firewall rule, one of [VPC_FIREWALL, NETWORK_FIREWALL_POLICY, HIERARCHICAL_FIREWALL_POLICY ,UNSPECIFIED].
firewall_name :
For VPC firewall rules, this is the name of the rule. For hierarchical firewall policies, this is the policy numeric ID. For network firewall policies, this is the name of the policy.
firewall_location :
For regional firewall policies the firewall region, otherwisecontains a fixed value "global".
priority :
(INT64)
Priority of the VPC firewall rule or of the policy rule.
subnet/all/firewall_last_used_timestamp
GA
(project)
Firewall Last Used Timestamp
GAUGE , INT64 , 1
gce_subnetwork
The epoch timestamp (in seconds) of the last time a firewall was used for network traffic. Please note that this metric applies only to firewalls for which Firewall Logging has been turned on. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
type :
Type of firewall rule, one of [VPC_FIREWALL, NETWORK_FIREWALL_POLICY, HIERARCHICAL_FIREWALL_POLICY ,UNSPECIFIED].
firewall_name :
For VPC firewall rules, this is the name of the rule. For hierarchical firewall policies, this is the policy numeric ID. For network firewall policies, this is the name of the policy.
firewall_location :
For regional firewall policies the firewall region, for global firewall policies contains a fixed value.
priority :
(INT64)
Priority of the VPC firewall rule or of the policy rule.
subnet/firewall_hit_count
GA
(project)
Subnet Firewall Hit Counts
DELTA , INT64 , 1
gce_subnetwork
The hit count of various firewalls for the traffic corresponding to a subnet. Please note that this metric applies only to firewalls for which Firewall Logging has been turned on. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
network_name :
The name of the network that this subnet belongs to.
firewall_name :
The name of firewall to which a hit is attributed.
subnet/firewall_last_used_timestamp
GA
(project)
Subnet Firewall Last Used Timestamp
GAUGE , INT64 , 1
gce_subnetwork
The epoch timestamp (in seconds) of the last time a firewall was used for the traffic corresponding to a subnet. Please note that this metric applies only to firewalls for which Firewall Logging has been turned on. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
network_name :
The name of the network that this subnet belongs to.
firewall_name :
The name of firewall to which a hit is attributed.
vm/all/firewall_hit_count
GA
(project)
Firewall All Types Hit Counts
DELTA , INT64 , 1
gce_instance
The hit count of various firewalls for network traffic. Please note that this metric applies only to firewalls for which Firewall Logging has been turned on. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
type :
Type of firewall rule, one of [VPC_FIREWALL, NETWORK_FIREWALL_POLICY, HIERARCHICAL_FIREWALL_POLICY ,UNSPECIFIED].
firewall_name :
For VPC firewall rules, this is the name of the rule. For hierarchical firewall policies, this is the policy numeric ID. For network firewall policies, this is the name of the policy.
firewall_location :
For regional firewall policies the firewall region, otherwisecontains a fixed value "global".
interface_name :
The vm network interface which the rule was triggered for, such as "nic0".
priority :
(INT64)
Priority of the VPC firewall rule or of the policy rule.
vm/all/firewall_last_used_timestamp
GA
(project)
Firewall Last Used Timestamp
GAUGE , INT64 , 1
gce_instance
The epoch timestamp (in seconds) of the last time a firewall was used for network traffic. Please note that this metric applies only to firewalls for which Firewall Logging has been turned on. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
type :
Type of firewall rule, one of [VPC_FIREWALL, NETWORK_FIREWALL_POLICY, HIERARCHICAL_FIREWALL_POLICY ,UNSPECIFIED].
firewall_name :
For VPC firewall rules, this is the name of the rule. For hierarchical firewall policies, this is the policy numeric ID. For network firewall policies, this is the name of the policy.
firewall_location :
For regional firewall policies the firewall region, for global firewall policies contains a fixed value.
interface_name :
The vm network interface which the rule was triggered for, such as "nic0".
priority :
(INT64)
Priority of the VPC firewall rule or of the policy rule.
vm/firewall_hit_count
GA
(project)
VM Firewall Hit Counts
DELTA , INT64 , 1
gce_instance
The hit count of various firewalls for the traffic corresponding to a VM. Please note that this metric applies only to firewalls for which Firewall Logging has been turned on. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
firewall_project_id :
The project id that this firewall belongs to. In the shared VPC case, the host project might be different from the instance project that a VM belongs to.
firewall_name :
The name of firewall to which a hit is attributed.
vm/firewall_last_used_timestamp
GA
(project)
VM Firewall Last Used Timestamp
GAUGE , INT64 , 1
gce_instance
The epoch timestamp (in seconds) of the last time a firewall was used for the traffic corresponding to a VM. Please note that this metric applies only to firewalls for which Firewall Logging has been turned on. Sampled every 60 seconds. After sampling, data is not visible for up to 210 seconds.
firewall_project_id :
The project id that this firewall belongs to. In the shared VPC case, the host project might be different from the instance project that a VM belongs to.
firewall_name :
The name of firewall to which a hit is attributed.
fleetengine
Metrics from Fleet Engine .
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with fleetengine.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
task/billable_shipment_task_count
GA
(project)
Billable shipment task count
DELTA , INT64 , 1
fleetengine.googleapis.com/DeliveryFleet
The number of billable shipment tasks completed.
country_code :
The task's country code.
trip/billable_trip_count
GA
(project)
Billable trip count
DELTA , INT64 , 1
fleetengine.googleapis.com/Fleet
The number of billable trips reported.
country_code :
The trip's country code.
fpnv
Metrics from Firebase Phone Number Verification .
Launch stages of these metrics:
BETA
The "metric type" strings in this table must be prefixed
with fpnv.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
verification_count
BETA
(project)
Verification Attempts
DELTA , INT64 , 1
fpnv.googleapis.com/Project
Number of phone number verification attempts.
method :
Verification method used (API).
region_code :
The two-letter region code for the phone number.
outcome :
The outcome of the verification attempt.
platform :
The platform where verification was requested.
geminidataanalytics
Metrics from Gemini Data Analytics .
Launch stages of these metrics:
BETA
The "metric type" strings in this table must be prefixed
with geminidataanalytics.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
agent/created_count
BETA
(project)
Agent Created Count
DELTA , INT64 , 1
geminidataanalytics.googleapis.com/Location
The total number of data agents created.
status :
The type of error if the final status contains ERROR. Or "OK" if there is no error.
agent/deleted_count
BETA
(project)
Agent Deleted Count
DELTA , INT64 , 1
geminidataanalytics.googleapis.com/Location
The total number of data agents deleted.
status :
The type of error if the final status contains ERROR. Or "OK" if there is no error.
agent/undeleted_count
BETA
(project)
Agent Undeleted Count
DELTA , INT64 , 1
geminidataanalytics.googleapis.com/Location
The total number of data agents undeleted.
status :
The type of error if the final status contains ERROR. Or "OK" if there is no error.
chat/conversation/created_count
BETA
(project)
Conversation Created Count
DELTA , INT64 , 1
geminidataanalytics.googleapis.com/Location
The total number of conversations created, across all agents.
status :
The type of error if the final status contains ERROR. Or "OK" if there is no error.
chat/conversation/deleted_count
BETA
(project)
Conversation Deleted Count
DELTA , INT64 , 1
geminidataanalytics.googleapis.com/Location
The total number of conversations deleted, across all agents.
status :
The type of error if the final status contains ERROR. Or "OK" if there is no error.
chat/input_token_count
BETA
(project)
Input Token Count
DELTA , INT64 , {token}
geminidataanalytics.googleapis.com/Location
The total number of input tokens used, across all conversations / agents.
model_name :
The name of the model invoked.
status :
The type of error if the final status of LLM call contains ERROR. Or the stop reason if there is no error.
chat/model/invocation_count
BETA
(project)
Model Invocation Count
DELTA , INT64 , 1
geminidataanalytics.googleapis.com/Location
The total number of model invocations, across all conversations / agents.
model_name :
The name of the model invoked.
status :
The type of error if the final status of LLM call contains ERROR. Or the stop reason if there is no error.
chat/model_latencies
BETA
(project)
Chat Model Latencies
DELTA , DISTRIBUTION , ms
geminidataanalytics.googleapis.com/Location
A distribution of the time taken for model invocations.
model_name :
The name of the model invoked.
status :
The type of error if the final status of LLM call contains ERROR. Or the stop reason if there is no error.
chat/output_token_count
BETA
(project)
Output Token Count
DELTA , INT64 , {token}
geminidataanalytics.googleapis.com/Location
The total number of output tokens used, across all conversations / agents.
model_name :
The name of the model invoked.
status :
The type of error if the final status of LLM call contains ERROR. Or the stop reason if there is no error.
chat/tool/invocation_count
BETA
(project)
Tool Invocation Count
DELTA , INT64 , 1
geminidataanalytics.googleapis.com/Location
The total number of tool invocations, across all conversations / agents.
tool_name :
The name of the tool invoked.
status :
The type of error if the final status contains ERROR. Or the stop reason if there is no error.
chat/tool_latencies
BETA
(project)
Chat Tool Latencies
DELTA , DISTRIBUTION , ms
geminidataanalytics.googleapis.com/Location
A distribution of the time taken for tool invocations.
tool_name :
The name of the tool invoked.
status :
The type of error if the final status contains ERROR. Or "OK" if there is no error.
chat/turn_count
BETA
(project)
Turn Count
DELTA , INT64 , 1
geminidataanalytics.googleapis.com/Location
The total number of turns processed, across all conversations / agents.
status :
The type of error if the final status contains ERROR. Or "OK" if there is no error.
chat/turn_latencies
BETA
(project)
Turn Latencies
DELTA , DISTRIBUTION , ms
geminidataanalytics.googleapis.com/Location
A distribution of the time taken to complete a turn.
status :
The type of error if the final status contains ERROR. Or "OK" if there is no error.
quota/a2a/requests_per_agent/exceeded
BETA
(project)
A2A requests per agent quota exceeded error
DELTA , INT64 , 1
geminidataanalytics.googleapis.com/Location
Number of attempts to exceed the limit on quota metric geminidataanalytics.googleapis.com/a2a/requests_per_agent. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
agent_id :
The unique identifier for the singleton agent. All user defined agents share one identifier.
quota/a2a/requests_per_agent/limit
BETA
(project)
A2A requests per agent quota limit
GAUGE , INT64 , 1
geminidataanalytics.googleapis.com/Location
Current limit on quota metric geminidataanalytics.googleapis.com/a2a/requests_per_agent. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
agent_id :
The unique identifier for the singleton agent. All user defined agents share one identifier.
quota/a2a/requests_per_agent/usage
BETA
(project)
A2A requests per agent quota usage
DELTA , INT64 , 1
geminidataanalytics.googleapis.com/Location
Current usage on quota metric geminidataanalytics.googleapis.com/a2a/requests_per_agent. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
agent_id :
The unique identifier for the singleton agent. All user defined agents share one identifier.
generativelanguage
Metrics from Gemini API
Launch stages of these metrics:
ALPHA
BETA
The "metric type" strings in this table must be prefixed
with generativelanguage.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
quota/embed_content_free_tier_requests/exceeded
BETA
(project)
Embed Content API requests per model for free tier quota exceeded error
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Number of attempts to exceed the limit on quota metric generativelanguage.googleapis.com/embed_content_free_tier_requests. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/embed_content_free_tier_requests/limit
BETA
(project)
Embed Content API requests per model for free tier quota limit
GAUGE , INT64 , 1
generativelanguage.googleapis.com/Location
Current limit on quota metric generativelanguage.googleapis.com/embed_content_free_tier_requests. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/embed_content_free_tier_requests/usage
BETA
(project)
Embed Content API requests per model for free tier quota usage
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Current usage on quota metric generativelanguage.googleapis.com/embed_content_free_tier_requests. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
model :
The model name.
quota/embed_content_free_tier_tokens/exceeded
BETA
(project)
Embed Content API tokens per model for free tier quota exceeded error
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Number of attempts to exceed the limit on quota metric generativelanguage.googleapis.com/embed_content_free_tier_tokens. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/embed_content_free_tier_tokens/limit
BETA
(project)
Embed Content API tokens per model for free tier quota limit
GAUGE , INT64 , 1
generativelanguage.googleapis.com/Location
Current limit on quota metric generativelanguage.googleapis.com/embed_content_free_tier_tokens. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/embed_content_free_tier_tokens/usage
BETA
(project)
Embed Content API tokens per model for free tier quota usage
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Current usage on quota metric generativelanguage.googleapis.com/embed_content_free_tier_tokens. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
model :
The model name.
quota/embed_content_paid_tier_2_requests/exceeded
BETA
(project)
Embed Content API requests per model for paid tier 2 quota exceeded error
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Number of attempts to exceed the limit on quota metric generativelanguage.googleapis.com/embed_content_paid_tier_2_requests. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/embed_content_paid_tier_2_requests/limit
BETA
(project)
Embed Content API requests per model for paid tier 2 quota limit
GAUGE , INT64 , 1
generativelanguage.googleapis.com/Location
Current limit on quota metric generativelanguage.googleapis.com/embed_content_paid_tier_2_requests. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/embed_content_paid_tier_2_requests/usage
BETA
(project)
Embed Content API requests per model for paid tier 2 quota usage
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Current usage on quota metric generativelanguage.googleapis.com/embed_content_paid_tier_2_requests. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
model :
The model name.
quota/embed_content_paid_tier_2_tokens/exceeded
BETA
(project)
Embed Content API tokens per model for paid tier 2 quota exceeded error
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Number of attempts to exceed the limit on quota metric generativelanguage.googleapis.com/embed_content_paid_tier_2_tokens. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/embed_content_paid_tier_2_tokens/limit
BETA
(project)
Embed Content API tokens per model for paid tier 2 quota limit
GAUGE , INT64 , 1
generativelanguage.googleapis.com/Location
Current limit on quota metric generativelanguage.googleapis.com/embed_content_paid_tier_2_tokens. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/embed_content_paid_tier_2_tokens/usage
BETA
(project)
Embed Content API tokens per model for paid tier 2 quota usage
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Current usage on quota metric generativelanguage.googleapis.com/embed_content_paid_tier_2_tokens. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
model :
The model name.
quota/embed_content_paid_tier_3_requests/exceeded
BETA
(project)
Embed Content API requests per model for paid tier 3 quota exceeded error
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Number of attempts to exceed the limit on quota metric generativelanguage.googleapis.com/embed_content_paid_tier_3_requests. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/embed_content_paid_tier_3_requests/limit
BETA
(project)
Embed Content API requests per model for paid tier 3 quota limit
GAUGE , INT64 , 1
generativelanguage.googleapis.com/Location
Current limit on quota metric generativelanguage.googleapis.com/embed_content_paid_tier_3_requests. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/embed_content_paid_tier_3_requests/usage
BETA
(project)
Embed Content API requests per model for paid tier 3 quota usage
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Current usage on quota metric generativelanguage.googleapis.com/embed_content_paid_tier_3_requests. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
model :
The model name.
quota/embed_content_paid_tier_3_tokens/exceeded
BETA
(project)
Embed Content API tokens per model for paid tier 3 quota exceeded error
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Number of attempts to exceed the limit on quota metric generativelanguage.googleapis.com/embed_content_paid_tier_3_tokens. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/embed_content_paid_tier_3_tokens/limit
BETA
(project)
Embed Content API tokens per model for paid tier 3 quota limit
GAUGE , INT64 , 1
generativelanguage.googleapis.com/Location
Current limit on quota metric generativelanguage.googleapis.com/embed_content_paid_tier_3_tokens. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/embed_content_paid_tier_3_tokens/usage
BETA
(project)
Embed Content API tokens per model for paid tier 3 quota usage
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Current usage on quota metric generativelanguage.googleapis.com/embed_content_paid_tier_3_tokens. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
model :
The model name.
quota/embed_content_paid_tier_requests/exceeded
BETA
(project)
Embed Content API requests per model for paid tier 1 quota exceeded error
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Number of attempts to exceed the limit on quota metric generativelanguage.googleapis.com/embed_content_paid_tier_requests. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/embed_content_paid_tier_requests/limit
BETA
(project)
Embed Content API requests per model for paid tier 1 quota limit
GAUGE , INT64 , 1
generativelanguage.googleapis.com/Location
Current limit on quota metric generativelanguage.googleapis.com/embed_content_paid_tier_requests. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/embed_content_paid_tier_requests/usage
BETA
(project)
Embed Content API requests per model for paid tier 1 quota usage
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Current usage on quota metric generativelanguage.googleapis.com/embed_content_paid_tier_requests. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
model :
The model name.
quota/embed_content_paid_tier_tokens/exceeded
BETA
(project)
Embed Content API tokens per model for paid tier 1 quota exceeded error
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Number of attempts to exceed the limit on quota metric generativelanguage.googleapis.com/embed_content_paid_tier_tokens. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/embed_content_paid_tier_tokens/limit
BETA
(project)
Embed Content API tokens per model for paid tier 1 quota limit
GAUGE , INT64 , 1
generativelanguage.googleapis.com/Location
Current limit on quota metric generativelanguage.googleapis.com/embed_content_paid_tier_tokens. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/embed_content_paid_tier_tokens/usage
BETA
(project)
Embed Content API tokens per model for paid tier 1 quota usage
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Current usage on quota metric generativelanguage.googleapis.com/embed_content_paid_tier_tokens. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
model :
The model name.
quota/generate_content_free_tier_input_token_count/exceeded
BETA
(project)
Generate content free tier input token count quota exceeded error
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Number of attempts to exceed the limit on quota metric generativelanguage.googleapis.com/generate_content_free_tier_input_token_count. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/generate_content_free_tier_input_token_count/limit
BETA
(project)
Generate content free tier input token count quota limit
GAUGE , INT64 , 1
generativelanguage.googleapis.com/Location
Current limit on quota metric generativelanguage.googleapis.com/generate_content_free_tier_input_token_count. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/generate_content_free_tier_input_token_count/usage
BETA
(project)
Generate content free tier input token count quota usage
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Current usage on quota metric generativelanguage.googleapis.com/generate_content_free_tier_input_token_count. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
model :
The model name.
quota/generate_content_free_tier_input_tokens_internal/usage
ALPHA
(project)
Generate content free tier input token count for 1P clients quota usage
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Current usage on quota metric generativelanguage.googleapis.com/generate_content_free_tier_input_tokens_internal. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
model :
The model name.
quota/generate_content_free_tier_requests/exceeded
BETA
(project)
Number of requests made to a specific model, in the free tier. quota exceeded error
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Number of attempts to exceed the limit on quota metric generativelanguage.googleapis.com/generate_content_free_tier_requests. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/generate_content_free_tier_requests/limit
BETA
(project)
Number of requests made to a specific model, in the free tier. quota limit
GAUGE , INT64 , 1
generativelanguage.googleapis.com/Location
Current limit on quota metric generativelanguage.googleapis.com/generate_content_free_tier_requests. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/generate_content_free_tier_requests/usage
BETA
(project)
Number of requests made to a specific model, in the free tier. quota usage
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Current usage on quota metric generativelanguage.googleapis.com/generate_content_free_tier_requests. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
model :
The model name.
quota/generate_content_free_tier_requests_internal/usage
BETA
(project)
Number of requests made to an internal accounting model, in the free tier. quota usage
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Current usage on quota metric generativelanguage.googleapis.com/generate_content_free_tier_requests_internal. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
model :
The model name.
quota/generate_content_paid_tier_1_input_tokens_internal/usage
ALPHA
(project)
Generate content paid tier 1 input token count for 1P clients quota usage
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Current usage on quota metric generativelanguage.googleapis.com/generate_content_paid_tier_1_input_tokens_internal. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
model :
The model name.
quota/generate_content_paid_tier_1_requests_internal/usage
BETA
(project)
Number of requests made to an internal accounting model, in the paid tier 1. quota usage
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Current usage on quota metric generativelanguage.googleapis.com/generate_content_paid_tier_1_requests_internal. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
model :
The model name.
quota/generate_content_paid_tier_2_input_token_count/exceeded
ALPHA
(project)
Generate content paid tier 2 input token count quota exceeded error
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Number of attempts to exceed the limit on quota metric generativelanguage.googleapis.com/generate_content_paid_tier_2_input_token_count. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/generate_content_paid_tier_2_input_token_count/limit
ALPHA
(project)
Generate content paid tier 2 input token count quota limit
GAUGE , INT64 , 1
generativelanguage.googleapis.com/Location
Current limit on quota metric generativelanguage.googleapis.com/generate_content_paid_tier_2_input_token_count. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/generate_content_paid_tier_2_input_token_count/usage
ALPHA
(project)
Generate content paid tier 2 input token count quota usage
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Current usage on quota metric generativelanguage.googleapis.com/generate_content_paid_tier_2_input_token_count. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
model :
The model name.
quota/generate_content_paid_tier_2_requests/exceeded
ALPHA
(project)
Generate content requests per model (paid tier 2) quota exceeded error
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Number of attempts to exceed the limit on quota metric generativelanguage.googleapis.com/generate_content_paid_tier_2_requests. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/generate_content_paid_tier_2_requests/limit
ALPHA
(project)
Generate content requests per model (paid tier 2) quota limit
GAUGE , INT64 , 1
generativelanguage.googleapis.com/Location
Current limit on quota metric generativelanguage.googleapis.com/generate_content_paid_tier_2_requests. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/generate_content_paid_tier_2_requests/usage
ALPHA
(project)
Generate content requests per model (paid tier 2) quota usage
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Current usage on quota metric generativelanguage.googleapis.com/generate_content_paid_tier_2_requests. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
model :
The model name.
quota/generate_content_paid_tier_2_requests_internal/usage
BETA
(project)
Number of requests made to an internal accounting model, in the paid tier 2. quota usage
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Current usage on quota metric generativelanguage.googleapis.com/generate_content_paid_tier_2_requests_internal. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
model :
The model name.
quota/generate_content_paid_tier_3_input_token_count/exceeded
ALPHA
(project)
Generate content paid tier 3 input token count quota exceeded error
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Number of attempts to exceed the limit on quota metric generativelanguage.googleapis.com/generate_content_paid_tier_3_input_token_count. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/generate_content_paid_tier_3_input_token_count/limit
ALPHA
(project)
Generate content paid tier 3 input token count quota limit
GAUGE , INT64 , 1
generativelanguage.googleapis.com/Location
Current limit on quota metric generativelanguage.googleapis.com/generate_content_paid_tier_3_input_token_count. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/generate_content_paid_tier_3_input_token_count/usage
ALPHA
(project)
Generate content paid tier 3 input token count quota usage
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Current usage on quota metric generativelanguage.googleapis.com/generate_content_paid_tier_3_input_token_count. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
model :
The model name.
quota/generate_content_paid_tier_3_requests/exceeded
ALPHA
(project)
Generate content requests per model (paid tier 3) quota exceeded error
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Number of attempts to exceed the limit on quota metric generativelanguage.googleapis.com/generate_content_paid_tier_3_requests. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/generate_content_paid_tier_3_requests/limit
ALPHA
(project)
Generate content requests per model (paid tier 3) quota limit
GAUGE , INT64 , 1
generativelanguage.googleapis.com/Location
Current limit on quota metric generativelanguage.googleapis.com/generate_content_paid_tier_3_requests. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/generate_content_paid_tier_3_requests/usage
ALPHA
(project)
Generate content requests per model (paid tier 3) quota usage
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Current usage on quota metric generativelanguage.googleapis.com/generate_content_paid_tier_3_requests. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
model :
The model name.
quota/generate_content_paid_tier_3_requests_internal/usage
BETA
(project)
Number of requests made to an internal accounting model, in the paid tier 3. quota usage
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Current usage on quota metric generativelanguage.googleapis.com/generate_content_paid_tier_3_requests_internal. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
model :
The model name.
quota/generate_content_paid_tier_input_token_count/exceeded
BETA
(project)
Generate content paid tier input token count quota exceeded error
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Number of attempts to exceed the limit on quota metric generativelanguage.googleapis.com/generate_content_paid_tier_input_token_count. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/generate_content_paid_tier_input_token_count/limit
BETA
(project)
Generate content paid tier input token count quota limit
GAUGE , INT64 , 1
generativelanguage.googleapis.com/Location
Current limit on quota metric generativelanguage.googleapis.com/generate_content_paid_tier_input_token_count. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/generate_content_paid_tier_input_token_count/usage
BETA
(project)
Generate content paid tier input token count quota usage
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Current usage on quota metric generativelanguage.googleapis.com/generate_content_paid_tier_input_token_count. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
model :
The model name.
quota/generate_content_search_request_usage/exceeded
BETA
(project)
GenerateContent search request usage quota exceeded error
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Number of attempts to exceed the limit on quota metric generativelanguage.googleapis.com/generate_content_search_request_usage. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/generate_content_search_request_usage/limit
BETA
(project)
GenerateContent search request usage quota limit
GAUGE , INT64 , 1
generativelanguage.googleapis.com/Location
Current limit on quota metric generativelanguage.googleapis.com/generate_content_search_request_usage. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/generate_content_search_request_usage/usage
BETA
(project)
GenerateContent search request usage quota usage
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Current usage on quota metric generativelanguage.googleapis.com/generate_content_search_request_usage. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
model :
The model name.
quota/generate_requests_per_model/exceeded
BETA
(project)
Generate content requests per model (paid tier) quota exceeded error
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Number of attempts to exceed the limit on quota metric generativelanguage.googleapis.com/generate_requests_per_model. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/generate_requests_per_model/limit
BETA
(project)
Generate content requests per model (paid tier) quota limit
GAUGE , INT64 , 1
generativelanguage.googleapis.com/Location
Current limit on quota metric generativelanguage.googleapis.com/generate_requests_per_model. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/generate_requests_per_model/usage
BETA
(project)
Generate content requests per model (paid tier) quota usage
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Current usage on quota metric generativelanguage.googleapis.com/generate_requests_per_model. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
model :
The model name.
quota/generate_requests_per_model_per_day_internal/usage
BETA
(project)
Number of requests made to an internal accounting model in a day. quota usage
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Current usage on quota metric generativelanguage.googleapis.com/generate_requests_per_model_per_day_internal. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
model :
The model name.
quota/map_grounding_request_free_tier/exceeded
BETA
(project)
Map grounding request per project per day (free tier) quota exceeded error
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Number of attempts to exceed the limit on quota metric generativelanguage.googleapis.com/map_grounding_request_free_tier. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/map_grounding_request_free_tier/limit
BETA
(project)
Map grounding request per project per day (free tier) quota limit
GAUGE , INT64 , 1
generativelanguage.googleapis.com/Location
Current limit on quota metric generativelanguage.googleapis.com/map_grounding_request_free_tier. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/map_grounding_request_free_tier/usage
BETA
(project)
Map grounding request per project per day (free tier) quota usage
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Current usage on quota metric generativelanguage.googleapis.com/map_grounding_request_free_tier. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
model :
The model name.
quota/map_grounding_request_paid/exceeded
BETA
(project)
Map grounding request per project per day (paid tier) quota exceeded error
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Number of attempts to exceed the limit on quota metric generativelanguage.googleapis.com/map_grounding_request_paid. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/map_grounding_request_paid/limit
BETA
(project)
Map grounding request per project per day (paid tier) quota limit
GAUGE , INT64 , 1
generativelanguage.googleapis.com/Location
Current limit on quota metric generativelanguage.googleapis.com/map_grounding_request_paid. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/map_grounding_request_paid/usage
BETA
(project)
Map grounding request per project per day (paid tier) quota usage
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Current usage on quota metric generativelanguage.googleapis.com/map_grounding_request_paid. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
model :
The model name.
quota/predict_long_running_requests_per_model/exceeded
BETA
(project)
Predict long running requests per project quota exceeded error
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Number of attempts to exceed the limit on quota metric generativelanguage.googleapis.com/predict_long_running_requests_per_model. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/predict_long_running_requests_per_model/limit
BETA
(project)
Predict long running requests per project quota limit
GAUGE , INT64 , 1
generativelanguage.googleapis.com/Location
Current limit on quota metric generativelanguage.googleapis.com/predict_long_running_requests_per_model. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/predict_long_running_requests_per_model/usage
BETA
(project)
Predict long running requests per project quota usage
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Current usage on quota metric generativelanguage.googleapis.com/predict_long_running_requests_per_model. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
model :
The model name.
quota/predict_long_running_requests_per_model_free_tier/exceeded
BETA
(project)
Predict long running requests per project (free tier) quota exceeded error
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Number of attempts to exceed the limit on quota metric generativelanguage.googleapis.com/predict_long_running_requests_per_model_free_tier. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/predict_long_running_requests_per_model_free_tier/limit
BETA
(project)
Predict long running requests per project (free tier) quota limit
GAUGE , INT64 , 1
generativelanguage.googleapis.com/Location
Current limit on quota metric generativelanguage.googleapis.com/predict_long_running_requests_per_model_free_tier. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/predict_long_running_requests_per_model_free_tier/usage
BETA
(project)
Predict long running requests per project (free tier) quota usage
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Current usage on quota metric generativelanguage.googleapis.com/predict_long_running_requests_per_model_free_tier. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
model :
The model name.
quota/predict_long_running_requests_per_model_paid_tier_2/exceeded
BETA
(project)
Predict long running requests per project (paid tier 2) quota exceeded error
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Number of attempts to exceed the limit on quota metric generativelanguage.googleapis.com/predict_long_running_requests_per_model_paid_tier_2. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/predict_long_running_requests_per_model_paid_tier_2/limit
BETA
(project)
Predict long running requests per project (paid tier 2) quota limit
GAUGE , INT64 , 1
generativelanguage.googleapis.com/Location
Current limit on quota metric generativelanguage.googleapis.com/predict_long_running_requests_per_model_paid_tier_2. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/predict_long_running_requests_per_model_paid_tier_2/usage
BETA
(project)
Predict long running requests per project (paid tier 2) quota usage
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Current usage on quota metric generativelanguage.googleapis.com/predict_long_running_requests_per_model_paid_tier_2. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
model :
The model name.
quota/predict_long_running_requests_per_model_paid_tier_3/exceeded
BETA
(project)
Predict long running requests per project (paid tier 3) quota exceeded error
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Number of attempts to exceed the limit on quota metric generativelanguage.googleapis.com/predict_long_running_requests_per_model_paid_tier_3. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/predict_long_running_requests_per_model_paid_tier_3/limit
BETA
(project)
Predict long running requests per project (paid tier 3) quota limit
GAUGE , INT64 , 1
generativelanguage.googleapis.com/Location
Current limit on quota metric generativelanguage.googleapis.com/predict_long_running_requests_per_model_paid_tier_3. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/predict_long_running_requests_per_model_paid_tier_3/usage
BETA
(project)
Predict long running requests per project (paid tier 3) quota usage
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Current usage on quota metric generativelanguage.googleapis.com/predict_long_running_requests_per_model_paid_tier_3. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
model :
The model name.
quota/predict_long_running_requests_per_model_per_day/exceeded
BETA
(project)
Predict long running requests per project per day quota exceeded error
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Number of attempts to exceed the limit on quota metric generativelanguage.googleapis.com/predict_long_running_requests_per_model_per_day. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/predict_long_running_requests_per_model_per_day/limit
BETA
(project)
Predict long running requests per project per day quota limit
GAUGE , INT64 , 1
generativelanguage.googleapis.com/Location
Current limit on quota metric generativelanguage.googleapis.com/predict_long_running_requests_per_model_per_day. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/predict_long_running_requests_per_model_per_day/usage
BETA
(project)
Predict long running requests per project per day quota usage
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Current usage on quota metric generativelanguage.googleapis.com/predict_long_running_requests_per_model_per_day. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
model :
The model name.
quota/predict_long_running_requests_per_model_per_day_free_tier/exceeded
BETA
(project)
Predict long running requests per project per day (free tier) quota exceeded error
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Number of attempts to exceed the limit on quota metric generativelanguage.googleapis.com/predict_long_running_requests_per_model_per_day_free_tier. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/predict_long_running_requests_per_model_per_day_free_tier/limit
BETA
(project)
Predict long running requests per project per day (free tier) quota limit
GAUGE , INT64 , 1
generativelanguage.googleapis.com/Location
Current limit on quota metric generativelanguage.googleapis.com/predict_long_running_requests_per_model_per_day_free_tier. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/predict_long_running_requests_per_model_per_day_free_tier/usage
BETA
(project)
Predict long running requests per project per day (free tier) quota usage
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Current usage on quota metric generativelanguage.googleapis.com/predict_long_running_requests_per_model_per_day_free_tier. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
model :
The model name.
quota/predict_long_running_requests_per_model_per_day_paid_tier_2/exceeded
BETA
(project)
Predict long running requests per project per day (paid tier 2) quota exceeded error
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Number of attempts to exceed the limit on quota metric generativelanguage.googleapis.com/predict_long_running_requests_per_model_per_day_paid_tier_2. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/predict_long_running_requests_per_model_per_day_paid_tier_2/limit
BETA
(project)
Predict long running requests per project per day (paid tier 2) quota limit
GAUGE , INT64 , 1
generativelanguage.googleapis.com/Location
Current limit on quota metric generativelanguage.googleapis.com/predict_long_running_requests_per_model_per_day_paid_tier_2. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/predict_long_running_requests_per_model_per_day_paid_tier_2/usage
BETA
(project)
Predict long running requests per project per day (paid tier 2) quota usage
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Current usage on quota metric generativelanguage.googleapis.com/predict_long_running_requests_per_model_per_day_paid_tier_2. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
model :
The model name.
quota/predict_long_running_requests_per_model_per_day_paid_tier_3/exceeded
BETA
(project)
Predict long running requests per project per day (paid tier 3) quota exceeded error
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Number of attempts to exceed the limit on quota metric generativelanguage.googleapis.com/predict_long_running_requests_per_model_per_day_paid_tier_3. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/predict_long_running_requests_per_model_per_day_paid_tier_3/limit
BETA
(project)
Predict long running requests per project per day (paid tier 3) quota limit
GAUGE , INT64 , 1
generativelanguage.googleapis.com/Location
Current limit on quota metric generativelanguage.googleapis.com/predict_long_running_requests_per_model_per_day_paid_tier_3. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/predict_long_running_requests_per_model_per_day_paid_tier_3/usage
BETA
(project)
Predict long running requests per project per day (paid tier 3) quota usage
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Current usage on quota metric generativelanguage.googleapis.com/predict_long_running_requests_per_model_per_day_paid_tier_3. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
model :
The model name.
quota/predict_requests_free_tier_per_model/exceeded
BETA
(project)
Predict requests per model (free tier) quota exceeded error
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Number of attempts to exceed the limit on quota metric generativelanguage.googleapis.com/predict_requests_free_tier_per_model. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/predict_requests_free_tier_per_model/limit
BETA
(project)
Predict requests per model (free tier) quota limit
GAUGE , INT64 , 1
generativelanguage.googleapis.com/Location
Current limit on quota metric generativelanguage.googleapis.com/predict_requests_free_tier_per_model. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/predict_requests_free_tier_per_model/usage
BETA
(project)
Predict requests per model (free tier) quota usage
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Current usage on quota metric generativelanguage.googleapis.com/predict_requests_free_tier_per_model. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
model :
The model name.
quota/predict_requests_per_model/exceeded
BETA
(project)
Predict requests per model (paid tier 1) quota exceeded error
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Number of attempts to exceed the limit on quota metric generativelanguage.googleapis.com/predict_requests_per_model. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/predict_requests_per_model/limit
BETA
(project)
Predict requests per model (paid tier 1) quota limit
GAUGE , INT64 , 1
generativelanguage.googleapis.com/Location
Current limit on quota metric generativelanguage.googleapis.com/predict_requests_per_model. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/predict_requests_per_model/usage
BETA
(project)
Predict requests per model (paid tier 1) quota usage
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Current usage on quota metric generativelanguage.googleapis.com/predict_requests_per_model. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
model :
The model name.
quota/predict_requests_per_model_paid_tier_2/exceeded
BETA
(project)
Predict requests per model (paid tier 2) quota exceeded error
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Number of attempts to exceed the limit on quota metric generativelanguage.googleapis.com/predict_requests_per_model_paid_tier_2. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/predict_requests_per_model_paid_tier_2/limit
BETA
(project)
Predict requests per model (paid tier 2) quota limit
GAUGE , INT64 , 1
generativelanguage.googleapis.com/Location
Current limit on quota metric generativelanguage.googleapis.com/predict_requests_per_model_paid_tier_2. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/predict_requests_per_model_paid_tier_2/usage
BETA
(project)
Predict requests per model (paid tier 2) quota usage
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Current usage on quota metric generativelanguage.googleapis.com/predict_requests_per_model_paid_tier_2. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
model :
The model name.
quota/predict_requests_per_model_paid_tier_3/exceeded
BETA
(project)
Predict requests per model (paid tier 3) quota exceeded error
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Number of attempts to exceed the limit on quota metric generativelanguage.googleapis.com/predict_requests_per_model_paid_tier_3. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/predict_requests_per_model_paid_tier_3/limit
BETA
(project)
Predict requests per model (paid tier 3) quota limit
GAUGE , INT64 , 1
generativelanguage.googleapis.com/Location
Current limit on quota metric generativelanguage.googleapis.com/predict_requests_per_model_paid_tier_3. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/predict_requests_per_model_paid_tier_3/usage
BETA
(project)
Predict requests per model (paid tier 3) quota usage
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Current usage on quota metric generativelanguage.googleapis.com/predict_requests_per_model_paid_tier_3. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
model :
The model name.
quota/predict_requests_per_model_per_day_paid_tier_1/exceeded
BETA
(project)
Predict requests per model per day (paid tier 1) quota exceeded error
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Number of attempts to exceed the limit on quota metric generativelanguage.googleapis.com/predict_requests_per_model_per_day_paid_tier_1. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/predict_requests_per_model_per_day_paid_tier_1/limit
BETA
(project)
Predict requests per model per day (paid tier 1) quota limit
GAUGE , INT64 , 1
generativelanguage.googleapis.com/Location
Current limit on quota metric generativelanguage.googleapis.com/predict_requests_per_model_per_day_paid_tier_1. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/predict_requests_per_model_per_day_paid_tier_1/usage
BETA
(project)
Predict requests per model per day (paid tier 1) quota usage
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Current usage on quota metric generativelanguage.googleapis.com/predict_requests_per_model_per_day_paid_tier_1. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
model :
The model name.
quota/predict_requests_per_model_per_day_paid_tier_2/exceeded
BETA
(project)
Predict requests per model per day (paid tier 2) quota exceeded error
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Number of attempts to exceed the limit on quota metric generativelanguage.googleapis.com/predict_requests_per_model_per_day_paid_tier_2. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/predict_requests_per_model_per_day_paid_tier_2/limit
BETA
(project)
Predict requests per model per day (paid tier 2) quota limit
GAUGE , INT64 , 1
generativelanguage.googleapis.com/Location
Current limit on quota metric generativelanguage.googleapis.com/predict_requests_per_model_per_day_paid_tier_2. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/predict_requests_per_model_per_day_paid_tier_2/usage
BETA
(project)
Predict requests per model per day (paid tier 2) quota usage
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Current usage on quota metric generativelanguage.googleapis.com/predict_requests_per_model_per_day_paid_tier_2. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
model :
The model name.
quota/predict_requests_per_model_per_day_paid_tier_3/exceeded
BETA
(project)
Predict requests per model per day (paid tier 3) quota exceeded error
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Number of attempts to exceed the limit on quota metric generativelanguage.googleapis.com/predict_requests_per_model_per_day_paid_tier_3. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/predict_requests_per_model_per_day_paid_tier_3/limit
BETA
(project)
Predict requests per model per day (paid tier 3) quota limit
GAUGE , INT64 , 1
generativelanguage.googleapis.com/Location
Current limit on quota metric generativelanguage.googleapis.com/predict_requests_per_model_per_day_paid_tier_3. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
model :
The model name.
quota/predict_requests_per_model_per_day_paid_tier_3/usage
BETA
(project)
Predict requests per model per day (paid tier 3) quota usage
DELTA , INT64 , 1
generativelanguage.googleapis.com/Location
Current usage on quota metric generativelanguage.googleapis.com/predict_requests_per_model_per_day_paid_tier_3. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
model :
The model name.
gkebackup
Metrics from Backup for GKE .
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with gkebackup.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
backup_completion_times
GA
(project)
Backup completion time
DELTA , DISTRIBUTION , s
gkebackup.googleapis.com/BackupPlan
Distribution of the backup completion time.
state :
State of the backup, one of [SUCCEEDED, FAILED].
backup_created_count
GA
(project)
Backup created count
DELTA , INT64 , 1
gkebackup.googleapis.com/BackupPlan
Count of the backups created under a backupPlan.
scheduled :
Whether the backup was created by schedule, one of [true, false].
backup_deleted_count
GA
(project)
Backup deleted count
DELTA , INT64 , 1
gkebackup.googleapis.com/BackupPlan
Count of the backups deleted under a backupPlan.
scheduled :
Whether the backup was deleted by schedule, one of [true, false].
restore_created_count
GA
(project)
Restore created count
DELTA , INT64 , 1
gkebackup.googleapis.com/RestorePlan
Count of the restores created under a restorePlan.
healthcare
Metrics from Cloud Healthcare API .
Launch stages of these metrics:
BETA
The "metric type" strings in this table must be prefixed
with healthcare.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
pipeline_job/backlog_elements
BETA
(project)
Backlog Elements
GAUGE , INT64 , 1
healthcare_pipeline_job
The number of unprocessed input elements buffered on a streaming pipeline. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
pipeline_job/processed_element_count
BETA
(project)
Processed Element Count
DELTA , INT64 , 1
healthcare_pipeline_job
The number of input elements processed by a pipeline, grouped by status. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
response_code :
(INT64)
HTTP status code for the processing request.
Generated at 2026-04-10 19:48:34 UTC.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
