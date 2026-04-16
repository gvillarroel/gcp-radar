---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.111Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "textembedding-gecko-multilingual model"
feature_slug: "textembedding-gecko-multilingual-model"
latest_feature_date: "2023-08-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-evaluation-component"
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-bq-prediction"
  - "https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-endpoint-component"
keywords:
  - "textembedding"
  - "gecko"
  - "multilingual"
  - "model"
  - "vertex"
  - "ai"
  - "now"
  - "offers"
---

# textembedding-gecko-multilingual model

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI now offers the textembedding-gecko-multilingual model in preview for creating embeddings from prompts across a broad range of non-English languages.

## Extended Definition

Vertex AI now offers the textembedding-gecko-multilingual model in preview for creating embeddings from prompts across a broad range of non-English languages.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-evaluation-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-evaluation-component)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-bq-prediction](https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-bq-prediction)
- [https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-endpoint-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-endpoint-component)

## Supporting Pages

### Model evaluation components \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-evaluation-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-evaluation-component)
- Source ID: `site-api-reference`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- Vertex AI provides the following model evaluation components: ModelEvaluationClassificationOp ModelEvaluationForecastingOp ModelEvaluationRegressionOp Model type support The following table shows supported model types for each model evaluation component: Model evaluation component Supported model types ModelEvaluationClassificationOp AutoML tabular or image Custom tabular ModelEvaluationRegressionOp AutoML tabular Custom tabular ModelEvaluationForecastingOp AutoML tabular Remove the target field For some model types, the BatchPredictionJob component requires you to exclude the target column (ground truth) from your dataset.
- Home Documentation AI and ML Vertex AI Reference Send feedback Model evaluation components Stay organized with collections Save and categorize content based on your preferences.
- Model evaluations without Vertex AI-generated batch predictions You can use a model evaluation pipeline component with a batch prediction that you didn't generate in Vertex AI.
- Sliced metrics offers more granular evaluation metrics for AutoML tabular and custom training classification models.

### Train a model using Vertex AI and the Python SDK \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-bq-prediction](https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-bq-prediction)
- Source ID: `site-docs-reference-2`
- Final score: 67
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- What you accomplish This tutorial walks you through how to use the Vertex AI SDK for Python to do the following: Create a Cloud Storage bucket to store a dataset Preprocess data for training Use the processed data to create a dataset in BigQuery Use the BigQuery dataset to create a Vertex AI tabular dataset Create and train a custom-trained model Deploy the custom-trained model to an endpoint Generate a prediction Undeploy the model Delete all resources created in the tutorial so you don't incur further charges Billable resources used This tutorial uses billable resources associated with the Vertex AI, BigQuery, and Cloud Storage Google Cloud services.
- Home Documentation AI and ML Vertex AI Send feedback Train a model using Vertex AI and the Python SDK Stay organized with collections Save and categorize content based on your preferences.
- This tutorial is a start-to-finish guide that shows you how to use the Vertex AI SDK for Python to create a custom-trained model.
- Vertex AI offers $300 in free credits to new customers, and Cloud Storage and BigQuery have free tiers .

### Model and endpoint components \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-endpoint-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-endpoint-component)
- Source ID: `site-api-reference`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- Model operators The Google Cloud SDK includes the following operators related to the Model resource: ModelDeleteOp ModelExportOp ModelUploadOp Endpoint operators The Google Cloud SDK includes the following operators related to the Endpoint resource: EndpointCreateOp EndpointDeleteOp ModelDeployOp ModelUndeployOp API reference For component reference, see the following Google Cloud SDK reference pages: Model components Endpoint components For Vertex AI API resource reference, see the following API reference pages: model resource reference endpoint resource reference Version history and release notes To learn more about the version history and changes to the Google Cloud Pipeline Components SDK, see the Google Cloud Pipeline Components SDK Release Notes .
- Home Documentation AI and ML Vertex AI Reference Send feedback Model and endpoint components Stay organized with collections Save and categorize content based on your preferences.
- Learn more about how to Import models to Vertex AI and Request predictions .
- Model , this resource is available in Vertex AI.

