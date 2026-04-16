---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.709Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Local token counting with Vertex AI Gemini API SDK"
feature_slug: "local-token-counting-with-vertex-ai-gemini-api-sdk"
latest_feature_date: "2024-10-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/vertex-ai-express-mode-api-quickstart"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search"
keywords:
  - "local"
  - "token"
  - "counting"
  - "with"
  - "vertex"
  - "ai"
  - "gemini"
  - "api"
---

# Local token counting with Vertex AI Gemini API SDK

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

The Vertex AI Gemini API SDK supports local tokenization for counting tokens across supported Gemini models.

## Extended Definition

The Vertex AI Gemini API SDK supports local tokenization for counting tokens across supported Gemini models.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/vertex-ai-express-mode-api-quickstart](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/vertex-ai-express-mode-api-quickstart)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search)

## Supporting Pages

### "Grounding with Google Maps in Vertex AI \_|\_ Generative AI on Vertex AI\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps)
- Source ID: `site-docs-root`
- Final score: 336
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Routing tool supports the following: Modes of transportation : Routing for driving, walking, bicycling, transit, and two-wheeled motorized vehicles (not all travel modes are available in all countries) Multiple waypoints : Up to 13 intermediate stops between origin and destination Real-time traffic : Accounting for current traffic conditions to provide accurate "live" travel times rather than static averages The following are examples of the types of questions that the Routing tool supports: Proximity based on travel time : "What are some American restaurants within a 10-minute walk from the Hilton Hotel on 1335 6th Ave in NYC?" Commute estimation : "How long does it take to take public transit from Pike Place Market to Capitol Hill in Seattle?" Understand the response When a prompt triggers the Routing tool, the model generates a natural language answer backed by structured metadata.
- Save the request body in a file named request.json , and execute the following command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent" PowerShell (Windows) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- The contextual widget is rendered using the context token, googleMapsWidgetContextToken , which is returned in the Vertex AI API response and can be used to render visual content.
- Overview Grounding with Google Maps with Vertex AI is a service that connects Gemini models with geospatial data from Google Maps.

### "Tutorial: Vertex AI API in express mode \_|\_ Generative AI on Vertex AI\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/vertex-ai-express-mode-api-quickstart](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/vertex-ai-express-mode-api-quickstart)
- Source ID: `site-docs-root`
- Final score: 305
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To see an example of Vertex AI in Express Mode, run the "Getting started with Gemini using Vertex AI in Express Mode" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub Vertex AI in express mode lets you quickly try out core generative AI features that are available on Vertex AI.
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI Guides Send feedback Tutorial: Vertex AI API in express mode Stay organized with collections Save and categorize content based on your preferences.
- Client ( vertexai = True , api key = API KEY ) Send a request to the Gemini for Google Cloud API You can send either streaming or non-streaming requests to the Gemini for Google Cloud API.
- For details on getting an API key, see Vertex AI in express mode overview . from google import genai from google.genai import types Developer TODO: Replace YOUR API KEY with your API key.

### "Vertex AI GenAI API \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 304
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Resource: v1beta1.projects.locations.cachedContents Methods create POST /v1beta1/{parent}/cachedContents Creates cached content, this call will initialize the cached content in the data storage, and users need to pay for the cache data storage. delete DELETE /v1beta1/{name} Deletes cached content get GET /v1beta1/{name} Gets cached content configurations list GET /v1beta1/{parent}/cachedContents Lists cached contents in a project patch PATCH /v1beta1/{cachedContent.name} Updates cached content configurations REST Resource: v1beta1.projects.locations.endpoints Methods computeTokens POST /v1beta1/{endpoint}:computeTokens Return a list of tokens based on the input text. countTokens POST /v1beta1/{endpoint}:countTokens Perform a token counting. fetchPredictOperation POST /v1beta1/{endpoint}:fetchPredictOperation Fetch an asynchronous online prediction operation. generateContent POST /v1beta1/{model}:generateContent Generate content with multimodal inputs. getIamPolicy POST /v1beta1/{resource}:getIamPolicy Gets the access control policy for a resource. predict POST /v1beta1/{endpoint}:predict Request message for running inference on Google's generative AI models on Vertex AI. predictLongRunning POST /v1beta1/{endpoint}:predictLongRunning rawPredict POST /v1beta1/{endpoint}:rawPredict Perform an online prediction with an arbitrary HTTP payload. serverStreamingPredict POST /v1beta1/{endpoint}:serverStreamingPredict Perform a server-side streaming online prediction request for Vertex LLM streaming. setIamPolicy POST /v1beta1/{resource}:setIamPolicy Sets the access control policy on the specified resource. streamGenerateContent POST /v1beta1/{model}:streamGenerateContent Generate content with multimodal inputs with streaming support. streamRawPredict POST /v1beta1/{endpoint}:streamRawPredict Perform a streaming online prediction with an arbitrary HTTP payload. testIamPermissions POST /v1beta1/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource.
- REST Resource: v1.projects.locations.cachedContents Methods create POST /v1/{parent}/cachedContents Creates cached content, this call will initialize the cached content in the data storage, and users need to pay for the cache data storage. delete DELETE /v1/{name} Deletes cached content get GET /v1/{name} Gets cached content configurations list GET /v1/{parent}/cachedContents Lists cached contents in a project patch PATCH /v1/{cachedContent.name} Updates cached content configurations REST Resource: v1.projects.locations.endpoints Methods computeTokens POST /v1/{endpoint}:computeTokens Return a list of tokens based on the input text. countTokens POST /v1/{endpoint}:countTokens Perform a token counting. fetchPredictOperation POST /v1/{endpoint}:fetchPredictOperation Fetch an asynchronous online prediction operation. generateContent POST /v1/{model}:generateContent Generate content with multimodal inputs. predict POST /v1/{endpoint}:predict Request message for running inference on Google's generative AI models on Vertex AI. predictLongRunning POST /v1/{endpoint}:predictLongRunning rawPredict POST /v1/{endpoint}:rawPredict Perform an online prediction with an arbitrary HTTP payload. serverStreamingPredict POST /v1/{endpoint}:serverStreamingPredict Perform a server-side streaming online prediction request for Vertex LLM streaming. streamGenerateContent POST /v1/{model}:streamGenerateContent Generate content with multimodal inputs with streaming support. streamRawPredict POST /v1/{endpoint}:streamRawPredict Perform a streaming online prediction with an arbitrary HTTP payload.
- REST Resource: v1beta1.projects.locations.publishers.models Methods computeTokens POST /v1beta1/{endpoint}:computeTokens Return a list of tokens based on the input text. countTokens POST /v1beta1/{endpoint}:countTokens Perform a token counting. embedContent POST /v1beta1/{model}:embedContent Embed content with multimodal inputs. fetchPredictOperation POST /v1beta1/{endpoint}:fetchPredictOperation Fetch an asynchronous online prediction operation. generateContent POST /v1beta1/{model}:generateContent Generate content with multimodal inputs. getIamPolicy POST /v1beta1/{resource}:getIamPolicy Gets the access control policy for a resource. predict POST /v1beta1/{endpoint}:predict Request message for running inference on Google's generative AI models on Vertex AI. predictLongRunning POST /v1beta1/{endpoint}:predictLongRunning rawPredict POST /v1beta1/{endpoint}:rawPredict Perform an online prediction with an arbitrary HTTP payload. serverStreamingPredict POST /v1beta1/{endpoint}:serverStreamingPredict Perform a server-side streaming online prediction request for Vertex LLM streaming. streamGenerateContent POST /v1beta1/{model}:streamGenerateContent Generate content with multimodal inputs with streaming support. streamRawPredict POST /v1beta1/{endpoint}:streamRawPredict Perform a streaming online prediction with an arbitrary HTTP payload.
- REST Resource: v1.projects.locations.publishers.models Methods computeTokens POST /v1/{endpoint}:computeTokens Return a list of tokens based on the input text. countTokens POST /v1/{endpoint}:countTokens Perform a token counting. embedContent POST /v1/{model}:embedContent Embed content with multimodal inputs. fetchPredictOperation POST /v1/{endpoint}:fetchPredictOperation Fetch an asynchronous online prediction operation. generateContent POST /v1/{model}:generateContent Generate content with multimodal inputs. predict POST /v1/{endpoint}:predict Request message for running inference on Google's generative AI models on Vertex AI. predictLongRunning POST /v1/{endpoint}:predictLongRunning rawPredict POST /v1/{endpoint}:rawPredict Perform an online prediction with an arbitrary HTTP payload. serverStreamingPredict POST /v1/{endpoint}:serverStreamingPredict Perform a server-side streaming online prediction request for Vertex LLM streaming. streamGenerateContent POST /v1/{model}:streamGenerateContent Generate content with multimodal inputs with streaming support. streamRawPredict POST /v1/{endpoint}:streamRawPredict Perform a streaming online prediction with an arbitrary HTTP payload.

### "Grounding with Vertex AI Search \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search)
- Source ID: `site-docs-root`
- Final score: 295
- Re-rank relevance: N/A

Evidence snippets:
- Client ( http options = HttpOptions ( api version = "v1" )) Replace with your Vertex AI Search data store details DATASTORE PATH = "projects/ PROJECT ID /locations/global/collections/default collection/dataStores/DATASTORE ID" tool = Tool ( retrieval = Retrieval ( vertex ai search = VertexAISearch ( datastore = DATASTORE PATH ) ) ) response = client . models . generate content ( model = "gemini-2.5-flash" , # Or another supported model contents = "What information can you find about topic X in the provided documents?" , # Your query config = GenerateContentConfig ( tools = [ tool ], ), ) print ( response . text ) REST To test a text prompt by using the Vertex AI API, send a POST request to the publisher model endpoint.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent" Select-Object -Expand Content You should receive a JSON response similar to the following: { "candidates": [ { "content": { "role": "model", "parts": [ { "text": "You can make an appointment on the website https://dmv.gov/" } ] }, "finishReason": "STOP", "safetyRatings": [ "..." ], "groundingMetadata": { "retrievalQueries": [ "How to make appointment to renew driving license?" ], "groundingChunks": [ { "retrievedContext": { "uri": "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AXiHM.....QTN92V5ePQ==", "title": "dmv" } } ], "groundingSupport": [ { "segment": { "startIndex": 25, "endIndex": 147 }, "segment text": "ipsum lorem ...", "supportChunkIndices": [1, 2], "confidenceScore": [0.9541752, 0.97726375] }, { "segment": { "startIndex": 294, "endIndex": 439 }, "segment text": "ipsum lorem ...", "supportChunkIndices": [1], "confidenceScore": [0.9541752, 0.9325467] } ] } } ], "usageMetadata": { "..." } } Understand your response The response from both APIs include the LLM-generated text, which is called a candidate .
- HTTP method and URL: POST https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent Request JSON body: { "contents": [{ "role": "user", "parts": [{ "text": " PROMPT " }] }], "tools": [{ "retrieval": { "vertexAiSearch": { "datastore": projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATASTORE ID } } }], "model": "projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID " } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent" PowerShell (Windows) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .

