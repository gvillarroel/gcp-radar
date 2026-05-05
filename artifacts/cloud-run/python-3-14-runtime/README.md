# Python 3.14 runtime

Product: Cloud Run
Feature slug: `python-3-14-runtime`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Run supports the Python 3.14 runtime for services; Cloud Run supports the Python 3.14 runtime for services.

## Lifecycle

- Latest feature date: 2025-12-19
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth (evidence: [https://docs.cloud.google.com/run/docs/authenticating/overview](https://docs.cloud.google.com/run/docs/authenticating/overview), [https://docs.cloud.google.com/run/docs/quickstarts/jobs/build-create-python](https://docs.cloud.google.com/run/docs/quickstarts/jobs/build-create-python), [https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api](https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api))
- identity (evidence: [https://docs.cloud.google.com/run/docs/authenticating/overview](https://docs.cloud.google.com/run/docs/authenticating/overview), [https://docs.cloud.google.com/run/docs/quickstarts/jobs/build-create-python](https://docs.cloud.google.com/run/docs/quickstarts/jobs/build-create-python), [https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api](https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api))

## Official Evidence

- [https://docs.cloud.google.com/run/docs/authenticating/overview](https://docs.cloud.google.com/run/docs/authenticating/overview)
- [https://docs.cloud.google.com/run/docs/quickstarts/jobs/build-create-python](https://docs.cloud.google.com/run/docs/quickstarts/jobs/build-create-python)
- [https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api](https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
