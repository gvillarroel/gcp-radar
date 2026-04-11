---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T21:00:48.619Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Cloud Composer CMEK with External Key Managers"
feature_slug: "cloud-composer-cmek-with-external-key-managers"
latest_feature_date: "2022-04-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption"
  - "https://docs.cloud.google.com/composer/docs/release-notes"
  - "https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview"
keywords:
  - "composer"
  - "cmek"
  - "with"
  - "external"
  - "key"
  - "managers"
  - "supports"
  - "customer"
---

# Cloud Composer CMEK with External Key Managers

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer supports customer-managed encryption keys stored in External Key Managers.

## Extended Definition

Cloud Composer supports customer-managed encryption keys stored in External Key Managers.

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
- Final score: 208
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Cloud Composer supports CMEK encryption using keys stored in External Key Managers .
- Data protected with CMEK encryption Cloud Composer protects the following data with CMEK encryption: Contents and schema of the Airflow database Environment and Airflow task logs in Cloud Logging Contents of the environment's bucket Secrets stored in the environment's cluster Persistent disks used by the task queue Container images of environment components stored in Artifact Registry repositories For specific details about how the data is encrypted, see: About customer-managed encryption keys (CMEK) in the Cloud SQL documentation.
- Example: gcloud composer environments describe \ example-environment \ --location us-central1 \ --format = "value(config.encryptionConfig)" Use CMEK for Cloud Composer logs Cloud Logging supports encrypting Log storage with CMEK keys.
- Create an environment with CMEK After you create a customer-managed encryption key , you can use it to create Cloud Composer environments.

### Cloud Composer release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/release-notes](https://docs.cloud.google.com/composer/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Feature Cloud Composer now supports CMEK encryption using keys stored in External Key Managers .
- Change Cloud Composer 1.19.10 and 2.0.27 images are available: composer-1.19.10-airflow-1.10.15 (default) composer-1.19.10-airflow-2.1.4 composer-1.19.10-airflow-2.2.5 composer-2.0.27-airflow-2.1.4 composer-2.0.27-airflow-2.2.5 September 12, 2022 Feature (New environments only) Encryption with customer-managed encryption keys (CMEK) now applies to the persistent disk of the environment's Redis queue.
- Change New images are available in Cloud Composer 2: composer-2.11.4-airflow-2.10.2 (default) composer-2.11.4-airflow-2.9.3 March 04, 2025 Feature Cloud Composer 3 supports Customer Managed Encryption Keys (CMEK) .
- March 01, 2022 Feature Cloud Composer 2 supports Customer Managed Encryption Keys (CMEK) .

### Cloud Composer security overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview](https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview)
- Source ID: `site-iam-reference`
- Final score: 160
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Customer Managed Encryption Keys (CMEK) Cloud Composer supports Customer Managed Encryption Keys (CMEK) .
- If you prefer, you can configure Cloud Composer environments to be encrypted with customer-managed encryption keys .
- Web server network access control levels (ACL) Airflow web servers in Cloud Composer are always provisioned with an externally accessible IP address.
- CMEK provide you with more control over the keys used to encrypt data at rest within a Google Cloud project.

