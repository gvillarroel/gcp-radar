---
title: "Training Resnet50 on Cloud TPU with PyTorch \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/tpu/docs/tutorials
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/tpu/docs
source_metadata:
  url: https://docs.cloud.google.com/tpu/docs/tutorials
  title: "Training Resnet50 on Cloud TPU with PyTorch \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Cloud TPU
Guides
Send feedback
Training Resnet50 on Cloud TPU with PyTorch
Stay organized with collections
Save and categorize content based on your preferences.
Note: This page applies to the Cloud TPU API. For Ironwood (TPU7x), you must use
Google Kubernetes Engine (GKE). For more information, see
About TPUs in GKE .
This tutorial shows you how to train the ResNet-50 model
on a Cloud TPU device with PyTorch. You can apply the same pattern to
other TPU-optimised image classification models that use PyTorch and the
ImageNet dataset.
The model in this tutorial is based on Deep Residual Learning for Image
Recognition , which first introduces
the residual network (ResNet) architecture. The tutorial uses the 50-layer
variant, ResNet-50, and demonstrates training the model using
PyTorch/XLA .
Warning: This tutorial uses a third-party dataset. Google provides no
representation, warranty, or other guarantees about the validity, or any other
aspects of this dataset.
Objectives
Prepare the dataset.
Run the training job.
Verify the output results.
Costs
In this document, you use the following billable components of Google Cloud:
Compute Engine
Cloud TPU
To generate a cost estimate based on your projected usage,
use the pricing calculator .
New Google Cloud users might be eligible for a free trial .
Before you begin
Before starting this tutorial, check that your Google Cloud project is correctly
set up.
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
This walkthrough uses billable components of Google Cloud. Check the
Cloud TPU pricing page to
estimate your costs. Be sure to clean up resources you created when you've
finished with them to avoid unnecessary charges.
Create a TPU VM
Open a Cloud Shell window.
Open Cloud Shell
Create a TPU VM
gcloud compute tpus tpu-vm create your-tpu-name \
--accelerator-type = v5litepod-8 \
--version = tpu-ubuntu2204-base \
--zone = us-central1-a \
--project = your-project
Note: The first time you run a command in a new Cloud Shell VM, an
Authorize Cloud Shell page is displayed. Click Authorize at the bottom
of the page to allow gcloud to make Google Cloud API calls with your
credentials.
Connect to your TPU VM using SSH:
gcloud compute tpus tpu-vm ssh your-tpu-name --zone = us-central1-a
Install PyTorch/XLA on your TPU VM:
( vm ) $ pip install torch torch_xla [ tpu ] torchvision -f https://storage.googleapis.com/libtpu-releases/index.html -f https://storage.googleapis.com/libtpu-wheels/index.html
Clone the PyTorch/XLA GitHub repo
( vm ) $ git clone --depth = 1 https://github.com/pytorch/xla.git
Run the training script with fake data
( vm ) $ PJRT_DEVICE = TPU python3 xla/test/test_train_mp_imagenet.py --fake_data --batch_size = 256 --num_epochs = 1
Clean up
To avoid incurring charges to your Google Cloud account for the resources used in this
tutorial, either delete the project that contains the resources, or keep the project and
delete the individual resources.
Disconnect from the TPU VM:
( vm ) $ exit
Your prompt should now be username@projectname , showing you
are in the Cloud Shell.
Delete your TPU VM.
$ gcloud compute tpus tpu-vm delete your-tpu-name \
--zone = us-central1-a
What's next
Training diffusion models with Pytorch
Troubleshooting Pytorch on TPUs
Pytorch/XLA documentation
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
