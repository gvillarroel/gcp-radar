---
title: "visionai::StreamReceiver Class Reference \_|\_ Vertex AI Vision \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/vision-ai/docs/reference/cpp/class/visionai/stream-receiver
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vision-ai/docs/reference/python/visionai/python
source_metadata:
  url: https://docs.cloud.google.com/vision-ai/docs/reference/cpp/class/visionai/stream-receiver
  title: "visionai::StreamReceiver Class Reference \_|\_ Vertex AI Vision \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI Vision
Reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
visionai:: StreamReceiver
#include <streams.h>
StreamReceiver is the client through which users receive Packet s from a stream.
Summary
Each instance of the StreamReceiver represents a single connection to a specific stream. Once created, the user may repeatedly call Receive .
Example - Repeatedly receive Packet s from a specific stream.
// First populate the options.
StreamReceiver :: Options options ;
options . service_connection_options = ...;
options . stream_id = "my-stream" ;
// Create an instance of the `StreamReceiver`.
auto stream_receiver_statusor = StreamReceiver :: Create ( options );
if ( ! stream_receiver . ok ()) {
// An error occurred during the setup of the receiver.
// You can fix the problem and try again.
}
auto stream_receiver = std :: move ( * stream_receiver_statusor );
// Now you can repeatedly receive Packets.
while ( true ) {
Packet p ;
auto status = stream_receiver -> Receive ( & p );
if ( ! status . ok ()) {
// An error occurred. If the error is transient, then you can retry
// with the same receiver. Otherwise, create a new instance to retry.
}
}
// When no more packets are desired, destroy the receiver.
stream_receiver -> reset ();
Constructors and Destructors
StreamReceiver ()
StreamReceiver (const StreamReceiver &)
~StreamReceiver ()
Public static functions
Create (const Options &)
absl::StatusOr StreamReceiver > >
Create a readily usable instance of a StreamReceiver .
Public functions
Receive (Packet *packet)
absl::Status
Receive a Packet from a stream.
Receive (absl::Duration timeout, Packet *packet)
absl::Status
operator= (const StreamReceiver &)=delete
StreamReceiver &
Structs
visionai:: StreamReceiver:: Options
Options to configure the StreamReceiver .
Public static functions
Create
absl :: StatusOr std :: unique_ptr StreamReceiver > > Create (
const Options &
)
Create a readily usable instance of a StreamReceiver .
Public functions
Receive
absl :: Status Receive (
Packet * packet
)
Receive a Packet from a stream.
Returns OK on success. Otherwise, returns the following possible errors:
NOT_FOUND: This is only possible with the second overload. It is returned when there are no Packet s in the server before timeout has run out. You may immediately retry with the same receiver instance.
OUT_OF_RANGE: This indicates that the last packet in the event has been delivered. You can create a new StreamReceiver to read from a different event.
Other error codes: To retry, create a new instance of the StreamReceiver and Receive through that.
The first overload blocks until either there is a new Packet or until a non-transient error has occurred.
The second overload blocks up to timeout before returning NOT_FOUND. Otherwise, either yields a Packet or returns a non-transient error.
Receive
absl :: Status Receive (
absl :: Duration timeout ,
Packet * packet
)
StreamReceiver
StreamReceiver () = default
StreamReceiver
StreamReceiver (
const StreamReceiver &
) = delete
operator=
StreamReceiver & operator = (
const StreamReceiver &
) = delete
~StreamReceiver
~ StreamReceiver () = default
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
