---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:36.904Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Vertex AI Search natural language query filters"
feature_slug: "vertex-ai-search-natural-language-query-filters"
latest_feature_date: "2025-11-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search"
keywords:
  - "vertex"
  - "ai"
  - "search"
  - "natural"
  - "language"
  - "query"
  - "filters"
  - "filtering"
---

# Vertex AI Search natural language query filters

Product: Vertex AI Search
Coverage: MEDIUM

## Step 02 Summary

Natural language query filtering converts user queries against structured data stores into a residual query plus machine-generated filters for custom search apps attached to a single structured data store.

## Extended Definition

Natural language query filtering converts user queries against structured data stores into a residual query plus machine-generated filters for custom search apps attached to a single structured data store.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search](https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)

## Supporting Pages

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search)
- Source ID: `site-docs-reference-2`
- Final score: 150
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Server behavior defaults to DISABLED . geoSearchQueryDetectionFieldNames[] string Field names used for location-based filtering, where geolocation filters are detected in natural language search queries.
- SearchParams JSON representation { "maxReturnResults" : integer , "filter" : string , "boostSpec" : { object ( BoostSpec ) } , "orderBy" : string , "searchResultMode" : enum ( SearchResultMode ) , "customFineTuningSpec" : { object ( CustomFineTuningSpec ) } , "dataStoreSpecs" : [ { object ( DataStoreSpec ) } ] , "naturalLanguageQueryUnderstandingSpec" : { object ( NaturalLanguageQueryUnderstandingSpec ) } } Fields maxReturnResults integer Number of search results to return.
- NaturalLanguageQueryUnderstandingSpec JSON representation { "filterExtractionCondition" : enum ( FilterExtractionCondition ) , "geoSearchQueryDetectionFieldNames" : [ string ] , "extractedFilterBehavior" : enum ( ExtractedFilterBehavior ) , "allowedFieldNames" : [ string ] } Fields filterExtractionCondition enum ( FilterExtractionCondition ) The condition under which filter extraction should occur.
- This field is only used if SearchRequest.NaturalLanguageQueryUnderstandingSpec.FilterExtractionCondition is set to FilterExtractionCondition.ENABLED . allowedFieldNames[] string Optional.

### "Introduction to custom search \_|\_ Vertex AI Search \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search](https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search)
- Source ID: `site-docs-reference`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Retrieval and ranking: There are several sub-components to retrieval and ranking of results: Query understanding for search: Vertex AI Search analyzes a search query using the following: Natural language processing: To understand the intent.
- Key capabilities The key capabilities of Vertex AI Search are as follows: High-quality search: Leverages Google's search expertise to understand user intent, even with complex queries and natural language queries.
- Data ingestion : Vertex AI Search offers different types of ingestion for data from different sources, such as: Crawling for website data Ingesting structured and unstructured data from Cloud Storage and BigQuery or through the REST API Search and browse configuration : Field settings : Control how fields are configured for search and answer generation, such as searchable, retrievable, or indexable.
- Filters with natural language understanding: Translates locations from natural language queries into geo-coordinates and the conditions in natural language queries into filters.

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
- Source ID: `site-docs-reference-2`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- Server behavior defaults to DISABLED . geoSearchQueryDetectionFieldNames[] string Field names used for location-based filtering, where geolocation filters are detected in natural language search queries.
- SearchRequest JSON representation { "servingConfig" : string , "branch" : string , "query" : string , "pageCategories" : [ string ] , "imageQuery" : { object ( ImageQuery ) } , "pageSize" : integer , "pageToken" : string , "offset" : integer , "oneBoxPageSize" : integer , "dataStoreSpecs" : [ { object ( DataStoreSpec ) } ] , "filter" : string , "canonicalFilter" : string , "orderBy" : string , "userInfo" : { object ( UserInfo ) } , "languageCode" : string , "regionCode" : string , "facetSpecs" : [ { object ( FacetSpec ) } ] , "boostSpec" : { object ( BoostSpec ) } , "params" : { string : value , ... } , "queryExpansionSpec" : { object ( QueryExpansionSpec ) } , "spellCorrectionSpec" : { object ( SpellCorrectionSpec ) } , "userPseudoId" : string , "useLatestData" : boolean , "contentSearchSpec" : { object ( ContentSearchSpec ) } , "embeddingSpec" : { object ( EmbeddingSpec ) } , "rankingExpression" : string , "rankingExpressionBackend" : enum ( RankingExpressionBackend ) , "safeSearch" : boolean , "userLabels" : { string : string , ... } , "naturalLanguageQueryUnderstandingSpec" : { object ( NaturalLanguageQueryUnderstandingSpec ) } , "searchAsYouTypeSpec" : { object ( SearchAsYouTypeSpec ) } , "customFineTuningSpec" : { object ( CustomFineTuningSpec ) } , "displaySpec" : { object ( DisplaySpec ) } , "crowdingSpecs" : [ { object ( CrowdingSpec ) } ] , "session" : string , "sessionSpec" : { object ( SessionSpec ) } , "relevanceThreshold" : enum ( RelevanceThreshold ) , "relevanceFilterSpec" : { object ( RelevanceFilterSpec ) } , "personalizationSpec" : { object ( PersonalizationSpec ) } , "relevanceScoreSpec" : { object ( RelevanceScoreSpec ) } , "searchAddonSpec" : { object ( SearchAddonSpec ) } } Fields servingConfig string Required.
- SearchResponse JSON representation { "results" : [ { object ( SearchResult ) } ] , "facets" : [ { object ( Facet ) } ] , "guidedSearchResult" : { object ( GuidedSearchResult ) } , "totalSize" : integer , "attributionToken" : string , "redirectUri" : string , "nextPageToken" : string , "correctedQuery" : string , "suggestedQuery" : string , "summary" : { object ( Summary ) } , "appliedControls" : [ string ] , "geoSearchDebugInfo" : [ { object ( GeoSearchDebugInfo ) } ] , "queryExpansionInfo" : { object ( QueryExpansionInfo ) } , "naturalLanguageQueryUnderstandingInfo" : { object ( NaturalLanguageQueryUnderstandingInfo ) } , "sessionInfo" : { object ( SessionInfo ) } , "oneBoxResults" : [ { object ( OneBoxResult ) } ] , "searchLinkPromotions" : [ { object ( SearchLinkPromotion ) } ] , "semanticState" : enum ( SemanticState ) } Fields results[] object ( SearchResult ) A list of matched documents.
- NaturalLanguageQueryUnderstandingInfo JSON representation { "extractedFilters" : string , "rewrittenQuery" : string , "classifiedIntents" : [ string ] , "structuredExtractedFilter" : { object ( StructuredExtractedFilter ) } } Fields extractedFilters string The filters that were extracted from the input query. rewrittenQuery string Rewritten input query minus the extracted filters. classifiedIntents[] string The classified intents from the input query. structuredExtractedFilter object ( StructuredExtractedFilter ) The filters that were extracted from the input query represented in a structured form.

