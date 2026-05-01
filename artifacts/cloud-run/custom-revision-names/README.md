# Custom revision names

Product: Cloud Run
Feature slug: `custom-revision-names`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Run supports custom revision names through the revision suffix flag.

## Lifecycle

- Latest feature date: 2020-01-07
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- permission
- private
- role

## Official Evidence

- [https://docs.cloud.google.com/run/docs/authenticating/overview](https://docs.cloud.google.com/run/docs/authenticating/overview)
- [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-c-plus-plus-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-c-plus-plus-service)
- [https://docs.cloud.google.com/run/docs/quickstarts/functions/deploy-functions-console](https://docs.cloud.google.com/run/docs/quickstarts/functions/deploy-functions-console)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
