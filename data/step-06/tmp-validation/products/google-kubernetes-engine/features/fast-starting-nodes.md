---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.147Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Fast-starting nodes"
feature_slug: "fast-starting-nodes"
latest_feature_date: "2025-11-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/fast-starting-nodes"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview"
keywords:
  - "compatible"
  - "fast"
  - "provision"
  - "starting"
  - "autopilot"
  - "nodes"
---

# Fast-starting nodes

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE can provision compatible Autopilot workloads on fast-starting nodes on a best-effort basis to reduce startup time; GKE now provisions fast-starting nodes in Autopilot mode for compatible G2 workloads with NVIDIA L4 GPUs.

## Extended Definition

GKE can provision compatible Autopilot workloads on fast-starting nodes on a best-effort basis to reduce startup time; GKE now provisions fast-starting nodes in Autopilot mode for compatible G2 workloads with NVIDIA L4 GPUs.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/fast-starting-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/fast-starting-nodes)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)

## Supporting Pages

### "About quicker workload startup with fast-starting nodes \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/fast-starting-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/fast-starting-nodes)
- Source ID: `site-docs-reference-2`
- Final score: 297
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Customer-managed encryption keys (CMEK) Spot VMs Placement policies Multi-network support Autopilot GPU workloads Requesting compatible GPUs in Autopilot mode results in up to four times faster node startup time and up to two times faster Pod scheduling time than similar requests in GKE Standard mode, because the Autopilot GPU workloads can use fast-starting nodes.
- Use one of the following compute resources which are described in the respective tables in the Configuration requirements for eligible compute resources section: Autopilot container-optimized compute platform G2 machine series A2 machine series Limitations The following features aren't compatible with fast-starting GKE nodes.
- Autopilot container-optimized compute platform See the following requirements for GKE to provision fast-starting nodes with the Autopilot container-optimized compute platform.
- Fast-starting nodes are used in GKE with Autopilot mode on a best-effort basis when workloads use compatible configurations.

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- To find all clusters originally created with public nodes, use this Cloud Asset Inventory query in the project or organization: SELECT resource.data.name AS cluster name, resource.parent AS project name, resource.data.privateClusterConfig.enablePrivateNodes FROM container googleapis com Cluster WHERE resource.data.privateClusterConfig.enablePrivateNodes is null OR resource.data.privateClusterConfig.enablePrivateNodes = false Disallow SSH to the cluster nodes 2024-07-02 Update: This section applies to both Autopilot and Standard clusters.
- None GCP-2026-001 Published: 2026-01-07 Reference: CVE-2025-40214 GKE Description Severity The following vulnerabilities were discovered in the Linux kernel that can lead to a privilege escalation on Container-Optimized OS nodes: CVE-2025-40214 GKE Standard and Autopilot clusters are impacted.
- None GCP-2024-036 Published: 2024-06-18 Reference: CVE-2024-26584 GKE Description Severity The following vulnerabilities were discovered in the Linux kernel that can lead to a privilege escalation on Container-Optimized OS nodes: CVE-2024-26584 GKE Standard and Autopilot clusters are impacted.
- GKE Updated: 2024-07-19 Description Severity The following vulnerabilities were discovered in the Linux kernel that can lead to a privilege escalation on Container-Optimized OS and Ubuntu nodes: CVE-2023-52654 CVE-2023-52656 GKE Standard and Autopilot clusters are impacted.

### "GKE Autopilot overview \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
- Source ID: `site-iam-reference`
- Final score: 132
- Re-rank relevance: N/A

Evidence snippets:
- This is because the new Autopilot cluster starts with zero usable nodes upon creation and waits until you deploy a workload to provision additional nodes.
- Scaling : when your workloads experience high load and you add more Pods to accommodate the traffic, such as with Kubernetes Horizontal Pod Autoscaling, GKE automatically provisions new nodes for those Pods, and automatically expands the resources in your existing nodes based on need.
- Deploy workloads in Autopilot mode You can run compatible Kubernetes workloads in Autopilot mode so that GKE manages scaling, efficient scheduling, and the underlying infrastructure.
- The container-optimized compute platform uses GKE Autopilot nodes that can dynamically resize while running, designed to scale up from fractions of a CPU with minimal disruptions.

