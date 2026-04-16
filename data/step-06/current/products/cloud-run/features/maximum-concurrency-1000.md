---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.524Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Maximum concurrency 1000"
feature_slug: "maximum-concurrency-1000"
latest_feature_date: "2021-07-26"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/run/docs/container-contract"
  - "https://docs.cloud.google.com/run/docs/reference/container-contract"
  - "https://docs.cloud.google.com/run/docs/configuring"
keywords:
  - "1000"
  - "concurrency"
  - "process"
  - "maximum"
  - "instance"
  - "container"
  - "lets"
---

# Maximum concurrency 1000

Product: Cloud Run
Coverage: MEDIUM

## Step 02 Summary

Maximum concurrency 1000 lets a Cloud Run container instance process up to 1,000 concurrent requests.

## Extended Definition

Maximum concurrency 1000 lets a Cloud Run container instance process up to 1,000 concurrent requests.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring)

## Supporting Pages

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Typical uses of memory include: Code loaded into memory to run the service Writing to the file system Extra processes running in the container such as an nginx server In-memory caching systems such as the PHP OpCache Per request memory usage Shared in-memory volumes GPU You can configure a container in a Cloud Run instance to access a GPU.
- The following sections describe resources for your container instance: CPU Memory GPU Concurrency CPU Each Cloud Run container in an instance by default gets allocated the vCPU that has been configured (1 by default).
- Processing a request For Cloud Run services, CPU is always allocated to all containers including sidecars within an instance as long as the Cloud Run revision is processing at least one request.
- Concurrency (services) For Cloud Run services, each Cloud Run instance by default is set to multiple concurrency , where the ingress container can receive more than one request at the same time.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- Source ID: `site-docs-root`
- Final score: 160
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Typical uses of memory include: Code loaded into memory to run the service Writing to the file system Extra processes running in the container such as an nginx server In-memory caching systems such as the PHP OpCache Per request memory usage Shared in-memory volumes GPU You can configure a container in a Cloud Run instance to access a GPU.
- The following sections describe resources for your container instance: CPU Memory GPU Concurrency CPU Each Cloud Run container in an instance by default gets allocated the vCPU that has been configured (1 by default).
- Processing a request For Cloud Run services, CPU is always allocated to all containers including sidecars within an instance as long as the Cloud Run revision is processing at least one request.
- Concurrency (services) For Cloud Run services, each Cloud Run instance by default is set to multiple concurrency , where the ingress container can receive more than one request at the same time.

### Configure Cloud Run services \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring)
- Source ID: `site-docs-reference-2`
- Final score: 151
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- B Maximum concurrency You can configure the maximum concurrent requests per instance to specify the maximum number of requests that can be processed simultaneously by a given instance.
- If you need to change the default number of container instances that are kept warm, ready to receive requests, you can set revision-level maximum instances and minimum instances .
- You can also configure timeouts, maximum concurrency, the execution environment, revision scaling, startup CPU boost, or connect to a Cloud SQL instance.
- The following table explains the features for this section: Section Feature Description A Service account The Cloud Run service identity is the service account that is used as the authenticated account for accessing Google Cloud APIs from your Cloud Run instance container.

