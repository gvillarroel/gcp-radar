# Non-RFC 1918 IP address range support

Product: Cloud SQL for MySQL
Feature slug: `non-rfc-1918-ip-address-range-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL supports creating and connecting to instances and replicas in non-RFC 1918 IP address ranges, including privately used public IP addresses.

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
- constraint
- logging
- policy
- private

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity)
- [https://docs.cloud.google.com/sql/docs/mysql/authorize-networks](https://docs.cloud.google.com/sql/docs/mysql/authorize-networks)
- [https://docs.cloud.google.com/sql/docs/mysql/connection-org-policy](https://docs.cloud.google.com/sql/docs/mysql/connection-org-policy)
