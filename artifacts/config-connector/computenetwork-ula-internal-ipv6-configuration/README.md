# ComputeNetwork ULA internal IPv6 configuration

Product: Config Connector
Feature slug: `computenetwork-ula-internal-ipv6-configuration`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports enableUlaInternalIpv6 and internalIpv6Range fields for ComputeNetwork resources.

## Lifecycle

- Latest feature date: 2022-07-27
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
- constraint
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

- [https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources](https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/compute/computeaddress](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/compute/computeaddress)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/compute/computenetworkpeering](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/compute/computenetworkpeering)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
