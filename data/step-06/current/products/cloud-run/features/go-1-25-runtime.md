---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.895Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Go 1.25 runtime"
feature_slug: "go-1-25-runtime"
latest_feature_date: "2025-08-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/run/docs/container-contract"
  - "https://docs.cloud.google.com/run/docs/reference/container-contract"
keywords:
  - "go"
  - "25"
  - "runtime"
  - "run"
  - "supports"
  - "the"
  - "for"
  - "services"
---

# Go 1.25 runtime

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run supports the Go 1.25 runtime for services; Cloud Run supports the Go 1.25 runtime for deployed workloads.

## Extended Definition

Cloud Run supports the Go 1.25 runtime for services; Cloud Run supports the Go 1.25 runtime for deployed workloads.

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
- Final score: 222
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- October 30, 2025 Feature For Cloud Run source deployed services and functions with GPU enabled , Cloud Run defaults to using Cloud Build's e2-highcpu-8 machine type for the build process when using the gcloud CLI or the Google Cloud console.
- November 25, 2024 Feature You can now set a task timeout up to 168 hours (7 days) for Cloud Run jobs. (Preview) November 19, 2024 Feature Support for the Go 1.23 runtime is now in Preview.
- March 03, 2025 Feature Support for the Go 1.23 runtime is now in general availability (GA).
- July 15, 2025 Feature Support for the Go 1.24 runtime is in Preview .

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For functions deployed with Cloud Run, you can use one of the Cloud Run runtime base images that are published by Google Cloud's buildpacks to receive automatic security and maintenance updates.
- 1 Environment variables for worker pools Cloud Run sets the following environment variables for worker pools: Name Description Example CLOUD RUN WORKER POOL The name of the running Cloud Run worker pool. hello-world CLOUD RUN WORKER POOL REVISION The name of the running Cloud Run worker pool revision. hello-world.1 Request and response header requirements (services) For services, Cloud Run restricts header names to printable non-whitespace ASCII, and cannot contain colons.
- Container requirements When deploying containers to Cloud Run, the following requirements must be met: Container deployed to services must listen for requests on the correct port A Cloud Run service starts Cloud Run instances to handle incoming requests.
- Responses (services) For Cloud Run services, your container must send a response within the time specified in the request timeout setting after it receives a request, including the container startup time.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For functions deployed with Cloud Run, you can use one of the Cloud Run runtime base images that are published by Google Cloud's buildpacks to receive automatic security and maintenance updates.
- 1 Environment variables for worker pools Cloud Run sets the following environment variables for worker pools: Name Description Example CLOUD RUN WORKER POOL The name of the running Cloud Run worker pool. hello-world CLOUD RUN WORKER POOL REVISION The name of the running Cloud Run worker pool revision. hello-world.1 Request and response header requirements (services) For services, Cloud Run restricts header names to printable non-whitespace ASCII, and cannot contain colons.
- Container requirements When deploying containers to Cloud Run, the following requirements must be met: Container deployed to services must listen for requests on the correct port A Cloud Run service starts Cloud Run instances to handle incoming requests.
- Responses (services) For Cloud Run services, your container must send a response within the time specified in the request timeout setting after it receives a request, including the container startup time.

