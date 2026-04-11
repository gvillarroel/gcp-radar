---
title: "REST Resource: admin.projects.locations.subscriptions \_|\_ Pub/Sub Lite \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/pubsub/lite/docs/reference/rest/v1/admin.projects.locations.subscriptions
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/pubsub/lite/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/pubsub/lite/docs/reference/rest/v1/admin.projects.locations.subscriptions
  title: "REST Resource: admin.projects.locations.subscriptions \_|\_ Pub/Sub Lite\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Pub/Sub
Pub/Sub Lite
Send feedback
REST Resource: admin.projects.locations.subscriptions
Stay organized with collections
Save and categorize content based on your preferences.
Resource: Subscription
JSON representation
DeliveryConfig
JSON representation
DeliveryRequirement
ExportConfig
JSON representation
State
PubSubConfig
JSON representation
Methods
Resource: Subscription
Metadata about a subscription resource.
JSON representation
{
"name" : string ,
"topic" : string ,
"deliveryConfig" : {
object ( DeliveryConfig )
} ,
"exportConfig" : {
object ( ExportConfig )
}
}
Fields
name
string
The name of the subscription. Structured like: projects/{project_number}/locations/{location}/subscriptions/{subscriptionId}
topic
string
The name of the topic this subscription is attached to. Structured like: projects/{project_number}/locations/{location}/topics/{topicId}
deliveryConfig
object ( DeliveryConfig )
The settings for this subscription's message delivery.
exportConfig
object ( ExportConfig )
If present, messages are automatically written from the Pub/Sub Lite topic associated with this subscription to a destination.
DeliveryConfig
The settings for a subscription's message delivery.
JSON representation
{
"deliveryRequirement" : enum ( DeliveryRequirement )
}
Fields
deliveryRequirement
enum ( DeliveryRequirement )
The DeliveryRequirement for this subscription.
DeliveryRequirement
When this subscription should send messages to subscribers relative to messages persistence in storage. For details, see Creating Lite subscriptions .
Enums
DELIVERY_REQUIREMENT_UNSPECIFIED
Default value. This value is unused.
DELIVER_IMMEDIATELY
The server does not wait for a published message to be successfully written to storage before delivering it to subscribers.
DELIVER_AFTER_STORED
The server will not deliver a published message to subscribers until the message has been successfully written to storage. This will result in higher end-to-end latency, but consistent delivery.
ExportConfig
Configuration for a Pub/Sub Lite subscription that writes messages to a destination. User subscriber clients must not connect to this subscription.
JSON representation
{
"desiredState" : enum ( State ) ,
"currentState" : enum ( State ) ,
"deadLetterTopic" : string ,
// Union field destination can be only one of the following:
"pubsubConfig" : {
object ( PubSubConfig )
}
// End of list of possible types for union field destination .
}
Fields
desiredState
enum ( State )
The desired state of this export. Setting this to values other than ACTIVE and PAUSED will result in an error.
currentState
enum ( State )
Output only. The current state of the export, which may be different to the desired state due to errors. This field is output only.
deadLetterTopic
string
Optional. The name of an optional Pub/Sub Lite topic to publish messages that can not be exported to the destination. For example, the message can not be published to the Pub/Sub service because it does not satisfy the constraints documented at https://cloud.google.com/pubsub/docs/publisher .
Structured like: projects/{project_number}/locations/{location}/topics/{topicId}. Must be within the same project and location as the subscription. The topic may be changed or removed.
Union field destination . The destination to export to. Required. destination can be only one of the following:
pubsubConfig
object ( PubSubConfig )
Messages are automatically written from the Pub/Sub Lite topic associated with this subscription to a Pub/Sub topic.
State
The desired export state.
Enums
STATE_UNSPECIFIED
Default value. This value is unused.
ACTIVE
Messages are being exported.
PAUSED
Exporting messages is suspended.
PERMISSION_DENIED
Messages cannot be exported due to permission denied errors. Output only.
NOT_FOUND
Messages cannot be exported due to missing resources. Output only.
PubSubConfig
Configuration for exporting to a Pub/Sub topic.
JSON representation
{
"topic" : string
}
Fields
topic
string
The name of the Pub/Sub topic. Structured like: projects/{project_number}/topics/{topicId}. The topic may be changed.
Methods
create
Creates a new subscription.
delete
Deletes the specified subscription.
get
Returns the subscription configuration.
list
Returns the list of subscriptions for the given project.
patch
Updates properties of the specified subscription.
seek
Performs an out-of-band seek for a subscription to a specified target, which may be timestamps or named positions within the message backlog.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-17 UTC."],[],[]]
