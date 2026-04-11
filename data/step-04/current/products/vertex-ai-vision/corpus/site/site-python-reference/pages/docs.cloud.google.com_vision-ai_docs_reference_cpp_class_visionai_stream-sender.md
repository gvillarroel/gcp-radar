---
title: "visionai::StreamSender Class Reference \_|\_ Vertex AI Vision \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/vision-ai/docs/reference/cpp/class/visionai/stream-sender
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vision-ai/docs/reference/python/visionai/python
source_metadata:
  url: https://docs.cloud.google.com/vision-ai/docs/reference/cpp/class/visionai/stream-sender
  title: "visionai::StreamSender Class Reference \_|\_ Vertex AI Vision \_|\_ Google\
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
visionai:: StreamSender
#include <streams.h>
StreamSender is the client through which users send Packet s to a stream.
Summary
Each instance of the StreamSender represents a single connection to a specific stream. Once created, the user may repeatedly call Send with new Packet s that they want to send to the stream.
Example - Repeatedly sending Packet s to a specific stream.
// First populate the options.
StreamSender :: Options options ;
options . service_connection_options = ...;
options . stream_id = "my-stream" ;
// Create an instance of the `StreamSender`.
auto stream_sender_statusor = StreamSender :: Create ( options );
if ( ! stream_sender . ok ()) {
// An error occurred during the setup of the sender.
// You can fix the problem and try again.
}
auto stream_sender = std :: move ( * stream_sender_statusor );
// Now you can repeatedly send Packets.
while ( true ) {
// Get a new packet from some function or generation mechanism.
Packet p = SomeFunctionThatGetsNewPacketsToSend ();
auto status = stream_sender -> Send ( std :: move ( p ));
if ( ! status . ok ()) {
// An error occurred.
// To retry, you must create a new instance of the sender.
}
}
// When there are no more packets to send, remember to destroy the sender.
stream_sender -> reset ();
Constructors and Destructors
StreamSender ()
StreamSender (const StreamSender &)
~StreamSender ()
Public static functions
Create (const Options &)
absl::StatusOr StreamSender > >
Create a readily usable instance of a StreamSender .
Public functions
Send (Packet packet)
absl::Status
Send the given packet to a stream.
Send (Packet packet, absl::Duration timeout)
absl::Status
Send the given packet to a stream with a timeout .
operator= (const StreamSender &)=delete
StreamSender &
Structs
visionai:: StreamSender:: Options
Options to configure the StreamSender .
Public static functions
Create
absl :: StatusOr std :: unique_ptr StreamSender > > Create (
const Options &
)
Create a readily usable instance of a StreamSender .
Public functions
Send
absl :: Status Send (
Packet packet
)
Send the given packet to a stream.
Returns OK on success. Otherwise, returns an error status.
To retry on a case of failure, you must create a new instance of the StreamSender and Send through that.
The first overload blocks until the status of the Send is known. The second overload blocks up to timeout before returning CANCELLED.
Send
absl :: Status Send (
Packet packet ,
absl :: Duration timeout
)
Send the given packet to a stream with a timeout .
Returns OK on success. Otherwise, returns an error status.
To retry on a case of failure, you must create a new instance of the StreamSender and Send through that.
The first overload blocks until the status of the Send is known. The second overload blocks up to timeout before returning CANCELLED.
StreamSender
StreamSender () = default
StreamSender
StreamSender (
const StreamSender &
) = delete
operator=
StreamSender & operator = (
const StreamSender &
) = delete
~StreamSender
~ StreamSender () = default
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
