---
title: "Control \_|\_ Vertex AI Vision \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vision-ai/docs/reference/cpp/group/control
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vision-ai/docs/reference/python/visionai/python
source_metadata:
  url: https://docs.cloud.google.com/vision-ai/docs/reference/cpp/group/control
  title: "Control \_|\_ Vertex AI Vision \_|\_ Google Cloud Documentation"
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
Control
Constructs for controlling service resources.
Summary
Functions
CreateStream (const ServiceConnectionOptions & options, absl::string_view stream_id)
absl::Status
Creates a new stream resource with id stream_id .
DeleteStream (const ServiceConnectionOptions & options, absl::string_view stream_id)
absl::Status
Deletes the stream with id stream_id .
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
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
