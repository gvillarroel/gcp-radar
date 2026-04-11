---
title: "Method: projects.create \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/api/reference/rest/v1/projects/create
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/apps-script/api/reference/rest
source_metadata:
  url: https://developers.google.com/apps-script/api/reference/rest/v1/projects/create
  title: "Method: projects.create \_|\_ Apps Script \_|\_ Google for Developers"
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
Method: projects.create
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This page details how to create a new, empty script project using the Apps Script API.
The creation is done via an HTTP POST request to https://script.googleapis.com/v1/projects .
The request body can include a title for the project and an optional parentId to bind the script to a specific Google Drive file.
A successful response will return a newly created Project instance.
This operation requires the https://www.googleapis.com/auth/script.projects authorization scope.
HTTP request
Request body
JSON representation
Response body
Authorization Scopes
Try it!
Creates a new, empty script project with no script files and a base manifest file.
HTTP request
POST https://script.googleapis.com/v1/projects
The URL uses gRPC Transcoding syntax.
Request body
The request body contains data with the following structure:
JSON representation
{
"title" : string ,
"parentId" : string
}
Fields
title
string
The title for the project.
parentId
string
The Drive ID of a parent file that the created script project is bound to. This is usually the ID of a Google Doc, Google Sheet, Google Form, or Google Slides file. If not set, a standalone script project is created.
Response body
If successful, the response body contains a newly created instance of Project .
Authorization Scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/script.projects
For more information, see the OAuth 2.0 Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-10-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-10-31 UTC."],[],[]]
