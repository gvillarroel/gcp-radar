# Parallel import and export with MySQL Shell utilities

Product: Cloud SQL for MySQL
Feature slug: `parallel-import-and-export-with-mysql-shell-utilities`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL supports parallel multi-file data export and import using the MySQL Shell dumpInstance and loadDump utilities.

## Lifecycle

- Latest feature date: 2024-01-30
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv), [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql), [https://docs.cloud.google.com/sql/docs/error-messages](https://docs.cloud.google.com/sql/docs/error-messages))
- allow (evidence: [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv), [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql), [https://docs.cloud.google.com/sql/docs/error-messages](https://docs.cloud.google.com/sql/docs/error-messages))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv), [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql), [https://docs.cloud.google.com/sql/docs/error-messages](https://docs.cloud.google.com/sql/docs/error-messages))
- identity (evidence: [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv), [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql), [https://docs.cloud.google.com/sql/docs/error-messages](https://docs.cloud.google.com/sql/docs/error-messages))
- logging (evidence: [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv), [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql), [https://docs.cloud.google.com/sql/docs/error-messages](https://docs.cloud.google.com/sql/docs/error-messages))
- permission (evidence: [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv), [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql), [https://docs.cloud.google.com/sql/docs/error-messages](https://docs.cloud.google.com/sql/docs/error-messages))
- private (evidence: [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv), [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql), [https://docs.cloud.google.com/sql/docs/error-messages](https://docs.cloud.google.com/sql/docs/error-messages))
- role (evidence: [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv), [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql), [https://docs.cloud.google.com/sql/docs/error-messages](https://docs.cloud.google.com/sql/docs/error-messages))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/error-messages](https://docs.cloud.google.com/sql/docs/error-messages)
- [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-csv)
- [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql)
