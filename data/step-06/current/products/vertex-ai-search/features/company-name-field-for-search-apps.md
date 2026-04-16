---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:37.077Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Company name field for search apps"
feature_slug: "company-name-field-for-search-apps"
latest_feature_date: "2023-12-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-hc"
keywords:
  - "company"
  - "name"
  - "field"
  - "search"
  - "apps"
  - "adds"
  - "specifying"
  - "organization"
---

# Company name field for search apps

Product: Vertex AI Search
Coverage: MEDIUM

## Step 02 Summary

Adds support for specifying a company or organization name when creating a Vertex AI Search app to improve summarization and follow-up response quality.

## Extended Definition

Adds support for specifying a company or organization name when creating a Vertex AI Search app to improve summarization and follow-up response quality.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-hc](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-hc)

## Supporting Pages

### Create a search data store \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- Source ID: `site-docs-root`
- Final score: 176
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- FieldMask ; public class SyncImportDocuments { public static void main ( String [] args ) throws Exception { syncImportDocuments (); } public static void syncImportDocuments () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentServiceClient documentServiceClient = DocumentServiceClient . create ()) { ImportDocumentsRequest request = ImportDocumentsRequest . newBuilder () . setParent ( BranchName . ofProjectLocationDataStoreBranchName ( "[PROJECT]" , "[LOCATION]" , "[DATA STORE]" , "[BRANCH]" ) . toString ()) . setErrorConfig ( ImportErrorConfig . newBuilder (). build ()) . setUpdateMask ( FieldMask . newBuilder (). build ()) . setAutoGenerateIds ( true ) . setIdField ( "idField1629396127" ) . setForceRefreshContent ( true ) . build (); ImportDocumentsResponse response = documentServiceClient . importDocumentsAsync ( request ). get (); } } } Node.js For more information, see the Vertex AI Search Node.js API reference documentation .
- FieldMask ; public class SyncImportDocuments { public static void main ( String [] args ) throws Exception { syncImportDocuments (); } public static void syncImportDocuments () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentServiceClient documentServiceClient = DocumentServiceClient . create ()) { ImportDocumentsRequest request = ImportDocumentsRequest . newBuilder () . setParent ( BranchName . ofProjectLocationDataStoreBranchName ( "[PROJECT]" , "[LOCATION]" , "[DATA STORE]" , "[BRANCH]" ) . toString ()) . setErrorConfig ( ImportErrorConfig . newBuilder (). build ()) . setUpdateMask ( FieldMask . newBuilder (). build ()) . setAutoGenerateIds ( true ) . setIdField ( "idField1629396127" ) . setForceRefreshContent ( true ) . build (); ImportDocumentsResponse response = documentServiceClient . importDocumentsAsync ( request ). get (); } } } Node.js For more information, see the Vertex AI Search Node.js API reference documentation .
- DataStoreServiceClient ; public class SyncCreateDataStore { public static void main ( String [] args ) throws Exception { syncCreateDataStore (); } public static void syncCreateDataStore () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DataStoreServiceClient dataStoreServiceClient = DataStoreServiceClient . create ()) { CreateDataStoreRequest request = CreateDataStoreRequest . newBuilder () . setParent ( CollectionName . of ( "[PROJECT]" , "[LOCATION]" , "[COLLECTION]" ). toString ()) . setDataStore ( DataStore . newBuilder (). build ()) . setDataStoreId ( "dataStoreId929489618" ) . setCreateAdvancedSiteSearch ( true ) . setSkipDefaultSchemaCreation ( true ) . build (); DataStore response = dataStoreServiceClient . createDataStoreAsync ( request ). get (); } } } Import documents import com.google.cloud.discoveryengine.v1.
- DataStoreServiceClient ; public class SyncCreateDataStore { public static void main ( String [] args ) throws Exception { syncCreateDataStore (); } public static void syncCreateDataStore () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DataStoreServiceClient dataStoreServiceClient = DataStoreServiceClient . create ()) { CreateDataStoreRequest request = CreateDataStoreRequest . newBuilder () . setParent ( CollectionName . of ( "[PROJECT]" , "[LOCATION]" , "[COLLECTION]" ). toString ()) . setDataStore ( DataStore . newBuilder (). build ()) . setDataStoreId ( "dataStoreId929489618" ) . setCreateAdvancedSiteSearch ( true ) . setSkipDefaultSchemaCreation ( true ) . build (); DataStore response = dataStoreServiceClient . createDataStoreAsync ( request ). get (); } } } Import documents import com.google.cloud.discoveryengine.v1.

### "Set up data source access control \_|\_ Vertex AI Search \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control)
- Source ID: `site-docs-reference`
- Final score: 145
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When following the steps for data import in Create a search data store , make sure to do the following: If using the console, then when specifying the kind of data you're uploading, select JSONL for structured data with metadata If using the API, set BigQuerySource.dataSchema to document Preview results in the Workforce Identity Federation console To preview results for apps with third-party access control in the Google Cloud console, you must sign in with your organization's credentials.
- Don't use a custom schema. [ { "name" : "id" , "mode" : "REQUIRED" , "type" : "STRING" , "fields" : [] }, { "name" : "jsonData" , "mode" : "NULLABLE" , "type" : "STRING" , "fields" : [] }, { "name" : "content" , "type" : "RECORD" , "mode" : "NULLABLE" , "fields" : [ { "name" : "mimeType" , "type" : "STRING" , "mode" : "NULLABLE" }, { "name" : "uri" , "type" : "STRING" , "mode" : "NULLABLE" } ] } { "name" : "acl info" , "type" : "RECORD" , "mode" : "NULLABLE" , "fields" : [ { "name" : "readers" , "type" : "RECORD" , "mode" : "REPEATED" , "fields" : [ { "name" : "principals" , "type" : "RECORD" , "mode" : "REPEATED" , "fields" : [ { "name" : "user id" , "type" : "STRING" , "mode" : "NULLABLE" }, { "name" : "group id" , "type" : "STRING" , "mode" : "NULLABLE" } ] } ] } ] } ] Include your ACL metadata as a column in your BigQuery table.
- Don't use a custom schema. [ { "name" : "id" , "mode" : "REQUIRED" , "type" : "STRING" , "fields" : [] }, { "name" : "jsonData" , "mode" : "NULLABLE" , "type" : "STRING" , "fields" : [] }, { "name" : "acl info" , "type" : "RECORD" , "mode" : "NULLABLE" , "fields" : [ { "name" : "readers" , "type" : "RECORD" , "mode" : "REPEATED" , "fields" : [ { "name" : "principals" , "type" : "RECORD" , "mode" : "REPEATED" , "fields" : [ { "name" : "user id" , "type" : "STRING" , "mode" : "NULLABLE" }, { "name" : "group id" , "type" : "STRING" , "mode" : "NULLABLE" } ] } ] } ] } ] Include your ACL metadata as a column in your BigQuery table.
- When following the steps for data import in Create a search data store , make sure to do the following: Upload your metadata with ACL information from the same bucket as your unstructured data If using the API, set GcsSource.dataSchema to document Structured data from Cloud Storage When setting up a data store for structured data from Cloud Storage, you need to also upload ACL metadata and set the data store as access controlled: When preparing your data, include ACL information in your metadata using the acl info field.

### "Create a healthcare search app \_|\_ Vertex AI Search \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-hc](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-hc)
- Source ID: `site-docs-reference`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In the External name of your company or organization field, enter the common name for your company or organization.
- If it is false , the app creation operation was unsuccessful. { "name": "projects/ PROJECT ID /locations/us/collections/default collection/operations/ APP CREATION OPERATION ID ", "done": true, "response": { "@type": "type.googleapis.com/google.cloud.discoveryengine.v1.Engine", "name": "projects/ PROJECT ID /locations/us/collections/default collection/engines/ APP ID ", "displayName": " APP DISPLAY NAME ", "dataStoreIds": [ " DATA STORE ID " ], "solutionType": "SOLUTION TYPE SEARCH", "searchEngineConfig": { "searchTier": "SEARCH TIER STANDARD", "searchAddOns": [ " SEARCH ADD ON LLM " ] }, "industryVertical": "HEALTHCARE FHIR" } } Verify app creation This task shows you how to verify whether a healthcare search app was created successfully and whether FHIR data was imported into the data store successfully.
- Key Term: In Vertex AI Search, the term app can be used interchangeably with the term engine in the context of APIs. curl -X POST\ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json"\ -H "X-Goog-User-Project: PROJECT ID " \ "https://us-discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/us/collections/default collection/engines?engineId= APP ID " \ -d '{ "displayName": " APP DISPLAY NAME ", "dataStoreIds":" DATA STORE ID ", "industryVertical": "HEALTHCARE FHIR", "solutionType": "SOLUTION TYPE SEARCH", "searchEngineConfig": { "searchTier": "SEARCH TIER STANDARD", "searchAddOns": [" SEARCH ADD ON "] } }' Replace the following: PROJECT ID : the ID of your Google Cloud project.
- The response contains details of the created app. { "name": "projects/ PROJECT ID /locations/us/collections/default collection/engines/ APP ID ", "displayName": " APP DISPLAY NAME ", "createTime": " APP CREATION TIMESTAMP ", "dataStoreIds": [ " DATA STORE ID " ], "solutionType": "SOLUTION TYPE SEARCH", "searchEngineConfig": { "searchTier": "SEARCH TIER STANDARD", "searchAddOns": [ "SEARCH ADD ON LLM" ] }, "industryVertical": "HEALTHCARE FHIR", "dataStores": [ "projects/ PROJECT ID /locations/us/collections/default collection/dataStores/ APP ID " ] } Verify data store creation and FHIR data import .

