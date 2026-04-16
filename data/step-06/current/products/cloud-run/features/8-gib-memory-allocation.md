---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.593Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "8 GiB memory allocation"
feature_slug: "8-gib-memory-allocation"
latest_feature_date: "2020-12-18"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/run/docs/container-contract"
  - "https://docs.cloud.google.com/run/docs/reference/container-contract"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2"
keywords:
  - "allocate"
  - "allocation"
  - "memory"
---

# 8 GiB memory allocation

Product: Cloud Run
Coverage: MEDIUM

## Step 02 Summary

Cloud Run services can allocate up to 8 GiB of memory per service instance.

## Extended Definition

Cloud Run services can allocate up to 8 GiB of memory per service instance.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2)

## Supporting Pages

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- The following sections describe resources for your container instance: CPU Memory GPU Concurrency CPU Each Cloud Run container in an instance by default gets allocated the vCPU that has been configured (1 by default).
- You cannot specify a size limit for this files system, so you can potentially use up all the memory allocated to your instance by writing to the in-memory file system, which will crash the instance.
- Memory Each Cloud Run container by default gets allocated the memory that has been configured , (512 MiB by default).
- 7 SIGBUS Task attempted to access memory outside its allocated boundaries.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- Source ID: `site-docs-root`
- Final score: 82
- Re-rank relevance: N/A

Evidence snippets:
- The following sections describe resources for your container instance: CPU Memory GPU Concurrency CPU Each Cloud Run container in an instance by default gets allocated the vCPU that has been configured (1 by default).
- You cannot specify a size limit for this files system, so you can potentially use up all the memory allocated to your instance by writing to the in-memory file system, which will crash the instance.
- Memory Each Cloud Run container by default gets allocated the memory that has been configured , (512 MiB by default).
- 7 SIGBUS Task attempted to access memory outside its allocated boundaries.

### "Package com.google.cloud.run.v2 (0.88.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2)
- Source ID: `site-java-reference`
- Final score: 50
- Re-rank relevance: N/A

Evidence snippets:
- Allocations can be done to a specific Revision name, or pointing to the latest Ready Revision. com. google. cloud. run. v2.
- Allocations can be done to a specific Revision name, or pointing to the latest Ready Revision. com. google. cloud. run. v2.
- Allocations can be done to a specific Revision name, or pointing to the latest Ready Revision. com. google. cloud. run. v2.
- Allocations can be done to a specific Revision name, or pointing to the latest Ready Revision. com. google. cloud. run. v2.

