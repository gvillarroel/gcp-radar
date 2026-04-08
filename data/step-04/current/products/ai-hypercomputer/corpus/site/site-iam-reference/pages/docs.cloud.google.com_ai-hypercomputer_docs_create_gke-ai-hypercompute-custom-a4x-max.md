---
title: "Create a custom AI-optimized GKE cluster which uses A4X Max \_|\_ AI Hypercomputer\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/create/gke-ai-hypercompute-custom-a4x-max
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/create/gke-ai-hypercompute-custom-a4x-max
  title: "Create a custom AI-optimized GKE cluster which uses A4X Max \_|\_ AI Hypercomputer\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Create a custom AI-optimized GKE cluster which uses A4X Max | AI Hypercomputer | Google Cloud Documentation
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
Manage how CoMMA collects NCCL telemetry
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
Before you begin Obtain capacity
Requirements
Considerations for creating a cluster
Create an AI-optimized GKE cluster which uses A4X Max and GPUDirect RDMA Create the GKE cluster
Create a workload policy
Create a node pool with A4X Max
Configure the MRDMA NICs with asapd-lite Install the NVIDIA Compute Domain CRD and DRA driver
Configure your workload manifest for RDMA and IMEX domain
Test network performance
What's next
Home
Documentation
Compute
AI Hypercomputer
Guides
Was this helpful?
Send feedback
Create a custom AI-optimized GKE cluster which uses A4X Max
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin Obtain capacity
Requirements
Considerations for creating a cluster
Create an AI-optimized GKE cluster which uses A4X Max and GPUDirect RDMA Create the GKE cluster
Create a workload policy
Create a node pool with A4X Max
Configure the MRDMA NICs with asapd-lite Install the NVIDIA Compute Domain CRD and DRA driver
Configure your workload manifest for RDMA and IMEX domain
Test network performance
What's next
This document shows you how to create an AI-optimized Google Kubernetes Engine (GKE)
cluster that uses A4X Max Compute Engine instances to support your AI and ML
workloads.
The A4X Max and A4X series lets you run
large-scale AI/ML clusters by using the NVIDIA Multi-Node NVLink (MNNVL)
system ,
a rack-scale solution which enables higher GPU power and performance. These
machines offer features such as targeted workload placement, topology-aware
scheduling, and advanced cluster maintenance controls. For more information, see
Cluster management capabilities .
With A4X Max, GKE also provides an automated networking setup
which simplifies cluster configuration.
AI and ML workloads, such as distributed training, require powerful acceleration
to optimize performance by reducing job completion times. GKE
provides a single platform surface to run a diverse set of workloads for your
organizations, reducing the operational burden of managing multiple platforms.
You can run workloads such as high-performance distributed pre-training, model
fine-tuning, model inference, application serving, and supporting services. For
workloads that require high performance, high throughput, and low latency,
GPUDirect RDMA reduces the network hops that are required to transfer payloads
to and from GPUs. This approach more efficiently uses the network bandwidth
that's available. For more information, see GPU networking
stacks .
In this document, you learn how to create a GKE cluster with the
Google Cloud CLI for maximum flexibility in configuring your cluster based on the
needs of your workload. To use the gcloud CLI to create clusters with
other machine types, see the following:
A4X : Create a custom AI-optimized GKE cluster which uses
A4X .
A4 or A3 Ultra : To create a cluster which uses A4 or A3 Ultra, see
Create a custom AI-optimized GKE cluster which uses A4 or A3
Ultra . You can
use these machine series for running workloads with or without GPUDirect
RDMA.
Alternatively, you can choose to use Cluster Toolkit to quickly deploy
your cluster with default settings that reflect best practices for many use
cases. For more information, see Create an AI-optimized GKE
cluster with default configuration .
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
Obtain capacity
You can obtain capacity for A4X Max compute instances by creating a future
reservation. For more information about future reservations, see the Future
reservations in AI Hypercomputer column in the table for
Choose a consumption option .
To obtain capacity with a future reservation, see the Future reservations in
AI Hypercomputer row in the table for How to obtain
capacity .
Note: When you request A4X Max capacity, you obtain it in all capacity mode .
This mode is the only supported reservation operational mode for A4X Max machine
types. For more information about all capacity mode, see Reservation
operational
mode .
Requirements
The following requirements apply to an AI-optimized GKE cluster
with A4X Max compute instances:
For A4X Max, you must use one of the following versions:
For 1.35 or later, use GKE version 1.35.0-gke.2745000 or
later.
For 1.34, use GKE version 1.34.3-gke.1318000 or later.
These versions help to ensure that A4X Max uses the following:
R580.95.05, the minimum GPU driver version for A4X Max, which is enabled
by default.
Coherent Driver-based Memory Management (CDMM), which is enabled by
default. NVIDIA recommends that Kubernetes clusters enable this mode to
resolve memory over-reporting. CDMM allows GPU memory to be managed
through the driver instead of the operating system (OS). This approach
helps you to avoid OS onlining of GPU memory, and exposes the GPU memory
as a Non-Uniform Memory Access (NUMA) node to the OS. Multi-instance
GPUs aren't supported when CDMM is enabled. For more information about
CDMM, see Hardware and Software
Support .
GPUDirect RDMA and MNNVL, which are recommended to enable A4X Max node
pools to use the networking capabilities of A4X Max.
The GKE nodes must use a Container-Optimized OS node
image. Ubuntu and Windows node images are not supported.
Your GKE workload must use all available GPUs and your Pod
must use all available secondary NICs on a single GKE node.
Multiple Pods cannot share RDMA on a single GKE node.
You must use the reservation-bound
provisioning model to create clusters with A4X Max. Other provisioning
models are not supported.
These instructions use
DRANET to
configure an AI-optimized GKE cluster with A4X Max.
Multi-networking isn't supported for the a4x-maxgpu-4g-metal machine type.
Considerations for creating a cluster
When you create a cluster, consider the following information:
Choose a cluster location :
Verify that you use a location which has availability for the machine
type that you choose. For more information, see Accelerator
availability .
When you create node pools in a regional
cluster —which are
recommended for production workloads—you can use the --node-locations
flag to specify the zones for your GKE nodes.
Choose a driver version :
The driver version can be one of the following values:
default : install the default driver version for your
GKE node version. For more information about the
requirements for default driver versions, see the
Requirements
section.
latest : install the latest available driver version for your
GKE version. This option is available only for nodes
that use Container-Optimized OS.
disabled : skip automatic driver installation. You must manually
install a
driver
after you create the node pool.
For more information about the default and latest GPU driver versions
for GKE node versions, see the table in the section
Manually install NVIDIA GPU
drivers .
Choose a reservation affinity :
You can find information about your reservation, such as the name of
your reservation or the name of a specific block in your reservation. To
find these values, see View future reservation
requests .
The --reservation-affinity flag can take the values of specific or
any . However, for high performance distributed AI workloads, we
recommend that you use a specific reservation.
When you use a specific reservation, including shared
reservations ,
specify the value of the --reservation flag in the following format:
projects/ PROJECT_ID /reservations/ RESERVATION_NAME /reservationBlocks/ BLOCK_NAME
Replace the following values:
PROJECT_ID : your Google Cloud project ID.
RESERVATION_NAME : the name of your
reservation.
BLOCK_NAME : the name of a specific block
within the reservation.
We also recommend that you use a sub-block targeted reservation so that
compute instances are placed on a single sub-block within the
BLOCK_NAME . Add the following to the end of the
path:
/reservationSubBlocks/ SUB_BLOCK_NAME
Replace SUB_BLOCK_NAME with the name of the
sub-block.
Tip: If the reservation is located in the current project, you can omit
projects/ PROJECT_ID /reservations/ from the
reservation value.
Create an AI-optimized GKE cluster which uses A4X Max and GPUDirect RDMA
For distributed AI workloads, multiple GPU nodes are often linked together to
work as a single computer. A4X Max is an exascale platform based on NVIDIA GB300
NVL72 rack-scale architecture. A4X Max compute instances use a multi-layered,
hierarchical networking architecture with a rail-aligned design to optimize
performance for various communication types. This machine type enables scaling
and collaboration across multiple GPUs by delivering a high-performance cloud
experience for AI workloads. For more information about the network architecture
for A4X Max, including the network bandwidth and NIC arrangement, see A4X Max
machine type (bare
metal) .
To create a GKE Standard cluster with A4X Max that uses
GPUDirect RDMA and MNNVL, complete the steps that are described in the following
sections:
Create the GKE cluster
Create a workload policy
Create a node pool with A4X Max
Configure the MRDMA NICs with asapd-lite
Install the NVIDIA Compute Domain CRD and DRA driver
Configure your workload manifest for RDMA and IMEX domain
These instructions use accelerator network
profiles to
automatically configure VPC networks and subnets for your A4X Max nodes.
Alternatively, you can explicitly specify your VPC network and
subnets .
Create the GKE cluster
Create a GKE Standard cluster:
gcloud container clusters create CLUSTER_NAME \
--enable-dataplane-v2 \
--enable-ip-alias \
--location = COMPUTE_REGION \
--cluster-version = CLUSTER_VERSION \
--no-enable-shielded-nodes [ \
--services-ipv4-cidr = SERVICE_CIDR \
--cluster-ipv4-cidr = POD_CIDR \
--addons = GcpFilestoreCsiDriver = ENABLED ]
Replace the following:
CLUSTER_NAME : the name of your cluster.
CLUSTER_VERSION : the version of your new cluster.
For more information about which version of GKE supports
your configuration, see the Requirements in this
document.
COMPUTE_REGION : the name of the compute region.
Optionally, you can explicitly provide the secondary CIDR ranges for
services and Pods. If you use these optional flags, then replace the
following variables:
SERVICE_CIDR : the secondary CIDR range for
services.
POD_CIDR : the secondary CIDR range for Pods.
When you use these flags, you must verify that the CIDR ranges don't
overlap with subnet ranges for additional node networks. For example,
consider SERVICE_CIDR =10.65.0.0/19 and
POD_CIDR =10.64.0.0/19 . For more
information, see Adding Pod IPv4 address
ranges .
To run the kubectl commands in the next sections, connect to your cluster:
gcloud container clusters get-credentials CLUSTER_NAME --location = COMPUTE_REGION
Replace the following:
CLUSTER_NAME : the name of your cluster.
COMPUTE_REGION : the name of the compute region.
For more information, see Install kubectl and configure cluster
access .
Create a workload policy
A workload policy is required to create a partition. For more information, see
Workload policy for
MIGs .
Create a HIGH_THROUGHPUT workload policy with the accelerator_topology field
set to 1x72 .
gcloud beta compute resource-policies create workload-policy WORKLOAD_POLICY_NAME \
--type HIGH_THROUGHPUT \
--accelerator-topology 1x72 \
--project PROJECT \
--region COMPUTE_REGION
Replace the following:
WORKLOAD_POLICY_NAME : the name of your workload
policy.
PROJECT : the name of your project.
COMPUTE_REGION : the name of the compute region.
Create a node pool with A4X Max
Create the following configuration file to pre-allocate
hugepages
with the node pool:
cat > node_custom.yaml <<EOF
linuxConfig:
hugepageConfig:
hugepage_size2m: 4096
EOF
export NODE_CUSTOM = node_custom.yaml
Create an A4X Max node pool:
gcloud container node-pools create NODE_POOL_NAME \
--cluster = CLUSTER_NAME \
--location = COMPUTE_REGION \
--node-locations = COMPUTE_ZONE \
--num-nodes = NODE_COUNT \
--placement-policy = WORKLOAD_POLICY_NAME \
--machine-type = a4x-maxgpu-4g-metal \
--accelerator = type = nvidia-gb300,count = 4 ,gpu-driver-version = latest \
--system-config-from-file = ${ NODE_CUSTOM } \
--accelerator-network-profile = auto \
--node-labels = cloud.google.com/gke-networking-dra-driver = true,cloud.google.com/gke-dpv2-unified-cni = cni-migration \
--reservation-affinity = specific \
--reservation = RESERVATION_NAME /reservationBlocks/ BLOCK_NAME /reservationSubBlocks/ SUB_BLOCK_NAME
Replace the following:
NODE_POOL_NAME : the name of the node pool.
CLUSTER_NAME : the name of your cluster.
COMPUTE_REGION : the compute region of the
cluster.
COMPUTE_ZONE : the zone of your node pool.
NODE_COUNT : the number of nodes for the node
pool, which must be 18 nodes or less. We recommend using 18 nodes to
obtain the GPU topology of 1x72 in one sub-block using an NVLink domain.
WORKLOAD_POLICY_NAME : the name of the workload
policy you created previously.
RESERVATION_NAME : the name of your reservation.
To find this value, see View future reservation
requests .
BLOCK_NAME : the name of a specific block within
the reservation. To find this value, see View future reservation
requests .
This command automatically creates a network that connects all the A4X Max
nodes within a single zone by using the auto accelerator network profile.
When you create a node pool with the --accelerator-network-profile=auto
flag, GKE automatically adds the
gke.networks.io/accelerator-network-profile: auto label to the nodes. To
schedule workloads on these nodes, you must include this label in your
workload's nodeSelector field.
Configure the MRDMA NICs with asapd-lite
The asapd-lite DaemonSet configures the MRDMA NICs. An unhealthy asapd-lite
DaemonSet might indicate no RDMA connectivity.
Install the DaemonSet:
kubectl apply -f https://raw.githubusercontent.com/GoogleCloudPlatform/container-engine-accelerators/refs/heads/master/asapd-lite-installer/asapd-lite-installer-a4x-max-bm-cos.yaml
Validate the replicas in the asapd-lite DaemonSet:
kubectl get daemonset -n kube-system asapd-lite
The output is similar to the following:
NAME DESIRED CURRENT READY UP-TO-DATE AVAILABLE NODE SELECTOR AGE
asapd-lite 18 18 18 18 18 <none> 5m
The number of READY replicas should match the number of nodes that were
created and are healthy in the node pool.
Install the NVIDIA Compute Domain CRD and DRA driver
The following steps install the NVIDIA Compute Domain CRD and DRA driver to
enable the use of MNNVL. For more information, see NVIDIA DRA Driver for
GPUs .
Verify that you have Helm installed in your development
environment. Helm comes pre-installed on Cloud Shell .
Although there is no specific Helm version requirement, you can use the
following command to verify that you have Helm installed.
helm version
If the output is similar to Command helm not found , then you can install
the Helm CLI:
curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3 \
&& chmod 700 get_helm.sh \
&& ./get_helm.sh
Add the NVIDIA Helm repository:
helm repo add nvidia https://helm.ngc.nvidia.com/nvidia \
&& helm repo update
Create a ResourceQuota object for the DRA Driver:
export POD_QUOTA = POD_QUOTA
kubectl create ns nvidia-dra-driver-gpu
kubectl apply -n nvidia-dra-driver-gpu -f - << EOF
apiVersion: v1
kind: ResourceQuota
metadata:
name: nvidia-dra-driver-gpu-quota
spec:
hard:
pods: ${ POD_QUOTA }
scopeSelector:
matchExpressions:
- operator: In
scopeName: PriorityClass
values:
- system-node-critical
- system-cluster-critical
EOF
Replace POD_QUOTA with a number at least
2 times the number of A4X Max nodes in the cluster plus 1. For example, you
must set the variable to at least 37 if you have 18 A4X Max nodes in your
cluster.
Install the ComputeDomain CRD and DRA driver:
helm install nvidia-dra-driver-gpu nvidia/nvidia-dra-driver-gpu \
--set controller.args.v = 4 --set kubeletPlugin.args.v = 4 \
--version = "25.8.0" \
--create-namespace \
--namespace nvidia-dra-driver-gpu \
-f < ( cat <<EOF
nvidiaDriverRoot: /home/kubernetes/bin/nvidia
resources:
gpus:
enabled: false
controller:
affinity:
nodeAffinity:
requiredDuringSchedulingIgnoredDuringExecution:
nodeSelectorTerms:
- matchExpressions:
- key: "nvidia.com/gpu"
operator: "DoesNotExist"
kubeletPlugin:
affinity:
nodeAffinity:
requiredDuringSchedulingIgnoredDuringExecution:
nodeSelectorTerms:
- matchExpressions:
- key: cloud.google.com/gke-accelerator
operator: In
values:
- nvidia-gb300
- key: kubernetes.io/arch
operator: In
values:
- arm64
tolerations:
- key: nvidia.com/gpu
operator: Equal
value: present
effect: NoSchedule
- key: kubernetes.io/arch
operator: Equal
value: arm64
effect: NoSchedule
EOF
)
Note: If you plan to upgrade the ComputeDomain CRD and DRA driver, review
the k8s-dra-driver-gpu release
notes for more
information about how to upgrade. The upgrade process might require extra
steps.
Configure your workload manifest for RDMA and IMEX domain
Add a node affinity rule to schedule the workload on Arm nodes:
spec :
affinity :
nodeAffinity :
requiredDuringSchedulingIgnoredDuringExecution :
nodeSelectorTerms :
- matchExpressions :
- key : kubernetes.io/arch
operator : In
values :
- arm64
Add the following volume to the Pod specification:
spec :
volumes :
- name : library-dir-host
hostPath :
path : /home/kubernetes/bin/nvidia
Add the following volume mounts, environment variable, and resource to the
container that requests GPUs. Your workload container must request all four
GPUs:
containers :
- name : my-container
volumeMounts :
- name : library-dir-host
mountPath : /usr/local/nvidia
env :
- name : LD_LIBRARY_PATH
value : /usr/local/nvidia/lib64
resources :
limits :
nvidia.com/gpu : 4
Create the ComputeDomain resource for the workload:
apiVersion : resource.nvidia.com/v1beta1
kind : ComputeDomain
metadata :
name : a4x-max-compute-domain
spec :
numNodes : NUM_NODES
channel :
resourceClaimTemplate :
name : a4x-max-compute-domain-channel
Replace NUM_NODES with the number of nodes the
workload requires.
Create a ResourceClaimTemplate to allocate network resources by using DRANET
and request RDMA devices for your Pod:
apiVersion : resource.k8s.io/v1
kind : ResourceClaimTemplate
metadata :
name : all-mrdma
spec :
spec :
devices :
requests :
- name : req-mrdma
exactly :
deviceClassName : mrdma.google.com
allocationMode : ExactCount
count : 8
Specify the ResourceClaimTemplate that the Pod uses:
spec :
...
volumes :
...
containers :
- name : my-container
...
resources :
limits :
nvidia.com/gpu : 4
claims :
- name : compute-domain-channel
- name : rdma
...
resourceClaims :
- name : compute-domain-channel
resourceClaimTemplateName : a4x-max-compute-domain-channel
- name : rdma
resourceClaimTemplateName : all-mrdma
Ensure that the userspace libraries and the libnccl packages are installed in
the user container image:
apt update -y
apt install -y curl
export DOCA_URL = "https://linux.mellanox.com/public/repo/doca/3.1.0/ubuntu22.04/arm64-sbsa/"
BASE_URL = $( [ " ${ DOCA_PREPUBLISH :- false } " = "true" ] && echo https://doca-repo-prod.nvidia.com/public/repo/doca || echo https://linux.mellanox.com/public/repo/doca )
DOCA_SUFFIX = ${ DOCA_URL #*public/repo/doca/ } ; DOCA_URL = " $BASE_URL / $DOCA_SUFFIX "
curl $BASE_URL /GPG-KEY-Mellanox.pub | gpg --dearmor > /etc/apt/trusted.gpg.d/GPG-KEY-Mellanox.pub
echo "deb [signed-by=/etc/apt/trusted.gpg.d/GPG-KEY-Mellanox.pub] $DOCA_URL ./" > /etc/apt/sources.list.d/doca.list
apt update
apt -y install doca-ofed-userspace
# The installed libnccl2 is 2.27.7, to upgrade to 2.28.9 as we recommend
apt install --only-upgrade --allow-change-held-packages -y libnccl2 libnccl-dev
A completed Pod specification looks like the following:
apiVersion : resource.nvidia.com/v1beta1
kind : ComputeDomain
metadata :
name : a4x-max-compute-domain
spec :
numNodes : NUM_NODES
channel :
resourceClaimTemplate :
name : a4x-max-compute-domain-channel
---
apiVersion : apps/v1
kind : Pod
metadata :
name : my-pod
labels :
k8s-app : my-pod
spec :
...
affinity :
nodeAffinity :
requiredDuringSchedulingIgnoredDuringExecution :
nodeSelectorTerms :
- matchExpressions :
- key : kubernetes.io/arch
operator : In
values :
- arm64
volumes :
- name : library-dir-host
hostPath :
path : /home/kubernetes/bin/nvidia
hostNetwork : true
containers :
- name : my-container
volumeMounts :
- name : library-dir-host
mountPath : /usr/local/nvidia
env :
- name : LD_LIBRARY_PATH
value : /usr/local/nvidia/lib64
resources :
limits :
nvidia.com/gpu : 4
claims :
- name : compute-domain-channel
- name : rdma
...
resourceClaims :
- name : compute-domain-channel
resourceClaimTemplateName : a4x-max-compute-domain-channel
- name : rdma
resourceClaimTemplateName : all-mrdma
Test network performance
We recommended that you validate the functionality of provisioned clusters. To
do so, use NCCL/gIB tests, which are NVIDIA Collective Communications Library
(NCCL) tests that are optimized for the
Google environment.
For more information, see Run NCCL on custom GKE clusters that
use A4X Max .
What's next
To learn about scheduling workloads on your GKE clusters by
using TAS and Kueue, see Schedule GKE workloads with
Topology Aware
Scheduling .
To learn about managing common events relevant to GKE
clusters and AI workloads, see Manage AI-optimized GKE
clusters .
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
