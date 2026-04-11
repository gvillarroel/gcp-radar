---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.954Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Customer-managed encryption keys"
feature_slug: "customer-managed-encryption-keys"
latest_feature_date: "2019-11-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-cmek"
  - "https://docs.cloud.google.com/sql/docs/mysql/cmek"
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
keywords:
  - "customer"
  - "managed"
  - "encryption"
  - "keys"
  - "sql"
  - "supports"
  - "for"
  - "encrypting"
---

# Customer-managed encryption keys

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL supports customer-managed encryption keys for encrypting instances with user-managed keys.

## Extended Definition

Cloud SQL supports customer-managed encryption keys for encrypting instances with user-managed keys.

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
- Final score: 286
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Read and acknowledge it to proceed further with instance creation. gcloud gcloud sql instances create INSTANCE NAME \ --project = PROJECT ID \ --disk-encryption-key = KMS KEY ID \ --database-version = VERSION \ --tier = MACHINE TYPE \ --region = REGION \ --root-password = INSERT-PASSWORD-HERE Terraform To create an instance with CMEK, use a Terraform resource . resource "google sql database instance" "mysql instance with cmek" { name = "mysql-instance-cmek" provider = google-beta region = "us-central1" database version = "MYSQL 8 0" encryption key name = google kms crypto key.key.id settings { tier = "db-n1-standard-2" } set deletion protection to true, will ensure that one cannot accidentally delete this instance by use of Terraform whereas deletion protection enabled flag protects this instance at the GCP level. deletion protection = false } Delete the changes To delete your changes, do the following: To disable deletion protection, in your Terraform configuration file set the deletion protection argument to false . deletion protection = "false" Apply the updated Terraform configuration by running the following command and entering yes at the prompt: terraform apply Remove resources previously applied with your Terraform configuration by running the following command and entering yes at the prompt: terraform destroy REST v1 To create an instance with customer-managed encryption keys, pass diskEncryptionConfiguration to the command.
- GO TO THE PROJECT IAM PAGE gcloud gcloud kms keys add-iam-policy-binding KMS KEY ID \ --location = GCP REGION \ --keyring = KMS KEYRING ID \ --member = serviceAccount:service- PROJECT NUMBER @gcp-sa-cloud-sql.iam.gserviceaccount.com \ --role = roles/cloudkms.cryptoKeyEncrypterDecrypter Terraform To grant access to the key, use a Terraform resource . resource "google kms crypto key iam binding" "crypto key" { provider = google-beta crypto key id = google kms crypto key.key.id role = "roles/cloudkms.cryptoKeyEncrypterDecrypter" members = [ "serviceAccount:${google project service identity.gcp sa cloud sql.email}", ] } Apply the Terraform configuration: terraform apply Create a Cloud SQL instance with CMEK Note: You can't enable customer-managed encryption keys on existing instances.
- MySQL PostgreSQL SQL Server This page describes how to set up a service account and keys for customer-managed encryption keys, and how to create an instance that uses a manually-created customer-managed encryption key.
- Enable the API Workflow for creating a Cloud SQL instance with CMEK gcloud and API users only: Create a service account for each project that requires customer-managed encryption keys.

### "About customer-managed encryption keys (CMEK) \_|\_ Cloud SQL for MySQL\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/cmek](https://docs.cloud.google.com/sql/docs/mysql/cmek)
- Source ID: `site-docs-root`
- Final score: 278
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Customer-managed encryption keys use the following format: projects / [ KMS PROJECT ID ] / locations / [ LOCATION ] / keyRings / [ KEY RING ] / cryptoKeys / [ KEY NAME ] If Cloud SQL is unable to access the key (such as if you disable the key version), Cloud SQL suspends the instance.
- If you want to control your encryption keys, then you can use customer-managed encryption keys (CMEKs) in Cloud KMS with CMEK-integrated services including Cloud SQL for MySQL.
- To learn how to use manually-created CMEKs to protect your Cloud SQL for MySQL resources, see Use customer-managed encryption keys (CMEK) .
- Google-managed encryption versus customer-managed encryption The diagrams below show how data-at-rest encryption works inside a Cloud SQL instance when using default Google encryption versus customer-managed encryption keys.

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 222
- Re-rank relevance: N/A

Evidence snippets:
- November 19, 2019 Feature Cloud SQL now supports customer-managed encryption keys (CMEK).
- March 31, 2025 Feature Cloud SQL now supports Managed Connection Pooling (MCP) in Preview , which lets you scale your workloads by optimizing resource utilization for your Cloud SQL instances using pooling.
- If the Cloud SQL instance to which you're connecting is using customer-managed CA for its serverCaMode setting, then on the client side, you must use Cloud SQL Auth Proxy version 2.14.3 or later.
- To learn more about CMEK, see the Overview of customer managed encryption keys (CMEK) .

