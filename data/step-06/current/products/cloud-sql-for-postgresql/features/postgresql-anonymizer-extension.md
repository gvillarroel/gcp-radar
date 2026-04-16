---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.790Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "postgresql_anonymizer extension"
feature_slug: "postgresql-anonymizer-extension"
latest_feature_date: "2023-05-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/create-instance"
  - "https://docs.cloud.google.com/sql/docs/postgres/troubleshooting"
  - "https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication"
keywords:
  - "personally"
  - "replacing"
  - "masking"
  - "anonymizer"
  - "generally"
  - "available"
  - "extension"
---

# postgresql_anonymizer extension

Product: Cloud SQL for PostgreSQL
Coverage: MEDIUM

## Step 02 Summary

The postgresql_anonymizer extension is generally available for masking or replacing personally identifiable or sensitive data.

## Extended Definition

The postgresql_anonymizer extension is generally available for masking or replacing personally identifiable or sensitive data.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)
- [https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication](https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication)

## Supporting Pages

### Create instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- Source ID: `site-docs-root`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- Available only for the beta command ( gcloud beta sql instances create ). --no-assign-ip : Instance will only have a private IP address. --allocated-ip-range-name : If specified, sets a range name for which an IP range is allocated.
- For information about instance settings, including valid values for region, see Instance settings Don't include sensitive or personally identifiable information in your instance ID; it is externally visible.
- Note: This feature is only available for Cloud SQL Enterprise Plus edition instances that are configured to meet Managed Connection Pooling requirements.
- Automatic backups and high availability High availability --availability-type For a highly-available instance, set to REGIONAL .

### Troubleshoot \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 63
- Re-rank relevance: N/A

Evidence snippets:
- From a terminal, connect to your database: gcloud sql connect INSTANCE NAME Run this command to create the extension: CREATE EXTENSION pgaudit ; Exit the database, and from a terminal run the following command: gcloud sql instances patch INSTANCE NAME \ --database-flags = cloudsql.enable pgaudit = on,pgaudit.log = all Manage instances Issue Troubleshooting You want to find out what queries are running now.
- Relevant log files include: cloudsql.googleapis.com/postgres.log If Cloud Audit Logs is enabled and you have the required permissions to view them, cloudaudit.googleapis.com/activity may also be available.
- The consumer network is either not configured correctly, or not configured at all, and therefore, no endpoint is available to connect to.
- Check the CPU and memory usage of your Cloud SQL instance to make sure there are plenty of resources available.

### "Cloud SQL built-in database authentication \_|\_ Cloud SQL for PostgreSQL\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication](https://docs.cloud.google.com/sql/docs/postgres/built-in-authentication)
- Source ID: `site-iam-reference`
- Final score: 52
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

