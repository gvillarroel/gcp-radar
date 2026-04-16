---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.657Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Control plane auto-upgrade disruption budget"
feature_slug: "control-plane-auto-upgrade-disruption-budget"
latest_feature_date: "2026-03-25"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cluster-disruption-budget"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies"
keywords:
  - "control"
  - "plane"
  - "auto"
  - "upgrade"
  - "disruption"
  - "budget"
  - "gke"
  - "lets"
---

# Control plane auto-upgrade disruption budget

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

GKE lets you control control plane auto-upgrade disruption frequency by setting a cluster disruption budget.

## Extended Definition

GKE lets you control control plane auto-upgrade disruption frequency by setting a cluster disruption budget.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cluster-disruption-budget](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cluster-disruption-budget)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies)

## Supporting Pages

### "Control the frequency of disruption from auto-upgrades \_|\_ Google Kubernetes\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cluster-disruption-budget](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/cluster-disruption-budget)
- Source ID: `site-docs-reference-2`
- Final score: 250
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- What is a cluster disruption budget To help ensure that your cluster isn't disrupted by automatic upgrades too frequently, GKE, by default, applies a cluster disruption budget to set a minimum interval between automatic cluster control plane upgrades .
- Also, if you manually upgrade the cluster control plane, GKE respects the cluster disruption budget when performing the next automatic upgrade.
- Set the cluster disruption budget for automatic upgrades If you have a specific need for controlling the interval between two minor upgrades or two patch upgrades, you can set your own cluster disruption budgets.
- If you want to control this minimum amount of time between automatic cluster upgrades, you can configure the cluster disruption budget.

### "GKE Autopilot overview \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
- Source ID: `site-iam-reference`
- Final score: 183
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Manage and monitor your Autopilot clusters In Autopilot, GKE automatically manages cluster upgrades and maintenance for both the control plane and worker nodes.
- To get a new version before auto-upgrades start, manually upgrade the control plane .
- Release management : all Autopilot clusters are enrolled in a GKE release channel so that your control plane and nodes run on the latest qualified versions in that channel.
- You can manually control the upgrade process in the following ways: To control when GKE can perform automatic upgrades, create maintenance windows .

### "Node upgrade strategies \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/node-pool-upgrade-strategies)
- Source ID: `site-docs-reference-2`
- Final score: 182
- Re-rank relevance: N/A

Evidence snippets:
- You can only upgrade node pools with autoscaled blue-green upgrades if the cluster's control plane is running version 1.34.0-gke.2201000 or later, and cluster autoscaler is enabled.
- Note: Autoscaled blue-green upgrades require the cluster's control plane to run version 1.34.0-gke.2201000 or later, and require cluster autoscaling to be enabled.
- Fast and less disruptive If your workload is sensitive to disruption and you have already set up PodDisruptionBudgets (PDB) and you are not using externalTrafficPolicy: Local , which does not work with parallel node drains, you can increase the speed of the upgrade by using maxSurge=20;maxUnavailable=0 .
- Surge upgrades are optimal for the following scenarios: if you want to optimize for the speed of upgrades. if workloads are more tolerant of disruptions, where graceful termination up to 60 minutes is acceptable. if you want to control costs by minimizing the creation of new nodes.

