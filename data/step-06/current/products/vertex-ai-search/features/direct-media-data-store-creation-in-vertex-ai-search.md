---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:36.982Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Direct media data store creation in Vertex AI Search"
feature_slug: "direct-media-data-store-creation-in-vertex-ai-search"
latest_feature_date: "2024-07-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-media"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest"
keywords:
  - "direct"
  - "media"
  - "store"
  - "creation"
  - "vertex"
  - "ai"
  - "search"
  - "enables"
---

# Direct media data store creation in Vertex AI Search

Product: Vertex AI Search
Coverage: MEDIUM

## Step 02 Summary

Enables media data stores to be created directly from the Data Stores page instead of only through the app creation workflow.

## Extended Definition

Enables media data stores to be created directly from the Data Stores page instead of only through the app creation workflow.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-media](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-media)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest)

## Supporting Pages

### Create a media data store \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-media](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-media)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Vertex AI Search Send feedback Create a media data store Stay organized with collections Save and categorize content based on your preferences.
- DATA STORE DISPLAY NAME : the display name of the Vertex AI Search data store that you want to create.
- DATA STORE ID : the ID of the Vertex AI Search data store that you want to create.
- Minimum required fields: { "id" : "sample-01" , "schemaId" : "default schema" , "jsonData" : "{\"title\":\"Test document title\",\"categories\":[\"sports > clip\",\"sports > highlight\"],\"uri\":\"http://www.example.com\",\"media type\":\"sports-game\",\"available time\":\"2022-08-26T23:00:17Z\"}" } Complete object: { "id" : "child-sample-0" , "schemaId" : "default schema" , "jsonData" : "{\"title\":\"Test document title\",\"description\":\"Test document description\",\"language code\":\"en-US\",\"categories\":[\"sports > clip\",\"sports > highlight\"],\"uri\":\"http://www.example.com\",\"images\":[{\"uri\":\"http://example.com/img1\",\"name\":\"image 1\"}],\"media type\":\"sports-game\",\"in languages\":[\"en-US\"],\"country of origin\":\"US\",\"content index\":0,\"persons\":[{\"name\":\"sports person\",\"role\":\"player\",\"rank\":0,\"uri\":\"http://example.com/person\"},],\"organizations \":[{\"name\":\"sports team\",\"role\":\"team\",\"rank\":0,\"uri\":\"http://example.com/team\"},],\"hash tags\":[\"tag1\"],\"filter tags\":[\"filter tag\"],\"production year\":1900,\"duration\":\"100s\",\"content rating\":[\"PG-13\"],\"aggregate ratings\":[{\"rating source\":\"imdb\",\"rating score\":4.5,\"rating count\":1250}],\"available time\":\"2022-08-26T23:00:17Z\"}" } Monitor import and view data To check the status of your ingestion, go to the Data Stores page and click your data store name to see details about it on its Data page.

### About apps and data stores \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest)
- Source ID: `site-docs-root`
- Final score: 149
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In addition to media documents, media data stores also contain the user event information that allows Vertex AI Search to customize recommendations and search for your users.
- Home Documentation AI and ML Vertex AI Search Send feedback About apps and data stores Stay organized with collections Save and categorize content based on your preferences.
- The following limitations apply: Adding and removing data stores: To turn on blended search for an app, you must connect at least two data stores to it during app creation.
- A FHIR R4 data store must satisfy some requirements before it can be used as a data source for Vertex AI Search data store.

### Create a search data store \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- Source ID: `site-docs-root`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- Import data from Cloud SQL. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /branches/0/documents:import" \ -d '{ "cloudSqlSource": { "projectId": " SQL PROJECT ID ", "instanceId": " INSTANCE ID ", "databaseId": " DATABASE ID ", "tableId": " TABLE ID ", "gcsStagingDir": " STAGING DIRECTORY " }, "reconciliationMode": " RECONCILIATION MODE ", "autoGenerateIds": " AUTO GENERATE IDS ", "idField": " ID FIELD ", }' Replace the following: PROJECT ID : the ID of your Vertex AI Search project.
- FieldMask ; public class SyncImportDocuments { public static void main ( String [] args ) throws Exception { syncImportDocuments (); } public static void syncImportDocuments () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentServiceClient documentServiceClient = DocumentServiceClient . create ()) { ImportDocumentsRequest request = ImportDocumentsRequest . newBuilder () . setParent ( BranchName . ofProjectLocationDataStoreBranchName ( "[PROJECT]" , "[LOCATION]" , "[DATA STORE]" , "[BRANCH]" ) . toString ()) . setErrorConfig ( ImportErrorConfig . newBuilder (). build ()) . setUpdateMask ( FieldMask . newBuilder (). build ()) . setAutoGenerateIds ( true ) . setIdField ( "idField1629396127" ) . setForceRefreshContent ( true ) . build (); ImportDocumentsResponse response = documentServiceClient . importDocumentsAsync ( request ). get (); } } } Node.js For more information, see the Vertex AI Search Node.js API reference documentation .
- FieldMask ; public class SyncImportDocuments { public static void main ( String [] args ) throws Exception { syncImportDocuments (); } public static void syncImportDocuments () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentServiceClient documentServiceClient = DocumentServiceClient . create ()) { ImportDocumentsRequest request = ImportDocumentsRequest . newBuilder () . setParent ( BranchName . ofProjectLocationDataStoreBranchName ( "[PROJECT]" , "[LOCATION]" , "[DATA STORE]" , "[BRANCH]" ) . toString ()) . setErrorConfig ( ImportErrorConfig . newBuilder (). build ()) . setUpdateMask ( FieldMask . newBuilder (). build ()) . setAutoGenerateIds ( true ) . setIdField ( "idField1629396127" ) . setForceRefreshContent ( true ) . build (); ImportDocumentsResponse response = documentServiceClient . importDocumentsAsync ( request ). get (); } } } Node.js For more information, see the Vertex AI Search Node.js API reference documentation .
- DataStoreServiceClient ; public class SyncCreateDataStore { public static void main ( String [] args ) throws Exception { syncCreateDataStore (); } public static void syncCreateDataStore () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DataStoreServiceClient dataStoreServiceClient = DataStoreServiceClient . create ()) { CreateDataStoreRequest request = CreateDataStoreRequest . newBuilder () . setParent ( CollectionName . of ( "[PROJECT]" , "[LOCATION]" , "[COLLECTION]" ). toString ()) . setDataStore ( DataStore . newBuilder (). build ()) . setDataStoreId ( "dataStoreId929489618" ) . setCreateAdvancedSiteSearch ( true ) . setSkipDefaultSchemaCreation ( true ) . build (); DataStore response = dataStoreServiceClient . createDataStoreAsync ( request ). get (); } } } Import documents import com.google.cloud.discoveryengine.v1.

