---
title: "ExclusiveRepairActionFlag \_|\_ App Hub \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/app-hub/docs/reference/rest/Shared.Types/ExclusiveRepairActionFlag
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/app-hub/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/app-hub/docs/reference/rest/Shared.Types/ExclusiveRepairActionFlag
  title: "ExclusiveRepairActionFlag \_|\_ App Hub \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
App Hub
Reference
Send feedback
ExclusiveRepairActionFlag
Stay organized with collections
Save and categorize content based on your preferences.
Some action that should be performed externally in order to complete this repair. These actions are exclusive meaning only one of them can be selected. If in the future there actions that can be applied in combination, we will add an InclusiveRepairActionFlag enum and an inclusive_actions repeated field.
Enums
UNKNOWN_REPAIR_ACTION
Unknown repair action.
DELETE
The resource has to be deleted. When using this bit, the CLH should fail the operation. DEPRECATED. Instead use DELETE_RESOURCE OperationSignal in SideChannel.
This item is deprecated!
RETRY
This resource could not be repaired but the repair should be tried again at a later time. This can happen if there is a dependency that needs to be resolved first- e.g. if a parent resource must be repaired before a child resource.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-04-23 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-04-23 UTC."],[],[]]
