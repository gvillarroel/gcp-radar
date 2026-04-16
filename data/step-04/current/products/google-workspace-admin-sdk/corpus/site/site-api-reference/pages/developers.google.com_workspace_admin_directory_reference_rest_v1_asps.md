---
title: "REST Resource: asps \_|\_ Admin console \_|\_ Google for Developers"
url: https://developers.google.com/workspace/admin/directory/reference/rest/v1/asps
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/workspace/admin/directory/reference/rest
source_metadata:
  url: https://developers.google.com/workspace/admin/directory/reference/rest/v1/asps
  title: "REST Resource: asps \_|\_ Admin console \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Admin console
Reference
Send feedback
REST Resource: asps
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Asp
An application-specific password (ASP) is used with applications that do not accept a verification code when logging into the application on certain devices. The ASP access code is used instead of the login and password you commonly use when accessing an application through a browser. For more information about ASPs and how to create one, see the help center .
JSON representation
{
"codeId" : integer ,
"name" : string ,
"creationTime" : string ,
"lastTimeUsed" : string ,
"userKey" : string ,
"kind" : string ,
"etag" : string
}
Fields
codeId
integer
The unique ID of the ASP.
name
string
The name of the application that the user, represented by their userId , entered when the ASP was created.
creationTime
string ( int64 format)
The time when the ASP was created. Expressed in Unix time format.
lastTimeUsed
string ( int64 format)
The time when the ASP was last used. Expressed in Unix time format.
userKey
string
The unique ID of the user who issued the ASP.
kind
string
The type of the API resource. This is always admin#directory#asp .
etag
string
ETag of the ASP.
Methods
delete
Deletes an ASP issued by a user.
get
Gets information about an ASP issued by a user.
list
Lists the ASPs issued by a user.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-03-25 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-03-25 UTC."],[],[]]
