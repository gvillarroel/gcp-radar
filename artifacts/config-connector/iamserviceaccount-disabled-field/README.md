# IAMServiceAccount disabled field

Product: Config Connector
Feature slug: `iamserviceaccount-disabled-field`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports the disabled field on IAMServiceAccount resources.

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
- credential
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
- token

## Official Evidence

- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamserviceaccount](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamserviceaccount)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamserviceaccountkey](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamserviceaccountkey)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
