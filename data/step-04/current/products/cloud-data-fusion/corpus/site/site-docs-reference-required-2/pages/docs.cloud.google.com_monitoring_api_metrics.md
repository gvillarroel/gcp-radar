---
title: "Metrics list \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/monitoring/api/metrics
knowledge_key: corpus
source_id: site-docs-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/monitoring/api/resources
source_metadata:
  url: https://docs.cloud.google.com/monitoring/api/metrics
  title: "Metrics list \_|\_ Cloud Monitoring \_|\_ Google Cloud Documentation"
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
Metrics list
Stay organized with collections
Save and categorize content based on your preferences.
Metric types in Cloud Monitoring are classified into general groups,
based on the type of service that collects the data. This document provides
links to reference lists for each of these groups.
Metrics from Google Cloud services include:
Google Cloud metrics , for
Google Cloud services such as Compute Engine and BigQuery.
Google Distributed Cloud metrics , for
Google Distributed Cloud software only.
Istio metrics , for Istio on Google Kubernetes Engine.
Kubernetes metrics , for Google Kubernetes Engine
(GKE).
Metrics from agents, open-source, and third-party
applications include:
Metrics for the legacy Cloud Monitoring and Cloud Logging agents,
as well as the Ops Agent. With the exception of metrics from
third-party applications, the Ops Agent and the legacy agents share
many groups of metrics.
Ops Agent metrics , for VM instances
running the Ops Agent.
Legacy Monitoring and Logging agent
metrics , for VM instances running the
legacy Monitoring and Logging agents.
Knative metrics , for Knative
components.
External metrics , for
open-source and third-party applications.
About the lists
The tables in the metric-type lists are regenerated frequently and time-stamped.
The information listed for each metric type comes from
the Monitoring API MetricDescriptor
object for each metric type. For more information about how metric
types are described, see
Metrics, time series, and resources .
Launch stages
Each metric type has a launch stage that indicates its maturity. If specified,
the launch stage appears as a colored superscript after the metric type:
GA ,
BETA ,
ALPHA ,
EARLY_ACCESS , or
DEPRECATED .
If no superscript appears, then the launch stage is unspecified.
For more information, see Product launch stages .
Metric types in the Alpha or Early Access launch stages might not appear in
the public lists of metrics. To get information about those metric types,
explicitly retrieve the set of metric descriptors from a Google Cloud
project that has been given permission to use the restricted metric types.
If you have permission to use restricted metric types, you can retrieve
the metric descriptors by using the
metricDescriptors.list method in the
Monitoring API. For more information, see
List metric descriptors .
Additional information: metadata
The description for each metric type includes information called metadata
about the metric. The metadata includes the following:
Sample Period : For metrics that are written periodically, this is the
time interval between consecutive data points, excluding data loss due to
errors. The period, if available, appears at the end of the description
text in a sentence of the form “Sampled every x
seconds.”
Latency : Data points older than this value are guaranteed to be
available to be read, excluding data loss due to errors. The delay does not
include any time spent waiting until the next sampling period. The delay, if
available, appears at the end of the description text in a sentence
of the form “After sampling, data is not visible for up to y
seconds.”
Resource hierarchy levels : Most metrics are collected only for
projects, but some metrics are also collected at the organization and folder
levels. If a level is not specified in the metadata, then the metric is
written at the project level.
Pricing
To learn about pricing for Cloud Monitoring, see the Google Cloud Observability pricing page.
Getting started
For an introduction to the concepts and terminology used in the
Cloud Monitoring metric model, see
Metrics, time series, and resources .
To create your own metrics, see
Create user-defined metrics with the API ,
User-defined agent metrics , and
Logs-based metrics .
To quickly see graphs of metric data, use the Metrics Explorer.
For information about using this tool, see
Create charts with Metrics Explorer .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
