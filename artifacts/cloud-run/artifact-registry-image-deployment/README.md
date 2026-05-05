# Artifact Registry image deployment

Product: Cloud Run
Feature slug: `artifact-registry-image-deployment`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Run supports deploying container images from Artifact Registry.

## Lifecycle

- Latest feature date: 2020-03-16
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/run/docs/quickstarts/deploy-continuously](https://docs.cloud.google.com/run/docs/quickstarts/deploy-continuously), [https://docs.cloud.google.com/run/docs/tutorials/function-returns-bigquery-query](https://docs.cloud.google.com/run/docs/tutorials/function-returns-bigquery-query), [https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build](https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build))
- allow (evidence: [https://docs.cloud.google.com/run/docs/quickstarts/deploy-continuously](https://docs.cloud.google.com/run/docs/quickstarts/deploy-continuously), [https://docs.cloud.google.com/run/docs/tutorials/function-returns-bigquery-query](https://docs.cloud.google.com/run/docs/tutorials/function-returns-bigquery-query), [https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build](https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build))
- auth (evidence: [https://docs.cloud.google.com/run/docs/quickstarts/deploy-continuously](https://docs.cloud.google.com/run/docs/quickstarts/deploy-continuously), [https://docs.cloud.google.com/run/docs/tutorials/function-returns-bigquery-query](https://docs.cloud.google.com/run/docs/tutorials/function-returns-bigquery-query), [https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build](https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build))
- iam (evidence: [https://docs.cloud.google.com/run/docs/quickstarts/deploy-continuously](https://docs.cloud.google.com/run/docs/quickstarts/deploy-continuously), [https://docs.cloud.google.com/run/docs/tutorials/function-returns-bigquery-query](https://docs.cloud.google.com/run/docs/tutorials/function-returns-bigquery-query), [https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build](https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build))
- permission (evidence: [https://docs.cloud.google.com/run/docs/quickstarts/deploy-continuously](https://docs.cloud.google.com/run/docs/quickstarts/deploy-continuously), [https://docs.cloud.google.com/run/docs/tutorials/function-returns-bigquery-query](https://docs.cloud.google.com/run/docs/tutorials/function-returns-bigquery-query), [https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build](https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build))
- role (evidence: [https://docs.cloud.google.com/run/docs/quickstarts/deploy-continuously](https://docs.cloud.google.com/run/docs/quickstarts/deploy-continuously), [https://docs.cloud.google.com/run/docs/tutorials/function-returns-bigquery-query](https://docs.cloud.google.com/run/docs/tutorials/function-returns-bigquery-query), [https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build](https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build))
- secret (evidence: [https://docs.cloud.google.com/run/docs/quickstarts/deploy-continuously](https://docs.cloud.google.com/run/docs/quickstarts/deploy-continuously), [https://docs.cloud.google.com/run/docs/tutorials/function-returns-bigquery-query](https://docs.cloud.google.com/run/docs/tutorials/function-returns-bigquery-query), [https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build](https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build))
- token (evidence: [https://docs.cloud.google.com/run/docs/quickstarts/deploy-continuously](https://docs.cloud.google.com/run/docs/quickstarts/deploy-continuously), [https://docs.cloud.google.com/run/docs/tutorials/function-returns-bigquery-query](https://docs.cloud.google.com/run/docs/tutorials/function-returns-bigquery-query), [https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build](https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build))

## Official Evidence

- [https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build](https://docs.cloud.google.com/run/docs/continuous-deployment-with-cloud-build)
- [https://docs.cloud.google.com/run/docs/quickstarts/deploy-continuously](https://docs.cloud.google.com/run/docs/quickstarts/deploy-continuously)
- [https://docs.cloud.google.com/run/docs/tutorials/function-returns-bigquery-query](https://docs.cloud.google.com/run/docs/tutorials/function-returns-bigquery-query)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
