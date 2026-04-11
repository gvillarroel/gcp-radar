---
title: "Deploy an A3 Mega GKE cluster for ML training \_|\_ Cluster Toolkit \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/cluster-toolkit/docs/setup/configure-environment
source_metadata:
  url: https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-gke-cluster
  title: "Deploy an A3 Mega GKE cluster for ML training \_|\_ Cluster Toolkit \_|\_\
    \ Google Cloud Documentation"
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
Deploy an A3 Mega GKE cluster for ML training
Stay organized with collections
Save and categorize content based on your preferences.
This document outlines the deployment steps for provisioning an A3 Mega
( a3-megagpu-8g ) Google Kubernetes Engine (GKE) cluster that is ideal for running
large-scale artificial intelligence (AI) and machine learning (ML) training
workloads.
Before you begin
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
At the bottom of the Google Cloud console, a
Cloud Shell
session starts and displays a command-line prompt. Cloud Shell is a shell environment
with the Google Cloud CLI
already installed and with values already set for
your current project. It can take a few seconds for the session to initialize.
Identify the regions and zones where the a3-megagpu-8g machine type is
available, run the following command:
gcloud compute machine-types list --filter="name=a3-megagpu-8g"
Ensure that you have enough GPU quotas. Each a3-megagpu-8g machine has
8 H100 80GB GPUs attached, so you'll need at least 8 NVIDIA H100 80GB GPUs
in your selected region.
To view quotas, see
View the quotas for your project .
In the filter_list Filter field,
select Dimensions (e.g. location) and specify
gpu_family:NVIDIA_H100_MEGA .
If you don't have enough quota,
request a higher quota .
Ensure that you have enough Filestore quota. You need a minimum of
10,240 GiB of zonal (also known as high scale SSD) capacity.
If you don't have enough quota,
request a quota increase .
Overview
To deploy the cluster, you must complete the following:
Install Cluster Toolkit.
Create a reservation.
Create a cluster.
Clean up resources created by Cluster Toolkit.
Install Cluster Toolkit
Important: If you use Cloud Shell
, the
Cluster Toolkit dependencies are already pre-installed. If you are
using an alternative to
Cloud Shell, such as using a workstation that is running Linux or
macOS, you must follow the instructions in Install
dependencies .
From the CLI, complete the following steps:
Install dependencies .
Set up Cluster Toolkit .
Create a reservation
Reservations help ensure that you have the available resources to create A3 Mega VMs with the
specified hardware (memory, vCPUs, and GPUs) and attached Local SSD disks whenever you need them.
To review the different methods to reserve resources for creating VMs, see
Choose a reservation type .
For example, to create an on-demand, specifically targeted reservation for A3 Mega VMs, run the
gcloud compute reservations
create command with the --require-specific-reservation flag:
gcloud compute reservations create RESERVATION_NAME \
--require-specific-reservation \
--project= PROJECT_ID \
--machine-type=a3-megagpu-8g \
--vm-count= NUMBER_OF_VMS \
--zone= ZONE
Replace the following:
RESERVATION_NAME : the name of the single-project reservation that you
want to use.
PROJECT_ID : the ID of your project.
NUMBER_OF_VMS : the number of VMs needed for the cluster.
ZONE : a zone that has a3-megagpu-8g machine types. To
review the zones where you can create A3 Mega VMs, see
Accelerator
availability .
After you destroy your cluster, you can delete the reservation if you don't need it
anymore. For information, see
Delete reservations .
Create a cluster
Use the following instructions to create a cluster using
Cluster Toolkit .
Note: If you create multiple clusters using these same cluster blueprints,
ensure that all VPC and subnet names are unique per project to
prevent errors.
After you have installed the Cluster Toolkit, ensure that you are in the
Cluster Toolkit directory. To go to the main Cluster Toolkit blueprint's
working directory, run the following command from the CLI.
cd cluster-toolkit
Create a Cloud Storage bucket to store the state of the Terraform deployment:
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
Update the blueprint deployment file. In the
examples/gke-a3-megagpu/gke-a3-megagpu-deployment.yaml
file, fill in the following settings in the terraform_backend_defaults
and vars sections to match the specific values for your deployment:
DEPLOYMENT_NAME : a unique name for the
deployment. If the deployment name isn't unique within a project,
cluster creation fails.
BUCKET_NAME : the name of the
Cloud Storage bucket you created in the previous step.
PROJECT_ID : your Google Cloud project ID.
COMPUTE_REGION : the compute region for the
cluster.
COMPUTE_ZONE : the compute zone for the node pool
of A3 Mega machines.
NODE_COUNT : the number of A3 Mega nodes in your
cluster.
IP_ADDRESS / SUFFIX : The IP
address range that you want to allow to connect with the cluster. This CIDR
block must include the IP address of the machine to call Terraform. For
more information, see How authorized networks
work .
To get the IP address for your host machine, run the following command.
curl ifconfig.me
RESERVATION_NAME : the name of the reservation. Use
one of the following options, depending on whether you want to target
specific blocks in a
reservation when provisioning the node pool:
To place the node pool anywhere in the reservation, provide the
name of your reservation.
To target a specific block within your reservation, use the
reservation and block names in the following format:
RESERVATION_NAME /reservationBlocks/ BLOCK_NAME
If you don't know which blocks are available in your reservation, see
View the topology of a reservation .
To modify advanced blueprint settings, edit the
examples/gke-a3-megagpu/gke-a3-megagpu.yaml
file.
Deploy the blueprint to provision the GKE infrastructure
using A3 Mega machine types:
cd ~/cluster-toolkit
./gcluster deploy -d \
examples/gke-a3-megagpu/gke-a3-megagpu-deployment.yaml \
examples/gke-a3-megagpu/gke-a3-megagpu.yaml
When prompted, select (A)pply to deploy the blueprint.
The blueprint creates VPC networks, service accounts, a cluster, and a
nodepool.
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
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
