---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.711Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Dynamic retrieval for grounding with Google Search"
feature_slug: "dynamic-retrieval-for-grounding-with-google-search"
latest_feature_date: "2024-10-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-your-search-api"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-elasticsearch"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-search"
keywords:
  - "dynamic"
  - "retrieval"
  - "for"
  - "grounding"
  - "with"
  - "search"
  - "lets"
  - "supported"
---

# Dynamic retrieval for grounding with Google Search

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Dynamic retrieval lets supported models turn grounding with Google Search on or off based on the prompt.

## Extended Definition

Dynamic retrieval lets supported models turn grounding with Google Search on or off based on the prompt.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-your-search-api](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-your-search-api)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-elasticsearch](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-elasticsearch)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-search](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-search)

## Supporting Pages

### "Grounding with your search API \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-your-search-api](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-your-search-api)
- Source ID: `site-docs-root`
- Final score: 277
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Client ( http options = HttpOptions ( api version = "v1" )) Replace with your API details EXTERNAL API ENDPOINT = "YOUR EXTERNAL API ENDPOINT" # e.g., https://YOUR GATEWAY HOSTNAME/v0/search EXTERNAL API KEY = "YOUR EXTERNAL API KEY" tool = Tool ( retrieval = Retrieval ( external api = ExternalApi ( api spec = "SIMPLE SEARCH" , endpoint = EXTERNAL API ENDPOINT , api auth = { "apiKeyConfig" : { "apiKeyString" : EXTERNAL API KEY } } ) ) ) response = client . models . generate content ( model = "gemini-2.5-flash" , # Or another supported model contents = "What can you tell me about product Y based on my API?" , # Your query config = GenerateContentConfig ( tools = [ tool ], ), ) print ( response . text ) REST Before using any of the request data, make the following replacements: LOCATION : The region to process the request.
- You'll need to replace the data retrieval logic with calls to your actual search system. main.py import functions framework import json from flask import jsonify @functions framework . http def custom search wrapper ( request ): """ HTTP Cloud Function to provide a minimal, fixed response for Gemini grounding. """ if request . method != 'POST' : return 'Only POST requests are accepted' , 405 request json = request . get json ( silent = True ) if not request json or 'query' not in request json : return jsonify ({ "error" : "Invalid request.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud au t h pri nt - access - t oke n $headers = @ { "Authorization" = "Bearer $cred" } I n voke - WebReques t - Me t hod POST - Headers $headers - Co ntent Type : "application/json; charset=utf-8" - I n File reques t .jso n ` - Uri "https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent" Selec t - Objec t -E xpa n d Co ntent You should receive a JSON response similar to the following: { "candidates" : [ { "content" : { "role" : "model" , "parts" : [ { "text" : "You can make an appointment on the website https://dmv.gov/" } ] }, "finishReason" : "STOP" , "safetyRatings" : [ "..." ], "groundingMetadata" : { "retrievalQueries" : [ "How to make appointment to renew driving license?" ], "groundingChunks" : [ { "retrievedContext" : { "uri" : "https://..." , "snippet" : "Snippet text about driving license renewal" } } ], "groundingSupport" : [ { "segment" : { "startIndex" : 25 , "endIndex" : 147 }, "segment text" : "ipsum lorem ..." , "supportChunkIndices" : [ 1 , 2 ], "confidenceScore" : [ 0.9541752 , 0.97726375 ] }, { "segment" : { "startIndex" : 294 , "endIndex" : 439 }, "segment text" : "ipsum lorem ..." , "supportChunkIndices" : [ 1 ], "confidenceScore" : [ 0.9541752 , 0.9325467 ] } ] } } ], "usageMetadata" : { "..." } } Set up a search API endpoint If you don't have an existing API endpoint that meets the requirements, this section guides you through setting one up using Cloud Functions and API Gateway.
- It specifies that the gateway expects a POST request to the /v0/search path and requires an API key sent as a query parameter named key . swagger: '2.0' info: title: Custom Search API for Gemini Grounding description: Wraps an internal search function , secured by API Key for Gemini. version: 1 .0.0 schemes: - https produces: - application/json consumes: - application/json paths: /v0/search: # TODO: This will be part of API endpoint URL change if necessary post: summary: Custom search endpoint for Gemini operationId: customSearchForGemini # TODO: Change if needed x-google-backend: address: YOUR CLOUD FUNCTION TRIGGER URL # TODO: Replace with your Cloud Function trigger URL parameters: - name: body in : body required: true schema: type: object properties: query: type: string security: - api key query: [] responses: '200' : description: Search results schema: type: array items: type: object properties: snippet: type: string uri: type: string '400' : description: Invalid request '401' : description: Unauthorized ( Missing or invalid API key ) '500' : description: Internal server error securityDefinitions: api key query: type: apiKey name: key # Gemini will send its API key using this query parameter name in : query Important: Replace YOUR CLOUD FUNCTION TRIGGER URL with the trigger URL that you noted when deploying your Cloud Functions.

### "Grounding with Elasticsearch \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-elasticsearch](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-elasticsearch)
- Source ID: `site-docs-root`
- Final score: 260
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Client ( http options = HttpOptions ( api version = "v1" )) Replace with your Elasticsearch details ELASTIC SEARCH ENDPOINT = "YOUR ELASTICSEARCH ENDPOINT" ELASTIC SEARCH API KEY = "YOUR ELASTICSEARCH API KEY" INDEX NAME = "YOUR INDEX NAME" SEARCH TEMPLATE NAME = "YOUR SEARCH TEMPLATE NAME" NUM HITS = 5 tool = Tool ( retrieval = Retrieval ( external api = Elasticsearch ( api spec = "ELASTIC SEARCH" , endpoint = ELASTIC SEARCH ENDPOINT , api auth = { "apiKeyConfig" : { "apiKeyString" : f "ApiKey { ELASTIC SEARCH API KEY } " } }, elastic search params = { "index" : INDEX NAME , "searchTemplate" : SEARCH TEMPLATE NAME , "numHits" : NUM HITS , }, ) ) ) response = client . models . generate content ( model = "gemini-2.5-flash" , # Or another supported model contents = "What are the main features of product X?" , # Your query config = GenerateContentConfig ( tools = [ tool ], ), ) print ( response . text ) REST To send a text prompt and ground it with Elasticsearch, send a POST request to the Vertex AI API.
- Set environment variables to use the Gen AI SDK with Vertex AI: Replace the GOOGLE CLOUD PROJECT and GOOGLE CLOUD LOCATION values with appropriate values for your project. export GOOGLE CLOUD PROJECT = GOOGLE CLOUD PROJECT export GOOGLE CLOUD LOCATION = global export GOOGLE GENAI USE VERTEXAI = True from google import genai from google.genai.types import ( GenerateContentConfig , Elasticsearch , Retrieval , Tool , HttpOptions , ) client = genai .
- Supported models The following models support grounding with Elasticsearch with text input only: Set up a search template in Elasticsearch This section explains how you can use your Elasticsearch instance to ground on your data stored in the instance.
- You can combine grounding with Elasticsearch with Grounding with Google Search to connect the model with world knowledge, a wide possible range of topics, or up-to-date information on the internet.

### "Grounding with Vertex AI Search \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search)
- Source ID: `site-docs-root`
- Final score: 252
- Re-rank relevance: N/A

Evidence snippets:
- Client ( http options = HttpOptions ( api version = "v1" )) Replace with your Vertex AI Search data store details DATASTORE PATH = "projects/ PROJECT ID /locations/global/collections/default collection/dataStores/DATASTORE ID" tool = Tool ( retrieval = Retrieval ( vertex ai search = VertexAISearch ( datastore = DATASTORE PATH ) ) ) response = client . models . generate content ( model = "gemini-2.5-flash" , # Or another supported model contents = "What information can you find about topic X in the provided documents?" , # Your query config = GenerateContentConfig ( tools = [ tool ], ), ) print ( response . text ) REST To test a text prompt by using the Vertex AI API, send a POST request to the publisher model endpoint.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent" Select-Object -Expand Content You should receive a JSON response similar to the following: { "candidates": [ { "content": { "role": "model", "parts": [ { "text": "You can make an appointment on the website https://dmv.gov/" } ] }, "finishReason": "STOP", "safetyRatings": [ "..." ], "groundingMetadata": { "retrievalQueries": [ "How to make appointment to renew driving license?" ], "groundingChunks": [ { "retrievedContext": { "uri": "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AXiHM.....QTN92V5ePQ==", "title": "dmv" } } ], "groundingSupport": [ { "segment": { "startIndex": 25, "endIndex": 147 }, "segment text": "ipsum lorem ...", "supportChunkIndices": [1, 2], "confidenceScore": [0.9541752, 0.97726375] }, { "segment": { "startIndex": 294, "endIndex": 439 }, "segment text": "ipsum lorem ...", "supportChunkIndices": [1], "confidenceScore": [0.9541752, 0.9325467] } ] } } ], "usageMetadata": { "..." } } Understand your response The response from both APIs include the LLM-generated text, which is called a candidate .
- HTTP method and URL: POST https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent Request JSON body: { "contents": [{ "role": "user", "parts": [{ "text": " PROMPT " }] }], "tools": [{ "retrieval": { "vertexAiSearch": { "datastore": projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATASTORE ID } } }], "model": "projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID " } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Set environment variables to use the Gen AI SDK with Vertex AI: Replace the GOOGLE CLOUD PROJECT and GOOGLE CLOUD LOCATION values with appropriate values for your project. export GOOGLE CLOUD PROJECT = GOOGLE CLOUD PROJECT export GOOGLE CLOUD LOCATION = global export GOOGLE GENAI USE VERTEXAI = True from google import genai from google.genai.types import ( GenerateContentConfig , VertexAISearch , Retrieval , Tool , HttpOptions , ) client = genai .

### "Grounding with Google Search \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-search](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-search)
- Source ID: `site-docs-root`
- Final score: 248
- Re-rank relevance: N/A

Evidence snippets:
- There is a slight chance of rain on both days.\n" } ] }, "finishReason": "STOP", "groundingMetadata": { "webSearchQueries": [ "weather in Chicago this weekend" ], "searchEntryPoint": { "renderedContent": "..." }, "groundingChunks": [ { "web": { "uri": "https://www.google.com/search?q=weather+in+Chicago,+IL", "title": "Weather information for locality: Chicago, administrative area: IL", "domain": "google.com" } }, { "web": { "uri": "...", "title": "weatherbug.com", "domain": "weatherbug.com" } } ], "groundingSupports": [ { "segment": { "startIndex": 85, "endIndex": 214, "text": "The temperature will be between 49°F (9°C) and 55°F (13°C) on Saturday and between 51°F (11°C) and 56°F (13°C) on Sunday." }, "groundingChunkIndices": [ 0 ], "confidenceScores": [ 0.8662828 ] }, { "segment": { "startIndex": 215, "endIndex": 261, "text": "There is a slight chance of rain on both days." }, "groundingChunkIndices": [ 1, 0 ], "confidenceScores": [ 0.62836814, 0.6488607 ] } ], "retrievalMetadata": {} } } ], "usageMetadata": { "promptTokenCount": 10, "candidatesTokenCount": 98, "totalTokenCount": 108, "trafficType": "ON DEMAND", "promptTokensDetails": [ { "modality": "TEXT", "tokenCount": 10 } ], "candidatesTokensDetails": [ { "modality": "TEXT", "tokenCount": 98 } ] }, "modelVersion": "gemini-2.0-flash", "createTime": "2025-05-19T14:42:55.000643Z", "responseId": "b0MraIMFoqnf-Q-D66G4BQ" } Grounding with Google Image Search Preview This product or feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- HTTP method and URL: POST https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent Request JSON body: { "contents": [{ "role": "user", "parts": [{ "text": " TEXT " }] }], "tools": [{ "googleSearch": { "exclude domains": [ "domain.com", "domain2.com" ] } }], "toolConfig": { "retrievalConfig": { "latLng": { "latitude": LATITUDE , "longitude": LONGITUDE } } }, "model": "projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID " } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Benefits The following complex prompts and workflows that require planning, reasoning, and thinking can be done when you use Grounding with Google Search as a tool: You can ground to help ensure responses are based on the latest and most accurate information.
- Grounding with Google Search If you want to connect your model with world knowledge, a wide possible range of topics, or up-to-date information on the Internet, then use Grounding with Google Search.

