---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.057Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Wan 2.2 in Model Garden"
feature_slug: "wan-2-2-in-model-garden"
latest_feature_date: "2025-08-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint"
  - "https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-evaluation-component"
  - "https://docs.cloud.google.com/vertex-ai/docs/general/deployment"
keywords:
  - "wan"
  - "model"
  - "garden"
  - "now"
  - "available"
  - "vertex"
  - "ai"
---

# Wan 2.2 in Model Garden

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

The Wan 2.2 model is now available in Vertex AI Model Garden.

## Extended Definition

The Wan 2.2 model is now available in Vertex AI Model Garden.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint)
- [https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-evaluation-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-evaluation-component)
- [https://docs.cloud.google.com/vertex-ai/docs/general/deployment](https://docs.cloud.google.com/vertex-ai/docs/general/deployment)

## Supporting Pages

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint)
- Source ID: `site-api-reference-2`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- RolloutOptions JSON representation { "previousDeployedModel" : string , "revisionNumber" : integer , // Union field max unavailable can be only one of the following: "maxUnavailableReplicas" : integer , "maxUnavailablePercentage" : integer // End of list of possible types for union field max unavailable . // Union field max surge can be only one of the following: "maxSurgeReplicas" : integer , "maxSurgePercentage" : integer // End of list of possible types for union field max surge . } Fields previousDeployedModel string ID of the DeployedModel that this deployment should replace. revisionNumber integer Output only.
- Required except for Large Model Deploy use cases. prediction resources can be only one of the following: dedicatedResources object ( DedicatedResources ) A description of resources that are dedicated to the DeployedModel, and that need a higher degree of manual configuration. automaticResources object ( AutomaticResources ) A description of resources that to large degree are decided by Vertex AI, and require only a modest additional configuration. sharedResources string The resource name of the shared DeploymentResourcePool to deploy on.
- Runtime status of the deployed model. systemLabels map (key: string, value: string) System labels to apply to Model Garden deployments.
- If accelerator count is less than or equal to N / 2, Vertex will co-schedule the replicas of the model into the same VM to save cost.

### Model evaluation components \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-evaluation-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-evaluation-component)
- Source ID: `site-api-reference`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- Vertex AI provides the following model evaluation components: ModelEvaluationClassificationOp ModelEvaluationForecastingOp ModelEvaluationRegressionOp Model type support The following table shows supported model types for each model evaluation component: Model evaluation component Supported model types ModelEvaluationClassificationOp AutoML tabular or image Custom tabular ModelEvaluationRegressionOp AutoML tabular Custom tabular ModelEvaluationForecastingOp AutoML tabular Remove the target field For some model types, the BatchPredictionJob component requires you to exclude the target column (ground truth) from your dataset.
- Home Documentation AI and ML Vertex AI Reference Send feedback Model evaluation components Stay organized with collections Save and categorize content based on your preferences.
- Model evaluations without Vertex AI-generated batch predictions You can use a model evaluation pipeline component with a batch prediction that you didn't generate in Vertex AI.
- AutoML models When training AutoML models, Vertex AI uses default schemas.

### Deploy a model to an endpoint \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/general/deployment](https://docs.cloud.google.com/vertex-ai/docs/general/deployment)
- Source ID: `site-docs-reference-3`
- Final score: 74
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: https://us-central1-aiplatform.googleapis.com/v1/projects/{project}/locations/{location}/endpoints/{endpoint}:predict Deploy a model to an endpoint You can deploy a model to an endpoint by using the Google Cloud console or by using the gcloud CLI or Vertex AI API .
- For details, see: Create a dedicated or shared public endpoint Deploy a model by using the gcloud CLI or Vertex AI API Deploy a model to a Private Service Connect endpoint For details, see Use Private Service Connect endpoints for online inference .
- Deploy a model to a public endpoint by using the gcloud CLI or Vertex AI API When you deploy a model by using the gcloud CLI or Vertex AI API, you must first create a dedicated or shared endpoint and then deploy the model to it.
- Home Documentation AI and ML Vertex AI Send feedback Deploy a model to an endpoint Stay organized with collections Save and categorize content based on your preferences.

