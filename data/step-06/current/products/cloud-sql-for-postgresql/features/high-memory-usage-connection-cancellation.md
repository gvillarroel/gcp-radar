---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.281Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "High memory usage connection cancellation"
feature_slug: "high-memory-usage-connection-cancellation"
latest_feature_date: "2025-10-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/troubleshooting"
keywords:
  - "high"
  - "memory"
  - "usage"
  - "connection"
  - "cancellation"
  - "proactively"
  - "detects"
  - "and"
---

# High memory usage connection cancellation

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

High memory usage connection cancellation proactively detects and cancels connections that could trigger out-of-memory failures.

## Extended Definition

High memory usage connection cancellation proactively detects and cancels connections that could trigger out-of-memory failures.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)

## Supporting Pages

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- October 23, 2025 Cloud SQL for PostgreSQL Feature Cloud SQL now proactively detects and works to cancel high memory usage connections to prevent out-of-memory (OOM) failures.
- When you enable managed buffer pool, Cloud SQL reduces the value of the innodb buffer pool size configuration and frees up memory when memory usage is high, and the instance is in danger of an OOM event.
- This service helps you avoid bottlenecks from high CPU and memory usage and minimize the likelihood of out-of-memory events.
- This service helps you avoid bottlenecks from high CPU and memory usage and minimize the likelihood of out-of-memory events.

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- October 23, 2025 Feature Cloud SQL now proactively detects and works to cancel high memory usage connections to prevent out-of-memory (OOM) failures.
- This service helps you avoid bottlenecks from high CPU and memory usage and minimize the likelihood of out-of-memory events.
- This feature automates read pool scale in and scale out operations based on one or both of the following conditions: Allowed CPU usage of the read pool Allowed number of client connections to the read pool November 05, 2025 Feature The rollout of the following extension versions, plugin versions, and extension support is underway: Extensions and plugins plpgsql check is upgraded from 2.8.1 to 2.8.3 for PostgreSQL versions 14 and later. pg wait sampling is upgraded from 1.1.6 to 1.1.9 for PostgreSQL versions 13 and later. tds fdw is upgraded from 2.0.4 to 2.0.5.
- February 13, 2019 Change Cloud SQL for PostgreSQL connection limits are now double when memory is 6 GiB or higher.

### Troubleshoot \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- There are other factors beside your workload that can impact memory usage, such as the number of active connections and internal overhead processes.
- MySQL PostgreSQL SQL Server Check if your question or problem has already been addressed on one of the following pages: FAQ Known issues Error messages Diagnose issues Debug connection issues Issues updating storage capacity Topics in this page include: Backup and recovery Cancel import and export Cloning Connectivity Creating instances Flags High availability Import and export Integrate with Vertex AI Logging Managing instances Private Service Connect Replication Backup and recovery Issue Troubleshooting You can't see the current operation's status.
- Cloud SQL instance resources (CPU and RAM) are near 100% usage, causing the high availability instance to go down.
- Check the CPU and memory usage of your Cloud SQL instance to make sure there are plenty of resources available.

