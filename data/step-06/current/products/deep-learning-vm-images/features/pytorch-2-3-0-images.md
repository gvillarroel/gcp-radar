---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:52:27.137Z"
product_name: "Deep Learning VM Images"
product_slug: "deep-learning-vm-images"
feature_name: "PyTorch 2.3.0 images"
feature_slug: "pytorch-2-3-0-images"
latest_feature_date: "2024-08-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deep-learning-vm/docs/pytorch_start_instance"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/images"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/introduction"
keywords:
  - "pytorch"
  - "images"
  - "deep"
  - "learning"
  - "vm"
  - "now"
  - "provide"
  - "cuda"
---

# PyTorch 2.3.0 images

Product: Deep Learning VM Images
Coverage: MEDIUM

## Step 02 Summary

Deep Learning VM Images now provide PyTorch 2.3.0 images with CUDA 12.1 and Python 3.10.

## Extended Definition

Deep Learning VM Images now provide PyTorch 2.3.0 images with CUDA 12.1 and Python 3.10.

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
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- To create a Deep Learning VM instance with the latest PyTorch image family and one or more attached GPUs, enter the following at the command line: export IMAGE FAMILY = "pytorch-latest-gpu" export ZONE = "us-west1-b" export INSTANCE NAME = "my-instance" gcloud compute instances create $ INSTANCE NAME \ -- zone =$ ZONE \ -- image - family =$ IMAGE FAMILY \ -- image - project = deeplearning - platform - release \ -- maintenance - policy = TERMINATE \ -- accelerator = "type=nvidia-tesla-v100,count=1" \ -- metadata = "install-nvidia-driver=True" Options: --image-family must be either pytorch-latest-gpu or pytorch- VERSION - CUDA-VERSION (for example, pytorch-1-10-cu110 ). --image-project must be deeplearning-platform-release . --maintenance-policy must be TERMINATE .
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Create a PyTorch Deep Learning VM instance Stay organized with collections Save and categorize content based on your preferences.
- This page shows you how to create a PyTorch Deep Learning VM Images instance with PyTorch and other tools pre-installed.
- Without GPUs To create a Deep Learning VM instance with the latest PyTorch image family and a CPU, enter the following at the command line: export IMAGE FAMILY = "pytorch-latest-cpu" export ZONE = "us-west1-b" export INSTANCE NAME = "my-instance" gcloud compute instances create $ INSTANCE NAME \ -- zone =$ ZONE \ -- image - family =$ IMAGE FAMILY \ -- image - project = deeplearning - platform - release Options: --image-family must be either pytorch-latest-cpu or pytorch- VERSION -cpu (for example, pytorch-1-13-cpu ). --image-project must be deeplearning-platform-release .

### Choose an image \_|\_ Deep Learning VM Images \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/images](https://docs.cloud.google.com/deep-learning-vm/docs/images)
- Source ID: `site-docs-reference`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- To create a Deep Learning VM instance that uses a deprecated image, see the following example gcloud CLI command: gcloud compute instances create deprecated-tf-vm \ --image = projects/deeplearning-platform-release/global/images/ IMAGE NAME \ --machine-type = n1-standard-4 \ --zone = us-east1-c Replace IMAGE NAME with the name of the image, as follows: To use a specific image in the image family, use the image name, for example: pytorch-2-9-cu129-ubuntu-2204-nvidia-580-v20260416 .
- ML framework version Current patch version Supported accelerators End of patch and support date End of availability date Image family name Base-cu129 (Python 3.12 / Ubuntu 24.04) CUDA 12.9 GPU (CUDA 12.9) August 4, 2028 August 4, 2028 common-cu129-ubuntu-2404-nvidia-580- VERSION DATE Base-cu129 (Python 3.12 / Ubuntu 22.04) CUDA 12.9 GPU (CUDA 12.9) August 4, 2028 August 4, 2028 common-cu129-ubuntu-2204-nvidia-580- VERSION DATE Base-cu128 (Python 3.10 / Ubuntu 22.04) CUDA 12.8 GPU (CUDA 12.8) April 13, 2026 April 13, 2027 common-cu128-ubuntu-2204-nvidia-570- VERSION DATE Base-CPU (Python 3.10 / Debian 11) Not applicable (N/A) CPU only Jul 1, 2024 Jul 1, 2025 common-cpu- VERSION DATE -debian-11 Base-cu124 (Python 3.10) CUDA 12.4 GPU (CUDA 12.4) April 1, 2025 April 1, 2026 common-cu124- VERSION DATE -debian-11-py310 Base-cu123 (Python 3.10) CUDA 12.3 GPU (CUDA 12.3) Oct 19, 2024 Oct 19, 2025 common-cu123- VERSION DATE -debian-11-py310 Base-cu122 (Python 3.10) CUDA 12.2 GPU (CUDA 12.2) June 28, 2024 June 28, 2025 common-cu122- VERSION DATE -debian-11-py310 Base-cu121 (Python 3.10) CUDA 12.1 GPU (CUDA 12.1) Feb 28, 2024 Feb 28, 2025 common-cu121- VERSION DATE -debian-11-py310 Base-cu118 (Python 3.10) CUDA 11.8 GPU (CUDA 11.8) Jul 1, 2024 Jul 1, 2025 common-cu118- VERSION DATE -debian-11-py310 Base-cu113 (Python 3.10) CUDA 11.3 GPU (CUDA 11.3) Jan 1, 2024 Jan 1, 2025 common-cu113- VERSION DATE -debian-11-py310 Base-cu113 (Python 3.7) CUDA 11.3 GPU (CUDA 11.3) Sep 1, 2023 Sep 1, 2024 common-cu113- VERSION DATE -py37 Base-cu110 (Python 3.7) CUDA 11.0 GPU (CUDA 11.0) Sep 1, 2023 Sep 1, 2024 common-cu110- VERSION DATE -py37 Base-CPU (Python 3.7) Not applicable (N/A) CPU only Sep 1, 2023 Sep 1, 2024 common-cpu- VERSION DATE -debian-10 PyTorch versions ML framework version Current patch version Supported accelerators End of patch and support date End of availability date Image family name 2.9 (Python 3.12 / Ubuntu 24.04) 2.9.0 CUDA 12.9 August 4, 2028 August 4, 2028 pytorch-2-9-cu129-ubuntu-2404-nvidia-580- VERSION DATE 2.9 (Python 3.12 / Ubuntu 22.04) 2.9.0 CUDA 12.9 August 4, 2028 August 4, 2028 pytorch-2-9-cu129-ubuntu-2204-nvidia-580- VERSION DATE 2.7 (Python 3.10) 2.7.1 CUDA 12.8 April 13, 2026 April 13, 2027 pytorch-2-7-cu128-ubuntu-2204-nvidia-570- VERSION DATE 2.4 (Python 3.10) 2.4.0 CUDA 12.4 Jul 24, 2025 Jul 24, 2026 pytorch-2-4- VERSION DATE -py310 2.3 (Python 3.10) 2.3.0 CUDA 12.1 Apr 24, 2025 Apr 24, 2026 pytorch-2-3- VERSION DATE -py310 2.2 (Python 3.10) 2.2.0 CUDA 12.1 Jan 30, 2025 Jan 30, 2026 pytorch-2-2- VERSION DATE -py310 2.1 (Python 3.10) 2.1.0 CUDA 12.1 Oct 4, 2024 Oct 4, 2025 pytorch-2-1- VERSION DATE -py310 2.0 (Python 3.10) 2.0.0 CUDA 11.8 Mar 15, 2024 Mar 15, 2025 pytorch-2-0- VERSION DATE -py310 1.13 (Python 3.10) 1.13.1 CUDA 11.3 Dec 8, 2023 Dec 8, 2024 pytorch-1-13- VERSION DATE -py310 1.13 1.13.1 CUDA 11.3 Dec 8, 2023 Dec 8, 2024 pytorch-1-13- VERSION DATE -py37 1.12 1.12.1 CUDA 11.3 Sep 1, 2023 Sep 1, 2024 pytorch-1-12- VERSION DATE -py310 TensorFlow versions All TensorFlow images have been deprecated.
- List all available versions using gcloud CLI You can also list all available Deep Learning VM images using the following gcloud CLI command: gcloud compute images list \ --project deeplearning-platform-release \ --format="value(NAME)" \ --no-standard-images Note: The output of this command includes some image family framework types that aren't mentioned in the previous table of family names .
- Replace IMAGE FAMILY with the image family name for which you want to find out the latest version number. gcloud compute images describe-from-family IMAGE FAMILY \ --project deeplearning-platform-release Look for the name field in the output and use the image name given there when creating new instances.

### "Introduction to Deep Learning VM \_|\_ Deep Learning VM Images \_|\_ Google\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/introduction](https://docs.cloud.google.com/deep-learning-vm/docs/introduction)
- Source ID: `site-docs-reference`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- Python 3.10 with the following packages: numpy scipy matplotlib pandas nltk pillow scikit-image opencv-python scikit-learn many more JupyterLab notebook environments for quick prototyping Nvidia packages with the latest Nvidia driver for GPU-enabled instances: CUDA 11. x and 12. x (the version depends on the framework) CuDNN 7. x and NCCL 2. x (the version depends on the CUDA version) Updates Deep Learning VM images are updated regularly with bug fixes and package updates.
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Introduction to Deep Learning VM Stay organized with collections Save and categorize content based on your preferences.
- Deep Learning VM Images is a set of virtual machine images optimized for data science and machine learning tasks.
- Deep Learning VM images are available to support many combinations of framework and processor.

