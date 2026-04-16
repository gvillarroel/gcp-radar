---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:52:27.304Z"
product_name: "Deep Learning VM Images"
product_slug: "deep-learning-vm-images"
feature_name: "Web proxy access"
feature_slug: "web-proxy-access"
latest_feature_date: "2019-01-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deep-learning-vm/docs/jupyter"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/cloud-marketplace"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/pytorch_start_instance"
keywords:
  - "web"
  - "proxy"
  - "access"
  - "deep"
  - "learning"
  - "vm"
  - "images"
  - "through"
---

# Web proxy access

Product: Deep Learning VM Images
Coverage: MEDIUM

## Step 02 Summary

Deep Learning VM Images support access through a special web proxy instead of SSH.

## Extended Definition

Deep Learning VM Images support access through a special web proxy instead of SSH.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deep-learning-vm/docs/jupyter](https://docs.cloud.google.com/deep-learning-vm/docs/jupyter)
- [https://docs.cloud.google.com/deep-learning-vm/docs/cloud-marketplace](https://docs.cloud.google.com/deep-learning-vm/docs/cloud-marketplace)
- [https://docs.cloud.google.com/deep-learning-vm/docs/pytorch_start_instance](https://docs.cloud.google.com/deep-learning-vm/docs/pytorch_start_instance)

## Supporting Pages

### Connect to JupyterLab \_|\_ Deep Learning VM Images \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/jupyter](https://docs.cloud.google.com/deep-learning-vm/docs/jupyter)
- Source ID: `site-docs-reference`
- Final score: 62
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Connect to JupyterLab Stay organized with collections Save and categorize content based on your preferences.
- When you start a Deep Learning VM Images instance, a JupyterLab session is initialized.
- To set up SSH port forwarding , complete the following steps, and then access your JupyterLab session through a local browser: Run the following command by using the Google Cloud CLI in your preferred terminal or in Cloud Shell : gcloud compute ssh \ --project PROJECT ID \ --zone ZONE \ INSTANCE NAME \ -- -L 8080 :localhost:8080 Replace the following: PROJECT ID : your Google Cloud project ID ZONE : the zone where your instance is located INSTANCE NAME : the name of your instance Note: If using Cloud Shell to run the command, add a -4 to the SSH flags to use IPv4 to connect.
- Example: -- -4 -L LOCAL PORT :localhost: REMOTE PORT Access your JupyterLab session through a local browser: If you ran the command on your local machine, visit https://localhost:8080 to access JupyterLab.

### "Create a Deep Learning VM instance from Cloud Marketplace \_|\_ Deep Learning\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/cloud-marketplace](https://docs.cloud.google.com/deep-learning-vm/docs/cloud-marketplace)
- Source ID: `site-docs-reference`
- Final score: 47
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Create a Deep Learning VM instance from Cloud Marketplace Stay organized with collections Save and categorize content based on your preferences.
- What's next For instructions on connecting to your new Deep Learning VM instance through the Google Cloud console or command line, read Connecting to Instances .
- This page shows you how to create a Deep Learning VM Images instance from Cloud Marketplace within the Google Cloud console without using the command line.
- If you are using GPUs with your Deep Learning VM, check the quotas page to ensure that you have enough GPUs available in your project.

### "Create a PyTorch Deep Learning VM instance \_|\_ Deep Learning VM Images\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/pytorch_start_instance](https://docs.cloud.google.com/deep-learning-vm/docs/pytorch_start_instance)
- Source ID: `site-docs-reference`
- Final score: 43
- Re-rank relevance: N/A

Evidence snippets:
- To the gcloud compute instances create command, append the following: --preemptible What's next For instructions on connecting to your new Deep Learning VM instance through the Google Cloud console or command line, see Connecting to Instances .
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Create a PyTorch Deep Learning VM instance Stay organized with collections Save and categorize content based on your preferences.
- This page shows you how to create a PyTorch Deep Learning VM Images instance with PyTorch and other tools pre-installed.
- To create a Deep Learning VM instance with the latest PyTorch image family and one or more attached GPUs, enter the following at the command line: export IMAGE FAMILY = "pytorch-latest-gpu" export ZONE = "us-west1-b" export INSTANCE NAME = "my-instance" gcloud compute instances create $ INSTANCE NAME \ -- zone =$ ZONE \ -- image - family =$ IMAGE FAMILY \ -- image - project = deeplearning - platform - release \ -- maintenance - policy = TERMINATE \ -- accelerator = "type=nvidia-tesla-v100,count=1" \ -- metadata = "install-nvidia-driver=True" Options: --image-family must be either pytorch-latest-gpu or pytorch- VERSION - CUDA-VERSION (for example, pytorch-1-10-cu110 ). --image-project must be deeplearning-platform-release . --maintenance-policy must be TERMINATE .

