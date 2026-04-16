---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:36.912Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Custom ranking"
feature_slug: "custom-ranking"
latest_feature_date: "2025-08-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/custom-ranking"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/browse-generic-search"
keywords:
  - "custom"
  - "ranking"
  - "vertex"
  - "ai"
  - "search"
  - "enables"
  - "results"
  - "mathematical"
---

# Custom ranking

Product: Vertex AI Search
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Search custom ranking enables ranking search results using mathematical expressions over model signals and document fields.

## Extended Definition

Vertex AI Search custom ranking enables ranking search results using mathematical expressions over model signals and document fields.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/custom-ranking](https://docs.cloud.google.com/generative-ai-app-builder/docs/custom-ranking)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/browse-generic-search](https://docs.cloud.google.com/generative-ai-app-builder/docs/browse-generic-search)

## Supporting Pages

### "Customize search results ranking \_|\_ Vertex AI Search \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/custom-ranking](https://docs.cloud.google.com/generative-ai-app-builder/docs/custom-ranking)
- Source ID: `site-docs-root`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Vertex AI Search Send feedback Customize search results ranking Stay organized with collections Save and categorize content based on your preferences.
- Text fields for keyword similarity In structured data stores, to obtain the keywordSimilarityScore signal in your search response, you must update your schema to do the following: Map the text fields essential for keyword matching to the key properties title and description Update the annotation for the text fields as Searchable Customize ranking using ranking formula in search To customize the ranking for your documents in your search results, manually draft a formula and add it to your search API call.
- About implementing custom ranking To get custom ranking in your search results, you must call the search method by providing the following fields: Ranking expression backend ( rankingExpressionBackend ): This field indicates which of the following ranking mechanisms is to be used.
- With custom ranking, you can achieve the following: Gain visibility : Understand which signals contribute to the final ranking of your search results.

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
- Source ID: `site-docs-reference-2`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- SearchRequest JSON representation { "servingConfig" : string , "branch" : string , "query" : string , "pageCategories" : [ string ] , "imageQuery" : { object ( ImageQuery ) } , "pageSize" : integer , "pageToken" : string , "offset" : integer , "oneBoxPageSize" : integer , "dataStoreSpecs" : [ { object ( DataStoreSpec ) } ] , "filter" : string , "canonicalFilter" : string , "orderBy" : string , "userInfo" : { object ( UserInfo ) } , "languageCode" : string , "regionCode" : string , "facetSpecs" : [ { object ( FacetSpec ) } ] , "boostSpec" : { object ( BoostSpec ) } , "params" : { string : value , ... } , "queryExpansionSpec" : { object ( QueryExpansionSpec ) } , "spellCorrectionSpec" : { object ( SpellCorrectionSpec ) } , "userPseudoId" : string , "useLatestData" : boolean , "contentSearchSpec" : { object ( ContentSearchSpec ) } , "embeddingSpec" : { object ( EmbeddingSpec ) } , "rankingExpression" : string , "rankingExpressionBackend" : enum ( RankingExpressionBackend ) , "safeSearch" : boolean , "userLabels" : { string : string , ... } , "naturalLanguageQueryUnderstandingSpec" : { object ( NaturalLanguageQueryUnderstandingSpec ) } , "searchAsYouTypeSpec" : { object ( SearchAsYouTypeSpec ) } , "customFineTuningSpec" : { object ( CustomFineTuningSpec ) } , "displaySpec" : { object ( DisplaySpec ) } , "crowdingSpecs" : [ { object ( CrowdingSpec ) } ] , "session" : string , "sessionSpec" : { object ( SessionSpec ) } , "relevanceThreshold" : enum ( RelevanceThreshold ) , "relevanceFilterSpec" : { object ( RelevanceFilterSpec ) } , "personalizationSpec" : { object ( PersonalizationSpec ) } , "relevanceScoreSpec" : { object ( RelevanceScoreSpec ) } , "searchAddonSpec" : { object ( SearchAddonSpec ) } } Fields servingConfig string Required.
- The order represents the ranking. facets[] object ( Facet ) Results of facets requested by user. guidedSearchResult object ( GuidedSearchResult ) Guided search result. totalSize integer The estimated total count of matched items irrespective of pagination.
- CustomFineTuningSpec JSON representation { "enableSearchAdaptor" : boolean } Fields enableSearchAdaptor boolean Whether or not to enable and include custom fine tuned search adaptor model.
- Filtering in Vertex AI Search is done by mapping the LHS filter key to a key property defined in the Vertex AI Search backend -- this mapping is defined by the customer in their schema.

### "Get personalized browse results \_|\_ Vertex AI Search \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/browse-generic-search](https://docs.cloud.google.com/generative-ai-app-builder/docs/browse-generic-search)
- Source ID: `site-docs-reference`
- Final score: 130
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Get personalized browse results Add more fields to your search request like filters and ranking adjustments, such as boost or custom ranking.
- Some important features are as follows: Ranking: The model ranks items based on predicted performance against your defined objective that's subject to the configured search parameters, such as filters, custom ranking, and serving controls (like boost, promote, or synonyms).
- Home Documentation AI and ML Vertex AI Search Send feedback Get personalized browse results Stay organized with collections Save and categorize content based on your preferences.
- This page describes how to get browse results for custom search data stores and some best practices to set up your search app.

