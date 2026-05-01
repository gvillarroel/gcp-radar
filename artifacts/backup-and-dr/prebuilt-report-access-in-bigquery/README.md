# Prebuilt report access in BigQuery

Product: Backup and DR
Feature slug: `prebuilt-report-access-in-bigquery`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Backup and DR Service added support to view prebuilt reports in BigQuery.

## Lifecycle

- Latest feature date: 2024-02-28
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
- audit
- certificate
- constraint
- credential
- firewall
- iam
- identity
- logging
- permission
- policy
- role
- token

## Official Evidence

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
