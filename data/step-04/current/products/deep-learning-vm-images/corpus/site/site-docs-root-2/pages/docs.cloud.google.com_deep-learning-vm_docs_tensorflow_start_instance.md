---
title: "Create a TensorFlow Deep Learning VM instance \_|\_ Deep Learning VM Images\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/deep-learning-vm/docs/tensorflow_start_instance
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/deep-learning-vm/docs/introduction
source_metadata:
  url: https://docs.cloud.google.com/deep-learning-vm/docs/tensorflow_start_instance
  title: "Create a TensorFlow Deep Learning VM instance \_|\_ Deep Learning VM Images\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Compute Engine
Deep Learning VM Images
Guides
Send feedback
Create a TensorFlow Deep Learning VM instance
Stay organized with collections
Save and categorize content based on your preferences.
This page shows you how to create
a TensorFlow Deep Learning VM Images instance
with TensorFlow and other tools pre-installed. You can create
a TensorFlow instance from Cloud Marketplace within
the Google Cloud console or using the command line.
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
If you are using GPUs with your Deep Learning VM, check the
quotas page
to ensure that you have
enough GPUs available in your project. If GPUs are not listed on the quotas
page or you require additional GPU quota,
request a
quota increase .
Creating a TensorFlow Deep Learning VM instance from the Cloud Marketplace
To create a TensorFlow Deep Learning VM instance
from the Cloud Marketplace, complete the following steps:
Go to the Deep Learning VM Cloud Marketplace page in
the Google Cloud console.
Go to the Deep Learning VM Cloud Marketplace page
Click Get started .
Enter a Deployment name , which will be the root of your VM name.
Compute Engine appends -vm to this name when naming your instance.
Select a Zone .
Under Machine type , select the specifications that you
want for your VM.
Learn more about machine types.
Under GPUs , select the GPU type and Number of GPUs .
If you don't want to use GPUs,
click the Delete GPU button
and skip to step 7. Learn more about GPUs.
Select a GPU type .
Not all GPU types are available in all zones.
Find a combination that is supported.
Select the Number of GPUs .
Each GPU supports different numbers of GPUs.
Find a combination that is supported.
Under Framework , select one of the TensorFlow
framework versions.
If you're using GPUs, an NVIDIA driver is required.
You can install the driver
yourself, or select Install NVIDIA GPU driver automatically
on first startup .
You have the option to select Enable access to JupyterLab via URL
instead of SSH (Beta) . Enabling this Beta feature lets you
access your JupyterLab
instance using a URL. Anyone who is in the Editor or Owner role in your
Google Cloud project can access this URL.
Currently, this feature only works in
the United States, the European Union, and Asia.
Select a boot disk type and boot disk size.
Select the networking settings that you want.
Click Deploy .
If you choose to install NVIDIA drivers, allow 3-5 minutes for installation
to complete.
After the VM is deployed, the page updates with instructions for
accessing the instance.
Creating a TensorFlow Deep Learning VM instance from the command line
To use the Google Cloud CLI to create
a new Deep Learning VM instance,
you must first install and initialize the Google Cloud CLI :
Download and install the Google Cloud CLI using the instructions given on
Installing Google Cloud CLI .
Initialize the SDK using the instructions given on Initializing Cloud
SDK .
To use gcloud in Cloud Shell, first activate Cloud Shell using the
instructions given on Starting Cloud Shell .
You can create a TensorFlow instance with or without GPUs.
Without GPUs
To provision a Deep Learning VM instance without a GPU:
export IMAGE_FAMILY = "tf-ent-latest-cpu"
export ZONE = "us-west1-b"
export INSTANCE_NAME = "my-instance"
gcloud compute instances create $ INSTANCE_NAME \
-- zone =$ ZONE \
-- image - family =$ IMAGE_FAMILY \
-- image - project = deeplearning - platform - release
Options:
--image-family must be one of the following:
tf-ent-latest-cpu to get the
latest TensorFlow Enterprise 2 image
An earlier TensorFlow or TensorFlow Enterprise image
family name (see
Choosing an image )
--image-project must be deeplearning-platform-release .
With one or more GPUs
Compute Engine offers the option of adding one or more
GPUs to your virtual machine instances. GPUs offer faster processing
for many complex data and machine learning tasks. To learn more about
GPUs, see GPUs on Compute Engine .
To provision a Deep Learning VM instance with one or more GPUs:
export IMAGE_FAMILY = "tf-ent-latest-gpu"
export ZONE = "us-west1-b"
export INSTANCE_NAME = "my-instance"
gcloud compute instances create $ INSTANCE_NAME \
-- zone =$ ZONE \
-- image - family =$ IMAGE_FAMILY \
-- image - project = deeplearning - platform - release \
-- maintenance - policy = TERMINATE \
-- accelerator = "type=nvidia-tesla-v100,count=1" \
-- metadata = "install-nvidia-driver=True"
Options:
--image-family must be one of the following:
tf-ent-latest-gpu to get the
latest TensorFlow Enterprise 2 image
An earlier TensorFlow or TensorFlow Enterprise image
family name (see
Choosing an image )
--image-project must be deeplearning-platform-release .
--maintenance-policy must be TERMINATE . To learn more, see
GPU Restrictions .
--accelerator specifies the GPU type to use. Must be
specified in the format
--accelerator="type= TYPE ,count= COUNT " .
For example, --accelerator="type=nvidia-tesla-p100,count=2" .
See the GPU models
table
for a list of available GPU types and counts.
Not all GPU types are supported in all regions. For details, see
GPU regions and zones availability .
--metadata is used to specify that the NVIDIA driver should
be installed on your behalf. The value is install-nvidia-driver=True .
If specified, Compute Engine loads the latest stable
driver on the first boot and performs the necessary steps (including
a final reboot to activate the driver).
If you've elected to install NVIDIA drivers, allow 3-5 minutes
for installation to complete.
It may take up to 5 minutes before your VM is fully provisioned. In this
time, you will be unable to SSH into your machine. When the installation is
complete, to guarantee that the driver installation was successful, you can
SSH in and run nvidia-smi .
When you've configured your image, you can save a snapshot of your
image so that you can start derivitave instances without having to wait
for the driver installation.
About TensorFlow Enterprise
TensorFlow Enterprise is a
distribution of
TensorFlow
that has been optimized to run on Google Cloud and includes
Long Term Version
Support .
Creating a preemptible instance
You can create a preemptible Deep Learning VM instance. A preemptible
instance is an instance you can create and run at a much lower price than
normal instances. However, Compute Engine might stop (preempt) these
instances if it requires access to those resources for other tasks.
Preemptible instances always stop after 24 hours. To learn more about
preemptible instances, see Preemptible VM
Instances .
To create a preemptible Deep Learning VM instance:
Follow the instructions located above to create a new instance using the
command line. To the gcloud compute instances create command, append the
following:
--preemptible
What's next
For instructions on connecting to your new Deep Learning VM instance
through the Google Cloud console or command line, see Connecting to
Instances . Your instance name
is the Deployment name you specified with -vm appended.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
