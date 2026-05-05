# Minimum instances

Product: Cloud Run functions
Feature slug: `minimum-instances`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Run functions supports setting a minimum number of instances.

## Lifecycle

- Latest feature date: 2021-08-30
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building))
- allow (evidence: [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building))
- credential (evidence: [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building))
- iam (evidence: [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building))
- logging (evidence: [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building))
- permission (evidence: [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building))
- policy (evidence: [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building))
- private (evidence: [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building))
- role (evidence: [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting), [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building))

## Official Evidence

- [https://docs.cloud.google.com/functions/docs/building](https://docs.cloud.google.com/functions/docs/building)
- [https://docs.cloud.google.com/functions/docs/troubleshooting](https://docs.cloud.google.com/functions/docs/troubleshooting)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
