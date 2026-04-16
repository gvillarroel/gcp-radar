---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:52:27.172Z"
product_name: "Deep Learning VM Images"
product_slug: "deep-learning-vm-images"
feature_name: "TensorFlow 2.11 GPU images"
feature_slug: "tensorflow-2-11-gpu-images"
latest_feature_date: "2023-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deep-learning-vm/docs/tensorflow_start_instance"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/cli"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/concepts-images"
keywords:
  - "tensorflow"
  - "11"
  - "gpu"
  - "images"
  - "deep"
  - "learning"
  - "vm"
  - "now"
---

# TensorFlow 2.11 GPU images

Product: Deep Learning VM Images
Coverage: MEDIUM

## Step 02 Summary

Deep Learning VM Images now provide TensorFlow 2.11 GPU images on Debian 11 with CUDA 11.3 and Python 3.10.

## Extended Definition

Deep Learning VM Images now provide TensorFlow 2.11 GPU images on Debian 11 with CUDA 11.3 and Python 3.10.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deep-learning-vm/docs/tensorflow_start_instance](https://docs.cloud.google.com/deep-learning-vm/docs/tensorflow_start_instance)
- [https://docs.cloud.google.com/deep-learning-vm/docs/cli](https://docs.cloud.google.com/deep-learning-vm/docs/cli)
- [https://docs.cloud.google.com/deep-learning-vm/docs/concepts-images](https://docs.cloud.google.com/deep-learning-vm/docs/concepts-images)

## Supporting Pages

### "Create a TensorFlow Deep Learning VM instance \_|\_ Deep Learning VM Images\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/tensorflow_start_instance](https://docs.cloud.google.com/deep-learning-vm/docs/tensorflow_start_instance)
- Source ID: `site-docs-reference`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Create a TensorFlow Deep Learning VM instance Stay organized with collections Save and categorize content based on your preferences.
- This page shows you how to create a TensorFlow Deep Learning VM Images instance with TensorFlow and other tools pre-installed.
- To provision a Deep Learning VM instance with one or more GPUs: export IMAGE FAMILY = "tf-ent-latest-gpu" export ZONE = "us-west1-b" export INSTANCE NAME = "my-instance" gcloud compute instances create $ INSTANCE NAME \ -- zone =$ ZONE \ -- image - family =$ IMAGE FAMILY \ -- image - project = deeplearning - platform - release \ -- maintenance - policy = TERMINATE \ -- accelerator = "type=nvidia-tesla-v100,count=1" \ -- metadata = "install-nvidia-driver=True" Options: --image-family must be one of the following: tf-ent-latest-gpu to get the latest TensorFlow Enterprise 2 image An earlier TensorFlow or TensorFlow Enterprise image family name (see Choosing an image ) --image-project must be deeplearning-platform-release . --maintenance-policy must be TERMINATE .
- Without GPUs To provision a Deep Learning VM instance without a GPU: export IMAGE FAMILY = "tf-ent-latest-cpu" export ZONE = "us-west1-b" export INSTANCE NAME = "my-instance" gcloud compute instances create $ INSTANCE NAME \ -- zone =$ ZONE \ -- image - family =$ IMAGE FAMILY \ -- image - project = deeplearning - platform - release Options: --image-family must be one of the following: tf-ent-latest-cpu to get the latest TensorFlow Enterprise 2 image An earlier TensorFlow or TensorFlow Enterprise image family name (see Choosing an image ) --image-project must be deeplearning-platform-release .

### "Images, image families, and instances \_|\_ Deep Learning VM Images \_|\_\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/concepts-images](https://docs.cloud.google.com/deep-learning-vm/docs/concepts-images)
- Source ID: `site-docs-reference`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Images, image families, and instances Stay organized with collections Save and categorize content based on your preferences.
- The Deep Learning VM images take the hassle out of setting up an environment for training deep learning models by preconfiguring dependencies, preinstalling essential tools, and optimizing performance.
- Deep Learning VM Images is a set of prepackaged virtual machine images with a deep learning framework that are ready to be run out of the box.
- The Deep Learning VM images are preconfigured public Compute Engine virtual machine images .

### "Create a Deep Learning VM instance from the command line \_|\_ Deep Learning\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/cli](https://docs.cloud.google.com/deep-learning-vm/docs/cli)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Create a Deep Learning VM instance from the command line Stay organized with collections Save and categorize content based on your preferences.
- This topic contains instructions for creating a new Deep Learning VM Images instance from the command line.
- To provision a Deep Learning VM instance with one or more GPUs: export IMAGE FAMILY = "tf-ent-latest-gpu" export ZONE = "us-west1-b" export INSTANCE NAME = "my-instance" gcloud compute instances create $ INSTANCE NAME \ -- zone =$ ZONE \ -- image - family =$ IMAGE FAMILY \ -- image - project = deeplearning - platform - release \ -- maintenance - policy = TERMINATE \ -- accelerator = "type=nvidia-tesla-v100,count=1" \ -- metadata = "install-nvidia-driver=True" Options: --image-family must be one of the GPU-specific image types.
- Creating an instance without GPUs To provision a Deep Learning VM instance with a CPU but no GPU: export IMAGE FAMILY = "tf-ent-latest-cpu" export ZONE = "us-west1-b" export INSTANCE NAME = "my-instance" gcloud compute instances create $ INSTANCE NAME \ -- zone =$ ZONE \ -- image - family =$ IMAGE FAMILY \ -- image - project = deeplearning - platform - release Options: --image-family must be one of the CPU-specific image types.

