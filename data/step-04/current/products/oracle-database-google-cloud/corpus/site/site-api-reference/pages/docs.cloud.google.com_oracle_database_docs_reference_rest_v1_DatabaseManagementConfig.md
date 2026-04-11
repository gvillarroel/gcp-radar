---
title: "DatabaseManagementConfig \_|\_ Oracle Database at Google Cloud \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/DatabaseManagementConfig
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/oracle/database/docs/reference/libraries
source_metadata:
  url: https://docs.cloud.google.com/oracle/database/docs/reference/rest/v1/DatabaseManagementConfig
  title: "DatabaseManagementConfig \_|\_ Oracle Database at Google Cloud \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Oracle Database at Google Cloud
Reference
Send feedback
DatabaseManagementConfig
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
ManagementState
ManagementType
The configuration of the Database Management service.
JSON representation
{
"managementState" : enum ( ManagementState ) ,
"managementType" : enum ( ManagementType )
}
Fields
managementState
enum ( ManagementState )
Output only. The status of the Database Management service.
managementType
enum ( ManagementType )
Output only. The Database Management type.
ManagementState
The status of the Database Management service.
Enums
MANAGEMENT_STATE_UNSPECIFIED
The status is not specified.
ENABLING
The Database Management service is enabling.
ENABLED
The Database Management service is enabled.
DISABLING
The Database Management service is disabling.
DISABLED
The Database Management service is disabled.
UPDATING
The Database Management service is updating.
FAILED_ENABLING
The Database Management service failed to enable.
FAILED_DISABLING
The Database Management service failed to disable.
FAILED_UPDATING
The Database Management service failed to update.
ManagementType
The Database Management type.
Enums
MANAGEMENT_TYPE_UNSPECIFIED
The type is not specified.
BASIC
Basic Database Management.
ADVANCED
Advanced Database Management.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-17 UTC."],[],[]]
