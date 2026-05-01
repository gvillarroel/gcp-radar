# database/memory/total_usage metric

Product: Cloud SQL for MySQL
Feature slug: `database-memory-total-usage-metric`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL exposes the database/memory/total_usage metric to show database working set usage including buffer cache.

## Lifecycle

- Latest feature date: 2021-01-13
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/metrics](https://docs.cloud.google.com/sql/docs/mysql/admin-api/metrics)
- [https://docs.cloud.google.com/sql/docs/mysql/quotas](https://docs.cloud.google.com/sql/docs/mysql/quotas)
- [https://docs.cloud.google.com/sql/docs/mysql/troubleshooting](https://docs.cloud.google.com/sql/docs/mysql/troubleshooting)
