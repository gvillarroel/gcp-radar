# Ruby 4.0 runtime

Product: Cloud Run
Feature slug: `ruby-4-0-runtime`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Run supports the Ruby 4.0 runtime for services; Cloud Run supports the Ruby 4.0 runtime for services.

## Lifecycle

- Latest feature date: 2026-03-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://docs.cloud.google.com/run/docs/authenticating/overview](https://docs.cloud.google.com/run/docs/authenticating/overview), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-adk-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-adk-service), [https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api](https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api))
- identity (evidence: [https://docs.cloud.google.com/run/docs/authenticating/overview](https://docs.cloud.google.com/run/docs/authenticating/overview), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-adk-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-adk-service), [https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api](https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api))

## Official Evidence

- [https://docs.cloud.google.com/run/docs/authenticating/overview](https://docs.cloud.google.com/run/docs/authenticating/overview)
- [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-adk-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-adk-service)
- [https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api](https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
- `warn:generic_supporting_pages` Supporting pages do not mention any informative feature tokens.
