# VPC Service Controls

Product: Cloud SQL for PostgreSQL
Feature slug: `vpc-service-controls`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL supports VPC Service Controls to protect the Cloud SQL Admin API and host project with a service perimeter.

## Lifecycle

- Latest feature date: 2019-12-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/mysql/admin-api](https://docs.cloud.google.com/sql/docs/mysql/admin-api))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/mysql/admin-api](https://docs.cloud.google.com/sql/docs/mysql/admin-api))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/mysql/admin-api](https://docs.cloud.google.com/sql/docs/mysql/admin-api))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/mysql/admin-api](https://docs.cloud.google.com/sql/docs/mysql/admin-api))
- identity (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/mysql/admin-api](https://docs.cloud.google.com/sql/docs/mysql/admin-api))
- key (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/mysql/admin-api](https://docs.cloud.google.com/sql/docs/mysql/admin-api))
- kms (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/mysql/admin-api](https://docs.cloud.google.com/sql/docs/mysql/admin-api))
- permission (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/mysql/admin-api](https://docs.cloud.google.com/sql/docs/mysql/admin-api))
- private (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/mysql/admin-api](https://docs.cloud.google.com/sql/docs/mysql/admin-api))
- role (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/mysql/admin-api](https://docs.cloud.google.com/sql/docs/mysql/admin-api))
- security (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/mysql/admin-api](https://docs.cloud.google.com/sql/docs/mysql/admin-api))
- token (evidence: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/mysql/admin-api](https://docs.cloud.google.com/sql/docs/mysql/admin-api))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api](https://docs.cloud.google.com/sql/docs/mysql/admin-api)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/postgres/admin-api/configure-service-controls)
