---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:52:27.128Z"
product_name: "Deep Learning VM Images"
product_slug: "deep-learning-vm-images"
feature_name: "Dataproc JupyterLab plugin"
feature_slug: "dataproc-jupyterlab-plugin"
latest_feature_date: "2025-04-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deep-learning-vm/docs/jupyter"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/cli"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-gcloud"
keywords:
  - "dataproc"
  - "jupyterlab"
  - "plugin"
  - "deep"
  - "learning"
  - "vm"
  - "images"
  - "was"
---

# Dataproc JupyterLab plugin

Product: Deep Learning VM Images
Coverage: MEDIUM

## Step 02 Summary

The Dataproc JupyterLab plugin in Deep Learning VM Images was updated to version 0.1.85.

## Extended Definition

The Dataproc JupyterLab plugin in Deep Learning VM Images was updated to version 0.1.85.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deep-learning-vm/docs/jupyter](https://docs.cloud.google.com/deep-learning-vm/docs/jupyter)
- [https://docs.cloud.google.com/deep-learning-vm/docs/cli](https://docs.cloud.google.com/deep-learning-vm/docs/cli)
- [https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-gcloud](https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-gcloud)

## Supporting Pages

### Connect to JupyterLab \_|\_ Deep Learning VM Images \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/jupyter](https://docs.cloud.google.com/deep-learning-vm/docs/jupyter)
- Source ID: `site-docs-reference`
- Final score: 59
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Connect to JupyterLab Stay organized with collections Save and categorize content based on your preferences.
- When you start a Deep Learning VM Images instance, a JupyterLab session is initialized.
- To set up SSH port forwarding , complete the following steps, and then access your JupyterLab session through a local browser: Run the following command by using the Google Cloud CLI in your preferred terminal or in Cloud Shell : gcloud compute ssh \ --project PROJECT ID \ --zone ZONE \ INSTANCE NAME \ -- -L 8080 :localhost:8080 Replace the following: PROJECT ID : your Google Cloud project ID ZONE : the zone where your instance is located INSTANCE NAME : the name of your instance Note: If using Cloud Shell to run the command, add a -4 to the SSH flags to use IPv4 to connect.
- Example: -- -4 -L LOCAL PORT :localhost: REMOTE PORT Access your JupyterLab session through a local browser: If you ran the command on your local machine, visit https://localhost:8080 to access JupyterLab.

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

