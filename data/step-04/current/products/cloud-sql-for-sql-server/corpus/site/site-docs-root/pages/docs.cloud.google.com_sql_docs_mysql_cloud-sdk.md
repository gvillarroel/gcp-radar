---
title: "About the gcloud CLI \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/sql/docs/mysql/cloud-sdk
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/sql/docs/sqlserver
source_metadata:
  url: https://docs.cloud.google.com/sql/docs/mysql/cloud-sdk
  title: "About the gcloud CLI \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Cloud SQL
MySQL
Reference
Send feedback
About the gcloud CLI
Stay organized with collections
Save and categorize content based on your preferences.
MySQL
| PostgreSQL
| SQL Server
This page describes how to get started with the
gcloud CLI
so you can use it to manage Cloud SQL instances. The gcloud CLI
uses the Cloud SQL Admin API to access Cloud SQL, so you must enable the API before you
can use the gcloud CLI to access Cloud SQL.
For gcloud examples, see the
How-to page for the task.
Getting started with the gcloud CLI
To start with the gcloud CLI, review the
gcloud CLI Documentation .
You can get help for the tool, resources, and
commands by using the --help flag:
gcloud sql --help
gcloud sql instances --help
gcloud sql instances create --help
The help displayed with the --help flag is also available in
the gcloud CLI reference for
gcloud sql .
Finally, configure a project as your default project with
two commands. The first command below lists the
configuration for the gcloud CLI, including any default project
already set. The second command sets the default project.
gcloud config list
gcloud config set project [ PROJECT_ID ]
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
