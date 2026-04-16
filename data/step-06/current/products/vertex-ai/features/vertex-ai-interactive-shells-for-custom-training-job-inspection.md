---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.171Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Vertex AI interactive shells for custom training job inspection"
feature_slug: "vertex-ai-interactive-shells-for-custom-training-job-inspection"
latest_feature_date: "2021-11-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks"
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/training"
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/serving"
keywords:
  - "vertex"
  - "ai"
  - "interactive"
  - "shells"
  - "custom"
  - "training"
  - "job"
  - "inspection"
---

# Vertex AI interactive shells for custom training job inspection

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI introduced generally available interactive shell access for inspecting custom training jobs, including support for use with VPC Service Controls.

## Extended Definition

Vertex AI introduced generally available interactive shell access for inspecting custom training jobs, including support for use with VPC Service Controls.

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
- Final score: 165
- Re-rank relevance: N/A

Evidence snippets:
- Tutorial steps Create custom Ray on Vertex AI container image Create a Ray cluster on Vertex AI using custom container image Run Spark interactively on the cluster using RayDP Run Spark application on cluster via Ray Job API Read files from Google Cloud Storage in Spark application Pandas UDF in Spark application on Ray on Vertex AI Delete the Ray cluster on Vertex AI Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Training Vertex AI Reduction Server PyTorch distributed training with Vertex AI Reduction Server .
- Tutorial steps Using Python & SQL to query public data in BigQuery Exploring the dataset using BigQuery INFORMATION SCHEMA Creating interactive elements to help explore interesting parts of the data Doing some exploratory correlation and time series analysis Creating static and interactive outputs (data tables and plots) in the notebook Saving some outputs to Cloud Storage Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Workbench Custom training Build a fraud detection model on Vertex AI .
- Tutorial steps Create utility functions to download data and prepare csv files for creating Vertex AI managed dataset Download Data Prepare CSV Files for creating managed dataset Create custom training Python package Create TensorFlow Serving container Run custom Python package training with managed text dataset Deploy a model and create an endpoint on Vertex AI Predict on the endpoint Create a Batch Prediction job on the model Colab Colab Enterprise GitHub Vertex AI Workbench Tabular Workflow for TabNet Vertex AI Explanations with TabNet models .
- Tutorial steps Create a local BigQuery table in your project Train a BigQuery ML model Evaluate the BigQuery ML model Export the BigQuery ML model as a cloud model Upload the exported model as a Vertex AI model resource Hyperparameter tune a BigQuery ML model with Vertex AI Vizier Automatically register a BigQuery ML model to Vertex AI Model Registry Colab Colab Enterprise GitHub Vertex AI Workbench Custom training Vertex AI Inference Deploying Iris-detection model using FastAPI and Vertex AI custom container serving .

### "Hello custom training: Train a custom image classification model \_|\_ Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/training](https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/training)
- Source ID: `site-docs-reference-2`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- To learn more, run the following notebooks in the environment of your choice: "Use the Vertex AI SDK for Python to train and deploy a custom image classification model for batch prediction.": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "Use the Vertex AI SDK for Python to train and deploy a custom image classification model for online prediction.": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub This page shows you how to run a TensorFlow Keras training application on Vertex AI.
- Activate Cloud Shell In the Cloud Shell session, run the following command: cd hello-custom-sample Run a custom training pipeline This section describes using the training package that you uploaded to Cloud Storage to run a Vertex AI custom training pipeline.
- Home Documentation AI and ML Vertex AI Send feedback Hello custom training: Train a custom image classification model Stay organized with collections Save and categorize content based on your preferences.
- View your trained model When the custom training pipeline completes, you can find the trained model in the Google Cloud console, in the Vertex AI section, on the Models page.

### "Hello custom training: Serve predictions from a custom image classification\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/serving](https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/serving)
- Source ID: `site-docs-reference-2`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Vertex AI Send feedback Hello custom training: Serve predictions from a custom image classification model Stay organized with collections Save and categorize content based on your preferences.
- Activate Cloud Shell In the Cloud Shell session, run the following command: cd hello-custom-sample Create an endpoint To get online predictions from the ML model that you trained when following the previous page of this tutorial, create a Vertex AI endpoint .
- Training a custom image classification model.
- Edit the app to provide it with the trigger URL of your Cloud Run function: echo "export const CLOUD FUNCTION URL = 'https://us-central1- ${ PROJECT ID } .cloudfunctions.net/classify flower';" \ webapp/function-url.js Upload the webapp directory to your Cloud Storage bucket: gcloud storage cp webapp gs:// ${ BUCKET NAME } / --recursive Make the web app files that you just uploaded publicly readable : gcloud storage objects update gs:// ${ BUCKET NAME } /webapp/ --add-acl-grant = entity = allUsers,role = READER Note: Shells (like bash, zsh) sometimes attempt to expand wildcards in ways that can be surprising.

