---
title: "Method: folders.updateAccessApprovalSettings \_|\_ Access Approval \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders/updateAccessApprovalSettings
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders/updateAccessApprovalSettings
  title: "Method: folders.updateAccessApprovalSettings \_|\_ Access Approval \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Cloud provider access management
Access Approval
Reference
Send feedback
Method: folders.updateAccessApprovalSettings
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
Updates the settings associated with a project, folder, or organization. Settings to update are determined by the value of field_mask.
HTTP request
PATCH https://accessapproval.googleapis.com/v1/{settings.name=folders/*/accessApprovalSettings}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
settings.name
string
The resource name of the settings. Format is one of:
"projects/{project}/accessApprovalSettings"
"folders/{folder}/accessApprovalSettings"
"organizations/{organization}/accessApprovalSettings"
Query parameters
Parameters
updateMask
string ( FieldMask format)
The update mask applies to the settings. Only the top level fields of AccessApprovalSettings (notificationEmails & enrolledServices) are supported. For each field, if it is included, the currently stored value will be entirely overwritten with the value of the field passed in this request.
For the FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If this field is left unset, only the notificationEmails field will be updated.
This is a comma-separated list of fully qualified names of fields. Example: "user.displayName,photo" .
Request body
The request body contains an instance of AccessApprovalSettings .
Response body
If successful, the response body contains an instance of AccessApprovalSettings .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-25 UTC."],[],[]]
