---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.789Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "pg_dumpall utility"
feature_slug: "pg-dumpall-utility"
latest_feature_date: "2023-05-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp"
  - "https://docs.cloud.google.com/sql/docs/postgres/troubleshooting"
  - "https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication"
keywords:
  - "extracting"
  - "dumpall"
  - "utility"
  - "generally"
  - "available"
---

# pg_dumpall utility

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

The pg_dumpall utility is generally available for extracting all PostgreSQL databases in a cluster into a single script file.

## Extended Definition

The pg_dumpall utility is generally available for extracting all PostgreSQL databases in a cluster into a single script file.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp](https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp)
- [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)
- [https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication](https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication)

## Supporting Pages

### "Export and import using pg_dump, pg_dumpall, and pg_restore \_|\_ Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp](https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp)
- Source ID: `site-docs-root`
- Final score: 122
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To export all PostgreSQL databases in a Cloud SQL instance, use the pg dumpall utility with the following mandatory flags: exclude-database=cloudsqladmin exclude-database=template The pg dumpall utility doesn't have access to the cloudsqladmin or template databases.
- If you're using the pg dumpall utility to export all PostgreSQL databases of a cluster that aren't managed by Cloud SQL, then you don't have to use the exclude-database=cloudsqladmin flag.
- Export all databases pg dumpall is a utility that allows you to extract all PostgreSQL databases of a cluster into a single script file.
- To export all PostgreSQL databases of a cluster, use the pg dumpall utility.

### Troubleshoot \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- Using the pg dumpall utility with the --global flag requires the superuser role, but this role isn't supported in Cloud SQL for PostgreSQL.
- Relevant log files include: cloudsql.googleapis.com/postgres.log If Cloud Audit Logs is enabled and you have the required permissions to view them, cloudaudit.googleapis.com/activity may also be available.
- The consumer network is either not configured correctly, or not configured at all, and therefore, no endpoint is available to connect to.
- Check the CPU and memory usage of your Cloud SQL instance to make sure there are plenty of resources available.

### "Cloud SQL built-in database authentication \_|\_ Cloud SQL for PostgreSQL\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication](https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication)
- Source ID: `site-iam-reference`
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

