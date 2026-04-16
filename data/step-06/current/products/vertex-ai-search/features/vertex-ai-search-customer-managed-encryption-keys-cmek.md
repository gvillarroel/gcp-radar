---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:37.071Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Vertex AI Search customer-managed encryption keys (CMEK)"
feature_slug: "vertex-ai-search-customer-managed-encryption-keys-cmek"
latest_feature_date: "2024-01-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search"
keywords:
  - "vertex"
  - "ai"
  - "search"
  - "customer"
  - "managed"
  - "encryption"
  - "keys"
  - "cmek"
---

# Vertex AI Search customer-managed encryption keys (CMEK)

Product: Vertex AI Search
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Search now supports GA customer-managed encryption keys for data stores in US and EU regions, allowing customers to use their own keys to encrypt data at rest.

## Extended Definition

Vertex AI Search now supports GA customer-managed encryption keys for data stores in US and EU regions, allowing customers to use their own keys to encrypt data at rest.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek](https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)

## Supporting Pages

### "Customer-managed encryption keys \_|\_ Vertex AI Search \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek](https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek)
- Source ID: `site-docs-reference`
- Final score: 241
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you want to control your encryption keys, then you can use customer-managed encryption keys (CMEKs) in Cloud KMS with CMEK-integrated services including Vertex AI Search.
- Home Documentation AI and ML Vertex AI Search Send feedback Customer-managed encryption keys Stay organized with collections Save and categorize content based on your preferences.
- For more information about your encryption options, see Customer-managed encryption keys (CMEK) .
- An example curl call and response looks like this: $ curl -X GET -H "Authorization: Bearer $(gcloud auth print-access-token)" "https://us-discoveryengine.googleapis.com/v1/projects/my-ai-app-project-123/locations/us/cmekConfigs" { "cmek configs": [ { "name": "projects/my-ai-app-project-123/locations/us/cmekConfigs/default cmek config", "kmsKey": "projects/key-project-456/locations/us/keyRings/my-key-ring/cryptoKeys/my-key" "state": "ACTIVE" "isDefault": true } ] } Unregister your Cloud KMS key To unregister your key from Vertex AI Search, follow these steps: Call the DeleteCmekConfig method with the CmekConfig resource name that you want to unregister. curl -X DELETE \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ "https:// LOCATION -discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /cmekConfigs/ CMEK CONFIG ID " Replace the following: LOCATION : the multi-region of your data store: us or eu .

### Create a search data store \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- Source ID: `site-docs-root`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Customer-managed encryption keys (CMEK) Your keys only encrypt data within Google Cloud.
- Customer-managed encryption keys (CMEK) Your keys only encrypt data within Google Cloud.
- Customer-managed encryption keys (CMEK) Your keys only encrypt data within Google Cloud.
- Customer-managed encryption keys (CMEK) Your keys only encrypt data within Google Cloud.

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
- Source ID: `site-docs-reference-2`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- Filtering in Vertex AI Search is done by mapping the LHS filter key to a key property defined in the Vertex AI Search backend -- this mapping is defined by the customer in their schema.
- Home Documentation AI and ML Vertex AI Search Reference Send feedback MCP Tools Reference: discoveryengine.googleapis.com Stay organized with collections Save and categorize content based on your preferences.
- SearchRequest JSON representation { "servingConfig" : string , "branch" : string , "query" : string , "pageCategories" : [ string ] , "imageQuery" : { object ( ImageQuery ) } , "pageSize" : integer , "pageToken" : string , "offset" : integer , "oneBoxPageSize" : integer , "dataStoreSpecs" : [ { object ( DataStoreSpec ) } ] , "filter" : string , "canonicalFilter" : string , "orderBy" : string , "userInfo" : { object ( UserInfo ) } , "languageCode" : string , "regionCode" : string , "facetSpecs" : [ { object ( FacetSpec ) } ] , "boostSpec" : { object ( BoostSpec ) } , "params" : { string : value , ... } , "queryExpansionSpec" : { object ( QueryExpansionSpec ) } , "spellCorrectionSpec" : { object ( SpellCorrectionSpec ) } , "userPseudoId" : string , "useLatestData" : boolean , "contentSearchSpec" : { object ( ContentSearchSpec ) } , "embeddingSpec" : { object ( EmbeddingSpec ) } , "rankingExpression" : string , "rankingExpressionBackend" : enum ( RankingExpressionBackend ) , "safeSearch" : boolean , "userLabels" : { string : string , ... } , "naturalLanguageQueryUnderstandingSpec" : { object ( NaturalLanguageQueryUnderstandingSpec ) } , "searchAsYouTypeSpec" : { object ( SearchAsYouTypeSpec ) } , "customFineTuningSpec" : { object ( CustomFineTuningSpec ) } , "displaySpec" : { object ( DisplaySpec ) } , "crowdingSpecs" : [ { object ( CrowdingSpec ) } ] , "session" : string , "sessionSpec" : { object ( SessionSpec ) } , "relevanceThreshold" : enum ( RelevanceThreshold ) , "relevanceFilterSpec" : { object ( RelevanceFilterSpec ) } , "personalizationSpec" : { object ( PersonalizationSpec ) } , "relevanceScoreSpec" : { object ( RelevanceScoreSpec ) } , "searchAddonSpec" : { object ( SearchAddonSpec ) } } Fields servingConfig string Required.
- SearchResponse JSON representation { "results" : [ { object ( SearchResult ) } ] , "facets" : [ { object ( Facet ) } ] , "guidedSearchResult" : { object ( GuidedSearchResult ) } , "totalSize" : integer , "attributionToken" : string , "redirectUri" : string , "nextPageToken" : string , "correctedQuery" : string , "suggestedQuery" : string , "summary" : { object ( Summary ) } , "appliedControls" : [ string ] , "geoSearchDebugInfo" : [ { object ( GeoSearchDebugInfo ) } ] , "queryExpansionInfo" : { object ( QueryExpansionInfo ) } , "naturalLanguageQueryUnderstandingInfo" : { object ( NaturalLanguageQueryUnderstandingInfo ) } , "sessionInfo" : { object ( SessionInfo ) } , "oneBoxResults" : [ { object ( OneBoxResult ) } ] , "searchLinkPromotions" : [ { object ( SearchLinkPromotion ) } ] , "semanticState" : enum ( SemanticState ) } Fields results[] object ( SearchResult ) A list of matched documents.

