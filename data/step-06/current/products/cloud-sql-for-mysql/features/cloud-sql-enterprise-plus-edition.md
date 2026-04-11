---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.876Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Cloud SQL Enterprise Plus edition"
feature_slug: "cloud-sql-enterprise-plus-edition"
latest_feature_date: "2023-07-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/choose-edition"
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-performance-capture"
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
keywords:
  - "sql"
  - "enterprise"
  - "plus"
  - "edition"
  - "provides"
  - "with"
  - "distinct"
  - "performance"
---

# Cloud SQL Enterprise Plus edition

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL Enterprise Plus edition provides a Cloud SQL edition with distinct performance and availability characteristics.

## Extended Definition

Cloud SQL Enterprise Plus edition provides a Cloud SQL edition with distinct performance and availability characteristics.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/choose-edition](https://docs.cloud.google.com/sql/docs/mysql/choose-edition)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-performance-capture](https://docs.cloud.google.com/sql/docs/mysql/configure-performance-capture)
- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)

## Supporting Pages

### "Choose a Cloud SQL edition \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/choose-edition](https://docs.cloud.google.com/sql/docs/mysql/choose-edition)
- Source ID: `site-iam-reference`
- Final score: 228
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud SQL Enterprise edition : provides all core capabilities of Cloud SQL and is suitable for applications with less stringent availability and performance requirements.
- Cloud SQL offers the following editions: Cloud SQL Enterprise Plus edition : provides enhanced performance, availability, and observability to run applications.
- Cloud SQL key features The following table provides an overview of key feature enhancements available in Cloud SQL Enterprise Plus edition compared to Cloud SQL Enterprise edition: Cloud SQL Enterprise Plus edition Cloud SQL Enterprise edition Database versions MySQL 8.0, 8.4 Note: If the database version for your instance is MySQL 8.4, then the default Cloud SQL edition is Enterprise Plus.
- For details about Cloud SQL editions and the enhancements offered by the Cloud SQL Enterprise Plus edition, see Cloud SQL editions overview .

### "Configure performance capture \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-performance-capture](https://docs.cloud.google.com/sql/docs/mysql/configure-performance-capture)
- Source ID: `site-iam-reference`
- Final score: 222
- Re-rank relevance: N/A

Evidence snippets:
- For example: gcloud beta sql instances create my-instance \ --database-version = MYSQL 8 0 \ --edition = ENTERPRISE PLUS \ --tier = db-perf-optimized-N-4 \ --region = us-west1 \ --performance-capture-config = "enabled=true,probing-interval-seconds=30,probe-threshold=5,running-threads-threshold=10,transaction-duration-threshold=300" Update an existing instance To enable performance capture for an existing Cloud SQL instance, run the following command: gcloud beta sql instances patch INSTANCE NAME \ --performance-capture-config = "enabled=true, PROBE CONFIGURATION , PERFORMANCE CAPTURE THRESHOLDS " For the performance-capture-config flag, include enabled=true .
- HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE ", }, "performanceCaptureConfig": { "enabled": true, "probingIntervalSeconds": PROBING INTERVAL SECONDS , "probeThreshold": PROBE THRESHOLD , "runningThreadsThreshold": RUNNING THREADS THRESHOLD , "secondsBehindSourceThreshold": SECONDS BEHIND SOURCE THRESHOLD , "transactionDurationThreshold": TRANSACTION DURATION THRESHOLD }, } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE " }, "performanceCaptureConfig": { "enabled": true, "probingIntervalSeconds": PROBING INTERVAL SECONDS , "probeThreshold": PROBE THRESHOLD , "runningThreadsThreshold": RUNNING THREADS THRESHOLD , "secondsBehindSourceThreshold": SECONDS BEHIND SOURCE THRESHOLD , "transactionDurationThreshold": TRANSACTION DURATION THRESHOLD } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- If you specify MYSQL 8 4 for the database version (or don't specify a database version), but the region you specify doesn't support Cloud SQL Enterprise Plus edition, then you must specify a region that supports Cloud SQL Enterprise Plus edition , or create an Cloud SQL Enterprise edition instance instead.

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- April 09, 2025 Feature Cloud SQL Enterprise Plus edition now supports a new machine series called the C4A machine series, which provides optimized price-performance and delivers predictable high performance for high demand Cloud SQL workloads.
- The C4A machine series is supported for Cloud SQL Enterprise Plus edition instances, and provides optimized price-performance and delivers predictable high performance for high demand Cloud SQL workloads.
- April 08, 2024 Feature Cloud SQL Enterprise Plus edition primary instances with high availability (HA) now require less than one second of downtime for planned maintenance .
- April 02, 2024 Feature You can now scale up the compute size (vCPU, memory) of a Cloud SQL Enterprise Plus edition primary instance with near-zero downtime.

