---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.686Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Web Grounding for Enterprise"
feature_slug: "web-grounding-for-enterprise"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/web-grounding-enterprise"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-parallel"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/overview"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search"
keywords:
  - "web"
  - "grounding"
  - "for"
  - "enterprise"
  - "grounds"
  - "responses"
  - "using"
  - "content"
---

# Web Grounding for Enterprise

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Web Grounding for Enterprise grounds responses using enterprise web content.

## Extended Definition

Web Grounding for Enterprise grounds responses using enterprise web content.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/web-grounding-enterprise](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/web-grounding-enterprise)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-parallel](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-parallel)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/overview](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/overview)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search)

## Supporting Pages

### "Web Grounding for Enterprise \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/web-grounding-enterprise](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/web-grounding-enterprise)
- Source ID: `site-docs-root`
- Final score: 350
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- PROMPT : Your prompt. curl -X POST -H "Authorization: Bearer $( gcloud auth print-access-token ) " -H "Content-Type: application/json" -H "x-server-timeout: 60" https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT NUMBER /locations/ LOCATION /publishers/google/models/gemini-2.0-flash:generateContent -d ' { "contents": [{ "role": "user", "parts": [{ "text": PROMPT }] }], "tools": [{ "enterpriseWebSearch": { } }] } ' Use Google Search suggestions When you use Web Grounding for Enterprise, and you receive Search suggestions in your response, you must display the Search suggestions in production and in your applications.
- For example, in the following code snippet, Gemini responds to a Search grounded prompt, which asks about a type of tropical plant. "predictions" : [ { "content" : "Monstera is a type of vine that thrives in bright indirect light…" , "groundingMetadata" : { "webSearchQueries" : [ "What's a monstera?" ], } } ] You can take this output, and display it by using Search suggestions.
- To use the API, you must set the following fields: Contents.parts.text : The text query users want to send to the API. tools.enterpriseWebSearch : When this tool is provided, Web Grounding for Enterprise can be used by Gemini.
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI Guides Send feedback Web Grounding for Enterprise Stay organized with collections Save and categorize content based on your preferences.

### "Grounding with Parallel Web Search \_|\_ Generative AI on Vertex AI \_|\_\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-parallel](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-parallel)
- Source ID: `site-docs-root`
- Final score: 219
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use cases Grounding with Parallel is suitable for use cases such as the following: Using web data for information completion or enrichment purposes.
- HTTP method and URL: POST https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent Request JSON body: { "contents": [{ "role": "user", "parts": [{ "text": " TEXT " }] }], "tools": [{ "parallelAiSearch": { "api key": " API KEY ", "customConfigs": { "source policy": { "exclude domains": [" EXCLUDE DOMAINS "], "include domains": [" INCLUDE DOMAINS "], }, "excerpts": { "max chars per result": MAX CHARS PER RESULT , "max chars total": MAX CHARS TOTAL }, "max results": MAX RESULTS } } }], "model": "projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID " } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent" Select-Object -Expand Content You should receive a JSON response similar to the following.
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI Guides Send feedback Grounding with Parallel Web Search Stay organized with collections Save and categorize content based on your preferences.

### Grounding overview \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/overview](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/overview)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Web Grounding for Enterprise Use a web index suitable for highly-regulated industries to generate grounded responses with compliance controls.
- To see an example of grounding, run the "Intro to grounding" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub In generative AI, grounding is the ability to connect model output to verifiable sources of information.
- Grounding with Parallel web search Connect Gemini to an LLM-optimized web index to use the most recent information from the web.
- You can ground supported-model output in Vertex AI in the following ways: Grounding type Description Grounding with Google Search Connect your model to world knowledge and a wide possible range of topics using results from Google's search engine.

### "Grounding with Vertex AI Search \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search)
- Source ID: `site-docs-root`
- Final score: 215
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent" Select-Object -Expand Content You should receive a JSON response similar to the following: { "candidates": [ { "content": { "role": "model", "parts": [ { "text": "You can make an appointment on the website https://dmv.gov/" } ] }, "finishReason": "STOP", "safetyRatings": [ "..." ], "groundingMetadata": { "retrievalQueries": [ "How to make appointment to renew driving license?" ], "groundingChunks": [ { "retrievedContext": { "uri": "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AXiHM.....QTN92V5ePQ==", "title": "dmv" } } ], "groundingSupport": [ { "segment": { "startIndex": 25, "endIndex": 147 }, "segment text": "ipsum lorem ...", "supportChunkIndices": [1, 2], "confidenceScore": [0.9541752, 0.97726375] }, { "segment": { "startIndex": 294, "endIndex": 439 }, "segment text": "ipsum lorem ...", "supportChunkIndices": [1], "confidenceScore": [0.9541752, 0.9325467] } ] } } ], "usageMetadata": { "..." } } Understand your response The response from both APIs include the LLM-generated text, which is called a candidate .
- HTTP method and URL: POST https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent Request JSON body: { "contents": [{ "role": "user", "parts": [{ "text": " PROMPT " }] }], "tools": [{ "retrieval": { "vertexAiSearch": { "datastore": projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATASTORE ID } } }], "model": "projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID " } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- Client ( http options = HttpOptions ( api version = "v1" )) Replace with your Vertex AI Search data store details DATASTORE PATH = "projects/ PROJECT ID /locations/global/collections/default collection/dataStores/DATASTORE ID" tool = Tool ( retrieval = Retrieval ( vertex ai search = VertexAISearch ( datastore = DATASTORE PATH ) ) ) response = client . models . generate content ( model = "gemini-2.5-flash" , # Or another supported model contents = "What information can you find about topic X in the provided documents?" , # Your query config = GenerateContentConfig ( tools = [ tool ], ), ) print ( response . text ) REST To test a text prompt by using the Vertex AI API, send a POST request to the publisher model endpoint.
- If your model prompt successfully grounds to your data source, then the responses include grounding metadata, which identifies the parts of the response that were derived from your data.

