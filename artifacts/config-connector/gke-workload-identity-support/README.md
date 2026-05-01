# GKE Workload Identity support

Product: Config Connector
Feature slug: `gke-workload-identity-support`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports integration with GKE Workload Identity.

## Lifecycle

- Latest feature date: 2019-09-30
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

- [https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions](https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions)
- [https://docs.cloud.google.com/config-connector/docs/how-to/install-upgrade-uninstall](https://docs.cloud.google.com/config-connector/docs/how-to/install-upgrade-uninstall)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/gkehub/gkehubmembership](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/gkehub/gkehubmembership)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
