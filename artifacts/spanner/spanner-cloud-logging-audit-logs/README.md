# Spanner Cloud Logging audit logs

Product: Spanner
Feature slug: `spanner-cloud-logging-audit-logs`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Spanner added support for both Admin Activity and Data Access audit logs in Cloud Logging.

## Lifecycle

- Latest feature date: 2018-02-20
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- audit
- credential
- encrypt
- iam
- identity
- key
- kms
- logging
- permission
- policy
- role

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient](https://docs.cloud.google.com/python/docs/reference/spanner/latest/google.cloud.spanner_admin_database_v1.services.database_admin.DatabaseAdminAsyncClient)
- [https://docs.cloud.google.com/spanner/docs/audit-logging](https://docs.cloud.google.com/spanner/docs/audit-logging)
- [https://docs.cloud.google.com/spanner/docs/cmek](https://docs.cloud.google.com/spanner/docs/cmek)
