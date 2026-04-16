---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:37.023Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Vertex AI Search data import connectors for Spanner"
feature_slug: "vertex-ai-search-data-import-connectors-for-spanner"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/answer"
keywords:
  - "vertex"
  - "ai"
  - "search"
  - "import"
  - "connectors"
  - "spanner"
  - "added"
  - "public"
---

# Vertex AI Search data import connectors for Spanner

Product: Vertex AI Search
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Search added public preview support for importing data from Cloud Spanner, Cloud SQL, Firestore, and Bigtable.

## Extended Definition

Vertex AI Search added public preview support for importing data from Cloud Spanner, Cloud SQL, Firestore, and Bigtable.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)

## Supporting Pages

### Create a search data store \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- Source ID: `site-docs-root`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- This page describes how to create a data store and ingest data for custom search apps in Vertex AI Search. go to the section for the source you plan to use: Create a data store using website content Import from BigQuery Import from Cloud Storage Sync from Google Drive Sync from Gmail (Public preview) Sync from Google Sites (Public preview) Sync from Google Calendar (Public preview) Sync from Google Groups (Public preview) Import from Cloud SQL Import from Spanner (Public preview) Import from Firestore Import from Bigtable (Public Preview) Import from AlloyDB for PostgreSQL (Public Preview) Upload structured JSON data with the API Create a data store using Terraform To sync data from a third-party data source instead, see Connect a third-party data source .
- FieldMask ; public class SyncImportDocuments { public static void main ( String [] args ) throws Exception { syncImportDocuments (); } public static void syncImportDocuments () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentServiceClient documentServiceClient = DocumentServiceClient . create ()) { ImportDocumentsRequest request = ImportDocumentsRequest . newBuilder () . setParent ( BranchName . ofProjectLocationDataStoreBranchName ( "[PROJECT]" , "[LOCATION]" , "[DATA STORE]" , "[BRANCH]" ) . toString ()) . setErrorConfig ( ImportErrorConfig . newBuilder (). build ()) . setUpdateMask ( FieldMask . newBuilder (). build ()) . setAutoGenerateIds ( true ) . setIdField ( "idField1629396127" ) . setForceRefreshContent ( true ) . build (); ImportDocumentsResponse response = documentServiceClient . importDocumentsAsync ( request ). get (); } } } Node.js For more information, see the Vertex AI Search Node.js API reference documentation .
- FieldMask ; public class SyncImportDocuments { public static void main ( String [] args ) throws Exception { syncImportDocuments (); } public static void syncImportDocuments () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentServiceClient documentServiceClient = DocumentServiceClient . create ()) { ImportDocumentsRequest request = ImportDocumentsRequest . newBuilder () . setParent ( BranchName . ofProjectLocationDataStoreBranchName ( "[PROJECT]" , "[LOCATION]" , "[DATA STORE]" , "[BRANCH]" ) . toString ()) . setErrorConfig ( ImportErrorConfig . newBuilder (). build ()) . setUpdateMask ( FieldMask . newBuilder (). build ()) . setAutoGenerateIds ( true ) . setIdField ( "idField1629396127" ) . setForceRefreshContent ( true ) . build (); ImportDocumentsResponse response = documentServiceClient . importDocumentsAsync ( request ). get (); } } } Node.js For more information, see the Vertex AI Search Node.js API reference documentation .
- Import data from Spanner. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /branches/0/documents:import" \ -d '{ "cloudSpannerSource": { "projectId": " SPANNER PROJECT ID ", "instanceId": " INSTANCE ID ", "databaseId": " DATABASE ID ", "tableId": " TABLE ID ", "enableDataBoost": " DATA BOOST BOOLEAN " }, "reconciliationMode": " RECONCILIATION MODE ", "autoGenerateIds": " AUTO GENERATE IDS ", "idField": " ID FIELD ", }' Replace the following: PROJECT ID : the ID of your Vertex AI Search project.

### "Create a custom recommendations data store \_|\_ Vertex AI Search \_|\_\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations)
- Source ID: `site-docs-root`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- FieldMask ; public class SyncImportDocuments { public static void main ( String [] args ) throws Exception { syncImportDocuments (); } public static void syncImportDocuments () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentServiceClient documentServiceClient = DocumentServiceClient . create ()) { ImportDocumentsRequest request = ImportDocumentsRequest . newBuilder () . setParent ( BranchName . ofProjectLocationDataStoreBranchName ( "[PROJECT]" , "[LOCATION]" , "[DATA STORE]" , "[BRANCH]" ) . toString ()) . setErrorConfig ( ImportErrorConfig . newBuilder (). build ()) . setUpdateMask ( FieldMask . newBuilder (). build ()) . setAutoGenerateIds ( true ) . setIdField ( "idField1629396127" ) . setForceRefreshContent ( true ) . build (); ImportDocumentsResponse response = documentServiceClient . importDocumentsAsync ( request ). get (); } } } Node.js For more information, see the Vertex AI Search Node.js API reference documentation .
- FieldMask ; public class SyncImportDocuments { public static void main ( String [] args ) throws Exception { syncImportDocuments (); } public static void syncImportDocuments () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentServiceClient documentServiceClient = DocumentServiceClient . create ()) { ImportDocumentsRequest request = ImportDocumentsRequest . newBuilder () . setParent ( BranchName . ofProjectLocationDataStoreBranchName ( "[PROJECT]" , "[LOCATION]" , "[DATA STORE]" , "[BRANCH]" ) . toString ()) . setErrorConfig ( ImportErrorConfig . newBuilder (). build ()) . setUpdateMask ( FieldMask . newBuilder (). build ()) . setAutoGenerateIds ( true ) . setIdField ( "idField1629396127" ) . setForceRefreshContent ( true ) . build (); ImportDocumentsResponse response = documentServiceClient . importDocumentsAsync ( request ). get (); } } } Node.js For more information, see the Vertex AI Search Node.js API reference documentation .
- DataStoreServiceClient ; public class SyncCreateDataStore { public static void main ( String [] args ) throws Exception { syncCreateDataStore (); } public static void syncCreateDataStore () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DataStoreServiceClient dataStoreServiceClient = DataStoreServiceClient . create ()) { CreateDataStoreRequest request = CreateDataStoreRequest . newBuilder () . setParent ( CollectionName . of ( "[PROJECT]" , "[LOCATION]" , "[COLLECTION]" ). toString ()) . setDataStore ( DataStore . newBuilder (). build ()) . setDataStoreId ( "dataStoreId929489618" ) . setCreateAdvancedSiteSearch ( true ) . setSkipDefaultSchemaCreation ( true ) . build (); DataStore response = dataStoreServiceClient . createDataStoreAsync ( request ). get (); } } } Import documents import com.google.cloud.discoveryengine.v1.
- DataStoreServiceClient ; public class SyncCreateDataStore { public static void main ( String [] args ) throws Exception { syncCreateDataStore (); } public static void syncCreateDataStore () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DataStoreServiceClient dataStoreServiceClient = DataStoreServiceClient . create ()) { CreateDataStoreRequest request = CreateDataStoreRequest . newBuilder () . setParent ( CollectionName . of ( "[PROJECT]" , "[LOCATION]" , "[COLLECTION]" ). toString ()) . setDataStore ( DataStore . newBuilder (). build ()) . setDataStoreId ( "dataStoreId929489618" ) . setCreateAdvancedSiteSearch ( true ) . setSkipDefaultSchemaCreation ( true ) . build (); DataStore response = dataStoreServiceClient . createDataStoreAsync ( request ). get (); } } } Import documents import com.google.cloud.discoveryengine.v1.

### Get answers and follow-ups \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- Source ID: `site-docs-reference`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- Example command and result curl -X GET -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json" "https://discoveryengine.googleapis.com/v1/projects/123456/locations/global/collections/default collection/engines/my-app/sessions?filter=userPseudoId=test user%20AND%20state=IN PROGRESS" { "sessions": [ { "name": "projects/123456/locations/global/collections/default collection/engines/my-app/sessions/16002628354770206943", "state": "IN PROGRESS", "userPseudoId": "test user", "turns": [ { "query": { "queryId": "projects/123456/locations/global/questions/741830", "text": "Compare bigquery with spanner database?" }, "answer": "projects/123456/locations/global/collections/default collection/engines/my-app/sessions/16002628354770206943/answers/4861507376861383072" } ], "startTime": "2024-09-13T18:47:10.465311Z", "endTime": "2024-09-13T18:49:41.579151Z" } ] } Python For more information, see the Vertex AI Search Python API reference documentation .
- Example command and partial result curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/123456/locations/global/collections/default collection/engines/my-app/servingConfigs/default search:answer" \ -d '{ "query": { "text": "what kinds of data can I import into Vertex AI Search?"}, "session": "projects/123456/locations/global/collections/default collection/engines/my-app/sessions/10291252835232308789", "searchSpec":{ "searchParams": {"filter": ""} }, "relatedQuestionsSpec": { "enable": true } }' { "answer": { "state": "SUCCEEDED", "answerText": "You can import various kinds of data into Vertex AI Search, depending on the type of data store you create.
- Google is continuously improving out-of-the-box \u003cb\u003eperformance of Spanner\u003c/b\u003e and reducing the need for manual tuning.", "snippetStatus": "SUCCESS" } ] } ] } } ] } ] }, "answerQueryToken": "NMwKDAj1 d62BhC72 X AhIkNjZkN2I4YWEtMDAwMC0yYTdiLWIxMmMtMDg5ZTA4MjhlNzY0" } In this example, the query is decomposed into parts: "What is the performance of Spanner?" and "What is the performance of BigQuery?" Python For more information, see the Vertex AI Search Python API reference documentation .
- For example, "what kinds of data can I import into Vertex AI Search?".

