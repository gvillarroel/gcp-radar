---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:52:27.145Z"
product_name: "Deep Learning VM Images"
product_slug: "deep-learning-vm-images"
feature_name: "Legacy GPU image families"
feature_slug: "legacy-gpu-image-families"
latest_feature_date: "2024-03-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deep-learning-vm/docs/concepts-images"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/images"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/tensorflow_start_instance"
keywords:
  - "legacy"
  - "gpu"
  - "image"
  - "families"
  - "were"
  - "restored"
  - "tensorflow"
  - "12"
---

# Legacy GPU image families

Product: Deep Learning VM Images
Coverage: MEDIUM

## Step 02 Summary

Legacy GPU image families were restored for TensorFlow 2.12 through 2.14 and for PyTorch 2.0.

## Extended Definition

Legacy GPU image families were restored for TensorFlow 2.12 through 2.14 and for PyTorch 2.0.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deep-learning-vm/docs/concepts-images](https://docs.cloud.google.com/deep-learning-vm/docs/concepts-images)
- [https://docs.cloud.google.com/deep-learning-vm/docs/images](https://docs.cloud.google.com/deep-learning-vm/docs/images)
- [https://docs.cloud.google.com/deep-learning-vm/docs/tensorflow_start_instance](https://docs.cloud.google.com/deep-learning-vm/docs/tensorflow_start_instance)

## Supporting Pages

### "Images, image families, and instances \_|\_ Deep Learning VM Images \_|\_\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/concepts-images](https://docs.cloud.google.com/deep-learning-vm/docs/concepts-images)
- Source ID: `site-docs-reference`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- They are listed here, according to each one's main installed framework: TensorFlow Enterprise family, with or without GPU TensorFlow family, with or without GPU PyTorch family, with or without GPU R experimental family A base, or "common" image family to which you can add your preferred framework, with or without GPU TensorFlow Enterprise is a distribution of TensorFlow that has been optimized to run on Google Cloud and includes Long Term Version Support .
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Images, image families, and instances Stay organized with collections Save and categorize content based on your preferences.
- Image families An image family is a set of images that are preconfigured for a specific purpose or using a specific architecture.
- It is important to distinguish between images , image families , and instances .

### Choose an image \_|\_ Deep Learning VM Images \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/images](https://docs.cloud.google.com/deep-learning-vm/docs/images)
- Source ID: `site-docs-reference`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- ML framework version Current patch version Supported accelerators End of patch and support date End of availability date Image family name Base-cu129 (Python 3.12 / Ubuntu 24.04) CUDA 12.9 GPU (CUDA 12.9) August 4, 2028 August 4, 2028 common-cu129-ubuntu-2404-nvidia-580- VERSION DATE Base-cu129 (Python 3.12 / Ubuntu 22.04) CUDA 12.9 GPU (CUDA 12.9) August 4, 2028 August 4, 2028 common-cu129-ubuntu-2204-nvidia-580- VERSION DATE Base-cu128 (Python 3.10 / Ubuntu 22.04) CUDA 12.8 GPU (CUDA 12.8) April 13, 2026 April 13, 2027 common-cu128-ubuntu-2204-nvidia-570- VERSION DATE Base-CPU (Python 3.10 / Debian 11) Not applicable (N/A) CPU only Jul 1, 2024 Jul 1, 2025 common-cpu- VERSION DATE -debian-11 Base-cu124 (Python 3.10) CUDA 12.4 GPU (CUDA 12.4) April 1, 2025 April 1, 2026 common-cu124- VERSION DATE -debian-11-py310 Base-cu123 (Python 3.10) CUDA 12.3 GPU (CUDA 12.3) Oct 19, 2024 Oct 19, 2025 common-cu123- VERSION DATE -debian-11-py310 Base-cu122 (Python 3.10) CUDA 12.2 GPU (CUDA 12.2) June 28, 2024 June 28, 2025 common-cu122- VERSION DATE -debian-11-py310 Base-cu121 (Python 3.10) CUDA 12.1 GPU (CUDA 12.1) Feb 28, 2024 Feb 28, 2025 common-cu121- VERSION DATE -debian-11-py310 Base-cu118 (Python 3.10) CUDA 11.8 GPU (CUDA 11.8) Jul 1, 2024 Jul 1, 2025 common-cu118- VERSION DATE -debian-11-py310 Base-cu113 (Python 3.10) CUDA 11.3 GPU (CUDA 11.3) Jan 1, 2024 Jan 1, 2025 common-cu113- VERSION DATE -debian-11-py310 Base-cu113 (Python 3.7) CUDA 11.3 GPU (CUDA 11.3) Sep 1, 2023 Sep 1, 2024 common-cu113- VERSION DATE -py37 Base-cu110 (Python 3.7) CUDA 11.0 GPU (CUDA 11.0) Sep 1, 2023 Sep 1, 2024 common-cu110- VERSION DATE -py37 Base-CPU (Python 3.7) Not applicable (N/A) CPU only Sep 1, 2023 Sep 1, 2024 common-cpu- VERSION DATE -debian-10 PyTorch versions ML framework version Current patch version Supported accelerators End of patch and support date End of availability date Image family name 2.9 (Python 3.12 / Ubuntu 24.04) 2.9.0 CUDA 12.9 August 4, 2028 August 4, 2028 pytorch-2-9-cu129-ubuntu-2404-nvidia-580- VERSION DATE 2.9 (Python 3.12 / Ubuntu 22.04) 2.9.0 CUDA 12.9 August 4, 2028 August 4, 2028 pytorch-2-9-cu129-ubuntu-2204-nvidia-580- VERSION DATE 2.7 (Python 3.10) 2.7.1 CUDA 12.8 April 13, 2026 April 13, 2027 pytorch-2-7-cu128-ubuntu-2204-nvidia-570- VERSION DATE 2.4 (Python 3.10) 2.4.0 CUDA 12.4 Jul 24, 2025 Jul 24, 2026 pytorch-2-4- VERSION DATE -py310 2.3 (Python 3.10) 2.3.0 CUDA 12.1 Apr 24, 2025 Apr 24, 2026 pytorch-2-3- VERSION DATE -py310 2.2 (Python 3.10) 2.2.0 CUDA 12.1 Jan 30, 2025 Jan 30, 2026 pytorch-2-2- VERSION DATE -py310 2.1 (Python 3.10) 2.1.0 CUDA 12.1 Oct 4, 2024 Oct 4, 2025 pytorch-2-1- VERSION DATE -py310 2.0 (Python 3.10) 2.0.0 CUDA 11.8 Mar 15, 2024 Mar 15, 2025 pytorch-2-0- VERSION DATE -py310 1.13 (Python 3.10) 1.13.1 CUDA 11.3 Dec 8, 2023 Dec 8, 2024 pytorch-1-13- VERSION DATE -py310 1.13 1.13.1 CUDA 11.3 Dec 8, 2023 Dec 8, 2024 pytorch-1-13- VERSION DATE -py37 1.12 1.12.1 CUDA 11.3 Sep 1, 2023 Sep 1, 2024 pytorch-1-12- VERSION DATE -py310 TensorFlow versions All TensorFlow images have been deprecated.
- Image families are named in the format FRAMEWORK - CUDA VERSION - OS , where FRAMEWORK is the target library, CUDA VERSION is the version of the CUDA stack, and OS denotes the operation system with the pre-installed NVIDIA driver.
- PyTorch images PyTorch image families provide a Google Cloud optimized distribution of PyTorch and PyTorch Lightning.
- The following table lists the most recent versions of image families, organized by framework type.

### "Create a TensorFlow Deep Learning VM instance \_|\_ Deep Learning VM Images\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/tensorflow_start_instance](https://docs.cloud.google.com/deep-learning-vm/docs/tensorflow_start_instance)
- Source ID: `site-docs-reference`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- To provision a Deep Learning VM instance with one or more GPUs: export IMAGE FAMILY = "tf-ent-latest-gpu" export ZONE = "us-west1-b" export INSTANCE NAME = "my-instance" gcloud compute instances create $ INSTANCE NAME \ -- zone =$ ZONE \ -- image - family =$ IMAGE FAMILY \ -- image - project = deeplearning - platform - release \ -- maintenance - policy = TERMINATE \ -- accelerator = "type=nvidia-tesla-v100,count=1" \ -- metadata = "install-nvidia-driver=True" Options: --image-family must be one of the following: tf-ent-latest-gpu to get the latest TensorFlow Enterprise 2 image An earlier TensorFlow or TensorFlow Enterprise image family name (see Choosing an image ) --image-project must be deeplearning-platform-release . --maintenance-policy must be TERMINATE .
- Without GPUs To provision a Deep Learning VM instance without a GPU: export IMAGE FAMILY = "tf-ent-latest-cpu" export ZONE = "us-west1-b" export INSTANCE NAME = "my-instance" gcloud compute instances create $ INSTANCE NAME \ -- zone =$ ZONE \ -- image - family =$ IMAGE FAMILY \ -- image - project = deeplearning - platform - release Options: --image-family must be one of the following: tf-ent-latest-cpu to get the latest TensorFlow Enterprise 2 image An earlier TensorFlow or TensorFlow Enterprise image family name (see Choosing an image ) --image-project must be deeplearning-platform-release .
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Create a TensorFlow Deep Learning VM instance Stay organized with collections Save and categorize content based on your preferences.
- This page shows you how to create a TensorFlow Deep Learning VM Images instance with TensorFlow and other tools pre-installed.

