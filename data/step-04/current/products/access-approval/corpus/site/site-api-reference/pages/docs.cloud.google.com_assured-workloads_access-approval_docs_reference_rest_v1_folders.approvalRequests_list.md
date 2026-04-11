---
title: "Method: folders.approvalRequests.list \_|\_ Access Approval \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders.approvalRequests/list
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/access-approval/docs/reference/rest/v1/folders.approvalRequests/list
  title: "Method: folders.approvalRequests.list \_|\_ Access Approval \_|\_ Google\
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
Method: folders.approvalRequests.list
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
Lists approval requests associated with a project, folder, or organization. Approval requests can be filtered by state (pending, active, dismissed). The order is reverse chronological.
HTTP request
GET https://accessapproval.googleapis.com/v1/{parent=folders/*}/approvalRequests
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
The parent resource. This may be "projects/{project}", "folders/{folder}", or "organizations/{organization}".
Authorization requires the following IAM permission on the specified resource parent :
accessapproval.requests.list
Query parameters
Parameters
filter
string
A filter on the type of approval requests to retrieve. Must be one of the following values:
[not set]: Requests that are pending or have active approvals.
ALL: All requests.
PENDING: Only pending requests.
ACTIVE: Only active (i.e. currently approved) requests.
DISMISSED: Only requests that have been dismissed, or requests that are not approved and past expiration.
EXPIRED: Only requests that have been approved, and the approval has expired.
HISTORY: Active, dismissed and expired requests.
pageSize
integer
Requested page size.
pageToken
string
A token identifying the page of results to return.
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of ListApprovalRequestsResponse .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-25 UTC."],[],[]]
