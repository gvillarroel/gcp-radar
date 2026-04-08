---
title: "Create a custom AI-optimized GKE cluster which uses A4X \_|\_ AI Hypercomputer\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/create/gke-ai-hypercompute-custom-a4x
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/create/gke-ai-hypercompute-custom-a4x
  title: "Create a custom AI-optimized GKE cluster which uses A4X \_|\_ AI Hypercomputer\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Create a custom AI-optimized GKE cluster which uses A4X | AI Hypercomputer | Google Cloud Documentation
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
Before you begin Required roles
Obtain capacity
Requirements
Considerations for creating a cluster
Create an AI-optimized GKE cluster which uses A4X and GPUDirect RDMA Create VPCs and subnets
Create the GKE cluster with multi-networking
Create the GKE network objects
Create a workload policy
Create a node pool with A4X
Install the RDMA binary and configure NCCL
Install the NVIDIA Compute Domain CRD and DRA driver
Configure your workload manifest for multi-networking, RDMA, and the IMEX domain
Test network performance
What's next
Home
Documentation
Compute
AI Hypercomputer
Guides
Was this helpful?
Send feedback
Create a custom AI-optimized GKE cluster which uses A4X
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin Required roles
Obtain capacity
Requirements
Considerations for creating a cluster
Create an AI-optimized GKE cluster which uses A4X and GPUDirect RDMA Create VPCs and subnets
Create the GKE cluster with multi-networking
Create the GKE network objects
Create a workload policy
Create a node pool with A4X
Install the RDMA binary and configure NCCL
Install the NVIDIA Compute Domain CRD and DRA driver
Configure your workload manifest for multi-networking, RDMA, and the IMEX domain
Test network performance
What's next
This document shows you how to create an AI-optimized Google Kubernetes Engine (GKE)
cluster that uses A4X virtual machines (VMs) to support your AI and ML
workloads.
The A4X machine series lets you run
large-scale AI/ML clusters by using the NVIDIA Multi-Node NVLink (MNNVL)
system ,
a rack-scale solution which enables higher GPU power and performance. For more
information, see Cluster management
capabilities .
GKE provides a single platform surface to run a diverse set of
workloads for your organizations, reducing the operational burden of managing
multiple platforms. You can run workloads such as high-performance distributed
pre-training, model fine-tuning, model inference, application serving, and
supporting services.
In this document, you learn how to create a GKE cluster with the
Google Cloud CLI for maximum flexibility in configuring your cluster based on the
needs of your workload. Alternatively, you can choose to use
Cluster Toolkit to quickly deploy your cluster with default settings
that reflect best practices for many use cases. For more information, see
Create an AI-optimized GKE cluster with default
configuration . To create a
cluster which uses A4 or A3 Ultra—which can be used for running workloads with
or without GPUDirect
RDMA —see Create
a custom AI-optimized GKE
cluster which uses A4 or A3
Ultra .
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
Required roles
To get the permissions that
you need to create and manage a GKE cluster,
ask your administrator to grant you the
following IAM roles on the project:
Kubernetes Engine Admin ( roles/container.admin )
Cloud Build Editor ( roles/cloudbuild.builds.editor )
Compute Admin ( roles/compute.admin )
Project IAM Admin ( roles/resourcemanager.projectIamAdmin )
Service Account Admin ( roles/iam.serviceAccountAdmin )
Service Account User ( roles/iam.serviceAccountUser )
Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer )
Storage Admin ( roles/storage.admin )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Obtain capacity
You can obtain capacity for A4X VMs by creating a future reservation. For more
information about future reservations, see the Future reservations in
AI Hypercomputer column in the table for Choose a consumption
option .
To obtain capacity with a future reservation, see the Future reservations in
AI Hypercomputer row in the table for How to obtain
capacity .
Note: When you request A4X capacity, you obtain it in all capacity mode . This
mode is the only supported reservation operational mode for A4X machine types.
For more information about all capacity mode, see
Reservation operational mode .
Requirements
The following requirements apply to an AI-optimized GKE cluster
with A4X VMs:
For A4X, you must use one of the following versions:
For 1.33 or later, use GKE version 1.33.4-gke.1036000 or
later.
For 1.32, use GKE version 1.32.8-gke.1108000 or later.
These versions help to ensure that A4X uses the following:
R580, the minimum GPU driver version for A4X, which is enabled
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
GPUDirect RDMA and MNNVL, which are recommended to enable A4X node pools
to use the networking capabilities of A4X.
The GKE nodes must use a Container-Optimized OS node
image. Ubuntu and Windows node images are not supported.
Your GKE workload must use all available GPUs and your Pod
must use all available secondary NICs on a single GKE node.
Multiple Pods cannot share RDMA on a single GKE node.
You must use the reservation-bound
provisioning model to create clusters with A4X. Other provisioning models
are not supported.
GPUDirect RDMA is not compatible with NCCL Fast Socket or GPUDirect TCPX/TCPXO. Don't enable NCCL Fast Socket or install the TCPX/TCPXO plugin on clusters that use GPUDirect RDMA.
Considerations for creating a cluster
When you create a cluster, consider the following information:
Choose a cluster location :
Verify that you use a location which has availability for the machine
type that you choose. For more information, see
GPU locations .
For dense reservations, you can create a zonal cluster. In this case,
replace the --region flag with the
--zone= COMPUTE_ZONE flag, where
COMPUTE_ZONE is the zone of your control plane.
When you create node pools in a regional cluster, you can use the
--node-locations flag to specify the zones for your GKE
nodes.
Choose a driver version :
The driver version can be one of the following values:
default : install the default driver version for your GKE
node version. For more information about the requirements for default
driver versions, see the Requirements section.
latest : install the latest available driver version for your
GKE version. This option is available only for nodes that
use Container-Optimized OS.
disabled : skip automatic driver installation. You must
manually install a driver
after you create the node pool.
For more information about the default and latest GPU driver versions for
GKE node versions, see the table in the section
Manually install NVIDIA GPU drivers .
Choose a reservation affinity :
You can find information about your reservation, such as the name of your
reservation or the name of a specific block in your reservation. To find
these values, see View future reservation
requests .
The --reservation-affinity flag can take the values of specific or
any . However, for high performance distributed AI workloads, we recommend
that you use a specific reservation.
When you use a specific reservation, including shared
reservations ,
specify the value of the --reservation flag in the following format:
projects/ PROJECT_ID /reservations/ RESERVATION_NAME /reservationBlocks/ BLOCK_NAME
Replace the following values:
PROJECT_ID : your Google Cloud project ID.
RESERVATION_NAME : the name of your reservation.
BLOCK_NAME : the name of a specific block
within the reservation.
To use a sub-block targeted reservation so that VMs are placed on a single
sub-block within the BLOCK_NAME , add the
following to the end of the path:
/reservationSubBlocks/ SUB_BLOCK_NAME
Replace SUB_BLOCK_NAME with the name of the
sub-block.
Tip: If the reservation is located in the current project, you can omit
projects/ PROJECT_ID /reservations/ from the
reservation value.
Create an AI-optimized GKE cluster which uses A4X and GPUDirect RDMA
For distributed AI workloads, multiple GPU nodes are often linked together to
work as a single computer. A4X is an exascale platform based on NVIDIA GB200
NVL72 rack-scale architecture. This machine type enables scaling and
collaboration across multiple GPUs by delivering a high-performance cloud
experience for AI workloads. For more information about the network architecture
for A4X, including the network bandwidth and NIC arrangement, see A4X machine
types .
To create your GKE Standard clusters with A4X and with
GPUDirect RDMA, complete the following steps, which are described in the next
sections:
Create VPCs and subnets
Create the GKE cluster with multi-networking
Create the GKE network objects
Create a workload policy
Create a node pool with A4X
Install the RDMA binary and configure NCCL
Install the NVIDIA Compute Domain CRD and DRA driver
Create VPCs and subnets
A4X VMs have the following configuration:
Four NVIDIA B200 GPUs per virtual machine connected with
NVLink
Two Arm-based NVIDIA Grace CPUs
Four 400 Gbps CX-7 network interface cards (NICs) for GPU-to-GPU
networking
Two 200 Gbps Google Titanium network interface cards (NICs)
for external services
AI and ML workloads, such as distributed training, require powerful acceleration
to optimize performance by reducing job completion times. For workloads that
require high performance, high throughput, and low latency, GPUDirect RDMA
reduces the network hops that are required to transfer payloads to and from
GPUs. This approach more efficiently uses the network bandwidth that's
available.
One of the Google Titanium NICs that is associated with the CPU uses
the default network in GKE, so you don't have to create a new VPC
for this NIC as long as you have enough IP address ranges for the default
network.
You can create one VPC for the second CPU Titanium NIC (gVNIC) and
another VPC for the four CX-7 RDMA NICs by using the following commands.
To maximize network bandwidth, the command to create a VPC for the additional
GVNIC sets the maximum transmission unit (MTU) to 8896. The RDMA VPC defaults to
the recommended setting of 8896. For more information, see MTU settings and GPU
machine types .
Set environment variables to match your deployment:
export REGION=" COMPUTE_REGION "
export ZONE=" COMPUTE_ZONE "
export PROJECT=" PROJECT_ID "
export GVNIC_NETWORK_PREFIX=" GVNIC_NETWORK_PREFIX "
export RDMA_NETWORK_PREFIX=" RDMA_NETWORK_PREFIX "
Replace the following variables:
COMPUTE_REGION : the region of your cluster.
COMPUTE_ZONE : the zone of your node pool.
PROJECT_ID : your Google Cloud project ID.
GVNIC_NETWORK_PREFIX : the GVNIC network prefix (for
example, a4x-gvnic ).
RDMA_NETWORK_PREFIX : the RDMA network prefix (for
example, a4x-rdma ).
Create two VPC networks:
# Create a VPC for the additional GVNIC
gcloud compute --project = ${ PROJECT } \
networks create \
GVNIC_NETWORK_PREFIX -net \
--subnet-mode = custom \
--mtu = 8896
gcloud compute --project = ${ PROJECT } \
networks subnets create \
GVNIC_NETWORK_PREFIX -sub \
--network = GVNIC_NETWORK_PREFIX -net \
--region = ${ REGION } \
--range = 192 .168.0.0/24
gcloud compute --project = ${ PROJECT } \
firewall-rules create \
GVNIC_NETWORK_PREFIX -internal \
--network = GVNIC_NETWORK_PREFIX -net \
--action = ALLOW \
--rules = tcp:0-65535,udp:0-65535,icmp \
--source-ranges = 192 .168.0.0/16
# Create HPC VPC for the RDMA NICs with 4 subnets.
gcloud compute --project = ${ PROJECT } \
networks create RDMA_NETWORK_PREFIX -net \
--network-profile = ${ ZONE } -vpc-roce \
--subnet-mode = custom
# Create subnets for the HPC VPC.
for N in $( seq 0 3 ) ; do
gcloud compute --project = ${ PROJECT } \
networks subnets create \
RDMA_NETWORK_PREFIX -sub- $N \
--network = RDMA_NETWORK_PREFIX -net \
--region = ${ REGION } \
--range = 192 .168. $(( N + 1 )) .0/24 & # offset to avoid overlap with gvnics
done
Create the GKE cluster with multi-networking
Create a GKE Standard cluster with multi-networking:
gcloud container clusters create CLUSTER_NAME \
--enable-dataplane-v2 --enable-ip-alias --location = COMPUTE_REGION \
--enable-multi-networking --cluster-version = CLUSTER_VERSION \
--enable-kubernetes-unstable-apis = resource.k8s.io/v1beta1/deviceclasses,resource.k8s.io/v1beta1/resourceclaims,resource.k8s.io/v1beta1/resourceclaimtemplates,resource.k8s.io/v1beta1/resourceslices \
[ --services-ipv4-cidr = SERVICE_CIDR \
--cluster-ipv4-cidr = POD_CIDR ]
When preparing this command, do the following:
Remove the --enable-kubernetes-unstable-apis flag, which is used to enable
DRA, when you create a cluster running GKE version 1.34 or
later. This flag is only necessary when you create a cluster running version
1.32 or 1.33. When you enable a beta API, you must eventually migrate from
the beta API when the beta API is deprecated and removed with later
Kubernetes minor versions. For more information, see Beta API
deprecations .
Replace the following:
CLUSTER_NAME : the name of your cluster.
CLUSTER_VERSION : the version of your new
cluster. For more information about which version of
GKE supports your configuration, see the
Requirements in this document.
COMPUTE_REGION : the name of the compute
region.
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
Create the GKE network objects
You must configure the VPC networks created in the previous section through
GKE network parameter sets. Specifically, the second CPU
Titanium NIC (gVNIC) needs to be configured in NetDevice mode and each
of the four CX-7 RDMA NICs need to be configured in RDMA mode.
This command uses the following names:
CPU Titanium NIC (gVNIC) VPC is named
GVNIC_NETWORK_PREFIX -net with the subnet named
GVNIC_NETWORK_PREFIX -sub
CX-7 RDMA NICs VPC is named
RDMA_NETWORK_PREFIX -net with the subnets named
RDMA_NETWORK_PREFIX -sub-[0…3]
Create the GKE network objects by running the following command:
kubectl apply -f - <<EOF
apiVersion: networking.gke.io/v1
kind: GKENetworkParamSet
metadata:
name: gvnic-1
spec:
vpc: GVNIC_NETWORK_PREFIX -net
vpcSubnet: GVNIC_NETWORK_PREFIX -sub
deviceMode: NetDevice
---
apiVersion: networking.gke.io/v1
kind: Network
metadata:
name: gvnic-1
spec:
type: "Device"
parametersRef:
group: networking.gke.io
kind: GKENetworkParamSet
name: gvnic-1
---
apiVersion: networking.gke.io/v1
kind: GKENetworkParamSet
metadata:
name: rdma-0
spec:
vpc: RDMA_NETWORK_PREFIX -net
vpcSubnet: RDMA_NETWORK_PREFIX -sub-0
deviceMode: RDMA
---
apiVersion: networking.gke.io/v1
kind: Network
metadata:
name: rdma-0
spec:
type: "Device"
parametersRef:
group: networking.gke.io
kind: GKENetworkParamSet
name: rdma-0
---
apiVersion: networking.gke.io/v1
kind: GKENetworkParamSet
metadata:
name: rdma-1
spec:
vpc: RDMA_NETWORK_PREFIX -net
vpcSubnet: RDMA_NETWORK_PREFIX -sub-1
deviceMode: RDMA
---
apiVersion: networking.gke.io/v1
kind: Network
metadata:
name: rdma-1
spec:
type: "Device"
parametersRef:
group: networking.gke.io
kind: GKENetworkParamSet
name: rdma-1
---
apiVersion: networking.gke.io/v1
kind: GKENetworkParamSet
metadata:
name: rdma-2
spec:
vpc: RDMA_NETWORK_PREFIX -net
vpcSubnet: RDMA_NETWORK_PREFIX -sub-2
deviceMode: RDMA
---
apiVersion: networking.gke.io/v1
kind: Network
metadata:
name: rdma-2
spec:
type: "Device"
parametersRef:
group: networking.gke.io
kind: GKENetworkParamSet
name: rdma-2
---
apiVersion: networking.gke.io/v1
kind: GKENetworkParamSet
metadata:
name: rdma-3
spec:
vpc: RDMA_NETWORK_PREFIX -net
vpcSubnet: RDMA_NETWORK_PREFIX -sub-3
deviceMode: RDMA
---
apiVersion: networking.gke.io/v1
kind: Network
metadata:
name: rdma-3
spec:
type: "Device"
parametersRef:
group: networking.gke.io
kind: GKENetworkParamSet
name: rdma-3
EOF
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
WORKLOAD_POLICY_NAME : the name of your workload policy.
PROJECT : the name of your project.
COMPUTE_REGION : the name of the compute region.
Create a node pool with A4X
We recommend that you create a node pool which uses the GKE GPU
device plugin. This plugin provides GKE-managed GPU resource
management. The approach has the following benefits:
Ease of deployment and upgrades
Driver auto-installation
GKE-managed GPU features, such as metrics and partitioned GPUs
Essential security vulnerability fixes
Alternatively, you can use the NVIDIA GPU Operator, if required by your use
case. For more information, see Why use the NVIDIA GPU
Operator? .
Important:
When you create an A4X node pool with a 1x72 topology,
GKE allocates
an entire 18-instance sub-block to that pool. If you create fewer than 18 nodes, the unused
instances in that sub-block remain idle and are unavailable for other node pools. However, it's
possible to provision these unused instances by resizing the node pool. To maximize resource
efficiency, we recommend that you create exactly 18 nodes in a pool.
Create an A4X node pool with the GKE GPU device plugin
Create an A4X node pool which uses the GKE GPU device plugin:
gcloud container node-pools create NODE_POOL_NAME \
--location COMPUTE_REGION \
--node-locations COMPUTE_ZONE \
--cluster CLUSTER_NAME \
--num-nodes = NODE_COUNT \
--machine-type MACHINE_TYPE \
--accelerator type = nvidia-gb200,count = 4 ,gpu-driver-version = DRIVER_VERSION \
--additional-node-network network = GVNIC_NETWORK_PREFIX -net,subnetwork = GVNIC_NETWORK_PREFIX -sub \
--additional-node-network network = RDMA_NETWORK_PREFIX -net,subnetwork = RDMA_NETWORK_PREFIX -sub-0 \
--additional-node-network network = RDMA_NETWORK_PREFIX -net,subnetwork = RDMA_NETWORK_PREFIX -sub-1 \
--additional-node-network network = RDMA_NETWORK_PREFIX -net,subnetwork = RDMA_NETWORK_PREFIX -sub-2 \
--additional-node-network network = RDMA_NETWORK_PREFIX -net,subnetwork = RDMA_NETWORK_PREFIX -sub-3 \
--scopes "https://www.googleapis.com/auth/cloud-platform" \
--reservation-affinity = specific \
--reservation = RESERVATION_NAME /reservationBlocks/ BLOCK_NAME \
--placement-policy = WORKLOAD_POLICY_NAME
Replace the following:
NODE_POOL_NAME : the name of the node pool.
COMPUTE_REGION : the region of your cluster.
COMPUTE_ZONE : the zone of your node pool.
CLUSTER_NAME : the name of your cluster.
NODE_COUNT : the number of nodes for the node pool,
which must be 18 nodes or less. We recommend using 18 nodes to obtain the GPU
topology of 1x72 in one sub-block using an NVLink domain.
MACHINE_TYPE : a4x-highgpu-4g or
a4x-highgpu-4g-nolssd , depending on if you want Local SSDs.
DRIVER_VERSION : the NVIDIA driver version to
install. It can be one of the following values: default , latest ,
or disabled .
RESERVATION_NAME : the name of your
reservation. To find this value, see
View future reservation requests .
BLOCK_NAME : the name of a specific block
within the reservation. To find this value, see
View future reservation requests .
WORKLOAD_POLICY_NAME : the name of the workload
policy you created previously.
Create an A4X node pool with the NVIDIA GPU Operator
Alternatively, to use the NVIDIA GPU Operator, do the following steps:
Run the gcloud container node-pools create command from the previous
section with the following changes:
Change gpu-driver-version=latest to gpu-driver-version=disabled .
This modification skips automatic GPU driver installation because it's
not supported when using the NVIDIA GPU Operator.
Set --node-labels="gke-no-default-nvidia-gpu-device-plugin=true" to
disable the GKE managed GPU device plugin Daemonset.
Apply the GKE GPU driver installer DaemonSet manifest. This
manifest deploys a GPU driver installer Pod on each A4X node:
kubectl apply -f https://raw.githubusercontent.com/GoogleCloudPlatform/container-engine-accelerators/refs/heads/master/nvidia-driver-installer/cos/daemonset-preloaded.yaml
Manage the GPU Stack with the NVIDIA GPU Operator
on Google Kubernetes Engine (GKE) :
In the section to create and set up the GPU node
pool , follow
the instructions starting from the step to get authentication credentials.
Install the NVIDIA GPU
Operator .
Complete all the steps, but replace the command in the referenced section
that installs the NVIDIA GPU Operator using Helm. Use the following
command instead:
helm install --wait --generate-name \
-n gpu-operator \
nvidia/gpu-operator \
--version = "25.3.0" \
-f < ( cat <<EOF
hostPaths:
driverInstallDir: /home/kubernetes/bin/nvidia
toolkit:
installDir: /home/kubernetes/bin/nvidia
cdi:
enabled: true
default: true
driver:
enabled: false
daemonsets:
tolerations:
- key: nvidia.com/gpu
operator: Equal
value: present
effect: NoSchedule
- key: kubernetes.io/arch
operator: Equal
value: arm64
effect: NoSchedule
node-feature-discovery:
worker:
tolerations:
- key: kubernetes.io/arch
operator: Equal
value: arm64
effect: NoSchedule
- key: "node-role.kubernetes.io/master"
operator: "Equal"
value: ""
effect: "NoSchedule"
- key: "node-role.kubernetes.io/control-plane"
operator: "Equal"
value: ""
effect: "NoSchedule"
- key: nvidia.com/gpu
operator: Exists
effect: NoSchedule
EOF
)
Install the RDMA binary and configure NCCL
Apply the following DaemonSet to install the RDMA binaries and the NCCL library
on each node. On each underlying VM, the RDMA binaries are installed in the
/home/kubernetes/bin/gib directory, and the NCCL library is installed in the
/home/kubernetes/bin/nvidia/lib64 directory.
kubectl apply -f https://raw.githubusercontent.com/GoogleCloudPlatform/container-engine-accelerators/master/gpudirect-rdma/nccl-rdma-installer-a4x.yaml
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
the Helm CLI by running this command:
curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3 \
&& chmod 700 get_helm.sh \
&& ./get_helm.sh
Add the NVIDIA Helm repository:
helm repo add nvidia https://helm.ngc.nvidia.com/nvidia \
&& helm repo update
Create a ResourceQuota for the DRA Driver:
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
2 times the number of A4X nodes in the cluster plus 1. For example, you
must set the variable to at least 37 if you have 18 A4X nodes in your
cluster.
Install the DRA driver:
helm install nvidia-dra-driver-gpu nvidia/nvidia-dra-driver-gpu \
--version = " DRA_DRIVER_VERSION " \
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
- nvidia-gb200
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
Replace DRA_DRIVER_VERSION with version 25.3.1 or
later. You can find a list of available NVIDIA DRA driver versions by
running the helm search repo nvidia/nvidia-dra-driver-gpu --versions
command. Or, find an available version by reviewing the
GitHub release notes .
Configure your workload manifest for multi-networking, RDMA, and the IMEX domain
Add the following annotations to the Pod metadata:
metadata :
annotations :
networking.gke.io/default-interface : 'eth0'
networking.gke.io/interfaces : |
[
{"interfaceName":"eth0","network":"default"},
{"interfaceName":"eth2","network":"rdma-0"},
{"interfaceName":"eth3","network":"rdma-1"},
{"interfaceName":"eth4","network":"rdma-2"},
{"interfaceName":"eth5","network":"rdma-3"}
]
Add a node affinity rule to schedule on Arm nodes:
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
For more information, see Schedule workload to a single architecture .
Add the following volumes to the Pod specification:
spec :
volumes :
- name : library-dir-host
hostPath :
path : /home/kubernetes/bin/nvidia
- name : gib
hostPath :
path : /home/kubernetes/bin/gib
Add the following volume mounts, environment variable, and resource to the
container that requests GPUs. Your workload container must request all four
GPUs:
containers :
- name : my-container
volumeMounts :
- name : library-dir-host
mountPath : /usr/local/nvidia
- name : gib
mountPath : /usr/local/gib
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
name : a4x-compute-domain
spec :
numNodes : NUM_NODES
channel :
resourceClaimTemplate :
name : a4x-compute-domain-channel
Replace NUM_NODES with the number of nodes the
workload requires.
Specify the ResourceClaimTemplate that the Pod will use:
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
...
resourceClaims :
- name : compute-domain-channel
resourceClaimTemplateName : a4x-compute-domain-channel
Set all the required environment variables to configure NCCL. Use the
following shell script from the workload container:
source /usr/local/gib/scripts/set_nccl_env.sh
A completed Pod specification looks like the following:
apiVersion : resource.nvidia.com/v1beta1
kind : ComputeDomain
metadata :
name : a4x-compute-domain
spec :
numNodes : NUM_NODES
channel :
resourceClaimTemplate :
name : a4x-compute-domain-channel
---
apiVersion : apps/v1
kind : Pod
metadata :
name : my-pod
labels :
k8s-app : my-pod
annotations :
networking.gke.io/default-interface : 'eth0'
networking.gke.io/interfaces : |
[
{"interfaceName":"eth0","network":"default"},
{"interfaceName":"eth2","network":"rdma-0"},
{"interfaceName":"eth3","network":"rdma-1"},
{"interfaceName":"eth4","network":"rdma-2"},
{"interfaceName":"eth5","network":"rdma-3"},
]
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
- name : gib
hostPath :
path : /home/kubernetes/bin/gib
containers :
- name : my-container
volumeMounts :
- name : library-dir-host
mountPath : /usr/local/nvidia
- name : gib
mountPath : /usr/local/gib
env :
- name : LD_LIBRARY_PATH
value : /usr/local/nvidia/lib64
resources :
limits :
nvidia.com/gpu : 4
claims :
- name : compute-domain-channel
...
resourceClaims :
- name : compute-domain-channel
resourceClaimTemplateName : a4x-compute-domain-channel
Test network performance
We recommended that you validate the functionality of provisioned clusters. To do so, use NCCL/gIB tests , which are NVIDIA Collective Communications Library (NCCL) tests that are optimized for the Google environment.
What's next
To learn about scheduling workloads on your GKE clusters
by using TAS and Kueue, see Schedule GKE workloads with
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
