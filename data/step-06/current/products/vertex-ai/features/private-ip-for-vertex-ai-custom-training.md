---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.176Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Private IP for Vertex AI custom training"
feature_slug: "private-ip-for-vertex-ai-custom-training"
latest_feature_date: "2021-07-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks"
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/training"
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/cleanup"
keywords:
  - "private"
  - "ip"
  - "vertex"
  - "ai"
  - "custom"
  - "training"
  - "now"
  - "enables"
---

# Private IP for Vertex AI custom training

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI now enables private IP usage for custom training traffic via VPC Network Peering.

## Extended Definition

Vertex AI now enables private IP usage for custom training traffic via VPC Network Peering.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/training](https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/training)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/cleanup](https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/cleanup)

## Supporting Pages

### Custom training notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks)
- Source ID: `site-docs-reference-2`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- Tutorial steps Setup a service account and a Cloud Storage bucket Create a Vertex AI TensorBoard instance Create and run a custom training job that enables Profiler View the Profiler dashboard to debug your model training performance Colab Colab Enterprise GitHub Vertex AI Workbench Profiler Vertex AI TensorBoard Profile model training performance using Cloud Profiler in custom training with prebuilt container .
- Tutorial steps Prepare your custom training code and load your training code as a Python package to a prebuilt container Create and run a custom training job that enables Profiler View the Profiler dashboard to debug your model training performance Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI TensorBoard Vertex AI Pipelines Vertex AI TensorBoard integration with Vertex AI Pipelines .
- Tutorial steps Create utility functions to download data and prepare csv files for creating Vertex AI managed dataset Download Data Prepare CSV Files for creating managed dataset Create custom training Python package Create TensorFlow Serving container Run custom Python package training with managed text dataset Deploy a model and create an endpoint on Vertex AI Predict on the endpoint Create a Batch Prediction job on the model Colab Colab Enterprise GitHub Vertex AI Workbench Tabular Workflow for TabNet Vertex AI Explanations with TabNet models .
- Tutorial steps Create custom Ray on Vertex AI container image Create a Ray cluster on Vertex AI using custom container image Run Spark interactively on the cluster using RayDP Run Spark application on cluster via Ray Job API Read files from Google Cloud Storage in Spark application Pandas UDF in Spark application on Ray on Vertex AI Delete the Ray cluster on Vertex AI Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Training Vertex AI Reduction Server PyTorch distributed training with Vertex AI Reduction Server .

### "Hello custom training: Train a custom image classification model \_|\_ Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/training](https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/training)
- Source ID: `site-docs-reference-2`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- To learn more, run the following notebooks in the environment of your choice: "Use the Vertex AI SDK for Python to train and deploy a custom image classification model for batch prediction.": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "Use the Vertex AI SDK for Python to train and deploy a custom image classification model for online prediction.": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub This page shows you how to run a TensorFlow Keras training application on Vertex AI.
- Activate Cloud Shell In the Cloud Shell session, run the following command: cd hello-custom-sample Run a custom training pipeline This section describes using the training package that you uploaded to Cloud Storage to run a Vertex AI custom training pipeline.
- Home Documentation AI and ML Vertex AI Send feedback Hello custom training: Train a custom image classification model Stay organized with collections Save and categorize content based on your preferences.
- View your trained model When the custom training pipeline completes, you can find the trained model in the Google Cloud console, in the Vertex AI section, on the Models page.

### "Hello custom training: Clean up your project \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/cleanup](https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/cleanup)
- Source ID: `site-docs-reference-2`
- Final score: 117
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Vertex AI Send feedback Hello custom training: Clean up your project Stay organized with collections Save and categorize content based on your preferences.
- If you want to delete your custom job, do the following: In the Google Cloud console, in the Vertex AI section, go to the Training pipelines page.
- Activate Cloud Shell In the Cloud Shell session, run the following command: cd hello-custom-sample Delete Vertex AI resources This section describes how to delete all of the Vertex AI resources that you created for this tutorial.
- Delete your custom training pipeline and job Your training pipeline and custom job are just records of the training that happened earlier.

