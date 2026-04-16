---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.173Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "TensorFlow 2.6 prediction serving container"
feature_slug: "tensorflow-2-6-prediction-serving-container"
latest_feature_date: "2021-09-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/configuring-explanations-feature-based"
  - "https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials"
  - "https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials"
keywords:
  - "tensorflow"
  - "prediction"
  - "serving"
  - "container"
  - "vertex"
  - "ai"
  - "adds"
  - "pre"
---

# TensorFlow 2.6 prediction serving container

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI adds a pre-built container for serving predictions from TensorFlow 2.6 models.

## Extended Definition

Vertex AI adds a pre-built container for serving predictions from TensorFlow 2.6 models.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/configuring-explanations-feature-based](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/configuring-explanations-feature-based)
- [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials)
- [https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials)

## Supporting Pages

### "Configure feature-based explanations \_|\_ Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/configuring-explanations-feature-based](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/configuring-explanations-feature-based)
- Source ID: `site-docs-reference-3`
- Final score: 126
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The flags most pertinent to Vertex Explainable AI are highlighted. gcloud ai models upload \ --region = LOCATION \ --display-name = MODEL NAME \ --container-image-uri = IMAGE URI \ --artifact-uri = PATH TO MODEL ARTIFACT DIRECTORY \ --explanation-method = integrated-gradients \ --explanation-step-count = STEP COUNT \ --explanation-metadata-file = explanation-metadata.json Replace the following: IMAGE URI : The URI of a TensorFlow pre-built container for serving predictions .
- The flags most pertinent to Vertex Explainable AI are highlighted. gcloud ai models upload \ --region = LOCATION \ --display-name = MODEL NAME \ --container-image-uri = IMAGE URI \ --artifact-uri = PATH TO MODEL ARTIFACT DIRECTORY \ --explanation-method = sampled-shapley \ --explanation-path-count = PATH COUNT \ --explanation-metadata-file = explanation-metadata.json Replace the following: IMAGE URI : The URI of a TensorFlow pre-built container for serving predictions .
- The flags most pertinent to Vertex Explainable AI are highlighted. gcloud ai models upload \ --region = LOCATION \ --display-name = MODEL NAME \ --container-image-uri = IMAGE URI \ --artifact-uri = PATH TO MODEL ARTIFACT DIRECTORY \ --explanation-method = xrai \ --explanation-step-count = STEP COUNT \ --explanation-metadata-file = explanation-metadata.json Replace the following: IMAGE URI : The URI of a TensorFlow pre-built container for serving predictions .
- The flags most pertinent to Vertex Explainable AI are highlighted. gcloud ai models upload \ --region = LOCATION \ --display-name = MODEL NAME \ --container-image-uri = IMAGE URI \ --artifact-uri = PATH TO MODEL ARTIFACT DIRECTORY \ --explanation-method = sampled-shapley \ --explanation-path-count = PATH COUNT \ --explanation-metadata-file = explanation-metadata.json Replace the following: IMAGE URI : The URI of a pre-built container for serving predictions .

### "Vertex Explainable AI notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials)
- Source ID: `site-docs-reference-2`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Tutorial steps Create utility functions to download data and prepare csv files for creating Vertex AI managed dataset Download Data Prepare CSV Files for creating managed dataset Create custom training Python package Create TensorFlow Serving container Run custom Python package training with managed text dataset Deploy a model and create an endpoint on Vertex AI Predict on the endpoint Create a Batch Prediction job on the model Colab Colab Enterprise GitHub Vertex AI Workbench Tabular Workflow for TabNet Vertex AI Explanations with TabNet models .
- Tutorial steps Build and train a TensorFlow text classification model Upload model for deployment Deploy model for online prediction Make online prediction with explanations Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Feature Store Online feature serving and fetching of BigQuery data with Vertex AI Feature Store .
- Learn how to create a custom model using Custom Python Package Training and you learn how to serve the model using TensorFlow-Serving Container for online prediction.
- Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Model Monitoring Vertex AI Model Monitoring for custom tabular models with TensorFlow Serving container .

### "Vertex ML Metadata notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials)
- Source ID: `site-docs-reference-2`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Tutorial steps Create utility functions to download data and prepare csv files for creating Vertex AI managed dataset Download Data Prepare CSV Files for creating managed dataset Create custom training Python package Create TensorFlow Serving container Run custom Python package training with managed text dataset Deploy a model and create an endpoint on Vertex AI Predict on the endpoint Create a Batch Prediction job on the model Colab Colab Enterprise GitHub Vertex AI Workbench Tabular Workflow for TabNet Vertex AI Explanations with TabNet models .
- Tutorial steps Build and train a TensorFlow text classification model Upload model for deployment Deploy model for online prediction Make online prediction with explanations Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Feature Store Online feature serving and fetching of BigQuery data with Vertex AI Feature Store .
- Learn how to create a custom model using Custom Python Package Training and you learn how to serve the model using TensorFlow-Serving Container for online prediction.
- Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Model Monitoring Vertex AI Model Monitoring for custom tabular models with TensorFlow Serving container .

