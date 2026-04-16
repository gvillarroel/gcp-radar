---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:36.981Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Vertex AI Search CMEK key rotation for data stores"
feature_slug: "vertex-ai-search-cmek-key-rotation-for-data-stores"
latest_feature_date: "2024-07-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations"
keywords:
  - "vertex"
  - "ai"
  - "search"
  - "cmek"
  - "key"
  - "rotation"
  - "stores"
  - "introduces"
---

# Vertex AI Search CMEK key rotation for data stores

Product: Vertex AI Search
Coverage: MEDIUM

## Step 02 Summary

Introduces key rotation for customer-managed encryption keys used by Vertex AI Search data stores associated with search apps, available in Private Preview.

## Extended Definition

Introduces key rotation for customer-managed encryption keys used by Vertex AI Search data stores associated with search apps, available in Private Preview.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek](https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations)

## Supporting Pages

### "Customer-managed encryption keys \_|\_ Vertex AI Search \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek](https://docs.cloud.google.com/generative-ai-app-builder/docs/cmek)
- Source ID: `site-docs-reference`
- Final score: 114
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- An example response looks like this: { "name": "projects/969795412903/locations/us/collections/default collection/dataStores/my-data-store-1", "displayName": "my-data-store-1", "industryVertical": "GENERIC", "createTime": "2023-09-05T21:20:21.520552Z", "solutionTypes": [ "SOLUTION TYPE SEARCH" ], "defaultSchemaId": "default schema", "cmekConfig": { "name": "projects/969795412903/locations/us/collections/default collection/dataStores/my-data-store-1/cmekConfigs/default cmek config", "kmsKey": "projects/my-ai-app-project-123/locations/us/keyRings/my-key-ring/cryptoKeys/my-key" } } Other data protected by the Cloud KMS key In addition to data in the data stores, your keys can protect other types of app-owned core information held by Vertex AI Search, such as the session data generated during search with follow-ups .
- An example curl call and response looks like this: $ curl -X GET -H "Authorization: Bearer $(gcloud auth print-access-token)" "https://us-discoveryengine.googleapis.com/v1/projects/my-ai-app-project-123/locations/us/cmekConfigs" { "cmek configs": [ { "name": "projects/my-ai-app-project-123/locations/us/cmekConfigs/default cmek config", "kmsKey": "projects/key-project-456/locations/us/keyRings/my-key-ring/cryptoKeys/my-key" "state": "ACTIVE" "isDefault": true } ] } Unregister your Cloud KMS key To unregister your key from Vertex AI Search, follow these steps: Call the DeleteCmekConfig method with the CmekConfig resource name that you want to unregister. curl -X DELETE \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ "https:// LOCATION -discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /cmekConfigs/ CMEK CONFIG ID " Replace the following: LOCATION : the multi-region of your data store: us or eu .
- Procedure REST To register your own key for Vertex AI Search, follow these steps: Call the UpdateCmekConfig method with the key that you want to register. curl -X PATCH \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -d '{"kmsKey":"projects/ KMS PROJECT ID /locations/ KMS LOCATION /keyRings/ KEY RING /cryptoKeys/ KEY NAME "}' \ "https:// LOCATION -discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /cmekConfigs/ CMEK CONFIG ID ?set default= SET DEFAULT " Replace the following: KMS PROJECT ID : the ID of your project that contains the key.
- View Cloud KMS keys To view a registered key for Vertex AI Search, do one of the following: If you have the CmekConfig resource name, call the GetCmekConfig method: curl -X GET \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ "https:// LOCATION -discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/ LOCATION /cmekConfigs/ CMEK CONFIG ID " Replace the following: LOCATION : the multi-region of your data store: us or eu .

### "Create a custom recommendations data store \_|\_ Vertex AI Search \_|\_\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations)
- Source ID: `site-docs-root`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- The following table compares the two ways that you can import Cloud Storage data into Vertex AI Search data stores.
- The following table compares the two ways that you can import BigQuery data into Vertex AI Search data stores.
- FieldMask ; public class SyncImportDocuments { public static void main ( String [] args ) throws Exception { syncImportDocuments (); } public static void syncImportDocuments () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentServiceClient documentServiceClient = DocumentServiceClient . create ()) { ImportDocumentsRequest request = ImportDocumentsRequest . newBuilder () . setParent ( BranchName . ofProjectLocationDataStoreBranchName ( "[PROJECT]" , "[LOCATION]" , "[DATA STORE]" , "[BRANCH]" ) . toString ()) . setErrorConfig ( ImportErrorConfig . newBuilder (). build ()) . setUpdateMask ( FieldMask . newBuilder (). build ()) . setAutoGenerateIds ( true ) . setIdField ( "idField1629396127" ) . setForceRefreshContent ( true ) . build (); ImportDocumentsResponse response = documentServiceClient . importDocumentsAsync ( request ). get (); } } } Node.js For more information, see the Vertex AI Search Node.js API reference documentation .
- FieldMask ; public class SyncImportDocuments { public static void main ( String [] args ) throws Exception { syncImportDocuments (); } public static void syncImportDocuments () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentServiceClient documentServiceClient = DocumentServiceClient . create ()) { ImportDocumentsRequest request = ImportDocumentsRequest . newBuilder () . setParent ( BranchName . ofProjectLocationDataStoreBranchName ( "[PROJECT]" , "[LOCATION]" , "[DATA STORE]" , "[BRANCH]" ) . toString ()) . setErrorConfig ( ImportErrorConfig . newBuilder (). build ()) . setUpdateMask ( FieldMask . newBuilder (). build ()) . setAutoGenerateIds ( true ) . setIdField ( "idField1629396127" ) . setForceRefreshContent ( true ) . build (); ImportDocumentsResponse response = documentServiceClient . importDocumentsAsync ( request ). get (); } } } Node.js For more information, see the Vertex AI Search Node.js API reference documentation .

### Create a search data store \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- Source ID: `site-docs-root`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- Import data from Bigtable. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /branches/0/documents:import" \ -d '{ "bigtableSource ": { "projectId": " BIGTABLE PROJECT ID ", "instanceId": " INSTANCE ID ", "tableId": " TABLE ID ", "bigtableOptions": { "keyFieldName": " KEY FIELD NAME ", "families": { "key": " KEY ", "value": { "fieldName": " FIELD NAME ", "encoding": " ENCODING ", "type": " TYPE ", "columns": [ { "qualifier": " QUALIFIER ", "fieldName": " FIELD NAME ", "encoding": " COLUMN ENCODING ", "type": " COLUMN VALUES TYPE " } ] } } ... } }, "reconciliationMode": " RECONCILIATION MODE ", "autoGenerateIds": " AUTO GENERATE IDS ", "idField": " ID FIELD ", }' Replace the following: PROJECT ID : the ID of your Vertex AI Search project.
- Import data from Spanner. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /branches/0/documents:import" \ -d '{ "cloudSpannerSource": { "projectId": " SPANNER PROJECT ID ", "instanceId": " INSTANCE ID ", "databaseId": " DATABASE ID ", "tableId": " TABLE ID ", "enableDataBoost": " DATA BOOST BOOLEAN " }, "reconciliationMode": " RECONCILIATION MODE ", "autoGenerateIds": " AUTO GENERATE IDS ", "idField": " ID FIELD ", }' Replace the following: PROJECT ID : the ID of your Vertex AI Search project.
- Import data from AlloyDB for PostgreSQL. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /branches/0/documents:import" \ -d '{ "alloydbSource": { "projectId": " ALLOYDB PROJECT ID ", "locationId": " LOCATION ID ", "clusterId": " CLUSTER ID ", "databaseId": " DATABASE ID ", "tableId": " TABLE ID ", }, "reconciliationMode": " RECONCILIATION MODE ", "autoGenerateIds": " AUTO GENERATE IDS ", "idField": " ID FIELD ", }' Replace the following: PROJECT ID : the ID of your Vertex AI Search project.
- Import data from Cloud SQL. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /branches/0/documents:import" \ -d '{ "cloudSqlSource": { "projectId": " SQL PROJECT ID ", "instanceId": " INSTANCE ID ", "databaseId": " DATABASE ID ", "tableId": " TABLE ID ", "gcsStagingDir": " STAGING DIRECTORY " }, "reconciliationMode": " RECONCILIATION MODE ", "autoGenerateIds": " AUTO GENERATE IDS ", "idField": " ID FIELD ", }' Replace the following: PROJECT ID : the ID of your Vertex AI Search project.

