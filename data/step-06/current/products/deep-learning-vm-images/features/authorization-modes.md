---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:52:27.294Z"
product_name: "Deep Learning VM Images"
product_slug: "deep-learning-vm-images"
feature_name: "Authorization modes"
feature_slug: "authorization-modes"
latest_feature_date: "2019-04-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deep-learning-vm/docs/shared-responsibility"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/cli"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-console"
keywords:
  - "authorization"
  - "modes"
  - "deep"
  - "learning"
  - "vm"
  - "images"
  - "single"
  - "user"
---

# Authorization modes

Product: Deep Learning VM Images
Coverage: MEDIUM

## Step 02 Summary

Deep Learning VM Images support single user mode and service account mode authorization.

## Extended Definition

Deep Learning VM Images support single user mode and service account mode authorization.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deep-learning-vm/docs/shared-responsibility](https://docs.cloud.google.com/deep-learning-vm/docs/shared-responsibility)
- [https://docs.cloud.google.com/deep-learning-vm/docs/cli](https://docs.cloud.google.com/deep-learning-vm/docs/cli)
- [https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-console](https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-console)

## Supporting Pages

### "Deep Learning VM shared responsibility \_|\_ Deep Learning VM Images \_\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/shared-responsibility](https://docs.cloud.google.com/deep-learning-vm/docs/shared-responsibility)
- Source ID: `site-docs-reference`
- Final score: 27
- Re-rank relevance: N/A

Evidence snippets:
- The customer's security responsibilities include the following: Use the latest versions of Deep Learning VM Containers and VM Images : Deep Learning VM provides prebuilt containers and VM images to simplify the use of its services.
- Home Documentation Compute Compute Engine Deep Learning VM Images Resources Send feedback Deep Learning VM shared responsibility Stay organized with collections Save and categorize content based on your preferences.
- Google's security and compliance responsibilities in providing Deep Learning VM include the following: Protect the infrastructure : Google is responsible for providing secure infrastructure for its services, including physical security of data centers, network security, and application security.
- Secure applications : You are responsible for securing your own applications running on the Deep Learning VM platform, including implementing secure coding practices and regularly testing for vulnerabilities.

### "Create a Deep Learning VM instance from the command line \_|\_ Deep Learning\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/cli](https://docs.cloud.google.com/deep-learning-vm/docs/cli)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Create a Deep Learning VM instance from the command line Stay organized with collections Save and categorize content based on your preferences.
- This topic contains instructions for creating a new Deep Learning VM Images instance from the command line.
- To provision a Deep Learning VM instance with one or more GPUs: export IMAGE FAMILY = "tf-ent-latest-gpu" export ZONE = "us-west1-b" export INSTANCE NAME = "my-instance" gcloud compute instances create $ INSTANCE NAME \ -- zone =$ ZONE \ -- image - family =$ IMAGE FAMILY \ -- image - project = deeplearning - platform - release \ -- maintenance - policy = TERMINATE \ -- accelerator = "type=nvidia-tesla-v100,count=1" \ -- metadata = "install-nvidia-driver=True" Options: --image-family must be one of the GPU-specific image types.
- Creating an instance without GPUs To provision a Deep Learning VM instance with a CPU but no GPU: export IMAGE FAMILY = "tf-ent-latest-cpu" export ZONE = "us-west1-b" export INSTANCE NAME = "my-instance" gcloud compute instances create $ INSTANCE NAME \ -- zone =$ ZONE \ -- image - family =$ IMAGE FAMILY \ -- image - project = deeplearning - platform - release Options: --image-family must be one of the CPU-specific image types.

### "Quickstart: Create a Deep Learning VM instance by using the Google Cloud\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-console](https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-console)
- Source ID: `site-docs-reference`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Create a Deep Learning VM instance by using the Google Cloud console This page shows you how to create a Deep Learning VM Images instance by using Google Cloud Marketplace in the Google Cloud console.
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- After the instance is deployed, the Google Cloud console opens the Deployment Manager page where you can manage your Deep Learning VM instances and other deployments.
- What's next Read a more in-depth description of this process in Creating a Deep Learning VM instance from Google Cloud Marketplace .

