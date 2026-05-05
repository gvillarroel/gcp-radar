# Dashboard API

Product: Cloud Monitoring
Feature slug: `dashboard-api`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

The Stackdriver Monitoring Dashboard API lets users programmatically manage dashboards and charts.

## Lifecycle

- Latest feature date: 2019-12-09
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

- access (evidence: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management), [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control), [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring))
- auth (evidence: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management), [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control), [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring))
- authorization (evidence: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management), [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control), [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring))
- iam (evidence: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management), [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control), [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring))
- identity (evidence: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management), [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control), [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring))
- logging (evidence: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management), [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control), [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring))
- permission (evidence: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management), [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control), [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring))
- policy (evidence: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management), [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control), [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring))
- role (evidence: [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management), [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control), [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring))

## Official Evidence

- [https://docs.cloud.google.com/monitoring/access-control](https://docs.cloud.google.com/monitoring/access-control)
- [https://docs.cloud.google.com/monitoring/docs/application-monitoring](https://docs.cloud.google.com/monitoring/docs/application-monitoring)
- [https://docs.cloud.google.com/monitoring/docs/metrics-management](https://docs.cloud.google.com/monitoring/docs/metrics-management)
