# Storage Object User IAM role

Product: Cloud Storage
Feature slug: `storage-object-user-iam-role`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The Storage Object User role grants object and metadata access without granting access to object ACLs.

## Lifecycle

- Latest feature date: 2023-08-23
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
- constraint
- iam
- identity
- key
- kms
- permission
- policy
- role

## Official Evidence

- [https://docs.cloud.google.com/storage/docs/access-control/iam-roles](https://docs.cloud.google.com/storage/docs/access-control/iam-roles)
- [https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions)
- [https://docs.cloud.google.com/storage/docs/discover-object-storage-console](https://docs.cloud.google.com/storage/docs/discover-object-storage-console)
- [https://docs.cloud.google.com/storage/docs/discover-object-storage-gcloud](https://docs.cloud.google.com/storage/docs/discover-object-storage-gcloud)
