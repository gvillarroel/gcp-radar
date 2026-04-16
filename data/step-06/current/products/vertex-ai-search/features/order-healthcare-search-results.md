---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:37.008Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Order healthcare search results"
feature_slug: "order-healthcare-search-results"
latest_feature_date: "2024-04-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/custom-ranking"
keywords:
  - "order"
  - "healthcare"
  - "search"
  - "results"
  - "ordering"
  - "enables"
  - "ranking"
  - "fhir"
---

# Order healthcare search results

Product: Vertex AI Search
Coverage: MEDIUM

## Step 02 Summary

Ordering healthcare search results enables ranking FHIR search results that contain unstructured text by relevance to the user query.

## Extended Definition

Ordering healthcare search results enables ranking FHIR search results that contain unstructured text by relevance to the user query.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results](https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/custom-ranking](https://docs.cloud.google.com/generative-ai-app-builder/docs/custom-ranking)

## Supporting Pages

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
- Source ID: `site-docs-reference-2`
- Final score: 191
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information on ordering the healthcare search results, see Order healthcare search results .
- The order represents the ranking. facets[] object ( Facet ) Results of facets requested by user. guidedSearchResult object ( GuidedSearchResult ) Guided search result. totalSize integer The estimated total count of matched items irrespective of pagination.
- For more information on ordering the website search results, see Order web search results .
- SearchRequest JSON representation { "servingConfig" : string , "branch" : string , "query" : string , "pageCategories" : [ string ] , "imageQuery" : { object ( ImageQuery ) } , "pageSize" : integer , "pageToken" : string , "offset" : integer , "oneBoxPageSize" : integer , "dataStoreSpecs" : [ { object ( DataStoreSpec ) } ] , "filter" : string , "canonicalFilter" : string , "orderBy" : string , "userInfo" : { object ( UserInfo ) } , "languageCode" : string , "regionCode" : string , "facetSpecs" : [ { object ( FacetSpec ) } ] , "boostSpec" : { object ( BoostSpec ) } , "params" : { string : value , ... } , "queryExpansionSpec" : { object ( QueryExpansionSpec ) } , "spellCorrectionSpec" : { object ( SpellCorrectionSpec ) } , "userPseudoId" : string , "useLatestData" : boolean , "contentSearchSpec" : { object ( ContentSearchSpec ) } , "embeddingSpec" : { object ( EmbeddingSpec ) } , "rankingExpression" : string , "rankingExpressionBackend" : enum ( RankingExpressionBackend ) , "safeSearch" : boolean , "userLabels" : { string : string , ... } , "naturalLanguageQueryUnderstandingSpec" : { object ( NaturalLanguageQueryUnderstandingSpec ) } , "searchAsYouTypeSpec" : { object ( SearchAsYouTypeSpec ) } , "customFineTuningSpec" : { object ( CustomFineTuningSpec ) } , "displaySpec" : { object ( DisplaySpec ) } , "crowdingSpecs" : [ { object ( CrowdingSpec ) } ] , "session" : string , "sessionSpec" : { object ( SessionSpec ) } , "relevanceThreshold" : enum ( RelevanceThreshold ) , "relevanceFilterSpec" : { object ( RelevanceFilterSpec ) } , "personalizationSpec" : { object ( PersonalizationSpec ) } , "relevanceScoreSpec" : { object ( RelevanceScoreSpec ) } , "searchAddonSpec" : { object ( SearchAddonSpec ) } } Fields servingConfig string Required.

### Get search results \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results](https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results)
- Source ID: `site-iam-reference`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- Example command and partial result curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/my-project-123/locations/global/collections/default collection/engines/my-app/servingConfigs/default search:search" \ -d '{ "servingConfig": "projects/my-project-123/locations/global/collections/default collection/engines/my-app/servingConfigs/default search", "query": "When was Verily founded and what is its mission?", "relevanceScoreSpec": { "returnRelevanceScore": true } }' { "results": [ { "id": "f1b0d98bd2a078a6dfb4f809c3028565", "document": { "name": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/f1b0d98bd2a078a6dfb4f809c3028565", "id": "f1b0d98bd2a078a6dfb4f809c3028565", "derivedStructData": { "link": "gs://cloud-samples-data/gen-app-builder/search/alphabet-investor-pdfs/2019 alphabet annual report.pdf", "extractive answers": [ { "pageNumber": "70", "content": "VERILY Verily is a life science and healthcare company with a mission to make the world's health data useful so that people enjoy healthier lives.
- Consider document-relevance scores for these use cases: Post-search filtering based on the relevance score to remove irrelevant results Post-search ranking or as input to other applications Debugging: relevance scores can provide insight into why some search results are returned For each search result, a relevance score can be returned: "results": [ { "id": " DOCUMENT ID ", "document": { ... }, "modelScores": { "relevance score": { "values": [ DOCUMENT-RELEVANCE-SCORE ] } } }, ... ] Also see the example command in the procedure below.
- It doesn't return search results that contain Mary had lamb , which has missing words; or a little lamb had Mary , which has the words in a different order.
- For more information, see Order web search results .

### "Customize search results ranking \_|\_ Vertex AI Search \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/custom-ranking](https://docs.cloud.google.com/generative-ai-app-builder/docs/custom-ranking)
- Source ID: `site-docs-root`
- Final score: 126
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Get search results. curl -X POST -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /servingConfigs/default search:search" \ -d '{ "servingConfig": "projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /servingConfigs/default search", "query": " QUERY ", "rankingExpression": " RANKING EXPRESSION ", "rankingExpressionBackend": "RANK BY FORMULA" }' Replace the following: PROJECT ID : the ID of your Google Cloud project.
- Text fields for keyword similarity In structured data stores, to obtain the keywordSimilarityScore signal in your search response, you must update your schema to do the following: Map the text fields essential for keyword matching to the key properties title and description Update the annotation for the text fields as Searchable Customize ranking using ranking formula in search To customize the ranking for your documents in your search results, manually draft a formula and add it to your search API call.
- About implementing custom ranking To get custom ranking in your search results, you must call the search method by providing the following fields: Ranking expression backend ( rankingExpressionBackend ): This field indicates which of the following ranking mechanisms is to be used.
- Home Documentation AI and ML Vertex AI Search Send feedback Customize search results ranking Stay organized with collections Save and categorize content based on your preferences.

