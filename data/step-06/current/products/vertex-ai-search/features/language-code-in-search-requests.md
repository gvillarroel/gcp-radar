---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:37.002Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Language code in search requests"
feature_slug: "language-code-in-search-requests"
latest_feature_date: "2024-06-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/authentication"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search"
keywords:
  - "language"
  - "code"
  - "search"
  - "requests"
  - "vertex"
  - "ai"
  - "supports"
  - "specifying"
---

# Language code in search requests

Product: Vertex AI Search
Coverage: LOW

## Step 02 Summary

Vertex AI Search supports specifying a language code in search queries to improve search result quality.

## Extended Definition

Vertex AI Search supports specifying a language code in search queries to improve search result quality.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/authentication](https://docs.cloud.google.com/generative-ai-app-builder/docs/authentication)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)

## Supporting Pages

### Authenticate to Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/authentication](https://docs.cloud.google.com/generative-ai-app-builder/docs/authentication)
- Source ID: `site-docs-reference-2`
- Final score: 41
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You can access the API in the following ways: Client libraries REST Client libraries The Vertex AI Search client libraries provide high-level language support for authenticating to Vertex AI Search programmatically.
- How you authenticate to Vertex AI Search depends on the interface you use to access the API and the environment where your code is running.
- Set up authentication for Vertex AI Search How you set up authentication depends on the environment where your code is running.
- Vertex AI Search supports API keys for the following API methods: userEvents.Collect .

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search)
- Source ID: `site-docs-reference-2`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- Specification to enable natural language understanding capabilities for search requests.
- AnswerGenerationSpec JSON representation { "modelSpec" : { object ( ModelSpec ) } , "promptSpec" : { object ( PromptSpec ) } , "includeCitations" : boolean , "answerLanguageCode" : string , "ignoreAdversarialQuery" : boolean , "ignoreNonAnswerSeekingQuery" : boolean , "ignoreJailBreakingQuery" : boolean , "multimodalSpec" : { object ( MultimodalSpec ) } , // Union field ignore low relevant content can be only one of the following: "ignoreLowRelevantContent" : boolean // End of list of possible types for union field ignore low relevant content . } Fields modelSpec object ( ModelSpec ) Answer generation model specification. promptSpec object ( PromptSpec ) Answer generation prompt specification. includeCitations boolean Specifies whether to include citation metadata in the answer.
- SearchParams JSON representation { "maxReturnResults" : integer , "filter" : string , "boostSpec" : { object ( BoostSpec ) } , "orderBy" : string , "searchResultMode" : enum ( SearchResultMode ) , "customFineTuningSpec" : { object ( CustomFineTuningSpec ) } , "dataStoreSpecs" : [ { object ( DataStoreSpec ) } ] , "naturalLanguageQueryUnderstandingSpec" : { object ( NaturalLanguageQueryUnderstandingSpec ) } } Fields maxReturnResults integer Number of search results to return.
- NaturalLanguageQueryUnderstandingSpec JSON representation { "filterExtractionCondition" : enum ( FilterExtractionCondition ) , "geoSearchQueryDetectionFieldNames" : [ string ] , "extractedFilterBehavior" : enum ( ExtractedFilterBehavior ) , "allowedFieldNames" : [ string ] } Fields filterExtractionCondition enum ( FilterExtractionCondition ) The condition under which filter extraction should occur.

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
- Source ID: `site-docs-reference-2`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- SearchRequest JSON representation { "servingConfig" : string , "branch" : string , "query" : string , "pageCategories" : [ string ] , "imageQuery" : { object ( ImageQuery ) } , "pageSize" : integer , "pageToken" : string , "offset" : integer , "oneBoxPageSize" : integer , "dataStoreSpecs" : [ { object ( DataStoreSpec ) } ] , "filter" : string , "canonicalFilter" : string , "orderBy" : string , "userInfo" : { object ( UserInfo ) } , "languageCode" : string , "regionCode" : string , "facetSpecs" : [ { object ( FacetSpec ) } ] , "boostSpec" : { object ( BoostSpec ) } , "params" : { string : value , ... } , "queryExpansionSpec" : { object ( QueryExpansionSpec ) } , "spellCorrectionSpec" : { object ( SpellCorrectionSpec ) } , "userPseudoId" : string , "useLatestData" : boolean , "contentSearchSpec" : { object ( ContentSearchSpec ) } , "embeddingSpec" : { object ( EmbeddingSpec ) } , "rankingExpression" : string , "rankingExpressionBackend" : enum ( RankingExpressionBackend ) , "safeSearch" : boolean , "userLabels" : { string : string , ... } , "naturalLanguageQueryUnderstandingSpec" : { object ( NaturalLanguageQueryUnderstandingSpec ) } , "searchAsYouTypeSpec" : { object ( SearchAsYouTypeSpec ) } , "customFineTuningSpec" : { object ( CustomFineTuningSpec ) } , "displaySpec" : { object ( DisplaySpec ) } , "crowdingSpecs" : [ { object ( CrowdingSpec ) } ] , "session" : string , "sessionSpec" : { object ( SessionSpec ) } , "relevanceThreshold" : enum ( RelevanceThreshold ) , "relevanceFilterSpec" : { object ( RelevanceFilterSpec ) } , "personalizationSpec" : { object ( PersonalizationSpec ) } , "relevanceScoreSpec" : { object ( RelevanceScoreSpec ) } , "searchAddonSpec" : { object ( SearchAddonSpec ) } } Fields servingConfig string Required.
- SearchResponse JSON representation { "results" : [ { object ( SearchResult ) } ] , "facets" : [ { object ( Facet ) } ] , "guidedSearchResult" : { object ( GuidedSearchResult ) } , "totalSize" : integer , "attributionToken" : string , "redirectUri" : string , "nextPageToken" : string , "correctedQuery" : string , "suggestedQuery" : string , "summary" : { object ( Summary ) } , "appliedControls" : [ string ] , "geoSearchDebugInfo" : [ { object ( GeoSearchDebugInfo ) } ] , "queryExpansionInfo" : { object ( QueryExpansionInfo ) } , "naturalLanguageQueryUnderstandingInfo" : { object ( NaturalLanguageQueryUnderstandingInfo ) } , "sessionInfo" : { object ( SessionInfo ) } , "oneBoxResults" : [ { object ( OneBoxResult ) } ] , "searchLinkPromotions" : [ { object ( SearchLinkPromotion ) } ] , "semanticState" : enum ( SemanticState ) } Fields results[] object ( SearchResult ) A list of matched documents.
- SummarySpec JSON representation { "summaryResultCount" : integer , "includeCitations" : boolean , "ignoreAdversarialQuery" : boolean , "ignoreNonSummarySeekingQuery" : boolean , "ignoreLowRelevantContent" : boolean , "ignoreJailBreakingQuery" : boolean , "multimodalSpec" : { object ( MultiModalSpec ) } , "modelPromptSpec" : { object ( ModelPromptSpec ) } , "languageCode" : string , "modelSpec" : { object ( ModelSpec ) } , "useSemanticChunks" : boolean } Fields summaryResultCount integer The number of top results to generate the summary from.
- UserLabelsEntry JSON representation { "key" : string , "value" : string } Fields key string value string NaturalLanguageQueryUnderstandingSpec JSON representation { "filterExtractionCondition" : enum ( FilterExtractionCondition ) , "geoSearchQueryDetectionFieldNames" : [ string ] , "extractedFilterBehavior" : enum ( ExtractedFilterBehavior ) , "allowedFieldNames" : [ string ] } Fields filterExtractionCondition enum ( FilterExtractionCondition ) The condition under which filter extraction should occur.

