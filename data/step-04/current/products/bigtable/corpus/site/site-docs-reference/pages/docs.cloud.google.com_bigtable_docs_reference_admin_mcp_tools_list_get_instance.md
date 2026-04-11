---
title: "MCP Tools Reference: bigtableadmin.googleapis.com \_|\_ Bigtable \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/get_instance
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/bigtable/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/get_instance
  title: "MCP Tools Reference: bigtableadmin.googleapis.com \_|\_ Bigtable \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
Bigtable
Reference
Send feedback
MCP Tools Reference: bigtableadmin.googleapis.com
Stay organized with collections
Save and categorize content based on your preferences.
Tool: get_instance
Get information about an instance. The request requires the 'name' field to be set in the format 'projects/{project}/instances/{instance}'. Example: { "name": "projects/my-project/instances/my-instance" }
The following sample demonstrate how to use curl to invoke the get_instance MCP tool.
Curl Request
curl --location 'https://bigtableadmin.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/call",
"params": {
"name": "get_instance",
"arguments": {
// provide these details according to the tool' s MCP specification
}
} ,
"jsonrpc" : "2.0" ,
"id" : 1
} '
Input Schema
Request message for BigtableInstanceAdmin.GetInstance.
GetInstanceRequest
JSON representation
{
"name" : string
}
Fields
name
string
Required. The unique name of the requested instance. Values are of the form projects/{project}/instances/{instance} .
Output Schema
A collection of Bigtable Tables and the resources that serve them. All tables in an instance are served from all Clusters in the instance.
Instance
JSON representation
{
"name" : string ,
"displayName" : string ,
"state" : enum ( State ) ,
"type" : enum ( Type ) ,
"labels" : {
string : string ,
...
} ,
"createTime" : string ,
"tags" : {
string : string ,
...
} ,
// Union field _satisfies_pzs can be only one of the following:
"satisfiesPzs" : boolean
// End of list of possible types for union field _satisfies_pzs .
// Union field _satisfies_pzi can be only one of the following:
"satisfiesPzi" : boolean
// End of list of possible types for union field _satisfies_pzi .
}
Fields
name
string
The unique name of the instance. Values are of the form projects/{project}/instances/[a-z][a-z0-9\\-]+[a-z0-9] .
displayName
string
Required. The descriptive name for this instance as it appears in UIs. Can be changed at any time, but should be kept globally unique to avoid confusion.
state
enum ( State )
Output only. The current state of the instance.
type
enum ( Type )
The type of the instance. Defaults to PRODUCTION .
labels
map (key: string, value: string)
Labels are a flexible and lightweight mechanism for organizing cloud resources into groups that reflect a customer's organizational needs and deployment strategies. They can be used to filter resources and aggregate metrics.
Label keys must be between 1 and 63 characters long and must conform to the regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62} .
Label values must be between 0 and 63 characters long and must conform to the regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63} .
No more than 64 labels can be associated with a given resource.
Keys and values must both be under 128 bytes.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
createTime
string ( Timestamp format)
Output only. A commit timestamp representing when this Instance was created. For instances created before this field was added (August 2021), this value is seconds: 0, nanos: 1 .
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
tags
map (key: string, value: string)
Optional. Input only. Immutable. Tag keys/values directly bound to this resource. For example: - "123/environment": "production", - "123/costCenter": "marketing"
Tags and Labels (above) are both used to bind metadata to resources, with different use-cases. See https://cloud.google.com/resource-manager/docs/tags/tags-overview for an in-depth overview on the difference between tags and labels.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
Union field _satisfies_pzs .
_satisfies_pzs can be only one of the following:
satisfiesPzs
boolean
Output only. Reserved for future use.
Union field _satisfies_pzi .
_satisfies_pzi can be only one of the following:
satisfiesPzi
boolean
Output only. Reserved for future use.
LabelsEntry
JSON representation
{
"key" : string ,
"value" : string
}
Fields
key
string
value
string
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
TagsEntry
JSON representation
{
"key" : string ,
"value" : string
}
Fields
key
string
value
string
Tool Annotations
Destructive Hint: ❌ | Idempotent Hint: ❌ | Read Only Hint: ✅ | Open World Hint: ✅
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-17 UTC."],[],[]]
