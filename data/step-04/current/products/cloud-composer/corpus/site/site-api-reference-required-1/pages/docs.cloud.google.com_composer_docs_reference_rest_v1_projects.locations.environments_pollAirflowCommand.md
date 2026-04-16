---
title: "Method: projects.locations.environments.pollAirflowCommand \_|\_ Cloud Composer\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/pollAirflowCommand
knowledge_key: corpus
source_id: site-api-reference-required-1
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments/pollAirflowCommand
  title: "Method: projects.locations.environments.pollAirflowCommand \_|\_ Cloud Composer\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

On September 15, 2026 , all Cloud Composer 1 versions and versions 2.0.x of Cloud Composer 2 will reach their planned end of life . You will not be able to use environments with these versions. We recommend planning migration to Cloud Composer 3 . Cloud Composer 2 versions 2.1.x and later are still supported and are not impacted by this change.
Home
Documentation
Data analytics
Cloud Composer
Reference
Send feedback
Method: projects.locations.environments.pollAirflowCommand
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
JSON representation
Response body
JSON representation
Authorization scopes
Line
JSON representation
ExitInfo
JSON representation
Try it!
Polls Airflow CLI command execution and fetches logs.
HTTP request
POST https://composer.googleapis.com/v1/{environment=projects/*/locations/*/environments/*}:pollAirflowCommand
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
environment
string
The resource name of the environment in the form: "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
Authorization requires the following IAM permission on the specified resource environment :
composer.environments.executeAirflowCommand
Request body
The request body contains data with the following structure:
JSON representation
{
"executionId" : string ,
"pod" : string ,
"podNamespace" : string ,
"nextLineNumber" : integer
}
Fields
executionId
string
The unique ID of the command execution.
pod
string
The name of the pod where the command is executed.
podNamespace
string
The namespace of the pod where the command is executed.
nextLineNumber
integer
Line number from which new logs should be fetched.
Response body
Response to PollAirflowCommandRequest.
If successful, the response body contains data with the following structure:
JSON representation
{
"output" : [
{
object ( Line )
}
] ,
"outputEnd" : boolean ,
"exitInfo" : {
object ( ExitInfo )
}
}
Fields
output[]
object ( Line )
Output from the command execution. It may not contain the full output and the caller may need to poll for more lines.
outputEnd
boolean
Whether the command execution has finished and there is no more output.
exitInfo
object ( ExitInfo )
The result exit status of the command.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloudcomposer
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Line
Contains information about a single line from logs.
JSON representation
{
"lineNumber" : integer ,
"content" : string
}
Fields
lineNumber
integer
Number of the line.
content
string
Text content of the log line.
ExitInfo
Information about how a command ended.
JSON representation
{
"exitCode" : integer ,
"error" : string
}
Fields
exitCode
integer
The exit code from the command execution.
error
string
Error message. Empty if there was no error.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-18 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-18 UTC."],[],[]]
