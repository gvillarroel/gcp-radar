---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.064Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Vertex AI online inference PSC service automation"
feature_slug: "vertex-ai-online-inference-psc-service-automation"
latest_feature_date: "2025-06-30"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint"
  - "https://docs.cloud.google.com/vertex-ai/docs/start/predictions-guide"
  - "https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore"
keywords:
  - "vertex"
  - "ai"
  - "online"
  - "inference"
  - "psc"
  - "automation"
  - "adds"
  - "preview"
---

# Vertex AI online inference PSC service automation

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI online inference adds preview support for Private Service Connect service automation that automatically creates PSC endpoints for dedicated private endpoints.

## Extended Definition

Vertex AI online inference adds preview support for Private Service Connect service automation that automatically creates PSC endpoints for dedicated private endpoints.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint)
- [https://docs.cloud.google.com/vertex-ai/docs/start/predictions-guide](https://docs.cloud.google.com/vertex-ai/docs/start/predictions-guide)
- [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore)

## Supporting Pages

### "MCP Tools Reference: aiplatform.googleapis.com \_|\_ Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint](https://docs.cloud.google.com/vertex-ai/docs/reference/mcp/tools_list/create_endpoint)
- Source ID: `site-api-reference-2`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- Supported metrics: For Online Prediction: aiplatform.googleapis.com/prediction/online/accelerator/duty cycle aiplatform.googleapis.com/prediction/online/cpu/utilization aiplatform.googleapis.com/prediction/online/request count pubsub.googleapis.com/subscription/num undelivered messages prometheus.googleapis.com/vertex dcgm fi dev gpu util prometheus.googleapis.com/vertex vllm gpu cache usage perc prometheus.googleapis.com/vertex vllm num requests waiting target integer The target resource utilization in percentage (1% - 100%) for the given metric; once the real usage deviates from the target by a certain percentage, the machine replicas change.
- Format: https://{endpoint id}.{region}-{uid}.prediction.vertexai.goog . clientConnectionConfig object ( ClientConnectionConfig ) Configurations that are applied to the endpoint for online prediction. satisfiesPzs boolean Output only.
- ClientConnectionConfig JSON representation { "inferenceTimeout" : string } Fields inferenceTimeout string ( Duration format) Customizable online prediction request timeout.
- This field is used by Online Inference(Prediction) only. enableSecurePrivateServiceConnect boolean Optional.

### Get inferences beginner's guide \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/start/predictions-guide](https://docs.cloud.google.com/vertex-ai/docs/start/predictions-guide)
- Source ID: `site-docs-reference-2`
- Final score: 91
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Get online inferences If you want to get online inferences, you need to take the extra step of deploying your model to a Vertex AI endpoint .
- Overview of the managed inference service Vertex AI supports batch and online inferences.
- How online inferences work in Vertex AI.
- Getting Predictions video Train and serve a TensorFlow model using a prebuilt container Serving PyTorch image models with prebuilt containers on Vertex AI Serve a Stable Diffusion model using a prebuilt container Custom inference routines with Sklearn Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Create an online store instance \_|\_ Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore](https://docs.cloud.google.com/vertex-ai/docs/featurestore/latest/create-onlinestore)
- Source ID: `site-docs-reference-3`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see the Python API reference documentation . from typing import List from google.cloud import aiplatform from vertexai.resources.preview import feature store def create optimized private feature online store sample ( project : str , location : str , feature online store id : str , project allowlist : List [ str ], ): aiplatform . init ( project = project , location = location ) fos = feature store .
- For more information, see the Python API reference documentation . from google.cloud import aiplatform from vertexai.resources.preview import feature store def create optimized public feature online store sample ( project : str , location : str , feature online store id : str , ): aiplatform . init ( project = project , location = location ) fos = feature store .
- For more information, see the Python API reference documentation . from google.cloud import aiplatform from vertexai.resources.preview import feature store def create bigtable feature online store sample ( project : str , location : str , feature online store id : str , ): aiplatform . init ( project = project , location = location ) fos = feature store .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION ID -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION ID /featureOnlineStores?feature online store id= FEATUREONLINESTORE NAME " Select-Object -Expand Content You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/ LOCATION ID /featureOnlineStores/ FEATUREONLINESTORE NAME /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.aiplatform.v1.CreateFeatureOnlineStoreOperationMetadata", "genericMetadata": { "createTime": "2023-09-18T17:49:23.847496Z", "updateTime": "2023-09-18T17:49:23.847496Z" } } } Create an online store for Optimized online serving Vertex AI Feature Store Optimized online serving is deprecated .

