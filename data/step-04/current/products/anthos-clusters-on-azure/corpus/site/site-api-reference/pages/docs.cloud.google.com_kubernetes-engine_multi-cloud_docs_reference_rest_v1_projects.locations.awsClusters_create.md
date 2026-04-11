---
title: "Method: projects.locations.awsClusters.create \_|\_ GKE Multi-Cloud \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters/create
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters/create
  title: "Method: projects.locations.awsClusters.create \_|\_ GKE Multi-Cloud \_|\_\
    \ Google Cloud Documentation"
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
Method: projects.locations.awsClusters.create
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
IAM Permissions
GKE-on-AWS is deprecated. See https://cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/deprecations/deprecation-announcement for more details.
Creates a new AwsCluster resource on a given Google Cloud Platform project and region.
If successful, the response contains a newly created Operation resource that can be described to track the status of the operation.
HTTP request
POST https://{endpoint}/v1/{parent=projects/*/locations/*}/awsClusters
Where {endpoint} is one of the supported service endpoints .
The URLs use gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The parent location where this AwsCluster resource will be created.
Location names are formatted as projects/<project-id>/locations/<region> .
See Resource Names for more details on Google Cloud resource names.
Query parameters
Parameters
awsClusterId
string
Required. A client provided ID the resource. Must be unique within the parent resource.
The provided ID will be part of the AwsCluster resource name formatted as projects/<project-id>/locations/<region>/awsClusters/<cluster-id> .
Valid characters are /[a-z][0-9]-/ . Cannot be longer than 63 characters.
validateOnly
boolean
If set, only validate the request, but do not actually create the cluster.
Request body
The request body contains an instance of AwsCluster .
Response body
If successful, the response body contains a newly created instance of Operation .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the parent resource:
gkemulticloud.awsClusters.create
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-17 UTC."],[],[]]
