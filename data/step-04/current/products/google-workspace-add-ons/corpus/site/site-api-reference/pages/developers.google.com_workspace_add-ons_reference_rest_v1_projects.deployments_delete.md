---
title: "Method: projects.deployments.delete \_|\_ Google Workspace add-ons \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/workspace/add-ons/reference/rest/v1/projects.deployments/delete
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/add-ons/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/add-ons/reference/rest/v1/projects.deployments/delete
  title: "Method: projects.deployments.delete \_|\_ Google Workspace add-ons \_|\_\
    \ Google for Developers"
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
Method: projects.deployments.delete
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This document details how to delete a Google Workspace Add-on deployment using the DELETE HTTP request method.
The request requires specifying the deployment's name as a path parameter and optionally an etag as a query parameter for concurrency control.
Successful deletion results in an empty JSON response body, indicating the deployment has been removed.
Authorization for this operation necessitates the cloud-platform OAuth scope and the gsuiteaddons.deployments.delete IAM permission.
The request body should be empty when sending the delete request.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
Try it!
Deletes the deployment with the given name.
HTTP request
DELETE https://gsuiteaddons.googleapis.com/v1/{name=projects/*/deployments/*}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Required. The full resource name of the deployment to delete.
Example: projects/my_project/deployments/my_deployment .
Authorization requires the following IAM permission on the specified resource name :
gsuiteaddons.deployments.delete
Query parameters
Parameters
etag
string
The etag of the deployment to delete. If this is provided, it must match the server's etag.
Request body
The request body must be empty.
Response body
If successful, the response body is an empty JSON object.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authorization guide .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-02 UTC."],[],["This document details the process of deleting a deployment using an HTTP DELETE request. The request URL, employing gRPC Transcoding syntax, requires a `name` path parameter, specifying the deployment's full resource name. Optionally, the `etag` query parameter can be used for conditional deletion. The request body must be empty. Successful deletion returns an empty JSON object. This action requires the `gsuiteaddons.deployments.delete` IAM permission and the `https://www.googleapis.com/auth/cloud-platform` OAuth scope.\n"]]
