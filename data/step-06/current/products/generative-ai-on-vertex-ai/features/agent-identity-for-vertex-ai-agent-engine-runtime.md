---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.654Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Agent identity for Vertex AI Agent Engine Runtime"
feature_slug: "agent-identity-for-vertex-ai-agent-engine-runtime"
latest_feature_date: "2025-11-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/deploy-vais-prompt"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search"
keywords:
  - "agent"
  - "identity"
  - "for"
  - "vertex"
  - "ai"
  - "engine"
  - "runtime"
  - "you"
---

# Agent identity for Vertex AI Agent Engine Runtime

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

You can use IAM to create an agent identity for access and authentication when using agents on Vertex AI Agent Engine Runtime.

## Extended Definition

You can use IAM to create an agent identity for access and authentication when using agents on Vertex AI Agent Engine Runtime.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/deploy-vais-prompt](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/deploy-vais-prompt)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search)

## Supporting Pages

### "Generative AI glossary \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- Source ID: `site-docs-root`
- Final score: 316
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Vertex AI Agent Engine Vertex AI Agent Engine, a part of the Vertex AI Platform, is a set of services that enables developers to deploy, manage, and scale AI agents in production.
- For more information, see Vertex AI Agent Engine overview .
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI Guides Send feedback Generative AI glossary Stay organized with collections Save and categorize content based on your preferences. agent In the context of generative AI, an agent is software that autonomously plans and executes a series of actions in pursuit of a goal, potentially in novel situations.
- Vertex AI offers a suite of APIs to help you build your own Retrieval Augmented Generation (RAG) applications or to build your own Search engine.

### "Vertex AI GenAI API \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 280
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v1beta1.projects.locations Methods askContexts POST /v1beta1/{parent}:askContexts Agentic Retrieval Ask API for RAG. asyncRetrieveContexts POST /v1beta1/{parent}:asyncRetrieveContexts Asynchronous API to retrieves relevant contexts for a query. augmentPrompt POST /v1beta1/{parent}:augmentPrompt Given an input prompt, it returns augmented prompt from vertex rag store to guide LLM towards generating grounded responses. corroborateContent POST /v1beta1/{parent}:corroborateContent Given an input text, it returns a score that evaluates the factuality of the text. evaluateDataset POST /v1beta1/{location}:evaluateDataset Evaluates a dataset based on a set of given metrics. evaluateInstances POST /v1beta1/{location}:evaluateInstances Evaluates instances based on a given metric. generateInstanceRubrics POST /v1beta1/{location}:generateInstanceRubrics Generates rubrics for a given prompt. generateSyntheticData POST /v1beta1/{location}:generateSyntheticData Generates synthetic (artificial) data based on a description getRagEngineConfig GET /v1beta1/{name} Gets a RagEngineConfig. retrieveContexts POST /v1beta1/{parent}:retrieveContexts Retrieves relevant contexts for a query. updateRagEngineConfig PATCH /v1beta1/{ragEngineConfig.name} Updates a RagEngineConfig.
- REST Resource: v1.projects.locations Methods askContexts POST /v1/{parent}:askContexts Agentic Retrieval Ask API for RAG. asyncRetrieveContexts POST /v1/{parent}:asyncRetrieveContexts Asynchronous API to retrieves relevant contexts for a query. augmentPrompt POST /v1/{parent}:augmentPrompt Given an input prompt, it returns augmented prompt from vertex rag store to guide LLM towards generating grounded responses. corroborateContent POST /v1/{parent}:corroborateContent Given an input text, it returns a score that evaluates the factuality of the text. evaluateDataset POST /v1/{location}:evaluateDataset Evaluates a dataset based on a set of given metrics. evaluateInstances POST /v1/{location}:evaluateInstances Evaluates instances based on a given metric. generateInstanceRubrics POST /v1/{location}:generateInstanceRubrics Generates rubrics for a given prompt. generateSyntheticData POST /v1/{location}:generateSyntheticData Generates synthetic (artificial) data based on a description getRagEngineConfig GET /v1/{name} Gets a RagEngineConfig. retrieveContexts POST /v1/{parent}:retrieveContexts Retrieves relevant contexts for a query. updateRagEngineConfig PATCH /v1/{ragEngineConfig.name} Updates a RagEngineConfig.
- REST Resource: v1beta1.projects.locations.cachedContents Methods create POST /v1beta1/{parent}/cachedContents Creates cached content, this call will initialize the cached content in the data storage, and users need to pay for the cache data storage. delete DELETE /v1beta1/{name} Deletes cached content get GET /v1beta1/{name} Gets cached content configurations list GET /v1beta1/{parent}/cachedContents Lists cached contents in a project patch PATCH /v1beta1/{cachedContent.name} Updates cached content configurations REST Resource: v1beta1.projects.locations.endpoints Methods computeTokens POST /v1beta1/{endpoint}:computeTokens Return a list of tokens based on the input text. countTokens POST /v1beta1/{endpoint}:countTokens Perform a token counting. fetchPredictOperation POST /v1beta1/{endpoint}:fetchPredictOperation Fetch an asynchronous online prediction operation. generateContent POST /v1beta1/{model}:generateContent Generate content with multimodal inputs. getIamPolicy POST /v1beta1/{resource}:getIamPolicy Gets the access control policy for a resource. predict POST /v1beta1/{endpoint}:predict Request message for running inference on Google's generative AI models on Vertex AI. predictLongRunning POST /v1beta1/{endpoint}:predictLongRunning rawPredict POST /v1beta1/{endpoint}:rawPredict Perform an online prediction with an arbitrary HTTP payload. serverStreamingPredict POST /v1beta1/{endpoint}:serverStreamingPredict Perform a server-side streaming online prediction request for Vertex LLM streaming. setIamPolicy POST /v1beta1/{resource}:setIamPolicy Sets the access control policy on the specified resource. streamGenerateContent POST /v1beta1/{model}:streamGenerateContent Generate content with multimodal inputs with streaming support. streamRawPredict POST /v1beta1/{endpoint}:streamRawPredict Perform a streaming online prediction with an arbitrary HTTP payload. testIamPermissions POST /v1beta1/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource.
- REST Resource: v1.projects.locations.cachedContents Methods create POST /v1/{parent}/cachedContents Creates cached content, this call will initialize the cached content in the data storage, and users need to pay for the cache data storage. delete DELETE /v1/{name} Deletes cached content get GET /v1/{name} Gets cached content configurations list GET /v1/{parent}/cachedContents Lists cached contents in a project patch PATCH /v1/{cachedContent.name} Updates cached content configurations REST Resource: v1.projects.locations.endpoints Methods computeTokens POST /v1/{endpoint}:computeTokens Return a list of tokens based on the input text. countTokens POST /v1/{endpoint}:countTokens Perform a token counting. fetchPredictOperation POST /v1/{endpoint}:fetchPredictOperation Fetch an asynchronous online prediction operation. generateContent POST /v1/{model}:generateContent Generate content with multimodal inputs. predict POST /v1/{endpoint}:predict Request message for running inference on Google's generative AI models on Vertex AI. predictLongRunning POST /v1/{endpoint}:predictLongRunning rawPredict POST /v1/{endpoint}:rawPredict Perform an online prediction with an arbitrary HTTP payload. serverStreamingPredict POST /v1/{endpoint}:serverStreamingPredict Perform a server-side streaming online prediction request for Vertex LLM streaming. streamGenerateContent POST /v1/{model}:streamGenerateContent Generate content with multimodal inputs with streaming support. streamRawPredict POST /v1/{endpoint}:streamRawPredict Perform a streaming online prediction with an arbitrary HTTP payload.

### "Quickstart: Deploy your Vertex AI Studio prompt as a web application \_\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/deploy-vais-prompt](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/deploy-vais-prompt)
- Source ID: `site-docs-root`
- Final score: 265
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required roles To get the permissions that you need to deploy a Vertex AI Studio prompt as a web application, ask your administrator to grant you the following IAM roles on your project: Vertex AI User ( roles/aiplatform.user ) Enable the required APIs: Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) Grant required roles to the Compute Engine default service account: Project IAM Admin ( roles/resourcemanager.projectIamAdmin ) Deploy a Cloud Run application: Cloud Run Admin ( roles/run.admin ) Cloud Run Source Developer ( roles/run.sourceDeveloper ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- In this quick start, you will: Create a prompt with prompt variables Deploy your prompt as a web application Monitor deployment progress and test the deployed application Update and re-deploy your prompt Test out prompt submission with multimodal supports Before you start If you have never used Vertex AI Studio before, you can follow another quickstart guide or take the Google Cloud Skills Boost course to learn the basics of Vertex AI Studio.
- Vertex AI Service Agent ( roles/aiplatform.serviceAgent ) Cloud Build Service Account ( roles/cloudbuild.builds.builder ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- If you open the web application from Vertex AI Studio, the key will be appended to the URL for you.

### "Grounding with Vertex AI Search \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search)
- Source ID: `site-docs-root`
- Final score: 258
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent" Select-Object -Expand Content You should receive a JSON response similar to the following: { "candidates": [ { "content": { "role": "model", "parts": [ { "text": "You can make an appointment on the website https://dmv.gov/" } ] }, "finishReason": "STOP", "safetyRatings": [ "..." ], "groundingMetadata": { "retrievalQueries": [ "How to make appointment to renew driving license?" ], "groundingChunks": [ { "retrievedContext": { "uri": "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AXiHM.....QTN92V5ePQ==", "title": "dmv" } } ], "groundingSupport": [ { "segment": { "startIndex": 25, "endIndex": 147 }, "segment text": "ipsum lorem ...", "supportChunkIndices": [1, 2], "confidenceScore": [0.9541752, 0.97726375] }, { "segment": { "startIndex": 294, "endIndex": 439 }, "segment text": "ipsum lorem ...", "supportChunkIndices": [1], "confidenceScore": [0.9541752, 0.9325467] } ] } } ], "usageMetadata": { "..." } } Understand your response The response from both APIs include the LLM-generated text, which is called a candidate .
- HTTP method and URL: POST https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent Request JSON body: { "contents": [{ "role": "user", "parts": [{ "text": " PROMPT " }] }], "tools": [{ "retrieval": { "vertexAiSearch": { "datastore": projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATASTORE ID } } }], "model": "projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID " } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Client ( http options = HttpOptions ( api version = "v1" )) Replace with your Vertex AI Search data store details DATASTORE PATH = "projects/ PROJECT ID /locations/global/collections/default collection/dataStores/DATASTORE ID" tool = Tool ( retrieval = Retrieval ( vertex ai search = VertexAISearch ( datastore = DATASTORE PATH ) ) ) response = client . models . generate content ( model = "gemini-2.5-flash" , # Or another supported model contents = "What information can you find about topic X in the provided documents?" , # Your query config = GenerateContentConfig ( tools = [ tool ], ), ) print ( response . text ) REST To test a text prompt by using the Vertex AI API, send a POST request to the publisher model endpoint.
- Set environment variables to use the Gen AI SDK with Vertex AI: Replace the GOOGLE CLOUD PROJECT and GOOGLE CLOUD LOCATION values with appropriate values for your project. export GOOGLE CLOUD PROJECT = GOOGLE CLOUD PROJECT export GOOGLE CLOUD LOCATION = global export GOOGLE GENAI USE VERTEXAI = True from google import genai from google.genai.types import ( GenerateContentConfig , VertexAISearch , Retrieval , Tool , HttpOptions , ) client = genai .

