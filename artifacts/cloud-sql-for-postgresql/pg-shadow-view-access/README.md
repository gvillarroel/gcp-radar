# pg_shadow view access

Product: Cloud SQL for PostgreSQL
Feature slug: `pg-shadow-view-access`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for PostgreSQL allows access to the pg_shadow view for working with login role properties.

## Lifecycle

- Latest feature date: 2022-06-13
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access](https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access), [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance), [https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip))
- allow (evidence: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access](https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access), [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance), [https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access](https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access), [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance), [https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access](https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access), [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance), [https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip))
- certificate (evidence: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access](https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access), [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance), [https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip))
- iam (evidence: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access](https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access), [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance), [https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip))
- permission (evidence: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access](https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access), [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance), [https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip))
- policy (evidence: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access](https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access), [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance), [https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip))
- private (evidence: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access](https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access), [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance), [https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip))
- role (evidence: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access](https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access), [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance), [https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip))
- token (evidence: [https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access](https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access), [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance), [https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip)
- [https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access](https://docs.cloud.google.com/sql/docs/postgres/configure-private-services-access)
- [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
