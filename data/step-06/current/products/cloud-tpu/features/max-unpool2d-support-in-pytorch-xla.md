---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:27.284Z"
product_name: "Cloud TPU"
product_slug: "cloud-tpu"
feature_name: "max_unpool2d support in PyTorch/XLA"
feature_slug: "max-unpool2d-support-in-pytorch-xla"
latest_feature_date: "2020-08-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/tpu/docs/intro-to-tpu"
  - "https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/ListOperationsResponse"
  - "https://docs.cloud.google.com/tpu/docs/reference/rest/Shared.Types/OperationMetadata"
keywords:
  - "max"
  - "unpool2d"
  - "pytorch"
  - "xla"
  - "adds"
  - "operation"
---

# max_unpool2d support in PyTorch/XLA

Product: Cloud TPU
Coverage: MEDIUM

## Step 02 Summary

PyTorch/XLA 1.6 adds support for the max_unpool2d operation.

## Extended Definition

PyTorch/XLA 1.6 adds support for the max_unpool2d operation.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/tpu/docs/intro-to-tpu](https://docs.cloud.google.com/tpu/docs/intro-to-tpu)
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

### Introduction to Cloud TPU \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/intro-to-tpu](https://docs.cloud.google.com/tpu/docs/intro-to-tpu)
- Source ID: `site-docs-reference`
- Final score: 59
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CPUs Quick prototyping that requires maximum flexibility Simple models that don't take long to train Small models with small, effective batch sizes Models that contain many custom TensorFlow operations written in C++ Models that are limited by available I/O or the networking bandwidth of the host system GPUs Models with a significant number of custom PyTorch/JAX operations that must run at least partially on CPUs Models with TensorFlow ops that are not available on Cloud TPU (see the list of available TensorFlow ops ) Medium-to-large models with larger effective batch sizes TPUs Models dominated by matrix computations Models with no custom PyTorch/JAX operations inside the main training loop Models that train for weeks or months Large models with large effective batch sizes Models with ultra-large embeddings common in advanced ranking and recommendation workloads Cloud TPUs are not suited to the following workloads: Linear algebra programs that require frequent branching or contain many element-wise algebra operations Workloads that require high-precision arithmetic Neural network workloads that contain custom operations in the main training loop TPUs in Google Cloud You can use TPUs through Cloud TPU VMs, Google Kubernetes Engine, and Vertex AI.
- Google Cloud service Resources Cloud TPU Get started with Cloud TPU VMs Google Kubernetes Engine About TPUs in GKE Vertex AI Training on Vertex AI with TPUs Use TPUs for online prediction on Vertex AI Best practices for model development A program whose computation is dominated by non-matrix operations such as add, reshape, or concatenate, will likely not achieve high MXU utilization.
- TPUs efficiently train your models by using hardware designed for performing large matrix operations often found in machine learning algorithms.
- Reshape operations are often memory bound on the Cloud TPU.

