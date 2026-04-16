---
title: "Create an A3 High GKE cluster \_|\_ Cluster Toolkit \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/cluster-toolkit/docs/deploy/gke/create-a3-high-cluster
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint
source_metadata:
  url: https://docs.cloud.google.com/cluster-toolkit/docs/deploy/gke/create-a3-high-cluster
  title: "Create an A3 High GKE cluster \_|\_ Cluster Toolkit \_|\_ Google Cloud Documentation"
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
Create an A3 High GKE cluster
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how to deploy an A3 High ( a3-highgpu-8g )
Google Kubernetes Engine (GKE) cluster with Cluster Toolkit.
A3 High machine types feature NVIDIA H100 80GB GPUs, high-performance
networking, and are designed for large-scale AI and ML workloads.
To learn more about the A3 High accelerator-optimized machine type, see the A3
High machine type
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
To identify the regions and zones where the a3-highgpu-8g machine type is
available, use the gcloud compute machine-types
list command:
gcloud compute machine-types list --filter="name=a3-highgpu-8g"
Verify that you have enough GPU quotas. Each a3-highgpu-8g machine has
8 H100 80GB GPUs attached, so you need at least 8 NVIDIA H100 80GB GPUs
in your selected region.
To view quotas, see
View the quotas for your project .
In the filter_list Filter field,
select Dimensions (e.g. location) and specify
gpu_family:NVIDIA_H100_80GB .
If you don't have enough quota,
request a higher quota .
Verify that you have enough Filestore quota. You need a minimum of
2560 GiB of Basic SSD capacity.
If you don't have enough quota,
request a quota increase .
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
Create an A3 High GKE cluster
To deploy the cluster, you must complete the following:
Install Cluster Toolkit.
Create a reservation.
Create a cluster.
Clean up resources created by Cluster Toolkit.
Install Cluster Toolkit
Important: If you use Cloud Shell , the
Cluster Toolkit dependencies are already pre-installed. If you are
using an alternative to
Cloud Shell, such as using a workstation that is running Linux or
macOS, you must follow the instructions in Install
dependencies .
If you are using Cloud Shell, then follow the instructions in Set up
Cluster Toolkit .
If you are using an alternative to Cloud Shell, such as using a
workstation that is running Linux or macOS, then follow the instructions in Install
dependencies .
Create a reservation
Reservations help ensure that you have the available resources to create A3 High VMs with the
specified hardware (memory, vCPUs, and GPUs) and attached Local SSD disks whenever you need them.
To review the different methods to reserve resources for creating VMs, see
Choose a reservation type .
For example, to create an on-demand, specifically targeted reservation for A3 High VMs, use the
gcloud compute reservations
create command with the --require-specific-reservation flag:
gcloud compute reservations create RESERVATION_NAME \
--require-specific-reservation \
--project= PROJECT_ID \
--machine-type=a3-highgpu-8g \
--vm-count= NUMBER_OF_VMS \
--zone= ZONE
Replace the following variables:
RESERVATION_NAME : the name of the single-project reservation that you
want to use.
PROJECT_ID : the ID of your project.
NUMBER_OF_VMS : the number of VMs needed for the cluster.
ZONE : a zone that has a3-highgpu-8g machine types. To
review the zones where you can create A3 High VMs, see
Accelerator
availability .
After you destroy your cluster, you can delete the reservation if you don't need it
anymore. For information, see
Delete reservations .
Create an A3 High GKE cluster
If you create multiple clusters by using the Cluster Toolkit example
blueprints, then verify that all VPC and subnet names are unique
per project to prevent errors. To create the cluster, you do the following:
After you have installed the Cluster Toolkit, verify that you are in the
Cluster Toolkit directory. To go to the main Cluster Toolkit blueprint's
working directory, run the following command from the CLI.
cd cluster-toolkit
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
To define your cluster specifications, create a local file named
gke-a3-highgpu-deployment.yaml and copy the following
deployment variables into it.
terraform_backend_defaults:
type: gcs
configuration:
bucket: BUCKET_NAME
vars:
deployment_name: DEPLOYMENT_NAME
project_id: PROJECT_ID
region: COMPUTE_REGION
zone: COMPUTE_ZONE
authorized_cidr: IP_ADDRESS / SUFFIX
reservation: RESERVATION_NAME
static_node_count: NODE_COUNT
system_node_pool_disk_size_gb: SYSTEM_NODE_POOL_DISK_SIZE_GB # the size of the boot disk for the system node pool.
a3high_node_pool_disk_size_gb: A3HIGH_NODE_POOL_DISK_SIZE_GB # the size of the boot disk for the A3 High node pool.
enable_periodic_health_checks: # Make this true to run CHS (healthchecks)
health_check_schedule: # Run the health check at 12:00 AM (midnight) every Sunday
Replace the following:
DEPLOYMENT_NAME : a unique name for the
deployment. If the deployment name isn't unique within a project,
cluster creation fails.
BUCKET_NAME : the name of the
Cloud Storage bucket you created in the previous step.
PROJECT_ID : your Google Cloud project ID.
COMPUTE_REGION : the compute region for the
cluster.
COMPUTE_ZONE : the compute zone for the node
pool of A3 High machines.
NODE_COUNT : the number of A3 High nodes in
your cluster.
IP_ADDRESS / SUFFIX : The IP
address range that connects to the cluster. This
CIDR block must include the IP address of the machine running Terraform.
For more information, see
How authorized networks work .
To get the IP address for your host machine, run the command curl ifconfig.me .
RESERVATION_NAME : the name of the reservation.
Use one of the following options, depending on whether you want to
target specific blocks
in a reservation when provisioning the node pool:
To place the node pool anywhere in the reservation, provide the
name of your reservation.
To target a specific block within your reservation, use the
reservation and block names in the following format:
RESERVATION_NAME /reservationBlocks/ BLOCK_NAME
If you don't know which blocks are available in your reservation, see
View the topology of a reservation .
SYSTEM_NODE_POOL_DISK_SIZE_GB : the size of the
boot disk for each node of the system node pool.
A3HIGH_NODE_POOL_DISK_SIZE_GB : the size of the
boot disk for each node of the A3 High node pool.
To modify advanced blueprint settings, edit the examples/gke-a3-highgpu.yaml
file in the repository.
Deploy the blueprint to provision the GKE infrastructure
that uses A3 High machine types:
cd ~/cluster-toolkit
./gcluster deploy -d \
gke-a3-highgpu-deployment.yaml \
examples/gke-a3-highgpu.yaml
When prompted, select (A)pply to deploy the blueprint. The blueprint
creates VPC networks, service accounts, a cluster, and a node
pool.
Test network performance
We recommend that you validate the functionality of provisioned clusters. To do
so, use NCCL/gIB tests , which are
NVIDIA Collective Communications Library (NCCL)
tests that are optimized for the Google
environment.
Clean up resources created by Cluster Toolkit
To avoid recurring charges for the resources used on this page, clean up the
resources provisioned by Cluster Toolkit, including the
VPC networks and GKE cluster:
cd ~/cluster-toolkit
./gcluster destroy CLUSTER_NAME /
Replace CLUSTER_NAME with the name of your cluster.
For the clusters created with Cluster Toolkit, the cluster names
are based on the DEPLOYMENT_NAME name.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
