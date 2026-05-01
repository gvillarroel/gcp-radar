# ComputeSubnetwork IPv6 access type

Product: Config Connector
Feature slug: `computesubnetwork-ipv6-access-type`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports setting IPv6 access type on ComputeSubnetwork resources.

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

- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/compute/computeaddress](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/compute/computeaddress)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/compute/computesubnetwork](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/compute/computesubnetwork)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/vpcaccess/vpcaccessconnector](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/vpcaccess/vpcaccessconnector)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
