# Export and import if-exists flag

Product: Cloud SQL for PostgreSQL
Feature slug: `export-and-import-if-exists-flag`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The --if-exists flag lets Cloud SQL export and import workflows add IF EXISTS to DROP statements produced by clean operations.

## Lifecycle

- Latest feature date: 2024-07-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- audit
- auth
- authorization
- certificate
- constraint
- encrypt
- iam
- identity
- key
- permission
- private
- role
- secret
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/postgres/flags](https://docs.cloud.google.com/sql/docs/postgres/flags)
- [https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-csv)
- [https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp](https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-dmp)
