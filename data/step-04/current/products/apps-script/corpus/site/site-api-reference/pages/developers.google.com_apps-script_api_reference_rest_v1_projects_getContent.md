---
title: "Method: projects.getContent \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/api/reference/rest/v1/projects/getContent
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/apps-script/api/reference/rest
source_metadata:
  url: https://developers.google.com/apps-script/api/reference/rest/v1/projects/getContent
  title: "Method: projects.getContent \_|\_ Apps Script \_|\_ Google for Developers"
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
Method: projects.getContent
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This method gets the content of a script project, including the code source and metadata for each script file.
The HTTP request uses a GET method with the URL https://script.googleapis.com/v1/projects/{scriptId}/content .
The scriptId is a required path parameter, representing the script project's Drive ID.
An optional query parameter versionNumber can be used to retrieve a specific version of the project.
The response body, if successful, contains the script project's Drive ID and a list of script project files.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization Scopes
Try it!
Gets the content of the script project, including the code source and metadata for each script file.
HTTP request
GET https://script.googleapis.com/v1/projects/{scriptId}/content
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
scriptId
string
The script project's Drive ID.
Query parameters
Parameters
versionNumber
integer
The version number of the project to retrieve. If not provided, the project's HEAD version is returned.
Request body
The request body must be empty.
Response body
If successful, the response body contains data with the following structure:
The Content resource.
JSON representation
{
"scriptId" : string ,
"files" : [
{
object ( File )
}
]
}
Fields
scriptId
string
The script project's Drive ID.
files[]
object ( File )
The list of script project files. One of the files is a script manifest; it must be named "appsscript", must have type of JSON, and include the manifest configurations for the project.
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
