---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:52:27.175Z"
product_name: "Deep Learning VM Images"
product_slug: "deep-learning-vm-images"
feature_name: "TensorFlow 2.6 GPU images"
feature_slug: "tensorflow-2-6-gpu-images"
latest_feature_date: "2023-03-31"
deprecation_date: "2024-05-17"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deep-learning-vm/docs/tensorflow_start_instance"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/images"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/framework-support-policy"
keywords:
  - "tensorflow"
  - "gpu"
  - "images"
  - "deprecated"
  - "will"
  - "receive"
  - "no"
  - "further"
---

# TensorFlow 2.6 GPU images

Product: Deep Learning VM Images
Coverage: MEDIUM

## Step 02 Summary

TensorFlow 2.6 GPU images are deprecated and will receive no further updates; Deep Learning VM Images now provide TensorFlow 2.6 GPU images on Debian 11 with CUDA 11.3 and Python 3.9; deprecated on 2024-05-17.

## Extended Definition

TensorFlow 2.6 GPU images are deprecated and will receive no further updates; Deep Learning VM Images now provide TensorFlow 2.6 GPU images on Debian 11 with CUDA 11.3 and Python 3.9; deprecated on 2024-05-17.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deep-learning-vm/docs/tensorflow_start_instance](https://docs.cloud.google.com/deep-learning-vm/docs/tensorflow_start_instance)
- [https://docs.cloud.google.com/deep-learning-vm/docs/images](https://docs.cloud.google.com/deep-learning-vm/docs/images)
- [https://docs.cloud.google.com/deep-learning-vm/docs/framework-support-policy](https://docs.cloud.google.com/deep-learning-vm/docs/framework-support-policy)

## Supporting Pages

### "Create a TensorFlow Deep Learning VM instance \_|\_ Deep Learning VM Images\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/tensorflow_start_instance](https://docs.cloud.google.com/deep-learning-vm/docs/tensorflow_start_instance)
- Source ID: `site-docs-reference`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Create a TensorFlow Deep Learning VM instance Stay organized with collections Save and categorize content based on your preferences.
- This page shows you how to create a TensorFlow Deep Learning VM Images instance with TensorFlow and other tools pre-installed.
- To provision a Deep Learning VM instance with one or more GPUs: export IMAGE FAMILY = "tf-ent-latest-gpu" export ZONE = "us-west1-b" export INSTANCE NAME = "my-instance" gcloud compute instances create $ INSTANCE NAME \ -- zone =$ ZONE \ -- image - family =$ IMAGE FAMILY \ -- image - project = deeplearning - platform - release \ -- maintenance - policy = TERMINATE \ -- accelerator = "type=nvidia-tesla-v100,count=1" \ -- metadata = "install-nvidia-driver=True" Options: --image-family must be one of the following: tf-ent-latest-gpu to get the latest TensorFlow Enterprise 2 image An earlier TensorFlow or TensorFlow Enterprise image family name (see Choosing an image ) --image-project must be deeplearning-platform-release . --maintenance-policy must be TERMINATE .
- Without GPUs To provision a Deep Learning VM instance without a GPU: export IMAGE FAMILY = "tf-ent-latest-cpu" export ZONE = "us-west1-b" export INSTANCE NAME = "my-instance" gcloud compute instances create $ INSTANCE NAME \ -- zone =$ ZONE \ -- image - family =$ IMAGE FAMILY \ -- image - project = deeplearning - platform - release Options: --image-family must be one of the following: tf-ent-latest-cpu to get the latest TensorFlow Enterprise 2 image An earlier TensorFlow or TensorFlow Enterprise image family name (see Choosing an image ) --image-project must be deeplearning-platform-release .

### "Deep Learning VM framework support policy \_|\_ Deep Learning VM Images\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/framework-support-policy](https://docs.cloud.google.com/deep-learning-vm/docs/framework-support-policy)
- Source ID: `site-docs-reference`
- Final score: 67
- Re-rank relevance: N/A

Evidence snippets:
- For example, if we support TensorFlow 2.7, and TensorFlow releases 2.7.1 to address bugs, we will release a new image version.
- Services may block the creation of new resources using these images, and the images will no longer be available for download.
- Image deprecation When images reach the End-of-patch and support date , they are deprecated.
- Home Documentation Compute Compute Engine Deep Learning VM Images Resources Send feedback Deep Learning VM framework support policy Stay organized with collections Save and categorize content based on your preferences.

### Choose an image \_|\_ Deep Learning VM Images \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/images](https://docs.cloud.google.com/deep-learning-vm/docs/images)
- Source ID: `site-docs-reference`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- ML framework version Current patch version Supported accelerators End of patch and support date End of availability date Image family name Base-cu129 (Python 3.12 / Ubuntu 24.04) CUDA 12.9 GPU (CUDA 12.9) August 4, 2028 August 4, 2028 common-cu129-ubuntu-2404-nvidia-580- VERSION DATE Base-cu129 (Python 3.12 / Ubuntu 22.04) CUDA 12.9 GPU (CUDA 12.9) August 4, 2028 August 4, 2028 common-cu129-ubuntu-2204-nvidia-580- VERSION DATE Base-cu128 (Python 3.10 / Ubuntu 22.04) CUDA 12.8 GPU (CUDA 12.8) April 13, 2026 April 13, 2027 common-cu128-ubuntu-2204-nvidia-570- VERSION DATE Base-CPU (Python 3.10 / Debian 11) Not applicable (N/A) CPU only Jul 1, 2024 Jul 1, 2025 common-cpu- VERSION DATE -debian-11 Base-cu124 (Python 3.10) CUDA 12.4 GPU (CUDA 12.4) April 1, 2025 April 1, 2026 common-cu124- VERSION DATE -debian-11-py310 Base-cu123 (Python 3.10) CUDA 12.3 GPU (CUDA 12.3) Oct 19, 2024 Oct 19, 2025 common-cu123- VERSION DATE -debian-11-py310 Base-cu122 (Python 3.10) CUDA 12.2 GPU (CUDA 12.2) June 28, 2024 June 28, 2025 common-cu122- VERSION DATE -debian-11-py310 Base-cu121 (Python 3.10) CUDA 12.1 GPU (CUDA 12.1) Feb 28, 2024 Feb 28, 2025 common-cu121- VERSION DATE -debian-11-py310 Base-cu118 (Python 3.10) CUDA 11.8 GPU (CUDA 11.8) Jul 1, 2024 Jul 1, 2025 common-cu118- VERSION DATE -debian-11-py310 Base-cu113 (Python 3.10) CUDA 11.3 GPU (CUDA 11.3) Jan 1, 2024 Jan 1, 2025 common-cu113- VERSION DATE -debian-11-py310 Base-cu113 (Python 3.7) CUDA 11.3 GPU (CUDA 11.3) Sep 1, 2023 Sep 1, 2024 common-cu113- VERSION DATE -py37 Base-cu110 (Python 3.7) CUDA 11.0 GPU (CUDA 11.0) Sep 1, 2023 Sep 1, 2024 common-cu110- VERSION DATE -py37 Base-CPU (Python 3.7) Not applicable (N/A) CPU only Sep 1, 2023 Sep 1, 2024 common-cpu- VERSION DATE -debian-10 PyTorch versions ML framework version Current patch version Supported accelerators End of patch and support date End of availability date Image family name 2.9 (Python 3.12 / Ubuntu 24.04) 2.9.0 CUDA 12.9 August 4, 2028 August 4, 2028 pytorch-2-9-cu129-ubuntu-2404-nvidia-580- VERSION DATE 2.9 (Python 3.12 / Ubuntu 22.04) 2.9.0 CUDA 12.9 August 4, 2028 August 4, 2028 pytorch-2-9-cu129-ubuntu-2204-nvidia-580- VERSION DATE 2.7 (Python 3.10) 2.7.1 CUDA 12.8 April 13, 2026 April 13, 2027 pytorch-2-7-cu128-ubuntu-2204-nvidia-570- VERSION DATE 2.4 (Python 3.10) 2.4.0 CUDA 12.4 Jul 24, 2025 Jul 24, 2026 pytorch-2-4- VERSION DATE -py310 2.3 (Python 3.10) 2.3.0 CUDA 12.1 Apr 24, 2025 Apr 24, 2026 pytorch-2-3- VERSION DATE -py310 2.2 (Python 3.10) 2.2.0 CUDA 12.1 Jan 30, 2025 Jan 30, 2026 pytorch-2-2- VERSION DATE -py310 2.1 (Python 3.10) 2.1.0 CUDA 12.1 Oct 4, 2024 Oct 4, 2025 pytorch-2-1- VERSION DATE -py310 2.0 (Python 3.10) 2.0.0 CUDA 11.8 Mar 15, 2024 Mar 15, 2025 pytorch-2-0- VERSION DATE -py310 1.13 (Python 3.10) 1.13.1 CUDA 11.3 Dec 8, 2023 Dec 8, 2024 pytorch-1-13- VERSION DATE -py310 1.13 1.13.1 CUDA 11.3 Dec 8, 2023 Dec 8, 2024 pytorch-1-13- VERSION DATE -py37 1.12 1.12.1 CUDA 11.3 Sep 1, 2023 Sep 1, 2024 pytorch-1-12- VERSION DATE -py310 TensorFlow versions All TensorFlow images have been deprecated.
- ML framework version Current patch version Supported accelerators End of patch and support date End of availability date Image family name 2.17 (Python 3.10) 2.17.0 CPU only Jul 11, 2025 Jul 11, 2026 tf-2-17-cpu- VERSION DATE -py310 2.17 (Python 3.10) 2.17.0 GPU (CUDA 12.3) Jul 11, 2025 Ju1 11, 2026 tf-2-17-cu123- VERSION DATE -py310 2.16 (Python 3.10) 2.16.2 CPU only Jun 28, 2025 Jun 28, 2026 tf-2-16-cpu- VERSION DATE -py310 2.16 (Python 3.10) 2.16.2 GPU (CUDA 12.3) Jun 28, 2025 Jun 28, 2026 tf-2-16-cu123- VERSION DATE -py310 2.15 (Python 3.10) 2.15.0 CPU only Nov 14, 2024 Nov 14, 2025 tf-2-15-cpu- VERSION DATE -py310 2.15 (Python 3.10) 2.15.0 GPU (CUDA 12.2) Nov 14, 2024 Nov 14, 2025 tf-2-15-cu122- VERSION DATE -py310 2.14 (Python 3.10) 2.14.0 CPU only Sep 26, 2024 Sep 26, 2025 tf-2-14-cpu- VERSION DATE -py310 2.14 (Python 3.10) 2.14.0 GPU (CUDA 11.8) Sep 26, 2024 Sep 26, 2025 tf-2-14-cu118- VERSION DATE -py310 2.13 (Python 3.10) 2.13.0 CPU only Jul 5, 2024 Jul 5, 2025 tf-2-13-cpu- VERSION DATE -py310 2.13 (Python 3.10) 2.13.0 GPU (CUDA 11.8) Jul 5, 2024 Jul 5, 2025 tf-2-13-cu118- VERSION DATE -py310 2.12 (Python 3.10) 2.12.0 CPU only June 30, 2024 June 30, 2025 tf-2-12-cpu- VERSION DATE -py310 2.12 (Python 3.10) 2.12.0 GPU (CUDA 11.8) June 30, 2024 June 30, 2025 tf-2-12-cu113- VERSION DATE -py310 2.11 (Python 3.10) 2.11.0 CPU only Nov 15, 2022 Nov 15, 2023 tf-2-11-cpu- VERSION DATE -py310 2.11 (Python 3.10) 2.11.0 GPU (CUDA 11.3) Nov 15, 2022 Nov 15, 2023 tf-2-11-cu113- VERSION DATE -py310 2.11 2.11.0 CPU only Nov 15, 2023 Nov 15, 2024 tf-2-11-cpu- VERSION DATE -py37 2.11 2.11.0 GPU (CUDA 11.3) Nov 15, 2023 Nov 15, 2024 tf-2-11-cu113- VERSION DATE -py37 2.10 2.10.1 CPU only Nov 15, 2023 Nov 15, 2024 tf-2-10-cpu- VERSION DATE -py37 2.10 2.10.1 GPU (CUDA 11.3) Nov 15, 2023 Nov 15, 2024 tf-2-10-cu113- VERSION DATE -py37 2.9 2.9.3 CPU only Nov 15, 2023 Nov 15, 2024 tf-2-9-cpu- VERSION DATE -py37 2.9 2.9.3 GPU (CUDA 11.3) Nov 15, 2023 Nov 15, 2024 tf-2-9-cu113- VERSION DATE -py37 2.8 2.8.4 CPU only Nov 15, 2023 Nov 15, 2024 tf-2-8-cpu- VERSION DATE -py37 2.8 2.8.4 GPU (CUDA 11.3) Nov 15, 2023 Nov 15, 2024 tf-2-8-cu113- VERSION DATE -py37 2.6 (py39) 2.6.5 CPU only Sep 1, 2023 Sep 1, 2024 tf-2-6-cpu- VERSION DATE -py39 2.6 (py39) 2.6.5 GPU (CUDA 11.3) Sep 1, 2023 Sep 1, 2024 tf-2-6-cu110- VERSION DATE -py39 2.6 (py37) 2.6.5 CPU only Sep 1, 2023 Sep 1, 2024 tf-2-6-cpu- VERSION DATE -py37 2.6 (py37) 2.6.5 GPU (CUDA 11.3) Sep 1, 2023 Sep 1, 2024 tf-2-6-cu110- VERSION DATE -py37 2.3 2.3.4 CPU only Sep 1, 2023 Sep 1, 2024 tf-2-3-cpu 2.3 2.3.4 GPU (CUDA 11.3) Sep 1, 2023 Sep 1, 2024 tf-2-3-cu110- VERSION DATE After deprecation When images reach the End-of-patch and support date , they are deprecated.
- To create a Deep Learning VM instance that uses a deprecated image, see the following example gcloud CLI command: gcloud compute instances create deprecated-tf-vm \ --image = projects/deeplearning-platform-release/global/images/ IMAGE NAME \ --machine-type = n1-standard-4 \ --zone = us-east1-c Replace IMAGE NAME with the name of the image, as follows: To use a specific image in the image family, use the image name, for example: pytorch-2-9-cu129-ubuntu-2204-nvidia-580-v20260416 .
- To list images from an image family name after its end of patch and support date, include the --show-deprecated flag in your gcloud compute images list command, or select Show deprecated images when creating an instance in the Google Cloud console.

