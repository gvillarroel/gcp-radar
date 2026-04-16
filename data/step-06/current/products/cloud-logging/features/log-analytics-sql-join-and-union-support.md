---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.350Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Log Analytics SQL JOIN and UNION support"
feature_slug: "log-analytics-sql-join-and-union-support"
latest_feature_date: "2023-05-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery"
  - "https://docs.cloud.google.com/logging/docs/view/building-queries"
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
keywords:
  - "log"
  - "analytics"
  - "sql"
  - "join"
  - "union"
  - "queries"
  - "operators"
---

# Log Analytics SQL JOIN and UNION support

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Log Analytics SQL queries support JOIN and UNION operators.

## Extended Definition

Log Analytics SQL queries support JOIN and UNION operators.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery)
- [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)

## Supporting Pages

### OpsAnalyticsQuery \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/OpsAnalyticsQuery)
- Source ID: `site-docs-reference`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "fieldSource" : { object ( FieldSource ) } , "comparator" : enum ( Comparator ) , "isNegation" : boolean , // Union field filter value can be only one of the following: "literalValue" : value , "fieldSourceValue" : { object ( FieldSource ) } // End of list of possible types for union field filter value . } Fields fieldSource object ( FieldSource ) Can be one of the FieldSource types: field name, alias ref, variable ref, or a literal value. comparator enum ( Comparator ) The comparison type to use for the filter. isNegation boolean Determines if the NOT flag should be added to the comparator.
- JSON representation { "isJson" : boolean , "columnType" : string , "parentPath" : string , // Union field field source type can be only one of the following: "field" : string , "aliasRef" : string , "projectedField" : { object ( ProjectedField ) } // End of list of possible types for union field field source type . } Fields isJson boolean Whether the field is a JSON field, or has a parent that is a JSON field.
- JSON representation QueryBuilderConfig JSON representation FilterPredicate JSON representation OperatorType FilterExpression JSON representation FieldSource JSON representation ProjectedField JSON representation FieldOperation FunctionApplication JSON representation Comparator SortOrderParameter JSON representation SortOrder Describes a query that can be run in Log Analytics.
- Currently there is no support for multiple levels of nesting, so this will be a single value with no joining of different operator types leafPredicate object ( FilterExpression ) The leaves of the filter predicate.

### "Build and save queries by using the Logging query language \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- Source ID: `site-docs-root`
- Final score: 101
- Re-rank relevance: N/A

Evidence snippets:
- If you don't include any operators, all search terms and phrases are joined by AND .
- The following example illustrates a sample request body, which contains an instance of SavedQuery : { "parent": "projects/my-project/locations/global" "savedQueryId": "compute-query" { "displayName": "compute-admin-activity-query", "description": "Queries for Compute Engine Admin Activity logs.", "loggingQuery": { "filter": resource.type="gce instance" AND log id("cloudaudit.googleapis.com/activity"), }, "visibility": "PRIVATE" } } To share the query with other members of the Google Cloud project, specify a value of SHARED in the visibility field.
- View saved queries You can view both private queries and queries that are shared with other members in the Google Cloud project by clicking the menu book Query library button: Console In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- For example, the following request body lists all shared Logs Explorer queries with a wildcard location ID: { "parent": "name": projects/PROJECT ID/locations/- "visibility": "SHARED" "filter": "explorer" } Use suggested queries Logging generates suggested queries based on the context of your Google Cloud project, such as the Google Cloud products you're using.

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 83
- Re-rank relevance: N/A

Evidence snippets:
- To perform aggregate operations on your log entries, like counting the number of log entries that contain a specific pattern, upgrade the log bucket to use Observability Analytics, and then run queries from the Observability Analytics page of the Google Cloud console.
- Analyze results by using Observability Analytics You can aggregate, analyze, and chart your log data by using SQL queries in the Observability Analytics page when your project contains log buckets that are upgraded to use Observability Analytics.
- For information about using SQL to write queries, see Query and view logs in Observability Analytics .
- The Logs Explorer contains the following sections, which are detailed on this page: Primary toolbar Query pane Fields pane Timeline Query results pane Primary toolbar in the Logs Explorer Using the primary toolbar, you can do the following: menu book Query library : View saved, recent, and suggested queries.

