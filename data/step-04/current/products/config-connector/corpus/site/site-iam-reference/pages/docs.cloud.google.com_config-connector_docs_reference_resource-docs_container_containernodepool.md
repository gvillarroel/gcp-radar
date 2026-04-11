---
title: "ContainerNodePool \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containernodepool
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/concepts/installation-types
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containernodepool
  title: "ContainerNodePool \_|\_ Config Connector \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Config Connector
API and reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
ContainerNodePool
Property
Value
Google Cloud Service Name
Kubernetes Engine
Google Cloud Service Documentation
/kubernetes-engine/docs/
Google Cloud REST Resource Name
v1.projects.locations.clusters.nodePools
Google Cloud REST Resource Documentation
/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters.nodePools
Config Connector Resource Short Names
gcpcontainernodepool gcpcontainernodepools containernodepool
Config Connector Service Name
container.googleapis.com
Config Connector Resource Fully Qualified Name
containernodepools.container.cnrm.cloud.google.com
Can Be Referenced by IAMPolicy/IAMPolicyMember
No
Config Connector Default Average Reconcile Interval In Seconds
600
Custom Resource Definition Properties
Annotations
Fields
cnrm.cloud.google.com/project-id
Spec
Schema
autoscaling :
locationPolicy : string
maxNodeCount : integer
minNodeCount : integer
totalMaxNodeCount : integer
totalMinNodeCount : integer
clusterRef :
external : string
name : string
namespace : string
initialNodeCount : integer
location : string
management :
autoRepair : boolean
autoUpgrade : boolean
maxPodsPerNode : integer
namePrefix : string
networkConfig :
additionalNodeNetworkConfigs :
- networkRef :
external : string
name : string
namespace : string
subnetworkRef :
external : string
name : string
namespace : string
additionalPodNetworkConfigs :
- maxPodsPerNode : integer
secondaryPodRange : string
subnetworkRef :
external : string
name : string
namespace : string
createPodRange : boolean
enablePrivateNodes : boolean
podCidrOverprovisionConfig :
disabled : boolean
podIpv4CidrBlock : string
podRange : string
nodeConfig :
advancedMachineFeatures :
threadsPerCore : integer
bootDiskKMSCryptoKeyRef :
external : string
name : string
namespace : string
confidentialNodes :
enabled : boolean
diskSizeGb : integer
diskType : string
ephemeralStorageConfig :
localSsdCount : integer
ephemeralStorageLocalSsdConfig :
localSsdCount : integer
fastSocket :
enabled : boolean
gcfsConfig :
enabled : boolean
guestAccelerator :
- count : integer
gpuDriverInstallationConfig :
gpuDriverVersion : string
gpuPartitionSize : string
gpuSharingConfig :
gpuSharingStrategy : string
maxSharedClientsPerGpu : integer
type : string
gvnic :
enabled : boolean
hostMaintenancePolicy :
maintenanceInterval : string
imageType : string
kubeletConfig :
cpuCfsQuota : boolean
cpuCfsQuotaPeriod : string
cpuManagerPolicy : string
podPidsLimit : integer
labels :
string : string
linuxNodeConfig :
cgroupMode : string
sysctls :
string : string
localNvmeSsdBlockConfig :
localSsdCount : integer
localSsdCount : integer
loggingVariant : string
machineType : string
metadata :
string : string
minCpuPlatform : string
nodeGroupRef :
external : string
name : string
namespace : string
oauthScopes :
- string
preemptible : boolean
reservationAffinity :
consumeReservationType : string
key : string
values :
- string
resourceLabels :
string : string
sandboxConfig :
sandboxType : string
serviceAccountRef :
external : string
name : string
namespace : string
shieldedInstanceConfig :
enableIntegrityMonitoring : boolean
enableSecureBoot : boolean
soleTenantConfig :
nodeAffinity :
- key : string
operator : string
values :
- string
spot : boolean
tags :
- string
taint :
- effect : string
key : string
value : string
workloadMetadataConfig :
mode : string
nodeMetadata : string
nodeCount : integer
nodeLocations :
- string
placementPolicy :
policyNameRef :
external : string
name : string
namespace : string
tpuTopology : string
type : string
resourceID : string
upgradeSettings :
blueGreenSettings :
nodePoolSoakDuration : string
standardRolloutPolicy :
batchNodeCount : integer
batchPercentage : float
batchSoakDuration : string
maxSurge : integer
maxUnavailable : integer
strategy : string
version : string
Fields
autoscaling
Optional
object
Configuration required by cluster autoscaler to adjust the size of the node pool to the current cluster usage. To disable autoscaling, set minNodeCount and maxNodeCount to 0.
autoscaling.locationPolicy
Optional
string
Location policy specifies the algorithm used when scaling-up the node pool. "BALANCED" - Is a best effort policy that aims to balance the sizes of available zones. "ANY" - Instructs the cluster autoscaler to prioritize utilization of unused reservations, and reduces preemption risk for Spot VMs.
autoscaling.maxNodeCount
Optional
integer
Maximum number of nodes per zone in the node pool. Must be >= min_node_count. Cannot be used with total limits.
autoscaling.minNodeCount
Optional
integer
Minimum number of nodes per zone in the node pool. Must be >=0 and
autoscaling.totalMaxNodeCount
Optional
integer
Maximum number of all nodes in the node pool. Must be >= total_min_node_count. Cannot be used with per zone limits.
autoscaling.totalMinNodeCount
Optional
integer
Minimum number of all nodes in the node pool. Must be >=0 and
clusterRef
Required
object
clusterRef.external
Optional
string
Allowed value: The `name` field of a `ContainerCluster` resource.
clusterRef.name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
clusterRef.namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
initialNodeCount
Optional
integer
Immutable. The initial number of nodes for the pool. In regional or multi-zonal clusters, this is the number of nodes per zone. Changing this will force recreation of the resource.
location
Required
string
Immutable. The location (region or zone) of the cluster.
management
Optional
object
Node management configuration, wherein auto-repair and auto-upgrade is configured.
management.autoRepair
Optional
boolean
Whether the nodes will be automatically repaired.
management.autoUpgrade
Optional
boolean
Whether the nodes will be automatically upgraded.
maxPodsPerNode
Optional
integer
Immutable. The maximum number of pods per node in this node pool. Note that this does not work on node pools which are "route-based" - that is, node pools belonging to clusters that do not have IP Aliasing enabled.
namePrefix
Optional
string
Immutable. Creates a unique name for the node pool beginning with the specified prefix. Conflicts with name.
networkConfig
Optional
object
Networking configuration for this NodePool. If specified, it overrides the cluster-level defaults.
networkConfig.additionalNodeNetworkConfigs
Optional
list (object)
Immutable. We specify the additional node networks for this node pool using this list. Each node network corresponds to an additional interface.
networkConfig.additionalNodeNetworkConfigs[]
Optional
object
networkConfig.additionalNodeNetworkConfigs[].networkRef
Optional
object
Immutable. Name of the VPC where the additional interface belongs.
networkConfig.additionalNodeNetworkConfigs[].networkRef.external
Optional
string
Allowed value: The `selfLink` field of a `ComputeNetwork` resource.
networkConfig.additionalNodeNetworkConfigs[].networkRef.name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
networkConfig.additionalNodeNetworkConfigs[].networkRef.namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
networkConfig.additionalNodeNetworkConfigs[].subnetworkRef
Optional
object
Immutable. Name of the subnetwork where the additional interface belongs.
networkConfig.additionalNodeNetworkConfigs[].subnetworkRef.external
Optional
string
Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
networkConfig.additionalNodeNetworkConfigs[].subnetworkRef.name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
networkConfig.additionalNodeNetworkConfigs[].subnetworkRef.namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
networkConfig.additionalPodNetworkConfigs
Optional
list (object)
Immutable. We specify the additional pod networks for this node pool using this list. Each pod network corresponds to an additional alias IP range for the node.
networkConfig.additionalPodNetworkConfigs[]
Optional
object
networkConfig.additionalPodNetworkConfigs[].maxPodsPerNode
Optional
integer
Immutable. The maximum number of pods per node which use this pod network.
networkConfig.additionalPodNetworkConfigs[].secondaryPodRange
Optional
string
Immutable. The name of the secondary range on the subnet which provides IP address for this pod range.
networkConfig.additionalPodNetworkConfigs[].subnetworkRef
Optional
object
Immutable. Name of the subnetwork where the additional pod network belongs.
networkConfig.additionalPodNetworkConfigs[].subnetworkRef.external
Optional
string
Allowed value: The `selfLink` field of a `ComputeSubnetwork` resource.
networkConfig.additionalPodNetworkConfigs[].subnetworkRef.name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
networkConfig.additionalPodNetworkConfigs[].subnetworkRef.namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
networkConfig.createPodRange
Optional
boolean
Immutable. Whether to create a new range for pod IPs in this node pool. Defaults are provided for pod_range and pod_ipv4_cidr_block if they are not specified.
networkConfig.enablePrivateNodes
Optional
boolean
Whether nodes have internal IP addresses only.
networkConfig.podCidrOverprovisionConfig
Optional
object
Immutable. Configuration for node-pool level pod cidr overprovision. If not set, the cluster level setting will be inherited.
networkConfig.podCidrOverprovisionConfig.disabled
Required*
boolean
networkConfig.podIpv4CidrBlock
Optional
string
Immutable. The IP address range for pod IPs in this node pool. Only applicable if create_pod_range is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) to pick a specific range to use.
networkConfig.podRange
Optional
string
Immutable. The ID of the secondary range for pod IPs. If create_pod_range is true, this ID is used for the new range. If create_pod_range is false, uses an existing secondary range with this ID.
nodeConfig
Optional
object
Immutable. The configuration of the nodepool.
nodeConfig.advancedMachineFeatures
Optional
object
Immutable. Specifies options for controlling advanced machine features.
nodeConfig.advancedMachineFeatures.threadsPerCore
Required*
integer
Immutable. The number of threads per physical core. To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.
nodeConfig.bootDiskKMSCryptoKeyRef
Optional
object
nodeConfig.bootDiskKMSCryptoKeyRef.external
Optional
string
Allowed value: The `selfLink` field of a `KMSCryptoKey` resource.
nodeConfig.bootDiskKMSCryptoKeyRef.name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
nodeConfig.bootDiskKMSCryptoKeyRef.namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
nodeConfig.confidentialNodes
Optional
object
Immutable. Configuration for the confidential nodes feature, which makes nodes run on confidential VMs. Warning: This configuration can't be changed (or added/removed) after pool creation without deleting and recreating the entire pool.
nodeConfig.confidentialNodes.enabled
Required*
boolean
Immutable. Whether Confidential Nodes feature is enabled for all nodes in this pool.
nodeConfig.diskSizeGb
Optional
integer
Immutable. Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.
nodeConfig.diskType
Optional
string
Immutable. Type of the disk attached to each node. Such as pd-standard, pd-balanced or pd-ssd.
nodeConfig.ephemeralStorageConfig
Optional
object
Immutable. Parameters for the ephemeral storage filesystem. If unspecified, ephemeral storage is backed by the boot disk.
nodeConfig.ephemeralStorageConfig.localSsdCount
Required*
integer
Immutable. Number of local SSDs to use to back ephemeral storage. Uses NVMe interfaces. Each local SSD must be 375 or 3000 GB in size, and all local SSDs must share the same size.
nodeConfig.ephemeralStorageLocalSsdConfig
Optional
object
Immutable. Parameters for the ephemeral storage filesystem. If unspecified, ephemeral storage is backed by the boot disk.
nodeConfig.ephemeralStorageLocalSsdConfig.localSsdCount
Required*
integer
Immutable. Number of local SSDs to use to back ephemeral storage. Uses NVMe interfaces. Each local SSD must be 375 or 3000 GB in size, and all local SSDs must share the same size.
nodeConfig.fastSocket
Optional
object
Enable or disable NCCL Fast Socket in the node pool.
nodeConfig.fastSocket.enabled
Required*
boolean
Whether or not NCCL Fast Socket is enabled.
nodeConfig.gcfsConfig
Optional
object
Immutable. GCFS configuration for this node.
nodeConfig.gcfsConfig.enabled
Required*
boolean
Immutable. Whether or not GCFS is enabled.
nodeConfig.guestAccelerator
Optional
list (object)
Immutable. List of the type and count of accelerator cards attached to the instance.
nodeConfig.guestAccelerator[]
Optional
object
nodeConfig.guestAccelerator[].count
Required*
integer
Immutable. The number of the accelerator cards exposed to an instance.
nodeConfig.guestAccelerator[].gpuDriverInstallationConfig
Optional
object
Immutable. Configuration for auto installation of GPU driver.
nodeConfig.guestAccelerator[].gpuDriverInstallationConfig.gpuDriverVersion
Required*
string
Immutable. Mode for how the GPU driver is installed.
nodeConfig.guestAccelerator[].gpuPartitionSize
Optional
string
Immutable. Size of partitions to create on the GPU. Valid values are described in the NVIDIA mig user guide (https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning).
nodeConfig.guestAccelerator[].gpuSharingConfig
Optional
object
Immutable. Configuration for GPU sharing.
nodeConfig.guestAccelerator[].gpuSharingConfig.gpuSharingStrategy
Required*
string
Immutable. The type of GPU sharing strategy to enable on the GPU node. Possible values are described in the API package (https://pkg.go.dev/google.golang.org/api/container/v1#GPUSharingConfig).
nodeConfig.guestAccelerator[].gpuSharingConfig.maxSharedClientsPerGpu
Required*
integer
Immutable. The maximum number of containers that can share a GPU.
nodeConfig.guestAccelerator[].type
Required*
string
Immutable. The accelerator type resource name.
nodeConfig.gvnic
Optional
object
Immutable. Enable or disable gvnic in the node pool.
nodeConfig.gvnic.enabled
Required*
boolean
Immutable. Whether or not gvnic is enabled.
nodeConfig.hostMaintenancePolicy
Optional
object
Immutable. The maintenance policy for the hosts on which the GKE VMs run on.
nodeConfig.hostMaintenancePolicy.maintenanceInterval
Required*
string
Immutable. .
nodeConfig.imageType
Optional
string
The image type to use for this node. Note that for a given image type, the latest version of it will be used.
nodeConfig.kubeletConfig
Optional
object
Node kubelet configs.
nodeConfig.kubeletConfig.cpuCfsQuota
Optional
boolean
Enable CPU CFS quota enforcement for containers that specify CPU limits.
nodeConfig.kubeletConfig.cpuCfsQuotaPeriod
Optional
string
Set the CPU CFS quota period value 'cpu.cfs_period_us'.
nodeConfig.kubeletConfig.cpuManagerPolicy
Required*
string
Control the CPU management policy on the node.
nodeConfig.kubeletConfig.podPidsLimit
Optional
integer
Controls the maximum number of processes allowed to run in a pod.
nodeConfig.labels
Optional
map (key: string, value: string)
The map of Kubernetes labels (key/value pairs) to be applied to each node. These will added in addition to any default label(s) that Kubernetes may apply to the node.
nodeConfig.linuxNodeConfig
Optional
object
Parameters that can be configured on Linux nodes.
nodeConfig.linuxNodeConfig.cgroupMode
Optional
string
cgroupMode specifies the cgroup mode to be used on the node.
nodeConfig.linuxNodeConfig.sysctls
Optional
map (key: string, value: string)
The Linux kernel parameters to be applied to the nodes and all pods running on the nodes.
nodeConfig.localNvmeSsdBlockConfig
Optional
object
Immutable. Parameters for raw-block local NVMe SSDs.
nodeConfig.localNvmeSsdBlockConfig.localSsdCount
Required*
integer
Immutable. Number of raw-block local NVMe SSD disks to be attached to the node. Each local SSD is 375 GB in size.
nodeConfig.localSsdCount
Optional
integer
Immutable. The number of local SSD disks to be attached to the node.
nodeConfig.loggingVariant
Optional
string
Type of logging agent that is used as the default value for node pools in the cluster. Valid values include DEFAULT and MAX_THROUGHPUT.
nodeConfig.machineType
Optional
string
Immutable. The name of a Google Compute Engine machine type.
nodeConfig.metadata
Optional
map (key: string, value: string)
Immutable. The metadata key/value pairs assigned to instances in the cluster.
nodeConfig.minCpuPlatform
Optional
string
Immutable. Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform.
nodeConfig.nodeGroupRef
Optional
object
Immutable. Setting this field will assign instances
of this pool to run on the specified node group. This is useful
for running workloads on sole tenant nodes.
nodeConfig.nodeGroupRef.external
Optional
string
Allowed value: The `name` field of a `ComputeNodeGroup` resource.
nodeConfig.nodeGroupRef.name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
nodeConfig.nodeGroupRef.namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
nodeConfig.oauthScopes
Optional
list (string)
Immutable. The set of Google API scopes to be made available on all of the node VMs.
nodeConfig.oauthScopes[]
Optional
string
nodeConfig.preemptible
Optional
boolean
Immutable. Whether the nodes are created as preemptible VM instances.
nodeConfig.reservationAffinity
Optional
object
Immutable. The reservation affinity configuration for the node pool.
nodeConfig.reservationAffinity.consumeReservationType
Required*
string
Immutable. Corresponds to the type of reservation consumption.
nodeConfig.reservationAffinity.key
Optional
string
Immutable. The label key of a reservation resource.
nodeConfig.reservationAffinity.values
Optional
list (string)
Immutable. The label values of the reservation resource.
nodeConfig.reservationAffinity.values[]
Optional
string
nodeConfig.resourceLabels
Optional
map (key: string, value: string)
The GCE resource labels (a map of key/value pairs) to be applied to the node pool.
nodeConfig.sandboxConfig
Optional
object
Immutable. Sandbox configuration for this node.
nodeConfig.sandboxConfig.sandboxType
Required*
string
Type of the sandbox to use for the node (e.g. 'gvisor').
nodeConfig.serviceAccountRef
Optional
object
nodeConfig.serviceAccountRef.external
Optional
string
Allowed value: The `email` field of an `IAMServiceAccount` resource.
nodeConfig.serviceAccountRef.name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
nodeConfig.serviceAccountRef.namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
nodeConfig.shieldedInstanceConfig
Optional
object
Immutable. Shielded Instance options.
nodeConfig.shieldedInstanceConfig.enableIntegrityMonitoring
Optional
boolean
Immutable. Defines whether the instance has integrity monitoring enabled.
nodeConfig.shieldedInstanceConfig.enableSecureBoot
Optional
boolean
Immutable. Defines whether the instance has Secure Boot enabled.
nodeConfig.soleTenantConfig
Optional
object
Immutable. Node affinity options for sole tenant node pools.
nodeConfig.soleTenantConfig.nodeAffinity
Required*
list (object)
Immutable. .
nodeConfig.soleTenantConfig.nodeAffinity[]
Required*
object
nodeConfig.soleTenantConfig.nodeAffinity[].key
Required*
string
Immutable. .
nodeConfig.soleTenantConfig.nodeAffinity[].operator
Required*
string
Immutable. .
nodeConfig.soleTenantConfig.nodeAffinity[].values
Required*
list (string)
Immutable. .
nodeConfig.soleTenantConfig.nodeAffinity[].values[]
Required*
string
nodeConfig.spot
Optional
boolean
Immutable. Whether the nodes are created as spot VM instances.
nodeConfig.tags
Optional
list (string)
The list of instance tags applied to all nodes.
nodeConfig.tags[]
Optional
string
nodeConfig.taint
Optional
list (object)
List of Kubernetes taints to be applied to each node.
nodeConfig.taint[]
Optional
object
nodeConfig.taint[].effect
Required*
string
Effect for taint.
nodeConfig.taint[].key
Required*
string
Key for taint.
nodeConfig.taint[].value
Required*
string
Value for taint.
nodeConfig.workloadMetadataConfig
Optional
object
The workload metadata configuration for this node.
nodeConfig.workloadMetadataConfig.mode
Optional
string
Mode is the configuration for how to expose metadata to workloads running on the node.
nodeConfig.workloadMetadataConfig.nodeMetadata
Optional
string
DEPRECATED. Deprecated in favor of mode. NodeMetadata is the configuration for how to expose metadata to the workloads running on the node.
nodeCount
Optional
integer
The number of nodes per instance group. This field can be used to update the number of nodes per instance group but should not be used alongside autoscaling.
nodeLocations
Optional
list (string)
The list of zones in which the node pool's nodes should be located. Nodes must be in the region of their regional cluster or in the same region as their cluster's zone for zonal clusters. If unspecified, the cluster-level node_locations will be used.
nodeLocations[]
Optional
string
placementPolicy
Optional
object
Immutable. Specifies the node placement policy.
placementPolicy.policyNameRef
Optional
object
Immutable. If set, refers to the name of a custom resource policy supplied by the user. The resource policy must be in the same project and region as the node pool. If not found, InvalidArgument error is returned.
placementPolicy.policyNameRef.external
Optional
string
Allowed value: The `selfLink` field of a `ComputeResourcePolicy` resource.
placementPolicy.policyNameRef.name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
placementPolicy.policyNameRef.namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
placementPolicy.tpuTopology
Optional
string
TPU placement topology for pod slice node pool. https://cloud.google.com/tpu/docs/types-topologies#tpu_topologies.
placementPolicy.type
Required*
string
Type defines the type of placement policy.
resourceID
Optional
string
Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
upgradeSettings
Optional
object
Specify node upgrade settings to change how many nodes GKE attempts to upgrade at once. The number of nodes upgraded simultaneously is the sum of max_surge and max_unavailable. The maximum number of nodes upgraded simultaneously is limited to 20.
upgradeSettings.blueGreenSettings
Optional
object
Settings for BlueGreen node pool upgrade.
upgradeSettings.blueGreenSettings.nodePoolSoakDuration
Optional
string
Time needed after draining entire blue pool. After this period, blue pool will be cleaned up.
upgradeSettings.blueGreenSettings.standardRolloutPolicy
Required*
object
Standard rollout policy is the default policy for blue-green.
upgradeSettings.blueGreenSettings.standardRolloutPolicy.batchNodeCount
Optional
integer
Number of blue nodes to drain in a batch.
upgradeSettings.blueGreenSettings.standardRolloutPolicy.batchPercentage
Optional
float
Percentage of the blue pool nodes to drain in a batch.
upgradeSettings.blueGreenSettings.standardRolloutPolicy.batchSoakDuration
Optional
string
Soak time after each batch gets drained.
upgradeSettings.maxSurge
Optional
integer
The number of additional nodes that can be added to the node pool during an upgrade. Increasing max_surge raises the number of nodes that can be upgraded simultaneously. Can be set to 0 or greater.
upgradeSettings.maxUnavailable
Optional
integer
The number of nodes that can be simultaneously unavailable during an upgrade. Increasing max_unavailable raises the number of nodes that can be upgraded in parallel. Can be set to 0 or greater.
upgradeSettings.strategy
Optional
string
Update strategy for the given nodepool.
version
Optional
string
* Field is required when parent field is specified
Status
Schema
conditions :
- lastTransitionTime : string
message : string
reason : string
status : string
type : string
instanceGroupUrls :
- string
managedInstanceGroupUrls :
- string
observedGeneration : integer
observedState :
version : string
operation : string
Fields
conditions
list (object)
Conditions represent the latest available observation of the resource's current state.
conditions[]
object
conditions[].lastTransitionTime
string
Last time the condition transitioned from one status to another.
conditions[].message
string
Human-readable message indicating details about last transition.
conditions[].reason
string
Unique, one-word, CamelCase reason for the condition's last transition.
conditions[].status
string
Status is the status of the condition. Can be True, False, Unknown.
conditions[].type
string
Type is the type of the condition.
instanceGroupUrls
list (string)
The resource URLs of the managed instance groups associated with this node pool.
instanceGroupUrls[]
string
managedInstanceGroupUrls
list (string)
List of instance group URLs which have been assigned to this node pool.
managedInstanceGroupUrls[]
string
observedGeneration
integer
ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
observedState
object
The observed state of the underlying GCP resource.
observedState.version
string
operation
string
Sample YAML(s)
Basic Node Pool
# Copyright 2020 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
apiVersion : container.cnrm.cloud.google.com/v1beta1
kind : ContainerNodePool
metadata :
labels :
label-one : "value-one"
name : containernodepool-sample-basic
spec :
location : us-east1-c
autoscaling :
minNodeCount : 1
maxNodeCount : 3
nodeConfig :
machineType : n1-standard-1
diskSizeGb : 100
diskType : pd-standard
tags :
- tagone
- tagtwo
preemptible : false
minCpuPlatform : "Intel Haswell"
oauthScopes :
- "https://www.googleapis.com/auth/logging.write"
- "https://www.googleapis.com/auth/monitoring"
guestAccelerator :
- type : "nvidia-tesla-t4"
count : 1
metadata :
disable-legacy-endpoints : "true"
management :
autoRepair : true
autoUpgrade : true
clusterRef :
name : containernodepool-dep-basic
---
apiVersion : container.cnrm.cloud.google.com/v1beta1
kind : ContainerCluster
metadata :
annotations :
cnrm.cloud.google.com/remove-default-node-pool : "true"
name : containernodepool-dep-basic
spec :
location : us-east1-c
initialNodeCount : 1
Sole Tenant Node Pool
# Copyright 2020 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
apiVersion : container.cnrm.cloud.google.com/v1beta1
kind : ContainerNodePool
metadata :
name : containernodepool-sample-soletenancy
spec :
location : us-central1-b
autoscaling :
minNodeCount : 1
maxNodeCount : 3
nodeConfig :
machineType : n1-standard-2
nodeGroupRef :
name : containernodepool-dep-soletenancy
clusterRef :
name : containernodepool-dep-soletenancy
---
apiVersion : compute.cnrm.cloud.google.com/v1beta1
kind : ComputeNodeGroup
metadata :
name : containernodepool-dep-soletenancy
spec :
description : A single sole-tenant node in the us-central1-b zone.
size : 1
nodeTemplateRef :
name : containernodepool-dep-soletenancy
zone : us-central1-b
---
apiVersion : compute.cnrm.cloud.google.com/v1beta1
kind : ComputeNodeTemplate
metadata :
name : containernodepool-dep-soletenancy
spec :
region : us-central1
nodeType : n1-node-96-624
---
apiVersion : container.cnrm.cloud.google.com/v1beta1
kind : ContainerCluster
metadata :
annotations :
cnrm.cloud.google.com/remove-default-node-pool : "true"
name : containernodepool-dep-soletenancy
spec :
description : A cluster using the Compute Engine sole-tenant node.
location : us-central1-b
initialNodeCount : 1
Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
