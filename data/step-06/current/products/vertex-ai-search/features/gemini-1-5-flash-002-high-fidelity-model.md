---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:30:14.857Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "gemini-1.5-flash-002-high-fidelity model"
feature_slug: "gemini-1-5-flash-002-high-fidelity-model"
latest_feature_date: "2024-12-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/answer"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/answer-generation-models"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search"
keywords:
  - "gemini"
  - "flash"
  - "002"
  - "high"
  - "fidelity"
  - "model"
  - "introduces"
  - "the"
---

# gemini-1.5-flash-002-high-fidelity model

Product: Vertex AI Search
Coverage: LOW

## Step 02 Summary

Introduces the gemini-1.5-flash-002-high-fidelity model in Public Preview for grounded answer generation with RAG, tuned for context-based question answering in specialized industries.

## Extended Definition

Introduces the gemini-1.5-flash-002-high-fidelity model in Public Preview for grounded answer generation with RAG, tuned for context-based question answering in specialized industries.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer-generation-models](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer-generation-models)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis](https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)

## Supporting Pages

### Get answers and follow-ups \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- Source ID: `site-api-reference`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Example command and partial result curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1beta/projects/my-project-123//locations/global/collections/default collection/engines/my-app/servingConfigs/default search:answer" -d '{ "query": { "text": "Display the ranking of generations from highest to lowest based on their spending on holiday items using cards."}, "answerGenerationSpec": {"includeCitations": true, "model spec": { "model version": "gemini-2.0-flash-001/answer gen/v1" }, "multimodalSpec": { "imageSource": "CORPUS IMAGE ONLY" } }, "searchSpec": { "searchParams": { "maxReturnResults": 5 } } }' { "answer": { "state": "SUCCEEDED", "answerText": "Holiday spending over November-December was weakest among Gen Xers, followed by Millennials, while Baby Boomer spending was relatively more solid.
- Example command and partial result curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1beta/projects/my-project-123/locations/global/collections/default collection/engines/my-app/servingConfigs/default search:answer" \ -d '{ "query": { "text": "Plot composition of net cash used in investing activities"}, "answerGenerationSpec": { "model spec": { "model version": "gemini-2.0-flash-001/answer gen/v1" }, "multimodalSpec": { "image source": "FIGURE GENERATION ONLY" } } }' { "answer": { "state": "SUCCEEDED", "answerText": "The composition of net cash used in investing activities for the nine months ended September 30, 2020 and 2019 includes several categories.
- ModelSpec ( model version = "gemini-2.5-flash/answer gen/v1" , # Optional: Model to use for answer generation ), prompt spec = discoveryengine .
- ModelSpec ( model version = "gemini-2.5-flash/answer gen/v1" , # Optional: Model to use for answer generation ), prompt spec = discoveryengine .

### "Answer generation model versions and lifecycle \_|\_ Vertex AI Search \_\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer-generation-models](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer-generation-models)
- Source ID: `site-api-reference`
- Final score: 114
- Re-rank relevance: N/A

Evidence snippets:
- 128K March 31, 2026 preview The preview model specification points to the gemini-2.5-flash model.
- 128K June 17, 2026 gemini-2.0-flash-001/answer gen/v1 The gemini-2.0-flash-001 model.
- 128K N/A gemini-3-flash-preview/answer gen/v1 The gemini-3-flash-preview model.
- The stable model specification points to gemini-2.5-flash/answer gen/v1 .

### "Vertex AI APIs for building search and RAG experiences \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis](https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis)
- Source ID: `site-api-reference`
- Final score: 94
- Re-rank relevance: N/A

Evidence snippets:
- The grounded generation API uses specialized, fine-tuned Gemini models and is an effective way to reduce hallucinations and provide responses grounded to your sources or third-party sources including references to grounding support content.
- Google Search : When you use Grounding with Google Search for your Gemini model, then Gemini uses Google Search and generates output that is grounded to the relevant search results.
- Ground with Google Search: Gemini is Google's most capable model and offers out-of-the-box grounding with Google Search.
- Using these lower-level APIs gives you full flexibility on the design of your retriever while at the same time offering accelerated time to market and high quality by relying on lower-level Vertex AI APIs.

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
- Source ID: `site-docs-reference-2`
- Final score: 72
- Re-rank relevance: N/A

Evidence snippets:
- SummarySpec JSON representation { "summaryResultCount" : integer , "includeCitations" : boolean , "ignoreAdversarialQuery" : boolean , "ignoreNonSummarySeekingQuery" : boolean , "ignoreLowRelevantContent" : boolean , "ignoreJailBreakingQuery" : boolean , "multimodalSpec" : { object ( MultiModalSpec ) } , "modelPromptSpec" : { object ( ModelPromptSpec ) } , "languageCode" : string , "modelSpec" : { object ( ModelSpec ) } , "useSemanticChunks" : boolean } Fields summaryResultCount integer The number of top results to generate the summary from.
- This score is calculated using a probabilistic model to estimate the probability that a document is relevant to a given query. relevance score : semantic relevance adjustment that uses a proprietary Google model to determine the meaning and intent behind a user's query in context with the content in the documents. pctr rank : predicted conversion rate adjustment as a rank use predicted Click-through rate (pCTR) to gauge the relevance and attractiveness of a search result from a user's perspective.
- A higher pCTR suggests that the result is more likely to satisfy the user's query and intent, making it a valuable signal for ranking. freshness rank : freshness adjustment as a rank document age : The time in hours elapsed since the document was last updated, a floating-point number (e.g., 0.25 means 15 minutes). topicality rank : topicality adjustment as a rank.
- SearchResult JSON representation { "id" : string , "document" : { object ( Document ) } , "chunk" : { object ( Chunk ) } , "modelScores" : { string : { object ( DoubleList ) } , ... } , "rankSignals" : { object ( RankSignals ) } } Fields id string Document.id of the searched Document . document object ( Document ) The document data snippet in the search response.

