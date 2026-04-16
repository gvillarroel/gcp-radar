---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.675Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Gemini 2.5 Flash preview endpoints"
feature_slug: "gemini-2-5-flash-preview-endpoints"
latest_feature_date: "2025-06-17"
deprecation_date: "2025-07-15"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/flex-paygo"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/vertex-ai-express-mode-api-quickstart"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-overview"
keywords:
  - "gemini"
  - "flash"
  - "preview"
  - "endpoints"
  - "for"
  - "were"
  - "scheduled"
  - "to"
---

# Gemini 2.5 Flash preview endpoints

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Preview endpoints for Gemini 2.5 Flash were scheduled to shut down after July 15, 2025; deprecated on 2025-07-15.

## Extended Definition

Preview endpoints for Gemini 2.5 Flash were scheduled to shut down after July 15, 2025; deprecated on 2025-07-15.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/flex-paygo](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/flex-paygo)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/vertex-ai-express-mode-api-quickstart](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/vertex-ai-express-mode-api-quickstart)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-overview](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-overview)

## Supporting Pages

### "Context Caching for Fine-tuned Gemini Models \_|\_ Generative AI on Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- Make sure that you have the following information: The ID and the version of the tuned Gemini model The endpoint resource name for the deployed fine-tuned model Supported versions Fine-tuned Gemini models support implicit caching for the following versions: Gemini 3.1 Pro Gemini 3.1 Flash-Lite Gemini 3 Pro Gemini 3 Flash Gemini 2.5 Pro Gemini 2.5 Flash Gemini 2.5 Flash-Lite Explicit caching is supported for the following versions: Gemini 3.1 Pro Gemini 3.1 Flash-Lite Gemini 3 Pro Gemini 3 Flash Gemini 2.5 Pro Gemini 2.5 Flash Gemini 2.5 Flash-Lite Gemini 2.0 Flash (note: not supported in gemini-2.0-flash-live-preview-04-09 ) Gemini 2.0 Flash-Lite Create a context cache for a fine-tuned model The procedure for creating a context cache for a fine-tuned model largely follows the steps outlined in Create a context cache .
- Response { "candidates": [ { "content": { "role": "model", "parts": [ { "text": " MODEL RESPONSE " } ] }, "finishReason": "STOP", "safetyRatings": [ { "category": "HARM CATEGORY HATE SPEECH", "probability": "NEGLIGIBLE", "probabilityScore": 0.21866937, "severity": "HARM SEVERITY NEGLIGIBLE", "severityScore": 0.19946389 }, { "category": "HARM CATEGORY DANGEROUS CONTENT", "probability": "MEDIUM", "probabilityScore": 0.6880493, "severity": "HARM SEVERITY MEDIUM", "severityScore": 0.43374163 }, { "category": "HARM CATEGORY HARASSMENT", "probability": "NEGLIGIBLE", "probabilityScore": 0.4442634, "severity": "HARM SEVERITY LOW", "severityScore": 0.37903354 }, { "category": "HARM CATEGORY SEXUALLY EXPLICIT", "probability": "NEGLIGIBLE", "probabilityScore": 0.10502681, "severity": "HARM SEVERITY LOW", "severityScore": 0.28170192 } ] } ], "usageMetadata": { "promptTokenCount": 55927, "candidatesTokenCount": 105, "totalTokenCount": 56032 } } Example curl command LOCATION = "us-central1" PROJECT ID = "test-project" ENDPOINT ID = 987654321 curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https:// ${ LOCATION } -aiplatform.googleapis.com/v1/projects/ ${ PROJECT ID } /locations/ ${ LOCATION } /endpoints/ ${ ENDPOINT ID } :generateContent" -d \ '{ "cachedContent": "projects/${PROJECT NUMBER}/locations/${LOCATION}/cachedContents/${CACHE ID}", "contents": [ {"role":"user","parts":[{"text":"What are the benefits of exercise?"}]} ], "generationConfig": { "maxOutputTokens": 8192, "temperature": 1, "topP": 0.95, }, "safetySettings": [ { "category": "HARM CATEGORY HATE SPEECH", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY DANGEROUS CONTENT", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY SEXUALLY EXPLICIT", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY HARASSMENT", "threshold": "BLOCK MEDIUM AND ABOVE" } ], }' Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- HTTP method and URL: POST https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /endpoints/ ENDPOINT ID :generateContent Request JSON body: { "cachedContent": "projects/ PROJECT NUMBER /locations/ LOCATION /cachedContents/ CACHE ID ", "contents": [ {"role":"user","parts":[{"text":" PROMPT TEXT "}]} ], "generationConfig": { "maxOutputTokens": 8192, "temperature": 1, "topP": 0.95, }, "safetySettings": [ { "category": "HARM CATEGORY HATE SPEECH", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY DANGEROUS CONTENT", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY SEXUALLY EXPLICIT", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY HARASSMENT", "threshold": "BLOCK MEDIUM AND ABOVE" } ], } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /endpoints/ ENDPOINT ID :generateContent" PowerShell Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .

### Flex PayGo \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/flex-paygo](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/flex-paygo)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Flex PayGo doesn't support regional or multi-regional endpoints. gemini-3.1-flash-lite-preview gemini-3.1-flash-image-preview gemini-3.1-pro-preview gemini-3-flash-preview gemini-3-pro-image-preview Request payload limit Flex PayGo requests have a total payload size limit of 20 MB for requests where the payload is included directly in the request body.
- The following are example use cases: Offline analysis of text, documents, image, audio and video files Evaluation of model qualities Data annotation and labeling Document translation Building a product catalog Note: For large workloads that can tolerate 24-hour turnaround times and process hundreds of billions of tokens daily, we recommend Batch inference with Gemini for improved throughput and success rate.
- STOP : 'STOP' > )] create time = datetime . datetime ( 2025 , 12 , 3 , 20 , 32 , 55 , 916498 , tzinfo = TzInfo ( 0 )) model version = 'gemini-2.5-flash' prompt feedback = None response id = 'response id' usage metadata = GenerateContentResponseUsageMetadata ( candidates token count = 1408 , candidates tokens details = [ ModalityTokenCount ( modality = MediaModality .
- Flex pay-as-you-go (Flex PayGo), is a cost-effective option for accessing Gemini models for non-critical workloads that can tolerate longer response times and higher throttling.

### "Tutorial: Vertex AI API in express mode \_|\_ Generative AI on Vertex AI\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/vertex-ai-express-mode-api-quickstart](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/express-mode/vertex-ai-express-mode-api-quickstart)
- Source ID: `site-docs-root`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- After you receive the function call part from the model, you can invoke the function and get the response, and then pass the response to the model. function response parts = [ { 'function response' : { 'name' : 'get current weather' , 'response' : { 'name' : 'get current weather' , 'content' : { 'weather' : 'super nice' }, }, }, }, ] manual function calling contents = [ { 'role' : 'user' , 'parts' : [{ 'text' : 'What is the weather in Boston?' }]}, { 'role' : 'model' , 'parts' : [{ 'function call' : { 'name' : 'get current weather' , 'args' : { 'location' : 'Boston' }, } }], }, { 'role' : 'user' , 'parts' : function response parts }, ] function declarations = [{ 'name' : 'get current weather' , 'description' : 'Get the current weather in a city' , 'parameters' : { 'type' : 'OBJECT' , 'properties' : { 'location' : { 'type' : 'STRING' , 'description' : 'The location to get the weather for' , }, 'unit' : { 'type' : 'STRING' , 'enum' : [ 'C' , 'F' ], }, }, }, }] response = client . models . generate content ( model = "gemini-2.0-flash-001" , contents = manual function calling contents , config = dict ( tools = [{ 'function declarations' : function declarations }]), ) print ( response . text ) Clean up This tutorial does not create any Google Cloud resources, so no clean up is needed to avoid charges.
- SafetySetting ( category = "HARM CATEGORY HATE SPEECH" , threshold = "BLOCK ONLY HIGH" , ) ], ) for chunk in client . models . generate content stream ( model = "gemini-2.5-flash-lite" , contents = "Explain bubble sort to me" , config = config , ): print ( chunk . text ) generate () Non-streaming request The following code sample defines a function that sends a non-streaming request to the gemini-2.5-flash-lite .
- SafetySetting ( category = "HARM CATEGORY HATE SPEECH" , threshold = "BLOCK ONLY HIGH" , ) ], ) response = client . models . generate content ( model = "gemini-2.5-flash-lite" , contents = "Explain bubble sort to me" , config = config , ) print ( response . text ) generate () Function calling request The following code sample declares a function and passes it as a tool, and then receives a function call part in the response.
- Send a request to the Gemini for Google Cloud API, including the following: Non-streaming request Streaming request Function calling request Before you begin Before performing the tasks described on this page, sign up for express mode .

### "Context caching overview \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-overview](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-overview)
- Source ID: `site-docs-root`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- Supported models Explicit caching is supported when using the following models: Gemini 3.1 Flash-Lite preview Gemini 3.1 Pro preview Gemini 3 Flash preview Gemini 2.5 Pro Gemini 2.5 Flash preview Gemini 2.5 Flash-Lite preview Gemini 2.5 Flash Gemini 2.5 Flash-Lite Explicit caching also supports the latest aliases, including: gemini-flash-latest gemini-flash-lite-latest When to use context caching Context caching is particularly well suited to scenarios where a substantial initial context is referenced repeatedly by subsequent requests.
- Limits The content that you explicitly cache must adhere to the limits shown in the following table: Context caching limits Minimum cache token count for implicit and explicit caching Gemini 3 and Gemini 3.1 models: 4,096 tokens Gemini 2.0 and 2.5 models: 2,048 tokens Maximum size of content you can cache using a blob or text 10 MB Minimum time before a cache expires after it's created 1 minute Maximum time before a cache expires after it's created There isn't a maximum cache duration Important: When caching objects that are stored in a Cloud Storage bucket, don't make changes to objects until the cached contents are expired or deleted.
- Supported models Implicit caching is supported when using the following models: Gemini 3.1 Flash-Lite preview Gemini 3.1 Pro preview Gemini 3 Flash preview Gemini 2.5 Pro Gemini 2.5 Flash preview Gemini 2.5 Flash-Lite preview Gemini 2.5 Flash Gemini 2.5 Flash-Lite Implicit caching also supports the latest aliases, including: gemini-flash-latest gemini-flash-lite-latest Implicit caching also supports Open Models.
- Consider using context caching for use cases such as: Chatbots with extensive system instructions Repetitive analysis of lengthy video files Recurring queries against large document sets Frequent code repository analysis or bug fixing Implicit and explicit caching are supported with Provisioned Throughput in Preview .

