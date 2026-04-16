---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.451Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Direct VPC egress for jobs"
feature_slug: "direct-vpc-egress-for-jobs"
latest_feature_date: "2025-04-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/run/docs/container-contract"
  - "https://docs.cloud.google.com/run/docs/reference/container-contract"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2"
keywords:
  - "outbound"
  - "network"
  - "access"
  - "direct"
  - "egress"
  - "jobs"
---

# Direct VPC egress for jobs

Product: Cloud Run
Coverage: MEDIUM

## Step 02 Summary

Cloud Run jobs support Direct VPC egress for outbound network access.

## Extended Definition

Cloud Run jobs support Direct VPC egress for outbound network access.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2)

## Supporting Pages

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Run services and jobs support Direct VPC egress .
- Read more about how to extract and use this access token. /computeMetadata/v1/instance/network-interfaces/0/ip IPv4 address of a worker pool instance on a VPC network. /computeMetadata/v1/instance/network-interfaces/0/ipv6 IPv6 address of a worker pool instance.
- Make sure you create your instance under a dual-stack subnet . /computeMetadata/v1/instance/network-interfaces/ /computeMetadata/v1/instance/network-interfaces/0/ Network interface directory path for worker pools.
- When you configure Direct VPC for your Cloud Run worker pool deployment, each worker instance receives a private IP address on the configured network and subnet.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- Source ID: `site-docs-root`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- Cloud Run services and jobs support Direct VPC egress .
- Read more about how to extract and use this access token. /computeMetadata/v1/instance/network-interfaces/0/ip IPv4 address of a worker pool instance on a VPC network. /computeMetadata/v1/instance/network-interfaces/0/ipv6 IPv6 address of a worker pool instance.
- Make sure you create your instance under a dual-stack subnet . /computeMetadata/v1/instance/network-interfaces/ /computeMetadata/v1/instance/network-interfaces/0/ Network interface directory path for worker pools.
- When you configure Direct VPC for your Cloud Run worker pool deployment, each worker instance receives a private IP address on the configured network and subnet.

### "Package com.google.cloud.run.v2 (0.88.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2)
- Source ID: `site-java-reference`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Network Interface Direct VPC egress settings. com. google. cloud. run. v2.
- Builder Direct VPC egress settings. com. google. cloud. run. v2.
- Vpc Egress Egress options for VPC access.
- For more information on sending traffic to a VPC network, visit https://cloud.google.com/run/docs/configuring/connecting-vpc . com. google. cloud. run. v2.

