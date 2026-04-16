---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.428Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Shared Queries"
feature_slug: "shared-queries"
latest_feature_date: "2021-04-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/building-queries"
  - "https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListRecentQueriesResponse"
  - "https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListSavedQueriesResponse"
keywords:
  - "shared"
  - "queries"
  - "logging"
  - "supports"
  - "saved"
  - "can"
  - "other"
  - "users"
---

# Shared Queries

Product: Cloud Logging
Coverage: LOW

## Step 02 Summary

Cloud Logging supports saved queries that can be shared with other users.

## Extended Definition

Cloud Logging supports saved queries that can be shared with other users.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListRecentQueriesResponse](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListRecentQueriesResponse)
- [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListSavedQueriesResponse](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListSavedQueriesResponse)

## Supporting Pages

### ListSavedQueriesResponse \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListSavedQueriesResponse](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListSavedQueriesResponse)
- Source ID: `site-docs-reference`
- Final score: 31
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Observability Cloud Logging Reference Send feedback ListSavedQueriesResponse Stay organized with collections Save and categorize content based on your preferences.
- It can be either 1) a saved query if a specific query is unreachable or 2) a location if a specific location is unreachabe. "projects/[PROJECT ID]/locations/[LOCATION ID]/savedQueries/[QUERY ID]" "projects/[PROJECT ID]/locations/[LOCATION ID]" For example: "projects/my-project/locations/global/savedQueries/12345678" "projects/my-project/locations/global" If there are unreachable resources, the response will first return pages that contain saved queries, and then return pages that contain the unreachable resources.
- JSON representation { "savedQueries" : [ { object ( SavedQuery ) } ] , "nextPageToken" : string , "unreachable" : [ string ] } Fields savedQueries[] object ( SavedQuery ) A list of saved queries. nextPageToken string If there might be more results than appear in this response, then nextPageToken is included.
- JSON representation The response from savedQueries.list.

### ListRecentQueriesResponse \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListRecentQueriesResponse](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListRecentQueriesResponse)
- Source ID: `site-docs-reference`
- Final score: 29
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Each resource can be either 1) a saved query if a specific query is unreachable or 2) a location if a specific location is unreachable. "projects/[PROJECT ID]/locations/[LOCATION ID]/recentQueries/[QUERY ID]" "projects/[PROJECT ID]/locations/[LOCATION ID]" For example: "projects/my-project/locations/global/recentQueries/12345678" "projects/my-project/locations/global" If there are unreachable resources, the response will first return pages that contain recent queries, and then return pages that contain the unreachable resources.
- Home Documentation Observability Cloud Logging Reference Send feedback ListRecentQueriesResponse Stay organized with collections Save and categorize content based on your preferences.
- Need to tell us more? [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-07-21 UTC."],[],[]]
- JSON representation { "recentQueries" : [ { object ( RecentQuery ) } ] , "nextPageToken" : string , "unreachable" : [ string ] } Fields recentQueries[] object ( RecentQuery ) A list of recent queries. nextPageToken string If there might be more results than appear in this response, then nextPageToken is included.

### "Build and save queries by using the Logging query language \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- The following example illustrates a sample request body, which contains an instance of SavedQuery : { "parent": "projects/my-project/locations/global" "savedQueryId": "compute-query" { "displayName": "compute-admin-activity-query", "description": "Queries for Compute Engine Admin Activity logs.", "loggingQuery": { "filter": resource.type="gce instance" AND log id("cloudaudit.googleapis.com/activity"), }, "visibility": "PRIVATE" } } To share the query with other members of the Google Cloud project, specify a value of SHARED in the visibility field.
- View saved queries You can view both private queries and queries that are shared with other members in the Google Cloud project by clicking the menu book Query library button: Console In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- API You can use the Logging API to view private and shared queries by using the savedQueries.list method.
- For example, the following request body lists all shared Logs Explorer queries with a wildcard location ID: { "parent": "name": projects/PROJECT ID/locations/- "visibility": "SHARED" "filter": "explorer" } Use suggested queries Logging generates suggested queries based on the context of your Google Cloud project, such as the Google Cloud products you're using.

