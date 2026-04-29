# Secret Manager Secret Version Manager IAM role

Product: Secret Manager
Feature slug: `secret-manager-secret-version-manager-iam-role`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

This IAM role allows managing secret versions.

## Lifecycle

- Latest feature date: 2020-07-20
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
- auth
- authorization
- credential
- encrypt
- iam
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
- [https://docs.cloud.google.com/secret-manager/docs/access-control](https://docs.cloud.google.com/secret-manager/docs/access-control)
- [https://docs.cloud.google.com/secret-manager/docs/access-secret-version](https://docs.cloud.google.com/secret-manager/docs/access-secret-version)
