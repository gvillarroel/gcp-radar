---
title: "Create an AI-optimized Slurm cluster with A4 VMs \_|\_ Cluster Toolkit \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-with-a4
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/cluster-toolkit/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/cluster-toolkit/docs/quickstarts/create-a-slurm-cluster-with-a4
  title: "Create an AI-optimized Slurm cluster with A4 VMs \_|\_ Cluster Toolkit \_\
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
Stay organized with collections
Save and categorize content based on your preferences.
Create an AI-optimized Slurm cluster with A4 VMs
This page describes how to quickly create and deploy an AI-optimized
Slurm cluster using A4
accelerator-optimized machine types with the gcloud CLI and
Cluster Toolkit .
A4 accelerator-optimized machine types come with NVIDIA B200 GPUs attached and
are specifically engineered for intensive AI computation to help your Slurm
cluster efficiently handle large-scale model training and inference. For more
information on A4 accelerator-optimized machine types on Google Cloud, see
GPU machine types .
Important: To complete this tutorial, you must first contact your Google
Technical Account Manager (TAM) to reserve a capacity block for the A4 machine
type . Once approved, this capacity is
added to your Google Cloud project. The capacity approval process can take
several days.
Additionally, running this tutorial can incur costs to your Google Cloud
project .
Alternatively, you can use Cluster Director to create an A4-based Slurm
cluster. Cluster Director is a managed service that
simplifies and automates cluster deployment, reducing operational overhead. For
more information, see
Create an AI-optimized cluster based on a template .
To follow step-by-step guidance for this task directly in the
Google Cloud console, click Guide me :
Guide me
Tutorial overview
This tutorial describes the steps to set up an AI-optimized Slurm cluster using
A4 accelerator-optimized machine types. Specifically, you set up a cluster with
Compute Engine virtual machines, create a Cloud Storage bucket to store the
necessary Terraform modules, and set up a Filestore instance to
provision your Slurm cluster. To complete the steps in this tutorial, you follow
this process:
Set up your Google Cloud project with the required permissions and
environmental variables.
Set up a Cloud Storage bucket.
Set up Cluster Toolkit.
Switch to the Cluster Toolkit directory.
Create a Slurm deployment YAML file.
Provision a Slurm cluster using a blueprint.
Connect to the Slurm cluster.
Before you begin
Reserve a capacity block for one
a4-highgpu-8g machine. These machines are required for this tutorial.
Ensure that you have enough Filestore quota to provision the
Slurm cluster. You need a minimum of 10,240 GiB of zonal capacity
(also known as high scale SSD capacity).
To check your Filestore quota, view Quotas & System
limits
in the Google Cloud console and filter the table to only show Filestore
resources.
For detailed instructions on checking Filestore quotas,
see View API-specific quota .
If you don't have enough quota, request a quota
increase .
Make sure that billing is enabled for your Google Cloud project .
Enable the Compute Engine, Filestore,
Cloud Storage, Service Usage, and Cloud Resource Manager API:
Enable the APIs
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
Costs
The cost of running this tutorial varies by each section you complete, such as
setting up the tutorial or running jobs. You can calculate the cost by using the
pricing calculator .
To estimate the cost for setting up this tutorial, use the following
specifications:
Filestore (standard) capacity per region: 10,240 GiB.
Standard persistent disk: 50 GB pd-standard for the Slurm
login node.
Performance (SSD) persistent disks: 50 GB pd-ssd for the Slurm
controller.
VM instance : 1 a4-highgpu-8g .
Launch Cloud Shell
In this tutorial, you use Cloud Shell which is a shell
environment for managing resources hosted on Google Cloud.
Important: If you use Cloud Shell
, the
Cluster Toolkit dependencies are already pre-installed. If you are
using an alternative to
Cloud Shell, such as using a workstation that is running Linux or
macOS, you must follow the instructions in Install
dependencies .
Cloud Shell comes preinstalled with the Google Cloud CLI . gcloud CLI provides the primary command-line
interface for Google Cloud.
Launch Cloud Shell:
Go to the Google Cloud console.
Google Cloud console
From the upper-right corner of the console, click the
Activate Cloud Shell button:
A Cloud Shell session starts and displays a command-line prompt.
You use this shell to run gcloud and Cluster Toolkit commands.
Note: You need enough Cloud Shell storage to run this tutorial successfully.
We recommend checking if you have enough space available to run the tutorial and
if not, you can also reset Cloud Shell
to a clean slate. For more information, see Reset
Cloud Shell .
Set environment variables
In Cloud Shell, set the following environment variables to use for the
remainder of the tutorial. These environment variables set placeholder values
for the following tasks:
Configures your project with the relevant values to access your reserved
a4-highgpu-8g machine.
Sets up a Cloud Storage bucket to store Cluster Toolkit
modules.
Reservation capacity variables
Note: These values must match the reserved capacity block details provided by
your Technical Account Manager (TAM) when the
capacity was delivered .
export A4_RESERVATION_PROJECT_ID= A4_RESERVATION_PROJECT_ID
export A4_RESERVATION_NAME= A4_RESERVATION_NAME
export A4_DEPLOYMENT_NAME= A4_DEPLOYMENT_NAME
export A4_REGION= A4_REGION
export A4_ZONE= A4_ZONE
export A4_DEPLOYMENT_FILE_NAME= A4_DEPLOYMENT_FILE_NAME
Replace the following:
A4_RESERVATION_PROJECT_ID : the Google Cloud
project ID that was granted the A4 machine type reservation block.
A4_RESERVATION_NAME : the name of the GPU reservation
that's used in your project. For example, a4high-exr .
A4_DEPLOYMENT_NAME : a unique name for your Slurm
cluster deployment. For example, my-slurm-cluster-deployment .
A4_REGION : the region that is running the reserved A4
machine reservation block. For example, us-central1 .
A4_ZONE : the zone that contains the reserved machines.
This string must contain both the region and zone. For example,
us-central1-a .
A4_DEPLOYMENT_FILE_NAME : a unique name for your Slurm
blueprint YAML file. If you run through this tutorial more than once, choose a
unique deployment name each time.
Storage capacity variables
Create the environment variables for your Cloud Storage bucket.
Cluster Toolkit uses blueprints to define and deploy clusters of
VMs. A blueprint defines one or more Terraform modules to provision Cloud
infrastructure. This bucket is used to store these blueprints.
export GOOGLE_CLOUD_BUCKET_NAME= GOOGLE_CLOUD_BUCKET_NAME
export GOOGLE_CLOUD_BUCKET_LOCATION= GOOGLE_CLOUD_BUCKET_LOCATION
Replace the following:
GOOGLE_CLOUD_BUCKET_NAME : the name that you want to
use for your Cloud Storage bucket that meets the bucket naming
requirements .
GOOGLE_CLOUD_BUCKET_LOCATION : the Google Cloud
region in which to
create your Cloud Storage bucket, such as us-central1 .
Switch to your A4-approved project
Run the following command to ensure that you are in the Google Cloud
project that has the approved reservation block for the A4 machine type.
gcloud config set project ${A4_RESERVATION_PROJECT_ID}
Create a Cloud Storage bucket
Create the bucket to store your Terraform modules. From Cloud Shell,
using your environment variables, run the following command:
A best practice when working with Terraform is to store the
state remotely
in a version-enabled file. On Google Cloud, you can create a
Cloud Storage bucket that has versioning enabled.
gcloud storage buckets create gs://${GOOGLE_CLOUD_BUCKET_NAME} \
--project=${A4_RESERVATION_PROJECT_ID} \
--default-storage-class=STANDARD \
--location=${GOOGLE_CLOUD_BUCKET_LOCATION} \
--uniform-bucket-level-access
gcloud storage buckets update gs://${GOOGLE_CLOUD_BUCKET_NAME} --versioning
Set up the Cluster Toolkit
To create a Slurm cluster in a Google Cloud project, you can use
Cluster Toolkit to handle deploying
and provisioning the cluster. Cluster Toolkit is open-source software
offered by Google Cloud
to simplify the process of deploying workloads on Google Cloud.
Use the following steps to set up Cluster Toolkit.
Install Cluster Toolkit
To install Cluster Toolkit, download the prebuilt binary bundle by
completing the following steps:
In Cloud Shell, set the Cluster Toolkit version tag:
export TAG= LATEST_VERSION_TAG
Replace LATEST_VERSION_TAG with the tag for the
latest Cluster Toolkit release ,
such as v1.82.0 .
Download the gcluster_bundle_linux.zip file by using the curl command:
curl -LO https://github.com/GoogleCloudPlatform/cluster-toolkit/releases/download/${TAG}/gcluster_bundle_linux.zip
Extract the bundle files to a new gcluster-bundle directory:
unzip gcluster_bundle_linux.zip -d gcluster-bundle
Go to the gcluster-bundle directory:
cd gcluster-bundle
Make the binary gcluster file:
chmod +x gcluster
To verify the installation, run the following command:
./gcluster --version
After installing the binary, you are now ready to deploy clusters to run your
jobs or workloads.
Create a deployment file
In the Cluster Toolkit directory, create your Slurm
deployment YAML file.
nano ${A4_DEPLOYMENT_FILE_NAME}.yaml
Paste the following content into the YAML file.
---
terraform_backend_defaults:
type: gcs
configuration:
bucket: GOOGLE_CLOUD_BUCKET_NAME
vars:
deployment_name: A4_DEPLOYMENT_FILE_NAME
project_id: A4_RESERVATION_PROJECT_ID
region: A4_REGION
zone: A4_ZONE
a4h_reservation_name: A4_RESERVATION_NAME
a4h_cluster_size: 1
To save and exit the file, press Ctrl+O > Enter > Ctrl+X .
Provision the Slurm cluster
To provision the Slurm cluster, run the following deployment command. This
command provisions the Slurm cluster with the examples/machine-learning/a4-highgpu-8g/a4high-slurm-blueprint.yaml blueprint file.
Note: Provisioning the cluster can take up to an hour.
Cloud Shell has an inactivity timeout that stops shells from running
any processes after 40 minutes. If a timeout occurs, a dialog appears that asks
if you want to reauthorize your session. To continue the deployment after a
timeout, click Reauthorize .
In Cloud Shell, start the cluster creation.
./gcluster deploy -d ${A4_DEPLOYMENT_FILE_NAME}.yaml examples/machine-learning/a4-highgpu-8g/a4high-slurm-blueprint.yaml --auto-approve
Connect to the cluster
After deploying, connect to the Google Cloud console to view your cluster.
Go to the Compute Engine > VM instances page in the
Google Cloud console.
Go to VM instances
Locate the login node ( a4high-login-001 or similar).
Click SSH to connect.
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
Destroy the Slurm cluster
We recommend that you clean up your resources when they are no longer needed.
By default, the A4 High blueprints enable deletion protection on the
Filestore instance. When destroying the Slurm cluster, you must disable
deletion protection before running the destroy command.
Disable deletion protection
To disable deletion protection when you update an instance, use a command
similar to the following:
gcloud filestore instances update INSTANCE_NAME \
--no-deletion-protection
Replace INSTANCE_NAME with the name of the instance you
want to edit. For example, my-genomics-instance .
To find the INSTANCE_NAME , you can run gcloud filestore instances
list . This command lists all the Filestore instances in your
current Google Cloud project, including their names, locations (zones),
tiers, capacity, and status.
After running the command, find the Filestore instance that
matches the a4-highgpu-8g machine that's running in this tutorial.
Destroy the Slurm cluster
Before running the destroy command, navigate to the root of the
Cluster Toolkit directory. By default, DEPLOYMENT_FOLDER
is located at the root of the Cluster Toolkit directory.
To destroy the cluster, run:
./gcluster destroy DEPLOYMENT_FOLDER --auto-approve
Replace DEPLOYMENT_FOLDER with the name of the
deployment folder. It's typically the same as
DEPLOYMENT_NAME .
When destruction is complete, you see a message similar to the following:
Destroy complete! Resources: xx destroyed.
Delete the storage bucket
Delete the Cloud Storage bucket after you make sure that the
previous command ended without errors:
gcloud storage buckets delete gs://${GOOGLE_CLOUD_BUCKET_NAME}
Troubleshooting
Error : Cloud Shell can't provision the cluster because there is
no storage left.
You might see this error if you are a frequent user of Cloud Shell
and you have run out of storage space.
To resolve this issue, see Disable or reset
Cloud Shell .
Error : Cluster or blueprint name already exists.
You might see this error if you are using a project that has already used
the exact file names used in this tutorial. For example, if someone else in
your organization ran through this tutorial end-to-end.
To resolve this issue, run through the tutorial again and choose a unique
name for the deployment file and then rerun the
provision the Slurm cluster command with the new
deployment file.
What's next
Advanced Slurm tasks:
Learn how to Redeploy the Slurm cluster
Learn how to Test network performance on the Slurm cluster
Learn how to manage host events:
Manage host events across compute instances
Manage host events across reservations
View the topology of a compute instance
Monitor compute instances in your Slurm cluster
Report a faulty host
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
