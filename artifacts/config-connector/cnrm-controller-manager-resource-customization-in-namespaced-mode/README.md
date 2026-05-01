# cnrm-controller-manager resource customization in namespaced mode

Product: Config Connector
Feature slug: `cnrm-controller-manager-resource-customization-in-namespaced-mode`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports customizing cnrm-controller-manager pod resource requests and limits in namespaced mode.

## Lifecycle

- Latest feature date: 2023-08-21
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- auth
- authorization
- iam
- policy
- role

## Official Evidence

- [https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references](https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references)
- [https://docs.cloud.google.com/config-connector/docs/how-to/customize-controller-manager-rate-limit](https://docs.cloud.google.com/config-connector/docs/how-to/customize-controller-manager-rate-limit)
- [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
