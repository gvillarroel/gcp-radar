# Unprotected resource reports in BigQuery

Product: Backup and DR
Feature slug: `unprotected-resource-reports-in-bigquery`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Backup and DR now supports unprotected resource reports in BigQuery.

## Lifecycle

- Latest feature date: 2024-09-30
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
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/backup-admin/protection-summary](https://docs.cloud.google.com/backup-disaster-recovery/docs/backup-admin/protection-summary)
