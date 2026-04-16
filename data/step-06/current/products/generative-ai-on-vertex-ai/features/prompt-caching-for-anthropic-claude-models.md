---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:18.653Z"
product_name: "Generative AI on Vertex AI"
product_slug: "generative-ai-on-vertex-ai"
feature_name: "Prompt caching for Anthropic Claude models"
feature_slug: "prompt-caching-for-anthropic-claude-models"
latest_feature_date: "2025-11-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deprecations/partner-models"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-overview"
  - "https://docs.cloud.google.com/vertex-ai/generative-ai/docs/faq"
keywords:
  - "prompt"
  - "caching"
  - "for"
  - "anthropic"
  - "claude"
  - "models"
  - "now"
  - "supports"
---

# Prompt caching for Anthropic Claude models

Product: Generative AI on Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Prompt caching for Anthropic Claude models now supports a one-hour TTL.

## Extended Definition

Prompt caching for Anthropic Claude models now supports a one-hour TTL.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deprecations/partner-models](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deprecations/partner-models)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-overview](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-overview)
- [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/faq](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/faq)

## Supporting Pages

### "Model deprecations (MaaS) \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deprecations/partner-models](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/deprecations/partner-models)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Model ID claude-3-5-sonnet Launch stage GA Supported inputs & outputs Inputs: Text , Code , Images Outputs: Text Token limits Maximum input tokens: 200,000 Maximum output tokens: 8,000 Capabilities Supported Prompt caching Function calling Count tokens Not supported Batch predictions Extended thinking Usage types Supported Fixed quota Provisioned Throughput Not supported Technical specifications Images Limitation and specifications: See Vision in Anthropic's documentation Documents Limitation and specifications: See PDF support in Anthropic's documentation Knowledge cutoff date April 2024 Versions claude-3-5-sonnet Launch stage: Generally available Release date: June 20, 2024 Supported regions Model availability (Includes fixed quota & Provisioned Throughput) United States us-east5 Europe europe-west1 Asia Pacific asia-southeast1 ML processing United States Multi-region Europe Multi-region Asia Pacific asia-southeast1 Quota limits us-east5: QPM: 80 TPM: 350,000 (input and output) Context length: 200,000 europe-west1: QPM: 130 TPM: 600,000 (input and output) Context length: 200,000 asia-southeast1: QPM: 35 TPM: 150,000 (input and output) Context length: 200,000 Pricing See Pricing .
- Model ID claude-3-7-sonnet Launch stage deprecated Supported inputs & outputs Inputs: Text , Code , Images Outputs: Text Token limits Maximum input tokens: 200,000 Maximum output tokens: 128,000 Capabilities Supported Batch predictions Prompt caching Function calling Count tokens Not supported Extended thinking Usage types Supported Fixed quota Provisioned Throughput Not supported Technical specifications Images Limitation and specifications: See Vision in Anthropic's documentation Documents Limitation and specifications: See PDF support in Anthropic's documentation Knowledge cutoff date November 2024 Versions claude-3-7-sonnet Launch stage: Deprecated Release date: March 20, 2025 Supported regions Model availability (Includes fixed quota & Provisioned Throughput) United States us-east5 Europe europe-west1 Global global endpoint ML processing United States Multi-region Europe Multi-region Quota limits us-east5: QPM: 55 TPM: 500,000 ( uncached input and output) Context length: 200,000 europe-west1: QPM: 40 TPM: 300,000 ( uncached input and output) Context length: 200,000 global endpoint: QPM: 35 TPM: 300,000 ( uncached input and output) Context length: 200,000 Pricing See Pricing .
- Model ID claude-3-haiku Launch stage deprecated Supported inputs & outputs Inputs: Text , Code , Images Outputs: Text Token limits Maximum input tokens: 200,000 Maximum output tokens: 8,000 Capabilities Supported Prompt caching Function calling Count tokens Not supported Batch predictions Extended thinking Usage types Supported Fixed quota Provisioned Throughput Not supported Technical specifications Images Limitation and specifications: See Vision in Anthropic's documentation Documents Limitation and specifications: See PDF support in Anthropic's documentation Knowledge cutoff date August 2023 Versions claude-3-haiku Launch stage: Deprecated Release date: March 19, 2024 Supported regions Model availability (Includes fixed quota & Provisioned Throughput) United States us-east5 Europe europe-west1 Asia Pacific asia-southeast1 ML processing United States Multi-region Europe Multi-region Asia Pacific asia-southeast1 Quota limits us-east5: QPM: 245 TPM: 600,000 (input and output) Context length: 200,000 europe-west1: QPM: 75 TPM: 181,000 (input and output) Context length: 200,000 asia-southeast1: QPM: 70 TPM: 174,000 (input and output) Context length: 200,000 Pricing See Pricing .
- Try in Vertex AI Model ID claude-3-5-sonnet-v2 Launch stage GA Supported inputs & outputs Inputs: Text , Code , Images Outputs: Text Token limits Maximum input tokens: 200,000 Maximum output tokens: 8,000 Capabilities Supported Batch predictions Prompt caching Function calling Count tokens Not supported Extended thinking Usage types Supported Fixed quota Provisioned Throughput Not supported Technical specifications Images Limitation and specifications: See Vision in Anthropic's documentation Documents Limitation and specifications: See PDF support in Anthropic's documentation Knowledge cutoff date August 2024 Versions claude-3-5-sonnet-v2 Launch stage: Generally available Release date: October 22, 2024 Supported regions Model availability (Includes fixed quota & Provisioned Throughput) United States us-east5 Europe europe-west1 Global global endpoint ML processing United States Multi-region Europe Multi-region Quota limits us-east5: QPM: 90 TPM: 540,000 (input and output) Context length: 200,000 europe-west1: QPM: 55 TPM: 330,000 (input and output) Context length: 200,000 global endpoint: QPM: 25 TPM: 140,000 (input and output) Context length: 200,000 Pricing See Pricing .

### "Context Caching for Fine-tuned Gemini Models \_|\_ Generative AI on Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-for-tuned-gemini)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- You can use context caching for your fine-tuned Gemini models to improve performance and reduce costs for prompts that include large amounts of context.
- Make sure that you have the following information: The ID and the version of the tuned Gemini model The endpoint resource name for the deployed fine-tuned model Supported versions Fine-tuned Gemini models support implicit caching for the following versions: Gemini 3.1 Pro Gemini 3.1 Flash-Lite Gemini 3 Pro Gemini 3 Flash Gemini 2.5 Pro Gemini 2.5 Flash Gemini 2.5 Flash-Lite Explicit caching is supported for the following versions: Gemini 3.1 Pro Gemini 3.1 Flash-Lite Gemini 3 Pro Gemini 3 Flash Gemini 2.5 Pro Gemini 2.5 Flash Gemini 2.5 Flash-Lite Gemini 2.0 Flash (note: not supported in gemini-2.0-flash-live-preview-04-09 ) Gemini 2.0 Flash-Lite Create a context cache for a fine-tuned model The procedure for creating a context cache for a fine-tuned model largely follows the steps outlined in Create a context cache .
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI Guides Send feedback Context Caching for Fine-tuned Gemini Models Stay organized with collections Save and categorize content based on your preferences.
- Response { "candidates": [ { "content": { "role": "model", "parts": [ { "text": " MODEL RESPONSE " } ] }, "finishReason": "STOP", "safetyRatings": [ { "category": "HARM CATEGORY HATE SPEECH", "probability": "NEGLIGIBLE", "probabilityScore": 0.21866937, "severity": "HARM SEVERITY NEGLIGIBLE", "severityScore": 0.19946389 }, { "category": "HARM CATEGORY DANGEROUS CONTENT", "probability": "MEDIUM", "probabilityScore": 0.6880493, "severity": "HARM SEVERITY MEDIUM", "severityScore": 0.43374163 }, { "category": "HARM CATEGORY HARASSMENT", "probability": "NEGLIGIBLE", "probabilityScore": 0.4442634, "severity": "HARM SEVERITY LOW", "severityScore": 0.37903354 }, { "category": "HARM CATEGORY SEXUALLY EXPLICIT", "probability": "NEGLIGIBLE", "probabilityScore": 0.10502681, "severity": "HARM SEVERITY LOW", "severityScore": 0.28170192 } ] } ], "usageMetadata": { "promptTokenCount": 55927, "candidatesTokenCount": 105, "totalTokenCount": 56032 } } Example curl command LOCATION = "us-central1" PROJECT ID = "test-project" ENDPOINT ID = 987654321 curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https:// ${ LOCATION } -aiplatform.googleapis.com/v1/projects/ ${ PROJECT ID } /locations/ ${ LOCATION } /endpoints/ ${ ENDPOINT ID } :generateContent" -d \ '{ "cachedContent": "projects/${PROJECT NUMBER}/locations/${LOCATION}/cachedContents/${CACHE ID}", "contents": [ {"role":"user","parts":[{"text":"What are the benefits of exercise?"}]} ], "generationConfig": { "maxOutputTokens": 8192, "temperature": 1, "topP": 0.95, }, "safetySettings": [ { "category": "HARM CATEGORY HATE SPEECH", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY DANGEROUS CONTENT", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY SEXUALLY EXPLICIT", "threshold": "BLOCK MEDIUM AND ABOVE" }, { "category": "HARM CATEGORY HARASSMENT", "threshold": "BLOCK MEDIUM AND ABOVE" } ], }' Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Context caching overview \_|\_ Generative AI on Vertex AI \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-overview](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/context-cache/context-cache-overview)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Limits The content that you explicitly cache must adhere to the limits shown in the following table: Context caching limits Minimum cache token count for implicit and explicit caching Gemini 3 and Gemini 3.1 models: 4,096 tokens Gemini 2.0 and 2.5 models: 2,048 tokens Maximum size of content you can cache using a blob or text 10 MB Minimum time before a cache expires after it's created 1 minute Maximum time before a cache expires after it's created There isn't a maximum cache duration Important: When caching objects that are stored in a Cloud Storage bucket, don't make changes to objects until the cached contents are expired or deleted.
- Supported models Explicit caching is supported when using the following models: Gemini 3.1 Flash-Lite preview Gemini 3.1 Pro preview Gemini 3 Flash preview Gemini 2.5 Pro Gemini 2.5 Flash preview Gemini 2.5 Flash-Lite preview Gemini 2.5 Flash Gemini 2.5 Flash-Lite Explicit caching also supports the latest aliases, including: gemini-flash-latest gemini-flash-lite-latest When to use context caching Context caching is particularly well suited to scenarios where a substantial initial context is referenced repeatedly by subsequent requests.
- Supported models Implicit caching is supported when using the following models: Gemini 3.1 Flash-Lite preview Gemini 3.1 Pro preview Gemini 3 Flash preview Gemini 2.5 Pro Gemini 2.5 Flash preview Gemini 2.5 Flash-Lite preview Gemini 2.5 Flash Gemini 2.5 Flash-Lite Implicit caching also supports the latest aliases, including: gemini-flash-latest gemini-flash-lite-latest Implicit caching also supports Open Models.
- Consider using context caching for use cases such as: Chatbots with extensive system instructions Repetitive analysis of lengthy video files Recurring queries against large document sets Frequent code repository analysis or bug fixing Implicit and explicit caching are supported with Provisioned Throughput in Preview .

### "Frequently asked questions \_|\_ Generative AI on Vertex AI \_|\_ Google\

- URL: [https://docs.cloud.google.com/vertex-ai/generative-ai/docs/faq](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/faq)
- Source ID: `site-docs-root`
- Final score: 135
- Re-rank relevance: N/A

Evidence snippets:
- The following table shows the comparison between our Gemini 2 models: Model name Description Upgrade path for Gemini 2.5 Pro Strongest model quality (especially for code and world knowledge), with a 1M token-long context window Gemini 1.5 Pro users who want better quality, or who are particularly invested in long context and code Gemini 2.0 Flash Workhorse model for all daily tasks and features enhanced performance and supports real-time Live API Gemini 1.5 Flash users who want a model with significantly better quality that's slightly slower Gemini 1.5 Pro users who want slightly better quality and real-time latency Gemini 2.0 Flash-Lite Our most cost effective offering to support high throughput Gemini 1.5 Flash users who want better quality for the same price and speed Customers looking for the fastest model in the Gemini 2 family To see all benchmark capabilities for Gemini 2, visit the Google DeepMind documentation .
- To purchase Provisioned Throughput for partner models (such as Anthropic's Claude models), you must contact Google; you can't order through the Google Cloud console.
- Significant gains in reasoning and knowledge factuality: Gemini 2.5 Pro shows substantial improvements in GPQA (domain expert reasoning) and SimpleQA (world knowledge factuality) indicating enhanced ability to understand and provide accurate information.
- The following is an example set of guidelines you can add to your prompt to prevent this issue: Markdown Table Format Separator line: Markdown tables must include a separator line below the header row.

