# Trace Data Access audit logs

Product: Cloud Trace
Feature slug: `trace-data-access-audit-logs`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Cloud Trace provides Data Access audit logs.

## Lifecycle

- Latest feature date: 2018-03-28
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

- access (evidence: [https://docs.cloud.google.com/trace/docs/audit-logging](https://docs.cloud.google.com/trace/docs/audit-logging), [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces), [https://docs.cloud.google.com/trace/docs/iam](https://docs.cloud.google.com/trace/docs/iam), [https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset](https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset))
- allow (evidence: [https://docs.cloud.google.com/trace/docs/audit-logging](https://docs.cloud.google.com/trace/docs/audit-logging), [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces), [https://docs.cloud.google.com/trace/docs/iam](https://docs.cloud.google.com/trace/docs/iam), [https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset](https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset))
- audit (evidence: [https://docs.cloud.google.com/trace/docs/audit-logging](https://docs.cloud.google.com/trace/docs/audit-logging), [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces), [https://docs.cloud.google.com/trace/docs/iam](https://docs.cloud.google.com/trace/docs/iam), [https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset](https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset))
- iam (evidence: [https://docs.cloud.google.com/trace/docs/audit-logging](https://docs.cloud.google.com/trace/docs/audit-logging), [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces), [https://docs.cloud.google.com/trace/docs/iam](https://docs.cloud.google.com/trace/docs/iam), [https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset](https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset))
- identity (evidence: [https://docs.cloud.google.com/trace/docs/audit-logging](https://docs.cloud.google.com/trace/docs/audit-logging), [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces), [https://docs.cloud.google.com/trace/docs/iam](https://docs.cloud.google.com/trace/docs/iam), [https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset](https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset))
- logging (evidence: [https://docs.cloud.google.com/trace/docs/audit-logging](https://docs.cloud.google.com/trace/docs/audit-logging), [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces), [https://docs.cloud.google.com/trace/docs/iam](https://docs.cloud.google.com/trace/docs/iam), [https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset](https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset))
- permission (evidence: [https://docs.cloud.google.com/trace/docs/audit-logging](https://docs.cloud.google.com/trace/docs/audit-logging), [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces), [https://docs.cloud.google.com/trace/docs/iam](https://docs.cloud.google.com/trace/docs/iam), [https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset](https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset))
- policy (evidence: [https://docs.cloud.google.com/trace/docs/audit-logging](https://docs.cloud.google.com/trace/docs/audit-logging), [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces), [https://docs.cloud.google.com/trace/docs/iam](https://docs.cloud.google.com/trace/docs/iam), [https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset](https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset))
- role (evidence: [https://docs.cloud.google.com/trace/docs/audit-logging](https://docs.cloud.google.com/trace/docs/audit-logging), [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces), [https://docs.cloud.google.com/trace/docs/iam](https://docs.cloud.google.com/trace/docs/iam), [https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset](https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset))

## Official Evidence

- [https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset](https://docs.cloud.google.com/trace/docs/analytics-query-linked-dataset)
- [https://docs.cloud.google.com/trace/docs/audit-logging](https://docs.cloud.google.com/trace/docs/audit-logging)
- [https://docs.cloud.google.com/trace/docs/finding-traces](https://docs.cloud.google.com/trace/docs/finding-traces)
- [https://docs.cloud.google.com/trace/docs/iam](https://docs.cloud.google.com/trace/docs/iam)
