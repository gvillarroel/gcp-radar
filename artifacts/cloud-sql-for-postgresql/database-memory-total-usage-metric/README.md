# database/memory/total_usage metric

Product: Cloud SQL for PostgreSQL
Feature slug: `database-memory-total-usage-metric`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL exposes the database/memory/total_usage metric to show database working set memory usage including buffer cache.

## Lifecycle

- Latest feature date: 2021-01-13
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- encrypt
- key

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics)
- [https://docs.cloud.google.com/sql/docs/postgres/best-practices](https://docs.cloud.google.com/sql/docs/postgres/best-practices)
- [https://docs.cloud.google.com/sql/docs/postgres/quotas](https://docs.cloud.google.com/sql/docs/postgres/quotas)
