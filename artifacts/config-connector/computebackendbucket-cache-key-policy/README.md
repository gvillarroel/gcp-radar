# ComputeBackendBucket cache key policy

Product: Config Connector
Feature slug: `computebackendbucket-cache-key-policy`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Config Connector supports the cdnPolicy.cacheKeyPolicy field for ComputeBackendBucket resources.

## Lifecycle

- Latest feature date: 2022-06-21
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- key
- policy

## Official Evidence

- [https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources](https://docs.cloud.google.com/config-connector/docs/how-to/customizing-container-resources)
- [https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-your-resources](https://docs.cloud.google.com/config-connector/docs/how-to/monitoring-your-resources)
- [https://docs.cloud.google.com/config-connector/docs/how-to/viewing-events](https://docs.cloud.google.com/config-connector/docs/how-to/viewing-events)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
