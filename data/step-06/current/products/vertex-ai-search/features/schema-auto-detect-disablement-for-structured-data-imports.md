---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T17:29:36.968Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Schema auto-detect disablement for structured data imports"
feature_slug: "schema-auto-detect-disablement-for-structured-data-imports"
latest_feature_date: "2024-08-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-autocomplete"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations"
keywords:
  - "schema"
  - "auto"
  - "detect"
  - "disablement"
  - "structured"
  - "imports"
  - "feature"
  - "allows"
---

# Schema auto-detect disablement for structured data imports

Product: Vertex AI Search
Coverage: MEDIUM

## Step 02 Summary

This feature allows users to disable dynamic schema auto-detection during structured data import so only predefined schema fields are imported.

## Extended Definition

This feature allows users to disable dynamic schema auto-detection during structured data import so only predefined schema fields are imported.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-autocomplete](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-autocomplete)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations)

## Supporting Pages

### Configure autocomplete \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-autocomplete](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-autocomplete)
- Source ID: `site-docs-reference`
- Final score: 183
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example command and result curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -H "X-Goog-User-Project: my-project-123" \ https://discoveryengine.googleapis.com/v1alpha/projects/my-project-123/locations/global/collections/default collection/dataStores/my-data-store/completionConfig?updateMask=numUniqueUsersThreshold \ -d '{ "name": "projects/my-project-123/locations/global/collections/default collection/dataStores/my-data-store/completionConfig", "numUniqueUsersThreshold": 6 }' { "name": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/completionConfig", "matchingOrder": "exact-prefix", "maxSuggestions": 20, "minPrefixLength": 1, "queryModel": "automatic", "enableMode": "AUTOMATIC", "numUniqueUsersThreshold": 6, "queryFrequencyThreshold": 30 } Update completable field annotations in schema To turn on autocomplete for fields in structured data schema, follow these steps: Console In the Google Cloud console, go to the AI Applications page.
- Query suggestions model Data source Website data Structured data Unstructured data Document Imported ✔ (default) ✔ (default) Completable fields Imported ✔ Search history Automatically collected ✔ (default) ✔ ✔ User events Imported or automatically collected by widget ✔ ✔ ✔ Web-crawled content Crawled from content from public websites that you specify ✔ † : The document schema must contain title or description fields, or there must be fields that have been specified as title or description key properties.
- See Update a schema for structured data . † : Web-crawled content can only be used as a data source if the experimental advanced document data model for autocomplete is enabled.
- Autocomplete features Vertex AI Search supports the following autocomplete features to show the most helpful predictions during search: Feature Description Example or more information Correct typos Correct word spellings that are typos.

### "Create a custom recommendations data store \_|\_ Vertex AI Search \_|\_\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-recommendations)
- Source ID: `site-docs-root`
- Final score: 179
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: If you are importing structured data and want to specify a schema instead of letting Vertex AI auto-detect the schema for you, do the steps in Provide your own schema as a JSON object and then begin the following procedure at step 2.
- This flag cannot be specified if data store.starting schema is specified. / // const skipDefaultSchemaCreation = true // Imports the Discoveryengine library const { DataStoreServiceClient } = require ( ' @google-cloud/discoveryengine ' ). v1 ; // Instantiates a client const discoveryengineClient = new DataStoreServiceClient (); async function callCreateDataStore () { // Construct request const request = { parent , dataStore , dataStoreId , }; // Run request const [ operation ] = await discoveryengineClient . createDataStore ( request ); const [ response ] = await operation . promise (); console . log ( response ); } callCreateDataStore (); Import documents / This snippet has been automatically generated and should be regarded as a code template only.
- This flag cannot be specified if data store.starting schema is specified. / // const skipDefaultSchemaCreation = true // Imports the Discoveryengine library const { DataStoreServiceClient } = require ( ' @google-cloud/discoveryengine ' ). v1 ; // Instantiates a client const discoveryengineClient = new DataStoreServiceClient (); async function callCreateDataStore () { // Construct request const request = { parent , dataStore , dataStoreId , }; // Run request const [ operation ] = await discoveryengineClient . createDataStore ( request ); const [ response ] = await operation . promise (); console . log ( response ); } callCreateDataStore (); Import documents / This snippet has been automatically generated and should be regarded as a code template only.
- For more information, see Provide or auto-detect a schema . curl -X PATCH \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1beta/projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /schemas/default schema" \ -d '{ "structSchema": JSON SCHEMA OBJECT }' Replace the following: PROJECT ID : the ID of your Google Cloud project.

### Create a search data store \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es](https://docs.cloud.google.com/generative-ai-app-builder/docs/create-data-store-es)
- Source ID: `site-docs-root`
- Final score: 179
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: If you are importing structured data and want to specify a schema instead of letting Vertex AI auto-detect the schema for you, do the steps in Provide your own schema as a JSON object and then begin the following procedure at step 2.
- This flag cannot be specified if data store.starting schema is specified. / // const skipDefaultSchemaCreation = true // Imports the Discoveryengine library const { DataStoreServiceClient } = require ( ' @google-cloud/discoveryengine ' ). v1 ; // Instantiates a client const discoveryengineClient = new DataStoreServiceClient (); async function callCreateDataStore () { // Construct request const request = { parent , dataStore , dataStoreId , }; // Run request const [ operation ] = await discoveryengineClient . createDataStore ( request ); const [ response ] = await operation . promise (); console . log ( response ); } callCreateDataStore (); Import documents / This snippet has been automatically generated and should be regarded as a code template only.
- This flag cannot be specified if data store.starting schema is specified. / // const skipDefaultSchemaCreation = true // Imports the Discoveryengine library const { DataStoreServiceClient } = require ( ' @google-cloud/discoveryengine ' ). v1 ; // Instantiates a client const discoveryengineClient = new DataStoreServiceClient (); async function callCreateDataStore () { // Construct request const request = { parent , dataStore , dataStoreId , }; // Run request const [ operation ] = await discoveryengineClient . createDataStore ( request ); const [ response ] = await operation . promise (); console . log ( response ); } callCreateDataStore (); Import documents / This snippet has been automatically generated and should be regarded as a code template only.
- Note: If you want to specify a schema instead of letting Vertex AI auto-detect the schema for you, do the steps in Provide your own schema as a JSON object and then begin the following procedure at step 2.

