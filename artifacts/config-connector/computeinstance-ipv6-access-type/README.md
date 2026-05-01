# ComputeInstance IPv6 access type

Product: Config Connector
Feature slug: `computeinstance-ipv6-access-type`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports setting IPv6 access type on ComputeInstance resources.

## Lifecycle

- Latest feature date: 2021-10-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- audit
- auth
- authorization
- certificate
- confidential
- constraint
- encrypt
- firewall
- iam
- identity
- key
- kms
- logging
- permission
- policy
- private
- role
- secret
- security

## Official Evidence

- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanageraccesslevel](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanageraccesslevel)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/compute/computebackendservice](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/compute/computebackendservice)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/compute/computeinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/compute/computeinstance)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
