---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:52:27.269Z"
product_name: "Deep Learning VM Images"
product_slug: "deep-learning-vm-images"
feature_name: "Shielded VM support"
feature_slug: "shielded-vm-support"
latest_feature_date: "2020-07-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deep-learning-vm/docs/concepts-images"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/creating-images"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/cli"
keywords:
  - "shielded"
  - "vm"
  - "deep"
  - "learning"
  - "images"
  - "creating"
  - "instances"
---

# Shielded VM support

Product: Deep Learning VM Images
Coverage: MEDIUM

## Step 02 Summary

Deep Learning VM Images support creating Shielded VM instances.

## Extended Definition

Deep Learning VM Images support creating Shielded VM instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deep-learning-vm/docs/concepts-images](https://docs.cloud.google.com/deep-learning-vm/docs/concepts-images)
- [https://docs.cloud.google.com/deep-learning-vm/docs/creating-images](https://docs.cloud.google.com/deep-learning-vm/docs/creating-images)
- [https://docs.cloud.google.com/deep-learning-vm/docs/cli](https://docs.cloud.google.com/deep-learning-vm/docs/cli)

## Supporting Pages

### "Images, image families, and instances \_|\_ Deep Learning VM Images \_|\_\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/concepts-images](https://docs.cloud.google.com/deep-learning-vm/docs/concepts-images)
- Source ID: `site-docs-reference`
- Final score: 60
- Re-rank relevance: N/A

Evidence snippets:
- For information about creating instances of a Deep Learning VM image, see: Launching a Deep Learning VM Instance from the Command Line Launching a Deep Learning VM Instance from the Cloud Marketplace For general information about creating instances in Compute Engine, see Virtual Machine Instances .
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Images, image families, and instances Stay organized with collections Save and categorize content based on your preferences.
- The Deep Learning VM images take the hassle out of setting up an environment for training deep learning models by preconfiguring dependencies, preinstalling essential tools, and optimizing performance.
- Deep Learning VM Images is a set of prepackaged virtual machine images with a deep learning framework that are ready to be run out of the box.

### "Create a new image from an existing Deep Learning VM instance \_|\_ Deep\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/creating-images](https://docs.cloud.google.com/deep-learning-vm/docs/creating-images)
- Source ID: `site-docs-reference`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- Run the following at the command line, giving the new image a name and a family name: gcloud compute images create " NEW IMAGE NAME " \ --source-disk DEPLOYMENT NAME \ --source-disk-zone ZONE \ --family NEW FAMILY NAME Once the command is finished running, you have a new image with NVIDIA drivers preinstalled that you can use to create new Deep Learning VM instances.
- Creating a TensorFlow Deep Learning VM Instance Creating a PyTorch Deep Learning VM Instance Creating a Deep Learning VM Instance from the Command Line Creating a Deep Learning VM Instance from the Cloud Marketplace Verify NVIDIA driver install Once the instance has booted, verify that the NVIDIA driver has been installed: SSH to your image: gcloud compute ssh " DEPLOYMENT NAME " Run the following command: nvidia-smi If the drivers have been installed, you can continue.
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Create a new image from an existing Deep Learning VM instance Stay organized with collections Save and categorize content based on your preferences.
- One way to prevent this is to create your own image that is based on one of the Deep Learning VM images, but that already has the NVIDIA drivers preinstalled.

### "Create a Deep Learning VM instance from the command line \_|\_ Deep Learning\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/cli](https://docs.cloud.google.com/deep-learning-vm/docs/cli)
- Source ID: `site-docs-reference`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- Creating an instance without GPUs To provision a Deep Learning VM instance with a CPU but no GPU: export IMAGE FAMILY = "tf-ent-latest-cpu" export ZONE = "us-west1-b" export INSTANCE NAME = "my-instance" gcloud compute instances create $ INSTANCE NAME \ -- zone =$ ZONE \ -- image - family =$ IMAGE FAMILY \ -- image - project = deeplearning - platform - release Options: --image-family must be one of the CPU-specific image types.
- This topic contains instructions for creating a new Deep Learning VM Images instance from the command line.
- To provision a Deep Learning VM instance with one or more GPUs: export IMAGE FAMILY = "tf-ent-latest-gpu" export ZONE = "us-west1-b" export INSTANCE NAME = "my-instance" gcloud compute instances create $ INSTANCE NAME \ -- zone =$ ZONE \ -- image - family =$ IMAGE FAMILY \ -- image - project = deeplearning - platform - release \ -- maintenance - policy = TERMINATE \ -- accelerator = "type=nvidia-tesla-v100,count=1" \ -- metadata = "install-nvidia-driver=True" Options: --image-family must be one of the GPU-specific image types.
- To the gcloud compute instances create command, append the following: --preemptible What's next For instructions on connecting to your new Deep Learning VM instance through the Google Cloud console or command line, see Connecting to Instances .

