---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:52:27.232Z"
product_name: "Deep Learning VM Images"
product_slug: "deep-learning-vm-images"
feature_name: "Debian 10 images"
feature_slug: "debian-10-images"
latest_feature_date: "2021-06-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deep-learning-vm/docs/images"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/shared-responsibility"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/introduction"
keywords:
  - "debian"
  - "10"
  - "images"
  - "deep"
  - "learning"
  - "vm"
  - "include"
  - "refreshed"
---

# Debian 10 images

Product: Deep Learning VM Images
Coverage: MEDIUM

## Step 02 Summary

Deep Learning VM Images include refreshed Debian 10-based images; Deep Learning VM Images provide Debian 10-based images.

## Extended Definition

Deep Learning VM Images include refreshed Debian 10-based images; Deep Learning VM Images provide Debian 10-based images.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deep-learning-vm/docs/images](https://docs.cloud.google.com/deep-learning-vm/docs/images)
- [https://docs.cloud.google.com/deep-learning-vm/docs/shared-responsibility](https://docs.cloud.google.com/deep-learning-vm/docs/shared-responsibility)
- [https://docs.cloud.google.com/deep-learning-vm/docs/introduction](https://docs.cloud.google.com/deep-learning-vm/docs/introduction)

## Supporting Pages

### Choose an image \_|\_ Deep Learning VM Images \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/images](https://docs.cloud.google.com/deep-learning-vm/docs/images)
- Source ID: `site-docs-reference`
- Final score: 47
- Re-rank relevance: N/A

Evidence snippets:
- List all available versions using gcloud CLI You can also list all available Deep Learning VM images using the following gcloud CLI command: gcloud compute images list \ --project deeplearning-platform-release \ --format="value(NAME)" \ --no-standard-images Note: The output of this command includes some image family framework types that aren't mentioned in the previous table of family names .
- To create a Deep Learning VM instance that uses a deprecated image, see the following example gcloud CLI command: gcloud compute instances create deprecated-tf-vm \ --image = projects/deeplearning-platform-release/global/images/ IMAGE NAME \ --machine-type = n1-standard-4 \ --zone = us-east1-c Replace IMAGE NAME with the name of the image, as follows: To use a specific image in the image family, use the image name, for example: pytorch-2-9-cu129-ubuntu-2204-nvidia-580-v20260416 .
- Replace IMAGE FAMILY with the image family name for which you want to find out the latest version number. gcloud compute images describe-from-family IMAGE FAMILY \ --project deeplearning-platform-release Look for the name field in the output and use the image name given there when creating new instances.
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Choose an image Stay organized with collections Save and categorize content based on your preferences.

### "Deep Learning VM shared responsibility \_|\_ Deep Learning VM Images \_\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/shared-responsibility](https://docs.cloud.google.com/deep-learning-vm/docs/shared-responsibility)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- The customer's security responsibilities include the following: Use the latest versions of Deep Learning VM Containers and VM Images : Deep Learning VM provides prebuilt containers and VM images to simplify the use of its services.
- Google's security and compliance responsibilities in providing Deep Learning VM include the following: Protect the infrastructure : Google is responsible for providing secure infrastructure for its services, including physical security of data centers, network security, and application security.
- Home Documentation Compute Compute Engine Deep Learning VM Images Resources Send feedback Deep Learning VM shared responsibility Stay organized with collections Save and categorize content based on your preferences.
- Secure applications : You are responsible for securing your own applications running on the Deep Learning VM platform, including implementing secure coding practices and regularly testing for vulnerabilities.

### "Introduction to Deep Learning VM \_|\_ Deep Learning VM Images \_|\_ Google\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/introduction](https://docs.cloud.google.com/deep-learning-vm/docs/introduction)
- Source ID: `site-docs-reference`
- Final score: 29
- Re-rank relevance: N/A

Evidence snippets:
- Python 3.10 with the following packages: numpy scipy matplotlib pandas nltk pillow scikit-image opencv-python scikit-learn many more JupyterLab notebook environments for quick prototyping Nvidia packages with the latest Nvidia driver for GPU-enabled instances: CUDA 11. x and 12. x (the version depends on the framework) CuDNN 7. x and NCCL 2. x (the version depends on the CUDA version) Updates Deep Learning VM images are updated regularly with bug fixes and package updates.
- Pre-installed packages Images are based on the Debian 11 and Ubuntu 22.04 operating systems, and these images can be configured to include the following: Specific frameworks (for example, TensorFlow) and supporting packages.
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Introduction to Deep Learning VM Stay organized with collections Save and categorize content based on your preferences.
- Deep Learning VM Images is a set of virtual machine images optimized for data science and machine learning tasks.

