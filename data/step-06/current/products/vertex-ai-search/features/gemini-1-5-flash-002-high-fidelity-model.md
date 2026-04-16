---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:36.941Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "gemini-1.5-flash-002-high-fidelity model"
feature_slug: "gemini-1-5-flash-002-high-fidelity-model"
latest_feature_date: "2024-12-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/answer"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/answer-generation-models"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis"
keywords:
  - "gemini"
  - "flash"
  - "002"
  - "high"
  - "fidelity"
  - "model"
  - "introduces"
  - "public"
---

# gemini-1.5-flash-002-high-fidelity model

Product: Vertex AI Search
Coverage: MEDIUM

## Step 02 Summary

Introduces the gemini-1.5-flash-002-high-fidelity model in Public Preview for grounded answer generation with RAG, tuned for context-based question answering in specialized industries.

## Extended Definition

Introduces the gemini-1.5-flash-002-high-fidelity model in Public Preview for grounded answer generation with RAG, tuned for context-based question answering in specialized industries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer-generation-models](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer-generation-models)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis](https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis)

## Supporting Pages

### Get answers and follow-ups \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- Source ID: `site-docs-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- Example command and partial result curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1beta/projects/my-project-123//locations/global/collections/default collection/engines/my-app/servingConfigs/default search:answer" -d '{ "query": { "text": "Display the ranking of generations from highest to lowest based on their spending on holiday items using cards."}, "answerGenerationSpec": {"includeCitations": true, "model spec": { "model version": "gemini-2.0-flash-001/answer gen/v1" }, "multimodalSpec": { "imageSource": "CORPUS IMAGE ONLY" } }, "searchSpec": { "searchParams": { "maxReturnResults": 5 } } }' { "answer": { "state": "SUCCEEDED", "answerText": "Holiday spending over November-December was weakest among Gen Xers, followed by Millennials, while Baby Boomer spending was relatively more solid.
- Example command and partial result curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1beta/projects/my-project-123/locations/global/collections/default collection/engines/my-app/servingConfigs/default search:answer" \ -d '{ "query": { "text": "Plot composition of net cash used in investing activities"}, "answerGenerationSpec": { "model spec": { "model version": "gemini-2.0-flash-001/answer gen/v1" }, "multimodalSpec": { "image source": "FIGURE GENERATION ONLY" } } }' { "answer": { "state": "SUCCEEDED", "answerText": "The composition of net cash used in investing activities for the nine months ended September 30, 2020 and 2019 includes several categories.
- ModelSpec ( model version = "gemini-2.5-flash/answer gen/v1" , # Optional: Model to use for answer generation ), prompt spec = discoveryengine .
- ModelSpec ( model version = "gemini-2.5-flash/answer gen/v1" , # Optional: Model to use for answer generation ), prompt spec = discoveryengine .

### "Answer generation model versions and lifecycle \_|\_ Vertex AI Search \_\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer-generation-models](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer-generation-models)
- Source ID: `site-docs-reference`
- Final score: 111
- Re-rank relevance: N/A

Evidence snippets:
- 128K March 31, 2026 preview The preview model specification points to the gemini-2.5-flash model.
- 128K June 17, 2026 gemini-2.0-flash-001/answer gen/v1 The gemini-2.0-flash-001 model.
- 128K N/A gemini-3-flash-preview/answer gen/v1 The gemini-3-flash-preview model.
- The stable model specification points to gemini-2.5-flash/answer gen/v1 .

### "Vertex AI APIs for building search and RAG experiences \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis](https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis)
- Source ID: `site-docs-reference`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- The grounded generation API uses specialized, fine-tuned Gemini models and is an effective way to reduce hallucinations and provide responses grounded to your sources or third-party sources including references to grounding support content.
- Google Search : When you use Grounding with Google Search for your Gemini model, then Gemini uses Google Search and generates output that is grounded to the relevant search results.
- Ground with Google Search: Gemini is Google's most capable model and offers out-of-the-box grounding with Google Search.
- Vertex AI Vector Search is a retrieval engine that can search from billions of semantically similar or semantically related items at scale, with high queries per second (QPS), high recall, low latency, and cost efficiency.

