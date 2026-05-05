# Allocated IP address ranges

Product: Cloud SQL for MySQL
Feature slug: `allocated-ip-address-ranges`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud SQL lets you specify IP CIDR ranges from your VPC network for instances to better manage address space.

## Lifecycle

- Latest feature date: 2021-10-04
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance), [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-ip](https://docs.cloud.google.com/sql/docs/mysql/configure-private-ip))
- auth (evidence: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance), [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-ip](https://docs.cloud.google.com/sql/docs/mysql/configure-private-ip))
- authorization (evidence: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance), [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-ip](https://docs.cloud.google.com/sql/docs/mysql/configure-private-ip))
- logging (evidence: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance), [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-ip](https://docs.cloud.google.com/sql/docs/mysql/configure-private-ip))
- private (evidence: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance), [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-ip](https://docs.cloud.google.com/sql/docs/mysql/configure-private-ip))
- token (evidence: [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance), [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity), [https://docs.cloud.google.com/sql/docs/mysql/configure-private-ip](https://docs.cloud.google.com/sql/docs/mysql/configure-private-ip))

## Official Evidence

- [https://docs.cloud.google.com/sql/docs/debugging-connectivity](https://docs.cloud.google.com/sql/docs/debugging-connectivity)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-private-ip](https://docs.cloud.google.com/sql/docs/mysql/configure-private-ip)
- [https://docs.cloud.google.com/sql/docs/mysql/create-instance](https://docs.cloud.google.com/sql/docs/mysql/create-instance)
