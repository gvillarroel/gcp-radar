---
title: "Build and test with the C++ SDK \_|\_ Vertex AI Vision \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/vision-ai/docs/build-test-cpp
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vision-ai/docs/build-app
source_metadata:
  url: https://docs.cloud.google.com/vision-ai/docs/build-test-cpp
  title: "Build and test with the C++ SDK \_|\_ Vertex AI Vision \_|\_ Google Cloud\
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
Build and test with the C++ SDK
Stay organized with collections
Save and categorize content based on your preferences.
The C++ SDK is a tool available as part of the Vertex AI Vision SDK. You can use the
C++ SDK to programmatically manage, control, and perform different forms of
I/O with Vertex AI Vision.
This page describes how to use the C++ SDK to build and test.
Before you begin
Complete the steps to set up your Google Cloud project .
Review system requirements before trying to use the C++ SDK.
Get the Vertex AI Vision SDK source code from the publicly available
GitHub repository:
git clone https : //github.com/google/visionai.git
The C++ public SDK is located in visionai/public/streams.h . For reference
information, see the reference documentation .
Install any system dependencies you might need.
Use the create streams and ingest data topic to
create stream resources to use in the following code samples.
Build and test programs
The following example shows you how to use the C++ programming SDK to build
your own programs. The sample shows this process directly by walking through
an example for sending and receiving Packets .
These instructions show you how to build two simple programs. The first program
sends messages at regular intervals, while the second program receives the
messages that the first program sends. You can use these programs as a starting
point to build your own custom applications with the C++ SDK.
Go to the root of the source code directory.
The contents of the directory resemble the following:
bazel BUILD CONTRIBUTING . md debian deps . bzl LICENSE README . md third_party visionai [...]
Optional: Read the tutorial source code instructions.
Sender app:
cat visionai / public / tutorial / sender_app . cc
Receiver app:
cat visionai / public / tutorial / receiver_app . cc
Build the sender and receiver apps.
bazel build //visionai/public/tutorial/...
Verify the build worked. In one terminal, run the following command for the
sender app. Replace the following:
PROJECT_ID : Your project ID.
LOCATION_ID : Your location ID. For example, us-central1 . Supported regions .
More information .
STREAM_ID : The stream ID that you created in the cluster.
For example, input-1 .
./bazel-bin/visionai/public/tutorial/sender_app \
--service_endpoint visionai.googleapis.com \
--project_id PROJECT_ID \
--location_id LOCATION_ID \
--cluster_id application-cluster-0 \
--stream_id STREAM_ID
In a different terminal, run the following command for the
receiver app. Replace the following:
PROJECT_ID : Your project ID.
LOCATION_ID : Your location ID. For example, us-central1 . Supported regions .
More information .
STREAM_ID : The stream ID that you created in the cluster.
For example, input-1 .
./bazel-bin/visionai/public/tutorial/receiver_app \
--service_endpoint visionai.googleapis.com \
--project_id PROJECT_ID \
--location_id LOCATION_ID \
--cluster_id application-cluster-0 \
--stream_id STREAM_ID
What's next
Read about processing components you can add to an app in
Build an app .
Learn about output storage and processing options in
Connect app output to a data destination .
Read about how to
Search Warehouse data in the console .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
