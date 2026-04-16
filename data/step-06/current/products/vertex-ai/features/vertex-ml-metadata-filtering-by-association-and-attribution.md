---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.156Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Vertex ML Metadata filtering by association and attribution"
feature_slug: "vertex-ml-metadata-filtering-by-association-and-attribution"
latest_feature_date: "2022-11-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials"
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview"
  - "https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/configuring-explanations-feature-based"
keywords:
  - "vertex"
  - "ml"
  - "metadata"
  - "filtering"
  - "association"
  - "attribution"
  - "now"
  - "supports"
---

# Vertex ML Metadata filtering by association and attribution

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex ML Metadata now supports filtering contexts, executions, and artifacts using association and attribution criteria.

## Extended Definition

Vertex ML Metadata now supports filtering contexts, executions, and artifacts using association and attribution criteria.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials)
- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview)
- [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/configuring-explanations-feature-based](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/configuring-explanations-feature-based)

## Supporting Pages

### "Vertex ML Metadata notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials)
- Source ID: `site-docs-reference-2`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- List of notebooks Select a service AutoML BigQuery BigQuery ML Custom training Image Ray on Vertex AI Tabular Text Vector Search Vertex AI Experiments Vertex AI Feature Store Vertex AI Inference Vertex AI model evaluation Vertex AI Model Monitoring Vertex AI Model Registry Vertex AI Pipelines Vertex AI TensorBoard Vertex AI Vizier Vertex AI Workbench Vertex Explainable AI Vertex ML Metadata Services Description Open in Classification for tabular data AutoML tabular training and prediction .
- Tutorial steps Formalize model experiment in a script Run model traning using local script on Vertex AI Training Check out ML experiment parameters and metrics in Vertex AI Experiments Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Experiments Vertex ML Metadata Custom training Get started with Vertex AI Experiments .
- Colab Colab Enterprise GitHub Vertex AI Workbench Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Configure the endpoint resource for model monitoring Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Model Monitoring Vertex AI Model Monitoring with Vertex Explainable AI Feature Attributions .

### About Vertex AI Feature Store \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/overview)
- Source ID: `site-docs-reference-3`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- Resource version metadata Vertex AI Feature Store only supports the version 0 for features.
- Feature metadata Vertex AI Feature Store is integrated with Knowledge Catalog to provide feature governance capabilities, including feature metadata.
- For more information about searching for Vertex AI Feature Store resources, see Search for resource metadata in Data Catalog .
- Optimized online serving in Vertex AI Feature Store supports embedding management.

### "Configure feature-based explanations \_|\_ Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/configuring-explanations-feature-based](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/configuring-explanations-feature-based)
- Source ID: `site-docs-reference-3`
- Final score: 87
- Re-rank relevance: N/A

Evidence snippets:
- The flags most pertinent to Vertex Explainable AI are highlighted. gcloud ai models upload \ --region = LOCATION \ --display-name = MODEL NAME \ --container-image-uri = IMAGE URI \ --artifact-uri = PATH TO MODEL ARTIFACT DIRECTORY \ --explanation-method = sampled-shapley \ --explanation-path-count = PATH COUNT \ --explanation-metadata-file = explanation-metadata.json Replace the following: PATH COUNT : The number of feature permutations to use for the Sampled Shapley attribution method.
- HTTP method and URL: POST https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /models:upload Request JSON body: { "model": { "displayName": " MODEL NAME ", "containerSpec": { "imageUri": " IMAGE URI " }, "artifactUri": " PATH TO MODEL ARTIFACT DIRECTORY ", "explanationSpec": { "parameters": { "integratedGradientsAttribution": { "stepCount": STEP COUNT } }, "metadata": { "inputs": { " FEATURE NAME ": { "inputTensorName": " INPUT TENSOR NAME ", "modality": " MODALITY ", "visualization": VISUALIZATION SETTINGS } }, "outputs": { " OUTPUT NAME ": { "outputTensorName": " OUTPUT TENSOR NAME " } } } } } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /models:upload Request JSON body: { "model": { "displayName": " MODEL NAME ", "containerSpec": { "imageUri": " IMAGE URI " }, "artifactUri": " PATH TO MODEL ARTIFACT DIRECTORY ", "explanationSpec": { "parameters": { "xraiAttribution": { "stepCount": STEP COUNT } }, "metadata": { "inputs": { " FEATURE NAME ": { "inputTensorName": " INPUT TENSOR NAME ", "modality": "image", "visualization": VISUALIZATION SETTINGS } }, "outputs": { " OUTPUT NAME ": { "outputTensorName": " OUTPUT TENSOR NAME " } } } } } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /models:upload Request JSON body: { "model": { "displayName": " MODEL NAME ", "containerSpec": { "imageUri": " IMAGE URI " }, "artifactUri": " PATH TO MODEL ARTIFACT DIRECTORY ", "explanationSpec": { "parameters": { "sampledShapleyAttribution": { "pathCount": PATH COUNT } }, "metadata": { "inputs": { " FEATURE NAME ": { "inputTensorName": " INPUT TENSOR NAME ", } }, "outputs": { " OUTPUT NAME ": { "outputTensorName": " OUTPUT TENSOR NAME " } } } } } } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

