---
title: "Collect and view cAdvisor/Kubelet metrics \_|\_ Google Kubernetes Engine (GKE)\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cadvisor-kubelet-metrics
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cadvisor-kubelet-metrics
  title: "Collect and view cAdvisor/Kubelet metrics \_|\_ Google Kubernetes Engine\
    \ (GKE) \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Guides
Send feedback
Collect and view cAdvisor/Kubelet metrics
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
Standard
This page describes how to configure a Google Kubernetes Engine (GKE) cluster to
send a curated set of cAdvisor/Kubelet metrics to
Cloud Monitoring using Google Cloud Managed Service for Prometheus. This page
also describes how these metrics are formatted when they are written to
Monitoring, and how to query metrics.
The curated set of metrics is a subset of the set of
cAdvisor/Kubelet metrics built into every Kubernetes deployment
by default and includes metrics related to reducing ingestion volume and
associated costs.
Before you begin
Before you start, make sure that you have performed the following tasks:
Enable
the Google Kubernetes Engine API.
Enable Google Kubernetes Engine API
If you want to use the Google Cloud CLI for this task,
install and then
initialize the
gcloud CLI. If you previously installed the gcloud CLI, get the latest
version by running the gcloud components update command. Earlier gcloud CLI versions might not support running the commands in this document.
Note: For existing gcloud CLI
installations, make sure to set the compute/region property . If you use primarily zonal clusters, set the compute/zone instead. By setting a default location,
you can avoid errors in the gcloud CLI like the following:
One of [--zone, --region] must be supplied: Please specify location . You might need to specify the location in certain commands if the location of your cluster differs from the default that you set.
Requirements
To collect cAdvisor/Kubelet metrics, your GKE
cluster must meet the following requirements:
The cluster must be running GKE version
1.29.3-gke.1093000 or later. cAdvisor/Kubelet
packages are enabled by default when you create a cluster running version
1.29.3-gke.1093000 or later.
The cluster must have
system metrics
enabled.
The cluster has
Google Cloud Managed Service for Prometheus managed collection
enabled. Google Cloud Managed Service for Prometheus managed collection
is enabled by default for new clusters.
Warning: If you are already ingesting cAdvisor/Kubelet
metrics into Google Cloud Managed Service for Prometheus, then you must stop ingesting
those metrics before enabling managed cAdvisor/Kubelet
metrics, otherwise you might end up with duplicate or incorrect metrics.
Configuring collection of cAdvisor/Kubelet metrics
You can enable cAdvisor/Kubelet metrics in an existing
GKE cluster using the Google Cloud console, the
gcloud CLI, or Terraform.
Console
To configure cAdvisor/Kubelet metrics from the Details
tab for the cluster, do the following:
In the Google Cloud console, go to the Kubernetes clusters page:
Go to Kubernetes clusters
If you use the search bar to find this page, then select the result whose subheading is
Kubernetes Engine .
Click your cluster's name.
In the Features row labelled Cloud Monitoring ,
click the Edit icon.
In the Edit Cloud Monitoring dialog that appears, confirm that
Enable Cloud Monitoring is selected.
In the Components drop-down menu, select the
cAdvisor/Kubelet components
from which you would like to collect metrics:
cAdvisor
Kubelet
Click OK .
Click Save Changes .
gcloud
Update your cluster to collect metrics:
gcloud container clusters update CLUSTER_NAME \
--location = COMPUTE_LOCATION \
--enable-managed-prometheus \
--monitoring = SYSTEM,CADVISOR,KUBELET
Replace the following:
CLUSTER_NAME : the name of the existing cluster.
COMPUTE_LOCATION : the
Compute Engine location
of the cluster.
The set of values supplied to the monitoring flag overrides any previous
setting.
Terraform
To configure the collection of cAdvisor/Kubelet metrics by using Terraform,
see the monitoring_config block in the
Terraform registry for google_container_cluster .
For general information about using Google Cloud with Terraform, see
Terraform with Google Cloud .
Metric format
All Kubernetes cAdvisor/Kubelet metrics written to Cloud Monitoring
use the resource type
prometheus_target .
Each metric name is prefixed with
prometheus.googleapis.com/ and has a suffix indicating the
Prometheus metric type, such as /gauge , /histogram ,
or /counter . Otherwise, each metric name is
identical to the metric name exposed by open source Kubernetes.
Exporting from Cloud Monitoring
The cAdvisor/Kubelet metrics can be exported from Cloud Monitoring by
using the Cloud Monitoring API .
Because all cAdvisor/Kubelet metrics are ingested by using
Google Cloud Managed Service for Prometheus ,
cAdvisor/Kubelet metrics can be queried
by using Prometheus Query Language (PromQL) . They can also be queried by
using by using Monitoring Query Language (MQL) .
Querying metrics
When you query cAdvisor/Kubelet metrics, the name you use depends on
whether you are using PromQL or Cloud Monitoring-based features like
MQL or the Metrics Explorer
menu-driven interface .
The following tables of cAdvisor/Kubelet metrics show two versions of
each metric name:
PromQL metric name : When
using PromQL in Cloud Monitoring pages
of the Google Cloud console or in PromQL fields of the
Cloud Monitoring API ,
use the PromQL metric name.
Cloud Monitoring metric name When using other
Cloud Monitoring features, use the Cloud Monitoring metric name
in the tables below. This name must be prefixed with
prometheus.googleapis.com/ , which has been omitted from the
entries in the table.
cAdvisor metrics
The Cloud Monitoring metric names in this table must be prefixed with
prometheus.googleapis.com/ . That prefix has been omitted from the
entries in the table.
PromQL metric name
Cloud Monitoring metric name
Kind, Type, Unit
Monitored resources
Required GKE version
Description Labels
container_cpu_cfs_periods_total
container_cpu_cfs_periods_total/counter
CUMULATIVE , DOUBLE , 1
prometheus_target
1.29.3-gke.1093000
Number of elapsed enforcement period intervals. Sampled every 30 seconds.
cpu
container_cpu_cfs_throttled_periods_total
container_cpu_cfs_throttled_periods_total/counter
CUMULATIVE , DOUBLE , 1
prometheus_target
1.29.3-gke.1093000
Number of throttled period intervals. Sampled every 30 seconds.
cpu
container_cpu_usage_seconds_total
container_cpu_usage_seconds_total/counter
CUMULATIVE , DOUBLE , s
prometheus_target
1.29.3-gke.1093000
Cumulative cpu time consumed. Sampled every 30 seconds.
cpu
container_fs_limit_bytes
container_fs_limit_bytes/gauge
GAUGE , DOUBLE , By
prometheus_target
1.29.3-gke.1093000
Number of bytes that can be consumed by the container on this
filesystem. Sampled every 30 seconds.
disk
container_fs_read_seconds_total
container_fs_read_seconds_total/counter
CUMULATIVE , DOUBLE , 1
prometheus_target
1.29.3-gke.1093000
Cumulative count of reads completed. Sampled every 30 seconds.
diskIO
container_fs_reads_bytes_total
container_fs_reads_bytes_total/counter
CUMULATIVE , DOUBLE , By
prometheus_target
1.29.3-gke.1093000
Cumulative count of bytes read. Sampled every 30 seconds.
diskIO
container_fs_reads_total
container_fs_reads_total/counter
CUMULATIVE , DOUBLE , 1
prometheus_target
1.29.3-gke.1093000
Cumulative count of reads completed. Sampled every 30 seconds.
diskIO
container_fs_usage_bytes
container_fs_usage_bytes/gauge
GAUGE , DOUBLE , By
prometheus_target
1.29.3-gke.1093000
Number of bytes that are consumed by the container on this
filesystem. Sampled every 30 seconds.
disk
container_fs_write_seconds_total
container_fs_write_seconds_total/counter
CUMULATIVE , DOUBLE , s
prometheus_target
1.29.3-gke.1093000
Cumulative count of seconds spent writing. Sampled every 30 seconds.
diskIO
container_fs_writes_bytes_total
container_fs_writes_bytes_total/counter
CUMULATIVE , DOUBLE , By
prometheus_target
1.29.3-gke.1093000
Cumulative count of bytes written. Sampled every 30 seconds.
diskIO
container_fs_writes_total
container_fs_writes_total/counter
CUMULATIVE , DOUBLE , 1
prometheus_target
1.29.3-gke.1093000
Cumulative count of writes completed. Sampled every 30 seconds.
diskIO
container_memory_rss
container_memory_rss/gauge
GAUGE , DOUBLE , By
prometheus_target
1.29.3-gke.1093000
Size of RSS. Sampled every 30 seconds.
memory
container_memory_working_set_bytes
container_memory_working_set_bytes/gauge
GAUGE , DOUBLE , By
prometheus_target
1.29.3-gke.1093000
Current working set. Sampled every 30 seconds.
memory
container_network_receive_bytes_total
container_network_receive_bytes_total/counter
CUMULATIVE , DOUBLE , By
prometheus_target
1.29.3-gke.1093000
Cumulative count of bytes received. Sampled every 30 seconds.
network
container_network_receive_packets_dropped_total
container_network_receive_packets_dropped_total/counter
CUMULATIVE , DOUBLE , 1
prometheus_target
1.29.3-gke.1093000
Cumulative count of packets dropped while receiving.
Sampled every 30 seconds.
network
container_network_receive_packets_total
container_network_receive_packets_total/counter
CUMULATIVE , DOUBLE , 1
prometheus_target
1.29.3-gke.1093000
Cumulative count of packets received. Sampled every 30 seconds.
network
container_network_transmit_bytes_total
container_network_transmit_bytes_total/counter
CUMULATIVE , DOUBLE , By
prometheus_target
1.29.3-gke.1093000
Cumulative count of bytes transmitted. Sampled every 30 seconds.
network
container_network_transmit_packets_dropped_total
container_network_transmit_packets_dropped_total/counter
CUMULATIVE , DOUBLE , 1
prometheus_target
1.29.3-gke.1093000
Cumulative count of packets dropped while transmitting.
Sampled every 30 seconds.
network
container_network_transmit_packets_total
container_network_transmit_packets_total/counter
CUMULATIVE , DOUBLE , 1
prometheus_target
1.29.3-gke.1093000
Cumulative count of packets transmitted. Sampled every 30 seconds.
network
Kubelet metrics
The Cloud Monitoring metric names in this table must be prefixed with
prometheus.googleapis.com/ . That prefix has been omitted from the
entries in the table.
PromQL metric name
Cloud Monitoring metric name
Kind, Type, Unit
Monitored resources
Required GKE version
Description Labels
kubelet_certificate_manager_server_ttl_seconds
kubelet_certificate_manager_server_ttl_seconds/gauge
GAUGE , DOUBLE , 1
prometheus_target
1.29.3-gke.1093000
Gauge of the shortest TTL (time-to-live) of the Kubelet's serving
certificate. The value is in seconds until certificate expiry
(negative if already expired). If serving certificate is invalid or
unused, the value will be +INF. Sampled every 30 seconds.
kubelet_node_name
kubelet_node_name/gauge
GAUGE , DOUBLE , 1
prometheus_target
1.29.3-gke.1093000
The node's name. The count is always 1. Sampled every 30 seconds.
node
kubelet_pleg_relist_duration_seconds
kubelet_pleg_relist_duration_seconds/histogram
CUMULATIVE , DISTRIBUTION , s
prometheus_target
1.29.3-gke.1093000
Duration in seconds for relisting pods in PLEG. Sampled every 30 seconds.
kubelet_pod_worker_duration_seconds
kubelet_pod_worker_duration_seconds/histogram
CUMULATIVE , DISTRIBUTION , s
prometheus_target
1.29.3-gke.1093000
Duration in seconds to sync a single pod. Broken down by operation
type: create, update, or sync. Sampled every 30 seconds.
operation_type
kubelet_running_containers
kubelet_running_containers/gauge
GAUGE , DOUBLE , 1
prometheus_target
1.29.3-gke.1093000
Number of containers currently running. Sampled every 30 seconds.
container_state
kubelet_running_pods
kubelet_running_pods/gauge
GAUGE , DOUBLE , 1
prometheus_target
1.29.3-gke.1093000
Number of pods that have a running pod sandbox. Sampled every 30 seconds.
kubelet_runtime_operations_total
kubelet_runtime_operations_total/counter
CUMULATIVE , DOUBLE , 1
prometheus_target
1.29.3-gke.1093000
Cumulative number of runtime operations by operation type.
Sampled every 30 seconds.
operation_type
kubelet_volume_stats_available_bytes
kubelet_volume_stats_available_bytes/gauge
GAUGE , DOUBLE , 1
prometheus_target
1.29.3-gke.1093000
Number of available bytes in the volume. Sampled every 30 seconds.
namespace
persistentvolumeclaim
kubelet_volume_stats_capacity_bytes
kubelet_volume_stats_capacity_bytes/gauge
GAUGE , DOUBLE , 1
prometheus_target
1.29.3-gke.1093000
Capacity in bytes of the volume. Sampled every 30 seconds.
namespace
persistentvolumeclaim
kubelet_volume_stats_inodes
kubelet_volume_stats_inodes/gauge
GAUGE , DOUBLE , 1
prometheus_target
1.29.3-gke.1093000
Maximum number of inodes in the volume. Sampled every 30 seconds.
namespace
persistentvolumeclaim
kubelet_volume_stats_inodes_free
kubelet_volume_stats_inodes_free/gauge
GAUGE , DOUBLE , 1
prometheus_target
1.29.3-gke.1093000
Number of free inodes in the volume. Sampled every 30 seconds.
namespace
persistentvolumeclaim
kubelet_volume_stats_inodes_used
kubelet_volume_stats_inodes_used/gauge
GAUGE , DOUBLE , 1
prometheus_target
1.29.3-gke.1093000
Number of used inodes in the volume. Sampled every 30 seconds.
namespace
persistentvolumeclaim
kubelet_volume_stats_used_bytes
kubelet_volume_stats_used_bytes/gauge
GAUGE , DOUBLE , 1
prometheus_target
1.29.3-gke.1093000
Number of used bytes in the volume. Sampled every 30 seconds.
namespace
persistentvolumeclaim
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
