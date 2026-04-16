---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:52:27.318Z"
product_name: "Deep Learning VM Images"
product_slug: "deep-learning-vm-images"
feature_name: "Chainer experimental images"
feature_slug: "chainer-experimental-images"
latest_feature_date: "2018-08-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deep-learning-vm/docs/framework-support-policy"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/concepts-images"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/images"
keywords:
  - "chainer"
  - "experimental"
  - "images"
  - "deep"
  - "learning"
  - "vm"
  - "provide"
  - "framework"
---

# Chainer experimental images

Product: Deep Learning VM Images
Coverage: MEDIUM

## Step 02 Summary

Deep Learning VM Images provide experimental images for the Chainer 4.3 framework.

## Extended Definition

Deep Learning VM Images provide experimental images for the Chainer 4.3 framework.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deep-learning-vm/docs/framework-support-policy](https://docs.cloud.google.com/deep-learning-vm/docs/framework-support-policy)
- [https://docs.cloud.google.com/deep-learning-vm/docs/concepts-images](https://docs.cloud.google.com/deep-learning-vm/docs/concepts-images)
- [https://docs.cloud.google.com/deep-learning-vm/docs/images](https://docs.cloud.google.com/deep-learning-vm/docs/images)

## Supporting Pages

### "Deep Learning VM framework support policy \_|\_ Deep Learning VM Images\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/framework-support-policy](https://docs.cloud.google.com/deep-learning-vm/docs/framework-support-policy)
- Source ID: `site-docs-reference`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Compute Compute Engine Deep Learning VM Images Resources Send feedback Deep Learning VM framework support policy Stay organized with collections Save and categorize content based on your preferences.
- Subscribe to the Deep Learning VM release notes page for announcements about deprecations and new version releases for your images and frameworks.
- Deep Learning VM Images provides containers and virtual machine images to simplify the configuration of your machine learning (ML) workloads.
- Each image provided by Deep Learning VM provides support for a specific minor version of an ML framework.

### "Images, image families, and instances \_|\_ Deep Learning VM Images \_|\_\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/concepts-images](https://docs.cloud.google.com/deep-learning-vm/docs/concepts-images)
- Source ID: `site-docs-reference`
- Final score: 43
- Re-rank relevance: N/A

Evidence snippets:
- Deep Learning VM Images is a set of prepackaged virtual machine images with a deep learning framework that are ready to be run out of the box.
- You can use Deep Learning VM images for some previous versions of frameworks.
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Images, image families, and instances Stay organized with collections Save and categorize content based on your preferences.
- The Deep Learning VM images take the hassle out of setting up an environment for training deep learning models by preconfiguring dependencies, preinstalling essential tools, and optimizing performance.

### Choose an image \_|\_ Deep Learning VM Images \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/images](https://docs.cloud.google.com/deep-learning-vm/docs/images)
- Source ID: `site-docs-reference`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- List all available versions using gcloud CLI You can also list all available Deep Learning VM images using the following gcloud CLI command: gcloud compute images list \ --project deeplearning-platform-release \ --format="value(NAME)" \ --no-standard-images Note: The output of this command includes some image family framework types that aren't mentioned in the previous table of family names .
- Specific Deep Learning VM Images images are available to suit your choice of framework and processor.
- To create a Deep Learning VM instance that uses a deprecated image, see the following example gcloud CLI command: gcloud compute instances create deprecated-tf-vm \ --image = projects/deeplearning-platform-release/global/images/ IMAGE NAME \ --machine-type = n1-standard-4 \ --zone = us-east1-c Replace IMAGE NAME with the name of the image, as follows: To use a specific image in the image family, use the image name, for example: pytorch-2-9-cu129-ubuntu-2204-nvidia-580-v20260416 .
- Replace IMAGE FAMILY with the image family name for which you want to find out the latest version number. gcloud compute images describe-from-family IMAGE FAMILY \ --project deeplearning-platform-release Look for the name field in the output and use the image name given there when creating new instances.

