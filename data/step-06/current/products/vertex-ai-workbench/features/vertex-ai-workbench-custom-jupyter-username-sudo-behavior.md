---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:42:01.003Z"
product_name: "Vertex AI Workbench"
product_slug: "vertex-ai-workbench"
feature_name: "Vertex AI Workbench custom Jupyter username sudo behavior"
feature_slug: "vertex-ai-workbench-custom-jupyter-username-sudo-behavior"
latest_feature_date: "2025-12-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks"
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access-jupyterlab"
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab"
keywords:
  - "vertex"
  - "ai"
  - "workbench"
  - "custom"
  - "jupyter"
  - "username"
  - "sudo"
  - "behavior"
---

# Vertex AI Workbench custom Jupyter username sudo behavior

Product: Vertex AI Workbench
Coverage: MEDIUM

## Step 02 Summary

The M137 release fixed a bug where Workbench instances prompted for a password when using a custom Jupyter username and invoking sudo.

## Extended Definition

The M137 release fixed a bug where Workbench instances prompted for a password when using a custom Jupyter username and invoking sudo.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access-jupyterlab](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access-jupyterlab)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab)

## Supporting Pages

### Custom training notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks)
- Source ID: `site-docs-root`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- Tutorial steps Create utility functions to download data and prepare csv files for creating Vertex AI managed dataset Download Data Prepare CSV Files for creating managed dataset Create custom training Python package Create TensorFlow Serving container Run custom Python package training with managed text dataset Deploy a model and create an endpoint on Vertex AI Predict on the endpoint Create a Batch Prediction job on the model Colab Colab Enterprise GitHub Vertex AI Workbench Tabular Workflow for TabNet Vertex AI Explanations with TabNet models .
- Tutorial steps Create custom Ray on Vertex AI container image Create a Ray cluster on Vertex AI using custom container image Run Spark interactively on the cluster using RayDP Run Spark application on cluster via Ray Job API Read files from Google Cloud Storage in Spark application Pandas UDF in Spark application on Ray on Vertex AI Delete the Ray cluster on Vertex AI Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Training Vertex AI Reduction Server PyTorch distributed training with Vertex AI Reduction Server .
- Tutorial steps Create a local BigQuery table in your project Train a BigQuery ML model Evaluate the BigQuery ML model Export the BigQuery ML model as a cloud model Upload the exported model as a Vertex AI model resource Hyperparameter tune a BigQuery ML model with Vertex AI Vizier Automatically register a BigQuery ML model to Vertex AI Model Registry Colab Colab Enterprise GitHub Vertex AI Workbench Custom training Vertex AI Inference Deploying Iris-detection model using FastAPI and Vertex AI custom container serving .
- Tutorial steps Using Python & SQL to query public data in BigQuery Exploring the dataset using BigQuery INFORMATION SCHEMA Creating interactive elements to help explore interesting parts of the data Doing some exploratory correlation and time series analysis Creating static and interactive outputs (data tables and plots) in the notebook Saving some outputs to Cloud Storage Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Workbench Custom training Build a fraud detection model on Vertex AI .

### "Manage access to a Vertex AI Workbench instance's JupyterLab interface \_\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access-jupyterlab](https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/manage-access-jupyterlab)
- Source ID: `site-docs-reference-2`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- JupyterLab access modes Vertex AI Workbench instances support the following access modes: Single user only : The Single user only access mode grants access only to the user that you specify.
- Manage access to an instance's JupyterLab interface This page describes how to grant access to the JupyterLab interface of a Vertex AI Workbench instance.
- Access limitations Granting a principal access to a Vertex AI Workbench instance's JupyterLab interface doesn't grant access to the instance itself.
- You control access to a Vertex AI Workbench instance's JupyterLab interface through the instance's access mode.

### "Manage access to a Vertex AI Workbench managed notebooks instance's JupyterLab\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access-jupyterlab)
- Source ID: `site-docs-reference-2`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Manage access to a managed notebooks instance's JupyterLab interface Vertex AI Workbench managed notebooks is deprecated .
- This page describes how to grant access to the JupyterLab interface of a Vertex AI Workbench managed notebooks instance.
- The following are examples of single user access metadata entries: proxy-mode=mail proxy-user-mail=user@example.com When you select the Service account access mode, Vertex AI Workbench stores a proxy-mode=service account metadata entry.
- Home Documentation AI and ML Vertex AI Vertex AI Workbench Send feedback Stay organized with collections Save and categorize content based on your preferences.

