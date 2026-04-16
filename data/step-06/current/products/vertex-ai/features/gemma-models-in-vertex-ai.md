---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.086Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Gemma models in Vertex AI"
feature_slug: "gemma-models-in-vertex-ai"
latest_feature_date: "2024-02-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials"
  - "https://docs.cloud.google.com/vertex-ai/docs/evaluation/introduction"
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-automl/deploy-predict"
keywords:
  - "gemma"
  - "models"
  - "vertex"
  - "ai"
  - "made"
  - "open"
  - "model"
  - "family"
---

# Gemma models in Vertex AI

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI made the Gemma open model family available for use on user hardware, mobile devices, or hosted services.

## Extended Definition

Vertex AI made the Gemma open model family available for use on user hardware, mobile devices, or hosted services.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)
- [https://docs.cloud.google.com/vertex-ai/docs/evaluation/introduction](https://docs.cloud.google.com/vertex-ai/docs/evaluation/introduction)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-automl/deploy-predict](https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-automl/deploy-predict)

## Supporting Pages

### Vertex AI model evaluation notebook tutorials \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)
- Source ID: `site-docs-reference-2`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- Tutorial steps Create utility functions to download data and prepare csv files for creating Vertex AI managed dataset Download Data Prepare CSV Files for creating managed dataset Create custom training Python package Create TensorFlow Serving container Run custom Python package training with managed text dataset Deploy a model and create an endpoint on Vertex AI Predict on the endpoint Create a Batch Prediction job on the model Colab Colab Enterprise GitHub Vertex AI Workbench Tabular Workflow for TabNet Vertex AI Explanations with TabNet models .
- List of notebooks Select a service AutoML BigQuery BigQuery ML Custom training Image Ray on Vertex AI Tabular Text Vector Search Vertex AI Experiments Vertex AI Feature Store Vertex AI Inference Vertex AI model evaluation Vertex AI Model Monitoring Vertex AI Model Registry Vertex AI Pipelines Vertex AI TensorBoard Vertex AI Vizier Vertex AI Workbench Vertex Explainable AI Vertex ML Metadata Services Description Open in Classification for tabular data AutoML tabular training and prediction .
- Tutorial steps Download a pretrained image model from PyTorch Create a custom model handler Package model artifacts in a model archive file Upload model for deployment Deploy model for prediction Make online predictions Make batch predictions Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Inference Train and deploy PyTorch models with prebuilt containers on Vertex AI .
- Tutorial steps Execute module for preprocessing data Create a dataset artifact Log parameters Execute module for training the model Log parameters Create model artifact Assign tracking lineage to dataset, model and parameters Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Experiments Track parameters and metrics for locally trained models .

### "Hello tabular data: Deploy a model and request a prediction \_|\_ Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-automl/deploy-predict](https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-automl/deploy-predict)
- Source ID: `site-docs-reference-2`
- Final score: 101
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the Google Cloud console, in the Vertex AI section, go to the Models page.
- Home Documentation AI and ML Vertex AI Send feedback Hello tabular data: Deploy a model and request a prediction Stay organized with collections Save and categorize content based on your preferences.
- Go to the Models page From the models list, click the name of your trained model that you created previously Models are organized into versions.
- For this model, a prediction result of 1 represents a negative outcome—a deposit is not made at the bank.

### Model evaluation in Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/evaluation/introduction](https://docs.cloud.google.com/vertex-ai/docs/evaluation/introduction)
- Source ID: `site-docs-reference-3`
- Final score: 101
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Notebook tutorials AutoML: Tabular To learn more, run the following notebooks in the environment of your choice: "Vertex AI: Evaluating batch prediction results from an AutoML Tabular classification model": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "Vertex AI Pipelines: Evaluating batch prediction results from AutoML Tabular regression model": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub Custom training: Tabular To learn more, run the following notebooks in the environment of your choice: "Vertex AI Pipelines: Evaluating BatchPrediction results from a Custom Tabular classification model": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub "Vertex AI Pipelines: Evaluating batch prediction results from custom tabular regression model": Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub Vertex AI Model Registry To learn more, run the "Get started with importing a custom model evaluation to the Vertex AI Model Registry" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub What's next Learn how to perform model evaluation using Vertex AI .
- Note: Vertex AI provides model evaluation metrics for both predictive AI and generative AI models.
- Vertex AI supports evaluation of the following model types: Image Classification You can view and download schema files from the following Cloud Storage location: gs://google-cloud-aiplatform/schema/modelevaluation/ AuPRC : The area under the precision-recall (PR) curve , also referred to as average precision.
- The model evaluation provided by Vertex AI can fit in the typical machine learning workflow in several ways: After you train your model, review model evaluation metrics before you deploy your model.

