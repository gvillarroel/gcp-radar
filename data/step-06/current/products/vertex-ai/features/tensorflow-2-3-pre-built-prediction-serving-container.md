---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.189Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "TensorFlow 2.3 pre-built prediction serving container"
feature_slug: "tensorflow-2-3-pre-built-prediction-serving-container"
latest_feature_date: "2021-02-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/configuring-explanations-feature-based"
  - "https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials"
  - "https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials"
keywords:
  - "tensorflow"
  - "pre"
  - "built"
  - "prediction"
  - "serving"
  - "container"
  - "ai"
  - "platform"
---

# TensorFlow 2.3 pre-built prediction serving container

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

AI Platform now provides a pre-built container for serving predictions from TensorFlow 2.3 models.

## Extended Definition

AI Platform now provides a pre-built container for serving predictions from TensorFlow 2.3 models.

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
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The flags most pertinent to Vertex Explainable AI are highlighted. gcloud ai models upload \ --region = LOCATION \ --display-name = MODEL NAME \ --container-image-uri = IMAGE URI \ --artifact-uri = PATH TO MODEL ARTIFACT DIRECTORY \ --explanation-method = integrated-gradients \ --explanation-step-count = STEP COUNT \ --explanation-metadata-file = explanation-metadata.json Replace the following: IMAGE URI : The URI of a TensorFlow pre-built container for serving predictions .
- The flags most pertinent to Vertex Explainable AI are highlighted. gcloud ai models upload \ --region = LOCATION \ --display-name = MODEL NAME \ --container-image-uri = IMAGE URI \ --artifact-uri = PATH TO MODEL ARTIFACT DIRECTORY \ --explanation-method = sampled-shapley \ --explanation-path-count = PATH COUNT \ --explanation-metadata-file = explanation-metadata.json Replace the following: IMAGE URI : The URI of a TensorFlow pre-built container for serving predictions .
- The flags most pertinent to Vertex Explainable AI are highlighted. gcloud ai models upload \ --region = LOCATION \ --display-name = MODEL NAME \ --container-image-uri = IMAGE URI \ --artifact-uri = PATH TO MODEL ARTIFACT DIRECTORY \ --explanation-method = xrai \ --explanation-step-count = STEP COUNT \ --explanation-metadata-file = explanation-metadata.json Replace the following: IMAGE URI : The URI of a TensorFlow pre-built container for serving predictions .
- REST Before using any of the request data, make the following replacements: IMAGE URI : The URI of a TensorFlow pre-built container for serving predictions .

### "Vertex Explainable AI notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials)
- Source ID: `site-docs-reference-2`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Tutorial steps Create utility functions to download data and prepare csv files for creating Vertex AI managed dataset Download Data Prepare CSV Files for creating managed dataset Create custom training Python package Create TensorFlow Serving container Run custom Python package training with managed text dataset Deploy a model and create an endpoint on Vertex AI Predict on the endpoint Create a Batch Prediction job on the model Colab Colab Enterprise GitHub Vertex AI Workbench Tabular Workflow for TabNet Vertex AI Explanations with TabNet models .
- Learn how to create a custom model using Custom Python Package Training and you learn how to serve the model using TensorFlow-Serving Container for online prediction.
- Learn how to package and deploy a PyTorch image classification model using a prebuilt Vertex AI container with TorchServe for serving online and batch predictions.
- Colab Colab Enterprise GitHub Vertex AI Workbench Pre-built containers for prediction Serving PyTorch image models with prebuilt containers on Vertex AI .

### "Vertex ML Metadata notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials)
- Source ID: `site-docs-reference-2`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Tutorial steps Create utility functions to download data and prepare csv files for creating Vertex AI managed dataset Download Data Prepare CSV Files for creating managed dataset Create custom training Python package Create TensorFlow Serving container Run custom Python package training with managed text dataset Deploy a model and create an endpoint on Vertex AI Predict on the endpoint Create a Batch Prediction job on the model Colab Colab Enterprise GitHub Vertex AI Workbench Tabular Workflow for TabNet Vertex AI Explanations with TabNet models .
- Learn how to create a custom model using Custom Python Package Training and you learn how to serve the model using TensorFlow-Serving Container for online prediction.
- Learn how to package and deploy a PyTorch image classification model using a prebuilt Vertex AI container with TorchServe for serving online and batch predictions.
- Colab Colab Enterprise GitHub Vertex AI Workbench Pre-built containers for prediction Serving PyTorch image models with prebuilt containers on Vertex AI .

