---
title: "Method: projects.deployments.create \_|\_ Google Workspace add-ons \_|\_ Google\
  \ for Developers"
url: https://developers.google.com/workspace/add-ons/reference/rest/v1/projects.deployments/create
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://developers.google.com/workspace/add-ons/reference
source_metadata:
  url: https://developers.google.com/workspace/add-ons/reference/rest/v1/projects.deployments/create
  title: "Method: projects.deployments.create \_|\_ Google Workspace add-ons \_|\_\
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
Method: projects.deployments.create
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Creates a deployment with a specified name and configuration using an HTTP POST request.
Requires gsuiteaddons.deployments.create IAM permission and https://www.googleapis.com/auth/cloud-platform OAuth scope.
Utilizes path parameters for project specification and query parameters for deployment ID.
Request and response bodies contain instances of the Deployment resource, allowing configuration and retrieval of deployment details.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
Try it!
Creates a deployment with the specified name and configuration.
HTTP request
POST https://gsuiteaddons.googleapis.com/v1/{parent=projects/*}/deployments
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. Name of the project in which to create the deployment.
Example: projects/my_project .
Authorization requires the following IAM permission on the specified resource parent :
gsuiteaddons.deployments.create
Query parameters
Parameters
deploymentId
string
Required. The ID to use for this deployment. The full name of the created resource will be projects/<projectNumber>/deployments/<deploymentId> .
Request body
The request body contains an instance of Deployment .
Response body
If successful, the response body contains a newly created instance of Deployment .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authorization guide .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-02 UTC."],[],["This outlines creating a deployment using a POST request to `https://gsuiteaddons.googleapis.com/v1/{parent=projects/*}/deployments`. It requires a `parent` path parameter specifying the project and a `deploymentId` query parameter. The request body defines the deployment's configuration, and a successful response returns a newly created deployment instance. Authorization requires the `gsuiteaddons.deployments.create` IAM permission and the `https://www.googleapis.com/auth/cloud-platform` OAuth scope.\n"]]
