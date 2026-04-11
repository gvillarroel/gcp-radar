---
title: "MCP Tools Reference: pubsub.googleapis.com \_|\_ Pub/Sub \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_snapshots
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/pubsub/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/pubsub/docs/reference/mcp/tools_list/list_snapshots
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
Tool: list_snapshots
List all Cloud Pub/Sub snapshots in a given project.
Parameters
project : The ID of the Google Cloud project to list snapshots in, in the format projects/{project_id} .
Returns
A list of snapshots in the specified project.
Important Notes
A snapshot is a named resource that captures the acknowledgment state of messages in an existing subscription to allow for managing acknowledgments in bulk.
A project ID must be provided.
The following sample demonstrate how to use curl to invoke the list_snapshots MCP tool.
Curl Request
curl --location 'https://pubsub.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/call",
"params": {
"name": "list_snapshots",
"arguments": {
// provide these details according to the tool' s MCP specification
}
} ,
"jsonrpc" : "2.0" ,
"id" : 1
} '
Input Schema
Request for the ListSnapshots method.
ListSnapshotsRequest
JSON representation
{
"project" : string ,
"pageSize" : integer ,
"pageToken" : string
}
Fields
project
string
Required. The name of the project in which to list snapshots. Format is projects/{project-id} .
pageSize
integer
Optional. Maximum number of snapshots to return.
pageToken
string
Optional. The value returned by the last ListSnapshotsResponse ; indicates that this is a continuation of a prior ListSnapshots call, and that the system should return the next page of data.
Output Schema
Response for the ListSnapshots method.
ListSnapshotsResponse
JSON representation
{
"snapshots" : [
{
object ( Snapshot )
}
] ,
"nextPageToken" : string
}
Fields
snapshots[]
object ( Snapshot )
Optional. The resulting snapshots.
nextPageToken
string
Optional. If not empty, indicates that there may be more snapshot that match the request; this value should be passed in a new ListSnapshotsRequest .
Snapshot
JSON representation
{
"name" : string ,
"topic" : string ,
"expireTime" : string ,
"labels" : {
string : string ,
...
}
}
Fields
name
string
Optional. The name of the snapshot.
topic
string
Optional. The name of the topic from which this snapshot is retaining messages.
expireTime
string ( Timestamp format)
Optional. The snapshot is guaranteed to exist up until this time. A newly-created snapshot expires no later than 7 days from the time of its creation. Its exact lifetime is determined at creation by the existing backlog in the source subscription. Specifically, the lifetime of the snapshot is 7 days - (age of oldest unacked message in the subscription) . For example, consider a subscription whose oldest unacked message is 3 days old. If a snapshot is created from this subscription, the snapshot -- which will always capture this 3-day-old backlog as long as the snapshot exists -- will expire in 4 days. The service will refuse to create a snapshot that would expire in less than 1 hour after creation.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
labels
map (key: string, value: string)
Optional. See Creating and managing labels .
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
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
Tool Annotations
Destructive Hint: ❌ | Idempotent Hint: ✅ | Read Only Hint: ✅ | Open World Hint: ✅
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-13 UTC."],[],[]]
