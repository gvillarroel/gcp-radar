---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.305Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "GKE cluster cost estimator"
feature_slug: "gke-cluster-cost-estimator"
latest_feature_date: "2022-05-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/reducing-costs-by-scaling-down-gke-off-hours"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster"
keywords:
  - "estimator"
  - "estimate"
  - "during"
  - "creation"
  - "cost"
  - "cluster"
---

# GKE cluster cost estimator

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE can estimate cluster cost during cluster creation using the cluster cost widget.

## Extended Definition

GKE can estimate cluster cost during cluster creation using the cluster cost widget.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/reducing-costs-by-scaling-down-gke-off-hours](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/reducing-costs-by-scaling-down-gke-off-hours)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)

## Supporting Pages

### "Reducing costs by scaling down GKE clusters during off-peak hours \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/reducing-costs-by-scaling-down-gke-off-hours](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/reducing-costs-by-scaling-down-gke-off-hours)
- Source ID: `site-docs-reference-required-5`
- Final score: 153
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Application hosting Google Kubernetes Engine (GKE) Documentation Guides Send feedback Reducing costs by scaling down GKE clusters during off-peak hours Stay organized with collections Save and categorize content based on your preferences.
- Scaling down a cluster if you have committed use discounts This tutorial explains how to reduce costs by scaling down your GKE clusters to the minimum during off-peak hours.
- Costs In this document, you use the following billable components of Google Cloud: Cloud Monitoring Artifact Registry Google Kubernetes Engine To generate a cost estimate based on your projected usage, use the pricing calculator .
- However, in other cases, sharp changes in traffic patterns require more finely tuned autoscale configurations to avoid system instability during scale-ups and to avoid overprovisioning the cluster.

### "About GKE cluster autoscaling \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler)
- Source ID: `site-docs-reference-2`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- GKE will try to provision these VMs first. spot : true gpu : type : nvidia-l4 count : 2 If GKE can't satisfy the preceding rule, request on-demand nodes with the same configuration - machineType : g2-standard-24 spot : false gpu : type : nvidia-l4 count : 2 nodePoolAutoCreation : enabled : true Configures active migration behavior for workloads using this ComputeClass. activeMigration : optimizeRulePriority : true Enables Cluster Autoscaler to attempt to migrate workloads to Spot VMs if Spot capacity becomes available and the workload is currently running on an on-demand VM (based on the priority rules in this example).
- However, the following conditions apply to this behavior of cluster autoscaler: The cluster autoscaler takes into account the reduced cost of node pools that contain Spot VMs, which are preemptible.
- Cluster autoscaler considers the relative cost of the instance types in the various pools, and attempts to expand the least expensive possible node pool.
- Nodes that are created by the cluster autoscaler are assigned labels specified with --node-labels at the time of node pool creation.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/get_cluster)
- Source ID: `site-api-reference`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- Format: projects/{project}/regions/{region}/subnetworks/{subnetwork} If the cluster is associated with multiple subnetworks, the subnetwork can be either: - A user supplied subnetwork name during node pool creation (e.g., my-subnet ).
- Tags are used to identify valid sources or targets for network firewalls and are specified by the client during cluster or node pool creation.
- Only populated if enabled. privateEndpointSubnetwork string Subnet to provision the master's private endpoint during cluster creation.
- Tags are used to identify valid sources or targets for network firewalls and are specified by the client during cluster creation.

