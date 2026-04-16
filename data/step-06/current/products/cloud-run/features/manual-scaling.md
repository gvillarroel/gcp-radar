---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T15:34:54.432Z"
product_name: "Cloud Run"
product_slug: "cloud-run"
feature_name: "Manual scaling"
feature_slug: "manual-scaling"
latest_feature_date: "2025-08-05"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/run/docs/configuring"
  - "https://docs.cloud.google.com/run/docs/container-contract"
  - "https://docs.cloud.google.com/run/docs/securing/service-identity"
keywords:
  - "manually"
  - "scaling"
  - "instead"
  - "relying"
  - "manual"
  - "only"
  - "supports"
---

# Manual scaling

Product: Cloud Run
Coverage: LOW

## Step 02 Summary

Cloud Run supports manually scaling a service instead of relying only on autoscaling; Cloud Run supports manually scaling a service instead of relying only on autoscaling.

## Extended Definition

Cloud Run supports manually scaling a service instead of relying only on autoscaling; Cloud Run supports manually scaling a service instead of relying only on autoscaling.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring)
- [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- [https://docs.cloud.google.com/run/docs/securing/service-identity](https://docs.cloud.google.com/run/docs/securing/service-identity)

## Supporting Pages

### Introduction to service identity \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/securing/service-identity](https://docs.cloud.google.com/run/docs/securing/service-identity)
- Source ID: `site-docs-reference-required-6`
- Final score: 31
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To assign a service account as the service identity, see the following guides: Configure service identity for services Configure service identity for jobs However, if you use your own custom code or need to make requests programmatically, you can use the metadata server directly to manually fetch identity tokens and access token described in the next section.
- The two types of service accounts that can be used as the service identity are as follows: User-managed service account (recommended) : You manually create this service account and determine the most minimal set of permissions that the service account needs to access specific Google Cloud resources.
- A service account that is used as the deployer account will only be used as the service identity if you configure the same service account in your Cloud Run configuration.
- Note that you cannot query this server directly from your local machine as the metadata server is only available for workloads running on Google Cloud.

### Configure Cloud Run services \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/configuring](https://docs.cloud.google.com/run/docs/configuring)
- Source ID: `site-docs-reference-2`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- C Service scaling You can set your service to autoscaling or manual scaling, depending on how much control you need over your scaling behavior.
- Manual scaling lets you set a specific instance count, regardless of traffic or utilization, and without requiring redeployment.
- B Billing Use billing settings to control how you are charged, either per request and only when the instance processes a request, or for the entire lifecycle of the instance.
- When using autoscaling, each Cloud Run revision is automatically scaled to the number of instances needed to handle all incoming requests, events, or CPU utilization.

### Container runtime contract \_|\_ Cloud Run \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/run/docs/container-contract](https://docs.cloud.google.com/run/docs/container-contract)
- Source ID: `site-docs-root`
- Final score: 22
- Re-rank relevance: N/A

Evidence snippets:
- Another option is to manually install the NVIDIA forward compatibility packages and add them to LD LIBRARY PATH .
- Manually scale the number of instances that your Cloud Run worker pool requires to handle its workload.
- You can optionally use manual scaling if you need more control over your scaling behavior.
- Service scaling By default, a Cloud Run service is automatically scaled to the number of instances needed to handle all incoming requests, events, or CPU utilization.

