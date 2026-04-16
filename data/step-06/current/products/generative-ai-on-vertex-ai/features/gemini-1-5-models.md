---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.662Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Gemini 1.5 models"
feature_slug: "gemini-1-5-models"
latest_feature_date: "2025-09-24"
deprecation_date: "2025-09-24"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/control-model-access"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deploy/consumption-options"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps"
keywords:
  - "gemini"
  - "models"
  - "access"
  - "to"
  - "on"
  - "vertex"
  - "ai"
  - "has"
---

# Gemini 1.5 models

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Access to Gemini 1.5 models on Vertex AI has been discontinued; deprecated on 2025-09-24.

## Extended Definition

Access to Gemini 1.5 models on Vertex AI has been discontinued; deprecated on 2025-09-24.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/control-model-access](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/control-model-access)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deploy/consumption-options](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deploy/consumption-options)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps)

## Supporting Pages

### "Control access to Model Garden models \_|\_ Generative AI on Vertex AI \_\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/control-model-access](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/control-model-access)
- Source ID: `site-docs-root`
- Final score: 348
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Allow a set of models and deny all other models The following example allows actions on a specific set of models. name : organizations/ ORGANIZATION ID /policies/vertexai.allowedModels spec : rules : values : allowedValues : - publishers/meta/models/llama3:deploy - publishers/google/models/gemini-2.0-flash-001:tune - publishers/hf-google/models/gemma-2b:deploy Enable web search for partner models To enable the web search feature for partner models, you can specify the following: All features for all models from a specific publisher, for example: publishers/anthropic All features for a specific model, for example: publishers/anthropic/models/ MODEL NAME The web search feature for a specific model, for example: publishers/anthropic/models/ MODEL NAME :web search The following example enables web search for all models from Anthropic: name : organizations/ ORGANIZATION ID /policies/vertexai.allowedPartnerModelFeatures spec : rules : values : allowedValues : Allow all features of this publisher - publishers/anthropic Allow all features of this model - publishers/anthropic/models/ MODEL NAME Allow this feature - publishers/anthropic/models/ MODEL NAME :web search What's next Guide Use models in Model Garden Use generative models from Model Garden in the Google Cloud Console.
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI Guides Send feedback Control access to Model Garden models Stay organized with collections Save and categorize content based on your preferences.
- Deny a set of models and allow all other models The following example denies actions on a specific set of models. name : organizations/ ORGANIZATION ID /policies/vertexai.allowedModels spec : rules : values : deniedValues : - publishers/meta/models/llama3:deploy - publishers/google/models/gemini-2.0-flash-001:tune - publishers/hf-google/models/gemma-2b:deploy Replace ORGANIZATION ID with the ID of your Google Cloud organization.
- By default, anyone with permissions to use Vertex AI can use Model Garden to discover, customize, and deploy a wide variety of Google and third-party models.

### "Vertex AI consumption options \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deploy/consumption-options](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deploy/consumption-options)
- Source ID: `site-docs-root`
- Final score: 345
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Consumption options Vertex AI provides five consumption options tailored to different traffic patterns and business needs: Consumption option Description Ideal For Pricing Provisioned Throughput Provides guaranteed throughput for a commitment period Critical, steady-state, always-on workloads where SLA is needed Commitment-based (available in 1 week, 1 month, 3 month, and 1 year plans) PayGo Standard Flexible, pay-per-use option with no upfront commitment Default option for everyday use cases with flexibility for variable traffic demand Per-token (standard rate) Priority Delivers higher reliability through priority processing while maintaining PayGo flexibility Important workloads that require higher reliability and limits than standard PayGo Per-token (premium rate) Flex Cost-effective option for latency-tolerant workloads Tasks that can tolerate slower response time and higher throttling, offering lower prices Per-token (discounted rate) Batch inference Cost-optimized for high-volume, asynchronous processing Large-scale jobs where results are needed within a longer timeframe Per-token (discounted rate) For information on pricing, see the pricing page .
- Select a lower priced model : If your use case can allow for it, use one of our smaller models like Flash-Lite, which has a lower per token price point than our heavy-duty, full-featured models.
- To optimize for latency: Select the right model for your use case : Vertex AI provides a diverse range of models with varying capabilities and performance characteristics.
- You can always switch the purchased Provisioned Throughput GSUs across different models to take advantage of our latest model capabilities.

### "Context Caching for Fine-tuned Gemini Models \_|\_ Generative AI on Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini)
- Source ID: `site-docs-root`
- Final score: 332
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /cachedContents" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT NUMBER /locations/us-central1/cachedContents/ CACHE ID ", "model": "projects/ PROJECT ID /locations/ LOCATION /models/ MODEL ID @ MODEL VERSION ", "createTime": "2024-06-04T01:11:50.808236Z", "updateTime": "2024-06-04T01:11:50.808236Z", "expireTime": "2024-06-04T02:11:50.794542Z" } Example curl command LOCATION = "us-central1" MODEL ID = "model-id" PROJECT ID = "test-project" MODEL VERSION = 1 MIME TYPE = "video/mp4" CACHED CONTENT URI = "gs://path-to-bucket/video-file-name.mp4" curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ https:// ${ LOCATION } -aiplatform.googleapis.com/v1/projects/ ${ PROJECT ID } /locations/ ${ LOCATION } /cachedContents -d \ '{ "model":"projects/${PROJECT ID}/locations/${LOCATION}/models/${MODEL ID}@${MODEL VERSION}", "contents": [ { "role": "user", "parts": [ { "fileData": { "mimeType": "${MIME TYPE}", "fileUri": "${CACHED CONTENT URI}" } } ] } ] }' Use a context cache for a fine-tuned model The procedure for using a context cache for a fine-tuned model largely follows the steps outlined in Use a context cache .
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI Guides Send feedback Context Caching for Fine-tuned Gemini Models Stay organized with collections Save and categorize content based on your preferences.
- Response { "candidates": [ { "content": { "role": "model", "parts": [ { "text": " MODEL RESPONSE " } ] }, "finishReason": "STOP", "safetyRatings": [ { "category": "HARM CATEGORY HATE SPEECH", "probability": "NEGLIGIBLE", "probabilityScore": 0.21866937, "severity": "HARM SEVERITY NEGLIGIBLE", "severityScore": 0.19946389 }, { "category": "HARM CATEGORY DANGEROUS CONTENT", "probability": "MEDIUM", "probabilityScore": 0.6880493, "severity": "HARM SEVERITY MEDIUM", "severityScore": 0.43374163 }, { "category": "HARM CATEGORY HARASSMENT", "probability": "NEGLIGIBLE", "probabilityScore": 0.4442634, "severity": "HARM SEVERITY LOW", "severityScore": 0.37903354 }, { "category": "HARM CATEGORY SEXUALLY EXPLICIT", "probability": "NEGLIGIBLE", "probabilityScore": 0.10502681, "severity": "HARM SEVERITY LOW", "severityScore": 0.28170192 } ] } ], "usageMetadata": { "promptTokenCount": 55927, "candidatesTokenCount": 105, "totalTokenCount": 56032 } } Example curl command LOCATION = "us-central1" PROJECT ID = "test-project" ENDPOINT ID = 987654321 curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https:// ${ LOCATION } -aiplatform.googleapis.com/v1/projects/ ${ PROJECT ID } /locations/ ${ LOCATION } /endpoints/ ${ ENDPOINT ID } :generateContent" -d \ '{ "cachedContent": "projects/${PROJECT NUMBER}/locations/${LOCATION}/cachedContents/${CACHE ID}", "contents": [ {"role":"user","parts":[{"text":"What are the benefits of exercise?"}]} ], "generationConfig": { "maxOutputTokens": 8192, "temperature": 1, "topP": 0.95, }, "safetySettings": [ { "category": "HARM CATEGORY HATE SPEECH", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY DANGEROUS CONTENT", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY SEXUALLY EXPLICIT", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY HARASSMENT", "threshold": "BLOCK MEDIUM AND ABOVE" } ], }' Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- HTTP method and URL: POST https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /cachedContents Request JSON body: { "model": "projects/ PROJECT ID /locations/ LOCATION /models/ MODEL ID @ MODEL VERSION ", "displayName": " CACHE DISPLAY NAME ", "contents": [{ "role": "user", "parts": [{ "fileData": { "mimeType": " MIME TYPE ", "fileUri": " CONTENT TO CACHE URI " } }] }] } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "Grounding with Google Maps in Vertex AI \_|\_ Generative AI on Vertex AI\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps)
- Source ID: `site-docs-root`
- Final score: 326
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent" Select-Object -Expand Content You should receive a JSON response similar to the following: { "candidates": [ { "content": { "role": "model", "parts": [ { "text": "\"The Italian Place\" in Alexandria, VA, is good for children and offers takeout.
- Save the request body in a file named request.json , and execute the following command: curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent" PowerShell (Windows) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login .
- Overview Grounding with Google Maps with Vertex AI is a service that connects Gemini models with geospatial data from Google Maps.
- HTTP method and URL: POST https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent Request JSON body: { "contents": [{ "role": "user", "parts": [{ "text": " PROMPT " }] }], "tools": [{ "googleMaps": { "enableWidget": " ENABLE WIDGET " } }], "toolConfig": { "retrievalConfig": { "latLng": { "latitude": LATITUDE , "longitude": LONGITUDE }, "languageCode": "en US" } }, "model": "projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID " } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

