---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:30:14.860Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Media recommendation ingested data quality checks"
feature_slug: "media-recommendation-ingested-data-quality-checks"
latest_feature_date: "2024-11-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/check-media-data-quality"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media-recommendations-types"
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
Coverage: LOW

## Step 02 Summary

Adds GA console-based quality checks for data ingested for media recommendations, providing suggestions to improve data without blocking ingestion.

## Extended Definition

Adds GA console-based quality checks for data ingested for media recommendations, providing suggestions to improve data without blocking ingestion.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/check-media-data-quality](https://docs.cloud.google.com/generative-ai-app-builder/docs/check-media-data-quality)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media-recommendations-types](https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media-recommendations-types)

## Supporting Pages

### "Check data quality for media recommendations \_|\_ Vertex AI Search \_|\_\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/check-media-data-quality](https://docs.cloud.google.com/generative-ai-app-builder/docs/check-media-data-quality)
- Source ID: `site-api-reference`
- Final score: 168
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation AI and ML Vertex AI Search Send feedback Check data quality for media recommendations Stay organized with collections Save and categorize content based on your preferences.
- About checking media data quality Because recent user events are so important for media recommendations, you must regularly check the quality of your ingested data and user events.
- Check data quality Console To check the quality of your media recommendations data, follow these steps: In the Google Cloud console, go to the AI Applications page.
- You can do this by reviewing the Optimization tab for your media recommendations app to determine what improvements you can make to your data in order to optimize for better quality recommendations.

### "Create a custom recommendations data store \_|\_ Vertex AI Search \_|\_\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- This flag cannot be specified if data store.starting schema is specified. / // const skipDefaultSchemaCreation = true // Imports the Discoveryengine library const { DataStoreServiceClient } = require ( ' @google-cloud/discoveryengine ' ). v1 ; // Instantiates a client const discoveryengineClient = new DataStoreServiceClient (); async function callCreateDataStore () { // Construct request const request = { parent , dataStore , dataStoreId , }; // Run request const [ operation ] = await discoveryengineClient . createDataStore ( request ); const [ response ] = await operation . promise (); console . log ( response ); } callCreateDataStore (); Import documents / This snippet has been automatically generated and should be regarded as a code template only.
- This flag cannot be specified if data store.starting schema is specified. / // const skipDefaultSchemaCreation = true // Imports the Discoveryengine library const { DataStoreServiceClient } = require ( ' @google-cloud/discoveryengine ' ). v1 ; // Instantiates a client const discoveryengineClient = new DataStoreServiceClient (); async function callCreateDataStore () { // Construct request const request = { parent , dataStore , dataStoreId , }; // Run request const [ operation ] = await discoveryengineClient . createDataStore ( request ); const [ response ] = await operation . promise (); console . log ( response ); } callCreateDataStore (); Import documents / This snippet has been automatically generated and should be regarded as a code template only.
- If set to true, the content part of the documents will be refreshed regardless of the update status of the referencing content. / // const forceRefreshContent = true // Imports the Discoveryengine library const { DocumentServiceClient } = require ( ' @google-cloud/discoveryengine ' ). v1 ; // Instantiates a client const discoveryengineClient = new DocumentServiceClient (); async function callImportDocuments () { // Construct request const request = { parent , }; // Run request const [ operation ] = await discoveryengineClient . importDocuments ( request ); const [ response ] = await operation . promise (); console . log ( response ); } callImportDocuments (); Python For more information, see the Vertex AI Search Python API reference documentation .
- If set to true, the content part of the documents will be refreshed regardless of the update status of the referencing content. / // const forceRefreshContent = true // Imports the Discoveryengine library const { DocumentServiceClient } = require ( ' @google-cloud/discoveryengine ' ). v1 ; // Instantiates a client const discoveryengineClient = new DocumentServiceClient (); async function callImportDocuments () { // Construct request const request = { parent , }; // Run request const [ operation ] = await discoveryengineClient . importDocuments ( request ); const [ response ] = await operation . promise (); console . log ( response ); } callImportDocuments (); Python For more information, see the Vertex AI Search Python API reference documentation .

### Create a search data store \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- Source ID: `site-docs-root`
- Final score: 118
- Re-rank relevance: N/A

Evidence snippets:
- This flag cannot be specified if data store.starting schema is specified. / // const skipDefaultSchemaCreation = true // Imports the Discoveryengine library const { DataStoreServiceClient } = require ( ' @google-cloud/discoveryengine ' ). v1 ; // Instantiates a client const discoveryengineClient = new DataStoreServiceClient (); async function callCreateDataStore () { // Construct request const request = { parent , dataStore , dataStoreId , }; // Run request const [ operation ] = await discoveryengineClient . createDataStore ( request ); const [ response ] = await operation . promise (); console . log ( response ); } callCreateDataStore (); Import documents / This snippet has been automatically generated and should be regarded as a code template only.
- This flag cannot be specified if data store.starting schema is specified. / // const skipDefaultSchemaCreation = true // Imports the Discoveryengine library const { DataStoreServiceClient } = require ( ' @google-cloud/discoveryengine ' ). v1 ; // Instantiates a client const discoveryengineClient = new DataStoreServiceClient (); async function callCreateDataStore () { // Construct request const request = { parent , dataStore , dataStoreId , }; // Run request const [ operation ] = await discoveryengineClient . createDataStore ( request ); const [ response ] = await operation . promise (); console . log ( response ); } callCreateDataStore (); Import documents / This snippet has been automatically generated and should be regarded as a code template only.
- If set to true, the content part of the documents will be refreshed regardless of the update status of the referencing content. / // const forceRefreshContent = true // Imports the Discoveryengine library const { DocumentServiceClient } = require ( ' @google-cloud/discoveryengine ' ). v1 ; // Instantiates a client const discoveryengineClient = new DocumentServiceClient (); async function callImportDocuments () { // Construct request const request = { parent , }; // Run request const [ operation ] = await discoveryengineClient . importDocuments ( request ); const [ response ] = await operation . promise (); console . log ( response ); } callImportDocuments (); Python For more information, see the Vertex AI Search Python API reference documentation .
- If set to true, the content part of the documents will be refreshed regardless of the update status of the referencing content. / // const forceRefreshContent = true // Imports the Discoveryengine library const { DocumentServiceClient } = require ( ' @google-cloud/discoveryengine ' ). v1 ; // Instantiates a client const discoveryengineClient = new DocumentServiceClient (); async function callImportDocuments () { // Construct request const request = { parent , }; // Run request const [ operation ] = await discoveryengineClient . importDocuments ( request ); const [ response ] = await operation . promise (); console . log ( response ); } callImportDocuments (); Python For more information, see the Vertex AI Search Python API reference documentation .

### "About media app recommendations types \_|\_ Vertex AI Search \_|\_ Google\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media-recommendations-types](https://docs.cloud.google.com/generative-ai-app-builder/docs/about-media-recommendations-types)
- Source ID: `site-api-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- User event requirements: view-item or media-play for click-through rate objective media-complete and either media-play or view-item for conversion rate objective and watch duration per session objective Recommended for You The Recommended for You recommendations type predicts the next document that a user is most likely to engage with based on the engagement history of that user.
- Recommendations types The following recommendations types are available with media recommendations apps: Others You May Like Recommended for You More Like This Most Popular Others You May Like The Others You May Like recommendations type recommends the next document that a user is most likely to engage with.
- Home Documentation AI and ML Vertex AI Search Send feedback About media app recommendations types Stay organized with collections Save and categorize content based on your preferences.
- More Like This The More Like This recommendations type recommends media that is similar to a context item and is likely to be engaged with next by a viewer of the context item.

