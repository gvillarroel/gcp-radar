---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.924Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "8 GiB memory allocation"
feature_slug: "8-gib-memory-allocation"
latest_feature_date: "2020-12-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/run/docs/container-contract"
  - "https://docs.cloud.google.com/run/docs/reference/container-contract"
keywords:
  - "gib"
  - "memory"
  - "allocation"
  - "run"
  - "services"
  - "can"
  - "allocate"
  - "up"
---

# 8 GiB memory allocation

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run services can allocate up to 8 GiB of memory per service instance.

## Extended Definition

Cloud Run services can allocate up to 8 GiB of memory per service instance.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)

## Supporting Pages

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 190
- Re-rank relevance: N/A

Evidence snippets:
- See Cloud Code for VS Code and Cloud Code for IntelliJ August 18, 2020 Feature You can now allocate up to 4GiB of memory to your Cloud Run (fully managed) services.
- April 22, 2022 Feature You can now allocate up to 32 GiB of memory and up to 8 CPU to your Cloud Run services.
- Feature You can now allocate up to 16GiB of memory to your Cloud Run services.
- Feature You can now allocate up to 8GiB of memory to your Cloud Run services.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- You cannot specify a size limit for this files system, so you can potentially use up all the memory allocated to your instance by writing to the in-memory file system, which will crash the instance.
- 1 Environment variables for worker pools Cloud Run sets the following environment variables for worker pools: Name Description Example CLOUD RUN WORKER POOL The name of the running Cloud Run worker pool. hello-world CLOUD RUN WORKER POOL REVISION The name of the running Cloud Run worker pool revision. hello-world.1 Request and response header requirements (services) For services, Cloud Run restricts header names to printable non-whitespace ASCII, and cannot contain colons.
- Typical uses of memory include: Code loaded into memory to run the service Writing to the file system Extra processes running in the container such as an nginx server In-memory caching systems such as the PHP OpCache Per request memory usage Shared in-memory volumes GPU You can configure a container in a Cloud Run instance to access a GPU.
- The following sections describe resources for your container instance: CPU Memory GPU Concurrency CPU Each Cloud Run container in an instance by default gets allocated the vCPU that has been configured (1 by default).

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- Source ID: `site-docs-root`
- Final score: 180
- Re-rank relevance: N/A

Evidence snippets:
- You cannot specify a size limit for this files system, so you can potentially use up all the memory allocated to your instance by writing to the in-memory file system, which will crash the instance.
- 1 Environment variables for worker pools Cloud Run sets the following environment variables for worker pools: Name Description Example CLOUD RUN WORKER POOL The name of the running Cloud Run worker pool. hello-world CLOUD RUN WORKER POOL REVISION The name of the running Cloud Run worker pool revision. hello-world.1 Request and response header requirements (services) For services, Cloud Run restricts header names to printable non-whitespace ASCII, and cannot contain colons.
- Typical uses of memory include: Code loaded into memory to run the service Writing to the file system Extra processes running in the container such as an nginx server In-memory caching systems such as the PHP OpCache Per request memory usage Shared in-memory volumes GPU You can configure a container in a Cloud Run instance to access a GPU.
- The following sections describe resources for your container instance: CPU Memory GPU Concurrency CPU Each Cloud Run container in an instance by default gets allocated the vCPU that has been configured (1 by default).

