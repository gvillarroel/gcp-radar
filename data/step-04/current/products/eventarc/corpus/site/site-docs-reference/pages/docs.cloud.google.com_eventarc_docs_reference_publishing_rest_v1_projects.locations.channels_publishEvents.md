---
title: "Method: projects.locations.channels.publishEvents \_|\_ Eventarc \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/eventarc/docs/reference/publishing/rest/v1/projects.locations.channels/publishEvents
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/eventarc/docs/apis
source_metadata:
  url: https://docs.cloud.google.com/eventarc/docs/reference/publishing/rest/v1/projects.locations.channels/publishEvents
  title: "Method: projects.locations.channels.publishEvents \_|\_ Eventarc \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Eventarc
Reference
Send feedback
Method: projects.locations.channels.publishEvents
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
JSON representation
Response body
Authorization scopes
Try it!
messageBuses.publish events to a subscriber's channel.
HTTP request
POST https://eventarcpublishing.googleapis.com/v1/{channel=projects/*/locations/*/channels/*}:publishEvents
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
channel
string
The full name of the channel to publish to. For example: projects/{project}/locations/{location}/channels/{channel-id} .
Request body
The request body contains data with the following structure:
JSON representation
{
"events" : [
{
"@type" : string ,
field1 : ... ,
...
}
] ,
"textEvents" : [
string
]
}
Fields
events[]
object
The CloudEvents v1.0 events to publish. No other types are allowed. If this field is set, then the textEvents fields must not be set.
An object containing fields of an arbitrary type. An additional field "@type" contains a URI identifying the type. Example: { "id": 1234, "@type": "types.example.com/standard/id" } .
textEvents[]
string
The text representation of events to publish. CloudEvent v1.0 in JSON format is the only allowed type. Refer to https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/formats/json-format.md for specification. If this field is set, then the events fields must not be set.
Response body
If successful, the response body is empty.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-13 UTC."],[],[]]
