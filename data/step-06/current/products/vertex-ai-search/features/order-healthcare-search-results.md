---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:30:14.898Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Order healthcare search results"
feature_slug: "order-healthcare-search-results"
latest_feature_date: "2024-04-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/custom-ranking"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/boost-search-results"
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
Coverage: LOW

## Step 02 Summary

Ordering healthcare search results enables ranking FHIR search results that contain unstructured text by relevance to the user query.

## Extended Definition

Ordering healthcare search results enables ranking FHIR search results that contain unstructured text by relevance to the user query.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results](https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/custom-ranking](https://docs.cloud.google.com/generative-ai-app-builder/docs/custom-ranking)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/boost-search-results](https://docs.cloud.google.com/generative-ai-app-builder/docs/boost-search-results)

## Supporting Pages

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
- Source ID: `site-docs-reference-2`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- For more information on ordering the healthcare search results, see Order healthcare search results .
- The order represents the ranking. facets[] object ( Facet ) Results of facets requested by user. guidedSearchResult object ( GuidedSearchResult ) Guided search result. totalSize integer The estimated total count of matched items irrespective of pagination.
- For more information on ordering the website search results, see Order web search results .
- SearchRequest JSON representation { "servingConfig" : string , "branch" : string , "query" : string , "pageCategories" : [ string ] , "imageQuery" : { object ( ImageQuery ) } , "pageSize" : integer , "pageToken" : string , "offset" : integer , "oneBoxPageSize" : integer , "dataStoreSpecs" : [ { object ( DataStoreSpec ) } ] , "filter" : string , "canonicalFilter" : string , "orderBy" : string , "userInfo" : { object ( UserInfo ) } , "languageCode" : string , "regionCode" : string , "facetSpecs" : [ { object ( FacetSpec ) } ] , "boostSpec" : { object ( BoostSpec ) } , "params" : { string : value , ... } , "queryExpansionSpec" : { object ( QueryExpansionSpec ) } , "spellCorrectionSpec" : { object ( SpellCorrectionSpec ) } , "userPseudoId" : string , "useLatestData" : boolean , "contentSearchSpec" : { object ( ContentSearchSpec ) } , "embeddingSpec" : { object ( EmbeddingSpec ) } , "rankingExpression" : string , "rankingExpressionBackend" : enum ( RankingExpressionBackend ) , "safeSearch" : boolean , "userLabels" : { string : string , ... } , "naturalLanguageQueryUnderstandingSpec" : { object ( NaturalLanguageQueryUnderstandingSpec ) } , "searchAsYouTypeSpec" : { object ( SearchAsYouTypeSpec ) } , "customFineTuningSpec" : { object ( CustomFineTuningSpec ) } , "displaySpec" : { object ( DisplaySpec ) } , "crowdingSpecs" : [ { object ( CrowdingSpec ) } ] , "session" : string , "sessionSpec" : { object ( SessionSpec ) } , "relevanceThreshold" : enum ( RelevanceThreshold ) , "relevanceFilterSpec" : { object ( RelevanceFilterSpec ) } , "personalizationSpec" : { object ( PersonalizationSpec ) } , "relevanceScoreSpec" : { object ( RelevanceScoreSpec ) } , "searchAddonSpec" : { object ( SearchAddonSpec ) } } Fields servingConfig string Required.

### Get search results \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results](https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results)
- Source ID: `site-iam-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Example command and partial result curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/my-project-123/locations/global/collections/default collection/engines/my-app/servingConfigs/default search:search" \ -d '{ "servingConfig": "projects/my-project-123/locations/global/collections/default collection/engines/my-app/servingConfigs/default search", "query": "When was Verily founded and what is its mission?", "relevanceScoreSpec": { "returnRelevanceScore": true } }' { "results": [ { "id": "f1b0d98bd2a078a6dfb4f809c3028565", "document": { "name": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/f1b0d98bd2a078a6dfb4f809c3028565", "id": "f1b0d98bd2a078a6dfb4f809c3028565", "derivedStructData": { "link": "gs://cloud-samples-data/gen-app-builder/search/alphabet-investor-pdfs/2019 alphabet annual report.pdf", "extractive answers": [ { "pageNumber": "70", "content": "VERILY Verily is a life science and healthcare company with a mission to make the world's health data useful so that people enjoy healthier lives.
- Consider document-relevance scores for these use cases: Post-search filtering based on the relevance score to remove irrelevant results Post-search ranking or as input to other applications Debugging: relevance scores can provide insight into why some search results are returned For each search result, a relevance score can be returned: "results": [ { "id": " DOCUMENT ID ", "document": { ... }, "modelScores": { "relevance score": { "values": [ DOCUMENT-RELEVANCE-SCORE ] } } }, ... ] Also see the example command in the procedure below.
- It doesn't return search results that contain Mary had lamb , which has missing words; or a little lamb had Mary , which has the words in a different order.
- For more information, see Order web search results .

### "Customize search results ranking \_|\_ Vertex AI Search \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/custom-ranking](https://docs.cloud.google.com/generative-ai-app-builder/docs/custom-ranking)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Get search results. curl -X POST -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /servingConfigs/default search:search" \ -d '{ "servingConfig": "projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /servingConfigs/default search", "query": " QUERY ", "rankingExpression": " RANKING EXPRESSION ", "rankingExpressionBackend": "RANK BY FORMULA" }' Replace the following: PROJECT ID : the ID of your Google Cloud project.
- Text fields for keyword similarity In structured data stores, to obtain the keywordSimilarityScore signal in your search response, you must update your schema to do the following: Map the text fields essential for keyword matching to the key properties title and description Update the annotation for the text fields as Searchable Customize ranking using ranking formula in search To customize the ranking for your documents in your search results, manually draft a formula and add it to your search API call.
- About implementing custom ranking To get custom ranking in your search results, you must call the search method by providing the following fields: Ranking expression backend ( rankingExpressionBackend ): This field indicates which of the following ranking mechanisms is to be used.
- Home Documentation AI and ML Vertex AI Search Send feedback Customize search results ranking Stay organized with collections Save and categorize content based on your preferences.

### Boost search results \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/boost-search-results](https://docs.cloud.google.com/generative-ai-app-builder/docs/boost-search-results)
- Source ID: `site-api-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- You can define the boost specification as follows: { "boostSpec": { "conditionBoostSpecs": { "condition": true, "boostControlSpec": { "fieldName": "publication date", "attributeType": "FRESHNESS", "interpolationType": "LINEAR", "controlPoints": [ { "attributeValue": "7D", "boostAmount": 0.40 }, { "attributeValue": "30D", "boostAmount": 0.37 }, { "attributeValue": "60D", "boostAmount": 0.32 }, { "attributeValue": "90D", "boostAmount": 0 } ] } } } } For this scenario, the search results are boosted as follows: Freshness Boost amount less than or equal to 7 days 0.40 between 7 and 30 days between 0.40 and 0.37, calculated using linear interpolation equal to 30 days 0.37 between 30 and 60 days between 0.37 and 0.32, calculated using linear interpolation equal to 60 days 0.32 between 60 and 90 days between 0.32 and 0.0, calculated using linear interpolation greater than or equal to 90 days 0.0 Example use case using a Google-inferred page date When crawling through the web pages in your website data store, Google infers page data using the properties that apply to your content.
- You can define the boost specification as follows: { "boostSpec": { "conditionBoostSpecs": { "condition": "star rating >= 3.0", "boostControlSpec": { "attributeType": "NUMERICAL", "interpolationType": "LINEAR", "fieldName": "star rating", "controlPoints": [ { "attributeValue": "3.5", "boostAmount": 0.25 }, { "attributeValue": "4.0", "boostAmount": 0.30 }, { "attributeValue": "4.5", "boostAmount": 0.32 } ] } } } } For this scenario, the search results are boosted as follows: Star rating Boost amount less than or equal to 3.5 0.25 between 3.5 and 4.0 between 0.25 and 0.30, calculated using linear interpolation equal to 4.0 0.30 between 4.0 and 4.5 between 0.30 and 0.32, calculated using linear interpolation greater than or equal to 4.5 0.32 Boost according to freshness You can boost results based on datetime attributes in a piecewise linear manner by specifying control points and their corresponding boost values.
- Boost with a fixed condition To boost results by a fixed amount based on whether they satisfy a condition, do the following: Specify the boost specification in the boostSpec field when you send a servingConfigs.search request. { "boostSpec": { "conditionBoostSpecs": { "condition": " BOOST CONDITION ", "boost": BOOST VALUE } } } The specification contains the following parameters: BOOST CONDITION : a text filter expression to select the documents to which boost is applied.
- Therefore, the applied conditions alter the ranking of the pages in the results in the following manner: Document Published date Relevance Ranking E Jun 1, 2024 Low #1 D May 1, 2024 Medium #2 A Feb 1, 2024 High #3 B Mar 1, 2024 High #4 The result with the lowest relevance is filtered out because of the relevance filter.

