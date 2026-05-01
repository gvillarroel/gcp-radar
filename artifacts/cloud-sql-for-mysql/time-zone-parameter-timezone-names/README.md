# time_zone parameter timezone names

Product: Cloud SQL for MySQL
Feature slug: `time-zone-parameter-timezone-names`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for MySQL supports setting timezone names as values for the time_zone parameter.

## Lifecycle

- Latest feature date: 2022-07-07
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- certificate
- credential
- encrypt
- key
- kms
- logging
- private
- secret

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore](https://docs.cloud.google.com/sql/docs/mysql/backup-recovery/restore)
- [https://docs.cloud.google.com/sql/docs/mysql/client-side-encryption](https://docs.cloud.google.com/sql/docs/mysql/client-side-encryption)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
