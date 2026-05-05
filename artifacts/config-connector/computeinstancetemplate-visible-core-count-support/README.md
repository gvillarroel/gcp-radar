# ComputeInstanceTemplate visible core count support

Product: Config Connector
Feature slug: `computeinstancetemplate-visible-core-count-support`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports the visibleCoreCount field for ComputeInstanceTemplate resources.

## Lifecycle

- Latest feature date: 2022-10-26
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

No security capability was identified from the current evidence.

## Official Evidence

- [https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-your-resources](https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-your-resources)
- [https://docs.cloud.google.com/config-connector/docs/how-to/viewing-events](https://docs.cloud.google.com/config-connector/docs/how-to/viewing-events)
- [https://docs.cloud.google.com/config-connector/docs/resources](https://docs.cloud.google.com/config-connector/docs/resources)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
