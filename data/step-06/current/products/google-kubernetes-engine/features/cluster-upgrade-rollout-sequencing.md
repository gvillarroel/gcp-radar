---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.782Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Cluster upgrade rollout sequencing"
feature_slug: "cluster-upgrade-rollout-sequencing"
latest_feature_date: "2023-08-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/rollout-sequencing-custom-stages/about-rollout-sequencing"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/release-channels"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql"
keywords:
  - "cluster"
  - "upgrade"
  - "rollout"
  - "sequencing"
  - "sequences"
  - "upgrades"
  - "across"
  - "fleets"
---

# Cluster upgrade rollout sequencing

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Sequences cluster upgrades across fleets or scopes.

## Extended Definition

Sequences cluster upgrades across fleets or scopes.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/rollout-sequencing-custom-stages/about-rollout-sequencing](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/rollout-sequencing-custom-stages/about-rollout-sequencing)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/release-channels](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/release-channels)
- [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql)

## Supporting Pages

### "About rollout sequencing with custom stages \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/rollout-sequencing-custom-stages/about-rollout-sequencing](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/rollout-sequencing-custom-stages/about-rollout-sequencing)
- Source ID: `site-docs-reference-2`
- Final score: 270
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Overview GKE rollout sequencing lets you define a specific, ordered sequence for cluster upgrades across environments—such as first upgrading the clusters in the development environment, then the testing environment, and finally production.
- Fleet-based rollout sequencing provides a stable and supported method for progressively rolling out upgrades across environments (such as testing, staging, and production), and uses a linear sequence of fleets.
- You can manage the order of automatic cluster upgrades across Google Kubernetes Engine (GKE) clusters in multiple environments by using rollout sequencing.
- How rollout sequencing works with other upgrade features Rollout sequencing works together with other GKE upgrade features: Maintenance windows and exclusions : you can still use maintenance windows and exclusions to control when upgrades can and cannot occur on your clusters.

### "Deploy a stateful MySQL cluster on GKE \_|\_ Kubernetes Engine \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql](https://docs.cloud.google.com/kubernetes-engine/docs/tutorials/stateful-workloads/mysql)
- Source ID: `site-docs-root-2`
- Final score: 147
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Plan for GKE upgrades You can take proactive steps and set configurations to mitigate risk and facilitate a smoother cluster upgrade when you are running stateful services, including: Standard clusters : Follow GKE best practices for upgrading clusters .
- Follow this tutorial to learn how to deploy a MySQL InnoDB Cluster and a MySQL InnoDB ClusterSet , in addition to MySQL Router middleware on your GKE cluster, and how to perform upgrades.
- Manage GKE and MySQL InnoDB Cluster upgrades Updates for both MySQL and Kubernetes are released on a regular schedule.
- This is useful for both steady state operations of your stateful services and for cluster upgrades.

### "About release channels \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/release-channels](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/release-channels)
- Source ID: `site-docs-reference-2`
- Final score: 142
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Learn about managing automatic cluster upgrades across environments with rollout sequencing .
- You are responsible for ensuring your cluster adheres to version and version skew policies You can disable node-upgrades at cluster level for up to 30 days by creating maintenance exclusion with the "No upgrades" scope Maintenance windows Available Available Maintenance exclusions Available maintenance exclusion scopes : "No upgrades" (30 days) "No minor upgrades" (until the end of support) "No minor or node upgrades" (until the end of support) Restricted to "No upgrades" scope (30 days) Rollout sequencing Available Not available Long-term support Available with the Extended release channel only Not available Autopilot Available Not available Differences between Rapid-channel clusters and alpha clusters Clusters created using the Rapid release channel are not alpha clusters .
- We recommend enrolling your cluster in a release channel, as this gives you the most control with regards to the scope of maintenance exclusions —preventing specific types of upgrades instead of all upgrades—and sequencing the rollout of cluster upgrades .
- Upgrade timing Aligned with the respective release channel Same auto-upgrade start date as the Stable channel for minor versions Same available minor versions, patch auto-upgrade versions, and default version as the Regular channel Same available patch versions as the Rapid channel for those minor versions available in the Regular channel Accelerated patch auto-upgrades Available Not available Control of node pool disruption Node auto-upgrades by default You can disable node auto-upgrades at cluster level until the minor version end of support date by creating a maintenance exclusion with the "No minor or node upgrades" scope You can disable node auto-repair for a Standard cluster node pool Node auto-upgrades by default You can disable node-auto upgrades at the node pool level.

