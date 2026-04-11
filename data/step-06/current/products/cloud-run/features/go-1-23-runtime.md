---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.904Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Go 1.23 runtime"
feature_slug: "go-1-23-runtime"
latest_feature_date: "2025-03-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/run/docs/container-contract"
  - "https://docs.cloud.google.com/run/docs/reference/container-contract"
keywords:
  - "go"
  - "23"
  - "runtime"
  - "run"
  - "supports"
  - "the"
  - "for"
  - "deployed"
---

# Go 1.23 runtime

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run supports the Go 1.23 runtime for deployed workloads; Cloud Run supports the Go 1.23 runtime for deployed workloads.

## Extended Definition

Cloud Run supports the Go 1.23 runtime for deployed workloads; Cloud Run supports the Go 1.23 runtime for deployed workloads.

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
- November 25, 2024 Feature You can now set a task timeout up to 168 hours (7 days) for Cloud Run jobs. (Preview) November 19, 2024 Feature Support for the Go 1.23 runtime is now in Preview.
- March 03, 2025 Feature Support for the Go 1.23 runtime is now in general availability (GA).
- June 09, 2023 Feature You can now create and then configure a Serverless VPC Access connector for your service or job directly from the Create form in the Google Cloud console. (Preview) May 17, 2023 Feature Allocating up to 32 GiB of memory and up to 8 CPU to your Cloud Run services is now at general availability (GA).
- March 07, 2023 Feature You can now authenticate to a Cloud Run service by including a Google-signed OpenID Connect ID token in the X-Serverless-Authorization header if your application already uses the Authorization header for custom authorization.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For functions deployed with Cloud Run, you can use one of the Cloud Run runtime base images that are published by Google Cloud's buildpacks to receive automatic security and maintenance updates.
- Container requirements When deploying containers to Cloud Run, the following requirements must be met: Container deployed to services must listen for requests on the correct port A Cloud Run service starts Cloud Run instances to handle incoming requests.
- Cloud Run specifically supports the Linux x86 64 ABI format.
- The following table lists some of the available metadata server information: Path Description /computeMetadata/v1/project/project-id Project ID of the project the Cloud Run resource belongs to. /computeMetadata/v1/project/numeric-project-id Project number of the project the Cloud Run resource belongs to. /computeMetadata/v1/instance/region Region of this Cloud Run resource, returns projects/ PROJECT-NUMBER /regions/ REGION /computeMetadata/v1/instance/id Unique identifier of the instance (also available in logs ). /computeMetadata/v1/instance/service-accounts/default/email Email for the service identity of this Cloud Run resource. /computeMetadata/v1/instance/service-accounts/default/token Generates an OAuth2 access token for the service account of this Cloud Run resource .

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- Source ID: `site-docs-root`
- Final score: 202
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- For functions deployed with Cloud Run, you can use one of the Cloud Run runtime base images that are published by Google Cloud's buildpacks to receive automatic security and maintenance updates.
- Container requirements When deploying containers to Cloud Run, the following requirements must be met: Container deployed to services must listen for requests on the correct port A Cloud Run service starts Cloud Run instances to handle incoming requests.
- Cloud Run specifically supports the Linux x86 64 ABI format.
- The following table lists some of the available metadata server information: Path Description /computeMetadata/v1/project/project-id Project ID of the project the Cloud Run resource belongs to. /computeMetadata/v1/project/numeric-project-id Project number of the project the Cloud Run resource belongs to. /computeMetadata/v1/instance/region Region of this Cloud Run resource, returns projects/ PROJECT-NUMBER /regions/ REGION /computeMetadata/v1/instance/id Unique identifier of the instance (also available in logs ). /computeMetadata/v1/instance/service-accounts/default/email Email for the service identity of this Cloud Run resource. /computeMetadata/v1/instance/service-accounts/default/token Generates an OAuth2 access token for the service account of this Cloud Run resource .

