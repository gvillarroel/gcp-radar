# Private Service Connect endpoint propagation

Product: Cloud SQL for SQL Server
Feature slug: `private-service-connect-endpoint-propagation`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Private Service Connect endpoint propagation uses Network Connectivity Center to propagate Cloud SQL PSC endpoints across VPC networks; Private Service Connect endpoint propagation uses Network Connectivity Center to make Cloud SQL PSC endpoints transitively accessible across spoke VPC networks.

## Lifecycle

- Latest feature date: 2025-04-24
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- armor
- iam
- identity
- key
- logging
- private
- security
- threat

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/sqlserver/about-private-service-connect](https://docs.cloud.google.com/sql/docs/sqlserver/about-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview](https://docs.cloud.google.com/sql/docs/sqlserver/connect-overview)
- [https://docs.cloud.google.com/sql/docs/sqlserver/pricing](https://docs.cloud.google.com/sql/docs/sqlserver/pricing)
