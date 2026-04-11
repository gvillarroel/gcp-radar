---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.821Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Dynamic MySQL configuration optimization"
feature_slug: "dynamic-mysql-configuration-optimization"
latest_feature_date: "2025-03-10"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-legacy-ha"
  - "https://docs.cloud.google.com/sql/docs/mysql/connect-overview"
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-performance-capture"
keywords:
  - "dynamic"
  - "mysql"
  - "configuration"
  - "optimization"
  - "sql"
  - "for"
  - "dynamically"
  - "adjusts"
---

# Dynamic MySQL configuration optimization

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for MySQL dynamically adjusts MySQL configuration based on workload demands and infrastructure to improve write performance and reduce latency.

## Extended Definition

Cloud SQL for MySQL dynamically adjusts MySQL configuration based on workload demands and infrastructure to improve write performance and reduce latency.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/configure-legacy-ha](https://docs.cloud.google.com/sql/docs/mysql/configure-legacy-ha)
- [https://docs.cloud.google.com/sql/docs/mysql/connect-overview](https://docs.cloud.google.com/sql/docs/mysql/connect-overview)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-performance-capture](https://docs.cloud.google.com/sql/docs/mysql/configure-performance-capture)

## Supporting Pages

### "Legacy configuration for high availability \_|\_ Cloud SQL for MySQL \_\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-legacy-ha](https://docs.cloud.google.com/sql/docs/mysql/configure-legacy-ha)
- Source ID: `site-iam-reference`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Legacy configuration for high availability Stay organized with collections Save and categorize content based on your preferences.
- MySQL PostgreSQL SQL Server Important: As of January 13, 2025, the legacy configuration for high availability (HA) is deprecated for all instances.
- In a legacy HA configuration, a Cloud SQL for MySQL instance uses a failover replica to add high availability to the instance.
- This page describes the legacy configuration for a MySQL instance for high availability (HA).

### "Choose how to connect to Cloud SQL \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/connect-overview](https://docs.cloud.google.com/sql/docs/mysql/connect-overview)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Shell Connecting using the Cloud Shell Apps Script External connections with Apps Script Apps Script sample GitHub page Cloud Code Connecting using Cloud Code in JetBrains IDE Connect using third-party database administration tools MySQL Workbench Connecting with MySQL Workbench Toad for MySQL Connecting with Toad for MySQL SQuirrel SQL Connecting with SQuirrel SQL phpMyAdmin Using phpMyAdmin with Cloud SQL on App Engine Troubleshoot If you're having problems connecting, then check the following pages for help debugging or finding solutions to known issues: Debugging connection issues Known connectivity errors Troubleshooting Cloud SQL Auth Proxy connection Common connection issues What's next Learn how to connect with the Quickstart for Cloud SQL for mysql .
- Configuration options Cloud SQL Auth Proxy , or Cloud SQL Language Connectors, including Cloud SQL Java connector Cloud SQL Python connector Cloud SQL Go connector Cloud SQL Node.js connector The following Google Cloud services use an embedded Cloud SQL Auth Proxy when you connect to a Cloud SQL instance over public IP address: Cloud Run App Engine flexible environment App Engine standard environment To configure SSL/TLS certificates on the Cloud SQL instance and for your client, do the following: Choose a server CA mode for your instance .
- Dynamic IP configuration can be common for Platform as a Service (PaaS) applications.
- Remove networking options from an instance Cloud SQL supports the removal of the following networking options from an instance: Public IP from an instance with both private services access and public IP Public IP from an instance with public IP, private services access, and Private Service Connect Private Service Connect from an instance with both Private Service Connect and private services access Private Service Connect from an instance with Private Service Connect, private services access, and public IP Enable networking options for an instance You can enable Cloud SQL supports enabling the following connection options for instances: Private services access on an instance with public IP only Private Service Connect on an instance with private services access only Private Service Connect on an instance with both private services access and public IP Public IP on an instance with private services access only Limitations You can't create an instance with both a public IP address and Private Service Connect.

### "Configure performance capture \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-performance-capture](https://docs.cloud.google.com/sql/docs/mysql/configure-performance-capture)
- Source ID: `site-iam-reference`
- Final score: 200
- Re-rank relevance: N/A

Evidence snippets:
- For example: gcloud beta sql instances create my-instance \ --database-version = MYSQL 8 0 \ --edition = ENTERPRISE PLUS \ --tier = db-perf-optimized-N-4 \ --region = us-west1 \ --performance-capture-config = "enabled=true,probing-interval-seconds=30,probe-threshold=5,running-threads-threshold=10,transaction-duration-threshold=300" Update an existing instance To enable performance capture for an existing Cloud SQL instance, run the following command: gcloud beta sql instances patch INSTANCE NAME \ --performance-capture-config = "enabled=true, PROBE CONFIGURATION , PERFORMANCE CAPTURE THRESHOLDS " For the performance-capture-config flag, include enabled=true .
- Enable and configure performance capture You can enable performance capture when you create or update your Cloud SQL instance. gcloud Create and configure an instance To enable performance capture when you create your Cloud SQL instance, run the following command: gcloud beta sql instances create INSTANCE NAME \ --database-version = DATABASE VERSION \ --region = REGION \ --tier = TIER \ --edition = EDITION TYPE \ --performance-capture-config = "enabled=true, PROBE CONFIGURATION , PERFORMANCE CAPTURE THRESHOLDS " Replace the following: INSTANCE NAME : your instance name DATABASE VERSION : the database version.
- If you specify MYSQL 8 4 for the database version (or don't specify a database version), but the region you specify doesn't support Cloud SQL Enterprise Plus edition, then you must specify a region that supports Cloud SQL Enterprise Plus edition , or create an Cloud SQL Enterprise edition instance instead.
- If you specify MYSQL 8 4 for the database version (or don't specify a database version), but the region you specify doesn't support Cloud SQL Enterprise Plus edition, then you must specify a region that supports Cloud SQL Enterprise Plus edition , or create an Cloud SQL Enterprise edition instance instead.

