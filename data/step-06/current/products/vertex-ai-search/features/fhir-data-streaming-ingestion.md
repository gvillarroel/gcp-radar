---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:37.017Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "FHIR data streaming ingestion"
feature_slug: "fhir-data-streaming-ingestion"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-hc"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-hc"
keywords:
  - "fhir"
  - "streaming"
  - "ingestion"
  - "healthcare"
  - "search"
  - "stores"
  - "gain"
  - "private"
---

# FHIR data streaming ingestion

Product: Vertex AI Search
Coverage: MEDIUM

## Step 02 Summary

Healthcare FHIR search data stores gain Private Preview support for streaming import, allowing ongoing ingestion in addition to one-time batch import.

## Extended Definition

Healthcare FHIR search data stores gain Private Preview support for streaming import, allowing ongoing ingestion in addition to one-time batch import.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-hc](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-hc)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-hc](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-hc)

## Supporting Pages

### About apps and data stores \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Healthcare FHIR data A healthcare search app uses FHIR R4 data imported from a Cloud Healthcare API FHIR store.
- For a list of FHIR R4 resources that Vertex AI Search supports, see Healthcare FHIR R4 data schema reference .
- For a list of FHIR R4 resources that Vertex AI Search supports, see Healthcare FHIR R4 data schema reference .
- For more information, see how to prepare healthcare FHIR data for ingestion.

### "Create a healthcare search data store \_|\_ Vertex AI Search \_|\_ Google\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-hc](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-hc)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- REST Create a data connector to set up streaming. curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -H "X-Goog-User-Project: PROJECT ID " \ "https://us-discoveryengine.googleapis.com/v1alpha/projects/ PROJECT ID /locations/us:setUpDataConnector" \ -d ' { "collectionId": " COLLECTION ID ", "collectionDisplayName": " COLLECTION NAME ", "dataConnector": { "dataSource": "gcp fhir", "params": { "instance uri": "projects/ SOURCE PROJECT ID /locations/ CLOUD HEALTHCARE DATASET LOCATION /datasets/ CLOUD HEALTHCARE DATASET ID " }, "entities": [ { "entityName": " FHIR STORE NAME " "healthcareFhirConfig": { "enableConfigurableSchema": CONFIGURABLE SCHEMA TRUE FALSE , "enableStaticIndexingForBatchIngestion": STATIC INDEXING TRUE FALSE } } ], "syncMode": "STREAMING" } }' Replace the following: PROJECT ID : the ID of your Google Cloud project.
- This field is displayed only if there are any FHIR resources that failed to be imported. errorConfig : provides a path to a Cloud Storage location that contains the error summary log file. { "name": "projects/ PROJECT ID /locations/us/collections/default collection/dataStores/ DATA STORE ID /branches/0/operations/ IMPORT OPERATION ID ", "metadata": { "@type": "type.googleapis.com/google.cloud.discoveryengine.v1.ImportDocumentsMetadata", "createTime": " START TIMESTAMP ", "updateTime": " END TIMESTAMP ", "successCount": " SUCCESS COUNT ", "failureCount": " FAILURE COUNT ", "totalCount": " TOTAL COUNT ", }, "done": true, "response": { "@type": "type.googleapis.com/google.cloud.discoveryengine.v1.ImportDocumentsResponse", "errorSamples": [ ERROR SAMPLE ], "errorConfig": { "gcsPrefix": " LOG FILE LOCATION " } } } What's next Create a healthcare search app and connect your data store to it.
- The response contains details of the created data store. { "name": "projects/ PROJECT ID /locations/us/collections/default collection/dataStores/ DATA STORE ID ", "displayName": " DATA STORE DISPLAY NAME ", "industryVertical": "HEALTHCARE FHIR", "createTime": " DATA STORE CREATION TIMESTAMP ", "solutionTypes": [ "SOLUTION TYPE SEARCH" ], "defaultSchemaId": "default schema", "documentProcessingConfig": { "defaultParsingConfig": { "ocrParsingConfig": {} } } } Verify whether the FHIR data import operation is complete. curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://us-discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/us/collections/default collection/dataStores/ DATA STORE ID /branches/0/operations/ IMPORT OPERATION ID " Replace the following: PROJECT ID : the ID of your Google Cloud project.
- If they're in the same project, go back to the previous step. curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -H "X-Goog-User-Project: PROJECT ID " \ "https://us-discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/us/dataStores/ DATA STORE ID /branches/0/documents:import" \ -d '{ "reconciliation mode": "FULL", "fhir store source": {"fhir store": "projects/ SOURCE PROJECT ID /locations/ CLOUD HEALTHCARE DATASET LOCATION /datasets/ CLOUD HEALTHCARE DATASET ID /fhirStores/ FHIR STORE ID "} }' Replace the following: PROJECT ID : the ID of the Google Cloud project that contains the Vertex AI Search data store.

### "Create a healthcare search app \_|\_ Vertex AI Search \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-hc](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-hc)
- Source ID: `site-docs-reference`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The response contains details of the created app. { "name": "projects/ PROJECT ID /locations/us/collections/default collection/engines/ APP ID ", "displayName": " APP DISPLAY NAME ", "createTime": " APP CREATION TIMESTAMP ", "dataStoreIds": [ " DATA STORE ID " ], "solutionType": "SOLUTION TYPE SEARCH", "searchEngineConfig": { "searchTier": "SEARCH TIER STANDARD", "searchAddOns": [ "SEARCH ADD ON LLM" ] }, "industryVertical": "HEALTHCARE FHIR", "dataStores": [ "projects/ PROJECT ID /locations/us/collections/default collection/dataStores/ APP ID " ] } Verify data store creation and FHIR data import .
- Healthcare FHIR Store Administrator ( roles/healthcare.fhirStoreAdmin ) Healthcare FHIR Resource Reader ( roles/healthcare.fhirResourceReader ) Grant the following Identity and Access Management roles to the service- SOURCE PROJECT NUMBER @gcp-sa-healthcare.iam.gserviceaccount.com service account in the project that contains the Cloud Healthcare API FHIR R4 data store: Purpose Roles To perform a streaming import of FHIR data from FHIR stores in Cloud Healthcare API in the same Google Cloud project.
- To create a healthcare search app, follow these steps: Permissions required for this task Grant the following Identity and Access Management (IAM) roles to the service- PROJECT NUMBER @gcp-sa-discoveryengine.iam.gserviceaccount.com service account in the project that contains the Vertex AI Search data store: Purpose Roles To perform a one-time batch import of FHIR data from FHIR stores in Cloud Healthcare API.
- Storage Object Admin ( roles/storage.objectAdmin ) Grant the following Identity and Access Management roles to the service- PROJECT NUMBER @gcp-sa-discoveryengine.iam.gserviceaccount.com service account in the project that contains the Cloud Healthcare API FHIR R4 data store: Purpose Roles To perform a streaming import of FHIR data from FHIR stores in Cloud Healthcare API in a different Google Cloud project.

