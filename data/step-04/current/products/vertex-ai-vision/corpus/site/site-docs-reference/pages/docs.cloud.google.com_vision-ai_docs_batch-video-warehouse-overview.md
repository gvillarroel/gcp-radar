---
title: "Batch Video Warehouse Overview \_|\_ Vertex AI Vision \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vision-ai/docs/batch-video-warehouse-overview
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vision-ai/docs/build-app
source_metadata:
  url: https://docs.cloud.google.com/vision-ai/docs/batch-video-warehouse-overview
  title: "Batch Video Warehouse Overview \_|\_ Vertex AI Vision \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI Vision
Guides
Send feedback
Batch Video Warehouse Overview
Stay organized with collections
Save and categorize content based on your preferences.
Batch Video Warehouse (also known as Video on Demand Warehouse)
helps developers to:
Import video files from Cloud Storage.
Import video metadata.
Analyze video content embeddings.
Construct and deploy search indexes for AI-powered video search.
Important: Batch Video Warehouse does not copy or store video data.
There is no additional storage charge by importing video files.
There are a few basic steps to use a Batch Video Warehouse:
Upload and analyze videos : Create a corpus ,
upload video assets,
generate video embeddings by analyze the video assets.
Additionally, developers can define
data schema and annotations
to enrich videos with supplementary metadata.
Build and deploy search indexes : Create an index and
deploy the
index to an index endpoint for search.
A deployed index is managed by a
dedicated pool of resources that scales with the size of the index.
Search, browse, and update index data : Perform semantic
search for relevant video partitions on
a deployed index with text queries, images, or filter criteria on the
annotation metadata.
Users can also browse the corpus or index contents through
ListAssets and
ViewIndexedAssets respectively.
Batch Video Warehouse provides two ways for updating video assets in
the index:
Incremental update : Use the IndexAsset or
RemoveIndexAsset APIs to update one video at a
time. This method leads to limited throughput, but low update latency.
Batch update : Use the UpdateIndex API with the
asset_filter parameter to fully rebuild the index.
This way is preferred when you have a large number of videos to add or
remove from the index.
Supported video formats
Warehouse backends support popular formats such as MP4, AVI, FLV,
MKV, MOV, MXF, WMV, and the formats decodable by
FFmpeg .
The frontend, which is only for demo purposes, supports MP4 and MKV.
What's next
Start onboarding with the demo colab .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
