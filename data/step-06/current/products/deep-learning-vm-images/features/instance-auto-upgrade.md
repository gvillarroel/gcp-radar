---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:52:27.261Z"
product_name: "Deep Learning VM Images"
product_slug: "deep-learning-vm-images"
feature_name: "Instance auto upgrade"
feature_slug: "instance-auto-upgrade"
latest_feature_date: "2020-08-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-console"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-gcloud"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/pytorch_start_instance"
keywords:
  - "instance"
  - "auto"
  - "upgrade"
  - "deep"
  - "learning"
  - "vm"
  - "images"
  - "automatic"
---

# Instance auto upgrade

Product: Deep Learning VM Images
Coverage: MEDIUM

## Step 02 Summary

Deep Learning VM Images support automatic instance upgrades.

## Extended Definition

Deep Learning VM Images support automatic instance upgrades.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-console](https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-console)
- [https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-gcloud](https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-gcloud)
- [https://docs.cloud.google.com/deep-learning-vm/docs/pytorch_start_instance](https://docs.cloud.google.com/deep-learning-vm/docs/pytorch_start_instance)

## Supporting Pages

### "Quickstart: Create a Deep Learning VM instance by using the Google Cloud\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-console](https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-console)
- Source ID: `site-docs-reference`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Access your new instance Once you've created your Deep Learning VM instance, it starts automatically.
- Create a Deep Learning VM instance by using the Google Cloud console This page shows you how to create a Deep Learning VM Images instance by using Google Cloud Marketplace in the Google Cloud console.
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Stay organized with collections Save and categorize content based on your preferences.
- After the instance is deployed, the Google Cloud console opens the Deployment Manager page where you can manage your Deep Learning VM instances and other deployments.

### "Quickstart: Create a Deep Learning VM instance by using the gcloud CLI \_\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-gcloud](https://docs.cloud.google.com/deep-learning-vm/docs/create-vm-instance-gcloud)
- Source ID: `site-docs-reference`
- Final score: 92
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To view the status of just this instance: gcloud compute instances describe $INSTANCE NAME Access your new instance After you've created your Deep Learning VM instance, it starts automatically.
- Create a Deep Learning VM instance by using the gcloud CLI This page shows you how to create a Deep Learning VM Images instance by using the Google Cloud CLI.
- At the command line, enter the following: export IMAGE FAMILY = "tf-latest-cu92" export ZONE = "us-west1-b" export INSTANCE NAME = "my-new-instance" export INSTANCE TYPE = "n1-standard-8" gcloud compute instances create $ INSTANCE NAME \ -- zone =$ ZONE \ -- image - family =$ IMAGE FAMILY \ -- image - project = deeplearning - platform - release \ -- maintenance - policy = TERMINATE \ -- accelerator = "type=nvidia-tesla-v100,count=8" \ -- machine - type =$ INSTANCE TYPE \ -- boot - disk - size = 120 GB \ -- metadata = "install-nvidia-driver=True" After some time, the VM instance is created and a summary of its configuration is shown.
- To delete the Deep Learning VM instance that you created, at the command line, enter the following command: gcloud compute instances delete $INSTANCE NAME The delete command deletes Compute Engine instances.

### "Create a PyTorch Deep Learning VM instance \_|\_ Deep Learning VM Images\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/pytorch_start_instance](https://docs.cloud.google.com/deep-learning-vm/docs/pytorch_start_instance)
- Source ID: `site-docs-reference`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Create a PyTorch Deep Learning VM instance Stay organized with collections Save and categorize content based on your preferences.
- This page shows you how to create a PyTorch Deep Learning VM Images instance with PyTorch and other tools pre-installed.
- To create a Deep Learning VM instance with the latest PyTorch image family and one or more attached GPUs, enter the following at the command line: export IMAGE FAMILY = "pytorch-latest-gpu" export ZONE = "us-west1-b" export INSTANCE NAME = "my-instance" gcloud compute instances create $ INSTANCE NAME \ -- zone =$ ZONE \ -- image - family =$ IMAGE FAMILY \ -- image - project = deeplearning - platform - release \ -- maintenance - policy = TERMINATE \ -- accelerator = "type=nvidia-tesla-v100,count=1" \ -- metadata = "install-nvidia-driver=True" Options: --image-family must be either pytorch-latest-gpu or pytorch- VERSION - CUDA-VERSION (for example, pytorch-1-10-cu110 ). --image-project must be deeplearning-platform-release . --maintenance-policy must be TERMINATE .
- Without GPUs To create a Deep Learning VM instance with the latest PyTorch image family and a CPU, enter the following at the command line: export IMAGE FAMILY = "pytorch-latest-cpu" export ZONE = "us-west1-b" export INSTANCE NAME = "my-instance" gcloud compute instances create $ INSTANCE NAME \ -- zone =$ ZONE \ -- image - family =$ IMAGE FAMILY \ -- image - project = deeplearning - platform - release Options: --image-family must be either pytorch-latest-cpu or pytorch- VERSION -cpu (for example, pytorch-1-13-cpu ). --image-project must be deeplearning-platform-release .

