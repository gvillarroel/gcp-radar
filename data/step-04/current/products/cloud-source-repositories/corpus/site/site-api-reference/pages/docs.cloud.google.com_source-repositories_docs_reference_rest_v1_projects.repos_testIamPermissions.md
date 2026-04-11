---
title: "Method: projects.repos.testIamPermissions \_|\_ Cloud Source Repositories\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/source-repositories/docs/reference/rest/v1/projects.repos/testIamPermissions
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/source-repositories/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/source-repositories/docs/reference/rest/v1/projects.repos/testIamPermissions
  title: "Method: projects.repos.testIamPermissions \_|\_ Cloud Source Repositories\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Effective June 17, 2024, Cloud Source Repositories isn't available to new customers. For alternative source hosting options, Secure Source Manager is a regionally deployed, single tenant, managed source code repository hosted on Google Cloud.
If your organization hasn't previously used Cloud Source Repositories, you can't enable the API or use Cloud Source Repositories. New projects not connected to an organization can't enable the Cloud Source Repositories API. Organizations that have used Cloud Source Repositories prior to June 17, 2024 are not affected by this change.
Home
Documentation
Application development
Cloud Source Repositories
Reference
Send feedback
Method: projects.repos.testIamPermissions
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
JSON representation
Response body
JSON representation
Authorization scopes
Try it!
Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.
HTTP request
POST https://sourcerepo.googleapis.com/v1/{resource=projects/*/repos/**}:testIamPermissions
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
resource
string
REQUIRED: The resource for which the policy detail is being requested. See Resource names for the appropriate value for this field.
Request body
The request body contains data with the following structure:
JSON representation
{
"permissions" : [
string
]
}
Fields
permissions[]
string
The set of permissions to check for the resource . Permissions with wildcards (such as * or storage.* ) are not allowed. For more information see IAM Overview .
Response body
Response message for repos.testIamPermissions method.
If successful, the response body contains data with the following structure:
JSON representation
{
"permissions" : [
string
]
}
Fields
permissions[]
string
A subset of TestPermissionsRequest.permissions that the caller is allowed.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
