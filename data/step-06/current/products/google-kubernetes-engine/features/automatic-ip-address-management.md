---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.677Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Automatic IP address management"
feature_slug: "automatic-ip-address-management"
latest_feature_date: "2025-10-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler"
keywords:
  - "automatic"
  - "ip"
  - "address"
  - "management"
  - "dynamically"
  - "adds"
  - "removes"
  - "ranges"
---

# Automatic IP address management

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Automatic IP address management dynamically adds or removes IP ranges for nodes and Pods as a GKE cluster scales.

## Extended Definition

Automatic IP address management dynamically adds or removes IP ranges for nodes and Pods as a GKE cluster scales.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler)

## Supporting Pages

### "GKE Autopilot overview \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
- Source ID: `site-iam-reference`
- Final score: 125
- Re-rank relevance: N/A

Evidence snippets:
- Resource management : if you deploy workloads without setting resource values such as CPU and memory, Autopilot automatically sets pre-configured default values and modifies your resource requests at the workload level.
- Node management : Google manages worker nodes, so you don't need to create new nodes to accommodate your workloads or configure automatic upgrades and repairs.
- To restrict control plane access to specific IP address ranges, use control plane authorized networks .
- To learn how to optimize your IP address management, read the GKE address management series .

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- For managed GKE on AWS, we recommend that you upgrade your user clusters and nodepool to one of the following versions: 1.21.11-gke.100 For k-lite GKE on AWS, we recommend that you upgrade your AWSManagementService, AWSCluster and AWSNodePool objects to the following version: 1.21.11-gke.100 1.20.15-gke.2200 What vulnerabilities are addressed by this patch?
- The rules created in error have been automatically modified with the appropriate source ranges (130.211.0.0/22, 35.191.0.0/16) to allow the ingress traffic coming from Google Cloud health check infrastructure, and, optionally, your proxy-only subnet ranges for Internal Gateways.
- However, depending on your subnet configuration , machines can automatically get a public IP address during provisioning.
- Scope down the rule : Restrict inbound access on port 22 to only the specific IP addresses or ranges that require it.

### "About GKE cluster autoscaling \_|\_ Google Kubernetes Engine (GKE) \_|\_\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler)
- Source ID: `site-docs-reference-2`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- For example, the following node affinity rule declares a preference for scheduling Pods on nodes that are backed by Spot VMs (GKE automatically adds the cloud.google.com/gke-spot=true label to these types of nodes): affinity : nodeAffinity : preferredDuringSchedulingIgnoredDuringExecution : - weight : 1 preference : matchExpressions : set to "true".
- When you use --enable-autoscaling , GKE scales the node pool based on its type, as follows: Single-host TPU slice node pool: GKE adds or removes TPU nodes in the existing node pool.
- GKE automatically applies this label to Spot VMs. - key : cloud.google.com/gke-spot operator : Equal values : - true To learn more about using node affinities, taints, and tolerations to schedule Spot VMs, see the Running a GKE application on spot nodes with on-demand nodes as fallback blog.
- With Autopilot clusters, you don't need to worry about provisioning nodes or managing node pools because node pools are automatically provisioned through node auto-provisioning , and are automatically scaled to meet the requirements of your workloads.

