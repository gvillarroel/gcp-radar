---
title: "Cloud Logging \_|\_ Dataproc Metastore \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataproc-metastore/docs/logging
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc-metastore/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/dataproc-metastore/docs/logging
  title: "Cloud Logging \_|\_ Dataproc Metastore \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Dataproc Metastore
Guides
Send feedback
Cloud Logging
Stay organized with collections
Save and categorize content based on your preferences.
You can view, search, filter, and archive Dataproc Metastore job logs
in Cloud Logging .
See Google Cloud Observability Pricing to understand your costs.
See Logs retention periods for
information on logging retention.
See Logs Exclusions to disable all logs or exclude
logs from Logging.
See Routing and storage overview to route
logs from Logging to Cloud Storage,
BigQuery, or Pub/Sub.
Access job logs in Logging
When you run Dataproc Metastore, a Hive metastore process output
is streamed to the Google Cloud console.
You can access Logging using the
Logging console ,
the gcloud logging command, or
the Logging API .
Console
In the Google Cloud console, go to the
Cloud Logging > Logs (Logs Explorer) page:
Go to the Logs Explorer page
Select an existing Dataproc Metastore Google Cloud project.
Under the Resources menu, select Dataproc Metastore Service .
Under the All logs menu, select the log type that you want to
see.
gcloud
The Google Cloud CLI has a group of commands, gcloud logging , that provide a
command-line interface to the Cloud Logging API. To read your log entries,
run the following command:
gcloud logging read \
'resource.type="metastore.googleapis.com/Service"
resource.labels.location= LOCATION
resource.labels.service_id= SERVICE_ID '
REST
Follow the Logging API instructions to list log entries
( entries.list ) by using
the API Explorer.
Dataproc Metastore service logs in Logging
Dataproc Metastore exports request and system logs to
Cloud Logging.
Log Type
Log Name
logName query
Request logs
metastore.googleapis.com/requests
logName=(projects/$PROJECT_ID/logs/metastore.googleapis.com%2Frequests)
System logs
metastore.googleapis.com/system
logName=(projects/$PROJECT_ID/logs/metastore.googleapis.com%2Fsystem)
What's next
Cloud Logging documentation
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
