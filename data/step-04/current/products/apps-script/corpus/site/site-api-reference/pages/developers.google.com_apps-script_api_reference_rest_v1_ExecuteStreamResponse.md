---
title: "ExecuteStreamResponse \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/api/reference/rest/v1/ExecuteStreamResponse
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/apps-script/api/reference/rest
source_metadata:
  url: https://developers.google.com/apps-script/api/reference/rest/v1/ExecuteStreamResponse
  title: "ExecuteStreamResponse \_|\_ Apps Script \_|\_ Google for Developers"
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
ExecuteStreamResponse
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
ExecuteStreamResponse is the response for executing or debugging a function in an Apps Script project, containing an update field that holds the execution result.
ScriptExecutionResult represents the outcome of an execution, with a result field containing the returned value.
Value is a dynamically typed value representing the outcome of an executed script, supporting various types including null, number, string, boolean, struct, list, date, proto, and bytes.
Struct represents structured data with fields mapping to dynamically typed values.
ListValue is a wrapper around a repeated field of dynamically typed values.
JSON representation
ScriptExecutionResult
JSON representation
Value
JSON representation
Struct
JSON representation
ListValue
JSON representation
The response for executing or debugging a function in an Apps Script project.
JSON representation
{
// Union field update can be only one of the following:
"result" : {
object ( ScriptExecutionResult )
}
// End of list of possible types for union field update .
}
Fields
Union field update . Update from the server with pertinent data about your execution. update can be only one of the following:
result
object ( ScriptExecutionResult )
The result of the execution.
ScriptExecutionResult
The result of an execution.
JSON representation
{
// Union field result can be only one of the following:
"returnValue" : {
object ( Value )
}
// End of list of possible types for union field result .
}
Fields
Union field result . The result of the execution. result can be only one of the following:
returnValue
object ( Value )
The returned value of the execution.
Value
Value represents a dynamically typed value which is the outcome of an executed script.
JSON representation
{
// Union field kind can be only one of the following:
"nullValue" : enum ( NullValue ) ,
"numberValue" : number ,
"stringValue" : string ,
"boolValue" : boolean ,
"structValue" : {
object ( Struct )
} ,
"listValue" : {
object ( ListValue )
} ,
"dateValue" : string ,
"protoValue" : {
"@type" : string ,
field1 : ... ,
...
} ,
"bytesValue" : string
// End of list of possible types for union field kind .
}
Fields
Union field kind . The kind of value. kind can be only one of the following:
nullValue
enum ( NullValue )
Represents a null value.
numberValue
number
Represents a double value.
stringValue
string
Represents a string value.
boolValue
boolean
Represents a boolean value.
structValue
object ( Struct )
Represents a structured value.
listValue
object ( ListValue )
Represents a repeated Value .
dateValue
string ( int64 format)
Represents a date in ms since the epoch.
protoValue
object
Represents a structured proto value.
An object containing fields of an arbitrary type. An additional field "@type" contains a URI identifying the type. Example: { "id": 1234, "@type": "types.example.com/standard/id" } .
bytesValue
string ( bytes format)
Represents raw byte values.
A base64-encoded string.
Struct
Struct represents a structured data value, consisting of fields which map to dynamically typed values.
JSON representation
{
"fields" : {
string : {
object ( Value )
} ,
...
}
}
Fields
fields
map (key: string, value: object ( Value ))
Unordered map of dynamically typed values.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
ListValue
ListValue is a wrapper around a repeated field of values.
JSON representation
{
"values" : [
{
object ( Value )
}
]
}
Fields
values[]
object ( Value )
Repeated field of dynamically typed values.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2024-10-31 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2024-10-31 UTC."],[],[]]
