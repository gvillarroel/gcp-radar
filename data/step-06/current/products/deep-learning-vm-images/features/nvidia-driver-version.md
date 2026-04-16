---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:52:27.139Z"
product_name: "Deep Learning VM Images"
product_slug: "deep-learning-vm-images"
feature_name: "NVIDIA driver version"
feature_slug: "nvidia-driver-version"
latest_feature_date: "2024-06-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deep-learning-vm/docs/images"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/pytorch_start_instance"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/tensorflow_start_instance"
keywords:
  - "nvidia"
  - "driver"
  - "version"
  - "deep"
  - "learning"
  - "vm"
  - "images"
  - "updated"
---

# NVIDIA driver version

Product: Deep Learning VM Images
Coverage: MEDIUM

## Step 02 Summary

Deep Learning VM Images updated NVIDIA drivers to version 550.90.07; Older Deep Learning VM images were updated to NVIDIA driver branch R535.

## Extended Definition

Deep Learning VM Images updated NVIDIA drivers to version 550.90.07; Older Deep Learning VM images were updated to NVIDIA driver branch R535.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deep-learning-vm/docs/images](https://docs.cloud.google.com/deep-learning-vm/docs/images)
- [https://docs.cloud.google.com/deep-learning-vm/docs/pytorch_start_instance](https://docs.cloud.google.com/deep-learning-vm/docs/pytorch_start_instance)
- [https://docs.cloud.google.com/deep-learning-vm/docs/tensorflow_start_instance](https://docs.cloud.google.com/deep-learning-vm/docs/tensorflow_start_instance)

## Supporting Pages

### Choose an image \_|\_ Deep Learning VM Images \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/images](https://docs.cloud.google.com/deep-learning-vm/docs/images)
- Source ID: `site-docs-reference`
- Final score: 141
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To create a Deep Learning VM instance that uses a deprecated image, see the following example gcloud CLI command: gcloud compute instances create deprecated-tf-vm \ --image = projects/deeplearning-platform-release/global/images/ IMAGE NAME \ --machine-type = n1-standard-4 \ --zone = us-east1-c Replace IMAGE NAME with the name of the image, as follows: To use a specific image in the image family, use the image name, for example: pytorch-2-9-cu129-ubuntu-2204-nvidia-580-v20260416 .
- List all available versions using gcloud CLI You can also list all available Deep Learning VM images using the following gcloud CLI command: gcloud compute images list \ --project deeplearning-platform-release \ --format="value(NAME)" \ --no-standard-images Note: The output of this command includes some image family framework types that aren't mentioned in the previous table of family names .
- Framework Processor Image family name(s) Base GPU common-cu129-ubuntu-2404-nvidia-580 common-cu129-ubuntu-2204-nvidia-580 PyTorch GPU pytorch-2-9-cu129-ubuntu-2404-nvidia-580 pytorch-2-9-cu129-ubuntu-2204-nvidia-580 Choosing an operating system Ubuntu 22.04 and 24.04 are supported OS versions, and the images come with the NVIDIA driver version 580.
- Replace IMAGE FAMILY with the image family name for which you want to find out the latest version number. gcloud compute images describe-from-family IMAGE FAMILY \ --project deeplearning-platform-release Look for the name field in the output and use the image name given there when creating new instances.

### "Create a PyTorch Deep Learning VM instance \_|\_ Deep Learning VM Images\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/pytorch_start_instance](https://docs.cloud.google.com/deep-learning-vm/docs/pytorch_start_instance)
- Source ID: `site-docs-reference`
- Final score: 107
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To create a Deep Learning VM instance with the latest PyTorch image family and one or more attached GPUs, enter the following at the command line: export IMAGE FAMILY = "pytorch-latest-gpu" export ZONE = "us-west1-b" export INSTANCE NAME = "my-instance" gcloud compute instances create $ INSTANCE NAME \ -- zone =$ ZONE \ -- image - family =$ IMAGE FAMILY \ -- image - project = deeplearning - platform - release \ -- maintenance - policy = TERMINATE \ -- accelerator = "type=nvidia-tesla-v100,count=1" \ -- metadata = "install-nvidia-driver=True" Options: --image-family must be either pytorch-latest-gpu or pytorch- VERSION - CUDA-VERSION (for example, pytorch-1-10-cu110 ). --image-project must be deeplearning-platform-release . --maintenance-policy must be TERMINATE .
- Without GPUs To create a Deep Learning VM instance with the latest PyTorch image family and a CPU, enter the following at the command line: export IMAGE FAMILY = "pytorch-latest-cpu" export ZONE = "us-west1-b" export INSTANCE NAME = "my-instance" gcloud compute instances create $ INSTANCE NAME \ -- zone =$ ZONE \ -- image - family =$ IMAGE FAMILY \ -- image - project = deeplearning - platform - release Options: --image-family must be either pytorch-latest-cpu or pytorch- VERSION -cpu (for example, pytorch-1-13-cpu ). --image-project must be deeplearning-platform-release .
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Create a PyTorch Deep Learning VM instance Stay organized with collections Save and categorize content based on your preferences.
- This page shows you how to create a PyTorch Deep Learning VM Images instance with PyTorch and other tools pre-installed.

### "Create a TensorFlow Deep Learning VM instance \_|\_ Deep Learning VM Images\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/tensorflow_start_instance](https://docs.cloud.google.com/deep-learning-vm/docs/tensorflow_start_instance)
- Source ID: `site-docs-reference`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- To provision a Deep Learning VM instance with one or more GPUs: export IMAGE FAMILY = "tf-ent-latest-gpu" export ZONE = "us-west1-b" export INSTANCE NAME = "my-instance" gcloud compute instances create $ INSTANCE NAME \ -- zone =$ ZONE \ -- image - family =$ IMAGE FAMILY \ -- image - project = deeplearning - platform - release \ -- maintenance - policy = TERMINATE \ -- accelerator = "type=nvidia-tesla-v100,count=1" \ -- metadata = "install-nvidia-driver=True" Options: --image-family must be one of the following: tf-ent-latest-gpu to get the latest TensorFlow Enterprise 2 image An earlier TensorFlow or TensorFlow Enterprise image family name (see Choosing an image ) --image-project must be deeplearning-platform-release . --maintenance-policy must be TERMINATE .
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Create a TensorFlow Deep Learning VM instance Stay organized with collections Save and categorize content based on your preferences.
- This page shows you how to create a TensorFlow Deep Learning VM Images instance with TensorFlow and other tools pre-installed.
- Without GPUs To provision a Deep Learning VM instance without a GPU: export IMAGE FAMILY = "tf-ent-latest-cpu" export ZONE = "us-west1-b" export INSTANCE NAME = "my-instance" gcloud compute instances create $ INSTANCE NAME \ -- zone =$ ZONE \ -- image - family =$ IMAGE FAMILY \ -- image - project = deeplearning - platform - release Options: --image-family must be one of the following: tf-ent-latest-cpu to get the latest TensorFlow Enterprise 2 image An earlier TensorFlow or TensorFlow Enterprise image family name (see Choosing an image ) --image-project must be deeplearning-platform-release .

