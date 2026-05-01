# Maximum instances setting

Product: Cloud Run
Feature slug: `maximum-instances-setting`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Run supports a maximum instances setting to limit the total number of container instances started for traffic.

## Lifecycle

- Latest feature date: 2019-10-01
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/run/latest](https://docs.cloud.google.com/python/docs/reference/run/latest)
- [https://docs.cloud.google.com/run/docs/authenticating/overview](https://docs.cloud.google.com/run/docs/authenticating/overview)
- [https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api](https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:thin_token_overlap` Supporting pages only weakly overlap with informative feature tokens.
