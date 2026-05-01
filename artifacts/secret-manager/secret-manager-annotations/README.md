# Secret Manager annotations

Product: Secret Manager
Feature slug: `secret-manager-annotations`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Secret Manager added support for annotations as custom metadata on secrets; Secret Manager added support for annotations as custom metadata on secrets.

## Lifecycle

- Latest feature date: 2023-03-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- encrypt
- iam
- key
- permission
- policy
- secret

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.pagers.ListSecretsAsyncPager](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.pagers.ListSecretsAsyncPager)
- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient)
- [https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-annotations](https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-annotations)
