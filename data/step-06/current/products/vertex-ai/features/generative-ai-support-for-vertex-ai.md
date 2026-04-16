---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.136Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Generative AI Support for Vertex AI"
feature_slug: "generative-ai-support-for-vertex-ai"
latest_feature_date: "2023-05-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/generative-ai/start/quickstarts/quickstart"
  - "https://docs.cloud.google.com/vertex-ai/docs/generative-ai/image/usage-guidelines"
  - "https://docs.cloud.google.com/vertex-ai/docs/start/introduction-unified-platform"
keywords:
  - "generative"
  - "ai"
  - "vertex"
  - "introduces"
  - "preview"
  - "capabilities"
  - "including"
  - "palm"
---

# Generative AI Support for Vertex AI

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Introduces preview support for generative AI capabilities in Vertex AI, including PaLM 2-powered text generation, chat, and embedding models for testing, tuning, and deployment.

## Extended Definition

Introduces preview support for generative AI capabilities in Vertex AI, including PaLM 2-powered text generation, chat, and embedding models for testing, tuning, and deployment.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/generative-ai/start/quickstarts/quickstart](https://docs.cloud.google.com/vertex-ai/docs/generative-ai/start/quickstarts/quickstart)
- [https://docs.cloud.google.com/vertex-ai/docs/generative-ai/image/usage-guidelines](https://docs.cloud.google.com/vertex-ai/docs/generative-ai/image/usage-guidelines)
- [https://docs.cloud.google.com/vertex-ai/docs/start/introduction-unified-platform](https://docs.cloud.google.com/vertex-ai/docs/start/introduction-unified-platform)

## Supporting Pages

### "Quickstart: Send text prompts to Gemini using Vertex AI Studio \_|\_ Generative\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/generative-ai/start/quickstarts/quickstart](https://docs.cloud.google.com/vertex-ai/docs/generative-ai/start/quickstarts/quickstart)
- Source ID: `site-docs-reference-3`
- Final score: 82
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In this quickstart, you: Send these prompts to the Gemini API using samples from the generative AI prompt gallery, including the following: A summarization text prompt A code generation prompt View the code used to generate the responses Before you begin prompting in Vertex AI Studio This quickstart requires you to complete the following steps to set up a Google Cloud project and enable the Vertex AI API.
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI Guides Send feedback Quickstart: Send text prompts to Gemini using Vertex AI Studio Stay organized with collections Save and categorize content based on your preferences.
- Discover what's next with prompts To learn more about the capabilities in Vertex AI Studio, see Vertex AI Studio capabilities .
- The sample prompts in Vertex AI Studio prompt gallery are predesigned to help demonstrate model capabilities.

### "Responsible AI and usage guidelines for Imagen \_|\_ Generative AI on Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/generative-ai/image/usage-guidelines](https://docs.cloud.google.com/vertex-ai/docs/generative-ai/image/usage-guidelines)
- Source ID: `site-docs-reference-3`
- Final score: 76
- Re-rank relevance: N/A

Evidence snippets:
- Imagen on Vertex AI brings Google's state of the art generative AI capabilities to application developers.
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI Guides Send feedback Responsible AI and usage guidelines for Imagen Stay organized with collections Save and categorize content based on your preferences.
- As an early-stage technology, Imagen on Vertex AI's evolving capabilities and uses create potential for misapplication, misuse, and unintended or unforeseen consequences.
- These code to category mappings are as follows: Error code Safety category Description Content filtered: prompt input or image output 58061214 17301594 Child Detects child content where it isn't allowed due to the API request settings or allowlisting. input (prompt): 58061214 output (image): 17301594 29310472 15236754 Celebrity Detects a photorealistic representation of a celebrity in the request. input (prompt): 29310472 output (image): 15236754 62263041 Dangerous content Detects content that's potentially dangerous in nature. input (prompt) 57734940 22137204 Hate Detects hate-related topics or content. input (prompt): 57734940 output (image): 22137204 74803281 29578790 42876398 Other Detects other miscellaneous safety issues with the request. input (prompt): 42876398 output (image): 29578790, 74803281 39322892 People/Face Detects a person or face when it isn't allowed due to the request safety settings. output (image) 92201652 Personal information Detects Personally Identifiable Information (PII) in the text, such as the mentioning a credit card number, home addresses, or other such information. input (prompt) 89371032 49114662 72817394 Prohibited content Detects the request of prohibited content in the request. input (prompt): 89371032 output (image): 49114662, 72817394 90789179 63429089 43188360 Sexual Detects content that's sexual in nature. input (prompt): 90789179 output (image): 63429089, 43188360 35561574 35561575 Third-party content Guardrails related to third-party content. input (prompt) output (image) 78610348 Toxic Detects toxic topics or content in the text. input (prompt) 61493863 56562880 Violence Detects violence-related content from the image or text. input (prompt): 61493863 output (image): 56562880 32635315 Vulgar Detects vulgar topics or content from the text. input (prompt) 64151117 Celebrity or child Detects photorealistic respresentation of a celebrity or of a child that violates Google's safety policies. input (prompt) output (image) Limitations The following limits apply to different tasks: Image generation and editing limitations Bias amplification : While Imagen on Vertex AI can generate high-quality images, there may be potential biases in the generated content.

### Overview of Vertex AI \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/start/introduction-unified-platform](https://docs.cloud.google.com/vertex-ai/docs/start/introduction-unified-platform)
- Source ID: `site-docs-root`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- Generative AI capabilities Vertex AI brings together a comprehensive toolset with Google's advanced foundation models tools that you can use to build production-ready generative AI agents and applications, as follows: Prompting : Start with prompt design in Vertex AI Studio .
- Key capabilities of Vertex AI Vertex AI includes tools and services that support generative AI as well as AI inference and machine learning workflows.
- This selection of models includes the following: Google's foundational generative AI models : Gemini : Multimodal capabilities for text, images, video, and audio; and thinking capabilities for models, such as Gemini 3 Flash and Gemini 3 Pro (with Nano Banana).
- AI inference capabilities Vertex AI provides tools and services that map to each stage of the ML workflow: Data preparation : Collect, clean, and transform your data.

