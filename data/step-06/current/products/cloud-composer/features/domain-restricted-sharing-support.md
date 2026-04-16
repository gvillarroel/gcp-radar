---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:34:19.833Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Domain restricted sharing support"
feature_slug: "domain-restricted-sharing-support"
latest_feature_date: "2019-10-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption"
  - "https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview"
  - "https://docs.cloud.google.com/composer/docs/composer-1/environment-architecture"
keywords:
  - "domain"
  - "restricted"
  - "sharing"
  - "composer"
  - "supports"
  - "beta"
---

# Domain restricted sharing support

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer supports Domain restricted sharing in beta.

## Extended Definition

Cloud Composer supports Domain restricted sharing in beta.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption](https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption)
- [https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview](https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview)
- [https://docs.cloud.google.com/composer/docs/composer-1/environment-architecture](https://docs.cloud.google.com/composer/docs/composer-1/environment-architecture)

## Supporting Pages

### Cloud Composer security overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview](https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview)
- Source ID: `site-iam-reference`
- Final score: 31
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Composer supports Domain Restricted Sharing organizational policy .
- Domain Restricted Sharing (DRS) .
- Customer Managed Encryption Keys (CMEK) Cloud Composer supports Customer Managed Encryption Keys (CMEK) .
- Cloud Composer supports IPv4 and IPv6 ranges.

### "Configure encryption with customer-managed encryption keys \_|\_ Cloud Composer\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption](https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption)
- Source ID: `site-iam-reference`
- Final score: 29
- Re-rank relevance: N/A

Evidence snippets:
- Grant roles to service agents Important: If your project has a Domain restricted sharing policy that excludes addresses from the google.com domain.
- Important: If your project has a Domain restricted sharing policy that excludes addresses from the google.com domain.
- Example: gcloud beta services identity create \ --service = composer.googleapis.com Grant permissions to service agents: Grant the role to Cloud Composer Service Agent: gcloud kms keys add-iam-policy-binding KEY NAME \ --location KEY LOCATION \ --keyring KEY RING NAME \ --member = serviceAccount:service- PROJECT NUMBER @cloudcomposer-accounts.iam.gserviceaccount.com \ --role = roles/cloudkms.cryptoKeyEncrypterDecrypter \ --project KEY PROJECT ID Grant the role to Artifact Registry Service Agent: gcloud kms keys add-iam-policy-binding KEY NAME \ --location KEY LOCATION \ --keyring KEY RING NAME \ --member = serviceAccount:service- PROJECT NUMBER @gcp-sa-artifactregistry.iam.gserviceaccount.com \ --role = roles/cloudkms.cryptoKeyEncrypterDecrypter \ --project KEY PROJECT ID Grant the role to GKE Service Agent: gcloud kms keys add-iam-policy-binding KEY NAME \ --location KEY LOCATION \ --keyring KEY RING NAME \ --member = serviceAccount:service- PROJECT NUMBER @container-engine-robot.iam.gserviceaccount.com \ --role = roles/cloudkms.cryptoKeyEncrypterDecrypter \ --project KEY PROJECT ID Grant the role to Pub/Sub Service Agent: gcloud kms keys add-iam-policy-binding KEY NAME \ --location KEY LOCATION \ --keyring KEY RING NAME \ --member = serviceAccount:service- PROJECT NUMBER @gcp-sa-pubsub.iam.gserviceaccount.com \ --role = roles/cloudkms.cryptoKeyEncrypterDecrypter \ --project KEY PROJECT ID Grant the role to Compute Engine Service Agent: gcloud kms keys add-iam-policy-binding KEY NAME \ --location KEY LOCATION \ --keyring KEY RING NAME \ --member = serviceAccount:service- PROJECT NUMBER @compute-system.iam.gserviceaccount.com \ --role = roles/cloudkms.cryptoKeyEncrypterDecrypter \ --project KEY PROJECT ID Grant encrypt/decrypt permissions to Cloud Storage Service Agent. gcloud storage service-agent \ --authorize-cmek = projects/ KEY PROJECT ID /locations/ KEY LOCATION /keyRings/ KEY RING NAME /cryptoKeys/ KEY NAME Replace: PROJECT ID with your project's ID .
- Example: gcloud beta logging sinks update Default \ --add-exclusion name = example-environment-exclusion,filter = "resource.type=cloud composer environment AND resource.labels.environment name=example-environment AND resource.labels.location=us-central1" Add organization-level CMEK encryption to the Log Router. gcloud logging cmek-settings describe \ --organization = ORGANIZATION ID gcloud kms keys add-iam-policy-binding \ --project = KEY PROJECT ID \ --member LOGGING SERVICE AGENT \ --role roles/cloudkms.cryptoKeyEncrypterDecrypter \ --location = KEY LOCATION \ --keyring = KEY RING NAME \ KEY NAME gcloud logging cmek-settings update \ --organization = ORGANIZATION ID \ --kms-project = KEY PROJECT ID \ --kms-keyring = KEY RING NAME \ --kms-location = KEY LOCATION \ --kms-key-name = KEY NAME Replace: ORGANIZATION ID with your organization ID .

### Environment architecture \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/environment-architecture](https://docs.cloud.google.com/composer/docs/composer-1/environment-architecture)
- Source ID: `site-iam-reference`
- Final score: 29
- Re-rank relevance: N/A

Evidence snippets:
- Environment architecture configurations Cloud Composer 1 environments can have the following architecture configurations: Public IP architecture Private IP architecture with VPC peerings Private IP with Domain restricted sharing (DRS) architecture Customer and tenant projects When you create an environment, Cloud Composer distributes the environment's resources between a tenant and a customer project: Customer project is a Google Cloud project where you create your environments.
- Private IP environment architecture (click to enlarge) If the Domain Restricted Sharing (DRS) organizational policy is turned on in your project, then Cloud Composer uses the Private IP with DRS environment architecture.
- Public IP environment architecture (click to enlarge) In a Public IP environment architecture for Cloud Composer 1: The tenant project hosts a Cloud SQL instance, Cloud SQL storage, and a App Engine Flex instance that runs the Airflow web server.
- Integration with Cloud Logging and Cloud Monitoring Cloud Composer integrates with Cloud Logging and Cloud Monitoring of your Google Cloud project, so that you have a central place to view Airflow and DAG logs .

