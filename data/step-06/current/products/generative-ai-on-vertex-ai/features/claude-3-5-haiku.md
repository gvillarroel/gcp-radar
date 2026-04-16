---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.647Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Claude 3.5 Haiku"
feature_slug: "claude-3-5-haiku"
latest_feature_date: "2026-01-05"
deprecation_date: "2026-01-05"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deprecations/partner-models"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-getinfo"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-create"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-update"
keywords:
  - "claude"
  - "haiku"
  - "is"
  - "deprecated"
  - "on"
  - "2026"
  - "01"
  - "05"
---

# Claude 3.5 Haiku

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Claude 3.5 Haiku is deprecated; deprecated on 2026-01-05.

## Extended Definition

Claude 3.5 Haiku is deprecated; deprecated on 2026-01-05.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deprecations/partner-models](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deprecations/partner-models)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-getinfo](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-getinfo)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-create](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-create)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-update](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-update)

## Supporting Pages

### "Model deprecations (MaaS) \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deprecations/partner-models](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deprecations/partner-models)
- Source ID: `site-docs-root`
- Final score: 242
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Anthropic's Claude 3 Haiku Anthropic's Claude 3 Haiku is deprecated as of February 23, 2026 and will be shut down on August 23, 2026 .
- Claude 3.5 Haiku Claude 3.5 Haiku is deprecated as of January 5, 2026 and will be shut down on July 5, 2026 .
- Model ID claude-3-haiku Launch stage deprecated Supported inputs & outputs Inputs: Text , Code , Images Outputs: Text Token limits Maximum input tokens: 200,000 Maximum output tokens: 8,000 Capabilities Supported Prompt caching Function calling Count tokens Not supported Batch predictions Extended thinking Usage types Supported Fixed quota Provisioned Throughput Not supported Technical specifications Images Limitation and specifications: See Vision in Anthropic's documentation Documents Limitation and specifications: See PDF support in Anthropic's documentation Knowledge cutoff date August 2023 Versions claude-3-haiku Launch stage: Deprecated Release date: March 19, 2024 Supported regions Model availability (Includes fixed quota & Provisioned Throughput) United States us-east5 Europe europe-west1 Asia Pacific asia-southeast1 ML processing United States Multi-region Europe Multi-region Asia Pacific asia-southeast1 Quota limits us-east5: QPM: 245 TPM: 600,000 (input and output) Context length: 200,000 europe-west1: QPM: 75 TPM: 181,000 (input and output) Context length: 200,000 asia-southeast1: QPM: 70 TPM: 174,000 (input and output) Context length: 200,000 Pricing See Pricing .
- View model card in Model Garden Model ID claude-3-5-haiku Launch stage deprecated Supported inputs & outputs Inputs: Text , Code , Images Outputs: Text Token limits Maximum input tokens: 200,000 Maximum output tokens: 8,000 Capabilities Supported Batch predictions Prompt caching Function calling Count tokens Not supported Extended thinking Usage types Supported Fixed quota Provisioned Throughput Not supported Technical specifications Images Limitation and specifications: See Vision in Anthropic's documentation Documents Limitation and specifications: See PDF support in Anthropic's documentation Knowledge cutoff date July 2024 Versions claude-3-5-haiku Launch stage: Deprecated Release date: October 22, 2024 Supported regions Model availability (Includes fixed quota & Provisioned Throughput) United States us-east5 Europe europe-west1 ML processing United States Multi-region Europe Multi-region Quota limits us-east5: QPM: 80 TPM: 350,000 (input and output) Context length: 200,000 europe-west1: QPM: 90 TPM: 400,000 (input and output) Context length: 200,000 Pricing See Pricing .

### "Get information about a context cache \_|\_ Generative AI on Vertex AI \_\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-getinfo](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-getinfo)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /cachedContents" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "cachedContents": [ { "name": "projects/ PROJECT NUMBER /locations/us-central1/cachedContents/ CACHE ID 1 ", "model": "projects/ PROJECT ID /locations/us-central1/publishers/google/models/gemini-2.0-flash-001", "createTime": "2024-05-31T19:04:35.380412Z", "updateTime": "2024-05-31T19:04:35.380412Z", "expireTime": "2024-05-31T20:04:35.349680Z" }, { "name": "projects/ PROJECT NUMBER /locations/us-central1/cachedContents/ CACHE ID 2 ", "model": "projects/ PROJECT ID /locations/us-central1/publishers/google/models/gemini-2.0-flash-001", "createTime": "2024-05-30T21:14:39.880235Z", "updateTime": "2024-05-31T00:21:15.350969Z", "expireTime": "2024-05-31T01:21:15.348014Z" }, { "name": "projects/ PROJECT NUMBER /locations/us-central1/cachedContents/ CACHE ID N ", "model": "projects/ PROJECT ID /locations/us-central1/publishers/google/models/gemini-2.0-flash-001", "createTime": "2024-05-30T21:14:39.880235Z", "updateTime": "2024-05-31T00:21:15.350969Z", "expireTime": "2024-05-31T01:21:15.348014Z" } ] } Example curl command LOCATION = "us-central1" PROJECT ID = " PROJECT ID " curl \ -X GET \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ https:// ${ LOCATION } -aiplatform.googleapis.com/v1/projects/ ${ PROJECT ID } /locations/ ${ LOCATION } /cachedContents Get information about a context cache To get information about one context cache, you need its cache ID, the Google Cloud project ID with which the context cache is associated, and the region where the request to create the context cache was processed.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers ` -Uri "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /cachedContents/ CACHE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT NUMBER /locations/us-central1/cachedContents/ CACHE ID ", "model": "projects/ PROJECT ID /locations/us-central1/publishers/google/models/gemini-2.0-flash-001", "createTime": "2024-05-31T19:04:35.380412Z", "updateTime": "2024-05-31T19:04:35.380412Z", "expireTime": "2024-05-31T20:04:35.349680Z" } Example curl command LOCATION = "us-central1" PROJECT ID = " PROJECT ID " CACHE ID = " CACHE ID " curl \ -X GET \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ https:// ${ LOCATION } -aiplatform.googleapis.com/v1/projects/ ${ PROJECT ID } /locations/ ${ LOCATION } / ${ CACHE ID } Learn how to use a context cache .
- UsageMetadata ) } // Example response : // Cache name : projects / 111111111111 / locations / us - central1 / cachedContents / 1234567890123456789 // Display name : product recommendations prompt // Model : models / gemini - 2.5 - flash // Create time : 2025 - 04 - 08 T02 : 15 : 23 Z // Update time : 2025 - 04 - 08 T03 : 05 : 11 Z // Expire time : 2025 - 04 - 20 T03 : 05 : 11 Z ( in 167 h59m59s ) // Usage metadata : & { AudioDurationSeconds : 0 ImageCount : 167 TextCount : 153 TotalTokenCount : 43124 VideoDurationSeconds : 0 } return nil } Java Learn how to install or update the Java .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

### "Create a context cache \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-create](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-create)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Now look at these research papers, and answer the following questions. """ contents = [ Content ( role = "user" , parts = [ Part . from uri ( file uri = "gs://cloud-samples-data/generative-ai/pdf/2312.11805v3.pdf" , mime type = "application/pdf" , ), Part . from uri ( file uri = "gs://cloud-samples-data/generative-ai/pdf/2403.05530.pdf" , mime type = "application/pdf" , ), ], ) ] content cache = client . caches . create ( model = "gemini-2.0-flash-001" , config = CreateCachedContentConfig ( contents = contents , system instruction = system instruction , display name = "example-cache" , kms key name = "projects/vertexsdk/locations/us-central1/keyRings/your-project/cryptoKeys/your-key" , ttl = "86400s" , ), ) print ( content cache . name ) print ( content cache . usage metadata ) GenAI SDK for Go Learn how to install or update the Gen AI SDK for Go .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /cachedContents" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT NUMBER /locations/us-central1/cachedContents/ CACHE ID ", "model": "projects/ PROJECT ID /locations/us-central1/publishers/google/models/gemini-2.0-flash-001", "createTime": "2024-06-04T01:11:50.808236Z", "updateTime": "2024-06-04T01:11:50.808236Z", "expireTime": "2024-06-04T02:11:50.794542Z" } Example curl command LOCATION = "us-central1" MODEL ID = "gemini-2.0-flash-001" PROJECT ID = "test-project" MIME TYPE = "video/mp4" CACHED CONTENT URI = "gs://path-to-bucket/video-file-name.mp4" KMS KEY NAME = "projects/ ${ PROJECT ID } /locations/{LOCATION}/keyRings/your-key-ring/cryptoKeys/your-key" curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ https:// ${ LOCATION } -aiplatform.googleapis.com/v1/projects/ ${ PROJECT ID } /locations/ ${ LOCATION } /cachedContents -d \ '{ "model": "projects/{PROJECT ID}}/locations/{LOCATION}/publishers/google/models/{MODEL ID}", "contents" : [ { "role": "user", "parts": [ { "file data": { "mime type":"{MIME TYPE}", "file uri":"{CACHED CONTENT URI}" } } ] } ], "encryption spec" : { "kms key name":"{KMS KEY NAME}" } }' GenAI SDK for Python Install pip install --upgrade google-genai To learn more, see the SDK reference documentation .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /cachedContents" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT NUMBER /locations/us-central1/cachedContents/ CACHE ID ", "model": "projects/ PROJECT ID /locations/us-central1/publishers/google/models/gemini-2.0-flash-001", "createTime": "2024-06-04T01:11:50.808236Z", "updateTime": "2024-06-04T01:11:50.808236Z", "expireTime": "2024-06-04T02:11:50.794542Z" } Example curl command LOCATION = "us-central1" MODEL ID = "gemini-2.0-flash-001" PROJECT ID = "test-project" MIME TYPE = "video/mp4" CACHED CONTENT URI = "gs://path-to-bucket/video-file-name.mp4" curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ https:// ${ LOCATION } -aiplatform.googleapis.com/v1/projects/ ${ PROJECT ID } /locations/ ${ LOCATION } /cachedContents -d \ '{ "model":"projects/${PROJECT ID}/locations/${LOCATION}/publishers/google/models/${MODEL ID}", "contents": [ { "role": "user", "parts": [ { "fileData": { "mimeType": "${MIME TYPE}", "fileUri": "${CACHED CONTENT URI}" } } ] } ] }' Create a context cache with CMEK To implement context caching with CMEKs, create a CMEK by following the instructions and make sure the Vertex AI per-product, per-project service account (P4SA) has the necessary Cloud KMS CryptoKey Encrypter/Decrypter permissions on the key.
- You always stick to the facts" + " in the sources provided, and never make up new facts. \n " + "Now look at these research papers, and answer the following questions." )); // Set pdf files Content contents = Content . fromParts ( Part . fromUri ( "gs://cloud-samples-data/generative-ai/pdf/2312.11805v3.pdf" , "application/pdf" ), Part . fromUri ( "gs://cloud-samples-data/generative-ai/pdf/2403.05530.pdf" , "application/pdf" )); // Configuration for cached content using pdfs files and text CreateCachedContentConfig config = CreateCachedContentConfig . builder () . systemInstruction ( systemInstruction ) . contents ( contents ) . displayName ( "example-cache" ) . ttl ( Duration . ofSeconds ( 86400 )) . build (); CachedContent cachedContent = client . caches . create ( modelId , config ); cachedContent . name () . ifPresent ( System . out :: println ); cachedContent . usageMetadata () . ifPresent ( System . out :: println ); // Example response : // projects / 111111111111 / locations / global / cachedContents / 1111111111111111111 // CachedContentUsageMetadata { audioDurationSeconds = Optional . empty , imageCount = Optional [ 167 ], // textCount = Optional [ 153 ], totalTokenCount = Optional [ 43125 ], // videoDurationSeconds = Optional . empty } return cachedContent . name (); } } } Node.js Install npm install @google/genai To learn more, see the SDK reference documentation .

### "Update a context cache \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-update](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-update)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /cachedContents/ CACHE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT NUMBER /locations/us-central1/cachedContents/ CACHE ID ", "model": "projects/ PROJECT ID /locations/us-central1/publishers/google/models/gemini-2.0-flash-001", "createTime": "2024-05-30T21:14:39.880235Z", "updateTime": "2024-05-31T00:21:15.350969Z", "expireTime": "2024-05-31T01:21:15.348014Z" } Example curl command PROJECT ID = " PROJECT ID " LOCATION = "us-central1" CACHE ID = " CACHE ID " curl \ -X PATCH \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https:// ${ LOCATION } -aiplatform.googleapis.com/v1/projects/ ${ PROJECT ID } /locations/ ${ LOCATION } /cachedContents/ ${ CACHE ID } " -d \ '{ "ttl": {"seconds":"3600","nanos":"0"} }' Update the context cache using its expire time parameter The following is an example of a curl command that uses the expire time parameter to update its expiration time to 9 AM on June 30, 2024.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method PATCH -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /cachedContents/ CACHE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT NUMBER /locations/us-central1/cachedContents/ CACHE ID ", "model": "projects/ PROJECT ID /locations/us-central1/publishers/google/models/gemini-2.0-flash-001", "createTime": "2024-05-30T21:14:39.880235Z", "updateTime": "2024-05-31T00:20:24.296585Z", "expireTime": "2024-06-30T09:00:00Z" } Example curl command PROJECT ID = " PROJECT ID " LOCATION = "us-central1" CACHE ID = " CACHE ID " curl \ -X PATCH \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https:// ${ LOCATION } -aiplatform.googleapis.com/v1/projects/ ${ PROJECT ID } /locations/ ${ LOCATION } /cachedContents/ ${ CACHE ID } " -d \ '{ "expire time":"2024-06-30T09:00:00.000000Z" }' What's next Learn how to use a context cache .
- This client only needs to be created // once , and can be reused for multiple requests . try ( Client client = Client . builder () . location ( "global" ) . vertexAI ( true ) . httpOptions ( HttpOptions . builder () . apiVersion ( "v1" ) . build ()) . build ()) { // Get info of the cached content CachedContent cachedContent = client . caches . get ( cacheName , null ); cachedContent . expireTime () . ifPresent ( expireTime - > System . out . println ( "Expire time: " + expireTime )); // Example response // Expire time : 2025 - 07 - 29 T23 : 39 : 49.227291 Z // Update expire time using TTL CachedContent updatedCachedContent = client . caches . update ( cacheName , UpdateCachedContentConfig . builder () . ttl ( Duration . ofSeconds ( 36000 )) . build ()); updatedCachedContent . expireTime () . ifPresent ( expireTime - > System . out . println ( "Expire time after update: " + expireTime )); // Example response // Expire time after update : 2025 - 07 - 30 T08 : 40 : 33.537205 Z // Update expire time using specific time stamp Instant nextWeek = Instant . now () . plus ( 7 , ChronoUnit .
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]

