---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:07:58.653Z"
product_name: "Cloud TPU"
product_slug: "cloud-tpu"
feature_name: "TensorFlow 2.1 with Keras support"
feature_slug: "tensorflow-2-1-with-keras-support"
latest_feature_date: "2020-01-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/tpu/docs/release-notes"
  - "https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuClient"
keywords:
  - "tensorflow"
  - "with"
  - "keras"
  - "tpu"
  - "supports"
  - "including"
---

# TensorFlow 2.1 with Keras support

Product: Cloud TPU
Coverage: LOW

## Step 02 Summary

Cloud TPU supports TensorFlow 2.1 including Keras support.

## Extended Definition

Cloud TPU supports TensorFlow 2.1 including Keras support.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/tpu/docs/release-notes](https://docs.cloud.google.com/tpu/docs/release-notes)
- [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuAsyncClient](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuClient](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuClient)

## Supporting Pages

### Cloud TPU release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/release-notes](https://docs.cloud.google.com/tpu/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: N/A

Evidence snippets:
- January 09, 2020 Feature Cloud TPU now supports TensorFlow 2.1 with Keras support.
- May 21, 2020 Change Cloud TPU now supports TensorFlow 2.1.1 with Keras support.
- Dynamo bridge python binding ( #4119 ) Dynamo bridge backend implementation ( #4523 ) Training optimization: make execution async ( #4425 ) Training optimization: reduce graph execution per step ( #4523 ) PyTorch/XLA GSPMD on single host Preserve parameter sharding with sharded data placeholder ( #4721) Transfer shards from server to host ( #4508 ) Store the sharding annotation within XLATensor(# 4390 ) Use d2d replication for more efficient input sharding ( #4336 ) Mesh to support custom device order. ( #4162 ) Introduce virtual SPMD device to avoid unpartitioned data transfer ( #4091 ) Ongoing development Ongoing Dynamic Shape implementation Implement missing XLASymNodeImpl::Sub ( #4551 ) Make empty symint support dynamism. ( #4550 ) Add dynamic shape support to SigmoidBackward ( #4322 ) Add a forward pass NN model with dynamism test ( #4256 ) Ongoing SPMD multi host execution ( #4573 ) Bug fixes & improvements Support int as index type ( #4602 ) Only alias inputs and outputs when force ltc sync == True ( #4575 ) Fix race condition between execution and buffer tear down on GPU when using bfc allocator ( #4542 ) Release the GIL during TransferFromServer ( #4504 ) Fix type annotations in FSDP ( #4371 ) December 19, 2022 Change Cloud TPU now supports TensorFlow patches: 2.8.4 , 2.9.3 , and 2.10.1 .
- Cloud TPU v2 and v3 Pod advantages over a single v2 or v3 Cloud TPU device: Increased training speeds for fast iteration in R&D Increased human productivity by providing automatically scalable machine learning (ML) compute Ability to train much larger models Cloud TPU v3 Pod advantages over Cloud TPU v2 Pod: Faster processing and larger memory: v2 Pod: 11.5 petaflops and 4 TB on-chip memory (HBM) v3 Pod: 100 petaflops and 32 TB HBM, with liquid cooling Can train even larger models October 22, 2019 Change Cloud TPU now supports TensorFlow version 1.15 ( Release Notes , API Documentation ).

### "Class TpuAsyncClient (1.26.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuAsyncClient](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuAsyncClient)
- Source ID: `site-python-reference`
- Final score: 115
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Returns Type Description google.cloud.tpu v1.types.TensorFlowVersion A tensorflow version that a Node can be configured with. get transport class get transport class ( label : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import tpu v1 async def sample create node(): Create a client client = tpu v1.TpuAsyncClient() Initialize request argument(s) node = tpu v1.Node() node.accelerator type = "accelerator type value" node.tensorflow version = "tensorflow version value" request = tpu v1.CreateNodeRequest( parent="parent value", node=node, ) Make the request operation = client. create node (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.tpu v1.types.CreateNodeRequest , dict]] The request object.
- ListTensorFlowVersionsRequest ( parent="parent value", ) Make the request page result = client. list tensor flow versions (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.tpu v1.types.ListTensorFlowVersionsRequest , dict]] The request object.
- GetTensorFlowVersionRequest ( name="name value", ) Make the request response = await client. get tensor flow version (request=request) Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.tpu v1.types.GetTensorFlowVersionRequest , dict]] The request object.

### "Class TpuClient (1.26.0) \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuClient](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuClient)
- Source ID: `site-python-reference`
- Final score: 115
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Returns Type Description google.cloud.tpu v1.types.TensorFlowVersion A tensorflow version that a Node can be configured with. list accelerator types list accelerator types ( request : typing .
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import tpu v1 def sample create node(): Create a client client = tpu v1.TpuClient() Initialize request argument(s) node = tpu v1.Node() node.accelerator type = "accelerator type value" node.tensorflow version = "tensorflow version value" request = tpu v1.CreateNodeRequest( parent="parent value", node=node, ) Make the request operation = client. create node (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.tpu v1.types.CreateNodeRequest , dict] The request object.
- ListTensorFlowVersionsRequest ( parent="parent value", ) Make the request page result = client. list tensor flow versions (request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[ google.cloud.tpu v1.types.ListTensorFlowVersionsRequest , dict] The request object.
- GetTensorFlowVersionRequest ( name="name value", ) Make the request response = client. get tensor flow version (request=request) Handle the response print(response) Parameters Name Description request Union[ google.cloud.tpu v1.types.GetTensorFlowVersionRequest , dict] The request object.

