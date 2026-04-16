---
title: "MCP Tools Reference: alloydb \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance
knowledge_key: corpus
source_id: site-api-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs/reference/ai/hybrid-search-function-parameters
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/reference/mcp/tools_list/get_instance
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
Tool: get_instance
Get an instance
The following sample demonstrate how to use curl to invoke the get_instance MCP tool.
Curl Request
curl --location 'https://alloydb.googleapis.com/mcp' \
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
Message for getting a Instance
GetInstanceRequest
JSON representation
{
"name" : string ,
"view" : enum ( InstanceView )
}
Fields
name
string
Required. The name of the resource. For the required format, see the comment on the Instance.name field.
view
enum ( InstanceView )
The view of the instance to return.
Output Schema
An Instance is a computing unit that an end customer can connect to. It's the main unit of computing resources in AlloyDB.
Instance
JSON representation
{
"name" : string ,
"displayName" : string ,
"uid" : string ,
"createTime" : string ,
"updateTime" : string ,
"deleteTime" : string ,
"labels" : {
string : string ,
...
} ,
"state" : enum ( State ) ,
"instanceType" : enum ( InstanceType ) ,
"machineConfig" : {
object ( MachineConfig )
} ,
"availabilityType" : enum ( AvailabilityType ) ,
"gceZone" : string ,
"databaseFlags" : {
string : string ,
...
} ,
"writableNode" : {
object ( Node )
} ,
"nodes" : [
{
object ( Node )
}
] ,
"queryInsightsConfig" : {
object ( QueryInsightsInstanceConfig )
} ,
"observabilityConfig" : {
object ( ObservabilityInstanceConfig )
} ,
"readPoolConfig" : {
object ( ReadPoolConfig )
} ,
"ipAddress" : string ,
"publicIpAddress" : string ,
"reconciling" : boolean ,
"etag" : string ,
"annotations" : {
string : string ,
...
} ,
"clientConnectionConfig" : {
object ( ClientConnectionConfig )
} ,
"satisfiesPzs" : boolean ,
"pscInstanceConfig" : {
object ( PscInstanceConfig )
} ,
"networkConfig" : {
object ( InstanceNetworkConfig )
} ,
"outboundPublicIpAddresses" : [
string
] ,
"activationPolicy" : enum ( ActivationPolicy ) ,
"connectionPoolConfig" : {
object ( ConnectionPoolConfig )
} ,
"maintenanceVersionName" : string ,
"dataApiAccess" : enum ( DataApiAccess )
}
Fields
name
string
Output only. The name of the instance resource with the format: * projects/{project}/locations/{region}/clusters/{cluster_id}/instances/{instance_id} where the cluster and instance ID segments should satisfy the regex expression [a-z]([a-z0-9-]{0,61}[a-z0-9])? , e.g. 1-63 characters of lowercase letters, numbers, and dashes, starting with a letter, and ending with a letter or number. For more details see https://google.aip.dev/122 . The prefix of the instance resource name is the name of the parent resource: * projects/{project}/locations/{region}/clusters/{cluster_id}
displayName
string
User-settable and human-readable display name for the Instance.
uid
string
Output only. The system-generated UID of the resource. The UID is assigned when the resource is created, and it is retained until it is deleted.
createTime
string ( Timestamp format)
Output only. Create time stamp
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
updateTime
string ( Timestamp format)
Output only. Update time stamp
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
deleteTime
string ( Timestamp format)
Output only. Delete time stamp
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
labels
map (key: string, value: string)
Labels as key value pairs
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
state
enum ( State )
Output only. The current serving state of the instance.
instanceType
enum ( InstanceType )
Required. The type of the instance. Specified at creation time.
machineConfig
object ( MachineConfig )
Configurations for the machines that host the underlying database engine.
availabilityType
enum ( AvailabilityType )
Availability type of an Instance. If empty, defaults to REGIONAL for primary instances. For read pools, availability_type is always UNSPECIFIED. Instances in the read pools are evenly distributed across available zones within the region (i.e. read pools with more than one node will have a node in at least two zones).
gceZone
string
The Compute Engine zone that the instance should serve from, per https://cloud.google.com/compute/docs/regions-zones This can ONLY be specified for ZONAL instances. If present for a REGIONAL instance, an error will be thrown. If this is absent for a ZONAL instance, instance is created in a random zone with available capacity.
databaseFlags
map (key: string, value: string)
Database flags. Set at the instance level. They are copied from the primary instance on secondary instance creation. Flags that have restrictions default to the value at primary instance on read instances during creation. Read instances can set new flags or override existing flags that are relevant for reads, for example, for enabling columnar cache on a read instance. Flags set on read instance might or might not be present on the primary instance.
This is a list of "key": "value" pairs. "key": The name of the flag. These flags are passed at instance setup time, so include both server options and system variables for Postgres. Flags are specified with underscores, not hyphens. "value": The value of the flag. Booleans are set to on for true and off for false. This field must be omitted if the flag doesn't take a value.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
writableNode
object ( Node )
Output only. This is set for the read-write VM of the PRIMARY instance only.
nodes[]
object ( Node )
Output only. List of available read-only VMs in this instance, including the standby for a PRIMARY instance.
queryInsightsConfig
object ( QueryInsightsInstanceConfig )
Configuration for query insights.
observabilityConfig
object ( ObservabilityInstanceConfig )
Configuration for observability.
readPoolConfig
object ( ReadPoolConfig )
Read pool instance configuration. This is required if the value of instanceType is READ_POOL.
ipAddress
string
Output only. The IP address for the Instance. This is the connection endpoint for an end-user application.
publicIpAddress
string
Output only. The public IP addresses for the Instance. This is available ONLY when enable_public_ip is set. This is the connection endpoint for an end-user application.
reconciling
boolean
Output only. Reconciling ( https://google.aip.dev/128#reconciliation) . Set to true if the current state of Instance does not match the user's intended state, and the service is actively updating the resource to reconcile them. This can happen due to user-triggered updates or system actions like failover or maintenance.
etag
string
For Resource freshness validation ( https://google.aip.dev/154 )
annotations
map (key: string, value: string)
Annotations to allow client tools to store small amount of arbitrary data. This is distinct from labels. https://google.aip.dev/128
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
clientConnectionConfig
object ( ClientConnectionConfig )
Optional. Client connection specific configurations
satisfiesPzs
boolean
Output only. Reserved for future use.
pscInstanceConfig
object ( PscInstanceConfig )
Optional. The configuration for Private Service Connect (PSC) for the instance.
networkConfig
object ( InstanceNetworkConfig )
Optional. Instance-level network configuration.
outboundPublicIpAddresses[]
string
Output only. All outbound public IP addresses configured for the instance.
activationPolicy
enum ( ActivationPolicy )
Optional. Specifies whether an instance needs to spin up. Once the instance is active, the activation policy can be updated to the NEVER to stop the instance. Likewise, the activation policy can be updated to ALWAYS to start the instance. There are restrictions around when an instance can/cannot be activated (for example, a read pool instance should be stopped before stopping primary etc.). Please refer to the API documentation for more details.
connectionPoolConfig
object ( ConnectionPoolConfig )
Optional. The configuration for Managed Connection Pool (MCP).
maintenanceVersionName
string
Output only. Maintenance version of the instance, for example: POSTGRES_15.2025_07_15.04_00. Output only. Update this field via the parent cluster's maintenance_version field(s).
dataApiAccess
enum ( DataApiAccess )
Optional. Controls whether the Data API is enabled for this instance. When enabled, this allows authorized users to connect to the instance from the public internet using the executeSql API, even for private IP instances. If this is not specified, the data API is enabled by default for Google internal services like AlloyDB Studio. Disable it explicitly to disallow Google internal services as well.
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
MachineConfig
JSON representation
{
"cpuCount" : integer ,
"machineType" : string
}
Fields
cpuCount
integer
The number of CPU's in the VM instance.
machineType
string
Machine type of the VM instance. E.g. "n2-highmem-4", "n2-highmem-8", "c4a-highmem-4-lssd". cpu_count must match the number of vCPUs in the machine type.
DatabaseFlagsEntry
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
Node
JSON representation
{
"zoneId" : string ,
"id" : string ,
"ip" : string ,
"state" : string
}
Fields
zoneId
string
Output only. The Compute Engine zone of the VM e.g. "us-central1-b".
id
string
Output only. The identifier of the VM e.g. "test-read-0601-407e52be-ms3l".
ip
string
Output only. The private IP address of the VM e.g. "10.57.0.34".
state
string
Output only. Determined by state of the compute VM and postgres-service health. Compute VM state can have values listed in https://cloud.google.com/compute/docs/instances/instance-life-cycle and postgres-service health can have values: HEALTHY and UNHEALTHY.
QueryInsightsInstanceConfig
JSON representation
{
"queryStringLength" : integer ,
// Union field _record_application_tags can be only one of the following:
"recordApplicationTags" : boolean
// End of list of possible types for union field _record_application_tags .
// Union field _record_client_address can be only one of the following:
"recordClientAddress" : boolean
// End of list of possible types for union field _record_client_address .
// Union field _query_plans_per_minute can be only one of the following:
"queryPlansPerMinute" : integer
// End of list of possible types for union field _query_plans_per_minute .
}
Fields
queryStringLength
integer ( uint32 format)
Query string length. The default value is 1024. Any integer between 256 and 4500 is considered valid.
Union field _record_application_tags .
_record_application_tags can be only one of the following:
recordApplicationTags
boolean
Record application tags for an instance. This flag is turned "on" by default.
Union field _record_client_address .
_record_client_address can be only one of the following:
recordClientAddress
boolean
Record client address for an instance. Client address is PII information. This flag is turned "on" by default.
Union field _query_plans_per_minute .
_query_plans_per_minute can be only one of the following:
queryPlansPerMinute
integer ( uint32 format)
Number of query execution plans captured by Insights per minute for all queries combined. The default value is 5. Any integer between 0 and 20 is considered valid.
ObservabilityInstanceConfig
JSON representation
{
// Union field _enabled can be only one of the following:
"enabled" : boolean
// End of list of possible types for union field _enabled .
// Union field _preserve_comments can be only one of the following:
"preserveComments" : boolean
// End of list of possible types for union field _preserve_comments .
// Union field _track_wait_events can be only one of the following:
"trackWaitEvents" : boolean
// End of list of possible types for union field _track_wait_events .
// Union field _track_wait_event_types can be only one of the following:
"trackWaitEventTypes" : boolean
// End of list of possible types for union field _track_wait_event_types .
// Union field _max_query_string_length can be only one of the following:
"maxQueryStringLength" : integer
// End of list of possible types for union field _max_query_string_length .
// Union field _record_application_tags can be only one of the following:
"recordApplicationTags" : boolean
// End of list of possible types for union field _record_application_tags .
// Union field _query_plans_per_minute can be only one of the following:
"queryPlansPerMinute" : integer
// End of list of possible types for union field _query_plans_per_minute .
// Union field _track_active_queries can be only one of the following:
"trackActiveQueries" : boolean
// End of list of possible types for union field _track_active_queries .
}
Fields
Union field _enabled .
_enabled can be only one of the following:
enabled
boolean
Observability feature status for an instance. This flag is turned "off" by default.
Union field _preserve_comments .
_preserve_comments can be only one of the following:
preserveComments
boolean
Preserve comments in query string for an instance. This flag is turned "off" by default.
Union field _track_wait_events .
_track_wait_events can be only one of the following:
trackWaitEvents
boolean
Track wait events during query execution for an instance. This flag is turned "on" by default but tracking is enabled only after observability enabled flag is also turned on.
Union field _track_wait_event_types .
_track_wait_event_types can be only one of the following:
trackWaitEventTypes
boolean
Output only. Track wait event types during query execution for an instance. This flag is turned "on" by default but tracking is enabled only after observability enabled flag is also turned on. This is read-only flag and only modifiable by internal API.
Union field _max_query_string_length .
_max_query_string_length can be only one of the following:
maxQueryStringLength
integer
Query string length. The default value is 10k.
Union field _record_application_tags .
_record_application_tags can be only one of the following:
recordApplicationTags
boolean
Record application tags for an instance. This flag is turned "off" by default.
Union field _query_plans_per_minute .
_query_plans_per_minute can be only one of the following:
queryPlansPerMinute
integer
Number of query execution plans captured by Insights per minute for all queries combined. The default value is 200. Any integer between 0 to 200 is considered valid.
Union field _track_active_queries .
_track_active_queries can be only one of the following:
trackActiveQueries
boolean
Track actively running queries on the instance. If not set, this flag is "off" by default.
ReadPoolConfig
JSON representation
{
"nodeCount" : integer
}
Fields
nodeCount
integer
Read capacity, i.e. number of nodes in a read pool instance.
AnnotationsEntry
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
ClientConnectionConfig
JSON representation
{
"requireConnectors" : boolean ,
"sslConfig" : {
object ( SslConfig )
}
}
Fields
requireConnectors
boolean
Optional. Configuration to enforce connectors only (ex: AuthProxy) connections to the database.
sslConfig
object ( SslConfig )
Optional. SSL configuration option for this instance.
SslConfig
JSON representation
{
"sslMode" : enum ( SslMode ) ,
"caSource" : enum ( CaSource )
}
Fields
sslMode
enum ( SslMode )
Optional. SSL mode. Specifies client-server SSL/TLS connection behavior.
caSource
enum ( CaSource )
Optional. Certificate Authority (CA) source. Only CA_SOURCE_MANAGED is supported currently, and is the default value.
PscInstanceConfig
JSON representation
{
"serviceAttachmentLink" : string ,
"allowedConsumerProjects" : [
string
] ,
"pscDnsName" : string ,
"pscInterfaceConfigs" : [
{
object ( PscInterfaceConfig )
}
] ,
"pscAutoConnections" : [
{
object ( PscAutoConnectionConfig )
}
]
}
Fields
serviceAttachmentLink
string
Output only. The service attachment created when Private Service Connect (PSC) is enabled for the instance. The name of the resource will be in the format of projects/<alloydb-tenant-project-number>/regions/<region-name>/serviceAttachments/<service-attachment-name>
allowedConsumerProjects[]
string
Optional. List of consumer projects that are allowed to create PSC endpoints to service-attachments to this instance.
pscDnsName
string
Output only. The DNS name of the instance for PSC connectivity. Name convention: . . .alloydb-psc.goog
pscInterfaceConfigs[]
object ( PscInterfaceConfig )
Optional. Configurations for setting up PSC interfaces attached to the instance which are used for outbound connectivity. Only primary instances can have PSC interface attached. Currently we only support 0 or 1 PSC interface.
pscAutoConnections[]
object ( PscAutoConnectionConfig )
Optional. Configurations for setting up PSC service automation.
PscInterfaceConfig
JSON representation
{
"networkAttachmentResource" : string
}
Fields
networkAttachmentResource
string
The network attachment resource created in the consumer network to which the PSC interface will be linked. This is of the format: "projects/${CONSUMER_PROJECT}/regions/${REGION}/networkAttachments/${NETWORK_ATTACHMENT_NAME}". The network attachment must be in the same region as the instance.
PscAutoConnectionConfig
JSON representation
{
"consumerProject" : string ,
"consumerNetwork" : string ,
"ipAddress" : string ,
"status" : string ,
"consumerNetworkStatus" : string
}
Fields
consumerProject
string
The consumer project to which the PSC service automation endpoint will be created.
consumerNetwork
string
The consumer network for the PSC service automation, example: "projects/vpc-host-project/global/networks/default". The consumer network might be hosted a different project than the consumer project.
ipAddress
string
Output only. The IP address of the PSC service automation endpoint.
status
string
Output only. The status of the PSC service automation connection. Possible values: "STATE_UNSPECIFIED" - An invalid state as the default case. "ACTIVE" - The connection has been created successfully. "FAILED" - The connection is not functional since some resources on the connection fail to be created. "CREATING" - The connection is being created. "DELETING" - The connection is being deleted. "CREATE_REPAIRING" - The connection is being repaired to complete creation. "DELETE_REPAIRING" - The connection is being repaired to complete deletion.
consumerNetworkStatus
string
Output only. The status of the service connection policy. Possible values: "STATE_UNSPECIFIED" - Default state, when Connection Map is created initially. "VALID" - Set when policy and map configuration is valid, and their matching can lead to allowing creation of PSC Connections subject to other constraints like connections limit. "CONNECTION_POLICY_MISSING" - No Service Connection Policy found for this network and Service Class "POLICY_LIMIT_REACHED" - Service Connection Policy limit reached for this network and Service Class "CONSUMER_INSTANCE_PROJECT_NOT_ALLOWLISTED" - The consumer instance project is not in AllowedGoogleProducersResourceHierarchyLevels of the matching ServiceConnectionPolicy.
InstanceNetworkConfig
JSON representation
{
"authorizedExternalNetworks" : [
{
object ( AuthorizedNetwork )
}
] ,
"enablePublicIp" : boolean ,
"enableOutboundPublicIp" : boolean ,
"network" : string ,
"allocatedIpRangeOverride" : string
}
Fields
authorizedExternalNetworks[]
object ( AuthorizedNetwork )
Optional. A list of external network authorized to access this instance.
enablePublicIp
boolean
Optional. Enabling public ip for the instance.
enableOutboundPublicIp
boolean
Optional. Enabling an outbound public IP address to support a database server sending requests out into the internet.
network
string
Output only. The resource link for the VPC network in which instance resources are created and from which they are accessible via Private IP. This will be the same value as the parent cluster's network. It is specified in the form: // projects/{project_number}/global/networks/{network_id} .
allocatedIpRangeOverride
string
Optional. Name of the allocated IP range for the private IP AlloyDB instance, for example: "google-managed-services-default". If set, the instance IPs will be created from this allocated range and will override the IP range used by the parent cluster. The range name must comply with RFC 1035 . Specifically, the name must be 1-63 characters long and match the regular expression a-z ?.
AuthorizedNetwork
JSON representation
{
"cidrRange" : string
}
Fields
cidrRange
string
CIDR range for one authorzied network of the instance.
ConnectionPoolConfig
JSON representation
{
"enabled" : boolean ,
"flags" : {
string : string ,
...
} ,
"poolerCount" : integer
}
Fields
enabled
boolean
Optional. Whether to enable Managed Connection Pool (MCP).
flags
map (key: string, value: string)
Optional. Connection Pool flags, as a list of "key": "value" pairs.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
poolerCount
integer
Output only. The number of running poolers per instance.
FlagsEntry
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
Destructive Hint: ❌ | Idempotent Hint: ✅ | Read Only Hint: ✅ | Open World Hint: ✅
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-02-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-02-17 UTC."],[],[]]
