---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.106Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "textembedding-gecko model tuning"
feature_slug: "textembedding-gecko-model-tuning"
latest_feature_date: "2023-10-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials"
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/rest"
  - "https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials"
keywords:
  - "textembedding"
  - "gecko"
  - "model"
  - "tuning"
  - "feature"
  - "adds"
  - "supervised"
  - "fine"
---

# textembedding-gecko model tuning

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

This feature adds supervised fine-tuning support for the textembedding-gecko model.

## Extended Definition

This feature adds supervised fine-tuning support for the textembedding-gecko model.

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
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Tutorial steps Colab Colab Enterprise GitHub Vertex AI Workbench Tune text models by using supervised tuning Vertex AI Tuning a PEFT model .
- Learn how to use Vertex AI LLM to download pretrained LLM model, make predictions and finetuning the model.
- Learn more about Tune text models by using supervised tuning .
- List of notebooks Select a service AutoML BigQuery BigQuery ML Custom training Image Ray on Vertex AI Tabular Text Vector Search Vertex AI Experiments Vertex AI Feature Store Vertex AI Inference Vertex AI model evaluation Vertex AI Model Monitoring Vertex AI Model Registry Vertex AI Pipelines Vertex AI TensorBoard Vertex AI Vizier Vertex AI Workbench Vertex Explainable AI Vertex ML Metadata Services Description Open in Classification for tabular data AutoML tabular training and prediction .

### Vertex AI API \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 122
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1beta1.projects.locations.tuningJobs Methods cancel POST /v1beta1/{name}:cancel Cancels a tuning job. create POST /v1beta1/{parent}/tuningJobs Creates a tuning job. get GET /v1beta1/{name} Gets a tuning job. list GET /v1beta1/{parent}/tuningJobs Lists tuning jobs in a location. rebaseTunedModel POST /v1beta1/{parent}/tuningJobs:rebaseTunedModel Rebase a tuned model.
- REST Resource: v1.projects.locations.tuningJobs Methods cancel POST /v1/{name}:cancel Cancels a tuning job. create POST /v1/{parent}/tuningJobs Creates a tuning job. get GET /v1/{name} Gets a tuning job. list GET /v1/{parent}/tuningJobs Lists tuning jobs in a location. rebaseTunedModel POST /v1/{parent}/tuningJobs:rebaseTunedModel Rebase a tuned model.
- REST Resource: v1beta1.projects.locations.endpoints Methods countTokens POST /v1beta1/{endpoint}:countTokens Perform a token counting. create POST /v1beta1/{parent}/endpoints Creates an Endpoint. delete DELETE /v1beta1/{name} Deletes an Endpoint. deployModel POST /v1beta1/{endpoint}:deployModel Deploys a Model into this Endpoint, creating a DeployedModel within it. directPredict POST /v1beta1/{endpoint}:directPredict Perform an unary online prediction request to a gRPC model server for Vertex first-party products and frameworks. directRawPredict POST /v1beta1/{endpoint}:directRawPredict Perform an unary online prediction request to a gRPC model server for custom containers. explain POST /v1beta1/{endpoint}:explain Perform an online explanation. get GET /v1beta1/{name} Gets an Endpoint. getIamPolicy POST /v1beta1/{resource}:getIamPolicy Gets the access control policy for a resource. list GET /v1beta1/{parent}/endpoints Lists Endpoints in a Location. mutateDeployedModel POST /v1beta1/{endpoint}:mutateDeployedModel Updates an existing deployed model. patch PATCH /v1beta1/{endpoint.name} Updates an Endpoint. predict POST /v1beta1/{endpoint}:predict Perform an online prediction. predictLongRunning POST /v1beta1/{endpoint}:predictLongRunning rawPredict POST /v1beta1/{endpoint}:rawPredict Perform an online prediction with an arbitrary HTTP payload. serverStreamingPredict POST /v1beta1/{endpoint}:serverStreamingPredict Perform a server-side streaming online prediction request for Vertex LLM streaming. setIamPolicy POST /v1beta1/{resource}:setIamPolicy Sets the access control policy on the specified resource. streamRawPredict POST /v1beta1/{endpoint}:streamRawPredict Perform a streaming online prediction with an arbitrary HTTP payload. testIamPermissions POST /v1beta1/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource. undeployModel POST /v1beta1/{endpoint}:undeployModel Undeploys a Model from an Endpoint, removing a DeployedModel from it, and freeing all resources it's using. update POST /v1beta1/{endpoint.name}:update Updates an Endpoint with a long running operation.
- This service has the following service endpoints and all URIs below are relative to these service endpoints: https://aiplatform.googleapis.com https://africa-south1-aiplatform.googleapis.com https://asia-east1-aiplatform.googleapis.com https://asia-east2-aiplatform.googleapis.com https://asia-northeast1-aiplatform.googleapis.com https://asia-northeast2-aiplatform.googleapis.com https://asia-northeast3-aiplatform.googleapis.com https://asia-south1-aiplatform.googleapis.com https://asia-southeast1-aiplatform.googleapis.com https://asia-southeast2-aiplatform.googleapis.com https://australia-southeast1-aiplatform.googleapis.com https://australia-southeast2-aiplatform.googleapis.com https://europe-central2-aiplatform.googleapis.com https://europe-north1-aiplatform.googleapis.com https://europe-southwest1-aiplatform.googleapis.com https://europe-west1-aiplatform.googleapis.com https://europe-west2-aiplatform.googleapis.com https://europe-west3-aiplatform.googleapis.com https://europe-west4-aiplatform.googleapis.com https://europe-west6-aiplatform.googleapis.com https://europe-west8-aiplatform.googleapis.com https://europe-west9-aiplatform.googleapis.com https://europe-west12-aiplatform.googleapis.com https://me-central1-aiplatform.googleapis.com https://me-central2-aiplatform.googleapis.com https://me-west1-aiplatform.googleapis.com https://northamerica-northeast1-aiplatform.googleapis.com https://northamerica-northeast2-aiplatform.googleapis.com https://southamerica-east1-aiplatform.googleapis.com https://southamerica-west1-aiplatform.googleapis.com https://us-central1-aiplatform.googleapis.com https://us-east1-aiplatform.googleapis.com https://us-east4-aiplatform.googleapis.com https://us-south1-aiplatform.googleapis.com https://us-west1-aiplatform.googleapis.com https://us-west2-aiplatform.googleapis.com https://us-west3-aiplatform.googleapis.com https://us-west4-aiplatform.googleapis.com https://us-east5-aiplatform.googleapis.com See Feature availability for the supported features for each region.

### "Vertex Explainable AI notebook tutorials \_|\_ Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/explainable-ai/explainable-ai-notebook-tutorials)
- Source ID: `site-docs-reference-2`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- Tutorial steps Colab Colab Enterprise GitHub Vertex AI Workbench Tune text models by using supervised tuning Vertex AI Tuning a PEFT model .
- Learn how to use Vertex AI LLM to download pretrained LLM model, make predictions and finetuning the model.
- Learn more about Tune text models by using supervised tuning .
- List of notebooks Select a service AutoML BigQuery BigQuery ML Custom training Image Ray on Vertex AI Tabular Text Vector Search Vertex AI Experiments Vertex AI Feature Store Vertex AI Inference Vertex AI model evaluation Vertex AI Model Monitoring Vertex AI Model Registry Vertex AI Pipelines Vertex AI TensorBoard Vertex AI Vizier Vertex AI Workbench Vertex Explainable AI Vertex ML Metadata Services Description Open in Classification for tabular data AutoML tabular training and prediction .

