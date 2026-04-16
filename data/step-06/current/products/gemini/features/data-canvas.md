---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:09.668Z"
product_name: "Gemini"
product_slug: "gemini"
feature_name: "Data canvas"
feature_slug: "data-canvas"
latest_feature_date: "2024-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/set-up-data-store"
  - "https://docs.cloud.google.com/gemini/docs/overview"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/configure-advanced-autocomplete"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete"
keywords:
  - "canvas"
  - "provides"
  - "visual"
  - "interface"
  - "to"
  - "discover"
  - "transform"
  - "query"
---

# Data canvas

Product: Gemini
Coverage: MEDIUM

## Step 02 Summary

Data canvas provides a visual interface to discover, transform, query, and visualize data using natural language in Gemini in BigQuery.

## Extended Definition

Data canvas provides a visual interface to discover, transform, query, and visualize data using natural language in Gemini in BigQuery.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/set-up-data-store](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/set-up-data-store)
- [https://docs.cloud.google.com/gemini/docs/overview](https://docs.cloud.google.com/gemini/docs/overview)
- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-advanced-autocomplete](https://docs.cloud.google.com/gemini/enterprise/docs/configure-advanced-autocomplete)
- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete](https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete)

## Supporting Pages

### Set up a Box data store \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/set-up-data-store](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/box/set-up-data-store)
- Source ID: `site-iam-reference`
- Final score: 127
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- What's next To provide a user interface for querying your data, create an app and connect it to the Box federated data store .
- Data handling When using third-party federated search, the following data handling rules apply: Your query string is sent to the third-party search backend (Box API).
- Before you begin Before you set up your Box connection, ensure you perform the following: Grant the Discovery Engine Editor role ( roles/discoveryengine.editor ).
- Data handling and query execution This section describes how Gemini Enterprise manages your query and the privacy implications of using the federated data store.

### Gemini for Google Cloud overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/docs/overview](https://docs.cloud.google.com/gemini/docs/overview)
- Source ID: `site-api-reference`
- Final score: 122
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Discover, transform, query, and visualize data with data canvas.
- Export report visualizations to Google Slides.
- Create custom Looker visualizations.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]

### "Configure advanced autocomplete \_|\_ Gemini Enterprise \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-advanced-autocomplete](https://docs.cloud.google.com/gemini/enterprise/docs/configure-advanced-autocomplete)
- Source ID: `site-iam-reference`
- Final score: 115
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Example command and result curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/1234/locations/global/collections/default collection/engines/my app/completionConfig:completeQuery" \ - d { "query": "C", "suggestionTypes": ["CONTENT"] }' { "contentSuggestions": [{ "suggestion": "critical crash in payment module", "document": { "name": "projects/1234/locations/global/collections/default collection/dataStores/my data store/branches/0/documents/10000", "derivedStructData": { "title": "Critical Crash in Payment Module", "uri": "https://cymballabs.atlassian.net/browse/CPT-1", "source type": "jira", "entity type": "issue" } }, "dataStore": "projects/1234/locations/global/collections/default collection/dataStores/my data store" }] } Note: If you specify suggestionTypes as CONTENT , then any boostSpec , queryModel , or includeTailSuggestions parameters in your curl command are ignored.
- Example command and result curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/my-project-123/locations/global/collections/default collection/engines/my-app/completionConfig:completeQuery" \ -d '{ "query": "hol", "suggestionTypes": ["RECENT SEARCH"], "userPseudoId": "test user" }' { "recentSearchSuggestions": [ { "suggestion": "holiday readiness", "recentSearchTime": "2025-05-19T18:27:07.261698Z" }, { "suggestion": "holiday freeze", "recentSearchTime": "2025-05-19T18:25:45.744021Z" }, { "suggestion": "holiday", "recentSearchTime": "2025-05-19T18:20:08.916884Z" } ] } Note: If you specify suggestionTypes as RECENT SEARCH , then any boostSpec , queryModel , or includeTailSuggestions parameters in your curl command are ignored.
- Example command curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/my-project-123/locations/global/collections/default collection/engines/my-app/completionConfig:completeQuery" \ -d '{ "query": "hol", "boostSpec": { "conditionBoostSpecs": [{ "condition": "(langCode: ANY(\"es\", \"fr\"))", "boost": 0.75 }, { "condition": "(langCode: ANY(\"en\"))", "boost": -1 }] } }' In this example, the autocomplete suggestions for the query Co are boosted (placed higher in the autosuggestion list) if they are in French or Spanish and buried (placed lower in the autosuggestion list) if they are in English.
- Call the completionConfig.completeQuery method. curl -X POST -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /completionConfig:completeQuery" \ -d '{ "query":" QUERY STRING ", "boostSpec": { "conditionBoostSpecs": [{ "condition": "(langCode: ANY( LANG CODE ))", "boost": BOOST VALUE }] } }' Replace the following: PROJECT ID : the ID of your project.

### Configure autocomplete \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete](https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete)
- Source ID: `site-iam-reference`
- Final score: 115
- Re-rank relevance: N/A

Evidence snippets:
- Example command and result curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \$ curl -X PATCH \ -H "X-Goog-User-Project: my-project-123" \t-access-token)" \ https://discoveryengine.googleapis.com/v1alpha/projects/my-project-123/locations/global/collections/default collection/dataStores/my-data-store/completionConfig?updateMask=queryFrequencyThreshold \ -d '{ "name": "projects/my-project-123/locations/global/collections/default collection/dataStores/my-data-store/completionConfig", "queryFrequencyThreshold": 30 }' { "name": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/completionConfig", "matchingOrder": "exact-prefix", "maxSuggestions": 20, "minPrefixLength": 1, "queryModel": "automatic", "enableMode": "AUTOMATIC", "queryFrequencyThreshold": 30 } Update the CompletionConfig.numUniqueUsersThreshold field: curl -X PATCH \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -H "X-Goog-User-Project: PROJECT ID " \ https://discoveryengine.googleapis.com/v1alpha/projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /completionConfig?updateMask = numUniqueUsersThreshold \ -d '{ "name": "projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /completionConfig", "numUniqueUsersThreshold": UNIQUE USERS }' Replace UNIQUE USERS with an integer value that represents the minimum number of unique users who must enter a given search query before it can be returned as an autocomplete suggestion.
- DATASET ID : the dataset ID for the suggestion list that you want to import TABLE ID : the table ID for the suggestion list that you want to import Example command and result curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -H "X-Goog-User-Project: my-project-123" \ "https://discoveryengine.googleapis.com/v1/projects/my-project-123/locations/global/dataStores/my-data-store/completionSuggestions:import" \ -d '{ "bigquery source": {"project id": "my-project-123", "dataset id": "autocomplete", "table id": "import suggestion2"} }' { "name": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/operations/import-completion-suggestion-7659310803143180509", "metadata": { "@type": "type.googleapis.com/google.cloud.discoveryengine.v1.ImportCompletionSuggestionsMetadata" } } Optional: Make note of the name value returned, and follow the instructions in Get details about a long-running operation to see when the import operation is complete.
- Example command and result curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -H "X-Goog-User-Project: my-project-123" \ https://discoveryengine.googleapis.com/v1alpha/projects/my-project-123/locations/global/collections/default collection/dataStores/my-data-store/completionConfig?updateMask=numUniqueUsersThreshold \ -d '{ "name": "projects/my-project-123/locations/global/collections/default collection/dataStores/my-data-store/completionConfig", "numUniqueUsersThreshold": 6 }' { "name": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/completionConfig", "matchingOrder": "exact-prefix", "maxSuggestions": 20, "minPrefixLength": 1, "queryModel": "automatic", "enableMode": "AUTOMATIC", "numUniqueUsersThreshold": 6, "queryFrequencyThreshold": 30 } Update completable field annotations in schema To turn on autocomplete for fields in structured data schema, follow these steps: Console In the Google Cloud console, go to the Gemini Enterprise page.
- For more information, see Set up authentication for a local development environment . using Google.Cloud.DiscoveryEngine.V1 ; public sealed partial class GeneratedCompletionServiceClientSnippets { /// <summary>Snippet for CompleteQuery</summary> /// <remarks> /// This snippet has been automatically generated and should be regarded as a code template only. /// It will require modifications to work: /// - It may require correct/in-range values for request initialization. /// - It may require specifying regional endpoints when creating the service client as shown in /// https://cloud.google.com/dotnet/docs/reference/help/client-configuration#endpoint. /// </remarks> public void CompleteQueryRequestObject () { // Create client CompletionServiceClient completionServiceClient = CompletionServiceClient .

