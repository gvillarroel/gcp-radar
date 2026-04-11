---
title: "ExecutionError \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/api/reference/rest/v1/ExecutionError
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/apps-script/api/reference/rest
source_metadata:
  url: https://developers.google.com/apps-script/api/reference/rest/v1/ExecutionError
  title: "ExecutionError \_|\_ Apps Script \_|\_ Google for Developers"
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
ExecutionError
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Provides information about errors when executing a script function using the Apps Script API.
An ExecutionError object is found in the details field of a Status object within the response body's error field if a script throws an exception.
Includes fields like scriptStackTraceElements , errorMessage , and errorType to detail the error.
ScriptStackTraceElement objects within the stack trace provide the function name and line number where the script failed.
JSON representation
ScriptStackTraceElement
JSON representation
An object that provides information about the nature of an error resulting from an attempted execution of a script function using the Apps Script API. If a run call succeeds but the script function (or Apps Script itself) throws an exception, the response body's error field contains a Status object. The Status object's details field contains an array with a single one of these ExecutionError objects.
JSON representation
{
"scriptStackTraceElements" : [
{
object ( ScriptStackTraceElement )
}
] ,
"errorMessage" : string ,
"errorType" : string
}
Fields
scriptStackTraceElements[]
object ( ScriptStackTraceElement )
An array of objects that provide a stack trace through the script to show where the execution failed, with the deepest call first.
errorMessage
string
The error message thrown by Apps Script, usually localized into the user's language.
errorType
string
The error type, for example TypeError or ReferenceError . If the error type is unavailable, this field is not included.
ScriptStackTraceElement
A stack trace through the script that shows where the execution failed.
JSON representation
{
"function" : string ,
"lineNumber" : integer
}
Fields
function
string
The name of the function that failed.
lineNumber
integer
The line number where the script failed.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-10-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-10-31 UTC."],[],[]]
