---
title: "Method: projects.locations.workflows.triggerPubsubExecution \_|\_ Workflows\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows/triggerPubsubExecution
knowledge_key: corpus
source_id: site-api-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/workflows/docs/reference/stdlib/overview
source_metadata:
  url: https://docs.cloud.google.com/workflows/docs/reference/executions/rest/v1/projects.locations.workflows/triggerPubsubExecution
  title: "Method: projects.locations.workflows.triggerPubsubExecution \_|\_ Workflows\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Workflows
Reference
Send feedback
Method: projects.locations.workflows.triggerPubsubExecution
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
JSON representation
Response body
Authorization Scopes
PubsubMessage
JSON representation
Try it!
Triggers a new execution using the latest revision of the given workflow by a Pub/Sub push notification.
HTTP request
POST https://workflowexecutions.googleapis.com/v1/{workflow=projects/*/locations/*/workflows/*}:triggerPubsubExecution
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
workflow
string
Required. Name of the workflow for which an execution should be created. Format: projects/{project}/locations/{location}/workflows/{workflow}
Authorization requires the following IAM permission on the specified resource workflow :
workflows.executions.create
Request body
The request body contains data with the following structure:
JSON representation
{
"subscription" : string ,
"message" : {
object ( PubsubMessage )
} ,
"GCPCloudEventsMode" : string
}
Fields
subscription
string
Required. The subscription of the Pub/Sub push notification. Format: projects/{project}/subscriptions/{sub}
message
object ( PubsubMessage )
Required. The message of the Pub/Sub push notification.
GCPCloudEventsMode
string
Required. LINT: LEGACY_NAMES The query parameter value for __GCP_CloudEventsMode, set by the Eventarc service when configuring triggers.
Response body
If successful, the response body contains an instance of Execution .
Authorization Scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
PubsubMessage
A message that is published by publishers and consumed by subscribers. The message must contain either a non-empty data field or at least one attribute. Note that client libraries represent this object differently depending on the language. See the corresponding client library documentation for more information. See quotas and limits for more information about message limits.
JSON representation
{
"data" : string ,
"attributes" : {
string : string ,
...
} ,
"messageId" : string ,
"publishTime" : string ,
"orderingKey" : string
}
Fields
data
string ( bytes format)
The message data field. If this field is empty, the message must contain at least one attribute.
A base64-encoded string.
attributes
map (key: string, value: string)
Attributes for this message. If this field is empty, the message must contain non-empty data. This can be used to filter messages on the subscription.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
messageId
string
ID of this message, assigned by the server when the message is published. Guaranteed to be unique within the topic. This value may be read by a subscriber that receives a PubsubMessage via a Pull call or a push delivery. It must not be populated by the publisher in a Publish call.
publishTime
string ( Timestamp format)
The time at which the message was published, populated by the server when it receives the Publish call. It must not be populated by the publisher in a Publish call.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z" .
orderingKey
string
If non-empty, identifies related messages for which publish order should be respected. If a Subscription has enableMessageOrdering set to true , messages published with the same non-empty orderingKey value will be delivered to subscribers in the order in which they are received by the Pub/Sub system. All PubsubMessage s published in a given PublishRequest must specify the same orderingKey value. For more information, see ordering messages .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-14 UTC."],[],[]]
