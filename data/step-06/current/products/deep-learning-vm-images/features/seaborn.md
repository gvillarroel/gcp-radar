---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:52:27.300Z"
product_name: "Deep Learning VM Images"
product_slug: "deep-learning-vm-images"
feature_name: "seaborn"
feature_slug: "seaborn"
latest_feature_date: "2019-03-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deep-learning-vm/docs/creating-images"
keywords:
  - "seaborn"
  - "deep"
  - "learning"
  - "vm"
  - "images"
  - "preinstall"
---

# seaborn

Product: Deep Learning VM Images
Coverage: MEDIUM

## Step 02 Summary

Deep Learning VM Images preinstall seaborn.

## Extended Definition

Deep Learning VM Images preinstall seaborn.

## Evidence Summary

Fast-mode lexical matching selected 1 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deep-learning-vm/docs/creating-images](https://docs.cloud.google.com/deep-learning-vm/docs/creating-images)

## Supporting Pages

### "Create a new image from an existing Deep Learning VM instance \_|\_ Deep\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/creating-images](https://docs.cloud.google.com/deep-learning-vm/docs/creating-images)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Run the following at the command line, giving the new image a name and a family name: gcloud compute images create " NEW IMAGE NAME " \ --source-disk DEPLOYMENT NAME \ --source-disk-zone ZONE \ --family NEW FAMILY NAME Once the command is finished running, you have a new image with NVIDIA drivers preinstalled that you can use to create new Deep Learning VM instances.
- One way to prevent this is to create your own image that is based on one of the Deep Learning VM images, but that already has the NVIDIA drivers preinstalled.
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Create a new image from an existing Deep Learning VM instance Stay organized with collections Save and categorize content based on your preferences.
- Creating a TensorFlow Deep Learning VM Instance Creating a PyTorch Deep Learning VM Instance Creating a Deep Learning VM Instance from the Command Line Creating a Deep Learning VM Instance from the Cloud Marketplace Verify NVIDIA driver install Once the instance has booted, verify that the NVIDIA driver has been installed: SSH to your image: gcloud compute ssh " DEPLOYMENT NAME " Run the following command: nvidia-smi If the drivers have been installed, you can continue.

