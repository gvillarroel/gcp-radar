---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.821Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "PostgreSQL 12"
feature_slug: "postgresql-12"
latest_feature_date: "2020-05-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups"
  - "https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore"
  - "https://docs.cloud.google.com/sql/docs/postgres/client-side-encryption"
keywords:
  - "offers"
  - "major"
  - "version"
  - "supports"
  - "beta"
---

# PostgreSQL 12

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for PostgreSQL supports PostgreSQL major version 12; Cloud SQL for PostgreSQL offers PostgreSQL major version 12 in beta.

## Extended Definition

Cloud SQL for PostgreSQL supports PostgreSQL major version 12; Cloud SQL for PostgreSQL offers PostgreSQL major version 12 in beta.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups)
- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore)
- [https://docs.cloud.google.com/sql/docs/postgres/client-side-encryption](https://docs.cloud.google.com/sql/docs/postgres/client-side-encryption)

## Supporting Pages

### "Cloud SQL backups overview \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- To upgrade to a later version, perform an in-place major version upgrade , use the Database Migration Service , or export and then import your database to a new Cloud SQL instance.
- Backup options Cloud SQL offers two backup service options to manage your instance's backups: Enhanced backups : backups are managed and stored in a centralized backup management project that leverages the Backup and DR Service, and provides enforced retention, granular scheduling, and monitoring.
- You can only restore from a backup to an instance with the same database version as when the backup was taken.
- Backup and restore operations can't be used to upgrade a database to a later version.

### "Restore an instance overview \_|\_ Cloud SQL for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/restore)
- Source ID: `site-iam-reference`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Requirements for restoring to a new instance When you restore your instance to a new instance, note the following requirements: The target instance must have the same database version as the instance from which the backup was taken.
- To perform a restore, the latest key version is required for all days retained as part of the retained-transaction-log-days parameter.
- For customer-managed encryption key (CMEK)-enabled instances , write-ahead logs are encrypted using the latest version of the CMEK.
- PITR typically offers a recovery point objective (RPO) of five minutes or less.

### "About client-side encryption \_|\_ Cloud SQL for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/client-side-encryption](https://docs.cloud.google.com/sql/docs/postgres/client-side-encryption)
- Source ID: `site-iam-reference`
- Final score: 20
- Re-rank relevance: N/A

Evidence snippets:
- Tink supports envelope encryption in C++, Java, Go, and Python using the AEAD API: public interface Aead { byte [] encrypt ( final byte [] plaintext, final byte [] associatedData ) throws… byte [] decrypt ( final byte [] ciphertext, final byte [] associatedData ) throws… } Besides the normal message/ciphertext argument, the encrypt and decrypt methods support optional associated data.
- Cloud KMS supports many different key types.

