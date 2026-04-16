---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.089Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Stable Diffusion XL LCM in Model Garden"
feature_slug: "stable-diffusion-xl-lcm-in-model-garden"
latest_feature_date: "2024-02-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint"
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-automl/error-analysis"
  - "https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials"
keywords:
  - "stable"
  - "diffusion"
  - "xl"
  - "lcm"
  - "model"
  - "garden"
  - "latent"
  - "consistency"
---

# Stable Diffusion XL LCM in Model Garden

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Stable Diffusion XL LCM (Latent Consistency Model) was added to Model Garden for faster, high-quality text-to-image generation with fewer inference steps.

## Extended Definition

Stable Diffusion XL LCM (Latent Consistency Model) was added to Model Garden for faster, high-quality text-to-image generation with fewer inference steps.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-automl/error-analysis](https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-automl/error-analysis)
- [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)

## Supporting Pages

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint)
- Source ID: `site-api-reference-2`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- Runtime status of the deployed model. systemLabels map (key: string, value: string) System labels to apply to Model Garden deployments.
- Currently, only Model Garden models are supported.
- DeployedModel JSON representation { "id" : string , "model" : string , "gdcConnectedModel" : string , "modelVersionId" : string , "displayName" : string , "createTime" : string , "explanationSpec" : { object ( ExplanationSpec ) } , "disableExplanations" : boolean , "serviceAccount" : string , "enableContainerLogging" : boolean , "disableContainerLogging" : boolean , "enableAccessLogging" : boolean , "privateEndpoints" : { object ( PrivateEndpoints ) } , "fasterDeploymentConfig" : { object ( FasterDeploymentConfig ) } , "rolloutOptions" : { object ( RolloutOptions ) } , "status" : { object ( Status ) } , "systemLabels" : { string : string , ... } , "checkpointId" : string , "speculativeDecodingSpec" : { object ( SpeculativeDecodingSpec ) } , // Union field prediction resources can be only one of the following: "dedicatedResources" : { object ( DedicatedResources ) } , "automaticResources" : { object ( AutomaticResources ) } , "sharedResources" : string , "fullFineTunedResources" : { object ( FullFineTunedResources ) } // End of list of possible types for union field prediction resources . } Fields id string Immutable.
- Endpoint JSON representation { "name" : string , "displayName" : string , "description" : string , "deployedModels" : [ { object ( DeployedModel ) } ] , "trafficSplit" : { string : integer , ... } , "etag" : string , "labels" : { string : string , ... } , "createTime" : string , "updateTime" : string , "encryptionSpec" : { object ( EncryptionSpec ) } , "network" : string , "enablePrivateServiceConnect" : boolean , "privateServiceConnectConfig" : { object ( PrivateServiceConnectConfig ) } , "modelDeploymentMonitoringJob" : string , "predictRequestResponseLoggingConfig" : { object ( PredictRequestResponseLoggingConfig ) } , "dedicatedEndpointEnabled" : boolean , "dedicatedEndpointDns" : string , "clientConnectionConfig" : { object ( ClientConnectionConfig ) } , "satisfiesPzs" : boolean , "satisfiesPzi" : boolean , "genAiAdvancedFeaturesConfig" : { object ( GenAiAdvancedFeaturesConfig ) } } Fields name string Identifier.

### "Hello image data: Evaluating and analyzing model performance \_|\_ Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-automl/error-analysis](https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-automl/error-analysis)
- Source ID: `site-docs-reference-2`
- Final score: 67
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Previous arrow back Train an AutoML image classification model Next Deploy a model to an endpoint and make an inference arrow forward Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- If a visually similar sample from the training set has different labels from the test sample, it's possible that one of them is incorrect, or that the subtle difference requires more data for the model to learn from, or that the current class labels are simply not accurate enough to describe the given sample.
- Home Documentation AI and ML Vertex AI Send feedback Hello image data: Evaluating and analyzing model performance Stay organized with collections Save and categorize content based on your preferences.
- What's next If you're happy with the model performance, follow the next page of this tutorial to deploy your trained AutoML model to an endpoint and send an image to the model for prediction.

### Vertex AI model evaluation notebook tutorials \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)
- Source ID: `site-docs-reference-2`
- Final score: 61
- Re-rank relevance: N/A

Evidence snippets:
- Tutorial steps Installation of required libraries Reading the dataset from a Cloud Storage bucket Performing exploratory analysis on the dataset Preprocessing the dataset Training a random forest model using scikitlearn Saving the model to a Cloud Storage bucket Creating a Vertex AI model resource and deploying to an endpoint Running the WhatIf Tool on test data Undeploying the model and cleaning up the model resources Colab GitHub Vertex AI Workbench Vertex AI Workbench BigQuery ML Churn prediction for game developers using Google Analytics 4 and BigQuery ML .
- Tutorial steps Create utility functions to download data and prepare csv files for creating Vertex AI managed dataset Download Data Prepare CSV Files for creating managed dataset Create custom training Python package Create TensorFlow Serving container Run custom Python package training with managed text dataset Deploy a model and create an endpoint on Vertex AI Predict on the endpoint Create a Batch Prediction job on the model Colab Colab Enterprise GitHub Vertex AI Workbench Tabular Workflow for TabNet Vertex AI Explanations with TabNet models .
- Tutorial steps Create a local BigQuery table in your project Train a BigQuery ML model Evaluate the BigQuery ML model Export the BigQuery ML model as a cloud model Upload the exported model as a Vertex AI model resource Hyperparameter tune a BigQuery ML model with Vertex AI Vizier Automatically register a BigQuery ML model to Vertex AI Model Registry Colab Colab Enterprise GitHub Vertex AI Workbench Custom training Vertex AI Inference Deploying Iris-detection model using FastAPI and Vertex AI custom container serving .
- Tutorial steps Using Python & SQL to query public data in BigQuery Exploring the dataset using BigQuery INFORMATION SCHEMA Creating interactive elements to help explore interesting parts of the data Doing some exploratory correlation and time series analysis Creating static and interactive outputs (data tables and plots) in the notebook Saving some outputs to Cloud Storage Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Workbench Custom training Build a fraud detection model on Vertex AI .

