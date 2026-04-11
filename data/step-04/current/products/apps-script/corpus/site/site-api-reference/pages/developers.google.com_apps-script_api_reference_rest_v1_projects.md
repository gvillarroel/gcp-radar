---
title: "REST Resource: projects \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/api/reference/rest/v1/projects
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/apps-script/api/reference/rest
source_metadata:
  url: https://developers.google.com/apps-script/api/reference/rest/v1/projects
  title: "REST Resource: projects \_|\_ Apps Script \_|\_ Google for Developers"
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
REST Resource: projects
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The Project resource represents a script project and includes fields like scriptId , title , parentId , createTime , updateTime , creator , and lastModifyUser .
The User resource provides basic user profile information such as domain , email , name , and photoUrl .
Available methods for managing script projects include create , get , getContent , getMetrics , and updateContent .
Resource: Project
JSON representation
User
JSON representation
Methods
Resource: Project
The script project resource.
JSON representation
{
"scriptId" : string ,
"title" : string ,
"parentId" : string ,
"createTime" : string ,
"updateTime" : string ,
"creator" : {
object ( User )
} ,
"lastModifyUser" : {
object ( User )
}
}
Fields
scriptId
string
The script project's Drive ID.
title
string
The title for the project.
parentId
string
The parent's Drive ID that the script will be attached to. This is usually the ID of a Google Document or Google Sheet. This filed is optional, and if not set, a stand-alone script will be created.
createTime
string ( Timestamp format)
When the script was created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
updateTime
string ( Timestamp format)
When the script was last updated.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
creator
object ( User )
User who originally created the script.
lastModifyUser
object ( User )
User who last modified the script.
User
A simple user profile resource.
JSON representation
{
"domain" : string ,
"email" : string ,
"name" : string ,
"photoUrl" : string
}
Fields
domain
string
The user's domain.
email
string
The user's identifying email address.
name
string
The user's display name.
photoUrl
string
The user's photo.
Methods
create
Creates a new, empty script project with no script files and a base manifest file.
get
Gets a script project's metadata.
getContent
Gets the content of the script project, including the code source and metadata for each script file.
getMetrics
Get metrics data for scripts, such as number of executions and active users.
updateContent
Updates the content of the specified script project.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-10-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-10-31 UTC."],[],[]]
