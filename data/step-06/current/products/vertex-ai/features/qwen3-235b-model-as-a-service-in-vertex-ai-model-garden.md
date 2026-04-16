---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.059Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Qwen3 235B Model as a Service in Vertex AI Model Garden"
feature_slug: "qwen3-235b-model-as-a-service-in-vertex-ai-model-garden"
latest_feature_date: "2025-08-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint"
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/rest"
  - "https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-evaluation-component"
keywords:
  - "qwen3"
  - "235b"
  - "model"
  - "vertex"
  - "ai"
  - "garden"
  - "added"
---

# Qwen3 235B Model as a Service in Vertex AI Model Garden

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI added Qwen3 235B as a Model-as-a-Service model in Model Garden.

## Extended Definition

Vertex AI added Qwen3 235B as a Model-as-a-Service model in Model Garden.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/reference/rest)
- [https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-evaluation-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-evaluation-component)

## Supporting Pages

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint)
- Source ID: `site-api-reference-2`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- Required except for Large Model Deploy use cases. prediction resources can be only one of the following: dedicatedResources object ( DedicatedResources ) A description of resources that are dedicated to the DeployedModel, and that need a higher degree of manual configuration. automaticResources object ( AutomaticResources ) A description of resources that to large degree are decided by Vertex AI, and require only a modest additional configuration. sharedResources string The resource name of the shared DeploymentResourcePool to deploy on.
- Runtime status of the deployed model. systemLabels map (key: string, value: string) System labels to apply to Model Garden deployments.
- If accelerator count is less than or equal to N / 2, Vertex will co-schedule the replicas of the model into the same VM to save cost.
- If accelerator count is 1, 2, 3, or 4, Vertex will co-schedule 8, 4, 2, or 2 replicas of the model into the same VM to save cost.

### Vertex AI API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 65
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v1beta1.projects.locations.endpoints Methods countTokens POST /v1beta1/{endpoint}:countTokens Perform a token counting. create POST /v1beta1/{parent}/endpoints Creates an Endpoint. delete DELETE /v1beta1/{name} Deletes an Endpoint. deployModel POST /v1beta1/{endpoint}:deployModel Deploys a Model into this Endpoint, creating a DeployedModel within it. directPredict POST /v1beta1/{endpoint}:directPredict Perform an unary online prediction request to a gRPC model server for Vertex first-party products and frameworks. directRawPredict POST /v1beta1/{endpoint}:directRawPredict Perform an unary online prediction request to a gRPC model server for custom containers. explain POST /v1beta1/{endpoint}:explain Perform an online explanation. get GET /v1beta1/{name} Gets an Endpoint. getIamPolicy POST /v1beta1/{resource}:getIamPolicy Gets the access control policy for a resource. list GET /v1beta1/{parent}/endpoints Lists Endpoints in a Location. mutateDeployedModel POST /v1beta1/{endpoint}:mutateDeployedModel Updates an existing deployed model. patch PATCH /v1beta1/{endpoint.name} Updates an Endpoint. predict POST /v1beta1/{endpoint}:predict Perform an online prediction. predictLongRunning POST /v1beta1/{endpoint}:predictLongRunning rawPredict POST /v1beta1/{endpoint}:rawPredict Perform an online prediction with an arbitrary HTTP payload. serverStreamingPredict POST /v1beta1/{endpoint}:serverStreamingPredict Perform a server-side streaming online prediction request for Vertex LLM streaming. setIamPolicy POST /v1beta1/{resource}:setIamPolicy Sets the access control policy on the specified resource. streamRawPredict POST /v1beta1/{endpoint}:streamRawPredict Perform a streaming online prediction with an arbitrary HTTP payload. testIamPermissions POST /v1beta1/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource. undeployModel POST /v1beta1/{endpoint}:undeployModel Undeploys a Model from an Endpoint, removing a DeployedModel from it, and freeing all resources it's using. update POST /v1beta1/{endpoint.name}:update Updates an Endpoint with a long running operation.
- REST Resource: v1.projects.locations.endpoints Methods create POST /v1/{parent}/endpoints Creates an Endpoint. delete DELETE /v1/{name} Deletes an Endpoint. deployModel POST /v1/{endpoint}:deployModel Deploys a Model into this Endpoint, creating a DeployedModel within it. directPredict POST /v1/{endpoint}:directPredict Perform an unary online prediction request to a gRPC model server for Vertex first-party products and frameworks. directRawPredict POST /v1/{endpoint}:directRawPredict Perform an unary online prediction request to a gRPC model server for custom containers. explain POST /v1/{endpoint}:explain Perform an online explanation. get GET /v1/{name} Gets an Endpoint. list GET /v1/{parent}/endpoints Lists Endpoints in a Location. mutateDeployedModel POST /v1/{endpoint}:mutateDeployedModel Updates an existing deployed model. patch PATCH /v1/{endpoint.name} Updates an Endpoint. predict POST /v1/{endpoint}:predict Perform an online prediction. rawPredict POST /v1/{endpoint}:rawPredict Perform an online prediction with an arbitrary HTTP payload. serverStreamingPredict POST /v1/{endpoint}:serverStreamingPredict Perform a server-side streaming online prediction request for Vertex LLM streaming. streamRawPredict POST /v1/{endpoint}:streamRawPredict Perform a streaming online prediction with an arbitrary HTTP payload. undeployModel POST /v1/{endpoint}:undeployModel Undeploys a Model from an Endpoint, removing a DeployedModel from it, and freeing all resources it's using. update POST /v1/{endpoint.name}:update Updates an Endpoint with a long running operation.
- REST Resource: v1beta1.projects.locations Methods askContexts POST /v1beta1/{parent}:askContexts Agentic Retrieval Ask API for RAG. asyncRetrieveContexts POST /v1beta1/{parent}:asyncRetrieveContexts Asynchronous API to retrieves relevant contexts for a query. augmentPrompt POST /v1beta1/{parent}:augmentPrompt Given an input prompt, it returns augmented prompt from vertex rag store to guide LLM towards generating grounded responses. corroborateContent POST /v1beta1/{parent}:corroborateContent Given an input text, it returns a score that evaluates the factuality of the text. deploy POST /v1beta1/{destination}:deploy Deploys a model to a new endpoint. deployPublisherModel (deprecated) POST /v1beta1/{destination}:deployPublisherModel Deploys publisher models. evaluateDataset POST /v1beta1/{location}:evaluateDataset Evaluates a dataset based on a set of given metrics. evaluateInstances POST /v1beta1/{location}:evaluateInstances Evaluates instances based on a given metric. generateSyntheticData POST /v1beta1/{location}:generateSyntheticData Generates synthetic (artificial) data based on a description getRagEngineConfig GET /v1beta1/{name} Gets a RagEngineConfig. recommendSpec POST /v1beta1/{parent}:recommendSpec Gets a Model's spec recommendations. retrieveContexts POST /v1beta1/{parent}:retrieveContexts Retrieves relevant contexts for a query. updateRagEngineConfig PATCH /v1beta1/{ragEngineConfig.name} Updates a RagEngineConfig.
- REST Resource: v1beta1.projects.locations.models Methods copy POST /v1beta1/{parent}/models:copy Copies an already existing Vertex AI Model into the specified Location. delete DELETE /v1beta1/{name} Deletes a Model. deleteVersion DELETE /v1beta1/{name}:deleteVersion Deletes a Model version. export POST /v1beta1/{name}:export Exports a trained, exportable Model to a location specified by the user. get GET /v1beta1/{name} Gets a Model. getIamPolicy POST /v1beta1/{resource}:getIamPolicy Gets the access control policy for a resource. list GET /v1beta1/{parent}/models Lists Models in a Location. listCheckpoints GET /v1beta1/{name}:listCheckpoints Lists checkpoints of the specified model version. listVersions GET /v1beta1/{name}:listVersions Lists versions of the specified model. mergeVersionAliases POST /v1beta1/{name}:mergeVersionAliases Merges a set of aliases for a Model version. patch PATCH /v1beta1/{model.name} Updates a Model. setIamPolicy POST /v1beta1/{resource}:setIamPolicy Sets the access control policy on the specified resource. testIamPermissions POST /v1beta1/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource. updateExplanationDataset POST /v1beta1/{model}:updateExplanationDataset Incrementally update the dataset used for an examples model. upload POST /v1beta1/{parent}/models:upload Uploads a Model artifact into Vertex AI.

### Model evaluation components \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-evaluation-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-evaluation-component)
- Source ID: `site-api-reference`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- Vertex AI provides the following model evaluation components: ModelEvaluationClassificationOp ModelEvaluationForecastingOp ModelEvaluationRegressionOp Model type support The following table shows supported model types for each model evaluation component: Model evaluation component Supported model types ModelEvaluationClassificationOp AutoML tabular or image Custom tabular ModelEvaluationRegressionOp AutoML tabular Custom tabular ModelEvaluationForecastingOp AutoML tabular Remove the target field For some model types, the BatchPredictionJob component requires you to exclude the target column (ground truth) from your dataset.
- Home Documentation AI and ML Vertex AI Reference Send feedback Model evaluation components Stay organized with collections Save and categorize content based on your preferences.
- Model evaluations without Vertex AI-generated batch predictions You can use a model evaluation pipeline component with a batch prediction that you didn't generate in Vertex AI.
- AutoML models When training AutoML models, Vertex AI uses default schemas.

