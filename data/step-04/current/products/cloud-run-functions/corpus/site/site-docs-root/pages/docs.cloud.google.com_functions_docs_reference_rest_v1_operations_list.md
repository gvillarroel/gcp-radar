---
title: "Method: operations.list \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/functions/docs/reference/rest/v1/operations/list
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/functions/docs
source_metadata:
  url: https://docs.cloud.google.com/functions/docs/reference/rest/v1/operations/list
  title: "Method: operations.list \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

If you are creating a new function, see the Console Quickstart on Cloud Run.
Home
Documentation
Application hosting
Cloud Run
Cloud Run functions
Reference
Send feedback
Method: operations.list
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Query parameters
Request body
Response body
Authorization scopes
Try it!
Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED .
HTTP request
GET https://cloudfunctions.googleapis.com/v1/operations
Query parameters
Parameters
name
string
Must not be set.
filter
string
Required. A filter for matching the requested operations. The supported formats of filter are: To query for a specific function:
project:*,location:*,function:*
To query for all of the latest operations for a project:
project:*,latest:true
pageSize
integer
The maximum number of records that should be returned. Requested page size cannot exceed 100. If not set, the default page size is 100. Pagination is only supported when querying for a specific function.
pageToken
string
Token identifying which result to start with, which is returned by a previous list call. Pagination is only supported when querying for a specific function.
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of ListOperationsResponse .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudfunctions
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-16 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-16 UTC."],[],[]]
