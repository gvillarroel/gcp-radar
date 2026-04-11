---
title: "Method: projects.deployments.create \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments/create
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/apps-script/api/reference/rest
source_metadata:
  url: https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments/create
  title: "Method: projects.deployments.create \_|\_ Apps Script \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Apps Script
Reference
Send feedback
Method: projects.deployments.create
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This content describes how to create a deployment of an Apps Script project using an HTTP POST request to the specified URL.
The request requires a scriptId as a path parameter, which is the Drive ID of the script project.
The request body is a JSON object containing optional fields for versionNumber , manifestFileName , and description .
A successful request returns a Deployment object in the response body.
Creating a deployment requires the https://www.googleapis.com/auth/script.deployments OAuth scope for authorization.
HTTP request
Path parameters
Request body
JSON representation
Response body
Authorization Scopes
Try it!
Creates a deployment of an Apps Script project.
HTTP request
POST https://script.googleapis.com/v1/projects/{scriptId}/deployments
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
scriptId
string
The script project's Drive ID.
Request body
The request body contains data with the following structure:
JSON representation
{
"versionNumber" : integer ,
"manifestFileName" : string ,
"description" : string
}
Fields
versionNumber
integer
The version number on which this deployment is based.
manifestFileName
string
The manifest file name for this deployment.
description
string
The description for this deployment.
Response body
If successful, the response body contains a newly created instance of Deployment .
Authorization Scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/script.deployments
For more information, see the OAuth 2.0 Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-10-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-10-31 UTC."],[],[]]
