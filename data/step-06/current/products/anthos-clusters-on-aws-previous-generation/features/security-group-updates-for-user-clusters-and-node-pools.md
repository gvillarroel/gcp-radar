---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:04:30.744Z"
product_name: "Anthos clusters on AWS (previous generation)"
product_slug: "anthos-clusters-on-aws-previous-generation"
feature_name: "Security group updates for user clusters and node pools"
feature_slug: "security-group-updates-for-user-clusters-and-node-pools"
latest_feature_date: "2021-07-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/security"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools/patch"
keywords:
  - "security"
  - "group"
  - "updates"
  - "pools"
  - "node"
  - "user"
---

# Security group updates for user clusters and node pools

Product: Anthos clusters on AWS (previous generation)
Coverage: MEDIUM

## Step 02 Summary

Anthos clusters on AWS supports updating security groups associated with user clusters and node pools.

## Extended Definition

Anthos clusters on AWS supports updating security groups associated with user clusters and node pools.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/security](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/security)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools/patch](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools/patch)

## Supporting Pages

### "REST Resource: projects.locations.awsClusters.awsNodePools \_|\_ GKE Multi-Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools)
- Source ID: `site-api-reference`
- Final score: 208
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "instanceType" : string , "rootVolume" : { object ( AwsVolumeTemplate ) } , "taints" : [ { object ( NodeTaint ) } ] , "labels" : { string : string , ... } , "tags" : { string : string , ... } , "iamInstanceProfile" : string , "imageType" : string , "sshConfig" : { object ( AwsSshConfig ) } , "securityGroupIds" : [ string ] , "proxyConfig" : { object ( AwsProxyConfig ) } , "configEncryption" : { object ( AwsConfigEncryption ) } , "instancePlacement" : { object ( AwsInstancePlacement ) } , "autoscalingMetricsCollection" : { object ( AwsAutoscalingGroupMetricsCollection ) } , "spotConfig" : { object ( SpotConfig ) } } Fields instanceType string Optional.
- Resource: AwsNodePool JSON representation AwsNodeConfig JSON representation AwsAutoscalingGroupMetricsCollection JSON representation SpotConfig JSON representation AwsNodePoolAutoscaling JSON representation State AwsNodePoolError JSON representation AwsNodeManagement JSON representation NodeKubeletConfig JSON representation UpdateSettings JSON representation SurgeSettings JSON representation Methods Resource: AwsNodePool GKE-on-AWS is deprecated.
- The IDs of additional security groups to add to nodes in this pool.
- JSON representation { "name" : string , "version" : string , "config" : { object ( AwsNodeConfig ) } , "autoscaling" : { object ( AwsNodePoolAutoscaling ) } , "subnetId" : string , "state" : enum ( State ) , "uid" : string , "reconciling" : boolean , "createTime" : string , "updateTime" : string , "etag" : string , "annotations" : { string : string , ... } , "maxPodsConstraint" : { object ( MaxPodsConstraint ) } , "errors" : [ { object ( AwsNodePoolError ) } ] , "management" : { object ( AwsNodeManagement ) } , "kubeletConfig" : { object ( NodeKubeletConfig ) } , "updateSettings" : { object ( UpdateSettings ) } } Fields name string The name of this resource.

### Security overview \_|\_ GKE on AWS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/security](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/concepts/security)
- Source ID: `site-iam-reference`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- These settings let you change the security settings of your processes such as the following: User and group running the process Available Linux capabilities Privilege escalation The default GKE on AWS node operating system, Ubuntu, uses default Docker AppArmor security policies for all containers.
- For example, if you deploy the NoUpdateServiceAccount policy on GKE on AWS, you must set the following parameters in the Constraint : parameters : allowedGroups : [] allowedUsers : - service- PROJECT NUMBER @gcp-sa-gkemulticloud. iam.gserviceaccount.com Replace PROJECT NUMBER with the number (not ID) of the project that hosts the cluster.
- For example, you can tell GKE on AWS to schedule user workloads away from most system-managed workloads, or place workloads with different trust levels on different node pools.
- Node security GKE on AWS deploys your workloads onto node pools of AWS EC2 instances.

### "Method: projects.locations.awsClusters.awsNodePools.patch \_|\_ GKE Multi-Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools/patch](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools/patch)
- Source ID: `site-api-reference`
- Final score: 180
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The elements of the repeated paths field can only include these fields from AwsNodePool : annotations . version . autoscaling.min node count . autoscaling.max node count . config.config encryption.kms key arn . config.security group ids . config.root volume.iops . config.root volume.throughput . config.root volume.kms key arn . config.root volume.volume type . config.root volume.size gib . config.proxy config . config.proxy config.secret arn . config.proxy config.secret version . config.ssh config . config.ssh config.ec2 key pair . config.instance placement.tenancy . config.iam instance profile . config.labels . config.tags . config.autoscaling metrics collection . config.autoscaling metrics collection.granularity . config.autoscaling metrics collection.metrics . config.instance type . management.auto repair . management . updateSettings . updateSettings.surge settings . updateSettings.surge settings.max surge . updateSettings.surge settings.max unavailable .
- Home Documentation Application hosting Google Kubernetes Engine (GKE) GKE Multi-Cloud GKE Multi-Cloud Reference Send feedback Method: projects.locations.awsClusters.awsNodePools.patch Stay organized with collections Save and categorize content based on your preferences.
- HTTP request PATCH https://{endpoint}/v1/{awsNodePool.name=projects/ /locations/ /awsClusters/ /awsNodePools/ } Where {endpoint} is one of the supported service endpoints .
- IAM Permissions Requires the following IAM permission on the name resource: gkemulticloud.awsNodePools.update For more information, see the IAM documentation .

