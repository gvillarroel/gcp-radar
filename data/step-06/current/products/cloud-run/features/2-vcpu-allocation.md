---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.617Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "2 vCPU allocation"
feature_slug: "2-vcpu-allocation"
latest_feature_date: "2020-01-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/run/docs/container-contract"
  - "https://docs.cloud.google.com/run/docs/reference/container-contract"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.CancelExecutionRequest"
keywords:
  - "vcpus"
  - "vcpu"
  - "allocate"
  - "allocation"
---

# 2 vCPU allocation

Product: Cloud Run
Coverage: MEDIUM

## Step 02 Summary

Cloud Run services can allocate up to 2 vCPUs.

## Extended Definition

Cloud Run services can allocate up to 2 vCPUs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.CancelExecutionRequest](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.CancelExecutionRequest)

## Supporting Pages

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- The following sections describe resources for your container instance: CPU Memory GPU Concurrency CPU Each Cloud Run container in an instance by default gets allocated the vCPU that has been configured (1 by default).
- You cannot specify a size limit for this files system, so you can potentially use up all the memory allocated to your instance by writing to the in-memory file system, which will crash the instance.
- Processing a request For Cloud Run services, CPU is always allocated to all containers including sidecars within an instance as long as the Cloud Run revision is processing at least one request.
- A vCPU is implemented as an abstraction of underlying hardware to provide the approximate equivalent CPU time of a single hardware hyper-thread on variable CPU platforms.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- Source ID: `site-docs-root`
- Final score: 64
- Re-rank relevance: N/A

Evidence snippets:
- The following sections describe resources for your container instance: CPU Memory GPU Concurrency CPU Each Cloud Run container in an instance by default gets allocated the vCPU that has been configured (1 by default).
- You cannot specify a size limit for this files system, so you can potentially use up all the memory allocated to your instance by writing to the in-memory file system, which will crash the instance.
- Processing a request For Cloud Run services, CPU is always allocated to all containers including sidecars within an instance as long as the Cloud Run revision is processing at least one request.
- A vCPU is implemented as an abstraction of underlying hardware to provide the approximate equivalent CPU time of a single hardware hyper-thread on variable CPU platforms.

### "Class CancelExecutionRequest (0.88.0) \_|\_ Java client libraries \_|\_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.CancelExecutionRequest](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2.CancelExecutionRequest)
- Source ID: `site-java-reference`
- Final score: 38
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

