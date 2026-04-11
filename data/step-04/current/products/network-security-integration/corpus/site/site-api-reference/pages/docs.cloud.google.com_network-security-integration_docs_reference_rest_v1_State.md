---
title: "State \_|\_ Network Security Integration \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-security-integration/docs/reference/rest/v1/State
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-security-integration/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/network-security-integration/docs/reference/rest/v1/State
  title: "State \_|\_ Network Security Integration \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Network Security Integration
Reference
Send feedback
State
Stay organized with collections
Save and categorize content based on your preferences.
The current state of the deployment.
Enums
STATE_UNSPECIFIED
State not set (this is not a valid state).
ACTIVE
The deployment is ready and in sync with the parent group.
CREATING
The deployment is being created.
DELETING
The deployment is being deleted.
OUT_OF_SYNC
The deployment is out of sync with the parent group. In most cases, this is a result of a transient issue within the system (e.g. a delayed data-path config) and the system is expected to recover automatically. See the parent deployment group's state for more details.
DELETE_FAILED
An attempt to delete the deployment has failed. This is a terminal state and the deployment is not expected to recover. The only permitted operation is to retry deleting the deployment.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-12-23 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-12-23 UTC."],[],[]]
