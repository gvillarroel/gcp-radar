# Dual-stack Direct VPC egress with IPv6

Product: Cloud Run
Feature slug: `dual-stack-direct-vpc-egress-with-ipv6`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud Run supports dual-stack subnets with IPv6 for Direct VPC egress and external IPv6 traffic.

## Lifecycle

- Latest feature date: 2025-11-06
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-gradio-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-gradio-service), [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract), [https://docs.cloud.google.com/python/docs/reference/run/latest](https://docs.cloud.google.com/python/docs/reference/run/latest))
- allow (evidence: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-gradio-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-gradio-service), [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract), [https://docs.cloud.google.com/python/docs/reference/run/latest](https://docs.cloud.google.com/python/docs/reference/run/latest))
- armor (evidence: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-gradio-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-gradio-service), [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract), [https://docs.cloud.google.com/python/docs/reference/run/latest](https://docs.cloud.google.com/python/docs/reference/run/latest))
- audit (evidence: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-gradio-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-gradio-service), [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract), [https://docs.cloud.google.com/python/docs/reference/run/latest](https://docs.cloud.google.com/python/docs/reference/run/latest))
- auth (evidence: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-gradio-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-gradio-service), [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract), [https://docs.cloud.google.com/python/docs/reference/run/latest](https://docs.cloud.google.com/python/docs/reference/run/latest))
- authorization (evidence: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-gradio-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-gradio-service), [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract), [https://docs.cloud.google.com/python/docs/reference/run/latest](https://docs.cloud.google.com/python/docs/reference/run/latest))
- constraint (evidence: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-gradio-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-gradio-service), [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract), [https://docs.cloud.google.com/python/docs/reference/run/latest](https://docs.cloud.google.com/python/docs/reference/run/latest))
- encrypt (evidence: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-gradio-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-gradio-service), [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract), [https://docs.cloud.google.com/python/docs/reference/run/latest](https://docs.cloud.google.com/python/docs/reference/run/latest))
- iam (evidence: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-gradio-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-gradio-service), [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract), [https://docs.cloud.google.com/python/docs/reference/run/latest](https://docs.cloud.google.com/python/docs/reference/run/latest))
- identity (evidence: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-gradio-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-gradio-service), [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract), [https://docs.cloud.google.com/python/docs/reference/run/latest](https://docs.cloud.google.com/python/docs/reference/run/latest))
- key (evidence: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-gradio-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-gradio-service), [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract), [https://docs.cloud.google.com/python/docs/reference/run/latest](https://docs.cloud.google.com/python/docs/reference/run/latest))
- logging (evidence: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-gradio-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-gradio-service), [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract), [https://docs.cloud.google.com/python/docs/reference/run/latest](https://docs.cloud.google.com/python/docs/reference/run/latest))
- private (evidence: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-gradio-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-gradio-service), [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract), [https://docs.cloud.google.com/python/docs/reference/run/latest](https://docs.cloud.google.com/python/docs/reference/run/latest))
- secret (evidence: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-gradio-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-gradio-service), [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract), [https://docs.cloud.google.com/python/docs/reference/run/latest](https://docs.cloud.google.com/python/docs/reference/run/latest))
- security (evidence: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-gradio-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-gradio-service), [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract), [https://docs.cloud.google.com/python/docs/reference/run/latest](https://docs.cloud.google.com/python/docs/reference/run/latest))
- threat (evidence: [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-gradio-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-gradio-service), [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract), [https://docs.cloud.google.com/python/docs/reference/run/latest](https://docs.cloud.google.com/python/docs/reference/run/latest))

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/run/latest](https://docs.cloud.google.com/python/docs/reference/run/latest)
- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-gradio-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-gradio-service)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
