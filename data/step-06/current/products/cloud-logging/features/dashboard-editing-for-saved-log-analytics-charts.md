---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.308Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Dashboard editing for saved Log Analytics charts"
feature_slug: "dashboard-editing-for-saved-log-analytics-charts"
latest_feature_date: "2024-12-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListSavedQueriesResponse"
  - "https://docs.cloud.google.com/logging/docs/logging-gce-quickstart"
keywords:
  - "dashboard"
  - "editing"
  - "saved"
  - "log"
  - "analytics"
  - "charts"
  - "can"
  - "edited"
---

# Dashboard editing for saved Log Analytics charts

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Saved Log Analytics charts can be edited directly from the Dashboards page; Saved Log Analytics charts can be edited directly from the Dashboards page.

## Extended Definition

Saved Log Analytics charts can be edited directly from the Dashboards page; Saved Log Analytics charts can be edited directly from the Dashboards page.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListSavedQueriesResponse](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListSavedQueriesResponse)
- [https://docs.cloud.google.com/logging/docs/logging-gce-quickstart](https://docs.cloud.google.com/logging/docs/logging-gce-quickstart)

## Supporting Pages

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 98
- Re-rank relevance: N/A

Evidence snippets:
- For information about creating charts from your query results and saving charts to a custom dashboard, see Chart query results with Observability Analytics .
- The Logs Explorer contains the following sections, which are detailed on this page: Primary toolbar Query pane Fields pane Timeline Query results pane Primary toolbar in the Logs Explorer Using the primary toolbar, you can do the following: menu book Query library : View saved, recent, and suggested queries.
- To perform aggregate operations on your log entries, like counting the number of log entries that contain a specific pattern, upgrade the log bucket to use Observability Analytics, and then run queries from the Observability Analytics page of the Google Cloud console.
- Analyze results by using Observability Analytics You can aggregate, analyze, and chart your log data by using SQL queries in the Observability Analytics page when your project contains log buckets that are upgraded to use Observability Analytics.

### "Quickstart: Collect logs from Apache with the Ops Agent \_|\_ Cloud Logging\

- URL: [https://docs.cloud.google.com/logging/docs/logging-gce-quickstart](https://docs.cloud.google.com/logging/docs/logging-gce-quickstart)
- Source ID: `site-docs-root`
- Final score: 74
- Re-rank relevance: N/A

### ListSavedQueriesResponse \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListSavedQueriesResponse](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListSavedQueriesResponse)
- Source ID: `site-docs-reference`
- Final score: 73
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It can be either 1) a saved query if a specific query is unreachable or 2) a location if a specific location is unreachabe. "projects/[PROJECT ID]/locations/[LOCATION ID]/savedQueries/[QUERY ID]" "projects/[PROJECT ID]/locations/[LOCATION ID]" For example: "projects/my-project/locations/global/savedQueries/12345678" "projects/my-project/locations/global" If there are unreachable resources, the response will first return pages that contain saved queries, and then return pages that contain the unreachable resources.
- JSON representation { "savedQueries" : [ { object ( SavedQuery ) } ] , "nextPageToken" : string , "unreachable" : [ string ] } Fields savedQueries[] object ( SavedQuery ) A list of saved queries. nextPageToken string If there might be more results than appear in this response, then nextPageToken is included.
- Home Documentation Observability Cloud Logging Reference Send feedback ListSavedQueriesResponse Stay organized with collections Save and categorize content based on your preferences.
- JSON representation The response from savedQueries.list.

