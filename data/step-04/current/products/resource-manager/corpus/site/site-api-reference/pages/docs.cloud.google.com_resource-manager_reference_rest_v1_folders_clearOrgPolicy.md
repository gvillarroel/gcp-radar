---
title: "Method: folders.clearOrgPolicy \_|\_ Resource Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/resource-manager/reference/rest/v1/folders/clearOrgPolicy
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/resource-manager/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/resource-manager/reference/rest/v1/folders/clearOrgPolicy
  title: "Method: folders.clearOrgPolicy \_|\_ Resource Manager \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Resource Manager
Reference
Send feedback
Method: folders.clearOrgPolicy
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
JSON representation
Response body
Authorization scopes
Try it!
Clears a Policy from a resource.
HTTP request
POST https://cloudresourcemanager.googleapis.com/v1/{resource=folders/*}:clearOrgPolicy
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
resource
string
Name of the resource for the Policy to clear.
Authorization requires the following IAM permission on the specified resource resource :
orgpolicy.policy.set
Request body
The request body contains data with the following structure:
JSON representation
{
"constraint" : string ,
"etag" : string
}
Fields
constraint
string
Name of the Constraint of the Policy to clear.
etag
string ( bytes format)
The current version, for concurrency control. Not sending an etag will cause the Policy to be cleared blindly.
A base64-encoded string.
Response body
If successful, the response body is an empty JSON object.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloud-platform
https://www.googleapis.com/auth/cloudplatformorganizations
https://www.googleapis.com/auth/cloudplatformprojects
https://www.googleapis.com/auth/cloudplatformfolders
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-11 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-11 UTC."],[],[]]
