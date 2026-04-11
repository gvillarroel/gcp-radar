---
title: "Module query (2.30.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.query
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/monitoring/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/monitoring/latest/google.cloud.monitoring_v3.query
  title: "Module query (2.30.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Module query (2.30.0)
Stay organized with collections
Save and categorize content based on your preferences.
2.30.0 (latest)
2.29.1
2.28.0
2.27.2
2.26.0
2.25.0
2.24.0
2.23.1
2.22.2
2.21.0
2.20.0
2.19.4
2.18.0
2.17.0
2.16.0
2.15.1
2.14.2
2.13.0
2.12.0
2.11.3
2.10.1
2.9.2
2.8.0
2.7.0
2.6.0
2.5.2
2.4.2
2.3.0
2.2.1
2.1.0
2.0.1
1.1.2
1.0.0
0.36.2
0.35.0
0.34.0
0.33.0
0.32.0
Time series query for the Google Stackdriver Monitoring API (V3) _.
.. _Google Stackdriver Monitoring API (V3):
https://cloud.google.com/monitoring/api/ref_v3/rest/v3/ projects.timeSeries/list
Classes
Query
Query (
client ,
project ,
metric_type = "compute.googleapis.com/instance/cpu/utilization" ,
end_time = None ,
days = 0 ,
hours = 0 ,
minutes = 0 ,
)
Query object for retrieving metric data.
Parameters
Name
Description
client
:class: google.cloud.monitoring_v3.gapic. metric_service_client.MetricServiceClient
The client to use.
project
str
The project ID or number.
metric_type
str
The metric type name. The default value is :data: Query.DEFAULT_METRIC_TYPE <google.cloud.monitoring.query.Query.DEFAULT_METRIC_TYPE> , but please note that this default value is provided only for demonstration purposes and is subject to change. See the supported metrics _.
end_time
datetime.datetime
(Optional) The end time (inclusive) of the time interval for which results should be returned, as a datetime object. The default is the start of the current minute. The start time (exclusive) is determined by combining the values of days , hours , and minutes , and subtracting the resulting duration from the end time. It is also allowed to omit the end time and duration here, in which case select_interval must be called before the query is executed.
days
int
The number of days in the time interval.
hours
int
The number of hours in the time interval.
minutes
int
The number of minutes in the time interval.
Exceptions
Type
Description
`ValueError
if end_time is specified but days , hours , and minutes are all zero. If you really want to specify a point in time, use select_interval . .. _supported metrics: https://cloud.google.com/monitoring/api/metrics
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-31 UTC."],[],[]]
