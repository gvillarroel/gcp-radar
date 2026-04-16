---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.631Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Veo 3.1 Lite"
feature_slug: "veo-3-1-lite"
latest_feature_date: "2026-04-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deploy/consumption-options"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/responsible-ai-and-usage-guidelines"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-overview"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/video-gen-prompt-guide"
keywords:
  - "veo"
  - "lite"
  - "cost"
  - "efficient"
  - "model"
  - "on"
  - "vertex"
  - "ai"
---

# Veo 3.1 Lite

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

A cost-efficient Veo model on Vertex AI available in public preview.

## Extended Definition

A cost-efficient Veo model on Vertex AI available in public preview.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deploy/consumption-options](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deploy/consumption-options)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/responsible-ai-and-usage-guidelines](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/responsible-ai-and-usage-guidelines)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-overview](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-overview)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/video-gen-prompt-guide](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/video-gen-prompt-guide)

## Supporting Pages

### "Vertex AI consumption options \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deploy/consumption-options](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deploy/consumption-options)
- Source ID: `site-docs-root`
- Final score: 333
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Consumption options Vertex AI provides five consumption options tailored to different traffic patterns and business needs: Consumption option Description Ideal For Pricing Provisioned Throughput Provides guaranteed throughput for a commitment period Critical, steady-state, always-on workloads where SLA is needed Commitment-based (available in 1 week, 1 month, 3 month, and 1 year plans) PayGo Standard Flexible, pay-per-use option with no upfront commitment Default option for everyday use cases with flexibility for variable traffic demand Per-token (standard rate) Priority Delivers higher reliability through priority processing while maintaining PayGo flexibility Important workloads that require higher reliability and limits than standard PayGo Per-token (premium rate) Flex Cost-effective option for latency-tolerant workloads Tasks that can tolerate slower response time and higher throttling, offering lower prices Per-token (discounted rate) Batch inference Cost-optimized for high-volume, asynchronous processing Large-scale jobs where results are needed within a longer timeframe Per-token (discounted rate) For information on pricing, see the pricing page .
- Optimization strategies Once you have selected your consumption model, use the following strategies to further optimize for latency, availability, and cost.
- Vertex AI offers multiple options for getting and using compute resources when using generative models.
- Latency-tolerant, cost-sensitive workloads If you need to process requests (such as data annotation or catalog building), where the application can wait for a response but cost reduction is a priority, you should use Flex PayGo .

### "Responsible AI for Veo on Vertex AI video generation \_|\_ Generative AI\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/responsible-ai-and-usage-guidelines](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/responsible-ai-and-usage-guidelines)
- Source ID: `site-docs-root`
- Final score: 295
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI Guides Send feedback Responsible AI for Veo on Vertex AI video generation Stay organized with collections Save and categorize content based on your preferences.
- Safety filter code categories Depending on the safety filters that you configure, your output may contain a safety code similar to: "Veo could not generate videos because the input image violates Vertex AI's usage guidelines.
- To aid developers, Veo on Vertex AI has built-in safety features to help customers block potentially harmful outputs within their use cases.
- Safety filters Veo on Vertex AI offers several ways to input prompts to generate videos, including text, video, and images.

### "Context caching overview \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-overview](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-overview)
- Source ID: `site-docs-root`
- Final score: 285
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To see an example of context caching, run the "Intro to context caching" notebook in one of the following environments: Open in Colab Open in Colab Enterprise Open in Vertex AI Workbench View on GitHub Context caching helps reduce the cost and latency of requests to Gemini that contain repeated content.
- For more information, see Vertex AI open models for MaaS .
- Supported models Explicit caching is supported when using the following models: Gemini 3.1 Flash-Lite preview Gemini 3.1 Pro preview Gemini 3 Flash preview Gemini 2.5 Pro Gemini 2.5 Flash preview Gemini 2.5 Flash-Lite preview Gemini 2.5 Flash Gemini 2.5 Flash-Lite Explicit caching also supports the latest aliases, including: gemini-flash-latest gemini-flash-lite-latest When to use context caching Context caching is particularly well suited to scenarios where a substantial initial context is referenced repeatedly by subsequent requests.
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI Guides Send feedback Context caching overview Stay organized with collections Save and categorize content based on your preferences.

### "Veo on Vertex AI video generation prompt guide \_|\_ Generative AI on Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/video-gen-prompt-guide](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/video/video-gen-prompt-guide)
- Source ID: `site-docs-root`
- Final score: 271
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- What's next Best practices for Veo on Vertex AI Generate videos with Veo on Vertex AI from text prompts Generate videos with Veo on Vertex AI from an image Generate videos with Veo on Vertex AI using first and last video frames Extend Veo on Vertex AI-generate videos Understand responsible AI and usage guidelines for Veo on Vertex AI Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI Guides Send feedback Veo on Vertex AI video generation prompt guide Stay organized with collections Save and categorize content based on your preferences.
- Safety filters Veo applies safety filters across Vertex AI to help ensure that generated videos and uploaded photos don't contain offensive content.
- For more information about best practices, see Best practices for Veo on Vertex AI .

