---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:07:58.609Z"
product_name: "Cloud TPU"
product_slug: "cloud-tpu"
feature_name: "Flex-start"
feature_slug: "flex-start"
latest_feature_date: "2025-03-31"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup"
  - "https://docs.cloud.google.com/tpu/docs/release-notes"
  - "https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuAsyncClient"
keywords:
  - "flex"
  - "start"
  - "is"
  - "flexible"
  - "tpu"
  - "consumption"
  - "option"
  - "that"
---

# Flex-start

Product: Cloud TPU
Coverage: LOW

## Step 02 Summary

Flex-start is a flexible Cloud TPU consumption option that dynamically provisions TPUs for up to seven days without long-term reservations.

## Extended Definition

Flex-start is a flexible Cloud TPU consumption option that dynamically provisions TPUs for up to seven days without long-term reservations.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup](https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup)
- [https://docs.cloud.google.com/tpu/docs/release-notes](https://docs.cloud.google.com/tpu/docs/release-notes)
- [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuAsyncClient](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuAsyncClient)

## Supporting Pages

### About TPUs in GKE \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup](https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- TPU consumption To optimize resource utilization and cost while balancing workload performance, GKE supports the following TPU consumption options: Flex-start: to provision Flex-start VMs for up to seven days, with GKE automatically allocating the hardware on a best-effort basis based on availability.
- On-demand is the most flexible consumption option; however, there is no guarantee that enough on-demand resources will be available to satisfy your request.
- You can configure collection scheduling in the following scenarios: When creating a TPU slice node pool in GKE Standard When deploying workloads on GKE Autopilot When creating a cluster that enables node auto-provisioning What's next To learn how to set up Cloud TPU in GKE, see the following pages: Plan TPUs in GKE to start your TPU setup Deploy TPU workloads in GKE Autopilot Deploy TPU workloads in GKE Standard Learn about best practices for using Cloud TPU for your ML tasks Video: Build large-scale machine learning on Cloud TPU with GKE Serve Large Language Models with KubeRay on TPUs Learn about Sandboxing GPU workloads with GKE Sandbox Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- For more information, see About GPU, TPU, and H4D provisioning with flex-start provisioning mode .

### Cloud TPU release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/release-notes](https://docs.cloud.google.com/tpu/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: N/A

Evidence snippets:
- Flex-start is a flexible and cost-effective consumption option for AI workloads.
- Flex-start enables you to dynamically provision TPUs for up to 7 days using the queued resources API, without long-term reservations.
- March 31, 2025 Feature Flex-start for Cloud TPU , powered by Dynamic Workload Scheduler , is available in Preview .
- We used Trillium TPUs to train the new Gemini 2.0, Google's most capable AI model yet, and now enterprises and startups alike can take advantage of the same powerful, efficient, and sustainable infrastructure.

### "Class TpuAsyncClient (1.26.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuAsyncClient](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.TpuAsyncClient)
- Source ID: `site-python-reference`
- Final score: 156
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import tpu v1 async def sample start node(): Create a client client = tpu v1.TpuAsyncClient() Initialize request argument(s) request = tpu v1.StartNodeRequest( ) Make the request operation = client. start node (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.tpu v1.types.StartNodeRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import tpu v1 async def sample create node(): Create a client client = tpu v1.TpuAsyncClient() Initialize request argument(s) node = tpu v1.Node() node.accelerator type = "accelerator type value" node.tensorflow version = "tensorflow version value" request = tpu v1.CreateNodeRequest( parent="parent value", node=node, ) Make the request operation = client. create node (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.tpu v1.types.CreateNodeRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import tpu v1 async def sample delete node(): Create a client client = tpu v1.TpuAsyncClient() Initialize request argument(s) request = tpu v1.DeleteNodeRequest( name="name value", ) Make the request operation = client. delete node (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.tpu v1.types.DeleteNodeRequest , dict]] The request object.
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import tpu v1 async def sample list accelerator types(): Create a client client = tpu v1.TpuAsyncClient() Initialize request argument(s) request = tpu v1.ListAcceleratorTypesRequest( parent="parent value", ) Make the request page result = client. list accelerator types (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.tpu v1.types.ListAcceleratorTypesRequest , dict]] The request object.

