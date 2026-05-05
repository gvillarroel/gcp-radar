# Backup and DR prebuilt report integration with Looker Studio

Product: Backup and DR
Feature slug: `backup-and-dr-prebuilt-report-integration-with-looker-studio`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Backup and DR Service now supports viewing built-in prebuilt reports in Looker Studio.

## Lifecycle

- Latest feature date: 2024-04-22
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

- access (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery))
- allow (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery))
- audit (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery))
- certificate (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery))
- credential (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery))
- firewall (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery))
- iam (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery))
- identity (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery))
- key (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery))
- logging (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery))
- permission (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery))
- policy (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery))
- role (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery))
- token (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control), [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging), [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery))

## Official Evidence

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging](https://docs.cloud.google.com/backup-disaster-recovery/docs/audit-logging)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery)
