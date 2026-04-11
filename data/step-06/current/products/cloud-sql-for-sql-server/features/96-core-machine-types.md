---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.937Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "96-core machine types"
feature_slug: "96-core-machine-types"
latest_feature_date: "2020-03-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/create-instance"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/release-notes"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/choose-edition"
keywords:
  - "96"
  - "core"
  - "machine"
  - "types"
  - "sql"
  - "for"
  - "server"
  - "supports"
---

# 96-core machine types

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

Cloud SQL for SQL Server supports machine types with up to 96 CPU cores.

## Extended Definition

Cloud SQL for SQL Server supports machine types with up to 96 CPU cores.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- [https://docs.cloud.google.com/sql/docs/sqlserver/choose-edition](https://docs.cloud.google.com/sql/docs/sqlserver/choose-edition)

## Supporting Pages

### Create instances \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- Source ID: `site-docs-root`
- Final score: 236
- Re-rank relevance: N/A

Evidence snippets:
- Machine type vCPU/Memory Not applicable 1 vCPU, 3.75 GB 2 vCPUs, 8 GB 4 vCPUs, 16 GB 8 vCPUs, 32 GB Custom 1 to 32 vCPUs, 3.75 GB to 208 GB SQL Server 2017 Standard, SQL Server 2019 Standard, SQL Server 2022 Standard, and SQL Server 2025 Standard Machine type vCPU/Memory Not applicable 1 vCPU, 3.75 GB 2 vCPUs, 8 GB 4 vCPUs, 16 GB 8 vCPUs, 32 GB Custom 1 to 48 vCPUs, 3.75 GB to 312 GB SQL Server 2017 Enterprise, SQL Server 2019 Enterprise, SQL Server 2022 Enterprise, and SQL Server 2025 Enterprise Machine type vCPU/Memory Not applicable 1 vCPU, 3.75 GB 2 vCPUs, 8 GB 4 vCPUs, 16 GB 8 vCPUs, 32 GB Custom 2 to 96 vCPUs, 3.75 GB to 624 GB Performance-optimized (Cloud SQL Enterprise Plus only) 2 vCPUs, 16 GB 4 vCPUs, 32 GB 8 vCPUs, 64 GB 16 vCPUs, 128 GB 32 vCPUs, 256 GB 48 vCPUs, 384 GB 64 vCPUs, 512 GB 80 vCPUs, 640 GB 96 vCPUs, 768 GB 128 vCPUs, 864 GB Memory-optimized (Cloud SQL Enterprise Plus only) 4 vCPUs, 128 GB 8 vCPUs, 256 GB 16 vCPUs, 512 GB Simultaneous multithreading Simultaneous multithreading (SMT) on Cloud SQL for SQL Server lets you run two virtual CPUs (vCPUs) as independent, separate threads on one physical core.
- For example, the following string creates an instance with two vCPUs and 7,680 MB of memory: gcloud sql instances create myinstance \ --database-version = SQLSERVER 2017 STANDARD \ --region = us-central1 \ --cpu = 2 \ --memory = 7680MB \ --root-password = EXAMPLE PASSWORD \ --edition = ENTERPRISE For some sample values, see Sample machine types .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#instance", "state": "RUNNABLE", "databaseVersion": " DATABASE VERSION ", "settings": { "authorizedGaeApplications": [], "tier": " MACHINE TYPE ", "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "authorizedNetworks": [], "ipv4Enabled": true }, "locationPreference": { "zone": " ZONE ", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "backupConfiguration": { "startTime": "19:00", "kind": "sql#backupConfiguration", "enabled": true }, "settingsVersion": "1", "dataDiskSizeGb": "10" }, "etag": "--redacted--", "ipAddresses": [ { "type": "PRIMARY", " ipAddress ": " 10.0.0.1 " } ], "serverCaCert": { ... }, "instanceType": "CLOUD SQL INSTANCE", "project": " PROJECT ID ", "serviceAccountEmailAddress": "redacted@gcp-sa-cloud-sql.iam.gserviceaccount.com", "backendType": " BACKEND TYPE ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID ", "connectionName": " PROJECT ID:REGION:INSTANCE ID ", "name": " INSTANCE ID ", "region": " REGION ", "gceZone": " ZONE " } To see how the underlying REST API request is constructed for this task, see the APIs Explorer on the instances:insert page .
- The performance-optimized machine family provides the following machine types to choose from: Enterprise Plus machine type vCPUs Memory (GB) db-perf-optimized-N-2 2 16 db-perf-optimized-N-4 4 32 db-perf-optimized-N-8 8 64 db-perf-optimized-N-16 16 128 db-perf-optimized-N-32 32 256 db-perf-optimized-N-48 48 384 db-perf-optimized-N-64 64 512 db-perf-optimized-N-80 80 640 db-perf-optimized-N-96 96 768 db-perf-optimized-N-128 128 864 Memory-optimized machine family This machine family offers high memory to compute ratios for memory-intensive workloads with one vCPU per 32 GB RAM.

### Cloud SQL for SQL Server release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- Source ID: `site-docs-root`
- Final score: 216
- Re-rank relevance: N/A

Evidence snippets:
- March 24, 2020 Feature Cloud SQL now supports 96-core machine types for MySQL, Postgres, and SQL Server instances.
- Feature Cloud SQL for SQL Server now supports SQL Server 2025 ( GA ): SQL Server 2025 Standard SQL Server 2025 Enterprise SQL Server 2025 Express For more information, see Database versions and version policies and Choose a machine series .
- May 14, 2025 Feature Cloud SQL for SQL Server now supports TLS connections to Active Directory endpoints without requiring server certificate trust or the use of IP addresses.
- March 17, 2025 Feature Cloud SQL for SQL Server supports transparent data encryption (TDE) to encrypt data stored in your Cloud SQL for SQL Server instances.

### "Choose a Cloud SQL edition \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/choose-edition](https://docs.cloud.google.com/sql/docs/sqlserver/choose-edition)
- Source ID: `site-iam-reference`
- Final score: 210
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud SQL key features The following table provides an overview of key feature enhancements available in Cloud SQL Enterprise Plus edition compared to Cloud SQL Enterprise edition: Cloud SQL Enterprise Plus edition Cloud SQL Enterprise edition Database versions SQL Server 2025 Enterprise SQL Server 2022 Enterprise SQL Server 2019 Enterprise SQL Server 2025 (Standard, Enterprise, and Express) SQL Server 2022 (Standard, Enterprise, Express, and Web) SQL Server 2019 (Standard, Enterprise, Express, and Web) SQL Server 2017 (Standard, Enterprise, Express, and Web) Availability SLA 99.99% (includes maintenance) 99.95% (excludes maintenance) Performance Machine series N2 Memory-optimized-N2 General purpose dedicated core N4 Machine configuration limits N2 machine series Up to 128 vCPU Up to 864 GB RAM 1:8 core:memory ratio Memory-optimized-N machine series Up to 16 vCPU Up to 512 GB RAM 1:32 core:memory ratio General purpose dedicated core Up to 96 vCPU Up to 624 GB RAM 1:6.5 core:memory ratio N4 machine series Up to 80 vCPU Up to 624 GB RAM 1:8 core:memory ratio Data cache Yes No Point-in-time log retention Up to 35 days Up to 7 days Availability Maintenance downtime Planned operations downtime Sub-second downtime Few minutes Advanced disaster recovery (DR) Yes No Write endpoint for advanced disaster recovery (DR) Yes No Write endpoint connectivity Yes No Observability AI-assisted troubleshooting Yes No Query insights 30 day metric retention 1 MB query length 200 query plan sample maximum Wait event analysis Index advisor recommendations 7 day metric retention 4500 bytes query length 20 query plan sample maximum Enhanced recommenders Yes No What's next Plan and prepare to create a new instance.
- Cloud SQL Enterprise edition : provides all core capabilities of Cloud SQL and is suitable for applications with less stringent availability and performance requirements.
- Cloud SQL for SQL Server editions use a tier-based pricing model.
- Home Documentation Databases Cloud SQL SQL Server Guides Send feedback Choose a Cloud SQL edition Stay organized with collections Save and categorize content based on your preferences.

