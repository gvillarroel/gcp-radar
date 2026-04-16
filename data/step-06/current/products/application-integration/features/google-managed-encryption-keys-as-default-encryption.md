---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T07:40:14.491Z"
product_name: "Application Integration"
product_slug: "application-integration"
feature_name: "Google-managed encryption keys as default encryption"
feature_slug: "google-managed-encryption-keys-as-default-encryption"
latest_feature_date: "2023-05-22"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/application-integration/docs/cmek"
  - "https://docs.cloud.google.com/application-integration/docs/setup-application-integration"
  - "https://docs.cloud.google.com/application-integration/docs/access-control"
keywords:
  - "uses"
  - "encryption"
  - "managed"
  - "keys"
  - "default"
---

# Google-managed encryption keys as default encryption

Product: Application Integration
Coverage: MEDIUM

## Step 02 Summary

Application Integration now uses Google-managed encryption keys by default for provisioned regions.

## Extended Definition

Application Integration now uses Google-managed encryption keys by default for provisioned regions.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/application-integration/docs/cmek](https://docs.cloud.google.com/application-integration/docs/cmek)
- [https://docs.cloud.google.com/application-integration/docs/setup-application-integration](https://docs.cloud.google.com/application-integration/docs/setup-application-integration)
- [https://docs.cloud.google.com/application-integration/docs/access-control](https://docs.cloud.google.com/application-integration/docs/access-control)

## Supporting Pages

### "Customer-managed encryption keys \_|\_ Application Integration \_|\_ Google\

- URL: [https://docs.cloud.google.com/application-integration/docs/cmek](https://docs.cloud.google.com/application-integration/docs/cmek)
- Source ID: `site-docs-root-2`
- Final score: 164
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Customer-managed encryption keys By default, Application Integration encrypts customer content at rest.
- If you want to control your encryption keys, then you can use customer-managed encryption keys (CMEKs) in Cloud KMS with CMEK-integrated services including Application Integration.
- Tip: When you use Google-owned and Google-managed encryption keys in Application Integration, your tenant projects consumes Cloud KMS cryptographic requests quotas.
- For more information about your encryption options, see Customer-managed encryption keys (CMEK) .

### Set up Application Integration \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/application-integration/docs/setup-application-integration](https://docs.cloud.google.com/application-integration/docs/setup-application-integration)
- Source ID: `site-docs-root`
- Final score: 114
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- The default configurations include enabling APIs ( Application Integration API , Secret manager API , and Connectors API ), creating a default service account , and using Google-owned and Google-managed encryption keys as the encryption method for the selected region.
- Customer-managed encryption key (CMEK): Use this method if you want to control and manage the encryption keys that protect your data in the selected region.
- This allows integration data to be encrypted with your own keys instead of Google-owned and Google-managed encryption keys.
- Cloud KMS API cloudkms.googleapis.com Enables the use of Customer-managed encryption keys (CMEK) for data encryption.

### "Access control overview \_|\_ Application Integration \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/application-integration/docs/access-control](https://docs.cloud.google.com/application-integration/docs/access-control)
- Source ID: `site-docs-root-2`
- Final score: 68
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Application Integration uses two types of service accounts: User-managed service account Default service account User-managed service account A user-managed service account can be attached to an integration to provide credentials to execute the task.
- A user-managed service account has the following email address: service-account-name@ PROJECT ID .iam.gserviceaccount.com Default service account New Google Cloud projects that have provisioned Application Integration have an Application Integration default service account , which has the following email address: service- PROJECT NUMBER @gcp-sa-integrations.iam.gserviceaccount.com The Application Integration default service account is created during provisioning and is automatically added to your project with the basic IAM roles and permissions.
- If neither OAuth 2.0 profile nor user-managed service account is configured, then the default service account ( service- PROJECT NUMBER @gcp-sa-integrations.iam.gserviceaccount.com ) is used.
- Authentication rule If your integration has both OAuth 2.0 profile and a user-managed service account configured, then by default the OAuth 2.0 profile is used for authentication.

