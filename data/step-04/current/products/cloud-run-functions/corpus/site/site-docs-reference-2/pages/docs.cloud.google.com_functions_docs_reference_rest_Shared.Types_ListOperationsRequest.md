---
title: "ListOperationsRequest \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListOperationsRequest
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/functions/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/ListOperationsRequest
  title: "ListOperationsRequest \_|\_ Cloud Run functions \_|\_ Google Cloud Documentation"
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
ListOperationsRequest
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
The request message for Operations.ListOperations .
JSON representation
{
"name" : string ,
"filter" : string ,
"pageSize" : integer ,
"pageToken" : string
}
Fields
name
string
v1:
This field shouldn't be set for v1 operations.
v2:
The name of the operation's parent resource.
filter
string
v1:
Required. A filter for matching the requested operations. The supported formats of filter are: To query for a specific function:
project:*,location:*,function:*
To query for all of the latest operations for a project:
project:*,latest:true
v2:
The standard list filter.
pageSize
integer
v1:
The maximum number of records that should be returned. Requested page size cannot exceed 100. If not set, the default page size is 100. Pagination is only supported when querying for a specific function.
v2:
The standard list page size.
pageToken
string
v1:
Token identifying which result to start with, which is returned by a previous list call. Pagination is only supported when querying for a specific function.
v2:
The standard list page token.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-16 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-16 UTC."],[],[]]
