---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:36.921Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Vertex AI Search Cloud Storage bucket streaming ingestion"
feature_slug: "vertex-ai-search-cloud-storage-bucket-streaming-ingestion"
latest_feature_date: "2025-04-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest"
keywords:
  - "vertex"
  - "ai"
  - "search"
  - "storage"
  - "bucket"
  - "streaming"
  - "ingestion"
  - "can"
---

# Vertex AI Search Cloud Storage bucket streaming ingestion

Product: Vertex AI Search
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Search can now stream unstructured data from a Cloud Storage bucket into a search data store at the bucket level for near real-time serving.

## Extended Definition

Vertex AI Search can now stream unstructured data from a Cloud Storage bucket into a search data store at the bucket level for near real-time serving.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest)

## Supporting Pages

### "Create a custom recommendations data store \_|\_ Vertex AI Search \_|\_\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations)
- Source ID: `site-docs-root`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- Before you begin To import data from a source Google Cloud project that's different from the Google Cloud project with the Vertex AI Search data store, grant the following Identity and Access Management (IAM) roles to the service- PROJECT NUMBER @gcp-sa-discoveryengine.iam.gserviceaccount.com service account in the project that contains the Vertex AI Search data store: Storage Object Admin ( roles/storage.objectAdmin ) Storage Object Viewer ( roles/storage.objectViewer ) Caution: When you import data from Cloud Storage into a Vertex AI Search data store, Cloud Storage permissions aren't imported with the data.
- The following procedure describes how to create a data connector that associates a Cloud Storage location with a Vertex AI Search data connector and how to specify a folder or file in that location for the data store that you want to create.
- After import, any user with sufficient Vertex AI Search permissions can view the data, even if they don't have permission to view the data in Cloud Storage.
- Select the Synchronization frequency , how often you want the Vertex AI Search connector to sync with the Cloud Storage location.

### Create a search data store \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- Source ID: `site-docs-root`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- This page describes how to create a data store and ingest data for custom search apps in Vertex AI Search. go to the section for the source you plan to use: Create a data store using website content Import from BigQuery Import from Cloud Storage Sync from Google Drive Sync from Gmail (Public preview) Sync from Google Sites (Public preview) Sync from Google Calendar (Public preview) Sync from Google Groups (Public preview) Import from Cloud SQL Import from Spanner (Public preview) Import from Firestore Import from Bigtable (Public Preview) Import from AlloyDB for PostgreSQL (Public Preview) Upload structured JSON data with the API Create a data store using Terraform To sync data from a third-party data source instead, see Connect a third-party data source .
- Before you begin To import data from a source Google Cloud project that's different from the Google Cloud project with the Vertex AI Search data store, grant the following Identity and Access Management (IAM) roles to the service- PROJECT NUMBER @gcp-sa-discoveryengine.iam.gserviceaccount.com service account in the project that contains the Vertex AI Search data store: Storage Object Admin ( roles/storage.objectAdmin ) Storage Object Viewer ( roles/storage.objectViewer ) Caution: When you import data from Cloud Storage into a Vertex AI Search data store, Cloud Storage permissions aren't imported with the data.
- The following procedure describes how to create a data connector that associates a Cloud Storage location with a Vertex AI Search data connector and how to specify a folder or file in that location for the data store that you want to create.
- After import, any user with sufficient Vertex AI Search permissions can view the data, even if they don't have permission to view the data in Cloud Storage.

### About apps and data stores \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest)
- Source ID: `site-docs-root`
- Final score: 84
- Re-rank relevance: N/A

Evidence snippets:
- Advanced website indexing : Provides advanced search capabilities over an index that's generated based on either of the following: The Vertex AI Search app owners can control which web pages are indexed by submitting sitemaps and maintaining them.
- The Vertex AI Search app owners can perform an initial indexing that mirrors the Google Search index and then expand the index's coverage by recrawling the websites whenever necessary, keeping it fresh.
- In addition to media documents, media data stores also contain the user event information that allows Vertex AI Search to customize recommendations and search for your users.
- Home Documentation AI and ML Vertex AI Search Send feedback About apps and data stores Stay organized with collections Save and categorize content based on your preferences.

