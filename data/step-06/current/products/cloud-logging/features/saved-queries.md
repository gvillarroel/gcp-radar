---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.449Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Saved queries"
feature_slug: "saved-queries"
latest_feature_date: "2020-06-03"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/building-queries"
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListSavedQueriesResponse"
keywords:
  - "saved"
  - "queries"
  - "logs"
  - "viewer"
  - "lets"
  - "users"
  - "save"
  - "later"
---

# Saved queries

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Logs Viewer lets users save queries and later view and run them from a Saved queries tab.

## Extended Definition

Logs Viewer lets users save queries and later view and run them from a Saved queries tab.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListSavedQueriesResponse](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListSavedQueriesResponse)

## Supporting Pages

### "Build and save queries by using the Logging query language \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- Source ID: `site-docs-root`
- Final score: 252
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The following example illustrates a sample request body, which contains an instance of SavedQuery : { "parent": "projects/my-project/locations/global" "savedQueryId": "compute-query" { "displayName": "compute-admin-activity-query", "description": "Queries for Compute Engine Admin Activity logs.", "loggingQuery": { "filter": resource.type="gce instance" AND log id("cloudaudit.googleapis.com/activity"), }, "visibility": "PRIVATE" } } To share the query with other members of the Google Cloud project, specify a value of SHARED in the visibility field.
- View saved queries You can view both private queries and queries that are shared with other members in the Google Cloud project by clicking the menu book Query library button: Console In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- Do one of the following: To get the permissions that you need to write and run queries, to run and save private queries, and to run shared queries, ask your administrator to grant you the Logs Viewer ( roles/logging.viewer ) IAM role on your project.
- Run : To run the query, choose this option. more vert More options : Lets you view the query expression with the options to run the query or save it to your list of Saved queries.

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 242
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Logs Explorer contains the following sections, which are detailed on this page: Primary toolbar Query pane Fields pane Timeline Query results pane Primary toolbar in the Logs Explorer Using the primary toolbar, you can do the following: menu book Query library : View saved, recent, and suggested queries.
- Saved queries: View your saved queries and queries that other users of the Google Cloud project have shared with you.
- View recent, saved, and suggested queries To view queries that you recently run, queries that you saved for future use, and suggested queries, click the menu book Query library button.
- When you hide similar logs, no information is saved outside of the Logs Explorer session.

### ListSavedQueriesResponse \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListSavedQueriesResponse](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListSavedQueriesResponse)
- Source ID: `site-docs-reference`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It can be either 1) a saved query if a specific query is unreachable or 2) a location if a specific location is unreachabe. "projects/[PROJECT ID]/locations/[LOCATION ID]/savedQueries/[QUERY ID]" "projects/[PROJECT ID]/locations/[LOCATION ID]" For example: "projects/my-project/locations/global/savedQueries/12345678" "projects/my-project/locations/global" If there are unreachable resources, the response will first return pages that contain saved queries, and then return pages that contain the unreachable resources.
- JSON representation { "savedQueries" : [ { object ( SavedQuery ) } ] , "nextPageToken" : string , "unreachable" : [ string ] } Fields savedQueries[] object ( SavedQuery ) A list of saved queries. nextPageToken string If there might be more results than appear in this response, then nextPageToken is included.
- Home Documentation Observability Cloud Logging Reference Send feedback ListSavedQueriesResponse Stay organized with collections Save and categorize content based on your preferences.
- JSON representation The response from savedQueries.list.

