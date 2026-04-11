---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.926Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Automatic Cloud Trace capture"
feature_slug: "automatic-cloud-trace-capture"
latest_feature_date: "2020-10-12"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/container-contract"
  - "https://docs.cloud.google.com/run/docs/reference/container-contract"
  - "https://docs.cloud.google.com/run/docs/release-notes"
keywords:
  - "automatic"
  - "trace"
  - "capture"
  - "run"
  - "automatically"
  - "captures"
  - "request"
  - "traces"
---

# Automatic Cloud Trace capture

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run automatically captures request traces in Cloud Trace.

## Extended Definition

Cloud Run automatically captures request traces in Cloud Trace.

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
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- If you configure a Cloud Run service to use HTTP/2 end-to-end, your container must handle requests in HTTP/2 cleartext (h2c) format, because TLS is still terminated automatically by Cloud Run.
- Service scaling By default, a Cloud Run service is automatically scaled to the number of instances needed to handle all incoming requests, events, or CPU utilization.
- Cloud Run automatically appends this path to the LD LIBRARY PATH environment variable (i.e. ${LD LIBRARY PATH}:/usr/local/nvidia/lib64 ) of the container with the GPU.
- Environment variables for services The following environment variables are automatically added to all the running containers except PORT .

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- Source ID: `site-docs-root`
- Final score: 134
- Re-rank relevance: N/A

Evidence snippets:
- If you configure a Cloud Run service to use HTTP/2 end-to-end, your container must handle requests in HTTP/2 cleartext (h2c) format, because TLS is still terminated automatically by Cloud Run.
- Service scaling By default, a Cloud Run service is automatically scaled to the number of instances needed to handle all incoming requests, events, or CPU utilization.
- Cloud Run automatically appends this path to the LD LIBRARY PATH environment variable (i.e. ${LD LIBRARY PATH}:/usr/local/nvidia/lib64 ) of the container with the GPU.
- Environment variables for services The following environment variables are automatically added to all the running containers except PORT .

### Cloud Run release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/release-notes](https://docs.cloud.google.com/run/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 130
- Re-rank relevance: N/A

Evidence snippets:
- Feature Traces of requests to Cloud Run services are now automatically captured in Cloud Trace October 11, 2020 Feature When a container instance needs to be shut down, it now receives a SIGTERM signal.
- May 03, 2023 Feature CPU allocation recommender now automatically recommends CPU allocation changes based on traffic received by your Cloud Run service over the past month. (In Preview) April 26, 2023 Announcement Cloud Run source deployment now supports Ubuntu 22 LTS base images.
- April 11, 2023 Breaking Source code deployments that use Node.js now automatically run the npm run build command by default when any build script is defined in the package.json file.
- November 01, 2021 Feature Committed use discount recommender now automatically generates recommendations to purchase Cloud Run committed use discounts based on historical usage.

