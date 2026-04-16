---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:52:27.309Z"
product_name: "Deep Learning VM Images"
product_slug: "deep-learning-vm-images"
feature_name: "Python Dataproc client"
feature_slug: "python-dataproc-client"
latest_feature_date: "2018-12-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deep-learning-vm/docs/images"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/cli"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-gcloud"
keywords:
  - "python"
  - "dataproc"
  - "client"
  - "deep"
  - "learning"
  - "vm"
  - "images"
  - "preinstall"
---

# Python Dataproc client

Product: Deep Learning VM Images
Coverage: MEDIUM

## Step 02 Summary

Deep Learning VM Images preinstall the Python Dataproc client on all images.

## Extended Definition

Deep Learning VM Images preinstall the Python Dataproc client on all images.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deep-learning-vm/docs/images](https://docs.cloud.google.com/deep-learning-vm/docs/images)
- [https://docs.cloud.google.com/deep-learning-vm/docs/cli](https://docs.cloud.google.com/deep-learning-vm/docs/cli)
- [https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-gcloud](https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-gcloud)

## Supporting Pages

### Choose an image \_|\_ Deep Learning VM Images \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/images](https://docs.cloud.google.com/deep-learning-vm/docs/images)
- Source ID: `site-docs-reference`
- Final score: 35
- Re-rank relevance: N/A

Evidence snippets:
- To create a Deep Learning VM instance that uses a deprecated image, see the following example gcloud CLI command: gcloud compute instances create deprecated-tf-vm \ --image = projects/deeplearning-platform-release/global/images/ IMAGE NAME \ --machine-type = n1-standard-4 \ --zone = us-east1-c Replace IMAGE NAME with the name of the image, as follows: To use a specific image in the image family, use the image name, for example: pytorch-2-9-cu129-ubuntu-2204-nvidia-580-v20260416 .
- List all available versions using gcloud CLI You can also list all available Deep Learning VM images using the following gcloud CLI command: gcloud compute images list \ --project deeplearning-platform-release \ --format="value(NAME)" \ --no-standard-images Note: The output of this command includes some image family framework types that aren't mentioned in the previous table of family names .
- Replace IMAGE FAMILY with the image family name for which you want to find out the latest version number. gcloud compute images describe-from-family IMAGE FAMILY \ --project deeplearning-platform-release Look for the name field in the output and use the image name given there when creating new instances.
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Choose an image Stay organized with collections Save and categorize content based on your preferences.

### "Create a Deep Learning VM instance from the command line \_|\_ Deep Learning\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/cli](https://docs.cloud.google.com/deep-learning-vm/docs/cli)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Create a Deep Learning VM instance from the command line Stay organized with collections Save and categorize content based on your preferences.
- This topic contains instructions for creating a new Deep Learning VM Images instance from the command line.
- To provision a Deep Learning VM instance with one or more GPUs: export IMAGE FAMILY = "tf-ent-latest-gpu" export ZONE = "us-west1-b" export INSTANCE NAME = "my-instance" gcloud compute instances create $ INSTANCE NAME \ -- zone =$ ZONE \ -- image - family =$ IMAGE FAMILY \ -- image - project = deeplearning - platform - release \ -- maintenance - policy = TERMINATE \ -- accelerator = "type=nvidia-tesla-v100,count=1" \ -- metadata = "install-nvidia-driver=True" Options: --image-family must be one of the GPU-specific image types.
- Creating an instance without GPUs To provision a Deep Learning VM instance with a CPU but no GPU: export IMAGE FAMILY = "tf-ent-latest-cpu" export ZONE = "us-west1-b" export INSTANCE NAME = "my-instance" gcloud compute instances create $ INSTANCE NAME \ -- zone =$ ZONE \ -- image - family =$ IMAGE FAMILY \ -- image - project = deeplearning - platform - release Options: --image-family must be one of the CPU-specific image types.

### "Quickstart: Create a Deep Learning VM instance by using the gcloud CLI \_\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-gcloud](https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-gcloud)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Create a Deep Learning VM instance by using the gcloud CLI This page shows you how to create a Deep Learning VM Images instance by using the Google Cloud CLI.
- At the command line, enter the following: export IMAGE FAMILY = "tf-latest-cu92" export ZONE = "us-west1-b" export INSTANCE NAME = "my-new-instance" export INSTANCE TYPE = "n1-standard-8" gcloud compute instances create $ INSTANCE NAME \ -- zone =$ ZONE \ -- image - family =$ IMAGE FAMILY \ -- image - project = deeplearning - platform - release \ -- maintenance - policy = TERMINATE \ -- accelerator = "type=nvidia-tesla-v100,count=8" \ -- machine - type =$ INSTANCE TYPE \ -- boot - disk - size = 120 GB \ -- metadata = "install-nvidia-driver=True" After some time, the VM instance is created and a summary of its configuration is shown.
- To delete the Deep Learning VM instance that you created, at the command line, enter the following command: gcloud compute instances delete $INSTANCE NAME The delete command deletes Compute Engine instances.

