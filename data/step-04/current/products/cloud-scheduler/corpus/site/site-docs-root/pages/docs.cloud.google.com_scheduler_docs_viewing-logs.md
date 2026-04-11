---
title: "View logs \_|\_ Cloud Scheduler \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/scheduler/docs/viewing-logs
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/scheduler/docs
source_metadata:
  url: https://docs.cloud.google.com/scheduler/docs/viewing-logs
  title: "View logs \_|\_ Cloud Scheduler \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Scheduler
Guides
Send feedback
View logs
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Scheduler publishes logs at the start of each execution and at the end
of each execution. You can retrieve, view, and analyze the logs for a specific
job, including the
audit logs that are available for Cloud Scheduler .
To view logs, follow these steps:
In the Google Cloud console, go to the Cloud Scheduler page.
Go to Cloud Scheduler
In the row of the job that you want to view the logs for,
click more_vert Actions >
View logs .
The Logs Explorer page opens and lets you display log entries,
parse and analyze them, and specify query parameters.
To learn more about viewing logs in Logging, see
View logs by using the Logs Explorer .
Sample queries
Query description
Expression
Cloud Scheduler type and method
resource . type = "audited_resource"
protoPayload . methodName =~ "google.cloud.scheduler.v1.CloudScheduler.*"
Cloud Scheduler log name
logName = ( "projects/ PROJECT_ID /logs/cloudaudit.googleapis.com%2Factivity"
OR "projects/ PROJECT_ID /logs/cloudaudit.googleapis.com%2Fdata_access"
OR "projects/ PROJECT_ID /logs/cloudaudit.googleapis.com%2Fsystem_event"
OR "projects/ PROJECT_ID /logs/cloudaudit.googleapis.com%2Fpolicy" )
protoPayload . serviceName = "cloudscheduler.googleapis.com"
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
