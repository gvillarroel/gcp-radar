---
title: "OperationMetadata \_|\_ API Gateway \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/api-gateway/docs/reference/rest/Shared.Types/OperationMetadata
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/api-gateway/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/api-gateway/docs/reference/rest/Shared.Types/OperationMetadata
  title: "OperationMetadata \_|\_ API Gateway \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
API Gateway
Reference
Send feedback
OperationMetadata
Stay organized with collections
Save and categorize content based on your preferences.
JSON representation
Diagnostic
JSON representation
Represents the metadata of the long-running operation.
JSON representation
{
"createTime" : string ,
"endTime" : string ,
"target" : string ,
"verb" : string ,
"statusMessage" : string ,
"requestedCancellation" : boolean ,
"apiVersion" : string ,
"diagnostics" : [
{
object ( Diagnostic )
}
]
}
Fields
createTime
string ( Timestamp format)
Output only. The time the operation was created.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
endTime
string ( Timestamp format)
Output only. The time the operation finished running.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
target
string
Output only. Server-defined resource path for the target of the operation.
verb
string
Output only. Name of the verb executed by the operation.
statusMessage
string
Output only. Human-readable status of the operation, if any.
requestedCancellation
boolean
Output only. Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have [Operation.error][] value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED .
apiVersion
string
Output only. API version used to start the operation.
diagnostics[]
object ( Diagnostic )
Output only. Diagnostics generated during processing of configuration source files.
Diagnostic
Diagnostic information from configuration processing.
JSON representation
{
"location" : string ,
"message" : string
}
Fields
location
string
Location of the diagnostic.
message
string
The diagnostic message.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-28 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-28 UTC."],[],[]]
