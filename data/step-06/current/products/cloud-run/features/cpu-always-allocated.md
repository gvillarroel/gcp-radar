---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.917Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "CPU always allocated"
feature_slug: "cpu-always-allocated"
latest_feature_date: "2021-09-13"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/run/docs/container-contract"
  - "https://docs.cloud.google.com/run/docs/reference/container-contract"
keywords:
  - "cpu"
  - "always"
  - "allocated"
  - "lets"
  - "run"
  - "services"
  - "keep"
  - "assigned"
---

# CPU always allocated

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

CPU always allocated lets Cloud Run services keep CPU assigned for the entire lifetime of container instances.

## Extended Definition

CPU always allocated lets Cloud Run services keep CPU assigned for the entire lifetime of container instances.

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
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- July 15, 2024 Feature Compute flexible committed use discounts are now available for Cloud Run services with CPU always allocated , and Cloud Run jobs.
- Instance-based billing, previously called CPU always allocated , charges your Cloud Run instances for the entire lifecycle of instances, even when there are no incoming requests.
- December 14, 2021 Feature The ability to configure Cloud Run services to have CPU allocated for the entire lifetime of container instances is now at general availability (GA).
- September 13, 2021 Feature You can now configure Cloud Run services to have CPU allocated for the entire lifetime of container instances.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Processing a request For Cloud Run services, CPU is always allocated to all containers including sidecars within an instance as long as the Cloud Run revision is processing at least one request.
- The following sections describe resources for your container instance: CPU Memory GPU Concurrency CPU Each Cloud Run container in an instance by default gets allocated the vCPU that has been configured (1 by default).
- Regardless of its state, Cloud Run always allocates CPU to to all containers, including sidecars within a worker pool instance.
- For Cloud Run services, CPU allocation depends on the selected billing.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- Source ID: `site-docs-root`
- Final score: 150
- Re-rank relevance: N/A

Evidence snippets:
- Processing a request For Cloud Run services, CPU is always allocated to all containers including sidecars within an instance as long as the Cloud Run revision is processing at least one request.
- The following sections describe resources for your container instance: CPU Memory GPU Concurrency CPU Each Cloud Run container in an instance by default gets allocated the vCPU that has been configured (1 by default).
- Regardless of its state, Cloud Run always allocates CPU to to all containers, including sidecars within a worker pool instance.
- For Cloud Run services, CPU allocation depends on the selected billing.

