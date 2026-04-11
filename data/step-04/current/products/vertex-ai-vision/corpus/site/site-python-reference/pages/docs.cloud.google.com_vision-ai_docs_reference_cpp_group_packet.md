---
title: "Packet \_|\_ Vertex AI Vision \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vision-ai/docs/reference/cpp/group/packet
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vision-ai/docs/reference/python/visionai/python
source_metadata:
  url: https://docs.cloud.google.com/vision-ai/docs/reference/cpp/group/packet
  title: "Packet \_|\_ Vertex AI Vision \_|\_ Google Cloud Documentation"
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
Packet
Constructs for working with packets.
Summary
Functions
FromPacket (Packet p)
absl::StatusOr
FromPacket attempts to unmarshal a Packet into a desired C++ Type.
ToPacket (T && t)
absl::StatusOr
ToPacket marshals an object of C++ type T into a Packet .
Functions
FromPacket
absl :: StatusOr T > FromPacket (
Packet p
)
FromPacket attempts to unmarshal a Packet into a desired C++ Type.
An error code will be returned if p cannot be extracted as the requested C++ type.
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
