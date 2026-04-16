---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.134Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Vertex AI co-hosted model deployments on the same VM"
feature_slug: "vertex-ai-co-hosted-model-deployments-on-the-same-vm"
latest_feature_date: "2023-05-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint"
  - "https://docs.cloud.google.com/vertex-ai/docs/general/deployment"
  - "https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-evaluation-component"
keywords:
  - "vertex"
  - "ai"
  - "co"
  - "hosted"
  - "model"
  - "deployments"
  - "same"
  - "vm"
---

# Vertex AI co-hosted model deployments on the same VM

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI now allows models to be co-hosted on the same VM from the Google Cloud Console, which was previously available only via REST API.

## Extended Definition

Vertex AI now allows models to be co-hosted on the same VM from the Google Cloud Console, which was previously available only via REST API.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint)
- [https://docs.cloud.google.com/vertex-ai/docs/general/deployment](https://docs.cloud.google.com/vertex-ai/docs/general/deployment)
- [https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-evaluation-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-evaluation-component)

## Supporting Pages

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint)
- Source ID: `site-api-reference-2`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- If accelerator count is less than or equal to N / 2, Vertex will co-schedule the replicas of the model into the same VM to save cost.
- If accelerator count is 1, 2, 3, or 4, Vertex will co-schedule 8, 4, 2, or 2 replicas of the model into the same VM to save cost.
- Required except for Large Model Deploy use cases. prediction resources can be only one of the following: dedicatedResources object ( DedicatedResources ) A description of resources that are dedicated to the DeployedModel, and that need a higher degree of manual configuration. automaticResources object ( AutomaticResources ) A description of resources that to large degree are decided by Vertex AI, and require only a modest additional configuration. sharedResources string The resource name of the shared DeploymentResourcePool to deploy on.
- This field is populated if network is configured. fasterDeploymentConfig object ( FasterDeploymentConfig ) Configuration for faster model deployment. rolloutOptions object ( RolloutOptions ) Options for configuring rolling deployments. status object ( Status ) Output only.

### Deploy a model to an endpoint \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/general/deployment](https://docs.cloud.google.com/vertex-ai/docs/general/deployment)
- Source ID: `site-docs-reference-3`
- Final score: 91
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: https://us-central1-aiplatform.googleapis.com/v1/projects/{project}/locations/{location}/endpoints/{endpoint}:predict Deploy a model to an endpoint You can deploy a model to an endpoint by using the Google Cloud console or by using the gcloud CLI or Vertex AI API .
- For details, see: Create a dedicated or shared public endpoint Deploy a model by using the gcloud CLI or Vertex AI API Deploy a model to a Private Service Connect endpoint For details, see Use Private Service Connect endpoints for online inference .
- Deploy a model to a public endpoint by using the gcloud CLI or Vertex AI API When you deploy a model by using the gcloud CLI or Vertex AI API, you must first create a dedicated or shared endpoint and then deploy the model to it.
- You can add the new model to the same endpoint, serving a small percentage of traffic, and gradually increase the traffic split for the new model until it is serving 100% of the traffic.

### Model evaluation components \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-evaluation-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-evaluation-component)
- Source ID: `site-api-reference`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- Vertex AI provides the following model evaluation components: ModelEvaluationClassificationOp ModelEvaluationForecastingOp ModelEvaluationRegressionOp Model type support The following table shows supported model types for each model evaluation component: Model evaluation component Supported model types ModelEvaluationClassificationOp AutoML tabular or image Custom tabular ModelEvaluationRegressionOp AutoML tabular Custom tabular ModelEvaluationForecastingOp AutoML tabular Remove the target field For some model types, the BatchPredictionJob component requires you to exclude the target column (ground truth) from your dataset.
- The following example shows a batch prediction output file and required input parameters for a custom-trained tabular classification model: Classification The typical schema includes the following fields: instance : array of input data in the same order as the model training dataset columns. prediction : array of input data in the same order as the model training dataset columns.
- Home Documentation AI and ML Vertex AI Reference Send feedback Model evaluation components Stay organized with collections Save and categorize content based on your preferences.
- Model evaluations without Vertex AI-generated batch predictions You can use a model evaluation pipeline component with a batch prediction that you didn't generate in Vertex AI.

