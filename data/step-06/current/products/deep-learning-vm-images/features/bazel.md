---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:52:27.308Z"
product_name: "Deep Learning VM Images"
product_slug: "deep-learning-vm-images"
feature_name: "Bazel"
feature_slug: "bazel"
latest_feature_date: "2018-12-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deep-learning-vm/docs/tensorflow_start_instance"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/concepts-images"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/creating-images"
keywords:
  - "bazel"
  - "tensorflow"
  - "deep"
  - "learning"
  - "vm"
  - "images"
  - "preinstall"
---

# Bazel

Product: Deep Learning VM Images
Coverage: MEDIUM

## Step 02 Summary

TensorFlow Deep Learning VM Images preinstall Bazel.

## Extended Definition

TensorFlow Deep Learning VM Images preinstall Bazel.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deep-learning-vm/docs/tensorflow_start_instance](https://docs.cloud.google.com/deep-learning-vm/docs/tensorflow_start_instance)
- [https://docs.cloud.google.com/deep-learning-vm/docs/concepts-images](https://docs.cloud.google.com/deep-learning-vm/docs/concepts-images)
- [https://docs.cloud.google.com/deep-learning-vm/docs/creating-images](https://docs.cloud.google.com/deep-learning-vm/docs/creating-images)

## Supporting Pages

### "Create a TensorFlow Deep Learning VM instance \_|\_ Deep Learning VM Images\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/tensorflow_start_instance](https://docs.cloud.google.com/deep-learning-vm/docs/tensorflow_start_instance)
- Source ID: `site-docs-reference`
- Final score: 58
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Create a TensorFlow Deep Learning VM instance Stay organized with collections Save and categorize content based on your preferences.
- This page shows you how to create a TensorFlow Deep Learning VM Images instance with TensorFlow and other tools pre-installed.
- To provision a Deep Learning VM instance with one or more GPUs: export IMAGE FAMILY = "tf-ent-latest-gpu" export ZONE = "us-west1-b" export INSTANCE NAME = "my-instance" gcloud compute instances create $ INSTANCE NAME \ -- zone =$ ZONE \ -- image - family =$ IMAGE FAMILY \ -- image - project = deeplearning - platform - release \ -- maintenance - policy = TERMINATE \ -- accelerator = "type=nvidia-tesla-v100,count=1" \ -- metadata = "install-nvidia-driver=True" Options: --image-family must be one of the following: tf-ent-latest-gpu to get the latest TensorFlow Enterprise 2 image An earlier TensorFlow or TensorFlow Enterprise image family name (see Choosing an image ) --image-project must be deeplearning-platform-release . --maintenance-policy must be TERMINATE .
- Without GPUs To provision a Deep Learning VM instance without a GPU: export IMAGE FAMILY = "tf-ent-latest-cpu" export ZONE = "us-west1-b" export INSTANCE NAME = "my-instance" gcloud compute instances create $ INSTANCE NAME \ -- zone =$ ZONE \ -- image - family =$ IMAGE FAMILY \ -- image - project = deeplearning - platform - release Options: --image-family must be one of the following: tf-ent-latest-cpu to get the latest TensorFlow Enterprise 2 image An earlier TensorFlow or TensorFlow Enterprise image family name (see Choosing an image ) --image-project must be deeplearning-platform-release .

### "Images, image families, and instances \_|\_ Deep Learning VM Images \_|\_\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/concepts-images](https://docs.cloud.google.com/deep-learning-vm/docs/concepts-images)
- Source ID: `site-docs-reference`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- The Deep Learning VM images take the hassle out of setting up an environment for training deep learning models by preconfiguring dependencies, preinstalling essential tools, and optimizing performance.
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Images, image families, and instances Stay organized with collections Save and categorize content based on your preferences.
- Deep Learning VM Images is a set of prepackaged virtual machine images with a deep learning framework that are ready to be run out of the box.
- The Deep Learning VM images are preconfigured public Compute Engine virtual machine images .

### "Create a new image from an existing Deep Learning VM instance \_|\_ Deep\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/creating-images](https://docs.cloud.google.com/deep-learning-vm/docs/creating-images)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Run the following at the command line, giving the new image a name and a family name: gcloud compute images create " NEW IMAGE NAME " \ --source-disk DEPLOYMENT NAME \ --source-disk-zone ZONE \ --family NEW FAMILY NAME Once the command is finished running, you have a new image with NVIDIA drivers preinstalled that you can use to create new Deep Learning VM instances.
- One way to prevent this is to create your own image that is based on one of the Deep Learning VM images, but that already has the NVIDIA drivers preinstalled.
- Creating a TensorFlow Deep Learning VM Instance Creating a PyTorch Deep Learning VM Instance Creating a Deep Learning VM Instance from the Command Line Creating a Deep Learning VM Instance from the Cloud Marketplace Verify NVIDIA driver install Once the instance has booted, verify that the NVIDIA driver has been installed: SSH to your image: gcloud compute ssh " DEPLOYMENT NAME " Run the following command: nvidia-smi If the drivers have been installed, you can continue.
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Create a new image from an existing Deep Learning VM instance Stay organized with collections Save and categorize content based on your preferences.

