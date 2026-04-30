# Read pools

Product: Cloud SQL for PostgreSQL
Feature slug: `read-pools`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Read pools provide a single load-balanced endpoint in front of multiple read pool nodes to scale read workloads; Read pools provide a single load-balanced endpoint across up to 20 read pool nodes to scale large read workloads.

## Lifecycle

- Latest feature date: 2025-09-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- certificate
- encrypt
- key
- private

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances](https://docs.cloud.google.com/sql/docs/mysql/admin-api/rest/v1beta4/instances)
- [https://docs.cloud.google.com/sql/docs/postgres/about-read-pools](https://docs.cloud.google.com/sql/docs/postgres/about-read-pools)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances)
