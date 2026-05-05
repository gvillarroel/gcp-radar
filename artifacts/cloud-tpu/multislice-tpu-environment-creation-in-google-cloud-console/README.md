# Multislice TPU environment creation in Google Cloud Console

Product: Cloud TPU
Feature slug: `multislice-tpu-environment-creation-in-google-cloud-console`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

Google Cloud Console support for Multislice lets you create Cloud TPU training environments that use multiple TPU slices across one or more Pods.

## Lifecycle

- Latest feature date: 2024-11-01
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/tpu/docs/quick-starts](https://docs.cloud.google.com/tpu/docs/quick-starts), [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuAsyncClient](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuAsyncClient), [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuClient](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuClient))
- auth (evidence: [https://docs.cloud.google.com/tpu/docs/quick-starts](https://docs.cloud.google.com/tpu/docs/quick-starts), [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuAsyncClient](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuAsyncClient), [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuClient](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuClient))
- credential (evidence: [https://docs.cloud.google.com/tpu/docs/quick-starts](https://docs.cloud.google.com/tpu/docs/quick-starts), [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuAsyncClient](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuAsyncClient), [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuClient](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuClient))
- iam (evidence: [https://docs.cloud.google.com/tpu/docs/quick-starts](https://docs.cloud.google.com/tpu/docs/quick-starts), [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuAsyncClient](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuAsyncClient), [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuClient](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuClient))
- identity (evidence: [https://docs.cloud.google.com/tpu/docs/quick-starts](https://docs.cloud.google.com/tpu/docs/quick-starts), [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuAsyncClient](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuAsyncClient), [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuClient](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuClient))
- key (evidence: [https://docs.cloud.google.com/tpu/docs/quick-starts](https://docs.cloud.google.com/tpu/docs/quick-starts), [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuAsyncClient](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuAsyncClient), [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuClient](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuClient))
- logging (evidence: [https://docs.cloud.google.com/tpu/docs/quick-starts](https://docs.cloud.google.com/tpu/docs/quick-starts), [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuAsyncClient](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuAsyncClient), [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuClient](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuClient))
- role (evidence: [https://docs.cloud.google.com/tpu/docs/quick-starts](https://docs.cloud.google.com/tpu/docs/quick-starts), [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuAsyncClient](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuAsyncClient), [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuClient](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuClient))

## Official Evidence

- [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuAsyncClient](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuClient](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuClient)
- [https://docs.cloud.google.com/tpu/docs/quick-starts](https://docs.cloud.google.com/tpu/docs/quick-starts)
