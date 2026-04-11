---
title: "Method: projects.groups.get \_|\_ Error Reporting \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/error-reporting/reference/rest/v1beta1/projects.groups/get
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/error-reporting/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/error-reporting/reference/rest/v1beta1/projects.groups/get
  title: "Method: projects.groups.get \_|\_ Error Reporting \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Google Cloud Observability
Error Reporting
Reference
Send feedback
Method: projects.groups.get
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
Response body
Authorization scopes
Try it!
Get the specified group.
HTTP request
GET https://clouderrorreporting.googleapis.com/v1beta1/{groupName=projects/*/groups/*}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
groupName
string
Required. The group resource name. Written as either projects/{projectID}/groups/{groupId} or projects/{projectID}/locations/{location}/groups/{groupId} . Call groupStats.list to return a list of groups belonging to this project.
Examples: projects/my-project-123/groups/my-group , projects/my-project-123/locations/global/groups/my-group
In the group resource name, the groupId is a unique identifier for a particular error group. The identifier is derived from key parts of the error-log content and is treated as Service Data. For information about how Service Data is handled, see Google Cloud Privacy Notice .
For a list of supported locations, see Supported Regions . global is the default when unspecified.
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of ErrorGroup .
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloud-platform
https://www.googleapis.com/auth/stackdriver-integration
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-14 UTC."],[],[]]
