---
title: "Create an AI-optimized GKE cluster with default configuration \_|\_ AI Hypercomputer\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/create/gke-ai-hypercompute
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs/create/create-vm
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/create/gke-ai-hypercompute
  title: "Create an AI-optimized GKE cluster with default configuration \_|\_ AI Hypercomputer\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Create an AI-optimized GKE cluster with default configuration | AI Hypercomputer | Google Cloud Documentation
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
Choose how to create an AI-optimized GKE cluster
Before you begin Choose a consumption option and obtain capacity
Requirements
Create a cluster Create a cluster using Cluster Toolkit
Create a cluster and run workloads using XPK
Test network performance
Run reproducible benchmarks
Clean up resources created by Cluster Toolkit
What's next
Home
Documentation
Compute
AI Hypercomputer
Guides
Was this helpful?
Send feedback
Create an AI-optimized GKE cluster with default configuration
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Choose how to create an AI-optimized GKE cluster
Before you begin Choose a consumption option and obtain capacity
Requirements
Create a cluster Create a cluster using Cluster Toolkit
Create a cluster and run workloads using XPK
Test network performance
Run reproducible benchmarks
Clean up resources created by Cluster Toolkit
What's next
This document shows you how to create an AI-optimized Google Kubernetes Engine (GKE)
cluster that uses A4X, A4, A3 Ultra, A3 Mega, and A3 High (8 GPUs) Compute Engine instances to support your AI
and ML workloads.
The A4X, A4, A3 Ultra, A3 Mega, and A3 High (8 GPUs) machine series are designed to enable you to run
large-scale AI/ML clusters with features such as targeted workload
placement, advanced cluster maintenance controls, and topology-aware scheduling.
For more information, see
Cluster management overview .
GKE provides a single platform surface to run a diverse set of
workloads for your organization's needs. This includes high performance
distributed pre-training, model fine-tuning, model inference, application
serving, and supporting services. GKE reduces the operational
burden of managing multiple platforms.
Choose how to create an AI-optimized GKE cluster
The following options for cluster creation each provide varying degrees of ease
and flexibility in cluster configuration and workload scheduling:
Create clusters with the default configuration for compute, storage, and
networking resources, and with GPUDirect RDMA-over-Converged-Ethernet (RoCE)
enabled:
Use Cluster Toolkit to quickly
create production-ready GKE clusters.
Use Accelerated Processing Kit (XPK) to quickly create
GKE clusters for proofs-of-concept and testing.
Alternatively, you can create your GKE cluster manually
for precise customization or expansion of existing production
GKE environments. To create an AI-optimized
GKE cluster manually, see one of the following pages:
A4X Max : Create a custom AI-optimized GKE
cluster which uses
A4X Max .
A4X : Create a custom AI-optimized GKE
cluster which uses
A4X .
A4 or A3 Ultra : Create a custom AI-optimized GKE
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
Verify that you have the required permissions for creating and managing the
GKE cluster and associated service accounts:
Kubernetes Engine Admin ( roles/container.admin )
Compute Admin ( roles/compute.admin )
Storage Admin ( roles/storage.admin )
Project IAM Admin ( roles/resourcemanager.projectIamAdmin )
Service Account Admin ( roles/iam.serviceAccountAdmin )
Service Account User ( roles/iam.serviceAccountUser )
Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer )
Role Administrator ( roles/iam.roleAdmin )
Secret Manager Secret Version Manager ( roles/secretmanager.secretVersionManager )
Choose a consumption option and obtain capacity
Choose a consumption option . Make your choice based on how you want to
get and use GPU resources. To learn more, see Choose a consumption
option .
For GKE, consider the following additional information when
choosing a consumption option:
A4X Max and A4X compute instances can't be provisioned by flex-start.
For more information about flex-start
( Preview ) and
GKE, see About GPU obtainability with
flex-start .
Flex-start uses best-effort compact placement. To examine your topology, see
View the physical topology of nodes in your GKE
cluster .
You can only get topology information when using Spot VMs if you
configure compact placement .
Obtain capacity . The process to obtain capacity differs for each
consumption option.
To learn about the process for your chosen consumption
option, see Capacity overview .
Note: When you request A4X capacity, you obtain it in all capacity mode .
This mode is the only supported reservation operational mode for A4X machine
types. For more information about all capacity mode, see
Reservation operational mode .
Requirements
The following requirements apply to an AI-optimized GKE cluster:
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
GPUDirect RDMA and
MNNVL ,
which are recommended to enable A4X Max node pools to use the networking
capabilities of A4X Max.
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
GPUDirect RDMA and
MNNVL ,
which are recommended to enable A4X node pools to use the networking
capabilities of A4X.
Ensure you use the minimum GPU driver version, depending on the machine
type:
A4X Max : The GB300 GPUs in A4X Max bare metal instances require a
minimum of the R580.95.05 GPU driver version. See the previously
mentioned version requirements.
A4X : The GB200 GPUs in A4X virtual machine (VM) instances require a
minimum of the R580 GPU driver version. See the previously mentioned
version requirements.
A4 : The B200 GPUs in A4 VM instances require a minimum of the R570
GPU driver version. GKE, by default, automatically
installs this driver version on all A4 nodes running the required
minimum version for A4, 1.32.1-gke.1729000 or later.
A3 Ultra : The H200 GPUs in A3 Ultra VM instances require a minimum
of R550 GPU driver version, which is available in GKE
1.31 as latest driver version. For A3 Ultra, you must set
gpu-driver-version=latest with GKE 1.31. For
GKE version 1.31.5-gke.1169000 or later,
GKE, by default, automatically installs R550 GPU driver
versions on A3 Ultra nodes.
For A3 Ultra node pools, you must set the disk type to hyperdisk-balanced .
To use GPUDirect RDMA, use the following minimum versions depending on the
machine type:
A4X Max : See the previously mentioned version requirements.
A4X : See the previously mentioned version requirements.
A4 : Use 1.32.2-gke.1475000 or later.
A3 Ultra : Use 1.31.4-gke.1183000 or later.
To use GPUDirect RDMA, the GKE nodes must use a
Container-Optimized OS node image. Ubuntu and Windows node images are
not supported.
You must use the reservation-bound
provisioning model to create clusters with A4X Max and A4X. Other
provisioning models are not supported.
Create a cluster
Use the following instructions to create a cluster either using
Cluster Toolkit or
XPK .
Create a cluster using Cluster Toolkit
This section guides you through the cluster creation process, ensuring that your
project follows best practices and meets the requirements for
an AI-optimized GKE cluster.
Note: If you create multiple clusters using these same cluster blueprints,
ensure that all VPC and subnet names are unique per project to
prevent errors.
A4X Max A4X A4 A3 Ultra
More
Launch Cloud Shell . You can use a
different environment; however, we recommend Cloud Shell because the
dependencies are already pre-installed for Cluster Toolkit. If you
don't want to use Cloud Shell, follow the instructions to install
dependencies to prepare a
different environment.
Clone the Cluster Toolkit from the git repository:
cd ~
git clone https://github.com/GoogleCloudPlatform/cluster-toolkit.git
Install the Cluster Toolkit:
cd cluster-toolkit && git checkout main && make
Create a Cloud Storage bucket to store the state of the Terraform
deployment:
gcloud storage buckets create gs:// BUCKET_NAME \
--default-storage-class = STANDARD \
--project = PROJECT_ID \
--location = COMPUTE_REGION_TERRAFORM_STATE \
--uniform-bucket-level-access
gcloud storage buckets update gs:// BUCKET_NAME --versioning
Replace the following variables:
BUCKET_NAME : the name of the new
Cloud Storage bucket.
PROJECT_ID : your Google Cloud project ID.
COMPUTE_REGION_TERRAFORM_STATE : the compute region where you want
to store the state of the Terraform deployment.
In the examples/gke-a4x-max-bm/gke-a4x-max-bm-deployment.yaml blueprint
from the GitHub repo ,
fill in the following settings in the terraform_backend_defaults
and vars sections to match the specific values for your deployment:
DEPLOYMENT_NAME : a unique name for the
deployment, which must be between 6 and 30 characters in length. If
the deployment name isn't unique within a project, cluster creation
fails. The default value is gke-a4x-max-bm .
BUCKET_NAME : the name of the
Cloud Storage bucket you created in the previous step.
PROJECT_ID : your Google Cloud project ID.
COMPUTE_REGION : the compute region for the
cluster.
COMPUTE_ZONE : the compute zone for the node pool
of A4X Max machines. Note that this zone must match the zone where
machines are available in your reservation.
NODE_COUNT : the number of A4X Max nodes in your
cluster's node pool, which must be 18 nodes or less. We recommend using 18
nodes to obtain the GPU topology of 1x72 in one subblock using an NVLink
domain.
IP_ADDRESS / SUFFIX : the
IP address range that you want to allow to connect with the cluster. This
CIDR block must include the IP address of the machine that you want to use
to call Terraform. For more information, see How authorized networks
work .
For the extended_reservation field, use one of the following,
depending on whether you want to target specific
blocks in a reservation
when provisioning the node pool:
To place the node pool anywhere in the reservation, provide the
name of your reservation
( RESERVATION_NAME ).
To target a specific block within your reservation, use the
reservation and block names in the following format:
RESERVATION_NAME /reservationBlocks/ BLOCK_NAME
If you don't know which blocks are available in your reservation,
see View a reservation
topology .
Set the boot disk sizes for each node of the system and A4X Max node pools. The disk size that you need depends on your use case. For example, if you use the disk as a cache to reduce the latency of pulling an image repeatedly, then you can set a larger disk size to accommodate your framework, model, or container image:
SYSTEM_NODE_POOL_DISK_SIZE_GB : the size of the boot disk for each node of the system node pool. The smallest allowed disk size is 10 . The default value is 200 .
A4X_MAX_NODE_POOL_DISK_SIZE_GB : the size of the boot disk for each node of the A4X Max node pool. The smallest allowed disk size is 10 . The default value is 100 .
To modify advanced settings, edit the
examples/gke-a4x-max-bm/gke-a4x-max-bm.yaml
file.
Generate Application Default Credentials (ADC)
to provide access to Terraform. If you're using Cloud Shell, sign in
and set up ADC:
gcloud auth application-default login
Deploy the blueprint to provision the GKE infrastructure
using A4X Max machine types:
cd ~/cluster-toolkit
./gcluster deploy -d \
examples/gke-a4x-max-bm/gke-a4x-max-bm-deployment.yaml \
examples/gke-a4x-max-bm/gke-a4x-max-bm.yaml
When prompted, select (A)pply to deploy the blueprint.
The blueprint creates VPC networks, a GPU RDMA VPC network, service
accounts, a cluster, and a node pool.
To support the fio-bench-job-template job template in the blueprint,
Google Cloud buckets, network storage, and persistent volumes resources
are created.
Launch Cloud Shell . You can use a
different environment; however, we recommend Cloud Shell because the
dependencies are already pre-installed for Cluster Toolkit. If you
don't want to use Cloud Shell, follow the instructions to install
dependencies to prepare a
different environment.
Clone the Cluster Toolkit from the git repository:
cd ~
git clone https://github.com/GoogleCloudPlatform/cluster-toolkit.git
Install the Cluster Toolkit:
cd cluster-toolkit && git checkout main && make
Create a Cloud Storage bucket to store the state of the Terraform
deployment:
gcloud storage buckets create gs:// BUCKET_NAME \
--default-storage-class = STANDARD \
--project = PROJECT_ID \
--location = COMPUTE_REGION_TERRAFORM_STATE \
--uniform-bucket-level-access
gcloud storage buckets update gs:// BUCKET_NAME --versioning
Replace the following variables:
BUCKET_NAME : the name of the new
Cloud Storage bucket.
PROJECT_ID : your Google Cloud project ID.
COMPUTE_REGION_TERRAFORM_STATE : the compute region where you want
to store the state of the Terraform deployment.
In the examples/gke-a4x/gke-a4x-deployment.yaml blueprint from the
GitHub repo ,
fill in the following settings in the terraform_backend_defaults
and vars sections to match the specific values for your deployment:
DEPLOYMENT_NAME : a unique name for the
deployment, which must be between 6 and 30 characters in length. If
the deployment name isn't unique within a project, cluster creation
fails. The default value is gke-a4x .
BUCKET_NAME : the name of the
Cloud Storage bucket you created in the previous step.
PROJECT_ID : your Google Cloud project ID.
COMPUTE_REGION : the compute region for the
cluster.
COMPUTE_ZONE : the compute zone for the node pool
of A4X machines. Note that this zone must match the zone where machines are available in your reservation.
NODE_COUNT : the number of A4X nodes in your
cluster's node pool, which must be 18 nodes or less. We recommend using 18
nodes to obtain the GPU topology of 1x72 in one subblock using an NVLink
domain.
IP_ADDRESS / SUFFIX : the
IP address range that you want to allow to connect with the cluster. This
CIDR block must include the IP address of the machine that you want to use
to call Terraform. For more information, see How authorized networks
work .
For the extended_reservation field, use one of the following,
depending on whether you want to target specific
blocks in a reservation
when provisioning the node pool:
To place the node pool anywhere in the reservation, provide the
name of your reservation
( RESERVATION_NAME ).
To target a specific block within your reservation, use the
reservation and block names in the following format:
RESERVATION_NAME /reservationBlocks/ BLOCK_NAME
If you don't know which blocks are available in your reservation,
see View a reservation
topology .
Set the boot disk sizes for each node of the system and A4X node pools. The disk size that you need depends on your use case. For example, if you use the disk as a cache to reduce the latency of pulling an image repeatedly, then you can set a larger disk size to accommodate your framework, model, or container image:
SYSTEM_NODE_POOL_DISK_SIZE_GB : the size of the boot disk for each node of the system node pool. The smallest allowed disk size is 10 . The default value is 200 .
A4X_NODE_POOL_DISK_SIZE_GB : the size of the boot disk for each node of the A4X node pool. The smallest allowed disk size is 10 . The default value is 100 .
To modify advanced settings, edit the
examples/gke-a4x/gke-a4x.yaml
file.
Generate Application Default Credentials (ADC)
to provide access to Terraform. If you're using Cloud Shell, sign in
and set up ADC:
gcloud auth application-default login
Deploy the blueprint to provision the GKE infrastructure
using A4X machine types:
cd ~/cluster-toolkit
./gcluster deploy -d \
examples/gke-a4x/gke-a4x-deployment.yaml \
examples/gke-a4x/gke-a4x.yaml
When prompted, select (A)pply to deploy the blueprint.
The blueprint creates VPC networks, a GPU RDMA VPC network, service
accounts, a cluster, and a node pool.
To support the fio-bench-job-template job template in the blueprint,
Google Cloud buckets, network storage, and persistent volumes resources
are created.
Launch Cloud Shell . You can use a
different environment; however, we recommend Cloud Shell because the
dependencies are already pre-installed for Cluster Toolkit. If you
don't want to use Cloud Shell, follow the instructions to install
dependencies to prepare a
different environment.
Clone the Cluster Toolkit from the git repository:
cd ~
git clone https://github.com/GoogleCloudPlatform/cluster-toolkit.git
Install the Cluster Toolkit:
cd cluster-toolkit && git checkout main && make
Create a Cloud Storage bucket to store the state of the Terraform
deployment:
gcloud storage buckets create gs:// BUCKET_NAME \
--default-storage-class = STANDARD \
--project = PROJECT_ID \
--location = COMPUTE_REGION_TERRAFORM_STATE \
--uniform-bucket-level-access
gcloud storage buckets update gs:// BUCKET_NAME --versioning
Replace the following variables:
BUCKET_NAME : the name of the new
Cloud Storage bucket.
PROJECT_ID : your Google Cloud project ID.
COMPUTE_REGION_TERRAFORM_STATE : the compute region where you want
to store the state of the Terraform deployment.
The files that you need to edit to create a cluster depend on the
consumption option that
you're using for your deployment. Select the tab that corresponds to your
consumption option's provisioning model.
Reservation-bound Flex-start Spot
More
In the examples/gke-a4/gke-a4-deployment.yaml blueprint from the
GitHub repo ,
fill in the following settings in the terraform_backend_defaults
and vars sections to match the specific values for your deployment:
DEPLOYMENT_NAME : a unique name for the
deployment, which must be between 6 and 30 characters in length. If
the deployment name isn't unique within a project, cluster creation
fails. The default value is gke-a4 .
BUCKET_NAME : the name of the
Cloud Storage bucket you created in the previous step.
PROJECT_ID : your Google Cloud project ID.
COMPUTE_REGION : the compute region for the
cluster.
COMPUTE_ZONE : the compute zone for the node pool
of A4 machines. Note that this zone must match the zone where machines are available in your reservation.
NODE_COUNT : the number of A4 nodes in your
cluster.
IP_ADDRESS / SUFFIX : The IP
address range that you want to allow to connect with the cluster. This CIDR
block must include the IP address of the machine that you want to use
to call Terraform. For more information, see How authorized networks
work .
For the reservation field, use one of the following,
depending on whether you want to target specific
blocks in a reservation
when provisioning the node pool:
To place the node pool anywhere in the reservation, provide the
name of your reservation ( RESERVATION_NAME ).
To target a specific block within your reservation, use the
reservation and block names in the following format:
RESERVATION_NAME /reservationBlocks/ BLOCK_NAME
If you don't know which blocks are available in your reservation,
see View a reservation
topology .
Set the boot disk sizes for each node of the system and A4 node pools. The disk size that you need depends on your use case. For example, if you use the disk as a cache to reduce the latency of pulling an image repeatedly, then you can set a larger disk size to accommodate your framework, model, or container image:
SYSTEM_NODE_POOL_DISK_SIZE_GB : the size of the boot disk for each node of the system node pool. The smallest allowed disk size is 10 . The default value is 100 .
A4_NODE_POOL_DISK_SIZE_GB : the size of the boot disk for each node of the A4 node pool. The smallest allowed disk size is 10 . The default value is 100 .
To modify advanced settings, edit
examples/gke-a4/gke-a4.yaml .
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
In the examples/gke-a4/gke-a4-deployment.yaml blueprint from the
GitHub repo ,
fill in the following settings in the terraform_backend_defaults
and vars sections to match the specific values for your deployment:
DEPLOYMENT_NAME : a unique name for the
deployment, which must be between 6 and 30 characters in length.
If the deployment name isn't unique within a project, cluster
creation fails. The default value is gke-a4 .
BUCKET_NAME : the name of the
Cloud Storage bucket you created in the previous step.
PROJECT_ID : your Google Cloud project ID.
COMPUTE_REGION : the compute region for the
cluster.
COMPUTE_ZONE : the compute zone for the node pool
of A4 machines.
Remove static_node_count .
IP_ADDRESS / SUFFIX : The IP
address range that you want to allow to connect with the cluster. This CIDR
block must include the IP address of the machine that you want to
use to call Terraform. For more information, see How authorized
networks
work .
Remove the reservation field, and replace the field with
enable_flex_start: true . Add on the next line
enable_queued_provisioning: true if you'd also like to use queued
provisioning. For more information, see Use node pools with flex-start
with queued
provisioning .
Set the boot disk sizes for each node of the system and A4 node pools. The disk size that you need depends on your use case. For example, if you use the disk as a cache to reduce the latency of pulling an image repeatedly, then you can set a larger disk size to accommodate your framework, model, or container image:
SYSTEM_NODE_POOL_DISK_SIZE_GB : the size of the boot disk for each node of the system node pool. The smallest allowed disk size is 10 . The default value is 100 .
A4_NODE_POOL_DISK_SIZE_GB : the size of the boot disk for each node of the A4 node pool. The smallest allowed disk size is 10 . The default value is 100 .
In the examples/gke-a4/gke-a4.yaml blueprint from the GitHub
repo ,
make the following changes:
In the vars block, remove static_node_count .
In the vars block, make sure the version_prefix number is "1.32." or higher. To use flex-start in GKE, your cluster must use version 1.32.2-gke.1652000 or later.
In the vars block, replace the entire reservation
block (including the reservation line itself) with
enable_flex_start: true , and, optionally,
enable_queued_provisioning: true .
In the vars block, if you don't require queued provisioning,
remove the following line:
kueue_configuration_path: $(ghpc_stage("./kueue-configuration.yaml.tftpl")) .
Under id: a4-pool , remove the following line:
static_node_count: $(vars.static_node_count) .
Under id: a4-pool , remove the reservation_affinity block. Replace
this block with the following lines:
enable_flex_start: $(vars.enable_flex_start)
auto_repair: false
For queued provisioning, if you want to enable it, add the
following additional lines:
enable_queued_provisioning: $(vars.enable_queued_provisioning)
autoscaling_total_min_nodes: 0
Under id: workload-manager-install , remove the following
block:
kueue :
install : true
config_path : $(vars.kueue_configuration_path)
config_template_vars :
num_gpus : $(a3-ultragpu-pool.static_gpu_count)
accelerator_type : $(vars.accelerator_type)
For flex-start with queued provisioning, do the following:
Add gpu_nominal_quota: NOMINAL_QUOTA to the vars block. The gpu_nominal_quota value is used to set the nominalQuota of GPUs in the ClusterQueue spec (in the following, see the step setting ClusterQueue ). In this example, the ClusterQueue only admits workloads if the sum of the GPU requests is less than or equal to the NOMINAL_QUOTA value. For more information about ClusterQueue , see the following Kueue document of Cluster Queue .
Update the kueue block to the following:
kueue :
install : true
config_path : $(vars.kueue_configuration_path)
config_template_vars :
num_gpus : $(vars.gpu_nominal_quota)
Replace the content of the
kueue-configuration.yaml.tftpl file with the
following:
apiVersion : kueue.x-k8s.io/v1beta1
kind : ResourceFlavor
metadata :
name : "default-flavor"
---
apiVersion : kueue.x-k8s.io/v1beta1
kind : AdmissionCheck
metadata :
name : dws-prov
spec :
controllerName : kueue.x-k8s.io/provisioning-request
parameters :
apiGroup : kueue.x-k8s.io
kind : ProvisioningRequestConfig
name : dws-config
---
apiVersion : kueue.x-k8s.io/v1beta1
kind : ProvisioningRequestConfig
metadata :
name : dws-config
spec :
provisioningClassName : queued-provisioning.gke.io
managedResources :
- nvidia.com/gpu
---
apiVersion : kueue.x-k8s.io/v1beta1
kind : ClusterQueue
metadata :
name : "dws-cluster-queue"
spec :
namespaceSelector : {}
resourceGroups :
- coveredResources : [ "nvidia.com/gpu" ]
flavors :
- name : "default-flavor"
resources :
- name : "nvidia.com/gpu"
nominalQuota : ${num_gpus}
admissionChecks :
- dws-prov
---
apiVersion : kueue.x-k8s.io/v1beta1
kind : LocalQueue
metadata :
namespace : "default"
name : "dws-local-queue"
spec :
clusterQueue : "dws-cluster-queue"
---
Under id: job-template , replace the node_count variable with 2 .
In the examples/gke-a4/gke-a4-deployment.yaml blueprint from the
GitHub repo ,
fill in the following settings in the terraform_backend_defaults
and vars sections to match the specific values for your deployment:
DEPLOYMENT_NAME : a unique name for the
deployment, which must be between 6 and 30 characters in length.
If the deployment name isn't unique within a project, cluster
creation fails. The default value is gke-a4 .
BUCKET_NAME : the name of the
Cloud Storage bucket you created in the previous step.
PROJECT_ID : your Google Cloud project ID.
COMPUTE_REGION : the compute region for the
cluster.
COMPUTE_ZONE : the compute zone for the node pool
of A4 machines.
STATIC_NODE_COUNT : the number of A4 nodes in your cluster.
IP_ADDRESS / SUFFIX : The IP
address range that you want to allow to connect with the cluster. This CIDR
block must include the IP address of the machine that you want to
use to call Terraform. For more information, see How authorized
networks
work .
Replace the entire reservation
block (including the reservation line itself) with
spot: true .
Set the boot disk sizes for each node of the system and A4 node pools. The disk size that you need depends on your use case. For example, if you use the disk as a cache to reduce the latency of pulling an image repeatedly, then you can set a larger disk size to accommodate your framework, model, or container image:
SYSTEM_NODE_POOL_DISK_SIZE_GB : the size of the boot disk for each node of the system node pool. The smallest allowed disk size is 10 . The default value is 100 .
A4_NODE_POOL_DISK_SIZE_GB : the size of the boot disk for each node of the A4 node pool. The smallest allowed disk size is 10 . The default value is 100 .
In the examples/gke-a4/gke-a4.yaml blueprint from the GitHub
repo ,
make the following changes:
In the vars block, replace the entire reservation
block (including the reservation line itself) with
spot: true .
Under id: a4-pool , remove the reservation_affinity block. Replace
this block with the following line:
spot: $(vars.spot)
Generate Application Default Credentials (ADC)
to provide access to Terraform. If you're using Cloud Shell, sign in
and set up ADC:
gcloud auth application-default login
Deploy the blueprint to provision the GKE infrastructure
using A4 machine types:
cd ~/cluster-toolkit
./gcluster deploy -d \
examples/gke-a4/gke-a4-deployment.yaml \
examples/gke-a4/gke-a4.yaml
When prompted, select (A)pply to deploy the blueprint.
The blueprint creates VPC networks, a GPU RDMA VPC network, service accounts, a cluster, and a nodepool.
To support the fio-bench-job-template job template in the blueprint,
Google Cloud buckets, network storage, and persistent volumes resources
are created.
Launch Cloud Shell . You can use a
different environment; however, we recommend Cloud Shell because the
dependencies are already pre-installed for Cluster Toolkit. If you
don't want to use Cloud Shell, follow the instructions to install
dependencies to prepare a
different environment.
Clone the Cluster Toolkit from the git repository:
cd ~
git clone https://github.com/GoogleCloudPlatform/cluster-toolkit.git
Install the Cluster Toolkit:
cd cluster-toolkit && git checkout main && make
Create a Cloud Storage bucket to store the state of the Terraform
deployment:
gcloud storage buckets create gs:// BUCKET_NAME \
--default-storage-class = STANDARD \
--project = PROJECT_ID \
--location = COMPUTE_REGION_TERRAFORM_STATE \
--uniform-bucket-level-access
gcloud storage buckets update gs:// BUCKET_NAME --versioning
Replace the following variables:
BUCKET_NAME : the name of the new
Cloud Storage bucket.
PROJECT_ID : your Google Cloud project ID.
COMPUTE_REGION_TERRAFORM_STATE : the compute region where you want
to store the state of the Terraform deployment.
The files that you need to edit to create a cluster depend on the
consumption option that
you're using for your deployment. Select the tab that corresponds to your
consumption option's provisioning model.
Reservation-bound Flex-start Spot
More
In the examples/gke-a3-ultragpu/gke-a3-ultragpu-deployment.yaml
blueprint from the GitHub repo ,
replace the following variables in the terraform_backend_defaults and
vars sections to match the specific values for your deployment:
DEPLOYMENT_NAME : a unique name for the
deployment, which must be between 6 and 30 characters in length. If
the deployment name isn't unique within a project, cluster creation
fails.
BUCKET_NAME : the name of the
Cloud Storage bucket you created in the previous step.
PROJECT_ID : your Google Cloud project ID.
COMPUTE_REGION : the compute region for the
cluster.
COMPUTE_ZONE : the compute zone for the node pool
of A3 Ultra machines. Note that this zone must match the zone where machines are available in your reservation.
NODE_COUNT : the number of A3 Ultra
nodes in your cluster.
IP_ADDRESS / SUFFIX : The IP
address range that you want to allow to connect with the cluster. This CIDR
block must include the IP address of the machine that you want to use
to call Terraform. For more information, see How authorized networks
work .
For the reservation field, use one of the following,
depending on whether you want to target specific
blocks in a reservation
when provisioning the node pool:
To place the node pool anywhere in the reservation, provide the
name of your reservation ( RESERVATION_NAME ).
To target a specific block within your reservation, use the
reservation and block names in the following format:
RESERVATION_NAME /reservationBlocks/ BLOCK_NAME
If you don't know which blocks are available in your reservation,
see View a reservation
topology .
Set the boot disk sizes for each node of the system and A3 Ultra node pools. The disk size that you need depends on your use case. For example, if you use the disk as a cache to reduce the latency of pulling an image repeatedly, then you can set a larger disk size to accommodate your framework, model, or container image:
SYSTEM_NODE_POOL_DISK_SIZE_GB : the size of the boot disk for each node of the system node pool. The smallest allowed disk size is 10 . The default value is 100 .
A3ULTRA_NODE_POOL_DISK_SIZE_GB : the size of the boot disk for each node of the A3 Ultra node pool. The smallest allowed disk size is 10 . The default value is 100 .
To modify advanced settings, edit
examples/gke-a3-ultragpu/gke-a3-ultragpu.yaml .
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
In the examples/gke-a3-ultragpu/gke-a3-ultragpu-deployment.yaml
blueprint from the GitHub repo ,
replace the following variables in the terraform_backend_defaults and
vars sections to match the specific values for your deployment:
DEPLOYMENT_NAME : a unique name for the
deployment, which must be between 6 and 30 characters in length.
If the deployment name isn't unique within a project, cluster
creation fails.
BUCKET_NAME : the name of the
Cloud Storage bucket you created in the previous step.
PROJECT_ID : your Google Cloud project ID.
COMPUTE_REGION : the compute region for the
cluster.
COMPUTE_ZONE : the compute zone for the node pool
of A3 Ultra machines.
Remove static_node_count .
IP_ADDRESS / SUFFIX : The IP
address range that you want to allow to connect with the cluster. This CIDR
block must include the IP address of the machine that you want to
use to call Terraform.
For more information, see How authorized networks
work .
Remove the reservation field, and replace the field with
enable_flex_start: true . Add on the next line
enable_queued_provisioning: true if you'd also like to use queued
provisioning. For more information, see Use node pools with flex-start
with queued
provisioning .
Set the boot disk sizes for each node of the system and A3 Ultra node pools. The disk size that you need depends on your use case. For example, if you use the disk as a cache to reduce the latency of pulling an image repeatedly, then you can set a larger disk size to accommodate your framework, model, or container image:
SYSTEM_NODE_POOL_DISK_SIZE_GB : the size of the boot disk for each node of the system node pool. The smallest allowed disk size is 10 . The default value is 100 .
A3ULTRA_NODE_POOL_DISK_SIZE_GB : the size of the boot disk for each node of the A3 Ultra node pool. The smallest allowed disk size is 10 . The default value is 100 .
In the examples/gke-a3-ultragpu/gke-a3-ultragpu.yaml blueprint
from the GitHub repo ,
make the following changes:
In the vars block, remove static_node_count .
In the vars block, update version_prefix number to "1.32." or higher. To use flex-start in GKE, your cluster must use version 1.32.2-gke.1652000 or later.
In the vars block, replace the entire reservation
block (including the reservation line itself) with
enable_flex_start: true , and, optionally,
enable_queued_provisioning: true .
In the vars block, remove the following line:
kueue_configuration_path: $(ghpc_stage("./kueue-configuration.yaml.tftpl")) .
Under id: a3-ultragpu-pool , remove the following line:
static_node_count: $(vars.static_node_count) .
Under id: a3-ultragpu-pool , remove the reservation_affinity block. Replace
this block with the following lines:
enable_flex_start: $(vars.enable_flex_start)
auto_repair: false
For queued provisioning, if you want to enable it, add the
following additional lines:
enable_queued_provisioning: $(vars.enable_queued_provisioning)
autoscaling_total_min_nodes: 0
Under id: workload-manager-install , remove the following
block:
config_path : $(vars.kueue_configuration_path)
config_template_vars :
num_gpus : $(a4-pool.static_gpu_count)
accelerator_type : $(vars.accelerator_type)
For flex-start with queued provisioning, follow these three steps:
Add gpu_nominal_quota: NOMINAL_QUOTA to the vars block. The gpu_nominal_quota value is used to set the nominalQuota of GPUs in the ClusterQueue specification. In this example, the ClusterQueue only admits workloads if the sum of the GPU requests is less than or equal to the NOMINAL_QUOTA value. For more information about ClusterQueue , see the following Kueue document of Cluster Queue .
Update the kueue block to the following:
kueue :
install : true
config_path : $(vars.kueue_configuration_path)
config_template_vars :
num_gpus : $(vars.gpu_nominal_quota)
Replace the content of the
kueue-configuration.yaml.tftpl file with the
following:
apiVersion : kueue.x-k8s.io/v1beta1
kind : ResourceFlavor
metadata :
name : "default-flavor"
---
apiVersion : kueue.x-k8s.io/v1beta1
kind : AdmissionCheck
metadata :
name : dws-prov
spec :
controllerName : kueue.x-k8s.io/provisioning-request
parameters :
apiGroup : kueue.x-k8s.io
kind : ProvisioningRequestConfig
name : dws-config
---
apiVersion : kueue.x-k8s.io/v1beta1
kind : ProvisioningRequestConfig
metadata :
name : dws-config
spec :
provisioningClassName : queued-provisioning.gke.io
managedResources :
- nvidia.com/gpu
---
apiVersion : kueue.x-k8s.io/v1beta1
kind : ClusterQueue
metadata :
name : "dws-cluster-queue"
spec :
namespaceSelector : {}
resourceGroups :
- coveredResources : [ "nvidia.com/gpu" ]
flavors :
- name : "default-flavor"
resources :
- name : "nvidia.com/gpu"
nominalQuota : ${num_gpus}
admissionChecks :
- dws-prov
---
apiVersion : kueue.x-k8s.io/v1beta1
kind : LocalQueue
metadata :
namespace : "default"
name : "dws-local-queue"
spec :
clusterQueue : "dws-cluster-queue"
---
In the id: job-template field, replace the node_count variable with 2 .
In the examples/gke-a3-ultragpu/gke-a3-ultragpu-deployment.yaml
blueprint from the GitHub repo ,
fill in the following settings in the terraform_backend_defaults
and vars sections to match the specific values for your deployment:
DEPLOYMENT_NAME : a unique name for the
deployment, which must be between 6 and 30 characters in length.
If the deployment name isn't unique within a project, cluster
creation fails.
BUCKET_NAME : the name of the
Cloud Storage bucket you created in the previous step.
PROJECT_ID : your Google Cloud project ID.
COMPUTE_REGION : the compute region for the
cluster.
COMPUTE_ZONE : the compute zone for the node pool
of A3 Ultra machines.
STATIC_NODE_COUNT : the number of A3 Ultra nodes in your cluster.
IP_ADDRESS / SUFFIX : The IP
address range that you want to allow to connect with the cluster. This CIDR
block must include the IP address of the machine that you want to
use to call Terraform. For more information, see How authorized
networks
work .
Replace the entire reservation
block (including the reservation line itself) with
spot: true .
Set the boot disk sizes for each node of the system and A3 Ultra node pools. The disk size that you need depends on your use case. For example, if you use the disk as a cache to reduce the latency of pulling an image repeatedly, then you can set a larger disk size to accommodate your framework, model, or container image:
SYSTEM_NODE_POOL_DISK_SIZE_GB : the size of the boot disk for each node of the system node pool. The smallest allowed disk size is 10 . The default value is 100 .
A3ULTRA_NODE_POOL_DISK_SIZE_GB : the size of the boot disk for each node of the A3 Ultra node pool. The smallest allowed disk size is 10 . The default value is 100 .
In the examples/gke-a3-ultragpu/gke-a3-ultragpu.yaml blueprint from the GitHub
repo ,
make the following changes:
In the vars block, replace the entire reservation
block (including the reservation line itself) with
spot: true .
Under id: a3-ultragpu-pool , remove the reservation_affinity block. Replace
this block with the following line:
spot: $(vars.spot)
Generate Application Default Credentials
(ADC) to provide
access to Terraform. If you're using Cloud Shell, sign in and set up
ADC:
gcloud auth application-default login
Deploy the blueprint to provision the GKE infrastructure
using A3 Ultra machine types:
cd ~/cluster-toolkit
./gcluster deploy -d \
examples/gke-a3-ultragpu/gke-a3-ultragpu-deployment.yaml \
examples/gke-a3-ultragpu/gke-a3-ultragpu.yaml
When prompted, select (A)pply to deploy the blueprint.
The blueprint creates VPC networks, a GPU RDMA VPC network, service accounts, a cluster, and a nodepool.
To support the fio-bench-job-template job template in the blueprint,
Google Cloud buckets, network storage, and persistent volumes resources
are created.
Note: When deploying your blueprint if you encounter an error at Jobset or Kueue installation, deploy the blueprint again with the addition of the -w flag ( ./gcluster deploy -w -d ... ) to complete the deployment.
Create a cluster and run workloads using XPK
Accelerated Processing Kit (XPK) lets you quickly provision and utilize
clusters. XPK generates preconfigured, training-optimized infrastructure, ideal
for when workload execution is your primary focus.
Create a cluster and run workloads with A3 Ultra VM instances using XPK:
Install the required tools to meet the XPK
prerequisites .
Copy the version number of the latest tagged release of XPK , for example,
"v0.8.0". In the following command, replace the XPK_TAG
with the latest XPK version number.
Open a shell window on a Linux machine, and enter the following commands to
clone XPK from the Git repository, and install the required packages:
## Setup virtual environment.
VENV_DIR = ~/venvp3
python3 -m venv $VENV_DIR
source $VENV_DIR /bin/activate
## Clone the repository.
git clone --branch XPK_TAG https://github.com/google/xpk.git
cd xpk
## Install required packages
make install && export PATH = $PATH : $PWD /bin
Create a Standard cluster using A3 Ultra VM instances. You can
provision the cluster's nodes using reserved capacity:
python3 xpk.py cluster create \
--cluster = CLUSTER_NAME \
--device-type = h200-141gb-8 \
--zone = COMPUTE_ZONE \
--project = PROJECT_ID \
--num-nodes = NUM_NODES \
--reservation = RESERVATION_NAME
Replace the following variables:
CLUSTER_NAME : a name for the cluster.
COMPUTE_ZONE : the compute
zone for the node pool of A3
Ultra machines. To use reserved capacity, ensure that you use the zone
where you reserved the capacity. And, we generally recommend choosing a
zone near the user to minimize latency.
PROJECT_ID : your Google Cloud project
ID .
NUM_NODES : the number of worker nodes in the
node pool.
RESERVATION_NAME : the name of your reservation.
XPK offers additional arguments for cluster creation, including those for
creating private clusters, creating Vertex AI Tensorboards, and
using node auto-provisioning. For more information, refer to the cluster
creation
guide for XPK.
Verify that the cluster was created successfully:
python3 xpk.py cluster list --zone = COMPUTE_ZONE --project = PROJECT_ID
Optional: Run a workload to test the cluster environment:
python3 xpk.py workload create \
--workload WORKLOAD_NAME --command "echo goodbye" \
--cluster CLUSTER_NAME \
--device-type = h200-141gb-8 \
--num-nodes = WORKLOAD_NUM_NODES \
--zone = COMPUTE_ZONE \
--project = PROJECT_ID
Replace the following variables:
WORKLOAD_NAME : name of your workload.
CLUSTER_NAME : the name of the cluster.
WORKLOAD_NUM_NODES : number of worker nodes used
for workload execution.
COMPUTE_ZONE : the compute
zone for the node pool of A3
Ultra machines.
PROJECT_ID : your Google Cloud project
ID .
Test network performance
We recommended that you validate the functionality of provisioned clusters. To do so, use NCCL/gIB tests , which are NVIDIA Collective Communications Library (NCCL) tests that are optimized for the Google environment.
Run reproducible benchmarks
You can use reproduce pre-training benchmarks for large machine learning open
models on A4 and A3 Ultra VM instances on GKE.
Each recipe provides you with the instructions to complete the following tasks:
Prepare your environment.
Run the benchmark.
Analyze the benchmarks results. This includes the benchmark results and
detailed logs for further analysis.
To view all the recipes available, see the
GPU recipes GitHub
repository.
Note: The following table lists pre-training benchmark recipes that are tested
on A3 Ultra VM instances on GKE clusters that were created using
Cluster Toolkit.
Models
Framework
Recipe
Llama-3.1-70B
MaxText
32 node workload
Llama-3.1-70B
NeMo
32 node workload
Mixtral-8-7B
NeMo
32 node workload
Clean up resources created by Cluster Toolkit
To avoid recurring charges for the resources used on this page, clean up the
resources provisioned by Cluster Toolkit, including the
VPC networks and GKE cluster:
cd ~/cluster-toolkit
./gcluster destroy CLUSTER_NAME /
Replace CLUSTER_NAME with the name of your cluster.
For the clusters created with Cluster Toolkit, the cluster name is
based on the DEPLOYMENT_NAME .
What's next
To learn about scheduling workloads on your GKE clusters
using TAS and Kueue, see Schedule GKE workloads with
Topology Aware
Scheduling .
To learn about managing common events relevant to GKE
clusters and AI workloads, see Manage AI-optimized GKE
clusters .
For information about testing your environment for proper setup and optimization, see
Cluster networking optimization overview
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
