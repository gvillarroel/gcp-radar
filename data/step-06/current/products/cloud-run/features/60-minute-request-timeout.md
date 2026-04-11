---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.927Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "60-minute request timeout"
feature_slug: "60-minute-request-timeout"
latest_feature_date: "2020-10-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/run/docs/container-contract"
  - "https://docs.cloud.google.com/run/docs/reference/container-contract"
keywords:
  - "60"
  - "minute"
  - "request"
  - "timeout"
  - "run"
  - "supports"
  - "timeouts"
  - "of"
---

# 60-minute request timeout

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run supports request timeouts of up to 60 minutes.

## Extended Definition

Cloud Run supports request timeouts of up to 60 minutes.

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
- Final score: 178
- Re-rank relevance: N/A

Evidence snippets:
- October 06, 2020 Feature Cloud Run now supports request timeouts up to 60 minutes .
- September 01, 2022 Change Terraform samples are now available in many of the Cloud Run tutorials and guides, such as: Static outbound IP address , Pub/Sub with Cloud Run Authenticating service to service Rollbacks & Rollouts Request Timeouts and many other pages.
- June 03, 2021 Feature Request timeouts up to 60 minutes are now at general availability (GA).
- May 20, 2020 Feature The Cloud Run container instance metadata server now exposes the unique identifier of the container instance and the region of the Cloud Run service May 13, 2020 Feature Cloud Run (fully managed) now supports connecting to a VPC network with Serverless VPC Access , in beta.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Outbound request timeouts For Cloud Run services and jobs, there is a timeout after 10 minutes of idle time for requests from your container to VPC .
- For requests from your container to the internet, there is a timeout after 20 minutes of idle time.
- 1 Environment variables for worker pools Cloud Run sets the following environment variables for worker pools: Name Description Example CLOUD RUN WORKER POOL The name of the running Cloud Run worker pool. hello-world CLOUD RUN WORKER POOL REVISION The name of the running Cloud Run worker pool revision. hello-world.1 Request and response header requirements (services) For services, Cloud Run restricts header names to printable non-whitespace ASCII, and cannot contain colons.
- Typical uses of memory include: Code loaded into memory to run the service Writing to the file system Extra processes running in the container such as an nginx server In-memory caching systems such as the PHP OpCache Per request memory usage Shared in-memory volumes GPU You can configure a container in a Cloud Run instance to access a GPU.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: N/A

Evidence snippets:
- Outbound request timeouts For Cloud Run services and jobs, there is a timeout after 10 minutes of idle time for requests from your container to VPC .
- For requests from your container to the internet, there is a timeout after 20 minutes of idle time.
- 1 Environment variables for worker pools Cloud Run sets the following environment variables for worker pools: Name Description Example CLOUD RUN WORKER POOL The name of the running Cloud Run worker pool. hello-world CLOUD RUN WORKER POOL REVISION The name of the running Cloud Run worker pool revision. hello-world.1 Request and response header requirements (services) For services, Cloud Run restricts header names to printable non-whitespace ASCII, and cannot contain colons.
- Typical uses of memory include: Code loaded into memory to run the service Writing to the file system Extra processes running in the container such as an nginx server In-memory caching systems such as the PHP OpCache Per request memory usage Shared in-memory volumes GPU You can configure a container in a Cloud Run instance to access a GPU.

