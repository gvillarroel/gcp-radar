---
title: "Method: projects.locations.awsClusters.generateAwsClusterAgentToken \_|\_\
  \ GKE Multi-Cloud \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters/generateAwsClusterAgentToken
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters/generateAwsClusterAgentToken
  title: "Method: projects.locations.awsClusters.generateAwsClusterAgentToken \_|\_\
    \ GKE Multi-Cloud \_|\_ Google Cloud Documentation"
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
Method: projects.locations.awsClusters.generateAwsClusterAgentToken
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
JSON representation
Response body
JSON representation
Authorization scopes
GKE-on-AWS is deprecated. See https://cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/deprecations/deprecation-announcement for more details.
Generates an access token for a cluster agent.
HTTP request
POST https://{endpoint}/v1/{awsCluster=projects/*/locations/*/awsClusters/*}:generateAwsClusterAgentToken
Where {endpoint} is one of the supported service endpoints .
The URLs use gRPC Transcoding syntax.
Path parameters
Parameters
awsCluster
string
Required.
Request body
The request body contains data with the following structure:
JSON representation
{
"subjectToken" : string ,
"subjectTokenType" : string ,
"version" : string ,
"nodePoolId" : string ,
"grantType" : string ,
"audience" : string ,
"scope" : string ,
"requestedTokenType" : string ,
"options" : string
}
Fields
subjectToken
string
Required.
subjectTokenType
string
Required.
version
string
Required.
nodePoolId
string
Optional.
grantType
string
Optional.
audience
string
Optional.
scope
string
Optional.
requestedTokenType
string
Optional.
options
string
Optional.
Response body
GKE-on-AWS is deprecated. See https://cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/deprecations/deprecation-announcement for more details.
If successful, the response body contains data with the following structure:
JSON representation
{
"access_token" : string ,
"expires_in" : integer ,
"token_type" : string
}
Fields
access_token
string
expires_in
integer
token_type
string
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-17 UTC."],[],[]]
