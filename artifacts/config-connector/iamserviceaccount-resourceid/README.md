# IAMServiceAccount resourceID

Product: Config Connector
Feature slug: `iamserviceaccount-resourceid`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports the resourceID field on IAMServiceAccount.

## Lifecycle

- Latest feature date: 2021-06-11
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- audit
- auth
- authorization
- certificate
- constraint
- credential
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

- [https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus](https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamserviceaccount](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamserviceaccount)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamserviceaccountkey](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamserviceaccountkey)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
