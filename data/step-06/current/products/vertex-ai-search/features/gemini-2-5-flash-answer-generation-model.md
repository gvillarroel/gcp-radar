---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:30:14.842Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Gemini 2.5 Flash answer generation model"
feature_slug: "gemini-2-5-flash-answer-generation-model"
latest_feature_date: "2025-06-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/answer-generation-models"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/answer"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search"
keywords:
  - "gemini"
  - "flash"
  - "answer"
  - "generation"
  - "model"
  - "adds"
  - "using"
  - "the"
---

# Gemini 2.5 Flash answer generation model

Product: Vertex AI Search
Coverage: LOW

## Step 02 Summary

Adds answer generation support using the Gemini 2.5 Flash model version (gemini-2.5-flash) for context-based question-and-answer tasks.

## Extended Definition

Adds answer generation support using the Gemini 2.5 Flash model version (gemini-2.5-flash) for context-based question-and-answer tasks.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer-generation-models](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer-generation-models)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis](https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)

## Supporting Pages

### "Answer generation model versions and lifecycle \_|\_ Vertex AI Search \_\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer-generation-models](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer-generation-models)
- Source ID: `site-api-reference`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- 128K June 17, 2026 gemini-2.0-flash-001/answer gen/v1 The gemini-2.0-flash-001 model.
- 128K N/A gemini-3-flash-preview/answer gen/v1 The gemini-3-flash-preview model.
- The stable model specification points to gemini-2.5-flash/answer gen/v1 .
- 128K N/A gemini-2.5-flash/answer gen/v1 The gemini-2.5-flash model.

### Get answers and follow-ups \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- Source ID: `site-api-reference`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- Example command and partial result curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1beta/projects/my-project-123//locations/global/collections/default collection/engines/my-app/servingConfigs/default search:answer" -d '{ "query": { "text": "Display the ranking of generations from highest to lowest based on their spending on holiday items using cards."}, "answerGenerationSpec": {"includeCitations": true, "model spec": { "model version": "gemini-2.0-flash-001/answer gen/v1" }, "multimodalSpec": { "imageSource": "CORPUS IMAGE ONLY" } }, "searchSpec": { "searchParams": { "maxReturnResults": 5 } } }' { "answer": { "state": "SUCCEEDED", "answerText": "Holiday spending over November-December was weakest among Gen Xers, followed by Millennials, while Baby Boomer spending was relatively more solid.
- Example command and partial result curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1beta/projects/my-project-123/locations/global/collections/default collection/engines/my-app/servingConfigs/default search:answer" \ -d '{ "query": { "text": "Plot composition of net cash used in investing activities"}, "answerGenerationSpec": { "model spec": { "model version": "gemini-2.0-flash-001/answer gen/v1" }, "multimodalSpec": { "image source": "FIGURE GENERATION ONLY" } } }' { "answer": { "state": "SUCCEEDED", "answerText": "The composition of net cash used in investing activities for the nine months ended September 30, 2020 and 2019 includes several categories.
- REST To generate an answer using a model different from the default model, do the following: Run the following curl command: curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /servingConfigs/default search:answer" \ -d '{ "query": { "text": " QUERY "}, "answerGenerationSpec": { "modelSpec": { "modelVersion": " MODEL VERSION ", } } }' Replace the following: PROJECT ID : the ID of your Google Cloud project.
- REST To generate an answer using a model different from the default model, do the following: Run the following curl command: curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /servingConfigs/default search:answer" \ -d '{ "query": { "text": " QUERY "}, "answerGenerationSpec": { "answerLanguageCode": " ANSWER LANGUAGE CODE " } }' Replace the following: PROJECT ID : the ID of your Google Cloud project.

### "Vertex AI APIs for building search and RAG experiences \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis](https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis)
- Source ID: `site-api-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- If you generated the answers using an answer generation model other than the Google models, you can check the grounding of these answers using the check grounding method.
- The grounded generation API uses specialized, fine-tuned Gemini models and is an effective way to reduce hallucinations and provide responses grounded to your sources or third-party sources including references to grounding support content.
- Generate grounded answers based on the top-ranked chunks using the grounded generation API or using the generate content API .
- Google Search : When you use Grounding with Google Search for your Gemini model, then Gemini uses Google Search and generates output that is grounded to the relevant search results.

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
- Source ID: `site-docs-reference-2`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- This score is calculated using a probabilistic model to estimate the probability that a document is relevant to a given query. relevance score : semantic relevance adjustment that uses a proprietary Google model to determine the meaning and intent behind a user's query in context with the content in the documents. pctr rank : predicted conversion rate adjustment as a rank use predicted Click-through rate (pCTR) to gauge the relevance and attractiveness of a search result from a user's perspective.
- Note: This is an experimental feature. modelSpec object ( ModelSpec ) If specified, the spec will be used to modify the model specification provided to the LLM. useSemanticChunks boolean If true, answer will be generated from most relevant chunks from top search results.
- A user might add instructions to the query to change the tone, style, language, content of the answer, or ask the model to act as a different entity, e.g. "Reply in the tone of a competing company's CEO".
- The following signals are supported: semantic similarity score : semantic similarity adjustment that is calculated using the embeddings generated by a proprietary Google model.

