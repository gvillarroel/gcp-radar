---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T00:04:30.737Z"
product_name: "Anthos clusters on AWS (previous generation)"
product_slug: "anthos-clusters-on-aws-previous-generation"
feature_name: "and t3a"
feature_slug: "and-t3a"
latest_feature_date: "2021-12-14"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/quickstart"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/supported-instance-types"
  - "https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.well-known/getOpenid-configuration"
keywords:
  - "creating"
  - "listed"
---

# and t3a

Product: Anthos clusters on AWS (previous generation)
Coverage: MEDIUM

## Step 02 Summary

Anthos clusters on AWS now support creating clusters using the listed AWS EC2 instance families.

## Extended Definition

Anthos clusters on AWS now support creating clusters using the listed AWS EC2 instance families.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/quickstart](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/quickstart)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/supported-instance-types](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/supported-instance-types)
- [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.well-known/getOpenid-configuration](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.well-known/getOpenid-configuration)

## Supporting Pages

### Supported instance types \_|\_ GKE on AWS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/supported-instance-types](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/reference/supported-instance-types)
- Source ID: `site-docs-root-2`
- Final score: 54
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

### Deploy an application on GKE on AWS \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/quickstart](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/aws/quickstart)
- Source ID: `site-docs-root-2`
- Final score: 47
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Get authentication credentials for the cluster After creating your cluster, you need to get authentication credentials to interact with the cluster: gcloud container aws clusters get-credentials aws-cluster-0 This command configures kubectl to access the cluster you created using Connect gateway .
- You can expose your application by creating a Service, a Kubernetes resource that exposes your application to external traffic.
- Before you begin Before creating a cluster, you must complete the prerequisites .
- Before creating your cluster, the Terraform scripts also prepare your AWS VPC.

### "Method: projects.locations.awsClusters.well-known.getOpenid-configuration\

- URL: [https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.well-known/getOpenid-configuration](https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/reference/rest/v1/projects.locations.awsClusters.well-known/getOpenid-configuration)
- Source ID: `site-api-reference`
- Final score: 46
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

