# Uptime check JSONPath validation

Product: Cloud Monitoring
Feature slug: `uptime-check-jsonpath-validation`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Uptime checks can validate a specific JSONPath in the response data.

## Lifecycle

- Latest feature date: 2022-05-26
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
- auth
- certificate
- credential
- iam
- key
- logging
- permission
- policy
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control)
- [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
- [https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog](https://docs.cloud.google.com/python/docs/reference/monitoring/latest/changelog)
