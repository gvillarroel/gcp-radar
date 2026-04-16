---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.316Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Saved and recent queries permission model"
feature_slug: "saved-and-recent-queries-permission-model"
latest_feature_date: "2024-07-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/building-queries"
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListRecentQueriesResponse"
keywords:
  - "saved"
  - "recent"
  - "queries"
  - "permission"
  - "model"
  - "have"
  - "updated"
  - "requirements"
---

# Saved and recent queries permission model

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Saved and recent queries have updated permission requirements and support a configurable storage location in default resource settings.

## Extended Definition

Saved and recent queries have updated permission requirements and support a configurable storage location in default resource settings.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListRecentQueriesResponse](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListRecentQueriesResponse)

## Supporting Pages

### "Build and save queries by using the Logging query language \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- Source ID: `site-docs-root`
- Final score: 189
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For recent queries, you have the following options: Stream : To run the query and stream the results, choose this option.
- View and run saved, recent, and suggested queries from the menu book Query library .
- Private : Queries that you have saved and are only visible to you.
- The following example illustrates a sample request body, which contains an instance of SavedQuery : { "parent": "projects/my-project/locations/global" "savedQueryId": "compute-query" { "displayName": "compute-admin-activity-query", "description": "Queries for Compute Engine Admin Activity logs.", "loggingQuery": { "filter": resource.type="gce instance" AND log id("cloudaudit.googleapis.com/activity"), }, "visibility": "PRIVATE" } } To share the query with other members of the Google Cloud project, specify a value of SHARED in the visibility field.

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 175
- Re-rank relevance: N/A

Evidence snippets:
- The Logs Explorer contains the following sections, which are detailed on this page: Primary toolbar Query pane Fields pane Timeline Query results pane Primary toolbar in the Logs Explorer Using the primary toolbar, you can do the following: menu book Query library : View saved, recent, and suggested queries.
- View recent, saved, and suggested queries To view queries that you recently run, queries that you saved for future use, and suggested queries, click the menu book Query library button.
- Saved queries: View your saved queries and queries that other users of the Google Cloud project have shared with you.
- In the Query library tab, you can view the following: Recent queries: View queries that you have recently run.

### ListRecentQueriesResponse \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListRecentQueriesResponse](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListRecentQueriesResponse)
- Source ID: `site-docs-reference`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Each resource can be either 1) a saved query if a specific query is unreachable or 2) a location if a specific location is unreachable. "projects/[PROJECT ID]/locations/[LOCATION ID]/recentQueries/[QUERY ID]" "projects/[PROJECT ID]/locations/[LOCATION ID]" For example: "projects/my-project/locations/global/recentQueries/12345678" "projects/my-project/locations/global" If there are unreachable resources, the response will first return pages that contain recent queries, and then return pages that contain the unreachable resources.
- JSON representation { "recentQueries" : [ { object ( RecentQuery ) } ] , "nextPageToken" : string , "unreachable" : [ string ] } Fields recentQueries[] object ( RecentQuery ) A list of recent queries. nextPageToken string If there might be more results than appear in this response, then nextPageToken is included.
- Home Documentation Observability Cloud Logging Reference Send feedback ListRecentQueriesResponse Stay organized with collections Save and categorize content based on your preferences.
- JSON representation The response from recentQueries.list.

