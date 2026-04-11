---
title: "Method: scripts.run \_|\_ Apps Script \_|\_ Google for Developers"
url: https://developers.google.com/apps-script/api/reference/rest/v1/scripts/run
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://developers.google.com/apps-script/api/reference/rest
source_metadata:
  url: https://developers.google.com/apps-script/api/reference/rest/v1/scripts/run
  title: "Method: scripts.run \_|\_ Apps Script \_|\_ Google for Developers"
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
Method: scripts.run
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
The scripts.run method in the Apps Script API allows you to execute a function within a deployed Apps Script project.
This method requires authorization using an OAuth 2.0 token with appropriate scopes.
The HTTP request uses a POST method with the script ID as a path parameter.
The request body specifies the function name to execute and optional parameters.
The response body indicates the execution status, including success with a result or failure with an error.
HTTP request
Path parameters
Request body
JSON representation
Response body
JSON representation
Authorization Scopes
Status
JSON representation
Runs a function in an Apps Script project. The script project must be deployed for use with the Apps Script API and the calling application must share the same Cloud Platform project.
This method requires authorization with an OAuth 2.0 token that includes at least one of the scopes listed in the Authorization section; script projects that do not require authorization cannot be executed through this API. To find the correct scopes to include in the authentication token, open the script project Overview page and scroll down to "Project OAuth Scopes."
The error 403, PERMISSION_DENIED: The caller does not have permission indicates that the Cloud Platform project used to authorize the request is not the same as the one used by the script.
HTTP request
POST https://script.googleapis.com/v1/scripts/{deploymentId}:run
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
deploymentId
string
The deployment ID for the API Executable deployment. Find the deployment ID under Deploy > Manage deployments in the script editor.
Request body
The request body contains data with the following structure:
JSON representation
{
"function" : string ,
"parameters" : [
value
] ,
"sessionState" : string ,
"devMode" : boolean
}
Fields
function
string
The name of the function to execute in the given script. The name does not include parentheses or parameters. It can reference a function in an included library such as Library.libFunction1 .
parameters[]
value ( Value format)
The parameters to be passed to the function being executed. The object type for each parameter should match the expected type in Apps Script. Parameters cannot be Apps Script-specific object types (such as a Document or a Calendar ); they can only be primitive types such as string , number , array , object , or boolean . Optional.
sessionState
string
Deprecated . For use with Android add-ons only. An ID that represents the user's current session in the Android app for Google Docs or Sheets, included as extra data in the Intent that launches the add-on. When an Android add-on is run with a session state, it gains the privileges of a bound script—that is, it can access information like the user's current cursor position (in Docs) or selected cell (in Sheets). To retrieve the state, call Intent.getStringExtra("com.google.android.apps.docs.addons.SessionState") . Optional.
devMode
boolean
If true and the user is an owner of the script, the script runs at the most recently saved version rather than the version deployed for use with the Apps Script API. Optional; default is false .
Response body
If successful, the response body contains data with the following structure:
A representation of an execution of an Apps Script function started with run . The execution response does not arrive until the function finishes executing. The maximum execution runtime is listed in the Apps Script quotas guide . After execution has started, it can have one of four outcomes:
If the script function returns successfully, the response field contains an ExecutionResponse object with the function's return value in the object's result field.
If the script function (or Apps Script itself) throws an exception, the error field contains a Status object. The Status object's details field contains an array with a single ExecutionError object that provides information about the nature of the error.
If the execution has not yet completed, the done field is false and the neither the response nor error fields are present.
If the run call itself fails (for example, because of a malformed request or an authorization error), the method returns an HTTP response code in the 4XX range with a different format for the response body. Client libraries automatically convert a 4XX response into an exception class.
JSON representation
{
"done" : boolean ,
// Union field result can be only one of the following:
"error" : {
object ( Status )
} ,
"response" : {
"@type" : string ,
field1 : ... ,
...
}
// End of list of possible types for union field result .
}
Fields
done
boolean
This field indicates whether the script execution has completed. A completed execution has a populated response field containing the ExecutionResponse from function that was executed.
Union field result . The operation result, which can be either an error or a valid response . If done == false , neither error nor response is set. If done == true , exactly one of error or response may be set. Some services might not provide the result. result can be only one of the following:
error
object ( Status )
If a run call succeeds but the script function (or Apps Script itself) throws an exception, this field contains a Status object. The Status object's details field contains an array with a single ExecutionError object that provides information about the nature of the error.
response
object
If the script function returns successfully, this field contains an ExecutionResponse object with the function's return value.
An object containing fields of an arbitrary type. An additional field "@type" contains a URI identifying the type. Example: { "id": 1234, "@type": "types.example.com/standard/id" } .
Authorization Scopes
Requires one of the following OAuth scopes:
https://apps-apis.google.com/a/feeds
https://apps-apis.google.com/a/feeds/alias/
https://apps-apis.google.com/a/feeds/groups/
https://mail.google.com/
https://sites.google.com/feeds
https://www.google.com/calendar/feeds
https://www.google.com/m8/feeds
https://www.googleapis.com/auth/admin.directory.group
https://www.googleapis.com/auth/admin.directory.user
https://www.googleapis.com/auth/documents
https://www.googleapis.com/auth/documents.currentonly
https://www.googleapis.com/auth/drive
https://www.googleapis.com/auth/dynamiccreatives
https://www.googleapis.com/auth/forms
https://www.googleapis.com/auth/forms.currentonly
https://www.googleapis.com/auth/groups
https://www.googleapis.com/auth/script.cpanel
https://www.googleapis.com/auth/script.external_request
https://www.googleapis.com/auth/script.scriptapp
https://www.googleapis.com/auth/script.send_mail
https://www.googleapis.com/auth/script.storage
https://www.googleapis.com/auth/script.webapp.deploy
https://www.googleapis.com/auth/spreadsheets
https://www.googleapis.com/auth/spreadsheets.currentonly
https://www.googleapis.com/auth/sqlservice
https://www.googleapis.com/auth/userinfo.email
For more information, see the OAuth 2.0 Overview .
Status
If a run call succeeds but the script function (or Apps Script itself) throws an exception, the response body's error field contains this Status object.
JSON representation
{
"code" : integer ,
"message" : string ,
"details" : [
{
"@type" : string ,
field1 : ... ,
...
}
]
}
Fields
code
integer
The status code. For this API, this value either: 10, indicating a SCRIPT_TIMEOUT error,
3, indicating an INVALID_ARGUMENT error, or
1, indicating a CANCELLED execution.
message
string
A developer-facing error message, which is in English. Any user-facing error message is localized and sent in the details field, or localized by the client.
details[]
object
An array that contains a single ExecutionError object that provides information about the nature of the error.
An object containing fields of an arbitrary type. An additional field "@type" contains a URI identifying the type. Example: { "id": 1234, "@type": "types.example.com/standard/id" } .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-04 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-04 UTC."],[],[]]
