---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:36.898Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Model Context Protocol (MCP) server for Vertex AI Search"
feature_slug: "model-context-protocol-mcp-server-for-vertex-ai-search"
latest_feature_date: "2026-02-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/answer"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es"
keywords:
  - "model"
  - "context"
  - "protocol"
  - "mcp"
  - "server"
  - "vertex"
  - "ai"
  - "search"
---

# Model Context Protocol (MCP) server for Vertex AI Search

Product: Vertex AI Search
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Search introduces a hosted Model Context Protocol (MCP) server available at discoveryengine.googleapis.com/mcp in Public Preview.

## Extended Definition

Vertex AI Search introduces a hosted Model Context Protocol (MCP) server available at discoveryengine.googleapis.com/mcp in Public Preview.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results](https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)

## Supporting Pages

### Get answers and follow-ups \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- Source ID: `site-docs-reference`
- Final score: 243
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example command curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/my-project-123/locations/global/collections/default collection/engines/my-app/servingConfigs/default search:answer" \ -d '{ "query": { "text": "How much longer does it take to train a recommendations model than a search model"}, "queryUnderstandingSpec": { "queryRephraserSpec": { "maxRephraseSteps": 5 } } }' Python For more information, see the Vertex AI Search Python API reference documentation .
- Example command and result curl -X GET -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json" "https://discoveryengine.googleapis.com/v1/projects/123456/locations/global/collections/default collection/engines/my-app/sessions?filter=userPseudoId=test user%20AND%20state=IN PROGRESS" { "sessions": [ { "name": "projects/123456/locations/global/collections/default collection/engines/my-app/sessions/16002628354770206943", "state": "IN PROGRESS", "userPseudoId": "test user", "turns": [ { "query": { "queryId": "projects/123456/locations/global/questions/741830", "text": "Compare bigquery with spanner database?" }, "answer": "projects/123456/locations/global/collections/default collection/engines/my-app/sessions/16002628354770206943/answers/4861507376861383072" } ], "startTime": "2024-09-13T18:47:10.465311Z", "endTime": "2024-09-13T18:49:41.579151Z" } ] } Python For more information, see the Vertex AI Search Python API reference documentation .
- Example command and partial result curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1beta/projects/my-project-123//locations/global/collections/default collection/engines/my-app/servingConfigs/default search:answer" -d '{ "query": { "text": "Display the ranking of generations from highest to lowest based on their spending on holiday items using cards."}, "answerGenerationSpec": {"includeCitations": true, "model spec": { "model version": "gemini-2.0-flash-001/answer gen/v1" }, "multimodalSpec": { "imageSource": "CORPUS IMAGE ONLY" } }, "searchSpec": { "searchParams": { "maxReturnResults": 5 } } }' { "answer": { "state": "SUCCEEDED", "answerText": "Holiday spending over November-December was weakest among Gen Xers, followed by Millennials, while Baby Boomer spending was relatively more solid.
- Example command and partial result curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/123456/locations/global/collections/default collection/engines/my-app/servingConfigs/default search:answer" \ -d '{ "query": { "text": "what kinds of data can I import into Vertex AI Search?"}, "session": "projects/123456/locations/global/collections/default collection/engines/my-app/sessions/10291252835232308789", "searchSpec":{ "searchParams": {"filter": ""} }, "relatedQuestionsSpec": { "enable": true } }' { "answer": { "state": "SUCCEEDED", "answerText": "You can import various kinds of data into Vertex AI Search, depending on the type of data store you create.

### Get search results \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results](https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results)
- Source ID: `site-iam-reference`
- Final score: 230
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Key Term: In Vertex AI Search, the term app can be used interchangeably with the term engine in the context of APIs. curl -X POST -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /servingConfigs/default search:search" \ -d '{ "servingConfig": "projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /servingConfigs/default search", "query": " QUERY ", "pageSize": " PAGE SIZE ", "offset": " OFFSET ", "orderBy": " ORDER BY ", "params": {"user country code": " USER COUNTRY CODE ", "searchType": " SEARCH TYPE "}, "filter": " FILTER ", "boostSpec": " BOOST SPEC ", "contentSearchSpec": { "searchResultMode": " RESULT MODE " }, "userPseudoId": " USER PSEUDO ID ", "dataStoreSpecs": [{" DATA STORE SPEC "}] }' Replace the following: PROJECT ID : the ID of your Google Cloud project.
- Key Term: In Vertex AI Search, the term app can be used interchangeably with the term engine in the context of APIs. curl -X POST -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /servingConfigs/default search:search" \ -d '{ "query": " QUERY ", "userPseudoId": " USER PSEUDO ID ", "pageSize": " PAGE SIZE ", "offset": " OFFSET ", "orderBy": " ORDER BY ", "filter": " FILTER ", "boostSpec": " BOOST SPEC ", "facetSpec": " FACET SPEC ", "queryExpansionSpec": " QUERY EXPANSION SPEC ", "spellCorrectionSpec": " SPELL CORRECTION SPEC ", "contentSearchSpec": " CONTENT SEARCH SPEC ", "dataStoreSpecs": [{" DATA STORE SPEC "}], }' Replace the following: PROJECT ID : the ID of your Google Cloud project.
- Run the following curl command to get search results: Key Term: In Vertex AI Search, the term app can be used interchangeably with the term engine in the context of APIs. curl -X POST -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /servingConfigs/default search:searchLite?key= API KEY " \ -d '{ "servingConfig": "projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /servingConfigs/default search", "query": " QUERY ", "userPseudoId": " USER PSEUDO ID " }' Replace the following: PROJECT ID : the ID of your Google Cloud project.
- For more information, see Set up authentication for a local development environment . / TODO(developer): Uncomment these variables before running the sample. / // const projectId = 'YOUR PROJECT ID'; // const location = 'YOUR LOCATION'; // Options: 'global', 'us', 'eu' // const collectionId = 'default collection'; // Options: 'default collection' // const dataStoreId = 'YOUR DATA STORE ID' // Create in Cloud Console // const servingConfigId = 'default config'; // Options: 'default config' // const searchQuery = 'Google'; const { SearchServiceClient } = require ( ' @google-cloud/discoveryengine ' ). v1beta ; // For more information, refer to: // https://cloud.google.com/generative-ai-app-builder/docs/locations#specify a multi-region for your data store const apiEndpoint = location === 'global' ? 'discoveryengine.googleapis.com' : ${ location } -discoveryengine.googleapis.com ; // Instantiates a client const client = new SearchServiceClient ({ apiEndpoint : apiEndpoint }); async function search () { // The full resource name of the search engine serving configuration. // Example: projects/{projectId}/locations/{location}/collections/{collectionId}/dataStores/{dataStoreId}/servingConfigs/{servingConfigId} // You must create a search engine in the Cloud Console first. const name = client . projectLocationCollectionDataStoreServingConfigPath ( projectId , location , collectionId , dataStoreId , servingConfigId ); const request = { pageSize : 10 , query : searchQuery , servingConfig : name , }; const IResponseParams = { ISearchResult : 0 , ISearchRequest : 1 , ISearchResponse : 2 , }; // Perform search request const response = await client . search ( request , { // Warning: Should always disable autoPaginate to avoid iterate through all pages. // // By default NodeJS SDK returns an iterable where you can iterate through all // search results instead of only the limited number of results requested on // pageSize, by sending multiple sequential search requests page-by-page while // iterating, until it exhausts all the search results.

### Create a search data store \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- Source ID: `site-docs-root`
- Final score: 222
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CreateDataStoreMetadata ( operation . metadata ) Handle the response print ( response ) print ( metadata ) return operation . operation . name Import websites from google.api core.client options import ClientOptions from google.cloud import discoveryengine v1 as discoveryengine # TODO(developer): Uncomment these variables before running the sample. # project id = "YOUR PROJECT ID" # location = "YOUR LOCATION" # Values: "global" # data store id = "YOUR DATA STORE ID" # NOTE: Do not include http or https protocol in the URI pattern # uri pattern = "cloud.google.com/generative-ai-app-builder/docs/ " # For more information, refer to: # https://cloud.google.com/generative-ai-app-builder/docs/locations#specify a multi-region for your data store client options = ( ClientOptions(api endpoint=f"{location}-discoveryengine.googleapis.com") if location != "global" else None ) # Create a client client = discoveryengine.SiteSearchEngineServiceClient( client options=client options ) # The full resource name of the data store # e.g. projects/{project}/locations/{location}/dataStores/{data store id} site search engine = client.site search engine path( project=project id, location=location, data store=data store id ) # Target Site to index target site = discoveryengine.TargetSite( provided uri pattern=uri pattern, # Options: INCLUDE, EXCLUDE type =discoveryengine.TargetSite.Type.INCLUDE, exact match=False, ) # Make the request operation = client.create target site( parent=site search engine, target site=target site, ) print(f"Waiting for operation to complete: {operation.operation.name}") response = operation.result() # After the operation is complete, # get information from operation metadata metadata = discoveryengine.CreateTargetSiteMetadata(operation.metadata) # Handle the response print(response) print(metadata) Next steps To attach your website data store to an app, create an app with Enterprise features enabled and select your data store following the steps in Create a search app .
- Import data from Bigtable. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /branches/0/documents:import" \ -d '{ "bigtableSource ": { "projectId": " BIGTABLE PROJECT ID ", "instanceId": " INSTANCE ID ", "tableId": " TABLE ID ", "bigtableOptions": { "keyFieldName": " KEY FIELD NAME ", "families": { "key": " KEY ", "value": { "fieldName": " FIELD NAME ", "encoding": " ENCODING ", "type": " TYPE ", "columns": [ { "qualifier": " QUALIFIER ", "fieldName": " FIELD NAME ", "encoding": " COLUMN ENCODING ", "type": " COLUMN VALUES TYPE " } ] } } ... } }, "reconciliationMode": " RECONCILIATION MODE ", "autoGenerateIds": " AUTO GENERATE IDS ", "idField": " ID FIELD ", }' Replace the following: PROJECT ID : the ID of your Vertex AI Search project.
- Import data from Spanner. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /branches/0/documents:import" \ -d '{ "cloudSpannerSource": { "projectId": " SPANNER PROJECT ID ", "instanceId": " INSTANCE ID ", "databaseId": " DATABASE ID ", "tableId": " TABLE ID ", "enableDataBoost": " DATA BOOST BOOLEAN " }, "reconciliationMode": " RECONCILIATION MODE ", "autoGenerateIds": " AUTO GENERATE IDS ", "idField": " ID FIELD ", }' Replace the following: PROJECT ID : the ID of your Vertex AI Search project.
- Import data from AlloyDB for PostgreSQL. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /branches/0/documents:import" \ -d '{ "alloydbSource": { "projectId": " ALLOYDB PROJECT ID ", "locationId": " LOCATION ID ", "clusterId": " CLUSTER ID ", "databaseId": " DATABASE ID ", "tableId": " TABLE ID ", }, "reconciliationMode": " RECONCILIATION MODE ", "autoGenerateIds": " AUTO GENERATE IDS ", "idField": " ID FIELD ", }' Replace the following: PROJECT ID : the ID of your Vertex AI Search project.

