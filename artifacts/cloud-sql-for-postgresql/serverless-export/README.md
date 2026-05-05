# Serverless export

Product: Cloud SQL for PostgreSQL
Feature slug: `serverless-export`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL supports serverless export by performing exports from a temporary instance to reduce load on the primary instance.

## Lifecycle

- Latest feature date: 2020-09-15
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-csv), [https://docs.cloud.google.com/sql/docs/postgres/best-practices](https://docs.cloud.google.com/sql/docs/postgres/best-practices), [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing))
- allow (evidence: [https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-csv), [https://docs.cloud.google.com/sql/docs/postgres/best-practices](https://docs.cloud.google.com/sql/docs/postgres/best-practices), [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-csv), [https://docs.cloud.google.com/sql/docs/postgres/best-practices](https://docs.cloud.google.com/sql/docs/postgres/best-practices), [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-csv), [https://docs.cloud.google.com/sql/docs/postgres/best-practices](https://docs.cloud.google.com/sql/docs/postgres/best-practices), [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing))
- token (evidence: [https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-csv), [https://docs.cloud.google.com/sql/docs/postgres/best-practices](https://docs.cloud.google.com/sql/docs/postgres/best-practices), [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/postgres/best-practices](https://docs.cloud.google.com/sql/docs/postgres/best-practices)
- [https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-csv](https://docs.cloud.google.com/sql/docs/postgres/import-export/import-export-csv)
- [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing)
