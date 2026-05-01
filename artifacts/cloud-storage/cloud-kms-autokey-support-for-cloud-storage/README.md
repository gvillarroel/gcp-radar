# Cloud KMS Autokey support for Cloud Storage

Product: Cloud Storage
Feature slug: `cloud-kms-autokey-support-for-cloud-storage`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Cloud Storage supports Cloud KMS Autokey for customer-managed encryption key provisioning.

## Lifecycle

- Latest feature date: 2024-09-24
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
- certificate
- constraint
- credential
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

- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket)
- [https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.BucketEncryption](https://docs.cloud.google.com/python/docs/reference/storage/latest/google.cloud.storage.bucket.BucketEncryption)
- [https://docs.cloud.google.com/storage/docs/access-control/iam-roles](https://docs.cloud.google.com/storage/docs/access-control/iam-roles)
- [https://docs.cloud.google.com/storage/docs/gsutil/addlhelp/ShimforRunninggcloudstorage](https://docs.cloud.google.com/storage/docs/gsutil/addlhelp/ShimforRunninggcloudstorage)
