# SIGTERM shutdown handling

Product: Cloud Run
Feature slug: `sigterm-shutdown-handling`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Run sends SIGTERM before shutting down a container instance and can continue CPU allocation for up to 10 seconds if the signal is handled.

## Lifecycle

- Latest feature date: 2020-10-11
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- auth
- authorization
- identity
- private
- secret
- token

## Official Evidence

- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- [https://docs.cloud.google.com/run/docs/tutorials/identity-platform](https://docs.cloud.google.com/run/docs/tutorials/identity-platform)
