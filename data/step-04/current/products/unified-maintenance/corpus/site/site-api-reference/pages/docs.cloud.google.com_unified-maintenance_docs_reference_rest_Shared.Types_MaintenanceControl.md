---
title: "MaintenanceControl \_|\_ Unified Maintenance \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/unified-maintenance/docs/reference/rest/Shared.Types/MaintenanceControl
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/unified-maintenance/docs/reference/rpc/google.cloud.maintenance.api.v1
source_metadata:
  url: https://docs.cloud.google.com/unified-maintenance/docs/reference/rest/Shared.Types/MaintenanceControl
  title: "MaintenanceControl \_|\_ Unified Maintenance \_|\_ Google Cloud Documentation"
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
MaintenanceControl
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
The control of the maintenance.
JSON representation
{
"control" : enum ( Control ) ,
"isCustom" : boolean ,
"documentation" : string
}
Fields
control
enum ( Control )
The control of the resource maintenance.
isCustom
boolean
Indicates whether the control is available only in Service Producer API (not through Unified Maintenance).
documentation
string
Link to Service Producer documentation about maintenance control. Provided only when isCustom is true .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-12-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-12-08 UTC."],[],[]]
