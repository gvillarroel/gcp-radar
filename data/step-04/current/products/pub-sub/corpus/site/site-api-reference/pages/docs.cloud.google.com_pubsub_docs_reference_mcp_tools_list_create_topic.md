---
title: "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_topic
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/pubsub/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/create_topic
  title: "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Pub/Sub
Reference
Send feedback
MCP Tools Reference: pubsub.googleapis.com
Stay organized with collections
Save and categorize content based on your preferences.
Tool: create_topic
Create a new Cloud Pub/Sub topic.
Parameters
name : The name for the new topic in the format projects/{project_id}/topics/{name} .
Returns
The created topic configuration.
Important Notes
A topic is a named resource that represents a feed of messages.
A project ID and topic name must be provided.
The following sample demonstrate how to use curl to invoke the create_topic MCP tool.
Curl Request
curl --location 'https://pubsub.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/call",
"params": {
"name": "create_topic",
"arguments": {
// provide these details according to the tool' s MCP specification
}
} ,
"jsonrpc" : "2.0" ,
"id" : 1
} '
Input Schema
A topic resource.
Topic
JSON representation
{
"name" : string ,
"labels" : {
string : string ,
...
} ,
"messageStoragePolicy" : {
object ( MessageStoragePolicy )
} ,
"kmsKeyName" : string ,
"schemaSettings" : {
object ( SchemaSettings )
} ,
"satisfiesPzs" : boolean ,
"messageRetentionDuration" : string ,
"state" : enum ( State ) ,
"ingestionDataSourceSettings" : {
object ( IngestionDataSourceSettings )
} ,
"messageTransforms" : [
{
object ( MessageTransform )
}
] ,
"tags" : {
string : string ,
...
}
}
Fields
name
string
Required. Identifier. The name of the topic. It must have the format "projects/{project}/topics/{topic}" . {topic} must start with a letter, and contain only letters ( [A-Za-z] ), numbers ( [0-9] ), dashes ( - ), underscores ( _ ), periods ( . ), tildes ( ~ ), plus ( + ) or percent signs ( % ). It must be between 3 and 255 characters in length, and it must not start with "goog" .
labels
map (key: string, value: string)
Optional. See Creating and managing labels .
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
messageStoragePolicy
object ( MessageStoragePolicy )
Optional. Policy constraining the set of Google Cloud Platform regions where messages published to the topic may be stored. If not present, then no constraints are in effect.
kmsKeyName
string
Optional. The resource name of the Cloud KMS CryptoKey to be used to protect access to messages published on this topic.
The expected format is projects/*/locations/*/keyRings/*/cryptoKeys/* .
schemaSettings
object ( SchemaSettings )
Optional. Settings for validating messages published against a schema.
satisfiesPzs
boolean
Optional. Reserved for future use. This field is set only in responses from the server; it is ignored if it is set in any requests.
messageRetentionDuration
string ( Duration format)
Optional. Indicates the minimum duration to retain a message after it is published to the topic. If this field is set, messages published to the topic in the last message_retention_duration are always available to subscribers. For instance, it allows any attached subscription to seek to a timestamp that is up to message_retention_duration in the past. If this field is not set, message retention is controlled by settings on individual subscriptions. Cannot be more than 31 days or less than 10 minutes.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
state
enum ( State )
Output only. An output-only field indicating the state of the topic.
ingestionDataSourceSettings
object ( IngestionDataSourceSettings )
Optional. Settings for ingestion from a data source into this topic.
messageTransforms[]
object ( MessageTransform )
Optional. Transforms to be applied to messages published to the topic. Transforms are applied in the order specified.
tags
map (key: string, value: string)
Optional. Input only. Immutable. Tag keys/values directly bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing"
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
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
MessageStoragePolicy
JSON representation
{
"allowedPersistenceRegions" : [
string
] ,
"enforceInTransit" : boolean
}
Fields
allowedPersistenceRegions[]
string
Optional. A list of IDs of Google Cloud regions where messages that are published to the topic may be persisted in storage. Messages published by publishers running in non-allowed Google Cloud regions (or running outside of Google Cloud altogether) are routed for storage in one of the allowed regions. An empty list means that no regions are allowed, and is not a valid configuration.
enforceInTransit
boolean
Optional. If true, allowed_persistence_regions is also used to enforce in-transit guarantees for messages. That is, Pub/Sub will fail Publish operations on this topic and subscribe operations on any subscription attached to this topic in any region that is not in allowed_persistence_regions .
SchemaSettings
JSON representation
{
"schema" : string ,
"encoding" : enum ( Encoding ) ,
"firstRevisionId" : string ,
"lastRevisionId" : string
}
Fields
schema
string
Required. The name of the schema that messages published should be validated against. Format is projects/{project}/schemas/{schema} . The value of this field will be _deleted-schema_ if the schema has been deleted.
encoding
enum ( Encoding )
Optional. The encoding of messages validated against schema .
firstRevisionId
string
Optional. The minimum (inclusive) revision allowed for validating messages. If empty or not present, allow any revision to be validated against last_revision or any revision created before.
lastRevisionId
string
Optional. The maximum (inclusive) revision allowed for validating messages. If empty or not present, allow any revision to be validated against first_revision or any revision created after.
Duration
JSON representation
{
"seconds" : string ,
"nanos" : integer
}
Fields
seconds
string ( int64 format)
Signed seconds of the span of time. Must be from -315,576,000,000 to +315,576,000,000 inclusive. Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years
nanos
integer
Signed fractions of a second at nanosecond resolution of the span of time. Durations less than one second are represented with a 0 seconds field and a positive or negative nanos field. For durations of one second or more, a non-zero value for the nanos field must be of the same sign as the seconds field. Must be from -999,999,999 to +999,999,999 inclusive.
IngestionDataSourceSettings
JSON representation
{
"platformLogsSettings" : {
object ( PlatformLogsSettings )
} ,
// Union field source can be only one of the following:
"awsKinesis" : {
object ( AwsKinesis )
} ,
"cloudStorage" : {
object ( CloudStorage )
} ,
"azureEventHubs" : {
object ( AzureEventHubs )
} ,
"awsMsk" : {
object ( AwsMsk )
} ,
"confluentCloud" : {
object ( ConfluentCloud )
}
// End of list of possible types for union field source .
}
Fields
platformLogsSettings
object ( PlatformLogsSettings )
Optional. Platform Logs settings. If unset, no Platform Logs will be generated.
Union field source . Only one source type can have settings set. source can be only one of the following:
awsKinesis
object ( AwsKinesis )
Optional. Amazon Kinesis Data Streams.
cloudStorage
object ( CloudStorage )
Optional. Cloud Storage.
azureEventHubs
object ( AzureEventHubs )
Optional. Azure Event Hubs.
awsMsk
object ( AwsMsk )
Optional. Amazon MSK.
confluentCloud
object ( ConfluentCloud )
Optional. Confluent Cloud.
AwsKinesis
JSON representation
{
"state" : enum ( State ) ,
"streamArn" : string ,
"consumerArn" : string ,
"awsRoleArn" : string ,
"gcpServiceAccount" : string
}
Fields
state
enum ( State )
Output only. An output-only field that indicates the state of the Kinesis ingestion source.
streamArn
string
Required. The Kinesis stream ARN to ingest data from.
consumerArn
string
Required. The Kinesis consumer ARN to used for ingestion in Enhanced Fan-Out mode. The consumer must be already created and ready to be used.
awsRoleArn
string
Required. AWS role ARN to be used for Federated Identity authentication with Kinesis. Check the Pub/Sub docs for how to set up this role and the required permissions that need to be attached to it.
gcpServiceAccount
string
Required. The GCP service account to be used for Federated Identity authentication with Kinesis (via a AssumeRoleWithWebIdentity call for the provided role). The aws_role_arn must be set up with accounts.google.com:sub equals to this service account number.
CloudStorage
JSON representation
{
"state" : enum ( State ) ,
"bucket" : string ,
"minimumObjectCreateTime" : string ,
"matchGlob" : string ,
// Union field input_format can be only one of the following:
"textFormat" : {
object ( TextFormat )
} ,
"avroFormat" : {
object ( AvroFormat )
} ,
"pubsubAvroFormat" : {
object ( PubSubAvroFormat )
}
// End of list of possible types for union field input_format .
}
Fields
state
enum ( State )
Output only. An output-only field that indicates the state of the Cloud Storage ingestion source.
bucket
string
Optional. Cloud Storage bucket. The bucket name must be without any prefix like "gs://". See the bucket naming requirements .
minimumObjectCreateTime
string ( Timestamp format)
Optional. Only objects with a larger or equal creation timestamp will be ingested.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
matchGlob
string
Optional. Glob pattern used to match objects that will be ingested. If unset, all objects will be ingested. See the supported patterns .
Union field input_format . Defaults to text format. input_format can be only one of the following:
textFormat
object ( TextFormat )
Optional. Data from Cloud Storage will be interpreted as text.
avroFormat
object ( AvroFormat )
Optional. Data from Cloud Storage will be interpreted in Avro format.
pubsubAvroFormat
object ( PubSubAvroFormat )
Optional. It will be assumed data from Cloud Storage was written via Cloud Storage subscriptions .
TextFormat
JSON representation
{
// Union field _delimiter can be only one of the following:
"delimiter" : string
// End of list of possible types for union field _delimiter .
}
Fields
Union field _delimiter .
_delimiter can be only one of the following:
delimiter
string
Optional. When unset, '\n' is used.
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
AzureEventHubs
JSON representation
{
"state" : enum ( State ) ,
"resourceGroup" : string ,
"namespace" : string ,
"eventHub" : string ,
"clientId" : string ,
"tenantId" : string ,
"subscriptionId" : string ,
"gcpServiceAccount" : string
}
Fields
state
enum ( State )
Output only. An output-only field that indicates the state of the Event Hubs ingestion source.
resourceGroup
string
Optional. Name of the resource group within the azure subscription.
namespace
string
Optional. The name of the Event Hubs namespace.
eventHub
string
Optional. The name of the Event Hub.
clientId
string
Optional. The client id of the Azure application that is being used to authenticate Pub/Sub.
tenantId
string
Optional. The tenant id of the Azure application that is being used to authenticate Pub/Sub.
subscriptionId
string
Optional. The Azure subscription id.
gcpServiceAccount
string
Optional. The GCP service account to be used for Federated Identity authentication.
AwsMsk
JSON representation
{
"state" : enum ( State ) ,
"clusterArn" : string ,
"topic" : string ,
"awsRoleArn" : string ,
"gcpServiceAccount" : string
}
Fields
state
enum ( State )
Output only. An output-only field that indicates the state of the Amazon MSK ingestion source.
clusterArn
string
Required. The Amazon Resource Name (ARN) that uniquely identifies the cluster.
topic
string
Required. The name of the topic in the Amazon MSK cluster that Pub/Sub will import from.
awsRoleArn
string
Required. AWS role ARN to be used for Federated Identity authentication with Amazon MSK. Check the Pub/Sub docs for how to set up this role and the required permissions that need to be attached to it.
gcpServiceAccount
string
Required. The GCP service account to be used for Federated Identity authentication with Amazon MSK (via a AssumeRoleWithWebIdentity call for the provided role). The aws_role_arn must be set up with accounts.google.com:sub equals to this service account number.
ConfluentCloud
JSON representation
{
"state" : enum ( State ) ,
"bootstrapServer" : string ,
"clusterId" : string ,
"topic" : string ,
"identityPoolId" : string ,
"gcpServiceAccount" : string
}
Fields
state
enum ( State )
Output only. An output-only field that indicates the state of the Confluent Cloud ingestion source.
bootstrapServer
string
Required. The address of the bootstrap server. The format is url:port.
clusterId
string
Required. The id of the cluster.
topic
string
Required. The name of the topic in the Confluent Cloud cluster that Pub/Sub will import from.
identityPoolId
string
Required. The id of the identity pool to be used for Federated Identity authentication with Confluent Cloud. See https://docs.confluent.io/cloud/current/security/authenticate/workload-identities/identity-providers/oauth/identity-pools.html#add-oauth-identity-pools .
gcpServiceAccount
string
Required. The GCP service account to be used for Federated Identity authentication with identity_pool_id .
PlatformLogsSettings
JSON representation
{
"severity" : enum ( Severity )
}
Fields
severity
enum ( Severity )
Optional. The minimum severity level of Platform Logs that will be written.
MessageTransform
JSON representation
{
"enabled" : boolean ,
"disabled" : boolean ,
// Union field transform can be only one of the following:
"javascriptUdf" : {
object ( JavaScriptUDF )
} ,
"aiInference" : {
object ( AIInference )
}
// End of list of possible types for union field transform .
}
Fields
enabled (deprecated)
boolean
This item is deprecated!
Optional. This field is deprecated, use the disabled field to disable transforms.
disabled
boolean
Optional. If true, the transform is disabled and will not be applied to messages. Defaults to false .
Union field transform .
transform can be only one of the following:
javascriptUdf
object ( JavaScriptUDF )
Optional. JavaScript User Defined Function. If multiple JavaScriptUDF's are specified on a resource, each must have a unique function_name .
aiInference
object ( AIInference )
Optional. AI Inference. Specifies the Vertex AI endpoint that inference requests built from the Pub/Sub message data and provided parameters will be sent to.
JavaScriptUDF
JSON representation
{
"functionName" : string ,
"code" : string
}
Fields
functionName
string
Required. Name of the JavasScript function that should applied to Pub/Sub messages.
code
string
Required. JavaScript code that contains a function function_name with the below signature:
/**
* Transforms a Pub/Sub message.
* @return {(Object<string, (string | Object<string, string>)>|null)} - To
* filter a message, return `null`. To transform a message return a map
* with the following keys:
* - (required) 'data' : {string}
* - (optional) 'attributes' : {Object<string, string>}
* Returning empty `attributes` will remove all attributes from the
* message.
*
* @param {(Object<string, (string | Object<string, string>)>} Pub/Sub
* message. Keys:
* - (required) 'data' : {string}
* - (required) 'attributes' : {Object<string, string>}
*
* @param {Object<string, any>} metadata - Pub/Sub message metadata.
* Keys:
* - (optional) 'message_id' : {string}
* - (optional) 'publish_time': {string} YYYY-MM-DDTHH:MM:SSZ format
* - (optional) 'ordering_key': {string}
*/
function <function_name>(message, metadata) {
}
AIInference
JSON representation
{
"endpoint" : string ,
"serviceAccountEmail" : string ,
// Union field inference_mode can be only one of the following:
"unstructuredInference" : {
object ( UnstructuredInference )
}
// End of list of possible types for union field inference_mode .
}
Fields
endpoint
string
Required. An endpoint to a Vertex AI model of the form projects/{project}/locations/{location}/endpoints/{endpoint} or projects/{project}/locations/{location}/publishers/{publisher}/models/{model} . Vertex AI API requests will be sent to this endpoint.
serviceAccountEmail
string
Optional. The service account to use to make prediction requests against endpoints. The resource creator or updater that specifies this field must have iam.serviceAccounts.actAs permission on the service account. If not specified, the Pub/Sub service agent , service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com, is used.
Union field inference_mode . The format of inference requests made to the endpoint. inference_mode can be only one of the following:
unstructuredInference
object ( UnstructuredInference )
Optional. Requests and responses can be any arbitrary JSON object.
UnstructuredInference
JSON representation
{
"parameters" : {
object
}
}
Fields
parameters
object ( Struct format)
Optional. A parameters object to be included in each inference request. The parameters object is combined with the data field of the Pub/Sub message to form the inference request.
Struct
JSON representation
{
"fields" : {
string : value ,
...
}
}
Fields
fields
map (key: string, value: value ( Value format))
Unordered map of dynamically typed values.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
FieldsEntry
JSON representation
{
"key" : string ,
"value" : value
}
Fields
key
string
value
value ( Value format)
Value
JSON representation
{
// Union field kind can be only one of the following:
"nullValue" : null ,
"numberValue" : number ,
"stringValue" : string ,
"boolValue" : boolean ,
"structValue" : {
object
} ,
"listValue" : array
// End of list of possible types for union field kind .
}
Fields
Union field kind . The kind of value. kind can be only one of the following:
nullValue
null
Represents a null value.
numberValue
number
Represents a double value.
stringValue
string
Represents a string value.
boolValue
boolean
Represents a boolean value.
structValue
object ( Struct format)
Represents a structured value.
listValue
array ( ListValue format)
Represents a repeated Value .
ListValue
JSON representation
{
"values" : [
value
]
}
Fields
values[]
value ( Value format)
Repeated field of dynamically typed values.
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
Output Schema
A topic resource.
Topic
JSON representation
{
"name" : string ,
"labels" : {
string : string ,
...
} ,
"messageStoragePolicy" : {
object ( MessageStoragePolicy )
} ,
"kmsKeyName" : string ,
"schemaSettings" : {
object ( SchemaSettings )
} ,
"satisfiesPzs" : boolean ,
"messageRetentionDuration" : string ,
"state" : enum ( State ) ,
"ingestionDataSourceSettings" : {
object ( IngestionDataSourceSettings )
} ,
"messageTransforms" : [
{
object ( MessageTransform )
}
] ,
"tags" : {
string : string ,
...
}
}
Fields
name
string
Required. Identifier. The name of the topic. It must have the format "projects/{project}/topics/{topic}" . {topic} must start with a letter, and contain only letters ( [A-Za-z] ), numbers ( [0-9] ), dashes ( - ), underscores ( _ ), periods ( . ), tildes ( ~ ), plus ( + ) or percent signs ( % ). It must be between 3 and 255 characters in length, and it must not start with "goog" .
labels
map (key: string, value: string)
Optional. See Creating and managing labels .
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
messageStoragePolicy
object ( MessageStoragePolicy )
Optional. Policy constraining the set of Google Cloud Platform regions where messages published to the topic may be stored. If not present, then no constraints are in effect.
kmsKeyName
string
Optional. The resource name of the Cloud KMS CryptoKey to be used to protect access to messages published on this topic.
The expected format is projects/*/locations/*/keyRings/*/cryptoKeys/* .
schemaSettings
object ( SchemaSettings )
Optional. Settings for validating messages published against a schema.
satisfiesPzs
boolean
Optional. Reserved for future use. This field is set only in responses from the server; it is ignored if it is set in any requests.
messageRetentionDuration
string ( Duration format)
Optional. Indicates the minimum duration to retain a message after it is published to the topic. If this field is set, messages published to the topic in the last message_retention_duration are always available to subscribers. For instance, it allows any attached subscription to seek to a timestamp that is up to message_retention_duration in the past. If this field is not set, message retention is controlled by settings on individual subscriptions. Cannot be more than 31 days or less than 10 minutes.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
state
enum ( State )
Output only. An output-only field indicating the state of the topic.
ingestionDataSourceSettings
object ( IngestionDataSourceSettings )
Optional. Settings for ingestion from a data source into this topic.
messageTransforms[]
object ( MessageTransform )
Optional. Transforms to be applied to messages published to the topic. Transforms are applied in the order specified.
tags
map (key: string, value: string)
Optional. Input only. Immutable. Tag keys/values directly bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing"
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
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
MessageStoragePolicy
JSON representation
{
"allowedPersistenceRegions" : [
string
] ,
"enforceInTransit" : boolean
}
Fields
allowedPersistenceRegions[]
string
Optional. A list of IDs of Google Cloud regions where messages that are published to the topic may be persisted in storage. Messages published by publishers running in non-allowed Google Cloud regions (or running outside of Google Cloud altogether) are routed for storage in one of the allowed regions. An empty list means that no regions are allowed, and is not a valid configuration.
enforceInTransit
boolean
Optional. If true, allowed_persistence_regions is also used to enforce in-transit guarantees for messages. That is, Pub/Sub will fail Publish operations on this topic and subscribe operations on any subscription attached to this topic in any region that is not in allowed_persistence_regions .
SchemaSettings
JSON representation
{
"schema" : string ,
"encoding" : enum ( Encoding ) ,
"firstRevisionId" : string ,
"lastRevisionId" : string
}
Fields
schema
string
Required. The name of the schema that messages published should be validated against. Format is projects/{project}/schemas/{schema} . The value of this field will be _deleted-schema_ if the schema has been deleted.
encoding
enum ( Encoding )
Optional. The encoding of messages validated against schema .
firstRevisionId
string
Optional. The minimum (inclusive) revision allowed for validating messages. If empty or not present, allow any revision to be validated against last_revision or any revision created before.
lastRevisionId
string
Optional. The maximum (inclusive) revision allowed for validating messages. If empty or not present, allow any revision to be validated against first_revision or any revision created after.
Duration
JSON representation
{
"seconds" : string ,
"nanos" : integer
}
Fields
seconds
string ( int64 format)
Signed seconds of the span of time. Must be from -315,576,000,000 to +315,576,000,000 inclusive. Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years
nanos
integer
Signed fractions of a second at nanosecond resolution of the span of time. Durations less than one second are represented with a 0 seconds field and a positive or negative nanos field. For durations of one second or more, a non-zero value for the nanos field must be of the same sign as the seconds field. Must be from -999,999,999 to +999,999,999 inclusive.
IngestionDataSourceSettings
JSON representation
{
"platformLogsSettings" : {
object ( PlatformLogsSettings )
} ,
// Union field source can be only one of the following:
"awsKinesis" : {
object ( AwsKinesis )
} ,
"cloudStorage" : {
object ( CloudStorage )
} ,
"azureEventHubs" : {
object ( AzureEventHubs )
} ,
"awsMsk" : {
object ( AwsMsk )
} ,
"confluentCloud" : {
object ( ConfluentCloud )
}
// End of list of possible types for union field source .
}
Fields
platformLogsSettings
object ( PlatformLogsSettings )
Optional. Platform Logs settings. If unset, no Platform Logs will be generated.
Union field source . Only one source type can have settings set. source can be only one of the following:
awsKinesis
object ( AwsKinesis )
Optional. Amazon Kinesis Data Streams.
cloudStorage
object ( CloudStorage )
Optional. Cloud Storage.
azureEventHubs
object ( AzureEventHubs )
Optional. Azure Event Hubs.
awsMsk
object ( AwsMsk )
Optional. Amazon MSK.
confluentCloud
object ( ConfluentCloud )
Optional. Confluent Cloud.
AwsKinesis
JSON representation
{
"state" : enum ( State ) ,
"streamArn" : string ,
"consumerArn" : string ,
"awsRoleArn" : string ,
"gcpServiceAccount" : string
}
Fields
state
enum ( State )
Output only. An output-only field that indicates the state of the Kinesis ingestion source.
streamArn
string
Required. The Kinesis stream ARN to ingest data from.
consumerArn
string
Required. The Kinesis consumer ARN to used for ingestion in Enhanced Fan-Out mode. The consumer must be already created and ready to be used.
awsRoleArn
string
Required. AWS role ARN to be used for Federated Identity authentication with Kinesis. Check the Pub/Sub docs for how to set up this role and the required permissions that need to be attached to it.
gcpServiceAccount
string
Required. The GCP service account to be used for Federated Identity authentication with Kinesis (via a AssumeRoleWithWebIdentity call for the provided role). The aws_role_arn must be set up with accounts.google.com:sub equals to this service account number.
CloudStorage
JSON representation
{
"state" : enum ( State ) ,
"bucket" : string ,
"minimumObjectCreateTime" : string ,
"matchGlob" : string ,
// Union field input_format can be only one of the following:
"textFormat" : {
object ( TextFormat )
} ,
"avroFormat" : {
object ( AvroFormat )
} ,
"pubsubAvroFormat" : {
object ( PubSubAvroFormat )
}
// End of list of possible types for union field input_format .
}
Fields
state
enum ( State )
Output only. An output-only field that indicates the state of the Cloud Storage ingestion source.
bucket
string
Optional. Cloud Storage bucket. The bucket name must be without any prefix like "gs://". See the bucket naming requirements .
minimumObjectCreateTime
string ( Timestamp format)
Optional. Only objects with a larger or equal creation timestamp will be ingested.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
matchGlob
string
Optional. Glob pattern used to match objects that will be ingested. If unset, all objects will be ingested. See the supported patterns .
Union field input_format . Defaults to text format. input_format can be only one of the following:
textFormat
object ( TextFormat )
Optional. Data from Cloud Storage will be interpreted as text.
avroFormat
object ( AvroFormat )
Optional. Data from Cloud Storage will be interpreted in Avro format.
pubsubAvroFormat
object ( PubSubAvroFormat )
Optional. It will be assumed data from Cloud Storage was written via Cloud Storage subscriptions .
TextFormat
JSON representation
{
// Union field _delimiter can be only one of the following:
"delimiter" : string
// End of list of possible types for union field _delimiter .
}
Fields
Union field _delimiter .
_delimiter can be only one of the following:
delimiter
string
Optional. When unset, '\n' is used.
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
AzureEventHubs
JSON representation
{
"state" : enum ( State ) ,
"resourceGroup" : string ,
"namespace" : string ,
"eventHub" : string ,
"clientId" : string ,
"tenantId" : string ,
"subscriptionId" : string ,
"gcpServiceAccount" : string
}
Fields
state
enum ( State )
Output only. An output-only field that indicates the state of the Event Hubs ingestion source.
resourceGroup
string
Optional. Name of the resource group within the azure subscription.
namespace
string
Optional. The name of the Event Hubs namespace.
eventHub
string
Optional. The name of the Event Hub.
clientId
string
Optional. The client id of the Azure application that is being used to authenticate Pub/Sub.
tenantId
string
Optional. The tenant id of the Azure application that is being used to authenticate Pub/Sub.
subscriptionId
string
Optional. The Azure subscription id.
gcpServiceAccount
string
Optional. The GCP service account to be used for Federated Identity authentication.
AwsMsk
JSON representation
{
"state" : enum ( State ) ,
"clusterArn" : string ,
"topic" : string ,
"awsRoleArn" : string ,
"gcpServiceAccount" : string
}
Fields
state
enum ( State )
Output only. An output-only field that indicates the state of the Amazon MSK ingestion source.
clusterArn
string
Required. The Amazon Resource Name (ARN) that uniquely identifies the cluster.
topic
string
Required. The name of the topic in the Amazon MSK cluster that Pub/Sub will import from.
awsRoleArn
string
Required. AWS role ARN to be used for Federated Identity authentication with Amazon MSK. Check the Pub/Sub docs for how to set up this role and the required permissions that need to be attached to it.
gcpServiceAccount
string
Required. The GCP service account to be used for Federated Identity authentication with Amazon MSK (via a AssumeRoleWithWebIdentity call for the provided role). The aws_role_arn must be set up with accounts.google.com:sub equals to this service account number.
ConfluentCloud
JSON representation
{
"state" : enum ( State ) ,
"bootstrapServer" : string ,
"clusterId" : string ,
"topic" : string ,
"identityPoolId" : string ,
"gcpServiceAccount" : string
}
Fields
state
enum ( State )
Output only. An output-only field that indicates the state of the Confluent Cloud ingestion source.
bootstrapServer
string
Required. The address of the bootstrap server. The format is url:port.
clusterId
string
Required. The id of the cluster.
topic
string
Required. The name of the topic in the Confluent Cloud cluster that Pub/Sub will import from.
identityPoolId
string
Required. The id of the identity pool to be used for Federated Identity authentication with Confluent Cloud. See https://docs.confluent.io/cloud/current/security/authenticate/workload-identities/identity-providers/oauth/identity-pools.html#add-oauth-identity-pools .
gcpServiceAccount
string
Required. The GCP service account to be used for Federated Identity authentication with identity_pool_id .
PlatformLogsSettings
JSON representation
{
"severity" : enum ( Severity )
}
Fields
severity
enum ( Severity )
Optional. The minimum severity level of Platform Logs that will be written.
MessageTransform
JSON representation
{
"enabled" : boolean ,
"disabled" : boolean ,
// Union field transform can be only one of the following:
"javascriptUdf" : {
object ( JavaScriptUDF )
} ,
"aiInference" : {
object ( AIInference )
}
// End of list of possible types for union field transform .
}
Fields
enabled (deprecated)
boolean
This item is deprecated!
Optional. This field is deprecated, use the disabled field to disable transforms.
disabled
boolean
Optional. If true, the transform is disabled and will not be applied to messages. Defaults to false .
Union field transform .
transform can be only one of the following:
javascriptUdf
object ( JavaScriptUDF )
Optional. JavaScript User Defined Function. If multiple JavaScriptUDF's are specified on a resource, each must have a unique function_name .
aiInference
object ( AIInference )
Optional. AI Inference. Specifies the Vertex AI endpoint that inference requests built from the Pub/Sub message data and provided parameters will be sent to.
JavaScriptUDF
JSON representation
{
"functionName" : string ,
"code" : string
}
Fields
functionName
string
Required. Name of the JavasScript function that should applied to Pub/Sub messages.
code
string
Required. JavaScript code that contains a function function_name with the below signature:
/**
* Transforms a Pub/Sub message.
* @return {(Object<string, (string | Object<string, string>)>|null)} - To
* filter a message, return `null`. To transform a message return a map
* with the following keys:
* - (required) 'data' : {string}
* - (optional) 'attributes' : {Object<string, string>}
* Returning empty `attributes` will remove all attributes from the
* message.
*
* @param {(Object<string, (string | Object<string, string>)>} Pub/Sub
* message. Keys:
* - (required) 'data' : {string}
* - (required) 'attributes' : {Object<string, string>}
*
* @param {Object<string, any>} metadata - Pub/Sub message metadata.
* Keys:
* - (optional) 'message_id' : {string}
* - (optional) 'publish_time': {string} YYYY-MM-DDTHH:MM:SSZ format
* - (optional) 'ordering_key': {string}
*/
function <function_name>(message, metadata) {
}
AIInference
JSON representation
{
"endpoint" : string ,
"serviceAccountEmail" : string ,
// Union field inference_mode can be only one of the following:
"unstructuredInference" : {
object ( UnstructuredInference )
}
// End of list of possible types for union field inference_mode .
}
Fields
endpoint
string
Required. An endpoint to a Vertex AI model of the form projects/{project}/locations/{location}/endpoints/{endpoint} or projects/{project}/locations/{location}/publishers/{publisher}/models/{model} . Vertex AI API requests will be sent to this endpoint.
serviceAccountEmail
string
Optional. The service account to use to make prediction requests against endpoints. The resource creator or updater that specifies this field must have iam.serviceAccounts.actAs permission on the service account. If not specified, the Pub/Sub service agent , service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com, is used.
Union field inference_mode . The format of inference requests made to the endpoint. inference_mode can be only one of the following:
unstructuredInference
object ( UnstructuredInference )
Optional. Requests and responses can be any arbitrary JSON object.
UnstructuredInference
JSON representation
{
"parameters" : {
object
}
}
Fields
parameters
object ( Struct format)
Optional. A parameters object to be included in each inference request. The parameters object is combined with the data field of the Pub/Sub message to form the inference request.
Struct
JSON representation
{
"fields" : {
string : value ,
...
}
}
Fields
fields
map (key: string, value: value ( Value format))
Unordered map of dynamically typed values.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
FieldsEntry
JSON representation
{
"key" : string ,
"value" : value
}
Fields
key
string
value
value ( Value format)
Value
JSON representation
{
// Union field kind can be only one of the following:
"nullValue" : null ,
"numberValue" : number ,
"stringValue" : string ,
"boolValue" : boolean ,
"structValue" : {
object
} ,
"listValue" : array
// End of list of possible types for union field kind .
}
Fields
Union field kind . The kind of value. kind can be only one of the following:
nullValue
null
Represents a null value.
numberValue
number
Represents a double value.
stringValue
string
Represents a string value.
boolValue
boolean
Represents a boolean value.
structValue
object ( Struct format)
Represents a structured value.
listValue
array ( ListValue format)
Represents a repeated Value .
ListValue
JSON representation
{
"values" : [
value
]
}
Fields
values[]
value ( Value format)
Repeated field of dynamically typed values.
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
Destructive Hint: ❌ | Idempotent Hint: ✅ | Read Only Hint: ❌ | Open World Hint: ✅
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-13 UTC."],[],[]]
