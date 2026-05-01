# Pnpm package manager support

Product: Cloud Run functions
Feature slug: `pnpm-package-manager-support`
Coverage: `LOW`
IAM mapping: `explicit`

## Technical Summary

Cloud Run functions supports using the Pnpm package manager for Node.js runtime dependencies.

## Lifecycle

- Latest feature date: 2023-06-01
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
- iam
- identity
- logging
- permission
- policy
- role
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/functions/docs/reference/iam/roles](https://docs.cloud.google.com/functions/docs/reference/iam/roles)
- [https://docs.cloud.google.com/functions/docs/running/direct-vpc](https://docs.cloud.google.com/functions/docs/running/direct-vpc)
- [https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub](https://docs.cloud.google.com/functions/docs/tutorials/terraform-pubsub)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
