---
title: "Google Distributed Cloud metrics \_|\_ Cloud Monitoring \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/monitoring/api/metrics_anthos
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/monitoring/api/resources
source_metadata:
  url: https://docs.cloud.google.com/monitoring/api/metrics_anthos
  title: "Google Distributed Cloud metrics \_|\_ Cloud Monitoring \_|\_ Google Cloud\
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
Google Distributed Cloud metrics
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Monitoring supports collecting metrics from Google Distributed Cloud
clusters running on bare metal or VMware.
This page lists all metrics available for collection, but all metrics
might not be available for each installation mode. For searchable information
about these metrics, see the following:
Google Distributed Cloud for bare metal metrics
Google Distributed Cloud for VMware metrics
For general information about Google Distributed Cloud, see
Google Distributed Cloud overview .
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
Google Distributed Cloud metrics
Metrics from Google Distributed Cloud on bare metal and from Google Distributed Cloud on VMWare .
The following list was last generated at 2026-04-10 19:48:34 UTC.
For more information about this process, see
About the lists .
anthos
Metrics from Google Distributed Cloud for bare metal and from Google Distributed Cloud for VMWare .
Launch stages of these metrics:
ALPHA
BETA
The "metric type" strings in this table must be prefixed
with kubernetes.io/anthos/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
APIServiceOpenAPIAggregationControllerQueue1_adds
ALPHA
(project)
APIServiceOpenAPIAggregationControllerQueue1_adds
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of adds handled by workqueue: APIServiceOpenAPIAggregationControllerQueue1. Sampled every 60 seconds.
APIServiceOpenAPIAggregationControllerQueue1_depth
ALPHA
(project)
APIServiceOpenAPIAggregationControllerQueue1_depth
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) Current depth of workqueue: APIServiceOpenAPIAggregationControllerQueue1. Sampled every 60 seconds.
APIServiceOpenAPIAggregationControllerQueue1_longest_running_processor_microseconds
ALPHA
(project)
APIServiceOpenAPIAggregationControllerQueue1_longest_running_processor_microseconds
GAUGE , DOUBLE , us
k8s_container
(Deprecated) How many microseconds has the longest running processor for APIServiceOpenAPIAggregationControllerQueue1 been running. Sampled every 60 seconds.
APIServiceOpenAPIAggregationControllerQueue1_queue_latency
ALPHA
(project)
APIServiceOpenAPIAggregationControllerQueue1_queue_latency
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueueAPIServiceOpenAPIAggregationControllerQueue1 before being requested. Sampled every 60 seconds.
quantile :
quantile.
APIServiceOpenAPIAggregationControllerQueue1_queue_latency_count
ALPHA
(project)
APIServiceOpenAPIAggregationControllerQueue1_queue_latency_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long an item stays in workqueueAPIServiceOpenAPIAggregationControllerQueue1 before being requested. Sampled every 60 seconds.
APIServiceOpenAPIAggregationControllerQueue1_queue_latency_sum
ALPHA
(project)
APIServiceOpenAPIAggregationControllerQueue1_queue_latency_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueueAPIServiceOpenAPIAggregationControllerQueue1 before being requested. Sampled every 60 seconds.
APIServiceOpenAPIAggregationControllerQueue1_retries
ALPHA
(project)
APIServiceOpenAPIAggregationControllerQueue1_retries
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of retries handled by workqueue: APIServiceOpenAPIAggregationControllerQueue1. Sampled every 60 seconds.
APIServiceOpenAPIAggregationControllerQueue1_unfinished_work_seconds
ALPHA
(project)
APIServiceOpenAPIAggregationControllerQueue1_unfinished_work_seconds
GAUGE , DOUBLE , s
k8s_container
(Deprecated) How many seconds of work APIServiceOpenAPIAggregationControllerQueue1 has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases. Sampled every 60 seconds.
APIServiceOpenAPIAggregationControllerQueue1_work_duration
ALPHA
(project)
APIServiceOpenAPIAggregationControllerQueue1_work_duration
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueueAPIServiceOpenAPIAggregationControllerQueue1 takes. Sampled every 60 seconds.
quantile :
quantile.
APIServiceOpenAPIAggregationControllerQueue1_work_duration_count
ALPHA
(project)
APIServiceOpenAPIAggregationControllerQueue1_work_duration_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long processing an item from workqueueAPIServiceOpenAPIAggregationControllerQueue1 takes. Sampled every 60 seconds.
APIServiceOpenAPIAggregationControllerQueue1_work_duration_sum
ALPHA
(project)
APIServiceOpenAPIAggregationControllerQueue1_work_duration_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueueAPIServiceOpenAPIAggregationControllerQueue1 takes. Sampled every 60 seconds.
APIServiceRegistrationController_adds
ALPHA
(project)
APIServiceRegistrationController_adds
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of adds handled by workqueue: APIServiceRegistrationController. Sampled every 60 seconds.
APIServiceRegistrationController_depth
ALPHA
(project)
APIServiceRegistrationController_depth
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) Current depth of workqueue: APIServiceRegistrationController. Sampled every 60 seconds.
APIServiceRegistrationController_longest_running_processor_microseconds
ALPHA
(project)
APIServiceRegistrationController_longest_running_processor_microseconds
GAUGE , DOUBLE , us
k8s_container
(Deprecated) How many microseconds has the longest running processor for APIServiceRegistrationController been running. Sampled every 60 seconds.
APIServiceRegistrationController_queue_latency
ALPHA
(project)
APIServiceRegistrationController_queue_latency
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueueAPIServiceRegistrationController before being requested. Sampled every 60 seconds.
quantile :
quantile.
APIServiceRegistrationController_queue_latency_count
ALPHA
(project)
APIServiceRegistrationController_queue_latency_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long an item stays in workqueueAPIServiceRegistrationController before being requested. Sampled every 60 seconds.
APIServiceRegistrationController_queue_latency_sum
ALPHA
(project)
APIServiceRegistrationController_queue_latency_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueueAPIServiceRegistrationController before being requested. Sampled every 60 seconds.
APIServiceRegistrationController_retries
ALPHA
(project)
APIServiceRegistrationController_retries
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of retries handled by workqueue: APIServiceRegistrationController. Sampled every 60 seconds.
APIServiceRegistrationController_unfinished_work_seconds
ALPHA
(project)
APIServiceRegistrationController_unfinished_work_seconds
GAUGE , DOUBLE , s
k8s_container
(Deprecated) How many seconds of work APIServiceRegistrationController has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases. Sampled every 60 seconds.
APIServiceRegistrationController_work_duration
ALPHA
(project)
APIServiceRegistrationController_work_duration
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueueAPIServiceRegistrationController takes. Sampled every 60 seconds.
quantile :
quantile.
APIServiceRegistrationController_work_duration_count
ALPHA
(project)
APIServiceRegistrationController_work_duration_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long processing an item from workqueueAPIServiceRegistrationController takes. Sampled every 60 seconds.
APIServiceRegistrationController_work_duration_sum
ALPHA
(project)
APIServiceRegistrationController_work_duration_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueueAPIServiceRegistrationController takes. Sampled every 60 seconds.
AvailableConditionController_adds
ALPHA
(project)
AvailableConditionController_adds
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of adds handled by workqueue: AvailableConditionController. Sampled every 60 seconds.
AvailableConditionController_depth
ALPHA
(project)
AvailableConditionController_depth
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) Current depth of workqueue: AvailableConditionController. Sampled every 60 seconds.
AvailableConditionController_longest_running_processor_microseconds
ALPHA
(project)
AvailableConditionController_longest_running_processor_microseconds
GAUGE , DOUBLE , us
k8s_container
(Deprecated) How many microseconds has the longest running processor for AvailableConditionController been running. Sampled every 60 seconds.
AvailableConditionController_queue_latency
ALPHA
(project)
AvailableConditionController_queue_latency
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueueAvailableConditionController before being requested. Sampled every 60 seconds.
quantile :
quantile.
AvailableConditionController_queue_latency_count
ALPHA
(project)
AvailableConditionController_queue_latency_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long an item stays in workqueueAvailableConditionController before being requested. Sampled every 60 seconds.
AvailableConditionController_queue_latency_sum
ALPHA
(project)
AvailableConditionController_queue_latency_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueueAvailableConditionController before being requested. Sampled every 60 seconds.
AvailableConditionController_retries
ALPHA
(project)
AvailableConditionController_retries
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of retries handled by workqueue: AvailableConditionController. Sampled every 60 seconds.
AvailableConditionController_unfinished_work_seconds
ALPHA
(project)
AvailableConditionController_unfinished_work_seconds
GAUGE , DOUBLE , s
k8s_container
(Deprecated) How many seconds of work AvailableConditionController has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases. Sampled every 60 seconds.
AvailableConditionController_work_duration
ALPHA
(project)
AvailableConditionController_work_duration
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueueAvailableConditionController takes. Sampled every 60 seconds.
quantile :
quantile.
AvailableConditionController_work_duration_count
ALPHA
(project)
AvailableConditionController_work_duration_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long processing an item from workqueueAvailableConditionController takes. Sampled every 60 seconds.
AvailableConditionController_work_duration_sum
ALPHA
(project)
AvailableConditionController_work_duration_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueueAvailableConditionController takes. Sampled every 60 seconds.
ClusterRoleAggregator_adds
ALPHA
(project)
ClusterRoleAggregator_adds
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of adds handled by workqueue: ClusterRoleAggregator. Sampled every 60 seconds.
ClusterRoleAggregator_depth
ALPHA
(project)
ClusterRoleAggregator_depth
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) Current depth of workqueue: ClusterRoleAggregator. Sampled every 60 seconds.
ClusterRoleAggregator_longest_running_processor_microseconds
ALPHA
(project)
ClusterRoleAggregator_longest_running_processor_microseconds
GAUGE , DOUBLE , us
k8s_container
(Deprecated) How many microseconds has the longest running processor for ClusterRoleAggregator been running. Sampled every 60 seconds.
ClusterRoleAggregator_queue_latency
ALPHA
(project)
ClusterRoleAggregator_queue_latency
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueueClusterRoleAggregator before being requested. Sampled every 60 seconds.
quantile :
quantile.
ClusterRoleAggregator_queue_latency_count
ALPHA
(project)
ClusterRoleAggregator_queue_latency_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long an item stays in workqueueClusterRoleAggregator before being requested. Sampled every 60 seconds.
ClusterRoleAggregator_queue_latency_sum
ALPHA
(project)
ClusterRoleAggregator_queue_latency_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueueClusterRoleAggregator before being requested. Sampled every 60 seconds.
ClusterRoleAggregator_retries
ALPHA
(project)
ClusterRoleAggregator_retries
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of retries handled by workqueue: ClusterRoleAggregator. Sampled every 60 seconds.
ClusterRoleAggregator_unfinished_work_seconds
ALPHA
(project)
ClusterRoleAggregator_unfinished_work_seconds
GAUGE , DOUBLE , s
k8s_container
(Deprecated) How many seconds of work ClusterRoleAggregator has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases. Sampled every 60 seconds.
ClusterRoleAggregator_work_duration
ALPHA
(project)
ClusterRoleAggregator_work_duration
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueueClusterRoleAggregator takes. Sampled every 60 seconds.
quantile :
quantile.
ClusterRoleAggregator_work_duration_count
ALPHA
(project)
ClusterRoleAggregator_work_duration_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long processing an item from workqueueClusterRoleAggregator takes. Sampled every 60 seconds.
ClusterRoleAggregator_work_duration_sum
ALPHA
(project)
ClusterRoleAggregator_work_duration_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueueClusterRoleAggregator takes. Sampled every 60 seconds.
DiscoveryController_adds
ALPHA
(project)
DiscoveryController_adds
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of adds handled by workqueue: DiscoveryController. Sampled every 60 seconds.
DiscoveryController_depth
ALPHA
(project)
DiscoveryController_depth
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) Current depth of workqueue: DiscoveryController. Sampled every 60 seconds.
DiscoveryController_longest_running_processor_microseconds
ALPHA
(project)
DiscoveryController_longest_running_processor_microseconds
GAUGE , DOUBLE , us
k8s_container
(Deprecated) How many microseconds has the longest running processor for DiscoveryController been running. Sampled every 60 seconds.
DiscoveryController_queue_latency
ALPHA
(project)
DiscoveryController_queue_latency
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueueDiscoveryController before being requested. Sampled every 60 seconds.
quantile :
quantile.
DiscoveryController_queue_latency_count
ALPHA
(project)
DiscoveryController_queue_latency_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long an item stays in workqueueDiscoveryController before being requested. Sampled every 60 seconds.
DiscoveryController_queue_latency_sum
ALPHA
(project)
DiscoveryController_queue_latency_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueueDiscoveryController before being requested. Sampled every 60 seconds.
DiscoveryController_retries
ALPHA
(project)
DiscoveryController_retries
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of retries handled by workqueue: DiscoveryController. Sampled every 60 seconds.
DiscoveryController_unfinished_work_seconds
ALPHA
(project)
DiscoveryController_unfinished_work_seconds
GAUGE , DOUBLE , s
k8s_container
(Deprecated) How many seconds of work DiscoveryController has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases. Sampled every 60 seconds.
DiscoveryController_work_duration
ALPHA
(project)
DiscoveryController_work_duration
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueueDiscoveryController takes. Sampled every 60 seconds.
quantile :
quantile.
DiscoveryController_work_duration_count
ALPHA
(project)
DiscoveryController_work_duration_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long processing an item from workqueueDiscoveryController takes. Sampled every 60 seconds.
DiscoveryController_work_duration_sum
ALPHA
(project)
DiscoveryController_work_duration_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueueDiscoveryController takes. Sampled every 60 seconds.
activator_request_count
ALPHA
(project)
activator_request_count
CUMULATIVE , DOUBLE , 1
k8s_pod
The number of requests that are routed to Activator. Sampled every 60 seconds.
configuration_name :
configuration_name.
namespace_name :
namespace_name.
num_tries :
num_tries.
response_code :
response_code.
response_code_class :
response_code_class.
revision_name :
revision_name.
service_name :
service_name.
activator_request_latencies
ALPHA
(project)
activator_request_latencies
CUMULATIVE , DISTRIBUTION , 1
k8s_pod
The response time in millisecond. Sampled every 60 seconds.
configuration_name :
configuration_name.
namespace_name :
namespace_name.
response_code :
response_code.
response_code_class :
response_code_class.
revision_name :
revision_name.
service_name :
service_name.
adapter_kubernetes_webhook_duration_milliseconds
ALPHA
(project)
adapter_kubernetes_webhook_duration_milliseconds
CUMULATIVE , DISTRIBUTION , 1
k8s_container
Time taken to process authentication requests. Sampled every 60 seconds.
adapter_kubernetes_webhook_requests_total
ALPHA
(project)
adapter_kubernetes_webhook_requests_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of incoming requests to Kubernetes Webhook adapter. Sampled every 60 seconds.
status_code :
status_code.
admin_level_operation_status_total
ALPHA
(project)
Status of admin-level cluster operations
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_pod
Counts the admin-level status of cluster lifecycle operations. Sampled every 60 seconds.
operation :
operation.
source :
source.
status :
status.
admin_level_operations_total
ALPHA
(project)
Total admin-level cluster operations
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_pod
Counts the total number of admin-level anthos cluster operations attempted. Sampled every 60 seconds.
operation :
operation.
source :
source.
admission_quota_controller_adds
ALPHA
(project)
admission_quota_controller_adds
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of adds handled by workqueue: admission_quota_controller. Sampled every 60 seconds.
admission_quota_controller_depth
ALPHA
(project)
admission_quota_controller_depth
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) Current depth of workqueue: admission_quota_controller. Sampled every 60 seconds.
admission_quota_controller_longest_running_processor_microseconds
ALPHA
(project)
admission_quota_controller_longest_running_processor_microseconds
GAUGE , DOUBLE , us
k8s_container
(Deprecated) How many microseconds has the longest running processor for admission_quota_controller been running. Sampled every 60 seconds.
admission_quota_controller_queue_latency
ALPHA
(project)
admission_quota_controller_queue_latency
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueueadmission_quota_controller before being requested. Sampled every 60 seconds.
quantile :
quantile.
admission_quota_controller_queue_latency_count
ALPHA
(project)
admission_quota_controller_queue_latency_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long an item stays in workqueueadmission_quota_controller before being requested. Sampled every 60 seconds.
admission_quota_controller_queue_latency_sum
ALPHA
(project)
admission_quota_controller_queue_latency_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueueadmission_quota_controller before being requested. Sampled every 60 seconds.
admission_quota_controller_unfinished_work_seconds
ALPHA
(project)
admission_quota_controller_unfinished_work_seconds
GAUGE , DOUBLE , s
k8s_container
(Deprecated) How many seconds of work admission_quota_controller has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases. Sampled every 60 seconds.
admission_quota_controller_work_duration
ALPHA
(project)
admission_quota_controller_work_duration
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueueadmission_quota_controller takes. Sampled every 60 seconds.
quantile :
quantile.
admission_quota_controller_work_duration_count
ALPHA
(project)
admission_quota_controller_work_duration_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long processing an item from workqueueadmission_quota_controller takes. Sampled every 60 seconds.
admission_quota_controller_work_duration_sum
ALPHA
(project)
admission_quota_controller_work_duration_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueueadmission_quota_controller takes. Sampled every 60 seconds.
agent_googleapis_com_agent_uptime
ALPHA
(project)
agent_googleapis_com_agent_uptime
CUMULATIVE , DOUBLE , 1
k8s_container
uptime of the Stackdriver Prometheus collector. Sampled every 60 seconds.
version :
version.
aggregator_openapi_v2_regeneration_count
ALPHA
(project)
aggregator_openapi_v2_regeneration_count
CUMULATIVE , DOUBLE , 1
k8s_container
[ALPHA] Counter of OpenAPI v2 spec regeneration count broken down by causing APIService name and reason. Sampled every 60 seconds.
apiservice :
apiservice.
reason :
reason.
aggregator_openapi_v2_regeneration_count/counter
ALPHA
(project)
aggregator_openapi_v2_regeneration_count
CUMULATIVE , DOUBLE , 1
prometheus_target
[ALPHA] Counter of OpenAPI v2 spec regeneration count broken down by causing APIService name and reason. Sampled every 30 seconds.
apiservice :
apiservice.
reason :
reason.
aggregator_openapi_v2_regeneration_duration
ALPHA
(project)
aggregator_openapi_v2_regeneration_duration
GAUGE , DOUBLE , 1
k8s_container
[ALPHA] Gauge of OpenAPI v2 spec regeneration duration in seconds. Sampled every 60 seconds.
reason :
reason.
aggregator_unavailable_apiservice
ALPHA
(project)
aggregator_unavailable_apiservice
GAUGE , DOUBLE , 1
k8s_container
[ALPHA] Gauge of APIServices which are marked as unavailable broken down by APIService name. Sampled every 60 seconds.
name :
name.
reason :
reason.
aggregator_unavailable_apiservice/gauge
ALPHA
(project)
aggregator_unavailable_apiservice
GAUGE , DOUBLE , 1
prometheus_target
[ALPHA] Gauge of APIServices which are marked as unavailable broken down by APIService name. Sampled every 30 seconds.
name :
name.
reason :
reason.
aggregator_unavailable_apiservice_count
ALPHA
(project)
aggregator_unavailable_apiservice_count
CUMULATIVE , DOUBLE , 1
k8s_container
Counter of APIServices which are marked as unavailable broken down by APIService name and reason. Sampled every 60 seconds.
name :
name.
reason :
reason.
aggregator_unavailable_apiservice_total
ALPHA
(project)
aggregator_unavailable_apiservice_total
CUMULATIVE , DOUBLE , 1
k8s_container
Counter of APIServices which are marked as unavailable broken down by APIService name and reason. Sampled every 60 seconds.
name :
name.
reason :
reason.
ais_authn_duration_milliseconds
ALPHA
(project)
ais_authn_duration_milliseconds
CUMULATIVE , DISTRIBUTION , 1
k8s_container
Time taken to process authentication requests. Sampled every 60 seconds.
method :
method.
ais_authn_requests_total
ALPHA
(project)
ais_authn_requests_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of incoming authentication requests. Sampled every 60 seconds.
method :
method.
status_code :
status_code.
ais_token_access_duration_milliseconds
ALPHA
(project)
ais_token_access_duration_milliseconds
CUMULATIVE , DISTRIBUTION , 1
k8s_container
Time taken by STS module to process a request. Sampled every 60 seconds.
ais_token_access_requests_total
ALPHA
(project)
ais_token_access_requests_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of authentication requests processed by STS module. Sampled every 60 seconds.
method :
method.
status_code :
status_code.
ais_token_exchange_duration_milliseconds
ALPHA
(project)
ais_token_exchange_duration_milliseconds
CUMULATIVE , DISTRIBUTION , 1
k8s_container
Time taken to process token exchange requests. Sampled every 60 seconds.
ais_token_exchange_requests_total
ALPHA
(project)
ais_token_exchange_requests_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of incoming token exchange requests to the STS server. Sampled every 60 seconds.
status_code :
status_code.
alertmanager_alerts
ALPHA
(project)
alertmanager_alerts
GAUGE , DOUBLE , 1
k8s_container
How many alerts by state. Sampled every 60 seconds.
state :
state.
alertmanager_alerts_invalid_total
ALPHA
(project)
alertmanager_alerts_invalid_total
CUMULATIVE , DOUBLE , 1
k8s_container
The total number of received alerts that were invalid. Sampled every 60 seconds.
version :
version.
alertmanager_alerts_received_total
ALPHA
(project)
alertmanager_alerts_received_total
CUMULATIVE , DOUBLE , 1
k8s_container
The total number of received alerts. Sampled every 60 seconds.
status :
status.
version :
version.
alertmanager_build_info
ALPHA
(project)
alertmanager_build_info
GAUGE , DOUBLE , 1
k8s_container
A metric with a constant '1' value labeled by version, revision, branch, and goversion from which alertmanager was built. Sampled every 60 seconds.
branch :
branch.
goversion :
goversion.
revision :
revision.
version :
version.
alertmanager_cluster_alive_messages_total
ALPHA
(project)
alertmanager_cluster_alive_messages_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of received alive messages. Sampled every 60 seconds.
peer :
peer.
alertmanager_cluster_enabled
ALPHA
(project)
alertmanager_cluster_enabled
GAUGE , DOUBLE , 1
k8s_container
Indicates whether the clustering is enabled or not. Sampled every 60 seconds.
alertmanager_cluster_failed_peers
ALPHA
(project)
alertmanager_cluster_failed_peers
GAUGE , DOUBLE , 1
k8s_container
Number indicating the current number of failed peers in the cluster. Sampled every 60 seconds.
alertmanager_cluster_health_score
ALPHA
(project)
alertmanager_cluster_health_score
GAUGE , DOUBLE , 1
k8s_container
Health score of the cluster. Lower values are better and zero means 'totally healthy'. Sampled every 60 seconds.
alertmanager_cluster_members
ALPHA
(project)
alertmanager_cluster_members
GAUGE , DOUBLE , 1
k8s_container
Number indicating current number of members in cluster. Sampled every 60 seconds.
alertmanager_cluster_messages_pruned_total
ALPHA
(project)
alertmanager_cluster_messages_pruned_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of cluster messages pruned. Sampled every 60 seconds.
alertmanager_cluster_messages_queued
ALPHA
(project)
alertmanager_cluster_messages_queued
GAUGE , DOUBLE , 1
k8s_container
Number of cluster messages which are queued. Sampled every 60 seconds.
alertmanager_cluster_messages_received_size_total
ALPHA
(project)
alertmanager_cluster_messages_received_size_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total size of cluster messages received. Sampled every 60 seconds.
msg_type :
msg_type.
alertmanager_cluster_messages_received_total
ALPHA
(project)
alertmanager_cluster_messages_received_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of cluster messages received. Sampled every 60 seconds.
msg_type :
msg_type.
alertmanager_cluster_messages_sent_size_total
ALPHA
(project)
alertmanager_cluster_messages_sent_size_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total size of cluster messages sent. Sampled every 60 seconds.
msg_type :
msg_type.
alertmanager_cluster_messages_sent_total
ALPHA
(project)
alertmanager_cluster_messages_sent_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of cluster messages sent. Sampled every 60 seconds.
msg_type :
msg_type.
alertmanager_cluster_peer_info
ALPHA
(project)
alertmanager_cluster_peer_info
GAUGE , DOUBLE , 1
k8s_container
A metric with a constant '1' value labeled by peer name. Sampled every 60 seconds.
peer :
peer.
alertmanager_cluster_peers_joined_total
ALPHA
(project)
alertmanager_cluster_peers_joined_total
CUMULATIVE , DOUBLE , 1
k8s_container
A counter of the number of peers that have joined. Sampled every 60 seconds.
alertmanager_cluster_peers_left_total
ALPHA
(project)
alertmanager_cluster_peers_left_total
CUMULATIVE , DOUBLE , 1
k8s_container
A counter of the number of peers that have left. Sampled every 60 seconds.
alertmanager_cluster_peers_update_total
ALPHA
(project)
alertmanager_cluster_peers_update_total
CUMULATIVE , DOUBLE , 1
k8s_container
A counter of the number of peers that have updated metadata. Sampled every 60 seconds.
alertmanager_cluster_pings_seconds
ALPHA
(project)
alertmanager_cluster_pings_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
Histogram of latencies for ping messages. Sampled every 60 seconds.
peer :
peer.
alertmanager_cluster_reconnections_failed_total
ALPHA
(project)
alertmanager_cluster_reconnections_failed_total
CUMULATIVE , DOUBLE , 1
k8s_container
A counter of the number of failed cluster peer reconnection attempts. Sampled every 60 seconds.
alertmanager_cluster_reconnections_total
ALPHA
(project)
alertmanager_cluster_reconnections_total
CUMULATIVE , DOUBLE , 1
k8s_container
A counter of the number of cluster peer reconnections. Sampled every 60 seconds.
alertmanager_cluster_refresh_join_failed_total
ALPHA
(project)
alertmanager_cluster_refresh_join_failed_total
CUMULATIVE , DOUBLE , 1
k8s_container
A counter of the number of failed cluster peer joined attempts via refresh. Sampled every 60 seconds.
alertmanager_cluster_refresh_join_total
ALPHA
(project)
alertmanager_cluster_refresh_join_total
CUMULATIVE , DOUBLE , 1
k8s_container
A counter of the number of cluster peer joined via refresh. Sampled every 60 seconds.
alertmanager_config_hash
ALPHA
(project)
alertmanager_config_hash
GAUGE , DOUBLE , 1
k8s_container
Hash of the currently loaded alertmanager configuration. Sampled every 60 seconds.
alertmanager_config_last_reload_success_timestamp_seconds
ALPHA
(project)
alertmanager_config_last_reload_success_timestamp_seconds
GAUGE , DOUBLE , s
k8s_container
Timestamp of the last successful configuration reload. Sampled every 60 seconds.
alertmanager_config_last_reload_successful
ALPHA
(project)
alertmanager_config_last_reload_successful
GAUGE , DOUBLE , 1
k8s_container
Whether the last configuration reload attempt was successful. Sampled every 60 seconds.
alertmanager_dispatcher_aggregation_groups
ALPHA
(project)
alertmanager_dispatcher_aggregation_groups
GAUGE , DOUBLE , 1
k8s_container
Number of active aggregation groups. Sampled every 60 seconds.
alertmanager_http_concurrency_limit_exceeded_total
ALPHA
(project)
alertmanager_http_concurrency_limit_exceeded_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of times an HTTP request failed because the concurrency limit was reached. Sampled every 60 seconds.
method :
method.
alertmanager_http_request_duration_seconds
ALPHA
(project)
alertmanager_http_request_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
Histogram of latencies for HTTP requests. Sampled every 60 seconds.
handler :
handler.
method :
method.
alertmanager_http_requests_in_flight
ALPHA
(project)
alertmanager_http_requests_in_flight
GAUGE , DOUBLE , 1
k8s_container
Current number of HTTP requests being processed. Sampled every 60 seconds.
method :
method.
alertmanager_http_response_size_bytes
ALPHA
(project)
alertmanager_http_response_size_bytes
CUMULATIVE , DISTRIBUTION , By
k8s_container
Histogram of response size for HTTP requests. Sampled every 60 seconds.
handler :
handler.
method :
method.
alertmanager_integrations
ALPHA
(project)
alertmanager_integrations
GAUGE , DOUBLE , 1
k8s_container
Number of configured integrations. Sampled every 60 seconds.
alertmanager_nflog_gc_duration_seconds
ALPHA
(project)
alertmanager_nflog_gc_duration_seconds
GAUGE , DOUBLE , s
k8s_container
Duration of the last notification log garbage collection cycle. Sampled every 60 seconds.
quantile :
quantile.
alertmanager_nflog_gc_duration_seconds_count
ALPHA
(project)
alertmanager_nflog_gc_duration_seconds_count
CUMULATIVE , INT64 , 1
k8s_container
Duration of the last notification log garbage collection cycle. Sampled every 60 seconds.
alertmanager_nflog_gc_duration_seconds_sum
ALPHA
(project)
alertmanager_nflog_gc_duration_seconds_sum
CUMULATIVE , DOUBLE , 1
k8s_container
Duration of the last notification log garbage collection cycle. Sampled every 60 seconds.
alertmanager_nflog_gossip_messages_propagated_total
ALPHA
(project)
alertmanager_nflog_gossip_messages_propagated_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of received gossip messages that have been further gossiped. Sampled every 60 seconds.
alertmanager_nflog_queries_total
ALPHA
(project)
alertmanager_nflog_queries_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of notification log queries were received. Sampled every 60 seconds.
alertmanager_nflog_query_duration_seconds
ALPHA
(project)
alertmanager_nflog_query_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
Duration of notification log query evaluation. Sampled every 60 seconds.
alertmanager_nflog_query_errors_total
ALPHA
(project)
alertmanager_nflog_query_errors_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number notification log received queries that failed. Sampled every 60 seconds.
alertmanager_nflog_snapshot_duration_seconds
ALPHA
(project)
alertmanager_nflog_snapshot_duration_seconds
GAUGE , DOUBLE , s
k8s_container
Duration of the last notification log snapshot. Sampled every 60 seconds.
quantile :
quantile.
alertmanager_nflog_snapshot_duration_seconds_count
ALPHA
(project)
alertmanager_nflog_snapshot_duration_seconds_count
CUMULATIVE , INT64 , 1
k8s_container
Duration of the last notification log snapshot. Sampled every 60 seconds.
alertmanager_nflog_snapshot_duration_seconds_sum
ALPHA
(project)
alertmanager_nflog_snapshot_duration_seconds_sum
CUMULATIVE , DOUBLE , 1
k8s_container
Duration of the last notification log snapshot. Sampled every 60 seconds.
alertmanager_nflog_snapshot_size_bytes
ALPHA
(project)
alertmanager_nflog_snapshot_size_bytes
GAUGE , DOUBLE , By
k8s_container
Size of the last notification log snapshot in bytes. Sampled every 60 seconds.
alertmanager_notification_latency_seconds
ALPHA
(project)
alertmanager_notification_latency_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
The latency of notifications in seconds. Sampled every 60 seconds.
integration :
integration.
alertmanager_notifications_failed_total
ALPHA
(project)
alertmanager_notifications_failed_total
CUMULATIVE , DOUBLE , 1
k8s_container
The total number of failed notifications. Sampled every 60 seconds.
integration :
integration.
alertmanager_notifications_total
ALPHA
(project)
alertmanager_notifications_total
CUMULATIVE , DOUBLE , 1
k8s_container
The total number of attempted notifications. Sampled every 60 seconds.
integration :
integration.
alertmanager_oversize_gossip_message_duration_seconds
ALPHA
(project)
alertmanager_oversize_gossip_message_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
Duration of oversized gossip message requests. Sampled every 60 seconds.
key :
key.
alertmanager_oversized_gossip_message_dropped_total
ALPHA
(project)
alertmanager_oversized_gossip_message_dropped_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of oversized gossip messages that were dropped due to a full message queue. Sampled every 60 seconds.
key :
key.
alertmanager_oversized_gossip_message_failure_total
ALPHA
(project)
alertmanager_oversized_gossip_message_failure_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of oversized gossip message sends that failed. Sampled every 60 seconds.
key :
key.
alertmanager_oversized_gossip_message_sent_total
ALPHA
(project)
alertmanager_oversized_gossip_message_sent_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of oversized gossip message sent. Sampled every 60 seconds.
key :
key.
alertmanager_peer_position
ALPHA
(project)
alertmanager_peer_position
GAUGE , DOUBLE , 1
k8s_container
Position the Alertmanager instance believes it's in. The position determines a peer's behavior in the cluster. Sampled every 60 seconds.
alertmanager_receivers
ALPHA
(project)
alertmanager_receivers
GAUGE , DOUBLE , 1
k8s_container
Number of configured receivers. Sampled every 60 seconds.
alertmanager_silences
ALPHA
(project)
alertmanager_silences
GAUGE , DOUBLE , 1
k8s_container
How many silences by state. Sampled every 60 seconds.
state :
state.
alertmanager_silences_gc_duration_seconds
ALPHA
(project)
alertmanager_silences_gc_duration_seconds
GAUGE , DOUBLE , s
k8s_container
Duration of the last silence garbage collection cycle. Sampled every 60 seconds.
quantile :
quantile.
alertmanager_silences_gc_duration_seconds_count
ALPHA
(project)
alertmanager_silences_gc_duration_seconds_count
CUMULATIVE , INT64 , 1
k8s_container
Duration of the last silence garbage collection cycle. Sampled every 60 seconds.
alertmanager_silences_gc_duration_seconds_sum
ALPHA
(project)
alertmanager_silences_gc_duration_seconds_sum
CUMULATIVE , DOUBLE , 1
k8s_container
Duration of the last silence garbage collection cycle. Sampled every 60 seconds.
alertmanager_silences_gossip_messages_propagated_total
ALPHA
(project)
alertmanager_silences_gossip_messages_propagated_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of received gossip messages that have been further gossiped. Sampled every 60 seconds.
alertmanager_silences_queries_total
ALPHA
(project)
alertmanager_silences_queries_total
CUMULATIVE , DOUBLE , 1
k8s_container
How many silence queries were received. Sampled every 60 seconds.
alertmanager_silences_query_duration_seconds
ALPHA
(project)
alertmanager_silences_query_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
Duration of silence query evaluation. Sampled every 60 seconds.
alertmanager_silences_query_errors_total
ALPHA
(project)
alertmanager_silences_query_errors_total
CUMULATIVE , DOUBLE , 1
k8s_container
How many silence received queries did not succeed. Sampled every 60 seconds.
alertmanager_silences_snapshot_duration_seconds
ALPHA
(project)
alertmanager_silences_snapshot_duration_seconds
GAUGE , DOUBLE , s
k8s_container
Duration of the last silence snapshot. Sampled every 60 seconds.
quantile :
quantile.
alertmanager_silences_snapshot_duration_seconds_count
ALPHA
(project)
alertmanager_silences_snapshot_duration_seconds_count
CUMULATIVE , INT64 , 1
k8s_container
Duration of the last silence snapshot. Sampled every 60 seconds.
alertmanager_silences_snapshot_duration_seconds_sum
ALPHA
(project)
alertmanager_silences_snapshot_duration_seconds_sum
CUMULATIVE , DOUBLE , 1
k8s_container
Duration of the last silence snapshot. Sampled every 60 seconds.
alertmanager_silences_snapshot_size_bytes
ALPHA
(project)
alertmanager_silences_snapshot_size_bytes
GAUGE , DOUBLE , By
k8s_container
Size of the last silence snapshot in bytes. Sampled every 60 seconds.
ang_networkgatewaynode_status/gauge
ALPHA
(project)
ang_networkgatewaynode_status
GAUGE , DOUBLE , 1
prometheus_target
The node status of networkgatewaynodes custom resource. Sampled every 30 seconds.
group :
group.
kind :
kind.
name :
name.
status :
status.
version :
version.
ang_resource_condition/gauge
ALPHA
(project)
ang_resource_condition
GAUGE , DOUBLE , 1
prometheus_target
The condition of Anthos Network Gateway custom resources. Sampled every 30 seconds.
group :
group.
kind :
kind.
name :
name.
reason :
reason.
status :
status.
type :
type.
version :
version.
ang_resource_count/gauge
ALPHA
(project)
ang_resource_count
GAUGE , DOUBLE , 1
prometheus_target
Count of Anthos Network Gateway custom resources. Sampled every 30 seconds.
group :
group.
kind :
kind.
name :
name.
uid :
uid.
version :
version.
anthos_baremetal_cluster
ALPHA
(project)
anthos_baremetal_cluster
GAUGE , DOUBLE , 1
k8s_container
Bare metal cluster counter. Sampled every 60 seconds.
anthos_version :
anthos_version.
authentication :
authentication.
cluster_name :
cluster_name.
cluster_type :
cluster_type.
container_runtime :
container_runtime.
customized_provider :
customized_provider.
flat_ipv4 :
flat_ipv4.
gcp_auth_method :
gcp_auth_method.
gke_connect :
gke_connect.
ha_cluster :
ha_cluster.
ip_family :
ip_family.
kubevirt :
kubevirt.
kubevirt_version :
kubevirt_version.
lb_mode :
lb_mode.
multi_nic :
multi_nic.
openstack :
openstack.
operator_id :
operator_id.
private_repository :
private_repository.
profile :
profile.
registry_mirror :
registry_mirror.
stackdriver :
stackdriver.
anthos_baremetal_cluster_heartbeat_for_kubevirt_metrics
ALPHA
(project)
anthos_baremetal_cluster_heartbeat_for_kubevirt_metrics
GAUGE , DOUBLE , 1
k8s_container
Heartbeat signal increase on every scrape indicating clusters are alive. Sampled every 60 seconds.
operator_id :
operator_id.
anthos_baremetal_cluster_operator_heartbeat
ALPHA
(project)
anthos_baremetal_cluster_operator_heartbeat
GAUGE , DOUBLE , 1
k8s_container
Heartbeat signal increase on every scrape indicating controller is alive. Sampled every 60 seconds.
operator_id :
operator_id.
anthos_baremetal_cluster_size
ALPHA
(project)
anthos_baremetal_cluster_size
GAUGE , DOUBLE , 1
k8s_container
Bare metal cluster size. Sampled every 60 seconds.
anthos_version :
anthos_version.
authentication :
authentication.
cluster_name :
cluster_name.
cluster_type :
cluster_type.
gke_connect :
gke_connect.
ha_cluster :
ha_cluster.
kubevirt :
kubevirt.
kubevirt_version :
kubevirt_version.
operator_id :
operator_id.
stackdriver :
stackdriver.
anthos_baremetal_cluster_vmi_count
ALPHA
(project)
anthos_baremetal_cluster_vmi_count
GAUGE , DOUBLE , 1
k8s_container
Bare metal cluster VMI counter. Sampled every 60 seconds.
cpu_size :
cpu_size.
disk_size :
disk_size.
memory_size :
memory_size.
vm_name :
vm_name.
vm_namespace :
vm_namespace.
anthos_baremetal_clusters_vm_count
ALPHA
(project)
anthos_baremetal_clusters_vm_count
GAUGE , DOUBLE , 1
k8s_container
Bare metal clusters VM counter. Sampled every 60 seconds.
vm_name :
vm_name.
vm_namespace :
vm_namespace.
vm_status :
vm_status.
anthos_baremetal_kubelet_config
ALPHA
(project)
anthos_baremetal_kubelet_config
GAUGE , DOUBLE , 1
k8s_container
[ALPHA] This metric reports kubelet configuration from nodepool spec. Sampled every 60 seconds.
modified_field :
modified_field.
nodepool :
nodepool.
target_cluster_location :
target_cluster_location.
target_cluster_name :
target_cluster_name.
target_cluster_project_id :
target_cluster_project_id.
anthos_baremetal_metrics_collector_reconcile_error
ALPHA
(project)
anthos_baremetal_metrics_collector_reconcile_error
CUMULATIVE , DOUBLE , 1
k8s_container
Number of request_failure_counter. Sampled every 60 seconds.
cluster_vm_vmi_metric :
cluster_vm_vmi_metric.
operator_id :
operator_id.
step :
step.
anthos_baremetal_node_os_count
ALPHA
(project)
anthos_baremetal_node_os_count
GAUGE , DOUBLE , 1
k8s_container
Bare metal node OS counter. Sampled every 60 seconds.
anthos_version :
anthos_version.
authentication :
authentication.
cluster_name :
cluster_name.
cluster_type :
cluster_type.
gke_connect :
gke_connect.
ha_cluster :
ha_cluster.
kubevirt :
kubevirt.
node_pool_name :
node_pool_name.
operator_id :
operator_id.
os_version :
os_version.
stackdriver :
stackdriver.
anthos_baremetal_operator_reconcile_error
ALPHA
(project)
anthos_baremetal_operator_reconcile_error
CUMULATIVE , DOUBLE , 1
k8s_container
[ALPHA] Number of operator reconcile failures or resource overrides. Sampled every 60 seconds.
controller :
controller.
operator_id :
operator_id.
reason :
reason.
step :
step.
target_cluster_name :
target_cluster_name.
anthos_cluster_info
ALPHA
(project)
anthos_cluster_info
GAUGE , DOUBLE , 1
k8s_container
k8s_pod
Anthos cluster information. Sampled every 60 seconds.
anthos_distribution :
anthos_distribution.
anthos_edge_cluster
ALPHA
(project)
Anthos Edge cluster
GAUGE , DOUBLE , 1
k8s_cluster
Collected from the Edge API, for each cluster opted into the Edge API. Always reports 1. Sampled every 60 seconds.
cluster_healthy :
Indicates the healthiness state of the cluster.
under_maintenance :
Indicates whether the cluster is under maintenance mode. 1 for true and 0 for false.
anthos_network_gateway_info
ALPHA
(project)
anthos_network_gateway_info
GAUGE , DOUBLE , 1
k8s_container
Metrics related to Anthos network gateway features info. Sampled every 60 seconds.
anthos_network_gateway_enabled :
anthos_network_gateway_enabled.
bgp_lb_enabled :
bgp_lb_enabled.
egressnat_enabled :
egressnat_enabled.
multicluster_connectivity_enabled :
multicluster_connectivity_enabled.
anthos_performance_tuning_status_nodes
ALPHA
(project)
anthos_performance_tuning_status_nodes
GAUGE , DOUBLE , 1
k8s_container
[ALPHA] Anthos Performance Tuning Profile node status. Sampled every 60 seconds.
profile_name :
profile_name.
profile_namespace :
profile_namespace.
status :
status.
anthos_project_type
ALPHA
(project)
Project type for an Anthos cluster
GAUGE , DOUBLE , 1
k8s_cluster
k8s_container
k8s_pod
This metric associates an anthos project type to an anthos project id. Sampled every 60 seconds.
type :
type.
apiextensions_openapi_v2_regeneration_count
ALPHA
(project)
apiextensions_openapi_v2_regeneration_count
CUMULATIVE , DOUBLE , 1
k8s_container
[ALPHA] Counter of OpenAPI v2 spec regeneration count broken down by causing CRD name and reason. Sampled every 60 seconds.
crd :
crd.
reason :
reason.
apiextensions_openapi_v3_regeneration_count
ALPHA
(project)
apiextensions_openapi_v3_regeneration_count
CUMULATIVE , DOUBLE , 1
k8s_container
[ALPHA] Counter of OpenAPI v3 spec regeneration count broken down by group, version, causing CRD and reason. Sampled every 60 seconds.
crd :
crd.
group :
group.
reason :
reason.
version :
version.
apiserver_admission_controller_admission_duration_seconds
ALPHA
(project)
apiserver_admission_controller_admission_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
[STABLE] Admission controller latency histogram in seconds, identified by name and broken out for each operation and API resource and type (validate or admit). Sampled every 60 seconds.
name :
name.
operation :
operation.
rejected :
rejected.
type :
type.
apiserver_admission_controller_admission_duration_seconds/histogram
ALPHA
(project)
apiserver_admission_controller_admission_duration_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
[STABLE] Admission controller latency histogram in seconds, identified by name and broken out for each operation and API resource and type (validate or admit). Sampled every 30 seconds.
name :
name.
operation :
operation.
rejected :
rejected.
type :
type.
apiserver_admission_controller_admission_latencies_milliseconds
ALPHA
(project)
apiserver_admission_controller_admission_latencies_milliseconds
CUMULATIVE , DISTRIBUTION , 1
k8s_container
(Deprecated) Admission controller latency histogram in milliseconds, identified by name and broken out for each operation and API resource and type (validate or admit). Sampled every 60 seconds.
name :
name.
operation :
operation.
rejected :
rejected.
type :
type.
apiserver_admission_controller_admission_latencies_seconds
ALPHA
(project)
apiserver_admission_controller_admission_latencies_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
Admission controller latency histogram, identified by name and broken out for each operation and API resource and type (validate or admit). Sampled every 60 seconds.
name :
name.
operation :
operation.
rejected :
rejected.
type :
type.
apiserver_admission_gke_webhook_manifest_error
ALPHA
(project)
apiserver_admission_gke_webhook_manifest_error
GAUGE , DOUBLE , 1
k8s_container
Indicates if there were errors encountered while loading manifest based webhooks. Sampled every 60 seconds.
apiserver_admission_gke_webhook_metadata
ALPHA
(project)
apiserver_admission_gke_webhook_metadata
GAUGE , DOUBLE , 1
k8s_container
Metadata for admission webhooks. Sampled every 60 seconds.
manifest_based :
manifest_based.
name :
name.
type :
type.
apiserver_admission_step_admission_duration_seconds
ALPHA
(project)
apiserver_admission_step_admission_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
[STABLE] Admission sub-step latency histogram in seconds, broken out for each operation and API resource and step type (validate or admit). Sampled every 60 seconds.
operation :
operation.
rejected :
rejected.
type :
type.
apiserver_admission_step_admission_duration_seconds/histogram
ALPHA
(project)
apiserver_admission_step_admission_duration_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
[STABLE] Admission sub-step latency histogram in seconds, broken out for each operation and API resource and step type (validate or admit). Sampled every 30 seconds.
operation :
operation.
rejected :
rejected.
type :
type.
apiserver_admission_step_admission_duration_seconds_summary
ALPHA
(project)
apiserver_admission_step_admission_duration_seconds_summary
GAUGE , DOUBLE , 1
k8s_container
Admission sub-step latency summary in seconds, broken out for each operation and API resource and step type (validate or admit). Sampled every 60 seconds.
operation :
operation.
quantile :
quantile.
rejected :
rejected.
type :
type.
apiserver_admission_step_admission_duration_seconds_summary_count
ALPHA
(project)
apiserver_admission_step_admission_duration_seconds_summary_count
CUMULATIVE , INT64 , 1
k8s_container
Admission sub-step latency summary in seconds, broken out for each operation and API resource and step type (validate or admit). Sampled every 60 seconds.
operation :
operation.
rejected :
rejected.
type :
type.
apiserver_admission_step_admission_duration_seconds_summary_sum
ALPHA
(project)
apiserver_admission_step_admission_duration_seconds_summary_sum
CUMULATIVE , DOUBLE , 1
k8s_container
Admission sub-step latency summary in seconds, broken out for each operation and API resource and step type (validate or admit). Sampled every 60 seconds.
operation :
operation.
rejected :
rejected.
type :
type.
apiserver_admission_step_admission_latencies_milliseconds
ALPHA
(project)
apiserver_admission_step_admission_latencies_milliseconds
CUMULATIVE , DISTRIBUTION , 1
k8s_container
(Deprecated) Admission sub-step latency histogram in milliseconds, broken out for each operation and API resource and step type (validate or admit). Sampled every 60 seconds.
operation :
operation.
rejected :
rejected.
type :
type.
apiserver_admission_step_admission_latencies_milliseconds_summary
ALPHA
(project)
apiserver_admission_step_admission_latencies_milliseconds_summary
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) Admission sub-step latency summary in milliseconds, broken out for each operation and API resource and step type (validate or admit). Sampled every 60 seconds.
operation :
operation.
quantile :
quantile.
rejected :
rejected.
type :
type.
apiserver_admission_step_admission_latencies_milliseconds_summary_count
ALPHA
(project)
apiserver_admission_step_admission_latencies_milliseconds_summary_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) Admission sub-step latency summary in milliseconds, broken out for each operation and API resource and step type (validate or admit). Sampled every 60 seconds.
operation :
operation.
rejected :
rejected.
type :
type.
apiserver_admission_step_admission_latencies_milliseconds_summary_sum
ALPHA
(project)
apiserver_admission_step_admission_latencies_milliseconds_summary_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Admission sub-step latency summary in milliseconds, broken out for each operation and API resource and step type (validate or admit). Sampled every 60 seconds.
operation :
operation.
rejected :
rejected.
type :
type.
apiserver_admission_step_admission_latencies_seconds
ALPHA
(project)
apiserver_admission_step_admission_latencies_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
Admission sub-step latency histogram, broken out for each operation and API resource and step type (validate or admit). Sampled every 60 seconds.
operation :
operation.
rejected :
rejected.
type :
type.
apiserver_admission_step_admission_latencies_seconds_summary
ALPHA
(project)
apiserver_admission_step_admission_latencies_seconds_summary
GAUGE , DOUBLE , 1
k8s_container
Admission sub-step latency summary, broken out for each operation and API resource and step type (validate or admit). Sampled every 60 seconds.
operation :
operation.
quantile :
quantile.
rejected :
rejected.
type :
type.
apiserver_admission_step_admission_latencies_seconds_summary_count
ALPHA
(project)
apiserver_admission_step_admission_latencies_seconds_summary_count
CUMULATIVE , INT64 , 1
k8s_container
Admission sub-step latency summary, broken out for each operation and API resource and step type (validate or admit). Sampled every 60 seconds.
operation :
operation.
rejected :
rejected.
type :
type.
apiserver_admission_step_admission_latencies_seconds_summary_sum
ALPHA
(project)
apiserver_admission_step_admission_latencies_seconds_summary_sum
CUMULATIVE , DOUBLE , 1
k8s_container
Admission sub-step latency summary, broken out for each operation and API resource and step type (validate or admit). Sampled every 60 seconds.
operation :
operation.
rejected :
rejected.
type :
type.
apiserver_admission_webhook_admission_duration_seconds
ALPHA
(project)
apiserver_admission_webhook_admission_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
[STABLE] Admission webhook latency histogram in seconds, identified by name and broken out for each operation and API resource and type (validate or admit). Sampled every 60 seconds.
name :
name.
operation :
operation.
rejected :
rejected.
type :
type.
apiserver_admission_webhook_admission_duration_seconds/histogram
ALPHA
(project)
apiserver_admission_webhook_admission_duration_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
[STABLE] Admission webhook latency histogram in seconds, identified by name and broken out for each operation and API resource and type (validate or admit). Sampled every 30 seconds.
name :
name.
operation :
operation.
rejected :
rejected.
type :
type.
apiserver_admission_webhook_fail_open_count
ALPHA
(project)
apiserver_admission_webhook_fail_open_count
CUMULATIVE , DOUBLE , 1
k8s_container
[ALPHA] Admission webhook fail open count, identified by name and broken out for each admission type (validating or mutating). Sampled every 60 seconds.
name :
name.
type :
type.
apiserver_admission_webhook_rejection_count
ALPHA
(project)
apiserver_admission_webhook_rejection_count
CUMULATIVE , DOUBLE , 1
k8s_container
[ALPHA] Admission webhook rejection count, identified by name and broken out for each admission type (validating or admit) and operation. Additional labels specify an error type (calling_webhook_error or apiserver_internal_error if an error occurred; no_error otherwise) and optionally a non-zero rejection code if the webhook rejects the request with an HTTP status code (honored by the apiserver when the code is greater or equal to 400). Codes greater than 600 are truncated to 600, to keep the metrics cardinality bounded. Sampled every 60 seconds.
error_type :
error_type.
name :
name.
operation :
operation.
rejection_code :
rejection_code.
type :
type.
apiserver_admission_webhook_rejection_count/counter
ALPHA
(project)
apiserver_admission_webhook_rejection_count
CUMULATIVE , DOUBLE , 1
prometheus_target
[ALPHA] Admission webhook rejection count, identified by name and broken out for each admission type (validating or admit) and operation. Additional labels specify an error type (calling_webhook_error or apiserver_internal_error if an error occurred; no_error otherwise) and optionally a non-zero rejection code if the webhook rejects the request with an HTTP status code (honored by the apiserver when the code is greater or equal to 400). Codes greater than 600 are truncated to 600, to keep the metrics cardinality bounded. Sampled every 30 seconds.
error_type :
error_type.
name :
name.
operation :
operation.
rejection_code :
rejection_code.
type :
type.
apiserver_admission_webhook_request_total
ALPHA
(project)
apiserver_admission_webhook_request_total
CUMULATIVE , DOUBLE , 1
k8s_container
[ALPHA] Admission webhook request total, identified by name and broken out for each admission type (validating or mutating) and operation. Additional labels specify whether the request was rejected or not and an HTTP status code. Codes greater than 600 are truncated to 600, to keep the metrics cardinality bounded. Sampled every 60 seconds.
code :
code.
name :
name.
operation :
operation.
rejected :
rejected.
type :
type.
apiserver_admission_webhook_request_total/counter
ALPHA
(project)
apiserver_admission_webhook_request_total
CUMULATIVE , DOUBLE , 1
prometheus_target
[ALPHA] Admission webhook request total, identified by name and broken out for each admission type (validating or mutating) and operation. Additional labels specify whether the request was rejected or not and an HTTP status code. Codes greater than 600 are truncated to 600, to keep the metrics cardinality bounded. Sampled every 30 seconds.
code :
code.
name :
name.
operation :
operation.
rejected :
rejected.
type :
type.
apiserver_aggregated_request_total
ALPHA
(project)
apiserver_aggregated_request_total
DELTA , DOUBLE , 1
k8s_container
Delta count of apiserver requests broken out for each verb, scope, and HTTP response code. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
code :
code.
scope :
scope.
verb :
verb.
apiserver_audit_error_total
ALPHA
(project)
apiserver_audit_error_total
CUMULATIVE , DOUBLE , 1
k8s_container
Counter of audit events that failed to be audited properly. Plugin identifies the plugin affected by the error. Sampled every 60 seconds.
plugin :
plugin.
apiserver_audit_event_total
ALPHA
(project)
apiserver_audit_event_total
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_node
Counter of audit events generated and sent to the audit backend. Sampled every 60 seconds.
apiserver_audit_event_total/counter
ALPHA
(project)
apiserver_audit_event_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Counter of audit events generated and sent to the audit backend. Sampled every 30 seconds.
apiserver_audit_level_total
ALPHA
(project)
apiserver_audit_level_total
CUMULATIVE , DOUBLE , 1
k8s_container
Counter of policy levels for audit events (1 per request). Sampled every 60 seconds.
level :
level.
apiserver_audit_level_total/counter
ALPHA
(project)
apiserver_audit_level_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Counter of policy levels for audit events (1 per request). Sampled every 30 seconds.
level :
level.
apiserver_audit_requests_rejected_total
ALPHA
(project)
apiserver_audit_requests_rejected_total
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_node
Counter of apiserver requests rejected due to an error in audit logging backend. Sampled every 60 seconds.
apiserver_audit_requests_rejected_total/counter
ALPHA
(project)
apiserver_audit_requests_rejected_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Counter of apiserver requests rejected due to an error in audit logging backend. Sampled every 30 seconds.
apiserver_cache_list_fetched_objects_total
ALPHA
(project)
apiserver_cache_list_fetched_objects_total
CUMULATIVE , DOUBLE , 1
k8s_container
[ALPHA] Number of objects read from watch cache in the course of serving a LIST request. Sampled every 60 seconds.
index :
index.
resource_prefix :
resource_prefix.
apiserver_cache_list_returned_objects_total
ALPHA
(project)
apiserver_cache_list_returned_objects_total
CUMULATIVE , DOUBLE , 1
k8s_container
[ALPHA] Number of objects returned for a LIST request from watch cache. Sampled every 60 seconds.
resource_prefix :
resource_prefix.
apiserver_cache_list_total
ALPHA
(project)
apiserver_cache_list_total
CUMULATIVE , DOUBLE , 1
k8s_container
[ALPHA] Number of LIST requests served from watch cache. Sampled every 60 seconds.
index :
index.
resource :
resource.
resource_prefix :
resource_prefix.
group :
group.
apiserver_cache_list_total/counter
ALPHA
(project)
apiserver_cache_list_total
CUMULATIVE , DOUBLE , 1
prometheus_target
[ALPHA] Number of LIST requests served from watch cache. Sampled every 30 seconds.
index :
index.
resource_prefix :
resource_prefix.
apiserver_cel_compilation_duration_seconds
ALPHA
(project)
apiserver_cel_compilation_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
[ALPHA] apiserver_cel_compilation_duration_seconds. Sampled every 60 seconds.
apiserver_cel_evaluation_duration_seconds
ALPHA
(project)
apiserver_cel_evaluation_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
[ALPHA] apiserver_cel_evaluation_duration_seconds. Sampled every 60 seconds.
apiserver_client_certificate_expiration_seconds
ALPHA
(project)
apiserver_client_certificate_expiration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
k8s_node
Distribution of the remaining lifetime on the certificate used to authenticate a request. Sampled every 60 seconds.
apiserver_client_certificate_expiration_seconds/histogram
ALPHA
(project)
apiserver_client_certificate_expiration_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
Distribution of the remaining lifetime on the certificate used to authenticate a request. Sampled every 30 seconds.
apiserver_crd_webhook_conversion_duration_seconds
ALPHA
(project)
apiserver_crd_webhook_conversion_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
CRD webhook conversion duration in seconds. Sampled every 60 seconds.
crd_name :
crd_name.
from_version :
from_version.
succeeded :
succeeded.
to_version :
to_version.
apiserver_current_inflight_requests
ALPHA
(project)
apiserver_current_inflight_requests
GAUGE , DOUBLE , 1
k8s_container
Maximal number of currently used inflight request limit of this apiserver per request kind in last second. Sampled every 60 seconds.
requestKind :
requestKind.
request_kind :
request_kind.
apiserver_current_inflight_requests/gauge
ALPHA
(project)
apiserver_current_inflight_requests
GAUGE , DOUBLE , 1
prometheus_target
Maximal number of currently used inflight request limit of this apiserver per request kind in last second. Sampled every 30 seconds.
request_kind :
request_kind.
apiserver_current_inqueue_requests
ALPHA
(project)
apiserver_current_inqueue_requests
GAUGE , DOUBLE , 1
k8s_container
Maximal number of queued requests in this apiserver per request kind in last second. Sampled every 60 seconds.
request_kind :
request_kind.
apiserver_current_inqueue_requests/gauge
ALPHA
(project)
apiserver_current_inqueue_requests
GAUGE , DOUBLE , 1
prometheus_target
Maximal number of queued requests in this apiserver per request kind in last second. Sampled every 30 seconds.
request_kind :
request_kind.
apiserver_delegated_authn_request_duration_seconds
ALPHA
(project)
apiserver_delegated_authn_request_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
Request latency in seconds. Broken down by status code. Sampled every 60 seconds.
code :
code.
apiserver_delegated_authn_request_total
ALPHA
(project)
apiserver_delegated_authn_request_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of HTTP requests partitioned by status code. Sampled every 60 seconds.
code :
code.
apiserver_delegated_authz_request_duration_seconds
ALPHA
(project)
apiserver_delegated_authz_request_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
Request latency in seconds. Broken down by status code. Sampled every 60 seconds.
code :
code.
apiserver_delegated_authz_request_total
ALPHA
(project)
apiserver_delegated_authz_request_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of HTTP requests partitioned by status code. Sampled every 60 seconds.
code :
code.
apiserver_egress_dialer_dial_duration_seconds
ALPHA
(project)
apiserver_egress_dialer_dial_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
Dial latency histogram in seconds, labeled by the protocol (http-connect or grpc), transport (tcp or uds). Sampled every 60 seconds.
protocol :
protocol.
transport :
transport.
apiserver_egress_dialer_dial_failure_count
ALPHA
(project)
apiserver_egress_dialer_dial_failure_count
CUMULATIVE , DOUBLE , 1
k8s_container
Dial failure count, labeled by the protocol (http-connect or grpc), transport (tcp or uds), and stage (connect or proxy). The stage indicates at which stage the dial failed. Sampled every 60 seconds.
protocol :
protocol.
stage :
stage.
transport :
transport.
apiserver_envelope_encryption_dek_cache_fill_percent
ALPHA
(project)
apiserver_envelope_encryption_dek_cache_fill_percent
GAUGE , DOUBLE , 1
k8s_container
Percent of the cache slots currently occupied by cached DEKs. Sampled every 60 seconds.
apiserver_envelope_encryption_dek_cache_fill_percent/gauge
ALPHA
(project)
apiserver_envelope_encryption_dek_cache_fill_percent
GAUGE , DOUBLE , 1
prometheus_target
Percent of the cache slots currently occupied by cached DEKs. Sampled every 30 seconds.
apiserver_flowcontrol_current_executing_requests
ALPHA
(project)
apiserver_flowcontrol_current_executing_requests
GAUGE , DOUBLE , 1
k8s_container
Number of requests currently executing in the API Priority and Fairness system. Sampled every 60 seconds.
flow_schema :
flow_schema.
priority_level :
priority_level.
apiserver_flowcontrol_current_inqueue_requests
ALPHA
(project)
apiserver_flowcontrol_current_inqueue_requests
GAUGE , DOUBLE , 1
k8s_container
Number of requests currently pending in queues of the API Priority and Fairness system. Sampled every 60 seconds.
flow_schema :
flow_schema.
priority_level :
priority_level.
apiserver_flowcontrol_current_r
ALPHA
(project)
apiserver_flowcontrol_current_r
GAUGE , DOUBLE , 1
k8s_container
R(time of last change). Sampled every 60 seconds.
priority_level :
priority_level.
apiserver_flowcontrol_dispatch_r
ALPHA
(project)
apiserver_flowcontrol_dispatch_r
GAUGE , DOUBLE , 1
k8s_container
R(time of last dispatch). Sampled every 60 seconds.
priority_level :
priority_level.
apiserver_flowcontrol_dispatched_requests_total
ALPHA
(project)
apiserver_flowcontrol_dispatched_requests_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of requests released by API Priority and Fairness system for service. Sampled every 60 seconds.
flow_schema :
flow_schema.
priority_level :
priority_level.
apiserver_flowcontrol_dispatched_requests_total/counter
ALPHA
(project)
apiserver_flowcontrol_dispatched_requests_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Number of requests released by API Priority and Fairness system for service. Sampled every 30 seconds.
flow_schema :
flow_schema.
priority_level :
priority_level.
apiserver_flowcontrol_latest_s
ALPHA
(project)
apiserver_flowcontrol_latest_s
GAUGE , DOUBLE , 1
k8s_container
S(most recently dispatched request). Sampled every 60 seconds.
priority_level :
priority_level.
apiserver_flowcontrol_next_discounted_s_bounds
ALPHA
(project)
apiserver_flowcontrol_next_discounted_s_bounds
GAUGE , DOUBLE , 1
k8s_container
min and max, over queues, of S(oldest waiting request in queue) - estimated work in progress. Sampled every 60 seconds.
bound :
bound.
priority_level :
priority_level.
apiserver_flowcontrol_next_s_bounds
ALPHA
(project)
apiserver_flowcontrol_next_s_bounds
GAUGE , DOUBLE , 1
k8s_container
min and max, over queues, of S(oldest waiting request in queue). Sampled every 60 seconds.
bound :
bound.
priority_level :
priority_level.
apiserver_flowcontrol_priority_level_request_count_samples
ALPHA
(project)
apiserver_flowcontrol_priority_level_request_count_samples
CUMULATIVE , DISTRIBUTION , 1
k8s_container
Periodic observations of the number of requests. Sampled every 60 seconds.
phase :
phase.
priority_level :
priority_level.
apiserver_flowcontrol_priority_level_request_count_watermarks
ALPHA
(project)
apiserver_flowcontrol_priority_level_request_count_watermarks
CUMULATIVE , DISTRIBUTION , 1
k8s_container
Watermarks of the number of requests. Sampled every 60 seconds.
mark :
mark.
phase :
phase.
priority_level :
priority_level.
apiserver_flowcontrol_priority_level_request_utilization
ALPHA
(project)
apiserver_flowcontrol_priority_level_request_utilization
CUMULATIVE , DISTRIBUTION , 1
k8s_container
EXPERIMENTAL: [ALPHA] Observations, at the end of every nanosecond, of number of requests (as a fraction of the relevant limit) waiting or in any stage of execution (but only initial stage for WATCHes). Sampled every 60 seconds.
phase :
phase.
priority_level :
priority_level.
apiserver_flowcontrol_priority_level_seat_count_samples
ALPHA
(project)
apiserver_flowcontrol_priority_level_seat_count_samples
CUMULATIVE , DISTRIBUTION , 1
k8s_container
[ALPHA] Periodic observations of the number of requests. Sampled every 60 seconds.
phase :
phase.
priority_level :
priority_level.
apiserver_flowcontrol_priority_level_seat_count_watermarks
ALPHA
(project)
apiserver_flowcontrol_priority_level_seat_count_watermarks
CUMULATIVE , DISTRIBUTION , 1
k8s_container
[ALPHA] Watermarks of the number of requests. Sampled every 60 seconds.
mark :
mark.
phase :
phase.
priority_level :
priority_level.
apiserver_flowcontrol_priority_level_seat_utilization
ALPHA
(project)
apiserver_flowcontrol_priority_level_seat_utilization
CUMULATIVE , DISTRIBUTION , 1
k8s_container
EXPERIMENTAL: [ALPHA] Observations, at the end of every nanosecond, of utilization of seats for any stage of execution (but only initial stage for WATCHes). Sampled every 60 seconds.
phase :
phase.
priority_level :
priority_level.
apiserver_flowcontrol_read_vs_write_current_requests
ALPHA
(project)
apiserver_flowcontrol_read_vs_write_current_requests
CUMULATIVE , DISTRIBUTION , 1
k8s_container
EXPERIMENTAL: [ALPHA] Observations, at the end of every nanosecond, of the number of requests (as a fraction of the relevant limit) waiting or in regular stage of execution. Sampled every 60 seconds.
phase :
phase.
request_kind :
request_kind.
apiserver_flowcontrol_read_vs_write_request_count_samples
ALPHA
(project)
apiserver_flowcontrol_read_vs_write_request_count_samples
CUMULATIVE , DISTRIBUTION , 1
k8s_container
Periodic observations of the number of requests. Sampled every 60 seconds.
phase :
phase.
request_kind :
request_kind.
apiserver_flowcontrol_read_vs_write_request_count_watermarks
ALPHA
(project)
apiserver_flowcontrol_read_vs_write_request_count_watermarks
CUMULATIVE , DISTRIBUTION , 1
k8s_container
Watermarks of the number of requests. Sampled every 60 seconds.
mark :
mark.
phase :
phase.
request_kind :
request_kind.
apiserver_flowcontrol_request_concurrency_in_use
ALPHA
(project)
apiserver_flowcontrol_request_concurrency_in_use
GAUGE , DOUBLE , 1
k8s_container
Concurrency (number of seats) occupided by the currently executing requests in the API Priority and Fairness system. Sampled every 60 seconds.
flow_schema :
flow_schema.
priority_level :
priority_level.
apiserver_flowcontrol_request_concurrency_limit
ALPHA
(project)
apiserver_flowcontrol_request_concurrency_limit
GAUGE , DOUBLE , 1
k8s_container
Shared concurrency limit in the API Priority and Fairness system. Sampled every 60 seconds.
priority_level :
priority_level.
apiserver_flowcontrol_request_concurrency_limit/gauge
ALPHA
(project)
apiserver_flowcontrol_request_concurrency_limit
GAUGE , DOUBLE , 1
prometheus_target
Shared concurrency limit in the API Priority and Fairness system. Sampled every 30 seconds.
priority_level :
priority_level.
apiserver_flowcontrol_request_execution_seconds
ALPHA
(project)
apiserver_flowcontrol_request_execution_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
[ALPHA] Duration of initial stage (for a WATCH) or any (for a non-WATCH) stage of request execution in the API Priority and Fairness subsystem. Sampled every 60 seconds.
flow_schema :
flow_schema.
priority_level :
priority_level.
type :
type.
apiserver_flowcontrol_request_execution_seconds/histogram
ALPHA
(project)
apiserver_flowcontrol_request_execution_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
[ALPHA] Duration of initial stage (for a WATCH) or any (for a non-WATCH) stage of request execution in the API Priority and Fairness subsystem. Sampled every 30 seconds.
flow_schema :
flow_schema.
priority_level :
priority_level.
type :
type.
apiserver_flowcontrol_request_queue_length_after_enqueue
ALPHA
(project)
apiserver_flowcontrol_request_queue_length_after_enqueue
CUMULATIVE , DISTRIBUTION , 1
k8s_container
Length of queue in the API Priority and Fairness system, as seen by each request after it is enqueued. Sampled every 60 seconds.
flow_schema :
flow_schema.
priority_level :
priority_level.
apiserver_flowcontrol_request_wait_duration_seconds
ALPHA
(project)
apiserver_flowcontrol_request_wait_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
Length of time a request spent waiting in its queue. Sampled every 60 seconds.
execute :
execute.
flow_schema :
flow_schema.
priority_level :
priority_level.
apiserver_flowcontrol_request_wait_duration_seconds/histogram
ALPHA
(project)
apiserver_flowcontrol_request_wait_duration_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
Length of time a request spent waiting in its queue. Sampled every 30 seconds.
execute :
execute.
flow_schema :
flow_schema.
priority_level :
priority_level.
apiserver_flowcontrol_watch_count_samples
ALPHA
(project)
apiserver_flowcontrol_watch_count_samples
CUMULATIVE , DISTRIBUTION , 1
k8s_container
[ALPHA] count of watchers for mutating requests in API Priority and Fairness. Sampled every 60 seconds.
flow_schema :
flow_schema.
priority_level :
priority_level.
apiserver_flowcontrol_work_estimated_seats
ALPHA
(project)
apiserver_flowcontrol_work_estimated_seats
CUMULATIVE , DISTRIBUTION , 1
k8s_container
[ALPHA] Number of estimated seats (maximum of initial and final seats) associated with requests in API Priority and Fairness. Sampled every 60 seconds.
flow_schema :
flow_schema.
priority_level :
priority_level.
apiserver_init_events_total
ALPHA
(project)
apiserver_init_events_total
CUMULATIVE , DOUBLE , 1
k8s_container
Counter of init events processed in watchcache broken by resource type. Sampled every 60 seconds.
resource :
resource.
apiserver_kube_aggregator_x509_insecure_sha1_total
ALPHA
(project)
apiserver_kube_aggregator_x509_insecure_sha1_total
CUMULATIVE , DOUBLE , 1
k8s_container
[ALPHA] Counts the number of requests to servers with insecure SHA1 signatures in their serving certificate OR the number of connection failures due to the insecure SHA1 signatures (either/or, based on the runtime environment) Sampled every 60 seconds.
apiserver_kube_aggregator_x509_insecure_sha1_total/counter
ALPHA
(project)
apiserver_kube_aggregator_x509_insecure_sha1_total
CUMULATIVE , DOUBLE , 1
prometheus_target
[ALPHA] Counts the number of requests to servers with insecure SHA1 signatures in their serving certificate OR the number of connection failures due to the insecure SHA1 signatures (either/or, based on the runtime environment). Sampled every 30 seconds.
apiserver_kube_aggregator_x509_missing_san_total
ALPHA
(project)
apiserver_kube_aggregator_x509_missing_san_total
CUMULATIVE , DOUBLE , 1
k8s_container
Counts the number of requests to servers missing SAN extension in their serving certificate OR the number of connection failures due to the lack of x509 certificate SAN extension missing (either/or, based on the runtime environment). Sampled every 60 seconds.
apiserver_kube_aggregator_x509_missing_san_total/counter
ALPHA
(project)
apiserver_kube_aggregator_x509_missing_san_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Counts the number of requests to servers missing SAN extension in their serving certificate OR the number of connection failures due to the lack of x509 certificate SAN extension missing (either/or, based on the runtime environment). Sampled every 30 seconds.
apiserver_longrunning_gauge
ALPHA
(project)
apiserver_longrunning_gauge
GAUGE , DOUBLE , 1
k8s_container
Gauge of all active long-running apiserver requests broken out by verb, group, version, resource, scope and component. Not all requests are tracked this way. Sampled every 60 seconds.
exported_component :
exported_component.
group :
group.
resource :
resource.
scope :
scope.
subresource :
subresource.
verb :
verb.
version :
version.
apiserver_longrunning_requests
ALPHA
(project)
apiserver_longrunning_requests
GAUGE , DOUBLE , 1
k8s_container
[ALPHA] Gauge of all active long-running apiserver requests broken out by verb, group, version, resource, scope and component. Not all requests are tracked this way. Sampled every 60 seconds.
exported_component :
exported_component.
group :
group.
resource :
resource.
scope :
scope.
subresource :
subresource.
verb :
verb.
version :
version.
apiserver_longrunning_requests/gauge
ALPHA
(project)
apiserver_longrunning_requests
GAUGE , DOUBLE , 1
prometheus_target
[ALPHA] Gauge of all active long-running apiserver requests broken out by verb, group, version, resource, scope and component. Not all requests are tracked this way. Sampled every 30 seconds.
component :
component.
group :
group.
resource :
resource.
scope :
scope.
subresource :
subresource.
verb :
verb.
version :
version.
apiserver_registered_watchers
ALPHA
(project)
apiserver_registered_watchers
GAUGE , DOUBLE , 1
k8s_container
Number of currently registered watchers for a given resources. Sampled every 60 seconds.
group :
group.
kind :
kind.
version :
version.
apiserver_request_aborts_total
ALPHA
(project)
apiserver_request_aborts_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of requests which apiserver aborted possibly due to a timeout, for each group, version, verb, resource, subresource and scope. Sampled every 60 seconds.
group :
group.
resource :
resource.
scope :
scope.
subresource :
subresource.
verb :
verb.
version :
version.
apiserver_request_count
ALPHA
(project)
apiserver_request_count
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Counter of apiserver requests broken out for each verb, group, version, resource, scope, component, client, and HTTP response contentType and code. Sampled every 60 seconds.
client :
client.
code :
code.
contentType :
contentType.
exported_component :
exported_component.
group :
group.
resource :
resource.
scope :
scope.
subresource :
subresource.
verb :
verb.
version :
version.
apiserver_request_duration_seconds
ALPHA
(project)
apiserver_request_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
[STABLE] Response latency distribution in seconds for each verb, dry run value, group, version, resource, subresource, scope and component. Sampled every 60 seconds.
dry_run :
dry_run.
exported_component :
exported_component.
group :
group.
resource :
resource.
scope :
scope.
subresource :
subresource.
verb :
verb.
version :
version.
apiserver_request_duration_seconds/histogram
ALPHA
(project)
apiserver_request_duration_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
[STABLE] Response latency distribution in seconds for each verb, dry run value, group, version, resource, subresource, scope and component. Sampled every 30 seconds.
component :
component.
dry_run :
dry_run.
group :
group.
resource :
resource.
scope :
scope.
subresource :
subresource.
verb :
verb.
version :
version.
apiserver_request_filter_duration_seconds
ALPHA
(project)
apiserver_request_filter_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
Request filter latency distribution in seconds, for each filter type. Sampled every 60 seconds.
filter :
filter.
apiserver_request_filter_duration_seconds/histogram
ALPHA
(project)
apiserver_request_filter_duration_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
Request filter latency distribution in seconds, for each filter type. Sampled every 30 seconds.
filter :
filter.
apiserver_request_latencies
ALPHA
(project)
apiserver_request_latencies
CUMULATIVE , DISTRIBUTION , 1
k8s_container
(Deprecated) Response latency distribution in microseconds for each verb, group, version, resource, subresource, scope and component. Sampled every 60 seconds.
exported_component :
exported_component.
group :
group.
resource :
resource.
scope :
scope.
subresource :
subresource.
verb :
verb.
version :
version.
apiserver_request_latencies_summary
ALPHA
(project)
apiserver_request_latencies_summary
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) Response latency summary in microseconds for each verb, group, version, resource, subresource, scope and component. Sampled every 60 seconds.
exported_component :
exported_component.
group :
group.
quantile :
quantile.
resource :
resource.
scope :
scope.
subresource :
subresource.
verb :
verb.
version :
version.
apiserver_request_latencies_summary_count
ALPHA
(project)
apiserver_request_latencies_summary_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) Response latency summary in microseconds for each verb, group, version, resource, subresource, scope and component. Sampled every 60 seconds.
exported_component :
exported_component.
group :
group.
resource :
resource.
scope :
scope.
subresource :
subresource.
verb :
verb.
version :
version.
apiserver_request_latencies_summary_sum
ALPHA
(project)
apiserver_request_latencies_summary_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Response latency summary in microseconds for each verb, group, version, resource, subresource, scope and component. Sampled every 60 seconds.
exported_component :
exported_component.
group :
group.
resource :
resource.
scope :
scope.
subresource :
subresource.
verb :
verb.
version :
version.
apiserver_request_post_timeout_total
ALPHA
(project)
apiserver_request_post_timeout_total
CUMULATIVE , DOUBLE , 1
k8s_container
[ALPHA] Tracks the activity of the request handlers after the associated requests have been timed out by the apiserver. Sampled every 60 seconds.
source :
source.
status :
status.
apiserver_request_post_timeout_total/counter
ALPHA
(project)
apiserver_request_post_timeout_total
CUMULATIVE , DOUBLE , 1
prometheus_target
[ALPHA] Tracks the activity of the request handlers after the associated requests have been timed out by the apiserver. Sampled every 30 seconds.
source :
source.
status :
status.
apiserver_request_sli_duration_seconds
ALPHA
(project)
apiserver_request_sli_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
[ALPHA] Response latency distribution (not counting webhook duration) in seconds for each verb, group, version, resource, subresource, scope and component. Sampled every 60 seconds.
exported_component :
exported_component.
group :
group.
resource :
resource.
scope :
scope.
subresource :
subresource.
verb :
verb.
version :
version.
apiserver_request_sli_duration_seconds/histogram
ALPHA
(project)
apiserver_request_sli_duration_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
[ALPHA] Response latency distribution (not counting webhook duration) in seconds for each verb, group, version, resource, subresource, scope and component. Sampled every 30 seconds.
component :
component.
group :
group.
resource :
resource.
scope :
scope.
subresource :
subresource.
verb :
verb.
version :
version.
apiserver_request_slo_duration_seconds
ALPHA
(project)
apiserver_request_slo_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
[ALPHA] Response latency distribution (not counting webhook duration) in seconds for each verb, group, version, resource, subresource, scope and component. Sampled every 60 seconds.
exported_component :
exported_component.
group :
group.
resource :
resource.
scope :
scope.
subresource :
subresource.
verb :
verb.
version :
version.
apiserver_request_slo_duration_seconds/histogram
ALPHA
(project)
apiserver_request_slo_duration_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
[ALPHA] Response latency distribution (not counting webhook duration) in seconds for each verb, group, version, resource, subresource, scope and component. Sampled every 30 seconds.
component :
component.
group :
group.
resource :
resource.
scope :
scope.
subresource :
subresource.
verb :
verb.
version :
version.
apiserver_request_terminations_total
ALPHA
(project)
apiserver_request_terminations_total
CUMULATIVE , DOUBLE , 1
k8s_container
[ALPHA] Number of requests which apiserver terminated in self-defense. Sampled every 60 seconds.
code :
code.
exported_component :
exported_component.
group :
group.
resource :
resource.
scope :
scope.
subresource :
subresource.
verb :
verb.
version :
version.
apiserver_request_terminations_total/counter
ALPHA
(project)
apiserver_request_terminations_total
CUMULATIVE , DOUBLE , 1
prometheus_target
[ALPHA] Number of requests which apiserver terminated in self-defense. Sampled every 30 seconds.
code :
code.
component :
component.
group :
group.
resource :
resource.
scope :
scope.
subresource :
subresource.
verb :
verb.
version :
version.
apiserver_request_timestamp_comparison_time
ALPHA
(project)
apiserver_request_timestamp_comparison_time
CUMULATIVE , DISTRIBUTION , 1
k8s_container
[ALPHA] Time taken for comparison of old vs new objects in UPDATE or PATCH requests. Sampled every 60 seconds.
code_path :
code_path.
apiserver_request_total
ALPHA
(project)
apiserver_request_total
CUMULATIVE , DOUBLE , 1
k8s_container
[STABLE] Counter of apiserver requests broken out for each verb, dry run value, group, version, resource, scope, component, and HTTP response code. Sampled every 60 seconds.
client :
client.
code :
code.
contentType :
contentType.
dry_run :
dry_run.
exported_component :
exported_component.
group :
group.
resource :
resource.
scope :
scope.
subresource :
subresource.
verb :
verb.
version :
version.
apiserver_request_total/counter
ALPHA
(project)
apiserver_request_total
CUMULATIVE , DOUBLE , 1
prometheus_target
[STABLE] Counter of apiserver requests broken out for each verb, dry run value, group, version, resource, scope, component, and HTTP response code. Sampled every 30 seconds.
client :
client.
code :
code.
component :
component.
contentType :
contentType.
dry_run :
dry_run.
group :
group.
resource :
resource.
scope :
scope.
subresource :
subresource.
verb :
verb.
version :
version.
apiserver_requested_deprecated_apis
ALPHA
(project)
apiserver_requested_deprecated_apis
GAUGE , DOUBLE , 1
k8s_container
[STABLE] Gauge of deprecated APIs that have been requested, broken out by API group, version, resource, subresource, and removed_release. Sampled every 60 seconds.
group :
group.
removed_release :
removed_release.
resource :
resource.
subresource :
subresource.
version :
version.
apiserver_requested_deprecated_apis/gauge
ALPHA
(project)
apiserver_requested_deprecated_apis
GAUGE , DOUBLE , 1
prometheus_target
[STABLE] Gauge of deprecated APIs that have been requested, broken out by API group, version, resource, subresource, and removed_release. Sampled every 30 seconds.
group :
group.
removed_release :
removed_release.
resource :
resource.
subresource :
subresource.
version :
version.
apiserver_response_sizes
ALPHA
(project)
apiserver_response_sizes
CUMULATIVE , DISTRIBUTION , 1
k8s_container
[STABLE] Response size distribution in bytes for each group, version, verb, resource, subresource, scope and component. Sampled every 60 seconds.
exported_component :
exported_component.
group :
group.
resource :
resource.
scope :
scope.
subresource :
subresource.
verb :
verb.
version :
version.
apiserver_response_sizes/histogram
ALPHA
(project)
apiserver_response_sizes
CUMULATIVE , DISTRIBUTION , 1
prometheus_target
[STABLE] Response size distribution in bytes for each group, version, verb, resource, subresource, scope and component. Sampled every 30 seconds.
component :
component.
group :
group.
resource :
resource.
scope :
scope.
subresource :
subresource.
verb :
verb.
version :
version.
apiserver_selfrequest_total
ALPHA
(project)
apiserver_selfrequest_total
CUMULATIVE , DOUBLE , 1
k8s_container
Counter of apiserver self-requests broken out for each verb, API resource and subresource. Sampled every 60 seconds.
resource :
resource.
subresource :
subresource.
verb :
verb.
apiserver_storage_data_key_generation_duration_seconds
ALPHA
(project)
apiserver_storage_data_key_generation_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
k8s_node
Latencies in seconds of data encryption key(DEK) generation operations. Sampled every 60 seconds.
apiserver_storage_data_key_generation_duration_seconds/histogram
ALPHA
(project)
apiserver_storage_data_key_generation_duration_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
Latencies in seconds of data encryption key(DEK) generation operations. Sampled every 30 seconds.
apiserver_storage_data_key_generation_failures_total
ALPHA
(project)
apiserver_storage_data_key_generation_failures_total
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_node
Total number of failed data encryption key(DEK) generation operations. Sampled every 60 seconds.
apiserver_storage_data_key_generation_failures_total/counter
ALPHA
(project)
apiserver_storage_data_key_generation_failures_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Total number of failed data encryption key(DEK) generation operations. Sampled every 30 seconds.
apiserver_storage_data_key_generation_latencies_microseconds
ALPHA
(project)
apiserver_storage_data_key_generation_latencies_microseconds
CUMULATIVE , DISTRIBUTION , us
k8s_container
k8s_node
(Deprecated) Latencies in microseconds of data encryption key(DEK) generation operations. Sampled every 60 seconds.
apiserver_storage_db_total_size_in_bytes/gauge
ALPHA
(project)
apiserver_storage_db_total_size_in_bytes
GAUGE , DOUBLE , By
prometheus_target
Total size of the etcd database file physically allocated in bytes. Sampled every 30 seconds.
endpoint :
endpoint.
apiserver_storage_envelope_transformation_cache_misses_total
ALPHA
(project)
apiserver_storage_envelope_transformation_cache_misses_total
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_node
Total number of cache misses while accessing key decryption key(KEK). Sampled every 60 seconds.
apiserver_storage_envelope_transformation_cache_misses_total/counter
ALPHA
(project)
apiserver_storage_envelope_transformation_cache_misses_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Total number of cache misses while accessing key decryption key(KEK). Sampled every 30 seconds.
apiserver_storage_list_evaluated_objects_total
ALPHA
(project)
apiserver_storage_list_evaluated_objects_total
CUMULATIVE , DOUBLE , 1
k8s_container
[ALPHA] Number of objects tested in the course of serving a LIST request from storage. Sampled every 60 seconds.
resource :
resource.
group :
group.
apiserver_storage_list_evaluated_objects_total/counter
ALPHA
(project)
apiserver_storage_list_evaluated_objects_total
CUMULATIVE , DOUBLE , 1
prometheus_target
[ALPHA] Number of objects tested in the course of serving a LIST request from storage. Sampled every 30 seconds.
resource :
resource.
apiserver_storage_list_fetched_objects_total
ALPHA
(project)
apiserver_storage_list_fetched_objects_total
CUMULATIVE , DOUBLE , 1
k8s_container
[ALPHA] Number of objects read from storage in the course of serving a LIST request. Sampled every 60 seconds.
resource :
resource.
group :
group.
apiserver_storage_list_fetched_objects_total/counter
ALPHA
(project)
apiserver_storage_list_fetched_objects_total
CUMULATIVE , DOUBLE , 1
prometheus_target
[ALPHA] Number of objects read from storage in the course of serving a LIST request. Sampled every 30 seconds.
resource :
resource.
apiserver_storage_list_returned_objects_total
ALPHA
(project)
apiserver_storage_list_returned_objects_total
CUMULATIVE , DOUBLE , 1
k8s_container
[ALPHA] Number of objects returned for a LIST request from storage. Sampled every 60 seconds.
resource :
resource.
group :
group.
apiserver_storage_list_returned_objects_total/counter
ALPHA
(project)
apiserver_storage_list_returned_objects_total
CUMULATIVE , DOUBLE , 1
prometheus_target
[ALPHA] Number of objects returned for a LIST request from storage. Sampled every 30 seconds.
resource :
resource.
apiserver_storage_list_total
ALPHA
(project)
apiserver_storage_list_total
CUMULATIVE , DOUBLE , 1
k8s_container
[ALPHA] Number of LIST requests served from storage. Sampled every 60 seconds.
resource :
resource.
group :
group.
apiserver_storage_list_total/counter
ALPHA
(project)
apiserver_storage_list_total
CUMULATIVE , DOUBLE , 1
prometheus_target
[ALPHA] Number of LIST requests served from storage. Sampled every 30 seconds.
resource :
resource.
apiserver_storage_objects
ALPHA
(project)
apiserver_storage_objects
GAUGE , DOUBLE , 1
k8s_container
[STABLE] Number of stored objects at the time of last check split by kind. Sampled every 60 seconds.
resource :
resource.
apiserver_storage_objects/gauge
ALPHA
(project)
apiserver_storage_objects
GAUGE , DOUBLE , 1
prometheus_target
[STABLE] Number of stored objects at the time of last check split by kind. Sampled every 30 seconds.
resource :
resource.
apiserver_storage_transformation_duration_seconds
ALPHA
(project)
apiserver_storage_transformation_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
Latencies in seconds of value transformation operations. Sampled every 60 seconds.
transformation_type :
transformation_type.
apiserver_storage_transformation_duration_seconds/histogram
ALPHA
(project)
apiserver_storage_transformation_duration_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
Latencies in seconds of value transformation operations. Sampled every 30 seconds.
transformation_type :
transformation_type.
transformer_prefix :
transformer_prefix.
apiserver_storage_transformation_operations_total
ALPHA
(project)
apiserver_storage_transformation_operations_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of transformations. Sampled every 60 seconds.
status :
status.
transformation_type :
transformation_type.
transformer_prefix :
transformer_prefix.
apiserver_storage_transformation_operations_total/counter
ALPHA
(project)
apiserver_storage_transformation_operations_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Total number of transformations. Sampled every 30 seconds.
status :
status.
transformation_type :
transformation_type.
transformer_prefix :
transformer_prefix.
apiserver_terminated_watchers_total
ALPHA
(project)
apiserver_terminated_watchers_total
CUMULATIVE , DOUBLE , 1
k8s_container
Counter of watchers closed due to unresponsiveness broken by resource type. Sampled every 60 seconds.
resource :
resource.
apiserver_tls_handshake_errors_total
ALPHA
(project)
apiserver_tls_handshake_errors_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of requests dropped with 'TLS handshake error from' error. Sampled every 60 seconds.
apiserver_tls_handshake_errors_total/counter
ALPHA
(project)
apiserver_tls_handshake_errors_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Number of requests dropped with 'TLS handshake error from' error. Sampled every 30 seconds.
apiserver_watch_cache_events_dispatched_total
ALPHA
(project)
apiserver_watch_cache_events_dispatched_total
CUMULATIVE , DOUBLE , 1
k8s_container
[ALPHA] Counter of events dispatched in watch cache broken by resource type. Sampled every 60 seconds.
resource :
resource.
apiserver_watch_cache_initializations_total
ALPHA
(project)
apiserver_watch_cache_initializations_total
CUMULATIVE , DOUBLE , 1
k8s_container
[ALPHA] Counter of watch cache initializations broken by resource type. Sampled every 60 seconds.
resource :
resource.
group :
group.
apiserver_watch_cache_initializations_total/counter
ALPHA
(project)
apiserver_watch_cache_initializations_total
CUMULATIVE , DOUBLE , 1
prometheus_target
[ALPHA] Counter of watch cache initializations broken by resource type. Sampled every 30 seconds.
resource :
resource.
apiserver_watch_cache_watch_cache_initializations_total
ALPHA
(project)
apiserver_watch_cache_watch_cache_initializations_total
CUMULATIVE , DOUBLE , 1
k8s_container
[ALPHA] Counter of watch cache initializations broken by resource type. Sampled every 60 seconds.
resource :
resource.
apiserver_watch_events_sizes
ALPHA
(project)
apiserver_watch_events_sizes
CUMULATIVE , DISTRIBUTION , 1
k8s_container
Watch event size distribution in bytes. Sampled every 60 seconds.
resource :
resource.
group :
group.
kind :
kind.
version :
version.
apiserver_watch_events_sizes/histogram
ALPHA
(project)
apiserver_watch_events_sizes
CUMULATIVE , DISTRIBUTION , 1
prometheus_target
Watch event size distribution in bytes. Sampled every 30 seconds.
group :
group.
kind :
kind.
version :
version.
apiserver_watch_events_total
ALPHA
(project)
apiserver_watch_events_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of events sent in watch clients. Sampled every 60 seconds.
resource :
resource.
group :
group.
kind :
kind.
version :
version.
apiserver_watch_events_total/counter
ALPHA
(project)
apiserver_watch_events_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Number of events sent in watch clients. Sampled every 30 seconds.
group :
group.
kind :
kind.
version :
version.
apiserver_webhooks_x509_insecure_sha1_total
ALPHA
(project)
apiserver_webhooks_x509_insecure_sha1_total
CUMULATIVE , DOUBLE , 1
k8s_container
[ALPHA] Counts the number of requests to servers with insecure SHA1 signatures in their serving certificate OR the number of connection failures due to the insecure SHA1 signatures (either/or, based on the runtime environment) Sampled every 60 seconds.
apiserver_webhooks_x509_insecure_sha1_total/counter
ALPHA
(project)
apiserver_webhooks_x509_insecure_sha1_total
CUMULATIVE , DOUBLE , 1
prometheus_target
[ALPHA] Counts the number of requests to servers with insecure SHA1 signatures in their serving certificate OR the number of connection failures due to the insecure SHA1 signatures (either/or, based on the runtime environment) Sampled every 30 seconds.
apiserver_webhooks_x509_missing_san_total
ALPHA
(project)
apiserver_webhooks_x509_missing_san_total
CUMULATIVE , DOUBLE , 1
k8s_container
Counts the number of requests to servers missing SAN extension in their serving certificate OR the number of connection failures due to the lack of x509 certificate SAN extension missing (either/or, based on the runtime environment). Sampled every 60 seconds.
apiserver_webhooks_x509_missing_san_total/counter
ALPHA
(project)
apiserver_webhooks_x509_missing_san_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Counts the number of requests to servers missing SAN extension in their serving certificate OR the number of connection failures due to the lack of x509 certificate SAN extension missing (either/or, based on the runtime environment). Sampled every 30 seconds.
attachdetach_controller_forced_detaches
ALPHA
(project)
attachdetach_controller_forced_detaches
CUMULATIVE , DOUBLE , 1
k8s_container
Number of times the A/D Controller performed a forced detach. Sampled every 60 seconds.
attachdetach_controller_total_volumes
ALPHA
(project)
attachdetach_controller_total_volumes
GAUGE , DOUBLE , 1
k8s_container
Number of volumes in A/D Controller. Sampled every 60 seconds.
plugin_name :
plugin_name.
state :
state.
authenticated_user_requests
ALPHA
(project)
authenticated_user_requests
CUMULATIVE , DOUBLE , 1
k8s_container
Counter of authenticated requests broken out by username. Sampled every 60 seconds.
username :
username.
authenticated_user_requests/counter
ALPHA
(project)
authenticated_user_requests
CUMULATIVE , DOUBLE , 1
prometheus_target
Counter of authenticated requests broken out by username. Sampled every 30 seconds.
username :
username.
authentication_attempts
ALPHA
(project)
authentication_attempts
CUMULATIVE , DOUBLE , 1
k8s_container
Counter of authenticated attempts. Sampled every 60 seconds.
result :
result.
authentication_attempts/counter
ALPHA
(project)
authentication_attempts
CUMULATIVE , DOUBLE , 1
prometheus_target
Counter of authenticated attempts. Sampled every 30 seconds.
result :
result.
authentication_duration_seconds
ALPHA
(project)
authentication_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
Authentication duration in seconds broken out by result. Sampled every 60 seconds.
result :
result.
authentication_duration_seconds/histogram
ALPHA
(project)
authentication_duration_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
Authentication duration in seconds broken out by result. Sampled every 30 seconds.
result :
result.
authentication_token_cache_active_fetch_count
ALPHA
(project)
authentication_token_cache_active_fetch_count
GAUGE , DOUBLE , 1
k8s_container
. Sampled every 60 seconds.
status :
status.
authentication_token_cache_active_fetch_count/gauge
ALPHA
(project)
authentication_token_cache_active_fetch_count
GAUGE , DOUBLE , 1
prometheus_target
. Sampled every 30 seconds.
status :
status.
authentication_token_cache_fetch_total
ALPHA
(project)
authentication_token_cache_fetch_total
CUMULATIVE , DOUBLE , 1
k8s_container
. Sampled every 60 seconds.
status :
status.
authentication_token_cache_fetch_total/counter
ALPHA
(project)
authentication_token_cache_fetch_total
CUMULATIVE , DOUBLE , 1
prometheus_target
. Sampled every 30 seconds.
status :
status.
authentication_token_cache_request_duration_seconds
ALPHA
(project)
authentication_token_cache_request_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
. Sampled every 60 seconds.
status :
status.
authentication_token_cache_request_duration_seconds/histogram
ALPHA
(project)
authentication_token_cache_request_duration_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
. Sampled every 30 seconds.
status :
status.
authentication_token_cache_request_total
ALPHA
(project)
authentication_token_cache_request_total
CUMULATIVE , DOUBLE , 1
k8s_container
. Sampled every 60 seconds.
status :
status.
authentication_token_cache_request_total/counter
ALPHA
(project)
authentication_token_cache_request_total
CUMULATIVE , DOUBLE , 1
prometheus_target
. Sampled every 30 seconds.
status :
status.
auto_repair_custom_conditions
ALPHA
(project)
auto_repair_custom_conditions
GAUGE , DOUBLE , 1
k8s_pod
Info on custom auto repair conditions. Sampled every 60 seconds.
exported_namespace :
exported_namespace.
machinedeployment :
machinedeployment.
repaircondition :
repaircondition.
timeout :
timeout.
auto_repair_latencies_seconds
ALPHA
(project)
auto_repair_latencies_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_pod
Histogram of latencies between machine breaching repair threshold and machine marked as deleted in health controller. Sampled every 60 seconds.
exported_namespace :
exported_namespace.
machinedeployment :
machinedeployment.
autoregister_adds
ALPHA
(project)
autoregister_adds
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of adds handled by workqueue: autoregister. Sampled every 60 seconds.
autoregister_depth
ALPHA
(project)
autoregister_depth
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) Current depth of workqueue: autoregister. Sampled every 60 seconds.
autoregister_longest_running_processor_microseconds
ALPHA
(project)
autoregister_longest_running_processor_microseconds
GAUGE , DOUBLE , us
k8s_container
(Deprecated) How many microseconds has the longest running processor for autoregister been running. Sampled every 60 seconds.
autoregister_queue_latency
ALPHA
(project)
autoregister_queue_latency
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueueautoregister before being requested. Sampled every 60 seconds.
quantile :
quantile.
autoregister_queue_latency_count
ALPHA
(project)
autoregister_queue_latency_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long an item stays in workqueueautoregister before being requested. Sampled every 60 seconds.
autoregister_queue_latency_sum
ALPHA
(project)
autoregister_queue_latency_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueueautoregister before being requested. Sampled every 60 seconds.
autoregister_retries
ALPHA
(project)
autoregister_retries
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of retries handled by workqueue: autoregister. Sampled every 60 seconds.
autoregister_unfinished_work_seconds
ALPHA
(project)
autoregister_unfinished_work_seconds
GAUGE , DOUBLE , s
k8s_container
(Deprecated) How many seconds of work autoregister has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases. Sampled every 60 seconds.
autoregister_work_duration
ALPHA
(project)
autoregister_work_duration
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueueautoregister takes. Sampled every 60 seconds.
quantile :
quantile.
autoregister_work_duration_count
ALPHA
(project)
autoregister_work_duration_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long processing an item from workqueueautoregister takes. Sampled every 60 seconds.
autoregister_work_duration_sum
ALPHA
(project)
autoregister_work_duration_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueueautoregister takes. Sampled every 60 seconds.
autoscaler_actual_pods
ALPHA
(project)
autoscaler_actual_pods
GAUGE , DOUBLE , 1
k8s_pod
Number of pods that are allocated currently. Sampled every 60 seconds.
configuration_name :
configuration_name.
namespace_name :
namespace_name.
revision_name :
revision_name.
service_name :
service_name.
autoscaler_desired_pods
ALPHA
(project)
autoscaler_desired_pods
GAUGE , DOUBLE , 1
k8s_pod
Number of pods autoscaler wants to allocate. Sampled every 60 seconds.
configuration_name :
configuration_name.
namespace_name :
namespace_name.
revision_name :
revision_name.
service_name :
service_name.
autoscaler_panic_mode
ALPHA
(project)
autoscaler_panic_mode
GAUGE , DOUBLE , 1
k8s_pod
1 if autoscaler is in panic mode, 0 otherwise. Sampled every 60 seconds.
configuration_name :
configuration_name.
namespace_name :
namespace_name.
revision_name :
revision_name.
service_name :
service_name.
autoscaler_panic_request_concurrency
ALPHA
(project)
autoscaler_panic_request_concurrency
GAUGE , DOUBLE , 1
k8s_pod
Average of requests count over the panic window. Sampled every 60 seconds.
configuration_name :
configuration_name.
namespace_name :
namespace_name.
revision_name :
revision_name.
service_name :
service_name.
autoscaler_requested_pods
ALPHA
(project)
autoscaler_requested_pods
GAUGE , DOUBLE , 1
k8s_pod
Number of pods autoscaler requested from Kubernetes. Sampled every 60 seconds.
configuration_name :
configuration_name.
namespace_name :
namespace_name.
revision_name :
revision_name.
service_name :
service_name.
autoscaler_stable_request_concurrency
ALPHA
(project)
autoscaler_stable_request_concurrency
GAUGE , DOUBLE , 1
k8s_pod
Average of requests count over the stable window. Sampled every 60 seconds.
configuration_name :
configuration_name.
namespace_name :
namespace_name.
revision_name :
revision_name.
service_name :
service_name.
autoscaler_target_concurrency_per_pod
ALPHA
(project)
autoscaler_target_concurrency_per_pod
GAUGE , DOUBLE , 1
k8s_pod
The desired number of concurrent requests for each pod. Sampled every 60 seconds.
configuration_name :
configuration_name.
namespace_name :
namespace_name.
revision_name :
revision_name.
service_name :
service_name.
bootstrap_signer_queue_adds
ALPHA
(project)
bootstrap_signer_queue_adds
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of adds handled by workqueue: bootstrap_signer_queue. Sampled every 60 seconds.
bootstrap_signer_queue_depth
ALPHA
(project)
bootstrap_signer_queue_depth
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) Current depth of workqueue: bootstrap_signer_queue. Sampled every 60 seconds.
bootstrap_signer_queue_longest_running_processor_microseconds
ALPHA
(project)
bootstrap_signer_queue_longest_running_processor_microseconds
GAUGE , DOUBLE , us
k8s_container
(Deprecated) How many microseconds has the longest running processor for bootstrap_signer_queue been running. Sampled every 60 seconds.
bootstrap_signer_queue_queue_latency
ALPHA
(project)
bootstrap_signer_queue_queue_latency
GAUGE , DOUBLE , 1
k8s_container
How long an item stays in workqueuebootstrap_signer_queue before being requested. Sampled every 60 seconds.
quantile :
quantile.
bootstrap_signer_queue_queue_latency_count
ALPHA
(project)
bootstrap_signer_queue_queue_latency_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long an item stays in workqueuebootstrap_signer_queue before being requested. Sampled every 60 seconds.
bootstrap_signer_queue_queue_latency_sum
ALPHA
(project)
bootstrap_signer_queue_queue_latency_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuebootstrap_signer_queue before being requested. Sampled every 60 seconds.
bootstrap_signer_queue_retries
ALPHA
(project)
bootstrap_signer_queue_retries
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of retries handled by workqueue: bootstrap_signer_queue. Sampled every 60 seconds.
bootstrap_signer_queue_unfinished_work_seconds
ALPHA
(project)
bootstrap_signer_queue_unfinished_work_seconds
GAUGE , DOUBLE , s
k8s_container
(Deprecated) How many seconds of work bootstrap_signer_queue has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases. Sampled every 60 seconds.
bootstrap_signer_queue_work_duration
ALPHA
(project)
bootstrap_signer_queue_work_duration
GAUGE , DOUBLE , 1
k8s_container
How long processing an item from workqueuebootstrap_signer_queue takes. Sampled every 60 seconds.
quantile :
quantile.
bootstrap_signer_queue_work_duration_count
ALPHA
(project)
bootstrap_signer_queue_work_duration_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long processing an item from workqueuebootstrap_signer_queue takes. Sampled every 60 seconds.
bootstrap_signer_queue_work_duration_sum
ALPHA
(project)
bootstrap_signer_queue_work_duration_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuebootstrap_signer_queue takes. Sampled every 60 seconds.
bootstrap_signer_rate_limiter_use
ALPHA
(project)
bootstrap_signer_rate_limiter_use
GAUGE , DOUBLE , 1
k8s_container
A metric measuring the saturation of the rate limiter for bootstrap_signer. Sampled every 60 seconds.
bootstrap_signer_rate_limiter_use/gauge
ALPHA
(project)
bootstrap_signer_rate_limiter_use
GAUGE , DOUBLE , 1
prometheus_target
A metric measuring the saturation of the rate limiter for bootstrap_signer. Sampled every 30 seconds.
cadvisor_version_info
ALPHA
(project)
cadvisor_version_info
GAUGE , DOUBLE , 1
k8s_node
A metric with a constant '1' value labeled by kernel version, OS version, docker version, cadvisor version & cadvisor revision. Sampled every 60 seconds.
dockerVersion :
dockerVersion.
kernelVersion :
kernelVersion.
osVersion :
osVersion.
certificate_adds
ALPHA
(project)
certificate_adds
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of adds handled by workqueue: certificate. Sampled every 60 seconds.
certificate_depth
ALPHA
(project)
certificate_depth
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) Current depth of workqueue: certificate. Sampled every 60 seconds.
certificate_longest_running_processor_microseconds
ALPHA
(project)
certificate_longest_running_processor_microseconds
GAUGE , DOUBLE , us
k8s_container
(Deprecated) How many microseconds has the longest running processor for certificate been running. Sampled every 60 seconds.
certificate_queue_latency
ALPHA
(project)
certificate_queue_latency
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuecertificate before being requested. Sampled every 60 seconds.
quantile :
quantile.
certificate_queue_latency_count
ALPHA
(project)
certificate_queue_latency_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long an item stays in workqueuecertificate before being requested. Sampled every 60 seconds.
certificate_queue_latency_sum
ALPHA
(project)
certificate_queue_latency_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuecertificate before being requested. Sampled every 60 seconds.
certificate_retries
ALPHA
(project)
certificate_retries
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of retries handled by workqueue: certificate. Sampled every 60 seconds.
certificate_unfinished_work_seconds
ALPHA
(project)
certificate_unfinished_work_seconds
GAUGE , DOUBLE , s
k8s_container
(Deprecated) How many seconds of work certificate has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases. Sampled every 60 seconds.
certificate_work_duration
ALPHA
(project)
certificate_work_duration
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuecertificate takes. Sampled every 60 seconds.
quantile :
quantile.
certificate_work_duration_count
ALPHA
(project)
certificate_work_duration_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long processing an item from workqueuecertificate takes. Sampled every 60 seconds.
certificate_work_duration_sum
ALPHA
(project)
certificate_work_duration_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuecertificate takes. Sampled every 60 seconds.
certwatcher_read_certificate_errors_total
ALPHA
(project)
certwatcher_read_certificate_errors_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of certificate read errors. Sampled every 60 seconds.
certwatcher_read_certificate_total
ALPHA
(project)
certwatcher_read_certificate_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of certificate reads. Sampled every 60 seconds.
check_pass/gauge
BETA
(project)
check_pass
GAUGE , DOUBLE , 1
prometheus_target
The preflight and health check pass status (true/false). Sampled every 30 seconds.
group :
group.
kind :
kind.
name :
name.
pass :
pass.
version :
version.
cilium_agent_api_process_time_seconds
ALPHA
(project)
cilium_agent_api_process_time_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
Duration of processed API calls labeled by path, method and return code. Sampled every 60 seconds.
method :
method.
path :
path.
return_code :
return_code.
cilium_api_limiter_adjustment_factor
ALPHA
(project)
cilium_api_limiter_adjustment_factor
GAUGE , DOUBLE , 1
k8s_container
Current adjustment factor while auto adjusting. Sampled every 60 seconds.
api_call :
api_call.
cilium_api_limiter_processed_requests_total
ALPHA
(project)
cilium_api_limiter_processed_requests_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of API requests processed. Sampled every 60 seconds.
api_call :
api_call.
outcome :
outcome.
cilium_api_limiter_processing_duration_seconds
ALPHA
(project)
cilium_api_limiter_processing_duration_seconds
GAUGE , DOUBLE , s
k8s_container
Current processing time of api call. Sampled every 60 seconds.
api_call :
api_call.
value :
value.
cilium_api_limiter_rate_limit
ALPHA
(project)
cilium_api_limiter_rate_limit
GAUGE , DOUBLE , 1
k8s_container
Current rate limiting configuration. Sampled every 60 seconds.
api_call :
api_call.
value :
value.
cilium_api_limiter_requests_in_flight
ALPHA
(project)
cilium_api_limiter_requests_in_flight
GAUGE , DOUBLE , 1
k8s_container
Current requests in flight. Sampled every 60 seconds.
api_call :
api_call.
value :
value.
cilium_api_limiter_wait_duration_seconds
ALPHA
(project)
cilium_api_limiter_wait_duration_seconds
GAUGE , DOUBLE , s
k8s_container
Current wait time for api calls. Sampled every 60 seconds.
api_call :
api_call.
value :
value.
cilium_bpf_map_ops_total
ALPHA
(project)
cilium_bpf_map_ops_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total operations on map, tagged by map name. Sampled every 60 seconds.
map_name :
map_name.
operation :
operation.
outcome :
outcome.
cilium_bpf_maps_virtual_memory_max_bytes
ALPHA
(project)
cilium_bpf_maps_virtual_memory_max_bytes
GAUGE , DOUBLE , By
k8s_container
BPF maps kernel max memory usage size in bytes. Sampled every 60 seconds.
cilium_bpf_progs_virtual_memory_max_bytes
ALPHA
(project)
cilium_bpf_progs_virtual_memory_max_bytes
GAUGE , DOUBLE , By
k8s_container
BPF programs kernel max memory usage size in bytes. Sampled every 60 seconds.
cilium_controllers_failing
ALPHA
(project)
cilium_controllers_failing
GAUGE , DOUBLE , 1
k8s_container
Number of failing controllers. Sampled every 60 seconds.
cilium_controllers_runs_duration_seconds
ALPHA
(project)
cilium_controllers_runs_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
Duration in seconds of the controller process labeled by completion status. Sampled every 60 seconds.
status :
status.
cilium_controllers_runs_total
ALPHA
(project)
cilium_controllers_runs_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of times that a controller process was run labeled by completion status. Sampled every 60 seconds.
status :
status.
cilium_datapath_conntrack_dump_resets_total
ALPHA
(project)
cilium_datapath_conntrack_dump_resets_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of conntrack dump resets. Happens when a BPF entry gets removed while dumping the map is in progress. Sampled every 60 seconds.
area :
area.
family :
family.
name :
name.
cilium_datapath_conntrack_gc_duration_seconds
ALPHA
(project)
cilium_datapath_conntrack_gc_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
Duration in seconds of the garbage collector process labeled by datapath family and completion status. Sampled every 60 seconds.
family :
family.
protocol :
protocol.
status :
status.
cilium_datapath_conntrack_gc_entries
ALPHA
(project)
cilium_datapath_conntrack_gc_entries
GAUGE , DOUBLE , 1
k8s_container
The number of alive and deleted conntrack entries at the end of a garbage collector run labeled by datapath family. Sampled every 60 seconds.
family :
family.
protocol :
protocol.
status :
status.
cilium_datapath_conntrack_gc_key_fallbacks_total
ALPHA
(project)
cilium_datapath_conntrack_gc_key_fallbacks_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of times a key fallback was needed when iterating over the BPF map. Sampled every 60 seconds.
family :
family.
protocol :
protocol.
cilium_datapath_conntrack_gc_runs_total
ALPHA
(project)
cilium_datapath_conntrack_gc_runs_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of times that the conntrack garbage collector process was run labeled by completion status. Sampled every 60 seconds.
family :
family.
protocol :
protocol.
status :
status.
cilium_datapath_nat_gc_entries
ALPHA
(project)
cilium_datapath_nat_gc_entries
GAUGE , DOUBLE , 1
k8s_container
The number of alive and deleted nat entries at the end of a garbage collector run labeled by datapath family. Sampled every 60 seconds.
direction :
direction.
family :
family.
status :
status.
cilium_datapath_signals_handled_total
ALPHA
(project)
cilium_datapath_signals_handled_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of times that the datapath signal handler process was run labeled by signal type, data and completion status. Sampled every 60 seconds.
data :
data.
signal :
signal.
status :
status.
cilium_drop_bytes_total
ALPHA
(project)
cilium_drop_bytes_total
CUMULATIVE , DOUBLE , By
k8s_container
Total dropped bytes, tagged by drop reason and ingress/egress direction. Sampled every 60 seconds.
direction :
direction.
reason :
reason.
cilium_drop_count_total
ALPHA
(project)
cilium_drop_count_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total dropped packets, tagged by drop reason and ingress/egress direction. Sampled every 60 seconds.
direction :
direction.
reason :
reason.
cilium_endpoint
ALPHA
(project)
cilium_endpoint
GAUGE , DOUBLE , 1
k8s_container
Number of endpoints managed by this agent. Sampled every 60 seconds.
cilium_endpoint_regeneration_time_stats_seconds
ALPHA
(project)
cilium_endpoint_regeneration_time_stats_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
Endpoint regeneration time stats labeled by the scope. Sampled every 60 seconds.
scope :
scope.
status :
status.
cilium_endpoint_regenerations_total
ALPHA
(project)
cilium_endpoint_regenerations_total
CUMULATIVE , DOUBLE , 1
k8s_container
Count of all endpoint regenerations that have completed, tagged by outcome. Sampled every 60 seconds.
outcome :
outcome.
cilium_endpoint_state
ALPHA
(project)
cilium_endpoint_state
GAUGE , DOUBLE , 1
k8s_container
Count of all endpoints, tagged by different endpoint states. Sampled every 60 seconds.
endpoint_state :
endpoint_state.
cilium_errors_warnings_total
ALPHA
(project)
cilium_errors_warnings_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of total errors in cilium-agent instances. Sampled every 60 seconds.
level :
level.
subsystem :
subsystem.
cilium_event_ts
ALPHA
(project)
cilium_event_ts
GAUGE , DOUBLE , 1
k8s_container
Last timestamp when we received an event. Sampled every 60 seconds.
action :
action.
scope :
scope.
source :
source.
cilium_forward_bytes_total
ALPHA
(project)
cilium_forward_bytes_total
CUMULATIVE , DOUBLE , By
k8s_container
Total forwarded bytes, tagged by ingress/egress direction. Sampled every 60 seconds.
direction :
direction.
cilium_forward_count_total
ALPHA
(project)
cilium_forward_count_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total forwarded packets, tagged by ingress/egress direction. Sampled every 60 seconds.
direction :
direction.
cilium_fqdn_gc_deletions_total
ALPHA
(project)
cilium_fqdn_gc_deletions_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of FQDNs that have been cleaned on FQDN Garbage collector job. Sampled every 60 seconds.
cilium_identity
ALPHA
(project)
cilium_identity
GAUGE , DOUBLE , 1
k8s_container
Number of identities currently allocated. Sampled every 60 seconds.
type :
type.
cilium_ip_addresses
ALPHA
(project)
cilium_ip_addresses
GAUGE , DOUBLE , 1
k8s_container
Number of allocated IP addresses. Sampled every 60 seconds.
family :
family.
cilium_ipam_events_total
ALPHA
(project)
cilium_ipam_events_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of IPAM events received labeled by action and datapath family type. Sampled every 60 seconds.
action :
action.
family :
family.
cilium_ipcache_errors_total
ALPHA
(project)
cilium_ipcache_errors_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of errors interacting with the IP to Identity cache. Sampled every 60 seconds.
error :
error.
type :
type.
cilium_k8s_event_lag_seconds
ALPHA
(project)
cilium_k8s_event_lag_seconds
GAUGE , DOUBLE , s
k8s_container
Lag for Kubernetes events - computed value between receiving a CNI ADD event from kubelet and a Pod event received from kube-api-server. Sampled every 60 seconds.
source :
source.
cilium_k8s_terminating_endpoints_events_total
ALPHA
(project)
cilium_k8s_terminating_endpoints_events_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of terminating endpoint events received from Kubernetes. Sampled every 60 seconds.
cilium_kubernetes_events_received_total
ALPHA
(project)
cilium_kubernetes_events_received_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of Kubernetes events received labeled by scope, action, valid data and equalness. Sampled every 60 seconds.
action :
action.
equal :
equal.
scope :
scope.
valid :
valid.
cilium_kubernetes_events_total
ALPHA
(project)
cilium_kubernetes_events_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of Kubernetes events processed labeled by scope, action and execution result. Sampled every 60 seconds.
action :
action.
scope :
scope.
status :
status.
cilium_node_connectivity_latency_seconds
ALPHA
(project)
cilium_node_connectivity_latency_seconds
GAUGE , DOUBLE , s
k8s_container
The last observed latency between the current Cilium agent and other Cilium nodes in seconds. Sampled every 60 seconds.
address_type :
address_type.
protocol :
protocol.
source_cluster :
source_cluster.
source_node_name :
source_node_name.
target_cluster :
target_cluster.
target_node_ip :
target_node_ip.
target_node_name :
target_node_name.
target_node_type :
target_node_type.
type :
type.
cilium_node_connectivity_status
ALPHA
(project)
cilium_node_connectivity_status
GAUGE , DOUBLE , 1
k8s_container
The last observed status of both ICMP and HTTP connectivity between the current Cilium agent and other Cilium nodes. Sampled every 60 seconds.
source_cluster :
source_cluster.
source_node_name :
source_node_name.
target_cluster :
target_cluster.
target_node_name :
target_node_name.
target_node_type :
target_node_type.
type :
type.
cilium_nodes_all_datapath_validations_total
ALPHA
(project)
cilium_nodes_all_datapath_validations_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of validation calls to implement the datapath implementation of a node. Sampled every 60 seconds.
cilium_nodes_all_events_received_total
ALPHA
(project)
cilium_nodes_all_events_received_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of node events received. Sampled every 60 seconds.
event_type :
event_type.
source :
source.
cilium_nodes_all_num
ALPHA
(project)
cilium_nodes_all_num
GAUGE , DOUBLE , 1
k8s_container
Number of nodes managed. Sampled every 60 seconds.
cilium_operator_ces_queueing_delay_seconds
ALPHA
(project)
cilium_operator_ces_queueing_delay_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
CiliumEndpointSlice queueing delay in seconds. Sampled every 60 seconds.
cilium_operator_ces_sync_errors_total
ALPHA
(project)
cilium_operator_ces_sync_errors_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of CES sync errors. Sampled every 60 seconds.
cilium_operator_identity_gc_entries
ALPHA
(project)
cilium_operator_identity_gc_entries
GAUGE , DOUBLE , 1
k8s_container
The number of alive and deleted identities at the end of a garbage collector run. Sampled every 60 seconds.
status :
status.
cilium_operator_identity_gc_runs
ALPHA
(project)
cilium_operator_identity_gc_runs
GAUGE , DOUBLE , 1
k8s_container
The number of times identity garbage collector has run. Sampled every 60 seconds.
outcome :
outcome.
cilium_operator_number_of_ceps_per_ces
ALPHA
(project)
cilium_operator_number_of_ceps_per_ces
CUMULATIVE , DISTRIBUTION , 1
k8s_container
The number of CEPs batched in a CES. Sampled every 60 seconds.
cilium_operator_process_cpu_seconds_total
ALPHA
(project)
cilium_operator_process_cpu_seconds_total
CUMULATIVE , DOUBLE , s
k8s_container
Total user and system CPU time spent in seconds. Sampled every 60 seconds.
cilium_operator_process_max_fds
ALPHA
(project)
cilium_operator_process_max_fds
GAUGE , DOUBLE , 1
k8s_container
Maximum number of open file descriptors. Sampled every 60 seconds.
cilium_operator_process_open_fds
ALPHA
(project)
cilium_operator_process_open_fds
GAUGE , DOUBLE , 1
k8s_container
Number of open file descriptors. Sampled every 60 seconds.
cilium_operator_process_resident_memory_bytes
ALPHA
(project)
cilium_operator_process_resident_memory_bytes
GAUGE , DOUBLE , By
k8s_container
Resident memory size in bytes. Sampled every 60 seconds.
cilium_operator_process_start_time_seconds
ALPHA
(project)
cilium_operator_process_start_time_seconds
GAUGE , DOUBLE , s
k8s_container
Start time of the process since unix epoch in seconds. Sampled every 60 seconds.
cilium_operator_process_virtual_memory_bytes
ALPHA
(project)
cilium_operator_process_virtual_memory_bytes
GAUGE , DOUBLE , By
k8s_container
Virtual memory size in bytes. Sampled every 60 seconds.
cilium_operator_process_virtual_memory_max_bytes
ALPHA
(project)
cilium_operator_process_virtual_memory_max_bytes
GAUGE , DOUBLE , By
k8s_container
Maximum amount of virtual memory available in bytes. Sampled every 60 seconds.
cilium_policy
ALPHA
(project)
cilium_policy
GAUGE , DOUBLE , 1
k8s_container
Number of policies currently loaded. Sampled every 60 seconds.
cilium_policy_endpoint_enforcement_status
ALPHA
(project)
cilium_policy_endpoint_enforcement_status
GAUGE , DOUBLE , 1
k8s_container
Number of endpoints labeled by policy enforcement status. Sampled every 60 seconds.
enforcement :
enforcement.
cilium_policy_import_errors_total
ALPHA
(project)
cilium_policy_import_errors_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of times a policy import has failed. Sampled every 60 seconds.
cilium_policy_l7_denied_total
ALPHA
(project)
cilium_policy_l7_denied_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of total L7 denied requests/responses due to policy. Sampled every 60 seconds.
cilium_policy_l7_forwarded_total
ALPHA
(project)
cilium_policy_l7_forwarded_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of total L7 forwarded requests/responses. Sampled every 60 seconds.
cilium_policy_l7_parse_errors_total
ALPHA
(project)
cilium_policy_l7_parse_errors_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of total L7 parse errors. Sampled every 60 seconds.
cilium_policy_l7_received_total
ALPHA
(project)
cilium_policy_l7_received_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of total L7 received requests/responses. Sampled every 60 seconds.
cilium_policy_max_revision
ALPHA
(project)
cilium_policy_max_revision
GAUGE , DOUBLE , 1
k8s_container
Highest policy revision number in the agent. Sampled every 60 seconds.
cilium_policy_regeneration_time_stats_seconds
ALPHA
(project)
cilium_policy_regeneration_time_stats_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
Policy regeneration time stats labeled by the scope. Sampled every 60 seconds.
scope :
scope.
status :
status.
cilium_policy_regeneration_total
ALPHA
(project)
cilium_policy_regeneration_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of successful policy regenerations. Sampled every 60 seconds.
cilium_process_cpu_seconds_total
ALPHA
(project)
cilium_process_cpu_seconds_total
CUMULATIVE , DOUBLE , s
k8s_container
Total user and system CPU time spent in seconds. Sampled every 60 seconds.
cilium_process_max_fds
ALPHA
(project)
cilium_process_max_fds
GAUGE , DOUBLE , 1
k8s_container
Maximum number of open file descriptors. Sampled every 60 seconds.
cilium_process_open_fds
ALPHA
(project)
cilium_process_open_fds
GAUGE , DOUBLE , 1
k8s_container
Number of open file descriptors. Sampled every 60 seconds.
cilium_process_resident_memory_bytes
ALPHA
(project)
cilium_process_resident_memory_bytes
GAUGE , DOUBLE , By
k8s_container
Resident memory size in bytes. Sampled every 60 seconds.
cilium_process_start_time_seconds
ALPHA
(project)
cilium_process_start_time_seconds
GAUGE , DOUBLE , s
k8s_container
Start time of the process since unix epoch in seconds. Sampled every 60 seconds.
cilium_process_virtual_memory_bytes
ALPHA
(project)
cilium_process_virtual_memory_bytes
GAUGE , DOUBLE , By
k8s_container
Virtual memory size in bytes. Sampled every 60 seconds.
cilium_process_virtual_memory_max_bytes
ALPHA
(project)
cilium_process_virtual_memory_max_bytes
GAUGE , DOUBLE , By
k8s_container
Maximum amount of virtual memory available in bytes. Sampled every 60 seconds.
cilium_subprocess_start_total
ALPHA
(project)
cilium_subprocess_start_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of times that Cilium has started a subprocess, labeled by subsystem. Sampled every 60 seconds.
subsystem :
subsystem.
cilium_triggers_policy_update_call_duration_seconds
ALPHA
(project)
cilium_triggers_policy_update_call_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
Duration of policy update trigger. Sampled every 60 seconds.
type :
type.
cilium_triggers_policy_update_folds
ALPHA
(project)
cilium_triggers_policy_update_folds
GAUGE , DOUBLE , 1
k8s_container
Current number of folds. Sampled every 60 seconds.
cilium_triggers_policy_update_total
ALPHA
(project)
cilium_triggers_policy_update_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of policy update trigger invocations labeled by reason. Sampled every 60 seconds.
reason :
reason.
cilium_unreachable_health_endpoints
ALPHA
(project)
cilium_unreachable_health_endpoints
GAUGE , DOUBLE , 1
k8s_container
Number of health endpoints that cannot be reached. Sampled every 60 seconds.
cilium_unreachable_nodes
ALPHA
(project)
cilium_unreachable_nodes
GAUGE , DOUBLE , 1
k8s_container
Number of nodes that cannot be reached. Sampled every 60 seconds.
cilium_version
ALPHA
(project)
cilium_version
GAUGE , DOUBLE , 1
k8s_container
Cilium version. Sampled every 60 seconds.
version :
version.
claims_adds
ALPHA
(project)
claims_adds
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of adds handled by workqueue: claims. Sampled every 60 seconds.
claims_depth
ALPHA
(project)
claims_depth
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) Current depth of workqueue: claims. Sampled every 60 seconds.
claims_longest_running_processor_microseconds
ALPHA
(project)
claims_longest_running_processor_microseconds
GAUGE , DOUBLE , us
k8s_container
(Deprecated) How many microseconds has the longest running processor for claims been running. Sampled every 60 seconds.
claims_queue_latency
ALPHA
(project)
claims_queue_latency
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueueclaims before being requested. Sampled every 60 seconds.
quantile :
quantile.
claims_queue_latency_count
ALPHA
(project)
claims_queue_latency_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long an item stays in workqueueclaims before being requested. Sampled every 60 seconds.
claims_queue_latency_sum
ALPHA
(project)
claims_queue_latency_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueueclaims before being requested. Sampled every 60 seconds.
claims_unfinished_work_seconds
ALPHA
(project)
claims_unfinished_work_seconds
GAUGE , DOUBLE , s
k8s_container
(Deprecated) How many seconds of work claims has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases. Sampled every 60 seconds.
claims_work_duration
ALPHA
(project)
claims_work_duration
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueueclaims takes. Sampled every 60 seconds.
quantile :
quantile.
claims_work_duration_count
ALPHA
(project)
claims_work_duration_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long processing an item from workqueueclaims takes. Sampled every 60 seconds.
claims_work_duration_sum
ALPHA
(project)
claims_work_duration_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueueclaims takes. Sampled every 60 seconds.
cloudprovider_aws_api_request_duration_seconds
ALPHA
(project)
cloudprovider_aws_api_request_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_node
Latency of AWS API calls. Sampled every 60 seconds.
request :
request.
cloudprovider_vsphere_api_request_duration_seconds
ALPHA
(project)
cloudprovider_vsphere_api_request_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
Latency of vsphere api call. Sampled every 60 seconds.
request :
request.
cloudprovider_vsphere_api_request_errors
ALPHA
(project)
cloudprovider_vsphere_api_request_errors
CUMULATIVE , DOUBLE , 1
k8s_container
vsphere Api errors. Sampled every 60 seconds.
request :
request.
cloudprovider_vsphere_operation_duration_seconds
ALPHA
(project)
cloudprovider_vsphere_operation_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
Latency of vsphere operation call. Sampled every 60 seconds.
operation :
operation.
cloudprovider_vsphere_operation_errors
ALPHA
(project)
cloudprovider_vsphere_operation_errors
CUMULATIVE , DOUBLE , 1
k8s_container
vsphere operation errors. Sampled every 60 seconds.
operation :
operation.
cloudprovider_vsphere_vcenter_versions
ALPHA
(project)
cloudprovider_vsphere_vcenter_versions
GAUGE , DOUBLE , 1
k8s_container
Versions for connected vSphere vCenters. Sampled every 60 seconds.
build :
build.
hostname :
hostname.
version :
version.
cluster_feature_enabled
ALPHA
(project)
Enablement status of Anthos cluster features.
GAUGE , DOUBLE , 1
k8s_container
Records information regarding Anthos feature enablement. 1 for enabled and 0 for disabled. Sampled every 60 seconds.
name :
name.
stage :
stage.
cluster_level_operation_status_total
ALPHA
(project)
Status of cluster-level cluster operations
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_pod
Counts the cluster-level status of cluster lifecycle operations. Sampled every 60 seconds.
cluster_version :
cluster_version.
operation :
operation.
source :
source.
status :
status.
target_cluster_name :
target_cluster_name.
target_cluster_version :
target_cluster_version.
cluster_level_operations_total
ALPHA
(project)
Total cluster-level cluster operations
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_pod
Counts the total number of cluster-level anthos cluster level operations attempted. Sampled every 60 seconds.
cluster_version :
cluster_version.
operation :
operation.
source :
source.
target_cluster_name :
target_cluster_name.
target_cluster_version :
target_cluster_version.
cluster_metadata_info
ALPHA
(project)
Metadata information of Anthos cluster.
GAUGE , DOUBLE , 1
k8s_container
Records information regarding Anthos cluster metadata. Sampled every 60 seconds.
name :
name.
type :
type.
value :
value.
cluster_operation_duration_seconds
ALPHA
(project)
Duration of cluster operation
CUMULATIVE , DISTRIBUTION , s
k8s_container
k8s_pod
Histogram of latencies for completed operations on an anthos cluster. Sampled every 60 seconds.
cluster_version :
cluster_version.
error_reason :
error_reason.
operation :
operation.
operation_id :
operation_id.
source :
source.
status :
status.
target_cluster_name :
target_cluster_name.
target_cluster_version :
target_cluster_version.
cluster_operation_status
ALPHA
(project)
Status of cluster operation
GAUGE , DOUBLE , 1
k8s_container
k8s_pod
Reports the status of the cluster lifecycle operation. Sampled every 60 seconds.
cluster_version :
cluster_version.
error_reason :
error_reason.
operation :
operation.
operation_id :
operation_id.
source :
source.
status :
status.
target_cluster_name :
target_cluster_name.
target_cluster_version :
target_cluster_version.
cluster_operations_total
ALPHA
(project)
cluster_operations_total
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_pod
This metric counts the total number of anthos cluster operations attempted. Sampled every 60 seconds.
cluster_version :
cluster_version.
operation :
operation.
operation_id :
operation_id.
source :
source.
target_cluster_name :
target_cluster_name.
target_cluster_version :
target_cluster_version.
computed_cluster_health
ALPHA
(project)
anthos cluster health
GAUGE , DOUBLE , 1
k8s_container
Calculated cluster health metric. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
healthcheck_severity :
severity of healthcheck (i.e. CRITICAL, OPTIONAL)
healthcheck_status :
status of healthcheck.
healthcheck_type :
healthcheck type.
monitored_component_namespace :
namespace of the monitored component.
container/cpu/core_usage_time
ALPHA
(project)
CPU usage time
CUMULATIVE , DOUBLE , s{CPU}
k8s_container
Cumulative CPU usage on all cores used by the container in seconds. Sampled every 60 seconds.
container/cpu/limit_cores
ALPHA
(project)
Limit cores
GAUGE , DOUBLE , {cpu}
k8s_container
CPU cores limit of the container. Sampled every 60 seconds.
container/cpu/limit_utilization
ALPHA
(project)
CPU limit utilization
GAUGE , DOUBLE , 1
k8s_container
The fraction of the CPU limit that is currently in use on the instance. This value can be greater than 1 as a container might be allowed to exceed its CPU limit for extended periods of time. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
container/cpu/request_cores
ALPHA
(project)
Request cores
GAUGE , DOUBLE , {cpu}
k8s_container
Number of CPU cores requested by the container. Sampled every 60 seconds.
container/cpu/request_utilization
ALPHA
(project)
CPU request utilization
GAUGE , DOUBLE , 1
k8s_container
The fraction of the requested CPU that is currently in use on the instance. This value can be greater than 1 as usage can exceed the request. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
container/ephemeral_storage/limit_bytes
ALPHA
(project)
Ephemeral storage limit
GAUGE , INT64 , By
k8s_container
Local ephemeral storage limit in bytes. Sampled every 60 seconds.
container/ephemeral_storage/request_bytes
ALPHA
(project)
Ephemeral storage request
GAUGE , INT64 , By
k8s_container
Local ephemeral storage request in bytes. Sampled every 60 seconds.
container/ephemeral_storage/used_bytes
ALPHA
(project)
Ephemeral storage usage
GAUGE , INT64 , By
k8s_container
Local ephemeral storage usage in bytes. Sampled every 60 seconds.
container/memory/limit_bytes
ALPHA
(project)
Memory limit
GAUGE , INT64 , By
k8s_container
Memory limit of the container in bytes. Sampled every 60 seconds.
container/memory/limit_utilization
ALPHA
(project)
Memory limit utilization
GAUGE , DOUBLE , 1
k8s_container
The fraction of the memory limit that is currently in use on the instance. This value cannot exceed 1 as usage cannot exceed the limit. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
memory_type :
Either `evictable` or `non-evictable`. Evictable memory is memory that can be easily reclaimed by the kernel, while non-evictable memory cannot.
container/memory/page_fault_count
ALPHA
(project)
Page faults
CUMULATIVE , INT64 , 1
k8s_container
Number of page faults, broken down by type: major and minor. Sampled every 60 seconds.
fault_type :
Fault type - either `major` or `minor`, with the former indicating that the page had to be loaded from disk.
container/memory/request_bytes
ALPHA
(project)
Memory request
GAUGE , INT64 , By
k8s_container
Memory request of the container in bytes. Sampled every 60 seconds.
container/memory/request_utilization
ALPHA
(project)
Memory request utilization
GAUGE , DOUBLE , 1
k8s_container
The fraction of the requested memory that is currently in use on the instance. This value can be greater than 1 as usage can exceed the request. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
memory_type :
Either `evictable` or `non-evictable`. Evictable memory is memory that can be easily reclaimed by the kernel, while non-evictable memory cannot.
container/memory/used_bytes
ALPHA
(project)
Memory usage
GAUGE , INT64 , By
k8s_container
Memory usage in bytes. Sampled every 60 seconds.
memory_type :
memory_type.
container/restart_count
ALPHA
(project)
Restart count
CUMULATIVE , INT64 , 1
k8s_container
Number of times the container has restarted. Sampled every 60 seconds.
container/uptime
ALPHA
(project)
Container uptime
GAUGE , DOUBLE , s
k8s_container
Time in seconds that the container has been running. Sampled every 60 seconds.
container_cpu_cfs_periods_total
ALPHA
(project)
container_cpu_cfs_periods_total
CUMULATIVE , DOUBLE , 1
k8s_node
Number of elapsed enforcement period intervals. Sampled every 60 seconds.
container :
container.
container_name :
container_name.
id :
id.
image :
image.
name :
name.
namespace :
namespace.
pod :
pod.
pod_name :
pod_name.
container_cpu_cfs_throttled_periods_total
ALPHA
(project)
container_cpu_cfs_throttled_periods_total
CUMULATIVE , DOUBLE , 1
k8s_node
Number of throttled period intervals. Sampled every 60 seconds.
container :
container.
container_name :
container_name.
id :
id.
image :
image.
name :
name.
namespace :
namespace.
pod :
pod.
pod_name :
pod_name.
container_cpu_cfs_throttled_seconds_total
ALPHA
(project)
container_cpu_cfs_throttled_seconds_total
CUMULATIVE , DOUBLE , s
k8s_node
Total time duration the container has been throttled. Sampled every 60 seconds.
container :
container.
id :
id.
image :
image.
name :
name.
namespace :
namespace.
pod :
pod.
container_cpu_cfs_throttled_seconds_total/counter
ALPHA
(project)
container_cpu_cfs_throttled_seconds_total
CUMULATIVE , DOUBLE , s
prometheus_target
Total time duration the container has been throttled. Sampled every 30 seconds.
container :
container.
id :
id.
image :
image.
name :
name.
pod :
pod.
container_cpu_load_average_10s
ALPHA
(project)
container_cpu_load_average_10s
GAUGE , DOUBLE , 1
k8s_node
Value of container cpu load average over the last 10 seconds. Sampled every 60 seconds.
container :
container.
container_name :
container_name.
id :
id.
image :
image.
name :
name.
namespace :
namespace.
pod :
pod.
pod_name :
pod_name.
container_cpu_system_seconds_total
ALPHA
(project)
container_cpu_system_seconds_total
CUMULATIVE , DOUBLE , s
k8s_node
Cumulative system cpu time consumed in seconds. Sampled every 60 seconds.
container :
container.
container_name :
container_name.
id :
id.
image :
image.
name :
name.
namespace :
namespace.
pod :
pod.
pod_name :
pod_name.
container_cpu_usage_seconds_total
ALPHA
(project)
container_cpu_usage_seconds_total
CUMULATIVE , DOUBLE , s
k8s_node
Cumulative cpu time consumed in seconds. Sampled every 60 seconds.
container :
container.
cpu :
cpu.
id :
id.
image :
image.
name :
name.
namespace :
namespace.
pod :
pod.
container_cpu_usage_seconds_total/counter
ALPHA
(project)
container_cpu_usage_seconds_total
CUMULATIVE , DOUBLE , s
prometheus_target
Cumulative cpu time consumed in seconds. Sampled every 30 seconds.
container :
container.
cpu :
cpu.
id :
id.
image :
image.
name :
name.
pod :
pod.
container_cpu_user_seconds_total
ALPHA
(project)
container_cpu_user_seconds_total
CUMULATIVE , DOUBLE , s
k8s_node
Cumulative user cpu time consumed in seconds. Sampled every 60 seconds.
container :
container.
container_name :
container_name.
id :
id.
image :
image.
name :
name.
namespace :
namespace.
pod :
pod.
pod_name :
pod_name.
container_file_descriptors
ALPHA
(project)
container_file_descriptors
GAUGE , DOUBLE , 1
k8s_node
Number of open file descriptors for the container. Sampled every 60 seconds.
container :
container.
id :
id.
image :
image.
name :
name.
namespace :
namespace.
pod :
pod.
container_file_descriptors/gauge
ALPHA
(project)
container_file_descriptors
GAUGE , DOUBLE , 1
prometheus_target
Number of open file descriptors for the container. Sampled every 30 seconds.
container :
container.
id :
id.
image :
image.
name :
name.
pod :
pod.
container_fs_inodes_free
ALPHA
(project)
container_fs_inodes_free
GAUGE , DOUBLE , 1
k8s_node
Number of available Inodes. Sampled every 60 seconds.
container :
container.
device :
device.
id :
id.
image :
image.
name :
name.
namespace :
namespace.
pod :
pod.
container_fs_inodes_free/gauge
ALPHA
(project)
container_fs_inodes_free
GAUGE , DOUBLE , 1
prometheus_target
Number of available Inodes. Sampled every 30 seconds.
container :
container.
device :
device.
id :
id.
image :
image.
name :
name.
pod :
pod.
container_fs_inodes_total
ALPHA
(project)
container_fs_inodes_total
GAUGE , DOUBLE , 1
k8s_node
Number of Inodes. Sampled every 60 seconds.
container :
container.
device :
device.
id :
id.
image :
image.
name :
name.
namespace :
namespace.
pod :
pod.
container_fs_inodes_total/gauge
ALPHA
(project)
container_fs_inodes_total
GAUGE , DOUBLE , 1
prometheus_target
Number of Inodes. Sampled every 30 seconds.
container :
container.
device :
device.
id :
id.
image :
image.
name :
name.
pod :
pod.
container_fs_io_current
ALPHA
(project)
container_fs_io_current
GAUGE , DOUBLE , 1
k8s_node
Number of I/Os currently in progress. Sampled every 60 seconds.
container :
container.
container_name :
container_name.
device :
device.
id :
id.
image :
image.
name :
name.
namespace :
namespace.
pod :
pod.
pod_name :
pod_name.
container_fs_io_time_seconds_total
ALPHA
(project)
container_fs_io_time_seconds_total
CUMULATIVE , DOUBLE , s
k8s_node
Cumulative count of seconds spent doing I/Os. Sampled every 60 seconds.
container :
container.
container_name :
container_name.
device :
device.
id :
id.
image :
image.
name :
name.
namespace :
namespace.
pod :
pod.
pod_name :
pod_name.
container_fs_io_time_weighted_seconds_total
ALPHA
(project)
container_fs_io_time_weighted_seconds_total
CUMULATIVE , DOUBLE , s
k8s_node
Cumulative weighted I/O time in seconds. Sampled every 60 seconds.
container :
container.
container_name :
container_name.
device :
device.
id :
id.
image :
image.
name :
name.
namespace :
namespace.
pod :
pod.
pod_name :
pod_name.
container_fs_limit_bytes
ALPHA
(project)
container_fs_limit_bytes
GAUGE , DOUBLE , By
k8s_node
Number of bytes that can be consumed by the container on this filesystem. Sampled every 60 seconds.
container :
container.
device :
device.
id :
id.
image :
image.
name :
name.
namespace :
namespace.
pod :
pod.
container_fs_limit_bytes/gauge
ALPHA
(project)
container_fs_limit_bytes
GAUGE , DOUBLE , By
prometheus_target
Number of bytes that can be consumed by the container on this filesystem. Sampled every 30 seconds.
container :
container.
device :
device.
id :
id.
image :
image.
name :
name.
pod :
pod.
container_fs_read_seconds_total
ALPHA
(project)
container_fs_read_seconds_total
CUMULATIVE , DOUBLE , s
k8s_node
Cumulative count of seconds spent reading. Sampled every 60 seconds.
container :
container.
container_name :
container_name.
device :
device.
id :
id.
image :
image.
name :
name.
namespace :
namespace.
pod :
pod.
pod_name :
pod_name.
container_fs_reads_bytes_total
ALPHA
(project)
container_fs_reads_bytes_total
CUMULATIVE , DOUBLE , By
k8s_node
Cumulative count of bytes read. Sampled every 60 seconds.
container :
container.
device :
device.
id :
id.
image :
image.
name :
name.
namespace :
namespace.
pod :
pod.
container_fs_reads_bytes_total/counter
ALPHA
(project)
container_fs_reads_bytes_total
CUMULATIVE , DOUBLE , By
prometheus_target
Cumulative count of bytes read. Sampled every 30 seconds.
container :
container.
device :
device.
id :
id.
image :
image.
name :
name.
pod :
pod.
container_fs_reads_merged_total
ALPHA
(project)
container_fs_reads_merged_total
CUMULATIVE , DOUBLE , 1
k8s_node
Cumulative count of reads merged. Sampled every 60 seconds.
container :
container.
container_name :
container_name.
device :
device.
id :
id.
image :
image.
name :
name.
namespace :
namespace.
pod :
pod.
pod_name :
pod_name.
container_fs_reads_total
ALPHA
(project)
container_fs_reads_total
CUMULATIVE , DOUBLE , 1
k8s_node
Cumulative count of reads completed. Sampled every 60 seconds.
container :
container.
container_name :
container_name.
device :
device.
id :
id.
image :
image.
name :
name.
namespace :
namespace.
pod :
pod.
pod_name :
pod_name.
container_fs_sector_reads_total
ALPHA
(project)
container_fs_sector_reads_total
CUMULATIVE , DOUBLE , 1
k8s_node
Cumulative count of sector reads completed. Sampled every 60 seconds.
container :
container.
container_name :
container_name.
device :
device.
id :
id.
image :
image.
name :
name.
namespace :
namespace.
pod :
pod.
pod_name :
pod_name.
container_fs_sector_writes_total
ALPHA
(project)
container_fs_sector_writes_total
CUMULATIVE , DOUBLE , 1
k8s_node
Cumulative count of sector writes completed. Sampled every 60 seconds.
container :
container.
container_name :
container_name.
device :
device.
id :
id.
image :
image.
name :
name.
namespace :
namespace.
pod :
pod.
pod_name :
pod_name.
container_fs_usage_bytes
ALPHA
(project)
container_fs_usage_bytes
GAUGE , DOUBLE , By
k8s_node
Number of bytes that are consumed by the container on this filesystem. Sampled every 60 seconds.
container :
container.
device :
device.
id :
id.
image :
image.
name :
name.
namespace :
namespace.
pod :
pod.
container_fs_usage_bytes/gauge
ALPHA
(project)
container_fs_usage_bytes
GAUGE , DOUBLE , By
prometheus_target
Number of bytes that are consumed by the container on this filesystem. Sampled every 30 seconds.
container :
container.
device :
device.
id :
id.
image :
image.
name :
name.
pod :
pod.
container_fs_write_seconds_total
ALPHA
(project)
container_fs_write_seconds_total
CUMULATIVE , DOUBLE , s
k8s_node
Cumulative count of seconds spent writing. Sampled every 60 seconds.
container :
container.
container_name :
container_name.
device :
device.
id :
id.
image :
image.
name :
name.
namespace :
namespace.
pod :
pod.
pod_name :
pod_name.
container_fs_writes_bytes_total
ALPHA
(project)
container_fs_writes_bytes_total
CUMULATIVE , DOUBLE , By
k8s_node
Cumulative count of bytes written. Sampled every 60 seconds.
container :
container.
device :
device.
id :
id.
image :
image.
name :
name.
namespace :
namespace.
pod :
pod.
container_fs_writes_bytes_total/counter
ALPHA
(project)
container_fs_writes_bytes_total
CUMULATIVE , DOUBLE , By
prometheus_target
Cumulative count of bytes written. Sampled every 30 seconds.
container :
container.
device :
device.
id :
id.
image :
image.
name :
name.
pod :
pod.
container_fs_writes_merged_total
ALPHA
(project)
container_fs_writes_merged_total
CUMULATIVE , DOUBLE , 1
k8s_node
Cumulative count of writes merged. Sampled every 60 seconds.
container :
container.
container_name :
container_name.
device :
device.
id :
id.
image :
image.
name :
name.
namespace :
namespace.
pod :
pod.
pod_name :
pod_name.
container_fs_writes_total
ALPHA
(project)
container_fs_writes_total
CUMULATIVE , DOUBLE , 1
k8s_node
Cumulative count of writes completed. Sampled every 60 seconds.
container :
container.
container_name :
container_name.
device :
device.
id :
id.
image :
image.
name :
name.
namespace :
namespace.
pod :
pod.
pod_name :
pod_name.
container_last_seen
ALPHA
(project)
container_last_seen
GAUGE , DOUBLE , 1
k8s_node
Last time a container was seen by the exporter. Sampled every 60 seconds.
container :
container.
container_name :
container_name.
id :
id.
image :
image.
name :
name.
namespace :
namespace.
pod :
pod.
pod_name :
pod_name.
container_memory_cache
ALPHA
(project)
container_memory_cache
GAUGE , DOUBLE , 1
k8s_node
Number of bytes of page cache memory. Sampled every 60 seconds.
container :
container.
container_name :
container_name.
id :
id.
image :
image.
name :
name.
namespace :
namespace.
pod :
pod.
pod_name :
pod_name.
container_memory_failcnt
ALPHA
(project)
container_memory_failcnt
CUMULATIVE , DOUBLE , 1
k8s_node
Number of memory usage hits limits. Sampled every 60 seconds.
container :
container.
container_name :
container_name.
id :
id.
image :
image.
name :
name.
namespace :
namespace.
pod :
pod.
pod_name :
pod_name.
container_memory_failures_total
ALPHA
(project)
container_memory_failures_total
CUMULATIVE , DOUBLE , 1
k8s_node
Cumulative count of memory allocation failures. Sampled every 60 seconds.
container :
container.
failure_type :
failure_type.
id :
id.
image :
image.
name :
name.
namespace :
namespace.
pod :
pod.
scope :
scope.
type :
type.
container_memory_failures_total/counter
ALPHA
(project)
container_memory_failures_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Cumulative count of memory allocation failures. Sampled every 30 seconds.
container :
container.
failure_type :
failure_type.
id :
id.
image :
image.
name :
name.
pod :
pod.
scope :
scope.
type :
type.
container_memory_mapped_file
ALPHA
(project)
container_memory_mapped_file
GAUGE , DOUBLE , 1
k8s_node
Size of memory mapped files in bytes. Sampled every 60 seconds.
container :
container.
container_name :
container_name.
id :
id.
image :
image.
name :
name.
namespace :
namespace.
pod :
pod.
pod_name :
pod_name.
container_memory_max_usage_bytes
ALPHA
(project)
container_memory_max_usage_bytes
GAUGE , DOUBLE , By
k8s_node
Maximum memory usage recorded in bytes. Sampled every 60 seconds.
container :
container.
container_name :
container_name.
id :
id.
image :
image.
name :
name.
namespace :
namespace.
pod :
pod.
pod_name :
pod_name.
container_memory_rss
ALPHA
(project)
container_memory_rss
GAUGE , DOUBLE , 1
k8s_node
Size of RSS in bytes. Sampled every 60 seconds.
container :
container.
id :
id.
image :
image.
name :
name.
namespace :
namespace.
pod :
pod.
container_memory_rss/gauge
ALPHA
(project)
container_memory_rss
GAUGE , DOUBLE , 1
prometheus_target
Size of RSS in bytes. Sampled every 30 seconds.
container :
container.
id :
id.
image :
image.
name :
name.
pod :
pod.
container_memory_swap
ALPHA
(project)
container_memory_swap
GAUGE , DOUBLE , 1
k8s_node
Container swap usage in bytes. Sampled every 60 seconds.
container :
container.
container_name :
container_name.
id :
id.
image :
image.
name :
name.
namespace :
namespace.
pod :
pod.
pod_name :
pod_name.
container_memory_usage_bytes
ALPHA
(project)
container_memory_usage_bytes
GAUGE , DOUBLE , By
k8s_node
Current memory usage in bytes, including all memory regardless of when it was accessed. Sampled every 60 seconds.
container :
container.
id :
id.
image :
image.
name :
name.
namespace :
namespace.
pod :
pod.
container_memory_usage_bytes/gauge
ALPHA
(project)
container_memory_usage_bytes
GAUGE , DOUBLE , By
prometheus_target
Current memory usage in bytes, including all memory regardless of when it was accessed. Sampled every 30 seconds.
container :
container.
id :
id.
image :
image.
name :
name.
pod :
pod.
container_memory_working_set_bytes
ALPHA
(project)
container_memory_working_set_bytes
GAUGE , DOUBLE , By
k8s_node
Current working set in bytes. Sampled every 60 seconds.
container :
container.
id :
id.
image :
image.
name :
name.
namespace :
namespace.
pod :
pod.
container_memory_working_set_bytes/gauge
ALPHA
(project)
container_memory_working_set_bytes
GAUGE , DOUBLE , By
prometheus_target
Current working set in bytes. Sampled every 30 seconds.
container :
container.
id :
id.
image :
image.
name :
name.
pod :
pod.
container_network_receive_bytes_total
ALPHA
(project)
container_network_receive_bytes_total
CUMULATIVE , DOUBLE , By
k8s_node
Cumulative count of bytes received. Sampled every 60 seconds.
container :
container.
id :
id.
image :
image.
interface :
interface.
name :
name.
namespace :
namespace.
pod :
pod.
container_network_receive_bytes_total/counter
ALPHA
(project)
container_network_receive_bytes_total
CUMULATIVE , DOUBLE , By
prometheus_target
Cumulative count of bytes received. Sampled every 30 seconds.
container :
container.
id :
id.
image :
image.
interface :
interface.
name :
name.
pod :
pod.
container_network_receive_errors_total
ALPHA
(project)
container_network_receive_errors_total
CUMULATIVE , DOUBLE , 1
k8s_node
Cumulative count of errors encountered while receiving. Sampled every 60 seconds.
container :
container.
id :
id.
image :
image.
interface :
interface.
name :
name.
namespace :
namespace.
pod :
pod.
container_network_receive_errors_total/counter
ALPHA
(project)
container_network_receive_errors_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Cumulative count of errors encountered while receiving. Sampled every 30 seconds.
container :
container.
id :
id.
image :
image.
interface :
interface.
name :
name.
pod :
pod.
container_network_receive_packets_dropped_total
ALPHA
(project)
container_network_receive_packets_dropped_total
CUMULATIVE , DOUBLE , 1
k8s_node
Cumulative count of packets dropped while receiving. Sampled every 60 seconds.
container :
container.
container_name :
container_name.
id :
id.
image :
image.
interface :
interface.
name :
name.
namespace :
namespace.
pod :
pod.
pod_name :
pod_name.
container_network_receive_packets_total
ALPHA
(project)
container_network_receive_packets_total
CUMULATIVE , DOUBLE , 1
k8s_node
Cumulative count of packets received. Sampled every 60 seconds.
container :
container.
container_name :
container_name.
id :
id.
image :
image.
interface :
interface.
name :
name.
namespace :
namespace.
pod :
pod.
pod_name :
pod_name.
container_network_transmit_bytes_total
ALPHA
(project)
container_network_transmit_bytes_total
CUMULATIVE , DOUBLE , By
k8s_node
Cumulative count of bytes transmitted. Sampled every 60 seconds.
container :
container.
id :
id.
image :
image.
interface :
interface.
name :
name.
namespace :
namespace.
pod :
pod.
container_network_transmit_bytes_total/counter
ALPHA
(project)
container_network_transmit_bytes_total
CUMULATIVE , DOUBLE , By
prometheus_target
Cumulative count of bytes transmitted. Sampled every 30 seconds.
container :
container.
id :
id.
image :
image.
interface :
interface.
name :
name.
pod :
pod.
container_network_transmit_errors_total
ALPHA
(project)
container_network_transmit_errors_total
CUMULATIVE , DOUBLE , 1
k8s_node
Cumulative count of errors encountered while transmitting. Sampled every 60 seconds.
container :
container.
id :
id.
image :
image.
interface :
interface.
name :
name.
namespace :
namespace.
pod :
pod.
container_network_transmit_errors_total/counter
ALPHA
(project)
container_network_transmit_errors_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Cumulative count of errors encountered while transmitting. Sampled every 30 seconds.
container :
container.
id :
id.
image :
image.
interface :
interface.
name :
name.
pod :
pod.
container_network_transmit_packets_dropped_total
ALPHA
(project)
container_network_transmit_packets_dropped_total
CUMULATIVE , DOUBLE , 1
k8s_node
Cumulative count of packets dropped while transmitting. Sampled every 60 seconds.
container :
container.
container_name :
container_name.
id :
id.
image :
image.
interface :
interface.
name :
name.
namespace :
namespace.
pod :
pod.
pod_name :
pod_name.
container_network_transmit_packets_total
ALPHA
(project)
container_network_transmit_packets_total
CUMULATIVE , DOUBLE , 1
k8s_node
Cumulative count of packets transmitted. Sampled every 60 seconds.
container :
container.
container_name :
container_name.
id :
id.
image :
image.
interface :
interface.
name :
name.
namespace :
namespace.
pod :
pod.
pod_name :
pod_name.
container_processes
ALPHA
(project)
container_processes
GAUGE , DOUBLE , 1
k8s_node
Number of processes running inside the container. Sampled every 60 seconds.
container :
container.
id :
id.
image :
image.
name :
name.
namespace :
namespace.
pod :
pod.
container_processes/gauge
ALPHA
(project)
container_processes
GAUGE , DOUBLE , 1
prometheus_target
Number of processes running inside the container. Sampled every 30 seconds.
container :
container.
id :
id.
image :
image.
name :
name.
pod :
pod.
container_scrape_error
ALPHA
(project)
container_scrape_error
GAUGE , DOUBLE , 1
k8s_node
1 if there was an error while getting container metrics, 0 otherwise. Sampled every 60 seconds.
container_sockets
ALPHA
(project)
container_sockets
GAUGE , DOUBLE , 1
k8s_node
Number of open sockets for the container. Sampled every 60 seconds.
container :
container.
id :
id.
image :
image.
name :
name.
namespace :
namespace.
pod :
pod.
container_spec_cpu_period
ALPHA
(project)
container_spec_cpu_period
GAUGE , DOUBLE , 1
k8s_node
CPU period of the container. Sampled every 60 seconds.
container :
container.
container_name :
container_name.
id :
id.
image :
image.
name :
name.
namespace :
namespace.
pod :
pod.
pod_name :
pod_name.
container_spec_cpu_quota
ALPHA
(project)
container_spec_cpu_quota
GAUGE , DOUBLE , 1
k8s_node
CPU quota of the container. Sampled every 60 seconds.
container :
container.
container_name :
container_name.
id :
id.
image :
image.
name :
name.
namespace :
namespace.
pod :
pod.
pod_name :
pod_name.
container_spec_cpu_shares
ALPHA
(project)
container_spec_cpu_shares
GAUGE , DOUBLE , 1
k8s_node
CPU share of the container. Sampled every 60 seconds.
container :
container.
container_name :
container_name.
id :
id.
image :
image.
name :
name.
namespace :
namespace.
pod :
pod.
pod_name :
pod_name.
container_spec_memory_limit_bytes
ALPHA
(project)
container_spec_memory_limit_bytes
GAUGE , DOUBLE , By
k8s_node
Memory limit for the container. Sampled every 60 seconds.
container :
container.
container_name :
container_name.
id :
id.
image :
image.
name :
name.
namespace :
namespace.
pod :
pod.
pod_name :
pod_name.
container_spec_memory_reservation_limit_bytes
ALPHA
(project)
container_spec_memory_reservation_limit_bytes
GAUGE , DOUBLE , By
k8s_node
Memory reservation limit for the container. Sampled every 60 seconds.
container :
container.
container_name :
container_name.
id :
id.
image :
image.
name :
name.
namespace :
namespace.
pod :
pod.
pod_name :
pod_name.
container_spec_memory_swap_limit_bytes
ALPHA
(project)
container_spec_memory_swap_limit_bytes
GAUGE , DOUBLE , By
k8s_node
Memory swap limit for the container. Sampled every 60 seconds.
container :
container.
container_name :
container_name.
id :
id.
image :
image.
name :
name.
namespace :
namespace.
pod :
pod.
pod_name :
pod_name.
container_start_time_seconds
ALPHA
(project)
container_start_time_seconds
GAUGE , DOUBLE , s
k8s_node
Start time of the container since unix epoch in seconds. Sampled every 60 seconds.
container :
container.
container_name :
container_name.
id :
id.
image :
image.
name :
name.
namespace :
namespace.
pod :
pod.
pod_name :
pod_name.
container_tasks_state
ALPHA
(project)
container_tasks_state
GAUGE , DOUBLE , 1
k8s_node
Number of tasks in given state. Sampled every 60 seconds.
container :
container.
container_name :
container_name.
id :
id.
image :
image.
name :
name.
namespace :
namespace.
pod :
pod.
pod_name :
pod_name.
state :
state.
container_threads
ALPHA
(project)
container_threads
GAUGE , DOUBLE , 1
k8s_node
Number of threads running inside the container. Sampled every 60 seconds.
container :
container.
id :
id.
image :
image.
name :
name.
namespace :
namespace.
pod :
pod.
container_threads_max
ALPHA
(project)
container_threads_max
GAUGE , DOUBLE , 1
k8s_node
Maximum number of threads allowed inside the container, infinity if value is zero. Sampled every 60 seconds.
container :
container.
id :
id.
image :
image.
name :
name.
namespace :
namespace.
pod :
pod.
container_ulimits_soft
ALPHA
(project)
container_ulimits_soft
GAUGE , DOUBLE , 1
k8s_node
Soft ulimit values for the container root process. Unlimited if -1, except priority and nice. Sampled every 60 seconds.
container :
container.
id :
id.
image :
image.
name :
name.
namespace :
namespace.
pod :
pod.
ulimit :
ulimit.
controller_runtime_active_workers
ALPHA
(project)
controller_runtime_active_workers
GAUGE , DOUBLE , 1
k8s_container
Number of currently used workers per controller. Sampled every 60 seconds.
controller :
controller.
controller_runtime_max_concurrent_reconciles
ALPHA
(project)
controller_runtime_max_concurrent_reconciles
GAUGE , DOUBLE , 1
k8s_container
Maximum number of concurrent reconciles per controller. Sampled every 60 seconds.
controller :
controller.
controller_runtime_reconcile_errors_total
ALPHA
(project)
controller_runtime_reconcile_errors_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of reconciliation errors per controller. Sampled every 60 seconds.
controller :
controller.
controller_runtime_reconcile_time_seconds
ALPHA
(project)
controller_runtime_reconcile_time_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
Length of time per reconciliation per controller. Sampled every 60 seconds.
controller :
controller.
controller_runtime_reconcile_total
ALPHA
(project)
controller_runtime_reconcile_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of reconciliations per controller. Sampled every 60 seconds.
controller :
controller.
result :
result.
controller_runtime_webhook_latency_seconds
ALPHA
(project)
controller_runtime_webhook_latency_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
Histogram of the latency of processing admission requests. Sampled every 60 seconds.
webhook :
webhook.
controller_runtime_webhook_requests_in_flight
ALPHA
(project)
controller_runtime_webhook_requests_in_flight
GAUGE , DOUBLE , 1
k8s_container
Current number of admission requests being served. Sampled every 60 seconds.
webhook :
webhook.
controller_runtime_webhook_requests_total
ALPHA
(project)
controller_runtime_webhook_requests_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of admission requests by HTTP status code. Sampled every 60 seconds.
code :
code.
webhook :
webhook.
coredns_build_info
ALPHA
(project)
coredns_build_info
GAUGE , DOUBLE , 1
k8s_container
A metric with a constant '1' value labeled by version, revision, and goversion from which CoreDNS was built. Sampled every 60 seconds.
goversion :
goversion.
revision :
revision.
version :
version.
coredns_cache_entries
ALPHA
(project)
coredns_cache_entries
GAUGE , DOUBLE , 1
k8s_container
The number of elements in the cache. Sampled every 60 seconds.
server :
server.
type :
type.
zones :
zones.
coredns_cache_hits_total
ALPHA
(project)
coredns_cache_hits_total
CUMULATIVE , DOUBLE , 1
k8s_container
The count of cache hits. Sampled every 60 seconds.
server :
server.
type :
type.
zones :
zones.
coredns_cache_misses_total
ALPHA
(project)
coredns_cache_misses_total
CUMULATIVE , DOUBLE , 1
k8s_container
The count of cache misses. Deprecated, derive misses from cache hits/requests counters. Sampled every 60 seconds.
server :
server.
zones :
zones.
coredns_cache_requests_total
ALPHA
(project)
coredns_cache_requests_total
CUMULATIVE , DOUBLE , 1
k8s_container
The count of cache requests. Sampled every 60 seconds.
server :
server.
zones :
zones.
coredns_dns_do_requests_total
ALPHA
(project)
coredns_dns_do_requests_total
CUMULATIVE , DOUBLE , 1
k8s_container
Counter of DNS requests with DO bit set per zone. Sampled every 60 seconds.
server :
server.
zone :
zone.
coredns_dns_request_duration_seconds
ALPHA
(project)
coredns_dns_request_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
Histogram of the time (in seconds) each request took. Sampled every 60 seconds.
server :
server.
type :
type.
zone :
zone.
coredns_dns_request_size_bytes
ALPHA
(project)
coredns_dns_request_size_bytes
CUMULATIVE , DISTRIBUTION , By
k8s_container
Size of the EDNS0 UDP buffer in bytes (64K for TCP). Sampled every 60 seconds.
proto :
proto.
server :
server.
zone :
zone.
coredns_dns_requests_total
ALPHA
(project)
coredns_dns_requests_total
CUMULATIVE , DOUBLE , 1
k8s_container
Counter of DNS requests made per zone, protocol and family. Sampled every 60 seconds.
family :
family.
proto :
proto.
server :
server.
type :
type.
zone :
zone.
coredns_dns_response_size_bytes
ALPHA
(project)
coredns_dns_response_size_bytes
CUMULATIVE , DISTRIBUTION , By
k8s_container
Size of the returned response in bytes. Sampled every 60 seconds.
proto :
proto.
server :
server.
zone :
zone.
coredns_dns_responses_total
ALPHA
(project)
coredns_dns_responses_total
CUMULATIVE , DOUBLE , 1
k8s_container
Counter of response status codes. Sampled every 60 seconds.
plugin :
plugin.
rcode :
rcode.
server :
server.
zone :
zone.
coredns_forward_conn_cache_hits_total
ALPHA
(project)
coredns_forward_conn_cache_hits_total
CUMULATIVE , DOUBLE , 1
k8s_container
Counter of connection cache hits per upstream and protocol. Sampled every 60 seconds.
proto :
proto.
to :
to.
coredns_forward_conn_cache_misses_total
ALPHA
(project)
coredns_forward_conn_cache_misses_total
CUMULATIVE , DOUBLE , 1
k8s_container
Counter of connection cache misses per upstream and protocol. Sampled every 60 seconds.
proto :
proto.
to :
to.
coredns_forward_healthcheck_broken_total
ALPHA
(project)
coredns_forward_healthcheck_broken_total
CUMULATIVE , DOUBLE , 1
k8s_container
Counter of the number of complete failures of the healthchecks. Sampled every 60 seconds.
coredns_forward_healthcheck_failures_total
ALPHA
(project)
coredns_forward_healthcheck_failures_total
CUMULATIVE , DOUBLE , 1
k8s_container
Counter of the number of failed healthchecks. Sampled every 60 seconds.
to :
to.
coredns_forward_max_concurrent_rejects_total
ALPHA
(project)
coredns_forward_max_concurrent_rejects_total
CUMULATIVE , DOUBLE , 1
k8s_container
Counter of the number of queries rejected because the concurrent queries were at maximum. Sampled every 60 seconds.
coredns_forward_request_duration_seconds
ALPHA
(project)
coredns_forward_request_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
Histogram of the time each request took. Sampled every 60 seconds.
to :
to.
coredns_forward_requests_total
ALPHA
(project)
coredns_forward_requests_total
CUMULATIVE , DOUBLE , 1
k8s_container
Counter of requests made per upstream. Sampled every 60 seconds.
to :
to.
coredns_forward_responses_total
ALPHA
(project)
coredns_forward_responses_total
CUMULATIVE , DOUBLE , 1
k8s_container
Counter of responses received per upstream. Sampled every 60 seconds.
rcode :
rcode.
to :
to.
coredns_health_request_duration_seconds
ALPHA
(project)
coredns_health_request_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
Histogram of the time (in seconds) each request took. Sampled every 60 seconds.
coredns_hosts_reload_timestamp_seconds
ALPHA
(project)
coredns_hosts_reload_timestamp_seconds
GAUGE , DOUBLE , s
k8s_container
The timestamp of the last reload of hosts file. Sampled every 60 seconds.
coredns_panics_total
ALPHA
(project)
coredns_panics_total
CUMULATIVE , DOUBLE , 1
k8s_container
A metrics that counts the number of panics. Sampled every 60 seconds.
coredns_plugin_enabled
ALPHA
(project)
coredns_plugin_enabled
GAUGE , DOUBLE , 1
k8s_container
A metric that indicates whether a plugin is enabled on per server and zone basis. Sampled every 60 seconds.
name :
name.
server :
server.
zone :
zone.
coredns_reload_failed_total
ALPHA
(project)
coredns_reload_failed_total
CUMULATIVE , DOUBLE , 1
k8s_container
Counter of the number of failed reload attempts. Sampled every 60 seconds.
coredns_reload_version_info
ALPHA
(project)
coredns_reload_version_info
GAUGE , DOUBLE , 1
k8s_container
A metric with a constant '1' value labeled by hash, and value which type of hash generated. Sampled every 60 seconds.
hash :
hash.
value :
value.
crdEstablishing_adds
ALPHA
(project)
crdEstablishing_adds
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of adds handled by workqueue: crdEstablishing. Sampled every 60 seconds.
crdEstablishing_depth
ALPHA
(project)
crdEstablishing_depth
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) Current depth of workqueue: crdEstablishing. Sampled every 60 seconds.
crdEstablishing_longest_running_processor_microseconds
ALPHA
(project)
crdEstablishing_longest_running_processor_microseconds
GAUGE , DOUBLE , us
k8s_container
(Deprecated) How many microseconds has the longest running processor for crdEstablishing been running. Sampled every 60 seconds.
crdEstablishing_queue_latency
ALPHA
(project)
crdEstablishing_queue_latency
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuecrdEstablishing before being requested. Sampled every 60 seconds.
quantile :
quantile.
crdEstablishing_queue_latency_count
ALPHA
(project)
crdEstablishing_queue_latency_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long an item stays in workqueuecrdEstablishing before being requested. Sampled every 60 seconds.
crdEstablishing_queue_latency_sum
ALPHA
(project)
crdEstablishing_queue_latency_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuecrdEstablishing before being requested. Sampled every 60 seconds.
crdEstablishing_retries
ALPHA
(project)
crdEstablishing_retries
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of retries handled by workqueue: crdEstablishing. Sampled every 60 seconds.
crdEstablishing_unfinished_work_seconds
ALPHA
(project)
crdEstablishing_unfinished_work_seconds
GAUGE , DOUBLE , s
k8s_container
(Deprecated) How many seconds of work crdEstablishing has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases. Sampled every 60 seconds.
crdEstablishing_work_duration
ALPHA
(project)
crdEstablishing_work_duration
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuecrdEstablishing takes. Sampled every 60 seconds.
quantile :
quantile.
crdEstablishing_work_duration_count
ALPHA
(project)
crdEstablishing_work_duration_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long processing an item from workqueuecrdEstablishing takes. Sampled every 60 seconds.
crdEstablishing_work_duration_sum
ALPHA
(project)
crdEstablishing_work_duration_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuecrdEstablishing takes. Sampled every 60 seconds.
crd_autoregistration_controller_adds
ALPHA
(project)
crd_autoregistration_controller_adds
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of adds handled by workqueue: crd_autoregistration_controller. Sampled every 60 seconds.
crd_autoregistration_controller_depth
ALPHA
(project)
crd_autoregistration_controller_depth
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) Current depth of workqueue: crd_autoregistration_controller. Sampled every 60 seconds.
crd_autoregistration_controller_longest_running_processor_microseconds
ALPHA
(project)
crd_autoregistration_controller_longest_running_processor_microseconds
GAUGE , DOUBLE , us
k8s_container
(Deprecated) How many microseconds has the longest running processor for crd_autoregistration_controller been running. Sampled every 60 seconds.
crd_autoregistration_controller_queue_latency
ALPHA
(project)
crd_autoregistration_controller_queue_latency
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuecrd_autoregistration_controller before being requested. Sampled every 60 seconds.
quantile :
quantile.
crd_autoregistration_controller_queue_latency_count
ALPHA
(project)
crd_autoregistration_controller_queue_latency_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long an item stays in workqueuecrd_autoregistration_controller before being requested. Sampled every 60 seconds.
crd_autoregistration_controller_queue_latency_sum
ALPHA
(project)
crd_autoregistration_controller_queue_latency_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuecrd_autoregistration_controller before being requested. Sampled every 60 seconds.
crd_autoregistration_controller_retries
ALPHA
(project)
crd_autoregistration_controller_retries
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of retries handled by workqueue: crd_autoregistration_controller. Sampled every 60 seconds.
crd_autoregistration_controller_unfinished_work_seconds
ALPHA
(project)
crd_autoregistration_controller_unfinished_work_seconds
GAUGE , DOUBLE , s
k8s_container
(Deprecated) How many seconds of work crd_autoregistration_controller has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases. Sampled every 60 seconds.
crd_autoregistration_controller_work_duration
ALPHA
(project)
crd_autoregistration_controller_work_duration
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuecrd_autoregistration_controller takes. Sampled every 60 seconds.
quantile :
quantile.
crd_autoregistration_controller_work_duration_count
ALPHA
(project)
crd_autoregistration_controller_work_duration_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long processing an item from workqueuecrd_autoregistration_controller takes. Sampled every 60 seconds.
crd_autoregistration_controller_work_duration_sum
ALPHA
(project)
crd_autoregistration_controller_work_duration_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuecrd_autoregistration_controller takes. Sampled every 60 seconds.
crd_finalizer_adds
ALPHA
(project)
crd_finalizer_adds
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of adds handled by workqueue: crd_finalizer. Sampled every 60 seconds.
crd_finalizer_depth
ALPHA
(project)
crd_finalizer_depth
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) Current depth of workqueue: crd_finalizer. Sampled every 60 seconds.
crd_finalizer_longest_running_processor_microseconds
ALPHA
(project)
crd_finalizer_longest_running_processor_microseconds
GAUGE , DOUBLE , us
k8s_container
(Deprecated) How many microseconds has the longest running processor for crd_finalizer been running. Sampled every 60 seconds.
crd_finalizer_queue_latency_count
ALPHA
(project)
crd_finalizer_queue_latency_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long an item stays in workqueuecrd_finalizer before being requested. Sampled every 60 seconds.
crd_finalizer_queue_latency_sum
ALPHA
(project)
crd_finalizer_queue_latency_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuecrd_finalizer before being requested. Sampled every 60 seconds.
crd_finalizer_retries
ALPHA
(project)
crd_finalizer_retries
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of retries handled by workqueue: crd_finalizer. Sampled every 60 seconds.
crd_finalizer_unfinished_work_seconds
ALPHA
(project)
crd_finalizer_unfinished_work_seconds
GAUGE , DOUBLE , s
k8s_container
(Deprecated) How many seconds of work crd_finalizer has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases. Sampled every 60 seconds.
crd_finalizer_work_duration_count
ALPHA
(project)
crd_finalizer_work_duration_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long processing an item from workqueuecrd_finalizer takes. Sampled every 60 seconds.
crd_finalizer_work_duration_sum
ALPHA
(project)
crd_finalizer_work_duration_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuecrd_finalizer takes. Sampled every 60 seconds.
crd_naming_condition_controller_adds
ALPHA
(project)
crd_naming_condition_controller_adds
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of adds handled by workqueue: crd_naming_condition_controller. Sampled every 60 seconds.
crd_naming_condition_controller_depth
ALPHA
(project)
crd_naming_condition_controller_depth
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) Current depth of workqueue: crd_naming_condition_controller. Sampled every 60 seconds.
crd_naming_condition_controller_longest_running_processor_microseconds
ALPHA
(project)
crd_naming_condition_controller_longest_running_processor_microseconds
GAUGE , DOUBLE , us
k8s_container
(Deprecated) How many microseconds has the longest running processor for crd_naming_condition_controller been running. Sampled every 60 seconds.
crd_naming_condition_controller_queue_latency
ALPHA
(project)
crd_naming_condition_controller_queue_latency
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuecrd_naming_condition_controller before being requested. Sampled every 60 seconds.
quantile :
quantile.
crd_naming_condition_controller_queue_latency_count
ALPHA
(project)
crd_naming_condition_controller_queue_latency_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long an item stays in workqueuecrd_naming_condition_controller before being requested. Sampled every 60 seconds.
crd_naming_condition_controller_queue_latency_sum
ALPHA
(project)
crd_naming_condition_controller_queue_latency_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuecrd_naming_condition_controller before being requested. Sampled every 60 seconds.
crd_naming_condition_controller_retries
ALPHA
(project)
crd_naming_condition_controller_retries
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of retries handled by workqueue: crd_naming_condition_controller. Sampled every 60 seconds.
crd_naming_condition_controller_unfinished_work_seconds
ALPHA
(project)
crd_naming_condition_controller_unfinished_work_seconds
GAUGE , DOUBLE , s
k8s_container
(Deprecated) How many seconds of work crd_naming_condition_controller has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases. Sampled every 60 seconds.
crd_naming_condition_controller_work_duration
ALPHA
(project)
crd_naming_condition_controller_work_duration
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuecrd_naming_condition_controller takes. Sampled every 60 seconds.
quantile :
quantile.
crd_naming_condition_controller_work_duration_count
ALPHA
(project)
crd_naming_condition_controller_work_duration_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long processing an item from workqueuecrd_naming_condition_controller takes. Sampled every 60 seconds.
crd_naming_condition_controller_work_duration_sum
ALPHA
(project)
crd_naming_condition_controller_work_duration_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuecrd_naming_condition_controller takes. Sampled every 60 seconds.
crd_openapi_controller_adds
ALPHA
(project)
crd_openapi_controller_adds
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of adds handled by workqueue: crd_openapi_controller. Sampled every 60 seconds.
crd_openapi_controller_depth
ALPHA
(project)
crd_openapi_controller_depth
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) Current depth of workqueue: crd_openapi_controller. Sampled every 60 seconds.
crd_openapi_controller_longest_running_processor_microseconds
ALPHA
(project)
crd_openapi_controller_longest_running_processor_microseconds
GAUGE , DOUBLE , us
k8s_container
(Deprecated) How many microseconds has the longest running processor for crd_openapi_controller been running. Sampled every 60 seconds.
crd_openapi_controller_queue_latency
ALPHA
(project)
crd_openapi_controller_queue_latency
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuecrd_openapi_controller before being requested. Sampled every 60 seconds.
quantile :
quantile.
crd_openapi_controller_queue_latency_count
ALPHA
(project)
crd_openapi_controller_queue_latency_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long an item stays in workqueuecrd_openapi_controller before being requested. Sampled every 60 seconds.
crd_openapi_controller_queue_latency_sum
ALPHA
(project)
crd_openapi_controller_queue_latency_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuecrd_openapi_controller before being requested. Sampled every 60 seconds.
crd_openapi_controller_retries
ALPHA
(project)
crd_openapi_controller_retries
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of retries handled by workqueue: crd_openapi_controller. Sampled every 60 seconds.
crd_openapi_controller_unfinished_work_seconds
ALPHA
(project)
crd_openapi_controller_unfinished_work_seconds
GAUGE , DOUBLE , s
k8s_container
(Deprecated) How many seconds of work crd_openapi_controller has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases. Sampled every 60 seconds.
crd_openapi_controller_work_duration
ALPHA
(project)
crd_openapi_controller_work_duration
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuecrd_openapi_controller takes. Sampled every 60 seconds.
quantile :
quantile.
crd_openapi_controller_work_duration_count
ALPHA
(project)
crd_openapi_controller_work_duration_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long processing an item from workqueuecrd_openapi_controller takes. Sampled every 60 seconds.
crd_openapi_controller_work_duration_sum
ALPHA
(project)
crd_openapi_controller_work_duration_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuecrd_openapi_controller takes. Sampled every 60 seconds.
cronjob_controller_cronjob_job_creation_skew_duration_seconds
ALPHA
(project)
cronjob_controller_cronjob_job_creation_skew_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
Time between when a cronjob is scheduled to be run, and when the corresponding job is created. Sampled every 60 seconds.
cronjob_controller_rate_limiter_use
ALPHA
(project)
cronjob_controller_rate_limiter_use
GAUGE , DOUBLE , 1
k8s_container
A metric measuring the saturation of the rate limiter for cronjob_controller. Sampled every 60 seconds.
cronjob_controller_rate_limiter_use/gauge
ALPHA
(project)
cronjob_controller_rate_limiter_use
GAUGE , DOUBLE , 1
prometheus_target
A metric measuring the saturation of the rate limiter for cronjob_controller. Sampled every 30 seconds.
custom_resource_condition/gauge
BETA
(project)
custom_resource_condition
GAUGE , DOUBLE , 1
prometheus_target
The condition of custom resources. Sampled every 30 seconds.
group :
group.
kind :
kind.
name :
name.
status :
status.
type :
type.
version :
version.
daemon_controller_rate_limiter_use
ALPHA
(project)
daemon_controller_rate_limiter_use
GAUGE , DOUBLE , 1
k8s_container
A metric measuring the saturation of the rate limiter for daemon_controller. Sampled every 60 seconds.
daemon_controller_rate_limiter_use/gauge
ALPHA
(project)
daemon_controller_rate_limiter_use
GAUGE , DOUBLE , 1
prometheus_target
A metric measuring the saturation of the rate limiter for daemon_controller. Sampled every 30 seconds.
daemonset_adds
ALPHA
(project)
daemonset_adds
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of adds handled by workqueue: daemonset. Sampled every 60 seconds.
daemonset_depth
ALPHA
(project)
daemonset_depth
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) Current depth of workqueue: daemonset. Sampled every 60 seconds.
daemonset_longest_running_processor_microseconds
ALPHA
(project)
daemonset_longest_running_processor_microseconds
GAUGE , DOUBLE , us
k8s_container
(Deprecated) How many microseconds has the longest running processor for daemonset been running. Sampled every 60 seconds.
daemonset_queue_latency
ALPHA
(project)
daemonset_queue_latency
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuedaemonset before being requested. Sampled every 60 seconds.
quantile :
quantile.
daemonset_queue_latency_count
ALPHA
(project)
daemonset_queue_latency_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long an item stays in workqueuedaemonset before being requested. Sampled every 60 seconds.
daemonset_queue_latency_sum
ALPHA
(project)
daemonset_queue_latency_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuedaemonset before being requested. Sampled every 60 seconds.
daemonset_retries
ALPHA
(project)
daemonset_retries
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of retries handled by workqueue: daemonset. Sampled every 60 seconds.
daemonset_unfinished_work_seconds
ALPHA
(project)
daemonset_unfinished_work_seconds
GAUGE , DOUBLE , s
k8s_container
(Deprecated) How many seconds of work daemonset has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases. Sampled every 60 seconds.
daemonset_work_duration
ALPHA
(project)
daemonset_work_duration
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuedaemonset takes. Sampled every 60 seconds.
quantile :
quantile.
daemonset_work_duration_count
ALPHA
(project)
daemonset_work_duration_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long processing an item from workqueuedaemonset takes. Sampled every 60 seconds.
daemonset_work_duration_sum
ALPHA
(project)
daemonset_work_duration_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuedaemonset takes. Sampled every 60 seconds.
deployment_adds
ALPHA
(project)
deployment_adds
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of adds handled by workqueue: deployment. Sampled every 60 seconds.
deployment_controller_rate_limiter_use
ALPHA
(project)
deployment_controller_rate_limiter_use
GAUGE , DOUBLE , 1
k8s_container
A metric measuring the saturation of the rate limiter for deployment_controller. Sampled every 60 seconds.
deployment_controller_rate_limiter_use/gauge
ALPHA
(project)
deployment_controller_rate_limiter_use
GAUGE , DOUBLE , 1
prometheus_target
A metric measuring the saturation of the rate limiter for deployment_controller. Sampled every 30 seconds.
deployment_depth
ALPHA
(project)
deployment_depth
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) Current depth of workqueue: deployment. Sampled every 60 seconds.
deployment_longest_running_processor_microseconds
ALPHA
(project)
deployment_longest_running_processor_microseconds
GAUGE , DOUBLE , us
k8s_container
(Deprecated) How many microseconds has the longest running processor for deployment been running. Sampled every 60 seconds.
deployment_queue_latency
ALPHA
(project)
deployment_queue_latency
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuedeployment before being requested. Sampled every 60 seconds.
quantile :
quantile.
deployment_queue_latency_count
ALPHA
(project)
deployment_queue_latency_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long an item stays in workqueuedeployment before being requested. Sampled every 60 seconds.
deployment_queue_latency_sum
ALPHA
(project)
deployment_queue_latency_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuedeployment before being requested. Sampled every 60 seconds.
deployment_retries
ALPHA
(project)
deployment_retries
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of retries handled by workqueue: deployment. Sampled every 60 seconds.
deployment_unfinished_work_seconds
ALPHA
(project)
deployment_unfinished_work_seconds
GAUGE , DOUBLE , s
k8s_container
(Deprecated) How many seconds of work deployment has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases. Sampled every 60 seconds.
deployment_work_duration
ALPHA
(project)
deployment_work_duration
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuedeployment takes. Sampled every 60 seconds.
quantile :
quantile.
deployment_work_duration_count
ALPHA
(project)
deployment_work_duration_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long processing an item from workqueuedeployment takes. Sampled every 60 seconds.
deployment_work_duration_sum
ALPHA
(project)
deployment_work_duration_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuedeployment takes. Sampled every 60 seconds.
disruption_adds
ALPHA
(project)
disruption_adds
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of adds handled by workqueue: disruption. Sampled every 60 seconds.
disruption_depth
ALPHA
(project)
disruption_depth
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) Current depth of workqueue: disruption. Sampled every 60 seconds.
disruption_longest_running_processor_microseconds
ALPHA
(project)
disruption_longest_running_processor_microseconds
GAUGE , DOUBLE , us
k8s_container
(Deprecated) How many microseconds has the longest running processor for disruption been running. Sampled every 60 seconds.
disruption_queue_latency
ALPHA
(project)
disruption_queue_latency
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuedisruption before being requested. Sampled every 60 seconds.
quantile :
quantile.
disruption_queue_latency_count
ALPHA
(project)
disruption_queue_latency_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long an item stays in workqueuedisruption before being requested. Sampled every 60 seconds.
disruption_queue_latency_sum
ALPHA
(project)
disruption_queue_latency_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuedisruption before being requested. Sampled every 60 seconds.
disruption_recheck_adds
ALPHA
(project)
disruption_recheck_adds
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of adds handled by workqueue: disruption_recheck. Sampled every 60 seconds.
disruption_recheck_depth
ALPHA
(project)
disruption_recheck_depth
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) Current depth of workqueue: disruption_recheck. Sampled every 60 seconds.
disruption_recheck_longest_running_processor_microseconds
ALPHA
(project)
disruption_recheck_longest_running_processor_microseconds
GAUGE , DOUBLE , us
k8s_container
(Deprecated) How many microseconds has the longest running processor for disruption_recheck been running. Sampled every 60 seconds.
disruption_recheck_queue_latency_count
ALPHA
(project)
disruption_recheck_queue_latency_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long an item stays in workqueuedisruption_recheck before being requested. Sampled every 60 seconds.
disruption_recheck_queue_latency_sum
ALPHA
(project)
disruption_recheck_queue_latency_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuedisruption_recheck before being requested. Sampled every 60 seconds.
disruption_recheck_retries
ALPHA
(project)
disruption_recheck_retries
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of retries handled by workqueue: disruption_recheck. Sampled every 60 seconds.
disruption_recheck_unfinished_work_seconds
ALPHA
(project)
disruption_recheck_unfinished_work_seconds
GAUGE , DOUBLE , s
k8s_container
(Deprecated) How many seconds of work disruption_recheck has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases. Sampled every 60 seconds.
disruption_recheck_work_duration_count
ALPHA
(project)
disruption_recheck_work_duration_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long processing an item from workqueuedisruption_recheck takes. Sampled every 60 seconds.
disruption_recheck_work_duration_sum
ALPHA
(project)
disruption_recheck_work_duration_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuedisruption_recheck takes. Sampled every 60 seconds.
disruption_retries
ALPHA
(project)
disruption_retries
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of retries handled by workqueue: disruption. Sampled every 60 seconds.
disruption_unfinished_work_seconds
ALPHA
(project)
disruption_unfinished_work_seconds
GAUGE , DOUBLE , s
k8s_container
(Deprecated) How many seconds of work disruption has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases. Sampled every 60 seconds.
disruption_work_duration
ALPHA
(project)
disruption_work_duration
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuedisruption takes. Sampled every 60 seconds.
quantile :
quantile.
disruption_work_duration_count
ALPHA
(project)
disruption_work_duration_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long processing an item from workqueuedisruption takes. Sampled every 60 seconds.
disruption_work_duration_sum
ALPHA
(project)
disruption_work_duration_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuedisruption takes. Sampled every 60 seconds.
endpoint_adds
ALPHA
(project)
endpoint_adds
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of adds handled by workqueue: endpoint. Sampled every 60 seconds.
endpoint_controller_rate_limiter_use
ALPHA
(project)
endpoint_controller_rate_limiter_use
GAUGE , DOUBLE , 1
k8s_container
A metric measuring the saturation of the rate limiter for endpoint_controller. Sampled every 60 seconds.
endpoint_controller_rate_limiter_use/gauge
ALPHA
(project)
endpoint_controller_rate_limiter_use
GAUGE , DOUBLE , 1
prometheus_target
A metric measuring the saturation of the rate limiter for endpoint_controller. Sampled every 30 seconds.
endpoint_depth
ALPHA
(project)
endpoint_depth
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) Current depth of workqueue: endpoint. Sampled every 60 seconds.
endpoint_longest_running_processor_microseconds
ALPHA
(project)
endpoint_longest_running_processor_microseconds
GAUGE , DOUBLE , us
k8s_container
(Deprecated) How many microseconds has the longest running processor for endpoint been running. Sampled every 60 seconds.
endpoint_queue_latency
ALPHA
(project)
endpoint_queue_latency
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueueendpoint before being requested. Sampled every 60 seconds.
quantile :
quantile.
endpoint_queue_latency_count
ALPHA
(project)
endpoint_queue_latency_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long an item stays in workqueueendpoint before being requested. Sampled every 60 seconds.
endpoint_queue_latency_sum
ALPHA
(project)
endpoint_queue_latency_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueueendpoint before being requested. Sampled every 60 seconds.
endpoint_retries
ALPHA
(project)
endpoint_retries
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of retries handled by workqueue: endpoint. Sampled every 60 seconds.
endpoint_slice_controller_changes
ALPHA
(project)
endpoint_slice_controller_changes
CUMULATIVE , DOUBLE , 1
k8s_container
Number of EndpointSlice changes. Sampled every 60 seconds.
operation :
operation.
endpoint_slice_controller_changes/counter
ALPHA
(project)
endpoint_slice_controller_changes
CUMULATIVE , DOUBLE , 1
prometheus_target
Number of EndpointSlice changes. Sampled every 30 seconds.
operation :
operation.
endpoint_slice_controller_desired_endpoint_slices
ALPHA
(project)
endpoint_slice_controller_desired_endpoint_slices
GAUGE , DOUBLE , 1
k8s_container
Number of EndpointSlices that would exist with perfect endpoint allocation. Sampled every 60 seconds.
endpoint_slice_controller_desired_endpoint_slices/gauge
ALPHA
(project)
endpoint_slice_controller_desired_endpoint_slices
GAUGE , DOUBLE , 1
prometheus_target
Number of EndpointSlices that would exist with perfect endpoint allocation. Sampled every 30 seconds.
endpoint_slice_controller_endpoints_added_per_sync
ALPHA
(project)
endpoint_slice_controller_endpoints_added_per_sync
CUMULATIVE , DISTRIBUTION , 1
k8s_container
Number of endpoints added on each Service sync. Sampled every 60 seconds.
endpoint_slice_controller_endpoints_added_per_sync/histogram
ALPHA
(project)
endpoint_slice_controller_endpoints_added_per_sync
CUMULATIVE , DISTRIBUTION , 1
prometheus_target
Number of endpoints added on each Service sync. Sampled every 30 seconds.
endpoint_slice_controller_endpoints_desired
ALPHA
(project)
endpoint_slice_controller_endpoints_desired
GAUGE , DOUBLE , 1
k8s_container
Number of endpoints desired. Sampled every 60 seconds.
endpoint_slice_controller_endpoints_desired/gauge
ALPHA
(project)
endpoint_slice_controller_endpoints_desired
GAUGE , DOUBLE , 1
prometheus_target
Number of endpoints desired. Sampled every 30 seconds.
endpoint_slice_controller_endpoints_removed_per_sync
ALPHA
(project)
endpoint_slice_controller_endpoints_removed_per_sync
CUMULATIVE , DISTRIBUTION , 1
k8s_container
Number of endpoints removed on each Service sync. Sampled every 60 seconds.
endpoint_slice_controller_endpoints_removed_per_sync/histogram
ALPHA
(project)
endpoint_slice_controller_endpoints_removed_per_sync
CUMULATIVE , DISTRIBUTION , 1
prometheus_target
Number of endpoints removed on each Service sync. Sampled every 30 seconds.
endpoint_slice_controller_endpointslices_changed_per_sync
ALPHA
(project)
endpoint_slice_controller_endpointslices_changed_per_sync
CUMULATIVE , DISTRIBUTION , 1
k8s_container
Number of EndpointSlices changed on each Service sync. Sampled every 60 seconds.
topology :
topology.
endpoint_slice_controller_num_endpoint_slices
ALPHA
(project)
endpoint_slice_controller_num_endpoint_slices
GAUGE , DOUBLE , 1
k8s_container
Number of EndpointSlices. Sampled every 60 seconds.
endpoint_slice_controller_num_endpoint_slices/gauge
ALPHA
(project)
endpoint_slice_controller_num_endpoint_slices
GAUGE , DOUBLE , 1
prometheus_target
Number of EndpointSlices. Sampled every 30 seconds.
endpoint_slice_controller_rate_limiter_use
ALPHA
(project)
endpoint_slice_controller_rate_limiter_use
GAUGE , DOUBLE , 1
k8s_container
A metric measuring the saturation of the rate limiter for endpoint_slice_controller. Sampled every 60 seconds.
endpoint_slice_controller_rate_limiter_use/gauge
ALPHA
(project)
endpoint_slice_controller_rate_limiter_use
GAUGE , DOUBLE , 1
prometheus_target
A metric measuring the saturation of the rate limiter for endpoint_slice_controller. Sampled every 30 seconds.
endpoint_slice_controller_syncs
ALPHA
(project)
endpoint_slice_controller_syncs
CUMULATIVE , DOUBLE , 1
k8s_container
Number of EndpointSlice syncs. Sampled every 60 seconds.
result :
result.
endpoint_slice_mirroring_controller_endpoints_sync_duration
ALPHA
(project)
endpoint_slice_mirroring_controller_endpoints_sync_duration
CUMULATIVE , DISTRIBUTION , 1
k8s_container
Duration of syncEndpoints() in seconds. Sampled every 60 seconds.
endpoint_slice_mirroring_controller_rate_limiter_use
ALPHA
(project)
endpoint_slice_mirroring_controller_rate_limiter_use
GAUGE , DOUBLE , 1
k8s_container
A metric measuring the saturation of the rate limiter for endpoint_slice_mirroring_controller. Sampled every 60 seconds.
endpoint_slice_mirroring_controller_rate_limiter_use/gauge
ALPHA
(project)
endpoint_slice_mirroring_controller_rate_limiter_use
GAUGE , DOUBLE , 1
prometheus_target
A metric measuring the saturation of the rate limiter for endpoint_slice_mirroring_controller. Sampled every 30 seconds.
endpoint_unfinished_work_seconds
ALPHA
(project)
endpoint_unfinished_work_seconds
GAUGE , DOUBLE , s
k8s_container
(Deprecated) How many seconds of work endpoint has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases. Sampled every 60 seconds.
endpoint_work_duration
ALPHA
(project)
endpoint_work_duration
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueueendpoint takes. Sampled every 60 seconds.
quantile :
quantile.
endpoint_work_duration_count
ALPHA
(project)
endpoint_work_duration_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long processing an item from workqueueendpoint takes. Sampled every 60 seconds.
endpoint_work_duration_sum
ALPHA
(project)
endpoint_work_duration_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueueendpoint takes. Sampled every 60 seconds.
ephemeral_volume_controller_create_failures_total
ALPHA
(project)
ephemeral_volume_controller_create_failures_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of PersistenVolumeClaims creation requests. Sampled every 60 seconds.
ephemeral_volume_controller_create_failures_total/counter
ALPHA
(project)
ephemeral_volume_controller_create_failures_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Number of PersistenVolumeClaims creation requests. Sampled every 30 seconds.
ephemeral_volume_controller_create_total
ALPHA
(project)
ephemeral_volume_controller_create_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of PersistenVolumeClaims creation requests. Sampled every 60 seconds.
esxi_cluster_size
ALPHA
(project)
esxi_cluster_size
GAUGE , DOUBLE , 1
k8s_pod
Num of hosts in the esxi cluster. Sampled every 300 seconds.
esxi_config_info
ALPHA
(project)
esxi_config_info
GAUGE , DOUBLE , 1
k8s_pod
Config Information for the esxi cluster. Sampled every 300 seconds.
drs_enabled :
drs_enabled.
ha_enabled :
ha_enabled.
vsan_enabled :
vsan_enabled.
esxi_cpu_cores_total
ALPHA
(project)
esxi_cpu_cores_total
GAUGE , DOUBLE , 1
k8s_pod
Esxi Cluster total CPU cores. Sampled every 300 seconds.
esxi_evc_info
ALPHA
(project)
esxi_evc_info
GAUGE , DOUBLE , 1
k8s_pod
EVC mode if enabled in Esxi cluster. Sampled every 60 seconds.
mode :
mode.
esxi_host_info
ALPHA
(project)
esxi_host_info
GAUGE , DOUBLE , 1
k8s_pod
Version of Esxi Host in esxi cluster. Sampled every 300 seconds.
build :
build.
version :
version.
esxi_memory_total_bytes
ALPHA
(project)
esxi_memory_total_bytes
GAUGE , DOUBLE , By
k8s_pod
Esxi Cluster total memory in bytes. Sampled every 300 seconds.
etcd_bookmark_counts
ALPHA
(project)
etcd_bookmark_counts
GAUGE , DOUBLE , 1
k8s_container
Number of etcd bookmarks (progress notify events) split by kind. Sampled every 60 seconds.
resource :
resource.
etcd_cluster_version
ALPHA
(project)
etcd_cluster_version
GAUGE , DOUBLE , 1
k8s_container
Which version is running. 1 for 'cluster_version' label with current cluster version. Sampled every 60 seconds.
cluster_version :
cluster_version.
etcd_cluster_version/gauge
ALPHA
(project)
etcd_cluster_version
GAUGE , DOUBLE , 1
prometheus_target
Which version is running. 1 for 'cluster_version' label with current cluster version. Sampled every 30 seconds.
cluster_version :
cluster_version.
etcd_db_total_size_in_bytes
ALPHA
(project)
etcd_db_total_size_in_bytes
GAUGE , DOUBLE , By
k8s_container
Total size of the etcd database file physically allocated in bytes. Sampled every 60 seconds.
endpoint :
endpoint.
etcd_debugging_auth_revision
ALPHA
(project)
etcd_debugging_auth_revision
GAUGE , DOUBLE , 1
k8s_container
The current revision of auth store. Sampled every 60 seconds.
etcd_debugging_auth_revision/gauge
ALPHA
(project)
etcd_debugging_auth_revision
GAUGE , DOUBLE , 1
prometheus_target
The current revision of auth store. Sampled every 30 seconds.
etcd_debugging_disk_backend_commit_rebalance_duration_seconds
ALPHA
(project)
etcd_debugging_disk_backend_commit_rebalance_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
The latency distributions of commit.rebalance called by bboltdb backend. Sampled every 60 seconds.
etcd_debugging_disk_backend_commit_rebalance_duration_seconds/histogram
ALPHA
(project)
etcd_debugging_disk_backend_commit_rebalance_duration_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
The latency distributions of commit.rebalance called by bboltdb backend. Sampled every 30 seconds.
etcd_debugging_disk_backend_commit_spill_duration_seconds
ALPHA
(project)
etcd_debugging_disk_backend_commit_spill_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
The latency distributions of commit.spill called by bboltdb backend. Sampled every 60 seconds.
etcd_debugging_disk_backend_commit_spill_duration_seconds/histogram
ALPHA
(project)
etcd_debugging_disk_backend_commit_spill_duration_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
The latency distributions of commit.spill called by bboltdb backend. Sampled every 30 seconds.
etcd_debugging_disk_backend_commit_write_duration_seconds
ALPHA
(project)
etcd_debugging_disk_backend_commit_write_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
The latency distributions of commit.write called by bboltdb backend. Sampled every 60 seconds.
etcd_debugging_disk_backend_commit_write_duration_seconds/histogram
ALPHA
(project)
etcd_debugging_disk_backend_commit_write_duration_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
The latency distributions of commit.write called by bboltdb backend. Sampled every 30 seconds.
etcd_debugging_lease_granted_total
ALPHA
(project)
etcd_debugging_lease_granted_total
CUMULATIVE , DOUBLE , 1
k8s_container
The total number of granted leases. Sampled every 60 seconds.
etcd_debugging_lease_granted_total/counter
ALPHA
(project)
etcd_debugging_lease_granted_total
CUMULATIVE , DOUBLE , 1
prometheus_target
The total number of granted leases. Sampled every 30 seconds.
etcd_debugging_lease_renewed_total
ALPHA
(project)
etcd_debugging_lease_renewed_total
CUMULATIVE , DOUBLE , 1
k8s_container
The number of renewed leases seen by the leader. Sampled every 60 seconds.
etcd_debugging_lease_renewed_total/counter
ALPHA
(project)
etcd_debugging_lease_renewed_total
CUMULATIVE , DOUBLE , 1
prometheus_target
The number of renewed leases seen by the leader. Sampled every 30 seconds.
etcd_debugging_lease_revoked_total
ALPHA
(project)
etcd_debugging_lease_revoked_total
CUMULATIVE , DOUBLE , 1
k8s_container
The total number of revoked leases. Sampled every 60 seconds.
etcd_debugging_lease_revoked_total/counter
ALPHA
(project)
etcd_debugging_lease_revoked_total
CUMULATIVE , DOUBLE , 1
prometheus_target
The total number of revoked leases. Sampled every 30 seconds.
etcd_debugging_lease_ttl_total
ALPHA
(project)
etcd_debugging_lease_ttl_total
CUMULATIVE , DISTRIBUTION , 1
k8s_container
Bucketed histogram of lease TTLs. Sampled every 60 seconds.
etcd_debugging_lease_ttl_total/histogram
ALPHA
(project)
etcd_debugging_lease_ttl_total
CUMULATIVE , DISTRIBUTION , 1
prometheus_target
Bucketed histogram of lease TTLs. Sampled every 30 seconds.
etcd_debugging_mvcc_compact_revision
ALPHA
(project)
etcd_debugging_mvcc_compact_revision
GAUGE , DOUBLE , 1
k8s_container
The revision of the last compaction in store. Sampled every 60 seconds.
etcd_debugging_mvcc_compact_revision/gauge
ALPHA
(project)
etcd_debugging_mvcc_compact_revision
GAUGE , DOUBLE , 1
prometheus_target
The revision of the last compaction in store. Sampled every 30 seconds.
etcd_debugging_mvcc_current_revision
ALPHA
(project)
etcd_debugging_mvcc_current_revision
GAUGE , DOUBLE , 1
k8s_container
The current revision of store. Sampled every 60 seconds.
etcd_debugging_mvcc_current_revision/gauge
ALPHA
(project)
etcd_debugging_mvcc_current_revision
GAUGE , DOUBLE , 1
prometheus_target
The current revision of store. Sampled every 30 seconds.
etcd_debugging_mvcc_db_compaction_keys_total
ALPHA
(project)
etcd_debugging_mvcc_db_compaction_keys_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of db keys compacted. Sampled every 60 seconds.
etcd_debugging_mvcc_db_compaction_keys_total/counter
ALPHA
(project)
etcd_debugging_mvcc_db_compaction_keys_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Total number of db keys compacted. Sampled every 30 seconds.
etcd_debugging_mvcc_db_compaction_pause_duration_milliseconds
ALPHA
(project)
etcd_debugging_mvcc_db_compaction_pause_duration_milliseconds
CUMULATIVE , DISTRIBUTION , 1
k8s_container
Bucketed histogram of db compaction pause duration. Sampled every 60 seconds.
etcd_debugging_mvcc_db_compaction_pause_duration_milliseconds/histogram
ALPHA
(project)
etcd_debugging_mvcc_db_compaction_pause_duration_milliseconds
CUMULATIVE , DISTRIBUTION , 1
prometheus_target
Bucketed histogram of db compaction pause duration. Sampled every 30 seconds.
etcd_debugging_mvcc_db_compaction_total_duration_milliseconds
ALPHA
(project)
etcd_debugging_mvcc_db_compaction_total_duration_milliseconds
CUMULATIVE , DISTRIBUTION , 1
k8s_container
Bucketed histogram of db compaction total duration. Sampled every 60 seconds.
etcd_debugging_mvcc_db_compaction_total_duration_milliseconds/histogram
ALPHA
(project)
etcd_debugging_mvcc_db_compaction_total_duration_milliseconds
CUMULATIVE , DISTRIBUTION , 1
prometheus_target
Bucketed histogram of db compaction total duration. Sampled every 30 seconds.
etcd_debugging_mvcc_db_total_size_in_bytes
ALPHA
(project)
etcd_debugging_mvcc_db_total_size_in_bytes
GAUGE , DOUBLE , By
k8s_container
Total size of the underlying database physically allocated in bytes. Sampled every 60 seconds.
etcd_debugging_mvcc_db_total_size_in_bytes/gauge
ALPHA
(project)
etcd_debugging_mvcc_db_total_size_in_bytes
GAUGE , DOUBLE , By
prometheus_target
Total size of the underlying database physically allocated in bytes. Sampled every 30 seconds.
etcd_debugging_mvcc_delete_total
ALPHA
(project)
etcd_debugging_mvcc_delete_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of deletes seen by this member. Sampled every 60 seconds.
etcd_debugging_mvcc_delete_total/counter
ALPHA
(project)
etcd_debugging_mvcc_delete_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Total number of deletes seen by this member. Sampled every 30 seconds.
etcd_debugging_mvcc_events_total
ALPHA
(project)
etcd_debugging_mvcc_events_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of events sent by this member. Sampled every 60 seconds.
etcd_debugging_mvcc_events_total/counter
ALPHA
(project)
etcd_debugging_mvcc_events_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Total number of events sent by this member. Sampled every 30 seconds.
etcd_debugging_mvcc_index_compaction_pause_duration_milliseconds
ALPHA
(project)
etcd_debugging_mvcc_index_compaction_pause_duration_milliseconds
CUMULATIVE , DISTRIBUTION , 1
k8s_container
Bucketed histogram of index compaction pause duration. Sampled every 60 seconds.
etcd_debugging_mvcc_index_compaction_pause_duration_milliseconds/histogram
ALPHA
(project)
etcd_debugging_mvcc_index_compaction_pause_duration_milliseconds
CUMULATIVE , DISTRIBUTION , 1
prometheus_target
Bucketed histogram of index compaction pause duration. Sampled every 30 seconds.
etcd_debugging_mvcc_keys_total
ALPHA
(project)
etcd_debugging_mvcc_keys_total
GAUGE , DOUBLE , 1
k8s_container
Total number of keys. Sampled every 60 seconds.
etcd_debugging_mvcc_keys_total/gauge
ALPHA
(project)
etcd_debugging_mvcc_keys_total
GAUGE , DOUBLE , 1
prometheus_target
Total number of keys. Sampled every 30 seconds.
etcd_debugging_mvcc_pending_events_total
ALPHA
(project)
etcd_debugging_mvcc_pending_events_total
GAUGE , DOUBLE , 1
k8s_container
Total number of pending events to be sent. Sampled every 60 seconds.
etcd_debugging_mvcc_pending_events_total/gauge
ALPHA
(project)
etcd_debugging_mvcc_pending_events_total
GAUGE , DOUBLE , 1
prometheus_target
Total number of pending events to be sent. Sampled every 30 seconds.
etcd_debugging_mvcc_put_total
ALPHA
(project)
etcd_debugging_mvcc_put_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of puts seen by this member. Sampled every 60 seconds.
etcd_debugging_mvcc_put_total/counter
ALPHA
(project)
etcd_debugging_mvcc_put_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Total number of puts seen by this member. Sampled every 30 seconds.
etcd_debugging_mvcc_range_total
ALPHA
(project)
etcd_debugging_mvcc_range_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of ranges seen by this member. Sampled every 60 seconds.
etcd_debugging_mvcc_range_total/counter
ALPHA
(project)
etcd_debugging_mvcc_range_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Total number of ranges seen by this member. Sampled every 30 seconds.
etcd_debugging_mvcc_slow_watcher_total
ALPHA
(project)
etcd_debugging_mvcc_slow_watcher_total
GAUGE , DOUBLE , 1
k8s_container
Total number of unsynced slow watchers. Sampled every 60 seconds.
etcd_debugging_mvcc_slow_watcher_total/gauge
ALPHA
(project)
etcd_debugging_mvcc_slow_watcher_total
GAUGE , DOUBLE , 1
prometheus_target
Total number of unsynced slow watchers. Sampled every 30 seconds.
etcd_debugging_mvcc_total_put_size_in_bytes
ALPHA
(project)
etcd_debugging_mvcc_total_put_size_in_bytes
GAUGE , DOUBLE , By
k8s_container
The total size of put kv pairs seen by this member. Sampled every 60 seconds.
etcd_debugging_mvcc_total_put_size_in_bytes/gauge
ALPHA
(project)
etcd_debugging_mvcc_total_put_size_in_bytes
GAUGE , DOUBLE , By
prometheus_target
The total size of put kv pairs seen by this member. Sampled every 30 seconds.
etcd_debugging_mvcc_txn_total
ALPHA
(project)
etcd_debugging_mvcc_txn_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of txns seen by this member. Sampled every 60 seconds.
etcd_debugging_mvcc_txn_total/counter
ALPHA
(project)
etcd_debugging_mvcc_txn_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Total number of txns seen by this member. Sampled every 30 seconds.
etcd_debugging_mvcc_watch_stream_total
ALPHA
(project)
etcd_debugging_mvcc_watch_stream_total
GAUGE , DOUBLE , 1
k8s_container
Total number of watch streams. Sampled every 60 seconds.
etcd_debugging_mvcc_watch_stream_total/gauge
ALPHA
(project)
etcd_debugging_mvcc_watch_stream_total
GAUGE , DOUBLE , 1
prometheus_target
Total number of watch streams. Sampled every 30 seconds.
etcd_debugging_mvcc_watcher_total
ALPHA
(project)
etcd_debugging_mvcc_watcher_total
GAUGE , DOUBLE , 1
k8s_container
Total number of watchers. Sampled every 60 seconds.
etcd_debugging_mvcc_watcher_total/gauge
ALPHA
(project)
etcd_debugging_mvcc_watcher_total
GAUGE , DOUBLE , 1
prometheus_target
Total number of watchers. Sampled every 30 seconds.
etcd_debugging_server_lease_expired_total
ALPHA
(project)
etcd_debugging_server_lease_expired_total
CUMULATIVE , DOUBLE , 1
k8s_container
The total number of expired leases. Sampled every 60 seconds.
etcd_debugging_server_lease_expired_total/counter
ALPHA
(project)
etcd_debugging_server_lease_expired_total
CUMULATIVE , DOUBLE , 1
prometheus_target
The total number of expired leases. Sampled every 30 seconds.
etcd_debugging_snap_save_marshalling_duration_seconds
ALPHA
(project)
etcd_debugging_snap_save_marshalling_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
The marshalling cost distributions of save called by snapshot. Sampled every 60 seconds.
etcd_debugging_snap_save_marshalling_duration_seconds/histogram
ALPHA
(project)
etcd_debugging_snap_save_marshalling_duration_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
The marshalling cost distributions of save called by snapshot. Sampled every 30 seconds.
etcd_debugging_snap_save_total_duration_seconds
ALPHA
(project)
etcd_debugging_snap_save_total_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
The total latency distributions of save called by snapshot. Sampled every 60 seconds.
etcd_debugging_snap_save_total_duration_seconds/histogram
ALPHA
(project)
etcd_debugging_snap_save_total_duration_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
The total latency distributions of save called by snapshot. Sampled every 30 seconds.
etcd_debugging_store_expires_total
ALPHA
(project)
etcd_debugging_store_expires_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of expired keys. Sampled every 60 seconds.
etcd_debugging_store_expires_total/counter
ALPHA
(project)
etcd_debugging_store_expires_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Total number of expired keys. Sampled every 30 seconds.
etcd_debugging_store_reads_total
ALPHA
(project)
etcd_debugging_store_reads_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of reads action by (get/getRecursive), local to this member. Sampled every 60 seconds.
action :
action.
etcd_debugging_store_reads_total/counter
ALPHA
(project)
etcd_debugging_store_reads_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Total number of reads action by (get/getRecursive), local to this member. Sampled every 30 seconds.
action :
action.
etcd_debugging_store_watch_requests_total
ALPHA
(project)
etcd_debugging_store_watch_requests_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of incoming watch requests (new or reestablished). Sampled every 60 seconds.
etcd_debugging_store_watch_requests_total/counter
ALPHA
(project)
etcd_debugging_store_watch_requests_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Total number of incoming watch requests (new or reestablished). Sampled every 30 seconds.
etcd_debugging_store_watchers
ALPHA
(project)
etcd_debugging_store_watchers
GAUGE , DOUBLE , 1
k8s_container
Count of currently active watchers. Sampled every 60 seconds.
etcd_debugging_store_watchers/gauge
ALPHA
(project)
etcd_debugging_store_watchers
GAUGE , DOUBLE , 1
prometheus_target
Count of currently active watchers. Sampled every 30 seconds.
etcd_debugging_store_writes_total
ALPHA
(project)
etcd_debugging_store_writes_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of writes (e.g. set/compareAndDelete) seen by this member. Sampled every 60 seconds.
action :
action.
etcd_debugging_store_writes_total/counter
ALPHA
(project)
etcd_debugging_store_writes_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Total number of writes (e.g. set/compareAndDelete) seen by this member. Sampled every 30 seconds.
action :
action.
etcd_disk_backend_commit_duration_seconds
ALPHA
(project)
etcd_disk_backend_commit_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
The latency distributions of commit called by backend. Sampled every 60 seconds.
etcd_disk_backend_commit_duration_seconds/histogram
ALPHA
(project)
etcd_disk_backend_commit_duration_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
The latency distributions of commit called by backend. Sampled every 30 seconds.
etcd_disk_backend_defrag_duration_seconds
ALPHA
(project)
etcd_disk_backend_defrag_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
The latency distribution of backend defragmentation. Sampled every 60 seconds.
etcd_disk_backend_defrag_duration_seconds/histogram
ALPHA
(project)
etcd_disk_backend_defrag_duration_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
The latency distribution of backend defragmentation. Sampled every 30 seconds.
etcd_disk_backend_snapshot_duration_seconds
ALPHA
(project)
etcd_disk_backend_snapshot_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
The latency distribution of backend snapshots. Sampled every 60 seconds.
etcd_disk_backend_snapshot_duration_seconds/histogram
ALPHA
(project)
etcd_disk_backend_snapshot_duration_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
The latency distribution of backend snapshots. Sampled every 30 seconds.
etcd_disk_wal_fsync_duration_seconds
ALPHA
(project)
etcd_disk_wal_fsync_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
The latency distributions of fsync called by WAL. Sampled every 60 seconds.
etcd_disk_wal_fsync_duration_seconds/histogram
ALPHA
(project)
etcd_disk_wal_fsync_duration_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
The latency distributions of fsync called by WAL. Sampled every 30 seconds.
etcd_disk_wal_write_bytes_total
ALPHA
(project)
etcd_disk_wal_write_bytes_total
GAUGE , DOUBLE , By
k8s_container
Total number of bytes written in WAL. Sampled every 60 seconds.
etcd_disk_wal_write_bytes_total/gauge
ALPHA
(project)
etcd_disk_wal_write_bytes_total
GAUGE , DOUBLE , By
prometheus_target
Total number of bytes written in WAL. Sampled every 30 seconds.
etcd_grpc_proxy_cache_hits_total
ALPHA
(project)
etcd_grpc_proxy_cache_hits_total
GAUGE , DOUBLE , 1
k8s_container
Total number of cache hits. Sampled every 60 seconds.
etcd_grpc_proxy_cache_hits_total/gauge
ALPHA
(project)
etcd_grpc_proxy_cache_hits_total
GAUGE , DOUBLE , 1
prometheus_target
Total number of cache hits. Sampled every 30 seconds.
etcd_grpc_proxy_cache_keys_total
ALPHA
(project)
etcd_grpc_proxy_cache_keys_total
GAUGE , DOUBLE , 1
k8s_container
Total number of keys/ranges cached. Sampled every 60 seconds.
etcd_grpc_proxy_cache_keys_total/gauge
ALPHA
(project)
etcd_grpc_proxy_cache_keys_total
GAUGE , DOUBLE , 1
prometheus_target
Total number of keys/ranges cached. Sampled every 30 seconds.
etcd_grpc_proxy_cache_misses_total
ALPHA
(project)
etcd_grpc_proxy_cache_misses_total
GAUGE , DOUBLE , 1
k8s_container
Total number of cache misses. Sampled every 60 seconds.
etcd_grpc_proxy_cache_misses_total/gauge
ALPHA
(project)
etcd_grpc_proxy_cache_misses_total
GAUGE , DOUBLE , 1
prometheus_target
Total number of cache misses. Sampled every 30 seconds.
etcd_grpc_proxy_events_coalescing_total
ALPHA
(project)
etcd_grpc_proxy_events_coalescing_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of events coalescing. Sampled every 60 seconds.
etcd_grpc_proxy_events_coalescing_total/counter
ALPHA
(project)
etcd_grpc_proxy_events_coalescing_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Total number of events coalescing. Sampled every 30 seconds.
etcd_grpc_proxy_watchers_coalescing_total
ALPHA
(project)
etcd_grpc_proxy_watchers_coalescing_total
GAUGE , DOUBLE , 1
k8s_container
Total number of current watchers coalescing. Sampled every 60 seconds.
etcd_grpc_proxy_watchers_coalescing_total/gauge
ALPHA
(project)
etcd_grpc_proxy_watchers_coalescing_total
GAUGE , DOUBLE , 1
prometheus_target
Total number of current watchers coalescing. Sampled every 30 seconds.
etcd_helper_cache_entry_count
ALPHA
(project)
etcd_helper_cache_entry_count
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Counter of etcd helper cache entries. This can be different from etcd_helper_cache_miss_count because two concurrent threads can miss the cache and generate the same entry twice. Sampled every 60 seconds.
etcd_helper_cache_entry_total
ALPHA
(project)
etcd_helper_cache_entry_total
CUMULATIVE , DOUBLE , 1
k8s_container
Counter of etcd helper cache entries. This can be different from etcd_helper_cache_miss_count because two concurrent threads can miss the cache and generate the same entry twice. Sampled every 60 seconds.
etcd_helper_cache_hit_count
ALPHA
(project)
etcd_helper_cache_hit_count
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Counter of etcd helper cache hits. Sampled every 60 seconds.
etcd_helper_cache_hit_total
ALPHA
(project)
etcd_helper_cache_hit_total
CUMULATIVE , DOUBLE , 1
k8s_container
Counter of etcd helper cache hits. Sampled every 60 seconds.
etcd_helper_cache_miss_count
ALPHA
(project)
etcd_helper_cache_miss_count
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Counter of etcd helper cache miss. Sampled every 60 seconds.
etcd_helper_cache_miss_total
ALPHA
(project)
etcd_helper_cache_miss_total
CUMULATIVE , DOUBLE , 1
k8s_container
Counter of etcd helper cache miss. Sampled every 60 seconds.
etcd_lease_object_counts
ALPHA
(project)
etcd_lease_object_counts
CUMULATIVE , DISTRIBUTION , 1
k8s_container
Number of objects attached to a single etcd lease. Sampled every 60 seconds.
etcd_mvcc_db_open_read_transactions
ALPHA
(project)
etcd_mvcc_db_open_read_transactions
GAUGE , DOUBLE , 1
k8s_container
The number of currently open read transactions. Sampled every 60 seconds.
etcd_mvcc_db_open_read_transactions/gauge
ALPHA
(project)
etcd_mvcc_db_open_read_transactions
GAUGE , DOUBLE , 1
prometheus_target
The number of currently open read transactions. Sampled every 30 seconds.
etcd_mvcc_db_total_size_in_bytes
ALPHA
(project)
etcd_mvcc_db_total_size_in_bytes
GAUGE , DOUBLE , By
k8s_container
Total size of the underlying database physically allocated in bytes. Sampled every 60 seconds.
etcd_mvcc_db_total_size_in_bytes/gauge
ALPHA
(project)
etcd_mvcc_db_total_size_in_bytes
GAUGE , DOUBLE , By
prometheus_target
Total size of the underlying database physically allocated in bytes. Sampled every 30 seconds.
etcd_mvcc_db_total_size_in_use_in_bytes
ALPHA
(project)
etcd_mvcc_db_total_size_in_use_in_bytes
GAUGE , DOUBLE , By
k8s_container
Total size of the underlying database logically in use in bytes. Sampled every 60 seconds.
etcd_mvcc_db_total_size_in_use_in_bytes/gauge
ALPHA
(project)
etcd_mvcc_db_total_size_in_use_in_bytes
GAUGE , DOUBLE , By
prometheus_target
Total size of the underlying database logically in use in bytes. Sampled every 30 seconds.
etcd_mvcc_delete_total
ALPHA
(project)
etcd_mvcc_delete_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of deletes seen by this member. Sampled every 60 seconds.
etcd_mvcc_delete_total/counter
ALPHA
(project)
etcd_mvcc_delete_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Total number of deletes seen by this member. Sampled every 30 seconds.
etcd_mvcc_hash_duration_seconds
ALPHA
(project)
etcd_mvcc_hash_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
The latency distribution of storage hash operation. Sampled every 60 seconds.
etcd_mvcc_hash_duration_seconds/histogram
ALPHA
(project)
etcd_mvcc_hash_duration_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
The latency distribution of storage hash operation. Sampled every 30 seconds.
etcd_mvcc_hash_rev_duration_seconds
ALPHA
(project)
etcd_mvcc_hash_rev_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
The latency distribution of storage hash by revision operation. Sampled every 60 seconds.
etcd_mvcc_hash_rev_duration_seconds/histogram
ALPHA
(project)
etcd_mvcc_hash_rev_duration_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
The latency distribution of storage hash by revision operation. Sampled every 30 seconds.
etcd_mvcc_put_total
ALPHA
(project)
etcd_mvcc_put_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of puts seen by this member. Sampled every 60 seconds.
etcd_mvcc_put_total/counter
ALPHA
(project)
etcd_mvcc_put_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Total number of puts seen by this member. Sampled every 30 seconds.
etcd_mvcc_range_total
ALPHA
(project)
etcd_mvcc_range_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of ranges seen by this member. Sampled every 60 seconds.
etcd_mvcc_range_total/counter
ALPHA
(project)
etcd_mvcc_range_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Total number of ranges seen by this member. Sampled every 30 seconds.
etcd_mvcc_txn_total
ALPHA
(project)
etcd_mvcc_txn_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of txns seen by this member. Sampled every 60 seconds.
etcd_mvcc_txn_total/counter
ALPHA
(project)
etcd_mvcc_txn_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Total number of txns seen by this member. Sampled every 30 seconds.
etcd_network_active_peers
ALPHA
(project)
etcd_network_active_peers
GAUGE , DOUBLE , 1
k8s_container
The current number of active peer connections. Sampled every 60 seconds.
Local :
Local.
Remote :
Remote.
etcd_network_active_peers/gauge
ALPHA
(project)
etcd_network_active_peers
GAUGE , DOUBLE , 1
prometheus_target
The current number of active peer connections. Sampled every 30 seconds.
Local :
Local.
Remote :
Remote.
etcd_network_client_grpc_received_bytes_total
ALPHA
(project)
etcd_network_client_grpc_received_bytes_total
CUMULATIVE , DOUBLE , By
k8s_container
The total number of bytes received from grpc clients. Sampled every 60 seconds.
etcd_network_client_grpc_received_bytes_total/counter
ALPHA
(project)
etcd_network_client_grpc_received_bytes_total
CUMULATIVE , DOUBLE , By
prometheus_target
The total number of bytes received from grpc clients. Sampled every 30 seconds.
etcd_network_client_grpc_sent_bytes_total
ALPHA
(project)
etcd_network_client_grpc_sent_bytes_total
CUMULATIVE , DOUBLE , By
k8s_container
The total number of bytes sent to grpc clients. Sampled every 60 seconds.
etcd_network_client_grpc_sent_bytes_total/counter
ALPHA
(project)
etcd_network_client_grpc_sent_bytes_total
CUMULATIVE , DOUBLE , By
prometheus_target
The total number of bytes sent to grpc clients. Sampled every 30 seconds.
etcd_network_disconnected_peers_total/counter
ALPHA
(project)
etcd_network_disconnected_peers_total
CUMULATIVE , DOUBLE , 1
prometheus_target
The total number of disconnected peers. Sampled every 30 seconds.
Local :
Local.
Remote :
Remote.
etcd_network_peer_received_bytes_total
ALPHA
(project)
etcd_network_peer_received_bytes_total
CUMULATIVE , DOUBLE , By
k8s_container
The total number of bytes received from peers. Sampled every 60 seconds.
From :
From.
etcd_network_peer_received_bytes_total/counter
ALPHA
(project)
etcd_network_peer_received_bytes_total
CUMULATIVE , DOUBLE , By
prometheus_target
The total number of bytes received from peers. Sampled every 30 seconds.
From :
From.
etcd_network_peer_round_trip_time_seconds
ALPHA
(project)
etcd_network_peer_round_trip_time_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
Round-Trip-Time histogram between peers. Sampled every 60 seconds.
To :
To.
etcd_network_peer_round_trip_time_seconds/histogram
ALPHA
(project)
etcd_network_peer_round_trip_time_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
Round-Trip-Time histogram between peers. Sampled every 30 seconds.
To :
To.
etcd_network_peer_sent_bytes_total
ALPHA
(project)
etcd_network_peer_sent_bytes_total
CUMULATIVE , DOUBLE , By
k8s_container
The total number of bytes sent to peers. Sampled every 60 seconds.
To :
To.
etcd_network_peer_sent_bytes_total/counter
ALPHA
(project)
etcd_network_peer_sent_bytes_total
CUMULATIVE , DOUBLE , By
prometheus_target
The total number of bytes sent to peers. Sampled every 30 seconds.
To :
To.
etcd_network_peer_sent_failures_total
ALPHA
(project)
etcd_network_peer_sent_failures_total
CUMULATIVE , DOUBLE , 1
k8s_container
The total number of send failures from peers. Sampled every 60 seconds.
To :
To.
etcd_network_peer_sent_failures_total/counter
ALPHA
(project)
etcd_network_peer_sent_failures_total
CUMULATIVE , DOUBLE , 1
prometheus_target
The total number of send failures from peers. Sampled every 30 seconds.
To :
To.
etcd_network_server_stream_failures_total
ALPHA
(project)
etcd_network_server_stream_failures_total
CUMULATIVE , DOUBLE , 1
k8s_container
The total number of stream failures from the local server. Sampled every 60 seconds.
API :
API.
Type :
Type.
etcd_object_counts
ALPHA
(project)
etcd_object_counts
GAUGE , DOUBLE , 1
k8s_container
(Deprecated since 1.22.0) Number of stored objects at the time of last check split by kind. This metric is replaced by apiserver_storage_object_counts. Sampled every 60 seconds.
resource :
resource.
etcd_request_cache_add_duration_seconds
ALPHA
(project)
etcd_request_cache_add_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
Latency in seconds of adding an object to etcd cache. Sampled every 60 seconds.
etcd_request_cache_add_latencies_summary
ALPHA
(project)
etcd_request_cache_add_latencies_summary
GAUGE , DOUBLE , 1
k8s_container
Latency in microseconds of adding an object to etcd cache. Sampled every 60 seconds.
quantile :
quantile.
etcd_request_cache_add_latencies_summary_count
ALPHA
(project)
etcd_request_cache_add_latencies_summary_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) Latency in microseconds of adding an object to etcd cache. Sampled every 60 seconds.
etcd_request_cache_add_latencies_summary_sum
ALPHA
(project)
etcd_request_cache_add_latencies_summary_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Latency in microseconds of adding an object to etcd cache. Sampled every 60 seconds.
etcd_request_cache_get_duration_seconds
ALPHA
(project)
etcd_request_cache_get_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
Latency in seconds of getting an object from etcd cache. Sampled every 60 seconds.
etcd_request_cache_get_latencies_summary
ALPHA
(project)
etcd_request_cache_get_latencies_summary
GAUGE , DOUBLE , 1
k8s_container
Latency in microseconds of getting an object from etcd cache. Sampled every 60 seconds.
quantile :
quantile.
etcd_request_cache_get_latencies_summary_count
ALPHA
(project)
etcd_request_cache_get_latencies_summary_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) Latency in microseconds of getting an object from etcd cache. Sampled every 60 seconds.
etcd_request_cache_get_latencies_summary_sum
ALPHA
(project)
etcd_request_cache_get_latencies_summary_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Latency in microseconds of getting an object from etcd cache. Sampled every 60 seconds.
etcd_request_duration_seconds
ALPHA
(project)
etcd_request_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
[ALPHA] Etcd request latency in seconds for each operation and object type. Sampled every 60 seconds.
resource :
resource.
operation :
operation.
type :
type.
etcd_request_duration_seconds/histogram
ALPHA
(project)
etcd_request_duration_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
[ALPHA] Etcd request latency in seconds for each operation and object type. Sampled every 30 seconds.
operation :
operation.
type :
type.
etcd_request_latencies_summary
ALPHA
(project)
etcd_request_latencies_summary
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) Etcd request latency summary in microseconds for each operation and object type. Sampled every 60 seconds.
operation :
operation.
quantile :
quantile.
type :
type.
etcd_request_latencies_summary_count
ALPHA
(project)
etcd_request_latencies_summary_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) Etcd request latency summary in microseconds for each operation and object type. Sampled every 60 seconds.
operation :
operation.
type :
type.
etcd_request_latencies_summary_sum
ALPHA
(project)
etcd_request_latencies_summary_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Etcd request latency summary in microseconds for each operation and object type. Sampled every 60 seconds.
operation :
operation.
type :
type.
etcd_server_client_requests_total
ALPHA
(project)
etcd_server_client_requests_total
CUMULATIVE , DOUBLE , 1
k8s_container
The total number of client requests per client version. Sampled every 60 seconds.
client_api_version :
client_api_version.
type :
type.
etcd_server_client_requests_total/counter
ALPHA
(project)
etcd_server_client_requests_total
CUMULATIVE , DOUBLE , 1
prometheus_target
The total number of client requests per client version. Sampled every 30 seconds.
client_api_version :
client_api_version.
type :
type.
etcd_server_go_version
ALPHA
(project)
etcd_server_go_version
GAUGE , DOUBLE , 1
k8s_container
Which Go version server is running with. 1 for 'server_go_version' label with current version. Sampled every 60 seconds.
server_go_version :
server_go_version.
etcd_server_go_version/gauge
ALPHA
(project)
etcd_server_go_version
GAUGE , DOUBLE , 1
prometheus_target
Which Go version server is running with. 1 for 'server_go_version' label with current version. Sampled every 30 seconds.
server_go_version :
server_go_version.
etcd_server_has_leader
ALPHA
(project)
etcd_server_has_leader
GAUGE , DOUBLE , 1
k8s_container
Whether or not a leader exists. 1 is existence, 0 is not. Sampled every 60 seconds.
etcd_server_has_leader/gauge
ALPHA
(project)
etcd_server_has_leader
GAUGE , DOUBLE , 1
prometheus_target
Whether or not a leader exists. 1 is existence, 0 is not. Sampled every 30 seconds.
etcd_server_health_failures
ALPHA
(project)
etcd_server_health_failures
CUMULATIVE , DOUBLE , 1
k8s_container
The total number of failed health checks. Sampled every 60 seconds.
etcd_server_health_failures/counter
ALPHA
(project)
etcd_server_health_failures
CUMULATIVE , DOUBLE , 1
prometheus_target
The total number of failed health checks. Sampled every 30 seconds.
etcd_server_health_success
ALPHA
(project)
etcd_server_health_success
CUMULATIVE , DOUBLE , 1
k8s_container
The total number of successful health checks. Sampled every 60 seconds.
etcd_server_health_success/counter
ALPHA
(project)
etcd_server_health_success
CUMULATIVE , DOUBLE , 1
prometheus_target
The total number of successful health checks. Sampled every 30 seconds.
etcd_server_heartbeat_send_failures_total
ALPHA
(project)
etcd_server_heartbeat_send_failures_total
CUMULATIVE , DOUBLE , 1
k8s_container
The total number of leader heartbeat send failures (likely overloaded from slow disk). Sampled every 60 seconds.
etcd_server_heartbeat_send_failures_total/counter
ALPHA
(project)
etcd_server_heartbeat_send_failures_total
CUMULATIVE , DOUBLE , 1
prometheus_target
The total number of leader heartbeat send failures (likely overloaded from slow disk). Sampled every 30 seconds.
etcd_server_id
ALPHA
(project)
etcd_server_id
GAUGE , DOUBLE , 1
k8s_container
Server or member ID in hexadecimal format. 1 for 'server_id' label with current ID. Sampled every 60 seconds.
server_id :
server_id.
etcd_server_id/gauge
ALPHA
(project)
etcd_server_id
GAUGE , DOUBLE , 1
prometheus_target
Server or member ID in hexadecimal format. 1 for 'server_id' label with current ID. Sampled every 30 seconds.
server_id :
server_id.
etcd_server_is_leader
ALPHA
(project)
etcd_server_is_leader
GAUGE , DOUBLE , 1
k8s_container
Whether or not this member is a leader. 1 if is, 0 otherwise. Sampled every 60 seconds.
etcd_server_is_leader/gauge
ALPHA
(project)
etcd_server_is_leader
GAUGE , DOUBLE , 1
prometheus_target
Whether or not this member is a leader. 1 if is, 0 otherwise. Sampled every 30 seconds.
etcd_server_is_learner
ALPHA
(project)
etcd_server_is_learner
GAUGE , DOUBLE , 1
k8s_container
Whether or not this member is a learner. 1 if is, 0 otherwise. Sampled every 60 seconds.
etcd_server_is_learner/gauge
ALPHA
(project)
etcd_server_is_learner
GAUGE , DOUBLE , 1
prometheus_target
Whether or not this member is a learner. 1 if is, 0 otherwise. Sampled every 30 seconds.
etcd_server_leader_changes_seen_total
ALPHA
(project)
etcd_server_leader_changes_seen_total
CUMULATIVE , DOUBLE , 1
k8s_container
The number of leader changes seen. Sampled every 60 seconds.
etcd_server_leader_changes_seen_total/counter
ALPHA
(project)
etcd_server_leader_changes_seen_total
CUMULATIVE , DOUBLE , 1
prometheus_target
The number of leader changes seen. Sampled every 30 seconds.
etcd_server_learner_promote_successes
ALPHA
(project)
etcd_server_learner_promote_successes
CUMULATIVE , DOUBLE , 1
k8s_container
The total number of successful learner promotions while this member is leader. Sampled every 60 seconds.
etcd_server_learner_promote_successes/counter
ALPHA
(project)
etcd_server_learner_promote_successes
CUMULATIVE , DOUBLE , 1
prometheus_target
The total number of successful learner promotions while this member is leader. Sampled every 30 seconds.
etcd_server_proposals_applied_total
ALPHA
(project)
etcd_server_proposals_applied_total
GAUGE , DOUBLE , 1
k8s_container
The total number of consensus proposals applied. Sampled every 60 seconds.
etcd_server_proposals_applied_total/gauge
ALPHA
(project)
etcd_server_proposals_applied_total
GAUGE , DOUBLE , 1
prometheus_target
The total number of consensus proposals applied. Sampled every 30 seconds.
etcd_server_proposals_committed_total
ALPHA
(project)
etcd_server_proposals_committed_total
GAUGE , DOUBLE , 1
k8s_container
The total number of consensus proposals committed. Sampled every 60 seconds.
etcd_server_proposals_committed_total/gauge
ALPHA
(project)
etcd_server_proposals_committed_total
GAUGE , DOUBLE , 1
prometheus_target
The total number of consensus proposals committed. Sampled every 30 seconds.
etcd_server_proposals_failed_total
ALPHA
(project)
etcd_server_proposals_failed_total
CUMULATIVE , DOUBLE , 1
k8s_container
The total number of failed proposals seen. Sampled every 60 seconds.
etcd_server_proposals_failed_total/counter
ALPHA
(project)
etcd_server_proposals_failed_total
CUMULATIVE , DOUBLE , 1
prometheus_target
The total number of failed proposals seen. Sampled every 30 seconds.
etcd_server_proposals_pending
ALPHA
(project)
etcd_server_proposals_pending
GAUGE , DOUBLE , 1
k8s_container
The current number of pending proposals to commit. Sampled every 60 seconds.
etcd_server_proposals_pending/gauge
ALPHA
(project)
etcd_server_proposals_pending
GAUGE , DOUBLE , 1
prometheus_target
The current number of pending proposals to commit. Sampled every 30 seconds.
etcd_server_quota_backend_bytes
ALPHA
(project)
etcd_server_quota_backend_bytes
GAUGE , DOUBLE , By
k8s_container
Current backend storage quota size in bytes. Sampled every 60 seconds.
etcd_server_quota_backend_bytes/gauge
ALPHA
(project)
etcd_server_quota_backend_bytes
GAUGE , DOUBLE , By
prometheus_target
Current backend storage quota size in bytes. Sampled every 30 seconds.
etcd_server_read_indexes_failed_total
ALPHA
(project)
etcd_server_read_indexes_failed_total
CUMULATIVE , DOUBLE , 1
k8s_container
The total number of failed read indexes seen. Sampled every 60 seconds.
etcd_server_read_indexes_failed_total/counter
ALPHA
(project)
etcd_server_read_indexes_failed_total
CUMULATIVE , DOUBLE , 1
prometheus_target
The total number of failed read indexes seen. Sampled every 30 seconds.
etcd_server_slow_apply_total
ALPHA
(project)
etcd_server_slow_apply_total
CUMULATIVE , DOUBLE , 1
k8s_container
The total number of slow apply requests (likely overloaded from slow disk). Sampled every 60 seconds.
etcd_server_slow_apply_total/counter
ALPHA
(project)
etcd_server_slow_apply_total
CUMULATIVE , DOUBLE , 1
prometheus_target
The total number of slow apply requests (likely overloaded from slow disk). Sampled every 30 seconds.
etcd_server_slow_read_indexes_total
ALPHA
(project)
etcd_server_slow_read_indexes_total
CUMULATIVE , DOUBLE , 1
k8s_container
The total number of pending read indexes not in sync with leader's or timed out read index requests. Sampled every 60 seconds.
etcd_server_slow_read_indexes_total/counter
ALPHA
(project)
etcd_server_slow_read_indexes_total
CUMULATIVE , DOUBLE , 1
prometheus_target
The total number of pending read indexes not in sync with leader's or timed out read index requests. Sampled every 30 seconds.
etcd_server_snapshot_apply_in_progress_total
ALPHA
(project)
etcd_server_snapshot_apply_in_progress_total
GAUGE , DOUBLE , 1
k8s_container
1 if the server is applying the incoming snapshot. 0 if none. Sampled every 60 seconds.
etcd_server_snapshot_apply_in_progress_total/gauge
ALPHA
(project)
etcd_server_snapshot_apply_in_progress_total
GAUGE , DOUBLE , 1
prometheus_target
1 if the server is applying the incoming snapshot. 0 if none. Sampled every 30 seconds.
etcd_server_version
ALPHA
(project)
etcd_server_version
GAUGE , DOUBLE , 1
k8s_container
Which version is running. 1 for 'server_version' label with current version. Sampled every 60 seconds.
server_version :
server_version.
etcd_server_version/gauge
ALPHA
(project)
etcd_server_version
GAUGE , DOUBLE , 1
prometheus_target
Which version is running. 1 for 'server_version' label with current version. Sampled every 30 seconds.
server_version :
server_version.
etcd_snap_db_fsync_duration_seconds
ALPHA
(project)
etcd_snap_db_fsync_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
The latency distributions of fsyncing .snap.db file. Sampled every 60 seconds.
etcd_snap_db_fsync_duration_seconds/histogram
ALPHA
(project)
etcd_snap_db_fsync_duration_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
The latency distributions of fsyncing .snap.db file. Sampled every 30 seconds.
etcd_snap_db_save_total_duration_seconds
ALPHA
(project)
etcd_snap_db_save_total_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
The total latency distributions of v3 snapshot save. Sampled every 60 seconds.
etcd_snap_db_save_total_duration_seconds/histogram
ALPHA
(project)
etcd_snap_db_save_total_duration_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
The total latency distributions of v3 snapshot save. Sampled every 30 seconds.
etcd_snap_fsync_duration_seconds
ALPHA
(project)
etcd_snap_fsync_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
The latency distributions of fsync called by snap. Sampled every 60 seconds.
etcd_snap_fsync_duration_seconds/histogram
ALPHA
(project)
etcd_snap_fsync_duration_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
The latency distributions of fsync called by snap. Sampled every 30 seconds.
field_validation_request_duration_seconds
ALPHA
(project)
field_validation_request_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
[ALPHA] Response latency distribution in seconds for each field validation value and whether field validation is enabled or not. Sampled every 60 seconds.
enabled :
enabled.
field_validation :
field_validation.
field_validation_request_duration_seconds/histogram
ALPHA
(project)
field_validation_request_duration_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
[ALPHA] Response latency distribution in seconds for each field validation value and whether field validation is enabled or not. Sampled every 30 seconds.
enabled :
enabled.
field_validation :
field_validation.
fluentbit_build_info
ALPHA
(project)
fluentbit_build_info
GAUGE , DOUBLE , 1
k8s_container
Build version information. Sampled every 60 seconds.
edition :
edition.
version :
version.
fluentbit_filter_add_records_total
ALPHA
(project)
fluentbit_filter_add_records_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total count of records added by Fluent Bit filter plugin. Sampled every 60 seconds.
name :
name.
fluentbit_filter_drop_records_total
ALPHA
(project)
fluentbit_filter_drop_records_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total count of records dropped by Fluent Bit filter plugin. Sampled every 60 seconds.
name :
name.
fluentbit_input_bytes_total
ALPHA
(project)
fluentbit_input_bytes_total
CUMULATIVE , DOUBLE , By
k8s_container
Number of input bytes. Sampled every 60 seconds.
name :
name.
fluentbit_input_files_closed_total
ALPHA
(project)
fluentbit_input_files_closed_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total count of files closed by Fluent Bit input plugin. Sampled every 60 seconds.
name :
name.
fluentbit_input_files_opened_total
ALPHA
(project)
fluentbit_input_files_opened_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total count of files opened by Fluent Bit input plugin. Sampled every 60 seconds.
name :
name.
fluentbit_input_files_rotated_total
ALPHA
(project)
fluentbit_input_files_rotated_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total count of files rotated by Fluent Bit input plugin. Sampled every 60 seconds.
name :
name.
fluentbit_input_records_total
ALPHA
(project)
fluentbit_input_records_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of input records. Sampled every 60 seconds.
name :
name.
fluentbit_output_dropped_records_total
ALPHA
(project)
fluentbit_output_dropped_records_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of dropped records. Sampled every 60 seconds.
name :
name.
fluentbit_output_errors_total
ALPHA
(project)
fluentbit_output_errors_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of output errors. Sampled every 60 seconds.
name :
name.
fluentbit_output_proc_bytes_total
ALPHA
(project)
fluentbit_output_proc_bytes_total
CUMULATIVE , DOUBLE , By
k8s_container
Number of processed output bytes. Sampled every 60 seconds.
name :
name.
fluentbit_output_proc_records_total
ALPHA
(project)
fluentbit_output_proc_records_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of processed output records. Sampled every 60 seconds.
name :
name.
fluentbit_output_retried_records_total
ALPHA
(project)
fluentbit_output_retried_records_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of retried records. Sampled every 60 seconds.
name :
name.
fluentbit_output_retries_failed_total
ALPHA
(project)
fluentbit_output_retries_failed_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of abandoned batches because the maximum number of re-tries was reached. Sampled every 60 seconds.
name :
name.
fluentbit_output_retries_total
ALPHA
(project)
fluentbit_output_retries_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of output retries. Sampled every 60 seconds.
name :
name.
fluentbit_output_stackdriver_failed_requests_total
ALPHA
(project)
fluentbit_output_stackdriver_failed_requests_total
CUMULATIVE , DOUBLE , 1
k8s_container
Fluentbit metrics. Sampled every 60 seconds.
name :
name.
fluentbit_output_stackdriver_successful_requests_total
ALPHA
(project)
fluentbit_output_stackdriver_successful_requests_total
CUMULATIVE , DOUBLE , 1
k8s_container
Fluentbit metrics. Sampled every 60 seconds.
name :
name.
fluentbit_uptime
ALPHA
(project)
fluentbit_uptime
CUMULATIVE , DOUBLE , 1
k8s_container
Number of seconds that Fluent Bit has been running. Sampled every 60 seconds.
fluentd_output_status_buffer_queue_length
ALPHA
(project)
fluentd_output_status_buffer_queue_length
GAUGE , DOUBLE , 1
k8s_container
Current buffer queue length. Sampled every 60 seconds.
plugin_id :
plugin_id.
type :
type.
worker_id :
worker_id.
fluentd_output_status_buffer_total_bytes
ALPHA
(project)
fluentd_output_status_buffer_total_bytes
GAUGE , DOUBLE , By
k8s_container
Current total size of queued buffers. Sampled every 60 seconds.
plugin_id :
plugin_id.
type :
type.
worker_id :
worker_id.
fluentd_output_status_emit_count
ALPHA
(project)
fluentd_output_status_emit_count
GAUGE , DOUBLE , 1
k8s_container
Current emit counts. Sampled every 60 seconds.
plugin_id :
plugin_id.
type :
type.
worker_id :
worker_id.
fluentd_output_status_emit_records
ALPHA
(project)
fluentd_output_status_emit_records
GAUGE , DOUBLE , 1
k8s_container
Current emit records. Sampled every 60 seconds.
plugin_id :
plugin_id.
type :
type.
worker_id :
worker_id.
fluentd_output_status_num_errors
ALPHA
(project)
fluentd_output_status_num_errors
GAUGE , DOUBLE , 1
k8s_container
Current number of errors. Sampled every 60 seconds.
plugin_id :
plugin_id.
type :
type.
worker_id :
worker_id.
fluentd_output_status_retry_count
ALPHA
(project)
fluentd_output_status_retry_count
GAUGE , DOUBLE , 1
k8s_container
Current retry counts. Sampled every 60 seconds.
plugin_id :
plugin_id.
type :
type.
worker_id :
worker_id.
fluentd_output_status_retry_wait
ALPHA
(project)
fluentd_output_status_retry_wait
GAUGE , DOUBLE , 1
k8s_container
Current retry wait. Sampled every 60 seconds.
plugin_id :
plugin_id.
type :
type.
worker_id :
worker_id.
fluentd_output_status_rollback_count
ALPHA
(project)
fluentd_output_status_rollback_count
GAUGE , DOUBLE , 1
k8s_container
Current rollback counts. Sampled every 60 seconds.
plugin_id :
plugin_id.
type :
type.
worker_id :
worker_id.
fluentd_output_status_write_count
ALPHA
(project)
fluentd_output_status_write_count
GAUGE , DOUBLE , 1
k8s_container
Current write counts. Sampled every 60 seconds.
plugin_id :
plugin_id.
type :
type.
worker_id :
worker_id.
fluentd_status_buffer_queue_length
ALPHA
(project)
fluentd_status_buffer_queue_length
GAUGE , DOUBLE , 1
k8s_container
Current buffer queue length. Sampled every 60 seconds.
plugin_category :
plugin_category.
plugin_id :
plugin_id.
type :
type.
worker_id :
worker_id.
fluentd_status_buffer_total_bytes
ALPHA
(project)
fluentd_status_buffer_total_bytes
GAUGE , DOUBLE , By
k8s_container
Current total size of queued buffers. Sampled every 60 seconds.
plugin_category :
plugin_category.
plugin_id :
plugin_id.
type :
type.
worker_id :
worker_id.
fluentd_status_retry_count
ALPHA
(project)
fluentd_status_retry_count
GAUGE , DOUBLE , 1
k8s_container
Current retry counts. Sampled every 60 seconds.
plugin_category :
plugin_category.
plugin_id :
plugin_id.
type :
type.
worker_id :
worker_id.
garbage_collector_attempt_to_delete_adds
ALPHA
(project)
garbage_collector_attempt_to_delete_adds
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of adds handled by workqueue: garbage_collector_attempt_to_delete. Sampled every 60 seconds.
garbage_collector_attempt_to_delete_depth
ALPHA
(project)
garbage_collector_attempt_to_delete_depth
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) Current depth of workqueue: garbage_collector_attempt_to_delete. Sampled every 60 seconds.
garbage_collector_attempt_to_delete_longest_running_processor_microseconds
ALPHA
(project)
garbage_collector_attempt_to_delete_longest_running_processor_microseconds
GAUGE , DOUBLE , us
k8s_container
(Deprecated) How many microseconds has the longest running processor for garbage_collector_attempt_to_delete been running. Sampled every 60 seconds.
garbage_collector_attempt_to_delete_queue_latency
ALPHA
(project)
garbage_collector_attempt_to_delete_queue_latency
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuegarbage_collector_attempt_to_delete before being requested. Sampled every 60 seconds.
quantile :
quantile.
garbage_collector_attempt_to_delete_queue_latency_count
ALPHA
(project)
garbage_collector_attempt_to_delete_queue_latency_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long an item stays in workqueuegarbage_collector_attempt_to_delete before being requested. Sampled every 60 seconds.
garbage_collector_attempt_to_delete_queue_latency_sum
ALPHA
(project)
garbage_collector_attempt_to_delete_queue_latency_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuegarbage_collector_attempt_to_delete before being requested. Sampled every 60 seconds.
garbage_collector_attempt_to_delete_retries
ALPHA
(project)
garbage_collector_attempt_to_delete_retries
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of retries handled by workqueue: garbage_collector_attempt_to_delete. Sampled every 60 seconds.
garbage_collector_attempt_to_delete_unfinished_work_seconds
ALPHA
(project)
garbage_collector_attempt_to_delete_unfinished_work_seconds
GAUGE , DOUBLE , s
k8s_container
(Deprecated) How many seconds of work garbage_collector_attempt_to_delete has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases. Sampled every 60 seconds.
garbage_collector_attempt_to_delete_work_duration
ALPHA
(project)
garbage_collector_attempt_to_delete_work_duration
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuegarbage_collector_attempt_to_delete takes. Sampled every 60 seconds.
quantile :
quantile.
garbage_collector_attempt_to_delete_work_duration_count
ALPHA
(project)
garbage_collector_attempt_to_delete_work_duration_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long processing an item from workqueuegarbage_collector_attempt_to_delete takes. Sampled every 60 seconds.
garbage_collector_attempt_to_delete_work_duration_sum
ALPHA
(project)
garbage_collector_attempt_to_delete_work_duration_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuegarbage_collector_attempt_to_delete takes. Sampled every 60 seconds.
garbage_collector_attempt_to_orphan_adds
ALPHA
(project)
garbage_collector_attempt_to_orphan_adds
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of adds handled by workqueue: garbage_collector_attempt_to_orphan. Sampled every 60 seconds.
garbage_collector_attempt_to_orphan_depth
ALPHA
(project)
garbage_collector_attempt_to_orphan_depth
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) Current depth of workqueue: garbage_collector_attempt_to_orphan. Sampled every 60 seconds.
garbage_collector_attempt_to_orphan_longest_running_processor_microseconds
ALPHA
(project)
garbage_collector_attempt_to_orphan_longest_running_processor_microseconds
GAUGE , DOUBLE , us
k8s_container
(Deprecated) How many microseconds has the longest running processor for garbage_collector_attempt_to_orphan been running. Sampled every 60 seconds.
garbage_collector_attempt_to_orphan_queue_latency
ALPHA
(project)
garbage_collector_attempt_to_orphan_queue_latency
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuegarbage_collector_attempt_to_orphan before being requested. Sampled every 60 seconds.
quantile :
quantile.
garbage_collector_attempt_to_orphan_queue_latency_count
ALPHA
(project)
garbage_collector_attempt_to_orphan_queue_latency_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long an item stays in workqueuegarbage_collector_attempt_to_orphan before being requested. Sampled every 60 seconds.
garbage_collector_attempt_to_orphan_queue_latency_sum
ALPHA
(project)
garbage_collector_attempt_to_orphan_queue_latency_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuegarbage_collector_attempt_to_orphan before being requested. Sampled every 60 seconds.
garbage_collector_attempt_to_orphan_retries
ALPHA
(project)
garbage_collector_attempt_to_orphan_retries
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of retries handled by workqueue: garbage_collector_attempt_to_orphan. Sampled every 60 seconds.
garbage_collector_attempt_to_orphan_unfinished_work_seconds
ALPHA
(project)
garbage_collector_attempt_to_orphan_unfinished_work_seconds
GAUGE , DOUBLE , s
k8s_container
(Deprecated) How many seconds of work garbage_collector_attempt_to_orphan has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases. Sampled every 60 seconds.
garbage_collector_attempt_to_orphan_work_duration
ALPHA
(project)
garbage_collector_attempt_to_orphan_work_duration
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuegarbage_collector_attempt_to_orphan takes. Sampled every 60 seconds.
quantile :
quantile.
garbage_collector_attempt_to_orphan_work_duration_count
ALPHA
(project)
garbage_collector_attempt_to_orphan_work_duration_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long processing an item from workqueuegarbage_collector_attempt_to_orphan takes. Sampled every 60 seconds.
garbage_collector_attempt_to_orphan_work_duration_sum
ALPHA
(project)
garbage_collector_attempt_to_orphan_work_duration_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuegarbage_collector_attempt_to_orphan takes. Sampled every 60 seconds.
garbage_collector_graph_changes_adds
ALPHA
(project)
garbage_collector_graph_changes_adds
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of adds handled by workqueue: garbage_collector_graph_changes. Sampled every 60 seconds.
garbage_collector_graph_changes_depth
ALPHA
(project)
garbage_collector_graph_changes_depth
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) Current depth of workqueue: garbage_collector_graph_changes. Sampled every 60 seconds.
garbage_collector_graph_changes_longest_running_processor_microseconds
ALPHA
(project)
garbage_collector_graph_changes_longest_running_processor_microseconds
GAUGE , DOUBLE , us
k8s_container
(Deprecated) How many microseconds has the longest running processor for garbage_collector_graph_changes been running. Sampled every 60 seconds.
garbage_collector_graph_changes_queue_latency
ALPHA
(project)
garbage_collector_graph_changes_queue_latency
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuegarbage_collector_graph_changes before being requested. Sampled every 60 seconds.
quantile :
quantile.
garbage_collector_graph_changes_queue_latency_count
ALPHA
(project)
garbage_collector_graph_changes_queue_latency_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long an item stays in workqueuegarbage_collector_graph_changes before being requested. Sampled every 60 seconds.
garbage_collector_graph_changes_queue_latency_sum
ALPHA
(project)
garbage_collector_graph_changes_queue_latency_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuegarbage_collector_graph_changes before being requested. Sampled every 60 seconds.
garbage_collector_graph_changes_retries
ALPHA
(project)
garbage_collector_graph_changes_retries
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of retries handled by workqueue: garbage_collector_graph_changes. Sampled every 60 seconds.
garbage_collector_graph_changes_unfinished_work_seconds
ALPHA
(project)
garbage_collector_graph_changes_unfinished_work_seconds
GAUGE , DOUBLE , s
k8s_container
(Deprecated) How many seconds of work garbage_collector_graph_changes has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases. Sampled every 60 seconds.
garbage_collector_graph_changes_work_duration
ALPHA
(project)
garbage_collector_graph_changes_work_duration
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuegarbage_collector_graph_changes takes. Sampled every 60 seconds.
quantile :
quantile.
garbage_collector_graph_changes_work_duration_count
ALPHA
(project)
garbage_collector_graph_changes_work_duration_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long processing an item from workqueuegarbage_collector_graph_changes takes. Sampled every 60 seconds.
garbage_collector_graph_changes_work_duration_sum
ALPHA
(project)
garbage_collector_graph_changes_work_duration_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuegarbage_collector_graph_changes takes. Sampled every 60 seconds.
garbagecollector_controller_resources_sync_error_total
ALPHA
(project)
garbagecollector_controller_resources_sync_error_total
CUMULATIVE , DOUBLE , 1
k8s_container
[ALPHA] Number of garbage collector resources sync errors. Sampled every 60 seconds.
garbagecollector_controller_resources_sync_error_total/counter
ALPHA
(project)
garbagecollector_controller_resources_sync_error_total
CUMULATIVE , DOUBLE , 1
prometheus_target
[ALPHA] Number of garbage collector resources sync errors. Sampled every 30 seconds.
gc_controller_rate_limiter_use
ALPHA
(project)
gc_controller_rate_limiter_use
GAUGE , DOUBLE , 1
k8s_container
A metric measuring the saturation of the rate limiter for gc_controller. Sampled every 60 seconds.
gc_controller_rate_limiter_use/gauge
ALPHA
(project)
gc_controller_rate_limiter_use
GAUGE , DOUBLE , 1
prometheus_target
A metric measuring the saturation of the rate limiter for gc_controller. Sampled every 30 seconds.
gcm_export_pending_requests
ALPHA
(project)
gcm_export_pending_requests
GAUGE , DOUBLE , 1
k8s_container
Number of in-flight requests to GCM. Sampled every 60 seconds.
gcm_export_projects_per_batch
ALPHA
(project)
gcm_export_projects_per_batch
CUMULATIVE , DISTRIBUTION , 1
k8s_container
Number of different projects in a batch that's being sent. Sampled every 60 seconds.
gcm_export_samples_exported_total
ALPHA
(project)
gcm_export_samples_exported_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of samples exported at scrape time. Sampled every 60 seconds.
gcm_export_samples_per_rpc_batch
ALPHA
(project)
gcm_export_samples_per_rpc_batch
CUMULATIVE , DISTRIBUTION , 1
k8s_container
Number of samples that ended up in a single RPC batch. Sampled every 60 seconds.
gcm_export_samples_sent_total
ALPHA
(project)
gcm_export_samples_sent_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of exported samples sent to GCM. Sampled every 60 seconds.
gcm_export_send_iterations_total
ALPHA
(project)
gcm_export_send_iterations_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of processing iterations of the sample export send handler. Sampled every 60 seconds.
gcm_export_shard_process_pending_total
ALPHA
(project)
gcm_export_shard_process_pending_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of shard retrievals with an empty result. Sampled every 60 seconds.
gcm_export_shard_process_samples_taken
ALPHA
(project)
gcm_export_shard_process_samples_taken
CUMULATIVE , DISTRIBUTION , 1
k8s_container
Number of samples taken when processing a shard. Sampled every 60 seconds.
gcm_export_shard_process_total
ALPHA
(project)
gcm_export_shard_process_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of shard retrievals. Sampled every 60 seconds.
gcm_pool_intern_total
ALPHA
(project)
gcm_pool_intern_total
CUMULATIVE , DOUBLE , 1
k8s_container
Time series memory intern operations. Sampled every 60 seconds.
gcm_pool_release_total
ALPHA
(project)
gcm_pool_release_total
CUMULATIVE , DOUBLE , 1
k8s_container
Time series memory intern release operations. Sampled every 60 seconds.
gdc_backup_backup_repositories_attached
ALPHA
(project)
gdc_backup_backup_repositories_attached
GAUGE , DOUBLE , 1
k8s_container
The number of backup repositories that have been attached. Sampled every 60 seconds.
_gdch_project :
_gdch_project.
importPolicy :
importPolicy.
importStatus :
importStatus.
repoName :
repoName.
gdc_backup_backups_completed
ALPHA
(project)
gdc_backup_backups_completed
CUMULATIVE , DOUBLE , 1
k8s_container
The number of backups completed. Sampled every 60 seconds.
_gdch_project :
_gdch_project.
backupPlan :
backupPlan.
firstPartyExtension :
firstPartyExtension.
success :
success.
gdc_backup_backups_config_backup_size
ALPHA
(project)
gdc_backup_backups_config_backup_size
CUMULATIVE , DISTRIBUTION , 1
k8s_container
The size of configuration backups, in GB. Sampled every 60 seconds.
_gdch_project :
_gdch_project.
backupPlan :
backupPlan.
firstPartyExtension :
firstPartyExtension.
gdc_backup_backups_created_total
ALPHA
(project)
gdc_backup_backups_created_total
CUMULATIVE , DOUBLE , 1
k8s_container
The number of backups created. Sampled every 60 seconds.
_gdch_project :
_gdch_project.
backupPlan :
backupPlan.
firstPartyExtension :
firstPartyExtension.
type :
type.
gdc_backup_backups_deleted
ALPHA
(project)
gdc_backup_backups_deleted
CUMULATIVE , DOUBLE , 1
k8s_container
The number of backups deleted. Sampled every 60 seconds.
_gdch_project :
_gdch_project.
backupPlan :
backupPlan.
firstPartyExtension :
firstPartyExtension.
success :
success.
gdc_backup_backups_latency
ALPHA
(project)
gdc_backup_backups_latency
CUMULATIVE , DISTRIBUTION , 1
k8s_container
The latency of backups, in minutes. Sampled every 60 seconds.
_gdch_project :
_gdch_project.
backupPlan :
backupPlan.
firstPartyExtension :
firstPartyExtension.
success :
success.
gdc_backup_backups_pile_up
ALPHA
(project)
gdc_backup_backups_pile_up
GAUGE , DOUBLE , 1
k8s_container
Whether or not the specified backup plan has too many in-progress backups. Sampled every 60 seconds.
_gdch_project :
_gdch_project.
backupPlan :
backupPlan.
firstPartyExtension :
firstPartyExtension.
gdc_backup_controlplane_live
ALPHA
(project)
gdc_backup_controlplane_live
GAUGE , DOUBLE , 1
k8s_container
A liveness check for the GDC Backup control plane. Sampled every 60 seconds.
_gdch_project :
_gdch_project.
gdc_backup_restores_completed
ALPHA
(project)
gdc_backup_restores_completed
CUMULATIVE , DOUBLE , 1
k8s_container
The number of restores completed. Sampled every 60 seconds.
_gdch_project :
_gdch_project.
firstPartyExtension :
firstPartyExtension.
restorePlan :
restorePlan.
success :
success.
gdc_backup_restores_created_total
ALPHA
(project)
gdc_backup_restores_created_total
CUMULATIVE , DOUBLE , 1
k8s_container
The number of restores created. Sampled every 60 seconds.
_gdch_project :
_gdch_project.
firstPartyExtension :
firstPartyExtension.
restorePlan :
restorePlan.
type :
type.
gdc_backup_restores_latency
ALPHA
(project)
gdc_backup_restores_latency
CUMULATIVE , DISTRIBUTION , 1
k8s_container
The latency of restores, in minutes. Sampled every 60 seconds.
_gdch_project :
_gdch_project.
firstPartyExtension :
firstPartyExtension.
restorePlan :
restorePlan.
success :
success.
gdc_backup_storage_capacity_usage_percent
ALPHA
(project)
gdc_backup_storage_capacity_usage_percent
GAUGE , DOUBLE , 1
k8s_container
Used storage capacity in GDC Backup storage service. Sampled every 60 seconds.
_gdch_project :
_gdch_project.
gdc_backup_storage_service_live
ALPHA
(project)
gdc_backup_storage_service_live
GAUGE , DOUBLE , 1
k8s_container
A liveness check for the GDC Backup storage service. Sampled every 60 seconds.
_gdch_project :
_gdch_project.
gdc_backup_volume_backups_completed
ALPHA
(project)
gdc_backup_volume_backups_completed
CUMULATIVE , DOUBLE , 1
k8s_container
The number of volume backups completed. Sampled every 60 seconds.
_gdch_project :
_gdch_project.
backupPlan :
backupPlan.
firstPartyExtension :
firstPartyExtension.
success :
success.
gdc_backup_volume_backups_created_total
ALPHA
(project)
gdc_backup_volume_backups_created_total
CUMULATIVE , DOUBLE , 1
k8s_container
The number of volume backups created. Sampled every 60 seconds.
_gdch_project :
_gdch_project.
backupPlan :
backupPlan.
firstPartyExtension :
firstPartyExtension.
gdc_backup_volume_restores_completed
ALPHA
(project)
gdc_backup_volume_restores_completed
CUMULATIVE , DOUBLE , 1
k8s_container
The number of volume restores completed. Sampled every 60 seconds.
_gdch_project :
_gdch_project.
firstPartyExtension :
firstPartyExtension.
restorePlan :
restorePlan.
success :
success.
gdc_backup_volume_restores_created_total
ALPHA
(project)
gdc_backup_volume_restores_created_total
CUMULATIVE , DOUBLE , 1
k8s_container
The number of volume restores created. Sampled every 60 seconds.
_gdch_project :
_gdch_project.
firstPartyExtension :
firstPartyExtension.
restorePlan :
restorePlan.
gdce_advertised_route
BETA
(project)
gdce_advertised_route
GAUGE , DOUBLE , 1
k8s_pod
Information about BGPAdvertisedRoute prefixes. Sampled every 60 seconds.
name :
name.
prefix :
prefix.
gdce_clusterconfig
BETA
(project)
gdce_clusterconfig
GAUGE , DOUBLE , 1
k8s_pod
Information about GDCEClusterConfig CR generation. Sampled every 60 seconds.
env :
env.
generation_id :
generation_id.
gdce_cnac_network
BETA
(project)
gdce_cnac_network
GAUGE , DOUBLE , 1
k8s_pod
Information about FloatingIPs on a per Network basis. Sampled every 60 seconds.
floating_ip :
floating_ip.
network_name :
network_name.
gdce_edgenetwork_last_report_time
BETA
(project)
gdce_edgenetwork_last_report_time
GAUGE , DOUBLE , 1
k8s_pod
Last report time for CFC. Sampled every 60 seconds.
gdce_edgenetwork_network
BETA
(project)
gdce_edgenetwork_network
GAUGE , DOUBLE , 1
k8s_pod
Information about MTU and VlanIDs on a per Network basis. Sampled every 60 seconds.
mtu :
mtu.
network_name :
network_name.
vlan_id :
vlan_id.
gdce_edgenetwork_router
BETA
(project)
gdce_edgenetwork_router
GAUGE , DOUBLE , 1
k8s_pod
Bgppeer Information about routers. Sampled every 60 seconds.
peer_asn :
peer_asn.
router_name :
router_name.
tor_asn :
tor_asn.
torbgp_ipv4 :
torbgp_ipv4.
gdce_edgenetwork_vlan_ipv4
BETA
(project)
gdce_edgenetwork_vlan_ipv4
GAUGE , DOUBLE , 1
k8s_pod
Information about ipv4 on a per VLAN basis. Sampled every 60 seconds.
ipv4 :
ipv4.
network_name :
network_name.
vlan_id :
vlan_id.
gdce_edgenetwork_vlan_ipv6
BETA
(project)
gdce_edgenetwork_vlan_ipv6
GAUGE , DOUBLE , 1
k8s_pod
Information about ipv6 on a per VLAN basis. Sampled every 60 seconds.
ipv6 :
ipv6.
network_name :
network_name.
vlan_id :
vlan_id.
gdce_interface_bytes
BETA
(project)
gdce_interface_bytes
GAUGE , DOUBLE , By
k8s_pod
Information about NIS interface bytes. Sampled every 60 seconds.
direction :
direction.
interface_name :
interface_name.
node_name :
node_name.
gdce_interface_carrier_errors
BETA
(project)
gdce_interface_carrier_errors
GAUGE , DOUBLE , 1
k8s_pod
Information about NIS interface carrier errors. Sampled every 60 seconds.
direction :
direction.
interface_name :
interface_name.
node_name :
node_name.
gdce_interface_collisions
BETA
(project)
gdce_interface_collisions
GAUGE , DOUBLE , 1
k8s_pod
Information about NIS interface collisions. Sampled every 60 seconds.
direction :
direction.
interface_name :
interface_name.
node_name :
node_name.
gdce_interface_drops
BETA
(project)
gdce_interface_drops
GAUGE , DOUBLE , 1
k8s_pod
Information about NIS interface drops. Sampled every 60 seconds.
direction :
direction.
interface_name :
interface_name.
node_name :
node_name.
gdce_interface_errors
BETA
(project)
gdce_interface_errors
GAUGE , DOUBLE , 1
k8s_pod
Information about NIS interface errors. Sampled every 60 seconds.
direction :
direction.
interface_name :
interface_name.
node_name :
node_name.
gdce_interface_packets
BETA
(project)
gdce_interface_packets
GAUGE , DOUBLE , 1
k8s_pod
Information about NIS interface packets. Sampled every 60 seconds.
direction :
direction.
interface_name :
interface_name.
node_name :
node_name.
gdce_nf_bandwidth_bytes
BETA
(project)
gdce_nf_bandwidth_bytes
GAUGE , DOUBLE , By
k8s_pod
Information about bytes processed by an interface. Sampled every 60 seconds.
cardinal_direction :
cardinal_direction.
data_direction :
data_direction.
interface_name :
interface_name.
gdce_nf_bandwidth_packets
BETA
(project)
gdce_nf_bandwidth_packets
GAUGE , DOUBLE , 1
k8s_pod
Information about packets processed by an interface. Sampled every 60 seconds.
cardinal_direction :
cardinal_direction.
data_direction :
data_direction.
interface_name :
interface_name.
gdce_nf_enforced_host_HugePages
BETA
(project)
gdce_nf_enforced_host_HugePages
GAUGE , DOUBLE , 1
k8s_pod
Information about NSCU huge pages. Sampled every 60 seconds.
node_name :
node_name.
size :
size.
gdce_nf_enforced_host_SysCtl
BETA
(project)
gdce_nf_enforced_host_SysCtl
GAUGE , DOUBLE , 1
k8s_pod
Information about NSCU sysctl. Sampled every 60 seconds.
node_name :
node_name.
sysctl_name :
sysctl_name.
sysctl_value :
sysctl_value.
gdce_nf_enforced_host_TotalIsolCpus
BETA
(project)
gdce_nf_enforced_host_TotalIsolCpus
GAUGE , DOUBLE , 1
k8s_pod
Total isolated CPUs per NSCU. Sampled every 60 seconds.
node_name :
node_name.
gdce_nf_enforced_host_kernelVariant
BETA
(project)
gdce_nf_enforced_host_kernelVariant
GAUGE , DOUBLE , 1
k8s_pod
Information about NSCU kernel variants. Sampled every 60 seconds.
kernel_variant :
kernel_variant.
node_name :
node_name.
gdce_nf_enforced_host_kubeletCpuManager
BETA
(project)
gdce_nf_enforced_host_kubeletCpuManager
GAUGE , DOUBLE , 1
k8s_pod
Information about NSCU kubelet cpu managers. Sampled every 60 seconds.
cpu_manager :
cpu_manager.
node_name :
node_name.
gdce_nf_enforced_host_kubeletTopologyManager
BETA
(project)
gdce_nf_enforced_host_kubeletTopologyManager
GAUGE , DOUBLE , 1
k8s_pod
Information about NSCU kubelet topology manager policies. Sampled every 60 seconds.
node_name :
node_name.
topology_manager_policy :
topology_manager_policy.
gdce_nf_enforced_host_vlan_customroute
BETA
(project)
gdce_nf_enforced_host_vlan_customroute
GAUGE , DOUBLE , 1
k8s_pod
Information about CNIC routes. Sampled every 60 seconds.
dst_prefix :
dst_prefix.
name :
name.
next_hop :
next_hop.
node_name :
node_name.
gdce_nf_enforced_host_vlan_interfaces
BETA
(project)
gdce_nf_enforced_host_vlan_interfaces
GAUGE , DOUBLE , 1
k8s_pod
Information about CNIC interfaces. Sampled every 60 seconds.
ip :
ip.
name :
name.
node_name :
node_name.
vlan_id :
vlan_id.
gdce_sriovnetworknodepolicy_interfaceMTU
BETA
(project)
gdce_sriovnetworknodepolicy_interfaceMTU
GAUGE , DOUBLE , 1
k8s_pod
Information about SRIOVNetworkNodePolicy MTU. Sampled every 60 seconds.
interface_name :
interface_name.
policy_name :
policy_name.
gdce_sriovnetworknodepolicy_numVFs
BETA
(project)
gdce_sriovnetworknodepolicy_numVFs
GAUGE , DOUBLE , 1
k8s_pod
Information about SRIOVNetworkNodePolicy VFs. Sampled every 60 seconds.
interface_name :
interface_name.
policy_name :
policy_name.
gdce_sriovnetworknodestate_numVFs
BETA
(project)
gdce_sriovnetworknodestate_numVFs
GAUGE , DOUBLE , 1
k8s_pod
Information about SRIOVNetworkNodeState VFs. Sampled every 60 seconds.
interface_name :
interface_name.
node_name :
node_name.
policy_name :
policy_name.
gdce_sriovnetworknodestate_status
BETA
(project)
gdce_sriovnetworknodestate_status
GAUGE , DOUBLE , 1
k8s_pod
Information about SRIOVNetworkNodeState SyncStatus. Sampled every 60 seconds.
node_name :
node_name.
sync_status :
sync_status.
get_token_count
ALPHA
(project)
get_token_count
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_node
Counter of total Token() requests to the alternate token source. Sampled every 60 seconds.
get_token_fail_count
ALPHA
(project)
get_token_fail_count
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_node
Counter of failed Token() requests to the alternate token source. Sampled every 60 seconds.
get_token_fail_count/counter
ALPHA
(project)
get_token_fail_count
CUMULATIVE , DOUBLE , 1
prometheus_target
Counter of failed Token() requests to the alternate token source. Sampled every 30 seconds.
gkeconnect_dialer_connection_attempts_total
ALPHA
(project)
gkeconnect_dialer_connection_attempts_total
CUMULATIVE , DOUBLE , 1
k8s_pod
Number of connection attempts to the GKE Connect API (googleapis.com). Sampled every 60 seconds.
gkeconnect_dialer_connection_errors_total
ALPHA
(project)
gkeconnect_dialer_connection_errors_total
CUMULATIVE , DOUBLE , 1
k8s_pod
Number of errors trying to connect to the GKE Connect API (googleapis.com). Sampled every 60 seconds.
gkeconnect_dialer_connections
ALPHA
(project)
gkeconnect_dialer_connections
GAUGE , DOUBLE , 1
k8s_pod
Number of connections established with the GKE Connect API (googleapis.com). Sampled every 60 seconds.
gkeconnect_http_request_duration_seconds
ALPHA
(project)
gkeconnect_http_request_duration_seconds
GAUGE , DOUBLE , s
k8s_pod
Duration of requests initiated by GKE Connect Agent to Kubernetes API Server. Sampled every 60 seconds.
method :
method.
quantile :
quantile.
gkeconnect_http_request_duration_seconds_count
ALPHA
(project)
gkeconnect_http_request_duration_seconds_count
CUMULATIVE , INT64 , 1
k8s_pod
Duration of requests initiated by GKE Connect Agent to Kubernetes API Server. Sampled every 60 seconds.
method :
method.
gkeconnect_http_request_duration_seconds_sum
ALPHA
(project)
gkeconnect_http_request_duration_seconds_sum
CUMULATIVE , DOUBLE , 1
k8s_pod
Duration of requests initiated by GKE Connect Agent to Kubernetes API Server. Sampled every 60 seconds.
method :
method.
gkeconnect_http_request_header_duration_seconds
ALPHA
(project)
gkeconnect_http_request_header_duration_seconds
GAUGE , DOUBLE , s
k8s_pod
Duration from when GKE Connect Agent sends request to when headers are returned by Kubernetes API Server. Sampled every 60 seconds.
method :
method.
quantile :
quantile.
gkeconnect_http_request_header_duration_seconds_count
ALPHA
(project)
gkeconnect_http_request_header_duration_seconds_count
CUMULATIVE , INT64 , 1
k8s_pod
Duration from when GKE Connect Agent sends request to when headers are returned by Kubernetes API Server. Sampled every 60 seconds.
method :
method.
gkeconnect_http_request_header_duration_seconds_sum
ALPHA
(project)
gkeconnect_http_request_header_duration_seconds_sum
CUMULATIVE , DOUBLE , 1
k8s_pod
Duration from when GKE Connect Agent sends request to when headers are returned by Kubernetes API Server. Sampled every 60 seconds.
method :
method.
gkeconnect_http_requests_total
ALPHA
(project)
gkeconnect_http_requests_total
CUMULATIVE , DOUBLE , 1
k8s_pod
Number of GKE Connect Agent requests to Kubernetes API Server. Sampled every 60 seconds.
method :
method.
status :
status.
go_cgo_go_to_c_calls_calls_total
ALPHA
(project)
go_cgo_go_to_c_calls_calls_total
CUMULATIVE , DOUBLE , 1
k8s_container
Count of calls made from Go to C by the current process. Sampled every 60 seconds.
go_gc_cycles_automatic_gc_cycles_total
ALPHA
(project)
go_gc_cycles_automatic_gc_cycles_total
CUMULATIVE , DOUBLE , 1
k8s_container
Count of completed GC cycles generated by the Go runtime. Sampled every 60 seconds.
go_gc_cycles_forced_gc_cycles_total
ALPHA
(project)
go_gc_cycles_forced_gc_cycles_total
CUMULATIVE , DOUBLE , 1
k8s_container
Count of completed GC cycles forced by the application. Sampled every 60 seconds.
go_gc_cycles_total_gc_cycles_total
ALPHA
(project)
go_gc_cycles_total_gc_cycles_total
CUMULATIVE , DOUBLE , 1
k8s_container
Count of all completed GC cycles. Sampled every 60 seconds.
go_gc_duration_seconds
ALPHA
(project)
go_gc_duration_seconds
GAUGE , DOUBLE , s
k8s_container
k8s_node
k8s_pod
A summary of the pause duration of garbage collection cycles. Sampled every 60 seconds.
quantile :
quantile.
go_gc_duration_seconds_count
ALPHA
(project)
go_gc_duration_seconds_count
CUMULATIVE , INT64 , 1
k8s_container
k8s_node
k8s_pod
A summary of the pause duration of garbage collection cycles. Sampled every 60 seconds.
go_gc_duration_seconds_sum
ALPHA
(project)
go_gc_duration_seconds_sum
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_node
k8s_pod
A summary of the pause duration of garbage collection cycles. Sampled every 60 seconds.
go_gc_heap_allocs_by_size_bytes_total
ALPHA
(project)
go_gc_heap_allocs_by_size_bytes_total
CUMULATIVE , DISTRIBUTION , By
k8s_container
Distribution of heap allocations by approximate size. Note that this does not include tiny objects as defined by /gc/heap/tiny/allocs:objects, only tiny blocks. Sampled every 60 seconds.
go_gc_heap_allocs_bytes_total
ALPHA
(project)
go_gc_heap_allocs_bytes_total
CUMULATIVE , DOUBLE , By
k8s_container
Cumulative sum of memory allocated to the heap by the application. Sampled every 60 seconds.
go_gc_heap_allocs_objects_total
ALPHA
(project)
go_gc_heap_allocs_objects_total
CUMULATIVE , DOUBLE , 1
k8s_container
Cumulative count of heap allocations triggered by the application. Note that this does not include tiny objects as defined by /gc/heap/tiny/allocs:objects, only tiny blocks. Sampled every 60 seconds.
go_gc_heap_frees_by_size_bytes_total
ALPHA
(project)
go_gc_heap_frees_by_size_bytes_total
CUMULATIVE , DISTRIBUTION , By
k8s_container
Distribution of freed heap allocations by approximate size. Note that this does not include tiny objects as defined by /gc/heap/tiny/allocs:objects, only tiny blocks. Sampled every 60 seconds.
go_gc_heap_frees_bytes_total
ALPHA
(project)
go_gc_heap_frees_bytes_total
CUMULATIVE , DOUBLE , By
k8s_container
Cumulative sum of heap memory freed by the garbage collector. Sampled every 60 seconds.
go_gc_heap_frees_objects_total
ALPHA
(project)
go_gc_heap_frees_objects_total
CUMULATIVE , DOUBLE , 1
k8s_container
Cumulative count of heap allocations whose storage was freed by the garbage collector. Note that this does not include tiny objects as defined by /gc/heap/tiny/allocs:objects, only tiny blocks. Sampled every 60 seconds.
go_gc_heap_goal_bytes
ALPHA
(project)
go_gc_heap_goal_bytes
GAUGE , DOUBLE , By
k8s_container
Heap size target for the end of the GC cycle. Sampled every 60 seconds.
go_gc_heap_objects_objects
ALPHA
(project)
go_gc_heap_objects_objects
GAUGE , DOUBLE , 1
k8s_container
Number of objects, live or unswept, occupying heap memory. Sampled every 60 seconds.
go_gc_heap_tiny_allocs_objects_total
ALPHA
(project)
go_gc_heap_tiny_allocs_objects_total
CUMULATIVE , DOUBLE , 1
k8s_container
Count of small allocations that are packed together into blocks. These allocations are counted separately from other allocations because each individual allocation is not tracked by the runtime, only their block. Each block is already accounted for in allocs-by-size and frees-by-size. Sampled every 60 seconds.
go_gc_limiter_last_enabled_gc_cycle
ALPHA
(project)
go_gc_limiter_last_enabled_gc_cycle
GAUGE , DOUBLE , 1
k8s_container
GC cycle the last time the GC CPU limiter was enabled. This metric is useful for diagnosing the root cause of an out-of-memory error, because the limiter trades memory for CPU time when the GC's CPU time gets too high. This is most likely to occur with use of SetMemoryLimit. The first GC cycle is cycle 1, so a value of 0 indicates that it was never enabled. Sampled every 60 seconds.
go_gc_pauses_seconds_total
ALPHA
(project)
go_gc_pauses_seconds_total
CUMULATIVE , DISTRIBUTION , s
k8s_container
Distribution individual GC-related stop-the-world pause latencies. Sampled every 60 seconds.
go_gc_stack_starting_size_bytes
ALPHA
(project)
go_gc_stack_starting_size_bytes
GAUGE , DOUBLE , By
k8s_container
The stack size of new goroutines. Sampled every 60 seconds.
go_goroutines
ALPHA
(project)
go_goroutines
GAUGE , DOUBLE , 1
k8s_container
k8s_node
k8s_pod
Number of goroutines that currently exist. Sampled every 60 seconds.
go_goroutines/gauge
ALPHA
(project)
go_goroutines
GAUGE , DOUBLE , 1
prometheus_target
Number of goroutines that currently exist. Sampled every 30 seconds.
go_info
ALPHA
(project)
go_info
GAUGE , DOUBLE , 1
k8s_container
k8s_node
k8s_pod
Information about the Go environment. Sampled every 60 seconds.
exported_version :
exported_version.
version :
version.
go_info/gauge
ALPHA
(project)
go_info
GAUGE , DOUBLE , 1
prometheus_target
Information about the Go environment. Sampled every 30 seconds.
version :
version.
go_memory_classes_heap_free_bytes
ALPHA
(project)
go_memory_classes_heap_free_bytes
GAUGE , DOUBLE , By
k8s_container
Memory that is completely free and eligible to be returned to the underlying system, but has not been. This metric is the runtime's estimate of free address space that is backed by physical memory. Sampled every 60 seconds.
go_memory_classes_heap_objects_bytes
ALPHA
(project)
go_memory_classes_heap_objects_bytes
GAUGE , DOUBLE , By
k8s_container
Memory occupied by live objects and dead objects that have not yet been marked free by the garbage collector. Sampled every 60 seconds.
go_memory_classes_heap_released_bytes
ALPHA
(project)
go_memory_classes_heap_released_bytes
GAUGE , DOUBLE , By
k8s_container
Memory that is completely free and has been returned to the underlying system. This metric is the runtime's estimate of free address space that is still mapped into the process, but is not backed by physical memory. Sampled every 60 seconds.
go_memory_classes_heap_stacks_bytes
ALPHA
(project)
go_memory_classes_heap_stacks_bytes
GAUGE , DOUBLE , By
k8s_container
Memory allocated from the heap that is reserved for stack space, whether or not it is currently in-use. Sampled every 60 seconds.
go_memory_classes_heap_unused_bytes
ALPHA
(project)
go_memory_classes_heap_unused_bytes
GAUGE , DOUBLE , By
k8s_container
Memory that is reserved for heap objects but is not currently used to hold heap objects. Sampled every 60 seconds.
go_memory_classes_metadata_mcache_free_bytes
ALPHA
(project)
go_memory_classes_metadata_mcache_free_bytes
GAUGE , DOUBLE , By
k8s_container
Memory that is reserved for runtime mcache structures, but not in-use. Sampled every 60 seconds.
go_memory_classes_metadata_mcache_inuse_bytes
ALPHA
(project)
go_memory_classes_metadata_mcache_inuse_bytes
GAUGE , DOUBLE , By
k8s_container
Memory that is occupied by runtime mcache structures that are currently being used. Sampled every 60 seconds.
go_memory_classes_metadata_mspan_free_bytes
ALPHA
(project)
go_memory_classes_metadata_mspan_free_bytes
GAUGE , DOUBLE , By
k8s_container
Memory that is reserved for runtime mspan structures, but not in-use. Sampled every 60 seconds.
go_memory_classes_metadata_mspan_inuse_bytes
ALPHA
(project)
go_memory_classes_metadata_mspan_inuse_bytes
GAUGE , DOUBLE , By
k8s_container
Memory that is occupied by runtime mspan structures that are currently being used. Sampled every 60 seconds.
go_memory_classes_metadata_other_bytes
ALPHA
(project)
go_memory_classes_metadata_other_bytes
GAUGE , DOUBLE , By
k8s_container
Memory that is reserved for or used to hold runtime metadata. Sampled every 60 seconds.
go_memory_classes_os_stacks_bytes
ALPHA
(project)
go_memory_classes_os_stacks_bytes
GAUGE , DOUBLE , By
k8s_container
Stack memory allocated by the underlying operating system. Sampled every 60 seconds.
go_memory_classes_other_bytes
ALPHA
(project)
go_memory_classes_other_bytes
GAUGE , DOUBLE , By
k8s_container
Memory used by execution trace buffers, structures for debugging the runtime, finalizer and profiler specials, and more. Sampled every 60 seconds.
go_memory_classes_profiling_buckets_bytes
ALPHA
(project)
go_memory_classes_profiling_buckets_bytes
GAUGE , DOUBLE , By
k8s_container
Memory that is used by the stack trace hash map used for profiling. Sampled every 60 seconds.
go_memory_classes_total_bytes
ALPHA
(project)
go_memory_classes_total_bytes
GAUGE , DOUBLE , By
k8s_container
All memory mapped by the Go runtime into the current process as read-write. Note that this does not include memory mapped by code called via cgo or via the syscall package. Sum of all metrics in /memory/classes. Sampled every 60 seconds.
go_memstats_alloc_bytes
ALPHA
(project)
go_memstats_alloc_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
k8s_pod
Number of bytes allocated and still in use. Sampled every 60 seconds.
go_memstats_alloc_bytes/gauge
ALPHA
(project)
go_memstats_alloc_bytes
GAUGE , DOUBLE , By
prometheus_target
Number of bytes allocated and still in use. Sampled every 30 seconds.
go_memstats_alloc_bytes_total
ALPHA
(project)
go_memstats_alloc_bytes_total
CUMULATIVE , DOUBLE , By
k8s_container
k8s_node
k8s_pod
Total number of bytes allocated, even if freed. Sampled every 60 seconds.
go_memstats_buck_hash_sys_bytes
ALPHA
(project)
go_memstats_buck_hash_sys_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
k8s_pod
Number of bytes used by the profiling bucket hash table. Sampled every 60 seconds.
go_memstats_frees_total
ALPHA
(project)
go_memstats_frees_total
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_node
k8s_pod
Total number of frees. Sampled every 60 seconds.
go_memstats_gc_cpu_fraction
ALPHA
(project)
go_memstats_gc_cpu_fraction
GAUGE , DOUBLE , 1
k8s_container
k8s_node
k8s_pod
The fraction of this program's available CPU time used by the GC since the program started. Sampled every 60 seconds.
go_memstats_gc_cpu_fraction/gauge
ALPHA
(project)
go_memstats_gc_cpu_fraction
GAUGE , DOUBLE , 1
prometheus_target
The fraction of this program's available CPU time used by the GC since the program started. Sampled every 30 seconds.
go_memstats_gc_sys_bytes
ALPHA
(project)
go_memstats_gc_sys_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
k8s_pod
Number of bytes used for garbage collection system metadata. Sampled every 60 seconds.
go_memstats_heap_alloc_bytes
ALPHA
(project)
go_memstats_heap_alloc_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
k8s_pod
Number of heap bytes allocated and still in use. Sampled every 60 seconds.
go_memstats_heap_alloc_bytes/gauge
ALPHA
(project)
go_memstats_heap_alloc_bytes
GAUGE , DOUBLE , By
prometheus_target
Number of heap bytes allocated and still in use. Sampled every 30 seconds.
go_memstats_heap_idle_bytes
ALPHA
(project)
go_memstats_heap_idle_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
k8s_pod
Number of heap bytes waiting to be used. Sampled every 60 seconds.
go_memstats_heap_inuse_bytes
ALPHA
(project)
go_memstats_heap_inuse_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
k8s_pod
Number of heap bytes that are in use. Sampled every 60 seconds.
go_memstats_heap_objects
ALPHA
(project)
go_memstats_heap_objects
GAUGE , DOUBLE , 1
k8s_container
k8s_node
k8s_pod
Number of allocated objects. Sampled every 60 seconds.
go_memstats_heap_objects/gauge
ALPHA
(project)
go_memstats_heap_objects
GAUGE , DOUBLE , 1
prometheus_target
Number of allocated objects. Sampled every 30 seconds.
go_memstats_heap_released_bytes
ALPHA
(project)
go_memstats_heap_released_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
k8s_pod
Number of heap bytes released to OS. Sampled every 60 seconds.
go_memstats_heap_released_bytes_total
ALPHA
(project)
go_memstats_heap_released_bytes_total
CUMULATIVE , DOUBLE , By
k8s_container
Total number of heap bytes released to OS. Sampled every 60 seconds.
go_memstats_heap_sys_bytes
ALPHA
(project)
go_memstats_heap_sys_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
k8s_pod
Number of heap bytes obtained from system. Sampled every 60 seconds.
go_memstats_last_gc_time_seconds
ALPHA
(project)
go_memstats_last_gc_time_seconds
GAUGE , DOUBLE , s
k8s_container
k8s_node
k8s_pod
Number of seconds since 1970 of last garbage collection. Sampled every 60 seconds.
go_memstats_last_gc_time_seconds/gauge
ALPHA
(project)
go_memstats_last_gc_time_seconds
GAUGE , DOUBLE , s
prometheus_target
Number of seconds since 1970 of last garbage collection. Sampled every 30 seconds.
go_memstats_lookups_total
ALPHA
(project)
go_memstats_lookups_total
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_node
k8s_pod
Total number of pointer lookups. Sampled every 60 seconds.
go_memstats_mallocs_total
ALPHA
(project)
go_memstats_mallocs_total
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_node
k8s_pod
Total number of mallocs. Sampled every 60 seconds.
go_memstats_mcache_inuse_bytes
ALPHA
(project)
go_memstats_mcache_inuse_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
k8s_pod
Number of bytes in use by mcache structures. Sampled every 60 seconds.
go_memstats_mcache_sys_bytes
ALPHA
(project)
go_memstats_mcache_sys_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
k8s_pod
Number of bytes used for mcache structures obtained from system. Sampled every 60 seconds.
go_memstats_mspan_inuse_bytes
ALPHA
(project)
go_memstats_mspan_inuse_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
k8s_pod
Number of bytes in use by mspan structures. Sampled every 60 seconds.
go_memstats_mspan_sys_bytes
ALPHA
(project)
go_memstats_mspan_sys_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
k8s_pod
Number of bytes used for mspan structures obtained from system. Sampled every 60 seconds.
go_memstats_next_gc_bytes
ALPHA
(project)
go_memstats_next_gc_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
k8s_pod
Number of heap bytes when next garbage collection will take place. Sampled every 60 seconds.
go_memstats_other_sys_bytes
ALPHA
(project)
go_memstats_other_sys_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
k8s_pod
Number of bytes used for other system allocations. Sampled every 60 seconds.
go_memstats_stack_inuse_bytes
ALPHA
(project)
go_memstats_stack_inuse_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
k8s_pod
Number of bytes in use by the stack allocator. Sampled every 60 seconds.
go_memstats_stack_sys_bytes
ALPHA
(project)
go_memstats_stack_sys_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
k8s_pod
Number of bytes obtained from system for stack allocator. Sampled every 60 seconds.
go_memstats_sys_bytes
ALPHA
(project)
go_memstats_sys_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
k8s_pod
Number of bytes obtained from system. Sampled every 60 seconds.
go_sched_gomaxprocs_threads
ALPHA
(project)
go_sched_gomaxprocs_threads
GAUGE , DOUBLE , 1
k8s_container
The current runtime.GOMAXPROCS setting, or the number of operating system threads that can execute user-level Go code simultaneously. Sampled every 60 seconds.
go_sched_gomaxprocs_threads/gauge
ALPHA
(project)
go_sched_gomaxprocs_threads
GAUGE , DOUBLE , 1
prometheus_target
The current runtime.GOMAXPROCS setting, or the number of operating system threads that can execute user-level Go code simultaneously. Sampled every 30 seconds.
go_sched_goroutines_goroutines
ALPHA
(project)
go_sched_goroutines_goroutines
GAUGE , DOUBLE , 1
k8s_container
Count of live goroutines. Sampled every 60 seconds.
go_sched_goroutines_goroutines/gauge
ALPHA
(project)
go_sched_goroutines_goroutines
GAUGE , DOUBLE , 1
prometheus_target
Count of live goroutines. Sampled every 30 seconds.
go_sched_latencies_seconds
ALPHA
(project)
go_sched_latencies_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
Distribution of the time goroutines have spent in the scheduler in a runnable state before actually running. Sampled every 60 seconds.
go_threads
ALPHA
(project)
go_threads
GAUGE , DOUBLE , 1
k8s_container
k8s_node
k8s_pod
Number of OS threads created. Sampled every 60 seconds.
go_threads/gauge
ALPHA
(project)
go_threads
GAUGE , DOUBLE , 1
prometheus_target
Number of OS threads created. Sampled every 30 seconds.
grpc_client_handled_total
ALPHA
(project)
grpc_client_handled_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of RPCs completed by the client, regardless of success or failure. Sampled every 60 seconds.
grpc_code :
grpc_code.
grpc_method :
grpc_method.
grpc_service :
grpc_service.
grpc_type :
grpc_type.
grpc_client_handled_total/counter
ALPHA
(project)
grpc_client_handled_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Total number of RPCs completed by the client, regardless of success or failure. Sampled every 30 seconds.
grpc_code :
grpc_code.
grpc_method :
grpc_method.
grpc_service :
grpc_service.
grpc_type :
grpc_type.
grpc_client_msg_received_total
ALPHA
(project)
grpc_client_msg_received_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of RPC stream messages received by the client. Sampled every 60 seconds.
grpc_method :
grpc_method.
grpc_service :
grpc_service.
grpc_type :
grpc_type.
grpc_client_msg_received_total/counter
ALPHA
(project)
grpc_client_msg_received_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Total number of RPC stream messages received by the client. Sampled every 30 seconds.
grpc_method :
grpc_method.
grpc_service :
grpc_service.
grpc_type :
grpc_type.
grpc_client_msg_sent_total
ALPHA
(project)
grpc_client_msg_sent_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of gRPC stream messages sent by the client. Sampled every 60 seconds.
grpc_method :
grpc_method.
grpc_service :
grpc_service.
grpc_type :
grpc_type.
grpc_client_msg_sent_total/counter
ALPHA
(project)
grpc_client_msg_sent_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Total number of gRPC stream messages sent by the client. Sampled every 30 seconds.
grpc_method :
grpc_method.
grpc_service :
grpc_service.
grpc_type :
grpc_type.
grpc_client_started_total
ALPHA
(project)
grpc_client_started_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of RPCs started on the client. Sampled every 60 seconds.
grpc_method :
grpc_method.
grpc_service :
grpc_service.
grpc_type :
grpc_type.
grpc_client_started_total/counter
ALPHA
(project)
grpc_client_started_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Total number of RPCs started on the client. Sampled every 30 seconds.
grpc_method :
grpc_method.
grpc_service :
grpc_service.
grpc_type :
grpc_type.
grpc_io_client_completed_rpcs
ALPHA
(project)
grpc_io_client_completed_rpcs
CUMULATIVE , DOUBLE , 1
k8s_container
Count of RPCs by method and status. Sampled every 60 seconds.
grpc_client_method :
grpc_client_method.
grpc_client_status :
grpc_client_status.
grpc_io_client_received_bytes_per_rpc
ALPHA
(project)
grpc_io_client_received_bytes_per_rpc
CUMULATIVE , DISTRIBUTION , 1
k8s_container
Distribution of bytes received per RPC, by method. Sampled every 60 seconds.
grpc_client_method :
grpc_client_method.
grpc_client_status :
grpc_client_status.
grpc_io_client_roundtrip_latency
ALPHA
(project)
grpc_io_client_roundtrip_latency
CUMULATIVE , DISTRIBUTION , 1
k8s_container
Distribution of round-trip latency, by method. Sampled every 60 seconds.
grpc_client_method :
grpc_client_method.
grpc_client_status :
grpc_client_status.
grpc_io_client_sent_bytes_per_rpc
ALPHA
(project)
grpc_io_client_sent_bytes_per_rpc
CUMULATIVE , DISTRIBUTION , 1
k8s_container
Distribution of bytes sent per RPC, by method. Sampled every 60 seconds.
grpc_client_method :
grpc_client_method.
grpc_client_status :
grpc_client_status.
grpc_server_handled_total
ALPHA
(project)
grpc_server_handled_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of RPCs completed on the server, regardless of success or failure. Sampled every 60 seconds.
grpc_code :
grpc_code.
grpc_method :
grpc_method.
grpc_service :
grpc_service.
grpc_type :
grpc_type.
grpc_server_handled_total/counter
ALPHA
(project)
grpc_server_handled_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Total number of RPCs completed on the server, regardless of success or failure. Sampled every 30 seconds.
grpc_code :
grpc_code.
grpc_method :
grpc_method.
grpc_service :
grpc_service.
grpc_type :
grpc_type.
grpc_server_handling_seconds
ALPHA
(project)
grpc_server_handling_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
Histogram of response latency (seconds) of gRPC that had been application-level handled by the server. Sampled every 60 seconds.
grpc_method :
grpc_method.
grpc_service :
grpc_service.
grpc_type :
grpc_type.
grpc_server_msg_received_total
ALPHA
(project)
grpc_server_msg_received_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of RPC stream messages received on the server. Sampled every 60 seconds.
grpc_method :
grpc_method.
grpc_service :
grpc_service.
grpc_type :
grpc_type.
grpc_server_msg_received_total/counter
ALPHA
(project)
grpc_server_msg_received_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Total number of RPC stream messages received on the server. Sampled every 30 seconds.
grpc_method :
grpc_method.
grpc_service :
grpc_service.
grpc_type :
grpc_type.
grpc_server_msg_sent_total
ALPHA
(project)
grpc_server_msg_sent_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of gRPC stream messages sent by the server. Sampled every 60 seconds.
grpc_method :
grpc_method.
grpc_service :
grpc_service.
grpc_type :
grpc_type.
grpc_server_msg_sent_total/counter
ALPHA
(project)
grpc_server_msg_sent_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Total number of gRPC stream messages sent by the server. Sampled every 30 seconds.
grpc_method :
grpc_method.
grpc_service :
grpc_service.
grpc_type :
grpc_type.
grpc_server_started_total
ALPHA
(project)
grpc_server_started_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of RPCs started on the server. Sampled every 60 seconds.
grpc_method :
grpc_method.
grpc_service :
grpc_service.
grpc_type :
grpc_type.
grpc_server_started_total/counter
ALPHA
(project)
grpc_server_started_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Total number of RPCs started on the server. Sampled every 30 seconds.
grpc_method :
grpc_method.
grpc_service :
grpc_service.
grpc_type :
grpc_type.
healthcheck
ALPHA
(project)
Anthos Healthcheck Status
GAUGE , DOUBLE , 1
k8s_container
k8s_pod
Reports the status of a healthcheck. Sampled every 60 seconds.
healthcheck_name :
healthcheck_name.
healthcheck_severity :
healthcheck_severity.
healthcheck_status :
healthcheck_status.
healthcheck_type :
healthcheck_type.
healthcheck_version :
healthcheck_version.
monitored_component_name :
monitored_component_name.
monitored_component_namespace :
monitored_component_namespace.
monitored_component_version :
monitored_component_version.
horizontalpodautoscaler_adds
ALPHA
(project)
horizontalpodautoscaler_adds
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of adds handled by workqueue: horizontalpodautoscaler. Sampled every 60 seconds.
horizontalpodautoscaler_depth
ALPHA
(project)
horizontalpodautoscaler_depth
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) Current depth of workqueue: horizontalpodautoscaler. Sampled every 60 seconds.
horizontalpodautoscaler_longest_running_processor_microseconds
ALPHA
(project)
horizontalpodautoscaler_longest_running_processor_microseconds
GAUGE , DOUBLE , us
k8s_container
(Deprecated) How many microseconds has the longest running processor for horizontalpodautoscaler been running. Sampled every 60 seconds.
horizontalpodautoscaler_queue_latency
ALPHA
(project)
horizontalpodautoscaler_queue_latency
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuehorizontalpodautoscaler before being requested. Sampled every 60 seconds.
quantile :
quantile.
horizontalpodautoscaler_queue_latency_count
ALPHA
(project)
horizontalpodautoscaler_queue_latency_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long an item stays in workqueuehorizontalpodautoscaler before being requested. Sampled every 60 seconds.
horizontalpodautoscaler_queue_latency_sum
ALPHA
(project)
horizontalpodautoscaler_queue_latency_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuehorizontalpodautoscaler before being requested. Sampled every 60 seconds.
horizontalpodautoscaler_retries
ALPHA
(project)
horizontalpodautoscaler_retries
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of retries handled by workqueue: horizontalpodautoscaler. Sampled every 60 seconds.
horizontalpodautoscaler_unfinished_work_seconds
ALPHA
(project)
horizontalpodautoscaler_unfinished_work_seconds
GAUGE , DOUBLE , s
k8s_container
(Deprecated) How many seconds of work horizontalpodautoscaler has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases. Sampled every 60 seconds.
horizontalpodautoscaler_work_duration
ALPHA
(project)
horizontalpodautoscaler_work_duration
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuehorizontalpodautoscaler takes. Sampled every 60 seconds.
quantile :
quantile.
horizontalpodautoscaler_work_duration_count
ALPHA
(project)
horizontalpodautoscaler_work_duration_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long processing an item from workqueuehorizontalpodautoscaler takes. Sampled every 60 seconds.
horizontalpodautoscaler_work_duration_sum
ALPHA
(project)
horizontalpodautoscaler_work_duration_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuehorizontalpodautoscaler takes. Sampled every 60 seconds.
http_request_duration_microseconds
ALPHA
(project)
http_request_duration_microseconds
GAUGE , DOUBLE , us
k8s_container
k8s_node
The HTTP request latencies in microseconds. Sampled every 60 seconds.
handler :
handler.
quantile :
quantile.
http_request_duration_microseconds_count
ALPHA
(project)
http_request_duration_microseconds_count
CUMULATIVE , INT64 , 1
k8s_container
k8s_node
The HTTP request latencies in microseconds. Sampled every 60 seconds.
handler :
handler.
http_request_duration_microseconds_sum
ALPHA
(project)
http_request_duration_microseconds_sum
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_node
The HTTP request latencies in microseconds. Sampled every 60 seconds.
handler :
handler.
http_request_size_bytes
ALPHA
(project)
http_request_size_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
The HTTP request sizes in bytes. Sampled every 60 seconds.
handler :
handler.
quantile :
quantile.
http_request_size_bytes_count
ALPHA
(project)
http_request_size_bytes_count
CUMULATIVE , INT64 , 1
k8s_container
k8s_node
The HTTP request sizes in bytes. Sampled every 60 seconds.
handler :
handler.
http_request_size_bytes_sum
ALPHA
(project)
http_request_size_bytes_sum
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_node
The HTTP request sizes in bytes. Sampled every 60 seconds.
handler :
handler.
http_requests_total
ALPHA
(project)
http_requests_total
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_node
Total number of HTTP requests made. Sampled every 60 seconds.
code :
code.
handler :
handler.
method :
method.
http_response_size_bytes
ALPHA
(project)
http_response_size_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
The HTTP response sizes in bytes. Sampled every 60 seconds.
handler :
handler.
quantile :
quantile.
http_response_size_bytes_count
ALPHA
(project)
http_response_size_bytes_count
CUMULATIVE , INT64 , 1
k8s_container
k8s_node
The HTTP response sizes in bytes. Sampled every 60 seconds.
handler :
handler.
http_response_size_bytes_sum
ALPHA
(project)
http_response_size_bytes_sum
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_node
The HTTP response sizes in bytes. Sampled every 60 seconds.
handler :
handler.
job_adds
ALPHA
(project)
job_adds
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of adds handled by workqueue: job. Sampled every 60 seconds.
job_controller_job_finished_total
ALPHA
(project)
job_controller_job_finished_total
CUMULATIVE , DOUBLE , 1
k8s_container
The number of finished job. Sampled every 60 seconds.
completion_mode :
completion_mode.
result :
result.
job_controller_job_pods_finished_total
ALPHA
(project)
job_controller_job_pods_finished_total
CUMULATIVE , DOUBLE , 1
k8s_container
[ALPHA] The number of finished Pods that are fully tracked. Sampled every 60 seconds.
completion_mode :
completion_mode.
result :
result.
job_controller_job_sync_duration_seconds
ALPHA
(project)
job_controller_job_sync_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
The time it took to sync a job. Sampled every 60 seconds.
action :
action.
completion_mode :
completion_mode.
result :
result.
job_controller_job_sync_total
ALPHA
(project)
job_controller_job_sync_total
CUMULATIVE , DOUBLE , 1
k8s_container
The number of job syncs. Sampled every 60 seconds.
action :
action.
completion_mode :
completion_mode.
result :
result.
job_controller_rate_limiter_use
ALPHA
(project)
job_controller_rate_limiter_use
GAUGE , DOUBLE , 1
k8s_container
A metric measuring the saturation of the rate limiter for job_controller. Sampled every 60 seconds.
job_controller_rate_limiter_use/gauge
ALPHA
(project)
job_controller_rate_limiter_use
GAUGE , DOUBLE , 1
prometheus_target
A metric measuring the saturation of the rate limiter for job_controller. Sampled every 30 seconds.
job_depth
ALPHA
(project)
job_depth
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) Current depth of workqueue: job. Sampled every 60 seconds.
job_longest_running_processor_microseconds
ALPHA
(project)
job_longest_running_processor_microseconds
GAUGE , DOUBLE , us
k8s_container
(Deprecated) How many microseconds has the longest running processor for job been running. Sampled every 60 seconds.
job_queue_latency
ALPHA
(project)
job_queue_latency
GAUGE , DOUBLE , 1
k8s_container
How long an item stays in workqueuejob before being requested. Sampled every 60 seconds.
quantile :
quantile.
job_queue_latency_count
ALPHA
(project)
job_queue_latency_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long an item stays in workqueuejob before being requested. Sampled every 60 seconds.
job_queue_latency_sum
ALPHA
(project)
job_queue_latency_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuejob before being requested. Sampled every 60 seconds.
job_retries
ALPHA
(project)
job_retries
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of retries handled by workqueue: job. Sampled every 60 seconds.
job_unfinished_work_seconds
ALPHA
(project)
job_unfinished_work_seconds
GAUGE , DOUBLE , s
k8s_container
(Deprecated) How many seconds of work job has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases. Sampled every 60 seconds.
job_work_duration
ALPHA
(project)
job_work_duration
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuejob takes. Sampled every 60 seconds.
quantile :
quantile.
job_work_duration_count
ALPHA
(project)
job_work_duration_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long processing an item from workqueuejob takes. Sampled every 60 seconds.
job_work_duration_sum
ALPHA
(project)
job_work_duration_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuejob takes. Sampled every 60 seconds.
kube_apiserver_clusterip_allocator_allocated_ips
ALPHA
(project)
kube_apiserver_clusterip_allocator_allocated_ips
GAUGE , DOUBLE , 1
k8s_container
[ALPHA] Gauge measuring the number of allocated IPs for Services. Sampled every 60 seconds.
cidr :
cidr.
kube_apiserver_clusterip_allocator_allocation_total
ALPHA
(project)
kube_apiserver_clusterip_allocator_allocation_total
CUMULATIVE , DOUBLE , 1
k8s_container
[ALPHA] Number of Cluster IPs allocations. Sampled every 60 seconds.
cidr :
cidr.
scope :
scope.
kube_apiserver_clusterip_allocator_available_ips
ALPHA
(project)
kube_apiserver_clusterip_allocator_available_ips
GAUGE , DOUBLE , 1
k8s_container
[ALPHA] Gauge measuring the number of available IPs for Services. Sampled every 60 seconds.
cidr :
cidr.
kube_apiserver_pod_logs_pods_logs_backend_tls_failure_total
ALPHA
(project)
kube_apiserver_pod_logs_pods_logs_backend_tls_failure_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of requests for pods/logs that failed due to kubelet server TLS verification. Sampled every 60 seconds.
kube_apiserver_pod_logs_pods_logs_insecure_backend_total
ALPHA
(project)
kube_apiserver_pod_logs_pods_logs_insecure_backend_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of requests for pods/logs sliced by usage type: enforce_tls, skip_tls_allowed, skip_tls_denied. Sampled every 60 seconds.
usage :
usage.
kube_auto_repair_reason_total
ALPHA
(project)
kube_auto_repair_reason_total
CUMULATIVE , DOUBLE , 1
k8s_pod
Counter of repairs trigger per condition. Sampled every 60 seconds.
exported_namespace :
exported_namespace.
machinedeployment :
machinedeployment.
reason :
reason.
resource :
resource.
kube_auto_repair_trigger_latencies_seconds
ALPHA
(project)
kube_auto_repair_trigger_latencies_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_pod
Histogram of latencies for repair trigger on machines breaching threshold failure counts. Sampled every 60 seconds.
exported_namespace :
exported_namespace.
machinedeployment :
machinedeployment.
kube_certificatesigningrequest_annotations
ALPHA
(project)
kube_certificatesigningrequest_annotations
GAUGE , DOUBLE , 1
k8s_container
Kubernetes annotations converted to Prometheus labels. Sampled every 60 seconds.
certificatesigningrequest :
certificatesigningrequest.
signer_name :
signer_name.
kube_certificatesigningrequest_cert_length
ALPHA
(project)
kube_certificatesigningrequest_cert_length
GAUGE , DOUBLE , 1
k8s_container
Length of the issued cert. Sampled every 60 seconds.
certificatesigningrequest :
certificatesigningrequest.
signer_name :
signer_name.
kube_certificatesigningrequest_condition
ALPHA
(project)
kube_certificatesigningrequest_condition
GAUGE , DOUBLE , 1
k8s_container
The number of each certificatesigningrequest condition. Sampled every 60 seconds.
certificatesigningrequest :
certificatesigningrequest.
condition :
condition.
signer_name :
signer_name.
kube_certificatesigningrequest_created
ALPHA
(project)
kube_certificatesigningrequest_created
GAUGE , DOUBLE , 1
k8s_container
Unix creation timestamp. Sampled every 60 seconds.
certificatesigningrequest :
certificatesigningrequest.
signer_name :
signer_name.
kube_certificatesigningrequest_labels
ALPHA
(project)
kube_certificatesigningrequest_labels
GAUGE , DOUBLE , 1
k8s_container
Kubernetes labels converted to Prometheus labels. Sampled every 60 seconds.
certificatesigningrequest :
certificatesigningrequest.
signer_name :
signer_name.
kube_configmap_annotations
ALPHA
(project)
kube_configmap_annotations
GAUGE , DOUBLE , 1
k8s_container
Kubernetes annotations converted to Prometheus labels. Sampled every 60 seconds.
configmap :
configmap.
namespace :
namespace.
kube_configmap_created
ALPHA
(project)
kube_configmap_created
GAUGE , DOUBLE , 1
k8s_container
Unix creation timestamp. Sampled every 60 seconds.
configmap :
configmap.
namespace :
namespace.
kube_configmap_created/gauge
ALPHA
(project)
kube_configmap_created
GAUGE , DOUBLE , 1
prometheus_target
Unix creation timestamp. Sampled every 30 seconds.
configmap :
configmap.
kube_configmap_info
ALPHA
(project)
kube_configmap_info
GAUGE , DOUBLE , 1
k8s_container
Information about configmap. Sampled every 60 seconds.
configmap :
configmap.
namespace :
namespace.
kube_configmap_labels
ALPHA
(project)
kube_configmap_labels
GAUGE , DOUBLE , 1
k8s_container
Kubernetes labels converted to Prometheus labels. Sampled every 60 seconds.
configmap :
configmap.
namespace :
namespace.
kube_configmap_metadata_resource_version
ALPHA
(project)
kube_configmap_metadata_resource_version
GAUGE , DOUBLE , 1
k8s_container
Resource version representing a specific version of the configmap. Sampled every 60 seconds.
configmap :
configmap.
namespace :
namespace.
resource_version :
resource_version.
kube_cronjob_annotations
ALPHA
(project)
kube_cronjob_annotations
GAUGE , DOUBLE , 1
k8s_container
Kubernetes annotations converted to Prometheus labels. Sampled every 60 seconds.
cronjob :
cronjob.
namespace :
namespace.
kube_cronjob_created
ALPHA
(project)
kube_cronjob_created
GAUGE , DOUBLE , 1
k8s_container
Unix creation timestamp. Sampled every 60 seconds.
cronjob :
cronjob.
namespace :
namespace.
kube_cronjob_info
ALPHA
(project)
kube_cronjob_info
GAUGE , DOUBLE , 1
k8s_container
Info about cronjob. Sampled every 60 seconds.
concurrency_policy :
concurrency_policy.
cronjob :
cronjob.
namespace :
namespace.
schedule :
schedule.
kube_cronjob_labels
ALPHA
(project)
kube_cronjob_labels
GAUGE , DOUBLE , 1
k8s_container
Kubernetes labels converted to Prometheus labels. Sampled every 60 seconds.
cronjob :
cronjob.
namespace :
namespace.
kube_cronjob_metadata_resource_version
ALPHA
(project)
kube_cronjob_metadata_resource_version
GAUGE , DOUBLE , 1
k8s_container
Resource version representing a specific version of the cronjob. Sampled every 60 seconds.
cronjob :
cronjob.
namespace :
namespace.
kube_cronjob_next_schedule_time
ALPHA
(project)
kube_cronjob_next_schedule_time
GAUGE , DOUBLE , 1
k8s_container
Next time the cronjob should be scheduled. The time after lastScheduleTime, or after the cron job's creation time if it's never been scheduled. Use this to determine if the job is delayed. Sampled every 60 seconds.
cronjob :
cronjob.
namespace :
namespace.
kube_cronjob_spec_failed_job_history_limit
ALPHA
(project)
kube_cronjob_spec_failed_job_history_limit
GAUGE , DOUBLE , 1
k8s_container
Failed job history limit tells the controller how many failed jobs should be preserved. Sampled every 60 seconds.
cronjob :
cronjob.
namespace :
namespace.
kube_cronjob_spec_successful_job_history_limit
ALPHA
(project)
kube_cronjob_spec_successful_job_history_limit
GAUGE , DOUBLE , 1
k8s_container
Successful job history limit tells the controller how many completed jobs should be preserved. Sampled every 60 seconds.
cronjob :
cronjob.
namespace :
namespace.
kube_cronjob_spec_suspend
ALPHA
(project)
kube_cronjob_spec_suspend
GAUGE , DOUBLE , 1
k8s_container
Suspend flag tells the controller to suspend subsequent executions. Sampled every 60 seconds.
cronjob :
cronjob.
namespace :
namespace.
kube_cronjob_status_active
ALPHA
(project)
kube_cronjob_status_active
GAUGE , DOUBLE , 1
k8s_container
Active holds pointers to currently running jobs. Sampled every 60 seconds.
cronjob :
cronjob.
namespace :
namespace.
kube_cronjob_status_last_schedule_time
ALPHA
(project)
kube_cronjob_status_last_schedule_time
GAUGE , DOUBLE , 1
k8s_container
LastScheduleTime keeps information of when was the last time the job was successfully scheduled. Sampled every 60 seconds.
cronjob :
cronjob.
namespace :
namespace.
kube_daemonset_annotations
ALPHA
(project)
kube_daemonset_annotations
GAUGE , DOUBLE , 1
k8s_container
Kubernetes annotations converted to Prometheus labels. Sampled every 60 seconds.
daemonset :
daemonset.
namespace :
namespace.
kube_daemonset_created
ALPHA
(project)
kube_daemonset_created
GAUGE , DOUBLE , 1
k8s_container
Unix creation timestamp. Sampled every 60 seconds.
daemonset :
daemonset.
namespace :
namespace.
kube_daemonset_labels
ALPHA
(project)
kube_daemonset_labels
GAUGE , DOUBLE , 1
k8s_container
Kubernetes labels converted to Prometheus labels. Sampled every 60 seconds.
daemonset :
daemonset.
label_addons_gke_io_stackdriver :
label_addons_gke_io_stackdriver.
label_addons_k8s_io_monitoring :
label_addons_k8s_io_monitoring.
label_addons_sigs_k8s_io_Stackdriver :
label_addons_sigs_k8s_io_Stackdriver.
label_addons_sigs_k8s_io_stackdriver :
label_addons_sigs_k8s_io_stackdriver.
label_app :
label_app.
label_app_kubernetes_io_component :
label_app_kubernetes_io_component.
label_app_kubernetes_io_instance :
label_app_kubernetes_io_instance.
label_app_kubernetes_io_managed_by :
label_app_kubernetes_io_managed_by.
label_app_kubernetes_io_name :
label_app_kubernetes_io_name.
label_app_kubernetes_io_version :
label_app_kubernetes_io_version.
label_bundle_gke_io_component_name :
label_bundle_gke_io_component_name.
label_bundle_gke_io_component_version :
label_bundle_gke_io_component_version.
label_bundle_gke_io_package_deployment_name :
label_bundle_gke_io_package_deployment_name.
label_bundle_gke_io_package_deployment_namespace :
label_bundle_gke_io_package_deployment_namespace.
label_component :
label_component.
label_helm_sh_chart :
label_helm_sh_chart.
label_k8s_app :
label_k8s_app.
label_kubevirt_io :
label_kubevirt_io.
label_managed_by :
label_managed_by.
label_version :
label_version.
namespace :
namespace.
kube_daemonset_metadata_generation
ALPHA
(project)
kube_daemonset_metadata_generation
GAUGE , DOUBLE , 1
k8s_container
Sequence number representing a specific generation of the desired state. Sampled every 60 seconds.
daemonset :
daemonset.
namespace :
namespace.
kube_daemonset_status_current_number_scheduled
ALPHA
(project)
kube_daemonset_status_current_number_scheduled
GAUGE , DOUBLE , 1
k8s_container
(Deprecated since Anthos 1.11.0) The number of nodes running at least one daemon pod and are supposed to. Sampled every 60 seconds.
daemonset :
daemonset.
namespace :
namespace.
kube_daemonset_status_current_number_scheduled/gauge
ALPHA
(project)
kube_daemonset_status_current_number_scheduled
GAUGE , DOUBLE , 1
prometheus_target
(Deprecated since Anthos 1.11.0) The number of nodes running at least one daemon pod and are supposed to. Sampled every 30 seconds.
daemonset :
daemonset.
kube_daemonset_status_desired_number_scheduled
ALPHA
(project)
kube_daemonset_status_desired_number_scheduled
GAUGE , DOUBLE , 1
k8s_container
The number of nodes that should be running the daemon pod. Sampled every 60 seconds.
daemonset :
daemonset.
namespace :
namespace.
kube_daemonset_status_desired_number_scheduled/gauge
ALPHA
(project)
kube_daemonset_status_desired_number_scheduled
GAUGE , DOUBLE , 1
prometheus_target
The number of nodes that should be running the daemon pod. Sampled every 30 seconds.
daemonset :
daemonset.
kube_daemonset_status_number_available
ALPHA
(project)
kube_daemonset_status_number_available
GAUGE , DOUBLE , 1
k8s_container
The number of nodes that should be running the daemon pod and have one or more of the daemon pod running and available. Sampled every 60 seconds.
daemonset :
daemonset.
namespace :
namespace.
kube_daemonset_status_number_available/gauge
ALPHA
(project)
kube_daemonset_status_number_available
GAUGE , DOUBLE , 1
prometheus_target
The number of nodes that should be running the daemon pod and have one or more of the daemon pod running and available. Sampled every 30 seconds.
daemonset :
daemonset.
kube_daemonset_status_number_misscheduled
ALPHA
(project)
kube_daemonset_status_number_misscheduled
GAUGE , DOUBLE , 1
k8s_container
The number of nodes running a daemon pod but are not supposed to. Sampled every 60 seconds.
daemonset :
daemonset.
namespace :
namespace.
kube_daemonset_status_number_misscheduled/gauge
ALPHA
(project)
kube_daemonset_status_number_misscheduled
GAUGE , DOUBLE , 1
prometheus_target
The number of nodes running a daemon pod but are not supposed to. Sampled every 30 seconds.
daemonset :
daemonset.
kube_daemonset_status_number_ready
ALPHA
(project)
kube_daemonset_status_number_ready
GAUGE , DOUBLE , 1
k8s_container
The number of nodes that should be running the daemon pod and have one or more of the daemon pod running and ready. Sampled every 60 seconds.
daemonset :
daemonset.
namespace :
namespace.
kube_daemonset_status_number_ready/gauge
ALPHA
(project)
kube_daemonset_status_number_ready
GAUGE , DOUBLE , 1
prometheus_target
The number of nodes that should be running the daemon pod and have one or more of the daemon pod running and ready. Sampled every 30 seconds.
daemonset :
daemonset.
kube_daemonset_status_number_unavailable
ALPHA
(project)
kube_daemonset_status_number_unavailable
GAUGE , DOUBLE , 1
k8s_container
The number of nodes that should be running the daemon pod and have none of the daemon pod running and available. Sampled every 60 seconds.
daemonset :
daemonset.
namespace :
namespace.
kube_daemonset_status_number_unavailable/gauge
ALPHA
(project)
kube_daemonset_status_number_unavailable
GAUGE , DOUBLE , 1
prometheus_target
The number of nodes that should be running the daemon pod and have none of the daemon pod running and available. Sampled every 30 seconds.
daemonset :
daemonset.
kube_daemonset_status_observed_generation
ALPHA
(project)
kube_daemonset_status_observed_generation
GAUGE , DOUBLE , 1
k8s_container
The most recent generation observed by the daemon set controller. Sampled every 60 seconds.
daemonset :
daemonset.
namespace :
namespace.
kube_daemonset_status_updated_number_scheduled
ALPHA
(project)
kube_daemonset_status_updated_number_scheduled
GAUGE , DOUBLE , 1
k8s_container
The total number of nodes that are running updated daemon pod. Sampled every 60 seconds.
daemonset :
daemonset.
namespace :
namespace.
kube_daemonset_status_updated_number_scheduled/gauge
ALPHA
(project)
kube_daemonset_status_updated_number_scheduled
GAUGE , DOUBLE , 1
prometheus_target
The total number of nodes that are running updated daemon pod. Sampled every 30 seconds.
daemonset :
daemonset.
kube_daemonset_updated_number_scheduled
ALPHA
(project)
kube_daemonset_updated_number_scheduled
GAUGE , DOUBLE , 1
k8s_container
The total number of nodes that are running updated daemon pod. Sampled every 60 seconds.
daemonset :
daemonset.
namespace :
namespace.
kube_deployment_annotations
ALPHA
(project)
kube_deployment_annotations
GAUGE , DOUBLE , 1
k8s_container
Kubernetes annotations converted to Prometheus labels. Sampled every 60 seconds.
deployment :
deployment.
namespace :
namespace.
kube_deployment_created
ALPHA
(project)
kube_deployment_created
GAUGE , DOUBLE , 1
k8s_container
Unix creation timestamp. Sampled every 60 seconds.
deployment :
deployment.
namespace :
namespace.
kube_deployment_labels
ALPHA
(project)
kube_deployment_labels
GAUGE , DOUBLE , 1
k8s_container
Kubernetes labels converted to Prometheus labels. Sampled every 60 seconds.
deployment :
deployment.
label_addonmanager_kubernetes_io_mode :
label_addonmanager_kubernetes_io_mode.
label_addons_gke_io_metricsserver :
label_addons_gke_io_metricsserver.
label_addons_gke_io_stackdriver :
label_addons_gke_io_stackdriver.
label_addons_k8s_io_metricsserver :
label_addons_k8s_io_metricsserver.
label_addons_k8s_io_monitoring :
label_addons_k8s_io_monitoring.
label_addons_sigs_k8s_io_Stackdriver :
label_addons_sigs_k8s_io_Stackdriver.
label_addons_sigs_k8s_io_stackdriver :
label_addons_sigs_k8s_io_stackdriver.
label_api :
label_api.
label_app :
label_app.
label_app_kubernetes_io_component :
label_app_kubernetes_io_component.
label_app_kubernetes_io_instance :
label_app_kubernetes_io_instance.
label_app_kubernetes_io_managed_by :
label_app_kubernetes_io_managed_by.
label_app_kubernetes_io_name :
label_app_kubernetes_io_name.
label_app_kubernetes_io_version :
label_app_kubernetes_io_version.
label_bundle_gke_io_component_name :
label_bundle_gke_io_component_name.
label_bundle_gke_io_component_version :
label_bundle_gke_io_component_version.
label_bundle_gke_io_package_deployment_name :
label_bundle_gke_io_package_deployment_name.
label_bundle_gke_io_package_deployment_namespace :
label_bundle_gke_io_package_deployment_namespace.
label_cdi_kubevirt_io :
label_cdi_kubevirt_io.
label_chart :
label_chart.
label_cluster_level :
label_cluster_level.
label_cluster_x_k8s_io_provider :
label_cluster_x_k8s_io_provider.
label_clusterctl_cluster_x_k8s_io_lifecycle :
label_clusterctl_cluster_x_k8s_io_lifecycle.
label_cnrm_cloud_google_com_component :
label_cnrm_cloud_google_com_component.
label_cnrm_cloud_google_com_system :
label_cnrm_cloud_google_com_system.
label_component :
label_component.
label_configmanagement_gke_io_arch :
label_configmanagement_gke_io_arch.
label_configmanagement_gke_io_configmanagement :
label_configmanagement_gke_io_configmanagement.
label_configmanagement_gke_io_system :
label_configmanagement_gke_io_system.
label_control_plane :
label_control_plane.
label_gatekeeper_sh_operation :
label_gatekeeper_sh_operation.
label_gatekeeper_sh_system :
label_gatekeeper_sh_system.
label_gke_on_prem :
label_gke_on_prem.
label_heritage :
label_heritage.
label_hub_gke_io_project :
label_hub_gke_io_project.
label_io_cilium_app :
label_io_cilium_app.
label_istio :
label_istio.
label_k8s_app :
label_k8s_app.
label_kubernetes_io_name :
label_kubernetes_io_name.
label_kubevirt_io :
label_kubevirt_io.
label_managed_by :
label_managed_by.
label_monitored :
label_monitored.
label_name :
label_name.
label_operator_cdi_kubevirt_io_createVersion :
label_operator_cdi_kubevirt_io_createVersion.
label_policycontroller_configmanagement_gke_io :
label_policycontroller_configmanagement_gke_io.
label_release :
label_release.
label_serving_knative_dev_configuration :
label_serving_knative_dev_configuration.
label_serving_knative_dev_configurationGeneration :
label_serving_knative_dev_configurationGeneration.
label_serving_knative_dev_release :
label_serving_knative_dev_release.
label_serving_knative_dev_revision :
label_serving_knative_dev_revision.
label_serving_knative_dev_revisionUID :
label_serving_knative_dev_revisionUID.
label_serving_knative_dev_service :
label_serving_knative_dev_service.
label_tier :
label_tier.
label_version :
label_version.
namespace :
namespace.
kube_deployment_metadata_generation
ALPHA
(project)
kube_deployment_metadata_generation
GAUGE , DOUBLE , 1
k8s_container
Sequence number representing a specific generation of the desired state. Sampled every 60 seconds.
deployment :
deployment.
namespace :
namespace.
kube_deployment_metadata_generation/gauge
ALPHA
(project)
kube_deployment_metadata_generation
GAUGE , DOUBLE , 1
prometheus_target
Sequence number representing a specific generation of the desired state. Sampled every 30 seconds.
deployment :
deployment.
kube_deployment_spec_paused
ALPHA
(project)
kube_deployment_spec_paused
GAUGE , DOUBLE , 1
k8s_container
Whether the deployment is paused and will not be processed by the deployment controller. Sampled every 60 seconds.
deployment :
deployment.
namespace :
namespace.
kube_deployment_spec_replicas
ALPHA
(project)
kube_deployment_spec_replicas
GAUGE , DOUBLE , 1
k8s_container
Number of desired pods for a deployment. Sampled every 60 seconds.
deployment :
deployment.
namespace :
namespace.
kube_deployment_spec_replicas/gauge
ALPHA
(project)
kube_deployment_spec_replicas
GAUGE , DOUBLE , 1
prometheus_target
Number of desired pods for a deployment. Sampled every 30 seconds.
deployment :
deployment.
kube_deployment_spec_strategy_rollingupdate_max_surge
ALPHA
(project)
kube_deployment_spec_strategy_rollingupdate_max_surge
GAUGE , DOUBLE , 1
k8s_container
Maximum number of replicas that can be scheduled above the desired number of replicas during a rolling update of a deployment. Sampled every 60 seconds.
deployment :
deployment.
namespace :
namespace.
kube_deployment_spec_strategy_rollingupdate_max_unavailable
ALPHA
(project)
kube_deployment_spec_strategy_rollingupdate_max_unavailable
GAUGE , DOUBLE , 1
k8s_container
Maximum number of unavailable replicas during a rolling update of a deployment. Sampled every 60 seconds.
deployment :
deployment.
namespace :
namespace.
kube_deployment_status_condition
ALPHA
(project)
kube_deployment_status_condition
GAUGE , DOUBLE , 1
k8s_container
The current status conditions of a deployment. Sampled every 60 seconds.
condition :
condition.
deployment :
deployment.
namespace :
namespace.
status :
status.
kube_deployment_status_observed_generation
ALPHA
(project)
kube_deployment_status_observed_generation
GAUGE , DOUBLE , 1
k8s_container
The generation observed by the deployment controller. Sampled every 60 seconds.
deployment :
deployment.
namespace :
namespace.
kube_deployment_status_observed_generation/gauge
ALPHA
(project)
kube_deployment_status_observed_generation
GAUGE , DOUBLE , 1
prometheus_target
The generation observed by the deployment controller. Sampled every 30 seconds.
deployment :
deployment.
kube_deployment_status_replicas
ALPHA
(project)
kube_deployment_status_replicas
GAUGE , DOUBLE , 1
k8s_container
The number of replicas per deployment. Sampled every 60 seconds.
deployment :
deployment.
namespace :
namespace.
kube_deployment_status_replicas/gauge
ALPHA
(project)
kube_deployment_status_replicas
GAUGE , DOUBLE , 1
prometheus_target
The number of replicas per deployment. Sampled every 30 seconds.
deployment :
deployment.
kube_deployment_status_replicas_available
ALPHA
(project)
kube_deployment_status_replicas_available
GAUGE , DOUBLE , 1
k8s_container
The number of available replicas per deployment. Sampled every 60 seconds.
deployment :
deployment.
namespace :
namespace.
kube_deployment_status_replicas_available/gauge
ALPHA
(project)
kube_deployment_status_replicas_available
GAUGE , DOUBLE , 1
prometheus_target
The number of available replicas per deployment. Sampled every 30 seconds.
deployment :
deployment.
kube_deployment_status_replicas_ready
ALPHA
(project)
kube_deployment_status_replicas_ready
GAUGE , DOUBLE , 1
k8s_container
The number of ready replicas per deployment. Sampled every 60 seconds.
deployment :
deployment.
namespace :
namespace.
kube_deployment_status_replicas_unavailable
ALPHA
(project)
kube_deployment_status_replicas_unavailable
GAUGE , DOUBLE , 1
k8s_container
The number of unavailable replicas per deployment. Sampled every 60 seconds.
deployment :
deployment.
namespace :
namespace.
kube_deployment_status_replicas_unavailable/gauge
ALPHA
(project)
kube_deployment_status_replicas_unavailable
GAUGE , DOUBLE , 1
prometheus_target
The number of unavailable replicas per deployment. Sampled every 30 seconds.
deployment :
deployment.
kube_deployment_status_replicas_updated
ALPHA
(project)
kube_deployment_status_replicas_updated
GAUGE , DOUBLE , 1
k8s_container
The number of updated replicas per deployment. Sampled every 60 seconds.
deployment :
deployment.
namespace :
namespace.
kube_deployment_status_replicas_updated/gauge
ALPHA
(project)
kube_deployment_status_replicas_updated
GAUGE , DOUBLE , 1
prometheus_target
The number of updated replicas per deployment. Sampled every 30 seconds.
deployment :
deployment.
kube_endpoint_address_available
ALPHA
(project)
kube_endpoint_address_available
GAUGE , DOUBLE , 1
k8s_container
Number of addresses available in endpoint. Sampled every 60 seconds.
endpoint :
endpoint.
namespace :
namespace.
kube_endpoint_address_available/gauge
ALPHA
(project)
kube_endpoint_address_available
GAUGE , DOUBLE , 1
prometheus_target
Number of addresses available in endpoint. Sampled every 30 seconds.
endpoint :
endpoint.
kube_endpoint_address_not_ready
ALPHA
(project)
kube_endpoint_address_not_ready
GAUGE , DOUBLE , 1
k8s_container
Number of addresses not ready in endpoint. Sampled every 60 seconds.
endpoint :
endpoint.
namespace :
namespace.
kube_endpoint_address_not_ready/gauge
ALPHA
(project)
kube_endpoint_address_not_ready
GAUGE , DOUBLE , 1
prometheus_target
Number of addresses not ready in endpoint. Sampled every 30 seconds.
endpoint :
endpoint.
kube_endpoint_annotations
ALPHA
(project)
kube_endpoint_annotations
GAUGE , DOUBLE , 1
k8s_container
Kubernetes annotations converted to Prometheus labels. Sampled every 60 seconds.
endpoint :
endpoint.
namespace :
namespace.
kube_endpoint_created
ALPHA
(project)
kube_endpoint_created
GAUGE , DOUBLE , 1
k8s_container
Unix creation timestamp. Sampled every 60 seconds.
endpoint :
endpoint.
namespace :
namespace.
kube_endpoint_info
ALPHA
(project)
kube_endpoint_info
GAUGE , DOUBLE , 1
k8s_container
Information about endpoint. Sampled every 60 seconds.
endpoint :
endpoint.
namespace :
namespace.
kube_endpoint_labels
ALPHA
(project)
kube_endpoint_labels
GAUGE , DOUBLE , 1
k8s_container
Kubernetes labels converted to Prometheus labels. Sampled every 60 seconds.
endpoint :
endpoint.
label_addons_gke_io_metricsserver :
label_addons_gke_io_metricsserver.
label_addons_gke_io_stackdriver :
label_addons_gke_io_stackdriver.
label_addons_k8s_io_metricsserver :
label_addons_k8s_io_metricsserver.
label_addons_k8s_io_monitoring :
label_addons_k8s_io_monitoring.
label_addons_sigs_k8s_io_Stackdriver :
label_addons_sigs_k8s_io_Stackdriver.
label_addons_sigs_k8s_io_stackdriver :
label_addons_sigs_k8s_io_stackdriver.
label_app :
label_app.
label_app_kubernetes_io_component :
label_app_kubernetes_io_component.
label_app_kubernetes_io_instance :
label_app_kubernetes_io_instance.
label_app_kubernetes_io_managed_by :
label_app_kubernetes_io_managed_by.
label_app_kubernetes_io_name :
label_app_kubernetes_io_name.
label_app_kubernetes_io_version :
label_app_kubernetes_io_version.
label_autoscaling_knative_dev_kpa :
label_autoscaling_knative_dev_kpa.
label_bundle_gke_io_component_name :
label_bundle_gke_io_component_name.
label_bundle_gke_io_component_version :
label_bundle_gke_io_component_version.
label_bundle_gke_io_package_deployment_name :
label_bundle_gke_io_package_deployment_name.
label_bundle_gke_io_package_deployment_namespace :
label_bundle_gke_io_package_deployment_namespace.
label_cdi_kubevirt_io :
label_cdi_kubevirt_io.
label_chart :
label_chart.
label_cluster_x_k8s_io_provider :
label_cluster_x_k8s_io_provider.
label_clusterctl_cluster_x_k8s_io_lifecycle :
label_clusterctl_cluster_x_k8s_io_lifecycle.
label_cnrm_cloud_google_com_monitored :
label_cnrm_cloud_google_com_monitored.
label_cnrm_cloud_google_com_system :
label_cnrm_cloud_google_com_system.
label_component :
label_component.
label_configmanagement_gke_io_arch :
label_configmanagement_gke_io_arch.
label_configmanagement_gke_io_configmanagement :
label_configmanagement_gke_io_configmanagement.
label_configmanagement_gke_io_system :
label_configmanagement_gke_io_system.
label_control_plane :
label_control_plane.
label_endpointslice_kubernetes_io_skip_mirror :
label_endpointslice_kubernetes_io_skip_mirror.
label_gatekeeper_sh_system :
label_gatekeeper_sh_system.
label_gke_on_prem :
label_gke_on_prem.
label_heritage :
label_heritage.
label_hub_gke_io_project :
label_hub_gke_io_project.
label_istio :
label_istio.
label_k8s_app :
label_k8s_app.
label_kubernetes_io_cluster_service :
label_kubernetes_io_cluster_service.
label_kubernetes_io_name :
label_kubernetes_io_name.
label_kubevirt_io :
label_kubevirt_io.
label_managed_by :
label_managed_by.
label_monitored :
label_monitored.
label_networking_internal_knative_dev_serverlessservice :
label_networking_internal_knative_dev_serverlessservice.
label_networking_internal_knative_dev_serviceType :
label_networking_internal_knative_dev_serviceType.
label_operator_cdi_kubevirt_io_createVersion :
label_operator_cdi_kubevirt_io_createVersion.
label_operator_cdi_kubevirt_io_updateVersion :
label_operator_cdi_kubevirt_io_updateVersion.
label_policycontroller_configmanagement_gke_io :
label_policycontroller_configmanagement_gke_io.
label_release :
label_release.
label_role :
label_role.
label_serving_knative_dev_configuration :
label_serving_knative_dev_configuration.
label_serving_knative_dev_configurationGeneration :
label_serving_knative_dev_configurationGeneration.
label_serving_knative_dev_release :
label_serving_knative_dev_release.
label_serving_knative_dev_revision :
label_serving_knative_dev_revision.
label_serving_knative_dev_revisionUID :
label_serving_knative_dev_revisionUID.
label_serving_knative_dev_service :
label_serving_knative_dev_service.
label_tier :
label_tier.
label_version :
label_version.
namespace :
namespace.
kube_endpoint_ports
ALPHA
(project)
kube_endpoint_ports
GAUGE , DOUBLE , 1
k8s_container
Information about the Endpoint ports. Sampled every 60 seconds.
endpoint :
endpoint.
namespace :
namespace.
port_name :
port_name.
port_number :
port_number.
port_protocol :
port_protocol.
kube_horizontalpodautoscaler_annotations
ALPHA
(project)
kube_horizontalpodautoscaler_annotations
GAUGE , DOUBLE , 1
k8s_container
Kubernetes annotations converted to Prometheus labels. Sampled every 60 seconds.
horizontalpodautoscaler :
horizontalpodautoscaler.
namespace :
namespace.
kube_horizontalpodautoscaler_info
ALPHA
(project)
kube_horizontalpodautoscaler_info
GAUGE , DOUBLE , 1
k8s_container
Information about this autoscaler. Sampled every 60 seconds.
horizontalpodautoscaler :
horizontalpodautoscaler.
namespace :
namespace.
scaletargetref_api_version :
scaletargetref_api_version.
scaletargetref_kind :
scaletargetref_kind.
scaletargetref_name :
scaletargetref_name.
kube_horizontalpodautoscaler_labels
ALPHA
(project)
kube_horizontalpodautoscaler_labels
GAUGE , DOUBLE , 1
k8s_container
Kubernetes labels converted to Prometheus labels. Sampled every 60 seconds.
horizontalpodautoscaler :
horizontalpodautoscaler.
namespace :
namespace.
kube_horizontalpodautoscaler_metadata_generation
ALPHA
(project)
kube_horizontalpodautoscaler_metadata_generation
GAUGE , DOUBLE , 1
k8s_container
The generation observed by the HorizontalPodAutoscaler controller. Sampled every 60 seconds.
horizontalpodautoscaler :
horizontalpodautoscaler.
namespace :
namespace.
kube_horizontalpodautoscaler_spec_max_replicas
ALPHA
(project)
kube_horizontalpodautoscaler_spec_max_replicas
GAUGE , DOUBLE , 1
k8s_container
Upper limit for the number of pods that can be set by the autoscaler; cannot be smaller than MinReplicas. Sampled every 60 seconds.
horizontalpodautoscaler :
horizontalpodautoscaler.
namespace :
namespace.
kube_horizontalpodautoscaler_spec_max_replicas/gauge
ALPHA
(project)
kube_horizontalpodautoscaler_spec_max_replicas
GAUGE , DOUBLE , 1
prometheus_target
Upper limit for the number of pods that can be set by the autoscaler; cannot be smaller than MinReplicas. Sampled every 30 seconds.
horizontalpodautoscaler :
horizontalpodautoscaler.
kube_horizontalpodautoscaler_spec_min_replicas
ALPHA
(project)
kube_horizontalpodautoscaler_spec_min_replicas
GAUGE , DOUBLE , 1
k8s_container
Lower limit for the number of pods that can be set by the autoscaler, default 1. Sampled every 60 seconds.
horizontalpodautoscaler :
horizontalpodautoscaler.
namespace :
namespace.
kube_horizontalpodautoscaler_spec_min_replicas/gauge
ALPHA
(project)
kube_horizontalpodautoscaler_spec_min_replicas
GAUGE , DOUBLE , 1
prometheus_target
Lower limit for the number of pods that can be set by the autoscaler, default 1. Sampled every 30 seconds.
horizontalpodautoscaler :
horizontalpodautoscaler.
kube_horizontalpodautoscaler_spec_target_metric
ALPHA
(project)
kube_horizontalpodautoscaler_spec_target_metric
GAUGE , DOUBLE , 1
k8s_container
The metric specifications used by this autoscaler when calculating the desired replica count. Sampled every 60 seconds.
horizontalpodautoscaler :
horizontalpodautoscaler.
metric_name :
metric_name.
metric_target_type :
metric_target_type.
namespace :
namespace.
kube_horizontalpodautoscaler_spec_target_metric/gauge
ALPHA
(project)
kube_horizontalpodautoscaler_spec_target_metric
GAUGE , DOUBLE , 1
prometheus_target
The metric specifications used by this autoscaler when calculating the desired replica count. Sampled every 30 seconds.
horizontalpodautoscaler :
horizontalpodautoscaler.
metric_name :
metric_name.
metric_target_type :
metric_target_type.
kube_horizontalpodautoscaler_status_condition
ALPHA
(project)
kube_horizontalpodautoscaler_status_condition
GAUGE , DOUBLE , 1
k8s_container
The condition of this autoscaler. Sampled every 60 seconds.
condition :
condition.
horizontalpodautoscaler :
horizontalpodautoscaler.
namespace :
namespace.
status :
status.
kube_horizontalpodautoscaler_status_current_replicas
ALPHA
(project)
kube_horizontalpodautoscaler_status_current_replicas
GAUGE , DOUBLE , 1
k8s_container
Current number of replicas of pods managed by this autoscaler. Sampled every 60 seconds.
horizontalpodautoscaler :
horizontalpodautoscaler.
namespace :
namespace.
kube_horizontalpodautoscaler_status_current_replicas/gauge
ALPHA
(project)
kube_horizontalpodautoscaler_status_current_replicas
GAUGE , DOUBLE , 1
prometheus_target
Current number of replicas of pods managed by this autoscaler. Sampled every 30 seconds.
horizontalpodautoscaler :
horizontalpodautoscaler.
kube_horizontalpodautoscaler_status_desired_replicas
ALPHA
(project)
kube_horizontalpodautoscaler_status_desired_replicas
GAUGE , DOUBLE , 1
k8s_container
Desired number of replicas of pods managed by this autoscaler. Sampled every 60 seconds.
horizontalpodautoscaler :
horizontalpodautoscaler.
namespace :
namespace.
kube_horizontalpodautoscaler_status_desired_replicas/gauge
ALPHA
(project)
kube_horizontalpodautoscaler_status_desired_replicas
GAUGE , DOUBLE , 1
prometheus_target
Desired number of replicas of pods managed by this autoscaler. Sampled every 30 seconds.
horizontalpodautoscaler :
horizontalpodautoscaler.
kube_hpa_labels
ALPHA
(project)
kube_hpa_labels
GAUGE , DOUBLE , 1
k8s_container
Kubernetes labels converted to Prometheus labels. Sampled every 60 seconds.
hpa :
hpa.
label_app :
label_app.
label_bundle_gke_io_component_name :
label_bundle_gke_io_component_name.
label_bundle_gke_io_component_version :
label_bundle_gke_io_component_version.
label_bundle_gke_io_package_deployment_name :
label_bundle_gke_io_package_deployment_name.
label_bundle_gke_io_package_deployment_namespace :
label_bundle_gke_io_package_deployment_namespace.
namespace :
namespace.
kube_hpa_metadata_generation
ALPHA
(project)
kube_hpa_metadata_generation
GAUGE , DOUBLE , 1
k8s_container
The generation observed by the HorizontalPodAutoscaler controller. Sampled every 60 seconds.
hpa :
hpa.
namespace :
namespace.
kube_hpa_spec_max_replicas
ALPHA
(project)
kube_hpa_spec_max_replicas
GAUGE , DOUBLE , 1
k8s_container
Upper limit for the number of pods that can be set by the autoscaler; cannot be smaller than MinReplicas. Sampled every 60 seconds.
hpa :
hpa.
namespace :
namespace.
kube_hpa_spec_min_replicas
ALPHA
(project)
kube_hpa_spec_min_replicas
GAUGE , DOUBLE , 1
k8s_container
Lower limit for the number of pods that can be set by the autoscaler, default 1. Sampled every 60 seconds.
hpa :
hpa.
namespace :
namespace.
kube_hpa_spec_target_metric
ALPHA
(project)
kube_hpa_spec_target_metric
GAUGE , DOUBLE , 1
k8s_container
The metric specifications used by this autoscaler when calculating the desired replica count. Sampled every 60 seconds.
hpa :
hpa.
metric_name :
metric_name.
metric_target_type :
metric_target_type.
namespace :
namespace.
kube_hpa_status_condition
ALPHA
(project)
kube_hpa_status_condition
GAUGE , DOUBLE , 1
k8s_container
The condition of this autoscaler. Sampled every 60 seconds.
condition :
condition.
hpa :
hpa.
namespace :
namespace.
status :
status.
kube_hpa_status_current_replicas
ALPHA
(project)
kube_hpa_status_current_replicas
GAUGE , DOUBLE , 1
k8s_container
Current number of replicas of pods managed by this autoscaler. Sampled every 60 seconds.
hpa :
hpa.
namespace :
namespace.
kube_hpa_status_desired_replicas
ALPHA
(project)
kube_hpa_status_desired_replicas
GAUGE , DOUBLE , 1
k8s_container
Desired number of replicas of pods managed by this autoscaler. Sampled every 60 seconds.
hpa :
hpa.
namespace :
namespace.
kube_job_annotations
ALPHA
(project)
kube_job_annotations
GAUGE , DOUBLE , 1
k8s_container
Kubernetes annotations converted to Prometheus labels. Sampled every 60 seconds.
job_name :
job_name.
namespace :
namespace.
kube_job_complete
ALPHA
(project)
kube_job_complete
GAUGE , DOUBLE , 1
k8s_container
The job has completed its execution. Sampled every 60 seconds.
condition :
condition.
job_name :
job_name.
namespace :
namespace.
kube_job_created
ALPHA
(project)
kube_job_created
GAUGE , DOUBLE , 1
k8s_container
Unix creation timestamp. Sampled every 60 seconds.
job_name :
job_name.
namespace :
namespace.
kube_job_info
ALPHA
(project)
kube_job_info
GAUGE , DOUBLE , 1
k8s_container
Information about job. Sampled every 60 seconds.
job_name :
job_name.
namespace :
namespace.
kube_job_labels
ALPHA
(project)
kube_job_labels
GAUGE , DOUBLE , 1
k8s_container
Kubernetes labels converted to Prometheus labels. Sampled every 60 seconds.
job_name :
job_name.
label_BareMetalMachine_Name :
label_BareMetalMachine_Name.
label_Command :
label_Command.
label_app :
label_app.
label_baremetal_cluster_gke_io_check_name :
label_baremetal_cluster_gke_io_check_name.
label_controller_uid :
label_controller_uid.
label_machine :
label_machine.
label_networking_knative_dev_ingress_provider :
label_networking_knative_dev_ingress_provider.
label_serving_knative_dev_release :
label_serving_knative_dev_release.
namespace :
namespace.
kube_job_owner
ALPHA
(project)
kube_job_owner
GAUGE , DOUBLE , 1
k8s_container
Information about the Job's owner. Sampled every 60 seconds.
job_name :
job_name.
namespace :
namespace.
owner_is_controller :
owner_is_controller.
owner_kind :
owner_kind.
owner_name :
owner_name.
kube_job_spec_active_deadline_seconds
ALPHA
(project)
kube_job_spec_active_deadline_seconds
GAUGE , DOUBLE , s
k8s_container
The duration in seconds relative to the startTime that the job may be active before the system tries to terminate it. Sampled every 60 seconds.
job_name :
job_name.
namespace :
namespace.
kube_job_spec_completions
ALPHA
(project)
kube_job_spec_completions
GAUGE , DOUBLE , 1
k8s_container
The desired number of successfully finished pods the job should be run with. Sampled every 60 seconds.
job_name :
job_name.
namespace :
namespace.
kube_job_spec_parallelism
ALPHA
(project)
kube_job_spec_parallelism
GAUGE , DOUBLE , 1
k8s_container
The maximum desired number of pods the job should run at any given time. Sampled every 60 seconds.
job_name :
job_name.
namespace :
namespace.
kube_job_status_active
ALPHA
(project)
kube_job_status_active
GAUGE , DOUBLE , 1
k8s_container
The number of actively running pods. Sampled every 60 seconds.
job_name :
job_name.
namespace :
namespace.
kube_job_status_active/gauge
ALPHA
(project)
kube_job_status_active
GAUGE , DOUBLE , 1
prometheus_target
The number of actively running pods. Sampled every 30 seconds.
job_name :
job_name.
kube_job_status_completion_time
ALPHA
(project)
kube_job_status_completion_time
GAUGE , DOUBLE , 1
k8s_container
CompletionTime represents time when the job was completed. Sampled every 60 seconds.
job_name :
job_name.
namespace :
namespace.
kube_job_status_failed
ALPHA
(project)
kube_job_status_failed
GAUGE , DOUBLE , 1
k8s_container
The number of pods which reached Phase Failed and the reason for failure. Sampled every 60 seconds.
job_name :
job_name.
namespace :
namespace.
reason :
reason.
kube_job_status_failed/gauge
ALPHA
(project)
kube_job_status_failed
GAUGE , DOUBLE , 1
prometheus_target
The number of pods which reached Phase Failed and the reason for failure. Sampled every 30 seconds.
job_name :
job_name.
reason :
reason.
kube_job_status_start_time
ALPHA
(project)
kube_job_status_start_time
GAUGE , DOUBLE , 1
k8s_container
StartTime represents time when the job was acknowledged by the Job Manager. Sampled every 60 seconds.
job_name :
job_name.
namespace :
namespace.
kube_job_status_succeeded
ALPHA
(project)
kube_job_status_succeeded
GAUGE , DOUBLE , 1
k8s_container
The number of pods which reached Phase Succeeded. Sampled every 60 seconds.
job_name :
job_name.
namespace :
namespace.
kube_lease_owner
ALPHA
(project)
kube_lease_owner
GAUGE , DOUBLE , 1
k8s_container
Information about the Lease's owner. Sampled every 60 seconds.
lease :
lease.
owner_kind :
owner_kind.
owner_name :
owner_name.
kube_lease_renew_time
ALPHA
(project)
kube_lease_renew_time
GAUGE , DOUBLE , 1
k8s_container
Kube lease renew time. Sampled every 60 seconds.
lease :
lease.
kube_limitrange
ALPHA
(project)
kube_limitrange
GAUGE , DOUBLE , 1
k8s_container
Information about limit range. Sampled every 60 seconds.
constraint :
constraint.
limitrange :
limitrange.
namespace :
namespace.
resource :
resource.
type :
type.
kube_limitrange_created
ALPHA
(project)
kube_limitrange_created
GAUGE , DOUBLE , 1
k8s_container
Unix creation timestamp. Sampled every 60 seconds.
limitrange :
limitrange.
namespace :
namespace.
kube_machine_annotations
ALPHA
(project)
kube_machine_annotations
GAUGE , DOUBLE , 1
k8s_pod
Machine annotations information. Sampled every 60 seconds.
annotation_onprem_cluster_gke_io_repair_machine :
annotation_onprem_cluster_gke_io_repair_machine.
exported_namespace :
exported_namespace.
machine :
machine.
kube_machine_spec_provider_info
ALPHA
(project)
kube_machine_spec_provider_info
GAUGE , DOUBLE , 1
k8s_pod
Machine ProviderSpec information. Sampled every 60 seconds.
exported_namespace :
exported_namespace.
machine :
machine.
use_ipam :
use_ipam.
kube_machine_status_noderef
ALPHA
(project)
kube_machine_status_noderef
GAUGE , DOUBLE , 1
k8s_pod
Node information in the Machine. Sampled every 60 seconds.
exported_namespace :
exported_namespace.
machine :
machine.
node :
node.
kube_machinedeployment_spec_replicas
ALPHA
(project)
kube_machinedeployment_spec_replicas
GAUGE , DOUBLE , 1
k8s_pod
Number of replicas in MachineDeployment Spec. Sampled every 60 seconds.
exported_namespace :
exported_namespace.
machinedeployment :
machinedeployment.
kube_machinedeployment_spec_template_annotations
ALPHA
(project)
kube_machinedeployment_spec_template_annotations
GAUGE , DOUBLE , 1
k8s_pod
MachineDeployment Spec Template annotations information. Sampled every 60 seconds.
annotation_onprem_cluster_gke_io_gke_on_prem_version :
annotation_onprem_cluster_gke_io_gke_on_prem_version.
exported_namespace :
exported_namespace.
machinedeployment :
machinedeployment.
kube_mutatingwebhookconfiguration_created
ALPHA
(project)
kube_mutatingwebhookconfiguration_created
GAUGE , DOUBLE , 1
k8s_container
Unix creation timestamp. Sampled every 60 seconds.
mutatingwebhookconfiguration :
mutatingwebhookconfiguration.
kube_mutatingwebhookconfiguration_created/gauge
ALPHA
(project)
kube_mutatingwebhookconfiguration_created
GAUGE , DOUBLE , 1
prometheus_target
Unix creation timestamp. Sampled every 30 seconds.
mutatingwebhookconfiguration :
mutatingwebhookconfiguration.
kube_mutatingwebhookconfiguration_info
ALPHA
(project)
kube_mutatingwebhookconfiguration_info
GAUGE , DOUBLE , 1
k8s_container
Information about the MutatingWebhookConfiguration. Sampled every 60 seconds.
mutatingwebhookconfiguration :
mutatingwebhookconfiguration.
kube_mutatingwebhookconfiguration_metadata_resource_version
ALPHA
(project)
kube_mutatingwebhookconfiguration_metadata_resource_version
GAUGE , DOUBLE , 1
k8s_container
Resource version representing a specific version of the MutatingWebhookConfiguration. Sampled every 60 seconds.
mutatingwebhookconfiguration :
mutatingwebhookconfiguration.
kube_mutatingwebhookconfiguration_metadata_resource_version/gauge
ALPHA
(project)
kube_mutatingwebhookconfiguration_metadata_resource_version
GAUGE , DOUBLE , 1
prometheus_target
Resource version representing a specific version of the MutatingWebhookConfiguration. Sampled every 30 seconds.
mutatingwebhookconfiguration :
mutatingwebhookconfiguration.
kube_namespace_annotations
ALPHA
(project)
kube_namespace_annotations
GAUGE , DOUBLE , 1
k8s_container
Kubernetes annotations converted to Prometheus labels. Sampled every 60 seconds.
annotation_audit :
annotation_audit.
annotation_configmanagement_gke_io_managed :
annotation_configmanagement_gke_io_managed.
annotation_configmanagement_gke_io_source_path :
annotation_configmanagement_gke_io_source_path.
annotation_configmanagement_gke_io_token :
annotation_configmanagement_gke_io_token.
annotation_kubectl_kubernetes_io_last_applied_configuration :
annotation_kubectl_kubernetes_io_last_applied_configuration.
namespace :
namespace.
kube_namespace_annotations/gauge
ALPHA
(project)
kube_namespace_annotations
GAUGE , DOUBLE , 1
prometheus_target
Kubernetes annotations converted to Prometheus labels. Sampled every 30 seconds.
annotation_audit :
annotation_audit.
annotation_configmanagement_gke_io_managed :
annotation_configmanagement_gke_io_managed.
annotation_configmanagement_gke_io_source_path :
annotation_configmanagement_gke_io_source_path.
annotation_configmanagement_gke_io_token :
annotation_configmanagement_gke_io_token.
annotation_kubectl_kubernetes_io_last_applied_configuration :
annotation_kubectl_kubernetes_io_last_applied_configuration.
kube_namespace_created
ALPHA
(project)
kube_namespace_created
GAUGE , DOUBLE , 1
k8s_container
Unix creation timestamp. Sampled every 60 seconds.
namespace :
namespace.
kube_namespace_created/gauge
ALPHA
(project)
kube_namespace_created
GAUGE , DOUBLE , 1
prometheus_target
Unix creation timestamp. Sampled every 30 seconds.
kube_namespace_labels
ALPHA
(project)
kube_namespace_labels
GAUGE , DOUBLE , 1
k8s_container
Kubernetes labels converted to Prometheus labels. Sampled every 60 seconds.
label_addons_k8s_io_monitoring :
label_addons_k8s_io_monitoring.
label_admission_gatekeeper_sh_ignore :
label_admission_gatekeeper_sh_ignore.
label_app :
label_app.
label_app_kubernetes_io_managed_by :
label_app_kubernetes_io_managed_by.
label_audit_tree_hnc_x_k8s_io_depth :
label_audit_tree_hnc_x_k8s_io_depth.
label_bundle_gke_io_component_name :
label_bundle_gke_io_component_name.
label_bundle_gke_io_component_version :
label_bundle_gke_io_component_version.
label_bundle_gke_io_package_deployment_name :
label_bundle_gke_io_package_deployment_name.
label_bundle_gke_io_package_deployment_namespace :
label_bundle_gke_io_package_deployment_namespace.
label_cluster_x_k8s_io_provider :
label_cluster_x_k8s_io_provider.
label_clusterctl_cluster_x_k8s_io_lifecycle :
label_clusterctl_cluster_x_k8s_io_lifecycle.
label_cnrm_cloud_google_com_system :
label_cnrm_cloud_google_com_system.
label_config_sync_root_tree_hnc_x_k8s_io_depth :
label_config_sync_root_tree_hnc_x_k8s_io_depth.
label_configmanagement_gke_io_configmanagement :
label_configmanagement_gke_io_configmanagement.
label_configmanagement_gke_io_quota :
label_configmanagement_gke_io_quota.
label_configmanagement_gke_io_system :
label_configmanagement_gke_io_system.
label_control_plane :
label_control_plane.
label_env :
label_env.
label_gatekeeper_sh_system :
label_gatekeeper_sh_system.
label_gke_on_prem :
label_gke_on_prem.
label_hub_gke_io_project :
label_hub_gke_io_project.
label_k8s_app :
label_k8s_app.
label_kubernetes_io_metadata_name :
label_kubernetes_io_metadata_name.
label_name :
label_name.
label_online_tree_hnc_x_k8s_io_depth :
label_online_tree_hnc_x_k8s_io_depth.
label_openshift_io_cluster_monitoring :
label_openshift_io_cluster_monitoring.
label_policycontroller_configmanagement_gke_io :
label_policycontroller_configmanagement_gke_io.
label_serving_knative_dev_release :
label_serving_knative_dev_release.
label_shipping_app_backend_tree_hnc_x_k8s_io_depth :
label_shipping_app_backend_tree_hnc_x_k8s_io_depth.
label_shipping_dev_tree_hnc_x_k8s_io_depth :
label_shipping_dev_tree_hnc_x_k8s_io_depth.
label_shipping_prod_tree_hnc_x_k8s_io_depth :
label_shipping_prod_tree_hnc_x_k8s_io_depth.
label_shipping_staging_tree_hnc_x_k8s_io_depth :
label_shipping_staging_tree_hnc_x_k8s_io_depth.
label_version :
label_version.
namespace :
namespace.
kube_namespace_status_phase
ALPHA
(project)
kube_namespace_status_phase
GAUGE , DOUBLE , 1
k8s_container
kubernetes namespace status phase. Sampled every 60 seconds.
namespace :
namespace.
phase :
phase.
kube_namespace_status_phase/gauge
ALPHA
(project)
kube_namespace_status_phase
GAUGE , DOUBLE , 1
prometheus_target
kubernetes namespace status phase. Sampled every 30 seconds.
phase :
phase.
kube_networkpolicy_annotations
ALPHA
(project)
kube_networkpolicy_annotations
GAUGE , DOUBLE , 1
k8s_container
Kubernetes annotations converted to Prometheus labels. Sampled every 60 seconds.
namespace :
namespace.
networkpolicy :
networkpolicy.
kube_networkpolicy_created
ALPHA
(project)
kube_networkpolicy_created
GAUGE , DOUBLE , 1
k8s_container
Unix creation timestamp of network policy. Sampled every 60 seconds.
namespace :
namespace.
networkpolicy :
networkpolicy.
kube_networkpolicy_created/gauge
ALPHA
(project)
kube_networkpolicy_created
GAUGE , DOUBLE , 1
prometheus_target
Unix creation timestamp of network policy. Sampled every 30 seconds.
networkpolicy :
networkpolicy.
kube_networkpolicy_labels
ALPHA
(project)
kube_networkpolicy_labels
GAUGE , DOUBLE , 1
k8s_container
Kubernetes labels converted to Prometheus labels. Sampled every 60 seconds.
label_addons_gke_io_stackdriver :
label_addons_gke_io_stackdriver.
label_addons_sigs_k8s_io_stackdriver :
label_addons_sigs_k8s_io_stackdriver.
label_managed_by :
label_managed_by.
label_version :
label_version.
namespace :
namespace.
networkpolicy :
networkpolicy.
kube_networkpolicy_spec_egress_rules
ALPHA
(project)
kube_networkpolicy_spec_egress_rules
GAUGE , DOUBLE , 1
k8s_container
Number of egress rules on the networkpolicy. Sampled every 60 seconds.
namespace :
namespace.
networkpolicy :
networkpolicy.
kube_networkpolicy_spec_ingress_rules
ALPHA
(project)
kube_networkpolicy_spec_ingress_rules
GAUGE , DOUBLE , 1
k8s_container
Number of ingress rules on the networkpolicy. Sampled every 60 seconds.
namespace :
namespace.
networkpolicy :
networkpolicy.
kube_node_annotations
ALPHA
(project)
kube_node_annotations
GAUGE , DOUBLE , 1
k8s_container
Kubernetes annotations converted to Prometheus labels. Sampled every 60 seconds.
node :
node.
kube_node_created
ALPHA
(project)
kube_node_created
GAUGE , DOUBLE , 1
k8s_container
Unix creation timestamp. Sampled every 60 seconds.
node :
node.
kube_node_created/gauge
ALPHA
(project)
kube_node_created
GAUGE , DOUBLE , 1
prometheus_target
Unix creation timestamp. Sampled every 30 seconds.
node :
node.
kube_node_info
ALPHA
(project)
kube_node_info
GAUGE , DOUBLE , 1
k8s_container
Information about a cluster node. Sampled every 60 seconds.
container_runtime_version :
container_runtime_version.
internal_ip :
internal_ip.
kernel_version :
kernel_version.
kubelet_version :
kubelet_version.
kubeproxy_version :
kubeproxy_version.
node :
node.
os_image :
os_image.
pod_cidr :
pod_cidr.
provider_id :
provider_id.
system_uuid :
system_uuid.
kube_node_info/gauge
ALPHA
(project)
kube_node_info
GAUGE , DOUBLE , 1
prometheus_target
Information about a cluster node. Sampled every 30 seconds.
container_runtime_version :
container_runtime_version.
internal_ip :
internal_ip.
kernel_version :
kernel_version.
kubelet_version :
kubelet_version.
kubeproxy_version :
kubeproxy_version.
node :
node.
os_image :
os_image.
pod_cidr :
pod_cidr.
provider_id :
provider_id.
system_uuid :
system_uuid.
kube_node_labels
ALPHA
(project)
kube_node_labels
GAUGE , DOUBLE , 1
k8s_container
Kubernetes labels converted to Prometheus labels. Sampled every 60 seconds.
label_baremetal_cluster_gke_io_cgroup :
label_baremetal_cluster_gke_io_cgroup.
label_baremetal_cluster_gke_io_lbnode :
label_baremetal_cluster_gke_io_lbnode.
label_baremetal_cluster_gke_io_namespace :
label_baremetal_cluster_gke_io_namespace.
label_baremetal_cluster_gke_io_node_pool :
label_baremetal_cluster_gke_io_node_pool.
label_beta_kubernetes_io_arch :
label_beta_kubernetes_io_arch.
label_beta_kubernetes_io_os :
label_beta_kubernetes_io_os.
label_cpumanager :
label_cpumanager.
label_kubernetes_googleapis_com_cluster_name :
label_kubernetes_googleapis_com_cluster_name.
label_kubernetes_io_arch :
label_kubernetes_io_arch.
label_kubernetes_io_hostname :
label_kubernetes_io_hostname.
label_kubernetes_io_os :
label_kubernetes_io_os.
label_kubevirt_io_schedulable :
label_kubevirt_io_schedulable.
label_networking_gke_io_ang_node :
label_networking_gke_io_ang_node.
label_node_kubernetes_io_windows_build :
label_node_kubernetes_io_windows_build.
label_onprem_gke_io_failure_domain_name :
label_onprem_gke_io_failure_domain_name.
node :
node.
kube_node_labels/gauge
ALPHA
(project)
kube_node_labels
GAUGE , DOUBLE , 1
prometheus_target
Kubernetes labels converted to Prometheus labels. Sampled every 30 seconds.
label_baremetal_cluster_gke_io_cgroup :
label_baremetal_cluster_gke_io_cgroup.
label_baremetal_cluster_gke_io_lbnode :
label_baremetal_cluster_gke_io_lbnode.
label_baremetal_cluster_gke_io_namespace :
label_baremetal_cluster_gke_io_namespace.
label_baremetal_cluster_gke_io_node_pool :
label_baremetal_cluster_gke_io_node_pool.
label_beta_kubernetes_io_arch :
label_beta_kubernetes_io_arch.
label_beta_kubernetes_io_os :
label_beta_kubernetes_io_os.
label_cloud_google_com_gke_nodepool :
label_cloud_google_com_gke_nodepool.
label_cpumanager :
label_cpumanager.
label_kubernetes_googleapis_com_cluster_name :
label_kubernetes_googleapis_com_cluster_name.
label_kubernetes_io_arch :
label_kubernetes_io_arch.
label_kubernetes_io_hostname :
label_kubernetes_io_hostname.
label_kubernetes_io_os :
label_kubernetes_io_os.
label_kubevirt_io_schedulable :
label_kubevirt_io_schedulable.
label_networking_gke_io_ang_node :
label_networking_gke_io_ang_node.
label_node_kubernetes_io_windows_build :
label_node_kubernetes_io_windows_build.
label_onprem_gke_io_failure_domain_name :
label_onprem_gke_io_failure_domain_name.
node :
node.
kube_node_role
ALPHA
(project)
kube_node_role
GAUGE , DOUBLE , 1
k8s_container
The role of a cluster node. Sampled every 60 seconds.
node :
node.
role :
role.
kube_node_spec_taint
ALPHA
(project)
kube_node_spec_taint
GAUGE , DOUBLE , 1
k8s_container
The taint of a cluster node. Sampled every 60 seconds.
effect :
effect.
key :
key.
node :
node.
kube_node_spec_taint/gauge
ALPHA
(project)
kube_node_spec_taint
GAUGE , DOUBLE , 1
prometheus_target
The taint of a cluster node. Sampled every 30 seconds.
effect :
effect.
key :
key.
node :
node.
kube_node_spec_unschedulable
ALPHA
(project)
kube_node_spec_unschedulable
GAUGE , DOUBLE , 1
k8s_container
Whether a node can schedule new pods. Sampled every 60 seconds.
node :
node.
kube_node_spec_unschedulable/gauge
ALPHA
(project)
kube_node_spec_unschedulable
GAUGE , DOUBLE , 1
prometheus_target
Whether a node can schedule new pods. Sampled every 30 seconds.
node :
node.
kube_node_status_allocatable
ALPHA
(project)
kube_node_status_allocatable
GAUGE , DOUBLE , 1
k8s_container
The allocatable for different resources of a node that are available for scheduling. Sampled every 60 seconds.
node :
node.
resource :
resource.
unit :
unit.
kube_node_status_allocatable/gauge
ALPHA
(project)
kube_node_status_allocatable
GAUGE , DOUBLE , 1
prometheus_target
The allocatable for different resources of a node that are available for scheduling. Sampled every 30 seconds.
node :
node.
resource :
resource.
unit :
unit.
kube_node_status_allocatable_cpu_cores
ALPHA
(project)
kube_node_status_allocatable_cpu_cores
GAUGE , DOUBLE , 1
k8s_container
(Deprecated since Anthos 1.11.0) The CPU resources of a node that are available for scheduling. Sampled every 60 seconds.
node :
node.
kube_node_status_allocatable_memory_bytes
ALPHA
(project)
kube_node_status_allocatable_memory_bytes
GAUGE , DOUBLE , By
k8s_container
(Deprecated since Anthos 1.11.0) The memory resources of a node that are available for scheduling. Sampled every 60 seconds.
node :
node.
kube_node_status_allocatable_pods
ALPHA
(project)
kube_node_status_allocatable_pods
GAUGE , DOUBLE , 1
k8s_container
(Deprecated since Anthos 1.11.0) The pod resources of a node that are available for scheduling. Sampled every 60 seconds.
node :
node.
kube_node_status_capacity
ALPHA
(project)
kube_node_status_capacity
GAUGE , DOUBLE , 1
k8s_container
The capacity for different resources of a node. Sampled every 60 seconds.
node :
node.
resource :
resource.
unit :
unit.
kube_node_status_capacity/gauge
ALPHA
(project)
kube_node_status_capacity
GAUGE , DOUBLE , 1
prometheus_target
The capacity for different resources of a node. Sampled every 30 seconds.
node :
node.
resource :
resource.
unit :
unit.
kube_node_status_capacity_cpu_cores
ALPHA
(project)
kube_node_status_capacity_cpu_cores
GAUGE , DOUBLE , 1
k8s_container
(Deprecated since Anthos 1.11.0) The total CPU resources of the node. Sampled every 60 seconds.
node :
node.
kube_node_status_capacity_memory_bytes
ALPHA
(project)
kube_node_status_capacity_memory_bytes
GAUGE , DOUBLE , By
k8s_container
(Deprecated since Anthos 1.11.0) The total memory resources of the node. Sampled every 60 seconds.
node :
node.
kube_node_status_capacity_pods
ALPHA
(project)
kube_node_status_capacity_pods
GAUGE , DOUBLE , 1
k8s_container
(Deprecated since Anthos 1.11.0) The total pod resources of the node. Sampled every 60 seconds.
node :
node.
kube_node_status_condition
ALPHA
(project)
kube_node_status_condition
GAUGE , DOUBLE , 1
k8s_container
The condition of a cluster node. Sampled every 60 seconds.
condition :
condition.
node :
node.
status :
status.
kube_node_status_condition/gauge
ALPHA
(project)
kube_node_status_condition
GAUGE , DOUBLE , 1
prometheus_target
The condition of a cluster node. Sampled every 30 seconds.
condition :
condition.
node :
node.
status :
status.
kube_onpremadmincluster_spec_info
ALPHA
(project)
kube_onpremadmincluster_spec_info
GAUGE , DOUBLE , 1
k8s_pod
OnPremAdminCluster Spec information. Sampled every 60 seconds.
autoresize_enabled :
autoresize_enabled.
exported_namespace :
exported_namespace.
onpremadmincluster :
onpremadmincluster.
kube_onpremusercluster_spec_info
ALPHA
(project)
kube_onpremusercluster_spec_info
GAUGE , DOUBLE , 1
k8s_container
k8s_pod
OnPremUserCluster Spec information. Sampled every 60 seconds.
antiaffinitygroups_enabled :
antiaffinitygroups_enabled.
autorepair_enabled :
autorepair_enabled.
autoresize_enabled :
autoresize_enabled.
dpv2_enabled :
dpv2_enabled.
exported_namespace :
exported_namespace.
gcp_enrolled :
gcp_enrolled.
gkeonprem_version :
gkeonprem_version.
ipmode :
ipmode.
kubeceptionless :
kubeceptionless.
onpremusercluster :
onpremusercluster.
preparedcredentials :
preparedcredentials.
vmtracking_enabled :
vmtracking_enabled.
windowsdpv2_enabled :
windowsdpv2_enabled.
workloadidentity_enabled :
workloadidentity_enabled.
kube_onpremusercluster_status_condition_lasttransitiontime
ALPHA
(project)
kube_onpremusercluster_status_condition_lasttransitiontime
GAUGE , DOUBLE , 1
k8s_container
k8s_pod
Unix timestamp when onpremusercluster transitioned into the condition. Sampled every 60 seconds.
exported_namespace :
exported_namespace.
onpremusercluster :
onpremusercluster.
status :
status.
type :
type.
kube_persistentvolume_annotations
ALPHA
(project)
kube_persistentvolume_annotations
GAUGE , DOUBLE , 1
k8s_container
Kubernetes annotations converted to Prometheus labels. Sampled every 60 seconds.
persistentvolume :
persistentvolume.
kube_persistentvolume_capacity_bytes
ALPHA
(project)
kube_persistentvolume_capacity_bytes
GAUGE , DOUBLE , By
k8s_container
Persistentvolume capacity in bytes. Sampled every 60 seconds.
persistentvolume :
persistentvolume.
kube_persistentvolume_capacity_bytes/gauge
ALPHA
(project)
kube_persistentvolume_capacity_bytes
GAUGE , DOUBLE , By
prometheus_target
Persistentvolume capacity in bytes. Sampled every 30 seconds.
persistentvolume :
persistentvolume.
kube_persistentvolume_claim_ref
ALPHA
(project)
kube_persistentvolume_claim_ref
GAUGE , DOUBLE , 1
k8s_container
Information about the Persistent Volume Claim Reference. Sampled every 60 seconds.
claim_namespace :
claim_namespace.
name :
name.
persistentvolume :
persistentvolume.
kube_persistentvolume_claim_ref/gauge
ALPHA
(project)
kube_persistentvolume_claim_ref
GAUGE , DOUBLE , 1
prometheus_target
Information about the Persistent Volume Claim Reference. Sampled every 30 seconds.
claim_namespace :
claim_namespace.
name :
name.
persistentvolume :
persistentvolume.
kube_persistentvolume_info
ALPHA
(project)
kube_persistentvolume_info
GAUGE , DOUBLE , 1
k8s_container
Information about persistentvolume. Sampled every 60 seconds.
csi_driver :
csi_driver.
csi_volume_handle :
csi_volume_handle.
local_fs :
local_fs.
local_path :
local_path.
persistentvolume :
persistentvolume.
storageclass :
storageclass.
kube_persistentvolume_info/gauge
ALPHA
(project)
kube_persistentvolume_info
GAUGE , DOUBLE , 1
prometheus_target
Information about persistentvolume. Sampled every 30 seconds.
csi_driver :
csi_driver.
csi_volume_handle :
csi_volume_handle.
local_fs :
local_fs.
local_path :
local_path.
persistentvolume :
persistentvolume.
storageclass :
storageclass.
kube_persistentvolume_labels
ALPHA
(project)
kube_persistentvolume_labels
GAUGE , DOUBLE , 1
k8s_container
Kubernetes labels converted to Prometheus labels. Sampled every 60 seconds.
persistentvolume :
persistentvolume.
kube_persistentvolume_status_phase
ALPHA
(project)
kube_persistentvolume_status_phase
GAUGE , DOUBLE , 1
k8s_container
The phase indicates if a volume is available, bound to a claim, or released by a claim. Sampled every 60 seconds.
persistentvolume :
persistentvolume.
phase :
phase.
kube_persistentvolume_status_phase/gauge
ALPHA
(project)
kube_persistentvolume_status_phase
GAUGE , DOUBLE , 1
prometheus_target
The phase indicates if a volume is available, bound to a claim, or released by a claim. Sampled every 30 seconds.
persistentvolume :
persistentvolume.
phase :
phase.
kube_persistentvolumeclaim_access_mode
ALPHA
(project)
kube_persistentvolumeclaim_access_mode
GAUGE , DOUBLE , 1
k8s_container
The access mode(s) specified by the persistent volume claim. Sampled every 60 seconds.
access_mode :
access_mode.
namespace :
namespace.
persistentvolumeclaim :
persistentvolumeclaim.
kube_persistentvolumeclaim_annotations
ALPHA
(project)
kube_persistentvolumeclaim_annotations
GAUGE , DOUBLE , 1
k8s_container
Kubernetes annotations converted to Prometheus labels. Sampled every 60 seconds.
namespace :
namespace.
persistentvolumeclaim :
persistentvolumeclaim.
kube_persistentvolumeclaim_info
ALPHA
(project)
kube_persistentvolumeclaim_info
GAUGE , DOUBLE , 1
k8s_container
Information about persistent volume claim. Sampled every 60 seconds.
namespace :
namespace.
persistentvolumeclaim :
persistentvolumeclaim.
storageclass :
storageclass.
volumename :
volumename.
kube_persistentvolumeclaim_info/gauge
ALPHA
(project)
kube_persistentvolumeclaim_info
GAUGE , DOUBLE , 1
prometheus_target
Information about persistent volume claim. Sampled every 30 seconds.
persistentvolumeclaim :
persistentvolumeclaim.
storageclass :
storageclass.
volumename :
volumename.
kube_persistentvolumeclaim_labels
ALPHA
(project)
kube_persistentvolumeclaim_labels
GAUGE , DOUBLE , 1
k8s_container
Kubernetes labels converted to Prometheus labels. Sampled every 60 seconds.
label_app :
label_app.
label_component :
label_component.
label_k8s_app :
label_k8s_app.
label_managed_by :
label_managed_by.
label_tier :
label_tier.
namespace :
namespace.
persistentvolumeclaim :
persistentvolumeclaim.
kube_persistentvolumeclaim_resource_requests_storage_bytes
ALPHA
(project)
kube_persistentvolumeclaim_resource_requests_storage_bytes
GAUGE , DOUBLE , By
k8s_container
The capacity of storage requested by the persistent volume claim. Sampled every 60 seconds.
namespace :
namespace.
persistentvolumeclaim :
persistentvolumeclaim.
kube_persistentvolumeclaim_resource_requests_storage_bytes/gauge
ALPHA
(project)
kube_persistentvolumeclaim_resource_requests_storage_bytes
GAUGE , DOUBLE , By
prometheus_target
The capacity of storage requested by the persistent volume claim. Sampled every 30 seconds.
persistentvolumeclaim :
persistentvolumeclaim.
kube_persistentvolumeclaim_status_phase
ALPHA
(project)
kube_persistentvolumeclaim_status_phase
GAUGE , DOUBLE , 1
k8s_container
The phase the persistent volume claim is currently in. Sampled every 60 seconds.
namespace :
namespace.
persistentvolumeclaim :
persistentvolumeclaim.
phase :
phase.
kube_persistentvolumeclaim_status_phase/gauge
ALPHA
(project)
kube_persistentvolumeclaim_status_phase
GAUGE , DOUBLE , 1
prometheus_target
The phase the persistent volume claim is currently in. Sampled every 30 seconds.
persistentvolumeclaim :
persistentvolumeclaim.
phase :
phase.
kube_pod_annotations
ALPHA
(project)
kube_pod_annotations
GAUGE , DOUBLE , 1
k8s_container
Kubernetes annotations converted to Prometheus labels. Sampled every 60 seconds.
namespace :
namespace.
pod :
pod.
uid :
uid.
kube_pod_completion_time
ALPHA
(project)
kube_pod_completion_time
GAUGE , DOUBLE , 1
k8s_container
Completion time in unix timestamp for a pod. Sampled every 60 seconds.
namespace :
namespace.
pod :
pod.
uid :
uid.
kube_pod_container_info
ALPHA
(project)
kube_pod_container_info
GAUGE , DOUBLE , 1
k8s_container
Information about a container in a pod. Sampled every 60 seconds.
container :
container.
container_id :
container_id.
image :
image.
image_id :
image_id.
image_spec :
image_spec.
namespace :
namespace.
pod :
pod.
uid :
uid.
kube_pod_container_info/gauge
ALPHA
(project)
kube_pod_container_info
GAUGE , DOUBLE , 1
prometheus_target
Information about a container in a pod. Sampled every 30 seconds.
container :
container.
container_id :
container_id.
image :
image.
image_id :
image_id.
image_spec :
image_spec.
pod :
pod.
uid :
uid.
kube_pod_container_resource_limits
ALPHA
(project)
kube_pod_container_resource_limits
GAUGE , DOUBLE , 1
k8s_container
The number of requested limit resource by a container. Sampled every 60 seconds.
container :
container.
namespace :
namespace.
node :
node.
pod :
pod.
resource :
resource.
uid :
uid.
unit :
unit.
kube_pod_container_resource_limits_cpu_cores
ALPHA
(project)
kube_pod_container_resource_limits_cpu_cores
GAUGE , DOUBLE , 1
k8s_container
(Deprecated since Anthos 1.11.0) The limit on cpu cores to be used by a container. Sampled every 60 seconds.
container :
container.
namespace :
namespace.
node :
node.
pod :
pod.
kube_pod_container_resource_limits_memory_bytes
ALPHA
(project)
kube_pod_container_resource_limits_memory_bytes
GAUGE , DOUBLE , By
k8s_container
(Deprecated since Anthos 1.11.0) The limit on memory to be used by a container in bytes. Sampled every 60 seconds.
container :
container.
namespace :
namespace.
node :
node.
pod :
pod.
kube_pod_container_resource_requests
ALPHA
(project)
kube_pod_container_resource_requests
GAUGE , DOUBLE , 1
k8s_container
The number of requested request resource by a container. Sampled every 60 seconds.
container :
container.
namespace :
namespace.
node :
node.
pod :
pod.
resource :
resource.
uid :
uid.
unit :
unit.
kube_pod_container_resource_requests_cpu_cores
ALPHA
(project)
kube_pod_container_resource_requests_cpu_cores
GAUGE , DOUBLE , 1
k8s_container
(Deprecated since Anthos 1.11.0) The number of requested cpu cores by a container. Sampled every 60 seconds.
container :
container.
namespace :
namespace.
node :
node.
pod :
pod.
kube_pod_container_resource_requests_memory_bytes
ALPHA
(project)
kube_pod_container_resource_requests_memory_bytes
GAUGE , DOUBLE , By
k8s_container
(Deprecated since Anthos 1.11.0) The number of requested memory bytes by a container. Sampled every 60 seconds.
container :
container.
namespace :
namespace.
node :
node.
pod :
pod.
kube_pod_container_state_started
ALPHA
(project)
kube_pod_container_state_started
GAUGE , DOUBLE , 1
k8s_container
Start time in unix timestamp for a pod container. Sampled every 60 seconds.
container :
container.
namespace :
namespace.
pod :
pod.
uid :
uid.
kube_pod_container_status_last_terminated_reason
ALPHA
(project)
kube_pod_container_status_last_terminated_reason
GAUGE , DOUBLE , 1
k8s_container
Describes the last reason the container was in terminated state. Sampled every 60 seconds.
container :
container.
namespace :
namespace.
pod :
pod.
reason :
reason.
uid :
uid.
kube_pod_container_status_last_terminated_reason/gauge
ALPHA
(project)
kube_pod_container_status_last_terminated_reason
GAUGE , DOUBLE , 1
prometheus_target
Describes the last reason the container was in terminated state. Sampled every 30 seconds.
container :
container.
pod :
pod.
reason :
reason.
uid :
uid.
kube_pod_container_status_ready
ALPHA
(project)
kube_pod_container_status_ready
GAUGE , DOUBLE , 1
k8s_container
Describes whether the containers readiness check succeeded. Sampled every 60 seconds.
container :
container.
namespace :
namespace.
pod :
pod.
uid :
uid.
kube_pod_container_status_ready/gauge
ALPHA
(project)
kube_pod_container_status_ready
GAUGE , DOUBLE , 1
prometheus_target
Describes whether the containers readiness check succeeded. Sampled every 30 seconds.
container :
container.
pod :
pod.
uid :
uid.
kube_pod_container_status_restarts_total
ALPHA
(project)
kube_pod_container_status_restarts_total
CUMULATIVE , DOUBLE , 1
k8s_container
The number of container restarts per container. Sampled every 60 seconds.
container :
container.
namespace :
namespace.
pod :
pod.
uid :
uid.
kube_pod_container_status_restarts_total/counter
ALPHA
(project)
kube_pod_container_status_restarts_total
CUMULATIVE , DOUBLE , 1
prometheus_target
The number of container restarts per container. Sampled every 30 seconds.
container :
container.
pod :
pod.
uid :
uid.
kube_pod_container_status_running
ALPHA
(project)
kube_pod_container_status_running
GAUGE , DOUBLE , 1
k8s_container
Describes whether the container is currently in running state. Sampled every 60 seconds.
container :
container.
namespace :
namespace.
pod :
pod.
uid :
uid.
kube_pod_container_status_running/gauge
ALPHA
(project)
kube_pod_container_status_running
GAUGE , DOUBLE , 1
prometheus_target
Describes whether the container is currently in running state. Sampled every 30 seconds.
container :
container.
pod :
pod.
uid :
uid.
kube_pod_container_status_terminated
ALPHA
(project)
kube_pod_container_status_terminated
GAUGE , DOUBLE , 1
k8s_container
Describes whether the container is currently in terminated state. Sampled every 60 seconds.
container :
container.
namespace :
namespace.
pod :
pod.
uid :
uid.
kube_pod_container_status_terminated/gauge
ALPHA
(project)
kube_pod_container_status_terminated
GAUGE , DOUBLE , 1
prometheus_target
Describes whether the container is currently in terminated state. Sampled every 30 seconds.
container :
container.
pod :
pod.
uid :
uid.
kube_pod_container_status_terminated_reason
ALPHA
(project)
kube_pod_container_status_terminated_reason
GAUGE , DOUBLE , 1
k8s_container
Describes the reason the container is currently in terminated state. Sampled every 60 seconds.
container :
container.
namespace :
namespace.
pod :
pod.
reason :
reason.
uid :
uid.
kube_pod_container_status_terminated_reason/gauge
ALPHA
(project)
kube_pod_container_status_terminated_reason
GAUGE , DOUBLE , 1
prometheus_target
Describes the reason the container is currently in terminated state. Sampled every 30 seconds.
container :
container.
pod :
pod.
reason :
reason.
uid :
uid.
kube_pod_container_status_waiting
ALPHA
(project)
kube_pod_container_status_waiting
GAUGE , DOUBLE , 1
k8s_container
Describes whether the container is currently in waiting state. Sampled every 60 seconds.
container :
container.
namespace :
namespace.
pod :
pod.
uid :
uid.
kube_pod_container_status_waiting/gauge
ALPHA
(project)
kube_pod_container_status_waiting
GAUGE , DOUBLE , 1
prometheus_target
Describes whether the container is currently in waiting state. Sampled every 30 seconds.
container :
container.
pod :
pod.
uid :
uid.
kube_pod_container_status_waiting_reason
ALPHA
(project)
kube_pod_container_status_waiting_reason
GAUGE , DOUBLE , 1
k8s_container
Describes the reason the container is currently in waiting state. Sampled every 60 seconds.
container :
container.
namespace :
namespace.
pod :
pod.
reason :
reason.
uid :
uid.
kube_pod_container_status_waiting_reason/gauge
ALPHA
(project)
kube_pod_container_status_waiting_reason
GAUGE , DOUBLE , 1
prometheus_target
Describes the reason the container is currently in waiting state. Sampled every 30 seconds.
container :
container.
pod :
pod.
reason :
reason.
uid :
uid.
kube_pod_created
ALPHA
(project)
kube_pod_created
GAUGE , DOUBLE , 1
k8s_container
Unix creation timestamp. Sampled every 60 seconds.
namespace :
namespace.
pod :
pod.
uid :
uid.
kube_pod_info
ALPHA
(project)
kube_pod_info
GAUGE , DOUBLE , 1
k8s_container
Information about pod. Sampled every 60 seconds.
created_by_kind :
created_by_kind.
created_by_name :
created_by_name.
host_ip :
host_ip.
host_network :
host_network.
namespace :
namespace.
node :
node.
pod :
pod.
pod_ip :
pod_ip.
priority_class :
priority_class.
uid :
uid.
kube_pod_info/gauge
ALPHA
(project)
kube_pod_info
GAUGE , DOUBLE , 1
prometheus_target
Information about pod. Sampled every 30 seconds.
created_by_kind :
created_by_kind.
created_by_name :
created_by_name.
host_ip :
host_ip.
host_network :
host_network.
node :
node.
pod :
pod.
pod_ip :
pod_ip.
priority_class :
priority_class.
uid :
uid.
kube_pod_init_container_info
ALPHA
(project)
kube_pod_init_container_info
GAUGE , DOUBLE , 1
k8s_container
Information about an init container in a pod. Sampled every 60 seconds.
container :
container.
container_id :
container_id.
image :
image.
image_id :
image_id.
image_spec :
image_spec.
namespace :
namespace.
pod :
pod.
uid :
uid.
kube_pod_init_container_resource_limits
ALPHA
(project)
kube_pod_init_container_resource_limits
GAUGE , DOUBLE , 1
k8s_container
The number of requested limit resource by an init container. Sampled every 60 seconds.
container :
container.
namespace :
namespace.
node :
node.
pod :
pod.
resource :
resource.
uid :
uid.
unit :
unit.
kube_pod_init_container_resource_requests
ALPHA
(project)
kube_pod_init_container_resource_requests
GAUGE , DOUBLE , 1
k8s_container
The number of requested request resource by an init container. Sampled every 60 seconds.
container :
container.
namespace :
namespace.
node :
node.
pod :
pod.
resource :
resource.
uid :
uid.
unit :
unit.
kube_pod_init_container_status_last_terminated_reason
ALPHA
(project)
kube_pod_init_container_status_last_terminated_reason
GAUGE , DOUBLE , 1
k8s_container
Describes the last reason the init container was in terminated state. Sampled every 60 seconds.
container :
container.
namespace :
namespace.
pod :
pod.
reason :
reason.
kube_pod_init_container_status_ready
ALPHA
(project)
kube_pod_init_container_status_ready
GAUGE , DOUBLE , 1
k8s_container
Describes whether the init containers readiness check succeeded. Sampled every 60 seconds.
container :
container.
namespace :
namespace.
pod :
pod.
uid :
uid.
kube_pod_init_container_status_restarts_total
ALPHA
(project)
kube_pod_init_container_status_restarts_total
CUMULATIVE , DOUBLE , 1
k8s_container
The number of restarts for the init container. Sampled every 60 seconds.
container :
container.
namespace :
namespace.
pod :
pod.
uid :
uid.
kube_pod_init_container_status_running
ALPHA
(project)
kube_pod_init_container_status_running
GAUGE , DOUBLE , 1
k8s_container
Describes whether the init container is currently in running state. Sampled every 60 seconds.
container :
container.
namespace :
namespace.
pod :
pod.
uid :
uid.
kube_pod_init_container_status_terminated
ALPHA
(project)
kube_pod_init_container_status_terminated
GAUGE , DOUBLE , 1
k8s_container
Describes whether the init container is currently in terminated state. Sampled every 60 seconds.
container :
container.
namespace :
namespace.
pod :
pod.
uid :
uid.
kube_pod_init_container_status_terminated_reason
ALPHA
(project)
kube_pod_init_container_status_terminated_reason
GAUGE , DOUBLE , 1
k8s_container
Describes the reason the init container is currently in terminated state. Sampled every 60 seconds.
container :
container.
namespace :
namespace.
pod :
pod.
reason :
reason.
uid :
uid.
kube_pod_init_container_status_waiting
ALPHA
(project)
kube_pod_init_container_status_waiting
GAUGE , DOUBLE , 1
k8s_container
Describes whether the init container is currently in waiting state. Sampled every 60 seconds.
container :
container.
namespace :
namespace.
pod :
pod.
uid :
uid.
kube_pod_init_container_status_waiting_reason
ALPHA
(project)
kube_pod_init_container_status_waiting_reason
GAUGE , DOUBLE , 1
k8s_container
Describes the reason the init container is currently in waiting state. Sampled every 60 seconds.
container :
container.
namespace :
namespace.
pod :
pod.
reason :
reason.
kube_pod_labels
ALPHA
(project)
kube_pod_labels
GAUGE , DOUBLE , 1
k8s_container
Kubernetes labels converted to Prometheus labels. Sampled every 60 seconds.
label_BareMetalMachine_Name :
label_BareMetalMachine_Name.
label_Command :
label_Command.
label_api :
label_api.
label_app :
label_app.
label_app_kubernetes_io_component :
label_app_kubernetes_io_component.
label_app_kubernetes_io_instance :
label_app_kubernetes_io_instance.
label_app_kubernetes_io_managed_by :
label_app_kubernetes_io_managed_by.
label_app_kubernetes_io_name :
label_app_kubernetes_io_name.
label_app_kubernetes_io_version :
label_app_kubernetes_io_version.
label_baremetal_cluster_gke_io_check_name :
label_baremetal_cluster_gke_io_check_name.
label_cdi_kubevirt_io :
label_cdi_kubevirt_io.
label_chart :
label_chart.
label_cluster_level :
label_cluster_level.
label_cluster_x_k8s_io_provider :
label_cluster_x_k8s_io_provider.
label_cnrm_cloud_google_com_component :
label_cnrm_cloud_google_com_component.
label_cnrm_cloud_google_com_system :
label_cnrm_cloud_google_com_system.
label_component :
label_component.
label_control_plane :
label_control_plane.
label_controller_revision_hash :
label_controller_revision_hash.
label_controller_uid :
label_controller_uid.
label_gatekeeper_sh_operation :
label_gatekeeper_sh_operation.
label_gatekeeper_sh_system :
label_gatekeeper_sh_system.
label_hub_gke_io_project :
label_hub_gke_io_project.
label_io_cilium_app :
label_io_cilium_app.
label_istio :
label_istio.
label_job_name :
label_job_name.
label_k8s_app :
label_k8s_app.
label_knative_dev_secureMetricsPort :
label_knative_dev_secureMetricsPort.
label_kubevirt_io :
label_kubevirt_io.
label_managed_by :
label_managed_by.
label_monitored :
label_monitored.
label_name :
label_name.
label_operator_cdi_kubevirt_io_createVersion :
label_operator_cdi_kubevirt_io_createVersion.
label_pod_template_generation :
label_pod_template_generation.
label_pod_template_hash :
label_pod_template_hash.
label_policycontroller_configmanagement_gke_io :
label_policycontroller_configmanagement_gke_io.
label_release :
label_release.
label_role :
label_role.
label_serving_knative_dev_configuration :
label_serving_knative_dev_configuration.
label_serving_knative_dev_configurationGeneration :
label_serving_knative_dev_configurationGeneration.
label_serving_knative_dev_release :
label_serving_knative_dev_release.
label_serving_knative_dev_revision :
label_serving_knative_dev_revision.
label_serving_knative_dev_revisionUID :
label_serving_knative_dev_revisionUID.
label_serving_knative_dev_service :
label_serving_knative_dev_service.
label_statefulset_kubernetes_io_pod_name :
label_statefulset_kubernetes_io_pod_name.
label_tier :
label_tier.
namespace :
namespace.
pod :
pod.
uid :
uid.
kube_pod_owner
ALPHA
(project)
kube_pod_owner
GAUGE , DOUBLE , 1
k8s_container
Information about the Pod's owner. Sampled every 60 seconds.
namespace :
namespace.
owner_is_controller :
owner_is_controller.
owner_kind :
owner_kind.
owner_name :
owner_name.
pod :
pod.
uid :
uid.
kube_pod_restart_policy
ALPHA
(project)
kube_pod_restart_policy
GAUGE , DOUBLE , 1
k8s_container
Describes the restart policy in use by this pod. Sampled every 60 seconds.
namespace :
namespace.
pod :
pod.
type :
type.
uid :
uid.
kube_pod_spec_volumes_persistentvolumeclaims_info
ALPHA
(project)
kube_pod_spec_volumes_persistentvolumeclaims_info
GAUGE , DOUBLE , 1
k8s_container
Information about persistentvolumeclaim volumes in a pod. Sampled every 60 seconds.
namespace :
namespace.
persistentvolumeclaim :
persistentvolumeclaim.
pod :
pod.
uid :
uid.
volume :
volume.
kube_pod_spec_volumes_persistentvolumeclaims_info/gauge
ALPHA
(project)
kube_pod_spec_volumes_persistentvolumeclaims_info
GAUGE , DOUBLE , 1
prometheus_target
Information about persistentvolumeclaim volumes in a pod. Sampled every 30 seconds.
persistentvolumeclaim :
persistentvolumeclaim.
pod :
pod.
uid :
uid.
volume :
volume.
kube_pod_spec_volumes_persistentvolumeclaims_readonly
ALPHA
(project)
kube_pod_spec_volumes_persistentvolumeclaims_readonly
GAUGE , DOUBLE , 1
k8s_container
Describes whether a persistentvolumeclaim is mounted read only. Sampled every 60 seconds.
namespace :
namespace.
persistentvolumeclaim :
persistentvolumeclaim.
pod :
pod.
uid :
uid.
volume :
volume.
kube_pod_start_time
ALPHA
(project)
kube_pod_start_time
GAUGE , DOUBLE , 1
k8s_container
Start time in unix timestamp for a pod. Sampled every 60 seconds.
namespace :
namespace.
pod :
pod.
uid :
uid.
kube_pod_status_phase
ALPHA
(project)
kube_pod_status_phase
GAUGE , DOUBLE , 1
k8s_container
The pods current phase. Sampled every 60 seconds.
namespace :
namespace.
phase :
phase.
pod :
pod.
uid :
uid.
kube_pod_status_phase/gauge
ALPHA
(project)
kube_pod_status_phase
GAUGE , DOUBLE , 1
prometheus_target
The pods current phase. Sampled every 30 seconds.
phase :
phase.
pod :
pod.
uid :
uid.
kube_pod_status_ready
ALPHA
(project)
kube_pod_status_ready
GAUGE , DOUBLE , 1
k8s_container
Describes whether the pod is ready to serve requests. Sampled every 60 seconds.
condition :
condition.
namespace :
namespace.
pod :
pod.
uid :
uid.
kube_pod_status_ready/gauge
ALPHA
(project)
kube_pod_status_ready
GAUGE , DOUBLE , 1
prometheus_target
Describes whether the pod is ready to serve requests. Sampled every 30 seconds.
condition :
condition.
pod :
pod.
uid :
uid.
kube_pod_status_reason
ALPHA
(project)
kube_pod_status_reason
GAUGE , DOUBLE , 1
k8s_container
The pod status reasons. Sampled every 60 seconds.
namespace :
namespace.
pod :
pod.
reason :
reason.
uid :
uid.
kube_pod_status_reason/gauge
ALPHA
(project)
kube_pod_status_reason
GAUGE , DOUBLE , 1
prometheus_target
The pod status reasons. Sampled every 30 seconds.
pod :
pod.
reason :
reason.
uid :
uid.
kube_pod_status_scheduled
ALPHA
(project)
kube_pod_status_scheduled
GAUGE , DOUBLE , 1
k8s_container
Describes the status of the scheduling process for the pod. Sampled every 60 seconds.
condition :
condition.
namespace :
namespace.
pod :
pod.
uid :
uid.
kube_pod_status_scheduled/gauge
ALPHA
(project)
kube_pod_status_scheduled
GAUGE , DOUBLE , 1
prometheus_target
Describes the status of the scheduling process for the pod. Sampled every 30 seconds.
condition :
condition.
pod :
pod.
uid :
uid.
kube_pod_status_scheduled_time
ALPHA
(project)
kube_pod_status_scheduled_time
GAUGE , DOUBLE , 1
k8s_container
Unix timestamp when pod moved into scheduled status. Sampled every 60 seconds.
namespace :
namespace.
pod :
pod.
uid :
uid.
kube_pod_status_scheduled_time/gauge
ALPHA
(project)
kube_pod_status_scheduled_time
GAUGE , DOUBLE , 1
prometheus_target
Unix timestamp when pod moved into scheduled status. Sampled every 30 seconds.
pod :
pod.
uid :
uid.
kube_pod_status_unschedulable/gauge
ALPHA
(project)
kube_pod_status_unschedulable
GAUGE , DOUBLE , 1
prometheus_target
Describes the unschedulable status for the pod. Sampled every 30 seconds.
pod :
pod.
uid :
uid.
kube_poddisruptionbudget_annotations
ALPHA
(project)
kube_poddisruptionbudget_annotations
GAUGE , DOUBLE , 1
k8s_container
Kubernetes annotations converted to Prometheus labels. Sampled every 60 seconds.
namespace :
namespace.
poddisruptionbudget :
poddisruptionbudget.
kube_poddisruptionbudget_created
ALPHA
(project)
kube_poddisruptionbudget_created
GAUGE , DOUBLE , 1
k8s_container
Unix creation timestamp. Sampled every 60 seconds.
namespace :
namespace.
poddisruptionbudget :
poddisruptionbudget.
kube_poddisruptionbudget_labels
ALPHA
(project)
kube_poddisruptionbudget_labels
GAUGE , DOUBLE , 1
k8s_container
Kubernetes labels converted to Prometheus labels. Sampled every 60 seconds.
namespace :
namespace.
poddisruptionbudget :
poddisruptionbudget.
kube_poddisruptionbudget_status_current_healthy
ALPHA
(project)
kube_poddisruptionbudget_status_current_healthy
GAUGE , DOUBLE , 1
k8s_container
Current number of healthy pods. Sampled every 60 seconds.
namespace :
namespace.
poddisruptionbudget :
poddisruptionbudget.
kube_poddisruptionbudget_status_current_healthy/gauge
ALPHA
(project)
kube_poddisruptionbudget_status_current_healthy
GAUGE , DOUBLE , 1
prometheus_target
Current number of healthy pods. Sampled every 30 seconds.
poddisruptionbudget :
poddisruptionbudget.
kube_poddisruptionbudget_status_desired_healthy
ALPHA
(project)
kube_poddisruptionbudget_status_desired_healthy
GAUGE , DOUBLE , 1
k8s_container
Minimum desired number of healthy pods. Sampled every 60 seconds.
namespace :
namespace.
poddisruptionbudget :
poddisruptionbudget.
kube_poddisruptionbudget_status_desired_healthy/gauge
ALPHA
(project)
kube_poddisruptionbudget_status_desired_healthy
GAUGE , DOUBLE , 1
prometheus_target
Minimum desired number of healthy pods. Sampled every 30 seconds.
poddisruptionbudget :
poddisruptionbudget.
kube_poddisruptionbudget_status_expected_pods
ALPHA
(project)
kube_poddisruptionbudget_status_expected_pods
GAUGE , DOUBLE , 1
k8s_container
Total number of pods counted by this disruption budget. Sampled every 60 seconds.
namespace :
namespace.
poddisruptionbudget :
poddisruptionbudget.
kube_poddisruptionbudget_status_observed_generation
ALPHA
(project)
kube_poddisruptionbudget_status_observed_generation
GAUGE , DOUBLE , 1
k8s_container
Most recent generation observed when updating this PDB status. Sampled every 60 seconds.
namespace :
namespace.
poddisruptionbudget :
poddisruptionbudget.
kube_poddisruptionbudget_status_pod_disruptions_allowed
ALPHA
(project)
kube_poddisruptionbudget_status_pod_disruptions_allowed
GAUGE , DOUBLE , 1
k8s_container
Number of pod disruptions that are currently allowed. Sampled every 60 seconds.
namespace :
namespace.
poddisruptionbudget :
poddisruptionbudget.
kube_replicaset_annotations
ALPHA
(project)
kube_replicaset_annotations
GAUGE , DOUBLE , 1
k8s_container
Kubernetes annotations converted to Prometheus labels. Sampled every 60 seconds.
namespace :
namespace.
replicaset :
replicaset.
kube_replicaset_created
ALPHA
(project)
kube_replicaset_created
GAUGE , DOUBLE , 1
k8s_container
Unix creation timestamp. Sampled every 60 seconds.
namespace :
namespace.
replicaset :
replicaset.
kube_replicaset_labels
ALPHA
(project)
kube_replicaset_labels
GAUGE , DOUBLE , 1
k8s_container
Kubernetes labels converted to Prometheus labels. Sampled every 60 seconds.
label_api :
label_api.
label_app :
label_app.
label_app_kubernetes_io_component :
label_app_kubernetes_io_component.
label_app_kubernetes_io_instance :
label_app_kubernetes_io_instance.
label_app_kubernetes_io_managed_by :
label_app_kubernetes_io_managed_by.
label_app_kubernetes_io_name :
label_app_kubernetes_io_name.
label_app_kubernetes_io_version :
label_app_kubernetes_io_version.
label_cdi_kubevirt_io :
label_cdi_kubevirt_io.
label_cluster_level :
label_cluster_level.
label_cluster_x_k8s_io_provider :
label_cluster_x_k8s_io_provider.
label_cnrm_cloud_google_com_component :
label_cnrm_cloud_google_com_component.
label_cnrm_cloud_google_com_system :
label_cnrm_cloud_google_com_system.
label_component :
label_component.
label_control_plane :
label_control_plane.
label_gatekeeper_sh_operation :
label_gatekeeper_sh_operation.
label_gatekeeper_sh_system :
label_gatekeeper_sh_system.
label_hub_gke_io_project :
label_hub_gke_io_project.
label_io_cilium_app :
label_io_cilium_app.
label_istio :
label_istio.
label_k8s_app :
label_k8s_app.
label_kubevirt_io :
label_kubevirt_io.
label_managed_by :
label_managed_by.
label_monitored :
label_monitored.
label_name :
label_name.
label_operator_cdi_kubevirt_io_createVersion :
label_operator_cdi_kubevirt_io_createVersion.
label_pod_template_hash :
label_pod_template_hash.
label_policycontroller_configmanagement_gke_io :
label_policycontroller_configmanagement_gke_io.
label_release :
label_release.
label_role :
label_role.
label_tier :
label_tier.
namespace :
namespace.
replicaset :
replicaset.
kube_replicaset_metadata_generation
ALPHA
(project)
kube_replicaset_metadata_generation
GAUGE , DOUBLE , 1
k8s_container
Sequence number representing a specific generation of the desired state. Sampled every 60 seconds.
namespace :
namespace.
replicaset :
replicaset.
kube_replicaset_owner
ALPHA
(project)
kube_replicaset_owner
GAUGE , DOUBLE , 1
k8s_container
Information about the ReplicaSet's owner. Sampled every 60 seconds.
namespace :
namespace.
owner_is_controller :
owner_is_controller.
owner_kind :
owner_kind.
owner_name :
owner_name.
replicaset :
replicaset.
kube_replicaset_spec_replicas
ALPHA
(project)
kube_replicaset_spec_replicas
GAUGE , DOUBLE , 1
k8s_container
Number of desired pods for a ReplicaSet. Sampled every 60 seconds.
namespace :
namespace.
replicaset :
replicaset.
kube_replicaset_spec_replicas/gauge
ALPHA
(project)
kube_replicaset_spec_replicas
GAUGE , DOUBLE , 1
prometheus_target
Number of desired pods for a ReplicaSet. Sampled every 30 seconds.
replicaset :
replicaset.
kube_replicaset_status_fully_labeled_replicas
ALPHA
(project)
kube_replicaset_status_fully_labeled_replicas
GAUGE , DOUBLE , 1
k8s_container
The number of fully labeled replicas per ReplicaSet. Sampled every 60 seconds.
namespace :
namespace.
replicaset :
replicaset.
kube_replicaset_status_fully_labeled_replicas/gauge
ALPHA
(project)
kube_replicaset_status_fully_labeled_replicas
GAUGE , DOUBLE , 1
prometheus_target
The number of fully labeled replicas per ReplicaSet. Sampled every 30 seconds.
replicaset :
replicaset.
kube_replicaset_status_observed_generation
ALPHA
(project)
kube_replicaset_status_observed_generation
GAUGE , DOUBLE , 1
k8s_container
The generation observed by the ReplicaSet controller. Sampled every 60 seconds.
namespace :
namespace.
replicaset :
replicaset.
kube_replicaset_status_ready_replicas
ALPHA
(project)
kube_replicaset_status_ready_replicas
GAUGE , DOUBLE , 1
k8s_container
The number of ready replicas per ReplicaSet. Sampled every 60 seconds.
namespace :
namespace.
replicaset :
replicaset.
kube_replicaset_status_ready_replicas/gauge
ALPHA
(project)
kube_replicaset_status_ready_replicas
GAUGE , DOUBLE , 1
prometheus_target
The number of ready replicas per ReplicaSet. Sampled every 30 seconds.
replicaset :
replicaset.
kube_replicaset_status_replicas
ALPHA
(project)
kube_replicaset_status_replicas
GAUGE , DOUBLE , 1
k8s_container
The number of replicas per ReplicaSet. Sampled every 60 seconds.
namespace :
namespace.
replicaset :
replicaset.
kube_replicaset_status_replicas/gauge
ALPHA
(project)
kube_replicaset_status_replicas
GAUGE , DOUBLE , 1
prometheus_target
The number of replicas per ReplicaSet. Sampled every 30 seconds.
replicaset :
replicaset.
kube_resourcequota
ALPHA
(project)
kube_resourcequota
GAUGE , DOUBLE , 1
k8s_container
Information about resource quota. Sampled every 60 seconds.
namespace :
namespace.
resource :
resource.
resourcequota :
resourcequota.
type :
type.
kube_resourcequota/gauge
ALPHA
(project)
kube_resourcequota
GAUGE , DOUBLE , 1
prometheus_target
Information about resource quota. Sampled every 30 seconds.
resource :
resource.
resourcequota :
resourcequota.
type :
type.
kube_resourcequota_created
ALPHA
(project)
kube_resourcequota_created
GAUGE , DOUBLE , 1
k8s_container
Unix creation timestamp. Sampled every 60 seconds.
namespace :
namespace.
resourcequota :
resourcequota.
kube_secret_annotations
ALPHA
(project)
kube_secret_annotations
GAUGE , DOUBLE , 1
k8s_container
Kubernetes annotations converted to Prometheus labels. Sampled every 60 seconds.
namespace :
namespace.
secret :
secret.
kube_secret_created
ALPHA
(project)
kube_secret_created
GAUGE , DOUBLE , 1
k8s_container
Unix creation timestamp. Sampled every 60 seconds.
namespace :
namespace.
secret :
secret.
kube_secret_created/gauge
ALPHA
(project)
kube_secret_created
GAUGE , DOUBLE , 1
prometheus_target
Unix creation timestamp. Sampled every 30 seconds.
secret :
secret.
kube_secret_info
ALPHA
(project)
kube_secret_info
GAUGE , DOUBLE , 1
k8s_container
Information about secret. Sampled every 60 seconds.
namespace :
namespace.
secret :
secret.
kube_secret_labels
ALPHA
(project)
kube_secret_labels
GAUGE , DOUBLE , 1
k8s_container
Kubernetes labels converted to Prometheus labels. Sampled every 60 seconds.
label_addons_gke_io_stackdriver :
label_addons_gke_io_stackdriver.
label_addons_k8s_io_monitoring :
label_addons_k8s_io_monitoring.
label_addons_sigs_k8s_io_Stackdriver :
label_addons_sigs_k8s_io_Stackdriver.
label_addons_sigs_k8s_io_stackdriver :
label_addons_sigs_k8s_io_stackdriver.
label_admin_master_linux_env_secret :
label_admin_master_linux_env_secret.
label_app :
label_app.
label_app_kubernetes_io_component :
label_app_kubernetes_io_component.
label_app_kubernetes_io_managed_by :
label_app_kubernetes_io_managed_by.
label_auth_openshift_io_managed_certificate_type :
label_auth_openshift_io_managed_certificate_type.
label_bundle_gke_io_component_name :
label_bundle_gke_io_component_name.
label_bundle_gke_io_component_version :
label_bundle_gke_io_component_version.
label_bundle_gke_io_package_deployment_name :
label_bundle_gke_io_package_deployment_name.
label_bundle_gke_io_package_deployment_namespace :
label_bundle_gke_io_package_deployment_namespace.
label_cdi_kubevirt_io :
label_cdi_kubevirt_io.
label_cluster_x_k8s_io_cluster_name :
label_cluster_x_k8s_io_cluster_name.
label_configmanagement_gke_io_configmanagement :
label_configmanagement_gke_io_configmanagement.
label_gatekeeper_sh_system :
label_gatekeeper_sh_system.
label_hub_gke_io_project :
label_hub_gke_io_project.
label_k8s_app :
label_k8s_app.
label_managed_by :
label_managed_by.
label_name :
label_name.
label_operator_cdi_kubevirt_io_createVersion :
label_operator_cdi_kubevirt_io_createVersion.
label_policycontroller_configmanagement_gke_io :
label_policycontroller_configmanagement_gke_io.
label_version :
label_version.
namespace :
namespace.
secret :
secret.
kube_secret_metadata_resource_version
ALPHA
(project)
kube_secret_metadata_resource_version
GAUGE , DOUBLE , 1
k8s_container
Resource version representing a specific version of secret. Sampled every 60 seconds.
namespace :
namespace.
resource_version :
resource_version.
secret :
secret.
kube_secret_type
ALPHA
(project)
kube_secret_type
GAUGE , DOUBLE , 1
k8s_container
Type about secret. Sampled every 60 seconds.
namespace :
namespace.
secret :
secret.
type :
type.
kube_service_annotations
ALPHA
(project)
kube_service_annotations
GAUGE , DOUBLE , 1
k8s_container
Kubernetes annotations converted to Prometheus labels. Sampled every 60 seconds.
namespace :
namespace.
service :
service.
uid :
uid.
kube_service_created
ALPHA
(project)
kube_service_created
GAUGE , DOUBLE , 1
k8s_container
Unix creation timestamp. Sampled every 60 seconds.
namespace :
namespace.
service :
service.
uid :
uid.
kube_service_info
ALPHA
(project)
kube_service_info
GAUGE , DOUBLE , 1
k8s_container
Information about service. Sampled every 60 seconds.
cluster_ip :
cluster_ip.
load_balancer_ip :
load_balancer_ip.
namespace :
namespace.
service :
service.
uid :
uid.
kube_service_labels
ALPHA
(project)
kube_service_labels
GAUGE , DOUBLE , 1
k8s_container
Kubernetes labels converted to Prometheus labels. Sampled every 60 seconds.
label_addons_gke_io_metricsserver :
label_addons_gke_io_metricsserver.
label_addons_gke_io_stackdriver :
label_addons_gke_io_stackdriver.
label_addons_k8s_io_metricsserver :
label_addons_k8s_io_metricsserver.
label_addons_k8s_io_monitoring :
label_addons_k8s_io_monitoring.
label_addons_sigs_k8s_io_Stackdriver :
label_addons_sigs_k8s_io_Stackdriver.
label_addons_sigs_k8s_io_stackdriver :
label_addons_sigs_k8s_io_stackdriver.
label_app :
label_app.
label_app_kubernetes_io_component :
label_app_kubernetes_io_component.
label_app_kubernetes_io_instance :
label_app_kubernetes_io_instance.
label_app_kubernetes_io_managed_by :
label_app_kubernetes_io_managed_by.
label_app_kubernetes_io_name :
label_app_kubernetes_io_name.
label_app_kubernetes_io_version :
label_app_kubernetes_io_version.
label_autoscaling_knative_dev_kpa :
label_autoscaling_knative_dev_kpa.
label_bundle_gke_io_component_name :
label_bundle_gke_io_component_name.
label_bundle_gke_io_component_version :
label_bundle_gke_io_component_version.
label_bundle_gke_io_package_deployment_name :
label_bundle_gke_io_package_deployment_name.
label_bundle_gke_io_package_deployment_namespace :
label_bundle_gke_io_package_deployment_namespace.
label_cdi_kubevirt_io :
label_cdi_kubevirt_io.
label_chart :
label_chart.
label_cluster_x_k8s_io_provider :
label_cluster_x_k8s_io_provider.
label_clusterctl_cluster_x_k8s_io_lifecycle :
label_clusterctl_cluster_x_k8s_io_lifecycle.
label_cnrm_cloud_google_com_monitored :
label_cnrm_cloud_google_com_monitored.
label_cnrm_cloud_google_com_system :
label_cnrm_cloud_google_com_system.
label_component :
label_component.
label_configmanagement_gke_io_arch :
label_configmanagement_gke_io_arch.
label_configmanagement_gke_io_configmanagement :
label_configmanagement_gke_io_configmanagement.
label_configmanagement_gke_io_system :
label_configmanagement_gke_io_system.
label_control_plane :
label_control_plane.
label_gatekeeper_sh_system :
label_gatekeeper_sh_system.
label_gke_on_prem :
label_gke_on_prem.
label_heritage :
label_heritage.
label_hub_gke_io_project :
label_hub_gke_io_project.
label_istio :
label_istio.
label_k8s_app :
label_k8s_app.
label_kubernetes_io_cluster_service :
label_kubernetes_io_cluster_service.
label_kubernetes_io_name :
label_kubernetes_io_name.
label_kubevirt_io :
label_kubevirt_io.
label_managed_by :
label_managed_by.
label_monitored :
label_monitored.
label_networking_internal_knative_dev_serverlessservice :
label_networking_internal_knative_dev_serverlessservice.
label_networking_internal_knative_dev_serviceType :
label_networking_internal_knative_dev_serviceType.
label_operator_cdi_kubevirt_io_createVersion :
label_operator_cdi_kubevirt_io_createVersion.
label_operator_cdi_kubevirt_io_updateVersion :
label_operator_cdi_kubevirt_io_updateVersion.
label_policycontroller_configmanagement_gke_io :
label_policycontroller_configmanagement_gke_io.
label_provider :
label_provider.
label_release :
label_release.
label_serving_knative_dev_configuration :
label_serving_knative_dev_configuration.
label_serving_knative_dev_configurationGeneration :
label_serving_knative_dev_configurationGeneration.
label_serving_knative_dev_release :
label_serving_knative_dev_release.
label_serving_knative_dev_revision :
label_serving_knative_dev_revision.
label_serving_knative_dev_revisionUID :
label_serving_knative_dev_revisionUID.
label_serving_knative_dev_route :
label_serving_knative_dev_route.
label_serving_knative_dev_service :
label_serving_knative_dev_service.
label_tier :
label_tier.
label_version :
label_version.
namespace :
namespace.
service :
service.
kube_service_spec_type
ALPHA
(project)
kube_service_spec_type
GAUGE , DOUBLE , 1
k8s_container
Type about service. Sampled every 60 seconds.
namespace :
namespace.
service :
service.
type :
type.
uid :
uid.
kube_service_status_load_balancer_ingress
ALPHA
(project)
kube_service_status_load_balancer_ingress
GAUGE , DOUBLE , 1
k8s_container
Service load balancer ingress status. Sampled every 60 seconds.
ip :
ip.
namespace :
namespace.
service :
service.
uid :
uid.
kube_service_status_load_balancer_ingress/gauge
ALPHA
(project)
kube_service_status_load_balancer_ingress
GAUGE , DOUBLE , 1
prometheus_target
Service load balancer ingress status. Sampled every 30 seconds.
ip :
ip.
service :
service.
uid :
uid.
kube_stackdriver_spec_info
ALPHA
(project)
kube_stackdriver_spec_info
GAUGE , DOUBLE , 1
k8s_container
k8s_pod
Stackdriver Spec information. Sampled every 60 seconds.
enable_applog_filter :
enable_applog_filter.
enable_cloud_logging_for_applications :
enable_cloud_logging_for_applications.
enable_gmp_for_applications :
enable_gmp_for_applications.
enable_multiline :
enable_multiline.
enable_stackdriver_for_applications :
enable_stackdriver_for_applications.
enable_vpc :
enable_vpc.
exported_namespace :
exported_namespace.
optimized_metrics :
optimized_metrics.
stackdriver :
stackdriver.
kube_statefulset_annotations
ALPHA
(project)
kube_statefulset_annotations
GAUGE , DOUBLE , 1
k8s_container
Kubernetes annotations converted to Prometheus labels. Sampled every 60 seconds.
namespace :
namespace.
statefulset :
statefulset.
kube_statefulset_created
ALPHA
(project)
kube_statefulset_created
GAUGE , DOUBLE , 1
k8s_container
Unix creation timestamp. Sampled every 60 seconds.
namespace :
namespace.
statefulset :
statefulset.
kube_statefulset_labels
ALPHA
(project)
kube_statefulset_labels
GAUGE , DOUBLE , 1
k8s_container
Kubernetes labels converted to Prometheus labels. Sampled every 60 seconds.
label_addons_gke_io_stackdriver :
label_addons_gke_io_stackdriver.
label_addons_k8s_io_monitoring :
label_addons_k8s_io_monitoring.
label_addons_sigs_k8s_io_Stackdriver :
label_addons_sigs_k8s_io_Stackdriver.
label_addons_sigs_k8s_io_stackdriver :
label_addons_sigs_k8s_io_stackdriver.
label_app :
label_app.
label_bundle_gke_io_component_name :
label_bundle_gke_io_component_name.
label_bundle_gke_io_component_version :
label_bundle_gke_io_component_version.
label_bundle_gke_io_package_deployment_name :
label_bundle_gke_io_package_deployment_name.
label_bundle_gke_io_package_deployment_namespace :
label_bundle_gke_io_package_deployment_namespace.
label_cnrm_cloud_google_com_component :
label_cnrm_cloud_google_com_component.
label_cnrm_cloud_google_com_system :
label_cnrm_cloud_google_com_system.
label_component :
label_component.
label_configmanagement_gke_io_configmanagement :
label_configmanagement_gke_io_configmanagement.
label_k8s_app :
label_k8s_app.
label_managed_by :
label_managed_by.
label_tier :
label_tier.
label_version :
label_version.
namespace :
namespace.
statefulset :
statefulset.
kube_statefulset_metadata_generation
ALPHA
(project)
kube_statefulset_metadata_generation
GAUGE , DOUBLE , 1
k8s_container
Sequence number representing a specific generation of the desired state for the StatefulSet. Sampled every 60 seconds.
namespace :
namespace.
statefulset :
statefulset.
kube_statefulset_metadata_generation/gauge
ALPHA
(project)
kube_statefulset_metadata_generation
GAUGE , DOUBLE , 1
prometheus_target
Sequence number representing a specific generation of the desired state for the StatefulSet. Sampled every 30 seconds.
statefulset :
statefulset.
kube_statefulset_replicas
ALPHA
(project)
kube_statefulset_replicas
GAUGE , DOUBLE , 1
k8s_container
Number of desired pods for a StatefulSet. Sampled every 60 seconds.
namespace :
namespace.
statefulset :
statefulset.
kube_statefulset_replicas/gauge
ALPHA
(project)
kube_statefulset_replicas
GAUGE , DOUBLE , 1
prometheus_target
Number of desired pods for a StatefulSet. Sampled every 30 seconds.
statefulset :
statefulset.
kube_statefulset_status_current_revision
ALPHA
(project)
kube_statefulset_status_current_revision
GAUGE , DOUBLE , 1
k8s_container
Indicates the version of the StatefulSet used to generate Pods in the sequence [0,currentReplicas). Sampled every 60 seconds.
namespace :
namespace.
revision :
revision.
statefulset :
statefulset.
kube_statefulset_status_observed_generation
ALPHA
(project)
kube_statefulset_status_observed_generation
GAUGE , DOUBLE , 1
k8s_container
The generation observed by the StatefulSet controller. Sampled every 60 seconds.
namespace :
namespace.
statefulset :
statefulset.
kube_statefulset_status_observed_generation/gauge
ALPHA
(project)
kube_statefulset_status_observed_generation
GAUGE , DOUBLE , 1
prometheus_target
The generation observed by the StatefulSet controller. Sampled every 30 seconds.
statefulset :
statefulset.
kube_statefulset_status_replicas
ALPHA
(project)
kube_statefulset_status_replicas
GAUGE , DOUBLE , 1
k8s_container
The number of replicas per StatefulSet. Sampled every 60 seconds.
namespace :
namespace.
statefulset :
statefulset.
kube_statefulset_status_replicas/gauge
ALPHA
(project)
kube_statefulset_status_replicas
GAUGE , DOUBLE , 1
prometheus_target
The number of replicas per StatefulSet. Sampled every 30 seconds.
statefulset :
statefulset.
kube_statefulset_status_replicas_available
ALPHA
(project)
kube_statefulset_status_replicas_available
GAUGE , DOUBLE , 1
k8s_container
The number of available replicas per StatefulSet. Sampled every 60 seconds.
namespace :
namespace.
statefulset :
statefulset.
kube_statefulset_status_replicas_available/gauge
ALPHA
(project)
kube_statefulset_status_replicas_available
GAUGE , DOUBLE , 1
prometheus_target
The number of available replicas per StatefulSet. Sampled every 30 seconds.
statefulset :
statefulset.
kube_statefulset_status_replicas_current
ALPHA
(project)
kube_statefulset_status_replicas_current
GAUGE , DOUBLE , 1
k8s_container
The number of current replicas per StatefulSet. Sampled every 60 seconds.
namespace :
namespace.
statefulset :
statefulset.
kube_statefulset_status_replicas_current/gauge
ALPHA
(project)
kube_statefulset_status_replicas_current
GAUGE , DOUBLE , 1
prometheus_target
The number of current replicas per StatefulSet. Sampled every 30 seconds.
statefulset :
statefulset.
kube_statefulset_status_replicas_ready
ALPHA
(project)
kube_statefulset_status_replicas_ready
GAUGE , DOUBLE , 1
k8s_container
The number of ready replicas per StatefulSet. Sampled every 60 seconds.
namespace :
namespace.
statefulset :
statefulset.
kube_statefulset_status_replicas_ready/gauge
ALPHA
(project)
kube_statefulset_status_replicas_ready
GAUGE , DOUBLE , 1
prometheus_target
The number of ready replicas per StatefulSet. Sampled every 30 seconds.
statefulset :
statefulset.
kube_statefulset_status_replicas_updated
ALPHA
(project)
kube_statefulset_status_replicas_updated
GAUGE , DOUBLE , 1
k8s_container
The number of updated replicas per StatefulSet. Sampled every 60 seconds.
namespace :
namespace.
statefulset :
statefulset.
kube_statefulset_status_replicas_updated/gauge
ALPHA
(project)
kube_statefulset_status_replicas_updated
GAUGE , DOUBLE , 1
prometheus_target
The number of updated replicas per StatefulSet. Sampled every 30 seconds.
statefulset :
statefulset.
kube_statefulset_status_update_revision
ALPHA
(project)
kube_statefulset_status_update_revision
GAUGE , DOUBLE , 1
k8s_container
Indicates the version of the StatefulSet used to generate Pods in the sequence [replicas-updatedReplicas,replicas). Sampled every 60 seconds.
namespace :
namespace.
revision :
revision.
statefulset :
statefulset.
kube_storageclass_annotations
ALPHA
(project)
kube_storageclass_annotations
GAUGE , DOUBLE , 1
k8s_container
Kubernetes annotations converted to Prometheus labels. Sampled every 60 seconds.
storageclass :
storageclass.
kube_storageclass_created
ALPHA
(project)
kube_storageclass_created
GAUGE , DOUBLE , 1
k8s_container
Unix creation timestamp. Sampled every 60 seconds.
storageclass :
storageclass.
kube_storageclass_info
ALPHA
(project)
kube_storageclass_info
GAUGE , DOUBLE , 1
k8s_container
Information about storageclass. Sampled every 60 seconds.
provisioner :
provisioner.
reclaimPolicy :
reclaimPolicy.
reclaim_policy :
reclaim_policy.
storageclass :
storageclass.
volumeBindingMode :
volumeBindingMode.
volume_binding_mode :
volume_binding_mode.
kube_storageclass_labels
ALPHA
(project)
kube_storageclass_labels
GAUGE , DOUBLE , 1
k8s_container
Kubernetes labels converted to Prometheus labels. Sampled every 60 seconds.
label_bundle_gke_io_component_name :
label_bundle_gke_io_component_name.
label_bundle_gke_io_component_version :
label_bundle_gke_io_component_version.
label_bundle_gke_io_package_deployment_name :
label_bundle_gke_io_package_deployment_name.
label_bundle_gke_io_package_deployment_namespace :
label_bundle_gke_io_package_deployment_namespace.
label_user_cluster_namespace :
label_user_cluster_namespace.
storageclass :
storageclass.
kube_validatingwebhookconfiguration_created
ALPHA
(project)
kube_validatingwebhookconfiguration_created
GAUGE , DOUBLE , 1
k8s_container
Unix creation timestamp. Sampled every 60 seconds.
validatingwebhookconfiguration :
validatingwebhookconfiguration.
kube_validatingwebhookconfiguration_created/gauge
ALPHA
(project)
kube_validatingwebhookconfiguration_created
GAUGE , DOUBLE , 1
prometheus_target
Unix creation timestamp. Sampled every 30 seconds.
validatingwebhookconfiguration :
validatingwebhookconfiguration.
kube_validatingwebhookconfiguration_info
ALPHA
(project)
kube_validatingwebhookconfiguration_info
GAUGE , DOUBLE , 1
k8s_container
Information about the ValidatingWebhookConfiguration. Sampled every 60 seconds.
validatingwebhookconfiguration :
validatingwebhookconfiguration.
kube_validatingwebhookconfiguration_metadata_resource_version
ALPHA
(project)
kube_validatingwebhookconfiguration_metadata_resource_version
GAUGE , DOUBLE , 1
k8s_container
Resource version representing a specific version of the ValidatingWebhookConfiguration. Sampled every 60 seconds.
validatingwebhookconfiguration :
validatingwebhookconfiguration.
kube_volumeattachment_created
ALPHA
(project)
kube_volumeattachment_created
GAUGE , DOUBLE , 1
k8s_container
Unix creation timestamp. Sampled every 60 seconds.
volumeattachment :
volumeattachment.
kube_volumeattachment_info
ALPHA
(project)
kube_volumeattachment_info
GAUGE , DOUBLE , 1
k8s_container
Information about volumeattachment. Sampled every 60 seconds.
attacher :
attacher.
node :
node.
volumeattachment :
volumeattachment.
kube_volumeattachment_labels
ALPHA
(project)
kube_volumeattachment_labels
GAUGE , DOUBLE , 1
k8s_container
Kubernetes labels converted to Prometheus labels. Sampled every 60 seconds.
volumeattachment :
volumeattachment.
kube_volumeattachment_spec_source_persistentvolume
ALPHA
(project)
kube_volumeattachment_spec_source_persistentvolume
GAUGE , DOUBLE , 1
k8s_container
PersistentVolume source reference. Sampled every 60 seconds.
volumeattachment :
volumeattachment.
volumename :
volumename.
kube_volumeattachment_status_attached
ALPHA
(project)
kube_volumeattachment_status_attached
GAUGE , DOUBLE , 1
k8s_container
Information about volumeattachment. Sampled every 60 seconds.
volumeattachment :
volumeattachment.
kube_volumeattachment_status_attachment_metadata
ALPHA
(project)
kube_volumeattachment_status_attachment_metadata
GAUGE , DOUBLE , 1
k8s_container
volumeattachment metadata. Sampled every 60 seconds.
metadata_disk_uuid :
metadata_disk_uuid.
metadata_type :
metadata_type.
volumeattachment :
volumeattachment.
kubedns_dnsmasq_errors
ALPHA
(project)
kubedns_dnsmasq_errors
CUMULATIVE , DOUBLE , 1
k8s_container
Number of errors that have occurred getting metrics. Sampled every 60 seconds.
kubedns_dnsmasq_evictions
ALPHA
(project)
kubedns_dnsmasq_evictions
CUMULATIVE , DOUBLE , 1
k8s_container
Counter of DNS cache evictions (from start of process). Sampled every 60 seconds.
kubedns_dnsmasq_hits
ALPHA
(project)
kubedns_dnsmasq_hits
CUMULATIVE , DOUBLE , 1
k8s_container
Number of DNS cache hits (from start of process). Sampled every 60 seconds.
kubedns_dnsmasq_insertions
ALPHA
(project)
kubedns_dnsmasq_insertions
CUMULATIVE , DOUBLE , 1
k8s_container
Counter of DNS cache insertions (from start of process). Sampled every 60 seconds.
kubedns_dnsmasq_max_size
ALPHA
(project)
kubedns_dnsmasq_max_size
CUMULATIVE , DOUBLE , 1
k8s_container
Maximum size of the DNS cache. Sampled every 60 seconds.
kubedns_dnsmasq_misses
ALPHA
(project)
kubedns_dnsmasq_misses
CUMULATIVE , DOUBLE , 1
k8s_container
Number of DNS cache misses (from start of process). Sampled every 60 seconds.
kubedns_probe_dnsmasq_errors
ALPHA
(project)
kubedns_probe_dnsmasq_errors
CUMULATIVE , DOUBLE , 1
k8s_container
Count of errors in name resolution of dnsmasq. Sampled every 60 seconds.
kubedns_probe_dnsmasq_latency_ms
ALPHA
(project)
kubedns_probe_dnsmasq_latency_ms
CUMULATIVE , DISTRIBUTION , 1
k8s_container
Latency of the DNS probe request dnsmasq. Sampled every 60 seconds.
kubedns_probe_kubedns_errors
ALPHA
(project)
kubedns_probe_kubedns_errors
CUMULATIVE , DOUBLE , 1
k8s_container
Count of errors in name resolution of kubedns. Sampled every 60 seconds.
kubedns_probe_kubedns_latency_ms
ALPHA
(project)
kubedns_probe_kubedns_latency_ms
CUMULATIVE , DISTRIBUTION , 1
k8s_container
Latency of the DNS probe request kubedns. Sampled every 60 seconds.
kubelet_certificate_manager_client_expiration_renew_errors
ALPHA
(project)
kubelet_certificate_manager_client_expiration_renew_errors
CUMULATIVE , DOUBLE , 1
k8s_node
Counter of certificate renewal errors. Sampled every 60 seconds.
kubelet_certificate_manager_client_expiration_seconds
ALPHA
(project)
kubelet_certificate_manager_client_expiration_seconds
GAUGE , DOUBLE , s
k8s_node
Gauge of the lifetime of a certificate. The value is the date the certificate will expire in seconds since January 1, 1970 UTC. Sampled every 60 seconds.
kubelet_certificate_manager_client_ttl_seconds
ALPHA
(project)
kubelet_certificate_manager_client_ttl_seconds
GAUGE , DOUBLE , s
k8s_node
Gauge of the TTL (time-to-live) of the Kubelet's client certificate. The value is in seconds until certificate expiry (negative if already expired). If client certificate is invalid or unused, the value will be +INF. Sampled every 60 seconds.
kubelet_certificate_manager_server_expiration_seconds
ALPHA
(project)
kubelet_certificate_manager_server_expiration_seconds
GAUGE , DOUBLE , s
k8s_node
Gauge of the lifetime of a certificate. The value is the date the certificate will expire in seconds since January 1, 1970 UTC. Sampled every 60 seconds.
kubelet_certificate_manager_server_rotation_seconds
ALPHA
(project)
kubelet_certificate_manager_server_rotation_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_node
Histogram of the number of seconds the previous certificate lived before being rotated. Sampled every 60 seconds.
kubelet_certificate_manager_server_rotation_seconds/histogram
ALPHA
(project)
kubelet_certificate_manager_server_rotation_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
Histogram of the number of seconds the previous certificate lived before being rotated. Sampled every 30 seconds.
kubelet_certificate_manager_server_ttl_seconds
ALPHA
(project)
kubelet_certificate_manager_server_ttl_seconds
GAUGE , DOUBLE , s
k8s_node
Gauge of the shortest TTL (time-to-live) of the Kubelet's serving certificate. The value is in seconds until certificate expiry (negative if already expired). If serving certificate is invalid or unused, the value will be +INF. Sampled every 60 seconds.
kubelet_certificate_manager_server_ttl_seconds/gauge
ALPHA
(project)
kubelet_certificate_manager_server_ttl_seconds
GAUGE , DOUBLE , s
prometheus_target
Gauge of the shortest TTL (time-to-live) of the Kubelet's serving certificate. The value is in seconds until certificate expiry (negative if already expired). If serving certificate is invalid or unused, the value will be +INF. Sampled every 30 seconds.
kubelet_cgroup_manager_duration_seconds
ALPHA
(project)
kubelet_cgroup_manager_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_node
Duration in seconds for cgroup manager operations. Broken down by method. Sampled every 60 seconds.
operation_type :
operation_type.
kubelet_cgroup_manager_duration_seconds/histogram
ALPHA
(project)
kubelet_cgroup_manager_duration_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
Duration in seconds for cgroup manager operations. Broken down by method. Sampled every 30 seconds.
operation_type :
operation_type.
kubelet_cgroup_manager_latency_microseconds
ALPHA
(project)
kubelet_cgroup_manager_latency_microseconds
GAUGE , DOUBLE , us
k8s_node
(Deprecated) Latency in microseconds for cgroup manager operations. Broken down by method. Sampled every 60 seconds.
operation_type :
operation_type.
quantile :
quantile.
kubelet_cgroup_manager_latency_microseconds_count
ALPHA
(project)
kubelet_cgroup_manager_latency_microseconds_count
CUMULATIVE , INT64 , 1
k8s_node
(Deprecated) Latency in microseconds for cgroup manager operations. Broken down by method. Sampled every 60 seconds.
operation_type :
operation_type.
kubelet_cgroup_manager_latency_microseconds_sum
ALPHA
(project)
kubelet_cgroup_manager_latency_microseconds_sum
CUMULATIVE , DOUBLE , 1
k8s_node
(Deprecated) Latency in microseconds for cgroup manager operations. Broken down by method. Sampled every 60 seconds.
operation_type :
operation_type.
kubelet_container_log_filesystem_used_bytes
ALPHA
(project)
kubelet_container_log_filesystem_used_bytes
GAUGE , DOUBLE , By
k8s_node
Bytes used by the container's logs on the filesystem. Sampled every 60 seconds.
container :
container.
namespace :
namespace.
pod :
pod.
uid :
uid.
kubelet_containers_per_pod_count
ALPHA
(project)
kubelet_containers_per_pod_count
CUMULATIVE , DISTRIBUTION , 1
k8s_node
The number of containers per pod. Sampled every 60 seconds.
kubelet_containers_per_pod_count_count
ALPHA
(project)
kubelet_containers_per_pod_count_count
CUMULATIVE , INT64 , 1
k8s_node
The number of containers per pod. Sampled every 60 seconds.
kubelet_containers_per_pod_count_sum
ALPHA
(project)
kubelet_containers_per_pod_count_sum
CUMULATIVE , DOUBLE , 1
k8s_node
The number of containers per pod. Sampled every 60 seconds.
kubelet_docker_operations
ALPHA
(project)
kubelet_docker_operations
CUMULATIVE , DOUBLE , 1
k8s_node
(Deprecated) Cumulative number of Docker operations by operation type. Sampled every 60 seconds.
operation_type :
operation_type.
kubelet_docker_operations_duration_seconds
ALPHA
(project)
kubelet_docker_operations_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_node
Latency in seconds of Docker operations. Broken down by operation type. Sampled every 60 seconds.
operation_type :
operation_type.
kubelet_docker_operations_errors
ALPHA
(project)
kubelet_docker_operations_errors
CUMULATIVE , DOUBLE , 1
k8s_node
(Deprecated) Cumulative number of Docker operation errors by operation type. Sampled every 60 seconds.
operation_type :
operation_type.
kubelet_docker_operations_errors_total
ALPHA
(project)
kubelet_docker_operations_errors_total
CUMULATIVE , DOUBLE , 1
k8s_node
Cumulative number of Docker operation errors by operation type. Sampled every 60 seconds.
operation_type :
operation_type.
kubelet_docker_operations_latency_microseconds
ALPHA
(project)
kubelet_docker_operations_latency_microseconds
GAUGE , DOUBLE , us
k8s_node
(Deprecated) Latency in microseconds of Docker operations. Broken down by operation type. Sampled every 60 seconds.
operation_type :
operation_type.
quantile :
quantile.
kubelet_docker_operations_latency_microseconds_count
ALPHA
(project)
kubelet_docker_operations_latency_microseconds_count
CUMULATIVE , INT64 , 1
k8s_node
(Deprecated) Latency in microseconds of Docker operations. Broken down by operation type. Sampled every 60 seconds.
operation_type :
operation_type.
kubelet_docker_operations_latency_microseconds_sum
ALPHA
(project)
kubelet_docker_operations_latency_microseconds_sum
CUMULATIVE , DOUBLE , 1
k8s_node
(Deprecated) Latency in microseconds of Docker operations. Broken down by operation type. Sampled every 60 seconds.
operation_type :
operation_type.
kubelet_docker_operations_timeout
ALPHA
(project)
kubelet_docker_operations_timeout
CUMULATIVE , DOUBLE , 1
k8s_node
(Deprecated) Cumulative number of Docker operation timeout by operation type. Sampled every 60 seconds.
operation_type :
operation_type.
kubelet_docker_operations_timeout_total
ALPHA
(project)
kubelet_docker_operations_timeout_total
CUMULATIVE , DOUBLE , 1
k8s_node
Cumulative number of Docker operation timeout by operation type. Sampled every 60 seconds.
operation_type :
operation_type.
kubelet_docker_operations_total
ALPHA
(project)
kubelet_docker_operations_total
CUMULATIVE , DOUBLE , 1
k8s_node
Cumulative number of Docker operations by operation type. Sampled every 60 seconds.
operation_type :
operation_type.
kubelet_http_inflight_requests
ALPHA
(project)
kubelet_http_inflight_requests
GAUGE , DOUBLE , 1
k8s_node
Number of the inflight http requests. Sampled every 60 seconds.
long_running :
long_running.
method :
method.
path :
path.
server_type :
server_type.
kubelet_http_inflight_requests/gauge
ALPHA
(project)
kubelet_http_inflight_requests
GAUGE , DOUBLE , 1
prometheus_target
Number of the inflight http requests. Sampled every 30 seconds.
long_running :
long_running.
method :
method.
path :
path.
server_type :
server_type.
kubelet_http_requests_duration_seconds
ALPHA
(project)
kubelet_http_requests_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_node
Duration in seconds to serve http requests. Sampled every 60 seconds.
long_running :
long_running.
method :
method.
path :
path.
server_type :
server_type.
kubelet_http_requests_duration_seconds/histogram
ALPHA
(project)
kubelet_http_requests_duration_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
Duration in seconds to serve http requests. Sampled every 30 seconds.
long_running :
long_running.
method :
method.
path :
path.
server_type :
server_type.
kubelet_http_requests_total
ALPHA
(project)
kubelet_http_requests_total
CUMULATIVE , DOUBLE , 1
k8s_node
Number of the http requests received since the server started. Sampled every 60 seconds.
long_running :
long_running.
method :
method.
path :
path.
server_type :
server_type.
kubelet_http_requests_total/counter
ALPHA
(project)
kubelet_http_requests_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Number of the http requests received since the server started. Sampled every 30 seconds.
long_running :
long_running.
method :
method.
path :
path.
server_type :
server_type.
kubelet_network_plugin_operations_duration_seconds
ALPHA
(project)
kubelet_network_plugin_operations_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_node
Latency in seconds of network plugin operations. Broken down by operation type. Sampled every 60 seconds.
operation_type :
operation_type.
kubelet_network_plugin_operations_latency_microseconds
ALPHA
(project)
kubelet_network_plugin_operations_latency_microseconds
GAUGE , DOUBLE , us
k8s_node
(Deprecated) Latency in microseconds of network plugin operations. Broken down by operation type. Sampled every 60 seconds.
operation_type :
operation_type.
quantile :
quantile.
kubelet_network_plugin_operations_latency_microseconds_count
ALPHA
(project)
kubelet_network_plugin_operations_latency_microseconds_count
CUMULATIVE , INT64 , 1
k8s_node
(Deprecated) Latency in microseconds of network plugin operations. Broken down by operation type. Sampled every 60 seconds.
operation_type :
operation_type.
kubelet_network_plugin_operations_latency_microseconds_sum
ALPHA
(project)
kubelet_network_plugin_operations_latency_microseconds_sum
CUMULATIVE , DOUBLE , 1
k8s_node
(Deprecated) Latency in microseconds of network plugin operations. Broken down by operation type. Sampled every 60 seconds.
operation_type :
operation_type.
kubelet_node_config_error
ALPHA
(project)
kubelet_node_config_error
GAUGE , DOUBLE , 1
k8s_node
This metric is true (1) if the node is experiencing a configuration-related error, false (0) otherwise. Sampled every 60 seconds.
kubelet_node_name
ALPHA
(project)
kubelet_node_name
GAUGE , DOUBLE , 1
k8s_node
The node's name. The count is always 1. Sampled every 60 seconds.
node :
node.
kubelet_pleg_discard_events
ALPHA
(project)
kubelet_pleg_discard_events
CUMULATIVE , DOUBLE , 1
k8s_node
The number of discard events in PLEG. Sampled every 60 seconds.
kubelet_pleg_last_seen_seconds
ALPHA
(project)
kubelet_pleg_last_seen_seconds
GAUGE , DOUBLE , s
k8s_node
Timestamp in seconds when PLEG was last seen active. Sampled every 60 seconds.
kubelet_pleg_relist_duration_seconds
ALPHA
(project)
kubelet_pleg_relist_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_node
Duration in seconds for relisting pods in PLEG. Sampled every 60 seconds.
kubelet_pleg_relist_duration_seconds/histogram
ALPHA
(project)
kubelet_pleg_relist_duration_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
Duration in seconds for relisting pods in PLEG. Sampled every 30 seconds.
kubelet_pleg_relist_interval_microseconds
ALPHA
(project)
kubelet_pleg_relist_interval_microseconds
GAUGE , DOUBLE , us
k8s_node
(Deprecated) Interval in microseconds between relisting in PLEG. Sampled every 60 seconds.
quantile :
quantile.
kubelet_pleg_relist_interval_microseconds_count
ALPHA
(project)
kubelet_pleg_relist_interval_microseconds_count
CUMULATIVE , INT64 , 1
k8s_node
(Deprecated) Interval in microseconds between relisting in PLEG. Sampled every 60 seconds.
kubelet_pleg_relist_interval_microseconds_sum
ALPHA
(project)
kubelet_pleg_relist_interval_microseconds_sum
CUMULATIVE , DOUBLE , 1
k8s_node
(Deprecated) Interval in microseconds between relisting in PLEG. Sampled every 60 seconds.
kubelet_pleg_relist_interval_seconds
ALPHA
(project)
kubelet_pleg_relist_interval_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_node
Interval in seconds between relisting in PLEG. Sampled every 60 seconds.
kubelet_pleg_relist_interval_seconds/histogram
ALPHA
(project)
kubelet_pleg_relist_interval_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
Interval in seconds between relisting in PLEG. Sampled every 30 seconds.
kubelet_pleg_relist_latency_microseconds
ALPHA
(project)
kubelet_pleg_relist_latency_microseconds
GAUGE , DOUBLE , us
k8s_node
(Deprecated) Latency in microseconds for relisting pods in PLEG. Sampled every 60 seconds.
quantile :
quantile.
kubelet_pleg_relist_latency_microseconds_count
ALPHA
(project)
kubelet_pleg_relist_latency_microseconds_count
CUMULATIVE , INT64 , 1
k8s_node
(Deprecated) Latency in microseconds for relisting pods in PLEG. Sampled every 60 seconds.
kubelet_pleg_relist_latency_microseconds_sum
ALPHA
(project)
kubelet_pleg_relist_latency_microseconds_sum
CUMULATIVE , DOUBLE , 1
k8s_node
(Deprecated) Latency in microseconds for relisting pods in PLEG. Sampled every 60 seconds.
kubelet_pod_start_duration_seconds
ALPHA
(project)
kubelet_pod_start_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_node
Duration in seconds for a single pod to go from pending to running. Sampled every 60 seconds.
kubelet_pod_start_duration_seconds/histogram
ALPHA
(project)
kubelet_pod_start_duration_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
Duration in seconds for a single pod to go from pending to running. Sampled every 30 seconds.
kubelet_pod_start_latency_microseconds
ALPHA
(project)
kubelet_pod_start_latency_microseconds
GAUGE , DOUBLE , us
k8s_node
(Deprecated) Latency in microseconds for a single pod to go from pending to running. Sampled every 60 seconds.
quantile :
quantile.
kubelet_pod_start_latency_microseconds_count
ALPHA
(project)
kubelet_pod_start_latency_microseconds_count
CUMULATIVE , INT64 , 1
k8s_node
(Deprecated) Latency in microseconds for a single pod to go from pending to running. Sampled every 60 seconds.
kubelet_pod_start_latency_microseconds_sum
ALPHA
(project)
kubelet_pod_start_latency_microseconds_sum
CUMULATIVE , DOUBLE , 1
k8s_node
(Deprecated) Latency in microseconds for a single pod to go from pending to running. Sampled every 60 seconds.
kubelet_pod_worker_duration_seconds
ALPHA
(project)
kubelet_pod_worker_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_node
Duration in seconds to sync a single pod. Broken down by operation type: create, update, or sync. Sampled every 60 seconds.
operation_type :
operation_type.
kubelet_pod_worker_duration_seconds/histogram
ALPHA
(project)
kubelet_pod_worker_duration_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
Duration in seconds to sync a single pod. Broken down by operation type: create, update, or sync. Sampled every 30 seconds.
operation_type :
operation_type.
kubelet_pod_worker_latency_microseconds
ALPHA
(project)
kubelet_pod_worker_latency_microseconds
GAUGE , DOUBLE , us
k8s_node
(Deprecated) Latency in microseconds to sync a single pod. Broken down by operation type: create, update, or sync. Sampled every 60 seconds.
operation_type :
operation_type.
quantile :
quantile.
kubelet_pod_worker_latency_microseconds_count
ALPHA
(project)
kubelet_pod_worker_latency_microseconds_count
CUMULATIVE , INT64 , 1
k8s_node
(Deprecated) Latency in microseconds to sync a single pod. Broken down by operation type: create, update, or sync. Sampled every 60 seconds.
operation_type :
operation_type.
kubelet_pod_worker_latency_microseconds_sum
ALPHA
(project)
kubelet_pod_worker_latency_microseconds_sum
CUMULATIVE , DOUBLE , 1
k8s_node
(Deprecated) Latency in microseconds to sync a single pod. Broken down by operation type: create, update, or sync. Sampled every 60 seconds.
operation_type :
operation_type.
kubelet_pod_worker_start_duration_seconds
ALPHA
(project)
kubelet_pod_worker_start_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_node
Duration in seconds from seeing a pod to starting a worker. Sampled every 60 seconds.
kubelet_pod_worker_start_duration_seconds/histogram
ALPHA
(project)
kubelet_pod_worker_start_duration_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
Duration in seconds from seeing a pod to starting a worker. Sampled every 30 seconds.
kubelet_pod_worker_start_latency_microseconds
ALPHA
(project)
kubelet_pod_worker_start_latency_microseconds
GAUGE , DOUBLE , us
k8s_node
(Deprecated) Latency in microseconds from seeing a pod to starting a worker. Sampled every 60 seconds.
quantile :
quantile.
kubelet_pod_worker_start_latency_microseconds_count
ALPHA
(project)
kubelet_pod_worker_start_latency_microseconds_count
CUMULATIVE , INT64 , 1
k8s_node
(Deprecated) Latency in microseconds from seeing a pod to starting a worker. Sampled every 60 seconds.
kubelet_pod_worker_start_latency_microseconds_sum
ALPHA
(project)
kubelet_pod_worker_start_latency_microseconds_sum
CUMULATIVE , DOUBLE , 1
k8s_node
(Deprecated) Latency in microseconds from seeing a pod to starting a worker. Sampled every 60 seconds.
kubelet_run_podsandbox_duration_seconds
ALPHA
(project)
kubelet_run_podsandbox_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_node
Duration in seconds of the run_podsandbox operations. Broken down by RuntimeClass.Handler. Sampled every 60 seconds.
kubelet_run_podsandbox_duration_seconds/histogram
ALPHA
(project)
kubelet_run_podsandbox_duration_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
Duration in seconds of the run_podsandbox operations. Broken down by RuntimeClass.Handler. Sampled every 30 seconds.
runtime_handler :
runtime_handler.
kubelet_running_container_count
ALPHA
(project)
kubelet_running_container_count
GAUGE , DOUBLE , 1
k8s_node
Number of containers currently running. Sampled every 60 seconds.
kubelet_running_containers
ALPHA
(project)
kubelet_running_containers
GAUGE , DOUBLE , 1
k8s_node
Number of containers currently running. Sampled every 60 seconds.
container_state :
container_state.
kubelet_running_pod_count
ALPHA
(project)
kubelet_running_pod_count
GAUGE , DOUBLE , 1
k8s_node
Number of pods currently running. Sampled every 60 seconds.
kubelet_running_pods
ALPHA
(project)
kubelet_running_pods
GAUGE , DOUBLE , 1
k8s_node
Number of pods currently running. Sampled every 60 seconds.
kubelet_running_pods/gauge
ALPHA
(project)
kubelet_running_pods
GAUGE , DOUBLE , 1
prometheus_target
Number of pods currently running. Sampled every 30 seconds.
kubelet_runtime_operations
ALPHA
(project)
kubelet_runtime_operations
CUMULATIVE , DOUBLE , 1
k8s_node
(Deprecated) Cumulative number of runtime operations by operation type. Sampled every 60 seconds.
operation_type :
operation_type.
kubelet_runtime_operations_duration_seconds
ALPHA
(project)
kubelet_runtime_operations_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_node
Duration in seconds of runtime operations. Broken down by operation type. Sampled every 60 seconds.
operation_type :
operation_type.
kubelet_runtime_operations_duration_seconds/histogram
ALPHA
(project)
kubelet_runtime_operations_duration_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
Duration in seconds of runtime operations. Broken down by operation type. Sampled every 30 seconds.
operation_type :
operation_type.
kubelet_runtime_operations_errors
ALPHA
(project)
kubelet_runtime_operations_errors
CUMULATIVE , DOUBLE , 1
k8s_node
(Deprecated) Cumulative number of runtime operation errors by operation type. Sampled every 60 seconds.
operation_type :
operation_type.
kubelet_runtime_operations_errors_total
ALPHA
(project)
kubelet_runtime_operations_errors_total
CUMULATIVE , DOUBLE , 1
k8s_node
Cumulative number of runtime operation errors by operation type. Sampled every 60 seconds.
operation_type :
operation_type.
kubelet_runtime_operations_errors_total/counter
ALPHA
(project)
kubelet_runtime_operations_errors_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Cumulative number of runtime operation errors by operation type. Sampled every 30 seconds.
operation_type :
operation_type.
kubelet_runtime_operations_latency_microseconds
ALPHA
(project)
kubelet_runtime_operations_latency_microseconds
GAUGE , DOUBLE , us
k8s_node
(Deprecated) Latency in microseconds of runtime operations. Broken down by operation type. Sampled every 60 seconds.
operation_type :
operation_type.
quantile :
quantile.
kubelet_runtime_operations_latency_microseconds_count
ALPHA
(project)
kubelet_runtime_operations_latency_microseconds_count
CUMULATIVE , INT64 , 1
k8s_node
(Deprecated) Latency in microseconds of runtime operations. Broken down by operation type. Sampled every 60 seconds.
operation_type :
operation_type.
kubelet_runtime_operations_latency_microseconds_sum
ALPHA
(project)
kubelet_runtime_operations_latency_microseconds_sum
CUMULATIVE , DOUBLE , 1
k8s_node
(Deprecated) Latency in microseconds of runtime operations. Broken down by operation type. Sampled every 60 seconds.
operation_type :
operation_type.
kubelet_runtime_operations_total
ALPHA
(project)
kubelet_runtime_operations_total
CUMULATIVE , DOUBLE , 1
k8s_node
Cumulative number of runtime operations by operation type. Sampled every 60 seconds.
operation_type :
operation_type.
kubelet_runtime_operations_total/counter
ALPHA
(project)
kubelet_runtime_operations_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Cumulative number of runtime operations by operation type. Sampled every 30 seconds.
operation_type :
operation_type.
kubelet_server_expiration_renew_errors
ALPHA
(project)
kubelet_server_expiration_renew_errors
CUMULATIVE , DOUBLE , 1
k8s_node
Counter of certificate renewal errors. Sampled every 60 seconds.
kubelet_started_pods_errors_total
ALPHA
(project)
kubelet_started_pods_errors_total
CUMULATIVE , DOUBLE , 1
k8s_node
[ALPHA] Cumulative number of errors when starting pods. Sampled every 60 seconds.
kubelet_started_pods_errors_total/counter
ALPHA
(project)
kubelet_started_pods_errors_total
CUMULATIVE , DOUBLE , 1
prometheus_target
[ALPHA] Cumulative number of errors when starting pods. Sampled every 30 seconds.
kubelet_volume_stats_available_bytes
ALPHA
(project)
kubelet_volume_stats_available_bytes
GAUGE , DOUBLE , By
k8s_node
Number of available bytes in the volume. Sampled every 60 seconds.
namespace :
namespace.
persistentvolumeclaim :
persistentvolumeclaim.
kubelet_volume_stats_available_bytes/gauge
ALPHA
(project)
kubelet_volume_stats_available_bytes
GAUGE , DOUBLE , By
prometheus_target
Number of available bytes in the volume. Sampled every 30 seconds.
persistentvolumeclaim :
persistentvolumeclaim.
kubelet_volume_stats_capacity_bytes
ALPHA
(project)
kubelet_volume_stats_capacity_bytes
GAUGE , DOUBLE , By
k8s_node
Capacity in bytes of the volume. Sampled every 60 seconds.
namespace :
namespace.
persistentvolumeclaim :
persistentvolumeclaim.
kubelet_volume_stats_capacity_bytes/gauge
ALPHA
(project)
kubelet_volume_stats_capacity_bytes
GAUGE , DOUBLE , By
prometheus_target
Capacity in bytes of the volume. Sampled every 30 seconds.
persistentvolumeclaim :
persistentvolumeclaim.
kubelet_volume_stats_inodes
ALPHA
(project)
kubelet_volume_stats_inodes
GAUGE , DOUBLE , 1
k8s_node
Maximum number of inodes in the volume. Sampled every 60 seconds.
namespace :
namespace.
persistentvolumeclaim :
persistentvolumeclaim.
kubelet_volume_stats_inodes/gauge
ALPHA
(project)
kubelet_volume_stats_inodes
GAUGE , DOUBLE , 1
prometheus_target
Maximum number of inodes in the volume. Sampled every 30 seconds.
persistentvolumeclaim :
persistentvolumeclaim.
kubelet_volume_stats_inodes_free
ALPHA
(project)
kubelet_volume_stats_inodes_free
GAUGE , DOUBLE , 1
k8s_node
Number of free inodes in the volume. Sampled every 60 seconds.
namespace :
namespace.
persistentvolumeclaim :
persistentvolumeclaim.
kubelet_volume_stats_inodes_free/gauge
ALPHA
(project)
kubelet_volume_stats_inodes_free
GAUGE , DOUBLE , 1
prometheus_target
Number of free inodes in the volume. Sampled every 30 seconds.
persistentvolumeclaim :
persistentvolumeclaim.
kubelet_volume_stats_inodes_used
ALPHA
(project)
kubelet_volume_stats_inodes_used
GAUGE , DOUBLE , 1
k8s_node
Number of used inodes in the volume. Sampled every 60 seconds.
namespace :
namespace.
persistentvolumeclaim :
persistentvolumeclaim.
kubelet_volume_stats_inodes_used/gauge
ALPHA
(project)
kubelet_volume_stats_inodes_used
GAUGE , DOUBLE , 1
prometheus_target
Number of used inodes in the volume. Sampled every 30 seconds.
persistentvolumeclaim :
persistentvolumeclaim.
kubelet_volume_stats_used_bytes
ALPHA
(project)
kubelet_volume_stats_used_bytes
GAUGE , DOUBLE , By
k8s_node
Number of used bytes in the volume. Sampled every 60 seconds.
namespace :
namespace.
persistentvolumeclaim :
persistentvolumeclaim.
kubelet_volume_stats_used_bytes/gauge
ALPHA
(project)
kubelet_volume_stats_used_bytes
GAUGE , DOUBLE , By
prometheus_target
Number of used bytes in the volume. Sampled every 30 seconds.
persistentvolumeclaim :
persistentvolumeclaim.
kubernetes_api_request_count
ALPHA
(project)
kubernetes_api_request_count
CUMULATIVE , DOUBLE , 1
k8s_container
Cumulative number of requests to the Kubernetes master. Sampled every 60 seconds.
method :
method.
resource_type :
resource_type.
kubernetes_build_info
ALPHA
(project)
kubernetes_build_info
GAUGE , DOUBLE , 1
k8s_container
k8s_node
A metric with a constant '1' value labeled by major, minor, git version, git commit, git tree state, build date, Go version, and compiler from which Kubernetes was built, and platform on which it is running. Sampled every 60 seconds.
buildDate :
buildDate.
build_date :
build_date.
compiler :
compiler.
gitCommit :
gitCommit.
gitTreeState :
gitTreeState.
gitVersion :
gitVersion.
git_commit :
git_commit.
git_tree_state :
git_tree_state.
git_version :
git_version.
goVersion :
goVersion.
go_version :
go_version.
major :
major.
minor :
minor.
platform :
platform.
kubernetes_build_info/gauge
ALPHA
(project)
kubernetes_build_info
GAUGE , DOUBLE , 1
prometheus_target
A metric with a constant '1' value labeled by major, minor, git version, git commit, git tree state, build date, Go version, and compiler from which Kubernetes was built, and platform on which it is running. Sampled every 30 seconds.
buildDate :
buildDate.
build_date :
build_date.
compiler :
compiler.
gitCommit :
gitCommit.
gitTreeState :
gitTreeState.
gitVersion :
gitVersion.
git_commit :
git_commit.
git_tree_state :
git_tree_state.
git_version :
git_version.
goVersion :
goVersion.
go_version :
go_version.
major :
major.
minor :
minor.
platform :
platform.
kubernetes_event_filter_count
ALPHA
(project)
kubernetes_event_filter_count
CUMULATIVE , DOUBLE , 1
k8s_container
Cumulative number of events processed by the filtering stage. Sampled every 60 seconds.
resource_type :
resource_type.
result :
result.
kubernetes_feature_enabled
ALPHA
(project)
kubernetes_feature_enabled
GAUGE , DOUBLE , 1
k8s_container
[ALPHA] This metric records the data about the stage and enablement of a k8s feature. Sampled every 60 seconds.
name :
name.
stage :
stage.
kubernetes_feature_enabled/gauge
ALPHA
(project)
kubernetes_feature_enabled
GAUGE , DOUBLE , 1
prometheus_target
[ALPHA] This metric records the data about the stage and enablement of a k8s feature. Sampled every 30 seconds.
name :
name.
stage :
stage.
kubernetes_healthcheck/gauge
ALPHA
(project)
kubernetes_healthcheck
GAUGE , DOUBLE , 1
prometheus_target
[ALPHA] This metric records the result of a single healthcheck. Sampled every 30 seconds.
name :
name.
type :
type.
kubernetes_healthchecks_total/counter
ALPHA
(project)
kubernetes_healthchecks_total
CUMULATIVE , DOUBLE , 1
prometheus_target
[ALPHA] This metric records the results of all healthcheck. Sampled every 30 seconds.
name :
name.
status :
status.
type :
type.
kubernetes_watch_event_count
ALPHA
(project)
kubernetes_watch_event_count
CUMULATIVE , DOUBLE , 1
k8s_container
Cumulative number of events received over the Kubernetes master watch stream. Sampled every 60 seconds.
resource_type :
resource_type.
kubevirt_info
ALPHA
(project)
kubevirt_info
GAUGE , DOUBLE , 1
k8s_container
Version information. Sampled every 60 seconds.
goversion :
goversion.
kubeversion :
kubeversion.
kubevirt_vmi_memory_unused_bytes
ALPHA
(project)
kubevirt_vmi_memory_unused_bytes
GAUGE , DOUBLE , By
k8s_container
amount of `unused` memory as seen by the domain. Sampled every 60 seconds.
exported_namespace :
exported_namespace.
kubernetes_vmi_label_kubevirt_io_nodeName :
kubernetes_vmi_label_kubevirt_io_nodeName.
kubernetes_vmi_label_kubevirt_vm :
kubernetes_vmi_label_kubevirt_vm.
name :
name.
namespace :
namespace.
node :
node.
kubevirt_vmi_memory_used_total_bytes
ALPHA
(project)
kubevirt_vmi_memory_used_total_bytes
GAUGE , DOUBLE , By
k8s_container
The amount of memory in bytes used by the domain. Sampled every 60 seconds.
exported_namespace :
exported_namespace.
kubernetes_vmi_label_kubevirt_io_nodeName :
kubernetes_vmi_label_kubevirt_io_nodeName.
kubernetes_vmi_label_kubevirt_vm :
kubernetes_vmi_label_kubevirt_vm.
name :
name.
namespace :
namespace.
node :
node.
kubevirt_vmi_network_receive_bytes_total
ALPHA
(project)
kubevirt_vmi_network_receive_bytes_total
CUMULATIVE , DOUBLE , By
k8s_container
Network traffic receive in bytes. Sampled every 60 seconds.
exported_namespace :
exported_namespace.
interface :
interface.
kubernetes_vmi_label_kubevirt_io_nodeName :
kubernetes_vmi_label_kubevirt_io_nodeName.
kubernetes_vmi_label_kubevirt_vm :
kubernetes_vmi_label_kubevirt_vm.
name :
name.
namespace :
namespace.
network :
network.
node :
node.
kubevirt_vmi_network_receive_errors_total
ALPHA
(project)
kubevirt_vmi_network_receive_errors_total
CUMULATIVE , DOUBLE , 1
k8s_container
Network receive error packets. Sampled every 60 seconds.
exported_namespace :
exported_namespace.
interface :
interface.
kubernetes_vmi_label_kubevirt_io_nodeName :
kubernetes_vmi_label_kubevirt_io_nodeName.
kubernetes_vmi_label_kubevirt_vm :
kubernetes_vmi_label_kubevirt_vm.
name :
name.
namespace :
namespace.
network :
network.
node :
node.
kubevirt_vmi_network_receive_packets_dropped_total
ALPHA
(project)
kubevirt_vmi_network_receive_packets_dropped_total
CUMULATIVE , DOUBLE , 1
k8s_container
The number of rx packets dropped on vNIC interfaces. Sampled every 60 seconds.
exported_namespace :
exported_namespace.
interface :
interface.
kubernetes_vmi_label_kubevirt_io_nodeName :
kubernetes_vmi_label_kubevirt_io_nodeName.
kubernetes_vmi_label_kubevirt_vm :
kubernetes_vmi_label_kubevirt_vm.
name :
name.
namespace :
namespace.
network :
network.
node :
node.
kubevirt_vmi_network_receive_packets_total
ALPHA
(project)
kubevirt_vmi_network_receive_packets_total
CUMULATIVE , DOUBLE , 1
k8s_container
Network traffic receive packets. Sampled every 60 seconds.
exported_namespace :
exported_namespace.
interface :
interface.
kubernetes_vmi_label_kubevirt_io_nodeName :
kubernetes_vmi_label_kubevirt_io_nodeName.
kubernetes_vmi_label_kubevirt_vm :
kubernetes_vmi_label_kubevirt_vm.
name :
name.
namespace :
namespace.
network :
network.
node :
node.
kubevirt_vmi_network_transmit_bytes_total
ALPHA
(project)
kubevirt_vmi_network_transmit_bytes_total
CUMULATIVE , DOUBLE , By
k8s_container
Network traffic transmit in bytes. Sampled every 60 seconds.
exported_namespace :
exported_namespace.
interface :
interface.
kubernetes_vmi_label_kubevirt_io_nodeName :
kubernetes_vmi_label_kubevirt_io_nodeName.
kubernetes_vmi_label_kubevirt_vm :
kubernetes_vmi_label_kubevirt_vm.
name :
name.
namespace :
namespace.
network :
network.
node :
node.
kubevirt_vmi_network_transmit_errors_total
ALPHA
(project)
kubevirt_vmi_network_transmit_errors_total
CUMULATIVE , DOUBLE , 1
k8s_container
Network transmit error packets. Sampled every 60 seconds.
exported_namespace :
exported_namespace.
interface :
interface.
kubernetes_vmi_label_kubevirt_io_nodeName :
kubernetes_vmi_label_kubevirt_io_nodeName.
kubernetes_vmi_label_kubevirt_vm :
kubernetes_vmi_label_kubevirt_vm.
name :
name.
namespace :
namespace.
network :
network.
node :
node.
kubevirt_vmi_network_transmit_packets_dropped_total
ALPHA
(project)
kubevirt_vmi_network_transmit_packets_dropped_total
CUMULATIVE , DOUBLE , 1
k8s_container
The number of tx packets dropped on vNIC interfaces. Sampled every 60 seconds.
exported_namespace :
exported_namespace.
interface :
interface.
kubernetes_vmi_label_kubevirt_io_nodeName :
kubernetes_vmi_label_kubevirt_io_nodeName.
kubernetes_vmi_label_kubevirt_vm :
kubernetes_vmi_label_kubevirt_vm.
name :
name.
namespace :
namespace.
network :
network.
node :
node.
kubevirt_vmi_network_transmit_packets_total
ALPHA
(project)
kubevirt_vmi_network_transmit_packets_total
CUMULATIVE , DOUBLE , 1
k8s_container
Network traffic transmit packets. Sampled every 60 seconds.
exported_namespace :
exported_namespace.
interface :
interface.
kubernetes_vmi_label_kubevirt_io_nodeName :
kubernetes_vmi_label_kubevirt_io_nodeName.
kubernetes_vmi_label_kubevirt_vm :
kubernetes_vmi_label_kubevirt_vm.
name :
name.
namespace :
namespace.
network :
network.
node :
node.
kubevirt_vmi_storage_iops_read_total
ALPHA
(project)
kubevirt_vmi_storage_iops_read_total
CUMULATIVE , DOUBLE , 1
k8s_container
I/O read operations. Sampled every 60 seconds.
drive :
drive.
exported_namespace :
exported_namespace.
kubernetes_vmi_label_kubevirt_io_nodeName :
kubernetes_vmi_label_kubevirt_io_nodeName.
kubernetes_vmi_label_kubevirt_vm :
kubernetes_vmi_label_kubevirt_vm.
name :
name.
namespace :
namespace.
node :
node.
kubevirt_vmi_storage_iops_write_total
ALPHA
(project)
kubevirt_vmi_storage_iops_write_total
CUMULATIVE , DOUBLE , 1
k8s_container
I/O write operations. Sampled every 60 seconds.
drive :
drive.
exported_namespace :
exported_namespace.
kubernetes_vmi_label_kubevirt_io_nodeName :
kubernetes_vmi_label_kubevirt_io_nodeName.
kubernetes_vmi_label_kubevirt_vm :
kubernetes_vmi_label_kubevirt_vm.
name :
name.
namespace :
namespace.
node :
node.
kubevirt_vmi_vcpu_seconds
ALPHA
(project)
kubevirt_vmi_vcpu_seconds
CUMULATIVE , DOUBLE , s
k8s_container
Amount of time spent in each state by each vcpu. Where `id` is the vcpu identifier and `state` can be one of the following: [`OFFLINE`, `RUNNING`, `BLOCKED`]. Sampled every 60 seconds.
id :
id.
kubernetes_vmi_label_kubevirt_io_nodeName :
kubernetes_vmi_label_kubevirt_io_nodeName.
kubernetes_vmi_label_kubevirt_vm :
kubernetes_vmi_label_kubevirt_vm.
name :
name.
namespace :
namespace.
node :
node.
state :
state.
leader_election_master_status
ALPHA
(project)
leader_election_master_status
GAUGE , DOUBLE , 1
k8s_container
Gauge of if the reporting system is master of the relevant lease, 0 indicates backup, 1 indicates master. 'name' is the string used to identify the lease. Please make sure to group by name. Sampled every 60 seconds.
name :
name.
leader_election_master_status/gauge
ALPHA
(project)
leader_election_master_status
GAUGE , DOUBLE , 1
prometheus_target
Gauge of if the reporting system is master of the relevant lease, 0 indicates backup, 1 indicates master. 'name' is the string used to identify the lease. Please make sure to group by name. Sampled every 30 seconds.
name :
name.
log_redaction_latency_microseconds
ALPHA
(project)
log_redaction_latency_microseconds
CUMULATIVE , DISTRIBUTION , us
k8s_container
k8s_pod
Distribution of time spent in content-based sanitization process. Sampled every 60 seconds.
isredacted :
isredacted.
redactorlabel :
redactorlabel.
redactortype :
redactortype.
log_sanitized_count_total
ALPHA
(project)
log_sanitized_count_total
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_pod
Total count of log sanitizations performed by sanitize/klog.go. Sampled every 60 seconds.
machine_cpu_cores
ALPHA
(project)
machine_cpu_cores
GAUGE , DOUBLE , 1
k8s_node
Number of logical CPU cores. Sampled every 60 seconds.
boot_id :
boot_id.
machine_id :
machine_id.
system_uuid :
system_uuid.
machine_cpu_physical_cores
ALPHA
(project)
machine_cpu_physical_cores
GAUGE , DOUBLE , 1
k8s_node
Number of physical CPU cores. Sampled every 60 seconds.
boot_id :
boot_id.
machine_id :
machine_id.
system_uuid :
system_uuid.
machine_cpu_sockets
ALPHA
(project)
machine_cpu_sockets
GAUGE , DOUBLE , 1
k8s_node
Number of CPU sockets. Sampled every 60 seconds.
boot_id :
boot_id.
machine_id :
machine_id.
system_uuid :
system_uuid.
machine_memory_bytes
ALPHA
(project)
machine_memory_bytes
GAUGE , DOUBLE , By
k8s_node
Amount of memory installed on the machine. Sampled every 60 seconds.
boot_id :
boot_id.
machine_id :
machine_id.
system_uuid :
system_uuid.
machine_nvm_avg_power_budget_watts
ALPHA
(project)
machine_nvm_avg_power_budget_watts
GAUGE , DOUBLE , 1
k8s_node
NVM power budget. Sampled every 60 seconds.
boot_id :
boot_id.
machine_id :
machine_id.
system_uuid :
system_uuid.
machine_nvm_capacity
ALPHA
(project)
machine_nvm_capacity
GAUGE , DOUBLE , 1
k8s_node
NVM capacity value labeled by NVM mode (memory mode or app direct mode). Sampled every 60 seconds.
boot_id :
boot_id.
machine_id :
machine_id.
mode :
mode.
system_uuid :
system_uuid.
machine_scrape_error
ALPHA
(project)
machine_scrape_error
GAUGE , DOUBLE , 1
k8s_node
1 if there was an error while getting machine metrics, 0 otherwise. Sampled every 60 seconds.
metadata_agent_grpc_io_client_completed_rpcs
ALPHA
(project)
metadata_agent_grpc_io_client_completed_rpcs
CUMULATIVE , DOUBLE , 1
k8s_container
Count of RPCs by method and status. Sampled every 60 seconds.
grpc_client_method :
grpc_client_method.
grpc_client_status :
grpc_client_status.
metadata_agent_grpc_io_client_received_bytes_per_rpc
ALPHA
(project)
metadata_agent_grpc_io_client_received_bytes_per_rpc
CUMULATIVE , DISTRIBUTION , 1
k8s_container
Distribution of bytes received per RPC, by method. Sampled every 60 seconds.
grpc_client_method :
grpc_client_method.
metadata_agent_grpc_io_client_roundtrip_latency
ALPHA
(project)
metadata_agent_grpc_io_client_roundtrip_latency
CUMULATIVE , DISTRIBUTION , 1
k8s_container
Distribution of round-trip latency, by method. Sampled every 60 seconds.
grpc_client_method :
grpc_client_method.
metadata_agent_grpc_io_client_sent_bytes_per_rpc
ALPHA
(project)
metadata_agent_grpc_io_client_sent_bytes_per_rpc
CUMULATIVE , DISTRIBUTION , 1
k8s_container
Distribution of bytes sent per RPC, by method. Sampled every 60 seconds.
grpc_client_method :
grpc_client_method.
metadata_agent_kubernetes_api_request_count
ALPHA
(project)
metadata_agent_kubernetes_api_request_count
CUMULATIVE , DOUBLE , 1
k8s_container
Cumulative number of requests to the Kubernetes master. Sampled every 60 seconds.
method :
method.
resource_type :
resource_type.
metadata_agent_kubernetes_event_filter_count
ALPHA
(project)
metadata_agent_kubernetes_event_filter_count
CUMULATIVE , DOUBLE , 1
k8s_container
Cumulative number of events processed by the filtering stage. Sampled every 60 seconds.
resource_type :
resource_type.
result :
result.
metadata_agent_kubernetes_watch_event_count
ALPHA
(project)
metadata_agent_kubernetes_watch_event_count
CUMULATIVE , DOUBLE , 1
k8s_container
Cumulative number of events received over the Kubernetes master watch stream. Sampled every 60 seconds.
resource_type :
resource_type.
metadata_agent_resource_metadata_conversion_count
ALPHA
(project)
metadata_agent_resource_metadata_conversion_count
CUMULATIVE , DOUBLE , 1
k8s_container
Cumulative number of events processed by the conversion stage (from Kubernetes object to resource metadata). Sampled every 60 seconds.
resource_type :
resource_type.
result :
result.
metadata_agent_resource_metadata_publish_count
ALPHA
(project)
metadata_agent_resource_metadata_publish_count
CUMULATIVE , DOUBLE , 1
k8s_container
Cumulative number of events that were processed by the publishing stage. Sampled every 60 seconds.
resource_type :
resource_type.
result :
result.
metallb_allocator_addresses_in_use_total
ALPHA
(project)
metallb_allocator_addresses_in_use_total
GAUGE , DOUBLE , 1
k8s_container
Number of IP addresses in use, per pool. Sampled every 60 seconds.
pool :
pool.
metallb_allocator_addresses_total
ALPHA
(project)
metallb_allocator_addresses_total
GAUGE , DOUBLE , 1
k8s_container
Number of usable IP addresses, per pool. Sampled every 60 seconds.
pool :
pool.
metallb_k8s_client_config_loaded_bool
ALPHA
(project)
metallb_k8s_client_config_loaded_bool
GAUGE , DOUBLE , 1
k8s_container
1 if the MetalLB configuration was successfully loaded at least once. Sampled every 60 seconds.
metallb_k8s_client_config_stale_bool
ALPHA
(project)
metallb_k8s_client_config_stale_bool
GAUGE , DOUBLE , 1
k8s_container
1 if running on a stale configuration, because the latest config failed to load. Sampled every 60 seconds.
metallb_k8s_client_update_errors_total
ALPHA
(project)
metallb_k8s_client_update_errors_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of k8s object updates that failed for some reason. Sampled every 60 seconds.
metallb_k8s_client_updates_total
ALPHA
(project)
metallb_k8s_client_updates_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of k8s object updates that have been processed. Sampled every 60 seconds.
metallb_layer2_gratuitous_sent
ALPHA
(project)
metallb_layer2_gratuitous_sent
CUMULATIVE , DOUBLE , 1
k8s_container
Number of gratuitous layer2 packets sent for owned IPs as a result of failovers. Sampled every 60 seconds.
ip :
ip.
metallb_layer2_requests_received
ALPHA
(project)
metallb_layer2_requests_received
CUMULATIVE , DOUBLE , 1
k8s_container
Number of layer2 requests received for owned IPs. Sampled every 60 seconds.
ip :
ip.
metallb_layer2_responses_sent
ALPHA
(project)
metallb_layer2_responses_sent
CUMULATIVE , DOUBLE , 1
k8s_container
Number of layer2 responses sent for owned IPs in response to requests. Sampled every 60 seconds.
ip :
ip.
metallb_speaker_announced
ALPHA
(project)
metallb_speaker_announced
GAUGE , DOUBLE , 1
k8s_container
Services being announced from this node. This is desired state, it does not guarantee that the routing protocols have converged. Sampled every 60 seconds.
ip :
ip.
node :
node.
protocol :
protocol.
service :
service.
metric_error_count_total
ALPHA
(project)
metric_error_count_total
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_pod
Total no of errors in collecting metrics. Sampled every 60 seconds.
resource :
resource.
namespace_adds
ALPHA
(project)
namespace_adds
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of adds handled by workqueue: namespace. Sampled every 60 seconds.
namespace_controller_rate_limiter_use
ALPHA
(project)
namespace_controller_rate_limiter_use
GAUGE , DOUBLE , 1
k8s_container
A metric measuring the saturation of the rate limiter for namespace_controller. Sampled every 60 seconds.
namespace_controller_rate_limiter_use/gauge
ALPHA
(project)
namespace_controller_rate_limiter_use
GAUGE , DOUBLE , 1
prometheus_target
A metric measuring the saturation of the rate limiter for namespace_controller. Sampled every 30 seconds.
namespace_depth
ALPHA
(project)
namespace_depth
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) Current depth of workqueue: namespace. Sampled every 60 seconds.
namespace_longest_running_processor_microseconds
ALPHA
(project)
namespace_longest_running_processor_microseconds
GAUGE , DOUBLE , us
k8s_container
(Deprecated) How many microseconds has the longest running processor for namespace been running. Sampled every 60 seconds.
namespace_queue_latency
ALPHA
(project)
namespace_queue_latency
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuenamespace before being requested. Sampled every 60 seconds.
quantile :
quantile.
namespace_queue_latency_count
ALPHA
(project)
namespace_queue_latency_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long an item stays in workqueuenamespace before being requested. Sampled every 60 seconds.
namespace_queue_latency_sum
ALPHA
(project)
namespace_queue_latency_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuenamespace before being requested. Sampled every 60 seconds.
namespace_retries
ALPHA
(project)
namespace_retries
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of retries handled by workqueue: namespace. Sampled every 60 seconds.
namespace_unfinished_work_seconds
ALPHA
(project)
namespace_unfinished_work_seconds
GAUGE , DOUBLE , s
k8s_container
(Deprecated) How many seconds of work namespace has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases. Sampled every 60 seconds.
namespace_work_duration
ALPHA
(project)
namespace_work_duration
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuenamespace takes. Sampled every 60 seconds.
quantile :
quantile.
namespace_work_duration_count
ALPHA
(project)
namespace_work_duration_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long processing an item from workqueuenamespace takes. Sampled every 60 seconds.
namespace_work_duration_sum
ALPHA
(project)
namespace_work_duration_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuenamespace takes. Sampled every 60 seconds.
net_conntrack_dialer_conn_attempted_total
ALPHA
(project)
net_conntrack_dialer_conn_attempted_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of connections attempted by the given dialer a given name. Sampled every 60 seconds.
dialer_name :
dialer_name.
net_conntrack_dialer_conn_closed_total
ALPHA
(project)
net_conntrack_dialer_conn_closed_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of connections closed which originated from the dialer of a given name. Sampled every 60 seconds.
dialer_name :
dialer_name.
net_conntrack_dialer_conn_established_total
ALPHA
(project)
net_conntrack_dialer_conn_established_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of connections successfully established by the given dialer a given name. Sampled every 60 seconds.
dialer_name :
dialer_name.
net_conntrack_dialer_conn_failed_total
ALPHA
(project)
net_conntrack_dialer_conn_failed_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of connections failed to dial by the dialer a given name. Sampled every 60 seconds.
dialer_name :
dialer_name.
reason :
reason.
net_conntrack_listener_conn_accepted_total
ALPHA
(project)
net_conntrack_listener_conn_accepted_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of connections opened to the listener of a given name. Sampled every 60 seconds.
listener_name :
listener_name.
net_conntrack_listener_conn_closed_total
ALPHA
(project)
net_conntrack_listener_conn_closed_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of connections closed that were made to the listener of a given name. Sampled every 60 seconds.
listener_name :
listener_name.
nf_webhook_request_total
BETA
(project)
nf_webhook_request_total
CUMULATIVE , DOUBLE , 1
k8s_pod
Number of failed create requests. Sampled every 60 seconds.
cr_kind :
cr_kind.
cr_name :
cr_name.
failure_reason :
failure_reason.
operation :
operation.
status :
status.
node/cpu/allocatable_cores
ALPHA
(project)
Allocatable cores
GAUGE , DOUBLE , {cpu}
k8s_node
Number of allocatable CPU cores on the node. Sampled every 60 seconds.
node/cpu/allocatable_utilization
ALPHA
(project)
CPU allocatable utilization
GAUGE , DOUBLE , 1
k8s_node
The fraction of the allocatable CPU that is currently in use on the instance. Sampled every 60 seconds. After sampling, data is not visible for up to 240 seconds.
node/cpu/core_usage_time
ALPHA
(project)
CPU usage time
CUMULATIVE , DOUBLE , s{CPU}
k8s_node
Cumulative CPU usage on all cores used on the node in seconds. Sampled every 60 seconds.
node/cpu/total_cores
ALPHA
(project)
Total cores
GAUGE , DOUBLE , {cpu}
k8s_node
Total number of CPU cores on the node. Sampled every 60 seconds.
node/ephemeral_storage/allocatable_bytes
ALPHA
(project)
Allocatable ephemeral storage
GAUGE , INT64 , By
k8s_node
Local ephemeral storage bytes allocatable on the node. Sampled every 60 seconds.
node/ephemeral_storage/inodes_free
ALPHA
(project)
Free inodes
GAUGE , INT64 , 1
k8s_node
Free number of inodes on local ephemeral storage. Sampled every 60 seconds.
node/ephemeral_storage/inodes_total
ALPHA
(project)
Total inodes
GAUGE , INT64 , 1
k8s_node
Total number of inodes on local ephemeral storage. Sampled every 60 seconds.
node/ephemeral_storage/total_bytes
ALPHA
(project)
Total ephemeral storage
GAUGE , INT64 , By
k8s_node
Total ephemeral storage bytes on the node. Sampled every 60 seconds.
node/ephemeral_storage/used_bytes
ALPHA
(project)
Ephemeral storage usage
GAUGE , INT64 , By
k8s_node
Local ephemeral storage bytes used by the node. Sampled every 60 seconds.
node/memory/allocatable_bytes
ALPHA
(project)
Allocatable memory
GAUGE , INT64 , By
k8s_node
Cumulative memory bytes used by the node. Sampled every 60 seconds.
node/memory/allocatable_utilization
ALPHA
(project)
Memory allocatable utilization
GAUGE , DOUBLE , 1
k8s_node
The fraction of the allocatable memory that is currently in use on the instance. This value cannot exceed 1 as usage cannot exceed allocatable memory bytes. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
component :
Name of the respective system daemon.
memory_type :
Either `evictable` or `non-evictable`. Evictable memory is memory that can be easily reclaimed by the kernel, while non-evictable memory cannot.
node/memory/total_bytes
ALPHA
(project)
Total memory
GAUGE , INT64 , By
k8s_node
Number of bytes of memory allocatable on the node. Sampled every 60 seconds.
node/memory/used_bytes
ALPHA
(project)
Memory usage
GAUGE , INT64 , By
k8s_node
Cumulative memory bytes used by the node. Sampled every 60 seconds.
memory_type :
memory_type.
node/network/received_bytes_count
ALPHA
(project)
Bytes received
CUMULATIVE , INT64 , By
k8s_node
Cumulative number of bytes received by the node over the network. Sampled every 60 seconds.
interface :
interface.
node/network/sent_bytes_count
ALPHA
(project)
Bytes transmitted
CUMULATIVE , INT64 , By
k8s_node
Cumulative number of bytes transmitted by the node over the network. Sampled every 60 seconds.
interface :
interface.
node_arp_entries
ALPHA
(project)
node_arp_entries
GAUGE , DOUBLE , 1
k8s_container
k8s_node
ARP entries by device. Sampled every 60 seconds.
device :
device.
node_arp_entries/gauge
ALPHA
(project)
node_arp_entries
GAUGE , DOUBLE , 1
prometheus_target
ARP entries by device. Sampled every 30 seconds.
device :
device.
node_authorizer_graph_actions_duration_seconds
ALPHA
(project)
node_authorizer_graph_actions_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
Histogram of duration of graph actions in node authorizer. Sampled every 60 seconds.
operation :
operation.
node_boot_time_seconds
ALPHA
(project)
node_boot_time_seconds
GAUGE , DOUBLE , s
k8s_container
k8s_node
Node boot time, in unixtime. Sampled every 60 seconds.
node_boot_time_seconds/gauge
ALPHA
(project)
node_boot_time_seconds
GAUGE , DOUBLE , s
prometheus_target
Node boot time, in unixtime. Sampled every 30 seconds.
node_collector_evictions_number
ALPHA
(project)
node_collector_evictions_number
CUMULATIVE , DOUBLE , 1
k8s_container
Number of Node evictions that happened since current instance of NodeController started. Sampled every 60 seconds.
node_collector_evictions_total
ALPHA
(project)
node_collector_evictions_total
CUMULATIVE , DOUBLE , 1
k8s_container
[STABLE] Number of Node evictions that happened since current instance of NodeController started. Sampled every 60 seconds.
node_collector_evictions_total/counter
ALPHA
(project)
node_collector_evictions_total
CUMULATIVE , DOUBLE , 1
prometheus_target
[STABLE] Number of Node evictions that happened since current instance of NodeController started. Sampled every 30 seconds.
node_collector_unhealthy_nodes_in_zone
ALPHA
(project)
node_collector_unhealthy_nodes_in_zone
GAUGE , DOUBLE , 1
k8s_container
[ALPHA] Gauge measuring number of not Ready Nodes per zones. Sampled every 60 seconds.
zone :
zone.
node_collector_unhealthy_nodes_in_zone/gauge
ALPHA
(project)
node_collector_unhealthy_nodes_in_zone
GAUGE , DOUBLE , 1
prometheus_target
Gauge measuring number of not Ready Nodes per zones. Sampled every 30 seconds.
node_collector_zone_health
ALPHA
(project)
node_collector_zone_health
GAUGE , DOUBLE , 1
k8s_container
[ALPHA] Gauge measuring percentage of healthy nodes per zone. Sampled every 60 seconds.
zone :
zone.
node_collector_zone_health/gauge
ALPHA
(project)
node_collector_zone_health
GAUGE , DOUBLE , 1
prometheus_target
Gauge measuring percentage of healthy nodes per zone. Sampled every 30 seconds.
node_collector_zone_size
ALPHA
(project)
node_collector_zone_size
GAUGE , DOUBLE , 1
k8s_container
[ALPHA] Gauge measuring number of registered Nodes per zones. Sampled every 60 seconds.
zone :
zone.
node_collector_zone_size/gauge
ALPHA
(project)
node_collector_zone_size
GAUGE , DOUBLE , 1
prometheus_target
Gauge measuring number of registered Nodes per zones. Sampled every 30 seconds.
node_context_switches_total
ALPHA
(project)
node_context_switches_total
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_node
Total number of context switches. Sampled every 60 seconds.
node_context_switches_total/counter
ALPHA
(project)
node_context_switches_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Total number of context switches. Sampled every 30 seconds.
node_cooling_device_cur_state
ALPHA
(project)
node_cooling_device_cur_state
GAUGE , DOUBLE , 1
k8s_node
Current throttle state of the cooling device. Sampled every 60 seconds.
name :
name.
type :
type.
node_cooling_device_cur_state/gauge
ALPHA
(project)
node_cooling_device_cur_state
GAUGE , DOUBLE , 1
prometheus_target
Current throttle state of the cooling device. Sampled every 30 seconds.
name :
name.
type :
type.
node_cooling_device_max_state
ALPHA
(project)
node_cooling_device_max_state
GAUGE , DOUBLE , 1
k8s_node
Maximum throttle state of the cooling device. Sampled every 60 seconds.
name :
name.
type :
type.
node_cooling_device_max_state/gauge
ALPHA
(project)
node_cooling_device_max_state
GAUGE , DOUBLE , 1
prometheus_target
Maximum throttle state of the cooling device. Sampled every 30 seconds.
name :
name.
type :
type.
node_cpu_guest_seconds_total
ALPHA
(project)
node_cpu_guest_seconds_total
CUMULATIVE , DOUBLE , s
k8s_container
k8s_node
Seconds the cpus spent in guests (VMs) for each mode. Sampled every 60 seconds.
cpu :
cpu.
mode :
mode.
node_cpu_guest_seconds_total/counter
ALPHA
(project)
node_cpu_guest_seconds_total
CUMULATIVE , DOUBLE , s
prometheus_target
Seconds the cpus spent in guests (VMs) for each mode. Sampled every 30 seconds.
cpu :
cpu.
mode :
mode.
node_cpu_seconds_total
ALPHA
(project)
node_cpu_seconds_total
CUMULATIVE , DOUBLE , s
k8s_container
k8s_node
Seconds the cpus spent in each mode. Sampled every 60 seconds.
cpu :
cpu.
mode :
mode.
node_cpu_seconds_total/counter
ALPHA
(project)
node_cpu_seconds_total
CUMULATIVE , DOUBLE , s
prometheus_target
Seconds the cpus spent in each mode. Sampled every 30 seconds.
cpu :
cpu.
mode :
mode.
node_daemon/cpu/core_usage_time
ALPHA
(project)
CPU usage time
CUMULATIVE , DOUBLE , s{CPU}
k8s_node
Cumulative CPU usage on all cores used by the node level system daemon in seconds. Sampled every 60 seconds.
component :
component.
node_daemon/memory/used_bytes
ALPHA
(project)
Memory usage
GAUGE , INT64 , By
k8s_node
Memory usage by the system daemon in bytes. Sampled every 60 seconds.
component :
component.
memory_type :
memory_type.
node_disk_discard_time_seconds_total
ALPHA
(project)
node_disk_discard_time_seconds_total
CUMULATIVE , DOUBLE , s
k8s_container
k8s_node
This is the total number of seconds spent by all discards. Sampled every 60 seconds.
device :
device.
node_disk_discard_time_seconds_total/counter
ALPHA
(project)
node_disk_discard_time_seconds_total
CUMULATIVE , DOUBLE , s
prometheus_target
This is the total number of seconds spent by all discards. Sampled every 30 seconds.
device :
device.
node_disk_discarded_sectors_total
ALPHA
(project)
node_disk_discarded_sectors_total
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_node
The total number of sectors discarded successfully. Sampled every 60 seconds.
device :
device.
node_disk_discarded_sectors_total/counter
ALPHA
(project)
node_disk_discarded_sectors_total
CUMULATIVE , DOUBLE , 1
prometheus_target
The total number of sectors discarded successfully. Sampled every 30 seconds.
device :
device.
node_disk_discards_completed_total
ALPHA
(project)
node_disk_discards_completed_total
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_node
The total number of discards completed successfully. Sampled every 60 seconds.
device :
device.
node_disk_discards_completed_total/counter
ALPHA
(project)
node_disk_discards_completed_total
CUMULATIVE , DOUBLE , 1
prometheus_target
The total number of discards completed successfully. Sampled every 30 seconds.
device :
device.
node_disk_discards_merged_total
ALPHA
(project)
node_disk_discards_merged_total
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_node
The total number of discards merged. Sampled every 60 seconds.
device :
device.
node_disk_discards_merged_total/counter
ALPHA
(project)
node_disk_discards_merged_total
CUMULATIVE , DOUBLE , 1
prometheus_target
The total number of discards merged. Sampled every 30 seconds.
device :
device.
node_disk_flush_requests_time_seconds_total
ALPHA
(project)
node_disk_flush_requests_time_seconds_total
CUMULATIVE , DOUBLE , s
k8s_node
This is the total number of seconds spent by all flush requests. Sampled every 60 seconds.
device :
device.
node_disk_flush_requests_total
ALPHA
(project)
node_disk_flush_requests_total
CUMULATIVE , DOUBLE , 1
k8s_node
The total number of flush requests completed successfully. Sampled every 60 seconds.
device :
device.
node_disk_io_now
ALPHA
(project)
node_disk_io_now
GAUGE , DOUBLE , 1
k8s_container
k8s_node
The number of I/Os currently in progress. Sampled every 60 seconds.
device :
device.
node_disk_io_now/gauge
ALPHA
(project)
node_disk_io_now
GAUGE , DOUBLE , 1
prometheus_target
The number of I/Os currently in progress. Sampled every 30 seconds.
device :
device.
node_disk_io_time_seconds_total
ALPHA
(project)
node_disk_io_time_seconds_total
CUMULATIVE , DOUBLE , s
k8s_container
k8s_node
Total seconds spent doing I/Os. Sampled every 60 seconds.
device :
device.
node_disk_io_time_seconds_total/counter
ALPHA
(project)
node_disk_io_time_seconds_total
CUMULATIVE , DOUBLE , s
prometheus_target
Total seconds spent doing I/Os. Sampled every 30 seconds.
device :
device.
node_disk_io_time_weighted_seconds_total
ALPHA
(project)
node_disk_io_time_weighted_seconds_total
CUMULATIVE , DOUBLE , s
k8s_container
k8s_node
The weighted # of seconds spent doing I/Os. Sampled every 60 seconds.
device :
device.
node_disk_io_time_weighted_seconds_total/counter
ALPHA
(project)
node_disk_io_time_weighted_seconds_total
CUMULATIVE , DOUBLE , s
prometheus_target
The weighted # of seconds spent doing I/Os. Sampled every 30 seconds.
device :
device.
node_disk_read_bytes_total
ALPHA
(project)
node_disk_read_bytes_total
CUMULATIVE , DOUBLE , By
k8s_container
k8s_node
The total number of bytes read successfully. Sampled every 60 seconds.
device :
device.
node_disk_read_bytes_total/counter
ALPHA
(project)
node_disk_read_bytes_total
CUMULATIVE , DOUBLE , By
prometheus_target
The total number of bytes read successfully. Sampled every 30 seconds.
device :
device.
node_disk_read_time_seconds_total
ALPHA
(project)
node_disk_read_time_seconds_total
CUMULATIVE , DOUBLE , s
k8s_container
k8s_node
The total number of seconds spent by all reads. Sampled every 60 seconds.
device :
device.
node_disk_read_time_seconds_total/counter
ALPHA
(project)
node_disk_read_time_seconds_total
CUMULATIVE , DOUBLE , s
prometheus_target
The total number of seconds spent by all reads. Sampled every 30 seconds.
device :
device.
node_disk_reads_completed_total
ALPHA
(project)
node_disk_reads_completed_total
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_node
The total number of reads completed successfully. Sampled every 60 seconds.
device :
device.
node_disk_reads_completed_total/counter
ALPHA
(project)
node_disk_reads_completed_total
CUMULATIVE , DOUBLE , 1
prometheus_target
The total number of reads completed successfully. Sampled every 30 seconds.
device :
device.
node_disk_reads_merged_total
ALPHA
(project)
node_disk_reads_merged_total
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_node
The total number of reads merged. Sampled every 60 seconds.
device :
device.
node_disk_reads_merged_total/counter
ALPHA
(project)
node_disk_reads_merged_total
CUMULATIVE , DOUBLE , 1
prometheus_target
The total number of reads merged. Sampled every 30 seconds.
device :
device.
node_disk_write_time_seconds_total
ALPHA
(project)
node_disk_write_time_seconds_total
CUMULATIVE , DOUBLE , s
k8s_container
k8s_node
This is the total number of seconds spent by all writes. Sampled every 60 seconds.
device :
device.
node_disk_write_time_seconds_total/counter
ALPHA
(project)
node_disk_write_time_seconds_total
CUMULATIVE , DOUBLE , s
prometheus_target
This is the total number of seconds spent by all writes. Sampled every 30 seconds.
device :
device.
node_disk_writes_completed_total
ALPHA
(project)
node_disk_writes_completed_total
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_node
The total number of writes completed successfully. Sampled every 60 seconds.
device :
device.
node_disk_writes_completed_total/counter
ALPHA
(project)
node_disk_writes_completed_total
CUMULATIVE , DOUBLE , 1
prometheus_target
The total number of writes completed successfully. Sampled every 30 seconds.
device :
device.
node_disk_writes_merged_total
ALPHA
(project)
node_disk_writes_merged_total
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_node
The number of writes merged. Sampled every 60 seconds.
device :
device.
node_disk_writes_merged_total/counter
ALPHA
(project)
node_disk_writes_merged_total
CUMULATIVE , DOUBLE , 1
prometheus_target
The number of writes merged. Sampled every 30 seconds.
device :
device.
node_disk_written_bytes_total
ALPHA
(project)
node_disk_written_bytes_total
CUMULATIVE , DOUBLE , By
k8s_container
k8s_node
The total number of bytes written successfully. Sampled every 60 seconds.
device :
device.
node_disk_written_bytes_total/counter
ALPHA
(project)
node_disk_written_bytes_total
CUMULATIVE , DOUBLE , By
prometheus_target
The total number of bytes written successfully. Sampled every 30 seconds.
device :
device.
node_entropy_available_bits
ALPHA
(project)
node_entropy_available_bits
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Bits of available entropy. Sampled every 60 seconds.
node_entropy_available_bits/gauge
ALPHA
(project)
node_entropy_available_bits
GAUGE , DOUBLE , 1
prometheus_target
Bits of available entropy. Sampled every 30 seconds.
node_exporter_build_info
ALPHA
(project)
node_exporter_build_info
GAUGE , DOUBLE , 1
k8s_container
k8s_node
A metric with a constant '1' value labeled by version, revision, branch, and goversion from which node_exporter was built. Sampled every 60 seconds.
branch :
branch.
goversion :
goversion.
revision :
revision.
version :
version.
node_exporter_build_info/gauge
ALPHA
(project)
node_exporter_build_info
GAUGE , DOUBLE , 1
prometheus_target
A metric with a constant '1' value labeled by version, revision, branch, and goversion from which node_exporter was built. Sampled every 30 seconds.
branch :
branch.
goversion :
goversion.
revision :
revision.
version :
version.
node_filefd_allocated
ALPHA
(project)
node_filefd_allocated
GAUGE , DOUBLE , 1
k8s_container
k8s_node
File descriptor statistics: allocated. Sampled every 60 seconds.
node_filefd_allocated/gauge
ALPHA
(project)
node_filefd_allocated
GAUGE , DOUBLE , 1
prometheus_target
File descriptor statistics: allocated. Sampled every 30 seconds.
node_filefd_maximum
ALPHA
(project)
node_filefd_maximum
GAUGE , DOUBLE , 1
k8s_container
k8s_node
File descriptor statistics: maximum. Sampled every 60 seconds.
node_filefd_maximum/gauge
ALPHA
(project)
node_filefd_maximum
GAUGE , DOUBLE , 1
prometheus_target
File descriptor statistics: maximum. Sampled every 30 seconds.
node_filesystem_avail_bytes
ALPHA
(project)
node_filesystem_avail_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
Filesystem space available to non-root users in bytes. Sampled every 60 seconds.
device :
device.
fstype :
fstype.
mountpoint :
mountpoint.
node_filesystem_avail_bytes/gauge
ALPHA
(project)
node_filesystem_avail_bytes
GAUGE , DOUBLE , By
prometheus_target
Filesystem space available to non-root users in bytes. Sampled every 30 seconds.
device :
device.
fstype :
fstype.
mountpoint :
mountpoint.
node_filesystem_device_error
ALPHA
(project)
node_filesystem_device_error
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Whether an error occurred while getting statistics for the given device. Sampled every 60 seconds.
device :
device.
fstype :
fstype.
mountpoint :
mountpoint.
node_filesystem_device_error/gauge
ALPHA
(project)
node_filesystem_device_error
GAUGE , DOUBLE , 1
prometheus_target
Whether an error occurred while getting statistics for the given device. Sampled every 30 seconds.
device :
device.
fstype :
fstype.
mountpoint :
mountpoint.
node_filesystem_files
ALPHA
(project)
node_filesystem_files
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Filesystem total file nodes. Sampled every 60 seconds.
device :
device.
fstype :
fstype.
mountpoint :
mountpoint.
node_filesystem_files/gauge
ALPHA
(project)
node_filesystem_files
GAUGE , DOUBLE , 1
prometheus_target
Filesystem total file nodes. Sampled every 30 seconds.
device :
device.
fstype :
fstype.
mountpoint :
mountpoint.
node_filesystem_files_free
ALPHA
(project)
node_filesystem_files_free
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Filesystem total free file nodes. Sampled every 60 seconds.
device :
device.
fstype :
fstype.
mountpoint :
mountpoint.
node_filesystem_files_free/gauge
ALPHA
(project)
node_filesystem_files_free
GAUGE , DOUBLE , 1
prometheus_target
Filesystem total free file nodes. Sampled every 30 seconds.
device :
device.
fstype :
fstype.
mountpoint :
mountpoint.
node_filesystem_free_bytes
ALPHA
(project)
node_filesystem_free_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
Filesystem free space in bytes. Sampled every 60 seconds.
device :
device.
fstype :
fstype.
mountpoint :
mountpoint.
node_filesystem_free_bytes/gauge
ALPHA
(project)
node_filesystem_free_bytes
GAUGE , DOUBLE , By
prometheus_target
Filesystem free space in bytes. Sampled every 30 seconds.
device :
device.
fstype :
fstype.
mountpoint :
mountpoint.
node_filesystem_readonly
ALPHA
(project)
node_filesystem_readonly
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Filesystem read-only status. Sampled every 60 seconds.
device :
device.
fstype :
fstype.
mountpoint :
mountpoint.
node_filesystem_readonly/gauge
ALPHA
(project)
node_filesystem_readonly
GAUGE , DOUBLE , 1
prometheus_target
Filesystem read-only status. Sampled every 30 seconds.
device :
device.
fstype :
fstype.
mountpoint :
mountpoint.
node_filesystem_size_bytes
ALPHA
(project)
node_filesystem_size_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
Filesystem size in bytes. Sampled every 60 seconds.
device :
device.
fstype :
fstype.
mountpoint :
mountpoint.
node_filesystem_size_bytes/gauge
ALPHA
(project)
node_filesystem_size_bytes
GAUGE , DOUBLE , By
prometheus_target
Filesystem size in bytes. Sampled every 30 seconds.
device :
device.
fstype :
fstype.
mountpoint :
mountpoint.
node_forks_total
ALPHA
(project)
node_forks_total
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_node
Total number of forks. Sampled every 60 seconds.
node_forks_total/counter
ALPHA
(project)
node_forks_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Total number of forks. Sampled every 30 seconds.
node_hwmon_chip_names
ALPHA
(project)
node_hwmon_chip_names
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Annotation metric for human-readable chip names. Sampled every 60 seconds.
chip :
chip.
chip_name :
chip_name.
node_hwmon_sensor_label
ALPHA
(project)
node_hwmon_sensor_label
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Label for given chip and sensor. Sampled every 60 seconds.
chip :
chip.
label :
label.
sensor :
sensor.
node_intr_total
ALPHA
(project)
node_intr_total
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_node
Total number of interrupts serviced. Sampled every 60 seconds.
node_intr_total/counter
ALPHA
(project)
node_intr_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Total number of interrupts serviced. Sampled every 30 seconds.
node_ipam_controller_cidrset_allocation_tries_per_request
ALPHA
(project)
node_ipam_controller_cidrset_allocation_tries_per_request
CUMULATIVE , DISTRIBUTION , 1
k8s_container
Number of endpoints added on each Service sync. Sampled every 60 seconds.
clusterCIDR :
clusterCIDR.
node_ipam_controller_cidrset_cidrs_allocations_total
ALPHA
(project)
node_ipam_controller_cidrset_cidrs_allocations_total
CUMULATIVE , DOUBLE , 1
k8s_container
Counter measuring total number of CIDR allocations. Sampled every 60 seconds.
clusterCIDR :
clusterCIDR.
node_ipam_controller_cidrset_cidrs_allocations_total/counter
ALPHA
(project)
node_ipam_controller_cidrset_cidrs_allocations_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Counter measuring total number of CIDR allocations. Sampled every 30 seconds.
clusterCIDR :
clusterCIDR.
node_ipam_controller_cidrset_usage_cidrs
ALPHA
(project)
node_ipam_controller_cidrset_usage_cidrs
GAUGE , DOUBLE , 1
k8s_container
Gauge measuring percentage of allocated CIDRs. Sampled every 60 seconds.
clusterCIDR :
clusterCIDR.
node_ipam_controller_cidrset_usage_cidrs/gauge
ALPHA
(project)
node_ipam_controller_cidrset_usage_cidrs
GAUGE , DOUBLE , 1
prometheus_target
Gauge measuring percentage of allocated CIDRs. Sampled every 30 seconds.
clusterCIDR :
clusterCIDR.
node_ipam_controller_rate_limiter_use
ALPHA
(project)
node_ipam_controller_rate_limiter_use
GAUGE , DOUBLE , 1
k8s_container
A metric measuring the saturation of the rate limiter for node_ipam_controller. Sampled every 60 seconds.
node_ipam_controller_rate_limiter_use/gauge
ALPHA
(project)
node_ipam_controller_rate_limiter_use
GAUGE , DOUBLE , 1
prometheus_target
A metric measuring the saturation of the rate limiter for node_ipam_controller. Sampled every 30 seconds.
node_ipvs_connections_total
ALPHA
(project)
node_ipvs_connections_total
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_node
The total number of connections made. Sampled every 60 seconds.
node_ipvs_connections_total/counter
ALPHA
(project)
node_ipvs_connections_total
CUMULATIVE , DOUBLE , 1
prometheus_target
The total number of connections made. Sampled every 30 seconds.
node_ipvs_incoming_bytes_total
ALPHA
(project)
node_ipvs_incoming_bytes_total
CUMULATIVE , DOUBLE , By
k8s_container
k8s_node
The total amount of incoming data. Sampled every 60 seconds.
node_ipvs_incoming_bytes_total/counter
ALPHA
(project)
node_ipvs_incoming_bytes_total
CUMULATIVE , DOUBLE , By
prometheus_target
The total amount of incoming data. Sampled every 30 seconds.
node_ipvs_incoming_packets_total
ALPHA
(project)
node_ipvs_incoming_packets_total
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_node
The total number of incoming packets. Sampled every 60 seconds.
node_ipvs_incoming_packets_total/counter
ALPHA
(project)
node_ipvs_incoming_packets_total
CUMULATIVE , DOUBLE , 1
prometheus_target
The total number of incoming packets. Sampled every 30 seconds.
node_ipvs_outgoing_bytes_total
ALPHA
(project)
node_ipvs_outgoing_bytes_total
CUMULATIVE , DOUBLE , By
k8s_container
k8s_node
The total amount of outgoing data. Sampled every 60 seconds.
node_ipvs_outgoing_bytes_total/counter
ALPHA
(project)
node_ipvs_outgoing_bytes_total
CUMULATIVE , DOUBLE , By
prometheus_target
The total amount of outgoing data. Sampled every 30 seconds.
node_ipvs_outgoing_packets_total
ALPHA
(project)
node_ipvs_outgoing_packets_total
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_node
The total number of outgoing packets. Sampled every 60 seconds.
node_ipvs_outgoing_packets_total/counter
ALPHA
(project)
node_ipvs_outgoing_packets_total
CUMULATIVE , DOUBLE , 1
prometheus_target
The total number of outgoing packets. Sampled every 30 seconds.
node_lifecycle_controller_adds
ALPHA
(project)
node_lifecycle_controller_adds
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of adds handled by workqueue: node_lifecycle_controller. Sampled every 60 seconds.
node_lifecycle_controller_depth
ALPHA
(project)
node_lifecycle_controller_depth
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) Current depth of workqueue: node_lifecycle_controller. Sampled every 60 seconds.
node_lifecycle_controller_longest_running_processor_microseconds
ALPHA
(project)
node_lifecycle_controller_longest_running_processor_microseconds
GAUGE , DOUBLE , us
k8s_container
(Deprecated) How many microseconds has the longest running processor for node_lifecycle_controller been running. Sampled every 60 seconds.
node_lifecycle_controller_queue_latency
ALPHA
(project)
node_lifecycle_controller_queue_latency
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuenode_lifecycle_controller before being requested. Sampled every 60 seconds.
quantile :
quantile.
node_lifecycle_controller_queue_latency_count
ALPHA
(project)
node_lifecycle_controller_queue_latency_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long an item stays in workqueuenode_lifecycle_controller before being requested. Sampled every 60 seconds.
node_lifecycle_controller_queue_latency_sum
ALPHA
(project)
node_lifecycle_controller_queue_latency_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuenode_lifecycle_controller before being requested. Sampled every 60 seconds.
node_lifecycle_controller_rate_limiter_use
ALPHA
(project)
node_lifecycle_controller_rate_limiter_use
GAUGE , DOUBLE , 1
k8s_container
A metric measuring the saturation of the rate limiter for node_lifecycle_controller. Sampled every 60 seconds.
node_lifecycle_controller_rate_limiter_use/gauge
ALPHA
(project)
node_lifecycle_controller_rate_limiter_use
GAUGE , DOUBLE , 1
prometheus_target
A metric measuring the saturation of the rate limiter for node_lifecycle_controller. Sampled every 30 seconds.
node_lifecycle_controller_unfinished_work_seconds
ALPHA
(project)
node_lifecycle_controller_unfinished_work_seconds
GAUGE , DOUBLE , s
k8s_container
(Deprecated) How many seconds of work node_lifecycle_controller has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases. Sampled every 60 seconds.
node_lifecycle_controller_work_duration
ALPHA
(project)
node_lifecycle_controller_work_duration
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuenode_lifecycle_controller takes. Sampled every 60 seconds.
quantile :
quantile.
node_lifecycle_controller_work_duration_count
ALPHA
(project)
node_lifecycle_controller_work_duration_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long processing an item from workqueuenode_lifecycle_controller takes. Sampled every 60 seconds.
node_lifecycle_controller_work_duration_sum
ALPHA
(project)
node_lifecycle_controller_work_duration_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuenode_lifecycle_controller takes. Sampled every 60 seconds.
node_load1
ALPHA
(project)
node_load1
GAUGE , DOUBLE , 1
k8s_container
k8s_node
1m load average. Sampled every 60 seconds.
node_load1/gauge
ALPHA
(project)
node_load1
GAUGE , DOUBLE , 1
prometheus_target
1m load average. Sampled every 30 seconds.
node_load15
ALPHA
(project)
node_load15
GAUGE , DOUBLE , 1
k8s_container
k8s_node
15m load average. Sampled every 60 seconds.
node_load15/gauge
ALPHA
(project)
node_load15
GAUGE , DOUBLE , 1
prometheus_target
15m load average. Sampled every 30 seconds.
node_load5
ALPHA
(project)
node_load5
GAUGE , DOUBLE , 1
k8s_container
k8s_node
5m load average. Sampled every 60 seconds.
node_load5/gauge
ALPHA
(project)
node_load5
GAUGE , DOUBLE , 1
prometheus_target
5m load average. Sampled every 30 seconds.
node_memory_Active_anon_bytes
ALPHA
(project)
node_memory_Active_anon_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
Memory information field Active_anon_bytes. Sampled every 60 seconds.
node_memory_Active_anon_bytes/gauge
ALPHA
(project)
node_memory_Active_anon_bytes
GAUGE , DOUBLE , By
prometheus_target
Memory information field Active_anon_bytes. Sampled every 30 seconds.
node_memory_Active_bytes
ALPHA
(project)
node_memory_Active_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
Memory information field Active_bytes. Sampled every 60 seconds.
node_memory_Active_bytes/gauge
ALPHA
(project)
node_memory_Active_bytes
GAUGE , DOUBLE , By
prometheus_target
Memory information field Active_bytes. Sampled every 30 seconds.
node_memory_Active_file_bytes
ALPHA
(project)
node_memory_Active_file_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
Memory information field Active_file_bytes. Sampled every 60 seconds.
node_memory_Active_file_bytes/gauge
ALPHA
(project)
node_memory_Active_file_bytes
GAUGE , DOUBLE , By
prometheus_target
Memory information field Active_file_bytes. Sampled every 30 seconds.
node_memory_AnonHugePages_bytes
ALPHA
(project)
node_memory_AnonHugePages_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
Memory information field AnonHugePages_bytes. Sampled every 60 seconds.
node_memory_AnonHugePages_bytes/gauge
ALPHA
(project)
node_memory_AnonHugePages_bytes
GAUGE , DOUBLE , By
prometheus_target
Memory information field AnonHugePages_bytes. Sampled every 30 seconds.
node_memory_AnonPages_bytes
ALPHA
(project)
node_memory_AnonPages_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
Memory information field AnonPages_bytes. Sampled every 60 seconds.
node_memory_AnonPages_bytes/gauge
ALPHA
(project)
node_memory_AnonPages_bytes
GAUGE , DOUBLE , By
prometheus_target
Memory information field AnonPages_bytes. Sampled every 30 seconds.
node_memory_Bounce_bytes
ALPHA
(project)
node_memory_Bounce_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
Memory information field Bounce_bytes. Sampled every 60 seconds.
node_memory_Bounce_bytes/gauge
ALPHA
(project)
node_memory_Bounce_bytes
GAUGE , DOUBLE , By
prometheus_target
Memory information field Bounce_bytes. Sampled every 30 seconds.
node_memory_Buffers_bytes
ALPHA
(project)
node_memory_Buffers_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
Memory information field Buffers_bytes. Sampled every 60 seconds.
node_memory_Buffers_bytes/gauge
ALPHA
(project)
node_memory_Buffers_bytes
GAUGE , DOUBLE , By
prometheus_target
Memory information field Buffers_bytes. Sampled every 30 seconds.
node_memory_Cached_bytes
ALPHA
(project)
node_memory_Cached_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
Memory information field Cached_bytes. Sampled every 60 seconds.
node_memory_Cached_bytes/gauge
ALPHA
(project)
node_memory_Cached_bytes
GAUGE , DOUBLE , By
prometheus_target
Memory information field Cached_bytes. Sampled every 30 seconds.
node_memory_CmaFree_bytes
ALPHA
(project)
node_memory_CmaFree_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
Memory information field CmaFree_bytes. Sampled every 60 seconds.
node_memory_CmaFree_bytes/gauge
ALPHA
(project)
node_memory_CmaFree_bytes
GAUGE , DOUBLE , By
prometheus_target
Memory information field CmaFree_bytes. Sampled every 30 seconds.
node_memory_CmaTotal_bytes
ALPHA
(project)
node_memory_CmaTotal_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
Memory information field CmaTotal_bytes. Sampled every 60 seconds.
node_memory_CmaTotal_bytes/gauge
ALPHA
(project)
node_memory_CmaTotal_bytes
GAUGE , DOUBLE , By
prometheus_target
Memory information field CmaTotal_bytes. Sampled every 30 seconds.
node_memory_CommitLimit_bytes
ALPHA
(project)
node_memory_CommitLimit_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
Memory information field CommitLimit_bytes. Sampled every 60 seconds.
node_memory_CommitLimit_bytes/gauge
ALPHA
(project)
node_memory_CommitLimit_bytes
GAUGE , DOUBLE , By
prometheus_target
Memory information field CommitLimit_bytes. Sampled every 30 seconds.
node_memory_Committed_AS_bytes
ALPHA
(project)
node_memory_Committed_AS_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
Memory information field Committed_AS_bytes. Sampled every 60 seconds.
node_memory_Committed_AS_bytes/gauge
ALPHA
(project)
node_memory_Committed_AS_bytes
GAUGE , DOUBLE , By
prometheus_target
Memory information field Committed_AS_bytes. Sampled every 30 seconds.
node_memory_DirectMap1G_bytes
ALPHA
(project)
node_memory_DirectMap1G_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
Memory information field DirectMap1G_bytes. Sampled every 60 seconds.
node_memory_DirectMap1G_bytes/gauge
ALPHA
(project)
node_memory_DirectMap1G_bytes
GAUGE , DOUBLE , By
prometheus_target
Memory information field DirectMap1G_bytes. Sampled every 30 seconds.
node_memory_DirectMap2M_bytes
ALPHA
(project)
node_memory_DirectMap2M_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
Memory information field DirectMap2M_bytes. Sampled every 60 seconds.
node_memory_DirectMap2M_bytes/gauge
ALPHA
(project)
node_memory_DirectMap2M_bytes
GAUGE , DOUBLE , By
prometheus_target
Memory information field DirectMap2M_bytes. Sampled every 30 seconds.
node_memory_DirectMap4k_bytes
ALPHA
(project)
node_memory_DirectMap4k_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
Memory information field DirectMap4k_bytes. Sampled every 60 seconds.
node_memory_DirectMap4k_bytes/gauge
ALPHA
(project)
node_memory_DirectMap4k_bytes
GAUGE , DOUBLE , By
prometheus_target
Memory information field DirectMap4k_bytes. Sampled every 30 seconds.
node_memory_Dirty_bytes
ALPHA
(project)
node_memory_Dirty_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
Memory information field Dirty_bytes. Sampled every 60 seconds.
node_memory_Dirty_bytes/gauge
ALPHA
(project)
node_memory_Dirty_bytes
GAUGE , DOUBLE , By
prometheus_target
Memory information field Dirty_bytes. Sampled every 30 seconds.
node_memory_FileHugePages_bytes
ALPHA
(project)
node_memory_FileHugePages_bytes
GAUGE , DOUBLE , By
k8s_node
Memory information field FileHugePages_bytes. Sampled every 60 seconds.
node_memory_FileHugePages_bytes/gauge
ALPHA
(project)
node_memory_FileHugePages_bytes
GAUGE , DOUBLE , By
prometheus_target
Memory information field FileHugePages_bytes. Sampled every 30 seconds.
node_memory_FilePmdMapped_bytes
ALPHA
(project)
node_memory_FilePmdMapped_bytes
GAUGE , DOUBLE , By
k8s_node
Memory information field FilePmdMapped_bytes. Sampled every 60 seconds.
node_memory_FilePmdMapped_bytes/gauge
ALPHA
(project)
node_memory_FilePmdMapped_bytes
GAUGE , DOUBLE , By
prometheus_target
Memory information field FilePmdMapped_bytes. Sampled every 30 seconds.
node_memory_HardwareCorrupted_bytes
ALPHA
(project)
node_memory_HardwareCorrupted_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
Memory information field HardwareCorrupted_bytes. Sampled every 60 seconds.
node_memory_HardwareCorrupted_bytes/gauge
ALPHA
(project)
node_memory_HardwareCorrupted_bytes
GAUGE , DOUBLE , By
prometheus_target
Memory information field HardwareCorrupted_bytes. Sampled every 30 seconds.
node_memory_HugePages_Free
ALPHA
(project)
node_memory_HugePages_Free
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Memory information field HugePages_Free. Sampled every 60 seconds.
node_memory_HugePages_Free/gauge
ALPHA
(project)
node_memory_HugePages_Free
GAUGE , DOUBLE , 1
prometheus_target
Memory information field HugePages_Free. Sampled every 30 seconds.
node_memory_HugePages_Rsvd
ALPHA
(project)
node_memory_HugePages_Rsvd
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Memory information field HugePages_Rsvd. Sampled every 60 seconds.
node_memory_HugePages_Rsvd/gauge
ALPHA
(project)
node_memory_HugePages_Rsvd
GAUGE , DOUBLE , 1
prometheus_target
Memory information field HugePages_Rsvd. Sampled every 30 seconds.
node_memory_HugePages_Surp
ALPHA
(project)
node_memory_HugePages_Surp
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Memory information field HugePages_Surp. Sampled every 60 seconds.
node_memory_HugePages_Surp/gauge
ALPHA
(project)
node_memory_HugePages_Surp
GAUGE , DOUBLE , 1
prometheus_target
Memory information field HugePages_Surp. Sampled every 30 seconds.
node_memory_HugePages_Total
ALPHA
(project)
node_memory_HugePages_Total
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Memory information field HugePages_Total. Sampled every 60 seconds.
node_memory_HugePages_Total/gauge
ALPHA
(project)
node_memory_HugePages_Total
GAUGE , DOUBLE , 1
prometheus_target
Memory information field HugePages_Total. Sampled every 30 seconds.
node_memory_Hugepagesize_bytes
ALPHA
(project)
node_memory_Hugepagesize_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
Memory information field Hugepagesize_bytes. Sampled every 60 seconds.
node_memory_Hugepagesize_bytes/gauge
ALPHA
(project)
node_memory_Hugepagesize_bytes
GAUGE , DOUBLE , By
prometheus_target
Memory information field Hugepagesize_bytes. Sampled every 30 seconds.
node_memory_Hugetlb_bytes
ALPHA
(project)
node_memory_Hugetlb_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
Memory information field Hugetlb_bytes. Sampled every 60 seconds.
node_memory_Hugetlb_bytes/gauge
ALPHA
(project)
node_memory_Hugetlb_bytes
GAUGE , DOUBLE , By
prometheus_target
Memory information field Hugetlb_bytes. Sampled every 30 seconds.
node_memory_Inactive_anon_bytes
ALPHA
(project)
node_memory_Inactive_anon_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
Memory information field Inactive_anon_bytes. Sampled every 60 seconds.
node_memory_Inactive_anon_bytes/gauge
ALPHA
(project)
node_memory_Inactive_anon_bytes
GAUGE , DOUBLE , By
prometheus_target
Memory information field Inactive_anon_bytes. Sampled every 30 seconds.
node_memory_Inactive_bytes
ALPHA
(project)
node_memory_Inactive_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
Memory information field Inactive_bytes. Sampled every 60 seconds.
node_memory_Inactive_bytes/gauge
ALPHA
(project)
node_memory_Inactive_bytes
GAUGE , DOUBLE , By
prometheus_target
Memory information field Inactive_bytes. Sampled every 30 seconds.
node_memory_Inactive_file_bytes
ALPHA
(project)
node_memory_Inactive_file_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
Memory information field Inactive_file_bytes. Sampled every 60 seconds.
node_memory_Inactive_file_bytes/gauge
ALPHA
(project)
node_memory_Inactive_file_bytes
GAUGE , DOUBLE , By
prometheus_target
Memory information field Inactive_file_bytes. Sampled every 30 seconds.
node_memory_KReclaimable_bytes
ALPHA
(project)
node_memory_KReclaimable_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
Memory information field KReclaimable_bytes. Sampled every 60 seconds.
node_memory_KReclaimable_bytes/gauge
ALPHA
(project)
node_memory_KReclaimable_bytes
GAUGE , DOUBLE , By
prometheus_target
Memory information field KReclaimable_bytes. Sampled every 30 seconds.
node_memory_KernelStack_bytes
ALPHA
(project)
node_memory_KernelStack_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
Memory information field KernelStack_bytes. Sampled every 60 seconds.
node_memory_KernelStack_bytes/gauge
ALPHA
(project)
node_memory_KernelStack_bytes
GAUGE , DOUBLE , By
prometheus_target
Memory information field KernelStack_bytes. Sampled every 30 seconds.
node_memory_Mapped_bytes
ALPHA
(project)
node_memory_Mapped_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
Memory information field Mapped_bytes. Sampled every 60 seconds.
node_memory_Mapped_bytes/gauge
ALPHA
(project)
node_memory_Mapped_bytes
GAUGE , DOUBLE , By
prometheus_target
Memory information field Mapped_bytes. Sampled every 30 seconds.
node_memory_MemAvailable_bytes
ALPHA
(project)
node_memory_MemAvailable_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
Memory information field MemAvailable_bytes. Sampled every 60 seconds.
node_memory_MemAvailable_bytes/gauge
ALPHA
(project)
node_memory_MemAvailable_bytes
GAUGE , DOUBLE , By
prometheus_target
Memory information field MemAvailable_bytes. Sampled every 30 seconds.
node_memory_MemFree_bytes
ALPHA
(project)
node_memory_MemFree_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
Memory information field MemFree_bytes. Sampled every 60 seconds.
node_memory_MemFree_bytes/gauge
ALPHA
(project)
node_memory_MemFree_bytes
GAUGE , DOUBLE , By
prometheus_target
Memory information field MemFree_bytes. Sampled every 30 seconds.
node_memory_MemTotal_bytes
ALPHA
(project)
node_memory_MemTotal_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
Memory information field MemTotal_bytes. Sampled every 60 seconds.
node_memory_MemTotal_bytes/gauge
ALPHA
(project)
node_memory_MemTotal_bytes
GAUGE , DOUBLE , By
prometheus_target
Memory information field MemTotal_bytes. Sampled every 30 seconds.
node_memory_Mlocked_bytes
ALPHA
(project)
node_memory_Mlocked_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
Memory information field Mlocked_bytes. Sampled every 60 seconds.
node_memory_Mlocked_bytes/gauge
ALPHA
(project)
node_memory_Mlocked_bytes
GAUGE , DOUBLE , By
prometheus_target
Memory information field Mlocked_bytes. Sampled every 30 seconds.
node_memory_NFS_Unstable_bytes
ALPHA
(project)
node_memory_NFS_Unstable_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
Memory information field NFS_Unstable_bytes. Sampled every 60 seconds.
node_memory_NFS_Unstable_bytes/gauge
ALPHA
(project)
node_memory_NFS_Unstable_bytes
GAUGE , DOUBLE , By
prometheus_target
Memory information field NFS_Unstable_bytes. Sampled every 30 seconds.
node_memory_PageTables_bytes
ALPHA
(project)
node_memory_PageTables_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
Memory information field PageTables_bytes. Sampled every 60 seconds.
node_memory_PageTables_bytes/gauge
ALPHA
(project)
node_memory_PageTables_bytes
GAUGE , DOUBLE , By
prometheus_target
Memory information field PageTables_bytes. Sampled every 30 seconds.
node_memory_Percpu_bytes
ALPHA
(project)
node_memory_Percpu_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
Memory information field Percpu_bytes. Sampled every 60 seconds.
node_memory_Percpu_bytes/gauge
ALPHA
(project)
node_memory_Percpu_bytes
GAUGE , DOUBLE , By
prometheus_target
Memory information field Percpu_bytes. Sampled every 30 seconds.
node_memory_SReclaimable_bytes
ALPHA
(project)
node_memory_SReclaimable_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
Memory information field SReclaimable_bytes. Sampled every 60 seconds.
node_memory_SReclaimable_bytes/gauge
ALPHA
(project)
node_memory_SReclaimable_bytes
GAUGE , DOUBLE , By
prometheus_target
Memory information field SReclaimable_bytes. Sampled every 30 seconds.
node_memory_SUnreclaim_bytes
ALPHA
(project)
node_memory_SUnreclaim_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
Memory information field SUnreclaim_bytes. Sampled every 60 seconds.
node_memory_SUnreclaim_bytes/gauge
ALPHA
(project)
node_memory_SUnreclaim_bytes
GAUGE , DOUBLE , By
prometheus_target
Memory information field SUnreclaim_bytes. Sampled every 30 seconds.
node_memory_ShmemHugePages_bytes
ALPHA
(project)
node_memory_ShmemHugePages_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
Memory information field ShmemHugePages_bytes. Sampled every 60 seconds.
node_memory_ShmemHugePages_bytes/gauge
ALPHA
(project)
node_memory_ShmemHugePages_bytes
GAUGE , DOUBLE , By
prometheus_target
Memory information field ShmemHugePages_bytes. Sampled every 30 seconds.
node_memory_ShmemPmdMapped_bytes
ALPHA
(project)
node_memory_ShmemPmdMapped_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
Memory information field ShmemPmdMapped_bytes. Sampled every 60 seconds.
node_memory_ShmemPmdMapped_bytes/gauge
ALPHA
(project)
node_memory_ShmemPmdMapped_bytes
GAUGE , DOUBLE , By
prometheus_target
Memory information field ShmemPmdMapped_bytes. Sampled every 30 seconds.
node_memory_Shmem_bytes
ALPHA
(project)
node_memory_Shmem_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
Memory information field Shmem_bytes. Sampled every 60 seconds.
node_memory_Shmem_bytes/gauge
ALPHA
(project)
node_memory_Shmem_bytes
GAUGE , DOUBLE , By
prometheus_target
Memory information field Shmem_bytes. Sampled every 30 seconds.
node_memory_Slab_bytes
ALPHA
(project)
node_memory_Slab_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
Memory information field Slab_bytes. Sampled every 60 seconds.
node_memory_Slab_bytes/gauge
ALPHA
(project)
node_memory_Slab_bytes
GAUGE , DOUBLE , By
prometheus_target
Memory information field Slab_bytes. Sampled every 30 seconds.
node_memory_SwapCached_bytes
ALPHA
(project)
node_memory_SwapCached_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
Memory information field SwapCached_bytes. Sampled every 60 seconds.
node_memory_SwapCached_bytes/gauge
ALPHA
(project)
node_memory_SwapCached_bytes
GAUGE , DOUBLE , By
prometheus_target
Memory information field SwapCached_bytes. Sampled every 30 seconds.
node_memory_SwapFree_bytes
ALPHA
(project)
node_memory_SwapFree_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
Memory information field SwapFree_bytes. Sampled every 60 seconds.
node_memory_SwapFree_bytes/gauge
ALPHA
(project)
node_memory_SwapFree_bytes
GAUGE , DOUBLE , By
prometheus_target
Memory information field SwapFree_bytes. Sampled every 30 seconds.
node_memory_SwapTotal_bytes
ALPHA
(project)
node_memory_SwapTotal_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
Memory information field SwapTotal_bytes. Sampled every 60 seconds.
node_memory_SwapTotal_bytes/gauge
ALPHA
(project)
node_memory_SwapTotal_bytes
GAUGE , DOUBLE , By
prometheus_target
Memory information field SwapTotal_bytes. Sampled every 30 seconds.
node_memory_Unevictable_bytes
ALPHA
(project)
node_memory_Unevictable_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
Memory information field Unevictable_bytes. Sampled every 60 seconds.
node_memory_Unevictable_bytes/gauge
ALPHA
(project)
node_memory_Unevictable_bytes
GAUGE , DOUBLE , By
prometheus_target
Memory information field Unevictable_bytes. Sampled every 30 seconds.
node_memory_VmallocChunk_bytes
ALPHA
(project)
node_memory_VmallocChunk_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
Memory information field VmallocChunk_bytes. Sampled every 60 seconds.
node_memory_VmallocChunk_bytes/gauge
ALPHA
(project)
node_memory_VmallocChunk_bytes
GAUGE , DOUBLE , By
prometheus_target
Memory information field VmallocChunk_bytes. Sampled every 30 seconds.
node_memory_VmallocTotal_bytes
ALPHA
(project)
node_memory_VmallocTotal_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
Memory information field VmallocTotal_bytes. Sampled every 60 seconds.
node_memory_VmallocTotal_bytes/gauge
ALPHA
(project)
node_memory_VmallocTotal_bytes
GAUGE , DOUBLE , By
prometheus_target
Memory information field VmallocTotal_bytes. Sampled every 30 seconds.
node_memory_VmallocUsed_bytes
ALPHA
(project)
node_memory_VmallocUsed_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
Memory information field VmallocUsed_bytes. Sampled every 60 seconds.
node_memory_VmallocUsed_bytes/gauge
ALPHA
(project)
node_memory_VmallocUsed_bytes
GAUGE , DOUBLE , By
prometheus_target
Memory information field VmallocUsed_bytes. Sampled every 30 seconds.
node_memory_WritebackTmp_bytes
ALPHA
(project)
node_memory_WritebackTmp_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
Memory information field WritebackTmp_bytes. Sampled every 60 seconds.
node_memory_WritebackTmp_bytes/gauge
ALPHA
(project)
node_memory_WritebackTmp_bytes
GAUGE , DOUBLE , By
prometheus_target
Memory information field WritebackTmp_bytes. Sampled every 30 seconds.
node_memory_Writeback_bytes
ALPHA
(project)
node_memory_Writeback_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
Memory information field Writeback_bytes. Sampled every 60 seconds.
node_memory_Writeback_bytes/gauge
ALPHA
(project)
node_memory_Writeback_bytes
GAUGE , DOUBLE , By
prometheus_target
Memory information field Writeback_bytes. Sampled every 30 seconds.
node_netstat_Icmp6_InCsumErrors
ALPHA
(project)
node_netstat_Icmp6_InCsumErrors
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Icmp6InCsumErrors. Sampled every 60 seconds.
node_netstat_Icmp6_InDestUnreachs
ALPHA
(project)
node_netstat_Icmp6_InDestUnreachs
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Icmp6InDestUnreachs. Sampled every 60 seconds.
node_netstat_Icmp6_InEchoReplies
ALPHA
(project)
node_netstat_Icmp6_InEchoReplies
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Icmp6InEchoReplies. Sampled every 60 seconds.
node_netstat_Icmp6_InEchos
ALPHA
(project)
node_netstat_Icmp6_InEchos
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Icmp6InEchos. Sampled every 60 seconds.
node_netstat_Icmp6_InErrors
ALPHA
(project)
node_netstat_Icmp6_InErrors
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Icmp6InErrors. Sampled every 60 seconds.
node_netstat_Icmp6_InErrors/gauge
ALPHA
(project)
node_netstat_Icmp6_InErrors
GAUGE , DOUBLE , 1
prometheus_target
Statistic Icmp6InErrors. Sampled every 30 seconds.
node_netstat_Icmp6_InGroupMembQueries
ALPHA
(project)
node_netstat_Icmp6_InGroupMembQueries
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Icmp6InGroupMembQueries. Sampled every 60 seconds.
node_netstat_Icmp6_InGroupMembReductions
ALPHA
(project)
node_netstat_Icmp6_InGroupMembReductions
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Icmp6InGroupMembReductions. Sampled every 60 seconds.
node_netstat_Icmp6_InGroupMembResponses
ALPHA
(project)
node_netstat_Icmp6_InGroupMembResponses
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Icmp6InGroupMembResponses. Sampled every 60 seconds.
node_netstat_Icmp6_InMLDv2Reports
ALPHA
(project)
node_netstat_Icmp6_InMLDv2Reports
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Icmp6InMLDv2Reports. Sampled every 60 seconds.
node_netstat_Icmp6_InMsgs
ALPHA
(project)
node_netstat_Icmp6_InMsgs
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Icmp6InMsgs. Sampled every 60 seconds.
node_netstat_Icmp6_InMsgs/gauge
ALPHA
(project)
node_netstat_Icmp6_InMsgs
GAUGE , DOUBLE , 1
prometheus_target
Statistic Icmp6InMsgs. Sampled every 30 seconds.
node_netstat_Icmp6_InNeighborAdvertisements
ALPHA
(project)
node_netstat_Icmp6_InNeighborAdvertisements
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Icmp6InNeighborAdvertisements. Sampled every 60 seconds.
node_netstat_Icmp6_InNeighborSolicits
ALPHA
(project)
node_netstat_Icmp6_InNeighborSolicits
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Icmp6InNeighborSolicits. Sampled every 60 seconds.
node_netstat_Icmp6_InParmProblems
ALPHA
(project)
node_netstat_Icmp6_InParmProblems
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Icmp6InParmProblems. Sampled every 60 seconds.
node_netstat_Icmp6_InPktTooBigs
ALPHA
(project)
node_netstat_Icmp6_InPktTooBigs
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Icmp6InPktTooBigs. Sampled every 60 seconds.
node_netstat_Icmp6_InRedirects
ALPHA
(project)
node_netstat_Icmp6_InRedirects
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Icmp6InRedirects. Sampled every 60 seconds.
node_netstat_Icmp6_InRouterAdvertisements
ALPHA
(project)
node_netstat_Icmp6_InRouterAdvertisements
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Icmp6InRouterAdvertisements. Sampled every 60 seconds.
node_netstat_Icmp6_InRouterSolicits
ALPHA
(project)
node_netstat_Icmp6_InRouterSolicits
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Icmp6InRouterSolicits. Sampled every 60 seconds.
node_netstat_Icmp6_InTimeExcds
ALPHA
(project)
node_netstat_Icmp6_InTimeExcds
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Icmp6InTimeExcds. Sampled every 60 seconds.
node_netstat_Icmp6_InType1
ALPHA
(project)
node_netstat_Icmp6_InType1
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Icmp6InType1. Sampled every 60 seconds.
node_netstat_Icmp6_InType133
ALPHA
(project)
node_netstat_Icmp6_InType133
GAUGE , DOUBLE , 1
k8s_node
Statistic Icmp6InType133. Sampled every 60 seconds.
node_netstat_Icmp6_InType136
ALPHA
(project)
node_netstat_Icmp6_InType136
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Icmp6InType136. Sampled every 60 seconds.
node_netstat_Icmp6_OutDestUnreachs
ALPHA
(project)
node_netstat_Icmp6_OutDestUnreachs
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Icmp6OutDestUnreachs. Sampled every 60 seconds.
node_netstat_Icmp6_OutEchoReplies
ALPHA
(project)
node_netstat_Icmp6_OutEchoReplies
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Icmp6OutEchoReplies. Sampled every 60 seconds.
node_netstat_Icmp6_OutEchos
ALPHA
(project)
node_netstat_Icmp6_OutEchos
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Icmp6OutEchos. Sampled every 60 seconds.
node_netstat_Icmp6_OutErrors
ALPHA
(project)
node_netstat_Icmp6_OutErrors
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Icmp6OutErrors. Sampled every 60 seconds.
node_netstat_Icmp6_OutGroupMembQueries
ALPHA
(project)
node_netstat_Icmp6_OutGroupMembQueries
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Icmp6OutGroupMembQueries. Sampled every 60 seconds.
node_netstat_Icmp6_OutGroupMembReductions
ALPHA
(project)
node_netstat_Icmp6_OutGroupMembReductions
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Icmp6OutGroupMembReductions. Sampled every 60 seconds.
node_netstat_Icmp6_OutGroupMembResponses
ALPHA
(project)
node_netstat_Icmp6_OutGroupMembResponses
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Icmp6OutGroupMembResponses. Sampled every 60 seconds.
node_netstat_Icmp6_OutMLDv2Reports
ALPHA
(project)
node_netstat_Icmp6_OutMLDv2Reports
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Icmp6OutMLDv2Reports. Sampled every 60 seconds.
node_netstat_Icmp6_OutMsgs
ALPHA
(project)
node_netstat_Icmp6_OutMsgs
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Icmp6OutMsgs. Sampled every 60 seconds.
node_netstat_Icmp6_OutMsgs/gauge
ALPHA
(project)
node_netstat_Icmp6_OutMsgs
GAUGE , DOUBLE , 1
prometheus_target
Statistic Icmp6OutMsgs. Sampled every 30 seconds.
node_netstat_Icmp6_OutNeighborAdvertisements
ALPHA
(project)
node_netstat_Icmp6_OutNeighborAdvertisements
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Icmp6OutNeighborAdvertisements. Sampled every 60 seconds.
node_netstat_Icmp6_OutNeighborSolicits
ALPHA
(project)
node_netstat_Icmp6_OutNeighborSolicits
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Icmp6OutNeighborSolicits. Sampled every 60 seconds.
node_netstat_Icmp6_OutParmProblems
ALPHA
(project)
node_netstat_Icmp6_OutParmProblems
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Icmp6OutParmProblems. Sampled every 60 seconds.
node_netstat_Icmp6_OutPktTooBigs
ALPHA
(project)
node_netstat_Icmp6_OutPktTooBigs
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Icmp6OutPktTooBigs. Sampled every 60 seconds.
node_netstat_Icmp6_OutRedirects
ALPHA
(project)
node_netstat_Icmp6_OutRedirects
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Icmp6OutRedirects. Sampled every 60 seconds.
node_netstat_Icmp6_OutRouterAdvertisements
ALPHA
(project)
node_netstat_Icmp6_OutRouterAdvertisements
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Icmp6OutRouterAdvertisements. Sampled every 60 seconds.
node_netstat_Icmp6_OutRouterSolicits
ALPHA
(project)
node_netstat_Icmp6_OutRouterSolicits
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Icmp6OutRouterSolicits. Sampled every 60 seconds.
node_netstat_Icmp6_OutTimeExcds
ALPHA
(project)
node_netstat_Icmp6_OutTimeExcds
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Icmp6OutTimeExcds. Sampled every 60 seconds.
node_netstat_Icmp6_OutType1
ALPHA
(project)
node_netstat_Icmp6_OutType1
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Icmp6OutType1. Sampled every 60 seconds.
node_netstat_Icmp6_OutType133
ALPHA
(project)
node_netstat_Icmp6_OutType133
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Icmp6OutType133. Sampled every 60 seconds.
node_netstat_Icmp6_OutType135
ALPHA
(project)
node_netstat_Icmp6_OutType135
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Icmp6OutType135. Sampled every 60 seconds.
node_netstat_Icmp6_OutType143
ALPHA
(project)
node_netstat_Icmp6_OutType143
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Icmp6OutType143. Sampled every 60 seconds.
node_netstat_IcmpMsg_InType0
ALPHA
(project)
node_netstat_IcmpMsg_InType0
GAUGE , DOUBLE , 1
k8s_node
Statistic IcmpMsgInType0. Sampled every 60 seconds.
node_netstat_IcmpMsg_InType11
ALPHA
(project)
node_netstat_IcmpMsg_InType11
GAUGE , DOUBLE , 1
k8s_node
Statistic IcmpMsgInType11. Sampled every 60 seconds.
node_netstat_IcmpMsg_InType13
ALPHA
(project)
node_netstat_IcmpMsg_InType13
GAUGE , DOUBLE , 1
k8s_node
Statistic IcmpMsgInType13. Sampled every 60 seconds.
node_netstat_IcmpMsg_InType17
ALPHA
(project)
node_netstat_IcmpMsg_InType17
GAUGE , DOUBLE , 1
k8s_node
Statistic IcmpMsgInType17. Sampled every 60 seconds.
node_netstat_IcmpMsg_InType3
ALPHA
(project)
node_netstat_IcmpMsg_InType3
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IcmpMsgInType3. Sampled every 60 seconds.
node_netstat_IcmpMsg_InType8
ALPHA
(project)
node_netstat_IcmpMsg_InType8
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IcmpMsgInType8. Sampled every 60 seconds.
node_netstat_IcmpMsg_OutType0
ALPHA
(project)
node_netstat_IcmpMsg_OutType0
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IcmpMsgOutType0. Sampled every 60 seconds.
node_netstat_IcmpMsg_OutType11
ALPHA
(project)
node_netstat_IcmpMsg_OutType11
GAUGE , DOUBLE , 1
k8s_node
Statistic IcmpMsgOutType11. Sampled every 60 seconds.
node_netstat_IcmpMsg_OutType14
ALPHA
(project)
node_netstat_IcmpMsg_OutType14
GAUGE , DOUBLE , 1
k8s_node
Statistic IcmpMsgOutType14. Sampled every 60 seconds.
node_netstat_IcmpMsg_OutType3
ALPHA
(project)
node_netstat_IcmpMsg_OutType3
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IcmpMsgOutType3. Sampled every 60 seconds.
node_netstat_IcmpMsg_OutType5
ALPHA
(project)
node_netstat_IcmpMsg_OutType5
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IcmpMsgOutType5. Sampled every 60 seconds.
node_netstat_IcmpMsg_OutType8
ALPHA
(project)
node_netstat_IcmpMsg_OutType8
GAUGE , DOUBLE , 1
k8s_node
Statistic IcmpMsgOutType8. Sampled every 60 seconds.
node_netstat_Icmp_InAddrMaskReps
ALPHA
(project)
node_netstat_Icmp_InAddrMaskReps
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IcmpInAddrMaskReps. Sampled every 60 seconds.
node_netstat_Icmp_InAddrMasks
ALPHA
(project)
node_netstat_Icmp_InAddrMasks
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IcmpInAddrMasks. Sampled every 60 seconds.
node_netstat_Icmp_InCsumErrors
ALPHA
(project)
node_netstat_Icmp_InCsumErrors
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IcmpInCsumErrors. Sampled every 60 seconds.
node_netstat_Icmp_InDestUnreachs
ALPHA
(project)
node_netstat_Icmp_InDestUnreachs
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IcmpInDestUnreachs. Sampled every 60 seconds.
node_netstat_Icmp_InEchoReps
ALPHA
(project)
node_netstat_Icmp_InEchoReps
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IcmpInEchoReps. Sampled every 60 seconds.
node_netstat_Icmp_InEchos
ALPHA
(project)
node_netstat_Icmp_InEchos
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IcmpInEchos. Sampled every 60 seconds.
node_netstat_Icmp_InErrors
ALPHA
(project)
node_netstat_Icmp_InErrors
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IcmpInErrors. Sampled every 60 seconds.
node_netstat_Icmp_InErrors/gauge
ALPHA
(project)
node_netstat_Icmp_InErrors
GAUGE , DOUBLE , 1
prometheus_target
Statistic IcmpInErrors. Sampled every 30 seconds.
node_netstat_Icmp_InMsgs
ALPHA
(project)
node_netstat_Icmp_InMsgs
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IcmpInMsgs. Sampled every 60 seconds.
node_netstat_Icmp_InMsgs/gauge
ALPHA
(project)
node_netstat_Icmp_InMsgs
GAUGE , DOUBLE , 1
prometheus_target
Statistic IcmpInMsgs. Sampled every 30 seconds.
node_netstat_Icmp_InParmProbs
ALPHA
(project)
node_netstat_Icmp_InParmProbs
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IcmpInParmProbs. Sampled every 60 seconds.
node_netstat_Icmp_InRedirects
ALPHA
(project)
node_netstat_Icmp_InRedirects
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IcmpInRedirects. Sampled every 60 seconds.
node_netstat_Icmp_InSrcQuenchs
ALPHA
(project)
node_netstat_Icmp_InSrcQuenchs
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IcmpInSrcQuenchs. Sampled every 60 seconds.
node_netstat_Icmp_InTimeExcds
ALPHA
(project)
node_netstat_Icmp_InTimeExcds
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IcmpInTimeExcds. Sampled every 60 seconds.
node_netstat_Icmp_InTimestampReps
ALPHA
(project)
node_netstat_Icmp_InTimestampReps
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IcmpInTimestampReps. Sampled every 60 seconds.
node_netstat_Icmp_InTimestamps
ALPHA
(project)
node_netstat_Icmp_InTimestamps
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IcmpInTimestamps. Sampled every 60 seconds.
node_netstat_Icmp_OutAddrMaskReps
ALPHA
(project)
node_netstat_Icmp_OutAddrMaskReps
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IcmpOutAddrMaskReps. Sampled every 60 seconds.
node_netstat_Icmp_OutAddrMasks
ALPHA
(project)
node_netstat_Icmp_OutAddrMasks
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IcmpOutAddrMasks. Sampled every 60 seconds.
node_netstat_Icmp_OutDestUnreachs
ALPHA
(project)
node_netstat_Icmp_OutDestUnreachs
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IcmpOutDestUnreachs. Sampled every 60 seconds.
node_netstat_Icmp_OutEchoReps
ALPHA
(project)
node_netstat_Icmp_OutEchoReps
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IcmpOutEchoReps. Sampled every 60 seconds.
node_netstat_Icmp_OutEchos
ALPHA
(project)
node_netstat_Icmp_OutEchos
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IcmpOutEchos. Sampled every 60 seconds.
node_netstat_Icmp_OutErrors
ALPHA
(project)
node_netstat_Icmp_OutErrors
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IcmpOutErrors. Sampled every 60 seconds.
node_netstat_Icmp_OutMsgs
ALPHA
(project)
node_netstat_Icmp_OutMsgs
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IcmpOutMsgs. Sampled every 60 seconds.
node_netstat_Icmp_OutMsgs/gauge
ALPHA
(project)
node_netstat_Icmp_OutMsgs
GAUGE , DOUBLE , 1
prometheus_target
Statistic IcmpOutMsgs. Sampled every 30 seconds.
node_netstat_Icmp_OutParmProbs
ALPHA
(project)
node_netstat_Icmp_OutParmProbs
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IcmpOutParmProbs. Sampled every 60 seconds.
node_netstat_Icmp_OutRedirects
ALPHA
(project)
node_netstat_Icmp_OutRedirects
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IcmpOutRedirects. Sampled every 60 seconds.
node_netstat_Icmp_OutSrcQuenchs
ALPHA
(project)
node_netstat_Icmp_OutSrcQuenchs
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IcmpOutSrcQuenchs. Sampled every 60 seconds.
node_netstat_Icmp_OutTimeExcds
ALPHA
(project)
node_netstat_Icmp_OutTimeExcds
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IcmpOutTimeExcds. Sampled every 60 seconds.
node_netstat_Icmp_OutTimestampReps
ALPHA
(project)
node_netstat_Icmp_OutTimestampReps
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IcmpOutTimestampReps. Sampled every 60 seconds.
node_netstat_Icmp_OutTimestamps
ALPHA
(project)
node_netstat_Icmp_OutTimestamps
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IcmpOutTimestamps. Sampled every 60 seconds.
node_netstat_Ip6_FragCreates
ALPHA
(project)
node_netstat_Ip6_FragCreates
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Ip6FragCreates. Sampled every 60 seconds.
node_netstat_Ip6_FragFails
ALPHA
(project)
node_netstat_Ip6_FragFails
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Ip6FragFails. Sampled every 60 seconds.
node_netstat_Ip6_FragOKs
ALPHA
(project)
node_netstat_Ip6_FragOKs
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Ip6FragOKs. Sampled every 60 seconds.
node_netstat_Ip6_InAddrErrors
ALPHA
(project)
node_netstat_Ip6_InAddrErrors
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Ip6InAddrErrors. Sampled every 60 seconds.
node_netstat_Ip6_InBcastOctets
ALPHA
(project)
node_netstat_Ip6_InBcastOctets
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Ip6InBcastOctets. Sampled every 60 seconds.
node_netstat_Ip6_InCEPkts
ALPHA
(project)
node_netstat_Ip6_InCEPkts
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Ip6InCEPkts. Sampled every 60 seconds.
node_netstat_Ip6_InDelivers
ALPHA
(project)
node_netstat_Ip6_InDelivers
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Ip6InDelivers. Sampled every 60 seconds.
node_netstat_Ip6_InDiscards
ALPHA
(project)
node_netstat_Ip6_InDiscards
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Ip6InDiscards. Sampled every 60 seconds.
node_netstat_Ip6_InECT0Pkts
ALPHA
(project)
node_netstat_Ip6_InECT0Pkts
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Ip6InECT0Pkts. Sampled every 60 seconds.
node_netstat_Ip6_InECT1Pkts
ALPHA
(project)
node_netstat_Ip6_InECT1Pkts
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Ip6InECT1Pkts. Sampled every 60 seconds.
node_netstat_Ip6_InHdrErrors
ALPHA
(project)
node_netstat_Ip6_InHdrErrors
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Ip6InHdrErrors. Sampled every 60 seconds.
node_netstat_Ip6_InMcastOctets
ALPHA
(project)
node_netstat_Ip6_InMcastOctets
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Ip6InMcastOctets. Sampled every 60 seconds.
node_netstat_Ip6_InMcastPkts
ALPHA
(project)
node_netstat_Ip6_InMcastPkts
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Ip6InMcastPkts. Sampled every 60 seconds.
node_netstat_Ip6_InNoECTPkts
ALPHA
(project)
node_netstat_Ip6_InNoECTPkts
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Ip6InNoECTPkts. Sampled every 60 seconds.
node_netstat_Ip6_InNoRoutes
ALPHA
(project)
node_netstat_Ip6_InNoRoutes
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Ip6InNoRoutes. Sampled every 60 seconds.
node_netstat_Ip6_InOctets
ALPHA
(project)
node_netstat_Ip6_InOctets
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Ip6InOctets. Sampled every 60 seconds.
node_netstat_Ip6_InOctets/gauge
ALPHA
(project)
node_netstat_Ip6_InOctets
GAUGE , DOUBLE , 1
prometheus_target
Statistic Ip6InOctets. Sampled every 30 seconds.
node_netstat_Ip6_InReceives
ALPHA
(project)
node_netstat_Ip6_InReceives
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Ip6InReceives. Sampled every 60 seconds.
node_netstat_Ip6_InTooBigErrors
ALPHA
(project)
node_netstat_Ip6_InTooBigErrors
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Ip6InTooBigErrors. Sampled every 60 seconds.
node_netstat_Ip6_InTruncatedPkts
ALPHA
(project)
node_netstat_Ip6_InTruncatedPkts
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Ip6InTruncatedPkts. Sampled every 60 seconds.
node_netstat_Ip6_InUnknownProtos
ALPHA
(project)
node_netstat_Ip6_InUnknownProtos
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Ip6InUnknownProtos. Sampled every 60 seconds.
node_netstat_Ip6_OutBcastOctets
ALPHA
(project)
node_netstat_Ip6_OutBcastOctets
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Ip6OutBcastOctets. Sampled every 60 seconds.
node_netstat_Ip6_OutDiscards
ALPHA
(project)
node_netstat_Ip6_OutDiscards
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Ip6OutDiscards. Sampled every 60 seconds.
node_netstat_Ip6_OutForwDatagrams
ALPHA
(project)
node_netstat_Ip6_OutForwDatagrams
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Ip6OutForwDatagrams. Sampled every 60 seconds.
node_netstat_Ip6_OutMcastOctets
ALPHA
(project)
node_netstat_Ip6_OutMcastOctets
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Ip6OutMcastOctets. Sampled every 60 seconds.
node_netstat_Ip6_OutMcastPkts
ALPHA
(project)
node_netstat_Ip6_OutMcastPkts
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Ip6OutMcastPkts. Sampled every 60 seconds.
node_netstat_Ip6_OutNoRoutes
ALPHA
(project)
node_netstat_Ip6_OutNoRoutes
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Ip6OutNoRoutes. Sampled every 60 seconds.
node_netstat_Ip6_OutOctets
ALPHA
(project)
node_netstat_Ip6_OutOctets
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Ip6OutOctets. Sampled every 60 seconds.
node_netstat_Ip6_OutOctets/gauge
ALPHA
(project)
node_netstat_Ip6_OutOctets
GAUGE , DOUBLE , 1
prometheus_target
Statistic Ip6OutOctets. Sampled every 30 seconds.
node_netstat_Ip6_OutRequests
ALPHA
(project)
node_netstat_Ip6_OutRequests
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Ip6OutRequests. Sampled every 60 seconds.
node_netstat_Ip6_ReasmFails
ALPHA
(project)
node_netstat_Ip6_ReasmFails
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Ip6ReasmFails. Sampled every 60 seconds.
node_netstat_Ip6_ReasmOKs
ALPHA
(project)
node_netstat_Ip6_ReasmOKs
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Ip6ReasmOKs. Sampled every 60 seconds.
node_netstat_Ip6_ReasmReqds
ALPHA
(project)
node_netstat_Ip6_ReasmReqds
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Ip6ReasmReqds. Sampled every 60 seconds.
node_netstat_Ip6_ReasmTimeout
ALPHA
(project)
node_netstat_Ip6_ReasmTimeout
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Ip6ReasmTimeout. Sampled every 60 seconds.
node_netstat_IpExt_InBcastOctets
ALPHA
(project)
node_netstat_IpExt_InBcastOctets
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IpExtInBcastOctets. Sampled every 60 seconds.
node_netstat_IpExt_InBcastPkts
ALPHA
(project)
node_netstat_IpExt_InBcastPkts
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IpExtInBcastPkts. Sampled every 60 seconds.
node_netstat_IpExt_InCEPkts
ALPHA
(project)
node_netstat_IpExt_InCEPkts
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IpExtInCEPkts. Sampled every 60 seconds.
node_netstat_IpExt_InCsumErrors
ALPHA
(project)
node_netstat_IpExt_InCsumErrors
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IpExtInCsumErrors. Sampled every 60 seconds.
node_netstat_IpExt_InECT0Pkts
ALPHA
(project)
node_netstat_IpExt_InECT0Pkts
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IpExtInECT0Pkts. Sampled every 60 seconds.
node_netstat_IpExt_InECT1Pkts
ALPHA
(project)
node_netstat_IpExt_InECT1Pkts
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IpExtInECT1Pkts. Sampled every 60 seconds.
node_netstat_IpExt_InMcastOctets
ALPHA
(project)
node_netstat_IpExt_InMcastOctets
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IpExtInMcastOctets. Sampled every 60 seconds.
node_netstat_IpExt_InMcastPkts
ALPHA
(project)
node_netstat_IpExt_InMcastPkts
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IpExtInMcastPkts. Sampled every 60 seconds.
node_netstat_IpExt_InNoECTPkts
ALPHA
(project)
node_netstat_IpExt_InNoECTPkts
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IpExtInNoECTPkts. Sampled every 60 seconds.
node_netstat_IpExt_InNoRoutes
ALPHA
(project)
node_netstat_IpExt_InNoRoutes
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IpExtInNoRoutes. Sampled every 60 seconds.
node_netstat_IpExt_InOctets
ALPHA
(project)
node_netstat_IpExt_InOctets
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IpExtInOctets. Sampled every 60 seconds.
node_netstat_IpExt_InOctets/gauge
ALPHA
(project)
node_netstat_IpExt_InOctets
GAUGE , DOUBLE , 1
prometheus_target
Statistic IpExtInOctets. Sampled every 30 seconds.
node_netstat_IpExt_InTruncatedPkts
ALPHA
(project)
node_netstat_IpExt_InTruncatedPkts
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IpExtInTruncatedPkts. Sampled every 60 seconds.
node_netstat_IpExt_OutBcastOctets
ALPHA
(project)
node_netstat_IpExt_OutBcastOctets
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IpExtOutBcastOctets. Sampled every 60 seconds.
node_netstat_IpExt_OutBcastPkts
ALPHA
(project)
node_netstat_IpExt_OutBcastPkts
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IpExtOutBcastPkts. Sampled every 60 seconds.
node_netstat_IpExt_OutMcastOctets
ALPHA
(project)
node_netstat_IpExt_OutMcastOctets
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IpExtOutMcastOctets. Sampled every 60 seconds.
node_netstat_IpExt_OutMcastPkts
ALPHA
(project)
node_netstat_IpExt_OutMcastPkts
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IpExtOutMcastPkts. Sampled every 60 seconds.
node_netstat_IpExt_OutOctets
ALPHA
(project)
node_netstat_IpExt_OutOctets
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IpExtOutOctets. Sampled every 60 seconds.
node_netstat_IpExt_OutOctets/gauge
ALPHA
(project)
node_netstat_IpExt_OutOctets
GAUGE , DOUBLE , 1
prometheus_target
Statistic IpExtOutOctets. Sampled every 30 seconds.
node_netstat_IpExt_ReasmOverlaps
ALPHA
(project)
node_netstat_IpExt_ReasmOverlaps
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IpExtReasmOverlaps. Sampled every 60 seconds.
node_netstat_Ip_DefaultTTL
ALPHA
(project)
node_netstat_Ip_DefaultTTL
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IpDefaultTTL. Sampled every 60 seconds.
node_netstat_Ip_ForwDatagrams
ALPHA
(project)
node_netstat_Ip_ForwDatagrams
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IpForwDatagrams. Sampled every 60 seconds.
node_netstat_Ip_Forwarding
ALPHA
(project)
node_netstat_Ip_Forwarding
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IpForwarding. Sampled every 60 seconds.
node_netstat_Ip_Forwarding/gauge
ALPHA
(project)
node_netstat_Ip_Forwarding
GAUGE , DOUBLE , 1
prometheus_target
Statistic IpForwarding. Sampled every 30 seconds.
node_netstat_Ip_FragCreates
ALPHA
(project)
node_netstat_Ip_FragCreates
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IpFragCreates. Sampled every 60 seconds.
node_netstat_Ip_FragFails
ALPHA
(project)
node_netstat_Ip_FragFails
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IpFragFails. Sampled every 60 seconds.
node_netstat_Ip_FragOKs
ALPHA
(project)
node_netstat_Ip_FragOKs
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IpFragOKs. Sampled every 60 seconds.
node_netstat_Ip_InAddrErrors
ALPHA
(project)
node_netstat_Ip_InAddrErrors
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IpInAddrErrors. Sampled every 60 seconds.
node_netstat_Ip_InDelivers
ALPHA
(project)
node_netstat_Ip_InDelivers
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IpInDelivers. Sampled every 60 seconds.
node_netstat_Ip_InDiscards
ALPHA
(project)
node_netstat_Ip_InDiscards
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IpInDiscards. Sampled every 60 seconds.
node_netstat_Ip_InHdrErrors
ALPHA
(project)
node_netstat_Ip_InHdrErrors
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IpInHdrErrors. Sampled every 60 seconds.
node_netstat_Ip_InReceives
ALPHA
(project)
node_netstat_Ip_InReceives
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IpInReceives. Sampled every 60 seconds.
node_netstat_Ip_InUnknownProtos
ALPHA
(project)
node_netstat_Ip_InUnknownProtos
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IpInUnknownProtos. Sampled every 60 seconds.
node_netstat_Ip_InUnknownProtos/gauge
ALPHA
(project)
node_netstat_Ip_InUnknownProtos
GAUGE , DOUBLE , 1
prometheus_target
Statistic IpInUnknownProtos. Sampled every 30 seconds.
node_netstat_Ip_OutDiscards
ALPHA
(project)
node_netstat_Ip_OutDiscards
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IpOutDiscards. Sampled every 60 seconds.
node_netstat_Ip_OutNoRoutes
ALPHA
(project)
node_netstat_Ip_OutNoRoutes
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IpOutNoRoutes. Sampled every 60 seconds.
node_netstat_Ip_OutRequests
ALPHA
(project)
node_netstat_Ip_OutRequests
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IpOutRequests. Sampled every 60 seconds.
node_netstat_Ip_ReasmFails
ALPHA
(project)
node_netstat_Ip_ReasmFails
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IpReasmFails. Sampled every 60 seconds.
node_netstat_Ip_ReasmOKs
ALPHA
(project)
node_netstat_Ip_ReasmOKs
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IpReasmOKs. Sampled every 60 seconds.
node_netstat_Ip_ReasmReqds
ALPHA
(project)
node_netstat_Ip_ReasmReqds
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IpReasmReqds. Sampled every 60 seconds.
node_netstat_Ip_ReasmTimeout
ALPHA
(project)
node_netstat_Ip_ReasmTimeout
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic IpReasmTimeout. Sampled every 60 seconds.
node_netstat_MPTcpExt_AddAddr
ALPHA
(project)
node_netstat_MPTcpExt_AddAddr
GAUGE , DOUBLE , 1
k8s_node
Statistic MPTcpExtAddAddr. Sampled every 60 seconds.
node_netstat_MPTcpExt_AddAddrDrop
ALPHA
(project)
node_netstat_MPTcpExt_AddAddrDrop
GAUGE , DOUBLE , 1
k8s_node
Statistic MPTcpExtAddAddrDrop. Sampled every 60 seconds.
node_netstat_MPTcpExt_DSSNoMatchTCP
ALPHA
(project)
node_netstat_MPTcpExt_DSSNoMatchTCP
GAUGE , DOUBLE , 1
k8s_node
Statistic MPTcpExtDSSNoMatchTCP. Sampled every 60 seconds.
node_netstat_MPTcpExt_DSSNotMatching
ALPHA
(project)
node_netstat_MPTcpExt_DSSNotMatching
GAUGE , DOUBLE , 1
k8s_node
Statistic MPTcpExtDSSNotMatching. Sampled every 60 seconds.
node_netstat_MPTcpExt_DataCsumErr
ALPHA
(project)
node_netstat_MPTcpExt_DataCsumErr
GAUGE , DOUBLE , 1
k8s_node
Statistic MPTcpExtDataCsumErr. Sampled every 60 seconds.
node_netstat_MPTcpExt_DuplicateData
ALPHA
(project)
node_netstat_MPTcpExt_DuplicateData
GAUGE , DOUBLE , 1
k8s_node
Statistic MPTcpExtDuplicateData. Sampled every 60 seconds.
node_netstat_MPTcpExt_EchoAdd
ALPHA
(project)
node_netstat_MPTcpExt_EchoAdd
GAUGE , DOUBLE , 1
k8s_node
Statistic MPTcpExtEchoAdd. Sampled every 60 seconds.
node_netstat_MPTcpExt_InfiniteMapRx
ALPHA
(project)
node_netstat_MPTcpExt_InfiniteMapRx
GAUGE , DOUBLE , 1
k8s_node
Statistic MPTcpExtInfiniteMapRx. Sampled every 60 seconds.
node_netstat_MPTcpExt_MPCapableACKRX
ALPHA
(project)
node_netstat_MPTcpExt_MPCapableACKRX
GAUGE , DOUBLE , 1
k8s_node
Statistic MPTcpExtMPCapableACKRX. Sampled every 60 seconds.
node_netstat_MPTcpExt_MPCapableFallbackACK
ALPHA
(project)
node_netstat_MPTcpExt_MPCapableFallbackACK
GAUGE , DOUBLE , 1
k8s_node
Statistic MPTcpExtMPCapableFallbackACK. Sampled every 60 seconds.
node_netstat_MPTcpExt_MPCapableFallbackSYNACK
ALPHA
(project)
node_netstat_MPTcpExt_MPCapableFallbackSYNACK
GAUGE , DOUBLE , 1
k8s_node
Statistic MPTcpExtMPCapableFallbackSYNACK. Sampled every 60 seconds.
node_netstat_MPTcpExt_MPCapableSYNACKRX
ALPHA
(project)
node_netstat_MPTcpExt_MPCapableSYNACKRX
GAUGE , DOUBLE , 1
k8s_node
Statistic MPTcpExtMPCapableSYNACKRX. Sampled every 60 seconds.
node_netstat_MPTcpExt_MPCapableSYNRX
ALPHA
(project)
node_netstat_MPTcpExt_MPCapableSYNRX
GAUGE , DOUBLE , 1
k8s_node
Statistic MPTcpExtMPCapableSYNRX. Sampled every 60 seconds.
node_netstat_MPTcpExt_MPCapableSYNTX
ALPHA
(project)
node_netstat_MPTcpExt_MPCapableSYNTX
GAUGE , DOUBLE , 1
k8s_node
Statistic MPTcpExtMPCapableSYNTX. Sampled every 60 seconds.
node_netstat_MPTcpExt_MPFailRx
ALPHA
(project)
node_netstat_MPTcpExt_MPFailRx
GAUGE , DOUBLE , 1
k8s_node
Statistic MPTcpExtMPFailRx. Sampled every 60 seconds.
node_netstat_MPTcpExt_MPFailTx
ALPHA
(project)
node_netstat_MPTcpExt_MPFailTx
GAUGE , DOUBLE , 1
k8s_node
Statistic MPTcpExtMPFailTx. Sampled every 60 seconds.
node_netstat_MPTcpExt_MPFallbackTokenInit
ALPHA
(project)
node_netstat_MPTcpExt_MPFallbackTokenInit
GAUGE , DOUBLE , 1
k8s_node
Statistic MPTcpExtMPFallbackTokenInit. Sampled every 60 seconds.
node_netstat_MPTcpExt_MPJoinAckHMacFailure
ALPHA
(project)
node_netstat_MPTcpExt_MPJoinAckHMacFailure
GAUGE , DOUBLE , 1
k8s_node
Statistic MPTcpExtMPJoinAckHMacFailure. Sampled every 60 seconds.
node_netstat_MPTcpExt_MPJoinAckRx
ALPHA
(project)
node_netstat_MPTcpExt_MPJoinAckRx
GAUGE , DOUBLE , 1
k8s_node
Statistic MPTcpExtMPJoinAckRx. Sampled every 60 seconds.
node_netstat_MPTcpExt_MPJoinNoTokenFound
ALPHA
(project)
node_netstat_MPTcpExt_MPJoinNoTokenFound
GAUGE , DOUBLE , 1
k8s_node
Statistic MPTcpExtMPJoinNoTokenFound. Sampled every 60 seconds.
node_netstat_MPTcpExt_MPJoinPortAckRx
ALPHA
(project)
node_netstat_MPTcpExt_MPJoinPortAckRx
GAUGE , DOUBLE , 1
k8s_node
Statistic MPTcpExtMPJoinPortAckRx. Sampled every 60 seconds.
node_netstat_MPTcpExt_MPJoinPortSynAckRx
ALPHA
(project)
node_netstat_MPTcpExt_MPJoinPortSynAckRx
GAUGE , DOUBLE , 1
k8s_node
Statistic MPTcpExtMPJoinPortSynAckRx. Sampled every 60 seconds.
node_netstat_MPTcpExt_MPJoinPortSynRx
ALPHA
(project)
node_netstat_MPTcpExt_MPJoinPortSynRx
GAUGE , DOUBLE , 1
k8s_node
Statistic MPTcpExtMPJoinPortSynRx. Sampled every 60 seconds.
node_netstat_MPTcpExt_MPJoinSynAckHMacFailure
ALPHA
(project)
node_netstat_MPTcpExt_MPJoinSynAckHMacFailure
GAUGE , DOUBLE , 1
k8s_node
Statistic MPTcpExtMPJoinSynAckHMacFailure. Sampled every 60 seconds.
node_netstat_MPTcpExt_MPJoinSynAckRx
ALPHA
(project)
node_netstat_MPTcpExt_MPJoinSynAckRx
GAUGE , DOUBLE , 1
k8s_node
Statistic MPTcpExtMPJoinSynAckRx. Sampled every 60 seconds.
node_netstat_MPTcpExt_MPJoinSynRx
ALPHA
(project)
node_netstat_MPTcpExt_MPJoinSynRx
GAUGE , DOUBLE , 1
k8s_node
Statistic MPTcpExtMPJoinSynRx. Sampled every 60 seconds.
node_netstat_MPTcpExt_MPPrioRx
ALPHA
(project)
node_netstat_MPTcpExt_MPPrioRx
GAUGE , DOUBLE , 1
k8s_node
Statistic MPTcpExtMPPrioRx. Sampled every 60 seconds.
node_netstat_MPTcpExt_MPPrioTx
ALPHA
(project)
node_netstat_MPTcpExt_MPPrioTx
GAUGE , DOUBLE , 1
k8s_node
Statistic MPTcpExtMPPrioTx. Sampled every 60 seconds.
node_netstat_MPTcpExt_MPTCPRetrans
ALPHA
(project)
node_netstat_MPTcpExt_MPTCPRetrans
GAUGE , DOUBLE , 1
k8s_node
Statistic MPTcpExtMPTCPRetrans. Sampled every 60 seconds.
node_netstat_MPTcpExt_MismatchPortAckRx
ALPHA
(project)
node_netstat_MPTcpExt_MismatchPortAckRx
GAUGE , DOUBLE , 1
k8s_node
Statistic MPTcpExtMismatchPortAckRx. Sampled every 60 seconds.
node_netstat_MPTcpExt_MismatchPortSynRx
ALPHA
(project)
node_netstat_MPTcpExt_MismatchPortSynRx
GAUGE , DOUBLE , 1
k8s_node
Statistic MPTcpExtMismatchPortSynRx. Sampled every 60 seconds.
node_netstat_MPTcpExt_NoDSSInWindow
ALPHA
(project)
node_netstat_MPTcpExt_NoDSSInWindow
GAUGE , DOUBLE , 1
k8s_node
Statistic MPTcpExtNoDSSInWindow. Sampled every 60 seconds.
node_netstat_MPTcpExt_OFOMerge
ALPHA
(project)
node_netstat_MPTcpExt_OFOMerge
GAUGE , DOUBLE , 1
k8s_node
Statistic MPTcpExtOFOMerge. Sampled every 60 seconds.
node_netstat_MPTcpExt_OFOQueue
ALPHA
(project)
node_netstat_MPTcpExt_OFOQueue
GAUGE , DOUBLE , 1
k8s_node
Statistic MPTcpExtOFOQueue. Sampled every 60 seconds.
node_netstat_MPTcpExt_OFOQueueTail
ALPHA
(project)
node_netstat_MPTcpExt_OFOQueueTail
GAUGE , DOUBLE , 1
k8s_node
Statistic MPTcpExtOFOQueueTail. Sampled every 60 seconds.
node_netstat_MPTcpExt_PortAdd
ALPHA
(project)
node_netstat_MPTcpExt_PortAdd
GAUGE , DOUBLE , 1
k8s_node
Statistic MPTcpExtPortAdd. Sampled every 60 seconds.
node_netstat_MPTcpExt_RcvPruned
ALPHA
(project)
node_netstat_MPTcpExt_RcvPruned
GAUGE , DOUBLE , 1
k8s_node
Statistic MPTcpExtRcvPruned. Sampled every 60 seconds.
node_netstat_MPTcpExt_RmAddr
ALPHA
(project)
node_netstat_MPTcpExt_RmAddr
GAUGE , DOUBLE , 1
k8s_node
Statistic MPTcpExtRmAddr. Sampled every 60 seconds.
node_netstat_MPTcpExt_RmAddrDrop
ALPHA
(project)
node_netstat_MPTcpExt_RmAddrDrop
GAUGE , DOUBLE , 1
k8s_node
Statistic MPTcpExtRmAddrDrop. Sampled every 60 seconds.
node_netstat_MPTcpExt_RmSubflow
ALPHA
(project)
node_netstat_MPTcpExt_RmSubflow
GAUGE , DOUBLE , 1
k8s_node
Statistic MPTcpExtRmSubflow. Sampled every 60 seconds.
node_netstat_MPTcpExt_SubflowRecover
ALPHA
(project)
node_netstat_MPTcpExt_SubflowRecover
GAUGE , DOUBLE , 1
k8s_node
Statistic MPTcpExtSubflowRecover. Sampled every 60 seconds.
node_netstat_MPTcpExt_SubflowStale
ALPHA
(project)
node_netstat_MPTcpExt_SubflowStale
GAUGE , DOUBLE , 1
k8s_node
Statistic MPTcpExtSubflowStale. Sampled every 60 seconds.
node_netstat_TcpExt_ArpFilter
ALPHA
(project)
node_netstat_TcpExt_ArpFilter
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtArpFilter. Sampled every 60 seconds.
node_netstat_TcpExt_BusyPollRxPackets
ALPHA
(project)
node_netstat_TcpExt_BusyPollRxPackets
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtBusyPollRxPackets. Sampled every 60 seconds.
node_netstat_TcpExt_DelayedACKLocked
ALPHA
(project)
node_netstat_TcpExt_DelayedACKLocked
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtDelayedACKLocked. Sampled every 60 seconds.
node_netstat_TcpExt_DelayedACKLost
ALPHA
(project)
node_netstat_TcpExt_DelayedACKLost
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtDelayedACKLost. Sampled every 60 seconds.
node_netstat_TcpExt_DelayedACKs
ALPHA
(project)
node_netstat_TcpExt_DelayedACKs
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtDelayedACKs. Sampled every 60 seconds.
node_netstat_TcpExt_EmbryonicRsts
ALPHA
(project)
node_netstat_TcpExt_EmbryonicRsts
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtEmbryonicRsts. Sampled every 60 seconds.
node_netstat_TcpExt_IPReversePathFilter
ALPHA
(project)
node_netstat_TcpExt_IPReversePathFilter
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtIPReversePathFilter. Sampled every 60 seconds.
node_netstat_TcpExt_IPReversePathFilter/gauge
ALPHA
(project)
node_netstat_TcpExt_IPReversePathFilter
GAUGE , DOUBLE , 1
prometheus_target
Statistic TcpExtIPReversePathFilter. Sampled every 30 seconds.
node_netstat_TcpExt_ListenDrops
ALPHA
(project)
node_netstat_TcpExt_ListenDrops
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtListenDrops. Sampled every 60 seconds.
node_netstat_TcpExt_ListenDrops/gauge
ALPHA
(project)
node_netstat_TcpExt_ListenDrops
GAUGE , DOUBLE , 1
prometheus_target
Statistic TcpExtListenDrops. Sampled every 30 seconds.
node_netstat_TcpExt_ListenOverflows
ALPHA
(project)
node_netstat_TcpExt_ListenOverflows
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtListenOverflows. Sampled every 60 seconds.
node_netstat_TcpExt_ListenOverflows/gauge
ALPHA
(project)
node_netstat_TcpExt_ListenOverflows
GAUGE , DOUBLE , 1
prometheus_target
Statistic TcpExtListenOverflows. Sampled every 30 seconds.
node_netstat_TcpExt_LockDroppedIcmps
ALPHA
(project)
node_netstat_TcpExt_LockDroppedIcmps
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtLockDroppedIcmps. Sampled every 60 seconds.
node_netstat_TcpExt_OfoPruned
ALPHA
(project)
node_netstat_TcpExt_OfoPruned
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtOfoPruned. Sampled every 60 seconds.
node_netstat_TcpExt_OutOfWindowIcmps
ALPHA
(project)
node_netstat_TcpExt_OutOfWindowIcmps
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtOutOfWindowIcmps. Sampled every 60 seconds.
node_netstat_TcpExt_PAWSActive
ALPHA
(project)
node_netstat_TcpExt_PAWSActive
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtPAWSActive. Sampled every 60 seconds.
node_netstat_TcpExt_PAWSEstab
ALPHA
(project)
node_netstat_TcpExt_PAWSEstab
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtPAWSEstab. Sampled every 60 seconds.
node_netstat_TcpExt_PFMemallocDrop
ALPHA
(project)
node_netstat_TcpExt_PFMemallocDrop
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtPFMemallocDrop. Sampled every 60 seconds.
node_netstat_TcpExt_PruneCalled
ALPHA
(project)
node_netstat_TcpExt_PruneCalled
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtPruneCalled. Sampled every 60 seconds.
node_netstat_TcpExt_RcvPruned
ALPHA
(project)
node_netstat_TcpExt_RcvPruned
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtRcvPruned. Sampled every 60 seconds.
node_netstat_TcpExt_SyncookiesFailed
ALPHA
(project)
node_netstat_TcpExt_SyncookiesFailed
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtSyncookiesFailed. Sampled every 60 seconds.
node_netstat_TcpExt_SyncookiesFailed/gauge
ALPHA
(project)
node_netstat_TcpExt_SyncookiesFailed
GAUGE , DOUBLE , 1
prometheus_target
Statistic TcpExtSyncookiesFailed. Sampled every 30 seconds.
node_netstat_TcpExt_SyncookiesRecv
ALPHA
(project)
node_netstat_TcpExt_SyncookiesRecv
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtSyncookiesRecv. Sampled every 60 seconds.
node_netstat_TcpExt_SyncookiesRecv/gauge
ALPHA
(project)
node_netstat_TcpExt_SyncookiesRecv
GAUGE , DOUBLE , 1
prometheus_target
Statistic TcpExtSyncookiesRecv. Sampled every 30 seconds.
node_netstat_TcpExt_SyncookiesSent
ALPHA
(project)
node_netstat_TcpExt_SyncookiesSent
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtSyncookiesSent. Sampled every 60 seconds.
node_netstat_TcpExt_SyncookiesSent/gauge
ALPHA
(project)
node_netstat_TcpExt_SyncookiesSent
GAUGE , DOUBLE , 1
prometheus_target
Statistic TcpExtSyncookiesSent. Sampled every 30 seconds.
node_netstat_TcpExt_TCPACKSkippedChallenge
ALPHA
(project)
node_netstat_TcpExt_TCPACKSkippedChallenge
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPACKSkippedChallenge. Sampled every 60 seconds.
node_netstat_TcpExt_TCPACKSkippedFinWait2
ALPHA
(project)
node_netstat_TcpExt_TCPACKSkippedFinWait2
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPACKSkippedFinWait2. Sampled every 60 seconds.
node_netstat_TcpExt_TCPACKSkippedPAWS
ALPHA
(project)
node_netstat_TcpExt_TCPACKSkippedPAWS
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPACKSkippedPAWS. Sampled every 60 seconds.
node_netstat_TcpExt_TCPACKSkippedSeq
ALPHA
(project)
node_netstat_TcpExt_TCPACKSkippedSeq
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPACKSkippedSeq. Sampled every 60 seconds.
node_netstat_TcpExt_TCPACKSkippedSynRecv
ALPHA
(project)
node_netstat_TcpExt_TCPACKSkippedSynRecv
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPACKSkippedSynRecv. Sampled every 60 seconds.
node_netstat_TcpExt_TCPACKSkippedTimeWait
ALPHA
(project)
node_netstat_TcpExt_TCPACKSkippedTimeWait
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPACKSkippedTimeWait. Sampled every 60 seconds.
node_netstat_TcpExt_TCPAbortFailed
ALPHA
(project)
node_netstat_TcpExt_TCPAbortFailed
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPAbortFailed. Sampled every 60 seconds.
node_netstat_TcpExt_TCPAbortOnClose
ALPHA
(project)
node_netstat_TcpExt_TCPAbortOnClose
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPAbortOnClose. Sampled every 60 seconds.
node_netstat_TcpExt_TCPAbortOnData
ALPHA
(project)
node_netstat_TcpExt_TCPAbortOnData
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPAbortOnData. Sampled every 60 seconds.
node_netstat_TcpExt_TCPAbortOnLinger
ALPHA
(project)
node_netstat_TcpExt_TCPAbortOnLinger
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPAbortOnLinger. Sampled every 60 seconds.
node_netstat_TcpExt_TCPAbortOnMemory
ALPHA
(project)
node_netstat_TcpExt_TCPAbortOnMemory
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPAbortOnMemory. Sampled every 60 seconds.
node_netstat_TcpExt_TCPAbortOnTimeout
ALPHA
(project)
node_netstat_TcpExt_TCPAbortOnTimeout
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPAbortOnTimeout. Sampled every 60 seconds.
node_netstat_TcpExt_TCPAckCompressed
ALPHA
(project)
node_netstat_TcpExt_TCPAckCompressed
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPAckCompressed. Sampled every 60 seconds.
node_netstat_TcpExt_TCPAutoCorking
ALPHA
(project)
node_netstat_TcpExt_TCPAutoCorking
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPAutoCorking. Sampled every 60 seconds.
node_netstat_TcpExt_TCPBacklogCoalesce
ALPHA
(project)
node_netstat_TcpExt_TCPBacklogCoalesce
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPBacklogCoalesce. Sampled every 60 seconds.
node_netstat_TcpExt_TCPBacklogDrop
ALPHA
(project)
node_netstat_TcpExt_TCPBacklogDrop
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPBacklogDrop. Sampled every 60 seconds.
node_netstat_TcpExt_TCPChallengeACK
ALPHA
(project)
node_netstat_TcpExt_TCPChallengeACK
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPChallengeACK. Sampled every 60 seconds.
node_netstat_TcpExt_TCPDSACKIgnoredDubious
ALPHA
(project)
node_netstat_TcpExt_TCPDSACKIgnoredDubious
GAUGE , DOUBLE , 1
k8s_node
Statistic TcpExtTCPDSACKIgnoredDubious. Sampled every 60 seconds.
node_netstat_TcpExt_TCPDSACKIgnoredNoUndo
ALPHA
(project)
node_netstat_TcpExt_TCPDSACKIgnoredNoUndo
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPDSACKIgnoredNoUndo. Sampled every 60 seconds.
node_netstat_TcpExt_TCPDSACKIgnoredOld
ALPHA
(project)
node_netstat_TcpExt_TCPDSACKIgnoredOld
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPDSACKIgnoredOld. Sampled every 60 seconds.
node_netstat_TcpExt_TCPDSACKOfoRecv
ALPHA
(project)
node_netstat_TcpExt_TCPDSACKOfoRecv
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPDSACKOfoRecv. Sampled every 60 seconds.
node_netstat_TcpExt_TCPDSACKOfoSent
ALPHA
(project)
node_netstat_TcpExt_TCPDSACKOfoSent
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPDSACKOfoSent. Sampled every 60 seconds.
node_netstat_TcpExt_TCPDSACKOldSent
ALPHA
(project)
node_netstat_TcpExt_TCPDSACKOldSent
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPDSACKOldSent. Sampled every 60 seconds.
node_netstat_TcpExt_TCPDSACKRecv
ALPHA
(project)
node_netstat_TcpExt_TCPDSACKRecv
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPDSACKRecv. Sampled every 60 seconds.
node_netstat_TcpExt_TCPDSACKRecvSegs
ALPHA
(project)
node_netstat_TcpExt_TCPDSACKRecvSegs
GAUGE , DOUBLE , 1
k8s_node
Statistic TcpExtTCPDSACKRecvSegs. Sampled every 60 seconds.
node_netstat_TcpExt_TCPDSACKUndo
ALPHA
(project)
node_netstat_TcpExt_TCPDSACKUndo
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPDSACKUndo. Sampled every 60 seconds.
node_netstat_TcpExt_TCPDeferAcceptDrop
ALPHA
(project)
node_netstat_TcpExt_TCPDeferAcceptDrop
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPDeferAcceptDrop. Sampled every 60 seconds.
node_netstat_TcpExt_TCPDelivered
ALPHA
(project)
node_netstat_TcpExt_TCPDelivered
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPDelivered. Sampled every 60 seconds.
node_netstat_TcpExt_TCPDeliveredCE
ALPHA
(project)
node_netstat_TcpExt_TCPDeliveredCE
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPDeliveredCE. Sampled every 60 seconds.
node_netstat_TcpExt_TCPFastOpenActive
ALPHA
(project)
node_netstat_TcpExt_TCPFastOpenActive
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPFastOpenActive. Sampled every 60 seconds.
node_netstat_TcpExt_TCPFastOpenActiveFail
ALPHA
(project)
node_netstat_TcpExt_TCPFastOpenActiveFail
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPFastOpenActiveFail. Sampled every 60 seconds.
node_netstat_TcpExt_TCPFastOpenBlackhole
ALPHA
(project)
node_netstat_TcpExt_TCPFastOpenBlackhole
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPFastOpenBlackhole. Sampled every 60 seconds.
node_netstat_TcpExt_TCPFastOpenCookieReqd
ALPHA
(project)
node_netstat_TcpExt_TCPFastOpenCookieReqd
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPFastOpenCookieReqd. Sampled every 60 seconds.
node_netstat_TcpExt_TCPFastOpenListenOverflow
ALPHA
(project)
node_netstat_TcpExt_TCPFastOpenListenOverflow
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPFastOpenListenOverflow. Sampled every 60 seconds.
node_netstat_TcpExt_TCPFastOpenPassive
ALPHA
(project)
node_netstat_TcpExt_TCPFastOpenPassive
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPFastOpenPassive. Sampled every 60 seconds.
node_netstat_TcpExt_TCPFastOpenPassiveAltKey
ALPHA
(project)
node_netstat_TcpExt_TCPFastOpenPassiveAltKey
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPFastOpenPassiveAltKey. Sampled every 60 seconds.
node_netstat_TcpExt_TCPFastOpenPassiveFail
ALPHA
(project)
node_netstat_TcpExt_TCPFastOpenPassiveFail
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPFastOpenPassiveFail. Sampled every 60 seconds.
node_netstat_TcpExt_TCPFastRetrans
ALPHA
(project)
node_netstat_TcpExt_TCPFastRetrans
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPFastRetrans. Sampled every 60 seconds.
node_netstat_TcpExt_TCPFromZeroWindowAdv
ALPHA
(project)
node_netstat_TcpExt_TCPFromZeroWindowAdv
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPFromZeroWindowAdv. Sampled every 60 seconds.
node_netstat_TcpExt_TCPFullUndo
ALPHA
(project)
node_netstat_TcpExt_TCPFullUndo
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPFullUndo. Sampled every 60 seconds.
node_netstat_TcpExt_TCPHPAcks
ALPHA
(project)
node_netstat_TcpExt_TCPHPAcks
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPHPAcks. Sampled every 60 seconds.
node_netstat_TcpExt_TCPHPHits
ALPHA
(project)
node_netstat_TcpExt_TCPHPHits
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPHPHits. Sampled every 60 seconds.
node_netstat_TcpExt_TCPHystartDelayCwnd
ALPHA
(project)
node_netstat_TcpExt_TCPHystartDelayCwnd
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPHystartDelayCwnd. Sampled every 60 seconds.
node_netstat_TcpExt_TCPHystartDelayDetect
ALPHA
(project)
node_netstat_TcpExt_TCPHystartDelayDetect
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPHystartDelayDetect. Sampled every 60 seconds.
node_netstat_TcpExt_TCPHystartTrainCwnd
ALPHA
(project)
node_netstat_TcpExt_TCPHystartTrainCwnd
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPHystartTrainCwnd. Sampled every 60 seconds.
node_netstat_TcpExt_TCPHystartTrainDetect
ALPHA
(project)
node_netstat_TcpExt_TCPHystartTrainDetect
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPHystartTrainDetect. Sampled every 60 seconds.
node_netstat_TcpExt_TCPKeepAlive
ALPHA
(project)
node_netstat_TcpExt_TCPKeepAlive
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPKeepAlive. Sampled every 60 seconds.
node_netstat_TcpExt_TCPKeepAlive/gauge
ALPHA
(project)
node_netstat_TcpExt_TCPKeepAlive
GAUGE , DOUBLE , 1
prometheus_target
Statistic TcpExtTCPKeepAlive. Sampled every 30 seconds.
node_netstat_TcpExt_TCPLossFailures
ALPHA
(project)
node_netstat_TcpExt_TCPLossFailures
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPLossFailures. Sampled every 60 seconds.
node_netstat_TcpExt_TCPLossProbeRecovery
ALPHA
(project)
node_netstat_TcpExt_TCPLossProbeRecovery
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPLossProbeRecovery. Sampled every 60 seconds.
node_netstat_TcpExt_TCPLossProbeRecovery/gauge
ALPHA
(project)
node_netstat_TcpExt_TCPLossProbeRecovery
GAUGE , DOUBLE , 1
prometheus_target
Statistic TcpExtTCPLossProbeRecovery. Sampled every 30 seconds.
node_netstat_TcpExt_TCPLossProbes
ALPHA
(project)
node_netstat_TcpExt_TCPLossProbes
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPLossProbes. Sampled every 60 seconds.
node_netstat_TcpExt_TCPLossUndo
ALPHA
(project)
node_netstat_TcpExt_TCPLossUndo
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPLossUndo. Sampled every 60 seconds.
node_netstat_TcpExt_TCPLostRetransmit
ALPHA
(project)
node_netstat_TcpExt_TCPLostRetransmit
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPLostRetransmit. Sampled every 60 seconds.
node_netstat_TcpExt_TCPMD5Failure
ALPHA
(project)
node_netstat_TcpExt_TCPMD5Failure
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPMD5Failure. Sampled every 60 seconds.
node_netstat_TcpExt_TCPMD5NotFound
ALPHA
(project)
node_netstat_TcpExt_TCPMD5NotFound
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPMD5NotFound. Sampled every 60 seconds.
node_netstat_TcpExt_TCPMD5Unexpected
ALPHA
(project)
node_netstat_TcpExt_TCPMD5Unexpected
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPMD5Unexpected. Sampled every 60 seconds.
node_netstat_TcpExt_TCPMTUPFail
ALPHA
(project)
node_netstat_TcpExt_TCPMTUPFail
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPMTUPFail. Sampled every 60 seconds.
node_netstat_TcpExt_TCPMTUPSuccess
ALPHA
(project)
node_netstat_TcpExt_TCPMTUPSuccess
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPMTUPSuccess. Sampled every 60 seconds.
node_netstat_TcpExt_TCPMemoryPressures
ALPHA
(project)
node_netstat_TcpExt_TCPMemoryPressures
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPMemoryPressures. Sampled every 60 seconds.
node_netstat_TcpExt_TCPMemoryPressuresChrono
ALPHA
(project)
node_netstat_TcpExt_TCPMemoryPressuresChrono
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPMemoryPressuresChrono. Sampled every 60 seconds.
node_netstat_TcpExt_TCPMigrateReqFailure
ALPHA
(project)
node_netstat_TcpExt_TCPMigrateReqFailure
GAUGE , DOUBLE , 1
k8s_node
Statistic TcpExtTCPMigrateReqFailure. Sampled every 60 seconds.
node_netstat_TcpExt_TCPMigrateReqSuccess
ALPHA
(project)
node_netstat_TcpExt_TCPMigrateReqSuccess
GAUGE , DOUBLE , 1
k8s_node
Statistic TcpExtTCPMigrateReqSuccess. Sampled every 60 seconds.
node_netstat_TcpExt_TCPMinTTLDrop
ALPHA
(project)
node_netstat_TcpExt_TCPMinTTLDrop
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPMinTTLDrop. Sampled every 60 seconds.
node_netstat_TcpExt_TCPOFODrop
ALPHA
(project)
node_netstat_TcpExt_TCPOFODrop
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPOFODrop. Sampled every 60 seconds.
node_netstat_TcpExt_TCPOFOMerge
ALPHA
(project)
node_netstat_TcpExt_TCPOFOMerge
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPOFOMerge. Sampled every 60 seconds.
node_netstat_TcpExt_TCPOFOQueue
ALPHA
(project)
node_netstat_TcpExt_TCPOFOQueue
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPOFOQueue. Sampled every 60 seconds.
node_netstat_TcpExt_TCPOrigDataSent
ALPHA
(project)
node_netstat_TcpExt_TCPOrigDataSent
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPOrigDataSent. Sampled every 60 seconds.
node_netstat_TcpExt_TCPPartialUndo
ALPHA
(project)
node_netstat_TcpExt_TCPPartialUndo
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPPartialUndo. Sampled every 60 seconds.
node_netstat_TcpExt_TCPPureAcks
ALPHA
(project)
node_netstat_TcpExt_TCPPureAcks
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPPureAcks. Sampled every 60 seconds.
node_netstat_TcpExt_TCPRcvCoalesce
ALPHA
(project)
node_netstat_TcpExt_TCPRcvCoalesce
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPRcvCoalesce. Sampled every 60 seconds.
node_netstat_TcpExt_TCPRcvCollapsed
ALPHA
(project)
node_netstat_TcpExt_TCPRcvCollapsed
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPRcvCollapsed. Sampled every 60 seconds.
node_netstat_TcpExt_TCPRcvQDrop
ALPHA
(project)
node_netstat_TcpExt_TCPRcvQDrop
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPRcvQDrop. Sampled every 60 seconds.
node_netstat_TcpExt_TCPRenoFailures
ALPHA
(project)
node_netstat_TcpExt_TCPRenoFailures
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPRenoFailures. Sampled every 60 seconds.
node_netstat_TcpExt_TCPRenoRecovery
ALPHA
(project)
node_netstat_TcpExt_TCPRenoRecovery
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPRenoRecovery. Sampled every 60 seconds.
node_netstat_TcpExt_TCPRenoRecoveryFail
ALPHA
(project)
node_netstat_TcpExt_TCPRenoRecoveryFail
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPRenoRecoveryFail. Sampled every 60 seconds.
node_netstat_TcpExt_TCPRenoReorder
ALPHA
(project)
node_netstat_TcpExt_TCPRenoReorder
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPRenoReorder. Sampled every 60 seconds.
node_netstat_TcpExt_TCPReqQFullDoCookies
ALPHA
(project)
node_netstat_TcpExt_TCPReqQFullDoCookies
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPReqQFullDoCookies. Sampled every 60 seconds.
node_netstat_TcpExt_TCPReqQFullDrop
ALPHA
(project)
node_netstat_TcpExt_TCPReqQFullDrop
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPReqQFullDrop. Sampled every 60 seconds.
node_netstat_TcpExt_TCPRetransFail
ALPHA
(project)
node_netstat_TcpExt_TCPRetransFail
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPRetransFail. Sampled every 60 seconds.
node_netstat_TcpExt_TCPSACKDiscard
ALPHA
(project)
node_netstat_TcpExt_TCPSACKDiscard
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPSACKDiscard. Sampled every 60 seconds.
node_netstat_TcpExt_TCPSACKReneging
ALPHA
(project)
node_netstat_TcpExt_TCPSACKReneging
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPSACKReneging. Sampled every 60 seconds.
node_netstat_TcpExt_TCPSACKReorder
ALPHA
(project)
node_netstat_TcpExt_TCPSACKReorder
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPSACKReorder. Sampled every 60 seconds.
node_netstat_TcpExt_TCPSYNChallenge
ALPHA
(project)
node_netstat_TcpExt_TCPSYNChallenge
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPSYNChallenge. Sampled every 60 seconds.
node_netstat_TcpExt_TCPSackFailures
ALPHA
(project)
node_netstat_TcpExt_TCPSackFailures
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPSackFailures. Sampled every 60 seconds.
node_netstat_TcpExt_TCPSackMerged
ALPHA
(project)
node_netstat_TcpExt_TCPSackMerged
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPSackMerged. Sampled every 60 seconds.
node_netstat_TcpExt_TCPSackRecovery
ALPHA
(project)
node_netstat_TcpExt_TCPSackRecovery
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPSackRecovery. Sampled every 60 seconds.
node_netstat_TcpExt_TCPSackRecoveryFail
ALPHA
(project)
node_netstat_TcpExt_TCPSackRecoveryFail
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPSackRecoveryFail. Sampled every 60 seconds.
node_netstat_TcpExt_TCPSackShiftFallback
ALPHA
(project)
node_netstat_TcpExt_TCPSackShiftFallback
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPSackShiftFallback. Sampled every 60 seconds.
node_netstat_TcpExt_TCPSackShifted
ALPHA
(project)
node_netstat_TcpExt_TCPSackShifted
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPSackShifted. Sampled every 60 seconds.
node_netstat_TcpExt_TCPSlowStartRetrans
ALPHA
(project)
node_netstat_TcpExt_TCPSlowStartRetrans
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPSlowStartRetrans. Sampled every 60 seconds.
node_netstat_TcpExt_TCPSpuriousRTOs
ALPHA
(project)
node_netstat_TcpExt_TCPSpuriousRTOs
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPSpuriousRTOs. Sampled every 60 seconds.
node_netstat_TcpExt_TCPSpuriousRtxHostQueues
ALPHA
(project)
node_netstat_TcpExt_TCPSpuriousRtxHostQueues
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPSpuriousRtxHostQueues. Sampled every 60 seconds.
node_netstat_TcpExt_TCPSynRetrans
ALPHA
(project)
node_netstat_TcpExt_TCPSynRetrans
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPSynRetrans. Sampled every 60 seconds.
node_netstat_TcpExt_TCPTSReorder
ALPHA
(project)
node_netstat_TcpExt_TCPTSReorder
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPTSReorder. Sampled every 60 seconds.
node_netstat_TcpExt_TCPTimeWaitOverflow
ALPHA
(project)
node_netstat_TcpExt_TCPTimeWaitOverflow
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPTimeWaitOverflow. Sampled every 60 seconds.
node_netstat_TcpExt_TCPTimeouts
ALPHA
(project)
node_netstat_TcpExt_TCPTimeouts
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPTimeouts. Sampled every 60 seconds.
node_netstat_TcpExt_TCPToZeroWindowAdv
ALPHA
(project)
node_netstat_TcpExt_TCPToZeroWindowAdv
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPToZeroWindowAdv. Sampled every 60 seconds.
node_netstat_TcpExt_TCPWantZeroWindowAdv
ALPHA
(project)
node_netstat_TcpExt_TCPWantZeroWindowAdv
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPWantZeroWindowAdv. Sampled every 60 seconds.
node_netstat_TcpExt_TCPWinProbe
ALPHA
(project)
node_netstat_TcpExt_TCPWinProbe
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPWinProbe. Sampled every 60 seconds.
node_netstat_TcpExt_TCPWqueueTooBig
ALPHA
(project)
node_netstat_TcpExt_TCPWqueueTooBig
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPWqueueTooBig. Sampled every 60 seconds.
node_netstat_TcpExt_TCPZeroWindowDrop
ALPHA
(project)
node_netstat_TcpExt_TCPZeroWindowDrop
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTCPZeroWindowDrop. Sampled every 60 seconds.
node_netstat_TcpExt_TW
ALPHA
(project)
node_netstat_TcpExt_TW
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTW. Sampled every 60 seconds.
node_netstat_TcpExt_TWKilled
ALPHA
(project)
node_netstat_TcpExt_TWKilled
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTWKilled. Sampled every 60 seconds.
node_netstat_TcpExt_TWRecycled
ALPHA
(project)
node_netstat_TcpExt_TWRecycled
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpExtTWRecycled. Sampled every 60 seconds.
node_netstat_TcpExt_TcpDuplicateDataRehash
ALPHA
(project)
node_netstat_TcpExt_TcpDuplicateDataRehash
GAUGE , DOUBLE , 1
k8s_node
Statistic TcpExtTcpDuplicateDataRehash. Sampled every 60 seconds.
node_netstat_TcpExt_TcpTimeoutRehash
ALPHA
(project)
node_netstat_TcpExt_TcpTimeoutRehash
GAUGE , DOUBLE , 1
k8s_node
Statistic TcpExtTcpTimeoutRehash. Sampled every 60 seconds.
node_netstat_Tcp_ActiveOpens
ALPHA
(project)
node_netstat_Tcp_ActiveOpens
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpActiveOpens. Sampled every 60 seconds.
node_netstat_Tcp_ActiveOpens/gauge
ALPHA
(project)
node_netstat_Tcp_ActiveOpens
GAUGE , DOUBLE , 1
prometheus_target
Statistic TcpActiveOpens. Sampled every 30 seconds.
node_netstat_Tcp_AttemptFails
ALPHA
(project)
node_netstat_Tcp_AttemptFails
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpAttemptFails. Sampled every 60 seconds.
node_netstat_Tcp_CurrEstab
ALPHA
(project)
node_netstat_Tcp_CurrEstab
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpCurrEstab. Sampled every 60 seconds.
node_netstat_Tcp_CurrEstab/gauge
ALPHA
(project)
node_netstat_Tcp_CurrEstab
GAUGE , DOUBLE , 1
prometheus_target
Statistic TcpCurrEstab. Sampled every 30 seconds.
node_netstat_Tcp_EstabResets
ALPHA
(project)
node_netstat_Tcp_EstabResets
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpEstabResets. Sampled every 60 seconds.
node_netstat_Tcp_InCsumErrors
ALPHA
(project)
node_netstat_Tcp_InCsumErrors
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpInCsumErrors. Sampled every 60 seconds.
node_netstat_Tcp_InErrs
ALPHA
(project)
node_netstat_Tcp_InErrs
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpInErrs. Sampled every 60 seconds.
node_netstat_Tcp_InErrs/gauge
ALPHA
(project)
node_netstat_Tcp_InErrs
GAUGE , DOUBLE , 1
prometheus_target
Statistic TcpInErrs. Sampled every 30 seconds.
node_netstat_Tcp_InSegs
ALPHA
(project)
node_netstat_Tcp_InSegs
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpInSegs. Sampled every 60 seconds.
node_netstat_Tcp_MaxConn
ALPHA
(project)
node_netstat_Tcp_MaxConn
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpMaxConn. Sampled every 60 seconds.
node_netstat_Tcp_OutRsts
ALPHA
(project)
node_netstat_Tcp_OutRsts
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpOutRsts. Sampled every 60 seconds.
node_netstat_Tcp_OutSegs
ALPHA
(project)
node_netstat_Tcp_OutSegs
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpOutSegs. Sampled every 60 seconds.
node_netstat_Tcp_PassiveOpens
ALPHA
(project)
node_netstat_Tcp_PassiveOpens
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpPassiveOpens. Sampled every 60 seconds.
node_netstat_Tcp_PassiveOpens/gauge
ALPHA
(project)
node_netstat_Tcp_PassiveOpens
GAUGE , DOUBLE , 1
prometheus_target
Statistic TcpPassiveOpens. Sampled every 30 seconds.
node_netstat_Tcp_RetransSegs
ALPHA
(project)
node_netstat_Tcp_RetransSegs
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpRetransSegs. Sampled every 60 seconds.
node_netstat_Tcp_RetransSegs/gauge
ALPHA
(project)
node_netstat_Tcp_RetransSegs
GAUGE , DOUBLE , 1
prometheus_target
Statistic TcpRetransSegs. Sampled every 30 seconds.
node_netstat_Tcp_RtoAlgorithm
ALPHA
(project)
node_netstat_Tcp_RtoAlgorithm
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpRtoAlgorithm. Sampled every 60 seconds.
node_netstat_Tcp_RtoMax
ALPHA
(project)
node_netstat_Tcp_RtoMax
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpRtoMax. Sampled every 60 seconds.
node_netstat_Tcp_RtoMin
ALPHA
(project)
node_netstat_Tcp_RtoMin
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic TcpRtoMin. Sampled every 60 seconds.
node_netstat_Udp6_IgnoredMulti
ALPHA
(project)
node_netstat_Udp6_IgnoredMulti
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Udp6IgnoredMulti. Sampled every 60 seconds.
node_netstat_Udp6_InCsumErrors
ALPHA
(project)
node_netstat_Udp6_InCsumErrors
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Udp6InCsumErrors. Sampled every 60 seconds.
node_netstat_Udp6_InDatagrams
ALPHA
(project)
node_netstat_Udp6_InDatagrams
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Udp6InDatagrams. Sampled every 60 seconds.
node_netstat_Udp6_InDatagrams/gauge
ALPHA
(project)
node_netstat_Udp6_InDatagrams
GAUGE , DOUBLE , 1
prometheus_target
Statistic Udp6InDatagrams. Sampled every 30 seconds.
node_netstat_Udp6_InErrors
ALPHA
(project)
node_netstat_Udp6_InErrors
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Udp6InErrors. Sampled every 60 seconds.
node_netstat_Udp6_InErrors/gauge
ALPHA
(project)
node_netstat_Udp6_InErrors
GAUGE , DOUBLE , 1
prometheus_target
Statistic Udp6InErrors. Sampled every 30 seconds.
node_netstat_Udp6_MemErrors
ALPHA
(project)
node_netstat_Udp6_MemErrors
GAUGE , DOUBLE , 1
k8s_node
Statistic Udp6MemErrors. Sampled every 60 seconds.
node_netstat_Udp6_NoPorts
ALPHA
(project)
node_netstat_Udp6_NoPorts
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Udp6NoPorts. Sampled every 60 seconds.
node_netstat_Udp6_NoPorts/gauge
ALPHA
(project)
node_netstat_Udp6_NoPorts
GAUGE , DOUBLE , 1
prometheus_target
Statistic Udp6NoPorts. Sampled every 30 seconds.
node_netstat_Udp6_OutDatagrams
ALPHA
(project)
node_netstat_Udp6_OutDatagrams
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Udp6OutDatagrams. Sampled every 60 seconds.
node_netstat_Udp6_OutDatagrams/gauge
ALPHA
(project)
node_netstat_Udp6_OutDatagrams
GAUGE , DOUBLE , 1
prometheus_target
Statistic Udp6OutDatagrams. Sampled every 30 seconds.
node_netstat_Udp6_RcvbufErrors
ALPHA
(project)
node_netstat_Udp6_RcvbufErrors
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Udp6RcvbufErrors. Sampled every 60 seconds.
node_netstat_Udp6_SndbufErrors
ALPHA
(project)
node_netstat_Udp6_SndbufErrors
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic Udp6SndbufErrors. Sampled every 60 seconds.
node_netstat_UdpLite6_InCsumErrors
ALPHA
(project)
node_netstat_UdpLite6_InCsumErrors
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic UdpLite6InCsumErrors. Sampled every 60 seconds.
node_netstat_UdpLite6_InDatagrams
ALPHA
(project)
node_netstat_UdpLite6_InDatagrams
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic UdpLite6InDatagrams. Sampled every 60 seconds.
node_netstat_UdpLite6_InErrors
ALPHA
(project)
node_netstat_UdpLite6_InErrors
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic UdpLite6InErrors. Sampled every 60 seconds.
node_netstat_UdpLite6_InErrors/gauge
ALPHA
(project)
node_netstat_UdpLite6_InErrors
GAUGE , DOUBLE , 1
prometheus_target
Statistic UdpLite6InErrors. Sampled every 30 seconds.
node_netstat_UdpLite6_MemErrors
ALPHA
(project)
node_netstat_UdpLite6_MemErrors
GAUGE , DOUBLE , 1
k8s_node
Statistic UdpLite6MemErrors. Sampled every 60 seconds.
node_netstat_UdpLite6_NoPorts
ALPHA
(project)
node_netstat_UdpLite6_NoPorts
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic UdpLite6NoPorts. Sampled every 60 seconds.
node_netstat_UdpLite6_OutDatagrams
ALPHA
(project)
node_netstat_UdpLite6_OutDatagrams
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic UdpLite6OutDatagrams. Sampled every 60 seconds.
node_netstat_UdpLite6_RcvbufErrors
ALPHA
(project)
node_netstat_UdpLite6_RcvbufErrors
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic UdpLite6RcvbufErrors. Sampled every 60 seconds.
node_netstat_UdpLite6_SndbufErrors
ALPHA
(project)
node_netstat_UdpLite6_SndbufErrors
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic UdpLite6SndbufErrors. Sampled every 60 seconds.
node_netstat_UdpLite_IgnoredMulti
ALPHA
(project)
node_netstat_UdpLite_IgnoredMulti
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic UdpLiteIgnoredMulti. Sampled every 60 seconds.
node_netstat_UdpLite_InCsumErrors
ALPHA
(project)
node_netstat_UdpLite_InCsumErrors
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic UdpLiteInCsumErrors. Sampled every 60 seconds.
node_netstat_UdpLite_InDatagrams
ALPHA
(project)
node_netstat_UdpLite_InDatagrams
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic UdpLiteInDatagrams. Sampled every 60 seconds.
node_netstat_UdpLite_InErrors
ALPHA
(project)
node_netstat_UdpLite_InErrors
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic UdpLiteInErrors. Sampled every 60 seconds.
node_netstat_UdpLite_InErrors/gauge
ALPHA
(project)
node_netstat_UdpLite_InErrors
GAUGE , DOUBLE , 1
prometheus_target
Statistic UdpLiteInErrors. Sampled every 30 seconds.
node_netstat_UdpLite_MemErrors
ALPHA
(project)
node_netstat_UdpLite_MemErrors
GAUGE , DOUBLE , 1
k8s_node
Statistic UdpLiteMemErrors. Sampled every 60 seconds.
node_netstat_UdpLite_NoPorts
ALPHA
(project)
node_netstat_UdpLite_NoPorts
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic UdpLiteNoPorts. Sampled every 60 seconds.
node_netstat_UdpLite_OutDatagrams
ALPHA
(project)
node_netstat_UdpLite_OutDatagrams
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic UdpLiteOutDatagrams. Sampled every 60 seconds.
node_netstat_UdpLite_RcvbufErrors
ALPHA
(project)
node_netstat_UdpLite_RcvbufErrors
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic UdpLiteRcvbufErrors. Sampled every 60 seconds.
node_netstat_UdpLite_SndbufErrors
ALPHA
(project)
node_netstat_UdpLite_SndbufErrors
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic UdpLiteSndbufErrors. Sampled every 60 seconds.
node_netstat_Udp_IgnoredMulti
ALPHA
(project)
node_netstat_Udp_IgnoredMulti
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic UdpIgnoredMulti. Sampled every 60 seconds.
node_netstat_Udp_InCsumErrors
ALPHA
(project)
node_netstat_Udp_InCsumErrors
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic UdpInCsumErrors. Sampled every 60 seconds.
node_netstat_Udp_InDatagrams
ALPHA
(project)
node_netstat_Udp_InDatagrams
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic UdpInDatagrams. Sampled every 60 seconds.
node_netstat_Udp_InDatagrams/gauge
ALPHA
(project)
node_netstat_Udp_InDatagrams
GAUGE , DOUBLE , 1
prometheus_target
Statistic UdpInDatagrams. Sampled every 30 seconds.
node_netstat_Udp_InErrors
ALPHA
(project)
node_netstat_Udp_InErrors
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic UdpInErrors. Sampled every 60 seconds.
node_netstat_Udp_InErrors/gauge
ALPHA
(project)
node_netstat_Udp_InErrors
GAUGE , DOUBLE , 1
prometheus_target
Statistic UdpInErrors. Sampled every 30 seconds.
node_netstat_Udp_MemErrors
ALPHA
(project)
node_netstat_Udp_MemErrors
GAUGE , DOUBLE , 1
k8s_node
Statistic UdpMemErrors. Sampled every 60 seconds.
node_netstat_Udp_NoPorts
ALPHA
(project)
node_netstat_Udp_NoPorts
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic UdpNoPorts. Sampled every 60 seconds.
node_netstat_Udp_NoPorts/gauge
ALPHA
(project)
node_netstat_Udp_NoPorts
GAUGE , DOUBLE , 1
prometheus_target
Statistic UdpNoPorts. Sampled every 30 seconds.
node_netstat_Udp_OutDatagrams
ALPHA
(project)
node_netstat_Udp_OutDatagrams
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic UdpOutDatagrams. Sampled every 60 seconds.
node_netstat_Udp_OutDatagrams/gauge
ALPHA
(project)
node_netstat_Udp_OutDatagrams
GAUGE , DOUBLE , 1
prometheus_target
Statistic UdpOutDatagrams. Sampled every 30 seconds.
node_netstat_Udp_RcvbufErrors
ALPHA
(project)
node_netstat_Udp_RcvbufErrors
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic UdpRcvbufErrors. Sampled every 60 seconds.
node_netstat_Udp_SndbufErrors
ALPHA
(project)
node_netstat_Udp_SndbufErrors
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Statistic UdpSndbufErrors. Sampled every 60 seconds.
node_network_address_assign_type
ALPHA
(project)
node_network_address_assign_type
GAUGE , DOUBLE , 1
k8s_container
k8s_node
address_assign_type value of /sys/class/net/<iface>. Sampled every 60 seconds.
device :
device.
node_network_address_assign_type/gauge
ALPHA
(project)
node_network_address_assign_type
GAUGE , DOUBLE , 1
prometheus_target
address_assign_type value of /sys/class/net/<iface>. Sampled every 30 seconds.
device :
device.
node_network_carrier
ALPHA
(project)
node_network_carrier
GAUGE , DOUBLE , 1
k8s_container
k8s_node
carrier value of /sys/class/net/<iface>. Sampled every 60 seconds.
device :
device.
node_network_carrier/gauge
ALPHA
(project)
node_network_carrier
GAUGE , DOUBLE , 1
prometheus_target
carrier value of /sys/class/net/<iface>. Sampled every 30 seconds.
device :
device.
node_network_carrier_changes_total
ALPHA
(project)
node_network_carrier_changes_total
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_node
carrier_changes_total value of /sys/class/net/<iface>. Sampled every 60 seconds.
device :
device.
node_network_carrier_changes_total/counter
ALPHA
(project)
node_network_carrier_changes_total
CUMULATIVE , DOUBLE , 1
prometheus_target
carrier_changes_total value of /sys/class/net/<iface>. Sampled every 30 seconds.
device :
device.
node_network_carrier_down_changes_total
ALPHA
(project)
node_network_carrier_down_changes_total
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_node
carrier_down_changes_total value of /sys/class/net/<iface>. Sampled every 60 seconds.
device :
device.
node_network_carrier_down_changes_total/counter
ALPHA
(project)
node_network_carrier_down_changes_total
CUMULATIVE , DOUBLE , 1
prometheus_target
carrier_down_changes_total value of /sys/class/net/<iface>. Sampled every 30 seconds.
device :
device.
node_network_carrier_up_changes_total
ALPHA
(project)
node_network_carrier_up_changes_total
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_node
carrier_up_changes_total value of /sys/class/net/<iface>. Sampled every 60 seconds.
device :
device.
node_network_carrier_up_changes_total/counter
ALPHA
(project)
node_network_carrier_up_changes_total
CUMULATIVE , DOUBLE , 1
prometheus_target
carrier_up_changes_total value of /sys/class/net/<iface>. Sampled every 30 seconds.
device :
device.
node_network_device_id
ALPHA
(project)
node_network_device_id
GAUGE , DOUBLE , 1
k8s_container
k8s_node
device_id value of /sys/class/net/<iface>. Sampled every 60 seconds.
device :
device.
node_network_device_id/gauge
ALPHA
(project)
node_network_device_id
GAUGE , DOUBLE , 1
prometheus_target
device_id value of /sys/class/net/<iface>. Sampled every 30 seconds.
device :
device.
node_network_dormant
ALPHA
(project)
node_network_dormant
GAUGE , DOUBLE , 1
k8s_container
k8s_node
dormant value of /sys/class/net/<iface>. Sampled every 60 seconds.
device :
device.
node_network_dormant/gauge
ALPHA
(project)
node_network_dormant
GAUGE , DOUBLE , 1
prometheus_target
dormant value of /sys/class/net/<iface>. Sampled every 30 seconds.
device :
device.
node_network_flags
ALPHA
(project)
node_network_flags
GAUGE , DOUBLE , 1
k8s_container
k8s_node
flags value of /sys/class/net/<iface>. Sampled every 60 seconds.
device :
device.
node_network_flags/gauge
ALPHA
(project)
node_network_flags
GAUGE , DOUBLE , 1
prometheus_target
flags value of /sys/class/net/<iface>. Sampled every 30 seconds.
device :
device.
node_network_iface_id
ALPHA
(project)
node_network_iface_id
GAUGE , DOUBLE , 1
k8s_container
k8s_node
iface_id value of /sys/class/net/<iface>. Sampled every 60 seconds.
device :
device.
node_network_iface_id/gauge
ALPHA
(project)
node_network_iface_id
GAUGE , DOUBLE , 1
prometheus_target
iface_id value of /sys/class/net/<iface>. Sampled every 30 seconds.
device :
device.
node_network_iface_link
ALPHA
(project)
node_network_iface_link
GAUGE , DOUBLE , 1
k8s_container
k8s_node
iface_link value of /sys/class/net/<iface>. Sampled every 60 seconds.
device :
device.
node_network_iface_link/gauge
ALPHA
(project)
node_network_iface_link
GAUGE , DOUBLE , 1
prometheus_target
iface_link value of /sys/class/net/<iface>. Sampled every 30 seconds.
device :
device.
node_network_iface_link_mode
ALPHA
(project)
node_network_iface_link_mode
GAUGE , DOUBLE , 1
k8s_container
k8s_node
iface_link_mode value of /sys/class/net/<iface>. Sampled every 60 seconds.
device :
device.
node_network_iface_link_mode/gauge
ALPHA
(project)
node_network_iface_link_mode
GAUGE , DOUBLE , 1
prometheus_target
iface_link_mode value of /sys/class/net/<iface>. Sampled every 30 seconds.
device :
device.
node_network_info
ALPHA
(project)
node_network_info
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Non-numeric data from /sys/class/net/<iface>, value is always 1. Sampled every 60 seconds.
address :
address.
broadcast :
broadcast.
device :
device.
duplex :
duplex.
operstate :
operstate.
node_network_info/gauge
ALPHA
(project)
node_network_info
GAUGE , DOUBLE , 1
prometheus_target
Non-numeric data from /sys/class/net/<iface>, value is always 1. Sampled every 30 seconds.
address :
address.
broadcast :
broadcast.
device :
device.
duplex :
duplex.
operstate :
operstate.
node_network_mtu_bytes
ALPHA
(project)
node_network_mtu_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
mtu_bytes value of /sys/class/net/<iface>. Sampled every 60 seconds.
device :
device.
node_network_mtu_bytes/gauge
ALPHA
(project)
node_network_mtu_bytes
GAUGE , DOUBLE , By
prometheus_target
mtu_bytes value of /sys/class/net/<iface>. Sampled every 30 seconds.
device :
device.
node_network_name_assign_type
ALPHA
(project)
node_network_name_assign_type
GAUGE , DOUBLE , 1
k8s_container
k8s_node
name_assign_type value of /sys/class/net/<iface>. Sampled every 60 seconds.
device :
device.
node_network_name_assign_type/gauge
ALPHA
(project)
node_network_name_assign_type
GAUGE , DOUBLE , 1
prometheus_target
name_assign_type value of /sys/class/net/<iface>. Sampled every 30 seconds.
device :
device.
node_network_net_dev_group
ALPHA
(project)
node_network_net_dev_group
GAUGE , DOUBLE , 1
k8s_container
k8s_node
net_dev_group value of /sys/class/net/<iface>. Sampled every 60 seconds.
device :
device.
node_network_net_dev_group/gauge
ALPHA
(project)
node_network_net_dev_group
GAUGE , DOUBLE , 1
prometheus_target
net_dev_group value of /sys/class/net/<iface>. Sampled every 30 seconds.
device :
device.
node_network_protocol_type
ALPHA
(project)
node_network_protocol_type
GAUGE , DOUBLE , 1
k8s_container
k8s_node
protocol_type value of /sys/class/net/<iface>. Sampled every 60 seconds.
device :
device.
node_network_protocol_type/gauge
ALPHA
(project)
node_network_protocol_type
GAUGE , DOUBLE , 1
prometheus_target
protocol_type value of /sys/class/net/<iface>. Sampled every 30 seconds.
device :
device.
node_network_receive_bytes_total
ALPHA
(project)
node_network_receive_bytes_total
CUMULATIVE , DOUBLE , By
k8s_container
k8s_node
Network device statistic receive_bytes. Sampled every 60 seconds.
device :
device.
node_network_receive_bytes_total/counter
ALPHA
(project)
node_network_receive_bytes_total
CUMULATIVE , DOUBLE , By
prometheus_target
Network device statistic receive_bytes. Sampled every 30 seconds.
device :
device.
node_network_receive_compressed_total
ALPHA
(project)
node_network_receive_compressed_total
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_node
Network device statistic receive_compressed. Sampled every 60 seconds.
device :
device.
node_network_receive_compressed_total/counter
ALPHA
(project)
node_network_receive_compressed_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Network device statistic receive_compressed. Sampled every 30 seconds.
device :
device.
node_network_receive_drop_total
ALPHA
(project)
node_network_receive_drop_total
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_node
Network device statistic receive_drop. Sampled every 60 seconds.
device :
device.
node_network_receive_drop_total/counter
ALPHA
(project)
node_network_receive_drop_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Network device statistic receive_drop. Sampled every 30 seconds.
device :
device.
node_network_receive_errs_total
ALPHA
(project)
node_network_receive_errs_total
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_node
Network device statistic receive_errs. Sampled every 60 seconds.
device :
device.
node_network_receive_errs_total/counter
ALPHA
(project)
node_network_receive_errs_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Network device statistic receive_errs. Sampled every 30 seconds.
device :
device.
node_network_receive_fifo_total
ALPHA
(project)
node_network_receive_fifo_total
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_node
Network device statistic receive_fifo. Sampled every 60 seconds.
device :
device.
node_network_receive_fifo_total/counter
ALPHA
(project)
node_network_receive_fifo_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Network device statistic receive_fifo. Sampled every 30 seconds.
device :
device.
node_network_receive_frame_total
ALPHA
(project)
node_network_receive_frame_total
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_node
Network device statistic receive_frame. Sampled every 60 seconds.
device :
device.
node_network_receive_frame_total/counter
ALPHA
(project)
node_network_receive_frame_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Network device statistic receive_frame. Sampled every 30 seconds.
device :
device.
node_network_receive_multicast_total
ALPHA
(project)
node_network_receive_multicast_total
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_node
Network device statistic receive_multicast. Sampled every 60 seconds.
device :
device.
node_network_receive_multicast_total/counter
ALPHA
(project)
node_network_receive_multicast_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Network device statistic receive_multicast. Sampled every 30 seconds.
device :
device.
node_network_receive_packets_total
ALPHA
(project)
node_network_receive_packets_total
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_node
Network device statistic receive_packets. Sampled every 60 seconds.
device :
device.
node_network_receive_packets_total/counter
ALPHA
(project)
node_network_receive_packets_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Network device statistic receive_packets. Sampled every 30 seconds.
device :
device.
node_network_speed_bytes
ALPHA
(project)
node_network_speed_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
speed_bytes value of /sys/class/net/<iface>. Sampled every 60 seconds.
device :
device.
node_network_speed_bytes/gauge
ALPHA
(project)
node_network_speed_bytes
GAUGE , DOUBLE , By
prometheus_target
speed_bytes value of /sys/class/net/<iface>. Sampled every 30 seconds.
device :
device.
node_network_transmit_bytes_total
ALPHA
(project)
node_network_transmit_bytes_total
CUMULATIVE , DOUBLE , By
k8s_container
k8s_node
Network device statistic transmit_bytes. Sampled every 60 seconds.
device :
device.
node_network_transmit_bytes_total/counter
ALPHA
(project)
node_network_transmit_bytes_total
CUMULATIVE , DOUBLE , By
prometheus_target
Network device statistic transmit_bytes. Sampled every 30 seconds.
device :
device.
node_network_transmit_carrier_total
ALPHA
(project)
node_network_transmit_carrier_total
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_node
Network device statistic transmit_carrier. Sampled every 60 seconds.
device :
device.
node_network_transmit_carrier_total/counter
ALPHA
(project)
node_network_transmit_carrier_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Network device statistic transmit_carrier. Sampled every 30 seconds.
device :
device.
node_network_transmit_colls_total
ALPHA
(project)
node_network_transmit_colls_total
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_node
Network device statistic transmit_colls. Sampled every 60 seconds.
device :
device.
node_network_transmit_colls_total/counter
ALPHA
(project)
node_network_transmit_colls_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Network device statistic transmit_colls. Sampled every 30 seconds.
device :
device.
node_network_transmit_compressed_total
ALPHA
(project)
node_network_transmit_compressed_total
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_node
Network device statistic transmit_compressed. Sampled every 60 seconds.
device :
device.
node_network_transmit_compressed_total/counter
ALPHA
(project)
node_network_transmit_compressed_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Network device statistic transmit_compressed. Sampled every 30 seconds.
device :
device.
node_network_transmit_drop_total
ALPHA
(project)
node_network_transmit_drop_total
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_node
Network device statistic transmit_drop. Sampled every 60 seconds.
device :
device.
node_network_transmit_drop_total/counter
ALPHA
(project)
node_network_transmit_drop_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Network device statistic transmit_drop. Sampled every 30 seconds.
device :
device.
node_network_transmit_errs_total
ALPHA
(project)
node_network_transmit_errs_total
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_node
Network device statistic transmit_errs. Sampled every 60 seconds.
device :
device.
node_network_transmit_errs_total/counter
ALPHA
(project)
node_network_transmit_errs_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Network device statistic transmit_errs. Sampled every 30 seconds.
device :
device.
node_network_transmit_fifo_total
ALPHA
(project)
node_network_transmit_fifo_total
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_node
Network device statistic transmit_fifo. Sampled every 60 seconds.
device :
device.
node_network_transmit_fifo_total/counter
ALPHA
(project)
node_network_transmit_fifo_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Network device statistic transmit_fifo. Sampled every 30 seconds.
device :
device.
node_network_transmit_packets_total
ALPHA
(project)
node_network_transmit_packets_total
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_node
Network device statistic transmit_packets. Sampled every 60 seconds.
device :
device.
node_network_transmit_packets_total/counter
ALPHA
(project)
node_network_transmit_packets_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Network device statistic transmit_packets. Sampled every 30 seconds.
device :
device.
node_network_transmit_queue_length
ALPHA
(project)
node_network_transmit_queue_length
GAUGE , DOUBLE , 1
k8s_container
k8s_node
transmit_queue_length value of /sys/class/net/<iface>. Sampled every 60 seconds.
device :
device.
node_network_transmit_queue_length/gauge
ALPHA
(project)
node_network_transmit_queue_length
GAUGE , DOUBLE , 1
prometheus_target
transmit_queue_length value of /sys/class/net/<iface>. Sampled every 30 seconds.
device :
device.
node_network_up
ALPHA
(project)
node_network_up
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Value is 1 if operstate is 'up', 0 otherwise. Sampled every 60 seconds.
device :
device.
node_network_up/gauge
ALPHA
(project)
node_network_up
GAUGE , DOUBLE , 1
prometheus_target
Value is 1 if operstate is 'up', 0 otherwise. Sampled every 30 seconds.
device :
device.
node_nf_conntrack_entries
ALPHA
(project)
node_nf_conntrack_entries
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Number of currently allocated flow entries for connection tracking. Sampled every 60 seconds.
node_nf_conntrack_entries/gauge
ALPHA
(project)
node_nf_conntrack_entries
GAUGE , DOUBLE , 1
prometheus_target
Number of currently allocated flow entries for connection tracking. Sampled every 30 seconds.
node_nf_conntrack_entries_limit
ALPHA
(project)
node_nf_conntrack_entries_limit
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Maximum size of connection tracking table. Sampled every 60 seconds.
node_nf_conntrack_entries_limit/gauge
ALPHA
(project)
node_nf_conntrack_entries_limit
GAUGE , DOUBLE , 1
prometheus_target
Maximum size of connection tracking table. Sampled every 30 seconds.
node_nfs_connections_total
ALPHA
(project)
node_nfs_connections_total
CUMULATIVE , DOUBLE , 1
k8s_node
Total number of NFSd TCP connections. Sampled every 60 seconds.
node_nfs_packets_total
ALPHA
(project)
node_nfs_packets_total
CUMULATIVE , DOUBLE , 1
k8s_node
Total NFSd network packets (sent+received) by protocol type. Sampled every 60 seconds.
protocol :
protocol.
node_nfs_requests_total
ALPHA
(project)
node_nfs_requests_total
CUMULATIVE , DOUBLE , 1
k8s_node
Number of NFS procedures invoked. Sampled every 60 seconds.
method :
method.
proto :
proto.
node_nfs_rpc_authentication_refreshes_total
ALPHA
(project)
node_nfs_rpc_authentication_refreshes_total
CUMULATIVE , DOUBLE , 1
k8s_node
Number of RPC authentication refreshes performed. Sampled every 60 seconds.
node_nfs_rpc_retransmissions_total
ALPHA
(project)
node_nfs_rpc_retransmissions_total
CUMULATIVE , DOUBLE , 1
k8s_node
Number of RPC transmissions performed. Sampled every 60 seconds.
node_nfs_rpcs_total
ALPHA
(project)
node_nfs_rpcs_total
CUMULATIVE , DOUBLE , 1
k8s_node
Total number of RPCs performed. Sampled every 60 seconds.
node_nfsd_connections_total
ALPHA
(project)
node_nfsd_connections_total
CUMULATIVE , DOUBLE , 1
k8s_node
Total number of NFSd TCP connections. Sampled every 60 seconds.
node_nfsd_disk_bytes_read_total
ALPHA
(project)
node_nfsd_disk_bytes_read_total
CUMULATIVE , DOUBLE , 1
k8s_node
Total NFSd bytes read. Sampled every 60 seconds.
node_nfsd_disk_bytes_written_total
ALPHA
(project)
node_nfsd_disk_bytes_written_total
CUMULATIVE , DOUBLE , 1
k8s_node
Total NFSd bytes written. Sampled every 60 seconds.
node_nfsd_file_handles_stale_total
ALPHA
(project)
node_nfsd_file_handles_stale_total
CUMULATIVE , DOUBLE , 1
k8s_node
Total number of NFSd stale file handles. Sampled every 60 seconds.
node_nfsd_packets_total
ALPHA
(project)
node_nfsd_packets_total
CUMULATIVE , DOUBLE , 1
k8s_node
Total NFSd network packets (sent+received) by protocol type. Sampled every 60 seconds.
proto :
proto.
node_nfsd_read_ahead_cache_not_found_total
ALPHA
(project)
node_nfsd_read_ahead_cache_not_found_total
CUMULATIVE , DOUBLE , 1
k8s_node
Total number of NFSd read ahead cache not found. Sampled every 60 seconds.
node_nfsd_read_ahead_cache_size_blocks
ALPHA
(project)
node_nfsd_read_ahead_cache_size_blocks
GAUGE , DOUBLE , 1
k8s_node
How large the read ahead cache is in blocks. Sampled every 60 seconds.
node_nfsd_reply_cache_hits_total
ALPHA
(project)
node_nfsd_reply_cache_hits_total
CUMULATIVE , DOUBLE , 1
k8s_node
Total number of NFSd Reply Cache hits (client lost server response). Sampled every 60 seconds.
node_nfsd_reply_cache_misses_total
ALPHA
(project)
node_nfsd_reply_cache_misses_total
CUMULATIVE , DOUBLE , 1
k8s_node
Total number of NFSd Reply Cache an operation that requires caching (idempotent). Sampled every 60 seconds.
node_nfsd_reply_cache_nocache_total
ALPHA
(project)
node_nfsd_reply_cache_nocache_total
CUMULATIVE , DOUBLE , 1
k8s_node
Total number of NFSd Reply Cache non-idempotent operations (rename/delete/…). Sampled every 60 seconds.
node_nfsd_requests_total
ALPHA
(project)
node_nfsd_requests_total
CUMULATIVE , DOUBLE , 1
k8s_node
Total number NFSd Requests by method and protocol. Sampled every 60 seconds.
method :
method.
proto :
proto.
node_nfsd_rpc_errors_total
ALPHA
(project)
node_nfsd_rpc_errors_total
CUMULATIVE , DOUBLE , 1
k8s_node
Total number of NFSd RPC errors by error type. Sampled every 60 seconds.
error :
error.
node_nfsd_server_rpcs_total
ALPHA
(project)
node_nfsd_server_rpcs_total
CUMULATIVE , DOUBLE , 1
k8s_node
Total number of NFSd RPCs. Sampled every 60 seconds.
node_nfsd_server_threads
ALPHA
(project)
node_nfsd_server_threads
GAUGE , DOUBLE , 1
k8s_node
Total number of NFSd kernel threads that are running. Sampled every 60 seconds.
node_pool_operation_duration_seconds
ALPHA
(project)
node_pool_operation_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
[ALPHA] Histogram of latencies for completed operations on a node pool. Sampled every 60 seconds.
error_reason :
error_reason.
node_pool_name :
node_pool_name.
node_pool_type :
node_pool_type.
node_pool_version :
node_pool_version.
operation :
operation.
operation_id :
operation_id.
source :
source.
status :
status.
target_cluster_name :
target_cluster_name.
target_cluster_version :
target_cluster_version.
target_node_pool_version :
target_node_pool_version.
node_pool_operation_status
ALPHA
(project)
node_pool_operation_status
GAUGE , DOUBLE , 1
k8s_container
[ALPHA] This metric records the status of the node pool lifecycle operation. Sampled every 60 seconds.
error_reason :
error_reason.
node_pool_name :
node_pool_name.
node_pool_type :
node_pool_type.
node_pool_version :
node_pool_version.
operation :
operation.
operation_id :
operation_id.
source :
source.
status :
status.
target_cluster_name :
target_cluster_name.
target_cluster_version :
target_cluster_version.
target_node_pool_version :
target_node_pool_version.
node_power_supply_info
ALPHA
(project)
node_power_supply_info
GAUGE , DOUBLE , 1
k8s_node
info of /sys/class/power_supply/<power_supply>. Sampled every 60 seconds.
power_supply :
power_supply.
type :
type.
node_power_supply_online
ALPHA
(project)
node_power_supply_online
GAUGE , DOUBLE , 1
k8s_node
online value of /sys/class/power_supply/<power_supply>. Sampled every 60 seconds.
power_supply :
power_supply.
node_pressure_cpu_waiting_seconds_total
ALPHA
(project)
node_pressure_cpu_waiting_seconds_total
CUMULATIVE , DOUBLE , s
k8s_container
k8s_node
Total time in seconds that processes have waited for CPU time. Sampled every 60 seconds.
node_pressure_cpu_waiting_seconds_total/counter
ALPHA
(project)
node_pressure_cpu_waiting_seconds_total
CUMULATIVE , DOUBLE , s
prometheus_target
Total time in seconds that processes have waited for CPU time. Sampled every 30 seconds.
node_pressure_io_stalled_seconds_total
ALPHA
(project)
node_pressure_io_stalled_seconds_total
CUMULATIVE , DOUBLE , s
k8s_container
k8s_node
Total time in seconds no process could make progress due to IO congestion. Sampled every 60 seconds.
node_pressure_io_waiting_seconds_total
ALPHA
(project)
node_pressure_io_waiting_seconds_total
CUMULATIVE , DOUBLE , s
k8s_container
k8s_node
Total time in seconds that processes have waited due to IO congestion. Sampled every 60 seconds.
node_pressure_memory_stalled_seconds_total
ALPHA
(project)
node_pressure_memory_stalled_seconds_total
CUMULATIVE , DOUBLE , s
k8s_container
k8s_node
Total time in seconds no process could make progress due to memory congestion. Sampled every 60 seconds.
node_pressure_memory_stalled_seconds_total/counter
ALPHA
(project)
node_pressure_memory_stalled_seconds_total
CUMULATIVE , DOUBLE , s
prometheus_target
Total time in seconds no process could make progress due to memory congestion. Sampled every 30 seconds.
node_pressure_memory_waiting_seconds_total
ALPHA
(project)
node_pressure_memory_waiting_seconds_total
CUMULATIVE , DOUBLE , s
k8s_container
k8s_node
Total time in seconds that processes have waited for memory. Sampled every 60 seconds.
node_pressure_memory_waiting_seconds_total/counter
ALPHA
(project)
node_pressure_memory_waiting_seconds_total
CUMULATIVE , DOUBLE , s
prometheus_target
Total time in seconds that processes have waited for memory. Sampled every 30 seconds.
node_procs_blocked
ALPHA
(project)
node_procs_blocked
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Number of processes blocked waiting for I/O to complete. Sampled every 60 seconds.
node_procs_blocked/gauge
ALPHA
(project)
node_procs_blocked
GAUGE , DOUBLE , 1
prometheus_target
Number of processes blocked waiting for I/O to complete. Sampled every 30 seconds.
node_procs_running
ALPHA
(project)
node_procs_running
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Number of processes in runnable state. Sampled every 60 seconds.
node_procs_running/gauge
ALPHA
(project)
node_procs_running
GAUGE , DOUBLE , 1
prometheus_target
Number of processes in runnable state. Sampled every 30 seconds.
node_schedstat_running_seconds_total
ALPHA
(project)
node_schedstat_running_seconds_total
CUMULATIVE , DOUBLE , s
k8s_node
Number of seconds CPU spent running a process. Sampled every 60 seconds.
cpu :
cpu.
node_schedstat_running_seconds_total/counter
ALPHA
(project)
node_schedstat_running_seconds_total
CUMULATIVE , DOUBLE , s
prometheus_target
Number of seconds CPU spent running a process. Sampled every 30 seconds.
cpu :
cpu.
node_schedstat_timeslices_total
ALPHA
(project)
node_schedstat_timeslices_total
CUMULATIVE , DOUBLE , 1
k8s_node
Number of timeslices executed by CPU. Sampled every 60 seconds.
cpu :
cpu.
node_schedstat_timeslices_total/counter
ALPHA
(project)
node_schedstat_timeslices_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Number of timeslices executed by CPU. Sampled every 30 seconds.
cpu :
cpu.
node_schedstat_waiting_seconds_total
ALPHA
(project)
node_schedstat_waiting_seconds_total
CUMULATIVE , DOUBLE , s
k8s_node
Number of seconds spent by processing waiting for this CPU. Sampled every 60 seconds.
cpu :
cpu.
node_schedstat_waiting_seconds_total/counter
ALPHA
(project)
node_schedstat_waiting_seconds_total
CUMULATIVE , DOUBLE , s
prometheus_target
Number of seconds spent by processing waiting for this CPU. Sampled every 30 seconds.
cpu :
cpu.
node_scrape_collector_duration_seconds
ALPHA
(project)
node_scrape_collector_duration_seconds
GAUGE , DOUBLE , s
k8s_container
k8s_node
node_exporter: Duration of a collector scrape. Sampled every 60 seconds.
collector :
collector.
node_scrape_collector_duration_seconds/gauge
ALPHA
(project)
node_scrape_collector_duration_seconds
GAUGE , DOUBLE , s
prometheus_target
node_exporter: Duration of a collector scrape. Sampled every 30 seconds.
collector :
collector.
node_scrape_collector_success
ALPHA
(project)
node_scrape_collector_success
GAUGE , DOUBLE , 1
k8s_container
k8s_node
node_exporter: Whether a collector succeeded. Sampled every 60 seconds.
collector :
collector.
node_scrape_collector_success/gauge
ALPHA
(project)
node_scrape_collector_success
GAUGE , DOUBLE , 1
prometheus_target
node_exporter: Whether a collector succeeded. Sampled every 30 seconds.
collector :
collector.
node_sockstat_FRAG6_inuse
ALPHA
(project)
node_sockstat_FRAG6_inuse
GAUGE , DOUBLE , 1
k8s_node
Number of FRAG6 sockets in state inuse. Sampled every 60 seconds.
node_sockstat_FRAG6_inuse/gauge
ALPHA
(project)
node_sockstat_FRAG6_inuse
GAUGE , DOUBLE , 1
prometheus_target
Number of FRAG6 sockets in state inuse. Sampled every 30 seconds.
node_sockstat_FRAG6_memory
ALPHA
(project)
node_sockstat_FRAG6_memory
GAUGE , DOUBLE , 1
k8s_node
Number of FRAG6 sockets in state memory. Sampled every 60 seconds.
node_sockstat_FRAG6_memory/gauge
ALPHA
(project)
node_sockstat_FRAG6_memory
GAUGE , DOUBLE , 1
prometheus_target
Number of FRAG6 sockets in state memory. Sampled every 30 seconds.
node_sockstat_FRAG_inuse
ALPHA
(project)
node_sockstat_FRAG_inuse
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Number of FRAG sockets in state inuse. Sampled every 60 seconds.
node_sockstat_FRAG_inuse/gauge
ALPHA
(project)
node_sockstat_FRAG_inuse
GAUGE , DOUBLE , 1
prometheus_target
Number of FRAG sockets in state inuse. Sampled every 30 seconds.
node_sockstat_FRAG_memory
ALPHA
(project)
node_sockstat_FRAG_memory
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Number of FRAG sockets in state memory. Sampled every 60 seconds.
node_sockstat_FRAG_memory/gauge
ALPHA
(project)
node_sockstat_FRAG_memory
GAUGE , DOUBLE , 1
prometheus_target
Number of FRAG sockets in state memory. Sampled every 30 seconds.
node_sockstat_RAW6_inuse
ALPHA
(project)
node_sockstat_RAW6_inuse
GAUGE , DOUBLE , 1
k8s_node
Number of RAW6 sockets in state inuse. Sampled every 60 seconds.
node_sockstat_RAW6_inuse/gauge
ALPHA
(project)
node_sockstat_RAW6_inuse
GAUGE , DOUBLE , 1
prometheus_target
Number of RAW6 sockets in state inuse. Sampled every 30 seconds.
node_sockstat_RAW_inuse
ALPHA
(project)
node_sockstat_RAW_inuse
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Number of RAW sockets in state inuse. Sampled every 60 seconds.
node_sockstat_RAW_inuse/gauge
ALPHA
(project)
node_sockstat_RAW_inuse
GAUGE , DOUBLE , 1
prometheus_target
Number of RAW sockets in state inuse. Sampled every 30 seconds.
node_sockstat_TCP6_inuse
ALPHA
(project)
node_sockstat_TCP6_inuse
GAUGE , DOUBLE , 1
k8s_node
Number of TCP6 sockets in state inuse. Sampled every 60 seconds.
node_sockstat_TCP6_inuse/gauge
ALPHA
(project)
node_sockstat_TCP6_inuse
GAUGE , DOUBLE , 1
prometheus_target
Number of TCP6 sockets in state inuse. Sampled every 30 seconds.
node_sockstat_TCP_alloc
ALPHA
(project)
node_sockstat_TCP_alloc
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Number of TCP sockets in state alloc. Sampled every 60 seconds.
node_sockstat_TCP_alloc/gauge
ALPHA
(project)
node_sockstat_TCP_alloc
GAUGE , DOUBLE , 1
prometheus_target
Number of TCP sockets in state alloc. Sampled every 30 seconds.
node_sockstat_TCP_inuse
ALPHA
(project)
node_sockstat_TCP_inuse
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Number of TCP sockets in state inuse. Sampled every 60 seconds.
node_sockstat_TCP_inuse/gauge
ALPHA
(project)
node_sockstat_TCP_inuse
GAUGE , DOUBLE , 1
prometheus_target
Number of TCP sockets in state inuse. Sampled every 30 seconds.
node_sockstat_TCP_mem
ALPHA
(project)
node_sockstat_TCP_mem
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Number of TCP sockets in state mem. Sampled every 60 seconds.
node_sockstat_TCP_mem/gauge
ALPHA
(project)
node_sockstat_TCP_mem
GAUGE , DOUBLE , 1
prometheus_target
Number of TCP sockets in state mem. Sampled every 30 seconds.
node_sockstat_TCP_mem_bytes
ALPHA
(project)
node_sockstat_TCP_mem_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
Number of TCP sockets in state mem_bytes. Sampled every 60 seconds.
node_sockstat_TCP_mem_bytes/gauge
ALPHA
(project)
node_sockstat_TCP_mem_bytes
GAUGE , DOUBLE , By
prometheus_target
Number of TCP sockets in state mem_bytes. Sampled every 30 seconds.
node_sockstat_TCP_orphan
ALPHA
(project)
node_sockstat_TCP_orphan
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Number of TCP sockets in state orphan. Sampled every 60 seconds.
node_sockstat_TCP_orphan/gauge
ALPHA
(project)
node_sockstat_TCP_orphan
GAUGE , DOUBLE , 1
prometheus_target
Number of TCP sockets in state orphan. Sampled every 30 seconds.
node_sockstat_TCP_tw
ALPHA
(project)
node_sockstat_TCP_tw
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Number of TCP sockets in state tw. Sampled every 60 seconds.
node_sockstat_TCP_tw/gauge
ALPHA
(project)
node_sockstat_TCP_tw
GAUGE , DOUBLE , 1
prometheus_target
Number of TCP sockets in state tw. Sampled every 30 seconds.
node_sockstat_UDP6_inuse
ALPHA
(project)
node_sockstat_UDP6_inuse
GAUGE , DOUBLE , 1
k8s_node
Number of UDP6 sockets in state inuse. Sampled every 60 seconds.
node_sockstat_UDP6_inuse/gauge
ALPHA
(project)
node_sockstat_UDP6_inuse
GAUGE , DOUBLE , 1
prometheus_target
Number of UDP6 sockets in state inuse. Sampled every 30 seconds.
node_sockstat_UDPLITE6_inuse
ALPHA
(project)
node_sockstat_UDPLITE6_inuse
GAUGE , DOUBLE , 1
k8s_node
Number of UDPLITE6 sockets in state inuse. Sampled every 60 seconds.
node_sockstat_UDPLITE6_inuse/gauge
ALPHA
(project)
node_sockstat_UDPLITE6_inuse
GAUGE , DOUBLE , 1
prometheus_target
Number of UDPLITE6 sockets in state inuse. Sampled every 30 seconds.
node_sockstat_UDPLITE_inuse
ALPHA
(project)
node_sockstat_UDPLITE_inuse
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Number of UDPLITE sockets in state inuse. Sampled every 60 seconds.
node_sockstat_UDPLITE_inuse/gauge
ALPHA
(project)
node_sockstat_UDPLITE_inuse
GAUGE , DOUBLE , 1
prometheus_target
Number of UDPLITE sockets in state inuse. Sampled every 30 seconds.
node_sockstat_UDP_inuse
ALPHA
(project)
node_sockstat_UDP_inuse
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Number of UDP sockets in state inuse. Sampled every 60 seconds.
node_sockstat_UDP_inuse/gauge
ALPHA
(project)
node_sockstat_UDP_inuse
GAUGE , DOUBLE , 1
prometheus_target
Number of UDP sockets in state inuse. Sampled every 30 seconds.
node_sockstat_UDP_mem
ALPHA
(project)
node_sockstat_UDP_mem
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Number of UDP sockets in state mem. Sampled every 60 seconds.
node_sockstat_UDP_mem/gauge
ALPHA
(project)
node_sockstat_UDP_mem
GAUGE , DOUBLE , 1
prometheus_target
Number of UDP sockets in state mem. Sampled every 30 seconds.
node_sockstat_UDP_mem_bytes
ALPHA
(project)
node_sockstat_UDP_mem_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
Number of UDP sockets in state mem_bytes. Sampled every 60 seconds.
node_sockstat_UDP_mem_bytes/gauge
ALPHA
(project)
node_sockstat_UDP_mem_bytes
GAUGE , DOUBLE , By
prometheus_target
Number of UDP sockets in state mem_bytes. Sampled every 30 seconds.
node_sockstat_sockets_used
ALPHA
(project)
node_sockstat_sockets_used
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Number of IPv4 sockets in use. Sampled every 60 seconds.
node_sockstat_sockets_used/gauge
ALPHA
(project)
node_sockstat_sockets_used
GAUGE , DOUBLE , 1
prometheus_target
Number of IPv4 sockets in use. Sampled every 30 seconds.
node_softnet_dropped_total
ALPHA
(project)
node_softnet_dropped_total
CUMULATIVE , DOUBLE , 1
k8s_node
Number of dropped packets. Sampled every 60 seconds.
cpu :
cpu.
node_softnet_dropped_total/counter
ALPHA
(project)
node_softnet_dropped_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Number of dropped packets. Sampled every 30 seconds.
cpu :
cpu.
node_softnet_processed_total
ALPHA
(project)
node_softnet_processed_total
CUMULATIVE , DOUBLE , 1
k8s_node
Number of processed packets. Sampled every 60 seconds.
cpu :
cpu.
node_softnet_processed_total/counter
ALPHA
(project)
node_softnet_processed_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Number of processed packets. Sampled every 30 seconds.
cpu :
cpu.
node_softnet_times_squeezed_total
ALPHA
(project)
node_softnet_times_squeezed_total
CUMULATIVE , DOUBLE , 1
k8s_node
Number of times processing packets ran out of quota. Sampled every 60 seconds.
cpu :
cpu.
node_softnet_times_squeezed_total/counter
ALPHA
(project)
node_softnet_times_squeezed_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Number of times processing packets ran out of quota. Sampled every 30 seconds.
cpu :
cpu.
node_textfile_scrape_error
ALPHA
(project)
node_textfile_scrape_error
GAUGE , DOUBLE , 1
k8s_container
k8s_node
1 if there was an error opening or reading a file, 0 otherwise. Sampled every 60 seconds.
node_textfile_scrape_error/gauge
ALPHA
(project)
node_textfile_scrape_error
GAUGE , DOUBLE , 1
prometheus_target
1 if there was an error opening or reading a file, 0 otherwise. Sampled every 30 seconds.
node_thermal_zone_temp
ALPHA
(project)
node_thermal_zone_temp
GAUGE , DOUBLE , 1
k8s_node
Zone temperature in Celsius. Sampled every 60 seconds.
type :
type.
zone :
zone.
node_thermal_zone_temp/gauge
ALPHA
(project)
node_thermal_zone_temp
GAUGE , DOUBLE , 1
prometheus_target
Zone temperature in Celsius. Sampled every 30 seconds.
type :
type.
zone :
zone.
node_time_seconds
ALPHA
(project)
node_time_seconds
GAUGE , DOUBLE , s
k8s_container
k8s_node
System time in seconds since epoch (1970). Sampled every 60 seconds.
node_time_seconds/gauge
ALPHA
(project)
node_time_seconds
GAUGE , DOUBLE , s
prometheus_target
System time in seconds since epoch (1970). Sampled every 30 seconds.
node_timex_estimated_error_seconds
ALPHA
(project)
node_timex_estimated_error_seconds
GAUGE , DOUBLE , s
k8s_container
k8s_node
Estimated error in seconds. Sampled every 60 seconds.
node_timex_estimated_error_seconds/gauge
ALPHA
(project)
node_timex_estimated_error_seconds
GAUGE , DOUBLE , s
prometheus_target
Estimated error in seconds. Sampled every 30 seconds.
node_timex_frequency_adjustment_ratio
ALPHA
(project)
node_timex_frequency_adjustment_ratio
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Local clock frequency adjustment. Sampled every 60 seconds.
node_timex_frequency_adjustment_ratio/gauge
ALPHA
(project)
node_timex_frequency_adjustment_ratio
GAUGE , DOUBLE , 1
prometheus_target
Local clock frequency adjustment. Sampled every 30 seconds.
node_timex_loop_time_constant
ALPHA
(project)
node_timex_loop_time_constant
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Phase-locked loop time constant. Sampled every 60 seconds.
node_timex_loop_time_constant/gauge
ALPHA
(project)
node_timex_loop_time_constant
GAUGE , DOUBLE , 1
prometheus_target
Phase-locked loop time constant. Sampled every 30 seconds.
node_timex_maxerror_seconds
ALPHA
(project)
node_timex_maxerror_seconds
GAUGE , DOUBLE , s
k8s_container
k8s_node
Maximum error in seconds. Sampled every 60 seconds.
node_timex_maxerror_seconds/gauge
ALPHA
(project)
node_timex_maxerror_seconds
GAUGE , DOUBLE , s
prometheus_target
Maximum error in seconds. Sampled every 30 seconds.
node_timex_offset_seconds
ALPHA
(project)
node_timex_offset_seconds
GAUGE , DOUBLE , s
k8s_container
k8s_node
Time offset in between local system and reference clock. Sampled every 60 seconds.
node_timex_offset_seconds/gauge
ALPHA
(project)
node_timex_offset_seconds
GAUGE , DOUBLE , s
prometheus_target
Time offset in between local system and reference clock. Sampled every 30 seconds.
node_timex_pps_calibration_total
ALPHA
(project)
node_timex_pps_calibration_total
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_node
Pulse per second count of calibration intervals. Sampled every 60 seconds.
node_timex_pps_calibration_total/counter
ALPHA
(project)
node_timex_pps_calibration_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Pulse per second count of calibration intervals. Sampled every 30 seconds.
node_timex_pps_error_total
ALPHA
(project)
node_timex_pps_error_total
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_node
Pulse per second count of calibration errors. Sampled every 60 seconds.
node_timex_pps_error_total/counter
ALPHA
(project)
node_timex_pps_error_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Pulse per second count of calibration errors. Sampled every 30 seconds.
node_timex_pps_frequency_hertz
ALPHA
(project)
node_timex_pps_frequency_hertz
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Pulse per second frequency. Sampled every 60 seconds.
node_timex_pps_frequency_hertz/gauge
ALPHA
(project)
node_timex_pps_frequency_hertz
GAUGE , DOUBLE , 1
prometheus_target
Pulse per second frequency. Sampled every 30 seconds.
node_timex_pps_jitter_seconds
ALPHA
(project)
node_timex_pps_jitter_seconds
GAUGE , DOUBLE , s
k8s_container
k8s_node
Pulse per second jitter. Sampled every 60 seconds.
node_timex_pps_jitter_seconds/gauge
ALPHA
(project)
node_timex_pps_jitter_seconds
GAUGE , DOUBLE , s
prometheus_target
Pulse per second jitter. Sampled every 30 seconds.
node_timex_pps_jitter_total
ALPHA
(project)
node_timex_pps_jitter_total
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_node
Pulse per second count of jitter limit exceeded events. Sampled every 60 seconds.
node_timex_pps_jitter_total/counter
ALPHA
(project)
node_timex_pps_jitter_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Pulse per second count of jitter limit exceeded events. Sampled every 30 seconds.
node_timex_pps_shift_seconds
ALPHA
(project)
node_timex_pps_shift_seconds
GAUGE , DOUBLE , s
k8s_container
k8s_node
Pulse per second interval duration. Sampled every 60 seconds.
node_timex_pps_shift_seconds/gauge
ALPHA
(project)
node_timex_pps_shift_seconds
GAUGE , DOUBLE , s
prometheus_target
Pulse per second interval duration. Sampled every 30 seconds.
node_timex_pps_stability_exceeded_total
ALPHA
(project)
node_timex_pps_stability_exceeded_total
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_node
Pulse per second count of stability limit exceeded events. Sampled every 60 seconds.
node_timex_pps_stability_exceeded_total/counter
ALPHA
(project)
node_timex_pps_stability_exceeded_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Pulse per second count of stability limit exceeded events. Sampled every 30 seconds.
node_timex_pps_stability_hertz
ALPHA
(project)
node_timex_pps_stability_hertz
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Pulse per second stability, average of recent frequency changes. Sampled every 60 seconds.
node_timex_pps_stability_hertz/gauge
ALPHA
(project)
node_timex_pps_stability_hertz
GAUGE , DOUBLE , 1
prometheus_target
Pulse per second stability, average of recent frequency changes. Sampled every 30 seconds.
node_timex_status
ALPHA
(project)
node_timex_status
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Value of the status array bits. Sampled every 60 seconds.
node_timex_status/gauge
ALPHA
(project)
node_timex_status
GAUGE , DOUBLE , 1
prometheus_target
Value of the status array bits. Sampled every 30 seconds.
node_timex_sync_status
ALPHA
(project)
node_timex_sync_status
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Is clock synchronized to a reliable server (1 = yes, 0 = no). Sampled every 60 seconds.
node_timex_sync_status/gauge
ALPHA
(project)
node_timex_sync_status
GAUGE , DOUBLE , 1
prometheus_target
Is clock synchronized to a reliable server (1 = yes, 0 = no). Sampled every 30 seconds.
node_timex_tai_offset_seconds
ALPHA
(project)
node_timex_tai_offset_seconds
GAUGE , DOUBLE , s
k8s_container
k8s_node
International Atomic Time (TAI) offset. Sampled every 60 seconds.
node_timex_tai_offset_seconds/gauge
ALPHA
(project)
node_timex_tai_offset_seconds
GAUGE , DOUBLE , s
prometheus_target
International Atomic Time (TAI) offset. Sampled every 30 seconds.
node_timex_tick_seconds
ALPHA
(project)
node_timex_tick_seconds
GAUGE , DOUBLE , s
k8s_container
k8s_node
Seconds between clock ticks. Sampled every 60 seconds.
node_timex_tick_seconds/gauge
ALPHA
(project)
node_timex_tick_seconds
GAUGE , DOUBLE , s
prometheus_target
Seconds between clock ticks. Sampled every 30 seconds.
node_udp_queues
ALPHA
(project)
node_udp_queues
GAUGE , DOUBLE , 1
k8s_node
Number of allocated memory in the kernel for UDP datagrams in bytes. Sampled every 60 seconds.
ip :
ip.
queue :
queue.
node_udp_queues/gauge
ALPHA
(project)
node_udp_queues
GAUGE , DOUBLE , 1
prometheus_target
Number of allocated memory in the kernel for UDP datagrams in bytes. Sampled every 30 seconds.
ip :
ip.
queue :
queue.
node_uname_info
ALPHA
(project)
node_uname_info
GAUGE , DOUBLE , 1
k8s_container
k8s_node
Labeled system information as provided by the uname system call. Sampled every 60 seconds.
domainname :
domainname.
machine :
machine.
nodename :
nodename.
release :
release.
sysname :
sysname.
version :
version.
node_uname_info/gauge
ALPHA
(project)
node_uname_info
GAUGE , DOUBLE , 1
prometheus_target
Labeled system information as provided by the uname system call. Sampled every 30 seconds.
domainname :
domainname.
machine :
machine.
nodename :
nodename.
release :
release.
sysname :
sysname.
version :
version.
node_vmstat_oom_kill
ALPHA
(project)
node_vmstat_oom_kill
GAUGE , DOUBLE , 1
k8s_container
k8s_node
/proc/vmstat information field oom_kill. Sampled every 60 seconds.
node_vmstat_oom_kill/gauge
ALPHA
(project)
node_vmstat_oom_kill
GAUGE , DOUBLE , 1
prometheus_target
/proc/vmstat information field oom_kill. Sampled every 30 seconds.
node_vmstat_pgfault
ALPHA
(project)
node_vmstat_pgfault
GAUGE , DOUBLE , 1
k8s_container
k8s_node
/proc/vmstat information field pgfault. Sampled every 60 seconds.
node_vmstat_pgfault/gauge
ALPHA
(project)
node_vmstat_pgfault
GAUGE , DOUBLE , 1
prometheus_target
/proc/vmstat information field pgfault. Sampled every 30 seconds.
node_vmstat_pgmajfault
ALPHA
(project)
node_vmstat_pgmajfault
GAUGE , DOUBLE , 1
k8s_container
k8s_node
/proc/vmstat information field pgmajfault. Sampled every 60 seconds.
node_vmstat_pgmajfault/gauge
ALPHA
(project)
node_vmstat_pgmajfault
GAUGE , DOUBLE , 1
prometheus_target
/proc/vmstat information field pgmajfault. Sampled every 30 seconds.
node_vmstat_pgpgin
ALPHA
(project)
node_vmstat_pgpgin
GAUGE , DOUBLE , 1
k8s_container
k8s_node
/proc/vmstat information field pgpgin. Sampled every 60 seconds.
node_vmstat_pgpgin/gauge
ALPHA
(project)
node_vmstat_pgpgin
GAUGE , DOUBLE , 1
prometheus_target
/proc/vmstat information field pgpgin. Sampled every 30 seconds.
node_vmstat_pgpgout
ALPHA
(project)
node_vmstat_pgpgout
GAUGE , DOUBLE , 1
k8s_container
k8s_node
/proc/vmstat information field pgpgout. Sampled every 60 seconds.
node_vmstat_pgpgout/gauge
ALPHA
(project)
node_vmstat_pgpgout
GAUGE , DOUBLE , 1
prometheus_target
/proc/vmstat information field pgpgout. Sampled every 30 seconds.
node_vmstat_pswpin
ALPHA
(project)
node_vmstat_pswpin
GAUGE , DOUBLE , 1
k8s_container
k8s_node
/proc/vmstat information field pswpin. Sampled every 60 seconds.
node_vmstat_pswpin/gauge
ALPHA
(project)
node_vmstat_pswpin
GAUGE , DOUBLE , 1
prometheus_target
/proc/vmstat information field pswpin. Sampled every 30 seconds.
node_vmstat_pswpout
ALPHA
(project)
node_vmstat_pswpout
GAUGE , DOUBLE , 1
k8s_container
k8s_node
/proc/vmstat information field pswpout. Sampled every 60 seconds.
node_vmstat_pswpout/gauge
ALPHA
(project)
node_vmstat_pswpout
GAUGE , DOUBLE , 1
prometheus_target
/proc/vmstat information field pswpout. Sampled every 30 seconds.
node_xfs_allocation_btree_compares_total
ALPHA
(project)
node_xfs_allocation_btree_compares_total
CUMULATIVE , DOUBLE , 1
k8s_node
Number of allocation B-tree compares for a filesystem. Sampled every 60 seconds.
device :
device.
node_xfs_allocation_btree_lookups_total
ALPHA
(project)
node_xfs_allocation_btree_lookups_total
CUMULATIVE , DOUBLE , 1
k8s_node
Number of allocation B-tree lookups for a filesystem. Sampled every 60 seconds.
device :
device.
node_xfs_allocation_btree_records_deleted_total
ALPHA
(project)
node_xfs_allocation_btree_records_deleted_total
CUMULATIVE , DOUBLE , 1
k8s_node
Number of allocation B-tree records deleted for a filesystem. Sampled every 60 seconds.
device :
device.
node_xfs_allocation_btree_records_inserted_total
ALPHA
(project)
node_xfs_allocation_btree_records_inserted_total
CUMULATIVE , DOUBLE , 1
k8s_node
Number of allocation B-tree records inserted for a filesystem. Sampled every 60 seconds.
device :
device.
node_xfs_block_map_btree_compares_total
ALPHA
(project)
node_xfs_block_map_btree_compares_total
CUMULATIVE , DOUBLE , 1
k8s_node
Number of block map B-tree compares for a filesystem. Sampled every 60 seconds.
device :
device.
node_xfs_block_map_btree_lookups_total
ALPHA
(project)
node_xfs_block_map_btree_lookups_total
CUMULATIVE , DOUBLE , 1
k8s_node
Number of block map B-tree lookups for a filesystem. Sampled every 60 seconds.
device :
device.
node_xfs_block_map_btree_records_deleted_total
ALPHA
(project)
node_xfs_block_map_btree_records_deleted_total
CUMULATIVE , DOUBLE , 1
k8s_node
Number of block map B-tree records deleted for a filesystem. Sampled every 60 seconds.
device :
device.
node_xfs_block_map_btree_records_inserted_total
ALPHA
(project)
node_xfs_block_map_btree_records_inserted_total
CUMULATIVE , DOUBLE , 1
k8s_node
Number of block map B-tree records inserted for a filesystem. Sampled every 60 seconds.
device :
device.
node_xfs_block_mapping_extent_list_compares_total
ALPHA
(project)
node_xfs_block_mapping_extent_list_compares_total
CUMULATIVE , DOUBLE , 1
k8s_node
Number of extent list compares for a filesystem. Sampled every 60 seconds.
device :
device.
node_xfs_block_mapping_extent_list_deletions_total
ALPHA
(project)
node_xfs_block_mapping_extent_list_deletions_total
CUMULATIVE , DOUBLE , 1
k8s_node
Number of extent list deletions for a filesystem. Sampled every 60 seconds.
device :
device.
node_xfs_block_mapping_extent_list_insertions_total
ALPHA
(project)
node_xfs_block_mapping_extent_list_insertions_total
CUMULATIVE , DOUBLE , 1
k8s_node
Number of extent list insertions for a filesystem. Sampled every 60 seconds.
device :
device.
node_xfs_block_mapping_extent_list_lookups_total
ALPHA
(project)
node_xfs_block_mapping_extent_list_lookups_total
CUMULATIVE , DOUBLE , 1
k8s_node
Number of extent list lookups for a filesystem. Sampled every 60 seconds.
device :
device.
node_xfs_block_mapping_reads_total
ALPHA
(project)
node_xfs_block_mapping_reads_total
CUMULATIVE , DOUBLE , 1
k8s_node
Number of block map for read operations for a filesystem. Sampled every 60 seconds.
device :
device.
node_xfs_block_mapping_unmaps_total
ALPHA
(project)
node_xfs_block_mapping_unmaps_total
CUMULATIVE , DOUBLE , 1
k8s_node
Number of block unmaps (deletes) for a filesystem. Sampled every 60 seconds.
device :
device.
node_xfs_block_mapping_writes_total
ALPHA
(project)
node_xfs_block_mapping_writes_total
CUMULATIVE , DOUBLE , 1
k8s_node
Number of block map for write operations for a filesystem. Sampled every 60 seconds.
device :
device.
node_xfs_directory_operation_create_total
ALPHA
(project)
node_xfs_directory_operation_create_total
CUMULATIVE , DOUBLE , 1
k8s_node
Number of times a new directory entry was created for a filesystem. Sampled every 60 seconds.
device :
device.
node_xfs_directory_operation_getdents_total
ALPHA
(project)
node_xfs_directory_operation_getdents_total
CUMULATIVE , DOUBLE , 1
k8s_node
Number of times the directory getdents operation was performed for a filesystem. Sampled every 60 seconds.
device :
device.
node_xfs_directory_operation_lookup_total
ALPHA
(project)
node_xfs_directory_operation_lookup_total
CUMULATIVE , DOUBLE , 1
k8s_node
Number of file name directory lookups which miss the operating systems directory name lookup cache. Sampled every 60 seconds.
device :
device.
node_xfs_directory_operation_remove_total
ALPHA
(project)
node_xfs_directory_operation_remove_total
CUMULATIVE , DOUBLE , 1
k8s_node
Number of times an existing directory entry was created for a filesystem. Sampled every 60 seconds.
device :
device.
node_xfs_extent_allocation_blocks_allocated_total
ALPHA
(project)
node_xfs_extent_allocation_blocks_allocated_total
CUMULATIVE , DOUBLE , 1
k8s_node
Number of blocks allocated for a filesystem. Sampled every 60 seconds.
device :
device.
node_xfs_extent_allocation_blocks_freed_total
ALPHA
(project)
node_xfs_extent_allocation_blocks_freed_total
CUMULATIVE , DOUBLE , 1
k8s_node
Number of blocks freed for a filesystem. Sampled every 60 seconds.
device :
device.
node_xfs_extent_allocation_extents_allocated_total
ALPHA
(project)
node_xfs_extent_allocation_extents_allocated_total
CUMULATIVE , DOUBLE , 1
k8s_node
Number of extents allocated for a filesystem. Sampled every 60 seconds.
device :
device.
node_xfs_extent_allocation_extents_freed_total
ALPHA
(project)
node_xfs_extent_allocation_extents_freed_total
CUMULATIVE , DOUBLE , 1
k8s_node
Number of extents freed for a filesystem. Sampled every 60 seconds.
device :
device.
node_xfs_read_calls_total
ALPHA
(project)
node_xfs_read_calls_total
CUMULATIVE , DOUBLE , 1
k8s_node
Number of read(2) system calls made to files in a filesystem. Sampled every 60 seconds.
device :
device.
node_xfs_vnode_active_total
ALPHA
(project)
node_xfs_vnode_active_total
CUMULATIVE , DOUBLE , 1
k8s_node
Number of vnodes not on free lists for a filesystem. Sampled every 60 seconds.
device :
device.
node_xfs_vnode_allocate_total
ALPHA
(project)
node_xfs_vnode_allocate_total
CUMULATIVE , DOUBLE , 1
k8s_node
Number of times vn_alloc called for a filesystem. Sampled every 60 seconds.
device :
device.
node_xfs_vnode_get_total
ALPHA
(project)
node_xfs_vnode_get_total
CUMULATIVE , DOUBLE , 1
k8s_node
Number of times vn_get called for a filesystem. Sampled every 60 seconds.
device :
device.
node_xfs_vnode_hold_total
ALPHA
(project)
node_xfs_vnode_hold_total
CUMULATIVE , DOUBLE , 1
k8s_node
Number of times vn_hold called for a filesystem. Sampled every 60 seconds.
device :
device.
node_xfs_vnode_reclaim_total
ALPHA
(project)
node_xfs_vnode_reclaim_total
CUMULATIVE , DOUBLE , 1
k8s_node
Number of times vn_reclaim called for a filesystem. Sampled every 60 seconds.
device :
device.
node_xfs_vnode_release_total
ALPHA
(project)
node_xfs_vnode_release_total
CUMULATIVE , DOUBLE , 1
k8s_node
Number of times vn_rele called for a filesystem. Sampled every 60 seconds.
device :
device.
node_xfs_vnode_remove_total
ALPHA
(project)
node_xfs_vnode_remove_total
CUMULATIVE , DOUBLE , 1
k8s_node
Number of times vn_remove called for a filesystem. Sampled every 60 seconds.
device :
device.
node_xfs_write_calls_total
ALPHA
(project)
node_xfs_write_calls_total
CUMULATIVE , DOUBLE , 1
k8s_node
Number of write(2) system calls made to files in a filesystem. Sampled every 60 seconds.
device :
device.
noexec_taint_node_adds
ALPHA
(project)
noexec_taint_node_adds
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of adds handled by workqueue: noexec_taint_node. Sampled every 60 seconds.
noexec_taint_node_depth
ALPHA
(project)
noexec_taint_node_depth
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) Current depth of workqueue: noexec_taint_node. Sampled every 60 seconds.
noexec_taint_node_longest_running_processor_microseconds
ALPHA
(project)
noexec_taint_node_longest_running_processor_microseconds
GAUGE , DOUBLE , us
k8s_container
(Deprecated) How many microseconds has the longest running processor for noexec_taint_node been running. Sampled every 60 seconds.
noexec_taint_node_queue_latency
ALPHA
(project)
noexec_taint_node_queue_latency
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuenoexec_taint_node before being requested. Sampled every 60 seconds.
quantile :
quantile.
noexec_taint_node_queue_latency_count
ALPHA
(project)
noexec_taint_node_queue_latency_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long an item stays in workqueuenoexec_taint_node before being requested. Sampled every 60 seconds.
noexec_taint_node_queue_latency_sum
ALPHA
(project)
noexec_taint_node_queue_latency_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuenoexec_taint_node before being requested. Sampled every 60 seconds.
noexec_taint_node_unfinished_work_seconds
ALPHA
(project)
noexec_taint_node_unfinished_work_seconds
GAUGE , DOUBLE , s
k8s_container
(Deprecated) How many seconds of work noexec_taint_node has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases. Sampled every 60 seconds.
noexec_taint_node_work_duration
ALPHA
(project)
noexec_taint_node_work_duration
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuenoexec_taint_node takes. Sampled every 60 seconds.
quantile :
quantile.
noexec_taint_node_work_duration_count
ALPHA
(project)
noexec_taint_node_work_duration_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long processing an item from workqueuenoexec_taint_node takes. Sampled every 60 seconds.
noexec_taint_node_work_duration_sum
ALPHA
(project)
noexec_taint_node_work_duration_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuenoexec_taint_node takes. Sampled every 60 seconds.
noexec_taint_pod_adds
ALPHA
(project)
noexec_taint_pod_adds
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of adds handled by workqueue: noexec_taint_pod. Sampled every 60 seconds.
noexec_taint_pod_depth
ALPHA
(project)
noexec_taint_pod_depth
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) Current depth of workqueue: noexec_taint_pod. Sampled every 60 seconds.
noexec_taint_pod_longest_running_processor_microseconds
ALPHA
(project)
noexec_taint_pod_longest_running_processor_microseconds
GAUGE , DOUBLE , us
k8s_container
(Deprecated) How many microseconds has the longest running processor for noexec_taint_pod been running. Sampled every 60 seconds.
noexec_taint_pod_queue_latency
ALPHA
(project)
noexec_taint_pod_queue_latency
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuenoexec_taint_pod before being requested. Sampled every 60 seconds.
quantile :
quantile.
noexec_taint_pod_queue_latency_count
ALPHA
(project)
noexec_taint_pod_queue_latency_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long an item stays in workqueuenoexec_taint_pod before being requested. Sampled every 60 seconds.
noexec_taint_pod_queue_latency_sum
ALPHA
(project)
noexec_taint_pod_queue_latency_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuenoexec_taint_pod before being requested. Sampled every 60 seconds.
noexec_taint_pod_unfinished_work_seconds
ALPHA
(project)
noexec_taint_pod_unfinished_work_seconds
GAUGE , DOUBLE , s
k8s_container
(Deprecated) How many seconds of work noexec_taint_pod has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases. Sampled every 60 seconds.
noexec_taint_pod_work_duration
ALPHA
(project)
noexec_taint_pod_work_duration
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuenoexec_taint_pod takes. Sampled every 60 seconds.
quantile :
quantile.
noexec_taint_pod_work_duration_count
ALPHA
(project)
noexec_taint_pod_work_duration_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long processing an item from workqueuenoexec_taint_pod takes. Sampled every 60 seconds.
noexec_taint_pod_work_duration_sum
ALPHA
(project)
noexec_taint_pod_work_duration_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuenoexec_taint_pod takes. Sampled every 60 seconds.
non_structural_schema_condition_controller_adds
ALPHA
(project)
non_structural_schema_condition_controller_adds
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of adds handled by workqueue: non_structural_schema_condition_controller. Sampled every 60 seconds.
non_structural_schema_condition_controller_depth
ALPHA
(project)
non_structural_schema_condition_controller_depth
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) Current depth of workqueue: non_structural_schema_condition_controller. Sampled every 60 seconds.
non_structural_schema_condition_controller_longest_running_processor_microseconds
ALPHA
(project)
non_structural_schema_condition_controller_longest_running_processor_microseconds
GAUGE , DOUBLE , us
k8s_container
(Deprecated) How many microseconds has the longest running processor for non_structural_schema_condition_controller been running. Sampled every 60 seconds.
non_structural_schema_condition_controller_queue_latency
ALPHA
(project)
non_structural_schema_condition_controller_queue_latency
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuenon_structural_schema_condition_controller before being requested. Sampled every 60 seconds.
quantile :
quantile.
non_structural_schema_condition_controller_queue_latency_count
ALPHA
(project)
non_structural_schema_condition_controller_queue_latency_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long an item stays in workqueuenon_structural_schema_condition_controller before being requested. Sampled every 60 seconds.
non_structural_schema_condition_controller_queue_latency_sum
ALPHA
(project)
non_structural_schema_condition_controller_queue_latency_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuenon_structural_schema_condition_controller before being requested. Sampled every 60 seconds.
non_structural_schema_condition_controller_retries
ALPHA
(project)
non_structural_schema_condition_controller_retries
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of retries handled by workqueue: non_structural_schema_condition_controller. Sampled every 60 seconds.
non_structural_schema_condition_controller_unfinished_work_seconds
ALPHA
(project)
non_structural_schema_condition_controller_unfinished_work_seconds
GAUGE , DOUBLE , s
k8s_container
(Deprecated) How many seconds of work non_structural_schema_condition_controller has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases. Sampled every 60 seconds.
non_structural_schema_condition_controller_work_duration
ALPHA
(project)
non_structural_schema_condition_controller_work_duration
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuenon_structural_schema_condition_controller takes. Sampled every 60 seconds.
quantile :
quantile.
non_structural_schema_condition_controller_work_duration_count
ALPHA
(project)
non_structural_schema_condition_controller_work_duration_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long processing an item from workqueuenon_structural_schema_condition_controller takes. Sampled every 60 seconds.
non_structural_schema_condition_controller_work_duration_sum
ALPHA
(project)
non_structural_schema_condition_controller_work_duration_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuenon_structural_schema_condition_controller takes. Sampled every 60 seconds.
nsx_info
ALPHA
(project)
nsx_info
GAUGE , DOUBLE , 1
k8s_pod
Version Information about nsx-t/nsx-v if enabled. Sampled every 60 seconds.
type :
type.
version :
version.
onpremusercluster_operation_latencies_seconds
ALPHA
(project)
onpremusercluster_operation_latencies_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
k8s_pod
Histogram of latencies for completed operations on onpremusercluster. Sampled every 60 seconds.
operation :
operation.
onpremusercluster_unfinished_operation_starttime
ALPHA
(project)
onpremusercluster_unfinished_operation_starttime
GAUGE , DOUBLE , 1
k8s_container
k8s_pod
Start time of last unfinished operation on this onpremusercluster in unix timestamp. Sampled every 60 seconds.
exported_namespace :
exported_namespace.
onpremusercluster :
onpremusercluster.
operation :
operation.
prevgkeversion :
prevgkeversion.
opencensus_io_http_client_completed_count
ALPHA
(project)
opencensus_io_http_client_completed_count
CUMULATIVE , DOUBLE , 1
k8s_container
Count of completed requests, by HTTP method and response status. Sampled every 60 seconds.
http_client_host :
http_client_host.
http_client_method :
http_client_method.
http_client_status :
http_client_status.
opencensus_io_http_client_latency
ALPHA
(project)
opencensus_io_http_client_latency
CUMULATIVE , DISTRIBUTION , 1
k8s_container
Latency distribution of HTTP requests. Sampled every 60 seconds.
http_method :
http_method.
http_path :
http_path.
http_status :
http_status.
opencensus_io_http_client_received_bytes
ALPHA
(project)
opencensus_io_http_client_received_bytes
CUMULATIVE , DISTRIBUTION , By
k8s_container
Total bytes received in response bodies (not including headers but including error responses with bodies), by HTTP method and response status. Sampled every 60 seconds.
http_client_host :
http_client_host.
http_client_method :
http_client_method.
http_client_status :
http_client_status.
opencensus_io_http_client_request_count
ALPHA
(project)
opencensus_io_http_client_request_count
CUMULATIVE , DOUBLE , 1
k8s_container
Count of HTTP requests started. Sampled every 60 seconds.
http_method :
http_method.
http_path :
http_path.
opencensus_io_http_client_response_bytes
ALPHA
(project)
opencensus_io_http_client_response_bytes
CUMULATIVE , DISTRIBUTION , By
k8s_container
Size distribution of HTTP response body. Sampled every 60 seconds.
http_method :
http_method.
http_path :
http_path.
http_status :
http_status.
opencensus_io_http_client_roundtrip_latency
ALPHA
(project)
opencensus_io_http_client_roundtrip_latency
CUMULATIVE , DISTRIBUTION , 1
k8s_container
End-to-end latency, by HTTP method and response status. Sampled every 60 seconds.
http_client_host :
http_client_host.
http_client_method :
http_client_method.
http_client_status :
http_client_status.
opencensus_io_http_client_sent_bytes
ALPHA
(project)
opencensus_io_http_client_sent_bytes
CUMULATIVE , DISTRIBUTION , By
k8s_container
Total bytes sent in request body (not including headers), by HTTP method and response status. Sampled every 60 seconds.
http_client_host :
http_client_host.
http_client_method :
http_client_method.
http_client_status :
http_client_status.
operation_level_operation_status_total
ALPHA
(project)
Status of operation-level cluster operations
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_pod
Counts the operation-level status of cluster lifecycle operations. Sampled every 60 seconds.
cluster_version :
cluster_version.
error_reason :
error_reason.
operation :
operation.
operation_id :
operation_id.
source :
source.
status :
status.
target_cluster_name :
target_cluster_name.
target_cluster_version :
target_cluster_version.
os_fd_limit
ALPHA
(project)
os_fd_limit
GAUGE , DOUBLE , 1
k8s_container
The file descriptor limit. Sampled every 60 seconds.
os_fd_limit/gauge
ALPHA
(project)
os_fd_limit
GAUGE , DOUBLE , 1
prometheus_target
The file descriptor limit. Sampled every 30 seconds.
os_fd_used
ALPHA
(project)
os_fd_used
GAUGE , DOUBLE , 1
k8s_container
The number of used file descriptors. Sampled every 60 seconds.
os_fd_used/gauge
ALPHA
(project)
os_fd_used
GAUGE , DOUBLE , 1
prometheus_target
The number of used file descriptors. Sampled every 30 seconds.
otelcol_exporter_enqueue_failed_log_records
ALPHA
(project)
otelcol_exporter_enqueue_failed_log_records
CUMULATIVE , DOUBLE , 1
k8s_container
Number of log records failed to be added to the sending queue. Sampled every 60 seconds.
exporter :
exporter.
service_instance_id :
service_instance_id.
service_version :
service_version.
otelcol_exporter_enqueue_failed_metric_points
ALPHA
(project)
otelcol_exporter_enqueue_failed_metric_points
CUMULATIVE , DOUBLE , 1
k8s_container
Number of metric points failed to be added to the sending queue. Sampled every 60 seconds.
exporter :
exporter.
service_instance_id :
service_instance_id.
service_version :
service_version.
otelcol_exporter_enqueue_failed_spans
ALPHA
(project)
otelcol_exporter_enqueue_failed_spans
CUMULATIVE , DOUBLE , 1
k8s_container
Number of spans failed to be added to the sending queue. Sampled every 60 seconds.
exporter :
exporter.
service_instance_id :
service_instance_id.
service_version :
service_version.
otelcol_exporter_send_failed_metric_points
ALPHA
(project)
otelcol_exporter_send_failed_metric_points
CUMULATIVE , DOUBLE , 1
k8s_container
Number of metric points in failed attempts to send to destination. Sampled every 60 seconds.
exporter :
exporter.
service_instance_id :
service_instance_id.
service_version :
service_version.
otelcol_exporter_sent_metric_points
ALPHA
(project)
otelcol_exporter_sent_metric_points
CUMULATIVE , DOUBLE , 1
k8s_container
Number of metric points successfully sent to destination. Sampled every 60 seconds.
exporter :
exporter.
service_instance_id :
service_instance_id.
service_version :
service_version.
otelcol_googlecloudmonitoring_point_count
ALPHA
(project)
otelcol_googlecloudmonitoring_point_count
CUMULATIVE , DOUBLE , 1
k8s_container
Count of metric points written to Cloud Monitoring. Sampled every 60 seconds.
service_instance_id :
service_instance_id.
service_version :
service_version.
status :
status.
otelcol_grpc_io_client_completed_rpcs
ALPHA
(project)
otelcol_grpc_io_client_completed_rpcs
CUMULATIVE , DOUBLE , 1
k8s_container
Count of RPCs by method and status. Sampled every 60 seconds.
grpc_client_method :
grpc_client_method.
grpc_client_status :
grpc_client_status.
service_instance_id :
service_instance_id.
service_version :
service_version.
otelcol_grpc_io_client_received_bytes_per_rpc
ALPHA
(project)
otelcol_grpc_io_client_received_bytes_per_rpc
CUMULATIVE , DISTRIBUTION , 1
k8s_container
Distribution of bytes received per RPC, by method. Sampled every 60 seconds.
grpc_client_method :
grpc_client_method.
service_instance_id :
service_instance_id.
service_version :
service_version.
otelcol_grpc_io_client_roundtrip_latency
ALPHA
(project)
otelcol_grpc_io_client_roundtrip_latency
CUMULATIVE , DISTRIBUTION , 1
k8s_container
Distribution of round-trip latency, by method. Sampled every 60 seconds.
grpc_client_method :
grpc_client_method.
service_instance_id :
service_instance_id.
service_version :
service_version.
otelcol_grpc_io_client_sent_bytes_per_rpc
ALPHA
(project)
otelcol_grpc_io_client_sent_bytes_per_rpc
CUMULATIVE , DISTRIBUTION , 1
k8s_container
Distribution of bytes sent per RPC, by method. Sampled every 60 seconds.
grpc_client_method :
grpc_client_method.
service_instance_id :
service_instance_id.
service_version :
service_version.
otelcol_process_cpu_seconds
ALPHA
(project)
otelcol_process_cpu_seconds
GAUGE , DOUBLE , s
k8s_container
Total CPU user and system time in seconds. Sampled every 60 seconds.
service_instance_id :
service_instance_id.
service_version :
service_version.
otelcol_process_memory_rss
ALPHA
(project)
otelcol_process_memory_rss
GAUGE , DOUBLE , 1
k8s_container
Total physical memory (resident set size). Sampled every 60 seconds.
service_instance_id :
service_instance_id.
service_version :
service_version.
otelcol_process_runtime_heap_alloc_bytes
ALPHA
(project)
otelcol_process_runtime_heap_alloc_bytes
GAUGE , DOUBLE , By
k8s_container
Bytes of allocated heap objects. Sampled every 60 seconds.
service_instance_id :
service_instance_id.
service_version :
service_version.
otelcol_process_runtime_total_alloc_bytes
ALPHA
(project)
otelcol_process_runtime_total_alloc_bytes
GAUGE , DOUBLE , By
k8s_container
Cumulative bytes allocated for heap objects. Sampled every 60 seconds.
service_instance_id :
service_instance_id.
service_version :
service_version.
otelcol_process_runtime_total_sys_memory_bytes
ALPHA
(project)
otelcol_process_runtime_total_sys_memory_bytes
GAUGE , DOUBLE , By
k8s_container
Total bytes of memory obtained from the OS. Sampled every 60 seconds.
service_instance_id :
service_instance_id.
service_version :
service_version.
otelcol_process_uptime
ALPHA
(project)
otelcol_process_uptime
CUMULATIVE , DOUBLE , s
k8s_container
Uptime of the process. Sampled every 60 seconds.
service_instance_id :
service_instance_id.
service_version :
service_version.
otelcol_processor_accepted_metric_points
ALPHA
(project)
otelcol_processor_accepted_metric_points
CUMULATIVE , DOUBLE , 1
k8s_container
Number of metric points successfully pushed into the next component in the pipeline. Sampled every 60 seconds.
processor :
processor.
service_instance_id :
service_instance_id.
service_version :
service_version.
otelcol_processor_disk_buffer_buffered_batches
ALPHA
(project)
otelcol_processor_disk_buffer_buffered_batches
CUMULATIVE , DOUBLE , 1
k8s_container
Number of new coming data batches that was buffered into disk. Sampled every 60 seconds.
processor :
processor.
service_instance_id :
service_instance_id.
service_version :
service_version.
otelcol_processor_disk_buffer_bytes_per_batch
ALPHA
(project)
otelcol_processor_disk_buffer_bytes_per_batch
GAUGE , DOUBLE , By
k8s_container
Bytes in a batch. Sampled every 60 seconds.
processor :
processor.
service_instance_id :
service_instance_id.
service_version :
service_version.
otelcol_processor_disk_buffer_non_buffered_batches
ALPHA
(project)
otelcol_processor_disk_buffer_non_buffered_batches
CUMULATIVE , DOUBLE , 1
k8s_container
Number of new coming data batches that will be sent to backend in total. Sampled every 60 seconds.
processor :
processor.
service_instance_id :
service_instance_id.
service_version :
service_version.
otelcol_processor_disk_buffer_probed_network_status
ALPHA
(project)
otelcol_processor_disk_buffer_probed_network_status
GAUGE , DOUBLE , 1
k8s_container
Probed network status: 1 = connected, 0 = disconnected. Sampled every 60 seconds.
processor :
processor.
service_instance_id :
service_instance_id.
service_version :
service_version.
otelcol_processor_disk_buffer_sent_buffered_batches_failed
ALPHA
(project)
otelcol_processor_disk_buffer_sent_buffered_batches_failed
CUMULATIVE , DOUBLE , 1
k8s_container
Number of buffered data batches that failed to be sent to backend. Sampled every 60 seconds.
processor :
processor.
reason :
reason.
service_instance_id :
service_instance_id.
service_version :
service_version.
otelcol_processor_disk_buffer_sent_buffered_batches_succeeded
ALPHA
(project)
otelcol_processor_disk_buffer_sent_buffered_batches_succeeded
CUMULATIVE , DOUBLE , 1
k8s_container
Number of buffered data batches that was sent to backend. Sampled every 60 seconds.
processor :
processor.
service_instance_id :
service_instance_id.
service_version :
service_version.
otelcol_processor_disk_buffer_sent_non_buffered_batches_failed
ALPHA
(project)
otelcol_processor_disk_buffer_sent_non_buffered_batches_failed
CUMULATIVE , DOUBLE , 1
k8s_container
Number of new coming data batches that failed to be sent to backend. Sampled every 60 seconds.
processor :
processor.
service_instance_id :
service_instance_id.
service_version :
service_version.
otelcol_processor_disk_buffer_sent_non_buffered_batches_succeeded
ALPHA
(project)
otelcol_processor_disk_buffer_sent_non_buffered_batches_succeeded
CUMULATIVE , DOUBLE , 1
k8s_container
Number of new coming data batches that was sent to backend successfully. Sampled every 60 seconds.
processor :
processor.
service_instance_id :
service_instance_id.
service_version :
service_version.
otelcol_processor_disk_buffer_used_space_bytes
ALPHA
(project)
otelcol_processor_disk_buffer_used_space_bytes
GAUGE , DOUBLE , By
k8s_container
Total file bytes used under directory BufferDir. Sampled every 60 seconds.
processor :
processor.
service_instance_id :
service_instance_id.
service_version :
service_version.
otelcol_processor_dropped_metric_points
ALPHA
(project)
otelcol_processor_dropped_metric_points
CUMULATIVE , DOUBLE , 1
k8s_container
Number of metric points that were dropped. Sampled every 60 seconds.
processor :
processor.
service_instance_id :
service_instance_id.
service_version :
service_version.
otelcol_processor_refused_metric_points
ALPHA
(project)
otelcol_processor_refused_metric_points
CUMULATIVE , DOUBLE , 1
k8s_container
Number of metric points that were rejected by the next component in the pipeline. Sampled every 60 seconds.
processor :
processor.
service_instance_id :
service_instance_id.
service_version :
service_version.
otelcol_receiver_accepted_metric_points
ALPHA
(project)
otelcol_receiver_accepted_metric_points
CUMULATIVE , DOUBLE , 1
k8s_container
Number of metric points successfully pushed into the pipeline. Sampled every 60 seconds.
receiver :
receiver.
service_instance_id :
service_instance_id.
service_version :
service_version.
transport :
transport.
otelcol_receiver_refused_metric_points
ALPHA
(project)
otelcol_receiver_refused_metric_points
CUMULATIVE , DOUBLE , 1
k8s_container
Number of metric points that could not be pushed into the pipeline. Sampled every 60 seconds.
receiver :
receiver.
service_instance_id :
service_instance_id.
service_version :
service_version.
transport :
transport.
patroni_postgres_running
BETA
(project)
patroni_postgres_running
GAUGE , DOUBLE , 1
k8s_container
Value is 1 if Postgres is running, 0 otherwise. Sampled every 60 seconds.
name :
name.
scope :
scope.
patroni_postgres_timeline
BETA
(project)
patroni_postgres_timeline
CUMULATIVE , DOUBLE , 1
k8s_container
Postgres timeline of this node (if running), 0 otherwise. Sampled every 60 seconds.
name :
name.
scope :
scope.
patroni_primary
BETA
(project)
patroni_primary
GAUGE , DOUBLE , 1
k8s_container
Value is 1 if this node is the leader, 0 otherwise. Sampled every 60 seconds.
name :
name.
scope :
scope.
patroni_replica
BETA
(project)
patroni_replica
GAUGE , DOUBLE , 1
k8s_container
Value is 1 if this node is a replica, 0 otherwise. Sampled every 60 seconds.
name :
name.
scope :
scope.
patroni_standby_leader
BETA
(project)
patroni_standby_leader
GAUGE , DOUBLE , 1
k8s_container
Value is 1 if this node is the standby_leader, 0 otherwise. Sampled every 60 seconds.
name :
name.
scope :
scope.
patroni_sync_standby
BETA
(project)
patroni_sync_standby
GAUGE , DOUBLE , 1
k8s_container
Value is 1 if this node is a sync standby replica, 0 otherwise. Sampled every 60 seconds.
name :
name.
scope :
scope.
persistentvolume_protection_controller_rate_limiter_use
ALPHA
(project)
persistentvolume_protection_controller_rate_limiter_use
GAUGE , DOUBLE , 1
k8s_container
A metric measuring the saturation of the rate limiter for persistentvolume_protection_controller. Sampled every 60 seconds.
persistentvolume_protection_controller_rate_limiter_use/gauge
ALPHA
(project)
persistentvolume_protection_controller_rate_limiter_use
GAUGE , DOUBLE , 1
prometheus_target
A metric measuring the saturation of the rate limiter for persistentvolume_protection_controller. Sampled every 30 seconds.
persistentvolumeclaim_protection_controller_rate_limiter_use
ALPHA
(project)
persistentvolumeclaim_protection_controller_rate_limiter_use
GAUGE , DOUBLE , 1
k8s_container
A metric measuring the saturation of the rate limiter for persistentvolumeclaim_protection_controller. Sampled every 60 seconds.
persistentvolumeclaim_protection_controller_rate_limiter_use/gauge
ALPHA
(project)
persistentvolumeclaim_protection_controller_rate_limiter_use
GAUGE , DOUBLE , 1
prometheus_target
A metric measuring the saturation of the rate limiter for persistentvolumeclaim_protection_controller. Sampled every 30 seconds.
plugin_manager_total_plugins
ALPHA
(project)
plugin_manager_total_plugins
GAUGE , DOUBLE , 1
k8s_node
Number of plugins in Plugin Manager. Sampled every 60 seconds.
socket_path :
socket_path.
state :
state.
plugin_manager_update_duration_milliseconds
ALPHA
(project)
plugin_manager_update_duration_milliseconds
CUMULATIVE , DISTRIBUTION , 1
k8s_container
Time taken to process update requests. Sampled every 60 seconds.
plugin_manager_update_requests_total
ALPHA
(project)
plugin_manager_update_requests_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of update requests to plugin manager. Sampled every 60 seconds.
valid_request :
valid_request.
pod/network/received_bytes_count
ALPHA
(project)
Bytes received
CUMULATIVE , INT64 , By
k8s_pod
Cumulative number of bytes received by the pod over the network. Sampled every 60 seconds.
interface :
interface.
pod/network/sent_bytes_count
ALPHA
(project)
Bytes transmitted
CUMULATIVE , INT64 , By
k8s_pod
Cumulative number of bytes transmitted by the pod over the network. Sampled every 60 seconds.
interface :
interface.
pod/volume/total_bytes
ALPHA
(project)
Volume capacity
GAUGE , INT64 , By
k8s_pod
Total number of disk bytes available to the pod. Sampled every 60 seconds.
volume_name :
volume_name.
pod/volume/used_bytes
ALPHA
(project)
Volume usage
GAUGE , INT64 , By
k8s_pod
Number of disk bytes used by the pod. Sampled every 60 seconds.
volume_name :
volume_name.
pod/volume/utilization
ALPHA
(project)
Volume utilization
GAUGE , DOUBLE , 1
k8s_pod
The fraction of the volume that is currently being used by the instance. This value cannot be greater than 1 as usage cannot exceed the total available volume space. Sampled every 60 seconds. After sampling, data is not visible for up to 120 seconds.
volume_name :
The name of the volume (e.g. `/dev/sda1`).
pod_security_evaluations_total
ALPHA
(project)
pod_security_evaluations_total
CUMULATIVE , DOUBLE , 1
k8s_container
[ALPHA] Number of policy evaluations that occurred, not counting ignored or exempt requests. Sampled every 60 seconds.
decision :
decision.
mode :
mode.
policy_level :
policy_level.
policy_version :
policy_version.
request_operation :
request_operation.
resource :
resource.
pod_security_exemptions_total
ALPHA
(project)
pod_security_exemptions_total
CUMULATIVE , DOUBLE , 1
k8s_container
[ALPHA] Number of exempt requests, not counting ignored or out of scope requests. Sampled every 60 seconds.
request_operation :
request_operation.
resource :
resource.
pod_security_exemptions_total/counter
ALPHA
(project)
pod_security_exemptions_total
CUMULATIVE , DOUBLE , 1
prometheus_target
[ALPHA] Number of exempt requests, not counting ignored or out of scope requests. Sampled every 30 seconds.
request_operation :
request_operation.
resource :
resource.
policy_event_count
ALPHA
(project)
policy_event_count
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of network policy events seen in the dataplane. Sampled every 60 seconds.
direction :
direction.
policy_enforced_namespace :
policy_enforced_namespace.
policy_enforced_pod :
policy_enforced_pod.
verdict :
verdict.
workload_kind :
workload_kind.
workload_name :
workload_name.
policy_logging_allow_latency_microseconds
ALPHA
(project)
policy_logging_allow_latency_microseconds
CUMULATIVE , DISTRIBUTION , us
k8s_container
Histogram of the time in microseconds from seeing a policy allow event to writing the log to disk. Sampled every 60 seconds.
policy_logging_deny_latency_seconds
ALPHA
(project)
policy_logging_deny_latency_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
Histogram of the time in seconds from seeing a new policy deny event to writing a log to disk. Sampled every 60 seconds.
policy_logging_event_count
ALPHA
(project)
policy_logging_event_count
CUMULATIVE , DOUBLE , 1
k8s_container
Total policy events seen. Sampled every 60 seconds.
verdict :
verdict.
policy_logging_ready
ALPHA
(project)
policy_logging_ready
GAUGE , DOUBLE , 1
k8s_container
Whether policy logging is ready on the node. Sampled every 60 seconds.
prober_probe_duration_seconds/histogram
ALPHA
(project)
prober_probe_duration_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
[ALPHA] Duration in seconds for a probe response. Sampled every 30 seconds.
container :
container.
pod :
pod.
probe_type :
probe_type.
prober_probe_total/counter
ALPHA
(project)
prober_probe_total
CUMULATIVE , DOUBLE , 1
prometheus_target
[ALPHA] Cumulative number of a liveness, readiness or startup probe for a container by result. Sampled every 30 seconds.
container :
container.
pod :
pod.
pod_uid :
pod_uid.
probe_type :
probe_type.
result :
result.
process_cpu_seconds_total
ALPHA
(project)
process_cpu_seconds_total
CUMULATIVE , DOUBLE , s
k8s_container
k8s_node
k8s_pod
Total user and system CPU time spent in seconds. Sampled every 60 seconds.
process_cpu_seconds_total/counter
ALPHA
(project)
process_cpu_seconds_total
CUMULATIVE , DOUBLE , s
prometheus_target
Total user and system CPU time spent in seconds. Sampled every 30 seconds.
process_max_fds
ALPHA
(project)
process_max_fds
GAUGE , DOUBLE , 1
k8s_container
k8s_node
k8s_pod
Maximum number of open file descriptors. Sampled every 60 seconds.
process_max_fds/gauge
ALPHA
(project)
process_max_fds
GAUGE , DOUBLE , 1
prometheus_target
Maximum number of open file descriptors. Sampled every 30 seconds.
process_open_fds
ALPHA
(project)
process_open_fds
GAUGE , DOUBLE , 1
k8s_container
k8s_node
k8s_pod
Number of open file descriptors. Sampled every 60 seconds.
process_open_fds/gauge
ALPHA
(project)
process_open_fds
GAUGE , DOUBLE , 1
prometheus_target
Number of open file descriptors. Sampled every 30 seconds.
process_resident_memory_bytes
ALPHA
(project)
process_resident_memory_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
k8s_pod
Resident memory size in bytes. Sampled every 60 seconds.
process_resident_memory_bytes/gauge
ALPHA
(project)
process_resident_memory_bytes
GAUGE , DOUBLE , By
prometheus_target
Resident memory size in bytes. Sampled every 30 seconds.
process_start_time_seconds
ALPHA
(project)
process_start_time_seconds
GAUGE , DOUBLE , s
k8s_container
k8s_node
k8s_pod
Start time of the process since unix epoch in seconds. Sampled every 60 seconds.
process_start_time_seconds/gauge
ALPHA
(project)
process_start_time_seconds
GAUGE , DOUBLE , s
prometheus_target
Start time of the process since unix epoch in seconds. Sampled every 30 seconds.
process_virtual_memory_bytes
ALPHA
(project)
process_virtual_memory_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
k8s_pod
Virtual memory size in bytes. Sampled every 60 seconds.
process_virtual_memory_bytes/gauge
ALPHA
(project)
process_virtual_memory_bytes
GAUGE , DOUBLE , By
prometheus_target
Virtual memory size in bytes. Sampled every 30 seconds.
process_virtual_memory_max_bytes
ALPHA
(project)
process_virtual_memory_max_bytes
GAUGE , DOUBLE , By
k8s_container
k8s_node
k8s_pod
Maximum amount of virtual memory available in bytes. Sampled every 60 seconds.
prometheus_api_remote_read_queries
ALPHA
(project)
prometheus_api_remote_read_queries
GAUGE , DOUBLE , 1
k8s_container
The current number of remote read queries being executed or waiting. Sampled every 60 seconds.
prometheus_build_info
ALPHA
(project)
prometheus_build_info
GAUGE , DOUBLE , 1
k8s_container
A metric with a constant '1' value labeled by version, revision, branch, and goversion from which prometheus was built. Sampled every 60 seconds.
branch :
branch.
goversion :
goversion.
revision :
revision.
version :
version.
prometheus_config_last_reload_success_timestamp_seconds
ALPHA
(project)
prometheus_config_last_reload_success_timestamp_seconds
GAUGE , DOUBLE , s
k8s_container
Timestamp of the last successful configuration reload. Sampled every 60 seconds.
prometheus_config_last_reload_successful
ALPHA
(project)
prometheus_config_last_reload_successful
GAUGE , DOUBLE , 1
k8s_container
Whether the last configuration reload attempt was successful. Sampled every 60 seconds.
prometheus_engine_queries
ALPHA
(project)
prometheus_engine_queries
GAUGE , DOUBLE , 1
k8s_container
The current number of queries being executed or waiting. Sampled every 60 seconds.
prometheus_engine_queries_concurrent_max
ALPHA
(project)
prometheus_engine_queries_concurrent_max
GAUGE , DOUBLE , 1
k8s_container
The max number of concurrent queries. Sampled every 60 seconds.
prometheus_engine_query_duration_seconds
ALPHA
(project)
prometheus_engine_query_duration_seconds
GAUGE , DOUBLE , s
k8s_container
Query timings. Sampled every 60 seconds.
quantile :
quantile.
slice :
slice.
prometheus_engine_query_duration_seconds_count
ALPHA
(project)
prometheus_engine_query_duration_seconds_count
CUMULATIVE , INT64 , 1
k8s_container
Query timings. Sampled every 60 seconds.
slice :
slice.
prometheus_engine_query_duration_seconds_sum
ALPHA
(project)
prometheus_engine_query_duration_seconds_sum
CUMULATIVE , DOUBLE , 1
k8s_container
Query timings. Sampled every 60 seconds.
slice :
slice.
prometheus_engine_query_log_enabled
ALPHA
(project)
prometheus_engine_query_log_enabled
GAUGE , DOUBLE , 1
k8s_container
State of the query log. Sampled every 60 seconds.
prometheus_engine_query_log_failures_total
ALPHA
(project)
prometheus_engine_query_log_failures_total
CUMULATIVE , DOUBLE , 1
k8s_container
The number of query log failures. Sampled every 60 seconds.
prometheus_http_request_duration_seconds
ALPHA
(project)
prometheus_http_request_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
Histogram of latencies for HTTP requests. Sampled every 60 seconds.
handler :
handler.
prometheus_http_requests_total
ALPHA
(project)
prometheus_http_requests_total
CUMULATIVE , DOUBLE , 1
k8s_container
Counter of HTTP requests. Sampled every 60 seconds.
code :
code.
handler :
handler.
prometheus_http_response_size_bytes
ALPHA
(project)
prometheus_http_response_size_bytes
CUMULATIVE , DISTRIBUTION , By
k8s_container
Histogram of response size for HTTP requests. Sampled every 60 seconds.
handler :
handler.
prometheus_notifications_alertmanagers_discovered
ALPHA
(project)
prometheus_notifications_alertmanagers_discovered
GAUGE , DOUBLE , 1
k8s_container
The number of alertmanagers discovered and active. Sampled every 60 seconds.
prometheus_notifications_dropped_total
ALPHA
(project)
prometheus_notifications_dropped_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of alerts dropped due to errors when sending to Alertmanager. Sampled every 60 seconds.
prometheus_notifications_errors_total
ALPHA
(project)
prometheus_notifications_errors_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of errors sending alert notifications. Sampled every 60 seconds.
alertmanager :
alertmanager.
prometheus_notifications_latency_seconds
ALPHA
(project)
prometheus_notifications_latency_seconds
GAUGE , DOUBLE , s
k8s_container
Latency quantiles for sending alert notifications. Sampled every 60 seconds.
alertmanager :
alertmanager.
quantile :
quantile.
prometheus_notifications_latency_seconds_count
ALPHA
(project)
prometheus_notifications_latency_seconds_count
CUMULATIVE , INT64 , 1
k8s_container
Latency quantiles for sending alert notifications. Sampled every 60 seconds.
alertmanager :
alertmanager.
prometheus_notifications_latency_seconds_sum
ALPHA
(project)
prometheus_notifications_latency_seconds_sum
CUMULATIVE , DOUBLE , 1
k8s_container
Latency quantiles for sending alert notifications. Sampled every 60 seconds.
alertmanager :
alertmanager.
prometheus_notifications_queue_capacity
ALPHA
(project)
prometheus_notifications_queue_capacity
GAUGE , DOUBLE , 1
k8s_container
The capacity of the alert notifications queue. Sampled every 60 seconds.
prometheus_notifications_queue_length
ALPHA
(project)
prometheus_notifications_queue_length
GAUGE , DOUBLE , 1
k8s_container
The number of alert notifications in the queue. Sampled every 60 seconds.
prometheus_notifications_sent_total
ALPHA
(project)
prometheus_notifications_sent_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of alerts sent. Sampled every 60 seconds.
alertmanager :
alertmanager.
prometheus_remote_storage_dropped_samples_total
ALPHA
(project)
prometheus_remote_storage_dropped_samples_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of samples which were dropped due to the queue being full. Sampled every 60 seconds.
queue :
queue.
prometheus_remote_storage_exemplars_in_total
ALPHA
(project)
prometheus_remote_storage_exemplars_in_total
CUMULATIVE , DOUBLE , 1
k8s_container
Exemplars in to remote storage, compare to exemplars out for queue managers. Sampled every 60 seconds.
prometheus_remote_storage_failed_samples_total
ALPHA
(project)
prometheus_remote_storage_failed_samples_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of samples which failed on send to remote storage. Sampled every 60 seconds.
queue :
queue.
prometheus_remote_storage_highest_timestamp_in_seconds
ALPHA
(project)
prometheus_remote_storage_highest_timestamp_in_seconds
GAUGE , DOUBLE , s
k8s_container
Highest timestamp that has come into the remote storage via the Appender interface, in seconds since epoch. Sampled every 60 seconds.
prometheus_remote_storage_queue_capacity
ALPHA
(project)
prometheus_remote_storage_queue_capacity
GAUGE , DOUBLE , 1
k8s_container
The capacity of the queue of samples to be sent to the remote storage. Sampled every 60 seconds.
queue :
queue.
prometheus_remote_storage_queue_length
ALPHA
(project)
prometheus_remote_storage_queue_length
GAUGE , DOUBLE , 1
k8s_container
The number of processed samples queued to be sent to the remote storage. Sampled every 60 seconds.
queue :
queue.
prometheus_remote_storage_samples_in_total
ALPHA
(project)
prometheus_remote_storage_samples_in_total
CUMULATIVE , DOUBLE , 1
k8s_container
Samples in to remote storage, compare to samples out for queue managers. Sampled every 60 seconds.
prometheus_remote_storage_sent_batch_duration_seconds
ALPHA
(project)
prometheus_remote_storage_sent_batch_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
Duration of sample batch send calls to the remote storage. Sampled every 60 seconds.
queue :
queue.
prometheus_remote_storage_shards
ALPHA
(project)
prometheus_remote_storage_shards
GAUGE , DOUBLE , 1
k8s_container
The number of shards used for parallel sending to the remote storage. Sampled every 60 seconds.
queue :
queue.
prometheus_remote_storage_string_interner_zero_reference_releases_total
ALPHA
(project)
prometheus_remote_storage_string_interner_zero_reference_releases_total
CUMULATIVE , DOUBLE , 1
k8s_container
The number of times release has been called for strings that are not interned. Sampled every 60 seconds.
prometheus_remote_storage_succeeded_samples_total
ALPHA
(project)
prometheus_remote_storage_succeeded_samples_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of samples successfully sent to remote storage. Sampled every 60 seconds.
queue :
queue.
prometheus_rule_evaluation_duration_seconds
ALPHA
(project)
prometheus_rule_evaluation_duration_seconds
GAUGE , DOUBLE , s
k8s_container
The duration for a rule to execute. Sampled every 60 seconds.
quantile :
quantile.
prometheus_rule_evaluation_duration_seconds_count
ALPHA
(project)
prometheus_rule_evaluation_duration_seconds_count
CUMULATIVE , INT64 , 1
k8s_container
The duration for a rule to execute. Sampled every 60 seconds.
prometheus_rule_evaluation_duration_seconds_sum
ALPHA
(project)
prometheus_rule_evaluation_duration_seconds_sum
CUMULATIVE , DOUBLE , 1
k8s_container
The duration for a rule to execute. Sampled every 60 seconds.
prometheus_rule_evaluation_failures_total
ALPHA
(project)
prometheus_rule_evaluation_failures_total
CUMULATIVE , DOUBLE , 1
k8s_container
The total number of rule evaluation failures. Sampled every 60 seconds.
rule_group :
rule_group.
prometheus_rule_evaluations_total
ALPHA
(project)
prometheus_rule_evaluations_total
CUMULATIVE , DOUBLE , 1
k8s_container
The total number of rule evaluations. Sampled every 60 seconds.
rule_group :
rule_group.
prometheus_rule_group_duration_seconds
ALPHA
(project)
prometheus_rule_group_duration_seconds
GAUGE , DOUBLE , s
k8s_container
The duration of rule group evaluations. Sampled every 60 seconds.
quantile :
quantile.
prometheus_rule_group_duration_seconds_count
ALPHA
(project)
prometheus_rule_group_duration_seconds_count
CUMULATIVE , INT64 , 1
k8s_container
The duration of rule group evaluations. Sampled every 60 seconds.
prometheus_rule_group_duration_seconds_sum
ALPHA
(project)
prometheus_rule_group_duration_seconds_sum
CUMULATIVE , DOUBLE , 1
k8s_container
The duration of rule group evaluations. Sampled every 60 seconds.
prometheus_rule_group_interval_seconds
ALPHA
(project)
prometheus_rule_group_interval_seconds
GAUGE , DOUBLE , s
k8s_container
The interval of a rule group. Sampled every 60 seconds.
rule_group :
rule_group.
prometheus_rule_group_iterations_missed_total
ALPHA
(project)
prometheus_rule_group_iterations_missed_total
CUMULATIVE , DOUBLE , 1
k8s_container
The total number of rule group evaluations missed due to slow rule group evaluation. Sampled every 60 seconds.
prometheus_rule_group_iterations_total
ALPHA
(project)
prometheus_rule_group_iterations_total
CUMULATIVE , DOUBLE , 1
k8s_container
The total number of scheduled rule group evaluations, whether executed or missed. Sampled every 60 seconds.
prometheus_rule_group_last_duration_seconds
ALPHA
(project)
prometheus_rule_group_last_duration_seconds
GAUGE , DOUBLE , s
k8s_container
The duration of the last rule group evaluation. Sampled every 60 seconds.
rule_group :
rule_group.
prometheus_rule_group_last_evaluation_timestamp_seconds
ALPHA
(project)
prometheus_rule_group_last_evaluation_timestamp_seconds
GAUGE , DOUBLE , s
k8s_container
The timestamp of the last rule group evaluation in seconds. Sampled every 60 seconds.
rule_group :
rule_group.
prometheus_rule_group_rules
ALPHA
(project)
prometheus_rule_group_rules
GAUGE , DOUBLE , 1
k8s_container
The number of rules. Sampled every 60 seconds.
rule_group :
rule_group.
prometheus_sd_azure_refresh_duration_seconds
ALPHA
(project)
prometheus_sd_azure_refresh_duration_seconds
GAUGE , DOUBLE , s
k8s_container
The duration of a Azure-SD refresh in seconds. Sampled every 60 seconds.
quantile :
quantile.
prometheus_sd_azure_refresh_duration_seconds_count
ALPHA
(project)
prometheus_sd_azure_refresh_duration_seconds_count
CUMULATIVE , INT64 , 1
k8s_container
The duration of a Azure-SD refresh in seconds. Sampled every 60 seconds.
prometheus_sd_azure_refresh_duration_seconds_sum
ALPHA
(project)
prometheus_sd_azure_refresh_duration_seconds_sum
CUMULATIVE , DOUBLE , 1
k8s_container
The duration of a Azure-SD refresh in seconds. Sampled every 60 seconds.
prometheus_sd_azure_refresh_failures_total
ALPHA
(project)
prometheus_sd_azure_refresh_failures_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of Azure-SD refresh failures. Sampled every 60 seconds.
prometheus_sd_configs_failed_total
ALPHA
(project)
prometheus_sd_configs_failed_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of service discovery configurations that failed to load. Sampled every 60 seconds.
prometheus_sd_consul_rpc_duration_seconds
ALPHA
(project)
prometheus_sd_consul_rpc_duration_seconds
GAUGE , DOUBLE , s
k8s_container
The duration of a Consul RPC call in seconds. Sampled every 60 seconds.
call :
call.
endpoint :
endpoint.
quantile :
quantile.
prometheus_sd_consul_rpc_duration_seconds_count
ALPHA
(project)
prometheus_sd_consul_rpc_duration_seconds_count
CUMULATIVE , INT64 , 1
k8s_container
The duration of a Consul RPC call in seconds. Sampled every 60 seconds.
call :
call.
endpoint :
endpoint.
prometheus_sd_consul_rpc_duration_seconds_sum
ALPHA
(project)
prometheus_sd_consul_rpc_duration_seconds_sum
CUMULATIVE , DOUBLE , 1
k8s_container
The duration of a Consul RPC call in seconds. Sampled every 60 seconds.
call :
call.
endpoint :
endpoint.
prometheus_sd_consul_rpc_failures_total
ALPHA
(project)
prometheus_sd_consul_rpc_failures_total
CUMULATIVE , DOUBLE , 1
k8s_container
The number of Consul RPC call failures. Sampled every 60 seconds.
prometheus_sd_discovered_targets
ALPHA
(project)
prometheus_sd_discovered_targets
GAUGE , DOUBLE , 1
k8s_container
Current number of discovered targets. Sampled every 60 seconds.
config :
config.
name :
name.
prometheus_sd_dns_lookup_failures_total
ALPHA
(project)
prometheus_sd_dns_lookup_failures_total
CUMULATIVE , DOUBLE , 1
k8s_container
The number of DNS-SD lookup failures. Sampled every 60 seconds.
prometheus_sd_dns_lookups_total
ALPHA
(project)
prometheus_sd_dns_lookups_total
CUMULATIVE , DOUBLE , 1
k8s_container
The number of DNS-SD lookups. Sampled every 60 seconds.
prometheus_sd_ec2_refresh_duration_seconds
ALPHA
(project)
prometheus_sd_ec2_refresh_duration_seconds
GAUGE , DOUBLE , s
k8s_container
The duration of a EC2-SD refresh in seconds. Sampled every 60 seconds.
quantile :
quantile.
prometheus_sd_ec2_refresh_duration_seconds_count
ALPHA
(project)
prometheus_sd_ec2_refresh_duration_seconds_count
CUMULATIVE , INT64 , 1
k8s_container
The duration of a EC2-SD refresh in seconds. Sampled every 60 seconds.
prometheus_sd_ec2_refresh_duration_seconds_sum
ALPHA
(project)
prometheus_sd_ec2_refresh_duration_seconds_sum
CUMULATIVE , DOUBLE , 1
k8s_container
The duration of a EC2-SD refresh in seconds. Sampled every 60 seconds.
prometheus_sd_ec2_refresh_failures_total
ALPHA
(project)
prometheus_sd_ec2_refresh_failures_total
CUMULATIVE , DOUBLE , 1
k8s_container
The number of EC2-SD scrape failures. Sampled every 60 seconds.
prometheus_sd_failed_configs
ALPHA
(project)
prometheus_sd_failed_configs
GAUGE , DOUBLE , 1
k8s_container
Current number of service discovery configurations that failed to load. Sampled every 60 seconds.
name :
name.
prometheus_sd_file_mtime_seconds
ALPHA
(project)
prometheus_sd_file_mtime_seconds
GAUGE , DOUBLE , s
k8s_container
Timestamp (mtime) of files read by FileSD. Timestamp is set at read time. Sampled every 60 seconds.
filename :
filename.
prometheus_sd_file_read_errors_total
ALPHA
(project)
prometheus_sd_file_read_errors_total
CUMULATIVE , DOUBLE , 1
k8s_container
The number of File-SD read errors. Sampled every 60 seconds.
prometheus_sd_file_scan_duration_seconds
ALPHA
(project)
prometheus_sd_file_scan_duration_seconds
GAUGE , DOUBLE , s
k8s_container
The duration of the File-SD scan in seconds. Sampled every 60 seconds.
quantile :
quantile.
prometheus_sd_file_scan_duration_seconds_count
ALPHA
(project)
prometheus_sd_file_scan_duration_seconds_count
CUMULATIVE , INT64 , 1
k8s_container
The duration of the File-SD scan in seconds. Sampled every 60 seconds.
prometheus_sd_file_scan_duration_seconds_sum
ALPHA
(project)
prometheus_sd_file_scan_duration_seconds_sum
CUMULATIVE , DOUBLE , 1
k8s_container
The duration of the File-SD scan in seconds. Sampled every 60 seconds.
prometheus_sd_gce_refresh_duration
ALPHA
(project)
prometheus_sd_gce_refresh_duration
GAUGE , DOUBLE , 1
k8s_container
The duration of a Compute Engine SD refresh in seconds. Sampled every 60 seconds.
quantile :
quantile.
prometheus_sd_gce_refresh_duration_count
ALPHA
(project)
prometheus_sd_gce_refresh_duration_count
CUMULATIVE , INT64 , 1
k8s_container
The duration of a Compute Engine SD refresh in seconds. Sampled every 60 seconds.
prometheus_sd_gce_refresh_duration_sum
ALPHA
(project)
prometheus_sd_gce_refresh_duration_sum
CUMULATIVE , DOUBLE , 1
k8s_container
The duration of a Compute Engine SD refresh in seconds. Sampled every 60 seconds.
prometheus_sd_gce_refresh_failures_total
ALPHA
(project)
prometheus_sd_gce_refresh_failures_total
CUMULATIVE , DOUBLE , 1
k8s_container
The number of Compute Engine SD refresh failures. Sampled every 60 seconds.
prometheus_sd_kubernetes_cache_last_resource_version
ALPHA
(project)
prometheus_sd_kubernetes_cache_last_resource_version
GAUGE , DOUBLE , 1
k8s_container
Last resource version from the Kubernetes API. Sampled every 60 seconds.
prometheus_sd_kubernetes_cache_list_duration_seconds_count
ALPHA
(project)
prometheus_sd_kubernetes_cache_list_duration_seconds_count
CUMULATIVE , INT64 , 1
k8s_container
Duration of a Kubernetes API call in seconds. Sampled every 60 seconds.
prometheus_sd_kubernetes_cache_list_duration_seconds_sum
ALPHA
(project)
prometheus_sd_kubernetes_cache_list_duration_seconds_sum
CUMULATIVE , DOUBLE , 1
k8s_container
Duration of a Kubernetes API call in seconds. Sampled every 60 seconds.
prometheus_sd_kubernetes_cache_list_items_count
ALPHA
(project)
prometheus_sd_kubernetes_cache_list_items_count
CUMULATIVE , INT64 , 1
k8s_container
Count of items in a list from the Kubernetes API. Sampled every 60 seconds.
prometheus_sd_kubernetes_cache_list_items_sum
ALPHA
(project)
prometheus_sd_kubernetes_cache_list_items_sum
CUMULATIVE , DOUBLE , 1
k8s_container
Count of items in a list from the Kubernetes API. Sampled every 60 seconds.
prometheus_sd_kubernetes_cache_list_total
ALPHA
(project)
prometheus_sd_kubernetes_cache_list_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of list operations. Sampled every 60 seconds.
prometheus_sd_kubernetes_cache_short_watches_total
ALPHA
(project)
prometheus_sd_kubernetes_cache_short_watches_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of short watch operations. Sampled every 60 seconds.
prometheus_sd_kubernetes_cache_watch_duration_seconds_count
ALPHA
(project)
prometheus_sd_kubernetes_cache_watch_duration_seconds_count
CUMULATIVE , INT64 , 1
k8s_container
Duration of watches on the Kubernetes API. Sampled every 60 seconds.
prometheus_sd_kubernetes_cache_watch_duration_seconds_sum
ALPHA
(project)
prometheus_sd_kubernetes_cache_watch_duration_seconds_sum
CUMULATIVE , DOUBLE , 1
k8s_container
Duration of watches on the Kubernetes API. Sampled every 60 seconds.
prometheus_sd_kubernetes_cache_watch_events_count
ALPHA
(project)
prometheus_sd_kubernetes_cache_watch_events_count
CUMULATIVE , INT64 , 1
k8s_container
Number of items in watches on the Kubernetes API. Sampled every 60 seconds.
prometheus_sd_kubernetes_cache_watch_events_sum
ALPHA
(project)
prometheus_sd_kubernetes_cache_watch_events_sum
CUMULATIVE , DOUBLE , 1
k8s_container
Number of items in watches on the Kubernetes API. Sampled every 60 seconds.
prometheus_sd_kubernetes_cache_watches_total
ALPHA
(project)
prometheus_sd_kubernetes_cache_watches_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of watch operations. Sampled every 60 seconds.
prometheus_sd_kubernetes_events_total
ALPHA
(project)
prometheus_sd_kubernetes_events_total
CUMULATIVE , DOUBLE , 1
k8s_container
The number of Kubernetes events handled. Sampled every 60 seconds.
event :
event.
role :
role.
prometheus_sd_kubernetes_http_request_duration_seconds_count
ALPHA
(project)
prometheus_sd_kubernetes_http_request_duration_seconds_count
CUMULATIVE , INT64 , 1
k8s_container
Summary of latencies for HTTP requests to the Kubernetes API by endpoint. Sampled every 60 seconds.
endpoint :
endpoint.
prometheus_sd_kubernetes_http_request_duration_seconds_sum
ALPHA
(project)
prometheus_sd_kubernetes_http_request_duration_seconds_sum
CUMULATIVE , DOUBLE , 1
k8s_container
Summary of latencies for HTTP requests to the Kubernetes API by endpoint. Sampled every 60 seconds.
endpoint :
endpoint.
prometheus_sd_kubernetes_http_request_total
ALPHA
(project)
prometheus_sd_kubernetes_http_request_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of HTTP requests to the Kubernetes API by status code. Sampled every 60 seconds.
status_code :
status_code.
prometheus_sd_kubernetes_workqueue_depth
ALPHA
(project)
prometheus_sd_kubernetes_workqueue_depth
GAUGE , DOUBLE , 1
k8s_container
Current depth of the work queue. Sampled every 60 seconds.
queue_name :
queue_name.
prometheus_sd_kubernetes_workqueue_items_total
ALPHA
(project)
prometheus_sd_kubernetes_workqueue_items_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of items added to the work queue. Sampled every 60 seconds.
queue_name :
queue_name.
prometheus_sd_kubernetes_workqueue_latency_seconds_count
ALPHA
(project)
prometheus_sd_kubernetes_workqueue_latency_seconds_count
CUMULATIVE , INT64 , 1
k8s_container
How long an item stays in the work queue. Sampled every 60 seconds.
queue_name :
queue_name.
prometheus_sd_kubernetes_workqueue_latency_seconds_sum
ALPHA
(project)
prometheus_sd_kubernetes_workqueue_latency_seconds_sum
CUMULATIVE , DOUBLE , 1
k8s_container
How long an item stays in the work queue. Sampled every 60 seconds.
queue_name :
queue_name.
prometheus_sd_kubernetes_workqueue_longest_running_processor_seconds
ALPHA
(project)
prometheus_sd_kubernetes_workqueue_longest_running_processor_seconds
GAUGE , DOUBLE , s
k8s_container
Duration of the longest running processor in the work queue. Sampled every 60 seconds.
queue_name :
queue_name.
prometheus_sd_kubernetes_workqueue_unfinished_work_seconds
ALPHA
(project)
prometheus_sd_kubernetes_workqueue_unfinished_work_seconds
GAUGE , DOUBLE , s
k8s_container
How long an item has remained unfinished in the work queue. Sampled every 60 seconds.
queue_name :
queue_name.
prometheus_sd_kubernetes_workqueue_work_duration_seconds_count
ALPHA
(project)
prometheus_sd_kubernetes_workqueue_work_duration_seconds_count
CUMULATIVE , INT64 , 1
k8s_container
How long processing an item from the work queue takes. Sampled every 60 seconds.
queue_name :
queue_name.
prometheus_sd_kubernetes_workqueue_work_duration_seconds_sum
ALPHA
(project)
prometheus_sd_kubernetes_workqueue_work_duration_seconds_sum
CUMULATIVE , DOUBLE , 1
k8s_container
How long processing an item from the work queue takes. Sampled every 60 seconds.
queue_name :
queue_name.
prometheus_sd_marathon_refresh_duration_seconds
ALPHA
(project)
prometheus_sd_marathon_refresh_duration_seconds
GAUGE , DOUBLE , s
k8s_container
The duration of a Marathon-SD refresh in seconds. Sampled every 60 seconds.
quantile :
quantile.
prometheus_sd_marathon_refresh_duration_seconds_count
ALPHA
(project)
prometheus_sd_marathon_refresh_duration_seconds_count
CUMULATIVE , INT64 , 1
k8s_container
The duration of a Marathon-SD refresh in seconds. Sampled every 60 seconds.
prometheus_sd_marathon_refresh_duration_seconds_sum
ALPHA
(project)
prometheus_sd_marathon_refresh_duration_seconds_sum
CUMULATIVE , DOUBLE , 1
k8s_container
The duration of a Marathon-SD refresh in seconds. Sampled every 60 seconds.
prometheus_sd_marathon_refresh_failures_total
ALPHA
(project)
prometheus_sd_marathon_refresh_failures_total
CUMULATIVE , DOUBLE , 1
k8s_container
The number of Marathon-SD refresh failures. Sampled every 60 seconds.
prometheus_sd_openstack_refresh_duration_seconds
ALPHA
(project)
prometheus_sd_openstack_refresh_duration_seconds
GAUGE , DOUBLE , s
k8s_container
The duration of an OpenStack-SD refresh in seconds. Sampled every 60 seconds.
quantile :
quantile.
prometheus_sd_openstack_refresh_duration_seconds_count
ALPHA
(project)
prometheus_sd_openstack_refresh_duration_seconds_count
CUMULATIVE , INT64 , 1
k8s_container
The duration of an OpenStack-SD refresh in seconds. Sampled every 60 seconds.
prometheus_sd_openstack_refresh_duration_seconds_sum
ALPHA
(project)
prometheus_sd_openstack_refresh_duration_seconds_sum
CUMULATIVE , DOUBLE , 1
k8s_container
The duration of an OpenStack-SD refresh in seconds. Sampled every 60 seconds.
prometheus_sd_openstack_refresh_failures_total
ALPHA
(project)
prometheus_sd_openstack_refresh_failures_total
CUMULATIVE , DOUBLE , 1
k8s_container
The number of OpenStack-SD scrape failures. Sampled every 60 seconds.
prometheus_sd_received_updates_total
ALPHA
(project)
prometheus_sd_received_updates_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of update events received from the SD providers. Sampled every 60 seconds.
name :
name.
prometheus_sd_triton_refresh_duration_seconds
ALPHA
(project)
prometheus_sd_triton_refresh_duration_seconds
GAUGE , DOUBLE , s
k8s_container
The duration of a Triton-SD refresh in seconds. Sampled every 60 seconds.
quantile :
quantile.
prometheus_sd_triton_refresh_duration_seconds_count
ALPHA
(project)
prometheus_sd_triton_refresh_duration_seconds_count
CUMULATIVE , INT64 , 1
k8s_container
The duration of a Triton-SD refresh in seconds. Sampled every 60 seconds.
prometheus_sd_triton_refresh_duration_seconds_sum
ALPHA
(project)
prometheus_sd_triton_refresh_duration_seconds_sum
CUMULATIVE , DOUBLE , 1
k8s_container
The duration of a Triton-SD refresh in seconds. Sampled every 60 seconds.
prometheus_sd_triton_refresh_failures_total
ALPHA
(project)
prometheus_sd_triton_refresh_failures_total
CUMULATIVE , DOUBLE , 1
k8s_container
The number of Triton-SD scrape failures. Sampled every 60 seconds.
prometheus_sd_updates_delayed_total
ALPHA
(project)
prometheus_sd_updates_delayed_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of update events that couldn't be sent immediately. Sampled every 60 seconds.
name :
name.
prometheus_sd_updates_total
ALPHA
(project)
prometheus_sd_updates_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of update events sent to the SD consumers. Sampled every 60 seconds.
name :
name.
prometheus_sidecar_batches_processed
ALPHA
(project)
prometheus_sidecar_batches_processed
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of sample batches processed. Sampled every 60 seconds.
prometheus_sidecar_dropped_series
ALPHA
(project)
prometheus_sidecar_dropped_series
CUMULATIVE , DOUBLE , 1
k8s_container
Number of series that were dropped instead of being sent to Stackdriver. Sampled every 60 seconds.
reason :
reason.
prometheus_sidecar_samples_processed
ALPHA
(project)
prometheus_sidecar_samples_processed
CUMULATIVE , DOUBLE , 1
k8s_container
Number of WAL samples processed. Sampled every 60 seconds.
prometheus_sidecar_samples_produced
ALPHA
(project)
prometheus_sidecar_samples_produced
CUMULATIVE , DOUBLE , 1
k8s_container
Number of Stackdriver samples produced. Sampled every 60 seconds.
prometheus_target_interval_length_seconds
ALPHA
(project)
prometheus_target_interval_length_seconds
GAUGE , DOUBLE , s
k8s_container
Actual intervals between scrapes. Sampled every 60 seconds.
interval :
interval.
quantile :
quantile.
prometheus_target_interval_length_seconds_count
ALPHA
(project)
prometheus_target_interval_length_seconds_count
CUMULATIVE , INT64 , 1
k8s_container
Actual intervals between scrapes. Sampled every 60 seconds.
interval :
interval.
prometheus_target_interval_length_seconds_sum
ALPHA
(project)
prometheus_target_interval_length_seconds_sum
CUMULATIVE , DOUBLE , 1
k8s_container
Actual intervals between scrapes. Sampled every 60 seconds.
interval :
interval.
prometheus_target_metadata_cache_bytes
ALPHA
(project)
prometheus_target_metadata_cache_bytes
GAUGE , DOUBLE , By
k8s_container
The number of bytes that are currently used for storing metric metadata in the cache. Sampled every 60 seconds.
scrape_job :
scrape_job.
prometheus_target_metadata_cache_entries
ALPHA
(project)
prometheus_target_metadata_cache_entries
GAUGE , DOUBLE , 1
k8s_container
Total number of metric metadata entries in the cache. Sampled every 60 seconds.
scrape_job :
scrape_job.
prometheus_target_scrape_pool_exceeded_label_limits_total
ALPHA
(project)
prometheus_target_scrape_pool_exceeded_label_limits_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of times scrape pools hit the label limits, during sync or config reload. Sampled every 60 seconds.
prometheus_target_scrape_pool_exceeded_target_limit_total
ALPHA
(project)
prometheus_target_scrape_pool_exceeded_target_limit_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of times scrape pools hit the target limit, during sync or config reload. Sampled every 60 seconds.
prometheus_target_scrape_pool_reloads_failed_total
ALPHA
(project)
prometheus_target_scrape_pool_reloads_failed_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of failed scrape loop reloads. Sampled every 60 seconds.
prometheus_target_scrape_pool_reloads_total
ALPHA
(project)
prometheus_target_scrape_pool_reloads_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of scrape loop reloads. Sampled every 60 seconds.
prometheus_target_scrape_pool_sync_total
ALPHA
(project)
prometheus_target_scrape_pool_sync_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of syncs that were executed on a scrape pool. Sampled every 60 seconds.
scrape_job :
scrape_job.
prometheus_target_scrape_pools_failed_total
ALPHA
(project)
prometheus_target_scrape_pools_failed_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of scrape pool creations that failed. Sampled every 60 seconds.
prometheus_target_scrape_pools_total
ALPHA
(project)
prometheus_target_scrape_pools_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of scrape pool creation attempts. Sampled every 60 seconds.
prometheus_target_scrapes_cache_flush_forced_total
ALPHA
(project)
prometheus_target_scrapes_cache_flush_forced_total
CUMULATIVE , DOUBLE , 1
k8s_container
How many times a scrape cache was flushed due to getting big while scrapes are failing. Sampled every 60 seconds.
prometheus_target_scrapes_exceeded_body_size_limit_total
ALPHA
(project)
prometheus_target_scrapes_exceeded_body_size_limit_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of scrapes that hit the body size limit. Sampled every 60 seconds.
prometheus_target_scrapes_exceeded_sample_limit_total
ALPHA
(project)
prometheus_target_scrapes_exceeded_sample_limit_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of scrapes that hit the sample limit and were rejected. Sampled every 60 seconds.
prometheus_target_scrapes_exemplar_out_of_order_total
ALPHA
(project)
prometheus_target_scrapes_exemplar_out_of_order_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of exemplar rejected due to not being out of the expected order. Sampled every 60 seconds.
prometheus_target_scrapes_sample_duplicate_timestamp_total
ALPHA
(project)
prometheus_target_scrapes_sample_duplicate_timestamp_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of samples rejected due to duplicate timestamps but different values. Sampled every 60 seconds.
prometheus_target_scrapes_sample_out_of_bounds_total
ALPHA
(project)
prometheus_target_scrapes_sample_out_of_bounds_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of samples rejected due to timestamp falling outside of the time bounds. Sampled every 60 seconds.
prometheus_target_scrapes_sample_out_of_order_total
ALPHA
(project)
prometheus_target_scrapes_sample_out_of_order_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of samples rejected due to not being out of the expected order. Sampled every 60 seconds.
prometheus_target_sync_length_seconds
ALPHA
(project)
prometheus_target_sync_length_seconds
GAUGE , DOUBLE , s
k8s_container
Actual interval to sync the scrape pool. Sampled every 60 seconds.
quantile :
quantile.
scrape_job :
scrape_job.
prometheus_target_sync_length_seconds_count
ALPHA
(project)
prometheus_target_sync_length_seconds_count
CUMULATIVE , INT64 , 1
k8s_container
Actual interval to sync the scrape pool. Sampled every 60 seconds.
scrape_job :
scrape_job.
prometheus_target_sync_length_seconds_sum
ALPHA
(project)
prometheus_target_sync_length_seconds_sum
CUMULATIVE , DOUBLE , 1
k8s_container
Actual interval to sync the scrape pool. Sampled every 60 seconds.
scrape_job :
scrape_job.
prometheus_template_text_expansion_failures_total
ALPHA
(project)
prometheus_template_text_expansion_failures_total
CUMULATIVE , DOUBLE , 1
k8s_container
The total number of template text expansion failures. Sampled every 60 seconds.
prometheus_template_text_expansions_total
ALPHA
(project)
prometheus_template_text_expansions_total
CUMULATIVE , DOUBLE , 1
k8s_container
The total number of template text expansions. Sampled every 60 seconds.
prometheus_treecache_watcher_goroutines
ALPHA
(project)
prometheus_treecache_watcher_goroutines
GAUGE , DOUBLE , 1
k8s_container
The current number of watcher goroutines. Sampled every 60 seconds.
prometheus_treecache_zookeeper_failures_total
ALPHA
(project)
prometheus_treecache_zookeeper_failures_total
CUMULATIVE , DOUBLE , 1
k8s_container
The total number of ZooKeeper failures. Sampled every 60 seconds.
prometheus_tsdb_blocks_loaded
ALPHA
(project)
prometheus_tsdb_blocks_loaded
GAUGE , DOUBLE , 1
k8s_container
Number of currently loaded data blocks. Sampled every 60 seconds.
prometheus_tsdb_checkpoint_creations_failed_total
ALPHA
(project)
prometheus_tsdb_checkpoint_creations_failed_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of checkpoint creations that failed. Sampled every 60 seconds.
prometheus_tsdb_checkpoint_creations_total
ALPHA
(project)
prometheus_tsdb_checkpoint_creations_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of checkpoint creations attempted. Sampled every 60 seconds.
prometheus_tsdb_checkpoint_deletions_failed_total
ALPHA
(project)
prometheus_tsdb_checkpoint_deletions_failed_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of checkpoint deletions that failed. Sampled every 60 seconds.
prometheus_tsdb_checkpoint_deletions_total
ALPHA
(project)
prometheus_tsdb_checkpoint_deletions_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of checkpoint deletions attempted. Sampled every 60 seconds.
prometheus_tsdb_clean_start
ALPHA
(project)
prometheus_tsdb_clean_start
GAUGE , DOUBLE , 1
k8s_container
-1: lockfile is disabled. 0: a lockfile from a previous execution was replaced. 1: lockfile creation was clean. Sampled every 60 seconds.
prometheus_tsdb_compaction_chunk_range_seconds
ALPHA
(project)
prometheus_tsdb_compaction_chunk_range_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
Final time range of chunks on their first compaction. Sampled every 60 seconds.
prometheus_tsdb_compaction_chunk_samples
ALPHA
(project)
prometheus_tsdb_compaction_chunk_samples
CUMULATIVE , DISTRIBUTION , 1
k8s_container
Final number of samples on their first compaction. Sampled every 60 seconds.
prometheus_tsdb_compaction_chunk_size_bytes
ALPHA
(project)
prometheus_tsdb_compaction_chunk_size_bytes
CUMULATIVE , DISTRIBUTION , By
k8s_container
Final size of chunks on their first compaction. Sampled every 60 seconds.
prometheus_tsdb_compaction_duration_seconds
ALPHA
(project)
prometheus_tsdb_compaction_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
Duration of compaction runs. Sampled every 60 seconds.
prometheus_tsdb_compaction_populating_block
ALPHA
(project)
prometheus_tsdb_compaction_populating_block
GAUGE , DOUBLE , 1
k8s_container
Set to 1 when a block is currently being written to the disk. Sampled every 60 seconds.
prometheus_tsdb_compactions_failed_total
ALPHA
(project)
prometheus_tsdb_compactions_failed_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of compactions that failed for the partition. Sampled every 60 seconds.
prometheus_tsdb_compactions_skipped_total
ALPHA
(project)
prometheus_tsdb_compactions_skipped_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of skipped compactions due to disabled auto compaction. Sampled every 60 seconds.
prometheus_tsdb_compactions_total
ALPHA
(project)
prometheus_tsdb_compactions_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of compactions that were executed for the partition. Sampled every 60 seconds.
prometheus_tsdb_compactions_triggered_total
ALPHA
(project)
prometheus_tsdb_compactions_triggered_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of triggered compactions for the partition. Sampled every 60 seconds.
prometheus_tsdb_data_replay_duration_seconds
ALPHA
(project)
prometheus_tsdb_data_replay_duration_seconds
GAUGE , DOUBLE , s
k8s_container
Time taken to replay the data on disk. Sampled every 60 seconds.
prometheus_tsdb_head_active_appenders
ALPHA
(project)
prometheus_tsdb_head_active_appenders
GAUGE , DOUBLE , 1
k8s_container
Number of currently active appender transactions. Sampled every 60 seconds.
prometheus_tsdb_head_chunks
ALPHA
(project)
prometheus_tsdb_head_chunks
GAUGE , DOUBLE , 1
k8s_container
Total number of chunks in the head block. Sampled every 60 seconds.
prometheus_tsdb_head_chunks_created_total
ALPHA
(project)
prometheus_tsdb_head_chunks_created_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of chunks created in the head. Sampled every 60 seconds.
prometheus_tsdb_head_chunks_removed_total
ALPHA
(project)
prometheus_tsdb_head_chunks_removed_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of chunks removed in the head. Sampled every 60 seconds.
prometheus_tsdb_head_gc_duration_seconds
ALPHA
(project)
prometheus_tsdb_head_gc_duration_seconds
GAUGE , DOUBLE , s
k8s_container
Runtime of garbage collection in the head block. Sampled every 60 seconds.
quantile :
quantile.
prometheus_tsdb_head_gc_duration_seconds_count
ALPHA
(project)
prometheus_tsdb_head_gc_duration_seconds_count
CUMULATIVE , INT64 , 1
k8s_container
Runtime of garbage collection in the head block. Sampled every 60 seconds.
prometheus_tsdb_head_gc_duration_seconds_sum
ALPHA
(project)
prometheus_tsdb_head_gc_duration_seconds_sum
CUMULATIVE , DOUBLE , 1
k8s_container
Runtime of garbage collection in the head block. Sampled every 60 seconds.
prometheus_tsdb_head_max_time
ALPHA
(project)
prometheus_tsdb_head_max_time
GAUGE , DOUBLE , 1
k8s_container
Maximum timestamp of the head block. The unit is decided by the library consumer. Sampled every 60 seconds.
prometheus_tsdb_head_max_time_seconds
ALPHA
(project)
prometheus_tsdb_head_max_time_seconds
GAUGE , DOUBLE , s
k8s_container
Maximum timestamp of the head block. Sampled every 60 seconds.
prometheus_tsdb_head_min_time
ALPHA
(project)
prometheus_tsdb_head_min_time
GAUGE , DOUBLE , 1
k8s_container
Minimum time bound of the head block. The unit is decided by the library consumer. Sampled every 60 seconds.
prometheus_tsdb_head_min_time_seconds
ALPHA
(project)
prometheus_tsdb_head_min_time_seconds
GAUGE , DOUBLE , s
k8s_container
Minimum time bound of the head block. Sampled every 60 seconds.
prometheus_tsdb_head_samples_appended_total
ALPHA
(project)
prometheus_tsdb_head_samples_appended_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of appended samples. Sampled every 60 seconds.
prometheus_tsdb_head_series
ALPHA
(project)
prometheus_tsdb_head_series
GAUGE , DOUBLE , 1
k8s_container
Total number of series in the head block. Sampled every 60 seconds.
prometheus_tsdb_head_series_created_total
ALPHA
(project)
prometheus_tsdb_head_series_created_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of series created in the head. Sampled every 60 seconds.
prometheus_tsdb_head_series_not_found_total
ALPHA
(project)
prometheus_tsdb_head_series_not_found_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of requests for series that were not found. Sampled every 60 seconds.
prometheus_tsdb_head_series_removed_total
ALPHA
(project)
prometheus_tsdb_head_series_removed_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of series removed in the head. Sampled every 60 seconds.
prometheus_tsdb_head_truncations_failed_total
ALPHA
(project)
prometheus_tsdb_head_truncations_failed_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of head truncations that failed. Sampled every 60 seconds.
prometheus_tsdb_head_truncations_total
ALPHA
(project)
prometheus_tsdb_head_truncations_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of head truncations attempted. Sampled every 60 seconds.
prometheus_tsdb_isolation_high_watermark
ALPHA
(project)
prometheus_tsdb_isolation_high_watermark
GAUGE , DOUBLE , 1
k8s_container
The highest TSDB append ID that has been given out. Sampled every 60 seconds.
prometheus_tsdb_isolation_low_watermark
ALPHA
(project)
prometheus_tsdb_isolation_low_watermark
GAUGE , DOUBLE , 1
k8s_container
The lowest TSDB append ID that is still referenced. Sampled every 60 seconds.
prometheus_tsdb_lowest_timestamp
ALPHA
(project)
prometheus_tsdb_lowest_timestamp
GAUGE , DOUBLE , 1
k8s_container
Lowest timestamp value stored in the database. The unit is decided by the library consumer. Sampled every 60 seconds.
prometheus_tsdb_lowest_timestamp_seconds
ALPHA
(project)
prometheus_tsdb_lowest_timestamp_seconds
GAUGE , DOUBLE , s
k8s_container
Lowest timestamp value stored in the database. Sampled every 60 seconds.
prometheus_tsdb_mmap_chunk_corruptions_total
ALPHA
(project)
prometheus_tsdb_mmap_chunk_corruptions_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of memory-mapped chunk corruptions. Sampled every 60 seconds.
prometheus_tsdb_out_of_bound_samples_total
ALPHA
(project)
prometheus_tsdb_out_of_bound_samples_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of out of bound samples ingestion failed attempts. Sampled every 60 seconds.
prometheus_tsdb_out_of_order_samples_total
ALPHA
(project)
prometheus_tsdb_out_of_order_samples_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of out of order samples ingestion failed attempts. Sampled every 60 seconds.
prometheus_tsdb_reloads_failures_total
ALPHA
(project)
prometheus_tsdb_reloads_failures_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of times the database failed to reload block data from disk. Sampled every 60 seconds.
prometheus_tsdb_reloads_total
ALPHA
(project)
prometheus_tsdb_reloads_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of times the database reloaded block data from disk. Sampled every 60 seconds.
prometheus_tsdb_retention_cutoffs_failures_total
ALPHA
(project)
prometheus_tsdb_retention_cutoffs_failures_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of times the database failed to cut off block data from disk. Sampled every 60 seconds.
prometheus_tsdb_retention_cutoffs_total
ALPHA
(project)
prometheus_tsdb_retention_cutoffs_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of times the database cut off block data from disk. Sampled every 60 seconds.
prometheus_tsdb_retention_limit_bytes
ALPHA
(project)
prometheus_tsdb_retention_limit_bytes
GAUGE , DOUBLE , By
k8s_container
Max number of bytes to be retained in the tsdb blocks, configured 0 means disabled. Sampled every 60 seconds.
prometheus_tsdb_size_retentions_total
ALPHA
(project)
prometheus_tsdb_size_retentions_total
CUMULATIVE , DOUBLE , 1
k8s_container
The number of times that blocks were deleted because the maximum number of bytes was exceeded. Sampled every 60 seconds.
prometheus_tsdb_storage_blocks_bytes
ALPHA
(project)
prometheus_tsdb_storage_blocks_bytes
GAUGE , DOUBLE , By
k8s_container
The number of bytes that are currently used for local storage by all blocks. Sampled every 60 seconds.
prometheus_tsdb_symbol_table_size_bytes
ALPHA
(project)
prometheus_tsdb_symbol_table_size_bytes
GAUGE , DOUBLE , By
k8s_container
Size of symbol table on disk (in bytes). Sampled every 60 seconds.
prometheus_tsdb_time_retentions_total
ALPHA
(project)
prometheus_tsdb_time_retentions_total
CUMULATIVE , DOUBLE , 1
k8s_container
The number of times that blocks were deleted because the maximum time limit was exceeded. Sampled every 60 seconds.
prometheus_tsdb_tombstone_cleanup_seconds
ALPHA
(project)
prometheus_tsdb_tombstone_cleanup_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
The time taken to recompact blocks to remove tombstones. Sampled every 60 seconds.
prometheus_tsdb_vertical_compactions_total
ALPHA
(project)
prometheus_tsdb_vertical_compactions_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of compactions done on overlapping blocks. Sampled every 60 seconds.
prometheus_tsdb_wal_completed_pages_total
ALPHA
(project)
prometheus_tsdb_wal_completed_pages_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of completed pages. Sampled every 60 seconds.
prometheus_tsdb_wal_corruptions_total
ALPHA
(project)
prometheus_tsdb_wal_corruptions_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of WAL corruptions. Sampled every 60 seconds.
prometheus_tsdb_wal_fsync_duration_seconds
ALPHA
(project)
prometheus_tsdb_wal_fsync_duration_seconds
GAUGE , DOUBLE , s
k8s_container
Duration of WAL fsync. Sampled every 60 seconds.
quantile :
quantile.
prometheus_tsdb_wal_fsync_duration_seconds_count
ALPHA
(project)
prometheus_tsdb_wal_fsync_duration_seconds_count
CUMULATIVE , INT64 , 1
k8s_container
Duration of WAL fsync. Sampled every 60 seconds.
prometheus_tsdb_wal_fsync_duration_seconds_sum
ALPHA
(project)
prometheus_tsdb_wal_fsync_duration_seconds_sum
CUMULATIVE , DOUBLE , 1
k8s_container
Duration of WAL fsync. Sampled every 60 seconds.
prometheus_tsdb_wal_page_flushes_total
ALPHA
(project)
prometheus_tsdb_wal_page_flushes_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of page flushes. Sampled every 60 seconds.
prometheus_tsdb_wal_segment_current
ALPHA
(project)
prometheus_tsdb_wal_segment_current
GAUGE , DOUBLE , 1
k8s_container
WAL segment index that TSDB is currently writing to. Sampled every 60 seconds.
prometheus_tsdb_wal_truncate_duration_seconds
ALPHA
(project)
prometheus_tsdb_wal_truncate_duration_seconds
GAUGE , DOUBLE , s
k8s_container
Duration of WAL truncation. Sampled every 60 seconds.
quantile :
quantile.
prometheus_tsdb_wal_truncate_duration_seconds_count
ALPHA
(project)
prometheus_tsdb_wal_truncate_duration_seconds_count
CUMULATIVE , INT64 , 1
k8s_container
Duration of WAL truncation. Sampled every 60 seconds.
prometheus_tsdb_wal_truncate_duration_seconds_sum
ALPHA
(project)
prometheus_tsdb_wal_truncate_duration_seconds_sum
CUMULATIVE , DOUBLE , 1
k8s_container
Duration of WAL truncation. Sampled every 60 seconds.
prometheus_tsdb_wal_truncations_failed_total
ALPHA
(project)
prometheus_tsdb_wal_truncations_failed_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of WAL truncations that failed. Sampled every 60 seconds.
prometheus_tsdb_wal_truncations_total
ALPHA
(project)
prometheus_tsdb_wal_truncations_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of WAL truncations attempted. Sampled every 60 seconds.
prometheus_tsdb_wal_writes_failed_total
ALPHA
(project)
prometheus_tsdb_wal_writes_failed_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of WAL writes that failed. Sampled every 60 seconds.
prometheus_web_federation_errors_total
ALPHA
(project)
prometheus_web_federation_errors_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of errors that occurred while sending federation responses. Sampled every 60 seconds.
prometheus_web_federation_warnings_total
ALPHA
(project)
prometheus_web_federation_warnings_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of warnings that occurred while sending federation responses. Sampled every 60 seconds.
promhttp_metric_handler_errors_total
ALPHA
(project)
promhttp_metric_handler_errors_total
CUMULATIVE , DOUBLE , 1
k8s_node
Total number of internal errors encountered by the promhttp metric handler. Sampled every 60 seconds.
cause :
cause.
promhttp_metric_handler_requests_in_flight
ALPHA
(project)
promhttp_metric_handler_requests_in_flight
GAUGE , DOUBLE , 1
k8s_container
k8s_node
k8s_pod
Current number of scrapes being served. Sampled every 60 seconds.
promhttp_metric_handler_requests_in_flight/gauge
ALPHA
(project)
promhttp_metric_handler_requests_in_flight
GAUGE , DOUBLE , 1
prometheus_target
Current number of scrapes being served. Sampled every 30 seconds.
promhttp_metric_handler_requests_total
ALPHA
(project)
promhttp_metric_handler_requests_total
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_node
k8s_pod
Total number of scrapes by HTTP status code. Sampled every 60 seconds.
code :
code.
promhttp_metric_handler_requests_total/counter
ALPHA
(project)
promhttp_metric_handler_requests_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Total number of scrapes by HTTP status code. Sampled every 30 seconds.
code :
code.
pv_collector_bound_pv_count
ALPHA
(project)
pv_collector_bound_pv_count
GAUGE , DOUBLE , 1
k8s_container
Gauge measuring number of persistent volume currently bound. Sampled every 60 seconds.
storage_class :
storage_class.
pv_collector_bound_pv_count/gauge
ALPHA
(project)
pv_collector_bound_pv_count
GAUGE , DOUBLE , 1
prometheus_target
Gauge measuring number of persistent volume currently bound. Sampled every 30 seconds.
storage_class :
storage_class.
pv_collector_bound_pvc_count
ALPHA
(project)
pv_collector_bound_pvc_count
GAUGE , DOUBLE , 1
k8s_container
Gauge measuring number of persistent volume claim currently bound. Sampled every 60 seconds.
exported_namespace :
exported_namespace.
pv_collector_bound_pvc_count/gauge
ALPHA
(project)
pv_collector_bound_pvc_count
GAUGE , DOUBLE , 1
prometheus_target
Gauge measuring number of persistent volume claim currently bound. Sampled every 30 seconds.
pv_collector_total_pv_count
ALPHA
(project)
pv_collector_total_pv_count
GAUGE , DOUBLE , 1
k8s_container
Gauge measuring total number of persistent volumes. Sampled every 60 seconds.
plugin_name :
plugin_name.
volume_mode :
volume_mode.
pv_collector_total_pv_count/gauge
ALPHA
(project)
pv_collector_total_pv_count
GAUGE , DOUBLE , 1
prometheus_target
Gauge measuring total number of persistent volumes. Sampled every 30 seconds.
plugin_name :
plugin_name.
volume_mode :
volume_mode.
pv_collector_unbound_pv_count
ALPHA
(project)
pv_collector_unbound_pv_count
GAUGE , DOUBLE , 1
k8s_container
Gauge measuring number of persistent volume currently unbound. Sampled every 60 seconds.
storage_class :
storage_class.
pv_collector_unbound_pv_count/gauge
ALPHA
(project)
pv_collector_unbound_pv_count
GAUGE , DOUBLE , 1
prometheus_target
Gauge measuring number of persistent volume currently unbound. Sampled every 30 seconds.
storage_class :
storage_class.
pvcprotection_adds
ALPHA
(project)
pvcprotection_adds
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of adds handled by workqueue: pvcprotection. Sampled every 60 seconds.
pvcprotection_depth
ALPHA
(project)
pvcprotection_depth
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) Current depth of workqueue: pvcprotection. Sampled every 60 seconds.
pvcprotection_longest_running_processor_microseconds
ALPHA
(project)
pvcprotection_longest_running_processor_microseconds
GAUGE , DOUBLE , us
k8s_container
(Deprecated) How many microseconds has the longest running processor for pvcprotection been running. Sampled every 60 seconds.
pvcprotection_queue_latency
ALPHA
(project)
pvcprotection_queue_latency
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuepvcprotection before being requested. Sampled every 60 seconds.
quantile :
quantile.
pvcprotection_queue_latency_count
ALPHA
(project)
pvcprotection_queue_latency_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long an item stays in workqueuepvcprotection before being requested. Sampled every 60 seconds.
pvcprotection_queue_latency_sum
ALPHA
(project)
pvcprotection_queue_latency_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuepvcprotection before being requested. Sampled every 60 seconds.
pvcprotection_retries
ALPHA
(project)
pvcprotection_retries
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of retries handled by workqueue: pvcprotection. Sampled every 60 seconds.
pvcprotection_unfinished_work_seconds
ALPHA
(project)
pvcprotection_unfinished_work_seconds
GAUGE , DOUBLE , s
k8s_container
(Deprecated) How many seconds of work pvcprotection has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases. Sampled every 60 seconds.
pvcprotection_work_duration
ALPHA
(project)
pvcprotection_work_duration
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuepvcprotection takes. Sampled every 60 seconds.
quantile :
quantile.
pvcprotection_work_duration_count
ALPHA
(project)
pvcprotection_work_duration_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long processing an item from workqueuepvcprotection takes. Sampled every 60 seconds.
pvcprotection_work_duration_sum
ALPHA
(project)
pvcprotection_work_duration_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuepvcprotection takes. Sampled every 60 seconds.
pvcs_adds
ALPHA
(project)
pvcs_adds
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of adds handled by workqueue: pvcs. Sampled every 60 seconds.
pvcs_depth
ALPHA
(project)
pvcs_depth
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) Current depth of workqueue: pvcs. Sampled every 60 seconds.
pvcs_longest_running_processor_microseconds
ALPHA
(project)
pvcs_longest_running_processor_microseconds
GAUGE , DOUBLE , us
k8s_container
(Deprecated) How many microseconds has the longest running processor for pvcs been running. Sampled every 60 seconds.
pvcs_queue_latency
ALPHA
(project)
pvcs_queue_latency
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuepvcs before being requested. Sampled every 60 seconds.
quantile :
quantile.
pvcs_queue_latency_count
ALPHA
(project)
pvcs_queue_latency_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long an item stays in workqueuepvcs before being requested. Sampled every 60 seconds.
pvcs_queue_latency_sum
ALPHA
(project)
pvcs_queue_latency_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuepvcs before being requested. Sampled every 60 seconds.
pvcs_retries
ALPHA
(project)
pvcs_retries
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of retries handled by workqueue: pvcs. Sampled every 60 seconds.
pvcs_unfinished_work_seconds
ALPHA
(project)
pvcs_unfinished_work_seconds
GAUGE , DOUBLE , s
k8s_container
(Deprecated) How many seconds of work pvcs has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases. Sampled every 60 seconds.
pvcs_work_duration
ALPHA
(project)
pvcs_work_duration
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuepvcs takes. Sampled every 60 seconds.
quantile :
quantile.
pvcs_work_duration_count
ALPHA
(project)
pvcs_work_duration_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long processing an item from workqueuepvcs takes. Sampled every 60 seconds.
pvcs_work_duration_sum
ALPHA
(project)
pvcs_work_duration_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuepvcs takes. Sampled every 60 seconds.
pvprotection_adds
ALPHA
(project)
pvprotection_adds
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of adds handled by workqueue: pvprotection. Sampled every 60 seconds.
pvprotection_depth
ALPHA
(project)
pvprotection_depth
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) Current depth of workqueue: pvprotection. Sampled every 60 seconds.
pvprotection_longest_running_processor_microseconds
ALPHA
(project)
pvprotection_longest_running_processor_microseconds
GAUGE , DOUBLE , us
k8s_container
(Deprecated) How many microseconds has the longest running processor for pvprotection been running. Sampled every 60 seconds.
pvprotection_queue_latency
ALPHA
(project)
pvprotection_queue_latency
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuepvprotection before being requested. Sampled every 60 seconds.
quantile :
quantile.
pvprotection_queue_latency_count
ALPHA
(project)
pvprotection_queue_latency_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long an item stays in workqueuepvprotection before being requested. Sampled every 60 seconds.
pvprotection_queue_latency_sum
ALPHA
(project)
pvprotection_queue_latency_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuepvprotection before being requested. Sampled every 60 seconds.
pvprotection_retries
ALPHA
(project)
pvprotection_retries
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of retries handled by workqueue: pvprotection. Sampled every 60 seconds.
pvprotection_unfinished_work_seconds
ALPHA
(project)
pvprotection_unfinished_work_seconds
GAUGE , DOUBLE , s
k8s_container
(Deprecated) How many seconds of work pvprotection has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases. Sampled every 60 seconds.
pvprotection_work_duration
ALPHA
(project)
pvprotection_work_duration
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuepvprotection takes. Sampled every 60 seconds.
quantile :
quantile.
pvprotection_work_duration_count
ALPHA
(project)
pvprotection_work_duration_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long processing an item from workqueuepvprotection takes. Sampled every 60 seconds.
pvprotection_work_duration_sum
ALPHA
(project)
pvprotection_work_duration_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuepvprotection takes. Sampled every 60 seconds.
reloader_config_apply_operations_failed_total
ALPHA
(project)
reloader_config_apply_operations_failed_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of config apply operations that failed. Sampled every 60 seconds.
reloader_config_apply_operations_total
ALPHA
(project)
reloader_config_apply_operations_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of config apply operations. Sampled every 60 seconds.
reloader_reloads_failed_total
ALPHA
(project)
reloader_reloads_failed_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of reload requests that failed. Sampled every 60 seconds.
reloader_reloads_total
ALPHA
(project)
reloader_reloads_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of reload requests. Sampled every 60 seconds.
reloader_watch_errors_total
ALPHA
(project)
reloader_watch_errors_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of errors received by the reloader from the watcher. Sampled every 60 seconds.
reloader_watch_events_total
ALPHA
(project)
reloader_watch_events_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of events received by the reloader from the watcher. Sampled every 60 seconds.
reloader_watches
ALPHA
(project)
reloader_watches
GAUGE , DOUBLE , 1
k8s_container
Number of resources watched by the reloader. Sampled every 60 seconds.
replicaset_adds
ALPHA
(project)
replicaset_adds
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of adds handled by workqueue: replicaset. Sampled every 60 seconds.
replicaset_controller_rate_limiter_use
ALPHA
(project)
replicaset_controller_rate_limiter_use
GAUGE , DOUBLE , 1
k8s_container
A metric measuring the saturation of the rate limiter for replicaset_controller. Sampled every 60 seconds.
replicaset_controller_rate_limiter_use/gauge
ALPHA
(project)
replicaset_controller_rate_limiter_use
GAUGE , DOUBLE , 1
prometheus_target
A metric measuring the saturation of the rate limiter for replicaset_controller. Sampled every 30 seconds.
replicaset_controller_sorting_deletion_age_ratio
ALPHA
(project)
replicaset_controller_sorting_deletion_age_ratio
CUMULATIVE , DISTRIBUTION , 1
k8s_container
The ratio of chosen deleted pod's ages to the current youngest pod's age (at the time). Should be <2.The intent of this metric is to measure the rough efficacy of the LogarithmicScaleDown feature gate's effect onthe sorting (and deletion) of pods when a replicaset scales down. This only considers Ready pods when calculating and reporting. Sampled every 60 seconds.
replicaset_depth
ALPHA
(project)
replicaset_depth
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) Current depth of workqueue: replicaset. Sampled every 60 seconds.
replicaset_longest_running_processor_microseconds
ALPHA
(project)
replicaset_longest_running_processor_microseconds
GAUGE , DOUBLE , us
k8s_container
(Deprecated) How many microseconds has the longest running processor for replicaset been running. Sampled every 60 seconds.
replicaset_queue_latency
ALPHA
(project)
replicaset_queue_latency
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuereplicaset before being requested. Sampled every 60 seconds.
quantile :
quantile.
replicaset_queue_latency_count
ALPHA
(project)
replicaset_queue_latency_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long an item stays in workqueuereplicaset before being requested. Sampled every 60 seconds.
replicaset_queue_latency_sum
ALPHA
(project)
replicaset_queue_latency_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuereplicaset before being requested. Sampled every 60 seconds.
replicaset_retries
ALPHA
(project)
replicaset_retries
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of retries handled by workqueue: replicaset. Sampled every 60 seconds.
replicaset_unfinished_work_seconds
ALPHA
(project)
replicaset_unfinished_work_seconds
GAUGE , DOUBLE , s
k8s_container
(Deprecated) How many seconds of work replicaset has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases. Sampled every 60 seconds.
replicaset_work_duration
ALPHA
(project)
replicaset_work_duration
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuereplicaset takes. Sampled every 60 seconds.
quantile :
quantile.
replicaset_work_duration_count
ALPHA
(project)
replicaset_work_duration_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long processing an item from workqueuereplicaset takes. Sampled every 60 seconds.
replicaset_work_duration_sum
ALPHA
(project)
replicaset_work_duration_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuereplicaset takes. Sampled every 60 seconds.
replication_controller_rate_limiter_use
ALPHA
(project)
replication_controller_rate_limiter_use
GAUGE , DOUBLE , 1
k8s_container
A metric measuring the saturation of the rate limiter for replication_controller. Sampled every 60 seconds.
replication_controller_rate_limiter_use/gauge
ALPHA
(project)
replication_controller_rate_limiter_use
GAUGE , DOUBLE , 1
prometheus_target
A metric measuring the saturation of the rate limiter for replication_controller. Sampled every 30 seconds.
replicationmanager_adds
ALPHA
(project)
replicationmanager_adds
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of adds handled by workqueue: replicationmanager. Sampled every 60 seconds.
replicationmanager_depth
ALPHA
(project)
replicationmanager_depth
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) Current depth of workqueue: replicationmanager. Sampled every 60 seconds.
replicationmanager_longest_running_processor_microseconds
ALPHA
(project)
replicationmanager_longest_running_processor_microseconds
GAUGE , DOUBLE , us
k8s_container
(Deprecated) How many microseconds has the longest running processor for replicationmanager been running. Sampled every 60 seconds.
replicationmanager_queue_latency
ALPHA
(project)
replicationmanager_queue_latency
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How many microseconds has the longest running processor for replicationmanager been running. Sampled every 60 seconds.
quantile :
quantile.
replicationmanager_queue_latency_count
ALPHA
(project)
replicationmanager_queue_latency_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long an item stays in workqueuereplicationmanager before being requested. Sampled every 60 seconds.
replicationmanager_queue_latency_sum
ALPHA
(project)
replicationmanager_queue_latency_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuereplicationmanager before being requested. Sampled every 60 seconds.
replicationmanager_retries
ALPHA
(project)
replicationmanager_retries
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of retries handled by workqueue: replicationmanager. Sampled every 60 seconds.
replicationmanager_unfinished_work_seconds
ALPHA
(project)
replicationmanager_unfinished_work_seconds
GAUGE , DOUBLE , s
k8s_container
(Deprecated) How many seconds of work replicationmanager has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases. Sampled every 60 seconds.
replicationmanager_work_duration
ALPHA
(project)
replicationmanager_work_duration
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How many seconds of work replicationmanager has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases. Sampled every 60 seconds.
quantile :
quantile.
replicationmanager_work_duration_count
ALPHA
(project)
replicationmanager_work_duration_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long processing an item from workqueuereplicationmanager takes. Sampled every 60 seconds.
replicationmanager_work_duration_sum
ALPHA
(project)
replicationmanager_work_duration_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuereplicationmanager takes. Sampled every 60 seconds.
resource_metadata_conversion_count
ALPHA
(project)
resource_metadata_conversion_count
CUMULATIVE , DOUBLE , 1
k8s_container
Cumulative number of events processed by the conversion stage (from Kubernetes object to resource metadata). Sampled every 60 seconds.
resource_type :
resource_type.
result :
result.
resource_metadata_publish_count
ALPHA
(project)
resource_metadata_publish_count
CUMULATIVE , DOUBLE , 1
k8s_container
Cumulative number of events that were processed by the publishing stage. Sampled every 60 seconds.
resource_type :
resource_type.
result :
result.
resource_quota_controller_rate_limiter_use
ALPHA
(project)
resource_quota_controller_rate_limiter_use
GAUGE , DOUBLE , 1
k8s_container
A metric measuring the saturation of the rate limiter for resource_quota_controller. Sampled every 60 seconds.
resource_quota_controller_rate_limiter_use/gauge
ALPHA
(project)
resource_quota_controller_rate_limiter_use
GAUGE , DOUBLE , 1
prometheus_target
A metric measuring the saturation of the rate limiter for resource_quota_controller. Sampled every 30 seconds.
resource_quota_controller_resource_changes_adds
ALPHA
(project)
resource_quota_controller_resource_changes_adds
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of adds handled by workqueue: resource_quota_controller_resource_changes. Sampled every 60 seconds.
resource_quota_controller_resource_changes_depth
ALPHA
(project)
resource_quota_controller_resource_changes_depth
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) Current depth of workqueue: resource_quota_controller_resource_changes. Sampled every 60 seconds.
resource_quota_controller_resource_changes_longest_running_processor_microseconds
ALPHA
(project)
resource_quota_controller_resource_changes_longest_running_processor_microseconds
GAUGE , DOUBLE , us
k8s_container
(Deprecated) How many microseconds has the longest running processor for resource_quota_controller_resource_changes been running. Sampled every 60 seconds.
resource_quota_controller_resource_changes_queue_latency
ALPHA
(project)
resource_quota_controller_resource_changes_queue_latency
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueueresource_quota_controller_resource_changes before being requested. Sampled every 60 seconds.
quantile :
quantile.
resource_quota_controller_resource_changes_queue_latency_count
ALPHA
(project)
resource_quota_controller_resource_changes_queue_latency_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long an item stays in workqueueresource_quota_controller_resource_changes before being requested. Sampled every 60 seconds.
resource_quota_controller_resource_changes_queue_latency_sum
ALPHA
(project)
resource_quota_controller_resource_changes_queue_latency_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueueresource_quota_controller_resource_changes before being requested. Sampled every 60 seconds.
resource_quota_controller_resource_changes_retries
ALPHA
(project)
resource_quota_controller_resource_changes_retries
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of retries handled by workqueue: resource_quota_controller_resource_changes. Sampled every 60 seconds.
resource_quota_controller_resource_changes_unfinished_work_seconds
ALPHA
(project)
resource_quota_controller_resource_changes_unfinished_work_seconds
GAUGE , DOUBLE , s
k8s_container
(Deprecated) How many seconds of work resource_quota_controller_resource_changes has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases. Sampled every 60 seconds.
resource_quota_controller_resource_changes_work_duration
ALPHA
(project)
resource_quota_controller_resource_changes_work_duration
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueueresource_quota_controller_resource_changes takes. Sampled every 60 seconds.
quantile :
quantile.
resource_quota_controller_resource_changes_work_duration_count
ALPHA
(project)
resource_quota_controller_resource_changes_work_duration_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long processing an item from workqueueresource_quota_controller_resource_changes takes. Sampled every 60 seconds.
resource_quota_controller_resource_changes_work_duration_sum
ALPHA
(project)
resource_quota_controller_resource_changes_work_duration_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueueresource_quota_controller_resource_changes takes. Sampled every 60 seconds.
resourcequota_primary_adds
ALPHA
(project)
resourcequota_primary_adds
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of adds handled by workqueue: resourcequota_primary. Sampled every 60 seconds.
resourcequota_primary_depth
ALPHA
(project)
resourcequota_primary_depth
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) Current depth of workqueue: resourcequota_primary. Sampled every 60 seconds.
resourcequota_primary_longest_running_processor_microseconds
ALPHA
(project)
resourcequota_primary_longest_running_processor_microseconds
GAUGE , DOUBLE , us
k8s_container
(Deprecated) How many microseconds has the longest running processor for resourcequota_primary been running. Sampled every 60 seconds.
resourcequota_primary_queue_latency
ALPHA
(project)
resourcequota_primary_queue_latency
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueueresourcequota_primary before being requested. Sampled every 60 seconds.
quantile :
quantile.
resourcequota_primary_queue_latency_count
ALPHA
(project)
resourcequota_primary_queue_latency_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long an item stays in workqueueresourcequota_primary before being requested. Sampled every 60 seconds.
resourcequota_primary_queue_latency_sum
ALPHA
(project)
resourcequota_primary_queue_latency_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueueresourcequota_primary before being requested. Sampled every 60 seconds.
resourcequota_primary_retries
ALPHA
(project)
resourcequota_primary_retries
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of retries handled by workqueue: resourcequota_primary. Sampled every 60 seconds.
resourcequota_primary_unfinished_work_seconds
ALPHA
(project)
resourcequota_primary_unfinished_work_seconds
GAUGE , DOUBLE , s
k8s_container
(Deprecated) How many seconds of work resourcequota_primary has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases. Sampled every 60 seconds.
resourcequota_primary_work_duration
ALPHA
(project)
resourcequota_primary_work_duration
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueueresourcequota_primary takes. Sampled every 60 seconds.
quantile :
quantile.
resourcequota_primary_work_duration_count
ALPHA
(project)
resourcequota_primary_work_duration_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long processing an item from workqueueresourcequota_primary takes. Sampled every 60 seconds.
resourcequota_primary_work_duration_sum
ALPHA
(project)
resourcequota_primary_work_duration_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueueresourcequota_primary takes. Sampled every 60 seconds.
resourcequota_priority_adds
ALPHA
(project)
resourcequota_priority_adds
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of adds handled by workqueue: resourcequota_priority. Sampled every 60 seconds.
resourcequota_priority_depth
ALPHA
(project)
resourcequota_priority_depth
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) Current depth of workqueue: resourcequota_priority. Sampled every 60 seconds.
resourcequota_priority_longest_running_processor_microseconds
ALPHA
(project)
resourcequota_priority_longest_running_processor_microseconds
GAUGE , DOUBLE , us
k8s_container
(Deprecated) How many microseconds has the longest running processor for resourcequota_priority been running. Sampled every 60 seconds.
resourcequota_priority_queue_latency
ALPHA
(project)
resourcequota_priority_queue_latency
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueueresourcequota_priority before being requested. Sampled every 60 seconds.
quantile :
quantile.
resourcequota_priority_queue_latency_count
ALPHA
(project)
resourcequota_priority_queue_latency_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long an item stays in workqueueresourcequota_priority before being requested. Sampled every 60 seconds.
resourcequota_priority_queue_latency_sum
ALPHA
(project)
resourcequota_priority_queue_latency_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueueresourcequota_priority before being requested. Sampled every 60 seconds.
resourcequota_priority_retries
ALPHA
(project)
resourcequota_priority_retries
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of retries handled by workqueue: resourcequota_priority. Sampled every 60 seconds.
resourcequota_priority_unfinished_work_seconds
ALPHA
(project)
resourcequota_priority_unfinished_work_seconds
GAUGE , DOUBLE , s
k8s_container
(Deprecated) How many seconds of work resourcequota_priority has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases. Sampled every 60 seconds.
resourcequota_priority_work_duration
ALPHA
(project)
resourcequota_priority_work_duration
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueueresourcequota_priority takes. Sampled every 60 seconds.
quantile :
quantile.
resourcequota_priority_work_duration_count
ALPHA
(project)
resourcequota_priority_work_duration_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long processing an item from workqueueresourcequota_priority takes. Sampled every 60 seconds.
resourcequota_priority_work_duration_sum
ALPHA
(project)
resourcequota_priority_work_duration_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueueresourcequota_priority takes. Sampled every 60 seconds.
rest_client_exec_plugin_certificate_rotation_age
ALPHA
(project)
rest_client_exec_plugin_certificate_rotation_age
CUMULATIVE , DISTRIBUTION , 1
k8s_container
Histogram of the number of seconds the last auth exec plugin client certificate lived before being rotated. If auth exec plugin client certificates are unused, histogram will contain no data. Sampled every 60 seconds.
rest_client_exec_plugin_certificate_rotation_age/histogram
ALPHA
(project)
rest_client_exec_plugin_certificate_rotation_age
CUMULATIVE , DISTRIBUTION , 1
prometheus_target
Histogram of the number of seconds the last auth exec plugin client certificate lived before being rotated. If auth exec plugin client certificates are unused, histogram will contain no data. Sampled every 30 seconds.
rest_client_exec_plugin_ttl_seconds
ALPHA
(project)
rest_client_exec_plugin_ttl_seconds
GAUGE , DOUBLE , s
k8s_container
Gauge of the shortest TTL (time-to-live) of the client certificate(s) managed by the auth exec plugin. The value is in seconds until certificate expiry (negative if already expired). If auth exec plugins are unused or manage no TLS certificates, the value will be +INF. Sampled every 60 seconds.
rest_client_exec_plugin_ttl_seconds/gauge
ALPHA
(project)
rest_client_exec_plugin_ttl_seconds
GAUGE , DOUBLE , s
prometheus_target
Gauge of the shortest TTL (time-to-live) of the client certificate(s) managed by the auth exec plugin. The value is in seconds until certificate expiry (negative if already expired). If auth exec plugins are unused or manage no TLS certificates, the value will be +INF. Sampled every 30 seconds.
rest_client_rate_limiter_duration_seconds
ALPHA
(project)
rest_client_rate_limiter_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
[ALPHA] Client side rate limiter latency in seconds. Broken down by verb, and host. Sampled every 60 seconds.
host :
host.
url :
url.
verb :
verb.
rest_client_rate_limiter_duration_seconds/histogram
ALPHA
(project)
rest_client_rate_limiter_duration_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
[ALPHA] Client side rate limiter latency in seconds. Broken down by verb, and host. Sampled every 30 seconds.
host :
host.
url :
url.
verb :
verb.
rest_client_request_duration_seconds
ALPHA
(project)
rest_client_request_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
k8s_node
[ALPHA] Request latency in seconds. Broken down by verb, and host. Sampled every 60 seconds.
host :
host.
url :
url.
verb :
verb.
rest_client_request_duration_seconds/histogram
ALPHA
(project)
rest_client_request_duration_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
[ALPHA] Request latency in seconds. Broken down by verb, and host. Sampled every 30 seconds.
host :
host.
url :
url.
verb :
verb.
rest_client_request_latency_seconds
ALPHA
(project)
rest_client_request_latency_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
k8s_node
(Deprecated) Request latency in seconds. Broken down by verb and URL. Sampled every 60 seconds.
url :
url.
verb :
verb.
rest_client_request_size_bytes
ALPHA
(project)
rest_client_request_size_bytes
CUMULATIVE , DISTRIBUTION , By
k8s_container
[ALPHA] Request size in bytes. Broken down by verb and host. Sampled every 60 seconds.
host :
host.
verb :
verb.
rest_client_request_size_bytes/histogram
ALPHA
(project)
rest_client_request_size_bytes
CUMULATIVE , DISTRIBUTION , By
prometheus_target
[ALPHA] Request size in bytes. Broken down by verb and host. Sampled every 30 seconds.
host :
host.
verb :
verb.
rest_client_requests_total
ALPHA
(project)
rest_client_requests_total
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_node
[ALPHA] Number of HTTP requests, partitioned by status code, method, and host. Sampled every 60 seconds.
code :
code.
host :
host.
method :
method.
rest_client_requests_total/counter
ALPHA
(project)
rest_client_requests_total
CUMULATIVE , DOUBLE , 1
prometheus_target
[ALPHA] Number of HTTP requests, partitioned by status code, method, and host. Sampled every 30 seconds.
code :
code.
host :
host.
method :
method.
rest_client_response_size_bytes
ALPHA
(project)
rest_client_response_size_bytes
CUMULATIVE , DISTRIBUTION , By
k8s_container
[ALPHA] Response size in bytes. Broken down by verb and host. Sampled every 60 seconds.
host :
host.
verb :
verb.
rest_client_response_size_bytes/histogram
ALPHA
(project)
rest_client_response_size_bytes
CUMULATIVE , DISTRIBUTION , By
prometheus_target
[ALPHA] Response size in bytes. Broken down by verb and host. Sampled every 30 seconds.
host :
host.
verb :
verb.
robin_agent_services_consul_client
BETA
(project)
robin_agent_services_consul_client
GAUGE , DOUBLE , 1
k8s_pod
The status of Robin agent consul client. Value 0 = up and 1 = down. Sampled every 60 seconds.
id :
id.
k8s_name :
k8s_name.
name :
name.
robin_agent_services_iomgr_service
BETA
(project)
robin_agent_services_iomgr_service
GAUGE , DOUBLE , 1
k8s_pod
The status of Robin agent IO Manager service. Value 0 = up and 1 = down. Sampled every 60 seconds.
id :
id.
k8s_name :
k8s_name.
name :
name.
robin_agent_services_monitor_server
BETA
(project)
robin_agent_services_monitor_server
GAUGE , DOUBLE , 1
k8s_pod
The status of Robin agent monitor server. Value 0 = up and 1 = down. Sampled every 60 seconds.
id :
id.
k8s_name :
k8s_name.
name :
name.
robin_agent_services_robin_agent
BETA
(project)
robin_agent_services_robin_agent
GAUGE , DOUBLE , 1
k8s_pod
The status of Robin agent service. Value 0 = up and 1 = down. Sampled every 60 seconds.
id :
id.
k8s_name :
k8s_name.
name :
name.
robin_disk_rawused
BETA
(project)
robin_disk_rawused
GAUGE , DOUBLE , 1
k8s_pod
The raw used capacity of a disk, represented in bytes. Sampled every 60 seconds.
devpath :
devpath.
disk_role :
disk_role.
node_idx :
node_idx.
node_name :
node_name.
wwn :
wwn.
robin_disk_size
BETA
(project)
robin_disk_size
GAUGE , DOUBLE , 1
k8s_pod
The capacity of a disk, represented in bytes. Sampled every 60 seconds.
devpath :
devpath.
disk_role :
disk_role.
node_idx :
node_idx.
node_name :
node_name.
wwn :
wwn.
robin_disk_state
BETA
(project)
robin_disk_state
GAUGE , DOUBLE , 1
k8s_pod
The state of disks can be any of the following: 0 = READY 1 = INIT (Initialization) 2 = OFFLINE 3 = FAULTED 4 = ACCESS_FAILE 5 = UNFAULTING 6 = DEGRADED 7 = INIT_FAILED 8 = IN_PROGRESS (Disk operation in progress) 9 = DECOMMISSIONING 10 = EVACUATING 11 = EVACUATED 12 = DETACHED 13 = DETACH_FAILED 14 = ATTACH_FAILED 15 = DETACHING 16 = ATTACHING 17 = REMOVE_FAILED. Sampled every 60 seconds.
devpath :
devpath.
disk_role :
disk_role.
node_idx :
node_idx.
node_name :
node_name.
wwn :
wwn.
robin_manager_services_consul_server
BETA
(project)
robin_manager_services_consul_server
GAUGE , DOUBLE , 1
k8s_pod
The status of consul server. Value 0 = up and 1 = down. Sampled every 60 seconds.
id :
id.
k8s_name :
k8s_name.
name :
name.
robin_manager_services_pgsql
BETA
(project)
robin_manager_services_pgsql
GAUGE , DOUBLE , 1
k8s_pod
The status of PostgreSQL. Value 0 = up and 1 = down. Sampled every 60 seconds.
id :
id.
k8s_name :
k8s_name.
name :
name.
robin_manager_services_robin_event_server
BETA
(project)
robin_manager_services_robin_event_server
GAUGE , DOUBLE , 1
k8s_pod
The status of Robin event server. Value 0 = up and 1 = down. Sampled every 60 seconds.
id :
id.
k8s_name :
k8s_name.
name :
name.
robin_manager_services_robin_master
BETA
(project)
robin_manager_services_robin_master
GAUGE , DOUBLE , 1
k8s_pod
The status to know if current node is master or not. Value 0 = True. Sampled every 60 seconds.
id :
id.
k8s_name :
k8s_name.
name :
name.
robin_manager_services_robin_server
BETA
(project)
robin_manager_services_robin_server
GAUGE , DOUBLE , 1
k8s_pod
The status of Robin server. Value 0 = up and 1 = down. Sampled every 60 seconds.
id :
id.
k8s_name :
k8s_name.
name :
name.
robin_manager_services_stormgr_server
BETA
(project)
robin_manager_services_stormgr_server
GAUGE , DOUBLE , 1
k8s_pod
The status of storage manager server. Value 0 = up and 1 = down. Sampled every 60 seconds.
id :
id.
k8s_name :
k8s_name.
name :
name.
robin_node_state
BETA
(project)
robin_node_state
GAUGE , DOUBLE , 1
k8s_pod
The states of a node. The states can be: 0 = ready, 1 = not ready, 2 = partially ready. Sampled every 60 seconds.
id :
id.
k8s_name :
k8s_name.
name :
name.
robin_node_state_
BETA
(project)
robin_node_state_
GAUGE , DOUBLE , 1
k8s_pod
The states of a node. The states can be: 0 = ready, 1 = not ready, 2 = partially ready. Sampled every 60 seconds.
id :
id.
k8s_name :
k8s_name.
name :
name.
root_ca_cert_publisher_rate_limiter_use
ALPHA
(project)
root_ca_cert_publisher_rate_limiter_use
GAUGE , DOUBLE , 1
k8s_container
A metric measuring the saturation of the rate limiter for root_ca_cert_publisher. Sampled every 60 seconds.
root_ca_cert_publisher_rate_limiter_use/gauge
ALPHA
(project)
root_ca_cert_publisher_rate_limiter_use
GAUGE , DOUBLE , 1
prometheus_target
A metric measuring the saturation of the rate limiter for root_ca_cert_publisher. Sampled every 30 seconds.
root_ca_cert_publisher_sync_duration_seconds
ALPHA
(project)
root_ca_cert_publisher_sync_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
Number of namespace syncs happened in root ca cert publisher. Sampled every 60 seconds.
code :
code.
exported_namespace :
exported_namespace.
root_ca_cert_publisher_sync_total
ALPHA
(project)
root_ca_cert_publisher_sync_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of namespace syncs happened in root ca cert publisher. Sampled every 60 seconds.
code :
code.
exported_namespace :
exported_namespace.
running_managed_controllers
ALPHA
(project)
running_managed_controllers
GAUGE , DOUBLE , 1
k8s_container
[ALPHA] Indicates where instances of a controller are currently running. Sampled every 60 seconds.
manager :
manager.
name :
name.
running_managed_controllers/gauge
ALPHA
(project)
running_managed_controllers
GAUGE , DOUBLE , 1
prometheus_target
[ALPHA] Indicates where instances of a controller are currently running. Sampled every 30 seconds.
manager :
manager.
name :
name.
sanitization_latency_microseconds
ALPHA
(project)
sanitization_latency_microseconds
CUMULATIVE , DISTRIBUTION , us
k8s_container
k8s_pod
Distribution of total time spent in sanitization process. Sampled every 60 seconds.
phase :
phase.
scheduler_binding_duration_seconds
ALPHA
(project)
scheduler_binding_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
(Deprecated since 1.20.0) Binding latency in seconds. Sampled every 60 seconds.
scheduler_binding_latency_microseconds
ALPHA
(project)
scheduler_binding_latency_microseconds
CUMULATIVE , DISTRIBUTION , us
k8s_container
(Deprecated) Binding latency in microseconds. Sampled every 60 seconds.
scheduler_e2e_scheduling_duration_seconds
ALPHA
(project)
scheduler_e2e_scheduling_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
E2e scheduling latency in seconds (scheduling algorithm + binding). Sampled every 60 seconds.
profile :
profile.
result :
result.
scheduler_e2e_scheduling_latency_microseconds
ALPHA
(project)
scheduler_e2e_scheduling_latency_microseconds
CUMULATIVE , DISTRIBUTION , us
k8s_container
(Deprecated) E2e scheduling latency in microseconds (scheduling algorithm + binding). Sampled every 60 seconds.
scheduler_equiv_cache_lookups_total
ALPHA
(project)
scheduler_equiv_cache_lookups_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of equivalence cache lookups, by whether or not a cache entry was found. Sampled every 60 seconds.
result :
result.
scheduler_framework_extension_point_duration_seconds
ALPHA
(project)
scheduler_framework_extension_point_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
Latency for running all plugins of a specific extension point. Sampled every 60 seconds.
extension_point :
extension_point.
profile :
profile.
status :
status.
scheduler_framework_extension_point_duration_seconds/histogram
ALPHA
(project)
scheduler_framework_extension_point_duration_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
Latency for running all plugins of a specific extension point. Sampled every 30 seconds.
extension_point :
extension_point.
profile :
profile.
status :
status.
scheduler_pending_pods
ALPHA
(project)
scheduler_pending_pods
GAUGE , DOUBLE , 1
k8s_container
Number of pending pods, by the queue type. 'active' means number of pods in activeQ; 'backoff' means number of pods in backoffQ; 'unschedulable' means number of pods in unschedulableQ. Sampled every 60 seconds.
queue :
queue.
scheduler_pending_pods/gauge
ALPHA
(project)
scheduler_pending_pods
GAUGE , DOUBLE , 1
prometheus_target
Number of pending pods, by the queue type. 'active' means number of pods in activeQ; 'backoff' means number of pods in backoffQ; 'unschedulable' means number of pods in unschedulableQ. Sampled every 30 seconds.
queue :
queue.
scheduler_plugin_execution_duration_seconds
ALPHA
(project)
scheduler_plugin_execution_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
Duration for running a plugin at a specific extension point. Sampled every 60 seconds.
extension_point :
extension_point.
plugin :
plugin.
status :
status.
scheduler_plugin_execution_duration_seconds/histogram
ALPHA
(project)
scheduler_plugin_execution_duration_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
Duration for running a plugin at a specific extension point. Sampled every 30 seconds.
extension_point :
extension_point.
plugin :
plugin.
status :
status.
scheduler_pod_preemption_victims
ALPHA
(project)
scheduler_pod_preemption_victims
GAUGE , DOUBLE , 1
k8s_container
Number of selected preemption victims. Sampled every 60 seconds.
scheduler_pod_scheduling_attempts
ALPHA
(project)
scheduler_pod_scheduling_attempts
CUMULATIVE , DISTRIBUTION , 1
k8s_container
Number of attempts to successfully schedule a pod. Sampled every 60 seconds.
scheduler_pod_scheduling_attempts/histogram
ALPHA
(project)
scheduler_pod_scheduling_attempts
CUMULATIVE , DISTRIBUTION , 1
prometheus_target
Number of attempts to successfully schedule a pod. Sampled every 30 seconds.
scheduler_pod_scheduling_duration_seconds
ALPHA
(project)
scheduler_pod_scheduling_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
E2e latency for a pod being scheduled which may include multiple scheduling attempts. Sampled every 60 seconds.
attempts :
attempts.
scheduler_pod_scheduling_duration_seconds/histogram
ALPHA
(project)
scheduler_pod_scheduling_duration_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
E2e latency for a pod being scheduled which may include multiple scheduling attempts. Sampled every 30 seconds.
attempts :
attempts.
scheduler_preemption_attempts_total
ALPHA
(project)
scheduler_preemption_attempts_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total preemption attempts in the cluster till now. Sampled every 60 seconds.
scheduler_preemption_attempts_total/counter
ALPHA
(project)
scheduler_preemption_attempts_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Total preemption attempts in the cluster till now. Sampled every 30 seconds.
scheduler_preemption_victims
ALPHA
(project)
scheduler_preemption_victims
CUMULATIVE , DISTRIBUTION , 1
k8s_container
Number of selected preemption victims. Sampled every 60 seconds.
scheduler_preemption_victims/histogram
ALPHA
(project)
scheduler_preemption_victims
CUMULATIVE , DISTRIBUTION , 1
prometheus_target
Number of selected preemption victims. Sampled every 30 seconds.
scheduler_queue_incoming_pods_total
ALPHA
(project)
scheduler_queue_incoming_pods_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of pods added to scheduling queues by event and queue type. Sampled every 60 seconds.
event :
event.
queue :
queue.
scheduler_queue_incoming_pods_total/counter
ALPHA
(project)
scheduler_queue_incoming_pods_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Number of pods added to scheduling queues by event and queue type. Sampled every 30 seconds.
event :
event.
queue :
queue.
scheduler_schedule_attempts_total
ALPHA
(project)
scheduler_schedule_attempts_total
CUMULATIVE , DOUBLE , 1
k8s_container
Number of attempts to schedule pods, by the result. 'unschedulable' means a pod could not be scheduled, while 'error' means an internal scheduler problem. Sampled every 60 seconds.
profile :
profile.
result :
result.
scheduler_schedule_attempts_total/counter
ALPHA
(project)
scheduler_schedule_attempts_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Number of attempts to schedule pods, by the result. 'unschedulable' means a pod could not be scheduled, while 'error' means an internal scheduler problem. Sampled every 30 seconds.
profile :
profile.
result :
result.
scheduler_scheduler_cache_size
ALPHA
(project)
scheduler_scheduler_cache_size
GAUGE , DOUBLE , 1
k8s_container
Number of nodes, pods, and assumed (bound) pods in the scheduler cache. Sampled every 60 seconds.
type :
type.
scheduler_scheduler_cache_size/gauge
ALPHA
(project)
scheduler_scheduler_cache_size
GAUGE , DOUBLE , 1
prometheus_target
Number of nodes, pods, and assumed (bound) pods in the scheduler cache. Sampled every 30 seconds.
type :
type.
scheduler_scheduler_goroutines
ALPHA
(project)
scheduler_scheduler_goroutines
GAUGE , DOUBLE , 1
k8s_container
Number of running goroutines split by the work they do such as binding. Sampled every 60 seconds.
work :
work.
scheduler_scheduler_goroutines/gauge
ALPHA
(project)
scheduler_scheduler_goroutines
GAUGE , DOUBLE , 1
prometheus_target
Number of running goroutines split by the work they do such as binding. Sampled every 30 seconds.
work :
work.
scheduler_scheduling_algorithm_duration_seconds
ALPHA
(project)
scheduler_scheduling_algorithm_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
Scheduling algorithm latency in seconds. Sampled every 60 seconds.
scheduler_scheduling_algorithm_duration_seconds/histogram
ALPHA
(project)
scheduler_scheduling_algorithm_duration_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
Scheduling algorithm latency in seconds. Sampled every 30 seconds.
scheduler_scheduling_algorithm_latency_microseconds
ALPHA
(project)
scheduler_scheduling_algorithm_latency_microseconds
CUMULATIVE , DISTRIBUTION , 1
k8s_container
(Deprecated) Scheduling algorithm latency in microseconds. Sampled every 60 seconds.
scheduler_scheduling_algorithm_predicate_evaluation
ALPHA
(project)
scheduler_scheduling_algorithm_predicate_evaluation
CUMULATIVE , DISTRIBUTION , 1
k8s_container
(Deprecated) Scheduling algorithm predicate evaluation duration in microseconds. Sampled every 60 seconds.
scheduler_scheduling_algorithm_predicate_evaluation_seconds
ALPHA
(project)
scheduler_scheduling_algorithm_predicate_evaluation_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
(Deprecated since 1.19.0) Scheduling algorithm predicate evaluation duration in seconds. Sampled every 60 seconds.
scheduler_scheduling_algorithm_preemption_evaluation
ALPHA
(project)
scheduler_scheduling_algorithm_preemption_evaluation
CUMULATIVE , DISTRIBUTION , 1
k8s_container
(Deprecated) Scheduling algorithm preemption evaluation duration in microseconds. Sampled every 60 seconds.
scheduler_scheduling_algorithm_preemption_evaluation_seconds
ALPHA
(project)
scheduler_scheduling_algorithm_preemption_evaluation_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
(Deprecated since 1.20.0) Scheduling algorithm preemption evaluation duration in seconds. Sampled every 60 seconds.
scheduler_scheduling_algorithm_priority_evaluation
ALPHA
(project)
scheduler_scheduling_algorithm_priority_evaluation
CUMULATIVE , DISTRIBUTION , 1
k8s_container
(Deprecated) Scheduling algorithm priority evaluation duration in microseconds. Sampled every 60 seconds.
scheduler_scheduling_algorithm_priority_evaluation_seconds
ALPHA
(project)
scheduler_scheduling_algorithm_priority_evaluation_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
(Deprecated since 1.19.0) Scheduling algorithm priority evaluation duration in seconds. Sampled every 60 seconds.
scheduler_scheduling_attempt_duration_seconds
ALPHA
(project)
scheduler_scheduling_attempt_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
[STABLE] Scheduling attempt latency in seconds (scheduling algorithm + binding) Sampled every 60 seconds.
profile :
profile.
result :
result.
scheduler_scheduling_attempt_duration_seconds/histogram
ALPHA
(project)
scheduler_scheduling_attempt_duration_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
[STABLE] Scheduling attempt latency in seconds (scheduling algorithm + binding) Sampled every 30 seconds.
profile :
profile.
result :
result.
scheduler_scheduling_duration_seconds
ALPHA
(project)
scheduler_scheduling_duration_seconds
GAUGE , DOUBLE , s
k8s_container
(Deprecated since 1.19.0) Scheduling latency in seconds split by sub-parts of the scheduling operation. Sampled every 60 seconds.
operation :
operation.
quantile :
quantile.
scheduler_scheduling_duration_seconds_count
ALPHA
(project)
scheduler_scheduling_duration_seconds_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated since 1.19.0) Scheduling latency in seconds split by sub-parts of the scheduling operation. Sampled every 60 seconds.
operation :
operation.
scheduler_scheduling_duration_seconds_sum
ALPHA
(project)
scheduler_scheduling_duration_seconds_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated since 1.19.0) Scheduling latency in seconds split by sub-parts of the scheduling operation. Sampled every 60 seconds.
operation :
operation.
scheduler_scheduling_latency_seconds
ALPHA
(project)
scheduler_scheduling_latency_seconds
GAUGE , DOUBLE , s
k8s_container
(Deprecated) Scheduling latency in seconds split by sub-parts of the scheduling operation. Sampled every 60 seconds.
operation :
operation.
quantile :
quantile.
scheduler_scheduling_latency_seconds_count
ALPHA
(project)
scheduler_scheduling_latency_seconds_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) Scheduling latency in seconds split by sub-parts of the scheduling operation. Sampled every 60 seconds.
operation :
operation.
scheduler_scheduling_latency_seconds_sum
ALPHA
(project)
scheduler_scheduling_latency_seconds_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Scheduling latency in seconds split by sub-parts of the scheduling operation. Sampled every 60 seconds.
operation :
operation.
scheduler_total_preemption_attempts
ALPHA
(project)
scheduler_total_preemption_attempts
CUMULATIVE , DOUBLE , 1
k8s_container
Total preemption attempts in the cluster till now. Sampled every 60 seconds.
scheduler_unschedulable_pods
ALPHA
(project)
scheduler_unschedulable_pods
GAUGE , DOUBLE , 1
k8s_container
[ALPHA] The number of unschedulable pods broken down by plugin name. A pod will increment the gauge for all plugins that caused it to not schedule and so this metric have meaning only when broken down by plugin. Sampled every 60 seconds.
plugin :
plugin.
profile :
profile.
scheduler_unschedulable_pods/gauge
ALPHA
(project)
scheduler_unschedulable_pods
GAUGE , DOUBLE , 1
prometheus_target
[ALPHA] The number of unschedulable pods broken down by plugin name. A pod will increment the gauge for all plugins that caused it to not schedule and so this metric have meaning only when broken down by plugin. Sampled every 30 seconds.
plugin :
plugin.
profile :
profile.
scheduler_volume_scheduling_duration_seconds
ALPHA
(project)
scheduler_volume_scheduling_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
(Deprecated since 1.19.0) Volume scheduling stage latency. Sampled every 60 seconds.
operation :
operation.
scheduler_volume_scheduling_stage_error_total
ALPHA
(project)
scheduler_volume_scheduling_stage_error_total
CUMULATIVE , DOUBLE , 1
k8s_container
Volume scheduling stage error count. Sampled every 60 seconds.
operation :
operation.
scrape_duration_seconds
ALPHA
(project)
scrape_duration_seconds
GAUGE , DOUBLE , s
anthos_l4lb
k8s_container
k8s_node
k8s_pod
Duration of the scrape. Sampled every 60 seconds.
scrape_duration_seconds/gauge
ALPHA
(project)
scrape_duration_seconds
GAUGE , DOUBLE , s
prometheus_target
Duration of the scrape. Sampled every 30 seconds.
scrape_samples_post_metric_relabeling
ALPHA
(project)
scrape_samples_post_metric_relabeling
GAUGE , DOUBLE , 1
anthos_l4lb
k8s_container
k8s_node
k8s_pod
The number of samples remaining after metric relabeling was applied. Sampled every 60 seconds.
scrape_samples_post_metric_relabeling/gauge
ALPHA
(project)
scrape_samples_post_metric_relabeling
GAUGE , DOUBLE , 1
prometheus_target
The number of samples remaining after metric relabeling was applied. Sampled every 30 seconds.
scrape_samples_scraped
ALPHA
(project)
scrape_samples_scraped
GAUGE , DOUBLE , 1
anthos_l4lb
k8s_container
k8s_node
k8s_pod
The number of samples the target exposed. Sampled every 60 seconds.
scrape_samples_scraped/gauge
ALPHA
(project)
scrape_samples_scraped
GAUGE , DOUBLE , 1
prometheus_target
The number of samples the target exposed. Sampled every 30 seconds.
scrape_series_added
ALPHA
(project)
scrape_series_added
GAUGE , DOUBLE , 1
k8s_container
The approximate number of new series in this scrape. Sampled every 60 seconds.
scrape_series_added/gauge
ALPHA
(project)
scrape_series_added
GAUGE , DOUBLE , 1
prometheus_target
The approximate number of new series in this scrape. Sampled every 30 seconds.
seesaw_active_connection_by_backend
ALPHA
(project)
seesaw_active_connection_by_backend
GAUGE , DOUBLE , 1
anthos_l4lb
Number of active connections per backend. Sampled every 60 seconds.
backend_node :
backend_node.
seesaw_active_connection_by_service
ALPHA
(project)
seesaw_active_connection_by_service
GAUGE , DOUBLE , 1
anthos_l4lb
Number of active connections per service. Sampled every 60 seconds.
service_name :
service_name.
service_port :
service_port.
service_proto :
service_proto.
seesaw_cpu_usage_time
ALPHA
(project)
seesaw_cpu_usage_time
CUMULATIVE , DOUBLE , s
anthos_l4lb
Time in second that CPU is being used. Sampled every 60 seconds.
seesaw_healthy_backend
ALPHA
(project)
seesaw_healthy_backend
GAUGE , DOUBLE , 1
anthos_l4lb
Number of healthy backends per service. Sampled every 60 seconds.
service_name :
service_name.
seesaw_ingress_bytes_count_by_backend
ALPHA
(project)
seesaw_ingress_bytes_count_by_backend
CUMULATIVE , DOUBLE , By
anthos_l4lb
Number of ingress bytes per backend. Sampled every 60 seconds.
backend_node :
backend_node.
seesaw_ingress_bytes_count_by_service
ALPHA
(project)
seesaw_ingress_bytes_count_by_service
CUMULATIVE , DOUBLE , By
anthos_l4lb
Number of ingress bytes per service. Sampled every 60 seconds.
service_name :
service_name.
service_port :
service_port.
service_proto :
service_proto.
seesaw_is_master
ALPHA
(project)
seesaw_is_master
GAUGE , DOUBLE , 1
anthos_l4lb
A bool value showing if current instance is master. Sampled every 60 seconds.
seesaw_memory_total_bytes
ALPHA
(project)
seesaw_memory_total_bytes
GAUGE , DOUBLE , By
anthos_l4lb
Total memory of the instance. Sampled every 60 seconds.
seesaw_memory_used_bytes
ALPHA
(project)
seesaw_memory_used_bytes
GAUGE , DOUBLE , By
anthos_l4lb
Memory being used. Sampled every 60 seconds.
seesaw_packets_count_by_backend
ALPHA
(project)
seesaw_packets_count_by_backend
CUMULATIVE , DOUBLE , 1
anthos_l4lb
Number of packets per backend. Sampled every 60 seconds.
backend_node :
backend_node.
seesaw_packets_count_by_service
ALPHA
(project)
seesaw_packets_count_by_service
CUMULATIVE , DOUBLE , 1
anthos_l4lb
Number of packets per service. Sampled every 60 seconds.
service_name :
service_name.
service_port :
service_port.
service_proto :
service_proto.
seesaw_uptime
ALPHA
(project)
seesaw_uptime
CUMULATIVE , DOUBLE , s
anthos_l4lb
Duration in second that Seesaw engine has been running. Sampled every 60 seconds.
service_adds
ALPHA
(project)
service_adds
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of adds handled by workqueue: service. Sampled every 60 seconds.
service_controller_nodesync_latency_seconds
ALPHA
(project)
service_controller_nodesync_latency_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
A metric measuring the latency for nodesync which updates loadbalancer hosts on cluster node updates. Sampled every 60 seconds.
service_controller_nodesync_latency_seconds/histogram
ALPHA
(project)
service_controller_nodesync_latency_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
A metric measuring the latency for nodesync which updates loadbalancer hosts on cluster node updates. Sampled every 30 seconds.
service_controller_rate_limiter_use
ALPHA
(project)
service_controller_rate_limiter_use
GAUGE , DOUBLE , 1
k8s_container
A metric measuring the saturation of the rate limiter for service_controller. Sampled every 60 seconds.
service_controller_rate_limiter_use/gauge
ALPHA
(project)
service_controller_rate_limiter_use
GAUGE , DOUBLE , 1
prometheus_target
A metric measuring the saturation of the rate limiter for service_controller. Sampled every 30 seconds.
service_controller_update_loadbalancer_host_latency_seconds
ALPHA
(project)
service_controller_update_loadbalancer_host_latency_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
A metric measuring the latency for updating each load balancer hosts. Sampled every 60 seconds.
service_depth
ALPHA
(project)
service_depth
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) Current depth of workqueue: service. Sampled every 60 seconds.
service_longest_running_processor_microseconds
ALPHA
(project)
service_longest_running_processor_microseconds
GAUGE , DOUBLE , us
k8s_container
(Deprecated) How many microseconds has the longest running processor for service been running. Sampled every 60 seconds.
service_queue_latency
ALPHA
(project)
service_queue_latency
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How many microseconds has the longest running processor for service been running. Sampled every 60 seconds.
quantile :
quantile.
service_queue_latency_count
ALPHA
(project)
service_queue_latency_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long an item stays in workqueueservice before being requested. Sampled every 60 seconds.
service_queue_latency_sum
ALPHA
(project)
service_queue_latency_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueueservice before being requested. Sampled every 60 seconds.
service_retries
ALPHA
(project)
service_retries
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of retries handled by workqueue: service. Sampled every 60 seconds.
service_unfinished_work_seconds
ALPHA
(project)
service_unfinished_work_seconds
GAUGE , DOUBLE , s
k8s_container
(Deprecated) How many seconds of work service has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases. Sampled every 60 seconds.
service_work_duration
ALPHA
(project)
service_work_duration
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How many seconds of work service has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases. Sampled every 60 seconds.
quantile :
quantile.
service_work_duration_count
ALPHA
(project)
service_work_duration_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long processing an item from workqueueservice takes. Sampled every 60 seconds.
service_work_duration_sum
ALPHA
(project)
service_work_duration_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueueservice takes. Sampled every 60 seconds.
serviceaccount_adds
ALPHA
(project)
serviceaccount_adds
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of adds handled by workqueue: serviceaccount. Sampled every 60 seconds.
serviceaccount_controller_rate_limiter_use
ALPHA
(project)
serviceaccount_controller_rate_limiter_use
GAUGE , DOUBLE , 1
k8s_container
A metric measuring the saturation of the rate limiter for serviceaccount_controller. Sampled every 60 seconds.
serviceaccount_controller_rate_limiter_use/gauge
ALPHA
(project)
serviceaccount_controller_rate_limiter_use
GAUGE , DOUBLE , 1
prometheus_target
A metric measuring the saturation of the rate limiter for serviceaccount_controller. Sampled every 30 seconds.
serviceaccount_depth
ALPHA
(project)
serviceaccount_depth
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) Current depth of workqueue: serviceaccount. Sampled every 60 seconds.
serviceaccount_legacy_tokens_total
ALPHA
(project)
serviceaccount_legacy_tokens_total
CUMULATIVE , DOUBLE , 1
k8s_container
Cumulative legacy service account tokens used. Sampled every 60 seconds.
serviceaccount_legacy_tokens_total/counter
ALPHA
(project)
serviceaccount_legacy_tokens_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Cumulative legacy service account tokens used. Sampled every 30 seconds.
serviceaccount_longest_running_processor_microseconds
ALPHA
(project)
serviceaccount_longest_running_processor_microseconds
GAUGE , DOUBLE , us
k8s_container
(Deprecated) How many microseconds has the longest running processor for serviceaccount been running. Sampled every 60 seconds.
serviceaccount_queue_latency
ALPHA
(project)
serviceaccount_queue_latency
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueueserviceaccount before being requested. Sampled every 60 seconds.
quantile :
quantile.
serviceaccount_queue_latency_count
ALPHA
(project)
serviceaccount_queue_latency_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long an item stays in workqueueserviceaccount before being requested. Sampled every 60 seconds.
serviceaccount_queue_latency_sum
ALPHA
(project)
serviceaccount_queue_latency_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueueserviceaccount before being requested. Sampled every 60 seconds.
serviceaccount_retries
ALPHA
(project)
serviceaccount_retries
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of retries handled by workqueue: serviceaccount. Sampled every 60 seconds.
serviceaccount_stale_tokens_total
ALPHA
(project)
serviceaccount_stale_tokens_total
CUMULATIVE , DOUBLE , 1
k8s_container
Cumulative stale projected service account tokens used. Sampled every 60 seconds.
serviceaccount_stale_tokens_total/counter
ALPHA
(project)
serviceaccount_stale_tokens_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Cumulative stale projected service account tokens used. Sampled every 30 seconds.
serviceaccount_tokens_controller_rate_limiter_use
ALPHA
(project)
serviceaccount_tokens_controller_rate_limiter_use
GAUGE , DOUBLE , 1
k8s_container
A metric measuring the saturation of the rate limiter for serviceaccount_tokens_controller. Sampled every 60 seconds.
serviceaccount_tokens_controller_rate_limiter_use/gauge
ALPHA
(project)
serviceaccount_tokens_controller_rate_limiter_use
GAUGE , DOUBLE , 1
prometheus_target
A metric measuring the saturation of the rate limiter for serviceaccount_tokens_controller. Sampled every 30 seconds.
serviceaccount_tokens_secret_adds
ALPHA
(project)
serviceaccount_tokens_secret_adds
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of adds handled by workqueue: serviceaccount_tokens_secret. Sampled every 60 seconds.
serviceaccount_tokens_secret_depth
ALPHA
(project)
serviceaccount_tokens_secret_depth
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) Current depth of workqueue: serviceaccount_tokens_secret. Sampled every 60 seconds.
serviceaccount_tokens_secret_longest_running_processor_microseconds
ALPHA
(project)
serviceaccount_tokens_secret_longest_running_processor_microseconds
GAUGE , DOUBLE , us
k8s_container
(Deprecated) How many microseconds has the longest running processor for serviceaccount_tokens_secret been running. Sampled every 60 seconds.
serviceaccount_tokens_secret_queue_latency
ALPHA
(project)
serviceaccount_tokens_secret_queue_latency
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueueserviceaccount_tokens_secret before being requested. Sampled every 60 seconds.
quantile :
quantile.
serviceaccount_tokens_secret_queue_latency_count
ALPHA
(project)
serviceaccount_tokens_secret_queue_latency_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long an item stays in workqueueserviceaccount_tokens_secret before being requested. Sampled every 60 seconds.
serviceaccount_tokens_secret_queue_latency_sum
ALPHA
(project)
serviceaccount_tokens_secret_queue_latency_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueueserviceaccount_tokens_secret before being requested. Sampled every 60 seconds.
serviceaccount_tokens_secret_retries
ALPHA
(project)
serviceaccount_tokens_secret_retries
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of retries handled by workqueue: serviceaccount_tokens_secret. Sampled every 60 seconds.
serviceaccount_tokens_secret_unfinished_work_seconds
ALPHA
(project)
serviceaccount_tokens_secret_unfinished_work_seconds
GAUGE , DOUBLE , s
k8s_container
(Deprecated) How many seconds of work serviceaccount_tokens_secret has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases. Sampled every 60 seconds.
serviceaccount_tokens_secret_work_duration
ALPHA
(project)
serviceaccount_tokens_secret_work_duration
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueueserviceaccount_tokens_secret takes. Sampled every 60 seconds.
quantile :
quantile.
serviceaccount_tokens_secret_work_duration_count
ALPHA
(project)
serviceaccount_tokens_secret_work_duration_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long processing an item from workqueueserviceaccount_tokens_secret takes. Sampled every 60 seconds.
serviceaccount_tokens_secret_work_duration_sum
ALPHA
(project)
serviceaccount_tokens_secret_work_duration_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueueserviceaccount_tokens_secret takes. Sampled every 60 seconds.
serviceaccount_tokens_service_adds
ALPHA
(project)
serviceaccount_tokens_service_adds
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of adds handled by workqueue: serviceaccount_tokens_service. Sampled every 60 seconds.
serviceaccount_tokens_service_depth
ALPHA
(project)
serviceaccount_tokens_service_depth
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) Current depth of workqueue: serviceaccount_tokens_service. Sampled every 60 seconds.
serviceaccount_tokens_service_longest_running_processor_microseconds
ALPHA
(project)
serviceaccount_tokens_service_longest_running_processor_microseconds
GAUGE , DOUBLE , us
k8s_container
(Deprecated) How many microseconds has the longest running processor for serviceaccount_tokens_service been running. Sampled every 60 seconds.
serviceaccount_tokens_service_queue_latency
ALPHA
(project)
serviceaccount_tokens_service_queue_latency
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueueserviceaccount_tokens_service before being requested. Sampled every 60 seconds.
quantile :
quantile.
serviceaccount_tokens_service_queue_latency_count
ALPHA
(project)
serviceaccount_tokens_service_queue_latency_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long an item stays in workqueueserviceaccount_tokens_service before being requested. Sampled every 60 seconds.
serviceaccount_tokens_service_queue_latency_sum
ALPHA
(project)
serviceaccount_tokens_service_queue_latency_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueueserviceaccount_tokens_service before being requested. Sampled every 60 seconds.
serviceaccount_tokens_service_retries
ALPHA
(project)
serviceaccount_tokens_service_retries
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of retries handled by workqueue: serviceaccount_tokens_service. Sampled every 60 seconds.
serviceaccount_tokens_service_unfinished_work_seconds
ALPHA
(project)
serviceaccount_tokens_service_unfinished_work_seconds
GAUGE , DOUBLE , s
k8s_container
(Deprecated) How many seconds of work serviceaccount_tokens_service has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases. Sampled every 60 seconds.
serviceaccount_tokens_service_work_duration
ALPHA
(project)
serviceaccount_tokens_service_work_duration
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueueserviceaccount_tokens_service takes. Sampled every 60 seconds.
quantile :
quantile.
serviceaccount_tokens_service_work_duration_count
ALPHA
(project)
serviceaccount_tokens_service_work_duration_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long processing an item from workqueueserviceaccount_tokens_service takes. Sampled every 60 seconds.
serviceaccount_tokens_service_work_duration_sum
ALPHA
(project)
serviceaccount_tokens_service_work_duration_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueueserviceaccount_tokens_service takes. Sampled every 60 seconds.
serviceaccount_unfinished_work_seconds
ALPHA
(project)
serviceaccount_unfinished_work_seconds
GAUGE , DOUBLE , s
k8s_container
(Deprecated) How many seconds of work serviceaccount has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases. Sampled every 60 seconds.
serviceaccount_valid_tokens_total
ALPHA
(project)
serviceaccount_valid_tokens_total
CUMULATIVE , DOUBLE , 1
k8s_container
Cumulative valid projected service account tokens used. Sampled every 60 seconds.
serviceaccount_valid_tokens_total/counter
ALPHA
(project)
serviceaccount_valid_tokens_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Cumulative valid projected service account tokens used. Sampled every 30 seconds.
serviceaccount_work_duration
ALPHA
(project)
serviceaccount_work_duration
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueueserviceaccount takes. Sampled every 60 seconds.
quantile :
quantile.
serviceaccount_work_duration_count
ALPHA
(project)
serviceaccount_work_duration_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long processing an item from workqueueserviceaccount takes. Sampled every 60 seconds.
serviceaccount_work_duration_sum
ALPHA
(project)
serviceaccount_work_duration_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueueserviceaccount takes. Sampled every 60 seconds.
ssh_tunnel_open_count
ALPHA
(project)
ssh_tunnel_open_count
CUMULATIVE , DOUBLE , 1
k8s_container
Counter of ssh tunnel total open attempts. Sampled every 60 seconds.
ssh_tunnel_open_fail_count
ALPHA
(project)
ssh_tunnel_open_fail_count
CUMULATIVE , DOUBLE , 1
k8s_container
Counter of ssh tunnel failed open attempts. Sampled every 60 seconds.
stackdriver_dropped_entries_count
ALPHA
(project)
stackdriver_dropped_entries_count
CUMULATIVE , DOUBLE , 1
k8s_container
A number of log entries dropped by the Stackdriver output plugin. Sampled every 60 seconds.
code :
code.
grpc :
grpc.
stackdriver_failed_requests_count
ALPHA
(project)
stackdriver_failed_requests_count
CUMULATIVE , DOUBLE , 1
k8s_container
A number of failed requests to the Stackdriver Logging API, broken down by the error code. Sampled every 60 seconds.
code :
code.
grpc :
grpc.
stackdriver_ingested_entries_count
ALPHA
(project)
stackdriver_ingested_entries_count
CUMULATIVE , DOUBLE , 1
k8s_container
A number of log entries ingested by Stackdriver Logging. Sampled every 60 seconds.
code :
code.
grpc :
grpc.
stackdriver_successful_requests_count
ALPHA
(project)
stackdriver_successful_requests_count
CUMULATIVE , DOUBLE , 1
k8s_container
A number of successful requests to the Stackdriver Logging API. Sampled every 60 seconds.
code :
code.
grpc :
grpc.
statefulset_adds
ALPHA
(project)
statefulset_adds
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of adds handled by workqueue: statefulset. Sampled every 60 seconds.
statefulset_depth
ALPHA
(project)
statefulset_depth
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) Current depth of workqueue: statefulset. Sampled every 60 seconds.
statefulset_longest_running_processor_microseconds
ALPHA
(project)
statefulset_longest_running_processor_microseconds
GAUGE , DOUBLE , us
k8s_container
(Deprecated) How many microseconds has the longest running processor for statefulset been running. Sampled every 60 seconds.
statefulset_queue_latency
ALPHA
(project)
statefulset_queue_latency
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuestatefulset before being requested. Sampled every 60 seconds.
quantile :
quantile.
statefulset_queue_latency_count
ALPHA
(project)
statefulset_queue_latency_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long an item stays in workqueuestatefulset before being requested. Sampled every 60 seconds.
statefulset_queue_latency_sum
ALPHA
(project)
statefulset_queue_latency_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuestatefulset before being requested. Sampled every 60 seconds.
statefulset_retries
ALPHA
(project)
statefulset_retries
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of retries handled by workqueue: statefulset. Sampled every 60 seconds.
statefulset_unfinished_work_seconds
ALPHA
(project)
statefulset_unfinished_work_seconds
GAUGE , DOUBLE , s
k8s_container
(Deprecated) How many seconds of work statefulset has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases. Sampled every 60 seconds.
statefulset_work_duration
ALPHA
(project)
statefulset_work_duration
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuestatefulset takes. Sampled every 60 seconds.
quantile :
quantile.
statefulset_work_duration_count
ALPHA
(project)
statefulset_work_duration_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long processing an item from workqueuestatefulset takes. Sampled every 60 seconds.
statefulset_work_duration_sum
ALPHA
(project)
statefulset_work_duration_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuestatefulset takes. Sampled every 60 seconds.
storage_count_attachable_volumes_in_use
ALPHA
(project)
storage_count_attachable_volumes_in_use
GAUGE , DOUBLE , 1
k8s_container
Measure number of volumes in use. Sampled every 60 seconds.
node :
node.
volume_plugin :
volume_plugin.
storage_operation_duration_seconds
ALPHA
(project)
storage_operation_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
k8s_node
Storage operation duration. Sampled every 60 seconds.
migrated :
migrated.
operation_name :
operation_name.
status :
status.
volume_plugin :
volume_plugin.
storage_operation_duration_seconds/histogram
ALPHA
(project)
storage_operation_duration_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
Storage operation duration. Sampled every 30 seconds.
migrated :
migrated.
operation_name :
operation_name.
status :
status.
volume_plugin :
volume_plugin.
storage_operation_errors_total
ALPHA
(project)
storage_operation_errors_total
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_node
Storage operation errors (Deprecated since 1.21.0). Sampled every 60 seconds.
operation_name :
operation_name.
volume_plugin :
volume_plugin.
storage_operation_errors_total/counter
ALPHA
(project)
storage_operation_errors_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Storage operation errors (Deprecated since 1.21.0). Sampled every 30 seconds.
operation_name :
operation_name.
volume_plugin :
volume_plugin.
storage_operation_status_count
ALPHA
(project)
storage_operation_status_count
CUMULATIVE , DOUBLE , 1
k8s_container
k8s_node
Storage operation return statuses count (Deprecated since 1.21.0). Sampled every 60 seconds.
operation_name :
operation_name.
status :
status.
volume_plugin :
volume_plugin.
storage_operation_status_count/counter
ALPHA
(project)
storage_operation_status_count
CUMULATIVE , DOUBLE , 1
prometheus_target
Storage operation return statuses count (Deprecated since 1.21.0). Sampled every 30 seconds.
operation_name :
operation_name.
status :
status.
volume_plugin :
volume_plugin.
token_cleaner_adds
ALPHA
(project)
token_cleaner_adds
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of adds handled by workqueue: token_cleaner. Sampled every 60 seconds.
token_cleaner_depth
ALPHA
(project)
token_cleaner_depth
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) Current depth of workqueue: token_cleaner. Sampled every 60 seconds.
token_cleaner_longest_running_processor_microseconds
ALPHA
(project)
token_cleaner_longest_running_processor_microseconds
GAUGE , DOUBLE , us
k8s_container
(Deprecated) How many microseconds has the longest running processor for token_cleaner been running. Sampled every 60 seconds.
token_cleaner_queue_latency
ALPHA
(project)
token_cleaner_queue_latency
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How many microseconds has the longest running processor for token_cleaner been running. Sampled every 60 seconds.
quantile :
quantile.
token_cleaner_queue_latency_count
ALPHA
(project)
token_cleaner_queue_latency_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long an item stays in workqueuetoken_cleaner before being requested. Sampled every 60 seconds.
token_cleaner_queue_latency_sum
ALPHA
(project)
token_cleaner_queue_latency_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuetoken_cleaner before being requested. Sampled every 60 seconds.
token_cleaner_rate_limiter_use
ALPHA
(project)
token_cleaner_rate_limiter_use
GAUGE , DOUBLE , 1
k8s_container
A metric measuring the saturation of the rate limiter for token_cleaner. Sampled every 60 seconds.
token_cleaner_rate_limiter_use/gauge
ALPHA
(project)
token_cleaner_rate_limiter_use
GAUGE , DOUBLE , 1
prometheus_target
A metric measuring the saturation of the rate limiter for token_cleaner. Sampled every 30 seconds.
token_cleaner_retries
ALPHA
(project)
token_cleaner_retries
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of retries handled by workqueue: token_cleaner. Sampled every 60 seconds.
token_cleaner_unfinished_work_seconds
ALPHA
(project)
token_cleaner_unfinished_work_seconds
GAUGE , DOUBLE , s
k8s_container
(Deprecated) How many seconds of work token_cleaner has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases. Sampled every 60 seconds.
token_cleaner_work_duration
ALPHA
(project)
token_cleaner_work_duration
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How many seconds of work token_cleaner has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases. Sampled every 60 seconds.
quantile :
quantile.
token_cleaner_work_duration_count
ALPHA
(project)
token_cleaner_work_duration_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long processing an item from workqueuetoken_cleaner takes. Sampled every 60 seconds.
token_cleaner_work_duration_sum
ALPHA
(project)
token_cleaner_work_duration_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuetoken_cleaner takes. Sampled every 60 seconds.
ttl_after_finished_controller_job_deletion_duration_seconds
ALPHA
(project)
ttl_after_finished_controller_job_deletion_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
The time it took to delete the job since it became eligible for deletion. Sampled every 60 seconds.
ttl_after_finished_controller_rate_limiter_use
ALPHA
(project)
ttl_after_finished_controller_rate_limiter_use
GAUGE , DOUBLE , 1
k8s_container
A metric measuring the saturation of the rate limiter for ttl_after_finished_controller. Sampled every 60 seconds.
ttl_after_finished_controller_rate_limiter_use/gauge
ALPHA
(project)
ttl_after_finished_controller_rate_limiter_use
GAUGE , DOUBLE , 1
prometheus_target
A metric measuring the saturation of the rate limiter for ttl_after_finished_controller. Sampled every 30 seconds.
ttlcontroller_adds
ALPHA
(project)
ttlcontroller_adds
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of adds handled by workqueue: ttlcontroller. Sampled every 60 seconds.
ttlcontroller_depth
ALPHA
(project)
ttlcontroller_depth
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) Current depth of workqueue: ttlcontroller. Sampled every 60 seconds.
ttlcontroller_longest_running_processor_microseconds
ALPHA
(project)
ttlcontroller_longest_running_processor_microseconds
GAUGE , DOUBLE , us
k8s_container
(Deprecated) How many microseconds has the longest running processor for ttlcontroller been running. Sampled every 60 seconds.
ttlcontroller_queue_latency
ALPHA
(project)
ttlcontroller_queue_latency
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuettlcontroller before being requested. Sampled every 60 seconds.
quantile :
quantile.
ttlcontroller_queue_latency_count
ALPHA
(project)
ttlcontroller_queue_latency_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long an item stays in workqueuettlcontroller before being requested. Sampled every 60 seconds.
ttlcontroller_queue_latency_sum
ALPHA
(project)
ttlcontroller_queue_latency_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuettlcontroller before being requested. Sampled every 60 seconds.
ttlcontroller_retries
ALPHA
(project)
ttlcontroller_retries
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of retries handled by workqueue: ttlcontroller. Sampled every 60 seconds.
ttlcontroller_unfinished_work_seconds
ALPHA
(project)
ttlcontroller_unfinished_work_seconds
GAUGE , DOUBLE , s
k8s_container
(Deprecated) How many seconds of work ttlcontroller has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases. Sampled every 60 seconds.
ttlcontroller_work_duration
ALPHA
(project)
ttlcontroller_work_duration
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuettlcontroller takes. Sampled every 60 seconds.
quantile :
quantile.
ttlcontroller_work_duration_count
ALPHA
(project)
ttlcontroller_work_duration_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long processing an item from workqueuettlcontroller takes. Sampled every 60 seconds.
ttlcontroller_work_duration_sum
ALPHA
(project)
ttlcontroller_work_duration_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuettlcontroller takes. Sampled every 60 seconds.
up
ALPHA
(project)
up
GAUGE , DOUBLE , 1
k8s_container
k8s_node
k8s_pod
Up indicates whether the last target scrape was successful. Sampled every 60 seconds.
up/gauge
ALPHA
(project)
up
GAUGE , DOUBLE , 1
prometheus_target
Up indicates whether the last target scrape was successful. Sampled every 30 seconds.
uptime
ALPHA
(project)
uptime
CUMULATIVE , DOUBLE , 1
k8s_container
Uptime of Logging agent. Sampled every 60 seconds.
version :
version.
vcenter_api_request_total
ALPHA
(project)
vcenter_api_request_total
CUMULATIVE , DOUBLE , 1
k8s_pod
No of vsphere calls that were successful. Sampled every 60 seconds.
vcenter_info
ALPHA
(project)
vcenter_info
GAUGE , DOUBLE , 1
k8s_pod
Version of vcenter server. Sampled every 300 seconds.
build :
build.
version :
version.
vm_config_number
ALPHA
(project)
vm_config_number
GAUGE , DOUBLE , 1
k8s_pod
Number of VirtualMachines with the configuration in the esxi cluster. Sampled every 60 seconds.
version :
version.
vm_cpu_ready_seconds
ALPHA
(project)
vm_cpu_ready_seconds
CUMULATIVE , DOUBLE , s
k8s_pod
Time spent waiting for the CPU to be ready. Sampled every 60 seconds.
node :
node.
vm_disk_read_bytes_total
ALPHA
(project)
vm_disk_read_bytes_total
CUMULATIVE , DOUBLE , By
k8s_pod
Total number of bytes read successfully, measured by vsphere. Sampled every 60 seconds.
node :
node.
vm_disk_write_bytes_total
ALPHA
(project)
vm_disk_write_bytes_total
CUMULATIVE , DOUBLE , By
k8s_pod
Total number of bytes written successfully, measured by vsphere. Sampled every 60 seconds.
node :
node.
vm_memory_access_latency
ALPHA
(project)
vm_memory_access_latency
GAUGE , DOUBLE , 1
k8s_pod
Percentage of time the virtual machine is waiting to access swapped or compressed memory. Sampled every 60 seconds.
node :
node.
vm_memory_consumed_bytes
ALPHA
(project)
vm_memory_consumed_bytes
GAUGE , DOUBLE , By
k8s_pod
Memory attributed to the VM, excluding memory shared between VMs. Sampled every 60 seconds.
node :
node.
vm_number_virtualdisk
ALPHA
(project)
vm_number_virtualdisk
GAUGE , DOUBLE , 1
k8s_pod
Number of virtual disks attached to the vm. Sampled every 60 seconds.
node :
node.
vm_virtualdisk_max_average_read_latency
ALPHA
(project)
vm_virtualdisk_max_average_read_latency
GAUGE , DOUBLE , 1
k8s_pod
[ALPHA] Max of average read latencies from vsphere(virtualDisk.totalReadLatency.average) Sampled every 60 seconds.
disk_instance :
disk_instance.
node :
node.
vm_virtualdisk_max_average_write_latency
ALPHA
(project)
vm_virtualdisk_max_average_write_latency
GAUGE , DOUBLE , 1
k8s_pod
[ALPHA] Max of average write latencies from vsphere(virtualDisk.totalWriteLatency.average) Sampled every 60 seconds.
disk_instance :
disk_instance.
node :
node.
vm_virtualdisk_read_latency_seconds
ALPHA
(project)
vm_virtualdisk_read_latency_seconds
CUMULATIVE , DOUBLE , s
k8s_pod
Time spent waiting on disk read operations. Sampled every 60 seconds.
node :
node.
vm_virtualdisk_write_latency_seconds
ALPHA
(project)
vm_virtualdisk_write_latency_seconds
CUMULATIVE , DOUBLE , s
k8s_pod
Time spent waiting on disk write operations. Sampled every 60 seconds.
node :
node.
volume_expand_adds
ALPHA
(project)
volume_expand_adds
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of adds handled by workqueue: volume_expand. Sampled every 60 seconds.
volume_expand_depth
ALPHA
(project)
volume_expand_depth
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) Current depth of workqueue: volume_expand. Sampled every 60 seconds.
volume_expand_longest_running_processor_microseconds
ALPHA
(project)
volume_expand_longest_running_processor_microseconds
GAUGE , DOUBLE , us
k8s_container
(Deprecated) How many microseconds has the longest running processor for volume_expand been running. Sampled every 60 seconds.
volume_expand_queue_latency_count
ALPHA
(project)
volume_expand_queue_latency_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long an item stays in workqueuevolume_expand before being requested. Sampled every 60 seconds.
volume_expand_queue_latency_sum
ALPHA
(project)
volume_expand_queue_latency_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuevolume_expand before being requested. Sampled every 60 seconds.
volume_expand_retries
ALPHA
(project)
volume_expand_retries
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of retries handled by workqueue: volume_expand. Sampled every 60 seconds.
volume_expand_unfinished_work_seconds
ALPHA
(project)
volume_expand_unfinished_work_seconds
GAUGE , DOUBLE , s
k8s_container
(Deprecated) How many seconds of work volume_expand has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases. Sampled every 60 seconds.
volume_expand_work_duration_count
ALPHA
(project)
volume_expand_work_duration_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long processing an item from workqueuevolume_expand takes. Sampled every 60 seconds.
volume_expand_work_duration_sum
ALPHA
(project)
volume_expand_work_duration_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuevolume_expand takes. Sampled every 60 seconds.
volume_manager_total_volumes
ALPHA
(project)
volume_manager_total_volumes
GAUGE , DOUBLE , 1
k8s_node
Number of volumes in Volume Manager. Sampled every 60 seconds.
plugin_name :
plugin_name.
state :
state.
volume_operation_total_errors
ALPHA
(project)
volume_operation_total_errors
CUMULATIVE , DOUBLE , 1
k8s_container
Total volume operation errors. Sampled every 60 seconds.
operation_name :
operation_name.
plugin_name :
plugin_name.
volume_operation_total_seconds
ALPHA
(project)
volume_operation_total_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
Storage operation end to end duration in seconds. Sampled every 60 seconds.
operation_name :
operation_name.
plugin_name :
plugin_name.
volume_operation_total_seconds/histogram
ALPHA
(project)
volume_operation_total_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
Storage operation end to end duration in seconds. Sampled every 30 seconds.
operation_name :
operation_name.
plugin_name :
plugin_name.
volumes_adds
ALPHA
(project)
volumes_adds
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) Total number of adds handled by workqueue: volumes. Sampled every 60 seconds.
volumes_depth
ALPHA
(project)
volumes_depth
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) Current depth of workqueue: volumes. Sampled every 60 seconds.
volumes_longest_running_processor_microseconds
ALPHA
(project)
volumes_longest_running_processor_microseconds
GAUGE , DOUBLE , us
k8s_container
(Deprecated) How many microseconds has the longest running processor for volumes been running. Sampled every 60 seconds.
volumes_queue_latency
ALPHA
(project)
volumes_queue_latency
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuevolumes before being requested. Sampled every 60 seconds.
quantile :
quantile.
volumes_queue_latency_count
ALPHA
(project)
volumes_queue_latency_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long an item stays in workqueuevolumes before being requested. Sampled every 60 seconds.
volumes_queue_latency_sum
ALPHA
(project)
volumes_queue_latency_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long an item stays in workqueuevolumes before being requested. Sampled every 60 seconds.
volumes_unfinished_work_seconds
ALPHA
(project)
volumes_unfinished_work_seconds
GAUGE , DOUBLE , s
k8s_container
(Deprecated) How many seconds of work volumes has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases. Sampled every 60 seconds.
volumes_work_duration
ALPHA
(project)
volumes_work_duration
GAUGE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuevolumes takes. Sampled every 60 seconds.
quantile :
quantile.
volumes_work_duration_count
ALPHA
(project)
volumes_work_duration_count
CUMULATIVE , INT64 , 1
k8s_container
(Deprecated) How long processing an item from workqueuevolumes takes. Sampled every 60 seconds.
volumes_work_duration_sum
ALPHA
(project)
volumes_work_duration_sum
CUMULATIVE , DOUBLE , 1
k8s_container
(Deprecated) How long processing an item from workqueuevolumes takes. Sampled every 60 seconds.
vsphere_vm_operations_total
ALPHA
(project)
vsphere_vm_operations_total
CUMULATIVE , DOUBLE , 1
k8s_pod
Vsphere operations performed on virtual machines. Sampled every 60 seconds.
operation :
operation.
watch_cache_capacity
ALPHA
(project)
watch_cache_capacity
GAUGE , DOUBLE , 1
k8s_container
Total capacity of watch cache broken by resource type. Sampled every 60 seconds.
resource :
resource.
group :
group.
watch_cache_capacity/gauge
ALPHA
(project)
watch_cache_capacity
GAUGE , DOUBLE , 1
prometheus_target
Total capacity of watch cache broken by resource type. Sampled every 30 seconds.
resource :
resource.
watch_cache_capacity_decrease_total
ALPHA
(project)
watch_cache_capacity_decrease_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of watch cache capacity decrease events broken by resource type. Sampled every 60 seconds.
resource :
resource.
watch_cache_capacity_increase_total
ALPHA
(project)
watch_cache_capacity_increase_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of watch cache capacity increase events broken by resource type. Sampled every 60 seconds.
resource :
resource.
workqueue_adds_total
ALPHA
(project)
workqueue_adds_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of adds handled by workqueue. Sampled every 60 seconds.
name :
name.
workqueue_adds_total/counter
ALPHA
(project)
workqueue_adds_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Total number of adds handled by workqueue. Sampled every 30 seconds.
name :
name.
workqueue_depth
ALPHA
(project)
workqueue_depth
GAUGE , DOUBLE , 1
k8s_container
Current depth of workqueue. Sampled every 60 seconds.
name :
name.
workqueue_depth/gauge
ALPHA
(project)
workqueue_depth
GAUGE , DOUBLE , 1
prometheus_target
Current depth of workqueue. Sampled every 30 seconds.
name :
name.
workqueue_longest_running_processor_seconds
ALPHA
(project)
workqueue_longest_running_processor_seconds
GAUGE , DOUBLE , s
k8s_container
How many seconds has the longest running processor for workqueue been running. Sampled every 60 seconds.
name :
name.
workqueue_longest_running_processor_seconds/gauge
ALPHA
(project)
workqueue_longest_running_processor_seconds
GAUGE , DOUBLE , s
prometheus_target
How many seconds has the longest running processor for workqueue been running. Sampled every 30 seconds.
name :
name.
workqueue_queue_duration_seconds
ALPHA
(project)
workqueue_queue_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
How long in seconds an item stays in workqueue before being requested. Sampled every 60 seconds.
name :
name.
workqueue_queue_duration_seconds/histogram
ALPHA
(project)
workqueue_queue_duration_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
How long in seconds an item stays in workqueue before being requested. Sampled every 30 seconds.
name :
name.
workqueue_retries_total
ALPHA
(project)
workqueue_retries_total
CUMULATIVE , DOUBLE , 1
k8s_container
Total number of retries handled by workqueue. Sampled every 60 seconds.
name :
name.
workqueue_retries_total/counter
ALPHA
(project)
workqueue_retries_total
CUMULATIVE , DOUBLE , 1
prometheus_target
Total number of retries handled by workqueue. Sampled every 30 seconds.
name :
name.
workqueue_unfinished_work_seconds
ALPHA
(project)
workqueue_unfinished_work_seconds
GAUGE , DOUBLE , s
k8s_container
How many seconds of work has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases. Sampled every 60 seconds.
name :
name.
workqueue_unfinished_work_seconds/gauge
ALPHA
(project)
workqueue_unfinished_work_seconds
GAUGE , DOUBLE , s
prometheus_target
How many seconds of work has done that is in progress and hasn't been observed by work_duration. Large values indicate stuck threads. One can deduce the number of stuck threads by observing the rate at which this increases. Sampled every 30 seconds.
name :
name.
workqueue_work_duration_seconds
ALPHA
(project)
workqueue_work_duration_seconds
CUMULATIVE , DISTRIBUTION , s
k8s_container
How long in seconds processing an item from workqueue takes. Sampled every 60 seconds.
name :
name.
workqueue_work_duration_seconds/histogram
ALPHA
(project)
workqueue_work_duration_seconds
CUMULATIVE , DISTRIBUTION , s
prometheus_target
How long in seconds processing an item from workqueue takes. Sampled every 30 seconds.
name :
name.
Generated at 2026-04-10 19:48:34 UTC.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
