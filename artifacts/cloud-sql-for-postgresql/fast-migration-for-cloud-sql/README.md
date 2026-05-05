# Fast migration for Cloud SQL

Product: Cloud SQL for PostgreSQL
Feature slug: `fast-migration-for-cloud-sql`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Fast migration improves the performance of migrating data from external sources into Cloud SQL instances.

## Lifecycle

- Latest feature date: 2023-05-02
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/how-tos/performance](https://docs.cloud.google.com/sql/docs/postgres/admin-api/how-tos/performance), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics))
- armor (evidence: [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/how-tos/performance](https://docs.cloud.google.com/sql/docs/postgres/admin-api/how-tos/performance), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/how-tos/performance](https://docs.cloud.google.com/sql/docs/postgres/admin-api/how-tos/performance), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics))
- certificate (evidence: [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/how-tos/performance](https://docs.cloud.google.com/sql/docs/postgres/admin-api/how-tos/performance), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/how-tos/performance](https://docs.cloud.google.com/sql/docs/postgres/admin-api/how-tos/performance), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics))
- identity (evidence: [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/how-tos/performance](https://docs.cloud.google.com/sql/docs/postgres/admin-api/how-tos/performance), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics))
- key (evidence: [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/how-tos/performance](https://docs.cloud.google.com/sql/docs/postgres/admin-api/how-tos/performance), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics))
- logging (evidence: [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/how-tos/performance](https://docs.cloud.google.com/sql/docs/postgres/admin-api/how-tos/performance), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics))
- private (evidence: [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/how-tos/performance](https://docs.cloud.google.com/sql/docs/postgres/admin-api/how-tos/performance), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics))
- role (evidence: [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/how-tos/performance](https://docs.cloud.google.com/sql/docs/postgres/admin-api/how-tos/performance), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics))
- security (evidence: [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/how-tos/performance](https://docs.cloud.google.com/sql/docs/postgres/admin-api/how-tos/performance), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics))
- threat (evidence: [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/how-tos/performance](https://docs.cloud.google.com/sql/docs/postgres/admin-api/how-tos/performance), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/how-tos/performance](https://docs.cloud.google.com/sql/docs/postgres/admin-api/how-tos/performance)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics](https://docs.cloud.google.com/sql/docs/postgres/admin-api/metrics)
- [https://docs.cloud.google.com/sql/docs/postgres/pricing](https://docs.cloud.google.com/sql/docs/postgres/pricing)
