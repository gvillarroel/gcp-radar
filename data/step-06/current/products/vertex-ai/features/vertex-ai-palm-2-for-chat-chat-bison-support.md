---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.123Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Vertex AI PaLM 2 for Chat (chat-bison) support"
feature_slug: "vertex-ai-palm-2-for-chat-chat-bison-support"
latest_feature_date: "2023-07-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials"
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/rest"
  - "https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials"
keywords:
  - "vertex"
  - "ai"
  - "palm"
  - "chat"
  - "bison"
  - "adds"
  - "availability"
  - "model"
---

# Vertex AI PaLM 2 for Chat (chat-bison) support

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI adds availability of the PaLM 2 for Chat (chat-bison) model.

## Extended Definition

Vertex AI adds availability of the PaLM 2 for Chat (chat-bison) model.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/reference/rest)
- [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials)

## Supporting Pages

### Vertex AI model evaluation notebook tutorials \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)
- Source ID: `site-docs-reference-2`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- Tutorial steps Colab GitHub Vertex AI Workbench PaLM API Using the Vertex AI SDK with Large Language Models .
- Tutorial steps Installation of required libraries Reading the dataset from a Cloud Storage bucket Performing exploratory analysis on the dataset Preprocessing the dataset Training a random forest model using scikitlearn Saving the model to a Cloud Storage bucket Creating a Vertex AI model resource and deploying to an endpoint Running the WhatIf Tool on test data Undeploying the model and cleaning up the model resources Colab GitHub Vertex AI Workbench Vertex AI Workbench BigQuery ML Churn prediction for game developers using Google Analytics 4 and BigQuery ML .
- Tutorial steps Create utility functions to download data and prepare csv files for creating Vertex AI managed dataset Download Data Prepare CSV Files for creating managed dataset Create custom training Python package Create TensorFlow Serving container Run custom Python package training with managed text dataset Deploy a model and create an endpoint on Vertex AI Predict on the endpoint Create a Batch Prediction job on the model Colab Colab Enterprise GitHub Vertex AI Workbench Tabular Workflow for TabNet Vertex AI Explanations with TabNet models .
- Tutorial steps Create a local BigQuery table in your project Train a BigQuery ML model Evaluate the BigQuery ML model Export the BigQuery ML model as a cloud model Upload the exported model as a Vertex AI model resource Hyperparameter tune a BigQuery ML model with Vertex AI Vizier Automatically register a BigQuery ML model to Vertex AI Model Registry Colab Colab Enterprise GitHub Vertex AI Workbench Custom training Vertex AI Inference Deploying Iris-detection model using FastAPI and Vertex AI custom container serving .

### Vertex AI API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v1beta1.projects.locations.endpoints Methods countTokens POST /v1beta1/{endpoint}:countTokens Perform a token counting. create POST /v1beta1/{parent}/endpoints Creates an Endpoint. delete DELETE /v1beta1/{name} Deletes an Endpoint. deployModel POST /v1beta1/{endpoint}:deployModel Deploys a Model into this Endpoint, creating a DeployedModel within it. directPredict POST /v1beta1/{endpoint}:directPredict Perform an unary online prediction request to a gRPC model server for Vertex first-party products and frameworks. directRawPredict POST /v1beta1/{endpoint}:directRawPredict Perform an unary online prediction request to a gRPC model server for custom containers. explain POST /v1beta1/{endpoint}:explain Perform an online explanation. get GET /v1beta1/{name} Gets an Endpoint. getIamPolicy POST /v1beta1/{resource}:getIamPolicy Gets the access control policy for a resource. list GET /v1beta1/{parent}/endpoints Lists Endpoints in a Location. mutateDeployedModel POST /v1beta1/{endpoint}:mutateDeployedModel Updates an existing deployed model. patch PATCH /v1beta1/{endpoint.name} Updates an Endpoint. predict POST /v1beta1/{endpoint}:predict Perform an online prediction. predictLongRunning POST /v1beta1/{endpoint}:predictLongRunning rawPredict POST /v1beta1/{endpoint}:rawPredict Perform an online prediction with an arbitrary HTTP payload. serverStreamingPredict POST /v1beta1/{endpoint}:serverStreamingPredict Perform a server-side streaming online prediction request for Vertex LLM streaming. setIamPolicy POST /v1beta1/{resource}:setIamPolicy Sets the access control policy on the specified resource. streamRawPredict POST /v1beta1/{endpoint}:streamRawPredict Perform a streaming online prediction with an arbitrary HTTP payload. testIamPermissions POST /v1beta1/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource. undeployModel POST /v1beta1/{endpoint}:undeployModel Undeploys a Model from an Endpoint, removing a DeployedModel from it, and freeing all resources it's using. update POST /v1beta1/{endpoint.name}:update Updates an Endpoint with a long running operation.
- REST Resource: v1.projects.locations.endpoints Methods create POST /v1/{parent}/endpoints Creates an Endpoint. delete DELETE /v1/{name} Deletes an Endpoint. deployModel POST /v1/{endpoint}:deployModel Deploys a Model into this Endpoint, creating a DeployedModel within it. directPredict POST /v1/{endpoint}:directPredict Perform an unary online prediction request to a gRPC model server for Vertex first-party products and frameworks. directRawPredict POST /v1/{endpoint}:directRawPredict Perform an unary online prediction request to a gRPC model server for custom containers. explain POST /v1/{endpoint}:explain Perform an online explanation. get GET /v1/{name} Gets an Endpoint. list GET /v1/{parent}/endpoints Lists Endpoints in a Location. mutateDeployedModel POST /v1/{endpoint}:mutateDeployedModel Updates an existing deployed model. patch PATCH /v1/{endpoint.name} Updates an Endpoint. predict POST /v1/{endpoint}:predict Perform an online prediction. rawPredict POST /v1/{endpoint}:rawPredict Perform an online prediction with an arbitrary HTTP payload. serverStreamingPredict POST /v1/{endpoint}:serverStreamingPredict Perform a server-side streaming online prediction request for Vertex LLM streaming. streamRawPredict POST /v1/{endpoint}:streamRawPredict Perform a streaming online prediction with an arbitrary HTTP payload. undeployModel POST /v1/{endpoint}:undeployModel Undeploys a Model from an Endpoint, removing a DeployedModel from it, and freeing all resources it's using. update POST /v1/{endpoint.name}:update Updates an Endpoint with a long running operation.
- REST Resource: v1beta1.projects.locations Methods askContexts POST /v1beta1/{parent}:askContexts Agentic Retrieval Ask API for RAG. asyncRetrieveContexts POST /v1beta1/{parent}:asyncRetrieveContexts Asynchronous API to retrieves relevant contexts for a query. augmentPrompt POST /v1beta1/{parent}:augmentPrompt Given an input prompt, it returns augmented prompt from vertex rag store to guide LLM towards generating grounded responses. corroborateContent POST /v1beta1/{parent}:corroborateContent Given an input text, it returns a score that evaluates the factuality of the text. deploy POST /v1beta1/{destination}:deploy Deploys a model to a new endpoint. deployPublisherModel (deprecated) POST /v1beta1/{destination}:deployPublisherModel Deploys publisher models. evaluateDataset POST /v1beta1/{location}:evaluateDataset Evaluates a dataset based on a set of given metrics. evaluateInstances POST /v1beta1/{location}:evaluateInstances Evaluates instances based on a given metric. generateSyntheticData POST /v1beta1/{location}:generateSyntheticData Generates synthetic (artificial) data based on a description getRagEngineConfig GET /v1beta1/{name} Gets a RagEngineConfig. recommendSpec POST /v1beta1/{parent}:recommendSpec Gets a Model's spec recommendations. retrieveContexts POST /v1beta1/{parent}:retrieveContexts Retrieves relevant contexts for a query. updateRagEngineConfig PATCH /v1beta1/{ragEngineConfig.name} Updates a RagEngineConfig.
- REST Resource: v1beta1.projects.locations.models Methods copy POST /v1beta1/{parent}/models:copy Copies an already existing Vertex AI Model into the specified Location. delete DELETE /v1beta1/{name} Deletes a Model. deleteVersion DELETE /v1beta1/{name}:deleteVersion Deletes a Model version. export POST /v1beta1/{name}:export Exports a trained, exportable Model to a location specified by the user. get GET /v1beta1/{name} Gets a Model. getIamPolicy POST /v1beta1/{resource}:getIamPolicy Gets the access control policy for a resource. list GET /v1beta1/{parent}/models Lists Models in a Location. listCheckpoints GET /v1beta1/{name}:listCheckpoints Lists checkpoints of the specified model version. listVersions GET /v1beta1/{name}:listVersions Lists versions of the specified model. mergeVersionAliases POST /v1beta1/{name}:mergeVersionAliases Merges a set of aliases for a Model version. patch PATCH /v1beta1/{model.name} Updates a Model. setIamPolicy POST /v1beta1/{resource}:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v1beta1/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource. updateExplanationDataset POST /v1beta1/{model}:updateExplanationDataset Incrementally update the dataset used for an examples model. upload POST /v1beta1/{parent}/models:upload Uploads a Model artifact into Vertex AI.

### "Vertex Explainable AI notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials)
- Source ID: `site-docs-reference-2`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- Tutorial steps Colab GitHub Vertex AI Workbench PaLM API Using the Vertex AI SDK with Large Language Models .
- Tutorial steps Installation of required libraries Reading the dataset from a Cloud Storage bucket Performing exploratory analysis on the dataset Preprocessing the dataset Training a random forest model using scikitlearn Saving the model to a Cloud Storage bucket Creating a Vertex AI model resource and deploying to an endpoint Running the WhatIf Tool on test data Undeploying the model and cleaning up the model resources Colab GitHub Vertex AI Workbench Vertex AI Workbench BigQuery ML Churn prediction for game developers using Google Analytics 4 and BigQuery ML .
- Tutorial steps Create utility functions to download data and prepare csv files for creating Vertex AI managed dataset Download Data Prepare CSV Files for creating managed dataset Create custom training Python package Create TensorFlow Serving container Run custom Python package training with managed text dataset Deploy a model and create an endpoint on Vertex AI Predict on the endpoint Create a Batch Prediction job on the model Colab Colab Enterprise GitHub Vertex AI Workbench Tabular Workflow for TabNet Vertex AI Explanations with TabNet models .
- Tutorial steps Create a local BigQuery table in your project Train a BigQuery ML model Evaluate the BigQuery ML model Export the BigQuery ML model as a cloud model Upload the exported model as a Vertex AI model resource Hyperparameter tune a BigQuery ML model with Vertex AI Vizier Automatically register a BigQuery ML model to Vertex AI Model Registry Colab Colab Enterprise GitHub Vertex AI Workbench Custom training Vertex AI Inference Deploying Iris-detection model using FastAPI and Vertex AI custom container serving .

