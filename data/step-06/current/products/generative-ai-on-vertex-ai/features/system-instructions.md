---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.730Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "System instructions"
feature_slug: "system-instructions"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/gemini-3-prompting-guide"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-use"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai"
keywords:
  - "system"
  - "instructions"
  - "let"
  - "you"
  - "guide"
  - "gemini"
  - "model"
  - "behavior"
---

# System instructions

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

System instructions let you guide Gemini model behavior and are supported in preview.

## Extended Definition

System instructions let you guide Gemini model behavior and are supported in preview.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/gemini-3-prompting-guide](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/gemini-3-prompting-guide)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-use](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-use)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)

## Supporting Pages

### "Gemini 3 prompting guide \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/gemini-3-prompting-guide](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/start/gemini-3-prompting-guide)
- Source ID: `site-docs-root`
- Final score: 240
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Distinguishing between deduction and external information In some cases, providing open-ended system instructions like do not infer or do not guess may cause the model to over-index on that instruction and fail to perform basic logic or arithmetic or synthesize information found in different parts of a document.
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI Guides Send feedback Gemini 3 prompting guide Stay organized with collections Save and categorize content based on your preferences.
- This guide provides a variety of prompting strategies to help you get the most from Gemini 3 on Vertex AI for a variety of use cases.
- Prompting strategies The following sections describe a variety of prompting strategies that you can use with Gemini 3 models.

### "Context Caching for Fine-tuned Gemini Models \_|\_ Generative AI on Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- When you use a context cache, you can't specify the following properties: GenerativeModel.system instructions GenerativeModel.tool config GenerativeModel.tools REST You can use REST to specify a context cache with a prompt by using the Vertex AI API to send a POST request to the publisher model endpoint.
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI Guides Send feedback Context Caching for Fine-tuned Gemini Models Stay organized with collections Save and categorize content based on your preferences.
- Make sure that you have the following information: The ID and the version of the tuned Gemini model The endpoint resource name for the deployed fine-tuned model Supported versions Fine-tuned Gemini models support implicit caching for the following versions: Gemini 3.1 Pro Gemini 3.1 Flash-Lite Gemini 3 Pro Gemini 3 Flash Gemini 2.5 Pro Gemini 2.5 Flash Gemini 2.5 Flash-Lite Explicit caching is supported for the following versions: Gemini 3.1 Pro Gemini 3.1 Flash-Lite Gemini 3 Pro Gemini 3 Flash Gemini 2.5 Pro Gemini 2.5 Flash Gemini 2.5 Flash-Lite Gemini 2.0 Flash (note: not supported in gemini-2.0-flash-live-preview-04-09 ) Gemini 2.0 Flash-Lite Create a context cache for a fine-tuned model The procedure for creating a context cache for a fine-tuned model largely follows the steps outlined in Create a context cache .
- You can use context caching for your fine-tuned Gemini models to improve performance and reduce costs for prompts that include large amounts of context.

### "Use a context cache \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-use](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-use)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When you use a context cache, you can't specify the following properties: GenerativeModel.system instructions GenerativeModel.tool config GenerativeModel.tools Python Install pip install --upgrade google-genai To learn more, see the SDK reference documentation .
- You shouldn't specify them again in your request: The GenerativeModel.system instructions property.
- HTTP method and URL: POST https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /publishers/google/models/gemini-2.0-flash-001:generateContent Request JSON body: { "cachedContent": "projects/ PROJECT NUMBER /locations/ LOCATION /cachedContents/ CACHE ID ", "contents": [ {"role":"user","parts":[{"text":" PROMPT TEXT "}]} ], "generationConfig": { "maxOutputTokens": 8192, "temperature": 1, "topP": 0.95, }, "safetySettings": [ { "category": "HARM CATEGORY HATE SPEECH", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY DANGEROUS CONTENT", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY SEXUALLY EXPLICIT", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY HARASSMENT", "threshold": "BLOCK MEDIUM AND ABOVE" } ], } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- This client only needs to be created // once , and can be reused for multiple requests . try ( Client client = Client . builder () . location ( "global" ) . vertexAI ( true ) . httpOptions ( HttpOptions . builder () . apiVersion ( "v1" ) . build ()) . build ()) { GenerateContentResponse response = client . models . generateContent ( modelId , "Summarize the pdfs" , GenerateContentConfig . builder () . cachedContent ( cacheName ) . build ()); System . out . println ( response . text ()); // Example response // The Gemini family of multimodal models from Google DeepMind demonstrates remarkable // capabilities across various // modalities , including image , audio , video , and text .... return response . text (); } } } Node.js Install npm install @google/genai To learn more, see the SDK reference documentation .

### "Generative AI glossary \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/glossary-genai)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Unlike the pay-as-you-go (on-demand) option, PT lets customers purchase a dedicated quota, ensuring their requests don't compete with others for model capacity.
- Prompts can contain questions, instructions, contextual information, few-shot examples, and partial input for the model to complete or continue.
- Vertex AI Inference A Vertex AI service that lets you use a trained machine learning (ML) model to make inferences from new, unseen data.
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI Guides Send feedback Generative AI glossary Stay organized with collections Save and categorize content based on your preferences. agent In the context of generative AI, an agent is software that autonomously plans and executes a series of actions in pursuit of a goal, potentially in novel situations.

