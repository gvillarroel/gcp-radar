---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:12:01.916Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Custom constraints with Organization Policy"
feature_slug: "custom-constraints-with-organization-policy"
latest_feature_date: "2025-03-15"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption"
  - "https://docs.cloud.google.com/composer/docs/airflow-configurations"
  - "https://docs.cloud.google.com/composer/docs/concepts/airflow-configurations"
keywords:
  - "deny"
  - "constraints"
  - "allow"
  - "organization"
  - "custom"
  - "policy"
  - "supports"
---

# Custom constraints with Organization Policy

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer supports custom organization policy constraints to allow or deny specific environment configuration values.

## Extended Definition

Cloud Composer supports custom organization policy constraints to allow or deny specific environment configuration values.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption](https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption)
- [https://docs.cloud.google.com/composer/docs/airflow-configurations](https://docs.cloud.google.com/composer/docs/airflow-configurations)
- [https://docs.cloud.google.com/composer/docs/concepts/airflow-configurations](https://docs.cloud.google.com/composer/docs/concepts/airflow-configurations)

## Supporting Pages

### "Blocked and limited Airflow configuration options \_|\_ Cloud Composer \_\

- URL: [https://docs.cloud.google.com/composer/docs/airflow-configurations](https://docs.cloud.google.com/composer/docs/airflow-configurations)
- Source ID: `site-docs-reference`
- Final score: 42
- Re-rank relevance: N/A

### "Blocked and limited Airflow configuration options \_|\_ Cloud Composer \_\

- URL: [https://docs.cloud.google.com/composer/docs/concepts/airflow-configurations](https://docs.cloud.google.com/composer/docs/concepts/airflow-configurations)
- Source ID: `site-docs-reference`
- Final score: 42
- Re-rank relevance: N/A

### "Configure encryption with customer-managed encryption keys \_|\_ Cloud Composer\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption](https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption)
- Source ID: `site-iam-reference`
- Final score: 38
- Re-rank relevance: N/A

Evidence snippets:
- Example: gcloud beta logging sinks update Default \ --add-exclusion name = example-environment-exclusion,filter = "resource.type=cloud composer environment AND resource.labels.environment name=example-environment AND resource.labels.location=us-central1" Add organization-level CMEK encryption to the Log Router. gcloud logging cmek-settings describe \ --organization = ORGANIZATION ID gcloud kms keys add-iam-policy-binding \ --project = KEY PROJECT ID \ --member LOGGING SERVICE AGENT \ --role roles/cloudkms.cryptoKeyEncrypterDecrypter \ --location = KEY LOCATION \ --keyring = KEY RING NAME \ KEY NAME gcloud logging cmek-settings update \ --organization = ORGANIZATION ID \ --kms-project = KEY PROJECT ID \ --kms-keyring = KEY RING NAME \ --kms-location = KEY LOCATION \ --kms-key-name = KEY NAME Replace: ORGANIZATION ID with your organization ID .
- Cloud Composer stores the following information protected with Google-owned and Google-managed encryption keys, not customer-managed keys: Environment name Airflow configuration overrides Environment variables Descriptions of allowed IP ranges IP ranges Labels The names of some parameters stored by Cloud Composer can include a sub-string of environment's name.
- This policy does not affect the creation of environments. gcloud The --kms-key argument specifies a customer-managed enryption key for your environment.
- Example: gcloud beta services identity create \ --service = composer.googleapis.com Grant permissions to service agents: Grant the role to Cloud Composer Service Agent: gcloud kms keys add-iam-policy-binding KEY NAME \ --location KEY LOCATION \ --keyring KEY RING NAME \ --member = serviceAccount:service- PROJECT NUMBER @cloudcomposer-accounts.iam.gserviceaccount.com \ --role = roles/cloudkms.cryptoKeyEncrypterDecrypter \ --project KEY PROJECT ID Grant the role to Artifact Registry Service Agent: gcloud kms keys add-iam-policy-binding KEY NAME \ --location KEY LOCATION \ --keyring KEY RING NAME \ --member = serviceAccount:service- PROJECT NUMBER @gcp-sa-artifactregistry.iam.gserviceaccount.com \ --role = roles/cloudkms.cryptoKeyEncrypterDecrypter \ --project KEY PROJECT ID Grant the role to GKE Service Agent: gcloud kms keys add-iam-policy-binding KEY NAME \ --location KEY LOCATION \ --keyring KEY RING NAME \ --member = serviceAccount:service- PROJECT NUMBER @container-engine-robot.iam.gserviceaccount.com \ --role = roles/cloudkms.cryptoKeyEncrypterDecrypter \ --project KEY PROJECT ID Grant the role to Pub/Sub Service Agent: gcloud kms keys add-iam-policy-binding KEY NAME \ --location KEY LOCATION \ --keyring KEY RING NAME \ --member = serviceAccount:service- PROJECT NUMBER @gcp-sa-pubsub.iam.gserviceaccount.com \ --role = roles/cloudkms.cryptoKeyEncrypterDecrypter \ --project KEY PROJECT ID Grant the role to Compute Engine Service Agent: gcloud kms keys add-iam-policy-binding KEY NAME \ --location KEY LOCATION \ --keyring KEY RING NAME \ --member = serviceAccount:service- PROJECT NUMBER @compute-system.iam.gserviceaccount.com \ --role = roles/cloudkms.cryptoKeyEncrypterDecrypter \ --project KEY PROJECT ID Grant encrypt/decrypt permissions to Cloud Storage Service Agent. gcloud storage service-agent \ --authorize-cmek = projects/ KEY PROJECT ID /locations/ KEY LOCATION /keyRings/ KEY RING NAME /cryptoKeys/ KEY NAME Replace: PROJECT ID with your project's ID .

