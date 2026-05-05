# Manual-to-dynamic protection migration using tags

Product: Backup and DR
Feature slug: `manual-to-dynamic-protection-migration-using-tags`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Added support for migrating manual protection to tag-based dynamic protection across all backup/recovery appliance types.

## Lifecycle

- Latest feature date: 2024-05-21
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection), [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection-gcve](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection-gcve), [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs))
- audit (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection), [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection-gcve](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection-gcve), [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs))
- auth (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection), [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection-gcve](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection-gcve), [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs))
- authorization (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection), [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection-gcve](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection-gcve), [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs))
- constraint (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection), [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection-gcve](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection-gcve), [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs))
- iam (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection), [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection-gcve](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection-gcve), [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs))
- key (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection), [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection-gcve](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection-gcve), [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs))
- logging (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection), [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection-gcve](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection-gcve), [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs))
- permission (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection), [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection-gcve](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection-gcve), [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs))
- policy (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection), [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection-gcve](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection-gcve), [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs))
- role (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection), [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection-gcve](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection-gcve), [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs))
- token (evidence: [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection), [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection-gcve](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection-gcve), [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs))

## Official Evidence

- [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection-gcve](https://docs.cloud.google.com/backup-disaster-recovery/docs/create-plan/dynamic-protection-gcve)
- [https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs](https://docs.cloud.google.com/backup-disaster-recovery/docs/monitor-reports/monitor-jobs)
