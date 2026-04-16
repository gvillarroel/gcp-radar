---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:52:27.222Z"
product_name: "Deep Learning VM Images"
product_slug: "deep-learning-vm-images"
feature_name: "Long Term Version Support"
feature_slug: "long-term-version-support"
latest_feature_date: "2021-08-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/deep-learning-vm/docs/tensorflow_start_instance"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/concepts-images"
  - "https://docs.cloud.google.com/deep-learning-vm/docs/framework-support-policy"
keywords:
  - "long"
  - "term"
  - "version"
  - "tensorflow"
  - "enterprise"
  - "images"
  - "include"
---

# Long Term Version Support

Product: Deep Learning VM Images
Coverage: MEDIUM

## Step 02 Summary

TensorFlow Enterprise 2.6.0 images include Long Term Version Support.

## Extended Definition

TensorFlow Enterprise 2.6.0 images include Long Term Version Support.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/deep-learning-vm/docs/tensorflow_start_instance](https://docs.cloud.google.com/deep-learning-vm/docs/tensorflow_start_instance)
- [https://docs.cloud.google.com/deep-learning-vm/docs/concepts-images](https://docs.cloud.google.com/deep-learning-vm/docs/concepts-images)
- [https://docs.cloud.google.com/deep-learning-vm/docs/framework-support-policy](https://docs.cloud.google.com/deep-learning-vm/docs/framework-support-policy)

## Supporting Pages

### "Create a TensorFlow Deep Learning VM instance \_|\_ Deep Learning VM Images\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/tensorflow_start_instance](https://docs.cloud.google.com/deep-learning-vm/docs/tensorflow_start_instance)
- Source ID: `site-docs-reference`
- Final score: 173
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- About TensorFlow Enterprise TensorFlow Enterprise is a distribution of TensorFlow that has been optimized to run on Google Cloud and includes Long Term Version Support .
- To provision a Deep Learning VM instance with one or more GPUs: export IMAGE FAMILY = "tf-ent-latest-gpu" export ZONE = "us-west1-b" export INSTANCE NAME = "my-instance" gcloud compute instances create $ INSTANCE NAME \ -- zone =$ ZONE \ -- image - family =$ IMAGE FAMILY \ -- image - project = deeplearning - platform - release \ -- maintenance - policy = TERMINATE \ -- accelerator = "type=nvidia-tesla-v100,count=1" \ -- metadata = "install-nvidia-driver=True" Options: --image-family must be one of the following: tf-ent-latest-gpu to get the latest TensorFlow Enterprise 2 image An earlier TensorFlow or TensorFlow Enterprise image family name (see Choosing an image ) --image-project must be deeplearning-platform-release . --maintenance-policy must be TERMINATE .
- Without GPUs To provision a Deep Learning VM instance without a GPU: export IMAGE FAMILY = "tf-ent-latest-cpu" export ZONE = "us-west1-b" export INSTANCE NAME = "my-instance" gcloud compute instances create $ INSTANCE NAME \ -- zone =$ ZONE \ -- image - family =$ IMAGE FAMILY \ -- image - project = deeplearning - platform - release Options: --image-family must be one of the following: tf-ent-latest-cpu to get the latest TensorFlow Enterprise 2 image An earlier TensorFlow or TensorFlow Enterprise image family name (see Choosing an image ) --image-project must be deeplearning-platform-release .
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Create a TensorFlow Deep Learning VM instance Stay organized with collections Save and categorize content based on your preferences.

### "Images, image families, and instances \_|\_ Deep Learning VM Images \_|\_\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/concepts-images](https://docs.cloud.google.com/deep-learning-vm/docs/concepts-images)
- Source ID: `site-docs-reference`
- Final score: 131
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- They are listed here, according to each one's main installed framework: TensorFlow Enterprise family, with or without GPU TensorFlow family, with or without GPU PyTorch family, with or without GPU R experimental family A base, or "common" image family to which you can add your preferred framework, with or without GPU TensorFlow Enterprise is a distribution of TensorFlow that has been optimized to run on Google Cloud and includes Long Term Version Support .
- You can use Deep Learning VM images for some previous versions of frameworks.
- Home Documentation Compute Compute Engine Deep Learning VM Images Guides Send feedback Images, image families, and instances Stay organized with collections Save and categorize content based on your preferences.
- The Deep Learning VM images take the hassle out of setting up an environment for training deep learning models by preconfiguring dependencies, preinstalling essential tools, and optimizing performance.

### "Deep Learning VM framework support policy \_|\_ Deep Learning VM Images\

- URL: [https://docs.cloud.google.com/deep-learning-vm/docs/framework-support-policy](https://docs.cloud.google.com/deep-learning-vm/docs/framework-support-policy)
- Source ID: `site-docs-reference`
- Final score: 80
- Re-rank relevance: N/A

Evidence snippets:
- We publish new versions of images regularly to include new patches, security updates, and features.
- End-of-availability date: After this date, you can no longer use images for this framework version.
- For Deep Learning VM, the support policy revolves around two key dates: End-of-patch and support date: After this date, Deep Learning VM will no longer publish new image versions for that specific framework version.
- While Deep Learning VM regularly publishes new versions of images to address security vulnerabilities, you are responsible for tasks such as the following: Manually upgrading to the latest version.

