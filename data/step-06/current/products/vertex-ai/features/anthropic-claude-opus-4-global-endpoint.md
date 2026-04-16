---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.062Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Anthropic Claude Opus 4 global endpoint"
feature_slug: "anthropic-claude-opus-4-global-endpoint"
latest_feature_date: "2025-07-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-endpoint-component"
  - "https://docs.cloud.google.com/vertex-ai/docs/general/deployment"
  - "https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-bq-prediction/train-and-deploy-model"
keywords:
  - "anthropic"
  - "claude"
  - "opus"
  - "global"
  - "endpoint"
  - "capability"
  - "model"
  - "vertex"
---

# Anthropic Claude Opus 4 global endpoint

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

The global endpoint capability for Anthropic's Claude Opus 4 model in Vertex AI reached general availability.

## Extended Definition

The global endpoint capability for Anthropic's Claude Opus 4 model in Vertex AI reached general availability.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-endpoint-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-endpoint-component)
- [https://docs.cloud.google.com/vertex-ai/docs/general/deployment](https://docs.cloud.google.com/vertex-ai/docs/general/deployment)
- [https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-bq-prediction/train-and-deploy-model](https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-bq-prediction/train-and-deploy-model)

## Supporting Pages

### Model and endpoint components \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-endpoint-component](https://docs.cloud.google.com/vertex-ai/docs/pipelines/model-endpoint-component)
- Source ID: `site-api-reference`
- Final score: 117
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Model operators The Google Cloud SDK includes the following operators related to the Model resource: ModelDeleteOp ModelExportOp ModelUploadOp Endpoint operators The Google Cloud SDK includes the following operators related to the Endpoint resource: EndpointCreateOp EndpointDeleteOp ModelDeployOp ModelUndeployOp API reference For component reference, see the following Google Cloud SDK reference pages: Model components Endpoint components For Vertex AI API resource reference, see the following API reference pages: model resource reference endpoint resource reference Version history and release notes To learn more about the version history and changes to the Google Cloud Pipeline Components SDK, see the Google Cloud Pipeline Components SDK Release Notes .
- Home Documentation AI and ML Vertex AI Reference Send feedback Model and endpoint components Stay organized with collections Save and categorize content based on your preferences.
- You can deploy this Model to an Endpoint and then send prediction requests to this resource.
- Learn more about how to Import models to Vertex AI and Request predictions .

### Deploy a model to an endpoint \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/general/deployment](https://docs.cloud.google.com/vertex-ai/docs/general/deployment)
- Source ID: `site-docs-reference-3`
- Final score: 97
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: https://us-central1-aiplatform.googleapis.com/v1/projects/{project}/locations/{location}/endpoints/{endpoint}:predict Deploy a model to an endpoint You can deploy a model to an endpoint by using the Google Cloud console or by using the gcloud CLI or Vertex AI API .
- For details, see: Create a dedicated or shared public endpoint Deploy a model by using the gcloud CLI or Vertex AI API Deploy a model to a Private Service Connect endpoint For details, see Use Private Service Connect endpoints for online inference .
- Deploy a model to a public endpoint by using the gcloud CLI or Vertex AI API When you deploy a model by using the gcloud CLI or Vertex AI API, you must first create a dedicated or shared endpoint and then deploy the model to it.
- Home Documentation AI and ML Vertex AI Send feedback Deploy a model to an endpoint Stay organized with collections Save and categorize content based on your preferences.

### Train and deploy your model \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-bq-prediction/train-and-deploy-model](https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-bq-prediction/train-and-deploy-model)
- Source ID: `site-docs-reference-2`
- Final score: 91
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CustomTrainingJob ( display name = JOB NAME , script path = "task.py" , container uri = "us-docker.pkg.dev/vertex-ai/training/tf-cpu.2-8:latest" , requirements =[ "google-cloud-bigquery>=2.20.0" , "db-dtypes" , "protobuf<3.20.0" ], model serving container image uri = "us-docker.pkg.dev/vertex-ai/prediction/tf2-cpu.2-8:latest" , ) Create and train your model In the previous step you created a CustomTrainingJob named job .
- To deploy your model and create an endpoint, run the following code in your notebook: DEPLOYED NAME = "penguins deployed unique" endpoint = model.deploy(deployed model display name=DEPLOYED NAME) Wait until your model deploys before you continue to the next step.
- Home Documentation AI and ML Vertex AI Send feedback Train and deploy your model Stay organized with collections Save and categorize content based on your preferences.
- In previous steps in this tutorial, you prepared your data for training and created a script that Vertex AI uses to train your model.

