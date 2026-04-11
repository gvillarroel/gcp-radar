---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:30:14.884Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Vertex AI Search custom JSON schema for media data stores"
feature_slug: "vertex-ai-search-custom-json-schema-for-media-data-stores"
latest_feature_date: "2024-07-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search"
keywords:
  - "vertex"
  - "ai"
  - "search"
  - "custom"
  - "json"
  - "schema"
  - "for"
  - "media"
---

# Vertex AI Search custom JSON schema for media data stores

Product: Vertex AI Search
Coverage: LOW

## Step 02 Summary

Allows media data stores in Vertex AI Search to use customer-defined JSON schemas by mapping required key properties such as category, media_available_time, media_duration, title, and uri, in Public Preview.

## Extended Definition

Allows media data stores in Vertex AI Search to use customer-defined JSON schemas by mapping required key properties such as category, media_available_time, media_duration, title, and uri, in Public Preview.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media](https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search](https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search)

## Supporting Pages

### "Introduction to media search and recommendations \_|\_ Vertex AI Search\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media](https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media)
- Source ID: `site-api-reference`
- Final score: 238
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Media apps require media metadata to conform to a predefined schema or to use a custom schema that contains a minimum set of key properties.
- The page also provides links to more information, tutorials and checklists, to get you started with Vertex AI Search for media.
- Key features of media apps There are many similarities between media apps and custom apps in Vertex AI Search.
- Vertex AI Search includes two capabilities specific for the media industry: Media recommendations.

### Create a search data store \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: N/A

Evidence snippets:
- You can define the ID of each document yourself, while wrapping all the data in the jsonData string. custom : Any BigQuery table schema is accepted, and Vertex AI Search automatically generates the IDs for each document that is imported.
- This page describes how to create a data store and ingest data for custom search apps in Vertex AI Search. go to the section for the source you plan to use: Create a data store using website content Import from BigQuery Import from Cloud Storage Sync from Google Drive Sync from Gmail (Public preview) Sync from Google Sites (Public preview) Sync from Google Calendar (Public preview) Sync from Google Groups (Public preview) Import from Cloud SQL Import from Spanner (Public preview) Import from Firestore Import from Bigtable (Public Preview) Import from AlloyDB for PostgreSQL (Public Preview) Upload structured JSON data with the API Create a data store using Terraform To sync data from a third-party data source instead, see Connect a third-party data source .
- Import data from AlloyDB for PostgreSQL. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /branches/0/documents:import" \ -d '{ "alloydbSource": { "projectId": " ALLOYDB PROJECT ID ", "locationId": " LOCATION ID ", "clusterId": " CLUSTER ID ", "databaseId": " DATABASE ID ", "tableId": " TABLE ID ", }, "reconciliationMode": " RECONCILIATION MODE ", "autoGenerateIds": " AUTO GENERATE IDS ", "idField": " ID FIELD ", }' Replace the following: PROJECT ID : the ID of your Vertex AI Search project.
- Note: If you are importing structured data and want to specify a schema instead of letting Vertex AI auto-detect the schema for you, do the steps in Provide your own schema as a JSON object and then begin the following procedure at step 2.

### "Configure serving controls for search \_|\_ Vertex AI Search \_|\_ Google\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls)
- Source ID: `site-api-reference`
- Final score: 226
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Serving control types The following types of serving controls are available: Control Description Available for Boost control Changes the returned order of results Search apps with data stores that support a schema, such as data stores that contain structured data, websites with structured data (advanced website indexing), unstructured data with metadata, or media data Filter control Removes entries from returned results Search apps with data stores that support a schema, such as data stores that contain structured data, websites (advanced website indexing), unstructured data with metadata, or media data Synonyms control Associates queries with each other Search apps with website (advanced website indexing), structured, unstructured, or media data stores Redirect control Redirects to a specified URI All search apps Promote control Promotes a specified link for a query All search apps About conditions When creating a control, you can optionally define a condition that determines when the control is applied.
- For example, suppose that you create a promote control with the following configuration in a data store with basic website search: { "conditions": [ { "queryTerms": [ { "value": "artificial intelligence", "fullMatch": true } ] } ]" ... promoteAction": { "dataStore": "https://discoveryengine.googleapis.com/v1alpha/projects/123456/locations/us/collections/default collection/dataStores/basic-website-data-store" \ "searchLinkPromotion": { "title": "What is AI?", "uri": "https://cloud.google.com/learn/what-is-artificial-intelligence", "description": "Explain what is AI" "enabled": true } } } Then, you send the following search request: curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1alpha/projects/123456/locations/us/collections/default collection/engines/basic-website-app/servingConfigs/default search:search" \ -d '{ "query": "artificial intelligence" }' You should receive a JSON response similar to the following truncated response.
- Home Documentation AI and ML Vertex AI Search Send feedback Configure serving controls for search Stay organized with collections Save and categorize content based on your preferences.
- Response You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/global/collections/default collection/engines/ APP ID /controls/ PROMOTE CONTROL ID ", "displayName": " PROMOTE CONTROL NAME ", "solutionType": "SOLUTION TYPE SEARCH", "conditions": [ { "queryTerms": [ { "value": " VALUE ", "fullMatch": true } ] } ], "useCases": [ "SEARCH USE CASE SEARCH" ], "promoteAction": { "dataStore": "projects/ PROJECT NUMBER /locations/global/collections/default collection/dataStores/ DATA STORE ID ", "searchLinkPromotion": { "title": " URI TITLE ", "uri": " URI ", "description": " URI DESCRIPTION ", "enabled": ENABLED TRUE FALSE } } } For all search apps except for basic website search, attach the control to the app's serving config using the engines.servingConfigs.patch method.

### "Introduction to custom search \_|\_ Vertex AI Search \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search](https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search)
- Source ID: `site-api-reference`
- Final score: 226
- Re-rank relevance: N/A

Evidence snippets:
- Different components of custom search The components of Vertex AI Search for custom search can be explained as follows: Data store : Your content from different data sources is stored in a Vertex AI Search data store.
- Vertex AI Search for custom apps is a powerful, Google-quality search and content discovery engine that you can integrate into your applications that contain website data and other structured or unstructured data.
- Key features and configurations in custom search To elaborate, here are the available configurations: Data preparation : Schema for structured data : Define the structure of your data with field names and types.
- The page also provides links to the available features, tutorials, and checklists, to get you started with Vertex AI Search for custom apps.

