---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T22:42:43.891Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Dual-stack Direct VPC egress with IPv6"
feature_slug: "dual-stack-direct-vpc-egress-with-ipv6"
latest_feature_date: "2025-11-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/release-notes"
  - "https://docs.cloud.google.com/run/docs/container-contract"
  - "https://docs.cloud.google.com/run/docs/reference/container-contract"
keywords:
  - "dual"
  - "stack"
  - "direct"
  - "vpc"
  - "egress"
  - "with"
  - "ipv6"
  - "run"
---

# Dual-stack Direct VPC egress with IPv6

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run supports dual-stack subnets with IPv6 for Direct VPC egress and external IPv6 traffic.

## Extended Definition

Cloud Run supports dual-stack subnets with IPv6 for Direct VPC egress and external IPv6 traffic.

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
- November 11, 2025 Feature You can set a task timeout up to 168 hours (7 days) for Cloud Run jobs. (GA) November 06, 2025 Feature Use dual-stack subnets with IPv6 to let your Cloud Run resources send IPv4 and internal IPv6 traffic to a VPC network with Direct VPC egress, and send external IPv6 traffic to the public internet. (GA) October 31, 2025 Feature Support for Java 25 runtime is in Preview .
- January 24, 2025 Feature You can now use dual-stack subnets with internal IPv6 to let your Cloud Run services and jobs send IPv4 and internal IPv6 traffic to a VPC network with Direct VPC egress. (Preview) January 22, 2025 Feature The Cloud Run Builder ( roles/run.builder ) IAM role is now available in preview.
- March 26, 2025 Change Cloud Run services configured with Direct VPC egress now use only 2 times (2X) as many IP addresses as the number of instances for the duration of the instance plus up to 20 minutes, reduced from 4X as many IP addresses.
- March 19, 2024 Feature You can now mount an NFS file share as a volume for Cloud Run services and jobs . (In Preview) March 14, 2024 Feature Direct VPC egress now supports Cloud NAT with Public NAT IP addresses (in Preview).

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- For Cloud Run worker pools with Direct VPC ingress, such as database connections or any other custom TCP-based protocol, the container must listen for TCP connections on the port exposed in your container image through the Dockerfile or specified by the PORT environment variable.
- Cloud Run worker pools support both Direct VPC egress and Direct VPC ingress .
- Cloud Run services and jobs support Direct VPC egress .
- Make sure you create your instance under a dual-stack subnet . /computeMetadata/v1/instance/network-interfaces/ /computeMetadata/v1/instance/network-interfaces/0/ Network interface directory path for worker pools.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- Source ID: `site-docs-root`
- Final score: 148
- Re-rank relevance: N/A

Evidence snippets:
- For Cloud Run worker pools with Direct VPC ingress, such as database connections or any other custom TCP-based protocol, the container must listen for TCP connections on the port exposed in your container image through the Dockerfile or specified by the PORT environment variable.
- Cloud Run worker pools support both Direct VPC egress and Direct VPC ingress .
- Cloud Run services and jobs support Direct VPC egress .
- Make sure you create your instance under a dual-stack subnet . /computeMetadata/v1/instance/network-interfaces/ /computeMetadata/v1/instance/network-interfaces/0/ Network interface directory path for worker pools.

