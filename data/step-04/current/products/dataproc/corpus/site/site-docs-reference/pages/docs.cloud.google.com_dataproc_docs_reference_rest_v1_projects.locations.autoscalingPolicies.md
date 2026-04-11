---
title: "REST Resource: projects.locations.autoscalingPolicies \_|\_ Managed Service\
  \ for Apache Spark \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc/docs/reference
source_metadata:
  url: https://docs.cloud.google.com/dataproc/docs/reference/rest/v1/projects.locations.autoscalingPolicies
  title: "REST Resource: projects.locations.autoscalingPolicies \_|\_ Managed Service\
    \ for Apache Spark \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

"Managed Service for Apache Spark" is the new name for the product formerly known as "Dataproc on Compute Engine" (cluster deployment) and "Google Cloud Serverless for Apache Spark" (serverless deployment).
Home
Documentation
Data analytics
Managed Service for Apache Spark
Reference
Send feedback
REST Resource: projects.locations.autoscalingPolicies
Stay organized with collections
Save and categorize content based on your preferences.
Resource: AutoscalingPolicy
JSON representation
BasicAutoscalingAlgorithm
JSON representation
BasicYarnAutoscalingConfig
JSON representation
InstanceGroupAutoscalingPolicyConfig
JSON representation
ClusterType
Methods
Resource: AutoscalingPolicy
Describes an autoscaling policy for Dataproc cluster autoscaler.
JSON representation
{
"id" : string ,
"name" : string ,
"workerConfig" : {
object ( InstanceGroupAutoscalingPolicyConfig )
} ,
"secondaryWorkerConfig" : {
object ( InstanceGroupAutoscalingPolicyConfig )
} ,
"clusterType" : enum ( ClusterType ) ,
// Union field algorithm can be only one of the following:
"basicAlgorithm" : {
object ( BasicAutoscalingAlgorithm )
}
// End of list of possible types for union field algorithm .
}
Fields
id
string
Required. The policy id.
The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between 3 and 50 characters.
name
string
Output only. The "resource name" of the autoscaling policy, as described in https://cloud.google.com/apis/design/resource_names .
For projects.regions.autoscalingPolicies , the resource name of the policy has the following format: projects/{projectId}/regions/{region}/autoscalingPolicies/{policyId}
For projects.locations.autoscalingPolicies , the resource name of the policy has the following format: projects/{projectId}/locations/{location}/autoscalingPolicies/{policyId}
workerConfig
object ( InstanceGroupAutoscalingPolicyConfig )
Required. Describes how the autoscaler will operate for primary workers.
secondaryWorkerConfig
object ( InstanceGroupAutoscalingPolicyConfig )
Optional. Describes how the autoscaler will operate for secondary workers.
clusterType
enum ( ClusterType )
Optional. The type of the clusters for which this autoscaling policy is to be configured.
Union field algorithm . Autoscaling algorithm for policy. algorithm can be only one of the following:
basicAlgorithm
object ( BasicAutoscalingAlgorithm )
BasicAutoscalingAlgorithm
Basic algorithm for autoscaling.
JSON representation
{
"cooldownPeriod" : string ,
// Union field config can be only one of the following:
"yarnConfig" : {
object ( BasicYarnAutoscalingConfig )
}
// End of list of possible types for union field config .
}
Fields
cooldownPeriod
string ( Duration format)
Optional. Duration between scaling events. A scaling period starts after the update operation from the previous event has completed.
Bounds: [2m, 1d]. Default: 2m.
Union field config .
config can be only one of the following:
yarnConfig
object ( BasicYarnAutoscalingConfig )
Optional. YARN autoscaling configuration.
BasicYarnAutoscalingConfig
Basic autoscaling configurations for YARN.
JSON representation
{
"gracefulDecommissionTimeout" : string ,
"scaleUpFactor" : number ,
"scaleDownFactor" : number ,
"scaleUpMinWorkerFraction" : number ,
"scaleDownMinWorkerFraction" : number
}
Fields
gracefulDecommissionTimeout
string ( Duration format)
Required. Timeout for YARN graceful decommissioning of Node Managers. Specifies the duration to wait for jobs to complete before forcefully removing workers (and potentially interrupting jobs). Only applicable to downscaling operations.
Bounds: [0s, 1d].
scaleUpFactor
number
Required. Fraction of average YARN pending memory in the last cooldown period for which to add workers. A scale-up factor of 1.0 will result in scaling up so that there is no pending memory remaining after the update (more aggressive scaling). A scale-up factor closer to 0 will result in a smaller magnitude of scaling up (less aggressive scaling). See How autoscaling works for more information.
Bounds: [0.0, 1.0].
scaleDownFactor
number
Required. Fraction of average YARN pending memory in the last cooldown period for which to remove workers. A scale-down factor of 1 will result in scaling down so that there is no available memory remaining after the update (more aggressive scaling). A scale-down factor of 0 disables removing workers, which can be beneficial for autoscaling a single job. See How autoscaling works for more information.
Bounds: [0.0, 1.0].
scaleUpMinWorkerFraction
number
Optional. Minimum scale-up threshold as a fraction of total cluster size before scaling occurs. For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must recommend at least a 2-worker scale-up for the cluster to scale. A threshold of 0 means the autoscaler will scale up on any recommended change.
Bounds: [0.0, 1.0]. Default: 0.0.
scaleDownMinWorkerFraction
number
Optional. Minimum scale-down threshold as a fraction of total cluster size before scaling occurs. For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must recommend at least a 2 worker scale-down for the cluster to scale. A threshold of 0 means the autoscaler will scale down on any recommended change.
Bounds: [0.0, 1.0]. Default: 0.0.
InstanceGroupAutoscalingPolicyConfig
Configuration for the size bounds of an instance group, including its proportional size to other groups.
JSON representation
{
"minInstances" : integer ,
"maxInstances" : integer ,
"weight" : integer
}
Fields
minInstances
integer
Optional. Minimum number of instances for this group.
Primary workers - Bounds: [2, maxInstances]. Default: 2. Secondary workers - Bounds: [0, maxInstances]. Default: 0.
maxInstances
integer
Required. Maximum number of instances for this group. Required for primary workers. Note that by default, clusters will not use secondary workers. Required for secondary workers if the minimum secondary instances is set.
Primary workers - Bounds: [minInstances, ). Secondary workers - Bounds: [minInstances, ). Default: 0.
weight
integer
Optional. Weight for the instance group, which is used to determine the fraction of total workers in the cluster from this instance group. For example, if primary workers have weight 2, and secondary workers have weight 1, the cluster will have approximately 2 primary workers for each secondary worker.
The cluster may not reach the specified balance if constrained by min/max bounds or other autoscaling settings. For example, if maxInstances for secondary workers is 0, then only primary workers will be added. The cluster can also be out of balance when created.
If weight is not set on any instance group, the cluster will default to equal weight for all groups: the cluster will attempt to maintain an equal number of workers in each group within the configured size bounds for each group. If weight is set for one group only, the cluster will default to zero weight on the unset group. For example if weight is set only on primary workers, the cluster will use primary workers only and no secondary workers.
ClusterType
The type of the clusters for which this autoscaling policy is to be configured.
Enums
CLUSTER_TYPE_UNSPECIFIED
Not set.
STANDARD
Standard dataproc cluster with a minimum of two primary workers.
ZERO_SCALE
Clusters that can use only secondary workers and be scaled down to zero secondary worker nodes.
Methods
create
Creates new autoscaling policy.
delete
Deletes an autoscaling policy.
get
Retrieves autoscaling policy.
getIamPolicy
Gets the access control policy for a resource.
list
Lists autoscaling policies in the project.
setIamPolicy
Sets the access control policy on the specified resource.
testIamPermissions
Returns permissions that a caller has on the specified resource.
update
Updates (replaces) autoscaling policy.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-10-15 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-15 UTC."],[],[]]
