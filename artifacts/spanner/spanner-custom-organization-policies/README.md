# Spanner custom organization policies

Product: Spanner
Feature slug: `spanner-custom-organization-policies`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Spanner supports custom organization policies as a generally available feature.

## Lifecycle

- Latest feature date: 2025-02-10
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- encrypt
- iam
- key
- kms
- permission
- role

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient)
- [https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview](https://docs.cloud.google.com/spanner/docs/backup/disaster-recovery-overview)
- [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
