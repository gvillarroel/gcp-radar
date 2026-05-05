# Minimum instances

Product: Cloud Run
Feature slug: `minimum-instances`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Minimum instances let you keep a specified number of Cloud Run container instances warm and ready to serve requests; Cloud Run services can keep a minimum number of container instances warm to reduce latency and cold starts.

## Lifecycle

- Latest feature date: 2021-03-08
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- credential (evidence: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract), [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract), [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.instances.InstancesAsyncClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.instances.InstancesAsyncClient))

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.instances.InstancesAsyncClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.instances.InstancesAsyncClient)
- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
