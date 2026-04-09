---
title: "Method: projects.locations.attachedClusters.import \_|\_ GKE Multi-Cloud \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters/import
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters/import
  title: "Method: projects.locations.attachedClusters.import \_|\_ GKE Multi-Cloud\
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
Method: projects.locations.attachedClusters.import
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Request body
JSON representation
Response body
Authorization scopes
IAM Permissions
Imports creates a new AttachedCluster resource by importing an existing Fleet Membership resource.
Attached Clusters created before the introduction of the Anthos Multi-Cloud API can be imported through this method.
If successful, the response contains a newly created Operation resource that can be described to track the status of the operation.
HTTP request
POST https://{endpoint}/v1/{parent=projects/*/locations/*}/attachedClusters:import
Where {endpoint} is one of the supported service endpoints .
The URLs use gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Required. The parent location where this AttachedCluster resource will be created.
Location names are formatted as projects/<project-id>/locations/<region> .
See Resource Names for more details on Google Cloud resource names.
Request body
The request body contains data with the following structure:
JSON representation
{
"validateOnly" : boolean ,
"fleetMembership" : string ,
"platformVersion" : string ,
"distribution" : string ,
"proxyConfig" : {
object ( AttachedProxyConfig )
}
}
Fields
validateOnly
boolean
If set, only validate the request, but do not actually import the cluster.
fleetMembership
string
Required. The name of the fleet membership resource to import.
platformVersion
string
Required. The platform version for the cluster (e.g. 1.19.0-gke.1000 ).
You can list all supported versions on a given Google Cloud region by calling locations.getAttachedServerConfig .
distribution
string
Required. The Kubernetes distribution of the underlying attached cluster.
Supported values: ["eks", "aks", "generic"].
proxyConfig
object ( AttachedProxyConfig )
Optional. Proxy configuration for outbound HTTP(S) traffic.
Response body
If successful, the response body contains an instance of Operation .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the parent resource:
gkemulticloud.attachedClusters.import
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-17 UTC."],[],[]]
