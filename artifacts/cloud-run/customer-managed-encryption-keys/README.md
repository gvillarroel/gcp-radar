# Customer-managed encryption keys

Product: Cloud Run
Feature slug: `customer-managed-encryption-keys`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Customer-managed encryption keys let Cloud Run use user-controlled encryption keys for protected resources.

## Lifecycle

- Latest feature date: 2021-09-28
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions), [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service))
- allow (evidence: [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions), [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service))
- armor (evidence: [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions), [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service))
- audit (evidence: [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions), [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service))
- auth (evidence: [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions), [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service))
- authorization (evidence: [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions), [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service))
- constraint (evidence: [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions), [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service))
- encrypt (evidence: [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions), [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service))
- iam (evidence: [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions), [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service))
- identity (evidence: [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions), [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service))
- key (evidence: [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions), [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service))
- logging (evidence: [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions), [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service))
- permission (evidence: [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions), [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service))
- private (evidence: [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions), [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service))
- role (evidence: [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions), [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service))
- secret (evidence: [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions), [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service))
- security (evidence: [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions), [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service))
- threat (evidence: [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions), [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service))

## Official Evidence

- [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring)
- [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions)
- [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-fastapi-service)
