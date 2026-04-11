---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.914Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Direct VPC egress"
feature_slug: "direct-vpc-egress"
latest_feature_date: "2024-04-24"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/run/docs/container-contract"
  - "https://docs.cloud.google.com/run/docs/reference/container-contract"
keywords:
  - "direct"
  - "vpc"
  - "egress"
  - "lets"
  - "run"
  - "send"
  - "traffic"
  - "directly"
---

# Direct VPC egress

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Direct VPC egress lets Cloud Run send traffic directly to a VPC network without requiring a Serverless VPC Access connector; Direct VPC egress lets Cloud Run send traffic directly to a VPC network without requiring a Serverless VPC Access connector.

## Extended Definition

Direct VPC egress lets Cloud Run send traffic directly to a VPC network without requiring a Serverless VPC Access connector; Direct VPC egress lets Cloud Run send traffic directly to a VPC network without requiring a Serverless VPC Access connector.

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
- Final score: 208
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- April 24, 2024 Feature Support for Direct VPC egress , which lets you send traffic directly to a VPC network with no Serverless VPC Access connector required, is now at general availability (GA).
- November 11, 2025 Feature You can set a task timeout up to 168 hours (7 days) for Cloud Run jobs. (GA) November 06, 2025 Feature Use dual-stack subnets with IPv6 to let your Cloud Run resources send IPv4 and internal IPv6 traffic to a VPC network with Direct VPC egress, and send external IPv6 traffic to the public internet. (GA) October 31, 2025 Feature Support for Java 25 runtime is in Preview .
- January 24, 2025 Feature You can now use dual-stack subnets with internal IPv6 to let your Cloud Run services and jobs send IPv4 and internal IPv6 traffic to a VPC network with Direct VPC egress. (Preview) January 22, 2025 Feature The Cloud Run Builder ( roles/run.builder ) IAM role is now available in preview.
- August 14, 2023 Feature You can now send traffic directly to a VPC network with no Serverless VPC Access connector required (Preview).

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Run worker pools support both Direct VPC egress and Direct VPC ingress .
- Cloud Run services and jobs support Direct VPC egress .
- For Cloud Run worker pools with Direct VPC ingress, such as database connections or any other custom TCP-based protocol, the container must listen for TCP connections on the port exposed in your container image through the Dockerfile or specified by the PORT environment variable.
- When you configure Direct VPC for your Cloud Run worker pool deployment, each worker instance receives a private IP address on the configured network and subnet.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Run worker pools support both Direct VPC egress and Direct VPC ingress .
- Cloud Run services and jobs support Direct VPC egress .
- For Cloud Run worker pools with Direct VPC ingress, such as database connections or any other custom TCP-based protocol, the container must listen for TCP connections on the port exposed in your container image through the Dockerfile or specified by the PORT environment variable.
- When you configure Direct VPC for your Cloud Run worker pool deployment, each worker instance receives a private IP address on the configured network and subnet.

