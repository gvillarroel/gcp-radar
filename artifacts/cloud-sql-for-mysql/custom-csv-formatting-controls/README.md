# Custom CSV formatting controls

Product: Cloud SQL for MySQL
Feature slug: `custom-csv-formatting-controls`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for MySQL supports custom CSV formatting controls for import and export, including delimiters, quotes, and escapes.

## Lifecycle

- Latest feature date: 2021-09-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv), [https://docs.cloud.google.com/sql/docs/mysql](https://docs.cloud.google.com/sql/docs/mysql), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv), [https://docs.cloud.google.com/sql/docs/mysql](https://docs.cloud.google.com/sql/docs/mysql), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv), [https://docs.cloud.google.com/sql/docs/mysql](https://docs.cloud.google.com/sql/docs/mysql), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls))
- identity (evidence: [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv), [https://docs.cloud.google.com/sql/docs/mysql](https://docs.cloud.google.com/sql/docs/mysql), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls))
- key (evidence: [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv), [https://docs.cloud.google.com/sql/docs/mysql](https://docs.cloud.google.com/sql/docs/mysql), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls))
- permission (evidence: [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv), [https://docs.cloud.google.com/sql/docs/mysql](https://docs.cloud.google.com/sql/docs/mysql), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls))
- role (evidence: [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv), [https://docs.cloud.google.com/sql/docs/mysql](https://docs.cloud.google.com/sql/docs/mysql), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls))
- secret (evidence: [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv), [https://docs.cloud.google.com/sql/docs/mysql](https://docs.cloud.google.com/sql/docs/mysql), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls))
- security (evidence: [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv), [https://docs.cloud.google.com/sql/docs/mysql](https://docs.cloud.google.com/sql/docs/mysql), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql](https://docs.cloud.google.com/sql/docs/mysql)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls)
- [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
