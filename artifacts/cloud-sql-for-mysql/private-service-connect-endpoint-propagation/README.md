# Private Service Connect endpoint propagation

Product: Cloud SQL for MySQL
Feature slug: `private-service-connect-endpoint-propagation`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Private Service Connect endpoint propagation uses Network Connectivity Center to propagate Cloud SQL PSC endpoints across a VPC network; Private Service Connect endpoint propagation uses Network Connectivity Center to make Cloud SQL PSC endpoints transitively accessible across spoke VPC networks.

## Lifecycle

- Latest feature date: 2025-04-24
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- authorization
- policy
- private
- token

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/about-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access-and-private-service-connect](https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access-and-private-service-connect)
