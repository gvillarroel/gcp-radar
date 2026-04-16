---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.681Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Agent Development Kit integration"
feature_slug: "agent-development-kit-integration"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps"
keywords:
  - "agent"
  - "development"
  - "kit"
  - "integration"
  - "vertex"
  - "ai"
  - "engine"
  - "integrates"
---

# Agent Development Kit integration

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Agent Engine integrates with the Agent Development Kit.

## Extended Definition

Vertex AI Agent Engine integrates with the Agent Development Kit.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps)

## Supporting Pages

### "Generative AI glossary \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- Source ID: `site-docs-root`
- Final score: 225
- Re-rank relevance: N/A

Evidence snippets:
- Vertex AI Agent Engine Vertex AI Agent Engine, a part of the Vertex AI Platform, is a set of services that enables developers to deploy, manage, and scale AI agents in production.
- For more information, see Vertex AI Agent Engine overview .
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI Guides Send feedback Generative AI glossary Stay organized with collections Save and categorize content based on your preferences. agent In the context of generative AI, an agent is software that autonomously plans and executes a series of actions in pursuit of a goal, potentially in novel situations.
- Vertex AI offers a suite of APIs to help you build your own Retrieval Augmented Generation (RAG) applications or to build your own Search engine.

### "Vertex AI GenAI API \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 215
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v1beta1.projects.locations Methods askContexts POST /v1beta1/{parent}:askContexts Agentic Retrieval Ask API for RAG. asyncRetrieveContexts POST /v1beta1/{parent}:asyncRetrieveContexts Asynchronous API to retrieves relevant contexts for a query. augmentPrompt POST /v1beta1/{parent}:augmentPrompt Given an input prompt, it returns augmented prompt from vertex rag store to guide LLM towards generating grounded responses. corroborateContent POST /v1beta1/{parent}:corroborateContent Given an input text, it returns a score that evaluates the factuality of the text. evaluateDataset POST /v1beta1/{location}:evaluateDataset Evaluates a dataset based on a set of given metrics. evaluateInstances POST /v1beta1/{location}:evaluateInstances Evaluates instances based on a given metric. generateInstanceRubrics POST /v1beta1/{location}:generateInstanceRubrics Generates rubrics for a given prompt. generateSyntheticData POST /v1beta1/{location}:generateSyntheticData Generates synthetic (artificial) data based on a description getRagEngineConfig GET /v1beta1/{name} Gets a RagEngineConfig. retrieveContexts POST /v1beta1/{parent}:retrieveContexts Retrieves relevant contexts for a query. updateRagEngineConfig PATCH /v1beta1/{ragEngineConfig.name} Updates a RagEngineConfig.
- REST Resource: v1.projects.locations Methods askContexts POST /v1/{parent}:askContexts Agentic Retrieval Ask API for RAG. asyncRetrieveContexts POST /v1/{parent}:asyncRetrieveContexts Asynchronous API to retrieves relevant contexts for a query. augmentPrompt POST /v1/{parent}:augmentPrompt Given an input prompt, it returns augmented prompt from vertex rag store to guide LLM towards generating grounded responses. corroborateContent POST /v1/{parent}:corroborateContent Given an input text, it returns a score that evaluates the factuality of the text. evaluateDataset POST /v1/{location}:evaluateDataset Evaluates a dataset based on a set of given metrics. evaluateInstances POST /v1/{location}:evaluateInstances Evaluates instances based on a given metric. generateInstanceRubrics POST /v1/{location}:generateInstanceRubrics Generates rubrics for a given prompt. generateSyntheticData POST /v1/{location}:generateSyntheticData Generates synthetic (artificial) data based on a description getRagEngineConfig GET /v1/{name} Gets a RagEngineConfig. retrieveContexts POST /v1/{parent}:retrieveContexts Retrieves relevant contexts for a query. updateRagEngineConfig PATCH /v1/{ragEngineConfig.name} Updates a RagEngineConfig.
- REST Resource: v1beta1.projects.locations.cachedContents Methods create POST /v1beta1/{parent}/cachedContents Creates cached content, this call will initialize the cached content in the data storage, and users need to pay for the cache data storage. delete DELETE /v1beta1/{name} Deletes cached content get GET /v1beta1/{name} Gets cached content configurations list GET /v1beta1/{parent}/cachedContents Lists cached contents in a project patch PATCH /v1beta1/{cachedContent.name} Updates cached content configurations REST Resource: v1beta1.projects.locations.endpoints Methods computeTokens POST /v1beta1/{endpoint}:computeTokens Return a list of tokens based on the input text. countTokens POST /v1beta1/{endpoint}:countTokens Perform a token counting. fetchPredictOperation POST /v1beta1/{endpoint}:fetchPredictOperation Fetch an asynchronous online prediction operation. generateContent POST /v1beta1/{model}:generateContent Generate content with multimodal inputs. getIamPolicy POST /v1beta1/{resource}:getIamPolicy Gets the access control policy for a resource. predict POST /v1beta1/{endpoint}:predict Request message for running inference on Google's generative AI models on Vertex AI. predictLongRunning POST /v1beta1/{endpoint}:predictLongRunning rawPredict POST /v1beta1/{endpoint}:rawPredict Perform an online prediction with an arbitrary HTTP payload. serverStreamingPredict POST /v1beta1/{endpoint}:serverStreamingPredict Perform a server-side streaming online prediction request for Vertex LLM streaming. setIamPolicy POST /v1beta1/{resource}:setIamPolicy Sets the access control policy on the specified resource. streamGenerateContent POST /v1beta1/{model}:streamGenerateContent Generate content with multimodal inputs with streaming support. streamRawPredict POST /v1beta1/{endpoint}:streamRawPredict Perform a streaming online prediction with an arbitrary HTTP payload. testIamPermissions POST /v1beta1/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource.
- REST Resource: v1.projects.locations.cachedContents Methods create POST /v1/{parent}/cachedContents Creates cached content, this call will initialize the cached content in the data storage, and users need to pay for the cache data storage. delete DELETE /v1/{name} Deletes cached content get GET /v1/{name} Gets cached content configurations list GET /v1/{parent}/cachedContents Lists cached contents in a project patch PATCH /v1/{cachedContent.name} Updates cached content configurations REST Resource: v1.projects.locations.endpoints Methods computeTokens POST /v1/{endpoint}:computeTokens Return a list of tokens based on the input text. countTokens POST /v1/{endpoint}:countTokens Perform a token counting. fetchPredictOperation POST /v1/{endpoint}:fetchPredictOperation Fetch an asynchronous online prediction operation. generateContent POST /v1/{model}:generateContent Generate content with multimodal inputs. predict POST /v1/{endpoint}:predict Request message for running inference on Google's generative AI models on Vertex AI. predictLongRunning POST /v1/{endpoint}:predictLongRunning rawPredict POST /v1/{endpoint}:rawPredict Perform an online prediction with an arbitrary HTTP payload. serverStreamingPredict POST /v1/{endpoint}:serverStreamingPredict Perform a server-side streaming online prediction request for Vertex LLM streaming. streamGenerateContent POST /v1/{model}:streamGenerateContent Generate content with multimodal inputs with streaming support. streamRawPredict POST /v1/{endpoint}:streamRawPredict Perform a streaming online prediction with an arbitrary HTTP payload.

### "Grounding with Vertex AI Search \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- Go to IAM To get the permissions that you need to use grounding with Vertex AI Search, ask your administrator to grant you the following IAM roles: To read all Discovery Engine resources: Discovery Engine Viewer ( roles/discoveryengine.viewer ).
- Select a grounding source option from the following table: Grounding option Description Input Vertex AI RAG Engine Grounds using your data and do-it-yourself components.
- To read and write all Discovery Engine resources and to create a Vertex AI Search instance: Discovery Engine Editor ( roles/discoveryengine.editor ).
- Vertex AI Search Grounds using your data with a Google-managed search engine.

### "Grounding with Google Maps in Vertex AI \_|\_ Generative AI on Vertex AI\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- Set environment variables to use the Gen AI SDK with Vertex AI: Replace the GOOGLE CLOUD PROJECT and GOOGLE CLOUD LOCATION values with appropriate values for your project. export GOOGLE CLOUD PROJECT = GOOGLE CLOUD PROJECT export GOOGLE CLOUD LOCATION = global export GOOGLE GENAI USE VERTEXAI = True from google import genai from google.genai.types import ( GenerateContentConfig , GoogleMaps , HttpOptions , Tool , ) client = genai .
- The following metadata is also returned: source uri title ID When presenting results from Grounding with Google Maps with Vertex AI, you must specify the associated Google Maps sources, and inform your users of the following: The Google Maps sources must immediately follow the generated content that the sources support.
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI Guides Send feedback Grounding with Google Maps in Vertex AI Stay organized with collections Save and categorize content based on your preferences.
- This data gives you access to information on over 250 million places that can be used to ground your model's responses, enabling your AI applications and agents to provide local data and geospatial context.

