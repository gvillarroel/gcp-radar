---
title: "CreateWorkloadOperationMetadata \_|\_ Assured Workloads \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/assured-workloads/docs/reference/rest/Shared.Types/CreateWorkloadOperationMetadata
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/docs/reference/rest/Shared.Types/CreateWorkloadOperationMetadata
  title: "CreateWorkloadOperationMetadata \_|\_ Assured Workloads \_|\_ Google Cloud\
    \ Documentation"
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
CreateWorkloadOperationMetadata
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Operation metadata to give request details of CreateWorkload.
JSON representation
{
"createTime" : string ,
"displayName" : string ,
"parent" : string ,
"complianceRegime" : enum ( ComplianceRegime )
}
Fields
createTime
string ( Timestamp format)
Optional. Time when the operation was created.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
displayName
string
Optional. The display name of the workload.
parent
string
Optional. The parent of the workload.
complianceRegime
enum ( ComplianceRegime )
Optional. Compliance controls that should be applied to the resources managed by the workload.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-27 UTC."],[],[]]
