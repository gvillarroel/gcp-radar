# Eventarc triggers

Product: Cloud Run
Feature slug: `eventarc-triggers`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Run services can be triggered by Eventarc events.

## Lifecycle

- Latest feature date: 2020-10-23
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/run/docs/tutorials/eventarc](https://docs.cloud.google.com/run/docs/tutorials/eventarc), [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service))
- allow (evidence: [https://docs.cloud.google.com/run/docs/tutorials/eventarc](https://docs.cloud.google.com/run/docs/tutorials/eventarc), [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service))
- armor (evidence: [https://docs.cloud.google.com/run/docs/tutorials/eventarc](https://docs.cloud.google.com/run/docs/tutorials/eventarc), [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service))
- audit (evidence: [https://docs.cloud.google.com/run/docs/tutorials/eventarc](https://docs.cloud.google.com/run/docs/tutorials/eventarc), [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service))
- auth (evidence: [https://docs.cloud.google.com/run/docs/tutorials/eventarc](https://docs.cloud.google.com/run/docs/tutorials/eventarc), [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service))
- authorization (evidence: [https://docs.cloud.google.com/run/docs/tutorials/eventarc](https://docs.cloud.google.com/run/docs/tutorials/eventarc), [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service))
- constraint (evidence: [https://docs.cloud.google.com/run/docs/tutorials/eventarc](https://docs.cloud.google.com/run/docs/tutorials/eventarc), [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service))
- encrypt (evidence: [https://docs.cloud.google.com/run/docs/tutorials/eventarc](https://docs.cloud.google.com/run/docs/tutorials/eventarc), [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service))
- iam (evidence: [https://docs.cloud.google.com/run/docs/tutorials/eventarc](https://docs.cloud.google.com/run/docs/tutorials/eventarc), [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service))
- identity (evidence: [https://docs.cloud.google.com/run/docs/tutorials/eventarc](https://docs.cloud.google.com/run/docs/tutorials/eventarc), [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service))
- key (evidence: [https://docs.cloud.google.com/run/docs/tutorials/eventarc](https://docs.cloud.google.com/run/docs/tutorials/eventarc), [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service))
- logging (evidence: [https://docs.cloud.google.com/run/docs/tutorials/eventarc](https://docs.cloud.google.com/run/docs/tutorials/eventarc), [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service))
- permission (evidence: [https://docs.cloud.google.com/run/docs/tutorials/eventarc](https://docs.cloud.google.com/run/docs/tutorials/eventarc), [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service))
- policy (evidence: [https://docs.cloud.google.com/run/docs/tutorials/eventarc](https://docs.cloud.google.com/run/docs/tutorials/eventarc), [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service))
- private (evidence: [https://docs.cloud.google.com/run/docs/tutorials/eventarc](https://docs.cloud.google.com/run/docs/tutorials/eventarc), [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service))
- role (evidence: [https://docs.cloud.google.com/run/docs/tutorials/eventarc](https://docs.cloud.google.com/run/docs/tutorials/eventarc), [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service))
- secret (evidence: [https://docs.cloud.google.com/run/docs/tutorials/eventarc](https://docs.cloud.google.com/run/docs/tutorials/eventarc), [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service))
- security (evidence: [https://docs.cloud.google.com/run/docs/tutorials/eventarc](https://docs.cloud.google.com/run/docs/tutorials/eventarc), [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service))
- threat (evidence: [https://docs.cloud.google.com/run/docs/tutorials/eventarc](https://docs.cloud.google.com/run/docs/tutorials/eventarc), [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service))
- token (evidence: [https://docs.cloud.google.com/run/docs/tutorials/eventarc](https://docs.cloud.google.com/run/docs/tutorials/eventarc), [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions), [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service))

## Official Evidence

- [https://docs.cloud.google.com/run/docs/deploy-functions](https://docs.cloud.google.com/run/docs/deploy-functions)
- [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-service)
- [https://docs.cloud.google.com/run/docs/tutorials/eventarc](https://docs.cloud.google.com/run/docs/tutorials/eventarc)
