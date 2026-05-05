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

- access (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/backup-admin/protection-summary](https://docs.cloud.google.com/backup-disaster-recovery/docs/backup-admin/protection-summary), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging))
- allow (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/backup-admin/protection-summary](https://docs.cloud.google.com/backup-disaster-recovery/docs/backup-admin/protection-summary), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging))
- audit (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/backup-admin/protection-summary](https://docs.cloud.google.com/backup-disaster-recovery/docs/backup-admin/protection-summary), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging))
- certificate (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/backup-admin/protection-summary](https://docs.cloud.google.com/backup-disaster-recovery/docs/backup-admin/protection-summary), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging))
- credential (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/backup-admin/protection-summary](https://docs.cloud.google.com/backup-disaster-recovery/docs/backup-admin/protection-summary), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging))
- firewall (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/backup-admin/protection-summary](https://docs.cloud.google.com/backup-disaster-recovery/docs/backup-admin/protection-summary), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging))
- iam (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/backup-admin/protection-summary](https://docs.cloud.google.com/backup-disaster-recovery/docs/backup-admin/protection-summary), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging))
- identity (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/backup-admin/protection-summary](https://docs.cloud.google.com/backup-disaster-recovery/docs/backup-admin/protection-summary), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging))
- logging (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/backup-admin/protection-summary](https://docs.cloud.google.com/backup-disaster-recovery/docs/backup-admin/protection-summary), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging))
- permission (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/backup-admin/protection-summary](https://docs.cloud.google.com/backup-disaster-recovery/docs/backup-admin/protection-summary), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging))
- policy (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/backup-admin/protection-summary](https://docs.cloud.google.com/backup-disaster-recovery/docs/backup-admin/protection-summary), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging))
- role (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/backup-admin/protection-summary](https://docs.cloud.google.com/backup-disaster-recovery/docs/backup-admin/protection-summary), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging))
- token (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/backup-admin/protection-summary](https://docs.cloud.google.com/backup-disaster-recovery/docs/backup-admin/protection-summary), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging))

## Official Evidence

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/backup-admin/protection-summary](https://docs.cloud.google.com/backup-disaster-recovery/docs/backup-admin/protection-summary)
