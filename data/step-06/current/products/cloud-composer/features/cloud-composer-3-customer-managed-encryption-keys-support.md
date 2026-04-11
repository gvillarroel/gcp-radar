---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:47.835Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer 3 Customer Managed Encryption Keys support"
feature_slug: "cloud-composer-3-customer-managed-encryption-keys-support"
latest_feature_date: "2025-03-04"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption"
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview"
keywords:
  - "composer"
  - "customer"
  - "managed"
  - "encryption"
  - "keys"
  - "supports"
  - "cmek"
---

# Cloud Composer 3 Customer Managed Encryption Keys support

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer 3 supports Customer Managed Encryption Keys (CMEK).

## Extended Definition

Cloud Composer 3 supports Customer Managed Encryption Keys (CMEK).

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption](https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption)
- [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- [https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview](https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview)

## Supporting Pages

### "Configure encryption with customer-managed encryption keys \_|\_ Cloud Composer\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption](https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption)
- Source ID: `site-iam-reference`
- Final score: 258
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Data protected with CMEK encryption Cloud Composer protects the following data with CMEK encryption: Contents and schema of the Airflow database Environment and Airflow task logs in Cloud Logging Contents of the environment's bucket Secrets stored in the environment's cluster Persistent disks used by the task queue Container images of environment components stored in Artifact Registry repositories For specific details about how the data is encrypted, see: About customer-managed encryption keys (CMEK) in the Cloud SQL documentation.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This page describes how to use Customer Managed Encryption Keys (CMEK) to protect Cloud Composer environments.
- Cloud Composer stores the following information protected with Google-owned and Google-managed encryption keys, not customer-managed keys: Environment name Airflow configuration overrides Environment variables Descriptions of allowed IP ranges IP ranges Labels The names of some parameters stored by Cloud Composer can include a sub-string of environment's name.
- Example: gcloud composer environments describe \ example-environment \ --location us-central1 \ --format = "value(config.encryptionConfig)" Use CMEK for Cloud Composer logs Cloud Logging supports encrypting Log storage with CMEK keys.

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Change New images are available in Cloud Composer 2: composer-2.11.4-airflow-2.10.2 (default) composer-2.11.4-airflow-2.9.3 March 04, 2025 Feature Cloud Composer 3 supports Customer Managed Encryption Keys (CMEK) .
- March 01, 2022 Feature Cloud Composer 2 supports Customer Managed Encryption Keys (CMEK) .
- Change Cloud Composer 1.19.10 and 2.0.27 images are available: composer-1.19.10-airflow-1.10.15 (default) composer-1.19.10-airflow-2.1.4 composer-1.19.10-airflow-2.2.5 composer-2.0.27-airflow-2.1.4 composer-2.0.27-airflow-2.2.5 September 12, 2022 Feature (New environments only) Encryption with customer-managed encryption keys (CMEK) now applies to the persistent disk of the environment's Redis queue.
- Fixed (Cloud Composer 3) Key Access Justifications now correctly works for Customer Managed Encryption Keys (CMEK).

### Cloud Composer security overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview](https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview)
- Source ID: `site-iam-reference`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Customer Managed Encryption Keys (CMEK) Cloud Composer supports Customer Managed Encryption Keys (CMEK) .
- If you prefer, you can configure Cloud Composer environments to be encrypted with customer-managed encryption keys .
- By default, data is encrypted using Google-owned and Google-managed encryption keys.
- CMEK provide you with more control over the keys used to encrypt data at rest within a Google Cloud project.

