---
title: "Method: projects.locations.operations.list \_|\_ Immersive Stream for XR \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/immersive-stream/xr/docs/reference/rest/v1/projects.locations.operations/list
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/immersive-stream/xr/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/immersive-stream/xr/docs/reference/rest/v1/projects.locations.operations/list
  title: "Method: projects.locations.operations.list \_|\_ Immersive Stream for XR\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Immersive Stream for XR
Reference
Send feedback
Method: projects.locations.operations.list
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization Scopes
Try it!
Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED .
NOTE: the name binding allows API services to override the binding to use different resource name schemes, such as users/*/operations . To override the binding, API services can add a binding such as "/v1/{name=users/*}/operations" to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
HTTP request
GET https://stream.googleapis.com/v1/{name=projects/*/locations/*}/operations
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
The name of the operation's parent resource.
Query parameters
Parameters
filter
string
The standard list filter.
pageSize
integer
The standard list page size.
pageToken
string
The standard list page token.
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of ListOperationsResponse .
Authorization Scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-30 UTC."],[],[]]
