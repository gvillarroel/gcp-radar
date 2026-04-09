---
title: "Method: projects.locations.awsClusters.awsNodePools.rollback \_|\_ GKE Multi-Cloud\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools/rollback
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools/rollback
  title: "Method: projects.locations.awsClusters.awsNodePools.rollback \_|\_ GKE Multi-Cloud\
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
Method: projects.locations.awsClusters.awsNodePools.rollback
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
JSON representation
Response body
Authorization scopes
IAM Permissions
GKE-on-AWS is deprecated. See https://cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/deprecations/deprecation-announcement for more details.
Rolls back a previously aborted or failed AwsNodePool update request. Makes no changes if the last update request successfully finished. If an update request is in progress, you cannot rollback the update. You must first cancel or let it finish unsuccessfully before you can rollback.
HTTP request
POST https://{endpoint}/v1/{name=projects/*/locations/*/awsClusters/*/awsNodePools/*}:rollback
Where {endpoint} is one of the supported service endpoints .
The URLs use gRPC Transcoding syntax.
Path parameters
Parameters
name
string
Required. The name of the AwsNodePool resource to rollback.
AwsNodePool names are formatted as projects/<project-id>/locations/<region>/awsClusters/<cluster-id>/awsNodePools/<node-pool-id> .
See Resource Names for more details on Google Cloud resource names.
Request body
The request body contains data with the following structure:
JSON representation
{
"respectPdb" : boolean
}
Fields
respectPdb
boolean
Optional. Option for rollback to ignore the PodDisruptionBudget when draining the node pool nodes. Default value is false.
Response body
If successful, the response body contains an instance of Operation .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the name resource:
gkemulticloud.awsNodePools.update
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-17 UTC."],[],[]]
