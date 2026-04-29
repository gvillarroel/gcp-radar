# ContainerCluster state-into-spec absent mode

Product: Config Connector
Feature slug: `containercluster-state-into-spec-absent-mode`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports state-into-spec set to absent on ContainerCluster resources.

## Lifecycle

- Latest feature date: 2021-12-14
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

- [https://docs.cloud.google.com/config-connector/docs/best-practices](https://docs.cloud.google.com/config-connector/docs/best-practices)
- [https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields](https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/edgecontainer/edgecontainercluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/edgecontainer/edgecontainercluster)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
