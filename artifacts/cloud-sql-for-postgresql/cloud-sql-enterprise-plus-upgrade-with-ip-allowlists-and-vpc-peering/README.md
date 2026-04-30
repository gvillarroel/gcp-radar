# Cloud SQL Enterprise Plus upgrade with IP allowlists and VPC Peering

Product: Cloud SQL for PostgreSQL
Feature slug: `cloud-sql-enterprise-plus-upgrade-with-ip-allowlists-and-vpc-peering`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL for PostgreSQL instances can be upgraded to Cloud SQL Enterprise Plus edition while using IP allowlists and VPC Peering.

## Lifecycle

- Latest feature date: 2023-08-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- auth
- certificate
- encrypt
- key
- private

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances](https://docs.cloud.google.com/sql/docs/postgres/admin-api/rest/v1/instances)
- [https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip)
- [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
