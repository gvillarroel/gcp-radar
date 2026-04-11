---
title: "Method: projects.deployments.list \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments/list
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/apps-script/api/reference/rest
source_metadata:
  url: https://developers.google.com/apps-script/api/reference/rest/v1/projects.deployments/list
  title: "Method: projects.deployments.list \_|\_ Apps Script \_|\_ Google for Developers"
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
Method: projects.deployments.list
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This page describes how to list the deployments of an Apps Script project using a GET HTTP request.
The request requires a scriptId path parameter and can optionally include pageToken and pageSize query parameters.
The request body must be empty.
The response body contains a list of deployments and a nextPageToken for pagination.
Authorization requires specific OAuth scopes for script deployments.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization Scopes
Try it!
Lists the deployments of an Apps Script project.
HTTP request
GET https://script.googleapis.com/v1/projects/{scriptId}/deployments
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
scriptId
string
The script project's Drive ID.
Query parameters
Parameters
pageToken
string
The token for continuing a previous list request on the next page. This should be set to the value of nextPageToken from a previous response.
pageSize
integer
The maximum number of deployments on each returned page. Defaults to 50.
Request body
The request body must be empty.
Response body
If successful, the response body contains data with the following structure:
Response with the list of deployments for the specified Apps Script project.
JSON representation
{
"deployments" : [
{
object ( Deployment )
}
] ,
"nextPageToken" : string
}
Fields
deployments[]
object ( Deployment )
The list of deployments.
nextPageToken
string
The token that can be used in the next call to get the next page of results.
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
