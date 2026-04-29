# Uptime check OIDC authentication

Product: Cloud Monitoring
Feature slug: `uptime-check-oidc-authentication`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

This feature lets uptime checks authenticate with a service account and generated OpenID Connect token.

## Lifecycle

- Latest feature date: 2024-03-28
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
- authorization
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
