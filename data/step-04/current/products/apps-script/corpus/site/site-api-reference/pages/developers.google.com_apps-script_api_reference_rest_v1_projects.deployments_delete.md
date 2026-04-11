---
title: "Method: projects.deployments.delete \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments/delete
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/apps-script/api/reference/rest
source_metadata:
  url: https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments/delete
  title: "Method: projects.deployments.delete \_|\_ Apps Script \_|\_ Google for Developers"
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
Method: projects.deployments.delete
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This page details how to delete a deployment of an Apps Script project using a DELETE HTTP request.
The DELETE request requires both a scriptId and a deploymentId as path parameters.
The request body for this DELETE operation must be empty.
A successful response body is also empty.
Deleting a deployment requires authorization using the https://www.googleapis.com/auth/script.deployments OAuth scope.
HTTP request
Path parameters
Request body
Response body
Authorization Scopes
Try it!
Deletes a deployment of an Apps Script project.
HTTP request
DELETE https://script.googleapis.com/v1/projects/{scriptId}/deployments/{deploymentId}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
scriptId
string
The script project's Drive ID.
deploymentId
string
The deployment ID to be undeployed.
Request body
The request body must be empty.
Response body
If successful, the response body is empty.
Authorization Scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/script.deployments
For more information, see the OAuth 2.0 Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-10-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-10-31 UTC."],[],[]]
