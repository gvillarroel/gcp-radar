# Backup Vault workload-level quotas

Product: Backup and DR
Feature slug: `backup-vault-workload-level-quotas`
Coverage: `MEDIUM`
IAM mapping: `explicit`

## Technical Summary

Backup vaults can now enforce quotas at workload level for data sources, backups, backup plans, and backup plan associations.

## Lifecycle

- Latest feature date: 2025-10-14
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

- access (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault), [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/cmek](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/cmek), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control))
- allow (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault), [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/cmek](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/cmek), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control))
- auth (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault), [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/cmek](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/cmek), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control))
- encrypt (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault), [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/cmek](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/cmek), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control))
- firewall (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault), [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/cmek](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/cmek), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control))
- iam (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault), [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/cmek](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/cmek), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control))
- key (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault), [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/cmek](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/cmek), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control))
- kms (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault), [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/cmek](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/cmek), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control))
- permission (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault), [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/cmek](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/cmek), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control))
- policy (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault), [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/cmek](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/cmek), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control))
- role (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault), [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/cmek](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/cmek), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control))
- token (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault), [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/cmek](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/cmek), [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control))

## Official Evidence

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control](https://docs.cloud.google.com/backup-disaster-recovery/docs/access-control)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/cmek](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/cmek)
