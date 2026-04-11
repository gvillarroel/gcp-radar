---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.594Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB database performance snapshots"
feature_slug: "alloydb-database-performance-snapshots"
latest_feature_date: "2024-12-05"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/reference/database-performance-snapshot-report-reference"
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
keywords:
  - "compare two snapshots"
  - "snapshot point-in-time report"
  - "performance snapshot analysis"
  - "performance snapshot report"
  - "system metrics comparison"
  - "database performance snapshots"
  - "performance snapshots"
  - "snapshot reports"
---

# AlloyDB database performance snapshots

Product: AlloyDB
Coverage: HIGH

## Step 02 Summary

AlloyDB now offers database performance snapshot reports that compare system metrics between two points in time.

## Extended Definition

AlloyDB database performance snapshot reports is a feature (GA as of December 5, 2024) that provides performance reports comparing system metrics between two snapshots taken at different points in time. These reports include metric-based analysis such as wait events and a SQL report section that lists the top 50 queries by total elapsed time, read I/O, and standard deviation of elapsed time to help identify performance issues. Coverage for specific wait events is documented in the report reference, indicating what can be analyzed in the snapshots.

## Evidence Summary

The release notes confirm GA availability, scope, and SQL-report details for AlloyDB performance snapshot reports, while the reference page documents the supported wait-event metrics within those reports.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/reference/database-performance-snapshot-report-reference](https://docs.cloud.google.com/alloydb/docs/reference/database-performance-snapshot-report-reference)
- [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)

## Supporting Pages

### "Database performance snapshot report reference \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/database-performance-snapshot-report-reference](https://docs.cloud.google.com/alloydb/docs/reference/database-performance-snapshot-report-reference)
- Source ID: `site-api-reference`
- Final score: 48
- Re-rank relevance: N/A

Evidence snippets:
- Wait events in snapshot reports The following table describes wait events that are supported by AlloyDB performance snapshot reports.
- This document describes wait events in AlloyDB for PostgreSQL performance snapshot reports.
- Home Documentation Databases AlloyDB for PostgreSQL Reference Send feedback Database performance snapshot report reference Stay organized with collections Save and categorize content based on your preferences.

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- December 05, 2024 Feature The AlloyDB database performance snapshot reports feature is generally available (GA).This feature lets you improve your database performance by using a report that compares snapshots of system metrics between two different points in time.
- Feature AlloyDB database performance snapshot reports now include a SQL Report section, which lists the top 50 queries by total elapsed time, read I/O, and standard deviation of elapsed time.
- For more information, see Optimize database performance by comparing performance snapshots .

