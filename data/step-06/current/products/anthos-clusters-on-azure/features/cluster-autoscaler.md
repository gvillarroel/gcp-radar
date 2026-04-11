---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:58:55.733Z"
product_name: "Anthos clusters on Azure"
product_slug: "anthos-clusters-on-azure"
feature_name: "Cluster Autoscaler"
feature_slug: "cluster-autoscaler"
latest_feature_date: "2021-06-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools/patch"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/deprecations/deprecation-announcement"
keywords:
  - "node auto scaling"
  - "autoscaler configuration"
  - "scale node pools"
  - "node pool autoscaling"
  - "autoscaling"
  - "CA"
  - "Cluster Autoscaler"
  - "cluster autoscaler"
---

# Cluster Autoscaler

Product: Anthos clusters on Azure
Coverage: LOW

## Step 02 Summary

Anthos clusters on Azure added support for Cluster Autoscaler.

## Extended Definition

In the provided Google Cloud excerpts, Cluster Autoscaler is represented as node-pool autoscaling configuration in the GKE Multi-Cloud API, where the AwsNodePoolAutoscaling object carries information used by the autoscaler to adjust node-pool size based on cluster usage. The autoscaler behavior is configurable through autoscaling fields (including minimum and maximum node count) exposed on the node-pool resource and modifiable via the awsNodePools patch method. The cited Azure-specific page does not include direct autoscaler details, so the evidence is mainly for multi-cloud AWS node-pool API semantics rather than explicitly for Anthos clusters on Azure.

## Evidence Summary

The first two pages provide autoscaling-related API fields and update behavior for node pools, while the deprecation announcement page does not substantiate the Cluster Autoscaler feature itself.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools/patch](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools/patch)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/deprecations/deprecation-announcement](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/deprecations/deprecation-announcement)

## Supporting Pages

### "REST Resource: projects.locations.awsClusters.awsNodePools \_|\_ GKE Multi-Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools)
- Source ID: `site-api-reference`
- Final score: 78
- Re-rank relevance: WEAK
- Re-rank rationale: The page defines an AwsNodePool `autoscaling` object in a GKE Multi-Cloud REST schema, but it is focused on AWS node pools and does not document Anthos on Azure Cluster Autoscaler behavior.

Evidence snippets:
- AwsNodePoolAutoscaling contains information required by cluster autoscaler to adjust the size of the node pool to the current cluster usage.
- JSON representation { "instanceType" : string , "rootVolume" : { object ( AwsVolumeTemplate ) } , "taints" : [ { object ( NodeTaint ) } ] , "labels" : { string : string , ... } , "tags" : { string : string , ... } , "iamInstanceProfile" : string , "imageType" : string , "sshConfig" : { object ( AwsSshConfig ) } , "securityGroupIds" : [ string ] , "proxyConfig" : { object ( AwsProxyConfig ) } , "configEncryption" : { object ( AwsConfigEncryption ) } , "instancePlacement" : { object ( AwsInstancePlacement ) } , "autoscalingMetricsCollection" : { object ( AwsAutoscalingGroupMetricsCollection ) } , "spotConfig" : { object ( SpotConfig ) } } Fields instanceType string Optional.
- JSON representation { "name" : string , "version" : string , "config" : { object ( AwsNodeConfig ) } , "autoscaling" : { object ( AwsNodePoolAutoscaling ) } , "subnetId" : string , "state" : enum ( State ) , "uid" : string , "reconciling" : boolean , "createTime" : string , "updateTime" : string , "etag" : string , "annotations" : { string : string , ... } , "maxPodsConstraint" : { object ( MaxPodsConstraint ) } , "errors" : [ { object ( AwsNodePoolError ) } ] , "management" : { object ( AwsNodeManagement ) } , "kubeletConfig" : { object ( NodeKubeletConfig ) } , "updateSettings" : { object ( UpdateSettings ) } } Fields name string The name of this resource.
- Resource: AwsNodePool JSON representation AwsNodeConfig JSON representation AwsAutoscalingGroupMetricsCollection JSON representation SpotConfig JSON representation AwsNodePoolAutoscaling JSON representation State AwsNodePoolError JSON representation AwsNodeManagement JSON representation NodeKubeletConfig JSON representation UpdateSettings JSON representation SurgeSettings JSON representation Methods Resource: AwsNodePool GKE-on-AWS is deprecated.

### "Method: projects.locations.awsClusters.awsNodePools.patch \_|\_ GKE Multi-Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools/patch](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools/patch)
- Source ID: `site-api-reference`
- Final score: 70
- Re-rank relevance: WEAK
- Re-rank rationale: The page is an AwsNodePool patch API reference that includes `autoscaling.min` and `autoscaling.max` fields, but it does not describe Cluster Autoscaler for Anthos clusters on Azure.

Evidence snippets:
- The elements of the repeated paths field can only include these fields from AwsNodePool : annotations . version . autoscaling.min node count . autoscaling.max node count . config.config encryption.kms key arn . config.security group ids . config.root volume.iops . config.root volume.throughput . config.root volume.kms key arn . config.root volume.volume type . config.root volume.size gib . config.proxy config . config.proxy config.secret arn . config.proxy config.secret version . config.ssh config . config.ssh config.ec2 key pair . config.instance placement.tenancy . config.iam instance profile . config.labels . config.tags . config.autoscaling metrics collection . config.autoscaling metrics collection.granularity . config.autoscaling metrics collection.metrics . config.instance type . management.auto repair . management . updateSettings . updateSettings.surge settings . updateSettings.surge settings.max surge . updateSettings.surge settings.max unavailable .
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE Multi-Cloud GKE Multi-Cloud Reference Send feedback Method: projects.locations.awsClusters.awsNodePools.patch Stay organized with collections Save and categorize content based on your preferences.
- HTTP request PATCH https://{endpoint}/v1/{awsNodePool.name=projects/ /locations/ /awsClusters/ /awsNodePools/ } Where {endpoint} is one of the supported service endpoints .
- Authorization scopes Requires the following OAuth scope: https://www.googleapis.com/auth/cloud-platform For more information, see the Authentication Overview .

### GKE on Azure deprecation announcement \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/deprecations/deprecation-announcement](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/deprecations/deprecation-announcement)
- Source ID: `site-docs-root`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE on Azure Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- To ensure identical configurations across your old and new clusters, you can use Config Sync or another GitOps solution.
- Contact Cloud Customer Care Your account's lead customer engineer is your best contact point for deprecation support.
- Alternatively, you can file a support case through Google Cloud console or contact Cloud Customer Care .

