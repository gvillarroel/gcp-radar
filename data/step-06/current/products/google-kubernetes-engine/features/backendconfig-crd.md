---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.963Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "BackendConfig CRD"
feature_slug: "backendconfig-crd"
latest_feature_date: "2020-07-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/rollout-sequencing-custom-stages/about-rollout-sequencing"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/release-channels"
keywords:
  - "backendconfig"
  - "crd"
  - "generally"
  - "available"
  - "makes"
  - "features"
  - "across"
  - "ingress"
---

# BackendConfig CRD

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

BackendConfig CRD is generally available and makes BackendConfig features available across Ingress types.

## Extended Definition

BackendConfig CRD is generally available and makes BackendConfig features available across Ingress types.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/rollout-sequencing-custom-stages/about-rollout-sequencing](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/rollout-sequencing-custom-stages/about-rollout-sequencing)
- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/release-channels](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/release-channels)

## Supporting Pages

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 141
- Re-rank relevance: N/A

Evidence snippets:
- This issue affects the following GKE versions: 1.18.19-gke.1400 to 1.18.20-gke.5100 (exclusive) 1.19.10-gke.700 to 1.19.14-gke.300 (exclusive) 1.20.6-gke.700 to 1.20.9-gke.900 (exclusive) 1.21 to 1.21.1-gke.2700 (exclusive) If you do not configure Google Cloud Armor on your Ingress resources via the BackendConfig , then this issue does not affect your clusters.
- If you configure Google Cloud Armor on your Ingress resources via the BackendConfig and you've found that you're impacted through the steps above, re-enable Google Cloud Armor by pushing an update to your current BackendConfig resource with the cloud.google.com/v1 API version.
- GKE Updated: 2024-07-03 Description Severity 2024-07-03 Update: An expedited rollout is in progress and is expected to make new patch versions available across all zones by July 3, 2024 at 5 PM US and Canadian Pacific Daylight Time (UTC-7).
- 2024-07-03 Update: Patch versions for GKE An expedited rollout is in progress and is expected to make new patch versions available across all zones by July 3, 2024 at 5 PM US and Canadian Pacific Daylight Time (UTC-7).

### "About rollout sequencing with custom stages \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/rollout-sequencing-custom-stages/about-rollout-sequencing](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/rollout-sequencing-custom-stages/about-rollout-sequencing)
- Source ID: `site-docs-reference-2`
- Final score: 92
- Re-rank relevance: N/A

Evidence snippets:
- Fleet-based rollout sequencing (GA) : this version is the generally available and recommended strategy for most production use cases.
- GKE also provides a generally available version of rollout sequencing that uses a more linear model without custom stages.
- Pre-GA features are available "as is" and might have limited support.
- The stage targets clusters with a label-selector named canary in the prod fleet: Figure: A rollout sequence with custom stages When a new upgrade target becomes available in the release channel where all clusters in this sequence are enrolled, GKE upgrades the clusters in the Testing fleet first, followed by clusters in the Staging fleet.

### "About release channels \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/release-channels](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/release-channels)
- Source ID: `site-docs-reference-2`
- Final score: 88
- Re-rank relevance: N/A

Evidence snippets:
- All channels offer supported releases of GKE and are considered generally available (GA), although individual features might not always be GA, as marked.
- In your pre-production environments, use the Rapid channel for newer versions where you can test features as soon as they are generally available.
- You can't enroll a cluster that uses the following features in the Extended channel: Autopilot cluster mode Alpha clusters Explicitly-enabled Kubernetes beta APIs Gateway (only supported in the Extended channel with GKE version 1.30 or later) Windows Server node pools Config Connector The following multi-cluster features: Managed Cloud Service Mesh Service Directory for GKE Config Sync Policy Controller Multi-cluster Gateway Multi Cluster Ingress Multi-cluster Services Pricing for extended support If you want to enroll a cluster in the Extended channel, ensure that you've reviewed the pricing for extended support .
- Upgrade timing Aligned with the respective release channel Same auto-upgrade start date as the Stable channel for minor versions Same available minor versions, patch auto-upgrade versions, and default version as the Regular channel Same available patch versions as the Rapid channel for those minor versions available in the Regular channel Accelerated patch auto-upgrades Available Not available Control of node pool disruption Node auto-upgrades by default You can disable node auto-upgrades at cluster level until the minor version end of support date by creating a maintenance exclusion with the "No minor or node upgrades" scope You can disable node auto-repair for a Standard cluster node pool Node auto-upgrades by default You can disable node-auto upgrades at the node pool level.

