---
title: "GA migration guide \_|\_ Binary Authorization \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/binary-authorization/docs/ga-migration-guide
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/binary-authorization/docs/multi-project-setup-cli
source_metadata:
  url: https://docs.cloud.google.com/binary-authorization/docs/ga-migration-guide
  title: "GA migration guide \_|\_ Binary Authorization \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Binary Authorization
Guides
Send feedback
GA migration guide
Stay organized with collections
Save and categorize content based on your preferences.
Note: Binary Authorization Beta API users: Support for the
Binary Authorization Beta API was discontinued on September 16, 2019. As a result,
the Binary Authorization Beta API will stop
working after March 16, 2020. To prevent service interruption, you must take
actions outlined in this page to migrate to the GA version.
If you do not have workloads that use the Binary Authorization Beta version, no
action is required on your part.
Note: Artifact Analysis Beta API users: Use the GA version of the
Artifact Analysis API .
Binary Authorization is now generally available .
If your workloads use the Binary Authorization Beta API, perform the following
steps to migrate to the GA version.
Migration steps
The GA version of Binary Authorization provides an updated REST API and gcloud
command set. Update any scripts or automations that access these interfaces as
follows:
REST API
Use GA REST API endpoints relative to the following URL
https://binaryauthorization.googleapis.com/v1/ instead of
https://binaryauthorization.googleapis.com/v1beta1 .
When you create a new attestor when calling the
GA version of the REST API, you send a JSON message that describes the
attestor as part of the request. In the Beta version of the API, the JSON
message contained a field named UserOwnedDrydockNote . In the GA version,
the name of this field is UserOwnedGrafeasNote .
Google Cloud CLI
Use GA gcloud commands in gcloud container binauthz
instead of gcloud beta container binauthz .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
