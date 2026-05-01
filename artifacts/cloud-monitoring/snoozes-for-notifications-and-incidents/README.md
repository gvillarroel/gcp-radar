# Snoozes for notifications and incidents

Product: Cloud Monitoring
Feature slug: `snoozes-for-notifications-and-incidents`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Snoozes can suppress Cloud Monitoring notifications and incident creation during specified time periods.

## Lifecycle

- Latest feature date: 2022-08-11
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
- permission
- policy
- role

## Official Evidence

- [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control)
- [https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring](https://docs.cloud.google.com/monitoring/docs/setup-application-monitoring)
- [https://docs.cloud.google.com/monitoring/docs/troubleshoot-application-monitoring](https://docs.cloud.google.com/monitoring/docs/troubleshoot-application-monitoring)
