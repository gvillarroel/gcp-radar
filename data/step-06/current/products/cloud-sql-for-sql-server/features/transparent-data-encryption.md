---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.618Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Transparent data encryption"
feature_slug: "transparent-data-encryption"
latest_feature_date: "2025-03-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/about-tde"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/release-notes"
keywords:
  - "transparent"
  - "encryption"
  - "automatically"
  - "encrypts"
  - "written"
  - "to"
  - "storage"
  - "and"
---

# Transparent data encryption

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

Transparent data encryption automatically encrypts data written to storage and decrypts it when read for Cloud SQL for SQL Server instances.

## Extended Definition

Transparent data encryption automatically encrypts data written to storage and decrypts it when read for Cloud SQL for SQL Server instances.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/about-tde](https://docs.cloud.google.com/sql/docs/sqlserver/about-tde)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)

## Supporting Pages

### "About transparent data encryption (TDE) \_|\_ Cloud SQL for SQL Server \_\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/about-tde](https://docs.cloud.google.com/sql/docs/sqlserver/about-tde)
- Source ID: `site-iam-reference`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- TDE automatically encrypts data before it is written to storage, and automatically decrypts data when the data is read from storage.
- TDE is used in scenarios where another layer of encryption is required in addition to Google's default offering of encryption for data at rest and Google's optional offering of Customer-managed encryption keys (CMEK) .
- Home Documentation Databases Cloud SQL SQL Server Guides Send feedback About transparent data encryption (TDE) Stay organized with collections Save and categorize content based on your preferences.
- If the instance has replicas, then all TDE certificates, including those managed by Cloud SQL and those you imported manually, are automatically distributed across all replicas.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- TDE automatically encrypts data before it is written to storage, and automatically decrypts data when the data is read from storage.
- Flags cloudsql.enable pg squeeze : enables the pg squeeze extension for Cloud SQL for PostgreSQL squeeze.max xlock time : sets the time (in milliseconds) that the extension uses to finalize the processing for modifying a table squeeze.worker autostart : starts a background worker automatically squeeze.worker role : specifies the role for the background worker The rollout of the following minor versions, extension versions, and plugin versions is underway : Minor versions 11.21 is upgraded to 11.22.
- October 30, 2023 Cloud SQL for PostgreSQL Feature The rollout of the following items is complete : The oracle fdw extension, version 1.2 The minor versions, extension versions, and plugin versions listed in the September 21 release note October 27, 2023 Cloud SQL for PostgreSQL Feature You can now specify the SSL mode of your Cloud SQL instances, which gives you more accurate SSL encryption.
- MySQL compatibility: MySQL 5.6 (5.6.31) and 5.7 (5.7.11) InnoDB storage engine GTID support Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Cloud SQL for SQL Server release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: N/A

Evidence snippets:
- TDE automatically encrypts data before it is written to storage, and automatically decrypts data when the data is read from storage.
- March 24, 2025 Feature You can export the transaction logs for all Cloud SQL for SQL Server instances that have point-in-time recovery (PITR) enabled and their logs stored in Cloud Storage .
- TDE provides another layer of encryption in addition to Google's default offering of encryption for data at rest and Google's optional offering of customer-managed encryption keys (CMEK).
- March 17, 2025 Feature Cloud SQL for SQL Server supports transparent data encryption (TDE) to encrypt data stored in your Cloud SQL for SQL Server instances.

