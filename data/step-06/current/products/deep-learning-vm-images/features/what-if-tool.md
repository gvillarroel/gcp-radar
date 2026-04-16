---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:52:27.284Z"
product_name: "Deep Learning VM Images"
product_slug: "deep-learning-vm-images"
feature_name: "What-If Tool"
feature_slug: "what-if-tool"
latest_feature_date: "2019-07-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deep-learning-vm/docs/shared-responsibility"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/tensorflow_start_instance"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/introduction"
keywords:
  - "what"
  - "if"
  - "tool"
  - "deep"
  - "learning"
  - "vm"
  - "images"
  - "include"
---

# What-If Tool

Product: Deep Learning VM Images
Coverage: MEDIUM

## Step 02 Summary

Deep Learning VM Images include the What-If Tool widget.

## Extended Definition

Deep Learning VM Images include the What-If Tool widget.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deep-learning-vm/docs/shared-responsibility](https://docs.cloud.google.com/deep-learning-vm/docs/shared-responsibility)
- [https://docs.cloud.google.com/deep-learning-vm/docs/tensorflow_start_instance](https://docs.cloud.google.com/deep-learning-vm/docs/tensorflow_start_instance)
- [https://docs.cloud.google.com/deep-learning-vm/docs/introduction](https://docs.cloud.google.com/deep-learning-vm/docs/introduction)

## Supporting Pages

### "Deep Learning VM shared responsibility \_|\_ Deep Learning VM Images \_\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/shared-responsibility](https://docs.cloud.google.com/deep-learning-vm/docs/shared-responsibility)
- Source ID: `site-docs-reference`
- Final score: 60
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The customer's security responsibilities include the following: Use the latest versions of Deep Learning VM Containers and VM Images : Deep Learning VM provides prebuilt containers and VM images to simplify the use of its services.
- Google's security and compliance responsibilities in providing Deep Learning VM include the following: Protect the infrastructure : Google is responsible for providing secure infrastructure for its services, including physical security of data centers, network security, and application security.
- Home Documentation Compute Compute Engine Deep Learning VM Images Resources Send feedback Deep Learning VM shared responsibility Stay organized with collections Save and categorize content based on your preferences.
- Deep Learning VM secures the scalable infrastructure that you use to build, train, and deploy your own models and provides you tools and security controls to protect your data, code, and models.

### "Introduction to Deep Learning VM \_|\_ Deep Learning VM Images \_|\_ Google\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/introduction](https://docs.cloud.google.com/deep-learning-vm/docs/introduction)
- Source ID: `site-docs-reference`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- Python 3.10 with the following packages: numpy scipy matplotlib pandas nltk pillow scikit-image opencv-python scikit-learn many more JupyterLab notebook environments for quick prototyping Nvidia packages with the latest Nvidia driver for GPU-enabled instances: CUDA 11. x and 12. x (the version depends on the framework) CuDNN 7. x and NCCL 2. x (the version depends on the CUDA version) Updates Deep Learning VM images are updated regularly with bug fixes and package updates.
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Introduction to Deep Learning VM Stay organized with collections Save and categorize content based on your preferences.
- What's next To get started using Deep Learning VM, create a new instance using the Cloud Marketplace or using the command line .
- Deep Learning VM Images is a set of virtual machine images optimized for data science and machine learning tasks.

### "Create a TensorFlow Deep Learning VM instance \_|\_ Deep Learning VM Images\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/tensorflow_start_instance](https://docs.cloud.google.com/deep-learning-vm/docs/tensorflow_start_instance)
- Source ID: `site-docs-reference`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- This page shows you how to create a TensorFlow Deep Learning VM Images instance with TensorFlow and other tools pre-installed.
- To the gcloud compute instances create command, append the following: --preemptible What's next For instructions on connecting to your new Deep Learning VM instance through the Google Cloud console or command line, see Connecting to Instances .
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Create a TensorFlow Deep Learning VM instance Stay organized with collections Save and categorize content based on your preferences.
- To provision a Deep Learning VM instance with one or more GPUs: export IMAGE FAMILY = "tf-ent-latest-gpu" export ZONE = "us-west1-b" export INSTANCE NAME = "my-instance" gcloud compute instances create $ INSTANCE NAME \ -- zone =$ ZONE \ -- image - family =$ IMAGE FAMILY \ -- image - project = deeplearning - platform - release \ -- maintenance - policy = TERMINATE \ -- accelerator = "type=nvidia-tesla-v100,count=1" \ -- metadata = "install-nvidia-driver=True" Options: --image-family must be one of the following: tf-ent-latest-gpu to get the latest TensorFlow Enterprise 2 image An earlier TensorFlow or TensorFlow Enterprise image family name (see Choosing an image ) --image-project must be deeplearning-platform-release . --maintenance-policy must be TERMINATE .

