# AccessContextManagerServicePerimeters external egress resources

Product: Config Connector
Feature slug: `accesscontextmanagerserviceperimeters-external-egress-resources`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports the egressPolicies.egressTo.externalResources field for AccessContextManagerServicePerimeters resources.

## Lifecycle

- Latest feature date: 2022-07-27
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
- credential
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

- [https://docs.cloud.google.com/config-connector/docs/how-to/customize-controller-manager-rate-limit](https://docs.cloud.google.com/config-connector/docs/how-to/customize-controller-manager-rate-limit)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeter](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeter)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
