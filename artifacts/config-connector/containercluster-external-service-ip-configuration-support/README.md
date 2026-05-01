# ContainerCluster external service IP configuration support

Product: Config Connector
Feature slug: `containercluster-external-service-ip-configuration-support`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports the serviceExternalIpsConfig field for ContainerCluster resources.

## Lifecycle

- Latest feature date: 2022-10-26
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
- encrypt
- iam
- identity
- key
- kms
- logging
- permission
- policy
- private
- secret
- security
- token

## Official Evidence

- [https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources](https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster)
- [https://docs.cloud.google.com/config-connector/docs/resources](https://docs.cloud.google.com/config-connector/docs/resources)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
