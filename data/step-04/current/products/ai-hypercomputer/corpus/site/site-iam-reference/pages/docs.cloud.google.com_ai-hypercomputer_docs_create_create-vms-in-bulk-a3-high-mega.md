---
title: "Create AI-optimized instances in bulk with A3 High or A3 Mega \_|\_ AI Hypercomputer\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vms-in-bulk-a3-high-mega
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vms-in-bulk-a3-high-mega
  title: "Create AI-optimized instances in bulk with A3 High or A3 Mega \_|\_ AI Hypercomputer\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Create AI-optimized instances in bulk with A3 High or A3 Mega | AI Hypercomputer | Google Cloud Documentation
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
Before you begin Required roles
Overview Create VPC networks
Optional: Create a compact placement policy
Create A3 High or A3 Mega VMs in bulk
What's next
Home
Documentation
Compute
AI Hypercomputer
Guides
Was this helpful?
Send feedback
Create AI-optimized instances in bulk with A3 High or A3 Mega
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin Required roles
Overview Create VPC networks
Optional: Create a compact placement policy
Create A3 High or A3 Mega VMs in bulk
What's next
This document explains how to create virtual machine (VM) instances in bulk that
use A3 High or A3 Mega accelerator-optimized machine types. To learn more about
the machine types,
see A3 High
and A3 Mega
in the Compute Engine documentation.
For more information about creating VMs in bulk, see
About bulk creation of VMs
in the Compute Engine documentation.
To learn about other ways to create VMs or clusters, see the
Overview page.
Before you begin
Before creating VMs in bulk, if you haven't already done so, complete the following
steps:
Choose a consumption option : your choice of consumption option determines how you get
and use GPU resources.
To learn more, see Choose a consumption option .
Obtain capacity : the process to obtain capacity differs for each consumption option.
To learn about the process to obtain capacity for your chosen consumption option, see
Capacity overview .
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
Required roles
To get the permissions that
you need to create VMs in bulk,
ask your administrator to grant you the
Compute Instance Admin (v1) ( roles/compute.instanceAdmin.v1 )
IAM role on the project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains
the permissions required to create VMs in bulk. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to create VMs in bulk:
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
Overview
Creating instances in bulk with the a3h-or-a3m machine type includes the following steps:
Create VPC networks
Optional: Create a compact placement policy
Create instances in bulk
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
Optional: Create a compact placement policy
Tip: To place your VMs in single or adjacent blocks, specify VM
placement by creating and applying a placement policy to your VMs. To place VMs on a specific
block, skip this step and provide the name of the block when you create VMs.
You can specify VM placement by creating a compact placement policy. When you apply a compact
placement policy to your VMs, Compute Engine makes best-effort attempts to create VMs that
are as close to each other as possible. If your application is latency-sensitive and requires
maximum compactness, then specify the maxDistance field
( Preview ) when you create a
compact placement policy. A lower maxDistance value ensures closer VM placement, but
it also increases the chance that some VMs won't be created.
To create a compact placement policy, select one of the following options:
gcloud REST
More
To create a compact placement policy, use the
gcloud beta compute resource-policies create group-placement command :
gcloud beta compute resource-policies create group-placement POLICY_NAME \
--collocation=collocated \
--max-distance= MAX_DISTANCE \
--region= REGION
Replace the following:
POLICY_NAME : the name of the compact placement policy.
MAX_DISTANCE : the maximum distance configuration for your VMs. The
value must be 3 to place VMs in the adjacent blocks, or 2 to place VMs
in the same block. For information about the maximum number of VMs supported for each
maxDistance per machine series, see
About compact placement policies
in the Compute Engine documentation.
REGION : the region where you want to create the compact placement policy.
Specify a region in which the machine type that you want to use is available. For information
about regions, see
GPU availability by regions and zones .
To create a compact placement policy, make a POST request to the
beta
resourcePolicies.insert method .
In the request body, include the
collocation field set to COLLOCATED , and the maxDistance
field.
POST https://compute.googleapis.com/compute/beta/projects/ PROJECT_ID /regions/ REGION /resourcePolicies
{
"name": " POLICY_NAME ",
"groupPlacementPolicy": {
"collocation": "COLLOCATED",
"maxDistance": MAX_DISTANCE
}
}
Replace the following:
PROJECT_ID : your project ID.
POLICY_NAME : the name of the compact placement policy.
MAX_DISTANCE : the maximum distance configuration for your VMs. The
value must be 3 to place VMs in the adjacent blocks, or 2 to place VMs
in the same block. For information about the maximum number of VMs supported for each
maxDistance per machine series, see
About compact placement policies
in the Compute Engine documentation.
REGION : the region where you want to create the compact placement policy.
Specify a region in which the machine type that you want to use is available. For information
about regions, see
GPU availability by regions and zones .
Create A3 High or A3 Mega VMs in bulk
To create A3 High or A3 Mega VMs in bulk, use one of the following methods.
The following commands also set the access scope for your instances. To simplify permissions
management, Google recommends that you set the access scope on an instance to
cloud-platform access and then use IAM roles to define what services the instance can
access. For more information, see
Scopes best practice .
gcloud REST
More
To create an A3 High or A3 Mega VM, use the gcloud compute instances bulk create command .
A3 Mega A3 High
More
To create a3h-or-a3m instances in bulk, use the
gcloud compute instances bulk create command .
The parameters that you need to specify depend on the
consumption option that you are using for
this deployment. Select the tab that corresponds to your consumption option's provisioning model.
Reservation-bound Spot
More
Before
running the command, optionally add the flag for a
compact placement policy .
gcloud compute instances bulk create \
--name-pattern= NAME_PATTERN \
--count= COUNT \
--machine-type= MACHINE_TYPE \
--image-family= IMAGE_FAMILY \
--image-project= IMAGE_PROJECT \
--region= REGION \
--boot-disk-type= DISK_TYPE \
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
--instance-termination-action= TERMINATION_ACTION \
--maintenance-policy=TERMINATE \
--restart-on-failure
Complete the following steps:
Replace the following:
NAME_PATTERN : the name pattern to use for the a3h-or-a3m instances.
For example, using
instance-# for the name pattern generates a3h-or-a3m instances with names
such as instance-1 and instance-2 , up to the number of
a3h-or-a3m instances specified by --count .
COUNT : the number of a3h-or-a3m instances to create.
MACHINE_TYPE : the machine type to use for the a3h-or-a3m instance.
Specify either an A4 or A3 Ultra machine type. For more information, see
GPU machine types .
IMAGE_FAMILY : the image family of the OS image that you want to use.
For the A3 Mega machine series, we strongly recommend that you either use the cos-121-lts or later Container-Optimized OS image and disable automatic updates or use the rocky-linux-8-optimized-gcp-nvidia-580 Rocky Linux image.
For a list of supported operating systems, see Supported operating systems .
IMAGE_PROJECT : the project ID of the OS image.
For example, use either cos-cloud for the cos-121-lts or later Container-Optimized OS image or use rocky-linux-accelerator-cloud for the rocky-linux-8-optimized-gcp-nvidia-580 Rocky Linux image.
REGION : specify a region in which the machine type that you want to
use is available.
If you want to specify a compact placement policy, then
you must use the same region as the compact placement policy.
For information about regions, see
GPU availability by regions and zones .
DISK_TYPE : the type of the boot disk. We recommend that you use
hyperdisk-balanced .
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
apply a compact placement policy
that specifies a block collocation ( maxDistance=2 )
.
Compute Engine then applies the policy to the reservation and creates instances on the
same block.
To create instances
on a specific block:
projects/ RESERVATION_OWNER_PROJECT_ID /reservations/ RESERVATION_NAME /reservationBlocks/ RESERVATION_BLOCK_NAME
Tip: If the reservation exists in the current project, then you can omit
projects/ RESERVATION_OWNER_PROJECT_ID /reservations/ from the reservation
value.
TERMINATION_ACTION : whether Compute Engine stops
( STOP ) or deletes ( DELETE ) the a3h-or-a3m instance at the
end of the reservation period.
Optional: If you chose to use a compact placement policy, then
add the following flag to the command:
--resource-policies= POLICY_NAME
Replace the following:
POLICY_NAME : the name of the compact placement policy.
Run the command.
Before
running the command, optionally add the flag for a
compact placement policy .
gcloud compute instances bulk create \
--name-pattern= NAME_PATTERN \
--count= COUNT \
--machine-type= MACHINE_TYPE \
--image-family= IMAGE_FAMILY \
--image-project= IMAGE_PROJECT \
--region= REGION \
--boot-disk-type= DISK_TYPE \
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
Complete the following steps:
Replace the following:
NAME_PATTERN : the name pattern to use for the a3h-or-a3m instances.
For example, using
instance-# for the name pattern generates a3h-or-a3m instances with names
such as instance-1 and instance-2 , up to the number of
a3h-or-a3m instances specified by --count .
COUNT : the number of a3h-or-a3m instances to create.
MACHINE_TYPE : the machine type to use for the a3h-or-a3m instance.
Specify either an A4 or A3 Ultra machine type. For more information, see
GPU machine types .
IMAGE_FAMILY : the image family of the OS image that you want to use.
For the A3 Mega machine series, we strongly recommend that you either use the cos-121-lts or later Container-Optimized OS image and disable automatic updates or use the rocky-linux-8-optimized-gcp-nvidia-580 Rocky Linux image.
For a list of supported operating systems, see Supported operating systems .
IMAGE_PROJECT : the project ID of the OS image.
For example, use either cos-cloud for the cos-121-lts or later Container-Optimized OS image or use rocky-linux-accelerator-cloud for the rocky-linux-8-optimized-gcp-nvidia-580 Rocky Linux image.
REGION : specify a region in which the machine type that you want to
use is available.
If you want to specify a compact placement policy, then
you must use the same region as the compact placement policy.
For information about regions, see
GPU availability by regions and zones .
DISK_TYPE : the type of the boot disk. We recommend that you use
hyperdisk-balanced .
DISK_SIZE : the size of the boot disk in GB.
GVNIC_NAME_PREFIX : the name prefix that you specified when
creating the standard VPC networks and subnets that use gVNIC NICs.
TERMINATION_ACTION : the action to take when Compute Engine
preempts the instance, either STOP (default) or DELETE .
Important: Make sure your application can handle preemption. For
example, handle preemption by
specifying a shutdown script during instance creation. Learn how to handle
preemption with a shutdown script .
Optional: If you chose to use a compact placement policy, then
add the following flag to the command:
--resource-policies= POLICY_NAME
Replace the following:
POLICY_NAME : the name of the compact placement policy.
Run the command.
To create a3h-or-a3m instances in bulk, use the
gcloud compute instances bulk create command .
The parameters that you need to specify depend on the
consumption option that you are using for
this deployment. Select the tab that corresponds to your consumption option's provisioning model.
Reservation-bound Spot
More
Before
running the command, optionally add the flag for a
compact placement policy .
gcloud compute instances bulk create \
--name-pattern= NAME_PATTERN \
--count= COUNT \
--machine-type= MACHINE_TYPE \
--image-family= IMAGE_FAMILY \
--image-project= IMAGE_PROJECT \
--region= REGION \
--boot-disk-type= DISK_TYPE \
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
--instance-termination-action= TERMINATION_ACTION \
--maintenance-policy=TERMINATE \
--restart-on-failure
Complete the following steps:
Replace the following:
NAME_PATTERN : the name pattern to use for the a3h-or-a3m instances.
For example, using
instance-# for the name pattern generates a3h-or-a3m instances with names
such as instance-1 and instance-2 , up to the number of
a3h-or-a3m instances specified by --count .
COUNT : the number of a3h-or-a3m instances to create.
MACHINE_TYPE : the machine type to use for the a3h-or-a3m instance.
Specify either an A4 or A3 Ultra machine type. For more information, see
GPU machine types .
IMAGE_FAMILY : the image family of the OS image that you want to use.
For the A3 High machine series, we strongly recommend that you use the cos-121-lts or later Container-Optimized OS image and disable automatic updates .
For a list of supported operating systems, see Supported operating systems .
IMAGE_PROJECT : the project ID of the OS image.
For example, use cos-cloud for the cos-121-lts or later Container-Optimized OS image.
REGION : specify a region in which the machine type that you want to
use is available.
If you want to specify a compact placement policy, then
you must use the same region as the compact placement policy.
For information about regions, see
GPU availability by regions and zones .
DISK_TYPE : the type of the boot disk. We recommend that you use
hyperdisk-balanced .
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
apply a compact placement policy
that specifies a block collocation ( maxDistance=2 )
.
Compute Engine then applies the policy to the reservation and creates instances on the
same block.
To create instances
on a specific block:
projects/ RESERVATION_OWNER_PROJECT_ID /reservations/ RESERVATION_NAME /reservationBlocks/ RESERVATION_BLOCK_NAME
Tip: If the reservation exists in the current project, then you can omit
projects/ RESERVATION_OWNER_PROJECT_ID /reservations/ from the reservation
value.
TERMINATION_ACTION : whether Compute Engine stops
( STOP ) or deletes ( DELETE ) the a3h-or-a3m instance at the
end of the reservation period.
Optional: If you chose to use a compact placement policy, then
add the following flag to the command:
--resource-policies= POLICY_NAME
Replace the following:
POLICY_NAME : the name of the compact placement policy.
Run the command.
Before
running the command, optionally add the flag for a
compact placement policy .
gcloud compute instances bulk create \
--name-pattern= NAME_PATTERN \
--count= COUNT \
--machine-type= MACHINE_TYPE \
--image-family= IMAGE_FAMILY \
--image-project= IMAGE_PROJECT \
--region= REGION \
--boot-disk-type= DISK_TYPE \
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
Complete the following steps:
Replace the following:
NAME_PATTERN : the name pattern to use for the a3h-or-a3m instances.
For example, using
instance-# for the name pattern generates a3h-or-a3m instances with names
such as instance-1 and instance-2 , up to the number of
a3h-or-a3m instances specified by --count .
COUNT : the number of a3h-or-a3m instances to create.
MACHINE_TYPE : the machine type to use for the a3h-or-a3m instance.
Specify either an A4 or A3 Ultra machine type. For more information, see
GPU machine types .
IMAGE_FAMILY : the image family of the OS image that you want to use.
For the A3 High machine series, we strongly recommend that you use the cos-121-lts or later Container-Optimized OS image and disable automatic updates .
For a list of supported operating systems, see Supported operating systems .
IMAGE_PROJECT : the project ID of the OS image.
For example, use cos-cloud for the cos-121-lts or later Container-Optimized OS image.
REGION : specify a region in which the machine type that you want to
use is available.
If you want to specify a compact placement policy, then
you must use the same region as the compact placement policy.
For information about regions, see
GPU availability by regions and zones .
DISK_TYPE : the type of the boot disk. We recommend that you use
hyperdisk-balanced .
DISK_SIZE : the size of the boot disk in GB.
GVNIC_NAME_PREFIX : the name prefix that you specified when
creating the standard VPC networks and subnets that use gVNIC NICs.
TERMINATION_ACTION : the action to take when Compute Engine
preempts the instance, either STOP (default) or DELETE .
Important: Make sure your application can handle preemption. For
example, handle preemption by
specifying a shutdown script during instance creation. Learn how to handle
preemption with a shutdown script .
Optional: If you chose to use a compact placement policy, then
add the following flag to the command:
--resource-policies= POLICY_NAME
Replace the following:
POLICY_NAME : the name of the compact placement policy.
Run the command.
To create an A3 High or A3 Mega VM, use the instances.bulkInsert method .
A3 Mega A3 High
More
To create a3h-or-a3m instances in bulk, make a POST request to the
instances.bulkInsert method .
The parameters that you need to specify depend on the
consumption option that you are using for
this deployment. Select the tab that corresponds to your consumption option's provisioning model.
Reservation-bound Spot
More
Before
submitting the request, optionally add the instanceProperties subfield for a
compact placement policy to the request
body.
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /instances/bulkInsert
{
"namePattern":" NAME_PATTERN ",
"count":" COUNT ",
"instanceProperties":{
"machineType":" MACHINE_TYPE ",
"disks":[
{
"boot":true,
"initializeParams":{
"diskSizeGb":" DISK_SIZE ",
"diskType":" DISK_TYPE ",
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
},
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
Complete the following steps:
Replace the following:
PROJECT_ID : the project ID of the project where you want to create the a3h-or-a3m instance.
ZONE : specify a zone in which the machine type that you want to
use is available.
If you want to specify a compact placement policy, then
you must use a zone in the same region as the compact placement policy.
For information about regions, see
GPU availability by regions and zones .
NAME_PATTERN : the name pattern to use for the a3h-or-a3m instances.
For example, using
instance-# for the name pattern generates a3h-or-a3m instances with names
such as instance-1 and instance-2 , up to the number of
a3h-or-a3m instances specified by --count .
COUNT : the number of a3h-or-a3m instances to create.
MACHINE_TYPE : the machine type to use for the a3h-or-a3m
instance. Specify either an A4 or A3 Ultra machine type. For more information, see
GPU machine types .
VM_NAME : the name of the VM.
DISK_SIZE : the size of the boot disk in GB.
DISK_TYPE : the type of the boot disk. We recommend that you use
hyperdisk-balanced .
IMAGE_PROJECT : the project ID of the OS image.
For example, use either cos-cloud for the cos-121-lts or later Container-Optimized OS image or use rocky-linux-accelerator-cloud for the rocky-linux-8-optimized-gcp-nvidia-580 Rocky Linux image.
IMAGE_FAMILY : the image family of the OS image that you want to use.
For the A3 Mega machine series, we strongly recommend that you either use the cos-121-lts or later Container-Optimized OS image and disable automatic updates or use the rocky-linux-8-optimized-gcp-nvidia-580 Rocky Linux image.
For a list of supported operating systems, see Supported operating systems .
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
apply a compact placement policy
that specifies a block collocation ( maxDistance=2 )
.
Compute Engine then applies the policy to the reservation and creates instances on the
same block.
To create instances
on a specific block:
projects/ RESERVATION_OWNER_PROJECT_ID /reservations/ RESERVATION_NAME /reservationBlocks/ RESERVATION_BLOCK_NAME
Tip: If the reservation exists in the current project, then you can omit
projects/ RESERVATION_OWNER_PROJECT_ID /reservations/ from the reservation
value.
TERMINATION_ACTION : whether Compute Engine stops
( STOP ) or deletes ( DELETE ) the a3h-or-a3m instance at the
end of the reservation period.
Optional: If you chose to use a compact placement policy, then
add the following instanceProperties subfield to the request body:
"resourcePolicies": [
"projects/ PROJECT_ID /regions/ REGION /resourcePolicies/ POLICY_NAME "
]
Replace the following:
PROJECT_ID : the project ID of the compact placement policy.
REGION : the region of the compact placement policy.
POLICY_NAME : the name of the compact placement policy.
Submit the request.
Before
submitting the request, optionally add the instanceProperties subfield for a
compact placement policy to the request
body.
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /instances/bulkInsert
{
"namePattern":" NAME_PATTERN ",
"count":" COUNT ",
"instanceProperties":{
"machineType":" MACHINE_TYPE ",
"disks":[
{
"boot":true,
"initializeParams":{
"diskSizeGb":" DISK_SIZE ",
"diskType":" DISK_TYPE ",
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
},
"scheduling":
{
"provisioningModel": "SPOT",
"instanceTerminationAction": " TERMINATION_ACTION ",
"onHostMaintenance": "TERMINATE",
"automaticRestart": false
}
}
}
Complete the following steps:
Replace the following:
PROJECT_ID : the project ID of the project where you want to create the a3h-or-a3m instance.
ZONE : specify a zone in which the machine type that you want to
use is available.
If you want to specify a compact placement policy, then
you must use a zone in the same region as the compact placement policy.
For information about regions, see
GPU availability by regions and zones .
NAME_PATTERN : the name pattern to use for the a3h-or-a3m instances.
For example, using
instance-# for the name pattern generates a3h-or-a3m instances with names
such as instance-1 and instance-2 , up to the number of
a3h-or-a3m instances specified by --count .
COUNT : the number of a3h-or-a3m instances to create.
MACHINE_TYPE : the machine type to use for the a3h-or-a3m
instance. Specify either an A4 or A3 Ultra machine type. For more information, see
GPU machine types .
VM_NAME : the name of the VM.
DISK_SIZE : the size of the boot disk in GB.
DISK_TYPE : the type of the boot disk. We recommend that you use
hyperdisk-balanced .
IMAGE_PROJECT : the project ID of the OS image.
For example, use either cos-cloud for the cos-121-lts or later Container-Optimized OS image or use rocky-linux-accelerator-cloud for the rocky-linux-8-optimized-gcp-nvidia-580 Rocky Linux image.
IMAGE_FAMILY : the image family of the OS image that you want to use.
For the A3 Mega machine series, we strongly recommend that you either use the cos-121-lts or later Container-Optimized OS image and disable automatic updates or use the rocky-linux-8-optimized-gcp-nvidia-580 Rocky Linux image.
For a list of supported operating systems, see Supported operating systems .
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
Optional: If you chose to use a compact placement policy, then
add the following instanceProperties subfield to the request body:
"resourcePolicies": [
"projects/ PROJECT_ID /regions/ REGION /resourcePolicies/ POLICY_NAME "
]
Replace the following:
PROJECT_ID : the project ID of the compact placement policy.
REGION : the region of the compact placement policy.
POLICY_NAME : the name of the compact placement policy.
Submit the request.
To create a3h-or-a3m instances in bulk, make a POST request to the
instances.bulkInsert method .
The parameters that you need to specify depend on the
consumption option that you are using for
this deployment. Select the tab that corresponds to your consumption option's provisioning model.
Reservation-bound Spot
More
Before
submitting the request, optionally add the instanceProperties subfield for a
compact placement policy to the request
body.
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /instances/bulkInsert
{
"namePattern":" NAME_PATTERN ",
"count":" COUNT ",
"instanceProperties":{
"machineType":" MACHINE_TYPE ",
"disks":[
{
"boot":true,
"initializeParams":{
"diskSizeGb":" DISK_SIZE ",
"diskType":" DISK_TYPE ",
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
Complete the following steps:
Replace the following:
PROJECT_ID : the project ID of the project where you want to create the a3h-or-a3m instance.
ZONE : specify a zone in which the machine type that you want to
use is available.
If you want to specify a compact placement policy, then
you must use a zone in the same region as the compact placement policy.
For information about regions, see
GPU availability by regions and zones .
NAME_PATTERN : the name pattern to use for the a3h-or-a3m instances.
For example, using
instance-# for the name pattern generates a3h-or-a3m instances with names
such as instance-1 and instance-2 , up to the number of
a3h-or-a3m instances specified by --count .
COUNT : the number of a3h-or-a3m instances to create.
MACHINE_TYPE : the machine type to use for the a3h-or-a3m
instance. Specify either an A4 or A3 Ultra machine type. For more information, see
GPU machine types .
VM_NAME : the name of the VM.
DISK_SIZE : the size of the boot disk in GB.
DISK_TYPE : the type of the boot disk. We recommend that you use
hyperdisk-balanced .
IMAGE_PROJECT : the project ID of the OS image.
For example, use cos-cloud for the cos-121-lts or later Container-Optimized OS image.
IMAGE_FAMILY : the image family of the OS image that you want to use.
For the A3 High machine series, we strongly recommend that you use the cos-121-lts or later Container-Optimized OS image and disable automatic updates .
For a list of supported operating systems, see Supported operating systems .
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
apply a compact placement policy
that specifies a block collocation ( maxDistance=2 )
.
Compute Engine then applies the policy to the reservation and creates instances on the
same block.
To create instances
on a specific block:
projects/ RESERVATION_OWNER_PROJECT_ID /reservations/ RESERVATION_NAME /reservationBlocks/ RESERVATION_BLOCK_NAME
Tip: If the reservation exists in the current project, then you can omit
projects/ RESERVATION_OWNER_PROJECT_ID /reservations/ from the reservation
value.
TERMINATION_ACTION : whether Compute Engine stops
( STOP ) or deletes ( DELETE ) the a3h-or-a3m instance at the
end of the reservation period.
Optional: If you chose to use a compact placement policy, then
add the following instanceProperties subfield to the request body:
"resourcePolicies": [
"projects/ PROJECT_ID /regions/ REGION /resourcePolicies/ POLICY_NAME "
]
Replace the following:
PROJECT_ID : the project ID of the compact placement policy.
REGION : the region of the compact placement policy.
POLICY_NAME : the name of the compact placement policy.
Submit the request.
Before
submitting the request, optionally add the instanceProperties subfield for a
compact placement policy to the request
body.
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /instances/bulkInsert
{
"namePattern":" NAME_PATTERN ",
"count":" COUNT ",
"instanceProperties":{
"machineType":" MACHINE_TYPE ",
"disks":[
{
"boot":true,
"initializeParams":{
"diskSizeGb":" DISK_SIZE ",
"diskType":" DISK_TYPE ",
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
"scheduling":
{
"provisioningModel": "SPOT",
"instanceTerminationAction": " TERMINATION_ACTION ",
"onHostMaintenance": "TERMINATE",
"automaticRestart": false
}
}
}
Complete the following steps:
Replace the following:
PROJECT_ID : the project ID of the project where you want to create the a3h-or-a3m instance.
ZONE : specify a zone in which the machine type that you want to
use is available.
If you want to specify a compact placement policy, then
you must use a zone in the same region as the compact placement policy.
For information about regions, see
GPU availability by regions and zones .
NAME_PATTERN : the name pattern to use for the a3h-or-a3m instances.
For example, using
instance-# for the name pattern generates a3h-or-a3m instances with names
such as instance-1 and instance-2 , up to the number of
a3h-or-a3m instances specified by --count .
COUNT : the number of a3h-or-a3m instances to create.
MACHINE_TYPE : the machine type to use for the a3h-or-a3m
instance. Specify either an A4 or A3 Ultra machine type. For more information, see
GPU machine types .
VM_NAME : the name of the VM.
DISK_SIZE : the size of the boot disk in GB.
DISK_TYPE : the type of the boot disk. We recommend that you use
hyperdisk-balanced .
IMAGE_PROJECT : the project ID of the OS image.
For example, use cos-cloud for the cos-121-lts or later Container-Optimized OS image.
IMAGE_FAMILY : the image family of the OS image that you want to use.
For the A3 High machine series, we strongly recommend that you use the cos-121-lts or later Container-Optimized OS image and disable automatic updates .
For a list of supported operating systems, see Supported operating systems .
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
Optional: If you chose to use a compact placement policy, then
add the following instanceProperties subfield to the request body:
"resourcePolicies": [
"projects/ PROJECT_ID /regions/ REGION /resourcePolicies/ POLICY_NAME "
]
Replace the following:
PROJECT_ID : the project ID of the compact placement policy.
REGION : the region of the compact placement policy.
POLICY_NAME : the name of the compact placement policy.
Submit the request.
For more information about the configuration options when creating VMs in bulk,
see Create VMs in bulk in the
Compute Engine documentation.
What's next
Verify reservation consumption
View the topology of a compute instance
Run workloads overview
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
