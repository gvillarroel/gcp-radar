---
title: "About custom ComputeClasses \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes
  title: "About custom ComputeClasses \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Guides
Send feedback
About custom ComputeClasses
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
Standard
You can create your own ComputeClasses to control the properties of the nodes
that Google Kubernetes Engine (GKE) provisions when autoscaling your cluster.
This document is for platform administrators who want to declaratively define
autoscaling profiles for nodes, so that specific workloads run on hardware that
meets their requirements. For more information about what ComputeClasses are,
see
About GKE ComputeClasses .
ComputeClasses overview
In GKE, a ComputeClass is a profile that consists of a set of
node attributes that GKE uses to provision the nodes that run
your workloads during autoscaling events. ComputeClasses can target specific
optimizations, like provisioning high-performance nodes or prioritizing
cost-optimized configurations for cheaper running costs. Custom ComputeClasses
let you define profiles that GKE then uses to autoscale
nodes to closely meet the requirements of specific workloads.
Custom ComputeClasses are available to use in GKE
Autopilot mode and GKE Standard mode in version
1.30.3-gke.1451000 and later, and offer a declarative approach to defining
node attributes and autoscaling priorities. Custom ComputeClasses are available
to configure and use in all eligible GKE clusters by default.
Benefits of custom ComputeClasses
Custom ComputeClasses offer the following benefits:
Fallback compute priorities : Define a hierarchy of node configurations
in each ComputeClass for GKE to prioritize. If the most
preferred configuration is unavailable, GKE automatically
chooses the next configuration in the hierarchy. This fallback model helps
ensure that even when compute resources are unavailable, your workloads
still run on optimized hardware with minimal scheduling delays.
Granular autoscaling control : Define node configurations that are best
suited for specific workloads. GKE prioritizes those
configurations when creating nodes during scaling.
Declarative infrastructure configuration : Adopt a declarative approach
to infrastructure management so that GKE automatically
creates nodes for you that match your specific workload requirements.
Active migration : If compute resources for a more preferred machine
configuration become available in your location, GKE
automatically migrates your workloads to new nodes that use the preferred
configuration.
Cost optimization : Prioritize cost-efficient node types like
Spot VMs to reduce your cluster expenses.
Default custom ComputeClasses : Set a custom ComputeClass as the
default for an entire cluster or for specific Kubernetes namespaces, so that
workloads run on optimized hardware even if they don't request a specific
ComputeClass.
Custom node consolidation thresholds : Define custom resource usage
thresholds for nodes. If a specific node's resource usage falls below your
threshold, GKE attempts to consolidate the workloads into a
similar, available node and scales down the underutilized node.
Use cases for custom ComputeClasses
Consider using custom ComputeClasses in scenarios like the following:
You want to run your AI/ML workloads on specific GPU or TPU configurations.
You want to set default hardware configurations for the workloads that
specific teams run, taking the overhead off of the application operators.
You run workloads that perform optimally on specific Compute Engine
machine series or hardware configurations.
You want to declare hardware configurations that meet specific business
requirements, like high performance, cost optimized, or high availability.
You want GKE to hierarchically fallback to using specific
hardware configurations during compute resource unavailability, so that your
workloads always run on machines that suit their requirements.
You want to centrally decide on the optimal configurations across your
enterprise's fleet, so that your costs are more predictable and your
workloads run more reliably.
You want to centrally specify which of your Compute Engine
capacity reservations GKE should use to provision new nodes
for specific workloads.
You want to specify a compact placement policy to use with GKE
Autopilot. For details, see: compact placement .
How custom ComputeClasses work
Custom ComputeClasses are Kubernetes custom resources that provision
Google Cloud infrastructure. You define a ComputeClass object in the
cluster, and then request that ComputeClass in workloads or set that ComputeClass as the default for a Kubernetes namespace. When a matching workload
demands new infrastructure, GKE provisions new nodes in line with
the priorities that you set in your ComputeClass definition.
The attributes that you set in your ComputeClasses define how GKE
configures new nodes to run workloads. When you modify an existing ComputeClass, all future nodes that GKE creates for that ComputeClass
use the modified configuration. GKE doesn't retroactively change
the configuration of existing nodes to match your modifications.
Custom ComputeClasses influence autoscaling decisions but are not considered by
kube-scheduler. During Pod scheduling, the scheduler might not
prioritize nodes with higher custom ComputeClass priorities, even when existing
nodes are available across various priorities.
To ensure that your custom ComputeClasses are optimized for your fleet,
consider the following guidelines:
Understand the compute requirements of your fleet, including any
application-specific hardware requirements.
Decide on a theme that guides the design of each ComputeClass. For example,
a performance-optimized ComputeClass might have a fallback strategy that
uses only high-CPU machine types.
Decide on the Compute Engine machine family and machine series that
most closely fit your workloads. For details, see
Machine families resource and comparison guide .
Plan a fallback strategy within each ComputeClass so that workloads always
run on nodes that use similar machine configurations. For example, if the N4
machine series isn't available, you can fall back to C3 machines.
View the complete custom resource definition
To view the latest custom resource definition (CRD) for the ComputeClass custom resource, including all fields and their relationships, refer to the ComputeClass reference documentation .
You can also view the CRD in your cluster by running the following command:
kubectl describe crd computeclasses.cloud.google.com
Plan a custom ComputeClass
To effectively plan, deploy, and use a custom ComputeClass in your cluster,
you do the following steps:
Choose your fallback compute priorities : Define a
series of rules that govern the properties of the nodes that
GKE creates for the ComputeClass.
Configure GKE Standard node pools and ComputeClasses :
For Standard mode clusters, perform required configuration steps
to use the ComputeClass with your node pools.
Define scaling behavior when no priority rules apply :
optionally, tell GKE what to do if nodes that meet your priority rules
can't be provisioned.
Set autoscaling parameters for node consolidation : tell
GKE when to consolidate workloads and remove underutilized
nodes.
Configure active migration to higher priority nodes :
optionally, tell GKE to move workloads to more preferred
nodes as hardware becomes available.
Consume Compute Engine reservations : optionally,
tell GKE to consume existing Compute Engine
zonal reservations when creating new nodes.
Choose your fallback compute priorities
The primary advantage of using a custom ComputeClass is to have control over
the fallback strategy when your preferred nodes are unavailable due to factors
like resource exhaustion and quota limitations.
You create a fallback strategy by defining a list of priority rules in your
custom ComputeClass. When a cluster needs to scale up, GKE
prioritizes creating nodes that match the first priority rule. If
GKE can't create those nodes, it falls back to the next priority
rule, repeating this process until GKE successfully scales up the
cluster or exhausts all the rules. If all the rules are exhausted,
GKE creates nodes based on the default or specified behavior
described in
Define scaling behavior when no priority rules apply .
Different Compute Engine machine series support different
technologies and features. Earlier generations of a machine series might not
support the same storage types as newer generations. If you run stateful
workloads that rely on persistent data, avoid using a ComputeClass that spans
multiple generations of a machine series. The workloads might not be able to
access the persistent data if GKE places them on a machine type
that doesn't support that storage type. For details, filter the
machine series comparison table
for specific storage types.
Priority rules
You define priority rules in the spec.priorities field of the ComputeClass
custom resource. Each rule in the priorities field describes the properties of
the nodes to provision. GKE processes the priorities field in
order, which means that the first item in the field is the highest priority for
node provisioning.
There are two types of priority rules:
Declarative rule types : Use node characteristics to describe the nodes you
want to provision
Node pool rule type : In GKE Standard clusters,
provides a list of manually created node pools that are associated with the
ComputeClass in which GKE should provision nodes.
Declarative priority rules
With declarative priority rules, you can specify machine properties—like
machine family or type, Spot VMs, accelerator options,
storage options ,
reservations , and minimum resource requirements—for GKE to use
when provisioning nodes. For the complete set of supported fields, see the
ComputeClass CRD reference .
machineFamily configurations
The machineFamily field accepts a
Compute Engine machine series like
n2 or c3 . If unspecified, the default is e2 . When you use the machineFamily
field, GKE provisions nodes from that series with a machine type that is large
enough to run your Pods. The autoscaler algorithm determines the most
appropriate size based on the aggregate resource requests of all pending Pods.
For more control over the exact machine size, use the machineType field
instead.
You can use other spec.priorities fields alongside the machineFamily field
to declaratively define your compute requirements. For example:
spot : Spot VMs. The default value is false .
minCores : Minimum vCPUs per node. The default value is 0 . This field is
useful for preventing the creation of nodes that are too small for your needs.
minMemoryGb : Minimum memory per node. The default value is 0 .
storage.bootDiskType : Boot disk type. On Autopilot clusters, only the
pd-balanced type of bootDiskType is supported. Requires GKE version 1.34.1-gke.1431000 or later.
storage.bootDiskSize : Size in GB for the node boot disk. Requires GKE version 1.34.1-gke.1431000 or later.
storage.bootDiskKMSKey : Path to Cloud Key Management Service key to use for boot disk
encryption.
storage.secondaryBootDisks : Persistent Disks that are used to preload GKE
nodes with data, such as a machine learning (ML) model or a container image.
Requires GKE version 1.31.2-gke.1105000 or later.
To set up a secondary boot disk for your cluster to use,
see configure secondary boot disks .
storage.secondaryBootDisks.diskImageName : the name of the disk image to preload.
storage.secondaryBootDisks.project : the name of the project to which the
disk image belongs. If this value is unspecified, the default is your cluster project.
storage.secondaryBootDisks.mode : the mode in which the secondary boot disk
should be used. If this value is set to CONTAINER_IMAGE_CACHE , the secondary boot disk
is used as a container image cache. The value must be equal to either
CONTAINER_IMAGE_CACHE or MODE_UNSPECIFIED . If this value is unspecified,
the default is MODE_UNSPECIFIED .
placement : The specifics of machine placement:
policyName : The name of either a GKE
Autopilot compact placement policy
or a workload policy .
The following example shows a priority rule that uses machineFamily :
priorities:
- machineFamily: n4
spot: true
minCores: 16
minMemoryGb: 64
storage:
bootDiskType: hyperdisk-balanced
bootDiskSize: 100
bootDiskKMSKey: projects/example/locations/us-central1/keyRings/example/cryptoKeys/key-1
secondaryBootDisks:
- diskImageName: pytorch-mnist
project: k8s-staging-jobset
machineType configurations
The machineType field accepts a Compute Engine predefined machine type, like n4-standard-32 , or a custom machine type string , like n4-custom-8-20480 . Using custom machine types requires GKE version 1.33.2-gke.1111000 or later.
You can specify other spec.priorities fields alongside the machineType field
to declaratively define your compute requirements, for example:
spot : Use Spot VMs. Default is false .
storage : Configure node storage.
storage.bootDiskType : Boot disk type. On Autopilot, only the
pd-balanced type of bootDiskType is supported.
storage.bootDiskKMSKey : Path to Cloud KMS key to use for boot disk
encryption.
storage.bootDiskSize : Size in GB for the node boot disk.
storage.localSSDCount : Number of local SSDs to attach to the node. If
specified, must be at least 1 .
The following example shows a priority rule that uses machineType to provision
n4-standard-32 machine types:
priorities:
- machineType: n4-standard-32
spot: true
storage:
bootDiskType: hyperdisk-balanced
bootDiskSize: 250
localSSDCount: 2
bootDiskKMSKey: projects/example/locations/us-central1/keyRings/example/cryptoKeys/key-1
GPU configuration
To select GPUs in your priority rules, specify the type, count, and
driverVersion (optional) of the GPU in the gpu field of a priority rule.
The following fields are supported:
gpu.type : A GPU type, like nvidia-l4 . For details, see
Choose GPU support using Autopilot or Standard .
gpu.count : The number of GPUs to attach. For supported quantities by
GPU type, see
Supported GPU quantities .
gpu.driverVersion : The NVIDIA driver version to install. Must be
default or latest . Requires GKE version 1.31.1-gke.1858000 or later.
You can also specify other spec.priorities fields
such as Spot VMs, storage options ,
and reservations in combination with the gpu fields.
The following example shows a rule for GPUs:
priorities:
- gpu:
type: nvidia-l4
count: 1
storage:
secondaryBootDisks:
- diskImageName: big-llm
project: k8s-llm
spot: true
TPU configuration
Requires GKE version 1.31.2-gke.1518000 or later
To select TPUs in your priority rules, specify the type, count, and topology
of the TPU in the tpu field of a priority rule. The following fields are
required:
tpu.type : The TPU type, like tpu-v5p-slice . For details, see
TPU availability in GKE Autopilot .
tpu.count : The number of TPUs to attach.
tpu.topology : The TPU topology to use, like "2x2x1" . For details, see
Choose a topology for Autopilot .
You can also specify other spec.priorities fields
alongside the tpu field in your priority rule, for example:
spot : Use Spot VMs. Default is false .
storage : Configure node storage.
storage.bootDiskType : Boot disk type.
storage.bootDiskKMSKey : Path to Cloud KMS key to use for boot
disk encryption.
storage.bootDiskSize : Size in GB for the node boot disk.
reservations : Use a Compute Engine reservation. For details,
see the Consume Compute Engine reservations section.
location :
zones : A list of Google Cloud zones where GKE can
provision nodes. If unspecified, GKE provisions nodes in
the zones configured in the cluster's
node auto-provisioning settings .
If no zones are configured for node auto-provisioning, GKE
provisions nodes in any of the standard zones that the control plane uses.
Optional: use an AI zone , like us-central1-ai1a . AI zones are specialized locations that are optimized for AI/ML workloads within Google Cloud regions.
zoneTypes : A list of zone types that specifies a set of Google Cloud
zones where GKE can provision nodes. The supported values
are CLUSTER_DEFAULT (default), STANDARD , and AI .
The following example shows a rule for TPUs:
apiVersion: cloud.google.com/v1
kind: ComputeClass
metadata:
name: tpu-class
spec:
priorities:
- tpu:
type: tpu-v5p-slice
count: 4
topology: 4x4x4
reservations:
specific:
- name: tpu-reservation
project: reservation-project
affinity: Specific
- spot: true
tpu:
type: tpu-v5p-slice
count: 4
topology: 4x4x4
nodePoolAutoCreation:
enabled: true
This example defines the following fallback behavior:
GKE attempts to provision a 16-node multi-host TPU v5p
slice by consuming a shared Compute Engine reservation named
tpu-reservation from the reservation-project project.
If the reservation has no available TPUs, GKE attempts to
provision a 16-node multi-host TPU v5p slice running on Spot VMs.
If none of the preceding rules can be satisfied, GKE follows
the logic in the
Define scaling behavior when no priority rules apply section.
After you deploy a TPU custom ComputeClass to your cluster, select that custom
ComputeClass in your workload:
Autopilot workloads : see the "Provision TPUs by using custom
ComputeClasses" section in
Deploy TPU workloads on GKE Autopilot
Standard workloads : see the "Provision TPUs by using custom
ComputeClasses" section in
Deploy TPU workloads on GKE Standard .
Additionally, for TPU workloads you can do the following:
Define workload type
Define SLO
Group in collections in TPU Trillium (v6e)
Target AI zones
Target AI zones
You can also use a compute class to specify AI zones for your Pods. AI zones are specialized locations within Google Cloud regions optimized for AI/ML workloads. The following compute class sets a prioritized list of zones that includes AI zones:
apiVersion : cloud.google.com/v1
kind : ComputeClass
metadata :
name : accelerator-ai-preferred
spec :
nodePoolAutoCreation :
enabled : true
priorities :
# --- Priority 1: TPU in a specific AI zone (On-Demand) ---
- tpu :
type : tpu-v5p-slice
count : 4
topology : 4x4x4
location :
zones :
- "us-central1-ai1a" # Specify your target AI zone
# machineFamily: a3 # Optional
# --- Priority 2: TPU in any AI zone (On-Demand) ---
- tpu :
type : tpu-v5p-slice
count : 4
topology : 4x4x4
location :
zoneTypes :
- "AI" # All AI zones in the cluster's region
# --- Priority 3: GPU in a specific Standard zone (On-Demand) ---
- gpu :
type : nvidia-tesla-a100
count : 1
location :
zones :
- "us-central1-a" # Fallback to a standard zone
- "us-central1-b"
whenUnsatisfiable : DoNotScaleUp
This ComputeClass configures GKE to provision nodes with v5p TPUs or A100 GPUs for
the workload. The nodes have the following preferences:
Priority 1: attempt to provision the TPU in the us-central1-ai1a AI
zone.
Priority 2: if the TPU is not available in the specific AI zone, attempt to
provision it in any AI zone of the cluster's region.
Priority 3: if the TPU is not available in AI zones, attempt to
provision the GPU in the us-central1-a or us-central1-b standard zones.
If A100 GPUs are not available in any of the specified zones, GKE will not
scale up the node pool.
Accelerators and machine shape specifications
Declarative accelerator configurations don't require the machineType or
machineFamily field to be explicitly specified unless you use them in
combination with reservations .
Node pools priority rules
The nodepools field takes a list of existing node pools on which
GKE attempts to create pending Pods. GKE doesn't
process the values in this field in order. You can't use other
spec.priorities fields alongside the nodepools field in the same priority
rule item because rules with the nodepools field are not declarative in nature.
This field is supported only on GKE Standard mode. For
usage details, see
Target specific node pools in a ComputeClass definition .
How GKE creates nodes using priority rules
When you deploy a workload that requests a ComputeClass and a new node is
needed, GKE processes the list of rules in the priorities field
of the ComputeClass specification in order.
For example, consider the following specification:
spec:
...
priorities:
- machineFamily: n4
spot: true
minCores: 64
- machineFamily: n4
spot: true
- machineFamily: n4
spot: false
When you deploy a workload that requests a ComputeClass with these priority
rules, GKE matches nodes as follows:
GKE places Pods on any existing nodes that are associated
with this ComputeClass.
If existing nodes can't accommodate the Pods, GKE provisions
new nodes that use the N4 machine series, are Spot VMs, and
have at least 64 vCPU.
If N4 Spot VMs with at least 64 vCPU aren't available in
the region, GKE provisions new nodes that use N4
Spot VMs that can fit the Pods, regardless of the number of
cores.
If no N4 Spot VMs are available in the region,
GKE provisions new on-demand N4 VMs.
If none of the preceding rules can be satisfied, GKE follows
the logic in the
Define scaling behavior when no priority rules apply section.
Default values for priority rules
You can set default values for some of the fields in the priority rules of your
ComputeClass specification. These default values apply if the corresponding
fields in a specific rule are omitted. You can set these default values by using
the priorityDefaults field in your ComputeClass specification.
The priorityDefaults field has the following limitations:
Requires GKE version 1.32.1-gke.1729000 or
later.
Isn't compatible with the nodepools priority rule, which doesn't contain any
fields.
For details about the types of default values that you can set, see the
priorityDefaults section in the
ComputeClass CustomResourceDefinition .
GKE Standard node pools and ComputeClasses
If you use GKE Standard mode, you might have to perform
manual configuration to ensure that your ComputeClass Pods schedule as
expected.
Auto-created node pools : No manual configuration
required. GKE automatically performs ComputeClass
configuration steps for you. For details, see
Node pool auto-creation and ComputeClasses .
Manually-created node pools : Manual configuration is required. You must
add node labels and node taints to your manually created node pools to
associate the nodes with a specific ComputeClass. For details, see
Configure manually-created node pools for ComputeClass use .
Configure manually-created node pools for ComputeClass use
If your GKE Standard clusters have node pools that you
manually created, you must configure those node pools to associate them with
specific ComputeClasses. GKE only schedules Pods that request a
specific ComputeClass on nodes in node pools that you associate with that
ComputeClass. This requirement doesn't apply to a ComputeClass that you
configure as the
cluster-level default .
GKE Autopilot mode and auto-created node pools in
GKE Standard mode perform this configuration for you.
To associate a manually created node pool with a ComputeClass, you add node
labels and node taints to the node pool during creation or during an update
by specifying the --node-labels flag and the --node-taints flag, as follows:
Node label : cloud.google.com/compute-class= COMPUTE_CLASS
Taint : cloud.google.com/compute-class= COMPUTE_CLASS :NoSchedule
In these attributes, COMPUTE_CLASS is the name of your
custom ComputeClass.
For example, the following commands together update an existing node pool and
associate the node pool with the dev-class ComputeClass:
gcloud container node-pools update dev-pool \
--cluster=example-cluster \
--node-labels="cloud.google.com/compute-class=dev-class"
gcloud container node-pools update dev-pool \
--cluster=example-cluster \
--node-taints="cloud.google.com/compute-class=dev-class:NoSchedule"
You can associate each node pool in your cluster with one custom ComputeClass.
Pods that GKE schedules on these manually-created node pools only
trigger node creation inside those node pools during autoscaling events.
Node pool auto-creation and ComputeClasses
You can use node pool auto-creation with a custom ComputeClass to let
GKE automatically create and delete node pools based on your
priority rules.
To let GKE automatically create node pools for a ComputeClass,
you must do the following:
Add the nodePoolAutoCreation field with the enabled: true value to your
ComputeClass specification.
If your cluster is running a version earlier than GKE version
1.33.3-gke.1136000, you must also
enable cluster-level node auto-provisioning .
GKE can then create new node pools for Pods that use your
ComputeClass. GKE decides whether to
scale up an existing node pool or create a new node pool based on factors like
the size of the clusters and Pod requirements. Pods with ComputeClasses that
don't configure node pool auto-creation continue to only scale up existing node
pools.
You can use ComputeClasses that enable node pool auto-creation alongside
ComputeClasses that interact with manually created node pools in the
same cluster.
Consider the following interactions with node pool auto-creation:
You can't use the
machine family
or the
Spot VMs
node selectors because these selectors conflict with ComputeClass behavior.
GKE rejects any Pods that request a ComputeClass and also
request Spot VMs or specific machine series.
If you
set a default ComputeClass for your cluster ,
Pods that use a machine family node selector only trigger node creation for
that default class in one of the following situations:
The Pods select a machine family that matches one of the priority rules in
the cluster-level default class. For example, a Pod that selects N4
instances triggers node creation if the cluster-level default class has a
priority rule for N4 instances.
The cluster-level default ComputeClass has a value of ScaleUpAnyway in
the spec.whenUnsatisfiable field. Even if the Pods select a machine
family that isn't in the ComputeClass priorities, GKE
creates new nodes with that machine family.
Pods that select a machine family that isn't in the cluster-level default
class priorities won't trigger node creation if the ComputeClass has a
value of DoNotScaleUp in the whenUnsatisfiable field.
You can configure node pool auto-creation for ComputeClasses that use the
nodepools field to reference existing node pools. GKE
processes the priorities in order and attempts to scale the existing node
pools up to place your Pods.
Consider the following example for a cluster that has both manually-created
node pools and node pool auto-creation:
apiVersion: cloud.google.com/v1
kind: ComputeClass
metadata:
name: my-class
spec:
priorities:
- nodepools: [manually-created-pool]
- machineFamily: n4
- machineFamily: c4
nodePoolAutoCreation:
enabled: true
In this example, GKE attempts to do the following:
Create new nodes in the manually-created-pool node pool.
Provision N4 nodes, either in existing N4 node pools or by creating a new
node pool.
If GKE can't create N4 nodes, it attempts to scale up
existing C4 node pools or create new C4 node pools.
Target specific node pools in a ComputeClass definition
The priorities.nodepools field lets you specify a list of manually created
node pools on which GKE attempts to schedule Pods in no specific
order in GKE Standard clusters that use cluster
autoscaling. This field only supports a list of node pools; you can't specify
additional machine properties like the machine series in the same priority rule.
When you deploy a workload that requests a ComputeClass that has named node
pools, GKE attempts to schedule the pending Pods in those node
pools. GKE might create new nodes in those node pools to place
the Pods.
The node pools that you specify in the priorities.nodepools field must be
associated with that ComputeClass by using node labels and node taints, as
described in the
Configure manually created node pools for ComputeClasses section.
The list of node pools that you specify in the nodepools field has no
priority. To configure a fallback order for named node pools, you must specify
multiple separate priorities.nodepools items. For example, consider the
following specification:
spec:
...
priorities:
- nodepools: [pool1, pool2]
- nodepools: [pool3]
In this example, GKE first attempts to place pending Pods that
request this ComputeClass on existing nodes in node pools that are labeled
with the ComputeClass. If existing nodes aren't available, GKE
tries to provision new nodes in pool1 or pool2 . If GKE can't
provision new nodes in these node pools, GKE attempts to
provision new Pods in pool3 .
Define scaling behavior when no priority rules apply
The ComputeClass custom resource lets you specify what GKE
should do if there are no nodes that can meet any of the priority rules. The
whenUnsatisfiable field in the specification supports the following values.
Best practice: If you omit this field, the default behavior depends
on the GKE version of your cluster. To avoid unexpected scaling
behavior after a version upgrade, explicitly specify this field in your
ComputeClass manifest.
ScaleUpAnyway : Create a new node that uses the cluster's default machine
configuration. In GKE versions earlier than 1.33, this is
the default behavior if you omit this field.
GKE takes one of the following actions:
In Autopilot clusters, GKE places the Pod on a
new or existing node, regardless of the node machine configuration.
In Standard clusters that don't use node pool auto-creation,
GKE tries to scale up any manually created node pool that
defines a label and taint matching a given ComputeClass.
In Standard clusters that use node pool auto-creation,
GKE might create a new node pool that uses the default E2
machine series to place the Pod.
DoNotScaleUp : Leave the Pod in the Pending status until a node that
meets the ComputeClass requirements is available. In GKE
version 1.33 and later, this is the default behavior if you omit this field.
Request a placement policy
Starting with GKE version 1.33.2-gke.1335000, in GKE
Autopilot clusters, you can use compact placement with a custom
placement policy or workload policy. For more information, see Comparison of compact placement policy and workload policy .
Both placement policy and workload policy place nodes physically close together
to reduce network latency. To use a specific policy, you provide its name in a
policyName field. The policy must be a Compute Engine resource policy that
already exists in the GKE project.
Consider the following example:
apiVersion: cloud.google.com/v1
kind: ComputeClass
metadata:
name: my-class
spec:
priorities:
- machineFamily: n4
placement:
policyName: my-placement-policy
nodePoolAutoCreation:
enabled: true
In this configuration, GKE applies the compact placement policy
for all workloads that use this ComputeClass and provisions their nodes
according to the existing resource policy named my-placement-policy .
Set autoscaling parameters for node consolidation
By default, GKE removes nodes that are underutilized by running
workloads, consolidating those workloads on other nodes that have capacity. For
all ComputeClasses, this is the default behavior because all clusters that use
ComputeClasses must use the cluster autoscaler or are Autopilot
clusters. During a node consolidation, GKE drains an
underutilized node, recreates the workloads on another node, and then deletes
the drained node.
The timing and criteria for node removal depends on the
autoscaling profile .
You can fine-tune the resource underutilization thresholds that trigger node
removal and workload consolidation by using the autoscalingPolicy section in
your custom ComputeClass definition. You can fine-tune the following
parameters:
consolidationDelayMinutes : The number of minutes after which
GKE removes underutilized nodes
consolidationThreshold : The utilization threshold for CPU and memory as a
percentage of the node's available resources. GKE only
considers nodes for removal if the resource utilization is less than this
threshold.
gpuConsolidationThreshold : The utilization threshold for GPU as a
percentage of the node's available resources. GKE only
considers nodes for removal if the resource utilization is less than this
threshold. Consider setting this to 100 or to 0 so that
GKE consolidates any nodes that don't have 100% utilization
of attached GPUs.
Consider the following example:
apiVersion: cloud.google.com/v1
kind: ComputeClass
metadata:
name: my-class
spec:
priorities:
- machineFamily: n4
- machineFamily: c4
autoscalingPolicy:
consolidationDelayMinutes: 5
consolidationThreshold: 70
In this configuration, GKE removes unused nodes after five
minutes, and nodes only become candidates for consolidation if both their CPU
and memory utilization is less than 70%.
Active migration
Active migration is an optional autoscaling feature in ComputeClasses that
automatically replaces existing nodes with new nodes. The following types of
active migration are supported:
optimizeRulePriority : GKE
replaces nodes that are lower in the ComputeClass priorities list with
nodes that are higher in the priority list. This option helps you to ensure
that your Pods eventually run on your most preferred node configuration,
even if GKE originally had to run those Pods on a less
preferred node configuration.
ensureAllDaemonSetPodsRunning :
GKE replaces nodes that have unschedulable DaemonSet Pods
with larger nodes that can run all of the required DaemonSet Pods. This
option helps you to ensure that all of your DaemonSets eventually run on
your nodes.
During an active migration, GKE does the following:
GKE creates a new node with a configuration that meets the
requirements of the active migration type.
GKE cordons the existing node so that new Pods don't run on
that node.
GKE drains the existing node, which evicts Pods from the
node. The following factors affect how quickly the node is drained:
PodDisruptionBudgets
terminationGracePeriodSeconds
Kubernetes controllers, such as Deployments or Jobs, create Pods to replace
evicted Pods. GKE schedules these new Pods on the new node.
After the existing node is drained, GKE deletes the node.
Active migration doesn't affect Pods and nodes in the following scenarios:
Active migration doesn't evict Pods that have the
cluster-autoscaler.kubernetes.io/safe-to-evict: "false" annotation.
Active migration doesn't evict Pods if the eviction would violate a
PodDisruptionBudget.
Active migration doesn't replace nodes that can't be removed. For
example, active migration doesn't replace a node if doing so violates the
--min-nodes node pool setting.
Before you enable active migration for a ComputeClass, consider the following
potential effects:
Active migration doesn't migrate data that's stored in persistent storage,
such as Compute Engine Persistent Disks. To minimize the risk of data
loss, don't enable active migration in ComputeClasses that stateful
workloads use.
In Standard clusters, if you use node pool auto-creation, active
migration might trigger the creation of new node pools if existing node
pools don't meet the criteria defined in your ComputeClass.
Workloads using persistent volumes with zonal resources such as Hyperdisk
might not work well with active migration. Zonal restrictions and the
machine type restrictions of some Hyperdisk products can reduce the
effectiveness of active migration. Also, some stateful workloads
might not tolerate the disruption caused by active migration.
If you update an existing ComputeClass to enable active migration,
GKE migrates existing Pods to new nodes when compute
resources become available.
Active migration to higher priority nodes
The optimizeRulePriority active migration type lets GKE
replace existing nodes that are lower in the ComputeClass priorities list with
nodes that are higher in the list. For example, the following ComputeClass
specification prioritizes N4 nodes over C4 nodes:
apiVersion : cloud.google.com/v1
kind : ComputeClass
metadata :
name : my-class
spec :
priorities :
- machineFamily : n4
- machineFamily : c4
activeMigration :
optimizeRulePriority : true
If N4 nodes were unavailable when you deployed a Pod with this ComputeClass,
GKE would have used C4 nodes as a fallback option. If N4 nodes
become available to provision later, like if your quota increases or if N4 VMs
become available in your location, the following steps happen:
GKE creates a new N4 node.
GKE cordons and drains the existing C4 node. Your Pods are
evicted, respecting any PodDisruptionBudgets and graceful termination
configurations.
Kubernetes controllers create Pods to replace your evicted Pods. These new
Pods run on the N4 node.
After the C4 node is drained, GKE deletes the node.
Active migration to run unschedulable DaemonSet Pods
The ensureAllDaemonSetPodsRunning active migration type lets
GKE automatically replace existing nodes that have unschedulable
DaemonSet Pods with larger nodes that can run those DaemonSet Pods.
For example, the following ComputeClass specification configures the N4 machine
family:
apiVersion : cloud.google.com/v1
kind : ComputeClass
metadata :
name : my-class
spec :
priorities :
- machineFamily : n4
activeMigration :
ensureAllDaemonSetPodsRunning : true
Consider a scenario in which you created a single-Pod Deployment that used this
ComputeClass and requested two vCPUs. To run this Pod, GKE
created an n4-standard-2 node. Later, you create a DaemonSet that also
requests two vCPUs. The DaemonSet Pod can't run on the n4-standard-2 node. In
this scenario, GKE does the following:
GKE creates a node that uses a larger N4 machine type, such
as n4-standard-4 , which can run your Pod and the DaemonSet Pod. The
pending DaemonSet Pod gets scheduled on this new node.
GKE cordons and drains the n4-standard-2 node.
When your Pod is evicted, the Deployment creates a replacement Pod.
GKE schedules this Pod on the n4-standard-4 node, alongside
the DaemonSet Pod.
After the n4-standard-2 node is drained, GKE deletes the
node.
Consume Compute Engine reservations
Available in GKE version 1.31.1-gke.2105000 and
later
If you use Compute Engine
capacity reservations to
get a higher level of assurance of hardware availability in specific
Google Cloud zones, you can configure each fallback priority in your
custom ComputeClass so that GKE consumes reservations when
creating new nodes.
To consume Compute Engine reservations by using a custom ComputeClass,
you can use the following methods:
Node pool auto-creation : GKE automatically creates new node
pools to consume your specified reservations. For more information, see
Node pool auto-creation and ComputeClasses .
Manually created node pools : On Standard mode clusters, you can
route workloads to manually created node pools by specifying the
spec.priorities.nodepools field in your ComputeClass.
Consume reservations in manually created node pools
To consume reservations in manually created node pools in Standard
clusters by using ComputeClasses, follow these steps:
Bind the reservations to the node pools by following the steps in
Consuming reserved instances in GKE Standard .
Create a ComputeClass that uses the nodepools priority rule to select your
manually created node pools.
For example, consider a scenario in which you have two node pools, each of which
you linked to a separate capacity reservation. You prefer that Pods use the
reserved capacity in the reservation-pool-1 node pool instead of the
reservation-pool-2 node pool. The ComputeClass that implements these preferences
is similar to the following example:
apiVersion : cloud.google.com/v1
kind : ComputeClass
metadata :
name : manual-pool-reservations
spec :
priorities :
- nodepools : [ 'reservation-pool-1' ]
- nodepools : [ 'reservation-pool-2' ]
In this example, GKE tries to place Pods in the
reservation-pool-1 first, because that priority rule appears first in the
priorities field.
Auto-create node pools to consume reservations
If you use node pool auto-creation, you can request that GKE uses
capacity reservations to create node pools for specific priority rules. To consume
reservations in auto-created node pools, you must meet the following requirements:
The ComputeClass must
enable node pool auto-creation .
Non-TPU reservations can be used only when either the machineType or
machineFamily is defined.
ComputeClasses that configure local SSDs must use the machineType priority
rule, not machineFamily . For details, see the
machineType rule type section.
ComputeClasses that specify reservations for a machineType that has attached
local SSDs must include a localSSDCount: field explicitly.
Consider the following example ComputeClass specification, which prioritizes a
specific shared reservation for use when provisioning a3-highgpu-1g instances.
If the prioritized instance types aren't available, GKE then
falls back to any matching reservations in the specification:
apiVersion : cloud.google.com/v1
kind : ComputeClass
metadata :
name : accelerator-reservations
spec :
nodePoolAutoCreation :
enabled : true
priorities :
- machineType : a3-highgpu-1g
storage :
localSSDCount : 2
gpu :
type : nvidia-h100-80gb
count : 1
reservations :
specific :
- name : a3-shared-reservation
project : reservation-project
affinity : Specific
- machineType : a3-highgpu-1g
storage :
localSSDCount : 2
gpu :
type : nvidia-h100-80gb
count : 1
reservations :
affinity : AnyBestEffort
whenUnsatisfiable : DoNotScaleUp
If you deploy a Pod that uses the accelerator-reservations ComputeClass,
GKE first attempts to use the a3-shared-reservation reservation
when creating new a3-highgpu-1g instances to run the Pod. If this specific
reservation doesn't have available capacity, GKE tries to scale
up a3-highgpu-1g instances by using any matching reservation. If no reservations
are accessible, GKE falls back to a3-highgpu-1g
Spot VMs. Finally, if no Spot VMs are available, the scale
operation fails.
In this example, both priority rules with reservation references explicitly
require the localSSDCount: field because the a3-highgpu-1g
machine shape includes local SSDs.
The following example shows a shared specific reservation, which falls back to
Spot VMs, and then finally to on-demand VMs:
apiVersion : cloud.google.com/v1
kind : ComputeClass
metadata :
name : shared-specific-reservations
spec :
nodePoolAutoCreation :
enabled : true
priorities :
- machineFamily : n4
reservations :
specific :
- name : n4-shared-reservation
project : reservation-project
affinity : Specific
- machineFamily : n4
spot : true
- machineFamily : n4
whenUnsatisfiable : DoNotScaleUp
You can consume the following types of reservations:
Specific single-project reservations : configure the following fields:
reservations.specific.name : the reservation name.
reservations.affinity : must be Specific .
Specific shared reservations : configure the following fields:
reservations.specific.name : the reservation name.
reservations.specific.project : the project ID of the project that owns
the reservation.
reservations.affinity : must be Specific .
Any matching reservations : configure the following fields:
reservations.affinity : must be AnyBestEffort .
Don't set a reservation name or project.
TPU reservations require Specific affinity. reservations.affinity: AnyBestEffort
is not supported.
If GKE can't find available capacity in a reservation, the
resulting behavior depends on the type of reservation being selected in the
ComputeClass priority rule, as follows:
Specific reservations : GKE tries the next priority rule
in the ComputeClass.
Any matching reservations : GKE tries to provision an
on-demand node that meets the requirements of that priority rule. If
GKE can't provision an on-demand node, GKE
tries the next priority rule in the ComputeClass.
If GKE can't meet the requirements of any of the priority rules
for the ComputeClass, the
behavior when no rules apply occurs.
Consume specific reservation blocks
Starting with GKE version 1.31.4-gke.1072000, you
can target a specific reservation block within a hardware-backed reservation. This
feature is available for the A3 Ultra and A4 machine types.
To consume a specific reservation block, configure your ComputeClass
resource as shown in this example:
apiVersion : cloud.google.com/v1
kind : ComputeClass
metadata :
name : specific-reservations
spec :
nodePoolAutoCreation :
enabled : true
priorities :
- machineFamily : a3
gpu :
type : nvidia-h200-141gb
count : 8
reservations :
specific :
- name : a3ultra-specific-reservation
reservationBlock :
name : RESERVATION_BLOCK_NAME
affinity : Specific
Replace RESERVATION_BLOCK_NAME with the target
reservation block name.
Starting with GKE version 1.33.1-gke.1788000, you
can target a specific reservation sub-block within a reservation block. This
feature is available for the A4X machine type.
To consume a specific reservation sub-block, configure your ComputeClass
resource as shown in the example in
Consume specific reservation sub-blocks .
When you use this feature, be aware of these considerations:
These features apply only to specific reservations in either a single
or a shared project.
Customize the node system configuration
You can customize certain parameters in the kubelet and the Linux kernel by
using the nodeSystemConfig field in your ComputeClass specification. You can
specify this field in any priority rule that defines a Compute Engine
machine series or machine type. You can also set default global values for
any node system configuration fields that are omitted in priority rules by
adding the nodeSystemConfig field to the
priorityDefaults field in your ComputeClass.
This feature is available in GKE version
1.32.1-gke.1729000 and later.
For more information, see the following pages:
ComputeClass CustomResourceDefinition
Customizing node system configuration
Specify node labels and taints
In your ComputeClass specification, the nodeLabels and taints fields let you
define configurations that both match existing node pools and govern the
creation of new ones. These configurations can be applied globally within the
nodePoolConfig field for the entire ComputeClass or scoped to a specific
priority using the priority field; however, you must ensure that labels and
taints defined at the priority level don't overlap with those that were set
globally.
These features are available in the following:
Priority node labels in GKE version
1.33.2-gke.1111000 and later.
Priority taints in GKE version
1.33.4-gke.1350000 and later.
Global node labels and taints in GKE version
1.34.1-gke.3084002 and later.
For more information, see ComputeClass CustomResourceDefinition .
Default ComputeClasses for clusters and namespaces
You can configure GKE to apply a ComputeClass by default
to Pods that don't select a specific ComputeClass. You can define a default
ComputeClass for specific namespaces or for an entire cluster. For more
information about how to configure your clusters or namespaces with a default
class, see
Apply ComputeClasses to Pods by default .
Group node pools
Starting with GKE version 1.32.2-gke.1359000,
you can group multiple node pools into a single logical unit called a
collection by using the nodePoolGroup field in your ComputeClass
specification. This grouping lets you apply shared configurations across many
node pools.
TPU multi-host collection
Requires GKE version 1.31.2-gke.1518000 or later. Only available in TPU Trillium (v6e)
You can group your TPU multi-host deployment to set a Service Level Objective
(SLO) across all node pools within the collection. To group node pools, specify
the name of the group in the nodePoolGroup field. All node pools provisioned
using this ComputeClass belong to the same group.
apiVersion : cloud.google.com/v1
kind : ComputeClass
metadata :
name : tpu-multi-host-collection
spec :
nodePoolGroup :
name : my-tpu-collection
...
For more information, see the following:
Plan TPUs in GKE
Multi-host TPU slice node pools
Schedule TPU collections for inference workloads
Node pool configuration
The nodePoolConfig field in your ComputeClass specification lets you apply
configuration that is reflected in all nodes within the node pools created
using that class.
Specify image type
You can specify the base operating system for the nodes in the node pool by
using the imageType field. This field lets you choose an image type for
the node pools that will run on the nodes. If you omit this field, the default
value is cos_containerd . The following example shows how to specify the
imageType in your ComputeClass:
apiVersion : cloud.google.com/v1
kind : ComputeClass
metadata :
name : my-node-pool-config
spec :
nodePoolConfig :
imageType : cos_containerd
For more information, see the
Node images .
Service account
The serviceAccount field specifies the Google Cloud service account used by the
nodes within node pools that are managed by the ComputeClass. The following
example shows how to specify the serviceAccount in your ComputeClass:
spec :
nodePoolConfig :
serviceAccount : my-service-account@my-project. iam.gserviceaccount.com
For more information, see About service accounts in GKE .
Define workload type for TPU SLO
Starting with GKE version 1.32.2-gke.1359000, you
can define the Service Level Objective (SLO) for your TPU workloads by using
the workloadType field within nodePoolConfig . The value in this field tells
GKE the intended use for the TPU resources. The workloadType
field supports the following values:
HIGH_AVAILABILITY : use this value for availability-focused workloads, such
as inference serving, to limit and streamline interruptions.
HIGH_THROUGHPUT : use this value for batch or training jobs that require all
underlying infrastructure to run most of the time to make progress.
This value can be used only when nodePoolGroup is also specified.
The following example defines a ComputeClass for a multi-host TPU collection
optimized for high-availability inference workloads.
apiVersion : cloud.google.com/v1
kind : ComputeClass
metadata :
name : multi-host-inference
spec :
nodePoolGroup :
name : my-inference-collection
nodePoolConfig :
workloadType : HIGH_AVAILABILITY
nodePoolAutoCreation :
enabled : true
priorities :
- tpu :
type : tpu-v6e-slice
topology : 2x4
For more information, see the following pages:
About TPUs in GKE
Plan TPUs in GKE
Request ComputeClasses in workloads
To use a custom ComputeClass, your Pod must explicitly request that ComputeClass
by using a nodeSelector in the Pod specification. You can optionally set a
ComputeClass as the default for a specific Kubernetes namespace. Pods in that
namespace use that ComputeClass unless the Pods request a different
ComputeClass.
For example, the following manifest requests the cost-optimized ComputeClass:
apiVersion : apps/v1
kind : Deployment
metadata :
name : custom-workload
spec :
replicas : 2
selector :
matchLabels :
app : custom-workload
template :
metadata :
labels :
app : custom-workload
spec :
nodeSelector :
cloud.google.com/compute-class : cost-optimized
containers :
- name : test
image : registry.k8s.io/pause
resources :
requests :
cpu : 1.5
memory : "4Gi"
Node selectors for system node labels
GKE adds system labels to nodes to identify nodes by criteria
like the machine type, attached hardware accelerators, or the boot disk type.
These system labels have one of the following prefixes in the label key:
k8s.io
cloud.google.com
gke.io
node.kubernetes.io/instance-type
In GKE version 1.32.3-gke.1499000 and later, you can deploy
workloads that use a node selector to select system labels and a ComputeClass at
the same time. If you select system labels in Pods that select ComputeClasses,
verify that those Pods schedule as expected. A conflict between the
configuration of a ComputeClass and the node selectors in a Pod might result in
issues like the following:
GKE can't create nodes that use the highest-priority
configuration for the ComputeClass.
The Pod remains in the Pending status.
GKE also rejects any Pods that select system labels that have a
corresponding field in the ComputeClass specification. When you use
ComputeClasses, update your workloads to remove the following labels from node
selectors and configure the corresponding field in the ComputeClasses that you
create:
Node label
ComputeClass field
cloud.google.com/machine-family
priorities.machineFamily
cloud.google.com/machine-type
priorities.machineType
cloud.google.com/gke-spot
priorities.spot
cloud.google.com/gke-accelerator
priorities.gpu.type
cloud.google.com/gke-gpu-driver-version
priorities.gpu.driverVersion
cloud.google.com/reservation-name
priorities.reservations.specific.name
cloud.google.com/reservation-project
priorities.reservations.specific.project
cloud.google.com/reservation-affinity
priorities.reservations.affinity
cloud.google.com/gke-ephemeral-storage-local-ssd
priorities.storage.localSSDCount
cloud.google.com/gke-boot-disk
priorities.storage.bootDiskType
cloud.google.com/gke-boot-disk-size
priorities.storage.bootDiskSize
cloud.google.com/gke-node-pool-group-name
nodePoolGroup.name
cloud.google.com/gke-workload-type
nodePoolConfig.workloadType
node.kubernetes.io/instance-type
priorities.machineType
Limitations
The name of your ComputeClass can't begin with gke or autopilot .
What's next
Learn how to control autoscaled node attributes with custom ComputeClasses .
Learn more about Balanced and Scale-Out ComputeClasses in Autopilot clusters .
Learn how to configure node pool auto-creation .
Learn more about about GKE cluster autoscaling .
Learn how to choose compute classes for Autopilot Pods .
Troubleshoot custom ComputeClass issues .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
