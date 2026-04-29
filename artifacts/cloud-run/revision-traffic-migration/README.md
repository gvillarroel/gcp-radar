# Revision traffic migration

Product: Cloud Run
Feature slug: `revision-traffic-migration`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Run supports traffic migration controls between service revisions.

## Lifecycle

- Latest feature date: 2020-02-12
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
- permission
- private
- secret
- security
- threat
- token

## Official Evidence

- [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying)
- [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service)
- [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
