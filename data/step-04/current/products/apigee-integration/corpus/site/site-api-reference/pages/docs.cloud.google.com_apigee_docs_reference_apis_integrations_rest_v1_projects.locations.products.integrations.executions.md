---
title: "REST Resource: projects.locations.products.integrations.executions \_|\_ Apigee\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.integrations.executions
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest
source_metadata:
  url: https://docs.cloud.google.com/apigee/docs/reference/apis/integrations/rest/v1/projects.locations.products.integrations.executions
  title: "REST Resource: projects.locations.products.integrations.executions \_|\_\
    \ Apigee \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Apigee
Send feedback
REST Resource: projects.locations.products.integrations.executions
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Execution
JSON representation
Methods
Resource: Execution
The Execution resource contains detailed information of an individual integration execution.
JSON representation
{
"name" : string ,
"triggerId" : string ,
"executionMethod" : enum ( ExecutionMethod ) ,
"createTime" : string ,
"updateTime" : string ,
"directSubExecutions" : [
{
object ( Execution )
}
] ,
"executionDetails" : {
object ( ExecutionDetails )
} ,
"requestParameters" : {
string : {
object ( ValueType )
} ,
...
} ,
"responseParameters" : {
string : {
object ( ValueType )
} ,
...
}
}
Fields
name
string
Auto-generated primary key.
triggerId
string
The trigger id of the integration trigger config. If both triggerId and clientId is present, the integration is executed from the start tasks provided by the matching trigger config otherwise it is executed from the default start tasks.
executionMethod
enum ( ExecutionMethod )
The ways user posts this event.
createTime
string ( Timestamp format)
Output only. Created time of the execution.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
updateTime
string ( Timestamp format)
Output only. Last modified time of the execution.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
directSubExecutions[]
object ( Execution )
Direct sub executions of the following Execution.
executionDetails
object ( ExecutionDetails )
Detailed info of this execution.
requestParameters
map (key: string, value: object ( ValueType ))
Event parameters come in as part of the request.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
responseParameters
map (key: string, value: object ( ValueType ))
Event parameters returned as part of the response.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
Methods
list
Lists the results of all the integration executions.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-28 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-28 UTC."],[],[]]
