---
title: "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/pubsub/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/update_subscription
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
Tool: update_subscription
Update an existing Cloud Pub/Sub subscription.
Parameters
subscription : The subscription object containing fields to update. The name field must be set to the name of the subscription to be updated, and must be in the format projects/{project_id}/subscriptions/{subscription_name} .
update_mask : The set of fields to update for the subscription.
Returns
The updated subscription configuration.
Important Notes
A subscription is a named resource that represents a stream of messages from a single, specific topic, to be delivered to the subscribing application.
A project ID and subscription name must be provided.
Certain properties of a subscription, such as its topic, are not modifiable.
The following sample demonstrate how to use curl to invoke the update_subscription MCP tool.
Curl Request
curl --location 'https://pubsub.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/call",
"params": {
"name": "update_subscription",
"arguments": {
// provide these details according to the tool' s MCP specification
}
} ,
"jsonrpc" : "2.0" ,
"id" : 1
} '
Input Schema
Request for the UpdateSubscription method.
UpdateSubscriptionRequest
JSON representation
{
"subscription" : {
object ( Subscription )
} ,
"updateMask" : string
}
Fields
subscription
object ( Subscription )
Required. The updated subscription object.
updateMask
string ( FieldMask format)
Required. Indicates which fields in the provided subscription to update. Must be specified and non-empty.
This is a comma-separated list of fully qualified names of fields. Example: "user.displayName,photo" .
Subscription
JSON representation
{
"name" : string ,
"topic" : string ,
"pushConfig" : {
object ( PushConfig )
} ,
"bigqueryConfig" : {
object ( BigQueryConfig )
} ,
"cloudStorageConfig" : {
object ( CloudStorageConfig )
} ,
"ackDeadlineSeconds" : integer ,
"retainAckedMessages" : boolean ,
"messageRetentionDuration" : string ,
"labels" : {
string : string ,
...
} ,
"enableMessageOrdering" : boolean ,
"expirationPolicy" : {
object ( ExpirationPolicy )
} ,
"filter" : string ,
"deadLetterPolicy" : {
object ( DeadLetterPolicy )
} ,
"retryPolicy" : {
object ( RetryPolicy )
} ,
"detached" : boolean ,
"enableExactlyOnceDelivery" : boolean ,
"topicMessageRetentionDuration" : string ,
"state" : enum ( State ) ,
"analyticsHubSubscriptionInfo" : {
object ( AnalyticsHubSubscriptionInfo )
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
Required. Identifier. The name of the subscription. It must have the format "projects/{project}/subscriptions/{subscription}" . {subscription} must start with a letter, and contain only letters ( [A-Za-z] ), numbers ( [0-9] ), dashes ( - ), underscores ( _ ), periods ( . ), tildes ( ~ ), plus ( + ) or percent signs ( % ). It must be between 3 and 255 characters in length, and it must not start with "goog" .
topic
string
Required. The name of the topic from which this subscription is receiving messages. Format is projects/{project}/topics/{topic} . The value of this field will be _deleted-topic_ if the topic has been deleted.
pushConfig
object ( PushConfig )
Optional. If push delivery is used with this subscription, this field is used to configure it.
bigqueryConfig
object ( BigQueryConfig )
Optional. If delivery to BigQuery is used with this subscription, this field is used to configure it.
cloudStorageConfig
object ( CloudStorageConfig )
Optional. If delivery to Google Cloud Storage is used with this subscription, this field is used to configure it.
ackDeadlineSeconds
integer
Optional. The approximate amount of time (on a best-effort basis) Pub/Sub waits for the subscriber to acknowledge receipt before resending the message. In the interval after the message is delivered and before it is acknowledged, it is considered to be outstanding . During that time period, the message will not be redelivered (on a best-effort basis).
For pull subscriptions, this value is used as the initial value for the ack deadline. To override this value for a given message, call ModifyAckDeadline with the corresponding ack_id if using non-streaming pull or send the ack_id in a StreamingModifyAckDeadlineRequest if using streaming pull. The minimum custom deadline you can specify is 10 seconds. The maximum custom deadline you can specify is 600 seconds (10 minutes). If this parameter is 0, a default value of 10 seconds is used.
For push delivery, this value is also used to set the request timeout for the call to the push endpoint.
If the subscriber never acknowledges the message, the Pub/Sub system will eventually redeliver the message.
retainAckedMessages
boolean
Optional. Indicates whether to retain acknowledged messages. If true, then messages are not expunged from the subscription's backlog, even if they are acknowledged, until they fall out of the message_retention_duration window. This must be true if you would like to Seek to a timestamp in the past to replay previously-acknowledged messages.
messageRetentionDuration
string ( Duration format)
Optional. How long to retain unacknowledged messages in the subscription's backlog, from the moment a message is published. If retain_acked_messages is true, then this also configures the retention of acknowledged messages, and thus configures how far back in time a Seek can be done. Defaults to 7 days. Cannot be more than 31 days or less than 10 minutes.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
labels
map (key: string, value: string)
Optional. See Creating and managing labels .
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
enableMessageOrdering
boolean
Optional. If true, messages published with the same ordering_key in PubsubMessage will be delivered to the subscribers in the order in which they are received by the Pub/Sub system. Otherwise, they may be delivered in any order.
expirationPolicy
object ( ExpirationPolicy )
Optional. A policy that specifies the conditions for this subscription's expiration. A subscription is considered active as long as any connected subscriber is successfully consuming messages from the subscription or is issuing operations on the subscription. If expiration_policy is not set, a default policy with ttl of 31 days will be used. The minimum allowed value for expiration_policy.ttl is 1 day. If expiration_policy is set, but expiration_policy.ttl is not set, the subscription never expires.
filter
string
Optional. An expression written in the Pub/Sub filter language . If non-empty, then only PubsubMessage s whose attributes field matches the filter are delivered on this subscription. If empty, then no messages are filtered out.
deadLetterPolicy
object ( DeadLetterPolicy )
Optional. A policy that specifies the conditions for dead lettering messages in this subscription. If dead_letter_policy is not set, dead lettering is disabled.
The Pub/Sub service account associated with this subscriptions's parent project (i.e., service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com) must have permission to Acknowledge() messages on this subscription.
retryPolicy
object ( RetryPolicy )
Optional. A policy that specifies how Pub/Sub retries message delivery for this subscription.
If not set, the default retry policy is applied. This generally implies that messages will be retried as soon as possible for healthy subscribers. RetryPolicy will be triggered on NACKs or acknowledgment deadline exceeded events for a given message.
detached
boolean
Optional. Indicates whether the subscription is detached from its topic. Detached subscriptions don't receive messages from their topic and don't retain any backlog. Pull and StreamingPull requests will return FAILED_PRECONDITION. If the subscription is a push subscription, pushes to the endpoint will not be made.
enableExactlyOnceDelivery
boolean
Optional. If true, Pub/Sub provides the following guarantees for the delivery of a message with a given value of message_id on this subscription:
The message sent to a subscriber is guaranteed not to be resent before the message's acknowledgment deadline expires.
An acknowledged message will not be resent to a subscriber.
Note that subscribers may still receive multiple copies of a message when enable_exactly_once_delivery is true if the message was published multiple times by a publisher client. These copies are considered distinct by Pub/Sub and have distinct message_id values.
topicMessageRetentionDuration
string ( Duration format)
Output only. Indicates the minimum duration for which a message is retained after it is published to the subscription's topic. If this field is set, messages published to the subscription's topic in the last topic_message_retention_duration are always available to subscribers. See the message_retention_duration field in Topic . This field is set only in responses from the server; it is ignored if it is set in any requests.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
state
enum ( State )
Output only. An output-only field indicating whether or not the subscription can receive messages.
analyticsHubSubscriptionInfo
object ( AnalyticsHubSubscriptionInfo )
Output only. Information about the associated Analytics Hub subscription. Only set if the subscription is created by Analytics Hub.
messageTransforms[]
object ( MessageTransform )
Optional. Transforms to be applied to messages before they are delivered to subscribers. Transforms are applied in the order specified.
tags
map (key: string, value: string)
Optional. Input only. Immutable. Tag keys/values directly bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing"
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
PushConfig
JSON representation
{
"pushEndpoint" : string ,
"attributes" : {
string : string ,
...
} ,
// Union field authentication_method can be only one of the following:
"oidcToken" : {
object ( OidcToken )
}
// End of list of possible types for union field authentication_method .
// Union field wrapper can be only one of the following:
"pubsubWrapper" : {
object ( PubsubWrapper )
} ,
"noWrapper" : {
object ( NoWrapper )
}
// End of list of possible types for union field wrapper .
}
Fields
pushEndpoint
string
Optional. A URL locating the endpoint to which messages should be pushed. For example, a Webhook endpoint might use https://example.com/push .
attributes
map (key: string, value: string)
Optional. Endpoint configuration attributes that can be used to control different aspects of the message delivery.
The only currently supported attribute is x-goog-version , which you can use to change the format of the pushed message. This attribute indicates the version of the data expected by the endpoint. This controls the shape of the pushed message (i.e., its fields and metadata).
If not present during the CreateSubscription call, it will default to the version of the Pub/Sub API used to make such call. If not present in a ModifyPushConfig call, its value will not be changed. GetSubscription calls will always return a valid version, even if the subscription was created without this attribute.
The only supported values for the x-goog-version attribute are:
v1beta1 : uses the push format defined in the v1beta1 Pub/Sub API.
v1 or v1beta2 : uses the push format defined in the v1 Pub/Sub API.
For example: attributes { "x-goog-version": "v1" }
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
Union field authentication_method . An authentication method used by push endpoints to verify the source of push requests. This can be used with push endpoints that are private by default to allow requests only from the Pub/Sub system, for example. This field is optional and should be set only by users interested in authenticated push. authentication_method can be only one of the following:
oidcToken
object ( OidcToken )
Optional. If specified, Pub/Sub will generate and attach an OIDC JWT token as an Authorization header in the HTTP request for every pushed message.
Union field wrapper . The format of the delivered message to the push endpoint is defined by the chosen wrapper. When unset, PubsubWrapper is used. wrapper can be only one of the following:
pubsubWrapper
object ( PubsubWrapper )
Optional. When set, the payload to the push endpoint is in the form of the JSON representation of a PubsubMessage ( https://cloud.google.com/pubsub/docs/reference/rpc/google.pubsub.v1#pubsubmessage) .
noWrapper
object ( NoWrapper )
Optional. When set, the payload to the push endpoint is not wrapped.
AttributesEntry
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
OidcToken
JSON representation
{
"serviceAccountEmail" : string ,
"audience" : string
}
Fields
serviceAccountEmail
string
Optional. Service account email used for generating the OIDC token. For more information on setting up authentication, see Push subscriptions .
audience
string
Optional. Audience to be used when generating OIDC token. The audience claim identifies the recipients that the JWT is intended for. The audience value is a single case-sensitive string. Having multiple values (array) for the audience field is not supported. More info about the OIDC JWT token audience here: https://tools.ietf.org/html/rfc7519#section-4.1.3 Note: if not specified, the Push endpoint URL will be used.
NoWrapper
JSON representation
{
"writeMetadata" : boolean
}
Fields
writeMetadata
boolean
Optional. When true, writes the Pub/Sub message metadata to x-goog-pubsub-<KEY>:<VAL> headers of the HTTP request. Writes the Pub/Sub message attributes to <KEY>:<VAL> headers of the HTTP request.
BigQueryConfig
JSON representation
{
"table" : string ,
"useTopicSchema" : boolean ,
"writeMetadata" : boolean ,
"dropUnknownFields" : boolean ,
"state" : enum ( State ) ,
"useTableSchema" : boolean ,
"serviceAccountEmail" : string
}
Fields
table
string
Optional. The name of the table to which to write data, of the form {projectId}.{datasetId}.{tableId}
useTopicSchema
boolean
Optional. When true, use the topic's schema as the columns to write to in BigQuery, if it exists. use_topic_schema and use_table_schema cannot be enabled at the same time.
writeMetadata
boolean
Optional. When true, write the subscription name, message_id, publish_time, attributes, and ordering_key to additional columns in the table. The subscription name, message_id, and publish_time fields are put in their own columns while all other message properties (other than data) are written to a JSON object in the attributes column.
dropUnknownFields
boolean
Optional. When true and use_topic_schema is true, any fields that are a part of the topic schema that are not part of the BigQuery table schema are dropped when writing to BigQuery. Otherwise, the schemas must be kept in sync and any messages with extra fields are not written and remain in the subscription's backlog.
state
enum ( State )
Output only. An output-only field that indicates whether or not the subscription can receive messages.
useTableSchema
boolean
Optional. When true, use the BigQuery table's schema as the columns to write to in BigQuery. use_table_schema and use_topic_schema cannot be enabled at the same time.
serviceAccountEmail
string
Optional. The service account to use to write to BigQuery. The subscription creator or updater that specifies this field must have iam.serviceAccounts.actAs permission on the service account. If not specified, the Pub/Sub service agent , service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com, is used.
CloudStorageConfig
JSON representation
{
"bucket" : string ,
"filenamePrefix" : string ,
"filenameSuffix" : string ,
"filenameDatetimeFormat" : string ,
"maxDuration" : string ,
"maxBytes" : string ,
"maxMessages" : string ,
"state" : enum ( State ) ,
"serviceAccountEmail" : string ,
// Union field output_format can be only one of the following:
"textConfig" : {
object ( TextConfig )
} ,
"avroConfig" : {
object ( AvroConfig )
}
// End of list of possible types for union field output_format .
}
Fields
bucket
string
Required. User-provided name for the Cloud Storage bucket. The bucket must be created by the user. The bucket name must be without any prefix like "gs://". See the bucket naming requirements .
filenamePrefix
string
Optional. User-provided prefix for Cloud Storage filename. See the object naming requirements .
filenameSuffix
string
Optional. User-provided suffix for Cloud Storage filename. See the object naming requirements . Must not end in "/".
filenameDatetimeFormat
string
Optional. User-provided format string specifying how to represent datetimes in Cloud Storage filenames. See the datetime format guidance .
maxDuration
string ( Duration format)
Optional. The maximum duration that can elapse before a new Cloud Storage file is created. Min 1 minute, max 10 minutes, default 5 minutes. May not exceed the subscription's acknowledgment deadline.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
maxBytes
string ( int64 format)
Optional. The maximum bytes that can be written to a Cloud Storage file before a new file is created. Min 1 KB, max 10 GiB. The max_bytes limit may be exceeded in cases where messages are larger than the limit.
maxMessages
string ( int64 format)
Optional. The maximum number of messages that can be written to a Cloud Storage file before a new file is created. Min 1000 messages.
state
enum ( State )
Output only. An output-only field that indicates whether or not the subscription can receive messages.
serviceAccountEmail
string
Optional. The service account to use to write to Cloud Storage. The subscription creator or updater that specifies this field must have iam.serviceAccounts.actAs permission on the service account. If not specified, the Pub/Sub service agent , service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com, is used.
Union field output_format . Defaults to text format. output_format can be only one of the following:
textConfig
object ( TextConfig )
Optional. If set, message data will be written to Cloud Storage in text format.
avroConfig
object ( AvroConfig )
Optional. If set, message data will be written to Cloud Storage in Avro format.
AvroConfig
JSON representation
{
"writeMetadata" : boolean ,
"useTopicSchema" : boolean
}
Fields
writeMetadata
boolean
Optional. When true, write the subscription name, message_id, publish_time, attributes, and ordering_key as additional fields in the output. The subscription name, message_id, and publish_time fields are put in their own fields while all other message properties other than data (for example, an ordering_key, if present) are added as entries in the attributes map.
useTopicSchema
boolean
Optional. When true, the output Cloud Storage file will be serialized using the topic schema, if it exists.
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
ExpirationPolicy
JSON representation
{
"ttl" : string
}
Fields
ttl
string ( Duration format)
Optional. Specifies the "time-to-live" duration for an associated resource. The resource expires if it is not active for a period of ttl . The definition of "activity" depends on the type of the associated resource. The minimum and maximum allowed values for ttl depend on the type of the associated resource, as well. If ttl is not set, the associated resource never expires.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
DeadLetterPolicy
JSON representation
{
"deadLetterTopic" : string ,
"maxDeliveryAttempts" : integer
}
Fields
deadLetterTopic
string
Optional. The name of the topic to which dead letter messages should be published. Format is projects/{project}/topics/{topic} .The Pub/Sub service account associated with the enclosing subscription's parent project (i.e., service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com) must have permission to Publish() to this topic.
The operation will fail if the topic does not exist. Users should ensure that there is a subscription attached to this topic since messages published to a topic with no subscriptions are lost.
maxDeliveryAttempts
integer
Optional. The maximum number of delivery attempts for any message. The value must be between 5 and 100.
The number of delivery attempts is defined as 1 + (the sum of number of NACKs and number of times the acknowledgment deadline has been exceeded for the message).
A NACK is any call to ModifyAckDeadline with a 0 deadline. Note that client libraries may automatically extend ack_deadlines.
This field will be honored on a best effort basis.
If this parameter is 0, a default value of 5 is used.
RetryPolicy
JSON representation
{
"minimumBackoff" : string ,
"maximumBackoff" : string
}
Fields
minimumBackoff
string ( Duration format)
Optional. The minimum delay between consecutive deliveries of a given message. Value should be between 0 and 600 seconds. Defaults to 10 seconds.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
maximumBackoff
string ( Duration format)
Optional. The maximum delay between consecutive deliveries of a given message. Value should be between 0 and 600 seconds. Defaults to 600 seconds.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
AnalyticsHubSubscriptionInfo
JSON representation
{
"listing" : string ,
"subscription" : string
}
Fields
listing
string
Optional. The name of the associated Analytics Hub listing resource. Pattern: "projects/{project}/locations/{location}/dataExchanges/{data_exchange}/listings/{listing}"
subscription
string
Optional. The name of the associated Analytics Hub subscription resource. Pattern: "projects/{project}/locations/{location}/subscriptions/{subscription}"
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
FieldMask
JSON representation
{
"paths" : [
string
]
}
Fields
paths[]
string
The set of field mask paths.
Output Schema
A subscription resource. If none of push_config , bigquery_config , or cloud_storage_config is set, then the subscriber will pull and ack messages using API methods. At most one of these fields may be set.
Subscription
JSON representation
{
"name" : string ,
"topic" : string ,
"pushConfig" : {
object ( PushConfig )
} ,
"bigqueryConfig" : {
object ( BigQueryConfig )
} ,
"cloudStorageConfig" : {
object ( CloudStorageConfig )
} ,
"ackDeadlineSeconds" : integer ,
"retainAckedMessages" : boolean ,
"messageRetentionDuration" : string ,
"labels" : {
string : string ,
...
} ,
"enableMessageOrdering" : boolean ,
"expirationPolicy" : {
object ( ExpirationPolicy )
} ,
"filter" : string ,
"deadLetterPolicy" : {
object ( DeadLetterPolicy )
} ,
"retryPolicy" : {
object ( RetryPolicy )
} ,
"detached" : boolean ,
"enableExactlyOnceDelivery" : boolean ,
"topicMessageRetentionDuration" : string ,
"state" : enum ( State ) ,
"analyticsHubSubscriptionInfo" : {
object ( AnalyticsHubSubscriptionInfo )
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
Required. Identifier. The name of the subscription. It must have the format "projects/{project}/subscriptions/{subscription}" . {subscription} must start with a letter, and contain only letters ( [A-Za-z] ), numbers ( [0-9] ), dashes ( - ), underscores ( _ ), periods ( . ), tildes ( ~ ), plus ( + ) or percent signs ( % ). It must be between 3 and 255 characters in length, and it must not start with "goog" .
topic
string
Required. The name of the topic from which this subscription is receiving messages. Format is projects/{project}/topics/{topic} . The value of this field will be _deleted-topic_ if the topic has been deleted.
pushConfig
object ( PushConfig )
Optional. If push delivery is used with this subscription, this field is used to configure it.
bigqueryConfig
object ( BigQueryConfig )
Optional. If delivery to BigQuery is used with this subscription, this field is used to configure it.
cloudStorageConfig
object ( CloudStorageConfig )
Optional. If delivery to Google Cloud Storage is used with this subscription, this field is used to configure it.
ackDeadlineSeconds
integer
Optional. The approximate amount of time (on a best-effort basis) Pub/Sub waits for the subscriber to acknowledge receipt before resending the message. In the interval after the message is delivered and before it is acknowledged, it is considered to be outstanding . During that time period, the message will not be redelivered (on a best-effort basis).
For pull subscriptions, this value is used as the initial value for the ack deadline. To override this value for a given message, call ModifyAckDeadline with the corresponding ack_id if using non-streaming pull or send the ack_id in a StreamingModifyAckDeadlineRequest if using streaming pull. The minimum custom deadline you can specify is 10 seconds. The maximum custom deadline you can specify is 600 seconds (10 minutes). If this parameter is 0, a default value of 10 seconds is used.
For push delivery, this value is also used to set the request timeout for the call to the push endpoint.
If the subscriber never acknowledges the message, the Pub/Sub system will eventually redeliver the message.
retainAckedMessages
boolean
Optional. Indicates whether to retain acknowledged messages. If true, then messages are not expunged from the subscription's backlog, even if they are acknowledged, until they fall out of the message_retention_duration window. This must be true if you would like to Seek to a timestamp in the past to replay previously-acknowledged messages.
messageRetentionDuration
string ( Duration format)
Optional. How long to retain unacknowledged messages in the subscription's backlog, from the moment a message is published. If retain_acked_messages is true, then this also configures the retention of acknowledged messages, and thus configures how far back in time a Seek can be done. Defaults to 7 days. Cannot be more than 31 days or less than 10 minutes.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
labels
map (key: string, value: string)
Optional. See Creating and managing labels .
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
enableMessageOrdering
boolean
Optional. If true, messages published with the same ordering_key in PubsubMessage will be delivered to the subscribers in the order in which they are received by the Pub/Sub system. Otherwise, they may be delivered in any order.
expirationPolicy
object ( ExpirationPolicy )
Optional. A policy that specifies the conditions for this subscription's expiration. A subscription is considered active as long as any connected subscriber is successfully consuming messages from the subscription or is issuing operations on the subscription. If expiration_policy is not set, a default policy with ttl of 31 days will be used. The minimum allowed value for expiration_policy.ttl is 1 day. If expiration_policy is set, but expiration_policy.ttl is not set, the subscription never expires.
filter
string
Optional. An expression written in the Pub/Sub filter language . If non-empty, then only PubsubMessage s whose attributes field matches the filter are delivered on this subscription. If empty, then no messages are filtered out.
deadLetterPolicy
object ( DeadLetterPolicy )
Optional. A policy that specifies the conditions for dead lettering messages in this subscription. If dead_letter_policy is not set, dead lettering is disabled.
The Pub/Sub service account associated with this subscriptions's parent project (i.e., service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com) must have permission to Acknowledge() messages on this subscription.
retryPolicy
object ( RetryPolicy )
Optional. A policy that specifies how Pub/Sub retries message delivery for this subscription.
If not set, the default retry policy is applied. This generally implies that messages will be retried as soon as possible for healthy subscribers. RetryPolicy will be triggered on NACKs or acknowledgment deadline exceeded events for a given message.
detached
boolean
Optional. Indicates whether the subscription is detached from its topic. Detached subscriptions don't receive messages from their topic and don't retain any backlog. Pull and StreamingPull requests will return FAILED_PRECONDITION. If the subscription is a push subscription, pushes to the endpoint will not be made.
enableExactlyOnceDelivery
boolean
Optional. If true, Pub/Sub provides the following guarantees for the delivery of a message with a given value of message_id on this subscription:
The message sent to a subscriber is guaranteed not to be resent before the message's acknowledgment deadline expires.
An acknowledged message will not be resent to a subscriber.
Note that subscribers may still receive multiple copies of a message when enable_exactly_once_delivery is true if the message was published multiple times by a publisher client. These copies are considered distinct by Pub/Sub and have distinct message_id values.
topicMessageRetentionDuration
string ( Duration format)
Output only. Indicates the minimum duration for which a message is retained after it is published to the subscription's topic. If this field is set, messages published to the subscription's topic in the last topic_message_retention_duration are always available to subscribers. See the message_retention_duration field in Topic . This field is set only in responses from the server; it is ignored if it is set in any requests.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
state
enum ( State )
Output only. An output-only field indicating whether or not the subscription can receive messages.
analyticsHubSubscriptionInfo
object ( AnalyticsHubSubscriptionInfo )
Output only. Information about the associated Analytics Hub subscription. Only set if the subscription is created by Analytics Hub.
messageTransforms[]
object ( MessageTransform )
Optional. Transforms to be applied to messages before they are delivered to subscribers. Transforms are applied in the order specified.
tags
map (key: string, value: string)
Optional. Input only. Immutable. Tag keys/values directly bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing"
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
PushConfig
JSON representation
{
"pushEndpoint" : string ,
"attributes" : {
string : string ,
...
} ,
// Union field authentication_method can be only one of the following:
"oidcToken" : {
object ( OidcToken )
}
// End of list of possible types for union field authentication_method .
// Union field wrapper can be only one of the following:
"pubsubWrapper" : {
object ( PubsubWrapper )
} ,
"noWrapper" : {
object ( NoWrapper )
}
// End of list of possible types for union field wrapper .
}
Fields
pushEndpoint
string
Optional. A URL locating the endpoint to which messages should be pushed. For example, a Webhook endpoint might use https://example.com/push .
attributes
map (key: string, value: string)
Optional. Endpoint configuration attributes that can be used to control different aspects of the message delivery.
The only currently supported attribute is x-goog-version , which you can use to change the format of the pushed message. This attribute indicates the version of the data expected by the endpoint. This controls the shape of the pushed message (i.e., its fields and metadata).
If not present during the CreateSubscription call, it will default to the version of the Pub/Sub API used to make such call. If not present in a ModifyPushConfig call, its value will not be changed. GetSubscription calls will always return a valid version, even if the subscription was created without this attribute.
The only supported values for the x-goog-version attribute are:
v1beta1 : uses the push format defined in the v1beta1 Pub/Sub API.
v1 or v1beta2 : uses the push format defined in the v1 Pub/Sub API.
For example: attributes { "x-goog-version": "v1" }
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
Union field authentication_method . An authentication method used by push endpoints to verify the source of push requests. This can be used with push endpoints that are private by default to allow requests only from the Pub/Sub system, for example. This field is optional and should be set only by users interested in authenticated push. authentication_method can be only one of the following:
oidcToken
object ( OidcToken )
Optional. If specified, Pub/Sub will generate and attach an OIDC JWT token as an Authorization header in the HTTP request for every pushed message.
Union field wrapper . The format of the delivered message to the push endpoint is defined by the chosen wrapper. When unset, PubsubWrapper is used. wrapper can be only one of the following:
pubsubWrapper
object ( PubsubWrapper )
Optional. When set, the payload to the push endpoint is in the form of the JSON representation of a PubsubMessage ( https://cloud.google.com/pubsub/docs/reference/rpc/google.pubsub.v1#pubsubmessage) .
noWrapper
object ( NoWrapper )
Optional. When set, the payload to the push endpoint is not wrapped.
AttributesEntry
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
OidcToken
JSON representation
{
"serviceAccountEmail" : string ,
"audience" : string
}
Fields
serviceAccountEmail
string
Optional. Service account email used for generating the OIDC token. For more information on setting up authentication, see Push subscriptions .
audience
string
Optional. Audience to be used when generating OIDC token. The audience claim identifies the recipients that the JWT is intended for. The audience value is a single case-sensitive string. Having multiple values (array) for the audience field is not supported. More info about the OIDC JWT token audience here: https://tools.ietf.org/html/rfc7519#section-4.1.3 Note: if not specified, the Push endpoint URL will be used.
NoWrapper
JSON representation
{
"writeMetadata" : boolean
}
Fields
writeMetadata
boolean
Optional. When true, writes the Pub/Sub message metadata to x-goog-pubsub-<KEY>:<VAL> headers of the HTTP request. Writes the Pub/Sub message attributes to <KEY>:<VAL> headers of the HTTP request.
BigQueryConfig
JSON representation
{
"table" : string ,
"useTopicSchema" : boolean ,
"writeMetadata" : boolean ,
"dropUnknownFields" : boolean ,
"state" : enum ( State ) ,
"useTableSchema" : boolean ,
"serviceAccountEmail" : string
}
Fields
table
string
Optional. The name of the table to which to write data, of the form {projectId}.{datasetId}.{tableId}
useTopicSchema
boolean
Optional. When true, use the topic's schema as the columns to write to in BigQuery, if it exists. use_topic_schema and use_table_schema cannot be enabled at the same time.
writeMetadata
boolean
Optional. When true, write the subscription name, message_id, publish_time, attributes, and ordering_key to additional columns in the table. The subscription name, message_id, and publish_time fields are put in their own columns while all other message properties (other than data) are written to a JSON object in the attributes column.
dropUnknownFields
boolean
Optional. When true and use_topic_schema is true, any fields that are a part of the topic schema that are not part of the BigQuery table schema are dropped when writing to BigQuery. Otherwise, the schemas must be kept in sync and any messages with extra fields are not written and remain in the subscription's backlog.
state
enum ( State )
Output only. An output-only field that indicates whether or not the subscription can receive messages.
useTableSchema
boolean
Optional. When true, use the BigQuery table's schema as the columns to write to in BigQuery. use_table_schema and use_topic_schema cannot be enabled at the same time.
serviceAccountEmail
string
Optional. The service account to use to write to BigQuery. The subscription creator or updater that specifies this field must have iam.serviceAccounts.actAs permission on the service account. If not specified, the Pub/Sub service agent , service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com, is used.
CloudStorageConfig
JSON representation
{
"bucket" : string ,
"filenamePrefix" : string ,
"filenameSuffix" : string ,
"filenameDatetimeFormat" : string ,
"maxDuration" : string ,
"maxBytes" : string ,
"maxMessages" : string ,
"state" : enum ( State ) ,
"serviceAccountEmail" : string ,
// Union field output_format can be only one of the following:
"textConfig" : {
object ( TextConfig )
} ,
"avroConfig" : {
object ( AvroConfig )
}
// End of list of possible types for union field output_format .
}
Fields
bucket
string
Required. User-provided name for the Cloud Storage bucket. The bucket must be created by the user. The bucket name must be without any prefix like "gs://". See the bucket naming requirements .
filenamePrefix
string
Optional. User-provided prefix for Cloud Storage filename. See the object naming requirements .
filenameSuffix
string
Optional. User-provided suffix for Cloud Storage filename. See the object naming requirements . Must not end in "/".
filenameDatetimeFormat
string
Optional. User-provided format string specifying how to represent datetimes in Cloud Storage filenames. See the datetime format guidance .
maxDuration
string ( Duration format)
Optional. The maximum duration that can elapse before a new Cloud Storage file is created. Min 1 minute, max 10 minutes, default 5 minutes. May not exceed the subscription's acknowledgment deadline.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
maxBytes
string ( int64 format)
Optional. The maximum bytes that can be written to a Cloud Storage file before a new file is created. Min 1 KB, max 10 GiB. The max_bytes limit may be exceeded in cases where messages are larger than the limit.
maxMessages
string ( int64 format)
Optional. The maximum number of messages that can be written to a Cloud Storage file before a new file is created. Min 1000 messages.
state
enum ( State )
Output only. An output-only field that indicates whether or not the subscription can receive messages.
serviceAccountEmail
string
Optional. The service account to use to write to Cloud Storage. The subscription creator or updater that specifies this field must have iam.serviceAccounts.actAs permission on the service account. If not specified, the Pub/Sub service agent , service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com, is used.
Union field output_format . Defaults to text format. output_format can be only one of the following:
textConfig
object ( TextConfig )
Optional. If set, message data will be written to Cloud Storage in text format.
avroConfig
object ( AvroConfig )
Optional. If set, message data will be written to Cloud Storage in Avro format.
AvroConfig
JSON representation
{
"writeMetadata" : boolean ,
"useTopicSchema" : boolean
}
Fields
writeMetadata
boolean
Optional. When true, write the subscription name, message_id, publish_time, attributes, and ordering_key as additional fields in the output. The subscription name, message_id, and publish_time fields are put in their own fields while all other message properties other than data (for example, an ordering_key, if present) are added as entries in the attributes map.
useTopicSchema
boolean
Optional. When true, the output Cloud Storage file will be serialized using the topic schema, if it exists.
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
ExpirationPolicy
JSON representation
{
"ttl" : string
}
Fields
ttl
string ( Duration format)
Optional. Specifies the "time-to-live" duration for an associated resource. The resource expires if it is not active for a period of ttl . The definition of "activity" depends on the type of the associated resource. The minimum and maximum allowed values for ttl depend on the type of the associated resource, as well. If ttl is not set, the associated resource never expires.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
DeadLetterPolicy
JSON representation
{
"deadLetterTopic" : string ,
"maxDeliveryAttempts" : integer
}
Fields
deadLetterTopic
string
Optional. The name of the topic to which dead letter messages should be published. Format is projects/{project}/topics/{topic} .The Pub/Sub service account associated with the enclosing subscription's parent project (i.e., service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com) must have permission to Publish() to this topic.
The operation will fail if the topic does not exist. Users should ensure that there is a subscription attached to this topic since messages published to a topic with no subscriptions are lost.
maxDeliveryAttempts
integer
Optional. The maximum number of delivery attempts for any message. The value must be between 5 and 100.
The number of delivery attempts is defined as 1 + (the sum of number of NACKs and number of times the acknowledgment deadline has been exceeded for the message).
A NACK is any call to ModifyAckDeadline with a 0 deadline. Note that client libraries may automatically extend ack_deadlines.
This field will be honored on a best effort basis.
If this parameter is 0, a default value of 5 is used.
RetryPolicy
JSON representation
{
"minimumBackoff" : string ,
"maximumBackoff" : string
}
Fields
minimumBackoff
string ( Duration format)
Optional. The minimum delay between consecutive deliveries of a given message. Value should be between 0 and 600 seconds. Defaults to 10 seconds.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
maximumBackoff
string ( Duration format)
Optional. The maximum delay between consecutive deliveries of a given message. Value should be between 0 and 600 seconds. Defaults to 600 seconds.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
AnalyticsHubSubscriptionInfo
JSON representation
{
"listing" : string ,
"subscription" : string
}
Fields
listing
string
Optional. The name of the associated Analytics Hub listing resource. Pattern: "projects/{project}/locations/{location}/dataExchanges/{data_exchange}/listings/{listing}"
subscription
string
Optional. The name of the associated Analytics Hub subscription resource. Pattern: "projects/{project}/locations/{location}/subscriptions/{subscription}"
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
Destructive Hint: ✅ | Idempotent Hint: ✅ | Read Only Hint: ❌ | Open World Hint: ✅
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-13 UTC."],[],[]]
