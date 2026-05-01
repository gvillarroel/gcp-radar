# Import jobs

Product: Cloud Key Management Service
Feature slug: `import-jobs`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Cloud KMS beta introduced import jobs and related API resources for importing key material into HSM keys.

## Lifecycle

- Latest feature date: 2019-07-01
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
- audit
- encrypt
- iam
- key
- kms
- logging
- permission
- policy
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/kms/docs/importing-a-key](https://docs.cloud.google.com/kms/docs/importing-a-key)
- [https://docs.cloud.google.com/kms/docs/reference/libraries](https://docs.cloud.google.com/kms/docs/reference/libraries)
- [https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles](https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles)
- [https://docs.cloud.google.com/kms/docs/reference/rest](https://docs.cloud.google.com/kms/docs/reference/rest)
