---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.925Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "250-request concurrency"
feature_slug: "250-request-concurrency"
latest_feature_date: "2020-12-14"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/container-contract"
  - "https://docs.cloud.google.com/run/docs/reference/container-contract"
  - "https://docs.cloud.google.com/run/docs/release-notes"
keywords:
  - "250"
  - "request"
  - "concurrency"
  - "run"
  - "container"
  - "instances"
  - "can"
  - "process"
---

# 250-request concurrency

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run container instances can process up to 250 concurrent requests.

## Extended Definition

Cloud Run container instances can process up to 250 concurrent requests.

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
- Final score: 206
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Typical uses of memory include: Code loaded into memory to run the service Writing to the file system Extra processes running in the container such as an nginx server In-memory caching systems such as the PHP OpCache Per request memory usage Shared in-memory volumes GPU You can configure a container in a Cloud Run instance to access a GPU.
- Concurrency (services) For Cloud Run services, each Cloud Run instance by default is set to multiple concurrency , where the ingress container can receive more than one request at the same time.
- Container requirements When deploying containers to Cloud Run, the following requirements must be met: Container deployed to services must listen for requests on the correct port A Cloud Run service starts Cloud Run instances to handle incoming requests.
- For a Cloud Run service consisting of multi-container instances, you can specify the sequence in which the containers are started within the instance by configuring the container startup order .

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- Source ID: `site-docs-root`
- Final score: 206
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Typical uses of memory include: Code loaded into memory to run the service Writing to the file system Extra processes running in the container such as an nginx server In-memory caching systems such as the PHP OpCache Per request memory usage Shared in-memory volumes GPU You can configure a container in a Cloud Run instance to access a GPU.
- Concurrency (services) For Cloud Run services, each Cloud Run instance by default is set to multiple concurrency , where the ingress container can receive more than one request at the same time.
- Container requirements When deploying containers to Cloud Run, the following requirements must be met: Container deployed to services must listen for requests on the correct port A Cloud Run service starts Cloud Run instances to handle incoming requests.
- For a Cloud Run service consisting of multi-container instances, you can specify the sequence in which the containers are started within the instance by configuring the container startup order .

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- December 14, 2020 Feature Cloud Run container instances can now process up to 250 concurrent requests , see Configuring maximum concurrency .
- July 26, 2021 Feature Cloud Run container instances can now process up to 1,000 concurrent requests , see Setting maximum concurrency .
- The two billing settings are: Request-based billing (default), previously called CPU is only allocated during request processing , only charges your Cloud Run instances during request processing, container startup, and container shutdown.
- March 05, 2021 Feature You can now use VPC Service Controls with Cloud Run to set up a secure perimeter to guard against data exfiltration. (Available in public preview.) March 03, 2021 Feature Cloud Run reports a new Cloud Monitoring metric: Instance count , which counts the number of container instances that exist, broken down by state (active or idle).

