---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:52:27.246Z"
product_name: "Deep Learning VM Images"
product_slug: "deep-learning-vm-images"
feature_name: "NVIDIA driver 450.80.02"
feature_slug: "nvidia-driver-450-80-02"
latest_feature_date: "2021-02-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deep-learning-vm/docs/cli"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/creating-images"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/pytorch_start_instance"
keywords:
  - "nvidia"
  - "driver"
  - "450"
  - "80"
  - "02"
  - "deep"
  - "learning"
  - "vm"
---

# NVIDIA driver 450.80.02

Product: Deep Learning VM Images
Coverage: MEDIUM

## Step 02 Summary

Deep Learning VM Images include NVIDIA driver 450.80.02.

## Extended Definition

Deep Learning VM Images include NVIDIA driver 450.80.02.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deep-learning-vm/docs/cli](https://docs.cloud.google.com/deep-learning-vm/docs/cli)
- [https://docs.cloud.google.com/deep-learning-vm/docs/creating-images](https://docs.cloud.google.com/deep-learning-vm/docs/creating-images)
- [https://docs.cloud.google.com/deep-learning-vm/docs/pytorch_start_instance](https://docs.cloud.google.com/deep-learning-vm/docs/pytorch_start_instance)

## Supporting Pages

### "Create a Deep Learning VM instance from the command line \_|\_ Deep Learning\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/cli](https://docs.cloud.google.com/deep-learning-vm/docs/cli)
- Source ID: `site-docs-reference`
- Final score: 74
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To provision a Deep Learning VM instance with one or more GPUs: export IMAGE FAMILY = "tf-ent-latest-gpu" export ZONE = "us-west1-b" export INSTANCE NAME = "my-instance" gcloud compute instances create $ INSTANCE NAME \ -- zone =$ ZONE \ -- image - family =$ IMAGE FAMILY \ -- image - project = deeplearning - platform - release \ -- maintenance - policy = TERMINATE \ -- accelerator = "type=nvidia-tesla-v100,count=1" \ -- metadata = "install-nvidia-driver=True" Options: --image-family must be one of the GPU-specific image types.
- Creating an instance without GPUs To provision a Deep Learning VM instance with a CPU but no GPU: export IMAGE FAMILY = "tf-ent-latest-cpu" export ZONE = "us-west1-b" export INSTANCE NAME = "my-instance" gcloud compute instances create $ INSTANCE NAME \ -- zone =$ ZONE \ -- image - family =$ IMAGE FAMILY \ -- image - project = deeplearning - platform - release Options: --image-family must be one of the CPU-specific image types.
- Before you begin To use the Google Cloud CLI to create a new Deep Learning VM instance, you must first install and initialize the Google Cloud CLI : Download and install the Google Cloud CLI using the instructions given on Installing Google Cloud CLI .
- To the gcloud compute instances create command, append the following: --preemptible What's next For instructions on connecting to your new Deep Learning VM instance through the Google Cloud console or command line, see Connecting to Instances .

### "Create a new image from an existing Deep Learning VM instance \_|\_ Deep\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/creating-images](https://docs.cloud.google.com/deep-learning-vm/docs/creating-images)
- Source ID: `site-docs-reference`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- Creating a TensorFlow Deep Learning VM Instance Creating a PyTorch Deep Learning VM Instance Creating a Deep Learning VM Instance from the Command Line Creating a Deep Learning VM Instance from the Cloud Marketplace Verify NVIDIA driver install Once the instance has booted, verify that the NVIDIA driver has been installed: SSH to your image: gcloud compute ssh " DEPLOYMENT NAME " Run the following command: nvidia-smi If the drivers have been installed, you can continue.
- Run the following at the command line, giving the new image a name and a family name: gcloud compute images create " NEW IMAGE NAME " \ --source-disk DEPLOYMENT NAME \ --source-disk-zone ZONE \ --family NEW FAMILY NAME Once the command is finished running, you have a new image with NVIDIA drivers preinstalled that you can use to create new Deep Learning VM instances.
- One way to prevent this is to create your own image that is based on one of the Deep Learning VM images, but that already has the NVIDIA drivers preinstalled.
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Create a new image from an existing Deep Learning VM instance Stay organized with collections Save and categorize content based on your preferences.

### "Create a PyTorch Deep Learning VM instance \_|\_ Deep Learning VM Images\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/pytorch_start_instance](https://docs.cloud.google.com/deep-learning-vm/docs/pytorch_start_instance)
- Source ID: `site-docs-reference`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- To create a Deep Learning VM instance with the latest PyTorch image family and one or more attached GPUs, enter the following at the command line: export IMAGE FAMILY = "pytorch-latest-gpu" export ZONE = "us-west1-b" export INSTANCE NAME = "my-instance" gcloud compute instances create $ INSTANCE NAME \ -- zone =$ ZONE \ -- image - family =$ IMAGE FAMILY \ -- image - project = deeplearning - platform - release \ -- maintenance - policy = TERMINATE \ -- accelerator = "type=nvidia-tesla-v100,count=1" \ -- metadata = "install-nvidia-driver=True" Options: --image-family must be either pytorch-latest-gpu or pytorch- VERSION - CUDA-VERSION (for example, pytorch-1-10-cu110 ). --image-project must be deeplearning-platform-release . --maintenance-policy must be TERMINATE .
- Without GPUs To create a Deep Learning VM instance with the latest PyTorch image family and a CPU, enter the following at the command line: export IMAGE FAMILY = "pytorch-latest-cpu" export ZONE = "us-west1-b" export INSTANCE NAME = "my-instance" gcloud compute instances create $ INSTANCE NAME \ -- zone =$ ZONE \ -- image - family =$ IMAGE FAMILY \ -- image - project = deeplearning - platform - release Options: --image-family must be either pytorch-latest-cpu or pytorch- VERSION -cpu (for example, pytorch-1-13-cpu ). --image-project must be deeplearning-platform-release .
- Creating a PyTorch Deep Learning VM instance from the command line To use the Google Cloud CLI to create a new a Deep Learning VM instance, you must first install and initialize the Google Cloud CLI : Download and install the Google Cloud CLI using the instructions given on Installing Google Cloud CLI .
- Creating a PyTorch Deep Learning VM instance from the Cloud Marketplace To create a PyTorch Deep Learning VM instance from the Cloud Marketplace, complete the following steps: Go to the Deep Learning VM Cloud Marketplace page in the Google Cloud console.

