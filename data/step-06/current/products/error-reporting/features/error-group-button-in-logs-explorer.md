---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:09:42.688Z"
product_name: "Error Reporting"
product_slug: "error-reporting"
feature_name: "Error Group button in Logs Explorer"
feature_slug: "error-group-button-in-logs-explorer"
latest_feature_date: "2022-07-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/error-reporting/docs/viewing-errors"
  - "https://docs.cloud.google.com/error-reporting/docs/grouping-errors"
  - "https://docs.cloud.google.com/error-reporting/docs/troubleshooting"
keywords:
  - "error"
  - "group"
  - "button"
  - "logs"
  - "explorer"
  - "shows"
  - "log"
  - "entries"
---

# Error Group button in Logs Explorer

Product: Error Reporting
Coverage: MEDIUM

## Step 02 Summary

Logs Explorer shows an Error Group button for log entries that belong to error groups.

## Extended Definition

Logs Explorer shows an Error Group button for log entries that belong to error groups.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/error-reporting/docs/viewing-errors](https://docs.cloud.google.com/error-reporting/docs/viewing-errors)
- [https://docs.cloud.google.com/error-reporting/docs/grouping-errors](https://docs.cloud.google.com/error-reporting/docs/grouping-errors)
- [https://docs.cloud.google.com/error-reporting/docs/troubleshooting](https://docs.cloud.google.com/error-reporting/docs/troubleshooting)

## Supporting Pages

### View and filter error groups \_|\_ Error Reporting \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/error-reporting/docs/viewing-errors](https://docs.cloud.google.com/error-reporting/docs/viewing-errors)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When you use the Logs Explorer, the error group button ( ) indicates that the log entry is associated with an error group.
- The Logs Explorer opens and displays the list of log entries that contribute to the error group.
- Note: You can filter by the error groups ID field only when querying logs, for example, when you are using the Logs Explorer and Observability Analytics pages.
- Filter error groups You can use the filters on the Error Reporting toolbar to filter by the status, the affected resources, and the region of the log buckets that store your log entries.

### Troubleshoot \_|\_ Error Reporting \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/error-reporting/docs/troubleshooting](https://docs.cloud.google.com/error-reporting/docs/troubleshooting)
- Source ID: `site-docs-reference-required-1`
- Final score: 105
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Run the following command: gcloud logging write --payload-type = json test-errors-log \ '{"serviceContext": {"service": "manual-testing"}, "message": "Test Error\n at /test.js:42:42", "context": {"httpRequest": {"url": "/test","method": "GET","responseStatusCode": 500}}}' Go to the Logs Explorer page and search your log entries for Test Error .
- Go to Error Reporting Go to the Logs Explorer page and verify that your application is writing log entries that have the expected format .
- Go to Error Reporting Go to the Logs Explorer page and search your log entries for TestError .
- As a result: Error Reporting can analyze the log entries routed by the Default , Required , and logs-from-samples sinks because the log bucket is stored by the same project that routes the log entries.

### Error Reporting overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/error-reporting/docs/grouping-errors](https://docs.cloud.google.com/error-reporting/docs/grouping-errors)
- Source ID: `site-docs-reference-required-1`
- Final score: 102
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- On the Error Groups page, Error Reporting organizes and shows error groups based on the region of the log bucket that contains the log entries.
- How error events are grouped When Error Reporting evaluates log entries to identify error events, it ignores log entries with the following conditions: Log entries written by App Engine standard environment that have a severity level lower than ERROR .
- For example, an error group listed under us-central-1 contains only error logs that are part of a log bucket in us-central-1 .
- Global error groups contain only error logs that are part of a log bucket in the global region.

