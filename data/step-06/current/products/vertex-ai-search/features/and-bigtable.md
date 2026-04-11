---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:30:14.900Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "and Bigtable"
feature_slug: "and-bigtable"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis"
keywords:
  - "and"
  - "bigtable"
  - "vertex"
  - "ai"
  - "search"
  - "added"
  - "public"
  - "preview"
---

# and Bigtable

Product: Vertex AI Search
Coverage: LOW

## Step 02 Summary

Vertex AI Search added public preview support for importing data from Cloud Spanner, Cloud SQL, Firestore, and Bigtable.

## Extended Definition

Vertex AI Search added public preview support for importing data from Cloud Spanner, Cloud SQL, Firestore, and Bigtable.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results](https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis](https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis)

## Supporting Pages

### Create a search data store \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: N/A

Evidence snippets:
- This page describes how to create a data store and ingest data for custom search apps in Vertex AI Search. go to the section for the source you plan to use: Create a data store using website content Import from BigQuery Import from Cloud Storage Sync from Google Drive Sync from Gmail (Public preview) Sync from Google Sites (Public preview) Sync from Google Calendar (Public preview) Sync from Google Groups (Public preview) Import from Cloud SQL Import from Spanner (Public preview) Import from Firestore Import from Bigtable (Public Preview) Import from AlloyDB for PostgreSQL (Public Preview) Upload structured JSON data with the API Create a data store using Terraform To sync data from a third-party data source instead, see Connect a third-party data source .
- FieldMask ; public class SyncImportDocuments { public static void main ( String [] args ) throws Exception { syncImportDocuments (); } public static void syncImportDocuments () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentServiceClient documentServiceClient = DocumentServiceClient . create ()) { ImportDocumentsRequest request = ImportDocumentsRequest . newBuilder () . setParent ( BranchName . ofProjectLocationDataStoreBranchName ( "[PROJECT]" , "[LOCATION]" , "[DATA STORE]" , "[BRANCH]" ) . toString ()) . setErrorConfig ( ImportErrorConfig . newBuilder (). build ()) . setUpdateMask ( FieldMask . newBuilder (). build ()) . setAutoGenerateIds ( true ) . setIdField ( "idField1629396127" ) . setForceRefreshContent ( true ) . build (); ImportDocumentsResponse response = documentServiceClient . importDocumentsAsync ( request ). get (); } } } Node.js For more information, see the Vertex AI Search Node.js API reference documentation .
- FieldMask ; public class SyncImportDocuments { public static void main ( String [] args ) throws Exception { syncImportDocuments (); } public static void syncImportDocuments () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentServiceClient documentServiceClient = DocumentServiceClient . create ()) { ImportDocumentsRequest request = ImportDocumentsRequest . newBuilder () . setParent ( BranchName . ofProjectLocationDataStoreBranchName ( "[PROJECT]" , "[LOCATION]" , "[DATA STORE]" , "[BRANCH]" ) . toString ()) . setErrorConfig ( ImportErrorConfig . newBuilder (). build ()) . setUpdateMask ( FieldMask . newBuilder (). build ()) . setAutoGenerateIds ( true ) . setIdField ( "idField1629396127" ) . setForceRefreshContent ( true ) . build (); ImportDocumentsResponse response = documentServiceClient . importDocumentsAsync ( request ). get (); } } } Node.js For more information, see the Vertex AI Search Node.js API reference documentation .
- DataStoreServiceClient ; public class SyncCreateDataStore { public static void main ( String [] args ) throws Exception { syncCreateDataStore (); } public static void syncCreateDataStore () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DataStoreServiceClient dataStoreServiceClient = DataStoreServiceClient . create ()) { CreateDataStoreRequest request = CreateDataStoreRequest . newBuilder () . setParent ( CollectionName . of ( "[PROJECT]" , "[LOCATION]" , "[COLLECTION]" ). toString ()) . setDataStore ( DataStore . newBuilder (). build ()) . setDataStoreId ( "dataStoreId929489618" ) . setCreateAdvancedSiteSearch ( true ) . setSkipDefaultSchemaCreation ( true ) . build (); DataStore response = dataStoreServiceClient . createDataStoreAsync ( request ). get (); } } } Import documents import com.google.cloud.discoveryengine.v1.

### Get search results \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results](https://docs.cloud.google.com/generative-ai-app-builder/docs/preview-search-results)
- Source ID: `site-iam-reference`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- Run the following curl command to get search results: Key Term: In Vertex AI Search, the term app can be used interchangeably with the term engine in the context of APIs. curl -X POST -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /servingConfigs/default search:searchLite?key= API KEY " \ -d '{ "servingConfig": "projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /servingConfigs/default search", "query": " QUERY ", "userPseudoId": " USER PSEUDO ID " }' Replace the following: PROJECT ID : the ID of your Google Cloud project.
- AUTO ), Optional: Use fine-tuned model for this request custom fine tuning spec=discoveryengine.CustomFineTuningSpec( enable search adaptor=True ), ) page result = client . search ( request ) Handle the response for response in page result : print ( response ) return page result Ruby For more information, see the Vertex AI Search Ruby API reference documentation .
- AUTO ), Optional: Use fine-tuned model for this request custom fine tuning spec=discoveryengine.CustomFineTuningSpec( enable search adaptor=True ), ) page result = client . search ( request ) Handle the response for response in page result : print ( response ) return page result Ruby For more information, see the Vertex AI Search Ruby API reference documentation .
- The results might also contain other documents that Vertex AI Search deems relevant to the query due to semantic search. "query": "Mary little lamb" For this query, the most relevant documents in the response contain all of the terms Mary , little , and lamb .

### "Create a custom recommendations data store \_|\_ Vertex AI Search \_|\_\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- FieldMask ; public class SyncImportDocuments { public static void main ( String [] args ) throws Exception { syncImportDocuments (); } public static void syncImportDocuments () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentServiceClient documentServiceClient = DocumentServiceClient . create ()) { ImportDocumentsRequest request = ImportDocumentsRequest . newBuilder () . setParent ( BranchName . ofProjectLocationDataStoreBranchName ( "[PROJECT]" , "[LOCATION]" , "[DATA STORE]" , "[BRANCH]" ) . toString ()) . setErrorConfig ( ImportErrorConfig . newBuilder (). build ()) . setUpdateMask ( FieldMask . newBuilder (). build ()) . setAutoGenerateIds ( true ) . setIdField ( "idField1629396127" ) . setForceRefreshContent ( true ) . build (); ImportDocumentsResponse response = documentServiceClient . importDocumentsAsync ( request ). get (); } } } Node.js For more information, see the Vertex AI Search Node.js API reference documentation .
- FieldMask ; public class SyncImportDocuments { public static void main ( String [] args ) throws Exception { syncImportDocuments (); } public static void syncImportDocuments () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentServiceClient documentServiceClient = DocumentServiceClient . create ()) { ImportDocumentsRequest request = ImportDocumentsRequest . newBuilder () . setParent ( BranchName . ofProjectLocationDataStoreBranchName ( "[PROJECT]" , "[LOCATION]" , "[DATA STORE]" , "[BRANCH]" ) . toString ()) . setErrorConfig ( ImportErrorConfig . newBuilder (). build ()) . setUpdateMask ( FieldMask . newBuilder (). build ()) . setAutoGenerateIds ( true ) . setIdField ( "idField1629396127" ) . setForceRefreshContent ( true ) . build (); ImportDocumentsResponse response = documentServiceClient . importDocumentsAsync ( request ). get (); } } } Node.js For more information, see the Vertex AI Search Node.js API reference documentation .
- DataStoreServiceClient ; public class SyncCreateDataStore { public static void main ( String [] args ) throws Exception { syncCreateDataStore (); } public static void syncCreateDataStore () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DataStoreServiceClient dataStoreServiceClient = DataStoreServiceClient . create ()) { CreateDataStoreRequest request = CreateDataStoreRequest . newBuilder () . setParent ( CollectionName . of ( "[PROJECT]" , "[LOCATION]" , "[COLLECTION]" ). toString ()) . setDataStore ( DataStore . newBuilder (). build ()) . setDataStoreId ( "dataStoreId929489618" ) . setCreateAdvancedSiteSearch ( true ) . setSkipDefaultSchemaCreation ( true ) . build (); DataStore response = dataStoreServiceClient . createDataStoreAsync ( request ). get (); } } } Import documents import com.google.cloud.discoveryengine.v1.
- DataStoreServiceClient ; public class SyncCreateDataStore { public static void main ( String [] args ) throws Exception { syncCreateDataStore (); } public static void syncCreateDataStore () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DataStoreServiceClient dataStoreServiceClient = DataStoreServiceClient . create ()) { CreateDataStoreRequest request = CreateDataStoreRequest . newBuilder () . setParent ( CollectionName . of ( "[PROJECT]" , "[LOCATION]" , "[COLLECTION]" ). toString ()) . setDataStore ( DataStore . newBuilder (). build ()) . setDataStoreId ( "dataStoreId929489618" ) . setCreateAdvancedSiteSearch ( true ) . setSkipDefaultSchemaCreation ( true ) . build (); DataStore response = dataStoreServiceClient . createDataStoreAsync ( request ). get (); } } } Import documents import com.google.cloud.discoveryengine.v1.

### "Vertex AI APIs for building search and RAG experiences \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis](https://docs.cloud.google.com/generative-ai-app-builder/docs/builder-apis)
- Source ID: `site-api-reference`
- Final score: 206
- Re-rank relevance: N/A

Evidence snippets:
- Vertex AI Search works as an out-of-the-box semantic & keyword search engine for RAG with the ability to process a variety of document types and with connectors to a variety of source systems including BigQuery and many third party systems.
- Vertex AI Vector Search is a retrieval engine that can search from billions of semantically similar or semantically related items at scale, with high queries per second (QPS), high recall, low latency, and cost efficiency.
- Home Documentation AI and ML Vertex AI Search Send feedback Vertex AI APIs for building search and RAG experiences Stay organized with collections Save and categorize content based on your preferences.
- It can search over dense embeddings, and supports sparse embedding keyword search and hybrid search in Public preview.

