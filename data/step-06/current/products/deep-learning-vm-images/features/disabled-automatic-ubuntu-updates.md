---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:52:27.228Z"
product_name: "Deep Learning VM Images"
product_slug: "deep-learning-vm-images"
feature_name: "Disabled automatic Ubuntu updates"
feature_slug: "disabled-automatic-ubuntu-updates"
latest_feature_date: "2021-06-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deep-learning-vm/docs/introduction"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/images"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/cloud-marketplace"
keywords:
  - "disabled"
  - "automatic"
  - "ubuntu"
  - "updates"
  - "based"
  - "deep"
  - "learning"
  - "vm"
---

# Disabled automatic Ubuntu updates

Product: Deep Learning VM Images
Coverage: MEDIUM

## Step 02 Summary

Ubuntu-based Deep Learning VM Images disable automatic operating system updates.

## Extended Definition

Ubuntu-based Deep Learning VM Images disable automatic operating system updates.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deep-learning-vm/docs/introduction](https://docs.cloud.google.com/deep-learning-vm/docs/introduction)
- [https://docs.cloud.google.com/deep-learning-vm/docs/images](https://docs.cloud.google.com/deep-learning-vm/docs/images)
- [https://docs.cloud.google.com/deep-learning-vm/docs/cloud-marketplace](https://docs.cloud.google.com/deep-learning-vm/docs/cloud-marketplace)

## Supporting Pages

### Choose an image \_|\_ Deep Learning VM Images \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/images](https://docs.cloud.google.com/deep-learning-vm/docs/images)
- Source ID: `site-docs-reference`
- Final score: 55
- Re-rank relevance: N/A

Evidence snippets:
- To create a Deep Learning VM instance that uses a deprecated image, see the following example gcloud CLI command: gcloud compute instances create deprecated-tf-vm \ --image = projects/deeplearning-platform-release/global/images/ IMAGE NAME \ --machine-type = n1-standard-4 \ --zone = us-east1-c Replace IMAGE NAME with the name of the image, as follows: To use a specific image in the image family, use the image name, for example: pytorch-2-9-cu129-ubuntu-2204-nvidia-580-v20260416 .
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Choose an image Stay organized with collections Save and categorize content based on your preferences.
- Supported framework versions Deep Learning VM supports each framework version based on a schedule to minimize security vulnerabilities.
- Deciding on an image family Choose a Deep Learning VM image family based on the framework and processor that you need.

### "Introduction to Deep Learning VM \_|\_ Deep Learning VM Images \_|\_ Google\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/introduction](https://docs.cloud.google.com/deep-learning-vm/docs/introduction)
- Source ID: `site-docs-reference`
- Final score: 50
- Re-rank relevance: N/A

Evidence snippets:
- Python 3.10 with the following packages: numpy scipy matplotlib pandas nltk pillow scikit-image opencv-python scikit-learn many more JupyterLab notebook environments for quick prototyping Nvidia packages with the latest Nvidia driver for GPU-enabled instances: CUDA 11. x and 12. x (the version depends on the framework) CuDNN 7. x and NCCL 2. x (the version depends on the CUDA version) Updates Deep Learning VM images are updated regularly with bug fixes and package updates.
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Introduction to Deep Learning VM Stay organized with collections Save and categorize content based on your preferences.
- Pre-installed packages Images are based on the Debian 11 and Ubuntu 22.04 operating systems, and these images can be configured to include the following: Specific frameworks (for example, TensorFlow) and supporting packages.
- Community support Ask a question about Deep Learning VM on Stack Overflow or join the google-dl-platform Google group to discuss Deep Learning VM.

### "Create a Deep Learning VM instance from Cloud Marketplace \_|\_ Deep Learning\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/cloud-marketplace](https://docs.cloud.google.com/deep-learning-vm/docs/cloud-marketplace)
- Source ID: `site-docs-reference`
- Final score: 44
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Create a Deep Learning VM instance from Cloud Marketplace Stay organized with collections Save and categorize content based on your preferences.
- What's next For instructions on connecting to your new Deep Learning VM instance through the Google Cloud console or command line, read Connecting to Instances .
- This page shows you how to create a Deep Learning VM Images instance from Cloud Marketplace within the Google Cloud console without using the command line.
- If you are using GPUs with your Deep Learning VM, check the quotas page to ensure that you have enough GPUs available in your project.

