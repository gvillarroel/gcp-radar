---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.305Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Analytics views"
feature_slug: "analytics-views"
latest_feature_date: "2025-01-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery"
  - "https://docs.cloud.google.com/logging/docs/access-control"
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
keywords:
  - "analytics"
  - "views"
  - "transform"
  - "log"
  - "into"
  - "custom"
  - "format"
  - "can"
---

# Analytics views

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Analytics views transform log data into a custom format that can be queried with SQL.

## Extended Definition

Analytics views transform log data into a custom format that can be queried with SQL.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery)
- [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control)
- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)

## Supporting Pages

### OpsAnalyticsQuery \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery)
- Source ID: `site-docs-reference`
- Final score: 136
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The alias must be defined in the QueryBuilderConfig 's fieldSources list, otherwise the model is invalid. projectedField object ( ProjectedField ) A projected field option for when a user wants to use a field with some additional transformations such as casting or extractions.
- Use ProjectedField when you need more than just the raw source field name (for which you might use FieldSource directly in QueryBuilderConfig's fieldSources list if no transformations or specific operation type are needed).
- It specifies the source field and optionally applies transformations like aggregation, casting, regex extraction, or assigns an alias.
- A Log Analytics SQL query in text format.

### Access control with IAM \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- Save and use private queries logging.queries.usePrivate logging.queries.{listShared,getShared} Save and use shared queries logging.queries.{share, getShared, updateShared, deleteShared, listShared} Use recent queries logging.queries.{create, list} Create and manage log scopes logging.logScopes.{create, delete, get, list, update} Set and manage the default log scope observability.scopes.{get, update} Create and manage analytics views observability.analyticsViews.{create, delete, get, list, update} Create and manage linked datasets logging.links.{create, delete, get, list} You might need additional IAM roles to query the linked dataset.
- This role lets you create or modify any of the following: Log sinks Log buckets Log views Linked data sets Log scopes Analytics views This role isn't sufficient to create log-based metrics or log-based alerting policies .
- For information about creating log views and granting access, see Configure log views on a log bucket .
- For more information about custom roles, see Understanding IAM custom roles .

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- For information about creating charts from your query results and saving charts to a custom dashboard, see Chart query results with Observability Analytics .
- Set preferences for viewing log data To customize how your logs data is presented in the query results, click the settings Preferences button, and select View , Format , or Manage summary fields : To show or hide the Timeline and Fields panes, to hide summary chips in your query results, or to change the sorting order of your logs, select View .
- The copied URL has the corresponding absolute time range represented by the time range of your query; for example, 7:49:37 PM - 8:49:37 PM . settings Preferences : Adjust the view of the Logs Explorer page, and customize the format of your query results.
- For example, if the toolbar displays N log view , then the manage search Analyze results button is shown when the log bucket for at least one of the selected log views is upgraded to use Observability Analytics.

