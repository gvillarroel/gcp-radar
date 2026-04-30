# Log scope management with Logging API

Product: Cloud Logging
Feature slug: `log-scope-management-with-logging-api`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The Logging API can create and manage log scopes.

## Lifecycle

- Latest feature date: 2024-09-16
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
- iam
- key
- logging
- permission
- policy
- private
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control)
- [https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListLogScopesResponse](https://docs.cloud.google.com/logging/docs/reference/v2/rest/v2/ListLogScopesResponse)
- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
