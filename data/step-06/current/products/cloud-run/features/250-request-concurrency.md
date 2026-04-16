---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.597Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "250-request concurrency"
feature_slug: "250-request-concurrency"
latest_feature_date: "2020-12-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/run/docs/container-contract"
  - "https://docs.cloud.google.com/run/docs/reference/container-contract"
  - "https://docs.cloud.google.com/run/docs/deploying"
keywords:
  - "concurrency"
  - "process"
  - "instances"
  - "request"
  - "container"
---

# 250-request concurrency

Product: Cloud Run
Coverage: MEDIUM

## Step 02 Summary

Cloud Run container instances can process up to 250 concurrent requests.

## Extended Definition

Cloud Run container instances can process up to 250 concurrent requests.

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
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Typical uses of memory include: Code loaded into memory to run the service Writing to the file system Extra processes running in the container such as an nginx server In-memory caching systems such as the PHP OpCache Per request memory usage Shared in-memory volumes GPU You can configure a container in a Cloud Run instance to access a GPU.
- Container requirements When deploying containers to Cloud Run, the following requirements must be met: Container deployed to services must listen for requests on the correct port A Cloud Run service starts Cloud Run instances to handle incoming requests.
- A request waiting for an instance will be kept pending in a queue as follows: Requests will pend for up to 3.5 times average startup time of container instances of this service, or 10 seconds, whichever is greater.
- Processing a request For Cloud Run services, CPU is always allocated to all containers including sidecars within an instance as long as the Cloud Run revision is processing at least one request.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- Source ID: `site-docs-root`
- Final score: 169
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Typical uses of memory include: Code loaded into memory to run the service Writing to the file system Extra processes running in the container such as an nginx server In-memory caching systems such as the PHP OpCache Per request memory usage Shared in-memory volumes GPU You can configure a container in a Cloud Run instance to access a GPU.
- Container requirements When deploying containers to Cloud Run, the following requirements must be met: Container deployed to services must listen for requests on the correct port A Cloud Run service starts Cloud Run instances to handle incoming requests.
- A request waiting for an instance will be kept pending in a queue as follows: Requests will pend for up to 3.5 times average startup time of container instances of this service, or 10 seconds, whichever is greater.
- Processing a request For Cloud Run services, CPU is always allocated to all containers including sidecars within an instance as long as the Cloud Run revision is processing at least one request.

### Deploying container images to Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying)
- Source ID: `site-docs-reference-required-3`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Click Containers, Networking, Security to set other optional settings in the appropriate tabs: Concurrency Container configuration CPU limits Memory limits Request timeout Secrets Environment variables Execution environment HTTP/2 Service accounts Cloud SQL connections VPC connection When you are finished configuring your service, click Create to deploy the image to Cloud Run and wait for the deployment to finish.
- Add the following to a google cloud run v2 service resource in your Terraform configuration: resource "google cloud run v2 service" "default" { name = " SERVICE " location = " REGION " ingress = "INGRESS TRAFFIC ALL" template { containers { name = " INGRESS CONTAINER NAME " ports { container port = CONTAINER PORT } image = " INGRESS IMAGE " depends on = [ " SIDECAR CONTAINER NAME " ] } containers { name = " SIDECAR CONTAINER NAME " image = " SIDECAR IMAGE " } } } The CONTAINER PORT represents the port where the ingress container listens for incoming requests.
- Deploying multiple containers to a service (sidecars) In a Cloud Run deployment with sidecars, there is one ingress container that handles all incoming HTTPS requests at the container PORT you specify, and there are one or more sidecar containers.
- In a service with multiple containers, only one container can be configured as the ingress container that handles all incoming requests, and this must be the container for which a containerPort is configured.

