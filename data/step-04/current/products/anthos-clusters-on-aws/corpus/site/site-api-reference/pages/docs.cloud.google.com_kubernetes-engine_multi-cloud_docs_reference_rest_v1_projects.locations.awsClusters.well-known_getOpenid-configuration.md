---
title: "Method: projects.locations.awsClusters.well-known.getOpenid-configuration\
  \ \_|\_ GKE Multi-Cloud \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.well-known/getOpenid-configuration
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.well-known/getOpenid-configuration
  title: "Method: projects.locations.awsClusters.well-known.getOpenid-configuration\
    \ \_|\_ GKE Multi-Cloud \_|\_ Google Cloud Documentation"
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
Method: projects.locations.awsClusters.well-known.getOpenid-configuration
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
Response body
JSON representation
Authorization scopes
GKE-on-AWS is deprecated. See https://cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/deprecations/deprecation-announcement for more details.
Gets the OIDC discovery document for the cluster. See the OpenID Connect Discovery 1.0 specification for details.
HTTP request
GET https://{endpoint}/v1/{awsCluster=projects/*/locations/*/awsClusters/*}/.well-known/openid-configuration
Where {endpoint} is one of the supported service endpoints .
The URLs use gRPC Transcoding syntax.
Path parameters
Parameters
awsCluster
string
Required. The AwsCluster, which owns the OIDC discovery document. Format: projects/{project}/locations/{location}/awsClusters/{cluster}
Request body
The request body must be empty.
Response body
GKE-on-AWS is deprecated. See https://cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/deprecations/deprecation-announcement for more details.
AwsOpenIdConfig is an OIDC discovery document for the cluster. See the OpenID Connect Discovery 1.0 specification for details.
If successful, the response body contains data with the following structure:
JSON representation
{
"issuer" : string ,
"jwks_uri" : string ,
"response_types_supported" : [
string
] ,
"subject_types_supported" : [
string
] ,
"id_token_signing_alg_values_supported" : [
string
] ,
"claims_supported" : [
string
] ,
"grant_types" : [
string
]
}
Fields
issuer
string
OIDC Issuer.
jwks_uri
string
JSON Web Key uri.
response_types_supported[]
string
Supported response types.
subject_types_supported[]
string
Supported subject types.
id_token_signing_alg_values_supported[]
string
supported ID Token signing Algorithms.
claims_supported[]
string
Supported claims.
grant_types[]
string
Supported grant types.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-17 UTC."],[],[]]
