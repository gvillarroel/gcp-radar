---
title: "Method: projects.versions.get \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/get
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/apps-script/api/reference/rest
source_metadata:
  url: https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/get
  title: "Method: projects.versions.get \_|\_ Apps Script \_|\_ Google for Developers"
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
Method: projects.versions.get
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This page details how to get a specific version of an Apps Script project using a REST API request.
The request requires the script project's Drive ID ( scriptId ) and the desired versionNumber as path parameters.
The request body must be empty, and a successful response returns a Version object.
Accessing this functionality requires specific OAuth scopes related to script projects.
HTTP request
Path parameters
Request body
Response body
Authorization Scopes
Try it!
Gets a version of a script project.
HTTP request
GET https://script.googleapis.com/v1/projects/{scriptId}/versions/{versionNumber}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
scriptId
string
The script project's Drive ID.
versionNumber
integer
The version number.
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of Version .
Authorization Scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/script.projects
https://www.googleapis.com/auth/script.projects.readonly
For more information, see the OAuth 2.0 Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-10-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-10-31 UTC."],[],[]]
