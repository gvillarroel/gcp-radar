---
title: "Create an AI-optimized MIG with A3 High or A3 Mega machine type \_|\_ AI Hypercomputer\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-mig-with-a3-high-mega
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-mig-with-a3-high-mega
  title: "Create an AI-optimized MIG with A3 High or A3 Mega machine type \_|\_ AI\
    \ Hypercomputer \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Create an AI-optimized MIG with A3 High or A3 Mega machine type | AI Hypercomputer | Google Cloud Documentation
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
Limitations
Before you begin Required roles
Overview Create VPC networks
Optional: Create a workload policy
Create an instance template
Create a MIG
What's next?
Home
Documentation
Compute
AI Hypercomputer
Guides
Was this helpful?
Send feedback
Create an AI-optimized MIG with A3 High or A3 Mega machine type
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Limitations
Before you begin Required roles
Overview Create VPC networks
Optional: Create a workload policy
Create an instance template
Create a MIG
What's next?
This document describes how to create a managed instance group (MIG) that uses
an A3 High or A3 Mega accelerator-optimized machine type. To learn more about the
machine types,
see A3 High
and A3 Mega
in the Compute Engine documentation.
Creating a MIG lets you manage multiple virtual machines (VMs) as a single
entity. Each VM in a MIG is based on an instance template. By automatically
managing the VMs in the group, MIGs offer high availability and scalability. To
learn more about MIGs, see
Managed instance groups
in the Compute Engine documentation.
To learn about VM and cluster creation options, see
VM and cluster creation overview
page.
Limitations
Depending on the machine series that the VMs in your MIG use, the following
limitations apply:
A3 Mega A3 High
More
You don't receive sustained
use discounts and
flexible committed use
discounts for instances that use an A3 Mega machine type.
You can only use an A3 Mega machine type in certain regions
and zones .
You can't use regional
Persistent Disk on an instance that uses an A3 Mega machine type.
The A3 Mega machine type is only available on the Sapphire Rapids CPU platform .
Machine type changes aren't supported for A3 Mega machine type. To switch to or from this machine
type, you must create a new instance.
You can't run Windows operating systems on an A3 Mega machine type.
You don't receive sustained
use discounts and
flexible committed use
discounts for instances that use an A3 High machine type.
You can only use an A3 High machine type in certain regions
and zones .
You can't use regional
Persistent Disk on an instance that uses an A3 High machine type.
The A3 High machine type is only available on the Sapphire Rapids CPU platform .
Machine type changes aren't supported for A3 High machine type. To switch to or from this machine
type, you must create a new instance.
You can't run Windows operating systems on an A3 High machine type.
For a3-highgpu-1g , a3-highgpu-2g , and a3-highgpu-4g
machine types,
you must create instances by using Spot VMs or
Flex-start VMs. For detailed instructions on these options, review the following:
To create Spot VMs, set the provisioning model to SPOT when you
create an accelerator-optimized
VM .
To create Flex-start VMs, you can use one of the following methods:
Create a standalone VM and set the provisioning model to FLEX_START when you
create an
accelerator-optimized VM .
Create a resize request in a managed instance group (MIG). For instructions, see
Create a MIG with GPU
VMs .
You can only use a
Confidential VM
with an a3-highgpu-1g machine type in limited regions and zones ,
and all the
limitations for Confidential VM running on the A3 High machine type
apply.
Before you begin
Before creating a MIG, if you haven't already done so, complete the following
steps:
Choose a consumption option : your choice of consumption option determines how you get
and use GPU resources.
To learn more, see Choose a consumption option .
Obtain capacity : the process to obtain capacity differs for each consumption option.
To learn about the process to obtain capacity for your chosen consumption option, see
Capacity overview .
Required roles
To get the permissions that
you need to create a MIG,
ask your administrator to grant you the
Compute Instance Admin (v1) ( roles/compute.instanceAdmin.v1 )
IAM role on the project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains
the permissions required to create a MIG. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to create a MIG:
To create a MIG:
compute.instanceGroupManagers.create
on the project
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Overview
Creating a MIG with the A3 Mega or A3 High (8 GPUs) machine type includes the following steps:
Create VPC networks
Optional: Create a workload policy
Create an instance template
Create a MIG
Create VPC networks
To enable efficient communication for your GPU VMs, you need to create a management network and
one or more data networks. The management network is used for external access, for example SSH,
and for most general network communication. The data networks are used for high-performance
communication between the GPUs on different VMs, for example, for Remote Direct Memory Access (RDMA)
traffic.
For these VPC networks, we recommend setting the
maximum transmission unit (MTU) to a larger value.
Higher MTU values increase the packet size and reduce the packet-header overhead,
which increases payload data throughput. For more information about how to create VPC
networks, see
Create and verify a jumbo frame MTU network .
Create management network, subnet, and firewall rule
Complete the following steps to set up the management network:
Create the management network by using the networks create command :
gcloud compute networks create NETWORK_NAME_PREFIX -mgmt-net \
--project= PROJECT_ID \
--subnet-mode=custom \
--mtu=8244
Create the management subnet by using the networks subnets create command :
gcloud compute networks subnets create NETWORK_NAME_PREFIX -mgmt-sub \
--project= PROJECT_ID \
--network= NETWORK_NAME_PREFIX -mgmt-net \
--region= REGION \
--range=192.168.0.0/24
Create firewall rules by using the firewall-rules create command .
Create a firewall rule for the management network.
gcloud compute firewall-rules create NETWORK_NAME_PREFIX -mgmt-internal \
--project= PROJECT_ID \
--network= NETWORK_NAME_PREFIX -mgmt-net \
--action=ALLOW \
--rules=tcp:0-65535,udp:0-65535,icmp \
--source-ranges=192.168.0.0/16
Create the tcp:22 firewall rule to limit which source IP
addresses can connect to your VM by using SSH.
gcloud compute firewall-rules create NETWORK_NAME_PREFIX -mgmt-external-ssh \
--project= PROJECT_ID \
--network= NETWORK_NAME_PREFIX -mgmt-net \
--action=ALLOW \
--rules=tcp:22 \
--source-ranges= SSH_SOURCE_IP_RANGE
Create the icmp firewall rule that can be used to check for
data transmission issues in the network.
gcloud compute firewall-rules create NETWORK_NAME_PREFIX -mgmt-external-ping \
--project= PROJECT_ID \
--network= NETWORK_NAME_PREFIX -mgmt-net \
--action=ALLOW \
--rules=icmp \
--source-ranges=0.0.0.0/0
Replace the following:
NETWORK_NAME_PREFIX : the name prefix to use for the VPC
networks and subnets.
PROJECT_ID : your project ID.
REGION : the region where you want to create the
networks.
SSH_SOURCE_IP_RANGE : IP range in CIDR format.
This specifies which source IP addresses can connect to your VM by using SSH.
Create data networks, subnets, and firewall rule
The number of data networks varies depending on the type of GPU machine you are creating.
A3 Mega A3 High
More
A3 Mega requires eight data networks. To create eight data networks, each with subnets and
firewall rules, use the following command.
for N in $(seq 1 8); do
gcloud compute networks create NETWORK_NAME_PREFIX -data-net-$N \
--project= PROJECT_ID \
--subnet-mode=custom \
--mtu=8244
gcloud compute networks subnets create NETWORK_NAME_PREFIX -data-sub-$N \
--project= PROJECT_ID \
--network= NETWORK_NAME_PREFIX -data-net-$N \
--region= REGION \
--range=192.168.$N.0/24
gcloud compute firewall-rules create NETWORK_NAME_PREFIX -data-internal-$N \
--project= PROJECT_ID \
--network= NETWORK_NAME_PREFIX -data-net-$N \
--action=ALLOW \
--rules=tcp:0-65535,udp:0-65535,icmp \
--source-ranges=192.168.0.0/16
done
A3 High require four data networks. Use the following command to create four
data networks, each with subnets and firewall rules.
for N in $(seq 1 4); do
gcloud compute networks create NETWORK_NAME_PREFIX -data-net-$N \
--project= PROJECT_ID \
--subnet-mode=custom \
--mtu=8244
gcloud compute networks subnets create NETWORK_NAME_PREFIX -data-sub-$N \
--project= PROJECT_ID \
--network= NETWORK_NAME_PREFIX -data-net-$N \
--region= REGION \
--range=192.168.$N.0/24
gcloud compute firewall-rules create NETWORK_NAME_PREFIX -data-internal-$N \
--project= PROJECT_ID \
--network= NETWORK_NAME_PREFIX -data-net-$N \
--action=ALLOW \
--rules=tcp:0-65535,udp:0-65535,icmp \
--source-ranges=192.168.0.0/16
done
Optional: Create a workload policy
For the Flex-start consumption option ,
skip this section and proceed to create an instance template .
Due to limitations , the flex-start provisioning model doesn't support
workload policies.
Tip: If you want
your VMs to be placed in a single or adjacent blocks, specify VM placement by creating a
workload policy .
However if you want your VMs to be on a specific block, skip this step and provide the
name of the block in the reservation affinity when you create the instance template.
You can specify VM placement by creating a workload policy. If you already have a workload
policy, you can reuse it. When you apply a workload policy to your MIG, Compute Engine makes
best-effort attempts to create VMs that are as close to each other as possible. If your application
is latency-sensitive and you want the VMs to be closer together (maximum compactness), then specify
the maxTopologyDistance field when creating a workload policy.
You cannot update a workload policy after you create it. To make changes in a
workload policy, you must create a new one.
To create a workload policy, select one of the following options:
gcloud REST
More
To create a workload policy, use the
gcloud compute resource-policies create workload-policy command .
For a best-effort placement of VMs, specify only the
--type=high-throughput flag in the command:
gcloud compute resource-policies create workload-policy WORKLOAD_POLICY_NAME \
--type=high-throughput \
--region= REGION
For strict colocation of VMs, specify the --max-topology-distance flag in the
command:
gcloud compute resource-policies create workload-policy WORKLOAD_POLICY_NAME \
--type=high-throughput \
--max-topology-distance= TOPOLOGY_DISTANCE \
--region= REGION
Replace the following:
WORKLOAD_POLICY_NAME : the name of the workload policy.
TOPOLOGY_DISTANCE : the maximum topology distance. Specify one of
the following values:
To place VMs in the same cluster: CLUSTER
To place VMs in the same block: BLOCK
To place VMs in the same sub-block: SUBBLOCK
Note: A shorter maximum distance can reduce the probability of VM
availability.
REGION : the region where you want to create the workload policy.
Specify a region in which you want to create the MIG and the machine type that you want to
use is available. For information about regions, see
GPU availability by regions and zones .
To create a workload policy, make a POST
request to the resourcePolicies.insert method .
For a best-effort placement of VMs, specify only the type field in the
request as follows:
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION /resourcePolicies
{
"name": " WORKLOAD_POLICY_NAME "
"workloadPolicy": {
"type": "HIGH_THROUGHPUT"
}
}
For strict colocation of VMs, specify the maxTopologyDistance field in the
request as follows:
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION /resourcePolicies
{
"name": " WORKLOAD_POLICY_NAME "
"workloadPolicy": {
"type": "HIGH_THROUGHPUT",
"maxTopologyDistance": " TOPOLOGY_DISTANCE "
}
}
Replace the following:
PROJECT_ID : your project ID
REGION : the region where you want to create the workload policy.
Specify a region in which you want to create the MIG and the machine type that you want to
use is available. For information about regions, see
GPU availability by regions and zones .
WORKLOAD_POLICY_NAME : the name of the workload policy.
TOPOLOGY_DISTANCE : the maximum topology distance. Specify one of
the following values:
To place VMs in the same block: BLOCK
To place VMs in the same cluster: CLUSTER
Note: A shorter maximum distance can reduce the probability of VM
availability.
Create an instance template
Specify the VM properties for a MIG by creating an instance template.
To create an instance template, select one of the following options.
The following commands also set the access scope for your instances. To simplify permissions
management, Google recommends that you set the access scope on an instance to
cloud-platform access and then use IAM roles to define what services the instance can
access. For more information, see
Scopes best practice .
A3 Mega A3 High
More
To create an instance template for A3 Mega VMs, you must specify eight
additional network interfaces for GPUDirect-TCPXO traffic. If you haven't
already, make sure that you have created eight VPC networks as
described in Create VPC networks .
gcloud REST
More
The parameters that you need to specify depend on the
consumption option that you are using for
this deployment. Select the tab that corresponds to your consumption option's provisioning model.
Flex-start Reservation-bound Spot
More
To create a regional instance template, use the
gcloud compute instance-templates create command .
gcloud compute instance-templates create INSTANCE_TEMPLATE_NAME \
--machine-type= MACHINE_TYPE \
--image-family= IMAGE_FAMILY \
--image-project= IMAGE_PROJECT \
--instance-template-region= REGION \
--boot-disk-type=hyperdisk-balanced \
--boot-disk-size= DISK_SIZE \
--scopes=cloud-platform \
--network-interface=nic-type=GVNIC,network= GVNIC_NAME_PREFIX -net-0,subnet= GVNIC_NAME_PREFIX -sub-0 \
--network-interface=nic-type=GVNIC,network= GVNIC_NAME_PREFIX -net-1,subnet= GVNIC_NAME_PREFIX -sub-1,no-address
--network-interface=nic-type=GVNIC,network= GVNIC_NAME_PREFIX -net-2,subnet= GVNIC_NAME_PREFIX -sub-2,no-address \
--network-interface=nic-type=GVNIC,network= GVNIC_NAME_PREFIX -net-3,subnet= GVNIC_NAME_PREFIX -sub-3,no-address \
--network-interface=nic-type=GVNIC,network= GVNIC_NAME_PREFIX -net-4,subnet= GVNIC_NAME_PREFIX -sub-4,no-address \
--network-interface=nic-type=GVNIC,network= GVNIC_NAME_PREFIX -net-5,subnet= GVNIC_NAME_PREFIX -sub-5,no-address \
--network-interface=nic-type=GVNIC,network= GVNIC_NAME_PREFIX -net-6,subnet= GVNIC_NAME_PREFIX -sub-6,no-address \
--network-interface=nic-type=GVNIC,network= GVNIC_NAME_PREFIX -net-7,subnet= GVNIC_NAME_PREFIX -sub-7,no-address \
--network-interface=nic-type=GVNIC,network= GVNIC_NAME_PREFIX -net-8,subnet= GVNIC_NAME_PREFIX -sub-8,no-address \
--reservation-affinity=none \
--instance-termination-action=DELETE \
--max-run-duration= RUN_DURATION \
--maintenance-policy=TERMINATE \
--provisioning-model=FLEX_START
Replace the following:
INSTANCE_TEMPLATE_NAME : the name of the instance template.
MACHINE_TYPE : the machine type to use for the VM. Specify either an A4
or A3 Ultra machine type. For more information, see
GPU machine types .
IMAGE_FAMILY : the image family of the OS image that you want to use.
For a list of supported operating systems, see Supported operating systems .
IMAGE_PROJECT : the project ID of the OS image.
REGION : the region where you want to create the instance template.
Specify a region in which the machine type that you want to use is available.
For information about regions, see
GPU availability by regions and zones .
DISK_SIZE : the size of the boot disk in GB.
GVNIC_NAME_PREFIX : the name prefix that you specified when
creating the standard VPC networks and subnets that use gVNIC NICs.
RUN_DURATION : the duration you want the requested VMs
to run. You must format the value as the number of days, hours, minutes,
or seconds followed by d , h , m , and s respectively. For example,
specify 30m for 30 minutes or 1d2h3m4s for one day, two hours, three
minutes, and four seconds. The value must be between 10 minutes and
seven days.
To create a regional instance template, use the
gcloud compute instance-templates create command .
gcloud compute instance-templates create INSTANCE_TEMPLATE_NAME \
--machine-type= MACHINE_TYPE \
--image-family= IMAGE_FAMILY \
--image-project= IMAGE_PROJECT \
--instance-template-region= REGION \
--boot-disk-type=hyperdisk-balanced \
--boot-disk-size= DISK_SIZE \
--scopes=cloud-platform \
--network-interface=nic-type=GVNIC,network= GVNIC_NAME_PREFIX -net-0,subnet= GVNIC_NAME_PREFIX -sub-0 \
--network-interface=nic-type=GVNIC,network= GVNIC_NAME_PREFIX -net-1,subnet= GVNIC_NAME_PREFIX -sub-1,no-address
--network-interface=nic-type=GVNIC,network= GVNIC_NAME_PREFIX -net-2,subnet= GVNIC_NAME_PREFIX -sub-2,no-address \
--network-interface=nic-type=GVNIC,network= GVNIC_NAME_PREFIX -net-3,subnet= GVNIC_NAME_PREFIX -sub-3,no-address \
--network-interface=nic-type=GVNIC,network= GVNIC_NAME_PREFIX -net-4,subnet= GVNIC_NAME_PREFIX -sub-4,no-address \
--network-interface=nic-type=GVNIC,network= GVNIC_NAME_PREFIX -net-5,subnet= GVNIC_NAME_PREFIX -sub-5,no-address \
--network-interface=nic-type=GVNIC,network= GVNIC_NAME_PREFIX -net-6,subnet= GVNIC_NAME_PREFIX -sub-6,no-address \
--network-interface=nic-type=GVNIC,network= GVNIC_NAME_PREFIX -net-7,subnet= GVNIC_NAME_PREFIX -sub-7,no-address \
--network-interface=nic-type=GVNIC,network= GVNIC_NAME_PREFIX -net-8,subnet= GVNIC_NAME_PREFIX -sub-8,no-address \
--reservation-affinity=specific \
--reservation= RESERVATION \
--provisioning-model=RESERVATION_BOUND \
--instance-termination-action=DELETE \
--maintenance-policy=TERMINATE \
--restart-on-failure
Replace the following:
INSTANCE_TEMPLATE_NAME : the name of the instance template.
MACHINE_TYPE : the machine type to use for the VM. Specify either an A4
or A3 Ultra machine type. For more information, see
GPU machine types .
IMAGE_FAMILY : the image family of the OS image that you want to use.
For a list of supported operating systems, see Supported operating systems .
IMAGE_PROJECT : the project ID of the OS image.
REGION : the region where you want to create the instance template.
Specify a region in which the machine type that you want to use is available.
For information about regions, see
GPU availability by regions and zones .
DISK_SIZE : the size of the boot disk in GB.
GVNIC_NAME_PREFIX : the name prefix that you specified when
creating the standard VPC networks and subnets that use gVNIC NICs.
RESERVATION : either the reservation name or a specific block within a
reservation. To get the reservation name or the available blocks, see View reserved capacity . Based on your
requirement for instance placement, choose one of the following:
To create instances across blocks or on a single block:
projects/ RESERVATION_OWNER_PROJECT_ID /reservations/ RESERVATION_NAME
Additionally,
for a single block,
create the MIG by applying a workload policy
that specifies a block collocation ( maxTopologyDistance=BLOCK )
.
Compute Engine then applies the policy to the reservation and creates instances on the
same block.
To create instances
on a specific block:
projects/ RESERVATION_OWNER_PROJECT_ID /reservations/ RESERVATION_NAME /reservationBlocks/ RESERVATION_BLOCK_NAME
Tip: If the reservation exists in the current project, then you can omit
projects/ RESERVATION_OWNER_PROJECT_ID /reservations/ from the reservation
value.
To create a regional instance template, use the
gcloud compute instance-templates create command .
gcloud compute instance-templates create INSTANCE_TEMPLATE_NAME \
--machine-type= MACHINE_TYPE \
--image-family= IMAGE_FAMILY \
--image-project= IMAGE_PROJECT \
--instance-template-region= REGION \
--boot-disk-type=hyperdisk-balanced \
--boot-disk-size= DISK_SIZE \
--scopes=cloud-platform \
--network-interface=nic-type=GVNIC,network= GVNIC_NAME_PREFIX -net-0,subnet= GVNIC_NAME_PREFIX -sub-0 \
--network-interface=nic-type=GVNIC,network= GVNIC_NAME_PREFIX -net-1,subnet= GVNIC_NAME_PREFIX -sub-1,no-address
--network-interface=nic-type=GVNIC,network= GVNIC_NAME_PREFIX -net-2,subnet= GVNIC_NAME_PREFIX -sub-2,no-address \
--network-interface=nic-type=GVNIC,network= GVNIC_NAME_PREFIX -net-3,subnet= GVNIC_NAME_PREFIX -sub-3,no-address \
--network-interface=nic-type=GVNIC,network= GVNIC_NAME_PREFIX -net-4,subnet= GVNIC_NAME_PREFIX -sub-4,no-address \
--network-interface=nic-type=GVNIC,network= GVNIC_NAME_PREFIX -net-5,subnet= GVNIC_NAME_PREFIX -sub-5,no-address \
--network-interface=nic-type=GVNIC,network= GVNIC_NAME_PREFIX -net-6,subnet= GVNIC_NAME_PREFIX -sub-6,no-address \
--network-interface=nic-type=GVNIC,network= GVNIC_NAME_PREFIX -net-7,subnet= GVNIC_NAME_PREFIX -sub-7,no-address \
--network-interface=nic-type=GVNIC,network= GVNIC_NAME_PREFIX -net-8,subnet= GVNIC_NAME_PREFIX -sub-8,no-address \
--provisioning-model=SPOT \
--instance-termination-action= TERMINATION_ACTION \
--maintenance-policy=TERMINATE \
--no-restart-on-failure
Replace the following:
INSTANCE_TEMPLATE_NAME : the name of the instance template.
MACHINE_TYPE : the machine type to use for the VM. Specify either an A4
or A3 Ultra machine type. For more information, see
GPU machine types .
IMAGE_FAMILY : the image family of the OS image that you want to use.
For a list of supported operating systems, see Supported operating systems .
IMAGE_PROJECT : the project ID of the OS image.
REGION : the region where you want to create the instance template.
Specify a region in which the machine type that you want to use is available.
For information about regions, see
GPU availability by regions and zones .
DISK_SIZE : the size of the boot disk in GB.
GVNIC_NAME_PREFIX : the name prefix that you specified when
creating the standard VPC networks and subnets that use gVNIC NICs.
TERMINATION_ACTION : the action to take when Compute Engine
preempts the instance, either STOP (default) or DELETE .
Important: Make sure your application can handle preemption. For
example, handle preemption by
specifying a shutdown script during instance creation. Learn how to handle
preemption with a shutdown script .
The parameters that you need to specify depend on the
consumption option that you are using for
this deployment. Select the tab that corresponds to your consumption option's provisioning model.
Flex-start Reservation-bound Spot
More
To create a regional instance template, make a POST request to the
regionInstanceTemplates.insert method .
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION /instanceTemplates
{
"name":" INSTANCE_TEMPLATE_NAME ",
"properties":{
"machineType":" MACHINE_TYPE ",
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
"network": "projects/ NETWORK_PROJECT_ID /global/networks/ GVNIC_NAME_PREFIX -net-0",
"nicType": "GVNIC",
"subnetwork": "projects/ NETWORK_PROJECT_ID /region/ REGION /subnetworks/ GVNIC_NAME_PREFIX -sub-0"
},
{
"network": "projects/ NETWORK_PROJECT_ID /global/networks/ GVNIC_NAME_PREFIX -net-1",
"nicType": "GVNIC",
"subnetwork": "projects/ NETWORK_PROJECT_ID /region/ REGION /subnetworks/ GVNIC_NAME_PREFIX -sub-1"
},
{
"network": "projects/ NETWORK_PROJECT_ID /global/networks/ GVNIC_NAME_PREFIX -net-2",
"nicType": "GVNIC",
"subnetwork": "projects/ NETWORK_PROJECT_ID /region/ REGION /subnetworks/ GVNIC_NAME_PREFIX -sub-2"
},
{
"network": "projects/ NETWORK_PROJECT_ID /global/networks/ GVNIC_NAME_PREFIX -net-3",
"nicType": "GVNIC",
"subnetwork": "projects/ NETWORK_PROJECT_ID /region/ REGION /subnetworks/ GVNIC_NAME_PREFIX -sub-3"
},
{
"network": "projects/ NETWORK_PROJECT_ID /global/networks/ GVNIC_NAME_PREFIX -net-4",
"nicType": "GVNIC",
"subnetwork": "projects/ NETWORK_PROJECT_ID /region/ REGION /subnetworks/ GVNIC_NAME_PREFIX -sub-4"
},
{
"network": "projects/ NETWORK_PROJECT_ID /global/networks/ GVNIC_NAME_PREFIX -net-5",
"nicType": "GVNIC",
"subnetwork": "projects/ NETWORK_PROJECT_ID /region/ REGION /subnetworks/ GVNIC_NAME_PREFIX -sub-5"
},
{
"network": "projects/ NETWORK_PROJECT_ID /global/networks/ GVNIC_NAME_PREFIX -net-6",
"nicType": "GVNIC",
"subnetwork": "projects/ NETWORK_PROJECT_ID /region/ REGION /subnetworks/ GVNIC_NAME_PREFIX -sub-6"
},
{
"network": "projects/ NETWORK_PROJECT_ID /global/networks/ GVNIC_NAME_PREFIX -net-7",
"nicType": "GVNIC",
"subnetwork": "projects/ NETWORK_PROJECT_ID /region/ REGION /subnetworks/ GVNIC_NAME_PREFIX -sub-7"
},
{
"network": "projects/ NETWORK_PROJECT_ID /global/networks/ GVNIC_NAME_PREFIX -net-8",
"nicType": "GVNIC",
"subnetwork": "projects/ NETWORK_PROJECT_ID /region/ REGION /subnetworks/ GVNIC_NAME_PREFIX -sub-8"
}
],
"reservationAffinity": {
"consumeReservationType": "NO_RESERVATION"
},
"scheduling": {
"instanceTerminationAction": "DELETE",
"maxRunDuration": {
"seconds": RUN_DURATION
},
"onHostMaintenance": "TERMINATE",
"provisioningModel": "FLEX_START"
}
}
}
Replace the following:
INSTANCE_TEMPLATE_NAME : the name of the instance template.
MACHINE_TYPE : the machine type to use for the VM. Specify either an A4
or A3 Ultra machine type. For more information, see
GPU machine types .
IMAGE_FAMILY : the image family of the OS image that you want to use.
For a list of supported operating systems, see Supported operating systems .
IMAGE_PROJECT : the project ID of the OS image.
REGION : the region where you want to create the instance template.
Specify a region in which the machine type that you want to use is available.
For information about regions, see
GPU availability by regions and zones .
DISK_SIZE : the size of the boot disk in GB.
NETWORK_PROJECT_ID : the project ID of the network.
GVNIC_NAME_PREFIX : the name prefix that you specified when
creating the standard VPC networks and subnets that use gVNIC NICs.
REGION : the region of the subnetwork.
RUN_DURATION : the duration, in seconds, you want the
requested VMs to run. The value must be between 600 , which is 600
seconds (10 minutes), and 604800 , which is 604,800 seconds (seven
days).
To create a regional instance template, make a POST request to the
regionInstanceTemplates.insert method .
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION /instanceTemplates
{
"name":" INSTANCE_TEMPLATE_NAME ",
"properties":{
"machineType":" MACHINE_TYPE ",
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
"network": "projects/ NETWORK_PROJECT_ID /global/networks/ GVNIC_NAME_PREFIX -net-0",
"nicType": "GVNIC",
"subnetwork": "projects/ NETWORK_PROJECT_ID /region/ REGION /subnetworks/ GVNIC_NAME_PREFIX -sub-0"
},
{
"network": "projects/ NETWORK_PROJECT_ID /global/networks/ GVNIC_NAME_PREFIX -net-1",
"nicType": "GVNIC",
"subnetwork": "projects/ NETWORK_PROJECT_ID /region/ REGION /subnetworks/ GVNIC_NAME_PREFIX -sub-1"
},
{
"network": "projects/ NETWORK_PROJECT_ID /global/networks/ GVNIC_NAME_PREFIX -net-2",
"nicType": "GVNIC",
"subnetwork": "projects/ NETWORK_PROJECT_ID /region/ REGION /subnetworks/ GVNIC_NAME_PREFIX -sub-2"
},
{
"network": "projects/ NETWORK_PROJECT_ID /global/networks/ GVNIC_NAME_PREFIX -net-3",
"nicType": "GVNIC",
"subnetwork": "projects/ NETWORK_PROJECT_ID /region/ REGION /subnetworks/ GVNIC_NAME_PREFIX -sub-3"
},
{
"network": "projects/ NETWORK_PROJECT_ID /global/networks/ GVNIC_NAME_PREFIX -net-4",
"nicType": "GVNIC",
"subnetwork": "projects/ NETWORK_PROJECT_ID /region/ REGION /subnetworks/ GVNIC_NAME_PREFIX -sub-4"
},
{
"network": "projects/ NETWORK_PROJECT_ID /global/networks/ GVNIC_NAME_PREFIX -net-5",
"nicType": "GVNIC",
"subnetwork": "projects/ NETWORK_PROJECT_ID /region/ REGION /subnetworks/ GVNIC_NAME_PREFIX -sub-5"
},
{
"network": "projects/ NETWORK_PROJECT_ID /global/networks/ GVNIC_NAME_PREFIX -net-6",
"nicType": "GVNIC",
"subnetwork": "projects/ NETWORK_PROJECT_ID /region/ REGION /subnetworks/ GVNIC_NAME_PREFIX -sub-6"
},
{
"network": "projects/ NETWORK_PROJECT_ID /global/networks/ GVNIC_NAME_PREFIX -net-7",
"nicType": "GVNIC",
"subnetwork": "projects/ NETWORK_PROJECT_ID /region/ REGION /subnetworks/ GVNIC_NAME_PREFIX -sub-7"
},
{
"network": "projects/ NETWORK_PROJECT_ID /global/networks/ GVNIC_NAME_PREFIX -net-8",
"nicType": "GVNIC",
"subnetwork": "projects/ NETWORK_PROJECT_ID /region/ REGION /subnetworks/ GVNIC_NAME_PREFIX -sub-8"
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
}
}
}
Replace the following:
INSTANCE_TEMPLATE_NAME : the name of the instance template.
MACHINE_TYPE : the machine type to use for the VM. Specify either an A4
or A3 Ultra machine type. For more information, see
GPU machine types .
IMAGE_FAMILY : the image family of the OS image that you want to use.
For a list of supported operating systems, see Supported operating systems .
IMAGE_PROJECT : the project ID of the OS image.
REGION : the region where you want to create the instance template.
Specify a region in which the machine type that you want to use is available.
For information about regions, see
GPU availability by regions and zones .
DISK_SIZE : the size of the boot disk in GB.
NETWORK_PROJECT_ID : the project ID of the network.
GVNIC_NAME_PREFIX : the name prefix that you specified when
creating the standard VPC networks and subnets that use gVNIC NICs.
REGION : the region of the subnetwork.
RESERVATION : either the reservation name or a specific block within a
reservation. To get the reservation name or the available blocks, see View reserved capacity . Based on your
requirement for instance placement, choose one of the following:
To create instances across blocks or on a single block:
projects/ RESERVATION_OWNER_PROJECT_ID /reservations/ RESERVATION_NAME
Additionally,
for a single block,
create the MIG by applying a workload policy
that specifies a block collocation ( maxTopologyDistance=BLOCK )
.
Compute Engine then applies the policy to the reservation and creates instances on the
same block.
To create instances
on a specific block:
projects/ RESERVATION_OWNER_PROJECT_ID /reservations/ RESERVATION_NAME /reservationBlocks/ RESERVATION_BLOCK_NAME
Tip: If the reservation exists in the current project, then you can omit
projects/ RESERVATION_OWNER_PROJECT_ID /reservations/ from the reservation
value.
To create a regional instance template, make a POST request to the
regionInstanceTemplates.insert method .
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION /instanceTemplates
{
"name":" INSTANCE_TEMPLATE_NAME ",
"properties":{
"machineType":" MACHINE_TYPE ",
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
"network": "projects/ NETWORK_PROJECT_ID /global/networks/ GVNIC_NAME_PREFIX -net-0",
"nicType": "GVNIC",
"subnetwork": "projects/ NETWORK_PROJECT_ID /region/ REGION /subnetworks/ GVNIC_NAME_PREFIX -sub-0"
},
{
"network": "projects/ NETWORK_PROJECT_ID /global/networks/ GVNIC_NAME_PREFIX -net-1",
"nicType": "GVNIC",
"subnetwork": "projects/ NETWORK_PROJECT_ID /region/ REGION /subnetworks/ GVNIC_NAME_PREFIX -sub-1"
},
{
"network": "projects/ NETWORK_PROJECT_ID /global/networks/ GVNIC_NAME_PREFIX -net-2",
"nicType": "GVNIC",
"subnetwork": "projects/ NETWORK_PROJECT_ID /region/ REGION /subnetworks/ GVNIC_NAME_PREFIX -sub-2"
},
{
"network": "projects/ NETWORK_PROJECT_ID /global/networks/ GVNIC_NAME_PREFIX -net-3",
"nicType": "GVNIC",
"subnetwork": "projects/ NETWORK_PROJECT_ID /region/ REGION /subnetworks/ GVNIC_NAME_PREFIX -sub-3"
},
{
"network": "projects/ NETWORK_PROJECT_ID /global/networks/ GVNIC_NAME_PREFIX -net-4",
"nicType": "GVNIC",
"subnetwork": "projects/ NETWORK_PROJECT_ID /region/ REGION /subnetworks/ GVNIC_NAME_PREFIX -sub-4"
},
{
"network": "projects/ NETWORK_PROJECT_ID /global/networks/ GVNIC_NAME_PREFIX -net-5",
"nicType": "GVNIC",
"subnetwork": "projects/ NETWORK_PROJECT_ID /region/ REGION /subnetworks/ GVNIC_NAME_PREFIX -sub-5"
},
{
"network": "projects/ NETWORK_PROJECT_ID /global/networks/ GVNIC_NAME_PREFIX -net-6",
"nicType": "GVNIC",
"subnetwork": "projects/ NETWORK_PROJECT_ID /region/ REGION /subnetworks/ GVNIC_NAME_PREFIX -sub-6"
},
{
"network": "projects/ NETWORK_PROJECT_ID /global/networks/ GVNIC_NAME_PREFIX -net-7",
"nicType": "GVNIC",
"subnetwork": "projects/ NETWORK_PROJECT_ID /region/ REGION /subnetworks/ GVNIC_NAME_PREFIX -sub-7"
},
{
"network": "projects/ NETWORK_PROJECT_ID /global/networks/ GVNIC_NAME_PREFIX -net-8",
"nicType": "GVNIC",
"subnetwork": "projects/ NETWORK_PROJECT_ID /region/ REGION /subnetworks/ GVNIC_NAME_PREFIX -sub-8"
}
],
"scheduling":
{
"provisioningModel": "SPOT",
"instanceTerminationAction": "TERMINATION_ACTION",
"onHostMaintenance": "TERMINATE",
"automaticRestart": false
}
}
}
Replace the following:
INSTANCE_TEMPLATE_NAME : the name of the instance template.
MACHINE_TYPE : the machine type to use for the VM. Specify either an A4
or A3 Ultra machine type. For more information, see
GPU machine types .
IMAGE_FAMILY : the image family of the OS image that you want to use.
For a list of supported operating systems, see Supported operating systems .
IMAGE_PROJECT : the project ID of the OS image.
REGION : the region where you want to create the instance template.
Specify a region in which the machine type that you want to use is available.
For information about regions, see
GPU availability by regions and zones .
DISK_SIZE : the size of the boot disk in GB.
NETWORK_PROJECT_ID : the project ID of the network.
GVNIC_NAME_PREFIX : the name prefix that you specified when
creating the standard VPC networks and subnets that use gVNIC NICs.
REGION : the region of the subnetwork.
TERMINATION_ACTION : the action to take when Compute Engine
preempts the instance, either STOP (default) or DELETE .
Important: Make sure your application can handle preemption. For
example, handle preemption by
specifying a shutdown script during instance creation. Learn how to handle
preemption with a shutdown script .
To create an instance template for A3 High VMs, you must specify four
additional network interfaces for GPUDirect-TCPX traffic. If you haven't
already, make sure that you have created four VPC networks as
described in Create VPC networks .
gcloud REST
More
The parameters that you need to specify depend on the
consumption option that you are using for
this deployment. Select the tab that corresponds to your consumption option's provisioning model.
Flex-start Reservation-bound Spot
More
To create a regional instance template, use the
gcloud compute instance-templates create command .
gcloud compute instance-templates create INSTANCE_TEMPLATE_NAME \
--machine-type= MACHINE_TYPE \
--image-family= IMAGE_FAMILY \
--image-project= IMAGE_PROJECT \
--instance-template-region= REGION \
--boot-disk-type=hyperdisk-balanced \
--boot-disk-size= DISK_SIZE \
--scopes=cloud-platform \
--network-interface=nic-type=GVNIC,network= GVNIC_NAME_PREFIX -net-0,subnet= GVNIC_NAME_PREFIX -sub-0 \
--network-interface=nic-type=GVNIC,network= GVNIC_NAME_PREFIX -net-1,subnet= GVNIC_NAME_PREFIX -sub-1,no-address
--network-interface=nic-type=GVNIC,network= GVNIC_NAME_PREFIX -net-2,subnet= GVNIC_NAME_PREFIX -sub-2,no-address \
--network-interface=nic-type=GVNIC,network= GVNIC_NAME_PREFIX -net-3,subnet= GVNIC_NAME_PREFIX -sub-3,no-address \
--network-interface=nic-type=GVNIC,network= GVNIC_NAME_PREFIX -net-4,subnet= GVNIC_NAME_PREFIX -sub-4,no-address \
--reservation-affinity=none \
--instance-termination-action=DELETE \
--max-run-duration= RUN_DURATION \
--maintenance-policy=TERMINATE \
--provisioning-model=FLEX_START
Replace the following:
INSTANCE_TEMPLATE_NAME : the name of the instance template.
MACHINE_TYPE : the machine type to use for the VM. Specify either an A4
or A3 Ultra machine type. For more information, see
GPU machine types .
IMAGE_FAMILY : the image family of the OS image that you want to use.
For a list of supported operating systems, see Supported operating systems .
IMAGE_PROJECT : the project ID of the OS image.
REGION : the region where you want to create the instance template.
Specify a region in which the machine type that you want to use is available.
For information about regions, see
GPU availability by regions and zones .
DISK_SIZE : the size of the boot disk in GB.
GVNIC_NAME_PREFIX : the name prefix that you specified when
creating the standard VPC networks and subnets that use gVNIC NICs.
RUN_DURATION : the duration you want the requested VMs
to run. You must format the value as the number of days, hours, minutes,
or seconds followed by d , h , m , and s respectively. For example,
specify 30m for 30 minutes or 1d2h3m4s for one day, two hours, three
minutes, and four seconds. The value must be between 10 minutes and
seven days.
To create a regional instance template, use the
gcloud compute instance-templates create command .
gcloud compute instance-templates create INSTANCE_TEMPLATE_NAME \
--machine-type= MACHINE_TYPE \
--image-family= IMAGE_FAMILY \
--image-project= IMAGE_PROJECT \
--instance-template-region= REGION \
--boot-disk-type=hyperdisk-balanced \
--boot-disk-size= DISK_SIZE \
--scopes=cloud-platform \
--network-interface=nic-type=GVNIC,network= GVNIC_NAME_PREFIX -net-0,subnet= GVNIC_NAME_PREFIX -sub-0 \
--network-interface=nic-type=GVNIC,network= GVNIC_NAME_PREFIX -net-1,subnet= GVNIC_NAME_PREFIX -sub-1,no-address
--network-interface=nic-type=GVNIC,network= GVNIC_NAME_PREFIX -net-2,subnet= GVNIC_NAME_PREFIX -sub-2,no-address \
--network-interface=nic-type=GVNIC,network= GVNIC_NAME_PREFIX -net-3,subnet= GVNIC_NAME_PREFIX -sub-3,no-address \
--network-interface=nic-type=GVNIC,network= GVNIC_NAME_PREFIX -net-4,subnet= GVNIC_NAME_PREFIX -sub-4,no-address \
--reservation-affinity=specific \
--reservation= RESERVATION \
--provisioning-model=RESERVATION_BOUND \
--instance-termination-action=DELETE \
--maintenance-policy=TERMINATE \
--restart-on-failure
Replace the following:
INSTANCE_TEMPLATE_NAME : the name of the instance template.
MACHINE_TYPE : the machine type to use for the VM. Specify either an A4
or A3 Ultra machine type. For more information, see
GPU machine types .
IMAGE_FAMILY : the image family of the OS image that you want to use.
For a list of supported operating systems, see Supported operating systems .
IMAGE_PROJECT : the project ID of the OS image.
REGION : the region where you want to create the instance template.
Specify a region in which the machine type that you want to use is available.
For information about regions, see
GPU availability by regions and zones .
DISK_SIZE : the size of the boot disk in GB.
GVNIC_NAME_PREFIX : the name prefix that you specified when
creating the standard VPC networks and subnets that use gVNIC NICs.
RESERVATION : either the reservation name or a specific block within a
reservation. To get the reservation name or the available blocks, see View reserved capacity . Based on your
requirement for instance placement, choose one of the following:
To create instances across blocks or on a single block:
projects/ RESERVATION_OWNER_PROJECT_ID /reservations/ RESERVATION_NAME
Additionally,
for a single block,
create the MIG by applying a workload policy
that specifies a block collocation ( maxTopologyDistance=BLOCK )
.
Compute Engine then applies the policy to the reservation and creates instances on the
same block.
To create instances
on a specific block:
projects/ RESERVATION_OWNER_PROJECT_ID /reservations/ RESERVATION_NAME /reservationBlocks/ RESERVATION_BLOCK_NAME
Tip: If the reservation exists in the current project, then you can omit
projects/ RESERVATION_OWNER_PROJECT_ID /reservations/ from the reservation
value.
To create a regional instance template, use the
gcloud compute instance-templates create command .
gcloud compute instance-templates create INSTANCE_TEMPLATE_NAME \
--machine-type= MACHINE_TYPE \
--image-family= IMAGE_FAMILY \
--image-project= IMAGE_PROJECT \
--instance-template-region= REGION \
--boot-disk-type=hyperdisk-balanced \
--boot-disk-size= DISK_SIZE \
--scopes=cloud-platform \
--network-interface=nic-type=GVNIC,network= GVNIC_NAME_PREFIX -net-0,subnet= GVNIC_NAME_PREFIX -sub-0 \
--network-interface=nic-type=GVNIC,network= GVNIC_NAME_PREFIX -net-1,subnet= GVNIC_NAME_PREFIX -sub-1,no-address
--network-interface=nic-type=GVNIC,network= GVNIC_NAME_PREFIX -net-2,subnet= GVNIC_NAME_PREFIX -sub-2,no-address \
--network-interface=nic-type=GVNIC,network= GVNIC_NAME_PREFIX -net-3,subnet= GVNIC_NAME_PREFIX -sub-3,no-address \
--network-interface=nic-type=GVNIC,network= GVNIC_NAME_PREFIX -net-4,subnet= GVNIC_NAME_PREFIX -sub-4,no-address \
--provisioning-model=SPOT \
--instance-termination-action= TERMINATION_ACTION \
--maintenance-policy=TERMINATE \
--no-restart-on-failure
Replace the following:
INSTANCE_TEMPLATE_NAME : the name of the instance template.
MACHINE_TYPE : the machine type to use for the VM. Specify either an A4
or A3 Ultra machine type. For more information, see
GPU machine types .
IMAGE_FAMILY : the image family of the OS image that you want to use.
For a list of supported operating systems, see Supported operating systems .
IMAGE_PROJECT : the project ID of the OS image.
REGION : the region where you want to create the instance template.
Specify a region in which the machine type that you want to use is available.
For information about regions, see
GPU availability by regions and zones .
DISK_SIZE : the size of the boot disk in GB.
GVNIC_NAME_PREFIX : the name prefix that you specified when
creating the standard VPC networks and subnets that use gVNIC NICs.
TERMINATION_ACTION : the action to take when Compute Engine
preempts the instance, either STOP (default) or DELETE .
Important: Make sure your application can handle preemption. For
example, handle preemption by
specifying a shutdown script during instance creation. Learn how to handle
preemption with a shutdown script .
The parameters that you need to specify depend on the
consumption option that you are using for
this deployment. Select the tab that corresponds to your consumption option's provisioning model.
Flex-start Reservation-bound Spot
More
To create a regional instance template, make a POST request to the
regionInstanceTemplates.insert method .
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION /instanceTemplates
{
"name":" INSTANCE_TEMPLATE_NAME ",
"properties":{
"machineType":" MACHINE_TYPE ",
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
"network": "projects/ NETWORK_PROJECT_ID /global/networks/ GVNIC_NAME_PREFIX -net-0",
"nicType": "GVNIC",
"subnetwork": "projects/ NETWORK_PROJECT_ID /region/ REGION /subnetworks/ GVNIC_NAME_PREFIX -sub-0"
},
{
"network": "projects/ NETWORK_PROJECT_ID /global/networks/ GVNIC_NAME_PREFIX -net-1",
"nicType": "GVNIC",
"subnetwork": "projects/ NETWORK_PROJECT_ID /region/ REGION /subnetworks/ GVNIC_NAME_PREFIX -sub-1"
},
{
"network": "projects/ NETWORK_PROJECT_ID /global/networks/ GVNIC_NAME_PREFIX -net-2",
"nicType": "GVNIC",
"subnetwork": "projects/ NETWORK_PROJECT_ID /region/ REGION /subnetworks/ GVNIC_NAME_PREFIX -sub-2"
},
{
"network": "projects/ NETWORK_PROJECT_ID /global/networks/ GVNIC_NAME_PREFIX -net-3",
"nicType": "GVNIC",
"subnetwork": "projects/ NETWORK_PROJECT_ID /region/ REGION /subnetworks/ GVNIC_NAME_PREFIX -sub-3"
},
{
"network": "projects/ NETWORK_PROJECT_ID /global/networks/ GVNIC_NAME_PREFIX -net-4",
"nicType": "GVNIC",
"subnetwork": "projects/ NETWORK_PROJECT_ID /region/ REGION /subnetworks/ GVNIC_NAME_PREFIX -sub-4"
}
],
"reservationAffinity": {
"consumeReservationType": "NO_RESERVATION"
},
"scheduling": {
"instanceTerminationAction": "DELETE",
"maxRunDuration": {
"seconds": RUN_DURATION
},
"onHostMaintenance": "TERMINATE",
"provisioningModel": "FLEX_START"
}
}
}
Replace the following:
INSTANCE_TEMPLATE_NAME : the name of the instance template.
MACHINE_TYPE : the machine type to use for the VM. Specify either an A4
or A3 Ultra machine type. For more information, see
GPU machine types .
IMAGE_FAMILY : the image family of the OS image that you want to use.
For a list of supported operating systems, see Supported operating systems .
IMAGE_PROJECT : the project ID of the OS image.
REGION : the region where you want to create the instance template.
Specify a region in which the machine type that you want to use is available.
For information about regions, see
GPU availability by regions and zones .
DISK_SIZE : the size of the boot disk in GB.
NETWORK_PROJECT_ID : the project ID of the network.
GVNIC_NAME_PREFIX : the name prefix that you specified when
creating the standard VPC networks and subnets that use gVNIC NICs.
REGION : the region of the subnetwork.
RUN_DURATION : the duration, in seconds, you want the
requested VMs to run. The value must be between 600 , which is 600
seconds (10 minutes), and 604800 , which is 604,800 seconds (seven
days).
To create a regional instance template, make a POST request to the
regionInstanceTemplates.insert method .
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION /instanceTemplates
{
"name":" INSTANCE_TEMPLATE_NAME ",
"properties":{
"machineType":" MACHINE_TYPE ",
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
"network": "projects/ NETWORK_PROJECT_ID /global/networks/ GVNIC_NAME_PREFIX -net-0",
"nicType": "GVNIC",
"subnetwork": "projects/ NETWORK_PROJECT_ID /region/ REGION /subnetworks/ GVNIC_NAME_PREFIX -sub-0"
},
{
"network": "projects/ NETWORK_PROJECT_ID /global/networks/ GVNIC_NAME_PREFIX -net-1",
"nicType": "GVNIC",
"subnetwork": "projects/ NETWORK_PROJECT_ID /region/ REGION /subnetworks/ GVNIC_NAME_PREFIX -sub-1"
},
{
"network": "projects/ NETWORK_PROJECT_ID /global/networks/ GVNIC_NAME_PREFIX -net-2",
"nicType": "GVNIC",
"subnetwork": "projects/ NETWORK_PROJECT_ID /region/ REGION /subnetworks/ GVNIC_NAME_PREFIX -sub-2"
},
{
"network": "projects/ NETWORK_PROJECT_ID /global/networks/ GVNIC_NAME_PREFIX -net-3",
"nicType": "GVNIC",
"subnetwork": "projects/ NETWORK_PROJECT_ID /region/ REGION /subnetworks/ GVNIC_NAME_PREFIX -sub-3"
},
{
"network": "projects/ NETWORK_PROJECT_ID /global/networks/ GVNIC_NAME_PREFIX -net-4",
"nicType": "GVNIC",
"subnetwork": "projects/ NETWORK_PROJECT_ID /region/ REGION /subnetworks/ GVNIC_NAME_PREFIX -sub-4"
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
}
}
}
Replace the following:
INSTANCE_TEMPLATE_NAME : the name of the instance template.
MACHINE_TYPE : the machine type to use for the VM. Specify either an A4
or A3 Ultra machine type. For more information, see
GPU machine types .
IMAGE_FAMILY : the image family of the OS image that you want to use.
For a list of supported operating systems, see Supported operating systems .
IMAGE_PROJECT : the project ID of the OS image.
REGION : the region where you want to create the instance template.
Specify a region in which the machine type that you want to use is available.
For information about regions, see
GPU availability by regions and zones .
DISK_SIZE : the size of the boot disk in GB.
NETWORK_PROJECT_ID : the project ID of the network.
GVNIC_NAME_PREFIX : the name prefix that you specified when
creating the standard VPC networks and subnets that use gVNIC NICs.
REGION : the region of the subnetwork.
RESERVATION : either the reservation name or a specific block within a
reservation. To get the reservation name or the available blocks, see View reserved capacity . Based on your
requirement for instance placement, choose one of the following:
To create instances across blocks or on a single block:
projects/ RESERVATION_OWNER_PROJECT_ID /reservations/ RESERVATION_NAME
Additionally,
for a single block,
create the MIG by applying a workload policy
that specifies a block collocation ( maxTopologyDistance=BLOCK )
.
Compute Engine then applies the policy to the reservation and creates instances on the
same block.
To create instances
on a specific block:
projects/ RESERVATION_OWNER_PROJECT_ID /reservations/ RESERVATION_NAME /reservationBlocks/ RESERVATION_BLOCK_NAME
Tip: If the reservation exists in the current project, then you can omit
projects/ RESERVATION_OWNER_PROJECT_ID /reservations/ from the reservation
value.
To create a regional instance template, make a POST request to the
regionInstanceTemplates.insert method .
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION /instanceTemplates
{
"name":" INSTANCE_TEMPLATE_NAME ",
"properties":{
"machineType":" MACHINE_TYPE ",
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
"network": "projects/ NETWORK_PROJECT_ID /global/networks/ GVNIC_NAME_PREFIX -net-0",
"nicType": "GVNIC",
"subnetwork": "projects/ NETWORK_PROJECT_ID /region/ REGION /subnetworks/ GVNIC_NAME_PREFIX -sub-0"
},
{
"network": "projects/ NETWORK_PROJECT_ID /global/networks/ GVNIC_NAME_PREFIX -net-1",
"nicType": "GVNIC",
"subnetwork": "projects/ NETWORK_PROJECT_ID /region/ REGION /subnetworks/ GVNIC_NAME_PREFIX -sub-1"
},
{
"network": "projects/ NETWORK_PROJECT_ID /global/networks/ GVNIC_NAME_PREFIX -net-2",
"nicType": "GVNIC",
"subnetwork": "projects/ NETWORK_PROJECT_ID /region/ REGION /subnetworks/ GVNIC_NAME_PREFIX -sub-2"
},
{
"network": "projects/ NETWORK_PROJECT_ID /global/networks/ GVNIC_NAME_PREFIX -net-3",
"nicType": "GVNIC",
"subnetwork": "projects/ NETWORK_PROJECT_ID /region/ REGION /subnetworks/ GVNIC_NAME_PREFIX -sub-3"
},
{
"network": "projects/ NETWORK_PROJECT_ID /global/networks/ GVNIC_NAME_PREFIX -net-4",
"nicType": "GVNIC",
"subnetwork": "projects/ NETWORK_PROJECT_ID /region/ REGION /subnetworks/ GVNIC_NAME_PREFIX -sub-4"
}
],
"scheduling":
{
"provisioningModel": "SPOT",
"instanceTerminationAction": "TERMINATION_ACTION",
"onHostMaintenance": "TERMINATE",
"automaticRestart": false
}
}
}
Replace the following:
INSTANCE_TEMPLATE_NAME : the name of the instance template.
MACHINE_TYPE : the machine type to use for the VM. Specify either an A4
or A3 Ultra machine type. For more information, see
GPU machine types .
IMAGE_FAMILY : the image family of the OS image that you want to use.
For a list of supported operating systems, see Supported operating systems .
IMAGE_PROJECT : the project ID of the OS image.
REGION : the region where you want to create the instance template.
Specify a region in which the machine type that you want to use is available.
For information about regions, see
GPU availability by regions and zones .
DISK_SIZE : the size of the boot disk in GB.
NETWORK_PROJECT_ID : the project ID of the network.
GVNIC_NAME_PREFIX : the name prefix that you specified when
creating the standard VPC networks and subnets that use gVNIC NICs.
REGION : the region of the subnetwork.
TERMINATION_ACTION : the action to take when Compute Engine
preempts the instance, either STOP (default) or DELETE .
Important: Make sure your application can handle preemption. For
example, handle preemption by
specifying a shutdown script during instance creation. Learn how to handle
preemption with a shutdown script .
After you create the instance template, you can
view it
to see its ID and review its instance properties.
Create a MIG
After you complete all the previous steps, create a MIG based on your scenario
as follows:
Scenario
Method to create a MIG and VMs in it
Example
You have multiple or parallel jobs that can start with any number of VMs.
Create a MIG and use the target size to specify the number of VMs that you want in the group.
See Create a MIG with target size .
ML inference jobs
You have a job that requires distribution across an exact number of VMs.
Create a MIG without any VMs in it, and then create a resize request in the MIG.
The resize request helps you to obtain VMs all at once.
See Create a MIG and a resize request .
Distributed ML training and fine-tuning jobs
Create a MIG with target size
If you can start your job without creating all of the VMs at once, then create a
MIG with a target size . The target size determines the number of VMs in the
MIG. The MIG starts creating VMs based on current resource availability. If any
resource is temporarily unavailable, the MIG continuously attempts to create VMs
to meet the target size.
To create a MIG with a target size, select one of the following options:
gcloud REST
More
To create a MIG with a specified target size, use the
instance-groups managed
create command .
Note: You cannot specify an instance template that uses the flex-start
provisioning model when creating a MIG with a specified target size.
The commands that you use to create a MIG use a workload policy to specify instance placement. If you
don't want to use a workload policy, then remove the --workload-policy flag.
Create a zonal or regional MIG as follows:
To create a zonal MIG, use the following command:
gcloud compute instance-groups managed create MIG_NAME \
--template= INSTANCE_TEMPLATE_URL \
--size= TARGET_SIZE \
--workload-policy= WORKLOAD_POLICY_URL \
--zone= ZONE
To create a regional MIG, use the following command:
gcloud compute instance-groups managed create MIG_NAME \
--template= INSTANCE_TEMPLATE_URL \
--size= TARGET_SIZE \
--workload-policy= WORKLOAD_POLICY_URL \
--region= REGION
Replace the following:
MIG_NAME : the name of the MIG.
INSTANCE_TEMPLATE_URL : the URL of the instance template that you want to
use to create instances in the MIG. The URL can contain either the
ID
or name of the instance template. Specify one of the following values:
For a regional instance template: projects/ PROJECT_ID /regions/ REGION /instanceTemplates/ INSTANCE_TEMPLATE_ID
For a global instance template: INSTANCE_TEMPLATE_ID
TARGET_SIZE : the number of instances that you want in the
MIG.
WORKLOAD_POLICY_URL : Optional:
the URL of the workload policy. For example,
projects/example-project/regions/us-central1/resourcePolicies/example-workload-policy .
If you don't want to use a
workload policy, then you can remove the --workload-policy flag.
ZONE : the zone in which you want to create the
MIG.
If you use a workload policy, then specify a zone within the policy's region.
REGION : the region in which you want to create the
MIG. If you use a workload policy, then specify the same region as that of the policy.
For a regional MIG, instead of a region, you can specify the zones in that region by
using the --zones flag.
To create a MIG with a specified target size, make a POST request.
Note: You cannot specify an instance template that uses the flex-start
provisioning model when creating a MIG with a specified target size.
The requests that you use to create a MIG use a workload policy to specify instance placement.
If you don't want to use a workload policy, then remove the resourcePolicies.workloadPolicy
field.
Create a zonal or regional MIG as follows:
To create a zonal MIG, make a POST request to the
instanceGroupManagers.insert method .
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /instanceGroupManagers
{
"versions": [
{
"instanceTemplate": " INSTANCE_TEMPLATE_URL "
}
],
"name": " MIG_NAME ",
"instanceTemplate": " INSTANCE_TEMPLATE_URL ",
"targetSize": " TARGET_SIZE ",
"resourcePolicies": {
"workloadPolicy": WORKLOAD_POLICY_URL
}
}
To create a regional MIG, make a POST request to the
regionInstanceGroupManagers.insert method .
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION /instanceGroupManagers
{
"versions": [
{
"instanceTemplate": " INSTANCE_TEMPLATE_URL "
}
],
"name": " MIG_NAME ",
"instanceTemplate": " INSTANCE_TEMPLATE_URL ",
"targetSize": " TARGET_SIZE ",
"resourcePolicies": {
"workloadPolicy": WORKLOAD_POLICY_URL
}
}
Replace the following:
PROJECT_ID : the project ID.
ZONE : the zone in which you want to create the MIG.
If you use a workload policy, then specify a zone within the policy's region.
REGION : the region in which you want to create the MIG.
If you use a workload policy, then specify the same region as that of the policy.
INSTANCE_TEMPLATE_URL : the URL of the instance template that you want to
use to create instances in the MIG. The URL can contain either the
ID
or name of the instance template. Specify one of the following values:
For a regional instance template: projects/ PROJECT_ID /regions/ REGION /instanceTemplates/ INSTANCE_TEMPLATE_ID
For a global instance template: INSTANCE_TEMPLATE_ID
MIG_NAME : the name of the MIG.
TARGET_SIZE : the number of instances that you want in the MIG.
WORKLOAD_POLICY_URL : Optional:
the URL of the workload policy. For example,
projects/example-project/regions/us-central1/resourcePolicies/example-workload-policy .
If you don't want to use a workload
policy, then remove the resourcePolicies.workloadPolicy field.
Create a MIG and a resize request
Preview
— Resize requests in regional MIGs and resize request creation by specifying VM names in zonal and regional MIGs.
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
If you require multiple VMs all at once to start a job, then create a MIG, and
create a
resize request in the
MIG as described in this section.
To create a resize request in a MIG, select one of the following options.
gcloud REST
More
The parameters that you need to specify depend on the
consumption option that you are using for
this deployment. Select the tab that corresponds to your consumption option's provisioning model.
Flex-start Reservation-bound Spot
More
Create a zonal or regional MIG and a resize request as follows:
To create a zonal MIG and a resize request in it, do the following:
Create a zonal MIG using the
instance-groups managed create command
as follows.
gcloud compute instance-groups managed create MIG_NAME \
--template= INSTANCE_TEMPLATE_URL \
--size=0 \
--default-action-on-vm-failure=do-nothing \
--zone= ZONE
Create a resize request in the zonal MIG using the
instance-groups managed resize-requests create command
as follows:
gcloud compute instance-groups managed resize-requests create MIG_NAME \
--resize-request= RESIZE_REQUEST_NAME \
--resize-by= COUNT \
--zone= ZONE
To create a regional MIG and a resize request in it, do the following:
Create a regional MIG using the
instance-groups managed create command
as follows.
gcloud compute instance-groups managed create MIG_NAME \
--template= INSTANCE_TEMPLATE_URL \
--size=0 \
--default-action-on-vm-failure=do-nothing \
--zones= ZONE \
--target-distribution-shape=any-single-zone \
--instance-redistribution-type=none
Create a resize request in the regional MIG using the
beta instance-groups managed resize-requests create command
as follows:
gcloud beta compute instance-groups managed resize-requests create MIG_NAME \
--resize-request= RESIZE_REQUEST_NAME \
--resize-by= COUNT \
--region= REGION
The commands that you use to create a MIG use a workload policy to specify instance placement. If you
don't want to use a workload policy, then remove the --workload-policy flag.
Create a zonal or regional MIG and a resize request as follows:
To create a zonal MIG and a resize request in it, do the following:
Create a zonal MIG using the
instance-groups managed create command
as follows.
gcloud compute instance-groups managed create MIG_NAME \
--template= INSTANCE_TEMPLATE_URL \
--size=0 \
--workload-policy= WORKLOAD_POLICY_URL \
--zone= ZONE
Create a resize request in the zonal MIG using the
instance-groups managed resize-requests create command
as follows:
gcloud compute instance-groups managed resize-requests create MIG_NAME \
--resize-request= RESIZE_REQUEST_NAME \
--resize-by= COUNT \
--zone= ZONE
To create a regional MIG and a resize request in it, do the following:
Create a regional MIG using the
instance-groups managed create command
as follows.
gcloud compute instance-groups managed create MIG_NAME \
--template= INSTANCE_TEMPLATE_URL \
--size=0 \
--workload-policy= WORKLOAD_POLICY_URL \
--zones= ZONE \
--target-distribution-shape=any-single-zone \
--instance-redistribution-type=none
Create a resize request in the regional MIG using the
beta instance-groups managed resize-requests create command
as follows:
gcloud beta compute instance-groups managed resize-requests create MIG_NAME \
--resize-request= RESIZE_REQUEST_NAME \
--resize-by= COUNT \
--region= REGION
The commands that you use to create a MIG use a workload policy to specify instance placement. If you
don't want to use a workload policy, then remove the --workload-policy flag.
Create a zonal or regional MIG and a resize request as follows:
To create a zonal MIG and a resize request in it, do the following:
Create a zonal MIG using the
instance-groups managed create command
as follows.
gcloud compute instance-groups managed create MIG_NAME \
--template= INSTANCE_TEMPLATE_URL \
--size=0 \
--workload-policy= WORKLOAD_POLICY_URL \
--zone= ZONE
Create a resize request in the zonal MIG using the
instance-groups managed resize-requests create command
as follows:
gcloud compute instance-groups managed resize-requests create MIG_NAME \
--resize-request= RESIZE_REQUEST_NAME \
--resize-by= COUNT \
--zone= ZONE
To create a regional MIG and a resize request in it, do the following:
Create a regional MIG using the
instance-groups managed create command
as follows.
gcloud compute instance-groups managed create MIG_NAME \
--template= INSTANCE_TEMPLATE_URL \
--size=0 \
--workload-policy= WORKLOAD_POLICY_URL \
--zones= ZONE \
--target-distribution-shape=any-single-zone \
--instance-redistribution-type=none
Create a resize request in the regional MIG using the
beta instance-groups managed resize-requests create command
as follows:
gcloud beta compute instance-groups managed resize-requests create MIG_NAME \
--resize-request= RESIZE_REQUEST_NAME \
--resize-by= COUNT \
--region= REGION
Replace the following:
MIG_NAME : the name of the MIG.
INSTANCE_TEMPLATE_URL : the URL of the instance template that you want to
use to create instances in the MIG. The URL can contain either the
ID
or name of the instance template. Specify one of the following values:
For a regional instance template: projects/ PROJECT_ID /regions/ REGION /instanceTemplates/ INSTANCE_TEMPLATE_ID
For a global instance template: INSTANCE_TEMPLATE_ID
WORKLOAD_POLICY_URL : Optional: the URL of the workload policy.
For example,
projects/example-project/regions/us-central1/resourcePolicies/example-workload-policy .
If you don't want to use a workload policy, then remove the --workload-policy
flag.
ZONE : the zone in which you want to create the
MIG. For a regional MIG also, you must specify a zone. This zone must
be the zone that contains the profile for your
VPC network
and must be a
zone where the machine type is available .
For more information, see Limitations .
RESIZE_REQUEST_NAME : the name of the resize
request, which must be unique within the specified MIG. Otherwise,
creating the resize request fails.
COUNT : the number of instances to add to the MIG all at once.
REGION : the region in which the MIG is located.
If your workload requires specific instance names, then you can specify a list of names of
instances to create by using the
beta instance-groups managed resize-requests create command .
In the command, replace the --resize-request flag with the
--instances flag .
The parameters that you need to specify depend on the
consumption option that you are using for
this deployment. Select the tab that corresponds to your consumption option's provisioning model.
Flex-start Reservation-bound Spot
More
Create a zonal or regional MIG and a resize request as follows:
To create a zonal MIG and a resize request in it, do the following:
Create a zonal MIG by making a POST request to the
instanceGroupManagers.insert method
as follows.
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /instanceGroupManagers
{
"versions": [
{
"instanceTemplate": " INSTANCE_TEMPLATE_URL "
}
],
"name": " MIG_NAME ",
"targetSize": 0,
"instanceLifecyclePolicy": {
"defaultActionOnFailure": "DO_NOTHING"
}
}
Create a resize request in the zonal MIG by making a POST
request to the
instanceGroupManagerResizeRequests.insert method
as follows:
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /instanceGroupManagers/ MIG_NAME /resizeRequests
{
"name": " RESIZE_REQUEST_NAME ",
"resizeBy": COUNT
}
To create a regional MIG and a resize request in it, do the following:
Create a regional MIG by making a POST request to the
regionInstanceGroupManagers.insert method
as follows.
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION /instanceGroupManagers
{
"versions": [
{
"instanceTemplate": " INSTANCE_TEMPLATE_URL "
}
],
"name": " MIG_NAME ",
"targetSize": 0,
"distributionPolicy": {
"targetShape": "ANY_SINGLE_ZONE",
"zones": [
{
"zone": "projects/ PROJECT_ID /zones/ ZONE "
}
]
},
"updatePolicy": {
"instanceRedistributionType": "NONE"
},
"instanceLifecyclePolicy": {
"defaultActionOnFailure": "DO_NOTHING"
}
}
Create a resize request in the regional MIG by making a POST
request to the
beta.regionInstanceGroupManagerResizeRequests.insert method
as follows:
POST https://compute.googleapis.com/compute/beta/projects/ PROJECT_ID /regions/ REGION /instanceGroupManagers/ MIG_NAME /resizeRequests
{
"name": " RESIZE_REQUEST_NAME ",
"resizeBy": COUNT
}
The requests that you use to create a MIG use a workload policy to specify instance placement.
If you don't want to use a workload policy, then remove the resourcePolicies.workloadPolicy
field.
Create a zonal or regional MIG and a resize request as follows:
To create a zonal MIG and a resize request in it, do the following:
Create a zonal MIG by making a POST request to the
instanceGroupManagers.insert method
as follows.
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /instanceGroupManagers
{
"versions": [
{
"instanceTemplate": " INSTANCE_TEMPLATE_URL "
}
],
"name": " MIG_NAME ",
"targetSize": 0,
"resourcePolicies": {
"workloadPolicy": WORKLOAD_POLICY_URL
}
}
Create a resize request in the zonal MIG by making a POST
request to the
instanceGroupManagerResizeRequests.insert method
as follows:
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /instanceGroupManagers/ MIG_NAME /resizeRequests
{
"name": " RESIZE_REQUEST_NAME ",
"resizeBy": COUNT
}
To create a regional MIG and a resize request in it, do the following:
Create a regional MIG by making a POST request to the
regionInstanceGroupManagers.insert method
as follows.
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION /instanceGroupManagers
{
"versions": [
{
"instanceTemplate": " INSTANCE_TEMPLATE_URL "
}
],
"name": " MIG_NAME ",
"targetSize": 0,
"distributionPolicy": {
"targetShape": "ANY_SINGLE_ZONE",
"zones": [
{
"zone": "projects/ PROJECT_ID /zones/ ZONE "
}
]
},
"updatePolicy": {
"instanceRedistributionType": "NONE"
},
"resourcePolicies": {
"workloadPolicy": WORKLOAD_POLICY_URL
}
}
Create a resize request in the regional MIG by making a POST
request to the
beta.regionInstanceGroupManagerResizeRequests.insert method
as follows:
POST https://compute.googleapis.com/compute/beta/projects/ PROJECT_ID /regions/ REGION /instanceGroupManagers/ MIG_NAME /resizeRequests
{
"name": " RESIZE_REQUEST_NAME ",
"resizeBy": COUNT
}
The requests that you use to create a MIG use a workload policy to specify instance placement.
If you don't want to use a workload policy, then remove the resourcePolicies.workloadPolicy
field.
Create a zonal or regional MIG and a resize request as follows:
To create a zonal MIG and a resize request in it, do the following:
Create a zonal MIG by making a POST request to the
instanceGroupManagers.insert method
as follows.
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /instanceGroupManagers
{
"versions": [
{
"instanceTemplate": " INSTANCE_TEMPLATE_URL "
}
],
"name": " MIG_NAME ",
"targetSize": 0,
"resourcePolicies": {
"workloadPolicy": WORKLOAD_POLICY_URL
}
}
Create a resize request in the zonal MIG by making a POST
request to the
instanceGroupManagerResizeRequests.insert method
as follows:
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /instanceGroupManagers/ MIG_NAME /resizeRequests
{
"name": " RESIZE_REQUEST_NAME ",
"resizeBy": COUNT
}
To create a regional MIG and a resize request in it, do the following:
Create a regional MIG by making a POST request to the
regionInstanceGroupManagers.insert method
as follows.
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION /instanceGroupManagers
{
"versions": [
{
"instanceTemplate": " INSTANCE_TEMPLATE_URL "
}
],
"name": " MIG_NAME ",
"targetSize": 0,
"distributionPolicy": {
"targetShape": "ANY_SINGLE_ZONE",
"zones": [
{
"zone": "projects/ PROJECT_ID /zones/ ZONE "
}
]
},
"updatePolicy": {
"instanceRedistributionType": "NONE"
},
"resourcePolicies": {
"workloadPolicy": WORKLOAD_POLICY_URL
}
}
Create a resize request in the regional MIG by making a POST
request to the
beta.regionInstanceGroupManagerResizeRequests.insert method
as follows:
POST https://compute.googleapis.com/compute/beta/projects/ PROJECT_ID /regions/ REGION /instanceGroupManagers/ MIG_NAME /resizeRequests
{
"name": " RESIZE_REQUEST_NAME ",
"resizeBy": COUNT
}
Replace the following:
PROJECT_ID : the project ID.
ZONE : the zone in which you want to create the
MIG. For a regional MIG also, you must specify a zone. This zone must
be the zone that contains the profile for your
VPC network
and must be a
zone where the machine type is available .
For more information, see Limitations .
REGION : the region in which you want to
create the MIG.
INSTANCE_TEMPLATE_URL : the URL of the instance template that you want to
use to create instances in the MIG. The URL can contain either the
ID
or name of the instance template. Specify one of the following values:
For a regional instance template: projects/ PROJECT_ID /regions/ REGION /instanceTemplates/ INSTANCE_TEMPLATE_ID
For a global instance template: INSTANCE_TEMPLATE_ID
MIG_NAME : the name of the MIG.
WORKLOAD_POLICY_URL : Optional: the URL of the workload policy.
For example,
projects/example-project/regions/us-central1/resourcePolicies/example-workload-policy .
If you don't want to use a workload policy, then remove the
resourcePolicies.workloadPolicy field.
RESIZE_REQUEST_NAME : the name of the resize
request, which must be unique within the specified MIG. Otherwise,
creating the resize request fails.
COUNT : the number of instances to add to the MIG all at once
If your workload requires specific instance names, then you can specify a list of
names of instances to create. To do so, send a POST request to the
beta.regionInstanceGroupManagerResizeRequests.insert method
for a regional MIG, or the
beta.instanceGroupManagerResizeRequests.insert method
for a zonal MIG. In the request body, replace the resizeBy field
with the
instanceNames field .
What's next?
Verify reservation consumption
View the topology of a compute instance
Monitor VMs
Report faulty host
View, cancel, or delete resize requests
Troubleshoot reservation consumption
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
