---
title: "Method: projects.deployments.get \_|\_ Google Workspace add-ons \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/workspace/add-ons/reference/rest/v1/projects.deployments/get
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/workspace/add-ons/reference
source_metadata:
  url: https://developers.google.com/workspace/add-ons/reference/rest/v1/projects.deployments/get
  title: "Method: projects.deployments.get \_|\_ Google Workspace add-ons \_|\_ Google\
    \ for Developers"
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
Method: projects.deployments.get
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Retrieves a specific Google Workspace Add-on deployment using its resource name.
Requires the cloud-platform OAuth scope for authorization and the gsuiteaddons.deployments.get IAM permission on the deployment.
The request should be a GET request to the specified URL with the deployment name as a path parameter and an empty request body.
A successful response returns a Deployment object containing information about the requested deployment.
HTTP request
Path parameters
Request body
Response body
Authorization scopes
Try it!
Gets the deployment with the specified name.
HTTP request
GET https://gsuiteaddons.googleapis.com/v1/{name=projects/*/deployments/*}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Required. The full resource name of the deployment to get.
Example: projects/my_project/deployments/my_deployment .
Authorization requires the following IAM permission on the specified resource name :
gsuiteaddons.deployments.get
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of Deployment .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authorization guide .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-02 UTC."],[],["This document outlines the process of retrieving a specific deployment. A `GET` request is made to a specified URL using gRPC Transcoding syntax, incorporating a required `name` path parameter to identify the deployment. The request body must be empty. A successful response returns a `Deployment` instance. Access requires the `gsuiteaddons.deployments.get` IAM permission and the `https://www.googleapis.com/auth/cloud-platform` OAuth scope. There are also links to HTTP requests, response bodies, and Authorization scopes.\n"]]
