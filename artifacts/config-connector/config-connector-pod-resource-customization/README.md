# Config Connector pod resource customization

Product: Config Connector
Feature slug: `config-connector-pod-resource-customization`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports customizing resource requests and limits for cnrm-webhook-manager, cnrm-controller-manager, cnrm-resource-stats-recorder, and cnrm-deletiondefender pods.

## Lifecycle

- Latest feature date: 2023-07-11
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- iam
- permission

## Official Evidence

- [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources)
- [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-webhook-timeouts)
- [https://docs.cloud.google.com/config-connector/docs/overview](https://docs.cloud.google.com/config-connector/docs/overview)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
