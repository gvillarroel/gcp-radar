---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.108Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "CountToken API"
feature_slug: "counttoken-api"
latest_feature_date: "2023-08-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/count_tokens"
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/rest"
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore"
keywords:
  - "counttoken"
  - "vertex"
  - "ai"
  - "now"
  - "offers"
  - "preview"
  - "return"
  - "token"
---

# CountToken API

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI now offers the CountToken API in preview to return token counts and billable character counts for a prompt.

## Extended Definition

Vertex AI now offers the CountToken API in preview to return token counts and billable character counts for a prompt.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/count_tokens](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/count_tokens)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/reference/rest)
- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore)

## Supporting Pages

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/count_tokens](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/count_tokens)
- Source ID: `site-api-reference`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- CountTokensRequest JSON representation { "endpoint" : string , "model" : string , "instances" : [ value ] , "contents" : [ { object ( Content ) } ] , "tools" : [ { object ( Tool ) } ] , // Union field system instruction can be only one of the following: "systemInstruction" : { object ( Content ) } // End of list of possible types for union field system instruction . // Union field generation config can be only one of the following: "generationConfig" : { object ( GenerationConfig ) } // End of list of possible types for union field generation config . } Fields endpoint string Required.
- CountTokensResponse JSON representation { "totalTokens" : integer , "totalBillableCharacters" : integer , "promptTokensDetails" : [ { object ( ModalityTokenCount ) } ] } Fields totalTokens integer The total number of tokens counted across all instances from the request. totalBillableCharacters integer The total number of billable characters counted across all instances from the request. promptTokensDetails[] object ( ModalityTokenCount ) Output only.
- Curl Request curl --location 'https://aiplatform.googleapis.com/mcp/generate' \ --header 'content-type: application/json' \ --header 'accept: application/json, text/event-stream' \ --data '{ "method": "tools/call", "params": { "name": "count tokens", "arguments": { // provide these details according to the tool' s MCP specification } } , "jsonrpc" : "2.0" , "id" : 1 } ' Input Schema Request message for PredictionService.CountTokens .
- If set to true, the log probabilities of the output tokens are returned.

### Vertex AI API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v1beta1.projects.locations.endpoints Methods countTokens POST /v1beta1/{endpoint}:countTokens Perform a token counting. create POST /v1beta1/{parent}/endpoints Creates an Endpoint. delete DELETE /v1beta1/{name} Deletes an Endpoint. deployModel POST /v1beta1/{endpoint}:deployModel Deploys a Model into this Endpoint, creating a DeployedModel within it. directPredict POST /v1beta1/{endpoint}:directPredict Perform an unary online prediction request to a gRPC model server for Vertex first-party products and frameworks. directRawPredict POST /v1beta1/{endpoint}:directRawPredict Perform an unary online prediction request to a gRPC model server for custom containers. explain POST /v1beta1/{endpoint}:explain Perform an online explanation. get GET /v1beta1/{name} Gets an Endpoint. getIamPolicy POST /v1beta1/{resource}:getIamPolicy Gets the access control policy for a resource. list GET /v1beta1/{parent}/endpoints Lists Endpoints in a Location. mutateDeployedModel POST /v1beta1/{endpoint}:mutateDeployedModel Updates an existing deployed model. patch PATCH /v1beta1/{endpoint.name} Updates an Endpoint. predict POST /v1beta1/{endpoint}:predict Perform an online prediction. predictLongRunning POST /v1beta1/{endpoint}:predictLongRunning rawPredict POST /v1beta1/{endpoint}:rawPredict Perform an online prediction with an arbitrary HTTP payload. serverStreamingPredict POST /v1beta1/{endpoint}:serverStreamingPredict Perform a server-side streaming online prediction request for Vertex LLM streaming. setIamPolicy POST /v1beta1/{resource}:setIamPolicy Sets the access control policy on the specified resource. streamRawPredict POST /v1beta1/{endpoint}:streamRawPredict Perform a streaming online prediction with an arbitrary HTTP payload. testIamPermissions POST /v1beta1/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource. undeployModel POST /v1beta1/{endpoint}:undeployModel Undeploys a Model from an Endpoint, removing a DeployedModel from it, and freeing all resources it's using. update POST /v1beta1/{endpoint.name}:update Updates an Endpoint with a long running operation.
- REST Resource: v1beta1.projects.locations.publishers.models Methods countTokens POST /v1beta1/{endpoint}:countTokens Perform a token counting. embedContent POST /v1beta1/{model}:embedContent Embed content with multimodal inputs. export POST /v1beta1/{parent}/{name}:export Exports a publisher model to a user provided Google Cloud Storage bucket. fetchPublisherModelConfig GET /v1beta1/{name}:fetchPublisherModelConfig Fetches the configs of publisher models. getIamPolicy POST /v1beta1/{resource}:getIamPolicy Gets the access control policy for a resource. predict POST /v1beta1/{endpoint}:predict Perform an online prediction. predictLongRunning POST /v1beta1/{endpoint}:predictLongRunning rawPredict POST /v1beta1/{endpoint}:rawPredict Perform an online prediction with an arbitrary HTTP payload. serverStreamingPredict POST /v1beta1/{endpoint}:serverStreamingPredict Perform a server-side streaming online prediction request for Vertex LLM streaming. setPublisherModelConfig POST /v1beta1/{name}:setPublisherModelConfig Sets (creates or updates) configs of publisher models. streamRawPredict POST /v1beta1/{endpoint}:streamRawPredict Perform a streaming online prediction with an arbitrary HTTP payload.
- REST Resource: v1beta1.projects.locations.featureOnlineStores.featureViews Methods create POST /v1beta1/{parent}/featureViews Creates a new FeatureView in a given FeatureOnlineStore. delete DELETE /v1beta1/{name} Deletes a single FeatureView. directWrite POST /v1beta1/{featureView}:directWrite Bidirectional streaming RPC to directly write to feature values in a feature view. fetchFeatureValues POST /v1beta1/{featureView}:fetchFeatureValues Fetch feature values under a FeatureView. generateFetchAccessToken POST /v1beta1/{featureView}:generateFetchAccessToken RPC to generate an access token for the given feature view. get GET /v1beta1/{name} Gets details of a single FeatureView. getIamPolicy POST /v1beta1/{resource}:getIamPolicy Gets the access control policy for a resource. list GET /v1beta1/{parent}/featureViews Lists FeatureViews in a given FeatureOnlineStore. patch PATCH /v1beta1/{featureView.name} Updates the parameters of a single FeatureView. searchNearestEntities POST /v1beta1/{featureView}:searchNearestEntities Search the nearest entities under a FeatureView. setIamPolicy POST /v1beta1/{resource}:setIamPolicy Sets the access control policy on the specified resource. streamingFetchFeatureValues POST /v1beta1/{featureView}:streamingFetchFeatureValues Bidirectional streaming RPC to fetch feature values under a FeatureView. sync POST /v1beta1/{featureView}:sync Triggers on-demand sync for the FeatureView. testIamPermissions POST /v1beta1/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource.
- REST Resource: v1beta1.projects.locations Methods askContexts POST /v1beta1/{parent}:askContexts Agentic Retrieval Ask API for RAG. asyncRetrieveContexts POST /v1beta1/{parent}:asyncRetrieveContexts Asynchronous API to retrieves relevant contexts for a query. augmentPrompt POST /v1beta1/{parent}:augmentPrompt Given an input prompt, it returns augmented prompt from vertex rag store to guide LLM towards generating grounded responses. corroborateContent POST /v1beta1/{parent}:corroborateContent Given an input text, it returns a score that evaluates the factuality of the text. deploy POST /v1beta1/{destination}:deploy Deploys a model to a new endpoint. deployPublisherModel (deprecated) POST /v1beta1/{destination}:deployPublisherModel Deploys publisher models. evaluateDataset POST /v1beta1/{location}:evaluateDataset Evaluates a dataset based on a set of given metrics. evaluateInstances POST /v1beta1/{location}:evaluateInstances Evaluates instances based on a given metric. generateSyntheticData POST /v1beta1/{location}:generateSyntheticData Generates synthetic (artificial) data based on a description getRagEngineConfig GET /v1beta1/{name} Gets a RagEngineConfig. recommendSpec POST /v1beta1/{parent}:recommendSpec Gets a Model's spec recommendations. retrieveContexts POST /v1beta1/{parent}:retrieveContexts Retrieves relevant contexts for a query. updateRagEngineConfig PATCH /v1beta1/{ragEngineConfig.name} Updates a RagEngineConfig.

### Create an online store instance \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore)
- Source ID: `site-docs-reference-3`
- Final score: 71
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION ID -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /featureOnlineStores?feature online store id= FEATUREONLINESTORE NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /featureOnlineStores/ FEATUREONLINESTORE NAME /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.aiplatform.v1.CreateFeatureOnlineStoreOperationMetadata", "genericMetadata": { "createTime": "2023-09-18T17:49:23.847496Z", "updateTime": "2023-09-18T17:49:23.847496Z" } } } Create an online store for Optimized online serving Vertex AI Feature Store Optimized online serving is deprecated .
- For more information, see the Python API reference documentation . from typing import List from google.cloud import aiplatform from vertexai.resources.preview import feature store def create optimized private feature online store sample ( project : str , location : str , feature online store id : str , project allowlist : List [ str ], ): aiplatform . init ( project = project , location = location ) fos = feature store .
- For more information, see the Python API reference documentation . from google.cloud import aiplatform from vertexai.resources.preview import feature store def create optimized public feature online store sample ( project : str , location : str , feature online store id : str , ): aiplatform . init ( project = project , location = location ) fos = feature store .
- For more information, see the Python API reference documentation . from google.cloud import aiplatform from vertexai.resources.preview import feature store def create bigtable feature online store sample ( project : str , location : str , feature online store id : str , ): aiplatform . init ( project = project , location = location ) fos = feature store .

