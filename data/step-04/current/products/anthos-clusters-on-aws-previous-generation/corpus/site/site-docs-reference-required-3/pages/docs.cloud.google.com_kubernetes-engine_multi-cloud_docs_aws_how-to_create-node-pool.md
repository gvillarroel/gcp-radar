---
title: "Create and customize a node pool \_|\_ GKE on AWS \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-node-pool
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/use-efs
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/how-to/create-node-pool
  title: "Create and customize a node pool \_|\_ GKE on AWS \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

The product described by this documentation, GKE on AWS, is now in maintenance mode and will be shut down on March 17, 2027.
Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
GKE Multi-Cloud
GKE on AWS
Guides
Send feedback
Create and customize a node pool
Stay organized with collections
Save and categorize content based on your preferences.
This page shows you how to create a node pool in GKE on AWS and how
to customize your node configuration using a configuration file.
To create a node pool, you must provide the following resources:
The name of an existing AWS cluster to create the node pool in
An IAM instance profile
for node pool VMs
A subnet
where the node pool VMs will run
If you want SSH access to your nodes, you can
Create an EC2 key pair .
This page is for IT administrators and Operators who want to set up,
monitor, and manage cloud infrastructure. To learn more about common roles and
example tasks that we reference in Google Cloud content, see
Common GKE user roles and tasks .
Create a standard node pool
Once these resources are available, you can create a node pool with this
command:
gcloud container aws node - pools create NODE_POOL_NAME \
-- cluster CLUSTER_NAME \
-- instance - type INSTANCE_TYPE \
-- root - volume - size ROOT_VOLUME_SIZE \
-- iam - instance - profile NODEPOOL_PROFILE \
-- node - version NODE_VERSION \
-- min - nodes MIN_NODES \
-- max - nodes MAX_NODES \
-- max - pods - per - node MAX_PODS_PER_NODE \
-- location GOOGLE_CLOUD_LOCATION \
-- subnet - id NODEPOOL_SUBNET \
-- ssh - ec2 - key - pair SSH_KEY_PAIR_NAME \
-- config - encryption - kms - key - arn CONFIG_KMS_KEY_ARN \
-- tags "Name= CLUSTER_NAME - NODE_POOL_NAME "
Replace the following:
NODE_POOL_NAME : a name you choose for your node pool
CLUSTER_NAME : the name of the cluster to attach the
node pool to
INSTANCE_TYPE : the desired AWS machine instance type
for this node pool— for example, m5.large
ROOT_VOLUME_SIZE : the desired size for each node's
root volume, in Gb
NODEPOOL_PROFILE : the IAM instance profile for node pool
VMs. For details about how to update an IAM instance profile, see
Update AWS IAM instance profile .
NODE_VERSION : the Kubernetes version to install on
each node in the node pool (e.g., "1.34.1-gke.4700")
MIN_NODES : the minimum number of nodes the node pool
can contain
MAX_NODES : the maximum number of nodes the node pool
can contain
MAX_PODS_PER_NODE : the maximum number of pods that
can be created on any single node in the pool
GOOGLE_CLOUD_LOCATION : the name of the Google Cloud
location from which this node pool will be managed
NODEPOOL_SUBNET : the ID of the subnet the node pool
will run on.
There must not be any overlap between the cluster's Pod/Service IP
ranges and the node pool subnet network. For more information on
selecting Pod and Service IP ranges for your cluster, see
Select CIDR ranges for your cluster
If this subnet is outside of the VPC primary CIDR block, some
additional steps are needed. For more information, see
security groups .
SSH_KEY_PAIR_NAME : the name of the AWS SSH key pair
created for SSH access (optional)
CONFIG_KMS_KEY_ARN : the Amazon Resource Name (ARN) of the
AWS KMS key that encrypts user data
If present, the --tags parameter applies the given tag to all nodes in your
node pool. This example tags all nodes in the pool with the names of the cluster
and node pool the node belongs to.
Customize node system configuration
You can customize your node configuration by using various methods. For example,
you can specify parameters such as the Pod's CPU limit when you create a node
pool.
You can use a node system
configuration to specify custom settings for the Kubernetes node agent (
kubelet )
and low-level Linux kernel configurations
( sysctl ) in your node pools.
Configure the kubelet agent
To customize node configuration using kubelet , use the Google Cloud CLI or Terraform.
gcloud
You can specify custom settings for the Kubernetes node agent
( kubelet )
when you create your node pools. For example, to configure the kubelet to
use the
static CPU management policy , run the following command:
gcloud container aws node-pools create POOL_NAME \
--cluster CLUSTER_NAME \
--location = LOCATION \
--kubelet_config_cpu_manager_policy = static
Replace the following:
POOL_NAME : the name for your node pool.
CLUSTER_NAME : the name of the cluster to which you want to add a node pool.
LOCATION : the compute zone or region of the cluster.
For a complete list of the fields that you can add to the preceding command, see
Kubelet configuration options .
Terraform
You can learn more about Terraform in an AWS environment in the Terraform node pool reference .
Set the Terraform variables by including the following block in the variables.tf file:
variable "node_pool_kubelet_config_cpu_manager" {
default = "none"
}
variable "node_pool_kubelet_config_cpu_cfs_quota" {
default = "true"
}
variable "node_pool_kubelet_config_cpu_cfs_quota_period" {
default = "100ms"
}
variable "node_pool_kubelet_config_pod_pids_limit" {
default = - 1
}
Add the following block to your Terraform configuration:
resource "google_container_aws_node_pool" " NODE_POOL_RESOURCE_NAME " {
provider = google
cluster = CLUSTER_NAME
name = POOL_NAME
subnet_id = SUBNET_ID
version = CLUSTER_VERSION
location = CLUSTER_LOCATION
kubelet_config {
cpu_manager_policy = var.node_pool_kubelet_config_cpu_manager
cpu_cfs_quota = var.node_pool_kubelet_config_cpu_cfs_quota
cpu_cfs_quota_period = var.node_pool_kubelet_config_cpu_cfs_quota_period
pod_pids_limit = var.node_pool_kubelet_config_pod_pids_limit
}
}
Replace the following:
NODE_POOL_RESOURCE_NAME : the name of the node pool
resource in the Terraform template.
CLUSTER_NAME : the name of the existing cluster.
POOL_NAME : the name of the node pool to customize.
SUBNET_ID : the subnet assigned to the node pool.
CLUSTER_VERSION : the version for the
GKE on AWS cluster control plane and nodes.
CLUSTER_LOCATION : the Compute Engine region
or zone of the cluster.
Configure the sysctl utility
To customize your node system configuration using sysctl , make a POST
request to the method
awsClusters.awsNodePools.create .
This POST request creates a node pool with your specified customizations. In the
following example, the busy_poll and busy_read parameters are configured to
5,000 microseconds each:
POST h tt ps : // ENDPOINT /v1/projects/ PROJECT_ID /locations/ GOOGLE_CLOUD_LOCATION / CLUSTER_NAME /awsNodePools
{
"name" : NODE_POOL_NAME ,
"version" : CLUSTER_VERSION ,
"config" : {
"linuxNodeConfig" : {
"sysctls" : {
"net.core.busy_poll" : "5000" ,
"net.core.busy_read" : "5000" ,
}
}
}
}
Replace the following:
ENDPOINT : your Google Cloud service endpoint .
PROJECT_ID : your Google Cloud project ID.
GOOGLE_CLOUD_LOCATION : the
Google Cloud location
for the cluster.
CLUSTER_NAME : the name of the cluster to which you want to add a node pool.
NODE_POOL_NAME : the name for your node pool.
CLUSTER_VERSION : the version number of your cluster, for example, 1.31.0-gke.500.
For a complete list of the key-value pairs that you can add to the preceding
JSON request, see Sysctl configuration options .
Configuration options for the kubelet agent
The following table shows you the kubelet options that you can modify.
Kubelet config settings
Restrictions
Default setting
Description
kubelet_config_cpu_manager_policy
Value must be none or static
"none"
This setting controls the kubelet's
CPU
Manager Policy . The default value is none which is the
default CPU affinity scheme, providing no affinity beyond what the OS
scheduler does automatically.
Setting this value to static allows Pods in the Guaranteed QoS class with
integer CPU requests to be assigned exclusive use of CPUs.
kubelet_config_cpu_cfs_quota
Value must be true or false
true
This setting enforces the
Pod's CPU limit . Setting this value to false means that
the CPU limits for Pods are ignored.
Ignoring CPU limits might be desirable in certain scenarios where Pods are
sensitive to CPU limits. The risk of disabling cpuCFSQuota is
that a rogue Pod can consume more CPU resources than intended.
kubelet_config_cpu_cfs_quota_period
Value must be a duration of time
"100ms"
This setting sets the CPU CFS quota period value, cpu.cfs_period_us ,
which specifies the period of how often a cgroup's access to CPU resources
should be reallocated. This option lets you tune the CPU throttling behavior.
kubelet_config_pod_pids_limit
Value must be must be between 1024 and 4194304
-1
This setting sets the maximum number of process IDs (PIDs) that each Pod can use. If set at the default value, the PIDs limit scales automatically based on the underlying machine size.
Configuration options for the sysctl utility
To tune the performance of your system, you can modify the following attributes:
net.core.busy_poll
net.core.busy_read
net.core.netdev_max_backlog
net.core.rmem_max
net.core.wmem_default
net.core.wmem_max
net.core.optmem_max
net.core.somaxconn
net.ipv4.tcp_rmem
net.ipv4.tcp_wmem
net.ipv4.tcp_tw_reuse
net.ipv6.conf.all.disable_ipv6
net.ipv6.conf.default.disable_ipv6
vm.max_map_count
Spot Instance node pools
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
GKE on AWS supports
AWS spot instance node
pools as a Preview feature. Spot instance node pools are pools of Amazon EC2
Spot Instances that are available on AWS at a lower cost.
Spot Instances can provide cost savings for stateless, fault-tolerant, and
flexible applications. However, they aren't well-suited for workloads that are
inflexible, stateful, fault-intolerant, or tightly coupled between instance
nodes. Spot Instances can be interrupted by Amazon EC2 when EC2 needs the
capacity back, and so they are subject to fluctuations in the Spot market.
If your workloads require guaranteed capacity and can't tolerate occasional
periods of unavailability, choose a standard node pool instead of a spot
instance node pool.
The allocation strategy employed in GKE on AWS focuses on selecting
Spot Instance pools with the highest capacity availability, minimizing the risk
of interruptions. This approach is particularly beneficial for workloads with a
higher cost of interruption, such as image and media rendering or Deep Learning.
Specifically, the capacityOptimized allocation strategy has been implemented,
as described in
Allocation strategies for Spot Instances .
Create a Spot node pool
To create a Spot Instance node pool, run the following command:
gcloud container aws node - pools create NODE_POOL_NAME \
-- cluster CLUSTER_NAME \
-- spot - instance - types INSTANCE_TYPE_LIST \
-- root - volume - size ROOT_VOLUME_SIZE \
-- iam - instance - profile NODEPOOL_PROFILE \
-- node - version NODE_VERSION \
-- min - nodes MIN_NODES \
-- max - nodes MAX_NODES \
-- max - pods - per - node MAX_PODS_PER_NODE \
-- location GOOGLE_CLOUD_LOCATION \
-- subnet - id NODEPOOL_SUBNET \
-- ssh - ec2 - key - pair SSH_KEY_PAIR_NAME \
-- config - encryption - kms - key - arn CONFIG_KMS_KEY_ARN \
-- tags "Name= CLUSTER_NAME - NODE_POOL_NAME "
Replace the following:
NODE_POOL_NAME : the name you want to assign to this node
pool.
CLUSTER_NAME : the name of the cluster you want to attach
this node pool to.
INSTANCE_TYPE_LIST : a comma-separated list of AWS EC2
instance types. The node pool provisions Spot instances with these instance
types. The instance types must have the same CPU architecture, the same
number of CPUs and the same amount of memory. For example:
"c6g.large,c6gd.large,c6gn.large,c7g.large,t4g.medium". You can
use the Amazon EC2 Instance Selector
tool to find instance types that have identical CPU and memory
configurations.
ROOT_VOLUME_SIZE : the desired size for each node's
root volume, in Gb
NODEPOOL_PROFILE : the IAM instance profile for node pool
VMs
NODE_VERSION : the Kubernetes version to install on
each node in the node pool (e.g., "1.34.1-gke.4700")
MIN_NODES : the minimum number of nodes the node pool
can contain
MAX_NODES : the maximum number of nodes the node pool
can contain
MAX_PODS_PER_NODE : the maximum number of pods that
can be created on any single node in the pool
GOOGLE_CLOUD_LOCATION : the name of the Google Cloud
location from which this node pool will be managed
NODEPOOL_SUBNET : the ID of the subnet the node pool
will run on.
There must not be any overlap between the cluster's Pod/Service IP
ranges and the node pool subnet network. For more information on
selecting Pod and Service IP ranges for your cluster, see
Select CIDR ranges for your cluster
If this subnet is outside of the VPC primary CIDR block, some
additional steps are needed. For more information, see
security groups .
SSH_KEY_PAIR_NAME : the name of the AWS SSH key pair
created for SSH access (optional)
CONFIG_KMS_KEY_ARN : the Amazon Resource Name (ARN) of the
AWS KMS key that encrypts user data
The best practice is to list a number of instance types in the
INSTANCE_TYPE_LIST field. This best practice is important
because if a node pool is configured with only
a single instance type, and that instance type isn't available in any of the
desired Availability Zones, then the node pool can't provision any new nodes.
This can affect the availability of your applications and can cause service
disruptions.
Note that the spot-instance-types field is mutually exclusive with the
instance-type field. This means that you can provide only one of these fields
and not both.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
