---
title: "Method: projects.locations.configurations.reactivate \_|\_ Compute Engine\
  \ \_|\_ Google Cloud Documentation"
url: https://developers.google.com/compute/docs/licensemanager/rest/v1/projects.locations.configurations/reactivate
knowledge_key: corpus
source_id: site-docs-root-3
source_type: site
entrypoint: https://developers.google.com/compute/docs
source_metadata:
  url: https://developers.google.com/compute/docs/licensemanager/rest/v1/projects.locations.configurations/reactivate
  title: "Method: projects.locations.configurations.reactivate \_|\_ Compute Engine\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
APIs & Reference
Send feedback
Method: projects.locations.configurations.reactivate
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
JSON representation
Response body
Authorization scopes
IAM Permissions
Reactivates the given configuration.
HTTP request
POST https://licensemanager.googleapis.com/v1/{name=projects/*/locations/*/configurations/*}:reactivate
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Required. Name of the resource.
Request body
The request body contains data with the following structure:
JSON representation
{
"requestId" : string
}
Fields
requestId
string
Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request.
For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments.
The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
Response body
If successful, the response body contains an instance of Operation .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the name resource:
licensemanager.configurations.update
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-28 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-28 UTC."],[],[]]
