---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:37.048Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Vertex AI Search ServiceNow data source connector"
feature_slug: "vertex-ai-search-servicenow-data-source-connector"
latest_feature_date: "2024-03-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations"
keywords:
  - "vertex"
  - "ai"
  - "search"
  - "servicenow"
  - "source"
  - "connector"
  - "adds"
  - "private"
---

# Vertex AI Search ServiceNow data source connector

Product: Vertex AI Search
Coverage: MEDIUM

## Step 02 Summary

Adds a Private Preview integration that allows Vertex AI Search to connect to ServiceNow as a third-party data source.

## Extended Definition

Adds a Private Preview integration that allows Vertex AI Search to connect to ServiceNow as a third-party data source.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations)

## Supporting Pages

### Create a search data store \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- Source ID: `site-docs-root`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- Import data from Bigtable. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /branches/0/documents:import" \ -d '{ "bigtableSource ": { "projectId": " BIGTABLE PROJECT ID ", "instanceId": " INSTANCE ID ", "tableId": " TABLE ID ", "bigtableOptions": { "keyFieldName": " KEY FIELD NAME ", "families": { "key": " KEY ", "value": { "fieldName": " FIELD NAME ", "encoding": " ENCODING ", "type": " TYPE ", "columns": [ { "qualifier": " QUALIFIER ", "fieldName": " FIELD NAME ", "encoding": " COLUMN ENCODING ", "type": " COLUMN VALUES TYPE " } ] } } ... } }, "reconciliationMode": " RECONCILIATION MODE ", "autoGenerateIds": " AUTO GENERATE IDS ", "idField": " ID FIELD ", }' Replace the following: PROJECT ID : the ID of your Vertex AI Search project.
- This page describes how to create a data store and ingest data for custom search apps in Vertex AI Search. go to the section for the source you plan to use: Create a data store using website content Import from BigQuery Import from Cloud Storage Sync from Google Drive Sync from Gmail (Public preview) Sync from Google Sites (Public preview) Sync from Google Calendar (Public preview) Sync from Google Groups (Public preview) Import from Cloud SQL Import from Spanner (Public preview) Import from Firestore Import from Bigtable (Public Preview) Import from AlloyDB for PostgreSQL (Public Preview) Upload structured JSON data with the API Create a data store using Terraform To sync data from a third-party data source instead, see Connect a third-party data source .
- Import data from Spanner. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /branches/0/documents:import" \ -d '{ "cloudSpannerSource": { "projectId": " SPANNER PROJECT ID ", "instanceId": " INSTANCE ID ", "databaseId": " DATABASE ID ", "tableId": " TABLE ID ", "enableDataBoost": " DATA BOOST BOOLEAN " }, "reconciliationMode": " RECONCILIATION MODE ", "autoGenerateIds": " AUTO GENERATE IDS ", "idField": " ID FIELD ", }' Replace the following: PROJECT ID : the ID of your Vertex AI Search project.
- Import data from AlloyDB for PostgreSQL. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /branches/0/documents:import" \ -d '{ "alloydbSource": { "projectId": " ALLOYDB PROJECT ID ", "locationId": " LOCATION ID ", "clusterId": " CLUSTER ID ", "databaseId": " DATABASE ID ", "tableId": " TABLE ID ", }, "reconciliationMode": " RECONCILIATION MODE ", "autoGenerateIds": " AUTO GENERATE IDS ", "idField": " ID FIELD ", }' Replace the following: PROJECT ID : the ID of your Vertex AI Search project.

### "Set up data source access control \_|\_ Vertex AI Search \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control)
- Source ID: `site-docs-reference`
- Final score: 87
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You have configured SSO with Google Identity such that your users begin their sign in using Google Identity and then get directed to your third-party identity provider. (You might have already done this sync when setting up other Google Cloud resources or Google Workspace.) Third-party identity provider federation: If you use an external identity provider—for example, Microsoft Entra ID, Okta, or Ping, but don't want to sync your identities into Google Cloud Identity, then you must set up Workforce Identity Federation in Google Cloud before you can turn on data source access control for Vertex AI Search.
- When following the steps for data import in Create a search data store , make sure to do the following: Upload your metadata with ACL information from the same bucket as your unstructured data If using the API, set GcsSource.dataSchema to document Unstructured data from BigQuery When setting up a data store for unstructured data from BigQuery, you need to set the data store as access controlled and provide ACL metadata using a predefined schema for Vertex AI Search: When preparing your data, specify the following schema.
- Google recommends that you create a custom IAM role to grant to your user group, using the following permissions: discoveryengine.answers.get discoveryengine.servingConfigs.answer discoveryengine.servingConfigs.search discoveryengine.sessions.get discoveryengine.widgetConfigs.get For more information about permissions for Vertex AI Search resources using Identity and Access Management (IAM), see Access control with IAM .
- Connect to your identity provider To specify an identity provider for Vertex AI Search and turn on data source access control, follow these steps: In the Google Cloud console, go to the AI Applications page.

### "Create a custom recommendations data store \_|\_ Vertex AI Search \_|\_\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations)
- Source ID: `site-docs-root`
- Final score: 81
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin To import data from a source Google Cloud project that's different from the Google Cloud project with the Vertex AI Search data store, grant the following Identity and Access Management (IAM) roles to the service- PROJECT NUMBER @gcp-sa-discoveryengine.iam.gserviceaccount.com service account in the project that contains the Vertex AI Search data store: Storage Object Admin ( roles/storage.objectAdmin ) Storage Object Viewer ( roles/storage.objectViewer ) Caution: When you import data from Cloud Storage into a Vertex AI Search data store, Cloud Storage permissions aren't imported with the data.
- Before you begin To import data from a source Google Cloud project that's different from the Google Cloud project with the Vertex AI Search data store, grant the following Identity and Access Management (IAM) roles to the service- PROJECT NUMBER @gcp-sa-discoveryengine.iam.gserviceaccount.com service account in the project that contains the Vertex AI Search data store: BigQuery Job User ( roles/bigquery.jobUser ) BigQuery data Editor ( roles/bigquery.dataEditor ) Caution: When you import data from BigQuery into a Vertex AI Search data store, BigQuery permissions aren't imported with the data.
- The following procedure describes how to create a data connector that associates a Cloud Storage location with a Vertex AI Search data connector and how to specify a folder or file in that location for the data store that you want to create.
- The following procedure describes how to create a data connector that associates a BigQuery dataset with a Vertex AI Search data connector and how to specify a table on the dataset for each data store you want to create.

