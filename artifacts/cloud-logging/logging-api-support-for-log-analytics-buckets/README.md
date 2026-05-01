# Logging API support for Log Analytics buckets

Product: Cloud Logging
Feature slug: `logging-api-support-for-log-analytics-buckets`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The Logging API can create and upgrade log buckets to use Log Analytics.

## Lifecycle

- Latest feature date: 2023-02-17
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
- policy
- private
- role

## Official Evidence

- [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control)
- [https://docs.cloud.google.com/logging/docs/buckets](https://docs.cloud.google.com/logging/docs/buckets)
- [https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface](https://docs.cloud.google.com/logging/docs/view/logs-viewer-interface)
