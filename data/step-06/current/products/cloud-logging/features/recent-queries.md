---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.445Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Recent queries"
feature_slug: "recent-queries"
latest_feature_date: "2020-09-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListRecentQueriesResponse"
  - "https://docs.cloud.google.com/logging/docs/view/building-queries"
keywords:
  - "recent"
  - "queries"
  - "logging"
  - "provides"
  - "tab"
  - "viewing"
  - "history"
  - "previously"
---

# Recent queries

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Cloud Logging provides a Recent queries tab for viewing the history of previously run queries.

## Extended Definition

Cloud Logging provides a Recent queries tab for viewing the history of previously run queries.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListRecentQueriesResponse](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListRecentQueriesResponse)
- [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)

## Supporting Pages

### ListRecentQueriesResponse \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListRecentQueriesResponse](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListRecentQueriesResponse)
- Source ID: `site-docs-reference`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Observability Cloud Logging Reference Send feedback ListRecentQueriesResponse Stay organized with collections Save and categorize content based on your preferences.
- Each resource can be either 1) a saved query if a specific query is unreachable or 2) a location if a specific location is unreachable. "projects/[PROJECT ID]/locations/[LOCATION ID]/recentQueries/[QUERY ID]" "projects/[PROJECT ID]/locations/[LOCATION ID]" For example: "projects/my-project/locations/global/recentQueries/12345678" "projects/my-project/locations/global" If there are unreachable resources, the response will first return pages that contain recent queries, and then return pages that contain the unreachable resources.
- JSON representation { "recentQueries" : [ { object ( RecentQuery ) } ] , "nextPageToken" : string , "unreachable" : [ string ] } Fields recentQueries[] object ( RecentQuery ) A list of recent queries. nextPageToken string If there might be more results than appear in this response, then nextPageToken is included.
- JSON representation The response from recentQueries.list.

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- The Logs Explorer contains the following sections, which are detailed on this page: Primary toolbar Query pane Fields pane Timeline Query results pane Primary toolbar in the Logs Explorer Using the primary toolbar, you can do the following: menu book Query library : View saved, recent, and suggested queries.
- Scroll or zoom to time In addition to the time controls previously listed, the timeline provides the Scroll to time and Zoom to time features to give you more in-depth control of the timeline and the data that you see in other panes in the Logs Explorer.
- Query returns an error If you issue a query over a resource without specifying a bucket, then Cloud Logging uses the history of the sinks in the Google Cloud project to determine where entries might have been written for that resource.
- View recent, saved, and suggested queries To view queries that you recently run, queries that you saved for future use, and suggested queries, click the menu book Query library button.

### "Build and save queries by using the Logging query language \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- Source ID: `site-docs-root`
- Final score: 142
- Re-rank relevance: N/A

Evidence snippets:
- If you want to save or modify shared queries, then ensure that you have been granted the Logging Admin role ( roles/logging.admin ), which provides full access to Cloud Logging.
- Select queries from the library Logging provides a library of queries based on common use cases and Google Cloud products.
- The following example illustrates a sample request body, which contains an instance of SavedQuery : { "parent": "projects/my-project/locations/global" "savedQueryId": "compute-query" { "displayName": "compute-admin-activity-query", "description": "Queries for Compute Engine Admin Activity logs.", "loggingQuery": { "filter": resource.type="gce instance" AND log id("cloudaudit.googleapis.com/activity"), }, "visibility": "PRIVATE" } } To share the query with other members of the Google Cloud project, specify a value of SHARED in the visibility field.
- View saved queries You can view both private queries and queries that are shared with other members in the Google Cloud project by clicking the menu book Query library button: Console In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .

