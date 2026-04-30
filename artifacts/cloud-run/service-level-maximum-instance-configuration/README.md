# Service-level maximum instance configuration

Product: Cloud Run
Feature slug: `service-level-maximum-instance-configuration`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Run supports applying maximum instance configuration at the service level.

## Lifecycle

- Latest feature date: 2025-10-06
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- auth
- credential
- iam
- identity
- token

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesAsyncClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.services.ServicesAsyncClient)
- [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring)
- [https://docs.cloud.google.com/run/docs/securing/service-identity](https://docs.cloud.google.com/run/docs/securing/service-identity)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
