# Custom import for large external database replication

Product: Cloud SQL for MySQL
Feature slug: `custom-import-for-large-external-database-replication`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for MySQL supports using a custom import to set up replication from large external databases.

## Lifecycle

- Latest feature date: 2021-09-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/mysql/best-practices](https://docs.cloud.google.com/sql/docs/mysql/best-practices), [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases](https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/mysql/best-practices](https://docs.cloud.google.com/sql/docs/mysql/best-practices), [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases](https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/mysql/best-practices](https://docs.cloud.google.com/sql/docs/mysql/best-practices), [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases](https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/mysql/best-practices](https://docs.cloud.google.com/sql/docs/mysql/best-practices), [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases](https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases))
- identity (evidence: [https://docs.cloud.google.com/sql/docs/mysql/best-practices](https://docs.cloud.google.com/sql/docs/mysql/best-practices), [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases](https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases))
- logging (evidence: [https://docs.cloud.google.com/sql/docs/mysql/best-practices](https://docs.cloud.google.com/sql/docs/mysql/best-practices), [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases](https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases))
- permission (evidence: [https://docs.cloud.google.com/sql/docs/mysql/best-practices](https://docs.cloud.google.com/sql/docs/mysql/best-practices), [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases](https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases))
- role (evidence: [https://docs.cloud.google.com/sql/docs/mysql/best-practices](https://docs.cloud.google.com/sql/docs/mysql/best-practices), [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases](https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases))
- token (evidence: [https://docs.cloud.google.com/sql/docs/mysql/best-practices](https://docs.cloud.google.com/sql/docs/mysql/best-practices), [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql), [https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases](https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/best-practices](https://docs.cloud.google.com/sql/docs/mysql/best-practices)
- [https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases](https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases)
- [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
