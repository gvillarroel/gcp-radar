---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.663Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Agent-to-Agent (A2A) protocol support"
feature_slug: "agent-to-agent-a2a-protocol-support"
latest_feature_date: "2025-09-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-parallel"
keywords:
  - "agent"
  - "to"
  - "a2a"
  - "protocol"
  - "engine"
  - "can"
  - "host"
  - "agents"
---

# Agent-to-Agent (A2A) protocol support

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Agent Engine can host agents that support the Agent-to-Agent (A2A) protocol.

## Extended Definition

Agent Engine can host agents that support the Agent-to-Agent (A2A) protocol.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-parallel](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-parallel)

## Supporting Pages

### "Vertex AI GenAI API \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v1beta1.projects.locations.reasoningEngines.a2a.v1.tasks Methods a2aGetReasoningEngine GET /v1beta1/{name}/a2a/{a2aEndpoint} Get request for reasoning engine instance via the A2A get protocol apis. cancel POST /v1beta1/{name}/a2a/{a2aEndpoint}:cancel Send post request for reasoning engine instance via the A2A post protocol apis. pushNotificationConfigs GET /v1beta1/{name}/a2a/{a2aEndpoint} Get request for reasoning engine instance via the A2A get protocol apis. subscribe GET /v1beta1/{name}/a2a/{a2aEndpoint}:subscribe Stream get request for reasoning engine instance via the A2A stream get protocol apis.
- REST Resource: v1beta1.projects.locations.reasoningEngines.a2a.tasks Methods a2aGetReasoningEngine GET /v1beta1/{name}/a2a/{a2aEndpoint} Get request for reasoning engine instance via the A2A get protocol apis. cancel POST /v1beta1/{name}/a2a/{a2aEndpoint}:cancel Send post request for reasoning engine instance via the A2A post protocol apis. pushNotificationConfigs GET /v1beta1/{name}/a2a/{a2aEndpoint} Get request for reasoning engine instance via the A2A get protocol apis. subscribe GET /v1beta1/{name}/a2a/{a2aEndpoint}:subscribe Stream get request for reasoning engine instance via the A2A stream get protocol apis.
- REST Resource: v1beta1.projects.locations.reasoningEngines.a2a.v1 Methods card GET /v1beta1/{name}/a2a/{a2aEndpoint} Get request for reasoning engine instance via the A2A get protocol apis. extendedAgentCard GET /v1beta1/{name}/a2a/{a2aEndpoint} Get request for reasoning engine instance via the A2A get protocol apis. tasks GET /v1beta1/{name}/a2a/{a2aEndpoint} Get request for reasoning engine instance via the A2A get protocol apis.
- REST Resource: v1beta1.projects.locations.reasoningEngines.a2a Methods card GET /v1beta1/{name}/a2a/{a2aEndpoint} Get request for reasoning engine instance via the A2A get protocol apis. extendedAgentCard GET /v1beta1/{name}/a2a/{a2aEndpoint} Get request for reasoning engine instance via the A2A get protocol apis. tasks GET /v1beta1/{name}/a2a/{a2aEndpoint} Get request for reasoning engine instance via the A2A get protocol apis.

### "Generative AI glossary \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Agent Engine handles the infrastructure to scale agents in production so you can focus on creating applications.
- Vertex AI Agent Engine Vertex AI Agent Engine, a part of the Vertex AI Platform, is a set of services that enables developers to deploy, manage, and scale AI agents in production.
- LLM agents can be used to generate text, translate languages, and answer questions.
- Agents can be used in various applications, such as natural language processing, machine learning, and robotics.

### "Deploy and inference Gemma using Model Garden and Vertex AI GPU-backed endpoints\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/model-garden/deploy-and-inference-tutorial)
- Source ID: `site-docs-root`
- Final score: 117
- Re-rank relevance: N/A

Evidence snippets:
- The aiplatform Go client library Go support for Protocol Buffers Google API Extensions for Go (gax-go) go get cloud.google.com/go/aiplatform go get google.golang.org/protobuf go get github.com/googleapis/gax-go/v2 Deploy Gemma using Model Garden You can deploy the Gemma 3 1B by using its model card in the Google Cloud console or programmatically.
- QUERY PARAMETERS " Select-Object -Expand Content You receive a JSON response similar to the following. { "publisherModels": [ { "name": "publishers/google/models/gemma3", "versionId": "gemma-3-1b-it", "openSourceCategory": "GOOGLE OWNED OSS WITH GOOGLE CHECKPOINT", "supportedActions": { "openNotebook": { "references": { "us-central1": { "uri": "https://colab.research.google.com/github/GoogleCloudPlatform/vertex-ai-samples/blob/main/notebooks/community/model garden/model garden gradio streaming chat completions.ipynb" } }, "resourceTitle": "Notebook", "resourceUseCase": "Chat Completion Playground", "resourceDescription": "Chat with deployed Gemma 2 endpoints via Gradio UI." }, "deploy": { "modelDisplayName": "gemma-3-1b-it", "containerSpec": { "imageUri": "us-docker.pkg.dev/vertex-ai/vertex-vision-model-garden-dockers/pytorch-vllm-serve:20250312 0916 RC01", "args": [ "python", "-m", "vllm.entrypoints.api server", "--host=0.0.0.0", "--port=8080", "--model=gs://vertex-model-garden-restricted-us/gemma3/gemma-3-1b-it", "--tensor-parallel-size=1", "--swap-space=16", "--gpu-memory-utilization=0.95", "--disable-log-stats" ], "env": [ { "name": "MODEL ID", "value": "google/gemma-3-1b-it" }, { "name": "DEPLOY SOURCE", "value": "UI NATIVE MODEL" } ], "ports": [ { "containerPort": 8080 } ], "predictRoute": "/generate", "healthRoute": "/ping" }, "dedicatedResources": { "machineSpec": { "machineType": "g2-standard-12", "acceleratorType": "NVIDIA L4", "acceleratorCount": 1 } }, "publicArtifactUri": "gs://vertex-model-garden-restricted-us/gemma3/gemma3.tar.gz", "deployTaskName": "vLLM 128K context", "deployMetadata": { "sampleRequest": "{\n \"instances\": [\n {\n \"@requestFormat\": \"chatCompletions\",\n \"messages\": [\n {\n \"role\": \"user\",\n \"content\": \"What is machine learning?\"\n }\n ],\n \"max tokens\": 100\n }\n ]\n}\n" } }, ...
- Builder instanceValue = Value . newBuilder (); JsonFormat . parser (). merge ( instance , instanceValue ); // Encapsulate the prompt in a correct format for GPUs // Example format: [{'inputs': 'Why is the sky blue?', 'parameters': {'temperature': 0.8}}] List<Value> instances = new ArrayList <> (); instances . add ( instanceValue . build ()); EndpointName endpointName = EndpointName . of ( projectId , region , endpointId ); PredictResponse predictResponse = this . predictionServiceClient . predict ( endpointName , instances , parameters ); String textResponse = predictResponse . getPredictions ( 0 ). getStringValue (); System . out . println ( textResponse ); return textResponse ; } private static Value mapToValue ( Map<String , Object > map ) throws InvalidProtocolBufferException { Gson gson = new Gson (); String json = gson . toJson ( map ); Value .
- To check the deployment status, you can try one of the following methods: 1) Look for endpoint ENDPOINT DISPLAY NAME at the [Vertex AI] -> [Online prediction] tab in Cloud Console 2) Use gcloud ai operations describe OPERATION ID --region= LOCATION to find the status of the deployment long-running operation To see details about your deployment, run the gcloud ai endpoints list --list-model-garden-endpoints-only command: gcloud ai endpoints list --list-model-garden-endpoints-only \ --region = LOCATION ID Replace LOCATION ID with the region where you deployed the model.

### "Grounding with Parallel Web Search \_|\_ Generative AI on Vertex AI \_|\_\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-parallel](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-parallel)
- Source ID: `site-docs-root`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Vertical agents (sales agents, coding agents, finance agents) getting the latest up-to-date context from the web.
- Automated agents that run autonomously to perform automated tasks, like news analysis and KYC checks.
- The winner of Super Bowl LIX was the Philadelphia Eagles , who defeated the Kansas City Chiefs with a score of 40-22." } ] }, "finishReason": "STOP", "groundingMetadata": { "webSearchQueries": [ "who won the last super bowl" ], "groundingChunks": [ { "web": { "uri": "https://...", "title": "Super Bowl LIX", "domain": "domain.com" } }, { "web": { "uri": "https://...", "title": "Super Bowl LIX Results", "domain": "domain.com" } } ], "groundingSupports": [ { "segment": { "endIndex": 77, "text": "The most recent Super Bowl was Super Bowl LIX (59), which was played in 2025." }, "groundingChunkIndices": [ 0, 1 ] }, { "segment": { "startIndex": 78, "endIndex": 198, "text": "The winner of Super Bowl LIX was the Philadelphia Eagles , who defeated the Kansas City Chiefs with a score of 40-22." }, "groundingChunkIndices": [ 0 ] }, ] } } ], "usageMetadata": { "promptTokenCount": 33, "candidatesTokenCount": 106, "totalTokenCount": 284, "billablePromptUsage": { "textCount": 142 }, "trafficType": "ON DEMAND", "promptTokensDetails": [ { "modality": "TEXT", "tokenCount": 33 } ], "candidatesTokensDetails": [ { "modality": "TEXT", "tokenCount": 106 } ], "toolUsePromptTokensDetails": [ { "modality": "TEXT", "tokenCount": 39 } ], "toolUsePromptTokenCount": 39, "thoughtsTokenCount": 106 }, "modelVersion": " MODEL VERSION ", "createTime": " CREATE TIME ", "responseId": " RESPONSE ID " } Quota The default quota is 60 prompts per minute.
- Multi-hop agents that require deeper web searches for more complex questions.

