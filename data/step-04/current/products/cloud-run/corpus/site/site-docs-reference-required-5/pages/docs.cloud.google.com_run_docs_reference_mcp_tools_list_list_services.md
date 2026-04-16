---
title: "MCP Tools Reference: run.googleapis.com \_|\_ Cloud Run \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/run/docs/reference/mcp/tools_list/list_services
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://docs.cloud.google.com/run/docs/reference/about-api-versions
source_metadata:
  url: https://docs.cloud.google.com/run/docs/reference/mcp/tools_list/list_services
  title: "MCP Tools Reference: run.googleapis.com \_|\_ Cloud Run \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Cloud Run
Reference
Send feedback
MCP Tools Reference: run.googleapis.com
Stay organized with collections
Save and categorize content based on your preferences.
Tool: list_services
List Cloud Run services in a given Google Cloud project and region.
The following sample demonstrate how to use curl to invoke the list_services MCP tool.
Curl Request
curl --location 'https://run.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/call",
"params": {
"name": "list_services",
"arguments": {
// provide these details according to the tool' s MCP specification
}
} ,
"jsonrpc" : "2.0" ,
"id" : 1
} '
Input Schema
Request message for retrieving a list of Services.
ListServicesRequest
JSON representation
{
"project" : string ,
"region" : string
}
Fields
project
string
Required. The project ID or project number to list the Services from.
region
string
Required. The region to list the Services from.
Output Schema
Response message containing a list of Services.
ListServicesResponse
JSON representation
{
"project" : string ,
"services" : [
{
object ( ServiceListOutput )
}
]
}
Fields
project
string
The project where the Services are listed from.
services[]
object ( ServiceListOutput )
The resulting list of Services.
ServiceListOutput
JSON representation
{
"name" : string ,
"createTime" : string ,
"updateTime" : string ,
"creator" : string ,
"lastModifier" : string ,
"uri" : string
}
Fields
name
string
The fully qualified name of this Service.
Format: projects/{project}/locations/{location}/services/{service_id}
createTime
string ( Timestamp format)
The creation time.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
updateTime
string ( Timestamp format)
The last-modified time.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
creator
string
Email address of the creator.
lastModifier
string
Email address of the last modifier.
uri
string
The main URI in which this Service is serving traffic.
Timestamp
JSON representation
{
"seconds" : string ,
"nanos" : integer
}
Fields
seconds
string ( int64 format)
Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z. Must be between -62135596800 and 253402300799 inclusive (which corresponds to 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z).
nanos
integer
Non-negative fractions of a second at nanosecond resolution. This field is the nanosecond portion of the duration, not an alternative to seconds. Negative second values with fractions must still have non-negative nanos values that count forward in time. Must be between 0 and 999,999,999 inclusive.
Tool Annotations
Destructive Hint: ❌ | Idempotent Hint: ❌ | Read Only Hint: ✅ | Open World Hint: ❌
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-01 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-01 UTC."],[],[]]
