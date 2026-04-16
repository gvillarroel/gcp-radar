---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:09:42.682Z"
product_name: "Error Reporting"
product_slug: "error-reporting"
feature_name: "Non-global log bucket analysis"
feature_slug: "non-global-log-bucket-analysis"
latest_feature_date: "2024-08-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/error-reporting"
  - "https://docs.cloud.google.com/error-reporting/docs/grouping-errors"
  - "https://docs.cloud.google.com/error-reporting/docs/troubleshooting"
keywords:
  - "non"
  - "global"
  - "log"
  - "bucket"
  - "analysis"
  - "error"
  - "reporting"
  - "can"
---

# Non-global log bucket analysis

Product: Error Reporting
Coverage: MEDIUM

## Step 02 Summary

Error Reporting can analyze log entries routed to a non-global-region log bucket when the log sink is in the same project as the bucket.

## Extended Definition

Error Reporting can analyze log entries routed to a non-global-region log bucket when the log sink is in the same project as the bucket.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/error-reporting](https://docs.cloud.google.com/error-reporting)
- [https://docs.cloud.google.com/error-reporting/docs/grouping-errors](https://docs.cloud.google.com/error-reporting/docs/grouping-errors)
- [https://docs.cloud.google.com/error-reporting/docs/troubleshooting](https://docs.cloud.google.com/error-reporting/docs/troubleshooting)

## Supporting Pages

### Error Reporting overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/error-reporting/docs/grouping-errors](https://docs.cloud.google.com/error-reporting/docs/grouping-errors)
- Source ID: `site-docs-reference-required-1`
- Final score: 77
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When Error Reporting analyzes log entries Error Reporting is a global service built on Cloud Logging and can analyze log entries when all of the following are true: Assured workloads are disabled.
- On the Error Groups page, Error Reporting organizes and shows error groups based on the region of the log bucket that contains the log entries.
- Note: Because Error Reporting is a global service, error groups can be accessed from any region.
- Global error groups contain only error logs that are part of a log bucket in the global region.

### Error Reporting overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/error-reporting](https://docs.cloud.google.com/error-reporting)
- Source ID: `site-iam-reference`
- Final score: 77
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- When Error Reporting analyzes log entries Error Reporting is a global service built on Cloud Logging and can analyze log entries when all of the following are true: Assured workloads are disabled.
- On the Error Groups page, Error Reporting organizes and shows error groups based on the region of the log bucket that contains the log entries.
- Note: Because Error Reporting is a global service, error groups can be accessed from any region.
- Global error groups contain only error logs that are part of a log bucket in the global region.

### Troubleshoot \_|\_ Error Reporting \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/error-reporting/docs/troubleshooting](https://docs.cloud.google.com/error-reporting/docs/troubleshooting)
- Source ID: `site-docs-reference-required-1`
- Final score: 75
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- As a result: Error Reporting can analyze the log entries routed by the Default , Required , and logs-from-samples sinks because the log bucket is stored by the same project that routes the log entries.
- Error Reporting can't analyze the log entries stored in the log bucket named test-logs because the sink in my-team-project routes the log entries to a log bucket in a different project.
- Error Reporting is a global service built on Cloud Logging and can analyze log entries when all of the following are true: Assured workloads are disabled.
- Error Reporting can't store log entries in log buckets that have CMEK enabled.

