---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.149Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Multi-cluster Services"
feature_slug: "multi-cluster-services"
latest_feature_date: "2025-10-31"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/explore-gke-networking-docs-use-cases"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/network-overview"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler"
keywords:
  - "disablement"
  - "finalizer"
  - "cleanup"
  - "improve"
  - "cluster"
  - "multi"
  - "adds"
---

# Multi-cluster Services

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE adds a finalizer to Multi-Cluster Services to improve disablement cleanup and reduce the risk of resource leaks; Provides a Kubernetes-native interface for making services discoverable and accessible across multiple clusters.

## Extended Definition

GKE adds a finalizer to Multi-Cluster Services to improve disablement cleanup and reduce the risk of resource leaks; Provides a Kubernetes-native interface for making services discoverable and accessible across multiple clusters.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/explore-gke-networking-docs-use-cases](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/explore-gke-networking-docs-use-cases)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/network-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/network-overview)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler)

## Supporting Pages

### Explore GKE networking documentation and use cases \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/network-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/network-overview)
- Source ID: `site-docs-root`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- Use case: Achieve high availability across multiple clusters In this use case, you're an SRE running workloads for an ecommerce company in multiple GKE clusters across different regions to improve reliability.
- For example, you might be running large-scale microservices that are sensitive to network latency, or you might need to enforce strict security boundaries between applications in a multi-tenant cluster to meet regulatory compliance requirements.
- Use case: Build a secure and efficient multi-tenant GKE environment As part of a platform engineering team, you provide GKE clusters to multiple application teams.
- Challenge: Centralize network control Scenario: multiple app teams need their own clusters, but networking must be centrally managed.

### Explore GKE networking documentation and use cases \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/explore-gke-networking-docs-use-cases](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/explore-gke-networking-docs-use-cases)
- Source ID: `site-iam-reference`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- Use case: Achieve high availability across multiple clusters In this use case, you're an SRE running workloads for an ecommerce company in multiple GKE clusters across different regions to improve reliability.
- For example, you might be running large-scale microservices that are sensitive to network latency, or you might need to enforce strict security boundaries between applications in a multi-tenant cluster to meet regulatory compliance requirements.
- Use case: Build a secure and efficient multi-tenant GKE environment As part of a platform engineering team, you provide GKE clusters to multiple application teams.
- Challenge: Centralize network control Scenario: multiple app teams need their own clusters, but networking must be centrally managed.

### "About GKE cluster autoscaling \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler)
- Source ID: `site-docs-reference-2`
- Final score: 124
- Re-rank relevance: N/A

Evidence snippets:
- Total nodes example The following command, available in GKE version 1.24 or later, creates an autoscaling multi-zonal cluster with six nodes across three zones initially, with a minimum of three nodes and a maximum of twelve nodes in the node pool across all zones: gcloud container clusters create example-cluster \ --num-nodes=2 \ --location=us-central1-a \ --node-locations=us-central1-a,us-central1-b,us-central1-f \ --enable-autoscaling --total-min-nodes=3 --total-max-nodes=12 In this example, the total size of the cluster can be between three and twelve nodes, regardless of spreading between zones.
- Min and max nodes example The following command creates an autoscaling multi-zonal cluster with six nodes across three zones initially, with a minimum of one node per zone and a maximum of four nodes per zone: gcloud container clusters create example-cluster \ --num-nodes=2 \ --location=us-central1-a \ --node-locations=us-central1-a,us-central1-b,us-central1-f \ --enable-autoscaling --min-nodes=1 --max-nodes=4 In this example, the total size of the cluster can be between three and twelve nodes, spread across the three zones.
- Spot VMs and cluster autoscaler Because cluster autoscaler prefers expanding the least expensive node pools, when your workloads and resource availability allow it, cluster autoscaler adds Spot VMs when scaling up.
- Balancing across zones If your node pool contains multiple managed instance groups with the same instance type, the cluster autoscaler attempts to keep these managed instance group sizes balanced when scaling up .

