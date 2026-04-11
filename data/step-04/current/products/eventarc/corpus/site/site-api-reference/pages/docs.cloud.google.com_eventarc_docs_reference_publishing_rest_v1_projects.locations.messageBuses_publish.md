---
title: "Method: projects.locations.messageBuses.publish \_|\_ Eventarc \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/eventarc/docs/reference/publishing/rest/v1/projects.locations.messageBuses/publish
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/eventarc/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/eventarc/docs/reference/publishing/rest/v1/projects.locations.messageBuses/publish
  title: "Method: projects.locations.messageBuses.publish \_|\_ Eventarc \_|\_ Google\
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
Method: projects.locations.messageBuses.publish
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
JSON representation
Response body
Authorization scopes
CloudEvent
JSON representation
CloudEventAttributeValue
JSON representation
Try it!
messageBuses.publish events to a message bus.
HTTP request
POST https://eventarcpublishing.googleapis.com/v1/{messageBus=projects/*/locations/*/messageBuses/*}:publish
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
messageBus
string
Required. The full name of the message bus to publish events to. Format: projects/{project}/locations/{location}/messageBuses/{messageBus} .
Request body
The request body contains data with the following structure:
JSON representation
{
// Union field format can be only one of the following:
"protoMessage" : {
object ( CloudEvent )
} ,
"jsonMessage" : string ,
"avroMessage" : string
// End of list of possible types for union field format .
}
Fields
Union field format .
format can be only one of the following:
protoMessage
object ( CloudEvent )
The Protobuf format of the CloudEvent being published. Specification can be found here: https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/formats/protobuf-format.md
jsonMessage
string
The JSON format of the CloudEvent being published. Specification can be found here: https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/formats/json-format.md
avroMessage
string ( bytes format)
The Avro format of the CloudEvent being published. Specification can be found here: https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/formats/avro-format.md
A base64-encoded string.
Response body
If successful, the response body is empty.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
CloudEvent
CloudEvent represents a vendor-neutral specification for defining the format of event data.
JSON representation
{
"id" : string ,
"source" : string ,
"specVersion" : string ,
"type" : string ,
"attributes" : {
string : {
object ( CloudEventAttributeValue )
} ,
...
} ,
// Union field data can be only one of the following:
"binaryData" : string ,
"textData" : string ,
"protoData" : {
"@type" : string ,
field1 : ... ,
...
}
// End of list of possible types for union field data .
}
Fields
id
string
Required. Identifies the event. Producers MUST ensure that source + id is unique for each distinct event.
source
string
Required. Identifies the context in which an event happened. URI-reference
specVersion
string
Required. The version of the CloudEvents specification which the event uses.
type
string
Required. This attribute contains a value describing the type of event related to the originating occurrence.
attributes
map (key: string, value: object ( CloudEventAttributeValue ))
Optional. Used for Optional & Extension Attributes
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
Union field data . The event payload. It should be encoded into a media format which is specified by the 'datacontenttype' attribute (e.g. application/json), and adheres to the dataschema format when those respective attributes are present. data can be only one of the following:
binaryData
string ( bytes format)
Optional. Binary data.
A base64-encoded string.
textData
string
Optional. Text data.
protoData
object
Optional. Proto data.
NOTE: The protoData field only functions as expected when the payload is specifically a CloudEvent message type, and can't be used for arbitrary protocol buffer messages. For any other protocol buffer type, you must serialize your proto message into bytes, and use the binaryData field instead.
An object containing fields of an arbitrary type. An additional field "@type" contains a URI identifying the type. Example: { "id": 1234, "@type": "types.example.com/standard/id" } .
CloudEventAttributeValue
The following abstract data types are available for use in attributes.
JSON representation
{
// Union field attr can be only one of the following:
"ceBoolean" : boolean ,
"ceInteger" : integer ,
"ceString" : string ,
"ceBytes" : string ,
"ceUri" : string ,
"ceUriRef" : string ,
"ceTimestamp" : string
// End of list of possible types for union field attr .
}
Fields
Union field attr . The value of the attribute. attr can be only one of the following:
ceBoolean
boolean
Boolean value.
ceInteger
integer
Integer value.
ceString
string
String value.
ceBytes
string ( bytes format)
Bytes value.
A base64-encoded string.
ceUri
string
URI value.
ceUriRef
string
URI-reference value.
ceTimestamp
string ( Timestamp format)
Timestamp value.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-09-04 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-09-04 UTC."],[],[]]
