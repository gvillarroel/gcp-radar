---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:42:01.398Z"
product_name: "Vertex AI Workbench"
product_slug: "vertex-ai-workbench"
feature_name: "Vertex AI Workbench"
feature_slug: "vertex-ai-workbench"
latest_feature_date: "2022-04-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/reference"
  - "https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials"
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control"
keywords:
  - "vertex"
  - "ai"
  - "workbench"
  - "became"
  - "generally"
  - "available"
  - "unified"
  - "notebook"
---

# Vertex AI Workbench

Product: Vertex AI Workbench
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Workbench became generally available as a unified notebook environment for data science on Google Cloud; Vertex AI Workbench was released as a generally available, single notebook surface for data science workflows.

## Extended Definition

Vertex AI Workbench became generally available as a unified notebook environment for data science on Google Cloud; Vertex AI Workbench was released as a generally available, single notebook surface for data science workflows.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference)
- [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control)

## Supporting Pages

### "Notebooks API usage overview \_|\_ Vertex AI Workbench \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference)
- Source ID: `site-docs-reference`
- Final score: 86
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- API versions The following API versions are available: v2 ( generally available ) is for managing Vertex AI Workbench instances. v1 ( generally available ) is for managing user-managed notebooks and managed notebooks instances. v1beta1 is scheduled for removal.
- Home Documentation AI and ML Vertex AI Vertex AI Workbench Reference Send feedback Stay organized with collections Save and categorize content based on your preferences.
- Notebooks API usage overview This guide provides an overview of using the Notebooks API and its reference documentation.
- Not available for all programming languages.

### "Vertex Explainable AI notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials)
- Source ID: `site-docs-root`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- Tutorial steps Using Python & SQL to query public data in BigQuery Exploring the dataset using BigQuery INFORMATION SCHEMA Creating interactive elements to help explore interesting parts of the data Doing some exploratory correlation and time series analysis Creating static and interactive outputs (data tables and plots) in the notebook Saving some outputs to Cloud Storage Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Workbench Custom training Build a fraud detection model on Vertex AI .
- List of notebooks Select a service AutoML BigQuery BigQuery ML Custom training Image Ray on Vertex AI Tabular Text Vector Search Vertex AI Experiments Vertex AI Feature Store Vertex AI Inference Vertex AI model evaluation Vertex AI Model Monitoring Vertex AI Model Registry Vertex AI Pipelines Vertex AI TensorBoard Vertex AI Vizier Vertex AI Workbench Vertex Explainable AI Vertex ML Metadata Services Description Open in Classification for tabular data AutoML tabular training and prediction .
- Tutorial steps Fetch the required data from BigQuery Preprocess the data Train a TensorFlow (>=2.4) classification model Evaluate the loss for the trained model Automate the notebook execution using the executor feature Save the model to a Cloud Storage path Clean up the created resources Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Workbench Vertex Explainable AI Taxi fare prediction using the Chicago Taxi Trips dataset .
- Tutorial steps Explore data Model with BigQuery and the ARIMA model Evaluate the model Evaluate the model results using BigQuery ML (on training data) Evaluate the model results MAE, MAPE, MSE, RMSE (on test data) Use the executor feature Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Workbench BigQuery ML Interactive exploratory analysis of BigQuery data in a notebook .

### "Vertex AI Workbench managed notebooks access control \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/access-control)
- Source ID: `site-docs-reference-2`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- For example, you can grant users roles/notebooks.viewer permissions at the project level so that they can view all Vertex AI Workbench resources in the project, and then you can grant each user roles/notebooks.admin permissions on a specific managed notebooks instance so that they have all of the admin abilities to administer that instance.
- This page describes how to use Identity and Access Management (IAM) and an access mode to manage access to Vertex AI Workbench managed notebooks resources.
- Vertex AI Workbench uses IAM to manage access to managed notebooks instances and an access mode to manage access to each instance's JupyterLab interface.
- To continue using Vertex AI Workbench, we recommend that you migrate your managed notebooks instances to Vertex AI Workbench instances .

