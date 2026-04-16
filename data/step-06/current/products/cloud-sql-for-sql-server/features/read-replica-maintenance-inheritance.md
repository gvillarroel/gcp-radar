---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.564Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Read replica maintenance inheritance"
feature_slug: "read-replica-maintenance-inheritance"
latest_feature_date: "2023-03-28"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/create-instance"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics"
keywords:
  - "read"
  - "replica"
  - "maintenance"
  - "inheritance"
  - "sql"
  - "replicas"
  - "follow"
  - "primary"
---

# Read replica maintenance inheritance

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL read replicas follow the primary instance maintenance settings and are maintained before the primary instance; Read replicas inherit maintenance settings from the primary instance, including window, rescheduling, and deny periods, and are maintained before the primary.

## Extended Definition

Cloud SQL read replicas follow the primary instance maintenance settings and are maintained before the primary instance; Read replicas inherit maintenance settings from the primary instance, including window, rescheduling, and deny periods, and are maintained before the primary.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools](https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools)
- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics)

## Supporting Pages

### About read pools \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools](https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools)
- Source ID: `site-docs-reference-required-4`
- Final score: 193
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Like read replicas, read pools receive maintenance during the primary instance's maintenance window.
- A read pool receives maintenance before its primary instance, similar to read replicas.
- In addition to operations that aren't supported on read replicas, the following operations aren't supported on read pools: Enable and disable replication Customer-managed Active Directory Managed Microsoft AD Promote replica Restart Import Export Failover Re-encrypt Clone SSL/TLS certificates with shared CA or customer-managed CA can't be used with a read pool.
- The following types of updates aren't supported: While read pools still receive Cloud SQL maintenance updates, you can't update your read pool or its associated primary instance to a new major database version.

### Cloud SQL metrics \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics)
- Source ID: `site-api-reference`
- Final score: 151
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- After sampling, data is not visible for up to 165 seconds. database/mysql/replication/slave io running state GA (project) Slave I/O thread running state GAUGE , BOOL , cloudsql database Indicates whether the I/O thread for reading the primary's binary log is running.
- After sampling, data is not visible for up to 165 seconds. database/mysql/replication/slave io running GA (project) Slave I/O thread running GAUGE , STRING , cloudsql database Indicates whether the I/O thread for reading the primary's binary log is running.
- After sampling, data is not visible for up to 165 seconds. database/mysql/replication/seconds behind master GA (project) Replication lag GAUGE , INT64 , s cloudsql database Number of seconds the read replica is behind its primary (approximation).
- After sampling, data is not visible for up to 165 seconds. database/replication/replica lag GA (project) Replication lag GAUGE , DOUBLE , s cloudsql database Number of seconds the read replica is behind its primary (approximation).

### Create instances \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- Source ID: `site-docs-root`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#instance", "state": "RUNNABLE", "databaseVersion": " DATABASE VERSION ", "settings": { "authorizedGaeApplications": [], "tier": " MACHINE TYPE ", "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "authorizedNetworks": [], "ipv4Enabled": true }, "locationPreference": { "zone": " ZONE ", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "backupConfiguration": { "startTime": "19:00", "kind": "sql#backupConfiguration", "enabled": true }, "settingsVersion": "1", "dataDiskSizeGb": "10" }, "etag": "--redacted--", "ipAddresses": [ { "type": "PRIMARY", " ipAddress ": " 10.0.0.1 " } ], "serverCaCert": { ... }, "instanceType": "CLOUD SQL INSTANCE", "project": " PROJECT ID ", "serviceAccountEmailAddress": "redacted@gcp-sa-cloud-sql.iam.gserviceaccount.com", "backendType": " BACKEND TYPE ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID ", "connectionName": " PROJECT ID:REGION:INSTANCE ID ", "name": " INSTANCE ID ", "region": " REGION ", "gceZone": " ZONE " } To see how the underlying REST API request is constructed for this task, see the APIs Explorer on the instances:insert page .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#instance", "state": "RUNNABLE", "databaseVersion": " DATABASE VERSION ", "settings": { "authorizedGaeApplications": [], "tier": " MACHINE TYPE ", "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "authorizedNetworks": [], "ipv4Enabled": true }, "locationPreference": { "zone": " ZONE ", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "backupConfiguration": { "startTime": "19:00", "kind": "sql#backupConfiguration", "enabled": true }, "settingsVersion": "1", "dataDiskSizeGb": "10" }, "etag": "--redacted--", "ipAddresses": [ { "type": "PRIMARY", " ipAddress ": " 10.0.0.1 " } ], "serverCaCert": { ... }, "instanceType": "CLOUD SQL INSTANCE", "project": " PROJECT ID ", "serviceAccountEmailAddress": "redacted@gcp-sa-cloud-sql.iam.gserviceaccount.com", "backendType": " BACKEND TYPE ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID ", "connectionName": " PROJECT ID:REGION:INSTANCE ID ", "name": " INSTANCE ID ", "region": " REGION ", "gceZone": " ZONE " } REST v1beta4 1.
- Read replicas are counted as instances.
- Note: Cloud SQL generates a write endpoint automatically for your Cloud SQL Enterprise Plus edition instance if you do the following: If you haven't already enabled the Cloud DNS API, enable the Cloud DNS API for your Google Cloud project.

