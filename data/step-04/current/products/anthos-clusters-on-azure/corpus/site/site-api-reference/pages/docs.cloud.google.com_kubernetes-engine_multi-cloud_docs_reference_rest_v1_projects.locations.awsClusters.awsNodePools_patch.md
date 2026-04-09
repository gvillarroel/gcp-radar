---
title: "Method: projects.locations.awsClusters.awsNodePools.patch \_|\_ GKE Multi-Cloud\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools/patch
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools/patch
  title: "Method: projects.locations.awsClusters.awsNodePools.patch \_|\_ GKE Multi-Cloud\
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
Method: projects.locations.awsClusters.awsNodePools.patch
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
Updates an AwsNodePool .
HTTP request
PATCH https://{endpoint}/v1/{awsNodePool.name=projects/*/locations/*/awsClusters/*/awsNodePools/*}
Where {endpoint} is one of the supported service endpoints .
The URLs use gRPC Transcoding syntax.
Path parameters
Parameters
awsNodePool.name
string
The name of this resource.
Node pool names are formatted as projects/<project-number>/locations/<region>/awsClusters/<cluster-id>/awsNodePools/<node-pool-id> .
For more details on Google Cloud resource names, see Resource Names
Query parameters
Parameters
validateOnly
boolean
If set, only validate the request, but don't actually update the node pool.
updateMask
string ( FieldMask format)
Required. Mask of fields to update. At least one path must be supplied in this field. The elements of the repeated paths field can only include these fields from AwsNodePool :
annotations .
version .
autoscaling.min_node_count .
autoscaling.max_node_count .
config.config_encryption.kms_key_arn .
config.security_group_ids .
config.root_volume.iops .
config.root_volume.throughput .
config.root_volume.kms_key_arn .
config.root_volume.volume_type .
config.root_volume.size_gib .
config.proxy_config .
config.proxy_config.secret_arn .
config.proxy_config.secret_version .
config.ssh_config .
config.ssh_config.ec2_key_pair .
config.instance_placement.tenancy .
config.iam_instance_profile .
config.labels .
config.tags .
config.autoscaling_metrics_collection .
config.autoscaling_metrics_collection.granularity .
config.autoscaling_metrics_collection.metrics .
config.instance_type .
management.auto_repair .
management .
updateSettings .
updateSettings.surge_settings .
updateSettings.surge_settings.max_surge .
updateSettings.surge_settings.max_unavailable .
This is a comma-separated list of fully qualified names of fields. Example: "user.displayName,photo" .
Request body
The request body contains an instance of AwsNodePool .
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
