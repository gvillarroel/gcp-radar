---
title: "Monitor topics within Pub/Sub \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/pubsub/docs/monitor-topic
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/pubsub/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/pubsub/docs/monitor-topic
  title: "Monitor topics within Pub/Sub \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Pub/Sub
Guides
Send feedback
Monitor topics within Pub/Sub
Stay organized with collections
Save and categorize content based on your preferences.
You can use the Google Cloud console to access the monitoring dashboard
for a single topic or all the topics available in your project.
Key Point: Learn how to access the monitoring dashboard for Pub/Sub
topics, understand some key metrics, and learn how to create a custom monitoring
experience.
Before you begin
Ensure that you've prepared the following:
A Cloud Billing account
A Pub/Sub project with billing enabled
At least one topic in your Pub/Sub project
Familiarity with Cloud Monitoring
and Metrics Explorer
View the monitoring dashboard for all topics
To view the monitoring dashboard for all the topics
in a project, perform the following steps:
In the Google Cloud console, go to the Pub/Sub Topics page.
Go to Topics
Click the Metrics tab.
The monitoring dashboard is displayed for all topics in the project.
The monitoring dashboard has two sections: Overview and Quota .
View the monitoring dashboard for a single topic
To view the monitoring dashboard for a single topic
in a project, perform the following steps:
In the Google Cloud console, go to the Pub/Sub Topics page.
Go to Topics
In the Topics page, click any topic.
The topic details page is displayed.
Within the topic details page, click the Metrics tab.
The monitoring dashboard is displayed for the single topic.
The monitoring dashboard has three sections: Overview , Subscriptions ,
and Retention . You can see the Retention section only if you
enable message retention for the topic. For more information about message
retention, see Properties of a topic .
Customize the monitoring dashboard
You can create a custom dashboard or add individual charts to an
existing custom dashboard.
To create a custom dashboard, perform the following steps:
Follow the steps to go to the monitoring page for all topics or for
a single topic .
Choose one of the following options:
To create a new dashboard containing all the charts, or to add all the
charts to an existing custom dashboard, click Save as custom dashboard .
To add a single chart to a new or custom dashboard, in an individual chart,
expand the more_vert
More Actions option and click Add to custom dashboard .
You can view all your dashboards in the Monitoring console.
Modify a chart
To modify a chart, perform the following steps:
Follow the steps to go to the monitoring page for all topics or for
a single topic .
In an individual chart, expand the more_vert
More Actions option and click View in Metrics Explorer .
The chart opens in Metrics Explorer .
You can use Prometheus Query Language (PromQL) queries to make changes to your
chart and test the output.
Click Save chart to save the changes.
Create an alerting policy
Creating an alerting policy for a chart lets you set up an alert monitoring
metric in the chart, configure the circumstances under which you want to be
alerted, and configure how you want to be notified.
For more information about how to create alerts, see Create metric-based alert policies .
Some charts might not offer a Create alerting policy option.
In this case, perform the following steps:
Save the chart to a custom dashboard.
In the custom dashboard, for the individual chart, expand
the more_vert More Actions option.
Click Convert to alert chart .
Key charts to monitor topics
Although there are a number of charts available to monitor a single topic,
the following charts in the Overview section are a good starting point:
The Publish requests chart lets you check if there are sudden spikes
in the topic for receiving publish requests.
The Average number of messages per batch chart lets you check
if the batching size is adequate for your requirements. A smaller batch size
leads to reduced publish latency.
The following charts in the Quota section for all topics help you monitor quotas
for all the topics in your project:
The Administrator operations chart lets you monitor administrative
operations regarding topics. Each administrator operation charges one
unit against this quota.
For more information, see Pub/Sub quotas and limits .
Metrics to monitor import topics
You can use the following metrics to monitor import topics:
Ingestion byte count :
This metric displays the
total volume of data (in bytes) ingested from an import source into an
import topic. It provides a breakdown of byte counts for each import
source and partition (shard).
Ingestion message count :
This metric displays
the total number of import messages for each import source and partition.
Ingestion data source state :
This metric
displays the state of the external source from which the import topic is
ingesting data. The error codes and their workarounds are listed in the
troubleshooting section of the import topics.
For more information, see the following:
Troubleshooting Amazon Kinesis Data Streams import topics .
Troubleshooting Cloud Storage import topics .
Troubleshooting Amazon MSK import topics .
Troubleshooting Azure Event Hubs import topics .
Troubleshooting Confluent Cloud import topics .
Ingestion failure count :
This metric displays the number of failures encountered during ingestion.
For Cloud Storage import topics, this metric includes the bucket
name and the failure reason. For Amazon MSK, Azure Event Hubs, and Confluent
Cloud import topics, this metric includes the Kafka topic or event hub name,
the partition, and the failure reason.
To check these metrics, follow the steps described in
View the monitoring dashboard for a single topic .
What's next
To monitor subscriptions,
see Monitor subscriptions in Pub/Sub .
To learn more about using PromQL to build
monitoring charts, see Using the Query Editor .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
