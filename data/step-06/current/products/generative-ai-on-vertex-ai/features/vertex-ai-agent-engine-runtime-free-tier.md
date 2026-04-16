---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.656Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Vertex AI Agent Engine Runtime free tier"
feature_slug: "vertex-ai-agent-engine-runtime-free-tier"
latest_feature_date: "2025-11-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search"
keywords:
  - "vertex"
  - "ai"
  - "agent"
  - "engine"
  - "runtime"
  - "free"
  - "tier"
  - "new"
---

# Vertex AI Agent Engine Runtime free tier

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

A new free tier is available for Vertex AI Agent Engine Runtime.

## Extended Definition

A new free tier is available for Vertex AI Agent Engine Runtime.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search)

## Supporting Pages

### "Generative AI glossary \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- Source ID: `site-docs-root`
- Final score: 264
- Re-rank relevance: N/A

Evidence snippets:
- Vertex AI Agent Engine Vertex AI Agent Engine, a part of the Vertex AI Platform, is a set of services that enables developers to deploy, manage, and scale AI agents in production.
- For more information, see Vertex AI Agent Engine overview .
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI Guides Send feedback Generative AI glossary Stay organized with collections Save and categorize content based on your preferences. agent In the context of generative AI, an agent is software that autonomously plans and executes a series of actions in pursuit of a goal, potentially in novel situations.
- Vertex AI offers a suite of APIs to help you build your own Retrieval Augmented Generation (RAG) applications or to build your own Search engine.

### "Vertex AI GenAI API \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 234
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v1beta1.projects.locations Methods askContexts POST /v1beta1/{parent}:askContexts Agentic Retrieval Ask API for RAG. asyncRetrieveContexts POST /v1beta1/{parent}:asyncRetrieveContexts Asynchronous API to retrieves relevant contexts for a query. augmentPrompt POST /v1beta1/{parent}:augmentPrompt Given an input prompt, it returns augmented prompt from vertex rag store to guide LLM towards generating grounded responses. corroborateContent POST /v1beta1/{parent}:corroborateContent Given an input text, it returns a score that evaluates the factuality of the text. evaluateDataset POST /v1beta1/{location}:evaluateDataset Evaluates a dataset based on a set of given metrics. evaluateInstances POST /v1beta1/{location}:evaluateInstances Evaluates instances based on a given metric. generateInstanceRubrics POST /v1beta1/{location}:generateInstanceRubrics Generates rubrics for a given prompt. generateSyntheticData POST /v1beta1/{location}:generateSyntheticData Generates synthetic (artificial) data based on a description getRagEngineConfig GET /v1beta1/{name} Gets a RagEngineConfig. retrieveContexts POST /v1beta1/{parent}:retrieveContexts Retrieves relevant contexts for a query. updateRagEngineConfig PATCH /v1beta1/{ragEngineConfig.name} Updates a RagEngineConfig.
- REST Resource: v1.projects.locations Methods askContexts POST /v1/{parent}:askContexts Agentic Retrieval Ask API for RAG. asyncRetrieveContexts POST /v1/{parent}:asyncRetrieveContexts Asynchronous API to retrieves relevant contexts for a query. augmentPrompt POST /v1/{parent}:augmentPrompt Given an input prompt, it returns augmented prompt from vertex rag store to guide LLM towards generating grounded responses. corroborateContent POST /v1/{parent}:corroborateContent Given an input text, it returns a score that evaluates the factuality of the text. evaluateDataset POST /v1/{location}:evaluateDataset Evaluates a dataset based on a set of given metrics. evaluateInstances POST /v1/{location}:evaluateInstances Evaluates instances based on a given metric. generateInstanceRubrics POST /v1/{location}:generateInstanceRubrics Generates rubrics for a given prompt. generateSyntheticData POST /v1/{location}:generateSyntheticData Generates synthetic (artificial) data based on a description getRagEngineConfig GET /v1/{name} Gets a RagEngineConfig. retrieveContexts POST /v1/{parent}:retrieveContexts Retrieves relevant contexts for a query. updateRagEngineConfig PATCH /v1/{ragEngineConfig.name} Updates a RagEngineConfig.
- REST Resource: v1beta1.projects.locations.reasoningEngines.sessions Methods appendEvent POST /v1beta1/{name}:appendEvent Appends an event to a given session. create POST /v1beta1/{parent}/sessions Creates a new Session . delete DELETE /v1beta1/{name} Deletes details of the specific Session . get GET /v1beta1/{name} Gets details of the specific Session . list GET /v1beta1/{parent}/sessions Lists Sessions in a given reasoning engine. patch PATCH /v1beta1/{session.name} Updates the specific Session .
- REST Resource: v1.projects.locations.reasoningEngines.sessions Methods appendEvent POST /v1/{name}:appendEvent Appends an event to a given session. create POST /v1/{parent}/sessions Creates a new Session . delete DELETE /v1/{name} Deletes details of the specific Session . get GET /v1/{name} Gets details of the specific Session . list GET /v1/{parent}/sessions Lists Sessions in a given reasoning engine. patch PATCH /v1/{session.name} Updates the specific Session .

### "Grounding with Google Maps in Vertex AI \_|\_ Generative AI on Vertex AI\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps)
- Source ID: `site-docs-root`
- Final score: 219
- Re-rank relevance: N/A

Evidence snippets:
- Set environment variables to use the Gen AI SDK with Vertex AI: Replace the GOOGLE CLOUD PROJECT and GOOGLE CLOUD LOCATION values with appropriate values for your project. export GOOGLE CLOUD PROJECT = GOOGLE CLOUD PROJECT export GOOGLE CLOUD LOCATION = global export GOOGLE GENAI USE VERTEXAI = True from google import genai from google.genai.types import ( GenerateContentConfig , GoogleMaps , HttpOptions , Tool , ) client = genai .
- Address Curbside pickup Debit card Distance Free parking lot Live music Menu for children Opening hours Payment options (such as cash or credit card ) Place answer Pet friendly Serves beer Serves vegetarian food Wheelchair accessible Wifi Place answers are a response from Grounding with Google Maps based on information derived from user reviews.
- The following metadata is also returned: source uri title ID When presenting results from Grounding with Google Maps with Vertex AI, you must specify the associated Google Maps sources, and inform your users of the following: The Google Maps sources must immediately follow the generated content that the sources support.
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI Guides Send feedback Grounding with Google Maps in Vertex AI Stay organized with collections Save and categorize content based on your preferences.

### "Grounding with Vertex AI Search \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search)
- Source ID: `site-docs-root`
- Final score: 219
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent" Select-Object -Expand Content You should receive a JSON response similar to the following: { "candidates": [ { "content": { "role": "model", "parts": [ { "text": "You can make an appointment on the website https://dmv.gov/" } ] }, "finishReason": "STOP", "safetyRatings": [ "..." ], "groundingMetadata": { "retrievalQueries": [ "How to make appointment to renew driving license?" ], "groundingChunks": [ { "retrievedContext": { "uri": "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AXiHM.....QTN92V5ePQ==", "title": "dmv" } } ], "groundingSupport": [ { "segment": { "startIndex": 25, "endIndex": 147 }, "segment text": "ipsum lorem ...", "supportChunkIndices": [1, 2], "confidenceScore": [0.9541752, 0.97726375] }, { "segment": { "startIndex": 294, "endIndex": 439 }, "segment text": "ipsum lorem ...", "supportChunkIndices": [1], "confidenceScore": [0.9541752, 0.9325467] } ] } } ], "usageMetadata": { "..." } } Understand your response The response from both APIs include the LLM-generated text, which is called a candidate .
- Go to IAM To get the permissions that you need to use grounding with Vertex AI Search, ask your administrator to grant you the following IAM roles: To read all Discovery Engine resources: Discovery Engine Viewer ( roles/discoveryengine.viewer ).
- Select a grounding source option from the following table: Grounding option Description Input Vertex AI RAG Engine Grounds using your data and do-it-yourself components.
- To read and write all Discovery Engine resources and to create a Vertex AI Search instance: Discovery Engine Editor ( roles/discoveryengine.editor ).

