# PHP 8.4 runtime

Product: Cloud Run
Feature slug: `php-8-4-runtime`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Run supports the PHP 8.4 runtime for deployed workloads; Cloud Run supports the PHP 8.4 runtime for deployed workloads.

## Lifecycle

- Latest feature date: 2025-06-17
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-php-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-php-service), [https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api](https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api), [https://docs.cloud.google.com/python/docs/reference/run/latest](https://docs.cloud.google.com/python/docs/reference/run/latest))
- auth (evidence: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-php-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-php-service), [https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api](https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api), [https://docs.cloud.google.com/python/docs/reference/run/latest](https://docs.cloud.google.com/python/docs/reference/run/latest))
- policy (evidence: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-php-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-php-service), [https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api](https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api), [https://docs.cloud.google.com/python/docs/reference/run/latest](https://docs.cloud.google.com/python/docs/reference/run/latest))
- private (evidence: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-php-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-php-service), [https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api](https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api), [https://docs.cloud.google.com/python/docs/reference/run/latest](https://docs.cloud.google.com/python/docs/reference/run/latest))

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/run/latest](https://docs.cloud.google.com/python/docs/reference/run/latest)
- [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-php-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-php-service)
- [https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api](https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
