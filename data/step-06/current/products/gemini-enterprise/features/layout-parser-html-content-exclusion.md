---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:13.720Z"
product_name: "Gemini Enterprise"
product_slug: "gemini-enterprise"
feature_name: "Layout parser HTML content exclusion"
feature_slug: "layout-parser-html-content-exclusion"
latest_feature_date: "2025-06-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/configure-serving-controls"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/configure-advanced-autocomplete"
keywords:
  - "layout"
  - "parser"
  - "html"
  - "content"
  - "exclusion"
  - "the"
  - "can"
  - "skip"
---

# Layout parser HTML content exclusion

Product: Gemini Enterprise
Coverage: MEDIUM

## Step 02 Summary

The layout parser can skip selected HTML content by tag, ID, or CSS class to improve data quality.

## Extended Definition

The layout parser can skip selected HTML content by tag, ID, or CSS class to improve data quality.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat)
- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-serving-controls](https://docs.cloud.google.com/gemini/enterprise/docs/configure-serving-controls)
- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete](https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete)
- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-advanced-autocomplete](https://docs.cloud.google.com/gemini/enterprise/docs/configure-advanced-autocomplete)

## Supporting Pages

### Chat with the assistant \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat](https://docs.cloud.google.com/gemini/enterprise/docs/assistant-chat)
- Source ID: `site-docs-root-2`
- Final score: 106
- Re-rank relevance: N/A

Evidence snippets:
- File formats and size limitations The following table lists the file formats and size limitations for files that you can upload to the assistant: File type Description Images Maximum image size: 30 MB Supported file extensions: .png , .jpeg , .svg Documents Maximum document size: .pdf : 100 MB .xlsx : 50 MB The .xlsx limit applies to the size of the file after it's decompressed. .csv : 7 MB .docx : 3 MB .pptx : 100 MB .txt : 7 MB .md : 2 MB .json : 1 MB .js : 1 MB .html : 0.5 MB .css : 1 MB .java : 1 MB .py : 2 MB Supported file extensions: .pdf , .xlsx , .csv , .docx , .pptx , .txt , .md , .json , .js , .html , .css , .java , .py Video Maximum document size: 200 MB Supported file extensions: .mp4 Audio Maximum document size: 200 MB Supported file extensions: .mp3 Add context with mentions You can mention an agent, person, or uploaded file in your chat with the assistant by typing @ in the chat box.
- Chat with files in connectors Gemini Enterprise can analyze content and generate answers from the following connectors: Note: A Gemini Enterprise admin must enable the required actions for the Gemini Enterprise assistant to access the content, allowing you to chat with the files.
- In your app, you can chat about search results and uploaded content with the assistant.
- If you try to upload a file without this consent, you may encounter an error when signing in to Microsoft Entra ID: "Please ask an admin to grant permission to this app before you can use it." If you encounter this error, copy the URL from your browser's address bar and share it with your administrator, so that they can provide consent on behalf of your organization.

### Configure serving controls \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-serving-controls](https://docs.cloud.google.com/gemini/enterprise/docs/configure-serving-controls)
- Source ID: `site-docs-root`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- Run the following curl commands to create your controls. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -H "X-Goog-User-Project: PROJECT ID " \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /controls?controlId= CONTROL ID " \ -d '{ "displayName": " DISPLAY NAME ", "solutionType": "SOLUTION TYPE SEARCH", "useCases": [" USE CASE "], "conditions": { "queryTerms": [ { "value": " VALUE ", "fullMatch": FULL MATCH } ], "activeTimeRange": [ { "startTime": " START TIMESTAMP ", "endTime": " END TIMESTAMP " } ] }, "promoteAction": { "dataStore": " DATA STORE RESOURCE PATH ", "searchLinkPromotion": { "document": " DOCUMENT RESOURCE PATH ", "title": " TITLE ", "uri": " URI ", "description": " URI DESCRIPTION " } } }' Replace the following: PROJECT ID : the number or ID of your Google Cloud project.
- Serving control types The following types of serving controls are available: Control Description Available for Boost control Changes the returned order of results Search apps with data stores that support a schema, such as data stores that contain structured data or unstructured data with metadata Filter control Removes entries from returned results Search apps with data stores that support a schema, such as data stores that contain structured data or unstructured data with metadata Synonyms control Associates queries with each other Search apps with structured or unstructured data stores Redirect control Redirects to a specified URI All search apps Promote control Promotes a specified link for a query Search apps with structured or unstructured data stores About conditions When creating a control, you can optionally define a condition that determines when the control is applied.
- Run the following curl commands to create your controls. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -H "X-Goog-User-Project: PROJECT ID " \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /controls?controlId= CONTROL ID " \ -d '{ "displayName": " DISPLAY NAME ", "solutionType": "SOLUTION TYPE SEARCH", "useCases": [ " USE CASE " ], "conditions": { "queryTerms": [ { "value": " VALUE ", "fullMatch": FULL MATCH } ], "activeTimeRange": [ { "startTime": " START TIMESTAMP ", "endTime": " END TIMESTAMP " } ] }, "boostAction": { "boost": BOOST VALUE , "filter": " FILTER ", "dataStore": " DATA STORE RESOURCE PATH " } }' Replace the following: PROJECT ID : the number or ID of your Google Cloud project.
- Run the following curl commands to create your controls. curl -X POST \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -H "X-Goog-User-Project: PROJECT ID " \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /controls?controlId= CONTROL ID " \ -d '{ "displayName": " DISPLAY NAME ", "solutionType": "SOLUTION TYPE SEARCH", "useCases": [" USE CASE "], "conditions": { "queryTerms": [ { "value": " VALUE ", "fullMatch": FULL MATCH } ], "activeTimeRange": [ { "startTime": " START TIMESTAMP ", "endTime": " END TIMESTAMP " } ] }, "synonymsAction": { "synonyms": [" SYNONYMS 1 "," SYNONYMS 2 "] } }' Replace the following: PROJECT ID : the number or ID of your Google Cloud project.

### Configure autocomplete \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete](https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete)
- Source ID: `site-docs-root`
- Final score: 100
- Re-rank relevance: N/A

Evidence snippets:
- Example command and result curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \$ curl -X PATCH \ -H "X-Goog-User-Project: my-project-123" \t-access-token)" \ https://discoveryengine.googleapis.com/v1alpha/projects/my-project-123/locations/global/collections/default collection/dataStores/my-data-store/completionConfig?updateMask=queryFrequencyThreshold \ -d '{ "name": "projects/my-project-123/locations/global/collections/default collection/dataStores/my-data-store/completionConfig", "queryFrequencyThreshold": 30 }' { "name": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/completionConfig", "matchingOrder": "exact-prefix", "maxSuggestions": 20, "minPrefixLength": 1, "queryModel": "automatic", "enableMode": "AUTOMATIC", "queryFrequencyThreshold": 30 } Update the CompletionConfig.numUniqueUsersThreshold field: curl -X PATCH \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -H "X-Goog-User-Project: PROJECT ID " \ https://discoveryengine.googleapis.com/v1alpha/projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /completionConfig?updateMask = numUniqueUsersThreshold \ -d '{ "name": "projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /completionConfig", "numUniqueUsersThreshold": UNIQUE USERS }' Replace UNIQUE USERS with an integer value that represents the minimum number of unique users who must enter a given search query before it can be returned as an autocomplete suggestion.
- DATASET ID : the dataset ID for the suggestion list that you want to import TABLE ID : the table ID for the suggestion list that you want to import Example command and result curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -H "X-Goog-User-Project: my-project-123" \ "https://discoveryengine.googleapis.com/v1/projects/my-project-123/locations/global/dataStores/my-data-store/completionSuggestions:import" \ -d '{ "bigquery source": {"project id": "my-project-123", "dataset id": "autocomplete", "table id": "import suggestion2"} }' { "name": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/operations/import-completion-suggestion-7659310803143180509", "metadata": { "@type": "type.googleapis.com/google.cloud.discoveryengine.v1.ImportCompletionSuggestionsMetadata" } } Optional: Make note of the name value returned, and follow the instructions in Get details about a long-running operation to see when the import operation is complete.
- Example command and result curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -H "X-Goog-User-Project: my-project-123" \ https://discoveryengine.googleapis.com/v1alpha/projects/my-project-123/locations/global/collections/default collection/dataStores/my-data-store/completionConfig?updateMask=numUniqueUsersThreshold \ -d '{ "name": "projects/my-project-123/locations/global/collections/default collection/dataStores/my-data-store/completionConfig", "numUniqueUsersThreshold": 6 }' { "name": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/completionConfig", "matchingOrder": "exact-prefix", "maxSuggestions": 20, "minPrefixLength": 1, "queryModel": "automatic", "enableMode": "AUTOMATIC", "numUniqueUsersThreshold": 6, "queryFrequencyThreshold": 30 } Update completable field annotations in schema To turn on autocomplete for fields in structured data schema, follow these steps: Console In the Google Cloud console, go to the Gemini Enterprise page.
- Example command and result curl -X POST \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -H "X-Goog-User-Project: my-project-123" \ "https://discoveryengine.googleapis.com/v1/projects/my-project-123/locations/global/dataStores/my-data-store/completionSuggestions:purge" { "name": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/operations/purge-customer-imported suggestions-3197526711414652502", "metadata": { "@type": "type.googleapis.com/google.cloud.discoveryengine.v1.PurgeCompletionSuggestionsMetadata", "createTime": "2024-06-27T17:07:09.551726728Z", "updateTime": "2024-06-27T17:07:09.551726728Z" }, "done": true, "response": { "@type": "type.googleapis.com/google.cloud.discoveryengine.v1.PurgeCompletionSuggestionsResponse", "purgeSucceeded": true } } Advanced document data model Experimental This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .

### "Configure advanced autocomplete \_|\_ Gemini Enterprise \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-advanced-autocomplete](https://docs.cloud.google.com/gemini/enterprise/docs/configure-advanced-autocomplete)
- Source ID: `site-docs-root`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- Example command and result curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/1234/locations/global/collections/default collection/engines/my app/completionConfig:completeQuery" \ - d { "query": "C", "suggestionTypes": ["CONTENT"] }' { "contentSuggestions": [{ "suggestion": "critical crash in payment module", "document": { "name": "projects/1234/locations/global/collections/default collection/dataStores/my data store/branches/0/documents/10000", "derivedStructData": { "title": "Critical Crash in Payment Module", "uri": "https://cymballabs.atlassian.net/browse/CPT-1", "source type": "jira", "entity type": "issue" } }, "dataStore": "projects/1234/locations/global/collections/default collection/dataStores/my data store" }] } Note: If you specify suggestionTypes as CONTENT , then any boostSpec , queryModel , or includeTailSuggestions parameters in your curl command are ignored.
- Example command and result curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/my-project-123/locations/global/collections/default collection/engines/my-app/completionConfig:completeQuery" \ -d '{ "query": "hol", "suggestionTypes": ["RECENT SEARCH"], "userPseudoId": "test user" }' { "recentSearchSuggestions": [ { "suggestion": "holiday readiness", "recentSearchTime": "2025-05-19T18:27:07.261698Z" }, { "suggestion": "holiday freeze", "recentSearchTime": "2025-05-19T18:25:45.744021Z" }, { "suggestion": "holiday", "recentSearchTime": "2025-05-19T18:20:08.916884Z" } ] } Note: If you specify suggestionTypes as RECENT SEARCH , then any boostSpec , queryModel , or includeTailSuggestions parameters in your curl command are ignored.
- Example command curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/my-project-123/locations/global/collections/default collection/engines/my-app/completionConfig:completeQuery" \ -d '{ "query": "hol", "boostSpec": { "conditionBoostSpecs": [{ "condition": "(langCode: ANY(\"es\", \"fr\"))", "boost": 0.75 }, { "condition": "(langCode: ANY(\"en\"))", "boost": -1 }] } }' In this example, the autocomplete suggestions for the query Co are boosted (placed higher in the autosuggestion list) if they are in French or Spanish and buried (placed lower in the autosuggestion list) if they are in English.
- Call the completionConfig.completeQuery method. curl -X POST -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ "https://discoveryengine.googleapis.com/v1/projects/ PROJECT ID /locations/global/collections/default collection/engines/ APP ID /completionConfig:completeQuery" \ -d '{ "query":" QUERY STRING ", "boostSpec": { "conditionBoostSpecs": [{ "condition": "(langCode: ANY( LANG CODE ))", "boost": BOOST VALUE }] } }' Replace the following: PROJECT ID : the ID of your project.

