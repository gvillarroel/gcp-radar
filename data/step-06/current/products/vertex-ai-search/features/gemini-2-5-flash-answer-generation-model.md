---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:36.916Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Gemini 2.5 Flash answer generation model"
feature_slug: "gemini-2-5-flash-answer-generation-model"
latest_feature_date: "2025-06-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/answer-generation-models"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/answer"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis"
keywords:
  - "gemini"
  - "flash"
  - "answer"
  - "generation"
  - "model"
  - "adds"
  - "version"
  - "context"
---

# Gemini 2.5 Flash answer generation model

Product: Vertex AI Search
Coverage: MEDIUM

## Step 02 Summary

Adds answer generation support using the Gemini 2.5 Flash model version (gemini-2.5-flash) for context-based question-and-answer tasks.

## Extended Definition

Adds answer generation support using the Gemini 2.5 Flash model version (gemini-2.5-flash) for context-based question-and-answer tasks.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer-generation-models](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer-generation-models)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis](https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis)

## Supporting Pages

### "Answer generation model versions and lifecycle \_|\_ Vertex AI Search \_\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer-generation-models](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer-generation-models)
- Source ID: `site-docs-reference`
- Final score: 261
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Vertex AI Search Send feedback Answer generation model versions and lifecycle Stay organized with collections Save and categorize content based on your preferences.
- 128K June 17, 2026 gemini-2.0-flash-001/answer gen/v1 The gemini-2.0-flash-001 model.
- 128K N/A gemini-3-flash-preview/answer gen/v1 The gemini-3-flash-preview model.
- The stable model specification points to gemini-2.5-flash/answer gen/v1 .

### Get answers and follow-ups \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- Source ID: `site-docs-reference`
- Final score: 235
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example command and partial result curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1beta/projects/my-project-123//locations/global/collections/default collection/engines/my-app/servingConfigs/default search:answer" -d '{ "query": { "text": "Display the ranking of generations from highest to lowest based on their spending on holiday items using cards."}, "answerGenerationSpec": {"includeCitations": true, "model spec": { "model version": "gemini-2.0-flash-001/answer gen/v1" }, "multimodalSpec": { "imageSource": "CORPUS IMAGE ONLY" } }, "searchSpec": { "searchParams": { "maxReturnResults": 5 } } }' { "answer": { "state": "SUCCEEDED", "answerText": "Holiday spending over November-December was weakest among Gen Xers, followed by Millennials, while Baby Boomer spending was relatively more solid.
- Example command and partial result curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1beta/projects/my-project-123/locations/global/collections/default collection/engines/my-app/servingConfigs/default search:answer" \ -d '{ "query": { "text": "Plot composition of net cash used in investing activities"}, "answerGenerationSpec": { "model spec": { "model version": "gemini-2.0-flash-001/answer gen/v1" }, "multimodalSpec": { "image source": "FIGURE GENERATION ONLY" } } }' { "answer": { "state": "SUCCEEDED", "answerText": "The composition of net cash used in investing activities for the nine months ended September 30, 2020 and 2019 includes several categories.
- ModelSpec ( model version = "gemini-2.5-flash/answer gen/v1" , # Optional: Model to use for answer generation ), prompt spec = discoveryengine .
- ModelSpec ( model version = "gemini-2.5-flash/answer gen/v1" , # Optional: Model to use for answer generation ), prompt spec = discoveryengine .

### "Vertex AI APIs for building search and RAG experiences \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis](https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis)
- Source ID: `site-docs-reference`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The grounded generation API uses specialized, fine-tuned Gemini models and is an effective way to reduce hallucinations and provide responses grounded to your sources or third-party sources including references to grounding support content.
- If you generated the answers using an answer generation model other than the Google models, you can check the grounding of these answers using the check grounding method.
- Google Search : When you use Grounding with Google Search for your Gemini model, then Gemini uses Google Search and generates output that is grounded to the relevant search results.
- Retrieval and generation RAG is a methodology that enables Large Language Models (LLMs) to generate responses that are grounded to your data source of choice.

