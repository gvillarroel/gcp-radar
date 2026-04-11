---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:30:14.987Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Personalize"
feature_slug: "personalize"
latest_feature_date: "2023-06-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-generic-recommendations-app"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media-recommendations-types"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search"
keywords:
  - "personalize"
  - "is"
  - "gen"
  - "app"
  - "builder"
  - "recommendation"
  - "that"
  - "builds"
---

# Personalize

Product: Vertex AI Search
Coverage: LOW

## Step 02 Summary

Personalize is a Gen App Builder recommendation feature that builds AI-powered recommendation engines from your own data to suggest documents similar to the one a user is currently viewing.

## Extended Definition

Personalize is a Gen App Builder recommendation feature that builds AI-powered recommendation engines from your own data to suggest documents similar to the one a user is currently viewing.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-generic-recommendations-app](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-generic-recommendations-app)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media-recommendations-types](https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media-recommendations-types)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search](https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search)

## Supporting Pages

### "Create a custom recommendations data store \_|\_ Vertex AI Search \_|\_\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations)
- Source ID: `site-docs-root`
- Final score: 184
- Re-rank relevance: N/A

Evidence snippets:
- CreateDataStoreMetadata ( operation . metadata ) Handle the response print ( response ) print ( metadata ) return operation . operation . name Import documents from google.api core.client options import ClientOptions from google.cloud import discoveryengine TODO(developer): Uncomment these variables before running the sample. project id = "YOUR PROJECT ID" location = "YOUR LOCATION" # Values: "global" data store id = "YOUR DATA STORE ID" Examples: - Unstructured documents - gs://bucket/directory/file.pdf - gs://bucket/directory/ .pdf - Unstructured documents with JSONL Metadata - gs://bucket/directory/file.json - Unstructured documents with CSV Metadata - gs://bucket/directory/file.csv gcs uri = "YOUR GCS PATH" For more information, refer to: https://cloud.google.com/generative-ai-app-builder/docs/locations#specify a multi-region for your data store client options = ( ClientOptions ( api endpoint = f " { location } -discoveryengine.googleapis.com" ) if location != "global" else None ) Create a client client = discoveryengine .
- This must conform to the JSON schema that you provided in the previous step—for example: Update with a JSON document. curl -X PATCH \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1beta/projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /branches/0/documents/ DOCUMENT ID " \ -d '{ "jsonData": " JSON DOCUMENT STRING " }' Update with a JSON object. curl -X PATCH \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1beta/projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /branches/0/documents/ DOCUMENT ID " \ -d '{ "structData": JSON DOCUMENT OBJECT }' Next steps To attach your data store to an app, create an app and select your data store following the steps in Create a custom recommendations app .
- CreateDataStoreMetadata ( operation . metadata ) Handle the response print ( response ) print ( metadata ) return operation . operation . name Import documents from google.api core.client options import ClientOptions from google.cloud import discoveryengine TODO(developer): Uncomment these variables before running the sample. project id = "YOUR PROJECT ID" location = "YOUR LOCATION" # Values: "global" data store id = "YOUR DATA STORE ID" bigquery dataset = "YOUR BIGQUERY DATASET" bigquery table = "YOUR BIGQUERY TABLE" For more information, refer to: https://cloud.google.com/generative-ai-app-builder/docs/locations#specify a multi-region for your data store client options = ( ClientOptions ( api endpoint = f " { location } -discoveryengine.googleapis.com" ) if location != "global" else None ) Create a client client = discoveryengine .
- If you defined a schema, make sure the data conforms to that schema. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /branches/0/documents:import" \ -d '{ "bigquerySource": { "projectId": " PROJECT ID ", "datasetId":" DATASET ID ", "tableId": " TABLE ID ", "dataSchema": " DATA SCHEMA ", "aclEnabled": " BOOLEAN " }, "reconciliationMode": " RECONCILIATION MODE ", "autoGenerateIds": " AUTO GENERATE IDS ", "idField": " ID FIELD ", "errorConfig": { "gcsPrefix": " ERROR DIRECTORY " } }' Replace the following: PROJECT ID : the ID of your Google Cloud project.

### "Create a custom recommendations app \_|\_ Vertex AI Search \_|\_ Google\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-generic-recommendations-app](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-generic-recommendations-app)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- DATA STORE ID : the ID of an existing recommendations data store that you want to add to the recommendations app.
- APP DISPLAY NAME : the display name of the recommendations app that you want to create.
- Key Term: In Vertex AI Search, the term app can be used interchangeably with the term engine in the context of APIs. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -H "X-Goog-User-Project: PROJECT ID " \ "https://discoveryengine.googleapis.com/v1alpha/projects/ PROJECT ID /locations/global/collections/default collection/engines?engineId= APP ID " \ -d '{ "displayName": " APP DISPLAY NAME ", "dataStoreIds": [" DATA STORE ID "], "solutionType": ["SOLUTION TYPE RECOMMENDATION"], "similarDocumentsConfig": {} }' Replace the following: PROJECT ID : the ID of your Google Cloud project.
- APP ID : the ID of the recommendations app that you want to create.

### "About media app recommendations types \_|\_ Vertex AI Search \_|\_ Google\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media-recommendations-types](https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media-recommendations-types)
- Source ID: `site-api-reference`
- Final score: 162
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Supported pages for app deployment: Home page User event requirements: view-item or media-play for click-through rate objective media-complete for conversion rate objective Limitations: Most Popular doesn't support customizing serving configs or creating multiple serving configs Most Popular doesn't support filtering based on categories Optimization for business objectives The machine learning models that underlie media recommendation apps are created to optimize for a particular business objective, which determines how the model is built.
- Recommendations types The following recommendations types are available with media recommendations apps: Others You May Like Recommended for You More Like This Most Popular Others You May Like The Others You May Like recommendations type recommends the next document that a user is most likely to engage with.
- This page describes the recommendations types that are available when you create a media recommendations app , including the business objectives, context event types, and other customizations that are available with each recommendations type.
- Default optimization objective: click-through rate Default serving config: N/A Available customizations: Business objective Supported pages for app deployment: Detail page Home page (requires a context item) User event requirements: view-item or media-play for click-through rate objective ( media-play or view-item ) and media-complete for conversion rate objective and watch duration per session objective Most Popular The Most Popular recommendations type recommends media that has been most popular among all users in recent days.

### "Introduction to custom search \_|\_ Vertex AI Search \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search](https://docs.cloud.google.com/generative-ai-app-builder/docs/about-generic-search)
- Source ID: `site-api-reference`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- Vertex AI Search for custom apps is a powerful, Google-quality search and content discovery engine that you can integrate into your applications that contain website data and other structured or unstructured data.
- The search capability is beyond basic keyword matching and uses AI to deliver highly relevant results, provide personalized browse and search experiences, and generate AI answers grounded in your data.
- Generate personalized browse experience that requires user events User events : Record user interactions, such as clicks and views to improve search and personalization.
- Search app : At the heart of the custom search is a search app, which connects to one or more data stores that bring data from different sources.

