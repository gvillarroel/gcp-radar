---
title: "Knative metrics \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/monitoring/api/metrics_knative
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/monitoring/api/resources
source_metadata:
  url: https://docs.cloud.google.com/monitoring/api/metrics_knative
  title: "Knative metrics \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation"
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
Knative metrics
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Monitoring supports the Knative metrics listed in this
document.
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
Knative metrics
Metrics from Knative .
The following list was last generated at 2026-04-10 19:48:34 UTC.
For more information about this process, see
About the lists .
knative
Metrics from Knative components.
Launch stages of these metrics:
BETA
The "metric type" strings in this table must be prefixed
with knative.dev/ . That prefix has been
omitted from the entries in the table.
When querying a label, use the metric.labels. prefix; for
example, metric.labels. LABEL =" VALUE " .
Metric type Launch stage (Resource hierarchy levels) Display name
Kind, Type, Unit Monitored resources
Description Labels
serving/activator/request_count
BETA
(project)
Activator Request Count
DELTA , INT64 , 1
knative_revision
The number of requests that are routed to the activator. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
response_code_class :
One of '1xx', '2xx', '3xx', '4xx', or '5xx' according to response code of the request. If any other code is returned, it should be reported as '5xx'.
response_code :
(INT64)
Response code of the request according to protocol.
num_tries :
(INT64)
The number of tries (retry on 503s only) it takes to get a response from a reserve revision.
serving/activator/request_latencies
BETA
(project)
Activator Request Latencies
DELTA , DISTRIBUTION , ms
knative_revision
Distribution of service request times in milliseconds for requests that go through the activator. Value is the total time requests spent in activator and revision pods. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
response_code_class :
One of '1xx', '2xx', '3xx', '4xx', or '5xx' according to response code of the request. If any other code is returned, it should be reported as '5xx'.
response_code :
(INT64)
Response code of the request according to protocol.
serving/autoscaler/actual_pods
BETA
(project)
Actual Pod Count
GAUGE , INT64 , 1
knative_revision
Number of pods that are allocated currently. Sampled every 60 seconds.
serving/autoscaler/desired_pods
BETA
(project)
Desired Pod Count
GAUGE , INT64 , 1
knative_revision
Number of pods autoscaler wants to allocate. Sampled every 60 seconds.
serving/autoscaler/panic_mode
BETA
(project)
Panic Mode
GAUGE , INT64 , 1
knative_revision
Set to 1 if autoscaler is in panic mode for the revision, otherwise 0. Sampled every 60 seconds.
serving/autoscaler/panic_request_concurrency
BETA
(project)
Observed Panic Concurrency
GAUGE , DOUBLE , 1
knative_revision
Average requests concurrency observed per pod during the shorter panic autoscaling window. Sampled every 60 seconds.
serving/autoscaler/requested_pods
BETA
(project)
Requested Pod Count
GAUGE , INT64 , 1
knative_revision
Number of pods autoscaler requested from Kubernetes. Sampled every 60 seconds.
serving/autoscaler/stable_request_concurrency
BETA
(project)
Observed Stable Concurrency
GAUGE , DOUBLE , 1
knative_revision
Average requests concurrency observed per pod during the stable autoscaling window. Sampled every 60 seconds.
serving/autoscaler/target_concurrency_per_pod
BETA
(project)
Target Concurrency Per Pod
GAUGE , DOUBLE , 1
knative_revision
The desired average requests concurrency per pod during the stable autoscaling window. Sampled every 60 seconds.
serving/revision/request_count
BETA
(project)
Request Count
DELTA , INT64 , 1
knative_revision
The number of requests reaching the revision. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
response_code_class :
One of '1xx', '2xx', '3xx', '4xx', or '5xx' according to response code of the request. If any other code is returned, it should be reported as '5xx'.
response_code :
(INT64)
Response code of the request according to protocol.
serving/revision/request_latencies
BETA
(project)
Request Latencies
DELTA , DISTRIBUTION , ms
knative_revision
Distribution of service request times in milliseconds for requests reaching the revision. Value is the time requests spent in revision pods. Sampled every 60 seconds. After sampling, data is not visible for up to 180 seconds.
response_code_class :
One of '1xx', '2xx', '3xx', '4xx', or '5xx' according to response code of the request. If any other code is returned, it should be reported as '5xx'.
response_code :
(INT64)
Response code of the request according to protocol.
Generated at 2026-04-10 19:48:34 UTC.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
