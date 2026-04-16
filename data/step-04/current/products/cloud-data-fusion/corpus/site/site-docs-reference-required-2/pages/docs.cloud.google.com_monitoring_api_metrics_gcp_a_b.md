---
title: "Google Cloud metrics: A through B \_|\_ Cloud Monitoring \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/monitoring/api/metrics_gcp_a_b
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/monitoring/api/resources
source_metadata:
  url: https://docs.cloud.google.com/monitoring/api/metrics_gcp_a_b
  title: "Google Cloud metrics: A through B \_|\_ Cloud Monitoring \_|\_ Google Cloud\
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
Google Cloud metrics: A through B
Stay organized with collections
Save and categorize content based on your preferences.
This document lists the metric types defined by
Google Cloud services when the service name begins with the
letter a or b . For example, this page lists all metric types whose
prefix is artifactregistry.googleapis.com . For information about other
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
actions
Metrics from Google Assistant Smart Home .
Launch stages of these metrics:
ALPHA
BETA
The "metric type" strings in this table must be prefixed
with actions.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
smarthome_action/camerastream/first_frame_latencies
BETA
(project)
First frame latency
DELTA , DISTRIBUTION , milliseconds
assistant_action_project
Latency for first frame to arrive. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
device_type :
Device type, one of [CAMERA, DOORBELL]
stream_status :
The canonical code that represents the result, for example, "COMPLETED" or "FAILED".
stream_protocol :
Underlying protocol used for camerastream, for example, "webrtc" or "hls".
is_battery_powered :
(BOOL)
Whether the device is battery powered or not.
smarthome_action/camerastream/frame_display_rates
BETA
(project)
Frame display rate
DELTA , DISTRIBUTION , frames/seconds
assistant_action_project
Rate at which camerastream frames are displayed. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
device_type :
Device type, one of [CAMERA, DOORBELL]
stream_status :
The canonical code that represents the result, for example, "COMPLETED" or "FAILED".
stream_protocol :
Underlying protocol used for camerastream, for example, "webrtc" or "hls".
is_battery_powered :
(BOOL)
Whether the device is battery powered or not.
smarthome_action/camerastream/frame_drop_rates
BETA
(project)
Frame drop rate
DELTA , DISTRIBUTION , frames/seconds
assistant_action_project
Rate at which camerastream frames are dropped. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
device_type :
Device type, one of [CAMERA, DOORBELL]
stream_status :
The canonical code that represents the result, for example, "COMPLETED" or "FAILED".
stream_protocol :
Underlying protocol used for camerastream, for example, "webrtc" or "hls".
is_battery_powered :
(BOOL)
Whether the device is battery powered or not.
smarthome_action/camerastream/frame_skip_rates
BETA
(project)
Frame skip rate
DELTA , DISTRIBUTION , frames/seconds
assistant_action_project
Rate at which camerastream frames are skipped. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
device_type :
Device type, one of [CAMERA, DOORBELL]
stream_status :
The canonical code that represents the result, for example, "COMPLETED" or "FAILED".
stream_protocol :
Underlying protocol used for camerastream, for example, "webrtc" or "hls".
is_battery_powered :
(BOOL)
Whether the device is battery powered or not.
smarthome_action/camerastream/request_count
BETA
(project)
Camerastream request count
DELTA , INT64 , 1
assistant_action_project
Number of camerastream requests since the last sample period. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
device_type :
Device type, one of [CAMERA, DOORBELL]
status :
The canonical code that represents the result, for example, "SUCCESS" or "OFFLINE".
stream_protocol :
Underlying protocol used for camerastream, for example, "webrtc" or "hls".
is_battery_powered :
(BOOL)
Whether the device is battery powered or not.
smarthome_action/camerastream/request_latencies
BETA
(project)
Camerastream request latency
DELTA , DISTRIBUTION , ms
assistant_action_project
Latency for camerastream to start. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
device_type :
Device type, one of [CAMERA, DOORBELL]
status :
The canonical code that represents the result, for example, "SUCCESS" or "OFFLINE".
stream_protocol :
Underlying protocol used for camerastream, for example, "webrtc" or "hls".
is_battery_powered :
(BOOL)
Whether the device is battery powered or not.
smarthome_action/camerastream/signaling_latencies
BETA
(project)
Signaling latency
DELTA , DISTRIBUTION , milliseconds
assistant_action_project
Camerastream signaling latency. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
device_type :
Device type, one of [CAMERA, DOORBELL]
stream_status :
The canonical code that represents the result, for example, "COMPLETED" or "FAILED".
stream_protocol :
Underlying protocol used for camerastream, for example, "webrtc" or "hls".
is_battery_powered :
(BOOL)
Whether the device is battery powered or not.
smarthome_action/camerastream/stream_durations
BETA
(project)
Stream duration
DELTA , DISTRIBUTION , milliseconds
assistant_action_project
Duration of a camerastream. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
device_type :
Device type, one of [CAMERA, DOORBELL]
stream_status :
The canonical code that represents the result, for example, "COMPLETED" or "FAILED".
stream_protocol :
Underlying protocol used for camerastream, for example, "webrtc" or "hls".
is_battery_powered :
(BOOL)
Whether the device is battery powered or not.
smarthome_action/camerastream/webrtc_request_count
BETA
(project)
Webrtc request count
DELTA , INT64 , 1
assistant_action_project
Number of camerastream requests since the last sample period. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
device_type :
Device type, one of [CAMERA, DOORBELL]
stream_status :
The canonical code that represents the result, for example, "COMPLETED" or "FAILED".
stream_protocol :
Underlying protocol used for camerastream, for example, "webrtc" or "hls".
is_battery_powered :
(BOOL)
Whether the device is battery powered or not.
smarthome_action/device_count
ALPHA
(project)
Device count
GAUGE , INT64 , 1
assistant_action_project
Counts the device_count based on device_type, software_version, hardware_version, integration_type and is_online. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
device_type :
Device type, for example, "LIGHT", "LOCK" or "CAMERA".
software_version :
The software version of the device, for example, "1.00.062", "1.00.64", "1.00.68", "1.1.1".
hardware_version :
The hardware version of the device, for example, "1", "1.0", "1.0.0", "1.0.7".
integration_type :
Integration type, one of [local, cloud, matter].
is_online :
(BOOL)
Whether the device is online or not.
smarthome_action/execution_success_confidence
BETA
(project)
Execution success confidence
GAUGE , DOUBLE , 1
assistant_action_project
Confidence metric (normalized) for current execution success rate compared with past performance. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
smarthome_action/local_event_count
BETA
(project)
Local event count
DELTA , INT64 , 1
assistant_action_project
Count of events that only happens in LocalHomePlatform. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
intent :
Intent used in SmartHome integration, for example, "EXECUTE", "QUERY", "SYNC".
status :
The canonical code that represents the result, for example, "SUCCESS" or "OFFLINE".
app_version :
The version of the Local Home SDK app, for example, "0.0.1" or "0.1.2".
model :
Model is equivalent to product ID.
smarthome_action/matter_setup_event_count
BETA
(project)
Matter setup event count
DELTA , INT64 , 1
assistant_action_project
Counts of Setup Events for Matter Launch. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
setup_status :
The setup status has detailed information about state of setup (commisssioning complete, etc.)
setup_state :
The setup state is either Success or Failure.
smarthome_action/num_active_users
BETA
(project)
Daily active users
GAUGE , INT64 , 1
assistant_action_project
Daily active users count. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
device_type :
Device type, for example, "LIGHT" or "LOCK".
locale :
locale, for example, "en-US" or "fr-CA".
trait :
Assistant Smarthome trait, for example, "onOff" or "lockUnlock".
integration_type :
Integration type, one of [local, cloud, matter].
smarthome_action/report_state_accuracy
BETA
(project)
Report state accuracy
GAUGE , DOUBLE , 10^2.%
assistant_action_project
The accuracy of the states reported by the partner to HomeGraph compared to the states retrieved by sending a QUERY to the partner. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
device_type :
Device type, for example, "LIGHT" or "LOCK".
trait :
Assistant Smarthome trait, for example, "onOff" or "lockUnlock".
result :
The canonical code that represents the result, for example, "ACCURATE", "ACCURATE_BUT_LATE", "INACCURATE".
smarthome_action/request_count
BETA
(project)
Request count
DELTA , INT64 , 1
assistant_action_project
Request count. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
device_type :
Device type, for example, "LIGHT" or "LOCK".
status :
The canonical code that represents the result, for example, "SUCCESS" or "OFFLINE".
trait :
Assistant Smarthome trait, for example, "onOff" or "lockUnlock".
integration_type :
Integration type, one of [local, cloud, matter].
is_local :
(BOOL)
Whether the request routed locally or through cloud endpoint.
execution_type :
Execution type, one of [execute, query].
smarthome_action/request_latencies
BETA
(project)
Request latencies
DELTA , DISTRIBUTION , ms
assistant_action_project
Distribution of request latencies. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
device_type :
Device type, for example, "LIGHT" or "LOCK".
status :
The canonical code that represents the result, for example, "SUCCESS" or "OFFLINE".
trait :
Assistant Smarthome trait, for example, "onOff" or "lockUnlock".
is_local :
(BOOL)
Whether the request routed locally or through cloud endpoint.
execution_type :
Execution type, one of [execute, query].
integration_type :
Integration type, one of [local, cloud, matter].
smarthome_action/seven_day_active_users
BETA
(project)
7 day active users
GAUGE , INT64 , 1
assistant_action_project
7 day active users count. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
device_type :
Device type, for example, "LIGHT" or "LOCK".
locale :
locale, for example, "en-US" or "fr-CA".
trait :
Assistant Smarthome trait, for example, "onOff" or "lockUnlock".
integration_type :
Integration type, one of [local, cloud, matter].
smarthome_action/twenty_eight_day_active_users
BETA
(project)
28 day active users
GAUGE , INT64 , 1
assistant_action_project
28 day active users count. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
device_type :
Device type, for example, "LIGHT" or "LOCK".
locale :
locale, for example, "en-US" or "fr-CA".
trait :
Assistant Smarthome trait, for example, "onOff" or "lockUnlock".
integration_type :
Integration type, one of [local, cloud, matter].
aiplatform
Metrics from Vertex AI .
Launch stages of these metrics:
ALPHA
BETA
GA
The "metric type" strings in this table must be prefixed
with aiplatform.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
eu_multi_region_online_prediction_input_tokens_per_minute_per_base_model
BETA
(project)
EU multi-region online prediction input tokens per minute per base model
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
EU multi-region online prediction input tokens per minute per project per base model.
base_model :
The multi-region base model custom dimension.
eu_multi_region_online_prediction_output_tokens_per_minute_per_base_model
BETA
(project)
EU multi-region online prediction output tokens per minute per base model
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
EU multi-region online prediction output tokens per minute per project per base model.
base_model :
The multi-region base model custom dimension.
eu_multi_region_online_prediction_requests_per_base_model
BETA
(project)
EU multi-region online prediction requests per base model
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
EU multi-region online prediction requests per minute per project per base model.
base_model :
The multi-region base model custom dimension.
eu_multi_region_online_prediction_web_search_requests_per_publisher
BETA
(project)
EU multi-region online prediction web search requests per publisher
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
EU multi-region online prediction web search requests per project per publisher.
publisher :
The multi-region publisher custom dimension.
executing_vertexai_pipeline_jobs
BETA
(project)
Executing PipelineJobs
GAUGE , INT64 , 1
aiplatform.googleapis.com/Location
Number of pipeline jobs being executed.
executing_vertexai_pipeline_tasks
BETA
(project)
Executing PipelineTasks
GAUGE , INT64 , 1
aiplatform.googleapis.com/Location
Number of pipeline tasks being executed.
featureonlinestore/online_serving/request_count
BETA
(project)
Request count
DELTA , INT64 , 1
aiplatform.googleapis.com/FeatureOnlineStore
Number of requests received.
method :
Online serving method [FetchFeatureValues, SearchNearestEntities].
feature_view_id :
The ID of FeatureView.
error_code :
Error code.
storage_type :
FeatureOnlineStore storage type, one of [bigtable, optimized].
featureonlinestore/online_serving/serving_bytes_count
BETA
(project)
Response bytes count
DELTA , INT64 , By
aiplatform.googleapis.com/FeatureOnlineStore
Serving response bytes count.
method :
Online serving method [FetchFeatureValues, SearchNearestEntities].
feature_view_id :
The ID of FeatureView.
storage_type :
FeatureOnlineStore storage type, one of [bigtable, optimized].
featureonlinestore/online_serving/serving_latencies
BETA
(project)
Request latency
DELTA , DISTRIBUTION , ms
aiplatform.googleapis.com/FeatureOnlineStore
Server side request latency.
method :
Online serving method [FetchFeatureValues, SearchNearestEntities].
feature_view_id :
The ID of FeatureView.
storage_type :
FeatureOnlineStore storage type, one of [bigtable, optimized].
featureonlinestore/running_sync
BETA
(project)
Running sycs
GAUGE , INT64 , 1
aiplatform.googleapis.com/FeatureOnlineStore
Number of running syncs at given point of time.
feature_view_id :
FeatureView ID of running sync.
storage_type :
FeatureOnlineStore storage type, one of [bigtable, optimized].
sync_type :
Type of running sync [Full, On-demand].
featureonlinestore/serving_data_ages
BETA
(project)
Serving data ages
DELTA , DISTRIBUTION , s
aiplatform.googleapis.com/FeatureOnlineStore
Measure of the serving data age in seconds. Current time minus synced time.
feature_view_id :
FeatureView being requested.
method :
Online serving method [FetchFeatureValues].
storage_type :
FeatureOnlineStore storage type, one of [bigtable, optimized].
featureonlinestore/serving_data_by_sync_time
BETA
(project)
Serving data by synced time
GAUGE , INT64 , 1
aiplatform.googleapis.com/FeatureOnlineStore
Breakdown of data in Feature Online Store by synced timestamp. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
sync_time :
Timestamp of sync time.
featureonlinestore/storage/bigtable_cpu_load
BETA
(project)
CPU load
GAUGE , DOUBLE , 10^2.%
aiplatform.googleapis.com/FeatureOnlineStore
The average CPU load of nodes in the Feature Online Store. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
feature_view_id :
FeatureView ID.
operation_type :
Operation to Cloud Bigtable, one of [read, write].
featureonlinestore/storage/bigtable_cpu_load_hottest_node
BETA
(project)
CPU load (hottest node)
GAUGE , DOUBLE , 10^2.%
aiplatform.googleapis.com/FeatureOnlineStore
The CPU load of the hottest node in the Feature Online Store. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
feature_view_id :
FeatureView ID.
featureonlinestore/storage/bigtable_nodes
BETA
(project)
Node count
GAUGE , INT64 , 1
aiplatform.googleapis.com/FeatureOnlineStore
The number of nodes for the Feature Online Store(Bigtable). Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
featureonlinestore/storage/multi_region_bigtable_cpu_load
BETA
(project)
CPU load (multi-regional)
GAUGE , DOUBLE , 10^2.%
aiplatform.googleapis.com/FeatureOnlineStore
The average CPU load of nodes in the Feature Online Store with multi-regional replicas. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
cluster_type :
Type of the underlying Bigtable cluster, one of [primary, replica].
featureonlinestore/storage/multi_region_bigtable_nodes
BETA
(project)
Node count (multi-regional)
GAUGE , INT64 , 1
aiplatform.googleapis.com/FeatureOnlineStore
The number of nodes for the Feature Online Store(Bigtable) with multi-regional replicas. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
cluster_type :
Type of the underlying Bigtable cluster, one of [primary, replica].
featureonlinestore/storage/optimized_nodes
BETA
(project)
Optimized node count
GAUGE , INT64 , 1
aiplatform.googleapis.com/FeatureOnlineStore
The number of nodes for the Feature Online Store(Optimized). Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
feature_view_id :
FeatureView ID.
featureonlinestore/storage/stored_bytes
BETA
(project)
Bytes stored
GAUGE , INT64 , By
aiplatform.googleapis.com/FeatureOnlineStore
Bytes stored in the Feature Online Store. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
featurestore/cpu_load
BETA
(project)
CPU load
GAUGE , DOUBLE , 10^2.%
aiplatform.googleapis.com/Featurestore
The average CPU load for a node in the Featurestore online storage. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
featurestore/cpu_load_hottest_node
BETA
(project)
CPU load (hottest node)
GAUGE , DOUBLE , 10^2.%
aiplatform.googleapis.com/Featurestore
The CPU load for the hottest node in the Featurestore online storage. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
featurestore/node_count
BETA
(project)
Node count
GAUGE , INT64 , 1
aiplatform.googleapis.com/Featurestore
The number of nodes for the Featurestore online storage. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
featurestore/online_entities_updated
BETA
(project)
Entities updated on the Featurestore online storage.
DELTA , INT64 , By
aiplatform.googleapis.com/Featurestore
Number of entities updated on the Featurestore online storage.
type :
The type of update: 'WRITE', 'DELETE'.
featurestore/online_serving/latencies
BETA
(project)
Latencies
DELTA , DISTRIBUTION , ms
aiplatform.googleapis.com/Featurestore
Online serving latencies by EntityType.
entity_type_id :
EntityType being requested.
method :
Online serving method, one of [ReadFeatureValues, StreamingReadFeatureValues].
featurestore/online_serving/request_bytes_count
BETA
(project)
Request size
DELTA , INT64 , By
aiplatform.googleapis.com/Featurestore
Request size by EntityType.
entity_type_id :
EntityType being requested.
method :
Streaming write method, one of [ReadFeatureValues, StreamingReadFeatureValues, WriteFeatureValues].
featurestore/online_serving/request_count
BETA
(project)
Serving count
DELTA , INT64 , 1
aiplatform.googleapis.com/Featurestore
Featurestore online serving count by EntityType.
entity_type_id :
EntityType being requested.
method :
Online serving method, one of [ReadFeatureValues, StreamingReadFeatureValues].
error_code :
Error code.
featurestore/online_serving/response_size
BETA
(project)
Response size
DELTA , INT64 , By
aiplatform.googleapis.com/Featurestore
Response size by EntityType.
entity_type_id :
EntityType being requested.
method :
Online serving method, one of [ReadFeatureValues, StreamingReadFeatureValues].
featurestore/storage/billable_processed_bytes
BETA
(project)
Billable bytes
GAUGE , INT64 , By
aiplatform.googleapis.com/Featurestore
Number of bytes billed for offline data processed. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
method :
Batch read method, one of [BatchReadFeatureValues, ExportFeatureValues].
featurestore/storage/stored_bytes
BETA
(project)
Bytes stored
GAUGE , INT64 , By
aiplatform.googleapis.com/Featurestore
Bytes stored in Featurestore. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
storage_type :
Storage type of Feature Store, one of [ONLINE, BATCH].
featurestore/streaming_write/offline_processed_count
BETA
(project)
Offline storage write for streaming write
DELTA , INT64 , 1
aiplatform.googleapis.com/Featurestore
Number of streaming write requests processed for offline storage.
entity_type_id :
EntityType being requested.
method :
Streaming write method, one of [WriteFeatureValues].
error_code :
Error code.
featurestore/streaming_write/offline_write_delays
BETA
(project)
Streaming write to offline storage delay time
DELTA , DISTRIBUTION , s
aiplatform.googleapis.com/Featurestore
Time (in second) since the write API is called until it is written to offline storage.
entity_type_id :
EntityType being requested.
method :
Streaming write method, one of [WriteFeatureValues].
generate_content_input_tokens_per_minute_per_base_model
BETA
(project)
Generate content input tokens per minute per base model
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Generate content input tokens per minute per project per base model.
base_model :
The base model custom dimension.
generate_content_requests_per_minute_per_project_per_base_model
ALPHA
(project)
Generate content requests per minute per project per base model
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Generate content requests per minute per project per base model.
base_model :
The base model custom dimension.
global_online_prediction_input_tokens_per_minute_per_base_model
BETA
(project)
Global online prediction input tokens per minute per base model
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Global online prediction input tokens per minute per project per base model.
base_model :
The global base model custom dimension.
global_online_prediction_output_tokens_per_minute_per_base_model
BETA
(project)
Global online prediction output tokens per minute per base model
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Global online prediction output tokens per minute per project per base model.
base_model :
The global base model custom dimension.
matching_engine/cpu/request_utilization
ALPHA
(project)
CPU request utilization
GAUGE , DOUBLE , 10^2.%
aiplatform.googleapis.com/IndexEndpoint
The fraction of the requested CPU that is currently in use on a match server container.
deployed_index_id :
The ID of the target DeployedIndex.
node_id :
The ID of the target node: _ .
candidate_name :
The name of the container release candidate.
matching_engine/current_replicas
BETA
(project)
Current replicas
GAUGE , INT64 , 1
aiplatform.googleapis.com/IndexEndpoint
Number of active replicas used by the DeployedIndex.
deployed_index_id :
The ID of the target DeployedIndex.
matching_engine/current_shards
BETA
(project)
Current shards
GAUGE , INT64 , 1
aiplatform.googleapis.com/IndexEndpoint
Number of shards of the DeployedIndex.
deployed_index_id :
The ID of the target DeployedIndex.
matching_engine/memory/used_bytes
ALPHA
(project)
Memory usage
GAUGE , INT64 , By
aiplatform.googleapis.com/IndexEndpoint
The memory used in bytes for a match server container.
deployed_index_id :
The ID of the target DeployedIndex.
node_id :
The ID of the target node: _ .
candidate_name :
The name of the container release candidate.
matching_engine/query/latencies
BETA
(project)
Request latency
DELTA , DISTRIBUTION , ms
aiplatform.googleapis.com/IndexEndpoint
Server side request latency.
deployed_index_id :
The ID of the target DeployedIndex.
method :
Query method.
response_code :
Response code for the query.
index_type :
The type of the match server's index, 'sparse' or 'dense'.
candidate_name :
The name of the container release candidate.
matching_engine/query/request_count
BETA
(project)
Request count
DELTA , INT64 , 1
aiplatform.googleapis.com/IndexEndpoint
Number of requests received.
deployed_index_id :
The ID of the target DeployedIndex.
method :
Query method.
response_code :
Response code for the query.
is_private_endpoint :
True for private endpoint, set to false for public endpoint.
candidate_name :
The name of the container release candidate.
matching_engine/stream_update/datapoint_count
BETA
(project)
Datapoint count
DELTA , INT64 , 1
aiplatform.googleapis.com/Index
Number of successfully upserted or removed datapoints.
index_endpoint_id :
The ID of the target index endpoint.
deployed_index_id :
The ID of the target DeployedIndex.
node_id :
The ID of the target node: _ .
request_type :
Request type for stream update (upsert or remove).
index_type :
The type of target Index.
candidate_name :
The name of the container release candidate.
matching_engine/stream_update/latencies
BETA
(project)
Stream update latencies
DELTA , DISTRIBUTION , ms
aiplatform.googleapis.com/Index
The latencies between the user receives a UpsertDatapointsResponse or RemoveDatapointsResponse and that update takes effect.
index_endpoint_id :
The ID of the target index endpoint.
deployed_index_id :
The ID of the target DeployedIndex.
node_id :
The ID of the target node: _ .
request_type :
Request type for stream update (upsert or remove).
index_type :
The type of target Index.
candidate_name :
The name of the container release candidate.
matching_engine/stream_update/request_count
BETA
(project)
Request count
DELTA , INT64 , 1
aiplatform.googleapis.com/Index
Number of stream update requests.
index_endpoint_id :
The ID of the target index endpoint.
deployed_index_id :
The ID of the target DeployedIndex.
node_id :
The ID of the target node: _ .
request_type :
Request type for stream update (upsert or remove).
response_code :
Response code.
index_type :
The type of target Index.
candidate_name :
The name of the container release candidate.
model_monitoring/feature_attribution_deviation
BETA
(project)
Feature attribution deviation
GAUGE , DOUBLE , 1
aiplatform.googleapis.com/Model
The feature attribution deviation value of the given feature.
schedule_id :
The identifier of the Vertex schedule. For scheduled continuous monitoring only.
feature_name :
The feature name in user's dataset.
algorithm :
The metric calculate method.
model_monitoring/feature_drift_deviation
BETA
(project)
Feature drift deviation
GAUGE , DOUBLE , 1
aiplatform.googleapis.com/Model
The drift deviation value of the given feature.
schedule_id :
The identifier of the Vertex schedule. For scheduled continuous monitoring only.
feature_name :
The feature name in user's dataset.
algorithm :
The metric calculate method.
model_monitoring/prediction_output_drift_deviation
BETA
(project)
Prediction output drift deviation
GAUGE , DOUBLE , 1
aiplatform.googleapis.com/Model
The drift deviation value of the prediction output.
schedule_id :
The identifier of the Vertex schedule. For scheduled continuous monitoring only.
feature_name :
The feature name in user's dataset.
algorithm :
The metric calculate method.
online_evaluator/scores
BETA
(project)
Scores
DELTA , DISTRIBUTION , 1
aiplatform.googleapis.com/OnlineEvaluator
The distribution of scores of the Online Evaluator.
agent_resource_name :
The resource name of the agent.
evaluation_metric_name :
The name of the evaluation metric.
online_prediction_dedicated_requests_per_base_model_version
BETA
(project)
Online prediction dedicated requests per base model version
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Online prediction dedicated requests per minute per project per base model version.
base_model_version :
The base model version custom dimension.
online_prediction_dedicated_tokens_per_base_model_version
BETA
(project)
Online prediction dedicated tokens per minute per base model version
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Online prediction dedicated tokens per minute per project per base model version.
base_model_version :
The base model version custom dimension.
online_prediction_input_tokens_per_minute_per_base_model
BETA
(project)
Online prediction input tokens per minute per base model
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Online prediction input tokens per minute per project per base model.
base_model :
The base model custom dimension.
online_prediction_output_tokens_per_minute_per_base_model
BETA
(project)
Online prediction output tokens per minute per base model
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Online prediction output tokens per minute per project per base model.
base_model :
The base model custom dimension.
online_prediction_requests_per_base_model
BETA
(project)
Regional online prediction requests per base model
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Regional online prediction requests per minute per project per base model.
base_model :
The regional base model custom dimension.
online_prediction_tokens_per_minute_per_base_model
BETA
(project)
Regional online prediction tokens per minute per base model
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Regional online prediction tokens per minute per project per base model.
base_model :
The regional base model custom dimension.
pipelinejob/duration
BETA
(project)
PipelineJob duration
GAUGE , INT64 , s
aiplatform.googleapis.com/PipelineJob
Runtime seconds of the pipeline job being executed (from creation to end).
pipelinejob/task_completed_count
BETA
(project)
Completed PipelineTasks
CUMULATIVE , INT64 , 1
aiplatform.googleapis.com/PipelineJob
Total number of completed PipelineTasks.
prediction/online/accelerator/duty_cycle
BETA
(project)
Accelerator duty cycle
GAUGE , DOUBLE , 10^2.%
aiplatform.googleapis.com/Endpoint
Average fraction of time over the past sample period during which the accelerator(s) were actively processing. Sampled every 60 seconds. After sampling, data is not visible for up to 360 seconds.
deployed_model_id :
The ID of the deployed model which serves the prediction request.
replica_id :
Unique ID corresponding to the deployed model replica.
spot :
Whether this deployment is on Spot VMs. Has values of True or False.
prediction/online/accelerator/memory/bytes_used
BETA
(project)
Accelerator memory usage
GAUGE , INT64 , By
aiplatform.googleapis.com/Endpoint
Amount of accelerator memory allocated by the deployed model replica. Sampled every 60 seconds. After sampling, data is not visible for up to 360 seconds.
deployed_model_id :
The ID of the deployed model which serves the prediction request.
replica_id :
Unique ID corresponding to the deployed model replica.
spot :
Whether this deployment is on Spot VMs. Has values of True or False.
prediction/online/cpu/utilization
BETA
(project)
CPU utilization
GAUGE , DOUBLE , 10^2.%
aiplatform.googleapis.com/Endpoint
Fraction of CPU allocated by the deployed model replica and currently in use. May exceed 100% if the machine type has multiple CPUs. Sampled every 60 seconds. After sampling, data is not visible for up to 360 seconds.
deployed_model_id :
The ID of the deployed model which serves the prediction request.
replica_id :
Unique ID corresponding to the deployed model replica.
spot :
Whether this deployment is on Spot VMs. Has values of True or False.
prediction/online/deployment_resource_pool/accelerator/duty_cycle
BETA
(project)
Accelerator duty cycle
GAUGE , DOUBLE , 10^2.%
aiplatform.googleapis.com/DeploymentResourcePool
Average fraction of time over the past sample period during which the accelerator(s) were actively processing. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
replica_id :
Unique ID corresponding to the deployment resource pool replica.
spot :
Whether this deployment is on Spot VMs. Has values of True or False.
prediction/online/deployment_resource_pool/accelerator/memory/bytes_used
BETA
(project)
Accelerator memory usage
GAUGE , INT64 , By
aiplatform.googleapis.com/DeploymentResourcePool
Amount of accelerator memory allocated by the deployment resource pool replica. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
replica_id :
Unique ID corresponding to the deployment resource pool replica.
spot :
Whether this deployment is on Spot VMs. Has values of True or False.
prediction/online/deployment_resource_pool/cpu/utilization
BETA
(project)
CPU utilization
GAUGE , DOUBLE , 10^2.%
aiplatform.googleapis.com/DeploymentResourcePool
Fraction of CPU allocated by the deployment resource pool replica and currently in use. May exceed 100% if the machine type has multiple CPUs. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
replica_id :
Unique ID corresponding to the deployment resource pool replica.
spot :
Whether this deployment is on Spot VMs. Has values of True or False.
prediction/online/deployment_resource_pool/memory/bytes_used
BETA
(project)
Memory usage
GAUGE , INT64 , By
aiplatform.googleapis.com/DeploymentResourcePool
Amount of memory allocated by the deployment resource pool replica and currently in use. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
replica_id :
Unique ID corresponding to the deployment resource pool replica.
spot :
Whether this deployment is on Spot VMs. Has values of True or False.
prediction/online/deployment_resource_pool/network/received_bytes_count
BETA
(project)
Network bytes received
DELTA , INT64 , By
aiplatform.googleapis.com/DeploymentResourcePool
Number of bytes received over the network by the deployment resource pool replica.
replica_id :
Unique ID corresponding to the deployment resource pool replica.
spot :
Whether this deployment is on Spot VMs. Has values of True or False.
prediction/online/deployment_resource_pool/network/sent_bytes_count
BETA
(project)
Network bytes sent
DELTA , INT64 , By
aiplatform.googleapis.com/DeploymentResourcePool
Number of bytes sent over the network by the deployment resource pool replica.
replica_id :
Unique ID corresponding to the deployment resource pool replica.
spot :
Whether this deployment is on Spot VMs. Has values of True or False.
prediction/online/deployment_resource_pool/replicas
BETA
(project)
Replica count
GAUGE , INT64 , 1
aiplatform.googleapis.com/DeploymentResourcePool
Number of active replicas used by the deployment resource pool. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
spot :
Whether this deployment is on Spot VMs. Has values of True or False.
prediction/online/deployment_resource_pool/target_replicas
BETA
(project)
Replica target
GAUGE , INT64 , 1
aiplatform.googleapis.com/DeploymentResourcePool
Target number of active replicas needed for the deployment resource pool. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
spot :
Whether this deployment is on Spot VMs. Has values of True or False.
prediction/online/error_count
BETA
(project)
Error count
DELTA , INT64 , 1
aiplatform.googleapis.com/Endpoint
Number of online prediction errors.
deployed_model_id :
The ID of the DeployedModel which serves the prediction request.
spot :
Whether this deployment is on Spot VMs. Has values of True or False.
model_display_name :
The display name of the model specified by the user.
endpoint_display_name :
The display name of the endpoint specified by the user.
prediction/online/machine_count
BETA
(project)
Machine count
GAUGE , INT64 , 1
aiplatform.googleapis.com/Endpoint
Number of machines used by the deployed model. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
deployed_model_id :
The ID of the DeployedModel which serves the prediction request.
spot :
Whether this deployment is on Spot VMs. Has values of True or False.
model_display_name :
The display name of the model specified by the user.
endpoint_display_name :
The display name of the endpoint specified by the user.
prediction/online/memory/bytes_used
BETA
(project)
Memory usage
GAUGE , INT64 , By
aiplatform.googleapis.com/Endpoint
Amount of memory allocated by the deployed model replica and currently in use. Sampled every 60 seconds. After sampling, data is not visible for up to 360 seconds.
deployed_model_id :
The ID of the deployed model which serves the prediction request.
replica_id :
Unique ID corresponding to the deployed model replica.
spot :
Whether this deployment is on Spot VMs. Has values of True or False.
prediction/online/network/received_bytes_count
GA
(project)
Network bytes received
DELTA , INT64 , By
aiplatform.googleapis.com/Endpoint
Number of bytes received over the network by the deployed model replica. Sampled every 60 seconds. After sampling, data is not visible for up to 360 seconds.
deployed_model_id :
The ID of the deployed model which serves the prediction request.
replica_id :
Unique ID corresponding to the deployed model replica.
spot :
Whether this deployment is on Spot VMs. Has values of True or False.
prediction/online/network/sent_bytes_count
BETA
(project)
Network bytes sent
DELTA , INT64 , By
aiplatform.googleapis.com/Endpoint
Number of bytes sent over the network by the deployed model replica. Sampled every 60 seconds. After sampling, data is not visible for up to 360 seconds.
deployed_model_id :
The ID of the deployed model which serves the prediction request.
replica_id :
Unique ID corresponding to the deployed model replica.
spot :
Whether this deployment is on Spot VMs. Has values of True or False.
prediction/online/prediction_count
BETA
(project)
Prediction count
DELTA , INT64 , 1
aiplatform.googleapis.com/Endpoint
Number of online predictions.
deployed_model_id :
The ID of the DeployedModel which serves the prediction request.
spot :
Whether this deployment is on Spot VMs. Has values of True or False.
model_display_name :
The display name of the model specified by the user.
endpoint_display_name :
The display name of the endpoint specified by the user.
prediction/online/prediction_latencies
BETA
(project)
Prediction Latencies
DELTA , DISTRIBUTION , ms
aiplatform.googleapis.com/Endpoint
Online prediction latency of the deployed model.
deployed_model_id :
The ID of the DeployedModel which serves the prediction request.
latency_type :
One of the following "overhead", "model" or "total". The "total" latency type will always be populated. And the "overhead" and "model" latency type only get populated for custom-trained models and AutoML tabular models.
spot :
Whether this deployment is on Spot VMs. Has values of True or False.
model_display_name :
The display name of the model specified by the user.
endpoint_display_name :
The display name of the endpoint specified by the user.
prediction/online/private/prediction_latencies
BETA
(project)
Private endpoint prediction latencies
DELTA , DISTRIBUTION , ms
aiplatform.googleapis.com/Endpoint
Online prediction latency of the private deployed model. Sampled every 60 seconds. After sampling, data is not visible for up to 360 seconds.
deployed_model_id :
The ID of the deployed model which serves the prediction request.
prediction/online/private/response_count
BETA
(project)
Private endpoint response count
DELTA , INT64 , 1
aiplatform.googleapis.com/Endpoint
Online prediction response count of the private deployed model. Sampled every 60 seconds. After sampling, data is not visible for up to 360 seconds.
deployed_model_id :
The ID of the deployed model which serves the prediction request.
response_code :
(INT64)
HTTP response code.
prediction/online/replicas
BETA
(project)
Replica count
GAUGE , INT64 , 1
aiplatform.googleapis.com/Endpoint
Number of active replicas used by the deployed model. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
deployed_model_id :
The ID of the DeployedModel which serves the prediction request.
spot :
Whether this deployment is on Spot VMs. Has values of True or False.
model_display_name :
The display name of the model specified by the user.
endpoint_display_name :
The display name of the endpoint specified by the user.
prediction/online/response_count
BETA
(project)
Response count
DELTA , INT64 , 1
aiplatform.googleapis.com/Endpoint
Number of different online prediction response codes.
deployed_model_id :
The ID of the DeployedModel which serves the prediction request.
response_code :
HTTP response code (1xx, 2xx, 3xx, 4xx, 5xx).
spot :
Whether this deployment is on Spot VMs. Has values of True or False.
model_display_name :
The display name of the model specified by the user.
endpoint_display_name :
The display name of the endpoint specified by the user.
prediction/online/target_replicas
BETA
(project)
Replica target
GAUGE , INT64 , 1
aiplatform.googleapis.com/Endpoint
Target number of active replicas needed for the deployed model. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
deployed_model_id :
The ID of the DeployedModel which serves the prediction request.
spot :
Whether this deployment is on Spot VMs. Has values of True or False.
model_display_name :
The display name of the model specified by the user.
endpoint_display_name :
The display name of the endpoint specified by the user.
publisher/online_serving/character_count
BETA
(project)
Character count
DELTA , INT64 , 1
aiplatform.googleapis.com/PublisherModel
Accumulated input/output character count.
type :
Type of character (input/output).
request_type :
Type of request (dedicated/shared).
accounting_resource :
The identifier of the GCP project/folder/org to which quota is accounted to. Available for Provisioned Throughput only.
modality :
Modality of the characters.
publisher/online_serving/characters
BETA
(project)
Characters
DELTA , DISTRIBUTION , 1
aiplatform.googleapis.com/PublisherModel
Input/output character count distribution.
type :
Type of character (input/output).
request_type :
Type of request (dedicated/shared).
accounting_resource :
The identifier of the GCP project/folder/org to which quota is accounted to. Available for Provisioned Throughput only.
modality :
Modality of the input/output characters.
publisher/online_serving/consumed_throughput
BETA
(project)
Character Throughput
DELTA , INT64 , 1
aiplatform.googleapis.com/PublisherModel
Overall throughput used (accounting for burndown rate) in terms of characters.
request_type :
Type of request (dedicated/shared).
accounting_resource :
The identifier of the GCP project/folder/org to which quota is accounted to. Available for Provisioned Throughput only.
modality :
Modality of the consumed characters.
publisher/online_serving/consumed_token_throughput
BETA
(project)
Token Throughput
DELTA , INT64 , 1
aiplatform.googleapis.com/PublisherModel
Overall throughput used (accounting for burndown rate) in terms of tokens.
request_type :
Type of request (dedicated/shared).
accounting_resource :
The identifier of the GCP project/folder/org to which quota is accounted to. Available for Provisioned Throughput only.
modality :
Modality of the consumed tokens.
publisher/online_serving/dedicated_character_limit
BETA
(project)
Limit (characters per second)
GAUGE , INT64 , 1/s
aiplatform.googleapis.com/PublisherModel
Dedicated limit in characters per second.
publisher/online_serving/dedicated_character_project_max_limit
BETA
(project)
Project Max Limit (characters per second)
GAUGE , INT64 , 1/s
aiplatform.googleapis.com/PublisherModel
Project max limit in characters per second that can be consumed.
accounting_resource :
The identifier of the GCP project/folder/org to which quota is accounted to. Available for Provisioned Throughput only.
publisher/online_serving/dedicated_gsu_limit
BETA
(project)
Limit (GSU)
GAUGE , INT64 , 1
aiplatform.googleapis.com/PublisherModel
Dedicated limit in GSU.
publisher/online_serving/dedicated_gsu_project_max_limit
BETA
(project)
Project Max Limit (GSU)
GAUGE , INT64 , 1
aiplatform.googleapis.com/PublisherModel
Project max limit in GSU that can be consumed.
accounting_resource :
The identifier of the GCP project/folder/org to which quota is accounted to. Available for Provisioned Throughput only.
publisher/online_serving/dedicated_token_limit
BETA
(project)
Limit (tokens per second)
GAUGE , INT64 , 1/s
aiplatform.googleapis.com/PublisherModel
Dedicated limit in tokens per second.
publisher/online_serving/dedicated_token_project_max_limit
BETA
(project)
Project Max Limit (tokens per second)
GAUGE , INT64 , 1/s
aiplatform.googleapis.com/PublisherModel
Project max limit in tokens per second that can be consumed.
accounting_resource :
The identifier of the GCP project/folder/org to which quota is accounted to. Available for Provisioned Throughput only.
publisher/online_serving/first_token_latencies
BETA
(project)
First token latencies
DELTA , DISTRIBUTION , ms
aiplatform.googleapis.com/PublisherModel
Duration from request received to first token sent back to the client.
input_token_size :
The bucketized size of number of tokens in the prediction request.
output_token_size :
The bucketized size of number of tokens in the prediction response.
max_token_size :
The bucketized max size of number of tokens in the prediction request/response.
request_type :
The type of traffic of the request (dedicated/shared).
explicit_caching :
Whether the request uses explicit caching feature.
publisher/online_serving/model_invocation_count
BETA
(project)
Model invocation count
DELTA , INT64 , 1
aiplatform.googleapis.com/PublisherModel
Number of model invocations (prediction requests).
input_token_size :
The bucketized size of number of tokens in the prediction request.
output_token_size :
The bucketized size of number of tokens in the prediction response.
max_token_size :
The bucketized max size of number of tokens in the prediction request/response.
response_code :
Responce code of prediction request.
request_type :
The type of traffic of the request (dedicated/shared).
method :
The type of method of the request (RawPredict/StreamRawPredict/ChatCompletions/etc).
error_category :
Response error category of the request (user/system/capacity).
explicit_caching :
Whether the request uses explicit caching feature.
accounting_resource :
The identifier of the GCP project/folder/org to which quota is accounted to. Available for Provisioned Throughput only.
publisher/online_serving/model_invocation_latencies
BETA
(project)
Model invocation latencies
DELTA , DISTRIBUTION , ms
aiplatform.googleapis.com/PublisherModel
Model invocation latencies (prediction latencies).
input_token_size :
The bucketized size of number of tokens in the prediction request.
output_token_size :
The bucketized size of number of tokens in the prediction response.
max_token_size :
The bucketized max size of number of tokens in the prediction request/response.
latency_type :
The type of latency for the prediction request (either model or overhead).
request_type :
The type of traffic of the request (dedicated/shared).
explicit_caching :
Whether the request uses explicit caching feature.
publisher/online_serving/token_count
BETA
(project)
Token count
DELTA , INT64 , 1
aiplatform.googleapis.com/PublisherModel
Accumulated input/output token count.
max_token_size :
The bucketized max size of number of tokens in the prediction request/response.
type :
Type of token (input/output).
request_type :
The type of traffic of the request (dedicated/shared).
explicit_caching :
Whether the request uses explicit caching feature.
accounting_resource :
The identifier of the GCP project/folder/org to which quota is accounted to. Available for Provisioned Throughput only.
modality :
Modality of the input/output tokens.
source :
The source/surface that the token consumption is originated from. For global endpoint, this is 'global'; otherwise, this is the region where a request is served. The label can also have prefix, such as 'batch_', to indicate product breakdown.
publisher/online_serving/tokens
BETA
(project)
Tokens
DELTA , DISTRIBUTION , 1
aiplatform.googleapis.com/PublisherModel
Input/output token count distribution.
max_token_size :
The bucketized max size of number of tokens in the prediction request/response.
type :
Type of token (input/output).
request_type :
The type of traffic of the request (dedicated/shared).
accounting_resource :
The identifier of the GCP project/folder/org to which quota is accounted to. Available for Provisioned Throughput only.
modality :
Modality of the input/output tokens.
quota/eu_multi_region_online_prediction_input_tokens_per_minute_per_base_model/exceeded
BETA
(project)
EU multi-region online prediction input tokens per minute per base model quota exceeded error
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Number of attempts to exceed the limit on quota metric aiplatform.googleapis.com/eu_multi_region_online_prediction_input_tokens_per_minute_per_base_model. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model :
The multi-region base model custom dimension.
quota/eu_multi_region_online_prediction_input_tokens_per_minute_per_base_model/limit
BETA
(project)
EU multi-region online prediction input tokens per minute per base model quota limit
GAUGE , INT64 , 1
aiplatform.googleapis.com/Location
Current limit on quota metric aiplatform.googleapis.com/eu_multi_region_online_prediction_input_tokens_per_minute_per_base_model. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model :
The multi-region base model custom dimension.
quota/eu_multi_region_online_prediction_input_tokens_per_minute_per_base_model/usage
BETA
(project)
EU multi-region online prediction input tokens per minute per base model quota usage
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Current usage on quota metric aiplatform.googleapis.com/eu_multi_region_online_prediction_input_tokens_per_minute_per_base_model. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
base_model :
The multi-region base model custom dimension.
quota/eu_multi_region_online_prediction_output_tokens_per_minute_per_base_model/exceeded
BETA
(project)
EU multi-region online prediction output tokens per minute per base model quota exceeded error
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Number of attempts to exceed the limit on quota metric aiplatform.googleapis.com/eu_multi_region_online_prediction_output_tokens_per_minute_per_base_model. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model :
The multi-region base model custom dimension.
quota/eu_multi_region_online_prediction_output_tokens_per_minute_per_base_model/limit
BETA
(project)
EU multi-region online prediction output tokens per minute per base model quota limit
GAUGE , INT64 , 1
aiplatform.googleapis.com/Location
Current limit on quota metric aiplatform.googleapis.com/eu_multi_region_online_prediction_output_tokens_per_minute_per_base_model. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model :
The multi-region base model custom dimension.
quota/eu_multi_region_online_prediction_output_tokens_per_minute_per_base_model/usage
BETA
(project)
EU multi-region online prediction output tokens per minute per base model quota usage
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Current usage on quota metric aiplatform.googleapis.com/eu_multi_region_online_prediction_output_tokens_per_minute_per_base_model. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
base_model :
The multi-region base model custom dimension.
quota/eu_multi_region_online_prediction_requests_per_base_model/exceeded
BETA
(project)
EU multi-region online prediction requests per base model quota exceeded error
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Number of attempts to exceed the limit on quota metric aiplatform.googleapis.com/eu_multi_region_online_prediction_requests_per_base_model. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model :
The multi-region base model custom dimension.
quota/eu_multi_region_online_prediction_requests_per_base_model/limit
BETA
(project)
EU multi-region online prediction requests per base model quota limit
GAUGE , INT64 , 1
aiplatform.googleapis.com/Location
Current limit on quota metric aiplatform.googleapis.com/eu_multi_region_online_prediction_requests_per_base_model. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model :
The multi-region base model custom dimension.
quota/eu_multi_region_online_prediction_requests_per_base_model/usage
BETA
(project)
EU multi-region online prediction requests per base model quota usage
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Current usage on quota metric aiplatform.googleapis.com/eu_multi_region_online_prediction_requests_per_base_model. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
base_model :
The multi-region base model custom dimension.
quota/eu_multi_region_online_prediction_web_search_requests_per_publisher/exceeded
BETA
(project)
EU multi-region online prediction web search requests per publisher quota exceeded error
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Number of attempts to exceed the limit on quota metric aiplatform.googleapis.com/eu_multi_region_online_prediction_web_search_requests_per_publisher. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
publisher :
The multi-region publisher custom dimension.
quota/eu_multi_region_online_prediction_web_search_requests_per_publisher/limit
BETA
(project)
EU multi-region online prediction web search requests per publisher quota limit
GAUGE , INT64 , 1
aiplatform.googleapis.com/Location
Current limit on quota metric aiplatform.googleapis.com/eu_multi_region_online_prediction_web_search_requests_per_publisher. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
publisher :
The multi-region publisher custom dimension.
quota/eu_multi_region_online_prediction_web_search_requests_per_publisher/usage
BETA
(project)
EU multi-region online prediction web search requests per publisher quota usage
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Current usage on quota metric aiplatform.googleapis.com/eu_multi_region_online_prediction_web_search_requests_per_publisher. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
publisher :
The multi-region publisher custom dimension.
quota/flex_requests_per_minute_per_project_per_base_model/exceeded
BETA
(project)
Flex API requests per minute per project per base model. quota exceeded error
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Number of attempts to exceed the limit on quota metric aiplatform.googleapis.com/flex_requests_per_minute_per_project_per_base_model. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model :
The base model custom dimension.
quota/flex_requests_per_minute_per_project_per_base_model/limit
BETA
(project)
Flex API requests per minute per project per base model. quota limit
GAUGE , INT64 , 1
aiplatform.googleapis.com/Location
Current limit on quota metric aiplatform.googleapis.com/flex_requests_per_minute_per_project_per_base_model. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model :
The base model custom dimension.
quota/flex_requests_per_minute_per_project_per_base_model/usage
BETA
(project)
Flex API requests per minute per project per base model. quota usage
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Current usage on quota metric aiplatform.googleapis.com/flex_requests_per_minute_per_project_per_base_model. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
base_model :
The base model custom dimension.
quota/generate_content_audio_input_per_base_model_id_and_resolution/exceeded
ALPHA
(project)
Generate content requests with audio input per minute per project per region per base model and resolution quota exceeded error
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Number of attempts to exceed the limit on quota metric aiplatform.googleapis.com/generate_content_audio_input_per_base_model_id_and_resolution. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model_id_and_resolution :
The base model and resolution custom dimension.
mime_type :
The mimetype of the input.
quota/generate_content_audio_input_per_base_model_id_and_resolution/limit
ALPHA
(project)
Generate content requests with audio input per minute per project per region per base model and resolution quota limit
GAUGE , INT64 , 1
aiplatform.googleapis.com/Location
Current limit on quota metric aiplatform.googleapis.com/generate_content_audio_input_per_base_model_id_and_resolution. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model_id_and_resolution :
The base model and resolution custom dimension.
mime_type :
The mimetype of the input.
quota/generate_content_audio_input_per_base_model_id_and_resolution/usage
ALPHA
(project)
Generate content requests with audio input per minute per project per region per base model and resolution quota usage
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Current usage on quota metric aiplatform.googleapis.com/generate_content_audio_input_per_base_model_id_and_resolution. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
base_model_id_and_resolution :
The base model and resolution custom dimension.
mime_type :
The mimetype of the input.
quota/generate_content_audio_input_per_base_model_id_and_resolution_global/exceeded
ALPHA
(project)
Generate content requests with audio input per minute per project per region per base model and resolution for global endpoint quota exceeded error
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Number of attempts to exceed the limit on quota metric aiplatform.googleapis.com/generate_content_audio_input_per_base_model_id_and_resolution_global. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model_id_and_resolution :
The base model and resolution custom dimension.
mime_type :
The mimetype of the input.
quota/generate_content_audio_input_per_base_model_id_and_resolution_global/limit
ALPHA
(project)
Generate content requests with audio input per minute per project per region per base model and resolution for global endpoint quota limit
GAUGE , INT64 , 1
aiplatform.googleapis.com/Location
Current limit on quota metric aiplatform.googleapis.com/generate_content_audio_input_per_base_model_id_and_resolution_global. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model_id_and_resolution :
The base model and resolution custom dimension.
mime_type :
The mimetype of the input.
quota/generate_content_audio_input_per_base_model_id_and_resolution_global/usage
ALPHA
(project)
Generate content requests with audio input per minute per project per region per base model and resolution for global endpoint quota usage
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Current usage on quota metric aiplatform.googleapis.com/generate_content_audio_input_per_base_model_id_and_resolution_global. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
base_model_id_and_resolution :
The base model and resolution custom dimension.
mime_type :
The mimetype of the input.
quota/generate_content_document_input_per_base_model_id_and_resolution/exceeded
ALPHA
(project)
Generate content requests with document input per minute per project per region per base model and resolution quota exceeded error
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Number of attempts to exceed the limit on quota metric aiplatform.googleapis.com/generate_content_document_input_per_base_model_id_and_resolution. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model_id_and_resolution :
The base model and resolution custom dimension.
mime_type :
The mimetype of the input.
quota/generate_content_document_input_per_base_model_id_and_resolution/limit
ALPHA
(project)
Generate content requests with document input per minute per project per region per base model and resolution quota limit
GAUGE , INT64 , 1
aiplatform.googleapis.com/Location
Current limit on quota metric aiplatform.googleapis.com/generate_content_document_input_per_base_model_id_and_resolution. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model_id_and_resolution :
The base model and resolution custom dimension.
mime_type :
The mimetype of the input.
quota/generate_content_document_input_per_base_model_id_and_resolution/usage
ALPHA
(project)
Generate content requests with document input per minute per project per region per base model and resolution quota usage
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Current usage on quota metric aiplatform.googleapis.com/generate_content_document_input_per_base_model_id_and_resolution. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
base_model_id_and_resolution :
The base model and resolution custom dimension.
mime_type :
The mimetype of the input.
quota/generate_content_document_input_per_base_model_id_and_resolution_global/exceeded
ALPHA
(project)
Generate content requests with document input per minute per project per region per base model and resolution for global endpoint quota exceeded error
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Number of attempts to exceed the limit on quota metric aiplatform.googleapis.com/generate_content_document_input_per_base_model_id_and_resolution_global. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model_id_and_resolution :
The base model and resolution custom dimension.
mime_type :
The mimetype of the input.
quota/generate_content_document_input_per_base_model_id_and_resolution_global/limit
ALPHA
(project)
Generate content requests with document input per minute per project per region per base model and resolution for global endpoint quota limit
GAUGE , INT64 , 1
aiplatform.googleapis.com/Location
Current limit on quota metric aiplatform.googleapis.com/generate_content_document_input_per_base_model_id_and_resolution_global. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model_id_and_resolution :
The base model and resolution custom dimension.
mime_type :
The mimetype of the input.
quota/generate_content_document_input_per_base_model_id_and_resolution_global/usage
ALPHA
(project)
Generate content requests with document input per minute per project per region per base model and resolution for global endpoint quota usage
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Current usage on quota metric aiplatform.googleapis.com/generate_content_document_input_per_base_model_id_and_resolution_global. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
base_model_id_and_resolution :
The base model and resolution custom dimension.
mime_type :
The mimetype of the input.
quota/generate_content_image_input_per_base_model_id_and_resolution/exceeded
ALPHA
(project)
Generate content requests with image input per minute per project per region per base model and resolution quota exceeded error
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Number of attempts to exceed the limit on quota metric aiplatform.googleapis.com/generate_content_image_input_per_base_model_id_and_resolution. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model_id_and_resolution :
The base model and resolution custom dimension.
mime_type :
The mimetype of the input.
quota/generate_content_image_input_per_base_model_id_and_resolution/limit
ALPHA
(project)
Generate content requests with image input per minute per project per region per base model and resolution quota limit
GAUGE , INT64 , 1
aiplatform.googleapis.com/Location
Current limit on quota metric aiplatform.googleapis.com/generate_content_image_input_per_base_model_id_and_resolution. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model_id_and_resolution :
The base model and resolution custom dimension.
mime_type :
The mimetype of the input.
quota/generate_content_image_input_per_base_model_id_and_resolution/usage
ALPHA
(project)
Generate content requests with image input per minute per project per region per base model and resolution quota usage
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Current usage on quota metric aiplatform.googleapis.com/generate_content_image_input_per_base_model_id_and_resolution. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
base_model_id_and_resolution :
The base model and resolution custom dimension.
mime_type :
The mimetype of the input.
quota/generate_content_image_input_per_base_model_id_and_resolution_global/exceeded
ALPHA
(project)
Generate content requests with image input per minute per project per region per base model and resolution for global endpoint quota exceeded error
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Number of attempts to exceed the limit on quota metric aiplatform.googleapis.com/generate_content_image_input_per_base_model_id_and_resolution_global. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model_id_and_resolution :
The base model and resolution custom dimension.
mime_type :
The mimetype of the input.
quota/generate_content_image_input_per_base_model_id_and_resolution_global/limit
ALPHA
(project)
Generate content requests with image input per minute per project per region per base model and resolution for global endpoint quota limit
GAUGE , INT64 , 1
aiplatform.googleapis.com/Location
Current limit on quota metric aiplatform.googleapis.com/generate_content_image_input_per_base_model_id_and_resolution_global. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model_id_and_resolution :
The base model and resolution custom dimension.
mime_type :
The mimetype of the input.
quota/generate_content_image_input_per_base_model_id_and_resolution_global/usage
ALPHA
(project)
Generate content requests with image input per minute per project per region per base model and resolution for global endpoint quota usage
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Current usage on quota metric aiplatform.googleapis.com/generate_content_image_input_per_base_model_id_and_resolution_global. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
base_model_id_and_resolution :
The base model and resolution custom dimension.
mime_type :
The mimetype of the input.
quota/generate_content_input_tokens_per_minute_per_base_model/exceeded
BETA
(project)
Generate content input tokens per minute per base model quota exceeded error
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Number of attempts to exceed the limit on quota metric aiplatform.googleapis.com/generate_content_input_tokens_per_minute_per_base_model. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model :
The base model custom dimension.
quota/generate_content_input_tokens_per_minute_per_base_model/limit
BETA
(project)
Generate content input tokens per minute per base model quota limit
GAUGE , INT64 , 1
aiplatform.googleapis.com/Location
Current limit on quota metric aiplatform.googleapis.com/generate_content_input_tokens_per_minute_per_base_model. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model :
The base model custom dimension.
quota/generate_content_input_tokens_per_minute_per_base_model/usage
BETA
(project)
Generate content input tokens per minute per base model quota usage
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Current usage on quota metric aiplatform.googleapis.com/generate_content_input_tokens_per_minute_per_base_model. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
base_model :
The base model custom dimension.
quota/generate_content_requests_per_minute_per_project_per_base_model/exceeded
ALPHA
(project)
Generate content requests per minute per project per base model quota exceeded error
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Number of attempts to exceed the limit on quota metric aiplatform.googleapis.com/generate_content_requests_per_minute_per_project_per_base_model. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model :
The base model custom dimension.
quota/generate_content_requests_per_minute_per_project_per_base_model/limit
ALPHA
(project)
Generate content requests per minute per project per base model quota limit
GAUGE , INT64 , 1
aiplatform.googleapis.com/Location
Current limit on quota metric aiplatform.googleapis.com/generate_content_requests_per_minute_per_project_per_base_model. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model :
The base model custom dimension.
quota/generate_content_requests_per_minute_per_project_per_base_model/usage
ALPHA
(project)
Generate content requests per minute per project per base model quota usage
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Current usage on quota metric aiplatform.googleapis.com/generate_content_requests_per_minute_per_project_per_base_model. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
base_model :
The base model custom dimension.
quota/generate_content_video_input_per_base_model_id_and_resolution/exceeded
ALPHA
(project)
Generate content requests with video input per minute per project per region per base model and resolution quota exceeded error
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Number of attempts to exceed the limit on quota metric aiplatform.googleapis.com/generate_content_video_input_per_base_model_id_and_resolution. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model_id_and_resolution :
The base model and resolution custom dimension.
mime_type :
The mimetype of the input.
quota/generate_content_video_input_per_base_model_id_and_resolution/limit
ALPHA
(project)
Generate content requests with video input per minute per project per region per base model and resolution quota limit
GAUGE , INT64 , 1
aiplatform.googleapis.com/Location
Current limit on quota metric aiplatform.googleapis.com/generate_content_video_input_per_base_model_id_and_resolution. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model_id_and_resolution :
The base model and resolution custom dimension.
mime_type :
The mimetype of the input.
quota/generate_content_video_input_per_base_model_id_and_resolution/usage
ALPHA
(project)
Generate content requests with video input per minute per project per region per base model and resolution quota usage
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Current usage on quota metric aiplatform.googleapis.com/generate_content_video_input_per_base_model_id_and_resolution. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
base_model_id_and_resolution :
The base model and resolution custom dimension.
mime_type :
The mimetype of the input.
quota/generate_content_video_input_per_base_model_id_and_resolution_global/exceeded
ALPHA
(project)
Generate content requests with video input per minute per project per region per base model and resolution for global endpoint quota exceeded error
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Number of attempts to exceed the limit on quota metric aiplatform.googleapis.com/generate_content_video_input_per_base_model_id_and_resolution_global. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model_id_and_resolution :
The base model and resolution custom dimension.
mime_type :
The mimetype of the input.
quota/generate_content_video_input_per_base_model_id_and_resolution_global/limit
ALPHA
(project)
Generate content requests with video input per minute per project per region per base model and resolution for global endpoint quota limit
GAUGE , INT64 , 1
aiplatform.googleapis.com/Location
Current limit on quota metric aiplatform.googleapis.com/generate_content_video_input_per_base_model_id_and_resolution_global. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model_id_and_resolution :
The base model and resolution custom dimension.
mime_type :
The mimetype of the input.
quota/generate_content_video_input_per_base_model_id_and_resolution_global/usage
ALPHA
(project)
Generate content requests with video input per minute per project per region per base model and resolution for global endpoint quota usage
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Current usage on quota metric aiplatform.googleapis.com/generate_content_video_input_per_base_model_id_and_resolution_global. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
base_model_id_and_resolution :
The base model and resolution custom dimension.
mime_type :
The mimetype of the input.
quota/global_online_prediction_input_tokens_per_minute_per_base_model/exceeded
BETA
(project)
Global online prediction input tokens per minute per base model quota exceeded error
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Number of attempts to exceed the limit on quota metric aiplatform.googleapis.com/global_online_prediction_input_tokens_per_minute_per_base_model. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model :
The global base model custom dimension.
quota/global_online_prediction_input_tokens_per_minute_per_base_model/limit
BETA
(project)
Global online prediction input tokens per minute per base model quota limit
GAUGE , INT64 , 1
aiplatform.googleapis.com/Location
Current limit on quota metric aiplatform.googleapis.com/global_online_prediction_input_tokens_per_minute_per_base_model. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model :
The global base model custom dimension.
quota/global_online_prediction_input_tokens_per_minute_per_base_model/usage
BETA
(project)
Global online prediction input tokens per minute per base model quota usage
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Current usage on quota metric aiplatform.googleapis.com/global_online_prediction_input_tokens_per_minute_per_base_model. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
base_model :
The global base model custom dimension.
quota/global_online_prediction_output_tokens_per_minute_per_base_model/exceeded
BETA
(project)
Global online prediction output tokens per minute per base model quota exceeded error
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Number of attempts to exceed the limit on quota metric aiplatform.googleapis.com/global_online_prediction_output_tokens_per_minute_per_base_model. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model :
The global base model custom dimension.
quota/global_online_prediction_output_tokens_per_minute_per_base_model/limit
BETA
(project)
Global online prediction output tokens per minute per base model quota limit
GAUGE , INT64 , 1
aiplatform.googleapis.com/Location
Current limit on quota metric aiplatform.googleapis.com/global_online_prediction_output_tokens_per_minute_per_base_model. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model :
The global base model custom dimension.
quota/global_online_prediction_output_tokens_per_minute_per_base_model/usage
BETA
(project)
Global online prediction output tokens per minute per base model quota usage
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Current usage on quota metric aiplatform.googleapis.com/global_online_prediction_output_tokens_per_minute_per_base_model. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
base_model :
The global base model custom dimension.
quota/long_running_online_prediction_requests_per_base_model/exceeded
ALPHA
(project)
Long running online prediction requests quota exceeded error
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Number of attempts to exceed the limit on quota metric aiplatform.googleapis.com/long_running_online_prediction_requests_per_base_model. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model :
The base model custom dimension.
quota/long_running_online_prediction_requests_per_base_model/limit
ALPHA
(project)
Long running online prediction requests quota limit
GAUGE , INT64 , 1
aiplatform.googleapis.com/Location
Current limit on quota metric aiplatform.googleapis.com/long_running_online_prediction_requests_per_base_model. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model :
The base model custom dimension.
quota/long_running_online_prediction_requests_per_base_model/usage
ALPHA
(project)
Long running online prediction requests quota usage
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Current usage on quota metric aiplatform.googleapis.com/long_running_online_prediction_requests_per_base_model. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
base_model :
The base model custom dimension.
quota/non_regional_internal_requests/exceeded
ALPHA
(project)
Non-regional requests to internal API. quota exceeded error
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Number of attempts to exceed the limit on quota metric aiplatform.googleapis.com/non_regional_internal_requests. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/non_regional_internal_requests/limit
ALPHA
(project)
Non-regional requests to internal API. quota limit
GAUGE , INT64 , 1
aiplatform.googleapis.com/Location
Current limit on quota metric aiplatform.googleapis.com/non_regional_internal_requests. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/non_regional_internal_requests/usage
ALPHA
(project)
Non-regional requests to internal API. quota usage
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Current usage on quota metric aiplatform.googleapis.com/non_regional_internal_requests. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
quota/non_regional_job_or_lro_submission_requests/exceeded
ALPHA
(project)
Non-regional job or LRO submission requests quota exceeded error
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Number of attempts to exceed the limit on quota metric aiplatform.googleapis.com/non_regional_job_or_lro_submission_requests. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/non_regional_job_or_lro_submission_requests/limit
ALPHA
(project)
Non-regional job or LRO submission requests quota limit
GAUGE , INT64 , 1
aiplatform.googleapis.com/Location
Current limit on quota metric aiplatform.googleapis.com/non_regional_job_or_lro_submission_requests. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/non_regional_job_or_lro_submission_requests/usage
ALPHA
(project)
Non-regional job or LRO submission requests quota usage
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Current usage on quota metric aiplatform.googleapis.com/non_regional_job_or_lro_submission_requests. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
quota/non_regional_resource_management_requests/exceeded
ALPHA
(project)
Non-regional resource management (CRUD) requests (not for model serving) quota exceeded error
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Number of attempts to exceed the limit on quota metric aiplatform.googleapis.com/non_regional_resource_management_requests. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/non_regional_resource_management_requests/limit
ALPHA
(project)
Non-regional resource management (CRUD) requests (not for model serving) quota limit
GAUGE , INT64 , 1
aiplatform.googleapis.com/Location
Current limit on quota metric aiplatform.googleapis.com/non_regional_resource_management_requests. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/non_regional_resource_management_requests/usage
ALPHA
(project)
Non-regional resource management (CRUD) requests (not for model serving) quota usage
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Current usage on quota metric aiplatform.googleapis.com/non_regional_resource_management_requests. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
quota/online_prediction_dedicated_requests_per_base_model_version/exceeded
BETA
(project)
Online prediction dedicated requests per base model version quota exceeded error
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Number of attempts to exceed the limit on quota metric aiplatform.googleapis.com/online_prediction_dedicated_requests_per_base_model_version. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model_version :
The base model version custom dimension.
quota/online_prediction_dedicated_requests_per_base_model_version/limit
BETA
(project)
Online prediction dedicated requests per base model version quota limit
GAUGE , INT64 , 1
aiplatform.googleapis.com/Location
Current limit on quota metric aiplatform.googleapis.com/online_prediction_dedicated_requests_per_base_model_version. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model_version :
The base model version custom dimension.
quota/online_prediction_dedicated_requests_per_base_model_version/usage
BETA
(project)
Online prediction dedicated requests per base model version quota usage
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Current usage on quota metric aiplatform.googleapis.com/online_prediction_dedicated_requests_per_base_model_version. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
base_model_version :
The base model version custom dimension.
quota/online_prediction_dedicated_tokens_per_base_model_version/exceeded
BETA
(project)
Online prediction dedicated tokens per minute per base model version quota exceeded error
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Number of attempts to exceed the limit on quota metric aiplatform.googleapis.com/online_prediction_dedicated_tokens_per_base_model_version. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model_version :
The base model version custom dimension.
quota/online_prediction_dedicated_tokens_per_base_model_version/limit
BETA
(project)
Online prediction dedicated tokens per minute per base model version quota limit
GAUGE , INT64 , 1
aiplatform.googleapis.com/Location
Current limit on quota metric aiplatform.googleapis.com/online_prediction_dedicated_tokens_per_base_model_version. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model_version :
The base model version custom dimension.
quota/online_prediction_dedicated_tokens_per_base_model_version/usage
BETA
(project)
Online prediction dedicated tokens per minute per base model version quota usage
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Current usage on quota metric aiplatform.googleapis.com/online_prediction_dedicated_tokens_per_base_model_version. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
base_model_version :
The base model version custom dimension.
quota/online_prediction_input_tokens_per_minute_per_base_model/exceeded
BETA
(project)
Online prediction input tokens per minute per base model quota exceeded error
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Number of attempts to exceed the limit on quota metric aiplatform.googleapis.com/online_prediction_input_tokens_per_minute_per_base_model. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model :
The base model custom dimension.
quota/online_prediction_input_tokens_per_minute_per_base_model/limit
BETA
(project)
Online prediction input tokens per minute per base model quota limit
GAUGE , INT64 , 1
aiplatform.googleapis.com/Location
Current limit on quota metric aiplatform.googleapis.com/online_prediction_input_tokens_per_minute_per_base_model. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model :
The base model custom dimension.
quota/online_prediction_input_tokens_per_minute_per_base_model/usage
BETA
(project)
Online prediction input tokens per minute per base model quota usage
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Current usage on quota metric aiplatform.googleapis.com/online_prediction_input_tokens_per_minute_per_base_model. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
base_model :
The base model custom dimension.
quota/online_prediction_output_tokens_per_minute_per_base_model/exceeded
BETA
(project)
Online prediction output tokens per minute per base model quota exceeded error
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Number of attempts to exceed the limit on quota metric aiplatform.googleapis.com/online_prediction_output_tokens_per_minute_per_base_model. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model :
The base model custom dimension.
quota/online_prediction_output_tokens_per_minute_per_base_model/limit
BETA
(project)
Online prediction output tokens per minute per base model quota limit
GAUGE , INT64 , 1
aiplatform.googleapis.com/Location
Current limit on quota metric aiplatform.googleapis.com/online_prediction_output_tokens_per_minute_per_base_model. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model :
The base model custom dimension.
quota/online_prediction_output_tokens_per_minute_per_base_model/usage
BETA
(project)
Online prediction output tokens per minute per base model quota usage
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Current usage on quota metric aiplatform.googleapis.com/online_prediction_output_tokens_per_minute_per_base_model. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
base_model :
The base model custom dimension.
quota/online_prediction_requests_per_base_model/exceeded
BETA
(project)
Regional online prediction requests per base model quota exceeded error
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Number of attempts to exceed the limit on quota metric aiplatform.googleapis.com/online_prediction_requests_per_base_model. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model :
The regional base model custom dimension.
quota/online_prediction_requests_per_base_model/limit
BETA
(project)
Regional online prediction requests per base model quota limit
GAUGE , INT64 , 1
aiplatform.googleapis.com/Location
Current limit on quota metric aiplatform.googleapis.com/online_prediction_requests_per_base_model. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model :
The regional base model custom dimension.
quota/online_prediction_requests_per_base_model/usage
BETA
(project)
Regional online prediction requests per base model quota usage
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Current usage on quota metric aiplatform.googleapis.com/online_prediction_requests_per_base_model. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
base_model :
The regional base model custom dimension.
quota/online_prediction_tokens_per_minute_per_base_model/exceeded
BETA
(project)
Regional online prediction tokens per minute per base model quota exceeded error
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Number of attempts to exceed the limit on quota metric aiplatform.googleapis.com/online_prediction_tokens_per_minute_per_base_model. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model :
The regional base model custom dimension.
quota/online_prediction_tokens_per_minute_per_base_model/limit
BETA
(project)
Regional online prediction tokens per minute per base model quota limit
GAUGE , INT64 , 1
aiplatform.googleapis.com/Location
Current limit on quota metric aiplatform.googleapis.com/online_prediction_tokens_per_minute_per_base_model. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model :
The regional base model custom dimension.
quota/online_prediction_tokens_per_minute_per_base_model/usage
BETA
(project)
Regional online prediction tokens per minute per base model quota usage
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Current usage on quota metric aiplatform.googleapis.com/online_prediction_tokens_per_minute_per_base_model. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
base_model :
The regional base model custom dimension.
quota/us_multi_region_online_prediction_input_tokens_per_minute_per_base_model/exceeded
BETA
(project)
US multi-region online prediction input tokens per minute per base model quota exceeded error
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Number of attempts to exceed the limit on quota metric aiplatform.googleapis.com/us_multi_region_online_prediction_input_tokens_per_minute_per_base_model. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model :
The multi-region base model custom dimension.
quota/us_multi_region_online_prediction_input_tokens_per_minute_per_base_model/limit
BETA
(project)
US multi-region online prediction input tokens per minute per base model quota limit
GAUGE , INT64 , 1
aiplatform.googleapis.com/Location
Current limit on quota metric aiplatform.googleapis.com/us_multi_region_online_prediction_input_tokens_per_minute_per_base_model. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model :
The multi-region base model custom dimension.
quota/us_multi_region_online_prediction_input_tokens_per_minute_per_base_model/usage
BETA
(project)
US multi-region online prediction input tokens per minute per base model quota usage
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Current usage on quota metric aiplatform.googleapis.com/us_multi_region_online_prediction_input_tokens_per_minute_per_base_model. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
base_model :
The multi-region base model custom dimension.
quota/us_multi_region_online_prediction_output_tokens_per_minute_per_base_model/exceeded
BETA
(project)
US multi-region online prediction output tokens per minute per base model quota exceeded error
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Number of attempts to exceed the limit on quota metric aiplatform.googleapis.com/us_multi_region_online_prediction_output_tokens_per_minute_per_base_model. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model :
The multi-region base model custom dimension.
quota/us_multi_region_online_prediction_output_tokens_per_minute_per_base_model/limit
BETA
(project)
US multi-region online prediction output tokens per minute per base model quota limit
GAUGE , INT64 , 1
aiplatform.googleapis.com/Location
Current limit on quota metric aiplatform.googleapis.com/us_multi_region_online_prediction_output_tokens_per_minute_per_base_model. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model :
The multi-region base model custom dimension.
quota/us_multi_region_online_prediction_output_tokens_per_minute_per_base_model/usage
BETA
(project)
US multi-region online prediction output tokens per minute per base model quota usage
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Current usage on quota metric aiplatform.googleapis.com/us_multi_region_online_prediction_output_tokens_per_minute_per_base_model. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
base_model :
The multi-region base model custom dimension.
quota/us_multi_region_online_prediction_requests_per_base_model/exceeded
BETA
(project)
US multi-region online prediction requests per base model quota exceeded error
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Number of attempts to exceed the limit on quota metric aiplatform.googleapis.com/us_multi_region_online_prediction_requests_per_base_model. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model :
The multi-region base model custom dimension.
quota/us_multi_region_online_prediction_requests_per_base_model/limit
BETA
(project)
US multi-region online prediction requests per base model quota limit
GAUGE , INT64 , 1
aiplatform.googleapis.com/Location
Current limit on quota metric aiplatform.googleapis.com/us_multi_region_online_prediction_requests_per_base_model. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
base_model :
The multi-region base model custom dimension.
quota/us_multi_region_online_prediction_requests_per_base_model/usage
BETA
(project)
US multi-region online prediction requests per base model quota usage
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Current usage on quota metric aiplatform.googleapis.com/us_multi_region_online_prediction_requests_per_base_model. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
base_model :
The multi-region base model custom dimension.
quota/us_multi_region_online_prediction_web_search_requests_per_publisher/exceeded
BETA
(project)
US multi-region online prediction web search requests per publisher quota exceeded error
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Number of attempts to exceed the limit on quota metric aiplatform.googleapis.com/us_multi_region_online_prediction_web_search_requests_per_publisher. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
publisher :
The multi-region publisher custom dimension.
quota/us_multi_region_online_prediction_web_search_requests_per_publisher/limit
BETA
(project)
US multi-region online prediction web search requests per publisher quota limit
GAUGE , INT64 , 1
aiplatform.googleapis.com/Location
Current limit on quota metric aiplatform.googleapis.com/us_multi_region_online_prediction_web_search_requests_per_publisher. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
publisher :
The multi-region publisher custom dimension.
quota/us_multi_region_online_prediction_web_search_requests_per_publisher/usage
BETA
(project)
US multi-region online prediction web search requests per publisher quota usage
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Current usage on quota metric aiplatform.googleapis.com/us_multi_region_online_prediction_web_search_requests_per_publisher. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
publisher :
The multi-region publisher custom dimension.
reasoning_engine/cpu/allocation_time
BETA
(project)
Container CPU Allocation
DELTA , DOUBLE , s{CPU}
aiplatform.googleapis.com/ReasoningEngine
Container CPU allocation in seconds.
reasoning_engine/memory/allocation_time
BETA
(project)
Container Memory Allocation
DELTA , DOUBLE , GiBy.s
aiplatform.googleapis.com/ReasoningEngine
Container memory allocation in Gigabytes-seconds.
reasoning_engine/memory_bank/generate_memories_token_count
BETA
(project)
Generate Memories Token Count
DELTA , INT64 , 1
aiplatform.googleapis.com/ReasoningEngine
The number of tokens used in memory generation requests per Reasoning Engine.
type :
Type of token (input/output).
reasoning_engine/memory_bank/memory_lro_latency
BETA
(project)
Memory LRO Latency
DELTA , DISTRIBUTION , ms
aiplatform.googleapis.com/ReasoningEngine
The total latency of memory LROs.
type :
Type of LRO i.e. generate_memories.
reasoning_engine/memory_bank/memory_mutation_count
BETA
(project)
Memory Mutation Count
DELTA , INT64 , 1
aiplatform.googleapis.com/ReasoningEngine
The number of memory mutation operations on the Reasoning Engine.
type :
Type of memory mutation operation. Generated labels: created/updated/deleted. CRUD labels: create_api/update_api/delete_api.
reasoning_engine/memory_bank/memory_retrieval_count
BETA
(project)
Retrieved Memories Count
DELTA , INT64 , 1
aiplatform.googleapis.com/ReasoningEngine
The number of memory entities retrieved per Reasoning Engine.
reasoning_engine/request_count
BETA
(project)
Request Count
DELTA , INT64 , 1
aiplatform.googleapis.com/ReasoningEngine
Number of requests reaching the instance.
type :
Type of request.
response_code :
HTTP response code.
response_code_class :
HTTP response code class.
reasoning_engine/request_latencies
BETA
(project)
Request Latency
DELTA , DISTRIBUTION , ms
aiplatform.googleapis.com/ReasoningEngine
Distribution of request latency in milliseconds reaching the instance.
type :
Type of request.
response_code :
HTTP response code.
response_code_class :
HTTP response code class.
shared_generate_content_multimodal_per_continent_per_mimetype
BETA
(project)
Generate content requests with multimodal input per minute per continent per mime type across all user projects
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Generate content requests with multimodal input per minute per continent per mime type across all user projects.
continent :
The continent custom dimension.
mime_type :
The mime type of the input.
shared_generate_content_multimodal_per_mimetype_per_base_model
BETA
(project)
Generate content requests with multimodal input per mime type per minute per region per base model across all user projects
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Generate content requests with multimodal input per mime type per minute per region per base model across all user projects.
base_model :
The base model custom dimension.
mime_type :
The mime type of the input.
shared_generate_content_requests_per_minute_per_base_model
BETA
(project)
Shared generate content requests per minute per base model
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Generate content requests per minute per base model across all user projects.
base_model :
The base model custom dimension.
shared_online_prediction_requests_per_base_model
BETA
(project)
Shared online prediction requests per base model
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
Online prediction requests per minute per base model across all user projects.
base_model :
The base model custom dimension.
tuned_model/online_serving/consumed_token_throughput
BETA
(project)
Token Throughput
DELTA , INT64 , 1
aiplatform.googleapis.com/Endpoint
Overall throughput used (accounting for burndown rate) in terms of tokens for GenAI tuned models.
request_type :
Type of request (dedicated/shared).
accounting_resource :
The identifier of the GCP project/folder/org to which quota is accounted to. Available for Provisioned Throughput only.
modality :
Modality of the consumed tokens.
tuned_model/online_serving/first_token_latencies
BETA
(project)
First token latencies
DELTA , DISTRIBUTION , ms
aiplatform.googleapis.com/Endpoint
Distribution for the duration from request received to first token sent back to the client for GenAI tuned models since the last sample.
input_token_size :
The bucketized size of number of tokens in the prediction request.
output_token_size :
The bucketized size of number of tokens in the prediction response.
request_type :
The type of traffic of the request (dedicated/shared).
explicit_caching :
Whether the request uses explicit caching feature.
tuned_model/online_serving/model_invocation_latencies
BETA
(project)
Model invocation latencies
DELTA , DISTRIBUTION , ms
aiplatform.googleapis.com/Endpoint
Model invocation latencies (prediction latencies) for fine-tuned GenAI models.
input_token_size :
The bucketized size of number of tokens in the prediction request.
output_token_size :
The bucketized size of number of tokens in the prediction response.
latency_type :
The type of latency for the prediction request (either model or overhead).
request_type :
The type of traffic of the request (dedicated/shared).
explicit_caching :
Whether the request uses explicit caching feature.
tuned_model/online_serving/tokens
BETA
(project)
Tokens
DELTA , DISTRIBUTION , 1
aiplatform.googleapis.com/Endpoint
Input/output token count distribution for GenAI tuned models since the last sample.
max_token_size :
The bucketized max size of number of tokens in the prediction request/response.
type :
Type of token (input/output).
request_type :
The type of traffic of the request (dedicated/shared).
accounting_resource :
The identifier of the GCP project/folder/org to which quota is accounted to. Available for Provisioned Throughput only.
modality :
Modality of the input/output tokens.
us_multi_region_online_prediction_input_tokens_per_minute_per_base_model
BETA
(project)
US multi-region online prediction input tokens per minute per base model
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
US multi-region online prediction input tokens per minute per project per base model.
base_model :
The multi-region base model custom dimension.
us_multi_region_online_prediction_output_tokens_per_minute_per_base_model
BETA
(project)
US multi-region online prediction output tokens per minute per base model
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
US multi-region online prediction output tokens per minute per project per base model.
base_model :
The multi-region base model custom dimension.
us_multi_region_online_prediction_requests_per_base_model
BETA
(project)
US multi-region online prediction requests per base model
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
US multi-region online prediction requests per minute per project per base model.
base_model :
The multi-region base model custom dimension.
us_multi_region_online_prediction_web_search_requests_per_publisher
BETA
(project)
US multi-region online prediction web search requests per publisher
DELTA , INT64 , 1
aiplatform.googleapis.com/Location
US multi-region online prediction web search requests per project per publisher.
publisher :
The multi-region publisher custom dimension.
alloydb
Metrics from AlloyDB for PostgreSQL .
Launch stages of these metrics:
ALPHA
BETA
GA
The "metric type" strings in this table must be prefixed
with alloydb.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
cluster/last_backup_timestamp
GA
(project)
Creation timestamp of the latest backup for the cluster
GAUGE , INT64 , us
alloydb.googleapis.com/Cluster
Creation timestamp of the latest backup for the cluster. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
backup_type :
Type of backup (continuous, automated, on-demand)
cluster/storage/usage
GA
(project)
Cluster storage usage
GAUGE , INT64 , By
alloydb.googleapis.com/Cluster
The total AlloyDB storage in bytes across the entire cluster. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
database/conn_pool/client_connections
BETA
(project)
Client connections
GAUGE , INT64 , 1
alloydb.googleapis.com/Database
Number of client connections per database grouped by status.
status :
Status of the client connection, one [ACTIVE, WAITING].
pooler :
Pooler id for differentiating individual connection pool instances.
database/conn_pool/client_connections_avg_wait_time
BETA
(project)
Average wait time
GAUGE , INT64 , us
alloydb.googleapis.com/Database
Average wait time spent by clients waiting for a server connection per database in microseconds.
pooler :
Pooler id for differentiating individual connection pool instances.
database/conn_pool/num_pools
BETA
(project)
Number of connection pools
GAUGE , INT64 , 1
alloydb.googleapis.com/Database
Number of connection pools per database.
pooler :
Pooler id for differentiating individual connection pool instances.
database/conn_pool/server_connections
BETA
(project)
Server connections
GAUGE , INT64 , 1
alloydb.googleapis.com/Database
Number of server connections per database grouped by status.
status :
Status of the server connection, one of [ACTIVE, IDLE].
pooler :
Pooler id for differentiating individual connection pool instances.
database/postgresql/backends_for_top_databases
GA
(project)
Number of connections to the instance per database
GAUGE , INT64 , 1
alloydb.googleapis.com/Database
The current number of connections per database to the instance for top 500 dbs. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
database/postgresql/blks_hit_for_top_databases
GA
(project)
Blocks hit per database
DELTA , INT64 , 1
alloydb.googleapis.com/Database
Number of times Postgres found the requested block in the buffer cache per database for top 500 databases. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
database/postgresql/blks_read_for_top_databases
GA
(project)
Blocks miss per database
DELTA , INT64 , 1
alloydb.googleapis.com/Database
Number of blocks read by Postgres that were not in the buffer cache per database for top 500 databases. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
database/postgresql/committed_transactions_for_top_databases
GA
(project)
Number of committed transactions per database
DELTA , INT64 , 1
alloydb.googleapis.com/Database
Total number of transactions committed per database for top 500 databases. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
database/postgresql/deadlock_count_for_top_databases
GA
(project)
Number of deadlocks per database
DELTA , INT64 , 1
alloydb.googleapis.com/Database
Total number of deadlocks detected in the instance per database for top 500 dbs. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
database/postgresql/deleted_tuples_count_for_top_databases
GA
(project)
Number of tuples deleted per database
DELTA , INT64 , 1
alloydb.googleapis.com/Database
The total number of rows deleted per db for top 500 dbs as a result of the queries in the instance. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
database/postgresql/fetched_tuples_count_for_top_databases
GA
(project)
Number of tuples fetched per database
DELTA , INT64 , 1
alloydb.googleapis.com/Database
The total number of rows fetched per db for top 500 dbs as a result of the queries in the instance. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
database/postgresql/inserted_tuples_count_for_top_databases
GA
(project)
Number of tuples inserted per database
DELTA , INT64 , 1
alloydb.googleapis.com/Database
The total number of rows inserted per db for top 500 dbs as a result of the queries in the instance. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
database/postgresql/insights/aggregate/execution_time
GA
(project)
Execution time
DELTA , INT64 , us{CPU}
alloydb.googleapis.com/Database
Accumulated query execution time since the last sample.This is the sum of CPU time, IO wait time, lock wait time, process context switch, and scheduling for all the processes involved in the query execution. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
user :
The user of the database.
client_addr :
The IP address of the database client.
database/postgresql/insights/aggregate/io_time
GA
(project)
IO time
DELTA , INT64 , us
alloydb.googleapis.com/Database
Accumulated IO time since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
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
DELTA , DISTRIBUTION , us
alloydb.googleapis.com/Database
Query latency distribution. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
user :
The user of the database.
client_addr :
The IP address of the database client.
database/postgresql/insights/aggregate/lock_time
GA
(project)
Lock time
DELTA , INT64 , us
alloydb.googleapis.com/Database
Accumulated lock wait time since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
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
DELTA , INT64 , 1
alloydb.googleapis.com/Database
The number of retrieved or affected rows since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
user :
The user of the database.
client_addr :
The IP address of the database client.
database/postgresql/insights/aggregate/shared_blk_access_count
GA
(project)
Shared blocks cache access
DELTA , INT64 , 1
alloydb.googleapis.com/Database
Shared blocks (regular tables and indexed) accessed by statement execution. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
user :
The user of the database.
client_addr :
The IP address of the database client.
access_type :
The block access type, which can be one of ["hit" - Read from cache; "miss" - Read from disk].
database/postgresql/insights/perquery/execution_time
GA
(project)
Execution time per query
DELTA , INT64 , us{CPU}
alloydb.googleapis.com/Database
Accumulated execution times per user per database per query.This is the sum of CPU time, IO wait time, lock wait time, process context switch, and scheduling for all the processes involved in the query execution. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
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
IO time per query
DELTA , INT64 , us
alloydb.googleapis.com/Database
Accumulated IO time since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
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
Latency per query
DELTA , DISTRIBUTION , us
alloydb.googleapis.com/Database
Query latency distribution. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
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
Lock time per query
DELTA , INT64 , us
alloydb.googleapis.com/Database
Accumulated lock wait time since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
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
Affected rows per query
DELTA , INT64 , 1
alloydb.googleapis.com/Database
The number of retrieved or affected rows since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
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
Shared blocks cache access per query
DELTA , INT64 , 1
alloydb.googleapis.com/Database
Shared blocks (regular tables & indexed) accessed by statement execution. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
querystring :
The normalized query.
user :
The user of the database.
client_addr :
The IP address of the database client.
access_type :
The block access type, which can be one of ["hit" - Read from cache; "miss" - Read from disk].
query_hash :
A unique hash of the query string.
database/postgresql/insights/pertag/execution_time
GA
(project)
Execution time per tag
DELTA , INT64 , us{CPU}
alloydb.googleapis.com/Database
Accumulated execution times since the last sample.This is the sum of CPU time, IO wait time, lock wait time, process context switch, and scheduling for all the processes involved in the query execution. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
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
database/postgresql/insights/pertag/io_time
GA
(project)
IO time per tag
DELTA , INT64 , us
alloydb.googleapis.com/Database
Accumulated IO time since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
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
io_type :
The IO type (read/write).
tag_hash :
A unique hash of the tag string.
database/postgresql/insights/pertag/latencies
GA
(project)
Latency per tag
DELTA , DISTRIBUTION , us
alloydb.googleapis.com/Database
Query latency distribution. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
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
database/postgresql/insights/pertag/lock_time
GA
(project)
Lock time per tag
DELTA , INT64 , us
alloydb.googleapis.com/Database
Accumulated lock wait time since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
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
The lock type (lw/hw/buffer_pin).
tag_hash :
A unique hash of the tag string.
database/postgresql/insights/pertag/row_count
GA
(project)
Affected rows per tag
DELTA , INT64 , 1
alloydb.googleapis.com/Database
The number of retrieved or affected rows since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
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
database/postgresql/insights/pertag/shared_blk_access_count
GA
(project)
Shared blocks cache accessed per tag
DELTA , INT64 , 1
alloydb.googleapis.com/Database
Shared blocks (regular tables & indexed) accessed by statement execution. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
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
access_type :
The block access type, which can be one of ["hit" - Read from cache; "miss" - Read from disk].
tag_hash :
A unique hash of the tag string.
database/postgresql/new_connections_for_top_databases
GA
(project)
Number of connections added per database
DELTA , INT64 , 1
alloydb.googleapis.com/Database
Total number of new connections added per database for top 500 databases to the instance. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
database/postgresql/returned_tuples_count_for_top_databases
GA
(project)
Number of tuples scanned per database
DELTA , INT64 , 1
alloydb.googleapis.com/Database
The total number of rows scanned per database for top 500 dbs while processing the queries in the instance. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
database/postgresql/rolledback_transactions_for_top_databases
GA
(project)
Number of rolledback transactions per database
DELTA , INT64 , 1
alloydb.googleapis.com/Database
Total number of transactions rolledback per database for top 500 databases. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
database/postgresql/statements_executed_count
GA
(project)
Statements executed count
DELTA , INT64 , 1
alloydb.googleapis.com/Database
Total count of statements executed in the instance per database per operation_type. Only available for instances with Query insights enabled. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
operation_type :
Name of the operation, one of [SELECT, UPDATE, INSERT, DELETE, MERGE, UTILITY, NOTHING, UNKNOWN].
database/postgresql/temp_bytes_written_for_top_databases
GA
(project)
Bytes written to temporary files per database
DELTA , INT64 , By
alloydb.googleapis.com/Database
The total amount of data(in bytes) written to temporary files by the queries per database for top 500 dbs. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
database/postgresql/temp_files_written_for_top_databases
GA
(project)
Temporary files used for writing data per database
DELTA , INT64 , 1
alloydb.googleapis.com/Database
The number of temporary files used for writing data per database while performing internal algorithms like join, sort etc for top 500 dbs. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
database/postgresql/tuples
GA
(project)
Number of tuples (rows) in the database.
GAUGE , INT64 , 1
alloydb.googleapis.com/Database
Number of tuples (rows) by state per database in the instance. This metric will only be exposed when the number of db’s is less than 50. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
state :
State of the tuples, one of [live, dead].
database/postgresql/updated_tuples_count_for_top_databases
GA
(project)
Number of tuples updated per database
DELTA , INT64 , 1
alloydb.googleapis.com/Database
The total number of rows updated per db for top 500 dbs as a result of the queries in the instance. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
database/postgresql/vacuum/oldest_transaction_age
GA
(project)
Oldest transaction age
GAUGE , INT64 , 1
alloydb.googleapis.com/Instance
Current age of the oldest uncommitted transaction. It's measured in the number of transactions that started since the oldest transaction. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
type :
type can be one of [running, prepared, replication_slot, replica].
database/postgresql/vacuum/transaction_id_utilization
GA
(project)
Transaction ID utilization
GAUGE , DOUBLE , 1
alloydb.googleapis.com/Instance
The current percentage of transaction ID space consumed by the AlloyDB instance. It records the number of unvacuumed transactions as a percentage of the 2-billion maximum. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
database/postgresql/written_tuples_count_for_top_databases
GA
(project)
Number of tuples written
DELTA , INT64 , 1
alloydb.googleapis.com/Database
The total number of rows written(inserted,updated,deleted) per db for top 500 dbs as a result of the queries in the instance. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
instance/cpu/average_utilization
GA
(project)
Mean CPU utilization
GAUGE , DOUBLE , 10^2.%
alloydb.googleapis.com/Instance
Mean CPU utilization across all currently serving nodes of the instance from 0 to 100. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
instance/cpu/maximum_utilization
GA
(project)
Maximum CPU utilization
GAUGE , DOUBLE , 10^2.%
alloydb.googleapis.com/Instance
Maximum CPU utilization across all currently serving nodes of the instance from 0 to 100. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
instance/cpu/vcpus
GA
(project)
vCPUs allocated per node
GAUGE , INT64 , 1
alloydb.googleapis.com/Instance
The number of vCPUs allocated to each node in the instance. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
instance/memory/min_available_memory
GA
(project)
Minimum available memory
GAUGE , INT64 , By
alloydb.googleapis.com/Instance
The minimum available memory across all currently serving nodes of the instance. The available memory is an estimate of memory in bytes available for allocation on the VM including memory that is currently used, but can be potentially freed. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
instance/postgres/abort_count
GA
(project)
Instance abort count
DELTA , INT64 , 1
alloydb.googleapis.com/Instance
The number of transactions that were rolled back across all serving nodes of the instance. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
instance/postgres/average_connections
GA
(project)
Mean connections per node
GAUGE , DOUBLE , 1
alloydb.googleapis.com/Instance
The mean number of active and idle connections to AlloyDB across serving nodes of the instance. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
instance/postgres/commit_count
GA
(project)
Instance commit count
DELTA , INT64 , 1
alloydb.googleapis.com/Instance
The number of committed transactions across all serving nodes of the instance. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
instance/postgres/connections_limit
GA
(project)
Limit on connections per node
GAUGE , INT64 , 1
alloydb.googleapis.com/Instance
The current limit on the number of connections per node of the AlloyDB instance. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
instance/postgres/instances
GA
(project)
Number and status of nodes
GAUGE , INT64 , 1
alloydb.googleapis.com/Instance
The number of nodes in the instance, along with their status, which can be either up or down. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
status :
The status of nodes in the instance, which can be one of [up, down].
instance/postgres/replication/maximum_lag
GA
(project)
Maximum replication lag
GAUGE , INT64 , ms
alloydb.googleapis.com/Instance
The maximum replication time lag calculated across all serving read replicas of the instance. The replication time lag is derived from the replay_lag value. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
replica_instance_id :
The ID of the replica instance.
instance/postgres/replication/maximum_secondary_lag
GA
(project)
Maximum secondary cluster replication lag
GAUGE , INT64 , ms
alloydb.googleapis.com/Instance
The maximum replication time lag calculated from primary to secondary cluster. The replication time lag is derived from the replay_lag value. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
application_name :
Application name.
client_addr :
Client address.
secondary_project :
The project of the secondary cluster.
secondary_location :
The location of the secondary cluster.
secondary_cluster_id :
The ID of the secondary cluster.
secondary_instance_id :
The ID of the secondary instance.
instance/postgres/replication/network_lag
BETA
(project)
Network lag
GAUGE , INT64 , ms
alloydb.googleapis.com/Instance
Time elapsed between flushing recent WAL locally and receiving notification that this standby server has written and flushed it (but not yet applied it). Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
client_addr :
The IP address of the database client.
application_name :
The name of the database client application.
secondary_project :
Project of the secondary.
secondary_location :
Location of the secondary.
secondary_cluster_id :
Cluster ID of the secondary.
secondary_instance_id :
Instance ID of the secondary.
instance/postgres/replication/replicas
GA
(project)
AlloyDB replica count
GAUGE , INT64 , 1
alloydb.googleapis.com/Instance
The number of read replicas connected to the primary instance. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
state :
State of the replication, one of ["startup" - WAL sender is starting up; "catchup" - Connected standby of WAL sender is catching up with the primary; "streaming" - WAL sender is streaming changes after its connected standby server has caught up with the primary; "backup" - WAL sender is sending a backup; "stopping" - WAL sender is stopping].
replica_instance_id :
The ID of the replica instance.
instance/postgres/total_connections
GA
(project)
Total connections per instance
GAUGE , INT64 , 1
alloydb.googleapis.com/Instance
The number of active and idle connections to the AlloyDB instance across serving nodes of the instance. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
instance/postgres/transaction_count
GA
(project)
Instance transaction count
DELTA , INT64 , 1
alloydb.googleapis.com/Instance
The number of committed and rolled back transactions across all serving nodes of the instance. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
instance/postgres/ultrafastcache_hitrate
GA
(project)
Ultra Fast Cache hit rate per instance
GAUGE , DOUBLE , 1
alloydb.googleapis.com/Instance
Rate of hits in the Ultra Fast Cache for an instance. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
instance/postgresql/backends_by_state
GA
(project)
Number of connections to the instance per connection state
GAUGE , INT64 , 1
alloydb.googleapis.com/Instance
The current number of connections to the instance grouped by the state: idle, active, idle_in_transaction, idle_in_transaction_aborted, disabled, and fastpath_function_call. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
state :
State of the connection, one of [idle, active, idle_in_transaction, idle_in_transaction_aborted, disabled, fastpath_function_call].
instance/postgresql/backends_for_top_applications
GA
(project)
Number of connections to the instance per application
GAUGE , INT64 , 1
alloydb.googleapis.com/Instance
The current number of connections to the AlloyDB instance, grouped by applications for top 500 applications. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
application_name :
Name of the application connected to the instance.
instance/postgresql/blks_hit
GA
(project)
Blocks hit
DELTA , INT64 , 1
alloydb.googleapis.com/Instance
Number of times Postgres found the requested block in the buffer cache. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
instance/postgresql/blks_read
GA
(project)
Blocks miss
DELTA , INT64 , 1
alloydb.googleapis.com/Instance
Number of blocks read by Postgres that were not in the buffer cache. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
instance/postgresql/deadlock_count
GA
(project)
Number of deadlocks
DELTA , INT64 , 1
alloydb.googleapis.com/Instance
Number of deadlocks detected in the instance. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
instance/postgresql/deleted_tuples_count
GA
(project)
Number of tuples deleted
DELTA , INT64 , 1
alloydb.googleapis.com/Instance
Number of rows deleted while processing the queries in the instance since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
instance/postgresql/fetched_tuples_count
GA
(project)
Number of tuples fetched
DELTA , INT64 , 1
alloydb.googleapis.com/Instance
Number of rows fetched while processing the queries in the instance since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
instance/postgresql/inserted_tuples_count
GA
(project)
Number of tuples inserted
DELTA , INT64 , 1
alloydb.googleapis.com/Instance
Number of rows inserted while processing the queries in the instance since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
instance/postgresql/new_connections_count
GA
(project)
Number of new connections added to the instance
DELTA , INT64 , 1
alloydb.googleapis.com/Instance
The number of new connections added to the instance. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
instance/postgresql/returned_tuples_count
GA
(project)
Number of tuples scanned
DELTA , INT64 , 1
alloydb.googleapis.com/Instance
Number of rows scanned while processing the queries in the instance since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
instance/postgresql/temp_bytes_written_count
GA
(project)
Bytes written to temporary files
DELTA , INT64 , By
alloydb.googleapis.com/Instance
The total amount of data(in bytes) written to temporary files by the queries while performing internal algorithms like join, sort etc. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
instance/postgresql/temp_files_written_count
GA
(project)
Temporary files used for writing data
DELTA , INT64 , 1
alloydb.googleapis.com/Instance
The number of temporary files used for writing data in the instance while performing internal algorithms like join, sort etc. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
instance/postgresql/updated_tuples_count
GA
(project)
Number of tuples updated
DELTA , INT64 , 1
alloydb.googleapis.com/Instance
Number of rows updated while processing the queries in the instance since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
instance/postgresql/version
BETA
(project)
The version of the Postgres database.
GAUGE , STRING ,
alloydb.googleapis.com/Instance
The version of the Postgres database (e.g. POSTGRES_14, POSTGRES_15 etc).
instance/postgresql/wait_count
GA
(project)
Wait count
DELTA , INT64 , 1
alloydb.googleapis.com/Instance
Total number of times processes waited for each wait event in the instance. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
wait_event_type :
Type of the wait event.
wait_event_name :
Name of the wait event.
instance/postgresql/wait_time
GA
(project)
Wait time
DELTA , DOUBLE , us
alloydb.googleapis.com/Instance
Total elapsed wait time for each wait event in the instance. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
wait_event_type :
Type of the wait event.
wait_event_name :
Name of the wait event.
instance/postgresql/written_tuples_count
GA
(project)
Number of tuples written
DELTA , INT64 , 1
alloydb.googleapis.com/Instance
Number of rows written while processing the queries in the instance since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
node/cpu/usage_time
BETA
(project)
Node CPU usage
GAUGE , DOUBLE , 10^2.%
alloydb.googleapis.com/InstanceNode
Rate of CPU utilization in the node. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
node/database/postgresql/backends_for_top_databases
BETA
(project)
Number of connections to the node for each database
GAUGE , INT64 , 1
alloydb.googleapis.com/NodeDatabase
The current number of connections to the node for each database in the top 500 databases. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
node/database/postgresql/blks_hit_for_top_databases
BETA
(project)
Blocks hit for each database
DELTA , INT64 , 1
alloydb.googleapis.com/NodeDatabase
The number of times Postgres found the requested block in the buffer cache for each database in the top 500 databases. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
node/database/postgresql/blks_read_for_top_databases
BETA
(project)
Blocks miss for each database
DELTA , INT64 , 1
alloydb.googleapis.com/NodeDatabase
The number of blocks read by Postgres that were not in the buffer cache for each database in the top 500 databases. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
node/database/postgresql/committed_transactions_for_top_databases
BETA
(project)
Number of committed transactions for each database
DELTA , INT64 , 1
alloydb.googleapis.com/NodeDatabase
The total number of transactions committed for each database in the top 500 databases. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
node/database/postgresql/deadlock_count_for_top_databases
BETA
(project)
Number of deadlocks for each database
DELTA , INT64 , 1
alloydb.googleapis.com/NodeDatabase
The total number of deadlocks detected in the node for each database in the top 500 databases. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
node/database/postgresql/fetched_tuples_count_for_top_databases
BETA
(project)
Number of rows fetched for each database
DELTA , INT64 , 1
alloydb.googleapis.com/NodeDatabase
The total number of rows fetched for database in the top 500 databases as a result of the queries in the node. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
node/database/postgresql/insights/aggregate/execution_time
BETA
(project)
Execution time
DELTA , INT64 , us{CPU}
alloydb.googleapis.com/NodeDatabase
The accumulated query execution time for each database since the last sample. This is the sum of CPU time, IO wait time, lock wait time, process context switch, and scheduling for all the processes involved in the query execution. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
user :
The user of the database.
client_addr :
The IP address of the database client.
node/database/postgresql/insights/aggregate/io_time
BETA
(project)
IO time
DELTA , INT64 , us
alloydb.googleapis.com/NodeDatabase
The accumulated IO time since the last sample for each database in the top 500 databases. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
user :
The user of the database.
client_addr :
The IP address of the database client.
io_type :
The IO type (read/write).
node/database/postgresql/insights/aggregate/latencies
BETA
(project)
Latency
DELTA , DISTRIBUTION , us
alloydb.googleapis.com/NodeDatabase
Query latency distribution. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
user :
The user of the database.
client_addr :
The IP address of the database client.
node/database/postgresql/new_connections_for_top_databases
BETA
(project)
Number of connections added for each database
DELTA , INT64 , 1
alloydb.googleapis.com/NodeDatabase
The total number of new connections added for each database in the top 500 databases. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
node/database/postgresql/returned_tuples_count_for_top_databases
BETA
(project)
Number of rows scanned for each database
DELTA , INT64 , 1
alloydb.googleapis.com/NodeDatabase
The total number of rows scanned for each database in the top 500 databases while processing the queries in the node. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
node/database/postgresql/rolledback_transactions_for_top_databases
BETA
(project)
Number of rolled back transactions for each database
DELTA , INT64 , 1
alloydb.googleapis.com/NodeDatabase
The total number of transactions rolled back for each database in the top 500 databases. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
node/database/postgresql/temp_bytes_written_for_top_databases
BETA
(project)
Bytes written to temporary files for each database
DELTA , INT64 , By
alloydb.googleapis.com/NodeDatabase
The total amount of data (in bytes) written to temporary files by the queries for each database in the top 500 databases. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
node/database/postgresql/temp_files_written_for_top_databases
BETA
(project)
Temporary files used for writing data for each database
DELTA , INT64 , 1
alloydb.googleapis.com/NodeDatabase
The number of temporary files used for writing data for each database in the top 500 databases while performing internal algorithms such as join, sort, and so on. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
node/memory/available_memory
BETA
(project)
Available memory
GAUGE , INT64 , By
alloydb.googleapis.com/InstanceNode
An estimate of memory in bytes available for allocation on the VM including memory that is currently used, but can be potentially freed. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
node/network/received_bytes_count
BETA
(project)
Received bytes
DELTA , INT64 , By
alloydb.googleapis.com/InstanceNode
Received bytes over the network, since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
node/network/sent_bytes_count
BETA
(project)
Sent bytes
DELTA , INT64 , By
alloydb.googleapis.com/InstanceNode
Sent bytes over the network, since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
node/postgres/backends
GA
(project)
Total connections per node
GAUGE , INT64 , 1
alloydb.googleapis.com/InstanceNode
The total number of connections across all databases for this node. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
node/postgres/backends_by_state
GA
(project)
Number of connections to the node per connection state
GAUGE , INT64 , 1
alloydb.googleapis.com/InstanceNode
The current number of connections to the node grouped by the state: idle, active, idle_in_transaction, idle_in_transaction_aborted, disabled, and fastpath_function_call. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
state :
State of the connection, one of [idle, active, idle_in_transaction, idle_in_transaction_aborted, disabled, fastpath_function_call].
node/postgres/backends_for_top_applications
BETA
(project)
Number of connections to the node per application
GAUGE , INT64 , 1
alloydb.googleapis.com/InstanceNode
The current number of connections to the AlloyDB node, grouped by applications for top 500 applications. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
application_name :
Name of the application connected to the node.
node/postgres/blks_hit
BETA
(project)
Blocks hit
DELTA , INT64 , 1
alloydb.googleapis.com/InstanceNode
Number of times Postgres found the requested block in the buffer cache. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
node/postgres/blks_read
BETA
(project)
Blocks miss
DELTA , INT64 , 1
alloydb.googleapis.com/InstanceNode
Number of blocks read by Postgres that were not in the buffer cache. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
node/postgres/deadlock_count
BETA
(project)
Number of deadlocks
DELTA , INT64 , 1
alloydb.googleapis.com/InstanceNode
Number of deadlocks detected in the node. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
node/postgres/deleted_tuples_count
BETA
(project)
Number of tuples deleted
DELTA , INT64 , 1
alloydb.googleapis.com/InstanceNode
Number of rows deleted while processing the queries in the node since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
node/postgres/fetched_tuples_count
BETA
(project)
Number of tuples fetched
DELTA , INT64 , 1
alloydb.googleapis.com/InstanceNode
Number of rows fetched while processing the queries in the node since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
node/postgres/inserted_tuples_count
BETA
(project)
Number of tuples inserted
DELTA , INT64 , 1
alloydb.googleapis.com/InstanceNode
Number of rows inserted while processing the queries in the node since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
node/postgres/new_connections_count
BETA
(project)
Number of new connections added to the node
DELTA , INT64 , 1
alloydb.googleapis.com/InstanceNode
The number of new connections added to the node. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
node/postgres/replay_lag
GA
(project)
Node replication lag
GAUGE , INT64 , ms
alloydb.googleapis.com/InstanceNode
The lag in milliseconds for the individual node, comes from replay_lag in pg_stat_replication. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
node/postgres/returned_tuples_count
BETA
(project)
Number of tuples scanned
DELTA , INT64 , 1
alloydb.googleapis.com/InstanceNode
Number of rows scanned while processing the queries in the node since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
node/postgres/temp_bytes_written_count
BETA
(project)
Bytes written to temporary files
DELTA , INT64 , By
alloydb.googleapis.com/InstanceNode
The total amount of data (in bytes) written to temporary files by the queries while performing internal algorithms like join, sort etc. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
node/postgres/temp_files_written_count
BETA
(project)
Temporary files used for writing data
DELTA , INT64 , 1
alloydb.googleapis.com/InstanceNode
The number of temporary files used for writing data in the node while performing internal algorithms like join, sort etc. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
node/postgres/transaction_count
BETA
(project)
Node transaction count
DELTA , INT64 , 1
alloydb.googleapis.com/InstanceNode
The number of committed and rolled back transactions in the node since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
node/postgres/ultrafastcache_hitrate
GA
(project)
Ultra Fast Cache hit rate per node
GAUGE , DOUBLE , 1
alloydb.googleapis.com/InstanceNode
Rate of hits in the Ultra Fast Cache for a node. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
node/postgres/updated_tuples_count
BETA
(project)
Number of tuples updated
DELTA , INT64 , 1
alloydb.googleapis.com/InstanceNode
Number of rows updated while processing the queries in the node since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
node/postgres/uptime
BETA
(project)
Node database availability
GAUGE , DOUBLE , 1
alloydb.googleapis.com/InstanceNode
Rate of database availability in the node. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
node/postgres/wait_count
GA
(project)
Node Wait count
DELTA , INT64 , 1
alloydb.googleapis.com/InstanceNode
Total number of times processes waited for each wait event in the node. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
wait_event_type :
Type of the wait event.
wait_event_name :
Name of the wait event.
node/postgres/wait_time
GA
(project)
Node Wait time
DELTA , DOUBLE , us
alloydb.googleapis.com/InstanceNode
Total elapsed wait time for each wait event in the node. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
wait_event_type :
Type of the wait event.
wait_event_name :
Name of the wait event.
node/postgres/written_tuples_count
BETA
(project)
Number of tuples written
DELTA , INT64 , 1
alloydb.googleapis.com/InstanceNode
Number of rows written while processing the queries in the node since the last sample. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
quota/storage_usage_per_cluster/exceeded
ALPHA
(project)
Storage usage per cluster. quota exceeded error
DELTA , INT64 , 1
alloydb.googleapis.com/Location
Number of attempts to exceed the limit on quota metric alloydb.googleapis.com/storage_usage_per_cluster. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
cluster :
The AlloyDB cluster.
quota/storage_usage_per_cluster/limit
ALPHA
(project)
Storage usage per cluster. quota limit
GAUGE , INT64 , 1
alloydb.googleapis.com/Location
Current limit on quota metric alloydb.googleapis.com/storage_usage_per_cluster. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
cluster :
The AlloyDB cluster.
quota/storage_usage_per_cluster/usage
ALPHA
(project)
Storage usage per cluster. quota usage
GAUGE , INT64 , 1
alloydb.googleapis.com/Location
Current usage on quota metric alloydb.googleapis.com/storage_usage_per_cluster. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
cluster :
The AlloyDB cluster.
apigateway
Metrics from API Gateway .
Launch stages of these metrics:
BETA
The "metric type" strings in this table must be prefixed
with apigateway.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
proxy/request_count
BETA
(project)
Request Count
DELTA , INT64 , 1
apigateway.googleapis.com/Gateway
Number of requests served by API gateway. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
response_code_class :
HTTP response code class (1xx, 2xx, 3xx, 4xx, 5xx).
api_config :
The name of API Config resource hosted by the Gateway.
apigee
Metrics from Apigee .
Launch stages of these metrics:
ALPHA
BETA
GA
The "metric type" strings in this table must be prefixed
with apigee.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
apihub/security/score
GA
(project)
Security score
GAUGE , INT64 , 1
apigee.googleapis.com/APIHubDeployment
Current security score of an API Hub deployment based on an API Hub Security Profile. Sampled every 300 seconds. After sampling, data is not visible for up to 120 seconds.
security_profile_id :
The ID of the API Hub Security Profile used to calculate the score.
cassandra/clientrequest_latency
BETA
(project)
Apigee Cassandra client request latency
GAUGE , DOUBLE , 1
k8s_container
Average read request latency in the 75th percentile range in microseconds for Apigee Cassandra. Sampled every 60 seconds.
scope :
Scope of the request.
unit :
Unit of the metric.
cassandra/compaction_pendingtasks
BETA
(project)
Apigee Cassandra pending compaction tasks
GAUGE , INT64 , 1
k8s_container
Number of pending compaction tasks for Apigee Cassandra. Sampled every 60 seconds.
unit :
unit of the metric.
cassandra/jvm_memory_bytes_committed
BETA
(project)
Apigee Cassandra bytes committed per area
GAUGE , DOUBLE , By
k8s_container
Number of bytes committed for Apigee Cassandra JVM heap. Sampled every 60 seconds.
area :
Area of the memory such as heap or non-heap.
cassandra/jvm_memory_bytes_init
BETA
(project)
Apigee Cassandra initial memory bytes
GAUGE , DOUBLE , By
k8s_container
Initial memory usage in bytes for Apigee Cassandra JVM heap. Sampled every 60 seconds.
area :
Area of the memory such as heap or non-heap.
cassandra/jvm_memory_bytes_max
BETA
(project)
Apigee Cassandra max bytes of memory
GAUGE , DOUBLE , By
k8s_container
Maximum memory usage in bytes for Apigee Cassandra JVM heap. Sampled every 60 seconds.
area :
Area of the memory such as heap or non-heap.
cassandra/jvm_memory_bytes_used
BETA
(project)
Apigee Cassandra used JVM memory bytes
GAUGE , DOUBLE , By
k8s_container
Memory usage in bytes for Apigee Cassandra JVM heap. Sampled every 60 seconds.
area :
Area of the memory such as heap or non-heap.
cassandra/jvm_memory_pool_bytes_committed
BETA
(project)
Apigee Cassandra bytes committed per memory pool
GAUGE , DOUBLE , By
k8s_container
Memory usage in bytes committed per Apigee Cassandra JVM pool. Sampled every 60 seconds.
pool :
Name of the cassandra memory pool.
cassandra/jvm_memory_pool_bytes_init
BETA
(project)
Apigee Cassandra initial bytes of JVM memory pool
GAUGE , DOUBLE , By
k8s_container
Initial memory usage in bytes for Apigee Cassandra JVM pool. Sampled every 60 seconds.
pool :
Name of the cassandra memory pool.
cassandra/jvm_memory_pool_bytes_max
BETA
(project)
Apigee Cassandra JVM memory pool bytes max
GAUGE , DOUBLE , By
k8s_container
Maximum memory usage in bytes for Apigee Cassandra JVM pool. Sampled every 60 seconds.
pool :
Name of the cassandra memory pool.
cassandra/jvm_memory_pool_bytes_used
BETA
(project)
Apigee Cassandra bytes per memory pool
GAUGE , DOUBLE , By
k8s_container
Memory usage in bytes per Apigee Cassandra JVM pool. Sampled every 60 seconds.
pool :
Name of the cassandra memory pool.
cassandra/process_cpu_seconds_total
BETA
(project)
Apigee Cassandra user and system CPU in seconds
CUMULATIVE , DOUBLE , s
k8s_container
User and system CPU time spent in seconds for Apigee Cassandra. Sampled every 60 seconds.
cassandra/process_max_fds
BETA
(project)
Apigee Cassandra process max file descriptors
GAUGE , INT64 , 1
k8s_container
Maximum number of open file descriptors for Apigee Cassandra. Sampled every 60 seconds.
cassandra/process_open_fds
BETA
(project)
Apigee Cassandra process open file descriptors
GAUGE , INT64 , 1
k8s_container
Number of open file descriptors for Apigee Cassandra. Sampled every 60 seconds.
cassandra/tablerequests_latency
ALPHA
(project)
Apigee Cassandra table level requests latency
GAUGE , DOUBLE , us
k8s_container
Read and Write Request latency for all the tablesin Apigee Cassandra. Sampled every 60 seconds.
keyspace :
Keyspace name of the request.
table :
Table name of the request.
scope :
Scope of the request.
percentile :
Type of latency.
cassandra/tablerequests_rate
ALPHA
(project)
Apigee Cassandra table level requests rate
GAUGE , DOUBLE , 1/s
k8s_container
Read and Write Request rate for all the tablesin Apigee Cassandra. Sampled every 60 seconds.
keyspace :
Keyspace name of the request.
table :
Table name of the request.
scope :
Scope of the request.
connectagent/completed_rpcs_count
ALPHA
(project)
Apigee Connect Agent completed RPCs count
CUMULATIVE , INT64 , 1
k8s_container
Count of RPCs completed by Apigee Connect Agent. Sampled every 60 seconds.
method :
GRPC client method.
status :
GRPC client Status.
connectagent/dropped_requests
ALPHA
(project)
Apigee Connect Agent dropped requests
CUMULATIVE , DISTRIBUTION , 1
k8s_container
Distribution of dropped requests by Apigee Connect Agent per RPC. Sampled every 60 seconds.
method :
GRPC client method.
connectagent/dropped_responses
ALPHA
(project)
Apigee Connect Agent dropped responses
CUMULATIVE , DISTRIBUTION , 1
k8s_container
Distribution of dropped responses by Apigee Connect Agent per RPC. Sampled every 60 seconds.
method :
GRPC client method.
connectagent/received_bytes
ALPHA
(project)
Apigee Connect Agent received bytes
CUMULATIVE , DISTRIBUTION , By
k8s_container
Distribution of bytes received by Apigee Connect Agent per RPC. Sampled every 60 seconds.
method :
GRPC client method.
connectagent/received_messages
ALPHA
(project)
Apigee Connect Agent received messages
CUMULATIVE , DISTRIBUTION , 1
k8s_container
Distribution of messages received by Apigee Connect Agent per RPC. Sampled every 60 seconds.
method :
GRPC client method.
connectagent/sent_bytes
ALPHA
(project)
Apigee Connect Agent sent bytes
CUMULATIVE , DISTRIBUTION , By
k8s_container
Distribution of bytes sent by Apigee Connect Agent per RPC. Sampled every 60 seconds.
method :
GRPC client method.
connectagent/sent_messages
ALPHA
(project)
Apigee Connect Agent sent messages
CUMULATIVE , DISTRIBUTION , 1
k8s_container
Distribution of messages sent by Apigee Connect Agent per RPC. Sampled every 60 seconds.
method :
GRPC client method.
connectagent/stream_liveness_time
ALPHA
(project)
Apigee Connect Agent stream liveness time
CUMULATIVE , DISTRIBUTION , ms
k8s_container
Distribution of stream liveness time by Apigee Connect Agent per RPC. Sampled every 60 seconds.
method :
GRPC client method.
environment/active
BETA
(project)
Apigee active environment
GAUGE , INT64 , 1
apigee.googleapis.com/Environment
Number of current environments attached to Apigee instance. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
type :
Type of the Apigee environment.
analytics_state :
State of the Apigee Analytics add-on, one of [ENABLED, ENABLING, DISABLED, DISABLING].
api_security_state :
State of the Apigee API Security add-on, one of [ENABLED, ENABLING, DISABLED, DISABLING].
environment/anomaly_count
BETA
(project)
Apigee anomaly event count
CUMULATIVE , INT64 , 1
apigee.googleapis.com/Environment
Total number of anomalies observed in the Apigee environment. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
severity :
Anomaly severity (slight, moderate, severe).
direction :
Anomaly direction (jump/drop).
anomaly_type :
Type of Apigee anomaly (example: traffic_5xx).
environment/api_call_count
BETA
(project)
Apigee environment API call count
DELTA , INT64 , 1
apigee.googleapis.com/Environment
Number of API calls processed by an Apigee environment since the last sample was recorded. Sampled every 60 seconds.
proxy_deployment_type :
Type of the Apigee environment.
environment/instance/gateway_nodes
BETA
(project)
Apigee gateway nodes
GAUGE , INT64 , 1
apigee.googleapis.com/EnvironmentInstance
Number of Apigee gateway nodes in an environment attached to an instance. Sampled every 60 seconds.
node :
Apigee node.
envoy/redis/commands/evalsha/error
ALPHA
(project)
Apigee Redis Envoy evalsha error
CUMULATIVE , INT64 , 1
k8s_container
Total number of error evalsha commands to Apigee Redis Envoy. Sampled every 60 seconds.
envoy/redis/commands/evalsha/latency
ALPHA
(project)
Apigee Redis Envoy evalsha latency
CUMULATIVE , DISTRIBUTION , usec
k8s_container
Total amount of time in microseconds for execution of evalsha command. Sampled every 60 seconds.
envoy/redis/commands/evalsha/success
ALPHA
(project)
Apigee Redis Envoy evalsha success
CUMULATIVE , INT64 , 1
k8s_container
Total number of successful evalsha commands to Apigee Redis Envoy. Sampled every 60 seconds.
envoy/redis/commands/evalsha/total
ALPHA
(project)
Apigee Redis Envoy evalsha Total
CUMULATIVE , INT64 , 1
k8s_container
Total number of evalsha commands to Apigee Redis Envoy. Sampled every 60 seconds.
envoy/redis/commands/get/error
ALPHA
(project)
Apigee Redis Envoy get error
CUMULATIVE , INT64 , 1
k8s_container
Total number of error get commands to Apigee Redis Envoy. Sampled every 60 seconds.
envoy/redis/commands/get/latency
ALPHA
(project)
Apigee Redis Envoy get latency
CUMULATIVE , DISTRIBUTION , usec
k8s_container
Total amount of time in microseconds for execution of get command. Sampled every 60 seconds.
envoy/redis/commands/get/success
ALPHA
(project)
Apigee Redis Envoy get success
CUMULATIVE , INT64 , 1
k8s_container
Total number of successful get commands to Apigee Redis Envoy. Sampled every 60 seconds.
envoy/redis/commands/get/total
ALPHA
(project)
Apigee Redis Envoy get total
CUMULATIVE , INT64 , 1
k8s_container
Total number of get commands to Apigee Redis Envoy. Sampled every 60 seconds.
envoy/redis/downstream_cx_active
ALPHA
(project)
Apigee Redis Envoy active connections
GAUGE , INT64 , 1
k8s_container
Total number of current active connections to Apigee Redis Envoy. Sampled every 60 seconds.
envoy/redis/downstream_cx_total
ALPHA
(project)
Apigee Redis Envoy total connections
CUMULATIVE , INT64 , 1
k8s_container
Total number of connections to Apigee Redis Envoy. Sampled every 60 seconds.
envoy/redis/downstream_rq_active
ALPHA
(project)
Apigee Redis Envoy active requests
GAUGE , INT64 , 1
k8s_container
Total number of current active requests to Apigee Redis Envoy. Sampled every 60 seconds.
envoy/redis/downstream_rq_total
ALPHA
(project)
Apigee Redis Envoy total requests
CUMULATIVE , INT64 , 1
k8s_container
Total number of requests received by Apigee Redis Envoy. Sampled every 60 seconds.
mint/latencies_percentile
BETA
(project)
Percentile of Apigee Monetization response latencies
GAUGE , DOUBLE , ms
apigee.googleapis.com/ProxyV2
Percentile of all Monetized response latencies to a request. Sampled every 60 seconds.
mint_status :
Status of Monetized request.
percentile :
Apigee proxy response latencies Percentile.
time_window :
Apigee Proxy response latencies percentile aggregation time window.
mint/request_count
BETA
(project)
Apigee Monetization request cumulative count
CUMULATIVE , INT64 , 1
apigee.googleapis.com/ProxyV2
Total number of requests received by the Montized Api Proxy. Sampled every 60 seconds.
mint/response_count
BETA
(project)
Apigee Monetization response cumulative count
CUMULATIVE , INT64 , 1
apigee.googleapis.com/ProxyV2
Total number of complete Monetized requests processed by API proxy. Sampled every 60 seconds.
mint_status :
Status of Monetized request.
policyv2/latencies_percentile
BETA
(project)
Percentile of Apigee policy response latencies
GAUGE , DOUBLE , ms
apigee.googleapis.com/ProxyV2
Percentile of all API policy responseto a request. Sampled every 60 seconds.
policy_name :
Name of the policy.
percentile :
Apigee policy response latencies Percentile.
time_window :
Apigee policy response latencies percentile aggregation time window.
proxy/details
BETA
(project)
Apigee proxy details
GAUGE , INT64 , 1
apigee.googleapis.com/Proxy
Details relevant to the proxy that is deployed to an Apigee environment. Sampled every 60 seconds. After sampling, data is not visible for up to 181 seconds.
proxy_deployment_type :
Deployment type of the Apigee proxy.
proxy/latencies
BETA
(project)
Apigee proxy latencies
DELTA , DISTRIBUTION , ms
apigee.googleapis.com/Proxy
A distribution of the latency calculated from when the request was received by the Apigee proxy until the response sent from the Apigee proxy to the client. Time includes the Apigee proxy overhead and the target server time. Sampled every 60 seconds. After sampling, data is not visible for up to 181 seconds.
method :
HTTP method.
proxy/request_count
BETA
(project)
Apigee proxy request count
DELTA , INT64 , 1
apigee.googleapis.com/Proxy
Number of requests sent to the Apigee proxy since the last sample was recorded. Sampled every 60 seconds. After sampling, data is not visible for up to 181 seconds.
method :
HTTP method.
proxy/response_count
BETA
(project)
Apigee proxy response count
DELTA , INT64 , 1
apigee.googleapis.com/Proxy
Number of responses sent by the Apigee API proxy since the last sample was recorded. Sampled every 60 seconds. After sampling, data is not visible for up to 181 seconds.
method :
HTTP method.
response_code :
(INT64)
HTTP status code of the response.
fault_code :
Apigee fault code to help you diagnose issues.
fault_source :
Suspected cause of the fault, one of [apigee, target, policy].
apigee_fault :
(BOOL)
Indicates whether Apigee caused the fault.
proxyv2/details
BETA
(project)
Apigee proxy details
GAUGE , INT64 , 1
apigee.googleapis.com/ProxyV2
Apigee proxy details deployed to an Apigee environment. Sampled every 60 seconds.
proxy_deployment_type :
Deployment type of the Apigee proxy.
proxyv2/latencies_percentile
BETA
(project)
Percentile of Apigee proxy response latencies
GAUGE , DOUBLE , ms
apigee.googleapis.com/ProxyV2
Percentile of all API proxy responseto a request. Sampled every 60 seconds.
method :
HTTP method.
percentile :
Apigee proxy response latencies Percentile.
time_window :
Apigee Proxy response latencies percentile aggregation time window.
proxyv2/request_count
ALPHA
(project)
Apigee proxy request cumulative count
CUMULATIVE , INT64 , 1
apigee.googleapis.com/ProxyV2
Total number of requests received by the Apigee API proxy. Sampled every 60 seconds.
method :
HTTP method.
proxyv2/response_count
ALPHA
(project)
Apigee proxy response cumulative count
CUMULATIVE , INT64 , 1
apigee.googleapis.com/ProxyV2
Total number of responses sent by the Apigee API proxy. Sampled every 60 seconds.
method :
HTTP method.
response_code :
HTTP response code.
fault_code :
Apigee fault code that provides useful information to help you diagnose issues.
fault_source :
Information about the suspected cause of the fault, such as API proxy, target, or the Apigee infrastructure.
apigee_fault :
Boolean that is "true" if the fault is apigee caused and "false" otherwise.
security/detected_request_count
BETA
(project)
Apigee API Security detected request count
DELTA , INT64 , 1
apigee.googleapis.com/Environment
Number of API requests detected by Apigee Advanced API Security abuse detection, since the last sample. Sampled every 300 seconds. After sampling, data is not visible for up to 120 seconds.
proxy :
Apigee API proxy.
security/detected_request_count_by_rule
BETA
(project)
Apigee API Security detected request count by rule
DELTA , INT64 , 1
apigee.googleapis.com/SecurityDetectionRule
Number of API requests detected by Apigee Advanced API Security abuse detection and grouped by detection rule, since the last sample. Note: Sum of request count across detection_rule label does not produce total detected request count, instead to get the total number of detected requests use apigee.googleapis.com/security/detected_request_count. Sampled every 300 seconds. After sampling, data is not visible for up to 120 seconds.
proxy :
Apigee API proxy.
security/environment_score
BETA
(project)
Security score of Apigee environment
GAUGE , INT64 , 1
apigee.googleapis.com/SecurityProfileEnvironmentAssociation
Current security score of Apigee environment based on Advanced API Security assessment. This value is measured at least once every 3 hours. There might be a delay after measuring before the value becomes available in Cloud Monitoring. Once available, the value is repeated at each sampling interval until the next measurement. For this metric, the sampling period is a reporting period, not a measurement period. Sampled every 300 seconds. After sampling, data is not visible for up to 120 seconds.
security/incident_request_count
BETA
(project)
Apigee API Security incident request count
CUMULATIVE , INT64 , 1
apigee.googleapis.com/SecurityIncident
Total Number of API requests detected to be a part of an Apigee API Security incident. This value is measured once every hour. There might be a delay after measuring before the value becomes available in Cloud Monitoring. Once available, the value is repeated at each sampling interval throughout the hour. For this metric, the sampling period is a reporting period, not a measurement period. Sampled every 300 seconds. After sampling, data is not visible for up to 120 seconds.
proxy :
Apigee API proxy.
security/incident_request_count_by_rule
BETA
(project)
Apigee API Security incident request count by detection rule
CUMULATIVE , INT64 , 1
apigee.googleapis.com/SecurityIncident
Total number of API requests detected to be a part of an Apigee API Security incident grouped by detection rule. This value is measured once every hour. There might be a delay after measuring before the value becomes available in Cloud Monitoring. Once available, the value is repeated at each sampling interval throughout the hour. For this metric, the sampling period is a reporting period, not a measurement period. Note: Sum of request count across detection_rule label does not produce total request count for a security incident, instead to get the total number of requests in a security incident use apigee.googleapis.com/security/incident_request_count. Sampled every 300 seconds. After sampling, data is not visible for up to 120 seconds.
detection_rule :
Apigee API Security detection rule, such as "Flooder" or "Static Content Scraper".
security/proxy_score
BETA
(project)
Security score of Apigee API proxy
GAUGE , INT64 , 1
apigee.googleapis.com/SecurityProfileEnvironmentAssociation
Current security score of Apigee API proxy based on Advanced API Security proxy assessment. This value is measured at least once every 3 hours. There might be a delay after measuring before the value becomes available in Cloud Monitoring. Once available, the value is repeated at each sampling interval until the next measurement. For this metric, the sampling period is a reporting period, not a measurement period. Sampled every 300 seconds. After sampling, data is not visible for up to 120 seconds.
proxy :
Apigee API proxy.
security/request_count
BETA
(project)
Apigee API Security request count
DELTA , INT64 , 1
apigee.googleapis.com/Environment
Number of API requests processed by Apigee Advanced API Security, since the last sample. Sampled every 300 seconds. After sampling, data is not visible for up to 120 seconds.
proxy :
Apigee API proxy.
security/score
GA
(project)
Security score
GAUGE , INT64 , 1
apigee.googleapis.com/SecurityAssessmentResult
Current security score of a deployed resource based on an Apigee Risk Assessment V2 Security profile. Sampled every 300 seconds. After sampling, data is not visible for up to 120 seconds.
security/source_score
BETA
(project)
Security score of Apigee sources
GAUGE , INT64 , 1
apigee.googleapis.com/SecurityProfileEnvironmentAssociation
Current security score of Apigee environment based on Advanced API Security source assessment. This value is measured at least once every 3 hours. There might be a delay after measuring before the value becomes available in Cloud Monitoring. Once available, the value is repeated at each sampling interval until the next measurement. For this metric, the sampling period is a reporting period, not a measurement period. Sampled every 300 seconds. After sampling, data is not visible for up to 120 seconds.
security/target_score
BETA
(project)
Security score of Apigee target server
GAUGE , INT64 , 1
apigee.googleapis.com/SecurityProfileEnvironmentAssociation
Current security score of Apigee target server based on Advanced API Security target assessment. This value is measured at least once every 3 hours. There might be a delay after measuring before the value becomes available in Cloud Monitoring. Once available, the value is repeated at each sampling interval until the next measurement. For this metric, the sampling period is a reporting period, not a measurement period. Sampled every 300 seconds. After sampling, data is not visible for up to 120 seconds.
target_server :
Apigee target server.
server/fault_count
BETA
(project)
Apigee server fault count
CUMULATIVE , INT64 , 1
k8s_container
Total number of faults returned by the Apigee server application. For example, the apigee-runtime, apigee--synchronizer, or apigee-udca server application. Sampled every 60 seconds.
source :
Source of the fault.
server/latencies
BETA
(project)
Apigee server latencies
CUMULATIVE , DISTRIBUTION , ms
k8s_container
Total amount of time in milliseconds for the Apigee application server to process the requests and responses. For example, the apigee-runtime, apigee-synchronizer, or apigee-udca server application. Sampled every 60 seconds.
method :
HTTP method.
response_code :
HTTP response code.
type :
Type of service.
server/nio
BETA
(project)
Apigee server nio
GAUGE , INT64 , 1
k8s_container
Number of open sockets. Sampled every 60 seconds.
state :
State of the NIO threads.
server/num_threads
BETA
(project)
Apigee server thread count
GAUGE , INT64 , 1
k8s_container
Number of active non-daemon threads in the Apigee server. Sampled every 60 seconds.
server/request_count
BETA
(project)
Apigee server request count
CUMULATIVE , INT64 , 1
k8s_container
Total number of requests received by the Apigee server application. For example, the apigee-runtime, apigee-synchronizer, or apigee-udca server application. Sampled every 60 seconds.
method :
HTTP method.
type :
Type of service.
server/response_count
BETA
(project)
Apigee server response count
CUMULATIVE , INT64 , 1
k8s_container
Total number of responses sent by the Apigee server application. For example, the apigee-runtime, apigee-synchronizer, or apigee-udca server application. Sampled every 60 seconds.
method :
HTTP method.
response_code :
HTTP response code.
type :
Type of service.
target/latencies
BETA
(project)
Apigee target latencies
DELTA , DISTRIBUTION , ms
apigee.googleapis.com/Target
A distribution of the latency calculated from when the request was sent to the Apigee target until the response was received by the Apigee proxy. Time does not include the Apigee API proxy overhead. Sampled every 60 seconds. After sampling, data is not visible for up to 181 seconds.
type :
Type of target interaction, one of [target, service_callout, external_callout].
method :
HTTP method.
target/request_count
BETA
(project)
Apigee target request count
DELTA , INT64 , 1
apigee.googleapis.com/Target
Number of requests sent to the Apigee target since the last sample was recorded. Sampled every 60 seconds. After sampling, data is not visible for up to 181 seconds.
type :
Type of target interaction, one of [target, service_callout, external_callout].
method :
HTTP method.
target/response_count
BETA
(project)
Apigee target response count
DELTA , INT64 , 1
apigee.googleapis.com/Target
Number of responses received from the Apigee target since the last sample was recorded. Sampled every 60 seconds. After sampling, data is not visible for up to 181 seconds.
type :
Type of target interaction, one of [target, service_callout, external_callout].
method :
HTTP method.
response_code :
(INT64)
HTTP status code of the response.
targetv2/latencies_percentile
BETA
(project)
Percentile of Apigee proxy target response latencies
GAUGE , DOUBLE , ms
apigee.googleapis.com/ProxyV2
apigee.googleapis.com/TargetV2
Percentile of all API proxy target responseto a request. Sampled every 60 seconds.
method :
HTTP method.
percentile :
Apigee proxy target response latencies Percentile.
time_window :
Apigee Proxy target response latencies percentile aggregation time window.
targetv2/request_count
ALPHA
(project)
Apigee target request cumulative count
CUMULATIVE , INT64 , 1
apigee.googleapis.com/ProxyV2
apigee.googleapis.com/TargetV2
Total number of requests received by the Apigee API proxy target. Sampled every 60 seconds.
method :
HTTP method.
target_type :
Type of target such as service callout.
target_endpoint :
Target endpoint URL.
targetv2/response_count
ALPHA
(project)
Apigee target response cumulative count
CUMULATIVE , INT64 , 1
apigee.googleapis.com/ProxyV2
apigee.googleapis.com/TargetV2
Total number of responses sent by the Apigee API proxy target. Sampled every 60 seconds.
method :
HTTP method.
target_type :
Type of target such as service callout.
target_endpoint :
Target endpoint URL.
response_code :
HTTP response code.
udca/disk/used_bytes
BETA
(project)
Apigee UDCA disk used bytes
GAUGE , DOUBLE , By
k8s_container
Amount of bytes used by the data files on the data collection pod's disk. Sampled every 60 seconds.
dataset :
Type of data.
state :
State of the data file.
udca/server/local_file_count
BETA
(project)
Apigee UDCA server local file count
GAUGE , INT64 , 1
k8s_container
Number of files on disk in the data collection pod. Ideally, the value will be close to 0. A consistently high value indicates that files are not being uploaded or that the Apigee Universal Data Collection Agent (UDCA) server application is not able to upload them fast enough. This value is computed every 60 seconds and does not reflect the state of the Apigee UDCA server application in real time. Sampled every 60 seconds.
dataset :
Type of data.
state :
State of the data file.
udca/server/local_file_latest_ts
BETA
(project)
Apigee UDCA server timestamp difference between current time and latest file
GAUGE , INT64 , s
k8s_container
Apigee Universal Data Collection Agent (UDCA) server timestamp difference between current time and latest file. Sampled every 60 seconds.
dataset :
Type of data.
state :
State of the data file.
udca/server/local_file_oldest_ts
BETA
(project)
Apigee UDCA server timestamp difference between current time and oldest file
GAUGE , INT64 , s
k8s_container
Time that the oldest file in the dataset was created in seconds since epoch. If the Apigee Universal Data Collection Agent (UDCA) server application is up to date and there are no files waiting to be uploaded when this metric is computed, then this value will be 0. If this value increases, it indicates that old files are still on disk. The metric is computed every 60 seconds and does not reflect the state of the Apigee UDCA server application in real time. Sampled every 60 seconds.
dataset :
Type of data.
state :
State of the data file.
udca/server/pruned_file_count
BETA
(project)
Apigee UDCA pruned file count
CUMULATIVE , INT64 , 1
k8s_container
Total number of files that have been deleted because their Time To Life (TTL) was beyond a set threshold. The dataset can include API, trace, and others, and state can be UPLOADED, FAILED, or DISCARDED. Sampled every 60 seconds.
dataset :
Type of data.
state :
State of the data file.
udca/server/retry_cache_size
BETA
(project)
Apigee UDCA outstanding number of entries in retry cache
GAUGE , INT64 , 1
k8s_container
Number of files, by dataset, that the Apigee Universal Data Collection Agent (UDCA) server application is retrying to upload. After 3 retries per file, the UDCA moves the file to the /failed subdirectory and removes it from this cache. An increase in this value over time implies that the cache is not being cleared. Sampled every 60 seconds.
dataset :
Type of data.
udca/server/total_latencies
BETA
(project)
Apigee UDCA server total latencies
CUMULATIVE , DISTRIBUTION , s
k8s_container
Total amount of time in seconds for a data file to be created and uploaded successfully by the Apigee Universal Data Collection Agent (UDCA) server application. Buckets will be 100 ms, 250 ms, 500 ms, 1 s, 2 s, 4 s, 8 s, 16 s, 32 s, and 64 s. The metrics will display a histogram for total latency from file creation time to successful upload time. Sampled every 60 seconds.
dataset :
Type of data.
udca/server/upload_latencies
BETA
(project)
Apigee UDCA server upload latencies
CUMULATIVE , DISTRIBUTION , s
k8s_container
Total amount of time in seconds that the Apigee Universal Data Collection Agent (UDCA) server application required to upload a data file. Buckets will be 100 ms, 250 ms, 500 ms, 1 s, 2 s, 4 s, 8 s500 ms, 1 s, 2 s, 4 s, 8 s, 16 s, 32 s, and 64 s. The metrics will display a histogram for total latency from file creation time to successful upload time. Sampled every 60 seconds.
dataset :
Type of data.
udca/upstream/http_error_count
BETA
(project)
Apigee UDCA server HTTP error count
CUMULATIVE , INT64 , 1
k8s_container
Total number of HTTP errors encountered by the Apigee Universal Data Collection Agent (UDCA) server application. This metric is useful to help determine in which part of the UDCA external dependencies are failing and for what reason. These errors can arise for various services (such as getDataLocation, Cloud storage, token generator) and for various datasets (such as API and trace) with different response codes. Sampled every 60 seconds.
dataset :
Type of data.
service :
Upstream service name.
response_code :
HTTP response code.
udca/upstream/http_latencies
BETA
(project)
Apigee UDCA server HTTP latencies
CUMULATIVE , DISTRIBUTION , s
k8s_container
Total amount of time in seconds required for upstream services. Buckets will be 100 ms, 250 ms, 500 ms, 1 s, 2 s, 4 s, 8 s, 16 s, 32 s, and 64 s. The metrics will display a histogram for latency from upstream services. Sampled every 60 seconds.
dataset :
Type of data.
service :
Upstream service name.
udca/upstream/uploaded_file_count
BETA
(project)
Apigee UDCA uploaded file count
CUMULATIVE , INT64 , 1
k8s_container
Total number of files being uploaded to the Apigee Universal Data Collection Agent (UDCA) server application. Note that the event dataset value should keep growing, the API dataset value should keep growing if the organization and environment have constant traffic, and the trace dataset value should increase when you use the Apigee trace tools to debug or inspect your requests. Sampled every 60 seconds.
dataset :
Type of data.
udca/upstream/uploaded_file_sizes
BETA
(project)
Apigee UDCA uploaded file size distribution
CUMULATIVE , DISTRIBUTION , By
k8s_container
Total file size in bytes uploaded to the Apigee Universal Data Collection Agent (UDCA) server application. Buckets will be 1 KB, 10 KB, 100 KB, 1 MB, 10 MB, 100 MB, and 1 GB. The metrics will display a histogram for file size by dataset, organization, and environment. Sampled every 60 seconds.
dataset :
Type of data.
upstream/latencies
BETA
(project)
Apigee upstream latencies
CUMULATIVE , DISTRIBUTION , ms
k8s_container
Total amount of time in milliseconds incurred by the upstream Apigee server application. For apigee-synchronizer this metric indicates the latency from the control plane. Sampled every 60 seconds.
method :
HTTP method.
response_code :
HTTP response code.
type :
Type of service.
upstream/request_count
BETA
(project)
Apigee upstream request count
CUMULATIVE , INT64 , 1
k8s_container
Total number of requests sent by the Apigee server application to its upstream application. For example, for the apigee-synchronizer the control plane is upstream. Sampled every 60 seconds.
method :
HTTP method.
type :
Type of service.
upstream/response_count
BETA
(project)
Apigee upstream response count
CUMULATIVE , INT64 , 1
k8s_container
Total number of responses received by the Apigee server application from its upstream application. For example, for the apigee-synchronizer the control plane is upstream. Sampled every 60 seconds.
method :
HTTP method.
response_code :
HTTP response code.
type :
Type of service.
appengine
Metrics from App Engine . Note: If you use App Engine flexible environment in combination with Cloud Load Balancing, then certain metrics in the following table are reported as metrics from the loadbalancing table instead. For more information, see External Application Load Balancer logging and monitoring .
Launch stages of these metrics:
ALPHA
BETA
GA
The "metric type" strings in this table must be prefixed
with appengine.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
flex/autoscaler/capacity
BETA
(project)
Autoscaling Metrics Utilization Capacity
GAUGE , DOUBLE , 1
gae_app
Utilization capacity multiplied by number of serving VMs. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
flex/autoscaler/connections/current
BETA
(project)
Writing and reading connections
GAUGE , DOUBLE , 1
gce_instance
Number of current reading and writing connections per App Engine flexible environment instance. Intended to be used for autoscaling. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
service_id :
The service/module name.
state :
State of the connection (writing or reading).
version_id :
The version name.
instance_name :
The VM instance name.
flex/autoscaler/current_utilization
BETA
(project)
Autoscaling Metrics Current Utilization
GAUGE , DOUBLE , 1
gae_app
The sum of the utilization of a specified metric for all serving VMs. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
metric_type :
The target autoscaling metric type. For example, cpu.
flex/autoscaler/server/request_count
BETA
(project)
Request counts
DELTA , INT64 , 1
gce_instance
Request counts for an App Engine flexible environment instance.Intended to be used for autoscaling. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
service_id :
The service/module name.
version_id :
The version name.
instance_name :
The VM instance name.
flex/connections/current
GA
(project)
Connections
GAUGE , DOUBLE , 1
gae_app
Number of current active connections per App Engine flexible environment version. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
flex/cpu/reserved_cores
GA
(project)
Reserved cores
GAUGE , DOUBLE , 1
gae_app
Total number of CPU cores allocated to an App Engine flexible environment version. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
flex/cpu/utilization
GA
(project)
CPU utilization
GAUGE , DOUBLE , 10^2.%
gae_app
Fractional utilization of allocated CPU across an App Engine flexible environment version. Values are typically numbers between 0.0 and 1.0 (but some machine types allow bursting above 1.0). Charts display the values as a percentage between 0% and 100% (or more). Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
flex/disk/read_bytes_count
GA
(project)
Disk bytes read
DELTA , INT64 , By
gae_app
Delta count of bytes read from disk across an App Engine flexible environment version. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
flex/disk/write_bytes_count
GA
(project)
Disk bytes written
DELTA , INT64 , By
gae_app
Delta count of bytes written from disk across an App Engine flexible environment version. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
flex/instance/connections/current
GA
(project)
Connections
GAUGE , DOUBLE , 1
gae_instance
Number of current active connections per App Engine flexible environment instance. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
flex/instance/container/cpu/limit
ALPHA
(project)
Container CPU limit
GAUGE , DOUBLE , s{CPU}/s
gae_instance
CPU time limit (where applicable). Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
container_name :
Name of the container (or ID if name is not available).
flex/instance/container/cpu/usage_time
ALPHA
(project)
Container CPU usage
GAUGE , DOUBLE , s{CPU}
gae_instance
Per container CPU usage in CPU seconds. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
container_name :
Name of the container (or ID if name is not available).
flex/instance/container/memory/limit
ALPHA
(project)
Container memory limit
GAUGE , INT64 , By
gae_instance
Total memory the container is allowed to use. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
container_name :
Name of the container (or ID if name is not available).
flex/instance/container/memory/usage
ALPHA
(project)
Container memory usage
GAUGE , INT64 , By
gae_instance
Total memory the container is using. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
container_name :
Name of the container (or ID if name is not available).
flex/instance/container/network/received_bytes_count
ALPHA
(project)
Container network bytes received
DELTA , INT64 , By
gae_instance
Bytes received by container over all network interfaces. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
container_name :
Name of the container (or ID if name is not available).
flex/instance/container/network/sent_bytes_count
ALPHA
(project)
Container network bytes sent
DELTA , INT64 , By
gae_instance
Bytes sent by container over all network interfaces. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
container_name :
Name of the container (or ID if name is not available).
flex/instance/container/restart_count
ALPHA
(project)
Container restart count
DELTA , INT64 , 1
gae_instance
Number of times the container has been restarted. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
container_name :
Name of the container (or ID if name is not available).
flex/instance/container/uptime
ALPHA
(project)
Container uptime
GAUGE , INT64 , s
gae_instance
Time for which the container has been up. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
container_name :
Name of the container (or ID if name is not available).
flex/instance/cpu/usage_time
ALPHA
(project)
CPU Usage
DELTA , DOUBLE , s{CPU}
gae_instance
Delta vCPU usage for all vCPUs, in vCPU-seconds. This value is reported by the hypervisor for the VM. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
flex/instance/cpu/utilization
GA
(project)
CPU Utilization
GAUGE , DOUBLE , 10^2.%
gae_instance
Fractional CPU utilization for all cores on a single App Engine flexible instance. Values are typically numbers between 0.0 and 1.0 for a single core (but might exceed 1.0 in total). Charts display the values as a percentage between 0% and 100% (or more). Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
flex/instance/disk/io/read_bytes_count
ALPHA
(project)
Disk read bytes
DELTA , INT64 , By
gae_instance
Delta count of bytes read from disk. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
flex/instance/disk/io/write_bytes_count
ALPHA
(project)
Disk write bytes
DELTA , INT64 , By
gae_instance
Delta count of bytes written to disk. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
flex/instance/guest/disk/bytes_used
ALPHA
(project)
Disk usage
GAUGE , INT64 , By
gae_instance
Number of bytes used on disk for file systems. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
device_name :
The name of the disk device.
state :
Type of usage (free, used, reserved).
flex/instance/guest/memory/bytes_used
ALPHA
(project)
Memory usage
GAUGE , INT64 , By
gae_instance
Memory usage by each memory state, in Bytes. Summing values of all states yields the total memory on the machine. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
state :
One of the following: buffered, cached, free, slab, used. Buffered consists of temporary storage for raw disk blocks. Cached consists of the pagecache and tmpfs usage. Free consists of total free memory. Slab consists of memory used for caching in-kernel data structures. Used is calculated by subtracting the values for the other states from the total available memory.
flex/instance/healthcheck/liveness/request_count
ALPHA
(project)
Liveness check
DELTA , INT64 , 1
gae_instance
Number of liveness health-check requests for a Flex instance with status and error code. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
status :
Status of healthcheck request.
error_code :
Error code when status is 'fail'.
flex/instance/healthcheck/readiness/request_count
ALPHA
(project)
Readiness check
DELTA , INT64 , 1
gae_instance
Number of readiness health-check requests for a Flex instance with status and error code. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
status :
Status of healthcheck request.
error_code :
Error code when status is 'fail'.
flex/instance/jvm/gc/count
ALPHA
(project)
GC count
DELTA , INT64 , 1
gae_instance
The total number of garbage collections that have occurred. Sampled every 60 seconds. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
gc_name :
The name of the garbage collector involved.
flex/instance/jvm/gc/time
ALPHA
(project)
GC Time
DELTA , INT64 , ms
gae_instance
The accumulated garbage collection elapsed time in milliseconds. Sampled every 60 seconds. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
gc_name :
The name of the garbage collector involved.
flex/instance/jvm/memory/usage
ALPHA
(project)
Memory usage
GAUGE , DOUBLE , By
gae_instance
The memory usage. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
memory_type :
The type of the memory.
usage_kind :
The kind of memory usage.
flex/instance/jvm/os/cpu_time
ALPHA
(project)
CPU time
DELTA , INT64 , ns
gae_instance
The CPU time used by the process on which the Java virtual machine is running. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
flex/instance/jvm/thread/num_live
ALPHA
(project)
Threads
GAUGE , DOUBLE , 1
gae_instance
The current number of live threads. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
flex/instance/jvm/thread/peak
ALPHA
(project)
Max threads
GAUGE , DOUBLE , 1
gae_instance
The peak number of live threads. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
flex/instance/jvm/uptime
ALPHA
(project)
Uptime
DELTA , INT64 , ms
gae_instance
The uptime of the Java virtual machine. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
flex/instance/log_entry_count
ALPHA
(project)
Logging Agent Log Entry Count
DELTA , INT64 , 1
gae_instance
Count of log entries written by the Logging agent. Sampled every 60 seconds. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
response_code :
(INT64)
Numeric response code from both the gRPC and HTTP error spaces.
flex/instance/log_entry_retry_count
ALPHA
(project)
Logging Agent Retried Log Entry Writes Count
DELTA , INT64 , 1
gae_instance
Count of log-entry writes that were retried by the Logging agent. Sampled every 60 seconds. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
response_code :
(INT64)
Numeric response code from both the gRPC and HTTP error spaces.
flex/instance/network/received_bytes_count
GA
(project)
Network bytes received
DELTA , INT64 , By
gae_instance
Delta count of incoming network bytes in an App Engine flexible instance. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
flex/instance/network/sent_bytes_count
GA
(project)
Network bytes sent
DELTA , INT64 , By
gae_instance
Delta count of outgoing network bytes in an App Engine flexible instance. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
flex/instance/nginx/connections/accepted_count
ALPHA
(project)
Accepted connections
DELTA , INT64 , 1
gae_instance
Total connections accepted. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
flex/instance/nginx/connections/current
ALPHA
(project)
Active connections
GAUGE , DOUBLE , 1
gae_instance
The number of connections currently attached to Nginx. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
state :
The Nginx connection state.
flex/instance/nginx/connections/handled_count
ALPHA
(project)
Handled connections
DELTA , INT64 , 1
gae_instance
Total connections handled. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
flex/instance/uptime
ALPHA
(project)
Uptime
GAUGE , DOUBLE , s
gae_instance
How long the VM has been running, in seconds. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
flex/instance/web_socket/closed_connections_count
BETA
(project)
Websocket connections closed
DELTA , INT64 , 1
gae_instance
Count of websocket connections closed. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
flex/instance/web_socket/durations
BETA
(project)
Websocket duration
DELTA , DISTRIBUTION , s
gae_instance
The durations of websocket connections measured at nginx. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
flex/instance/ws/avg_duration
GA
(project)
Websocket average duration
GAUGE , DOUBLE , s
gae_instance
Average of websocket requests for a given App Engine Flexible instance. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
flex/network/received_bytes_count
GA
(project)
Network bytes received.
DELTA , INT64 , By
gae_app
Delta count of incoming network bytes across all VMs in an App Engine flexible environment version. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
flex/network/sent_bytes_count
GA
(project)
Network bytes sent.
DELTA , INT64 , By
gae_app
Delta count of outgoing network bytes across all VMs in an App Engine flexible environment version. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
http/server/dos_intercept_count
GA
(project)
Interception count
DELTA , INT64 , 1
gae_app
Delta count of interceptions performed to prevent DoS attacks. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
http/server/quota_denial_count
GA
(project)
Quota denial count
DELTA , INT64 , 1
gae_app
Delta count of requests that failed due to the app being over quota. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
http/server/response_count
GA
(project)
Response count
DELTA , INT64 , 1
gae_app
Delta HTTP response count. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
loading :
(BOOL)
Indicates whether the request was loading.
response_code :
(INT64)
HTTP status code for the request.
http/server/response_latencies
GA
(project)
Response latency
DELTA , DISTRIBUTION , ms
gae_app
HTTP response latency. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
loading :
(BOOL)
Indicates whether the request was loading.
response_code :
(INT64)
HTTP status code for the request.
http/server/response_style_count
GA
(project)
Response count by style
DELTA , INT64 , 1
gae_app
Delta counts on the HTTP serve style. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
dynamic :
(BOOL)
Indicates if the request was a static or dynamic request.
cached :
(BOOL)
Indicates if the response was cached.
infrastructure/cloudsql/connection_latencies
GA
(project)
CloudSQL connection latency
DELTA , DISTRIBUTION , us
gae_app
Distribution of latency in microseconds for connections originating from App Engine to CloudSQL. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
infrastructure/cloudsql/connection_refused_count
GA
(project)
CloudSQL connection refused count
DELTA , INT64 , 1
gae_app
Total number of connections refused originating from App Engine to CloudSQL. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
infrastructure/cloudsql/connection_request_count
GA
(project)
CloudSQL connection request count
DELTA , INT64 , 1
gae_app
Total number of connection requests originating from App Engine to CloudSQL. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
infrastructure/cloudsql/received_bytes_count
GA
(project)
CloudSQL bytes received
DELTA , INT64 , By
gae_app
Number of bytes received by App Engine from Cloud SQL over the network. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
infrastructure/cloudsql/sent_bytes_count
GA
(project)
CloudSQL bytes sent
DELTA , INT64 , By
gae_app
Number of bytes sent by App Engine to Cloud SQL over the network. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
memcache/access_ages
ALPHA
(project)
Ages at Access
DELTA , DISTRIBUTION , s
gae_app
Ages of cached items when they are accessed. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
memcache/backend_request_count
ALPHA
(project)
Backend Requests
DELTA , INT64 , {requests}
gae_app
Count of cache requests as recorded by the backends. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
memcache/cache_size_limit
ALPHA
(project)
Memcache Size Limit
GAUGE , INT64 , By
gae_app
Expected maximum possible cache size based on app's configuration. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
memcache/centi_mcu_count
GA
(project)
Memcache utilization
DELTA , INT64 , 1
gae_app
Memcache utilization in one hundredth of Memcache Compute Unit grouped by command. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
command :
Name of the memcache command.
memcache/centi_mcu_limit
ALPHA
(project)
Memcache Compute Unit Limit
GAUGE , INT64 , c{MCU}
gae_app
Expected maximum memcache size in one hundredth of Memcache Compute Units. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
memcache/eviction_count
ALPHA
(project)
Rate of evictions
DELTA , INT64 , {item}
gae_app
Rate of items evicted from the cache due to space constraints. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
memcache/hit_bytes_count
ALPHA
(project)
Hit Bytes Count
DELTA , INT64 , By
gae_app
Count of bytes served from cache hits. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
memcache/hit_count
ALPHA
(project)
Cache Hits
DELTA , INT64 , {request}
gae_app
Rate of cache hits. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
memcache/hit_ratio
GA
(project)
Hit ratio
GAUGE , DOUBLE , 1
gae_app
Percentage of successful hits compared to all memcache operations. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
memcache/hot_keys
ALPHA
(project)
Hot Keys
DELTA , DISTRIBUTION , {request}
gae_app
Distribution of hot key qps. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
memcache/miss_count
ALPHA
(project)
Cache Misses
DELTA , INT64 , {request}
gae_app
Rate of cache misses. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
memcache/operation_count
GA
(project)
Memcache operations
DELTA , INT64 , 1
gae_app
Count of memcache key operations, grouped by command and status. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
command :
Name of the memcache command.
status :
Whether the operation succeeded or not, e.g. HIT or MISS. This is currently unpopulated (always an empty string).
memcache/received_bytes_count
GA
(project)
Memcache received bytes
DELTA , INT64 , By
gae_app
Number of bytes received by app from the memcache API, grouped by status and memcache command. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
status :
RPC status of the request.
command :
Name of the memcache command.
memcache/sent_bytes_count
GA
(project)
Memcache sent bytes
DELTA , INT64 , By
gae_app
Number of bytes sent by app through the memcache API, grouped by memcache command. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
command :
Name of the memcache command.
memcache/set_bytes_count
ALPHA
(project)
Set Bytes Count
DELTA , INT64 , By
gae_app
Count of bytes received from sets. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
memcache/used_cache_size
GA
(project)
Used Cache Size
GAUGE , INT64 , By
gae_app
Size of the cache, calculated as the total size of all items stored. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
system/billed_instance_estimate_count
GA
(project)
Estimated instance count
GAUGE , INT64 , 1
gae_app
Estimate of the number of instances that the customer is charged for. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
system/cpu/usage
GA
(project)
CPU megacycles
GAUGE , INT64 , 1
gae_app
CPU usage in megacycles over all instances. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
source :
The source of the CPU usage (api or runtime).
system/cpu/utilization
BETA
(project)
CPU utilization
GAUGE , DOUBLE , 10^2.%
gae_app
CPU utilization average over all active instances. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
system/instance_count
GA
(project)
Instance count
GAUGE , INT64 , 1
gae_app
Number of instances that exist. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
state :
State of instance (active, idle, etc).
system/memory/usage
GA
(project)
Memory usage
GAUGE , INT64 , By
gae_app
Total memory used by running instances. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
system/network/received_bytes_count
GA
(project)
Received bytes
DELTA , INT64 , By
gae_app
Delta count of incoming network bandwidth. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
cached :
(BOOL)
Indicates if response was cached.
system/network/sent_bytes_count
GA
(project)
Sent bytes
DELTA , INT64 , By
gae_app
Delta count of outgoing network bandwidth. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
cached :
(BOOL)
Indicates if response was cached.
system/pending_queue/pending_requests
ALPHA
(project)
Pending Requests
GAUGE , INT64 , 1
gae_app
Number of pending requests. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
apphub
Metrics from App Hub .
Launch stages of these metrics:
ALPHA
BETA
GA
The "metric type" strings in this table must be prefixed
with apphub.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
application/services
BETA
(project)
Registered Services
GAUGE , INT64 , 1
apphub.googleapis.com/Application
Number of Registered Services in a host project per location per application.
criticality_level :
Criticality level enum for the service.
environment :
Environment attribute enum for the service.
service_project_id :
The Service Project ID for the underlying infrastructure resource. This is different from the GCP project in resource_container. Each GCP project might contains multiple service projects.
application/workloads
BETA
(project)
Registered Workloads
GAUGE , INT64 , 1
apphub.googleapis.com/Application
Number of Registered Workloads in a host project per location per application.
criticality_level :
Criticality level enum for the workload.
environment :
Environment attribute enum for the workload.
service_project_id :
The Service Project ID for the underlying infrastructure resource. This is different from the GCP project in resource_container. Each GCP project might contains multiple service projects.
applications
BETA
(project)
Applications
GAUGE , INT64 , 1
apphub.googleapis.com/Location
Number of Applications in a host project per location.
criticality_level :
Criticality level enum for the application.
environment :
Environment attribute enum for the application.
discovered/services
BETA
(project)
Discovered Services
GAUGE , INT64 , 1
apphub.googleapis.com/Location
Number of Discovered Services in a host project per location.
service_project_id :
The Service Project ID for the underlying infrastructure resource. This is different from the GCP project in resource_container. Each GCP project might contains multiple service projects.
discovered/workloads
BETA
(project)
Discovered Workloads
GAUGE , INT64 , 1
apphub.googleapis.com/Location
Number of Discovered Workloads in a host project per location.
service_project_id :
The Service Project ID for the underlying infrastructure resource. This is different from the GCP project in resource_container. Each GCP project might contains multiple service projects.
quota/service_per_global_application/exceeded
ALPHA
(project)
Global Registered Services quota exceeded error
DELTA , INT64 , 1
apphub.googleapis.com/Application
Number of attempts to exceed the limit on quota metric apphub.googleapis.com/service_per_global_application. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/service_per_global_application/limit
ALPHA
(project)
Global Registered Services quota limit
GAUGE , INT64 , 1
apphub.googleapis.com/Application
Current limit on quota metric apphub.googleapis.com/service_per_global_application. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/service_per_global_application/usage
ALPHA
(project)
Global Registered Services quota usage
GAUGE , INT64 , 1
apphub.googleapis.com/Application
Current usage on quota metric apphub.googleapis.com/service_per_global_application. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/service_per_region_per_application/exceeded
GA
(project)
Registered Services quota exceeded error
DELTA , INT64 , 1
apphub.googleapis.com/Application
Number of attempts to exceed the limit on quota metric apphub.googleapis.com/service_per_region_per_application. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/service_per_region_per_application/limit
GA
(project)
Registered Services quota limit
GAUGE , INT64 , 1
apphub.googleapis.com/Application
Current limit on quota metric apphub.googleapis.com/service_per_region_per_application. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/service_per_region_per_application/usage
GA
(project)
Registered Services quota usage
GAUGE , INT64 , 1
apphub.googleapis.com/Application
Current usage on quota metric apphub.googleapis.com/service_per_region_per_application. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/workload_per_global_application/exceeded
ALPHA
(project)
Global Registered Workloads quota exceeded error
DELTA , INT64 , 1
apphub.googleapis.com/Application
Number of attempts to exceed the limit on quota metric apphub.googleapis.com/workload_per_global_application. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/workload_per_global_application/limit
ALPHA
(project)
Global Registered Workloads quota limit
GAUGE , INT64 , 1
apphub.googleapis.com/Application
Current limit on quota metric apphub.googleapis.com/workload_per_global_application. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/workload_per_global_application/usage
ALPHA
(project)
Global Registered Workloads quota usage
GAUGE , INT64 , 1
apphub.googleapis.com/Application
Current usage on quota metric apphub.googleapis.com/workload_per_global_application. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/workload_per_region_per_application/exceeded
GA
(project)
Registered Workloads quota exceeded error
DELTA , INT64 , 1
apphub.googleapis.com/Application
Number of attempts to exceed the limit on quota metric apphub.googleapis.com/workload_per_region_per_application. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/workload_per_region_per_application/limit
GA
(project)
Registered Workloads quota limit
GAUGE , INT64 , 1
apphub.googleapis.com/Application
Current limit on quota metric apphub.googleapis.com/workload_per_region_per_application. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/workload_per_region_per_application/usage
GA
(project)
Registered Workloads quota usage
GAUGE , INT64 , 1
apphub.googleapis.com/Application
Current usage on quota metric apphub.googleapis.com/workload_per_region_per_application. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
artifactregistry
Metrics from Artifact Registry .
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with artifactregistry.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
project/api/request_count
GA
(project)
Control plane API request count per project
DELTA , INT64 , 1
artifactregistry.googleapis.com/Project
Request count for all requests sent to Artifact Registry control plane API for the current project.
method :
The name of the called control plane API. For the list of available APIs see https://cloud.google.com/artifact-registry/docs/audit-logging#api-interface-reference.
version :
The version of the called control plane API.
response_code :
The HTTP response code of the request.
status :
The status of the request.
project/api/request_latencies
GA
(project)
Control plane API request latency per project
DELTA , DISTRIBUTION , us
artifactregistry.googleapis.com/Project
The latency distribution for the requests sent to Artifact Registry control plane API for the current project in microseconds. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
method :
The name of the called control plane API. For the list of available APIs see https://cloud.google.com/artifact-registry/docs/audit-logging#api-interface-reference.
version :
The version of the called control plane API.
response_code :
The HTTP response code of the request.
status :
The status of the request.
project/request_count
GA
(project)
Data plane API request count per project
DELTA , INT64 , 1
artifactregistry.googleapis.com/Project
Request count for all requests sent to Artifact Registry data plane API for the current project. For example requests made by Docker, Maven, Pip, Twine, or Gradle tools are data plane requests.
method :
The name of the called data plane API. For the list of available APIs see https://cloud.google.com/artifact-registry/docs/audit-logging#Data%20plane%20API.
type :
The type of the called API: PREAMPLE, READ or WRITE.
response_code :
The HTTP response code of the request.
status :
The status of the request.
project/request_latencies
GA
(project)
Data plane API request latency per project
DELTA , DISTRIBUTION , us
artifactregistry.googleapis.com/Project
The latency distribution for the requests sent to Artifact Registry data plane API for the current project in microseconds. For example requests made by Docker, Maven, Pip, Twine, or Gradle tools are data plane requests. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
method :
The name of the called data plane API. For the list of available APIs see https://cloud.google.com/artifact-registry/docs/audit-logging#Data%20plane%20API.
type :
The type of the called API: PREAMPLE, READ or WRITE.
response_code :
The HTTP response code of the request.
status :
The status of the request.
quota/asia_multi_region_upstream_host_reads/exceeded
GA
(project)
Read requests to external upstream hosts per organization per host in the Asia multi-region quota exceeded error
DELTA , INT64 , 1
artifactregistry.googleapis.com/Location
Number of attempts to exceed the limit on quota metric artifactregistry.googleapis.com/asia_multi_region_upstream_host_reads. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
host :
External upstream host label.
quota/asia_multi_region_upstream_host_reads/limit
GA
(project)
Read requests to external upstream hosts per organization per host in the Asia multi-region quota limit
GAUGE , INT64 , 1
artifactregistry.googleapis.com/Location
Current limit on quota metric artifactregistry.googleapis.com/asia_multi_region_upstream_host_reads. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
host :
External upstream host label.
quota/asia_multi_region_upstream_host_reads/usage
GA
(project)
Read requests to external upstream hosts per organization per host in the Asia multi-region quota usage
DELTA , INT64 , 1
artifactregistry.googleapis.com/Location
Current usage on quota metric artifactregistry.googleapis.com/asia_multi_region_upstream_host_reads. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
host :
External upstream host label.
quota/europe_multi_region_upstream_host_reads/exceeded
GA
(project)
Read requests to external upstream hosts per organization per host in the Europe multi-region quota exceeded error
DELTA , INT64 , 1
artifactregistry.googleapis.com/Location
Number of attempts to exceed the limit on quota metric artifactregistry.googleapis.com/europe_multi_region_upstream_host_reads. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
host :
External upstream host label.
quota/europe_multi_region_upstream_host_reads/limit
GA
(project)
Read requests to external upstream hosts per organization per host in the Europe multi-region quota limit
GAUGE , INT64 , 1
artifactregistry.googleapis.com/Location
Current limit on quota metric artifactregistry.googleapis.com/europe_multi_region_upstream_host_reads. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
host :
External upstream host label.
quota/europe_multi_region_upstream_host_reads/usage
GA
(project)
Read requests to external upstream hosts per organization per host in the Europe multi-region quota usage
DELTA , INT64 , 1
artifactregistry.googleapis.com/Location
Current usage on quota metric artifactregistry.googleapis.com/europe_multi_region_upstream_host_reads. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
host :
External upstream host label.
quota/project_asia_multi_region_upstream_host_reads/exceeded
GA
(project)
Read requests to external upstream hosts per project per host in the Asia multi-region quota exceeded error
DELTA , INT64 , 1
artifactregistry.googleapis.com/Location
Number of attempts to exceed the limit on quota metric artifactregistry.googleapis.com/project_asia_multi_region_upstream_host_reads. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
host :
External upstream host label.
quota/project_asia_multi_region_upstream_host_reads/limit
GA
(project)
Read requests to external upstream hosts per project per host in the Asia multi-region quota limit
GAUGE , INT64 , 1
artifactregistry.googleapis.com/Location
Current limit on quota metric artifactregistry.googleapis.com/project_asia_multi_region_upstream_host_reads. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
host :
External upstream host label.
quota/project_asia_multi_region_upstream_host_reads/usage
GA
(project)
Read requests to external upstream hosts per project per host in the Asia multi-region quota usage
DELTA , INT64 , 1
artifactregistry.googleapis.com/Location
Current usage on quota metric artifactregistry.googleapis.com/project_asia_multi_region_upstream_host_reads. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
host :
External upstream host label.
quota/project_europe_multi_region_upstream_host_reads/exceeded
GA
(project)
Read requests to external upstream hosts per project per host in the Europe multi-region quota exceeded error
DELTA , INT64 , 1
artifactregistry.googleapis.com/Location
Number of attempts to exceed the limit on quota metric artifactregistry.googleapis.com/project_europe_multi_region_upstream_host_reads. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
host :
External upstream host label.
quota/project_europe_multi_region_upstream_host_reads/limit
GA
(project)
Read requests to external upstream hosts per project per host in the Europe multi-region quota limit
GAUGE , INT64 , 1
artifactregistry.googleapis.com/Location
Current limit on quota metric artifactregistry.googleapis.com/project_europe_multi_region_upstream_host_reads. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
host :
External upstream host label.
quota/project_europe_multi_region_upstream_host_reads/usage
GA
(project)
Read requests to external upstream hosts per project per host in the Europe multi-region quota usage
DELTA , INT64 , 1
artifactregistry.googleapis.com/Location
Current usage on quota metric artifactregistry.googleapis.com/project_europe_multi_region_upstream_host_reads. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
host :
External upstream host label.
quota/project_region_upstream_host_reads/exceeded
GA
(project)
Read requests to external upstream hosts per project per region per host quota exceeded error
DELTA , INT64 , 1
artifactregistry.googleapis.com/Location
Number of attempts to exceed the limit on quota metric artifactregistry.googleapis.com/project_region_upstream_host_reads. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
host :
External upstream host label.
quota/project_region_upstream_host_reads/limit
GA
(project)
Read requests to external upstream hosts per project per region per host quota limit
GAUGE , INT64 , 1
artifactregistry.googleapis.com/Location
Current limit on quota metric artifactregistry.googleapis.com/project_region_upstream_host_reads. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
host :
External upstream host label.
quota/project_region_upstream_host_reads/usage
GA
(project)
Read requests to external upstream hosts per project per region per host quota usage
DELTA , INT64 , 1
artifactregistry.googleapis.com/Location
Current usage on quota metric artifactregistry.googleapis.com/project_region_upstream_host_reads. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
host :
External upstream host label.
quota/project_us_multi_region_upstream_host_reads/exceeded
GA
(project)
Read requests to external upstream hosts per project per host in the US multi-region quota exceeded error
DELTA , INT64 , 1
artifactregistry.googleapis.com/Location
Number of attempts to exceed the limit on quota metric artifactregistry.googleapis.com/project_us_multi_region_upstream_host_reads. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
host :
External upstream host label.
quota/project_us_multi_region_upstream_host_reads/limit
GA
(project)
Read requests to external upstream hosts per project per host in the US multi-region quota limit
GAUGE , INT64 , 1
artifactregistry.googleapis.com/Location
Current limit on quota metric artifactregistry.googleapis.com/project_us_multi_region_upstream_host_reads. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
host :
External upstream host label.
quota/project_us_multi_region_upstream_host_reads/usage
GA
(project)
Read requests to external upstream hosts per project per host in the US multi-region quota usage
DELTA , INT64 , 1
artifactregistry.googleapis.com/Location
Current usage on quota metric artifactregistry.googleapis.com/project_us_multi_region_upstream_host_reads. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
host :
External upstream host label.
quota/region_upstream_host_reads/exceeded
GA
(project)
Read requests to external upstream hosts per organization per region per host quota exceeded error
DELTA , INT64 , 1
artifactregistry.googleapis.com/Location
Number of attempts to exceed the limit on quota metric artifactregistry.googleapis.com/region_upstream_host_reads. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
host :
External upstream host label.
quota/region_upstream_host_reads/limit
GA
(project)
Read requests to external upstream hosts per organization per region per host quota limit
GAUGE , INT64 , 1
artifactregistry.googleapis.com/Location
Current limit on quota metric artifactregistry.googleapis.com/region_upstream_host_reads. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
host :
External upstream host label.
quota/region_upstream_host_reads/usage
GA
(project)
Read requests to external upstream hosts per organization per region per host quota usage
DELTA , INT64 , 1
artifactregistry.googleapis.com/Location
Current usage on quota metric artifactregistry.googleapis.com/region_upstream_host_reads. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
host :
External upstream host label.
quota/us_multi_region_upstream_host_reads/exceeded
GA
(project)
Read requests to external upstream hosts per organization per host in the US multi-region quota exceeded error
DELTA , INT64 , 1
artifactregistry.googleapis.com/Location
Number of attempts to exceed the limit on quota metric artifactregistry.googleapis.com/us_multi_region_upstream_host_reads. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
host :
External upstream host label.
quota/us_multi_region_upstream_host_reads/limit
GA
(project)
Read requests to external upstream hosts per organization per host in the US multi-region quota limit
GAUGE , INT64 , 1
artifactregistry.googleapis.com/Location
Current limit on quota metric artifactregistry.googleapis.com/us_multi_region_upstream_host_reads. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
host :
External upstream host label.
quota/us_multi_region_upstream_host_reads/usage
GA
(project)
Read requests to external upstream hosts per organization per host in the US multi-region quota usage
DELTA , INT64 , 1
artifactregistry.googleapis.com/Location
Current usage on quota metric artifactregistry.googleapis.com/us_multi_region_upstream_host_reads. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
method :
method.
host :
External upstream host label.
repository/api/request_count
GA
(project)
Control plane API request count per repository
DELTA , INT64 , 1
artifactregistry.googleapis.com/Repository
Request count for all requests sent to Artifact Registry control plane API for a repository.
method :
The name of the called control plane API. For the list of available APIs see https://cloud.google.com/artifact-registry/docs/audit-logging#api-interface-reference.
version :
The version of the called control plane API.
response_code :
The HTTP response code of the request.
status :
The status of the request.
repository/api/request_latencies
GA
(project)
Control plane API request latency per repository
DELTA , DISTRIBUTION , us
artifactregistry.googleapis.com/Repository
The latency distribution for the requests sent to Artifact Registry control plane API for a repository in microseconds. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
method :
The name of the called control plane API. For the list of available APIs see https://cloud.google.com/artifact-registry/docs/audit-logging#api-interface-reference.
version :
The version of the called control plane API.
response_code :
The HTTP response code of the request.
status :
The status of the request.
repository/request_count
GA
(project)
Data plane API request count per repository
DELTA , INT64 , 1
artifactregistry.googleapis.com/Repository
Request count for all requests sent to Artifact Registry control data API for a repository. For example requests made by Docker, Maven, Pip, Twine, or Gradle tools are data plane requests.
method :
The name of the called data plane API. For the list of available APIs see https://cloud.google.com/artifact-registry/docs/audit-logging#Data%20plane%20API.
type :
The type of the called API: PREAMPLE, READ or WRITE.
response_code :
The HTTP response code of the request.
status :
The status of the request.
repository/request_latencies
GA
(project)
Data plane API request latency per repository
DELTA , DISTRIBUTION , us
artifactregistry.googleapis.com/Repository
The latency distribution for the requests sent to Artifact Registry data plane API for a repository in microseconds. For example requests made by Docker, Maven, Pip, Twine, or Gradle tools are data plane requests. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
method :
The name of the called data plane API. For the list of available APIs see https://cloud.google.com/artifact-registry/docs/audit-logging#Data%20plane%20API.
type :
The type of the called API: PREAMPLE, READ or WRITE.
response_code :
The HTTP response code of the request.
status :
The status of the request.
repository/size
GA
(project)
Repository size
GAUGE , INT64 , By
artifactregistry.googleapis.com/Repository
The size of the repository in bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
autoscaler
Metrics from Compute Engine Autoscaler .
Launch stages of these metrics:
BETA
The "metric type" strings in this table must be prefixed
with autoscaler.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
capacity
BETA
(project)
Serving capacity
GAUGE , DOUBLE , 1
autoscaler
Utilization target multiplied by number of serving VMs. Sampled every 60 seconds. After sampling, data is not visible for up to 190 seconds.
metric_type :
Name of the resource the autoscaling is based on - "cpu", "load balancing" or full metric name in domain-and-path format if scaling is based on Cloud Monitoring metric.
configured_max_size
BETA
(project)
Configured max size
GAUGE , INT64 , 1
autoscaler
The configured maximum number of virtual machine instances for the autoscaled managed instance group. The Autoscaler will not recommend a size above this value. This limit is defined in the instance group's autoscaling policy. Sampled every 60 seconds. After sampling, data is not visible for up to 190 seconds.
configured_min_size
BETA
(project)
Configured min size
GAUGE , INT64 , 1
autoscaler
The configured minimum number of virtual machine instances for the autoscaled managed instance group. The Autoscaler will not recommend a size below this value. This limit is defined in the instance group's autoscaling policy. Sampled every 60 seconds. After sampling, data is not visible for up to 190 seconds.
current_utilization
BETA
(project)
Current Autoscaler utilization
GAUGE , DOUBLE , 1
autoscaler
The sum of the utilization of a specified metric for all serving VMs. Sampled every 60 seconds. After sampling, data is not visible for up to 190 seconds.
metric_type :
Name of the resource the autoscaling is based on - "cpu", "load balancing" or full metric name in domain-and-path format if scaling is based on Cloud Monitoring metric.
recommended_size
BETA
(project)
Recommended size
GAUGE , INT64 , 1
autoscaler
The final number of virtual machine instances that the Autoscaler recommends for the managed instance group. This recommendation is derived from the configured autoscaling policy, encompassing various inputs such as utilization signals (e.g., CPU, Load Balancing, custom metrics), predictive forecasts, and schedules. The calculation also incorporates behavioral controls like stabilization periods, scale-in controls, and instance cooldown periods. The result is always constrained by the min_num_replicas and max_num_replicas settings. The instance group's target size is influenced by this recommendation based on the autoscaler's mode. Sampled every 60 seconds. After sampling, data is not visible for up to 190 seconds.
scheduled_size
BETA
(project)
Scheduled size
GAUGE , INT64 , 1
autoscaler
The minimum number of VMs that the autoscaler recommends according to the scaling schedule. Sampled every 60 seconds. After sampling, data is not visible for up to 190 seconds.
schedule_name :
Name of the scaling schedule.
backupdr
Metrics from Backup and DR Service .
Launch stages of these metrics:
ALPHA
BETA
The "metric type" strings in this table must be prefixed
with backupdr.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
backup_recovery_appliance/storage_pool/utilization
BETA
(project)
Backup/Recovery storage pool utilization
GAUGE , DOUBLE , %
backupdr.googleapis.com/ManagementConsole
Represents the utilization of backup/recovery appliance storage pools.
pool_name :
Name of the storage pool. E.g. [act_pri_pool000].
pool_usage :
State of storage_pool, one of [free, used].
pool_type :
Type of storage_pool, one of [Snapshot, Primary].
backup_recovery_appliance_name :
Backup recovery appliance name.
backup_recovery_appliance/v_disk_count/utilization
BETA
(project)
Backup/Recovery appliance vDisk utilization
GAUGE , DOUBLE , %
backupdr.googleapis.com/ManagementConsole
Represents the vDisk pool utilization for a backup/recovery appliance.
v_disk_usage :
State of v_disk_count, one of [free, used, leaked].
backup_recovery_appliance_name :
The Backup recovery appliance Name.
jobs/job_trend
BETA
(project)
Job Trend
GAUGE , INT64 , 1
backupdr.googleapis.com/ManagementConsole
Represents Backup/Recovery job count categorized by job status.
job_status :
Status of job, one of [successful, canceled, failed, Not Run, SuccessfulWithWarnings].
job_type :
Type of job, E.g. [Snapshot, Expiration, Mount].
resource_type :
Type of application associated E.g. [GCPInstance, FileSystem, SQLInstance].
backup_recovery_appliance_name :
The Backup recovery appliance Name.
onvault_pools/utilization
BETA
(project)
OnVault pool usage
GAUGE , INT64 , By
backupdr.googleapis.com/ManagementConsole
Represents the usages of vault pools.
pool_name :
Name of the storage pool. E.g [act_pri_pool000].
backup_recovery_appliance_name :
The Backup recovery appliance Name.
protected_data/resources
BETA
(project)
Protected resources count
GAUGE , INT64 , 1
backupdr.googleapis.com/ManagementConsole
Represents the number of protected resources by resource type.
resource_type :
Type of resource associated E.g. [GCPInstance, FileSystem, SQLInstance].
protected_data/volume
BETA
(project)
Protected data volume
GAUGE , INT64 , By
backupdr.googleapis.com/ManagementConsole
Represents the size of data(in bytes) protected by resource type.
resource_type :
Type of resource associated E.g. [GCPInstance, FileSystem, SQLInstance].
backup_recovery_appliance_name :
The Backup recovery appliance Name.
quota/alloydb_active_datasources_per_vault/exceeded
ALPHA
(project)
Active Vaulted AlloyDB datasources per vault quota exceeded error
DELTA , INT64 , 1
backupdr.googleapis.com/BackupVault
Number of attempts to exceed the limit on quota metric backupdr.googleapis.com/alloydb_active_datasources_per_vault. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/alloydb_active_datasources_per_vault/limit
ALPHA
(project)
Active Vaulted AlloyDB datasources per vault quota limit
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current limit on quota metric backupdr.googleapis.com/alloydb_active_datasources_per_vault. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/alloydb_active_datasources_per_vault/usage
ALPHA
(project)
Active Vaulted AlloyDB datasources per vault quota usage
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current usage on quota metric backupdr.googleapis.com/alloydb_active_datasources_per_vault. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/alloydb_backups_per_vault/exceeded
ALPHA
(project)
AlloyDB backups per vault quota exceeded error
DELTA , INT64 , 1
backupdr.googleapis.com/BackupVault
Number of attempts to exceed the limit on quota metric backupdr.googleapis.com/alloydb_backups_per_vault. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/alloydb_backups_per_vault/limit
ALPHA
(project)
AlloyDB backups per vault quota limit
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current limit on quota metric backupdr.googleapis.com/alloydb_backups_per_vault. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/alloydb_backups_per_vault/usage
ALPHA
(project)
AlloyDB backups per vault quota usage
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current usage on quota metric backupdr.googleapis.com/alloydb_backups_per_vault. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/cloud_sql_active_datasources_per_vault/exceeded
ALPHA
(project)
Active Vaulted Cloud SQL datasources per vault quota exceeded error
DELTA , INT64 , 1
backupdr.googleapis.com/BackupVault
Number of attempts to exceed the limit on quota metric backupdr.googleapis.com/cloud_sql_active_datasources_per_vault. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/cloud_sql_active_datasources_per_vault/limit
ALPHA
(project)
Active Vaulted Cloud SQL datasources per vault quota limit
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current limit on quota metric backupdr.googleapis.com/cloud_sql_active_datasources_per_vault. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/cloud_sql_active_datasources_per_vault/usage
ALPHA
(project)
Active Vaulted Cloud SQL datasources per vault quota usage
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current usage on quota metric backupdr.googleapis.com/cloud_sql_active_datasources_per_vault. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/cloud_sql_active_datasources_per_vault_per_asia_multiregion/exceeded
ALPHA
(project)
Active Vaulted Cloud SQL datasources per vault per Asia multi region. quota exceeded error
DELTA , INT64 , 1
backupdr.googleapis.com/BackupVault
Number of attempts to exceed the limit on quota metric backupdr.googleapis.com/cloud_sql_active_datasources_per_vault_per_asia_multiregion. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/cloud_sql_active_datasources_per_vault_per_asia_multiregion/limit
ALPHA
(project)
Active Vaulted Cloud SQL datasources per vault per Asia multi region. quota limit
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current limit on quota metric backupdr.googleapis.com/cloud_sql_active_datasources_per_vault_per_asia_multiregion. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/cloud_sql_active_datasources_per_vault_per_asia_multiregion/usage
ALPHA
(project)
Active Vaulted Cloud SQL datasources per vault per Asia multi region. quota usage
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current usage on quota metric backupdr.googleapis.com/cloud_sql_active_datasources_per_vault_per_asia_multiregion. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/cloud_sql_active_datasources_per_vault_per_eu_multiregion/exceeded
ALPHA
(project)
Active Vaulted Cloud SQL datasources per vault per EU multi region. quota exceeded error
DELTA , INT64 , 1
backupdr.googleapis.com/BackupVault
Number of attempts to exceed the limit on quota metric backupdr.googleapis.com/cloud_sql_active_datasources_per_vault_per_eu_multiregion. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/cloud_sql_active_datasources_per_vault_per_eu_multiregion/limit
ALPHA
(project)
Active Vaulted Cloud SQL datasources per vault per EU multi region. quota limit
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current limit on quota metric backupdr.googleapis.com/cloud_sql_active_datasources_per_vault_per_eu_multiregion. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/cloud_sql_active_datasources_per_vault_per_eu_multiregion/usage
ALPHA
(project)
Active Vaulted Cloud SQL datasources per vault per EU multi region. quota usage
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current usage on quota metric backupdr.googleapis.com/cloud_sql_active_datasources_per_vault_per_eu_multiregion. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/cloud_sql_active_datasources_per_vault_per_us_multiregion/exceeded
ALPHA
(project)
Active Vaulted Cloud SQL datasources per vault per US multi region. quota exceeded error
DELTA , INT64 , 1
backupdr.googleapis.com/BackupVault
Number of attempts to exceed the limit on quota metric backupdr.googleapis.com/cloud_sql_active_datasources_per_vault_per_us_multiregion. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/cloud_sql_active_datasources_per_vault_per_us_multiregion/limit
ALPHA
(project)
Active Vaulted Cloud SQL datasources per vault per US multi region. quota limit
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current limit on quota metric backupdr.googleapis.com/cloud_sql_active_datasources_per_vault_per_us_multiregion. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/cloud_sql_active_datasources_per_vault_per_us_multiregion/usage
ALPHA
(project)
Active Vaulted Cloud SQL datasources per vault per US multi region. quota usage
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current usage on quota metric backupdr.googleapis.com/cloud_sql_active_datasources_per_vault_per_us_multiregion. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/cloud_sql_backups_per_vault/exceeded
ALPHA
(project)
Cloud SQL instance backups per vault quota exceeded error
DELTA , INT64 , 1
backupdr.googleapis.com/BackupVault
Number of attempts to exceed the limit on quota metric backupdr.googleapis.com/cloud_sql_backups_per_vault. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/cloud_sql_backups_per_vault/limit
ALPHA
(project)
Cloud SQL instance backups per vault quota limit
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current limit on quota metric backupdr.googleapis.com/cloud_sql_backups_per_vault. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/cloud_sql_backups_per_vault/usage
ALPHA
(project)
Cloud SQL instance backups per vault quota usage
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current usage on quota metric backupdr.googleapis.com/cloud_sql_backups_per_vault. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/cloud_sql_backups_per_vault_per_asia_multiregion/exceeded
ALPHA
(project)
Cloud SQL instance backups per vault per Asia multi region. quota exceeded error
DELTA , INT64 , 1
backupdr.googleapis.com/BackupVault
Number of attempts to exceed the limit on quota metric backupdr.googleapis.com/cloud_sql_backups_per_vault_per_asia_multiregion. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/cloud_sql_backups_per_vault_per_asia_multiregion/limit
ALPHA
(project)
Cloud SQL instance backups per vault per Asia multi region. quota limit
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current limit on quota metric backupdr.googleapis.com/cloud_sql_backups_per_vault_per_asia_multiregion. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/cloud_sql_backups_per_vault_per_asia_multiregion/usage
ALPHA
(project)
Cloud SQL instance backups per vault per Asia multi region. quota usage
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current usage on quota metric backupdr.googleapis.com/cloud_sql_backups_per_vault_per_asia_multiregion. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/cloud_sql_backups_per_vault_per_eu_multiregion/exceeded
ALPHA
(project)
Cloud SQL instance backups per vault per EU multi region. quota exceeded error
DELTA , INT64 , 1
backupdr.googleapis.com/BackupVault
Number of attempts to exceed the limit on quota metric backupdr.googleapis.com/cloud_sql_backups_per_vault_per_eu_multiregion. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/cloud_sql_backups_per_vault_per_eu_multiregion/limit
ALPHA
(project)
Cloud SQL instance backups per vault per EU multi region. quota limit
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current limit on quota metric backupdr.googleapis.com/cloud_sql_backups_per_vault_per_eu_multiregion. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/cloud_sql_backups_per_vault_per_eu_multiregion/usage
ALPHA
(project)
Cloud SQL instance backups per vault per EU multi region. quota usage
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current usage on quota metric backupdr.googleapis.com/cloud_sql_backups_per_vault_per_eu_multiregion. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/cloud_sql_backups_per_vault_per_us_multiregion/exceeded
ALPHA
(project)
Cloud SQL instance backups per vault per US multi region. quota exceeded error
DELTA , INT64 , 1
backupdr.googleapis.com/BackupVault
Number of attempts to exceed the limit on quota metric backupdr.googleapis.com/cloud_sql_backups_per_vault_per_us_multiregion. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/cloud_sql_backups_per_vault_per_us_multiregion/limit
ALPHA
(project)
Cloud SQL instance backups per vault per US multi region. quota limit
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current limit on quota metric backupdr.googleapis.com/cloud_sql_backups_per_vault_per_us_multiregion. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/cloud_sql_backups_per_vault_per_us_multiregion/usage
ALPHA
(project)
Cloud SQL instance backups per vault per US multi region. quota usage
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current usage on quota metric backupdr.googleapis.com/cloud_sql_backups_per_vault_per_us_multiregion. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/disk_active_datasources_per_vault/exceeded
ALPHA
(project)
Active Vaulted Compute Disks per vault quota exceeded error
DELTA , INT64 , 1
backupdr.googleapis.com/BackupVault
Number of attempts to exceed the limit on quota metric backupdr.googleapis.com/disk_active_datasources_per_vault. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/disk_active_datasources_per_vault/limit
ALPHA
(project)
Active Vaulted Compute Disks per vault quota limit
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current limit on quota metric backupdr.googleapis.com/disk_active_datasources_per_vault. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/disk_active_datasources_per_vault/usage
ALPHA
(project)
Active Vaulted Compute Disks per vault quota usage
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current usage on quota metric backupdr.googleapis.com/disk_active_datasources_per_vault. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/disk_active_datasources_per_vault_per_asia_multiregion/exceeded
ALPHA
(project)
Active Vaulted Compute Disks per vault per Asia multi region. quota exceeded error
DELTA , INT64 , 1
backupdr.googleapis.com/BackupVault
Number of attempts to exceed the limit on quota metric backupdr.googleapis.com/disk_active_datasources_per_vault_per_asia_multiregion. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/disk_active_datasources_per_vault_per_asia_multiregion/limit
ALPHA
(project)
Active Vaulted Compute Disks per vault per Asia multi region. quota limit
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current limit on quota metric backupdr.googleapis.com/disk_active_datasources_per_vault_per_asia_multiregion. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/disk_active_datasources_per_vault_per_asia_multiregion/usage
ALPHA
(project)
Active Vaulted Compute Disks per vault per Asia multi region. quota usage
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current usage on quota metric backupdr.googleapis.com/disk_active_datasources_per_vault_per_asia_multiregion. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/disk_active_datasources_per_vault_per_eu_multiregion/exceeded
ALPHA
(project)
Active Vaulted Compute Disks per vault per EU multi region. quota exceeded error
DELTA , INT64 , 1
backupdr.googleapis.com/BackupVault
Number of attempts to exceed the limit on quota metric backupdr.googleapis.com/disk_active_datasources_per_vault_per_eu_multiregion. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/disk_active_datasources_per_vault_per_eu_multiregion/limit
ALPHA
(project)
Active Vaulted Compute Disks per vault per EU multi region. quota limit
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current limit on quota metric backupdr.googleapis.com/disk_active_datasources_per_vault_per_eu_multiregion. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/disk_active_datasources_per_vault_per_eu_multiregion/usage
ALPHA
(project)
Active Vaulted Compute Disks per vault per EU multi region. quota usage
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current usage on quota metric backupdr.googleapis.com/disk_active_datasources_per_vault_per_eu_multiregion. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/disk_active_datasources_per_vault_per_nam11_multiregion/exceeded
ALPHA
(project)
Active Vaulted Compute Disks per vault per nam11 multi region. quota exceeded error
DELTA , INT64 , 1
backupdr.googleapis.com/BackupVault
Number of attempts to exceed the limit on quota metric backupdr.googleapis.com/disk_active_datasources_per_vault_per_nam11_multiregion. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/disk_active_datasources_per_vault_per_nam11_multiregion/limit
ALPHA
(project)
Active Vaulted Compute Disks per vault per nam11 multi region. quota limit
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current limit on quota metric backupdr.googleapis.com/disk_active_datasources_per_vault_per_nam11_multiregion. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/disk_active_datasources_per_vault_per_nam11_multiregion/usage
ALPHA
(project)
Active Vaulted Compute Disks per vault per nam11 multi region. quota usage
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current usage on quota metric backupdr.googleapis.com/disk_active_datasources_per_vault_per_nam11_multiregion. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/disk_active_datasources_per_vault_per_us_multiregion/exceeded
ALPHA
(project)
Active Vaulted Compute Disks per vault per US multi region. quota exceeded error
DELTA , INT64 , 1
backupdr.googleapis.com/BackupVault
Number of attempts to exceed the limit on quota metric backupdr.googleapis.com/disk_active_datasources_per_vault_per_us_multiregion. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/disk_active_datasources_per_vault_per_us_multiregion/limit
ALPHA
(project)
Active Vaulted Compute Disks per vault per US multi region. quota limit
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current limit on quota metric backupdr.googleapis.com/disk_active_datasources_per_vault_per_us_multiregion. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/disk_active_datasources_per_vault_per_us_multiregion/usage
ALPHA
(project)
Active Vaulted Compute Disks per vault per US multi region. quota usage
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current usage on quota metric backupdr.googleapis.com/disk_active_datasources_per_vault_per_us_multiregion. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/disk_backups_per_vault/exceeded
ALPHA
(project)
Compute Disk backups per vault quota exceeded error
DELTA , INT64 , 1
backupdr.googleapis.com/BackupVault
Number of attempts to exceed the limit on quota metric backupdr.googleapis.com/disk_backups_per_vault. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/disk_backups_per_vault/limit
ALPHA
(project)
Compute Disk backups per vault quota limit
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current limit on quota metric backupdr.googleapis.com/disk_backups_per_vault. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/disk_backups_per_vault/usage
ALPHA
(project)
Compute Disk backups per vault quota usage
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current usage on quota metric backupdr.googleapis.com/disk_backups_per_vault. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/disk_backups_per_vault_per_asia_multiregion/exceeded
ALPHA
(project)
Compute Disk backups per vault per Asia multi region. quota exceeded error
DELTA , INT64 , 1
backupdr.googleapis.com/BackupVault
Number of attempts to exceed the limit on quota metric backupdr.googleapis.com/disk_backups_per_vault_per_asia_multiregion. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/disk_backups_per_vault_per_asia_multiregion/limit
ALPHA
(project)
Compute Disk backups per vault per Asia multi region. quota limit
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current limit on quota metric backupdr.googleapis.com/disk_backups_per_vault_per_asia_multiregion. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/disk_backups_per_vault_per_asia_multiregion/usage
ALPHA
(project)
Compute Disk backups per vault per Asia multi region. quota usage
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current usage on quota metric backupdr.googleapis.com/disk_backups_per_vault_per_asia_multiregion. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/disk_backups_per_vault_per_eu_multiregion/exceeded
ALPHA
(project)
Compute Disk backups per vault per EU multi region. quota exceeded error
DELTA , INT64 , 1
backupdr.googleapis.com/BackupVault
Number of attempts to exceed the limit on quota metric backupdr.googleapis.com/disk_backups_per_vault_per_eu_multiregion. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/disk_backups_per_vault_per_eu_multiregion/limit
ALPHA
(project)
Compute Disk backups per vault per EU multi region. quota limit
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current limit on quota metric backupdr.googleapis.com/disk_backups_per_vault_per_eu_multiregion. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/disk_backups_per_vault_per_eu_multiregion/usage
ALPHA
(project)
Compute Disk backups per vault per EU multi region. quota usage
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current usage on quota metric backupdr.googleapis.com/disk_backups_per_vault_per_eu_multiregion. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/disk_backups_per_vault_per_nam11_multiregion/exceeded
ALPHA
(project)
Compute Disk backups per vault per nam11 multi region. quota exceeded error
DELTA , INT64 , 1
backupdr.googleapis.com/BackupVault
Number of attempts to exceed the limit on quota metric backupdr.googleapis.com/disk_backups_per_vault_per_nam11_multiregion. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/disk_backups_per_vault_per_nam11_multiregion/limit
ALPHA
(project)
Compute Disk backups per vault per nam11 multi region. quota limit
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current limit on quota metric backupdr.googleapis.com/disk_backups_per_vault_per_nam11_multiregion. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/disk_backups_per_vault_per_nam11_multiregion/usage
ALPHA
(project)
Compute Disk backups per vault per nam11 multi region. quota usage
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current usage on quota metric backupdr.googleapis.com/disk_backups_per_vault_per_nam11_multiregion. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/disk_backups_per_vault_per_us_multiregion/exceeded
ALPHA
(project)
Compute Disk backups per vault per US multi region. quota exceeded error
DELTA , INT64 , 1
backupdr.googleapis.com/BackupVault
Number of attempts to exceed the limit on quota metric backupdr.googleapis.com/disk_backups_per_vault_per_us_multiregion. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/disk_backups_per_vault_per_us_multiregion/limit
ALPHA
(project)
Compute Disk backups per vault per US multi region. quota limit
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current limit on quota metric backupdr.googleapis.com/disk_backups_per_vault_per_us_multiregion. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/disk_backups_per_vault_per_us_multiregion/usage
ALPHA
(project)
Compute Disk backups per vault per US multi region. quota usage
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current usage on quota metric backupdr.googleapis.com/disk_backups_per_vault_per_us_multiregion. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/filestore_backups_per_vault/exceeded
ALPHA
(project)
Filestore instance backups per vault quota exceeded error
DELTA , INT64 , 1
backupdr.googleapis.com/BackupVault
Number of attempts to exceed the limit on quota metric backupdr.googleapis.com/filestore_backups_per_vault. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/filestore_backups_per_vault/limit
ALPHA
(project)
Filestore instance backups per vault quota limit
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current limit on quota metric backupdr.googleapis.com/filestore_backups_per_vault. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/filestore_backups_per_vault/usage
ALPHA
(project)
Filestore instance backups per vault quota usage
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current usage on quota metric backupdr.googleapis.com/filestore_backups_per_vault. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/filestore_projects_protected_per_vault/exceeded
ALPHA
(project)
Filestore consumer projects protected per vault quota exceeded error
DELTA , INT64 , 1
backupdr.googleapis.com/BackupVault
Number of attempts to exceed the limit on quota metric backupdr.googleapis.com/filestore_projects_protected_per_vault. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/filestore_projects_protected_per_vault/limit
ALPHA
(project)
Filestore consumer projects protected per vault quota limit
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current limit on quota metric backupdr.googleapis.com/filestore_projects_protected_per_vault. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/filestore_projects_protected_per_vault/usage
ALPHA
(project)
Filestore consumer projects protected per vault quota usage
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current usage on quota metric backupdr.googleapis.com/filestore_projects_protected_per_vault. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/gce_active_datasources_per_vault/exceeded
ALPHA
(project)
Active Vaulted Compute VM instance Resources per vault quota exceeded error
DELTA , INT64 , 1
backupdr.googleapis.com/BackupVault
Number of attempts to exceed the limit on quota metric backupdr.googleapis.com/gce_active_datasources_per_vault. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/gce_active_datasources_per_vault/limit
ALPHA
(project)
Active Vaulted Compute VM instance Resources per vault quota limit
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current limit on quota metric backupdr.googleapis.com/gce_active_datasources_per_vault. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/gce_active_datasources_per_vault/usage
ALPHA
(project)
Active Vaulted Compute VM instance Resources per vault quota usage
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current usage on quota metric backupdr.googleapis.com/gce_active_datasources_per_vault. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/gce_active_datasources_per_vault_per_asia_multiregion/exceeded
ALPHA
(project)
Active Vaulted Compute VM instance Resources per vault per Asia multi region. quota exceeded error
DELTA , INT64 , 1
backupdr.googleapis.com/BackupVault
Number of attempts to exceed the limit on quota metric backupdr.googleapis.com/gce_active_datasources_per_vault_per_asia_multiregion. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/gce_active_datasources_per_vault_per_asia_multiregion/limit
ALPHA
(project)
Active Vaulted Compute VM instance Resources per vault per Asia multi region. quota limit
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current limit on quota metric backupdr.googleapis.com/gce_active_datasources_per_vault_per_asia_multiregion. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/gce_active_datasources_per_vault_per_asia_multiregion/usage
ALPHA
(project)
Active Vaulted Compute VM instance Resources per vault per Asia multi region. quota usage
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current usage on quota metric backupdr.googleapis.com/gce_active_datasources_per_vault_per_asia_multiregion. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/gce_active_datasources_per_vault_per_eu_multiregion/exceeded
ALPHA
(project)
Active Vaulted Compute VM instance Resources per vault per EU multi region. quota exceeded error
DELTA , INT64 , 1
backupdr.googleapis.com/BackupVault
Number of attempts to exceed the limit on quota metric backupdr.googleapis.com/gce_active_datasources_per_vault_per_eu_multiregion. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/gce_active_datasources_per_vault_per_eu_multiregion/limit
ALPHA
(project)
Active Vaulted Compute VM instance Resources per vault per EU multi region. quota limit
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current limit on quota metric backupdr.googleapis.com/gce_active_datasources_per_vault_per_eu_multiregion. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/gce_active_datasources_per_vault_per_eu_multiregion/usage
ALPHA
(project)
Active Vaulted Compute VM instance Resources per vault per EU multi region. quota usage
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current usage on quota metric backupdr.googleapis.com/gce_active_datasources_per_vault_per_eu_multiregion. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/gce_active_datasources_per_vault_per_nam11_multiregion/exceeded
ALPHA
(project)
Active Vaulted Compute VM instance Resources per vault per nam11 multi region. quota exceeded error
DELTA , INT64 , 1
backupdr.googleapis.com/BackupVault
Number of attempts to exceed the limit on quota metric backupdr.googleapis.com/gce_active_datasources_per_vault_per_nam11_multiregion. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/gce_active_datasources_per_vault_per_nam11_multiregion/limit
ALPHA
(project)
Active Vaulted Compute VM instance Resources per vault per nam11 multi region. quota limit
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current limit on quota metric backupdr.googleapis.com/gce_active_datasources_per_vault_per_nam11_multiregion. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/gce_active_datasources_per_vault_per_nam11_multiregion/usage
ALPHA
(project)
Active Vaulted Compute VM instance Resources per vault per nam11 multi region. quota usage
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current usage on quota metric backupdr.googleapis.com/gce_active_datasources_per_vault_per_nam11_multiregion. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/gce_active_datasources_per_vault_per_us_multiregion/exceeded
ALPHA
(project)
Active Vaulted Compute VM instance Resources per vault per US multi region. quota exceeded error
DELTA , INT64 , 1
backupdr.googleapis.com/BackupVault
Number of attempts to exceed the limit on quota metric backupdr.googleapis.com/gce_active_datasources_per_vault_per_us_multiregion. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/gce_active_datasources_per_vault_per_us_multiregion/limit
ALPHA
(project)
Active Vaulted Compute VM instance Resources per vault per US multi region. quota limit
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current limit on quota metric backupdr.googleapis.com/gce_active_datasources_per_vault_per_us_multiregion. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/gce_active_datasources_per_vault_per_us_multiregion/usage
ALPHA
(project)
Active Vaulted Compute VM instance Resources per vault per US multi region. quota usage
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current usage on quota metric backupdr.googleapis.com/gce_active_datasources_per_vault_per_us_multiregion. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/gce_backups_per_vault/exceeded
ALPHA
(project)
Compute VM instance backups per vault quota exceeded error
DELTA , INT64 , 1
backupdr.googleapis.com/BackupVault
Number of attempts to exceed the limit on quota metric backupdr.googleapis.com/gce_backups_per_vault. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/gce_backups_per_vault/limit
ALPHA
(project)
Compute VM instance backups per vault quota limit
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current limit on quota metric backupdr.googleapis.com/gce_backups_per_vault. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/gce_backups_per_vault/usage
ALPHA
(project)
Compute VM instance backups per vault quota usage
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current usage on quota metric backupdr.googleapis.com/gce_backups_per_vault. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/gce_backups_per_vault_per_asia_multiregion/exceeded
ALPHA
(project)
Compute VM instance backups per vault per Asia multi region. quota exceeded error
DELTA , INT64 , 1
backupdr.googleapis.com/BackupVault
Number of attempts to exceed the limit on quota metric backupdr.googleapis.com/gce_backups_per_vault_per_asia_multiregion. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/gce_backups_per_vault_per_asia_multiregion/limit
ALPHA
(project)
Compute VM instance backups per vault per Asia multi region. quota limit
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current limit on quota metric backupdr.googleapis.com/gce_backups_per_vault_per_asia_multiregion. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/gce_backups_per_vault_per_asia_multiregion/usage
ALPHA
(project)
Compute VM instance backups per vault per Asia multi region. quota usage
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current usage on quota metric backupdr.googleapis.com/gce_backups_per_vault_per_asia_multiregion. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/gce_backups_per_vault_per_eu_multiregion/exceeded
ALPHA
(project)
Compute VM instance backups per vault per EU multi region. quota exceeded error
DELTA , INT64 , 1
backupdr.googleapis.com/BackupVault
Number of attempts to exceed the limit on quota metric backupdr.googleapis.com/gce_backups_per_vault_per_eu_multiregion. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/gce_backups_per_vault_per_eu_multiregion/limit
ALPHA
(project)
Compute VM instance backups per vault per EU multi region. quota limit
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current limit on quota metric backupdr.googleapis.com/gce_backups_per_vault_per_eu_multiregion. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/gce_backups_per_vault_per_eu_multiregion/usage
ALPHA
(project)
Compute VM instance backups per vault per EU multi region. quota usage
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current usage on quota metric backupdr.googleapis.com/gce_backups_per_vault_per_eu_multiregion. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/gce_backups_per_vault_per_nam11_multiregion/exceeded
ALPHA
(project)
Compute VM instance backups per vault per nam11 multi region. quota exceeded error
DELTA , INT64 , 1
backupdr.googleapis.com/BackupVault
Number of attempts to exceed the limit on quota metric backupdr.googleapis.com/gce_backups_per_vault_per_nam11_multiregion. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/gce_backups_per_vault_per_nam11_multiregion/limit
ALPHA
(project)
Compute VM instance backups per vault per nam11 multi region. quota limit
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current limit on quota metric backupdr.googleapis.com/gce_backups_per_vault_per_nam11_multiregion. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/gce_backups_per_vault_per_nam11_multiregion/usage
ALPHA
(project)
Compute VM instance backups per vault per nam11 multi region. quota usage
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current usage on quota metric backupdr.googleapis.com/gce_backups_per_vault_per_nam11_multiregion. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/gce_backups_per_vault_per_us_multiregion/exceeded
ALPHA
(project)
Compute VM instance backups per vault per US multi region. quota exceeded error
DELTA , INT64 , 1
backupdr.googleapis.com/BackupVault
Number of attempts to exceed the limit on quota metric backupdr.googleapis.com/gce_backups_per_vault_per_us_multiregion. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/gce_backups_per_vault_per_us_multiregion/limit
ALPHA
(project)
Compute VM instance backups per vault per US multi region. quota limit
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current limit on quota metric backupdr.googleapis.com/gce_backups_per_vault_per_us_multiregion. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
quota/gce_backups_per_vault_per_us_multiregion/usage
ALPHA
(project)
Compute VM instance backups per vault per US multi region. quota usage
GAUGE , INT64 , 1
backupdr.googleapis.com/BackupVault
Current usage on quota metric backupdr.googleapis.com/gce_backups_per_vault_per_us_multiregion. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
storage/stored_bytes
BETA
(project)
Backup vault storage consumption
GAUGE , INT64 , By
backupdr.googleapis.com/BackupVault
Represents the data usage of the Backup Vault. Sampled every 300 seconds. After sampling, data is not visible for up to 300 seconds.
resource_type :
The type of resource protected.
backup_schedule_type :
The identifier indicating whether the resource is protected using Backup Plan or Backup Template.
baremetalsolution
Metrics from Bare Metal Solution
Launch stages of these metrics:
BETA
The "metric type" strings in this table must be prefixed
with baremetalsolution.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
instance/ethernet_fabric/port_bytes_count
BETA
(project)
Forwarded Bytes Count
CUMULATIVE , INT64 , By
baremetalsolution.googleapis.com/Instance
Number of bytes forwarded through a physical interface on the ethernet fabric.
direction :
Direction of bytes, one of [SERVER_IN, SERVER_OUT].
logical_port :
Name of the logical port.
physical_port :
Name of the physical port.
lun/avg_latency
BETA
(project)
Avg latency of operations
GAUGE , INT64 , us
baremetalsolution.googleapis.com/Lun
The average latency of I/O operations.
direction :
Direction of operations, one of [READ, WRITE, TOTAL].
lun/bytes_count
BETA
(project)
Bytes count
CUMULATIVE , INT64 , By
baremetalsolution.googleapis.com/Lun
Number of bytes written or read, cumulative.
direction :
Direction of bytes, one of [READ, WRITE].
lun/operation_count
BETA
(project)
Operation count
CUMULATIVE , INT64 , 1
baremetalsolution.googleapis.com/Lun
Number of operations performed, cumulative.
direction :
Direction of operations, one of [READ, WRITE].
lun/size
BETA
(project)
Lun size in bytes.
GAUGE , INT64 , By
baremetalsolution.googleapis.com/Lun
Space allocated to the lun.
type :
Type, one of [AVAILABLE,USED].
volume/avg_latency
BETA
(project)
Avg latency of operations
GAUGE , INT64 , us
baremetalsolution.googleapis.com/Volume
The average latency of I/O operations.
direction :
Direction of operations, one of [READ, WRITE, TOTAL].
volume/bytes_count
BETA
(project)
Bytes count
CUMULATIVE , INT64 , By
baremetalsolution.googleapis.com/Volume
Number of bytes written or read, cumulative.
direction :
Direction of bytes, one of [READ, WRITE].
volume/operation_count
BETA
(project)
Operation count
CUMULATIVE , INT64 , 1
baremetalsolution.googleapis.com/Volume
Number of operations performed, cumulative.
direction :
Direction of operations, one of [READ, WRITE].
volume/size
BETA
(project)
Volume size in bytes
GAUGE , INT64 , By
baremetalsolution.googleapis.com/Volume
Space allocated to the volume.
type :
Type, one of [AVAILABLE,USED].
bigquery
Metrics from BigQuery . Note: When a job runs in less than 60 seconds, metrics sampled every 60 seconds might not report any data.
Launch stages of these metrics:
BETA
GA
The "metric type" strings in this table must be prefixed
with bigquery.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
job/continuous/backlog_records
GA
(project)
Estimated backlog records
GAUGE , INT64 , 1
bigquery.googleapis.com/ContinuousJob
The estimated number of backlog records for each stage of the continuous job. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
stage_id :
The continuous job stage id.
job/continuous/estimated_backlog_logical_bytes
GA
(project)
Estimated backlog logical bytes
GAUGE , INT64 , By
bigquery.googleapis.com/ContinuousJob
The number of bytes in the backlog for each stage of the continuous job. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
stage_id :
The continuous job stage id.
job/continuous/estimated_bytes_processed
GA
(project)
Estimated bytes processed
GAUGE , INT64 , By
bigquery.googleapis.com/ContinuousJob
The estimated number of bytes processed for each stage of the continuous job. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
stage_id :
The continuous job stage id.
job/continuous/output_watermark
GA
(project)
Output watermark
GAUGE , INT64 , us
bigquery.googleapis.com/ContinuousJob
The most recent timestamp, in microseconds since the epoch, up to which all data has been processed by this stage of the continuous job. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
stage_id :
The continuous job stage id.
job/continuous/records_read
GA
(project)
Records read
GAUGE , INT64 , 1
bigquery.googleapis.com/ContinuousJob
The number of input records read for each stage of the continuous job. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
stage_id :
The continuous job stage id.
job/continuous/records_written
GA
(project)
Records written
GAUGE , INT64 , 1
bigquery.googleapis.com/ContinuousJob
The number of output records written for each stage of the continuous job. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
stage_id :
The continuous job stage id.
job/continuous/slots/used_time
GA
(project)
Slots used
DELTA , INT64 , ms
bigquery.googleapis.com/ContinuousJob
The total slot milliseconds used by the continuous job. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
job/num_in_flight
GA
(project)
Job count
GAUGE , INT64 , 1
bigquery_project
In flight jobs. Sampled every 60 seconds. After sampling, data is not visible for up to 720 seconds.
priority :
Job priority (batch or interactive).
job_type :
Job type.
state :
Job state.
managed_routine/python/cpu_utilizations
BETA
(project)
Instance CPU utilization
DELTA , DISTRIBUTION , 10^2.%
bigquery.googleapis.com/ManagedRoutineInvocation
CPU utilization per each instance. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
managed_routine/python/max_request_concurrencies
BETA
(project)
Max Concurrent Requests
DELTA , DISTRIBUTION , Count
bigquery.googleapis.com/ManagedRoutineInvocation
Distribution of maximum concurrent requests across all Python UDF instances. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
managed_routine/python/memory_utilizations
BETA
(project)
Instance memory utilization
DELTA , DISTRIBUTION , 10^2.%
bigquery.googleapis.com/ManagedRoutineInvocation
Memory utilization per each instance. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
query/biengine_fallback_count
GA
(project)
BI Engine query fallback count
DELTA , INT64 , 1
bigquery_project
The reasons that queries failed BI Engine execution. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
reason :
BI Engine fallback reasons.
query/column_metadata_index_staleness
GA
(project)
Column Metadata Index staleness
GAUGE , DISTRIBUTION , ms
bigquery_project
Distribution of staleness in milliseconds of the column metadata index for queries that successfully used the column metadata index in the last sampling interval. Sampled every 60 seconds. After sampling, data is not visible for up to 420 seconds.
query/count
GA
(project)
Query count
GAUGE , INT64 , 1
bigquery_project
global
In flight queries. Sampled every 60 seconds. After sampling, data is not visible for up to 420 seconds.
priority :
Query priority (batch or interactive).
query/execution_count
GA
(project)
Query execution count
DELTA , INT64 , 1
bigquery_project
The number of queries executed. Sampled every 60 seconds. After sampling, data is not visible for up to 420 seconds.
priority :
Query priority (batch or interactive).
caching_mode :
Query caching mode (BI Engine, etc).
query/execution_times
GA
(project)
Query execution times
GAUGE , DISTRIBUTION , s
bigquery_project
global
Distribution of execution times for queries that completed successfully within the last sampling interval. Incomplete and failed queries are not included. Sampled every 60 seconds. After sampling, data is not visible for up to 420 seconds.
priority :
Query priority (batch or interactive).
query/scanned_bytes
GA
(project)
Scanned bytes
DELTA , INT64 , By
global
Scanned bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 21720 seconds.
priority :
Query priority (batch or interactive).
query/scanned_bytes_billed
GA
(project)
Scanned bytes billed
DELTA , INT64 , By
global
Scanned bytes billed. Sampled every 60 seconds. After sampling, data is not visible for up to 21720 seconds.
priority :
Query priority (batch or interactive).
query/statement_scanned_bytes
BETA
(project)
Statement scanned bytes
DELTA , INT64 , By
bigquery_project
Scanned bytes broken down by statement type. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
priority :
Query priority (batch or interactive).
statement_type :
Query statement type (SELECT, CREATE_MODEL ...).
query/statement_scanned_bytes_billed
BETA
(project)
Statement scanned bytes billed
DELTA , INT64 , By
bigquery_project
Scanned bytes billed broken down by statement type. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
priority :
Query priority (batch or interactive).
statement_type :
Query statement type (SELECT, CREATE_MODEL ...).
slots/allocated
GA
(project)
Slots used by project, reservation, and job type
GAUGE , INT64 , 1
bigquery_project
global
Number of BigQuery slots currently allocated for project. Slot allocation can be broken down based on reservation and job type. The accuracy of this metric can be poor, especially the break-down by reservation. Consider using resource charts instead. Sampled every 60 seconds. After sampling, data is not visible for up to 420 seconds.
reservation :
Reservation. This field is unset if the query is on-demand.
job_type :
Job type.
slots/allocated_for_project
GA
(project)
Slots used by project
GAUGE , INT64 , 1
global
Number of BigQuery slots currently allocated for query jobs in the project. Sampled every 60 seconds. After sampling, data is not visible for up to 420 seconds.
slots/allocated_for_project_and_job_type
GA
(project)
Slots used by project and job type
GAUGE , INT64 , 1
global
Number of BigQuery slots currently allocated for the project and job type. Sampled every 60 seconds. After sampling, data is not visible for up to 420 seconds.
job_type :
Job type.
slots/allocated_for_reservation
GA
(project)
Slots used by project in reservation
GAUGE , INT64 , 1
global
Number of BigQuery slots currently allocated for project in the reservation. Sampled every 60 seconds. After sampling, data is not visible for up to 420 seconds.
slots/assigned
GA
(project)
Slots assigned
GAUGE , INT64 , 1
bigquery_project
The number of slots assigned to the given project/organization. Sampled every 60 seconds. After sampling, data is not visible for up to 420 seconds.
job_type :
Job type.
reservation :
Reservation.
slots/capacity_committed
GA
(project)
Slots capacity committed
GAUGE , INT64 , 1
bigquery_project
The total slot capacity commitments purchased through this administrator project/organization. Sampled every 60 seconds. After sampling, data is not visible for up to 420 seconds.
plan :
Capacity commitment plan.
slots/max_assigned
GA
(project)
Slots max assigned
GAUGE , INT64 , 1
bigquery_project
The maximum number of slots assigned to the given project/organization. Sampled every 60 seconds. After sampling, data is not visible for up to 420 seconds.
job_type :
Job type.
reservation :
Reservation.
slots/total_allocated_for_reservation
GA
(project)
Slots used across projects in reservation
GAUGE , INT64 , 1
bigquery_project
global
Number of BigQuery slots currently allocated across projects in the reservation. Note that the metric data is only reported while at least one project has been assigned to the reservation and is consuming slots. As an alternative, consider querying reservations information from INFORMATION_SCHEMA (https://cloud.google.com/bigquery/docs/information-schema-reservations), which does not have these limitations. Sampled every 60 seconds. After sampling, data is not visible for up to 420 seconds.
slots/total_available
DEPRECATED
(project)
Total slots
GAUGE , INT64 , 1
bigquery_project
global
(Deprecated) Total number of BigQuery slots available for the project. If you are using the BigQuery Reservations API, consider using bigquery.googleapis.com/slots/assigned and bigquery.googleapis.com/slots/max_assigned instead. Sampled every 60 seconds. After sampling, data is not visible for up to 420 seconds.
storage/insertall_inserted_bytes
GA
(project)
InsertAll Inserted Bytes
DELTA , DOUBLE , 1
bigquery_project
The number of bytes uploaded by the project using the InsertAll streaming API. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
storage/insertall_inserted_rows
GA
(project)
InsertAll Inserted Rows
DELTA , DOUBLE , 1
bigquery_project
The number of rows uploaded by the project using the InsertAll streaming API. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
storage/replication/dataset_staleness
BETA
(project)
Replication latency
GAUGE , INT64 , ms
bigquery_dataset
Staleness of the data available in the other region replicated as part of the Cross Region Replication or Managed Disaster Recovery features. Sampled every 60 seconds. After sampling, data is not visible for up to 420 seconds.
location :
The location that the dataset is replicated to.
replica_id :
Replica id.
replication_error :
Replication error.
storage/replication/network_egress_bytes_count
BETA
(project)
Network Egress bytes
DELTA , INT64 , By
bigquery_dataset
Billed amount of bytes replicated, if your dataset is enabled for Cross Region Replication or Managed Disaster Recovery features. Sampled every 60 seconds. After sampling, data is not visible for up to 420 seconds.
location :
The location where the bytes are replicated to.
storage/stored_bytes
GA
(project)
Stored bytes
GAUGE , INT64 , By
bigquery_dataset
Number of logical bytes stored. The top 100 tables in a dataset are labeled, while the rest are grouped with no table label. Sampled every 1800 seconds. After sampling, data is not visible for up to 10800 seconds.
table :
Table name.
storage/table_count
GA
(project)
Table count
GAUGE , INT64 , 1
bigquery_dataset
Number of tables. Sampled every 1800 seconds. After sampling, data is not visible for up to 10800 seconds.
storage/uploaded_bytes
GA
(project)
Uploaded bytes
DELTA , INT64 , By
bigquery_dataset
Uploaded bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 21720 seconds.
api :
Api used to upload the data (batch import or streaming)
table :
Table name.
storage/uploaded_bytes_billed
GA
(project)
Uploaded bytes billed
DELTA , INT64 , By
bigquery_dataset
Uploaded bytes billed. Sampled every 60 seconds. After sampling, data is not visible for up to 21720 seconds.
api :
Api used to upload the data (batch import or streaming). Currently only streaming api is billed.
table :
Table name.
storage/uploaded_row_count
GA
(project)
Uploaded rows
DELTA , INT64 , 1
bigquery_dataset
Uploaded rows. Sampled every 60 seconds. After sampling, data is not visible for up to 21720 seconds.
api :
Api used to perform the batch import or streaming insert job. Rows added by using a query job with a `writeDisposition` of `WRITE_APPEND` are not shown.
table :
Table name.
bigquerybiengine
Metrics from BigQuery BI Engine .
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with bigquerybiengine.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
model/inflight_requests
GA
(project)
Inflight requests
GAUGE , INT64 , 1
bigquery_biengine_model
Inflight requests to a BI model. Only reported without LookerStudio native BigQuery integration. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
model/request_count
GA
(project)
Request count
DELTA , INT64 , 1
bigquery_biengine_model
BI Engine request count. Only reported without LookerStudio native BigQuery integration. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
cache_miss :
(BOOL)
Indicates if request was not served from memory cache. Large number of requests with this field set to true is the sign that reservation size should be increased. .
status :
Completion status of the request.
execution_mode :
BIEngine or BigQuery. BigQuery means that request was served using BigQuery slots rather than using BI Engine reservation. .
model/request_latencies
GA
(project)
Request execution times
GAUGE , DISTRIBUTION , ms
bigquery_biengine_model
Distribution of request execution times. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
cache_miss :
(BOOL)
Indicates if request was served from memory cache. Large number of requests with this field set to true is the sign that reservation size should be increased. Only reported without LookerStudio native BigQuery integration.
status :
Completion status of the request.
execution_mode :
BIEngine or BigQuery. BigQuery means that request was served using BigQuery slots rather than using BI Engine reservation. .
reservation/top_tables_cached_bytes
GA
(project)
Reservation used bytes by table
GAUGE , INT64 , By
bigquery_project
The amount of data stored in the BI Engine cache per table for the largest tables in the cache. Sampled every 600 seconds. After sampling, data is not visible for up to 720 seconds.
project_id :
Project Id.
dataset_id :
Dataset Id.
table_id :
Table Id.
reservation/total_bytes
GA
(project)
Reservation total bytes
GAUGE , INT64 , By
bigquery_project
Size of the BI engine reservation. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
reservation/used_bytes
GA
(project)
Reservation used bytes
GAUGE , INT64 , By
bigquery_project
Utilization of the BI engine reservation. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
bigquerydatatransfer
Metrics from BigQuery Data Transfer Service .
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with bigquerydatatransfer.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
transfer_config/active_runs
GA
(project)
Active run count
GAUGE , INT64 , 1
bigquery_dts_config
Number of transfer runs that are running or pending of the transfer configuration. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
state :
Run state (RUNNING or PENDING).
run_cause :
Run cause.
transfer_config/completed_runs
GA
(project)
Completed run count
DELTA , INT64 , 1
bigquery_dts_config
Number of completed DTS runs per transfer configuration. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
status :
Run error status code.
completion_state :
Run completion state.
run_cause :
Run cause.
data_source_id :
Run data source.
transfer_config/last_execution_job_rows
GA
(project)
Last executed job row count
GAUGE , INT64 , 1
bigquery_dts_config
Number of returned rows from last executed job of transfer configuration. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
run_cause :
Run cause.
transfer_config/run_duration_seconds
GA
(project)
Run latency distribution
DELTA , DISTRIBUTION , s
bigquery_dts_config
Distribution of the execution time (in seconds) of each transfer run per transfer configuration. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
run_cause :
Run cause.
bigquerystorage
Metrics from the BigQuery Storage API .
Launch stages of these metrics:
ALPHA
BETA
The "metric type" strings in this table must be prefixed
with bigquerystorage.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
dataflow_write/connection_results_count
BETA
(project)
Connection Results
DELTA , INT64 , 1
bigquerystorage.googleapis.com/DataflowWrite
Total accumulation of BigQuery Write API connection results.
result :
String representation of status code.
dataflow_write/request_count
BETA
(project)
Request Count
DELTA , INT64 , 1
bigquerystorage.googleapis.com/DataflowWrite
Total accumulation of BigQuery Write API request count.
result :
String representation of status code.
dataflow_write/server_side_latencies
BETA
(project)
Server Side Latencies
DELTA , DISTRIBUTION , 1
bigquerystorage.googleapis.com/DataflowWrite
The latency distribution (in milliseconds) in BigQuery Write API frontend from receiving a AppendRowsRequest to sending a AppendRowsResponse.
result :
String representation of status code.
dataflow_write/transcoding_latencies
BETA
(project)
Transcoding Latencies
DELTA , DISTRIBUTION , 1
bigquerystorage.googleapis.com/DataflowWrite
The duration distribution (in milliseconds) in BigQuery Write API frontend taken by transcoding data.
result :
String representation of status code.
dataflow_write/uploaded_bytes_count
BETA
(project)
Uploaded Bytes
DELTA , INT64 , 1
bigquerystorage.googleapis.com/DataflowWrite
Total accumulation of BigQuery Write API ingested bytes.
result :
String representation of status code.
dataflow_write/uploaded_row_count
BETA
(project)
Uploaded Rows
DELTA , INT64 , 1
bigquerystorage.googleapis.com/DataflowWrite
Total accumulation of BigQuery Write API ingested rows.
result :
String representation of status code.
read/concurrent_streams
ALPHA
(project)
Concurrent ReadRows streams
GAUGE , INT64 , 1
bigquery_project
Number of concurrent ReadRows streams. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
write/concurrent_connections
BETA
(project)
concurrent connection count
GAUGE , INT64 , 1
bigquery_project
Concurrent connection per project for BigQuery Write API. To be consistent with concurrent connection quota, the metric is by default on the project that initiated the AppendRowsRequests (associated with the API key or the service account). Sampled every 60 seconds. After sampling, data is not visible for up to 360 seconds.
write/connection_results_count
BETA
(project)
Connection results count
DELTA , INT64 , 1
bigquery_project
Total accumulation of connection results with BigQuery Write API. Sampled every 60 seconds. After sampling, data is not visible for up to 360 seconds.
result :
String representation of status code .
write/server_side_latencies
BETA
(project)
server side latency
DELTA , DISTRIBUTION , 1
bigquery_project
The latency distribution (in milliseconds) in BigQuery Write API frontend from receiving a AppendRowsRequest to sending a AppendRowsResponse. Sampled every 60 seconds. After sampling, data is not visible for up to 360 seconds.
write/transcoding_latencies
BETA
(project)
transcoding latency
DELTA , DISTRIBUTION , 1
bigquery_project
The transcoding latency distribution (in milliseconds) in BigQuery Write API frontend. Sampled every 60 seconds. After sampling, data is not visible for up to 360 seconds.
write/uploaded_bytes_count
BETA
(project)
Uploaded bytes count
DELTA , INT64 , 1
bigquery_project
Total accumulation of BigQuery Write API ingested bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 360 seconds.
result :
String representation of status code .
write/uploaded_row_count
BETA
(project)
Uploaded rows count
DELTA , INT64 , 1
bigquery_project
Total accumulation of BigQuery Write API ingested rows. Sampled every 60 seconds. After sampling, data is not visible for up to 360 seconds.
result :
String representation of status code .
bigtable
Metrics from Bigtable .
Launch stages of these metrics:
BETA
GA
The "metric type" strings in this table must be prefixed
with bigtable.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
backup/bytes_used
GA
(project)
Backup storage used.
GAUGE , INT64 , By
bigtable_backup
Backup storage used in bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
source_table :
The source table of the backup.
storage_type :
Type of disk storage.
client/application_blocking_latencies
GA
(project)
Application Blocking Latencies
DELTA , DISTRIBUTION , ms
bigtable_table
The total latency introduced by your application when Cloud Bigtable has available response data but your application has not consumed it. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
method :
Cloud Bigtable API method.
app_profile :
Cloud Bigtable application profile.
client_name :
Cloud Bigtable client name.
client/attempt_latencies
GA
(project)
Attempt Latencies
DELTA , DISTRIBUTION , ms
bigtable_table
Client observed latency per RPC attempt. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
method :
Cloud Bigtable API method.
app_profile :
Cloud Bigtable application profile.
streaming :
(BOOL)
Cloud Bigtable streaming method.
status :
Cloud Bigtable attempt status.
client_name :
Cloud Bigtable client name.
client/client_blocking_latencies
GA
(project)
Client Blocking Latencies
DELTA , DISTRIBUTION , ms
bigtable_table
The latency introduced by the client by blocking on sending more requests to the server when there are too many pending requests in bulk operations. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
method :
Cloud Bigtable API method.
app_profile :
Cloud Bigtable application profile.
client_name :
Cloud Bigtable client name.
client/connectivity_error_count
GA
(project)
Connectivity Error Count
DELTA , INT64 , 1
bigtable_table
Number of requests that failed to reach the Google network. (Requests without google response headers). Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
method :
Cloud Bigtable API method.
app_profile :
Cloud Bigtable application profile.
status :
Cloud Bigtable operation status.
client_name :
Cloud Bigtable client name.
client/first_response_latencies
GA
(project)
First Response Latencies
DELTA , DISTRIBUTION , ms
bigtable_table
Latency from operation start until the response headers were received. The publishing of the measurement will be delayed until the attempt response has been received. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
method :
Cloud Bigtable API method.
app_profile :
Cloud Bigtable application profile.
status :
Cloud Bigtable operation status.
client_name :
Cloud Bigtable client name.
client/operation_latencies
GA
(project)
Operation Latencies
DELTA , DISTRIBUTION , ms
bigtable_table
Distribution of the total end-to-end latency across all RPC attempts associated with a Bigtable operation. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
method :
Cloud Bigtable API method.
app_profile :
Cloud Bigtable application profile.
streaming :
(BOOL)
Cloud Bigtable streaming method.
status :
Cloud Bigtable operation status.
client_name :
Cloud Bigtable client name.
client/retry_count
GA
(project)
Retry Count
DELTA , INT64 , 1
bigtable_table
The number of additional RPCs sent after the initial attempt. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
method :
Cloud Bigtable API method.
app_profile :
Cloud Bigtable application profile.
status :
Cloud Bigtable operation status.
client_name :
Cloud Bigtable client name.
client/server_latencies
GA
(project)
Server Latencies
DELTA , DISTRIBUTION , ms
bigtable_table
The latency measured between the time when Google frontend receives an RPC and sending back the first byte of the response. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
method :
Cloud Bigtable API method.
app_profile :
Cloud Bigtable application profile.
streaming :
(BOOL)
Cloud Bigtable streaming method.
status :
Cloud Bigtable operation status.
client_name :
Cloud Bigtable client name.
cluster/autoscaling/max_node_count
GA
(project)
Maximum nodes
GAUGE , INT64 , 1
bigtable_cluster
Maximum number of nodes in an autoscaled cluster. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
storage_type :
Storage type for the cluster.
cluster/autoscaling/min_node_count
GA
(project)
Minimum nodes
GAUGE , INT64 , 1
bigtable_cluster
Minimum number of nodes in an autoscaled cluster. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
storage_type :
Storage type for the cluster.
cluster/autoscaling/recommended_node_count_for_cpu
GA
(project)
Recommended nodes based on CPU
GAUGE , INT64 , 1
bigtable_cluster
Recommended number of nodes in an autoscaled cluster based on CPU usage. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
cluster/autoscaling/recommended_node_count_for_storage
GA
(project)
Recommended nodes based on storage
GAUGE , INT64 , 1
bigtable_cluster
Recommended number of nodes in an autoscaled cluster based on storage usage. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
cluster/cpu_load
GA
(project)
CPU load
GAUGE , DOUBLE , 1
bigtable_cluster
CPU load of a cluster. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
cluster/cpu_load_by_app_profile_by_method_by_table
GA
(project)
CPU load by app profile, method, and table
GAUGE , DOUBLE , 1
bigtable_cluster
CPU load of a cluster. Split by app profile, method, and table. Contains the same underlying data as bigtable.googleapis.com/cluster/cpu_load. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
app_profile :
Cloud Bigtable application profile.
method :
Cloud Bigtable API method.
table :
Cloud Bigtable table name.
cluster/cpu_load_hottest_node
GA
(project)
CPU load (hottest node)
GAUGE , DOUBLE , 1
bigtable_cluster
CPU load of the busiest node in a cluster. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
cluster/cpu_load_hottest_node_high_granularity
GA
(project)
CPU load (hottest node) high granularity
GAUGE , DOUBLE , 1
bigtable_cluster
CPU load of the busiest node in a cluster sampled at a high granularity. Sampled every 60 seconds. After sampling, data is not visible for up to 300 seconds.
cluster/disk_load
GA
(project)
Disk load
GAUGE , DOUBLE , 1
bigtable_cluster
Utilization of HDD disks in a cluster. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
cluster/node_count
GA
(project)
Nodes
GAUGE , INT64 , 1
bigtable_cluster
Number of nodes in a cluster. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
storage_type :
Storage type for the cluster.
cluster/storage_utilization
GA
(project)
Storage utilization
GAUGE , DOUBLE , 1
bigtable_cluster
Storage used as a fraction of total storage capacity. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
storage_type :
Storage type for the cluster.
disk/bytes_used
GA
(project)
Data stored
GAUGE , INT64 , By
bigtable_cluster
Amount of compressed data for tables stored in a cluster. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
storage_type :
Type of disk storage.
disk/per_node_storage_capacity
GA
(project)
Storage capacity per node
GAUGE , INT64 , By
bigtable_cluster
Capacity of compressed data for tables that can be stored per node in the cluster. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
storage_type :
Storage type for the cluster.
disk/storage_capacity
GA
(project)
Storage capacity
GAUGE , INT64 , By
bigtable_cluster
Capacity of compressed data for tables that can be stored in a cluster. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
storage_type :
Storage type for the cluster.
materialized_view/intermediate_storage
BETA
(project)
Data for intermediate processing.
GAUGE , INT64 , By
bigtable_materialized_view
Amount of data used by intermediate processing for the materialized view in bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
storage_type :
Type of disk storage.
materialized_view/max_delay
BETA
(project)
Maximum processing delay
GAUGE , INT64 , s
bigtable_materialized_view
Upper bound of processing delay for the materialized view. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
materialized_view/storage
BETA
(project)
Materialized view data.
GAUGE , INT64 , By
bigtable_materialized_view
Amount of data used for the materialized view storage in bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
storage_type :
Type of disk storage.
materialized_view/system_errors
BETA
(project)
System error count
DELTA , INT64 , 1
bigtable_materialized_view
Number of errors from system for the materialized view. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
canonical_status :
Canonical error status.
materialized_view/user_errors
BETA
(project)
User error count
DELTA , INT64 , 1
bigtable_materialized_view
Number of errors from user data for the materialized view. Sampled every 60 seconds. After sampling, data is not visible for up to 60 seconds.
canonical_status :
Canonical error status.
memory_layer/hit_ratio
BETA
(project)
Memory layer hit ratio
GAUGE , DOUBLE , 1
bigtable_table
Ratio of number of read requests that successfully read from the memory layer compared to all memory eligible read requests. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
method :
Cloud Bigtable API method.
app_profile :
Cloud Bigtable application profile.
memory_layer/max_request_units
BETA
(project)
Memory layer max request units
GAUGE , INT64 , 1
bigtable_cluster
Maximum number of Request-Units per second used in a 5 minute window. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
memory_layer/read_latencies
BETA
(project)
Memory layer read request latencies
DELTA , DISTRIBUTION , 1
bigtable_table
Distribution of server read request latencies for a table that attempted to reach the memory layer. The latency is measured between the time when Cloud Bigtable (behind the Google frontend) receives an RPC and the time when it sends back the last byte of the response. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
method :
Cloud Bigtable API method.
app_profile :
Cloud Bigtable application profile.
memory_access :
Whether the memory read was successful in this request.
memory_layer/read_request_count
BETA
(project)
Memory layer read request count
DELTA , INT64 , 1
bigtable_table
Number of read requests for a table that went to the memory layer, broken down by whether the memory read was successful. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
method :
Cloud Bigtable API method.
app_profile :
Cloud Bigtable application profile.
memory_access :
Whether the memory read was successful in this request.
memory_layer/request_unit_count
BETA
(project)
Memory layer request unit count
DELTA , DOUBLE , 1
bigtable_table
The Request-Unit usage for read requests that attempt to use the memory layer. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
method :
Cloud Bigtable API method.
app_profile :
Cloud Bigtable application profile.
memory_access :
Whether the memory read was successful in this request.
memory_layer/storage_capacity
BETA
(project)
Memory layer storage capacity
GAUGE , INT64 , By
bigtable_cluster
Memory layer storage capacity in bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
replication/latency
GA
(project)
Replication latencies
DELTA , DISTRIBUTION , ms
bigtable_table
Distribution of the replication latencies of mutations to a table, measured as the difference between the commit time at the source and destination clusters. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
source_cluster :
Source cluster of the replicated data.
source_zone :
Source zone of the replicated data.
replication/max_delay
GA
(project)
Replication maximum delay
GAUGE , DOUBLE , s
bigtable_table
Upper bound for replication delay between clusters of a table. Indicates the time frame during which latency information may not be accurate. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
source_cluster :
Source cluster of the replicated data.
source_zone :
Source zone of the replicated data.
server/data_boost/eligibility_count
GA
(project)
Data Boost traffic eligibility count
DELTA , INT64 , 1
bigtable_table
Current Bigtable requests that are eligible and ineligible for Data Boost. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
app_profile :
Cloud Bigtable application profile.
eligibility :
Whether request is eligible for Data Boost.
server/data_boost/ineligible_reasons
GA
(project)
Data Boost traffic ineligible reasons
GAUGE , INT64 , 1
bigtable_table
Reasons that current traffic is ineligible for Data Boost. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
app_profile :
Cloud Bigtable application profile.
ineligible_reason :
Reason that request is ineligible for Data Boost.
server/data_boost/spu_usage
GA
(project)
Data Boost SPU Usage
GAUGE , INT64 , 1
bigtable_table
The Serverless-Processing-Units usage (in SPU-seconds) for Data Boost requests. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
app_profile :
Cloud Bigtable application profile.
method :
Cloud Bigtable API method.
server/error_count
GA
(project)
Error count
DELTA , INT64 , 1
bigtable_table
Number of server requests for a table that failed with an error. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
method :
Cloud Bigtable API method.
error_code :
gRPC Error Code.
app_profile :
Cloud Bigtable application profile.
server/latencies
GA
(project)
Server Latencies
DELTA , DISTRIBUTION , ms
bigtable_table
Distribution of server request latencies for a table. The latency is measured between the time when Cloud Bigtable (behind the Google frontend) receives an RPC and the time when it sends back the last byte of the response. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
method :
Cloud Bigtable API method.
app_profile :
Cloud Bigtable application profile.
server/modified_rows_count
GA
(project)
Modified rows
DELTA , INT64 , 1
bigtable_table
Number of rows modified by server requests for a table. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
method :
Cloud Bigtable API method.
app_profile :
Cloud Bigtable application profile.
server/multi_cluster_failovers_count
GA
(project)
Multi-cluster failovers
DELTA , INT64 , 1
bigtable_table
Number of failovers during multi-cluster requests. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
method :
Cloud Bigtable API method.
app_profile :
Cloud Bigtable application profile.
server/read_latencies_by_storage_tier
BETA
(project)
Server Read Latencies by Storage Tier
DELTA , DISTRIBUTION , ms
bigtable_table
Distribution of server read request latencies by storage tier for a table. The latency is measured between the time when Cloud Bigtable (behind the Google frontend) receives an RPC and the time when it sends back the last byte of the response. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
method :
Cloud Bigtable API method.
app_profile :
Cloud Bigtable application profile.
storage_tier :
Type of storage tier accessed in the request.
server/read_request_count_by_storage_tier
BETA
(project)
Read request count by Storage Tier
DELTA , INT64 , 1
bigtable_table
Number of server read requests by storage tier for a table. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
method :
Cloud Bigtable API method.
app_profile :
Cloud Bigtable application profile.
storage_tier :
Type of storage tier accessed in the request.
server/received_bytes_count
GA
(project)
Received bytes
DELTA , INT64 , By
bigtable_table
Number of bytes of request data received by servers for a table. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
method :
Cloud Bigtable API method.
app_profile :
Cloud Bigtable application profile.
server/request_count
GA
(project)
Request count
DELTA , INT64 , 1
bigtable_table
Number of server requests for a table. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
method :
Cloud Bigtable API method.
app_profile :
Cloud Bigtable application profile.
server/request_max_per_minute_count
GA
(project)
Five-second maximum requests per minute
DELTA , INT64 , 1
bigtable_table
Maximum number of requests received in a five-second span per minute. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
method :
Cloud Bigtable API method.
app_profile :
Cloud Bigtable application profile.
server/returned_rows_count
GA
(project)
Returned rows
DELTA , INT64 , 1
bigtable_table
Number of rows returned by server requests for a table. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
method :
Cloud Bigtable API method.
app_profile :
Cloud Bigtable application profile.
server/sent_bytes_count
GA
(project)
Sent bytes
DELTA , INT64 , By
bigtable_table
Number of bytes of response data sent by servers for a table. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
method :
Cloud Bigtable API method.
app_profile :
Cloud Bigtable application profile.
table/bytes_transferred_to_infrequent_access
BETA
(project)
Data moved to Infrequent Access
GAUGE , INT64 , By
bigtable_table
Amount of data moved to IA storage. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
table/bytes_used
GA
(project)
Data stored
GAUGE , INT64 , By
bigtable_table
Amount of compressed data stored in a table. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
storage_type :
Type of disk storage.
table/change_stream_log_used_bytes
GA
(project)
Change stream data
GAUGE , INT64 , By
bigtable_table
Amount of disk storage used by the change stream logs. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
storage_type :
Type of disk storage.
billingbudgets
Metrics from the Cloud Billing .
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with billingbudgets.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
quota/budget_count/exceeded
GA
(project)
Budget limit per billing account quota exceeded error
DELTA , INT64 , 1
billingbudgets.googleapis.com/Location
Number of attempts to exceed the limit on quota metric billingbudgets.googleapis.com/budget_count. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
billing_account_id :
Billing account id.
quota/budget_count/limit
GA
(project)
Budget limit per billing account quota limit
GAUGE , INT64 , 1
billingbudgets.googleapis.com/Location
Current limit on quota metric billingbudgets.googleapis.com/budget_count. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
billing_account_id :
Billing account id.
quota/budget_count/usage
GA
(project)
Budget limit per billing account quota usage
GAUGE , INT64 , 1
billingbudgets.googleapis.com/Location
Current usage on quota metric billingbudgets.googleapis.com/budget_count. After sampling, data is not visible for up to 150 seconds.
limit_name :
The limit name.
billing_account_id :
Billing account id.
blockchainnodeengine
Metrics from the Blockchain Node Engine .
Launch stages of these metrics:
BETA
The "metric type" strings in this table must be prefixed
with blockchainnodeengine.googleapis.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
node/active_peers
BETA
(project)
Peer Count
GAUGE , INT64 , 1
blockchainnodeengine.googleapis.com/BlockchainNode
The number of connected peers of the node. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
node/beacon_aggregated_attestation_processing_requests_count
BETA
(project)
Aggregated Attestation Requests Count
DELTA , INT64 , 1
blockchainnodeengine.googleapis.com/BlockchainNode
Total number of all aggregated attestations submitted for processing. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
node/beacon_aggregated_attestation_processing_successes_count
BETA
(project)
Aggregated Attestations Verified For Gossip
DELTA , INT64 , 1
blockchainnodeengine.googleapis.com/BlockchainNode
Total number of aggregated attestations verified for gossip. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
node/beacon_attestation_processing_signature_seconds
BETA
(project)
Signature Verification Latencies
GAUGE , DISTRIBUTION , 1
blockchainnodeengine.googleapis.com/BlockchainNode
Current time spent on the signature verification of attestation processing. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
node/block_height
BETA
(project)
Block Height
GAUGE , INT64 , 1
blockchainnodeengine.googleapis.com/BlockchainNode
The block height of the node. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
node/block_timestamp
BETA
(project)
Block Timestamp
GAUGE , INT64 , 1
blockchainnodeengine.googleapis.com/BlockchainNode
The timestamp of the most recent block. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
node/cpu/utilization
BETA
(project)
CPU Utilization
GAUGE , DOUBLE , 10^2.%
blockchainnodeengine.googleapis.com/BlockchainNode
The amount of work the CPU handles to process resources. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
node/disk/total_ops_count
BETA
(project)
Cumulative Disk Operations
DELTA , INT64 , 1
blockchainnodeengine.googleapis.com/BlockchainNode
Cumulative count of disk reads and writes. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
direction :
Direction of flow of bytes/operations (read or write).
node/memory/utilization
BETA
(project)
Memory Utilization
GAUGE , DOUBLE , 10^2.%
blockchainnodeengine.googleapis.com/BlockchainNode
The amount of memory in use currently by running processes. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
node/pending_transactions
BETA
(project)
Pending Transactions
GAUGE , INT64 , 1
blockchainnodeengine.googleapis.com/BlockchainNode
The number of transactions available to be processed and included in the next block. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
node/total_request_count
BETA
(project)
Request Count
DELTA , INT64 , 1
blockchainnodeengine.googleapis.com/BlockchainNode
The total number of requests received by the node. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
endpoint :
RPC endpoint to which requests are sent.
node/validators_total
BETA
(project)
Validator Count
GAUGE , INT64 , 1
blockchainnodeengine.googleapis.com/BlockchainNode
Total count of validators that are specifically monitored by this beacon node. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
Generated at 2026-04-10 19:48:34 UTC.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
