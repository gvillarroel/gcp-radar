---
title: "State \_|\_ Unified Maintenance \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/unified-maintenance/docs/reference/rest/Shared.Types/State
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/unified-maintenance/docs/reference/rpc/google.cloud.maintenance.api.v1
source_metadata:
  url: https://docs.cloud.google.com/unified-maintenance/docs/reference/rest/Shared.Types/State
  title: "State \_|\_ Unified Maintenance \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Unified Maintenance
Reference
Send feedback
State
Stay organized with collections
Save and categorize content based on your preferences.
State is the state of a resource maintenance.
Enums
STATE_UNSPECIFIED
Unspecified state.
SCHEDULED
Scheduled for a particular window. For disruptive maintenance it should respect maintenance policy, i.e. its available windows, exclusions and notification period.
RUNNING
Maintenance is ongoing.
CANCELLED
No longer planned, typically when other maintenance (e.g. upgrade to newer version) already happened, or the user skipped the maintenance.
SUCCEEDED
Successfully completed.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-12-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-12-08 UTC."],[],[]]
