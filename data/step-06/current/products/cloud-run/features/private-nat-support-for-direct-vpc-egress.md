---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.417Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Private NAT support for Direct VPC egress"
feature_slug: "private-nat-support-for-direct-vpc-egress"
latest_feature_date: "2025-10-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/run/docs/container-contract"
  - "https://docs.cloud.google.com/run/docs/reference/container-contract"
  - "https://docs.cloud.google.com/run/docs/overview/what-is-cloud-run"
keywords:
  - "private"
  - "direct"
  - "egress"
  - "supports"
---

# Private NAT support for Direct VPC egress

Product: Cloud Run
Coverage: MEDIUM

## Step 02 Summary

Cloud Run Direct VPC egress supports Private NAT.

## Extended Definition

Cloud Run Direct VPC egress supports Private NAT.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- [https://docs.cloud.google.com/run/docs/overview/what-is-cloud-run](https://docs.cloud.google.com/run/docs/overview/what-is-cloud-run)

## Supporting Pages

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- When you configure Direct VPC for your Cloud Run worker pool deployment, each worker instance receives a private IP address on the configured network and subnet.
- Cloud Run worker pools support both Direct VPC egress and Direct VPC ingress .
- Cloud Run services and jobs support Direct VPC egress .
- For Cloud Run worker pools with Direct VPC ingress, such as database connections or any other custom TCP-based protocol, the container must listen for TCP connections on the port exposed in your container image through the Dockerfile or specified by the PORT environment variable.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- Source ID: `site-docs-root`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- When you configure Direct VPC for your Cloud Run worker pool deployment, each worker instance receives a private IP address on the configured network and subnet.
- Cloud Run worker pools support both Direct VPC egress and Direct VPC ingress .
- Cloud Run services and jobs support Direct VPC egress .
- For Cloud Run worker pools with Direct VPC ingress, such as database connections or any other custom TCP-based protocol, the container must listen for TCP connections on the port exposed in your container image through the Dockerfile or specified by the PORT environment variable.

### What is Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/overview/what-is-cloud-run](https://docs.cloud.google.com/run/docs/overview/what-is-cloud-run)
- Source ID: `site-api-reference`
- Final score: 74
- Re-rank relevance: N/A

Evidence snippets:
- Worker pools support Direct VPC egress and ingress , and don't have a load-balanced endpoint or URL.
- Built-in traffic management To reduce the risk of deploying a new revision, Cloud Run supports performing a gradual rollout , including routing incoming traffic to the latest revision, rolling back to a previous revision, and splitting traffic to multiple revisions at the same time.
- Public and private services A Cloud Run service can be reachable from the internet, or you can restrict access in these ways: Specify an access policy using Cloud IAM .
- For more information on metadata server (MDS) support and retrieving the private IP addresses of your worker pool instance, see the Container runtime contract .

