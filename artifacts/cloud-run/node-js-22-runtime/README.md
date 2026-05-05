# Node.js 22 runtime

Product: Cloud Run
Feature slug: `node-js-22-runtime`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Run supports the Node.js 22 runtime for deployed workloads.

## Lifecycle

- Latest feature date: 2024-11-18
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-nodejs-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-nodejs-service), [https://docs.cloud.google.com/run/docs/quickstarts/jobs/build-create-nodejs](https://docs.cloud.google.com/run/docs/quickstarts/jobs/build-create-nodejs), [https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api](https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api))
- auth (evidence: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-nodejs-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-nodejs-service), [https://docs.cloud.google.com/run/docs/quickstarts/jobs/build-create-nodejs](https://docs.cloud.google.com/run/docs/quickstarts/jobs/build-create-nodejs), [https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api](https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api))
- identity (evidence: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-nodejs-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-nodejs-service), [https://docs.cloud.google.com/run/docs/quickstarts/jobs/build-create-nodejs](https://docs.cloud.google.com/run/docs/quickstarts/jobs/build-create-nodejs), [https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api](https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api))
- policy (evidence: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-nodejs-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-nodejs-service), [https://docs.cloud.google.com/run/docs/quickstarts/jobs/build-create-nodejs](https://docs.cloud.google.com/run/docs/quickstarts/jobs/build-create-nodejs), [https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api](https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api))
- private (evidence: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-nodejs-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-nodejs-service), [https://docs.cloud.google.com/run/docs/quickstarts/jobs/build-create-nodejs](https://docs.cloud.google.com/run/docs/quickstarts/jobs/build-create-nodejs), [https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api](https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api))

## Official Evidence

- [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-nodejs-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-nodejs-service)
- [https://docs.cloud.google.com/run/docs/quickstarts/jobs/build-create-nodejs](https://docs.cloud.google.com/run/docs/quickstarts/jobs/build-create-nodejs)
- [https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api](https://docs.cloud.google.com/run/docs/reference/authenticate-to-cloud-run-api)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
