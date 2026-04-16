---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:52:27.159Z"
product_name: "Deep Learning VM Images"
product_slug: "deep-learning-vm-images"
feature_name: "Open NVIDIA kernel modules"
feature_slug: "open-nvidia-kernel-modules"
latest_feature_date: "2023-06-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deep-learning-vm/docs/creating-images"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/images"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/introduction"
keywords:
  - "open"
  - "nvidia"
  - "kernel"
  - "modules"
  - "gpu"
  - "based"
  - "deep"
  - "learning"
---

# Open NVIDIA kernel modules

Product: Deep Learning VM Images
Coverage: MEDIUM

## Step 02 Summary

GPU-based Deep Learning VM Images now install NVIDIA open kernel modules on A2 and G2 machines instead of proprietary modules.

## Extended Definition

GPU-based Deep Learning VM Images now install NVIDIA open kernel modules on A2 and G2 machines instead of proprietary modules.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deep-learning-vm/docs/creating-images](https://docs.cloud.google.com/deep-learning-vm/docs/creating-images)
- [https://docs.cloud.google.com/deep-learning-vm/docs/images](https://docs.cloud.google.com/deep-learning-vm/docs/images)
- [https://docs.cloud.google.com/deep-learning-vm/docs/introduction](https://docs.cloud.google.com/deep-learning-vm/docs/introduction)

## Supporting Pages

### "Create a new image from an existing Deep Learning VM instance \_|\_ Deep\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/creating-images](https://docs.cloud.google.com/deep-learning-vm/docs/creating-images)
- Source ID: `site-docs-reference`
- Final score: 55
- Re-rank relevance: N/A

Evidence snippets:
- One way to prevent this is to create your own image that is based on one of the Deep Learning VM images, but that already has the NVIDIA drivers preinstalled.
- Creating a TensorFlow Deep Learning VM Instance Creating a PyTorch Deep Learning VM Instance Creating a Deep Learning VM Instance from the Command Line Creating a Deep Learning VM Instance from the Cloud Marketplace Verify NVIDIA driver install Once the instance has booted, verify that the NVIDIA driver has been installed: SSH to your image: gcloud compute ssh " DEPLOYMENT NAME " Run the following command: nvidia-smi If the drivers have been installed, you can continue.
- Run the following at the command line, giving the new image a name and a family name: gcloud compute images create " NEW IMAGE NAME " \ --source-disk DEPLOYMENT NAME \ --source-disk-zone ZONE \ --family NEW FAMILY NAME Once the command is finished running, you have a new image with NVIDIA drivers preinstalled that you can use to create new Deep Learning VM instances.
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Create a new image from an existing Deep Learning VM instance Stay organized with collections Save and categorize content based on your preferences.

### Choose an image \_|\_ Deep Learning VM Images \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/images](https://docs.cloud.google.com/deep-learning-vm/docs/images)
- Source ID: `site-docs-reference`
- Final score: 55
- Re-rank relevance: N/A

Evidence snippets:
- To create a Deep Learning VM instance that uses a deprecated image, see the following example gcloud CLI command: gcloud compute instances create deprecated-tf-vm \ --image = projects/deeplearning-platform-release/global/images/ IMAGE NAME \ --machine-type = n1-standard-4 \ --zone = us-east1-c Replace IMAGE NAME with the name of the image, as follows: To use a specific image in the image family, use the image name, for example: pytorch-2-9-cu129-ubuntu-2204-nvidia-580-v20260416 .
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Choose an image Stay organized with collections Save and categorize content based on your preferences.
- Supported framework versions Deep Learning VM supports each framework version based on a schedule to minimize security vulnerabilities.
- Deciding on an image family Choose a Deep Learning VM image family based on the framework and processor that you need.

### "Introduction to Deep Learning VM \_|\_ Deep Learning VM Images \_|\_ Google\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/introduction](https://docs.cloud.google.com/deep-learning-vm/docs/introduction)
- Source ID: `site-docs-reference`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- Python 3.10 with the following packages: numpy scipy matplotlib pandas nltk pillow scikit-image opencv-python scikit-learn many more JupyterLab notebook environments for quick prototyping Nvidia packages with the latest Nvidia driver for GPU-enabled instances: CUDA 11. x and 12. x (the version depends on the framework) CuDNN 7. x and NCCL 2. x (the version depends on the CUDA version) Updates Deep Learning VM images are updated regularly with bug fixes and package updates.
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Introduction to Deep Learning VM Stay organized with collections Save and categorize content based on your preferences.
- Community support Ask a question about Deep Learning VM on Stack Overflow or join the google-dl-platform Google group to discuss Deep Learning VM.
- What's next To get started using Deep Learning VM, create a new instance using the Cloud Marketplace or using the command line .

