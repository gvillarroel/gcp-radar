---
title: "Use the gcloud CLI \_|\_ Datastream \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/datastream/docs/use-the-cloud-sdk
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/datastream/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/datastream/docs/use-the-cloud-sdk
  title: "Use the gcloud CLI \_|\_ Datastream \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Datastream
Reference
Send feedback
Use the gcloud CLI
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to get started with the
Google Cloud CLI
so you can use it to manage private connectivity configurations, connection profiles, and streams in Datastream.
The Google Cloud CLI
provides the Google Cloud CLI to interact with
Datastream and other Google Cloud services. The gcloud CLI
uses the API to access Datastream, so you must enable the API before you
can use the tool.
You can see gcloud examples in the following pages of the Datastream documentation:
Manage private connectivity configurations
Manage connection profiles
Manage streams
Get started with the Google Cloud CLI
To start with the gcloud CLI, review the
Google Cloud CLI Documentation .
You can get help for the tool, resources, and
commands by using the --help flag:
gcloud datastream --help
gcloud datastream private-connections create --help
gcloud datastream connection-profiles create --help
gcloud datastream streams create --help
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
