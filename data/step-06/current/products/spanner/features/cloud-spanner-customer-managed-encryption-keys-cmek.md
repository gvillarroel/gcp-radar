---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.206Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Cloud Spanner customer-managed encryption keys (CMEK)"
feature_slug: "cloud-spanner-customer-managed-encryption-keys-cmek"
latest_feature_date: "2024-10-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/cmek"
  - "https://docs.cloud.google.com/spanner/docs/backup"
  - "https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.types.CopyBackupEncryptionConfig"
keywords:
  - "protect"
  - "encryption"
  - "customer"
  - "cmek"
  - "managed"
  - "keys"
  - "added"
---

# Cloud Spanner customer-managed encryption keys (CMEK)

Product: Spanner
Coverage: MEDIUM

## Step 02 Summary

Cloud Spanner added support for customer-managed encryption keys (CMEK) to protect databases in custom, dual-region, and multi-region instance configurations.

## Extended Definition

Cloud Spanner added support for customer-managed encryption keys (CMEK) to protect databases in custom, dual-region, and multi-region instance configurations.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)
- [https://docs.cloud.google.com/spanner/docs/backup](https://docs.cloud.google.com/spanner/docs/backup)
- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.types.CopyBackupEncryptionConfig](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.types.CopyBackupEncryptionConfig)

## Supporting Pages

### "Customer-managed encryption keys (CMEK) overview \_|\_ Spanner \_|\_ Google\

- URL: [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)
- Source ID: `site-docs-root`
- Final score: 255
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Databases Spanner Guides Send feedback Customer-managed encryption keys (CMEK) overview Stay organized with collections Save and categorize content based on your preferences.
- If you want to control your encryption keys, then you can use customer-managed encryption keys (CMEKs) in Cloud KMS with CMEK-integrated services including Spanner.
- Geo-partitioning You can use CMEK or Google-owned and Google-managed encryption keys to protect Spanner databases that use geo-partitioning .
- Back up and restore You can use CMEK or Google-owned and Google-managed encryption keys to protect Spanner backups .

### Backups overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/backup](https://docs.cloud.google.com/spanner/docs/backup)
- Source ID: `site-docs-root`
- Final score: 135
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- A copied backup uses the same encryption configuration, either Google-owned and Google-managed encryption keys or customer-managed encryption keys (CMEK) , as its source backup encryption.
- Encryption Spanner backups, like databases, are encrypted by either Google-owned and Google-managed encryption keys or by customer-managed encryption keys (CMEK) .
- If you want the backup schedule to create backups that are encrypted by CMEK keys, you need to specify the key path.
- How backup copying works Spanner lets you copy a backup of your Spanner database from one instance to another instance in a different region or project, to provide additional data protection and compliance capabilities.

### "Class CopyBackupEncryptionConfig (3.63.0) \_|\_ Python client libraries\

- URL: [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.types.CopyBackupEncryptionConfig](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.types.CopyBackupEncryptionConfig)
- Source ID: `site-python-reference`
- Final score: 130
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- This field should be set only when encryption type][google.spanner.admin.database.v1.CopyBackupEncryptionConfig.encryption type] is CUSTOMER MANAGED ENCRYPTION .
- Some examples: - For single region instance configs, specify a single regional location KMS key. - For multi-regional instance configs of type GOOGLE MANAGED, either specify a multi-regional location KMS key or multiple regional location KMS keys that cover all regions in the instance config. - For an instance config of type USER MANAGED, please specify only regional location KMS keys to cover each region in the instance config.
- Multi-regional location KMS keys are not supported for USER MANAGED instance configs.
- Specifies the KMS configuration for the one or more keys used to protect the backup.

