---
title: "MCP Tools Reference: bigtableadmin.googleapis.com \_|\_ Bigtable \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/create_instance
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/bigtable/docs
source_metadata:
  url: https://docs.cloud.google.com/bigtable/docs/reference/admin/mcp/tools_list/create_instance
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
Tool: create_instance
Create a new instance in the specified project. The request requires project_id, instance_id, display_name, and at least one cluster. Each cluster must specify its zone (e.g. us-central1-a). Example: { "project_id": "my-project", "instance_id": "my-instance", "display_name": "This is my instance", "clusters": [ { "zone": "us-central1-a", "serve_nodes": 3, "default_storage_type": "SSD" } ] }
The following sample demonstrate how to use curl to invoke the create_instance MCP tool.
Curl Request
curl --location 'https://bigtableadmin.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/call",
"params": {
"name": "create_instance",
"arguments": {
// provide these details according to the tool' s MCP specification
}
} ,
"jsonrpc" : "2.0" ,
"id" : 1
} '
Input Schema
Request message for Bigtable.CreateInstance
CreateInstanceRequest
JSON representation
{
"projectId" : string ,
"instanceId" : string ,
"displayName" : string ,
"clusters" : [
{
object ( Cluster )
}
]
}
Fields
projectId
string
Required. The project ID (e.g., "my-project"). If not known from the context, the Agent should attempt to get the current project ID from the gcloud config by running gcloud config get-value project . If the attempt fails, prompt the user for the project ID.
instanceId
string
Required. The ID to be used when referring to the new instance within its project, e.g., just myinstance rather than projects/myproject/instances/myinstance .
displayName
string
Required. The descriptive name for this instance as it appears in UIs.
clusters[]
object ( Cluster )
Required. Clusters to be created within the instance. At least one cluster must be specified.
Cluster
JSON representation
{
"clusterId" : string ,
"zone" : string ,
"serveNodesCount" : integer ,
"defaultStorageType" : enum ( StorageType )
}
Fields
clusterId
string
Optional. The ID of the cluster, e.g., just mycluster rather than projects/myproject/instances/myinstance/clusters/mycluster . The tool mapping will provide a default if this is not specified (e.g., {instance_id}-c{index} ).
zone
string
Required. The zone where the cluster will be located. e.g., us-central1-a .
serveNodesCount
integer
Optional. The number of nodes to serve. If not specified, the tool mapping will default to 1.
defaultStorageType
enum ( StorageType )
Optional. The default storage type for the cluster, e.g., SSD, HDD. If not specified, the tool mapping will default to SSD.
Output Schema
This resource represents a long-running operation that is the result of a network API call.
Operation
JSON representation
{
"name" : string ,
"metadata" : {
"@type" : string ,
field1 : ... ,
...
} ,
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
name
string
The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should be a resource name ending with operations/{unique_id} .
metadata
object
Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
An object containing fields of an arbitrary type. An additional field "@type" contains a URI identifying the type. Example: { "id": 1234, "@type": "types.example.com/standard/id" } .
done
boolean
If the value is false , it means the operation is still in progress. If true , the operation is completed, and either error or response is available.
Union field result . The operation result, which can be either an error or a valid response . If done == false , neither error nor response is set. If done == true , exactly one of error or response can be set. Some services might not provide the result. result can be only one of the following:
error
object ( Status )
The error result of the operation in case of failure or cancellation.
response
object
The normal, successful response of the operation. If the original method returns no data on success, such as Delete , the response is google.protobuf.Empty . If the original method is standard Get / Create / Update , the response should be the resource. For other methods, the response should have the type XxxResponse , where Xxx is the original method name. For example, if the original method name is TakeSnapshot() , the inferred response type is TakeSnapshotResponse .
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
A URL/resource name that uniquely identifies the type of the serialized protocol buffer message. This string must contain at least one "/" character. The last segment of the URL's path must represent the fully qualified name of the type (as in path/google.protobuf.Duration ). The name should be in a canonical form (e.g., leading "." is not accepted).
In practice, teams usually precompile into the binary all types that they expect it to use in the context of Any. However, for URLs which use the scheme http , https , or no scheme, one can optionally set up a type server that maps type URLs to message definitions as follows:
If no scheme is provided, https is assumed.
An HTTP GET on the URL must yield a google.protobuf.Type value in binary format, or produce an error.
Applications are allowed to cache lookup results based on the URL, or have them precompiled into a binary to avoid any lookup. Therefore, binary compatibility needs to be preserved on changes to types. (Use versioned type names to manage breaking changes.)
Note: this functionality is not currently available in the official protobuf release, and it is not used for type URLs beginning with type.googleapis.com. As of May 2023, there are no widely used type server implementations and no plans to implement one.
Schemes other than http , https (or the empty scheme) might be used with implementation specific semantics.
value
string ( bytes format)
Must be a valid serialized protocol buffer of the above specified type.
A base64-encoded string.
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
Tool Annotations
Destructive Hint: ❌ | Idempotent Hint: ✅ | Read Only Hint: ❌ | Open World Hint: ✅
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-17 UTC."],[],[]]
