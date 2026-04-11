---
title: "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\
  \ (GKE) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_operations
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_operations
  title: "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\
    \ (GKE) \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Reference
Send feedback
MCP Tools Reference: container.googleapis.com
Stay organized with collections
Save and categorize content based on your preferences.
Tool: list_operations
Lists GKE operations in a given project and location. Location can be a region, zone, or '-' for all locations.
The following sample demonstrate how to use curl to invoke the list_operations MCP tool.
Curl Request
curl --location 'https://container.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/call",
"params": {
"name": "list_operations",
"arguments": {
// provide these details according to the tool' s MCP specification
}
} ,
"jsonrpc" : "2.0" ,
"id" : 1
} '
Input Schema
MCPListOperationsRequest lists operations.
MCPListOperationsRequest
JSON representation
{
"parent" : string
}
Fields
parent
string
Required. The parent (project and location) where the operations will be listed. Specified in the format projects/*/locations/* . Location "-" matches all zones and all regions.
Output Schema
ListOperationsResponse is the result of ListOperationsRequest.
ListOperationsResponse
JSON representation
{
"operations" : [
{
object ( Operation )
}
] ,
"missingZones" : [
string
]
}
Fields
operations[]
object ( Operation )
A list of operations in the project in the specified zone.
missingZones[]
string
If any zones are listed here, the list of operations returned may be missing the operations from those zones.
Operation
JSON representation
{
"name" : string ,
"zone" : string ,
"operationType" : enum ( Type ) ,
"status" : enum ( Status ) ,
"detail" : string ,
"statusMessage" : string ,
"selfLink" : string ,
"targetLink" : string ,
"location" : string ,
"startTime" : string ,
"endTime" : string ,
"progress" : {
object ( OperationProgress )
} ,
"clusterConditions" : [
{
object ( StatusCondition )
}
] ,
"nodepoolConditions" : [
{
object ( StatusCondition )
}
] ,
"error" : {
object ( Status )
}
}
Fields
name
string
Output only. The server-assigned ID for the operation.
zone (deprecated)
string
This item is deprecated!
Output only. The name of the Google Compute Engine zone in which the operation is taking place. This field is deprecated, use location instead.
operationType
enum ( Type )
Output only. The operation type.
status
enum ( Status )
Output only. The current status of the operation.
detail
string
Output only. Detailed operation progress, if available.
statusMessage (deprecated)
string
This item is deprecated!
Output only. If an error has occurred, a textual description of the error. Deprecated. Use the field error instead.
selfLink
string
Output only. Server-defined URI for the operation. Example: https://container.googleapis.com/v1alpha1/projects/123/locations/us-central1/operations/operation-123 .
targetLink
string
Output only. Server-defined URI for the target of the operation. The format of this is a URI to the resource being modified (such as a cluster, node pool, or node). For node pool repairs, there may be multiple nodes being repaired, but only one will be the target.
Examples:
-
https://container.googleapis.com/v1/projects/123/zones/us-central1-c/clusters/my-cluster/nodePools/my-np/node/my-node
location
string
Output only. The name of the Google Compute Engine zone or region in which the cluster resides.
startTime
string
Output only. The time the operation started, in RFC3339 text format.
endTime
string
Output only. The time the operation completed, in RFC3339 text format.
progress
object ( OperationProgress )
Output only. Progress information for an operation.
clusterConditions[] (deprecated)
object ( StatusCondition )
This item is deprecated!
Which conditions caused the current cluster state. Deprecated. Use field error instead.
nodepoolConditions[] (deprecated)
object ( StatusCondition )
This item is deprecated!
Which conditions caused the current node pool state. Deprecated. Use field error instead.
error
object ( Status )
The error result of the operation in case of failure.
OperationProgress
JSON representation
{
"name" : string ,
"status" : enum ( Status ) ,
"metrics" : [
{
object ( Metric )
}
] ,
"stages" : [
{
object ( OperationProgress )
}
]
}
Fields
name
string
A non-parameterized string describing an operation stage. Unset for single-stage operations.
status
enum ( Status )
Status of an operation stage. Unset for single-stage operations.
metrics[]
object ( Metric )
Progress metric bundle, for example: metrics: [{name: "nodes done", int_value: 15}, {name: "nodes total", int_value: 32}] or metrics: [{name: "progress", double_value: 0.56}, {name: "progress scale", double_value: 1.0}]
stages[]
object ( OperationProgress )
Substages of an operation or a stage.
Metric
JSON representation
{
"name" : string ,
// Union field value can be only one of the following:
"intValue" : string ,
"doubleValue" : number ,
"stringValue" : string
// End of list of possible types for union field value .
}
Fields
name
string
Required. Metric name, e.g., "nodes total", "percent done".
Union field value . Strictly one of the values is required. value can be only one of the following:
intValue
string ( int64 format)
For metrics with integer value.
doubleValue
number
For metrics with floating point value.
stringValue
string
For metrics with custom values (ratios, visual progress, etc.).
StatusCondition
JSON representation
{
"code" : enum ( Code ) ,
"message" : string ,
"canonicalCode" : enum ( google.rpc.Code )
}
Fields
code (deprecated)
enum ( Code )
This item is deprecated!
Machine-friendly representation of the condition Deprecated. Use canonical_code instead.
message
string
Human-friendly representation of the condition
canonicalCode
enum ( google.rpc.Code )
Canonical code of the condition.
Status
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
An object containing fields of an arbitrary type. An additional field "@type" contains a URI identifying the type. Example: { "id": 1234, "@type": "types.example.com/standard/id" } .
Any
JSON representation
{
"typeUrl" : string ,
"value" : string
}
Fields
typeUrl
string
Identifies the type of the serialized Protobuf message with a URI reference consisting of a prefix ending in a slash and the fully-qualified type name.
Example: type.googleapis.com/google.protobuf.StringValue
This string must contain at least one / character, and the content after the last / must be the fully-qualified name of the type in canonical form, without a leading dot. Do not write a scheme on these URI references so that clients do not attempt to contact them.
The prefix is arbitrary and Protobuf implementations are expected to simply strip off everything up to and including the last / to identify the type. type.googleapis.com/ is a common default prefix that some legacy implementations require. This prefix does not indicate the origin of the type, and URIs containing it are not expected to respond to any requests.
All type URL strings must be legal URI references with the additional restriction (for the text format) that the content of the reference must consist only of alphanumeric characters, percent-encoded escapes, and characters in the following set (not including the outer backticks): /-.~_!$&()*+,;= . Despite our allowing percent encodings, implementations should not unescape them to prevent confusion with existing parsers. For example, type.googleapis.com%2FFoo should be rejected.
In the original design of Any , the possibility of launching a type resolution service at these type URLs was considered but Protobuf never implemented one and considers contacting these URLs to be problematic and a potential security issue. Do not attempt to contact type URLs.
value
string ( bytes format)
Holds a Protobuf serialization of the type described by type_url.
A base64-encoded string.
Tool Annotations
Destructive Hint: ❌ | Idempotent Hint: ✅ | Read Only Hint: ✅ | Open World Hint: ❌
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-10 UTC."],[],[]]
