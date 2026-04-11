---
title: "Module types (2.35.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/python/docs/reference/pubsub/latest/google.cloud.pubsub_v1.types
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/python/docs/reference/pubsub/latest
source_metadata:
  url: https://docs.cloud.google.com/python/docs/reference/pubsub/latest/google.cloud.pubsub_v1.types
  title: "Module types (2.35.0) \_|\_ Python client libraries \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Developer tools
Python
Client libraries
Send feedback
Module types (2.35.0)
Stay organized with collections
Save and categorize content based on your preferences.
Version latest keyboard_arrow_down
2.35.0 (latest)
2.34.0
2.33.0
2.32.0
2.31.0
2.30.0
2.29.1
2.28.0
2.27.3
2.26.1
2.25.2
2.23.1
2.22.0
2.21.5
2.20.3
2.19.8
2.18.4
2.17.1
2.16.1
2.15.2
2.14.1
2.13.12
2.12.1
2.11.1
2.10.0
2.9.0
2.8.0
2.7.1
2.6.1
2.5.0
2.4.2
2.3.0
2.2.0
2.1.0
2.0.0
1.7.2
1.6.1
1.5.0
1.4.3
1.3.1
1.2.0
1.1.0
1.0.2
0.45.0
0.44.0
0.43.0
API documentation for pubsub_v1.types module.
Classes
AIInference
AIInference ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Configuration for making inference requests against Vertex AI
models.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
AcknowledgeRequest
AcknowledgeRequest ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Request for the Acknowledge method.
AuditConfig
API documentation for pubsub_v1.types.AuditConfig class.
AuditConfigDelta
API documentation for pubsub_v1.types.AuditConfigDelta class.
AuditData
API documentation for pubsub_v1.types.AuditData class.
AuditLogConfig
API documentation for pubsub_v1.types.AuditLogConfig class.
BatchSettings
BatchSettings (
max_bytes : int = 1000000 , max_latency : float = 0.01 , max_messages : int = 100
)
The settings for batch publishing the messages.
BigQueryConfig
BigQueryConfig ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Configuration for a BigQuery subscription.
Binding
API documentation for pubsub_v1.types.Binding class.
BindingDelta
API documentation for pubsub_v1.types.BindingDelta class.
CloudStorageConfig
CloudStorageConfig ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Configuration for a Cloud Storage subscription.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
CreateSnapshotRequest
CreateSnapshotRequest ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Request for the CreateSnapshot method.
CustomHttpPattern
API documentation for pubsub_v1.types.CustomHttpPattern class.
DeadLetterPolicy
DeadLetterPolicy ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Dead lettering is done on a best effort basis. The same
message might be dead lettered multiple times.
If validation on any of the fields fails at subscription
creation/updation, the create/update subscription request will
fail.
DeleteSnapshotRequest
DeleteSnapshotRequest ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Request for the DeleteSnapshot method.
DeleteSubscriptionRequest
DeleteSubscriptionRequest ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Request for the DeleteSubscription method.
DeleteTopicRequest
DeleteTopicRequest ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Request for the DeleteTopic method.
DescriptorProto
API documentation for pubsub_v1.types.DescriptorProto class.
DetachSubscriptionRequest
DetachSubscriptionRequest ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Request for the DetachSubscription method.
DetachSubscriptionResponse
DetachSubscriptionResponse ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Response for the DetachSubscription method.
Reserved for future use.
Duration
API documentation for pubsub_v1.types.Duration class.
Empty
API documentation for pubsub_v1.types.Empty class.
EnumDescriptorProto
API documentation for pubsub_v1.types.EnumDescriptorProto class.
EnumOptions
API documentation for pubsub_v1.types.EnumOptions class.
EnumValueDescriptorProto
API documentation for pubsub_v1.types.EnumValueDescriptorProto class.
EnumValueOptions
API documentation for pubsub_v1.types.EnumValueOptions class.
ExpirationPolicy
ExpirationPolicy ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
A policy that specifies the conditions for resource
expiration (i.e., automatic resource deletion).
ExtensionRangeOptions
API documentation for pubsub_v1.types.ExtensionRangeOptions class.
FeatureSet
API documentation for pubsub_v1.types.FeatureSet class.
FeatureSetDefaults
API documentation for pubsub_v1.types.FeatureSetDefaults class.
FieldDescriptorProto
API documentation for pubsub_v1.types.FieldDescriptorProto class.
FieldMask
API documentation for pubsub_v1.types.FieldMask class.
FieldOptions
API documentation for pubsub_v1.types.FieldOptions class.
FileDescriptorProto
API documentation for pubsub_v1.types.FileDescriptorProto class.
FileDescriptorSet
API documentation for pubsub_v1.types.FileDescriptorSet class.
FileOptions
API documentation for pubsub_v1.types.FileOptions class.
FlowControl
FlowControl (
max_bytes : int = 104857600 ,
max_messages : int = 1000 ,
max_lease_duration : float = 3600 ,
min_duration_per_lease_extension : float = 0 ,
max_duration_per_lease_extension : float = 0 ,
)
The settings for controlling the rate at which messages are pulled
with an asynchronous subscription.
GeneratedCodeInfo
API documentation for pubsub_v1.types.GeneratedCodeInfo class.
GetIamPolicyRequest
API documentation for pubsub_v1.types.GetIamPolicyRequest class.
GetSnapshotRequest
GetSnapshotRequest ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Request for the GetSnapshot method.
GetSubscriptionRequest
GetSubscriptionRequest ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Request for the GetSubscription method.
GetTopicRequest
GetTopicRequest ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Request for the GetTopic method.
Http
API documentation for pubsub_v1.types.Http class.
HttpRule
API documentation for pubsub_v1.types.HttpRule class.
IngestionDataSourceSettings
IngestionDataSourceSettings ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Settings for an ingestion data source on a topic.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
IngestionFailureEvent
IngestionFailureEvent ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Payload of the Platform Log entry sent when a failure is
encountered while ingesting.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
JavaScriptUDF
JavaScriptUDF ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
User-defined JavaScript function that can transform or filter
a Pub/Sub message.
LimitExceededBehavior
LimitExceededBehavior ( value )
The possible actions when exceeding the publish flow control limits.
ListSnapshotsRequest
ListSnapshotsRequest ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Request for the ListSnapshots method.
ListSnapshotsResponse
ListSnapshotsResponse ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Response for the ListSnapshots method.
ListSubscriptionsRequest
ListSubscriptionsRequest ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Request for the ListSubscriptions method.
ListSubscriptionsResponse
ListSubscriptionsResponse ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Response for the ListSubscriptions method.
ListTopicSnapshotsRequest
ListTopicSnapshotsRequest ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Request for the ListTopicSnapshots method.
ListTopicSnapshotsResponse
ListTopicSnapshotsResponse ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Response for the ListTopicSnapshots method.
ListTopicSubscriptionsRequest
ListTopicSubscriptionsRequest (
mapping = None , * , ignore_unknown_fields = False , ** kwargs
)
Request for the ListTopicSubscriptions method.
ListTopicSubscriptionsResponse
ListTopicSubscriptionsResponse (
mapping = None , * , ignore_unknown_fields = False , ** kwargs
)
Response for the ListTopicSubscriptions method.
ListTopicsRequest
ListTopicsRequest ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Request for the ListTopics method.
ListTopicsResponse
ListTopicsResponse ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Response for the ListTopics method.
MessageOptions
API documentation for pubsub_v1.types.MessageOptions class.
MessageStoragePolicy
MessageStoragePolicy ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
A policy constraining the storage of messages published to
the topic.
MessageTransform
MessageTransform ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
All supported message transforms types.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
MethodDescriptorProto
API documentation for pubsub_v1.types.MethodDescriptorProto class.
MethodOptions
API documentation for pubsub_v1.types.MethodOptions class.
ModifyAckDeadlineRequest
ModifyAckDeadlineRequest ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Request for the ModifyAckDeadline method.
ModifyPushConfigRequest
ModifyPushConfigRequest ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Request for the ModifyPushConfig method.
OneofDescriptorProto
API documentation for pubsub_v1.types.OneofDescriptorProto class.
OneofOptions
API documentation for pubsub_v1.types.OneofOptions class.
PlatformLogsSettings
PlatformLogsSettings ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Settings for Platform Logs produced by Pub/Sub.
Policy
API documentation for pubsub_v1.types.Policy class.
PolicyDelta
API documentation for pubsub_v1.types.PolicyDelta class.
PublishFlowControl
PublishFlowControl (
message_limit : int = 1000 ,
byte_limit : int = 10000000 ,
limit_exceeded_behavior : google . cloud . pubsub_v1 . types . LimitExceededBehavior = LimitExceededBehavior . IGNORE ,
)
The client flow control settings for message publishing.
PublishRequest
PublishRequest ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Request for the Publish method.
PublishResponse
PublishResponse ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Response for the Publish method.
PublisherOptions
PublisherOptions ( enable_message_ordering : bool = False , flow_control : google . cloud . pubsub_v1 . types . PublishFlowControl = PublishFlowControl ( message_limit = 1000 , byte_limit = 10000000 , limit_exceeded_behavior = < LimitExceededBehavior . IGNORE : 'ignore' > ), retry : OptionalRetry = _MethodDefault . _DEFAULT_VALUE , timeout : OptionalTimeout = < google . api_core . timeout . ConstantTimeout object > , enable_open_telemetry_tracing : bool = False )
The options for the publisher client.
PubsubMessage
PubsubMessage ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
A message that is published by publishers and consumed by
subscribers. The message must contain either a non-empty data field
or at least one attribute. Note that client libraries represent this
object differently depending on the language. See the corresponding
client library
documentation <https://cloud.google.com/pubsub/docs/reference/libraries> __
for more information. See quotas and limits for more information about
message limits.
PullRequest
PullRequest ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Request for the Pull method.
PullResponse
PullResponse ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Response for the Pull method.
PushConfig
PushConfig ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Configuration for a push delivery endpoint.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
ReceivedMessage
ReceivedMessage ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
A message and its corresponding acknowledgment ID.
RetryPolicy
RetryPolicy ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
A policy that specifies how Pub/Sub retries message delivery.
Retry delay will be exponential based on provided minimum and
maximum backoffs. https://en.wikipedia.org/wiki/Exponential_backoff .
RetryPolicy will be triggered on NACKs or acknowledgment deadline
exceeded events for a given message.
Retry Policy is implemented on a best effort basis. At times, the
delay between consecutive deliveries may not match the
configuration. That is, delay can be more or less than configured
backoff.
SchemaSettings
SchemaSettings ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Settings for validating messages published against a schema.
SeekRequest
SeekRequest ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Request for the Seek method.
This message has oneof _ fields (mutually exclusive fields).
For each oneof, at most one member field can be set at the same time.
Setting any member of the oneof automatically clears all other
members.
.. _oneof: https://proto-plus-python.readthedocs.io/en/stable/fields.html#oneofs-mutually-exclusive-fields
SeekResponse
SeekResponse ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Response for the Seek method (this response is empty).
ServiceDescriptorProto
API documentation for pubsub_v1.types.ServiceDescriptorProto class.
ServiceOptions
API documentation for pubsub_v1.types.ServiceOptions class.
SetIamPolicyRequest
API documentation for pubsub_v1.types.SetIamPolicyRequest class.
Snapshot
Snapshot ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
A snapshot resource. Snapshots are used in
Seek <https://cloud.google.com/pubsub/docs/replay-overview> __
operations, which allow you to manage message acknowledgments in
bulk. That is, you can set the acknowledgment state of messages in
an existing subscription to the state captured by a snapshot.
SourceCodeInfo
API documentation for pubsub_v1.types.SourceCodeInfo class.
StreamingPullRequest
StreamingPullRequest ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Request for the StreamingPull streaming RPC method. This request
is used to establish the initial stream as well as to stream
acknowledgments and ack deadline modifications from the client to
the server.
StreamingPullResponse
StreamingPullResponse ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Response for the StreamingPull method. This response is used to
stream messages from the server to the client.
Subscription
Subscription ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
A subscription resource. If none of push_config ,
bigquery_config , or cloud_storage_config is set, then the
subscriber will pull and ack messages using API methods. At most one
of these fields may be set.
TestIamPermissionsRequest
API documentation for pubsub_v1.types.TestIamPermissionsRequest class.
TestIamPermissionsResponse
API documentation for pubsub_v1.types.TestIamPermissionsResponse class.
Timestamp
API documentation for pubsub_v1.types.Timestamp class.
Topic
Topic ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
A topic resource.
UninterpretedOption
API documentation for pubsub_v1.types.UninterpretedOption class.
UpdateSnapshotRequest
UpdateSnapshotRequest ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Request for the UpdateSnapshot method.
UpdateSubscriptionRequest
UpdateSubscriptionRequest ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Request for the UpdateSubscription method.
UpdateTopicRequest
UpdateTopicRequest ( mapping = None , * , ignore_unknown_fields = False , ** kwargs )
Request for the UpdateTopic method.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-09 UTC."],[],[]]
