# Organization policy constraint gcp.restrictNonCmekServices

Product: Cloud Storage
Feature slug: `organization-policy-constraint-gcp-restrictnoncmekservices`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

This organization policy constraint requires selected resources to use customer-managed encryption keys.

## Lifecycle

- Latest feature date: 2022-03-25
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
- constraint
- encrypt
- iam
- identity
- key
- kms
- logging
- permission
- policy
- role
- security

## Official Evidence

- [https://docs.cloud.google.com/storage/docs/access-control/iam-roles](https://docs.cloud.google.com/storage/docs/access-control/iam-roles)
- [https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys](https://docs.cloud.google.com/storage/docs/authentication/managing-hmackeys)
- [https://docs.cloud.google.com/storage/docs/creating-buckets](https://docs.cloud.google.com/storage/docs/creating-buckets)
- [https://docs.cloud.google.com/storage/docs/troubleshooting](https://docs.cloud.google.com/storage/docs/troubleshooting)
