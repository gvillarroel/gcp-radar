---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T20:07:37.654Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "AlloyDB Customer-Managed Encryption Keys (CMEK)"
feature_slug: "alloydb-customer-managed-encryption-keys-cmek"
latest_feature_date: "2022-08-25"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/overview"
  - "https://docs.cloud.google.com/alloydb/docs/release-notes"
  - "https://docs.cloud.google.com/alloydb/docs/backup/configure"
keywords:
  - "Bring Your Own Key"
  - "customer-managed encryption keys"
  - "Cloud KMS integration"
  - "customer-managed keys"
  - "AlloyDB key management"
  - "BYOK"
  - "AlloyDB CMEK"
  - "CMEK"
---

# AlloyDB Customer-Managed Encryption Keys (CMEK)

Product: AlloyDB
Coverage: HIGH

## Step 02 Summary

AlloyDB supports customer-managed encryption keys, allowing customers to use their own keys to satisfy compliance and regulatory requirements.

## Extended Definition

AlloyDB Customer-Managed Encryption Keys (CMEK) is an encryption option that lets customers use their own encryption keys (instead of Google-managed keys) to encrypt AlloyDB cluster data. CMEK keys can be configured when creating a cluster and can also be used for on-demand, automated, and continuous backups/data-change logs so those backup artifacts are encrypted under the specified key rather than the default encryption. CMEK is intended to help customers meet compliance or regulatory requirements by retaining control of encryption key ownership.

## Evidence Summary

The provided AlloyDB pages confirm CMEK availability, purpose, introduction date, and CLI/configuration details for applying customer-managed keys to clusters and backup workloads.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- [https://docs.cloud.google.com/alloydb/docs/backup/configure](https://docs.cloud.google.com/alloydb/docs/backup/configure)

## Supporting Pages

### AlloyDB overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- Source ID: `site-api-reference`
- Final score: 50
- Re-rank relevance: STRONG
- Re-rank rationale: The page explicitly states data-at-rest protection supports Google default encryption or customer-managed encryption keys (CMEK).

Evidence snippets:
- Security and encryption: protect data at rest using Google's default encryption or customer-managed encryption keys (CMEK), and manage access using integrated Google Cloud Identity and Access Management (IAM).
- If you instead need to encrypt your data using a key that you provide, then you can specify a customer-managed encryption key (CMEK) when creating a cluster.
- You can specify a CMEK key when creating an on-demand backup, configuring a backup schedule, or restoring from a backup.
- AlloyDB then uses the CMEK key to encrypt all data written to that cluster.

### AlloyDB for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/release-notes](https://docs.cloud.google.com/alloydb/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- August 25, 2022 Feature AlloyDB supports customer-managed encryption keys (CMEK) , an alternative to its default Google-managed encryption.
- March 31, 2025 Change If your cluster is encrypted with a customer-managed encryption key (CMEK), and no specific CMEK key is configured for continuous or automated backups, then backups will be created with the cluster CMEK.
- CMEK is especially useful for AlloyDB users who need to manage their own data encryption keys in order to satisfy specific compliance or regulatory requirements.
- September 17, 2024 Feature You can now add the predefined CMEK organization policy for your AlloyDB clusters and backups.

### Configure backup plans \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/backup/configure](https://docs.cloud.google.com/alloydb/docs/backup/configure)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: WEAK
- Re-rank rationale: The page notes encryption settings and mentions Google-managed encryption by default, but does not clearly document Customer-Managed Encryption Key usage.

Evidence snippets:
- This example sets a cluster to take an automated backup at midnight UTC on every Monday and Thursday: gcloud alloydb clusters update my - cluster \ -- automated - backup - days - of - week = MONDAY , THURSDAY \ -- automated - backup - start - times = 00 : 00 \ -- region = us - central1 \ -- project = my - project To encrypt scheduled backups using a CMEK key instead of the default Google-managed encryption, provide these additional arguments: --automated-backup-encryption-key= KEY ID : the ID of the CMEK key to use. --automated-backup-encryption-key-keyring= KEYRING ID : the ID of the key's keyring. --automated-backup-encryption-key-location= LOCATION ID : the ID of that keyring's region.
- If you want to encrypt this cluster's continuous backups and data-change logs using a specific customer-managed encryption key (CMEK) instead of the cluster's encryption configuration, provide these additional arguments: --continuous-backup-encryption-key= KEY ID : the ID of the CMEK key to use. --continuous-backup-encryption-key-keyring= KEYRING ID : the ID of the key's keyring. --continuous-backup-encryption-key-location= LOCATION ID : the ID of the keyring's region.
- If you want to encrypt this cluster's continuous backups and data-change logs using a specific customer-managed encryption key (CMEK) instead of the cluster's encryption configuration, provide these additional arguments: --continuous-backup-encryption-key= KEY ID : the ID of the CMEK key to use. --continuous-backup-encryption-key-keyring= KEYRING ID : the ID of the key's keyring. --continuous-backup-encryption-key-location= LOCATION ID : the ID of the keyring's region.
- If you want to encrypt this cluster's continuous backups and data-change logs using a specific customer-managed encryption key (CMEK) instead of the cluster's encryption configuration, follow these additional steps: Click Advanced encryption options .

