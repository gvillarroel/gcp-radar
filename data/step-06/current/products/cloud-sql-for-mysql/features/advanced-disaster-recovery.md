---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.827Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Advanced disaster recovery"
feature_slug: "advanced-disaster-recovery"
latest_feature_date: "2024-11-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/choose-edition"
keywords:
  - "advanced"
  - "disaster"
  - "recovery"
  - "provides"
  - "capabilities"
  - "for"
  - "sql"
  - "enterprise"
---

# Advanced disaster recovery

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Advanced disaster recovery provides disaster recovery capabilities for Cloud SQL Enterprise Plus edition instances; Advanced disaster recovery lets Cloud SQL Enterprise Plus users designate a cross-region DR replica, perform failover, and restore the original deployment with zero-data-loss switchover.

## Extended Definition

Advanced disaster recovery provides disaster recovery capabilities for Cloud SQL Enterprise Plus edition instances; Advanced disaster recovery lets Cloud SQL Enterprise Plus users designate a cross-region DR replica, perform failover, and restore the original deployment with zero-data-loss switchover.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/choose-edition](https://docs.cloud.google.com/sql/docs/mysql/choose-edition)

## Supporting Pages

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 252
- Re-rank relevance: N/A

Evidence snippets:
- April 04, 2024 Feature For Cloud SQL Enterprise Plus edition , you can now use advanced disaster recovery (DR) to simplify recovery and fallback processes after you perform a cross-regional failover.
- May 15, 2025 Feature You can now use advanced disaster recovery (DR) for your Private Service Connect (PSC) enabled Cloud SQL Enterprise Plus edition instances.
- November 19, 2024 Feature For Cloud SQL Enterprise Plus edition instances, advanced disaster recovery (DR) is now generally available (GA) .
- April 01, 2024 Change If your Cloud SQL Enterprise edition instance stores the transaction logs used for point-in-time recovery (PITR) on disk, then when you do an in-place upgrade to Cloud SQL Enterprise Plus edition, the storage location for the transaction logs is switched to Cloud Storage.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 208
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- April 04, 2024 Cloud SQL for MySQL Feature For Cloud SQL Enterprise Plus edition , you can now use advanced disaster recovery (DR) to simplify recovery and fallback processes after you perform a cross-regional failover.
- Feature For Cloud SQL Enterprise Plus edition instances, you can now use advanced disaster recovery (DR) to simplify recovery and fallback processes after you perform a cross-regional failover.
- May 15, 2025 Cloud SQL for MySQL Feature You can now use advanced disaster recovery (DR) for your Private Service Connect (PSC) enabled Cloud SQL Enterprise Plus edition instances.
- Cloud SQL for SQL Server Feature You can now use advanced disaster recovery (DR) for your Private Service Connect (PSC) enabled Cloud SQL Enterprise Plus edition instances.

### "Choose a Cloud SQL edition \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/choose-edition](https://docs.cloud.google.com/sql/docs/mysql/choose-edition)
- Source ID: `site-iam-reference`
- Final score: 198
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- MySQL 5.6, 5.7, 8.0, 8.4 Availability SLA 99.99% (includes maintenance) 99.95% (excludes maintenance) Performance Machine series N2 C4A General purpose shared core General purpose dedicated core N4 Machine configuration limits N2 machine series Up to 128 vCPU Up to 864 GB RAM 1:8 core:memory ratio C4A machine series Up to 72 vCPU Up to 576 GB RAM 1:8 core:memory ratio General purpose shared core 1 vCPU Up to 1.7 GB RAM 1:6.5 core:memory ratio General purpose dedicated core Up to 96 vCPU Up to 624 GB RAM 1:6.5 core:memory ratio N4 machine series Up to 80 vCPU Up to 624 GB RAM 1:8 core:memory ratio Data cache Yes No Optimized writes Yes No Point-in-time log retention Up to 35 days Up to 7 days Read pools Yes No Availability Maintenance downtime Planned operations downtime Sub-second downtime Few minutes Advanced disaster recovery (DR) Yes No Write endpoint for advanced disaster recovery (DR) Yes No Write endpoint connectivity Yes No Managed Connection Pooling Yes No Observability AI-assisted troubleshooting Yes No Query insights 30 day metric retention 1 MB query length 200 query plan sample maximum Wait event analysis Index advisor recommendations 7 day metric retention 4500 bytes query length 20 query plan sample maximum Enhanced recommenders Yes No What's next Plan and prepare to create a new instance.
- Cloud SQL Enterprise edition : provides all core capabilities of Cloud SQL and is suitable for applications with less stringent availability and performance requirements.
- Cloud SQL key features The following table provides an overview of key feature enhancements available in Cloud SQL Enterprise Plus edition compared to Cloud SQL Enterprise edition: Cloud SQL Enterprise Plus edition Cloud SQL Enterprise edition Database versions MySQL 8.0, 8.4 Note: If the database version for your instance is MySQL 8.4, then the default Cloud SQL edition is Enterprise Plus.
- Cloud SQL offers the following editions: Cloud SQL Enterprise Plus edition : provides enhanced performance, availability, and observability to run applications.

