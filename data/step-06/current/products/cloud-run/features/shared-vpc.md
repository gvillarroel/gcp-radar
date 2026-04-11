---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.921Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Shared VPC"
feature_slug: "shared-vpc"
latest_feature_date: "2021-03-18"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/run/docs/container-contract"
  - "https://docs.cloud.google.com/run/docs/reference/container-contract"
keywords:
  - "shared"
  - "vpc"
  - "lets"
  - "run"
  - "services"
  - "connect"
  - "through"
  - "host"
---

# Shared VPC

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Shared VPC lets Cloud Run services connect through a host project's shared VPC network.

## Extended Definition

Shared VPC lets Cloud Run services connect through a host project's shared VPC network.

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
- Final score: 194
- Re-rank relevance: N/A

Evidence snippets:
- Feature A Cloud Run service revision will now accept requests from the Shared VPC network that it is connected to , including when Ingress is configured as "Internal" or "Internal and Cloud Load Balancing." (Preview) April 13, 2023 Feature Startup CPU boost for Cloud Run services is now at general availability (GA).
- Shared VPC traffic is now considered "internal" for Cloud Run services that are connected to the Shared VPC network.
- March 22, 2024 Feature Direct VPC egress (Preview) is now available in the following additional regions : africa-south1 asia-south1 asia-southeast2 australia-southeast2 europe-central2 europe-west2 europe-west6 europe-west8 europe-west9 europe-west10 me-central1 me-central2 southamerica-west1 us-east5 us-west2 us-west3 us-west8 Feature Cloud Run services can now connect to Vertex AI to access generative AI models using integrations (Preview).
- June 09, 2023 Feature You can now create and then configure a Serverless VPC Access connector for your service or job directly from the Create form in the Google Cloud console. (Preview) May 17, 2023 Feature Allocating up to 32 GiB of memory and up to 8 CPU to your Cloud Run services is now at general availability (GA).

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- For Cloud Run worker pools with Direct VPC ingress, such as database connections or any other custom TCP-based protocol, the container must listen for TCP connections on the port exposed in your container image through the Dockerfile or specified by the PORT environment variable.
- VPC network connectivity Preview — Cloud Run worker pools This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Outbound request timeouts For Cloud Run services and jobs, there is a timeout after 10 minutes of idle time for requests from your container to VPC .
- Cloud Run services and jobs don't support Direct VPC ingress .

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- Source ID: `site-docs-root`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- For Cloud Run worker pools with Direct VPC ingress, such as database connections or any other custom TCP-based protocol, the container must listen for TCP connections on the port exposed in your container image through the Dockerfile or specified by the PORT environment variable.
- VPC network connectivity Preview — Cloud Run worker pools This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Outbound request timeouts For Cloud Run services and jobs, there is a timeout after 10 minutes of idle time for requests from your container to VPC .
- Cloud Run services and jobs don't support Direct VPC ingress .

