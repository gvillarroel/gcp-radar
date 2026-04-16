---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:52:27.311Z"
product_name: "Deep Learning VM Images"
product_slug: "deep-learning-vm-images"
feature_name: "Git-Jupyter integration"
feature_slug: "git-jupyter-integration"
latest_feature_date: "2018-12-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deep-learning-vm/docs/jupyter"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/troubleshooting"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/cloud-marketplace"
keywords:
  - "git"
  - "jupyter"
  - "integration"
  - "deep"
  - "learning"
  - "vm"
  - "images"
  - "between"
---

# Git-Jupyter integration

Product: Deep Learning VM Images
Coverage: MEDIUM

## Step 02 Summary

Deep Learning VM Images support integration between Git workflows and Jupyter environments.

## Extended Definition

Deep Learning VM Images support integration between Git workflows and Jupyter environments.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deep-learning-vm/docs/jupyter](https://docs.cloud.google.com/deep-learning-vm/docs/jupyter)
- [https://docs.cloud.google.com/deep-learning-vm/docs/troubleshooting](https://docs.cloud.google.com/deep-learning-vm/docs/troubleshooting)
- [https://docs.cloud.google.com/deep-learning-vm/docs/cloud-marketplace](https://docs.cloud.google.com/deep-learning-vm/docs/cloud-marketplace)

## Supporting Pages

### Connect to JupyterLab \_|\_ Deep Learning VM Images \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/jupyter](https://docs.cloud.google.com/deep-learning-vm/docs/jupyter)
- Source ID: `site-docs-reference`
- Final score: 69
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Connect to JupyterLab Stay organized with collections Save and categorize content based on your preferences.
- When you start a Deep Learning VM Images instance, a JupyterLab session is initialized.
- To set up SSH port forwarding , complete the following steps, and then access your JupyterLab session through a local browser: Run the following command by using the Google Cloud CLI in your preferred terminal or in Cloud Shell : gcloud compute ssh \ --project PROJECT ID \ --zone ZONE \ INSTANCE NAME \ -- -L 8080 :localhost:8080 Replace the following: PROJECT ID : your Google Cloud project ID ZONE : the zone where your instance is located INSTANCE NAME : the name of your instance Note: If using Cloud Shell to run the command, add a -4 to the SSH flags to use IPv4 to connect.
- Example: -- -4 -L LOCAL PORT :localhost: REMOTE PORT Access your JupyterLab session through a local browser: If you ran the command on your local machine, visit https://localhost:8080 to access JupyterLab.

### Troubleshooting \_|\_ Deep Learning VM Images \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/troubleshooting](https://docs.cloud.google.com/deep-learning-vm/docs/troubleshooting)
- Source ID: `site-docs-reference`
- Final score: 31
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Compute Compute Engine Deep Learning VM Images Support Send feedback Troubleshooting Stay organized with collections Save and categorize content based on your preferences.
- This page describes problems that can come up when creating Deep Learning VM Images instances, and tells you how to address the problems.
- Resource not found Symptom : - The resource 'projects/deeplearning-platform/zones/europe-west4-c/acceleratorTypes/nvidia-tesla-p4' was not found Problem : You are trying to create an instance with one or more GPUs in a region where GPUs are not available (for example, an instance with a P4 GPU in europe-west4-c ).
- Community support Ask a question about Deep Learning VM on Stack Overflow or join the google-dl-platform Google group to discuss Deep Learning VM.

### "Create a Deep Learning VM instance from Cloud Marketplace \_|\_ Deep Learning\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/cloud-marketplace](https://docs.cloud.google.com/deep-learning-vm/docs/cloud-marketplace)
- Source ID: `site-docs-reference`
- Final score: 23
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Create a Deep Learning VM instance from Cloud Marketplace Stay organized with collections Save and categorize content based on your preferences.
- This page shows you how to create a Deep Learning VM Images instance from Cloud Marketplace within the Google Cloud console without using the command line.
- What's next For instructions on connecting to your new Deep Learning VM instance through the Google Cloud console or command line, read Connecting to Instances .
- If you are using GPUs with your Deep Learning VM, check the quotas page to ensure that you have enough GPUs available in your project.

