---
title: "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\
  \ (GKE) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools
knowledge_key: corpus
source_id: site-iam-reference-required-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/reference/api-permissions
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_node_pools
  title: "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\
    \ (GKE) \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Reference
Send feedback
MCP Tools Reference: container.googleapis.com
Stay organized with collections
Save and categorize content based on your preferences.
Tool: list_node_pools
Lists the node pools for a specific GKE cluster.
The following sample demonstrate how to use curl to invoke the list_node_pools MCP tool.
Curl Request
curl --location 'https://container.googleapis.com/mcp' \
--header 'content-type: application/json' \
--header 'accept: application/json, text/event-stream' \
--data '{
"method": "tools/call",
"params": {
"name": "list_node_pools",
"arguments": {
// provide these details according to the tool' s MCP specification
}
} ,
"jsonrpc" : "2.0" ,
"id" : 1
} '
Input Schema
MCPListNodePoolsRequest lists the node pool(s) for a cluster.
MCPListNodePoolsRequest
JSON representation
{
"parent" : string
}
Fields
parent
string
Required. The parent (project, location, cluster name) where the node pools will be listed. Specified in the format projects/*/locations/*/clusters/* .
Output Schema
ListNodePoolsResponse is the result of ListNodePoolsRequest.
ListNodePoolsResponse
JSON representation
{
"nodePools" : [
{
object ( NodePool )
}
]
}
Fields
nodePools[]
object ( NodePool )
A list of node pools for a cluster.
NodePool
JSON representation
{
"name" : string ,
"config" : {
object ( NodeConfig )
} ,
"initialNodeCount" : integer ,
"locations" : [
string
] ,
"networkConfig" : {
object ( NodeNetworkConfig )
} ,
"selfLink" : string ,
"version" : string ,
"instanceGroupUrls" : [
string
] ,
"status" : enum ( Status ) ,
"statusMessage" : string ,
"autoscaling" : {
object ( NodePoolAutoscaling )
} ,
"management" : {
object ( NodeManagement )
} ,
"maxPodsConstraint" : {
object ( MaxPodsConstraint )
} ,
"conditions" : [
{
object ( StatusCondition )
}
] ,
"podIpv4CidrSize" : integer ,
"upgradeSettings" : {
object ( UpgradeSettings )
} ,
"placementPolicy" : {
object ( PlacementPolicy )
} ,
"updateInfo" : {
object ( UpdateInfo )
} ,
"etag" : string ,
"queuedProvisioning" : {
object ( QueuedProvisioning )
} ,
"bestEffortProvisioning" : {
object ( BestEffortProvisioning )
} ,
"nodeDrainConfig" : {
object ( NodeDrainConfig )
}
}
Fields
name
string
The name of the node pool.
config
object ( NodeConfig )
The node configuration of the pool.
initialNodeCount
integer
The initial node count for the pool. You must ensure that your Compute Engine resource quota is sufficient for this number of instances. You must also have available firewall and routes quota.
locations[]
string
The list of Google Compute Engine zones in which the NodePool's nodes should be located.
If this value is unspecified during node pool creation, the Cluster.Locations value will be used, instead.
Warning: changing node pool locations will result in nodes being added and/or removed.
networkConfig
object ( NodeNetworkConfig )
Networking configuration for this NodePool. If specified, it overrides the cluster-level defaults.
selfLink
string
Output only. Server-defined URL for the resource.
version
string
The version of Kubernetes running on this NodePool's nodes. If unspecified, it defaults as described here .
instanceGroupUrls[]
string
Output only. The resource URLs of the managed instance groups associated with this node pool. During the node pool blue-green upgrade operation, the URLs contain both blue and green resources.
status
enum ( Status )
Output only. The status of the nodes in this pool instance.
statusMessage (deprecated)
string
This item is deprecated!
Output only. Deprecated. Use conditions instead. Additional information about the current status of this node pool instance, if available.
autoscaling
object ( NodePoolAutoscaling )
Autoscaler configuration for this NodePool. Autoscaler is enabled only if a valid configuration is present.
management
object ( NodeManagement )
NodeManagement configuration for this NodePool.
maxPodsConstraint
object ( MaxPodsConstraint )
The constraint on the maximum number of pods that can be run simultaneously on a node in the node pool.
conditions[]
object ( StatusCondition )
Which conditions caused the current node pool state.
podIpv4CidrSize
integer
Output only. The pod CIDR block size per node in this node pool.
upgradeSettings
object ( UpgradeSettings )
Upgrade settings control disruption and speed of the upgrade.
placementPolicy
object ( PlacementPolicy )
Specifies the node placement policy.
updateInfo
object ( UpdateInfo )
Output only. Update info contains relevant information during a node pool update.
etag
string
This checksum is computed by the server based on the value of node pool fields, and may be sent on update requests to ensure the client has an up-to-date value before proceeding.
queuedProvisioning
object ( QueuedProvisioning )
Specifies the configuration of queued provisioning.
bestEffortProvisioning
object ( BestEffortProvisioning )
Enable best effort provisioning for nodes
nodeDrainConfig
object ( NodeDrainConfig )
Specifies the node drain configuration for this node pool.
NodeConfig
JSON representation
{
"machineType" : string ,
"diskSizeGb" : integer ,
"oauthScopes" : [
string
] ,
"serviceAccount" : string ,
"metadata" : {
string : string ,
...
} ,
"imageType" : string ,
"labels" : {
string : string ,
...
} ,
"localSsdCount" : integer ,
"tags" : [
string
] ,
"preemptible" : boolean ,
"accelerators" : [
{
object ( AcceleratorConfig )
}
] ,
"diskType" : string ,
"minCpuPlatform" : string ,
"workloadMetadataConfig" : {
object ( WorkloadMetadataConfig )
} ,
"taints" : [
{
object ( NodeTaint )
}
] ,
"sandboxConfig" : {
object ( SandboxConfig )
} ,
"nodeGroup" : string ,
"reservationAffinity" : {
object ( ReservationAffinity )
} ,
"shieldedInstanceConfig" : {
object ( ShieldedInstanceConfig )
} ,
"linuxNodeConfig" : {
object ( LinuxNodeConfig )
} ,
"kubeletConfig" : {
object ( NodeKubeletConfig )
} ,
"bootDiskKmsKey" : string ,
"gcfsConfig" : {
object ( GcfsConfig )
} ,
"advancedMachineFeatures" : {
object ( AdvancedMachineFeatures )
} ,
"gvnic" : {
object ( VirtualNIC )
} ,
"spot" : boolean ,
"confidentialNodes" : {
object ( ConfidentialNodes )
} ,
"resourceLabels" : {
string : string ,
...
} ,
"loggingConfig" : {
object ( NodePoolLoggingConfig )
} ,
"windowsNodeConfig" : {
object ( WindowsNodeConfig )
} ,
"localNvmeSsdBlockConfig" : {
object ( LocalNvmeSsdBlockConfig )
} ,
"ephemeralStorageLocalSsdConfig" : {
object ( EphemeralStorageLocalSsdConfig )
} ,
"soleTenantConfig" : {
object ( SoleTenantConfig )
} ,
"containerdConfig" : {
object ( ContainerdConfig )
} ,
"resourceManagerTags" : {
object ( ResourceManagerTags )
} ,
"enableConfidentialStorage" : boolean ,
"secondaryBootDisks" : [
{
object ( SecondaryBootDisk )
}
] ,
"storagePools" : [
string
] ,
"maxRunDuration" : string ,
"effectiveCgroupMode" : enum ( EffectiveCgroupMode ) ,
"bootDisk" : {
object ( BootDisk )
} ,
"consolidationDelay" : string ,
// Union field _fast_socket can be only one of the following:
"fastSocket" : {
object ( FastSocket )
}
// End of list of possible types for union field _fast_socket .
// Union field _secondary_boot_disk_update_strategy can be only one of the
// following:
"secondaryBootDiskUpdateStrategy" : {
object ( SecondaryBootDiskUpdateStrategy )
}
// End of list of possible types for union field
// _secondary_boot_disk_update_strategy .
// Union field _gpu_direct_config can be only one of the following:
"gpuDirectConfig" : {
object ( GPUDirectConfig )
}
// End of list of possible types for union field _gpu_direct_config .
// Union field _local_ssd_encryption_mode can be only one of the following:
"localSsdEncryptionMode" : enum ( LocalSsdEncryptionMode )
// End of list of possible types for union field _local_ssd_encryption_mode .
// Union field _flex_start can be only one of the following:
"flexStart" : boolean
// End of list of possible types for union field _flex_start .
// Union field _taint_config can be only one of the following:
"taintConfig" : {
object ( TaintConfig )
}
// End of list of possible types for union field _taint_config .
}
Fields
machineType
string
The name of a Google Compute Engine machine type
If unspecified, the default machine type is e2-medium .
diskSizeGb
integer
Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.
If unspecified, the default disk size is 100GB.
oauthScopes[]
string
The set of Google API scopes to be made available on all of the node VMs under the "default" service account.
The following scopes are recommended, but not required, and by default are not included:
https://www.googleapis.com/auth/compute is required for mounting persistent storage on your nodes.
https://www.googleapis.com/auth/devstorage.read_only is required for communicating with gcr.io (the Artifact Registry ).
If unspecified, no scopes are added, unless Cloud Logging or Cloud Monitoring are enabled, in which case their required scopes will be added.
serviceAccount
string
The Google Cloud Platform Service Account to be used by the node VMs. Specify the email address of the Service Account; otherwise, if no Service Account is specified, the "default" service account is used.
metadata
map (key: string, value: string)
The metadata key/value pairs assigned to instances in the cluster.
Keys must conform to the regexp [a-zA-Z0-9-_]+ and be less than 128 bytes in length. These are reflected as part of a URL in the metadata server. Additionally, to avoid ambiguity, keys must not conflict with any other metadata keys for the project or be one of the reserved keys:
"cluster-location"
"cluster-name"
"cluster-uid"
"configure-sh"
"containerd-configure-sh"
"enable-os-login"
"gci-ensure-gke-docker"
"gci-metrics-enabled"
"gci-update-strategy"
"instance-template"
"kube-env"
"startup-script"
"user-data"
"disable-address-manager"
"windows-startup-script-ps1"
"common-psm1"
"k8s-node-setup-psm1"
"install-ssh-psm1"
"user-profile-psm1"
Values are free-form strings, and only have meaning as interpreted by the image running in the instance. The only restriction placed on them is that each value's size must be less than or equal to 32 KB.
The total size of all keys and values must be less than 512 KB.
imageType
string
The image type to use for this node. Note that for a given image type, the latest version of it will be used. Please see https://cloud.google.com/kubernetes-engine/docs/concepts/node-images for available image types.
labels
map (key: string, value: string)
The map of Kubernetes labels (key/value pairs) to be applied to each node. These will added in addition to any default label(s) that Kubernetes may apply to the node. In case of conflict in label keys, the applied set may differ depending on the Kubernetes version -- it's best to assume the behavior is undefined and conflicts should be avoided. For more information, including usage and the valid values, see: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/
localSsdCount
integer
The number of local SSD disks to be attached to the node.
The limit for this value is dependent upon the maximum number of disks available on a machine per zone. See: https://cloud.google.com/compute/docs/disks/local-ssd for more information.
tags[]
string
The list of instance tags applied to all nodes. Tags are used to identify valid sources or targets for network firewalls and are specified by the client during cluster or node pool creation. Each tag within the list must comply with RFC1035.
preemptible
boolean
Whether the nodes are created as preemptible VM instances. See: https://cloud.google.com/compute/docs/instances/preemptible for more information about preemptible VM instances.
accelerators[]
object ( AcceleratorConfig )
A list of hardware accelerators to be attached to each node. See https://cloud.google.com/compute/docs/gpus for more information about support for GPUs.
diskType
string
Type of the disk attached to each node (e.g. 'pd-standard', 'pd-ssd' or 'pd-balanced')
If unspecified, the default disk type is 'pd-standard'
minCpuPlatform
string
Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform. Applicable values are the friendly names of CPU platforms, such as minCpuPlatform: "Intel Haswell" or minCpuPlatform: "Intel Sandy Bridge" . For more information, read how to specify min CPU platform
workloadMetadataConfig
object ( WorkloadMetadataConfig )
The workload metadata configuration for this node.
taints[]
object ( NodeTaint )
List of kubernetes taints to be applied to each node.
For more information, including usage and the valid values, see: https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/
sandboxConfig
object ( SandboxConfig )
Sandbox configuration for this node.
nodeGroup
string
Setting this field will assign instances of this pool to run on the specified node group. This is useful for running workloads on sole tenant nodes .
reservationAffinity
object ( ReservationAffinity )
The optional reservation affinity. Setting this field will apply the specified Zonal Compute Reservation to this node pool.
shieldedInstanceConfig
object ( ShieldedInstanceConfig )
Shielded Instance options.
linuxNodeConfig
object ( LinuxNodeConfig )
Parameters that can be configured on Linux nodes.
kubeletConfig
object ( NodeKubeletConfig )
Node kubelet configs.
bootDiskKmsKey
string
The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool. This should be of the form projects/[KEY_PROJECT_ID]/locations/[LOCATION]/keyRings/[RING_NAME]/cryptoKeys/[KEY_NAME]. For more information about protecting resources with Cloud KMS Keys please see: https://cloud.google.com/compute/docs/disks/customer-managed-encryption
gcfsConfig
object ( GcfsConfig )
Google Container File System (image streaming) configs.
advancedMachineFeatures
object ( AdvancedMachineFeatures )
Advanced features for the Compute Engine VM.
gvnic
object ( VirtualNIC )
Enable or disable gvnic in the node pool.
spot
boolean
Spot flag for enabling Spot VM, which is a rebrand of the existing preemptible flag.
confidentialNodes
object ( ConfidentialNodes )
Confidential nodes config. All the nodes in the node pool will be Confidential VM once enabled.
resourceLabels
map (key: string, value: string)
The resource labels for the node pool to use to annotate any related Google Compute Engine resources.
loggingConfig
object ( NodePoolLoggingConfig )
Logging configuration.
windowsNodeConfig
object ( WindowsNodeConfig )
Parameters that can be configured on Windows nodes.
localNvmeSsdBlockConfig
object ( LocalNvmeSsdBlockConfig )
Parameters for using raw-block Local NVMe SSDs.
ephemeralStorageLocalSsdConfig
object ( EphemeralStorageLocalSsdConfig )
Parameters for the node ephemeral storage using Local SSDs. If unspecified, ephemeral storage is backed by the boot disk.
soleTenantConfig
object ( SoleTenantConfig )
Parameters for node pools to be backed by shared sole tenant node groups.
containerdConfig
object ( ContainerdConfig )
Parameters for containerd customization.
resourceManagerTags
object ( ResourceManagerTags )
A map of resource manager tag keys and values to be attached to the nodes.
enableConfidentialStorage
boolean
Optional. Reserved for future use.
secondaryBootDisks[]
object ( SecondaryBootDisk )
List of secondary boot disks attached to the nodes.
storagePools[]
string
List of Storage Pools where boot disks are provisioned.
maxRunDuration
string ( Duration format)
The maximum duration for the nodes to exist. If unspecified, the nodes can exist indefinitely.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
effectiveCgroupMode
enum ( EffectiveCgroupMode )
Output only. effective_cgroup_mode is the cgroup mode actually used by the node pool. It is determined by the cgroup mode specified in the LinuxNodeConfig or the default cgroup mode based on the cluster creation version.
bootDisk
object ( BootDisk )
The boot disk configuration for the node pool.
consolidationDelay
string ( Duration format)
Consolidation delay defines duration after which the Cluster Autoscaler can scale down underutilized nodes. If not set, nodes are scaled down by default behavior, i.e. according to the chosen autoscaling profile.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
Union field _fast_socket .
_fast_socket can be only one of the following:
fastSocket
object ( FastSocket )
Enable or disable NCCL fast socket for the node pool.
Union field _secondary_boot_disk_update_strategy .
_secondary_boot_disk_update_strategy can be only one of the following:
secondaryBootDiskUpdateStrategy
object ( SecondaryBootDiskUpdateStrategy )
Secondary boot disk update strategy.
Union field _gpu_direct_config .
_gpu_direct_config can be only one of the following:
gpuDirectConfig
object ( GPUDirectConfig )
The configuration for GPU Direct
Union field _local_ssd_encryption_mode .
_local_ssd_encryption_mode can be only one of the following:
localSsdEncryptionMode
enum ( LocalSsdEncryptionMode )
Specifies which method should be used for encrypting the Local SSDs attached to the node.
Union field _flex_start .
_flex_start can be only one of the following:
flexStart
boolean
Flex Start flag for enabling Flex Start VM.
Union field _taint_config .
_taint_config can be only one of the following:
taintConfig
object ( TaintConfig )
Optional. The taint configuration for the node pool.
MetadataEntry
JSON representation
{
"key" : string ,
"value" : string
}
Fields
key
string
value
string
LabelsEntry
JSON representation
{
"key" : string ,
"value" : string
}
Fields
key
string
value
string
AcceleratorConfig
JSON representation
{
"acceleratorCount" : string ,
"acceleratorType" : string ,
"gpuPartitionSize" : string ,
// Union field _gpu_sharing_config can be only one of the following:
"gpuSharingConfig" : {
object ( GPUSharingConfig )
}
// End of list of possible types for union field _gpu_sharing_config .
// Union field _gpu_driver_installation_config can be only one of the
// following:
"gpuDriverInstallationConfig" : {
object ( GPUDriverInstallationConfig )
}
// End of list of possible types for union field
// _gpu_driver_installation_config .
}
Fields
acceleratorCount
string ( int64 format)
The number of the accelerator cards exposed to an instance.
acceleratorType
string
The accelerator type resource name. List of supported accelerators here
gpuPartitionSize
string
Size of partitions to create on the GPU. Valid values are described in the NVIDIA mig user guide .
Union field _gpu_sharing_config .
_gpu_sharing_config can be only one of the following:
gpuSharingConfig
object ( GPUSharingConfig )
The configuration for GPU sharing options.
Union field _gpu_driver_installation_config .
_gpu_driver_installation_config can be only one of the following:
gpuDriverInstallationConfig
object ( GPUDriverInstallationConfig )
The configuration for auto installation of GPU driver.
GPUSharingConfig
JSON representation
{
"maxSharedClientsPerGpu" : string ,
// Union field _gpu_sharing_strategy can be only one of the following:
"gpuSharingStrategy" : enum ( GPUSharingStrategy )
// End of list of possible types for union field _gpu_sharing_strategy .
}
Fields
maxSharedClientsPerGpu
string ( int64 format)
The max number of containers that can share a physical GPU.
Union field _gpu_sharing_strategy .
_gpu_sharing_strategy can be only one of the following:
gpuSharingStrategy
enum ( GPUSharingStrategy )
The type of GPU sharing strategy to enable on the GPU node.
GPUDriverInstallationConfig
JSON representation
{
// Union field _gpu_driver_version can be only one of the following:
"gpuDriverVersion" : enum ( GPUDriverVersion )
// End of list of possible types for union field _gpu_driver_version .
}
Fields
Union field _gpu_driver_version .
_gpu_driver_version can be only one of the following:
gpuDriverVersion
enum ( GPUDriverVersion )
Mode for how the GPU driver is installed.
WorkloadMetadataConfig
JSON representation
{
"mode" : enum ( Mode )
}
Fields
mode
enum ( Mode )
Mode is the configuration for how to expose metadata to workloads running on the node pool.
NodeTaint
JSON representation
{
"key" : string ,
"value" : string ,
"effect" : enum ( Effect )
}
Fields
key
string
Key for taint.
value
string
Value for taint.
effect
enum ( Effect )
Effect for taint.
SandboxConfig
JSON representation
{
"type" : enum ( Type )
}
Fields
type
enum ( Type )
Type of the sandbox to use for the node.
ReservationAffinity
JSON representation
{
"consumeReservationType" : enum ( Type ) ,
"key" : string ,
"values" : [
string
]
}
Fields
consumeReservationType
enum ( Type )
Corresponds to the type of reservation consumption.
key
string
Corresponds to the label key of a reservation resource. To target a SPECIFIC_RESERVATION by name, specify "compute.googleapis.com/reservation-name" as the key and specify the name of your reservation as its value.
values[]
string
Corresponds to the label value(s) of reservation resource(s).
ShieldedInstanceConfig
JSON representation
{
"enableSecureBoot" : boolean ,
"enableIntegrityMonitoring" : boolean
}
Fields
enableSecureBoot
boolean
Defines whether the instance has Secure Boot enabled.
Secure Boot helps ensure that the system only runs authentic software by verifying the digital signature of all boot components, and halting the boot process if signature verification fails.
enableIntegrityMonitoring
boolean
Defines whether the instance has integrity monitoring enabled.
Enables monitoring and attestation of the boot integrity of the instance. The attestation is performed against the integrity policy baseline. This baseline is initially derived from the implicitly trusted boot image when the instance is created.
LinuxNodeConfig
JSON representation
{
"sysctls" : {
string : string ,
...
} ,
"cgroupMode" : enum ( CgroupMode ) ,
"transparentHugepageEnabled" : enum ( TransparentHugepageEnabled ) ,
"transparentHugepageDefrag" : enum ( TransparentHugepageDefrag ) ,
"nodeKernelModuleLoading" : {
object ( NodeKernelModuleLoading )
} ,
// Union field _hugepages can be only one of the following:
"hugepages" : {
object ( HugepagesConfig )
}
// End of list of possible types for union field _hugepages .
// Union field _swap_config can be only one of the following:
"swapConfig" : {
object ( SwapConfig )
}
// End of list of possible types for union field _swap_config .
}
Fields
sysctls
map (key: string, value: string)
The Linux kernel parameters to be applied to the nodes and all pods running on the nodes.
The following parameters are supported.
net.core.busy_poll net.core.busy_read net.core.netdev_max_backlog net.core.rmem_max net.core.rmem_default net.core.wmem_default net.core.wmem_max net.core.optmem_max net.core.somaxconn net.ipv4.tcp_rmem net.ipv4.tcp_wmem net.ipv4.tcp_tw_reuse net.ipv4.tcp_mtu_probing net.ipv4.tcp_max_orphans net.ipv4.tcp_max_tw_buckets net.ipv4.tcp_syn_retries net.ipv4.tcp_ecn net.ipv4.tcp_congestion_control net.netfilter.nf_conntrack_max net.netfilter.nf_conntrack_buckets net.netfilter.nf_conntrack_tcp_timeout_close_wait net.netfilter.nf_conntrack_tcp_timeout_time_wait net.netfilter.nf_conntrack_tcp_timeout_established net.netfilter.nf_conntrack_acct kernel.shmmni kernel.shmmax kernel.shmall kernel.perf_event_paranoid kernel.sched_rt_runtime_us kernel.softlockup_panic kernel.yama.ptrace_scope kernel.kptr_restrict kernel.dmesg_restrict kernel.sysrq fs.aio-max-nr fs.file-max fs.inotify.max_user_instances fs.inotify.max_user_watches fs.nr_open vm.dirty_background_ratio vm.dirty_background_bytes vm.dirty_expire_centisecs vm.dirty_ratio vm.dirty_bytes vm.dirty_writeback_centisecs vm.max_map_count vm.overcommit_memory vm.overcommit_ratio vm.vfs_cache_pressure vm.swappiness vm.watermark_scale_factor vm.min_free_kbytes
cgroupMode
enum ( CgroupMode )
cgroup_mode specifies the cgroup mode to be used on the node.
transparentHugepageEnabled
enum ( TransparentHugepageEnabled )
Optional. Transparent hugepage support for anonymous memory can be entirely disabled (mostly for debugging purposes) or only enabled inside MADV_HUGEPAGE regions (to avoid the risk of consuming more memory resources) or enabled system wide.
See https://docs.kernel.org/admin-guide/mm/transhuge.html for more details.
transparentHugepageDefrag
enum ( TransparentHugepageDefrag )
Optional. Defines the transparent hugepage defrag configuration on the node. VM hugepage allocation can be managed by either limiting defragmentation for delayed allocation or skipping it entirely for immediate allocation only.
See https://docs.kernel.org/admin-guide/mm/transhuge.html for more details.
nodeKernelModuleLoading
object ( NodeKernelModuleLoading )
Optional. Configuration for kernel module loading on nodes. When enabled, the node pool will be provisioned with a Container-Optimized OS image that enforces kernel module signature verification.
Union field _hugepages .
_hugepages can be only one of the following:
hugepages
object ( HugepagesConfig )
Optional. Amounts for 2M and 1G hugepages
Union field _swap_config .
_swap_config can be only one of the following:
swapConfig
object ( SwapConfig )
Optional. Enables and configures swap space on nodes. If omitted, swap is disabled.
SysctlsEntry
JSON representation
{
"key" : string ,
"value" : string
}
Fields
key
string
value
string
HugepagesConfig
JSON representation
{
// Union field _hugepage_size2m can be only one of the following:
"hugepageSize2m" : integer
// End of list of possible types for union field _hugepage_size2m .
// Union field _hugepage_size1g can be only one of the following:
"hugepageSize1g" : integer
// End of list of possible types for union field _hugepage_size1g .
}
Fields
Union field _hugepage_size2m .
_hugepage_size2m can be only one of the following:
hugepageSize2m
integer
Optional. Amount of 2M hugepages
Union field _hugepage_size1g .
_hugepage_size1g can be only one of the following:
hugepageSize1g
integer
Optional. Amount of 1G hugepages
SwapConfig
JSON representation
{
// Union field _enabled can be only one of the following:
"enabled" : boolean
// End of list of possible types for union field _enabled .
// Union field _encryption_config can be only one of the following:
"encryptionConfig" : {
object ( EncryptionConfig )
}
// End of list of possible types for union field _encryption_config .
// Union field performance_profile can be only one of the following:
"bootDiskProfile" : {
object ( BootDiskProfile )
} ,
"ephemeralLocalSsdProfile" : {
object ( EphemeralLocalSsdProfile )
} ,
"dedicatedLocalSsdProfile" : {
object ( DedicatedLocalSsdProfile )
}
// End of list of possible types for union field performance_profile .
}
Fields
Union field _enabled .
_enabled can be only one of the following:
enabled
boolean
Optional. Enables or disables swap for the node pool.
Union field _encryption_config .
_encryption_config can be only one of the following:
encryptionConfig
object ( EncryptionConfig )
Optional. If omitted, swap space is encrypted by default.
Union field performance_profile . Optional. Defines the backing storage for the swap space. If omitted, defaults to the 'boot_disk_profile'. performance_profile can be only one of the following:
bootDiskProfile
object ( BootDiskProfile )
Swap on the node's boot disk.
ephemeralLocalSsdProfile
object ( EphemeralLocalSsdProfile )
Swap on the local SSD shared with pod ephemeral storage.
dedicatedLocalSsdProfile
object ( DedicatedLocalSsdProfile )
Provisions a new, separate local NVMe SSD exclusively for swap.
EncryptionConfig
JSON representation
{
// Union field _disabled can be only one of the following:
"disabled" : boolean
// End of list of possible types for union field _disabled .
}
Fields
Union field _disabled .
_disabled can be only one of the following:
disabled
boolean
Optional. If true, swap space will not be encrypted. Defaults to false (encrypted).
BootDiskProfile
JSON representation
{
// Union field swap_size can be only one of the following:
"swapSizeGib" : string ,
"swapSizePercent" : integer
// End of list of possible types for union field swap_size .
}
Fields
Union field swap_size . Optional. Specifies the size of the swap space. If omitted, GKE determines an optimal size based on node memory. swap_size can be only one of the following:
swapSizeGib
string ( int64 format)
Specifies the size of the swap space in gibibytes (GiB).
swapSizePercent
integer
Specifies the size of the swap space as a percentage of the boot disk size.
EphemeralLocalSsdProfile
JSON representation
{
// Union field swap_size can be only one of the following:
"swapSizeGib" : string ,
"swapSizePercent" : integer
// End of list of possible types for union field swap_size .
}
Fields
Union field swap_size . Specifies the size of the swap space to be provisioned. swap_size can be only one of the following:
swapSizeGib
string ( int64 format)
Specifies the size of the swap space in gibibytes (GiB).
swapSizePercent
integer
Specifies the size of the swap space as a percentage of the ephemeral local SSD capacity.
DedicatedLocalSsdProfile
JSON representation
{
"diskCount" : string
}
Fields
diskCount
string ( int64 format)
The number of physical local NVMe SSD disks to attach.
NodeKernelModuleLoading
JSON representation
{
"policy" : enum ( Policy )
}
Fields
policy
enum ( Policy )
Set the node module loading policy for nodes in the node pool.
NodeKubeletConfig
JSON representation
{
"cpuManagerPolicy" : string ,
"topologyManager" : {
object ( TopologyManager )
} ,
"memoryManager" : {
object ( MemoryManager )
} ,
"cpuCfsQuota" : boolean ,
"cpuCfsQuotaPeriod" : string ,
"podPidsLimit" : string ,
"imageGcLowThresholdPercent" : integer ,
"imageGcHighThresholdPercent" : integer ,
"imageMinimumGcAge" : string ,
"imageMaximumGcAge" : string ,
"containerLogMaxSize" : string ,
"containerLogMaxFiles" : integer ,
"allowedUnsafeSysctls" : [
string
] ,
"evictionSoft" : {
object ( EvictionSignals )
} ,
"evictionSoftGracePeriod" : {
object ( EvictionGracePeriod )
} ,
"evictionMinimumReclaim" : {
object ( EvictionMinimumReclaim )
} ,
"evictionMaxPodGracePeriodSeconds" : integer ,
"maxParallelImagePulls" : integer ,
"crashLoopBackOff" : {
object ( CrashLoopBackOffConfig )
} ,
// Union field _insecure_kubelet_readonly_port_enabled can be only one of the
// following:
"insecureKubeletReadonlyPortEnabled" : boolean
// End of list of possible types for union field
// _insecure_kubelet_readonly_port_enabled .
// Union field _single_process_oom_kill can be only one of the following:
"singleProcessOomKill" : boolean
// End of list of possible types for union field _single_process_oom_kill .
// Union field _shutdown_grace_period_seconds can be only one of the following:
"shutdownGracePeriodSeconds" : integer
// End of list of possible types for union field
// _shutdown_grace_period_seconds .
// Union field _shutdown_grace_period_critical_pods_seconds can be only one of
// the following:
"shutdownGracePeriodCriticalPodsSeconds" : integer
// End of list of possible types for union field
// _shutdown_grace_period_critical_pods_seconds .
}
Fields
cpuManagerPolicy
string
Control the CPU management policy on the node. See https://kubernetes.io/docs/tasks/administer-cluster/cpu-management-policies/
The following values are allowed. * "none": the default, which represents the existing scheduling behavior. * "static": allows pods with certain resource characteristics to be granted increased CPU affinity and exclusivity on the node. The default value is 'none' if unspecified.
topologyManager
object ( TopologyManager )
Optional. Controls Topology Manager configuration on the node. For more information, see: https://kubernetes.io/docs/tasks/administer-cluster/topology-manager/
memoryManager
object ( MemoryManager )
Optional. Controls NUMA-aware Memory Manager configuration on the node. For more information, see: https://kubernetes.io/docs/tasks/administer-cluster/memory-manager/
cpuCfsQuota
boolean
Enable CPU CFS quota enforcement for containers that specify CPU limits.
This option is enabled by default which makes kubelet use CFS quota ( https://www.kernel.org/doc/Documentation/scheduler/sched-bwc.txt ) to enforce container CPU limits. Otherwise, CPU limits will not be enforced at all.
Disable this option to mitigate CPU throttling problems while still having your pods to be in Guaranteed QoS class by specifying the CPU limits.
The default value is 'true' if unspecified.
cpuCfsQuotaPeriod
string
Set the CPU CFS quota period value 'cpu.cfs_period_us'.
The string must be a sequence of decimal numbers, each with optional fraction and a unit suffix, such as "300ms". Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h". The value must be a positive duration between 1ms and 1 second, inclusive.
podPidsLimit
string ( int64 format)
Set the Pod PID limits. See https://kubernetes.io/docs/concepts/policy/pid-limiting/#pod-pid-limits
Controls the maximum number of processes allowed to run in a pod. The value must be greater than or equal to 1024 and less than 4194304.
imageGcLowThresholdPercent
integer
Optional. Defines the percent of disk usage before which image garbage collection is never run. Lowest disk usage to garbage collect to. The percent is calculated as this field value out of 100.
The value must be between 10 and 85, inclusive and smaller than image_gc_high_threshold_percent.
The default value is 80 if unspecified.
imageGcHighThresholdPercent
integer
Optional. Defines the percent of disk usage after which image garbage collection is always run. The percent is calculated as this field value out of 100.
The value must be between 10 and 85, inclusive and greater than image_gc_low_threshold_percent.
The default value is 85 if unspecified.
imageMinimumGcAge
string
Optional. Defines the minimum age for an unused image before it is garbage collected.
The string must be a sequence of decimal numbers, each with optional fraction and a unit suffix, such as "300s", "1.5h", and "2h45m". Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h".
The value must be a positive duration less than or equal to 2 minutes.
The default value is "2m0s" if unspecified.
imageMaximumGcAge
string
Optional. Defines the maximum age an image can be unused before it is garbage collected. The string must be a sequence of decimal numbers, each with optional fraction and a unit suffix, such as "300s", "1.5h", and "2h45m". Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h".
The value must be a positive duration greater than image_minimum_gc_age or "0s".
The default value is "0s" if unspecified, which disables this field, meaning images won't be garbage collected based on being unused for too long.
containerLogMaxSize
string
Optional. Defines the maximum size of the container log file before it is rotated. See https://kubernetes.io/docs/concepts/cluster-administration/logging/#log-rotation
Valid format is positive number + unit, e.g. 100Ki, 10Mi. Valid units are Ki, Mi, Gi. The value must be between 10Mi and 500Mi, inclusive.
Note that the total container log size (container_log_max_size * container_log_max_files) cannot exceed 1% of the total storage of the node, to avoid disk pressure caused by log files.
The default value is 10Mi if unspecified.
containerLogMaxFiles
integer
Optional. Defines the maximum number of container log files that can be present for a container. See https://kubernetes.io/docs/concepts/cluster-administration/logging/#log-rotation
The value must be an integer between 2 and 10, inclusive. The default value is 5 if unspecified.
allowedUnsafeSysctls[]
string
Optional. Defines a comma-separated allowlist of unsafe sysctls or sysctl patterns (ending in * ).
The unsafe namespaced sysctl groups are kernel.shm* , kernel.msg* , kernel.sem , fs.mqueue.* , and net.* . Leaving this allowlist empty means they cannot be set on Pods.
To allow certain sysctls or sysctl patterns to be set on Pods, list them separated by commas. For example: kernel.msg*,net.ipv4.route.min_pmtu .
See https://kubernetes.io/docs/tasks/administer-cluster/sysctl-cluster/ for more details.
evictionSoft
object ( EvictionSignals )
Optional. eviction_soft is a map of signal names to quantities that defines soft eviction thresholds. Each signal is compared to its corresponding threshold to determine if a pod eviction should occur.
evictionSoftGracePeriod
object ( EvictionGracePeriod )
Optional. eviction_soft_grace_period is a map of signal names to quantities that defines grace periods for each soft eviction signal. The grace period is the amount of time that a pod must be under pressure before an eviction occurs.
evictionMinimumReclaim
object ( EvictionMinimumReclaim )
Optional. eviction_minimum_reclaim is a map of signal names to quantities that defines minimum reclaims, which describe the minimum amount of a given resource the kubelet will reclaim when performing a pod eviction while that resource is under pressure.
evictionMaxPodGracePeriodSeconds
integer
Optional. eviction_max_pod_grace_period_seconds is the maximum allowed grace period (in seconds) to use when terminating pods in response to a soft eviction threshold being met. This value effectively caps the Pod's terminationGracePeriodSeconds value during soft evictions. Default: 0. Range: [0, 300].
maxParallelImagePulls
integer
Optional. Defines the maximum number of image pulls in parallel. The range is 2 to 5, inclusive. The default value is 2 or 3 depending on the disk type.
See https://kubernetes.io/docs/concepts/containers/images/#maximum-parallel-image-pulls for more details.
crashLoopBackOff
object ( CrashLoopBackOffConfig )
Optional. Contains configuration options to modify node-level parameters for container restart behavior.
Union field _insecure_kubelet_readonly_port_enabled .
_insecure_kubelet_readonly_port_enabled can be only one of the following:
insecureKubeletReadonlyPortEnabled
boolean
Enable or disable Kubelet read only port.
Union field _single_process_oom_kill .
_single_process_oom_kill can be only one of the following:
singleProcessOomKill
boolean
Optional. Defines whether to enable single process OOM killer. If true, will prevent the memory.oom.group flag from being set for container cgroups in cgroups v2. This causes processes in the container to be OOM killed individually instead of as a group.
Union field _shutdown_grace_period_seconds .
_shutdown_grace_period_seconds can be only one of the following:
shutdownGracePeriodSeconds
integer
Optional. shutdown_grace_period_seconds is the maximum allowed grace period (in seconds) the total duration that the node should delay the shutdown during a graceful shutdown. This is the total grace period for pod termination for both regular and critical pods. https://kubernetes.io/docs/concepts/cluster-administration/node-shutdown/ If set to 0, node will not enable the graceful node shutdown functionality. This field is only valid for Spot VMs. Allowed values: 0, 30, 120.
Union field _shutdown_grace_period_critical_pods_seconds .
_shutdown_grace_period_critical_pods_seconds can be only one of the following:
shutdownGracePeriodCriticalPodsSeconds
integer
Optional. shutdown_grace_period_critical_pods_seconds is the maximum allowed grace period (in seconds) used to terminate critical pods during a node shutdown. This value should be <= shutdown_grace_period_seconds, and is only valid if shutdown_grace_period_seconds is set. https://kubernetes.io/docs/concepts/cluster-administration/node-shutdown/ Range: [0, 120].
TopologyManager
JSON representation
{
"policy" : string ,
"scope" : string
}
Fields
policy
string
Configures the strategy for resource alignment. Allowed values are:
none: the default policy, and does not perform any topology alignment.
restricted: the topology manager stores the preferred NUMA node affinity for the container, and will reject the pod if the affinity if not preferred.
best-effort: the topology manager stores the preferred NUMA node affinity for the container. If the affinity is not preferred, the topology manager will admit the pod to the node anyway.
single-numa-node: the topology manager determines if the single NUMA node affinity is possible. If it is, Topology Manager will store this and the Hint Providers can then use this information when making the resource allocation decision. If, however, this is not possible then the Topology Manager will reject the pod from the node. This will result in a pod in a Terminated state with a pod admission failure.
The default policy value is 'none' if unspecified. Details about each strategy can be found here .
scope
string
The Topology Manager aligns resources in following scopes:
container
pod
The default scope is 'container' if unspecified. See https://kubernetes.io/docs/tasks/administer-cluster/topology-manager/#topology-manager-scopes
MemoryManager
JSON representation
{
"policy" : string
}
Fields
policy
string
Controls the memory management policy on the Node. See https://kubernetes.io/docs/tasks/administer-cluster/memory-manager/#policies
The following values are allowed. * "none" * "static" The default value is 'none' if unspecified.
BoolValue
JSON representation
{
"value" : boolean
}
Fields
value
boolean
The bool value.
EvictionSignals
JSON representation
{
"memoryAvailable" : string ,
"nodefsAvailable" : string ,
"nodefsInodesFree" : string ,
"imagefsAvailable" : string ,
"imagefsInodesFree" : string ,
"pidAvailable" : string
}
Fields
memoryAvailable
string
Optional. Memory available (i.e. capacity - workingSet), in bytes. Defines the amount of "memory.available" signal in kubelet. Default is unset, if not specified in the kubelet config. Format: positive number + unit, e.g. 100Ki, 10Mi, 5Gi. Valid units are Ki, Mi, Gi. Must be >= 100Mi and <= 50% of the node's memory. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals
nodefsAvailable
string
Optional. Amount of storage available on filesystem that kubelet uses for volumes, daemon logs, etc. Defines the amount of "nodefs.available" signal in kubelet. Default is unset, if not specified in the kubelet config. It takses percentage value for now. Sample format: "30%". Must be >= 10% and <= 50%. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals
nodefsInodesFree
string
Optional. Amount of inodes available on filesystem that kubelet uses for volumes, daemon logs, etc. Defines the amount of "nodefs.inodesFree" signal in kubelet. Default is unset, if not specified in the kubelet config. Linux only. It takses percentage value for now. Sample format: "30%". Must be >= 5% and <= 50%. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals
imagefsAvailable
string
Optional. Amount of storage available on filesystem that container runtime uses for storing images layers. If the container filesystem and image filesystem are not separate, then imagefs can store both image layers and writeable layers. Defines the amount of "imagefs.available" signal in kubelet. Default is unset, if not specified in the kubelet config. It takses percentage value for now. Sample format: "30%". Must be >= 15% and <= 50%. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals
imagefsInodesFree
string
Optional. Amount of inodes available on filesystem that container runtime uses for storing images layers. Defines the amount of "imagefs.inodesFree" signal in kubelet. Default is unset, if not specified in the kubelet config. Linux only. It takses percentage value for now. Sample format: "30%". Must be >= 5% and <= 50%. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals
pidAvailable
string
Optional. Amount of PID available for pod allocation. Defines the amount of "pid.available" signal in kubelet. Default is unset, if not specified in the kubelet config. It takses percentage value for now. Sample format: "30%". Must be >= 10% and <= 50%. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals
EvictionGracePeriod
JSON representation
{
"memoryAvailable" : string ,
"nodefsAvailable" : string ,
"nodefsInodesFree" : string ,
"imagefsAvailable" : string ,
"imagefsInodesFree" : string ,
"pidAvailable" : string
}
Fields
memoryAvailable
string
Optional. Grace period for eviction due to memory available signal. Sample format: "10s". Must be >= 0. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals
nodefsAvailable
string
Optional. Grace period for eviction due to nodefs available signal. Sample format: "10s". Must be >= 0. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals
nodefsInodesFree
string
Optional. Grace period for eviction due to nodefs inodes free signal. Sample format: "10s". Must be >= 0. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals
imagefsAvailable
string
Optional. Grace period for eviction due to imagefs available signal. Sample format: "10s". Must be >= 0. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals
imagefsInodesFree
string
Optional. Grace period for eviction due to imagefs inodes free signal. Sample format: "10s". Must be >= 0. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals
pidAvailable
string
Optional. Grace period for eviction due to pid available signal. Sample format: "10s". Must be >= 0. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals
EvictionMinimumReclaim
JSON representation
{
"memoryAvailable" : string ,
"nodefsAvailable" : string ,
"nodefsInodesFree" : string ,
"imagefsAvailable" : string ,
"imagefsInodesFree" : string ,
"pidAvailable" : string
}
Fields
memoryAvailable
string
Optional. Minimum reclaim for eviction due to memory available signal. Only take percentage value for now. Sample format: "10%". Must be <=10%. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals
nodefsAvailable
string
Optional. Minimum reclaim for eviction due to nodefs available signal. Only take percentage value for now. Sample format: "10%". Must be <=10%. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals
nodefsInodesFree
string
Optional. Minimum reclaim for eviction due to nodefs inodes free signal. Only take percentage value for now. Sample format: "10%". Must be <=10%. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals
imagefsAvailable
string
Optional. Minimum reclaim for eviction due to imagefs available signal. Only take percentage value for now. Sample format: "10%". Must be <=10%. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals
imagefsInodesFree
string
Optional. Minimum reclaim for eviction due to imagefs inodes free signal. Only take percentage value for now. Sample format: "10%". Must be <=10%. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals
pidAvailable
string
Optional. Minimum reclaim for eviction due to pid available signal. Only take percentage value for now. Sample format: "10%". Must be <=10%. See https://kubernetes.io/docs/concepts/scheduling-eviction/node-pressure-eviction/#eviction-signals
CrashLoopBackOffConfig
JSON representation
{
"maxContainerRestartPeriod" : string
}
Fields
maxContainerRestartPeriod
string
Optional. The maximum duration the backoff delay can accrue to for container restarts, minimum 1 second, maximum 300 seconds. If not set, defaults to the internal crashloopbackoff maximum.
The string must be a sequence of decimal numbers, each with optional fraction and a unit suffix, such as "300ms". Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h".
See https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#configurable-container-restart-delay for more details.
GcfsConfig
JSON representation
{
"enabled" : boolean
}
Fields
enabled
boolean
Whether to use GCFS.
AdvancedMachineFeatures
JSON representation
{
// Union field _threads_per_core can be only one of the following:
"threadsPerCore" : string
// End of list of possible types for union field _threads_per_core .
// Union field _enable_nested_virtualization can be only one of the following:
"enableNestedVirtualization" : boolean
// End of list of possible types for union field _enable_nested_virtualization .
// Union field _performance_monitoring_unit can be only one of the following:
"performanceMonitoringUnit" : enum ( PerformanceMonitoringUnit )
// End of list of possible types for union field _performance_monitoring_unit .
}
Fields
Union field _threads_per_core .
_threads_per_core can be only one of the following:
threadsPerCore
string ( int64 format)
The number of threads per physical core. To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.
Union field _enable_nested_virtualization .
_enable_nested_virtualization can be only one of the following:
enableNestedVirtualization
boolean
Whether or not to enable nested virtualization (defaults to false).
Union field _performance_monitoring_unit .
_performance_monitoring_unit can be only one of the following:
performanceMonitoringUnit
enum ( PerformanceMonitoringUnit )
Type of Performance Monitoring Unit (PMU) requested on node pool instances. If unset, PMU will not be available to the node.
VirtualNIC
JSON representation
{
"enabled" : boolean
}
Fields
enabled
boolean
Whether gVNIC features are enabled in the node pool.
ConfidentialNodes
JSON representation
{
"enabled" : boolean ,
"confidentialInstanceType" : enum ( ConfidentialInstanceType )
}
Fields
enabled
boolean
Whether Confidential Nodes feature is enabled.
confidentialInstanceType
enum ( ConfidentialInstanceType )
Defines the type of technology used by the confidential node.
FastSocket
JSON representation
{
"enabled" : boolean
}
Fields
enabled
boolean
Whether Fast Socket features are enabled in the node pool.
ResourceLabelsEntry
JSON representation
{
"key" : string ,
"value" : string
}
Fields
key
string
value
string
NodePoolLoggingConfig
JSON representation
{
"variantConfig" : {
object ( LoggingVariantConfig )
}
}
Fields
variantConfig
object ( LoggingVariantConfig )
Logging variant configuration.
LoggingVariantConfig
JSON representation
{
"variant" : enum ( Variant )
}
Fields
variant
enum ( Variant )
Logging variant deployed on nodes.
WindowsNodeConfig
JSON representation
{
"osVersion" : enum ( OSVersion )
}
Fields
osVersion
enum ( OSVersion )
OSVersion specifies the Windows node config to be used on the node.
LocalNvmeSsdBlockConfig
JSON representation
{
"localSsdCount" : integer
}
Fields
localSsdCount
integer
Number of local NVMe SSDs to use. The limit for this value is dependent upon the maximum number of disk available on a machine per zone. See: https://cloud.google.com/compute/docs/disks/local-ssd for more information.
A zero (or unset) value has different meanings depending on machine type being used: 1. For pre-Gen3 machines, which support flexible numbers of local ssds, zero (or unset) means to disable using local SSDs as ephemeral storage. 2. For Gen3 machines which dictate a specific number of local ssds, zero (or unset) means to use the default number of local ssds that goes with that machine type. For example, for a c3-standard-8-lssd machine, 2 local ssds would be provisioned. For c3-standard-8 (which doesn't support local ssds), 0 will be provisioned. See https://cloud.google.com/compute/docs/disks/local-ssd#choose_number_local_ssds for more info.
EphemeralStorageLocalSsdConfig
JSON representation
{
"localSsdCount" : integer ,
"dataCacheCount" : integer
}
Fields
localSsdCount
integer
Number of local SSDs to use to back ephemeral storage. Uses NVMe interfaces.
A zero (or unset) value has different meanings depending on machine type being used: 1. For pre-Gen3 machines, which support flexible numbers of local ssds, zero (or unset) means to disable using local SSDs as ephemeral storage. The limit for this value is dependent upon the maximum number of disk available on a machine per zone. See: https://cloud.google.com/compute/docs/disks/local-ssd for more information. 2. For Gen3 machines which dictate a specific number of local ssds, zero (or unset) means to use the default number of local ssds that goes with that machine type. For example, for a c3-standard-8-lssd machine, 2 local ssds would be provisioned. For c3-standard-8 (which doesn't support local ssds), 0 will be provisioned. See https://cloud.google.com/compute/docs/disks/local-ssd#choose_number_local_ssds for more info.
dataCacheCount
integer
Number of local SSDs to use for GKE Data Cache.
SoleTenantConfig
JSON representation
{
"nodeAffinities" : [
{
object ( NodeAffinity )
}
] ,
// Union field _min_node_cpus can be only one of the following:
"minNodeCpus" : integer
// End of list of possible types for union field _min_node_cpus .
}
Fields
nodeAffinities[]
object ( NodeAffinity )
NodeAffinities used to match to a shared sole tenant node group.
Union field _min_node_cpus .
_min_node_cpus can be only one of the following:
minNodeCpus
integer
Optional. The minimum number of virtual CPUs this instance will consume when running on a sole-tenant node. This field can only be set if the node pool is created in a shared sole-tenant node group.
NodeAffinity
JSON representation
{
"key" : string ,
"operator" : enum ( Operator ) ,
"values" : [
string
]
}
Fields
key
string
Key for NodeAffinity.
operator
enum ( Operator )
Operator for NodeAffinity.
values[]
string
Values for NodeAffinity.
ContainerdConfig
JSON representation
{
"privateRegistryAccessConfig" : {
object ( PrivateRegistryAccessConfig )
} ,
"writableCgroups" : {
object ( WritableCgroups )
} ,
"registryHosts" : [
{
object ( RegistryHostConfig )
}
]
}
Fields
privateRegistryAccessConfig
object ( PrivateRegistryAccessConfig )
PrivateRegistryAccessConfig is used to configure access configuration for private container registries.
writableCgroups
object ( WritableCgroups )
Optional. WritableCgroups defines writable cgroups configuration for the node pool.
registryHosts[]
object ( RegistryHostConfig )
RegistryHostConfig configures containerd registry host configuration. Each registry_hosts represents a hosts.toml file. At most 25 registry_hosts are allowed.
PrivateRegistryAccessConfig
JSON representation
{
"enabled" : boolean ,
"certificateAuthorityDomainConfig" : [
{
object ( CertificateAuthorityDomainConfig )
}
]
}
Fields
enabled
boolean
Private registry access is enabled.
certificateAuthorityDomainConfig[]
object ( CertificateAuthorityDomainConfig )
Private registry access configuration.
CertificateAuthorityDomainConfig
JSON representation
{
"fqdns" : [
string
] ,
// Union field certificate_config can be only one of the following:
"gcpSecretManagerCertificateConfig" : {
object ( GCPSecretManagerCertificateConfig )
}
// End of list of possible types for union field certificate_config .
}
Fields
fqdns[]
string
List of fully qualified domain names (FQDN). Specifying port is supported. Wildcards are NOT supported. Examples: - my.customdomain.com - 10.0.1.2:5000
Union field certificate_config . Certificate access config. The following are supported: - GCPSecretManagerCertificateConfig certificate_config can be only one of the following:
gcpSecretManagerCertificateConfig
object ( GCPSecretManagerCertificateConfig )
Secret Manager certificate configuration.
GCPSecretManagerCertificateConfig
JSON representation
{
"secretUri" : string
}
Fields
secretUri
string
Secret URI, in the form "projects/$PROJECT_ID/secrets/$SECRET_NAME/versions/$VERSION". Version can be fixed (e.g. "2") or "latest"
WritableCgroups
JSON representation
{
"enabled" : boolean
}
Fields
enabled
boolean
Optional. Whether writable cgroups is enabled.
RegistryHostConfig
JSON representation
{
"server" : string ,
"hosts" : [
{
object ( HostConfig )
}
]
}
Fields
server
string
Defines the host name of the registry server, which will be used to create configuration file as /etc/containerd/hosts.d/ /hosts.toml. It supports fully qualified domain names (FQDN) and IP addresses: Specifying port is supported. Wildcards are NOT supported. Examples: - my.customdomain.com - 10.0.1.2:5000
hosts[]
object ( HostConfig )
HostConfig configures a list of host-specific configurations for the server. Each server can have at most 10 host configurations.
HostConfig
JSON representation
{
"host" : string ,
"capabilities" : [
enum ( HostCapability )
] ,
"overridePath" : boolean ,
"header" : [
{
object ( RegistryHeader )
}
] ,
"ca" : [
{
object ( CertificateConfig )
}
] ,
"client" : [
{
object ( CertificateConfigPair )
}
] ,
"dialTimeout" : string
}
Fields
host
string
Host configures the registry host/mirror. It supports fully qualified domain names (FQDN) and IP addresses: Specifying port is supported. Wildcards are NOT supported. Examples: - my.customdomain.com - 10.0.1.2:5000
capabilities[]
enum ( HostCapability )
Capabilities represent the capabilities of the registry host, specifying what operations a host is capable of performing. If not set, containerd enables all capabilities by default.
overridePath
boolean
OverridePath is used to indicate the host's API root endpoint is defined in the URL path rather than by the API specification. This may be used with non-compliant OCI registries which are missing the /v2 prefix. If not set, containerd sets default false.
header[]
object ( RegistryHeader )
Header configures the registry host headers.
ca[]
object ( CertificateConfig )
CA configures the registry host certificate.
client[]
object ( CertificateConfigPair )
Client configures the registry host client certificate and key.
dialTimeout
string ( Duration format)
Specifies the maximum duration allowed for a connection attempt to complete. A shorter timeout helps reduce delays when falling back to the original registry if the mirror is unreachable. Maximum allowed value is 180s. If not set, containerd sets default 30s. The value should be a decimal number of seconds with an s suffix.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
RegistryHeader
JSON representation
{
"key" : string ,
"value" : [
string
]
}
Fields
key
string
Key configures the header key.
value[]
string
Value configures the header value.
CertificateConfig
JSON representation
{
// Union field certificate can be only one of the following:
"gcpSecretManagerSecretUri" : string
// End of list of possible types for union field certificate .
}
Fields
Union field certificate . One of the methods to configure the certificate. certificate can be only one of the following:
gcpSecretManagerSecretUri
string
The URI configures a secret from Secret Manager in the format "projects/$PROJECT_ID/secrets/$SECRET_NAME/versions/$VERSION" for global secret or "projects/$PROJECT_ID/locations/$REGION/secrets/$SECRET_NAME/versions/$VERSION" for regional secret. Version can be fixed (e.g. "2") or "latest"
CertificateConfigPair
JSON representation
{
"cert" : {
object ( CertificateConfig )
} ,
"key" : {
object ( CertificateConfig )
}
}
Fields
cert
object ( CertificateConfig )
Cert configures the client certificate.
key
object ( CertificateConfig )
Key configures the client private key. Optional.
Duration
JSON representation
{
"seconds" : string ,
"nanos" : integer
}
Fields
seconds
string ( int64 format)
Signed seconds of the span of time. Must be from -315,576,000,000 to +315,576,000,000 inclusive. Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years
nanos
integer
Signed fractions of a second at nanosecond resolution of the span of time. Durations less than one second are represented with a 0 seconds field and a positive or negative nanos field. For durations of one second or more, a non-zero value for the nanos field must be of the same sign as the seconds field. Must be from -999,999,999 to +999,999,999 inclusive.
ResourceManagerTags
JSON representation
{
"tags" : {
string : string ,
...
}
}
Fields
tags
map (key: string, value: string)
TagKeyValue must be in one of the following formats ([KEY]=[VALUE]) 1. tagKeys/{tag_key_id}=tagValues/{tag_value_id} 2. {org_id}/{tag_key_name}={tag_value_name} 3. {project_id}/{tag_key_name}={tag_value_name}
TagsEntry
JSON representation
{
"key" : string ,
"value" : string
}
Fields
key
string
value
string
SecondaryBootDisk
JSON representation
{
"mode" : enum ( Mode ) ,
"diskImage" : string
}
Fields
mode
enum ( Mode )
Disk mode (container image cache, etc.)
diskImage
string
Fully-qualified resource ID for an existing disk image.
GPUDirectConfig
JSON representation
{
// Union field _gpu_direct_strategy can be only one of the following:
"gpuDirectStrategy" : enum ( GPUDirectStrategy )
// End of list of possible types for union field _gpu_direct_strategy .
}
Fields
Union field _gpu_direct_strategy .
_gpu_direct_strategy can be only one of the following:
gpuDirectStrategy
enum ( GPUDirectStrategy )
The type of GPU direct strategy to enable on the node pool.
BootDisk
JSON representation
{
"diskType" : string ,
"sizeGb" : string ,
"provisionedIops" : string ,
"provisionedThroughput" : string
}
Fields
diskType
string
Disk type of the boot disk. (i.e. Hyperdisk-Balanced, PD-Balanced, etc.)
sizeGb
string ( int64 format)
Disk size in GB. Replaces NodeConfig.disk_size_gb
provisionedIops
string ( int64 format)
For Hyperdisk-Balanced only, the provisioned IOPS config value.
provisionedThroughput
string ( int64 format)
For Hyperdisk-Balanced only, the provisioned throughput config value.
TaintConfig
JSON representation
{
// Union field _architecture_taint_behavior can be only one of the following:
"architectureTaintBehavior" : enum ( ArchitectureTaintBehavior )
// End of list of possible types for union field _architecture_taint_behavior .
}
Fields
Union field _architecture_taint_behavior .
_architecture_taint_behavior can be only one of the following:
architectureTaintBehavior
enum ( ArchitectureTaintBehavior )
Optional. Controls architecture tainting behavior.
NodeNetworkConfig
JSON representation
{
"createPodRange" : boolean ,
"podRange" : string ,
"podIpv4CidrBlock" : string ,
"podCidrOverprovisionConfig" : {
object ( PodCIDROverprovisionConfig )
} ,
"additionalNodeNetworkConfigs" : [
{
object ( AdditionalNodeNetworkConfig )
}
] ,
"additionalPodNetworkConfigs" : [
{
object ( AdditionalPodNetworkConfig )
}
] ,
"podIpv4RangeUtilization" : number ,
"subnetwork" : string ,
"networkTierConfig" : {
object ( NetworkTierConfig )
} ,
// Union field _enable_private_nodes can be only one of the following:
"enablePrivateNodes" : boolean
// End of list of possible types for union field _enable_private_nodes .
// Union field _network_performance_config can be only one of the following:
"networkPerformanceConfig" : {
object ( NetworkPerformanceConfig )
}
// End of list of possible types for union field _network_performance_config .
}
Fields
createPodRange
boolean
Input only. Whether to create a new range for pod IPs in this node pool. Defaults are provided for pod_range and pod_ipv4_cidr_block if they are not specified.
If neither create_pod_range or pod_range are specified, the cluster-level default ( ip_allocation_policy.cluster_ipv4_cidr_block ) is used.
Only applicable if ip_allocation_policy.use_ip_aliases is true.
This field cannot be changed after the node pool has been created.
podRange
string
The ID of the secondary range for pod IPs. If create_pod_range is true, this ID is used for the new range. If create_pod_range is false, uses an existing secondary range with this ID.
Only applicable if ip_allocation_policy.use_ip_aliases is true.
This field cannot be changed after the node pool has been created.
podIpv4CidrBlock
string
The IP address range for pod IPs in this node pool.
Only applicable if create_pod_range is true.
Set to blank to have a range chosen with the default size.
Set to /netmask (e.g. /14 ) to have a range chosen with a specific netmask.
Set to a CIDR notation (e.g. 10.96.0.0/14 ) to pick a specific range to use.
Only applicable if ip_allocation_policy.use_ip_aliases is true.
This field cannot be changed after the node pool has been created.
podCidrOverprovisionConfig
object ( PodCIDROverprovisionConfig )
[PRIVATE FIELD] Pod CIDR size overprovisioning config for the nodepool.
Pod CIDR size per node depends on max_pods_per_node. By default, the value of max_pods_per_node is rounded off to next power of 2 and we then double that to get the size of pod CIDR block per node. Example: max_pods_per_node of 30 would result in 64 IPs (/26).
This config can disable the doubling of IPs (we still round off to next power of 2) Example: max_pods_per_node of 30 will result in 32 IPs (/27) when overprovisioning is disabled.
additionalNodeNetworkConfigs[]
object ( AdditionalNodeNetworkConfig )
We specify the additional node networks for this node pool using this list. Each node network corresponds to an additional interface
additionalPodNetworkConfigs[]
object ( AdditionalPodNetworkConfig )
We specify the additional pod networks for this node pool using this list. Each pod network corresponds to an additional alias IP range for the node
podIpv4RangeUtilization
number
Output only. The utilization of the IPv4 range for the pod. The ratio is Usage/[Total number of IPs in the secondary range], Usage=numNodes*numZones*podIPsPerNode.
subnetwork
string
Optional. The subnetwork name/path for the node pool. Format: projects/{project}/regions/{region}/subnetworks/{subnetwork} If the cluster is associated with multiple subnetworks, the subnetwork can be either: - A user supplied subnetwork name during node pool creation (e.g., my-subnet ). The name must be between 1 and 63 characters long, start with a letter, contain only letters, numbers, and hyphens, and end with a letter or a number. - A full subnetwork path during node pool creation, such as projects/gke-project/regions/us-central1/subnetworks/my-subnet - A subnetwork path picked based on the IP utilization during node pool creation and is immutable.
networkTierConfig
object ( NetworkTierConfig )
Output only. The network tier configuration for the node pool inherits from the cluster-level configuration and remains immutable throughout the node pool's lifecycle, including during upgrades.
Union field _enable_private_nodes .
_enable_private_nodes can be only one of the following:
enablePrivateNodes
boolean
Whether nodes have internal IP addresses only. If enable_private_nodes is not specified, then the value is derived from [Cluster.NetworkConfig.default_enable_private_nodes][]
Union field _network_performance_config .
_network_performance_config can be only one of the following:
networkPerformanceConfig
object ( NetworkPerformanceConfig )
Network bandwidth tier configuration.
NetworkPerformanceConfig
JSON representation
{
// Union field _total_egress_bandwidth_tier can be only one of the following:
"totalEgressBandwidthTier" : enum ( Tier )
// End of list of possible types for union field _total_egress_bandwidth_tier .
}
Fields
Union field _total_egress_bandwidth_tier .
_total_egress_bandwidth_tier can be only one of the following:
totalEgressBandwidthTier
enum ( Tier )
Specifies the total network bandwidth tier for the NodePool.
PodCIDROverprovisionConfig
JSON representation
{
"disable" : boolean
}
Fields
disable
boolean
Whether Pod CIDR overprovisioning is disabled. Note: Pod CIDR overprovisioning is enabled by default.
AdditionalNodeNetworkConfig
JSON representation
{
"network" : string ,
"subnetwork" : string
}
Fields
network
string
Name of the VPC where the additional interface belongs
subnetwork
string
Name of the subnetwork where the additional interface belongs
AdditionalPodNetworkConfig
JSON representation
{
"subnetwork" : string ,
"secondaryPodRange" : string ,
// Union field _max_pods_per_node can be only one of the following:
"maxPodsPerNode" : {
object ( MaxPodsConstraint )
}
// End of list of possible types for union field _max_pods_per_node .
}
Fields
subnetwork
string
Name of the subnetwork where the additional pod network belongs.
secondaryPodRange
string
The name of the secondary range on the subnet which provides IP address for this pod range.
Union field _max_pods_per_node .
_max_pods_per_node can be only one of the following:
maxPodsPerNode
object ( MaxPodsConstraint )
The maximum number of pods per node which use this pod network.
MaxPodsConstraint
JSON representation
{
"maxPodsPerNode" : string
}
Fields
maxPodsPerNode
string ( int64 format)
Constraint enforced on the max num of pods per node.
NetworkTierConfig
JSON representation
{
"networkTier" : enum ( NetworkTier )
}
Fields
networkTier
enum ( NetworkTier )
Network tier configuration.
NodePoolAutoscaling
JSON representation
{
"enabled" : boolean ,
"minNodeCount" : integer ,
"maxNodeCount" : integer ,
"autoprovisioned" : boolean ,
"locationPolicy" : enum ( LocationPolicy ) ,
"totalMinNodeCount" : integer ,
"totalMaxNodeCount" : integer
}
Fields
enabled
boolean
Is autoscaling enabled for this node pool.
minNodeCount
integer
Minimum number of nodes for one location in the node pool. Must be greater than or equal to 0 and less than or equal to max_node_count.
maxNodeCount
integer
Maximum number of nodes for one location in the node pool. Must be >= min_node_count. There has to be enough quota to scale up the cluster.
autoprovisioned
boolean
Can this node pool be deleted automatically.
locationPolicy
enum ( LocationPolicy )
Location policy used when scaling up a nodepool.
totalMinNodeCount
integer
Minimum number of nodes in the node pool. Must be greater than or equal to 0 and less than or equal to total_max_node_count. The total_*_node_count fields are mutually exclusive with the *_node_count fields.
totalMaxNodeCount
integer
Maximum number of nodes in the node pool. Must be greater than or equal to total_min_node_count. There has to be enough quota to scale up the cluster. The total_*_node_count fields are mutually exclusive with the *_node_count fields.
NodeManagement
JSON representation
{
"autoUpgrade" : boolean ,
"autoRepair" : boolean ,
"upgradeOptions" : {
object ( AutoUpgradeOptions )
}
}
Fields
autoUpgrade
boolean
A flag that specifies whether node auto-upgrade is enabled for the node pool. If enabled, node auto-upgrade helps keep the nodes in your node pool up to date with the latest release version of Kubernetes.
autoRepair
boolean
A flag that specifies whether the node auto-repair is enabled for the node pool. If enabled, the nodes in this node pool will be monitored and, if they fail health checks too many times, an automatic repair action will be triggered.
upgradeOptions
object ( AutoUpgradeOptions )
Specifies the Auto Upgrade knobs for the node pool.
AutoUpgradeOptions
JSON representation
{
"autoUpgradeStartTime" : string ,
"description" : string
}
Fields
autoUpgradeStartTime
string
Output only. This field is set when upgrades are about to commence with the approximate start time for the upgrades, in RFC3339 text format.
description
string
Output only. This field is set when upgrades are about to commence with the description of the upgrade.
StatusCondition
JSON representation
{
"code" : enum ( Code ) ,
"message" : string ,
"canonicalCode" : enum ( google.rpc.Code )
}
Fields
code (deprecated)
enum ( Code )
This item is deprecated!
Machine-friendly representation of the condition Deprecated. Use canonical_code instead.
message
string
Human-friendly representation of the condition
canonicalCode
enum ( google.rpc.Code )
Canonical code of the condition.
UpgradeSettings
JSON representation
{
"maxSurge" : integer ,
"maxUnavailable" : integer ,
// Union field _strategy can be only one of the following:
"strategy" : enum ( NodePoolUpdateStrategy )
// End of list of possible types for union field _strategy .
// Union field _blue_green_settings can be only one of the following:
"blueGreenSettings" : {
object ( BlueGreenSettings )
}
// End of list of possible types for union field _blue_green_settings .
}
Fields
maxSurge
integer
The maximum number of nodes that can be created beyond the current size of the node pool during the upgrade process.
maxUnavailable
integer
The maximum number of nodes that can be simultaneously unavailable during the upgrade process. A node is considered available if its status is Ready.
Union field _strategy .
_strategy can be only one of the following:
strategy
enum ( NodePoolUpdateStrategy )
Update strategy of the node pool.
Union field _blue_green_settings .
_blue_green_settings can be only one of the following:
blueGreenSettings
object ( BlueGreenSettings )
Settings for blue-green upgrade strategy.
BlueGreenSettings
JSON representation
{
// Union field rollout_policy can be only one of the following:
"standardRolloutPolicy" : {
object ( StandardRolloutPolicy )
} ,
"autoscaledRolloutPolicy" : {
object ( AutoscaledRolloutPolicy )
}
// End of list of possible types for union field rollout_policy .
// Union field _node_pool_soak_duration can be only one of the following:
"nodePoolSoakDuration" : string
// End of list of possible types for union field _node_pool_soak_duration .
}
Fields
Union field rollout_policy . The rollout policy controls the general rollout progress of blue-green. rollout_policy can be only one of the following:
standardRolloutPolicy
object ( StandardRolloutPolicy )
Standard policy for the blue-green upgrade.
autoscaledRolloutPolicy
object ( AutoscaledRolloutPolicy )
Autoscaled policy for cluster autoscaler enabled blue-green upgrade.
Union field _node_pool_soak_duration .
_node_pool_soak_duration can be only one of the following:
nodePoolSoakDuration
string ( Duration format)
Time needed after draining entire blue pool. After this period, blue pool will be cleaned up.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
StandardRolloutPolicy
JSON representation
{
// Union field update_batch_size can be only one of the following:
"batchPercentage" : number ,
"batchNodeCount" : integer
// End of list of possible types for union field update_batch_size .
// Union field _batch_soak_duration can be only one of the following:
"batchSoakDuration" : string
// End of list of possible types for union field _batch_soak_duration .
}
Fields
Union field update_batch_size . Blue pool size to drain in a batch. update_batch_size can be only one of the following:
batchPercentage
number
Percentage of the blue pool nodes to drain in a batch. The range of this field should be (0.0, 1.0].
batchNodeCount
integer
Number of blue nodes to drain in a batch.
Union field _batch_soak_duration .
_batch_soak_duration can be only one of the following:
batchSoakDuration
string ( Duration format)
Soak time after each batch gets drained. Default to zero.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
AutoscaledRolloutPolicy
JSON representation
{
"waitForDrainDuration" : string
}
Fields
waitForDrainDuration
string ( Duration format)
Optional. Time to wait after cordoning the blue pool before draining the nodes. Defaults to 3 days. The value can be set between 0 and 7 days, inclusive.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
PlacementPolicy
JSON representation
{
"type" : enum ( Type ) ,
"tpuTopology" : string ,
"policyName" : string
}
Fields
type
enum ( Type )
The type of placement.
tpuTopology
string
Optional. TPU placement topology for pod slice node pool. https://cloud.google.com/tpu/docs/types-topologies#tpu_topologies
policyName
string
If set, refers to the name of a custom resource policy supplied by the user. The resource policy must be in the same project and region as the node pool. If not found, InvalidArgument error is returned.
UpdateInfo
JSON representation
{
"blueGreenInfo" : {
object ( BlueGreenInfo )
}
}
Fields
blueGreenInfo
object ( BlueGreenInfo )
Information of a blue-green upgrade.
BlueGreenInfo
JSON representation
{
"phase" : enum ( Phase ) ,
"blueInstanceGroupUrls" : [
string
] ,
"greenInstanceGroupUrls" : [
string
] ,
"bluePoolDeletionStartTime" : string ,
"greenPoolVersion" : string
}
Fields
phase
enum ( Phase )
Current blue-green upgrade phase.
blueInstanceGroupUrls[]
string
The resource URLs of the managed instance groups associated with blue pool.
greenInstanceGroupUrls[]
string
The resource URLs of the managed instance groups associated with green pool.
bluePoolDeletionStartTime
string
Time to start deleting blue pool to complete blue-green upgrade, in RFC3339 text format.
greenPoolVersion
string
Version of green pool.
QueuedProvisioning
JSON representation
{
"enabled" : boolean
}
Fields
enabled
boolean
Denotes that this nodepool is QRM specific, meaning nodes can be only obtained through queuing via the Cluster Autoscaler ProvisioningRequest API.
BestEffortProvisioning
JSON representation
{
"enabled" : boolean ,
"minProvisionNodes" : integer
}
Fields
enabled
boolean
When this is enabled, cluster/node pool creations will ignore non-fatal errors like stockout to best provision as many nodes as possible right now and eventually bring up all target number of nodes
minProvisionNodes
integer
Minimum number of nodes to be provisioned to be considered as succeeded, and the rest of nodes will be provisioned gradually and eventually when stockout issue has been resolved.
NodeDrainConfig
JSON representation
{
// Union field _respect_pdb_during_node_pool_deletion can be only one of the
// following:
"respectPdbDuringNodePoolDeletion" : boolean
// End of list of possible types for union field
// _respect_pdb_during_node_pool_deletion .
}
Fields
Union field _respect_pdb_during_node_pool_deletion .
_respect_pdb_during_node_pool_deletion can be only one of the following:
respectPdbDuringNodePoolDeletion
boolean
Whether to respect PDB during node pool deletion.
Tool Annotations
Destructive Hint: ❌ | Idempotent Hint: ✅ | Read Only Hint: ✅ | Open World Hint: ❌
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-03-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-03-10 UTC."],[],[]]
