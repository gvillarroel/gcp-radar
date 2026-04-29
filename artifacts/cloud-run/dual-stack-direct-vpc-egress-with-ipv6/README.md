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

- [https://docs.cloud.google.com/python/docs/reference/run/latest](https://docs.cloud.google.com/python/docs/reference/run/latest)
- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- [https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-gradio-service](https://docs.cloud.google.com/run/docs/quickstarts/build-and-deploy/deploy-python-gradio-service)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
