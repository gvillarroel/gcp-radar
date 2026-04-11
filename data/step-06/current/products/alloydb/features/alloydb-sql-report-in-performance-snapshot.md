---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.566Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB SQL Report in performance snapshot"
feature_slug: "alloydb-sql-report-in-performance-snapshot"
latest_feature_date: "2025-12-18"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
keywords:
  - "SQL Report section"
  - "top 50 queries"
  - "performance snapshot SQL Report"
  - "elapsed time query ranking"
  - "I/O metrics by SQL statement"
  - "snapshot SQL report"
  - "SQL report"
---

# AlloyDB SQL Report in performance snapshot

Product: AlloyDB
Coverage: HIGH

## Step 02 Summary

AlloyDB performance snapshot reports now include an SQL Report section listing the top 50 queries by elapsed time and related I/O metrics.

## Extended Definition

The AlloyDB SQL Report feature is a section within AlloyDB database performance snapshot reports that summarizes query-level performance. It lists the top 50 queries ranked by total elapsed time and also presents read I/O and the standard deviation of elapsed time for those queries.

## Evidence Summary

The AlloyDB release notes state that performance snapshot reports include a new SQL Report section that surfaces the top 50 queries by elapsed time, read I/O, and elapsed-time standard deviation.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)

## Supporting Pages

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- Feature AlloyDB database performance snapshot reports now include a SQL Report section, which lists the top 50 queries by total elapsed time, read I/O, and standard deviation of elapsed time.

