---
title: "Method: folders.deleteAccessApprovalSettings \_|\_ Access Approval \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders/deleteAccessApprovalSettings
knowledge_key: corpus
source_id: site-docs-root-3
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/access-approval/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders/deleteAccessApprovalSettings
  title: "Method: folders.deleteAccessApprovalSettings \_|\_ Access Approval \_|\_\
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
Method: folders.deleteAccessApprovalSettings
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
Response body
Authorization scopes
Deletes the settings associated with a project, folder, or organization. This will have the effect of disabling Access Approval for the resource. Access Approval may remain active based on parent resource settings. To confirm the effective settings, call folders.getAccessApprovalSettings and verify effective setting is disabled.
HTTP request
DELETE https://accessapproval.googleapis.com/v1/{name=folders/*/accessApprovalSettings}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Name of the AccessApprovalSettings to delete.
Authorization requires the following IAM permission on the specified resource name :
accessapproval.settings.delete
Request body
The request body must be empty.
Response body
If successful, the response body is an empty JSON object.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-25 UTC."],[],[]]
