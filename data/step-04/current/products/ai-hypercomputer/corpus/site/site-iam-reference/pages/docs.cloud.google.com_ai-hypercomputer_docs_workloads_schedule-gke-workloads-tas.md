---
title: "Schedule GKE workloads with Topology Aware Scheduling (TAS) \_|\_ AI Hypercomputer\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/workloads/schedule-gke-workloads-tas
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/workloads/schedule-gke-workloads-tas
  title: "Schedule GKE workloads with Topology Aware Scheduling (TAS) \_|\_ AI Hypercomputer\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Schedule GKE workloads with Topology Aware Scheduling (TAS) | AI Hypercomputer | Google Cloud Documentation
Skip to main content
Technology areas
close
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Cross-product tools
close
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
More
/
Console
English
Deutsch
Español – América Latina
Français
Indonesia
Italiano
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
AI Hypercomputer
Start free
Overview
Guides
Resources
More
Technology areas
More
Overview
Guides
Resources
Cross-product tools
More
Console
Discover
Overview
Performance-optimized infrastructure
GPU machines
Networking services
GPU networking overview
Network services for deployments
Networking best practices
Storage services
Open software
OS and Docker images
Choose a consumption option
Cluster management
Overview
Configurations
Terminology
Get started
Cluster creation overview
Recommended configurations
Obtain capacity and quota
Overview
Reserve capacity
View reserved capacity
Quickstart: Create a Slurm cluster with A4 machine type
Deploy infrastructure
Deployment options overview
Compact placement policy and workload policy overview
Deploy AI-optimized VMs and clusters
Create GKE clusters
Create an AI-optimized GKE cluster with default configuration
Create a custom AI-optimized GKE cluster which uses A4X Max
Create a custom AI-optimized GKE cluster which uses A4X
Create a custom AI-optimized GKE cluster which uses A4 or A3 Ultra
Create Slurm clusters
Create an instance
Create A4X Max
Create A4X
Create A4 or A3 Ultra
Create A3 High or A3 Mega
Create instances in bulk
Create A4X Max
Create A4X
Create A4 or A3 Ultra
Create A3 High or A3 Mega
Create a managed instance group (MIG)
Create A4X Max
Create A4X
Create A4 or A3 Ultra
Create A3 High or A3 Mega
Run workloads
Run workloads with Pathways on Cloud
Introduction to Pathways on Cloud
Create a GKE cluster with Pathways
Run a batch workload with Pathways
Run an interactive workload with Pathways
Perform multihost inference using Pathways
Resilient training with Pathways
Port JAX workloads to Pathways
Troubleshoot Pathways on Cloud
Schedule GKE workloads
Schedule workloads with Topology Aware Scheduling (TAS)
Enable node health prediction
AI workload tutorials
Overview
GPU
Run inference with vLLM on GKE
DeepSeek V3.1
DeepSeek V3.2-Speciale
Gemma 3
GPT-OSS
Llama 4
Qwen3
Run fine-tuning
Gemma 3 on a GKE cluster
Gemma 3 on a Slurm cluster
Gemma 3 for vision tasks on GKE
Llama 4 on a Slurm cluster
Mixtral-8x7b on a Slurm cluster
Run training
Qwen2 on a Slurm cluster
TPU
Serve Qwen2-7B with vLLM on TPUs
Serve Qwen2-7B-Instruct with vLLM on TPUs
Serve Qwen3-8B-Base with vLLM on TPUs
Serve Llama-3.1-8B with vLLM on TPUs
Manage infrastructure
Manage GKE clusters
Manage instances and Slurm clusters
View topology of an instance
Manage host events
Host events in instances
Host events in reservations
Report faulty host
Test and optimize
Optimize cluster networking by using NCCL/ g IB
Run NCCL tests
Run NCCL on Compute Engine instances
Run NCCL on GKE clusters that use default configuration
Run NCCL on custom GKE clusters that use A4X Max
Run NCCL on custom GKE clusters that use A4X
Run NCCL on custom GKE clusters that use A4 or A3 Ultra
Run NCCL on Slurm clusters
Collect and understand NCCL logs for troubleshooting
Test workloads with recipes
Benchmarking recipes
Goodput optimization recipes
Test clusters
Monitor
Monitor VMs and Slurm clusters
Manage how Co MMA collects NCCL telemetry
Collective Communication Analyzer (CoMMA)
Enable, disable, and configure CoMMA
Troubleshoot
Known issues
Troubleshoot slow performance
Troubleshoot reporting a faulty host
Troubleshoot CoMMA
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
On this page
What is Topology Aware Scheduling (TAS)?
Before you begin
Prepare your GKE cluster Install Kueue with TAS enabled
View the topology of your GKE cluster
Configure Kueue
Schedule workloads with TAS using Kueue Schedule workloads using PodGroup with TAS using Kueue
What's next
Home
Documentation
Compute
AI Hypercomputer
Guides
Was this helpful?
Send feedback
Schedule GKE workloads with Topology Aware Scheduling (TAS)
Stay organized with collections
Save and categorize content based on your preferences.
On this page
What is Topology Aware Scheduling (TAS)?
Before you begin
Prepare your GKE cluster Install Kueue with TAS enabled
View the topology of your GKE cluster
Configure Kueue
Schedule workloads with TAS using Kueue Schedule workloads using PodGroup with TAS using Kueue
What's next
AI and ML workloads require significant Pod-to-Pod communication. Because of
this requirement, network bandwidth between Pods directly impacts workload
execution time and cost. This bandwidth depends on the placement of the virtual
machine (VM) instances in the cluster.
This document explains how to optimize the scheduling of your large-scale AI or
ML workloads on a Google Kubernetes Engine (GKE) cluster for both performance and
reliability. Specifically, you configure your cluster to use Topology Aware
Scheduling (TAS) for low-latency communication. This approach minimizes
communication overhead and helps maximize performance for your workloads.
What is Topology Aware Scheduling (TAS)?
TAS can
significantly improve the efficiency of large language model (LLM) training. TAS
strategically places workers on the network topology to minimize communication
overhead during gradient aggregation, which requires workers to communicate in a
specific rank order. By minimizing network hops between sequentially
communicating workers, TAS reduces network contention and optimizes bandwidth
utilization, leading to faster convergence and shorter training times. With
increasingly large LLM models, TAS is essential for maximizing the performance
and scalability of distributed training.
TAS works best with densely placed capacity, which can be obtained through
reservations. With Flex-start VMs or Spot VMs, your capacity
is less likely to allocated close together, so TAS might not work well in this
scenario.
Before you begin
Before you start, make sure that you have performed the following tasks:
Enable
the Google Kubernetes Engine API.
Enable Google Kubernetes Engine API
If you want to use the Google Cloud CLI for this task,
install and then
initialize the
gcloud CLI. If you previously installed the gcloud CLI, get the latest
version by running the gcloud components update command. Earlier gcloud CLI versions might not support running the commands in this document.
Note: For existing gcloud CLI
installations, make sure to set the compute/region property . If you use primarily zonal clusters, set the compute/zone instead. By setting a default location,
you can avoid errors in the gcloud CLI like the following:
One of [--zone, --region] must be supplied: Please specify location . You might need to specify the location in certain commands if the location of your cluster differs from the default that you set.
To connect to your cluster, run the following command:
gcloud container clusters get-credentials CLUSTER_NAME
Replace CLUSTER_NAME with the name of your cluster.
Prepare your GKE cluster
To prepare your GKE cluster to run workloads with TAS, complete
the following steps:
Install Kueue with TAS enabled
View the topology of your GKE cluster
Configure Kueue
Install Kueue with TAS enabled
We recommend that you use TAS with
Kueue , a Kubernetes-native system
that manages quotas and how jobs should consume them. TAS requires Kueue version
0.10.0 or later, and you must explicitly enable it.
To install Kueue and enable TAS, select one of the following options:
Kueue manifest Helm chart
More
Install Kueue:
kubectl apply --server-side -f https://github.com/kubernetes-sigs/kueue/releases/download/v0.10.0/manifests.yaml
Enable TAS in Kueue:
kubectl -n kueue-system patch deployment kueue-controller-manager \
--type json -p = '[{"op": "add", "path": "/spec/template/spec/containers/0/args/-", "value": "--feature-gates=TopologyAwareScheduling=true"}]'
Install Kueue with TAS enabled by using a Helm chart:
helm install kueue oci://us-central1-docker.pkg.dev/k8s-staging-images/charts/kueue \
--version = "v0.10.0" \
--create-namespace \
--namespace = kueue-system \
--set = "controllerManager.featureGates[0].name=TopologyAwareScheduling,controllerManager.featureGates[0].enabled=true"
After you install Kueue, you must configure it to understand the infrastructure
that it's managing, as explained in the next section.
View the topology of your GKE cluster
Before you view the topology of A4X, A4, A3 Ultra, A3 Mega, and A3 High (8 GPUs)
nodes provisioned as Spot VMs, you must define
compact placement on the
GKE nodes to expose their physical topology for TAS. Otherwise,
you encounter errors.
To view the topology of your GKE cluster nodes in a specific node
pool, run the following command:
kubectl get nodes -l cloud.google.com/gke-nodepool = NODE_POOL_NAME \
-ocustom-columns = 'NAME:.metadata.name,BLOCK:.metadata.labels.cloud\.google\.com/gce-topology-block,SUBBLOCK:.metadata.labels.cloud\.google\.com/gce-topology-subblock,HOST:.metadata.labels.cloud\.google\.com/gce-topology-host' | sort -k2,4
Replace NODE_POOL_NAME with the name of the node pool.
To understand the physical topology of GKE nodes on your VMs in
the output, refer to the following node labels:
cloud.google.com/gce-topology-block : the organization-specific ID of
the reserved block in which the VM is located.
cloud.google.com/gce-topology-subblock : the organization-specific ID
of the sub-block in which the VM is located.
cloud.google.com/gce-topology-host : the ID of the host on which the VM
is located.
kubernetes.io/hostname : the hostname of the Kubernetes node. This
hostname is typically also the GKE node name.
The more label values two VMs share, the closer the VMs are physically located
next to each other. For more information about these terms, see
Terminology .
Configure Kueue
After you install Kueue, you must configure Kueue to specify the infrastructure
that it's managing. Typically, Kueue requires a
ClusterQueue resource
quota definition of either static infrastructure, or dynamic infrastructure with
cluster autoscaling enabled. The ClusterQueue admits a
Workload only if the
resources that the workload requests are less than or equal to the pool of
resources defined in the ClusterQueue. After you configure Kueue as described in
this section, Kueue admits workloads using the TAS as follows:
TAS workloads : Kueue checks both the topology of the physical
infrastructure and its current usage.
Non-TAS workloads : Kueue doesn't check the topology of the physical
infrastructure. Kueue manages the entire quota defined in the config and
leaves node assignment to kube-scheduler.
To understand how to provide a ClusterQueue resource quota definition to Kueue,
review the following examples:
Very high quota : Kueue practically never stops admission of a workload
based on the requested resources. Based on the TAS definitions, Kueue may or
may not admit workloads based on the infrastructure topology. For more
information, see Very high resource quota .
Realistic quota : Kueue admits the Workload only if the resources that
Workload requests are within these resource quota limits. Based on the TAS
definitions, Kueue then checks the infrastructure topology before admitting
the Workload. For more information, see
Realistic resource quota .
All references to resource quota in the following sections refer to ClusterQueue
resource quota.
Very high resource quota
The following example uses a very high resource quota, such that Kueue never
stops a workload based on the available resource quota. Rather, Kueue uses the
topology information of available nodes to try and match the topology with the
requirements of the workload.
To use the following resource quota definition, complete the following steps:
Open a file editor of your choice. Then, include the following quota
definition in a YAML file named kueue-tas-config-very-high-quota.yaml :
apiVersion : kueue.x-k8s.io/v1alpha1
kind : Topology
metadata :
name : "gke-default"
spec :
levels :
- nodeLabel : "cloud.google.com/gce-topology-block"
- nodeLabel : "cloud.google.com/gce-topology-subblock"
- nodeLabel : "cloud.google.com/gce-topology-host"
- nodeLabel : "kubernetes.io/hostname"
---
kind : ResourceFlavor
apiVersion : kueue.x-k8s.io/v1beta1
metadata :
name : "tas-flavor"
spec :
nodeLabels :
cloud.google.com/gke-nodepool : " NODE_POOL_NAME "
topologyName : "gke-default"
tolerations :
- key : "nvidia.com/gpu"
operator : "Exists"
effect : NoSchedule
---
apiVersion : kueue.x-k8s.io/v1beta1
kind : ClusterQueue
metadata :
name : "tas-cluster-queue"
spec :
namespaceSelector : {}
resourceGroups :
- coveredResources : [ "nvidia.com/gpu" ]
flavors :
- name : "tas-flavor"
resources :
- name : "nvidia.com/gpu"
nominalQuota : 10000000
---
apiVersion : kueue.x-k8s.io/v1beta1
kind : LocalQueue
metadata :
namespace : "default"
name : "tas-user-queue"
spec :
clusterQueue : "tas-cluster-queue"
Replace NODE_POOL_NAME with the name of the node pool.
Create and apply the resource quota configuration for the Kueue job queueing
system:
kubectl create -f kueue-tas-config-very-high-quota.yaml
Realistic resource quota
The previous example only configured GPU resources. However, Kueue can manage
all Kubernetes-compatible resources.
The following example defines a more-realistic resource quota, including CPU,
memory, and GPU. This is for 100 a3-ultragpu-8g machines. A single machine has
224 vCPUs, 2944 GB of memory, and 8 GPUs.
To use the following resource quota definition, complete the following steps:
Open a file editor of your choice. Then, include the following quota
definition in a YAML file named kueue-tas-config-real-quota.yaml :
apiVersion : kueue.x-k8s.io/v1alpha1
kind : Topology
metadata :
name : "gke-default"
spec :
levels :
- nodeLabel : "cloud.google.com/gce-topology-block"
- nodeLabel : "cloud.google.com/gce-topology-subblock"
- nodeLabel : "cloud.google.com/gce-topology-host"
- nodeLabel : "kubernetes.io/hostname"
---
kind : ResourceFlavor
apiVersion : kueue.x-k8s.io/v1beta1
metadata :
name : "tas-flavor"
spec :
nodeLabels :
cloud.google.com/gke-nodepool : " NODE_POOL_NAME "
topologyName : "gke-default"
tolerations :
- key : "nvidia.com/gpu"
operator : "Exists"
effect : NoSchedule
---
apiVersion : kueue.x-k8s.io/v1beta1
kind : ClusterQueue
metadata :
name : "tas-cluster-queue"
spec :
namespaceSelector : {} # match all
resourceGroups :
- coveredResources : [ "cpu" , "memory" , "nvidia.com/gpu" ]
flavors :
- name : "tas-flavor"
resources :
# numbers below represent quota of 100 a3-ultragpu-8g machines
- name : "cpu"
nominalQuota : 22400
- name : "memory"
nominalQuota : 294400Gi
- name : "nvidia.com/gpu"
nominalQuota : 800
---
apiVersion : kueue.x-k8s.io/v1beta1
kind : LocalQueue
metadata :
namespace : "default"
name : "tas-user-queue"
spec :
clusterQueue : "tas-cluster-queue"
Replace NODE_POOL_NAME with the name of the node pool.
Create and apply a resource quota configuration for the Kueue job queueing
system:
kubectl create -f kueue-tas-config-real-quota.yaml
The output is similar to the following:
topology.kueue.x-k8s.io/gke-default created
resourceflavor.kueue.x-k8s.io/tas-flavor created
clusterqueue.kueue.x-k8s.io/tas-cluster-queue created
localqueue.kueue.x-k8s.io/tas-user-queue created
Schedule workloads with TAS using Kueue
The following scenarios show how you can instruct Kueue and TAS to manage common
workload and infrastructure combinations using topology request types and
topology request levels:
The following are the available topology request types (preferred or
required):
kueue.x-k8s.io/podset-preferred-topology : Kueue prioritizes
scheduling the entire workload within a given topology level, but still
admits a workload that doesn't fit within this topology level. For a
workload that might have fit in a single topology level, Kueue might
schedule that workload across multiple instances of that topology level.
kueue.x-k8s.io/podset-required-topology : Kueue continues trying to
admit this workload until the entire workload can fit within the chosen
topology level.
The following are the available topology request levels , letting you be
more or less specific about the physical infrastructure where you prefer or
require your Job to run:
cloud.google.com/gce-topology-block
cloud.google.com/gce-topology-subblock
cloud.google.com/gce-topology-host
kubernetes.io/hostname
To schedule workloads using these values, use the following Job YAML file:
apiVersion : batch/v1
kind : Job
metadata :
generateName : JOB_NAME
labels :
kueue.x-k8s.io/queue-name : tas-user-queue
spec :
parallelism : NUMBER_OF_REPLICAS
completions : NUMBER_OF_REPLICAS
completionMode : Indexed
template :
metadata :
annotations :
ANNOTATIONS_STRING
spec :
containers :
- name : dummy-job
image : gcr.io/k8s-staging-perf-tests/sleep:v0.1.0
args : [ "60s" ]
resources :
requests :
nvidia.com/gpu : "1"
limits :
nvidia.com/gpu : "1"
restartPolicy : Never
Replace the following variables:
JOB_NAME : a name for the Job.
NUMBER_OF_REPLICAS : the number of Pods that are running
in parallel.
ANNOTATIONS_STRING : see the following table:
Requested topology type and level
Description
ANNOTATIONS_STRING
Preferred to run within a hostname (recommended)
This configuration will admit your workload as long as there are enough resources available to satisfy your workload's resource requirements, even if the capacity is fragmented. Kueue will schedule your Pods as compactly as possible.
kueue.x-k8s.io/podset-preferred-topology: "kubernetes.io/hostname"
Required to run within a host
This configuration will admit your workload if and only if there is a host available with enough resources to satisfy your workload's resource requirements.
This is useful when there are multiple VMs per host (for example, smaller machine types) or multiple Pods can run on a single node. In such cases, if the workload is admitted, it will run on a single host.
kueue.x-k8s.io/podset-required-topology: "cloud.google.com/gce-topology-host"
Preferred to run within a host
This configuration will admit your workload as long as there are enough resources available to satisfy your workload's resource requirements, even if the capacity is fragmented. Kueue will try to schedule your Pods within a host and will use additional hosts if needed.
kueue.x-k8s.io/podset-preferred-topology: "cloud.google.com/gce-topology-host"
Required to run within a sub-block
This configuration will admit your workload if and only if there is a sub-block available with enough resources to satisfy your workload's resource requirements.
kueue.x-k8s.io/podset-required-topology: "cloud.google.com/gce-topology-subblock"
Preferred to run within a sub-block
This configuration will admit your workload as long as there are enough resources available to satisfy your workload's resource requirements, even if the capacity is fragmented. Kueue will try to schedule your Pods within a sub-block and will use additional sub-blocks if needed. In this case, Kueue will rank higher a sub-block with more available capacity even if it is fragmented compared to a sub-block with just enough capacity to satisfy the requirements.
kueue.x-k8s.io/podset-preferred-topology: "cloud.google.com/gce-topology-subblock"
Required to run within a block
This configuration will admit your workload if and only if the resources available within a block satisfy your workload's resource requirements.
If admitted, Kueue will minimize the number of sub-blocks and hosts to schedule the workload. This might result in fragmentation of your available capacity.
kueue.x-k8s.io/podset-required-topology: "cloud.google.com/gce-topology-block"
Preferred to run within a block
This configuration will admit your workload as long as there are enough resources available to satisfy your workload's resource requirements, even if the capacity is fragmented. Kueue will try to schedule your Pods within a block and will use additional blocks if needed.
kueue.x-k8s.io/podset-preferred-topology: "cloud.google.com/gce-topology-block"
Schedule workloads using PodGroup with TAS using Kueue
When using PodGroups, you must specify three additional fields for every Pod in
a PodGroup:
Labels :
kueue.x-k8s.io/pod-group-name :
the name of a PodGroup used for aggregation.
kueue.x-k8s.io/pod-group-pod-index :
the index of each individual Pod within the PodGroup.
Annotations :
kueue.x-k8s.io/pod-group-total-count :
the total count of Pods within a PodGroup.
Depending on the ML framework that you use, a leader of a PodGroup can either
require a GPU or not. Because of a limitation of Kueue, these cases need to be
handled differently. The following examples demonstrate how to create a PodGroup
of three Pods with one leader and two workers.
Case 1: Leader is also a worker and requires a GPU
If the leader is one of the workers and also requires a GPU, then the leader can
have any number within the PodGroup. For simplicity, in the following example
the index of the leader is 0 :
apiVersion : v1
kind : Pod
metadata :
generateName : tas-podgroup-leader-
labels :
kueue.x-k8s.io/queue-name : tas-user-queue
kueue.x-k8s.io/pod-group-name : "tas-podgroup-example-group"
kueue.x-k8s.io/pod-group-pod-index : "0"
annotations :
kueue.x-k8s.io/pod-group-total-count : "3"
kueue.x-k8s.io/podset-required-topology : "cloud.google.com/gce-topology-block"
spec :
containers :
- name : leader
image : gcr.io/k8s-staging-perf-tests/sleep:v0.1.0
args : [ "600s" ]
resources :
requests :
nvidia.com/gpu : "1"
limits :
nvidia.com/gpu : "1"
restartPolicy : Never
---
apiVersion : v1
kind : Pod
metadata :
generateName : tas-podgroup-worker-1-
labels :
kueue.x-k8s.io/queue-name : tas-user-queue
kueue.x-k8s.io/pod-group-name : "tas-podgroup-example-group"
kueue.x-k8s.io/pod-group-pod-index : "1"
annotations :
kueue.x-k8s.io/pod-group-total-count : "3"
kueue.x-k8s.io/podset-required-topology : "cloud.google.com/gce-topology-block"
spec :
restartPolicy : Never
containers :
- name : worker
image : gcr.io/k8s-staging-perf-tests/sleep:v0.1.0
args : [ "600s" ]
resources :
requests :
nvidia.com/gpu : "1"
limits :
nvidia.com/gpu : "1"
---
apiVersion : v1
kind : Pod
metadata :
generateName : tas-podgroup-worker-2-
labels :
kueue.x-k8s.io/queue-name : tas-user-queue
kueue.x-k8s.io/pod-group-name : "tas-podgroup-example-group"
kueue.x-k8s.io/pod-group-pod-index : "2"
annotations :
kueue.x-k8s.io/pod-group-total-count : "3"
kueue.x-k8s.io/podset-required-topology : "cloud.google.com/gce-topology-block"
spec :
restartPolicy : Never
containers :
- name : worker
image : gcr.io/k8s-staging-perf-tests/sleep:v0.1.0
args : [ "600s" ]
resources :
requests :
nvidia.com/gpu : "1"
limits :
nvidia.com/gpu : "1"
Case 2: Leader is not a worker and doesn't require a GPU
If the leader isn't one of the workers because of the Kueue limitation, the
leader must have the last index in the PodGroup, because of how Kueue creates
PodSets. If the leader doesn't have the last index and the first worker doesn't
use the first index, Kueue won't apply rank assignments.
See the following example:
---
apiVersion : v1
kind : Pod
metadata :
generateName : tas-podgroup-leader-
labels :
kueue.x-k8s.io/queue-name : tas-user-queue
kueue.x-k8s.io/pod-group-name : "tas-podgroup-example-group2"
kueue.x-k8s.io/pod-group-pod-index : "2"
annotations :
kueue.x-k8s.io/pod-group-total-count : "3"
kueue.x-k8s.io/podset-required-topology : "cloud.google.com/gce-topology-block"
spec :
containers :
- name : leader
image : gcr.io/k8s-staging-perf-tests/sleep:v0.1.0
args : [ "600s" ]
resources :
requests :
cpu : "1"
limits :
cpu : "1"
restartPolicy : Never
---
apiVersion : v1
kind : Pod
metadata :
generateName : tas-podgroup-worker-0-
labels :
kueue.x-k8s.io/queue-name : tas-user-queue
kueue.x-k8s.io/pod-group-name : "tas-podgroup-example-group2"
kueue.x-k8s.io/pod-group-pod-index : "0"
annotations :
kueue.x-k8s.io/pod-group-total-count : "3"
kueue.x-k8s.io/podset-required-topology : "cloud.google.com/gce-topology-block"
spec :
restartPolicy : Never
containers :
- name : worker
image : gcr.io/k8s-staging-perf-tests/sleep:v0.1.0
args : [ "600s" ]
resources :
requests :
nvidia.com/gpu : "1"
limits :
nvidia.com/gpu : "1"
---
apiVersion : v1
kind : Pod
metadata :
generateName : tas-podgroup-worker-1-
labels :
kueue.x-k8s.io/queue-name : tas-user-queue
kueue.x-k8s.io/pod-group-name : "tas-podgroup-example-group2"
kueue.x-k8s.io/pod-group-pod-index : "1"
annotations :
kueue.x-k8s.io/pod-group-total-count : "3"
kueue.x-k8s.io/podset-required-topology : "cloud.google.com/gce-topology-block"
spec :
restartPolicy : Never
containers :
- name : worker
image : gcr.io/k8s-staging-perf-tests/sleep:v0.1.0
args : [ "600s" ]
resources :
requests :
nvidia.com/gpu : "1"
limits :
nvidia.com/gpu : "1"
What's next
To learn more about enabling health node prediction in your
GKE cluster, see
Enable node health prediction .
To learn about managing common events relevant to GKE
clusters and AI workloads, see
Manage AI-optimized GKE clusters .
To learn more about scheduling jobs on GKE with Kueue, see
Deploy a batch system using Kueue .
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-06 UTC."],[],[]]
Products and pricing
See all products
Google Cloud pricing
Google Cloud Marketplace
Contact sales
Support
Community forums
Support
Release Notes
System status
Resources
GitHub
Getting Started with Google Cloud
Code samples
Cloud Architecture Center
Training and Certification
Engage
Blog
Events
X (Twitter)
Google Cloud on YouTube
Google Cloud Tech on YouTube
About Google
Privacy
Site terms
Google Cloud terms
Manage cookies
Our third decade of climate action: join us
Sign up for the Google Cloud newsletter
Subscribe
English
Deutsch
Español – América Latina
Français
Indonesia
Italiano
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
