---
title: "ChatAppLogEntry \_|\_ Google Chat \_|\_ Google for Developers"
url: https://developers.google.com/workspace/chat/api/reference/rest/v1/ChatAppLogEntry
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://developers.google.com/workspace/chat/api/reference
source_metadata:
  url: https://developers.google.com/workspace/chat/api/reference/rest/v1/ChatAppLogEntry
  title: "ChatAppLogEntry \_|\_ Google Chat \_|\_ Google for Developers"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Google Workspace
Google Chat
Reference
Send feedback
ChatAppLogEntry
Stay organized with collections
Save and categorize content based on your preferences.
Page Summary
outlined_flag
Chat app error messages are logged to Google Cloud Logging if the API is enabled, providing details on the deployment, error, and function involved.
Error messages utilize a standardized Status format, including an error code, message, and optional details for comprehensive debugging.
The Status format aligns with gRPC and Google API Design Guide principles for consistent error handling across different programming environments.
JSON representation
Status
JSON representation
JSON payload of error messages. If the Cloud Logging API is enabled, these error messages are logged to Google Cloud Logging .
JSON representation
{
"deployment" : string ,
"error" : {
object ( Status )
} ,
"deploymentFunction" : string
}
Fields
deployment
string
The deployment that caused the error. For Chat apps built in Apps Script, this is the deployment ID defined by Apps Script.
error
object ( Status )
The error code and message.
deploymentFunction
string
The unencrypted callback_method name that was running when the error was encountered.
Status
The Status type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC . Each Status message contains three pieces of data: error code, error message, and error details.
You can find out more about this error model and how to work with it in the API Design Guide .
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
The status code, which should be an enum value of google.rpc.Code .
message
string
A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
details[]
object
A list of messages that carry the error details. There is a common set of message types for APIs to use.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-02-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-02-27 UTC."],[],["Error messages are logged to Google Cloud Logging when the Cloud Logging API is enabled. Errors are represented in JSON with a deployment string, an error object (containing code, message, and details), and the deployment function name. The `Status` type defines the error model, including an integer `code`, a string `message`, and an array `details` for additional context. The `code` indicates the type of error, while the `message` provides a developer-facing explanation. The details array provides context about the error.\n"]]
