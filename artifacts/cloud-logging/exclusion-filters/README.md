# Exclusion filters

Product: Cloud Logging
Feature slug: `exclusion-filters`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Exclusion filters let users control which logs are retained in Cloud Logging; Exclusion filters let users control which logs are retained in Cloud Logging.

## Lifecycle

- Latest feature date: 2017-10-30
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
- iam
- key
- logging
- permission
- policy
- private
- role

## Official Evidence

- [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control)
- [https://docs.cloud.google.com/logging/docs/audit](https://docs.cloud.google.com/logging/docs/audit)
- [https://docs.cloud.google.com/logging/docs/routing/overview](https://docs.cloud.google.com/logging/docs/routing/overview)
