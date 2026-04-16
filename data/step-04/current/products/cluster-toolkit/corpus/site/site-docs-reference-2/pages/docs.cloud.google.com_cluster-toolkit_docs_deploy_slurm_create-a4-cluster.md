---
title: "Create an A4 Slurm cluster \_|\_ Cluster Toolkit \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/cluster-toolkit/docs/deploy/slurm/create-a4-cluster
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint
source_metadata:
  url: https://docs.cloud.google.com/cluster-toolkit/docs/deploy/slurm/create-a4-cluster
  title: "Create an A4 Slurm cluster \_|\_ Cluster Toolkit \_|\_ Google Cloud Documentation"
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
Create an A4 Slurm cluster
Stay organized with collections
Save and categorize content based on your preferences.
This document describes how to deploy a Slurm cluster that uses A4
accelerator-optimized machine types by using Cluster Toolkit.
A4 accelerator-optimized machine types have NVIDIA B200 Blackwell GPUs attached
and are ideal for foundation model training and serving.
To learn more about the A4 accelerator-optimized machine types, see the A4
machine type
section in the
Compute Engine documentation.
A4 limitations
The following limitations apply to A4 VMs in your Slurm cluster:
You don't receive sustained
use discounts and
flexible committed use
discounts for instances that use an A4 machine type.
You can only use an A4 machine type in certain regions
and zones .
You can't use Persistent Disk (regional or zonal). You can only use
Google Cloud Hyperdisk .
The A4 machine type is only available on the Emerald Rapids CPU platform .
You can't change the machine type of an instance to or from A4 machine type. You must create a
new instance with this machine type.
A4 machine types don't support
sole-tenancy .
You can't run Windows operating systems on an A4 machine type.
For A4 instances, when you use ethtool -S to monitor GPU networking, physical port
counters that end in _phy don't update. This is expected behavior for instances that use
the MRDMA Virtual Function (VF) architecture.
For more information, see
MRDMA functions and network monitoring tools .
You can't attach Hyperdisk ML disks that were created before February 4, 2026 to A4 machine types.
Before you begin
Before creating a Slurm cluster, if you haven't already done so, complete the following
steps:
Choose a consumption option : your choice of consumption option determines how you get
and use GPU resources.
To learn more, see Choose a consumption option .
Obtain capacity : the process to obtain capacity differs for each consumption option.
To learn about the process to obtain capacity for your chosen consumption option, see
Capacity overview .
Ensure that you have enough Filestore capacity quota : you need to have enough
Filestore quota in your target region before deploying. The required minimum
capacity depends on the machine types in your cluster:
A4 : requires a minimum of 10 TiB
(10,240 GiB) of HIGH_SCALE_SSD (zonal) capacity.
To check quota or request a quota increase, see the following:
To check quota, see View API-specific quota .
If you don't have enough quota,
request a quota increase .
Install Cluster Toolkit : to provision Slurm clusters, you must use
Cluster Toolkit version
v1.62.0 or later.
To install Cluster Toolkit, see
Set up Cluster Toolkit .
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
At the bottom of the Google Cloud console, a
Cloud Shell
session starts and displays a command-line prompt. Cloud Shell is a shell environment
with the Google Cloud CLI
already installed and with values already set for
your current project. It can take a few seconds for the session to initialize.
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
Set up a storage bucket
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
Open the Cluster Toolkit directory
To use Slurm with Google Cloud, you must install
Cluster Toolkit .
After you install Cluster Toolkit, verify that you are in the
Cluster Toolkit directory by running the following command:
cd cluster-toolkit
This cluster deployment requires that you use Cluster Toolkit v1.62.0
or later. To check your version, you can run the following command:
./gcluster --version
Create a deployment file
Create a deployment file that you can use to specify the
Cloud Storage bucket, set names for your network and subnetwork, and set
deployment variables such as project ID, region, and zone.
To create a deployment file, follow the steps for your required machine type
and consumption option.
The parameters that you need to add to your deployment file depend on the
consumption option that
you're using for your deployment. Select the tab that corresponds to your consumption option's
provisioning model.
Reservation-bound
To create your deployment file, use a text editor to create a YAML file named
a4high-slurm-deployment.yaml and add the following content.
Tip: For a more detailed example, copy and paste the contents of
examples/machine-learning/a4-highgpu-8g/a4high-slurm-deployment.yaml
into a file in your workspace and edit it.
terraform_backend_defaults:
type: gcs
configuration:
bucket: BUCKET_NAME
vars:
deployment_name: DEPLOYMENT_NAME
project_id: PROJECT_ID
region: REGION
zone: ZONE
a4h_cluster_size: NUMBER_OF_VMS
a4h_reservation_name: RESERVATION_NAME
Replace the following:
BUCKET_NAME : the name of your Cloud Storage
bucket, which you created in the previous section.
DEPLOYMENT_NAME : a name for your deployment. If
creating multiple clusters, ensure that you select a unique name for each one.
PROJECT_ID : your project ID.
REGION : the region that has the reserved machines.
ZONE : the zone where you want to provision the cluster. If you're using a
reservation-based consumption option, the region and zone information was provided by your
account team when the
capacity was delivered .
NUMBER_OF_VMS : the number of VMs that you want for the
cluster.
RESERVATION_NAME : the name of your
reservation .
Flex-start
To create your deployment file, use a text editor to create a YAML file named
a4high-slurm-deployment.yaml and add the following content.
Tip: For a more detailed example, copy and paste the contents of
examples/machine-learning/a4-highgpu-8g/a4high-slurm-deployment.yaml
into a file in your workspace and edit it.
terraform_backend_defaults:
type: gcs
configuration:
bucket: BUCKET_NAME
vars:
deployment_name: DEPLOYMENT_NAME
project_id: PROJECT_ID
region: REGION
zone: ZONE
a4h_cluster_size: NUMBER_OF_VMS
a4h_dws_flex_enabled: true
Replace the following:
BUCKET_NAME : the name of your Cloud Storage
bucket, which you created in the previous section.
DEPLOYMENT_NAME : a name for your deployment. If
creating multiple clusters, ensure that you select a unique name for each one.
PROJECT_ID : your project ID.
REGION : the region where you want to provision your cluster.
ZONE : the zone where you want to provision
your cluster.
NUMBER_OF_VMS : the number of VMs that you want for the
cluster.
This deployment provisions static compute nodes ,
which means that the cluster has a set number of nodes at all times. If you want to enable your
cluster to autoscale instead, use examples/machine-learning/a4-highgpu-8g/a4high-slurm-blueprint.yaml file and edit the values of
node_count_static and node_count_dynamic_max to match the following:
node_count_static: 0
node_count_dynamic_max: $(vars.a4h_cluster_size)
Spot
To create your deployment file, use a text editor to create a YAML file named
a4high-slurm-deployment.yaml and add the following content.
Tip: For a more detailed example, copy and paste the contents of
examples/machine-learning/a4-highgpu-8g/a4high-slurm-deployment.yaml
into a file in your workspace and edit it.
terraform_backend_defaults:
type: gcs
configuration:
bucket: BUCKET_NAME
vars:
deployment_name: DEPLOYMENT_NAME
project_id: PROJECT_ID
region: REGION
zone: ZONE
a4h_cluster_size: NUMBER_OF_VMS
a4h_enable_spot_vm: true
Replace the following:
BUCKET_NAME : the name of your Cloud Storage
bucket, which you created in the previous section.
DEPLOYMENT_NAME : a name for your deployment. If
creating multiple clusters, ensure that you select a unique name for each one.
PROJECT_ID : your project ID.
REGION : the region where you want to provision your cluster.
ZONE : the zone where you want to provision
your cluster.
NUMBER_OF_VMS : the number of VMs that you want for the
cluster.
Provision a Slurm cluster
Cluster Toolkit provisions the cluster based on the deployment file you
created in the previous step and the default cluster blueprint. For more
information about the software that the blueprint installs, including
NVIDIA drivers and CUDA,
learn more about Slurm custom images .
To provision the cluster, run the ./gcluster deploy command for your machine
type from the
Cluster Toolkit directory. This step takes approximately 20-30 minutes.
./gcluster deploy -d a4high-slurm-deployment.yaml examples/machine-learning/a4-highgpu-8g/a4high-slurm-blueprint.yaml
Connect to the Slurm cluster
To access your cluster, you must sign in to the Slurm login node. To sign in, you
can use either Google Cloud console or Google Cloud CLI.
Console
Go to the Compute Engine > VM instances page.
Go to the VM instances page
Locate the login node. The node has a name with the pattern
DEPLOYMENT_NAME + login-001 .
From the Connect column of the login node, click SSH .
gcloud
To connect to the login node, complete the following steps:
Identify the login node by using the
gcloud compute instances list command .
gcloud compute instances list \
--zones= ZONE \
--filter="name ~ login" --format "value(name)"
If the output lists multiple Slurm clusters, you can identify your login
node by the DEPLOYMENT_NAME that you specified.
Use the gcloud compute ssh command
to connect to the login node.
gcloud compute ssh LOGIN_NODE \
--zone= ZONE --tunnel-through-iap
Replace the following:
ZONE : the zone where the VMs for your cluster
are located.
LOGIN_NODE : the name of the login node, which
you identified in the previous step.
Test network performance on the Slurm cluster
We recommend that you validate the functionality of provisioned clusters. To
do so, use NCCL tests , which are
NVIDIA Collective Communications Library (NCCL)
tests that are optimized for the Google
environment.
Redeploy the Slurm cluster
If you need to increase the number of compute nodes or add new partitions to
your cluster, you might need to update configurations for your Slurm cluster by
redeploying. You can speed up redeployment by using an existing image from a
previous deployment. To avoid creating new images during a redeploy, specify the
--only flag.
To redeploy the cluster using an existing image do the following:
Connect to the cluster. For instructions, see Connect to the Slurm cluster .
Use the ./gcluster deploy command for your required machine type:
./gcluster deploy -d a4high-slurm-deployment.yaml examples/machine-learning/a4-highgpu-8g/a4high-slurm-blueprint.yaml --only cluster-env,cluster -w
This command is only for redeployments where an image already exists, it only
redeploys the cluster and its infrastructure.
Destroy the Slurm cluster
By default, the A4X, A4, and A3 Ultra blueprints turn on deletion protection on
the Filestore instance. To delete the Filestore instance when
you destroy the Slurm cluster, you must turn off deletion protection before you
use the destroy command.
For instructions, see set or remove deletion protection on an existing
instance .
If you are connected to the cluster, then disconnect from it.
Before you use the destroy command, navigate to the root of the
Cluster Toolkit directory. By default, DEPLOYMENT_FOLDER
is located at the root of the Cluster Toolkit directory.
To destroy the cluster, use the ./gcluster destroy command:
./gcluster destroy DEPLOYMENT_FOLDER
Replace the following:
DEPLOYMENT_FOLDER : the name of the deployment folder. It's typically the same as DEPLOYMENT_NAME .
When the destruction completes, the output is similar to the following:
Destroy complete! Resources: xx destroyed.
To learn how to cleanly destroy infrastructure and for advanced manual
deployment instructions, see the deployment folder located at the root of
the Cluster Toolkit directory: DEPLOYMENT_FOLDER /instructions.txt
What's next
Verify reservation consumption
View the topology of a compute instance
Learn how to manage host events:
Manage host events across VMs
Manage host events across reservations
Monitor VMs in your Slurm cluster
Test and optimize with NCCL/gIB
Report faulty host
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
