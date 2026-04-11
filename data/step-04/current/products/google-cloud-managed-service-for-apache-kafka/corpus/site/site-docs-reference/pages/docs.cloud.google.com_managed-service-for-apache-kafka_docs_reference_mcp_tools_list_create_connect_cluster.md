---
title: "MCP Tools Reference: managedkafka \_|\_ Google Cloud Managed Service for Apache\
  \ Kafka \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp/tools_list/create_connect_cluster
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/managed-service-for-apache-kafka/docs/reference/mcp/tools_list/create_connect_cluster
  title: "MCP Tools Reference: managedkafka \_|\_ Google Cloud Managed Service for\
    \ Apache Kafka \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Google Cloud Managed Service for Apache Kafka
Reference
Send feedback
MCP Tools Reference: managedkafka
Stay organized with collections
Save and categorize content based on your preferences.
Tool: create_connect_cluster
Create a new Google Cloud Managed Service for Apache Kafka Connect cluster. To create a Connect cluster, the following parameters are required:
Project ID: The ID of the Google Cloud project (e.g., my-project ).
Location: The Google Cloud region for the Connect cluster (e.g., us-central1 ).
Connect Cluster ID: A unique identifier for your Connect cluster (e.g., my-connect-cluster ). The ID must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? .
You must also specify the connect_cluster configuration, including:
kafka_cluster (required): The full resource name of the Managed Service for Kafka cluster this Connect cluster will attach to. This field is immutable after creation. Format: projects/{project}/locations/{location}/clusters/{cluster} .
capacity_config (required):
vCPU Count: The number of vCPUs to provision for the Connect cluster workers (minimum 3). Please note that the vCPU count must be a string.
Memory Bytes: The memory to provision for the Connect cluster workers in bytes (minimum 3 GiB, and the CPU:memory ratio must be between 1:1 and 1:8).
gcp_config (required): Platform-specific configurations for Google Cloud.
access_config (required): Network access configuration.
network_configs (required): A list of VPC networks. Minimum 1, maximum 10.
primary_subnet (required): The VPC subnet for the Kafka Connect workers. This must be a full resource path in the format projects/{project}/regions/{region}/subnetworks/{subnet_id} . The subnet must be in the same region as the Connect cluster. The CIDR range must be within RFC 1918 and have a minimum size of /22.
dns_domain_names (optional): Additional DNS domain names from the subnet's network to be made visible to the Connect Cluster.
secret_paths (optional): A list of Secret Manager SecretVersion resource names to load into workers. Up to 32 secrets are allowed. Format: projects/<project-id>/secrets/<secret-name>/versions/<version-id> .
config (optional): Key-value pairs for Kafka Connect worker configuration overrides.
labels (optional): Key-value pairs to help you organize your Connect clusters.
This tool returns a long-running operation (LRO) that you can poll using the get_operation tool to track the Connect cluster creation status. Connect cluster creation can take 20 minutes or longer.
Important Notes:
The CreateConnectClusterRequest must include kafka_cluster , capacity_config , and gcp_config parameters.
Do not create the connect cluster without getting all of the required parameters first.
The following sample demonstrate how to use curl to invoke the create_connect_cluster MCP tool.
Curl Request
curl --location 'https://managedkafka.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/call",
"params": {
"name": "create_connect_cluster",
"arguments": {
// provide these details according to the tool' s MCP specification
}
} ,
"jsonrpc" : "2.0" ,
"id" : 1
} '
Input Schema
Request for CreateConnectCluster.
CreateConnectClusterRequest
JSON representation
{
"parent" : string ,
"connectClusterId" : string ,
"connectCluster" : {
object ( ConnectCluster )
} ,
"requestId" : string
}
Fields
parent
string
Required. The parent project/location in which to create the Kafka Connect cluster. Structured like projects/{project}/locations/{location}/ .
connectClusterId
string
Required. The ID to use for the Connect cluster, which will become the final component of the cluster's name. The ID must be 1-63 characters long, and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])? to comply with RFC 1035.
This value is structured like: my-cluster-id .
connectCluster
object ( ConnectCluster )
Required. Configuration of the Kafka Connect cluster to create. Its name field is ignored.
requestId
string
Optional. An optional request ID to identify requests. Specify a unique request ID to avoid duplication of requests. If a request times out or fails, retrying with the same ID allows the server to recognize the previous attempt. For at least 60 minutes, the server ignores duplicate requests bearing the same ID.
For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID within 60 minutes of the last request, the server checks if an original operation with the same request ID was received. If so, the server ignores the second request.
The request ID must be a valid UUID. A zero UUID is not supported (00000000-0000-0000-0000-000000000000).
ConnectCluster
JSON representation
{
"name" : string ,
"kafkaCluster" : string ,
"createTime" : string ,
"updateTime" : string ,
"labels" : {
string : string ,
...
} ,
"capacityConfig" : {
object ( CapacityConfig )
} ,
"state" : enum ( State ) ,
"config" : {
string : string ,
...
} ,
// Union field platform_config can be only one of the following:
"gcpConfig" : {
object ( ConnectGcpConfig )
}
// End of list of possible types for union field platform_config .
// Union field _satisfies_pzi can be only one of the following:
"satisfiesPzi" : boolean
// End of list of possible types for union field _satisfies_pzi .
// Union field _satisfies_pzs can be only one of the following:
"satisfiesPzs" : boolean
// End of list of possible types for union field _satisfies_pzs .
}
Fields
name
string
Identifier. The name of the Kafka Connect cluster. Structured like: projects/{project_number}/locations/{location}/connectClusters/{connect_cluster_id}
kafkaCluster
string
Required. Immutable. The name of the Kafka cluster this Kafka Connect cluster is attached to. Structured like: projects/{project}/locations/{location}/clusters/{cluster}
createTime
string ( Timestamp format)
Output only. The time when the cluster was created.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
updateTime
string ( Timestamp format)
Output only. The time when the cluster was last updated.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
labels
map (key: string, value: string)
Optional. Labels as key value pairs.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
capacityConfig
object ( CapacityConfig )
Required. Capacity configuration for the Kafka Connect cluster.
state
enum ( State )
Output only. The current state of the Kafka Connect cluster.
config
map (key: string, value: string)
Optional. Configurations for the worker that are overridden from the defaults. The key of the map is a Kafka Connect worker property name, for example: exactly.once.source.support .
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
Union field platform_config . Platform specific configuration properties for a Kafka Connect cluster. platform_config can be only one of the following:
gcpConfig
object ( ConnectGcpConfig )
Required. Configuration properties for a Kafka Connect cluster deployed to Google Cloud Platform.
Union field _satisfies_pzi .
_satisfies_pzi can be only one of the following:
satisfiesPzi
boolean
Output only. Reserved for future use.
Union field _satisfies_pzs .
_satisfies_pzs can be only one of the following:
satisfiesPzs
boolean
Output only. Reserved for future use.
ConnectGcpConfig
JSON representation
{
"accessConfig" : {
object ( ConnectAccessConfig )
} ,
"secretPaths" : [
string
]
}
Fields
accessConfig
object ( ConnectAccessConfig )
Required. Access configuration for the Kafka Connect cluster.
secretPaths[]
string
Optional. Secrets to load into workers. Exact SecretVersions from Secret Manager must be provided -- aliases are not supported. Up to 32 secrets may be loaded into one cluster. Format: projects/ /secrets/ /versions/
ConnectAccessConfig
JSON representation
{
"networkConfigs" : [
{
object ( ConnectNetworkConfig )
}
]
}
Fields
networkConfigs[]
object ( ConnectNetworkConfig )
Required. Virtual Private Cloud (VPC) networks that must be granted direct access to the Kafka Connect cluster. Minimum of 1 network is required. Maximum 10 networks can be specified.
ConnectNetworkConfig
JSON representation
{
"primarySubnet" : string ,
"additionalSubnets" : [
string
] ,
"dnsDomainNames" : [
string
]
}
Fields
primarySubnet
string
Required. VPC subnet to make available to the Kafka Connect cluster. Structured like: projects/{project}/regions/{region}/subnetworks/{subnet_id}
It is used to create a Private Service Connect (PSC) interface for the Kafka Connect workers. It must be located in the same region as the Kafka Connect cluster.
The CIDR range of the subnet must be within the IPv4 address ranges for private networks, as specified in RFC 1918. The primary subnet CIDR range must have a minimum size of /22 (1024 addresses).
additionalSubnets[] (deprecated)
string
This item is deprecated!
Optional. Deprecated: Managed Kafka Connect clusters can now reach any endpoint accessible from the primary subnet without the need to define additional subnets. Please see https://cloud.google.com/managed-service-for-apache-kafka/docs/connect-cluster/create-connect-cluster#worker-subnet for more information.
dnsDomainNames[]
string
Optional. Additional DNS domain names from the subnet's network to be made visible to the Connect Cluster. When using MirrorMaker2, it's necessary to add the bootstrap address's dns domain name of the target cluster to make it visible to the connector. For example: my-kafka-cluster.us-central1.managedkafka.my-project.cloud.goog
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
CapacityConfig
JSON representation
{
"vcpuCount" : string ,
"memoryBytes" : string
}
Fields
vcpuCount
string ( int64 format)
Required. The number of vCPUs to provision for the cluster. Minimum: 3.
memoryBytes
string ( int64 format)
Required. The memory to provision for the cluster in bytes. The CPU:memory ratio (vCPU:GiB) must be between 1:1 and 1:8. Minimum: 3221225472 (3 GiB).
ConfigEntry
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
Destructive Hint: ❌ | Idempotent Hint: ❌ | Read Only Hint: ❌ | Open World Hint: ❌
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-03 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-03 UTC."],[],[]]
