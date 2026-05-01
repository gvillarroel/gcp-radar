# Flexible instance configurations

Product: Cloud SQL for MySQL
Feature slug: `flexible-instance-configurations`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for MySQL supports flexible instance configurations with custom vCPU and RAM sizing.

## Lifecycle

- Latest feature date: 2021-03-05
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- certificate
- encrypt
- key
- private

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore)
- [https://docs.cloud.google.com/sql/docs/mysql/connect-overview](https://docs.cloud.google.com/sql/docs/mysql/connect-overview)
- [https://docs.cloud.google.com/sql/docs/mysql/quotas](https://docs.cloud.google.com/sql/docs/mysql/quotas)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
