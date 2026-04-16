---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:27.289Z"
product_name: "Cloud TPU"
product_slug: "cloud-tpu"
feature_name: "true_divide support in PyTorch/XLA"
feature_slug: "true-divide-support-in-pytorch-xla"
latest_feature_date: "2020-08-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/ListOperationsResponse"
  - "https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/OperationMetadata"
  - "https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/CancelOperationRequest"
keywords:
  - "true"
  - "divide"
  - "pytorch"
  - "xla"
  - "adds"
  - "operation"
---

# true_divide support in PyTorch/XLA

Product: Cloud TPU
Coverage: MEDIUM

## Step 02 Summary

PyTorch/XLA 1.6 adds support for the true_divide operation.

## Extended Definition

PyTorch/XLA 1.6 adds support for the true_divide operation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/ListOperationsResponse](https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/ListOperationsResponse)
- [https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/OperationMetadata](https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/OperationMetadata)
- [https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/CancelOperationRequest](https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/CancelOperationRequest)

## Supporting Pages

### ListOperationsResponse \_|\_ Cloud TPU \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/ListOperationsResponse](https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/ListOperationsResponse)
- Source ID: `site-docs-reference`
- Final score: 75
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If true , the operation is completed, and either error or response is available.
- JSON representation { "operations" : [ { object ( Operation ) } ] , "nextPageToken" : string } Fields operations[] object ( Operation ) A list of operations that matches the specified filter in the request. next Page Token string The standard List next-page token.
- Some services might not provide the result. result can be only one of the following: error object ( Status ) The error result of the operation in case of failure or cancellation. response object The normal, successful response of the operation.
- If you use the default HTTP mapping, the name should be a resource name ending with operations/{unique id} . metadata object Service-specific metadata associated with the operation.

### OperationMetadata \_|\_ Cloud TPU \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/OperationMetadata](https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/OperationMetadata)
- Source ID: `site-docs-reference`
- Final score: 61
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Operations that have been cancelled successfully have google.longrunning.Operation.error value with a google.rpc.Status.code of 1 , corresponding to Code.CANCELLED . api Version string Output only.
- Home Documentation AI and ML Cloud TPU Reference Send feedback OperationMetadata Stay organized with collections Save and categorize content based on your preferences.
- Server-defined resource path for the target of the operation. verb string Output only.
- Human-readable status of the operation, if any. cancel Requested boolean Output only.

### CancelOperationRequest \_|\_ Cloud TPU \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/CancelOperationRequest](https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/CancelOperationRequest)
- Source ID: `site-docs-reference`
- Final score: 57
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation AI and ML Cloud TPU Reference Send feedback CancelOperationRequest Stay organized with collections Save and categorize content based on your preferences.
- JSON representation { "name" : string } Fields name string The name of the operation resource to be cancelled.
- JSON representation The request message for Operations.CancelOperation .

