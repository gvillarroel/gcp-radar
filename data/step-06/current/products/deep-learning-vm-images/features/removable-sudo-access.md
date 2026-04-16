---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:52:27.268Z"
product_name: "Deep Learning VM Images"
product_slug: "deep-learning-vm-images"
feature_name: "Removable sudo access"
feature_slug: "removable-sudo-access"
latest_feature_date: "2020-07-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-console"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/cloud-marketplace"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/pytorch_start_instance"
keywords:
  - "removable"
  - "sudo"
  - "access"
  - "deep"
  - "learning"
  - "vm"
  - "images"
  - "removing"
---

# Removable sudo access

Product: Deep Learning VM Images
Coverage: MEDIUM

## Step 02 Summary

Deep Learning VM Images support removing sudo access from Deep Learning Containers.

## Extended Definition

Deep Learning VM Images support removing sudo access from Deep Learning Containers.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-console](https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-console)
- [https://docs.cloud.google.com/deep-learning-vm/docs/cloud-marketplace](https://docs.cloud.google.com/deep-learning-vm/docs/cloud-marketplace)
- [https://docs.cloud.google.com/deep-learning-vm/docs/pytorch_start_instance](https://docs.cloud.google.com/deep-learning-vm/docs/pytorch_start_instance)

## Supporting Pages

### "Quickstart: Create a Deep Learning VM instance by using the Google Cloud\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-console](https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-console)
- Source ID: `site-docs-reference`
- Final score: 55
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a Deep Learning VM instance by using the Google Cloud console This page shows you how to create a Deep Learning VM Images instance by using Google Cloud Marketplace in the Google Cloud console.
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Access your new instance Once you've created your Deep Learning VM instance, it starts automatically.
- After the instance is deployed, the Google Cloud console opens the Deployment Manager page where you can manage your Deep Learning VM instances and other deployments.

### "Create a Deep Learning VM instance from Cloud Marketplace \_|\_ Deep Learning\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/cloud-marketplace](https://docs.cloud.google.com/deep-learning-vm/docs/cloud-marketplace)
- Source ID: `site-docs-reference`
- Final score: 51
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Create a Deep Learning VM instance from Cloud Marketplace Stay organized with collections Save and categorize content based on your preferences.
- This page shows you how to create a Deep Learning VM Images instance from Cloud Marketplace within the Google Cloud console without using the command line.
- What's next For instructions on connecting to your new Deep Learning VM instance through the Google Cloud console or command line, read Connecting to Instances .
- If you are using GPUs with your Deep Learning VM, check the quotas page to ensure that you have enough GPUs available in your project.

### "Create a PyTorch Deep Learning VM instance \_|\_ Deep Learning VM Images\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/pytorch_start_instance](https://docs.cloud.google.com/deep-learning-vm/docs/pytorch_start_instance)
- Source ID: `site-docs-reference`
- Final score: 47
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Create a PyTorch Deep Learning VM instance Stay organized with collections Save and categorize content based on your preferences.
- This page shows you how to create a PyTorch Deep Learning VM Images instance with PyTorch and other tools pre-installed.
- To create a Deep Learning VM instance with the latest PyTorch image family and one or more attached GPUs, enter the following at the command line: export IMAGE FAMILY = "pytorch-latest-gpu" export ZONE = "us-west1-b" export INSTANCE NAME = "my-instance" gcloud compute instances create $ INSTANCE NAME \ -- zone =$ ZONE \ -- image - family =$ IMAGE FAMILY \ -- image - project = deeplearning - platform - release \ -- maintenance - policy = TERMINATE \ -- accelerator = "type=nvidia-tesla-v100,count=1" \ -- metadata = "install-nvidia-driver=True" Options: --image-family must be either pytorch-latest-gpu or pytorch- VERSION - CUDA-VERSION (for example, pytorch-1-10-cu110 ). --image-project must be deeplearning-platform-release . --maintenance-policy must be TERMINATE .
- Without GPUs To create a Deep Learning VM instance with the latest PyTorch image family and a CPU, enter the following at the command line: export IMAGE FAMILY = "pytorch-latest-cpu" export ZONE = "us-west1-b" export INSTANCE NAME = "my-instance" gcloud compute instances create $ INSTANCE NAME \ -- zone =$ ZONE \ -- image - family =$ IMAGE FAMILY \ -- image - project = deeplearning - platform - release Options: --image-family must be either pytorch-latest-cpu or pytorch- VERSION -cpu (for example, pytorch-1-13-cpu ). --image-project must be deeplearning-platform-release .

