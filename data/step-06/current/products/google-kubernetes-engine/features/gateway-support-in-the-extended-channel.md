---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T04:42:56.690Z"
product_name: "Google Kubernetes Engine"
product_slug: "google-kubernetes-engine"
feature_name: "Gateway support in the Extended channel"
feature_slug: "gateway-support-in-the-extended-channel"
latest_feature_date: "2025-08-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/kubernetes-engine/docs/concepts/release-channels"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters"
  - "https://docs.cloud.google.com/kubernetes-engine/docs/release-schedule"
keywords:
  - "gateway"
  - "extended"
  - "channel"
  - "clusters"
  - "enrolled"
  - "can"
  - "use"
  - "gke"
---

# Gateway support in the Extended channel

Product: Google Kubernetes Engine
Coverage: MEDIUM

## Step 02 Summary

Clusters enrolled in the Extended channel can use Gateway with GKE version 1.30 or later.

## Extended Definition

Clusters enrolled in the Extended channel can use Gateway with GKE version 1.30 or later.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/release-channels](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/release-channels)
- [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- [https://docs.cloud.google.com/kubernetes-engine/docs/release-schedule](https://docs.cloud.google.com/kubernetes-engine/docs/release-schedule)

## Supporting Pages

### "About release channels \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/concepts/release-channels](https://docs.cloud.google.com/kubernetes-engine/docs/concepts/release-channels)
- Source ID: `site-docs-reference-2`
- Final score: 154
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- You can't enroll a cluster that uses the following features in the Extended channel: Autopilot cluster mode Alpha clusters Explicitly-enabled Kubernetes beta APIs Gateway (only supported in the Extended channel with GKE version 1.30 or later) Windows Server node pools Config Connector The following multi-cluster features: Managed Cloud Service Mesh Service Directory for GKE Config Sync Policy Controller Multi-cluster Gateway Multi Cluster Ingress Multi-cluster Services Pricing for extended support If you want to enroll a cluster in the Extended channel, ensure that you've reviewed the pricing for extended support .
- How GKE automatically upgrades clusters in the Extended channel For clusters enrolled in the Extended channel, GKE automatically upgrades clusters in the following way: During the standard support period : GKE upgrades clusters to newer patch versions of the same minor version following the same cadence as the Regular channel.
- Limitations for enrolling a cluster in the Extended channel Review the following limitations for clusters that are enrolled in the Extended channel: During the extended support period, GKE updates the Container-Optimized OS milestone that the GKE minor version uses when the milestone reaches the end of support.
- You are responsible for ensuring your cluster adheres to version and version skew policies You can disable node-upgrades at cluster level for up to 30 days by creating maintenance exclusion with the "No upgrades" scope Maintenance windows Available Available Maintenance exclusions Available maintenance exclusion scopes : "No upgrades" (30 days) "No minor upgrades" (until the end of support) "No minor or node upgrades" (until the end of support) Restricted to "No upgrades" scope (30 days) Rollout sequencing Available Not available Long-term support Available with the Extended release channel only Not available Autopilot Available Not available Differences between Rapid-channel clusters and alpha clusters Clusters created using the Rapid release channel are not alpha clusters .

### "GKE release schedule \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/release-schedule](https://docs.cloud.google.com/kubernetes-engine/docs/release-schedule)
- Source ID: `site-docs-reference-2`
- Final score: 109
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- See the following schedule for clusters enrolled in a release channel follow this schedule: Minor version ( release date ) Rapid Regular Stable Extended End of standard support (formerly end of life ) 3 End of extended support 3 Available 1 Auto Upgrade 2 Available 1 Auto Upgrade 2 Available 1 Auto Upgrade 2 Available 1 Auto Upgrade 2 1.29 2024-01-05 2024-04-16 2024-01-26 2024-07-09 2024-06-11 2024-08-09 2024-01-25 2026-01-25 5 2025-04-12 2026-01-25 1.30 2024-04-30 2024-07-30 2024-07-30 2024-09-17 2024-08-13 2024-09-24 2024-07-30 2025-12-03 2025-09-30 2026-07-30 1.31 2024-08-20 2024-09-17 2024-10-22 2025-03-11 2025-01-28 2025-04-30 2024-10-22 2026-05 4 2026-01-16 2026-10-22 1.32 2024-12-17 2025-03-11 2025-02-11 2025-05-13 2025-03-04 2025-07-22 2025-02-11 2026-Q3 4 2026-04-27 2027-02-11 1.33 2025-05-07 2025-06-10 2025-06-04 2025-09-09 2025-07-22 2025-10-14 2025-06-04 2026-Q4 4 2026-08-03 2027-06-03 1.34 2025-09-02 2025-10-28 2025-11-26 2026-03-10 2026-02-18 2026-06 4 2025-12-03 2027-Q2 4 2027-01-25 2027-11-25 1.35 2025-12-24 2026-02-11 2026-02-11 2026-04 4 2026-04-07 2026-06 4 2026-02-11 2027-Q3 4 2027-04-11 2028-02-11 Caution: GKE version 1.29 and earlier have reached end of support and are no longer supported.
- Clusters not enrolled in a release channel follow this availability and support schedule: Available date: The same available date for the Kubernetes minor version on the Regular Channel, and the same available patch versions as the Rapid channel for those minor versions available in the Regular channel Auto upgrade date: The same auto upgrade date for the Kubernetes minor version on the Stable Channel, and the same auto upgrade date for patch versions as the Regular channel End of standard support (formerly known as end of life ): The same end of support date for the Kubernetes minor version on release channels other than the Extended channel Notes Note: Dates are updated monthly and subject to change.
- The patches of a minor version remain available in all release channels until the end of standard support (formerly known as end of life ), except for clusters enrolled in the Extended channel, where the minor version and its patches remain available until the end of extended support .
- Estimated schedule for clusters with no channel (formerly static ) Key Point: GKE automatically upgrades clusters not enrolled in a release channel using automatic upgrade targets from the Stable and Regular channels.

### "MCP Tools Reference: container.googleapis.com \_|\_ Google Kubernetes Engine\

- URL: [https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters](https://docs.cloud.google.com/kubernetes-engine/docs/reference/mcp/tools_list/list_clusters)
- Source ID: `site-api-reference`
- Final score: 109
- Re-rank relevance: N/A

Evidence snippets:
- Otherwise, if no release channel configuration and no version is specified, the cluster is enrolled in the REGULAR channel with its default version. workloadIdentityConfig object ( WorkloadIdentityConfig ) Configuration for the use of Kubernetes Service Accounts in IAM policies. meshCertificates object ( MeshCertificates ) Configuration for issuance of mTLS keys and certificates to Kubernetes pods. costManagementConfig object ( CostManagementConfig ) Configuration for the fine-grained cost management feature. notificationConfig object ( NotificationConfig ) Notification configuration of the cluster. confidentialNodes object ( ConfidentialNodes ) Configuration of Confidential Nodes.
- Default: clusters.autopilot,clusters.createTime,clusters.currentMasterVersion,clusters.currentNodeCount,clusters.currentNodeVersion,clusters.description,clusters.endpoint,clusters.fleet,clusters.location,clusters.name,clusters.network,clusters.nodePools.name,clusters.releaseChannel,clusters.resourceLabels,clusters.selfLink,clusters.status,clusters.statusMessage,clusters.subnetwork,missingZones.
- If left unspecified on cluster creation and a version is specified, the cluster is enrolled in the most mature release channel where the version is available (first checking STABLE, then REGULAR, and finally RAPID).
- GatewayAPIConfig JSON representation { "channel" : enum ( Channel ) } Fields channel enum ( Channel ) The Gateway API release channel to use for Gateway API.

