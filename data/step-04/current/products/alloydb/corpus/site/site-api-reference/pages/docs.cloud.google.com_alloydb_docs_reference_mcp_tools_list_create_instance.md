---
title: "MCP Tools Reference: alloydb \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/create_instance
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/create_instance
  title: "MCP Tools Reference: alloydb \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
AlloyDB for PostgreSQL
Reference
Send feedback
MCP Tools Reference: alloydb
Stay organized with collections
Save and categorize content based on your preferences.
Tool: create_instance
Creates an AlloyDB instance, which is a child resource of a cluster.
Requirements
The cluster that the instance is being created in must exist and be in a READY state. You can use the list_clusters tool to list all clusters in a project.
If you're trying to create a PRIMARY instance, then the cluster must not already have a PRIMARY instance.
If you're trying to create a READ_POOL instance, then the cluster must already have a PRIMARY instance.
Usage
Call create_cluster to create a cluster if it doesn't exist.
Call create_instance to create an instance within the cluster.
This will return a long-running operation that indicates the progress of the instance creation.
You can poll the status of the operation using the get_operation tool. Generally the creation takes 5-10 minutes.
Once the long-running operation is complete, the instance will be in a READY state.
The following sample demonstrate how to use curl to invoke the create_instance MCP tool.
Curl Request
curl --location 'https://alloydb.googleapis.com/mcp' \
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
Message for creating an instance.
CreateInstanceRequest
JSON representation
{
"parent" : string ,
"instanceId" : string ,
"type" : string ,
// Union field _cpu_count can be only one of the following:
"cpuCount" : integer
// End of list of possible types for union field _cpu_count .
// Union field _machine_type can be only one of the following:
"machineType" : string
// End of list of possible types for union field _machine_type .
// Union field _readpool_node_count can be only one of the following:
"readpoolNodeCount" : integer
// End of list of possible types for union field _readpool_node_count .
// Union field _db_iam_authentication can be only one of the following:
"dbIamAuthentication" : boolean
// End of list of possible types for union field _db_iam_authentication .
}
Fields
parent
string
Required. Identifier. The parent resource in which to create the instance. The value must have a format of projects/{project}/locations/{location}/clusters/{cluster_id}. - {project} is the project that the cluster resides in. This field can be specified either as: - Project ID: An alphanumeric string that can consist of lowercase letters, numerical digits, or dash ("-") characters. - Project number: A valid base-10 encoded positive integer. - {location} is the Google Cloud region that the cluster resides in. Regions will have format like "us-central1" or "us-west2". - {cluster_id} is the ID of cluster. It should be an alphanumeric string that can consist of lowercase letters, numerical digits, or dash ("-") characters. The field is REQUIRED.
instanceId
string
Required. The instance ID is the unique user-assigned ID of the instance. It should be an alphanumeric string that can consist of lowercase letters, numerical digits, or dash characters ("-"). This field is REQUIRED.
type
string
Optional. The type of the instance. The allowed values are: - PRIMARY - An AlloyDB instance that will accept both read and write Postgres transactions. You can have only one primary instance per cluster. - READ_POOL - An AlloyDB instance that will only accept read Postgres transactions. You can have multiple read pool instances per cluster, but they can only be created after the primary instance has been created. This field is OPTIONAL. If unspecified, it will default to PRIMARY.
Union field _cpu_count .
_cpu_count can be only one of the following:
cpuCount
integer
Optional. The number of CPUs for the instance. If unspecified, it will default to 4. This field is OPTIONAL.
Union field _machine_type .
_machine_type can be only one of the following:
machineType
string
Optional. The machine type of the instance. If unspecified, it will default to n2-highmem-4. This field is OPTIONAL.
Union field _readpool_node_count .
_readpool_node_count can be only one of the following:
readpoolNodeCount
integer
Optional. The number of read pool nodes for the instance. If unspecified, it will default to 1. This field is OPTIONAL.
Union field _db_iam_authentication .
_db_iam_authentication can be only one of the following:
dbIamAuthentication
boolean
Optional. Enables DB IAM authentication for this instance. Sets the "alloydb.iam_authentication" db flag to "on"/"off". This field is OPTIONAL. If unspecified, it will default to true.
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
