---
title: "Quickstart: Create a Deep Learning VM instance by using the gcloud CLI \_\
  |\_ Deep Learning VM Images \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-gcloud
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/deep-learning-vm/docs/images
source_metadata:
  url: https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-gcloud
  title: "Quickstart: Create a Deep Learning VM instance by using the gcloud CLI \_\
    |\_ Deep Learning VM Images \_|\_ Google Cloud Documentation"
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
Stay organized with collections
Save and categorize content based on your preferences.
Create a Deep Learning VM instance by using the gcloud CLI
This page shows you how to create a Deep Learning VM Images instance
by using the Google Cloud CLI.
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
To use the Google Cloud CLI for this quickstart, you must first
install and initialize the Google Cloud CLI :
Download and install the Google Cloud CLI using the instructions given on
Installing Google Cloud CLI .
Initialize the SDK using the instructions given on Initializing Cloud
SDK .
To use gcloud in Cloud Shell for this quickstart, first activate
Cloud Shell using the instructions given on Starting Cloud
Shell .
Create a new instance
These instructions create a Deep Learning VM instance with the
following parameters:
Using a TensorFlow on CUDA 9.2 image :
tf-latest-cu92 .
In the US West1-B zone : us-west1-b .
Named my-new-instance .
Of the instance type n1-standard-8 .
Using an NVIDIA Tesla V100 GPU :
type=nvidia-tesla-v100,count=8 .
With a boot disk of 120 GB.
With an NVIDIA GPU driver set to install on first run:
install-nvidia-driver=True .
Note: For more information about additional VM options available to you, see
Choosing an Image .
At the command line, enter the following:
export IMAGE_FAMILY = "tf-latest-cu92"
export ZONE = "us-west1-b"
export INSTANCE_NAME = "my-new-instance"
export INSTANCE_TYPE = "n1-standard-8"
gcloud compute instances create $ INSTANCE_NAME \
-- zone =$ ZONE \
-- image - family =$ IMAGE_FAMILY \
-- image - project = deeplearning - platform - release \
-- maintenance - policy = TERMINATE \
-- accelerator = "type=nvidia-tesla-v100,count=8" \
-- machine - type =$ INSTANCE_TYPE \
-- boot - disk - size = 120 GB \
-- metadata = "install-nvidia-driver=True"
After some time, the VM instance is created and a summary of its configuration
is shown.
You've just created your first Deep Learning VM instance. To
verify the instance and see its status, use the gcloud
list command as shown here
to list all instances:
gcloud compute instances list
This displays all Compute Engine instances from all zones in the current project.
You can also view and maintain your Deep Learning VM instance on the
Google Cloud console in Compute Engine VM
instances .
To view the status of just this instance:
gcloud compute instances describe $INSTANCE_NAME
Access your new instance
After you've created your Deep Learning VM instance, it starts
automatically. You can access it using SSH using the following command:
gcloud compute ssh $INSTANCE_NAME
Compute Engine will propagate your SSH keys and create your user. For more
information, see Connecting to
Instances .
Stop the instance
Run the following command from your local machine (not on the instance):
gcloud compute instances stop $INSTANCE_NAME
The stop command performs a
clean shutdown.
Start the instance
After the instance is initially created, Compute Engine starts it. To start the
instance manually when it's stopped, run the following command:
gcloud compute instances start $INSTANCE_NAME
The start command starts a
stopped virtual machine instance.
Clean up
To avoid incurring charges to your Google Cloud account for
the resources used on this page, follow these steps.
To delete the Deep Learning VM instance that you created, at the
command line, enter the following command:
gcloud compute instances delete $INSTANCE_NAME
The delete command deletes
Compute Engine instances.
What's next
Read a more in-depth description of this process in Creating a
Deep Learning VM instance From the
CLI .
Learn more about Images, image families, and
instances .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
