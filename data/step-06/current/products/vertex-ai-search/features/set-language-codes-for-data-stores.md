---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T19:30:14.894Z"
product_name: "Vertex AI Search"
product_slug: "vertex-ai-search"
feature_name: "Set language codes for data stores"
feature_slug: "set-language-codes-for-data-stores"
latest_feature_date: "2024-06-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-field-settings"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-autocomplete"
  - "https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-advanced-autocomplete"
keywords:
  - "set"
  - "language"
  - "codes"
  - "for"
  - "stores"
  - "introduces"
  - "configuring"
  - "on"
---

# Set language codes for data stores

Product: Vertex AI Search
Coverage: LOW

## Step 02 Summary

Introduces support for configuring language codes on Vertex AI Search data stores to improve extractive segments and extractive answers in search results.

## Extended Definition

Introduces support for configuring language codes on Vertex AI Search data stores to improve extractive segments and extractive answers in search results.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-field-settings](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-field-settings)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-autocomplete](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-autocomplete)
- [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-advanced-autocomplete](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-advanced-autocomplete)

## Supporting Pages

### Configure field settings \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-field-settings](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-field-settings)
- Source ID: `site-api-reference`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Configuring field settings is available only for apps with data stores containing either structured data or unstructured data with metadata.
- If you are configuring fields for a media search app and want detailed information about the fields in the schema, see About media documents and data stores .
- If the completable field is set for product name , brand , and category , when the user types Tech, the autocomplete suggestions can show: TechCo (from the brand field) TechCo UltraBook X1 (from the product name field) Technology GameMaster Pro (another product from the category field) Filterable Allows recommendations to use a field to filter recommended results, determining which search results your users see.
- Using structured data is highly recommended for these field settings: Setting Definition Purpose Use case example Indexable Setting fields to indexable allows for operations like filtering, boosting, and faceting on structured fields within a document.

### "Configure serving controls for search \_|\_ Vertex AI Search \_|\_ Google\

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-serving-controls)
- Source ID: `site-api-reference`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- For example, suppose that you create a promote control with the following configuration in a data store with basic website search: { "conditions": [ { "queryTerms": [ { "value": "artificial intelligence", "fullMatch": true } ] } ]" ... promoteAction": { "dataStore": "https://discoveryengine.googleapis.com/v1alpha/projects/123456/locations/us/collections/default collection/dataStores/basic-website-data-store" \ "searchLinkPromotion": { "title": "What is AI?", "uri": "https://cloud.google.com/learn/what-is-artificial-intelligence", "description": "Explain what is AI" "enabled": true } } } Then, you send the following search request: curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1alpha/projects/123456/locations/us/collections/default collection/engines/basic-website-app/servingConfigs/default search:search" \ -d '{ "query": "artificial intelligence" }' You should receive a JSON response similar to the following truncated response.
- Serving control types The following types of serving controls are available: Control Description Available for Boost control Changes the returned order of results Search apps with data stores that support a schema, such as data stores that contain structured data, websites with structured data (advanced website indexing), unstructured data with metadata, or media data Filter control Removes entries from returned results Search apps with data stores that support a schema, such as data stores that contain structured data, websites (advanced website indexing), unstructured data with metadata, or media data Synonyms control Associates queries with each other Search apps with website (advanced website indexing), structured, unstructured, or media data stores Redirect control Redirects to a specified URI All search apps Promote control Promotes a specified link for a query All search apps About conditions When creating a control, you can optionally define a condition that determines when the control is applied.
- Response You should receive a JSON response similar to the following: { "name": "projects/ PROJECT NUMBER /locations/global/collections/default collection/engines/ APP ID /controls/ PROMOTE CONTROL ID ", "displayName": " PROMOTE CONTROL NAME ", "solutionType": "SOLUTION TYPE SEARCH", "conditions": [ { "queryTerms": [ { "value": " VALUE ", "fullMatch": true } ] } ], "useCases": [ "SEARCH USE CASE SEARCH" ], "promoteAction": { "dataStore": "projects/ PROJECT NUMBER /locations/global/collections/default collection/dataStores/ DATA STORE ID ", "searchLinkPromotion": { "title": " URI TITLE ", "uri": " URI ", "description": " URI DESCRIPTION ", "enabled": ENABLED TRUE FALSE } } } For all search apps except for basic website search, attach the control to the app's serving config using the engines.servingConfigs.patch method.
- Create and attach promote serving controls A promote serving control lets you display a link as a promoted result and is available for the following types of search data stores: Website data stores with basic website search: For these data stores, you don't need to attach a promote control to the serving config of the app.

### Configure autocomplete \_|\_ Vertex AI Search \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-autocomplete](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-autocomplete)
- Source ID: `site-api-reference`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- DATASET ID : the dataset ID for the suggestion list that you want to import TABLE ID : the table ID for the suggestion list that you want to import Example command and result curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -H "X-Goog-User-Project: my-project-123" \ "https://discoveryengine.googleapis.com/v1/projects/my-project-123/locations/global/dataStores/my-data-store/completionSuggestions:import" \ -d '{ "bigquery source": {"project id": "my-project-123", "dataset id": "autocomplete", "table id": "import suggestion2"} }' { "name": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/operations/import-completion-suggestion-7659310803143180509", "metadata": { "@type": "type.googleapis.com/google.cloud.discoveryengine.v1.ImportCompletionSuggestionsMetadata" } } Optional: Make note of the name value returned, and follow the instructions in Get details about a long-running operation to see when the import operation is complete.
- Example command and result curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \$ curl -X PATCH \ -H "X-Goog-User-Project: my-project-123" \t-access-token)" \ https://discoveryengine.googleapis.com/v1alpha/projects/my-project-123/locations/global/collections/default collection/dataStores/my-data-store/completionConfig?updateMask=queryFrequencyThreshold \ -d '{ "name": "projects/my-project-123/locations/global/collections/default collection/dataStores/my-data-store/completionConfig", "queryFrequencyThreshold": 30 }' { "name": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/completionConfig", "matchingOrder": "exact-prefix", "maxSuggestions": 20, "minPrefixLength": 1, "queryModel": "automatic", "enableMode": "AUTOMATIC", "queryFrequencyThreshold": 30 } Update the CompletionConfig.numUniqueUsersThreshold field: curl -X PATCH \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -H "X-Goog-User-Project: PROJECT ID " \ https://discoveryengine.googleapis.com/v1alpha/projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /completionConfig?updateMask = numUniqueUsersThreshold \ -d '{ "name": "projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /completionConfig", "numUniqueUsersThreshold": UNIQUE USERS }' Replace UNIQUE USERS with an integer value that represents the minimum number of unique users who must enter a given search query before it can be returned as an autocomplete suggestion.
- DataStoreName ; public class SyncCompleteQuery { public static void main ( String [] args ) throws Exception { syncCompleteQuery (); } public static void syncCompleteQuery () throws Exception { // This snippet has been automatically generated and should be regarded as a code template only. // It will require modifications to work: // - It may require correct/in-range values for request initialization. // - It may require specifying regional endpoints when creating the service client as shown in // https://cloud.google.com/java/docs/setup#configure endpoints for the client library try ( CompletionServiceClient completionServiceClient = CompletionServiceClient . create ()) { CompleteQueryRequest request = CompleteQueryRequest . newBuilder () . setDataStore ( DataStoreName . ofProjectLocationDataStoreName ( "[PROJECT]" , "[LOCATION]" , "[DATA STORE]" ) . toString ()) . setQuery ( "query107944136" ) . setQueryModel ( "queryModel-184930495" ) . setUserPseudoId ( "userPseudoId-1155274652" ) . setIncludeTailSuggestions ( true ) . build (); CompleteQueryResponse response = completionServiceClient . completeQuery ( request ); } } } Node.js For more information, see the Vertex AI Search Node.js API reference documentation .
- Example command and result curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -H "X-Goog-User-Project: my-project-123" \ https://discoveryengine.googleapis.com/v1alpha/projects/my-project-123/locations/global/collections/default collection/dataStores/my-data-store/completionConfig?updateMask=numUniqueUsersThreshold \ -d '{ "name": "projects/my-project-123/locations/global/collections/default collection/dataStores/my-data-store/completionConfig", "numUniqueUsersThreshold": 6 }' { "name": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/completionConfig", "matchingOrder": "exact-prefix", "maxSuggestions": 20, "minPrefixLength": 1, "queryModel": "automatic", "enableMode": "AUTOMATIC", "numUniqueUsersThreshold": 6, "queryFrequencyThreshold": 30 } Update completable field annotations in schema To turn on autocomplete for fields in structured data schema, follow these steps: Console In the Google Cloud console, go to the AI Applications page.

### Configure advanced autocomplete \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-advanced-autocomplete](https://docs.cloud.google.com/generative-ai-app-builder/docs/configure-advanced-autocomplete)
- Source ID: `site-api-reference`
- Final score: 134
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If your data stores contain any personally identifiable information (PII) or if you use the search history or user events query suggestions model, review Protect against PII leaks and set up data loss prevention (DLP) safeguards that might be needed to prevent leaks of PII.
- Send an autocomplete request with a language boost You can boost or bury autocomplete suggestions according to language code, for example, make autocomplete suggestions in some languages more or less likely to appear.
- Before you begin Before you begin to use advanced autocomplete, do the following: Review and optionally edit the autocomplete settings for your app.
- Setting a negative number "buries" autocomplete suggestions in that language and a positive number boosts the language.

