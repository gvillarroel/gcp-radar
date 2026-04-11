---
title: "visionai::StreamReceiver::Options Struct Reference \_|\_ Vertex AI Vision\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vision-ai/docs/reference/cpp/struct/visionai/stream-receiver/options
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vision-ai/docs/reference/python/visionai/python
source_metadata:
  url: https://docs.cloud.google.com/vision-ai/docs/reference/cpp/struct/visionai/stream-receiver/options
  title: "visionai::StreamReceiver::Options Struct Reference \_|\_ Vertex AI Vision\
    \ \_|\_ Google Cloud Documentation"
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
visionai:: StreamReceiver:: Options
#include <streams.h>
Options to configure the StreamReceiver .
Summary
Public attributes
event_id
std::string
OPTIONAL: This specifies a specific event to receive from.
receiver_id
std::string
OPTIONAL: A name to identify the receiver.
service_connection_options
ServiceConnectionOptions
REQUIRED: This specifies the service endpoint and cluster to connect to.
stream_id
std::string
REQUIRED: This specifies the specific stream to receive from.
Public attributes
event_id
std :: string visionai :: StreamReceiver :: Options :: event_id
OPTIONAL: This specifies a specific event to receive from.
Leave empty to receive from the latest event.
receiver_id
std :: string visionai :: StreamReceiver :: Options :: receiver_id
OPTIONAL: A name to identify the receiver.
Leave empty to have it be automatically generatead.
service_connection_options
ServiceConnectionOptions visionai :: StreamReceiver :: Options :: service_connection_options
REQUIRED: This specifies the service endpoint and cluster to connect to.
stream_id
std :: string visionai :: StreamReceiver :: Options :: stream_id
REQUIRED: This specifies the specific stream to receive from.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
