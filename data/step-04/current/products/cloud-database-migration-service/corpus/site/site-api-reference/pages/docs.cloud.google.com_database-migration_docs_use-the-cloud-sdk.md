---
title: "Use the gcloud CLI \_|\_ Database Migration Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/database-migration/docs/use-the-cloud-sdk
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/database-migration/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/database-migration/docs/use-the-cloud-sdk
  title: "Use the gcloud CLI \_|\_ Database Migration Service \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Database Migration Service
APIs and reference
Send feedback
Use the gcloud CLI
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to get started with the
Google Cloud CLI
so you can use it to manage Database Migration Service connection profiles and migration jobs.
The Google Cloud CLI
provides the Google Cloud CLI to interact with
Database Migration Service and other Google Cloud services. The gcloud CLI
uses the API to access Database Migration Service, so you must enable the API before you
can use the tool.
Get started with the Google Cloud CLI
To start with the gcloud CLI, review the
Google Cloud CLI documentation .
You can get help for the tool, resources, and
commands by using the --help flag:
gcloud database-migration --help
gcloud database-migration connection-profiles create --help
gcloud database-migration migration-jobs promote --help
Finally, configure a project as your default project with
the following commands:
gcloud config list
gcloud config set project [ PROJECT_ID ]
The first command lists the
configuration for the gcloud CLI, including any default project that you
already set. The second command sets the default project.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
