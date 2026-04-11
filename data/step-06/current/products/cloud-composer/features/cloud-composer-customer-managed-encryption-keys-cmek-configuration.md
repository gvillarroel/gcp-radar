---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:48.912Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer Customer-Managed Encryption Keys (CMEK) configuration"
feature_slug: "cloud-composer-customer-managed-encryption-keys-cmek-configuration"
latest_feature_date: "2021-01-12"
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
  - "cmek"
  - "configuration"
  - "can"
---

# Cloud Composer Customer-Managed Encryption Keys (CMEK) configuration

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer can be configured to use customer-managed encryption keys (CMEK).

## Extended Definition

Cloud Composer can be configured to use customer-managed encryption keys (CMEK).

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
- Final score: 290
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud Composer stores the following information protected with Google-owned and Google-managed encryption keys, not customer-managed keys: Environment name Airflow configuration overrides Environment variables Descriptions of allowed IP ranges IP ranges Labels The names of some parameters stored by Cloud Composer can include a sub-string of environment's name.
- Data protected with CMEK encryption Cloud Composer protects the following data with CMEK encryption: Contents and schema of the Airflow database Environment and Airflow task logs in Cloud Logging Contents of the environment's bucket Secrets stored in the environment's cluster Persistent disks used by the task queue Container images of environment components stored in Artifact Registry repositories For specific details about how the data is encrypted, see: About customer-managed encryption keys (CMEK) in the Cloud SQL documentation.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This page describes how to use Customer Managed Encryption Keys (CMEK) to protect Cloud Composer environments.
- Create an environment with CMEK After you create a customer-managed encryption key , you can use it to create Cloud Composer environments.

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- Preview: Composer can now be configured to use Customer-managed encryption keys (CMEK) .
- Change Cloud Composer 1.19.10 and 2.0.27 images are available: composer-1.19.10-airflow-1.10.15 (default) composer-1.19.10-airflow-2.1.4 composer-1.19.10-airflow-2.2.5 composer-2.0.27-airflow-2.1.4 composer-2.0.27-airflow-2.2.5 September 12, 2022 Feature (New environments only) Encryption with customer-managed encryption keys (CMEK) now applies to the persistent disk of the environment's Redis queue.
- Change New images are available in Cloud Composer 2: composer-2.11.4-airflow-2.10.2 (default) composer-2.11.4-airflow-2.9.3 March 04, 2025 Feature Cloud Composer 3 supports Customer Managed Encryption Keys (CMEK) .
- Fixed Environment creation operations no longer fail in Private IP configurations that use Customer Managed Encryption Keys (CMEK) .

### Cloud Composer security overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview](https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview)
- Source ID: `site-iam-reference`
- Final score: 184
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- If you prefer, you can configure Cloud Composer environments to be encrypted with customer-managed encryption keys .
- Customer Managed Encryption Keys (CMEK) Cloud Composer supports Customer Managed Encryption Keys (CMEK) .
- Secret Manager as a storage for sensitive configuration data In Cloud Composer, you can configure Airflow to use Secret Manager as a backend where Airflow connection variables are stored.
- Private IP environments You can create Cloud Composer environments in the Private IP networking configuration .

