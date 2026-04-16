---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.826Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "PostgreSQL 11"
feature_slug: "postgresql-11"
latest_feature_date: "2019-09-27"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups"
  - "https://docs.cloud.google.com/sql/docs/postgres/client-side-encryption"
  - "https://docs.cloud.google.com/sql/docs/postgres/cmek"
keywords:
  - "major"
  - "version"
  - "supports"
---

# PostgreSQL 11

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for PostgreSQL supports PostgreSQL major version 11.

## Extended Definition

Cloud SQL for PostgreSQL supports PostgreSQL major version 11.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups)
- [https://docs.cloud.google.com/sql/docs/postgres/client-side-encryption](https://docs.cloud.google.com/sql/docs/postgres/client-side-encryption)
- [https://docs.cloud.google.com/sql/docs/postgres/cmek](https://docs.cloud.google.com/sql/docs/postgres/cmek)

## Supporting Pages

### "About client-side encryption \_|\_ Cloud SQL for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/client-side-encryption](https://docs.cloud.google.com/sql/docs/postgres/client-side-encryption)
- Source ID: `site-iam-reference`
- Final score: 28
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Tink supports envelope encryption in C++, Java, Go, and Python using the AEAD API: public interface Aead { byte [] encrypt ( final byte [] plaintext, final byte [] associatedData ) throws… byte [] decrypt ( final byte [] ciphertext, final byte [] associatedData ) throws… } Besides the normal message/ciphertext argument, the encrypt and decrypt methods support optional associated data.
- Cloud KMS supports many different key types.

### "About customer-managed encryption keys (CMEK) \_|\_ Cloud SQL for PostgreSQL\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/cmek](https://docs.cloud.google.com/sql/docs/postgres/cmek)
- Source ID: `site-iam-reference`
- Final score: 28
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Customer-managed encryption keys use the following format: projects / [ KMS PROJECT ID ] / locations / [ LOCATION ] / keyRings / [ KEY RING ] / cryptoKeys / [ KEY NAME ] If Cloud SQL is unable to access the key (such as if you disable the key version), Cloud SQL suspends the instance.
- You can't use customer-managed encryption keys to encrypt: External servers (external primary instances and external replicas) Instance metadata, such as the instance ID, database version, machine type, flags, backup schedule, etc.
- When you rotate keys, instances that are encrypted with that key aren't automatically re-encrypted with the new primary key version.
- Once you destroy a key version that is associated with a Cloud SQL instance, Google can't get the data back.

### "Cloud SQL backups overview \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/postgres/backup-recovery/backups)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- To upgrade to a later version, perform an in-place major version upgrade , use the Database Migration Service , or export and then import your database to a new Cloud SQL instance.
- You can only restore from a backup to an instance with the same database version as when the backup was taken.
- Backup and restore operations can't be used to upgrade a database to a later version.

