# cross-region replicas

Product: Cloud SQL for SQL Server
Feature slug: `cross-region-replicas`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for SQL Server supports creating replicas in other regions.

## Lifecycle

- Latest feature date: 2021-06-21
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/feature_support](https://docs.cloud.google.com/sql/docs/feature_support), [https://docs.cloud.google.com/sql/docs/sqlserver/quotas](https://docs.cloud.google.com/sql/docs/sqlserver/quotas), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring))
- audit (evidence: [https://docs.cloud.google.com/sql/docs/feature_support](https://docs.cloud.google.com/sql/docs/feature_support), [https://docs.cloud.google.com/sql/docs/sqlserver/quotas](https://docs.cloud.google.com/sql/docs/sqlserver/quotas), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/feature_support](https://docs.cloud.google.com/sql/docs/feature_support), [https://docs.cloud.google.com/sql/docs/sqlserver/quotas](https://docs.cloud.google.com/sql/docs/sqlserver/quotas), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/feature_support](https://docs.cloud.google.com/sql/docs/feature_support), [https://docs.cloud.google.com/sql/docs/sqlserver/quotas](https://docs.cloud.google.com/sql/docs/sqlserver/quotas), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring))
- encrypt (evidence: [https://docs.cloud.google.com/sql/docs/feature_support](https://docs.cloud.google.com/sql/docs/feature_support), [https://docs.cloud.google.com/sql/docs/sqlserver/quotas](https://docs.cloud.google.com/sql/docs/sqlserver/quotas), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/feature_support](https://docs.cloud.google.com/sql/docs/feature_support), [https://docs.cloud.google.com/sql/docs/sqlserver/quotas](https://docs.cloud.google.com/sql/docs/sqlserver/quotas), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring))
- key (evidence: [https://docs.cloud.google.com/sql/docs/feature_support](https://docs.cloud.google.com/sql/docs/feature_support), [https://docs.cloud.google.com/sql/docs/sqlserver/quotas](https://docs.cloud.google.com/sql/docs/sqlserver/quotas), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring))
- logging (evidence: [https://docs.cloud.google.com/sql/docs/feature_support](https://docs.cloud.google.com/sql/docs/feature_support), [https://docs.cloud.google.com/sql/docs/sqlserver/quotas](https://docs.cloud.google.com/sql/docs/sqlserver/quotas), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring))
- private (evidence: [https://docs.cloud.google.com/sql/docs/feature_support](https://docs.cloud.google.com/sql/docs/feature_support), [https://docs.cloud.google.com/sql/docs/sqlserver/quotas](https://docs.cloud.google.com/sql/docs/sqlserver/quotas), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring))
- security (evidence: [https://docs.cloud.google.com/sql/docs/feature_support](https://docs.cloud.google.com/sql/docs/feature_support), [https://docs.cloud.google.com/sql/docs/sqlserver/quotas](https://docs.cloud.google.com/sql/docs/sqlserver/quotas), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring))
- token (evidence: [https://docs.cloud.google.com/sql/docs/feature_support](https://docs.cloud.google.com/sql/docs/feature_support), [https://docs.cloud.google.com/sql/docs/sqlserver/quotas](https://docs.cloud.google.com/sql/docs/sqlserver/quotas), [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/feature_support](https://docs.cloud.google.com/sql/docs/feature_support)
- [https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring](https://docs.cloud.google.com/sql/docs/sqlserver/backup-recovery/restoring)
- [https://docs.cloud.google.com/sql/docs/sqlserver/quotas](https://docs.cloud.google.com/sql/docs/sqlserver/quotas)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
