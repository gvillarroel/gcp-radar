---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.070Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Vertex AI Prediction Private Service Connect endpoints"
feature_slug: "vertex-ai-prediction-private-service-connect-endpoints"
latest_feature_date: "2025-01-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint"
  - "https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials"
  - "https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials"
keywords:
  - "vertex"
  - "ai"
  - "prediction"
  - "private"
  - "connect"
  - "endpoints"
  - "now"
  - "offers"
---

# Vertex AI Prediction Private Service Connect endpoints

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Prediction now offers Private Service Connect (PSC-E) endpoints for secure private access to model prediction services.

## Extended Definition

Vertex AI Prediction now offers Private Service Connect (PSC-E) endpoints for secure private access to model prediction services.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint)
- [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials)
- [https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials)

## Supporting Pages

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint)
- Source ID: `site-api-reference-2`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- DeployedModel JSON representation { "id" : string , "model" : string , "gdcConnectedModel" : string , "modelVersionId" : string , "displayName" : string , "createTime" : string , "explanationSpec" : { object ( ExplanationSpec ) } , "disableExplanations" : boolean , "serviceAccount" : string , "enableContainerLogging" : boolean , "disableContainerLogging" : boolean , "enableAccessLogging" : boolean , "privateEndpoints" : { object ( PrivateEndpoints ) } , "fasterDeploymentConfig" : { object ( FasterDeploymentConfig ) } , "rolloutOptions" : { object ( RolloutOptions ) } , "status" : { object ( Status ) } , "systemLabels" : { string : string , ... } , "checkpointId" : string , "speculativeDecodingSpec" : { object ( SpeculativeDecodingSpec ) } , // Union field prediction resources can be only one of the following: "dedicatedResources" : { object ( DedicatedResources ) } , "automaticResources" : { object ( AutomaticResources ) } , "sharedResources" : string , "fullFineTunedResources" : { object ( FullFineTunedResources ) } // End of list of possible types for union field prediction resources . } Fields id string Immutable.
- Format: https://{endpoint id}.{region}-{uid}.prediction.vertexai.goog . clientConnectionConfig object ( ClientConnectionConfig ) Configurations that are applied to the endpoint for online prediction. satisfiesPzs boolean Output only.
- This field is used by Online Inference(Prediction) only. enableSecurePrivateServiceConnect boolean Optional.
- Endpoint JSON representation { "name" : string , "displayName" : string , "description" : string , "deployedModels" : [ { object ( DeployedModel ) } ] , "trafficSplit" : { string : integer , ... } , "etag" : string , "labels" : { string : string , ... } , "createTime" : string , "updateTime" : string , "encryptionSpec" : { object ( EncryptionSpec ) } , "network" : string , "enablePrivateServiceConnect" : boolean , "privateServiceConnectConfig" : { object ( PrivateServiceConnectConfig ) } , "modelDeploymentMonitoringJob" : string , "predictRequestResponseLoggingConfig" : { object ( PredictRequestResponseLoggingConfig ) } , "dedicatedEndpointEnabled" : boolean , "dedicatedEndpointDns" : string , "clientConnectionConfig" : { object ( ClientConnectionConfig ) } , "satisfiesPzs" : boolean , "satisfiesPzi" : boolean , "genAiAdvancedFeaturesConfig" : { object ( GenAiAdvancedFeaturesConfig ) } } Fields name string Identifier.

### "Vertex Explainable AI notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials)
- Source ID: `site-docs-reference-2`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Send a prediction request to a Private Endpoint Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Language Models Vertex AI LLM and streaming prediction .
- Tutorial steps Colab Colab Enterprise GitHub Vertex AI Workbench Private Endpoints Get started with Vertex AI Private Endpoints .
- Tutorial steps Installation of required libraries Reading the dataset from a Cloud Storage bucket Performing exploratory analysis on the dataset Preprocessing the dataset Training a random forest model using scikitlearn Saving the model to a Cloud Storage bucket Creating a Vertex AI model resource and deploying to an endpoint Running the WhatIf Tool on test data Undeploying the model and cleaning up the model resources Colab GitHub Vertex AI Workbench Vertex AI Workbench BigQuery ML Churn prediction for game developers using Google Analytics 4 and BigQuery ML .
- Tutorial steps Create utility functions to download data and prepare csv files for creating Vertex AI managed dataset Download Data Prepare CSV Files for creating managed dataset Create custom training Python package Create TensorFlow Serving container Run custom Python package training with managed text dataset Deploy a model and create an endpoint on Vertex AI Predict on the endpoint Create a Batch Prediction job on the model Colab Colab Enterprise GitHub Vertex AI Workbench Tabular Workflow for TabNet Vertex AI Explanations with TabNet models .

### "Vertex ML Metadata notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/ml-metadata/ml-metadata-notebook-tutorials)
- Source ID: `site-docs-reference-2`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Send a prediction request to a Private Endpoint Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Language Models Vertex AI LLM and streaming prediction .
- Tutorial steps Colab Colab Enterprise GitHub Vertex AI Workbench Private Endpoints Get started with Vertex AI Private Endpoints .
- Tutorial steps Installation of required libraries Reading the dataset from a Cloud Storage bucket Performing exploratory analysis on the dataset Preprocessing the dataset Training a random forest model using scikitlearn Saving the model to a Cloud Storage bucket Creating a Vertex AI model resource and deploying to an endpoint Running the WhatIf Tool on test data Undeploying the model and cleaning up the model resources Colab GitHub Vertex AI Workbench Vertex AI Workbench BigQuery ML Churn prediction for game developers using Google Analytics 4 and BigQuery ML .
- Tutorial steps Create utility functions to download data and prepare csv files for creating Vertex AI managed dataset Download Data Prepare CSV Files for creating managed dataset Create custom training Python package Create TensorFlow Serving container Run custom Python package training with managed text dataset Deploy a model and create an endpoint on Vertex AI Predict on the endpoint Create a Batch Prediction job on the model Colab Colab Enterprise GitHub Vertex AI Workbench Tabular Workflow for TabNet Vertex AI Explanations with TabNet models .

