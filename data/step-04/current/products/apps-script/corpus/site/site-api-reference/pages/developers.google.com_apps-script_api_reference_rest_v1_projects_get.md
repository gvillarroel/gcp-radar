---
title: "Method: projects.get \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/api/reference/rest/v1/projects/get
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/apps-script/api/reference/rest
source_metadata:
  url: https://developers.google.com/apps-script/api/reference/rest/v1/projects/get
  title: "Method: projects.get \_|\_ Apps Script \_|\_ Google for Developers"
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
Method: projects.get
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Gets a script project's metadata using a GET request to https://script.googleapis.com/v1/projects/{scriptId} .
Requires a scriptId path parameter, which is the script project's Drive ID.
The request body must be empty.
The response body contains a Project instance if successful.
Requires one of the specified OAuth scopes for authorization.
HTTP request
Path parameters
Request body
Response body
Authorization Scopes
Try it!
Gets a script project's metadata.
HTTP request
GET https://script.googleapis.com/v1/projects/{scriptId}
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
scriptId
string
The script project's Drive ID.
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of Project .
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
