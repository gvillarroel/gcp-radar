---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:37.102Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Non-summary-seeking query filtering for search follow-up summaries"
feature_slug: "non-summary-seeking-query-filtering-for-search-follow-up-summaries"
latest_feature_date: "2023-09-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/answer"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search"
keywords:
  - "non"
  - "summary"
  - "seeking"
  - "query"
  - "filtering"
  - "search"
  - "follow"
  - "up"
---

# Non-summary-seeking query filtering for search follow-up summaries

Product: Vertex AI Search
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Search can ignore follow-up queries that are not seeking a summary, preventing unhelpful summary generation.

## Extended Definition

Vertex AI Search can ignore follow-up queries that are not seeking a summary, preventing unhelpful summary generation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search)

## Supporting Pages

### Get answers and follow-ups \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- Source ID: `site-docs-reference`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- Example command and partial result curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/123456/locations/global/collections/default collection/engines/my-app/servingConfigs/default search:answer" \ -d '{ "query": { "text": "When can an NCD be made?"}, "groundingSpec": { "filtering level": "FILTERING LEVEL HIGH" } }' { answer { state: SUCCEEDED answer text: "We do not have a summary for your query." steps { state: SUCCEEDED description: "Rephrase the query and search." actions { search action { query: "test?" } observation { search results { document: "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/f7f5cfde02" uri: "gs://my-bucket-123/data/CoverageDocumentation.pdf" title: "ABC345 0101" chunk info { content: "This notice implements part of section 731 of the Medicare Prescription Drug, Improvement, and Modernization Act of 2003 by describing a method of developing, and making available to the public, guidance documents under the Medicare program… " } ... search results { document: "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/f7f5cfde02" uri: "gs://my-bucket-123/data/CoverageDocumentation.pdf" title: "ABC345 0101" chunk info { content: "For the purposes of this notice, the term guidance documents means documents prepared for our staff, potential requestors of National Coverage Determinations, and other interested parties explaining the NCD process… " } } } } } answer skipped reasons: LOW GROUNDED CONTENT } In this example, no answer is returned because the high threshold wasn't met.
- Query ( text = "What is Vertex AI Search?" ), session = None , # Optional: include previous session ID to continue a conversation query understanding spec = query understanding spec , answer generation spec = answer generation spec , user pseudo id = "user-pseudo-id" , # Optional: Add user pseudo-identifier for queries. ) Make the request response = client . answer query ( request ) Handle the response print ( response ) return response Search and answer with query classification The following command shows how to call the answer method to inquire whether a query is adversarial, non-answer seeking, or neither.
- REST To skip answering queries that are adversarial or non-answer-seeking, do the following: Run the following curl command: curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /servingConfigs/default search:answer" \ -d '{ "query": { "text": " QUERY "}, "answerGenerationSpec": { "ignoreAdversarialQuery": true, "ignoreNonAnswerSeekingQuery": true } }' Replace the following: PROJECT ID : the ID of your Google Cloud project.
- REST To determine if a query is adversarial or non-answer seeking, do the following: Run the following curl command: curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /servingConfigs/default search:answer" \ -d '{ "query": { "text": " QUERY "}, "queryUnderstandingSpec": { "queryClassificationSpec": { "types": [" QUERY CLASSIFICATION TYPE "] } } }' Replace the following: PROJECT ID : the ID of your Google Cloud project.

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
- Source ID: `site-docs-reference-2`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- No summary is returned if the search query is classified as a non-summary seeking query.
- Google employs search-query classification to detect summary-seeking queries.
- SearchResponse JSON representation { "results" : [ { object ( SearchResult ) } ] , "facets" : [ { object ( Facet ) } ] , "guidedSearchResult" : { object ( GuidedSearchResult ) } , "totalSize" : integer , "attributionToken" : string , "redirectUri" : string , "nextPageToken" : string , "correctedQuery" : string , "suggestedQuery" : string , "summary" : { object ( Summary ) } , "appliedControls" : [ string ] , "geoSearchDebugInfo" : [ { object ( GeoSearchDebugInfo ) } ] , "queryExpansionInfo" : { object ( QueryExpansionInfo ) } , "naturalLanguageQueryUnderstandingInfo" : { object ( NaturalLanguageQueryUnderstandingInfo ) } , "sessionInfo" : { object ( SessionInfo ) } , "oneBoxResults" : [ { object ( OneBoxResult ) } ] , "searchLinkPromotions" : [ { object ( SearchLinkPromotion ) } ] , "semanticState" : enum ( SemanticState ) } Fields results[] object ( SearchResult ) A list of matched documents.
- SummarySpec JSON representation { "summaryResultCount" : integer , "includeCitations" : boolean , "ignoreAdversarialQuery" : boolean , "ignoreNonSummarySeekingQuery" : boolean , "ignoreLowRelevantContent" : boolean , "ignoreJailBreakingQuery" : boolean , "multimodalSpec" : { object ( MultiModalSpec ) } , "modelPromptSpec" : { object ( ModelPromptSpec ) } , "languageCode" : string , "modelSpec" : { object ( ModelSpec ) } , "useSemanticChunks" : boolean } Fields summaryResultCount integer The number of top results to generate the summary from.

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search)
- Source ID: `site-docs-reference-2`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- AnswerGenerationSpec JSON representation { "modelSpec" : { object ( ModelSpec ) } , "promptSpec" : { object ( PromptSpec ) } , "includeCitations" : boolean , "answerLanguageCode" : string , "ignoreAdversarialQuery" : boolean , "ignoreNonAnswerSeekingQuery" : boolean , "ignoreJailBreakingQuery" : boolean , "multimodalSpec" : { object ( MultimodalSpec ) } , // Union field ignore low relevant content can be only one of the following: "ignoreLowRelevantContent" : boolean // End of list of possible types for union field ignore low relevant content . } Fields modelSpec object ( ModelSpec ) Answer generation model specification. promptSpec object ( PromptSpec ) Answer generation prompt specification. includeCitations boolean Specifies whether to include citation metadata in the answer.
- In this case the filter would look like this: filter --> name:'ANY("king kong")' For more information about filtering including syntax and filter operators, see Filter boostSpec object ( BoostSpec ) Boost specification to boost certain documents in search results which may affect the answer query response.
- Server behavior defaults to DISABLED . geoSearchQueryDetectionFieldNames[] string Field names used for location-based filtering, where geolocation filters are detected in natural language search queries.
- No answer is returned if the search query is classified as a non-answer seeking query.

