---
title: "Monitoring Pub/Sub Lite resources \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/pubsub/lite/docs/monitoring
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/pubsub/lite/docs
source_metadata:
  url: https://docs.cloud.google.com/pubsub/lite/docs/monitoring
  title: "Monitoring Pub/Sub Lite resources \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Pub/Sub
Pub/Sub Lite
Guides
Send feedback
Monitoring Pub/Sub Lite resources
Stay organized with collections
Save and categorize content based on your preferences.
Pub/Sub Lite reports metrics to Cloud Monitoring. You can create alerting policies and
charts of metrics using Cloud Monitoring.
Metrics and monitored resources
A metric is a set of measurements about the behavior of a product, service, or application.
For example, Pub/Sub Lite reports data for the backlog_quota_bytes
metric.
For the complete list of Pub/Sub Lite metric types, see the list of
Pub/Sub Lite metrics .
Pub/Sub Lite collects metrics from monitored resources, including the following:
pubsublite_subscription_partition
pubsublite_topic_partition
pubsublite_reservation
Exploring metrics
To explore the metrics that Pub/Sub Lite reports to Cloud Monitoring,
create a chart with the Metrics Explorer.
In the Google Cloud console, go to the Metrics Explorer :
Go to the Metrics Explorer
In the Find resource type and metric pane , search for and select
pubsublite_subscription_partition .
Note : Cloud Monitoring accumulates metric data over time.
If your Google Cloud project is new, Cloud Monitoring might not have metric
data yet, and the chart reports that no data is available.
From the list of metrics, select backlog_quota_bytes .
The Metrics Explorer creates temporary charts. To save a chart, add it to a dashboard.
Creating alerting policies
An altering policy identifies a situation that warrants immediate attention or intervention.
If metrics meet the conditions of an alerting policy, Cloud Monitoring sends you a
notification. For example, Cloud Monitoring can notify you if
backlog_quota_bytes is about to exceed a Pub/Sub Lite quota.
For more information about creating an alerting policy, see
Introduction to alerting .
What's next
Learn more about metrics and monitored resources .
Learn more about the Metrics Explorer .
Create and monitor groups of resources .
Create dashboards and charts .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
