# Password policies

Product: Cloud SQL for MySQL
Feature slug: `password-policies`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for MySQL supports password policies at the instance and user levels for built-in authentication.

## Lifecycle

- Latest feature date: 2022-07-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/mysql/connection-org-policy](https://docs.cloud.google.com/sql/docs/mysql/connection-org-policy), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups), [https://docs.cloud.google.com/sql/docs/editions-intro](https://docs.cloud.google.com/sql/docs/editions-intro))
- allow (evidence: [https://docs.cloud.google.com/sql/docs/mysql/connection-org-policy](https://docs.cloud.google.com/sql/docs/mysql/connection-org-policy), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups), [https://docs.cloud.google.com/sql/docs/editions-intro](https://docs.cloud.google.com/sql/docs/editions-intro))
- audit (evidence: [https://docs.cloud.google.com/sql/docs/mysql/connection-org-policy](https://docs.cloud.google.com/sql/docs/mysql/connection-org-policy), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups), [https://docs.cloud.google.com/sql/docs/editions-intro](https://docs.cloud.google.com/sql/docs/editions-intro))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/mysql/connection-org-policy](https://docs.cloud.google.com/sql/docs/mysql/connection-org-policy), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups), [https://docs.cloud.google.com/sql/docs/editions-intro](https://docs.cloud.google.com/sql/docs/editions-intro))
- constraint (evidence: [https://docs.cloud.google.com/sql/docs/mysql/connection-org-policy](https://docs.cloud.google.com/sql/docs/mysql/connection-org-policy), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups), [https://docs.cloud.google.com/sql/docs/editions-intro](https://docs.cloud.google.com/sql/docs/editions-intro))
- encrypt (evidence: [https://docs.cloud.google.com/sql/docs/mysql/connection-org-policy](https://docs.cloud.google.com/sql/docs/mysql/connection-org-policy), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups), [https://docs.cloud.google.com/sql/docs/editions-intro](https://docs.cloud.google.com/sql/docs/editions-intro))
- key (evidence: [https://docs.cloud.google.com/sql/docs/mysql/connection-org-policy](https://docs.cloud.google.com/sql/docs/mysql/connection-org-policy), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups), [https://docs.cloud.google.com/sql/docs/editions-intro](https://docs.cloud.google.com/sql/docs/editions-intro))
- permission (evidence: [https://docs.cloud.google.com/sql/docs/mysql/connection-org-policy](https://docs.cloud.google.com/sql/docs/mysql/connection-org-policy), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups), [https://docs.cloud.google.com/sql/docs/editions-intro](https://docs.cloud.google.com/sql/docs/editions-intro))
- policy (evidence: [https://docs.cloud.google.com/sql/docs/mysql/connection-org-policy](https://docs.cloud.google.com/sql/docs/mysql/connection-org-policy), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups), [https://docs.cloud.google.com/sql/docs/editions-intro](https://docs.cloud.google.com/sql/docs/editions-intro))
- private (evidence: [https://docs.cloud.google.com/sql/docs/mysql/connection-org-policy](https://docs.cloud.google.com/sql/docs/mysql/connection-org-policy), [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups), [https://docs.cloud.google.com/sql/docs/editions-intro](https://docs.cloud.google.com/sql/docs/editions-intro))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/editions-intro](https://docs.cloud.google.com/sql/docs/editions-intro)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/backups)
- [https://docs.cloud.google.com/sql/docs/mysql/connection-org-policy](https://docs.cloud.google.com/sql/docs/mysql/connection-org-policy)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
