---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.697Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Cross-project copy of tuned Gemini adapter models"
feature_slug: "cross-project-copy-of-tuned-gemini-adapter-models"
latest_feature_date: "2024-12-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deploy/overview"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-use"
keywords:
  - "cross"
  - "project"
  - "copy"
  - "of"
  - "tuned"
  - "gemini"
  - "adapter"
  - "models"
---

# Cross-project copy of tuned Gemini adapter models

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Tuned Gemini 1.5 Pro 002 and Gemini 1.5 Flash 002 adapter models can be copied across projects.

## Extended Definition

Tuned Gemini 1.5 Pro 002 and Gemini 1.5 Flash 002 adapter models can be copied across projects.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deploy/overview](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deploy/overview)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-use](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-use)

## Supporting Pages

### "Context Caching for Fine-tuned Gemini Models \_|\_ Generative AI on Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini)
- Source ID: `site-docs-root`
- Final score: 209
- Re-rank relevance: N/A

Evidence snippets:
- Make sure that you have the following information: The ID and the version of the tuned Gemini model The endpoint resource name for the deployed fine-tuned model Supported versions Fine-tuned Gemini models support implicit caching for the following versions: Gemini 3.1 Pro Gemini 3.1 Flash-Lite Gemini 3 Pro Gemini 3 Flash Gemini 2.5 Pro Gemini 2.5 Flash Gemini 2.5 Flash-Lite Explicit caching is supported for the following versions: Gemini 3.1 Pro Gemini 3.1 Flash-Lite Gemini 3 Pro Gemini 3 Flash Gemini 2.5 Pro Gemini 2.5 Flash Gemini 2.5 Flash-Lite Gemini 2.0 Flash (note: not supported in gemini-2.0-flash-live-preview-04-09 ) Gemini 2.0 Flash-Lite Create a context cache for a fine-tuned model The procedure for creating a context cache for a fine-tuned model largely follows the steps outlined in Create a context cache .
- Instead of sending the request to the base model endpoint in the form of projects/{PROJECT}/locations/{LOCATION}/publishers/google/models/{MODEL} , you must send it to the endpoint of your deployed fine-tuned model in the form of projects/{PROJECT}/locations/{LOCATION}/endpoints/{ENDPOINT ID} .
- Instead of using the base model in the form of projects/{PROJECT}/locations/{LOCATION}/publishers/google/models/{MODEL} , you must use your fine-tuned model in the form of projects/{PROJECT}/locations/{LOCATION}/models/{MODEL}@{VERSION} .
- You can use context caching for your fine-tuned Gemini models to improve performance and reduce costs for prompts that include large amounts of context.

### "Deploy generative AI models \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deploy/overview](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deploy/overview)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- There are two types of generative models that must be deployed: Tuned models , which you create by tuning a supported foundation model with your own data.
- Go to Model Garden Each model card displays one or more of the following deployment options: Deploy button: Most of the generative models in the Model Garden have a Deploy button that walks you through deploying to Vertex AI.
- The tuned model's endpoint is in the format: https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /endpoints/ ENDPOINT ID To get the endpoint ID, see View or manage an endpoint .
- Deploy a tuned model Tuned models are automatically uploaded to the Vertex AI Model Registry and deployed to a Vertex AI shared public endpoint .

### "Generative AI glossary \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- For more information, see Include few-shot examples . foundation model (FM) Models trained on broad data such that they can be adapted (for example, fine-tuned) to a wide range of downstream tasks.
- Gemini Gemini is a set of Google's large sequence-based multimodal models.
- Examples include learning rate, dropout rate, and number of training steps. partition In Slurm, a logical grouping of nodes, often used to separate nodes with different hardware configurations. performance tier A configuration setting for a Managed Lustre instance that defines its throughput speed (in MBps per TiB) and affects its minimum and maximum capacity. perplexity Perplexity is a metric used to evaluate the performance of language models.
- The format is as follows: projects/PROJECT ID OR NUMBER/locations/REGION/tensorboards/TENSORBOARD INSTANCE ID. time offset Time offset is relative to the beginning of a video. time series metrics Time series metrics are longitudinal metric values where each value represents a step in the training routine portion of a run.

### "Use a context cache \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-use](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-use)
- Source ID: `site-docs-root`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- GOOGLE CLOUD LOCATION 'global' ; async function useContentCache ( projectId = GOOGLE CLOUD PROJECT , location = GOOGLE CLOUD LOCATION , cacheName = 'example-cache' ) { const client = new GoogleGenAI ({ vertexai : true , project : projectId , location : location , httpOptions : { apiVersion : 'v1' , }, }); const response = await client . models . generateContent ({ model : 'gemini-2.5-flash' , contents : 'Summarize the pdfs' , config : { cachedContent : cacheName , }, }); console . log ( response . text ); return response . text ; } // Example response // The Gemini family of multimodal models from Google DeepMind demonstrates remarkable capabilities across various // modalities , including image , audio , video , and text ....
- Client ( http options = HttpOptions ( api version = "v1" )) Use content cache to generate text response E.g cache name = 'projects/.../locations/.../cachedContents/1111111111111111111' response = client . models . generate content ( model = "gemini-2.5-flash" , contents = "Summarize the pdfs" , config = GenerateContentConfig ( cached content = cache name , ), ) print ( response . text ) Example response The Gemini family of multimodal models from Google DeepMind demonstrates remarkable capabilities across various modalities, including image, audio, video, and text....
- Response { "candidates": [ { "content": { "role": "model", "parts": [ { "text": " MODEL RESPONSE " } ] }, "finishReason": "STOP", "safetyRatings": [ { "category": "HARM CATEGORY HATE SPEECH", "probability": "NEGLIGIBLE", "probabilityScore": 0.21866937, "severity": "HARM SEVERITY NEGLIGIBLE", "severityScore": 0.19946389 }, { "category": "HARM CATEGORY DANGEROUS CONTENT", "probability": "MEDIUM", "probabilityScore": 0.6880493, "severity": "HARM SEVERITY MEDIUM", "severityScore": 0.43374163 }, { "category": "HARM CATEGORY HARASSMENT", "probability": "NEGLIGIBLE", "probabilityScore": 0.4442634, "severity": "HARM SEVERITY LOW", "severityScore": 0.37903354 }, { "category": "HARM CATEGORY SEXUALLY EXPLICIT", "probability": "NEGLIGIBLE", "probabilityScore": 0.10502681, "severity": "HARM SEVERITY LOW", "severityScore": 0.28170192 } ] } ], "usageMetadata": { "promptTokenCount": 55927, "candidatesTokenCount": 105, "totalTokenCount": 56032 } } Example curl command LOCATION = "us-central1" MODEL ID = "gemini-2.0-flash-001" PROJECT ID = "test-project" curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https:// ${ LOCATION } -aiplatform.googleapis.com/v1/projects/ ${ PROJECT ID } /locations/ ${ LOCATION } /publishers/google/models/ ${ MODEL ID } :generateContent" -d \ '{ "cachedContent": "projects/${PROJECT NUMBER}/locations/${LOCATION}/cachedContents/${CACHE ID}", "contents": [ {"role":"user","parts":[{"text":"What are the benefits of exercise?"}]} ], "generationConfig": { "maxOutputTokens": 8192, "temperature": 1, "topP": 0.95, }, "safetySettings": [ { "category": "HARM CATEGORY HATE SPEECH", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY DANGEROUS CONTENT", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY SEXUALLY EXPLICIT", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY HARASSMENT", "threshold": "BLOCK MEDIUM AND ABOVE" } ], }' Learn how to update the expiration time of a context cache .
- HTTP method and URL: POST https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/gemini-2.0-flash-001:generateContent Request JSON body: { "cachedContent": "projects/ PROJECT NUMBER /locations/ LOCATION /cachedContents/ CACHE ID ", "contents": [ {"role":"user","parts":[{"text":" PROMPT TEXT "}]} ], "generationConfig": { "maxOutputTokens": 8192, "temperature": 1, "topP": 0.95, }, "safetySettings": [ { "category": "HARM CATEGORY HATE SPEECH", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY DANGEROUS CONTENT", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY SEXUALLY EXPLICIT", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY HARASSMENT", "threshold": "BLOCK MEDIUM AND ABOVE" } ], } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

