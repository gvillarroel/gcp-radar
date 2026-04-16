---
title: "Data regionality for Cloud Monitoring \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/monitoring/docs/region-support
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/monitoring/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/monitoring/docs/region-support
  title: "Data regionality for Cloud Monitoring \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Monitoring
Guides
Send feedback
Data regionality for Cloud Monitoring
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the storage policies for data that is used by
Cloud Monitoring. Cloud Monitoring is a global product
and its services are available with no dependence on location.
Storage of time-series data
Google agents, client-side code using libraries like OpenTelemetry,
and third-party sources such as BindPlane ,
write time series by using the Cloud Monitoring API. Google services also write
time series, but they use internal mechanisms.
To store a time series in a specific region ,
the monitored resource against which the time series is written must have
one of the following labels and the value of the label must be valid:
location
zone
region
A time series is discarded when
the monitored resource against which the time series is written has one of
the previous labels and the value of the label isn't recognized or isn't
specified.
The storage location of a time series is unspecified when
the monitored resource against which the time series is written doesn't have
one of the previous labels.
To view a list of all monitored resources and their labels, see
Monitored resource types . For those monitored resources that
contain a location label, the entry indicates the valid values for that label.
The resource locations constraint
doesn't apply to time series.
Data written by Google Cloud products
Google Cloud products deployable by zone or by region
store any time series that they generate in the same region
to which they are deployed. For a list of these products, see
Products available by location .
For all other Google products, the storage location of any time series
that the product generates is unspecified. For a list of these products, see
Global products .
Custom metrics
Time series for custom metrics follow the location rules described in
Storage of time-series data . Examples of custom metrics
include metrics you create from your applications
by using libraries such as OpenCensus and OpenTelemetry.
Not all monitored resource types that are available for custom metrics
have a location label.
For example, the global resource only has a label for
the project identifier. For a list of the monitored resource types available
for custom metrics,
see Monitored resources for custom metrics .
Processing of time-series data
The physical location where time-series data are processed when such data
are queried depend on many factors including the storage location of the data,
query semantics, networking, and others. In general, there is no guarantee
that time series are always processed in the location where
they are physically stored.
Alert notifications
When Monitoring sends a notification of an alert,
that information might pass through third-party providers that don't support
data localization. For example, customers can configure an alert notification
to be delivered to any email address, to a Slack channel, or through SMS.
For details on all available channel types, see
Create and manage notification channels .
Uptime checks and synthetic monitors
Customers who have set up
Assured Workloads because they have
data-residency or Impact Level 4 (IL4)
requirements, shouldn't use
uptime checks or synthetic monitors .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
