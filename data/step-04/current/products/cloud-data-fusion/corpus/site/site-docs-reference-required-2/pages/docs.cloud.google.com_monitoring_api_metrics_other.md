---
title: "External metrics list \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/monitoring/api/metrics_other
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/monitoring/api/resources
source_metadata:
  url: https://docs.cloud.google.com/monitoring/api/metrics_other
  title: "External metrics list \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation"
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
External metrics list
Stay organized with collections
Save and categorize content based on your preferences.
This document lists some of the metric types available
from open-source projects and other external sources.
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
external.googleapis.com
Metrics sent to Google Cloud projects with a metric type beginning
external.googleapis.com are known as external metrics . The metrics are
typically exported by open-source projects and third-party providers.
There is presently a limit of
25,000
external metric descriptors per Google Cloud project.
Cloud Monitoring treats external metrics the same as custom
metrics , with one exception. For external
metrics, a resource_type of global is invalid and results
in the metric data being discarded.
External metric descriptors that are created but then not used for at
least 24 months are subject to deletion.
Note: Until an external metric is used in a project, there is no metric
descriptor for it. This is also true of custom
metrics . Therefore, this document cannot list
information about all the possible external metric types. If you use external
metrics in your project, you can look at their metric descriptors using the
metricDescriptors.list or
metricDescriptors.get
Monitoring API methods.
user
external.googleapis.com/user/ is a valid domain for user-defined metrics. It
is functionally identical to custom.googleapis.com , although it has some
backend optimizations that make queries perform better at scale. If you have
many projects with identical metrics in every project, then you should use the
external.googleapis.com/user/ prefix instead of custom.googleapis.com for
performance reasons.
vmware/vcenter
Metrics whose names begin external.googleapis.com/vmware/vcenter/ come from
Google Cloud VMware Engine environments that
are running the standalone GCVE
agent
to collect and send metrics to Cloud Monitoring. For a list of metrics that
the agent can collect, see List of collected
metrics .
prometheus
Metrics whose names begin external.googleapis.com/prometheus/ come from
Prometheus , an open-source monitoring
tool often used with Kubernetes. When you configure Prometheus with
Stackdriver Prometheus sidecar
(deprecated) ,
metrics exported by Prometheus are converted to Cloud Monitoring metric
types with simple metric descriptors , such as the following:
{
"name" : "projects/my-gcp-project/metricDescriptors/external.googleapis.com/prometheus/apiserver_client_certificate_expiration_seconds" ,
"metricKind" : "CUMULATIVE" ,
"valueType" : "DISTRIBUTION" ,
"description" : "Auto-created custom metric." ,
"type" : "external.googleapis.com/prometheus/apiserver_client_certificate_expiration_seconds"
}
If you are using the sidecar to ingest Prometheus metrics, then we recommend
migrating to Google Cloud Managed Service for Prometheus .
Other metrics
Metrics from other domains.
The following list was last generated at 2026-04-10 19:48:34 UTC.
For more information about this process, see
About the lists .
cloudonefs
Metrics from Dell PowerScale for Google Cloud .
Launch stages of these metrics:
GA
The "metric type" strings in this table must be prefixed
with cloudonefs.isiloncloud.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
cluster/operation_count
GA
(project)
I/O operations
DELTA , INT64 , count
dell_emc_cloud_onefs_cluster
Count of the read/write operations performed on the cluster. Sampled every 60 seconds.
type :
Type of operation.
cluster/received_bytes_count
GA
(project)
Ingress network traffic
DELTA , INT64 , By
dell_emc_cloud_onefs_cluster
Total ingress traffic associated to the cluster in bytes. Sampled every 60 seconds.
cluster/sent_bytes_count
GA
(project)
Egress network traffic
DELTA , INT64 , By
dell_emc_cloud_onefs_cluster
Total egress traffic associated to the cluster in bytes. Sampled every 60 seconds.
cluster/total_bytes
GA
(project)
Storage capacity allocated
GAUGE , INT64 , By
dell_emc_cloud_onefs_cluster
Total capacity allocated to the cluster, in bytes. Sampled every 60 seconds.
cluster/used_bytes
GA
(project)
Storage usage
GAUGE , INT64 , By
dell_emc_cloud_onefs_cluster
Total storage space used by the cluster in bytes. Sampled every 60 seconds.
cloudvolumesgcp-api.netapp.com
Metrics from NetApp Cloud Volumes .
Launch stages of these metrics:
BETA
The "metric type" strings in this table must be prefixed
with cloudvolumesgcp-api.netapp.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
cloudvolume/inode_allocation
BETA
(project)
Volume inode allocation
GAUGE , INT64 , 1
cloudvolumesgcp-api.netapp.com/CloudVolume
Inodes allocated for the volume (hard cap). Tied to allocated capacity (size) of volume.
cloudvolume/inode_usage
BETA
(project)
Volume inode usage
GAUGE , INT64 , 1
cloudvolumesgcp-api.netapp.com/CloudVolume
Number of inodes in use on the volume.
cloudvolume/logical_bytes_backed_up
BETA
(project)
Logical bytes backed up
GAUGE , INT64 , By
cloudvolumesgcp-api.netapp.com/CloudVolume
Logical bytes backed up (baseline and incremental changes).
cloudvolume/operation_count
BETA
(project)
Operations count
DELTA , INT64 , 1
cloudvolumesgcp-api.netapp.com/CloudVolume
Number of operations being performed on the cloud volume by the end users.
type :
Type of operation, read, write, or metadata.
cloudvolume/read_bytes_count
BETA
(project)
Bytes read
DELTA , INT64 , By
cloudvolumesgcp-api.netapp.com/CloudVolume
I/O bytes from read operations by the end user.
cloudvolume/replication_healthy
BETA
(project)
Volume Replication Healthy
GAUGE , INT64 , 1
cloudvolumesgcp-api.netapp.com/CloudVolume
Values of TRUE for healthy and FALSE for unhealthy replication relationship.
cloudvolume/replication_lag_time
BETA
(project)
Volume Replication Transfer Lag Time
GAUGE , INT64 , sec
cloudvolumesgcp-api.netapp.com/CloudVolume
Elapsed time since the exported snapshot copy (last complete transfer) was created on the destination.
cloudvolume/replication_last_transfer_duration
BETA
(project)
Volume Replication Last Transfer Duration
GAUGE , INT64 , sec
cloudvolumesgcp-api.netapp.com/CloudVolume
Duration of the last transfer job.
cloudvolume/replication_last_transfer_size
BETA
(project)
Volume Replication Last Transfer Size
GAUGE , INT64 , By
cloudvolumesgcp-api.netapp.com/CloudVolume
Size of the last transfer job.
cloudvolume/replication_relationship_progress
BETA
(project)
Volume Replication Transfer Progress
CUMULATIVE , INT64 , By
cloudvolumesgcp-api.netapp.com/CloudVolume
Amount of data transferred thus far for the current job.
cloudvolume/replication_relationship_status
BETA
(project)
Volume Replication Status
GAUGE , INT64 , 1
cloudvolumesgcp-api.netapp.com/CloudVolume
Status of replication: TRUE = transferring, FALSE = idle.
cloudvolume/replication_total_transfer_bytes
BETA
(project)
Volume Replication Total Transfer Bytes
CUMULATIVE , INT64 , By
cloudvolumesgcp-api.netapp.com/CloudVolume
Cumulative data transferred for the relationship since it was created.
cloudvolume/request_latencies
BETA
(project)
Volume IO operation latency
DELTA , DISTRIBUTION , ms
cloudvolumesgcp-api.netapp.com/CloudVolume
Distribution of IO operation request latencies, in milliseconds.
method :
Type of latency, read or write.
cloudvolume/volume_percent_used
BETA
(project)
Volume percentage used
GAUGE , INT64 , %
cloudvolumesgcp-api.netapp.com/CloudVolume
Percent of volume allocated space used.
cloudvolume/volume_size
BETA
(project)
Volume space allocation
GAUGE , INT64 , By
cloudvolumesgcp-api.netapp.com/CloudVolume
Space allocated to the volume, in bytes. A measure of the actual provisioned size of the volume.
cloudvolume/volume_usage
BETA
(project)
Volume space usage
GAUGE , INT64 , By
cloudvolumesgcp-api.netapp.com/CloudVolume
Space utilized by the volume, in bytes. A measure of the actual size of the volume.
type :
Type of usage, logical or snapshot.
cloudvolume/write_bytes_count
BETA
(project)
Bytes written
DELTA , INT64 , By
cloudvolumesgcp-api.netapp.com/CloudVolume
I/O bytes from write operations by the end user.
cloudvolumepool/size
BETA
(project)
Storage pool space allocation
GAUGE , INT64 , By
cloudvolumesgcp-api.netapp.com/CloudVolumePool
Space allocated to the pool, in bytes.
cloudvolumepool/usage
BETA
(project)
Storage pool space usage
GAUGE , INT64 , By
cloudvolumesgcp-api.netapp.com/CloudVolumePool
Space used by all the volumes in the storage pool, in bytes.
netapp.com
Metrics from NetApp .
The "metric type" strings in this table must be prefixed
with netapp.com/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
cloudvolume/inode_allocation
DEPRECATED
(project)
Volume inode allocation
GAUGE , INT64 , {inode}
netapp_cloud_volume
Inode allocated for the volume (hard cap). Tied to allocated capacity (size) of volume. Sampled every 300 seconds.
cloudvolume/inode_usage
DEPRECATED
(project)
Volume inode usage
GAUGE , INT64 , {inode}
netapp_cloud_volume
Number of inode in use on the volume. Sampled every 300 seconds.
type :
Type of usage, either logical or snapshot.
cloudvolume/operation_count
DEPRECATED
(project)
Operations count
DELTA , INT64 , count
netapp_cloud_volume
Number of operations being performed on the cloud volume by the end users. Sampled every 60 seconds.
type :
Type of utilization, either logical or snapshot.
cloudvolume/read_bytes_count
DEPRECATED
(project)
Bytes read
DELTA , INT64 , By
netapp_cloud_volume
I/O bytes from read operations by the end user. Sampled every 60 seconds.
cloudvolume/request_latencies
DEPRECATED
(project)
Volume IO operation latency
DELTA , DISTRIBUTION , ms
netapp_cloud_volume
Distribution of IO operation request latencies, in milliseconds. A measure of responsiveness of the volume. Sampled every 60 seconds.
method :
NetApp Cloud Volume IO operation.
cloudvolume/volume_size
DEPRECATED
(project)
Volume space allocation
GAUGE , INT64 , By
netapp_cloud_volume
Space allocated to the volume, in bytes. A measure of the actual provisioned size of the volume. Sampled every 60 seconds.
cloudvolume/volume_usage
DEPRECATED
(project)
Volume space usage
GAUGE , INT64 , By
netapp_cloud_volume
Space utilized by the volume, in bytes. A measure of the actual size of the volume. Sampled every 60 seconds.
type :
Type of usage, either logical or snapshot.
cloudvolume/write_bytes_count
DEPRECATED
(project)
Bytes written
DELTA , INT64 , By
netapp_cloud_volume
I/O bytes from write operations by the end user. Sampled every 60 seconds.
Generated at 2026-04-10 19:48:34 UTC.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
