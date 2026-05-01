# ContainerCluster auto-provisioning default disk size support

Product: Config Connector
Feature slug: `containercluster-auto-provisioning-default-disk-size-support`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports the spec.clusterAutoscaling.autoProvisioningDefaults.diskSize field for ContainerCluster resources.

## Lifecycle

- Latest feature date: 2022-12-13
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
- token

## Official Evidence

- [https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-your-resources](https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-your-resources)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
