# Combined private services access and Private Service Connect

Product: Cloud SQL for PostgreSQL
Feature slug: `combined-private-services-access-and-private-service-connect`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL instances can be created or updated to use both private services access and Private Service Connect together.

## Lifecycle

- Latest feature date: 2024-11-27
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect), [https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access](https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances))
- allow (evidence: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect), [https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access](https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances))
- audit (evidence: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect), [https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access](https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect), [https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access](https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect), [https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access](https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances))
- certificate (evidence: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect), [https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access](https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect), [https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access](https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances))
- permission (evidence: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect), [https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access](https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances))
- policy (evidence: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect), [https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access](https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances))
- private (evidence: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect), [https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access](https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances))
- role (evidence: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect), [https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access](https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances))
- token (evidence: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect), [https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access](https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access), [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access](https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access)
