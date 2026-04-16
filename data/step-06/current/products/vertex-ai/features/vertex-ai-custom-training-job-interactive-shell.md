---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.177Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Vertex AI custom training job interactive shell"
feature_slug: "vertex-ai-custom-training-job-interactive-shell"
latest_feature_date: "2021-07-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks"
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/training"
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/serving"
keywords:
  - "vertex"
  - "ai"
  - "custom"
  - "training"
  - "job"
  - "interactive"
  - "shell"
  - "now"
---

# Vertex AI custom training job interactive shell

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI now lets users open an interactive shell inside a running custom training container for monitoring and debugging.

## Extended Definition

Vertex AI now lets users open an interactive shell inside a running custom training container for monitoring and debugging.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/training](https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/training)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/serving](https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/serving)

## Supporting Pages

### Custom training notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks)
- Source ID: `site-docs-reference-2`
- Final score: 177
- Re-rank relevance: N/A

Evidence snippets:
- Tutorial steps Create custom Ray on Vertex AI container image Create a Ray cluster on Vertex AI using custom container image Run Spark interactively on the cluster using RayDP Run Spark application on cluster via Ray Job API Read files from Google Cloud Storage in Spark application Pandas UDF in Spark application on Ray on Vertex AI Delete the Ray cluster on Vertex AI Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Training Vertex AI Reduction Server PyTorch distributed training with Vertex AI Reduction Server .
- Tutorial steps Using Python & SQL to query public data in BigQuery Exploring the dataset using BigQuery INFORMATION SCHEMA Creating interactive elements to help explore interesting parts of the data Doing some exploratory correlation and time series analysis Creating static and interactive outputs (data tables and plots) in the notebook Saving some outputs to Cloud Storage Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Workbench Custom training Build a fraud detection model on Vertex AI .
- Tutorial steps Create a shell script to start an ETCD cluster on the master node Create a training script using code from PyTorch Elastic's GitHub repository Create containers that download the data, and start an ETCD cluster on the host Train the model using multiple nodes with GPUs Colab Colab Enterprise GitHub Vertex AI Workbench Custom training Distributed XGBoost training with Dask .
- Tutorial steps Create utility functions to download data and prepare csv files for creating Vertex AI managed dataset Download Data Prepare CSV Files for creating managed dataset Create custom training Python package Create TensorFlow Serving container Run custom Python package training with managed text dataset Deploy a model and create an endpoint on Vertex AI Predict on the endpoint Create a Batch Prediction job on the model Colab Colab Enterprise GitHub Vertex AI Workbench Tabular Workflow for TabNet Vertex AI Explanations with TabNet models .

### "Hello custom training: Train a custom image classification model \_|\_ Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/training](https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/training)
- Source ID: `site-docs-reference-2`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- Activate Cloud Shell In the Cloud Shell session, run the following command: cd hello-custom-sample Run a custom training pipeline This section describes using the training package that you uploaded to Cloud Storage to run a Vertex AI custom training pipeline.
- To learn more, run the following notebooks in the environment of your choice: "Use the Vertex AI SDK for Python to train and deploy a custom image classification model for batch prediction.": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "Use the Vertex AI SDK for Python to train and deploy a custom image classification model for online prediction.": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub This page shows you how to run a TensorFlow Keras training application on Vertex AI.
- Home Documentation AI and ML Vertex AI Send feedback Hello custom training: Train a custom image classification model Stay organized with collections Save and categorize content based on your preferences.
- View your trained model When the custom training pipeline completes, you can find the trained model in the Google Cloud console, in the Vertex AI section, on the Models page.

### "Hello custom training: Serve predictions from a custom image classification\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/serving](https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/serving)
- Source ID: `site-docs-reference-2`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Activate Cloud Shell In the Cloud Shell session, run the following command: cd hello-custom-sample Create an endpoint To get online predictions from the ML model that you trained when following the previous page of this tutorial, create a Vertex AI endpoint .
- Home Documentation AI and ML Vertex AI Send feedback Hello custom training: Serve predictions from a custom image classification model Stay organized with collections Save and categorize content based on your preferences.
- Training a custom image classification model.
- Edit the app to provide it with the trigger URL of your Cloud Run function: echo "export const CLOUD FUNCTION URL = 'https://us-central1- ${ PROJECT ID } .cloudfunctions.net/classify flower';" \ webapp/function-url.js Upload the webapp directory to your Cloud Storage bucket: gcloud storage cp webapp gs:// ${ BUCKET NAME } / --recursive Make the web app files that you just uploaded publicly readable : gcloud storage objects update gs:// ${ BUCKET NAME } /webapp/ --add-acl-grant = entity = allUsers,role = READER Note: Shells (like bash, zsh) sometimes attempt to expand wildcards in ways that can be surprising.

