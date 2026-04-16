---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.685Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Vertex AI Studio support for Gemini Live API"
feature_slug: "vertex-ai-studio-support-for-gemini-live-api"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/vertex-ai-express-mode-api-quickstart"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/vertex-ai-studio-express-mode-quickstart"
keywords:
  - "vertex"
  - "ai"
  - "studio"
  - "for"
  - "gemini"
  - "live"
  - "api"
  - "gained"
---

# Vertex AI Studio support for Gemini Live API

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Studio gained updated UI support for Gemini Live API.

## Extended Definition

Vertex AI Studio gained updated UI support for Gemini Live API.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/vertex-ai-express-mode-api-quickstart](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/vertex-ai-express-mode-api-quickstart)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/vertex-ai-studio-express-mode-quickstart](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/vertex-ai-studio-express-mode-quickstart)

## Supporting Pages

### "Tutorial: Vertex AI API in express mode \_|\_ Generative AI on Vertex AI\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/vertex-ai-express-mode-api-quickstart](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/vertex-ai-express-mode-api-quickstart)
- Source ID: `site-docs-root`
- Final score: 313
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Client ( vertexai = True , api key = API KEY ) Send a request to the Gemini for Google Cloud API You can send either streaming or non-streaming requests to the Gemini for Google Cloud API.
- For details on getting an API key, see Vertex AI in express mode overview . from google import genai from google.genai import types Developer TODO: Replace YOUR API KEY with your API key.
- This tutorial shows you how to perform the following tasks by using the Vertex AI API in express mode: Install and initialize the Google Gen AI SDK for express mode.
- What's next Try the Vertex AI Studio tutorial for Vertex AI in express mode.

### "Grounding with Vertex AI Search \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search)
- Source ID: `site-docs-root`
- Final score: 277
- Re-rank relevance: N/A

Evidence snippets:
- Client ( http options = HttpOptions ( api version = "v1" )) Replace with your Vertex AI Search data store details DATASTORE PATH = "projects/ PROJECT ID /locations/global/collections/default collection/dataStores/DATASTORE ID" tool = Tool ( retrieval = Retrieval ( vertex ai search = VertexAISearch ( datastore = DATASTORE PATH ) ) ) response = client . models . generate content ( model = "gemini-2.5-flash" , # Or another supported model contents = "What information can you find about topic X in the provided documents?" , # Your query config = GenerateContentConfig ( tools = [ tool ], ), ) print ( response . text ) REST To test a text prompt by using the Vertex AI API, send a POST request to the publisher model endpoint.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent" Select-Object -Expand Content You should receive a JSON response similar to the following: { "candidates": [ { "content": { "role": "model", "parts": [ { "text": "You can make an appointment on the website https://dmv.gov/" } ] }, "finishReason": "STOP", "safetyRatings": [ "..." ], "groundingMetadata": { "retrievalQueries": [ "How to make appointment to renew driving license?" ], "groundingChunks": [ { "retrievedContext": { "uri": "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AXiHM.....QTN92V5ePQ==", "title": "dmv" } } ], "groundingSupport": [ { "segment": { "startIndex": 25, "endIndex": 147 }, "segment text": "ipsum lorem ...", "supportChunkIndices": [1, 2], "confidenceScore": [0.9541752, 0.97726375] }, { "segment": { "startIndex": 294, "endIndex": 439 }, "segment text": "ipsum lorem ...", "supportChunkIndices": [1], "confidenceScore": [0.9541752, 0.9325467] } ] } } ], "usageMetadata": { "..." } } Understand your response The response from both APIs include the LLM-generated text, which is called a candidate .
- HTTP method and URL: POST https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent Request JSON body: { "contents": [{ "role": "user", "parts": [{ "text": " PROMPT " }] }], "tools": [{ "retrieval": { "vertexAiSearch": { "datastore": projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATASTORE ID } } }], "model": "projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID " } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent" PowerShell (Windows) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .

### "Grounding with Google Maps in Vertex AI \_|\_ Generative AI on Vertex AI\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps)
- Source ID: `site-docs-root`
- Final score: 274
- Re-rank relevance: N/A

Evidence snippets:
- The Routing tool supports the following: Modes of transportation : Routing for driving, walking, bicycling, transit, and two-wheeled motorized vehicles (not all travel modes are available in all countries) Multiple waypoints : Up to 13 intermediate stops between origin and destination Real-time traffic : Accounting for current traffic conditions to provide accurate "live" travel times rather than static averages The following are examples of the types of questions that the Routing tool supports: Proximity based on travel time : "What are some American restaurants within a 10-minute walk from the Hilton Hotel on 1335 6th Ave in NYC?" Commute estimation : "How long does it take to take public transit from Pike Place Market to Capitol Hill in Seattle?" Understand the response When a prompt triggers the Routing tool, the model generates a natural language answer backed by structured metadata.
- HTTP method and URL: POST https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent Request JSON body: { "contents": [{ "role": "user", "parts": [{ "text": " PROMPT " }] }], "tools": [{ "googleMaps": { "enableWidget": " ENABLE WIDGET " } }], "toolConfig": { "retrievalConfig": { "latLng": { "latitude": LATITUDE , "longitude": LONGITUDE }, "languageCode": "en US" } }, "model": "projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID " } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent" Select-Object -Expand Content You should receive a JSON response similar to the following: { "candidates": [ { "content": { "role": "model", "parts": [ { "text": "\"The Italian Place\" in Alexandria, VA, is good for children and offers takeout.
- Save the request body in a file named request.json , and execute the following command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent" PowerShell (Windows) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .

### "Tutorial: Vertex AI Studio in express mode \_|\_ Generative AI on Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/vertex-ai-studio-express-mode-quickstart](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/vertex-ai-studio-express-mode-quickstart)
- Source ID: `site-docs-root`
- Final score: 274
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A response like the following is returned in the Response box: the best dreams HAPPEN when you are awake Design a chatbot and get the code To design a chatbot in Vertex AI Studio and get the code for it, do the following: In the Vertex AI section of the Google Cloud console, go to the Vertex AI Studio page.
- This quickstart shows you how to perform the following tasks in Vertex AI Studio in express mode: View and try a list of sample prompts.
- What's next Try the API tutorial for Vertex AI in express mode.
- See the complete API reference for Vertex AI in express mode.

