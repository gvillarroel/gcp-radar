---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.454Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Multiple containers for jobs"
feature_slug: "multiple-containers-for-jobs"
latest_feature_date: "2025-04-02"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/run/docs/deploying"
  - "https://docs.cloud.google.com/run/docs/reference/container-contract"
  - "https://docs.cloud.google.com/run/docs/container-contract"
keywords:
  - "sidecars"
  - "multiple"
  - "including"
  - "containers"
  - "single"
  - "deploying"
  - "jobs"
---

# Multiple containers for jobs

Product: Cloud Run
Coverage: MEDIUM

## Step 02 Summary

Cloud Run jobs support deploying multiple containers, including sidecars, in a single job; Cloud Run jobs support deploying multiple containers, including sidecars, in a single job.

## Extended Definition

Cloud Run jobs support deploying multiple containers, including sidecars, in a single job; Cloud Run jobs support deploying multiple containers, including sidecars, in a single job.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying)
- [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)

## Supporting Pages

### Deploying container images to Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/deploying](https://docs.cloud.google.com/run/docs/deploying)
- Source ID: `site-docs-reference-required-3`
- Final score: 179
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Use cases Use cases for sidecars in a Cloud Run service include: Application monitoring, logging and tracing Using Nginx , Envoy or Apache2 as a proxy in front of your application container Adding authentication and authorization filters (for example, Open Policy Agent) Running outbound connection proxies such as the Alloy DB Auth proxy Deploying a service with sidecar containers You can deploy multiple sidecars to a Cloud Run service using the Google Cloud console, the Google Cloud CLI, YAML, or Terraform.
- Deploying multiple containers to a service (sidecars) In a Cloud Run deployment with sidecars, there is one ingress container that handles all incoming HTTPS requests at the container PORT you specify, and there are one or more sidecar containers.
- Exchanging file data between sidecars Multiple containers within a single instance can access a shared in-memory volume , which is accessible to each container using mount points that you create.
- To deploy multiple containers to a service, run the following command: gcloud run deploy SERVICE \ --container INGRESS CONTAINER NAME \ --image = ' INGRESS IMAGE ' \ --port = ' CONTAINER PORT ' \ --container SIDECAR CONTAINER NAME \ --image = ' SIDECAR IMAGE ' Replace the following: SERVICE : the name of the service you are deploying to.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Processing a request For Cloud Run services, CPU is always allocated to all containers including sidecars within an instance as long as the Cloud Run revision is processing at least one request.
- Regardless of its state, Cloud Run always allocates CPU to to all containers, including sidecars within a worker pool instance.
- Container requirements When deploying containers to Cloud Run, the following requirements must be met: Container deployed to services must listen for requests on the correct port A Cloud Run service starts Cloud Run instances to handle incoming requests.
- A Cloud Run instance always has one single ingress container that listens for requests, and optionally one or more sidecar containers.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Processing a request For Cloud Run services, CPU is always allocated to all containers including sidecars within an instance as long as the Cloud Run revision is processing at least one request.
- Regardless of its state, Cloud Run always allocates CPU to to all containers, including sidecars within a worker pool instance.
- Container requirements When deploying containers to Cloud Run, the following requirements must be met: Container deployed to services must listen for requests on the correct port A Cloud Run service starts Cloud Run instances to handle incoming requests.
- A Cloud Run instance always has one single ingress container that listens for requests, and optionally one or more sidecar containers.

