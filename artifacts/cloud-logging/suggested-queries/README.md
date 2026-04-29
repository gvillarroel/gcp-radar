# Suggested queries

Product: Cloud Logging
Feature slug: `suggested-queries`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Cloud Logging provides suggested queries based on the context of a Google Cloud project.

## Lifecycle

- Latest feature date: 2020-08-17
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
- [https://docs.cloud.google.com/logging/docs/view/building-queries](https://docs.cloud.google.com/logging/docs/view/building-queries)
- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
