---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.637Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Gemini 3.1 Flash-Lite"
feature_slug: "gemini-3-1-flash-lite"
latest_feature_date: "2026-03-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-overview"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/faq"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/control-model-access"
keywords:
  - "gemini"
  - "flash"
  - "lite"
  - "cost"
  - "efficient"
  - "model"
  - "optimized"
  - "for"
---

# Gemini 3.1 Flash-Lite

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

A cost-efficient Gemini model optimized for low-latency, high-volume, cost-sensitive traffic.

## Extended Definition

A cost-efficient Gemini model optimized for low-latency, high-volume, cost-sensitive traffic.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-overview](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-overview)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/faq](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/faq)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/control-model-access](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/control-model-access)

## Supporting Pages

### "Context Caching for Fine-tuned Gemini Models \_|\_ Generative AI on Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini)
- Source ID: `site-docs-root`
- Final score: 245
- Re-rank relevance: N/A

Evidence snippets:
- Make sure that you have the following information: The ID and the version of the tuned Gemini model The endpoint resource name for the deployed fine-tuned model Supported versions Fine-tuned Gemini models support implicit caching for the following versions: Gemini 3.1 Pro Gemini 3.1 Flash-Lite Gemini 3 Pro Gemini 3 Flash Gemini 2.5 Pro Gemini 2.5 Flash Gemini 2.5 Flash-Lite Explicit caching is supported for the following versions: Gemini 3.1 Pro Gemini 3.1 Flash-Lite Gemini 3 Pro Gemini 3 Flash Gemini 2.5 Pro Gemini 2.5 Flash Gemini 2.5 Flash-Lite Gemini 2.0 Flash (note: not supported in gemini-2.0-flash-live-preview-04-09 ) Gemini 2.0 Flash-Lite Create a context cache for a fine-tuned model The procedure for creating a context cache for a fine-tuned model largely follows the steps outlined in Create a context cache .
- You can use context caching for your fine-tuned Gemini models to improve performance and reduce costs for prompts that include large amounts of context.
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI Guides Send feedback Context Caching for Fine-tuned Gemini Models Stay organized with collections Save and categorize content based on your preferences.
- Consult the linked documentation for the general process; this guide focuses on the difference of creating context cache for fine-tuned Gemini models.

### "Context caching overview \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-overview](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-overview)
- Source ID: `site-docs-root`
- Final score: 201
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Supported models Explicit caching is supported when using the following models: Gemini 3.1 Flash-Lite preview Gemini 3.1 Pro preview Gemini 3 Flash preview Gemini 2.5 Pro Gemini 2.5 Flash preview Gemini 2.5 Flash-Lite preview Gemini 2.5 Flash Gemini 2.5 Flash-Lite Explicit caching also supports the latest aliases, including: gemini-flash-latest gemini-flash-lite-latest When to use context caching Context caching is particularly well suited to scenarios where a substantial initial context is referenced repeatedly by subsequent requests.
- Supported models Implicit caching is supported when using the following models: Gemini 3.1 Flash-Lite preview Gemini 3.1 Pro preview Gemini 3 Flash preview Gemini 2.5 Pro Gemini 2.5 Flash preview Gemini 2.5 Flash-Lite preview Gemini 2.5 Flash Gemini 2.5 Flash-Lite Implicit caching also supports the latest aliases, including: gemini-flash-latest gemini-flash-lite-latest Implicit caching also supports Open Models.
- Limits The content that you explicitly cache must adhere to the limits shown in the following table: Context caching limits Minimum cache token count for implicit and explicit caching Gemini 3 and Gemini 3.1 models: 4,096 tokens Gemini 2.0 and 2.5 models: 2,048 tokens Maximum size of content you can cache using a blob or text 10 MB Minimum time before a cache expires after it's created 1 minute Maximum time before a cache expires after it's created There isn't a maximum cache duration Important: When caching objects that are stored in a Cloud Storage bucket, don't make changes to objects until the cached contents are expired or deleted.
- To see an example of context caching, run the "Intro to context caching" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub Context caching helps reduce the cost and latency of requests to Gemini that contain repeated content.

### "Frequently asked questions \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/faq](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/faq)
- Source ID: `site-docs-root`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- The following table shows the comparison between our Gemini 2 models: Model name Description Upgrade path for Gemini 2.5 Pro Strongest model quality (especially for code and world knowledge), with a 1M token-long context window Gemini 1.5 Pro users who want better quality, or who are particularly invested in long context and code Gemini 2.0 Flash Workhorse model for all daily tasks and features enhanced performance and supports real-time Live API Gemini 1.5 Flash users who want a model with significantly better quality that's slightly slower Gemini 1.5 Pro users who want slightly better quality and real-time latency Gemini 2.0 Flash-Lite Our most cost effective offering to support high throughput Gemini 1.5 Flash users who want better quality for the same price and speed Customers looking for the fastest model in the Gemini 2 family To see all benchmark capabilities for Gemini 2, visit the Google DeepMind documentation .
- The Gemini 2 models feature the following upgrades over our 1.5 models: Improved multilingual capabilities: Gemini 2 models show strong advancements in multilingual understanding, with increased scores in the Global MMLU (Lite) benchmark.
- While the experimental version of Gemini 2.0 Flash supports image generation, Gemini 2 does not currently support image generation in our generally available models.
- Gemini 2.0 Flash and Gemini 2.0 Flash-Lite use Standard pay-as-you-go and have no default quota.

### "Control access to Model Garden models \_|\_ Generative AI on Vertex AI \_\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/control-model-access](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/control-model-access)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Allow a set of models and deny all other models The following example allows actions on a specific set of models. name : organizations/ ORGANIZATION ID /policies/vertexai.allowedModels spec : rules : values : allowedValues : - publishers/meta/models/llama3:deploy - publishers/google/models/gemini-2.0-flash-001:tune - publishers/hf-google/models/gemma-2b:deploy Enable web search for partner models To enable the web search feature for partner models, you can specify the following: All features for all models from a specific publisher, for example: publishers/anthropic All features for a specific model, for example: publishers/anthropic/models/ MODEL NAME The web search feature for a specific model, for example: publishers/anthropic/models/ MODEL NAME :web search The following example enables web search for all models from Anthropic: name : organizations/ ORGANIZATION ID /policies/vertexai.allowedPartnerModelFeatures spec : rules : values : allowedValues : Allow all features of this publisher - publishers/anthropic Allow all features of this model - publishers/anthropic/models/ MODEL NAME Allow this feature - publishers/anthropic/models/ MODEL NAME :web search What's next Guide Use models in Model Garden Use generative models from Model Garden in the Google Cloud Console.
- For example, to define a policy rule on predictions against the Gemini 2.0 Flash model, specify publishers/google/models/gemini-2.0-flash-001:predict .
- Deny a set of models and allow all other models The following example denies actions on a specific set of models. name : organizations/ ORGANIZATION ID /policies/vertexai.allowedModels spec : rules : values : deniedValues : - publishers/meta/models/llama3:deploy - publishers/google/models/gemini-2.0-flash-001:tune - publishers/hf-google/models/gemma-2b:deploy Replace ORGANIZATION ID with the ID of your Google Cloud organization.
- Model actions For each model, you can allow or deny the following actions: predict : Specifies whether users can make online and batch predictions against a model with a managed API (model as a service). deploy : For models without a managed API, specifies whether users can deploy models on Google Cloud.

