---
title: "Method: projects.deployments.get \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments/get
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/apps-script/api/reference/rest
source_metadata:
  url: https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments/get
  title: "Method: projects.deployments.get \_|\_ Apps Script \_|\_ Google for Developers"
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
Method: projects.deployments.get
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This page details how to get a deployment of an Apps Script project using a GET HTTP request.
The request requires both the script project's Drive ID and the deployment ID as path parameters.
The request body must be empty, and a successful response contains an instance of Deployment.
Authorization is required using specific OAuth scopes related to script deployments.
HTTP request
Path parameters
Request body
Response body
Authorization Scopes
Try it!
Gets a deployment of an Apps Script project.
HTTP request
GET https://script.googleapis.com/v1/projects/{scriptId}/deployments/{deploymentId}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
scriptId
string
The script project's Drive ID.
deploymentId
string
The deployment ID.
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of Deployment .
Authorization Scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/script.deployments
https://www.googleapis.com/auth/script.deployments.readonly
For more information, see the OAuth 2.0 Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-10-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-10-31 UTC."],[],[]]
