---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.701Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Inpainting"
feature_slug: "inpainting"
latest_feature_date: "2024-12-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfig"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfigV6"
keywords:
  - "inpainting"
  - "an"
  - "editing"
  - "that"
  - "adds"
  - "or"
  - "removes"
  - "content"
---

# Inpainting

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

An editing feature that adds or removes content inside a masked area of an image; Inpainting lets you add or remove content from a masked area of an image.

## Extended Definition

An editing feature that adds or removes content inside a masked area of an image; Inpainting lets you add or remove content from a masked area of an image.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfig](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfig)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfigV6](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfigV6)

## Supporting Pages

### "Deploy and inference Gemma using Model Garden and Vertex AI GPU-backed endpoints\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial)
- Source ID: `site-docs-root`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Run the following command in the terminal to create or overwrite this file in the current directory: cat > request.json MODEL ID ", "deploy config": { "dedicated resources": { "machine spec": { "machine type": " MACHINE TYPE ", "accelerator type": " ACCELERATOR TYPE ", "accelerator count": ACCELERATOR COUNT , "reservation affinity": { "reservation affinity type": "ANY RESERVATION" } }, "spot": "false" } }, "model config": { "accept eula": "true", "container spec": { "image uri": " IMAGE URI ", "args": [ CONTAINER ARGS ], "ports": [ { "container port": CONTAINER PORT } ] } }, "deploy config": { "fast tryout enabled": false }, } EOF Then execute the following command to send your REST request: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION :deploy" PowerShell Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- Run the following command in the terminal to create or overwrite this file in the current directory: cat > request.json MODEL ID ", "hugging face access token": " ACCESS TOKEN ", "model config": { "accept eula": "true" } } EOF Then execute the following command to send your REST request: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION :deploy" PowerShell Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- Run the following command in the terminal to create or overwrite this file in the current directory: cat > request.json MODEL ID ", "model config": { "accept eula": "true" } } EOF Then execute the following command to send your REST request: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION :deploy" PowerShell Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- QUERY PARAMETERS " Select-Object -Expand Content You receive a JSON response similar to the following. { "publisherModels": [ { "name": "publishers/google/models/gemma3", "versionId": "gemma-3-1b-it", "openSourceCategory": "GOOGLE OWNED OSS WITH GOOGLE CHECKPOINT", "supportedActions": { "openNotebook": { "references": { "us-central1": { "uri": "https://colab.research.google.com/github/GoogleCloudPlatform/vertex-ai-samples/blob/main/notebooks/community/model garden/model garden gradio streaming chat completions.ipynb" } }, "resourceTitle": "Notebook", "resourceUseCase": "Chat Completion Playground", "resourceDescription": "Chat with deployed Gemma 2 endpoints via Gradio UI." }, "deploy": { "modelDisplayName": "gemma-3-1b-it", "containerSpec": { "imageUri": "us-docker.pkg.dev/vertex-ai/vertex-vision-model-garden-dockers/pytorch-vllm-serve:20250312 0916 RC01", "args": [ "python", "-m", "vllm.entrypoints.api server", "--host=0.0.0.0", "--port=8080", "--model=gs://vertex-model-garden-restricted-us/gemma3/gemma-3-1b-it", "--tensor-parallel-size=1", "--swap-space=16", "--gpu-memory-utilization=0.95", "--disable-log-stats" ], "env": [ { "name": "MODEL ID", "value": "google/gemma-3-1b-it" }, { "name": "DEPLOY SOURCE", "value": "UI NATIVE MODEL" } ], "ports": [ { "containerPort": 8080 } ], "predictRoute": "/generate", "healthRoute": "/ping" }, "dedicatedResources": { "machineSpec": { "machineType": "g2-standard-12", "acceleratorType": "NVIDIA L4", "acceleratorCount": 1 } }, "publicArtifactUri": "gs://vertex-model-garden-restricted-us/gemma3/gemma3.tar.gz", "deployTaskName": "vLLM 128K context", "deployMetadata": { "sampleRequest": "{\n \"instances\": [\n {\n \"@requestFormat\": \"chatCompletions\",\n \"messages\": [\n {\n \"role\": \"user\",\n \"content\": \"What is machine learning?\"\n }\n ],\n \"max tokens\": 100\n }\n ]\n}\n" } }, ...

### "Deploy and inference Gemma using Model Garden and Vertex AI TPU-backed endpoints\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial-tpu)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- The aiplatform Go client library Go support for Protocol Buffers Google API Extensions for Go (gax-go) go get cloud.google.com/go/aiplatform go get google.golang.org/protobuf go get github.com/googleapis/gax-go/v2 Deploy Gemma using Model Garden You deploy the Gemma 2 2B model to a ct5lp-hightpu-1t Compute Engine machine type that is optimized for small to medium scale training.
- Fprintf ( w , "%v" , value ) return nil } Clean up To avoid incurring charges to your Google Cloud account for the resources used in this tutorial, either delete the project that contains the resources, or keep the project and delete the individual resources.
- Home Technology areas Generative AI on Vertex AI Send feedback Deploy and inference Gemma using Model Garden and Vertex AI TPU-backed endpoints Stay organized with collections Save and categorize content based on your preferences.
- Roles required to select or create a project Select a project : Selecting a project doesn't require a specific IAM role—you can select any project that you've been granted a role on.

### EditConfig \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfig](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfig)
- Source ID: `site-api-reference`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- This config is only enabled in Editing config. experimentUseServoBackend boolean Experiment flag to use servo backend. editMode string The editing mode that describes the use case for editing.
- The values can be one of: inpainting-remove inpainting-insert outpainting alternateInitConfig object ( AlternateInitConfig ) Parameters for AlternateInitConfig experimentalSrVersion string Experimental flag for sr version. experimentalBaseVersion string Experimental flag for base version. embeddingScale number Parameter to control embedding scale, range: [0, 1], default: 0.6. enableBorderReplicatePadding (deprecated) boolean This item is deprecated!
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI API reference Send feedback EditConfig Stay organized with collections Save and categorize content based on your preferences.
- JSON representation { "bufferZones" : [ { object ( BufferZone ) } ] , "baseGuidanceScale" : [ integer ] , "enableClamping" : boolean , "baseSteps" : integer , "baseGamma" : number , "sr1Steps" : integer , "sr2Steps" : integer , "semanticFilterConfig" : { object ( SemanticFilterConfig ) } , "experimentUseServoBackend" : boolean , "editMode" : string , "alternateInitConfig" : { object ( AlternateInitConfig ) } , "experimentalSrVersion" : string , "experimentalBaseVersion" : string , "embeddingScale" : number , "enableBorderReplicatePadding" : boolean , "enablePostProcessingBlend" : boolean , "outpaintingConfig" : { object ( OutpaintingProcessingConfig ) } , "bgswapConfig" : { object ( BackgroundSwapProcessingConfig ) } } BufferZone Fields pixels integer The number of pixels for the mask to dilate. diffusionT number When during diffusion this pixel dilation takes effect, 1=start, 0=end.

### EditConfigV6 \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfigV6](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest/Shared.Types/EditConfigV6)
- Source ID: `site-api-reference`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The values can be one of: inpainting-remove inpainting-insert outpainting product-image maskDilation number Parameter to control mask dilation, range: [0, 1], default: 0.03. guidanceScale integer Guidance scale: this controls strength of text guidance. productPosition string Product position: this controls the product position in the returned product editing image.
- EditConfig for imagegeneration@006 Fields bufferZones[] object ( BufferZone ) Buffer zone, if provided, must be length 2. editMode string The editing mode that describes the use case for editing.
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI API reference Send feedback EditConfigV6 Stay organized with collections Save and categorize content based on your preferences.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-10-20 UTC."],[],[]]

