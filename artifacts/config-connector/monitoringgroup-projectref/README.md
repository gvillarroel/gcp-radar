# MonitoringGroup projectRef

Product: Config Connector
Feature slug: `monitoringgroup-projectref`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports strong hierarchical references through spec.projectRef on MonitoringGroup.

## Lifecycle

- Latest feature date: 2021-06-21
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

- [https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources](https://docs.cloud.google.com/config-connector/docs/how-to/managing-deleting-resources)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeter](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanagerserviceperimeter)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/monitoring/monitoringuptimecheckconfig](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/monitoring/monitoringuptimecheckconfig)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
