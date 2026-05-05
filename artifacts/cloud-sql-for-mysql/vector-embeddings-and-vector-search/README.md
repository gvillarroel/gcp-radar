# Vector embeddings and vector search

Product: Cloud SQL for MySQL
Feature slug: `vector-embeddings-and-vector-search`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for MySQL supports storing vector embeddings, running K-nearest neighbor searches, and creating approximate nearest neighbor vector indexes.

## Lifecycle

- Latest feature date: 2024-04-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow (evidence: [https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli), [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/libraries](https://docs.cloud.google.com/sql/docs/mysql/admin-api/libraries))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli), [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/libraries](https://docs.cloud.google.com/sql/docs/mysql/admin-api/libraries))
- logging (evidence: [https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli), [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql), [https://docs.cloud.google.com/sql/docs/mysql/admin-api/libraries](https://docs.cloud.google.com/sql/docs/mysql/admin-api/libraries))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/libraries](https://docs.cloud.google.com/sql/docs/mysql/admin-api/libraries)
- [https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli](https://docs.cloud.google.com/sql/docs/mysql/build-context-gemini-cli)
- [https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql](https://docs.cloud.google.com/sql/docs/mysql/import-export/import-export-sql)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
