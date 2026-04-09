---
title: "Method: projects.locations.attachedClusters.get \_|\_ GKE Multi-Cloud \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters/get
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters/get
  title: "Method: projects.locations.attachedClusters.get \_|\_ GKE Multi-Cloud \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
GKE Multi-Cloud
GKE Multi-Cloud Reference
Send feedback
Method: projects.locations.attachedClusters.get
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
Response body
Authorization scopes
IAM Permissions
Describes a specific AttachedCluster resource.
HTTP request
GET https://{endpoint}/v1/{name=projects/*/locations/*/attachedClusters/*}
Where {endpoint} is one of the supported service endpoints .
The URLs use gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Required. The name of the AttachedCluster resource to describe.
AttachedCluster names are formatted as projects/<project-id>/locations/<region>/attachedClusters/<cluster-id> .
See Resource Names for more details on Google Cloud Platform resource names.
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of AttachedCluster .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the name resource:
gkemulticloud.attachedClusters.get
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-05-21 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-05-21 UTC."],[],[]]
