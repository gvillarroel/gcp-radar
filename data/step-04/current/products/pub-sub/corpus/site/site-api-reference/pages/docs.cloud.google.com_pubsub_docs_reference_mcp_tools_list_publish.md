---
title: "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/publish
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/pubsub/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/publish
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
Tool: publish
Publish a series of one or more messages to an existing topic.
Parameters
topic : The name of the topic to publish to in the format projects/{project_id}/topics/{topic_name} .
messages : A list of one or more messages to publish. Each message must be of type bytes . If you are given a string, you must first convert it to bytes.
Returns
A PublishResponse object containing the message IDs of the published messages, if successful.
A NOT_FOUND error if the topic does not exist.
Usage
Ensure that the topic exists by calling get_topic .
If the topic does not exist, return an error.
Create a new byte array to hold the message data.
Populate the byte array with the message data.
Call publish passing the topic name and the byte array.
Important Notes
A project ID, topic name, and message data must be provided.
The following sample demonstrate how to use curl to invoke the publish MCP tool.
Curl Request
curl --location 'https://pubsub.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/call",
"params": {
"name": "publish",
"arguments": {
// provide these details according to the tool' s MCP specification
}
} ,
"jsonrpc" : "2.0" ,
"id" : 1
} '
Input Schema
Request for the Publish method.
PublishRequest
JSON representation
{
"topic" : string ,
"messages" : [
{
object ( PubsubMessage )
}
]
}
Fields
topic
string
Required. The messages in the request will be published on this topic. Format is projects/{project}/topics/{topic} .
messages[]
object ( PubsubMessage )
Required. The messages to publish.
PubsubMessage
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
Optional. The message data field. If this field is empty, the message must contain at least one attribute.
A base64-encoded string.
attributes
map (key: string, value: string)
Optional. Attributes for this message. If this field is empty, the message must contain non-empty data. This can be used to filter messages on the subscription.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
messageId
string
ID of this message, assigned by the server when the message is published. Guaranteed to be unique within the topic. This value may be read by a subscriber that receives a PubsubMessage via a Pull call or a push delivery. It must not be populated by the publisher in a Publish call.
publishTime
string ( Timestamp format)
The time at which the message was published, populated by the server when it receives the Publish call. It must not be populated by the publisher in a Publish call.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
orderingKey
string
Optional. If non-empty, identifies related messages for which publish order should be respected. If a Subscription has enable_message_ordering set to true , messages published with the same non-empty ordering_key value will be delivered to subscribers in the order in which they are received by the Pub/Sub system. All PubsubMessage s published in a given PublishRequest must specify the same ordering_key value. For more information, see ordering messages .
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
Output Schema
Response for the Publish method.
PublishResponse
JSON representation
{
"messageIds" : [
string
]
}
Fields
messageIds[]
string
Optional. The server-assigned ID of each published message, in the same order as the messages in the request. IDs are guaranteed to be unique within the topic.
Tool Annotations
Destructive Hint: ❌ | Idempotent Hint: ❌ | Read Only Hint: ❌ | Open World Hint: ✅
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-13 UTC."],[],[]]
