---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.088Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "LLaVA 1.5 in Model Garden"
feature_slug: "llava-1-5-in-model-garden"
latest_feature_date: "2024-02-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/rest"
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint"
  - "https://docs.cloud.google.com/vertex-ai/docs/general/deployment"
keywords:
  - "llava"
  - "model"
  - "garden"
  - "models"
  - "were"
  - "added"
  - "deployment"
  - "use"
---

# LLaVA 1.5 in Model Garden

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

LLaVA 1.5 models were added to Model Garden for deployment and use in Vertex AI.

## Extended Definition

LLaVA 1.5 models were added to Model Garden for deployment and use in Vertex AI.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/reference/rest)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint)
- [https://docs.cloud.google.com/vertex-ai/docs/general/deployment](https://docs.cloud.google.com/vertex-ai/docs/general/deployment)

## Supporting Pages

### Vertex AI API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1beta1.projects.locations.deploymentResourcePools Methods create POST /v1beta1/{parent}/deploymentResourcePools Create a DeploymentResourcePool. delete DELETE /v1beta1/{name} Delete a DeploymentResourcePool. get GET /v1beta1/{name} Get a DeploymentResourcePool. list GET /v1beta1/{parent}/deploymentResourcePools List DeploymentResourcePools in a location. patch PATCH /v1beta1/{deploymentResourcePool.name} Update a DeploymentResourcePool. queryDeployedModels GET /v1beta1/{deploymentResourcePool}:queryDeployedModels List DeployedModels that have been deployed on this DeploymentResourcePool.
- REST Resource: v1.projects.locations.deploymentResourcePools Methods create POST /v1/{parent}/deploymentResourcePools Create a DeploymentResourcePool. delete DELETE /v1/{name} Delete a DeploymentResourcePool. get GET /v1/{name} Get a DeploymentResourcePool. list GET /v1/{parent}/deploymentResourcePools List DeploymentResourcePools in a location. patch PATCH /v1/{deploymentResourcePool.name} Update a DeploymentResourcePool. queryDeployedModels GET /v1/{deploymentResourcePool}:queryDeployedModels List DeployedModels that have been deployed on this DeploymentResourcePool.
- REST Resource: v1beta1.publishers.models Methods get GET /v1beta1/{name} Gets a Model Garden publisher model. list GET /v1beta1/{parent}/models Lists publisher models in Model Garden.
- REST Resource: v1.publishers.models Methods get GET /v1/{name} Gets a Model Garden publisher model.

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint)
- Source ID: `site-api-reference-2`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- Endpoint JSON representation { "name" : string , "displayName" : string , "description" : string , "deployedModels" : [ { object ( DeployedModel ) } ] , "trafficSplit" : { string : integer , ... } , "etag" : string , "labels" : { string : string , ... } , "createTime" : string , "updateTime" : string , "encryptionSpec" : { object ( EncryptionSpec ) } , "network" : string , "enablePrivateServiceConnect" : boolean , "privateServiceConnectConfig" : { object ( PrivateServiceConnectConfig ) } , "modelDeploymentMonitoringJob" : string , "predictRequestResponseLoggingConfig" : { object ( PredictRequestResponseLoggingConfig ) } , "dedicatedEndpointEnabled" : boolean , "dedicatedEndpointDns" : string , "clientConnectionConfig" : { object ( ClientConnectionConfig ) } , "satisfiesPzs" : boolean , "satisfiesPzi" : boolean , "genAiAdvancedFeaturesConfig" : { object ( GenAiAdvancedFeaturesConfig ) } } Fields name string Identifier.
- Runtime status of the deployed model. systemLabels map (key: string, value: string) System labels to apply to Model Garden deployments.
- Currently, only Model Garden models are supported.
- DeployedModel JSON representation { "id" : string , "model" : string , "gdcConnectedModel" : string , "modelVersionId" : string , "displayName" : string , "createTime" : string , "explanationSpec" : { object ( ExplanationSpec ) } , "disableExplanations" : boolean , "serviceAccount" : string , "enableContainerLogging" : boolean , "disableContainerLogging" : boolean , "enableAccessLogging" : boolean , "privateEndpoints" : { object ( PrivateEndpoints ) } , "fasterDeploymentConfig" : { object ( FasterDeploymentConfig ) } , "rolloutOptions" : { object ( RolloutOptions ) } , "status" : { object ( Status ) } , "systemLabels" : { string : string , ... } , "checkpointId" : string , "speculativeDecodingSpec" : { object ( SpeculativeDecodingSpec ) } , // Union field prediction resources can be only one of the following: "dedicatedResources" : { object ( DedicatedResources ) } , "automaticResources" : { object ( AutomaticResources ) } , "sharedResources" : string , "fullFineTunedResources" : { object ( FullFineTunedResources ) } // End of list of possible types for union field prediction resources . } Fields id string Immutable.

### Deploy a model to an endpoint \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/general/deployment](https://docs.cloud.google.com/vertex-ai/docs/general/deployment)
- Source ID: `site-docs-reference-3`
- Final score: 117
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Prepare to deploy a model to an endpoint During model deployment, you make the following important decisions about how to run online inference: Resource created Setting specified at resource creation Endpoint Location in which to run inferences Model Container to use ( ModelContainerSpec ) DeployedModel Compute resources to use for online inference After the model is deployed to the endpoint, these deployment settings can't be changed.
- Deploy a model to a public endpoint by using the Google Cloud console In the Google Cloud console, you can deploy a model to an existing dedicated or shared public endpoint, or you can create a new endpoint during the deployment process.
- Reasons to deploy a model to more than one endpoint You might want to deploy your models with different resources for different application environments, such as testing and production.
- Reasons to deploy more than one model to the same endpoint Deploying two models to the same endpoint lets you gradually replace one model with the other.

