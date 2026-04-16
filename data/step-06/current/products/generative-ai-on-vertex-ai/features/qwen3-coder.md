---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.668Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Qwen3 Coder"
feature_slug: "qwen3-coder"
latest_feature_date: "2025-08-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/quickstart"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deprecations/partner-models"
keywords:
  - "qwen3"
  - "coder"
  - "is"
  - "available"
  - "as"
  - "model"
  - "in"
  - "garden"
---

# Qwen3 Coder

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Qwen3 Coder is available as a Model as a Service model in Model Garden.

## Extended Definition

Qwen3 Coder is available as a Model as a Service model in Model Garden.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/quickstart](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/quickstart)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deprecations/partner-models](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deprecations/partner-models)

## Supporting Pages

### "Deploy and inference Gemma using Model Garden and Vertex AI GPU-backed endpoints\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial)
- Source ID: `site-docs-root`
- Final score: 238
- Re-rank relevance: N/A

Evidence snippets:
- QUERY PARAMETERS " Select-Object -Expand Content You receive a JSON response similar to the following. { "publisherModels": [ { "name": "publishers/google/models/gemma3", "versionId": "gemma-3-1b-it", "openSourceCategory": "GOOGLE OWNED OSS WITH GOOGLE CHECKPOINT", "supportedActions": { "openNotebook": { "references": { "us-central1": { "uri": "https://colab.research.google.com/github/GoogleCloudPlatform/vertex-ai-samples/blob/main/notebooks/community/model garden/model garden gradio streaming chat completions.ipynb" } }, "resourceTitle": "Notebook", "resourceUseCase": "Chat Completion Playground", "resourceDescription": "Chat with deployed Gemma 2 endpoints via Gradio UI." }, "deploy": { "modelDisplayName": "gemma-3-1b-it", "containerSpec": { "imageUri": "us-docker.pkg.dev/vertex-ai/vertex-vision-model-garden-dockers/pytorch-vllm-serve:20250312 0916 RC01", "args": [ "python", "-m", "vllm.entrypoints.api server", "--host=0.0.0.0", "--port=8080", "--model=gs://vertex-model-garden-restricted-us/gemma3/gemma-3-1b-it", "--tensor-parallel-size=1", "--swap-space=16", "--gpu-memory-utilization=0.95", "--disable-log-stats" ], "env": [ { "name": "MODEL ID", "value": "google/gemma-3-1b-it" }, { "name": "DEPLOY SOURCE", "value": "UI NATIVE MODEL" } ], "ports": [ { "containerPort": 8080 } ], "predictRoute": "/generate", "healthRoute": "/ping" }, "dedicatedResources": { "machineSpec": { "machineType": "g2-standard-12", "acceleratorType": "NVIDIA L4", "acceleratorCount": 1 } }, "publicArtifactUri": "gs://vertex-model-garden-restricted-us/gemma3/gemma3.tar.gz", "deployTaskName": "vLLM 128K context", "deployMetadata": { "sampleRequest": "{\n \"instances\": [\n {\n \"@requestFormat\": \"chatCompletions\",\n \"messages\": [\n {\n \"role\": \"user\",\n \"content\": \"What is machine learning?\"\n }\n ],\n \"max tokens\": 100\n }\n ]\n}\n" } }, ...
- Run the following command in the terminal to create or overwrite this file in the current directory: @' { "publisher model name": " MODEL ID ", "deploy config": { "dedicated resources": { "machine spec": { "machine type": " MACHINE TYPE ", "accelerator type": " ACCELERATOR TYPE ", "accelerator count": ACCELERATOR COUNT , "reservation affinity": { "reservation affinity type": "ANY RESERVATION" } }, "spot": "false" } }, "model config": { "accept eula": "true", "container spec": { "image uri": " IMAGE URI ", "args": [ CONTAINER ARGS ], "ports": [ { "container port": CONTAINER PORT } ] } }, "deploy config": { "fast tryout enabled": false }, } '@ Out-File -FilePath request.json -Encoding utf8 Then execute the following command to send your REST request: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION :deploy" Select-Object -Expand Content You receive a JSON response similar to the following. { "name": "projects/ PROJECT ID /locations/ LOCATION /operations/ OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.aiplatform.v1.DeployOperationMetadata", "genericMetadata": { "createTime": "2025-03-13T21:44:44.538780Z", "updateTime": "2025-03-13T21:44:44.538780Z" }, "publisherModel": "publishers/google/models/gemma3@gemma-3-1b-it", "destination": "projects/ PROJECT ID /locations/ LOCATION ", "projectNumber": " PROJECT ID " } } Console In the Google Cloud console, go to the Model Garden page.
- To run the command asynchronously, include the --asynchronous flag. gcloud ai model-garden models deploy \ --model = MODEL ID \ [ --machine-type = MACHINE TYPE ] \ [ --accelerator-type = ACCELERATOR TYPE ] \ [ --endpoint-display-name = ENDPOINT NAME ] \ [ --hugging-face-access-token = HF ACCESS TOKEN ] \ [ --reservation-affinity reservation-affinity-type = any-reservation ] \ [ --reservation-affinity reservation-affinity-type = specific-reservation, key = "compute.googleapis.com/reservation-name" , values = RESERVATION RESOURCE NAME ] \ [ --asynchronous ] Replace the following placeholders: MODEL ID : The model ID from the previous list command.
- Deploy a model The following example deploys the gemma-3-1b-it model to a new Vertex AI endpoint in us-central1 by using default configurations. terraform { required providers { google = { source = "hashicorp/google" version = "6.45.0" } } } provider "google" { region = "us-central1" } resource "google vertex ai endpoint with model garden deployment" "gemma deployment" { publisher model name = "publishers/google/models/gemma3@gemma-3-1b-it" location = "us-central1" model config { accept eula = True } } To deploy a model with customization, see Vertex AI Endpoint with Model Garden Deployment for details.

### "Deploy and inference Gemma using Model Garden and Vertex AI TPU-backed endpoints\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu)
- Source ID: `site-docs-root`
- Final score: 230
- Re-rank relevance: N/A

Evidence snippets:
- Using endpoint [https://us-central1-aiplatform.googleapis.com/] artifactUri: [URI removed] baseModelSource: modelGardenSource: publicModelName: publishers/google/models/gemma2 ... deployedModels: - deployedModelId: '1234567891234567891' endpoint: projects/12345678912/locations/us-central1/endpoints/12345678912345 displayName: gemma2-2b-it-12345678912345 etag: [ETag removed] modelSourceInfo: sourceType: MODEL GARDEN name: projects/123456789123/locations/us-central1/models/gemma2-2b-it-12345678912345 ...
- Objectives This tutorial shows you how to perform the following tasks: Deploy the Gemma 2 2B open model to a TPU backed endpoint by using Model Garden Use the PredictionServiceClient to get online predictions Costs In this document, you use the following billable components of Google Cloud: A ct5lp-hightpu-1t machine type with one TPU V5 accelerator Vertex AI prediction and explanation To generate a cost estimate based on your projected usage, use the pricing calculator .
- String projectId = "YOUR PROJECT ID" ; String endpointRegion = "us-west1" ; String endpointId = "YOUR ENDPOINT ID" ; PredictionServiceSettings predictionServiceSettings = PredictionServiceSettings . newBuilder () . setEndpoint ( String . format ( "%s-aiplatform.googleapis.com:443" , endpointRegion )) . build (); PredictionServiceClient predictionServiceClient = PredictionServiceClient . create ( predictionServiceSettings ); Gemma2PredictTpu creator = new Gemma2PredictTpu ( predictionServiceClient ); creator . gemma2PredictTpu ( projectId , endpointRegion , endpointId ); } // Demonstrates how to run inference on a Gemma2 model // deployed to a Vertex AI endpoint with TPU accelerators. public String gemma2PredictTpu ( String projectId , String region , String endpointId ) throws IOException { Map<String , Object > paramsMap = new HashMap <> (); paramsMap . put ( "temperature" , 0.9 ); paramsMap . put ( "maxOutputTokens" , 1024 ); paramsMap . put ( "topP" , 1.0 ); paramsMap . put ( "topK" , 1 ); Value parameters = mapToValue ( paramsMap ); // Prompt used in the prediction String instance = "{ \"prompt\": \"Why is the sky blue?\"}" ; Value .
- The aiplatform Go client library Go support for Protocol Buffers Google API Extensions for Go (gax-go) go get cloud.google.com/go/aiplatform go get google.golang.org/protobuf go get github.com/googleapis/gax-go/v2 Deploy Gemma using Model Garden You deploy the Gemma 2 2B model to a ct5lp-hightpu-1t Compute Engine machine type that is optimized for small to medium scale training.

### "Test model capabilities in Model Garden \_|\_ Generative AI on Vertex AI\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/quickstart](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/quickstart)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: N/A

Evidence snippets:
- Required roles for users To get the permissions that you need to test model capabilities in Model Garden, ask your administrator to grant you the following IAM roles on your Google Cloud project: Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) Artifact Registry Administrator ( roles/artifactregistry.admin ) Cloud Run Admin ( roles/run.admin ) Storage Admin ( roles/storage.admin ) Vertex AI User ( roles/aiplatform.user ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Enable the APIs If you want to try Model Garden Spaces, then verify that the Compute Engine default service account has the required permissions to launch Spaces.
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI Guides Send feedback Test model capabilities in Model Garden Stay organized with collections Save and categorize content based on your preferences.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

### "Model deprecations (MaaS) \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deprecations/partner-models](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deprecations/partner-models)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- Model ID claude-3-5-sonnet Launch stage GA Supported inputs & outputs Inputs: Text , Code , Images Outputs: Text Token limits Maximum input tokens: 200,000 Maximum output tokens: 8,000 Capabilities Supported Prompt caching Function calling Count tokens Not supported Batch predictions Extended thinking Usage types Supported Fixed quota Provisioned Throughput Not supported Technical specifications Images Limitation and specifications: See Vision in Anthropic's documentation Documents Limitation and specifications: See PDF support in Anthropic's documentation Knowledge cutoff date April 2024 Versions claude-3-5-sonnet Launch stage: Generally available Release date: June 20, 2024 Supported regions Model availability (Includes fixed quota & Provisioned Throughput) United States us-east5 Europe europe-west1 Asia Pacific asia-southeast1 ML processing United States Multi-region Europe Multi-region Asia Pacific asia-southeast1 Quota limits us-east5: QPM: 80 TPM: 350,000 (input and output) Context length: 200,000 europe-west1: QPM: 130 TPM: 600,000 (input and output) Context length: 200,000 asia-southeast1: QPM: 35 TPM: 150,000 (input and output) Context length: 200,000 Pricing See Pricing .
- Try in Vertex AI Model ID claude-3-5-sonnet-v2 Launch stage GA Supported inputs & outputs Inputs: Text , Code , Images Outputs: Text Token limits Maximum input tokens: 200,000 Maximum output tokens: 8,000 Capabilities Supported Batch predictions Prompt caching Function calling Count tokens Not supported Extended thinking Usage types Supported Fixed quota Provisioned Throughput Not supported Technical specifications Images Limitation and specifications: See Vision in Anthropic's documentation Documents Limitation and specifications: See PDF support in Anthropic's documentation Knowledge cutoff date August 2024 Versions claude-3-5-sonnet-v2 Launch stage: Generally available Release date: October 22, 2024 Supported regions Model availability (Includes fixed quota & Provisioned Throughput) United States us-east5 Europe europe-west1 Global global endpoint ML processing United States Multi-region Europe Multi-region Quota limits us-east5: QPM: 90 TPM: 540,000 (input and output) Context length: 200,000 europe-west1: QPM: 55 TPM: 330,000 (input and output) Context length: 200,000 global endpoint: QPM: 25 TPM: 140,000 (input and output) Context length: 200,000 Pricing See Pricing .
- View model card in Model Garden Model ID claude-3-5-haiku Launch stage deprecated Supported inputs & outputs Inputs: Text , Code , Images Outputs: Text Token limits Maximum input tokens: 200,000 Maximum output tokens: 8,000 Capabilities Supported Batch predictions Prompt caching Function calling Count tokens Not supported Extended thinking Usage types Supported Fixed quota Provisioned Throughput Not supported Technical specifications Images Limitation and specifications: See Vision in Anthropic's documentation Documents Limitation and specifications: See PDF support in Anthropic's documentation Knowledge cutoff date July 2024 Versions claude-3-5-haiku Launch stage: Deprecated Release date: October 22, 2024 Supported regions Model availability (Includes fixed quota & Provisioned Throughput) United States us-east5 Europe europe-west1 ML processing United States Multi-region Europe Multi-region Quota limits us-east5: QPM: 80 TPM: 350,000 (input and output) Context length: 200,000 europe-west1: QPM: 90 TPM: 400,000 (input and output) Context length: 200,000 Pricing See Pricing .
- View model card in Model Garden Model ID jamba-1.5-large Launch stage Preview Supported inputs & outputs Inputs: Text , Documents Outputs: Text Usage types Supported Fixed quota Not supported Provisioned Throughput Knowledge cutoff date March 2024 Versions jamba-1.5-large Launch stage: Preview Release date: August 22, 2024 Supported regions Model availability United States us-central1 Europe europe-west4 ML processing United States Multi-region Quota limits us-central1: QPM: 20 TPM: 20,000 Context length: 256,000 europe-west4: QPM: 20 TPM: 20,000 Context length: 256,000 Pricing See Pricing .

