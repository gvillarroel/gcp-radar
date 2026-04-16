---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:52:27.209Z"
product_name: "Deep Learning VM Images"
product_slug: "deep-learning-vm-images"
feature_name: "PyTorch XLA 1.10"
feature_slug: "pytorch-xla-1-10"
latest_feature_date: "2021-11-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deep-learning-vm/docs/pytorch_start_instance"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/images"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/introduction"
keywords:
  - "pytorch"
  - "xla"
  - "10"
  - "deep"
  - "learning"
  - "vm"
  - "images"
  - "released"
---

# PyTorch XLA 1.10

Product: Deep Learning VM Images
Coverage: MEDIUM

## Step 02 Summary

Deep Learning VM Images released PyTorch XLA 1.10.

## Extended Definition

Deep Learning VM Images released PyTorch XLA 1.10.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deep-learning-vm/docs/pytorch_start_instance](https://docs.cloud.google.com/deep-learning-vm/docs/pytorch_start_instance)
- [https://docs.cloud.google.com/deep-learning-vm/docs/images](https://docs.cloud.google.com/deep-learning-vm/docs/images)
- [https://docs.cloud.google.com/deep-learning-vm/docs/introduction](https://docs.cloud.google.com/deep-learning-vm/docs/introduction)

## Supporting Pages

### "Create a PyTorch Deep Learning VM instance \_|\_ Deep Learning VM Images\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/pytorch_start_instance](https://docs.cloud.google.com/deep-learning-vm/docs/pytorch_start_instance)
- Source ID: `site-docs-reference`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Create a PyTorch Deep Learning VM instance Stay organized with collections Save and categorize content based on your preferences.
- This page shows you how to create a PyTorch Deep Learning VM Images instance with PyTorch and other tools pre-installed.
- To create a Deep Learning VM instance with the latest PyTorch image family and one or more attached GPUs, enter the following at the command line: export IMAGE FAMILY = "pytorch-latest-gpu" export ZONE = "us-west1-b" export INSTANCE NAME = "my-instance" gcloud compute instances create $ INSTANCE NAME \ -- zone =$ ZONE \ -- image - family =$ IMAGE FAMILY \ -- image - project = deeplearning - platform - release \ -- maintenance - policy = TERMINATE \ -- accelerator = "type=nvidia-tesla-v100,count=1" \ -- metadata = "install-nvidia-driver=True" Options: --image-family must be either pytorch-latest-gpu or pytorch- VERSION - CUDA-VERSION (for example, pytorch-1-10-cu110 ). --image-project must be deeplearning-platform-release . --maintenance-policy must be TERMINATE .
- Without GPUs To create a Deep Learning VM instance with the latest PyTorch image family and a CPU, enter the following at the command line: export IMAGE FAMILY = "pytorch-latest-cpu" export ZONE = "us-west1-b" export INSTANCE NAME = "my-instance" gcloud compute instances create $ INSTANCE NAME \ -- zone =$ ZONE \ -- image - family =$ IMAGE FAMILY \ -- image - project = deeplearning - platform - release Options: --image-family must be either pytorch-latest-cpu or pytorch- VERSION -cpu (for example, pytorch-1-13-cpu ). --image-project must be deeplearning-platform-release .

### Choose an image \_|\_ Deep Learning VM Images \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/images](https://docs.cloud.google.com/deep-learning-vm/docs/images)
- Source ID: `site-docs-reference`
- Final score: 35
- Re-rank relevance: N/A

Evidence snippets:
- To create a Deep Learning VM instance that uses a deprecated image, see the following example gcloud CLI command: gcloud compute instances create deprecated-tf-vm \ --image = projects/deeplearning-platform-release/global/images/ IMAGE NAME \ --machine-type = n1-standard-4 \ --zone = us-east1-c Replace IMAGE NAME with the name of the image, as follows: To use a specific image in the image family, use the image name, for example: pytorch-2-9-cu129-ubuntu-2204-nvidia-580-v20260416 .
- List all available versions using gcloud CLI You can also list all available Deep Learning VM images using the following gcloud CLI command: gcloud compute images list \ --project deeplearning-platform-release \ --format="value(NAME)" \ --no-standard-images Note: The output of this command includes some image family framework types that aren't mentioned in the previous table of family names .
- Replace IMAGE FAMILY with the image family name for which you want to find out the latest version number. gcloud compute images describe-from-family IMAGE FAMILY \ --project deeplearning-platform-release Look for the name field in the output and use the image name given there when creating new instances.
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Choose an image Stay organized with collections Save and categorize content based on your preferences.

### "Introduction to Deep Learning VM \_|\_ Deep Learning VM Images \_|\_ Google\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/introduction](https://docs.cloud.google.com/deep-learning-vm/docs/introduction)
- Source ID: `site-docs-reference`
- Final score: 21
- Re-rank relevance: N/A

Evidence snippets:
- Python 3.10 with the following packages: numpy scipy matplotlib pandas nltk pillow scikit-image opencv-python scikit-learn many more JupyterLab notebook environments for quick prototyping Nvidia packages with the latest Nvidia driver for GPU-enabled instances: CUDA 11. x and 12. x (the version depends on the framework) CuDNN 7. x and NCCL 2. x (the version depends on the CUDA version) Updates Deep Learning VM images are updated regularly with bug fixes and package updates.
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Introduction to Deep Learning VM Stay organized with collections Save and categorize content based on your preferences.
- Deep Learning VM Images is a set of virtual machine images optimized for data science and machine learning tasks.
- Deep Learning VM images are available to support many combinations of framework and processor.

