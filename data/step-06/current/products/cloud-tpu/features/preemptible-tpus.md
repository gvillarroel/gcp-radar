---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:27.298Z"
product_name: "Cloud TPU"
product_slug: "cloud-tpu"
feature_name: "Preemptible TPUs"
feature_slug: "preemptible-tpus"
latest_feature_date: "2018-06-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/tpu/docs/ctpu-reference"
  - "https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup"
  - "https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListNodesAsyncPager"
keywords:
  - "preemptible"
  - "tpus"
  - "lower"
  - "cost"
  - "tpu"
  - "nodes"
  - "can"
  - "terminated"
---

# Preemptible TPUs

Product: Cloud TPU
Coverage: MEDIUM

## Step 02 Summary

Preemptible TPUs are lower-cost Cloud TPU nodes that can be terminated when Google Cloud reclaims capacity.

## Extended Definition

Preemptible TPUs are lower-cost Cloud TPU nodes that can be terminated when Google Cloud reclaims capacity.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/tpu/docs/ctpu-reference](https://docs.cloud.google.com/tpu/docs/ctpu-reference)
- [https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup](https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup)
- [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListNodesAsyncPager](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListNodesAsyncPager)

## Supporting Pages

### About TPUs in GKE \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup](https://docs.cloud.google.com/tpu/docs/kubernetes-engine-setup)
- Source ID: `site-docs-root`
- Final score: 89
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Workloads that don't use TPUs are run on non-TPU nodes, freeing up compute on TPU slice nodes for code that uses TPUs.
- You can configure collection scheduling in the following scenarios: When creating a TPU slice node pool in GKE Standard When deploying workloads on GKE Autopilot When creating a cluster that enables node auto-provisioning What's next To learn how to set up Cloud TPU in GKE, see the following pages: Plan TPUs in GKE to start your TPU setup Deploy TPU workloads in GKE Autopilot Deploy TPU workloads in GKE Standard Learn about best practices for using Cloud TPU for your ML tasks Video: Build large-scale machine learning on Cloud TPU with GKE Serve Large Language Models with KubeRay on TPUs Learn about Sandboxing GPU workloads with GKE Sandbox Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- TPU consumption To optimize resource utilization and cost while balancing workload performance, GKE supports the following TPU consumption options: Flex-start: to provision Flex-start VMs for up to seven days, with GKE automatically allocating the hardware on a best-effort basis based on availability.
- Cloud TPU node pool autoscaling GKE scales automatically created or manually created Cloud TPU node pools that use the cluster autoscaler in one of the following ways: Single-host TPU slice node pool : GKE adds or removes TPU nodes in the existing node pool.

### CTPU Reference \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/tpu/docs/ctpu-reference](https://docs.cloud.google.com/tpu/docs/ctpu-reference)
- Source ID: `site-docs-reference`
- Final score: 72
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Compute Engine service can exit the VM instance at any time. (default = non-preemptible) --print-welcome Always print the welcome message. --project Override the GCP project name to use when allocating VMs and TPUs.
- A preemptible Cloud TPU costs less per hour than a non-preemptible one.
- A preemptible VM costs less per hour than a non-preemptible VM.
- A full list of machine types is available on the Cloud Machine Types page. (default = n1-standard-2) --name Override the name to use for VMs and Cloud TPU. (default = your username) --noconf Skip confirmation. --preemptible Create a preemptible Cloud TPU node.

### "Class ListNodesAsyncPager (1.26.0) \_|\_ Python client libraries \_|\_ Google\

- URL: [https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListNodesAsyncPager](https://docs.cloud.google.com/python/docs/reference/tpu/latest/google.cloud.tpu_v1.services.tpu.pagers.ListNodesAsyncPager)
- Source ID: `site-python-reference`
- Final score: 62
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Parameters Name Description method Callable The method that was originally called, and which instantiated this pager. request google.cloud.tpu v1.types.ListNodesRequest The initial request object. response google.cloud.tpu v1.types.ListNodesResponse The initial response object. retry google.api core.retry.AsyncRetry Designation of what errors, if any, should be retried. timeout float The timeout for this request. metadata Sequence[Tuple[str, Union[str, bytes]]] Key/value pairs which should be sent along with the request as metadata.
- 1.26.0 (latest) 1.25.0 1.24.0 1.23.2 1.22.0 1.21.0 1.20.0 1.19.1 1.18.5 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.2 1.10.1 1.9.0 1.8.0 1.7.2 1.6.0 1.5.2 1.4.1 1.3.4 1.2.1 1.1.0 1.0.2 0.2.2 0.1.0 ListNodesAsyncPager ( method : typing .
- Home Documentation Developer tools Python Client libraries Send feedback Class ListNodesAsyncPager (1.26.0) Stay organized with collections Save and categorize content based on your preferences.
- If there are more pages, the aiter method will make additional ListNodes requests and continue to iterate through the nodes field on the corresponding responses.

