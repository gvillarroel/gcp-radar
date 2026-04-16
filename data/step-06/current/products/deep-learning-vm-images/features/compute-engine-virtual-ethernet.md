---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:52:27.197Z"
product_name: "Deep Learning VM Images"
product_slug: "deep-learning-vm-images"
feature_name: "Compute Engine Virtual Ethernet"
feature_slug: "compute-engine-virtual-ethernet"
latest_feature_date: "2022-03-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deep-learning-vm/docs/concepts-images"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/cli"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-gcloud"
keywords:
  - "compute"
  - "engine"
  - "virtual"
  - "ethernet"
  - "deep"
  - "learning"
  - "vm"
  - "images"
---

# Compute Engine Virtual Ethernet

Product: Deep Learning VM Images
Coverage: MEDIUM

## Step 02 Summary

Deep Learning VM Images upgraded Compute Engine Virtual Ethernet to version 1.3.0.

## Extended Definition

Deep Learning VM Images upgraded Compute Engine Virtual Ethernet to version 1.3.0.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deep-learning-vm/docs/concepts-images](https://docs.cloud.google.com/deep-learning-vm/docs/concepts-images)
- [https://docs.cloud.google.com/deep-learning-vm/docs/cli](https://docs.cloud.google.com/deep-learning-vm/docs/cli)
- [https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-gcloud](https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-gcloud)

## Supporting Pages

### "Images, image families, and instances \_|\_ Deep Learning VM Images \_|\_\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/concepts-images](https://docs.cloud.google.com/deep-learning-vm/docs/concepts-images)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- The Deep Learning VM images are preconfigured public Compute Engine virtual machine images .
- For information about creating instances of a Deep Learning VM image, see: Launching a Deep Learning VM Instance from the Command Line Launching a Deep Learning VM Instance from the Cloud Marketplace For general information about creating instances in Compute Engine, see Virtual Machine Instances .
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Images, image families, and instances Stay organized with collections Save and categorize content based on your preferences.
- Deep Learning VM Images is a set of prepackaged virtual machine images with a deep learning framework that are ready to be run out of the box.

### "Create a Deep Learning VM instance from the command line \_|\_ Deep Learning\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/cli](https://docs.cloud.google.com/deep-learning-vm/docs/cli)
- Source ID: `site-docs-reference`
- Final score: 83
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Create a Deep Learning VM instance from the command line Stay organized with collections Save and categorize content based on your preferences.
- To provision a Deep Learning VM instance with one or more GPUs: export IMAGE FAMILY = "tf-ent-latest-gpu" export ZONE = "us-west1-b" export INSTANCE NAME = "my-instance" gcloud compute instances create $ INSTANCE NAME \ -- zone =$ ZONE \ -- image - family =$ IMAGE FAMILY \ -- image - project = deeplearning - platform - release \ -- maintenance - policy = TERMINATE \ -- accelerator = "type=nvidia-tesla-v100,count=1" \ -- metadata = "install-nvidia-driver=True" Options: --image-family must be one of the GPU-specific image types.
- Creating an instance without GPUs To provision a Deep Learning VM instance with a CPU but no GPU: export IMAGE FAMILY = "tf-ent-latest-cpu" export ZONE = "us-west1-b" export INSTANCE NAME = "my-instance" gcloud compute instances create $ INSTANCE NAME \ -- zone =$ ZONE \ -- image - family =$ IMAGE FAMILY \ -- image - project = deeplearning - platform - release Options: --image-family must be one of the CPU-specific image types.
- To the gcloud compute instances create command, append the following: --preemptible What's next For instructions on connecting to your new Deep Learning VM instance through the Google Cloud console or command line, see Connecting to Instances .

### "Quickstart: Create a Deep Learning VM instance by using the gcloud CLI \_\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-gcloud](https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-gcloud)
- Source ID: `site-docs-reference`
- Final score: 83
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- To delete the Deep Learning VM instance that you created, at the command line, enter the following command: gcloud compute instances delete $INSTANCE NAME The delete command deletes Compute Engine instances.
- You can also view and maintain your Deep Learning VM instance on the Google Cloud console in Compute Engine VM instances .
- At the command line, enter the following: export IMAGE FAMILY = "tf-latest-cu92" export ZONE = "us-west1-b" export INSTANCE NAME = "my-new-instance" export INSTANCE TYPE = "n1-standard-8" gcloud compute instances create $ INSTANCE NAME \ -- zone =$ ZONE \ -- image - family =$ IMAGE FAMILY \ -- image - project = deeplearning - platform - release \ -- maintenance - policy = TERMINATE \ -- accelerator = "type=nvidia-tesla-v100,count=8" \ -- machine - type =$ INSTANCE TYPE \ -- boot - disk - size = 120 GB \ -- metadata = "install-nvidia-driver=True" After some time, the VM instance is created and a summary of its configuration is shown.

