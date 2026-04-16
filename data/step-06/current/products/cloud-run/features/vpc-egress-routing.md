---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.601Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "VPC egress routing"
feature_slug: "vpc-egress-routing"
latest_feature_date: "2020-10-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2"
  - "https://docs.cloud.google.com/run/docs/container-contract"
  - "https://docs.cloud.google.com/run/docs/reference/container-contract"
keywords:
  - "outbound"
  - "routing"
  - "route"
  - "traffic"
  - "egress"
---

# VPC egress routing

Product: Cloud Run
Coverage: MEDIUM

## Step 02 Summary

Cloud Run services can route outbound traffic through a VPC network, enabling static outbound IP configuration with Cloud NAT.

## Extended Definition

Cloud Run services can route outbound traffic through a VPC network, enabling static outbound IP configuration with Cloud NAT.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2)
- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)

## Supporting Pages

### "Package com.google.cloud.run.v2 (0.88.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2](https://docs.cloud.google.com/java/docs/reference/google-cloud-run/latest/com.google.cloud.run.v2)
- Source ID: `site-java-reference`
- Final score: 75
- Re-rank relevance: N/A

Evidence snippets:
- Traffic Target Holds a single traffic routing entry for the Service.
- Builder Holds a single traffic routing entry for the Service.
- Builder Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. com. google. cloud. run. v2.
- Probe Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic. com. google. cloud. run. v2.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- Outbound connection resets Connection streams from your container to both VPC and internet can be occasionally terminated and replaced when underlying infrastructure is restarted or updated.
- If an instance that is processing requests needs to be shut down, requests already being processed are given time to complete, and new incoming requests are routed to other instances.
- If a workload-processing instance must be shut down, Cloud Run gives tasks in-process tasks time to complete and routes new workloads to other instances.
- Outbound request timeouts For Cloud Run services and jobs, there is a timeout after 10 minutes of idle time for requests from your container to VPC .

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/reference/container-contract](https://docs.cloud.google.com/run/docs/reference/container-contract)
- Source ID: `site-docs-root`
- Final score: 62
- Re-rank relevance: N/A

Evidence snippets:
- Outbound connection resets Connection streams from your container to both VPC and internet can be occasionally terminated and replaced when underlying infrastructure is restarted or updated.
- If an instance that is processing requests needs to be shut down, requests already being processed are given time to complete, and new incoming requests are routed to other instances.
- If a workload-processing instance must be shut down, Cloud Run gives tasks in-process tasks time to complete and routes new workloads to other instances.
- Outbound request timeouts For Cloud Run services and jobs, there is a timeout after 10 minutes of idle time for requests from your container to VPC .

