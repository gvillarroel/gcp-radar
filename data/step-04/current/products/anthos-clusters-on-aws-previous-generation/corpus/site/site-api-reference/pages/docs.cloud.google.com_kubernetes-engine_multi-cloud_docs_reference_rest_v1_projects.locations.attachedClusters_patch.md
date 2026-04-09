---
title: "Method: projects.locations.attachedClusters.patch \_|\_ GKE Multi-Cloud \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters/patch
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.attachedClusters/patch
  title: "Method: projects.locations.attachedClusters.patch \_|\_ GKE Multi-Cloud\
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
Method: projects.locations.attachedClusters.patch
Stay organized with collections
Save and categorize content based on your preferences.
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
IAM Permissions
Updates an AttachedCluster .
HTTP request
PATCH https://{endpoint}/v1/{attachedCluster.name=projects/*/locations/*/attachedClusters/*}
Where {endpoint} is one of the supported service endpoints .
The URLs use gRPC Transcoding syntax.
Path parameters
Parameters
attachedCluster.name
string
The name of this resource.
Cluster names are formatted as projects/<project-number>/locations/<region>/attachedClusters/<cluster-id> .
See Resource Names for more details on Google Cloud Platform resource names.
Query parameters
Parameters
validateOnly
boolean
If set, only validate the request, but do not actually update the cluster.
updateMask
string ( FieldMask format)
Required. Mask of fields to update. At least one path must be supplied in this field. The elements of the repeated paths field can only include these fields from AttachedCluster :
annotations .
authorization.admin_groups .
authorization.admin_users .
binaryAuthorization.evaluation_mode .
description .
loggingConfig.component_config.enable_components .
monitoringConfig.managed_prometheus_config.enabled .
platformVersion .
proxyConfig.kubernetes_secret.name .
proxyConfig.kubernetes_secret.namespace .
securityPostureConfig.vulnerability_mode
monitoringConfig.cloud_monitoring_config.enabled
This is a comma-separated list of fully qualified names of fields. Example: "user.displayName,photo" .
Request body
The request body contains an instance of AttachedCluster .
Response body
If successful, the response body contains an instance of Operation .
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authentication Overview .
IAM Permissions
Requires the following IAM permission on the name resource:
gkemulticloud.attachedClusters.update
For more information, see the IAM documentation .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-06-17 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-17 UTC."],[],[]]
