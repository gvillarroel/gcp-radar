# Non-RFC 1918 IP address support

Product: Cloud SQL for PostgreSQL
Feature slug: `non-rfc-1918-ip-address-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL supports non-RFC 1918 IP address ranges for instance creation, replicas, and client connectivity.

## Lifecycle

- Latest feature date: 2023-07-06
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- auth
- authorization
- logging
- private
- token

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity)
- [https://docs.cloud.google.com/sql/docs/postgres/authorize-networks](https://docs.cloud.google.com/sql/docs/postgres/authorize-networks)
- [https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip](https://docs.cloud.google.com/sql/docs/postgres/configure-private-ip)
