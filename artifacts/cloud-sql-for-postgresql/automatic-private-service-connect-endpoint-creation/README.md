# Automatic Private Service Connect endpoint creation

Product: Cloud SQL for PostgreSQL
Feature slug: `automatic-private-service-connect-endpoint-creation`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Automatic Private Service Connect endpoint creation automatically creates a PSC endpoint for accessing Cloud SQL through a VPC network; Cloud SQL can automatically create a Private Service Connect endpoint during instance creation instead of requiring manual endpoint setup.

## Lifecycle

- Latest feature date: 2025-09-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- authorization
- policy
- private
- token

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/postgres/about-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/about-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/postgres/configure-private-service-connect)
