---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.665Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Customer-managed encryption keys (CMEK)"
feature_slug: "customer-managed-encryption-keys-cmek"
latest_feature_date: "2025-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-create"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/web-grounding-enterprise"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/rag-engine/rag-quickstart"
keywords:
  - "customer"
  - "managed"
  - "encryption"
  - "keys"
  - "cmek"
  - "agent"
  - "engine"
  - "supports"
---

# Customer-managed encryption keys (CMEK)

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Agent Engine supports customer-managed encryption keys for protecting data at rest.

## Extended Definition

Agent Engine supports customer-managed encryption keys for protecting data at rest.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-create](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-create)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/web-grounding-enterprise](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/web-grounding-enterprise)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/rag-engine/rag-quickstart](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/rag-engine/rag-quickstart)

## Supporting Pages

### "Generative AI glossary \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- Source ID: `site-docs-root`
- Final score: 215
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Customer-managed encryption keys (CMEK) . consumer VPC network A consumer VPC network is a Google Cloud Virtual Private Cloud (VPC) that privately accesses a service hosted in another VPC (known as the producer VPC).
- Customer-managed encryption keys (cmek) Customer-managed encryption keys (CMEK) are integrations that allow customers to encrypt data in existing Google services using a key they manage in Cloud KMS (also known as Storky).
- Vertex AI Agent Engine Vertex AI Agent Engine, a part of the Vertex AI Platform, is a set of services that enables developers to deploy, manage, and scale AI agents in production.
- Slurm cluster A collection of Compute Engine instances, managed by Slurm, that includes a login node and multiple worker nodes configured for running training jobs.

### "Create a context cache \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-create](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-create)
- Source ID: `site-docs-root`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- Encryption key support Context caching supports Customer-Managed Encryption Keys (CMEKs), allowing you to control the encryption of your cached data and protect your sensitive information with encryption keys that you manage and own.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /cachedContents" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT NUMBER /locations/us-central1/cachedContents/ CACHE ID ", "model": "projects/ PROJECT ID /locations/us-central1/publishers/google/models/gemini-2.0-flash-001", "createTime": "2024-06-04T01:11:50.808236Z", "updateTime": "2024-06-04T01:11:50.808236Z", "expireTime": "2024-06-04T02:11:50.794542Z" } Example curl command LOCATION = "us-central1" MODEL ID = "gemini-2.0-flash-001" PROJECT ID = "test-project" MIME TYPE = "video/mp4" CACHED CONTENT URI = "gs://path-to-bucket/video-file-name.mp4" KMS KEY NAME = "projects/ ${ PROJECT ID } /locations/{LOCATION}/keyRings/your-key-ring/cryptoKeys/your-key" curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ https:// ${ LOCATION } -aiplatform.googleapis.com/v1/projects/ ${ PROJECT ID } /locations/ ${ LOCATION } /cachedContents -d \ '{ "model": "projects/{PROJECT ID}}/locations/{LOCATION}/publishers/google/models/{MODEL ID}", "contents" : [ { "role": "user", "parts": [ { "file data": { "mime type":"{MIME TYPE}", "file uri":"{CACHED CONTENT URI}" } } ] } ], "encryption spec" : { "kms key name":"{KMS KEY NAME}" } }' GenAI SDK for Python Install pip install --upgrade google-genai To learn more, see the SDK reference documentation .
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /cachedContents" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "name": "projects/ PROJECT NUMBER /locations/us-central1/cachedContents/ CACHE ID ", "model": "projects/ PROJECT ID /locations/us-central1/publishers/google/models/gemini-2.0-flash-001", "createTime": "2024-06-04T01:11:50.808236Z", "updateTime": "2024-06-04T01:11:50.808236Z", "expireTime": "2024-06-04T02:11:50.794542Z" } Example curl command LOCATION = "us-central1" MODEL ID = "gemini-2.0-flash-001" PROJECT ID = "test-project" MIME TYPE = "video/mp4" CACHED CONTENT URI = "gs://path-to-bucket/video-file-name.mp4" curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ https:// ${ LOCATION } -aiplatform.googleapis.com/v1/projects/ ${ PROJECT ID } /locations/ ${ LOCATION } /cachedContents -d \ '{ "model":"projects/${PROJECT ID}/locations/${LOCATION}/publishers/google/models/${MODEL ID}", "contents": [ { "role": "user", "parts": [ { "fileData": { "mimeType": "${MIME TYPE}", "fileUri": "${CACHED CONTENT URI}" } } ] } ] }' Create a context cache with CMEK To implement context caching with CMEKs, create a CMEK by following the instructions and make sure the Vertex AI per-product, per-project service account (P4SA) has the necessary Cloud KMS CryptoKey Encrypter/Decrypter permissions on the key.
- Now look at these research papers, and answer the following questions. """ contents = [ Content ( role = "user" , parts = [ Part . from uri ( file uri = "gs://cloud-samples-data/generative-ai/pdf/2312.11805v3.pdf" , mime type = "application/pdf" , ), Part . from uri ( file uri = "gs://cloud-samples-data/generative-ai/pdf/2403.05530.pdf" , mime type = "application/pdf" , ), ], ) ] content cache = client . caches . create ( model = "gemini-2.5-flash" , config = CreateCachedContentConfig ( contents = contents , system instruction = system instruction , (Optional) For enhanced security, the content cache can be encrypted using a Cloud KMS key kms key name = "projects/.../locations/.../keyRings/.../cryptoKeys/..." display name = "example-cache" , ttl = "86400s" , ), ) print ( content cache . name ) print ( content cache . usage metadata ) Example response: projects/111111111111/locations/.../cachedContents/1111111111111111111 CachedContentUsageMetadata(audio duration seconds=None, image count=167, text count=153, total token count=43130, video duration seconds=None) Go Learn how to install or update the Go .

### "Web Grounding for Enterprise \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/web-grounding-enterprise](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/web-grounding-enterprise)
- Source ID: `site-docs-root`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Because no customer data is persisted, customer-managed encryption keys (CMEK) and Access Transparency (AxT) aren't applicable.
- The service doesn't log customer data and supports VPC service controls.
- Index freshness and curation The web index of Web Grounding for Enterprise is automatically selected to meet the expected needs of customers in the healthcare, finance, and public sector verticals.
- Web Grounding for Enterprise : This solution is specifically designed for enterprise customers, who have stringent compliance requirements that include 'no logging of customer data'.

### RAG quickstart \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/rag-engine/rag-quickstart](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/rag-engine/rag-quickstart)
- Source ID: `site-docs-root`
- Final score: 78
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To see an example of using RAG Engine, run the "Intro to RAG Engine in Vertex AI" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub Important: By default, a RAG corpus uses RagManagedDb .
- The VPC-SC security controls and CMEK are supported by Vertex AI RAG Engine.
- For more information, see the Python API reference documentation . from vertexai import rag from vertexai.generative models import GenerativeModel , Tool import vertexai Create a RAG Corpus, Import Files, and Generate a response TODO(developer): Update and un-comment below lines PROJECT ID = "your-project-id" display name = "test corpus" paths = ["https://drive.google.com/file/d/123", "gs://my bucket/my files dir"] # Supports Google Cloud Storage and Google Drive Links Initialize Vertex AI API once per session vertexai . init ( project = PROJECT ID , location = "us-east4" ) Create RagCorpus Configure embedding model, for example "text-embedding-005". embedding model config = rag .
- Run a RAG retrieval query. export RAG CORPUS RESOURCE= RAG CORPUS RESOURCE export VECTOR DISTANCE THRESHOLD= VECTOR DISTANCE THRESHOLD export SIMILARITY TOP K= SIMILARITY TOP K { "vertex rag store": { "rag resources": { "rag corpus": " RAG CORPUS RESOURCE " }, "vector distance threshold": VECTOR DISTANCE THRESHOLD }, "query": { "text": TEXT "similarity top k": SIMILARITY TOP K } } curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION :retrieveContexts" For more information, see RAG Engine API .

