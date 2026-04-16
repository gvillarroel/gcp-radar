---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.589Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "CMEK encryption with External Key Manager keys"
feature_slug: "cmek-encryption-with-external-key-manager-keys"
latest_feature_date: "2022-04-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption"
  - "https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview"
  - "https://docs.cloud.google.com/composer/docs/composer-1/security-practices"
keywords:
  - "cmek"
  - "encryption"
  - "external"
  - "key"
  - "manager"
  - "keys"
  - "composer"
  - "supports"
---

# CMEK encryption with External Key Manager keys

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer supports CMEK encryption with keys stored in External Key Managers.

## Extended Definition

Cloud Composer supports CMEK encryption with keys stored in External Key Managers.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption](https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption)
- [https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview](https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview)
- [https://docs.cloud.google.com/composer/docs/composer-1/security-practices](https://docs.cloud.google.com/composer/docs/composer-1/security-practices)

## Supporting Pages

### "Configure encryption with customer-managed encryption keys \_|\_ Cloud Composer\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption](https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption)
- Source ID: `site-iam-reference`
- Final score: 45
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Composer supports CMEK encryption using keys stored in External Key Managers .
- Example: gcloud composer environments describe \ example-environment \ --location us-central1 \ --format = "value(config.encryptionConfig)" Use CMEK for Cloud Composer logs Cloud Logging supports encrypting Log storage with CMEK keys.
- Example: gcloud beta logging sinks update Default \ --add-exclusion name = example-environment-exclusion,filter = "resource.type=cloud composer environment AND resource.labels.environment name=example-environment AND resource.labels.location=us-central1" Add organization-level CMEK encryption to the Log Router. gcloud logging cmek-settings describe \ --organization = ORGANIZATION ID gcloud kms keys add-iam-policy-binding \ --project = KEY PROJECT ID \ --member LOGGING SERVICE AGENT \ --role roles/cloudkms.cryptoKeyEncrypterDecrypter \ --location = KEY LOCATION \ --keyring = KEY RING NAME \ KEY NAME gcloud logging cmek-settings update \ --organization = ORGANIZATION ID \ --kms-project = KEY PROJECT ID \ --kms-keyring = KEY RING NAME \ --kms-location = KEY LOCATION \ --kms-key-name = KEY NAME Replace: ORGANIZATION ID with your organization ID .
- Data protected with CMEK encryption Cloud Composer protects the following data with CMEK encryption: Contents and schema of the Airflow database Environment and Airflow task logs in Cloud Logging Contents of the environment's bucket Secrets stored in the environment's cluster Persistent disks used by the task queue Container images of environment components stored in Artifact Registry repositories For specific details about how the data is encrypted, see: About customer-managed encryption keys (CMEK) in the Cloud SQL documentation.

### Cloud Composer security overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview](https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview)
- Source ID: `site-iam-reference`
- Final score: 43
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Customer Managed Encryption Keys (CMEK) Cloud Composer supports Customer Managed Encryption Keys (CMEK) .
- If you prefer, you can configure Cloud Composer environments to be encrypted with customer-managed encryption keys .
- Secret Manager as a storage for sensitive configuration data In Cloud Composer, you can configure Airflow to use Secret Manager as a backend where Airflow connection variables are stored.
- Web server network access control levels (ACL) Airflow web servers in Cloud Composer are always provisioned with an externally accessible IP address.

### Security best practices \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/security-practices](https://docs.cloud.google.com/composer/docs/composer-1/security-practices)
- Source ID: `site-iam-reference`
- Final score: 40
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- All Cloud Composer's external interfaces use encryption by default.
- Where required, use Secret Manager to securely store Airflow connections and Airflow secrets, API keys, passwords, and certificates.
- Home Documentation Data analytics Cloud Composer Composer 1 Guides Send feedback Security best practices Stay organized with collections Save and categorize content based on your preferences.
- This page outlines key best practices, including recommendations for network security, Identity and Access Management, encryption, and environment configuration management.

