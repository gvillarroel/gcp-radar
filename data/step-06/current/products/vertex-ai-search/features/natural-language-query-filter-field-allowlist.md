---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:36.906Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Natural-language query filter field allowlist"
feature_slug: "natural-language-query-filter-field-allowlist"
latest_feature_date: "2025-11-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-field-settings"
keywords:
  - "natural"
  - "language"
  - "query"
  - "filter"
  - "field"
  - "allowlist"
  - "vertex"
  - "ai"
---

# Natural-language query filter field allowlist

Product: Vertex AI Search
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Search added support for specifying an allowlist of fields that can be used for natural-language filter extraction.

## Extended Definition

Vertex AI Search added support for specifying an allowlist of fields that can be used for natural-language filter extraction.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-field-settings](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-field-settings)

## Supporting Pages

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
- Source ID: `site-docs-reference-2`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- SearchRequest JSON representation { "servingConfig" : string , "branch" : string , "query" : string , "pageCategories" : [ string ] , "imageQuery" : { object ( ImageQuery ) } , "pageSize" : integer , "pageToken" : string , "offset" : integer , "oneBoxPageSize" : integer , "dataStoreSpecs" : [ { object ( DataStoreSpec ) } ] , "filter" : string , "canonicalFilter" : string , "orderBy" : string , "userInfo" : { object ( UserInfo ) } , "languageCode" : string , "regionCode" : string , "facetSpecs" : [ { object ( FacetSpec ) } ] , "boostSpec" : { object ( BoostSpec ) } , "params" : { string : value , ... } , "queryExpansionSpec" : { object ( QueryExpansionSpec ) } , "spellCorrectionSpec" : { object ( SpellCorrectionSpec ) } , "userPseudoId" : string , "useLatestData" : boolean , "contentSearchSpec" : { object ( ContentSearchSpec ) } , "embeddingSpec" : { object ( EmbeddingSpec ) } , "rankingExpression" : string , "rankingExpressionBackend" : enum ( RankingExpressionBackend ) , "safeSearch" : boolean , "userLabels" : { string : string , ... } , "naturalLanguageQueryUnderstandingSpec" : { object ( NaturalLanguageQueryUnderstandingSpec ) } , "searchAsYouTypeSpec" : { object ( SearchAsYouTypeSpec ) } , "customFineTuningSpec" : { object ( CustomFineTuningSpec ) } , "displaySpec" : { object ( DisplaySpec ) } , "crowdingSpecs" : [ { object ( CrowdingSpec ) } ] , "session" : string , "sessionSpec" : { object ( SessionSpec ) } , "relevanceThreshold" : enum ( RelevanceThreshold ) , "relevanceFilterSpec" : { object ( RelevanceFilterSpec ) } , "personalizationSpec" : { object ( PersonalizationSpec ) } , "relevanceScoreSpec" : { object ( RelevanceScoreSpec ) } , "searchAddonSpec" : { object ( SearchAddonSpec ) } } Fields servingConfig string Required.
- NaturalLanguageQueryUnderstandingInfo JSON representation { "extractedFilters" : string , "rewrittenQuery" : string , "classifiedIntents" : [ string ] , "structuredExtractedFilter" : { object ( StructuredExtractedFilter ) } } Fields extractedFilters string The filters that were extracted from the input query. rewrittenQuery string Rewritten input query minus the extracted filters. classifiedIntents[] string The classified intents from the input query. structuredExtractedFilter object ( StructuredExtractedFilter ) The filters that were extracted from the input query represented in a structured form.
- UserLabelsEntry JSON representation { "key" : string , "value" : string } Fields key string value string NaturalLanguageQueryUnderstandingSpec JSON representation { "filterExtractionCondition" : enum ( FilterExtractionCondition ) , "geoSearchQueryDetectionFieldNames" : [ string ] , "extractedFilterBehavior" : enum ( ExtractedFilterBehavior ) , "allowedFieldNames" : [ string ] } Fields filterExtractionCondition enum ( FilterExtractionCondition ) The condition under which filter extraction should occur.
- Server behavior defaults to DISABLED . geoSearchQueryDetectionFieldNames[] string Field names used for location-based filtering, where geolocation filters are detected in natural language search queries.

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search)
- Source ID: `site-docs-reference-2`
- Final score: 166
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SearchParams JSON representation { "maxReturnResults" : integer , "filter" : string , "boostSpec" : { object ( BoostSpec ) } , "orderBy" : string , "searchResultMode" : enum ( SearchResultMode ) , "customFineTuningSpec" : { object ( CustomFineTuningSpec ) } , "dataStoreSpecs" : [ { object ( DataStoreSpec ) } ] , "naturalLanguageQueryUnderstandingSpec" : { object ( NaturalLanguageQueryUnderstandingSpec ) } } Fields maxReturnResults integer Number of search results to return.
- NaturalLanguageQueryUnderstandingSpec JSON representation { "filterExtractionCondition" : enum ( FilterExtractionCondition ) , "geoSearchQueryDetectionFieldNames" : [ string ] , "extractedFilterBehavior" : enum ( ExtractedFilterBehavior ) , "allowedFieldNames" : [ string ] } Fields filterExtractionCondition enum ( FilterExtractionCondition ) The condition under which filter extraction should occur.
- Server behavior defaults to DISABLED . geoSearchQueryDetectionFieldNames[] string Field names used for location-based filtering, where geolocation filters are detected in natural language search queries.
- If any fields are specified in allowed field names, only the fields that are both marked as indexable in the schema and specified in the allowlist will be eligible for natural language filter extraction.

### Configure field settings \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-field-settings](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-field-settings)
- Source ID: `site-docs-reference`
- Final score: 155
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Certain factors such as use of natural language filtering can impact this performance.
- If the completable field is set for product name , brand , and category , when the user types Tech, the autocomplete suggestions can show: TechCo (from the brand field) TechCo UltraBook X1 (from the product name field) Technology GameMaster Pro (another product from the category field) Filterable Allows recommendations to use a field to filter recommended results, determining which search results your users see.
- Feature Indexable Searchable Retrievable Primary Role Makes field content available to search engine Allows full-text querying against field content Allows field's value to be returned in search results Analysis Content is processed and put into an index.
- Using structured data is highly recommended for these field settings: Setting Definition Purpose Use case example Indexable Setting fields to indexable allows for operations like filtering, boosting, and faceting on structured fields within a document.

