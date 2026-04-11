---
title: "Method: projects.locations.appConnections.patch \_|\_ Chrome Enterprise Premium\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/chrome-enterprise-premium/docs/reference/rest/v1/projects.locations.appConnections/patch
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/chrome-enterprise-premium/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/chrome-enterprise-premium/docs/reference/rest/v1/projects.locations.appConnections/patch
  title: "Method: projects.locations.appConnections.patch \_|\_ Chrome Enterprise\
    \ Premium \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
Chrome Enterprise Premium
Send feedback
Method: projects.locations.appConnections.patch
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
Try it!
Updates the parameters of a single AppConnection.
HTTP request
PATCH https://beyondcorp.googleapis.com/v1/{appConnection.name=projects/*/locations/*/appConnections/*}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
appConnection.name
string
Required. Unique resource name of the AppConnection. The name is ignored when creating a AppConnection.
Query parameters
Parameters
updateMask
string ( FieldMask format)
Required. Mask of fields to update. At least one path must be supplied in this field. The elements of the repeated paths field may only include these fields from [BeyondCorp.AppConnection]: * labels * displayName * applicationEndpoint * connectors
This is a comma-separated list of fully qualified names of fields. Example: "user.displayName,photo" .
requestId
string
Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request.
For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments.
The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
validateOnly
boolean
Optional. If set, validates request by executing a dry-run which would not alter the resource in any way.
allowMissing
boolean
Optional. If set as true, will create the resource if it is not found.
Request body
The request body contains an instance of AppConnection .
Response body
If successful, the response body contains an instance of Operation .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-02 UTC."],[],[]]
