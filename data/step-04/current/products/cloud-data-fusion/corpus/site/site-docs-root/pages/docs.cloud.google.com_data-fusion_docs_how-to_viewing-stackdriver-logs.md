---
title: "View advanced pipeline logs in Cloud Logging \_|\_ Cloud Data Fusion \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/data-fusion/docs/how-to/viewing-stackdriver-logs
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/data-fusion/docs
source_metadata:
  url: https://docs.cloud.google.com/data-fusion/docs/how-to/viewing-stackdriver-logs
  title: "View advanced pipeline logs in Cloud Logging \_|\_ Cloud Data Fusion \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Cloud Data Fusion
Guides
Send feedback
View advanced pipeline logs in Cloud Logging
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to enable Cloud Logging for your
Cloud Data Fusion Managed Service for Apache Spark clusters and access advanced
pipeline logs.
Enable Managed Service for Apache Spark Cloud Logging
To view pipeline and cluster issues in Cloud Logging, enable advanced logs
in new or existing Cloud Data Fusion instances. To enable advanced logs in
an existing instance, do the following:
In the Google Cloud console, go to the Cloud Data Fusion
Instances page.
Go to Instances
Click the instance name.
In the Advanced monitoring and logging section, for
Dataproc Cloud Logging , click
edit Edit .
In the Cloud Logging window, select the
Enable Cloud Logging checkbox.
Click Save .
View logs
Every Cloud Data Fusion pipeline run is assigned a unique RunID .
After you deploy and run your pipeline, find its RunID . Then, in
Logging, use the RunID to view your pipeline
logs.
Get the pipeline's RunID
Go to your instance:
In the Google Cloud console, go to the Cloud Data Fusion page.
To open the instance in the Cloud Data Fusion Studio,
click Instances , and then click View instance .
Go to Instances
Click List .
Click the pipeline for which you want to get the Run ID.
Click Summary .
In the Run history section, click Table .
To copy the Run ID, right-click the RunID , and click Copy .
View the logs in Logs Explorer
In the Google Cloud console, go to the
Cloud Logging > Logs Explorer page:
Go Logs Explorer
In the All resources drop-down,
select
Cloud Dataproc Cluster > cdap- PIPELINE_NAME - YOUR_RUNID .
Optional: Filter the logs
Use the filter menus to filter your logs. You can filter by various log
severity levels
or by components such as datafusion-pipeline-logs .
Optional: Download the logs
Click Download logs .
For more information, see
downloading log entries .
What's next
Learn how to view audit logs .
Learn how to view pipeline logs from the Cloud Data Fusion Pipeline Studio .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
