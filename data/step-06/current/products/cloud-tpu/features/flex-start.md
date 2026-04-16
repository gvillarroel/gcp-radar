---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:27.279Z"
product_name: "Cloud TPU"
product_slug: "cloud-tpu"
feature_name: "Flex-start"
feature_slug: "flex-start"
latest_feature_date: "2025-03-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup"
  - "https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuAsyncClient"
  - "https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuClient"
keywords:
  - "flex"
  - "start"
  - "flexible"
  - "tpu"
  - "consumption"
  - "option"
  - "dynamically"
  - "provisions"
---

# Flex-start

Product: Cloud TPU
Coverage: MEDIUM

## Step 02 Summary

Flex-start is a flexible Cloud TPU consumption option that dynamically provisions TPUs for up to seven days without long-term reservations.

## Extended Definition

Flex-start is a flexible Cloud TPU consumption option that dynamically provisions TPUs for up to seven days without long-term reservations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup](https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup)
- [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuAsyncClient](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuAsyncClient)
- [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuClient](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuClient)

## Supporting Pages

### About TPUs in GKE \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup](https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- TPU consumption To optimize resource utilization and cost while balancing workload performance, GKE supports the following TPU consumption options: Flex-start: to provision Flex-start VMs for up to seven days, with GKE automatically allocating the hardware on a best-effort basis based on availability.
- On-demand is the most flexible consumption option; however, there is no guarantee that enough on-demand resources will be available to satisfy your request.
- To choose the consumption option that meets your workload requirements, see About accelerator consumption options for AI/ML workloads in GKE .
- For more information, see About GPU, TPU, and H4D provisioning with flex-start provisioning mode .

### "Class TpuAsyncClient (1.26.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuAsyncClient](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuAsyncClient)
- Source ID: `site-python-reference`
- Final score: 63
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import tpu v1 async def sample start node(): Create a client client = tpu v1.TpuAsyncClient() Initialize request argument(s) request = tpu v1.StartNodeRequest( ) Make the request operation = client. start node (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.tpu v1.types.StartNodeRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import tpu v1 async def sample create node(): Create a client client = tpu v1.TpuAsyncClient() Initialize request argument(s) node = tpu v1.Node() node.accelerator type = "accelerator type value" node.tensorflow version = "tensorflow version value" request = tpu v1.CreateNodeRequest( parent="parent value", node=node, ) Make the request operation = client. create node (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.tpu v1.types.CreateNodeRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import tpu v1 async def sample delete node(): Create a client client = tpu v1.TpuAsyncClient() Initialize request argument(s) request = tpu v1.DeleteNodeRequest( name="name value", ) Make the request operation = client. delete node (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.tpu v1.types.DeleteNodeRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import tpu v1 async def sample list accelerator types(): Create a client client = tpu v1.TpuAsyncClient() Initialize request argument(s) request = tpu v1.ListAcceleratorTypesRequest( parent="parent value", ) Make the request page result = client. list accelerator types (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.tpu v1.types.ListAcceleratorTypesRequest , dict]] The request object.

### "Class TpuClient (1.26.0) \_|\_ Python client libraries \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuClient](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuClient)
- Source ID: `site-python-reference`
- Final score: 63
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import tpu v1 def sample start node(): Create a client client = tpu v1.TpuClient() Initialize request argument(s) request = tpu v1.StartNodeRequest( ) Make the request operation = client. start node (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.tpu v1.types.StartNodeRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import tpu v1 def sample create node(): Create a client client = tpu v1.TpuClient() Initialize request argument(s) node = tpu v1.Node() node.accelerator type = "accelerator type value" node.tensorflow version = "tensorflow version value" request = tpu v1.CreateNodeRequest( parent="parent value", node=node, ) Make the request operation = client. create node (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.tpu v1.types.CreateNodeRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import tpu v1 def sample list accelerator types(): Create a client client = tpu v1.TpuClient() Initialize request argument(s) request = tpu v1.ListAcceleratorTypesRequest( parent="parent value", ) Make the request page result = client. list accelerator types (request=request) Handle the response for response in page result: print(response) Parameters Name Description request Union[ google.cloud.tpu v1.types.ListAcceleratorTypesRequest , dict] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import tpu v1 def sample delete node(): Create a client client = tpu v1.TpuClient() Initialize request argument(s) request = tpu v1.DeleteNodeRequest( name="name value", ) Make the request operation = client. delete node (request=request) print("Waiting for operation to complete...") response = operation.result() Handle the response print(response) Parameters Name Description request Union[ google.cloud.tpu v1.types.DeleteNodeRequest , dict] The request object.

