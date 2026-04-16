---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:13.718Z"
product_name: "Gemini Enterprise"
product_slug: "gemini-enterprise"
feature_name: "Web app search bar model selector"
feature_slug: "web-app-search-bar-model-selector"
latest_feature_date: "2025-06-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/enterprise/docs/quickstart-gemini-enterprise"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/configure-assistant"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/configure-ui-results"
keywords:
  - "web"
  - "app"
  - "search"
  - "bar"
  - "model"
  - "selector"
  - "the"
  - "gemini"
---

# Web app search bar model selector

Product: Gemini Enterprise
Coverage: MEDIUM

## Step 02 Summary

The Gemini Enterprise web app search bar lets users choose a Gemini model or leave model selection on Auto.

## Extended Definition

The Gemini Enterprise web app search bar lets users choose a Gemini model or leave model selection on Auto.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/enterprise/docs/quickstart-gemini-enterprise](https://docs.cloud.google.com/gemini/enterprise/docs/quickstart-gemini-enterprise)
- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete](https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete)
- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-assistant](https://docs.cloud.google.com/gemini/enterprise/docs/configure-assistant)
- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-ui-results](https://docs.cloud.google.com/gemini/enterprise/docs/configure-ui-results)

## Supporting Pages

### Get started with Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/quickstart-gemini-enterprise](https://docs.cloud.google.com/gemini/enterprise/docs/quickstart-gemini-enterprise)
- Source ID: `site-docs-root`
- Final score: 207
- Re-rank relevance: N/A

Evidence snippets:
- View the search web app To view your Gemini Enterprise web app, do the following: In the navigation menu, click Integration .
- Configure the search web app In the navigation menu, click Configurations .
- Enter the following value in the gs:// field: cloud-samples-data/gen-app-builder/search/cymbal-bank-employee This Cloud Storage bucket contains PDF files for internal use by a fictional bank, Cymbal Bank.
- In the search bar, ask a question about the data that we imported; for example, ask How do I book business travel?

### Configure autocomplete \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete](https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete)
- Source ID: `site-docs-root`
- Final score: 205
- Re-rank relevance: N/A

Evidence snippets:
- Example command and result curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \$ curl -X PATCH \ -H "X-Goog-User-Project: my-project-123" \t-access-token)" \ https://discoveryengine.googleapis.com/v1alpha/projects/my-project-123/locations/global/collections/default collection/dataStores/my-data-store/completionConfig?updateMask=queryFrequencyThreshold \ -d '{ "name": "projects/my-project-123/locations/global/collections/default collection/dataStores/my-data-store/completionConfig", "queryFrequencyThreshold": 30 }' { "name": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/completionConfig", "matchingOrder": "exact-prefix", "maxSuggestions": 20, "minPrefixLength": 1, "queryModel": "automatic", "enableMode": "AUTOMATIC", "queryFrequencyThreshold": 30 } Update the CompletionConfig.numUniqueUsersThreshold field: curl -X PATCH \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -H "X-Goog-User-Project: PROJECT ID " \ https://discoveryengine.googleapis.com/v1alpha/projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /completionConfig?updateMask = numUniqueUsersThreshold \ -d '{ "name": "projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /completionConfig", "numUniqueUsersThreshold": UNIQUE USERS }' Replace UNIQUE USERS with an integer value that represents the minimum number of unique users who must enter a given search query before it can be returned as an autocomplete suggestion.
- Example command and result curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \ -H "X-Goog-User-Project: my-project-123" \ https://discoveryengine.googleapis.com/v1alpha/projects/my-project-123/locations/global/collections/default collection/dataStores/my-data-store/completionConfig?updateMask=numUniqueUsersThreshold \ -d '{ "name": "projects/my-project-123/locations/global/collections/default collection/dataStores/my-data-store/completionConfig", "numUniqueUsersThreshold": 6 }' { "name": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/completionConfig", "matchingOrder": "exact-prefix", "maxSuggestions": 20, "minPrefixLength": 1, "queryModel": "automatic", "enableMode": "AUTOMATIC", "numUniqueUsersThreshold": 6, "queryFrequencyThreshold": 30 } Update completable field annotations in schema To turn on autocomplete for fields in structured data schema, follow these steps: Console In the Google Cloud console, go to the Gemini Enterprise page.
- If you use the search history or user events model and there is a likelihood of your users typing PII into the search bar, then you can reduce PII leaks by adjusting the following parameters: queryFrequencyThreshold : Before a query can be returned as an autocomplete suggestion, it must have been entered this many times. numUniqueUsersThreshold : Before a query can be returned as an autocomplete suggestion, it must have been entered by this many unique users.
- Query suggestions model Data source Website data Structured data Unstructured data Document Imported by user ✔ (default) ✔ (default) Completable fields Imported by user ✔ Search history Automatically collected ✔ (default) ✔ ✔ User events Imported by user or automatically collected by widget ✔ ✔ ✔ : The document schema must contain title or description fields, or there must be fields that have been specified as title or description key properties.

### Configure the assistant \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-assistant](https://docs.cloud.google.com/gemini/enterprise/docs/configure-assistant)
- Source ID: `site-docs-root`
- Final score: 198
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example: Make the summary headings bold List the resources as an unordered list In the Enable web grounding section, make sure the toggle is switched on and then select one of the following options: Google search (not Data Residency compliant) to use the standard Google Search index for grounding.
- In the Enable location context section, use the toggle switch to enable or disable the feature: Switch the toggle on to allow the Gemini Enterprise app to use location data to improve the quality of responses.
- In the Default web search state section, use the toggle to define the default behavior for queries: Switch the toggle on to enable web search by default for new queries.
- Configure the web setting and location context In the Enable Model Armor section, follow the instructions to configure Model Armor and setup the Model Armor templates.

### "Configure results for the UI \_|\_ Gemini Enterprise \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-ui-results](https://docs.cloud.google.com/gemini/enterprise/docs/configure-ui-results)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Configure search results for unstructured or website data The UI for unstructured and website data offers the following search customizations: Search (single-turn) Search with an answer (single-turn search with summarization) Search with follow-ups (multi-turn search) To configure how the UI displays search results for unstructured data: In the Google Cloud console, go to the Gemini Enterprise page.
- Gemini Enterprise Click the name of the search app that you want to edit.
- To configure how the UI displays search results for structured data: In the Google Cloud console, go to the Gemini Enterprise page.
- This feature for website and unstructured data allows for follow-up questions that keep the context of the initial search query.

