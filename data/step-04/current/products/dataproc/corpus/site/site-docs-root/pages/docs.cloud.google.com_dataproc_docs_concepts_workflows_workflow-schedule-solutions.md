---
title: "Workflow scheduling solutions \_|\_ Managed Service for Apache Spark \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataproc/docs/concepts/workflows/workflow-schedule-solutions
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc/docs
source_metadata:
  url: https://docs.cloud.google.com/dataproc/docs/concepts/workflows/workflow-schedule-solutions
  title: "Workflow scheduling solutions \_|\_ Managed Service for Apache Spark \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

"Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
Home
Documentation
Data analytics
Managed Service for Apache Spark
Guides
Send feedback
Workflow scheduling solutions
Stay organized with collections
Save and categorize content based on your preferences.
This section describes Google Cloud options you can use to schedule
workflows.
Dataproc Workflow Templates
Managed Service for Apache Spark Workflow templates
provide a flexible and easy-to-use mechanism for managing and executing workflows. A Workflow Template is a reusable workflow configuration. It defines a graph of jobs with information on where to run those jobs.
Cloud Scheduler
Cloud Scheduler is a fully managed enterprise-grade cron job scheduler.
It allows you to schedule virtually any job, including batch, big data jobs,
and Cloud infrastructure operations. It provides simple time-based
scheduling, for example, daily or hourly, without requiring you to write code.
Advantages:
Enables time-based instantiation of workflow templates based on familiar
cron expressions
No code to write
Tutorial: Workflow using Cloud Scheduler
Cloud Functions
Cloud Run functions is a lightweight compute solution you can use to create
single-purpose, stand-alone functions that respond to Cloud events without
the need to manage a server or runtime environment. You can use
Cloud Run functions to launch Workflows in response to Pub/Sub
events or file changes in Cloud Storage. You can use Cloud Run functions
with Cloud Scheduler for workflows that require the calculation of
time-based parameters.
Advantages:
Enables workflow instantiation in response to data events, such as new files in
Cloud Storage or Pub/Sub events.
Minimal coding required using Managed Service for Apache Spark
Go ,
Node.js , or
Python
client libraries
Dynamically generate workflows and workflow parameters
Tutorial: Workflow using Cloud Run functions
Cloud Composer
Cloud Composer is a managed Apache Airflow service you can use
to create, schedule, monitor, and manage workflows.
Advantages:
Supports time- and event-based scheduling
Simplified calls to Managed Service for Apache Spark using Operators
Dynamically generate workflows and workflow parameters
Build data flows that span multiple Google Cloud products
Tutorial: Workflow using Cloud Composer
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
