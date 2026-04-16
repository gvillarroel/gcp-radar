---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.145Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "N4A machine series on GKE Autopilot"
feature_slug: "n4a-machine-series-on-gke-autopilot"
latest_feature_date: "2025-12-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes"
keywords:
  - "series"
  - "autopilot"
  - "supports"
  - "types"
  - "machine"
  - "clusters"
---

# N4A machine series on GKE Autopilot

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE Autopilot supports N4A machine types on clusters running version 1.34.1-gke.3403001 or later.

## Extended Definition

GKE Autopilot supports N4A machine types on clusters running version 1.34.1-gke.3403001 or later.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)

## Supporting Pages

### "Encrypt workload data in-use with Confidential GKE Nodes \_|\_ GKE security\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/confidential-gke-nodes)
- Source ID: `site-iam-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Cluster-level In Autopilot clusters, both of the following costs apply: Balanced compute class pricing, because the default machine series in the cluster changes to N2D.
- Pricing The following pricing applies, depending on how you configure Confidential GKE Nodes: Confidential GKE Nodes pricing Workload-level In Autopilot workloads, both of the following costs apply: Autopilot node-based billing for the Compute Engine machine series that the Pods run on.
- When you enable Confidential GKE Nodes, the default machine series in the Autopilot cluster changes to N2D.
- Specify a machine series that supports the Confidential Computing technology that you specified.

### "Run workloads in Autopilot mode in Standard clusters \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/autopilot-classes-standard-clusters)
- Source ID: `site-docs-reference-2`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- Use a custom Autopilot ComputeClass in situations like the following: Your workloads require specific hardware to run optimally, like GPUs or a certain Compute Engine machine series.
- Create a new custom Autopilot ComputeClass Save one of the following example ComputeClass manifests: Select specific machines : apiVersion : cloud.google.com/v1 kind : ComputeClass metadata : name : n4-class spec : autopilot : enabled : true priorities : - machineFamily : n4 spot : true minCores : 16 - machineFamily : n4 spot : true - machineFamily : n4 spot : false activeMigration : optimizeRulePriority : true This manifest includes the following fields: autopilot : enables Autopilot mode for the ComputeClass.
- If you specify this field in a ComputeClass that you deploy to an Autopilot cluster, GKE ignores the field. priorities : defines an array of three different N4 machine family configurations. activeMigration : lets GKE migrate Pods to configurations that are higher in the list of priorities when resources become available.
- For more information about the implications of running an Autopilot workload in your Standard clusters, including differences that you might notice when you deploy those workloads, see About Autopilot mode workloads in GKE Standard .

### "About custom ComputeClasses \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/about-custom-compute-classes)
- Source ID: `site-docs-reference-2`
- Final score: 160
- Re-rank relevance: N/A

Evidence snippets:
- GKE takes one of the following actions: In Autopilot clusters, GKE places the Pod on a new or existing node, regardless of the node machine configuration.
- This field only supports a list of node pools; you can't specify additional machine properties like the machine series in the same priority rule.
- In Standard clusters that use node pool auto-creation, GKE might create a new node pool that uses the default E2 machine series to place the Pod.
- Earlier generations of a machine series might not support the same storage types as newer generations.

