---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.915Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Database auditing"
feature_slug: "database-auditing"
latest_feature_date: "2021-12-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-performance-capture"
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/connect-overview"
keywords:
  - "database"
  - "auditing"
  - "sql"
  - "for"
  - "mysql"
  - "supports"
  - "to"
  - "track"
---

# Database auditing

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for MySQL supports database auditing to track user actions such as reads, updates, and privilege changes.

## Extended Definition

Cloud SQL for MySQL supports database auditing to track user actions such as reads, updates, and privilege changes.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/configure-performance-capture](https://docs.cloud.google.com/sql/docs/mysql/configure-performance-capture)
- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/connect-overview](https://docs.cloud.google.com/sql/docs/mysql/connect-overview)

## Supporting Pages

### "Configure performance capture \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-performance-capture](https://docs.cloud.google.com/sql/docs/mysql/configure-performance-capture)
- Source ID: `site-iam-reference`
- Final score: 248
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For example: gcloud beta sql instances create my-instance \ --database-version = MYSQL 8 0 \ --edition = ENTERPRISE PLUS \ --tier = db-perf-optimized-N-4 \ --region = us-west1 \ --performance-capture-config = "enabled=true,probing-interval-seconds=30,probe-threshold=5,running-threads-threshold=10,transaction-duration-threshold=300" Update an existing instance To enable performance capture for an existing Cloud SQL instance, run the following command: gcloud beta sql instances patch INSTANCE NAME \ --performance-capture-config = "enabled=true, PROBE CONFIGURATION , PERFORMANCE CAPTURE THRESHOLDS " For the performance-capture-config flag, include enabled=true .
- If you specify MYSQL 8 4 for the database version (or don't specify a database version), but the region you specify doesn't support Cloud SQL Enterprise Plus edition, then you must specify a region that supports Cloud SQL Enterprise Plus edition , or create an Cloud SQL Enterprise edition instance instead.
- If you specify MYSQL 8 4 for the database version (or don't specify a database version), but the region you specify doesn't support Cloud SQL Enterprise Plus edition, then you must specify a region that supports Cloud SQL Enterprise Plus edition , or create an Cloud SQL Enterprise edition instance instead.
- If you specify MYSQL 8 4 for the database version, but the region you specify doesn't support Cloud SQL Enterprise Plus edition, then you must specify a region that supports Cloud SQL Enterprise Plus edition , or create an Cloud SQL Enterprise edition instance instead.

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 248
- Re-rank relevance: N/A

Evidence snippets:
- January 23, 2026 Feature Cloud SQL for MySQL now supports performance capture to help you diagnose transient performance issues with your MySQL database.
- September 02, 2021 Feature Cloud SQL for MySQL now supports using a custom import to set up replication from large external databases.
- Feature Cloud SQL for MySQL now supports the storage of vector embeddings in MySQL 8.0.36 and later databases.
- Feature Cloud SQL for MySQL now supports database auditing.

### "Choose how to connect to Cloud SQL \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/connect-overview](https://docs.cloud.google.com/sql/docs/mysql/connect-overview)
- Source ID: `site-docs-root`
- Final score: 246
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud Shell Connecting using the Cloud Shell Apps Script External connections with Apps Script Apps Script sample GitHub page Cloud Code Connecting using Cloud Code in JetBrains IDE Connect using third-party database administration tools MySQL Workbench Connecting with MySQL Workbench Toad for MySQL Connecting with Toad for MySQL SQuirrel SQL Connecting with SQuirrel SQL phpMyAdmin Using phpMyAdmin with Cloud SQL on App Engine Troubleshoot If you're having problems connecting, then check the following pages for help debugging or finding solutions to known issues: Debugging connection issues Known connectivity errors Troubleshooting Cloud SQL Auth Proxy connection Common connection issues What's next Learn how to connect with the Quickstart for Cloud SQL for mysql .
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Choose how to connect to Cloud SQL Stay organized with collections Save and categorize content based on your preferences.
- Remove networking options from an instance Cloud SQL supports the removal of the following networking options from an instance: Public IP from an instance with both private services access and public IP Public IP from an instance with public IP, private services access, and Private Service Connect Private Service Connect from an instance with both Private Service Connect and private services access Private Service Connect from an instance with Private Service Connect, private services access, and public IP Enable networking options for an instance You can enable Cloud SQL supports enabling the following connection options for instances: Private services access on an instance with public IP only Private Service Connect on an instance with private services access only Private Service Connect on an instance with both private services access and public IP Public IP on an instance with private services access only Limitations You can't create an instance with both a public IP address and Private Service Connect.
- Configuration options Cloud SQL Auth Proxy , or Cloud SQL Language Connectors, including Cloud SQL Java connector Cloud SQL Python connector Cloud SQL Go connector Cloud SQL Node.js connector The following Google Cloud services use an embedded Cloud SQL Auth Proxy when you connect to a Cloud SQL instance over public IP address: Cloud Run App Engine flexible environment App Engine standard environment To configure SSL/TLS certificates on the Cloud SQL instance and for your client, do the following: Choose a server CA mode for your instance .

