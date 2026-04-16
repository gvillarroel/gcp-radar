---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.720Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Context caching for Gemini 1.5 Pro"
feature_slug: "context-caching-for-gemini-1-5-pro"
latest_feature_date: "2024-06-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-overview"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-create"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/gemini-3-prompting-guide"
keywords:
  - "context"
  - "caching"
  - "for"
  - "gemini"
  - "pro"
  - "is"
  - "available"
  - "to"
---

# Context caching for Gemini 1.5 Pro

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Context caching is available for Gemini 1.5 Pro to reduce the cost of requests with repeated high-token-count content.

## Extended Definition

Context caching is available for Gemini 1.5 Pro to reduce the cost of requests with repeated high-token-count content.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-overview](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-overview)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-create](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-create)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/gemini-3-prompting-guide](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/gemini-3-prompting-guide)

## Supporting Pages

### "Context Caching for Fine-tuned Gemini Models \_|\_ Generative AI on Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini)
- Source ID: `site-docs-root`
- Final score: 313
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Make sure that you have the following information: The ID and the version of the tuned Gemini model The endpoint resource name for the deployed fine-tuned model Supported versions Fine-tuned Gemini models support implicit caching for the following versions: Gemini 3.1 Pro Gemini 3.1 Flash-Lite Gemini 3 Pro Gemini 3 Flash Gemini 2.5 Pro Gemini 2.5 Flash Gemini 2.5 Flash-Lite Explicit caching is supported for the following versions: Gemini 3.1 Pro Gemini 3.1 Flash-Lite Gemini 3 Pro Gemini 3 Flash Gemini 2.5 Pro Gemini 2.5 Flash Gemini 2.5 Flash-Lite Gemini 2.0 Flash (note: not supported in gemini-2.0-flash-live-preview-04-09 ) Gemini 2.0 Flash-Lite Create a context cache for a fine-tuned model The procedure for creating a context cache for a fine-tuned model largely follows the steps outlined in Create a context cache .
- You can use context caching for your fine-tuned Gemini models to improve performance and reduce costs for prompts that include large amounts of context.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /cachedContents" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT NUMBER /locations/us-central1/cachedContents/ CACHE ID ", "model": "projects/ PROJECT ID /locations/ LOCATION /models/ MODEL ID @ MODEL VERSION ", "createTime": "2024-06-04T01:11:50.808236Z", "updateTime": "2024-06-04T01:11:50.808236Z", "expireTime": "2024-06-04T02:11:50.794542Z" } Example curl command LOCATION = "us-central1" MODEL ID = "model-id" PROJECT ID = "test-project" MODEL VERSION = 1 MIME TYPE = "video/mp4" CACHED CONTENT URI = "gs://path-to-bucket/video-file-name.mp4" curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ https:// ${ LOCATION } -aiplatform.googleapis.com/v1/projects/ ${ PROJECT ID } /locations/ ${ LOCATION } /cachedContents -d \ '{ "model":"projects/${PROJECT ID}/locations/${LOCATION}/models/${MODEL ID}@${MODEL VERSION}", "contents": [ { "role": "user", "parts": [ { "fileData": { "mimeType": "${MIME TYPE}", "fileUri": "${CACHED CONTENT URI}" } } ] } ] }' Use a context cache for a fine-tuned model The procedure for using a context cache for a fine-tuned model largely follows the steps outlined in Use a context cache .
- Consult the linked documentation for the general process; this guide focuses on the difference of creating context cache for fine-tuned Gemini models.

### "Context caching overview \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-overview](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-overview)
- Source ID: `site-docs-root`
- Final score: 265
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Limits The content that you explicitly cache must adhere to the limits shown in the following table: Context caching limits Minimum cache token count for implicit and explicit caching Gemini 3 and Gemini 3.1 models: 4,096 tokens Gemini 2.0 and 2.5 models: 2,048 tokens Maximum size of content you can cache using a blob or text 10 MB Minimum time before a cache expires after it's created 1 minute Maximum time before a cache expires after it's created There isn't a maximum cache duration Important: When caching objects that are stored in a Cloud Storage bucket, don't make changes to objects until the cached contents are expired or deleted.
- Supported models Explicit caching is supported when using the following models: Gemini 3.1 Flash-Lite preview Gemini 3.1 Pro preview Gemini 3 Flash preview Gemini 2.5 Pro Gemini 2.5 Flash preview Gemini 2.5 Flash-Lite preview Gemini 2.5 Flash Gemini 2.5 Flash-Lite Explicit caching also supports the latest aliases, including: gemini-flash-latest gemini-flash-lite-latest When to use context caching Context caching is particularly well suited to scenarios where a substantial initial context is referenced repeatedly by subsequent requests.
- Consider using context caching for use cases such as: Chatbots with extensive system instructions Repetitive analysis of lengthy video files Recurring queries against large document sets Frequent code repository analysis or bug fixing Implicit and explicit caching are supported with Provisioned Throughput in Preview .
- To see an example of context caching, run the "Intro to context caching" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub Context caching helps reduce the cost and latency of requests to Gemini that contain repeated content.

### "Create a context cache \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-create](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-create)
- Source ID: `site-docs-root`
- Final score: 249
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /cachedContents" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT NUMBER /locations/us-central1/cachedContents/ CACHE ID ", "model": "projects/ PROJECT ID /locations/us-central1/publishers/google/models/gemini-2.0-flash-001", "createTime": "2024-06-04T01:11:50.808236Z", "updateTime": "2024-06-04T01:11:50.808236Z", "expireTime": "2024-06-04T02:11:50.794542Z" } Example curl command LOCATION = "us-central1" MODEL ID = "gemini-2.0-flash-001" PROJECT ID = "test-project" MIME TYPE = "video/mp4" CACHED CONTENT URI = "gs://path-to-bucket/video-file-name.mp4" curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ https:// ${ LOCATION } -aiplatform.googleapis.com/v1/projects/ ${ PROJECT ID } /locations/ ${ LOCATION } /cachedContents -d \ '{ "model":"projects/${PROJECT ID}/locations/${LOCATION}/publishers/google/models/${MODEL ID}", "contents": [ { "role": "user", "parts": [ { "fileData": { "mimeType": "${MIME TYPE}", "fileUri": "${CACHED CONTENT URI}" } } ] } ] }' Create a context cache with CMEK To implement context caching with CMEKs, create a CMEK by following the instructions and make sure the Vertex AI per-product, per-project service account (P4SA) has the necessary Cloud KMS CryptoKey Encrypter/Decrypter permissions on the key.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /cachedContents" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT NUMBER /locations/us-central1/cachedContents/ CACHE ID ", "model": "projects/ PROJECT ID /locations/us-central1/publishers/google/models/gemini-2.0-flash-001", "createTime": "2024-06-04T01:11:50.808236Z", "updateTime": "2024-06-04T01:11:50.808236Z", "expireTime": "2024-06-04T02:11:50.794542Z" } Example curl command LOCATION = "us-central1" MODEL ID = "gemini-2.0-flash-001" PROJECT ID = "test-project" MIME TYPE = "video/mp4" CACHED CONTENT URI = "gs://path-to-bucket/video-file-name.mp4" KMS KEY NAME = "projects/ ${ PROJECT ID } /locations/{LOCATION}/keyRings/your-key-ring/cryptoKeys/your-key" curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ https:// ${ LOCATION } -aiplatform.googleapis.com/v1/projects/ ${ PROJECT ID } /locations/ ${ LOCATION } /cachedContents -d \ '{ "model": "projects/{PROJECT ID}}/locations/{LOCATION}/publishers/google/models/{MODEL ID}", "contents" : [ { "role": "user", "parts": [ { "file data": { "mime type":"{MIME TYPE}", "file uri":"{CACHED CONTENT URI}" } } ] } ], "encryption spec" : { "kms key name":"{KMS KEY NAME}" } }' GenAI SDK for Python Install pip install --upgrade google-genai To learn more, see the SDK reference documentation .
- Now look at these research papers, and answer the following questions. """ contents = [ Content ( role = "user" , parts = [ Part . from uri ( file uri = "gs://cloud-samples-data/generative-ai/pdf/2312.11805v3.pdf" , mime type = "application/pdf" , ), Part . from uri ( file uri = "gs://cloud-samples-data/generative-ai/pdf/2403.05530.pdf" , mime type = "application/pdf" , ), ], ) ] content cache = client . caches . create ( model = "gemini-2.5-flash" , config = CreateCachedContentConfig ( contents = contents , system instruction = system instruction , (Optional) For enhanced security, the content cache can be encrypted using a Cloud KMS key kms key name = "projects/.../locations/.../keyRings/.../cryptoKeys/..." display name = "example-cache" , ttl = "86400s" , ), ) print ( content cache . name ) print ( content cache . usage metadata ) Example response: projects/111111111111/locations/.../cachedContents/1111111111111111111 CachedContentUsageMetadata(audio duration seconds=None, image count=167, text count=153, total token count=43130, video duration seconds=None) Go Learn how to install or update the Go .
- Now look at these research papers , and answer the following questions . ; const contents = [ { role : 'user' , parts : [ { fileData : { fileUri : 'gs://cloud-samples-data/generative-ai/pdf/2312.11805v3.pdf' , mimeType : 'application/pdf' , }, }, { fileData : { fileUri : 'gs://cloud-samples-data/generative-ai/pdf/2403.05530.pdf' , mimeType : 'application/pdf' , }, }, ], }, ]; const contentCache = await client . caches . create ({ model : 'gemini-2.5-flash' , config : { contents : contents , systemInstruction : systemInstruction , displayName : 'example-cache' , ttl : '86400s' , }, }); console . log ( contentCache ); console . log ( contentCache . name ); // Example response : // projects / 111111111111 / locations / us - central1 / cachedContents / 1111111111111111111 // CachedContentUsageMetadata ( audio duration seconds = None , image count = 167 , // text count = 153 , total token count = 43130 , video duration seconds = None ) return contentCache . name ; } REST You can use REST to create a context cache by using the Vertex AI API to send a POST request to the publisher model endpoint.

### "Gemini 3 prompting guide \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/gemini-3-prompting-guide](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/gemini-3-prompting-guide)
- Source ID: `site-docs-root`
- Final score: 238
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- A well-structured prompt might look like this: [Context and source material] [Main task instructions] [Negative, formatting, and quantitative constraints] Using personas The model is designed to treat the persona it is assigned seriously and will sometimes ignore instructions in order to maintain adherence to the described persona.
- While the model is designed to be helpful, if you provide a hypothetical scenario that contradicts real-world facts (prompting with context such as Crabs are fictional and have never existed. ), the model may revert to its training data rather than your prompt to align your request with its existing information.
- Synthesizing multiple sources of information When information is presented in multiple places across a source of context, the model can sometimes stop processing additional information after the first relevant match.
- If you need to work in context that isn't grounded in real-world information, explicitly state that the provided context is the only source of truth for the current session.

