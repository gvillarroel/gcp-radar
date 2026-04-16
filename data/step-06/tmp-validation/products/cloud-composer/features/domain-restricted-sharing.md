---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T01:12:02.749Z"
product_name: "Cloud Composer"
product_slug: "cloud-composer"
feature_name: "Domain restricted sharing"
feature_slug: "domain-restricted-sharing"
latest_feature_date: "2021-02-16"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview"
  - "https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption"
  - "https://docs.cloud.google.com/composer/docs/composer-1/environment-architecture"
keywords:
  - "comply"
  - "policies"
  - "restricted"
  - "sharing"
  - "domain"
  - "environments"
  - "supports"
---

# Domain restricted sharing

Product: Cloud Composer
Coverage: LOW

## Step 02 Summary

Cloud Composer supports environments that comply with domain restricted sharing policies.

## Extended Definition

Cloud Composer supports environments that comply with domain restricted sharing policies.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview](https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview)
- [https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption](https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption)
- [https://docs.cloud.google.com/composer/docs/composer-1/environment-architecture](https://docs.cloud.google.com/composer/docs/composer-1/environment-architecture)

## Supporting Pages

### "Configure encryption with customer-managed encryption keys \_|\_ Cloud Composer\

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption](https://docs.cloud.google.com/composer/docs/composer-1/configure-cmek-encryption)
- Source ID: `site-iam-reference`
- Final score: 31
- Re-rank relevance: N/A

Evidence snippets:
- Grant roles to service agents Important: If your project has a Domain restricted sharing policy that excludes addresses from the google.com domain.
- Important: If your project has a Domain restricted sharing policy that excludes addresses from the google.com domain.
- Example: gcloud composer environments describe \ example-environment \ --location us-central1 \ --format = "value(config.encryptionConfig)" Use CMEK for Cloud Composer logs Cloud Logging supports encrypting Log storage with CMEK keys.
- Example: gcloud composer environments create example-environment \ --location us-central1 \ --image-version composer-1.20.12-airflow-1.10.15 \ --kms-key projects/example-project/locations/us-central1/keyRings/example-key-ring/cryptoKeys/example-key View the environment's encryption configuration You can view encryption configuration for an existing environment: Console In Google Cloud console, go to the Environments page.

### Cloud Composer security overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview](https://docs.cloud.google.com/composer/docs/composer-1/composer-security-overview)
- Source ID: `site-iam-reference`
- Final score: 31
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Composer supports Domain Restricted Sharing organizational policy .
- Domain Restricted Sharing (DRS) .
- If you use this policy, then only users from the selected domains can access your environments.
- Cloud Composer 1 environments that were created based on GKE versions 1.18 and later use Shielded VMs to run the nodes of their environment cluster.

### Environment architecture \_|\_ Cloud Composer \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/composer/docs/composer-1/environment-architecture](https://docs.cloud.google.com/composer/docs/composer-1/environment-architecture)
- Source ID: `site-iam-reference`
- Final score: 29
- Re-rank relevance: N/A

Evidence snippets:
- Environment architecture configurations Cloud Composer 1 environments can have the following architecture configurations: Public IP architecture Private IP architecture with VPC peerings Private IP with Domain restricted sharing (DRS) architecture Customer and tenant projects When you create an environment, Cloud Composer distributes the environment's resources between a tenant and a customer project: Customer project is a Google Cloud project where you create your environments.
- Private IP environment architecture (click to enlarge) If the Domain Restricted Sharing (DRS) organizational policy is turned on in your project, then Cloud Composer uses the Private IP with DRS environment architecture.
- Private IP environments use two Cloud SQL Proxy instances because the customer project does not access the database directly due to network limitations.
- Private IP environments use two Cloud SQL Proxy instances because the customer project does not access the database directly due to network limitations.

