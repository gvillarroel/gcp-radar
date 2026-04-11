---
title: "Media IO \_|\_ Vertex AI Vision \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vision-ai/docs/reference/cpp/group/media-io
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vision-ai/docs/reference/python/visionai/python
source_metadata:
  url: https://docs.cloud.google.com/vision-ai/docs/reference/cpp/group/media-io
  title: "Media IO \_|\_ Vertex AI Vision \_|\_ Google Cloud Documentation"
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
Media IO
Constructs to perform media IO.
Summary
Functions
IngestMp4 (const ServiceConnectionOptions & options, absl::string_view stream_id, absl::string_view file_name)
absl::Status
Ingests an MP4 video file on the local file system named file_name into a stream of id stream_id .
IngestRtsp (const ServiceConnectionOptions & options, absl::string_view stream_id, absl::string_view rtsp_url)
absl::Status
Ingests an RTSP camera endpoint rtsp_url into a stream of id stream_id .
Functions
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
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
