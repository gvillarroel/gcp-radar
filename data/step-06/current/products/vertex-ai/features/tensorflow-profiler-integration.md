---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.161Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "TensorFlow Profiler integration"
feature_slug: "tensorflow-profiler-integration"
latest_feature_date: "2022-08-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-profiler"
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks"
  - "https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials"
keywords:
  - "tensorflow"
  - "profiler"
  - "integration"
  - "enables"
  - "profiling"
  - "performance"
  - "debugging"
  - "vertex"
---

# TensorFlow Profiler integration

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Enables profiling and performance debugging for Vertex AI custom training jobs using TensorFlow Profiler.

## Extended Definition

Enables profiling and performance debugging for Vertex AI custom training jobs using TensorFlow Profiler.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-profiler](https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-profiler)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks)
- [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials)

## Supporting Pages

### "Enable Cloud Profiler for debugging model training performance debugging\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-profiler](https://docs.cloud.google.com/vertex-ai/docs/experiments/tensorboard-profiler)
- Source ID: `site-docs-reference-3`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Notebook To see examples of how to profile model training performance, run the following notebooks in the environment of your choice: "Profile model training performance using Cloud Profiler": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "Profile model training performance using Cloud Profiler in custom training with prebuilt container": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub What's next See the Tensorflow Profiler documentation to learn about the profiler tools and how to use them to optimize model performance.
- Home Documentation AI and ML Vertex AI Send feedback Enable Cloud Profiler for debugging model training performance debugging Stay organized with collections Save and categorize content based on your preferences.
- Enable Profiler To enable Profiler for your training job, add the following to your training script: Add the cloud profiler import at your top level imports: from google.cloud.aiplatform.training utils import cloud profiler Initialize the cloud profiler plugin by adding: cloud profiler . init () Example Here's a sample training script: #!/usr/bin/env python import tensorflow as tf import argparse import os from google.cloud.aiplatform.training utils import cloud profiler import time """Train an mnist model and use cloud profiler for profiling.""" def create model (): model = tf . keras . models .
- To see an example of how to profile model training performance, run the "Profile model training performance using Cloud Profiler in custom training with prebuilt container" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub This page shows you how to enable Cloud Profiler so you can debug model training performance for your serverless training jobs.

### Custom training notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks)
- Source ID: `site-docs-reference-2`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- Tutorial steps Prepare your custom training code and load your training code as a Python package to a prebuilt container Create and run a custom training job that enables Profiler View the Profiler dashboard to debug your model training performance Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI TensorBoard Vertex AI Pipelines Vertex AI TensorBoard integration with Vertex AI Pipelines .
- Tutorial steps Setup a service account and a Cloud Storage bucket Create a Vertex AI TensorBoard instance Create and run a custom training job that enables Profiler View the Profiler dashboard to debug your model training performance Colab Colab Enterprise GitHub Vertex AI Workbench Profiler Vertex AI TensorBoard Profile model training performance using Cloud Profiler in custom training with prebuilt container .
- Colab Colab Enterprise GitHub Vertex AI Workbench Profiler Vertex AI TensorBoard Profile model training performance using Cloud Profiler .
- Colab Colab Enterprise GitHub Vertex AI Workbench Cloud Profiler Profile model training performance using Cloud Profiler .

### "Vertex Explainable AI notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials)
- Source ID: `site-docs-reference-2`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- Tutorial steps Prepare your custom training code and load your training code as a Python package to a prebuilt container Create and run a custom training job that enables Profiler View the Profiler dashboard to debug your model training performance Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI TensorBoard Vertex AI Pipelines Vertex AI TensorBoard integration with Vertex AI Pipelines .
- Tutorial steps Setup a service account and a Cloud Storage bucket Create a Vertex AI TensorBoard instance Create and run a custom training job that enables Profiler View the Profiler dashboard to debug your model training performance Colab Colab Enterprise GitHub Vertex AI Workbench Profiler Vertex AI TensorBoard Profile model training performance using Cloud Profiler in custom training with prebuilt container .
- Colab Colab Enterprise GitHub Vertex AI Workbench Profiler Vertex AI TensorBoard Profile model training performance using Cloud Profiler .
- Colab Colab Enterprise GitHub Vertex AI Workbench Cloud Profiler Profile model training performance using Cloud Profiler .

