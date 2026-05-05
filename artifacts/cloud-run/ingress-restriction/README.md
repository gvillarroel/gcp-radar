# Ingress restriction

Product: Cloud Run
Feature slug: `ingress-restriction`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Run services can restrict which inbound traffic is allowed to reach them.

## Lifecycle

- Latest feature date: 2020-12-18
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract), [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract), [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying))
- allow (evidence: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract), [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract), [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying))
- auth (evidence: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract), [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract), [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying))
- authorization (evidence: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract), [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract), [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying))
- policy (evidence: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract), [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract), [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying))
- private (evidence: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract), [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract), [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying))
- security (evidence: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract), [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract), [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying))

## Official Evidence

- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying)
- [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
