---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.179Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "AutoML tabular time series forecasting"
feature_slug: "automl-tabular-time-series-forecasting"
latest_feature_date: "2021-05-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/beginner/beginners-guide"
  - "https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials"
  - "https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials"
keywords:
  - "automl"
  - "tabular"
  - "time"
  - "series"
  - "forecasting"
  - "vertex"
  - "ai"
  - "added"
---

# AutoML tabular time series forecasting

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI added support for forecasting with time series data in AutoML tabular models, enabling future numeric predictions.

## Extended Definition

Vertex AI added support for forecasting with time series data in AutoML tabular models, enabling future numeric predictions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/beginner/beginners-guide](https://docs.cloud.google.com/vertex-ai/docs/beginner/beginners-guide)
- [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials)
- [https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials)

## Supporting Pages

### AutoML beginner's guide \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/beginner/beginners-guide](https://docs.cloud.google.com/vertex-ai/docs/beginner/beginners-guide)
- Source ID: `site-docs-reference-2`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- There's no perfect formula, but there are recommended minimums of example data: Classification problem: 50 rows x the number features Forecasting problem: 5000 rows x the number of features 10 unique values in the time series identifier column x the number of features Regression problem: 200 x the number of features Capture variation Your dataset should capture the diversity of your problem space.
- Although Vertex AI can handle a greater magnitude of categories than humans can remember and assign at any one time, if a human cannot recognize a specific category, then Vertex AI will have a hard time as well.
- Home Documentation AI and ML Vertex AI Send feedback AutoML beginner's guide Stay organized with collections Save and categorize content based on your preferences.
- This guide walks you through how Vertex AI works for AutoML dataset s and models, and illustrates the kinds of problems Vertex AI solves.

### "Vertex Explainable AI notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials)
- Source ID: `site-docs-reference-2`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- Tutorial steps Train an image model Export the image model as an edge model Train a tabular model Export the tabular model as a cloud model Train a text model Colab Colab Enterprise GitHub Vertex AI Workbench Hierarchical forecasting for tabular data Vertex AI AutoML training hierarchical forecasting for batch prediction .
- Learn how to create an AutoML tabular forecasting model from a Python script, and then generate batch prediction using the Vertex AI SDK.
- Colab Colab Enterprise GitHub Vertex AI Workbench Forecasting with AutoML AutoML tabular forecasting model for batch prediction .
- Tutorial steps Using Python & SQL to query public data in BigQuery Exploring the dataset using BigQuery INFORMATION SCHEMA Creating interactive elements to help explore interesting parts of the data Doing some exploratory correlation and time series analysis Creating static and interactive outputs (data tables and plots) in the notebook Saving some outputs to Cloud Storage Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Workbench Custom training Build a fraud detection model on Vertex AI .

### "Vertex ML Metadata notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials)
- Source ID: `site-docs-reference-2`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- Tutorial steps Train an image model Export the image model as an edge model Train a tabular model Export the tabular model as a cloud model Train a text model Colab Colab Enterprise GitHub Vertex AI Workbench Hierarchical forecasting for tabular data Vertex AI AutoML training hierarchical forecasting for batch prediction .
- Learn how to create an AutoML tabular forecasting model from a Python script, and then generate batch prediction using the Vertex AI SDK.
- Colab Colab Enterprise GitHub Vertex AI Workbench Forecasting with AutoML AutoML tabular forecasting model for batch prediction .
- Tutorial steps Using Python & SQL to query public data in BigQuery Exploring the dataset using BigQuery INFORMATION SCHEMA Creating interactive elements to help explore interesting parts of the data Doing some exploratory correlation and time series analysis Creating static and interactive outputs (data tables and plots) in the notebook Saving some outputs to Cloud Storage Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Workbench Custom training Build a fraud detection model on Vertex AI .

