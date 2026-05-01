# Gradual rollout

Product: Cloud Run
Feature slug: `gradual-rollout`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Run supports gradual traffic rollouts between revisions for deployment changes.

## Lifecycle

- Latest feature date: 2020-02-12
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- identity

## Official Evidence

- [https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build](https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build)
- [https://docs.cloud.google.com/run/docs/tutorials/function-returns-bigquery-query](https://docs.cloud.google.com/run/docs/tutorials/function-returns-bigquery-query)
- [https://docs.cloud.google.com/run/docs/tutorials/identity-platform](https://docs.cloud.google.com/run/docs/tutorials/identity-platform)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
