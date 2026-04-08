---
title: "Create a custom AI-optimized GKE cluster which uses A4 or A3 Ultra \_|\_ AI\
  \ Hypercomputer \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/create/gke-ai-hypercompute-custom
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/create/gke-ai-hypercompute-custom
  title: "Create a custom AI-optimized GKE cluster which uses A4 or A3 Ultra \_|\_\
    \ AI Hypercomputer \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Create a custom AI-optimized GKE cluster which uses A4 or A3 Ultra | AI Hypercomputer | Google Cloud Documentation
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
Cluster configuration options with GPUDirect RDMA
Before you begin Required roles
Choose a consumption option and obtain capacity
Requirements
Create an AI-optimized GKE cluster Considerations for creating a cluster
Create a cluster without GPUDirect RDMA
Create a cluster with GPUDirect RDMA
Test network performance for clusters that use GPUDirect RDMA
What's next
Home
Documentation
Compute
AI Hypercomputer
Guides
Was this helpful?
Send feedback
Create a custom AI-optimized GKE cluster which uses A4 or A3 Ultra
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Cluster configuration options with GPUDirect RDMA
Before you begin Required roles
Choose a consumption option and obtain capacity
Requirements
Create an AI-optimized GKE cluster Considerations for creating a cluster
Create a cluster without GPUDirect RDMA
Create a cluster with GPUDirect RDMA
Test network performance for clusters that use GPUDirect RDMA
What's next
This page shows you how to create an AI-optimized Google Kubernetes Engine (GKE)
cluster that uses A4 or A3 Ultra virtual machines (VMs) to support your AI and
ML workloads. For A4X, see
Create a custom AI-optimized GKE cluster which uses A4X .
The A4 and A3 Ultra machine series are designed to enable you to run
large-scale AI/ML clusters with features such as targeted workload
placement, advanced cluster maintenance controls, and topology-aware scheduling.
For more information, see
Cluster management overview .
GKE provides a single platform surface to run a diverse set of
workloads for your organizations, reducing the operational burden of managing
multiple platforms. You can run workloads such as high-performance distributed
pre-training, model fine-tuning, model inference, application serving, and
supporting services.
On this page, you learn how to create a GKE cluster with the
Google Cloud CLI for maximum flexibility in configuring your cluster based on the
needs of your workload. Alternatively, you can choose to use
Cluster Toolkit to quickly deploy your cluster with default settings
that reflect best practices for many use cases. For instructions on how to do
this, see
Create an AI-optimized GKE cluster with default configuration .
Cluster configuration options with GPUDirect RDMA
To create your cluster with the Google Cloud CLI, you can choose one of the
following cluster configuration options:
If you don't plan to run distributed AI workloads : create a
GKE cluster without using GPUDirect RDMA.
If you plan to run distributed AI workloads : create a GKE
cluster with GPUDirect RDMA.
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
Choose a consumption option and obtain capacity
Choose a consumption option . Make your choice based on how you want to
get and use GPU resources. For more information, see Choose a consumption
option .
For GKE, consider the following additional information when
you choose a consumption option:
For more information about flex-start
( Preview ) and GKE, see
About GPU obtainability with
flex-start .
Flex-start uses best-effort compact placement. To examine your topology, see
View the physical topology of nodes in your GKE cluster .
You can only get topology information when using Spot VMs if you
configure compact placement .
Obtain capacity . Learn how to
obtain capacity for your consumption
option.
Requirements
The following requirements apply to an AI-optimized GKE cluster:
To use the flex-start provisioning model, you must use GKE
version 1.32.2-gke.1652000 or later.
Ensure you use the minimum GPU driver version, depending on the machine
type:
A4 : the B200 GPUs in A4 VMs require a minimum of the R570 GPU driver
version. GKE, by default, automatically installs this
driver version on all A4 nodes that run the required minimum version for
A4, which is 1.32.1-gke.1729000 or later.
A3 Ultra : the H200 GPUs in A3 Ultra VMs require a minimum of the
R550 GPU driver version, which is available in GKE
version 1.31 as the latest driver version. For A3 Ultra VMs, you must
set the value of the gpu-driver-version=latest field with
GKE version 1.31. For GKE version
1.31.5-gke.1169000 or later, GKE automatically installs
R550 GPU driver versions on A3 Ultra nodes by default, including when
you omit the gpu-driver-version flag.
To use GPUDirect RDMA, the following additional requirements apply:
Use the following minimum versions, depending on the machine type:
A4 : use version 1.32.2-gke.1475000 or later.
A3 Ultra : use version 1.31.4-gke.1183000 or later.
The GKE nodes must use a Container-Optimized OS
node image. Ubuntu and Windows node images are not supported.
Your GKE workload must use all available GPUs and your
Pod must use all available secondary network interface cards (NICs) on
a single GKE node. Multiple Pods can't share RDMA on a
single GKE node.
This setup runs a NCCL test. To run this NCCL test, you must have a
minimum VM quota of 2 (that is, 16 GPUs if you use the a4-highgpu-8g
or a3-ultragpu-8g machine types).
GPUDirect RDMA is not compatible with NCCL Fast Socket or GPUDirect TCPX/TCPXO. Don't enable NCCL Fast Socket or install the TCPX/TCPXO plugin on clusters that use GPUDirect RDMA.
Ensure that you use a location which has availability for the machine type
that you choose. For more information, see
GPU locations .
Create an AI-optimized GKE cluster
Follow the instructions in this section to create a GKE cluster
that meets the requirements for AI-optimized GKE clusters. You
can choose between creating a cluster with or without GPUDirect RDMA.
Considerations for creating a cluster
When you create a cluster, consider the following information:
Choose a cluster location :
Ensure that you use a location which has availability for the machine
type that you choose. For more information, see
GPU locations .
For dense reservations, you can create a zonal cluster. In this case,
replace the --region flag with the
--zone= COMPUTE_ZONE flag, where
COMPUTE_ZONE is the zone of your control plane.
For workloads that run on more than 1,000 nodes and that require low network latency
between nodes, you can create a regional cluster.
To physically colocate your performance-sensitive nodes, create
your GPU node pools within a single zone by using the --node-locations flag.
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
GKE node versions, see
Manually install NVIDIA GPU drivers .
Choose a reservation affinity :
You can find information about your reservation, such as the name of your
reservation or the name of a specific block in your reservation. To find
these values, see View future reservation
requests .
The --reservation-affinity flag can take the values of specific or
any . However, for high performance distributed AI workloads, we recommend
that you use a specific reservation.
When you use a specific reservation, including
shared reservations ,
specify the value of the --reservation flag in the following format:
projects/ PROJECT_ID /reservations/ RESERVATION_NAME /reservationBlocks/ BLOCK_NAME
Replace the following:
PROJECT_ID : your Google Cloud project ID.
RESERVATION_NAME : the name of your reservation.
BLOCK_NAME : the name of a specific block
within the reservation.
Tip: If the reservation is located in the current project, you can omit
projects/ PROJECT_ID /reservations/ from the
reservation value.
Create a cluster without GPUDirect RDMA
To create a cluster without GPUDirect RDMA, use the following instructions to
create a cluster with a CPU-based default node pool and additional node pools
with GPUs. This approach allows the default node pool to run other services.
Create the cluster:
gcloud container clusters create CLUSTER_NAME \
--cluster-version = CLUSTER_VERSION \
--region = COMPUTE_REGION
Replace the following:
CLUSTER_NAME : the name of your new cluster.
CLUSTER_VERSION : the version of your new cluster.
For more information about which version of GKE supports
your configuration, see the Requirements section.
COMPUTE_REGION : the region of your new cluster.
If you plan to create a zonal cluster , use the --zone flag instead of
the --region flag, for example:
--zone= COMPUTE_ZONE .
Replace COMPUTE_ZONE with the zone of the control plane.
Create the GPU-based node pool with one of the following commands. The
command that you need to run depends on the
consumption option that you
use for your deployment. Select the tab that corresponds to your
consumption option's provisioning model.
Reservation-bound Flex-start Spot
More
For reservation-bound provisioning, run the following command:
gcloud container node-pools create NODE_POOL_NAME \
--region COMPUTE_REGION --cluster CLUSTER_NAME \
--node-locations COMPUTE_ZONE \
--accelerator type = GPU_TYPE ,count = AMOUNT ,gpu-driver-version = DRIVER_VERSION \
--machine-type MACHINE_TYPE \
--num-nodes = NUM_NODES \
--reservation-affinity = specific \
--reservation = RESERVATION_NAME /reservationBlocks/ BLOCK_NAME
Replace the following:
NODE_POOL_NAME : the name of the node pool.
COMPUTE_REGION : the region of your new
cluster.
CLUSTER_NAME : the name of your new cluster.
COMPUTE_ZONE : the zone of your node pool.
GPU_TYPE : the type of GPU
accelerator :
A4 VMs : enter nvidia-b200 .
A3 Ultra VMs : enter nvidia-h200-141gb .
AMOUNT : the number of GPUs to attach to
nodes in the node pool. For example, for both a4-highgpu-8g and
a3-ultragpu-8g VMs, the amount of GPUs is 8 .
DRIVER_VERSION : the NVIDIA driver version to
install. It can be one of the following values: default , latest ,
or disabled .
MACHINE_TYPE : the Compute Engine machine
type for the nodes. For example, use a4-highgpu-8g for A4 VMs, and
a3-ultragpu-8g for A3 Ultra VMs.
NUM_NODES : the number of nodes for the node
pool.
RESERVATION_NAME : the name of your
reservation. To find this value, see View future reservation
requests .
BLOCK_NAME : the name of a specific block
within the reservation. To find this value, see View future
reservation
requests .
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
For flex-start provisioning, run the following command:
gcloud container node-pools create NODE_POOL_NAME \
--region COMPUTE_REGION --cluster CLUSTER_NAME \
--node-locations COMPUTE_ZONE \
--accelerator type = GPU_TYPE ,count = AMOUNT ,gpu-driver-version = DRIVER_VERSION \
--machine-type MACHINE_TYPE \
--flex-start --enable-autoscaling --num-nodes = 0 \
--total-max-nodes TOTAL_MAX_NODES \
--no-enable-autorepair --location-policy = ANY \
--reservation-affinity = none [ \
--enable-queued-provisioning ]
Replace the following:
NODE_POOL_NAME : the name of the node pool.
COMPUTE_REGION : the region of your new
cluster.
CLUSTER_NAME : the name of your new cluster.
COMPUTE_ZONE : the zone of your node pool.
GPU_TYPE : the type of GPU
accelerator :
A4 VMs : enter nvidia-b200 .
A3 Ultra VMs : enter nvidia-h200-141gb .
AMOUNT : the number of GPUs to attach to
nodes in the node pool. For example, for both a4-highgpu-8g and
a3-ultragpu-8g VMs, the amount of GPUs is 8 .
DRIVER_VERSION : the NVIDIA driver version to
install. It can be one of the following values: default , latest ,
or disabled .
MACHINE_TYPE : the Compute Engine machine
type for the nodes. For example, use a4-highgpu-8g for A4 VMs, and
a3-ultragpu-8g for A3 Ultra VMs.
TOTAL_MAX_NODES : the maximum number of nodes
to automatically scale for the entire node pool.
If you want to use flex-start with queued provisioning, include the
--enable-queued-provisioning flag.
For more information about using flex-start, see
Run large-scale workload with flex-start with queued provisioning .
For spot provisioning, run the following command:
gcloud container node-pools create NODE_POOL_NAME \
--region COMPUTE_REGION --cluster CLUSTER_NAME \
--node-locations COMPUTE_ZONE \
--accelerator type = GPU_TYPE ,count = AMOUNT ,gpu-driver-version = DRIVER_VERSION \
--machine-type MACHINE_TYPE \
--num-nodes = NUM_NODES \
--spot
Replace the following:
NODE_POOL_NAME : the name of the node pool.
COMPUTE_REGION : the region of your new
cluster.
CLUSTER_NAME : the name of your new cluster.
COMPUTE_ZONE : the zone of your node pool.
GPU_TYPE : the type of GPU
accelerator :
A4 VMs : enter nvidia-b200 .
A3 Ultra VMs : enter nvidia-h200-141gb .
AMOUNT : the number of GPUs to attach to
nodes in the node pool. For example, for both a4-highgpu-8g and
a3-ultragpu-8g VMs, the amount of GPUs is 8 .
DRIVER_VERSION : the NVIDIA driver version to
install. It can be one of the following values: default , latest ,
or disabled .
MACHINE_TYPE : the Compute Engine machine
type for the nodes. For example, use a4-highgpu-8g for A4 VMs, and
a3-ultragpu-8g for A3 Ultra VMs.
NUM_NODES : the number of nodes for the node
pool.
For more information about creating clusters with Spot VMs, see
Run fault-tolerant workloads at lower costs with Spot VMs .
Connect to your cluster, so that you can run the kubectl commands in the
next sections:
gcloud container clusters get-credentials CLUSTER_NAME --location = COMPUTE_REGION
Replace the following:
CLUSTER_NAME : the name of your cluster.
COMPUTE_REGION : the name of the compute region.
For more information, see Install kubectl and configure cluster access .
Create a cluster with GPUDirect RDMA
For distributed AI workloads, multiple GPU nodes are often linked together to
work as a single computer. The A4 VMs and A3 Ultra VMs come with the
Titanium ML network adapter, which is built on NVIDIA ConnectX-7 (CX7)
NICs. Both A4 VMs and A3 Ultra VMs deliver non-blocking 3.2 Tbps of inter-node
GPU-to-GPU traffic by using RDMA over Converged Ethernet (RoCE). RoCE enables
scaling and collaboration across multiple GPUs by delivering a high-performance
cloud experience for AI workloads.
For more information about how to create your GKE clusters
by using the Google Cloud CLI and GPUDirect TCPX (A3 High VMs) or TCPXO (A3 Mega VMs), see
maximize GPU network bandwidth in Autopilot mode clusters ,
or
maximize GPU network bandwidth in Standard mode clusters .
To create your GKE clusters in Autopilot or
Standard mode with GPUDirect RDMA, complete the following steps, which
are described in the next sections:
Create VPCs and subnets
Create the GKE cluster with multi-networking
Create GKE network objects
Install the RDMA binary and configure NCCL
Deploy and run a NCCL test
Configure your Pod manifests for GPUDirect-RDMA
Create VPCs and subnets
Both A4 VMs and A3 Ultra VMs have the following configuration:
Eight NVIDIA B200 (A4) or H200 (A3 Ultra) GPUs per virtual machine connected
with NVLink
Two Intel Emerald Rapids CPUs
Eight 400 Gbps CX-7 NICs for GPU-to-GPU networking
Two 200 Gbps Google Titanium NICs for external services
AI and ML workloads, such as distributed training, require powerful acceleration
to optimize performance by reducing job completion times. For workloads that require high performance, high throughput, and low latency, GPUDirect RDMA reduces the network hops that are required to transfer payloads to and from GPUs, which more efficiently uses the network bandwidth that's available.
GPUDirect RDMA is designed to significantly improve throughput at scale compared
to GPUs that don't use GPUDirect.
One of the Google Titanium NICs that's associated with the CPU uses the
default network in GKE. You don't need to create a new VPC for
this NIC if you have enough IP address ranges for the default network.
You can create one VPC for the second CPU Titanium NIC (gVNIC) and
another VPC for the eight CX-7 RDMA NICs by using these commands.
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
GVNIC_NETWORK_PREFIX : either a4high-gvnic for A4
VMs, or a3ultra-gvnic for A3 Ultra VMs.
RDMA_NETWORK_PREFIX : either a4high-rdma for A4
VMs, or a3ultra-rdma for A3 Ultra VMs.
Create two VPC networks:
# Create a VPC for the additional Google Titanium CPU NIC
gcloud compute --project = ${ PROJECT } \
networks create \
${ GVNIC_NETWORK_PREFIX } -net \
--subnet-mode = custom
gcloud compute --project = ${ PROJECT } \
networks subnets create \
${ GVNIC_NETWORK_PREFIX } -sub \
--network = ${ GVNIC_NETWORK_PREFIX } -net \
--region = ${ REGION } \
--range = 192 .168.0.0/24
gcloud compute --project = ${ PROJECT } \
firewall-rules create \
${ GVNIC_NETWORK_PREFIX } -internal \
--network = ${ GVNIC_NETWORK_PREFIX } -net \
--action = ALLOW \
--rules = tcp:0-65535,udp:0-65535,icmp \
--source-ranges = 192 .168.0.0/16
# Create HPC VPC for the RDMA NICs with 8 subnets.
gcloud beta compute --project = ${ PROJECT } \
networks create ${ RDMA_NETWORK_PREFIX } -net \
--network-profile = ${ ZONE } -vpc-roce \
--subnet-mode = custom
# Create subnets for the HPC VPC.
for N in $( seq 0 7 ) ; do
gcloud compute --project = ${ PROJECT } \
networks subnets create \
${ RDMA_NETWORK_PREFIX } -sub- $N \
--network = ${ RDMA_NETWORK_PREFIX } -net \
--region = ${ REGION } \
--range = 192 .168. $(( N + 1 )) .0/24 & # offset to avoid overlap with gvnics
done
Create the GKE cluster with multi-networking
Autopilot Standard
More
Create a GKE Autopilot cluster with multi-networking:
gcloud container clusters create-auto CLUSTER_NAME \
--enable-multi-networking \
--cluster-version = CLUSTER_VERSION \
--region = COMPUTE_REGION
Replace the following:
CLUSTER_NAME : the name of your cluster.
CLUSTER_VERSION : the version of your new
cluster. To find out which version of GKE supports your
configuration, see the Requirements section.
COMPUTE_REGION : the name of the compute region.
Connect to your cluster, so that you can run the kubectl commands in the
next sections:
gcloud container clusters get-credentials CLUSTER_NAME --location = COMPUTE_REGION
Replace the following:
CLUSTER_NAME : the name of your cluster.
COMPUTE_REGION : the name of the compute region.
For more information, see Install kubectl and configure cluster access .
Create a GKE Standard cluster and GPU node pool with
multi-networking:
Create the cluster:
gcloud container clusters create CLUSTER_NAME \
--region = COMPUTE_REGION \
--cluster-version = CLUSTER_VERSION \
--enable-dataplane-v2 --enable-ip-alias --enable-multi-networking [ \
--services-ipv4-cidr = SERVICE_CIDR \
--cluster-ipv4-cidr = POD_CIDR ]
Replace the following:
CLUSTER_NAME : the name of your cluster.
CLUSTER_VERSION : the version of your new
cluster. To find out which version of GKE supports your
configuration, see the Requirements section.
COMPUTE_REGION : the name of the compute region.
Optionally, you can explicitly provide the secondary CIDR ranges for
services and Pods. If you use these optional flags, replace the following
variables:
SERVICE_CIDR : the secondary CIDR range for
services.
POD_CIDR : the secondary CIDR range for Pods.
When you use these flags, you must verify that the CIDR ranges don't
overlap with subnet ranges for additional node networks. For example,
the ranges in the SERVICE_CIDR =10.65.0.0/19 and
POD_CIDR =10.64.0.0/19 values don't overlap with
each other. For more information, see Adding Pod IPv4 address
ranges .
Create the node pool. The command that you need to run depends on the
consumption option that
you use for your deployment. Select the tab that corresponds to your
consumption option's provisioning model.
Reservation-bound Flex-start
More
For reservation-bound provisioning, run the following command:
gcloud container node-pools create NODE_POOL_NAME \
--region COMPUTE_REGION --cluster CLUSTER_NAME \
--node-locations COMPUTE_ZONE \
--accelerator type = GPU_TYPE ,count = AMOUNT ,gpu-driver-version = DRIVER_VERSION \
--machine-type MACHINE_TYPE \
--num-nodes = NUM_NODES \
--reservation-affinity = specific \
--reservation = RESERVATION_NAME /reservationBlocks/ BLOCK_NAME \
--additional-node-network network = ${ GVNIC_NETWORK_PREFIX } -net,subnetwork = ${ GVNIC_NETWORK_PREFIX } -sub \
--additional-node-network network = ${ RDMA_NETWORK_PREFIX } -net,subnetwork = ${ RDMA_NETWORK_PREFIX } -sub-0 \
--additional-node-network network = ${ RDMA_NETWORK_PREFIX } -net,subnetwork = ${ RDMA_NETWORK_PREFIX } -sub-1 \
--additional-node-network network = ${ RDMA_NETWORK_PREFIX } -net,subnetwork = ${ RDMA_NETWORK_PREFIX } -sub-2 \
--additional-node-network network = ${ RDMA_NETWORK_PREFIX } -net,subnetwork = ${ RDMA_NETWORK_PREFIX } -sub-3 \
--additional-node-network network = ${ RDMA_NETWORK_PREFIX } -net,subnetwork = ${ RDMA_NETWORK_PREFIX } -sub-4 \
--additional-node-network network = ${ RDMA_NETWORK_PREFIX } -net,subnetwork = ${ RDMA_NETWORK_PREFIX } -sub-5 \
--additional-node-network network = ${ RDMA_NETWORK_PREFIX } -net,subnetwork = ${ RDMA_NETWORK_PREFIX } -sub-6 \
--additional-node-network network = ${ RDMA_NETWORK_PREFIX } -net,subnetwork = ${ RDMA_NETWORK_PREFIX } -sub-7
Replace the following:
NODE_POOL_NAME : the name of the node pool.
COMPUTE_REGION : the region of your new
cluster.
CLUSTER_NAME : the name of your new cluster.
COMPUTE_ZONE : the zone of your node pool.
GPU_TYPE : the type of GPU
accelerator :
A4 VMs : enter nvidia-b200 .
A3 Ultra VMs : enter nvidia-h200-141gb .
AMOUNT : the number of GPUs to attach to
nodes in the node pool. For example, for both a4-highgpu-8g and
a3-ultragpu-8g VMs, the amount of GPUs is 8 .
DRIVER_VERSION : the NVIDIA driver version to
install. It can be one of the following values: default , latest ,
or disabled .
MACHINE_TYPE : the Compute Engine machine
type for the nodes. For example, use a4-highgpu-8g for A4 VMs, and
a3-ultragpu-8g for A3 Ultra VMs.
MACHINE_TYPE : the Compute Engine machine
type for the nodes. For example, use a4-highgpu-8g for A4 VMs, and
a3-ultragpu-8g for A3 Ultra VMs.
NUM_NODES : the number of nodes for the node
pool. For flex-start, this value must be set to 0 .
RESERVATION_NAME : the name of your
reservation. To find this value, see View future reservation
requests .
BLOCK_NAME : the name of a specific block
within the reservation. To find this value, see View future
reservation
requests .
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
For flex-start provisioning, run the following command:
gcloud container node-pools create NODE_POOL_NAME \
--region COMPUTE_REGION --cluster CLUSTER_NAME \
--node-locations COMPUTE_ZONE \
--accelerator type = GPU_TYPE ,count = AMOUNT ,gpu-driver-version = DRIVER_VERSION \
--machine-type MACHINE_TYPE \
--num-nodes = NUM_NODES \
--flex-start --num-nodes = 0 --enable-autoscaling \
--total-max-nodes TOTAL_MAX_NODES \
--no-enable-autorepair --location-policy = ANY \
--reservation-affinity = none \
[ --enable-queued-provisioning \]
--additional-node-network network = ${ GVNIC_NETWORK_PREFIX } -net,subnetwork = ${ GVNIC_NETWORK_PREFIX } -sub \
--additional-node-network network = ${ RDMA_NETWORK_PREFIX } -net,subnetwork = ${ RDMA_NETWORK_PREFIX } -sub-0 \
--additional-node-network network = ${ RDMA_NETWORK_PREFIX } -net,subnetwork = ${ RDMA_NETWORK_PREFIX } -sub-1 \
--additional-node-network network = ${ RDMA_NETWORK_PREFIX } -net,subnetwork = ${ RDMA_NETWORK_PREFIX } -sub-2 \
--additional-node-network network = ${ RDMA_NETWORK_PREFIX } -net,subnetwork = ${ RDMA_NETWORK_PREFIX } -sub-3 \
--additional-node-network network = ${ RDMA_NETWORK_PREFIX } -net,subnetwork = ${ RDMA_NETWORK_PREFIX } -sub-4 \
--additional-node-network network = ${ RDMA_NETWORK_PREFIX } -net,subnetwork = ${ RDMA_NETWORK_PREFIX } -sub-5 \
--additional-node-network network = ${ RDMA_NETWORK_PREFIX } -net,subnetwork = ${ RDMA_NETWORK_PREFIX } -sub-6 \
--additional-node-network network = ${ RDMA_NETWORK_PREFIX } -net,subnetwork = ${ RDMA_NETWORK_PREFIX } -sub-7
Replace the following:
NODE_POOL_NAME : the name of the node pool.
COMPUTE_REGION : the region of your new
cluster.
CLUSTER_NAME : the name of your new cluster.
COMPUTE_ZONE : the zone of your node pool.
GPU_TYPE : the type of GPU
accelerator :
A4 VMs : enter nvidia-b200 .
A3 Ultra VMs : enter nvidia-h200-141gb .
AMOUNT : the number of GPUs to attach to
nodes in the node pool. For example, for both a4-highgpu-8g and
a3-ultragpu-8g VMs, the amount of GPUs is 8 .
DRIVER_VERSION : the NVIDIA driver version to
install. It can be one of the following values: default , latest ,
or disabled .
MACHINE_TYPE : the Compute Engine machine
type for the nodes. For example, use a4-highgpu-8g for A4 VMs, and
a3-ultragpu-8g for A3 Ultra VMs.
MACHINE_TYPE : the Compute Engine machine
type for the nodes. For example, use a4-highgpu-8g for A4 VMs, and
a3-ultragpu-8g for A3 Ultra VMs.
NUM_NODES : the number of nodes for the node
pool. For flex-start, this value must be set to 0 .
TOTAL_MAX_NODES : the maximum number of
nodes to automatically scale for the entire node pool.
If you want to use flex-start with queued provisioning, include the
--enable-queued-provisioning flag.
For more information about using flex-start, see
Run large-scale workload with flex-start with queued provisioning .
Connect to your cluster, so that you can run the kubectl commands in the
next sections:
gcloud container clusters get-credentials CLUSTER_NAME --location = COMPUTE_REGION
Replace the following:
CLUSTER_NAME : the name of your cluster.
COMPUTE_REGION : the name of the compute region.
For more information, see Install kubectl and configure cluster access .
Create the GKE network objects
The VPC networks created in the previous section need to be configured through
GKE network parameter sets. Specifically, the second CPU
Titanium NIC (gVNIC) needs to be configured in NetDevice mode and each
of the eight CX-7 RDMA NICs need to be configured in RDMA mode.
This command uses the following names:
CPU Titanium NIC (gVNIC) VPC is named ${GVNIC_NETWORK_PREFIX}-net
with subnet named ${GVNIC_NETWORK_PREFIX}-sub
CX-7 RDMA NICs VPC is named ${RDMA_NETWORK_PREFIX}-net with subnets named
${RDMA_NETWORK_PREFIX}-sub-[0…7]
Create the GKE network objects by running the following command:
kubectl apply -f - <<EOF
apiVersion: networking.gke.io/v1
kind: GKENetworkParamSet
metadata:
name: gvnic-1
spec:
vpc: ${ GVNIC_NETWORK_PREFIX } -net
vpcSubnet: ${ GVNIC_NETWORK_PREFIX } -sub
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
vpc: ${ RDMA_NETWORK_PREFIX } -net
vpcSubnet: ${ RDMA_NETWORK_PREFIX } -sub-0
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
vpc: ${ RDMA_NETWORK_PREFIX } -net
vpcSubnet: ${ RDMA_NETWORK_PREFIX } -sub-1
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
vpc: ${ RDMA_NETWORK_PREFIX } -net
vpcSubnet: ${ RDMA_NETWORK_PREFIX } -sub-2
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
vpc: ${ RDMA_NETWORK_PREFIX } -net
vpcSubnet: ${ RDMA_NETWORK_PREFIX } -sub-3
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
---
apiVersion: networking.gke.io/v1
kind: GKENetworkParamSet
metadata:
name: rdma-4
spec:
vpc: ${ RDMA_NETWORK_PREFIX } -net
vpcSubnet: ${ RDMA_NETWORK_PREFIX } -sub-4
deviceMode: RDMA
---
apiVersion: networking.gke.io/v1
kind: Network
metadata:
name: rdma-4
spec:
type: "Device"
parametersRef:
group: networking.gke.io
kind: GKENetworkParamSet
name: rdma-4
---
apiVersion: networking.gke.io/v1
kind: GKENetworkParamSet
metadata:
name: rdma-5
spec:
vpc: ${ RDMA_NETWORK_PREFIX } -net
vpcSubnet: ${ RDMA_NETWORK_PREFIX } -sub-5
deviceMode: RDMA
---
apiVersion: networking.gke.io/v1
kind: Network
metadata:
name: rdma-5
spec:
type: "Device"
parametersRef:
group: networking.gke.io
kind: GKENetworkParamSet
name: rdma-5
---
apiVersion: networking.gke.io/v1
kind: GKENetworkParamSet
metadata:
name: rdma-6
spec:
vpc: ${ RDMA_NETWORK_PREFIX } -net
vpcSubnet: ${ RDMA_NETWORK_PREFIX } -sub-6
deviceMode: RDMA
---
apiVersion: networking.gke.io/v1
kind: Network
metadata:
name: rdma-6
spec:
type: "Device"
parametersRef:
group: networking.gke.io
kind: GKENetworkParamSet
name: rdma-6
---
apiVersion: networking.gke.io/v1
kind: GKENetworkParamSet
metadata:
name: rdma-7
spec:
vpc: ${ RDMA_NETWORK_PREFIX } -net
vpcSubnet: ${ RDMA_NETWORK_PREFIX } -sub-7
deviceMode: RDMA
---
apiVersion: networking.gke.io/v1
kind: Network
metadata:
name: rdma-7
spec:
type: "Device"
parametersRef:
group: networking.gke.io
kind: GKENetworkParamSet
name: rdma-7
EOF
Install the RDMA binary and configure NCCL
Apply the following DaemonSet to install the RDMA binaries and the NCCL library
on each node. On each underlying VM, the RDMA binaries are installed in the /home/kubernetes/bin/gib directory, and the NCCL library is installed in the /home/kubernetes/bin/nvidia/lib64 directory.
Autopilot Standard
More
For GKE Autopilot mode, run the following command:
kubectl apply -f https://raw.githubusercontent.com/GoogleCloudPlatform/container-engine-accelerators/refs/heads/master/gpudirect-rdma/nccl-rdma-installer-autopilot.yaml
For GKE Standard mode, run the following command:
kubectl apply -f https://raw.githubusercontent.com/GoogleCloudPlatform/container-engine-accelerators/refs/heads/master/gpudirect-rdma/nccl-rdma-installer.yaml
Run NCCL tests
To validate the functionality of the provisioned cluster, you can run a
NCCL test . For instructions, see
Deploy and run a NCCL test .
Configure your Pod manifests for GPUDirect RDMA
To run your workloads by using GPUDirect RDMA, configure your Pod manifests with
the following steps:
Note: The RDMA device files are only mounted to the first container (non-init) in the Pod. If your Pod has multiple containers, you must ensure that the container that requires RDMA access is the first container listed.
Add the following annotations to the Pod metadata.
Autopilot Standard
More
Use the following annotation for GKE Autopilot
mode:
metadata :
annotations :
networking.gke.io/default-interface : 'eth0'
networking.gke.io/interfaces : |
[
{"interfaceName":"eth0","network":"default"},
{"interfaceName":"eth1","network":"gvnic-1"},
{"interfaceName":"eth2","network":"rdma-0"},
{"interfaceName":"eth3","network":"rdma-1"},
{"interfaceName":"eth4","network":"rdma-2"},
{"interfaceName":"eth5","network":"rdma-3"},
{"interfaceName":"eth6","network":"rdma-4"},
{"interfaceName":"eth7","network":"rdma-5"},
{"interfaceName":"eth8","network":"rdma-6"},
{"interfaceName":"eth9","network":"rdma-7"}
]
The following annotation for GKE Standard mode
doesn't include a gvnic-1 specification, but you can add it if your
workloads require it.
Use the following annotation for GKE Standard
mode:
metadata :
annotations :
networking.gke.io/default-interface : 'eth0'
networking.gke.io/interfaces : |
[
{"interfaceName":"eth0","network":"default"},
{"interfaceName":"eth2","network":"rdma-0"},
{"interfaceName":"eth3","network":"rdma-1"},
{"interfaceName":"eth4","network":"rdma-2"},
{"interfaceName":"eth5","network":"rdma-3"},
{"interfaceName":"eth6","network":"rdma-4"},
{"interfaceName":"eth7","network":"rdma-5"},
{"interfaceName":"eth8","network":"rdma-6"},
{"interfaceName":"eth9","network":"rdma-7"}
]
Specify the chosen GPU type and specific reservation by using node
selectors:
spec :
nodeSelector :
cloud.google.com/gke-accelerator : ACCELERATOR
cloud.google.com/reservation-name : RESERVATION_NAME
cloud.google.com/reservation-affinity : "specific"
Replace the following:
ACCELERATOR : the accelerator that you
reserved in the Compute Engine capacity reservation. You must use
one of the following values:
nvidia-b200 : NVIDIA B200 (180GB) for A4 VMs
nvidia-h200-141gb : NVIDIA H200 (141GB) for A3 Ultra VMs
RESERVATION_NAME : the name of the
Compute Engine capacity reservation.
To consume shared reservations, or specific blocks and sub-blocks of
reservations, see the respective sections in Consuming reserved zonal
path resources .
Add the following volumes to the Pod spec:
spec :
volumes :
- name : library-dir-host
hostPath :
path : /home/kubernetes/bin/nvidia
- name : gib
hostPath :
path : /home/kubernetes/bin/gib
Add the following volume mounts, environment variables, and resources to the
container that requests GPUs. Your workload container must request all eight
GPUs:
Autopilot Standard
More
For GKE Autopilot mode, configure the following
resources:
containers :
- name : my-container
volumeMounts :
- name : library-dir-host
mountPath : /usr/local/nvidia
readOnly : true
- name : gib
mountPath : /usr/local/gib
readOnly : true
env :
- name : LD_LIBRARY_PATH
value : /usr/local/nvidia/lib64
resources :
limits :
nvidia.com/gpu : 8
For GKE Standard mode, configure the following
resources:
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
nvidia.com/gpu : 8
Set all the required environment variables to configure NCCL by using the
following shell script from the workload container:
source /usr/local/gib/scripts/set_nccl_env.sh
The following tabs include examples of completed Pod manifests.
Autopilot Standard
More
For GKE Autopilot mode, a completed Pod manifest
should look similar to the following:
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
{"interfaceName":"eth1","network":"gvnic-1"},
{"interfaceName":"eth2","network":"rdma-0"},
{"interfaceName":"eth3","network":"rdma-1"},
{"interfaceName":"eth4","network":"rdma-2"},
{"interfaceName":"eth5","network":"rdma-3"},
{"interfaceName":"eth6","network":"rdma-4"},
{"interfaceName":"eth7","network":"rdma-5"},
{"interfaceName":"eth8","network":"rdma-6"},
{"interfaceName":"eth9","network":"rdma-7"}
]
spec :
...
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
readOnly : true
- name : gib
mountPath : /usr/local/gib
readOnly : true
env :
- name : LD_LIBRARY_PATH
value : /usr/local/nvidia/lib64
resources :
limits :
nvidia.com/gpu : 8
...
For GKE Standard mode, a completed Pod manifest
should look similar to the following:
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
{"interfaceName":"eth6","network":"rdma-4"},
{"interfaceName":"eth7","network":"rdma-5"},
{"interfaceName":"eth8","network":"rdma-6"},
{"interfaceName":"eth9","network":"rdma-7"}
]
spec :
...
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
nvidia.com/gpu : 8
...
Test network performance for clusters that use GPUDirect RDMA
We recommended that you validate the functionality of provisioned clusters. To do so, use NCCL/gIB tests , which are NVIDIA Collective Communications Library (NCCL) tests that are optimized for the Google environment.
What's next
For more information about scheduling workloads on your GKE
clusters by using Topology Aware Scheduling (TAS) and Kueue, see
Schedule GKE workloads with Topology Aware Scheduling .
For more information about managing common events relevant to
GKE clusters and AI workloads, see
Manage AI-optimized GKE clusters .
For information about testing your environment for proper setup and optimization, see Optimize cluster networking by using NCCL/gIB .
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
