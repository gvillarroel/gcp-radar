---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.162Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Accelerated patch auto-upgrades"
feature_slug: "accelerated-patch-auto-upgrades"
latest_feature_date: "2025-08-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/release-channels"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview"
keywords:
  - "accelerated"
  - "channels"
  - "patch"
  - "receive"
  - "release"
  - "upgrades"
  - "auto"
---

# Accelerated patch auto-upgrades

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Release channels can receive patch versions as soon as they are available, before they become auto-upgrade targets; Release channels can receive patch versions as soon as they are available, before they become auto-upgrade targets.

## Extended Definition

Release channels can receive patch versions as soon as they are available, before they become auto-upgrade targets; Release channels can receive patch versions as soon as they are available, before they become auto-upgrade targets.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/release-channels](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/release-channels)
- [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)

## Supporting Pages

### "About release channels \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/release-channels](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/release-channels)
- Source ID: `site-docs-reference-2`
- Final score: 276
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Upgrade timing Aligned with the respective release channel Same auto-upgrade start date as the Stable channel for minor versions Same available minor versions, patch auto-upgrade versions, and default version as the Regular channel Same available patch versions as the Rapid channel for those minor versions available in the Regular channel Accelerated patch auto-upgrades Available Not available Control of node pool disruption Node auto-upgrades by default You can disable node auto-upgrades at cluster level until the minor version end of support date by creating a maintenance exclusion with the "No minor or node upgrades" scope You can disable node auto-repair for a Standard cluster node pool Node auto-upgrades by default You can disable node-auto upgrades at the node pool level.
- If you want to receive patch upgrades as soon as the version is available and before GKE sets the version as an auto-upgrade target in the channel, you can use accelerated patch auto-upgrades.
- Accelerated patch auto-upgrades GKE first introduces a new patch version to a release channel by making the version available for new cluster creation and manual upgrades.
- GKE automatically upgrades all clusters over time, including those not enrolled in a release channel, to ensure that they receive security updates, fixes to known issues, new features, and run a supported Kubernetes version.

### Harden your cluster's security \_|\_ GKE security \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster](https://docs.cloud.google.com/kubernetes-engine/docs/how-to/hardening-your-cluster)
- Source ID: `site-docs-reference-2`
- Final score: 174
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use release channels, accelerated patch auto-upgrades, and automatic node upgrades.
- For clusters that are in a release channel, enable accelerated patch auto-upgrades to get security patch versions as soon as they're available in your release channel.
- For all clusters, GKE automatically upgrades the control plane to more stable minor versions and patch versions.
- For Standard clusters that aren't in a release channel, enable automatic node upgrades .

### "GKE Autopilot overview \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview)
- Source ID: `site-iam-reference`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- GKE version upgrades All Autopilot clusters are enrolled in a GKE release channel .
- You can run an entire cluster in Autopilot mode, so that the cluster and all of its workloads follow GKE best practices and recommendations for scaling, security, upgrades, and node configuration.
- Release management : all Autopilot clusters are enrolled in a GKE release channel so that your control plane and nodes run on the latest qualified versions in that channel.
- By default, Autopilot clusters are enrolled in the Regular release channel, but you can select a different channel that meets your stability and functionality needs.

