---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.056Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Gemma 3 270M in Model Garden"
feature_slug: "gemma-3-270m-in-model-garden"
latest_feature_date: "2025-08-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-endpoint-component"
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint"
  - "https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials"
keywords:
  - "gemma"
  - "270m"
  - "model"
  - "garden"
  - "now"
  - "available"
  - "vertex"
  - "ai"
---

# Gemma 3 270M in Model Garden

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

The Gemma 3 270M model is now available in Vertex AI Model Garden.

## Extended Definition

The Gemma 3 270M model is now available in Vertex AI Model Garden.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-endpoint-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-endpoint-component)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint)
- [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)

## Supporting Pages

### Model and endpoint components \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-endpoint-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-endpoint-component)
- Source ID: `site-api-reference`
- Final score: 77
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Model , this resource is available in Vertex AI.
- Model operators The Google Cloud SDK includes the following operators related to the Model resource: ModelDeleteOp ModelExportOp ModelUploadOp Endpoint operators The Google Cloud SDK includes the following operators related to the Endpoint resource: EndpointCreateOp EndpointDeleteOp ModelDeployOp ModelUndeployOp API reference For component reference, see the following Google Cloud SDK reference pages: Model components Endpoint components For Vertex AI API resource reference, see the following API reference pages: model resource reference endpoint resource reference Version history and release notes To learn more about the version history and changes to the Google Cloud Pipeline Components SDK, see the Google Cloud Pipeline Components SDK Release Notes .
- Home Documentation AI and ML Vertex AI Reference Send feedback Model and endpoint components Stay organized with collections Save and categorize content based on your preferences.
- Learn more about how to Import models to Vertex AI and Request predictions .

### Vertex AI model evaluation notebook tutorials \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)
- Source ID: `site-docs-reference-2`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- Learn how to provide text input to Large Language Models available on Vertex AI to test, tune, and deploy generative AI language models.
- This document contains a list of available Vertex AI model evaluation notebook tutorials.
- Tutorial steps Installation of required libraries Reading the dataset from a Cloud Storage bucket Performing exploratory analysis on the dataset Preprocessing the dataset Training a random forest model using scikitlearn Saving the model to a Cloud Storage bucket Creating a Vertex AI model resource and deploying to an endpoint Running the WhatIf Tool on test data Undeploying the model and cleaning up the model resources Colab GitHub Vertex AI Workbench Vertex AI Workbench BigQuery ML Churn prediction for game developers using Google Analytics 4 and BigQuery ML .
- Tutorial steps Create utility functions to download data and prepare csv files for creating Vertex AI managed dataset Download Data Prepare CSV Files for creating managed dataset Create custom training Python package Create TensorFlow Serving container Run custom Python package training with managed text dataset Deploy a model and create an endpoint on Vertex AI Predict on the endpoint Create a Batch Prediction job on the model Colab Colab Enterprise GitHub Vertex AI Workbench Tabular Workflow for TabNet Vertex AI Explanations with TabNet models .

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint)
- Source ID: `site-api-reference-2`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- RolloutOptions JSON representation { "previousDeployedModel" : string , "revisionNumber" : integer , // Union field max unavailable can be only one of the following: "maxUnavailableReplicas" : integer , "maxUnavailablePercentage" : integer // End of list of possible types for union field max unavailable . // Union field max surge can be only one of the following: "maxSurgeReplicas" : integer , "maxSurgePercentage" : integer // End of list of possible types for union field max surge . } Fields previousDeployedModel string ID of the DeployedModel that this deployment should replace. revisionNumber integer Output only.
- Required except for Large Model Deploy use cases. prediction resources can be only one of the following: dedicatedResources object ( DedicatedResources ) A description of resources that are dedicated to the DeployedModel, and that need a higher degree of manual configuration. automaticResources object ( AutomaticResources ) A description of resources that to large degree are decided by Vertex AI, and require only a modest additional configuration. sharedResources string The resource name of the shared DeploymentResourcePool to deploy on.
- Runtime status of the deployed model. systemLabels map (key: string, value: string) System labels to apply to Model Garden deployments.
- If accelerator count is less than or equal to N / 2, Vertex will co-schedule the replicas of the model into the same VM to save cost.

