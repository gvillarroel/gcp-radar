# DNSManagedZone cloud logging configuration support

Product: Config Connector
Feature slug: `dnsmanagedzone-cloud-logging-configuration-support`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports the spec.cloudLoggingConfig field for DNSManagedZone resources.

## Lifecycle

- Latest feature date: 2022-11-15
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
- firewall
- iam
- identity
- key
- kms
- logging
- policy
- private
- role
- secret
- security

## Official Evidence

- [https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields](https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy)
- [https://docs.cloud.google.com/config-connector/docs/resources](https://docs.cloud.google.com/config-connector/docs/resources)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
