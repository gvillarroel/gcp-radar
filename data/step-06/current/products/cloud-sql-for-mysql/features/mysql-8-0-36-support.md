---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.853Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "MySQL 8.0.36 support"
feature_slug: "mysql-8-0-36-support"
latest_feature_date: "2024-02-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion"
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-performance-capture"
keywords:
  - "mysql"
  - "36"
  - "sql"
  - "for"
  - "supports"
  - "minor"
  - "version"
---

# MySQL 8.0.36 support

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for MySQL supports MySQL minor version 8.0.36.

## Extended Definition

Cloud SQL for MySQL supports MySQL minor version 8.0.36.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion)
- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-performance-capture](https://docs.cloud.google.com/sql/docs/mysql/configure-performance-capture)

## Supporting Pages

### SqlDatabaseVersion \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion)
- Source ID: `site-api-reference`
- Final score: 252
- Re-rank relevance: N/A

Evidence snippets:
- MYSQL 8 0 36 The database major version is MySQL 8.0 and the minor version is 36.
- MYSQL 8 0 18 The database major version is MySQL 8.0 and the minor version is 18.
- MYSQL 8 0 26 The database major version is MySQL 8.0 and the minor version is 26.
- MYSQL 8 0 27 The database major version is MySQL 8.0 and the minor version is 27.

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: N/A

Evidence snippets:
- February 06, 2024 Feature Cloud SQL for MySQL now supports minor version 8.0.36.
- December 05, 2024 Feature Cloud SQL Enterprise Plus edition now supports the following regions: africa-south1 (Johannesburg) asia-east2 (Hong Kong) europe-west10 (Berlin) December 04, 2024 Feature Cloud SQL for MySQL now supports minor version 8.0.40.
- August 18, 2023 Feature Cloud SQL Enterprise Plus edition now supports four new regions: europe-central2 (Warsaw) europe-west9 (Paris) southamerica-east1 (San Paulo) us-west1 (Oregon) Feature Cloud SQL for MySQL now supports minor version 8.0.34.
- March 05, 2021 Feature The following MySQL minor versions have been upgraded: MySQL 5.6.47 is upgraded to 5.6.50 MySQL 5.7.25 is upgraded to 5.7.32 Feature Cloud SQL for MySQL now supports flexible instance configurations.

### "Configure performance capture \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-performance-capture](https://docs.cloud.google.com/sql/docs/mysql/configure-performance-capture)
- Source ID: `site-iam-reference`
- Final score: 232
- Re-rank relevance: N/A

Evidence snippets:
- If you specify MYSQL 8 4 for the database version (or don't specify a database version), but the region you specify doesn't support Cloud SQL Enterprise Plus edition, then you must specify a region that supports Cloud SQL Enterprise Plus edition , or create an Cloud SQL Enterprise edition instance instead.
- If you specify MYSQL 8 4 for the database version (or don't specify a database version), but the region you specify doesn't support Cloud SQL Enterprise Plus edition, then you must specify a region that supports Cloud SQL Enterprise Plus edition , or create an Cloud SQL Enterprise edition instance instead.
- If you specify MYSQL 8 4 for the database version, but the region you specify doesn't support Cloud SQL Enterprise Plus edition, then you must specify a region that supports Cloud SQL Enterprise Plus edition , or create an Cloud SQL Enterprise edition instance instead.
- For example: gcloud beta sql instances create my-instance \ --database-version = MYSQL 8 0 \ --edition = ENTERPRISE PLUS \ --tier = db-perf-optimized-N-4 \ --region = us-west1 \ --performance-capture-config = "enabled=true,probing-interval-seconds=30,probe-threshold=5,running-threads-threshold=10,transaction-duration-threshold=300" Update an existing instance To enable performance capture for an existing Cloud SQL instance, run the following command: gcloud beta sql instances patch INSTANCE NAME \ --performance-capture-config = "enabled=true, PROBE CONFIGURATION , PERFORMANCE CAPTURE THRESHOLDS " For the performance-capture-config flag, include enabled=true .

