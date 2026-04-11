---
title: "Deploy an A3 Mega Slurm cluster for ML training \_|\_ Cluster Toolkit \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-cluster
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/cluster-toolkit/docs/setup/configure-environment
source_metadata:
  url: https://docs.cloud.google.com/cluster-toolkit/docs/deploy/deploy-a3-mega-cluster
  title: "Deploy an A3 Mega Slurm cluster for ML training \_|\_ Cluster Toolkit \_\
    |\_ Google Cloud Documentation"
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
Deploy an A3 Mega Slurm cluster for ML training
Stay organized with collections
Save and categorize content based on your preferences.
This document outlines the deployment steps for provisioning an A3 Mega
( a3-megagpu-8g ) Slurm cluster that is ideal for running large-scale artificial
intelligence (AI) and machine learning (ML) training workloads.
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
Verify that you have enough GPU quotas. Each a3-megagpu-8g machine has
eight H100 80GB GPUs attached, so you'll need at least eight NVIDIA
H100 80GB GPUs in your selected region.
To view quotas, see
View the quotas for your project .
In the filter_list Filter field,
select Dimensions (e.g. location) and specify
gpu_family:NVIDIA_H100_MEGA .
If you don't have enough quota,
request a higher quota .
Verify that you have enough Filestore quota. You need a minimum of
10,240 GiB of zonal (also known as high scale SSD) capacity.
If you don't have enough quota,
request a quota increase .
Required roles
To complete this tutorial, you need IAM roles granted to your
Compute Engine default service account and your user account.
Get required roles for your Compute Engine default service account
To get the permissions that
you need to deploy a Slurm cluster,
ask your administrator to grant you the
following IAM roles:
Storage Object Viewer ( roles/storage.objectViewer )
on your project
Compute Instance Admin (v1) ( roles/compute.instanceAdmin.v1 )
on your project
Service Account User ( roles/iam.serviceAccountUser )
on the service account itself
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Get required roles for your user account
To get the permissions that
you need to create a Cloud Storage bucket,
ask your administrator to grant you the
Storage Admin ( roles/storage.admin )
IAM role on your project.
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
To provision Slurm clusters, we recommend that you use Cluster Toolkit
version v1.51.1 or later. To install Cluster Toolkit, see
Set up Cluster Toolkit .
Switch to the Cluster Toolkit directory
After you have installed the Cluster Toolkit, check that you are in the
Cluster Toolkit directory.
To go to the main Cluster Toolkit working directory, run the following command.
cd cluster-toolkit
Set up Cloud Storage bucket
Cluster blueprints use Terraform modules to provision Cloud infrastructure. A
best practice when working with Terraform is to
store the state remotely
in a version enabled file. On Google Cloud, you can create a Cloud Storage
bucket that has versioning enabled.
To create this bucket and enable versioning from the CLI, run the following commands:
gcloud storage buckets create gs:// BUCKET_NAME \
--project= PROJECT_ID \
--default-storage-class=STANDARD --location= BUCKET_REGION \
--uniform-bucket-level-access
gcloud storage buckets update gs:// BUCKET_NAME --versioning
Replace the following:
BUCKET_NAME : a name for your Cloud Storage bucket
that meets the bucket naming requirements .
PROJECT_ID : your project ID.
BUCKET_REGION : any available location .
Reserve capacity
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
Update the deployment file
Using a text editor, open the
examples/machine-learning/a3-megagpu-8g/a3mega-slurm-deployment.yaml
file.
In the deployment file, specify the Cloud Storage bucket, set names for
your network and subnetwork, and set deployment variables such as project ID,
region, and zone.
---
terraform_backend_defaults:
type: gcs
configuration:
bucket: BUCKET_NAME
vars:
deployment_name: a3mega-base
project_id: PROJECT_ID
region: REGION
zone: ZONE
network_name_system: NETWORK_NAME
subnetwork_name_system: SUBNETWORK_NAME
enable_ops_agent: true
enable_nvidia_dcgm: true
enable_nvidia_persistenced: true
disk_size_gb: 200
final_image_family: slurm-a3mega
slurm_cluster_name: CLUSTER_NAME
a3mega_reservation_name: RESERVATION_NAME
a3mega_cluster_size: NUMBER_OF_VMS
Replace the following:
BUCKET_NAME : the name of your Cloud Storage
bucket, created in the previous section.
PROJECT_ID : your project ID.
REGION : a region that has a3-megagpu-8g machine
types.
ZONE : a zone that has a3-megagpu-8g machine
types.
NETWORK_NAME : a name for your network. For example,
a3mega-sys-net .
SUBNETWORK_NAME : a name for your subnetwork. For example,
a3mega-sys-subnet .
CLUSTER_NAME : a name for the Slurm cluster.
The name must start with a lowercase letter and can contain only lowercase
letters, numbers, and hyphens. The name must be between 1 and 20
characters long.
RESERVATION_NAME : the name of the single-project
reservation that you want to use.
NUMBER_OF_VMS : the number of VMs needed for the
cluster.
Make additional updates
If you have multiple reservations, you can update the deployment file to
specify the additional reservations. To do this, see
Scale A3 Mega clusters across multiple reservations .
Provision a Slurm cluster
Cluster Toolkit provisions the cluster based on the deployment file you
created in the previous step and the default cluster blueprint.
To provision the cluster, run the command for your machine type from the
Cluster Toolkit directory. This step takes approximately 30-40 minutes.
./gcluster deploy -d examples/machine-learning/a3-megagpu-8g/a3mega-slurm-deployment.yaml \
examples/machine-learning/a3-megagpu-8g/a3mega-slurm-blueprint.yaml \
--auto-approve
Connect to the A3 Mega Slurm cluster
To enable optimized NCCL communication tuning on your cluster, you must login
to the Slurm login node. To login, you can use either Google Cloud console or
Google Cloud CLI.
Console
Go to the Compute Engine > VM instances page.
Go to VM instances
Locate the login node. It should have a name similar to
CLUSTER_NAME -login-001 .
From the Connect column of the login node, click SSH .
gcloud
To connect to the login node, use the
gcloud compute ssh command .
gcloud compute ssh $(gcloud compute instances list --filter "name ~ login" --format "value(name)") \
--tunnel-through-iap \
--zone ZONE
Run a NCCL test
After you connect to the login node, you can then
Enable GPUDirect-TCPXO optimized NCCL communication .
Redeploy the Cluster
If you need to increase the number of compute nodes or add new partitions to
your cluster, you might need to update configurations for your Slurm cluster by
redeploying. Redeployment can be sped up by using an existing image from a
previous deployment. To avoid creating new images during a redeploy, specify the
--only flag. To redeploy the cluster using an existing image run the following
command from the main Cluster Toolkit directory :
./gcluster deploy -d \
examples/machine-learning/a3-megagpu-8g/a3mega-slurm-deployment.yaml \
examples/machine-learning/a3-megagpu-8g/a3mega-slurm-blueprint.yaml \
--only primary,cluster --auto-approve -w
This command is only for redeployments where an image already exists as it only
redeploys the cluster and its infrastructure.
Destroy the Slurm cluster
By default the A3 Mega blueprints enable deletion protection on the
Filestore instance. For the Filestore instance to be deleted
when destroying the Slurm cluster, learn how to
set or remove deletion protection on an existing instance
to disable deletion protection before running the destroy command.
Disconnect from the cluster if you haven't already.
Before running the destroy command, navigate to the root of the Cluster Toolkit directory. By default, DEPLOYMENT_FOLDER is located at the root of the Cluster Toolkit directory.
To destroy the cluster, run:
./gcluster destroy DEPLOYMENT_FOLDER --auto-approve
Replace DEPLOYMENT_FOLDER with the name of the
deployment folder. It's typically the same as DEPLOYMENT_NAME .
When destruction is complete you should see a message similar to the following:
Destroy complete! Resources: xx destroyed.
To learn how to cleanly destroy infrastructure and for advanced manual
deployment instructions, see the deployment folder located at the root of
the Cluster Toolkit directory: DEPLOYMENT_FOLDER /instructions.txt
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
