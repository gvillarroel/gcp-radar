# VPC Service Controls

Product: Cloud SQL for SQL Server
Feature slug: `vpc-service-controls`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL supports VPC Service Controls to protect the Admin API and host project with a service perimeter.

## Lifecycle

- Latest feature date: 2019-12-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/mysql/admin-api](https://docs.cloud.google.com/sql/docs/mysql/admin-api), [https://docs.cloud.google.com/sql/docs/postgres/admin-api](https://docs.cloud.google.com/sql/docs/postgres/admin-api))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/mysql/admin-api](https://docs.cloud.google.com/sql/docs/mysql/admin-api), [https://docs.cloud.google.com/sql/docs/postgres/admin-api](https://docs.cloud.google.com/sql/docs/postgres/admin-api))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/mysql/admin-api](https://docs.cloud.google.com/sql/docs/mysql/admin-api), [https://docs.cloud.google.com/sql/docs/postgres/admin-api](https://docs.cloud.google.com/sql/docs/postgres/admin-api))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/mysql/admin-api](https://docs.cloud.google.com/sql/docs/mysql/admin-api), [https://docs.cloud.google.com/sql/docs/postgres/admin-api](https://docs.cloud.google.com/sql/docs/postgres/admin-api))
- identity (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/mysql/admin-api](https://docs.cloud.google.com/sql/docs/mysql/admin-api), [https://docs.cloud.google.com/sql/docs/postgres/admin-api](https://docs.cloud.google.com/sql/docs/postgres/admin-api))
- key (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/mysql/admin-api](https://docs.cloud.google.com/sql/docs/mysql/admin-api), [https://docs.cloud.google.com/sql/docs/postgres/admin-api](https://docs.cloud.google.com/sql/docs/postgres/admin-api))
- kms (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/mysql/admin-api](https://docs.cloud.google.com/sql/docs/mysql/admin-api), [https://docs.cloud.google.com/sql/docs/postgres/admin-api](https://docs.cloud.google.com/sql/docs/postgres/admin-api))
- permission (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/mysql/admin-api](https://docs.cloud.google.com/sql/docs/mysql/admin-api), [https://docs.cloud.google.com/sql/docs/postgres/admin-api](https://docs.cloud.google.com/sql/docs/postgres/admin-api))
- role (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/mysql/admin-api](https://docs.cloud.google.com/sql/docs/mysql/admin-api), [https://docs.cloud.google.com/sql/docs/postgres/admin-api](https://docs.cloud.google.com/sql/docs/postgres/admin-api))
- security (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/mysql/admin-api](https://docs.cloud.google.com/sql/docs/mysql/admin-api), [https://docs.cloud.google.com/sql/docs/postgres/admin-api](https://docs.cloud.google.com/sql/docs/postgres/admin-api))
- token (evidence: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls), [https://docs.cloud.google.com/sql/docs/mysql/admin-api](https://docs.cloud.google.com/sql/docs/mysql/admin-api), [https://docs.cloud.google.com/sql/docs/postgres/admin-api](https://docs.cloud.google.com/sql/docs/postgres/admin-api))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api](https://docs.cloud.google.com/sql/docs/mysql/admin-api)
- [https://docs.cloud.google.com/sql/docs/postgres/admin-api](https://docs.cloud.google.com/sql/docs/postgres/admin-api)
- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls)
