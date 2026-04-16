---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:16:13.712Z"
product_name: "Gemini Enterprise"
product_slug: "gemini-enterprise"
feature_name: "Starred search"
feature_slug: "starred-search"
latest_feature_date: "2025-07-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/gemini/enterprise/docs/configure-serving-controls"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/configure-advanced-autocomplete"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete"
  - "https://docs.cloud.google.com/gemini/enterprise/docs/choose-product"
keywords:
  - "starred"
  - "search"
  - "users"
  - "can"
  - "find"
  - "items"
  - "quickly"
---

# Starred search

Product: Gemini Enterprise
Coverage: MEDIUM

## Step 02 Summary

Users can find starred items quickly.

## Extended Definition

Users can find starred items quickly.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-serving-controls](https://docs.cloud.google.com/gemini/enterprise/docs/configure-serving-controls)
- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-advanced-autocomplete](https://docs.cloud.google.com/gemini/enterprise/docs/configure-advanced-autocomplete)
- [https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete](https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete)
- [https://docs.cloud.google.com/gemini/enterprise/docs/choose-product](https://docs.cloud.google.com/gemini/enterprise/docs/choose-product)

## Supporting Pages

### Configure serving controls \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-serving-controls](https://docs.cloud.google.com/gemini/enterprise/docs/configure-serving-controls)
- Source ID: `site-docs-root`
- Final score: 93
- Re-rank relevance: N/A

Evidence snippets:
- Serving control types The following types of serving controls are available: Control Description Available for Boost control Changes the returned order of results Search apps with data stores that support a schema, such as data stores that contain structured data or unstructured data with metadata Filter control Removes entries from returned results Search apps with data stores that support a schema, such as data stores that contain structured data or unstructured data with metadata Synonyms control Associates queries with each other Search apps with structured or unstructured data stores Redirect control Redirects to a specified URI All search apps Promote control Promotes a specified link for a query Search apps with structured or unstructured data stores About conditions When creating a control, you can optionally define a condition that determines when the control is applied.
- For example, if the value of the query term is "support", you can set a redirect to your technical support page instead of returning (or failing to return) search results for "support".
- If SEARCH USE CASE BROWSE is specified, then Condition.queryTerms can't be used in the condition.
- If SEARCH USE CASE BROWSE is specified, then Condition.queryTerms can't be used in the condition.

### "Configure advanced autocomplete \_|\_ Gemini Enterprise \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-advanced-autocomplete](https://docs.cloud.google.com/gemini/enterprise/docs/configure-advanced-autocomplete)
- Source ID: `site-docs-root`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Different types of suggestions: With advanced autocomplete, instead of regular autocomplete query suggestions, you can specify that you want different types of suggestions: Rich suggestions: As autocomplete suggestions, users get information about documents where the titles prefix-match the letters that they type.
- Key features of advanced autocomplete The key features of advanced autocomplete that distinguish it from the basic autocomplete are as follows: Blended search: Advanced autocomplete can be used with apps that are connected to more than one data store.
- Vacation policy Covering a vacant position during absences Procedure To send an autocomplete request that returns the user's most recent queries, follow these steps: REST Find your app ID.
- This is significant if your app is a blended search app.

### Configure autocomplete \_|\_ Gemini Enterprise \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete](https://docs.cloud.google.com/gemini/enterprise/docs/configure-autocomplete)
- Source ID: `site-docs-root`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Example command and result curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json" \$ curl -X PATCH \ -H "X-Goog-User-Project: my-project-123" \t-access-token)" \ https://discoveryengine.googleapis.com/v1alpha/projects/my-project-123/locations/global/collections/default collection/dataStores/my-data-store/completionConfig?updateMask=queryFrequencyThreshold \ -d '{ "name": "projects/my-project-123/locations/global/collections/default collection/dataStores/my-data-store/completionConfig", "queryFrequencyThreshold": 30 }' { "name": "projects/123456/locations/global/collections/default collection/dataStores/my-data-store/completionConfig", "matchingOrder": "exact-prefix", "maxSuggestions": 20, "minPrefixLength": 1, "queryModel": "automatic", "enableMode": "AUTOMATIC", "queryFrequencyThreshold": 30 } Update the CompletionConfig.numUniqueUsersThreshold field: curl -X PATCH \ -H "Authorization: Bearer $( gcloud auth print-access-token ) " \ -H "Content-Type: application/json" \ -H "X-Goog-User-Project: PROJECT ID " \ https://discoveryengine.googleapis.com/v1alpha/projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /completionConfig?updateMask = numUniqueUsersThreshold \ -d '{ "name": "projects/ PROJECT ID /locations/global/collections/default collection/dataStores/ DATA STORE ID /completionConfig", "numUniqueUsersThreshold": UNIQUE USERS }' Replace UNIQUE USERS with an integer value that represents the minimum number of unique users who must enter a given search query before it can be returned as an autocomplete suggestion.
- If you use the search history or user events model and there is a likelihood of your users typing PII into the search bar, then you can reduce PII leaks by adjusting the following parameters: queryFrequencyThreshold : Before a query can be returned as an autocomplete suggestion, it must have been entered this many times. numUniqueUsersThreshold : Before a query can be returned as an autocomplete suggestion, it must have been entered by this many unique users.
- You can use this feature to reduce empty suggestion results and increase suggestion diversity, making this especially useful in cases where data sources (user event count, search history, and document topic coverage) is limited.
- If the search history or user events suggestion model is in use, then these account numbers, along with all the other terms that end users search for, are used to generate suggestions.

### NotebookLM Enterprise, Gemini Enterprise, or both? \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/gemini/enterprise/docs/choose-product](https://docs.cloud.google.com/gemini/enterprise/docs/choose-product)
- Source ID: `site-docs-root`
- Final score: 89
- Re-rank relevance: N/A

Evidence snippets:
- This integration allows Gemini Enterprise to act as a powerful engine for discovery, helping users find and curate content to make their notebooks more comprehensive and authoritative.
- When to use Gemini Enterprise Choose Gemini Enterprise when you want to do the following: Find answers when the search starting point across enterprise data is unknown.
- Users can then add these newly-discovered sources directly into a NotebookLM Enterprise notebook, further enriching their curated knowledge bases.
- Content synthesis : NotebookLM Enterprise can quickly synthesize insights, summarize, and draft new content from your uploaded documents.

