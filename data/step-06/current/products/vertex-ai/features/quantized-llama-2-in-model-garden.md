---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.089Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Quantized LLaMA 2 in Model Garden"
feature_slug: "quantized-llama-2-in-model-garden"
latest_feature_date: "2024-02-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/rest"
  - "https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials"
  - "https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials"
keywords:
  - "quantized"
  - "llama"
  - "model"
  - "garden"
  - "versions"
  - "meta"
  - "models"
  - "were"
---

# Quantized LLaMA 2 in Model Garden

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Quantized versions of Meta's Llama 2 models were added to Model Garden.

## Extended Definition

Quantized versions of Meta's Llama 2 models were added to Model Garden.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/reference/rest)
- [https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials)
- [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)

## Supporting Pages

### Vertex AI API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 134
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1beta1.projects.locations.models Methods copy POST /v1beta1/{parent}/models:copy Copies an already existing Vertex AI Model into the specified Location. delete DELETE /v1beta1/{name} Deletes a Model. deleteVersion DELETE /v1beta1/{name}:deleteVersion Deletes a Model version. export POST /v1beta1/{name}:export Exports a trained, exportable Model to a location specified by the user. get GET /v1beta1/{name} Gets a Model. getIamPolicy POST /v1beta1/{resource}:getIamPolicy Gets the access control policy for a resource. list GET /v1beta1/{parent}/models Lists Models in a Location. listCheckpoints GET /v1beta1/{name}:listCheckpoints Lists checkpoints of the specified model version. listVersions GET /v1beta1/{name}:listVersions Lists versions of the specified model. mergeVersionAliases POST /v1beta1/{name}:mergeVersionAliases Merges a set of aliases for a Model version. patch PATCH /v1beta1/{model.name} Updates a Model. setIamPolicy POST /v1beta1/{resource}:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v1beta1/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource. updateExplanationDataset POST /v1beta1/{model}:updateExplanationDataset Incrementally update the dataset used for an examples model. upload POST /v1beta1/{parent}/models:upload Uploads a Model artifact into Vertex AI.
- REST Resource: v1.projects.locations.models Methods copy POST /v1/{parent}/models:copy Copies an already existing Vertex AI Model into the specified Location. delete DELETE /v1/{name} Deletes a Model. deleteVersion DELETE /v1/{name}:deleteVersion Deletes a Model version. export POST /v1/{name}:export Exports a trained, exportable Model to a location specified by the user. get GET /v1/{name} Gets a Model. getIamPolicy POST /v1/{resource}:getIamPolicy Gets the access control policy for a resource. list GET /v1/{parent}/models Lists Models in a Location. listCheckpoints GET /v1/{name}:listCheckpoints Lists checkpoints of the specified model version. listVersions GET /v1/{name}:listVersions Lists versions of the specified model. mergeVersionAliases POST /v1/{name}:mergeVersionAliases Merges a set of aliases for a Model version. patch PATCH /v1/{model.name} Updates a Model. setIamPolicy POST /v1/{resource}:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v1/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource. updateExplanationDataset POST /v1/{model}:updateExplanationDataset Incrementally update the dataset used for an examples model. upload POST /v1/{parent}/models:upload Uploads a Model artifact into Vertex AI.
- REST Resource: v1beta1.publishers.models Methods get GET /v1beta1/{name} Gets a Model Garden publisher model. list GET /v1beta1/{parent}/models Lists publisher models in Model Garden.
- REST Resource: v1.publishers.models Methods get GET /v1/{name} Gets a Model Garden publisher model.

### "Vertex ML Metadata notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials)
- Source ID: `site-docs-reference-2`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- Colab Colab Enterprise GitHub Vertex AI Workbench Vertex ML Metadata Track parameters and metrics for locally trained models .
- Tutorial steps Create utility functions to download data and prepare csv files for creating Vertex AI managed dataset Download Data Prepare CSV Files for creating managed dataset Create custom training Python package Create TensorFlow Serving container Run custom Python package training with managed text dataset Deploy a model and create an endpoint on Vertex AI Predict on the endpoint Create a Batch Prediction job on the model Colab Colab Enterprise GitHub Vertex AI Workbench Tabular Workflow for TabNet Vertex AI Explanations with TabNet models .
- List of notebooks Select a service AutoML BigQuery BigQuery ML Custom training Image Ray on Vertex AI Tabular Text Vector Search Vertex AI Experiments Vertex AI Feature Store Vertex AI Inference Vertex AI model evaluation Vertex AI Model Monitoring Vertex AI Model Registry Vertex AI Pipelines Vertex AI TensorBoard Vertex AI Vizier Vertex AI Workbench Vertex Explainable AI Vertex ML Metadata Services Description Open in Classification for tabular data AutoML tabular training and prediction .
- Tutorial steps Download a pretrained image model from PyTorch Create a custom model handler Package model artifacts in a model archive file Upload model for deployment Deploy model for prediction Make online predictions Make batch predictions Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Inference Train and deploy PyTorch models with prebuilt containers on Vertex AI .

### Vertex AI model evaluation notebook tutorials \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)
- Source ID: `site-docs-reference-2`
- Final score: 123
- Re-rank relevance: N/A

Evidence snippets:
- Colab Colab Enterprise GitHub Vertex AI Workbench Vertex ML Metadata Track parameters and metrics for locally trained models .
- Tutorial steps Create utility functions to download data and prepare csv files for creating Vertex AI managed dataset Download Data Prepare CSV Files for creating managed dataset Create custom training Python package Create TensorFlow Serving container Run custom Python package training with managed text dataset Deploy a model and create an endpoint on Vertex AI Predict on the endpoint Create a Batch Prediction job on the model Colab Colab Enterprise GitHub Vertex AI Workbench Tabular Workflow for TabNet Vertex AI Explanations with TabNet models .
- List of notebooks Select a service AutoML BigQuery BigQuery ML Custom training Image Ray on Vertex AI Tabular Text Vector Search Vertex AI Experiments Vertex AI Feature Store Vertex AI Inference Vertex AI model evaluation Vertex AI Model Monitoring Vertex AI Model Registry Vertex AI Pipelines Vertex AI TensorBoard Vertex AI Vizier Vertex AI Workbench Vertex Explainable AI Vertex ML Metadata Services Description Open in Classification for tabular data AutoML tabular training and prediction .
- Tutorial steps Download a pretrained image model from PyTorch Create a custom model handler Package model artifacts in a model archive file Upload model for deployment Deploy model for prediction Make online predictions Make batch predictions Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Inference Train and deploy PyTorch models with prebuilt containers on Vertex AI .

