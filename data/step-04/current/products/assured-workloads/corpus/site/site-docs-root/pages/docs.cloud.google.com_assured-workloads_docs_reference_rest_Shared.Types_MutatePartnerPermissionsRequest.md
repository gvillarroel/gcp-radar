---
title: "MutatePartnerPermissionsRequest \_|\_ Assured Workloads \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/assured-workloads/docs/reference/rest/Shared.Types/MutatePartnerPermissionsRequest
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/docs
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/docs/reference/rest/Shared.Types/MutatePartnerPermissionsRequest
  title: "MutatePartnerPermissionsRequest \_|\_ Assured Workloads \_|\_ Google Cloud\
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
MutatePartnerPermissionsRequest
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Request of updating permission settings for a partner workload.
JSON representation
{
"name" : string ,
"partnerPermissions" : {
object ( PartnerPermissions )
} ,
"updateMask" : string ,
"etag" : string
}
Fields
name
string
Required. The name field is used to identify the workload. Format: organizations/{org_id}/locations/{locationId}/workloads/{workload_id}
partnerPermissions
object ( PartnerPermissions )
Required. The partner permissions to be updated.
updateMask
string ( FieldMask format)
Required. The list of fields to be updated. E.g. updateMask { paths: "partnerPermissions.data_logs_viewer"}
This is a comma-separated list of fully qualified names of fields. Example: "user.displayName,photo" .
etag
string
Optional. The etag of the workload. If this is provided, it must match the server's etag.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-30 UTC."],[],[]]
