# Spanner backup restore edition compatibility checks

Product: Spanner
Feature slug: `spanner-backup-restore-edition-compatibility-checks`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Spanner verifies edition compatibility during restore so databases using higher-tier features are restored only to same-or-higher tier instances.

## Lifecycle

- Latest feature date: 2026-02-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

No security capability was identified from the current evidence.

## Official Evidence

- [https://docs.cloud.google.com/spanner/docs/backup](https://docs.cloud.google.com/spanner/docs/backup)
- [https://docs.cloud.google.com/spanner/docs/backup/restore-backup-overview](https://docs.cloud.google.com/spanner/docs/backup/restore-backup-overview)
- [https://docs.cloud.google.com/spanner/docs/backup/restore-backups](https://docs.cloud.google.com/spanner/docs/backup/restore-backups)
