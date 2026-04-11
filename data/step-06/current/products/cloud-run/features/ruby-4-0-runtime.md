---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.876Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Ruby 4.0 runtime"
feature_slug: "ruby-4-0-runtime"
latest_feature_date: "2026-03-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/run/docs/container-contract"
  - "https://docs.cloud.google.com/run/docs/reference/container-contract"
keywords:
  - "ruby"
  - "runtime"
  - "run"
  - "supports"
  - "the"
  - "for"
  - "services"
---

# Ruby 4.0 runtime

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run supports the Ruby 4.0 runtime for services; Cloud Run supports the Ruby 4.0 runtime for services.

## Extended Definition

Cloud Run supports the Ruby 4.0 runtime for services; Cloud Run supports the Ruby 4.0 runtime for services.

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
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- August 21, 2024 Feature Cloud Run now provides security updates for services that are deployed from source when you specify the runtime base image (Preview).
- Feature Support for the Ruby 3.4 runtime is in General Availability (GA) .
- May 05, 2025 Feature Support for the Ruby 3.4 runtime is in Preview .
- May 12, 2021 Feature Cloud Run now provides UI, command line, and YAML support for referencing Secret Manager Secrets . (Available in public preview.) Feature Customer managed encryption keys are now available for use with Cloud Run. (Available in public preview.) Feature Recommender now provides recommendations for securing Cloud Run services by creating dedicated service accounts. (Available in public preview.) Feature Committed use discounts are now available for Cloud Run . (Available in public preview.) Feature You can now use Binary authorization with Cloud Run to enforce policy-based deployment of Cloud Run services. (Available in public preview.) May 03, 2021 Feature You can now use Identity-aware Proxy with Cloud Run to use identity and context to guard access to your applications. (Available in public preview.) Change By default, the memory allocated to each container instance of a new service is 512MiB.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- 1 Environment variables for worker pools Cloud Run sets the following environment variables for worker pools: Name Description Example CLOUD RUN WORKER POOL The name of the running Cloud Run worker pool. hello-world CLOUD RUN WORKER POOL REVISION The name of the running Cloud Run worker pool revision. hello-world.1 Request and response header requirements (services) For services, Cloud Run restricts header names to printable non-whitespace ASCII, and cannot contain colons.
- Container requirements When deploying containers to Cloud Run, the following requirements must be met: Container deployed to services must listen for requests on the correct port A Cloud Run service starts Cloud Run instances to handle incoming requests.
- Responses (services) For Cloud Run services, your container must send a response within the time specified in the request timeout setting after it receives a request, including the container startup time.
- For functions deployed with Cloud Run, you can use one of the Cloud Run runtime base images that are published by Google Cloud's buildpacks to receive automatic security and maintenance updates.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- 1 Environment variables for worker pools Cloud Run sets the following environment variables for worker pools: Name Description Example CLOUD RUN WORKER POOL The name of the running Cloud Run worker pool. hello-world CLOUD RUN WORKER POOL REVISION The name of the running Cloud Run worker pool revision. hello-world.1 Request and response header requirements (services) For services, Cloud Run restricts header names to printable non-whitespace ASCII, and cannot contain colons.
- Container requirements When deploying containers to Cloud Run, the following requirements must be met: Container deployed to services must listen for requests on the correct port A Cloud Run service starts Cloud Run instances to handle incoming requests.
- Responses (services) For Cloud Run services, your container must send a response within the time specified in the request timeout setting after it receives a request, including the container startup time.
- For functions deployed with Cloud Run, you can use one of the Cloud Run runtime base images that are published by Google Cloud's buildpacks to receive automatic security and maintenance updates.

