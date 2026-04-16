---
title: "Deployments: testIamPermissions \_|\_ Cloud Deployment Manager \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/testIamPermissions
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/setIamPolicy
source_metadata:
  url: https://docs.cloud.google.com/deployment-manager/docs/reference/latest/deployments/testIamPermissions
  title: "Deployments: testIamPermissions \_|\_ Cloud Deployment Manager \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Cloud Deployment Manager will reach end of support on March 31, 2026 . If you currently use Deployment Manager, please migrate to Infrastructure Manager or an alternative deployment technology by March 31, 2026 to ensure your services continue without interruption.
For more information on the deprecation and shutdown, see Deployment Manager deprecation .
Home
Documentation
Infrastructure as code
Cloud Deployment Manager
Reference
Send feedback
Deployments: testIamPermissions
Stay organized with collections
Save and categorize content based on your preferences.
Requires authorization
Returns permissions that a caller has on the specified resource.
Try it now .
Request
HTTP request
POST https://www.googleapis.com/deploymentmanager/v2/projects/ project /global/deployments/ resource /testIamPermissions
Parameters
Parameter name
Value
Description
Path parameters
project
string
Project ID for this request.
resource
string
Name or id of the resource for this request.
Authorization
This request requires authorization with at least one of the following scopes ( read more about authentication and authorization ).
Scope
https://www.googleapis.com/auth/cloud-platform
https://www.googleapis.com/auth/ndev.cloudman
Request body
In the request body, supply data with the following structure:
{
"permissions": [
string
]
}
Property name
Value
Description
Notes
permissions[]
list
The set of permissions to check for the 'resource'. Permissions with wildcards (such as '*' or 'storage.*') are not allowed.
Response
If successful, this method returns a response body with the following structure:
{
"permissions": [
string
]
}
Property name
Value
Description
Notes
permissions[]
list
A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
Try it!
Use the APIs Explorer below to call this method on live data and see the response.
Alternatively, try the
standalone
Explorer .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-04-30 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-04-30 UTC."],[],[]]
