---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:36.943Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Media recommendation boost controls"
feature_slug: "media-recommendation-boost-controls"
latest_feature_date: "2024-12-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search"
keywords:
  - "media"
  - "recommendation"
  - "boost"
  - "controls"
  - "allows"
  - "tuning"
  - "ranking"
  - "content"
---

# Media recommendation boost controls

Product: Vertex AI Search
Coverage: MEDIUM

## Step 02 Summary

Allows tuning recommendation ranking for media content by applying string and boolean schema filters with boost values from -1 to 1 to lower or raise results in API recommendation responses.

## Extended Definition

Allows tuning recommendation ranking for media content by applying string and boolean schema filters with boost values from -1 to 1 to lower or raise results in API recommendation responses.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search)

## Supporting Pages

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
- Source ID: `site-docs-reference-2`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- SearchRequest JSON representation { "servingConfig" : string , "branch" : string , "query" : string , "pageCategories" : [ string ] , "imageQuery" : { object ( ImageQuery ) } , "pageSize" : integer , "pageToken" : string , "offset" : integer , "oneBoxPageSize" : integer , "dataStoreSpecs" : [ { object ( DataStoreSpec ) } ] , "filter" : string , "canonicalFilter" : string , "orderBy" : string , "userInfo" : { object ( UserInfo ) } , "languageCode" : string , "regionCode" : string , "facetSpecs" : [ { object ( FacetSpec ) } ] , "boostSpec" : { object ( BoostSpec ) } , "params" : { string : value , ... } , "queryExpansionSpec" : { object ( QueryExpansionSpec ) } , "spellCorrectionSpec" : { object ( SpellCorrectionSpec ) } , "userPseudoId" : string , "useLatestData" : boolean , "contentSearchSpec" : { object ( ContentSearchSpec ) } , "embeddingSpec" : { object ( EmbeddingSpec ) } , "rankingExpression" : string , "rankingExpressionBackend" : enum ( RankingExpressionBackend ) , "safeSearch" : boolean , "userLabels" : { string : string , ... } , "naturalLanguageQueryUnderstandingSpec" : { object ( NaturalLanguageQueryUnderstandingSpec ) } , "searchAsYouTypeSpec" : { object ( SearchAsYouTypeSpec ) } , "customFineTuningSpec" : { object ( CustomFineTuningSpec ) } , "displaySpec" : { object ( DisplaySpec ) } , "crowdingSpecs" : [ { object ( CrowdingSpec ) } ] , "session" : string , "sessionSpec" : { object ( SessionSpec ) } , "relevanceThreshold" : enum ( RelevanceThreshold ) , "relevanceFilterSpec" : { object ( RelevanceFilterSpec ) } , "personalizationSpec" : { object ( PersonalizationSpec ) } , "relevanceScoreSpec" : { object ( RelevanceScoreSpec ) } , "searchAddonSpec" : { object ( SearchAddonSpec ) } } Fields servingConfig string Required.
- If both are set then the global boost is ignored and the more fine-grained boost control spec is applied. boostControlSpec object ( BoostControlSpec ) Complex specification for custom ranking based on customer defined attribute value.
- This field is only returned if SearchRequest.ContentSearchSpec.summary spec is set. appliedControls[] string Controls applied as part of the Control service. geoSearchDebugInfo[] object ( GeoSearchDebugInfo ) queryExpansionInfo object ( QueryExpansionInfo ) Query expansion information for the returned results. naturalLanguageQueryUnderstandingInfo object ( NaturalLanguageQueryUnderstandingInfo ) Output only.
- BoostControlSpec JSON representation { "fieldName" : string , "attributeType" : enum ( AttributeType ) , "interpolationType" : enum ( InterpolationType ) , "controlPoints" : [ { object ( ControlPoint ) } ] } Fields fieldName string The name of the field whose value will be used to determine the boost amount. attributeType enum ( AttributeType ) The attribute type to be used to determine the boost amount.

### "Configure serving controls for search \_|\_ Vertex AI Search \_|\_ Google\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls)
- Source ID: `site-docs-reference`
- Final score: 178
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Serving control types The following types of serving controls are available: Control Description Available for Boost control Changes the returned order of results Search apps with data stores that support a schema, such as data stores that contain structured data, websites with structured data (advanced website indexing), unstructured data with metadata, or media data Filter control Removes entries from returned results Search apps with data stores that support a schema, such as data stores that contain structured data, websites (advanced website indexing), unstructured data with metadata, or media data Synonyms control Associates queries with each other Search apps with website (advanced website indexing), structured, unstructured, or media data stores Redirect control Redirects to a specified URI All search apps Promote control Promotes a specified link for a query All search apps About conditions When creating a control, you can optionally define a condition that determines when the control is applied.
- Run the following curl commands to create your controls. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -H "X-Goog-User-Project: PROJECT ID " \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /controls?controlId= CONTROL ID " \ -d '{ "displayName": " DISPLAY NAME ", "solutionType": "SOLUTION TYPE SEARCH", "useCases": [ " USE CASE " ], "conditions": { "queryTerms": [ { "value": " VALUE ", "fullMatch": FULL MATCH } ], "activeTimeRange": [ { "startTime": " START TIMESTAMP ", "endTime": " END TIMESTAMP " } ] }, "boostAction": { "boost": BOOST VALUE , "filter": " FILTER ", "dataStore": " DATA STORE RESOURCE PATH " } }' Replace the following: PROJECT ID : the number or ID of your Google Cloud project.
- For information about using serving controls with media recommendations, see Create and manage media serving configs .
- REST Run the following curl commands to create your controls. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -H "X-Goog-User-Project: PROJECT ID " \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /controls?controlId= CONTROL ID " \ -d '{ "displayName": " DISPLAY NAME ", "solutionType": "SOLUTION TYPE SEARCH", "useCases": [" USE CASE "], "conditions": { "queryTerms": [ { "value": " VALUE ", "fullMatch": true } ], "activeTimeRange": [ { "startTime": " START TIMESTAMP ", "endTime": " END TIMESTAMP " } ], "queryRegex": " VALUE REGEX " }, "promoteAction": { "dataStore": " DATA STORE RESOURCE PATH ", "searchLinkPromotion": { "document": " DOCUMENT RESOURCE PATH ", "title": " TITLE ", "uri": " URI ", "description": " DESCRIPTION ", "enabled": ENABLED TRUE FALSE , } } }' Replace the following: PROJECT ID : the number or ID of your Google Cloud project.

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/conversational_search)
- Source ID: `site-docs-reference-2`
- Final score: 159
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If both are set then the global boost is ignored and the more fine-grained boost control spec is applied. boostControlSpec object ( BoostControlSpec ) Complex specification for custom ranking based on customer defined attribute value.
- SearchParams JSON representation { "maxReturnResults" : integer , "filter" : string , "boostSpec" : { object ( BoostSpec ) } , "orderBy" : string , "searchResultMode" : enum ( SearchResultMode ) , "customFineTuningSpec" : { object ( CustomFineTuningSpec ) } , "dataStoreSpecs" : [ { object ( DataStoreSpec ) } ] , "naturalLanguageQueryUnderstandingSpec" : { object ( NaturalLanguageQueryUnderstandingSpec ) } } Fields maxReturnResults integer Number of search results to return.
- BoostControlSpec JSON representation { "fieldName" : string , "attributeType" : enum ( AttributeType ) , "interpolationType" : enum ( InterpolationType ) , "controlPoints" : [ { object ( ControlPoint ) } ] } Fields fieldName string The name of the field whose value will be used to determine the boost amount. attributeType enum ( AttributeType ) The attribute type to be used to determine the boost amount.
- ConditionBoostSpec JSON representation { "condition" : string , "boost" : number , "boostControlSpec" : { object ( BoostControlSpec ) } } Fields condition string An expression which specifies a boost condition.

