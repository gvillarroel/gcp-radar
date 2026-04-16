---
title: "About GKE cluster autoscaling \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler
  title: "About GKE cluster autoscaling \_|\_ Google Kubernetes Engine (GKE) \_|\_\
    \ Google Cloud Documentation"
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
About GKE cluster autoscaling
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
Standard
This page explains how Google Kubernetes Engine (GKE) automatically resizes your
Standard cluster's node pools based on the demands of your workloads.
When demand is high, the cluster autoscaler adds nodes to the node pool. To
learn how to configure the cluster autoscaler, see
Autoscaling a cluster .
This page is for Admins, Architects and Operators who
plan capacity and infrastructure needs, and optimize systems architecture and
resources to achieve the lowest total cost of ownership for their company or
business unit. To learn more about common roles and example tasks that we
reference in Google Cloud content, see
Common GKE user roles and tasks .
With Autopilot clusters, you don't need to worry about
provisioning nodes or managing node pools because node pools are automatically
provisioned through node auto-provisioning ,
and are automatically scaled to meet the requirements of your workloads.
Before reading this page, ensure that you're familiar with basic Kubernetes concepts ,
and how resource requests and limits
work.
Best practice :
Plan and design your cluster configuration with your organization's Admins and architects, Developers, or other team who is responsible for the implementation and maintenance of your application.
Why use cluster autoscaler
GKE's cluster autoscaler automatically resizes the number
of nodes in a given node pool, based on the demands of your workloads. When
demand is low, the cluster autoscaler scales back down to a minimum size that
you designate. This can increase the availability of your workloads when you
need it, while controlling costs. You don't need to manually add or remove nodes
or over-provision your node pools. Instead, you specify a minimum and maximum
size for the node pool, and the rest is automatic.
If resources are deleted or moved when autoscaling your cluster, your workloads
might experience transient disruption. For example, if your workload consists of
a controller with a single replica, that replica's Pod might be rescheduled onto
a different node if its current node is deleted. Before enabling cluster
autoscaler, design your workloads to tolerate potential disruption or ensure
that critical Pods are not interrupted.
Best practice :
To increase your workload's tolerance to interruption, deploy
your workload using a controller with multiple replicas, such as a Deployment.
You can increase the cluster autoscaler performance with
Image streaming , which
remotely streams required image data from eligible container images while
simultaneously caching the image locally to allow workloads on new nodes to
start faster.
How cluster autoscaler works
Cluster autoscaler works per node pool. When you configure a node
pool with cluster autoscaler, you specify a minimum and maximum size for the
node pool.
Cluster autoscaler increases or decreases the size of the node pool automatically
by adding or removing virtual machine (VM) instances in the underlying Compute Engine Managed Instance Group (MIG)
for the node pool. Cluster autoscaler makes these scaling decisions based on the
resource requests (rather than actual resource utilization) of Pods running on
that node pool's nodes. It periodically checks the status of Pods and
nodes, and takes action:
If Pods fail to be scheduled on any of the current nodes, the cluster autoscaler adds nodes, up to the maximum size of the node
pool. For more information about when cluster autoscaler change the size of a
cluster, see When does Cluster Autoscaler change the size of a cluster?
If GKE decides to add new nodes into the node pool, cluster
autoscaler adds as many nodes as needed, up to per-nodepool or per-cluster
limits.
Cluster autoscaler doesn't wait for one node to come up before creating the
next one. Once GKE decides how many nodes to create, node creation
happens in parallel. The objective is to minimize the time needed for
unschedulable Pods to become Active .
If some nodes aren't created due to quota
exhaustion, Cluster autoscaler waits until resources can be
successfully scheduled.
If nodes are underutilized, and all Pods could be scheduled even with fewer
nodes in the node pool, cluster autoscaler removes nodes, down to the
minimum size of the node pool.
If there are Pods on a node that cannot move to
other nodes in the cluster, cluster autoscaler does not attempt to scale down
that node.
If Pods can be moved to other nodes, but the node cannot be drained
gracefully after a timeout period,
the node is forcibly terminated. This timeout period is one hour for
GKE versions 1.32.7-gke.1079000 or later, and 10 minutes for
earlier GKE versions.
The maximum honored grace period is not configurable for
GKE clusters. For more information about how scale down works,
see How does scale-down work? in the cluster autoscaler FAQ in the open source documentation.
The frequency at which cluster autoscaler inspects a cluster for unschedulable
Pods largely depends on the cluster's size. In small clusters, the inspection
might happen every few seconds. It is not possible to define an exact timeframe required
for this inspection.
If your nodes are experiencing shortages because your
Pods have requested or defaulted to insufficient resources, the cluster
autoscaler does not correct the situation. You can help ensure cluster
autoscaler works as accurately as possible by making explicit resource requests
for all of your workloads.
Don't enable Compute Engine autoscaling for managed instance
groups for your cluster nodes. GKE's cluster autoscaler is
separate from Compute Engine autoscaling. This can lead to node pools failing
to scale up or scale down because the Compute Engine autoscaler will be in conflict
with GKE's cluster autoscaler.
Operating criteria
When resizing a node pool, the cluster autoscaler
makes the following assumptions:
All replicated Pods can be restarted on some other node, possibly causing a
brief disruption.
Users or administrators are not manually managing nodes.
Cluster autoscaler can override any
manual node management operations you perform.
All nodes in a single node pool have the same set of labels.
Cluster autoscaler considers the relative cost of the instance types in the
various pools, and attempts to expand the least expensive possible node pool.
However, the following conditions apply to this behavior of cluster
autoscaler:
The cluster autoscaler takes into account the reduced cost of node pools
that contain Spot VMs, which are preemptible. However, cluster
autoscaler also considers the availability of resources in each zone, and
might choose the more expensive, but available, resource.
When multiple node pools utilize Spot VMs, the cluster autoscaler
does not automatically select the lowest-cost option. To optimize
cost-effective Spot VMs usage and prevent this scenario, we
recommend that you use custom compute
classes .
Cluster autoscaler considers the init container requests before scheduling
Pods. Init container requests can use any unallocated resources available on
the nodes, which might prevent Pods from being scheduled. Cluster autoscaler follows
the same request calculation rules that Kubernetes uses. To learn more, see
the Kubernetes documentation for using init containers .
Labels that are manually added after initial cluster or node pool creation are not
tracked. Nodes that are created by the cluster autoscaler are assigned labels specified
with --node-labels at the time of node pool creation.
In GKE version 1.21 or earlier, cluster autoscaler considers the taint information
of the existing nodes from a node pool to represent the whole node pool.
Starting in GKE version 1.22, cluster autoscaler combines
information from existing nodes in the cluster and the node pool. Cluster
autoscaler also detects the manual changes you make to the node and node pool.
Best practice :
Don't enable the cluster autoscaler if your applications are not disruption-tolerant.
Balancing across zones
If your node pool contains multiple managed instance groups with the same
instance type, the cluster autoscaler attempts to keep these managed instance group
sizes balanced when scaling up . This helps prevent an uneven distribution of
nodes among managed instance groups in multiple zones of a node pool.
GKE does not consider the autoscaling policy when scaling down.
Cluster autoscaler only balances across zones during a scale-up event.
Cluster autoscaler scales down underutilized nodes regardless of the relative
sizes of underlying managed instance groups in a node pool, which can cause the
nodes to be distributed unevenly across zones.
Location policy
Starting in GKE version 1.24.1-gke.800, you can change the
location policy of the cluster autoscaler. You can control
the cluster autoscaler distribution policy by specifying the location_policy
flag with any of the following values:
BALANCED : this policy instructs the cluster autoscaler to distribute node pool resources across selected zones as equally as possible, in the best effort manner, while considering Pod requirements (such as affinity) and the availability of resources. This policy is the default location policy for node pools using reservations or on-demand nodes, but you can also use it for Spot VMs. BALANCED is not supported for flex-start provisioning mode node pools.
ANY : this policy instructs the cluster autoscaler to search for requested capacity across all specified zones. The cluster autoscaler prioritizes unused reservations and zones with enough capacity, which can lead to concentration of node pool resources. It is the default location policy for flex-start provisioning mode and node pools that use Spot VMs, but you can also use it for node pools using reservations or on-demand nodes. For this policy to work, autoscaling has to be enabled and the initial number of nodes has to be set to 0, so that the autoscaler is responsible for provisioning all nodes.
Best practice :
Use the BALANCED policy if your workloads use only easily obtainable accelerator resources and benefit from being distributed across zones (for example, for better fault tolerance). Use the ANY policy to prioritize utilization of unused reservations and higher obtainability of scarce compute resources (such as accelerators).
Reservations
Starting in GKE version 1.27, the cluster autoscaler always considers
reservations when making the
scale-up decisions. The node pools with matching unused reservations are
prioritized when choosing the node pool to scale up, even when the node pool
is not the most efficient one. Additionally, unused reservations are always
prioritized when balancing multi-zonal scale-ups.
However, the cluster autoscaler checks for reservations only in its own project. As
a result, if a less expensive node option is available within the cluster's own
project, the autoscaler might select that option instead of the shared reservation.
If you need to share reservations across projects, consider using
custom compute classes ,
which let you configure the priority that the cluster autoscaler uses to scale
nodes, including shared reservations.
Default values
For Spot VMs node pools,
the default cluster autoscaler distribution policy is ANY . In this policy,
Spot VMs have a lower risk of being preempted.
For non-preemptible node pools ,
the default cluster autoscaler distribution policy is BALANCED .
Minimum and maximum node pool size
When creating a new node pool, you can specify the minimum and maximum size for
each node pool in your cluster, and the cluster autoscaler makes rescaling
decisions within these scaling constraints. To update the minimum size, manually
resize the cluster to a size within the new constraints after specifying the new
minimum value. The cluster autoscaler then makes rescaling decisions based on
the new constraints.
Current node pool size
Cluster autoscaler action
Scaling constraints
Lower than the minimum you specified
Cluster autoscaler scales up to provision pending pods. Scaling down is disabled.
The node pool does not scale down below the value you specified.
Within the minimum and maximum size you specified
Cluster autoscaler scales up or down according to demand.
The node pool stays within the size limits you specified.
Greater than the maximum you specified
Cluster autoscaler scales down only the nodes that can be safely removed. Scaling up is disabled.
The node pool does not scale above the value you specified.
On Standard clusters, the cluster autoscaler never automatically
scales down a cluster to zero nodes. One or more nodes must always be available
in the cluster to run system Pods. Additionally, if the current number of nodes
is zero due to manual removal of nodes, cluster autoscaler and node
auto-provisioning can scale up from zero node clusters.
To learn more about autoscaler decisions, see cluster autoscaler limitations .
Autoscaling limits
You can set the minimum and maximum number of nodes for the cluster autoscaler
to use when scaling a node pool. Use the --min-nodes and --max-nodes flags
to set the minimum and maximum number of nodes per zone
Starting in GKE version 1.24, you can use the --total-min-nodes
and --total-max-nodes flags for new clusters. These flags set the minimum and
maximum number of the total number of nodes in the node pool across all zones.
Min and max nodes example
The following command creates an autoscaling
multi-zonal cluster
with six nodes across three zones initially, with a minimum of one node per zone
and a maximum of four nodes per zone:
gcloud container clusters create example-cluster \
--num-nodes=2 \
--location=us-central1-a \
--node-locations=us-central1-a,us-central1-b,us-central1-f \
--enable-autoscaling --min-nodes=1 --max-nodes=4
In this example, the total size of the cluster can be between three and twelve
nodes, spread across the three zones. If one of the zones fails, the total size
of the cluster can be between two and eight nodes.
Total nodes example
The following command, available in GKE version 1.24 or later,
creates an autoscaling
multi-zonal cluster
with six nodes across three zones initially, with a minimum of three nodes and
a maximum of twelve nodes in the node pool across all zones:
gcloud container clusters create example-cluster \
--num-nodes=2 \
--location=us-central1-a \
--node-locations=us-central1-a,us-central1-b,us-central1-f \
--enable-autoscaling --total-min-nodes=3 --total-max-nodes=12
In this example, the total size of the cluster can be between three and twelve
nodes, regardless of spreading between zones.
Autoscaling profiles
The decision of when to remove a node is a trade-off between optimizing for
utilization or the availability of resources. Removing underutilized nodes
improves cluster utilization, but new workloads might have to wait for resources
to be provisioned again before they can run.
You can specify which autoscaling profile to use when making such decisions.
The available profiles are:
balanced : The default profile that prioritizes keeping more resources
readily available for incoming pods and thus reducing the time needed for
having them active for Standard clusters. The balanced profile
isn't available for Autopilot clusters.
optimize-utilization : Prioritize optimizing utilization over keeping spare
resources in the cluster. When you enable this profile, the cluster autoscaler scales down
the cluster more aggressively. GKE can remove more nodes, and remove nodes
faster. GKE prefers to schedule Pods in nodes that already have
high allocation of CPU, memory, or GPUs. However, other factors
influence scheduling ,
such as spread of Pods belonging to the same Deployment, StatefulSet or
Service, across nodes.
The optimize-utilization autoscaling profile helps the
cluster autoscaler to identify and remove underutilized nodes. To achieve this
optimization, GKE sets the scheduler name in the Pod spec to
gke.io/optimize-utilization-scheduler . Pods that specify a custom scheduler
are not affected.
The following command enables optimize-utilization autoscaling profile in an
existing cluster:
gcloud container clusters update CLUSTER_NAME \
--autoscaling-profile optimize-utilization
Considering Pod scheduling and disruption
When scaling down, the cluster autoscaler respects scheduling and eviction rules set
on Pods. These restrictions can prevent a node from being deleted by the
autoscaler. A node's deletion could be prevented if it contains a Pod with any
of these conditions:
The Pod's affinity or anti-affinity rules prevent rescheduling.
The Pod is not managed by a Controller such as a Deployment, StatefulSet, Job or ReplicaSet.
The Pod has local storage and the GKE control plane version is lower than 1.22. In GKE clusters with control plane version 1.22 or later, Pods with local storage no longer block scaling down.
The Pod has the
"cluster-autoscaler.kubernetes.io/safe-to-evict": "false" annotation.
The node's deletion would exceed the configured PodDisruptionBudget .
For more information about cluster autoscaler and preventing disruptions, see
the following questions in the
Cluster autoscaler FAQ :
How does scale-down work?
Does Cluster autoscaler work with PodDisruptionBudget in scale-down?
What types of Pods can prevent Cluster autoscaler from removing a node?
How to tune cluster autoscaler in GKE?
Autoscaling TPUs in GKE
GKE supports Tensor Processing Units (TPUs) to accelerate machine learning workloads. Both single-host TPU slice node pool and
multi-host TPU slice node pool support autoscaling and auto-provisioning.
With the
--enable-autoprovisioning flag on a GKE cluster,
GKE creates or deletes single-host or multi-host TPU slice node pools with a TPU
version and topology that meets the requirements of pending workloads.
When you use --enable-autoscaling , GKE scales the node pool based on its type, as follows:
Single-host TPU slice node pool: GKE adds or removes TPU nodes in the
existing node pool. The node pool may contain any number of TPU nodes between
zero and the maximum size of the node pool as determined by the
--max-nodes and
the
--total-max-nodes
flags. When the node pool scales, all the TPU nodes in the node pool have the
same machine type and topology. To learn more how to create a single-host TPU
slice node pool, see Create a node
pool .
Multi-host TPU slice node pool: GKE atomically scales up the
node pool from zero to the number of nodes required to satisfy the TPU
topology. For example, with a TPU node pool with a machine type
ct5lp-hightpu-4t and a topology of 16x16 , the node pool contains 64 nodes.
The GKE autoscaler helps ensure that this node pool has exactly 0
or 64 nodes. When scaling back down, GKE evicts all scheduled
pods, and drains the entire node pool to zero. To learn more how to create a
multi-host TPU slice node pool, see Create a node
pool .
Spot VMs and cluster autoscaler
Because cluster autoscaler prefers expanding the least expensive node pools,
when your workloads and resource availability allow it, cluster autoscaler adds
Spot VMs when scaling up.
However, even though cluster autoscaler prefers adding Spot VMs,
this preference doesn't guarantee that the majority of your Pods will run on
these types of VMs. Spot VMs can be preempted. Because of this
preemption, Pods on Spot VMs are more likely to be evicted.
When they're evicted, they only have
15 seconds to terminate .
For example, imagine a scenario where you have 10 Pods and a mixture of
on-demand and Spot VMs:
You begin with 10 Pods running on on-demand VMs because the
Spot VMs weren't available.
You don't need all 10 Pods, so cluster autoscaler removes two Pods and
shuts down the extra on-demand VMs.
When you need 10 Pods again, cluster autoscaler adds
Spot VMs (because they're cheaper) and schedules two Pods on
them. The other eight Pods remain on the on-demand VMs.
If cluster autoscaler needs to scale down again, Spot VMs are
likely to be preempted first, leaving the majority of your Pods running on
on-demand VMs.
To prioritize Spot VMs, and avoid the preceding scenario, we
recommend that you use
custom compute classes .
Custom compute classes let you create
priority rules
that favor Spot VMs during scale-up by giving them higher
priority than on-demand nodes. To further maximize the likelihood of your Pods
running on nodes backed by Spot VMs, configure
active migration .
The following example shows you one way to use custom compute classes to
prioritize Spot VMs. To learn more about ComputeClass parameters, see ComputeClass CRD documentation :
apiVersion : cloud.google.com/v1
kind : ComputeClass
metadata :
name : prefer-l4-spot
spec :
# Defines a prioritized list of machine types and configurations for node provisioning.
priorities :
- machineType : g2-standard-24
# Specifically requests Spot VMs for this configuration. GKE will try to provision these VMs first.
spot : true
gpu :
type : nvidia-l4
count : 2
# If GKE can't satisfy the preceding rule, request on-demand nodes with the same configuration
- machineType : g2-standard-24
spot : false
gpu :
type : nvidia-l4
count : 2
nodePoolAutoCreation :
enabled : true
# Configures active migration behavior for workloads using this ComputeClass.
activeMigration :
optimizeRulePriority : true
# Enables Cluster Autoscaler to attempt to migrate workloads to Spot VMs
# if Spot capacity becomes available and the workload is currently
# running on an on-demand VM (based on the priority rules in this example).
In the preceding example, the priority rule declares a preference for creating
nodes with the g2-standard-24 machine type and Spot VMs. If
Spot VMs aren't available, then GKE uses on-demand
VMs as a fallback option. This compute class also enables activeMigration ,
enabling cluster autoscaler to migrate workloads to Spot VMs when
the capacity becomes available.
If you can't use custom compute classes, add a
node affinity, taint, or toleration .
For example, the following node affinity rule declares a preference for scheduling
Pods on nodes that are backed by Spot VMs (GKE
automatically adds the cloud.google.com/gke-spot=true label to these types
of nodes):
affinity :
nodeAffinity :
preferredDuringSchedulingIgnoredDuringExecution :
- weight : 1
preference :
matchExpressions :
# set to "true". GKE automatically applies this label to Spot VMs.
- key : cloud.google.com/gke-spot
operator : Equal
values :
- true
To learn more about using node affinities, taints, and tolerations to schedule
Spot VMs, see the
Running a GKE application on spot nodes with on-demand nodes as fallback
blog.
ProvisioningRequest CRD
A ProvisioningRequest is a namespaced custom resource that lets users request capacity for a group of Pods from the cluster autoscaler. This is particularly useful for applications with interconnected pods that must be scheduled together as a single unit.
Supported Provisioning Classes
There are three supported ProvisioningClasses:
queued-provisioning.gke.io : this GKE-specific class integrates with the Dynamic Workload Scheduler, lets you queue requests and have them fulfilled when resources become available. This is ideal for batch jobs or delay-tolerant workloads. See Deploy GPUs for batch and AI workloads with Dynamic Workload Scheduler to learn how to use queued provisioning in GKE.
Supported from GKE version 1.28.3-gke.1098000 in Standard clusters and from GKE version 1.30.3-gke.1451000 in Autopilot clusters.
check-capacity.autoscaling.x-k8s.io : this open-source class verifies the availability of resources before it attempts to schedule Pods.
Supported from GKE version 1.30.2-gke.1468000.
best-effort-atomic.autoscaling.x-k8s.io : this open-source class attempts to provision resources all Pods in the request together. If it is impossible to provision enough resources for all pods, no resources will be provisioned and the entire request will fail.
Supported from GKE version 1.31.27.
To learn more about the CheckCapacity and BestEffortAtomicScaleUp classes, refer to the open-source documentation .
Limitations when using ProvisioningRequest
GKE cluster autoscaler supports only 1 PodTemplate per ProvisioningRequest.
GKE cluster autoscaler can scale up only 1 node pool at a time. If your ProvisioningRequest requires resources from multiple node pools, you must create separate ProvisioningRequests for each node pool.
Best practices when using ProvisioningRequest
Use total-max-nodes : instead of limiting the maximum number of nodes ( --max nodes ), use --total-max-nodes to constrain the total resources that are consumed by your application.
Use location-policy=ANY : this setting allows your Pods to be scheduled in any available location, which can expedite provisioning and optimize resource utilization.
(Optional) Integrate with Kueue: Kueue can automate the creation of ProvisioningRequests, streamlining your workflow. For more information, see the Kueue documentation .
Backoff periods
A scale-up operation can fail due to node creation errors such as insufficient
quota or IP address exhaustion. When these errors occur, the underlying Managed
Instance Group (MIG) retries the operation after an initial five-minute backoff.
If errors continue, this backoff period increases exponentially to a maximum of
30 minutes. During this time, the cluster autoscaler can still scale up other
node pools in the cluster that aren't experiencing errors.
Additional information
You can find more information about cluster autoscaler in the
Autoscaling FAQ in the open-source Kubernetes project .
Limitations
Cluster autoscaler has the following limitations:
Local PersistentVolumes are not supported by the cluster autoscaler.
In GKE control plane version earlier than 1.24.5-gke.600, when Pods request ephemeral storage, the cluster autoscaler does not support scaling up a node pool with zero nodes that
uses Local SSDs as ephemeral storage .
Cluster size limitations: up to 15,000 nodes.
Account for other cluster limits
and our best practices
when running clusters of this size.
When scaling down, the cluster autoscaler honors a graceful termination period
of one hour for rescheduling the node's Pods onto a different node before
forcibly terminating the node.
Occasionally, the cluster autoscaler cannot scale down completely and an extra
node exists after scaling down. This can occur when required system Pods are
scheduled onto different nodes, because there is no trigger for any of those
Pods to be moved to a different node. See
I have a couple of nodes with low utilization, but they are not scaled down. Why? .
To work around this limitation, you can configure a
Pod disruption budget .
Custom scheduling with altered Filters
is not supported.
Cluster Autoscaler considers default kube-scheduler behavior when deciding to provision new nodes for pending Pods. Using custom schedulers is not supported and might result in unexpected scaling behavior.
Nodes won't scale up if Pods have a PriorityClass
value below -10 . Learn more in How does Cluster Autoscaler work with Pod Priority and Preemption?
Cluster autoscaler might not have enough unallocated IP address space to use
to add new nodes or Pods, resulting in scale-up failures, which are indicated by
eventResult events
with the reason scale.up.error.ip.space.exhausted . You can add more IP
addresses for nodes by expanding the primary subnet ,
or add new IP addresses for Pods using discontiguous multi-Pod CIDR .
For more information, see Not enough free IP space for Pods .
GKE cluster autoscaler is different from Cluster autoscaler of
the open source Kubernetes project. The parameters of the GKE
Cluster autoscaler depend on the cluster configuration and are subject to
change. If you need more control over the autoscaling behavior, disable
GKE Cluster autoscaler and run Cluster autoscaler of
the open source Kubernetes. However, the open source Kubernetes has no Google Cloud support.
When you delete a GKE node pool that has autoscaling enabled, the nodes get the NoSchedule flag set, and any Pods on those nodes are immediately evicted. To mitigate the sudden decrease in available resources, the autoscaler of the node pool might provision new nodes within the same node pool. These newly created nodes become available for scheduling, and evicted Pods are scheduled back onto them. Eventually, the entire node pool—including the newly provisioned nodes and their Pods—is deleted, which can lead to potential service interruptions.
As a workaround, to prevent the autoscaler from provisioning new nodes during deletion, disable autoscaling on the node pool before you initiate deletion.
Cluster Autoscaler needs to predict the amount of available resources on new nodes in order to make
scaling decisions. DaemonSet Pods are included, which decreases the available resources.
The predictions are not 100% accurate, and the amount of available resources can change between
GKE versions. Because of this, we don't recommend sizing and constraining workloads to fit a particular instance type. Consider using
custom compute classes instead.
If a workload needs to target a particular instance type, make sure to size it so that it leaves a buffer of allocatable
resources on the nodes. In that case, you also need to ensure that all relevant DaemonSet Pods can fit on the nodes together
with your workload Pods.
The cluster autoscaler does not support strict Pod topology spread constraints
when the whenUnsatisfiable field is set to the DoNotSchedule value. You can
soften the spread requirements by setting the whenUnsatisfiable field to the
ScheduleAnyway value.
Known issues
In GKE control plane version prior to 1.22,
GKE cluster autoscaler stops scaling up all node pools on
empty (zero node) clusters. This behavior doesn't occur in GKE
version 1.22 and later.
Troubleshooting
For troubleshooting advice, see the following pages:
Troubleshoot cluster autoscaler not scaling down .
Troubleshoot cluster autoscaler not scaling up .
What's next
Learn how to autoscale your nodes .
Learn how to auto-upgrade your nodes .
Learn how to auto-repair your nodes .
Learn how to reduce image pull times on new nodes .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
