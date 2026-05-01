# Backup Vault retention lock by backup rule

Product: Backup and DR
Feature slug: `backup-vault-retention-lock-by-backup-rule`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

A backup vault setting was added to prevent deletion during the retention duration defined in the backup rule, blocking manual deletion.

## Lifecycle

- Latest feature date: 2025-10-30
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- audit
- logging
- policy

## Official Evidence

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault](https://docs.cloud.google.com/backup-disaster-recovery/docs/concepts/backup-vault)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/policy-settings)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery](https://docs.cloud.google.com/backup-disaster-recovery/docs/quickstarts/sap-hana-on-gce-backup-recovery)
