# IAM Conditions for Cloud Storage

Product: Cloud Storage
Feature slug: `iam-conditions-for-cloud-storage`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

IAM Conditions for Cloud Storage let permissions be granted for limited times or subsets of objects in buckets.

## Lifecycle

- Latest feature date: 2019-12-13
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
- constraint
- encrypt
- iam
- identity
- key
- kms
- permission
- policy
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/storage/docs/access-control/iam-gcloud](https://docs.cloud.google.com/storage/docs/access-control/iam-gcloud)
- [https://docs.cloud.google.com/storage/docs/access-control/iam-roles](https://docs.cloud.google.com/storage/docs/access-control/iam-roles)
- [https://docs.cloud.google.com/storage/docs/access-control/using-iam-for-managed-folders](https://docs.cloud.google.com/storage/docs/access-control/using-iam-for-managed-folders)
- [https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions)
