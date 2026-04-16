---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.630Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Vertex AI RAG Engine Serverless mode"
feature_slug: "vertex-ai-rag-engine-serverless-mode"
latest_feature_date: "2026-04-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/rag-engine/rag-quickstart"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest"
keywords:
  - "vertex"
  - "ai"
  - "rag"
  - "engine"
  - "serverless"
  - "mode"
  - "fully"
  - "managed"
---

# Vertex AI RAG Engine Serverless mode

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

A fully managed database mode for Vertex AI RAG Engine that abstracts database provisioning and scaling.

## Extended Definition

A fully managed database mode for Vertex AI RAG Engine that abstracts database provisioning and scaling.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/rag-engine/rag-quickstart](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/rag-engine/rag-quickstart)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest)

## Supporting Pages

### "Generative AI glossary \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- Source ID: `site-docs-root`
- Final score: 288
- Re-rank relevance: N/A

Evidence snippets:
- Vertex AI offers a suite of APIs to help you build your own Retrieval Augmented Generation (RAG) applications or to build your own Search engine.
- For more information, see Use Vertex AI Search as a retrieval backend using RAG Engine .
- Examples include learning rate, dropout rate, and number of training steps. partition In Slurm, a logical grouping of nodes, often used to separate nodes with different hardware configurations. performance tier A configuration setting for a Managed Lustre instance that defines its throughput speed (in MBps per TiB) and affects its minimum and maximum capacity. perplexity Perplexity is a metric used to evaluate the performance of language models.
- Similarity search queries are issued to a specific index and will search over the vectors in that index. inference In the context of the Vertex AI platform, inference refers to the process of running data points through a machine learning model to calculate an output, such as a single numerical score.

### RAG quickstart \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/rag-engine/rag-quickstart](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/rag-engine/rag-quickstart)
- Source ID: `site-docs-root`
- Final score: 287
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Generate content. { "contents": { "role": "USER", "parts": { "text": " INPUT PROMPT " } }, "tools": { "retrieval": { "disable attribution": false, "vertex rag store": { "rag resources": { "rag corpus": " RAG CORPUS RESOURCE " }, "similarity top k": " SIMILARITY TOP K ", "vector distance threshold": VECTOR DISTANCE THRESHOLD } } } } curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/MODEL ID:GENERATION METHOD" For more information, see RAG Engine API .
- To see an example of using RAG Engine, run the "Intro to RAG Engine in Vertex AI" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub Important: By default, a RAG corpus uses RagManagedDb .
- For more information, see the Python API reference documentation . from vertexai import rag from vertexai.generative models import GenerativeModel , Tool import vertexai Create a RAG Corpus, Import Files, and Generate a response TODO(developer): Update and un-comment below lines PROJECT ID = "your-project-id" display name = "test corpus" paths = ["https://drive.google.com/file/d/123", "gs://my bucket/my files dir"] # Supports Google Cloud Storage and Google Drive Links Initialize Vertex AI API once per session vertexai . init ( project = PROJECT ID , location = "us-east4" ) Create RagCorpus Configure embedding model, for example "text-embedding-005". embedding model config = rag .
- Run a RAG retrieval query. export RAG CORPUS RESOURCE= RAG CORPUS RESOURCE export VECTOR DISTANCE THRESHOLD= VECTOR DISTANCE THRESHOLD export SIMILARITY TOP K= SIMILARITY TOP K { "vertex rag store": { "rag resources": { "rag corpus": " RAG CORPUS RESOURCE " }, "vector distance threshold": VECTOR DISTANCE THRESHOLD }, "query": { "text": TEXT "similarity top k": SIMILARITY TOP K } } curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION :retrieveContexts" For more information, see RAG Engine API .

### "Grounding with Vertex AI Search \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-vertex-ai-search)
- Source ID: `site-docs-root`
- Final score: 279
- Re-rank relevance: N/A

Evidence snippets:
- Grounding Gemini to your data If you want to do retrieval-augmented generation (RAG), connect your model to your website data or your sets of documents, then use Grounding with Vertex AI Search .
- Select a grounding source option from the following table: Grounding option Description Input Vertex AI RAG Engine Grounds using your data and do-it-yourself components.
- Vertex AI Search Grounds using your data with a Google-managed search engine.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent" Select-Object -Expand Content You should receive a JSON response similar to the following: { "candidates": [ { "content": { "role": "model", "parts": [ { "text": "You can make an appointment on the website https://dmv.gov/" } ] }, "finishReason": "STOP", "safetyRatings": [ "..." ], "groundingMetadata": { "retrievalQueries": [ "How to make appointment to renew driving license?" ], "groundingChunks": [ { "retrievedContext": { "uri": "https://vertexaisearch.cloud.google.com/grounding-api-redirect/AXiHM.....QTN92V5ePQ==", "title": "dmv" } } ], "groundingSupport": [ { "segment": { "startIndex": 25, "endIndex": 147 }, "segment text": "ipsum lorem ...", "supportChunkIndices": [1, 2], "confidenceScore": [0.9541752, 0.97726375] }, { "segment": { "startIndex": 294, "endIndex": 439 }, "segment text": "ipsum lorem ...", "supportChunkIndices": [1], "confidenceScore": [0.9541752, 0.9325467] } ] } } ], "usageMetadata": { "..." } } Understand your response The response from both APIs include the LLM-generated text, which is called a candidate .

### "Vertex AI GenAI API \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/rest)
- Source ID: `site-api-reference`
- Final score: 261
- Re-rank relevance: N/A

Evidence snippets:
- REST Resource: v1beta1.projects.locations.cachedContents Methods create POST /v1beta1/{parent}/cachedContents Creates cached content, this call will initialize the cached content in the data storage, and users need to pay for the cache data storage. delete DELETE /v1beta1/{name} Deletes cached content get GET /v1beta1/{name} Gets cached content configurations list GET /v1beta1/{parent}/cachedContents Lists cached contents in a project patch PATCH /v1beta1/{cachedContent.name} Updates cached content configurations REST Resource: v1beta1.projects.locations.endpoints Methods computeTokens POST /v1beta1/{endpoint}:computeTokens Return a list of tokens based on the input text. countTokens POST /v1beta1/{endpoint}:countTokens Perform a token counting. fetchPredictOperation POST /v1beta1/{endpoint}:fetchPredictOperation Fetch an asynchronous online prediction operation. generateContent POST /v1beta1/{model}:generateContent Generate content with multimodal inputs. getIamPolicy POST /v1beta1/{resource}:getIamPolicy Gets the access control policy for a resource. predict POST /v1beta1/{endpoint}:predict Request message for running inference on Google's generative AI models on Vertex AI. predictLongRunning POST /v1beta1/{endpoint}:predictLongRunning rawPredict POST /v1beta1/{endpoint}:rawPredict Perform an online prediction with an arbitrary HTTP payload. serverStreamingPredict POST /v1beta1/{endpoint}:serverStreamingPredict Perform a server-side streaming online prediction request for Vertex LLM streaming. setIamPolicy POST /v1beta1/{resource}:setIamPolicy Sets the access control policy on the specified resource. streamGenerateContent POST /v1beta1/{model}:streamGenerateContent Generate content with multimodal inputs with streaming support. streamRawPredict POST /v1beta1/{endpoint}:streamRawPredict Perform a streaming online prediction with an arbitrary HTTP payload. testIamPermissions POST /v1beta1/{resource}:testIamPermissions Returns permissions that a caller has on the specified resource.
- REST Resource: v1.projects.locations.cachedContents Methods create POST /v1/{parent}/cachedContents Creates cached content, this call will initialize the cached content in the data storage, and users need to pay for the cache data storage. delete DELETE /v1/{name} Deletes cached content get GET /v1/{name} Gets cached content configurations list GET /v1/{parent}/cachedContents Lists cached contents in a project patch PATCH /v1/{cachedContent.name} Updates cached content configurations REST Resource: v1.projects.locations.endpoints Methods computeTokens POST /v1/{endpoint}:computeTokens Return a list of tokens based on the input text. countTokens POST /v1/{endpoint}:countTokens Perform a token counting. fetchPredictOperation POST /v1/{endpoint}:fetchPredictOperation Fetch an asynchronous online prediction operation. generateContent POST /v1/{model}:generateContent Generate content with multimodal inputs. predict POST /v1/{endpoint}:predict Request message for running inference on Google's generative AI models on Vertex AI. predictLongRunning POST /v1/{endpoint}:predictLongRunning rawPredict POST /v1/{endpoint}:rawPredict Perform an online prediction with an arbitrary HTTP payload. serverStreamingPredict POST /v1/{endpoint}:serverStreamingPredict Perform a server-side streaming online prediction request for Vertex LLM streaming. streamGenerateContent POST /v1/{model}:streamGenerateContent Generate content with multimodal inputs with streaming support. streamRawPredict POST /v1/{endpoint}:streamRawPredict Perform a streaming online prediction with an arbitrary HTTP payload.
- REST Resource: v1beta1.projects.locations.publishers.models Methods computeTokens POST /v1beta1/{endpoint}:computeTokens Return a list of tokens based on the input text. countTokens POST /v1beta1/{endpoint}:countTokens Perform a token counting. embedContent POST /v1beta1/{model}:embedContent Embed content with multimodal inputs. fetchPredictOperation POST /v1beta1/{endpoint}:fetchPredictOperation Fetch an asynchronous online prediction operation. generateContent POST /v1beta1/{model}:generateContent Generate content with multimodal inputs. getIamPolicy POST /v1beta1/{resource}:getIamPolicy Gets the access control policy for a resource. predict POST /v1beta1/{endpoint}:predict Request message for running inference on Google's generative AI models on Vertex AI. predictLongRunning POST /v1beta1/{endpoint}:predictLongRunning rawPredict POST /v1beta1/{endpoint}:rawPredict Perform an online prediction with an arbitrary HTTP payload. serverStreamingPredict POST /v1beta1/{endpoint}:serverStreamingPredict Perform a server-side streaming online prediction request for Vertex LLM streaming. streamGenerateContent POST /v1beta1/{model}:streamGenerateContent Generate content with multimodal inputs with streaming support. streamRawPredict POST /v1beta1/{endpoint}:streamRawPredict Perform a streaming online prediction with an arbitrary HTTP payload.
- REST Resource: v1beta1.projects.locations Methods askContexts POST /v1beta1/{parent}:askContexts Agentic Retrieval Ask API for RAG. asyncRetrieveContexts POST /v1beta1/{parent}:asyncRetrieveContexts Asynchronous API to retrieves relevant contexts for a query. augmentPrompt POST /v1beta1/{parent}:augmentPrompt Given an input prompt, it returns augmented prompt from vertex rag store to guide LLM towards generating grounded responses. corroborateContent POST /v1beta1/{parent}:corroborateContent Given an input text, it returns a score that evaluates the factuality of the text. evaluateDataset POST /v1beta1/{location}:evaluateDataset Evaluates a dataset based on a set of given metrics. evaluateInstances POST /v1beta1/{location}:evaluateInstances Evaluates instances based on a given metric. generateInstanceRubrics POST /v1beta1/{location}:generateInstanceRubrics Generates rubrics for a given prompt. generateSyntheticData POST /v1beta1/{location}:generateSyntheticData Generates synthetic (artificial) data based on a description getRagEngineConfig GET /v1beta1/{name} Gets a RagEngineConfig. retrieveContexts POST /v1beta1/{parent}:retrieveContexts Retrieves relevant contexts for a query. updateRagEngineConfig PATCH /v1beta1/{ragEngineConfig.name} Updates a RagEngineConfig.

