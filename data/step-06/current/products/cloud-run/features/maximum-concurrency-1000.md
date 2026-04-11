---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.920Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Maximum concurrency 1000"
feature_slug: "maximum-concurrency-1000"
latest_feature_date: "2021-07-26"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/container-contract"
  - "https://docs.cloud.google.com/run/docs/reference/container-contract"
  - "https://docs.cloud.google.com/run/docs/release-notes"
keywords:
  - "maximum"
  - "concurrency"
  - "1000"
  - "lets"
  - "run"
  - "container"
  - "instance"
  - "process"
---

# Maximum concurrency 1000

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Maximum concurrency 1000 lets a Cloud Run container instance process up to 1,000 concurrent requests.

## Extended Definition

Maximum concurrency 1000 lets a Cloud Run container instance process up to 1,000 concurrent requests.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)

## Supporting Pages

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Typical uses of memory include: Code loaded into memory to run the service Writing to the file system Extra processes running in the container such as an nginx server In-memory caching systems such as the PHP OpCache Per request memory usage Shared in-memory volumes GPU You can configure a container in a Cloud Run instance to access a GPU.
- The following sections describe resources for your container instance: CPU Memory GPU Concurrency CPU Each Cloud Run container in an instance by default gets allocated the vCPU that has been configured (1 by default).
- Processing a request For Cloud Run services, CPU is always allocated to all containers including sidecars within an instance as long as the Cloud Run revision is processing at least one request.
- Concurrency (services) For Cloud Run services, each Cloud Run instance by default is set to multiple concurrency , where the ingress container can receive more than one request at the same time.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- Source ID: `site-docs-root`
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- Typical uses of memory include: Code loaded into memory to run the service Writing to the file system Extra processes running in the container such as an nginx server In-memory caching systems such as the PHP OpCache Per request memory usage Shared in-memory volumes GPU You can configure a container in a Cloud Run instance to access a GPU.
- The following sections describe resources for your container instance: CPU Memory GPU Concurrency CPU Each Cloud Run container in an instance by default gets allocated the vCPU that has been configured (1 by default).
- Processing a request For Cloud Run services, CPU is always allocated to all containers including sidecars within an instance as long as the Cloud Run revision is processing at least one request.
- Concurrency (services) For Cloud Run services, each Cloud Run instance by default is set to multiple concurrency , where the ingress container can receive more than one request at the same time.

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- December 14, 2020 Feature Cloud Run container instances can now process up to 250 concurrent requests , see Configuring maximum concurrency .
- July 26, 2021 Feature Cloud Run container instances can now process up to 1,000 concurrent requests , see Setting maximum concurrency .
- The two billing settings are: Request-based billing (default), previously called CPU is only allocated during request processing , only charges your Cloud Run instances during request processing, container startup, and container shutdown.
- May 12, 2021 Feature Cloud Run now provides UI, command line, and YAML support for referencing Secret Manager Secrets . (Available in public preview.) Feature Customer managed encryption keys are now available for use with Cloud Run. (Available in public preview.) Feature Recommender now provides recommendations for securing Cloud Run services by creating dedicated service accounts. (Available in public preview.) Feature Committed use discounts are now available for Cloud Run . (Available in public preview.) Feature You can now use Binary authorization with Cloud Run to enforce policy-based deployment of Cloud Run services. (Available in public preview.) May 03, 2021 Feature You can now use Identity-aware Proxy with Cloud Run to use identity and context to guard access to your applications. (Available in public preview.) Change By default, the memory allocated to each container instance of a new service is 512MiB.

