---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:30:14.929Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Vertex AI Search Terraform search app provisioning"
feature_slug: "vertex-ai-search-terraform-search-app-provisioning"
latest_feature_date: "2024-02-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-hc"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-hc"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-engine-es"
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
Coverage: LOW

## Step 02 Summary

Terraform support was added to create and provision Vertex AI Search apps.

## Extended Definition

Terraform support was added to create and provision Vertex AI Search apps.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-hc](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-hc)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-hc](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-hc)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-engine-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-engine-es)

## Supporting Pages

### Create a search data store \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- This page describes how to create a data store and ingest data for custom search apps in Vertex AI Search. go to the section for the source you plan to use: Create a data store using website content Import from BigQuery Import from Cloud Storage Sync from Google Drive Sync from Gmail (Public preview) Sync from Google Sites (Public preview) Sync from Google Calendar (Public preview) Sync from Google Groups (Public preview) Import from Cloud SQL Import from Spanner (Public preview) Import from Firestore Import from Bigtable (Public Preview) Import from AlloyDB for PostgreSQL (Public Preview) Upload structured JSON data with the API Create a data store using Terraform To sync data from a third-party data source instead, see Connect a third-party data source .
- Import data from Bigtable. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /branches/0/documents:import" \ -d '{ "bigtableSource ": { "projectId": " BIGTABLE PROJECT ID ", "instanceId": " INSTANCE ID ", "tableId": " TABLE ID ", "bigtableOptions": { "keyFieldName": " KEY FIELD NAME ", "families": { "key": " KEY ", "value": { "fieldName": " FIELD NAME ", "encoding": " ENCODING ", "type": " TYPE ", "columns": [ { "qualifier": " QUALIFIER ", "fieldName": " FIELD NAME ", "encoding": " COLUMN ENCODING ", "type": " COLUMN VALUES TYPE " } ] } } ... } }, "reconciliationMode": " RECONCILIATION MODE ", "autoGenerateIds": " AUTO GENERATE IDS ", "idField": " ID FIELD ", }' Replace the following: PROJECT ID : the ID of your Vertex AI Search project.
- Import data from Spanner. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /branches/0/documents:import" \ -d '{ "cloudSpannerSource": { "projectId": " SPANNER PROJECT ID ", "instanceId": " INSTANCE ID ", "databaseId": " DATABASE ID ", "tableId": " TABLE ID ", "enableDataBoost": " DATA BOOST BOOLEAN " }, "reconciliationMode": " RECONCILIATION MODE ", "autoGenerateIds": " AUTO GENERATE IDS ", "idField": " ID FIELD ", }' Replace the following: PROJECT ID : the ID of your Vertex AI Search project.
- Import data from AlloyDB for PostgreSQL. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /branches/0/documents:import" \ -d '{ "alloydbSource": { "projectId": " ALLOYDB PROJECT ID ", "locationId": " LOCATION ID ", "clusterId": " CLUSTER ID ", "databaseId": " DATABASE ID ", "tableId": " TABLE ID ", }, "reconciliationMode": " RECONCILIATION MODE ", "autoGenerateIds": " AUTO GENERATE IDS ", "idField": " ID FIELD ", }' Replace the following: PROJECT ID : the ID of your Vertex AI Search project.

### "Create a healthcare search app \_|\_ Vertex AI Search \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-hc](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-hc)
- Source ID: `site-api-reference`
- Final score: 206
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Key Term: In Vertex AI Search, the term app can be used interchangeably with the term engine in the context of APIs. curl -X POST\ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json"\ -H "X-Goog-User-Project: PROJECT ID " \ "https://us-discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/us/collections/default collection/engines?engineId= APP ID " \ -d '{ "displayName": " APP DISPLAY NAME ", "dataStoreIds":" DATA STORE ID ", "industryVertical": "HEALTHCARE FHIR", "solutionType": "SOLUTION TYPE SEARCH", "searchEngineConfig": { "searchTier": "SEARCH TIER STANDARD", "searchAddOns": [" SEARCH ADD ON "] } }' Replace the following: PROJECT ID : the ID of your Google Cloud project.
- To create a healthcare search app, follow these steps: Permissions required for this task Grant the following Identity and Access Management (IAM) roles to the service- PROJECT NUMBER @gcp-sa-discoveryengine.iam.gserviceaccount.com service account in the project that contains the Vertex AI Search data store: Purpose Roles To perform a one-time batch import of FHIR data from FHIR stores in Cloud Healthcare API.
- For clarity, with respect to the use of Vertex AI Search to retrieve and summarize existing medical information, the restriction on the use for clinical purposes means the restriction on the use for direct diagnosis or treatment purposes without review by a licensed professional in compliance with applicable laws and regulations.
- To search clinical data in Vertex AI Search, you can follow one of these workflows: Create a healthcare data store, import FHIR R4 data into the data store, connect it to a healthcare search app, and query the clinical data.

### "Create a healthcare search data store \_|\_ Vertex AI Search \_|\_ Google\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-hc](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-hc)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: N/A

Evidence snippets:
- If they're in the same project, go back to the previous step. curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -H "X-Goog-User-Project: PROJECT ID " \ "https://us-discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/us/dataStores/ DATA STORE ID /branches/0/documents:import" \ -d '{ "reconciliation mode": "FULL", "fhir store source": {"fhir store": "projects/ SOURCE PROJECT ID /locations/ CLOUD HEALTHCARE DATASET LOCATION /datasets/ CLOUD HEALTHCARE DATASET ID /fhirStores/ FHIR STORE ID "} }' Replace the following: PROJECT ID : the ID of the Google Cloud project that contains the Vertex AI Search data store.
- For clarity, with respect to the use of Vertex AI Search to retrieve and summarize existing medical information, the restriction on the use for clinical purposes means the restriction on the use for direct diagnosis or treatment purposes without review by a licensed professional in compliance with applicable laws and regulations.
- Otherwise, the data store creation operation was unsuccessful. { "name": " OPERATION ID ", "done": true } If the source FHIR store and the target Vertex AI Search data store are in the same Google Cloud project, call the following method to perform a one-time batch import.
- To search clinical data in Vertex AI Search, you can follow one of these workflows: Create a healthcare data store, import FHIR R4 data into the data store, connect it to a healthcare search app, and query the clinical data.

### Create a search app \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-engine-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-engine-es)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Key Term: In Vertex AI Search, the term app can be used interchangeably with the term engine in the context of APIs. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -H "X-Goog-User-Project: PROJECT ID " \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/engines?engineId= APP ID " \ -d '{ "displayName": " APP DISPLAY NAME ", "dataStoreIds": [" DATA STORE ID "], "solutionType": "SOLUTION TYPE SEARCH", "industryVertical": "GENERIC", "searchEngineConfig": { "searchTier": " SEARCH TIER ", "searchAddOns": [" SEARCH ADD ON "] } }' Replace the following: PROJECT ID : the ID of your Google Cloud project.
- Home Documentation AI and ML Vertex AI Search Send feedback Create a search app Stay organized with collections Save and categorize content based on your preferences.
- DATA STORE ID : the ID of an existing Vertex AI Search data store that you want to add to the Vertex AI Search app.
- APP DISPLAY NAME : the display name of the Vertex AI Search app that you want to create.

