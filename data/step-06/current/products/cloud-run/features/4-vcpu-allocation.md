---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.602Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "4 vCPU allocation"
feature_slug: "4-vcpu-allocation"
latest_feature_date: "2020-10-12"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/run/docs/container-contract"
  - "https://docs.cloud.google.com/run/docs/reference/container-contract"
  - "https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.instances.InstancesAsyncClient"
keywords:
  - "vcpus"
  - "vcpu"
  - "allocate"
  - "allocation"
  - "instances"
---

# 4 vCPU allocation

Product: Cloud Run
Coverage: MEDIUM

## Step 02 Summary

Cloud Run service instances can allocate up to 4 vCPUs.

## Extended Definition

Cloud Run service instances can allocate up to 4 vCPUs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.instances.InstancesAsyncClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.instances.InstancesAsyncClient)

## Supporting Pages

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- The following sections describe resources for your container instance: CPU Memory GPU Concurrency CPU Each Cloud Run container in an instance by default gets allocated the vCPU that has been configured (1 by default).
- If you have configured a number of minimum instances , you must use instance-based billing so that CPU is allocated outside of requests .
- If you select request-based billing (default), CPU is allocated when instances are processing requests.
- During this period, container instances are allocated CPU for their entire lifecycle and are billed.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- Source ID: `site-docs-root`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- The following sections describe resources for your container instance: CPU Memory GPU Concurrency CPU Each Cloud Run container in an instance by default gets allocated the vCPU that has been configured (1 by default).
- If you have configured a number of minimum instances , you must use instance-based billing so that CPU is allocated outside of requests .
- If you select request-based billing (default), CPU is allocated when instances are processing requests.
- During this period, container instances are allocated CPU for their entire lifecycle and are billed.

### "Class InstancesAsyncClient (0.16.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.instances.InstancesAsyncClient](https://docs.cloud.google.com/python/docs/reference/run/latest/google.cloud.run_v2.services.instances.InstancesAsyncClient)
- Source ID: `site-python-reference`
- Final score: 72
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- It will require modifications to work: - It may require correct/in-range values for request initialization. - It may require specifying regional endpoints when creating the service client as shown in: https://googleapis.dev/python/google-api-core/latest/client options.html from google.cloud import run v2 async def sample list instances(): Create a client client = run v2 .
- These credentials identify the application to the service; if none are specified, the client will attempt to ascertain the credentials from the environment. transport Optional[Union[str,InstancesTransport,Callable[..., InstancesTransport]]] The transport to use, or a Callable that constructs and returns a new transport to use.
- ListInstancesRequest ( parent="parent value", ) Make the request page result = client. list instances (request=request) Handle the response async for response in page result: print(response) Parameters Name Description request Optional[Union[ google.cloud.run v2.types.ListInstancesRequest , dict]] The request object.
- If none is provided, then the first transport in the registry is used. instance path instance path ( project : str , location : str , instance : str ) - > str Returns a fully-qualified instance string. list instances list instances ( request : typing .

