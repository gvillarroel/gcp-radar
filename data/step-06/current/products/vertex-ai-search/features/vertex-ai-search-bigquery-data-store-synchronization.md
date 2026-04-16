---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:36.989Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Vertex AI Search BigQuery data store synchronization"
feature_slug: "vertex-ai-search-bigquery-data-store-synchronization"
latest_feature_date: "2024-06-27"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-hc"
keywords:
  - "vertex"
  - "ai"
  - "search"
  - "bigquery"
  - "store"
  - "synchronization"
  - "adds"
  - "creating"
---

# Vertex AI Search BigQuery data store synchronization

Product: Vertex AI Search
Coverage: MEDIUM

## Step 02 Summary

Adds support for creating Vertex AI Search data stores that periodically synchronize data from BigQuery datasets on configurable intervals (daily, every 3 days, or every 5 days).

## Extended Definition

Adds support for creating Vertex AI Search data stores that periodically synchronize data from BigQuery datasets on configurable intervals (daily, every 3 days, or every 5 days).

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-hc](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-hc)

## Supporting Pages

### Create a search data store \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- Source ID: `site-docs-root`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- FieldMask ; public class SyncImportDocuments { public static void main ( String [] args ) throws Exception { syncImportDocuments (); } public static void syncImportDocuments () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentServiceClient documentServiceClient = DocumentServiceClient . create ()) { ImportDocumentsRequest request = ImportDocumentsRequest . newBuilder () . setParent ( BranchName . ofProjectLocationDataStoreBranchName ( "[PROJECT]" , "[LOCATION]" , "[DATA STORE]" , "[BRANCH]" ) . toString ()) . setErrorConfig ( ImportErrorConfig . newBuilder (). build ()) . setUpdateMask ( FieldMask . newBuilder (). build ()) . setAutoGenerateIds ( true ) . setIdField ( "idField1629396127" ) . setForceRefreshContent ( true ) . build (); ImportDocumentsResponse response = documentServiceClient . importDocumentsAsync ( request ). get (); } } } Node.js For more information, see the Vertex AI Search Node.js API reference documentation .
- FieldMask ; public class SyncImportDocuments { public static void main ( String [] args ) throws Exception { syncImportDocuments (); } public static void syncImportDocuments () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentServiceClient documentServiceClient = DocumentServiceClient . create ()) { ImportDocumentsRequest request = ImportDocumentsRequest . newBuilder () . setParent ( BranchName . ofProjectLocationDataStoreBranchName ( "[PROJECT]" , "[LOCATION]" , "[DATA STORE]" , "[BRANCH]" ) . toString ()) . setErrorConfig ( ImportErrorConfig . newBuilder (). build ()) . setUpdateMask ( FieldMask . newBuilder (). build ()) . setAutoGenerateIds ( true ) . setIdField ( "idField1629396127" ) . setForceRefreshContent ( true ) . build (); ImportDocumentsResponse response = documentServiceClient . importDocumentsAsync ( request ). get (); } } } Node.js For more information, see the Vertex AI Search Node.js API reference documentation .
- This page describes how to create a data store and ingest data for custom search apps in Vertex AI Search. go to the section for the source you plan to use: Create a data store using website content Import from BigQuery Import from Cloud Storage Sync from Google Drive Sync from Gmail (Public preview) Sync from Google Sites (Public preview) Sync from Google Calendar (Public preview) Sync from Google Groups (Public preview) Import from Cloud SQL Import from Spanner (Public preview) Import from Firestore Import from Bigtable (Public Preview) Import from AlloyDB for PostgreSQL (Public Preview) Upload structured JSON data with the API Create a data store using Terraform To sync data from a third-party data source instead, see Connect a third-party data source .
- Before you begin To import data from a source Google Cloud project that's different from the Google Cloud project with the Vertex AI Search data store, grant the following Identity and Access Management (IAM) roles to the service- PROJECT NUMBER @gcp-sa-discoveryengine.iam.gserviceaccount.com service account in the project that contains the Vertex AI Search data store: BigQuery Job User ( roles/bigquery.jobUser ) BigQuery data Editor ( roles/bigquery.dataEditor ) Caution: When you import data from BigQuery into a Vertex AI Search data store, BigQuery permissions aren't imported with the data.

### "Create a custom recommendations data store \_|\_ Vertex AI Search \_|\_\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations)
- Source ID: `site-docs-root`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- FieldMask ; public class SyncImportDocuments { public static void main ( String [] args ) throws Exception { syncImportDocuments (); } public static void syncImportDocuments () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentServiceClient documentServiceClient = DocumentServiceClient . create ()) { ImportDocumentsRequest request = ImportDocumentsRequest . newBuilder () . setParent ( BranchName . ofProjectLocationDataStoreBranchName ( "[PROJECT]" , "[LOCATION]" , "[DATA STORE]" , "[BRANCH]" ) . toString ()) . setErrorConfig ( ImportErrorConfig . newBuilder (). build ()) . setUpdateMask ( FieldMask . newBuilder (). build ()) . setAutoGenerateIds ( true ) . setIdField ( "idField1629396127" ) . setForceRefreshContent ( true ) . build (); ImportDocumentsResponse response = documentServiceClient . importDocumentsAsync ( request ). get (); } } } Node.js For more information, see the Vertex AI Search Node.js API reference documentation .
- FieldMask ; public class SyncImportDocuments { public static void main ( String [] args ) throws Exception { syncImportDocuments (); } public static void syncImportDocuments () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentServiceClient documentServiceClient = DocumentServiceClient . create ()) { ImportDocumentsRequest request = ImportDocumentsRequest . newBuilder () . setParent ( BranchName . ofProjectLocationDataStoreBranchName ( "[PROJECT]" , "[LOCATION]" , "[DATA STORE]" , "[BRANCH]" ) . toString ()) . setErrorConfig ( ImportErrorConfig . newBuilder (). build ()) . setUpdateMask ( FieldMask . newBuilder (). build ()) . setAutoGenerateIds ( true ) . setIdField ( "idField1629396127" ) . setForceRefreshContent ( true ) . build (); ImportDocumentsResponse response = documentServiceClient . importDocumentsAsync ( request ). get (); } } } Node.js For more information, see the Vertex AI Search Node.js API reference documentation .
- Before you begin To import data from a source Google Cloud project that's different from the Google Cloud project with the Vertex AI Search data store, grant the following Identity and Access Management (IAM) roles to the service- PROJECT NUMBER @gcp-sa-discoveryengine.iam.gserviceaccount.com service account in the project that contains the Vertex AI Search data store: BigQuery Job User ( roles/bigquery.jobUser ) BigQuery data Editor ( roles/bigquery.dataEditor ) Caution: When you import data from BigQuery into a Vertex AI Search data store, BigQuery permissions aren't imported with the data.
- The following procedure describes how to create a data connector that associates a BigQuery dataset with a Vertex AI Search data connector and how to specify a table on the dataset for each data store you want to create.

### "Create a healthcare search data store \_|\_ Vertex AI Search \_|\_ Google\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-hc](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-hc)
- Source ID: `site-docs-root`
- Final score: 111
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- BigQuery Job User ( roles/bigquery.jobUser ) BigQuery data Editor ( roles/bigquery.dataEditor ) To customize the schema when creating a data store to configure the indexability, searchability, and retrievability of FHIR resources and elements.
- If they're in the same project, go back to the previous step. curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -H "X-Goog-User-Project: PROJECT ID " \ "https://us-discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/us/dataStores/ DATA STORE ID /branches/0/documents:import" \ -d '{ "reconciliation mode": "FULL", "fhir store source": {"fhir store": "projects/ SOURCE PROJECT ID /locations/ CLOUD HEALTHCARE DATASET LOCATION /datasets/ CLOUD HEALTHCARE DATASET ID /fhirStores/ FHIR STORE ID "} }' Replace the following: PROJECT ID : the ID of the Google Cloud project that contains the Vertex AI Search data store.
- You need this value to verify the status of the import or cancel an ongoing batch import . { "name": "projects/ PROJECT ID /locations/us/collections/default collection/dataStores/ DATA STORE ID /branches/0/operations/ IMPORT OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.discoveryengine.v1.ImportDocumentsMetadata" } } If the source FHIR store and the target Vertex AI Search data store are in different Google Cloud projects, call the following method to perform a one-time batch import.
- You need this value to verify the status of the import . { "name": "projects/ PROJECT ID /locations/us/collections/default collection/dataStores/ DATA STORE ID /branches/0/operations/ IMPORT OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.discoveryengine.v1.ImportDocumentsMetadata" } } Python For more information, see the Vertex AI Search Python API reference documentation .

