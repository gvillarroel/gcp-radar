---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:52:27.131Z"
product_name: "Deep Learning VM Images"
product_slug: "deep-learning-vm-images"
feature_name: "Conda-preinstalled images"
feature_slug: "conda-preinstalled-images"
latest_feature_date: "2025-03-12"
deprecation_date: "2025-09-30"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deep-learning-vm/docs/troubleshooting"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/billing-questions"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/cli"
keywords:
  - "conda"
  - "preinstalled"
  - "images"
  - "deep"
  - "learning"
  - "vm"
  - "include"
  - "remain"
---

# Conda-preinstalled images

Product: Deep Learning VM Images
Coverage: MEDIUM

## Step 02 Summary

Deep Learning VM images that include Conda remain available as separate -conda image and image family variants; deprecated on 2025-09-30.

## Extended Definition

Deep Learning VM images that include Conda remain available as separate -conda image and image family variants; deprecated on 2025-09-30.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deep-learning-vm/docs/troubleshooting](https://docs.cloud.google.com/deep-learning-vm/docs/troubleshooting)
- [https://docs.cloud.google.com/deep-learning-vm/docs/billing-questions](https://docs.cloud.google.com/deep-learning-vm/docs/billing-questions)
- [https://docs.cloud.google.com/deep-learning-vm/docs/cli](https://docs.cloud.google.com/deep-learning-vm/docs/cli)

## Supporting Pages

### Troubleshooting \_|\_ Deep Learning VM Images \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/troubleshooting](https://docs.cloud.google.com/deep-learning-vm/docs/troubleshooting)
- Source ID: `site-docs-reference`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Compute Compute Engine Deep Learning VM Images Support Send feedback Troubleshooting Stay organized with collections Save and categorize content based on your preferences.
- This page describes problems that can come up when creating Deep Learning VM Images instances, and tells you how to address the problems.
- Resource not found Symptom : - The resource 'projects/deeplearning-platform/zones/europe-west4-c/acceleratorTypes/nvidia-tesla-p4' was not found Problem : You are trying to create an instance with one or more GPUs in a region where GPUs are not available (for example, an instance with a P4 GPU in europe-west4-c ).
- Community support Ask a question about Deep Learning VM on Stack Overflow or join the google-dl-platform Google group to discuss Deep Learning VM.

### Billing questions \_|\_ Deep Learning VM Images \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/billing-questions](https://docs.cloud.google.com/deep-learning-vm/docs/billing-questions)
- Source ID: `site-docs-reference`
- Final score: 38
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Compute Compute Engine Deep Learning VM Images Support Send feedback Billing questions Stay organized with collections Save and categorize content based on your preferences.
- Use the following resources to get help with billing questions: To learn about Deep Learning VM Images pricing, read the pricing documentation .

### "Create a Deep Learning VM instance from the command line \_|\_ Deep Learning\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/cli](https://docs.cloud.google.com/deep-learning-vm/docs/cli)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Create a Deep Learning VM instance from the command line Stay organized with collections Save and categorize content based on your preferences.
- This topic contains instructions for creating a new Deep Learning VM Images instance from the command line.
- To provision a Deep Learning VM instance with one or more GPUs: export IMAGE FAMILY = "tf-ent-latest-gpu" export ZONE = "us-west1-b" export INSTANCE NAME = "my-instance" gcloud compute instances create $ INSTANCE NAME \ -- zone =$ ZONE \ -- image - family =$ IMAGE FAMILY \ -- image - project = deeplearning - platform - release \ -- maintenance - policy = TERMINATE \ -- accelerator = "type=nvidia-tesla-v100,count=1" \ -- metadata = "install-nvidia-driver=True" Options: --image-family must be one of the GPU-specific image types.
- Creating an instance without GPUs To provision a Deep Learning VM instance with a CPU but no GPU: export IMAGE FAMILY = "tf-ent-latest-cpu" export ZONE = "us-west1-b" export INSTANCE NAME = "my-instance" gcloud compute instances create $ INSTANCE NAME \ -- zone =$ ZONE \ -- image - family =$ IMAGE FAMILY \ -- image - project = deeplearning - platform - release Options: --image-family must be one of the CPU-specific image types.

