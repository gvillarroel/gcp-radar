---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.894Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "AI-assisted troubleshooting"
feature_slug: "ai-assisted-troubleshooting"
latest_feature_date: "2025-04-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/editions-intro"
  - "https://docs.cloud.google.com/sql/docs/mysql/troubleshooting"
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-performance-capture"
keywords:
  - "ai"
  - "assisted"
  - "troubleshooting"
  - "helps"
  - "diagnose"
  - "complex"
  - "database"
  - "performance"
---

# AI-assisted troubleshooting

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

AI-assisted troubleshooting helps diagnose complex database performance issues in Cloud SQL Enterprise Plus with guided analysis.

## Extended Definition

AI-assisted troubleshooting helps diagnose complex database performance issues in Cloud SQL Enterprise Plus with guided analysis.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/editions-intro](https://docs.cloud.google.com/sql/docs/editions-intro)
- [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-performance-capture](https://docs.cloud.google.com/sql/docs/mysql/configure-performance-capture)

## Supporting Pages

### "Cloud SQL editions overview \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/editions-intro](https://docs.cloud.google.com/sql/docs/editions-intro)
- Source ID: `site-docs-reference-3`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- AI-assisted troubleshooting : resolve complex database performance issues like slow queries and high database load with predictive and prescriptive troubleshooting.
- MySQL 5.6, 5.7, 8.0, 8.4 Availability SLA 99.99% (includes maintenance) 99.95% (excludes maintenance) Performance Machine series N2 C4A General purpose shared core General purpose dedicated core N4 Machine configuration limits N2 machine series Up to 128 vCPU Up to 864 GB RAM 1:8 core:memory ratio C4A machine series Up to 72 vCPU Up to 576 GB RAM 1:8 core:memory ratio General purpose shared core 1 vCPU Up to 1.7 GB RAM 1:6.5 core:memory ratio General purpose dedicated core Up to 96 vCPU Up to 624 GB RAM 1:6.5 core:memory ratio N4 machine series Up to 80 vCPU Up to 624 GB RAM 1:8 core:memory ratio Data cache Yes No Optimized writes Yes No Point-in-time log retention Up to 35 days Up to 7 days Read pools Yes No Availability Maintenance downtime Planned operations downtime Sub-second downtime Few minutes Advanced disaster recovery (DR) Yes No Write endpoint for advanced disaster recovery (DR) Yes No Write endpoint connectivity Yes No Managed Connection Pooling Yes No Observability AI-assisted troubleshooting Yes No Query insights 30 day metric retention 1 MB query length 200 query plan sample maximum Wait event analysis Index advisor recommendations 7 day metric retention 4500 bytes query length 20 query plan sample maximum Enhanced recommenders Yes No Cloud SQL Enterprise Plus edition enhancements Cloud SQL Enterprise Plus edition is ideal for applications that require the best performance, availability, and observability.
- Cloud SQL Enterprise Plus edition and Cloud SQL Enterprise edition provide different levels of database performance availability and data protection capabilities.
- Cloud SQL editions features The following table provides an overview of key features enhancements available for Cloud SQL Enterprise Plus edition when compared to Cloud SQL Enterprise edition: Cloud SQL Enterprise Plus edition Cloud SQL Enterprise edition Database versions MySQL 8.0, 8.4 Note: If the database version for your instance is MySQL 8.4, then the default Cloud SQL edition is Enterprise Plus.

### Troubleshoot \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- To download the logs as JSON: gcloud logging read \ "resource.type=cloudsql database \ AND logName=projects/ PROJECT ID \ /logs/cloudsql.googleapis.com%2F LOG NAME " \ --format json \ --project = PROJECT ID \ --freshness = "1d" \ downloaded-log.json To download the logs as TEXT: gcloud logging read \ "resource.type=cloudsql database \ AND logName=projects/ PROJECT ID \ /logs/cloudsql.googleapis.com%2F LOG NAME " \ --format json \ --project = PROJECT ID \ --freshness = "1d" jq -rnc --stream 'fromstream(1 truncate stream(inputs)) \ .textPayload' \ --order = asc downloaded-log.txt Manage instances Issue Troubleshooting Slow performance after restarting MySQL.
- MySQL PostgreSQL SQL Server Check if your question or problem has already been addressed on one of the following pages: FAQ Known issues Error messages Diagnose issues Debug connection issues Orphan tables Issues updating storage capacity Topics in this page include: Backup and recovery Cancel import and export Cloning Connectivity Creating instances External primary External replica Flags High availability Import and export Logging Managing instances Private Service Connect Replication Backup and recovery Issue Troubleshooting You can't see the current operation's status.
- Connect to the database and execute the following query: SELECT TABLE SCHEMA, TABLE NAME, sum(DATA LENGTH+INDEX LENGTH)/pow(1024,2) FROM INFORMATION SCHEMA.TABLES WHERE TABLE SCHEMA NOT IN ('PERFORMANCE SCHEMA','INFORMATION SCHEMA','SYS','MYSQL') GROUP BY TABLE SCHEMA, TABLE NAME; mysqld got a signal 11.
- Check the location of the reader and database; latency affects read performance even more than write performance To reduce the latency the recommendation is to locate both the source and destination resources in the same region.

### "Configure performance capture \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-performance-capture](https://docs.cloud.google.com/sql/docs/mysql/configure-performance-capture)
- Source ID: `site-docs-reference-required-5`
- Final score: 96
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Performance capture lets you diagnose transient issues with your database by capturing detailed metrics for your instance when performance is degraded.
- HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE ", }, "performanceCaptureConfig": { "enabled": true, "probingIntervalSeconds": PROBING INTERVAL SECONDS , "probeThreshold": PROBE THRESHOLD , "runningThreadsThreshold": RUNNING THREADS THRESHOLD , "secondsBehindSourceThreshold": SECONDS BEHIND SOURCE THRESHOLD , "transactionDurationThreshold": TRANSACTION DURATION THRESHOLD }, } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE " }, "performanceCaptureConfig": { "enabled": true, "probingIntervalSeconds": PROBING INTERVAL SECONDS , "probeThreshold": PROBE THRESHOLD , "runningThreadsThreshold": RUNNING THREADS THRESHOLD , "secondsBehindSourceThreshold": SECONDS BEHIND SOURCE THRESHOLD , "transactionDurationThreshold": TRANSACTION DURATION THRESHOLD } } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- For example: gcloud beta sql instances create my-instance \ --database-version = MYSQL 8 0 \ --edition = ENTERPRISE PLUS \ --tier = db-perf-optimized-N-4 \ --region = us-west1 \ --performance-capture-config = "enabled=true,probing-interval-seconds=30,probe-threshold=5,running-threads-threshold=10,transaction-duration-threshold=300" Update an existing instance To enable performance capture for an existing Cloud SQL instance, run the following command: gcloud beta sql instances patch INSTANCE NAME \ --performance-capture-config = "enabled=true, PROBE CONFIGURATION , PERFORMANCE CAPTURE THRESHOLDS " For the performance-capture-config flag, include enabled=true .

