---
title: "REST Resource: projects.locations.awsClusters.awsNodePools \_|\_ GKE Multi-Cloud\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.awsNodePools
  title: "REST Resource: projects.locations.awsClusters.awsNodePools \_|\_ GKE Multi-Cloud\
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
REST Resource: projects.locations.awsClusters.awsNodePools
Stay organized with collections
Save and categorize content based on your preferences.
Resource: AwsNodePool
JSON representation
AwsNodeConfig
JSON representation
AwsAutoscalingGroupMetricsCollection
JSON representation
SpotConfig
JSON representation
AwsNodePoolAutoscaling
JSON representation
State
AwsNodePoolError
JSON representation
AwsNodeManagement
JSON representation
NodeKubeletConfig
JSON representation
UpdateSettings
JSON representation
SurgeSettings
JSON representation
Methods
Resource: AwsNodePool
GKE-on-AWS is deprecated. See https://cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/deprecations/deprecation-announcement for more details.
An Anthos node pool running on AWS.
JSON representation
{
"name" : string ,
"version" : string ,
"config" : {
object ( AwsNodeConfig )
} ,
"autoscaling" : {
object ( AwsNodePoolAutoscaling )
} ,
"subnetId" : string ,
"state" : enum ( State ) ,
"uid" : string ,
"reconciling" : boolean ,
"createTime" : string ,
"updateTime" : string ,
"etag" : string ,
"annotations" : {
string : string ,
...
} ,
"maxPodsConstraint" : {
object ( MaxPodsConstraint )
} ,
"errors" : [
{
object ( AwsNodePoolError )
}
] ,
"management" : {
object ( AwsNodeManagement )
} ,
"kubeletConfig" : {
object ( NodeKubeletConfig )
} ,
"updateSettings" : {
object ( UpdateSettings )
}
}
Fields
name
string
The name of this resource.
Node pool names are formatted as projects/<project-number>/locations/<region>/awsClusters/<cluster-id>/awsNodePools/<node-pool-id> .
For more details on Google Cloud resource names, see Resource Names
version
string
Required. The Kubernetes version to run on this node pool (e.g. 1.19.10-gke.1000 ).
You can list all supported versions on a given Google Cloud region by calling locations.getAwsServerConfig .
config
object ( AwsNodeConfig )
Required. The configuration of the node pool.
autoscaling
object ( AwsNodePoolAutoscaling )
Required. Autoscaler configuration for this node pool.
subnetId
string
Required. The subnet where the node pool node run.
state
enum ( State )
Output only. The lifecycle state of the node pool.
uid
string
Output only. A globally unique identifier for the node pool.
reconciling
boolean
Output only. If set, there are currently changes in flight to the node pool.
createTime
string ( Timestamp format)
Output only. The time at which this node pool was created.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
updateTime
string ( Timestamp format)
Output only. The time at which this node pool was last updated.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
etag
string
Allows clients to perform consistent read-modify-writes through optimistic concurrency control.
Can be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
annotations
map (key: string, value: string)
Optional. Annotations on the node pool.
This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
maxPodsConstraint
object ( MaxPodsConstraint )
Required. The constraint on the maximum number of pods that can be run simultaneously on a node in the node pool.
errors[]
object ( AwsNodePoolError )
Output only. A set of errors found in the node pool.
management
object ( AwsNodeManagement )
Optional. The Management configuration for this node pool.
kubeletConfig
object ( NodeKubeletConfig )
Optional. Node kubelet configs.
updateSettings
object ( UpdateSettings )
Optional. Update settings control the speed and disruption of the update.
AwsNodeConfig
GKE-on-AWS is deprecated. See https://cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/deprecations/deprecation-announcement for more details.
Parameters that describe the nodes in a cluster.
JSON representation
{
"instanceType" : string ,
"rootVolume" : {
object ( AwsVolumeTemplate )
} ,
"taints" : [
{
object ( NodeTaint )
}
] ,
"labels" : {
string : string ,
...
} ,
"tags" : {
string : string ,
...
} ,
"iamInstanceProfile" : string ,
"imageType" : string ,
"sshConfig" : {
object ( AwsSshConfig )
} ,
"securityGroupIds" : [
string
] ,
"proxyConfig" : {
object ( AwsProxyConfig )
} ,
"configEncryption" : {
object ( AwsConfigEncryption )
} ,
"instancePlacement" : {
object ( AwsInstancePlacement )
} ,
"autoscalingMetricsCollection" : {
object ( AwsAutoscalingGroupMetricsCollection )
} ,
"spotConfig" : {
object ( SpotConfig )
}
}
Fields
instanceType
string
Optional. The EC2 instance type when creating on-Demand instances.
If unspecified during node pool creation, a default will be chosen based on the node pool version, and assigned to this field.
rootVolume
object ( AwsVolumeTemplate )
Optional. Template for the root volume provisioned for node pool nodes. Volumes will be provisioned in the availability zone assigned to the node pool subnet.
When unspecified, it defaults to 32 GiB with the GP2 volume type.
taints[]
object ( NodeTaint )
Optional. The initial taints assigned to nodes of this node pool.
labels
map (key: string, value: string)
Optional. The initial labels assigned to nodes of this node pool. An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
tags
map (key: string, value: string)
Optional. Key/value metadata to assign to each underlying AWS resource. Specify at most 50 pairs containing alphanumerics, spaces, and symbols (.+-=_:@/). Keys can be up to 127 Unicode characters. Values can be up to 255 Unicode characters.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
iamInstanceProfile
string
Required. The name or ARN of the AWS IAM instance profile to assign to nodes in the pool.
imageType
string
Optional. The OS image type to use on node pool instances. Can be unspecified, or have a value of ubuntu .
When unspecified, it defaults to ubuntu .
sshConfig
object ( AwsSshConfig )
Optional. The SSH configuration.
securityGroupIds[]
string
Optional. The IDs of additional security groups to add to nodes in this pool. The manager will automatically create security groups with minimum rules needed for a functioning cluster.
proxyConfig
object ( AwsProxyConfig )
Optional. Proxy configuration for outbound HTTP(S) traffic.
configEncryption
object ( AwsConfigEncryption )
Required. Config encryption for user data.
instancePlacement
object ( AwsInstancePlacement )
Optional. Placement related info for this node. When unspecified, the VPC's default tenancy will be used.
autoscalingMetricsCollection
object ( AwsAutoscalingGroupMetricsCollection )
Optional. Configuration related to CloudWatch metrics collection on the Auto Scaling group of the node pool.
When unspecified, metrics collection is disabled.
spotConfig
object ( SpotConfig )
Optional. Configuration for provisioning EC2 Spot instances
When specified, the node pool will provision Spot instances from the set of spotConfig.instance_types. This field is mutually exclusive with instanceType .
AwsAutoscalingGroupMetricsCollection
GKE-on-AWS is deprecated. See https://cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/deprecations/deprecation-announcement for more details.
Configuration related to CloudWatch metrics collection in an AWS Auto Scaling group.
JSON representation
{
"granularity" : string ,
"metrics" : [
string
]
}
Fields
granularity
string
Required. The frequency at which EC2 Auto Scaling sends aggregated data to AWS CloudWatch. The only valid value is "1Minute".
metrics[]
string
Optional. The metrics to enable. For a list of valid metrics, see https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_EnableMetricsCollection.html . If you specify Granularity and don't specify any metrics, all metrics are enabled.
SpotConfig
GKE-on-AWS is deprecated. See https://cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/deprecations/deprecation-announcement for more details.
SpotConfig has configuration info for Spot node.
JSON representation
{
"instanceTypes" : [
string
]
}
Fields
instanceTypes[]
string
Required. A list of instance types for creating spot node pool.
AwsNodePoolAutoscaling
GKE-on-AWS is deprecated. See https://cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/deprecations/deprecation-announcement for more details.
AwsNodePoolAutoscaling contains information required by cluster autoscaler to adjust the size of the node pool to the current cluster usage.
JSON representation
{
"minNodeCount" : integer ,
"maxNodeCount" : integer
}
Fields
minNodeCount
integer
Required. Minimum number of nodes in the node pool. Must be greater than or equal to 1 and less than or equal to maxNodeCount.
maxNodeCount
integer
Required. Maximum number of nodes in the node pool. Must be greater than or equal to minNodeCount and less than or equal to 50.
State
The lifecycle state of the node pool.
Enums
STATE_UNSPECIFIED
Not set.
PROVISIONING
The PROVISIONING state indicates the node pool is being created.
RUNNING
The RUNNING state indicates the node pool has been created and is fully usable.
RECONCILING
The RECONCILING state indicates that the node pool is being reconciled.
STOPPING
The STOPPING state indicates the node pool is being deleted.
ERROR
The ERROR state indicates the node pool is in a broken unrecoverable state.
DEGRADED
The DEGRADED state indicates the node pool requires user action to restore full functionality.
AwsNodePoolError
GKE-on-AWS is deprecated. See https://cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/deprecations/deprecation-announcement for more details.
AwsNodePoolError describes errors found on AWS node pools.
JSON representation
{
"message" : string
}
Fields
message
string
Human-friendly description of the error.
AwsNodeManagement
GKE-on-AWS is deprecated. See https://cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/deprecations/deprecation-announcement for more details.
AwsNodeManagement defines the set of node management features turned on for an AWS node pool.
JSON representation
{
"autoRepair" : boolean
}
Fields
autoRepair
boolean
Optional. Whether or not the nodes will be automatically repaired. When set to true, the nodes in this node pool will be monitored and if they fail health checks consistently over a period of time, an automatic repair action will be triggered to replace them with new nodes.
NodeKubeletConfig
Configuration for node pool kubelet options.
JSON representation
{
"insecureKubeletReadonlyPortEnabled" : boolean ,
"cpuManagerPolicy" : string ,
"cpuCfsQuota" : boolean ,
"cpuCfsQuotaPeriod" : string ,
"podPidsLimit" : string
}
Fields
insecureKubeletReadonlyPortEnabled
boolean
Optional. Enable the insecure kubelet read only port.
cpuManagerPolicy
string
Optional. Control the CPU management policy on the node. See https://kubernetes.io/docs/tasks/administer-cluster/cpu-management-policies/
The following values are allowed. * "none": the default, which represents the existing scheduling behavior. * "static": allows pods with certain resource characteristics to be granted increased CPU affinity and exclusivity on the node. The default value is 'none' if unspecified.
cpuCfsQuota
boolean
Optional. Enable CPU CFS quota enforcement for containers that specify CPU limits.
This option is enabled by default which makes kubelet use CFS quota ( https://www.kernel.org/doc/Documentation/scheduler/sched-bwc.txt ) to enforce container CPU limits. Otherwise, CPU limits will not be enforced at all.
Disable this option to mitigate CPU throttling problems while still having your pods to be in Guaranteed QoS class by specifying the CPU limits.
The default value is 'true' if unspecified.
cpuCfsQuotaPeriod
string
Optional. Set the CPU CFS quota period value 'cpu.cfs_period_us'.
The string must be a sequence of decimal numbers, each with optional fraction and a unit suffix, such as "300ms". Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h". The value must be a positive duration.
The default value is '100ms' if unspecified.
podPidsLimit
string ( int64 format)
Optional. Set the Pod PID limits. See https://kubernetes.io/docs/concepts/policy/pid-limiting/#pod-pid-limits
Controls the maximum number of processes allowed to run in a pod. The value must be greater than or equal to 1024 and less than 4194304.
UpdateSettings
GKE-on-AWS is deprecated. See https://cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/deprecations/deprecation-announcement for more details.
UpdateSettings control the level of parallelism and the level of disruption caused during the update of a node pool.
These settings are applicable when the node pool update requires replacing the existing node pool nodes with the updated ones.
UpdateSettings are optional. When UpdateSettings are not specified during the node pool creation, a default is chosen based on the parent cluster's version. For clusters with minor version 1.27 and later, a default surgeSettings configuration with maxSurge = 1 and maxUnavailable = 0 is used. For clusters with older versions, node pool updates use the traditional rolling update mechanism of updating one node at a time in a "terminate before create" fashion and updateSettings is not applicable.
Set the surgeSettings parameter to use the Surge Update mechanism for the rolling update of node pool nodes. 1. maxSurge controls the number of additional nodes that can be created beyond the current size of the node pool temporarily for the time of the update to increase the number of available nodes. 2. maxUnavailable controls the number of nodes that can be simultaneously unavailable during the update. 3. (maxSurge + maxUnavailable) determines the level of parallelism (i.e., the number of nodes being updated at the same time).
JSON representation
{
"surgeSettings" : {
object ( SurgeSettings )
}
}
Fields
surgeSettings
object ( SurgeSettings )
Optional. Settings for surge update.
SurgeSettings
GKE-on-AWS is deprecated. See https://cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/deprecations/deprecation-announcement for more details.
SurgeSettings contains the parameters for Surge update.
JSON representation
{
"maxSurge" : integer ,
"maxUnavailable" : integer
}
Fields
maxSurge
integer
Optional. The maximum number of nodes that can be created beyond the current size of the node pool during the update process.
maxUnavailable
integer
Optional. The maximum number of nodes that can be simultaneously unavailable during the update process. A node is considered unavailable if its status is not Ready.
Methods
create (deprecated)
Creates a new AwsNodePool , attached to a given AwsCluster .
delete (deprecated)
Deletes a specific AwsNodePool resource.
get (deprecated)
Describes a specific AwsNodePool resource.
list (deprecated)
Lists all AwsNodePool resources on a given AwsCluster .
patch (deprecated)
Updates an AwsNodePool .
rollback (deprecated)
Rolls back a previously aborted or failed AwsNodePool update request.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-11-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-11-06 UTC."],[],[]]
