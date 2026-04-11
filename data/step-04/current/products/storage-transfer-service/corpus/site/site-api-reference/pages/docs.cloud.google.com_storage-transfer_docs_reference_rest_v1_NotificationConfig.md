---
title: "NotificationConfig \_|\_ Storage Transfer Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/NotificationConfig
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/storage-transfer/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/storage-transfer/docs/reference/rest/v1/NotificationConfig
  title: "NotificationConfig \_|\_ Storage Transfer Service \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
Storage Transfer Service
Reference
Send feedback
NotificationConfig
Stay organized with collections
Save and categorize content based on your preferences.
Specification to configure notifications published to Pub/Sub. Notifications are published to the customer-provided topic using the following PubsubMessage.attributes :
"eventType" : one of the EventType values
"payloadFormat" : one of the PayloadFormat values
"projectId" : the projectId of the TransferOperation
"transferJobName" : the transferJobName of the TransferOperation
"transferOperationName" : the name of the TransferOperation
The PubsubMessage.data contains a TransferOperation resource formatted according to the specified PayloadFormat .
JSON representation
{
"pubsubTopic" : string ,
"eventTypes" : [
enum ( EventType )
] ,
"payloadFormat" : enum ( PayloadFormat )
}
Fields
pubsubTopic
string
Required. The Topic.name of the Pub/Sub topic to which to publish notifications. Must be of the format: projects/{project}/topics/{topic} . Not matching this format results in an INVALID_ARGUMENT error.
eventTypes[]
enum ( EventType )
Event types for which a notification is desired. If empty, send notifications for all event types.
payloadFormat
enum ( PayloadFormat )
Required. The desired format of the notification message payloads.
EventType
Enum for specifying event types for which notifications are to be published.
Additional event types may be added in the future. Clients should either safely ignore unrecognized event types or explicitly specify which event types they are prepared to accept.
Enums
EVENT_TYPE_UNSPECIFIED
Illegal value, to avoid allowing a default.
TRANSFER_OPERATION_SUCCESS
TransferOperation completed with status SUCCESS .
TRANSFER_OPERATION_FAILED
TransferOperation completed with status FAILED .
TRANSFER_OPERATION_ABORTED
TransferOperation completed with status ABORTED .
PayloadFormat
Enum for specifying the format of a notification message's payload.
Enums
PAYLOAD_FORMAT_UNSPECIFIED
Illegal value, to avoid allowing a default.
NONE
No payload is included with the notification.
JSON
TransferOperation is formatted as a JSON response , in application/json.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-07-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-09 UTC."],[],[]]
