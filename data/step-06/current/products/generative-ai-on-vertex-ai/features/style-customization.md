---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.703Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Style Customization"
feature_slug: "style-customization"
latest_feature_date: "2024-12-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1/publishers.models/countTokens"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1beta1/publishers.models/countTokens"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditMode"
keywords:
  - "style"
  - "customization"
  - "mode"
  - "for"
  - "transferring"
  - "reference"
  - "to"
  - "generated"
---

# Style Customization

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

A customization mode for transferring a reference style to generated images.

## Extended Definition

A customization mode for transferring a reference style to generated images.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1/publishers.models/countTokens](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1/publishers.models/countTokens)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1beta1/publishers.models/countTokens](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1beta1/publishers.models/countTokens)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditMode](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditMode)

## Supporting Pages

### "Method: publishers.models.countTokens \_|\_ Generative AI on Vertex AI \_\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1/publishers.models/countTokens](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1/publishers.models/countTokens)
- Source ID: `site-api-reference`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI API reference Send feedback Method: publishers.models.countTokens Stay organized with collections Save and categorize content based on your preferences.
- A Tool is a piece of code that enables the system to interact with external systems to perform an action, or set of actions, outside of knowledge and scope of the model. systemInstruction object ( Content ) Optional.
- Endpoint post https: / /aiplatform.googleapis.com /v1 /{model}:countTokens Path parameters model string Required.
- The name of the model requested to perform token counting.

### "Method: publishers.models.countTokens \_|\_ Generative AI on Vertex AI \_\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1beta1/publishers.models/countTokens](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1beta1/publishers.models/countTokens)
- Source ID: `site-api-reference`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI API reference Send feedback Method: publishers.models.countTokens Stay organized with collections Save and categorize content based on your preferences.
- A Tool is a piece of code that enables the system to interact with external systems to perform an action, or set of actions, outside of knowledge and scope of the model. systemInstruction object ( Content ) Optional.
- Endpoint post https: / /aiplatform.googleapis.com /v1beta1 /{model}:countTokens Path parameters model string Required.
- The name of the model requested to perform token counting.

### "Deploy and inference Gemma using Model Garden and Vertex AI GPU-backed endpoints\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial)
- Source ID: `site-docs-root`
- Final score: 157
- Re-rank relevance: N/A

Evidence snippets:
- QUERY PARAMETERS " Select-Object -Expand Content You receive a JSON response similar to the following. { "publisherModels": [ { "name": "publishers/google/models/gemma3", "versionId": "gemma-3-1b-it", "openSourceCategory": "GOOGLE OWNED OSS WITH GOOGLE CHECKPOINT", "supportedActions": { "openNotebook": { "references": { "us-central1": { "uri": "https://colab.research.google.com/github/GoogleCloudPlatform/vertex-ai-samples/blob/main/notebooks/community/model garden/model garden gradio streaming chat completions.ipynb" } }, "resourceTitle": "Notebook", "resourceUseCase": "Chat Completion Playground", "resourceDescription": "Chat with deployed Gemma 2 endpoints via Gradio UI." }, "deploy": { "modelDisplayName": "gemma-3-1b-it", "containerSpec": { "imageUri": "us-docker.pkg.dev/vertex-ai/vertex-vision-model-garden-dockers/pytorch-vllm-serve:20250312 0916 RC01", "args": [ "python", "-m", "vllm.entrypoints.api server", "--host=0.0.0.0", "--port=8080", "--model=gs://vertex-model-garden-restricted-us/gemma3/gemma-3-1b-it", "--tensor-parallel-size=1", "--swap-space=16", "--gpu-memory-utilization=0.95", "--disable-log-stats" ], "env": [ { "name": "MODEL ID", "value": "google/gemma-3-1b-it" }, { "name": "DEPLOY SOURCE", "value": "UI NATIVE MODEL" } ], "ports": [ { "containerPort": 8080 } ], "predictRoute": "/generate", "healthRoute": "/ping" }, "dedicatedResources": { "machineSpec": { "machineType": "g2-standard-12", "acceleratorType": "NVIDIA L4", "acceleratorCount": 1 } }, "publicArtifactUri": "gs://vertex-model-garden-restricted-us/gemma3/gemma3.tar.gz", "deployTaskName": "vLLM 128K context", "deployMetadata": { "sampleRequest": "{\n \"instances\": [\n {\n \"@requestFormat\": \"chatCompletions\",\n \"messages\": [\n {\n \"role\": \"user\",\n \"content\": \"What is machine learning?\"\n }\n ],\n \"max tokens\": 100\n }\n ]\n}\n" } }, ...
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "hugging face model id": " MODEL ID ", "hugging face access token": " ACCESS TOKEN ", "model config": { "accept eula": "true" } } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION :deploy" Select-Object -Expand Content You receive a JSON response similar to the following. { "name": "projects/ PROJECT ID /locations/us-central1 LOCATION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.aiplatform.v1.DeployOperationMetadata", "genericMetadata": { "createTime": "2025-03-13T21:44:44.538780Z", "updateTime": "2025-03-13T21:44:44.538780Z" }, "publisherModel": "publishers/ PUBLISHER NAME /model/ MODEL NAME ", "destination": "projects/ PROJECT ID /locations/ LOCATION ", "projectNumber": " PROJECT ID " } } Deploy a model with customizations Before using any of the request data, make the following replacements: LOCATION : A region where the model is deployed.
- For more information, see the Python API reference documentation . """ Sample to run inference on a Gemma2 model deployed to a Vertex AI endpoint with GPU accellerators. """ from google.cloud import aiplatform from google.protobuf import json format from google.protobuf.struct pb2 import Value TODO(developer): Update & uncomment lines below PROJECT ID = "your-project-id" ENDPOINT REGION = "your-vertex-endpoint-region" ENDPOINT ID = "your-vertex-endpoint-id" Default configuration config = { "max tokens" : 1024 , "temperature" : 0.9 , "top p" : 1.0 , "top k" : 1 } Prompt used in the prediction prompt = "Why is the sky blue?" Encapsulate the prompt in a correct format for GPUs Example format: [{'inputs': 'Why is the sky blue?', 'parameters': {'temperature': 0.9}}] input = { "inputs" : prompt , "parameters" : config } Convert input message to a list of GAPIC instances for model input instances = [ json format .
- Deploy a model The following example deploys the gemma-3-1b-it model to a new Vertex AI endpoint in us-central1 by using default configurations. terraform { required providers { google = { source = "hashicorp/google" version = "6.45.0" } } } provider "google" { region = "us-central1" } resource "google vertex ai endpoint with model garden deployment" "gemma deployment" { publisher model name = "publishers/google/models/gemma3@gemma-3-1b-it" location = "us-central1" model config { accept eula = True } } To deploy a model with customization, see Vertex AI Endpoint with Model Garden Deployment for details.

### EditMode \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditMode](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditMode)
- Source ID: `site-api-reference`
- Final score: 153
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Pass a style image to define a generation style for the prompt EDIT MODE BGSWAP Background swap mode.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-20 UTC."],[],[]]
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI API reference Send feedback EditMode Stay organized with collections Save and categorize content based on your preferences.
- EDIT MODE STYLE Style editing mode.

