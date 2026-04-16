---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.596Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "customer-managed encryption keys"
feature_slug: "customer-managed-encryption-keys"
latest_feature_date: "2019-11-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/about-tde"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups"
keywords:
  - "customer"
  - "managed"
  - "encryption"
  - "keys"
  - "sql"
  - "supports"
  - "instance"
---

# customer-managed encryption keys

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL supports customer-managed encryption keys for instance encryption.

## Extended Definition

Cloud SQL supports customer-managed encryption keys for instance encryption.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/about-tde](https://docs.cloud.google.com/sql/docs/sqlserver/about-tde)
- [https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview](https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups)

## Supporting Pages

### "About transparent data encryption (TDE) \_|\_ Cloud SQL for SQL Server \_\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/about-tde](https://docs.cloud.google.com/sql/docs/sqlserver/about-tde)
- Source ID: `site-docs-reference-required-4`
- Final score: 168
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- TDE is used in scenarios where another layer of encryption is required in addition to Google's default offering of encryption for data at rest and Google's optional offering of Customer-managed encryption keys (CMEK) .
- If the instance has replicas, then all TDE certificates, including those managed by Cloud SQL and those you imported manually, are automatically distributed across all replicas.
- Cloud SQL for SQL Server supports using TDE to encrypt data stored in your Cloud SQL for SQL Server instances.
- A certificate, which is generated from the database primary key, is used to protect the data encryption keys.

### "Data residency overview \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview](https://docs.cloud.google.com/sql/docs/sqlserver/data-residency-overview)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud SQL also lets you add another layer of encryption to data using customer-managed encryption keys (CMEK) .
- Encrypt data Google Cloud services, including Cloud SQL, encrypt customer content at rest and in transit using various encryption methods.
- CMEK are intended for organizations that have sensitive or regulated data that requires them to manage their own encryption keys.
- What do you do if you want to decide where to store your data and encryption keys?

### "Cloud SQL backups overview \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/backups)
- Source ID: `site-docs-reference-required-4`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- Backups are also encrypted by default using Google-managed or Customer-Managed Encryption keys (CMEK).
- Backup options Cloud SQL offers two backup service options to manage your instance's backups: Enhanced backups : backups are managed and stored in a centralized backup management project that leverages the Backup and DR Service, and provides enforced retention, granular scheduling, and monitoring.
- Backups versus exports Backups are managed by Cloud SQL according to retention policies, and are stored separately from the Cloud SQL instance.
- To recover a deleted instance to the exact state at the time of deletion, contact Google Cloud Customer Care within four days.

