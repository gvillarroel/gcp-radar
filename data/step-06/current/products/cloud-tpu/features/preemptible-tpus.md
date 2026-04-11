---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:07:58.656Z"
product_name: "Cloud TPU"
product_slug: "cloud-tpu"
feature_name: "Preemptible TPUs"
feature_slug: "preemptible-tpus"
latest_feature_date: "2018-06-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/tpu/docs/release-notes"
  - "https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup"
  - "https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuAsyncClient"
keywords:
  - "preemptible"
  - "tpus"
  - "are"
  - "lower"
  - "cost"
  - "tpu"
  - "nodes"
  - "that"
---

# Preemptible TPUs

Product: Cloud TPU
Coverage: LOW

## Step 02 Summary

Preemptible TPUs are lower-cost Cloud TPU nodes that can be terminated when Google Cloud reclaims capacity.

## Extended Definition

Preemptible TPUs are lower-cost Cloud TPU nodes that can be terminated when Google Cloud reclaims capacity.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/tpu/docs/release-notes](https://docs.cloud.google.com/tpu/docs/release-notes)
- [https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup](https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup)
- [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuAsyncClient](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuAsyncClient)

## Supporting Pages

### Cloud TPU release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/release-notes](https://docs.cloud.google.com/tpu/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- A preemptible TPU is a Cloud TPU node that you can create and run at a much lower price than normal nodes.
- A preemptible TPU is a Cloud TPU node that you can create and run at a much lower price than normal nodes.
- June 18, 2018 Feature Preemptible TPUs are now available in Beta .
- Change Preemptible TPUs are now GA (generally available).

### About TPUs in GKE \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup](https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup)
- Source ID: `site-docs-root`
- Final score: 146
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Workloads that don't use TPUs are run on non-TPU nodes, freeing up compute on TPU slice nodes for code that uses TPUs.
- You can configure collection scheduling in the following scenarios: When creating a TPU slice node pool in GKE Standard When deploying workloads on GKE Autopilot When creating a cluster that enables node auto-provisioning What's next To learn how to set up Cloud TPU in GKE, see the following pages: Plan TPUs in GKE to start your TPU setup Deploy TPU workloads in GKE Autopilot Deploy TPU workloads in GKE Standard Learn about best practices for using Cloud TPU for your ML tasks Video: Build large-scale machine learning on Cloud TPU with GKE Serve Large Language Models with KubeRay on TPUs Learn about Sandboxing GPU workloads with GKE Sandbox Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- TPUs are Google's custom-developed, application-specific integrated circuits (ASICs) for accelerating ML workloads that use frameworks such as TensorFlow , PyTorch , and JAX .
- TPU consumption To optimize resource utilization and cost while balancing workload performance, GKE supports the following TPU consumption options: Flex-start: to provision Flex-start VMs for up to seven days, with GKE automatically allocating the hardware on a best-effort basis based on availability.

### "Class TpuAsyncClient (1.26.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuAsyncClient](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuAsyncClient)
- Source ID: `site-python-reference`
- Final score: 136
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import tpu v1 async def sample list nodes(): Create a client client = tpu v1.TpuAsyncClient() Initialize request argument(s) request = tpu v1.ListNodesRequest( parent="parent value", ) Make the request page result = client. list nodes (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.tpu v1.types.ListNodesRequest , dict]] The request object.
- These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment. transport Optional[Union[str,TpuTransport,Callable[..., TpuTransport]]] The transport to use, or a Callable that constructs and returns a new transport to use.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import tpu v1 async def sample create node(): Create a client client = tpu v1.TpuAsyncClient() Initialize request argument(s) node = tpu v1.Node() node.accelerator type = "accelerator type value" node.tensorflow version = "tensorflow version value" request = tpu v1.CreateNodeRequest( parent="parent value", node=node, ) Make the request operation = client. create node (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.tpu v1.types.CreateNodeRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import tpu v1 async def sample list accelerator types(): Create a client client = tpu v1.TpuAsyncClient() Initialize request argument(s) request = tpu v1.ListAcceleratorTypesRequest( parent="parent value", ) Make the request page result = client. list accelerator types (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.tpu v1.types.ListAcceleratorTypesRequest , dict]] The request object.

