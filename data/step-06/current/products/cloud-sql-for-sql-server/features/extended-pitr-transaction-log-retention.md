---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.549Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Extended PITR transaction log retention"
feature_slug: "extended-pitr-transaction-log-retention"
latest_feature_date: "2024-09-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/create-instance"
keywords:
  - "extended"
  - "pitr"
  - "transaction"
  - "log"
  - "retention"
  - "sql"
  - "enterprise"
  - "plus"
---

# Extended PITR transaction log retention

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL Enterprise Plus supports retaining point-in-time recovery transaction logs for 1 to 35 days.

## Extended Definition

Cloud SQL Enterprise Plus supports retaining point-in-time recovery transaction logs for 1 to 35 days.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore)
- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)

## Supporting Pages

### "Configure point-in-time recovery (PITR) \_|\_ Cloud SQL for SQL Server \_\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/configure-pitr)
- Source ID: `site-docs-reference-required-4`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Unless specified otherwise, PITR is enabled by default. resource "google sql database instance" "enterprise plus" { name = "sqlserver-enterprise-plus-instance-pitr" region = "asia-northeast1" database version = "SQLSERVER 2019 ENTERPRISE" root password = "INSERT-PASSWORD-HERE" settings { tier = "db-perf-optimized-N-2" edition = "ENTERPRISE PLUS" backup configuration { enabled = true } } Setting the deletion protection flag to true ensures you can't accidentally delete the instance using Terraform.
- You can configure PITR for any existing instance by doing the following: Enable PITR Disable PITR Set transaction log retention Check storage location of transaction logs used in PITR Before you begin Before you begin, review the following: If you enable PITR on an existing instance, then the instance restarts.
- Enable PITR for Cloud SQL Enterprise Plus edition Use the following Terraform code sample to create a Cloud SQL Enterprise Plus edition instance with PITR enabled: Creates a SQL SERVER Enterprise Plus edition instance.
- PITR is enabled by default when you create a Cloud SQL Enterprise Plus edition instance, regardless of the method used.

### "Restore an instance overview \_|\_ Cloud SQL for SQL Server \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restore)
- Source ID: `site-docs-reference-required-4`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- If you upgrade a Cloud SQL Enterprise edition instance after May 31, 2024 that stores transaction logs for PITR on disk to Cloud SQL Enterprise Plus edition, then the upgrade process switches the storage location of the transaction logs used for PITR to Cloud Storage for you.
- If a value for this parameter isn't set, then the default transaction log retention period is 14 days for Cloud SQL Enterprise Plus edition instances and 7 days for Cloud SQL Enterprise edition instances.
- For example, if your Cloud SQL Enterprise Plus edition instance has PITR retention set to 14 days, then the latest PITR log will be deleted 14 days after instance deletion.
- Since this launch, the following conditions apply: All Cloud SQL Enterprise Plus edition instances store their transaction logs used for PITR in Cloud Storage.

### Create instances \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- Source ID: `site-docs-root`
- Final score: 136
- Re-rank relevance: N/A

Evidence snippets:
- PITR is enabled by default during instance creation in the following conditions: In Cloud SQL Enterprise Plus edition : PITR is enabled by default, regardless of how you create the instance.
- PITR is enabled by default during instance creation in the following conditions: In Cloud SQL Enterprise Plus edition : PITR is enabled by default, regardless of how you create the instance.
- Machine type vCPU/Memory Not applicable 1 vCPU, 3.75 GB 2 vCPUs, 8 GB 4 vCPUs, 16 GB 8 vCPUs, 32 GB Custom 1 to 32 vCPUs, 3.75 GB to 208 GB SQL Server 2017 Standard, SQL Server 2019 Standard, SQL Server 2022 Standard, and SQL Server 2025 Standard Machine type vCPU/Memory Not applicable 1 vCPU, 3.75 GB 2 vCPUs, 8 GB 4 vCPUs, 16 GB 8 vCPUs, 32 GB Custom 1 to 48 vCPUs, 3.75 GB to 312 GB SQL Server 2017 Enterprise, SQL Server 2019 Enterprise, SQL Server 2022 Enterprise, and SQL Server 2025 Enterprise Machine type vCPU/Memory Not applicable 1 vCPU, 3.75 GB 2 vCPUs, 8 GB 4 vCPUs, 16 GB 8 vCPUs, 32 GB Custom 2 to 96 vCPUs, 3.75 GB to 624 GB Performance-optimized (Cloud SQL Enterprise Plus only) 2 vCPUs, 16 GB 4 vCPUs, 32 GB 8 vCPUs, 64 GB 16 vCPUs, 128 GB 32 vCPUs, 256 GB 48 vCPUs, 384 GB 64 vCPUs, 512 GB 80 vCPUs, 640 GB 96 vCPUs, 768 GB 128 vCPUs, 864 GB Memory-optimized (Cloud SQL Enterprise Plus only) 4 vCPUs, 128 GB 8 vCPUs, 256 GB 16 vCPUs, 512 GB Simultaneous multithreading Simultaneous multithreading (SMT) on Cloud SQL for SQL Server lets you run two virtual CPUs (vCPUs) as independent, separate threads on one physical core.
- Use the gcloud sql instances create command to create the instance: For Cloud SQL Enterprise Plus edition instances: gcloud sql instances create INSTANCE NAME \ --database-version = DATABASE VERSION \ --region = REGION \ --tier = TIER \ --root-password = ROOT PASSWORD \ --edition = ENTERPRISE PLUS For Cloud SQL Enterprise edition instances: gcloud sql instances create INSTANCE NAME \ --database-version = DATABASE VERSION \ --region = REGION \ --cpu = NUMBER OF vCPUs \ --memory = MEMORY SIZE \ --root-password = ROOT PASSWORD \ --edition = ENTERPRISE Don't include sensitive or personally identifiable information in your instance name.

