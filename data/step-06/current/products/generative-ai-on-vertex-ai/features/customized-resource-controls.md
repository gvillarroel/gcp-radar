---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.665Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Customized resource controls"
feature_slug: "customized-resource-controls"
latest_feature_date: "2025-08-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/rag-engine/rag-quickstart"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/deploy-vais-prompt"
keywords:
  - "customized"
  - "resource"
  - "controls"
  - "agent"
  - "engine"
  - "supports"
  - "for"
  - "application"
---

# Customized resource controls

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Agent Engine supports customized resource controls for application instances, container limits, and concurrency.

## Extended Definition

Agent Engine supports customized resource controls for application instances, container limits, and concurrency.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/rag-engine/rag-quickstart](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/rag-engine/rag-quickstart)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/deploy-vais-prompt](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/deploy-vais-prompt)

## Supporting Pages

### RAG quickstart \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/rag-engine/rag-quickstart](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/rag-engine/rag-quickstart)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run a RAG retrieval query. export RAG CORPUS RESOURCE= RAG CORPUS RESOURCE export VECTOR DISTANCE THRESHOLD= VECTOR DISTANCE THRESHOLD export SIMILARITY TOP K= SIMILARITY TOP K { "vertex rag store": { "rag resources": { "rag corpus": " RAG CORPUS RESOURCE " }, "vector distance threshold": VECTOR DISTANCE THRESHOLD }, "query": { "text": TEXT "similarity top k": SIMILARITY TOP K } } curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION :retrieveContexts" For more information, see RAG Engine API .
- Generate content. { "contents": { "role": "USER", "parts": { "text": " INPUT PROMPT " } }, "tools": { "retrieval": { "disable attribution": false, "vertex rag store": { "rag resources": { "rag corpus": " RAG CORPUS RESOURCE " }, "similarity top k": " SIMILARITY TOP K ", "vector distance threshold": VECTOR DISTANCE THRESHOLD } } } } curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/MODEL ID:GENERATION METHOD" For more information, see RAG Engine API .
- Import a RAG file. // ImportRagFiles // Import a single Cloud Storage file or all files in a Cloud Storage bucket. // Input: LOCATION, PROJECT ID, RAG CORPUS ID, GCS URIS export RAG CORPUS ID= RAG CORPUS ID export GCS URIS= GCS URIS export CHUNK SIZE= CHUNK SIZE export CHUNK OVERLAP= CHUNK OVERLAP export EMBEDDING MODEL QPM RATE= EMBEDDING MODEL QPM RATE // Output: ImportRagFilesOperationMetadataNumber // Use ListRagFiles, or import result sink to get the correct rag file id. curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /ragCorpora/ RAG CORPUS ID /ragFiles:import \ -d '{ "import rag files config": { "gcs source": { "uris": " GCS URIS " }, "rag file chunking config": { "chunk size": CHUNK SIZE , "chunk overlap": CHUNK OVERLAP }, "max embedding requests per min": EMBEDDING MODEL QPM RATE } }' For more information, see Import RAG files example .
- For more information, see the Python API reference documentation . from vertexai import rag from vertexai.generative models import GenerativeModel , Tool import vertexai Create a RAG Corpus, Import Files, and Generate a response TODO(developer): Update and un-comment below lines PROJECT ID = "your-project-id" display name = "test corpus" paths = ["https://drive.google.com/file/d/123", "gs://my bucket/my files dir"] # Supports Google Cloud Storage and Google Drive Links Initialize Vertex AI API once per session vertexai . init ( project = PROJECT ID , location = "us-east4" ) Create RagCorpus Configure embedding model, for example "text-embedding-005". embedding model config = rag .

### "Generative AI glossary \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Vertex AI Agent Engine Vertex AI Agent Engine, a part of the Vertex AI Platform, is a set of services that enables developers to deploy, manage, and scale AI agents in production.
- While training a Transformer requires significant resources, fine-tuning a pre-trained Transformer for specific applications is more efficient.
- Agent Engine handles the infrastructure to scale agents in production so you can focus on creating applications.
- For more information, see Vertex AI Agent Engine overview .

### "Grounding with Google Maps in Vertex AI \_|\_ Generative AI on Vertex AI\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/grounding-with-google-maps)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- This data gives you access to information on over 250 million places that can be used to ground your model's responses, enabling your AI applications and agents to provide local data and geospatial context.
- It has a rating of 4.2 stars based on 411 reviews." } ] }, "finishReason": "STOP", "groundingMetadata": { "groundingChunks": [ { "maps": { "uri": "https://maps.google.com/?cid=9001322937822692826", "title": "The Italian Place", "placeId": "places/ChIJOTRDf qwt4kR2kV WYUf63w" } }, { "maps": { "uri": "https://maps.google.com/?cid=9001322937822692826", "title": "Hank's Pasta Bar", "placeId": "places/MMVtPzn9FGcevML89", "placeAnswerSources": { "reviewSnippets": [ { "id": "places/ChIJOTRDf qwt4kR2kV WYUf63w", "title": "Google Maps Review", "uri": "https://maps.google.com/?cid=9001322937822692826" }, ] } } }, ... ], "groundingSupports": [ { "segment": { "endIndex": 79, "text": "\"The Italian Place\" in Alexandria, VA, is good for children and offers takeout." }, "groundingChunkIndices": [ 0 ] }, ], "googleMapsWidgetContextToken": "widgetcontent/..." } } ], ... } Place properties This section lists place properties that are used to describe locations and used by Grounding with Google Maps to generate responses.
- The Routing tool supports the following: Modes of transportation : Routing for driving, walking, bicycling, transit, and two-wheeled motorized vehicles (not all travel modes are available in all countries) Multiple waypoints : Up to 13 intermediate stops between origin and destination Real-time traffic : Accounting for current traffic conditions to provide accurate "live" travel times rather than static averages The following are examples of the types of questions that the Routing tool supports: Proximity based on travel time : "What are some American restaurants within a 10-minute walk from the Hilton Hotel on 1335 6th Ave in NYC?" Commute estimation : "How long does it take to take public transit from Pike Place Market to Capitol Hill in Seattle?" Understand the response When a prompt triggers the Routing tool, the model generates a natural language answer backed by structured metadata.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json ` -Uri "https:// LOCATION -aiplatform.googleapis.com/v1beta1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/ MODEL ID :generateContent" Select-Object -Expand Content You should receive a JSON response similar to the following: { "candidates": [ { "content": { "role": "model", "parts": [ { "text": "\"The Italian Place\" in Alexandria, VA, is good for children and offers takeout.

### "Quickstart: Deploy your Vertex AI Studio prompt as a web application \_\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/deploy-vais-prompt](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/deploy-vais-prompt)
- Source ID: `site-docs-root`
- Final score: 121
- Re-rank relevance: N/A

Evidence snippets:
- Required roles To get the permissions that you need to deploy a Vertex AI Studio prompt as a web application, ask your administrator to grant you the following IAM roles on your project: Vertex AI User ( roles/aiplatform.user ) Enable the required APIs: Service Usage Admin ( roles/serviceusage.serviceUsageAdmin ) Grant required roles to the Compute Engine default service account: Project IAM Admin ( roles/resourcemanager.projectIamAdmin ) Deploy a Cloud Run application: Cloud Run Admin ( roles/run.admin ) Cloud Run Source Developer ( roles/run.sourceDeveloper ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- In this quick start, you will: Create a prompt with prompt variables Deploy your prompt as a web application Monitor deployment progress and test the deployed application Update and re-deploy your prompt Test out prompt submission with multimodal supports Before you start If you have never used Vertex AI Studio before, you can follow another quickstart guide or take the Google Cloud Skills Boost course to learn the basics of Vertex AI Studio.
- Required roles for the deployment service account To ensure that Compute Engine default service account has the necessary permissions to execute builds on your behalf, ask your administrator to grant the following IAM roles to Compute Engine default service account on your project: Important: You must grant these roles to Compute Engine default service account , not to your user account.
- Vertex AI Service Agent ( roles/aiplatform.serviceAgent ) Cloud Build Service Account ( roles/cloudbuild.builds.builder ) For more information about granting roles, see Manage access to projects, folders, and organizations .

