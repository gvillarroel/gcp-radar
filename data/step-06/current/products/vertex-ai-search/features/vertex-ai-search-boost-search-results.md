---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:30:14.899Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Vertex AI Search Boost search results"
feature_slug: "vertex-ai-search-boost-search-results"
latest_feature_date: "2024-04-29"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/boost-search-results"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search"
keywords:
  - "vertex"
  - "ai"
  - "search"
  - "boost"
  - "results"
  - "introduced"
  - "public"
  - "preview"
---

# Vertex AI Search Boost search results

Product: Vertex AI Search
Coverage: LOW

## Step 02 Summary

Vertex AI Search introduced Public Preview support for boosting search results in media apps and generic search apps that use unstructured and website data.

## Extended Definition

Vertex AI Search introduced Public Preview support for boosting search results in media apps and generic search apps that use unstructured and website data.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results](https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/boost-search-results](https://docs.cloud.google.com/generative-ai-app-builder/docs/boost-search-results)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search](https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search)

## Supporting Pages

### Get search results \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results](https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results)
- Source ID: `site-iam-reference`
- Final score: 256
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Key Term: In Vertex AI Search, the term app can be used interchangeably with the term engine in the context of APIs. curl -X POST -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /servingConfigs/default search:search" \ -d '{ "servingConfig": "projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /servingConfigs/default search", "query": " QUERY ", "pageSize": " PAGE SIZE ", "offset": " OFFSET ", "orderBy": " ORDER BY ", "params": {"user country code": " USER COUNTRY CODE ", "searchType": " SEARCH TYPE "}, "filter": " FILTER ", "boostSpec": " BOOST SPEC ", "contentSearchSpec": { "searchResultMode": " RESULT MODE " }, "userPseudoId": " USER PSEUDO ID ", "dataStoreSpecs": [{" DATA STORE SPEC "}] }' Replace the following: PROJECT ID : the ID of your Google Cloud project.
- Key Term: In Vertex AI Search, the term app can be used interchangeably with the term engine in the context of APIs. curl -X POST -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /servingConfigs/default search:search" \ -d '{ "query": " QUERY ", "userPseudoId": " USER PSEUDO ID ", "pageSize": " PAGE SIZE ", "offset": " OFFSET ", "orderBy": " ORDER BY ", "filter": " FILTER ", "boostSpec": " BOOST SPEC ", "facetSpec": " FACET SPEC ", "queryExpansionSpec": " QUERY EXPANSION SPEC ", "spellCorrectionSpec": " SPELL CORRECTION SPEC ", "contentSearchSpec": " CONTENT SEARCH SPEC ", "dataStoreSpecs": [{" DATA STORE SPEC "}], }' Replace the following: PROJECT ID : the ID of your Google Cloud project.
- Run the following curl command to get search results: Key Term: In Vertex AI Search, the term app can be used interchangeably with the term engine in the context of APIs. curl -X POST -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /servingConfigs/default search:searchLite?key= API KEY " \ -d '{ "servingConfig": "projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /servingConfigs/default search", "query": " QUERY ", "userPseudoId": " USER PSEUDO ID " }' Replace the following: PROJECT ID : the ID of your Google Cloud project.
- In this example response, the color green was used to refine search results by issuing a new search request with the filter field specified as gs.color: ANY("green") : { "guidedSearchResult" : { "refinementAttributes" : [ { "attributeKey" : " gs.color" , "attributeValue" : "green" }, { "attributeKey" : " gs.category" , "attributeValue" : "shoe" } ] } } C# For more information, see the Vertex AI Search C# API reference documentation .

### Boost search results \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/boost-search-results](https://docs.cloud.google.com/generative-ai-app-builder/docs/boost-search-results)
- Source ID: `site-api-reference`
- Final score: 234
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation AI and ML Vertex AI Search Send feedback Boost search results Stay organized with collections Save and categorize content based on your preferences.
- You can define the boost specification as follows: { "boostSpec": { "conditionBoostSpecs": { "condition": true, "boostControlSpec": { "fieldName": "publication date", "attributeType": "FRESHNESS", "interpolationType": "LINEAR", "controlPoints": [ { "attributeValue": "7D", "boostAmount": 0.40 }, { "attributeValue": "30D", "boostAmount": 0.37 }, { "attributeValue": "60D", "boostAmount": 0.32 }, { "attributeValue": "90D", "boostAmount": 0 } ] } } } } For this scenario, the search results are boosted as follows: Freshness Boost amount less than or equal to 7 days 0.40 between 7 and 30 days between 0.40 and 0.37, calculated using linear interpolation equal to 30 days 0.37 between 30 and 60 days between 0.37 and 0.32, calculated using linear interpolation equal to 60 days 0.32 between 60 and 90 days between 0.32 and 0.0, calculated using linear interpolation greater than or equal to 90 days 0.0 Example use case using a Google-inferred page date When crawling through the web pages in your website data store, Google infers page data using the properties that apply to your content.
- When a document in the search result meets the specified condition, a boost amount is applied as follows: Duration value Boost amount Less than the first control point Is equal to the boost amount of the first control point Equal to a given control point Is equal to the mapped boost amount Between control points Is calculated by linear interpolation Greater than the last control point Is equal to the boost amount of the last control point Example use case using a custom datetime attribute Suppose your data store contains structured data where each document has a publication date.
- Boost with a fixed condition To boost results by a fixed amount based on whether they satisfy a condition, do the following: Specify the boost specification in the boostSpec field when you send a servingConfigs.search request. { "boostSpec": { "conditionBoostSpecs": { "condition": " BOOST CONDITION ", "boost": BOOST VALUE } } } The specification contains the following parameters: BOOST CONDITION : a text filter expression to select the documents to which boost is applied.

### Create a search data store \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- This page describes how to create a data store and ingest data for custom search apps in Vertex AI Search. go to the section for the source you plan to use: Create a data store using website content Import from BigQuery Import from Cloud Storage Sync from Google Drive Sync from Gmail (Public preview) Sync from Google Sites (Public preview) Sync from Google Calendar (Public preview) Sync from Google Groups (Public preview) Import from Cloud SQL Import from Spanner (Public preview) Import from Firestore Import from Bigtable (Public Preview) Import from AlloyDB for PostgreSQL (Public Preview) Upload structured JSON data with the API Create a data store using Terraform To sync data from a third-party data source instead, see Connect a third-party data source .
- FieldMask ; public class SyncImportDocuments { public static void main ( String [] args ) throws Exception { syncImportDocuments (); } public static void syncImportDocuments () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentServiceClient documentServiceClient = DocumentServiceClient . create ()) { ImportDocumentsRequest request = ImportDocumentsRequest . newBuilder () . setParent ( BranchName . ofProjectLocationDataStoreBranchName ( "[PROJECT]" , "[LOCATION]" , "[DATA STORE]" , "[BRANCH]" ) . toString ()) . setErrorConfig ( ImportErrorConfig . newBuilder (). build ()) . setUpdateMask ( FieldMask . newBuilder (). build ()) . setAutoGenerateIds ( true ) . setIdField ( "idField1629396127" ) . setForceRefreshContent ( true ) . build (); ImportDocumentsResponse response = documentServiceClient . importDocumentsAsync ( request ). get (); } } } Node.js For more information, see the Vertex AI Search Node.js API reference documentation .
- FieldMask ; public class SyncImportDocuments { public static void main ( String [] args ) throws Exception { syncImportDocuments (); } public static void syncImportDocuments () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentServiceClient documentServiceClient = DocumentServiceClient . create ()) { ImportDocumentsRequest request = ImportDocumentsRequest . newBuilder () . setParent ( BranchName . ofProjectLocationDataStoreBranchName ( "[PROJECT]" , "[LOCATION]" , "[DATA STORE]" , "[BRANCH]" ) . toString ()) . setErrorConfig ( ImportErrorConfig . newBuilder (). build ()) . setUpdateMask ( FieldMask . newBuilder (). build ()) . setAutoGenerateIds ( true ) . setIdField ( "idField1629396127" ) . setForceRefreshContent ( true ) . build (); ImportDocumentsResponse response = documentServiceClient . importDocumentsAsync ( request ). get (); } } } Node.js For more information, see the Vertex AI Search Node.js API reference documentation .
- Import data from Spanner. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /branches/0/documents:import" \ -d '{ "cloudSpannerSource": { "projectId": " SPANNER PROJECT ID ", "instanceId": " INSTANCE ID ", "databaseId": " DATABASE ID ", "tableId": " TABLE ID ", "enableDataBoost": " DATA BOOST BOOLEAN " }, "reconciliationMode": " RECONCILIATION MODE ", "autoGenerateIds": " AUTO GENERATE IDS ", "idField": " ID FIELD ", }' Replace the following: PROJECT ID : the ID of your Vertex AI Search project.

### "Introduction to custom search \_|\_ Vertex AI Search \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search](https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search)
- Source ID: `site-api-reference`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- Retrieval and ranking: There are several sub-components to retrieval and ranking of results: Query understanding for search: Vertex AI Search analyzes a search query using the following: Natural language processing: To understand the intent.
- Ranking: Vertex AI Search ranks the results based on the following factors: Relevance: A combination of keyword and semantic matching during search.
- Search results : Use Vertex AI Search to do the following: Get answers and follow-ups .
- Promote controls : Promote results within and beyond your Vertex AI Search data store.

