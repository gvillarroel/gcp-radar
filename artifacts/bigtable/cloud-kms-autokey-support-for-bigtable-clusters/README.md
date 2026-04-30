# Cloud KMS Autokey support for Bigtable clusters

Product: Bigtable
Feature slug: `cloud-kms-autokey-support-for-bigtable-clusters`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Bigtable now supports using Cloud KMS Autokey in the Cloud console to automate creation and use of CMEK for Bigtable clusters.

## Lifecycle

- Latest feature date: 2025-10-28
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
- auth
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

- [https://docs.cloud.google.com/bigtable/docs/access-control](https://docs.cloud.google.com/bigtable/docs/access-control)
- [https://docs.cloud.google.com/bigtable/docs/cmek](https://docs.cloud.google.com/bigtable/docs/cmek)
- [https://docs.cloud.google.com/bigtable/docs/creating-instance](https://docs.cloud.google.com/bigtable/docs/creating-instance)
