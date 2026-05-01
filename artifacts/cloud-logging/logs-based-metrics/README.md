# Logs-based metrics

Product: Cloud Logging
Feature slug: `logs-based-metrics`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Logs-based metrics derive monitoring metrics from log data.

## Lifecycle

- Latest feature date: 2017-11-29
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

## Security Capabilities

- access
- audit
- auth
- authorization
- iam
- identity
- key
- kms
- logging
- permission
- policy
- private
- role
- security
- threat

## Official Evidence

- [https://docs.cloud.google.com/logging/docs/access-control](https://docs.cloud.google.com/logging/docs/access-control)
- [https://docs.cloud.google.com/logging/docs/api/platform-logs](https://docs.cloud.google.com/logging/docs/api/platform-logs)
- [https://docs.cloud.google.com/logging/docs/logs-based-metrics](https://docs.cloud.google.com/logging/docs/logs-based-metrics)
