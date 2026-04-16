---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.698Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Gemini 2.0 Flash"
feature_slug: "gemini-2-0-flash"
latest_feature_date: "2024-12-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/faq"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/control-model-access"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/web-grounding-enterprise"
keywords:
  - "gemini"
  - "flash"
  - "model"
  - "that"
  - "is"
  - "generally"
  - "available"
  - "for"
---

# Gemini 2.0 Flash

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

A Gemini 2.0 model that is generally available for grounded answer generation with RAG.

## Extended Definition

A Gemini 2.0 model that is generally available for grounded answer generation with RAG.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/faq](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/faq)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/control-model-access](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/control-model-access)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/web-grounding-enterprise](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/web-grounding-enterprise)

## Supporting Pages

### "Context Caching for Fine-tuned Gemini Models \_|\_ Generative AI on Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini)
- Source ID: `site-docs-root`
- Final score: 256
- Re-rank relevance: N/A

Evidence snippets:
- Make sure that you have the following information: The ID and the version of the tuned Gemini model The endpoint resource name for the deployed fine-tuned model Supported versions Fine-tuned Gemini models support implicit caching for the following versions: Gemini 3.1 Pro Gemini 3.1 Flash-Lite Gemini 3 Pro Gemini 3 Flash Gemini 2.5 Pro Gemini 2.5 Flash Gemini 2.5 Flash-Lite Explicit caching is supported for the following versions: Gemini 3.1 Pro Gemini 3.1 Flash-Lite Gemini 3 Pro Gemini 3 Flash Gemini 2.5 Pro Gemini 2.5 Flash Gemini 2.5 Flash-Lite Gemini 2.0 Flash (note: not supported in gemini-2.0-flash-live-preview-04-09 ) Gemini 2.0 Flash-Lite Create a context cache for a fine-tuned model The procedure for creating a context cache for a fine-tuned model largely follows the steps outlined in Create a context cache .
- HTTP method and URL: POST https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /cachedContents Request JSON body: { "model": "projects/ PROJECT ID /locations/ LOCATION /models/ MODEL ID @ MODEL VERSION ", "displayName": " CACHE DISPLAY NAME ", "contents": [{ "role": "user", "parts": [{ "fileData": { "mimeType": " MIME TYPE ", "fileUri": " CONTENT TO CACHE URI " } }] }] } To send your request, choose one of these options: curl Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- You can use context caching for your fine-tuned Gemini models to improve performance and reduce costs for prompts that include large amounts of context.
- Consult the linked documentation for the general process; this guide focuses on the difference of creating context cache for fine-tuned Gemini models.

### "Frequently asked questions \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/faq](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/faq)
- Source ID: `site-docs-root`
- Final score: 234
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table shows the comparison between our Gemini 2 models: Model name Description Upgrade path for Gemini 2.5 Pro Strongest model quality (especially for code and world knowledge), with a 1M token-long context window Gemini 1.5 Pro users who want better quality, or who are particularly invested in long context and code Gemini 2.0 Flash Workhorse model for all daily tasks and features enhanced performance and supports real-time Live API Gemini 1.5 Flash users who want a model with significantly better quality that's slightly slower Gemini 1.5 Pro users who want slightly better quality and real-time latency Gemini 2.0 Flash-Lite Our most cost effective offering to support high throughput Gemini 1.5 Flash users who want better quality for the same price and speed Customers looking for the fastest model in the Gemini 2 family To see all benchmark capabilities for Gemini 2, visit the Google DeepMind documentation .
- While the experimental version of Gemini 2.0 Flash supports image generation, Gemini 2 does not currently support image generation in our generally available models.
- Repetitive tool calling This can occur if the model loses the context of previous thoughts and/or call an unavailable endpoint that it's forced to.
- For the full list of locations that are supported for Gemini 2 models, see Locations .

### "Control access to Model Garden models \_|\_ Generative AI on Vertex AI \_\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/control-model-access](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/control-model-access)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- Allow a set of models and deny all other models The following example allows actions on a specific set of models. name : organizations/ ORGANIZATION ID /policies/vertexai.allowedModels spec : rules : values : allowedValues : - publishers/meta/models/llama3:deploy - publishers/google/models/gemini-2.0-flash-001:tune - publishers/hf-google/models/gemma-2b:deploy Enable web search for partner models To enable the web search feature for partner models, you can specify the following: All features for all models from a specific publisher, for example: publishers/anthropic All features for a specific model, for example: publishers/anthropic/models/ MODEL NAME The web search feature for a specific model, for example: publishers/anthropic/models/ MODEL NAME :web search The following example enables web search for all models from Anthropic: name : organizations/ ORGANIZATION ID /policies/vertexai.allowedPartnerModelFeatures spec : rules : values : allowedValues : Allow all features of this publisher - publishers/anthropic Allow all features of this model - publishers/anthropic/models/ MODEL NAME Allow this feature - publishers/anthropic/models/ MODEL NAME :web search What's next Guide Use models in Model Garden Use generative models from Model Garden in the Google Cloud Console.
- For example, to define a policy rule on predictions against the Gemini 2.0 Flash model, specify publishers/google/models/gemini-2.0-flash-001:predict .
- Deny a set of models and allow all other models The following example denies actions on a specific set of models. name : organizations/ ORGANIZATION ID /policies/vertexai.allowedModels spec : rules : values : deniedValues : - publishers/meta/models/llama3:deploy - publishers/google/models/gemini-2.0-flash-001:tune - publishers/hf-google/models/gemma-2b:deploy Replace ORGANIZATION ID with the ID of your Google Cloud organization.
- To specify models in a custom policy and a model action , use the following format: publishers/ PUBLISHER /models/ MODEL NAME : ACTION Replace the following: PUBLISHER : the name of the publisher who owns the model that your policy applies to.

### "Web Grounding for Enterprise \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/web-grounding-enterprise](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/grounding/web-grounding-enterprise)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- PROMPT : Your prompt. curl -X POST -H "Authorization: Bearer $( gcloud auth print-access-token ) " -H "Content-Type: application/json" -H "x-server-timeout: 60" https:// LOCATION -aiplatform.googleapis.com/v1/projects/ PROJECT NUMBER /locations/ LOCATION /publishers/google/models/gemini-2.0-flash:generateContent -d ' { "contents": [{ "role": "user", "parts": [{ "text": PROMPT }] }], "tools": [{ "enterpriseWebSearch": { } }] } ' Use Google Search suggestions When you use Web Grounding for Enterprise, and you receive Search suggestions in your response, you must display the Search suggestions in production and in your applications.
- Client ( http options = HttpOptions ( api version = "v1" )) response = client . models . generate content ( model = "gemini-2.5-flash" , contents = "When is the next total solar eclipse in the United States?" , config = GenerateContentConfig ( tools = [ Use Enterprise Web Search Tool Tool ( enterprise web search = EnterpriseWebSearch ()) ], ), ) print ( response . text ) Example response: 'The next total solar eclipse in the United States will occur on ...' REST Replace the following variables with values: PROJECT NUMBER : Your project number.
- For example, in the following code snippet, Gemini responds to a Search grounded prompt, which asks about a type of tropical plant. "predictions" : [ { "content" : "Monstera is a type of vine that thrives in bright indirect light…" , "groundingMetadata" : { "webSearchQueries" : [ "What's a monstera?" ], } } ] You can take this output, and display it by using Search suggestions.
- Supported models This section lists the models that support Web Grounding for Enterprise.

