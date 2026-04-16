---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:52:27.142Z"
product_name: "Deep Learning VM Images"
product_slug: "deep-learning-vm-images"
feature_name: "linux-headers-cloud-amd64 preinstallation"
feature_slug: "linux-headers-cloud-amd64-preinstallation"
latest_feature_date: "2024-05-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deep-learning-vm/docs/creating-images"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-gcloud"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-console"
keywords:
  - "linux"
  - "headers"
  - "amd64"
  - "preinstallation"
  - "metapackage"
  - "now"
  - "installed"
  - "speed"
---

# linux-headers-cloud-amd64 preinstallation

Product: Deep Learning VM Images
Coverage: MEDIUM

## Step 02 Summary

The linux-headers-cloud-amd64 metapackage is now installed to speed NVIDIA driver recompilation after kernel upgrades.

## Extended Definition

The linux-headers-cloud-amd64 metapackage is now installed to speed NVIDIA driver recompilation after kernel upgrades.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deep-learning-vm/docs/creating-images](https://docs.cloud.google.com/deep-learning-vm/docs/creating-images)
- [https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-gcloud](https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-gcloud)
- [https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-console](https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-console)

## Supporting Pages

### "Quickstart: Create a Deep Learning VM instance by using the gcloud CLI \_\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-gcloud](https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-gcloud)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: N/A

### "Create a new image from an existing Deep Learning VM instance \_|\_ Deep\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/creating-images](https://docs.cloud.google.com/deep-learning-vm/docs/creating-images)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Creating a TensorFlow Deep Learning VM Instance Creating a PyTorch Deep Learning VM Instance Creating a Deep Learning VM Instance from the Command Line Creating a Deep Learning VM Instance from the Cloud Marketplace Verify NVIDIA driver install Once the instance has booted, verify that the NVIDIA driver has been installed: SSH to your image: gcloud compute ssh " DEPLOYMENT NAME " Run the following command: nvidia-smi If the drivers have been installed, you can continue.
- Run the following at the command line, giving the new image a name and a family name: gcloud compute images create " NEW IMAGE NAME " \ --source-disk DEPLOYMENT NAME \ --source-disk-zone ZONE \ --family NEW FAMILY NAME Once the command is finished running, you have a new image with NVIDIA drivers preinstalled that you can use to create new Deep Learning VM instances.
- One way to prevent this is to create your own image that is based on one of the Deep Learning VM images, but that already has the NVIDIA drivers preinstalled.

### "Quickstart: Create a Deep Learning VM instance by using the Google Cloud\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-console](https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-console)
- Source ID: `site-docs-reference`
- Final score: 26
- Re-rank relevance: N/A

