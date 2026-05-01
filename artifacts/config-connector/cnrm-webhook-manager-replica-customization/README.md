# cnrm-webhook-manager replica customization

Product: Config Connector
Feature slug: `cnrm-webhook-manager-replica-customization`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports customizing the replica count for the cnrm-webhook-manager pod.

## Lifecycle

- Latest feature date: 2023-08-01
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

- [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources)
- [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/container/containercluster)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
