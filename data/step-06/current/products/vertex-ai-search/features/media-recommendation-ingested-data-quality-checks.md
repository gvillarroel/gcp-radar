---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:36.946Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Media recommendation ingested data quality checks"
feature_slug: "media-recommendation-ingested-data-quality-checks"
latest_feature_date: "2024-11-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/check-media-data-quality"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-media"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations"
keywords:
  - "media"
  - "recommendation"
  - "ingested"
  - "quality"
  - "checks"
  - "adds"
  - "ga"
  - "console"
---

# Media recommendation ingested data quality checks

Product: Vertex AI Search
Coverage: MEDIUM

## Step 02 Summary

Adds GA console-based quality checks for data ingested for media recommendations, providing suggestions to improve data without blocking ingestion.

## Extended Definition

Adds GA console-based quality checks for data ingested for media recommendations, providing suggestions to improve data without blocking ingestion.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/check-media-data-quality](https://docs.cloud.google.com/generative-ai-app-builder/docs/check-media-data-quality)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-media](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-media)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations)

## Supporting Pages

### "Check data quality for media recommendations \_|\_ Vertex AI Search \_|\_\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/check-media-data-quality](https://docs.cloud.google.com/generative-ai-app-builder/docs/check-media-data-quality)
- Source ID: `site-docs-reference`
- Final score: 199
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- About checking media data quality Because recent user events are so important for media recommendations, you must regularly check the quality of your ingested data and user events.
- Check data quality Console To check the quality of your media recommendations data, follow these steps: In the Google Cloud console, go to the AI Applications page.
- You can do this by reviewing the Optimization tab for your media recommendations app to determine what improvements you can make to your data in order to optimize for better quality recommendations.
- Home Documentation AI and ML Vertex AI Search Send feedback Check data quality for media recommendations Stay organized with collections Save and categorize content based on your preferences.

### Create media apps \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-media](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-app-media)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Create a media recommendations app To use the Google Cloud console to create a media recommendations app, follow these steps: Console In the Google Cloud console, go to the AI Applications page.
- For more information, see Check data quality for media recommendations .
- What's next For search apps: Configure search results for structured data For recommendations apps: Get media recommendations Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Both apps can use the same media data stores—although when you create a media recommendations app, you must choose a recommendations type and a business objective for your app.

### "Create a custom recommendations data store \_|\_ Vertex AI Search \_|\_\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations)
- Source ID: `site-docs-root`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- This must conform to the JSON schema that you provided in the previous step—for example: Update with a JSON document. curl -X PATCH \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1beta/projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /branches/0/documents/ DOCUMENT ID " \ -d '{ "jsonData": " JSON DOCUMENT STRING " }' Update with a JSON object. curl -X PATCH \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1beta/projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /branches/0/documents/ DOCUMENT ID " \ -d '{ "structData": JSON DOCUMENT OBJECT }' Next steps To attach your data store to an app, create an app and select your data store following the steps in Create a custom recommendations app .
- This flag cannot be specified if data store.starting schema is specified. / // const skipDefaultSchemaCreation = true // Imports the Discoveryengine library const { DataStoreServiceClient } = require ( ' @google-cloud/discoveryengine ' ). v1 ; // Instantiates a client const discoveryengineClient = new DataStoreServiceClient (); async function callCreateDataStore () { // Construct request const request = { parent , dataStore , dataStoreId , }; // Run request const [ operation ] = await discoveryengineClient . createDataStore ( request ); const [ response ] = await operation . promise (); console . log ( response ); } callCreateDataStore (); Import documents / This snippet has been automatically generated and should be regarded as a code template only.
- This flag cannot be specified if data store.starting schema is specified. / // const skipDefaultSchemaCreation = true // Imports the Discoveryengine library const { DataStoreServiceClient } = require ( ' @google-cloud/discoveryengine ' ). v1 ; // Instantiates a client const discoveryengineClient = new DataStoreServiceClient (); async function callCreateDataStore () { // Construct request const request = { parent , dataStore , dataStoreId , }; // Run request const [ operation ] = await discoveryengineClient . createDataStore ( request ); const [ response ] = await operation . promise (); console . log ( response ); } callCreateDataStore (); Import documents / This snippet has been automatically generated and should be regarded as a code template only.
- If set to true, the content part of the documents will be refreshed regardless of the update status of the referencing content. / // const forceRefreshContent = true // Imports the Discoveryengine library const { DocumentServiceClient } = require ( ' @google-cloud/discoveryengine ' ). v1 ; // Instantiates a client const discoveryengineClient = new DocumentServiceClient (); async function callImportDocuments () { // Construct request const request = { parent , }; // Run request const [ operation ] = await discoveryengineClient . importDocuments ( request ); const [ response ] = await operation . promise (); console . log ( response ); } callImportDocuments (); Python For more information, see the Vertex AI Search Python API reference documentation .

