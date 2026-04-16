---
title: "Cluster monitoring guidelines \_|\_ Apigee \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/cluster-monitoring-guidelines
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/api-platform/get-started/drz-concepts
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/hybrid/v1.14/cluster-monitoring-guidelines
  title: "Cluster monitoring guidelines \_|\_ Apigee \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Apigee
Guides
Send feedback
Cluster monitoring guidelines
Stay organized with collections
Save and categorize content based on your preferences.
You are currently viewing version 1.14 of the
Apigee hybrid documentation. For more information, see
Supported versions .
Version 1.14 keyboard_arrow_down
Supported versions:
v1.16 (latest)
v1.15
v1.14
List of supported versions
Unsupported versions:
v1.13
v1.12
v1.11
v1.10
v1.9
v1.8
v1.7
v1.6
v1.5
v1.4
v1.3
v1.2
v1.1
Overview
This guide provides guidelines on what to monitor and how to monitor an Apigee Hybrid deployment.
It is intended for hybrid cluster administrators and Org admins.
If you are new to Google Cloud monitoring, please refer to Google Cloud Monitoring documentation
for: Create
charts with Metrics Explorer and
How alerting works .
Apigee Hybrid clusters provide SLI (Service Level Indicator) metrics to help you understand how
application and system services are performing at any given time. You can view a complete list
of Available metrics .
Google Cloud Monitoring uses Resource Type to identify every SLI metric. There are three common
Resource Types used for all Apigee Hybrid metrics.
k8s_container
for system level metrics.
Proxy
for Apigee API Proxy metrics.
Target
for Apigee API Target metrics
The Resource Types have common labels that apply to all their associated metrics. For example,
all the metrics with k8s_container resource type have cluster_name ,
pod_name , and container_name labels available to use, in addition to
the metrics labels. A combination of Resource Type labels and metrics labels should be used to
effectively monitor cluster health and performance.
Alert threshold: In a perfect world, alerting thresholds would be obvious and the provided
documentation would list the values that should trigger alerts. In reality, it is less obvious
for the Apigee to define - what is acceptable performance and what is a dangerous resource
utilization of services and infrastructures. The alert threshold values will vary greatly
depending on particular traffic patterns and SLO/SLA agreements.
An Alert threshold optimization and determination is an on-going process as it can change with
the service and infrastructure usage. Use Warning and Critical threshold for notifications and
alerting.
Healthy : Value is less than the warning threshold .
Concerning : Value greater than the warning threshold , but value is less than
the Critical threshold .
Critical : Value > Critical threshold .
Customers should use the tools provided to determine the optimal threshold, whether it's the
Cloud Monitoring dashboards that customers can create with the MQL provided below or the
Apigee's analytics, to identify what "normal" looks like and then tune the alerts thresholds
accordingly.
Hybrid cluster monitoring can be categorized into four different general groups, for example
Traffic , Database , Apigee control plane , and infrastructure
monitoring. The following sections describe these groups in detail:
Note: API Traffic monitoring is the same for Apigee-X and Hybrid clusters. Apigee-X
users have access to API traffic SLI metrics such as Proxy, Target, and Policy in the Org's
Google Cloud project and can use these SLI metrics for monitoring and alerts.
Tip: Generally, the "Request Rate" dashboards are useful by themselves for
visualization of the traffic pattern. Adding an alert threshold just for request rate SLI
metrics could be challenging - unless the traffic pattern/volume is predetermined. However, a
request rate chart can provide useful information about any unusual abnormal traffic spikes or
dips during debugging any issue related to traffic (read, write, response code, etc).
Traffic
The Apigee Proxy and Target SLI metrics provide request/response counts and latencies for API
Proxy and Targets. The Apigee Policy latency SLI metric provides policy response latencies.
These SLI metrics provide coverage for monitoring the Apigee API traffic.
Request Rate
Proxy request count
Use case : Use the proxy/request_count to monitor the proxy request count. The
proxy/request_count chart displays the request rate for proxies. This chart is useful
to identify which Proxy is receiving a higher request rate, request rate patterns and any
abnormal spike in request calls for a particular proxy. Any unexpected abnormal spike in API
traffic could be a security concern around a bot or attack on API proxies. Similarly, a large
drop in overall traffic cloud indicates issues with clients or connectivity from Apigee upstream
components.
Resource types
Proxy
Metric
proxy/request_count
Group By
method and all Proxy
resource type labels
Aggregator
sum
Alert consideration
Events like abnormal request_count spike/drop alerts
Alert threshold
None
Cloud Monitoring dashboard MQL query :
fetch apigee.googleapis.com/Proxy
| metric 'apigee.googleapis.com/proxy/request_count'
| align rate(1m)
| every 1m
| group_by [metric.method],
[value_request_count_aggregate: aggregate(value.request_count)]
Target request count
Use case : Use the target/request_count to monitor the Apigee runtime target
request count. The target/request_count chart displays the request rate received by the Apigee
target. This chart may be useful to see which target is getting a higher request rate, request
rate pattern and any abnormal spike in request calls for a particular target.
Resource types
Target
Metric
target/request_count
Group By
method and all Target
resource type labels
Aggregator
sum
Alert consideration
Events like abnormal request_count spike/drop alerts
Alert threshold
None
Cloud Monitoring dashboard MQL query :
fetch apigee.googleapis.com/Target
| metric 'apigee.googleapis.com/target/request_count'
| align rate(1m)
| every 1m
| group_by [metric.method, metric.type, metric.endpoint],
[value_request_count_aggregate: aggregate(value.request_count)]
Error Rate
Proxy error response count
Use case : Use the proxy/response_count to monitor the proxy error response
rate. The proxy/response_count chart displays the request rate for API Proxy. This chart is
useful to understand which proxy is getting a higher request error rate or any abnormal error
spike in request calls for a particular proxy.
Resource types
Proxy
Metric
proxy/response_count
Filter By
response_code != 200
Group By
method , response_code , fault_code ,
fault_source , apigee_fault ,
and all Proxy
resource type labels
Aggregator
sum
Alert consideration
The Proxy response error ratio: Total response errors / Total response count.
Total response errors = Sum of proxy/response_count with filter response_code != 200
Total response count = Sum of proxy/response_count
Alert threshold
Depends on the SLO for the installation. Production and non-prodroduction installations
may have different thresholds. For example: For production, trigger an event notification if
the proxy response 500 error ratio is 5% for 5 mins.
Cloud Monitoring dashboard MQL query :
fetch apigee.googleapis.com/Proxy
| metric 'apigee.googleapis.com/proxy/response_count'
| filter (metric.response_code != 200)
| align rate(1m)
| every 1m
| group_by
[metric.method, metric.response_code, metric.fault_code,
metric.fault_source, metric.apigee_fault],
[value_response_count_aggregate: aggregate(value.response_count)]
Example Google Cloud operation Alert policy MQL :
fetch apigee.googleapis.com/Proxy::apigee.googleapis.com/proxy/response_count
| {
filter (metric.response_code == 500)
;
ident
}
| group_by drop[metric.response_code ], sliding(5m), .sum
| ratio
| scale '%'
| every (30s)
| condition val() > 5'%'
Target error response count
Use case : Use the target/response_count to monitor the API Target error
response rate. The target/response_count chart displays the request rate from API Target. This
chart may be useful to identify which target is getting a higher request rate or any abnormal
errors spike in request calls.
Resource types
Target
Metric
target/response_count
Filter By
response_code != 200
Group By
method and all Target
resource type labels
Aggregator
sum
Alert consideration
The Proxy response error ratio, for example: Total response errors / Total response count.
Total response errors = Sum of target/response_count with filter response_code != 200
Total response count = Sum of target/response_count
Alert threshold
Depends on the SLO for the installation. For example: For production, trigger an event
notification, If the
target response error ratio is 5% for 3 mins.
Cloud Monitoring dashboard MQL query :
fetch apigee.googleapis.com/Target
| metric 'apigee.googleapis.com/target/response_count'
| filter (metric.response_code != 200)
| align rate(1m)
| every 1m
| group_by
[metric.method, metric.type, metric.endpoint,
metric.response_code],
[value_response_count_aggregate: aggregate(value.response_count)]
Latencies
Proxy latencies
Use case : Use the proxy/latencies to monitor the latencies
of all API proxy responses to a request. The
proxy/latencies chart may be useful to identify the latency in Apigee API proxy to
your overall API proxy request latency.
Resource types
Proxy
Metric
proxy/latencies
Group By
method and all Proxy
resource type labels
Aggregator
p99 (99th percentile)
Alert consideration
High value of p99 latency percentile.
Alert threshold
Depends on the SLO for the installation. For example: For production, trigger an event notification, If the value of
proxy p99 latency percentile is 5 seconds for 5 mins.
Cloud Monitoring dashboard MQL query :
fetch apigee.googleapis.com/Proxy
| metric 'apigee.googleapis.com/proxy/latencies'
| align delta(1m)
| every 1m
| group_by [metric.method],
[value_latencies_percentile: percentile(value.latencies, 99)]
Target latencies
Use case : Use the target/latencies to monitor the latencies
of all API proxy target responses to a request. The
target/latencies chart identifies the total amount of time for the Apigee API proxy
target to respond to a request. This value does not include the Apigee API proxy overhead.
Resource types
Target
Metric
target/latencies
Group By
method , percentile, and all Target
resource type labels
Aggregator
p99 (99th percentile)
Alert consideration
High value of p99 latency percentile.
Alert threshold
Depends on the SLO for the installation. For example: For production, trigger an event notification, If the value of
target p99 latency percentile is 5 seconds for 5 mins.
Cloud Monitoring dashboard MQL query :
fetch apigee.googleapis.com/Target
| metric 'apigee.googleapis.com/target/latencies'
| align delta(1m)
| every 1m
| group_by [metric.method],
[value_latencies_percentile: percentile(value.latencies, 99)]
Database
Cassandra
Apigee Cassandra database service has multiple
Cassandra SLI metrics . These SLI
metrics can provide comprehensive monitoring for the Apigee Cassandra service. At a minimum,
along with Cassandra resource usage (CPU, Mem, and disk volume), the client's read and write
request latency should be monitored for Cassandra service health.
Cassandra read request rate
Use case : The cassandra/clientrequest_rate (with scope= Read ) SLI metric
provides insight into Cassandra services read request average rate at any given time. This
metric helps with the understanding of clients' read request activity level trends.
Resource types
k8s_container
Metric
cassandra/clientrequest_rate
Filter By
scope = Read and unit = OneMinuteRate
Group By
scope , unit , and all k8s_container resource type labels
Aggregator
sum
Alert consideration
For any potential problems or significant change in clients query patterns; for example a sudden, unexpected spike or drop in read request rate.
Alert threshold
None
Cloud Monitoring dashboard MQL query :
fetch k8s_container
| metric 'apigee.googleapis.com/cassandra/clientrequest_latency'
| filter (metric.scope == 'Read' && metric.unit == 'OneMinuteRate')
| group_by 1m,
[value_clientrequest_latency_mean: mean(value.clientrequest_latency)]
| every 1m
| group_by [metric.scope, metric.unit],
[value_clientrequest_latency_mean_aggregate:
aggregate(value_clientrequest_latency_mean)]
Cassandra write request rate
Use case : The cassandra/clientrequest_rate (with scope=Write) SLI metric provides
insight into Cassandra services write request average rate at any given time. This metric helps
with the understanding of clients' write request activity level trends.
Resource types
k8s_container
Metric
cassandra/clientrequest_rate
Filter By
scope = Read and unit = OneMinuteRate
Group By
scope , unit , and all k8s_container
resource type labels
Aggregator
sum
Alert consideration
For any potential problems or significant change in clients query patterns; for
example a sudden, unexpected spike or drop in write requests that warrant further
investigation.
Alert threshold
None
Cloud Monitoring dashboard MQL query :
fetch k8s_container
| metric 'apigee.googleapis.com/cassandra/clientrequest_latency'
| filter (metric.scope == 'Write' && metric.unit == 'OneMinuteRate')
| group_by 1m,
[value_clientrequest_latency_mean: mean(value.clientrequest_latency)]
| every 1m
| group_by [metric.scope, metric.unit],
[value_clientrequest_latency_mean_aggregate:
aggregate(value_clientrequest_latency_mean)]
Cassandra read request latency
Use case : The cassandra/clientrequest_latency (with scope=Read) SLI metric provides
Cassandra services read request latency (at 99th percentile, 95th percentile, or 75th percentile).
These metrics help with the overall view of Cassandra performance and can indicate any changes in
usage patterns or a problem manifesting itself over time.
Resource types
k8s_container
Metric
cassandra/clientrequest_latency
Filter By
scope = Read and unit = 99thPercentile
Group By
scope , unit , and all k8s_container
resource type labels
Aggregator
sum
Alert consideration
If read requests latency SLI consistently shows 99th percentile latency trending upwards
continuously.
Alert threshold
Depends on your SLO for Cassandra services. For example: In production, trigger an event notification
if the read clientrequest_latency value of 99thPercentile is 5 seconds for 3
minutes
Cloud Monitoring dashboard MQL query :
fetch k8s_container
| metric 'apigee.googleapis.com/cassandra/clientrequest_latency'
| filter (metric.scope == 'Read' && metric.unit == '99thPercentile')
| group_by 1m,
[value_clientrequest_latency_mean: mean(value.clientrequest_latency)]
| every 1m
| group_by [metric.scope, metric.unit],
[value_clientrequest_latency_mean_aggregate:
aggregate(value_clientrequest_latency_mean)]
Cassandra write request latency
Use case : The cassandra/clientrequest_latency (with scope=Write) SLI metric
provides Cassandra services write request latency (at 99th percentile, 95th percentile, or 75th
percentile). These metrics help with the overall view of Cassandra performance and can indicate
any changes in usage patterns or a problem manifesting itself over time.
Resource types
k8s_container
Metric
cassandra/clientrequest_latency
Filter By
scope = Write and unit = 99thPercentile
Group By
scope , unit , and all k8s_container
resource type labels
Aggregator
sum
Alert consideration
If write requests latency SLI consistently shows 99th percentile latency trending upwards continuously.
Alert threshold
Depends on your SLO for Cassandra services. For example: in production, trigger an event notification
if the write clientrequest_latency value of 99thPercentile is 5 seconds for 3
minutes
Cloud Monitoring dashboard MQL query :
fetch k8s_container
| metric 'apigee.googleapis.com/cassandra/clientrequest_latency'
| filter (metric.scope == 'Write' && metric.unit == '99thPercentile')
| group_by 1m,
[value_clientrequest_latency_mean: mean(value.clientrequest_latency)]
| every 1m
| group_by [metric.scope, metric.unit],
[value_clientrequest_latency_mean_aggregate:
aggregate(value_clientrequest_latency_mean)]
Apigee Control plane
Apigee Synchronizer service SLI metrics provide request and response counts and latencies between
the Apigee control plane and the Hybrid runtime plane. Synchronizer instances running in the
runtime plane are expected to poll the control plane regularly, download the contracts and make
the same available to local runtime instances.
Request rate
Upstream request count
Use case : The upstream/request_count metrics indicate the number of requests made
by the Synchronizer service to the Apigee control plane.
Resource types
k8s_container
Metric
upstream/request_count
Filter By
container_name = apigee-synchronizer and type = CONTRACT
Group By
method , type , container_name , and all
k8s_container resource type
labels
Aggregator
sum
Alert consideration
Use this for traffic abnormalities, such as an abnormal request_count spike or
drop alert.
Alert threshold
None
Cloud Monitoring dashboard MQL query :
fetch k8s_container
| metric 'apigee.googleapis.com/upstream/request_count'
| filter
(resource.container_name == 'apigee-synchronizer')
&& (metric.type == 'CONTRACT')
| align rate(1m)
| every 1m
| group_by [metric.method, metric.type, resource.container_name],
[value_request_count_aggregate: aggregate(value.request_count)]
Error rate
Upstream response count
Use case : The upstream/response_count SLI metric provides the number of responses
the Synchronizer services received from the Apigee control plane. This chart may be useful to
identify any connectivity or configuration issue between the Apigee Hybrid Runtime plane and
Control plane.
Resource types
k8s_container
Metric
upstream/request_count
Filter By
method , response_type , container_name , and all
k8s_container resource type
labels
Group By
Aggregator
sum
Alert consideration
If there are errors in upstream/response_count metrics with non-200 response codes
returned from Apigee Control plane, then its required further investigation into those
errors.
Alert threshold
Depends on your SLO for Cassandra services. For example: in production, trigger an event notification
if Synchronizer experiences greater than one response_code error every three min.
Cloud Monitoring dashboard MQL query :
fetch k8s_container
| metric 'apigee.googleapis.com/upstream/response_count'
| filter
(resource.container_name == 'apigee-synchronizer')
&& (metric.response_code != '200' && metric.type == 'CONTRACT')
| align rate(1m)
| every 1m
| group_by
[metric.method, metric.response_code, metric.type, resource.container_name],
[value_response_count_aggregate: aggregate(value.response_count)]
Infrastructure
GKE and other Kubernetes platforms
provide system-level SLI metrics. The SLI metrics labels can be filtered and grouped to monitor
a specific container and its resource usage. To monitor the Apigee Runtime cluster
infrastructure health and availability, a cluster admin can monitor the container and pod common
resource use such as CPU, Mem, disk, and container restart counts. Please follow
GKE documentation for more details on available
metrics and labels.
The following table lists some of the services and the containers you can monitor for each service.
Service Name
Container Name
Cassandra
apigee-cassandra
Message Processor(MP)
apigee-runtime
Synchronizer
apigee-synchronizer
Telemetry
apigee-prometheus-app
apigee-prometheus-proxy
apigee-prometheus-agg
apigee-stackdriver-exporter
Containers / Pods
Restart count
Use case : The kubernetes.io/container/restart_count system SLI metric provides the
number of times a container has restarted. This chart may be useful to identify if a container
is crashing/restarting frequently. The specific service container can be filtered out by metrics
labels for a specific service's container monitoring.
The following shows using the kubernetes.io/container/restart_count metric for the
Cassandra container. You can use this metric for any of the containers in the table above.
Resource types
k8s_container
Metric
kubernetes.io/container/restart_count
Filter By
namespace_name = apigee and container_name =~ .*cassandra.*
Group By
cluster_name , namespace_name , pod_name , container_name , and all
k8s_container resource type
labels
Aggregator
sum
Alert consideration
If a container is restarting frequently, further investigation is needed for the root
cause. There are multiple reasons a container can restart, such as OOMKilled ,
data disk full, and configuration issues, to name a few.
Alert threshold
Depends on the SLO for the installation. For example: For production, trigger an event notification, If a container
restarts more often than 5 times within 30 minutes.
Cloud Monitoring dashboard MQL query :
fetch k8s_container
| metric 'kubernetes.io/container/restart_count'
| filter
(resource.container_name =~ '.*cassandra.*'
&& resource.namespace_name == 'apigee')
| align rate(1m)
| every 1m
| group_by
[resource.cluster_name, resource.namespace_name, resource.pod_name,
resource.container_name],
[value_restart_count_aggregate: aggregate(value.restart_count)]
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
