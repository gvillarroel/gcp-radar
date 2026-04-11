---
title: "Method: projects.versions.list \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/list
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/apps-script/api/reference/rest
source_metadata:
  url: https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/list
  title: "Method: projects.versions.list \_|\_ Apps Script \_|\_ Google for Developers"
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
Method: projects.versions.list
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
You can list the versions of a script project using a GET request to the specified URL.
The only required path parameter is scriptId , which is the script project's Drive ID.
Optional query parameters include pageToken for pagination and pageSize to limit the number of versions per page.
The request body should be empty.
The response body contains a list of versions and an optional nextPageToken for further pagination.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization Scopes
Try it!
List the versions of a script project.
HTTP request
GET https://script.googleapis.com/v1/projects/{scriptId}/versions
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
The maximum number of versions on each returned page. Defaults to 50.
Request body
The request body must be empty.
Response body
If successful, the response body contains data with the following structure:
Response with the list of the versions for the specified script project.
JSON representation
{
"versions" : [
{
object ( Version )
}
] ,
"nextPageToken" : string
}
Fields
versions[]
object ( Version )
The list of versions.
nextPageToken
string
The token use to fetch the next page of records. if not exist in the response, that means no more versions to list.
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
