# ConfigConnectorContext billing project override

Product: Config Connector
Feature slug: `configconnectorcontext-billing-project-override`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports specifying a quota billing project in ConfigConnectorContext through the billgProject flag.

## Lifecycle

- Latest feature date: 2021-12-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

No security capability was identified from the current evidence.

## Official Evidence

- [https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields](https://docs.cloud.google.com/config-connector/docs/concepts/ignore-unspecified-fields)
- [https://docs.cloud.google.com/config-connector/docs/concepts/namespaces-and-projects](https://docs.cloud.google.com/config-connector/docs/concepts/namespaces-and-projects)
- [https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus](https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-prometheus)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
