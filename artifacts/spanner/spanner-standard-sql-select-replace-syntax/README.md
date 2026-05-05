# Spanner standard SQL SELECT * REPLACE syntax

Product: Spanner
Feature slug: `spanner-standard-sql-select-replace-syntax`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Spanner standard SQL added support for the SELECT * REPLACE syntax.

## Lifecycle

- Latest feature date: 2020-10-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/spanner/docs/backup/manage-backups](https://docs.cloud.google.com/spanner/docs/backup/manage-backups), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac))
- allow (evidence: [https://docs.cloud.google.com/spanner/docs/backup/manage-backups](https://docs.cloud.google.com/spanner/docs/backup/manage-backups), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac))
- audit (evidence: [https://docs.cloud.google.com/spanner/docs/backup/manage-backups](https://docs.cloud.google.com/spanner/docs/backup/manage-backups), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac))
- auth (evidence: [https://docs.cloud.google.com/spanner/docs/backup/manage-backups](https://docs.cloud.google.com/spanner/docs/backup/manage-backups), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac))
- credential (evidence: [https://docs.cloud.google.com/spanner/docs/backup/manage-backups](https://docs.cloud.google.com/spanner/docs/backup/manage-backups), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac))
- encrypt (evidence: [https://docs.cloud.google.com/spanner/docs/backup/manage-backups](https://docs.cloud.google.com/spanner/docs/backup/manage-backups), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac))
- iam (evidence: [https://docs.cloud.google.com/spanner/docs/backup/manage-backups](https://docs.cloud.google.com/spanner/docs/backup/manage-backups), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac))
- key (evidence: [https://docs.cloud.google.com/spanner/docs/backup/manage-backups](https://docs.cloud.google.com/spanner/docs/backup/manage-backups), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac))
- kms (evidence: [https://docs.cloud.google.com/spanner/docs/backup/manage-backups](https://docs.cloud.google.com/spanner/docs/backup/manage-backups), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac))
- logging (evidence: [https://docs.cloud.google.com/spanner/docs/backup/manage-backups](https://docs.cloud.google.com/spanner/docs/backup/manage-backups), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac))
- permission (evidence: [https://docs.cloud.google.com/spanner/docs/backup/manage-backups](https://docs.cloud.google.com/spanner/docs/backup/manage-backups), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac))
- policy (evidence: [https://docs.cloud.google.com/spanner/docs/backup/manage-backups](https://docs.cloud.google.com/spanner/docs/backup/manage-backups), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac))
- private (evidence: [https://docs.cloud.google.com/spanner/docs/backup/manage-backups](https://docs.cloud.google.com/spanner/docs/backup/manage-backups), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac))
- role (evidence: [https://docs.cloud.google.com/spanner/docs/backup/manage-backups](https://docs.cloud.google.com/spanner/docs/backup/manage-backups), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac))
- token (evidence: [https://docs.cloud.google.com/spanner/docs/backup/manage-backups](https://docs.cloud.google.com/spanner/docs/backup/manage-backups), [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog), [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac))

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog](https://docs.cloud.google.com/python/docs/reference/spanner/latest/changelog)
- [https://docs.cloud.google.com/spanner/docs/backup/manage-backups](https://docs.cloud.google.com/spanner/docs/backup/manage-backups)
- [https://docs.cloud.google.com/spanner/docs/configure-fgac](https://docs.cloud.google.com/spanner/docs/configure-fgac)
