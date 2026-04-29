# Firebase Remote Config triggers

Product: Cloud Run functions
Feature slug: `firebase-remote-config-triggers`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Cloud Run functions 2nd gen supports Firebase Remote Config triggers.

## Lifecycle

- Latest feature date: 2022-03-21
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
- iam
- identity
- key
- kms
- logging
- permission
- policy
- role
- secret
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/functions/docs/reference/iam/roles](https://docs.cloud.google.com/functions/docs/reference/iam/roles)
- [https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/AuditConfig](https://docs.cloud.google.com/functions/docs/reference/rest/Shared.Types/AuditConfig)
- [https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions](https://docs.cloud.google.com/functions/docs/reference/rest/v1/projects.locations.functions)
