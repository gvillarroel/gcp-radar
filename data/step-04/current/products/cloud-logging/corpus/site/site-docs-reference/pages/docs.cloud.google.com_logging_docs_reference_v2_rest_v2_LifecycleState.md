---
title: "LifecycleState \_|\_ Cloud Logging \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LifecycleState
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/logging/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/LifecycleState
  title: "LifecycleState \_|\_ Cloud Logging \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Observability
Cloud Logging
Reference
Send feedback
LifecycleState
Stay organized with collections
Save and categorize content based on your preferences.
LogBucket lifecycle states.
Enums
LIFECYCLE_STATE_UNSPECIFIED
Unspecified state. This is only used/useful for distinguishing unset values.
ACTIVE
The normal and active state.
DELETE_REQUESTED
The resource has been marked for deletion by the user. For some resources (e.g. buckets), this can be reversed by an un-delete operation.
UPDATING
The resource has been marked for an update by the user. It will remain in this state until the update is complete.
CREATING
The resource has been marked for creation by the user. It will remain in this state until the creation is complete.
FAILED
The resource is in an INTERNAL error state.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-21 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-21 UTC."],[],[]]
