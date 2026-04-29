# Parameter version comparison

Product: Secret Manager
Feature slug: `parameter-version-comparison`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

You can compare two parameter versions to inspect payload changes over time.

## Lifecycle

- Latest feature date: 2026-02-06
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- audit
- key
- private
- secret

## Official Evidence

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-secretmanager/latest/com.google.cloud.secretmanager.v1.AccessSecretVersionRequest](https://docs.cloud.google.com/java/docs/reference/google-cloud-secretmanager/latest/com.google.cloud.secretmanager.v1.AccessSecretVersionRequest)
- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.pagers.ListSecretVersionsAsyncPager](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.pagers.ListSecretVersionsAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.pagers.ListSecretVersionsPager](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.pagers.ListSecretVersionsPager)
- [https://docs.cloud.google.com/secret-manager/docs/overview](https://docs.cloud.google.com/secret-manager/docs/overview)
