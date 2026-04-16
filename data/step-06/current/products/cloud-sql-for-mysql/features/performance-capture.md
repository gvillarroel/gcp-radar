---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.878Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Performance capture"
feature_slug: "performance-capture"
latest_feature_date: "2026-01-23"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-performance-capture"
  - "https://docs.cloud.google.com/sql/docs/mysql/features"
  - "https://docs.cloud.google.com/sql/docs/mysql/1st-2nd-gen-differences"
keywords:
  - "performance"
  - "capture"
  - "feature"
  - "captures"
  - "diagnostic"
  - "snapshots"
  - "database"
  - "state"
---

# Performance capture

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

This feature captures diagnostic snapshots of database state when configurable performance thresholds are reached.

## Extended Definition

This feature captures diagnostic snapshots of database state when configurable performance thresholds are reached.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/configure-performance-capture](https://docs.cloud.google.com/sql/docs/mysql/configure-performance-capture)
- [https://docs.cloud.google.com/sql/docs/mysql/features](https://docs.cloud.google.com/sql/docs/mysql/features)
- [https://docs.cloud.google.com/sql/docs/mysql/1st-2nd-gen-differences](https://docs.cloud.google.com/sql/docs/mysql/1st-2nd-gen-differences)

## Supporting Pages

### "Configure performance capture \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-performance-capture](https://docs.cloud.google.com/sql/docs/mysql/configure-performance-capture)
- Source ID: `site-docs-reference-required-5`
- Final score: 214
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE ", }, "performanceCaptureConfig": { "enabled": true, "probingIntervalSeconds": PROBING INTERVAL SECONDS , "probeThreshold": PROBE THRESHOLD , "runningThreadsThreshold": RUNNING THREADS THRESHOLD , "secondsBehindSourceThreshold": SECONDS BEHIND SOURCE THRESHOLD , "transactionDurationThreshold": TRANSACTION DURATION THRESHOLD }, } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE " }, "performanceCaptureConfig": { "enabled": true, "probingIntervalSeconds": PROBING INTERVAL SECONDS , "probeThreshold": PROBE THRESHOLD , "runningThreadsThreshold": RUNNING THREADS THRESHOLD , "secondsBehindSourceThreshold": SECONDS BEHIND SOURCE THRESHOLD , "transactionDurationThreshold": TRANSACTION DURATION THRESHOLD } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- For example: gcloud beta sql instances create my-instance \ --database-version = MYSQL 8 0 \ --edition = ENTERPRISE PLUS \ --tier = db-perf-optimized-N-4 \ --region = us-west1 \ --performance-capture-config = "enabled=true,probing-interval-seconds=30,probe-threshold=5,running-threads-threshold=10,transaction-duration-threshold=300" Update an existing instance To enable performance capture for an existing Cloud SQL instance, run the following command: gcloud beta sql instances patch INSTANCE NAME \ --performance-capture-config = "enabled=true, PROBE CONFIGURATION , PERFORMANCE CAPTURE THRESHOLDS " For the performance-capture-config flag, include enabled=true .
- Enable and configure performance capture You can enable performance capture when you create or update your Cloud SQL instance. gcloud Create and configure an instance To enable performance capture when you create your Cloud SQL instance, run the following command: gcloud beta sql instances create INSTANCE NAME \ --database-version = DATABASE VERSION \ --region = REGION \ --tier = TIER \ --edition = EDITION TYPE \ --performance-capture-config = "enabled=true, PROBE CONFIGURATION , PERFORMANCE CAPTURE THRESHOLDS " Replace the following: INSTANCE NAME : your instance name DATABASE VERSION : the database version.

### Cloud SQL for MySQL features \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/features](https://docs.cloud.google.com/sql/docs/mysql/features)
- Source ID: `site-docs-root`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Cloud SQL for MySQL features Stay organized with collections Save and categorize content based on your preferences.
- General MySQL features supported for Cloud SQL Fully managed MySQL Community Edition databases in the cloud.
- In addition, Cloud SQL for MySQL doesn't grant the following privileges introduced in MySQL 8.4: TRANSACTION GTID TAG TELEMETRY LOG ADMIN MySQL plugins unsupported for Cloud SQL InnoDB memcached plugin X plugin Clone plugin InnoDB data-at-rest encryption validate password component MySQL statements unsupported for Cloud SQL The following SQL statements generate an error with the Error 1290: The MySQL server is running with the Google option so it cannot execute this statement message: LOAD DATA INFILE Note: LOAD DATA LOCAL INFILE is supported.
- SELECT statements Transactions or statements that update both transactional and nontransactional tables The following MySQL statement is unsupported for Cloud SQL for MySQL 5.6 and 5.7, but is supported for Cloud SQL for MySQL 8.0: CREATE TEMPORARY TABLE statements inside transactions For more information, see the MySQL documentation .

### Cloud SQL for MySQL features \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/1st-2nd-gen-differences](https://docs.cloud.google.com/sql/docs/mysql/1st-2nd-gen-differences)
- Source ID: `site-docs-reference-3`
- Final score: 100
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Cloud SQL for MySQL features Stay organized with collections Save and categorize content based on your preferences.
- General MySQL features supported for Cloud SQL Fully managed MySQL Community Edition databases in the cloud.
- In addition, Cloud SQL for MySQL doesn't grant the following privileges introduced in MySQL 8.4: TRANSACTION GTID TAG TELEMETRY LOG ADMIN MySQL plugins unsupported for Cloud SQL InnoDB memcached plugin X plugin Clone plugin InnoDB data-at-rest encryption validate password component MySQL statements unsupported for Cloud SQL The following SQL statements generate an error with the Error 1290: The MySQL server is running with the Google option so it cannot execute this statement message: LOAD DATA INFILE Note: LOAD DATA LOCAL INFILE is supported.
- SELECT statements Transactions or statements that update both transactional and nontransactional tables The following MySQL statement is unsupported for Cloud SQL for MySQL 5.6 and 5.7, but is supported for Cloud SQL for MySQL 8.0: CREATE TEMPORARY TABLE statements inside transactions For more information, see the MySQL documentation .

