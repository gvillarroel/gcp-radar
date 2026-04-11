---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:30:14.982Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Enterprise Search analytics dashboard time-period comparison"
feature_slug: "enterprise-search-analytics-dashboard-time-period-comparison"
latest_feature_date: "2023-06-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/answer"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations"
keywords:
  - "enterprise"
  - "search"
  - "analytics"
  - "dashboard"
  - "time"
  - "period"
  - "comparison"
  - "now"
---

# Enterprise Search analytics dashboard time-period comparison

Product: Vertex AI Search
Coverage: LOW

## Step 02 Summary

Enterprise Search analytics now allows comparing metrics for two time periods in the preview analytics dashboard.

## Extended Definition

Enterprise Search analytics now allows comparing metrics for two time periods in the preview analytics dashboard.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations)

## Supporting Pages

### Get answers and follow-ups \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- Source ID: `site-api-reference`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- They can replicate data from Spanner into BigQuery and perform analytics against local data, or they can use federated queries to retrieve data from Spanner on-demand.\n", "steps": [ { "state": "SUCCEEDED", "description": "Rephrase the query and search.", "actions": [ { "searchAction": { "query": "Compare bigquery with spanner database?" }, "observation": { "searchResults": [ { "document": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/ecc0e7547253f4ca3ff3328ce89995af", "uri": "https://cloud.google.com/blog/topics/developers-practitioners/how-spanner-and-bigquery-work-together-handle-transactional-and-analytical-workloads", "title": "How Spanner and BigQuery work together to handle transactional and analytical workloads Google Cloud Blog", "snippetInfo": [ { "snippet": "Using Cloud \u003cb\u003eSpanner\u003c/b\u003e and \u003cb\u003eBigQuery\u003c/b\u003e also allows customers to build their \u003cb\u003edata\u003c/b\u003e clouds using Google Cloud, a unified, open approach to \u003cb\u003edata\u003c/b\u003e-driven transformation ...", "snippetStatus": "SUCCESS" } ] }, { "document": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/d7e238f73608a860e00b752ef80e2941", "uri": "https://cloud.google.com/blog/products/databases/cloud-spanner-gets-stronger-with-bigquery-federated-queries", "title": "Cloud Spanner gets stronger with BigQuery-federated queries Google Cloud Blog", "snippetInfo": [ { "snippet": "As enterprises compete for market share, their need for real-time insights has given rise to increased demand for transactional \u003cb\u003edatabases\u003c/b\u003e to support \u003cb\u003edata\u003c/b\u003e ...", "snippetStatus": "SUCCESS" } ] }, { "document": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/e10a5a3c267dc61579e7c00fefe656eb", "uri": "https://cloud.google.com/blog/topics/developers-practitioners/replicating-cloud-spanner-bigquery-scale", "title": "Replicating from Cloud Spanner to BigQuery at scale Google Cloud Blog", "snippetInfo": [ { "snippet": "... \u003cb\u003eSpanner data\u003c/b\u003e into \u003cb\u003eBigQuery\u003c/b\u003e for analytics.
- Users can leverage federated queries to read data from Spanner and write to a native BigQuery table. \n" , "steps" : [ { "state" : "SUCCEEDED" , "description" : "Rephrase the query and search." , "actions" : [ { "searchAction" : { "query" : "Compare bigquery with spanner database?" } , "observation" : { "searchResults" : [ { "document" : "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/ecc0e7547253f4ca3ff3328ce89995af" , "uri" : "https://cloud.google.com/blog/topics/developers-practitioners/how-spanner-and-bigquery-work-together-handle-transactional-and-analytical-workloads" , "title" : "How Spanner and BigQuery work together to handle transactional and analytical workloads Google Cloud Blog" , "snippetInfo" : [ { "snippet" : "Using Cloud \u003cb\u003eSpanner\u003c/b\u003e and \u003cb\u003eBigQuery\u003c/b\u003e also allows customers to build their \u003cb\u003edata\u003c/b\u003e clouds using Google Cloud, a unified, open approach to \u003cb\u003edata\u003c/b\u003e-driven transformation ..." , "snippetStatus" : "SUCCESS" } ] } , { "document" : "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/d7e238f73608a860e00b752ef80e2941" , "uri" : "https://cloud.google.com/blog/products/databases/cloud-spanner-gets-stronger-with-bigquery-federated-queries" , "title" : "Cloud Spanner gets stronger with BigQuery-federated queries Google Cloud Blog" , "snippetInfo" : [ { "snippet" : "As enterprises compete for market share, their need for real-time insights has given rise to increased demand for transactional \u003cb\u003edatabases\u003c/b\u003e to support \u003cb\u003edata\u003c/b\u003e ..." , "snippetStatus" : "SUCCESS" } ] } , { "document" : "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/e10a5a3c267dc61579e7c00fefe656eb" , "uri" : "https://cloud.google.com/blog/topics/developers-practitioners/replicating-cloud-spanner-bigquery-scale" , "title" : "Replicating from Cloud Spanner to BigQuery at scale Google Cloud Blog" , "snippetInfo" : [ { "snippet" : "... \u003cb\u003eSpanner data\u003c/b\u003e into \u003cb\u003eBigQuery\u003c/b\u003e for analytics.
- BigQuery is really good at working with lots of data, even billions of pieces of information. \n", "steps ": [ { "state": "SUCCEEDED", "description": "Rephrase the query and search.", "actions": [ { "searchAction": { "query": "What is BigQuery?" }, "observation": { "searchResults": [ { "document": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/2d032dc582689e8c0ecea7fc7bfa3189", "uri": "https://cloud.google.com/bigquery", "title": "BigQuery enterprise data warehouse Google Cloud", "snippetInfo": [ { "snippet": "\u003cb\u003eBigQuery\u003c/b\u003e is a fully managed, AI-ready data analytics platform that helps you maximize value from your data and is designed to be multi-engine, multi-format, ...", "snippetStatus": "SUCCESS" } ] }, { "document": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/4474f4a5a18ecd611dedfe323dfe55d9", "uri": "https://cloud.google.com/bigquery/docs/introduction", "title": "BigQuery overview Google Cloud", "snippetInfo": [ { "snippet": "\u003cb\u003eBigQuery\u003c/b\u003e is a fully managed, AI-ready data platform that helps you manage and analyze your data with built-in features like machine learning, search, ...", "snippetStatus": "SUCCESS" } ] }, { "document": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/c840fdef90d86328f13bbedbdbf0ac10", "uri": "https://cloud.google.com/bigquery/docs/query-overview", "title": "Overview of BigQuery analytics Google Cloud", "snippetInfo": [ { "snippet": "\u003cb\u003eBigQuery\u003c/b\u003e lets you save queries and share queries with others.
- Example command and result curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/my-project-123/locations/global/collections/default collection/engines/my-app/servingConfigs/default search:answer" \ -d '{ "query": { "text": "Can I upgrade my phone now?"}, "answerGenerationSpec": { "includeCitations": true } "endUserSpec": { "endUserMetadata": [ { "chunkInfo": { "content": "This customer has a Pixel 6 Pro purchased over a period of 24-months starting 2023-01-15.

### Create a search data store \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- CreateDataStoreMetadata ( operation . metadata ) Handle the response print ( response ) print ( metadata ) return operation . operation . name Import websites from google.api core.client options import ClientOptions from google.cloud import discoveryengine v1 as discoveryengine # TODO(developer): Uncomment these variables before running the sample. # project id = "YOUR PROJECT ID" # location = "YOUR LOCATION" # Values: "global" # data store id = "YOUR DATA STORE ID" # NOTE: Do not include http or https protocol in the URI pattern # uri pattern = "cloud.google.com/generative-ai-app-builder/docs/ " # For more information, refer to: # https://cloud.google.com/generative-ai-app-builder/docs/locations#specify a multi-region for your data store client options = ( ClientOptions(api endpoint=f"{location}-discoveryengine.googleapis.com") if location != "global" else None ) # Create a client client = discoveryengine.SiteSearchEngineServiceClient( client options=client options ) # The full resource name of the data store # e.g. projects/{project}/locations/{location}/dataStores/{data store id} site search engine = client.site search engine path( project=project id, location=location, data store=data store id ) # Target Site to index target site = discoveryengine.TargetSite( provided uri pattern=uri pattern, # Options: INCLUDE, EXCLUDE type =discoveryengine.TargetSite.Type.INCLUDE, exact match=False, ) # Make the request operation = client.create target site( parent=site search engine, target site=target site, ) print(f"Waiting for operation to complete: {operation.operation.name}") response = operation.result() # After the operation is complete, # get information from operation metadata metadata = discoveryengine.CreateTargetSiteMetadata(operation.metadata) # Handle the response print(response) print(metadata) Next steps To attach your website data store to an app, create an app with Enterprise features enabled and select your data store following the steps in Create a search app .
- Here is how to wait for a response. result . wait until done! timeout : 60 if result . response? p result . response else puts "No response received." end end Connect to Cloud Storage with periodic syncing Note: This feature is a Preview offering, subject to the "Pre-GA Offerings Terms" of the GCP Service Specific Terms .
- Here is how to wait for a response. result . wait until done! timeout : 60 if result . response? p result . response else puts "No response received." end end Connect to BigQuery with periodic syncing Note: This feature is a Preview offering, subject to the "Pre-GA Offerings Terms" of the GCP Service Specific Terms .
- Console To use the Google Cloud console to create a connector that periodically syncs data from a BigQuery dataset to Vertex AI Search, follow these steps: In the Google Cloud console, go to the AI Applications page.

### "MCP Tools Reference: discoveryengine.googleapis.com \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search](https://docs.cloud.google.com/generative-ai-app-builder/docs/reference/mcp/search)
- Source ID: `site-docs-reference-2`
- Final score: 120
- Re-rank relevance: N/A

Evidence snippets:
- NumberConstraint JSON representation { "fieldName" : string , "comparison" : enum ( Comparison ) , "value" : number , "querySegment" : string } Fields fieldName string Name of the numerical field as defined in the schema. comparison enum ( Comparison ) The comparison operation performed between the field value and the value specified in the constraint. value number The value specified in the numerical constraint. querySegment string Identifies the keywords within the search query that match a filter.
- In the case of freshness however, attribute value = (time.now() - datetime field value). interpolationType enum ( InterpolationType ) The interpolation type to be applied to connect the control points listed below. controlPoints[] object ( ControlPoint ) The control points used to define the curve.
- SearchRequest JSON representation { "servingConfig" : string , "branch" : string , "query" : string , "pageCategories" : [ string ] , "imageQuery" : { object ( ImageQuery ) } , "pageSize" : integer , "pageToken" : string , "offset" : integer , "oneBoxPageSize" : integer , "dataStoreSpecs" : [ { object ( DataStoreSpec ) } ] , "filter" : string , "canonicalFilter" : string , "orderBy" : string , "userInfo" : { object ( UserInfo ) } , "languageCode" : string , "regionCode" : string , "facetSpecs" : [ { object ( FacetSpec ) } ] , "boostSpec" : { object ( BoostSpec ) } , "params" : { string : value , ... } , "queryExpansionSpec" : { object ( QueryExpansionSpec ) } , "spellCorrectionSpec" : { object ( SpellCorrectionSpec ) } , "userPseudoId" : string , "useLatestData" : boolean , "contentSearchSpec" : { object ( ContentSearchSpec ) } , "embeddingSpec" : { object ( EmbeddingSpec ) } , "rankingExpression" : string , "rankingExpressionBackend" : enum ( RankingExpressionBackend ) , "safeSearch" : boolean , "userLabels" : { string : string , ... } , "naturalLanguageQueryUnderstandingSpec" : { object ( NaturalLanguageQueryUnderstandingSpec ) } , "searchAsYouTypeSpec" : { object ( SearchAsYouTypeSpec ) } , "customFineTuningSpec" : { object ( CustomFineTuningSpec ) } , "displaySpec" : { object ( DisplaySpec ) } , "crowdingSpecs" : [ { object ( CrowdingSpec ) } ] , "session" : string , "sessionSpec" : { object ( SessionSpec ) } , "relevanceThreshold" : enum ( RelevanceThreshold ) , "relevanceFilterSpec" : { object ( RelevanceFilterSpec ) } , "personalizationSpec" : { object ( PersonalizationSpec ) } , "relevanceScoreSpec" : { object ( RelevanceScoreSpec ) } , "searchAddonSpec" : { object ( SearchAddonSpec ) } } Fields servingConfig string Required.
- SearchResponse JSON representation { "results" : [ { object ( SearchResult ) } ] , "facets" : [ { object ( Facet ) } ] , "guidedSearchResult" : { object ( GuidedSearchResult ) } , "totalSize" : integer , "attributionToken" : string , "redirectUri" : string , "nextPageToken" : string , "correctedQuery" : string , "suggestedQuery" : string , "summary" : { object ( Summary ) } , "appliedControls" : [ string ] , "geoSearchDebugInfo" : [ { object ( GeoSearchDebugInfo ) } ] , "queryExpansionInfo" : { object ( QueryExpansionInfo ) } , "naturalLanguageQueryUnderstandingInfo" : { object ( NaturalLanguageQueryUnderstandingInfo ) } , "sessionInfo" : { object ( SessionInfo ) } , "oneBoxResults" : [ { object ( OneBoxResult ) } ] , "searchLinkPromotions" : [ { object ( SearchLinkPromotion ) } ] , "semanticState" : enum ( SemanticState ) } Fields results[] object ( SearchResult ) A list of matched documents.

### "Create a custom recommendations data store \_|\_ Vertex AI Search \_|\_\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Here is how to wait for a response. result . wait until done! timeout : 60 if result . response? p result . response else puts "No response received." end end Connect to Cloud Storage with periodic syncing Note: This feature is a Preview offering, subject to the "Pre-GA Offerings Terms" of the GCP Service Specific Terms .
- Here is how to wait for a response. result . wait until done! timeout : 60 if result . response? p result . response else puts "No response received." end end Connect to BigQuery with periodic syncing Note: This feature is a Preview offering, subject to the "Pre-GA Offerings Terms" of the GCP Service Specific Terms .
- Console To use the Google Cloud console to create a connector that periodically syncs data from a BigQuery dataset to Vertex AI Search, follow these steps: In the Google Cloud console, go to the AI Applications page.
- You have now created a data connector, which will periodically sync data with the Cloud Storage location.

