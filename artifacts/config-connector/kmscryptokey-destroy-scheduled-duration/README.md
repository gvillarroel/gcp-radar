# KMSCryptoKey destroy scheduled duration

Product: Config Connector
Feature slug: `kmscryptokey-destroy-scheduled-duration`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports setting destroy scheduled duration on KMSCryptoKey resources.

## Lifecycle

- Latest feature date: 2021-10-01
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

- [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources)
- [https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources](https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/kms/kmscryptokey](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/kms/kmscryptokey)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
