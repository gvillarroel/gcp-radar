---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.612Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Customer-managed encryption keys"
feature_slug: "customer-managed-encryption-keys"
latest_feature_date: "2022-03-01"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption"
  - "https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview"
  - "https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments"
keywords:
  - "customer"
  - "managed"
  - "encryption"
  - "keys"
  - "composer"
  - "supports"
  - "encrypting"
  - "environment"
---

# Customer-managed encryption keys

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer 2 supports customer-managed encryption keys for encrypting environment resources; Cloud Composer supports customer-managed encryption keys for protecting resources.

## Extended Definition

Cloud Composer 2 supports customer-managed encryption keys for encrypting environment resources; Cloud Composer supports customer-managed encryption keys for protecting resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption](https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption)
- [https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview](https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview)
- [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)

## Supporting Pages

### "Configure encryption with customer-managed encryption keys \_|\_ Cloud Composer\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption](https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption)
- Source ID: `site-iam-reference`
- Final score: 42
- Re-rank relevance: N/A

Evidence snippets:
- Data protected with CMEK encryption Cloud Composer protects the following data with CMEK encryption: Contents and schema of the Airflow database Environment and Airflow task logs in Cloud Logging Contents of the environment's bucket Secrets stored in the environment's cluster Persistent disks used by the task queue Container images of environment components stored in Artifact Registry repositories For specific details about how the data is encrypted, see: About customer-managed encryption keys (CMEK) in the Cloud SQL documentation.
- Cloud Composer stores the following information protected with Google-owned and Google-managed encryption keys, not customer-managed keys: Environment name Airflow configuration overrides Environment variables Descriptions of allowed IP ranges IP ranges Labels The names of some parameters stored by Cloud Composer can include a sub-string of environment's name.
- Example: gcloud composer environments describe \ example-environment \ --location us-central1 \ --format = "value(config.encryptionConfig)" Use CMEK for Cloud Composer logs Cloud Logging supports encrypting Log storage with CMEK keys.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This page describes how to use Customer Managed Encryption Keys (CMEK) to protect Cloud Composer environments.

### Cloud Composer security overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview](https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview)
- Source ID: `site-iam-reference`
- Final score: 42
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you prefer, you can configure Cloud Composer environments to be encrypted with customer-managed encryption keys .
- Customer Managed Encryption Keys (CMEK) Cloud Composer supports Customer Managed Encryption Keys (CMEK) .
- By default, data is encrypted using Google-owned and Google-managed encryption keys.
- Cloud Composer 1 environments that were created based on GKE versions 1.18 and later use Shielded VMs to run the nodes of their environment cluster.

### "REST Resource: projects.locations.environments \_|\_ Cloud Composer \_|\_\

- URL: [https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments](https://docs.cloud.google.com/composer/docs/reference/rest/v1/projects.locations.environments)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: N/A

Evidence snippets:
- ConnectionType Represents connection type between Composer environment in Customer Project and the corresponding Tenant project, from a predefined list of available connection modes.
- EncryptionConfig The encryption options for the Cloud Composer environment and its dependencies.Supported for Cloud Composer environments in versions composer-1. . -airflow- . . .
- Customer-managed Encryption Key available through Google's Key Management Service.
- The encryption options for the Cloud Composer environment and its dependencies.

