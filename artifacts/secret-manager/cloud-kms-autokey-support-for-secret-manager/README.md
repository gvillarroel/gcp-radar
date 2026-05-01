# Cloud KMS Autokey support for Secret Manager

Product: Secret Manager
Feature slug: `cloud-kms-autokey-support-for-secret-manager`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Secret Manager can use Cloud KMS Autokey to manage customer-managed encryption keys.

## Lifecycle

- Latest feature date: 2024-09-10
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
- identity
- key
- kms
- permission
- policy
- role
- secret
- token

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient)
- [https://docs.cloud.google.com/secret-manager/docs/analyze-resources](https://docs.cloud.google.com/secret-manager/docs/analyze-resources)
- [https://docs.cloud.google.com/secret-manager/docs/cmek](https://docs.cloud.google.com/secret-manager/docs/cmek)
