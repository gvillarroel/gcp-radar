---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:42:01.182Z"
product_name: "Vertex AI Workbench"
product_slug: "vertex-ai-workbench"
feature_name: "Default-kernel notebook execution in Vertex AI Workbench"
feature_slug: "default-kernel-notebook-execution-in-vertex-ai-workbench"
latest_feature_date: "2023-12-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction"
  - "https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials"
  - "https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials"
keywords:
  - "default"
  - "kernel"
  - "notebook"
  - "execution"
  - "vertex"
  - "ai"
  - "workbench"
  - "reliability"
---

# Default-kernel notebook execution in Vertex AI Workbench

Product: Vertex AI Workbench
Coverage: MEDIUM

## Step 02 Summary

A reliability issue was fixed so notebooks using the default kernel can run and be scheduled correctly.

## Extended Definition

A reliability issue was fixed so notebooks using the default kernel can run and be scheduled correctly.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction](https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction)
- [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials)
- [https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials)

## Supporting Pages

### Introduction to Vertex AI Workbench \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction](https://docs.cloud.google.com/vertex-ai/docs/workbench/introduction)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Adding conda environments lets you use kernels that aren't available in the default Vertex AI Workbench instance.
- To edit a Vertex AI Workbench instance's underlying VM, use the projects.locations.instances.patch method in the Notebooks API or the gcloud workbench instances update command in the Google Cloud SDK.
- Introduction to Vertex AI Workbench Vertex AI Workbench instances are Jupyter notebook-based development environments for the entire data science workflow.
- Automated shutdown for idle instances To help manage costs, Vertex AI Workbench instances shut down after being idle for a specific time period by default.

### "Vertex Explainable AI notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials)
- Source ID: `site-docs-root`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Tutorial steps Fetch the required data from BigQuery Preprocess the data Train a TensorFlow (>=2.4) classification model Evaluate the loss for the trained model Automate the notebook execution using the executor feature Save the model to a Cloud Storage path Clean up the created resources Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Workbench Vertex Explainable AI Taxi fare prediction using the Chicago Taxi Trips dataset .
- Tutorial steps Using Python & SQL to query public data in BigQuery Exploring the dataset using BigQuery INFORMATION SCHEMA Creating interactive elements to help explore interesting parts of the data Doing some exploratory correlation and time series analysis Creating static and interactive outputs (data tables and plots) in the notebook Saving some outputs to Cloud Storage Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Workbench Custom training Build a fraud detection model on Vertex AI .
- List of notebooks Select a service AutoML BigQuery BigQuery ML Custom training Image Ray on Vertex AI Tabular Text Vector Search Vertex AI Experiments Vertex AI Feature Store Vertex AI Inference Vertex AI model evaluation Vertex AI Model Monitoring Vertex AI Model Registry Vertex AI Pipelines Vertex AI TensorBoard Vertex AI Vizier Vertex AI Workbench Vertex Explainable AI Vertex ML Metadata Services Description Open in Classification for tabular data AutoML tabular training and prediction .
- Tutorial steps Explore data Model with BigQuery and the ARIMA model Evaluate the model Evaluate the model results using BigQuery ML (on training data) Evaluate the model results MAE, MAPE, MSE, RMSE (on test data) Use the executor feature Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Workbench BigQuery ML Interactive exploratory analysis of BigQuery data in a notebook .

### "Vertex ML Metadata notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials)
- Source ID: `site-docs-root`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Tutorial steps Fetch the required data from BigQuery Preprocess the data Train a TensorFlow (>=2.4) classification model Evaluate the loss for the trained model Automate the notebook execution using the executor feature Save the model to a Cloud Storage path Clean up the created resources Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Workbench Vertex Explainable AI Taxi fare prediction using the Chicago Taxi Trips dataset .
- Tutorial steps Using Python & SQL to query public data in BigQuery Exploring the dataset using BigQuery INFORMATION SCHEMA Creating interactive elements to help explore interesting parts of the data Doing some exploratory correlation and time series analysis Creating static and interactive outputs (data tables and plots) in the notebook Saving some outputs to Cloud Storage Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Workbench Custom training Build a fraud detection model on Vertex AI .
- List of notebooks Select a service AutoML BigQuery BigQuery ML Custom training Image Ray on Vertex AI Tabular Text Vector Search Vertex AI Experiments Vertex AI Feature Store Vertex AI Inference Vertex AI model evaluation Vertex AI Model Monitoring Vertex AI Model Registry Vertex AI Pipelines Vertex AI TensorBoard Vertex AI Vizier Vertex AI Workbench Vertex Explainable AI Vertex ML Metadata Services Description Open in Classification for tabular data AutoML tabular training and prediction .
- Tutorial steps Explore data Model with BigQuery and the ARIMA model Evaluate the model Evaluate the model results using BigQuery ML (on training data) Evaluate the model results MAE, MAPE, MSE, RMSE (on test data) Use the executor feature Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Workbench BigQuery ML Interactive exploratory analysis of BigQuery data in a notebook .

