---
title: "Create AI-optimized A4X Max instances in bulk \_|\_ AI Hypercomputer \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-a4xmax-instances-in-bulk
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-a4xmax-instances-in-bulk
  title: "Create AI-optimized A4X Max instances in bulk \_|\_ AI Hypercomputer \_\
    |\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Create AI-optimized A4X Max instances in bulk | AI Hypercomputer | Google Cloud Documentation
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
A4X Max instance type
Before you begin
Limitations Required roles
A4X Max fundamentals
Overview Create VPC networks
Create a compact placement policy
Create A4X Max instances in bulk
What's next
Home
Documentation
Compute
AI Hypercomputer
Guides
Was this helpful?
Send feedback
Create AI-optimized A4X Max instances in bulk
Stay organized with collections
Save and categorize content based on your preferences.
On this page
A4X Max instance type
Before you begin
Limitations Required roles
A4X Max fundamentals
Overview Create VPC networks
Create a compact placement policy
Create A4X Max instances in bulk
What's next
This document describes the steps to create Compute Engine instances in bulk
that use A4X Max accelerator-optimized machine types. To learn about compute
instance and cluster creation options, see
Deployment options overview
page.
A4X Max instance type
A Compute Engine instance, or compute instance , is a computing resource hosted
on Google's infrastructure that can be either a virtual machine (VM) or a
bare metal instance. A4X Max instances are available as
bare metal instances , which differ
from VM instances by providing direct, non-virtualized access to the underlying
physical hardware. To learn more about the A4X Max machine type, see
A4X Max series
in the Compute Engine documentation.
Before you begin
Before creating A4X Max instances in bulk, if you haven't already done so, complete the following
steps:
Choose a consumption option : your choice of consumption option determines how you get
and use GPU resources.
To learn more, see Choose a consumption option .
Obtain capacity : the process to obtain capacity differs for each consumption option.
To learn about the process to obtain capacity for your chosen consumption option, see
Capacity overview .
Note: When you request A4X Max or A4X capacity, you obtain it in the all capacity mode . This
mode is the only supported reservation operational mode for A4X Max or A4X machine types. For more
information about all capacity mode, see
Reservation operational mode .
Select the tab for how you plan to use the samples on this page:
Console gcloud REST
More
When you use the Google Cloud console to access Google Cloud services and
APIs, you don't need to set up authentication.
In one of the following development environments, set up the gcloud CLI:
Cloud Shell : to use an online terminal with the gcloud CLI
already set up, activate Cloud Shell.
Activate Cloud Shell on this page
At the bottom of this page, a Cloud Shell session starts and displays a
command-line prompt. It can take a few seconds for the session to initialize.
Local shell : to use a local development environment,
install and
initialize the gcloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To use the REST API samples on this page in a local development environment, you use the
credentials you provide to the gcloud CLI.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
For more information, see
Authenticate for using REST
in the Google Cloud authentication documentation.
Limitations
When you create A4X Max instances in bulk, the following limitations apply:
Caution: The
Compute Engine Service Level Agreement (SLA) doesn't apply to the A4X Max machine series.
You don't receive sustained
use discounts or flexible committed use
discounts for instances that use this machine type.
You can only create instances in certain regions and zones .
You can't use Persistent Disk (regional or zonal). You can only use
Google Cloud Hyperdisk .
This machine type is only available on the NVIDIA Grace platform .
Machine type changes aren't supported for A4X Max. To switch to or from this
machine type, you must create a new instance.
You can't run Windows operating systems on this machine type. For a list of
supported Linux operating systems, review the
supported operating systems for GPU instances .
A4X Max instances don't support the following:
Sole-tenancy
Spot VMs
Flex-start VMs
You can't attach Hyperdisk ML disks created before February 4, 2026 to A4X Max machine types.
Required roles
To get the permissions that
you need to create compute instances in bulk,
ask your administrator to grant you the
Compute Instance Admin (v1) ( roles/compute.instanceAdmin.v1 )
IAM role on the project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains
the permissions required to create compute instances in bulk. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to create compute instances in bulk:
compute.instances.create
on the project
To use a custom image to create the VM:
compute.images.useReadOnly
on the image
To use a snapshot to create the VM:
compute.snapshots.useReadOnly
on the snapshot
To use an instance template to create the VM:
compute.instanceTemplates.useReadOnly
on the instance template
To specify a subnet for your VM:
compute.subnetworks.use
on the project or on the chosen subnet
To specify a static IP address for the VM:
compute.addresses.use
on the project
To assign an external IP address to the VM when using a VPC network:
compute.subnetworks.useExternalIp
on the project or on the chosen subnet
To assign a legacy network to the VM:
compute.networks.use
on the project
To assign an external IP address to the VM when using a legacy network:
compute.networks.useExternalIp
on the project
To set VM instance metadata for the VM:
compute.instances.setMetadata
on the project
To set tags for the VM:
compute.instances.setTags
on the VM
To set labels for the VM:
compute.instances.setLabels
on the VM
To set a service account for the VM to use:
compute.instances.setServiceAccount
on the VM
To create a new disk for the VM:
compute.disks.create
on the project
To attach an existing disk in read-only or read-write mode:
compute.disks.use
on the disk
To attach an existing disk in read-only mode:
compute.disks.useReadOnly
on the disk
You might also be able to get
these permissions
with custom roles or
other predefined roles .
A4X Max fundamentals
An A4X Max cluster is organized into a hierarchy of blocks and sub-blocks to
facilitate large-scale, non-blocking network performance. Understanding this topology is key when
reserving capacity and deploying workloads.
A4X Max instance
An A4X Max instance is a single A4X Max machine type that has 4 GPUs
attached.
Sub-block
A sub-block is the fundamental unit of A4X Max
capacity. For A4X Max, a sub-block consists of 18 A4X Max
instances (72 GPUs); these instances form an NVLink domain and are connected
using a multi-node NVLink
system. You create an A4X Max sub-block by applying a
compact placement policy that specifies a 1x72 topology.
Block
An A4X Max block is composed of 25 sub-blocks (NVLink domains), totalling up to
450 A4X Max instances (1,800 GPUs). The sub-blocks are rail-aligned for efficient
scaling. Each sub-block requires a
compact placement policy.
Therefore, for a single A4X Max block, you can create 25
compact placement policies.
The following table shows the supported topology options for A4X Max instances:
Topology ( gpu Topology )
Number of GPUs
Number of instances
1x72
72
18
Overview
Creating instances in bulk with the A4X Max machine type includes the following steps:
Create VPC networks
Create a compact placement policy
Create instances in bulk
Create VPC networks
Tip: If you are setting up a quick test, you can skip this step and specify a
single NIC --network-interface=nic-type=IDPF instead.
To set up the network for A4X Max machine types, create two VPC
networks for the following network interfaces:
1 regular VPC network with two subnets for the IDPF
network interfaces (NICs). These are used for host to host communication.
1 VPC network with the RoCE network profile
for the CX-8 NICs when creating multiple A4X Max
subblocks. The RoCE VPC network uses
a single subnet named default-subnet-1- RDMA_NAME_PREFIX -net that is
automatically provided, and all eight CX-8 NICs use this subnet. These NICs use RDMA over Converged Ethernet (RoCE),
providing the high-bandwidth, low-latency communication that's essential for
scaling out to multiple A4X Max subblocks. For a single A4X Max subblock,
you can skip this VPC network because within a single subblock, direct GPU to GPU
communication is handled by the multi-node NVLink.
For more information about NIC arrangement, see
Review network bandwidth and NIC arrangement .
Create the networks either manually by following the instruction guides or automatically by using
the provided script.
Instruction guides Script
More
To create the networks, you can use the following instructions:
To create the regular VPC networks for the gVNICs, see
Create and manage Virtual Private Cloud networks .
To create the RoCE VPC network, see
Create a Virtual Private Cloud network for RDMA NICs .
For these VPC networks, we recommend setting the
maximum transmission unit (MTU) to a larger value.
For A4X Max machine types, the recommended MTU is 8896 bytes.
To review the recommended MTU settings for other GPU machine types, see
MTU settings for GPU machine types .
To create the networks, follow these steps.
For these VPC networks, we recommend setting the
maximum transmission unit (MTU) to a larger value.
For A4X Max machine types, the recommended MTU is 8896 bytes.
To review the recommended MTU settings for other GPU machine types, see
MTU settings for GPU machine types .
Use the following script to create regular VPC networks for the IDPF NICs.
#!/bin/bash
# Create regular VPC network for the IDPF NICs
gcloud compute networks create IDPF_NETWORK_PREFIX -net \
--subnet-mode=custom \
--mtu=8896 \
--enable-ula-internal-ipv6
# Create subnets for the IDPF NICs
for N in $(seq 0 1); do
gcloud compute networks subnets create IDPF_NETWORK_PREFIX -$N \
--network= IDPF_NETWORK_PREFIX -net \
--region= REGION \
--stack-type=IPV6_ONLY \
--ipv6-access-type=INTERNAL
done
gcloud compute firewall-rules create IDPF_NETWORK_PREFIX -internal \
--network= IDPF_NETWORK_PREFIX -net \
--action=ALLOW \
--rules=tcp:0-65535,udp:0-65535,58 \
--source-ranges= IP_RANGE
If you require multiple A4X Max subblocks, use the following script to create the
RoCE VPC network and subnets for the four CX-8 NICs on each A4X Max instance.
Important:
If your deployment consists of only a single A4X Max subblock, you can skip this step.
#!/bin/bash
# List and make sure network profiles exist in the machine type's zone
gcloud compute network-profiles list --filter "location.name= ZONE "
# Create network for RDMA NICs
gcloud compute networks create RDMA_NAME_PREFIX -net \
--network-profile= ZONE -vpc-roce-metal \
--subnet-mode custom \
--mtu=8896
# For RoCE VPC networks for bare metal instances, a single subnet named
# default-subnet-1- RDMA_NAME_PREFIX -net is automatically provided.
# For more details, see https://cloud.google.com/vpc/docs/rdma-network-profiles.
Replace the following:
IDPF_NETWORK_PREFIX : the custom name prefix to use for the regular
VPC networks and subnets for the IDPF NICs.
RDMA_NAME_PREFIX : the custom name prefix to use for the RoCE
VPC network and subnets for the CX-8 NICs.
ZONE : specify a zone in which the machine type that you want to
use is available, such as us-central1-a . For information about regions, see
GPU availability by regions and zones .
REGION : the region where you want to create the
subnets. This region must correspond to the zone specified. For example,
if your zone is us-central1-a , then your region is us-central1 .
IP_RANGE : the IP range to use for the
SSH firewall rules .
Optional: To verify that the VPC network resources are created successfully, check the network settings in the Google Cloud console:
In the Google Cloud console, go to the VPC networks page.
Go to VPC networks
Search the list for the networks that you created in the previous step.
To view the subnets, firewall rules, and other network settings, click the name of the network.
Create a compact placement policy
Important: To create multiple NVLink domains in a block, create
separate compact placement policy for each NVLink domain. If you reuse a compact placement policy,
Compute Engine attempts to place the instances in the same subblock, which is already in
use.
To create a compact placement policy, select one of the following options:
gcloud REST
More
To create a compact placement policy, use the
gcloud beta compute resource-policies create group-placement command :
gcloud beta compute resource-policies create group-placement POLICY_NAME \
--collocation=collocated \
--gpu-topology=1x72 \
--region= REGION
Replace the following:
POLICY_NAME : the name of the compact placement policy.
REGION : the region where you want to create the compact placement policy.
Specify a region in which the machine type that you want to use is available. For information
about regions, see
GPU availability by regions and zones .
To create a compact placement policy, make a POST request to the
beta
resourcePolicies.insert method .
POST https://compute.googleapis.com/compute/beta/projects/ PROJECT_ID /regions/ REGION /resourcePolicies
{
"name": " POLICY_NAME ",
"groupPlacementPolicy": {
"collocation": "COLLOCATED",
"gpuTopology": "1x72"
}
}
Replace the following:
PROJECT_ID : your project ID.
POLICY_NAME : the name of the compact placement policy.
REGION : the region where you want to create the compact placement policy.
Specify a region in which the machine type that you want to use is available. For information
about regions, see
GPU availability by regions and zones .
Create A4X Max instances in bulk
To obtain a GPU topology of 1x72 , create
18 A4X Max instances. When you create the instances, apply the compact placement policy that specifies the gpuTopology
field. Applying the policy ensures that Compute Engine creates all 18 A4X Max
instances in one sub-block to use an NVLink domain.
If a sub-block lacks capacity for all 18 A4X Max instances, then the bulk creation fails
and doesn't create any instance.
If your workload can operate with less than 18 A4X Max instances, then you can set the
minCount field
to the minimum number of instances required for your workload. If you want to use any available
capacity, then set the minCount field to 1 .
To create A4X Max instances in bulk, select one of the following options.
The following commands also set the access scope for your instances. To simplify permissions
management, Google recommends that you set the access scope on an instance to
cloud-platform access and then use IAM roles to define what services the instance can
access. For more information, see
Scopes best practice .
gcloud REST
More
To create A4X Max instances in bulk, use the
gcloud compute instances bulk create command .
Important: The following example uses the networking setup for multiple sub-blocks. If
you're creating only a single A4X Max sub-block and you only created the
IDPF network in the Create VPC networks step, then remove the
eight RDMA subnets
indicated by the MRDMA NIC type from the example.
gcloud compute instances bulk create \
--name-pattern= NAME_PATTERN \
--count= COUNT \
--machine-type=a4x-maxgpu-4g-metal \
--image-family= IMAGE_FAMILY \
--image-project= IMAGE_PROJECT \
--region= REGION \
--boot-disk-type=hyperdisk-balanced \
--boot-disk-size= DISK_SIZE \
--scopes=cloud-platform \
--network-interface=nic-type=IDPF,network= IDPF_NETWORK_PREFIX -net,stack-type=IPV6_ONLY,subnet= IDPF_NETWORK_PREFIX -sub-0 \
--network-interface=nic-type=IDPF,network= IDPF_NETWORK_PREFIX -net,stack-type=IPV6_ONLY,subnet= IDPF_NETWORK_PREFIX -sub-1,no-address \
--network-interface=subnet=default-subnet-1- RDMA_NAME_PREFIX -net,stack-type=IPV6_ONLY,nic-type=mrdma \
--network-interface=subnet=default-subnet-1- RDMA_NAME_PREFIX -net,stack-type=IPV6_ONLY,nic-type=mrdma \
--network-interface=subnet=default-subnet-1- RDMA_NAME_PREFIX -net,stack-type=IPV6_ONLY,nic-type=mrdma \
--network-interface=subnet=default-subnet-1- RDMA_NAME_PREFIX -net,stack-type=IPV6_ONLY,nic-type=mrdma \
--network-interface=subnet=default-subnet-1- RDMA_NAME_PREFIX -net,stack-type=IPV6_ONLY,nic-type=mrdma \
--network-interface=subnet=default-subnet-1- RDMA_NAME_PREFIX -net,stack-type=IPV6_ONLY,nic-type=mrdma \
--network-interface=subnet=default-subnet-1- RDMA_NAME_PREFIX -net,stack-type=IPV6_ONLY,nic-type=mrdma \
--network-interface=subnet=default-subnet-1- RDMA_NAME_PREFIX -net,stack-type=IPV6_ONLY,nic-type=mrdma \
--reservation-affinity=specific \
--reservation= RESERVATION \
--provisioning-model=RESERVATION_BOUND \
--instance-termination-action= TERMINATION_ACTION \
--maintenance-policy=TERMINATE \
--restart-on-failure \
--resource-policies= POLICY_NAME
Replace the following:
NAME_PATTERN : the name pattern to use for the A4X Max instances.
For example, using
instance-# for the name pattern generates A4X Max instances with names
such as instance-1 and instance-2 , up to the number of
A4X Max instances specified by --count .
COUNT : the number of A4X Max instances to create.
IMAGE_FAMILY : the image family of the OS image that you want to use.
For a list of supported operating systems, see Supported operating systems .
IMAGE_PROJECT : the project ID of the OS image.
REGION : specify a region in which the machine type that you want to
use is available.
You must use the same region as the compact placement
policy.
For information about regions, see
GPU availability by regions and zones .
DISK_SIZE : the size of the boot disk in GB.
IDPF_NETWORK_PREFIX : the name prefix
that you specified when creating the VPC networks and subnets that use IDPF NICs.
RDMA_NAME_PREFIX : the name prefix that you specified when
creating the VPC networks and subnets that use RDMA NICs.
RESERVATION : the reservation name, a block, or a subblock within a
reservation. To get the reservation name or the available blocks, see View reserved capacity . Based on your
requirements for instance placement, choose one of the following:
To create A4X Max instances on any single block:
projects/ RESERVATION_OWNER_PROJECT_ID /reservations/ RESERVATION_NAME
To create A4X Max instances on a specific block:
projects/ RESERVATION_OWNER_PROJECT_ID /reservations/ RESERVATION_NAME /reservationBlocks/ RESERVATION_BLOCK_NAME
To create A4X Max instances in a specific subblock:
projects/ RESERVATION_OWNER_PROJECT_ID /reservations/ RESERVATION_NAME /reservationBlocks/ RESERVATION_BLOCK_NAME /reservationSubBlocks/ RESERVATION_SUBBLOCK_NAME
Tip: If the reservation exists in the current project, then you can omit
projects/ RESERVATION_OWNER_PROJECT_ID /reservations/ from the reservation
value.
TERMINATION_ACTION : whether Compute Engine stops
( STOP ) or deletes ( DELETE ) the A4X Max instance at the
end of the reservation period.
POLICY_NAME : the name of the compact placement policy.
To create A4X Max instances in bulk, make a POST request to the
instances.bulkInsert method .
Important: The following example uses the networking setup for multiple sub-blocks. If
you're creating only a single A4X Max sub-block and you only created the
IDPF network in the Create VPC networks step, then remove the
eight RDMA subnets
indicated by the MRDMA NIC type from the example.
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /instances/bulkInsert
{
"namePattern":" NAME_PATTERN ",
"count":" COUNT ",
"instanceProperties":{
"machineType":"a4x-maxgpu-4g-metal",
"disks":[
{
"boot":true,
"initializeParams":{
"diskSizeGb":" DISK_SIZE ",
"diskType":"hyperdisk-balanced",
"sourceImage":"projects/ IMAGE_PROJECT /global/images/family/ IMAGE_FAMILY "
},
"mode":"READ_WRITE",
"type":"PERSISTENT"
}
],
"serviceAccounts": [
{
"email": "default",
"scopes": [
"https://www.googleapis.com/auth/cloud-platform"
]
}
],
"networkInterfaces": [
{
"accessConfigs": [
{
"name": "external-nat",
"type": "ONE_TO_ONE_NAT"
}
],
"network": "projects/ NETWORK_PROJECT_ID /global/networks/ IDPF_NETWORK_PREFIX -net",
"nicType": "IDPF",
"stackType": "IPV6_ONLY",
"subnetwork": "projects/ NETWORK_PROJECT_ID /region/ REGION /subnetworks/ IDPF_NETWORK_PREFIX -sub-0"
},
{
"network": "projects/ NETWORK_PROJECT_ID /global/networks/ IDPF_NETWORK_PREFIX -net",
"nicType": "IDPF",
"stackType": "IPV6_ONLY",
"subnetwork": "projects/ NETWORK_PROJECT_ID /region/ REGION /subnetworks/ IDPF_NETWORK_PREFIX -sub-1"
},
{
"subnetwork": "projects/ NETWORK_PROJECT_ID /region/ REGION /subnetworks/default-subnet-1- RDMA_NAME_PREFIX -net",
"nicType": "MRDMA",
"stackType": "IPV6_ONLY"
},
{
"subnetwork": "projects/ NETWORK_PROJECT_ID /region/ REGION /subnetworks/default-subnet-1- RDMA_NAME_PREFIX -net",
"nicType": "MRDMA",
"stackType": "IPV6_ONLY"
},
{
"subnetwork": "projects/ NETWORK_PROJECT_ID /region/ REGION /subnetworks/default-subnet-1- RDMA_NAME_PREFIX -net",
"nicType": "MRDMA",
"stackType": "IPV6_ONLY"
},
{
"subnetwork": "projects/ NETWORK_PROJECT_ID /region/ REGION /subnetworks/default-subnet-1- RDMA_NAME_PREFIX -net",
"nicType": "MRDMA",
"stackType": "IPV6_ONLY"
},
{
"subnetwork": "projects/ NETWORK_PROJECT_ID /region/ REGION /subnetworks/default-subnet-1- RDMA_NAME_PREFIX -net",
"nicType": "MRDMA",
"stackType": "IPV6_ONLY"
},
{
"subnetwork": "projects/ NETWORK_PROJECT_ID /region/ REGION /subnetworks/default-subnet-1- RDMA_NAME_PREFIX -net",
"nicType": "MRDMA",
"stackType": "IPV6_ONLY"
},
{
"subnetwork": "projects/ NETWORK_PROJECT_ID /region/ REGION /subnetworks/default-subnet-1- RDMA_NAME_PREFIX -net",
"nicType": "MRDMA",
"stackType": "IPV6_ONLY"
},
{
"subnetwork": "projects/ NETWORK_PROJECT_ID /region/ REGION /subnetworks/default-subnet-1- RDMA_NAME_PREFIX -net",
"nicType": "MRDMA",
"stackType": "IPV6_ONLY"
}
],
"reservationAffinity":{
"consumeReservationType":"SPECIFIC_RESERVATION",
"key":"compute.googleapis.com/reservation-name",
"values":[
" RESERVATION "
]
},
"scheduling":{
"provisioningModel":"RESERVATION_BOUND",
"instanceTerminationAction":"DELETE",
"onHostMaintenance": "TERMINATE",
"automaticRestart":true
},
"resourcePolicies": [
"projects/ PROJECT_ID /regions/ REGION /resourcePolicies/ POLICY_NAME "
]
}
}
Replace the following:
PROJECT_ID : the project ID of the project where you want to create the A4X Max instance.
ZONE : specify a zone in which the machine type that you want to
use is available.
You must use a zone in the same region as the
compact placement policy.
For information about regions, see
GPU availability by regions and zones .
NAME_PATTERN : the name pattern to use for the A4X Max instances.
For example, using
instance-# for the name pattern generates A4X Max instances with names
such as instance-1 and instance-2 , up to the number of
A4X Max instances specified by --count .
COUNT : the number of A4X Max instances to create.
VM_NAME : the name of the VM.
DISK_SIZE : the size of the boot disk in GB.
IMAGE_PROJECT : the project ID of the OS image.
IMAGE_FAMILY : the image family of the OS image that you want to use.
For a list of supported operating systems, see Supported operating systems .
NETWORK_PROJECT_ID : the project ID of the network.
IDPF_NETWORK_PREFIX : the name prefix
that you specified when creating the VPC networks and subnets that use IDPF NICs.
REGION : the region of the subnetwork.
RDMA_NAME_PREFIX : the name prefix that you specified when
creating the VPC networks and subnets that use RDMA NICs.
RESERVATION : the reservation name, a block, or a subblock within a
reservation. To get the reservation name or the available blocks, see View reserved capacity . Based on your
requirements for instance placement, choose one of the following:
To create A4X Max instances on any single block:
projects/ RESERVATION_OWNER_PROJECT_ID /reservations/ RESERVATION_NAME
To create A4X Max instances on a specific block:
projects/ RESERVATION_OWNER_PROJECT_ID /reservations/ RESERVATION_NAME /reservationBlocks/ RESERVATION_BLOCK_NAME
To create A4X Max instances in a specific subblock:
projects/ RESERVATION_OWNER_PROJECT_ID /reservations/ RESERVATION_NAME /reservationBlocks/ RESERVATION_BLOCK_NAME /reservationSubBlocks/ RESERVATION_SUBBLOCK_NAME
Tip: If the reservation exists in the current project, then you can omit
projects/ RESERVATION_OWNER_PROJECT_ID /reservations/ from the reservation
value.
TERMINATION_ACTION : whether Compute Engine stops
( STOP ) or deletes ( DELETE ) the A4X Max instance at the
end of the reservation period.
PROJECT_ID : the project ID of the compact placement policy.
REGION : the region of the compact placement policy.
POLICY_NAME : the name of the compact placement policy.
For more information about the configuration options when creating compute
instances in bulk, see Create VMs in bulk in the
Compute Engine documentation.
What's next
Run workloads overview
Troubleshoot reservation consumption
View VMs topology
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
