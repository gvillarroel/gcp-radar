# CPU always allocated

Product: Cloud Run
Feature slug: `cpu-always-allocated`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

CPU always allocated lets Cloud Run services keep CPU assigned for the entire lifetime of container instances.

## Lifecycle

- Latest feature date: 2021-09-13
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- identity

## Official Evidence

- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying)
- [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
