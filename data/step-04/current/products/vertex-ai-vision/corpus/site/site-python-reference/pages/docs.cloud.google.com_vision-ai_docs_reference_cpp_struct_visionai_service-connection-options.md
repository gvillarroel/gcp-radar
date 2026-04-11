---
title: "visionai::ServiceConnectionOptions Struct Reference \_|\_ Vertex AI Vision\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vision-ai/docs/reference/cpp/struct/visionai/service-connection-options
knowledge_key: corpus
source_id: site-python-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vision-ai/docs/reference/python/visionai/python
source_metadata:
  url: https://docs.cloud.google.com/vision-ai/docs/reference/cpp/struct/visionai/service-connection-options
  title: "visionai::ServiceConnectionOptions Struct Reference \_|\_ Vertex AI Vision\
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
visionai:: ServiceConnectionOptions
#include <streams.h>
ServiceConnectionOptions is a structure that contains options to connect to the Vertex AI Vision service.
Summary
For example, if you have a Vision AI cluster created at
visionai.googleapis.com/projects/my-project/locations/us-central1-a/clusters/my-cluster
then you will set the following:
service_endpoint = "visionai.googleapis.com"
project_id = "my-project"
location_id = "us-central1-a"
cluster_id = "my-cluster"
Public attributes
cluster_id
std::string
The specific cluster-id of Vertex AI Vision.
location_id
std::string
The Google Cloud location-id.
project_id
std::string
The Google Cloud project-id.
service_endpoint
std::string
The service endpoint of Vertex AI Vision.
Public attributes
cluster_id
std :: string visionai :: ServiceConnectionOptions :: cluster_id
The specific cluster-id of Vertex AI Vision.
Clusters are automatically created the first time you deploy a Vertex AI Vision application.
location_id
std :: string visionai :: ServiceConnectionOptions :: location_id
The Google Cloud location-id.
project_id
std :: string visionai :: ServiceConnectionOptions :: project_id
The Google Cloud project-id.
service_endpoint
std :: string visionai :: ServiceConnectionOptions :: service_endpoint
The service endpoint of Vertex AI Vision.
Most commonly, this is simply visionai.googleapis.com.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-27 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
