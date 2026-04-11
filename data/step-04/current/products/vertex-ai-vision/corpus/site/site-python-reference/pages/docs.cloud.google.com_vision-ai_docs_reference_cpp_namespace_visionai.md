---
title: "visionai Namespace \_|\_ Vertex AI Vision \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vision-ai/docs/reference/cpp/namespace/visionai
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vision-ai/docs/reference/python/visionai/python
source_metadata:
  url: https://docs.cloud.google.com/vision-ai/docs/reference/cpp/namespace/visionai
  title: "visionai Namespace \_|\_ Vertex AI Vision \_|\_ Google Cloud Documentation"
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
visionai
Summary
Functions
CreateStream (const ServiceConnectionOptions & options, absl::string_view stream_id)
absl::Status
Creates a new stream resource with id stream_id .
DeleteStream (const ServiceConnectionOptions & options, absl::string_view stream_id)
absl::Status
Deletes the stream with id stream_id .
FromPacket (Packet p)
absl::StatusOr
FromPacket attempts to unmarshal a Packet into a desired C++ Type.
IngestMp4 (const ServiceConnectionOptions & options, absl::string_view stream_id, absl::string_view file_name)
absl::Status
Ingests an MP4 video file on the local file system named file_name into a stream of id stream_id .
IngestRtsp (const ServiceConnectionOptions & options, absl::string_view stream_id, absl::string_view rtsp_url)
absl::Status
Ingests an RTSP camera endpoint rtsp_url into a stream of id stream_id .
ToPacket (T && t)
absl::StatusOr
ToPacket marshals an object of C++ type T into a Packet .
Classes
visionai:: StreamReceiver
StreamReceiver is the client through which users receive Packet s from a stream.
visionai:: StreamSender
StreamSender is the client through which users send Packet s to a stream.
Structs
visionai:: ServiceConnectionOptions
ServiceConnectionOptions is a structure that contains options to connect to the Vertex AI Vision service.
Functions
CreateStream
absl :: Status CreateStream (
const ServiceConnectionOptions & options ,
absl :: string_view stream_id
)
Creates a new stream resource with id stream_id .
Details
Parameters
option
Connection options.
stream_id
The id of the stream to connect to.
Returns
OK on success. Otherwise the error indicating the cause.
DeleteStream
absl :: Status DeleteStream (
const ServiceConnectionOptions & options ,
absl :: string_view stream_id
)
Deletes the stream with id stream_id .
FromPacket
absl :: StatusOr T > FromPacket (
Packet p
)
FromPacket attempts to unmarshal a Packet into a desired C++ Type.
An error code will be returned if p cannot be extracted as the requested C++ type.
IngestMp4
absl :: Status IngestMp4 (
const ServiceConnectionOptions & options ,
absl :: string_view stream_id ,
absl :: string_view file_name
)
Ingests an MP4 video file on the local file system named file_name into a stream of id stream_id .
This call blocks until the file is fully ingested.
The file is ingested at the rate of its playback. For example, if the playback duration of the video is 1 minute, then this function will take 1 minute to complete.
Returns OK on success; otherwise, an error message telling why the ingestion could not complete successfully.
IngestRtsp
absl :: Status IngestRtsp (
const ServiceConnectionOptions & options ,
absl :: string_view stream_id ,
absl :: string_view rtsp_url
)
Ingests an RTSP camera endpoint rtsp_url into a stream of id stream_id .
This call blocks and ingests the RTSP feed indefinitely. It may complete if the RTSP feed reaches the end, or is otherwise terminated for any reason.
Returns OK on success; otherwise, an error message telling why the ingestion could not complete successfully.
ToPacket
absl :: StatusOr Packet > ToPacket (
T && t
)
ToPacket marshals an object of C++ type T into a Packet .
The set of possible C++ types that can be marshalled are listed in visionai/streams/packet/packet_codecs/codec_selector.h
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
