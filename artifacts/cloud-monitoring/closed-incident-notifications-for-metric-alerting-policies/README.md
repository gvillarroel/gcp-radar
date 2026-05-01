# Closed-incident notifications for metric alerting policies

Product: Cloud Monitoring
Feature slug: `closed-incident-notifications-for-metric-alerting-policies`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The Monitoring API can configure metric-based alerting policies to send notifications when incidents are closed.

## Lifecycle

- Latest feature date: 2024-10-14
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
- logging
- permission
- policy
- role

## Official Evidence

- [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control)
- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- [https://docs.cloud.google.com/monitoring/docs/troubleshoot-application-monitoring](https://docs.cloud.google.com/monitoring/docs/troubleshoot-application-monitoring)
