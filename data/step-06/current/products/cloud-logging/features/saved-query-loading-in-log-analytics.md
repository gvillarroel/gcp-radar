---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.338Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Saved query loading in Log Analytics"
feature_slug: "saved-query-loading-in-log-analytics"
latest_feature_date: "2023-11-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery"
  - "https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListSavedQueriesResponse"
  - "https://docs.cloud.google.com/logging/docs/view/building-queries"
keywords:
  - "saved"
  - "query"
  - "loading"
  - "log"
  - "analytics"
  - "can"
  - "load"
  - "queries"
---

# Saved query loading in Log Analytics

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Log Analytics can load saved queries into the Query pane for editing before execution.

## Extended Definition

Log Analytics can load saved queries into the Query pane for editing before execution.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery)
- [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListSavedQueriesResponse](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListSavedQueriesResponse)
- [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)

## Supporting Pages

### OpsAnalyticsQuery \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery)
- Source ID: `site-docs-reference`
- Final score: 157
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation QueryBuilderConfig JSON representation FilterPredicate JSON representation OperatorType FilterExpression JSON representation FieldSource JSON representation ProjectedField JSON representation FieldOperation FunctionApplication JSON representation Comparator SortOrderParameter JSON representation SortOrder Describes a query that can be run in Log Analytics.
- Examples: jsonPayload.labels.message jsonPayload.request id httpRequest.status jsonPayload.\ my-custom-field.value jsonPayload.my key with spaces.data` aliasRef string The alias name for a field that has already been aliased within a different ProjectedField type elsewhere in the query model.
- Home Documentation Observability Cloud Logging Reference Send feedback OpsAnalyticsQuery Stay organized with collections Save and categorize content based on your preferences.
- A query builder configuration used in Log Analytics.

### ListSavedQueriesResponse \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListSavedQueriesResponse](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListSavedQueriesResponse)
- Source ID: `site-docs-reference`
- Final score: 151
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It can be either 1) a saved query if a specific query is unreachable or 2) a location if a specific location is unreachabe. "projects/[PROJECT ID]/locations/[LOCATION ID]/savedQueries/[QUERY ID]" "projects/[PROJECT ID]/locations/[LOCATION ID]" For example: "projects/my-project/locations/global/savedQueries/12345678" "projects/my-project/locations/global" If there are unreachable resources, the response will first return pages that contain saved queries, and then return pages that contain the unreachable resources.
- JSON representation { "savedQueries" : [ { object ( SavedQuery ) } ] , "nextPageToken" : string , "unreachable" : [ string ] } Fields savedQueries[] object ( SavedQuery ) A list of saved queries. nextPageToken string If there might be more results than appear in this response, then nextPageToken is included.
- Home Documentation Observability Cloud Logging Reference Send feedback ListSavedQueriesResponse Stay organized with collections Save and categorize content based on your preferences.
- JSON representation The response from savedQueries.list.

### "Build and save queries by using the Logging query language \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- Source ID: `site-docs-root`
- Final score: 149
- Re-rank relevance: N/A

Evidence snippets:
- The following example illustrates a sample request body, which contains an instance of SavedQuery : { "parent": "projects/my-project/locations/global" "savedQueryId": "compute-query" { "displayName": "compute-admin-activity-query", "description": "Queries for Compute Engine Admin Activity logs.", "loggingQuery": { "filter": resource.type="gce instance" AND log id("cloudaudit.googleapis.com/activity"), }, "visibility": "PRIVATE" } } To share the query with other members of the Google Cloud project, specify a value of SHARED in the visibility field.
- View saved queries You can view both private queries and queries that are shared with other members in the Google Cloud project by clicking the menu book Query library button: Console In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- Run : To run the query, choose this option. more vert More options : Lets you view the query expression with the options to run the query or save it to your list of Saved queries.
- Saved queries let you store query expressions to help you explore your logs more consistently and efficiently.

