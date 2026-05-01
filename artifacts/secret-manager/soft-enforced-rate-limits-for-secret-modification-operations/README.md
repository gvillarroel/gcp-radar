# Soft-enforced rate limits for secret modification operations

Product: Secret Manager
Feature slug: `soft-enforced-rate-limits-for-secret-modification-operations`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Secret Manager uses soft-enforced rate limits for selected secret and secret-version modification operations.

## Lifecycle

- Latest feature date: 2025-07-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- encrypt
- iam
- key
- permission
- policy
- private
- secret

## Official Evidence

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-secretmanager/latest/com.google.cloud.secretmanager.v1.AccessSecretVersionRequest](https://docs.cloud.google.com/java/docs/reference/google-cloud-secretmanager/latest/com.google.cloud.secretmanager.v1.AccessSecretVersionRequest)
- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient)
- [https://docs.cloud.google.com/secret-manager/docs/creating-and-accessing-secrets](https://docs.cloud.google.com/secret-manager/docs/creating-and-accessing-secrets)
