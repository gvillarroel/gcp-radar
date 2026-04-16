---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.653Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Anthropic Claude 3.7 Sonnet"
feature_slug: "anthropic-claude-3-7-sonnet"
latest_feature_date: "2025-11-11"
deprecation_date: "2025-11-11"
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deprecations/partner-models"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1beta1/publishers.models/streamGenerateContent"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/faq"
keywords:
  - "anthropic"
  - "claude"
  - "sonnet"
  - "is"
  - "deprecated"
  - "and"
  - "will"
  - "be"
---

# Anthropic Claude 3.7 Sonnet

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Anthropic Claude 3.7 Sonnet is deprecated and will be shut down later; deprecated on 2025-11-11.

## Extended Definition

Anthropic Claude 3.7 Sonnet is deprecated and will be shut down later; deprecated on 2025-11-11.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deprecations/partner-models](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deprecations/partner-models)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1beta1/publishers.models/streamGenerateContent](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1beta1/publishers.models/streamGenerateContent)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/faq](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/faq)

## Supporting Pages

### "Model deprecations (MaaS) \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deprecations/partner-models](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deprecations/partner-models)
- Source ID: `site-docs-root`
- Final score: 211
- Re-rank relevance: N/A

Evidence snippets:
- Model ID claude-3-7-sonnet Launch stage deprecated Supported inputs & outputs Inputs: Text , Code , Images Outputs: Text Token limits Maximum input tokens: 200,000 Maximum output tokens: 128,000 Capabilities Supported Batch predictions Prompt caching Function calling Count tokens Not supported Extended thinking Usage types Supported Fixed quota Provisioned Throughput Not supported Technical specifications Images Limitation and specifications: See Vision in Anthropic's documentation Documents Limitation and specifications: See PDF support in Anthropic's documentation Knowledge cutoff date November 2024 Versions claude-3-7-sonnet Launch stage: Deprecated Release date: March 20, 2025 Supported regions Model availability (Includes fixed quota & Provisioned Throughput) United States us-east5 Europe europe-west1 Global global endpoint ML processing United States Multi-region Europe Multi-region Quota limits us-east5: QPM: 55 TPM: 500,000 ( uncached input and output) Context length: 200,000 europe-west1: QPM: 40 TPM: 300,000 ( uncached input and output) Context length: 200,000 global endpoint: QPM: 35 TPM: 300,000 ( uncached input and output) Context length: 200,000 Pricing See Pricing .
- Anthropic's Claude 3 Haiku Anthropic's Claude 3 Haiku is deprecated as of February 23, 2026 and will be shut down on August 23, 2026 .
- Claude 3.5 Sonnet v2 Claude 3.5 Sonnet v2 is deprecated as of August 20, 2025 and will be shut down on February 19, 2026 .
- Claude 3.5 Sonnet Claude 3.5 Sonnet is deprecated as of August 20, 2025 and will be shut down on February 19, 2026 .

### "Embeddings APIs overview \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/embeddings)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The embeddings in this example could be comprised of thousands of book titles with summaries and their genre, and it might have representations for books like Wuthering Heights by Emily Brontë and Persuasion by Jane Austen that are similar to each other (small distance between numerical representation).
- To learn how to get embeddings, see the following documents: Get text embeddings Get multimodal embeddings Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- If you want to create a multimodal embedding for an online retail use case, start by processing each product image to generate a unique image embedding, which is a mathematical representation of its visual style, color palette, key details, and more.
- By merging these image and text embeddings into a unified search and recommendation engine, the store can offer personalized recommendations of visually similar items based on a customer's browsing history and preferences.

### "Method: publishers.models.streamGenerateContent \_|\_ Generative AI on Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1beta1/publishers.models/streamGenerateContent](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/reference/express-mode/rest/v1beta1/publishers.models/streamGenerateContent)
- Source ID: `site-api-reference`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It is used for billing and reporting only. label keys and values can be no longer than 63 characters (Unicode codepoints) and can only contain lowercase letters, numeric characters, underscores, and dashes.
- Note: only text should be used in parts and content in each part will be in a separate paragraph.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-06-27 UTC."],[],[]]
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI API reference Send feedback Method: publishers.models.streamGenerateContent Stay organized with collections Save and categorize content based on your preferences.

### "Frequently asked questions \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/faq](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/faq)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- For small orders or small incremental increases , the order will be auto-approved and ready within minutes if capacity is available.
- The following table shows the comparison between our Gemini 2 models: Model name Description Upgrade path for Gemini 2.5 Pro Strongest model quality (especially for code and world knowledge), with a 1M token-long context window Gemini 1.5 Pro users who want better quality, or who are particularly invested in long context and code Gemini 2.0 Flash Workhorse model for all daily tasks and features enhanced performance and supports real-time Live API Gemini 1.5 Flash users who want a model with significantly better quality that's slightly slower Gemini 1.5 Pro users who want slightly better quality and real-time latency Gemini 2.0 Flash-Lite Our most cost effective offering to support high throughput Gemini 1.5 Flash users who want better quality for the same price and speed Customers looking for the fastest model in the Gemini 2 family To see all benchmark capabilities for Gemini 2, visit the Google DeepMind documentation .
- You can estimate your Provisioned Throughput needs by: Gather your requirements Calculate your throughput: $$ \begin{aligned} \text{Throughput per sec} = & \\ & \qquad (\text{Inputs per query converted to input chars} \\ & \qquad + \text{Outputs per query converted to input chars}) \\ & \qquad \times \text{QPS} \end{aligned} $$ Calculate your GSUs: Use the estimation tool provided in the purchasing console to calculate the corresponding number of GSUs needed to cover that usage for the given model and details.
- While a direct test environment is not available, a 1-week order with a limited number of GSUs provides a cost-effective way to experience its benefits and assess its suitability for your requirements.

