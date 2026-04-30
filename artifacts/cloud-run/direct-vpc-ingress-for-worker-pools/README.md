# Direct VPC ingress for worker pools

Product: Cloud Run
Feature slug: `direct-vpc-ingress-for-worker-pools`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Run worker pools support Direct VPC ingress so each worker instance can receive a private IP address on a configured network and subnet.

## Lifecycle

- Latest feature date: 2026-02-05
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- allow
- auth
- iam
- identity
- permission
- policy
- private
- role

## Official Evidence

- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- [https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub](https://docs.cloud.google.com/run/docs/tutorials/autoscale-workerpools-pubsub)
