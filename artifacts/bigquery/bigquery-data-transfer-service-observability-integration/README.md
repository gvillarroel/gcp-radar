# BigQuery Data Transfer Service observability integration

Product: BigQuery
Feature slug: `bigquery-data-transfer-service-observability-integration`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

BigQuery Data Transfer Service supports audit logging, Cloud Logging, and Cloud Monitoring for operational visibility.

## Lifecycle

- Latest feature date: 2021-06-28
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
- identity
- key
- kms
- logging
- permission
- policy
- role
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/bigquery/docs/access-control](https://docs.cloud.google.com/bigquery/docs/access-control)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-audit-logging](https://docs.cloud.google.com/bigquery/docs/analytics-hub-audit-logging)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
