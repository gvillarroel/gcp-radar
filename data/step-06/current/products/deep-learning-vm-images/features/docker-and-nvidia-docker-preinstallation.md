---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:52:27.320Z"
product_name: "Deep Learning VM Images"
product_slug: "deep-learning-vm-images"
feature_name: "Docker and NVIDIA Docker preinstallation"
feature_slug: "docker-and-nvidia-docker-preinstallation"
latest_feature_date: "2018-08-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deep-learning-vm/docs/concepts-images"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/images"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-console"
keywords:
  - "docker"
  - "nvidia"
  - "preinstallation"
  - "deep"
  - "learning"
  - "vm"
  - "images"
  - "come"
---

# Docker and NVIDIA Docker preinstallation

Product: Deep Learning VM Images
Coverage: MEDIUM

## Step 02 Summary

Deep Learning VM Images come with Docker or NVIDIA Docker pre-installed depending on the image type.

## Extended Definition

Deep Learning VM Images come with Docker or NVIDIA Docker pre-installed depending on the image type.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deep-learning-vm/docs/concepts-images](https://docs.cloud.google.com/deep-learning-vm/docs/concepts-images)
- [https://docs.cloud.google.com/deep-learning-vm/docs/images](https://docs.cloud.google.com/deep-learning-vm/docs/images)
- [https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-console](https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-console)

## Supporting Pages

### "Images, image families, and instances \_|\_ Deep Learning VM Images \_|\_\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/concepts-images](https://docs.cloud.google.com/deep-learning-vm/docs/concepts-images)
- Source ID: `site-docs-reference`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Images, image families, and instances Stay organized with collections Save and categorize content based on your preferences.
- The Deep Learning VM images take the hassle out of setting up an environment for training deep learning models by preconfiguring dependencies, preinstalling essential tools, and optimizing performance.
- Deep Learning VM Images is a set of prepackaged virtual machine images with a deep learning framework that are ready to be run out of the box.
- The Deep Learning VM images are preconfigured public Compute Engine virtual machine images .

### "Quickstart: Create a Deep Learning VM instance by using the Google Cloud\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-console](https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-console)
- Source ID: `site-docs-reference`
- Final score: 50
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a Deep Learning VM instance by using the Google Cloud console This page shows you how to create a Deep Learning VM Images instance by using Google Cloud Marketplace in the Google Cloud console.
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- After the instance is deployed, the Google Cloud console opens the Deployment Manager page where you can manage your Deep Learning VM instances and other deployments.
- What's next Read a more in-depth description of this process in Creating a Deep Learning VM instance from Google Cloud Marketplace .

### Choose an image \_|\_ Deep Learning VM Images \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/images](https://docs.cloud.google.com/deep-learning-vm/docs/images)
- Source ID: `site-docs-reference`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- To create a Deep Learning VM instance that uses a deprecated image, see the following example gcloud CLI command: gcloud compute instances create deprecated-tf-vm \ --image = projects/deeplearning-platform-release/global/images/ IMAGE NAME \ --machine-type = n1-standard-4 \ --zone = us-east1-c Replace IMAGE NAME with the name of the image, as follows: To use a specific image in the image family, use the image name, for example: pytorch-2-9-cu129-ubuntu-2204-nvidia-580-v20260416 .
- List all available versions using gcloud CLI You can also list all available Deep Learning VM images using the following gcloud CLI command: gcloud compute images list \ --project deeplearning-platform-release \ --format="value(NAME)" \ --no-standard-images Note: The output of this command includes some image family framework types that aren't mentioned in the previous table of family names .
- Framework Processor Image family name(s) Base GPU common-cu129-ubuntu-2404-nvidia-580 common-cu129-ubuntu-2204-nvidia-580 PyTorch GPU pytorch-2-9-cu129-ubuntu-2404-nvidia-580 pytorch-2-9-cu129-ubuntu-2204-nvidia-580 Choosing an operating system Ubuntu 22.04 and 24.04 are supported OS versions, and the images come with the NVIDIA driver version 580.
- Replace IMAGE FAMILY with the image family name for which you want to find out the latest version number. gcloud compute images describe-from-family IMAGE FAMILY \ --project deeplearning-platform-release Look for the name field in the output and use the image name given there when creating new instances.

