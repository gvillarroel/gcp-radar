---
title: "Method: folders.approvalRequests.dismiss \_|\_ Access Approval \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders.approvalRequests/dismiss
knowledge_key: corpus
source_id: site-docs-root-3
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/access-approval/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders.approvalRequests/dismiss
  title: "Method: folders.approvalRequests.dismiss \_|\_ Access Approval \_|\_ Google\
    \ Cloud Documentation"
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
Method: folders.approvalRequests.dismiss
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
Response body
Authorization scopes
Dismisses a request. Returns the updated ApprovalRequest.
NOTE: When a request is dismissed, it is considered ignored. Dismissing a request does not prevent access granted by other Access Approval requests.
Returns NOT_FOUND if the request does not exist.
Returns FAILED_PRECONDITION if the request exists but is not in a pending state.
HTTP request
POST https://accessapproval.googleapis.com/v1/{name=folders/*/approvalRequests/*}:dismiss
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Name of the ApprovalRequest to dismiss.
Authorization requires the following IAM permission on the specified resource name :
accessapproval.requests.dismiss
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of ApprovalRequest .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-25 UTC."],[],[]]
