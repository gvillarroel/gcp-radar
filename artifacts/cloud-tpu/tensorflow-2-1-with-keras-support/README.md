# TensorFlow 2.1 with Keras support

Product: Cloud TPU
Feature slug: `tensorflow-2-1-with-keras-support`
Coverage: `LOW`
IAM mapping: `unknown`

## Technical Summary

Cloud TPU supports TensorFlow 2.1 including Keras support.

## Lifecycle

- Latest feature date: 2020-01-09
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- access (evidence: [https://docs.cloud.google.com/tpu/docs/tensorflow-ops](https://docs.cloud.google.com/tpu/docs/tensorflow-ops), [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListTensorFlowVersionsAsyncPager](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListTensorFlowVersionsAsyncPager), [https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities](https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities))
- constraint (evidence: [https://docs.cloud.google.com/tpu/docs/tensorflow-ops](https://docs.cloud.google.com/tpu/docs/tensorflow-ops), [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListTensorFlowVersionsAsyncPager](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListTensorFlowVersionsAsyncPager), [https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities](https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities))
- iam (evidence: [https://docs.cloud.google.com/tpu/docs/tensorflow-ops](https://docs.cloud.google.com/tpu/docs/tensorflow-ops), [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListTensorFlowVersionsAsyncPager](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListTensorFlowVersionsAsyncPager), [https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities](https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities))
- identity (evidence: [https://docs.cloud.google.com/tpu/docs/tensorflow-ops](https://docs.cloud.google.com/tpu/docs/tensorflow-ops), [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListTensorFlowVersionsAsyncPager](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListTensorFlowVersionsAsyncPager), [https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities](https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities))
- key (evidence: [https://docs.cloud.google.com/tpu/docs/tensorflow-ops](https://docs.cloud.google.com/tpu/docs/tensorflow-ops), [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListTensorFlowVersionsAsyncPager](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListTensorFlowVersionsAsyncPager), [https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities](https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities))

## Official Evidence

- [https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities](https://docs.cloud.google.com/iam/docs/resources-with-built-in-identities)
- [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListTensorFlowVersionsAsyncPager](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListTensorFlowVersionsAsyncPager)
- [https://docs.cloud.google.com/tpu/docs/tensorflow-ops](https://docs.cloud.google.com/tpu/docs/tensorflow-ops)

## Validation Findings

- `warn:coverage_low` The feature ended with coverage LOW.
