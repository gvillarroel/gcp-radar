---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.695Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Disaggregated serving"
feature_slug: "disaggregated-serving"
latest_feature_date: "2024-12-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1beta1/publishers.models/countTokens"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1/publishers.models/generateContent"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial"
keywords:
  - "disaggregated"
  - "serving"
  - "hex"
  - "llm"
  - "mode"
  - "that"
  - "is"
  - "available"
---

# Disaggregated serving

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

A Hex-LLM serving mode that is available experimentally.

## Extended Definition

A Hex-LLM serving mode that is available experimentally.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1beta1/publishers.models/countTokens](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1beta1/publishers.models/countTokens)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1/publishers.models/generateContent](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1/publishers.models/generateContent)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial)

## Supporting Pages

### "Generative AI glossary \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- Source ID: `site-docs-root`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- By understanding the relationships between words, generative AI models can create new content that is both coherent and relevant. zero-shot prompt (direct prompting) In generative AI, a zero-shot prompt is a prompt that enables a large language model (LLM) to perform a task without any additional training or examples.
- Chain-of-Thought In generative AI, Chain-of-Thought (CoT) is a prompting technique that encourages the large language model (LLM) to explicitly detail its reasoning process before arriving at a conclusion.
- Automatic side-by-side (AutoSxS) Automatic side-by-side (AutoSxS) is a model-assisted evaluation tool that compares two large language models (LLMs) side by side.
- However, for generative tasks like summarization and text generation, other metrics like Rough-L score might be more appropriate. feature In machine learning (ML), a feature is a characteristic or attribute of an instance or entity that's used as an input to train an ML model or to make inferences. feature extraction In the context of generative AI, feature extraction refers to the process of identifying and selecting relevant features from input data to be used in model training.

### "Method: publishers.models.countTokens \_|\_ Generative AI on Vertex AI \_\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1beta1/publishers.models/countTokens](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1beta1/publishers.models/countTokens)
- Source ID: `site-api-reference`
- Final score: 137
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A Tool is a piece of code that enables the system to interact with external systems to perform an action, or set of actions, outside of knowledge and scope of the model. systemInstruction object ( Content ) Optional.
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI API reference Send feedback Method: publishers.models.countTokens Stay organized with collections Save and categorize content based on your preferences.
- Format: /publishers/google/models/ Request body The request body contains data with the following structure: Fields model string Optional.
- Endpoint post https: / /aiplatform.googleapis.com /v1beta1 /{model}:countTokens Path parameters model string Required.

### "Method: publishers.models.generateContent \_|\_ Generative AI on Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1/publishers.models/generateContent](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1/publishers.models/generateContent)
- Source ID: `site-api-reference`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A Tool is a piece of code that enables the system to interact with external systems to perform an action, or set of actions, outside of knowledge and scope of the model. toolConfig object ( ToolConfig ) Optional.
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI API reference Send feedback Method: publishers.models.generateContent Stay organized with collections Save and categorize content based on your preferences.
- Publisher model format: publishers/google/models/ Request body The request body contains data with the following structure: Fields contents[] object ( Content ) Required.
- For multi-turn queries, this is a repeated field that contains conversation history + latest request. tools[] object ( Tool ) Optional.

### "Deploy and inference Gemma using Model Garden and Vertex AI GPU-backed endpoints\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- QUERY PARAMETERS " Select-Object -Expand Content You receive a JSON response similar to the following. { "publisherModels": [ { "name": "publishers/google/models/gemma3", "versionId": "gemma-3-1b-it", "openSourceCategory": "GOOGLE OWNED OSS WITH GOOGLE CHECKPOINT", "supportedActions": { "openNotebook": { "references": { "us-central1": { "uri": "https://colab.research.google.com/github/GoogleCloudPlatform/vertex-ai-samples/blob/main/notebooks/community/model garden/model garden gradio streaming chat completions.ipynb" } }, "resourceTitle": "Notebook", "resourceUseCase": "Chat Completion Playground", "resourceDescription": "Chat with deployed Gemma 2 endpoints via Gradio UI." }, "deploy": { "modelDisplayName": "gemma-3-1b-it", "containerSpec": { "imageUri": "us-docker.pkg.dev/vertex-ai/vertex-vision-model-garden-dockers/pytorch-vllm-serve:20250312 0916 RC01", "args": [ "python", "-m", "vllm.entrypoints.api server", "--host=0.0.0.0", "--port=8080", "--model=gs://vertex-model-garden-restricted-us/gemma3/gemma-3-1b-it", "--tensor-parallel-size=1", "--swap-space=16", "--gpu-memory-utilization=0.95", "--disable-log-stats" ], "env": [ { "name": "MODEL ID", "value": "google/gemma-3-1b-it" }, { "name": "DEPLOY SOURCE", "value": "UI NATIVE MODEL" } ], "ports": [ { "containerPort": 8080 } ], "predictRoute": "/generate", "healthRoute": "/ping" }, "dedicatedResources": { "machineSpec": { "machineType": "g2-standard-12", "acceleratorType": "NVIDIA L4", "acceleratorCount": 1 } }, "publicArtifactUri": "gs://vertex-model-garden-restricted-us/gemma3/gemma3.tar.gz", "deployTaskName": "vLLM 128K context", "deployMetadata": { "sampleRequest": "{\n \"instances\": [\n {\n \"@requestFormat\": \"chatCompletions\",\n \"messages\": [\n {\n \"role\": \"user\",\n \"content\": \"What is machine learning?\"\n }\n ],\n \"max tokens\": 100\n }\n ]\n}\n" } }, ...
- Run the following command in the terminal to create or overwrite this file in the current directory: cat > request.json MODEL ID ", "deploy config": { "dedicated resources": { "machine spec": { "machine type": " MACHINE TYPE ", "accelerator type": " ACCELERATOR TYPE ", "accelerator count": ACCELERATOR COUNT , "reservation affinity": { "reservation affinity type": "ANY RESERVATION" } }, "spot": "false" } }, "model config": { "accept eula": "true", "container spec": { "image uri": " IMAGE URI ", "args": [ CONTAINER ARGS ], "ports": [ { "container port": CONTAINER PORT } ] } }, "deploy config": { "fast tryout enabled": false }, } EOF Then execute the following command to send your REST request: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION :deploy" PowerShell Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- HTTP method and URL: POST https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION :deploy Request JSON body: { "publisher model name": " MODEL ID ", "deploy config": { "dedicated resources": { "machine spec": { "machine type": " MACHINE TYPE ", "accelerator type": " ACCELERATOR TYPE ", "accelerator count": ACCELERATOR COUNT , "reservation affinity": { "reservation affinity type": "ANY RESERVATION" } }, "spot": "false" } }, "model config": { "accept eula": "true", "container spec": { "image uri": " IMAGE URI ", "args": [ CONTAINER ARGS ], "ports": [ { "container port": CONTAINER PORT } ] } }, "deploy config": { "fast tryout enabled": false }, } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Run the following command in the terminal to create or overwrite this file in the current directory: cat > request.json MODEL ID ", "hugging face access token": " ACCESS TOKEN ", "model config": { "accept eula": "true" } } EOF Then execute the following command to send your REST request: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION :deploy" PowerShell Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .

