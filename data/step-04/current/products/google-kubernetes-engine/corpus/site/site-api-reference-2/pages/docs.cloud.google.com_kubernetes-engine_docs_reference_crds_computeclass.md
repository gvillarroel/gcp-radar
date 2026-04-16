---
title: "ComputeClass \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass
knowledge_key: corpus
source_id: site-api-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/reference/crds/computeclass
  title: "ComputeClass \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud Documentation"
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
ComputeClass
Stay organized with collections
Save and categorize content based on your preferences.
ComputeClass is a Kubernetes Custom Resource Definition (CRD) that lets you
define configurations and fallback priorities for Google Kubernetes Engine (GKE) node scaling
decisions. To learn more, see
About custom ComputeClasses .
Note: The following snippet is intended only as an illustration of
ComputeClass syntax and structure. It is not a working example.
apiVersion : cloud.google.com/v1
kind : ComputeClass
metadata :
name : my-class
spec :
activeMigration :
optimizeRulePriority : false
autoscalingPolicy :
consolidationDelayMinutes : 1
consolidationThreshold : 0
gpuConsolidationThreshold : 0
description : "Short description of the ComputeClass."
nodePoolAutoCreation :
enabled : false
nodePoolConfig :
imageType : ubuntu_containerd
ipType : public
serviceAccount : example-service-account@example-project. iam.gserviceaccount.com
autoRepair : true
autoUpgrade : true
nodeLabels :
example-label-key : example-label-value
confidentialNodeType : SEV
taints :
- effect : NoSchedule
key : example-key
value : example-value
imageStreaming :
enabled : true
gvnic :
enabled : true
resourceManagerTags :
- key : example-project/example-tag-key
value : example-tag-value
loggingConfig :
loggingVariantConfig :
variant : DEFAULT
priorityDefaults :
nodeSystemConfig :
linuxNodeConfig :
sysctls :
net.core.somaxconn : 256
transparentHugepageEnabled : TRANSPARENT_HUGEPAGE_ENABLED_ALWAYS
kubeletConfig :
cpuCfsQuota : true
location :
zones : [ 'us-central1-a' , 'us-central1-b' ]
priorities :
- machineFamily : n4
maxRunDurationSeconds : 360
minCores : 16
minCpuPlatform : "Intel Emerald Rapids"
minMemoryGb : 64
placement :
policyName : my-resource-policy
reservations :
affinity : Specific
specific :
- name : n4-shared-reservation
project : reservation-project
zones : [ 'us-central1-a' ]
reservationBlock :
name : reservation-block-name
reservationSubBlock :
name : reservation-sub-block-name
spot : true
storage :
bootDiskSize : 100
bootDiskKMSKey : projects/example/locations/us-central1/keyRings/example/cryptoKeys/key-1
secondaryBootDisks :
- diskImageName : pytorch-mnist
project : k8s-staging-jobset
mode : CONTAINER_IMAGE_CACHE
nodeSystemConfig :
linuxNodeConfig :
sysctls :
net.core.somaxconn : 512
- machineType : n4-standard-32
nodeLabels :
example-priority-label-key : example-priority-label-value
location :
zones : [ 'us-central1-c' ]
locationPolicy : ANY
spot : true
reservations :
affinity : AnyBestEffort
storage :
bootDiskSize : 100
bootDiskType : hyperdisk-balanced
localSSDCount : 1
taints :
- effect : NoSchedule
key : example-priority-key
value : example-priority-value
nodeSystemConfig :
linuxNodeConfig :
swapConfig :
enabled : true
bootDiskProfile :
swapSizeGib : 10
- machineType : n4-standard-32
location :
zoneTypes : [ 'STANDARD' , 'AI' ]
- nodepools : [ 'example-first-nodepool-name' , 'example-second-nodepool-name' ]
- podFamily : general-purpose
- gpu :
count : 1
driverVersion : default
type : nvidia-l4
- tpu :
count : 8
topology : "2x4"
type : tpu-v5-lite-podslice
- flexStart :
enabled : true
nodeRecycling :
leadTimeSeconds : 1200
capacityCheckWaitTimeSeconds : 3600
whenUnsatisfiable : ScaleUpAnyway
status :
conditions :
- lastTransitionTime : 2024-10-10T00:00:00Z
message : example-message
observedGeneration : 1
reason : example-reason
status : "True"
type : example-type
ComputeClass specification
metadata :
name : string
spec :
activeMigration : object( activeMigration )
autoscalingPolicy : object( autoscalingPolicy )
nodePoolAutoCreation : object( nodePoolAutoCreation )
nodePoolGroup : object( nodePoolGroup )
nodePoolConfig : object( nodePoolConfig )
autopilot : object( autopilot )
priorities : [
object( priorities )
]
priorityDefaults : object( priorityDefaults )
whenUnsatisfiable : string
Fields
metadata
required
object
A field that identifies the ComputeClass.
metadata.name
optional
string
The name of the ComputeClass.
spec
required
object
The ComputeClass specification, which defines how the ComputeClass
works.
spec.activeMigration
optional
object ( activeMigration )
A specification that lets you choose whether GKE automatically replaces existing nodes that
are lower in a ComputeClass priority list with new nodes that are higher in that
priority list.
spec.autoscalingPolicy
optional
object ( autoscalingPolicy )
A specification that lets you fine-tune the timing and thresholds that cause GKE to remove
underused nodes and consolidate workloads on other nodes.
spec.nodePoolAutoCreation
optional
object( nodePoolAutoCreation )
A specification that lets you choose whether GKE can create and delete node pools in Standard mode
clusters based on the ComputeClass priority rules. Requires node auto-provisioning
to be enabled on the cluster.
spec.nodePoolGroup
optional
object( nodePoolGroup )
Requires GKE version 1.32.2-gke.1359000 or later
A specification that lets you group multiple node pools into a single
logical unit called a collection . This grouping lets you apply shared
configurations, such as a Service Level Objective (SLO), across all node
pools within the collection.
spec.nodePoolConfig
optional
object( nodePoolConfig )
Requires GKE version 1.31.4-gke.1072000 or later
A specification that lets you configure certain parameters of node pools that are used by the ComputeClass.
For auto-provisioned node pools, these settings are automatically applied to newly created node pools
and their nodes. Existing node pools are used only when their settings match this field.
spec.autopilot
optional
object( autopilot )
Requires GKE version 1.34.1-gke.1829001 or later
Autopilot describes the autopilot settings for a given ComputeClass.
Indicates whether nodes created for this compute class should be Autopilot managed.
spec.priorities[]
required
object ( priorities )
Requires GKE version 1.30.3-gke.1451000 or later
A list of priority rules that defines how GKE configures
nodes during scaling operations. When a cluster needs to scale up,
GKE tries to create nodes that match the first priority rule
in this field. If GKE can't create those nodes, it attempts the
next rule. The process repeats until GKE successfully creates
nodes or exhausts all of the rules in the list.
priorityDefaults
optional
object ( priorityDefaults )
Requires GKE version 1.32.1-gke.1729000 or later
A specification that sets default values for specific fields that are
omitted in entries in the spec.priorities[] field. The default
values that you specify in the priorityDefaults field apply
only if the corresponding field isn't set in a specific priority rule.
The values in the priorityDefaults field don't apply to
spec.priorities.nodepools[] fields.
spec.whenUnsatisfiable
optional
string
A specification that lets you define what GKE does if none of the rules in the
spec.priorities[] field can be met. Supported values are as follows:
ScaleUpAnyway : create a new node that uses the default cluster
node configuration. In GKE versions earlier than 1.33, this is
the default behavior.
DoNotScaleUp : leave the Pod in the Pending status
until GKE can create a node that meets the criteria a priority
rule. In GKE version 1.33 and later, this is the default behavior.
activeMigration
Choose whether GKE migrates workloads to higher priority nodes for
the ComputeClass as resources become available. For details, see
Configure active migration to higher priority nodes .
activeMigration :
optimizeRulePriority : boolean
Fields
optimizeRulePriority
required
boolean
Choose whether GKE migrates workloads to higher priority
nodes when resources are available. If you omit this field, the default
value is false .
autoscalingPolicy
autoscalingPolicy :
consolidationDelayMinutes : integer
consolidationThreshold : integer
gpuConsolidationThreshold : integer
Fields
consolidationDelayMinutes
optional
integer
The number of minutes after which GKE removes underutilized nodes.
The value must be between 1 and 1440 .
consolidationThreshold
optional
integer
The CPU and memory utilization threshold as a percentage of the total
resources on the node. A node becomes eligible for removal only when the
resource utilization is less than this threshold. The value must be between
0 and 100 .
gpuConsolidationThreshold
optional
integer
The GPU utilization threshold as a percentage of the total GPU
resources on the node. A node becomes eligible for removal only when the
resource utilization is less than this threshold. The value must be between
0 and 100 .
Consider setting this value to either 0 or 100
so that GKE consolidates nodes that don't use 100% of the attached
GPUs.
flexStart
flexStart :
enabled : boolean
nodeRecycling : object( nodeRecycling )
Fields
enabled
required
boolean
Whether to use flex-start provisioning mode.
NodeRecycling
optional
object( nodeRecycling )
The node recycling configurations.
gpu
gpu :
count : integer
driverVersion : string
type : string
Fields
count
required
integer
The number of GPUs to attach to each node. The value must be at
least 1 .
driverVersion
optional
string
Requires GKE version 1.31.1-gke.1858000 or later
The NVIDIA driver version to install. The supported values are as follows:
default : install the default driver version for the node
GKE version. If you omit this field, this is the default
value.
latest : install the latest driver version for the node
GKE version.
gpu.type
required
string
The GPU type to attach to each node, such as nvidia-l4 .
hugepageConfig
hugepageConfig :
hugepage_size1g : integer
hugepage_size2m : integer
Fields
hugepage_size1g
optional
integer
The number of 1 GB huge pages to allocate. Huge pages are
a memory management feature that can improve performance for
memory-intensive applications. By using huge pages, the system can
reduce the overhead associated with Translation Lookaside Buffer
(TLB) misses. Allocating 1 GB huge pages is beneficial for
workloads that require large, contiguous memory allocations, such as
large databases or in-memory computing. If you specify this field, the
value must be at least is 1 . For limitations and
requirements, see
Linux huge page configuration options .
hugepage_size2m
optional
integer
Number of 2 MB huge pages to allocate. Similar to 1 GB
huge pages, 2 MB huge pages can also improve performance by reducing TLB
misses. However, 2 MB huge pages are suitable for applications with
smaller large memory requirements. They provide a balance between
performance improvement and memory flexibility. If you specify this
field, the value must be at least 1 . For limitations and
requirements, see
Linux huge page configuration options .
imageStreaming
imageStreaming :
enabled : boolean
Fields
enabled
required
boolean
Specifies whether to use image streaming to pull container images.
gvnic
gvnic :
enabled : boolean
Fields
enabled
required
boolean
Specifies whether Google Virtual NIC (gVNIC) is enabled on the node pool.
kubeletConfig
kubeletConfig :
cpuCfsQuota : boolean
cpuCfsQuotaPeriod : string
cpuManagerPolicy : string
podPidsLimit : integer
containerLogMaxSize : string
containerLogMaxFiles : integer
imageGcLowThresholdPercent : integer
imageGcHighThresholdPercent : integer
imageMinimumGcAge : string
imageMaximumGcAge : string
allowedUnsafeSysctls : [] string
evictionMaxPodGracePeriodSeconds : integer
evictionMinimumReclaim : object( evictionMinimumReclaim )
evictionSoft : object( evictionSoft )
evictionSoftGracePeriod : object( evictionSoftGracePeriod )
maxParallelImagePulls : integer
singleProcessOOMKill : boolean
Fields
cpuCfsQuota
optional
boolean
Enables CPU Completely Fair Scheduler (CFS) quota enforcement for
containers that specify CPU limits. The following values are supported:
true : enable CPU CFS quota enforcement. The kubelet
uses the kernel CFS quota mechanism to enforce Pod CPU limits. Pods
might move to different CPU cores depending on CPU throttling and
core availability.
false : disable CPU CFS quota enforcement. Pod CPU
limits are ignored, which might be useful if Pods are sensitive to
CPU limits. However, disabling CPU CFS quota enforcement increases
the risk of a Pod consuming more CPU resources than intended.
The default value is true .
cpuCfsQuotaPeriod
optional
string
Sets the value, in microseconds, of the
CFS quota period .
This period defines how often the kernel reallocates CPU resources to
each control group (cgroup). You can use this value to tune CPU
throttling behavior.
The value must be between 1ms and 1s . The
default value is 100ms .
cpuManagerPolicy
optional
string
Controls the kubelet CPU management policy. Some Pods are more
sensitive to CPU limits. In these Pods, the latency of CPU reassignment
during CFS quota enforcement might impact performance. The kubelet CPU
Manager feature provides exclusive CPU access to specific Pods. The
kubelet doesn't enforce CPU limits for those Pods even if CPU CFS quota
enforcement is enabled.
The following values are supported:
none : disables the CPU Manager feature. The kubelet
assigns CPUs to Pods based on the CFS quota settings.
static : provides containers that meet all of
the following criteria with access to exclusive CPUs on the node:
The Pod has the Guaranteed Quality-of-Service (QoS)
class.
The container has integer values in the requests.cpu
field.
The default value is none .
For more information, see the Kubernetes documentation about
policies for assigning CPUs to Pods .
evictionMaxPodGracePeriodSeconds
optional
integer
The maximum allowed grace period (in seconds) to use when terminating pods in response to a soft eviction threshold being met. The value must be between 0 and 300.
evictionMinimumReclaim
optional
object ( evictionMinimumReclaim )
Defines minimum reclaims.
evictionSoft
optional
object ( evictionSoft )
Defines soft eviction thresholds.
evictionSoftGracePeriod
optional
object ( evictionSoftGracePeriod )
Defines grace periods for soft eviction thresholds.
podPidsLimit
optional
integer
Sets the maximum number of process IDs (PIDs) that each Pod can use.
This setting controls the maximum number of processes and threads that can run
simultaneously in a Pod. The value must be between 1024 and
4194304 . The default value is 4096 .
containerLogMaxSize
optional
string
Requires GKE version 1.33.4-gke.1036000 or later
Defines the maximum size of the container log file before it is
rotated. Specified as a positive number and a unit suffix, such as
100Ki , 10Mi . Valid units are
Ki , Mi , and Gi . The value must be
between 10Mi and 500Mi , inclusive. The
total container log size ( containerLogMaxSize * containerLogMaxFiles )
cannot exceed 1% of the total storage of the node. The
default value is 10Mi .
containerLogMaxFiles
optional
integer
Requires GKE version 1.33.4-gke.1036000 or later
Defines the maximum number of container log files that can be present
for a container. The integer must be between 2 and
10 , inclusive. The default value is 5 .
imageGcLowThresholdPercent
optional
integer
Requires GKE version 1.33.4-gke.1036000 or later
Defines the percentage of disk usage before which image garbage
collection is never run. Lowest disk usage to garbage collect to. The
percentage is calculated by dividing this field value by 100. The
integer must be between 10 and 85 , inclusive,
and lower than imageGcHighThresholdPercent . The default
value is 80 .
imageGcHighThresholdPercent
optional
integer
Requires GKE version 1.33.4-gke.1036000 or later
Defines the percentage of disk usage after which image garbage
collection is always run. The percentage is calculated by dividing this
field value by 100. The integer must be between 10 and
85 , inclusive, and higher than
imageGcLowThresholdPercent . The default value is
85 .
imageMinimumGcAge
optional
integer
Requires GKE version 1.33.4-gke.1036000 or later
Defines the minimum age for an unused image before it is garbage
collected. Specified as a sequence of decimal numbers, each with an
optional fraction and a unit suffix, such as 300s ,
1.5m . Valid time units are ns , us
(or µs ), ms , s , m ,
and h . The value cannot be greater than 2m .
The default value is 2m .
imageMaximumGcAge
optional
integer
Requires GKE version 1.33.4-gke.1036000 or later
Defines the maximum age an image can be unused before it is garbage
collected. Specified as a sequence of decimal numbers, each with an
optional fraction and a unit suffix, such as 300s ,
1.5m , and 2h45m . Valid time units are
ns , us (or µs ), ms ,
s , m , and h . The value must be a
positive duration. The default value is none .
allowedUnsafeSysctls
optional
[]string
Requires GKE version 1.33.4-gke.1036000 or later
Defines a comma-separated allowlist of unsafe sysctls or sysctl
patterns which can be set on the Pods. The allowed sysctl groups are
kernel.shm* , kernel.msg* ,
kernel.sem , fs.mqueue.* , and
net.* .
maxParallelImagePulls
optional
integer
Requires GKE version 1.34.1-gke.3084001 or later
This setting sets the maximum number of image pulls in parallel. The integer must be between 2 and
5 , inclusive. Default is 2 or 3 , depending on boot disk type.
singleProcessOOMKill
optional
boolean
Requires GKE version 1.34.1-gke.3084001 or later
This setting enables single process OOM killer. The following values are supported:
true : the processes in a container are OOM killed individually instead of as a group.
false : the OOM Killer stops the entire cgroup where the OOMed process exists.
The default value is true for cgroupv1 nodes, false for cgroupv2 nodes.
evictionMinimumReclaim
evictionMinimumReclaim :
imagefsAvailable : string
imagefsInodesFree : string
memoryAvailable : string
nodefsAvailable : string
nodefsInodesFree : string
pidAvailable : string
Fields
imagefsAvailable
optional
string
The minimum reclaim for imagefs.available . The value must be a percentage, such as "5%". The value must be between 0% and 10%.
imagefsInodesFree
optional
string
The minimum reclaim for imagefs.inodesFree . The value must be a percentage, such as "5%". The value must be between 0% and 10%.
memoryAvailable
optional
string
The minimum reclaim for memory.available . The value must be a percentage, such as "5%". The value must be between 0% and 10%.
nodefsAvailable
optional
string
The minimum reclaim for nodefs.available . The value must be a percentage, such as "5%". The value must be between 0% and 10%.
nodefsInodesFree
optional
string
The minimum reclaim for nodefs.inodesFree . The value must be a percentage, such as "5%". The value must be between 0% and 10%.
pidAvailable
optional
string
The minimum reclaim for pid.available . The value must be a percentage, such as "5%". The value must be between 0% and 10%.
evictionSoft
evictionSoft :
imagefsAvailable : string
imagefsInodesFree : string
memoryAvailable : string
nodefsAvailable : string
nodefsInodesFree : string
pidAvailable : string
Fields
imagefsAvailable
optional
string
The soft eviction threshold for imagefs.available . The value must be a percentage, such as "10%". The value must be between 15% and 50% inclusive. If you specify this field, you must also specify evictionSoftGracePeriod.imagefsAvailable .
imagefsInodesFree
optional
string
The soft eviction threshold for imagefs.inodesFree . The value must be a percentage, such as "5%". The value must be between 5% and 50% inclusive. If you specify this field, you must also specify evictionSoftGracePeriod.imagefsInodesFree .
memoryAvailable
optional
string
The soft eviction threshold for memory.available . The value must be a quantity, such as "100Mi". The value must be at least the GKE default hard eviction threshold of 100 Mi and less than 50% of machine memory. If you specify this field, you must also specify evictionSoftGracePeriod.memoryAvailable .
nodefsAvailable
optional
string
The soft eviction threshold for nodefs.available . The value must be a percentage, such as "20%". The value must be between 10% and 50% inclusive. If you specify this field, you must also specify evictionSoftGracePeriod.nodefsAvailable .
nodefsInodesFree
optional
string
The soft eviction threshold for nodefs.inodesFree . The value must be a percentage, such as "5%". The value must be between 5% and 50% inclusive. If you specify this field, you must also specify evictionSoftGracePeriod.nodefsInodesFree .
pidAvailable
optional
string
The soft eviction threshold for pid.available . The value must be a percentage, such as "10%". The value must be between 10% and 50% inclusive. If you specify this field, you must also specify evictionSoftGracePeriod.pidAvailable .
evictionSoftGracePeriod
evictionSoftGracePeriod :
imagefsAvailable : string
imagefsInodesFree : string
memoryAvailable : string
nodefsAvailable : string
nodefsInodesFree : string
pidAvailable : string
Fields
imagefsAvailable
optional
string
The grace period for the imagefs.available soft eviction threshold. The value must be a duration string, such as "30s" or "1m30s". The value must be positive and less than or equal to "5m".
imagefsInodesFree
optional
string
The grace period for the imagefs.inodesFree soft eviction threshold. The value must be a duration string, such as "30s" or "1m30s". The value must be positive and less than or equal to "5m".
memoryAvailable
optional
string
The grace period for the memory.available soft eviction threshold. The value must be a duration string, such as "30s" or "1m30s". The value must be positive and less than or equal to "5m".
nodefsAvailable
optional
string
The grace period for the nodefs.available soft eviction threshold. The value must be a duration string, such as "30s" or "1m30s". The value must be positive and less than or equal to "5m".
nodefsInodesFree
optional
string
The grace period for the nodefs.inodesFree soft eviction threshold. The value must be a duration string, such as "30s" or "1m30s". The value must be positive and less than or equal to "5m".
pidAvailable
optional
string
The grace period for the pid.available soft eviction threshold. The value must be a duration string, such as "30s" or "1m30s". The value must be positive and less than or equal to "5m".
linuxNodeConfig
linuxNodeConfig :
hugepageConfig : object ( hugepageConfig )
sysctls : object ( sysctls )
transparentHugepageEnabled : string
transparentHugepageDefrag : string
swapConfig : object ( swapConfig )
Fields
hugepageConfig
optional
object ( hugepageConfig )
The huge pages configuration for the node.
sysctls
optional
object ( sysctls )
The sysctls configuration for the node.
transparentHugepageEnabled
optional
string
Requires GKE version 1.34.1-gke.3084001 or later
The transparent hugepage configuration for the node. The following values are supported:
TRANSPARENT_HUGEPAGE_ENABLED_ALWAYS : transparent hugepage is enabled system wide.
TRANSPARENT_HUGEPAGE_ENABLED_MADVISE : transparent hugepage is enabled inside MADV_HUGEPAGE regions. This is the default kernel configuration.
TRANSPARENT_HUGEPAGE_ENABLED_NEVER : transparent hugepage is disabled.
TRANSPARENT_HUGEPAGE_ENABLED_UNSPECIFIED : default value. GKE does not modify the kernel configuration.
transparentHugepageDefrag
optional
string
Requires GKE version 1.34.1-gke.3084001 or later
The transparent hugepage defrag configuration for the node. The following values are supported:
TRANSPARENT_HUGEPAGE_DEFRAG_ALWAYS : an application requesting THP stalls on allocation failure and directly reclaim pages and compact memory in an effort to allocate a THP immediately.
TRANSPARENT_HUGEPAGE_DEFRAG_DEFER : an application wakes kswapd in the background to reclaim pages and wake kcompactd to compact memory so that THP is available in the near future. It is the responsibility of khugepaged to then install the THP pages later.
TRANSPARENT_HUGEPAGE_DEFRAG_DEFER_WITH_MADVISE : an application enters direct reclaim and compaction like always, but only for regions that have used madvise(MADV_HUGEPAGE) ; all other regions wake kswapd in the background to reclaim pages and wake kcompactd to compact memory so that THP is available in the near future.
TRANSPARENT_HUGEPAGE_DEFRAG_MADVISE : an application enters direct reclaim and compaction like always, but only for regions that have used madvise(MADV_HUGEPAGE) ; all other regions wake kswapd in the background to reclaim pages and wake kcompactd to compact memory so that THP is available in the near future.
TRANSPARENT_HUGEPAGE_DEFRAG_NEVER : an application never enters direct reclaim or compaction.
TRANSPARENT_HUGEPAGE_DEFRAG_UNSPECIFIED : default value. GKE does not modify the kernel configuration.
loggingConfig
loggingConfig :
loggingVariantConfig : object( loggingVariantConfig )
Fields
loggingVariantConfig
optional
object ( loggingVariantConfig )
Contains logging variant configuration. If you omit this field, the default logging variant configuration, with the value of DEFAULT , is used.
For more information about logging configuration, see
Adjust log throughput .
loggingVariantConfig
loggingVariantConfig :
variant : DEFAULT
Fields
variant
optional
string
Sets the logging variant to use. If you omit this field, the default logging variant configuration, with the value of DEFAULT , is used.
The following values are supported:
DEFAULT : uses the standard logging agent.
MAX_THROUGHPUT : uses the high-throughput logging agent.
For more information about logging configuration, see
Adjust log throughput .
swapConfig
swapConfig :
enabled : bool
encryptionConfig : object ( encryptionConfig )
bootDiskProfile : object ( bootDiskProfile )
ephemeralLocalSsdProfile : object ( ephemeralLocalSsdProfile )
dedicatedLocalSsdProfile : object ( dedicatedLocalSsdProfile )
Fields
enabled
optional
bool
Enable memory swap for the nodes. Defaults to false.
encryptionConfig
optional
object ( encryptionConfig )
The encryption configuration for memory swap.
bootDiskProfile
optional
object ( bootDiskProfile )
Enable memory swap on the boot disk for the nodes. Only one of bootDiskProfile, ephemeralLocalSsdProfile, and dedicatedLocalSsdProfile can be set.
ephemeralLocalSsdProfile
optional
object ( ephemeralLocalSsdProfile )
Not supported by custom ComputeClasses.
dedicatedLocalSsdProfile
optional
object ( dedicatedLocalSsdProfile )
Enable memory swap on the dedicated local SSDs for the nodes. The total disk count must be available for the machine type. Only one of bootDiskProfile, ephemeralLocalSsdProfile, and dedicatedLocalSsdProfile can be set.
encryptionConfig
encryptionConfig :
disabled : bool
Fields
disabled
optional
bool
Enable encryption for memory swap on disk. Defaults to false (encrypted).
bootDiskProfile
bootDiskProfile :
swapSizeGib : int
swapSizePercent : int
Fields
swapSizeGib
optional
int
Size of memory swap to enable on the boot disk. Up to 50% of the boot disk can be used for memory swap. Only one of swapSizeGib and swapSizePercent can be set.
swapSizePercent
optional
int
Percentage of the boot disk to use for memory swap. Up to 50% of the boot disk can be used for memory swap. Only one of swapSizeGib and swapSizePercent can be set.
ephemeralLocalSsdProfile
ephemeralLocalSsdProfile :
swapSizeGib : int
swapSizePercent : int
Fields
swapSizeGib
optional
int
Size of memory swap to enable on the local SSDs, the remaining space are used for ephemeral storage. Only one of swapSizeGib and swapSizePercent can be set.
swapSizePercent
optional
int
Percentage of memory swap to enable on the local SSDs, the remaining space are used for ephemeral storage. Only one of swapSizeGib and swapSizePercent can be set.
dedicatedLocalSsdProfile
dedicatedLocalSsdProfile :
diskCount : int
Fields
diskCount
required
int
Number of local SSDs to provision dedicated to swap. The total number of local SSDs (including ephemeral storage local SSDs) must be supported by the machine type.
nodePoolAutoCreation
nodePoolAutoCreation :
enabled : boolean
Fields
enabled
optional
boolean
Choose whether GKE can create and delete node pools in Standard mode
clusters based on the ComputeClass priority rules. Requires node auto-provisioning
to be enabled on the cluster. If you omit
this field, the default value is false .
autopilot
autopilot :
enabled : boolean
Fields
enabled
optional
boolean
Requires GKE version 1.34.1-gke.1829001 or later
Indicates whether to run workloads that use this ComputeClass in Autopilot mode. Nodes that GKE creates for the ComputeClass are Autopilot-managed.
nodePoolGroup
nodePoolGroup :
name : string
Fields
name
required
string
Defines the name of the node pool group, which is used to share
configurations between a group of node pools. This field is required if the
nodePoolGroup is specified.
nodePoolConfig
nodePoolConfig :
imageType : string
ipType : string
serviceAccount : string
autoRepair : boolean
autoUpgrade : boolean
workloadType : string
nodeLabels : map
confidentialNodeType : string
taints : [
object ( taints )
]
imageStreaming : object( imageStreaming )
gvnic : object( gvnic )
resourceManagerTags : [
object ( resourceManagerTags )
]
loggingConfig : object( loggingConfig )
Fields
imageType
optional
string
Requires GKE version 1.32.4-gke.1198000 or later
Choose an image type for the node pools. Image type specifies the base
OS that the nodes in the node pool run on. If you omit this field,
the default value is cos_containerd .
ipType
optional
string
Requires GKE version 1.35.0-gke.2398000 or later
Controls whether nodes in the node pool use public or private IP addresses.
Supported values are public and private . If you omit this field,
the default IP address type is used. This field manages the cloud.google.com/private-node
node selector; do not manually apply the selector when using this field.
serviceAccount
optional
string
Requires GKE version 1.31.4-gke.1072000 or later
Specifies the Google Cloud service account used by the nodes
within node pools that are managed by the ComputeClass.
autoRepair
optional
string
Requires GKE version 1.34.0-gke.2201000 or later
Specifies the node auto-repair setting to be used by the node pools.
For more information, see Auto-repair nodes .
If you omit this field, existing node pools are compatible regardless of their auto-repair setting.
For auto-provisioned node pools, the default value is true .
autoUpgrade
optional
string
Requires GKE version 1.34.0-gke.2201000 or later
Specifies the node auto-upgrade setting to be used by the node pools.
For more information, see Auto-upgrading nodes .
If you omit this field, existing node pools are compatible regardless of their auto-upgrade setting.
For auto-provisioned node pools, the default value is true .
workloadType
optional
string
Requires GKE version 1.32.2-gke.1359000 or later
Specifies the workload type for the node pools. Workload type defines
the SLO for the workload. The following values are supported:
HIGH_AVAILABILITY : for availability-focused workloads
like serving, which require most of the infrastructure to be running
at all times
HIGH_THROUGHPUT : for batch or training jobs that need
all underlying infrastructure running to make progress. This value can
be set only when nodePoolGroup is also
specified.
nodeLabels
optional
map
Requires GKE version 1.33.2-gke.1111000 or later
Specifies the node labels, which add user-defined Kubernetes labels to all nodes in the new node pool.
GKE applies these labels to the Kubernetes API node object, and you can use them in nodeSelectors for Pod scheduling.
Kubernetes node labels are different from GKE labels.
For more information, see the comparison of GKE node pool labels and Kubernetes labels.
Example:
nodeLabels : {
'example-nodelabel-key' : 'example-nodelabel-value' ,
'example-nodelabel-key-2' : 'example-nodelabel-value-2' ,
}
confidentialNodeType
optional
string
Requires GKE version 1.33.3-gke.1392000 or later
Defines the type of technology used by the confidential node. If using this, must specify machineFamily or machineType in each priority.
The following values are supported:
SEV : AMD Secure Encrypted Virtualization.
SEV_SNP : AMD Secure Encrypted Virtualization - Secure Nested Paging.
TDX : Intel Trust Domain eXtension
taints[]
optional
object ( taints )
Requires GKE version 1.33.4-gke.1350000 or later
Applies Kubernetes taints to all nodes in a new node pool. You can use these taints with tolerations for Pod scheduling.
Kubernetes won't schedule a workload to the node pool if the workload doesn't have tolerations for all taints in this field.
For more information, see node-taints
imageStreaming
optional
object ( imageStreaming )
Requires GKE version 1.34.1-gke.1279000 or later
Specifies the image streaming configuration for nodes in Standard
clusters. If you omit this field, the cluster-wide default setting is used.
For more information about image streaming, see
Use Image streaming to pull container images .
gvnic
optional
object ( gvnic )
Requires GKE version 1.34.1-gke.3759000 or later
Google Virtual NIC settings. If you omit this field, the related machine-type default setting is used.
For more information about gVNIC, see
Using Google Virtual NIC .
resourceManagerTags[]
optional
object ( resourceManagerTags )
Requires GKE version 1.34.1-gke.2541000 or later
A list of Google Cloud resource manager tags to attach to all nodes in any node pools managed by the ComputeClass.
Tags must be created before you reference them in the resourceManagerTags field, and must have the purpose GCE_FIREWALL assigned to them to be used with firewall rules.
You can specify a maximum of five tags.
For more information about how to use tags in GKE, see Selectively enforce firewall policies in GKE .
loggingConfig
optional
object ( loggingConfig )
Requires GKE version 1.35.0-gke.2398000 or later
Contains logging configuration. If you omit this field, the default logging configuration, with the DEFAULT logging variant, is used.
For more information about logging configuration, see
Adjust log throughput .
nodeRecycling
nodeRecycling :
leadTimeSeconds : integer
Fields
leadTimeSeconds
required
integer
The amount of time, in seconds, before a node reaches the end of its
run that GKE should start provisioning a replacement node.
nodeSystemConfig
nodeSystemConfig :
kubeletConfig : object( kubeletConfig )
linuxNodeConfig : object( linuxNodeConfig )
Fields
kubeletConfig
optional
object ( kubeletConfig )
The kubelet configuration for the node.
linuxNodeConfig
optional
object ( linuxNodeConfig )
The Linux kernel configuration for the node.
placement
placement :
policyName : string
Fields
policyName
required
string
The resource policy name to be used in
custom compact placement policies .
Must not be an empty string.
location
location :
locationPolicy : string
zones : [] string
zoneTypes : [] string
Fields
locationPolicy
optional
string
Requires GKE version 1.34.1-gke.2541000 or later
Location policy specifies the strategy for selecting zones when scaling up a node
pool that's managed by this ComputeClass. It can be either ANY or BALANCED .
This setting controls the distribution of new nodes across zones in the node pool's region
and corresponds to the node pool setting with the same name.
Read more about location policy and its default values.
zones
optional
[]string
A list of Google Cloud zones to use. In order for a node to be used,
it must belong to a node pool that spans exactly the same set of zones. Optional: If you are provisioning TPU VMs, use an AI zone , like us-central1-ai1a . AI zones are specialized locations that are optimized for AI/ML workloads within Google Cloud regions.
zoneTypes
optional
[]string
Requires GKE version 1.35.2-gke.1842000 or later
A list of zone types that specifies a set of Google Cloud zones to use. The following values are supported:
CLUSTER_DEFAULT : zones specified in the cluster's autoprovisioning locations field (or the cluster's locations field if autoprovisioning locations are not specified). This is the default value.
STANDARD : all standard (non-AI) zones within the cluster's region.
AI : all AI zones within the cluster's region.
If multiple `zoneType` values are specified, the resulting set of zones is the union of corresponding zone sets.
This field is mutually exclusive with the zones and reservations.specific fields.
When the machineType field is specified, the resulting set of zones includes only those zones where the specified machine type is available.
priorities
priorities :
- capacityCheckWaitTimeSeconds : integer
flexStart : object( flexStart )
gpu : object( gpu )
location : object( location )
machineFamily : string
machineType : string
maxRunDurationSeconds : integer
minCores : integer
minCpuPlatform : string
minMemoryGb : integer
nodeLabels : map
nodepools : [] string
nodeSystemConfig : object( nodeSystemConfig )
machineType : string
location : object( location )
maxPodsPerNode : integer
placement : object ( placement )
priorityScore : integer
reservations : object( reservations )
spot : boolean
storage : object( storage )
taints : [
object ( taints )
]
tpu : object( tpu )
Fields
capacityCheckWaitTimeSeconds
optional
integer
Requires GKE version 1.33.1-gke.1788000 or later
Duration, in seconds, for which GKE attempts to
provision the priority before falling back to lower priorities. If
unspecified, GKE falls back as soon as the initial
provisioning attempt is unsuccessful. Values shorter than the time
required for the initial provisioning attempt are ignored because this
field only extends the timeout to allow for multiple provisioning
attempts.
Only supported for
flex-start
priorities, except single-host TPUs.
flexStart
optional
object ( flexStart )
Requires GKE version 1.32.2-gke.1652000 or later
The flex-start provisioning mode configurations.
gpu
optional
object( gpu )
Requires GKE version 1.30.3-gke.1451000 or later
The GPU configuration.
machineFamily
optional
string
Requires GKE version 1.30.3-gke.1451000 or later
The Compute Engine machine series
to use, such as n4 or c3 . If you don't specify a
value, GKE uses the default machine series of the cluster.
machineType
optional
string
Requires GKE version 1.30.3-gke.1451000 or later
The Compute Engine machine type to use. This value can be a predefined
type, like n4-standard-32 , or a
custom machine type ,
like n4-custom-8-20480 . Using custom machine types requires
GKE version 1.33.2-gke.1111000 or later.
location
optional
object ( location )
Requires GKE version 1.33.1-gke.1545000 or later
The location configuration.
maxPodsPerNode
optional
integer
Requires GKE version 1.32.1-gke.1159000 or later
The maximum number of Pods that GKE can place on each
node. The value must be between 8 and 256 .
maxRunDurationSeconds
optional
integer
Requires GKE version 1.32.1-gke.1159000 or later
The maximum duration, in seconds, that the nodes can exist before being
shut down. If you omit this field, the nodes can exist indefinitely.
minCores
optional
integer
Requires GKE version 1.30.3-gke.1451000 or later
The minimum number of vCPU cores that each node can have. If you omit
this field, the default value is 0 .
minCpuPlatform
optional
string
Requires GKE version 1.34.1-gke.2541000 or later
The minimum CPU platform of each node of this priority. For example,
Intel Sky Lake or Intel Cascade Lake .
For more information about all of the machine families that support a particular CPU platform, see
CPU platforms .
Read more about this field.
minMemoryGb
optional
integer
Requires GKE version 1.30.3-gke.1451000 or later
The minimum memory capacity, in GiB, that each node can have. If you omit
this field, the default value is 0 .
nodeLabels
optional
map
Requires GKE version 1.34.1-gke.3084002 or later
Specifies the node labels, which add user-defined Kubernetes labels to all nodes in the new node pool.
These labels are applied to the Kubernetes API node object and can be used in nodeSelectors for Pod scheduling.
Kubernetes node labels are different from GKE labels.
For more information, see the comparison of GKE nodepool labels and Kubernetes labels.
Example:
nodeLabels : {
'example-nodelabel-key' : 'example-nodelabel-value' ,
'example-nodelabel-key-2' : 'example-nodelabel-value-2' ,
}
nodepools
optional
[]string
Requires GKE version 1.30.3-gke.1451000 or later
A list of existing manually created node pools in Standard mode
clusters. You must associate these node pools with the ComputeClass by
using node labels and node taints. GKE doesn't process the
node pools in this list in any order.
Example: nodepools: ['example-first-nodepool-name', 'example-second-nodepool-name']
This field has the following restrictions:
This field is incompatible with all other fields in
priorities , because this field is for manually created node
pools.
Unsupported when the spec.autopilot.enabled field is
set to true .
nodeSystemConfig
optional
object ( nodeSystemConfig )
Requires GKE version 1.32.1-gke.1729000 or later
The node system configuration.
placement
optional
object ( placement )
Requires GKE version 1.33.2-gke.1335000 or later
The placement configuration. You can specify a resource policy name to be used in custom compact placement policies .
podFamily
optional
string
Requires GKE version 1.35.2-gke.1485000 or later
Use the Autopilot container-optimized compute platform to run
the Pod. The supported value is general-purpose .
To use this field in a Standard cluster, you must set the
spec.autopilot.enabled field to true .
priorityScore
optional
integer
Requires GKE version 1.35.2-gke.1842000 or later
The explicit priority score for the priority rule. Higher values mean higher priority. You can group multiple priority rules by assigning the same priority score to them. If you assign a priority score to a priority rule, you must set a priority score for *all* priority rules that are in the same ComputeClass.
reservations
optional
object ( reservations )
Requires GKE version 1.31.1-gke.2105000 or later
The Compute Engine capacity reservations to consume during node
provisioning.
spot
optional
boolean
Requires GKE version 1.30.3-gke.1451000 or later
The Spot VMs configuration. If you set this field to true ,
GKE uses Spot VMs to create your nodes. If you omit
this field, the default value is false .
storage
optional
object ( storage )
Requires GKE version 1.30.3-gke.1639000 or later
The boot disk configuration of each node.
taints[]
optional
object ( taints )
Requires GKE version 1.34.1-gke.3084002 or later
Applies the given Kubernetes taints on all nodes in the new node pool, which can be used with tolerations for Pod scheduling.
Any workload that doesn't have tolerations for all of the taints in this field won't be scheduled to the node pool.
For more information, see node-taints
tpu
optional
object ( tpu )
Requires GKE version 1.31.2-gke.1518000 or later
The TPU configuration.
The following example configures a ComputeClass that prioritizes Spot VMs
for the n4-custom-8-20480 custom machine type, and falls back to
on-demand VMs of the same type if Spot capacity is unavailable:
apiVersion : cloud.google.com/v1
kind : ComputeClass
metadata :
name : custom-machine-type
spec :
priorities :
- machineType : n4-custom-8-20480
spot : true
- machineType : n4-custom-8-20480
spot : false
nodePoolAutoCreation :
enabled : true
priorityDefaults
priorityDefaults :
nodeSystemConfig : object( nodeSystemConfig )
location : object( location )
Fields
nodeSystemConfig
optional
object ( nodeSystemConfig )
Default values for the node system configuration. These values apply
to a priority rule in the spec.priorities field only if the
corresponding fields are omitted from that rule.
location
optional
object ( location )
Requires GKE version 1.33.1-gke.1545000 or later
Default values for the location configuration. These values apply
to a priority rule in the spec.priorities field only if the
corresponding fields are omitted from that rule.
reservations
reservations :
affinity : string
specific : [
object( specific )
]
Fields
affinity
required
string
The type of reservation to consume when creating nodes. The following
values are supported:
Specific : consume only specific named reservations. If the specified reservation doesn't have any capacity, GKE
moves on to the next priority rule in the ComputeClass. If you use this
value, the specific[] field is required.
AnyBestEffort : consume any reservation that matches the
requirements of the priority rule. If any available reservation doesn't have capacity, GKE tries to provision an on-demand node
with the priority rule configuration.
None : prevent GKE from consuming
reservations when it creates nodes for that priority rule.
specific
optional*
object( specific )
The parameters for consuming specific reservations. If you set the
affinity field to Specific , this field is
required. If you set the affinity field to any other
value, you can't specify the specific field.
reservationBlock
reservationBlock :
name : string
reservationSubBlock : object( reservationSubBlock )
Fields
name
required
string
The name of the specific reservation block to consume.
reservationSubBlock
optional
object( reservationSubBlock )
Requires GKE version 1.33.1-gke.1788000 or later
Consumes a named sub-block of capacity within the reservation block.
For more information about reservation sub-block consumption, see
Consume specific reservation sub-blocks .
reservationSubBlock
reservationSubBlock :
name : string
Fields
name
required
string
The name of the specific reservation sub-block to consume.
secondaryBootDisks
secondaryBootDisks :
- diskImageName : string
mode : string
project : string
Fields
diskImageName
required
string
The name of the disk image.
mode
optional
string
The mode in which the secondary boot disk should be used. The
following values are supported:
CONTAINER_IMAGE_CACHE : use the disk as a container image
cache.
MODE_UNSPECIFIED : don't use a specific mode. If you
omit this field, this is the default value.
project
optional
string
The project ID of the Google Cloud project that the disk image
belongs to. If you omit this field, the default value is the project ID
of the cluster project.
specific
specific :
- name : string
project : string
zones : [] string
reservationBlock : object( reservationBlock )
Fields
name
required
string
The name of the specific reservation to consume.
project
optional
The project ID of the Google Cloud project that contains
the specific reservation. To use a shared reservation from a different
project, this field is required.
zones
optional
[]string
Requires GKE version 1.34.1-gke.3759000 or later
A list of Google Cloud zones to consume the reservations from. If
you specify this field, GKE consumes matching reservations only from zones in the list.
This field cannot be used if
location.zones is specified in the same priority rule.
reservationBlock
optional
object( reservationBlock )
Requires GKE version 1.31.4-gke.1072000 or later
Consumes a named block of capacity within the reservation.
For details about reservation block consumption, see
Consume specific reservation blocks .
storage
storage :
bootDiskKMSKey : string
bootDiskSize : integer
bootDiskType : string
localSSDCount : integer
secondaryBootDisks : [
object( secondarybootdisks )
]
Fields
bootDiskKMSKey
optional
string
The path to the Cloud Key Management Service key to use to encrypt the boot disk.
bootDiskSize
optional
integer
Requires GKE version 1.34.1-gke.1431000 or later
for machineFamily priority rules and version
1.30.3-gke.1639000 or later for other priority rule types.
The size, in GiB, of the boot disk for each node. The minimum value is
10 .
bootDiskType
optional
string
Requires GKE version 1.34.1-gke.1431000 or later
for machineFamily priority rules and version
1.30.3-gke.1639000 or later for other priority rule types.
The type of disk to attach to the node. The value that you specify must
be supported by the machine series or the machine type in your priority
rule. The following values are supported:
pd-balanced : balanced Persistent Disk. On
Autopilot, only the pd-balanced type of
bootDiskType is supported.
pd-standard : standard Persistent Disk.
pd-ssd : performance (SSD) Persistent Disk.
hyperdisk-balanced : Google Cloud Hyperdisk Balanced.
For details about the disk types that specific machine series support,
see the
Machine series comparison table .
Filter the table properties for "Hyperdisk" and "PD".
localSSDCount
optional
integer
The number of Local SSDs to attach to each node. If you specify this
field, the minimum value is 1 .
secondaryBootDisks[]
optional
[]object( secondaryBootDisks )
Requires GKE version 1.31.2-gke.1105000 or later
The configuration of secondary boot disks that are used to preload nodes
with data, such as ML models or container images.
sysctls
sysctls :
kernel.keys.maxbytes : integer
kernel.keys.maxkeys : integer
kernel.shmmni : integer
kernel.shmmax : integer
kernel.shmall : integer
net.core.netdev_max_backlog : integer
net.core.rmem_default : integer
net.core.rmem_max : integer
net.core.wmem_default : integer
net.core.wmem_max : integer
net.core.optmem_max : integer
net.core.somaxconn : integer
net.ipv4.neigh.default.gc_thresh1 : integer
net.ipv4.neigh.default.gc_thresh2 : integer
net.ipv4.neigh.default.gc_thresh3 : integer
net.ipv4.tcp_max_orphans : integer
net.ipv4.tcp_rmem : string
net.ipv4.tcp_wmem : string
net.ipv4.tcp_tw_reuse : integer
net.core.busy_poll : integer
net.core.busy_read : integer
net.ipv6.conf.all.disable_ipv6 : boolean
net.ipv6.conf.default.disable_ipv6 : boolean
net.netfilter.nf_conntrack_max : integer
net.netfilter.nf_conntrack_buckets : integer
net.netfilter.nf_conntrack_tcp_timeout_close_wait : integer
net.netfilter.nf_conntrack_tcp_timeout_time_wait : integer
net.netfilter.nf_conntrack_tcp_timeout_established : integer
net.netfilter.nf_conntrack_acct : boolean
vm.max_map_count : integer
vm.dirty_background_ratio : integer
vm.dirty_expire_centisecs : integer
vm.dirty_ratio : integer
vm.dirty_writeback_centisecs : integer
vm.overcommit_memory : integer
vm.overcommit_ratio : integer
vm.vfs_cache_pressure : integer
vm.min_free_kbytes : integer
vm.swappiness : integer
vm.watermark_scale_factor : integer
fs.aio-max-nr : integer
fs.file-max : integer
fs.inotify.max_user_instances : integer
fs.inotify.max_user_watches : integer
fs.nr_open : integer
Fields
kernel.keys.maxbytes
optional
integer
Requires GKE version 1.35.3-gke.1234000 or later
The maximum number of bytes that a nonroot user can hold in the payload section of all their keys. The value must be between 20000 and 2097152 .
kernel.keys.maxkeys
optional
integer
Requires GKE version 1.35.3-gke.1234000 or later
The maximum number of keys that a nonroot user can own. The value must be between 200 and 1048576 .
kernel.shmmni
optional
integer
Requires GKE version 1.33.4-gke.1036000 or later
The system-wide maximum number of shared memory segments. The value
must be between 4096 and 32768 .
kernel.shmmax
optional
integer
Requires GKE version 1.33.4-gke.1036000 or later
The total amount of shared memory pages that can be used on the
system at one time. The value must be between 0 and
18446744073692774399 .
kernel.shmall
optional
integer
Requires GKE version 1.33.4-gke.1036000 or later
The maximum size (in bytes) of a single shared memory segment allowed
by the kernel. The value must be between 0 and
18446744073692774399 .
net.core.netdev_max_backlog
optional
integer
The maximum number of packets, queued on the INPUT side, when the
interface receives packets faster than the kernel can process them. This
setting is crucial for high-traffic network interfaces. Increasing this
value can help to prevent packet loss under heavy load, but it also
increases memory consumption. The value must be between 1
and 2147483647 .
net.core.rmem_max
optional
integer
The maximum receive socket buffer size in bytes. This setting limits
the amount of data that a socket can buffer when receiving data.
Increasing this value can improve performance for high-bandwidth
connections by allowing the socket to handle larger bursts of data.
The value must be between 2304 and 2147483647 .
net.core.rmem_default
optional
integer
Requires GKE version 1.33.4-gke.1036000 or later
The default receive socket buffer size in bytes. The value must be
between 2304 and 2147483647 .
net.core.wmem_default
optional
integer
The default setting, in bytes, of the socket send buffer. This value
defines the initial size of the buffer allocated for sending data on a
socket. The value must be between 4608 and
2147483647 .
net.core.wmem_max
optional
integer
The maximum send socket buffer size in bytes. This setting limits the
amount of data that a socket can buffer when it sends data. Increasing
this value can improve performance for applications that send large
amounts of data. The value must be between 4608 and
2147483647 .
net.core.optmem_max
optional
integer
The maximum ancillary buffer size allowed per socket. Ancillary data
is a sequence of
cmsghdr structures with
appended data, which are used to send and receive control information along with
socket data. The value must be between 1 and
2147483647 .
net.core.somaxconn
optional
integer
The maximum size of the socket listen() backlog. This
setting defines the maximum number of pending connections that can be
queued for a listening socket. You might need to increase this value for
busy web servers or other network services that handle a high volume of
concurrent connection requests. The value must be between
128 and 2147483647 . The default value is
128 .
net.ipv4.neigh.default.gc_thresh1
optional
integer
Requires GKE version 1.35.3-gke.1234000 or later
The minimum number of entries to keep in the ARP cache. The garbage collector doesn't run if the number of entries is below this setting. The value must be between 0 and 262144 . Note, setting this value to 0 can lead to cache thrashing and degraded performance.
net.ipv4.neigh.default.gc_thresh2
optional
integer
Requires GKE version 1.35.3-gke.1234000 or later
The soft maximum number of entries to keep in the ARP cache. The garbage collector allows the number of entries to exceed this value for 5 seconds before it starts soft garbage collection. The value must be between 512 and 524288 .
net.ipv4.neigh.default.gc_thresh3
optional
integer
Requires GKE version 1.35.3-gke.1234000 or later
The hard maximum number of entries to keep in the ARP cache. The garbage collector is designed to always run if the number of entries exceeds this setting. The value must be between 1024 and 1048576 .
net.ipv4.tcp_max_orphans
optional
integer
Requires GKE version 1.34.1-gke.3084001 or later
Maximal number of TCP sockets that aren't attached to any user file
handle. The value must be between 16384 and 262144 .
net.ipv4.tcp_rmem
optional
string
The minimum size, in bytes, of the receive buffer that's used by TCP
sockets
in moderation. Each TCP socket can use the size for receiving
data, even if the total pages of UDP sockets exceed udp_mem
pressure. The value in this field is a string of three integers,
separated by spaces. These three integers represent the minimum,
default, and maximum size of the receive buffer. For example,
'4096 87380 6291456' .
net.ipv4.tcp_wmem
optional
string
The minimal size, in bytes, of send buffer that's used by TCP sockets in
moderation. Each TCP socket can use the size for sending data,
even if the total pages of TCP sockets exceed udp_mem
pressure. The value in this field is a string of three integers,
separated by spaces. These three integers represent the minimum, default,
and maximum size of the receive buffer. For example,
'4096 87380 6291456' . These values control how TCP socket
send buffers dynamically resize for sending.
net.ipv4.tcp_tw_reuse
optional
integer
Reuse TIME-WAIT sockets for new connections
when the protocol considers it safe to do so. This setting can improve
performance by reducing the number of sockets in the
TIME-WAIT state, but it also carries a risk of potential
data corruption if it isn't used carefully. Don't change this setting unless
a technical expect requests the change. The following values are
supported:
0
1
2
net.core.busy_poll
optional
integer
The approximate time, in microseconds, to wait for packets on the
device queue to do socket
polls or
selects .
This setting is related to network performance tuning for low-latency
applications. The value must be between 1024 and
2147483647 .
net.core.busy_read
optional
integer
The approximate time, in microseconds, to wait for packets on the
device queue to perform
read
operations. This setting is used for low-latency network tuning, specifically
for read operations. The value must be between 0 and
2147483647 .
net.ipv6.conf.all.disable_ipv6
optional
boolean
Globally disables IPv6 on all future and existing
interfaces. Changing this value has the same effect as changing the
net.ipv6.conf.default.disable_ipv6 setting and all
per-interface disable_ipv6 settings to a specific value.
The following values are supported:
true : disable IPv6.
false : enable IPv6.
net.ipv6.conf.default.disable_ipv6
optional
boolean
Disable IPv6 operations in all future network
interfaces. The following values are supported:
true : disable IPv6.
false : enable IPv6.
net.netfilter.nf_conntrack_max
optional
integer
Requires GKE version 1.33.4-gke.1036000 or later
The size of connection tracking table. The value must be between
65536 and 4194304 .
net.netfilter.nf_conntrack_buckets
optional
integer
Requires GKE version 1.33.4-gke.1036000 or later
The size of hash table for connection tracking. The value must be
between 65536 and 524288 . Recommend setting:
nf_conntrack_max = nf_conntrack_buckets * 4
net.netfilter.nf_conntrack_tcp_timeout_close_wait
optional
integer
Requires GKE version 1.33.4-gke.1036000 or later
The period for which the TCP connections can remain in the CLOSE_WAIT
state, and stay in the table. The value must be between
60 and 3600 .
net.netfilter.nf_conntrack_tcp_timeout_time_wait
optional
integer
Requires GKE version 1.33.4-gke.1036000 or later
The period for which the TCP connections can remain in the TIME_WAIT
state, and stay in the table. The value must be between 1
and 600 .
net.netfilter.nf_conntrack_tcp_timeout_established
optional
integer
Requires GKE version 1.33.4-gke.1036000 or later
The duration of dead connections before the connections are
automatically deleted from connection tracking table. The value must be
between 600 and 86400 .
net.netfilter.nf_conntrack_acct
optional
boolean
Requires GKE version 1.33.4-gke.1036000 or later
Whether to enable connection tracking flow accounting. The value must
be true or false .
vm.max_map_count
optional
integer
Limit the number of distinct memory regions that a
process can map into its address space. You might need to increase this
value for applications that require a large number of shared libraries
or that perform extensive memory mapping.
The value must be between 65536 and 2147483647 .
vm.dirty_background_ratio
optional
integer
Requires GKE version 1.33.4-gke.1036000 or later
Percentage of system memory that can be filled with dirty pages
(modified but not yet written to disk) before background kernel flusher
threads begin writeback. This value should be less than
vm.dirty_ratio . The value must be between 1
and 100 .
vm.dirty_expire_centisecs
optional
integer
Requires GKE version 1.33.4-gke.1036000 or later
Maximum age (in hundredths of a second) that dirty data can remain
in memory before kernel flusher threads write it to disk. Lower values
result in faster, more frequent writebacks. The value must be between
0 and 6000 .
vm.dirty_ratio
optional
integer
Requires GKE version 1.33.4-gke.1036000 or later
Percentage of system memory that can be filled with dirty pages
before processes that perform writes are forced to block and write out
dirty data synchronously. This value should be greater than
vm.dirty_background_ratio . The value must be between
1 and 100 .
vm.dirty_writeback_centisecs
optional
integer
Requires GKE version 1.33.4-gke.1036000 or later
Interval (in hundredths of a second) at which kernel flusher threads
wake up to write 'old' dirty data to disk. The value must be between
0 and 1000 .
vm.overcommit_memory
optional
integer
Requires GKE version 1.33.4-gke.1036000 or later
Determines the kernel's strategy for handling memory overcommitment.
The following values are supported:
0 : Rejects allocations that are obviously too large.
1 (default value): Allows overcommit until memory is exhausted.
2 : Prevents overcommit beyond swap space plus a
percentage of RAM defined by vm.overcommit_ratio .
This setting isn't supported on machines with less than 15 GB memory.
vm.overcommit_ratio
optional
integer
Requires GKE version 1.33.4-gke.1036000 or later
Specifies the percentage of physical RAM allowed for overcommit when
vm.overcommit_memory is set to 2 . The total
committed address space cannot exceed swap plus this RAM percentage.
The value must be between 0 and 100 .
vm.vfs_cache_pressure
optional
integer
Requires GKE version 1.33.4-gke.1036000 or later
Adjusts the kernel's preference for reclaiming memory used for dentry
(directory) and inode caches. The value must be between 0
and 100 .
vm.min_free_kbytes
optional
integer
Requires GKE version 1.34.1-gke.3084001 or later
Minimum free memory before OOM. The value must be between 67584
and 1048576 .
vm.swappiness
optional
integer
Requires GKE version 1.34.1-gke.3084001 or later
Controls the tendency of the kernel to move processes out of physical memory and onto the swap disk. The value must be between 0
and 200 .
vm.watermark_scale_factor
optional
integer
Requires GKE version 1.34.1-gke.3084001 or later
Controls the aggressiveness of kswapd. The flag defines the amount of memory left in a node before kswapd is woken up and how much memory needs to be freed before kswapd goes back to sleep. The value must be between 10
and 3000 .
fs.aio-max-nr
optional
integer
Requires GKE version 1.33.4-gke.1036000 or later
The maximum system-wide number of asynchronous io requests. The value
must be between 65536 and 4194304 .
fs.file-max
optional
integer
Requires GKE version 1.33.4-gke.1036000 or later
Maximum number of file-handles that the Linux kernel can allocate.
The value must be between 104857 and 67108864 .
fs.inotify.max_user_instances
optional
integer
Requires GKE version 1.33.4-gke.1036000 or later
The maximum number of inotify instances that a user can create. The
value must be between 8192 and 1048576 .
fs.inotify.max_user_watches
optional
integer
Requires GKE version 1.33.4-gke.1036000 or later
The maximum number of inotify watches that a user can create. The
value must be between 8192 and 1048576 .
fs.nr_open
optional
integer
Requires GKE version 1.33.4-gke.1036000 or later
The maximum number of file descriptors that can be opened by a
process. The value must be between 1048576 and 2147483584 .
resourceManagerTags
resourceManagerTags :
- key : string
value : string
Fields
key
required
string
The key of the resource manager tag. Can be in one of the following formats:
tagKeys/ TAG_KEY_ID
ORGANIZATION_ID / TAG_KEY_NAME
PROJECT_ID / TAG_KEY_NAME
value
required
string
The value of the resource manager tag. Can be in one of the following formats:
tagValues/ TAG_VALUE_ID
TAG_VALUE_NAME
taints
taints :
- key : string
value : string
effect : string
Fields
key
required
string
The node taint key. The key can be up to 253 characters. It must begin with a letter
or number, and can contain letters, numbers, hyphens,
dots, and underscores.
value
optional
string
The value that matches the specified taint.
effect
optional
string
The value that defines the taint's effect on Pods that don't have the
necessary toleration. For more information, see the Kubernetes documentation about
Taints and Tolerations .
Supported values are as follows:
NoSchedule
NoExecute
PreferNoSchedule
tpu
- tpu :
count : integer
topology : string
type : string
Fields
count
required
integer
The number of TPUs to attach to the node.
topology
required
string
The TPU topology
to use, such as "2x2x1" .
type
required
string
The TPU type
to use, such as tpu-v6e-slice .
ComputeClass status
The status field is a list of status messages. This field is informational and
is updated by the Kubernetes API server and the kubelet on each node.
status :
conditions : [
object( conditions )
]
Fields
conditions[]
object( conditions )
List of status conditions for the ComputeClass object.
conditions
conditions :
- type : string
status : boolean
reason : string
message : string
lastTransitionTime : string
observedGeneration : integer
Fields
type
string
The type of condition, which helps to organize status messages.
status
string
The status of the condition. The value is one of the following:
True
False
Unknown
reason
string
A machine-readable reason why a specific condition type made its most
recent transition.
message
string
A human-readable message that provides details about the most recent
transition. This field might be empty.
lastTransitionTime
string
The timestamp of the most recent change to the condition.
observedGeneration
integer
A count of how many times the ComputeClass controller observed a change
to the ComputeClass object. The controller attempts to reconcile
the value in this field with the value in the metadata.generation
field, which the Kubernetes API server updates whenever a change is made to
the ComputeClass API object.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
