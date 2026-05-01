# Performance recommendations

Product: Cloud Run functions
Feature slug: `performance-recommendations`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Cloud Run functions provides performance recommendations that analyze cold starts and suggest minimum instances settings.

## Lifecycle

- Latest feature date: 2023-02-27
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
- constraint
- credential
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
- [https://docs.cloud.google.com/functions/docs/securing/custom-constraints](https://docs.cloud.google.com/functions/docs/securing/custom-constraints)
- [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting)
