---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.871Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "CMEK re-encryption with new primary key version"
feature_slug: "cmek-re-encryption-with-new-primary-key-version"
latest_feature_date: "2023-08-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-cmek"
  - "https://docs.cloud.google.com/sql/docs/mysql/cmek"
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
keywords:
  - "cmek"
  - "re"
  - "encryption"
  - "with"
  - "new"
  - "primary"
  - "key"
  - "version"
---

# CMEK re-encryption with new primary key version

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL lets you re-encrypt an existing CMEK-enabled primary instance or replica with a new primary key version.

## Extended Definition

Cloud SQL lets you re-encrypt an existing CMEK-enabled primary instance or replica with a new primary key version.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/configure-cmek](https://docs.cloud.google.com/sql/docs/mysql/configure-cmek)
- [https://docs.cloud.google.com/sql/docs/mysql/cmek](https://docs.cloud.google.com/sql/docs/mysql/cmek)
- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)

## Supporting Pages

### "Use customer-managed encryption keys (CMEK) \_|\_ Cloud SQL for MySQL \_\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-cmek](https://docs.cloud.google.com/sql/docs/mysql/configure-cmek)
- Source ID: `site-iam-reference`
- Final score: 228
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID /reencrypt" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2023-06-28T21:22:13.663Z", "operationType": "REENCRYPT", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } Automatic re-encryption backups When you re-encrypt a primary instance with a new primary key version, Cloud SQL automatically creates an on-demand backup called the re-encryption backup.
- Read and acknowledge it to proceed further with instance creation. gcloud gcloud sql instances create INSTANCE NAME \ --project = PROJECT ID \ --disk-encryption-key = KMS KEY ID \ --database-version = VERSION \ --tier = MACHINE TYPE \ --region = REGION \ --root-password = INSERT-PASSWORD-HERE Terraform To create an instance with CMEK, use a Terraform resource . resource "google sql database instance" "mysql instance with cmek" { name = "mysql-instance-cmek" provider = google-beta region = "us-central1" database version = "MYSQL 8 0" encryption key name = google kms crypto key.key.id settings { tier = "db-n1-standard-2" } set deletion protection to true, will ensure that one cannot accidentally delete this instance by use of Terraform whereas deletion protection enabled flag protects this instance at the GCP level. deletion protection = false } Delete the changes To delete your changes, do the following: To disable deletion protection, in your Terraform configuration file set the deletion protection argument to false . deletion protection = "false" Apply the updated Terraform configuration by running the following command and entering yes at the prompt: terraform apply Remove resources previously applied with your Terraform configuration by running the following command and entering yes at the prompt: terraform destroy REST v1 To create an instance with customer-managed encryption keys, pass diskEncryptionConfiguration to the command.
- Create a backup for a CMEK-enabled instance When you create a backup of a Cloud SQL instance, the backup is encrypted with the same primary key version as the primary instance's customer-managed key.
- You will see a message on the Create a backup form that says: "Your backup will be encrypted with the primary version of this instance's customer-managed encryption key.

### "About customer-managed encryption keys (CMEK) \_|\_ Cloud SQL for MySQL\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/cmek](https://docs.cloud.google.com/sql/docs/mysql/cmek)
- Source ID: `site-docs-root`
- Final score: 218
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can re-encrypt any existing CMEK primary instance or replica with the new primary key version.
- When you rotate keys, instances that are encrypted with that key aren't automatically re-encrypted with the new primary key version.
- You can't use customer-managed encryption keys to encrypt: External servers (external primary instances and external replicas) Instance metadata, such as the instance ID, database version, machine type, flags, backup schedule, etc.
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback About customer-managed encryption keys (CMEK) Stay organized with collections Save and categorize content based on your preferences.

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- August 17, 2023 Feature You can now re-encrypt an existing Cloud SQL CMEK-enabled primary instance or replica with a new primary key version.
- April 12, 2022 Feature Customer-managed encryption key (CMEK) organization policy constraints are now available in Preview . constraints/gcp.restrictNonCmekServices allows you to control which resources require the use of CMEK. constraints/gcp.restrictCmekCryptoKeyProjects allows you to control the projects from which a Cloud KMS key can be used to validate requests.
- Change In the new maintenance version [MySQL version].R20240207.00 00, the default value of the performance schema flag for all MySQL 8.0 instances with more than 15 GB of RAM will be set to on .
- November 19, 2019 Feature Cloud SQL now supports customer-managed encryption keys (CMEK).

