# true_divide support in PyTorch/XLA

Product: Cloud TPU
Feature slug: `true-divide-support-in-pytorch-xla`
Coverage: `MEDIUM`
IAM mapping: `unknown`

## Technical Summary

PyTorch/XLA 1.6 adds support for the true_divide operation.

## Lifecycle

- Latest feature date: 2020-08-20
- Deprecation date: none recorded
- Status: feature_observed

## IAM

No defensible IAM mapping was found in the current evidence.

## Security Capabilities

- token (evidence: [https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/ListOperationsResponse](https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/ListOperationsResponse), [https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/OperationMetadata](https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/OperationMetadata), [https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/CancelOperationRequest](https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/CancelOperationRequest))

## Official Evidence

- [https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/CancelOperationRequest](https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/CancelOperationRequest)
- [https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/ListOperationsResponse](https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/ListOperationsResponse)
- [https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/OperationMetadata](https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/OperationMetadata)
