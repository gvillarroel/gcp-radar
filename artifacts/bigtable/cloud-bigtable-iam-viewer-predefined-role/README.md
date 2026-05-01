# Cloud Bigtable IAM viewer predefined role

Product: Bigtable
Feature slug: `cloud-bigtable-iam-viewer-predefined-role`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Cloud Bigtable IAM predefined roles now include a viewer role for basic console access.

## Lifecycle

- Latest feature date: 2017-09-19
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
- auth
- iam
- identity
- key
- permission
- policy
- role
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/roles-overview](https://docs.cloud.google.com/iam/docs/roles-overview)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/actions](https://docs.cloud.google.com/iam/docs/roles-permissions/actions)
- [https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable](https://docs.cloud.google.com/iam/docs/roles-permissions/bigtable)
