---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.505Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Direct VPC egress"
feature_slug: "direct-vpc-egress"
latest_feature_date: "2024-04-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/run/docs/container-contract"
  - "https://docs.cloud.google.com/run/docs/reference/container-contract"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2"
keywords:
  - "send"
  - "directly"
  - "traffic"
  - "direct"
  - "egress"
  - "lets"
---

# Direct VPC egress

Product: Cloud Run
Coverage: MEDIUM

## Step 02 Summary

Direct VPC egress lets Cloud Run send traffic directly to a VPC network without requiring a Serverless VPC Access connector; Direct VPC egress lets Cloud Run send traffic directly to a VPC network without requiring a Serverless VPC Access connector.

## Extended Definition

Direct VPC egress lets Cloud Run send traffic directly to a VPC network without requiring a Serverless VPC Access connector; Direct VPC egress lets Cloud Run send traffic directly to a VPC network without requiring a Serverless VPC Access connector.

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
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- This means that they can send traffic to private resources within your configured VPC network, such as databases or internal services.
- Transport layer encryption (TLS) The container shouldn't implement any transport layer security directly.
- Cloud Run worker pools support both Direct VPC egress and Direct VPC ingress .
- Cloud Run services and jobs support Direct VPC egress .

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- Source ID: `site-docs-root`
- Final score: 139
- Re-rank relevance: N/A

Evidence snippets:
- This means that they can send traffic to private resources within your configured VPC network, such as databases or internal services.
- Transport layer encryption (TLS) The container shouldn't implement any transport layer security directly.
- Cloud Run worker pools support both Direct VPC egress and Direct VPC ingress .
- Cloud Run services and jobs support Direct VPC egress .

### "Package com.google.cloud.run.v2 (0.88.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2)
- Source ID: `site-java-reference`
- Final score: 135
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information on sending traffic to a VPC network, visit https://cloud.google.com/run/docs/configuring/connecting-vpc . com. google. cloud. run. v2.
- For more information on sending traffic to a VPC network, visit https://cloud.google.com/run/docs/configuring/connecting-vpc . com. google. cloud. run. v2.
- Network Interface Direct VPC egress settings. com. google. cloud. run. v2.
- Builder Direct VPC egress settings. com. google. cloud. run. v2.

