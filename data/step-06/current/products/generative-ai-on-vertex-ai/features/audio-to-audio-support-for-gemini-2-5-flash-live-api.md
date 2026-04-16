---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.676Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Audio-to-audio support for Gemini 2.5 Flash Live API"
feature_slug: "audio-to-audio-support-for-gemini-2-5-flash-live-api"
latest_feature_date: "2025-05-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-your-search-api"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-getinfo"
keywords:
  - "audio"
  - "to"
  - "for"
  - "gemini"
  - "flash"
  - "live"
  - "api"
  - "with"
---

# Audio-to-audio support for Gemini 2.5 Flash Live API

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Audio-to-audio support for Gemini 2.5 Flash with Live API became available in private preview for allowlisted users.

## Extended Definition

Audio-to-audio support for Gemini 2.5 Flash with Live API became available in private preview for allowlisted users.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-your-search-api](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-your-search-api)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-getinfo](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-getinfo)

## Supporting Pages

### "Context Caching for Fine-tuned Gemini Models \_|\_ Generative AI on Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini)
- Source ID: `site-docs-root`
- Final score: 227
- Re-rank relevance: N/A

Evidence snippets:
- HTTP method and URL: POST https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /endpoints/ ENDPOINT ID :generateContent Request JSON body: { "cachedContent": "projects/ PROJECT NUMBER /locations/ LOCATION /cachedContents/ CACHE ID ", "contents": [ {"role":"user","parts":[{"text":" PROMPT TEXT "}]} ], "generationConfig": { "maxOutputTokens": 8192, "temperature": 1, "topP": 0.95, }, "safetySettings": [ { "category": "HARM CATEGORY HATE SPEECH", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY DANGEROUS CONTENT", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY SEXUALLY EXPLICIT", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY HARASSMENT", "threshold": "BLOCK MEDIUM AND ABOVE" } ], } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Make sure that you have the following information: The ID and the version of the tuned Gemini model The endpoint resource name for the deployed fine-tuned model Supported versions Fine-tuned Gemini models support implicit caching for the following versions: Gemini 3.1 Pro Gemini 3.1 Flash-Lite Gemini 3 Pro Gemini 3 Flash Gemini 2.5 Pro Gemini 2.5 Flash Gemini 2.5 Flash-Lite Explicit caching is supported for the following versions: Gemini 3.1 Pro Gemini 3.1 Flash-Lite Gemini 3 Pro Gemini 3 Flash Gemini 2.5 Pro Gemini 2.5 Flash Gemini 2.5 Flash-Lite Gemini 2.0 Flash (note: not supported in gemini-2.0-flash-live-preview-04-09 ) Gemini 2.0 Flash-Lite Create a context cache for a fine-tuned model The procedure for creating a context cache for a fine-tuned model largely follows the steps outlined in Create a context cache .
- HTTP method and URL: POST https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /cachedContents Request JSON body: { "model": "projects/ PROJECT ID /locations/ LOCATION /models/ MODEL ID @ MODEL VERSION ", "displayName": " CACHE DISPLAY NAME ", "contents": [{ "role": "user", "parts": [{ "fileData": { "mimeType": " MIME TYPE ", "fileUri": " CONTENT TO CACHE URI " } }] }] } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /endpoints/ ENDPOINT ID :generateContent" PowerShell Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .

### "Quickstart: Send text prompts to Gemini using Vertex AI Studio \_|\_ Generative\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart)
- Source ID: `site-docs-root`
- Final score: 220
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In this quickstart, you: Send these prompts to the Gemini API using samples from the generative AI prompt gallery, including the following: A summarization text prompt A code generation prompt View the code used to generate the responses Before you begin prompting in Vertex AI Studio This quickstart requires you to complete the following steps to set up a Google Cloud project and enable the Vertex AI API.
- Test the Gemini flash model using a summarization text prompt Send a summarization text prompt to the Gemini API in Vertex AI.
- Test the Gemini flash model using a code generation prompt Send a code generation prompt to the Gemini API in Vertex AI.
- To get the permissions that you need to complete the tasks in this quickstart, ask your administrator to grant you the following IAM roles on your project: To enable the Vertex AI API if it isn't already enabled: serviceusage.serviceUsageAdmin To run prompts in Vertex AI Studio: Vertex AI User ( roles/aiplatform.user ) Sign in to your Google Cloud account.

### "Grounding with your search API \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-your-search-api](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-your-search-api)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Client ( http options = HttpOptions ( api version = "v1" )) Replace with your API details EXTERNAL API ENDPOINT = "YOUR EXTERNAL API ENDPOINT" # e.g., https://YOUR GATEWAY HOSTNAME/v0/search EXTERNAL API KEY = "YOUR EXTERNAL API KEY" tool = Tool ( retrieval = Retrieval ( external api = ExternalApi ( api spec = "SIMPLE SEARCH" , endpoint = EXTERNAL API ENDPOINT , api auth = { "apiKeyConfig" : { "apiKeyString" : EXTERNAL API KEY } } ) ) ) response = client . models . generate content ( model = "gemini-2.5-flash" , # Or another supported model contents = "What can you tell me about product Y based on my API?" , # Your query config = GenerateContentConfig ( tools = [ tool ], ), ) print ( response . text ) REST Before using any of the request data, make the following replacements: LOCATION : The region to process the request.
- It specifies that the gateway expects a POST request to the /v0/search path and requires an API key sent as a query parameter named key . swagger: '2.0' info: title: Custom Search API for Gemini Grounding description: Wraps an internal search function , secured by API Key for Gemini. version: 1 .0.0 schemes: - https produces: - application/json consumes: - application/json paths: /v0/search: # TODO: This will be part of API endpoint URL change if necessary post: summary: Custom search endpoint for Gemini operationId: customSearchForGemini # TODO: Change if needed x-google-backend: address: YOUR CLOUD FUNCTION TRIGGER URL # TODO: Replace with your Cloud Function trigger URL parameters: - name: body in : body required: true schema: type: object properties: query: type: string security: - api key query: [] responses: '200' : description: Search results schema: type: array items: type: object properties: snippet: type: string uri: type: string '400' : description: Invalid request '401' : description: Unauthorized ( Missing or invalid API key ) '500' : description: Internal server error securityDefinitions: api key query: type: apiKey name: key # Gemini will send its API key using this query parameter name in : query Important: Replace YOUR CLOUD FUNCTION TRIGGER URL with the trigger URL that you noted when deploying your Cloud Functions.
- Create your external API wrapper with Cloud Functions A Cloud Function can act as an intermediary that receives queries from Gemini, issues appropriate queries to your existing search infrastructure, such as a database, internal search engine, or vector search, and then formats the results in the schema Gemini understands.
- Configure the externalApi tool When making a request to the Gemini API, include the tools parameter with a retrieval tool configured for the externalApi .

### "Get information about a context cache \_|\_ Generative AI on Vertex AI \_\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-getinfo](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-getinfo)
- Source ID: `site-docs-root`
- Final score: 207
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /cachedContents" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "cachedContents": [ { "name": "projects/ PROJECT NUMBER /locations/us-central1/cachedContents/ CACHE ID 1 ", "model": "projects/ PROJECT ID /locations/us-central1/publishers/google/models/gemini-2.0-flash-001", "createTime": "2024-05-31T19:04:35.380412Z", "updateTime": "2024-05-31T19:04:35.380412Z", "expireTime": "2024-05-31T20:04:35.349680Z" }, { "name": "projects/ PROJECT NUMBER /locations/us-central1/cachedContents/ CACHE ID 2 ", "model": "projects/ PROJECT ID /locations/us-central1/publishers/google/models/gemini-2.0-flash-001", "createTime": "2024-05-30T21:14:39.880235Z", "updateTime": "2024-05-31T00:21:15.350969Z", "expireTime": "2024-05-31T01:21:15.348014Z" }, { "name": "projects/ PROJECT NUMBER /locations/us-central1/cachedContents/ CACHE ID N ", "model": "projects/ PROJECT ID /locations/us-central1/publishers/google/models/gemini-2.0-flash-001", "createTime": "2024-05-30T21:14:39.880235Z", "updateTime": "2024-05-31T00:21:15.350969Z", "expireTime": "2024-05-31T01:21:15.348014Z" } ] } Example curl command LOCATION = "us-central1" PROJECT ID = " PROJECT ID " curl \ -X GET \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ https:// ${ LOCATION } -aiplatform.googleapis.com/v1/projects/ ${ PROJECT ID } /locations/ ${ LOCATION } /cachedContents Get information about a context cache To get information about one context cache, you need its cache ID, the Google Cloud project ID with which the context cache is associated, and the region where the request to create the context cache was processed.
- GOOGLE CLOUD LOCATION 'global' ; async function listContentCaches ( projectId = GOOGLE CLOUD PROJECT , location = GOOGLE CLOUD LOCATION ) { const client = new GoogleGenAI ({ vertexai : true , project : projectId , location : location , httpOptions : { apiVersion : 'v1' , }, }); const contentCacheList = await client . caches . list (); // Access individual properties of a ContentCache object ( s ) const contentCacheNames = []; for ( const contentCache of contentCacheList . pageInternal ) { console . log ( Cache \ $ { contentCache . name } \ for model \ $ { contentCache . model } \ ` ); console . log ( Last updated at : $ { contentCache . updateTime } ); console . log ( Expires at : $ { contentCache . expireTime } ); contentCacheNames . push ( contentCache . name ); } console . log ( contentCacheNames ); // Example response : // Cache projects / 111111111111 / locations / us - central1 / cachedContents / 1111111111111111111 for // model projects / 111111111111 / locations / us - central1 / publishers / google / models / gemini - XXX - pro - XXX // Last updated at : 2025 - 02 - 13 14 : 46 : 42.620490 + 00 : 00 // CachedContentUsageMetadata ( audio duration seconds = None , image count = 167 , text count = 153 , total token count = 43130 , video duration seconds = None ) // ... return contentCacheNames ; } REST The following shows how to use REST to list the context caches associated with a Google Cloud project by sending a GET request to the publisher model endpoint.
- This client only needs to be created // once , and can be reused for multiple requests . try ( Client client = Client . builder () . location ( "global" ) . vertexAI ( true ) . httpOptions ( HttpOptions . builder () . apiVersion ( "v1" ) . build ()) . build ()) { for ( CachedContent content : client . caches . list ( ListCachedContentsConfig . builder () . build ())) { content . name () . ifPresent ( name - > System . out . println ( "Name: " + name )); content . model () . ifPresent ( model - > System . out . println ( "Model: " + model )); content . updateTime () . ifPresent ( time - > System . out . println ( "Last updated at: " + time )); content . expireTime () . ifPresent ( time - > System . out . println ( "Expires at: " + time )); } // Example response : // Name : projects / 111111111111 / locations / global / cachedContents / 1111111111111111111 // Model : // projects / 111111111111 / locations / global / publishers / google / models / gemini - 2.5 - flash // Last updated at : 2025 - 07 - 28 T21 : 54 : 19.125825 Z // Expires at : 2025 - 08 - 04 T21 : 54 : 18.328233500 Z // ... } } } Node.js Install npm install @google/genai To learn more, see the SDK reference documentation .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers ` -Uri "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /cachedContents/ CACHE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT NUMBER /locations/us-central1/cachedContents/ CACHE ID ", "model": "projects/ PROJECT ID /locations/us-central1/publishers/google/models/gemini-2.0-flash-001", "createTime": "2024-05-31T19:04:35.380412Z", "updateTime": "2024-05-31T19:04:35.380412Z", "expireTime": "2024-05-31T20:04:35.349680Z" } Example curl command LOCATION = "us-central1" PROJECT ID = " PROJECT ID " CACHE ID = " CACHE ID " curl \ -X GET \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ https:// ${ LOCATION } -aiplatform.googleapis.com/v1/projects/ ${ PROJECT ID } /locations/ ${ LOCATION } / ${ CACHE ID } Learn how to use a context cache .

