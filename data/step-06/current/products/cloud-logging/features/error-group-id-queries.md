---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.332Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Error group ID queries"
feature_slug: "error-group-id-queries"
latest_feature_date: "2023-12-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/view/building-queries"
  - "https://docs.cloud.google.com/logging/docs/audit"
keywords:
  - "error"
  - "group"
  - "id"
  - "queries"
  - "logs"
  - "explorer"
  - "log"
  - "analytics"
---

# Error group ID queries

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

Logs Explorer and Log Analytics can query for a specific error group by error group ID.

## Extended Definition

Logs Explorer and Log Analytics can query for a specific error group by error group ID.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit)

## Supporting Pages

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 187
- Re-rank relevance: N/A

Evidence snippets:
- The Logs Explorer contains the following sections, which are detailed on this page: Primary toolbar Query pane Fields pane Timeline Query results pane Primary toolbar in the Logs Explorer Using the primary toolbar, you can do the following: menu book Query library : View saved, recent, and suggested queries.
- The following occurs when you click manage search Analyze results : The time range in the Logs Explorer might be automatically adjusted so that there is meaningful log data in the Observability Analytics page.
- If resources in multiple projects or regions are searched for log entries, then the Observability Analytics might show different log entries than the Logs Explorer page.
- Example Logs Explorer queries For suggested queries, arranged by Google Cloud product and use case, see Sample queries using the Logs Explorer .

### "Build and save queries by using the Logging query language \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- Source ID: `site-docs-root`
- Final score: 153
- Re-rank relevance: N/A

Evidence snippets:
- View saved queries You can view both private queries and queries that are shared with other members in the Google Cloud project by clicking the menu book Query library button: Console In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- For example, the following request body lists all shared Logs Explorer queries with a wildcard location ID: { "parent": "name": projects/PROJECT ID/locations/- "visibility": "SHARED" "filter": "explorer" } Use suggested queries Logging generates suggested queries based on the context of your Google Cloud project, such as the Google Cloud products you're using.
- Build queries To build queries by using the Google Cloud console, do the following: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- Write advanced queries using the Logging query language You can use the Logging query language to build more advanced queries in the Logs Explorer query-editor field: If you don't see the query-editor field in the Query pane, enable Show query .

### Cloud Audit Logs overview \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit)
- Source ID: `site-docs-root`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- For more information about querying by using the Logs Explorer, see Build queries in the Logs Explorer . gcloud The Google Cloud CLI provides a command-line interface to the Logging API.
- For more information about querying your logs, see Build queries in the Logs Explorer The Logs Explorer lets you view filter individual log entries.
- To display all audit logs, enter either of the following queries into the query-editor field, and then click Run query : logName:"cloudaudit.googleapis.com" protoPayload."@type"="type.googleapis.com/google.cloud.audit.AuditLog" To display the audit logs for a specific resource and audit log type, in the Query builder pane, do the following: In Resource type , select the Google Cloud resource whose audit logs you want to see.
- Console In the Google Cloud console, you can use the Logs Explorer to retrieve your audit log entries for your Google Cloud project, folder, or organization: Note: You can't view audit logs for Cloud Billing accounts in the Google Cloud console.

