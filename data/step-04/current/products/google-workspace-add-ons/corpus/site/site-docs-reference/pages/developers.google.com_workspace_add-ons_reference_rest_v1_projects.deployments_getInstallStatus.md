---
title: "Method: projects.deployments.getInstallStatus \_|\_ Google Workspace add-ons\
  \ \_|\_ Google for Developers"
url: https://developers.google.com/workspace/add-ons/reference/rest/v1/projects.deployments/getInstallStatus
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/workspace/add-ons/reference
source_metadata:
  url: https://developers.google.com/workspace/add-ons/reference/rest/v1/projects.deployments/getInstallStatus
  title: "Method: projects.deployments.getInstallStatus \_|\_ Google Workspace add-ons\
    \ \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Add-ons
Reference
Send feedback
Method: projects.deployments.getInstallStatus
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Retrieves the installation status of a specific Google Workspace Add-on deployment.
Requires the deployment's full resource name as a path parameter and an empty request body.
Returns a JSON response indicating whether the deployment is installed for the user along with the deployment's full resource name.
Needs authorization with the https://www.googleapis.com/auth/cloud-platform scope for access.
HTTP request
Path parameters
Request body
Response body
JSON representation
Authorization scopes
Try it!
Gets the install status of a test deployment.
HTTP request
GET https://gsuiteaddons.googleapis.com/v1/{name=projects/*/deployments/*/installStatus}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Required. The full resource name of the deployment.
Example: projects/my_project/deployments/my_deployment/installStatus .
Authorization requires the following IAM permission on the specified resource name :
gsuiteaddons.deployments.installStatus
Request body
The request body must be empty.
Response body
Install status of a test deployment.
If successful, the response body contains data with the following structure:
JSON representation
{
"name" : string ,
"installed" : boolean
}
Fields
name
string
The canonical full resource name of the deployment install status.
Example: projects/123/deployments/my_deployment/installStatus .
installed
boolean
True if the deployment is installed for the user.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authorization guide .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-02 UTC."],[],["This document details retrieving the installation status of a test deployment. A `GET` request to a specific URL using gRPC Transcoding syntax is made, including a `name` path parameter identifying the deployment. The request body is empty. The response contains a JSON object with the deployment's resource `name` and a boolean `installed` status. Authorization requires an IAM permission (`gsuiteaddons.deployments.installStatus`) and the OAuth scope (`https://www.googleapis.com/auth/cloud-platform`).\n"]]
