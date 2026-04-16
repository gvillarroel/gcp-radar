---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.550Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Cloud SQL Enterprise edition"
feature_slug: "cloud-sql-enterprise-edition"
latest_feature_date: "2024-08-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/create-instance"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/pricing"
keywords:
  - "sql"
  - "enterprise"
  - "edition"
  - "offers"
  - "server"
  - "existing"
  - "instances"
  - "mapped"
---

# Cloud SQL Enterprise edition

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL offers the Enterprise edition for SQL Server with existing instances mapped to this edition by default.

## Extended Definition

Cloud SQL offers the Enterprise edition for SQL Server with existing instances mapped to this edition by default.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore)
- [https://docs.cloud.google.com/sql/docs/sqlserver/pricing](https://docs.cloud.google.com/sql/docs/sqlserver/pricing)

## Supporting Pages

### Create instances \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: N/A

Evidence snippets:
- For example, the following string creates an instance with two vCPUs and 7,680 MB of memory: gcloud sql instances create myinstance \ --database-version = SQLSERVER 2017 STANDARD \ --region = us-central1 \ --cpu = 2 \ --memory = 7680MB \ --root-password = EXAMPLE PASSWORD \ --edition = ENTERPRISE For some sample values, see Sample machine types .
- With Cloud SQL Enterprise Plus edition, you choose from two machine families: Performance-optimized : offers a balanced price performance for various SQL Server workloads with a memory-to-compute ratio of 1 vCPU:8 GB RAM.
- Data cache Enable data cache By default, the option to enable data cache is selected automatically for Cloud SQL for SQL Server Enterprise Plus edition instances.
- HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "rootPassword": " PASSWORD ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE ", "backupConfiguration": { "enabled": true }, "dataCacheConfig": { "dataCacheEnabled": DATA CACHE ENABLED }, "ipConfiguration": { "privateNetwork": " PRIVATE NETWORK ", "authorizedNetworks": [ AUTHORIZED NETWORKS ], "ipv4Enabled": false, "serverCaMode": " CA MODE ", "serverCertificateRotationMode": " SERVER CERTIFICATE ROTATION MODE ", "customSubjectAlternativeNames": " DNS NAMES " } }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

### "Restore an instance overview \_|\_ Cloud SQL for SQL Server \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore)
- Source ID: `site-docs-reference-required-4`
- Final score: 154
- Re-rank relevance: N/A

Evidence snippets:
- Only Cloud SQL Enterprise Plus edition instances that you upgraded from Cloud SQL Enterprise edition before April 1, 2024 and had PITR enabled before May 31, 2024 continue to store their logs for PITR on disk .
- If a value for this parameter isn't set, then the default transaction log retention period is 14 days for Cloud SQL Enterprise Plus edition instances and 7 days for Cloud SQL Enterprise edition instances.
- Since this launch, the following conditions apply: All Cloud SQL Enterprise Plus edition instances store their transaction logs used for PITR in Cloud Storage.
- All Cloud SQL Enterprise edition instances that you create with PITR enabled after May 31, 2024 store logs used for PITR in Cloud Storage.

### Cloud SQL pricing | Google Cloud

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/pricing](https://docs.cloud.google.com/sql/docs/sqlserver/pricing)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- Pricing for Cloud SQL depends on your instance type: MySQL and PostgreSQL SQL Server MySQL and PostgreSQL pricing Cloud SQL pricing is composed of the following charges: CPU and memory pricing Storage and networking pricing Instance pricing Cloud DNS pricing Extended support pricing CPU and memory pricing For dedicated-core instances, you choose the number of CPUs and the amount of memory you want, up to 96 CPUs and 624 GiB of memory for Enterprise edition and up to 128 CPUs and 864 GiB of memory for Enterprise Plus edition.
- For Cloud SQL Enterprise Plus edition for SQL Server instances, you can also choose from performance-optimized machines (up to 128 CPUs and 864 GiB of memory) and memory-optimized machines (up to 16 CPUs and 512 GiB of memory).
- For Cloud SQL Enterprise Plus edition instances, you can choose from Performance-optimized machines (up to 128 CPUs and 864 GiB of memory) and Memory-optimized machines (up to 16 CPUs and 512 GiB of memory).
- Cloud SQL Enterprise edition and Cloud SQL Enterprise Plus edition are supported by Cloud SQL for MySQL, Cloud SQL for PostgreSQL, and Cloud SQL for SQL Server.

