---
title: "GKE system metrics \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/monitoring/api/metrics_kubernetes
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/monitoring/api/resources
source_metadata:
  url: https://docs.cloud.google.com/monitoring/api/metrics_kubernetes
  title: "GKE system metrics \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation"
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
GKE system metrics
Stay organized with collections
Save and categorize content based on your preferences.
This document lists the metrics available in Cloud Monitoring when
Google Kubernetes Engine (GKE)
system metrics
are enabled.
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
Kubernetes metrics
Metrics from Google Kubernetes Engine .
The following list was last generated at 2026-04-10 19:48:34 UTC.
For more information about this process, see
About the lists .
kubernetes
Metrics for Google Kubernetes Engine . For information on viewing these metrics, go to View observability metrics .
Launch stages of these metrics:
BETA
GA
The "metric type" strings in this table must be prefixed
with kubernetes.io/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
accelerator/partition/state
BETA
(project)
Kubernetes Accelerator Partition State
GAUGE , INT64 , 1
k8s_node_pool
The current state of a partition, state will show the health of the partition. The metric is 1 if the partition state is detected, 0 otherwise. Sampled every 60 seconds.
state :
State of the partition. Such as HEALTHY, UNHEALTHY, etc.
accelerator_type :
Type of the accelerator. Such as tpu7x.
partition_topology :
Topology of the partition. Such as 2x4x4, 4x4x4, etc.
partition_id :
ID of the partition.
slice_id :
ID of the associated slice.
block_id :
ID of the associated block.
accelerator/slice/deformation_durations
BETA
(project)
Kubernetes Accelerator Slice Deformation Duration
CUMULATIVE , DISTRIBUTION , s
k8s_entity
Total distribution of the durations taken to tear down or disassemble a TPU slice and release its underlying resources. Sampled every 60 seconds. Sampled every 60 seconds.
accelerator_type :
Type of the accelerator. Such as tpu7x.
slice_topology :
Topology of the slice. Such as 4x4x4.
block_id :
ID of the associated block.
accelerator/slice/formation_durations
BETA
(project)
Kubernetes Accelerator Slice Formation Duration
CUMULATIVE , DISTRIBUTION , s
k8s_entity
Total distribution of the durations taken to create and assemble a TPU slice from underlying resources. Sampled every 60 seconds. Sampled every 60 seconds.
end_state :
End state of the slice. Such as ACTIVE, FAILED, ACTIVE_DEGRADED.
accelerator_type :
Type of the accelerator. Such as tpu7x.
slice_topology :
Topology of the slice. Such as 4x4x4.
block_id :
ID of the associated block.
accelerator/slice/state
BETA
(project)
Kubernetes Accelerator Slice State
GAUGE , INT64 , 1
k8s_entity
The current state of a slice, state will show the status of the slice. The metric is 1 if the slice state is detected, 0 otherwise. Sampled every 60 seconds.
state :
State of the slice. Such as ACTIVE, FAILED, etc.
accelerator_type :
Type of the accelerator. Such as tpu7x.
slice_topology :
Topology of the slice. Such as 2x4x4, 4x4x4, etc.
block_id :
ID of the associated block.
autoscaler/container/cpu/per_replica_recommended_request_cores
GA
(project)
Recommended per replica request cores
GAUGE , DOUBLE , {cpu}
k8s_scale
Number of CPU cores for the recommended CPU request for a single replica of the workload. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
container_name :
Name of the container.
autoscaler/container/memory/per_replica_recommended_request_bytes
GA
(project)
Recommended per replica request bytes
GAUGE , INT64 , By
k8s_scale
Recommended memory request for a single replica of the workload, in bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
container_name :
Name of the container.
autoscaler/latencies/per_hpa_recommendation_scale_latency_seconds
GA
(project)
Per HPA recommendation scale latency
GAUGE , DOUBLE , s
k8s_scale
HPA Scaling recommendation latency (time between metrics being created and corresponding scaling recommendation being applied to the apiserver) for the HPA target. Sampled every 60 seconds. After sampling, data is not visible for up to 20 seconds.
metric_type :
type is the type of metric source. It should be one of "ContainerResource", "External", "Object", "Pods" or "Resource".
container/accelerator/duty_cycle
GA
(project)
Accelerator duty cycle
GAUGE , INT64 , %
k8s_container
Percent of time over the past sample period (10s) during which the accelerator was actively processing. Values are integers between 0 and 100. Sampled every 60 seconds.
make :
Make of the accelerator (e.g. nvidia)
accelerator_id :
ID of the accelerator.
model :
Model of the accelerator (e.g. 'Tesla P100')
container/accelerator/memory_bandwidth_utilization
GA
(project)
Memory bandwidth utilization
GAUGE , DOUBLE , percent
k8s_container
Current percentage of the accelerator memory bandwidth that is being used. Computed by dividing the memory bandwidth used over a sample period by the maximum supported bandwidth over the same sample period. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
make :
Make of the accelerator.
accelerator_id :
ID of the accelerator.
model :
Model of the accelerator.
tpu_topology :
Topology of the TPU accelerator.
container/accelerator/memory_total
GA
(project)
Accelerator memory total
GAUGE , INT64 , By
k8s_container
Total accelerator memory in bytes. Sampled every 60 seconds.
make :
Make of the accelerator (e.g. nvidia)
accelerator_id :
ID of the accelerator.
model :
Model of the accelerator (e.g. 'Tesla P100')
container/accelerator/memory_used
GA
(project)
Accelerator memory used
GAUGE , INT64 , By
k8s_container
Total accelerator memory allocated in bytes. Sampled every 60 seconds.
make :
Make of the accelerator (e.g. nvidia)
accelerator_id :
ID of the accelerator.
model :
Model of the accelerator (e.g. 'Tesla P100')
container/accelerator/request
GA
(project)
Request accelerators
GAUGE , INT64 , {devices}
k8s_container
Number of accelerator devices requested by the container. Sampled every 60 seconds.
resource_name :
Name of the requested accelerator resource.
container/accelerator/tensorcore_utilization
GA
(project)
Tensorcore utilization
GAUGE , DOUBLE , percent
k8s_container
Current percentage of the Tensorcore that is utilized. Computed by dividing the Tensorcore operations that were performed over a sample period by the supported number of Tensorcore operations over the same sample period. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
make :
Make of the accelerator.
accelerator_id :
ID of the accelerator.
model :
Model of the accelerator.
tpu_topology :
Topology of the TPU accelerator.
container/cpu/core_usage_time
GA
(project)
CPU usage time
CUMULATIVE , DOUBLE , s{CPU}
k8s_container
Cumulative CPU usage on all cores used by the container in seconds. Sampled every 60 seconds.
container/cpu/limit_cores
GA
(project)
Limit cores
GAUGE , DOUBLE , {cpu}
k8s_container
CPU cores limit of the container. Sampled every 60 seconds.
container/cpu/limit_utilization
GA
(project)
CPU limit utilization
GAUGE , DOUBLE , 1
k8s_container
The fraction of the CPU limit that is currently in use on the instance. This value can be greater than 1 as a container might be allowed to exceed its CPU limit for extended periods of time. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
container/cpu/request_cores
GA
(project)
Request cores
GAUGE , DOUBLE , {cpu}
k8s_container
Number of CPU cores requested by the container. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
container/cpu/request_utilization
GA
(project)
CPU request utilization
GAUGE , DOUBLE , 1
k8s_container
The fraction of the requested CPU that is currently in use on the instance. This value can be greater than 1 as usage can exceed the request. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
container/ephemeral_storage/limit_bytes
GA
(project)
Ephemeral storage limit
GAUGE , INT64 , By
k8s_container
Local ephemeral storage limit in bytes. Sampled every 60 seconds.
container/ephemeral_storage/request_bytes
GA
(project)
Ephemeral storage request
GAUGE , INT64 , By
k8s_container
Local ephemeral storage request in bytes. Sampled every 60 seconds.
container/ephemeral_storage/used_bytes
GA
(project)
Ephemeral storage usage
GAUGE , INT64 , By
k8s_container
Local ephemeral storage usage in bytes. Sampled every 60 seconds.
container/memory/limit_bytes
GA
(project)
Memory limit
GAUGE , INT64 , By
k8s_container
Memory limit of the container in bytes. Sampled every 60 seconds.
container/memory/limit_utilization
GA
(project)
Memory limit utilization
GAUGE , DOUBLE , 1
k8s_container
The fraction of the memory limit that is currently in use on the instance. This value cannot exceed 1 as usage cannot exceed the limit. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
memory_type :
Either `evictable` or `non-evictable`. Evictable memory is memory that can be easily reclaimed by the kernel, while non-evictable memory cannot.
container/memory/page_fault_count
GA
(project)
Page faults
CUMULATIVE , INT64 , 1
k8s_container
Number of page faults, broken down by type: major and minor. Sampled every 60 seconds.
fault_type :
Fault type - either 'major' or 'minor', with the former indicating that the page had to be loaded from disk.
container/memory/request_bytes
GA
(project)
Memory request
GAUGE , INT64 , By
k8s_container
Memory request of the container in bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
container/memory/request_utilization
GA
(project)
Memory request utilization
GAUGE , DOUBLE , 1
k8s_container
The fraction of the requested memory that is currently in use on the instance. This value can be greater than 1 as usage can exceed the request. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
memory_type :
Either `evictable` or `non-evictable`. Evictable memory is memory that can be easily reclaimed by the kernel, while non-evictable memory cannot.
container/memory/swap_used_bytes
BETA
(project)
Container swap used bytes
GAUGE , INT64 , By
k8s_container
Bytes of swap memory used by the container. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
container/memory/used_bytes
GA
(project)
Memory usage
GAUGE , INT64 , By
k8s_container
Memory usage in bytes. Sampled every 60 seconds.
memory_type :
Either `evictable` or `non-evictable`. Evictable memory is memory that can be easily reclaimed by the kernel, while non-evictable memory cannot.
container/multislice/accelerator/device_to_host_transfer_latencies
GA
(project)
Device to Host transfer latencies
DELTA , DISTRIBUTION , us
k8s_container
Distribution of device to host transfer latency for each chunk of data for multislice traffic. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
buffer_size :
Size of the buffer.
make :
Make of the accelerator.
model :
Model of the accelerator.
tpu_topology :
Topology of the TPU accelerator.
container/multislice/accelerator/host_to_device_transfer_latencies
GA
(project)
Host to Device transfer latencies
DELTA , DISTRIBUTION , us
k8s_container
Distribution of host to device transfer latency for each chunk of data for multislice traffic. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
buffer_size :
Size of the buffer.
make :
Make of the accelerator.
model :
Model of the accelerator.
tpu_topology :
Topology of the TPU accelerator.
container/multislice/network/collective_end_to_end_latencies
GA
(project)
Collective latencies
DELTA , DISTRIBUTION , us
k8s_container
Distribution of end to end collective latency for multislice traffic. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
collective_type :
Collective operation type.
input_size :
Size of the message.
make :
Make of the accelerator.
model :
Model of the accelerator.
tpu_topology :
Topology of the TPU accelerator.
container/multislice/network/dcn_transfer_latencies
GA
(project)
DCN (Data Center Network) transfer latencies
DELTA , DISTRIBUTION , us
k8s_container
Distribution of network transfer latencies for multislice traffic. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
buffer_size :
Size of the buffer.
make :
Make of the accelerator.
model :
Model of the accelerator.
tpu_topology :
Topology of the TPU accelerator.
type :
Protocol Type.
container/multislice/network/grpc_tcp_delivery_rates
BETA
(project)
GRPC TCP Delivery Rates
DELTA , DISTRIBUTION , Mbps
k8s_container
Distribution of gRPC TCP delivery rates for multislice traffic. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
make :
Make of the accelerator.
model :
Model of the accelerator.
tpu_topology :
Topology of the TPU accelerator.
container/multislice/network/grpc_tcp_min_round_trip_times
BETA
(project)
GRPC TCP Minimum Round Trip Times
DELTA , DISTRIBUTION , us
k8s_container
Distribution of gRPC TCP min round trip times for multislice traffic. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
make :
Make of the accelerator.
model :
Model of the accelerator.
tpu_topology :
Topology of the TPU accelerator.
container/restart_count
GA
(project)
Restart count
CUMULATIVE , INT64 , 1
k8s_container
Number of times the container has restarted. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
container/uptime
GA
(project)
Uptime
GAUGE , DOUBLE , s
k8s_container
Time in seconds that the container has been running. Sampled every 60 seconds.
gcsfusecsi/file_cache_read_bytes_count
BETA
(project)
File cache read bytes count
CUMULATIVE , INT64 , By
k8s_pod
The cumulative number of bytes read from file cache along with read type - Sequential/Random. Sampled every 10 seconds.
read_type :
Type of read, either sequential or random.
volume_name :
Name of the GCSFuse CSI backed volume.
bucket_name :
Name of the GCS Bucket.
pod_uid :
Pod UID.
gcsfusecsi/file_cache_read_count
BETA
(project)
File cache read count
CUMULATIVE , INT64 , 1
k8s_pod
Specifies the cumulative number of read requests made via file cache along with type - Sequential/Random and cache hit - true/false. Sampled every 10 seconds.
cache_hit :
(BOOL)
Cache hit or miss.
read_type :
Type of read, either sequential or random.
volume_name :
Name of the GCSFuse CSI backed volume.
bucket_name :
Name of the GCS Bucket.
pod_uid :
Pod UID.
gcsfusecsi/file_cache_read_latencies
BETA
(project)
File cache read latencies
CUMULATIVE , DISTRIBUTION , us
k8s_pod
The cumulative distribution of the file cache read latencies along with cache hit - true/false. Sampled every 10 seconds.
cache_hit :
(BOOL)
Cache hit or miss.
volume_name :
Name of the GCSFuse CSI backed volume.
bucket_name :
Name of the GCS Bucket.
pod_uid :
Pod UID.
gcsfusecsi/fs_ops_count
BETA
(project)
File system operations count
CUMULATIVE , INT64 , 1
k8s_pod
The cumulative number of operations processed by the filesystem. Sampled every 10 seconds.
fs_op :
Filesystem operation type.
volume_name :
Name of the GCSFuse CSI backed volume.
bucket_name :
Name of the GCS Bucket.
pod_uid :
Pod UID.
gcsfusecsi/fs_ops_error_count
BETA
(project)
File system operations error count
CUMULATIVE , INT64 , 1
k8s_pod
The cumulative number of errors generated by filesystem operations. Sampled every 10 seconds.
fs_op :
Filesystem operation type.
fs_error_category :
Filesystem error category.
volume_name :
Name of the GCSFuse CSI backed volume.
bucket_name :
Name of the GCS Bucket.
pod_uid :
Pod UID.
gcsfusecsi/fs_ops_latencies
BETA
(project)
File system operation latencies
CUMULATIVE , DISTRIBUTION , us
k8s_pod
The cumulative distribution of filesystem operation latencies. Sampled every 10 seconds.
fs_op :
Filesystem operation type.
volume_name :
Name of the GCSFuse CSI backed volume.
bucket_name :
Name of the GCS Bucket.
pod_uid :
Pod UID.
gcsfusecsi/gcs_download_bytes_count
BETA
(project)
GCS download bytes count
CUMULATIVE , INT64 , By
k8s_pod
The cumulative number of bytes downloaded from GCS along with type - Sequential/Random. Sampled every 10 seconds.
read_type :
Type of read, either sequential or random.
volume_name :
Name of the GCSFuse CSI backed volume.
bucket_name :
Name of the GCS Bucket.
pod_uid :
Pod UID.
gcsfusecsi/gcs_read_bytes_count
BETA
(project)
GCS read bytes count
CUMULATIVE , INT64 , By
k8s_pod
The cumulative number of bytes read from GCS objects. Sampled every 10 seconds.
volume_name :
Name of the GCSFuse CSI backed volume.
bucket_name :
Name of the GCS Bucket.
pod_uid :
Pod UID.
gcsfusecsi/gcs_read_count
BETA
(project)
GCS read count
CUMULATIVE , INT64 , 1
k8s_pod
Specifies the cumulative number of GCS reads made along with type - Sequential/Random. Sampled every 10 seconds.
read_type :
Type of read, either sequential or random.
volume_name :
Name of the GCSFuse CSI backed volume.
bucket_name :
Name of the GCS Bucket.
pod_uid :
Pod UID.
gcsfusecsi/gcs_reader_count
BETA
(project)
GCS reader count
CUMULATIVE , INT64 , 1
k8s_pod
The cumulative number of GCS object readers opened or closed. Sampled every 10 seconds.
io_method :
The name of the IO method.
volume_name :
Name of the GCSFuse CSI backed volume.
bucket_name :
Name of the GCS Bucket.
pod_uid :
Pod UID.
gcsfusecsi/gcs_request_count
BETA
(project)
GCS request count
CUMULATIVE , INT64 , 1
k8s_pod
The cumulative number of GCS requests processed. Sampled every 10 seconds.
gcs_method :
The name of the GCS method.
volume_name :
Name of the GCSFuse CSI backed volume.
bucket_name :
Name of the GCS Bucket.
pod_uid :
Pod UID.
gcsfusecsi/gcs_request_latencies
BETA
(project)
GCS request latencies
CUMULATIVE , DISTRIBUTION , ms
k8s_pod
The cumulative distribution of GCS request latencies. Sampled every 10 seconds.
gcs_method :
The name of the GCS method.
volume_name :
Name of the GCSFuse CSI backed volume.
bucket_name :
Name of the GCS Bucket.
pod_uid :
Pod UID.
jobset/assigned_node_pools
GA
(project)
Node Pools where Jobset Pods are Scheduled
GAUGE , BOOL , 1
k8s_entity
GKE node pools where a Kubernetes Jobset has scheduled Pods. Jobset's entity_uid will be left empty if its value is not found in Jobset Pod labels. A value of True indicates that there is at least one Jobset Pod scheduled in the node pool; a value of False is written to mark the moment when this is no longer the case. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
node_pool_name :
The node pool name where at least one Jobset Pod is scheduled.
jobset/assigned_nodes
GA
(project)
Nodes where Jobset Pods are Scheduled
GAUGE , BOOL , 1
k8s_entity
GKE nodes where a Kubernetes Jobset has scheduled Pods. Jobset's entity_uid will be left empty if its value is not found in Jobset Pod labels. A value of True indicates that there is at least one Jobset Pod scheduled in the node; a value of False is written to mark the moment when this is no longer the case. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
node_name :
The node name where at least one Jobset Pod is scheduled.
jobset/assigned_slices
BETA
(project)
Slices where Jobset Pods are Scheduled
GAUGE , BOOL , 1
k8s_entity
The TPU slices where a Kubernetes jobset is scheduled. A value of True indicates that there is at least one Jobset scheduled in the slice; a value of False is written to mark the moment when this is no longer the case. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
slice_id :
The slice name where at least one Jobset Pod is scheduled.
node_pool_name :
The node pool name of the slice and the corresponding jobset.
block_id :
The superpod ID of slice's associated block.
accelerator_type :
Type of the accelerator. Such as tpu7x.
jobset/proxy_runtime_goodput
BETA
(project)
JobSet Proxy Runtime Goodput
GAUGE , DOUBLE , 1
k8s_entity
The duration when all active accelerators are productive (duty_cycle > 10). Sampled every 60 seconds. After sampling, data is not visible for up to 3600 seconds.
jobset/scheduling_goodput
BETA
(project)
JobSet Scheduling Goodput
GAUGE , DOUBLE , 1
k8s_entity
The duration when the GKE resources (k8s pods) are ready to run the GKE training jobs. Sampled every 60 seconds. After sampling, data is not visible for up to 3600 seconds.
jobset/startup_duration
BETA
(project)
Jobset Startup Duration
GAUGE , DOUBLE , s
k8s_entity
The duration time in seconds from a JobSet's creation to its initial availability or the current time. The metric is available when a JobSet is created. This metric does not include a JobSet older than 7 days. It is expected that the sample has a discrepancy up to 60s due to processing latency. Sampled every 60 seconds. This metric is only applicable for JobSets with one single GPU/TPU replicated job. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
jobset/times_between_interruptions
GA
(project)
Distribution of times between the end of last interruption and beginning of current interruption.
GAUGE , DISTRIBUTION , s
k8s_entity
Distribution of times between the end of last interruption and beginning of current interruption for a JobSet. Each sample indicates a single duration between last and current interruption. The data is sampled within 60s after the current interruption starts, and emitted within 1h. This metric may not include a sample for duration between interruption shorter than 60s or longer than 7 days. It is expected that the sample has a discrepancy up to 60s due to processing latency. This metric is only applicable for JobSets with one single GPU/TPU replicated jobs (i.e., JobSets could contain non-GPU/TPU replicated jobs, but there should be only one GPU/TPU replicated job). The metric calculation is only based on the availability of that single GPU/TPU replicated job. The first uptime period after provisioning is included as a TBI. The last uptime period before terminating is included as a TBI only if the JobSet completes due to failures. Sampled every 60 seconds. After sampling, data is not visible for up to 3600 seconds.
jobset/times_to_recover
GA
(project)
Distribution of recovery period durations.
GAUGE , DISTRIBUTION , s
k8s_entity
Distribution of recovery period durations. Each sample indicates a single recovery operation for the JobSet to recover from a downtime period. The data is sampled within 60s after the completion of JobSet recovery, and emitted within 1h. This metric may not include a sample for downtime periods shorter than 60s or longer than 7 days. It is expected that the sample has a discrepancy up to 60s due to processing latency. This metric is only applicable for JobSets with one single GPU/TPU replicated jobs (i.e., JobSets could contain non-GPU/TPU replicated jobs, but there should be only one GPU/TPU replicated job). The metric calculation is only based on the availability of that single GPU/TPU replicated job. The provisioning period is not considered as a TTR. Sampled every 60 seconds. After sampling, data is not visible for up to 3600 seconds.
jobset/uptime
GA
(project)
Time in seconds that the JobSet has been up.
GAUGE , DOUBLE , s
k8s_entity
Total time the JobSet has been available. The data is sampled every 60s and emitted within 1h after sampling. This metric may not include a sample for JobSets being up less than 120s. This metric is only applicable for JobSets with one single GPU/TPU replicated jobs (i.e., JobSets could contain non-GPU/TPU replicated jobs, but there should be only one GPU/TPU replicated job). The metric calculation is only based on the availability of that single GPU/TPU replicated job. Sampled every 60 seconds. After sampling, data is not visible for up to 3600 seconds.
networking/dns/kubedns/dns_cache_request_count
BETA
(project)
KubeDNS Cache Hit/Miss Count
DELTA , INT64 , 1
k8s_container
Total number of KubeDNS cache hits and misses. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
dns_zone :
DNS zones.
status :
Cache status: cache_hit or cache_miss.
server :
DNS server IP.
view :
DNS view name.
type :
Indicates if this was a success or denial (NXDOMAIN).
networking/dns/kubedns/dns_request_count
BETA
(project)
KubeDNS Request Count
DELTA , INT64 , 1
k8s_container
Total number of DNS requests processed by KubeDNS. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
family :
The address family of the transport (ipv4 or ipv6).
type :
Query type (e.g. A, AAAA, MX, ...).
proto :
Transport protocol used for DNS query.
dns_zone :
DNS zone.
server :
DNS server IP.
view :
DNS view name.
networking/dns/kubedns/dns_request_latencies
BETA
(project)
KubeDNS Request Latency
DELTA , DISTRIBUTION , s
k8s_container
Histogram of the time (in seconds) each KubeDNS request took. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
dns_zone :
DNS zone.
view :
DNS view name.
server :
DNS server IP.
type :
Query type (e.g. A, AAAA, MX, ...).
networking/dns/kubedns/forwarding_request_latencies
BETA
(project)
KubeDNS Upstream Request Latency
DELTA , DISTRIBUTION , s
k8s_container
Histogram of the time (in seconds) each forwarded KubeDNS request took. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
type :
Query type (e.g. A, AAAA, MX, ...).
rcode :
DNS return code.
to :
Upstream DNS server.
proxy_name :
Proxy name.
networking/dns/kubedns/max_concurrent_rejected_request_count
BETA
(project)
KubeDNS Max Concurrent Reject Count
DELTA , INT64 , 1
k8s_container
Total number of KubeDNS queries rejected because the number of concurrent queries were at maximum. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
networking/dns/node_local_dns/dns_cache_request_count
BETA
(project)
NodeLocalDNS Cache Hit/Miss Count
DELTA , INT64 , 1
k8s_node
Total number of NodeLocalDNS cache hits and misses. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
dns_zone :
DNS zones.
status :
Cache status: cache_hit or cache_miss.
server :
DNS server IP.
type :
Indicates if this was a success or denial (NXDOMAIN).
networking/dns/node_local_dns/dns_request_count
BETA
(project)
NodeLocalDNS Request Count
DELTA , INT64 , 1
k8s_node
Total number of DNS requests processed by NodeLocalDNS. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
family :
The address family of the transport (ipv4 or ipv6).
type :
Query type (e.g. A, AAAA, MX, ...).
proto :
Transport protocol used for DNS query.
dns_zone :
DNS zone.
server :
DNS server IP.
view :
DNS view name.
networking/dns/node_local_dns/dns_request_latencies
BETA
(project)
NodeLocalDNS Request Latency
DELTA , DISTRIBUTION , s
k8s_node
Histogram of the time (in seconds) each NodeLocalDNS request took. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
dns_zone :
DNS zone.
view :
DNS view name.
server :
DNS server IP.
type :
Query type (e.g. A, AAAA, MX, ...).
networking/dns/node_local_dns/forwarding_request_latencies
BETA
(project)
NodeLocalDNS Upstream Request Latency
DELTA , DISTRIBUTION , s
k8s_node
Histogram of the time (in seconds) each forwarded NodeLocalDNS request took. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
type :
Query type (e.g. A, AAAA, MX, ...).
rcode :
DNS return code.
to :
Upstream DNS server.
proxy_name :
Proxy name.
networking/dns/node_local_dns/max_concurrent_rejected_request_count
BETA
(project)
NodeLocalDNS Max Concurrent Reject Count
DELTA , INT64 , 1
k8s_node
Total number of NodeLocalDNS queries rejected because the number of concurrent queries were at maximum. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
node/accelerator/duty_cycle
GA
(project)
Accelerator duty cycle with node
GAUGE , DOUBLE , percent
k8s_node
Percent of time over the past sample period (10s) during which the accelerator was actively processing. Sampled every 60 seconds.
make :
Make of the accelerator.
accelerator_id :
ID of the accelerator.
model :
Model of the accelerator.
node/accelerator/memory_bandwidth_utilization
GA
(project)
Memory bandwidth utilization
GAUGE , DOUBLE , percent
k8s_node
Current percentage of the accelerator memory bandwidth that is being used. Computed by dividing the memory bandwidth used over a sample period by the maximum supported bandwidth over the same sample period. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
make :
Make of the accelerator.
accelerator_id :
ID of the accelerator.
model :
Model of the accelerator.
tpu_topology :
Topology of the TPU accelerator.
node/accelerator/memory_total
GA
(project)
Accelerator memory total with node
GAUGE , INT64 , bytes
k8s_node
Total accelerator memory in bytes. Sampled every 60 seconds.
make :
Make of the accelerator.
accelerator_id :
ID of the accelerator.
model :
Model of the accelerator.
node/accelerator/memory_used
GA
(project)
Accelerator memory used with node
GAUGE , INT64 , bytes
k8s_node
Total accelerator memory allocated in bytes. Sampled every 60 seconds.
make :
Make of the accelerator.
accelerator_id :
ID of the accelerator.
model :
Model of the accelerator.
node/accelerator/tensorcore_utilization
GA
(project)
Tensorcore utilization
GAUGE , DOUBLE , percent
k8s_node
Current percentage of the Tensorcore that is utilized. Computed by dividing the Tensorcore operations that were performed over a sample period by the supported number of Tensorcore operations over the same sample period. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
make :
Make of the accelerator.
accelerator_id :
ID of the accelerator.
model :
Model of the accelerator.
tpu_topology :
Topology of the TPU accelerator.
node/assigned_jobsets
GA
(project)
Nodes where Jobset Pods are Scheduled
GAUGE , BOOL , 1
k8s_node
GKE nodes where a Kubernetes Jobset has scheduled Pods. jobset_uid will be left empty if its value is not found in Jobset Pod labels. A value of True indicates that there is at least one Jobset Pod scheduled in the node; a value of False is written to mark the moment when this is no longer the case. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
jobset_namespace :
The namespace name where at least one Jobset Pod is scheduled.
jobset_name :
The Jobset name where at least one Jobset Pod is scheduled.
jobset_uid :
The jobset_uid field is populated with the Jobset's UID if found in Pod labels. Otherwise, the field is left empty.
node/cpu/allocatable_cores
GA
(project)
Allocatable cores
GAUGE , DOUBLE , {cpu}
k8s_node
Number of allocatable CPU cores on the node. Sampled every 60 seconds.
node/cpu/allocatable_utilization
GA
(project)
CPU allocatable utilization
GAUGE , DOUBLE , 1
k8s_node
The fraction of the allocatable CPU that is currently in use on the instance. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
node/cpu/core_usage_time
GA
(project)
CPU usage time
CUMULATIVE , DOUBLE , s{CPU}
k8s_node
Cumulative CPU usage on all cores used on the node in seconds. Sampled every 60 seconds.
node/cpu/total_cores
GA
(project)
Total cores
GAUGE , DOUBLE , {cpu}
k8s_node
Total number of CPU cores on the node. Sampled every 60 seconds.
node/ephemeral_storage/allocatable_bytes
GA
(project)
Allocatable ephemeral storage
GAUGE , INT64 , By
k8s_node
Local ephemeral storage bytes allocatable on the node. Sampled every 60 seconds.
node/ephemeral_storage/inodes_free
GA
(project)
Free inodes
GAUGE , INT64 , 1
k8s_node
Free number of inodes on local ephemeral storage. Sampled every 60 seconds.
node/ephemeral_storage/inodes_total
GA
(project)
Total inodes
GAUGE , INT64 , 1
k8s_node
Total number of inodes on local ephemeral storage. Sampled every 60 seconds.
node/ephemeral_storage/total_bytes
GA
(project)
Total ephemeral storage
GAUGE , INT64 , By
k8s_node
Total ephemeral storage bytes on the node. Sampled every 60 seconds.
node/ephemeral_storage/used_bytes
GA
(project)
Ephemeral storage usage
GAUGE , INT64 , By
k8s_node
Local ephemeral storage bytes used by the node. Sampled every 60 seconds.
node/interruption_count
GA
(project)
Interruption Count
GAUGE , INT64 , 1
k8s_node
Interruptions are system evictions of infrastructure while the customer is in control of that infrastructure. This metric is the current count of interruptions by type and reason. The stream is often undefined when the count is zero. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
interruption_type :
Type of interruption.
interruption_reason :
Reason for interruption.
node/latencies/startup
GA
(project)
Node startup latency
GAUGE , INT64 , s
k8s_node
The total startup latency of the node, from GCE instance's CreationTimestamp to K8s node ready first time. Sampled every 60 seconds.
accelerator_family :
A classification of nodes based on hardware accelerators: gpu, tpu, cpu.
kube_control_plane_available :
Whether the node creation request was received when KCP (kube control plane) was available.
node/logs/input_bytes
GA
(project)
Logging throughput
DELTA , INT64 , By
k8s_node
Volume of log bytes generated on the node by user and system workloads. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
type :
Type is either 'system' or 'workload'. 'system' indicates the logging throughput of GKE system components. 'workload' indicates the throughput of logs generated by non-system containers running on user nodes.
node/memory/allocatable_bytes
GA
(project)
Allocatable memory
GAUGE , INT64 , By
k8s_node
Number of bytes of memory that can be allocated for workloads on the node. Sampled every 60 seconds.
node/memory/allocatable_utilization
GA
(project)
Memory allocatable utilization
GAUGE , DOUBLE , 1
k8s_node
The fraction of the allocatable memory that is currently in use on the instance. This value cannot exceed 1 as usage cannot exceed allocatable memory bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
memory_type :
Either `evictable` or `non-evictable`. Evictable memory is memory that can be easily reclaimed by the kernel, while non-evictable memory cannot.
component :
Name of the respective system daemon.
node/memory/swap_used_bytes
BETA
(project)
Node swap used bytes
GAUGE , INT64 , By
k8s_node
Bytes of swap memory used by the node. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
node/memory/total_bytes
GA
(project)
Total memory
GAUGE , INT64 , By
k8s_node
Total number of bytes of memory on the node. Sampled every 60 seconds.
node/memory/used_bytes
GA
(project)
Memory usage
GAUGE , INT64 , By
k8s_node
Cumulative memory bytes used by the node. Sampled every 60 seconds.
memory_type :
Either `evictable` or `non-evictable`. Evictable memory is memory that can be easily reclaimed by the kernel, while non-evictable memory cannot.
node/network/received_bytes_count
GA
(project)
Bytes received
CUMULATIVE , INT64 , By
k8s_node
Cumulative number of bytes received by the node over the network. Sampled every 60 seconds.
node/network/sent_bytes_count
GA
(project)
Bytes transmitted
CUMULATIVE , INT64 , By
k8s_node
Cumulative number of bytes transmitted by the node over the network. Sampled every 60 seconds.
node/pid_limit
GA
(project)
PID capacity
GAUGE , INT64 , 1
k8s_node
The max PID of OS on the node. Sampled every 60 seconds.
node/pid_used
GA
(project)
PID usage
GAUGE , INT64 , 1
k8s_node
The number of running process in the OS on the node. Sampled every 60 seconds.
node/status_condition
GA
(project)
Kubernetes node status condition
GAUGE , BOOL , 1
k8s_node
Condition of a node from the node status condition field. Ready has `Unknown` status if the node controller has not heard from the node in the last `node-monitor-grace-period`. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
status :
Status of the condition. True, False, or Unknown.
condition :
The condition of the node.
node_daemon/cpu/core_usage_time
GA
(project)
CPU usage time
CUMULATIVE , DOUBLE , s{CPU}
k8s_node
Cumulative CPU usage on all cores used by the node level system daemon in seconds. Sampled every 60 seconds.
component :
Name of the respective system daemon.
node_daemon/memory/used_bytes
GA
(project)
Memory usage
GAUGE , INT64 , By
k8s_node
Memory usage by the system daemon in bytes. Sampled every 60 seconds.
component :
Name of the respective system daemon.
memory_type :
Either `evictable` or `non-evictable`. Evictable memory is memory that can be easily reclaimed by the kernel, while non-evictable memory cannot.
node_pool/accelerator/startup_duration
BETA
(project)
Multi-host NodePool Startup Duration
GAUGE , DOUBLE , s
k8s_node_pool
The duration time in seconds from a NodePool's creation to its initial availability or the current time. The metric is available when a NodePool is created. This metric does not include a NodePool older than 7 days. It is expected that the sample has a discrepancy up to 60s due to processing latency. Sampled every 60 seconds. Multi-host TPU node pool only. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
node_pool/accelerator/times_between_interruptions
GA
(project)
Distribution of times between the end of last interruption and beginning of current interruption.
GAUGE , DISTRIBUTION , s
k8s_node_pool
Distribution of times between the end of last interruption and beginning of current interruption. Each sample indicates a single duration between last and current interruption. The data is sampled within 60s after the current interruption starts, and emitted within 1h. This metric may not include a sample for duration periods shorter than 60s or longer than 7 days. The metric is only applicable for GKE multi-host TPU node pools. Sampled every 60 seconds. After sampling, data is not visible for up to 3600 seconds.
node_pool/accelerator/times_to_recover
GA
(project)
Distribution of recovery period durations.
GAUGE , DISTRIBUTION , s
k8s_node_pool
Distribution of recovery period durations. Each sample indicates a single recovery operation for the NodePool to recover from a downtime period. The data is sampled within 60s after the completion of NodePool recovery, and emitted within 1h. This metric may not include a sample for downtime periods shorter than 60s or longer than 7 days. This metric is only applicable for GKE multi-host TPU node pools. Sampled every 60 seconds. After sampling, data is not visible for up to 3600 seconds.
node_pool/assigned_jobsets
GA
(project)
Node Pools where Jobset Pods are Scheduled
GAUGE , BOOL , 1
k8s_node_pool
GKE node pools where a Kubernetes Jobset has scheduled Pods. jobset_uid will be left empty if its value is not found in Jobset Pod labels. A value of True indicates that there is at least one Jobset Pod scheduled in the node pool; a value of False is written to mark the moment when this is no longer the case. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
jobset_namespace :
The namespace name where at least one Jobset Pod is scheduled.
jobset_name :
The Jobset name where at least one Jobset Pod is scheduled.
jobset_uid :
The jobset_uid field is populated with the Jobset's UID if found in Pod labels. Otherwise, the field is left empty.
node_pool/interruption_count
BETA
(project)
Interruption Count
GAUGE , INT64 , 1
k8s_node_pool
The count of interruptions to all nodes in the node pool, by interruption-type and interruption-reason, since the last sample. The stream is often undefined when the count is zero. Sampled every 60 seconds. After sampling, data is not visible for up to 150 seconds.
interruption_type :
Type of interruption.
interruption_reason :
Reason for interruption.
node_pool/multi_host/available
GA
(project)
Kubernetes Multi-host TPU Node Pool Availability
GAUGE , BOOL , 1
k8s_node_pool
Whether or not the multi-host NodePool is available. Is True when all Nodes in the NodePool are available, and False if any of the Nodes in the NodePool are unavailable. Multi-host TPU node pool only. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
unavailability_reason :
Reason for a node pool unavailability. This label is empty when the node pool is available. Possible reasons include `MaintenanceTaint`, `RebootEvent`, `Reconciling`, `Stopping`, `Unallocatable`, `Unhealthy`, `MachineNotRunning`, or `ProvisioningError`.
node_pool/status
GA
(project)
Kubernetes Node Pool Status
GAUGE , BOOL , 1
k8s_node_pool
Current status of the NodePool from the NodePool instance. Status updates will happen after GKE API operations complete. Multi-host TPU node pool only. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
status :
Status of the nodepool.
pod/ephemeral_storage/used_bytes
GA
(project)
Ephemeral pod storage usage
GAUGE , INT64 , By
k8s_pod
Pod ephemeral storage usage in bytes. Sampled every 60 seconds.
pod/latencies/pod_first_ready
GA
(project)
Pod first ready latency
GAUGE , DOUBLE , s
k8s_pod
The Pod end-to-end startup latency (from Pod Created to Ready), including image pulls. Sampled every 60 seconds.
pod/network/policy_event_count
BETA
(project)
Network policy event count
DELTA , INT64 , 1
k8s_pod
Change in the number of network policy events seen in the dataplane. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
verdict :
Policy verdict, possible values: [allow, deny].
workload_kind :
Kind of the workload, policy-enforced-pod belongs to, for example, "Deployment", "Replicaset", "StatefulSet", "DaemonSet", "Job" or "CronJob".
workload_name :
Name of the workload, policy-enforced-pod belongs to.
direction :
Direction of the traffic from the point of view of policy-enforced-pod, possible values: [ingress, egress].
pod/network/received_bytes_count
GA
(project)
Bytes received
CUMULATIVE , INT64 , By
k8s_pod
Cumulative number of bytes received by the pod over the network. Sampled every 60 seconds.
interface :
The name of the interface (e.g. `eth0`).
pod/network/sent_bytes_count
GA
(project)
Bytes transmitted
CUMULATIVE , INT64 , By
k8s_pod
Cumulative number of bytes transmitted by the pod over the network. Sampled every 60 seconds.
interface :
The name of the interface (e.g. `eth0`).
pod/volume/total_bytes
GA
(project)
Volume capacity
GAUGE , INT64 , By
k8s_pod
Total number of disk bytes available to the pod. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
volume_name :
The name of the volume (e.g. `/dev/sda1`).
persistentvolumeclaim_name :
The name of the referenced Persistent Volume Claim.
persistentvolumeclaim_namespace :
The namespace of the referenced Persistent Volume Claim.
pod/volume/used_bytes
GA
(project)
Volume usage
GAUGE , INT64 , By
k8s_pod
Number of disk bytes used by the pod. Sampled every 60 seconds.
volume_name :
The name of the volume (e.g. `/dev/sda1`).
persistentvolumeclaim_name :
The name of the referenced Persistent Volume Claim.
persistentvolumeclaim_namespace :
The namespace of the referenced Persistent Volume Claim.
pod/volume/utilization
GA
(project)
Volume utilization
GAUGE , DOUBLE , 1
k8s_pod
The fraction of the volume that is currently being used by the instance. This value cannot be greater than 1 as usage cannot exceed the total available volume space. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
volume_name :
The name of the volume (e.g. `/dev/sda1`).
persistentvolumeclaim_name :
The name of the referenced Persistent Volume Claim.
persistentvolumeclaim_namespace :
The namespace of the referenced Persistent Volume Claim.
nginx
Metrics exported from the NGINX Prometheus Exporter .
Launch stages of these metrics:
ALPHA
The "metric type" strings in this table must be prefixed
with kubernetes.io/nginx/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
connections_accepted
ALPHA
(project)
Nginx connections_accepted
CUMULATIVE , INT64 , {connection}
k8s_container
Accepted client connections. Sampled every 60 seconds.
connections_active
ALPHA
(project)
Nginx connections_active
GAUGE , INT64 , {connection}
k8s_container
Active client connections. Sampled every 60 seconds.
connections_handled
ALPHA
(project)
Nginx connections_handled
CUMULATIVE , INT64 , {connection}
k8s_container
Handled client connections. Sampled every 60 seconds.
connections_reading
ALPHA
(project)
Nginx connections_reading
GAUGE , INT64 , {connection}
k8s_container
Connections where NGINX is reading the request header. Sampled every 60 seconds.
connections_waiting
ALPHA
(project)
Nginx connections_waiting
GAUGE , INT64 , {connection}
k8s_container
Idle client connections. Sampled every 60 seconds.
connections_writing
ALPHA
(project)
Nginx connections_writing
GAUGE , INT64 , {connection}
k8s_container
Connections where NGINX is writing the response back to the client. Sampled every 60 seconds.
http_requests_total
ALPHA
(project)
Nginx http_requests_total
CUMULATIVE , INT64 , {request}
k8s_container
Total http requests. Sampled every 60 seconds.
nginxexporter_build_info
ALPHA
(project)
Nginx nginxexporter_build_info
GAUGE , INT64 , 1
k8s_container
Exporter build information. Sampled every 60 seconds.
gitCommit :
Commit hash of the build which can be abbreviated.
version :
Build version.
up
ALPHA
(project)
Nginx up
GAUGE , INT64 , 1
k8s_container
Status of the last metric scrape. Indicates if the server is up or not. Sampled every 60 seconds.
Generated at 2026-04-10 19:48:34 UTC.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
