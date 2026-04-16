---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.035Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Customer-managed encryption keys for Cloud Composer 3"
feature_slug: "customer-managed-encryption-keys-for-cloud-composer-3"
latest_feature_date: "2025-03-04"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption"
  - "https://docs.cloud.google.com/composer/docs/composer-1/create-environments"
  - "https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview"
keywords:
  - "customer"
  - "managed"
  - "encryption"
  - "keys"
  - "composer"
  - "supports"
  - "environment"
---

# Customer-managed encryption keys for Cloud Composer 3

Product: Cloud Composer
Coverage: MEDIUM

## Step 02 Summary

Cloud Composer 3 supports customer-managed encryption keys for environment encryption.

## Extended Definition

Cloud Composer 3 supports customer-managed encryption keys for environment encryption.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption](https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption)
- [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- [https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview](https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview)

## Supporting Pages

### "Configure encryption with customer-managed encryption keys \_|\_ Cloud Composer\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption](https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption)
- Source ID: `site-iam-reference`
- Final score: 253
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Data protected with CMEK encryption Cloud Composer protects the following data with CMEK encryption: Contents and schema of the Airflow database Environment and Airflow task logs in Cloud Logging Contents of the environment's bucket Secrets stored in the environment's cluster Persistent disks used by the task queue Container images of environment components stored in Artifact Registry repositories For specific details about how the data is encrypted, see: About customer-managed encryption keys (CMEK) in the Cloud SQL documentation.
- Cloud Composer stores the following information protected with Google-owned and Google-managed encryption keys, not customer-managed keys: Environment name Airflow configuration overrides Environment variables Descriptions of allowed IP ranges IP ranges Labels The names of some parameters stored by Cloud Composer can include a sub-string of environment's name.
- Cloud Composer 3 Cloud Composer 2 Cloud Composer 1 This page describes how to use Customer Managed Encryption Keys (CMEK) to protect Cloud Composer environments.
- Example: gcloud composer environments describe \ example-environment \ --location us-central1 \ --format = "value(config.encryptionConfig)" Use CMEK for Cloud Composer logs Cloud Logging supports encrypting Log storage with CMEK keys.

### Create Cloud Composer environments \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/create-environments](https://docs.cloud.google.com/composer/docs/composer-1/create-environments)
- Source ID: `site-iam-reference`
- Final score: 159
- Re-rank relevance: N/A

Evidence snippets:
- To use customer-managed encryption keys (CMEK) to encrypt data in your environment, follow the instructions outlined in Using customer-managed encryption keys .
- Variable names may contain upper and lowercase letters, digits, and underscores, but they may not begin with a digit. --airflow-configs specifies a comma-separated list of keys and values for Airflow configuration overrides. gcloud composer environments create ENVIRONMENT NAME \ --location LOCATION \ --image-version composer-1.20.12-airflow-1.10.15 \ --service-account " SERVICE ACCOUNT " \ --env-variables ENV VARS \ --airflow-configs CONFIG OVERRIDES Replace: ENV VARS with a list of comma-separated NAME=VALUE pairs for environment variables.
- In Key and Value fields, specify key and value pairs for the environment labels. gcloud When you create an environment, the --labels argument specifies a comma-separated list of keys and values with environment labels. gcloud composer environments create ENVIRONMENT NAME \ --location LOCATION \ --image-version composer-1.20.12-airflow-1.10.15 \ --service-account " SERVICE ACCOUNT " \ --labels LABELS Replace: LABELS with a list of comma-separated KEY=VALUE pairs for environment labels.
- The 1 January, 2023 date is ignored. resource "google composer environment" "example" { provider = google-beta name = "example-environment" region = "us-central1" config { maintenance window { start time = "2023-01-01T01:00:00Z" end time = "2023-01-01T07:00:00Z" recurrence = "FREQ=WEEKLY;BYDAY=SU,WE,SA" } } } Step 9. (Optional) Configure data encryption (CMEK) By default, data in your environment is encrypted with a key provided by Google.

### Cloud Composer security overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview](https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview)
- Source ID: `site-iam-reference`
- Final score: 155
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If you prefer, you can configure Cloud Composer environments to be encrypted with customer-managed encryption keys .
- Customer Managed Encryption Keys (CMEK) Cloud Composer supports Customer Managed Encryption Keys (CMEK) .
- By default, data is encrypted using Google-owned and Google-managed encryption keys.
- Cloud Composer 1 environments that were created based on GKE versions 1.18 and later use Shielded VMs to run the nodes of their environment cluster.

