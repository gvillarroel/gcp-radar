---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.176Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Custom service accounts for Vertex AI custom training and prediction"
feature_slug: "custom-service-accounts-for-vertex-ai-custom-training-and-prediction"
latest_feature_date: "2021-07-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks"
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/serving"
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/training"
keywords:
  - "custom"
  - "accounts"
  - "vertex"
  - "ai"
  - "training"
  - "prediction"
  - "now"
  - "supports"
---

# Custom service accounts for Vertex AI custom training and prediction

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI now supports using custom service accounts for custom training and prediction workloads.

## Extended Definition

Vertex AI now supports using custom service accounts for custom training and prediction workloads.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/serving](https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/serving)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/training](https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/training)

## Supporting Pages

### "Hello custom training: Serve predictions from a custom image classification\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/serving](https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/serving)
- Source ID: `site-docs-reference-2`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Vertex AI Send feedback Hello custom training: Serve predictions from a custom image classification model Stay organized with collections Save and categorize content based on your preferences.
- Activate Cloud Shell In the Cloud Shell session, run the following command: cd hello-custom-sample Create an endpoint To get online predictions from the ML model that you trained when following the previous page of this tutorial, create a Vertex AI endpoint .
- Additionally, functions run using a service account with the Editor role by default , which includes the aiplatform.endpoints.predict permission necessary to get predictions from your Vertex AI endpoint.
- The Vertex AI endpoint expects prediction requests in the format of the trained TensorFlow Keras graph's first layer: a tensor of normalized floats with fixed dimensions.

### Custom training notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks)
- Source ID: `site-docs-reference-2`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Tutorial steps Create utility functions to download data and prepare csv files for creating Vertex AI managed dataset Download Data Prepare CSV Files for creating managed dataset Create custom training Python package Create TensorFlow Serving container Run custom Python package training with managed text dataset Deploy a model and create an endpoint on Vertex AI Predict on the endpoint Create a Batch Prediction job on the model Colab Colab Enterprise GitHub Vertex AI Workbench Tabular Workflow for TabNet Vertex AI Explanations with TabNet models .
- List of notebooks Select a service AutoML BigQuery BigQuery ML Custom training Image Ray on Vertex AI Tabular Text Vector Search Vertex AI Experiments Vertex AI Feature Store Vertex AI Inference Vertex AI model evaluation Vertex AI Model Monitoring Vertex AI Model Registry Vertex AI Pipelines Vertex AI TensorBoard Vertex AI Vizier Vertex AI Workbench Vertex Explainable AI Vertex ML Metadata Services Description Open in Classification for tabular data AutoML tabular training and prediction .
- Tutorial steps Prepare the training script Submit a Ray job using the Ray Jobs API Download a trained image model from PyTorch Create a custom model handler Package model artifacts in a model archive file Register model in Vertex AI Model Registry Deploy model in Vertex AI Endpoint Make online predictions Colab Colab Enterprise GitHub Vertex AI Workbench Ray on Vertex AI overview Ray on Vertex AI cluster management .
- Tutorial steps Create a KFP pipeline Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Pipelines Vertex AI Batch Prediction components Training and batch prediction with BigQuery source and destination for a custom tabular classification model .

### "Hello custom training: Train a custom image classification model \_|\_ Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/training](https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom/training)
- Source ID: `site-docs-reference-2`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- To learn more, run the following notebooks in the environment of your choice: "Use the Vertex AI SDK for Python to train and deploy a custom image classification model for batch prediction.": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "Use the Vertex AI SDK for Python to train and deploy a custom image classification model for online prediction.": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub This page shows you how to run a TensorFlow Keras training application on Vertex AI.
- Activate Cloud Shell In the Cloud Shell session, run the following command: cd hello-custom-sample Run a custom training pipeline This section describes using the training package that you uploaded to Cloud Storage to run a Vertex AI custom training pipeline.
- Home Documentation AI and ML Vertex AI Send feedback Hello custom training: Train a custom image classification model Stay organized with collections Save and categorize content based on your preferences.
- View your trained model When the custom training pipeline completes, you can find the trained model in the Google Cloud console, in the Vertex AI section, on the Models page.

