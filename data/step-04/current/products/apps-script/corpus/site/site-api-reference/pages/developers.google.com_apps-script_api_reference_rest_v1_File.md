---
title: "File \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/api/reference/rest/v1/File
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/apps-script/api/reference/rest
source_metadata:
  url: https://developers.google.com/apps-script/api/reference/rest/v1/File
  title: "File \_|\_ Apps Script \_|\_ Google for Developers"
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
File
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
A file within a script project is third-party source code created by developers, which can be server-side JS, HTML, or a configuration file.
Each file has properties including its name, type, source content, last modifying user, creation time, update time, and a set of defined functions.
Files can be of different types, such as server-side Javascript, HTML, or JSON for the project's manifest.
A FunctionSet represents a unique collection of functions within a script file.
A Function object represents a function in a script project with a name and an ordered list of parameter names.
JSON representation
FileType
FunctionSet
JSON representation
Function
JSON representation
An individual file within a script project. A file is a third-party source code created by one or more developers. It can be a server-side JS code, HTML, or a configuration file. Each script project can contain multiple files.
JSON representation
{
"name" : string ,
"type" : enum ( FileType ) ,
"source" : string ,
"lastModifyUser" : {
object ( User )
} ,
"createTime" : string ,
"updateTime" : string ,
"functionSet" : {
object ( FunctionSet )
}
}
Fields
name
string
The name of the file. The file extension is not part of the file name, which can be identified from the type field.
type
enum ( FileType )
The type of the file.
source
string
The file content.
lastModifyUser
object ( User )
The user who modified the file most recently. The details visible in this object are controlled by the profile visibility settings of the last modifying user.
createTime
string ( Timestamp format)
Creation date timestamp.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
updateTime
string ( Timestamp format)
Last modified date timestamp.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
functionSet
object ( FunctionSet )
The defined set of functions in the script file, if any.
FileType
An enumeration of different types of files.
Enums
ENUM_TYPE_UNSPECIFIED
Undetermined file type; never actually used.
SERVER_JS
An Apps Script server-side code file.
HTML
A file containing client-side HTML.
JSON
A file in JSON format. This type is only used for the script project's manifest. The manifest file content must match the structure of a valid ScriptManifest
FunctionSet
A set of functions. No duplicates are permitted.
JSON representation
{
"values" : [
{
object ( Function )
}
]
}
Fields
values[]
object ( Function )
A list of functions composing the set.
Function
Represents a function in a script project.
JSON representation
{
"name" : string ,
"parameters" : [
string
]
}
Fields
name
string
The function name in the script project.
parameters[]
string
The ordered list of parameter names of the function in the script project.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-14 UTC."],[],[]]
