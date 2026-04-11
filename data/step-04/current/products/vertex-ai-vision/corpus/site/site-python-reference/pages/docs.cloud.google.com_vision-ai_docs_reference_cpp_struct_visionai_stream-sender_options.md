---
title: "visionai::StreamSender::Options Struct Reference \_|\_ Vertex AI Vision \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vision-ai/docs/reference/cpp/struct/visionai/stream-sender/options
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vision-ai/docs/reference/python/visionai/python
source_metadata:
  url: https://docs.cloud.google.com/vision-ai/docs/reference/cpp/struct/visionai/stream-sender/options
  title: "visionai::StreamSender::Options Struct Reference \_|\_ Vertex AI Vision\
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
visionai:: StreamSender:: Options
#include <streams.h>
Options to configure the StreamSender .
Summary
Public attributes
event_id
std::string
OPTIONAL: The specific event id to send to.
sender_id
std::string
OPTIONAL: A name to identify the sender.
service_connection_options
ServiceConnectionOptions
REQUIRED: The service endpoint and cluster to connect to.
stream_id
std::string
REQUIRED: The resource id of the specific stream to send to.
Public attributes
event_id
std :: string visionai :: StreamSender :: Options :: event_id
OPTIONAL: The specific event id to send to.
Leave empty for this to be automatically generated.
sender_id
std :: string visionai :: StreamSender :: Options :: sender_id
OPTIONAL: A name to identify the sender.
Leave empty for this to be automatically generated.
service_connection_options
ServiceConnectionOptions visionai :: StreamSender :: Options :: service_connection_options
REQUIRED: The service endpoint and cluster to connect to.
stream_id
std :: string visionai :: StreamSender :: Options :: stream_id
REQUIRED: The resource id of the specific stream to send to.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
