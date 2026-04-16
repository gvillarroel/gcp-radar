---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T23:59:44.452Z"
product_name: "Cloud Logging"
product_slug: "cloud-logging"
feature_name: "Logs Viewer"
feature_slug: "logs-viewer"
latest_feature_date: "2020-02-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface"
  - "https://docs.cloud.google.com/logging/docs/audit"
  - "https://docs.cloud.google.com/logging/docs/view/building-queries"
keywords:
  - "logs"
  - "viewer"
  - "lets"
  - "users"
  - "view"
  - "parse"
  - "analyze"
  - "refine"
---

# Logs Viewer

Product: Cloud Logging
Coverage: MEDIUM

## Step 02 Summary

The new Logs Viewer lets users view, parse, analyze, and refine queries for log data.

## Extended Definition

The new Logs Viewer lets users view, parse, analyze, and refine queries for log data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit)
- [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)

## Supporting Pages

### View and analyze logs \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
- Source ID: `site-docs-root`
- Final score: 292
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Logs Explorer interface The Logs Explorer interface lets you display log entries, parse and analyze them, and specify query parameters.
- Highlight search terms, monitor and download your logs There are various options to analyze your logs data by selecting the Actions menu of the Query results toolbar: ink highlighter Highlight in results : Enter text to be highlighted in your query results. add chart Create metric : Set up a log-based metric . call merge Create sink : Create a log sink that auto-populates the sink's inclusion filter with the current query expression. add alert Create log alert : Set up a log-based alerting policy . edit Manage alerts : View and manage alerting policies. download Download : Download your logs in CSV or JSON format.
- Before you begin To get the permissions that you need to use the Logs Explorer to view log entries, ask your administrator to grant you the following IAM roles: To view log entries in the Required bucket and those in the Default view on the Default bucket, or to select a log scope: Logs Viewer ( roles/logging.viewer ) on your project, folder, or organization.
- For more information about investigations, see the following documentation: Troubleshoot issues with Gemini Cloud Assist investigations Create a Gemini Cloud Assist investigation Manage Gemini Cloud Assist investigations View similar log entries You can view log entries that are similar to a selected log entry, which lets you focus on logs of interest.

### Cloud Audit Logs overview \_|\_ Cloud Logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Required roles To view audit logs, you must have the appropriate Identity and Access Management (IAM) permissions and roles: To get the permissions that you need to get read-only access to Admin Activity, Policy Denied, and System Event audit logs, ask your administrator to grant you the Logs Viewer ( roles/logging.viewer ) IAM role on your project.
- To get the permissions that you need to get access to all logs in the Required and Default buckets, including Data Access logs, ask your administrator to grant you the Private Logs Viewer ( roles/logging.privateLogViewer ) IAM role on your project.
- The Private Logs Viewer role (roles/logging.privateLogViewer) includes the permissions contained in the Logs Viewer role ( roles/logging.viewer ), and those necessary to read Data Access audit logs in the Default bucket.
- For more information about querying your logs, see Build queries in the Logs Explorer The Logs Explorer lets you view filter individual log entries.

### "Build and save queries by using the Logging query language \_|\_ Google\

- URL: [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- Source ID: `site-docs-root`
- Final score: 182
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Do one of the following: To get the permissions that you need to write and run queries, to run and save private queries, and to run shared queries, ask your administrator to grant you the Logs Viewer ( roles/logging.viewer ) IAM role on your project.
- Before you begin The Logs Viewer role ( roles/logging.viewer ) provides access to view logs.
- View saved queries You can view both private queries and queries that are shared with other members in the Google Cloud project by clicking the menu book Query library button: Console In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .
- To view and run the library's queries, do the following: In the Google Cloud console, go to the segment Logs Explorer page: Go to Logs Explorer If you use the search bar to find this page, then select the result whose subheading is Logging .

