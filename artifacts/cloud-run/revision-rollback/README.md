# Revision rollback

Product: Cloud Run
Feature slug: `revision-rollback`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Run supports rolling back service traffic to earlier revisions.

## Lifecycle

- Latest feature date: 2020-02-12
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- identity (evidence: [https://docs.cloud.google.com/run/docs/tutorials/local-troubleshooting](https://docs.cloud.google.com/run/docs/tutorials/local-troubleshooting), [https://docs.cloud.google.com/run/docs/securing/service-identity](https://docs.cloud.google.com/run/docs/securing/service-identity), [https://docs.cloud.google.com/run/docs/tutorials/configure-service-health](https://docs.cloud.google.com/run/docs/tutorials/configure-service-health))

## Official Evidence

- [https://docs.cloud.google.com/run/docs/securing/service-identity](https://docs.cloud.google.com/run/docs/securing/service-identity)
- [https://docs.cloud.google.com/run/docs/tutorials/configure-service-health](https://docs.cloud.google.com/run/docs/tutorials/configure-service-health)
- [https://docs.cloud.google.com/run/docs/tutorials/local-troubleshooting](https://docs.cloud.google.com/run/docs/tutorials/local-troubleshooting)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
