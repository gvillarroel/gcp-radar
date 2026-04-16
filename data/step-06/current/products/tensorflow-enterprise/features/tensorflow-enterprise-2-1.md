---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:19:15.746Z"
product_name: "Tensorflow Enterprise"
product_slug: "tensorflow-enterprise"
feature_name: "TensorFlow Enterprise 2.1"
feature_slug: "tensorflow-enterprise-2-1"
latest_feature_date: "2020-01-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/tensorflow-enterprise/docs/use-with-notebooks"
  - "https://docs.cloud.google.com/tensorflow-enterprise/docs/overview"
  - "https://docs.cloud.google.com/tensorflow-enterprise/docs/use-with-deep-learning-vm"
  - "https://docs.cloud.google.com/tensorflow-enterprise/docs/use-with-deep-learning-containers"
keywords:
  - "tensorflow"
  - "enterprise"
  - "is"
  - "now"
  - "available"
  - "for"
  - "use"
  - "on"
---

# TensorFlow Enterprise 2.1

Product: Tensorflow Enterprise
Coverage: MEDIUM

## Step 02 Summary

TensorFlow Enterprise 2.1 is now available for use on Google Cloud.

## Extended Definition

TensorFlow Enterprise 2.1 is now available for use on Google Cloud.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/tensorflow-enterprise/docs/use-with-notebooks](https://docs.cloud.google.com/tensorflow-enterprise/docs/use-with-notebooks)
- [https://docs.cloud.google.com/tensorflow-enterprise/docs/overview](https://docs.cloud.google.com/tensorflow-enterprise/docs/overview)
- [https://docs.cloud.google.com/tensorflow-enterprise/docs/use-with-deep-learning-vm](https://docs.cloud.google.com/tensorflow-enterprise/docs/use-with-deep-learning-vm)
- [https://docs.cloud.google.com/tensorflow-enterprise/docs/use-with-deep-learning-containers](https://docs.cloud.google.com/tensorflow-enterprise/docs/use-with-deep-learning-containers)

## Supporting Pages

### "Use TensorFlow Enterprise with a user-managed notebooks instance \_|\_ Google\

- URL: [https://docs.cloud.google.com/tensorflow-enterprise/docs/use-with-notebooks](https://docs.cloud.google.com/tensorflow-enterprise/docs/use-with-notebooks)
- Source ID: `site-docs-reference`
- Final score: 314
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML TensorFlow Enterprise Guides Send feedback Use TensorFlow Enterprise with a user-managed notebooks instance Stay organized with collections Save and categorize content based on your preferences.
- In this example, you create a TensorFlow Enterprise user-managed notebooks instance, open a JupyterLab notebook, and run a classification tutorial on using neural networks with Keras.
- To get the permissions that you need to create a Vertex AI Workbench user-managed notebooks instance, ask your administrator to grant you the following IAM roles on the project: Notebooks Admin ( roles/notebooks.admin ) Service Account User ( roles/iam.serviceAccountUser ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- This page provides a brief overview of Vertex AI Workbench user-managed notebooks instances and describes how to get started using TensorFlow Enterprise in a user-managed notebooks instance.

### Overview \_|\_ TensorFlow Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tensorflow-enterprise/docs/overview](https://docs.cloud.google.com/tensorflow-enterprise/docs/overview)
- Source ID: `site-docs-reference`
- Final score: 300
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- TensorFlow Enterprise is available to use in the following products: Vertex AI Deep Learning VM Images Deep Learning Containers AI Platform Training One year of support Starting with TensorFlow Enterprise 2.9, each minor release of TensorFlow Enterprise, when used on Google Cloud, is supported with security updates and selected bug fixes for one year.
- TensorFlow-io TensorFlow-estimator TensorFlow-probability TensorFlow-datasets TensorFlow-hub fairness-indicators included with TensorFlow 2.3 many more Note: TensorFlow Enterprise does not provide any support for code found within TensorFlow Contrib ( tf.contrib ).
- While it is available in Google Cloud products, patches and bug fixes included in the TensorFlow Enterprise distribution are reflected in the mainline TensorFlow code repository.
- Each version of the TensorFlow Enterprise distribution is anchored on a particular version of TensorFlow, and all packages included are available in open source.

### Use TensorFlow Enterprise with Deep Learning VM \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tensorflow-enterprise/docs/use-with-deep-learning-vm](https://docs.cloud.google.com/tensorflow-enterprise/docs/use-with-deep-learning-vm)
- Source ID: `site-docs-reference`
- Final score: 294
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML TensorFlow Enterprise Guides Send feedback Use TensorFlow Enterprise with Deep Learning VM Stay organized with collections Save and categorize content based on your preferences.
- There are currently images supporting TensorFlow Enterprise , TensorFlow, PyTorch, and generic high-performance computing, with versions for both CPU-only and GPU-enabled workflows.
- Note: If you plan to use GPUs with your TensorFlow Enterprise instance, check the quotas page to ensure that you have enough GPUs available in your project.
- In this example, you create a TensorFlow Enterprise Deep Learning VM instance, connect to the instance using SSH, open a JupyterLab notebook, and run a classification tutorial on using neural networks with Keras.

### "Use TensorFlow Enterprise with a local Deep Learning Containers instance\

- URL: [https://docs.cloud.google.com/tensorflow-enterprise/docs/use-with-deep-learning-containers](https://docs.cloud.google.com/tensorflow-enterprise/docs/use-with-deep-learning-containers)
- Source ID: `site-docs-reference`
- Final score: 288
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML TensorFlow Enterprise Guides Send feedback Use TensorFlow Enterprise with a local Deep Learning Containers instance Stay organized with collections Save and categorize content based on your preferences.
- Running your Deep Learning Containers instance on Google Cloud To run your TensorFlow Enterprise Deep Learning Containers instance in a cloud environment, learn more about options for running containers on Google Cloud .
- Create a Deep Learning Containers instance To create a TensorFlow Enterprise Deep Learning Containers instance, complete the following for the type of local container that you want to make.
- Replace /path/to/local/dir with the path to your local directory that you want to use. docker run --runtime=nvidia -d -p 8080:8080 -v /path/to/local/dir :/home \ gcr.io/deeplearning-platform-release/tf2-gpu.2-3 This command starts up the container in detached mode, mounts the local directory /path/to/local/dir to /home in the container, and maps port 8080 on the container to port 8080 on your local machine.

