---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:42:01.366Z"
product_name: "Vertex AI Workbench"
product_slug: "vertex-ai-workbench"
feature_name: "Idle shutdown for managed notebook instances"
feature_slug: "idle-shutdown-for-managed-notebook-instances"
latest_feature_date: "2022-04-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access"
  - "https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials"
  - "https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials"
keywords:
  - "idle"
  - "shutdown"
  - "managed"
  - "notebook"
  - "instances"
  - "automatic"
  - "reduce"
  - "running"
---

# Idle shutdown for managed notebook instances

Product: Vertex AI Workbench
Coverage: MEDIUM

## Step 02 Summary

Managed notebook instances support automatic idle shutdown to reduce running costs.

## Extended Definition

Managed notebook instances support automatic idle shutdown to reduce running costs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access)
- [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials)
- [https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials)

## Supporting Pages

### "Manage access to a Vertex AI Workbench managed notebooks instance \_|\_\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access](https://docs.cloud.google.com/vertex-ai/docs/workbench/managed/manage-access)
- Source ID: `site-docs-reference-2`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Before using any of the request data, make the following replacements: INSTANCE NAME : The name of your managed notebooks instance HTTP method and URL: POST https://notebooks.googleapis.com/v1/ INSTANCE NAME :setIamPolicy Request JSON body: { "policy": { "bindings": [ { "role": "roles/notebooks.viewer", "members": [ "user:email@example.com" ] }, { "role": "roles/notebooks.admin", "members": [ "user:eve@example.com" ] } ], "etag": "BwWWja0YfJA=", "version": 3 } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Retrieve the current policy Before using any of the request data, make the following replacements: INSTANCE NAME : The name of your managed notebooks instance HTTP method and URL: GET https://notebooks.googleapis.com/v1/ INSTANCE NAME :getIamPolicy To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Grant access to managed notebooks instances To grant users permission to access a specific managed notebooks instance, set an IAM policy on the instance.
- To continue using Vertex AI Workbench, we recommend that you migrate your managed notebooks instances to Vertex AI Workbench instances .

### "Vertex Explainable AI notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If none of your instances are running, select an instance and then click Start .
- Running the notebook endtoend as a training job using Executor.
- Tutorial steps Installation of required libraries Reading the dataset from a Cloud Storage bucket Performing exploratory analysis on the dataset Preprocessing the dataset Training a random forest model using scikitlearn Saving the model to a Cloud Storage bucket Creating a Vertex AI model resource and deploying to an endpoint Running the WhatIf Tool on test data Undeploying the model and cleaning up the model resources Colab GitHub Vertex AI Workbench Vertex AI Workbench BigQuery ML Churn prediction for game developers using Google Analytics 4 and BigQuery ML .
- Tutorial steps Create utility functions to download data and prepare csv files for creating Vertex AI managed dataset Download Data Prepare CSV Files for creating managed dataset Create custom training Python package Create TensorFlow Serving container Run custom Python package training with managed text dataset Deploy a model and create an endpoint on Vertex AI Predict on the endpoint Create a Batch Prediction job on the model Colab Colab Enterprise GitHub Vertex AI Workbench Tabular Workflow for TabNet Vertex AI Explanations with TabNet models .

### "Vertex ML Metadata notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If none of your instances are running, select an instance and then click Start .
- Running the notebook endtoend as a training job using Executor.
- Tutorial steps Installation of required libraries Reading the dataset from a Cloud Storage bucket Performing exploratory analysis on the dataset Preprocessing the dataset Training a random forest model using scikitlearn Saving the model to a Cloud Storage bucket Creating a Vertex AI model resource and deploying to an endpoint Running the WhatIf Tool on test data Undeploying the model and cleaning up the model resources Colab GitHub Vertex AI Workbench Vertex AI Workbench BigQuery ML Churn prediction for game developers using Google Analytics 4 and BigQuery ML .
- Tutorial steps Create utility functions to download data and prepare csv files for creating Vertex AI managed dataset Download Data Prepare CSV Files for creating managed dataset Create custom training Python package Create TensorFlow Serving container Run custom Python package training with managed text dataset Deploy a model and create an endpoint on Vertex AI Predict on the endpoint Create a Batch Prediction job on the model Colab Colab Enterprise GitHub Vertex AI Workbench Tabular Workflow for TabNet Vertex AI Explanations with TabNet models .

