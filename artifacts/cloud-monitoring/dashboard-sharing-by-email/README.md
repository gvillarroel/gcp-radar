# Dashboard sharing by email

Product: Cloud Monitoring
Feature slug: `dashboard-sharing-by-email`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Cloud Monitoring can send dashboard links by email to people or groups in an organization.

## Lifecycle

- Latest feature date: 2023-03-10
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

- access (evidence: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview), [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control), [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management))
- auth (evidence: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview), [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control), [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management))
- authorization (evidence: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview), [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control), [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management))
- constraint (evidence: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview), [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control), [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management))
- iam (evidence: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview), [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control), [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management))
- permission (evidence: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview), [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control), [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management))
- policy (evidence: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview), [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control), [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management))
- role (evidence: [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview), [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control), [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management))

## Official Evidence

- [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control)
- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
- [https://docs.cloud.google.com/monitoring/docs/monitoring-overview](https://docs.cloud.google.com/monitoring/docs/monitoring-overview)
