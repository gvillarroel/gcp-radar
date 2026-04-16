---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.809Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Multiline postgres.log entries in Cloud Logging"
feature_slug: "multiline-postgres-log-entries-in-cloud-logging"
latest_feature_date: "2021-09-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/troubleshooting"
  - "https://docs.cloud.google.com/sql/docs/debugging-connectivity"
  - "https://docs.cloud.google.com/sql/docs/postgres/audit-logging"
keywords:
  - "multiline"
  - "entries"
  - "logging"
  - "records"
  - "postgres"
---

# Multiline postgres.log entries in Cloud Logging

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL for PostgreSQL records multiline postgres.log messages as a single Cloud Logging entry.

## Extended Definition

Cloud SQL for PostgreSQL records multiline postgres.log messages as a single Cloud Logging entry.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)
- [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity)
- [https://docs.cloud.google.com/sql/docs/postgres/audit-logging](https://docs.cloud.google.com/sql/docs/postgres/audit-logging)

## Supporting Pages

### Troubleshoot \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Relevant log files include: cloudsql.googleapis.com/postgres.log If Cloud Audit Logs is enabled and you have the required permissions to view them, cloudaudit.googleapis.com/activity may also be available.
- To download the logs as JSON: gcloud logging read \ "resource.type=cloudsql database \ AND logName=projects/ PROJECT ID \ /logs/cloudsql.googleapis.com%2F LOG NAME " \ --format json \ --project = PROJECT ID \ --freshness = "1d" \ downloaded-log.json To download the logs as TEXT: gcloud logging read \ "resource.type=cloudsql database \ AND logName=projects/ PROJECT ID \ /logs/cloudsql.googleapis.com%2F LOG NAME " \ --format json \ --project = PROJECT ID \ --freshness = "1d" jq -rnc --stream 'fromstream(1 truncate stream(inputs)) \ .textPayload' \ --order = asc downloaded-log.txt Query logs are not found in PostgreSQL logs.
- MySQL PostgreSQL SQL Server Check if your question or problem has already been addressed on one of the following pages: FAQ Known issues Error messages Diagnose issues Debug connection issues Issues updating storage capacity Topics in this page include: Backup and recovery Cancel import and export Cloning Connectivity Creating instances Flags High availability Import and export Integrate with Vertex AI Logging Managing instances Private Service Connect Replication Backup and recovery Issue Troubleshooting You can't see the current operation's status.
- To specify the user, run the following command: gcloud sql import sql INSTANCE URI [--async] [--database=DATABASE, -d DATABASE] [--user=USER] [GCLOUD WIDE FLAG …] Integrate with Vertex AI Issue Troubleshooting Error message: Google ML integration API is supported only on Postgres version 12 or above.

### Debugging connection issues \_|\_ Cloud SQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity)
- Source ID: `site-docs-root`
- Final score: 124
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The limit flag is an optional parameter that indicates the maximum number of entries to return. gcloud logging read "projects/ PROJECT ID /logs/cloudsql.googleapis.com/mysql-general.log" \ --limit = 10 gcloud logging read "projects/ PROJECT ID /logs/cloudsql.googleapis.com/postgres.log" \ --limit = 10 Private IP addresses Connections to a Cloud SQL instance using a private IP address are automatically authorized for RFC 1918 address ranges .
- For example: cloudsql.googlapis.com/mysql-general.log cloudsql.googleapis.com/mysql.err cloudsql.googleapis.com/postgres.log Severity: Select a log level.
- To view logs for your Cloud SQL instance log entries: Console In the Google Cloud console, go to the Cloud Logging page.
- Time range: Select a preset or create a custom range. gcloud Use the gcloud logging command to view log entries.

### Cloud SQL for PostgreSQL audit logging \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/audit-logging](https://docs.cloud.google.com/sql/docs/postgres/audit-logging)
- Source ID: `site-iam-reference`
- Final score: 98
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Cloud SQL PostgreSQL Guides Send feedback Cloud SQL for PostgreSQL audit logging Stay organized with collections Save and categorize content based on your preferences.
- MySQL PostgreSQL SQL Server This document describes audit logging for Cloud SQL.
- For more information about Cloud Audit Logs, see the following: Types of audit logs Audit log entry structure Storing and routing audit logs Cloud Logging pricing summary Enable Data Access audit logs Service name Cloud SQL audit logs use the service name cloudsql.googleapis.com .
- These methods usually generate two audit log entries: one when the operation starts and another when it ends.

