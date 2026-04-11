---
title: "Method: projects.versions.create \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/create
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/apps-script/api/reference/rest
source_metadata:
  url: https://developers.google.com/apps-script/api/reference/rest/v1/projects.versions/create
  title: "Method: projects.versions.create \_|\_ Apps Script \_|\_ Google for Developers"
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
Method: projects.versions.create
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
A new immutable version of a script project is created using a POST request to a specific URL.
The request requires a scriptId as a path parameter to identify the project.
The request body is a JSON object containing optional fields like versionNumber , description , and createTime for the new version.
A successful response returns a newly created Version object.
Authorization requires the https://www.googleapis.com/auth/script.projects OAuth scope.
HTTP request
Path parameters
Request body
JSON representation
Response body
Authorization Scopes
Try it!
Creates a new immutable version using the current code, with a unique version number.
HTTP request
POST https://script.googleapis.com/v1/projects/{scriptId}/versions
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
"description" : string ,
"createTime" : string
}
Fields
versionNumber
integer
The incremental ID that is created by Apps Script when a version is created. This is system assigned number and is immutable once created.
description
string
The description for this version.
createTime
string ( Timestamp format)
When the version was created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
Response body
If successful, the response body contains a newly created instance of Version .
Authorization Scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/script.projects
For more information, see the OAuth 2.0 Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-10-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-10-31 UTC."],[],[]]
