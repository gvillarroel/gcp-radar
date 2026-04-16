---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:36.900Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Pricing model switching for Vertex AI Search apps and data stores"
feature_slug: "pricing-model-switching-for-vertex-ai-search-apps-and-data-stores"
latest_feature_date: "2026-01-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/answer"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es"
keywords:
  - "pricing"
  - "model"
  - "switching"
  - "vertex"
  - "ai"
  - "search"
  - "apps"
  - "stores"
---

# Pricing model switching for Vertex AI Search apps and data stores

Product: Vertex AI Search
Coverage: MEDIUM

## Step 02 Summary

Allows projects with configurable pricing enabled to switch Vertex AI Search apps and data stores between pay-as-you-go and monthly subscription pricing models.

## Extended Definition

Allows projects with configurable pricing enabled to switch Vertex AI Search apps and data stores between pay-as-you-go and monthly subscription pricing models.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)

## Supporting Pages

### Get answers and follow-ups \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/answer](https://docs.cloud.google.com/generative-ai-app-builder/docs/answer)
- Source ID: `site-docs-reference`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- The user was seeking help to stop the automatic replies. \n", "steps": [ { "state": "SUCCEEDED", "description": "Rephrase the query and search.", "actions": [ { "searchAction": { "query": "Hello!" }, "observation": { "searchResults": [ { "document": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/69e92e5b1de5b1e583fbe95f94dd4cbf", "uri": "https://support.google.com/voice/thread/152245405/google-voice-is-randomly-automatically-sending-hello-replies-to-incoming-texts?hl=en", "title": "Google voice is randomly/automatically sending \"Hello!\" replies to incoming texts", "snippetInfo": [ { "snippet": "There IS a new "Smart reply" feature on the Android or iOS client apps, but you'd have to a) receive a SMS/MMS, b) open it up, c) look at the three suggested ...", "snippetStatus": "SUCCESS" } ] }, { "document": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/44fb313bcc09877e7239f3810ddb132b", "uri": "https://support.google.com/mail/thread/58174131/gmail-sends-random-email-saying-hello-to-my-emails-without-me-touching-it?hl=en", "title": "Gmail sends random email saying \"Hello!!\" to my emails without me touching it", "snippetInfo": [ { "snippet": "Gmail sends random email saying "\u003cb\u003eHello\u003c/b\u003e!!" to my emails without me touching it.
- Here are some search results. ", "steps": [ { "state": "SUCCEEDED", "description": "Rephrase the query and search.", "actions": [ { "searchAction": { "query": "Hello" }, "observation": { "searchResults": [ { "document": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/69e92e5b1de5b1e583fbe95f94dd4cbf", "uri": "https://support.google.com/voice/thread/152245405/google-voice-is-randomly-automatically-sending-hello-replies-to-incoming-texts?hl=en", "title": "Google voice is randomly/automatically sending \"Hello!\" replies to incoming texts", "snippetInfo": [ { "snippet": "There IS a new "Smart reply" feature on the Android or iOS client apps, but you'd have to a) receive a SMS/MMS, b) open it up, c) look at the three suggested ...", "snippetStatus": "SUCCESS" } ] }, { "document": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/branches/0/documents/16d65e2af7fa854d1a00995525646dc3", "uri": "https://support.google.com/voice/thread/112990484/google-voice-sending-hello-in-response-to-text-messages?hl=en", "title": "Google Voice sending \"Hello,\" in response to text messages", "snippetInfo": [ { "snippet": "When I receive text messages, a reply is instantly sent out reading "\u003cb\u003eHello\u003c/b\u003e," and I cannot figure out how this is happening.
- Example command curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/my-project-123/locations/global/collections/default collection/engines/my-app/servingConfigs/default search:answer" \ -d '{ "query": { "text": "How much longer does it take to train a recommendations model than a search model"}, "queryUnderstandingSpec": { "queryRephraserSpec": { "maxRephraseSteps": 5 } } }' Python For more information, see the Vertex AI Search Python API reference documentation .
- The features of answer and follow-ups can be divided into three phases of the query, search and answer: Query phase features Search phase features Answer phase features When to use answer and when to use search Vertex AI Search has two methods that are used for querying apps.

### About apps and data stores \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-datastore-ingest)
- Source ID: `site-docs-root`
- Final score: 105
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Vertex AI Search Send feedback About apps and data stores Stay organized with collections Save and categorize content based on your preferences.
- Data stores and apps In Vertex AI Search, there are various kinds of data stores.
- This page describes Vertex AI Search apps and data stores.
- Blended search allows the following fields in search requests : boostSpec contentSearchSpec dataStoreSpecs facetSpecs filter languageCode offset oneBoxPageSize orderBy query pageSize pageToken relevanceScoreSpec relevanceThreshold session sessionSpec spellCorrectionSpec userInfo userPseudoId Blended search allows the following fields in DataStoreSpec : dataStore boostSpec : If there are boost specs specified for both SearchRequest and dataStoreSpecs , both boost specs are applied to search results filter : If there are filters specified for both SearchRequest and dataStoreSpecs , both filters are applied to search results Create, Read, Update, and Delete (CRUD) operations on serving configs are supported for blended apps.

### Create a search data store \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- Source ID: `site-docs-root`
- Final score: 96
- Re-rank relevance: N/A

Evidence snippets:
- Import data from Bigtable. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /branches/0/documents:import" \ -d '{ "bigtableSource ": { "projectId": " BIGTABLE PROJECT ID ", "instanceId": " INSTANCE ID ", "tableId": " TABLE ID ", "bigtableOptions": { "keyFieldName": " KEY FIELD NAME ", "families": { "key": " KEY ", "value": { "fieldName": " FIELD NAME ", "encoding": " ENCODING ", "type": " TYPE ", "columns": [ { "qualifier": " QUALIFIER ", "fieldName": " FIELD NAME ", "encoding": " COLUMN ENCODING ", "type": " COLUMN VALUES TYPE " } ] } } ... } }, "reconciliationMode": " RECONCILIATION MODE ", "autoGenerateIds": " AUTO GENERATE IDS ", "idField": " ID FIELD ", }' Replace the following: PROJECT ID : the ID of your Vertex AI Search project.
- This page describes how to create a data store and ingest data for custom search apps in Vertex AI Search. go to the section for the source you plan to use: Create a data store using website content Import from BigQuery Import from Cloud Storage Sync from Google Drive Sync from Gmail (Public preview) Sync from Google Sites (Public preview) Sync from Google Calendar (Public preview) Sync from Google Groups (Public preview) Import from Cloud SQL Import from Spanner (Public preview) Import from Firestore Import from Bigtable (Public Preview) Import from AlloyDB for PostgreSQL (Public Preview) Upload structured JSON data with the API Create a data store using Terraform To sync data from a third-party data source instead, see Connect a third-party data source .
- Import data from Spanner. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /branches/0/documents:import" \ -d '{ "cloudSpannerSource": { "projectId": " SPANNER PROJECT ID ", "instanceId": " INSTANCE ID ", "databaseId": " DATABASE ID ", "tableId": " TABLE ID ", "enableDataBoost": " DATA BOOST BOOLEAN " }, "reconciliationMode": " RECONCILIATION MODE ", "autoGenerateIds": " AUTO GENERATE IDS ", "idField": " ID FIELD ", }' Replace the following: PROJECT ID : the ID of your Vertex AI Search project.
- Import data from AlloyDB for PostgreSQL. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /branches/0/documents:import" \ -d '{ "alloydbSource": { "projectId": " ALLOYDB PROJECT ID ", "locationId": " LOCATION ID ", "clusterId": " CLUSTER ID ", "databaseId": " DATABASE ID ", "tableId": " TABLE ID ", }, "reconciliationMode": " RECONCILIATION MODE ", "autoGenerateIds": " AUTO GENERATE IDS ", "idField": " ID FIELD ", }' Replace the following: PROJECT ID : the ID of your Vertex AI Search project.

