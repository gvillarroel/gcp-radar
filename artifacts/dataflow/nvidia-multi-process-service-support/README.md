# NVIDIA Multi-Process Service support

Product: Dataflow
Feature slug: `nvidia-multi-process-service-support`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Dataflow GPU workloads can use NVIDIA Multi-Process Service to improve GPU efficiency and utilization when running multiple SDK processes on a shared GPU.

## Lifecycle

- Latest feature date: 2023-07-25
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/logging](https://docs.cloud.google.com/dataflow/docs/guides/logging), [https://docs.cloud.google.com/dataflow/docs/machine-learning](https://docs.cloud.google.com/dataflow/docs/machine-learning), [https://docs.cloud.google.com/dataflow/docs/gpu/gpu-support](https://docs.cloud.google.com/dataflow/docs/gpu/gpu-support))
- logging (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/logging](https://docs.cloud.google.com/dataflow/docs/guides/logging), [https://docs.cloud.google.com/dataflow/docs/machine-learning](https://docs.cloud.google.com/dataflow/docs/machine-learning), [https://docs.cloud.google.com/dataflow/docs/gpu/gpu-support](https://docs.cloud.google.com/dataflow/docs/gpu/gpu-support))
- private (evidence: [https://docs.cloud.google.com/dataflow/docs/guides/logging](https://docs.cloud.google.com/dataflow/docs/guides/logging), [https://docs.cloud.google.com/dataflow/docs/machine-learning](https://docs.cloud.google.com/dataflow/docs/machine-learning), [https://docs.cloud.google.com/dataflow/docs/gpu/gpu-support](https://docs.cloud.google.com/dataflow/docs/gpu/gpu-support))

## Official Evidence

- [https://docs.cloud.google.com/dataflow/docs/gpu/gpu-support](https://docs.cloud.google.com/dataflow/docs/gpu/gpu-support)
- [https://docs.cloud.google.com/dataflow/docs/guides/logging](https://docs.cloud.google.com/dataflow/docs/guides/logging)
- [https://docs.cloud.google.com/dataflow/docs/machine-learning](https://docs.cloud.google.com/dataflow/docs/machine-learning)
