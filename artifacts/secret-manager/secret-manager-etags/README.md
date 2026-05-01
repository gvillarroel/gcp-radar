# Secret Manager ETags

Product: Secret Manager
Feature slug: `secret-manager-etags`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Secret Manager added ETags for optimistic concurrency control; Secret Manager added ETags for optimistic concurrency control in Preview.

## Lifecycle

- Latest feature date: 2021-07-20
- Deprecation date: none recorded
- Status: feature_observed

## IAM

Explicit IAM evidence was found in the supporting documentation.

Roles:

- `roles/accessapproval.admin`
- `roles/accessapproval.approver`
- `roles/accessapproval.configEditor`

Permissions:

- `resourcemanager.projects.get`
- `resourcemanager.projects.list`

## Security Capabilities

- access
- allow
- audit
- auth
- authorization
- encrypt
- iam
- key
- kms
- logging
- permission
- policy
- role
- secret
- token

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient](https://docs.cloud.google.com/python/docs/reference/secretmanager/latest/google.cloud.secretmanager_v1.services.secret_manager_service.SecretManagerServiceClient)
- [https://docs.cloud.google.com/secret-manager/docs/access-control](https://docs.cloud.google.com/secret-manager/docs/access-control)
- [https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-expiring-secrets](https://docs.cloud.google.com/secret-manager/docs/creating-and-managing-expiring-secrets)
