# Analyze Policy API support for Secret Manager resources

Product: Secret Manager
Feature slug: `analyze-policy-api-support-for-secret-manager-resources`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The Analyze Policy API added support for Secret Manager secret and secret version resource types.

## Lifecycle

- Latest feature date: 2021-08-24
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- authorization
- encrypt
- iam
- key
- kms
- permission
- policy
- secret
- token

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient)
- [https://docs.cloud.google.com/secret-manager/docs/analyze-resources](https://docs.cloud.google.com/secret-manager/docs/analyze-resources)
- [https://docs.cloud.google.com/secret-manager/docs/cmek](https://docs.cloud.google.com/secret-manager/docs/cmek)
