# ComputeInstanceTemplate provisioned IOPS

Product: Config Connector
Feature slug: `computeinstancetemplate-provisioned-iops`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports provisioned IOPS settings on ComputeInstanceTemplate disks.

## Lifecycle

- Latest feature date: 2023-09-06
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

- [https://docs.cloud.google.com/config-connector/docs/reference/overview](https://docs.cloud.google.com/config-connector/docs/reference/overview)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/compute/computeinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/compute/computeinstance)
- [https://docs.cloud.google.com/config-connector/docs/reference/resources](https://docs.cloud.google.com/config-connector/docs/reference/resources)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
