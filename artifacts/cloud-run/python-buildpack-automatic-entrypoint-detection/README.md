# Python buildpack automatic entrypoint detection

Product: Cloud Run
Feature slug: `python-buildpack-automatic-entrypoint-detection`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

For Python 3.13 and later, the Python buildpack sets the default entrypoint for Cloud Run source deployments from web server or framework settings in requirements.txt.

## Lifecycle

- Latest feature date: 2025-08-14
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access
- allow
- armor
- audit
- auth
- authorization
- constraint
- encrypt
- iam
- identity
- key
- logging
- private
- secret
- security
- threat

## Official Evidence

- [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service)
- [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-gradio-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-gradio-service)
- [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service)
