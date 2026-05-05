# 4 vCPU allocation

Product: Cloud Run
Feature slug: `4-vcpu-allocation`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Cloud Run service instances can allocate up to 4 vCPUs.

## Lifecycle

- Latest feature date: 2020-10-12
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
