---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:36.972Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Adversarial query detection"
feature_slug: "adversarial-query-detection"
latest_feature_date: "2024-08-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/answer"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search"
keywords:
  - "adversarial"
  - "query"
  - "detection"
  - "queries"
  - "generative"
  - "answers"
  - "was"
  - "updated"
---

# Adversarial query detection

Product: Vertex AI Search
Coverage: MEDIUM

## Step 02 Summary

Detection of adversarial queries for generative answers was updated to improve accuracy.

## Extended Definition

Detection of adversarial queries for generative answers was updated to improve accuracy.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search)

## Supporting Pages

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
- Source ID: `site-docs-reference-2`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, [1] means that the sentence is attributed to the first search result. [2, 3] means that the sentence is attributed to both the second and third search results. ignoreAdversarialQuery boolean Specifies whether to filter out adversarial queries.
- If this field is set to true , we skip generating summaries for adversarial queries and return fallback messages instead. ignoreNonSummarySeekingQuery boolean Specifies whether to filter out queries that are not summary-seeking.
- Server behavior defaults to DISABLED . geoSearchQueryDetectionFieldNames[] string Field names used for location-based filtering, where geolocation filters are detected in natural language search queries.
- If set to true , only queries with high relevance search results will generate answers. ignoreJailBreakingQuery boolean Optional.

### Get answers and follow-ups \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- Source ID: `site-docs-reference`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- REST To skip answering queries that are adversarial or non-answer-seeking, do the following: Run the following curl command: curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /servingConfigs/default search:answer" \ -d '{ "query": { "text": " QUERY "}, "answerGenerationSpec": { "ignoreAdversarialQuery": true, "ignoreNonAnswerSeekingQuery": true } }' Replace the following: PROJECT ID : the ID of your Google Cloud project.
- Generative responses : This gives you access to the advanced generative answer features that require multi-step reasoning, query simplification, multi-turn queries, related questions, and multimodal answers that return images and charts.
- This includes all answer generation features except advanced generative answer features, such as related questions, query simplification, multi-turn queries, and multimodal answers that return images and charts.
- Query ( text = "What is Vertex AI Search?" ), session = None , # Optional: include previous session ID to continue a conversation query understanding spec = query understanding spec , answer generation spec = answer generation spec , user pseudo id = "user-pseudo-id" , # Optional: Add user pseudo-identifier for queries. ) Make the request response = client . answer query ( request ) Handle the response print ( response ) return response Personalize answers If there is specific information about the user available—for example, data in a profile, you can specify that information in the endUserMetadata object so that the query results can be personalized for the user.

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search)
- Source ID: `site-docs-reference-2`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If this field is set to true , we skip generating answers for adversarial queries and return fallback messages instead. ignoreNonAnswerSeekingQuery boolean Specifies whether to filter out queries that are not answer-seeking.
- AnswerGenerationSpec JSON representation { "modelSpec" : { object ( ModelSpec ) } , "promptSpec" : { object ( PromptSpec ) } , "includeCitations" : boolean , "answerLanguageCode" : string , "ignoreAdversarialQuery" : boolean , "ignoreNonAnswerSeekingQuery" : boolean , "ignoreJailBreakingQuery" : boolean , "multimodalSpec" : { object ( MultimodalSpec ) } , // Union field ignore low relevant content can be only one of the following: "ignoreLowRelevantContent" : boolean // End of list of possible types for union field ignore low relevant content . } Fields modelSpec object ( ModelSpec ) Answer generation model specification. promptSpec object ( PromptSpec ) Answer generation prompt specification. includeCitations boolean Specifies whether to include citation metadata in the answer.
- Server behavior defaults to DISABLED . geoSearchQueryDetectionFieldNames[] string Field names used for location-based filtering, where geolocation filters are detected in natural language search queries.
- If this field is set to true , we skip generating answers for non-answer seeking queries and return fallback messages instead. ignoreJailBreakingQuery boolean Optional.

