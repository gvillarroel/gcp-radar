---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.516Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "CPU always allocated"
feature_slug: "cpu-always-allocated"
latest_feature_date: "2021-09-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/run/docs/container-contract"
  - "https://docs.cloud.google.com/run/docs/reference/container-contract"
  - "https://docs.cloud.google.com/run/docs/deploying"
keywords:
  - "allocated"
  - "assigned"
  - "always"
  - "entire"
  - "keep"
  - "lets"
---

# CPU always allocated

Product: Cloud Run
Coverage: MEDIUM

## Step 02 Summary

CPU always allocated lets Cloud Run services keep CPU assigned for the entire lifetime of container instances.

## Extended Definition

CPU always allocated lets Cloud Run services keep CPU assigned for the entire lifetime of container instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying)

## Supporting Pages

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- Processing a request For Cloud Run services, CPU is always allocated to all containers including sidecars within an instance as long as the Cloud Run revision is processing at least one request.
- During this period, container instances are allocated CPU for their entire lifecycle and are billed.
- The following sections describe resources for your container instance: CPU Memory GPU Concurrency CPU Each Cloud Run container in an instance by default gets allocated the vCPU that has been configured (1 by default).
- You cannot specify a size limit for this files system, so you can potentially use up all the memory allocated to your instance by writing to the in-memory file system, which will crash the instance.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- Source ID: `site-docs-root`
- Final score: 85
- Re-rank relevance: N/A

Evidence snippets:
- Processing a request For Cloud Run services, CPU is always allocated to all containers including sidecars within an instance as long as the Cloud Run revision is processing at least one request.
- During this period, container instances are allocated CPU for their entire lifecycle and are billed.
- The following sections describe resources for your container instance: CPU Memory GPU Concurrency CPU Each Cloud Run container in an instance by default gets allocated the vCPU that has been configured (1 by default).
- You cannot specify a size limit for this files system, so you can potentially use up all the memory allocated to your instance by writing to the in-memory file system, which will crash the instance.

### Deploying container images to Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying)
- Source ID: `site-docs-reference-required-3`
- Final score: 73
- Re-rank relevance: N/A

Evidence snippets:
- If you use request-based billing (the Cloud Run default), sidecars are allocated CPU in only these scenarios: The instance is processing at least one request.
- If you deploy from a container image tag, it will be resolved to a digest and the revision will always serve this particular digest.
- You can omit this parameter entirely, but you will be prompted for the service name if you omit it.
- You can omit this parameter entirely, but you will be prompted for the service name if you omit it.

