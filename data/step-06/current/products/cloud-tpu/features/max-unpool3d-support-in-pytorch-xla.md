---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:27.285Z"
product_name: "Cloud TPU"
product_slug: "cloud-tpu"
feature_name: "max_unpool3d support in PyTorch/XLA"
feature_slug: "max-unpool3d-support-in-pytorch-xla"
latest_feature_date: "2020-08-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/WaitOperationRequest"
  - "https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/ListOperationsResponse"
  - "https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/OperationMetadata"
keywords:
  - "max"
  - "unpool3d"
  - "pytorch"
  - "xla"
  - "adds"
  - "operation"
---

# max_unpool3d support in PyTorch/XLA

Product: Cloud TPU
Coverage: MEDIUM

## Step 02 Summary

PyTorch/XLA 1.6 adds support for the max_unpool3d operation.

## Extended Definition

PyTorch/XLA 1.6 adds support for the max_unpool3d operation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/WaitOperationRequest](https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/WaitOperationRequest)
- [https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/ListOperationsResponse](https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/ListOperationsResponse)
- [https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/OperationMetadata](https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/OperationMetadata)

## Supporting Pages

### ListOperationsResponse \_|\_ Cloud TPU \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/ListOperationsResponse](https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/ListOperationsResponse)
- Source ID: `site-docs-reference`
- Final score: 61
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "operations" : [ { object ( Operation ) } ] , "nextPageToken" : string } Fields operations[] object ( Operation ) A list of operations that matches the specified filter in the request. next Page Token string The standard List next-page token.
- Some services might not provide the result. result can be only one of the following: error object ( Status ) The error result of the operation in case of failure or cancellation. response object The normal, successful response of the operation.
- If you use the default HTTP mapping, the name should be a resource name ending with operations/{unique id} . metadata object Service-specific metadata associated with the operation.
- Home Documentation AI and ML Cloud TPU Reference Send feedback ListOperationsResponse Stay organized with collections Save and categorize content based on your preferences.

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

### WaitOperationRequest \_|\_ Cloud TPU \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/WaitOperationRequest](https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/WaitOperationRequest)
- Source ID: `site-docs-reference`
- Final score: 59
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "name" : string , "timeout" : string } Fields name string The name of the operation resource to wait on. timeout string ( Duration format) The maximum duration to wait before timing out.
- Home Documentation AI and ML Cloud TPU Reference Send feedback WaitOperationRequest Stay organized with collections Save and categorize content based on your preferences.
- JSON representation The request message for Operations.WaitOperation .

