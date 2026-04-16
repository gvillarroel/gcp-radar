---
title: "Create an A3 Ultra GKE cluster \_|\_ Cluster Toolkit \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/cluster-toolkit/docs/deploy/gke/create-a3-ultra-cluster
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint
source_metadata:
  url: https://docs.cloud.google.com/cluster-toolkit/docs/deploy/gke/create-a3-ultra-cluster
  title: "Create an A3 Ultra GKE cluster \_|\_ Cluster Toolkit \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Cluster Toolkit
Guides
Send feedback
Create an A3 Ultra GKE cluster
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how to deploy an A3 Ultra GKE cluster.
These clusters feature high-performance network topologies for large-scale
artificial intelligence (AI) and machine learning (ML) training workloads.
A3 Ultra machine types have NVIDIA H200 SXM GPUs attached and provide the
highest network performance in the A3 series. A3 Ultra machine types are ideal
for foundation model training and serving.
To learn more about the A3 Ultra accelerator-optimized machine type, see the A3
Ultra machine type
section in the
Compute Engine documentation.
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
you need to deploy the cluster,
ask your administrator to grant you the
following IAM roles on the project:
Kubernetes Engine Admin ( roles/container.admin )
Compute Admin ( roles/compute.admin )
Storage Admin ( roles/storage.admin )
Project IAM Admin ( roles/resourcemanager.projectIamAdmin )
Service Account Admin ( roles/iam.serviceAccountAdmin )
Service Account User ( roles/iam.serviceAccountUser )
Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Choose a consumption option and obtain capacity
To obtain capacity, complete the following steps:
Choose a consumption option: Make your choice based on how you want to
get and use GPU resources. To learn more, see Choose a consumption
option .
For GKE, consider the following additional information when
choosing a consumption option:
For more information about flex-start
( Preview ) and
GKE, see About GPU obtainability with
flex-start .
Flex-start uses best-effort compact placement. To examine your topology,
see View the physical topology of nodes in your GKE
cluster .
You can only get topology information when using Spot VMs if you
configure compact
placement .
Obtain capacity: The process to obtain capacity differs for each
consumption option. To learn about the process for your chosen consumption
option, see Capacity overview .
Requirements
The following requirements apply to an AI-optimized GKE cluster
that uses A3 Ultra instances:
GPU drivers : The H200 GPUs in A3 Ultra VM instances require a minimum of
the R550 GPU driver version, which is available in GKE 1.31 as
the latest driver version. For A3 Ultra, you must set
gpu-driver-version=latest with GKE 1.31. For
GKE version 1.31.5-gke.1169000 or later, GKE
automatically installs the R550 GPU driver versions on A3 Ultra nodes by
default.
Storage : For A3 Ultra node pools, you must set the disk type to
hyperdisk-balanced .
GPUDirect RDMA : To use GPUDirect RDMA with A3 Ultra, use
GKE version 1.31.4-gke.1183000 or later.
Node images : To use GPUDirect RDMA, the GKE nodes must use
a Container-Optimized OS node image. Ubuntu and Windows node images are
not supported.
Create an A3 Ultra GKE cluster
To create an A3 Ultra GKE cluster, follow these steps:
Note: If you create multiple clusters by using the example Cluster Toolkit
blueprints, then verify that all VPC network and subnet names
are unique per project to prevent errors.
Launch Cloud Shell . You can
use a different environment; however, we recommend that you use Cloud Shell because
the dependencies are already pre-installed for Cluster Toolkit. If you
don't want to use Cloud Shell, follow the instructions to
install dependencies
to prepare a different environment.
Create a Cloud Storage bucket to store the state of the Terraform
deployment:
gcloud storage buckets create gs:// BUCKET_NAME \
--default-storage-class=STANDARD \
--project= PROJECT_ID \
--location= COMPUTE_REGION_TERRAFORM_STATE \
--uniform-bucket-level-access
gcloud storage buckets update gs:// BUCKET_NAME --versioning
Replace the following variables:
BUCKET_NAME : the name of the new
Cloud Storage bucket.
PROJECT_ID : your Google Cloud project ID.
COMPUTE_REGION_TERRAFORM_STATE : the compute
region where you want to store the state of the Terraform
deployment.
In the examples/gke-a3-ultragpu/gke-a3-ultragpu-deployment.yaml
blueprint from the GitHub repository, fill in the following settings in the
terraform_backend_defaults and vars sections to match the specific
values for your deployment:
Replace the following variables:
DEPLOYMENT_NAME : a unique name for the
deployment, which must be between 6 and 30 characters in length. If the
deployment name isn't unique within a project, cluster creation fails.
The default value is gke-a3-ultragpu .
BUCKET_NAME : the name of the Cloud Storage
bucket that you created in the previous step.
PROJECT_ID : your Google Cloud project ID.
COMPUTE_REGION : the compute region for the
cluster.
COMPUTE_ZONE : the compute zone for the node
pool of A3 Ultra machines. This zone should match the zone
where machines are available in your reservation.
NODE_COUNT : the number of A3 Ultra
nodes in your cluster's node pool,
IP_ADDRESS / SUFFIX :
the IP address range that you want to let connect to the cluster.
This CIDR block must include the IP address of the machine that calls Terraform. For more information, see
How authorized networks work .
For the extended_reservation field (or
reservation field), use one of the following, depending on
whether you want to target specific
blocks in a
reservation when you provision the node pool:
To place the node pool anywhere in the reservation, provide the
name of your reservation ( RESERVATION_NAME ).
To target a specific block within your reservation, use the
reservation and block names in the following format:
RESERVATION_NAME /reservationBlocks/ BLOCK_NAME
If you don't know which blocks are available in your reservation,
see View a reservation topology .
Set the boot disk sizes for each node of the system and
A3 Ultra node pools. The disk size that you need depends on
your use case. For example, if you use the disk as a cache to reduce the
latency of pulling an image repeatedly, you can set a larger disk size
to accommodate your framework, model, or container image:
SYSTEM_NODE_POOL_DISK_SIZE_GB : the size
of the boot disk for each node of the system node pool. The smallest
allowed disk size is 10 .
A3ULTRA_NODE_POOL_DISK_SIZE_GB : the size of the boot
disk for each node of the A3 Ultra node pool. The smallest
allowed disk size is 10 .
To modify advanced settings, edit the
examples/gke-a3-ultragpu/gke-a3-ultragpu.yaml
file.
Optional: You can enable Cluster Health Scanner (CHS)
on the cluster. CHS checks the health of your GPU clusters by running tests
to verify that the clusters are ready to run your workloads. To enable CHS,
make the following changes in the examples/gke-a3-ultragpu/gke-a3-ultragpu-deployment.yaml
file:
In the vars block, set the
enable_periodic_health_checks field to
true .
By default, the health checks run every Sunday at 12:00 am PST. If you
want to change this setting, in the vars block, set the
health_check_schedule field to a suitable value in
cron format .
Schedule in cron format:
* * * * *
# | | | | |
# | | | | day of the week (0-6) (Sunday to Saturday)
# | | | month (1-12)
# | | day of the month (1-31)
# | hour (0-23)
# minute (0-59)
Generate Application Default Credentials (ADC)
to provide access to Terraform. If you're using Cloud Shell, use the
gcloud auth application-default login command:
gcloud auth application-default login
Deploy the blueprint to provision the GKE infrastructure
by using A3 Ultra machine types:
cd ~/cluster-toolkit
./gcluster deploy -d \
examples/gke-a3-ultragpu/gke-a3-ultragpu-deployment.yaml \
examples/gke-a3-ultragpu/gke-a3-ultragpu.yaml
Note: If you encounter an error at Jobset or Kueue installation when you
deploy your blueprint, deploy the blueprint again with the addition of the
-w flag ( ./gcluster deploy -w -d ... ) to complete
the deployment.
When prompted, select (A)pply to deploy the blueprint.
The blueprint creates VPC networks, a GPU RDMA
VPC network, service accounts, a cluster, and a node
pool.
To support the fio-bench-job-template job template in the
blueprint, Google Cloud buckets, network storage, and persistent volume
resources are created.
Test network performance
We recommend that you validate the functionality of the cluster. To validate the
functionality, use NCCL/gIB tests , which
are NVIDIA Collective Communications Library (NCCL)
tests that are optimized for the Google
environment.
Run reproducible benchmarks
You can reproduce pre-training benchmarks for large machine learning open models
on A3 Ultra VM instances on GKE.
Each recipe provides you with the instructions to complete the following tasks:
Prepare your environment.
Run the benchmark.
Analyze the benchmarks results. This review includes the benchmark results and
detailed logs for further analysis.
To view all the available recipes, see the
GPU recipes GitHub
repository.
Note: The following table lists pre-training benchmark recipes that are tested
on A3 Ultra VM instances on GKE clusters that you create
by using Cluster Toolkit.
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
Clean up resources
To avoid recurring charges for the resources that you used on this page, clean
up the resources that are provisioned by Cluster Toolkit, including the
VPC networks and the GKE cluster:
cd ~/cluster-toolkit
./gcluster destroy CLUSTER_NAME
Replace CLUSTER_NAME with the name of your cluster.
What's next
To learn about scheduling workloads on your GKE clusters by
using Topology Aware Scheduling (TAS) and Kueue, see Schedule
GKE workloads with Topology Aware
Scheduling .
To learn about managing common events that are relevant to GKE
clusters and AI workloads, see Manage AI-optimized GKE
clusters .
For information about testing your environment for proper setup and
optimization, see Cluster networking optimization
overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
