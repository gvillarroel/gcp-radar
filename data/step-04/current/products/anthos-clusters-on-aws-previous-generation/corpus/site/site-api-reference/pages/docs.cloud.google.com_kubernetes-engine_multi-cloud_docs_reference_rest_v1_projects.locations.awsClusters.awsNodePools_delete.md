---
title: "Method: projects.locations.awsClusters.awsNodePools.delete \_|\_ GKE Multi-Cloud\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools/delete
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools/delete
  title: "Method: projects.locations.awsClusters.awsNodePools.delete \_|\_ GKE Multi-Cloud\
    \ \_|\_ Google Cloud Documentation"
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
Method: projects.locations.awsClusters.awsNodePools.delete
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
Deletes a specific AwsNodePool resource.
If successful, the response contains a newly created Operation resource that can be described to track the status of the operation.
HTTP request
DELETE https://{endpoint}/v1/{name=projects/*/locations/*/awsClusters/*/awsNodePools/*}
Where {endpoint} is one of the supported service endpoints .
The URLs use gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Required. The resource name the AwsNodePool to delete.
AwsNodePool names are formatted as projects/<project-id>/locations/<region>/awsClusters/<cluster-id>/awsNodePools/<node-pool-id> .
See Resource Names for more details on Google Cloud resource names.
Query parameters
Parameters
validateOnly
boolean
If set, only validate the request, but do not actually delete the node pool.
allowMissing
boolean
If set to true, and the AwsNodePool resource is not found, the request will succeed but no action will be taken on the server and a completed Operation will be returned.
Useful for idempotent deletion.
ignoreErrors
boolean
Optional. If set to true, the deletion of AwsNodePool resource will succeed even if errors occur during deleting in node pool resources. Using this parameter may result in orphaned resources in the node pool.
etag
string
The current ETag of the AwsNodePool .
Allows clients to perform deletions through optimistic concurrency control.
If the provided ETag does not match the current etag of the node pool, the request will fail and an ABORTED error will be returned.
Request body
The request body must be empty.
Response body
If successful, the response body contains an instance of Operation .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the name resource:
gkemulticloud.awsNodePools.delete
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-17 UTC."],[],[]]
