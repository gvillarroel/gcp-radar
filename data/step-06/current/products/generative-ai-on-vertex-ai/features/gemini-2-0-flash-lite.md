---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.691Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Gemini 2.0 Flash-Lite"
feature_slug: "gemini-2-0-flash-lite"
latest_feature_date: "2025-02-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/faq"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-overview"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/flex-paygo"
keywords:
  - "gemini"
  - "flash"
  - "lite"
  - "is"
  - "generally"
  - "available"
  - "preview"
  - "model"
---

# Gemini 2.0 Flash-Lite

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Gemini 2.0 Flash-Lite is generally available; A preview Gemini 2.0 Flash model in Vertex AI positioned as the fastest and most cost efficient option.

## Extended Definition

Gemini 2.0 Flash-Lite is generally available; A preview Gemini 2.0 Flash model in Vertex AI positioned as the fastest and most cost efficient option.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/faq](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/faq)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-overview](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-overview)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/flex-paygo](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/flex-paygo)

## Supporting Pages

### "Context Caching for Fine-tuned Gemini Models \_|\_ Generative AI on Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini)
- Source ID: `site-docs-root`
- Final score: 225
- Re-rank relevance: N/A

Evidence snippets:
- Make sure that you have the following information: The ID and the version of the tuned Gemini model The endpoint resource name for the deployed fine-tuned model Supported versions Fine-tuned Gemini models support implicit caching for the following versions: Gemini 3.1 Pro Gemini 3.1 Flash-Lite Gemini 3 Pro Gemini 3 Flash Gemini 2.5 Pro Gemini 2.5 Flash Gemini 2.5 Flash-Lite Explicit caching is supported for the following versions: Gemini 3.1 Pro Gemini 3.1 Flash-Lite Gemini 3 Pro Gemini 3 Flash Gemini 2.5 Pro Gemini 2.5 Flash Gemini 2.5 Flash-Lite Gemini 2.0 Flash (note: not supported in gemini-2.0-flash-live-preview-04-09 ) Gemini 2.0 Flash-Lite Create a context cache for a fine-tuned model The procedure for creating a context cache for a fine-tuned model largely follows the steps outlined in Create a context cache .
- Prerequisites Fine-tuning a Gemini Model: You need a deployed fine-tuned Gemini model based on a supported base model (see Context caching overview ).
- Consult the linked documentation for the general process; this guide focuses on the difference of creating context cache for fine-tuned Gemini models.
- Consult the linked documentation for the general process; this guide focuses on the difference of using context cache for fine-tuned Gemini models.

### "Frequently asked questions \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/faq](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/faq)
- Source ID: `site-docs-root`
- Final score: 209
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following table shows the comparison between our Gemini 2 models: Model name Description Upgrade path for Gemini 2.5 Pro Strongest model quality (especially for code and world knowledge), with a 1M token-long context window Gemini 1.5 Pro users who want better quality, or who are particularly invested in long context and code Gemini 2.0 Flash Workhorse model for all daily tasks and features enhanced performance and supports real-time Live API Gemini 1.5 Flash users who want a model with significantly better quality that's slightly slower Gemini 1.5 Pro users who want slightly better quality and real-time latency Gemini 2.0 Flash-Lite Our most cost effective offering to support high throughput Gemini 1.5 Flash users who want better quality for the same price and speed Customers looking for the fastest model in the Gemini 2 family To see all benchmark capabilities for Gemini 2, visit the Google DeepMind documentation .
- While the experimental version of Gemini 2.0 Flash supports image generation, Gemini 2 does not currently support image generation in our generally available models.
- If your application recently started showing errors related to an unavailable Palm2, Gemini 1.0, or Gemini 1.5-001 models, this document covers how you can transition to a supported model.
- The Gemini 2 models feature the following upgrades over our 1.5 models: Improved multilingual capabilities: Gemini 2 models show strong advancements in multilingual understanding, with increased scores in the Global MMLU (Lite) benchmark.

### "Context caching overview \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-overview](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-overview)
- Source ID: `site-docs-root`
- Final score: 189
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported models Explicit caching is supported when using the following models: Gemini 3.1 Flash-Lite preview Gemini 3.1 Pro preview Gemini 3 Flash preview Gemini 2.5 Pro Gemini 2.5 Flash preview Gemini 2.5 Flash-Lite preview Gemini 2.5 Flash Gemini 2.5 Flash-Lite Explicit caching also supports the latest aliases, including: gemini-flash-latest gemini-flash-lite-latest When to use context caching Context caching is particularly well suited to scenarios where a substantial initial context is referenced repeatedly by subsequent requests.
- Supported models Implicit caching is supported when using the following models: Gemini 3.1 Flash-Lite preview Gemini 3.1 Pro preview Gemini 3 Flash preview Gemini 2.5 Pro Gemini 2.5 Flash preview Gemini 2.5 Flash-Lite preview Gemini 2.5 Flash Gemini 2.5 Flash-Lite Implicit caching also supports the latest aliases, including: gemini-flash-latest gemini-flash-lite-latest Implicit caching also supports Open Models.
- Limits The content that you explicitly cache must adhere to the limits shown in the following table: Context caching limits Minimum cache token count for implicit and explicit caching Gemini 3 and Gemini 3.1 models: 4,096 tokens Gemini 2.0 and 2.5 models: 2,048 tokens Maximum size of content you can cache using a blob or text 10 MB Minimum time before a cache expires after it's created 1 minute Maximum time before a cache expires after it's created There isn't a maximum cache duration Important: When caching objects that are stored in a Cloud Storage bucket, don't make changes to objects until the cached contents are expired or deleted.
- On Gemini 2.5 or later models this discount is 90%, on Gemini 2.0 models this discount is 75%.

### Flex PayGo \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/flex-paygo](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/flex-paygo)
- Source ID: `site-docs-root`
- Final score: 177
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Flex PayGo doesn't support regional or multi-regional endpoints. gemini-3.1-flash-lite-preview gemini-3.1-flash-image-preview gemini-3.1-pro-preview gemini-3-flash-preview gemini-3-pro-image-preview Request payload limit Flex PayGo requests have a total payload size limit of 20 MB for requests where the payload is included directly in the request body.
- The multimodal model ID is located at the end of the URL before the method (for example, gemini-2.0-flash ).
- The multimodal model ID is located at the end of the URL before the method (for example, gemini-2.0-flash ).
- If your request was processed using Flex PayGo, the trafficType field is set to ON DEMAND FLEX . { "candidates": [ { "content": { "role": "model", "parts": [ { "text": "Response to sample request." } ] }, "finishReason": "STOP" } ], "usageMetadata": { "promptTokenCount": 3, "candidatesTokenCount": 900, "totalTokenCount": 1957, "trafficType": "ON DEMAND FLEX", "thoughtsTokenCount": 1054 } } Additional quota for Flex PayGo In addition to the available quotas for content generation requests (including Provisioned Throughput quota for spillover traffic), requests utilizing Flex PayGo are subject to the following quota: Description QPM for each base model in a project Quota for each base model in a project requests utilizing Flex PayGo 3000 What's next Resource Generative AI quotas and limits Quotas and limits related specifically to generative AI on Vertex AI.

