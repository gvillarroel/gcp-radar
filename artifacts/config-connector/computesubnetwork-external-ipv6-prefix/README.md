# ComputeSubnetwork external IPv6 prefix

Product: Config Connector
Feature slug: `computesubnetwork-external-ipv6-prefix`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports the external IPv6 prefix field on ComputeSubnetwork resources.

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
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/compute/computesubnetwork](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/compute/computesubnetwork)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
