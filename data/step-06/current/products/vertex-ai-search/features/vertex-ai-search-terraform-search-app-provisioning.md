---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:37.061Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Vertex AI Search Terraform search app provisioning"
feature_slug: "vertex-ai-search-terraform-search-app-provisioning"
latest_feature_date: "2024-02-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-media"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-generic-recommendations-app"
keywords:
  - "vertex"
  - "ai"
  - "search"
  - "terraform"
  - "app"
  - "provisioning"
  - "was"
  - "added"
---

# Vertex AI Search Terraform search app provisioning

Product: Vertex AI Search
Coverage: MEDIUM

## Step 02 Summary

Terraform support was added to create and provision Vertex AI Search apps.

## Extended Definition

Terraform support was added to create and provision Vertex AI Search apps.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-media](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-media)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-generic-recommendations-app](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-generic-recommendations-app)

## Supporting Pages

### Create media apps \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-media](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-media)
- Source ID: `site-docs-root`
- Final score: 78
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Vertex AI Search Send feedback Create media apps Stay organized with collections Save and categorize content based on your preferences.
- What's next For search apps: Configure search results for structured data For recommendations apps: Get media recommendations Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Create a media search app To use the Google Cloud console to create a media search app, follow these steps: Console In the Google Cloud console, go to the AI Applications page.
- The processes for creating media recommendations apps and creating media search apps are similar.

### "Create a custom recommendations app \_|\_ Vertex AI Search \_|\_ Google\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-generic-recommendations-app](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-generic-recommendations-app)
- Source ID: `site-docs-root`
- Final score: 68
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Key Term: In Vertex AI Search, the term app can be used interchangeably with the term engine in the context of APIs. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -H "X-Goog-User-Project: PROJECT ID " \ "https://discoveryengine.googleapis.com/v1alpha/projects/ PROJECT ID /locations/global/collections/default collection/engines?engineId= APP ID " \ -d '{ "displayName": " APP DISPLAY NAME ", "dataStoreIds": [" DATA STORE ID "], "solutionType": ["SOLUTION TYPE RECOMMENDATION"], "similarDocumentsConfig": {} }' Replace the following: PROJECT ID : the ID of your Google Cloud project.
- Home Documentation AI and ML Vertex AI Search Send feedback Create a custom recommendations app Stay organized with collections Save and categorize content based on your preferences.
- Your data store has basic website search, whereas a custom recommendations app requires a data store with advanced website indexing.

### Create a search data store \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- Source ID: `site-docs-root`
- Final score: 66
- Re-rank relevance: N/A

Evidence snippets:
- This page describes how to create a data store and ingest data for custom search apps in Vertex AI Search. go to the section for the source you plan to use: Create a data store using website content Import from BigQuery Import from Cloud Storage Sync from Google Drive Sync from Gmail (Public preview) Sync from Google Sites (Public preview) Sync from Google Calendar (Public preview) Sync from Google Groups (Public preview) Import from Cloud SQL Import from Spanner (Public preview) Import from Firestore Import from Bigtable (Public Preview) Import from AlloyDB for PostgreSQL (Public Preview) Upload structured JSON data with the API Create a data store using Terraform To sync data from a third-party data source instead, see Connect a third-party data source .
- FieldMask ; public class SyncImportDocuments { public static void main ( String [] args ) throws Exception { syncImportDocuments (); } public static void syncImportDocuments () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentServiceClient documentServiceClient = DocumentServiceClient . create ()) { ImportDocumentsRequest request = ImportDocumentsRequest . newBuilder () . setParent ( BranchName . ofProjectLocationDataStoreBranchName ( "[PROJECT]" , "[LOCATION]" , "[DATA STORE]" , "[BRANCH]" ) . toString ()) . setErrorConfig ( ImportErrorConfig . newBuilder (). build ()) . setUpdateMask ( FieldMask . newBuilder (). build ()) . setAutoGenerateIds ( true ) . setIdField ( "idField1629396127" ) . setForceRefreshContent ( true ) . build (); ImportDocumentsResponse response = documentServiceClient . importDocumentsAsync ( request ). get (); } } } Node.js For more information, see the Vertex AI Search Node.js API reference documentation .
- FieldMask ; public class SyncImportDocuments { public static void main ( String [] args ) throws Exception { syncImportDocuments (); } public static void syncImportDocuments () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( DocumentServiceClient documentServiceClient = DocumentServiceClient . create ()) { ImportDocumentsRequest request = ImportDocumentsRequest . newBuilder () . setParent ( BranchName . ofProjectLocationDataStoreBranchName ( "[PROJECT]" , "[LOCATION]" , "[DATA STORE]" , "[BRANCH]" ) . toString ()) . setErrorConfig ( ImportErrorConfig . newBuilder (). build ()) . setUpdateMask ( FieldMask . newBuilder (). build ()) . setAutoGenerateIds ( true ) . setIdField ( "idField1629396127" ) . setForceRefreshContent ( true ) . build (); ImportDocumentsResponse response = documentServiceClient . importDocumentsAsync ( request ). get (); } } } Node.js For more information, see the Vertex AI Search Node.js API reference documentation .
- Import data from Bigtable. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /branches/0/documents:import" \ -d '{ "bigtableSource ": { "projectId": " BIGTABLE PROJECT ID ", "instanceId": " INSTANCE ID ", "tableId": " TABLE ID ", "bigtableOptions": { "keyFieldName": " KEY FIELD NAME ", "families": { "key": " KEY ", "value": { "fieldName": " FIELD NAME ", "encoding": " ENCODING ", "type": " TYPE ", "columns": [ { "qualifier": " QUALIFIER ", "fieldName": " FIELD NAME ", "encoding": " COLUMN ENCODING ", "type": " COLUMN VALUES TYPE " } ] } } ... } }, "reconciliationMode": " RECONCILIATION MODE ", "autoGenerateIds": " AUTO GENERATE IDS ", "idField": " ID FIELD ", }' Replace the following: PROJECT ID : the ID of your Vertex AI Search project.

