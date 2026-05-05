# cloudsql.enable_pg_wait_sampling flag

Product: Cloud SQL for PostgreSQL
Feature slug: `cloudsql-enable-pg-wait-sampling-flag`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

The cloudsql.enable_pg_wait_sampling flag enables the pg_wait_sampling extension for Cloud SQL for PostgreSQL instances.

## Lifecycle

- Latest feature date: 2023-09-28
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/postgres/flags](https://docs.cloud.google.com/sql/docs/postgres/flags), [https://docs.cloud.google.com/sql/docs/postgres/extensions](https://docs.cloud.google.com/sql/docs/postgres/extensions), [https://docs.cloud.google.com/sql/docs/postgres/using-query-insights](https://docs.cloud.google.com/sql/docs/postgres/using-query-insights))
- allow (evidence: [https://docs.cloud.google.com/sql/docs/postgres/flags](https://docs.cloud.google.com/sql/docs/postgres/flags), [https://docs.cloud.google.com/sql/docs/postgres/extensions](https://docs.cloud.google.com/sql/docs/postgres/extensions), [https://docs.cloud.google.com/sql/docs/postgres/using-query-insights](https://docs.cloud.google.com/sql/docs/postgres/using-query-insights))
- audit (evidence: [https://docs.cloud.google.com/sql/docs/postgres/flags](https://docs.cloud.google.com/sql/docs/postgres/flags), [https://docs.cloud.google.com/sql/docs/postgres/extensions](https://docs.cloud.google.com/sql/docs/postgres/extensions), [https://docs.cloud.google.com/sql/docs/postgres/using-query-insights](https://docs.cloud.google.com/sql/docs/postgres/using-query-insights))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/postgres/flags](https://docs.cloud.google.com/sql/docs/postgres/flags), [https://docs.cloud.google.com/sql/docs/postgres/extensions](https://docs.cloud.google.com/sql/docs/postgres/extensions), [https://docs.cloud.google.com/sql/docs/postgres/using-query-insights](https://docs.cloud.google.com/sql/docs/postgres/using-query-insights))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/postgres/flags](https://docs.cloud.google.com/sql/docs/postgres/flags), [https://docs.cloud.google.com/sql/docs/postgres/extensions](https://docs.cloud.google.com/sql/docs/postgres/extensions), [https://docs.cloud.google.com/sql/docs/postgres/using-query-insights](https://docs.cloud.google.com/sql/docs/postgres/using-query-insights))
- certificate (evidence: [https://docs.cloud.google.com/sql/docs/postgres/flags](https://docs.cloud.google.com/sql/docs/postgres/flags), [https://docs.cloud.google.com/sql/docs/postgres/extensions](https://docs.cloud.google.com/sql/docs/postgres/extensions), [https://docs.cloud.google.com/sql/docs/postgres/using-query-insights](https://docs.cloud.google.com/sql/docs/postgres/using-query-insights))
- encrypt (evidence: [https://docs.cloud.google.com/sql/docs/postgres/flags](https://docs.cloud.google.com/sql/docs/postgres/flags), [https://docs.cloud.google.com/sql/docs/postgres/extensions](https://docs.cloud.google.com/sql/docs/postgres/extensions), [https://docs.cloud.google.com/sql/docs/postgres/using-query-insights](https://docs.cloud.google.com/sql/docs/postgres/using-query-insights))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/postgres/flags](https://docs.cloud.google.com/sql/docs/postgres/flags), [https://docs.cloud.google.com/sql/docs/postgres/extensions](https://docs.cloud.google.com/sql/docs/postgres/extensions), [https://docs.cloud.google.com/sql/docs/postgres/using-query-insights](https://docs.cloud.google.com/sql/docs/postgres/using-query-insights))
- identity (evidence: [https://docs.cloud.google.com/sql/docs/postgres/flags](https://docs.cloud.google.com/sql/docs/postgres/flags), [https://docs.cloud.google.com/sql/docs/postgres/extensions](https://docs.cloud.google.com/sql/docs/postgres/extensions), [https://docs.cloud.google.com/sql/docs/postgres/using-query-insights](https://docs.cloud.google.com/sql/docs/postgres/using-query-insights))
- key (evidence: [https://docs.cloud.google.com/sql/docs/postgres/flags](https://docs.cloud.google.com/sql/docs/postgres/flags), [https://docs.cloud.google.com/sql/docs/postgres/extensions](https://docs.cloud.google.com/sql/docs/postgres/extensions), [https://docs.cloud.google.com/sql/docs/postgres/using-query-insights](https://docs.cloud.google.com/sql/docs/postgres/using-query-insights))
- permission (evidence: [https://docs.cloud.google.com/sql/docs/postgres/flags](https://docs.cloud.google.com/sql/docs/postgres/flags), [https://docs.cloud.google.com/sql/docs/postgres/extensions](https://docs.cloud.google.com/sql/docs/postgres/extensions), [https://docs.cloud.google.com/sql/docs/postgres/using-query-insights](https://docs.cloud.google.com/sql/docs/postgres/using-query-insights))
- private (evidence: [https://docs.cloud.google.com/sql/docs/postgres/flags](https://docs.cloud.google.com/sql/docs/postgres/flags), [https://docs.cloud.google.com/sql/docs/postgres/extensions](https://docs.cloud.google.com/sql/docs/postgres/extensions), [https://docs.cloud.google.com/sql/docs/postgres/using-query-insights](https://docs.cloud.google.com/sql/docs/postgres/using-query-insights))
- role (evidence: [https://docs.cloud.google.com/sql/docs/postgres/flags](https://docs.cloud.google.com/sql/docs/postgres/flags), [https://docs.cloud.google.com/sql/docs/postgres/extensions](https://docs.cloud.google.com/sql/docs/postgres/extensions), [https://docs.cloud.google.com/sql/docs/postgres/using-query-insights](https://docs.cloud.google.com/sql/docs/postgres/using-query-insights))
- secret (evidence: [https://docs.cloud.google.com/sql/docs/postgres/flags](https://docs.cloud.google.com/sql/docs/postgres/flags), [https://docs.cloud.google.com/sql/docs/postgres/extensions](https://docs.cloud.google.com/sql/docs/postgres/extensions), [https://docs.cloud.google.com/sql/docs/postgres/using-query-insights](https://docs.cloud.google.com/sql/docs/postgres/using-query-insights))
- security (evidence: [https://docs.cloud.google.com/sql/docs/postgres/flags](https://docs.cloud.google.com/sql/docs/postgres/flags), [https://docs.cloud.google.com/sql/docs/postgres/extensions](https://docs.cloud.google.com/sql/docs/postgres/extensions), [https://docs.cloud.google.com/sql/docs/postgres/using-query-insights](https://docs.cloud.google.com/sql/docs/postgres/using-query-insights))
- token (evidence: [https://docs.cloud.google.com/sql/docs/postgres/flags](https://docs.cloud.google.com/sql/docs/postgres/flags), [https://docs.cloud.google.com/sql/docs/postgres/extensions](https://docs.cloud.google.com/sql/docs/postgres/extensions), [https://docs.cloud.google.com/sql/docs/postgres/using-query-insights](https://docs.cloud.google.com/sql/docs/postgres/using-query-insights))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/postgres/extensions](https://docs.cloud.google.com/sql/docs/postgres/extensions)
- [https://docs.cloud.google.com/sql/docs/postgres/flags](https://docs.cloud.google.com/sql/docs/postgres/flags)
- [https://docs.cloud.google.com/sql/docs/postgres/using-query-insights](https://docs.cloud.google.com/sql/docs/postgres/using-query-insights)
