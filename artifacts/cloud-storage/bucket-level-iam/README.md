# Bucket-level IAM

Product: Cloud Storage
Feature slug: `bucket-level-iam`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Bucket-level IAM allows IAM permissions to be applied directly to individual Cloud Storage buckets.

## Lifecycle

- Latest feature date: 2016-09-26
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
- encrypt
- iam
- identity
- key
- kms
- permission
- policy
- role

## Official Evidence

- [https://docs.cloud.google.com/storage/docs/access-control/iam](https://docs.cloud.google.com/storage/docs/access-control/iam)
- [https://docs.cloud.google.com/storage/docs/access-control/iam-gcloud](https://docs.cloud.google.com/storage/docs/access-control/iam-gcloud)
- [https://docs.cloud.google.com/storage/docs/access-control/iam-roles](https://docs.cloud.google.com/storage/docs/access-control/iam-roles)
- [https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions](https://docs.cloud.google.com/storage/docs/access-control/using-iam-permissions)
