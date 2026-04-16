---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.714Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Label metadata for API calls"
feature_slug: "label-metadata-for-api-calls"
latest_feature_date: "2024-09-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1/publishers.models/streamGenerateContent"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1beta1/publishers.models/streamGenerateContent"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-your-search-api"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/flex-paygo"
keywords:
  - "label"
  - "metadata"
  - "for"
  - "api"
  - "calls"
  - "generatecontent"
  - "and"
  - "streamgeneratecontent"
---

# Label metadata for API calls

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

GenerateContent and streamGenerateContent API calls can include label metadata.

## Extended Definition

GenerateContent and streamGenerateContent API calls can include label metadata.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1/publishers.models/streamGenerateContent](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1/publishers.models/streamGenerateContent)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1beta1/publishers.models/streamGenerateContent](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1beta1/publishers.models/streamGenerateContent)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-your-search-api](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-your-search-api)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/flex-paygo](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/flex-paygo)

## Supporting Pages

### "Method: publishers.models.streamGenerateContent \_|\_ Generative AI on Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1/publishers.models/streamGenerateContent](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1/publishers.models/streamGenerateContent)
- Source ID: `site-api-reference`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI API reference Send feedback Method: publishers.models.streamGenerateContent Stay organized with collections Save and categorize content based on your preferences.
- Endpoint post https: / /aiplatform.googleapis.com /v1 /{model}:streamGenerateContent Path parameters model string Required.
- It is used for billing and reporting only. label keys and values can be no longer than 63 characters (Unicode codepoints) and can only contain lowercase letters, numeric characters, underscores, and dashes.
- Enforced on GenerateContentResponse.candidates. generationConfig object ( GenerationConfig ) Optional.

### "Method: publishers.models.streamGenerateContent \_|\_ Generative AI on Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1beta1/publishers.models/streamGenerateContent](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1beta1/publishers.models/streamGenerateContent)
- Source ID: `site-api-reference`
- Final score: 202
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI API reference Send feedback Method: publishers.models.streamGenerateContent Stay organized with collections Save and categorize content based on your preferences.
- Endpoint post https: / /aiplatform.googleapis.com /v1beta1 /{model}:streamGenerateContent Path parameters model string Required.
- It is used for billing and reporting only. label keys and values can be no longer than 63 characters (Unicode codepoints) and can only contain lowercase letters, numeric characters, underscores, and dashes.
- Enforced on GenerateContentResponse.candidates. generationConfig object ( GenerationConfig ) Optional.

### "Grounding with your search API \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-your-search-api](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-your-search-api)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud au t h pri nt - access - t oke n $headers = @ { "Authorization" = "Bearer $cred" } I n voke - WebReques t - Me t hod POST - Headers $headers - Co ntent Type : "application/json; charset=utf-8" - I n File reques t .jso n ` - Uri "https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent" Selec t - Objec t -E xpa n d Co ntent You should receive a JSON response similar to the following: { "candidates" : [ { "content" : { "role" : "model" , "parts" : [ { "text" : "You can make an appointment on the website https://dmv.gov/" } ] }, "finishReason" : "STOP" , "safetyRatings" : [ "..." ], "groundingMetadata" : { "retrievalQueries" : [ "How to make appointment to renew driving license?" ], "groundingChunks" : [ { "retrievedContext" : { "uri" : "https://..." , "snippet" : "Snippet text about driving license renewal" } } ], "groundingSupport" : [ { "segment" : { "startIndex" : 25 , "endIndex" : 147 }, "segment text" : "ipsum lorem ..." , "supportChunkIndices" : [ 1 , 2 ], "confidenceScore" : [ 0.9541752 , 0.97726375 ] }, { "segment" : { "startIndex" : 294 , "endIndex" : 439 }, "segment text" : "ipsum lorem ..." , "supportChunkIndices" : [ 1 ], "confidenceScore" : [ 0.9541752 , 0.9325467 ] } ] } } ], "usageMetadata" : { "..." } } Set up a search API endpoint If you don't have an existing API endpoint that meets the requirements, this section guides you through setting one up using Cloud Functions and API Gateway.
- HTTP method and URL: POST https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent Request JSON body: { "contents" : [{ "role" : "user" , "parts" : [{ "text" : " PROMPT " }] }], "tools" : [{ "retrieval" : { "externalApi" : { "api spec" : "SIMPLE SEARCH" , "endpoint" : " EXTERNAL API ENDPOINT " , "apiAuth" : { "apiKeyConfig" : { "apiKeyString" : " EXTERNAL API KEY " } } } } }] } To send your request, use one of these options: curl The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud CLI init or gcloud CLI auth login , or by using Cloud Shell, which automatically logs you into the gcloud CLI.
- Save the request body in a file named request.json , and execute the following command: curl - X POST \ - H "Authorization: Bearer $(gcloud auth print-access-token)" \ - H "Content-Type: application/json" \ - d @reques t .jso n \ "https://LOCATION-aiplatform.googleapis.com/v1beta1/projects/PROJECT ID/locations/LOCATION/publishers/google/models/MODEL ID:generateContent" Powershell The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud CLI init or gcloud CLI auth login.
- Set environment variables to use the Gen AI SDK with Vertex AI: Replace the GOOGLE CLOUD PROJECT and GOOGLE CLOUD LOCATION values with appropriate values for your project. export GOOGLE CLOUD PROJECT = GOOGLE CLOUD PROJECT export GOOGLE CLOUD LOCATION = global export GOOGLE GENAI USE VERTEXAI = True from google import genai from google.genai.types import ( GenerateContentConfig , ExternalApi , Retrieval , Tool , HttpOptions , ) client = genai .

### Flex PayGo \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/flex-paygo](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/flex-paygo)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The timeout is specified in seconds. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json; charset=utf-8" \ -H "X-Server-Timeout: 600" \ -H "X-Vertex-AI-LLM-Request-Type: shared" \ -H "X-Vertex-AI-LLM-Shared-Request-Type: flex" \ "https://aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/global/publishers/google/models/ MODEL ID :generateContent" -d \ $'{ "contents": { "role": "model", "parts": { "text": " PROMPT TEXT " } } }' You should receive a JSON response similar to the following. { "candidates" : [ { "content" : { "role" : "model" , "parts" : [ { "text" : "Response to sample request." } ] } , "finishReason" : "STOP" } ] , "usageMetadata" : { "promptTokenCount" : 3 , "candidatesTokenCount" : 900 , "totalTokenCount" : 1957 , "trafficType" : "ON DEMAND FLEX" , "thoughtsTokenCount" : 1054 } } Note the following in the URL for this sample: Use the generateContent method to request that the response is returned after it's fully generated.
- The timeout is specified in seconds. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json; charset=utf-8" \ -H "X-Server-Timeout: 600" \ -H "X-Vertex-AI-LLM-Shared-Request-Type: flex" \ "https://aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/global/publishers/google/models/ MODEL ID :generateContent" -d \ $'{ "contents": { "role": "model", "parts": { "text": " PROMPT TEXT " } } }' You should receive a JSON response similar to the following. { "candidates" : [ { "content" : { "role" : "model" , "parts" : [ { "text" : "Response to sample request." } ] } , "finishReason" : "STOP" } ] , "usageMetadata" : { "promptTokenCount" : 3 , "candidatesTokenCount" : 900 , "totalTokenCount" : 1957 , "trafficType" : "ON DEMAND FLEX" , "thoughtsTokenCount" : 1054 } } Note the following in the URL for this sample: Use the generateContent method to request that the response is returned after it's fully generated.
- If your request was processed using Flex PayGo, the trafficType field is set to ON DEMAND FLEX . { "candidates": [ { "content": { "role": "model", "parts": [ { "text": "Response to sample request." } ] }, "finishReason": "STOP" } ], "usageMetadata": { "promptTokenCount": 3, "candidatesTokenCount": 900, "totalTokenCount": 1957, "trafficType": "ON DEMAND FLEX", "thoughtsTokenCount": 1054 } } Additional quota for Flex PayGo In addition to the available quotas for content generation requests (including Provisioned Throughput quota for spillover traffic), requests utilizing Flex PayGo are subject to the following quota: Description QPM for each base model in a project Quota for each base model in a project requests utilizing Flex PayGo 3000 What's next Resource Generative AI quotas and limits Quotas and limits related specifically to generative AI on Vertex AI.
- The following are example use cases: Offline analysis of text, documents, image, audio and video files Evaluation of model qualities Data annotation and labeling Document translation Building a product catalog Note: For large workloads that can tolerate 24-hour turnaround times and process hundreds of billions of tokens daily, we recommend Batch inference with Gemini for improved throughput and success rate.

