---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:42:01.275Z"
product_name: "Vertex AI Workbench"
product_slug: "vertex-ai-workbench"
feature_name: "Vertex AI Workbench Jupyter dependency environment placement"
feature_slug: "vertex-ai-workbench-jupyter-dependency-environment-placement"
latest_feature_date: "2023-04-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam"
  - "https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication"
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks"
keywords:
  - "vertex"
  - "ai"
  - "workbench"
  - "jupyter"
  - "dependency"
  - "environment"
  - "placement"
  - "user"
---

# Vertex AI Workbench Jupyter dependency environment placement

Product: Vertex AI Workbench
Coverage: MEDIUM

## Step 02 Summary

The Vertex AI Workbench user-managed notebooks rolled back a prior change that moved Jupyter dependencies into a separate Conda environment.

## Extended Definition

The Vertex AI Workbench user-managed notebooks rolled back a prior change that moved Jupyter dependencies into a separate Conda environment.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam)
- [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks)

## Supporting Pages

### "Vertex AI Workbench user-managed notebooks access control \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam](https://docs.cloud.google.com/vertex-ai/docs/workbench/user-managed/iam)
- Source ID: `site-docs-reference-2`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- Vertex AI Workbench uses IAM to manage access to user-managed notebooks instances and an access mode to manage access to each instance's JupyterLab interface.
- For example, you can grant users roles/notebooks.viewer permissions at the project level so that they can view all Vertex AI Workbench resources in the project, and then you can grant each user roles/notebooks.admin permissions on a specific user-managed notebooks instance so that they have all of the admin abilities to administer that instance.
- This page describes how to use Identity and Access Management (IAM) and an access mode to manage access to Vertex AI Workbench user-managed notebooks resources.
- To continue using Vertex AI Workbench, we recommend that you migrate your user-managed notebooks instances to Vertex AI Workbench instances .

### Authenticate to Vertex AI Workbench \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication](https://docs.cloud.google.com/vertex-ai/docs/workbench/reference/authentication)
- Source ID: `site-docs-reference-2`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- What's next Learn more about access control for Vertex AI Workbench instances: Vertex AI Workbench instances access control Manage access to a Vertex AI Workbench instance Manage access to JupyterLab in Vertex AI Workbench instances Learn more about access control for Vertex AI Workbench user-managed notebooks instances: User-managed notebooks access control Manage access to a Vertex AI Workbench user-managed notebooks instance Manage access to JupyterLab in user-managed notebooks Learn more about access control for Vertex AI Workbench managed notebooks instances: Managed notebooks access control Manage access to a managed notebooks instance Manage access to JupyterLab in managed notebooks Learn about Google Cloud authentication methods .
- Google Cloud CLI When you use the gcloud CLI to access Vertex AI Workbench, you log in to the gcloud CLI with a user account, which provides the credentials used by the gcloud CLI commands.
- How you authenticate to Vertex AI Workbench depends on the interface you use to access the API and the environment where your code is running.
- Set up authentication for Vertex AI Workbench How you set up authentication depends on the environment where your code is running.

### Custom training notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks](https://docs.cloud.google.com/vertex-ai/docs/tutorials/custom-training-pipelines/custom-training-jupyter-notebooks)
- Source ID: `site-docs-root`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- Colab Colab Enterprise GitHub Vertex AI Workbench BigQuery datasets Vertex AI for BigQuery users Get started with BigQuery datasets .
- Tutorial steps Installation of required libraries Reading the dataset from a Cloud Storage bucket Performing exploratory analysis on the dataset Preprocessing the dataset Training a random forest model using scikitlearn Saving the model to a Cloud Storage bucket Creating a Vertex AI model resource and deploying to an endpoint Running the WhatIf Tool on test data Undeploying the model and cleaning up the model resources Colab GitHub Vertex AI Workbench Vertex AI Workbench BigQuery ML Churn prediction for game developers using Google Analytics 4 and BigQuery ML .
- Tutorial steps Create utility functions to download data and prepare csv files for creating Vertex AI managed dataset Download Data Prepare CSV Files for creating managed dataset Create custom training Python package Create TensorFlow Serving container Run custom Python package training with managed text dataset Deploy a model and create an endpoint on Vertex AI Predict on the endpoint Create a Batch Prediction job on the model Colab Colab Enterprise GitHub Vertex AI Workbench Tabular Workflow for TabNet Vertex AI Explanations with TabNet models .
- Tutorial steps Create custom Ray on Vertex AI container image Create a Ray cluster on Vertex AI using custom container image Run Spark interactively on the cluster using RayDP Run Spark application on cluster via Ray Job API Read files from Google Cloud Storage in Spark application Pandas UDF in Spark application on Ray on Vertex AI Delete the Ray cluster on Vertex AI Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Training Vertex AI Reduction Server PyTorch distributed training with Vertex AI Reduction Server .

