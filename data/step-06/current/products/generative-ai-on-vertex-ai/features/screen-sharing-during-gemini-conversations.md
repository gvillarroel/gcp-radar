---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.685Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Screen sharing during Gemini conversations"
feature_slug: "screen-sharing-during-gemini-conversations"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-your-search-api"
keywords:
  - "screen"
  - "sharing"
  - "during"
  - "gemini"
  - "conversations"
  - "live"
  - "api"
  - "added"
---

# Screen sharing during Gemini conversations

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Gemini Live API added support for sharing the current screen during conversations.

## Extended Definition

Gemini Live API added support for sharing the current screen during conversations.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-your-search-api](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-your-search-api)

## Supporting Pages

### "Grounding with Google Maps in Vertex AI \_|\_ Generative AI on Vertex AI\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps)
- Source ID: `site-docs-root`
- Final score: 97
- Re-rank relevance: N/A

Evidence snippets:
- The Routing tool supports the following: Modes of transportation : Routing for driving, walking, bicycling, transit, and two-wheeled motorized vehicles (not all travel modes are available in all countries) Multiple waypoints : Up to 13 intermediate stops between origin and destination Real-time traffic : Accounting for current traffic conditions to provide accurate "live" travel times rather than static averages The following are examples of the types of questions that the Routing tool supports: Proximity based on travel time : "What are some American restaurants within a 10-minute walk from the Hilton Hotel on 1335 6th Ave in NYC?" Commute estimation : "How long does it take to take public transit from Pike Place Market to Capitol Hill in Seattle?" Understand the response When a prompt triggers the Routing tool, the model generates a natural language answer backed by structured metadata.
- Client ( http options = HttpOptions ( api version = "v1" )) response = client . models . generate content ( model = "gemini-2.5-flash" , contents = "Where can I get the best espresso near me?" , config = GenerateContentConfig ( tools = [ Use Google Maps Tool Tool ( google maps = GoogleMaps ( enable widget = False # Optional: return Maps widget token )) ], tool config = types .
- HTTP method and URL: POST https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent Request JSON body: { "contents": [{ "role": "user", "parts": [{ "text": " PROMPT " }] }], "tools": [{ "googleMaps": { "enableWidget": " ENABLE WIDGET " } }], "toolConfig": { "retrievalConfig": { "latLng": { "latitude": LATITUDE , "longitude": LONGITUDE }, "languageCode": "en US" } }, "model": "projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID " } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent" Select-Object -Expand Content You should receive a JSON response similar to the following: { "candidates": [ { "content": { "role": "model", "parts": [ { "text": "\"The Italian Place\" in Alexandria, VA, is good for children and offers takeout.

### "Generative AI glossary \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- Source ID: `site-docs-root`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- Perplexity is a commonly used metric for evaluating language models and is often used to compare the performance of different models or to track the progress of a model during training. pipeline ML pipelines are portable and scalable ML workflows that are based on containers.
- For more information, see RLHF Tuning with Vertex AI . service account Service accounts are special Google Cloud accounts used by applications or virtual machines to make authorized API calls to Google Cloud services.
- Batch size is usually fixed during training and inference; however, TensorFlow does permit dynamic batch sizes. batch inference Batch inference takes a group of inference requests and outputs the results in one file.
- They are also used as part of launching a change to live user traffic. execution An execution is a record of an individual machine learning workflow step, typically annotated with its runtime parameters.

### "Context Caching for Fine-tuned Gemini Models \_|\_ Generative AI on Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini)
- Source ID: `site-docs-root`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Make sure that you have the following information: The ID and the version of the tuned Gemini model The endpoint resource name for the deployed fine-tuned model Supported versions Fine-tuned Gemini models support implicit caching for the following versions: Gemini 3.1 Pro Gemini 3.1 Flash-Lite Gemini 3 Pro Gemini 3 Flash Gemini 2.5 Pro Gemini 2.5 Flash Gemini 2.5 Flash-Lite Explicit caching is supported for the following versions: Gemini 3.1 Pro Gemini 3.1 Flash-Lite Gemini 3 Pro Gemini 3 Flash Gemini 2.5 Pro Gemini 2.5 Flash Gemini 2.5 Flash-Lite Gemini 2.0 Flash (note: not supported in gemini-2.0-flash-live-preview-04-09 ) Gemini 2.0 Flash-Lite Create a context cache for a fine-tuned model The procedure for creating a context cache for a fine-tuned model largely follows the steps outlined in Create a context cache .
- Response { "candidates": [ { "content": { "role": "model", "parts": [ { "text": " MODEL RESPONSE " } ] }, "finishReason": "STOP", "safetyRatings": [ { "category": "HARM CATEGORY HATE SPEECH", "probability": "NEGLIGIBLE", "probabilityScore": 0.21866937, "severity": "HARM SEVERITY NEGLIGIBLE", "severityScore": 0.19946389 }, { "category": "HARM CATEGORY DANGEROUS CONTENT", "probability": "MEDIUM", "probabilityScore": 0.6880493, "severity": "HARM SEVERITY MEDIUM", "severityScore": 0.43374163 }, { "category": "HARM CATEGORY HARASSMENT", "probability": "NEGLIGIBLE", "probabilityScore": 0.4442634, "severity": "HARM SEVERITY LOW", "severityScore": 0.37903354 }, { "category": "HARM CATEGORY SEXUALLY EXPLICIT", "probability": "NEGLIGIBLE", "probabilityScore": 0.10502681, "severity": "HARM SEVERITY LOW", "severityScore": 0.28170192 } ] } ], "usageMetadata": { "promptTokenCount": 55927, "candidatesTokenCount": 105, "totalTokenCount": 56032 } } Example curl command LOCATION = "us-central1" PROJECT ID = "test-project" ENDPOINT ID = 987654321 curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https:// ${ LOCATION } -aiplatform.googleapis.com/v1/projects/ ${ PROJECT ID } /locations/ ${ LOCATION } /endpoints/ ${ ENDPOINT ID } :generateContent" -d \ '{ "cachedContent": "projects/${PROJECT NUMBER}/locations/${LOCATION}/cachedContents/${CACHE ID}", "contents": [ {"role":"user","parts":[{"text":"What are the benefits of exercise?"}]} ], "generationConfig": { "maxOutputTokens": 8192, "temperature": 1, "topP": 0.95, }, "safetySettings": [ { "category": "HARM CATEGORY HATE SPEECH", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY DANGEROUS CONTENT", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY SEXUALLY EXPLICIT", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY HARASSMENT", "threshold": "BLOCK MEDIUM AND ABOVE" } ], }' Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /cachedContents" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT NUMBER /locations/us-central1/cachedContents/ CACHE ID ", "model": "projects/ PROJECT ID /locations/ LOCATION /models/ MODEL ID @ MODEL VERSION ", "createTime": "2024-06-04T01:11:50.808236Z", "updateTime": "2024-06-04T01:11:50.808236Z", "expireTime": "2024-06-04T02:11:50.794542Z" } Example curl command LOCATION = "us-central1" MODEL ID = "model-id" PROJECT ID = "test-project" MODEL VERSION = 1 MIME TYPE = "video/mp4" CACHED CONTENT URI = "gs://path-to-bucket/video-file-name.mp4" curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ https:// ${ LOCATION } -aiplatform.googleapis.com/v1/projects/ ${ PROJECT ID } /locations/ ${ LOCATION } /cachedContents -d \ '{ "model":"projects/${PROJECT ID}/locations/${LOCATION}/models/${MODEL ID}@${MODEL VERSION}", "contents": [ { "role": "user", "parts": [ { "fileData": { "mimeType": "${MIME TYPE}", "fileUri": "${CACHED CONTENT URI}" } } ] } ] }' Use a context cache for a fine-tuned model The procedure for using a context cache for a fine-tuned model largely follows the steps outlined in Use a context cache .
- HTTP method and URL: POST https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /endpoints/ ENDPOINT ID :generateContent Request JSON body: { "cachedContent": "projects/ PROJECT NUMBER /locations/ LOCATION /cachedContents/ CACHE ID ", "contents": [ {"role":"user","parts":[{"text":" PROMPT TEXT "}]} ], "generationConfig": { "maxOutputTokens": 8192, "temperature": 1, "topP": 0.95, }, "safetySettings": [ { "category": "HARM CATEGORY HATE SPEECH", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY DANGEROUS CONTENT", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY SEXUALLY EXPLICIT", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY HARASSMENT", "threshold": "BLOCK MEDIUM AND ABOVE" } ], } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "Grounding with your search API \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-your-search-api](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-your-search-api)
- Source ID: `site-docs-root`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- During a generation request, Gemini can make a call to the external API endpoint with a search query.
- It specifies that the gateway expects a POST request to the /v0/search path and requires an API key sent as a query parameter named key . swagger: '2.0' info: title: Custom Search API for Gemini Grounding description: Wraps an internal search function , secured by API Key for Gemini. version: 1 .0.0 schemes: - https produces: - application/json consumes: - application/json paths: /v0/search: # TODO: This will be part of API endpoint URL change if necessary post: summary: Custom search endpoint for Gemini operationId: customSearchForGemini # TODO: Change if needed x-google-backend: address: YOUR CLOUD FUNCTION TRIGGER URL # TODO: Replace with your Cloud Function trigger URL parameters: - name: body in : body required: true schema: type: object properties: query: type: string security: - api key query: [] responses: '200' : description: Search results schema: type: array items: type: object properties: snippet: type: string uri: type: string '400' : description: Invalid request '401' : description: Unauthorized ( Missing or invalid API key ) '500' : description: Internal server error securityDefinitions: api key query: type: apiKey name: key # Gemini will send its API key using this query parameter name in : query Important: Replace YOUR CLOUD FUNCTION TRIGGER URL with the trigger URL that you noted when deploying your Cloud Functions.
- Client ( http options = HttpOptions ( api version = "v1" )) Replace with your API details EXTERNAL API ENDPOINT = "YOUR EXTERNAL API ENDPOINT" # e.g., https://YOUR GATEWAY HOSTNAME/v0/search EXTERNAL API KEY = "YOUR EXTERNAL API KEY" tool = Tool ( retrieval = Retrieval ( external api = ExternalApi ( api spec = "SIMPLE SEARCH" , endpoint = EXTERNAL API ENDPOINT , api auth = { "apiKeyConfig" : { "apiKeyString" : EXTERNAL API KEY } } ) ) ) response = client . models . generate content ( model = "gemini-2.5-flash" , # Or another supported model contents = "What can you tell me about product Y based on my API?" , # Your query config = GenerateContentConfig ( tools = [ tool ], ), ) print ( response . text ) REST Before using any of the request data, make the following replacements: LOCATION : The region to process the request.
- Create a Gateway gcloud api-gateway gateways create custom-search-gateway \ --api = custom-search-gemini-api \ --api-config = v1 \ --location = YOUR REGION \ --project = YOUR PROJECT ID After deployment, the hostname (gateway URL) has the following format: https://custom-search-gateway- UNIQUE ID .nw.gateway.dev You can use the hostname to construct the full endpoint URL for Gemini.

