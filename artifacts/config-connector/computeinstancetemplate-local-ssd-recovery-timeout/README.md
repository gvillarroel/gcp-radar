# ComputeInstanceTemplate local SSD recovery timeout

Product: Config Connector
Feature slug: `computeinstancetemplate-local-ssd-recovery-timeout`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports configuring local SSD recovery timeout on ComputeInstanceTemplate resources.

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

- [https://docs.cloud.google.com/config-connector/docs/how-to/configuring-your-client](https://docs.cloud.google.com/config-connector/docs/how-to/configuring-your-client)
- [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/compute/computeinstance](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/compute/computeinstance)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
