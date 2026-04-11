---
title: "UpdateWorkloadRequest \_|\_ Assured Workloads \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/assured-workloads/docs/reference/rest/Shared.Types/UpdateWorkloadRequest
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/docs
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/docs/reference/rest/Shared.Types/UpdateWorkloadRequest
  title: "UpdateWorkloadRequest \_|\_ Assured Workloads \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

The names for some Assured Workloads control packages have changed. For information about the name change, see Control package renaming notice .
Home
Documentation
Security
Assured Workloads
Reference
Send feedback
UpdateWorkloadRequest
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Request for Updating a workload.
JSON representation
{
"workload" : {
object ( Workload )
} ,
"updateMask" : string
}
Fields
workload
object ( Workload )
Required. The workload to update. The workload's name field is used to identify the workload to be updated. Format: organizations/{org_id}/locations/{locationId}/workloads/{workload_id}
updateMask
string ( FieldMask format)
Required. The list of fields to be updated.
This is a comma-separated list of fully qualified names of fields. Example: "user.displayName,photo" .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-30 UTC."],[],[]]
