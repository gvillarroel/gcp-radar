# Functions deployment in Cloud Run

Product: Cloud Run
Feature slug: `functions-deployment-in-cloud-run`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Run supports deploying functions as Cloud Run workloads.

## Lifecycle

- Latest feature date: 2025-02-19
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/run/docs/securing/service-identity](https://docs.cloud.google.com/run/docs/securing/service-identity), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service), [https://docs.cloud.google.com/run/docs/tutorials/codelabs](https://docs.cloud.google.com/run/docs/tutorials/codelabs))
- allow (evidence: [https://docs.cloud.google.com/run/docs/securing/service-identity](https://docs.cloud.google.com/run/docs/securing/service-identity), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service), [https://docs.cloud.google.com/run/docs/tutorials/codelabs](https://docs.cloud.google.com/run/docs/tutorials/codelabs))
- armor (evidence: [https://docs.cloud.google.com/run/docs/securing/service-identity](https://docs.cloud.google.com/run/docs/securing/service-identity), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service), [https://docs.cloud.google.com/run/docs/tutorials/codelabs](https://docs.cloud.google.com/run/docs/tutorials/codelabs))
- audit (evidence: [https://docs.cloud.google.com/run/docs/securing/service-identity](https://docs.cloud.google.com/run/docs/securing/service-identity), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service), [https://docs.cloud.google.com/run/docs/tutorials/codelabs](https://docs.cloud.google.com/run/docs/tutorials/codelabs))
- auth (evidence: [https://docs.cloud.google.com/run/docs/securing/service-identity](https://docs.cloud.google.com/run/docs/securing/service-identity), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service), [https://docs.cloud.google.com/run/docs/tutorials/codelabs](https://docs.cloud.google.com/run/docs/tutorials/codelabs))
- authorization (evidence: [https://docs.cloud.google.com/run/docs/securing/service-identity](https://docs.cloud.google.com/run/docs/securing/service-identity), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service), [https://docs.cloud.google.com/run/docs/tutorials/codelabs](https://docs.cloud.google.com/run/docs/tutorials/codelabs))
- constraint (evidence: [https://docs.cloud.google.com/run/docs/securing/service-identity](https://docs.cloud.google.com/run/docs/securing/service-identity), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service), [https://docs.cloud.google.com/run/docs/tutorials/codelabs](https://docs.cloud.google.com/run/docs/tutorials/codelabs))
- encrypt (evidence: [https://docs.cloud.google.com/run/docs/securing/service-identity](https://docs.cloud.google.com/run/docs/securing/service-identity), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service), [https://docs.cloud.google.com/run/docs/tutorials/codelabs](https://docs.cloud.google.com/run/docs/tutorials/codelabs))
- iam (evidence: [https://docs.cloud.google.com/run/docs/securing/service-identity](https://docs.cloud.google.com/run/docs/securing/service-identity), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service), [https://docs.cloud.google.com/run/docs/tutorials/codelabs](https://docs.cloud.google.com/run/docs/tutorials/codelabs))
- identity (evidence: [https://docs.cloud.google.com/run/docs/securing/service-identity](https://docs.cloud.google.com/run/docs/securing/service-identity), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service), [https://docs.cloud.google.com/run/docs/tutorials/codelabs](https://docs.cloud.google.com/run/docs/tutorials/codelabs))
- key (evidence: [https://docs.cloud.google.com/run/docs/securing/service-identity](https://docs.cloud.google.com/run/docs/securing/service-identity), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service), [https://docs.cloud.google.com/run/docs/tutorials/codelabs](https://docs.cloud.google.com/run/docs/tutorials/codelabs))
- logging (evidence: [https://docs.cloud.google.com/run/docs/securing/service-identity](https://docs.cloud.google.com/run/docs/securing/service-identity), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service), [https://docs.cloud.google.com/run/docs/tutorials/codelabs](https://docs.cloud.google.com/run/docs/tutorials/codelabs))
- private (evidence: [https://docs.cloud.google.com/run/docs/securing/service-identity](https://docs.cloud.google.com/run/docs/securing/service-identity), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service), [https://docs.cloud.google.com/run/docs/tutorials/codelabs](https://docs.cloud.google.com/run/docs/tutorials/codelabs))
- secret (evidence: [https://docs.cloud.google.com/run/docs/securing/service-identity](https://docs.cloud.google.com/run/docs/securing/service-identity), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service), [https://docs.cloud.google.com/run/docs/tutorials/codelabs](https://docs.cloud.google.com/run/docs/tutorials/codelabs))
- security (evidence: [https://docs.cloud.google.com/run/docs/securing/service-identity](https://docs.cloud.google.com/run/docs/securing/service-identity), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service), [https://docs.cloud.google.com/run/docs/tutorials/codelabs](https://docs.cloud.google.com/run/docs/tutorials/codelabs))
- threat (evidence: [https://docs.cloud.google.com/run/docs/securing/service-identity](https://docs.cloud.google.com/run/docs/securing/service-identity), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service), [https://docs.cloud.google.com/run/docs/tutorials/codelabs](https://docs.cloud.google.com/run/docs/tutorials/codelabs))

## Official Evidence

- [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service)
- [https://docs.cloud.google.com/run/docs/securing/service-identity](https://docs.cloud.google.com/run/docs/securing/service-identity)
- [https://docs.cloud.google.com/run/docs/tutorials/codelabs](https://docs.cloud.google.com/run/docs/tutorials/codelabs)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
