---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:58:56.216Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Extended release channel"
feature_slug: "extended-release-channel"
latest_feature_date: "2024-08-06"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/release-channels"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/release-schedule"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins"
keywords:
  - "stay"
  - "release"
  - "extended"
  - "channel"
  - "standard"
  - "clusters"
  - "lets"
---

# Extended release channel

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

This release channel lets GKE Standard clusters stay on a minor version longer and receive security patches during extended support; This release channel lets GKE Standard clusters stay on a minor version longer and receive security patches during extended support.

## Extended Definition

This release channel lets GKE Standard clusters stay on a minor version longer and receive security patches during extended support; This release channel lets GKE Standard clusters stay on a minor version longer and receive security patches during extended support.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/release-channels](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/release-channels)
- [https://docs.cloud.google.com/kubernetes-engine/docs/release-schedule](https://docs.cloud.google.com/kubernetes-engine/docs/release-schedule)
- [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)

## Supporting Pages

### "About release channels \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/release-channels](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/release-channels)
- Source ID: `site-docs-reference-2`
- Final score: 241
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You are responsible for ensuring your cluster adheres to version and version skew policies You can disable node-upgrades at cluster level for up to 30 days by creating maintenance exclusion with the "No upgrades" scope Maintenance windows Available Available Maintenance exclusions Available maintenance exclusion scopes : "No upgrades" (30 days) "No minor upgrades" (until the end of support) "No minor or node upgrades" (until the end of support) Restricted to "No upgrades" scope (30 days) Rollout sequencing Available Not available Long-term support Available with the Extended release channel only Not available Autopilot Available Not available Differences between Rapid-channel clusters and alpha clusters Clusters created using the Rapid release channel are not alpha clusters .
- How GKE automatically upgrades clusters in the Extended channel For clusters enrolled in the Extended channel, GKE automatically upgrades clusters in the following way: During the standard support period : GKE upgrades clusters to newer patch versions of the same minor version following the same cadence as the Regular channel.
- Clusters not enrolled in a release channel We don't recommend this configuration option due to the limitations with clusters not enrolled in release channels , but you can choose not to enroll a Standard cluster in a release channel (known as no channel and formerly as static ).
- Autopilot Standard Use release channels for Google Kubernetes Engine (GKE) to pick versions for your clusters with your chosen balance between feature availability and stability.

### "GKE release schedule \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/release-schedule](https://docs.cloud.google.com/kubernetes-engine/docs/release-schedule)
- Source ID: `site-docs-reference-2`
- Final score: 177
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- See the following schedule for clusters enrolled in a release channel follow this schedule: Minor version ( release date ) Rapid Regular Stable Extended End of standard support (formerly end of life ) 3 End of extended support 3 Available 1 Auto Upgrade 2 Available 1 Auto Upgrade 2 Available 1 Auto Upgrade 2 Available 1 Auto Upgrade 2 1.29 2024-01-05 2024-04-16 2024-01-26 2024-07-09 2024-06-11 2024-08-09 2024-01-25 2026-01-25 5 2025-04-12 2026-01-25 1.30 2024-04-30 2024-07-30 2024-07-30 2024-09-17 2024-08-13 2024-09-24 2024-07-30 2025-12-03 2025-09-30 2026-07-30 1.31 2024-08-20 2024-09-17 2024-10-22 2025-03-11 2025-01-28 2025-04-30 2024-10-22 2026-05 4 2026-01-16 2026-10-22 1.32 2024-12-17 2025-03-11 2025-02-11 2025-05-13 2025-03-04 2025-07-22 2025-02-11 2026-Q3 4 2026-04-27 2027-02-11 1.33 2025-05-07 2025-06-10 2025-06-04 2025-09-09 2025-07-22 2025-10-14 2025-06-04 2026-Q4 4 2026-08-03 2027-06-03 1.34 2025-09-02 2025-10-28 2025-11-26 2026-03-10 2026-02-18 2026-06 4 2025-12-03 2027-Q2 4 2027-01-25 2027-11-25 1.35 2025-12-24 2026-02-11 2026-02-11 2026-04 4 2026-04-07 2026-06 4 2026-02-11 2027-Q3 4 2027-04-11 2028-02-11 Caution: GKE version 1.29 and earlier have reached end of support and are no longer supported.
- Clusters not enrolled in a release channel follow this availability and support schedule: Available date: The same available date for the Kubernetes minor version on the Regular Channel, and the same available patch versions as the Rapid channel for those minor versions available in the Regular channel Auto upgrade date: The same auto upgrade date for the Kubernetes minor version on the Stable Channel, and the same auto upgrade date for patch versions as the Regular channel End of standard support (formerly known as end of life ): The same end of support date for the Kubernetes minor version on release channels other than the Extended channel Notes Note: Dates are updated monthly and subject to change.
- The patches of a minor version remain available in all release channels until the end of standard support (formerly known as end of life ), except for clusters enrolled in the Extended channel, where the minor version and its patches remain available until the end of extended support .
- On/after the auto upgrades start date, clusters subscribed to release channels will be auto upgraded to the referenced minor version. ↩ End of support : For clusters in the Rapid, Regular, Stable channels, or no channel, new features, security patches, or bug fixes will be made available for this minor version until its end of standard support (formerly known as end of life ) date.

### "Security bulletins \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins](https://docs.cloud.google.com/kubernetes-engine/docs/security-bulletins)
- Source ID: `site-docs-reference-2`
- Final score: 163
- Re-rank relevance: N/A

Evidence snippets:
- For security purposes, even if you have node auto-upgrades enabled, we recommend that you manually upgrade your node pools to one of the following GKE versions: Container-Optimized OS: 1.21.14-gke.7100 and later Ubuntu: 1.21.14-gke.9400 and later 1.22.15-gke.2400 and later 1.23.13-gke.800 and later 1.24.7-gke.800 and later 1.25.3-gke.700 and later A recent feature of release channels lets you apply a patch without having to unsubscribe from a channel.
- For security purposes, even if you have node auto-upgrades enabled, we recommend that you manually upgrade your node pools to one of the following GKE versions: 1.22.15-gke.2300 and later 1.23.13-gke.700 and later 1.24.7-gke.700 and later A recent feature of release channels lets you apply a patch without having to unsubscribe from a channel.
- This lets you secure your nodes until the new version becomes the default for your specific release channel If your cluster uses in-cluster Cloud Service Mesh, you must manually upgrade to one of the following versions ( release notes ): 1.17.8-asm.8 1.18.6-asm.2 1.19.5-asm.4 What vulnerabilities are being addressed by this patch?
- For security purposes, even if you have node auto-upgrade enabled, we recommend that you manually upgrade your clusters and node pools to one of the following GKE versions: 1.22.17-gke.3100 1.23.16-gke.200 1.24.9-gke.3200 A recent feature of release channels allows you to apply a patch without having to unsubscribe from a channel.

