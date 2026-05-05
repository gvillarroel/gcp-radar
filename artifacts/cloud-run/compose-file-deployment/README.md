# Compose file deployment

Product: Cloud Run
Feature slug: `compose-file-deployment`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Run supports deploying services from a Compose file; Cloud Run supports deploying services from a Compose file.

## Lifecycle

- Latest feature date: 2026-03-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service), [https://docs.cloud.google.com/run/docs/tutorials/secure-services](https://docs.cloud.google.com/run/docs/tutorials/secure-services))
- allow (evidence: [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service), [https://docs.cloud.google.com/run/docs/tutorials/secure-services](https://docs.cloud.google.com/run/docs/tutorials/secure-services))
- armor (evidence: [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service), [https://docs.cloud.google.com/run/docs/tutorials/secure-services](https://docs.cloud.google.com/run/docs/tutorials/secure-services))
- audit (evidence: [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service), [https://docs.cloud.google.com/run/docs/tutorials/secure-services](https://docs.cloud.google.com/run/docs/tutorials/secure-services))
- auth (evidence: [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service), [https://docs.cloud.google.com/run/docs/tutorials/secure-services](https://docs.cloud.google.com/run/docs/tutorials/secure-services))
- authorization (evidence: [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service), [https://docs.cloud.google.com/run/docs/tutorials/secure-services](https://docs.cloud.google.com/run/docs/tutorials/secure-services))
- constraint (evidence: [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service), [https://docs.cloud.google.com/run/docs/tutorials/secure-services](https://docs.cloud.google.com/run/docs/tutorials/secure-services))
- encrypt (evidence: [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service), [https://docs.cloud.google.com/run/docs/tutorials/secure-services](https://docs.cloud.google.com/run/docs/tutorials/secure-services))
- iam (evidence: [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service), [https://docs.cloud.google.com/run/docs/tutorials/secure-services](https://docs.cloud.google.com/run/docs/tutorials/secure-services))
- identity (evidence: [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service), [https://docs.cloud.google.com/run/docs/tutorials/secure-services](https://docs.cloud.google.com/run/docs/tutorials/secure-services))
- key (evidence: [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service), [https://docs.cloud.google.com/run/docs/tutorials/secure-services](https://docs.cloud.google.com/run/docs/tutorials/secure-services))
- logging (evidence: [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service), [https://docs.cloud.google.com/run/docs/tutorials/secure-services](https://docs.cloud.google.com/run/docs/tutorials/secure-services))
- private (evidence: [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service), [https://docs.cloud.google.com/run/docs/tutorials/secure-services](https://docs.cloud.google.com/run/docs/tutorials/secure-services))
- secret (evidence: [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service), [https://docs.cloud.google.com/run/docs/tutorials/secure-services](https://docs.cloud.google.com/run/docs/tutorials/secure-services))
- security (evidence: [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service), [https://docs.cloud.google.com/run/docs/tutorials/secure-services](https://docs.cloud.google.com/run/docs/tutorials/secure-services))
- threat (evidence: [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service), [https://docs.cloud.google.com/run/docs/tutorials/secure-services](https://docs.cloud.google.com/run/docs/tutorials/secure-services))
- token (evidence: [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service), [https://docs.cloud.google.com/run/docs/tutorials/secure-services](https://docs.cloud.google.com/run/docs/tutorials/secure-services))

## Official Evidence

- [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying)
- [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service)
- [https://docs.cloud.google.com/run/docs/tutorials/secure-services](https://docs.cloud.google.com/run/docs/tutorials/secure-services)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
