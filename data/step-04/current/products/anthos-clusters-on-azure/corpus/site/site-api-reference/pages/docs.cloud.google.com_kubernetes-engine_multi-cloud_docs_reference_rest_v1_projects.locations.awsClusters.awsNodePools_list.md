---
title: "Method: projects.locations.awsClusters.awsNodePools.list \_|\_ GKE Multi-Cloud\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools/list
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools/list
  title: "Method: projects.locations.awsClusters.awsNodePools.list \_|\_ GKE Multi-Cloud\
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
Method: projects.locations.awsClusters.awsNodePools.list
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
JSON representation
Authorization scopes
IAM Permissions
GKE-on-AWS is deprecated. See https://cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/deprecations/deprecation-announcement for more details.
Lists all AwsNodePool resources on a given AwsCluster .
HTTP request
GET https://{endpoint}/v1/{parent=projects/*/locations/*/awsClusters/*}/awsNodePools
Where {endpoint} is one of the supported service endpoints .
The URLs use gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The parent AwsCluster which owns this collection of AwsNodePool resources.
AwsCluster names are formatted as projects/<project-id>/locations/<region>/awsClusters/<cluster-id> .
See Resource Names for more details on Google Cloud resource names.
Query parameters
Parameters
pageSize
integer
The maximum number of items to return.
If not specified, a default value of 50 will be used by the service. Regardless of the pageSize value, the response can include a partial list and a caller should only rely on response's nextPageToken to determine if there are more instances left to be queried.
pageToken
string
The nextPageToken value returned from a previous awsNodePools.list request, if any.
Request body
The request body must be empty.
Response body
GKE-on-AWS is deprecated. See https://cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/deprecations/deprecation-announcement for more details.
Response message for AwsClusters.ListAwsNodePools method.
If successful, the response body contains data with the following structure:
JSON representation
{
"awsNodePools" : [
{
object ( AwsNodePool )
}
] ,
"nextPageToken" : string
}
Fields
awsNodePools[]
object ( AwsNodePool )
A list of AwsNodePool resources in the specified AwsCluster .
nextPageToken
string
Token to retrieve the next page of results, or empty if there are no more results in the list.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the parent resource:
gkemulticloud.awsNodePools.list
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-17 UTC."],[],[]]
