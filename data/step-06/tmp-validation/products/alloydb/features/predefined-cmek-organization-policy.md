---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.129Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Predefined CMEK organization policy"
feature_slug: "predefined-cmek-organization-policy"
latest_feature_date: "2024-09-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/backup/configure"
  - "https://docs.cloud.google.com/alloydb/docs/ai/perform-time-series-forecasting"
  - "https://docs.cloud.google.com/alloydb/docs/reference/database-performance-snapshot-report-reference"
keywords:
  - "require"
  - "organization"
  - "customer"
  - "predefined"
  - "cmek"
  - "policy"
  - "supports"
---

# Predefined CMEK organization policy

Product: AlloyDB
Coverage: LOW

## Step 02 Summary

AlloyDB supports a predefined organization policy to require customer-managed encryption keys for clusters and backups.

## Extended Definition

AlloyDB supports a predefined organization policy to require customer-managed encryption keys for clusters and backups.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/backup/configure](https://docs.cloud.google.com/alloydb/docs/backup/configure)
- [https://docs.cloud.google.com/alloydb/docs/ai/perform-time-series-forecasting](https://docs.cloud.google.com/alloydb/docs/ai/perform-time-series-forecasting)
- [https://docs.cloud.google.com/alloydb/docs/reference/database-performance-snapshot-report-reference](https://docs.cloud.google.com/alloydb/docs/reference/database-performance-snapshot-report-reference)

## Supporting Pages

### "Database performance snapshot report reference \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/database-performance-snapshot-report-reference](https://docs.cloud.google.com/alloydb/docs/reference/database-performance-snapshot-report-reference)
- Source ID: `site-api-reference`
- Final score: 34
- Re-rank relevance: N/A

### "Perform time-series forecasting \_|\_ AlloyDB for PostgreSQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/alloydb/docs/ai/perform-time-series-forecasting](https://docs.cloud.google.com/alloydb/docs/ai/perform-time-series-forecasting)
- Source ID: `site-docs-reference-2`
- Final score: 34
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

### Configure backup plans \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/backup/configure](https://docs.cloud.google.com/alloydb/docs/backup/configure)
- Source ID: `site-docs-root`
- Final score: 32
- Re-rank relevance: N/A

Evidence snippets:
- If you want to encrypt this cluster's continuous backups and data-change logs using a specific customer-managed encryption key (CMEK) instead of the cluster's encryption configuration, provide these additional arguments: --continuous-backup-encryption-key= KEY ID : the ID of the CMEK key to use. --continuous-backup-encryption-key-keyring= KEYRING ID : the ID of the key's keyring. --continuous-backup-encryption-key-location= LOCATION ID : the ID of the keyring's region.
- If you want to encrypt this cluster's continuous backups and data-change logs using a specific customer-managed encryption key (CMEK) instead of the cluster's encryption configuration, provide these additional arguments: --continuous-backup-encryption-key= KEY ID : the ID of the CMEK key to use. --continuous-backup-encryption-key-keyring= KEYRING ID : the ID of the key's keyring. --continuous-backup-encryption-key-location= LOCATION ID : the ID of the keyring's region.
- You must have one of these IAM roles in the Google Cloud project you are using: roles/alloydb.admin (the AlloyDB Admin predefined IAM role) roles/owner (the Owner basic IAM role) roles/editor (the Editor basic IAM role) If you don't have any of these roles, contact your Organization Administrator to request access.
- If you want to encrypt this cluster's continuous backups and data-change logs using a specific customer-managed encryption key (CMEK) instead of the cluster's encryption configuration, follow these additional steps: Click Advanced encryption options .

