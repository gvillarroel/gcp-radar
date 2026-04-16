---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:02:17.108Z"
product_name: "Vertex AI"
product_slug: "vertex-ai"
feature_name: "Generative AI model support on Vertex AI"
feature_slug: "generative-ai-model-support-on-vertex-ai"
latest_feature_date: "2023-08-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/vertex-ai/docs/generative-ai/image/usage-guidelines"
  - "https://docs.cloud.google.com/vertex-ai/docs/generative-ai/start/quickstarts/quickstart"
  - "https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials"
keywords:
  - "generative"
  - "ai"
  - "model"
  - "vertex"
  - "was"
  - "expanded"
  - "include"
  - "language"
---

# Generative AI model support on Vertex AI

Product: Vertex AI
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Generative AI support was expanded to include new language model candidates, support for models with up to 32k input/output tokens, and additional languages.

## Extended Definition

Vertex AI Generative AI support was expanded to include new language model candidates, support for models with up to 32k input/output tokens, and additional languages.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/vertex-ai/docs/generative-ai/image/usage-guidelines](https://docs.cloud.google.com/vertex-ai/docs/generative-ai/image/usage-guidelines)
- [https://docs.cloud.google.com/vertex-ai/docs/generative-ai/start/quickstarts/quickstart](https://docs.cloud.google.com/vertex-ai/docs/generative-ai/start/quickstarts/quickstart)
- [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)

## Supporting Pages

### "Responsible AI and usage guidelines for Imagen \_|\_ Generative AI on Vertex\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/generative-ai/image/usage-guidelines](https://docs.cloud.google.com/vertex-ai/docs/generative-ai/image/usage-guidelines)
- Source ID: `site-docs-reference-3`
- Final score: 126
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you think this was an error, send feedback." }, ], "deployedModelId" : " MODEL ID " } Models { "predictions" : [ { "bytesBase64Encoded" : " /9j/4AAQSkZJRgABA[...]bdsdgD2PLbZQfW96HEFE/9k= " , "mimeType" : " image/png " }, { "mimeType" : " image/png " , "bytesBase64Encoded" : " /9j/4AAQSkZJRgABA[...]Ct+F+1SLLH/2+SJ4ZLdOvg//Z " }, { "raiFilteredReason" : " 56562880 " }, { "raiFilteredReason" : " 56562880 " } ], "deployedModelId" : " MODEL ID " } Filtered output using includeSafetyAttributes If you set "includeSafetyAttributes": true , the response "predictions": [] array includes the RAI scores (rounded to one decimal place) of text safety attributes of the positive prompt.
- For example, the following is a response to a request with "sampleCount": 4 , but two of the images are filtered and consequently omitted: { "predictions" : [ { "bytesBase64Encoded" : " /9j/4AAQSkZJRgABA[...]bdsdgD2PLbZQfW96HEFE/9k= " , "mimeType" : " image/png " }, { "mimeType" : " image/png " , "bytesBase64Encoded" : " /9j/4AAQSkZJRgABA[...]Ct+F+1SLLH/2+SJ4ZLdOvg//Z " } ], "deployedModelId" : " MODEL ID " } If you set includeRaiReason: true and several output images are filtered, your response includes generated image objects and raiFilteredReason objects for any filtered output images.
- Safety filters Text prompts provided as inputs and images (generated or uploaded) through Imagen on Vertex AI are assessed against a list of safety filters, which include 'harmful categories' (for example, violence , sexual , derogatory , and toxic ).
- View Imagen for Generation model card View Imagen for Editing and Customization model card Imagen usage guidelines Read the following general product attributes and legal considerations before you use Imagen on Vertex AI.

### "Quickstart: Send text prompts to Gemini using Vertex AI Studio \_|\_ Generative\

- URL: [https://docs.cloud.google.com/vertex-ai/docs/generative-ai/start/quickstarts/quickstart](https://docs.cloud.google.com/vertex-ai/docs/generative-ai/start/quickstarts/quickstart)
- Source ID: `site-docs-reference-3`
- Final score: 118
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Enable the API Sample prompts in Vertex AI Studio A prompt is a natural language request submitted to a language model that generates a response.
- You can use Vertex AI Studio to design, test, and manage prompts for Google's Gemini large language models (LLMs) and third-party models.
- In this quickstart, you: Send these prompts to the Gemini API using samples from the generative AI prompt gallery, including the following: A summarization text prompt A code generation prompt View the code used to generate the responses Before you begin prompting in Vertex AI Studio This quickstart requires you to complete the following steps to set up a Google Cloud project and enable the Vertex AI API.
- Home Documentation AI and ML Vertex AI Generative AI on Vertex AI Guides Send feedback Quickstart: Send text prompts to Gemini using Vertex AI Studio Stay organized with collections Save and categorize content based on your preferences.

### Vertex AI model evaluation notebook tutorials \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials](https://docs.cloud.google.com/vertex-ai/docs/evaluation/model-evaluation-notebook-tutorials)
- Source ID: `site-docs-reference-2`
- Final score: 110
- Re-rank relevance: N/A

Evidence snippets:
- Learn how to provide text input to Large Language Models available on Vertex AI to test, tune, and deploy generative AI language models.
- Colab Enterprise GitHub Vertex AI Workbench generative ai Distill a large language model .
- Send a prediction request to a Private Endpoint Colab Colab Enterprise GitHub Vertex AI Workbench Vertex AI Language Models Vertex AI LLM and streaming prediction .
- Colab Colab Enterprise GitHub Vertex AI Workbench Overview of Generative AI support on Vertex AI Vertex AI LLM Batch Inference with RLHF-tuned Models .

