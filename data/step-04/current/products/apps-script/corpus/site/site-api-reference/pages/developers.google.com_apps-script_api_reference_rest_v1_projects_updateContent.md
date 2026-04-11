---
title: "Method: projects.updateContent \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/api/reference/rest/v1/projects/updateContent
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/apps-script/api/reference/rest
source_metadata:
  url: https://developers.google.com/apps-script/api/reference/rest/v1/projects/updateContent
  title: "Method: projects.updateContent \_|\_ Apps Script \_|\_ Google for Developers"
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
Method: projects.updateContent
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
This API updates the content of a specified script project, overwriting existing files and storing the new content as the HEAD version used for various execution contexts.
The request uses a PUT HTTP method to the specified endpoint including the scriptId as a path parameter.
The request body must contain a JSON object with a files array, where each object represents a script project file including a required manifest file named "appsscript".
A successful response returns an instance of Content .
Authorization requires the https://www.googleapis.com/auth/script.projects OAuth scope.
HTTP request
Path parameters
Request body
JSON representation
Response body
Authorization Scopes
Try it!
Updates the content of the specified script project. This content is stored as the HEAD version, and is used when the script is executed as a trigger, in the script editor, in add-on preview mode, or as a web app or Apps Script API in development mode. This clears all the existing files in the project.
HTTP request
PUT https://script.googleapis.com/v1/projects/{scriptId}/content
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
"files" : [
{
object ( File )
}
]
}
Fields
files[]
object ( File )
The list of script project files. One of the files is a script manifest; it must be named "appsscript", must have type of JSON, and include the manifest configurations for the project.
Response body
If successful, the response body contains an instance of Content .
Authorization Scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/script.projects
For more information, see the OAuth 2.0 Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-10-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-10-31 UTC."],[],[]]
