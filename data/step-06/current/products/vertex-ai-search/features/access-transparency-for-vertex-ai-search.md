---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:37.073Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Access Transparency for Vertex AI Search"
feature_slug: "access-transparency-for-vertex-ai-search"
latest_feature_date: "2023-12-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/access-transparency"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control"
keywords:
  - "access"
  - "transparency"
  - "vertex"
  - "ai"
  - "search"
  - "now"
  - "supports"
  - "feature"
---

# Access Transparency for Vertex AI Search

Product: Vertex AI Search
Coverage: MEDIUM

## Step 02 Summary

Vertex AI Search now supports Access Transparency and the feature is generally available; Vertex AI Search (Enterprise Search) added preview support for Access Transparency.

## Extended Definition

Vertex AI Search now supports Access Transparency and the feature is generally available; Vertex AI Search (Enterprise Search) added preview support for Access Transparency.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/access-transparency](https://docs.cloud.google.com/generative-ai-app-builder/docs/access-transparency)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control)

## Supporting Pages

### Enable Access Transparency in Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/access-transparency](https://docs.cloud.google.com/generative-ai-app-builder/docs/access-transparency)
- Source ID: `site-docs-reference`
- Final score: 147
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Limitations of Access Transparency in Vertex AI Search All access to your data in Vertex AI Search by Google personnel is logged, except for the following: Multi-region data stores: You must use multi-region data stores and apps (not global ones).
- Home Documentation AI and ML Vertex AI Search Send feedback Enable Access Transparency in Vertex AI Search Stay organized with collections Save and categorize content based on your preferences.
- This page provides an overview of the support that Access Transparency provides for Vertex AI Search.
- Search analytics: Access Transparency logs do not record when Google personnel view or take action on your analytics data.

### Create a search data store \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- Source ID: `site-docs-root`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- Import data from Bigtable. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /branches/0/documents:import" \ -d '{ "bigtableSource ": { "projectId": " BIGTABLE PROJECT ID ", "instanceId": " INSTANCE ID ", "tableId": " TABLE ID ", "bigtableOptions": { "keyFieldName": " KEY FIELD NAME ", "families": { "key": " KEY ", "value": { "fieldName": " FIELD NAME ", "encoding": " ENCODING ", "type": " TYPE ", "columns": [ { "qualifier": " QUALIFIER ", "fieldName": " FIELD NAME ", "encoding": " COLUMN ENCODING ", "type": " COLUMN VALUES TYPE " } ] } } ... } }, "reconciliationMode": " RECONCILIATION MODE ", "autoGenerateIds": " AUTO GENERATE IDS ", "idField": " ID FIELD ", }' Replace the following: PROJECT ID : the ID of your Vertex AI Search project.
- Import data from Spanner. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /branches/0/documents:import" \ -d '{ "cloudSpannerSource": { "projectId": " SPANNER PROJECT ID ", "instanceId": " INSTANCE ID ", "databaseId": " DATABASE ID ", "tableId": " TABLE ID ", "enableDataBoost": " DATA BOOST BOOLEAN " }, "reconciliationMode": " RECONCILIATION MODE ", "autoGenerateIds": " AUTO GENERATE IDS ", "idField": " ID FIELD ", }' Replace the following: PROJECT ID : the ID of your Vertex AI Search project.
- Import data from AlloyDB for PostgreSQL. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /branches/0/documents:import" \ -d '{ "alloydbSource": { "projectId": " ALLOYDB PROJECT ID ", "locationId": " LOCATION ID ", "clusterId": " CLUSTER ID ", "databaseId": " DATABASE ID ", "tableId": " TABLE ID ", }, "reconciliationMode": " RECONCILIATION MODE ", "autoGenerateIds": " AUTO GENERATE IDS ", "idField": " ID FIELD ", }' Replace the following: PROJECT ID : the ID of your Vertex AI Search project.
- Import data from Cloud SQL. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /branches/0/documents:import" \ -d '{ "cloudSqlSource": { "projectId": " SQL PROJECT ID ", "instanceId": " INSTANCE ID ", "databaseId": " DATABASE ID ", "tableId": " TABLE ID ", "gcsStagingDir": " STAGING DIRECTORY " }, "reconciliationMode": " RECONCILIATION MODE ", "autoGenerateIds": " AUTO GENERATE IDS ", "idField": " ID FIELD ", }' Replace the following: PROJECT ID : the ID of your Vertex AI Search project.

### "Set up data source access control \_|\_ Vertex AI Search \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control](https://docs.cloud.google.com/generative-ai-app-builder/docs/data-source-access-control)
- Source ID: `site-docs-reference`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- You have configured SSO with Google Identity such that your users begin their sign in using Google Identity and then get directed to your third-party identity provider. (You might have already done this sync when setting up other Google Cloud resources or Google Workspace.) Third-party identity provider federation: If you use an external identity provider—for example, Microsoft Entra ID, Okta, or Ping, but don't want to sync your identities into Google Cloud Identity, then you must set up Workforce Identity Federation in Google Cloud before you can turn on data source access control for Vertex AI Search.
- When following the steps for data import in Create a search data store , make sure to do the following: Upload your metadata with ACL information from the same bucket as your unstructured data If using the API, set GcsSource.dataSchema to document Unstructured data from BigQuery When setting up a data store for unstructured data from BigQuery, you need to set the data store as access controlled and provide ACL metadata using a predefined schema for Vertex AI Search: When preparing your data, specify the following schema.
- Google recommends that you create a custom IAM role to grant to your user group, using the following permissions: discoveryengine.answers.get discoveryengine.servingConfigs.answer discoveryengine.servingConfigs.search discoveryengine.sessions.get discoveryengine.widgetConfigs.get For more information about permissions for Vertex AI Search resources using Identity and Access Management (IAM), see Access control with IAM .
- Structured data from BigQuery When setting up a data store for structured data from BigQuery, you need to set the data store as access controlled and provide ACL metadata using a predefined schema for Vertex AI Search: When preparing your data, specify the following schema.

