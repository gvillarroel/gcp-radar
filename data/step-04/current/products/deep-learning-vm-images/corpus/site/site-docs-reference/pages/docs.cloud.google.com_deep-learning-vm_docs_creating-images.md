---
title: "Create a new image from an existing Deep Learning VM instance \_|\_ Deep Learning\
  \ VM Images \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/deep-learning-vm/docs/creating-images
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/deep-learning-vm/docs/concepts-images
source_metadata:
  url: https://docs.cloud.google.com/deep-learning-vm/docs/creating-images
  title: "Create a new image from an existing Deep Learning VM instance \_|\_ Deep\
    \ Learning VM Images \_|\_ Google Cloud Documentation"
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
Create a new image from an existing Deep Learning VM instance
Stay organized with collections
Save and categorize content based on your preferences.
Installing NVIDIA drivers on a new VM instance can be
time consuming, especially if you are creating numerous images. One way to
prevent this is to create your own image that is based on one of the
Deep Learning VM images, but that already has the NVIDIA drivers
preinstalled.
This topic describes how to create a new image based on an existing
Deep Learning VM image.
Create a new instance
First, follow the instructions in one of the following topics to create a new
instance. Be sure to include at least one GPU in your new instance.
Creating a TensorFlow Deep Learning VM
Instance
Creating a PyTorch Deep Learning VM
Instance
Creating a Deep Learning VM Instance from the Command
Line
Creating a Deep Learning VM Instance from the Cloud
Marketplace
Verify NVIDIA driver install
Once the instance has booted, verify that the NVIDIA driver has been
installed:
SSH to your image:
gcloud compute ssh " DEPLOYMENT_NAME "
Run the following command:
nvidia-smi
If the drivers have been installed, you can continue.
Stop the instance
Stop the instance by running the following command:
gcloud compute instances stop " DEPLOYMENT_NAME "
Create your own image
Now you create your own image based on the stopped instance. Run the following
at the command line, giving the new image a name and a family name:
gcloud compute images create " NEW_IMAGE_NAME " \
--source-disk DEPLOYMENT_NAME \
--source-disk-zone ZONE \
--family NEW_FAMILY_NAME
Once the command is finished running, you have a new image with NVIDIA drivers
preinstalled that you can use to create new Deep Learning VM instances.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
