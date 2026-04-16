---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.095Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Vertex AI chat-bison@002 stable model version"
feature_slug: "vertex-ai-chat-bison-002-stable-model-version"
latest_feature_date: "2023-12-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials"
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint"
  - "https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-endpoint-component"
keywords:
  - "vertex"
  - "ai"
  - "chat"
  - "bison"
  - "002"
  - "stable"
  - "model"
  - "version"
---

# Vertex AI chat-bison@002 stable model version

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

The chat-bison@002 model version is now available as the stable chat foundation model release.

## Extended Definition

The chat-bison@002 model version is now available as the stable chat foundation model release.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)
- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint)
- [https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-endpoint-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-endpoint-component)

## Supporting Pages

### Vertex AI model evaluation notebook tutorials \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)
- Source ID: `site-docs-reference-2`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- Learn how to construct a Vertex AI pipeline, which evaluates new production data from a deployed model against other versions of the model, to determine if a contender model becomes the champion model for replacement in production.
- Learn how to construct a Vertex AI pipeline, which trains a new challenger version of a model, evaluates the model and compares the evaluation to the existing blessed model in production.
- Learn how to use Vertex AI Model Registry to create and register multiple versions of a model.
- Tutorial steps Create and register a first version of a model to Vertex AI Model Registry.

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint)
- Source ID: `site-api-reference-2`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- DeployedModel JSON representation { "id" : string , "model" : string , "gdcConnectedModel" : string , "modelVersionId" : string , "displayName" : string , "createTime" : string , "explanationSpec" : { object ( ExplanationSpec ) } , "disableExplanations" : boolean , "serviceAccount" : string , "enableContainerLogging" : boolean , "disableContainerLogging" : boolean , "enableAccessLogging" : boolean , "privateEndpoints" : { object ( PrivateEndpoints ) } , "fasterDeploymentConfig" : { object ( FasterDeploymentConfig ) } , "rolloutOptions" : { object ( RolloutOptions ) } , "status" : { object ( Status ) } , "systemLabels" : { string : string , ... } , "checkpointId" : string , "speculativeDecodingSpec" : { object ( SpeculativeDecodingSpec ) } , // Union field prediction resources can be only one of the following: "dedicatedResources" : { object ( DedicatedResources ) } , "automaticResources" : { object ( AutomaticResources ) } , "sharedResources" : string , "fullFineTunedResources" : { object ( FullFineTunedResources ) } // End of list of possible types for union field prediction resources . } Fields id string Immutable.
- Required except for Large Model Deploy use cases. prediction resources can be only one of the following: dedicatedResources object ( DedicatedResources ) A description of resources that are dedicated to the DeployedModel, and that need a higher degree of manual configuration. automaticResources object ( AutomaticResources ) A description of resources that to large degree are decided by Vertex AI, and require only a modest additional configuration. sharedResources string The resource name of the shared DeploymentResourcePool to deploy on.
- Example: projects/{project}/locations/{location}/models/{model}@2 or projects/{project}/locations/{location}/models/{model}@golden if no version is specified, the default version will be deployed. gdcConnectedModel string GDC pretrained / Gemini model name.
- If accelerator count is less than or equal to N / 2, Vertex will co-schedule the replicas of the model into the same VM to save cost.

### Model and endpoint components \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-endpoint-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-endpoint-component)
- Source ID: `site-api-reference`
- Final score: 80
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Model operators The Google Cloud SDK includes the following operators related to the Model resource: ModelDeleteOp ModelExportOp ModelUploadOp Endpoint operators The Google Cloud SDK includes the following operators related to the Endpoint resource: EndpointCreateOp EndpointDeleteOp ModelDeployOp ModelUndeployOp API reference For component reference, see the following Google Cloud SDK reference pages: Model components Endpoint components For Vertex AI API resource reference, see the following API reference pages: model resource reference endpoint resource reference Version history and release notes To learn more about the version history and changes to the Google Cloud Pipeline Components SDK, see the Google Cloud Pipeline Components SDK Release Notes .
- Home Documentation AI and ML Vertex AI Reference Send feedback Model and endpoint components Stay organized with collections Save and categorize content based on your preferences.
- Learn more about how to Import models to Vertex AI and Request predictions .
- Model , this resource is available in Vertex AI.

